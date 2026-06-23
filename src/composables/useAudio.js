import { ref, computed } from 'vue'
import { playlist } from '../data/content.js'

// Singleton audio player instance and state shared across all components
const audio = new Audio()
const isPlaying = ref(false)
const currentIndex = ref(0)
const currentTime = ref(0)
const duration = ref(0)
const isWaiting = ref(false) // tracks if the track is loading/buffering

let isFirstPlay = true

// Set initial track
if (playlist.tracks && playlist.tracks.length > 0) {
  audio.src = playlist.tracks[currentIndex.value].src
  const setInitialTime = () => {
    if (currentIndex.value === 0 && isFirstPlay) {
      try {
        audio.currentTime = 40
      } catch (e) {}
    }
  }
  audio.addEventListener('loadedmetadata', setInitialTime, { once: true })
  try {
    if (currentIndex.value === 0 && isFirstPlay) {
      audio.currentTime = 40
    }
  } catch (e) {}
}

// Audio Event Listeners
audio.addEventListener('timeupdate', () => {
  currentTime.value = audio.currentTime
  duration.value = audio.duration || 0
})

audio.addEventListener('ended', () => {
  next()
})

audio.addEventListener('waiting', () => {
  isWaiting.value = true
})

audio.addEventListener('playing', () => {
  isWaiting.value = false
  isPlaying.value = true
})

audio.addEventListener('pause', () => {
  isPlaying.value = false
})

audio.addEventListener('canplay', () => {
  isWaiting.value = false
})

function togglePlay() {
  if (isPlaying.value) {
    audio.pause()
  } else {
    isWaiting.value = true
    audio.play().catch(() => {
      isWaiting.value = false
    })
  }
}

function selectTrack(i) {
  if (i < 0 || i >= playlist.tracks.length) return
  currentIndex.value = i
  isWaiting.value = true
  audio.src = playlist.tracks[i].src
  
  const startTime = (i === 0 && isFirstPlay) ? 40 : 0
  if (i === 0) {
    isFirstPlay = false
  }
  
  const setTime = () => {
    try {
      audio.currentTime = startTime
    } catch (e) {}
  }
  audio.addEventListener('loadedmetadata', setTime, { once: true })
  
  try {
    audio.currentTime = startTime
  } catch (e) {}

  audio.play()
    .then(() => {
      isPlaying.value = true
    })
    .catch(() => {
      isWaiting.value = false
    })
}

function next() {
  selectTrack((currentIndex.value + 1) % playlist.tracks.length)
}

function prev() {
  selectTrack((currentIndex.value - 1 + playlist.tracks.length) % playlist.tracks.length)
}

function seek(ratio) {
  if (audio.duration) {
    audio.currentTime = ratio * audio.duration
  }
}

export function useAudio() {
  return {
    audio,
    isPlaying,
    currentIndex,
    currentTime,
    duration,
    isWaiting,
    currentTrack: computed(() => playlist.tracks[currentIndex.value]),
    togglePlay,
    selectTrack,
    next,
    prev,
    seek,
  }
}
