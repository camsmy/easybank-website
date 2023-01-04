import { Button } from '../../components/buttonComponent'
import phoneHeader from '../../assets/image-mockups.png'


const Header = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row">

            <div className="flex-col my-10 space-y-4 flex-wrap text-center px-4
            md:text-left md:pl-20 md:space-y-8 md:flex-1 md:my-20">

                <h1 className='text-4xl md:text-6xl font-light leading-tight text-primary-dark-blue'>
                    Next generation digital banking
                </h1>

                <p className='text-neutral-grayish-blue text-sm md:text-xl font-light md:pr-4'>
                    Take your financial life online. Your easybank account will be
                    a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>

                <div>

                    <Button
                        name="Request Invite"
                        px="6"
                        py="4"
                    />
                </div>

            </div>

            <div className='pl-20 lg:flex-1 bg-hero-pattern-mobile bg-right bg-no-repeat relative
            bg-cover 
            lg:bg-left z-10 lg:bg-hero-pattern 
            '>
                <div className='w-full h-96'>
                    <img src={phoneHeader} alt="phone header" className=' absolute
                    m-auto left-0 right-0
                    w-full inset-x-0 
                    top-[-100px]
                    max-w-sm
                    sm:max-w-sm
                    md:top-[-300px] md:max-w-screen-sm
                    lg:min-w-min lg:top-[-220px] lg:left-[70px]' />
                </div>
            </div>

        </div>
    )
}

export { Header }