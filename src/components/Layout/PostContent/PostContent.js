import React from 'react'
import styles from './PostContent.module.css'
import {Link} from 'react-router-dom'

function PostContent() {
  return (
    <div className={styles.lowerWrapper}>
      <div className={styles.fullTextContainer}>
        <article className={styles.postArticle}>
          <div className={styles.postContent}>
            <div className={styles.postCat}>
                <Link to='/cat'>Photography</Link>
            </div>
            <div className={styles.postTitle}>
                <Link to='/post:id'>The easiest way to break out on top</Link>
            </div>
            <div className={styles.postTextContainer}>
              <div className={styles.postText}>
                Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.

                Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication or display.
                Until the Digital Age, typography was a specialized occupation. Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.
              </div>
              <div className={styles.postInfoContainer}>
                <div className={styles.postInfo}>
                  <div className={styles.postDate}>24. Dec 2022</div>
                  <div className={styles.postSocial}>
                    <button className={styles.likeBtn} >
                        {true?<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>}
                        <span>100</span>
                    </button>
                    <button className={styles.likeBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.685 10 8.213 0 5.04-5.146 8.159-9.913 8.159-2.027 0-3.548-.439-4.548-.712l-4.004 1.196 1.252-2.9c-.952-1-2.787-2.588-2.787-5.743 0-4.528 4.486-8.213 10-8.213zm0-2c-6.628 0-12 4.573-12 10.213 0 2.39.932 4.591 2.427 6.164l-2.427 5.623 7.563-2.26c1.585.434 3.101.632 4.523.632 7.098.001 11.914-4.931 11.914-10.159 0-5.64-5.372-10.213-12-10.213z"/></svg>
                        <span>100</span>
                    </button>
                  </div>
                </div>
                <div className={styles.postInfo}></div>
              </div>
            </div>
          </div>
          <div className={styles.tagHolder}>Abstract, Creative</div>
        </article>
        <div className={styles.relatedPosts}>relatedPosts</div>
        <div className={styles.authorDes}>authorDes</div>
        <div className={styles.commentHolder}>commentHolder</div>
        <div className={styles.commentForm}>commentForm</div>
      </div>
    </div>
  )
}

export default PostContent