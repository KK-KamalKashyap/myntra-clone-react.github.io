import { useSelector } from "react-redux";

const  BagSummary= ({}) => {
  const bagItemIds  =     useSelector(state => state.bag);

  const items  =     useSelector(state => state.items);
  const finalItems = items.filter(item => {
      const itemIndex = bagItemIds.indexOf(item.id);
      return itemIndex >= 0;
  })
  

  let totalItem  =bagItemIds.length;
let totalMrp = 0 ;
let totalDiscount = 0;

finalItems.forEach(bagItem => {
    totalMrp += bagItem.original_price;
    totalDiscount += bagItem.original_price -bagItem.current_price;

})
let  finalPayment = totalMrp - totalDiscount ;


  return  <div className="bag-summary">
    <div className="bag-details-container">
      <div className="price-header">
        PRICE DETAILS ({totalItem} Items)
      </div>
      <div className="price-item">
        <span className="price-item-tag">Total Mrp</span>

        <span className="price-item-value">Rs {totalMrp}</span>
      </div>
      <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>

        <span className="price-item-value priceDetail-base-discount ">
          -Rs {totalDiscount}
        </span>
      </div>
      <div className="price-item">
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>

          <span className="price-item-value">Rs {finalPayment}</span>
        </div>
        <button className="btn-place-order">
          <div> Plave Order</div>
        </button>
      </div>
    </div>
  </div>
  
};

export default BagSummary ;
