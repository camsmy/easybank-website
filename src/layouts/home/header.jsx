import { Button } from '../../components/buttonComponent'
import phoneHeader from '../../assets/image-mockups.png'


const Header = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row">

            <div className="flex-col my-10 space-y-4 flex-wrap text-center px-4
            md:text-left md:pl-20 md:space-y-8 md:flex-1 md:my-20">

                <h1 className='text-4xl md:text-7xl font-light leading-tight text-primary-dark-blue'>
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

            <div className='pl-20 lg:flex-1 bg-hero-pattern-mobile lg:bg-hero-pattern bg-left bg-no-repeat relative 
            lg:bg-left z-10
            '>
                <div className='w-full h-64'>
                <img src={phoneHeader} alt="phone header" className=' absolute
                    inset-x-0 top-[-70px]
                lg:w-5/12 lg:inset-y-1.5 lg:inset-x-2/3' />
                </div>
            </div>

        </div>
    )
}

export { Header }