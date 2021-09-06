import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return <>
    <div className="title">
      <h1 className="text-center margin-bottom-5">Trending</h1>
      <h3 className="text-center margin-top-5">See what the Github community is most excited about today</h3>
    </div>
    <div className="tabs">
      <div className="content">
      <NavLink exact to="/" activeClassName="selected" className="buttonLink">
      Repositories
</NavLink>
<NavLink to="/devtrends" activeClassName="selected" className="buttonLink">
Developers
</NavLink>


        
      </div>
    </div>
  </>
}

export default Header;