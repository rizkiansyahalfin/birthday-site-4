<script setup>
import { onMounted, ref } from 'vue'
import { useReveal } from '../../composables/useReveal.js'
import { closing } from '../../data/content.js'

const emit = defineEmits(['arrived', 'left'])
const sectionRef = useReveal()

const candleLit = ref(true)
const smokePuff = ref(false)
const particles = ref([])
let particleId = 0

function blowCandle() {
  if (!candleLit.value) return
  candleLit.value = false
  smokePuff.value = true
  
  // Spawn smoke and sparkle particles
  spawnSmokeParticles()
  
  // Reset smoke puff after transition
  setTimeout(() => {
    smokePuff.value = false
  }, 1500)
}

function spawnSmokeParticles() {
  const sparkEmojis = ['✨', '💖', '🌸', '💨', '💫', '💕']
  for (let i = 0; i < 8; i++) {
    const angle = -Math.PI / 2 + (Math.random() * 1.2 - 0.6) // mostly upwards
    const distance = Math.random() * 50 + 20
    const destX = Math.cos(angle) * distance
    const destY = Math.sin(angle) * distance
    
    const id = particleId++
    const p = {
      id,
      emoji: sparkEmojis[Math.floor(Math.random() * sparkEmojis.length)],
      style: {
        position: 'absolute',
        top: '24px', // Flame center height relative to parent SVG
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: Math.random() * 6 + 12 + 'px',
        pointerEvents: 'none',
        zIndex: 50,
        '--dx': destX + 'px',
        '--dy': destY + 'px',
      }
    }
    particles.value.push(p)
    
    setTimeout(() => {
      particles.value = particles.value.filter(item => item.id !== id)
    }, 1200)
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        emit('arrived')
      } else {
        emit('left')
      }
    },
    { threshold: 0.2 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<template>
  <section ref="sectionRef" class="reveal relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
    <p class="text-rose-300 font-ui text-xs tracking-[0.2em] uppercase mb-8">🌸 {{ closing.eyebrow }} 🌸</p>

    <h2 class="font-display text-cream leading-[1.1] mb-8">
      <span class="block text-4xl sm:text-5xl md:text-6xl">{{ closing.titleLine1 }}</span>
      <span class="block italic text-rose-300 text-5xl sm:text-6xl md:text-7xl my-1">{{ closing.titleAccent }}</span>
      <span class="block text-4xl sm:text-5xl md:text-6xl">{{ closing.titleLine2 }}</span>
    </h2>

    <p class="max-w-xl text-rose-100/70 font-accent text-base sm:text-lg leading-relaxed mb-6">
      {{ closing.message }}
    </p>

    <!-- Interactive Cupcake with Blowable Candle -->
    <div class="relative w-32 h-44 my-6 flex flex-col items-center justify-center select-none">
      <div 
        class="relative cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 z-10"
        @click="blowCandle"
        aria-label="Blow out candle"
      >
        <svg viewBox="0 0 100 120" class="w-24 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Candle flame -->
          <g v-if="candleLit" class="animate-flicker origin-bottom" style="transform-origin: 50px 32px;">
            <!-- Outer Glow -->
            <circle cx="50" cy="24" r="10" fill="#FCA5A5" opacity="0.4" class="animate-pulse" />
            <!-- Flame Body -->
            <path d="M50,14 C54,23 54,28 50,33 C46,28 46,23 50,14 Z" fill="#F9D057" stroke="#ECA93A" stroke-width="0.8" />
            <path d="M50,19 C52,24 52,27 50,31 C48,27 48,24 50,19 Z" fill="#EF4444" />
          </g>
          
          <!-- Candle Stick -->
          <rect x="47" y="32" width="6" height="28" rx="1.5" fill="#EFAFC9" stroke="#2A0F20" stroke-width="1.5" />
          <!-- Stripes on candle -->
          <path d="M47,38 L53,35 M47,46 L53,43 M47,54 L53,51" stroke="#FBF3EE" stroke-width="1.2" />

          <!-- Frosting swirling top -->
          <path d="M25,75 Q20,70 28,64 Q32,60 40,65 Q50,70 60,65 Q68,60 72,64 Q80,70 75,75 Z" fill="#F4C2D7" stroke="#2A0F20" stroke-width="1.8" stroke-linejoin="round" />
          <path d="M30,65 Q25,58 35,54 Q42,50 50,54 Q58,50 65,54 Q75,58 70,65 Z" fill="#FBF3EE" stroke="#2A0F20" stroke-width="1.8" stroke-linejoin="round" />
          <path d="M40,54 Q38,46 50,44 Q62,46 60,54 Z" fill="#E899B8" stroke="#2A0F20" stroke-width="1.8" stroke-linejoin="round" />
          
          <!-- Cherry -->
          <circle cx="50" cy="44" r="4" fill="#EF4444" stroke="#2A0F20" stroke-width="1.5" />
          <path d="M50,40 Q53,36 57,37" stroke="#2A0F20" stroke-width="1" stroke-linecap="round" />

          <!-- Cupcake Base Wrapper -->
          <path d="M26,75 L32,108 Q33,112 37,112 L63,112 Q67,112 68,108 L74,75 Z" fill="#DC7FA3" stroke="#2A0F20" stroke-width="2" />
          <!-- Vertical wrapper lines -->
          <path d="M34,75 L38,112 M42,75 L45,112 M50,75 L50,112 M58,75 L55,112 M66,75 L62,112" stroke="#4A2238" stroke-width="1.2" stroke-linecap="round" opacity="0.6" />
        </svg>

        <!-- Sparkle/Smoke Particles -->
        <span
          v-for="p in particles"
          :key="p.id"
          class="candle-smoke select-none"
          :style="p.style"
        >
          {{ p.emoji }}
        </span>
      </div>
      
      <!-- Interactive hints -->
      <span 
        class="absolute -bottom-4 text-[10px] font-ui uppercase tracking-[0.15em] text-rose-300/40 pointer-events-none transition-opacity duration-300"
        :class="candleLit ? 'opacity-100' : 'opacity-0'"
      >
        Make a wish & blow 🕯️
      </span>
      <span 
        class="absolute -bottom-4 text-[10px] font-ui uppercase tracking-[0.15em] text-rose-300/60 pointer-events-none transition-opacity duration-300"
        :class="!candleLit ? 'opacity-100 animate-pulse' : 'opacity-0'"
      >
        Wish granted! 💕
      </span>
    </div>

    <p class="italic text-rose-300/80 font-accent mt-6">— {{ closing.footer }} —</p>
  </section>
</template>

<style scoped>
/* Candle flame flicker animation */
@keyframes flicker {
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(0.95, 1.05) rotate(-1deg); }
  50% { transform: scale(1.05, 0.95) rotate(1deg); }
  75% { transform: scale(0.98, 1.02) rotate(-0.5deg); }
}
.animate-flicker {
  animation: flicker 0.6s ease-in-out infinite;
}

/* Smoke particles float up */
.candle-smoke {
  animation: smoke-float 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes smoke-float {
  0% {
    transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy) - 30px)) scale(1.4) rotate(45deg);
    opacity: 0;
  }
}
</style>
