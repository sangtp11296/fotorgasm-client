import React from 'react'

function VideoPost() {
  return (
    <div className={`${styles.mediaType} ${styles.postBlog}`} key={img.id}>
        <img src={img.urls.regular} alt={img.alt_description} />
    </div>
  )
}

export default VideoPost