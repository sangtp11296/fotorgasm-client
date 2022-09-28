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
  var [posRight, setPosRight] = useState([])
  var [posBottom, setPosBottom] = useState([])

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
    console.log('positionUpdate')
    positionUpdate();
    
  }, [allImageCover])

  // Function update next position for next post
  function positionUpdate(){
    for (let x = 0; x < allImageCover.length; x++){
      console.log(allImageCover[x],'in function')
      const offset = 1311;
      let nPosRight = 0;
      let nPosBottom = 0;
      
      if (x = 0){
        // Store used area for next positioning with rectangle posts
        if(allImageCover[x].getBoundingClientRect().width > allImageCover[x].getBoundingClientRect().height){
          if(allImageCover[x].getBoundingClientRect().right > allImageDesc[x].getBoundingClientRect().right){
            setPosRight(allPosRight=>[...allPosRight, allImageCover[x].getBoundingClientRect().right])
            setPosBottom(allPosY=>[...allPosY,allImageCapt[x].getBoundingClientRect().bottom]);
          }
          else {
            setPosRight(allPosRight=>[...allPosRight, allImageDesc[x].getBoundingClientRect().right]);
            setPosBottom(allPosY=>[...allPosY,allImageCapt[x].getBoundingClientRect().bottom]);
          }
        }
        else {
          setPosRight(allPosR=>[...allPosR,allImageCover[x].getBoundingClientRect().right]);
          setPosBottom(allPosY=>[...allPosY,allImageDesc[x].getBoundingClientRect().bottom]);
        }
      }

      if(x > 0){
         // Store used area for next positioning with rectangle posts
        if(allImageCover[x].getBoundingClientRect().width > allImageCover[x].getBoundingClientRect().height){
          // Generate random position Left
          nPosLeft = Math.random() * ((allImageCover[x].getBoundingClientRect().right + 10) - allImageCover[x].getBoundingClientRect().right) + allImageCover[x].getBoundingClientRect().right;
          setPosLeft(allPosX=>[...allPosX,nPosLeft]);
        
          // Generate random position top
          const remainTop = offset - allImageCapt[x].getBoundingClientRect().bottom - 10
          if (remainTop>= allImageCapt[x+1])
          setPosTop(allPosY=>[...allPosY,allImageCapt[x].getBoundingClientRect().bottom]);
      
          else setPosLeft(allPosX=>[...allPosX,allImageDesc[x].getBoundingClientRect().right]);
            // Store used area for next positioning with other posts
        }
      }
      
    }
  }
  console.log(posRight,posBottom)
  return (
    <div className={styles.fullpageWrapper}>
      {/* Mapping list of Images */}
      {images.map((item,ind) => {
        console.log(ind,'ind in render')

        // Styling the post depending on isRect state
        const wrapperStyle = {
          top: posRight[ind] + 'px',
          left: posBottom[ind] + 'px'
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
        )
      }
      )}
    </div>
  )
}

export default HorizontalGallery