import { useDispatch } from "react-redux";
import { CiBookmarkRemove } from "react-icons/ci";
import { bagActions } from "../store/bagSlice";

const bagItem = ({item}) => {

 const dispatch =    useDispatch();

 const  handleRemoveItem = () => {
dispatch(bagActions.removeFromBag(item.id));
 }



   return   <div className="bag-item-container">   
 <div className="item-left-part">
   <img className="bag-item-img" src={item.image} alt="ff"/> 
   </div>
   
   <div className="item-right-part"> 
   <div className="company_name">{item.company}</div>
   <div className="item_name">{item.item_name} </div>
   <div className="price">
   <span className="current_price">Rs {item.current_price}</span>
   <span className="original_ptice">Rs {item.original_price}</span>
   <span className="discount">{ item.discount_percentage} OFF</span>
   </div>
   <div className="return-period">
   <span className="return-period-days"> {item.return_period} days</span> return available
   </div>  
   <div className="delivery-details">
   Delivery by
   <span className="delivery-details-days">{item.delivery_date }oct 2023</span>
   </div>
   
   <div className="remove-from-cart" onClick={handleRemoveItem}>  <CiBookmarkRemove /></div>
  

   </div> 

</div>



}

export default bagItem;