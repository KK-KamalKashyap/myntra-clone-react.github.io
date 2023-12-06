import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdAddCircleOutline } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const  HomeItem = ({item}) => {


const dispatch = useDispatch()
const bagItems =  useSelector(store => store.bag);
const elementFound = bagItems.indexOf(item.id) >= 0;

const handleAddToBag = () => {
dispatch(bagActions.addToBag(item.id));

}
const handleRemove = () => {
  dispatch(bagActions.removeFromBag(item.id));
  
  }
  

return <>
 <div className="item_container"> 
          <a href="#"> <img className="sale_item" src={item.image}/> </a>
  
          <div className="rating">
            {item.rating.stars} ⭐| {item.rating.count}
          </div>
          <div className="company_name">{item.company} </div>
          <div className="item_name">{item.item_name}</div>
          <div className="price">
            <span className="current_price">Rs {item.current_price}</span>
            <span className="original_price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </div>
  {elementFound ? <button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemove}> <IoIosRemoveCircleOutline /> Remove</button> :    <button type="button" className="btn btn-success btn-add-bag" onClick={handleAddToBag}> <MdAddCircleOutline /> Add to Bag</button> }
        
       

        </div>

</>


}
export default HomeItem;