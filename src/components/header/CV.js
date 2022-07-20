import React from 'react'
import CVERICBOYER9 from "../../assets/CVERICBOYER9.pdf"

function CV() {
  return (
    <div className='cv'>
        <a href={CVERICBOYER9} download className='btn'>Telecharger le CV</a>
        <a href='#about' className='btn btn-primary'>About Me</a>
    </div>
  )
}

export default CV