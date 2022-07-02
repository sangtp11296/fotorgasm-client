import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './Standard.module.css'

export default function Standard ({imgUrl, postClassname}) {
    useEffect(()=>{
        const allPosts = document.getElementsByClassName(`${styles.masonryItem}`);
        console.log(allPosts);
        // ()=>postClassname(allPosts)
    },[])
  return (
        <div className={`${styles.masonryItem} ${styles.layoutPost}`}>
            <div className={styles.imageContainer} style={{backgroundImage:`url(${imgUrl})`}}>
                <Link to='/post:id'></Link>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.postSum}>
                    <div className={styles.postCat}>
                        <Link to='/cat'>Photography</Link>
                    </div>
                    <div className={styles.postTitle}>
                        <Link to='/post:id'>The easiest way to break out on top</Link></div>
                    <div className={styles.postDes}>The easiest way to break out on top This section contains many common flower varieties that can often be found</div>
                </div>
                <Link to='/post:id' className={styles.readMore}>
                    <span >read more</span>
                </Link>
                <div className={styles.postInfo}>
                    <div className={styles.postDate}>24. Dec 2022</div>
                    <div className={styles.postSocial}>
                        <button className={styles.likeBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
                        </button>
                        <span>100</span>
                        <button className={styles.likeBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.685 10 8.213 0 5.04-5.146 8.159-9.913 8.159-2.027 0-3.548-.439-4.548-.712l-4.004 1.196 1.252-2.9c-.952-1-2.787-2.588-2.787-5.743 0-4.528 4.486-8.213 10-8.213zm0-2c-6.628 0-12 4.573-12 10.213 0 2.39.932 4.591 2.427 6.164l-2.427 5.623 7.563-2.26c1.585.434 3.101.632 4.523.632 7.098.001 11.914-4.931 11.914-10.159 0-5.64-5.372-10.213-12-10.213z"/></svg>
                        </button>
                        <span>100</span>
                    </div>
                </div>
            </div>
        </div>
        // <div className={`${styles.masonryItem} ${styles.layoutPost}`}>
        //         <img src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutGallery} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutPost} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutPost} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutGallery} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutPost} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutGallery} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutGallery} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutPost} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutGallery} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutPost} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>
        //     <div className={`${styles.layoutPost} ${styles.masonryItem}`}>
        //         <img src='https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80' alt='asdf' className={styles.imageLayout}></img>
        //     </div>

  )
}
