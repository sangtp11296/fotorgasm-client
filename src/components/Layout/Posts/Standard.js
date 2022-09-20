import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PostContent from '../PostContent/PostContent';
import styles from './Standard.module.css'


export default class Standard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLiked: false,
            imgUrl: this.props.imgUrl,
            open: false
        }
        this.targetRef = React.createRef()
    }
    componentDidMount(){
        this.props.postClassname(this.targetRef.current)
    }
    render(){
        return (
            <article className={`${styles.masonryItem} ${styles.layoutPost} ${this.state.open? styles.active:''}`} ref={this.targetRef} onClick={()=>{this.setState({open:!this.state.open}),this.props.postClassname(this.targetRef.current)}}>
                <div className={`${styles.upperWrapper} ${this.state.open? styles.active:''}`}>
                    <div className={`${styles.imageContainer} ${this.state.open? styles.active:''}`} style={{backgroundImage:`url(${this.state.imgUrl})`}}>
                        {/* <Link to='/post:id'></Link> */}
                    </div>
                    <div className={`${styles.descriptionContainer} ${this.state.open? styles.active:''}`}>
                        <div className={styles.postSum}>
                            <div className={styles.postCat}>
                                <Link to='/cat'>Photography</Link>
                            </div>
                            <div className={styles.postTitle}>
                                <Link to='/post:id'>The easiest way to break out on top</Link>
                            </div>
                            <div className={styles.postDes}>The easiest way to break out on top This section contains many common flower varieties that can often be found</div>
                        </div>
                        <Link to='/post:id' className={styles.readMore}>
                            <span >read more</span>
                        </Link>
                        <div className={styles.postInfo}>
                            <div className={styles.postDate}>24. Dec 2022</div>
                            <div className={styles.postSocial}>
                                <button className={styles.likeBtn} onClick={()=>this.setState({isLiked:!this.state.isLiked})}>
                                {this.state.isLiked?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                }
                                <span>100</span>
                                </button>
                                
                                <button className={styles.likeBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                </svg>
                                <span>100</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.open? <PostContent/>:''}
            </article>
      )
    }
}
