import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

const bag = useSelector(store => store.bag);


  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            {" "}
            <img
              src="images/myntra_logo.webp"
              alt="Myntra-clone"
              id="myntra_home"
              className="myntra_home"
            />{" "}
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Womwn</a>
          <a href="#">Kids</a>
          <a href="#">Home &Living</a>
          <a href="#"> Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined serach_icon">search</span>
          <input
            placeholder="Search for products, brands and more"
            className="search_input"
            value=""
            data-reactid="907"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
          <IoPersonOutline />
            <span className="action_name"> Profile</span>
          </div>

          <div className="action_container">
          <FaRegHeart />
            <span className="action_name"> WishList</span>
          </div>
          <Link className="action_container" to="/bag">
          <IoBagOutline />
            <span style={{color: "black"}} className="action_name"> Bag</span>
            </Link>
            <span  className="bag-item-count">{bag.length}</span>
           
        </div>
      </header>
    </>
  );
};
export default Header;
