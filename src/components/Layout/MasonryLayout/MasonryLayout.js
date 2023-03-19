import React, { createRef, useLayoutEffect, useState, useRef, useEffect } from 'react'
import styles from './MasonryLayout.module.css'
import films from '../../../images/menu/on Films.png'
import something from '../../../images/menu/on Something.png'
import vinyls from '../../../images/menu/on Vinyls.png'
import moods from '../../../images/menu/on Moods.png'
import memories from '../../../images/menu/on Memories.png'
import running from '../../../images/menu/on Running.png'
import music from '../../../images/menu/on Music.png'
import reading from '../../../images/menu/on Reading.png'
import ScrollToTop from '../Button/ScrollToTop'


function MasonryLayout({images}) {
    const title = [
        "Số đỏ",
        "Dế Mèn Phiêu Lưu Ký",
        "Tắt Đèn",
        "Nhật Ký Trong Tù",
        "Tắm Và Chiều",
        "Chi Pheo",
        "Dế Mèn Táo Quân",
        "Lão Hạc",
        "Bến Đò Ngang",
        "Đất Rừng Phương Nam",
        "Đội Gấu",
        "Sông Đáy",
        "Hồn Trương Ba, Da Hàng Thịt",
        "Chí Phèo",
        "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        "Những Kẻ Xuất Chúng",
        "Lạc Lối",
        "Từ Từ Đòi Lại",
        "Tôi Là Bêtô",
        "Chữ Nghĩa Không Nói",
        "Gió Đưa Hồng Trần",
        "Đời Xưa",
        "Truyện Kiều",
        "Truyện Ngắn Nguyễn Ngọc Ngạn",
        "Kính Vạn Hoa",
        "To Kill a Mockingbird",
        "1984",
        "The Great Gatsby",
        "One Hundred Years of Solitude",
        "Pride and Prejudice",
        "Animal Farm",
        "The Catcher in the Rye",
        "The Hobbit",
        "The Lord of the Rings",
        "The Adventures of Huckleberry Finn",
        "The Adventures of Tom Sawyer",
        "The Picture of Dorian Gray",
        "The Sun Also Rises",
        "The Old Man and the Sea",
        "Of Mice and Men",
        "The Grapes of Wrath",
        "The Sound and the Fury",
        "For Whom the Bell Tolls",
        "The Bell Jar",
        "Heart of Darkness",
        "Lord of the Flies",
        "A Tale of Two Cities",
        "The Canterbury Tales",
        "The Divine Comedy",
        "The Odyssey",
        "三国演义",
        "红楼梦",
        "水浒传",
        "西游记",
        "百年孤独",
        "霍乱时期的爱情",
        "活着",
        "平凡的世界",
        "围城",
        "梦里花落知多少",
        "天龙八部",
        "鹿鼎记",
        "射雕英雄传",
        "金瓶梅",
        "红高粱家族",
        "庐山谣",
        "茶花女",
        "沉默的大多数",
        "中国历代政治得失",
        "论语",
        "道德经",
        "资治通鉴",
        "大学",
        "中庸",
        "荀子"
        ];
    const [myRefs, setMyRefs] = useState([]);
    function clickToOpen(ind) {
        myRefs[ind].scrollIntoView({behavior:'smooth'}) 
        // remove any existing active classes
        myRefs.forEach(ref => ref.classList.remove(`${styles.active}`));
        myRefs[ind].classList.add(`${styles.active}`)
        console.log(myRefs[ind].classList)
    }
    // useLayoutEffect(()=>{
    //     const parentElements = document.querySelectorAll(`.${styles.titleParent}`);
    //     parentElements.forEach(parentElement => {
    //         const element1 = parentElement.querySelector(`.${styles.titleText}`);
    //         const element2 = parentElement.querySelector(`.${styles.curvedBorder}`);
    //         if (element1 && element2) {
    //           const height = element1.offsetHeight;
    //           const width = element1.offsetWidth;
    //           element2.style.height = `${height}px`;
    //           element2.style.width = `${width}px`;
    //         }
    //       });
    // }, [images]);
  return (
    <div className={styles.gridContainer}>
        {images.map((img,ind) => {
            if(img.width > img.height){
                return(
                    <div ref={ref => myRefs[ind] = ref} onClick={() => clickToOpen(ind)} className={`${styles.mediaType} ${styles.postBlog}`} key={ind}>
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
                        <img className={styles.postCover} src={img.urls.regular} alt={img.alt_description} />
                        <div className={styles.postInfo}>
                            <div className={`${styles.postCat}`}>
                                <img alt='on Vinyls' src={vinyls} height={25} width={25}/>
                                <span>on Films</span>
                            </div>
                            <div className={styles.titlePost}>
                                <h1>{title[Math.floor(Math.random() * title.length)]}</h1>
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
                        {/* <div className={styles.titlePost}>
                            <h1 className={styles.titleParent}>
                                <span ref={ref} className={styles.titleText}>{title[Math.floor(Math.random() * title.length)]}</span>
                                <div className={styles.curvedBorder}></div>
                            </h1>
                            
                            <svg style={{visibility: 'hidden', position: 'absolute'}} xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />    
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -9" result="goo" />
                                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div> */}
                        
                    </div>
                )
            } else if(img.width<img.height){
                return(
                    <div ref={ref => myRefs[ind] = ref} onClick={() => clickToOpen(ind)} className={`${styles.standardType} ${styles.postBlog}`} key={ind}>
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
                        <img className={styles.postCover} src={img.urls.regular} alt={img.alt_description}/>
                        <div className={styles.postInfo}>
                            <div className={`${styles.postCat}`}>
                                <img alt='on Films' src={films} height={25} width={25}/>
                                <span>on Films</span>
                            </div>
                            <div className={styles.titlePost}>
                                <h1>{title[Math.floor(Math.random() * title.length)]}</h1>
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
                )   
            } else {
                return(
                    <div className={`${styles.otherType} ${styles.postBlog}`} key={ind}>
                        <img className={styles.postCover} src={img.urls.regular} alt={img.alt_description} />
                    </div>
                )
            }
        })}
    </div>
  )
}

export default MasonryLayout