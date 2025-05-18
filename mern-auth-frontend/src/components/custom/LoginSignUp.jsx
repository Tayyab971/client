import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"
import { toast } from "sonner"
import { validateEmail } from "../../lib/utils";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export function LoginSignup() {
    const navigate = useNavigate()
    const { backendURL, setIsLoggedIn, getUserData } = useContext(AppContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const login = async (e) => {
        e.preventDefault()
        console.log("login Clicked", email, password)
        if (validateEmail(email) === false || !password) {
            toast.error('Error!', {
                description: 'Please enter a valid email address or password',
                duration: 3000,
            });
            return
        }
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/login`, {
                email, password
            })
            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
                toast.success('Success!', {
                    description: 'Login successfully',
                    duration: 3000,
                });
                navigate("/")
            } else {
                toast.error('Error!', {
                    description: data.message,
                    duration: 3000,
                });
            }
        } catch (err) {
            console.log(err)
            toast.error('Error!', {
                description: 'Something went wrong',
                duration: 3000,
            });
        }

    }


    const register = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('Error!', {
                description: 'Password and confirm password do not match',
                duration: 3000,
            });
            return
        }

        if (validateEmail(email) === false) {
            toast.error('Error!', {
                description: 'Please enter a valid email address',
                duration: 3000,
            });
            return
        }
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/register`, {
                name, email, password
            })
            if (data.sucess) {
                setIsLoggedIn(true)
                getUserData()
                toast.success('Success!', {
                    description: 'Account created successfully',
                    duration: 3000,
                });
                navigate("/")
            } else {
                toast.error('Error!', {
                    description: data.message,
                    duration: 3000,
                });
            }
        } catch (err) {
            console.log(err)
            toast.error('Error!', {
                description: 'Something went wrong',
                duration: 3000,
            });
        }

    }

    const resetFields = () => {
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <div className="items-center flex justify-center">
            <Tabs defaultValue="signIn" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2 ">
                    <TabsTrigger  className="cursor-pointer" onClick={resetFields} value="signIn">Login</TabsTrigger>
                    <TabsTrigger className="cursor-pointer" onClick={resetFields} value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="signIn">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Enter your login credentials to login.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} id="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" />
                            </div>
                            <p onClick={() => { navigate("/reset-password") }} className="text-sm text-muted-foreground cursor-pointer hover:underline hover:text-primary  hover:underline-offset-8 hover:transition-shadow">Forgot Passowd ?</p>
                        </CardContent>
                        <CardFooter className="flex justify-end items-center">
                            <Button disabled={!email || !password} className="w-full" onClick={(e) => {
                                login(e)
                            }}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                        <CardHeader>
                            <CardTitle>Register</CardTitle>
                            <CardDescription>
                                Enter your email and confirm password to register.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input value={name} onChange={(e) => setName(e.target.value)} id="name" type="name" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} id="confirmPassword" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end items-center">
                            <Button disabled={!name || !email || !password} className="w-full" onClick={(e) => {
                                register(e)
                            }} >Register</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
