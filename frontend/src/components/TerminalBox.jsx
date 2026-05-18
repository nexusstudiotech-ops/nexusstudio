import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const terminalLines = [
  { text: "● Received client project brief input...", color: "text-slate-400" },
  { text: "● Computing cognitive parameters...", color: "text-slate-400" },
  { text: "→ Synthesised 3-stage blueprint roadmap...", color: "text-accent-indigo" },
  { text: "→ Generating architecture scaffold...", color: "text-accent-indigo" },
  { text: "✓ READY FOR DEPLOYMENT", color: "text-brand-cyan font-bold" }
]

export function TerminalBox() {
  const [visibleLines, setVisibleLines] = useState([])
  const [showCursor, setShowCursor] = useState(true)
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: false, amount: 0.2 })

  useEffect(() => {
    if (!inView) return

    let currentLine = 0
    let lineTimer
    let loopTimer

    const runSequence = () => {
      setVisibleLines([])
      currentLine = 0
      
      const addLine = () => {
        if (currentLine < terminalLines.length) {
          setVisibleLines(prev => [...prev, terminalLines[currentLine]])
          currentLine++
          lineTimer = setTimeout(addLine, 450) // Delay between lines
        } else {
          // Restart full sequence after 5s loop
          loopTimer = setTimeout(runSequence, 4500)
        }
      }
      
      addLine()
    }

    runSequence()

    // Blinking cursor interval
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearTimeout(lineTimer)
      clearTimeout(loopTimer)
      clearInterval(cursorInterval)
    }
  }, [inView])

  return (
    <div 
      ref={containerRef}
      className="w-full bg-[#05070B] border border-white/[0.08] rounded-xl p-6 font-mono text-[11px] sm:text-xs select-none shadow-2xl relative"
    >
      {/* 1. Terminal Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.04]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        </div>
        <span className="text-[10px] text-slate-400/50 tracking-widest uppercase">
          INTELLIGENCE ENGINE v2.1
        </span>
      </div>

      {/* 2. Output Lines */}
      <div className="space-y-2.5 min-h-[120px] flex flex-col justify-start">
        {visibleLines.map((line, idx) => (
          <div 
            key={idx} 
            className={`${line.color} transition-all duration-300 transform translate-x-0`}
          >
            {line.text}
          </div>
        ))}
        
        {/* Blinking Cursor */}
        <div className="text-brand-cyan">
          <span className={`inline-block w-2 h-4 bg-brand-cyan ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

    </div>
  )
}
