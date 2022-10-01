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
  var posT = [100];
  var posL = [300];
  var posB = [];
  var posR = [];
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
  }, [])
  console.log(allPosts)
  // Filter and Store unique elements
  // allImageCover = [...new Set(allImageCover)]
  // allImageDesc = [...new Set(allImageDesc)]
  // allImageCapt = [...new Set(allImageCapt)]
  
  // Function update next position for next post
  const positionUpdate = (x) => {
    console.log('set posR'+[x], 'posB'+[x])
    const offset = 1311;
    if(allPosts.image[x+1]){
      console.log(allPosts.image[0].getBoundingClientRect().width,'width')
      console.log(allPosts.capt[0].getBoundingClientRect())
      // Store posR vs posB of previous post
      if(allPosts.image[x].getBoundingClientRect().right > allPosts.desc[x].getBoundingClientRect().right){
        // setPosR(items=>[...items, allImageCover[x].getBoundingClientRect().right]);
        // setPosB(items=>[...items,allImageCapt[x].getBoundingClientRect().bottom]);
        posR.push(allPosts.image[x].getBoundingClientRect().right)
        posB.push(allPosts.capt[x].getBoundingClientRect().bottom)
      }
      else {
        // setPosR(items=>[...items, allImageDesc[x].getBoundingClientRect().right]);
        // setPosB(items=>[...items,allImageCapt[x].getBoundingClientRect().bottom]);
        posR.push(allPosts.desc[x].getBoundingClientRect().right)
        posB.push(allPosts.capt[x].getBoundingClientRect().bottom)
      }
      console.log(posR[x],'R',posB[x],'B')
      // Generate next position for next post
      const remainHeight = offset - posB[x] - 10
      console.log(remainHeight,'remainH')
      // Generate top position for rectangle post
      if(allPosts.image[x+1].getBoundingClientRect().width > allPosts.image[x+1].getBoundingClientRect().height){
        if (remainHeight >= (allPosts.capt[x+1].getBoundingClientRect().height + allPosts.image[x+1].getBoundingClientRect().height)){
          posT.push(Math.random()*((posB[x]+10) - (posB[x]+5))+(posB[x]+5))
          posL.push(Math.random()*(posR[x] - (posR[x]-allPosts.image[x].getBoundingClientRect().width))+((posR[x]-allPosts.image[x].getBoundingClientRect().width)))
        }
        else{
          posL.push(Math.random()*(posR[x]+10 - (posR[x]+5))+((posR[x]+5)))
          posT.push(Math.random()*(offset - allPosts.image[x+1].getBoundingClientRect().height - allPosts.capt[x+1].getBoundingClientRect().height)) // for rectangle post
        }
      }
      // Generate top position for other post
      else {
        if (remainHeight >=(allPosts.image[x+1].getBoundingClientRect().height + allPosts.desc[x+1].getBoundingClientRect().height)){
          posT.push(Math.random()*((posB[x]+10) - (posB[x]+5))+(posB[x]+5))
          posL.push(Math.random()*(posR[x] - (posR[x]-allPosts.image[x].getBoundingClientRect().width))+((posR[x]-allPosts.image[x].getBoundingClientRect().width)))
        }
        else{
          posT.push(Math.random()*(offset - allPosts.image[x+1].getBoundingClientRect().height - allPosts.desc[x+1].getBoundingClientRect().height)) // for other post
          posL.push(Math.random()*(posR[x]+10 - (posR[x]+5))+((posR[x]+5)))
        }
      }
    }
    console.log(posT,'T',posL,'L',posR,'R',posB,'B')
  }
  return (
    <div className={styles.fullpageWrapper}>
      {/* Mapping list of Images */}
      {images.map((item,ind) => {
        console.log(ind,'ind in render')
       // Styling the post depending on isRect state
        const wrapperStyle = {
          top: posT[ind] + 'px',
          left: posL[ind] + 'px'
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
        console.log('styling')
        // positionUpdate(ind)
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
              {positionUpdate(ind)}
          </div>
        )})
      }
    </div>
  )
}


export default HorizontalGallery