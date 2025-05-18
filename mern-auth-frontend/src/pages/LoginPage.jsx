import React, { useContext } from 'react'
import { LoginSignup } from '../components/custom/LoginSignUp'
import { assets } from '../assets/assets'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()


    return (
        <div className='flex item-center justify-center min-h-screen bg-cover bg-center bg-[url("/bg_img.png")]'>

            <img onClick={() => { navigate("/") }} className="absolute left-5 top-5 sm:left-20 w-8 h-12 sm:w-32 cursor-pointer " src={assets.authLogo} />
            <LoginSignup />
        </div>
    )
}

export default LoginPage
