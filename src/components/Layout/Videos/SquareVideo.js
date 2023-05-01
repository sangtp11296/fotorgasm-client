import React, {useRef, useEffect, useState} from 'react'
import styles from './SquareVideo.module.css'

function SquareVideo({image, url, cat, title, desc}) {
  const videoRef = useRef();
  const [isAudio, setAudio] = useState();
  const [isMuted, setMuted] = useState('');
  let timeoutID;
  function handleHoverOn() {
    timeoutID = setTimeout(() => {
      videoRef.current.play();
      if (videoRef.current.mozHasAudio || Boolean(videoRef.current.webkitAudioDecodedByteCount) || Boolean(videoRef.current.audioTracks && videoRef.current.audioTracks.length)){
        if(videoRef.current.muted){
          setMuted('muted');
          setAudio(true);
        }
      } else {
        setAudio(false);
        setMuted(null);
      }
    }, 2000);
  }
  function handleHoverOff() {
    clearTimeout(timeoutID);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setAudio(null);
    videoRef.current.muted = true;
    setMuted('');
  }
  function toggleMute() {
    videoRef.current.muted = !videoRef.current.muted;
    if (isMuted === 'unmuted'){
      setMuted('muted');
    } else if (isMuted === 'muted'){
      setMuted('unmuted');
    }
    console.log(isMuted)
  };
  return (
    <div className={`${styles.videoPost} ${styles.squareVideo}`} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
        <video className={styles.videoSrc} poster={image} ref={videoRef} muted controls>
          {url.map((vid,ind) => {
            return(
              <source src={`${vid.link}`} type={`${vid.file_type}`} key={ind}/>
            )
          })}
        </video>
        <div className={styles.videoAudio}>
          {/* no sound */}
          <button style={{display: isAudio === false ? '' : 'none'}} disabled>
            <svg viewBox="0 0 24 24" height='21px' width='21px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8.14307C3.4148 8.66137 3 9.49393 3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C12.6098 21 13.0337 19.3265 13.2717 17M3 3L21 21M9 4.60756C9.84604 3.71548 10.8038 3 12 3C12.7739 3 13.2484 5.69533 13.4233 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </button>
          {/* muted */}
          <button className='muted' style={{display: isAudio&&isMuted==='muted' ? '':'none'}} onClick={toggleMute}>
            <svg height='21px' width='21px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 9L16 15M16 9L22 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </button>
          {/* unmuted */}
          <button className='unmuted' style={{display: isAudio&&isMuted==='unmuted' ? '':'none'}} onClick={toggleMute}>
            <svg height='21px' width='21px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> 
          </button>
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
        {/* <div className={styles.videoOverlay}></div>
        <div className={styles.videoInfo}>
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

export default SquareVideo