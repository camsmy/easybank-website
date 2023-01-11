import {Routes, Route} from "react-router-dom"
import {Home} from '../pages/Home'
import {About} from '../pages/About'
import {Convertion} from "../pages/Convertion"
import {BlogPage as Blog} from "../pages/Blog"
function Root(){
  return (
    <>
    <Routes>
      <Route path='/easybank-website/' element={<Home/>}/>
      <Route path='/easybank-website/about' element={<About/>}/>
      <Route path='/easybank-website/convertion' element={<Convertion/>}/>
      <Route path='/easybank-website/blog' element={<Blog/>}/>
    </Routes>
    </>
  )
}
export {Root}