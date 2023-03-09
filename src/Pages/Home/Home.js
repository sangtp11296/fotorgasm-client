import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

import SlickMenu from '../../components/Layout/SlickMenu/SlickMenu';
import PostGrid from '../../components/Layout/PostGrid/PostGrid';

export default function Home(){
  const scrollMenu = () =>{

  }
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
              <img className={styles.logoBrand} src='/images/brand/portrait.png'></img>
            </div>
            <div className={styles.profileMain}>
              <div className={styles.profileName}>
                <span>@</span>fotorgasm
              </div>
              <div className={styles.profileDesc}>
                <h3>Trần Phúc Sang • Trà • Yuki • 陈福创</h3>
                A part-time <b>D</b>reamer <span>•</span> <b>P</b>hotographer <span>•</span> <b>M</b>usician <span>•</span> <b>L</b>istener<br/>↳ finds orgaSm in the world of madness<br/>
                <Link className={styles.hashTag} to=''>#fotorgasm</Link>
              </div>
              <div className={styles.socialMenu}>
                <a target="_blank" href='https://www.instagram.com/the.fotorgasm/'>
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a target="_blank" href='https://www.facebook.com/sang.tra.11296/'>
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a target="_blank" href='https://open.spotify.com/user/21yfttjxbypianq4yjlpw6bba?si=df0070d916dc41da'>
                  <i className="fab fa-spotify fa-lg"></i>
                </a>
                <a target="_blank" href='https://www.youtube.com/@fotorgasm'>
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
                <a target="_blank" href='https://soundcloud.com/yuki-tra-11296'>
                  <i className="fab fa-soundcloud"></i>
                </a>
                <a target="_blank" href='https://steamcommunity.com/id/nguoidibanmua/'>
                  <i className="fab fa-steam-symbol fa-lg"></i>
                </a>
                <a target="_blank" href='https://steamcommunity.com/id/nguoidibanmua/'>
                  <i className="fas fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.pageMenu}>
            <div className={styles.menuContainer}>
              <SlickMenu/>
            </div>
          </div>
          <PostGrid/>
        </div>
        
          {/* <Header/> */}
          {/* <HorizontalGallery/> */}
          {/* <PageCover jumpCallback={this.jumpFunction}/>
          <ImageScroller  />
          <PageContainer/> */}
      </div>
  )
}

