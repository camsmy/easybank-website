import {Button} from '../components/buttonComponent'
import phoneHeader from '../assets/image-mockups.png'

const Header = () =>{
    return(
        <div className="fle">

            <div className="flex-col flex-1 my-20 space-y-8 flex-wrap pl-20">

                <h1 className='text-7xl font-light leading-tight'>
                    Next generation digital banking
                </h1>

                <p className='text-neutral-grayish-blue text-xl font-light pr-4'>
                    Take your financial life online. Your easybank account will be 
                    a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>

                <div>

                    <Button
                    name="Request Invite"
                    px="10"
                    py="4"
                    />
                </div>

            </div>

            <div className='pl-20 flex-1 bg-hero-pattern bg-left bg-no-repeat'>
                <img src={phoneHeader} alt="phone header" className='absolute w-5/12 inset-y-1.5 inset-x-2/3'/>
            </div>

        </div>
    )
}

export {Header}