import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './Standard.module.css'


export default class Standard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLiked: false,
            imgUrl: this.props.imgUrl
        }
        this.targetRef = React.createRef()
    }
    componentDidMount(){
        this.props.postClassname(this.targetRef.current)
    }
    render(){
        return (
            <div className={`${styles.masonryItem} ${styles.layoutPost}`} ref={this.targetRef}>
                <div className={styles.imageContainer} style={{backgroundImage:`url(${this.state.imgUrl})`}}>
                    <Link to='/post:id'></Link>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.postSum}>
                        <div className={styles.postCat}>
                            <Link to='/cat'>Photography</Link>
                        </div>
                        <div className={styles.postTitle}>
                            <Link to='/post:id'>The easiest way to break out on top</Link></div>
                        <div className={styles.postDes}>The easiest way to break out on top This section contains many common flower varieties that can often be found</div>
                    </div>
                    <Link to='/post:id' className={styles.readMore}>
                        <span >read more</span>
                    </Link>
                    <div className={styles.postInfo}>
                        <div className={styles.postDate}>24. Dec 2022</div>
                        <div className={styles.postSocial}>
                            <button className={styles.likeBtn} onClick={()=>this.setState({isLiked:!this.state.isLiked})}>
                            {this.state.isLiked?<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>}
                            <span>100</span>
                            </button>
                            
                            <button className={styles.likeBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.685 10 8.213 0 5.04-5.146 8.159-9.913 8.159-2.027 0-3.548-.439-4.548-.712l-4.004 1.196 1.252-2.9c-.952-1-2.787-2.588-2.787-5.743 0-4.528 4.486-8.213 10-8.213zm0-2c-6.628 0-12 4.573-12 10.213 0 2.39.932 4.591 2.427 6.164l-2.427 5.623 7.563-2.26c1.585.434 3.101.632 4.523.632 7.098.001 11.914-4.931 11.914-10.159 0-5.64-5.372-10.213-12-10.213z"/></svg>
                            <span>100</span>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
      )
    }
}
