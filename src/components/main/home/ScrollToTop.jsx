import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, []);

  return (
    <button onClick={scrollToTop} className={(isVisible ? 'opacity-100' : 'opacity-0') + " position-fixed scrollToTop_wrapper border border-0 bg-transparent"}>
      <div className="scrollToTop_content position-fixed rounded-circle d-flex justify-content-center align-items-center bg-white">
        <FontAwesomeIcon className="m-1 fs-3 text-dark" icon={solid('shuttle-space')} />
      </div>
    </button>

  )
}
export default ScrollToTop
