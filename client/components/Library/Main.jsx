import React from 'react'
import Library from './Library'
import Playlist from './Playlist'
import Podcast from './Podcast'
import Href from './Href'
import Language from './Language'
import '../../styles/Library.css'

const Main = () => {
  return (
    <>
    <div className='main-container'>
        <div className='personal-container'>
            <Library />
            <Playlist />
            <Podcast />
        </div>
        <div className='info-container'>
            <Href />
            <Language />
        </div>
    </div>
    </>
  )
}

export default Main