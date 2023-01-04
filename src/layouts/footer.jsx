import logo from '../assets/logo-white.svg'
import facebook from "../assets/icon-facebook.svg"
import instagram from "../assets/icon-instagram.svg"
import pinterest from "../assets/icon-pinterest.svg"
import twitter from "../assets/icon-twitter.svg"
import youtube from "../assets/icon-youtube.svg"
import {Button} from "../components/buttonComponent"
const FooterSection = () =>{
    return(
        <div className="bg-primary-dark-blue py-16 px-4 flex flex-col text-center justify-center items-center space-y-8
        lg:flex-row lg:px-20 lg:space-y-0">

                <div className='flex-1 relative space-y-4 lg:space-y-0'>
                    <img src={logo} alt="logo image"/>
                    <ul className='flex space-x-3 
                    lg:absolute lg:bottom-0'>
                        <li className='hover:cursor-pointer hover:bg-primary-lime-green'>
                            <img src={facebook} alt="" className=''/>
                        </li>
                        <li className=''>
                            <img src={youtube} alt="" />
                        </li>
                        <li className=''>
                            <img src={twitter} alt="" />
                        </li>
                        <li className=''>
                            <img src={pinterest} alt="" />
                        </li>
                        <li className=''>
                            <img src={instagram} alt="" />
                        </li>
                    </ul>
                </div>

                <div className='flex-1 space-y-4'>
                <div>
                            <a href="" className='text-white hover:text-primary-lime-green font-light'>
                                About us
                            </a>
                        </div>
                        <div>
                             <a href="" className='text-white hover:text-primary-lime-green font-light'>
                                Contact us
                            </a>
                        </div>
                        <div>
                            <a href="" className='text-white hover:text-primary-lime-green font-light'>
                               Blog
                            </a>
                        </div>
                </div>

                <div className='flex-1 space-y-4'>
                        <div>
                            <a href="" className='text-white hover:text-primary-lime-green font-light'>
                                Conversion
                            </a>
                        </div>
                        <div>
                             <a href="" className='text-white hover:text-primary-lime-green font-light'>
                                Support
                            </a>
                        </div>
                        <div>
                            <a href="" className='text-white hover:text-primary-lime-green font-light'>
                                Privacy Policy
                            </a>
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