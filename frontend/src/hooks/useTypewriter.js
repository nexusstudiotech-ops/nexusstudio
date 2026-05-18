import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export function useTypewriter(text, speed = 35) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  
  useEffect(() => {
    if (!inView) return
    
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text.charAt(index))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)
    
    return () => clearInterval(interval)
  }, [inView, text, speed])
  
  return { displayText, isComplete, ref }
}
