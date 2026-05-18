import { useEffect, useRef } from 'react'

export function ParticleCanvas() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    if (window.innerWidth < 768) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, particles = [], raf
    
    const resize = () => { 
      W = canvas.width = canvas.offsetWidth; 
      H = canvas.height = canvas.offsetHeight 
    }
    resize()
    window.addEventListener('resize', resize)
    
    const cols = ['rgba(34,197,94,', 'rgba(99,102,241,']
    
    class Particle {
      constructor() { 
        this.reset() 
      }
      reset() { 
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - .5) * .35
        this.vy = (Math.random() - .5) * .35
        this.r = Math.random() * 1.8 + .8
        this.a = Math.random() * .4 + .1
        this.c = cols[Math.floor(Math.random() * 2)] 
      }
      update() { 
        this.x += this.vx
        this.y += this.vy
        if(this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset() 
      }
      draw() { 
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.c + this.a + ')'
        ctx.fill() 
      }
    }
    
    for(let i = 0; i < 60; i++) particles.push(new Particle())
    
    const loop = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { 
        p.update()
        p.draw() 
      })
      
      for(let i = 0; i < particles.length; i++) {
        for(let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if(d < 110) { 
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(34,197,94,${.1 * (1 - d / 110)})`
            ctx.lineWidth = .5
            ctx.stroke() 
          }
        }
      }
      raf = requestAnimationFrame(loop)
    }
    loop()
    
    return () => { 
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf) 
    }
  }, [])
  
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}
