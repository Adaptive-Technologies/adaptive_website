import React from 'react'
import heroImage from '../../assets/images/HeroFallbackImage.png'
import { CardMedia } from '@mui/material'

const BackgroundImage = () => {
  return (
    <CardMedia image={heroImage} style={{ height: '100%', width: '100%' }} />
  )
}

export default BackgroundImage
