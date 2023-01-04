import logo from '../assets/logo.svg'
import {Button} from "../components/buttonComponent"
import {NavButton} from "../components/navButtonComponent"
import burgerButton from "../assets/icon-hamburger.svg"
import closeButton from "../assets/icon-close.svg"
import { useState } from 'react'

const Navbar = () =>{

    const [navToggle,setNavToggle] = useState(false)

    return(
    <>
         <nav className="top-0 z-50 bg-white rounded sticky">

            <div className="container flex flex-wrap items-center justify-between mx-auto bg-white py-2.5 px-4
            lg:p-0">

                <a href="" className="flex items-center">
                    <img src={logo} alt="website logo" />
                </a>

                <button
                onClick={()=>setNavToggle(prev=>!prev)}
                type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden"
                >
                    {navToggle?<img src={closeButton} alt="closeButton" />
                    : <img src={burgerButton} alt="burgerButton" />
                    }
                </button>

                <div className="hidden w-full lg:block lg:w-auto">
                    <ul className="flex flex-col md:flex-row md:mt-0 md:text-sm md:font-medium">
                        <NavButton name="Home"/>
                        <NavButton name="About"/>
                        <NavButton name="Contact"/>
                        <NavButton name="Blog"/>
                        <NavButton name="Convertion"/>
                    </ul>
                </div>

                <div className='hidden lg:block'>
                    <Button
                    name="Request Invite"
                    px="10"
                    py="4"
                    />
                </div>

            </div>

            <div className={navToggle?'bg-gradient-to-b from-neutral-700 to-transparent p-8 absolute w-full lg:hidden'
                    :"hidden"}
                    >

                <div class={navToggle?"bg-white rounded-md"
                :"hidden"} 
                >
                    <ul className="flex flex-col lg:flex-row lg:mt-0 lg:text-sm lg:font-medium">
                        <NavButton name="Home"/>
                        <NavButton name="About"/>
                        <NavButton name="Contact"/>
                        <NavButton name="Blog"/>
                        <NavButton name="Convertion"/>
                    </ul>
                 </div>

            </div>
        </nav>





        

    </>
    )
}

export {Navbar}