import { useRef } from 'react'

export default function ParallaxTilt({ children, className = '', maxTilt = 12, glow = true }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const tiltX = (py - 0.5) * -2 * maxTilt
    const tiltY = (px - 0.5) * 2 * maxTilt
    el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`
    if (glow) {
      el.style.setProperty('--glow-x', `${px * 100}%`)
      el.style.setProperty('--glow-y', `${py * 100}%`)
    }
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 will-change-transform ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transformStyle: 'preserve-3d',
        background: glow ? 'radial-gradient(800px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(59,130,246,0.08), transparent 40%)' : undefined,
      }}
    >
      {children}
    </div>
  )
}
