import React from 'react'
import cv from "../../assets/cv.pdf"

function CV() {
  return (
    <div className='cv'>
        <a href={cv} download className='btn'>Telecharger le CV</a>
        <a href='#about' className='btn btn-primary'>a propos</a>
    </div>
  )
}

export default CV