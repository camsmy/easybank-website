import logo from '../assets/logo-white.svg'
import facebook from "../assets/icon-facebook.svg"
import instagram from "../assets/icon-instagram.svg"
import pinterest from "../assets/icon-pinterest.svg"
import twitter from "../assets/icon-twitter.svg"
import youtube from "../assets/icon-youtube.svg"
import {Button} from "../components/buttonComponent"
import { FooterLink } from '../components/footerLinkButtonComponent'

const FooterSection = () =>{
    return(
        <div className="bg-primary-dark-blue py-16 px-4 flex flex-col text-center justify-center items-center space-y-8
        lg:flex-row lg:px-20 lg:space-y-0 lg:text-left lg:items-stretch">

                <div className='flex-1 relative space-y-4'>
                    <img src={logo} alt="logo image"/>
                    <ul className='flex space-x-3 
                    lg:absolute lg:bottom-0'>
                        <li className='hover:cursor-pointer hover:bg-primary-lime-green'>
                            <img src={facebook} alt="" className=''/>
                        </li>
                        <li className='hover:cursor-pointer hover:bg-primary-lime-green'>
                            <img src={youtube} alt="" />
                        </li>
                        <li className='hover:cursor-pointer hover:bg-primary-lime-green'>
                            <img src={twitter} alt="" />
                        </li>
                        <li className='hover:cursor-pointer hover:bg-primary-lime-green'>
                            <img src={pinterest} alt="" />
                        </li>
                        <li className='hover:cursor-pointer hover:bg-primary-lime-green'>
                            <img src={instagram} alt="" />
                        </li>
                    </ul>
                </div>

                <div className='flex-1 space-y-4'>
                         <div>
                            <FooterLink name="About Us"/>
                        </div>
                        <div>
                            <FooterLink name="Contact Us"/>
                        </div>
                        <div>
                            <FooterLink name="Blog"/>
                        </div>
                </div>

                <div className='flex-1 space-y-4'>
                        <div>
                            <FooterLink name="Conversion"/>
                        </div>
                        <div>
                             <FooterLink name="Support"/>
                        </div>
                        <div>
                            <FooterLink name="Privacy Policy"/>
                        </div>
                </div>

                <div className='relative flex-1 space-y-4
                lg:spacey-0'>
                    <div className='lg:absolute lg:right-0 '>
                        <Button
                        name="Request Invite"
                        px="10"
                        py="4"/>
                    </div>

                    <p className='text-neutral-grayish-blue 
                    lg:absolute lg:bottom-0 lg:right-0'>
                        &#169; Easybank. All Rights Reserved
                    </p>
                </div>
        </div>
    )
}

export {FooterSection}