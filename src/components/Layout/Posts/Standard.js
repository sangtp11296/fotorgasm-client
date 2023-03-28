import React, { createRef, useRef, useEffect } from 'react'
import styles from './Standard.module.css'
import films from '../../../images/menu/on Films.png'
import something from '../../../images/menu/on Something.png'
import vinyls from '../../../images/menu/on Vinyls.png'
import moods from '../../../images/menu/on Moods.png'
import memories from '../../../images/menu/on Memories.png'
import running from '../../../images/menu/on Running.png'
import music from '../../../images/menu/on Music.png'
import reading from '../../../images/menu/on Reading.png'

const Standard = (({image, alt, title, onClick, setRef, isActive}) => {
    console.log(image)
  return (
    <div onClick={onClick} ref={setRef} className={`${isActive? styles.active : ''} ${styles.standardType} ${styles.postBlog}`}>
        <button className={styles.fullScreen}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <path d="M21 14V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H14M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10M15 9L21 3M21 3H15M21 3V9M9 15L3 21M3 21H9M3 21L3 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                </path> 
                </g>
            </svg>
        </button>
        <img className={styles.postCover} src={image} alt={alt} />
        <div className={styles.postInfo}>
            <div className={`${styles.postCat}`}>
                <img alt='on Vinyls' src={vinyls} height={25} width={25}/>
                <span>on Films</span>
            </div>
            <div className={styles.titlePost}>
                <h1>{title}</h1>
            </div>
            <div className={styles.postDesc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
        <div className={styles.postOverlay}></div>
        <div className={styles.postSocial}>
            <button className={styles.button}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button>
            <button className={styles.button}>
                <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path className="cls-1" d="M21.5,12A9.5,9.5,0,1,0,12,21.5h9.5l-2.66-2.92A9.43,9.43,0,0,0,21.5,12Z" fill='none' stroke='#fff' strokeMiterlimit={10} strokeWidth='1.2px'></path></g></svg>
            </button>
            <button className={styles.button}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5 3.5L3.5 9L10 12L17 7L12 14L15 20.5L20.5 3.5Z" strokeWidth='1.2' stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button>
            <button className={styles.button}>
                <svg fill="#ffffff" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Glyph" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#ffffff" d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z" id="XMLID_294_"></path><path stroke="#ffffff" d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z" id="XMLID_295_"></path><path stroke="#ffffff" d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z" id="XMLID_297_"></path></g></svg>
            </button>
        </div>
    </div>
)});

export default Standard