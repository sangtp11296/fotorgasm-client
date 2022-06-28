import React, {useEffect, useState} from 'react'
import Standard from '../Posts/Standard';
import styles from './PageContainer.module.css'

export const PageContainer = () => {
    
    var [allItems,setAllItems]= useState({})
    console.log(allItems)
    function resizeGridItem(item){
        const grid = document.getElementsByClassName(`${styles.masonryLayout}`)[0];
        console.log(grid)
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
        item.style.gridRowEnd = "span "+rowSpan;
        
        console.log(rowHeight)
        console.log(rowGap)
    }
    // var allItems = document.getElementsByClassName(`${styles.masonryItem}`);
    function resizeAllGridItems(){
        
        for( let x=0;x<allItems.length;x++){
          console.log(allItems)
          resizeGridItem(allItems[x]);
        }
    }
    
    useEffect(()=>{
        window.onload = resizeAllGridItems();
        window.addEventListener("resize", resizeAllGridItems);
    },[resizeAllGridItems])
  return (
    <div className={styles.sectionContainer} id='page_section'>
        <div className={styles.masonryLayout}>
            <Standard postClassname={data=>setAllItems(data)} imgUrl={'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80'}/>
            <Standard imgUrl={'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'}/>
            
            
        </div>
    </div>
  )
}
