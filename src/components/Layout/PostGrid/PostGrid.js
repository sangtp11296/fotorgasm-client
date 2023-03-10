import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import MasonryLayout from '../MasonryLayout/MasonryLayout'
import styles from './PostGrid.module.css'
import axios from 'axios';

function PostGrid() {
    const [click, isClicked] = useState('blog')
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const loadMoreImages = () => {
        setPage(page + 1);
    };
    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get(
                `https://api.unsplash.com/photos/random?count=5&page=${page}`,
                {
                    headers: {
                        Authorization: `Client-ID oToAvK2epPDap7yqFnLiUzugpJ2Za7bOuPgu2Crq_QE`,
                    }
                }
            );
            if (response.data.length === 0) {
                setHasMore(false);
            } else {
                setImages(prevImages => [...prevImages, ...response.data]);
            }
        };
        fetchImages()
    }, [page])
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
                dataLength={images.length}
                next={loadMoreImages}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                style={{ overflow: 'hidden' }}
            >
                <MasonryLayout images={images}/>

            </InfiniteScroll>
        </div>
    </>
  )
}

export default PostGrid