import React from 'react'
import Navbar from '../components/custom/Navbar'
import HeroSection from '../components/custom/HeroSection'

const Homepage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-[url('/bg_img.png')]" >
            <Navbar />
            <HeroSection />
        </div>
    )
}

export default Homepage
