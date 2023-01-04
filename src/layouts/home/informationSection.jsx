import {InfoCardSection} from '../../components/InfoCardSection'
const InfoSection = ()=>{

    return(
        <div className="bg-neutral-light-greyish-blue px-4 py-16 space-y-12 text-center
                    md:px-32
                    lg:text-left">

                <h2 className="font-light text-primary-dark-blue text-4xl">
                    Why choose Easybank?
                </h2>

                <div className='flex'>
                    <p className='text-neutral-grayish-blue text-lg font-light flex-1'>
                    We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before. 
                    </p>

                    <p className='flex-1 hidden lg:block'></p>
                </div>
                

                <div className='flex flex-col lg:flex-row'>
                        <InfoCardSection
                        imageName={'/assets/icon-onboarding.svg'}
                        title="Online Banking"
                        body="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                        />

                        <InfoCardSection
                        imageName="/assets/icon-budgeting.svg"
                        title="Simple Budgeting"
                        body="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
                        />

                        <InfoCardSection
                        imageName="/assets/icon-onboarding.svg"
                        title="Fast Onboarding"
                        body="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
                        />

                        <InfoCardSection
                        imageName="/assets/icon-api.svg"
                        title="Open API"
                        body="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                        />
                </div>
        </div>
    )
}

export {InfoSection}

