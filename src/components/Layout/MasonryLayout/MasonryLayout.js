import React, { createRef, useLayoutEffect, useState, useRef, useEffect, useCallback } from 'react'
import styles from './MasonryLayout.module.css'
import Standard from '../Posts/Standard'
import Horizontal from '../Posts/Horizontal'
import Square from '../Posts/Square'
import StandardVideo from '../Videos/StandardVideo'
import SquareVideo from '../Videos/SquareVideo'
import HorizontalVideo from '../Videos/HorizontalVideo'


function MasonryLayout({media}) {
    const filterMedia = [... new Set(media)];
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
    const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum venenatis elit, non tristique leo feugiat id. Donec sed nunc ac nisi vulputate consectetur in vitae enim. Vestibulum a nulla et odio finibus commodo. Cras id nisl dolor. Nulla facilisi. Proin sit amet ante odio. Nullam convallis dui vel urna eleifend, eu porttitor lacus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus tincidunt justo eget eros bibendum, id vestibulum dui congue. Fusce finibus velit non eros hendrerit, non auctor eros malesuada. Nulla sed vestibulum nunc. Praesent at arcu vel tellus pulvinar aliquet. Pellentesque gravida eget tellus eu pharetra. Aenean iaculis, neque sed dapibus fringilla, velit mi lobortis turpis, vitae malesuada justo magna vel massa.';
    const caption = [
        "Travel has always been a way for people to explore new places, cultures, and experiences. It is a way to broaden our horizons and open our minds to new possibilities. In today's world, travel is more accessible than ever before, and yet many people still do not take advantage of the opportunities it offers.One of the biggest benefits of travel is the opportunity to learn about different cultures and ways of life. When we travel, we are exposed to new foods, customs, and traditions. We learn about history and geography in a way that is impossible from a textbook or a screen. Travel also challenges our assumptions and biases, as we are forced to confront ideas and ways of life that may be different from our own.Another important benefit of travel is the opportunity to disconnect from our daily lives and routines. When we travel, we are forced to step outside of our comfort zones and embrace new experiences. This can be scary at times, but it is also incredibly rewarding. It can help us to gain perspective and clarity, and to appreciate the things that truly matter in life.Finally, travel is a way to build connections and relationships with people from around the world. When we travel, we have the opportunity to meet people who we may never have crossed paths with otherwise. We can build friendships and learn from each other's perspectives, and in doing so, we can help to break down barriers and promote understanding and empathyGoals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.When we travel, we have the opportunity to meet people who we may never have crossed paths with otherwise. We can build friendships and learn from each other's perspectives, and in doing so, we can help to break down barriers and promote understanding and empathyGoals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.",
        "Setting goals is a crucial step towards achieving success in any aspect of life. Whether it's personal or professional, having clear and well-defined goals provides a roadmap for our actions and helps us stay focused and motivated. Without goals, we may find ourselves drifting aimlessly, unsure of what we want to achieve or how to get there.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we wantWhen we travel, we have the opportunity to meet people who we may never have crossed paths with otherwise. We can build friendships and learn from each other's perspectives, and in doing so, we can help to break down barriers and promote understanding and empathyGoals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want..",
        'Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.',
        'Volunteering is a wonderful way to give back to the community and make a positive impact on the world around us. It can also have numerous benefits for the volunteers themselves, both personally and professionally.First and foremost, volunteering provides an opportunity to help others and make a difference in the world. Whether its through donating time, skills, or resources, volunteers play a crucial role in supporting charities and organizations that work to improve the lives of others. Volunteering can also help us to develop a deeper sense of empathy and understanding for those in need, and increase our overall sense of compassion and kindness.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.',
        'Moreover, volunteering can have personal benefits as well. It can provide an opportunity to learn new skills, make new friends, and develop a sense of purpose and fulfillment. Volunteering can also help to boost self-confidence and self-esteem, as volunteers see the positive impact they are making on the world around them.From a professional standpoint, volunteering can also provide numerous benefits. It can provide an opportunity to network with like-minded individuals, develop new skills and experiences, and gain valuable work experience. Volunteering can also help to build a positive reputation and enhance a resume, which can be beneficial for career advancement.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.',
        'Moreover, volunteering can have personal benefits as well. It can provide an opportunity to learn new skills, make new friends, and develop a sense of purpose and fulfillment. Volunteering can also help to boost self-confidence and self-esteem, as volunteers see the positive impact they are making on the world around them.From a professional standpoint, volunteering can also provide numerous benefits. It can provide an opportunity to network with like-minded individuals, develop new skills and experiences, and gain valuable work experience. Volunteering can also help to build a positive reputation and enhance a resume, which can be beneficial for career advancement.In conclusion, volunteering is a wonderful way to give back to the community and make a positive impact on the world around us. It can also provide numerous benefits for volunteers themselves, both personally and professionally. So, if youre looking for a way to make a difference and improve your own life at the same time, consider volunteering your time and skills to a worthy cause.',
        "The storm was fierce, with winds that howled and rain that poured down in sheets. But as I watched from my window, I felt a sense of awe and wonder. The power of nature was on full display, and it was both terrifying and beautiful. It was a reminder that even in the face of uncontrollable forces, there was still a sense of order and purpose in the universe.",
          ];
    const cat = ['Films','Something','Vinyls','Moods','Memories','Running','Music','Reading'];
    const childRefs = filterMedia.map(() => createRef());
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
        {filterMedia.map((item,ind) => {
            if (item.website === 'unsplash'){
                if (item.width > item.height){
                    const rand = Math.random() < 0.5
                    if(rand){
                        return(
                            <Horizontal desc={desc} postId={item.id} key={ind} image={item.urls.regular} alt={item.alt_description} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]}/>
                        )
                    }
                    else{
                        return(
                            <Square desc={desc} postId={item.id} key={ind} image={item.urls.regular} alt={item.alt_description} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]}/>
                        )
                    }
                } else if (item.width < item.height){
                    return(
                        <Standard desc={desc} postId={item.id} key={ind} image={item.urls.regular} alt={item.alt_description} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]}/>
                    ) 
                }
            } 
            else if (item.website === 'pexels'){
                if (item.height > item.width){
                    return(
                        <StandardVideo postId={item.id} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]} capt={caption[Math.floor(Math.random() * caption.length)]} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} key={ind} image={item.image} url={item.video_files}/>
                    )
                }
                else if (item.height = item.width){
                    const rand = Math.random() < 0.5
                    if (rand) {
                        return(
                            <SquareVideo postId={item.id} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]} capt={caption[Math.floor(Math.random() * caption.length)]} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} key={ind} image={item.image} url={item.video_files}/>
                        )
                    } else {
                        return(
                            <HorizontalVideo postId={item.id} isActive={activeRef===ind} onClick={()=>clickToOpen(ind)} setRef={childRefs[ind]} capt={caption[Math.floor(Math.random() * caption.length)]} title={title[Math.floor(Math.random() * title.length)]} cat={cat[Math.floor(Math.random() * cat.length)]} key={ind} image={item.image} url={item.video_files}/>
                        )
                    }
                }
            }
        })
        }
    </div>
  )
}

export default MasonryLayout