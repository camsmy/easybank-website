import {Routes, Route} from "react-router-dom"
import {Home} from '../pages/Home'
import {About} from '../pages/About'
function Root(){
  return (
    <>
    <Routes>
      <Route path='/easybank-website/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}
export {Root}