import React, { useState, useEffect, useLayoutEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import MasonryLayout from '../MasonryLayout/MasonryLayout'
import styles from './PostGrid.module.css'
import axios from 'axios';

function PostGrid() {
    const [click, isClicked] = useState('blog');
    const [media, setMedia] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    useEffect(() => {
        // Load initial set of photos and videos
        loadMedia();
      }, []);
    const loadMedia = () => {
      axios.get(`https://api.unsplash.com/photos?page=${page}&client_id=oToAvK2epPDap7yqFnLiUzugpJ2Za7bOuPgu2Crq_QE`)
        .then(response => {
          const data = response.data;
          data.map((photo) => {
            photo.website = 'unsplash';
          })
          // Check if we've already cached this page of data
          const cachedData = sessionStorage.getItem(`images_page_${page}`);
          if (cachedData) {
            // If we have, use the cached data instead of the response from the API
            // setPhotos([...photos, ...JSON.parse(cachedData)]);
            setPhotos(JSON.parse(cachedData));
          } else {
            // If we haven't, store the response data in the cache and use it
            sessionStorage.setItem(`images_page_${page}`, JSON.stringify(data));
            // setPhotos([...photos, ...data]);
            setPhotos(data);
          }
          setPage(page + 1);
        })
        .catch(error => {
          console.log(error);
          setHasMore(false);
        });

      const headers = { Authorization: 'UcBD3Kb5HiiEZMeOkJs9r5t6eEdlfBSUWiLnGnNkAYZ0ncopY8NT4FkY' };
      axios.get(`https://api.pexels.com/videos/search?query=asian%20girl&page=${page}&per_page=10`, { headers })
      .then(response => {
        const data = response.data.videos;
        data.map((video) => {
          video.website = 'pexels';
        })
        const cachedData = sessionStorage.getItem(`videos_page_${page}`);
          if (cachedData) {
            // If we have, use the cached data instead of the response from the API
            // setVideos([...videos, ...JSON.parse(cachedData)]);
            setVideos(JSON.parse(cachedData));
          } else {
            // If we haven't, store the response data in the cache and use it
            sessionStorage.setItem(`videos_page_${page}`, JSON.stringify(data));
            // setVideos([...videos, ...data]);
            setVideos(data);
          }
          setPage(page + 1);
      })
      .catch (error => {
        console.log(error);
        setHasMore(false);
      });
    };
    useEffect(()=>{
      const shuffle = photos.concat(videos);
      for(let i = shuffle.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
      }
      
      shuffle.forEach((item) => {
        if (!media.includes(item)){
          setMedia([...media,item]);
        }
      })
    },[photos,videos,media])
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
                dataLength={media.length}
                next={loadMedia}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                style={{ overflow: 'hidden' }}
            >
              <MasonryLayout images={photos} videos={videos} media={media}/>

            </InfiniteScroll>
        </div>
    </>
  )
}

export default PostGrid