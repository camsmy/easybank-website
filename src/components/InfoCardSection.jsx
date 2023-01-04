const InfoCardSection = (props) =>{

    return(
        <div className='flex-1 p-4'>
            <img src={props.imageName} alt="card-icon" className="pb-8 m-auto lg:m-0"/>
            <h3 className="text-lg font-light py-4">
                {props.title}
            </h3>
            <p className="text-neutral-grayish-blue text-base font-light ">
                {props.body}
            </p>
        </div>
    )
}

export {InfoCardSection}