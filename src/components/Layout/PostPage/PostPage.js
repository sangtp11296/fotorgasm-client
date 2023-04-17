import React from 'react'
import PostContent from '../PostContent/PostContent'
import styles from './PostPage.module.css'

function PostPage({image, alt, fromFeed}) {
  return (
    <div>
      {
        fromFeed ?
        '' :
        <div className={`${styles.postCover}`}>
            <img className={`${styles.coverImage}`} src={image} alt={alt} />
        </div>
      }
      <PostContent/>
    </div>
  )
}

export default PostPage