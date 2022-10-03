import React,{useEffect, useState, useLayoutEffect} from 'react'
import styles from './HorizontalGallery.module.css'
import styled from 'styled-components'

const ImgCapt = styled.div`
  // position: absolute;
  // text-transform: uppercase;
  // transform: ${props => props.isRect?'':'rotate(-90deg) translate(-50%, -100%)'};
  // bottom: 0;
`
const images = [
  {
    img: 'https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80'
  },
  {
    img: 'https://images.unsplash.com/photo-1563124488-159c05ebb7e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80'
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1582370930143-4c547062f8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3772&q=80'
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589482338352-c3ab369b4b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3872&q=80'
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1617119552150-ecc899f6562c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2624&q=80'
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80'
  // }
]
var imageWidth = [];
for (let x = 0; x<images.length; x++){
  imageWidth.push(Math.random()*(43-30)+30)
} 

function HorizontalGallery() {
  // var [allImageCover, setAllImageCover] = useState([])
  // var [allImageDesc, setAllImageDesc] = useState([])
  // var [allImageCapt, setAllImageCapt] = useState([])
  var [allPosts, setAllPosts] = useState({
    image: [],
    desc: [],
    capt: []
  })
  var postPoss = [];

  useLayoutEffect(() => {
    console.log('layout')
    setAllPosts({
      image: document.getElementsByClassName(`${styles.imgCover}`),
      desc: document.getElementsByClassName(`${styles.imgDesc}`),
      capt: document.getElementsByClassName(`imgCapt`)
    })
    // setAllImageCover(document.getElementsByClassName(`${styles.imgCover}`))
    // setAllImageDesc(document.getElementsByClassName(`${styles.imgDesc}`))
    // setAllImageCapt(document.getElementsByClassName(`imgCapt`))

  }, [allPosts.image])
  
  // Function update next position for next post
  const positionUpdate = (x) => {
    console.log('set aPoint'+[x], 'bPoint'+[x])
    const offset = 1311;
    var top;
    var bot;
    var left;
    var right;

    if(allPosts.image[0]){
      // Store a, b point of the rectangle posts
      if(allPosts.image[0].getBoundingClientRect().width>allPosts.image[0].getBoundingClientRect().height){
        if(allPosts.image[0].getBoundingClientRect().right > allPosts.desc[0].getBoundingClientRect().right){
            top = allPosts.image[0].getBoundingClientRect().top
            left = allPosts.desc[0].getBoundingClientRect().left
            right = allPosts.image[0].getBoundingClientRect().right
            bot = allPosts.capt[0].getBoundingClientRect().bottom
        }
        else {
          top = allPosts.image[0].getBoundingClientRect().top
          left = allPosts.image[0].getBoundingClientRect().left
          right = allPosts.desc[0].getBoundingClientRect().right
          bot = allPosts.capt[0].getBoundingClientRect().bottom
        }
      }
      // Store a, b point of other posts
      else{
        top = allPosts.image[0].getBoundingClientRect().top
        left = allPosts.capt[0].getBoundingClientRect().left
        right = allPosts.image[0].getBoundingClientRect().right
        bot = allPosts.desc[0].getBoundingClientRect().bottom
      }
      postPoss.push({top, left, bot, right})
      console.log(postPoss)
    }
    while(!checkValid(top, left, bot, right)){
      // Generate position for rectangle post type
      if(!allPosts.image[0] && allPosts.image[x]){
        if(allPosts.image[x].getBoundingClientRect().width > allPosts.image[x].getBoundingClientRect().height){
          if(allPosts.image[x].getBoundingClientRect().right > allPosts.desc[x].getBoundingClientRect().right){
            top = Math.random()*(offset-allPosts.image[x].getBoundingClientRect().height)
            left = Math.random()*(postPoss[x-1].right + 20) - allPosts.desc.getBoundingClientRect().width
            bot = postPoss[x].top + allPosts.image[x].getBoundingClientRect().height + allPosts.capt.getBoundingClientRect().height
            right = postPoss[x].left + allPosts.desc[x].getBoundingClientRect().width + allPosts.image.getBoundingClientRect().width
          }
          else{
            top = Math.random()*(offset-allPosts.image[x].getBoundingClientRect().height)
            left = Math.random()*(postPoss[x-1].right + 20)
            bot = postPoss[x].top + allPosts.image[x].getBoundingClientRect().height + allPosts.capt[x].getBoundingClientRect().height
            right = postPoss[x].left + allPosts.desc[x].getBoundingClientRect().width + allPosts.image[x].getBoundingClientRect().width
          }
        }
      }
      // Generate position for other post type
      else{
        top = Math.random()*(offset-allPosts.image[x].getBoundingClientRect().height)
        left = Math.random()*(postPoss[x-1].right + 20) - allPosts.capt.getBoundingClientRect().width
        bot = postPoss[x].top + allPosts[x].image.getBoundingClientRect().height + allPosts.desc.getBoundingClientRect().height
        right = postPoss[x].left + allPosts.capt.getBoundingClientRect().width + allPosts.image.getBoundingClientRect().width
      }
      if (checkValid(top, left, bot, right)) break;
    }
    postPoss.push({top, left, bot, right});
    
  }
  // Check if aPoint and bPoint valid
  function checkValid(t, l, b, r){
    for (let postPos of postPoss){
      if (t > postPos.top && t < postPos.bot && l > postPos.left && l < postPos.right){
        return false
      }
      else{
        if (b > postPos.top && b < postPos.bot && r > postPos.left && r < postPos.right){
          return false
        }
        else return true
      }
    }
  }
  return (
    <div className={styles.fullpageWrapper}>
      {/* Mapping list of Images */}
      {images.map((item,ind) => {
        console.log(ind,'ind in render')
        positionUpdate(ind)
       // Styling the post depending on isRect state
        const wrapperStyle = {
          top: aPoint.top[ind] + 'px',
          left: aPoint.left[ind] + 'px'
        }
        const captStyle = {}
        
        const descStyle = {}
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
              descStyle.transform = 'translateX(100%)',
              descStyle.textAlign ='left',
              descStyle.paddingLeft = '10px'
            }
            else {
              descStyle.left = '0px',
              descStyle.transform = 'translateX(-100%)',
              descStyle.textAlign ='right',
              descStyle.paddingRight = '10px'
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
                {/* <ImgCapt className='imgCapt' key={ind} isRect={isRect} style={captStyle}>
                  <a>Title<br/>Author</a>
                </ImgCapt> */}
                <div className='imgCapt' style={captStyle}>
                  <a>Title<br/>Author</a>
                </div>
                <div className={styles.imgDesc} style={descStyle}>
                  <p>When love has carried us above all things, into the Divine Dark, we receive in peace the Incomprehensible Light, enfolding us and penetrating us. What is this Light, if it be not a contemplation of the Infinite, and an intuition of Eternity?</p>
                </div>
                <div className={styles.imgCover}>
                    <img src={item.img} style={{width:`${imageWidth[ind]}vh`}}></img>
                </div>
              </div>
          </div>
        )})
      }
    </div>
  )
}


export default HorizontalGallery