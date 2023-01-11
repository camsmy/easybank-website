import header from "../assets/about/meeting.jpg"
import building from "../assets/about/building.jpg"
const About = () =>{
    return(
        <>


        <div className="flex py-16 space-y-12 px-4 flex-col
        lg:px-20 lg:flex-row">

                <h3 className="text-5xl flex-1 font-bold">
                    We build bridges between 
                    <span className="text-primary-bright-cyan"> customers</span> and 
                    <span className="text-primary-bright-cyan"> companies</span>
                </h3>

                <p className="flex-1">
                Welcome to <span className="text-primary-dark-blue font-bold">easybank</span>, 
                a community-focused financial institution committed to providing our customers with the highest level of service. We have been serving the community for over 100 years and have grown to become one of the largest banks in the region with 50 branches and over 500 ATMs.
                </p>
        </div>


        <img src={header} alt="" className="w-full bg-cover"/>

        <h1 className="text-grayish-blue font-bold text-6xl text-center py-12 ">Our Mission</h1>


        <div className="flex py-16 px-4 space-x-8 flex-col
        lg:px-20 lg:flex-row">
            <div className="flex-1 space-y-8">

                <span className="text-center font-bold text-3xl">
                    Our mission is to help our customers and communities succeed financially.    
                </span>    

                <p className="leading-loose text-xl font-light text-primary-dark-blue">            
                We do this by providing a wide range of products and services, including personal and business checking and savings accounts, loans, mortgages, and investment options.

At ABC Bank, we believe in the importance of giving back to the communities we serve. We support local organizations and initiatives through charitable contributions, volunteerism, and sponsorships. We also have an environmental policy, we are always trying to improve our environmental performance and reduce our environmental impact.
                
                
We have been recognized for our commitment to service and excellence with numerous awards, including being named the "Best Bank" in the region for five consecutive years by local publication.


                
                </p>
            </div>

            <div className="flex-1">
            <img src={building} alt="bg-cover w-full" />
            </div>
        </div>


<div className="py-10 bg-neutral-light-greyish-blue  flex flex-wrap items-center  justify-center  ">

    <h1 className="py-8 font-bold text-3xl">We have different pricing plans for different services</h1>
            
            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center  container   ">
            <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                <h1 className="text-gray-500 font-semibold text-xl ">Basic</h1>
                    <div className="text-center py-4 px-7">
                        <h1 className="text-gray-700 text-4xl font-black">$199.00</h1>
                        <p className="text-gray-500  mt-2">Monthely</p>
                        
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">Buy Now</button>
                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-purple-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                    <h1 className="text-purple-200 font-semibold text-xl ">Pro</h1>
                    <div className="text-center py-4 px-7">
                        <h1 className="text-white text-4xl font-black">$399.00</h1>
                        <p className="text-white text-opacity-50 mt-2">Monthely</p>
                        
                    </div>
                    <div className="h-px bg-purple-400"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-white text-opacity-80">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-purple-400 hover:shadow-xl duration-200 hover:bg-purple-800">Buy Now</button>
                </div>
                <div className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30">
                <h1 className="text-gray-500 font-semibold text-xl ">Enterprise</h1>
                    <div className="text-center py-4 px-7">
                        <h1 className="text-gray-700 text-4xl font-black">$899.00</h1>
                        <p className="text-gray-500  mt-2">Monthely</p>
                        
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="text-center mt-3">
                        <p className="text-sm text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">Buy Now</button>
                </div>
            </div>
             
        </div>



        <div className="flex flex-col py-16 space-y-12 px-4 justify-center
        lg:px-20">
            <h1 className="text-4xl text-center font-light">
            Thank you for considering 
            <span className="font-bold"> easybank </span>
             for your financial needs. We look forward to serving you.
            </h1>
        </div>





        </>
    )
}
export {About}