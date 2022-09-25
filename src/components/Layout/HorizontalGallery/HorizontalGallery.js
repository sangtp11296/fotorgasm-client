import React from 'react'
import styles from './HorizontalGallery.module.css'
import styled from 'styled-components'


function HorizontalGallery() {
  return (
    <div className={styles.fullpageWrapper}>
        <div className={styles.imgWrapper}>
            <div className={styles.imgCapt}>
            </div>
            <div className={styles.imgDesc}></div>
            <div className={styles.imgCover}>
                
            </div>
        </div>
    </div>
  )
}

export default HorizontalGallery