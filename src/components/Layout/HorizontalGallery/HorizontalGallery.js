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
  {
    img: 'https://images.unsplash.com/photo-1582370930143-4c547062f8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3772&q=80'
  },
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

function HorizontalGallery() {
  var [allImageCover, setAllImageCover] = useState([])
  var [allImageDesc, setAllImageDesc] = useState([])
  var [allImageCapt, setAllImageCapt] = useState([])
  // const [posT, setPosT] = useState([100])
  // const [posL, setPosL] = useState([300])
  // const [posB, setPosB] = useState([])
  // const [posR, setPosR] = useState([])
  var posT = [100];
  var posL = [300];
  var posB = [];
  var posR = [];

  useLayoutEffect(() => {
    console.log('layout')
    setAllImageCover(document.getElementsByClassName(`${styles.imgCover}`))
    setAllImageDesc(document.getElementsByClassName(`${styles.imgDesc}`))
    setAllImageCapt(document.getElementsByClassName(`imgCapt`))
    // Filter and Store unique elements
    allImageCover = [...new Set(allImageCover)]
    allImageDesc = [...new Set(allImageDesc)]
    allImageCapt = [...new Set(allImageCapt)]
    console.log(allImageCover,'allImageCover in useEff')
    
    // positionUpdate();
    
  }, [allImageCover])

  // Function update next position for next post
  const positionUpdate = (x) => {
    // for (x = 0; x < allImageCover.length; x++){

      console.log('set posR, posB')
      // Store posR vs posB of previous post
      if(allImageCover[x].getBoundingClientRect().right > allImageDesc[x].getBoundingClientRect().right){
        // setPosR(items=>[...items, allImageCover[x].getBoundingClientRect().right]);
        // setPosB(items=>[...items,allImageCapt[x].getBoundingClientRect().bottom]);
        posR.push(allImageCover[x].getBoundingClientRect().right)
        posB.push(allImageCapt[x].getBoundingClientRect().bottom)
      }
      else {
        // setPosR(items=>[...items, allImageDesc[x].getBoundingClientRect().right]);
        // setPosB(items=>[...items,allImageCapt[x].getBoundingClientRect().bottom]);
        posR.push(allImageDesc[x].getBoundingClientRect().right)
        posB.push(allImageCapt[x].getBoundingClientRect().bottom)
      }
      console.log(posR,posB)
      // Generate next position for next post
      const offset = 1311;
      console.log(posB[x-1],'posB')
      const remainHeight = offset - posB[x-1] - 10
      console.log(remainHeight,'remainH')
      // Generate top position for rectangle post
      if(allImageCover[x].getBoundingClientRect().width > allImageCover[x].getBoundingClientRect().height){
        if (remainHeight >= (allImageCapt[x].getBoundingClientRect().height + allImageCover[x].getBoundingClientRect().height)){
          // setPosT(items=>[...items, Math.random()*((posB[x-1]+10) - (posB[x-1]+5))+(posB[x-1]+5)])
          // setPosL(items=>[...items, Math.random()*(posR[x-1] - (posR[x-1]-allImageCover[x-1].getBoundingClientRect().width))+((posR[x-1]-allImageCover[x-1].getBoundingClientRect().width))])
          posT.push(Math.random()*((posB[x-1]+10) - (posB[x-1]+5))+(posB[x-1]+5))
          posL.push(Math.random()*(posR[x-1] - (posR[x-1]-allImageCover[x-1].getBoundingClientRect().width))+((posR[x-1]-allImageCover[x-1].getBoundingClientRect().width)))
        }
        else{
          // setPosL(items=>[...items, Math.random()*(posR[x-1]+10 - (posR[x-1]+5))+((posR[x-1]+5))])
          // setPosT(items=>[...items, Math.random()*(offset - allImageCover[x].getBoundingClientRect().height - allImageCapt[x].getBoundingClientRect().height)]) // for rectangle post
          posL.push(Math.random()*(posR[x-1]+10 - (posR[x-1]+5))+((posR[x-1]+5)))
          posT.push(Math.random()*(offset - allImageCover[x].getBoundingClientRect().height - allImageCapt[x].getBoundingClientRect().height))
        }
      }
      // Generate top position for other post
      else {
        if (remainHeight >=(allImageCover[x].getBoundingClientRect().height + allImageDesc[x].getBoundingClientRect().height)){
          // setPosT(items=>[...items, Math.random()*((posB[x-1]+10) - (posB[x-1]+5))+(posB[x-1]+5)])
          // setPosL(items=>[...items, Math.random()*(posR[x-1] - (posR[x-1]-allImageCover[x-1].getBoundingClientRect().width))+((posR[x-1]-allImageCover[x-1].getBoundingClientRect().width))])
          posT.push(Math.random()*((posB[x-1]+10) - (posB[x-1]+5))+(posB[x-1]+5))
          posL.push(Math.random()*(posR[x-1] - (posR[x-1]-allImageCover[x-1].getBoundingClientRect().width))+((posR[x-1]-allImageCover[x-1].getBoundingClientRect().width)))
        }
        else{
          // setPosL(items=>[...items, Math.random()*(posR[x-1]+10 - (posR[x-1]+5))+((posR[x-1]+5))])
          // setPosT(items=>[...items, Math.random()*(offset - allImageCover[x].getBoundingClientRect().height - allImageDesc[x].getBoundingClientRect().height)]) // for other post
          posT.push(Math.random()*(offset - allImageCover[x].getBoundingClientRect().height - allImageDesc[x].getBoundingClientRect().height))
          posL.push(Math.random()*(posR[x-1]+10 - (posR[x-1]+5))+((posR[x-1]+5)))
        }
      }
    // }
  }

  const stylingFunction = (ind) =>{
    
  }
  console.log(posT,'T',posL,'L',posR,'R',posB,'B')
  return (
    <div className={styles.fullpageWrapper}>
      {/* Mapping list of Images */}
      {images.map((item,ind) => {
        console.log(ind,'ind in render')

        console.log('styling')
        positionUpdate(ind)
       // Styling the post depending on isRect state
        const wrapperStyle = {
          top: posT[ind] + 'px',
          left: posL[ind] + 'px'
        }
        const captStyle = {}
        
        const descStyle = {}
        if (allImageCover[ind]){
          var width = allImageCover[ind].getBoundingClientRect().width
          var height = allImageCover[ind].getBoundingClientRect().height
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
                    <img src={item.img} style={{width:`${Math.random()*(43-30)+30}vh`}}></img>
                </div>
              </div>
          </div>
        )})
      }
    </div>
  )
}


export default HorizontalGallery