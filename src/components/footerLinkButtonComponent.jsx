import {Link} from "react-router-dom"
const FooterLink = ({name,href}) =>{
    return(
        <Link to={href} className='text-white hover:text-primary-lime-green font-light'>
            {name}
        </Link>
    )
}
export {FooterLink}