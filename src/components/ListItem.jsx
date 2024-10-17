
import { useLocation, useNavigate , useParams} from 'react-router-dom'

export const ListItem = () => {
  const navigate = useNavigate();
  const params = useParams;
  const Location = useLocation()
  return (
    <div>
      <h1 className='text-3xl text-red-400'>{params.i}</h1>
      <button className='mt-10 px- py-2 rounded-md bg-white'
      onClick={()=>navigate(-1)}>Back</button>
    </div>
  )
}
export default ListItem;