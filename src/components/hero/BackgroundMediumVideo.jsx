import React from 'react'
import ReactPlayer from 'react-player'
import heroVideo from '../../assets/videos/HeroMediumBitRate.mp4'

const BackgroundMediumVideo = () => {
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

export default BackgroundMediumVideo
