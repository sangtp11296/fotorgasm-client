import React, { useEffect, useState } from 'react'
import styles from './MasonryLayout.module.css'
import axios from 'axios'
function MasonryLayout({images}) {

  return (
    <div className={styles.gridContainer}>
        {images.map((img) => {
            if(img.width >= img.height){
                return(
                    <div className={`${styles.mediaType} ${styles.postBlog}`} key={img.id}>
                        <img src={img.urls.regular} alt={img.alt_description} />
                    </div>
                )
            }
            return(
                <div className={`${styles.standardType} ${styles.postBlog}`} key={img.id}>
                    <img src={img.urls.regular} alt={img.alt_description} />
                </div>
        )})}
    </div>
  )
}

export default MasonryLayout