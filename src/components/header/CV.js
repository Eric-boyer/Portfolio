import React from 'react'
import CVERICBOYER from "../../assets/CVERICBOYER.pdf"

function CV() {
  return (
    <div className='cv'>
        <a href={CVERICBOYER} download className='btn'>Telecharger le CV</a>
        <a href='#about' className='btn btn-primary'>a propos</a>
    </div>
  )
}

export default CV