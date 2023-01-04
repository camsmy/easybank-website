const NavButton = (props) =>{
    return(
        <a href="#responsive-header"
        className="block text-neutral-grayish-blue mt-2
                lg:inline-block lg:mt-0  lg:mr-6 lg:py-6 
                hover:border-b-4 hover:border-b-primary-lime-green hover:text-primary-dark-blue ">
            {props.name}
        </a>
    )
}

export {NavButton}