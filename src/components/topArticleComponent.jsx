import gaming from "../assets/blog/image-gaming-growth.jpg"
const TopArticle = ({title, number, body}) =>{
    return(
        <div className="flex-1 flex space-x-4">

            <img src={gaming} alt="gaming image" className="bg-cover h-36 bg-center"/>

            <div>
                <h3 className="text-4xl text-grayish-blue font-bold">
                    {number}
                </h3>
                <h4 className="text-xl font-bold
                hover:text-primary-lime-green hover:cursor-pointer">
                    {title}
                </h4>
                <p className="text-neutral-grayish-blue">
                    {body}
                </p>
            </div>
        </div>
    )
}
export {TopArticle}