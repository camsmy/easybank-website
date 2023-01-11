const SquareButton = ({name,width,height}) =>{
    return(
        <button className={`px-${width} p-${height}
        tracking-widest
        bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan
        inline-block text-sm leading-none text-white font-bold`}>
            {name}
        </button>
    )
}
export {SquareButton}