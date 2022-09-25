import React from 'react'
import Header from '../../components/Layout/Header/Header'
import HorizontalGallery from '../../components/Layout/HorizontalGallery/HorizontalGallery';
import ImageScroller from '../../components/Layout/ImageScroller/ImageScroller'
import PageContainer from '../../components/Layout/PageContainer/PageContainer';
import PageCover from '../../components/Layout/PageCover/PageCover'

export default class Home extends React.Component {

  jumpFunction(){
    document.getElementById("page_section").scrollIntoView({behavior: 'smooth'});
  }
  render(){
    return (
      <div>
          {/* <Header/> */}
          <HorizontalGallery/>
          {/* <PageCover jumpCallback={this.jumpFunction}/>
          <ImageScroller  />
          <PageContainer/> */}
      </div>
    )
  }
  
}
