import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ImageScroller.module.css'
import styled, {keyframes} from 'styled-components'


const image_scroller1 = (box1Width) => keyframes`
        0% { 
            transform: translateX(0);
        }
        100% { 
            transform: translateX(-${box1Width}px);
        },
    `;
const ScrollStyle1 =styled.div`
    animation: ${props => image_scroller1(props.box1Width)} ${props => props.animationTime}s linear infinite normal forwards;
`
const image_scroller2 = (box1Width) => keyframes`
        0% { 
            transform: translateX(0);
        }
        100% { 
            transform: translateX(-${box1Width}px);
        },
    `;
const ScrollStyle2 =styled.div`
    animation: ${props => image_scroller2(props.box1Width)} ${props => props.animationTime}s linear infinite normal forwards;
`
export default function ImageScroller() {
    const [animationTime,setAnimationTime] = useState(0)
    const [box1Width,setBox1Width] = useState(0)
    const getAnimationTime = () =>{
        const box1 = document.getElementById('scroller')
        setAnimationTime(box1.clientWidth/30)
        setBox1Width(box1.clientWidth)
    }
    useEffect(()=>{
        setTimeout(getAnimationTime,10)
        // getAnimationTime()
    },[getAnimationTime])
  return (
    <div className={styles.imageScroller} id='image_scroller'>
        <Link to='/gallery' className={styles.scrollerLink}>
            <div className={styles.scrollerDescription}>
                <img src="//assets.lensculture.com/static/competitions/scroller/sp22-scroller@2x.png" alt="Sp22 scroller@2x"></img>
            </div>
            <div className={styles.scrollerContainer}>
                <ScrollStyle1 className={styles.scrollAnimation1} id='scroller' animationTime={`${animationTime}`} box1Width={`${box1Width}`}>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/995c31f7-c755-44be-9a17-cb25558b0488.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/59b1ac3b-6a8e-4000-81af-fefb15c07b4f.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/59b1ac3b-6a8e-4000-81af-fefb15c07b4f.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/a7776bfb-9be4-4347-9993-d1bcee111229.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/a7776bfb-9be4-4347-9993-d1bcee111229.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/4d4cbadc-52e2-4218-a998-64acc3a3b228.jpg" alt='asdfsd'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos-optimized.lensculture.com/original/46b23290-e623-449c-a918-23d80df6ad40.jpg" alt='asdfsd'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos-optimized.lensculture.com/original/46b23290-e623-449c-a918-23d80df6ad40.jpg" alt='asdfsd'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                </ScrollStyle1>
                <ScrollStyle2 className={styles.scrollAnimation2} animationTime={`${animationTime}`} box1Width={`${box1Width}`}>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/995c31f7-c755-44be-9a17-cb25558b0488.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/59b1ac3b-6a8e-4000-81af-fefb15c07b4f.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/59b1ac3b-6a8e-4000-81af-fefb15c07b4f.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/a7776bfb-9be4-4347-9993-d1bcee111229.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/a7776bfb-9be4-4347-9993-d1bcee111229.jpg" alt='asdf'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                    <div className={styles.scrollerImage}>
                        <img src="https://photos.lensculture.com/large/4d4cbadc-52e2-4218-a998-64acc3a3b228.jpg" alt='asdfsd'></img>
                        <div className={styles.scrollerImageAuthor}>© Marco Cajazzo</div>
                        <div className={styles.scrollerImageOverlay}></div>
                    </div>
                </ScrollStyle2>
            </div>
        </Link>
    </div>
  )
}
