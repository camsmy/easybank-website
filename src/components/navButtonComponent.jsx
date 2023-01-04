import {Link} from "react-router-dom"
const NavButton = ({name,href}) =>{
    return(
        <Link to={href}
        className="block p-4 border-b-2 border-primary-lime-green border-opacity-0  text-center text-primary-dark-blue
        hover:border-opacity-100 duration-200 cursor-pointer
        lg:text-left lg:p-4 lg:py-6 lg:text-neutral-grayish-blue lg:hover:text-primary-dark-blue">
            {name}
        </Link>
    )
}

export {NavButton}