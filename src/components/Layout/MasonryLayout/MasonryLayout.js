import React, { createRef, useLayoutEffect, useState, useRef, useEffect, useCallback } from 'react'
import styles from './MasonryLayout.module.css'
import films from '../../../images/menu/on Films.png'
import something from '../../../images/menu/on Something.png'
import vinyls from '../../../images/menu/on Vinyls.png'
import moods from '../../../images/menu/on Moods.png'
import memories from '../../../images/menu/on Memories.png'
import running from '../../../images/menu/on Running.png'
import music from '../../../images/menu/on Music.png'
import reading from '../../../images/menu/on Reading.png'
import Standard from '../Posts/Standard'
import Horizontal from '../Posts/Horizontal'
import Square from '../Posts/Square'


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
    const desc = 'lkasjf lkjflkj;flkjdlak ighore gfdg lkjfglkj flkfdjglj hdgl dlkgj ldkgjlkdfjglkfjglkergjerlg  lek jglej glerkjg elrkgj lkdf glfkg hgj hk'
    const cat = ['Films','Something','Vinyls','Moods','Memories','Running','Music','Reading'];
    const childRefs = images.map(() => createRef());
    const [activeRef, setActivRef] = useState();
    
    const clickToOpen = (ind) => {
        if (activeRef!=ind){
            setActivRef(ind);
        } else setActivRef(null);
    };
    useEffect(()=>{
        if(childRefs[activeRef]){
            childRefs[activeRef].current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    },[activeRef]);
    return (
    <div className={styles.gridContainer}>
        {images.map((img,ind) => {
            if(img.width > img.height){
                const rand = Math.random() < 0.5
                if(rand){
                    return(
                        <Horizontal desc={desc} postId={ind} key={ind} image={img.urls.regular} alt={img.alt_description} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]}/>
                    )
                }
                else{
                    return(
                        <Square desc={desc} postId={ind} key={ind} image={img.urls.regular} alt={img.alt_description} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]}/>
                    )
                }
            } 
            else if(img.width<img.height){
                return(
                    <Standard desc={desc} postId={ind} key={ind} image={img.urls.regular} alt={img.alt_description} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]}/>
                ) 
            }
        })}
    </div>
  )
}

export default MasonryLayout