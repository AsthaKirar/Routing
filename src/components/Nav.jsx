import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex gap-x-10">
        <NavLink style={(e)=>e.isActive?{textDecoration:"underline"}:{}} className={(e)=> e.isActive? "text-red-400":""} to ="/">Home</NavLink>
        <NavLink style={(e)=>e.isActive?{textDecoration:"underline"}:{}} className={(e)=> e.isActive? "text-red-400":""} to ="/About">About</NavLink>
        <NavLink style={(e)=>e.isActive?{textDecoration:"underline"}:{}} className={(e)=>e.isActive? "text-red-400":""} to ="/service">Service</NavLink>
        <NavLink className={(e)=>e.isActive?"text-red-300":""}to="/List"> List</NavLink>
    </div>
  )
}

export default Nav