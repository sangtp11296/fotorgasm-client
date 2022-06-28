import React from 'react'
import Header from '../../components/Layout/Header/Header'
import ImageScroller from '../../components/Layout/ImageScroller/ImageScroller'
import PageCover from '../../components/Layout/PageCover/PageCover'
import { PageContainer } from '../../components/Layout/PageContainer/PageContainer'

export default function Home() {
  const jumpFunction = () => {
    document.getElementById("page_section").scrollIntoView({behavior: 'smooth'});
  }
  return (
      <div>
          <Header/>
          <PageCover jump={jumpFunction}/>
          <ImageScroller  />
          <PageContainer/>
      </div>
  )
}
