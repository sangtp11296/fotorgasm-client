import React from 'react'
import styles from './HorizontalVideo.module.css'

function HorizontalVideo({image, url}) {
  return (
    <div className={`${styles.videoPost} ${styles.horizontalVideo}`}>
        <video className={styles.videoSrc} poster={image} controls>
          {url.map((vid,ind) => {
            return(
              <source src={`${vid.link}`} type={`${vid.file_type}`} key={ind}/>
            )
          })}
        </video>
    </div>
  )
}

export default HorizontalVideo