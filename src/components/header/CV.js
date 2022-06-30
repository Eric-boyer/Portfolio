import React from 'react'
import CVERICBOYER4 from "../../assets/CVERICBOYER4.pdf"

function CV() {
  return (
    <div className='cv'>
        <a href={CVERICBOYER4} download className='btn'>Telecharger le CV</a>
        <a href='#about' className='btn btn-primary'>a propos</a>
    </div>
  )
}

export default CV