import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100
        setProgress(scrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className="fixed top-0 left-0 h-[2px] bg-green-500 z-[10000] transition-all duration-75 ease-out" 
      style={{ width: `${progress}%`, boxShadow: '0 0 8px rgba(34, 197, 94, 0.7)' }} 
    />
  )
}
