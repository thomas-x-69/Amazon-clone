import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
// import { auth } from "./firebase";

const Header = () => {
  const [{ basket,user }, dispatch] = useStateValue();
  
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div className='header'>
      <Link to='/'>
      <img
      className='header__logo'
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      alt="" />
      </Link>
         <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      
       <div className='header__nav'>
        <Link to={!user&&'/login'}>
        <div onClick={handleAuthenticaton}
         className='header__option'>
          <div className='header__optionLineOne'>
          Hello {!user ? 'Guest' : user.email}          </div>
          <span className='header__optionLineTwo'>{user?'sign Out':'Sign In'}
          </span>

        </div>
        </Link>
        <Link to='/orders'>


        <div className='header__option'>

        <div className='header__optionLineOne'>
            Returns
          </div>
          <div className='header__optionLineTwo'>
            &Orders
          </div>
        </div>
        </Link>
        <div className='header__option'>
        <div className='header__optionLineOne'>
            Your
          </div>
          <div className='header__optionLineTwo'>
            Prime
          </div>
        </div>
        <Link to='/Checkout'>
        <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon className="header__optionBasketIcon" />
            <span className="header__optionLineTwo header__basketCount">
              <span>{basket?.length}
</span><br/>
              Items
      </span>
          </div>
        </Link>
        </div>
      </div>
  )
}

export default Header