
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { toast } from "sonner"
import axios from "axios"
import { ArrowRight } from 'lucide-react';


const Navbar = () => {
    const navigate = useNavigate()
    const { user, backendURL, setUser, setIsLoggedIn } = useContext(AppContext)

    const sendVerificationOTP = async () => {
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/send-verify-otp`)
            if (data.success) {
                toast.success("Success!", {
                    description: data.message,
                    duration: 3000,
                })
                navigate("/email-verify")
            } else {

                toast.error("Error", {
                    description: data.message,
                    duration: 3000

                })
            }
        } catch (err) {
            toast.error("Error", {
                description: err.message,
                duration: 3000

            })
        }
    }
    const Logout = async () => {
        try {
            axios.defaults.withCredentials = true
            const { data } = await axios.post(`${backendURL}/api/auth/logout`)
            if (data.success) {
                toast.success('Success!', {
                    description: 'Logout successfully',
                    duration: 3000,
                });
                setIsLoggedIn(false)
                setUser(false)
                navigate("/")
            } else {
                toast.error("Error", {
                    description: data.message,
                    duration: 3000
                })
            }

        } catch (err) {
            toast.error("Error", {
                description: err.message,
                duration: 3000

            })
        }
    }
    return (
        <div className="w-full bg-background absolute top-0 px-6 py-3">
            <div className="flex items-center justify-end   mx-auto">

                {!user && <div className="flex  gap-2">
                    <Button onClick={() => { navigate("/login") }} variant="default">Login <ArrowRight color="black" /></Button>
                </div>}
                {user && <div className="w-8 h-8 mr-20 rounded-full bg-primary text-black cursor-pointer flex justify-center items-center relative group">
                    {user.name[0].toUpperCase()}
                    <div className="group-hover:block hidden absolute top-0 right-0 z-10 text-black rounded w-full pt-10">
                        <ul className="list-none m-0 p-2 bg-gray-100 text-sm w-30">
                            {!user.isVerified && <li onClick={sendVerificationOTP} className="hover:bg-primary/10 p-1 px-2 cursor-pointer" >Verify Email</li>}
                            <li onClick={Logout} className="hover:bg-primary/10 p-1 px-2 cursor-pointer">Logout</li>
                        </ul>
                    </div>
                </div>}
            </div>
        </div>
    );
};


export default Navbar


function ListItem({ className, title, children, ...props }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground " +
                        (className || "")
                    }
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}