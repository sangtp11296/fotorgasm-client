import React from 'react'
import styles from './SquareVideo.module.css'

function SquareVideo({image, url}) {
  return (
    <div className={`${styles.videoPost} ${styles.squareVideo}`}>
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

export default SquareVideo