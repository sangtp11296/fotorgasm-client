import React, {useEffect, useState, useLayoutEffect, useRef, useCallback} from 'react'
import styles from './HorizontalGallery.module.css'
import {useHorizontalScroll} from '../../Functions/HorizontalScroll/useHorizontalScroll'
import {useFetch} from '../../Functions/useFetch/useFetch'

var imageWidth = [];

function HorizontalGallery() {

  var [allPosts, setAllPosts] = useState({
    image: [],
    desc: [],
    capt: []
  })
  
  const scrollLeft = useHorizontalScroll();
  
  const [pageNum, setPageNum] = useState(1)
  const {isLoading, error, photos, hasMore} = useFetch('blackandwhite', pageNum);
  const [tempImages, setTempImages] = useState([]);

  // Infinite scroll
  const observer = useRef();
  const lastPhotoElement = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum((prev) => prev + 1)
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );
  
  // Random images' width in the first render
  useEffect(()=>{
    for (let x = imageWidth.length; x<photos.length; x++){
      imageWidth.push(Math.random()*(43-25)+25)
    }
  },[photos])

  useEffect(() => {
    setTimeout(() => {
      // You'd want an exit condition here
      if(tempImages.length<(photos.length)){
        setTempImages(arr => [...arr, photos[arr.length++]]);
      }
    }, 10);
  });

  useEffect(() => {
    setAllPosts({
      image: document.getElementsByClassName(`${styles.imgCover}`),
      desc: document.getElementsByClassName(`${styles.imgDesc}`),
      capt: document.getElementsByClassName(`imgCapt`)
    });
  }, [tempImages])

  
  
  
  // Style the scrollbar only show when scrolling and horizontal scroll
  // useEffect(()=>{
  //   const handleScroll = (e) => {
  //     const elementStyle = document.getElementsByClassName(`${styles.fullpageWrapper}`)[0]
  //     elementStyle.addEventListener('wheel', (ev) => {
  //       ev.preventDefault(); // stop scrolling in another direction
  //       elementStyle.scrollLeft += (ev.deltaY + ev.deltaX)
  //     })
      // elementStyle.classList.add(`${styles.scroll}`)
      // clearTimeout(timer);
      // const timer = setTimeout(()=>{
      //   elementStyle.classList.remove(`${styles.scroll}`)
      // },100)
  //   };
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // },[])

  // Function update next position for next post
  var postPoss = [];
  const positionUpdate = (x) => {
    const offset = 1311;
    var top = 0;
    var bot = 0;
    var left = 0;
    var right = 0;
    
    if(x == 0){
      // Store a, b point of the rectangle posts
      if(allPosts.image[0].getBoundingClientRect().width>allPosts.image[0].getBoundingClientRect().height){
        top = allPosts.image[0].getBoundingClientRect().top
        left = allPosts.image[0].getBoundingClientRect().left
        right = allPosts.desc[0].getBoundingClientRect().right
        bot = allPosts.capt[0].getBoundingClientRect().bottom
      }
      // Store a, b point of other posts
      else{
        top = allPosts.image[0].getBoundingClientRect().top
        left = allPosts.capt[0].getBoundingClientRect().left
        right = allPosts.image[0].getBoundingClientRect().right
        bot = allPosts.desc[0].getBoundingClientRect().bottom
      }
      postPoss.push({top, left, bot, right})
    }
    else{
      while(!top && !left && !bot && !right || !checkValid(top, left, bot, right)){
        // Generate position for rectangle post type
        if(allPosts.image[x]){
          if(allPosts.image[x].getBoundingClientRect().width > allPosts.image[x].getBoundingClientRect().height){
            top = Math.floor(Math.random()*(offset - allPosts.image[x].getBoundingClientRect().height - allPosts.capt[x].getBoundingClientRect().height))
            left = Math.floor(Math.random()*((Math.max(...postPoss.map(r => r.right)) + 200) - (Math.max(...postPoss.map(r => r.right)) - 300)) + (Math.max(...postPoss.map(r => r.right)) - 300))
            bot = top + allPosts.image[x].getBoundingClientRect().height + allPosts.capt[x].getBoundingClientRect().height
            right = left + allPosts.desc[x].getBoundingClientRect().width + allPosts.image[x].getBoundingClientRect().width
          }
          // Generate position for other post type
          else{
            top = Math.floor(Math.random()*(offset - allPosts.image[x].getBoundingClientRect().height - allPosts.desc[x].getBoundingClientRect().height))
            left = Math.floor(Math.random()*((Math.max(...postPoss.map(r => r.right)) + 200) - (Math.max(...postPoss.map(r => r.right)) - 300)) + (Math.max(...postPoss.map(r => r.right)) - 300)) + allPosts.capt[x].getBoundingClientRect().width
            bot = top + allPosts.image[x].getBoundingClientRect().height + allPosts.desc[x].getBoundingClientRect().height
            right = left + allPosts.capt[x].getBoundingClientRect().width + allPosts.image[x].getBoundingClientRect().width
          }
        }
        if (top && left && bot && right && checkValid(top, left, bot, right)) {
          postPoss.push({top, left, bot, right});
          break;
        }
      }
    }
  }
  // Check if the generated position is valid
  function checkValid(t, l, b, r){
    let state;
    for (const postPos of postPoss){
      // Overflow post
      if (l > postPos.right || r < postPos.left || t > postPos.bot || b < postPos.top) {
        state = true
      }
      else if (b > window.innerHeight){
        state = false
      }
      else state = false
    }
    if (state) return true
    else return false
  }
  
  console.log(photos.length)
  console.log("postPoss",postPoss.length,postPoss)
  return (
    <div className={styles.fullpageWrapper} ref={scrollLeft}>
        {/* Mapping list of Images */}
        {tempImages.map((item,ind) => {
          allPosts?.image[ind] && positionUpdate(ind)
          const wrapperStyle = {
            top: `${allPosts.image[ind] ? postPoss[ind].top : ''}` + 'px',
            left: `${allPosts.image[ind] ? postPoss[ind].left : ''}` + 'px',
          }
          const captStyle = {}
          
          const descStyle = {}
          // Styling the post depending on isRect state
          if (allPosts.image[ind]){
            var width = allPosts.image[ind].getBoundingClientRect().width
            var height = allPosts.image[ind].getBoundingClientRect().height
            if (width>height){
              // Random position for caption
              if (Math.random() < 0.5){
                captStyle.position = 'absolute',
                captStyle.textTransform = 'uppercase',
                captStyle.bottom = '0px',
                captStyle.transform  = 'translateY(100%)',
                captStyle.right = '0px',
                captStyle.textAlign = 'right'
              }
              else {
                captStyle.position = 'absolute',
                captStyle.textTransform = 'uppercase',
                captStyle.bottom = '0px',
                captStyle.transform  = 'translateY(100%)',
                captStyle.left = '0px',
                captStyle.textAlign = 'left'
              }
              // Random position for description
              if (Math.random() < 0.5){
                descStyle.right = '0px',
                descStyle.bottom = '0px',
                descStyle.transform = 'translateX(100%)',
                descStyle.textAlign ='left',
                descStyle.paddingLeft = '10px'
              }
              else {
                descStyle.right = '0px',
                descStyle.transform = 'translateX(100%)',
                descStyle.textAlign ='left',
                descStyle.paddingLeft = '10px'
              }
            }
            else {
              captStyle.position = 'absolute',
              captStyle.textTransform = 'uppercase',
              captStyle.bottom = '0px',
              // captStyle.transform = 'translateY(100%)',
              captStyle.transform = 'rotate(-90deg) translate(-13%, -100%)',
              captStyle.textAlign = 'left',
              captStyle.transformOrigin = 'left top',
              captStyle.paddingBottom = '5px'
              
              // Random position for description
              if (Math.random() < 0.5){
                descStyle.right = '0px',
                descStyle.bottom = '0px',
                descStyle.transform = 'translateY(100%)',
                descStyle.textAlign ='right',
                descStyle.paddingTop = '6px'
              }
              else {
                descStyle.left = '0px',
                descStyle.bottom = '0px',
                descStyle.transform = 'translateY(100%)',
                descStyle.textAlign ='left',
                descStyle.paddingTop = '6px'
              }
            }
          }

          if (photos.length === ind + 1){
            return(
              <div key={ind} ref={lastPhotoElement} className={styles.imgWrapper} style={wrapperStyle}>
                  <div className={styles.imgContent}>
                    <div className='imgCapt' style={captStyle}>
                      {item?.user && <a>item.user.instagram_username<br/>{item?.user.name}</a>}
                    </div>
                    <div className={styles.imgDesc} style={descStyle}>
                      <p>{item?.alt_description}</p>
                    </div>
                    <div className={styles.imgCover}>
                        <img src={item?.urls.full} style={{width:`${imageWidth[ind]}vh`}}></img>
                    </div>
                  </div>
              </div>
            )
          }
          else{
            return(
              <div key={ind} className={styles.imgWrapper} style={wrapperStyle}>
                  <div className={styles.imgContent}>
                    <div className='imgCapt' style={captStyle}>
                      {item?.user && <a>item.user.instagram_username<br/>{item?.user.name}</a>}
                    </div>
                    <div className={styles.imgDesc} style={descStyle}>
                      <p>{item?.alt_description}</p>
                    </div>
                    <div className={styles.imgCover}>
                        <img src={item?.urls.full} style={{width:`${imageWidth[ind]}vh`}}></img>
                    </div>
                  </div>
              </div>
            )
          }
        })
        }
    </div>
  )
}


export default HorizontalGallery