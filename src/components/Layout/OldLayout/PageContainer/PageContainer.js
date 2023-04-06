import React, {useLayoutEffect, useEffect, useState} from 'react'
import Gallery from '../Posts/Gallery';
import Standard from '../Posts/Standard';
import styles from './PageContainer.module.css'

export default function PageContainer (props) {
  var [allItems,setItems] = useState([])

  function handleCallback(data){
    setItems(allItems => [...allItems,data]) 
  }
  function resizeGridItem(item){
        const grid = document.getElementsByClassName(`${styles.masonryLayout}`)[0];
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
        item.style.gridRowEnd = "span "+rowSpan;
  }
  function resizeAllGridItems(){
    for( let x=0;x<allItems.length;x++){
      resizeGridItem(allItems[x]);
    }
  }
  useLayoutEffect(()=>{
    allItems = [...new Set(allItems)]
    setTimeout(()=>resizeAllGridItems(),0)
  },[allItems])

  useEffect(()=>{
    addEventListener('resize',resizeAllGridItems);
    return () =>{
      removeEventListener('resize', resizeAllGridItems)
    }
  },[resizeAllGridItems])
  
  return(
          <div className={styles.sectionContainer} id='page_section'>
              <div className={styles.masonryLayout}>
                  <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80'} />
                  <Gallery postClassname={handleCallback} ></Gallery>
                  <Standard postClassname={handleCallback}  imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
                  <Gallery postClassname={handleCallback}></Gallery>
                  <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
                  <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
                  <Gallery postClassname={handleCallback}></Gallery>
                  <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
                  <Gallery postClassname={handleCallback}></Gallery>
                  <Gallery postClassname={handleCallback}></Gallery>
                  <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
                  <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
                  <Gallery postClassname={handleCallback}></Gallery>
                  <Gallery postClassname={handleCallback}></Gallery>
              </div>
          </div>
        )
}

// export default class PageContainer extends React.Component{
//   constructor(){
//     super();
//     state = {
//       allItems: []
//     }
//     targetRef = React.createRef()
//   }
//   handleCallback=(data)=>{
//     setState(prevState => ({
//       allItems: [...prevState.allItems, data]
//     }), 
//         ()=>{
//           state.allItems = [...new Set(state.allItems)]
//           resizeAllGridItems()
//         })
//   }
//   resizeGridItem=(item)=>{
//     const grid = document.getElementsByClassName(`${styles.masonryLayout}`)[0];
//     const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//     const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//     const rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
//     item.style.gridRowEnd = "span "+rowSpan;
//     console.log(item)
//     console.log(item.getBoundingClientRect().height,'height')
//     console.log(item.getBoundingClientRect())
//   }
//   resizeAllGridItems=()=>{
//     for( let x=0;x<state.allItems.length;x++){
//       resizeGridItem(state.allItems[x]);
//     }
//   }
//   componentDidMount(){
//     resizeAllGridItems
//   }
//   render(){
//     return(
//       <div className={styles.sectionContainer} id='page_section'>
//           <div className={styles.masonryLayout}>
//               <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80'} resizeHandle={resizeAllGridItems}/>
//               {/* <Gallery postClassname={handleCallback} ></Gallery>
//               <Standard postClassname={handleCallback}  imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
//               <Gallery postClassname={handleCallback}></Gallery> */}
//               {/* <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
//               <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
//               <Gallery postClassname={handleCallback}></Gallery>
//               <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
//               <Gallery postClassname={handleCallback}></Gallery>
//               <Gallery postClassname={handleCallback}></Gallery>
//               <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
//               <Standard postClassname={handleCallback} imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'} resizeHandle={resizeAllGridItems}/>
//               <Gallery postClassname={handleCallback}></Gallery>
//               <Gallery postClassname={handleCallback}></Gallery> */}
//           </div>
//       </div>
//     )
//   }
// }
