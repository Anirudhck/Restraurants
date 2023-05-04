import React,{ useEffect}  from 'react'
import {Row, Col} from 'react-bootstrap' 
import  RestaurantCard from './RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../Action/restaurantAction'

function Home() {
  /*   ---Fetch method---
  
  const[Hotel,setHotel] = useState([])
  useEffect(()=>{
    const fetchData = async() => {
      await fetch ('/restaurants.json')
    .then(data=>data.json())
    .then(data=>setHotel(data.restaurants))
    }
    fetchData();
  },[])
return(
  <ROW>
     {Hotel.map(item=>(
       <col sm={12} md={8} lg={4} xl={3}>
       <RestaurantCard data={item}>
     ))}
  </ROW>
)  
} 
  */
const dispatch = useDispatch()
const restaurantReducer = useSelector(state=>state.restaurantReducer)  
const {restaurants} = restaurantReducer  
  useEffect(()=>{
    dispatch(listRestaurants() )
  },[])

  return (
<Row>
  {restaurants.map(item=>(
    <Col sm={12} md={8} lg={4} xl={3}>
        <RestaurantCard data={item}/>
    </Col>
    
  ))}
</Row> 
    
  )
}
 
export default Home  