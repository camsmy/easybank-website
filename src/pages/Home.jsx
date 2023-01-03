import { Navbar } from '../layouts/navbar'
import { Header } from "../layouts/home/header"
import { InfoSection } from '../layouts/home/informationSection'
import {ArticleSection as LatestArticles} from '../layouts/home/articleSection'
import {FooterSection as Footer} from '../layouts/footer'


const Home = () => {
    return (
        <div className="bg-neutral-very-light-gray">
            <Navbar />
            <Header />
            <InfoSection/>
            <LatestArticles/>
            <Footer/>
        </div>
    )
}

export { Home }