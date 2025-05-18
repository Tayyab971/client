import React, { useContext, useState } from 'react'
import { Card, CardHeader, CardTitle, CardAction, CardDescription, CardFooter, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import axios from 'axios'
import { AppContext } from '../../context/AppContext'
import { validateEmail } from '../../lib/utils'
import { set } from 'mongoose'
import { useNavigate } from 'react-router-dom'

const ResetPasswordCard = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const { backendURL, isloggedIn, user } = useContext(AppContext)
    const [showResetCard, setShowResetCard] = useState(false)
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")


    const resetPassword = async (e) => {
        e.preventDefault()
        if (validateEmail(email) === false) {
            toast.error('Error!', {
                description: 'Please enter a valid email address',
                duration: 3000,
            });
            return
        }
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/send-reset-otp`, { email })
            if (data.success) {
                setShowResetCard(true)
                toast.success('Success!', {
                    description: 'Reset password OTP sent to your email',
                    duration: 3000,
                });
            } else {
                toast.error('Error!', {
                    description: data.message,
                    duration: 3000,
                });
                setShowResetCard(false)
            }

        } catch (err) {
            setShowResetCard(false)
            toast.error('Error!', {
                description: err.message,
                duration: 3000,
            }
            )
        }

    }


    const resetPasswordSubmit = async (e) => {
        if (validateEmail(email) === false || !otp || !newPassword) {
            toast.error('Error!', {
                description: 'Please enter a valid email address or password',
                duration: 3000,
            });
            return
        }
        try {

            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/reset-password`, {
                email, otp, newPassword
            })
            if (data.success) {
                setShowResetCard(false)
                toast.success('Success!', {
                    description: 'Password reset successfully',
                    duration: 3000,
                });
                navigate("/login")
            } else {
                toast.error('Error!', {
                    description: data.message,
                    duration: 3000,
                });
            }
        } catch (err) {
            toast.error('Error!', {
                description: err.message,
                duration: 3000,
            });
        }
    }


    return (
        <div>
            {!showResetCard && <Card className={"w-[400px] "}>
                <CardHeader>
                    <CardTitle>Enter your registered email</CardTitle>

                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} id="email" />
                    </div>


                </CardContent>
                <CardFooter className="flex justify-end items-center">
                    <Button disabled={!email} className="w-full" onClick={(e) => {
                        resetPassword(e)
                    }}>Login</Button>
                </CardFooter>
            </Card>}
            {showResetCard && <Card className={"w-[400px] "}>
                <CardHeader>
                    <CardTitle>Enter new password and otp recived on email</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} id="email" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="otp">New Password</Label>
                        <Input type={"password"} autoComplete="off" onChange={(e) => setNewPassword(e.target.value)} value={newPassword} id="newpassword" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="otp">OTP</Label>
                        <Input type={"number"} autoComplete="off" onChange={(e) => setOtp(e.target.value)} value={otp} id="otp" />
                    </div>


                </CardContent>
                <CardFooter className="flex justify-end items-center">
                    <Button disabled={!email || !newPassword || !otp} className="w-full" onClick={(e) => {
                        resetPasswordSubmit(e)
                    }}>Submit</Button>
                </CardFooter>
            </Card>}
        </div>
    )
}

export default ResetPasswordCard
