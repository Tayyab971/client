import React, { useContext } from 'react'
import { assets } from "../../assets/assets"
import { Button } from '../ui/button'
import { AppContext } from '../../context/AppContext'
import { ArrowRight, Grid } from 'lucide-react';
import GridMotion from '../../../yes/GridMotion/GridMotion';
import PixelCard from '../ui/PixelCard';
import { useNavigate } from 'react-router-dom';
const items = [
    'Item 1',
    <div key='jsx-item-1'>Custom JSX Content</div>,
    'https://media.istockphoto.com/id/1156837650/photo/javascript-code-computer-language-programming-internet-text-editor-components-display-screen.jpg?s=1024x1024&w=is&k=20&c=t9nCzOBHOuu3W7k02i6uPblV2TGW_payWtEsahZECns=',
    'Item 2',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 4',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 5',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 7',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 8',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 10',
    <div key='jsx-item-3'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 11',
    <div key='jsx-item-2'>Custom JSX Content</div>,
    'Item 13',
    <div key='jsx-item-4'>Custom JSX Content</div>,
    'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Item 14',
    // Add more items as needed
];


const HeroSection = () => {
    const navigate = useNavigate()
    const { user } = useContext(AppContext)
    console.log("userData", user)

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
            <Button onClick={() => { navigate("/components") }} >Components <ArrowRight /></Button>
        </div>
    )
}

export default HeroSection
