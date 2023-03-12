import React, { useEffect, useState } from 'react'
import styles from './MasonryLayout.module.css'


function MasonryLayout({images}) {
  return (
    <div className={styles.gridContainer}>
        {images.map((img) => {
            if(img.width >= img.height){
                return(
                    <div className={`${styles.mediaType} ${styles.postBlog}`} key={img.id}>
                        <div className={`${styles.catPost} ${styles.bubble}`}>
                            <span>on Videos</span>
                        </div>
                        <div className={styles.titlePost}>
                            <h1>
                                Gooey Text Background With SVG Filters
                            </h1>
                            
                            <svg style={{visibility: 'hidden', position: 'absolute'}} xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
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