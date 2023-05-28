import React from 'react'
import styles from './WelcomeAdmin.module.css'
import { Link } from 'react-router-dom'

function WelcomeAdmin() {
  return (
    <div className={styles.welcomeAdmin}>
      <div className={styles.welcomeAdminContainer}>
        <Link to='/' className={styles.brandName}>
            <img width='150px' className={styles.logoBrand} src='/images/brand/fotorgasm-brand-name-white.png'></img>
        </Link>
        <div className={styles.detailInput}>
          <h1>Welcome Back</h1>
          <h2>Hope you have a good day!</h2>
          <div className={styles.signInUp}>
            <span style={{backgroundColor:'var(--surface-02)'}}>Sign In</span>
            <span>Sign Up</span>
          </div>
          <form className={styles.boxInput}>
            <div>
              <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path className="st0" d="M256,265.308c73.252,0,132.644-59.391,132.644-132.654C388.644,59.412,329.252,0,256,0 c-73.262,0-132.643,59.412-132.643,132.654C123.357,205.917,182.738,265.308,256,265.308z"></path> <path className="st0" d="M425.874,393.104c-5.922-35.474-36-84.509-57.552-107.465c-5.829-6.212-15.948-3.628-19.504-1.427 c-27.04,16.672-58.782,26.399-92.819,26.399c-34.036,0-65.778-9.727-92.818-26.399c-3.555-2.201-13.675-4.785-19.505,1.427 c-21.55,22.956-51.628,71.991-57.551,107.465C71.573,480.444,164.877,512,256,512C347.123,512,440.427,480.444,425.874,393.104z"></path> </g> </g></svg>
            </div>
            <input></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WelcomeAdmin