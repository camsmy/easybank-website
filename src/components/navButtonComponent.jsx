const NavButton = (props) =>{
    return(
        <a href="#responsive-header"
        className="block mt-4 lg:inline-block lg:mt-0 text-neutral-grayish-blue hover:text-primary-dark-blue 
                mr-6 py-7 hover:border-b-4 hover:border-b-primary-lime-green">
            {props.name}
        </a>
    )
}

export {NavButton}