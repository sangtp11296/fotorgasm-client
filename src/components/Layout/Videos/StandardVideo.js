import React from 'react'
import styles from './StandardVideo.module.css'

function StandardVideo({image, url}) {
  return (
    <div className={`${styles.videoPost} ${styles.standardVideo}`}>
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

export default StandardVideo