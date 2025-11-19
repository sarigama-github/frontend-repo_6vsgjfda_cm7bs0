import { useEffect, useRef } from 'react'

export default function OrbitalCanvas({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(520, window.innerHeight * 0.8)
    }

    const rand = (min, max) => Math.random() * (max - min) + min
    const nodes = Array.from({ length: 120 }).map(() => ({
      x: rand(0, 1),
      y: rand(0, 1),
      z: rand(0.2, 1),
      vx: rand(-0.0005, 0.0005),
      vy: rand(-0.0005, 0.0005),
    }))

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#0f172a'
      ctx.fillRect(0, 0, width, height)

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > 1) n.vx *= -1
        if (n.y < 0 || n.y > 1) n.vy *= -1
        const px = n.x * width
        const py = n.y * height
        const size = (1.6 - n.z) * 2
        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${0.35 * (1.2 - n.z)})`
        ctx.fill()
      })

      // subtle connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = (a.x - b.x)
          const dy = (a.y - b.y)
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 0.08) {
            const { width, height } = canvas
            ctx.beginPath()
            ctx.moveTo(a.x * width, a.y * height)
            ctx.lineTo(b.x * width, b.y * height)
            ctx.strokeStyle = `rgba(59,130,246,${0.06})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // vignette
      const grad = ctx.createRadialGradient(width/2, height/3, 0, width/2, height/2, Math.max(width, height))
      grad.addColorStop(0, 'rgba(15,23,42,0)')
      grad.addColorStop(1, 'rgba(15,23,42,0.6)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className={`absolute inset-0 -z-10 ${className}`} />
}
