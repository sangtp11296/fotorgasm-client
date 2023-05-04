import React, { useEffect, useState } from 'react'
import styles from './ScrollToTop.module.css'
function ScrollToTop() {
  const [visible, isVisible] = useState(false);
  const scrollToTop = () =>{
        window.scrollTo({
          top: 300, 
          behavior: 'smooth'
        });
      };
  useEffect(()=>{
    function handleScroll(){
      if (window.pageYOffset > 300) {
        isVisible(true);
      } else {
        isVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  return (
    <div onClick={scrollToTop} className={styles.scrollToTop} style={{display:visible?'block':'none'}}>
        {/* <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_14_1756)"> <path d="M25.584 55.75V49.166C25.584 47.376 26.295 45.6592 27.5607 44.3934C28.8263 43.1275 30.5429 42.4163 32.333 42.416V42.416C34.123 42.4163 35.8397 43.1275 37.1053 44.3934C38.371 45.6592 39.082 47.376 39.082 49.166V55.75" stroke="#426AB2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 26.25V50.75C11 52.0761 11.5268 53.3479 12.4645 54.2855C13.4021 55.2232 14.6739 55.75 16 55.75H48.666C49.9921 55.75 51.2639 55.2232 52.2015 54.2855C53.1392 53.3479 53.666 52.0761 53.666 50.75V26.25C53.666 25.4738 53.4853 24.7082 53.1381 24.0139C52.791 23.3197 52.287 22.7157 51.666 22.25L35.333 10C34.4675 9.35089 33.4149 9 32.333 9C31.2511 9 30.1985 9.35089 29.333 10L13 22.25C12.379 22.7157 11.875 23.3197 11.5279 24.0139C11.1807 24.7082 11 25.4738 11 26.25V26.25Z" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_14_1756"> <rect width="46.666" height="50.749" fill="white" transform="translate(9 7)"></rect> </clipPath> </defs> </g></svg> */}
        
        <svg fill="url(#gradient1)" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="url(#gradient1)" strokeWidth="1">
          <linearGradient id="gradient1" x1="100%" y1="100%" x2="00%" y2="00%">
            <stop offset="0%" stopColor='#ee25f7'/>
            <stop offset="50%" stopColor='#560bad'/>
            <stop offset="100%" stopColor='#294fb6'/>
          </linearGradient>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
          <title>angle-top</title> 
          <path d="M0.84 20.040c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.88-0.32 1.2 0l6.44 6.44c0.32 0.32 0.32 0.84 0 1.2-0.32 0.32-0.84 0.32-1.2 0l-5.84-5.84-5.84 5.84c-0.16 0.16-0.4 0.24-0.6 0.24z">
          </path>
          </g>
        </svg>
        
    </div>
  )
}

export default ScrollToTop