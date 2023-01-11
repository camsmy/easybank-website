import {NewArticlesComponent} from "../../components/newArticleComponent"
const NewArticles = () =>{
    return(
        <div className="w-full bg-primary-dark-blue px-4 py-8 space-y-8
        lg:w-4/12 ">
            <h1 className="text-3xl font-bold text-neutral-light-greyish-blue">
                Latest Posts
            </h1>

            <NewArticlesComponent
            title="Hydrogen VS Electric Cars"
            body="Will hydrogen-fueled cars ever catch up
            to EVs?"
            />

            <NewArticlesComponent
            title="The Downsides of Al Artistry"
            body="What are the possible adverse effects of
            on-demand Al image generation?"
            />

            <NewArticlesComponent
            title="Hydrogen VS Electric Cars"
            body="Private funding by VC firms is down 50%
            YOY. We take a look at what that means."
            />

        </div>
    )
}
export {NewArticles}
