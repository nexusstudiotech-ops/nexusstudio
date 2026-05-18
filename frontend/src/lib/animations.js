export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
}

export const staggerContainer = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.1 
    } 
  }
}
