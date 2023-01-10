import mainImage from "../../assets/blog/image-web-3-desktop.jpg"
import { SquareButton } from "../../components/squareButton"
const MainTrend = () =>{
    return(
        <div className="w-full lg:w-7/12 space-y-8">

            <div className="w-full">
                <img src={mainImage} alt="Trending Image" />
            </div>

            <div className="flex flex-col lg:flex-row">

                <h1 className="flex-1 text-5xl font-bold text-primary-dark-blue">
                    The Bright Future of Web 3.0?
                </h1>

                <div className="flex-1 space-y-4">

                    <p className="font-light text-neutral-grayish-blue">
                    We dive into the next evolution of the web that
                    claims to put the power of the platforms back
                    into the hands of the people. But is it really
                    fulfilling its promise?
                    </p>

                    <SquareButton name="READ MORE" 
                    width="10" 
                    height="4"/>

                </div>
            </div>
        </div>
    )
}
export {MainTrend}