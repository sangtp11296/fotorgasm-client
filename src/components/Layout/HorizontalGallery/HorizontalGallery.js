import React,{useEffect, useState} from 'react'
import styles from './HorizontalGallery.module.css'
import styled from 'styled-components'

const ImgCapt = styled.div`
  position: absolute;
  text-transform: uppercase;
  transform: ${props => props.isRect?'':'rotate(-90deg)'};
  bottom: 0px;
  transform: translateY(100%);
  // Math.random() < 0.5 ?'right':'left';
  // transform-origin: -30% -30%;
`
const images = [
  {
    img: 'https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80'
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1563124488-159c05ebb7e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80'
  // },
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

function HorizontalGallery() {
  var [allImageCover, setAllImageCover] = useState([])
  var [allImageDesc, setAllImageDesc] = useState([])
  var [allImageCapt, setAllImageCapt] = useState([])
  var [isRect, setIsRect] = useState([])
  useEffect(() => {
    setAllImageCover(document.getElementsByClassName(`${styles.imgCover}`))
    setAllImageDesc(document.getElementsByClassName(`${styles.imgDesc}`))
    setAllImageCapt(document.getElementsByClassName(`imgCapt`))
  }, [])

  // Compare height and width
  useEffect(() => {
    allImageCover = [...new Set(allImageCover)]
    allImageDesc = [...new Set(allImageDesc)]
    allImageCapt = [...new Set(allImageCapt)]
    var width;
    var height;
    var widthDiv;
    var heightDiv
    for (let x=0;x<allImageCover.length;x++){
      width = allImageCover[x].getBoundingClientRect().width
      height = allImageCover[x].getBoundingClientRect().height
      
      // return isRect to postion author, title and description
      if(width>height){
        setIsRect(items => [...items,true])
        widthDiv = allImageCover[x].getBoundingClientRect().width + allImageDesc[x].getBoundingClientRect().width;
        heightDiv = allImageCover[x].getBoundingClientRect().height + allImageCapt[x].getBoundingClientRect().height;
      }
      else setIsRect(items => [...items,false])

      // Calculate area of the wrapper
      console.log(heightDiv,widthDiv)
      const areaDiv = widthDiv*heightDiv
    }
  }, [allImageCover])

  return (
    <div className={styles.fullpageWrapper}>
      {images.map((item,ind) => {
        const wrapperStyle = {
          left: Math.random()*1500 + 'px'
        }
        const captStyle ={
          paddingTop: '5px',
        }
        const descStyle = {}
        // Random position for caption
        if (Math.random() < 0.5){
          captStyle.right = '0px'
          captStyle.textAlign = 'right';
        }
        else {
          captStyle.left = '0px';
          captStyle.textAlign = 'left';
        }

        // Random position for description
        if (Math.random() < 0.5){
          descStyle.right = '0px';
          descStyle.transform = 'translateX(100%)';
          descStyle.textAlign = 'left';
          descStyle.paddingLeft = '10px';
        }
        else {
          descStyle.left = '0px';
          descStyle.transform = 'translateX(-100%)';
          descStyle.textAlign = 'right';
          descStyle.paddingRight = '10px';
        }

        
        return(
          <div key={ind} className={styles.imgWrapper} style={wrapperStyle}>
              <div className={styles.imgContent}>
                <ImgCapt className='imgCapt' key={ind} isRect={isRect[ind]} style={captStyle}>
                  <a>Title<br/>Author</a>
                </ImgCapt>
                <div className={styles.imgDesc} style={descStyle}>
                  <p>When love has carried us above all things, into the Divine Dark, we receive in peace the Incomprehensible Light, enfolding us and penetrating us. What is this Light, if it be not a contemplation of the Infinite, and an intuition of Eternity?</p>
                </div>
                <div className={styles.imgCover}>
                    <img src={item.img}></img>
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