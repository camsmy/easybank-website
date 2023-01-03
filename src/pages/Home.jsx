import { Navbar } from '../layouts/home/navbar'
import { Header } from "../layouts/home/header"
import { InfoSection } from '../layouts/home/informationSection'

const Home = () => {
    return (
        <div className="bg-neutral-very-light-gray">
            <Navbar />
            <Header />
            <InfoSection/>
        </div>
    )
}

export { Home }