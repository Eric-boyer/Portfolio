import React from 'react'
import CVERICBOYER5 from "../../assets/CVERICBOYER5.pdf"

function CV() {
  return (
    <div className='cv'>
        <a href={CVERICBOYER5} download className='btn'>Telecharger le CV</a>
        <a href='#about' className='btn btn-primary'>About Me</a>
    </div>
  )
}

export default CV