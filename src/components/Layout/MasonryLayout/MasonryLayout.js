import React, { useEffect, useState } from 'react'
import styles from './MasonryLayout.module.css'
import Masonry from 'react-masonry-css'
import axios from 'axios'
function MasonryLayout() {
    const [image, setImage] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                `https://api.unsplash.com/photos/random?count=12&page=${page}`,
                {
                    headers: {
                        Authorization: `Client-ID oToAvK2epPDap7yqFnLiUzugpJ2Za7bOuPgu2Crq_QE`,
                    }
                }
            );
            if (res.data.length === 0) {
                setHasMore(false);
            } else {
                setImage([...image, ...Response.data]);
            }
        };
        fetchData()
    }, [page])
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    }
  return (
    <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
    >
        {image.map((img) => (
            <div key={img.id}>
                <img src={img.urls.regular} alt={img.alt_description} />
            </div>
        ))}
    </Masonry>
  )
}

export default MasonryLayout