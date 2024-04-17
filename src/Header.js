import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useStateValue } from "./StateProvider";


function Header() {
    const [{basket} ] = useStateValue();

    console.log(basket);
    
  return (
    <div className="header">
      {/* AMAZON LOGO */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />{" "}
      </Link>

      {/* SEARCH BAR */}
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search on Amazon, HAPPY SHOPPING"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header_nav">
        {/* 1st links */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLine">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd links */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLine">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd links */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLine">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* Shopping Basket link */}
        <Link to="/cart" className="header_link">
          <div className="header_optionBasket">
            {/* Basket Icon */}
            <ShoppingCartOutlinedIcon />
            {/* Count */}
            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
