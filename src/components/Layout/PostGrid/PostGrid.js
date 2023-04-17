import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import MasonryLayout from '../MasonryLayout/MasonryLayout'
import styles from './PostGrid.module.css'
import axios from 'axios';

function PostGrid() {
    const [click, isClicked] = useState('blog')
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        // Load initial set of photos
        loadPhotos();
      }, []);
    
      const loadPhotos = () => {
        axios.get(`https://api.unsplash.com/photos?page=${page}&client_id=oToAvK2epPDap7yqFnLiUzugpJ2Za7bOuPgu2Crq_QE`)
          .then(response => {
            const data = response.data;
            // Check if we've already cached this page of data
            const cachedData = sessionStorage.getItem(`page_${page}`);
            if (cachedData) {
              // If we have, use the cached data instead of the response from the API
              setPhotos([...photos, ...JSON.parse(cachedData)]);
            } else {
              // If we haven't, store the response data in the cache and use it
              sessionStorage.setItem(`page_${page}`, JSON.stringify(data));
              setPhotos([...photos, ...data]);
            }
            setPage(page + 1);
          })
          .catch(error => {
            console.log(error);
            setHasMore(false);
          });
      };

  return (
    <>
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
        <div className={styles.postGrid}>
            <InfiniteScroll 
                dataLength={photos.length}
                next={loadPhotos}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                style={{ overflow: 'hidden' }}
            >
              <MasonryLayout images={photos}/>

            </InfiniteScroll>
        </div>
    </>
  )
}

export default PostGrid