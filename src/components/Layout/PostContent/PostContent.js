import React from 'react'
import styles from './PostContent.module.css'
import {Link} from 'react-router-dom'

function PostContent() {
  return (
    <div className={styles.postContent}>
        <div className={styles.postCat}>
            <Link to='/cat'>Photography</Link>
        </div>
        <div className={styles.postTitle}>
            <Link to='/post:id'>The easiest way to break out on top</Link>
        </div>
    </div>
  )
}

export default PostContent