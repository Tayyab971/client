import React, { useContext } from 'react'
import { assets } from "../../assets/assets"
import { Button } from '../ui/button'
import { AppContext } from '../../context/AppContext'
import { ArrowRight, } from 'lucide-react';

import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
    const navigate = useNavigate()
    const { user } = useContext(AppContext)


    const greetUser = () => {
        const currentHour = new Date().getHours();
        const userName = user ? user.name : "Guys"
        if (currentHour < 12) {
            return `Good Morning ${userName}`;
        } else if (currentHour < 18) {
            return `Good Afternoon ${userName}`;
        } else {
            return `Good Evening ${userName}`;
        }
    }
    return (
        <div className='flex items-center flex-col mt-20 px-4  text-center text-gray-800 '>
            <img src={assets.header_img} alt="" className='w-36 h-36 rounded-full mb-6' />

            <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>

                Hey {greetUser()}  <img src={assets.hand_wave} className="w-8 aspect-square" alt="" />
            </h1>
            <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to  Complete Mern Auth</h2>
            <p className='mb-8 max-w-md'>Let's start with a quick app tour and we will have you up and running in no time!</p>
            <div className='flex gap-4'>
                <Button onClick={() => { navigate("/components") }} >Shadcn  <ArrowRight /></Button>
                <Button onClick={() => { navigate("/ag-grid") }} >Ag Grid  <ArrowRight /></Button>
            </div>

        </div>
    )
}

export default HeroSection
