import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp'
import axios from "axios"
import { toast } from 'sonner'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'

const EmailVerify = () => {
    const navigate = useNavigate()
    const { user, backendURL, getUserData, isloggedIn, } = useContext(AppContext)
    const [otp, setOtp] = useState("")

    useEffect(() => {

        if (isloggedIn && user.isVerified) {
            console.log("here")
            navigate("/")
        }
    }, [isloggedIn, user])
    const handleOtpSubmit = async () => {
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/verify-account`, { otp })

            if (data.success) {
                toast.success("Success", {
                    description: data.message,
                    duration: 3000,
                })
                getUserData()
                navigate("/")
            } else {
                toast.error("Error", {
                    description: data.message,
                    duration: 3000
                })
            }

        } catch (err) {
            toast.error("Error!", {
                description: err.message,
                duration: 3000
            })
        }
    }

    return (
        <div className='flex item-center justify-center min-h-screen  bg-cover bg-center bg-[url("/bg_img.png")]'>
            {user && <div className='flex items-center justify-center flex-col max-w-md gap-2'>
                {`Enter OTP sent to your email: ${user.email}`}
                <InputOTP value={otp} onChange={setOtp} maxLength={6}>
                    <InputOTPGroup >
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <Button onClick={handleOtpSubmit} disabled={otp.length !== 6}>Verify</Button>
            </div>}
        </div>
    )
}

export default EmailVerify
