import React, {useEffect} from 'react'
import styles from './Standard.module.css'

export default function Standard (props) {
    
    useEffect(()=>{
        const allPosts = document.getElementsByClassName(`${styles.masonryItem}`);
        console.log(allPosts);
        props.postClassname(allPosts);
    },[])
  return (
        <div className={`${styles.masonryItem} ${styles.layoutPost}`}>
            <div className={styles.imageContainer} style={{backgroundImage:`url(${props.imgUrl})`}}>
                <a href='/post'></a>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.postSum}>
                    <div className={styles.postCat}>Photography</div>
                    <div className={styles.postTitle}>The easiest way to break out on top</div>
                    <div className={styles.postDes}>The easiest way to break out on top This section contains many common flower varieties that can often be found</div>
                </div>
            </div>
            <a href='/post'>
                <span className={styles.readMore}>Read more</span>
            </a>
            <div className={styles.postInfo}>
                <div className={styles.postDate}>24. Dec 2022</div>
                <div className={styles.postLike}>
                    <button className={styles.likeBtn}>

                    </button>
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
