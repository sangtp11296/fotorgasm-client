import React, {useEffect, useRef, useState} from 'react'
import styles from './StandardVideo.module.css'

function StandardVideo({image, url, cat, title, desc}) {
  const [isAudio, setAudio] = useState(true);
  const [isMuted, setMuted] = useState(false);

  const videoRef = useRef();
  let timeoutID;
  function handleHoverOn() {
    timeoutID = setTimeout(() => {
      videoRef.current.play()
    }, 2000);
  }
  function handleHoverOff() {
    clearTimeout(timeoutID)
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }
  function hasAudio () {
    if (videoRef.current.mozHasAudio || Boolean(videoRef.current.webkitAudioDecodedByteCount) || Boolean(videoRef.current.audioTracks && videoRef.current.audioTracks.length)){
      if(videoRef.current.muted){
        setAudio(true);
        setMuted(true);
      }
    } else setAudio(false);
  }
  return (
    <div className={`${styles.videoPost} ${styles.standardVideo}`} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
        <video className={styles.videoSrc} poster={image} ref={videoRef} onCanPlay={hasAudio} muted controls>
          {url.map((vid,ind) => {
            return(
              <source src={`${vid.link}`} type={`${vid.file_type}`} key={ind}/>
            )
          })}
        </video>
        {/* <div className={styles.videoOverlay}></div> */}
        <div className={styles.videoAudio}>
          {
            !isAudio ? 
              <button disabled>
                <svg viewBox="0 0 24 24" height='21px' width='21px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8.14307C3.4148 8.66137 3 9.49393 3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C12.6098 21 13.0337 19.3265 13.2717 17M3 3L21 21M9 4.60756C9.84604 3.71548 10.8038 3 12 3C12.7739 3 13.2484 5.69533 13.4233 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </button>
            : 
            videoRef.current?.muted ? 
              <button onClick={() => setAudio(!isMuted)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 9L16 15M16 9L22 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </button>
              :
              <button onClick={() => setAudio(!isMuted)}>
                <svg height='21px' width='21px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> 
              </button>
          }
        </div>
        <button className={styles.fullScreen}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <path d="M21 14V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H14M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10M15 9L21 3M21 3H15M21 3V9M9 15L3 21M3 21H9M3 21L3 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                </path> 
                </g>
            </svg>
        </button>
        <div className={styles.videoIcon}>
          <svg height='23px' width='23px' fill={`var(--on-background)`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g dataname="Layer 2">
            <g dataname="film">
              <rect width="24" height="24" opacity="0"></rect>
              <path d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm14-2h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z"></path>
            </g> </g> </g></svg>
        </div>
        {/* <div className={styles.videoInfo}>
            {cat ? 
                <div className={`${styles.videoCat}`}>
                    <img alt={`on ${cat}`} src={require(`../../../images/menu/on ${cat}.png`)} height={25} width={25}/>
                    <span>on {cat}</span>
                </div> : ''
            }
            <div className={styles.videoTitle}>
                <h1>{title}</h1>
            </div>
            <div className={styles.videoDesc}>
                {desc}
            </div>
        </div> */}
    </div>
  )
}

export default StandardVideo