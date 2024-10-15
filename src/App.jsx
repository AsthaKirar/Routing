import {Route,Routes} from 'react-router-dom'
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Service from "./components/Service"
import Pagenotfound from './components/Pagenotfound'

const App = () => {
  return (
    <div className='w-[80%] rounded-md my-10 mt-10 mx-20  bg-rose-200'>
      <Nav/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/About" element={<About/>}/>
        <Route path = "/service" element={<Service/>}/>
        <Route path='*' element={<Pagenotfound/>} />


      </Routes>


    </div>
  )
}

export default App