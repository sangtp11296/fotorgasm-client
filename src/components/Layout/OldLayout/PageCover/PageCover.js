import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PageCover.module.css'


export default class PageCover extends React.Component{
  constructor(props){
    super(props)
    // this.jumpTrigger = this.jumpTrigger.bind(this)
  };
  jumpTrigger = (e) =>{
    this.props.jumpCallback()
    e.preventDefault()
  };
  render(){
    return (
      <div className={styles.coverContainer}>
        <div className={styles.articleSpotlight}>
          <div className={styles.coverGradient}></div>
          <Link className={styles.articleLink} to='/post'/>
          <h1 className={styles.articleCoverTitle}>
            <div className={styles.titleWrapper}>
              <div className={styles.category}>Spotlight</div>
              <div className={styles.title}>Have Something to Say: 30 Years of Photobooks with Dewi Lewis</div>
              <div className={styles.summary}>The renowned publisher offers his advice to street photographers hoping to publish their first photobook—and reveals the questions that all photographers should ask themselves before they seek to publish a book.</div>
              <div className={styles.authorText}>
                <em>
                  <p>An interview with publisher Dewi Lewis</p><br/>
                </em>
              </div>
            </div>
            <Link className={styles.readmoreLink} to='/post'>Read More
            <i className='fa fa-angle-double-right'></i></Link>
          </h1>
          <button className={styles.continueReading} onClick={this.jumpTrigger}>
            <i className="fa fa-arrow-down"></i>
          </button>
        </div>
      </div>
    )
  }
}
// export default function PageCover({ jump }) {
//   return (
//     <div className={styles.coverContainer}>
//       <div className={styles.articleSpotlight}>
//         <div className={styles.coverGradient}></div>
//         <Link className={styles.articleLink} to='/post'/>
//         <h1 className={styles.articleCoverTitle}>
//           <div className={styles.titleWrapper}>
//             <div className={styles.category}>Spotlight</div>
//             <div className={styles.title}>Have Something to Say: 30 Years of Photobooks with Dewi Lewis</div>
//             <div className={styles.summary}>The renowned publisher offers his advice to street photographers hoping to publish their first photobook—and reveals the questions that all photographers should ask themselves before they seek to publish a book.</div>
//             <div className={styles.authorText}>
//               <em>
//                 <p>An interview with publisher Dewi Lewis</p><br/>
//               </em>
//             </div>
//           </div>
//           <Link className={styles.readmoreLink} to='/post'>Read More
//           <i className='fa fa-angle-double-right'></i></Link>
//         </h1>
//         <button className={styles.continueReading} onClick={jump}>
//           <i className="fa fa-arrow-down"></i>
//         </button>
//       </div>
//     </div>
//   )
// }
