import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import ResetPasswordCard from '../components/custom/ResetPasswordCard'

const ResetPasswordPage = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-[url('/bg_img.png')]">
            <ResetPasswordCard />
        </div>
    )
}

export default ResetPasswordPage
