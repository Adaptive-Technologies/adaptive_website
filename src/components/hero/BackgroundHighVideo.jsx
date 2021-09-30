import React from 'react'
import ReactPlayer from 'react-player'
import heroVideo from '../../assets/videos/HeroHighBitRate.mp4'

const BackgroundHighVideo = () => {
  return (
    <ReactPlayer
      url={heroVideo}
      playing
      loop
      muted
      width='100%'
      height='100%'
    />
  )
}

export default BackgroundHighVideo
