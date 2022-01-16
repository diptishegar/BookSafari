import React from "react";
import { Link } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';


function NavigationMenu(props) {
  return (
    <div className="border bg-gray-100 border-purple-200 md:m-3 sm:m-1 p-3 rounded h-full">
              <span className="pb-5 text-purple-600 pt-6 font-mono font-medium text-3xl px-3">Whatta Product!</span>
              <ul>
                <li>
                  <Link onClick={props.closeMenu} to="/" className="font-mono text-xl pl-5 text-purple-900 pt-6 mt-6 py-5 rounded border-b border-purple-200 block">
                    Home
                  </Link>
                </li>
                <li>
                  <HashLink onClick={props.closeMenu} smooth to="#/AboutUs" className="font-mono pl-5 text-xl text-purple-900 py-5 rounded border-b border-purple-200 block">
                  About
                  </HashLink>
                </li>
               <li>
                 <Link onClick={props.closeMenu} to="/Contact" className="font-mono text-xl pl-5 text-purple-900 py-5 rounded border-b border-purple-200 block">
                 Contact
                 </Link>
                 
               </li>
              </ul>
    </div>
  );
}

export default NavigationMenu;
