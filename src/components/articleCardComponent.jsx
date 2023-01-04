const ArticleCard = ({imageSource,author,title,body})=>{
    return(
        <div className="bg-white border rounded-lg overflow-hidden ">

            <img src={process.env.PUBLIC_URL + imageSource} alt="card image" className="bg-cover bg-center h-48 w-full"/>

            <div className="p-6 space-y-2">

                 <span className="text-xs text-neutral-grayish-blue">
                    By {author}
                </span>

                <h2 className="text-lg font-light leading-tight 
                hover:text-primary-lime-green hover:cursor-pointer">
                    {title}
                </h2>

                <p className=" text-neutral-grayish-blue text-sm font-light line-clamp-3">
                    {body}
                </p>
            </div>
        </div>
    )
}

export {ArticleCard}
