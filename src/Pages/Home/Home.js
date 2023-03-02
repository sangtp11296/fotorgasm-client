import React from 'react'
import Header from '../../components/Layout/Header/Header'
import HorizontalGallery from '../../components/Layout/HorizontalGallery/HorizontalGallery';
import ImageScroller from '../../components/Layout/ImageScroller/ImageScroller'
import PageContainer from '../../components/Layout/PageContainer/PageContainer';
import PageCover from '../../components/Layout/PageCover/PageCover'
import styles from './Home.module.css'
import '../../fonts/NeueHelvatica/helvetica-neue-regular.ttf'

export default class Home extends React.Component {

  jumpFunction(){
    document.getElementById("page_section").scrollIntoView({behavior: 'smooth'});
  }
  render(){
    return (
      <div className={styles.homePage}>
        <div className={styles.profileContainer}>
          <div className={styles.profileInfo}>
            <div className={styles.profileAvatar}>
              <svg className={styles.ringOne} viewBox="0 0 100 100" height='150px' width='150px' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">  
                <defs>
                  <linearGradient id='linearRing1' x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor='#F72585' />
                    <stop offset="11%" stopColor='#B5179E'/>
                    <stop offset="22%" stopColor='#7209B7'/>
                    <stop offset="33%" stopColor='#560BAD'/>
                    <stop offset="44%" stopColor='#480CA8'/>
                    <stop offset="55%" stopColor='#3A0CA3'/>
                    <stop offset="66%" stopColor='#3F37C9'/>
                    <stop offset="77%" stopColor='#4361EE'/>
                    <stop offset="88%" stopColor='#4895EF'/>
                    <stop offset="100%" stopColor='#4CC9F0'/>
                  </linearGradient>
                  <filter id='glowRing'>
                    <feGaussianBlur stdDeviation='1' result='offset-blur'></feGaussianBlur>
                  </filter>
                </defs>
                <circle cx="50" cy="50" r="47"></circle>
              </svg>
              <img className={styles.logoBrand} src='/images/brand/fotorgasm-logo-no-ring.png'></img>
            </div>
            <div className={styles.profileMain}>
              <div className={styles.profileName}>
                <span>fotorgasm</span>
              </div>
              <div className={styles.profileDesc}>
                a part-time dreamer finds orgaSm in the world of madness
              </div>
            </div>
          </div>
          <div className={styles.pageMenu}></div>
          <div className={styles.socialMenu}></div>
        </div>
          {/* <Header/> */}
          {/* <HorizontalGallery/> */}
          {/* <PageCover jumpCallback={this.jumpFunction}/>
          <ImageScroller  />
          <PageContainer/> */}
      </div>
    )
  }
  
}
