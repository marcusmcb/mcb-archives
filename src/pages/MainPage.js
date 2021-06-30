import React from 'react'

import Titlebar from '../components/shared/Titlebar'

import './mainpage.css'

const MainPage = () => {
  return (
    <div>
      <Titlebar />
      <div className='main-page-text'>
        <p>Welcome to my archive site!</p>
        <p>I've been producing remixes, mashups, and DJ edits for my own sets and mixshows since the 90s.  Here, you'll find all the stuff that I've released over the years.</p>
      </div>    
    </div>
  )
}

export default MainPage
