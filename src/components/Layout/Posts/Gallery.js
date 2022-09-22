import React, {useState, useLayoutEffect, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from './Gallery.module.css'
import styled from 'styled-components'
import PostContent from '../PostContent/PostContent'

const ImageWrapper = styled.div.attrs(
  ({imgPos}) => ({
    style: {
      transform: 'translate3d(' + -imgPos + 'px, 0px, 0px'
    }
  })
)``

const Gallery = (props) => {
  const targetRef = useRef()
  const [click,isClicked] = useState(0)
  const [boxWidth,setBoxWidth] = useState('')
  const [imgPos,setImgPos] = useState(0)
  const [open,setOpen] = useState(false)
  function getBoxWidth(){
    const boxWidth = document.getElementsByClassName(`${styles.masonryItem}`)
    setBoxWidth(boxWidth[0].clientWidth)
  }

  // Get prop.postClassname
  useLayoutEffect(() => {
    props.postClassname(targetRef.current)
    if (targetRef.current){
      setBoxWidth(targetRef.current.clientWidth)
      window.addEventListener('resize',getBoxWidth)
      return () => window.removeEventListener('resize',getBoxWidth)
    }
  }, [])

  //Pagination
  useEffect(()=>{
    setImgPos(boxWidth*click)
  },[click,boxWidth])

  return (
    <article className={`${styles.masonryItem} ${styles.layoutPost} ${open?styles.active:''}`} ref={targetRef}>
      <div className={styles.featuredTrangleHolder}>
        <div className={styles.triangleHolder}></div>
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033-2.361 4.792-5.246.719 3.848 3.643-.948 5.255 4.707-2.505 4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z" fillRule="nonzero"/></svg>
      </div>
      <div className={styles.carouselWrapper} onClick={()=>{setOpen(!open),props.postClassname(targetRef.current)}}>
        <div className={styles.slideCarousel}>
          <div className={styles.outerWrapper}>
            <ImageWrapper className={styles.imageWrapper} style={{width:`${boxWidth*3}px`}} imgPos={imgPos} >
              <div className={styles.imageItem} style={{width:`${boxWidth}px`}}>
                <div className={`${styles.imageBackground} ${open?styles.active:''}`} style={{backgroundImage:`url('https://images.unsplash.com/photo-1568849676085-51415703900f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')`}}>
                  <Link to='post/:id'></Link>
                </div>
              </div>
              <div className={styles.imageItem} style={{width:`${boxWidth}px`}}>
                <div className={`${styles.imageBackground} ${open?styles.active:''}`} style={{backgroundImage:`url('https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80')`}}>
                  <Link to='post/:id'></Link>
                </div>
              </div>
              <div className={styles.imageItem} style={{width:`${boxWidth}px`}}>
                <div className={`${styles.imageBackground} ${open?styles.active:''}`} style={{backgroundImage:`url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')`}}>
                  <Link to='post/:id'></Link>
                </div>
              </div>
            </ImageWrapper>
          </div>
          <div className={styles.imagePagination}>
            <div className={styles.pagination}>
              <div className={`${styles.currentImage} ${click==0?styles.active:''}`} onClick={()=>{isClicked(0)}}>
                <span></span>
              </div>
              <div className={`${styles.currentImage} ${click==1?styles.active:''}`} onClick={()=>{isClicked(1)}}>
                <span></span>
              </div>
              <div className={`${styles.currentImage} ${click==2?styles.active:''}`} onClick={()=>{isClicked(2)}}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open?<PostContent/>:''}
    </article>
  )
}

export default Gallery