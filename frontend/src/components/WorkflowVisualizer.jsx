import React, { useEffect, useState } from 'react'

export function WorkflowVisualizer() {
  const [activeNode, setActiveNode] = useState(0) // 0: Webhook, 1: Validate, 2: CRM, 3: Complete
  const [arrowsVisible, setArrowsVisible] = useState([false, false])

  useEffect(() => {
    let timer1, timer2, timer3, resetTimer

    const runSequence = () => {
      // Reset state
      setActiveNode(0)
      setArrowsVisible([false, false])

      // 1. Highlight Node 1, wait, then show arrow 1
      timer1 = setTimeout(() => {
        setArrowsVisible([true, false])
        setActiveNode(1)
      }, 800)

      // 2. Highlight Node 2, wait, then show arrow 2
      timer2 = setTimeout(() => {
        setArrowsVisible([true, true])
        setActiveNode(2)
      }, 1600)

      // 3. Highlight Node 3, wait, then complete
      timer3 = setTimeout(() => {
        setActiveNode(3)
      }, 2400)

      // 4. Reset after delay
      resetTimer = setTimeout(runSequence, 4000)
    }

    runSequence()

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(resetTimer)
    }
  }, [])

  return (
    <div className="w-full bg-[#05070B] border border-white/[0.08] rounded-xl p-6 flex flex-col justify-between items-center min-h-[220px] select-none shadow-2xl relative">
      
      <div className="text-gray-600 font-mono text-[9px] uppercase tracking-widest mb-4">
        Workflow Visualizer Node Tree
      </div>

      {/* Node Path Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-2 my-auto">
        
        {/* Node 1: Webhook */}
        <div 
          className={`px-3 py-2.5 rounded-lg font-mono text-[10px] sm:text-xs transition-all duration-300 border ${
            activeNode === 0 || activeNode === 3
              ? 'border-glow-cyan/40 bg-accent-indigo/10 text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.25)]' 
              : 'border-white/5 bg-white/[0.01] text-slate-400'
          }`}
        >
          Webhook Input
        </div>

        {/* Arrow 1 */}
        <div className={`transition-all duration-400 ${arrowsVisible[0] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <svg className="w-5 h-5 text-accent-indigo transform rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        {/* Node 2: Validate Data */}
        <div 
          className={`px-3 py-2.5 rounded-lg font-mono text-[10px] sm:text-xs transition-all duration-300 border ${
            activeNode === 1 || activeNode === 3
              ? 'border-glow-cyan/40 bg-accent-indigo/10 text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.25)]' 
              : 'border-white/5 bg-white/[0.01] text-slate-400'
          }`}
        >
          Validate Data
        </div>

        {/* Arrow 2 */}
        <div className={`transition-all duration-400 ${arrowsVisible[1] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <svg className="w-5 h-5 text-accent-indigo transform rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        {/* Node 3: CRM Post */}
        <div 
          className={`px-3 py-2.5 rounded-lg font-mono text-[10px] sm:text-xs transition-all duration-300 border ${
            activeNode === 2 || activeNode === 3
              ? 'border-glow-cyan/40 bg-accent-indigo/10 text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.25)]' 
              : 'border-white/5 bg-white/[0.01] text-slate-400'
          }`}
        >
          CRM Post
        </div>

      </div>

      <div className="w-full h-[1px] bg-white/[0.04] my-4" />

      {/* Autopilot Status Indicator */}
      <div className="h-8 flex items-center justify-center font-mono text-xs">
        {activeNode === 3 ? (
          <div className="text-[#22C55E] font-bold tracking-widest flex items-center gap-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-accent-indigo animate-ping" />
            <span>AUTOPILOT ACTIVATE</span>
          </div>
        ) : (
          <span className="text-slate-400/30 tracking-wider">Syncing Pipelines...</span>
        )}
      </div>

    </div>
  )
}
