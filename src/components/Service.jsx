import { useNavigate } from "react-router-dom"

const Service = () => {
  const Navigate = useNavigate()
  const subitHandler = (e)=>{
    e.preventDefault();
    Navigate("/")
  }

  return (
    <div>
      <h1>Services</h1>
      <form  onSubmit={subitHandler}>
        <button className="bg-pink-500 mb-10 rounded-md">submit</button>
      </form>
    </div>
  )
}

export default Service