import { createContext, useState } from "react";
import React from "react"
import { toast } from "sonner"
import axios from "axios"


export const AppContext = createContext()

export const AppContextProvider = (props) => {
    axios.defaults.withCredentials = true

    const backendURL = import.meta.env.VITE_BACKEND_URL
    console.log("Backend URL:", backendURL)
    const [isloggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(false)


    const getAuthState = async () => {

        try {

            const { data } = await axios.get(`${backendURL}/api/auth/is-authenticated`)
            if (data.success) {
                setIsLoggedIn(true)
                getUserData()
            } else {
                setIsLoggedIn(false)
                toast.error('Error!', {
                    description: data.message,
                    duration: 3000,
                })
            }
        } catch (err) {
            toast.error('Error!', {
                description: err.message,
                duration: 3000,
            })
        }
    }

    React.useEffect(() => {
        getAuthState()
    }, [])


    const getUserData = async () => {
        try {
            const { data } = await axios.get(`${backendURL}/api/user/user`, {}, { withCredentials: true })
            console.log("Incommming api repsonse", data)
            if (data.success) {
                setUser(data.userData)
            } else {
                toast.error('Error!', {
                    description: data.message,
                    duration: 3000,
                })
            }

        } catch (err) {
            toast.error('Error!', {
                description: err.message,
                duration: 3000,
            })
        }
    }


    const value = {
        backendURL,
        isloggedIn, setIsLoggedIn,
        user, setUser,
        getUserData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider >

    )

}