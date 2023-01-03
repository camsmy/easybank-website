import {ArticleCard} from '../../components/articleCardComponent'

const ArticleSection = () =>{
    return(
        <div className="py-16 px-20 space-y-6">

            <h2 className="text-4xl font-light text-primary-dark-blue">
                Latest Articles
            </h2>

            <div className='flex space-x-8'>

                <ArticleCard
                imageSource="/assets/articleImages/image-currency.jpg"
                title="Receive money in any currency with no fees"
                author="Claire Robinson"
                body="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single"
                />

                <ArticleCard
                imageSource="/assets/articleImages/image-restaurant.jpg"
                title="Treat yourself without worrying about money"
                author="Wilson Hutton"
                body="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you"
                />

                <ArticleCard
                imageSource="/assets/articleImages/image-plane.jpg"
                title="Take your Easyank card wherever you go"
                author="Wilson Hutton"
                body="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you"
                />

                <ArticleCard
                imageSource="/assets/articleImages/image-confetti.jpg"
                title="Our invite-only Beta accounts are now live!"
                author="Wilson Hutton"
                body="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site"
                />

                
            </div>

        </div>
    )
}

export {ArticleSection}