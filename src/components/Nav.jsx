import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
        <Link to ="/">Home</Link>
        <Link to ="/About">About</Link>
        <Link to ="/service">Service</Link>
    </div>
  )
}

export default Nav