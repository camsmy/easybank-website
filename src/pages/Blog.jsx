import { NewArticles } from "../layouts/blog/new"
import { MainTrend } from "../layouts/blog/trend"
import { TopArticle } from "../components/topArticleComponent"

const BlogPage = () =>{
    return(
        <div className="py-16 space-y-4 px-4
        lg:px-20">
        
        <header className="space-y-12">

            <div className="flex flex-wrap flex-none justify-between space-y-8
             lg:space-y-0">
                <MainTrend/>
                <NewArticles/>
            </div>

            <div className="flex flex-col lg:flex-row flex-wrap justify-center space-y-8
            lg:space-x-8 lg:space-y-0">
                <TopArticle
                number="01"
                title="The Growth of Gaming"
                body="How the pandemic has sparked
                fresh opportunities."/>

                <TopArticle
                    number="02"
                    title="The Growth of Gaming"
                    body="How the pandemic has sparked
                    fresh opportunities."/>


                <TopArticle
                    number="03"
                    title="The Growth of Gaming"
                    body="How the pandemic has sparked
                    fresh opportunities."/>
                
            </div>

        </header>


        

            

        </div>
    )
}
export {BlogPage}