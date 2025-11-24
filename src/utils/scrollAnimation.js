// Scroll animation utility
export const observeElements = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    observer.observe(el)
  })
}

