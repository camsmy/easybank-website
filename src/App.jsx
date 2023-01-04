import "./styles.css"
import {Routes, Route} from "react-router-dom"
import {Navbar} from './layouts/navbar'
import {FooterSection as Footer} from './layouts/footer'
import {Root as RootLinks} from "./routes/root"
function App(){
  return (
    <>
    <Navbar/>
      <RootLinks/>
    <Footer/>
    </>
  )
}
export default App