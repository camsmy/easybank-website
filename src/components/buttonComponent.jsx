const Button = (props) =>{
    return(
        <a href="#" className=
        {`bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan
        inline-block text-sm leading-none border 
        mt-4 lg:mt-0
        rounded-full text-white font-bold
        hover:bg-white hover:border-transparent hover:text-teal 
        hover:brightness-90 hover:contrast-200 hover:opacity-80 hover:saturate-50
        px-${props.px} py-${props.py}
        `}>
            {props.name}
        </a>
        // px-${props.px} py-${props.py}
        //px-6 py-4
        // px-10 py-4
    )
}

export {Button}