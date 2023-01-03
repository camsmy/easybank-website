import { Navbar } from '../layouts/home/navbar'
import { Header } from "../layouts/home/header"

const Home = () => {
    return (
        <div className="bg-neutral-very-light-gray">
            <Navbar />
            <Header />
        </div>
    )
}

export { Home }