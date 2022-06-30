import React from 'react'
import CVERICBOYER3 from "../../assets/CVERICBOYER3.pdf"

function CV() {
  return (
    <div className='cv'>
        <a href={CVERICBOYER3} download className='btn'>Telecharger le CV</a>
        <a href='#about' className='btn btn-primary'>a propos</a>
    </div>
  )
}

export default CV