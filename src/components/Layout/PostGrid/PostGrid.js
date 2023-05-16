import React, { useState, useEffect, useLayoutEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import MasonryLayout from '../MasonryLayout/MasonryLayout'
import styles from './PostGrid.module.css'
import axios from 'axios';
import ScrollToTop from '../Button/ScrollToTop';

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
      axios.get(`https://api.pexels.com/videos/search?query=sound%20music&page=${page}&per_page=10`, { headers })
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
              <svg height='18px' width='18px' fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g dataname="Layer 2">
                <g dataname="film">
                  <rect width="24" height="24" opacity="0"></rect>
                  <path d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm14-2h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z"></path>
                </g> </g> </g></svg>
              <span>Videos</span>
            </div>
            <div className={styles.postSort} onClick={()=>isClicked('music')} style={{color:`${click==='music'?'var(--on-background)':'var(--on-background-matte)'}`, borderTop:`${click==='music'?'1px solid var(--on-background)':''}`}}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={`${click==='music'?'var(--on-background)':'var(--on-background-matte)'}`} transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 11V13M6 10V14M9 11V13M12 9V15M15 6V18M18 10V14M21 11V13"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              <span>Music</span>
            </div>
            <div className={styles.postSort} onClick={()=>isClicked('photo')} style={{color:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`, borderTop:`${click==='photo'?'1px solid var(--on-background)':''}`}}>
                {/* <i className="fas fa-camera-retro"></i> */}
                <svg height="25px" width="25px"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xmlSpace="preserve" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier" >
                    <path className="st1" style={{fill:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}} d="M32,19c0,1.1-0.9,2-2,2h-8c-1.1,0-2-0.9-2-2l0,0c0-1.1,0.9-2,2-2h8C31.1,17,32,17.9,32,19L32,19z"></path> 
                    <path className="st2" style={{fill:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}} d="M50,21H37v22h8c1.1,0,2-0.9,2-2v-6c0,0,0-2,2-2h1c1.1,0,2-0.9,2-2v-8C52,21.9,51.1,21,50,21z"></path> 
                    <path className="st3" style={{fill:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}} d="M36,47c0,1.1-0.9,2-2,2H18c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2V47z"></path> 
                    <path className="st3" style={{fill:`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}} d="M32,17c0,1.1-0.9,2-2,2h-8c-1.1,0-2-0.9-2-2l0,0c0-1.1,0.9-2,2-2h8C31.1,15,32,15.9,32,17L32,17z"></path> 
                  </g>
                </svg>
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
        <ScrollToTop/>
    </>
  )
}

export default PostGrid