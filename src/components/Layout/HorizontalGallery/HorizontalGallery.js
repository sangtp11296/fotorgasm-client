import React,{useEffect, useState, useLayoutEffect, useRef} from 'react'
import styles from './HorizontalGallery.module.css'
import LocomotiveScroll from 'locomotive-scroll'

const images = [
  {
    img: 'https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80',
    desc: 'When love has carried us above all things, into the Divine Dark, we receive in peace the Incomprehensible Light, enfolding us and penetrating us. What is this Light, if it be not a contemplation of the Infinite, and an intuition of Eternity?',
    author: 'author1'
  },
  {
    img: 'https://images.unsplash.com/photo-1563124488-159c05ebb7e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80',
    desc: 'When love has carried us above all things, into the Divine Dark, we receive in peace the Incomprehensible Light, enfolding us and penetrating us. What is this Light, if it be not a contemplation of the Infinite, and an intuition of Eternity?',
    author: 'author2'
  },
  {
    img: 'https://images.unsplash.com/photo-1582370930143-4c547062f8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3772&q=80',
    desc: 'When love has carried us above all things, into the Divine Dark, we receive in peace the Incomprehensible Light, enfolding us and penetrating us. What is this Light, if it be not a contemplation of the Infinite, and an intuition of Eternity?',
    author: 'author3'
  },
  {
    img: 'https://images.unsplash.com/photo-1589482338352-c3ab369b4b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3872&q=80',
    desc: 'When love has carried us above all things, into the Divine Dark, we receive in peace the Incomprehensible Light, enfolding us and penetrating us. What is this Light, if it be not a contemplation of the Infinite, and an intuition of Eternity?',
    author: 'author4'
  },
  {
    img: 'https://images.unsplash.com/photo-1617119552150-ecc899f6562c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2624&q=80',
    desc: 'When love has carried us above all things, into the Divine Dark, we receive in peace the Incomprehensible Light, enfolding us and penetrating us. What is this Light, if it be not a contemplation of the Infinite, and an intuition of Eternity?',
    author: 'author5'
  },
  {
    img: 'https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80',
    desc: 'When love has carried us above all things, into the Divine Dark, we receive in peace the Incomprehensible Light, enfolding us and penetrating us. What is this Light, if it be not a contemplation of the Infinite, and an intuition of Eternity?',
    author: 'author6'
  }
]

var imageWidth = [];
  for (let x = 0; x<images.length; x++){
    imageWidth.push(Math.random()*(43-25)+25)
  }
function HorizontalGallery() {
  const scrollRef = useRef();
  var [allPosts, setAllPosts] = useState({
    image: [],
    desc: [],
    capt: []
  })
  const [tempImages, setTempImages] = useState([]);
  let postPoss = [];
  
  useLayoutEffect(() => {
    setAllPosts({
      image: document.getElementsByClassName(`${styles.imgCover}`),
      desc: document.getElementsByClassName(`${styles.imgDesc}`),
      capt: document.getElementsByClassName(`imgCapt`)
    });
  }, [allPosts.image])
  
  useEffect(() => {
    setTimeout(() => {
      // You'd want an exit condition here
      if(tempImages.length<7){
        setTempImages(arr => [...arr, images[arr.length++]]);
      }
    }, 10);
  }, [tempImages]);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: 'horizontal'
    })
  })

  // useEffect(() => {
  //   const elementStyle = document.getElementsByClassName(`${styles.fullpageWrapper}`)[0]
  //   elementStyle.addEventListener('wheel', (ev) => {
  //     ev.preventDefault(); // stop scrolling in another direction
  //     elementStyle.scrollLeft += (ev.deltaY + ev.deltaX)
  //   })
  
  //   return () => {
  //     elementStyle.removeEventListener('wheel', (ev) => {
  //       ev.preventDefault(); // stop scrolling in another direction
  //       elementStyle.scrollLeft += (ev.deltaY + ev.deltaX)
  //     })
  //   }
  // }, [])
  
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
  return (
    <div className={styles.fullpageWrapper} ref={scrollRef}>
      {/* Mapping list of Images */}
      {tempImages.map((item,ind) => {
        {allPosts?.image[ind] && positionUpdate(ind)}
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
            captStyle.transform = 'rotate(-90deg) translate(-50%, -100%)',
            captStyle.textAlign = 'right',
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
        return(
          <div key={ind} className={styles.imgWrapper} style={wrapperStyle}>
              <div className={styles.imgContent}>
                <div className='imgCapt' style={captStyle}>
                  {item?.author && <a>Title<br/>{item?.author}</a>}
                </div>
                <div className={styles.imgDesc} style={descStyle}>
                  <p>{item?.desc}</p>
                </div>
                <div className={styles.imgCover}>
                    <img src={item?.img} style={{width:`${imageWidth[ind]}vh`}}></img>
                </div>
              </div>
          </div>
        )})
      }
    </div>
  )
}


export default HorizontalGallery