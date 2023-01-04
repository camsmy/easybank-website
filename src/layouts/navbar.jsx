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
    <nav class="sticky top-0 z-50 bg-white px-2 sm:px-4 py-2.5 rounded">

            <div class="container flex flex-wrap items-center justify-between mx-auto">

                <a href="" class="flex items-cente">
                    <img src={logo} alt="website logo" />
                </a>

                <button
                onClick={()=>setNavToggle(prev=>!prev)}
                type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
                >
                    {navToggle?<img src={closeButton} alt="closeButton" />
                    : <img src={burgerButton} alt="burgerButton" />
                    }
                </button>

                <div class="hidden w-full md:block md:w-auto">
                    <ul class="flex flex-col md:flex-row md:mt-0 md:text-sm md:font-medium">
                        <NavButton name="Home"/>
                        <NavButton name="About"/>
                        <NavButton name="Contact"/>
                        <NavButton name="Blog"/>
                        <NavButton name="Convertion"/>
                    </ul>
                </div>

                <div className='p-4 hidden lg:block'>
                    <Button
                    name="Request Invite"
                    px="10"
                    py="4"
                    />
                </div>

            </div>
    </nav>

        <div className={navToggle?'bg-gradient-to-t from-slate-100 via-stone-300 to-slate-900 p-5'
        :"hidden"}>

                <div class={navToggle?"w-full md:block md:w-auto p-5 bg-white rounded-md"
                :"hidden"} 
                >
                    <ul class="flex flex-col md:flex-row md:mt-0 md:text-sm md:font-medium">
                        <NavButton name="Home"/>
                        <NavButton name="About"/>
                        <NavButton name="Contact"/>
                        <NavButton name="Blog"/>
                        <NavButton name="Convertion"/>
                    </ul>
        </div>

        </div>
    </>
    )
}

export {Navbar}