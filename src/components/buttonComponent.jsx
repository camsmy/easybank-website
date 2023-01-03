const Button = (props) =>{
    return(
        <a href="#" className=
        {`bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan
        inline-block text-sm leading-none border 
        rounded-full text-white font-bold hover:border-transparent hover:text-teal 
        hover:bg-white mt-4 lg:mt-0
        px-${props.px} py-${props.py}
        `}>
            {props.name}
        </a>
    )
}

export {Button}