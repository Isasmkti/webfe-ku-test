export default {
  mounted(el, binding) {
    const direction = binding.value || 'up'

    const directionMap = {
      left: '-translate-x-20',
      right: 'translate-x-20',
      up: 'translate-y-20',
      fadeIn: 'opacity-0'
    }

    const enterClass = directionMap[direction] || 'translate-y-20'

    // Set posisi awal + style transisi
    el.classList.add(
      'opacity-0',
      enterClass,
      'transition-all',
      'duration-3000',
      'ease-in-out'
    )

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', enterClass)
          el.classList.add('opacity-100', 'translate-x-0', 'translate-y-0')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
  }
}
