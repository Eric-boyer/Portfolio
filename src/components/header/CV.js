import React from 'react'
import CVERICBOYER7 from "../../assets/CVERICBOYER7.pdf"

function CV() {
  return (
    <div className='cv'>
        <a href={CVERICBOYER7} download className='btn'>Telecharger le CV</a>
        <a href='#about' className='btn btn-primary'>About Me</a>
    </div>
  )
}

export default CV