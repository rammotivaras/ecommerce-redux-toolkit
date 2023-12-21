import { useSelector,useDispatch } from "react-redux"
import { remove } from "../Redux/Cartslice";
const Cart = () => {
    const cartItems = useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    const handleRemove = (id)=>{
       dispatch(remove(id))
    }
  return (
    <div>
    <h3>Cart Page</h3>
    <div className="cartWrapper">
        {
            cartItems.map((item,i)=>(
               <div className="cartCard" key={i}>
                <img src={item.image} alt="img" />
                   <h5>{item.title}</h5>
                   <h5>{item.price}</h5>
                   <button className="btn" onClick={()=>handleRemove(item.id)}>Remove</button>
               </div> 
            ))
        }
    </div>
    </div>
  )
}

export default Cart