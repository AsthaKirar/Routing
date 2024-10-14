import {Route,Routes} from 'react-router-dom'
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Service from "./components/Service"

const App = () => {
  return (
    <div className='w-80% rounded-md my-10 bg-rose-400'>
      <Nav/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/service" element={<Service/>}/>


      </Routes>


    </div>
  )
}

export default App