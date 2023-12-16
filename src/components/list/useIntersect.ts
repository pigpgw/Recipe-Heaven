import { useState, useEffect, useCallback, MutableRefObject } from 'react'

interface ObserverOptions extends IntersectionObserverInit {
  root?: HTMLDivElement | null
}

const useIntersect = (
  onIntersect: (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver,
  ) => void,
  option: ObserverOptions,
) => {
  const [ref, setRef] = useState<MutableRefObject<HTMLDivElement | null>>({
    current: null,
  })

  const obsCallback = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        onIntersect(entry, observer)
      }
    },
    [onIntersect],
  )

  useEffect(() => {
    let observer: IntersectionObserver | undefined

    if (ref.current) {
      observer = new IntersectionObserver(obsCallback, {
        root: option?.root || null,
        rootMargin: option?.rootMargin || '0px',
        threshold: option?.threshold || 0.5,
        ...option,
      })

      observer.observe(ref.current)
    }

    return () => observer && observer.disconnect()
  }, [ref, obsCallback, option])

  return ref
}

export default useIntersect
