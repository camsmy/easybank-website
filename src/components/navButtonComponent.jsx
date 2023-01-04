const NavButton = (props) =>{
    return(
        <a href="#responsive-header"
        className="block p-4 border-b-2 border-primary-lime-green border-opacity-0  text-center text-primary-dark-blue
        hover:border-opacity-100 duration-200 cursor-pointer
        lg:text-left lg:p-4 lg:py-6 lg:text-neutral-grayish-blue lg:hover:text-primary-dark-blue">
            {props.name}
        </a>
        // p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active
        // block text-neutral-grayish-blue mt-2 cursor-pointer border-2 border-opacity-0
        //         lg:inline-block lg:mt-0  lg:mr-6 lg:py-6 
        //          hover:border-b-primary-lime-green hover:text-primary-dark-blue 
    )
}

export {NavButton}