import React, { createRef, useLayoutEffect, useState, useRef, useEffect } from 'react'
import styles from './MasonryLayout.module.css'


function MasonryLayout({images}) {
    const title=['Blue Fire The Which Fire','The Which Fire','Windows in the Flight The Which Fire','The Tears of the Dreamer The Which Fire','Blue Fire','The Which Fire','Windows in the Flight','The Tears of the Dreamer','Blue Fire The Which Fire','The Which Fire','Windows in the Flight The Which Fire','The Tears of the Dreamer The Which Fire','Blue Fire','The Which Fire','Windows in the Flight','The Tears of the Dreamer','Blue Fire The Which Fire','The Which Fire','Windows in the Flight The Which Fire','The Tears of the Dreamer The Which Fire','Blue Fire','The Which Fire','Windows in the Flight','The Tears of the Dreamer']
    const ref = createRef();
    useLayoutEffect(()=>{
        const parentElements = document.querySelectorAll(`.${styles.titleParent}`);
        parentElements.forEach(parentElement => {
            const element1 = parentElement.querySelector(`.${styles.titleText}`);
            const element2 = parentElement.querySelector(`.${styles.curvedBorder}`);
            if (element1 && element2) {
              const height = element1.offsetHeight;
              const width = element1.offsetWidth;
              element2.style.height = `${height}px`;
              element2.style.width = `${width}px`;
            }
          });
    }, [images]);
  return (
    <div className={styles.gridContainer}>
        {images.map((img,ind) => {
            if(img.width >= img.height){
                return(
                    <div className={`${styles.mediaType} ${styles.postBlog}`} key={ind}>
                        <div className={`${styles.bubble}`}>
                            <span>on Videos</span>
                        </div>
                        <div className={styles.titlePost}>
                            <h1 className={styles.titleParent}>
                                <span ref={ref} className={styles.titleText}>{title[Math.floor(Math.random() * title.length)]}</span>
                                {/* <div className={styles.curvedBorder}></div> */}
                            </h1>
                            
                            <svg style={{visibility: 'hidden', position: 'absolute'}} xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />    
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
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
                <div className={`${styles.standardType} ${styles.postBlog}`} key={ind}>
                    <img src={img.urls.regular} alt={img.alt_description} />
                </div>
            )   
        })}
    </div>
  )
}

export default MasonryLayout