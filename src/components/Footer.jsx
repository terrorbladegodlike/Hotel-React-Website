import React from 'react'

// logo
import LogoWhite from '../assets/img/logo-white.svg'

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className="container mx-auto text-white flex justify-between items-center">
        {/* logo */}
        <a href="/">
          <img src={LogoWhite} alt="logo" />
        </a>
        Copyright &copy;. All right reserved.
      </div>
    </footer>
  )
}

export default Footer