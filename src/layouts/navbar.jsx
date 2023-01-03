import logo from '../assets/logo.svg'
import {Button} from "../components/buttonComponent"
import {NavButton} from "../components/navButtonComponent"

const Navbar = () =>{

    return(
        <nav className="bg-white sticky top-0 z-50">
            <div className='container flex justify-between items-center mx-auto'>

            <div className="flex items-center flex-no-shrink mr-6 p-4">
            <img src={logo} alt="website logo" />
        </div>

        <div className="block lg:hidden">
            <button className="flex items-center border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>

        <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <NavButton name="Home"/>
                <NavButton name="About"/>
                <NavButton name="Contact"/>
                <NavButton name="Blog"/>
                <NavButton name="Convertion"/>
            </div>
        </div>

        <div className='p-4'>
            <Button
            name="Request Invite"
            px="10"
            py="4"
            />
        </div>

            </div>

    </nav>
        
    )
}

export {Navbar}