import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoPage.module.css'

function VideoPage({postForm, url, image, fromFeed, title, cat, capt}) {
    const [info, setInfo] = useState(false);
    const [isFade, setFade] = useState(false);
    const [isPlay, setPlay] = useState(true);
    const [isAudio, setAudio] = useState();
    const [isMuted, setMuted] = useState('');
    const captionRef = useRef();
    const videoRef = useRef();
    const caption = [
  "Travel has always been a way for people to explore new places, cultures, and experiences. It is a way to broaden our horizons and open our minds to new possibilities. In today's world, travel is more accessible than ever before, and yet many people still do not take advantage of the opportunities it offers.One of the biggest benefits of travel is the opportunity to learn about different cultures and ways of life. When we travel, we are exposed to new foods, customs, and traditions. We learn about history and geography in a way that is impossible from a textbook or a screen. Travel also challenges our assumptions and biases, as we are forced to confront ideas and ways of life that may be different from our own.Another important benefit of travel is the opportunity to disconnect from our daily lives and routines. When we travel, we are forced to step outside of our comfort zones and embrace new experiences. This can be scary at times, but it is also incredibly rewarding. It can help us to gain perspective and clarity, and to appreciate the things that truly matter in life.Finally, travel is a way to build connections and relationships with people from around the world. When we travel, we have the opportunity to meet people who we may never have crossed paths with otherwise. We can build friendships and learn from each other's perspectives, and in doing so, we can help to break down barriers and promote understanding and empathyGoals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.When we travel, we have the opportunity to meet people who we may never have crossed paths with otherwise. We can build friendships and learn from each other's perspectives, and in doing so, we can help to break down barriers and promote understanding and empathyGoals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.",
  "Setting goals is a crucial step towards achieving success in any aspect of life. Whether it's personal or professional, having clear and well-defined goals provides a roadmap for our actions and helps us stay focused and motivated. Without goals, we may find ourselves drifting aimlessly, unsure of what we want to achieve or how to get there.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we wantWhen we travel, we have the opportunity to meet people who we may never have crossed paths with otherwise. We can build friendships and learn from each other's perspectives, and in doing so, we can help to break down barriers and promote understanding and empathyGoals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want..",
  'Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.',
  'Volunteering is a wonderful way to give back to the community and make a positive impact on the world around us. It can also have numerous benefits for the volunteers themselves, both personally and professionally.First and foremost, volunteering provides an opportunity to help others and make a difference in the world. Whether its through donating time, skills, or resources, volunteers play a crucial role in supporting charities and organizations that work to improve the lives of others. Volunteering can also help us to develop a deeper sense of empathy and understanding for those in need, and increase our overall sense of compassion and kindness.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.',
  'Moreover, volunteering can have personal benefits as well. It can provide an opportunity to learn new skills, make new friends, and develop a sense of purpose and fulfillment. Volunteering can also help to boost self-confidence and self-esteem, as volunteers see the positive impact they are making on the world around them.From a professional standpoint, volunteering can also provide numerous benefits. It can provide an opportunity to network with like-minded individuals, develop new skills and experiences, and gain valuable work experience. Volunteering can also help to build a positive reputation and enhance a resume, which can be beneficial for career advancement.Setting goals helps us to prioritize our time and resources, and provides a sense of direction and purpose. It allows us to break down larger, more complex tasks into smaller, more manageable ones, and helps us stay on track by providing a clear endpoint to work towards. Goals also provide a way to measure progress, and allow us to celebrate our achievements along the way.Moreover, setting goals can boost our self-confidence and self-esteem. When we set and achieve goals, we feel a sense of accomplishment and pride in ourselves, which can help to build a positive self-image and increase our overall well-being. Goals also provide us with a sense of control over our lives, as we actively work towards creating the future we want.In conclusion, setting goals is an essential step towards achieving success in any aspect of life. Whether its personal or professional, having clear and well-defined goals helps us to prioritize our time and resources, stay focused and motivated, measure progress, and boost our self-confidence and self-esteem. So, if you havent already, take some time to define your goals and start working towards them today.',
  'Moreover, volunteering can have personal benefits as well. It can provide an opportunity to learn new skills, make new friends, and develop a sense of purpose and fulfillment. Volunteering can also help to boost self-confidence and self-esteem, as volunteers see the positive impact they are making on the world around them.From a professional standpoint, volunteering can also provide numerous benefits. It can provide an opportunity to network with like-minded individuals, develop new skills and experiences, and gain valuable work experience. Volunteering can also help to build a positive reputation and enhance a resume, which can be beneficial for career advancement.In conclusion, volunteering is a wonderful way to give back to the community and make a positive impact on the world around us. It can also provide numerous benefits for volunteers themselves, both personally and professionally. So, if youre looking for a way to make a difference and improve your own life at the same time, consider volunteering your time and skills to a worthy cause.',
  "The storm was fierce, with winds that howled and rain that poured down in sheets. But as I watched from my window, I felt a sense of awe and wonder. The power of nature was on full display, and it was both terrifying and beautiful. It was a reminder that even in the face of uncontrollable forces, there was still a sense of order and purpose in the universe.",
    ];

    function randomNum(){
        // Generate a random number between min and max
        const num = Math.floor(Math.random() * (100000000 - 0 + 1)) + 0;
        const thousands = Math.floor(num / 1000);
        const millions = Math.floor(num / 1000000);
        const remainder = Math.floor((num % 1000) / 100);
        // Check if the number is greater than 1000
        if (num >= 1000 && num < 10000) {
          // Add "k" as thousands to the number
          if (remainder === 0){
            return <span>{thousands}k</span>;
          } else return <span>{thousands}k{remainder}</span>;
        } else if (num === 0) {
          return null;
        } else if (num >= 10000 && num < 1000000){
            return <span>{thousands}k</span>
        } else if (num >= 1000000){
            return <span>{millions}M</span>
        } else {
          return <span>{num}</span>;
        } 
      }
    // Handle Info max and min
    useEffect(() => {
        if (info) {
            captionRef.current.style.WebkitLineClamp = '';
            const contentHeight = document.getElementsByClassName(`${styles.videoCat}`)[0].offsetHeight + document.getElementsByClassName(`${styles.videoTitle}`)[0].offsetHeight + document.getElementsByClassName(`${styles.captWrapper}`)[0].scrollHeight + document.getElementsByClassName(`${styles.videographer}`)[0].offsetHeight;
                if (contentHeight > videoRef.current.offsetHeight/2){
                    captionRef.current.style.maxHeight = (videoRef.current.offsetHeight/2 - (document.getElementsByClassName(`${styles.videoCat}`)[0].offsetHeight + document.getElementsByClassName(`${styles.videoTitle}`)[0].offsetHeight + document.getElementsByClassName(`${styles.videographer}`)[0].offsetHeight)) + 'px';
                    setFade(true);
                    console.log(contentHeight,'contentHeight',videoRef.current.offsetHeight/2)
                } else {
                    captionRef.current.style.maxHeight = document.getElementsByClassName(`${styles.captWrapper}`)[0].offsetHeight + 'px';
                    setFade(false);
                }
            } else if (!info){
                captionRef.current.scrollTop = 0;
                captionRef.current.style.maxHeight = 30 + 'px';
                setFade(false);
                setTimeout(()=>{
                    document.getElementsByClassName(`${styles.captWrapper}`)[0].removeAttribute("style");
                }, 10);
                setTimeout(()=>{
                    captionRef.current.style.WebkitLineClamp = 1;
                }, 500);
        }
    },[info])

    // Click to toggle play and pause
    function handlePlayPause(){
        if (videoRef.current.paused){
            videoRef.current.play();
            setPlay(true);
        } else{
            videoRef.current.pause();
            setPlay(false);
        }
    }
    // Check audio source and mute or unmute
    useEffect(()=>{
        if (videoRef.current.mozHasAudio ||
            Boolean(videoRef.current.webkitAudioDecodedByteCount) ||
            Boolean(videoRef.current.audioTracks && videoRef.current.audioTracks.length)){
            if(videoRef.current.muted){
              setMuted('muted');
              setAudio(true);
            }
          } else {
            setAudio(false);
            setMuted(null);
          }
    })
    function toggleMute(){
        videoRef.current.muted = !videoRef.current.muted;
        if (isMuted === 'unmuted'){
        setMuted('muted');
        } else if (isMuted === 'muted'){
        setMuted('unmuted');
        }
    }
    function handleScroll(){
        const caption = document.getElementsByClassName(`${styles.videoCapt}`)[0];
        const fade = document.getElementsByClassName(`${styles.fade}`)[0];
        if(isFade){
            const captionScrollHeight = caption.scrollHeight - caption.offsetHeight;
            const currentScroll = caption.scrollTop / (captionScrollHeight);
            if (currentScroll === 0){
                fade.style.backgroundImage = 'linear-gradient(white 85%, transparent 91%)';
            }else if (currentScroll > 0.95){
                fade.style.backgroundImage = 'linear-gradient(transparent 54%, white 60%)';
            } else if (currentScroll > 0 && currentScroll <= 0.95) {
                fade.style.backgroundImage = 'linear-gradient(transparent 54%, white 60%, white 85%, transparent 91%)';
            }
        }
    }
  return (
    <>
        {
            postForm === 'standardVideo' ? 
            <div className={styles.standardVideo}>
                <video className={styles.videoSrc} ref={videoRef} poster={image} onClick={handlePlayPause} muted autoPlay loop>
                {url.map((vid,ind) => {
                    return(
                    <source src={`${vid.link}`} type={`${vid.file_type}`} key={ind}/>
                    )
                })}
                </video>
                <div className={styles.videoAudio}>
                <button style={{display: isAudio === false ? '' : 'none', scale:'none', opacity:'.5'}} disabled>
                        <svg viewBox="0 0 24 24" height='25px' width='25px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8.14307C3.4148 8.66137 3 9.49393 3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C12.6098 21 13.0337 19.3265 13.2717 17M3 3L21 21M9 4.60756C9.84604 3.71548 10.8038 3 12 3C12.7739 3 13.2484 5.69533 13.4233 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                    
                    <button className='muted' style={{display: isAudio&&isMuted==='muted' ? '':'none',cursor:'pointer'}} onClick={toggleMute}>
                        <svg height='25px' width='25px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 9L16 15M16 9L22 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                    
                    <button className='unmuted' style={{display: isAudio&&isMuted==='unmuted' ? '':'none',cursor:'pointer'}} onClick={toggleMute}>
                        <svg height='25px' width='25px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 6C20.5 7.5 21 10 21 12C21 14 20.5 16.5 19 18M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15M3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C14 21 14 3 12 3C9 3 7.5 7.5 5.5 8C3.5 8.5 3 9.39543 3 10.5Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg> 
                    </button>
                </div>
                {/* <button className={styles.fullScreen}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                        <path d="M21 14V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H14M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10M15 9L21 3M21 3H15M21 3V9M9 15L3 21M3 21H9M3 21L3 15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        </path> 
                        </g>
                    </svg>
                </button> */}
                <div className={`${styles.videoOverlay} ${info ? styles.active : ''}`} style={{height: info ? '100%' : '20%', opacity: info ? '1':'.8'}}></div>
                {
                    isPlay ? '' : <div className={styles.playPause} onClick={handlePlayPause}>
                    <svg viewBox="-11.59 0 70.804 70.804" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_5" dataname="Group 5" transform="translate(-812.296 -152.922)"> <line id="Line_2" dataname="Line 2" x2="13.298" y2="8.679" transform="translate(819.601 164.636)" fill="none" stroke="#5cb0ff" strokeMiterlimit="10" strokeWidth="3"></line> <path id="Path_12" dataname="Path 12" d="M816.654,165.358,857.471,192a1.905,1.905,0,0,1,0,3.3l-40.817,26.638a1.9,1.9,0,0,1-2.858-1.65V167.008A1.9,1.9,0,0,1,816.654,165.358Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" opacity="0.15"></path> <path id="Path_13" dataname="Path 13" d="M816.654,154.712l40.817,26.639a1.905,1.905,0,0,1,0,3.3L816.654,211.29a1.905,1.905,0,0,1-2.858-1.65V156.362A1.905,1.905,0,0,1,816.654,154.712Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3"></path> </g> </g></svg>
                    </div>
                }
                <div className={styles.videoInfo} onClick={()=>setInfo(!info)}>
                    {cat ? 
                        <div className={`${styles.videoCat}`}>
                            <img alt={`on ${cat}`} src={require(`../../../images/menu/on ${cat}.png`)}/>
                            <span>on {cat}</span>
                        </div> : ''
                    }
                    <div className={styles.videoTitle}>
                        <h1>{title}</h1>
                    </div>
                    <div className={`${styles.videoCapt}`} ref={captionRef} onScroll={handleScroll}  style={{overflow: info ? 'scroll' : "hidden"}}>
                        <div className={`${styles.captWrapper} ${(isFade)? styles.fade : ''}`}>
                            <p style={{color: 'var(--on-background)'}} id='#caption'>{caption[Math.floor(Math.random() * caption.length)]}</p>
                        </div>
                    </div>
                    <div className={styles.videographer}>
                        <svg height="12px" width="12px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <g> 
                                    <path styles={{fill:'#fff'}} className="st0" d="M256,265.308c73.252,0,132.644-59.391,132.644-132.654C388.644,59.412,329.252,0,256,0 c-73.262,0-132.643,59.412-132.643,132.654C123.357,205.917,182.738,265.308,256,265.308z"></path> 
                                    <path styles={{fill:'#fff'}} className="st0" d="M425.874,393.104c-5.922-35.474-36-84.509-57.552-107.465c-5.829-6.212-15.948-3.628-19.504-1.427 c-27.04,16.672-58.782,26.399-92.819,26.399c-34.036,0-65.778-9.727-92.818-26.399c-3.555-2.201-13.675-4.785-19.505,1.427 c-21.55,22.956-51.628,71.991-57.551,107.465C71.573,480.444,164.877,512,256,512C347.123,512,440.427,480.444,425.874,393.104z"></path> 
                                </g> 
                            </g>
                        </svg>
                        <span>fotorgasm</span>
                    </div>
                </div>
                <div className={styles.videoSocial}>
                    <button className={styles.button}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                    {randomNum()}
                    <button className={styles.button}>
                        <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                        <path className="cls-1" d="M21.5,12A9.5,9.5,0,1,0,12,21.5h9.5l-2.66-2.92A9.43,9.43,0,0,0,21.5,12Z" fill='none' stroke='#fff' strokeMiterlimit={10} strokeWidth='1.2px'></path></g></svg>
                    </button>
                    {randomNum()}
                    <button className={styles.button}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5 3.5L3.5 9L10 12L17 7L12 14L15 20.5L20.5 3.5Z" strokeWidth='1.2' stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                    {randomNum()}
                    <div className={styles.videoIcon}>
                    <svg height='23px' width='23px' fill={`var(--on-background)`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g dataname="Layer 2">
                        <g dataname="film">
                        <rect width="24" height="24" opacity="0"></rect>
                        <path d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm14-2h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z"></path>
                        </g> </g> </g></svg>
                    </div>
                </div>
            </div> 
            :
            ''
        }
    </>
  )
}

export default VideoPage