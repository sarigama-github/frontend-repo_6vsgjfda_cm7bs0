import { useEffect, useRef } from 'react'

export default function NoiseBackground({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const draw = () => {
      const { width, height } = canvas
      const imageData = ctx.createImageData(width, height)
      const buffer = new Uint32Array(imageData.data.buffer)
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = (255 << 24) | (Math.random() * 50 << 16) | (Math.random() * 50 << 8) | (Math.random() * 50)
      }
      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(draw)
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed inset-0 -z-50 mix-blend-overlay opacity-[0.035] pointer-events-none ${className}`} />
}
