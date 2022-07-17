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
    this.handleCallback = this.handleCallback.bind(this)
    this.filterDuplicatePost = this.filterDuplicatePost.bind(this)
  }
  handleCallback(data){
    // console.log(data)
    Array.from(data).forEach(element => {
      this.setState(prevState => ({
          allItems: [...prevState.allItems,element]
        }),()=>console.log(this.state.allItems, 'allPosts'))
    })
    this.calculateGrid()
  }
  filterDuplicatePost(arr){
    arr.filter(function(item, index, input){
      return input.indexOf(item) == index;
    })
  }
  calculateGrid = () => {
    this.filterDuplicatePost(this.state.allItems)
    this.resizeAllGridItems();
    window.addEventListener("resize", this.resizeAllGridItems);
    // console.log(this.state.allItems)
  }
  // componentWillUnmount(){
  //   document.onload = this.resizeAllGridItems();
  //   window.removeEventListener('resize', this.resizeAllGridItems)
  // }
  
  resizeGridItem=(item)=>{
    const grid = document.getElementsByClassName(`${styles.masonryLayout}`)[0];
    // console.log(grid)
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
  }
  resizeAllGridItems=()=>{
    for( let x=0;x<this.state.allItems.length;x++){
      console.log(this.state.allItems[x])
      this.resizeGridItem(this.state.allItems[0][x]);
    }
  }
  render(){
    return(
      <div className={styles.sectionContainer} id='page_section'>
          <div className={styles.masonryLayout}>
              <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80'}/>
              <Gallery postClassname={this.handleCallback}></Gallery>
              <Standard postClassname={this.handleCallback}  imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              {/* <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              <Standard postClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
              <Gallery></Gallery>
              <Gallery></Gallery> */}
          </div>
      </div>
    )
  }
}
// export default  PageContainer = (props) => {
    
//     var [allItems,setAllItems]= useState([])
//     console.log(allItems)
//     function resizeGridItem(item){
//         const grid = document.getElementsByClassName(`${styles.masonryLayout}`)[0];
//         console.log(grid)
//         const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//         const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//         const rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
//         item.style.gridRowEnd = "span "+rowSpan;
        
//         console.log(rowHeight)
//         console.log(rowGap)
//     }
//     // var allItems = document.getElementsByClassName(`${styles.masonryItem}`);
//     function resizeAllGridItems(){
        
//         for( let x=0;x<allItems.length;x++){
//           console.log(allItems)
//           resizeGridItem(allItems[x]);
//         }
//     }
    
//     useEffect(()=>{
//         document.onload = resizeAllGridItems();
//         window.addEventListener("resize", resizeAllGridItems);
//     },[resizeAllGridItems])
//   return (
//     <div className={styles.sectionContainer} id='page_section'>
//         <div className={styles.masonryLayout}>
//             <Standard postsClassname={this.handleCallback} imgUrl={'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80'}/>
//             <Standard imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
//             <Gallery></Gallery>
//         </div>
//     </div>
//   )
// }
