const NewArticlesComponent = ({title,body}) =>{
    return(
        <div className="space-y-2">
            <h3 className="font-white text-xl font-bold text-neutral-very-light-gray
            hover:text-primary-lime-green hover:cursor-pointer">
                {title}
            </h3>

            <p className="text-base text-neutral-grayish-blue">
                {body}
            </p>

            <hr />
        </div>
    )
}

export {NewArticlesComponent}
