import { NewArticles } from "../layouts/blog/new"
import { MainTrend } from "../layouts/blog/trend"

const BlogPage = () =>{
    return(
        <div className="py-16 space-y-12 px-4
        lg:px-20">
        
            <div className="flex flex-wrap flex-none justify-center space-y-8
            lg:space-x-8 lg:space-y-0">
                <MainTrend/>
                <NewArticles/>
            </div>

        </div>
    )
}
export {BlogPage}