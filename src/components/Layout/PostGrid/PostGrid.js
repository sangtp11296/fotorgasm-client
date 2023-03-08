import React, { useState } from 'react'
import styles from './PostGrid.module.css'

function PostGrid() {
    const [click, isClicked] = useState('blog')
  return (
    <div className={styles.postCatalog}>
        <div className={styles.postSort} onClick={()=>isClicked('blog')} style={{color:`${click==='blog'?'var(--on-background)':'var(--on-background-matte)'}`, borderTop:`${click==='blog'?'1px solid var(--on-background)':''}`}}>
            <i className="fas fa-feather-alt"></i>
            <span>Posts</span>
        </div>
        <div className={styles.postSort} onClick={()=>isClicked('video')} style={{color:`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`, borderTop:`${click==='video'?'1px solid var(--on-background)':''}`}}>
            <i className="fas fa-film"></i>
            <span>Videos</span>
        </div>
        <div className={styles.postSort} onClick={()=>isClicked('music')} style={{color:`${click==='music'?'var(--on-background)':'var(--on-background-matte)'}`, borderTop:`${click==='music'?'1px solid var(--on-background)':''}`}}>
            <i className="fas fa-compact-disc"></i>
            <span>Music</span>
        </div>
        <div className={styles.postSort} onClick={()=>isClicked('photo')} style={{color:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`, borderTop:`${click==='photo'?'1px solid var(--on-background)':''}`}}>
            <i className="fas fa-camera-retro"></i>
            <span>Photos</span>
        </div>
    </div>
  )
}

export default PostGrid