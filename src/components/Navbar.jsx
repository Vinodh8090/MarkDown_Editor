import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";

// Functional Component to render Navbar of the application
const Navbar = (props) => {
   return (
      <nav>
         <label class="logo">MKEditor</label>
         <ul>
            <li>
               <NavLink exact to="/" activeClassName="active">
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink to="/editor" activeClassName="active">
                  Editor
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
