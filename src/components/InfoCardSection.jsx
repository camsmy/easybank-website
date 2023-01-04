const InfoCardSection = ({imageName,title,body}) =>{

    return(
        <div className='flex-1 p-4'>
            <img src={"/easybank-website"+imageName} alt="card-icon" className="pb-8 m-auto lg:m-0"/>
            <h3 className="text-lg font-light py-4">
                {title}
            </h3>
            <p className="text-neutral-grayish-blue text-base font-light ">
                {body}
            </p>
        </div>
    )
}

export {InfoCardSection}