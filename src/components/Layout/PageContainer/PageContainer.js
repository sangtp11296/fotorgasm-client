import React, {useEffect, useState} from 'react'
import Gallery from '../Posts/Gallery';
import Standard from '../Posts/Standard';
import styles from './PageContainer.module.css'

export default class PageContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      allItems: []
    }
    this.targetRef = React.createRef()
  }
  handleCallback=(data)=>{
    this.setState(prevState => ({
      allItems: [...prevState.allItems, data]
    }), 
        ()=>{
          this.state.allItems = [...new Set(this.state.allItems)]
          this.resizeAllGridItems()
        })
  }
  
  resizeGridItem=(item)=>{
    const grid = document.getElementsByClassName(`${styles.masonryLayout}`)[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
  }
  resizeAllGridItems=()=>{
    for( let x=0;x<this.state.allItems.length;x++){
      this.resizeGridItem(this.state.allItems[x]);
    }
  }
  render(){
    return(
      <div className={styles.sectionContainer} id='page_section'>
          <div className={styles.masonryLayout}>
              <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80'}/>
              <Gallery postClassname={this.handleCallback} ></Gallery>
              <Standard postClassname={this.handleCallback}  imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              <Gallery postClassname={this.handleCallback}></Gallery>
              <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              <Gallery postClassname={this.handleCallback}></Gallery>
              <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              <Gallery postClassname={this.handleCallback}></Gallery>
              <Gallery postClassname={this.handleCallback}></Gallery>
              <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              <Gallery postClassname={this.handleCallback}></Gallery>
              <Gallery postClassname={this.handleCallback}></Gallery>
          </div>
      </div>
    )
  }
}
