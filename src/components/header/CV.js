import React from 'react'
import CVERICBOYER8 from "../../assets/CVERICBOYER8.pdf"

function CV() {
  return (
    <div className='cv'>
        <a href={CVERICBOYER8} download className='btn'>Telecharger le CV</a>
        <a href='#about' className='btn btn-primary'>About Me</a>
    </div>
  )
}

export default CV