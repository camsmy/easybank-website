import { Navbar } from '../layouts/home/navbar'
import { Header } from "../layouts/home/header"
import { InfoSection } from '../layouts/home/informationSection'
import {ArticleSection as LatestArticles} from '../layouts/home/articleSection'

const Home = () => {
    return (
        <div className="bg-neutral-very-light-gray">
            <Navbar />
            <Header />
            <InfoSection/>
            <LatestArticles/>
        </div>
    )
}

export { Home }