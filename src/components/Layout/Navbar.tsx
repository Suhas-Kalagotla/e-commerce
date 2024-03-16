"use client"; 
import React,{useState} from "react"; 
import { Menu , CircleX} from 'lucide-react';

export default function Navbar({}:Props) {
    const[isClick, setisClick] = useState(false); 

    const toggleNavbar = () =>{
        setisClick(!isClick); 
    }; 

    return(
        <>
        <nav className = "bg-blue-500">
            <div className= "max-w-7xl mx-auto px-4 sm:px-6 lg:px-g">
                <div className="flex items-center justify-between h-16">
                    <div className = "flex items-center">
                        <div className = "flex-shrink-0">
                            <a href="/" className = "text-white">
                                logo
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> home </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> home </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> home </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2"> home </a>
                        </div>
                    </div>
                    <div className = "md:hidden flex items-center">
                        <button className ="inline-flex items-center justify-center p-2 rounded -md text-white md:text-white
                        hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={toggleNavbar}> 
                        {!isClick ? (
                            <Menu/>
                        ):(
                            <CircleX/>
                        )
                        }
                        </button>
                </div>
            </div>
            {isClick && (
                <div className = "md:hidden"> 
                    <div className = "px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/" className="block text-white hover:bg-white hover:text-black rounded-lg p-2"> home </a>
                            <a href="/" className="block text-white hover:bg-white hover:text-black rounded-lg p-2"> cart</a>
                            <a href="/" className="block text-white hover:bg-white hover:text-black rounded-lg p-2"> home </a>
                            <a href="/" className="block text-white hover:bg-white hover:text-black rounded-lg p-2"> home </a>
                    </div>
                </div>
            )}
            </div>
        </nav>
        </>
    ); 
}
