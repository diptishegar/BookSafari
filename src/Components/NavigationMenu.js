import React from "react";
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';


function NavigationMenu(props) {
  return (
    <div className="mt-3 bg-white ml-2 rounded h-full">
              <span className="pb-5 text-gray-800 pt-6 font-mono bg-white font-medium text-3xl px-3">Whatta Product!</span>
              <ul>
                <li>
                  <Link onClick={props.closeMenu} to="/" className="font-mono text-xl pl-5 text-gray-700 pt-6 mt-6 py-5 rounded border-b border-gray-400 block">
                  <Icon.House />
                    Home
                  </Link>
                </li>
                <li>
                  <HashLink onClick={props.closeMenu} smooth to="/AboutUs" className="font-mono pl-5 text-xl text-gray-700 py-5 rounded border-b border-gray-400 block">
                    <span className="content"><Icon.InfoLg />About</span>
                  </HashLink>
                </li>
               <li>
                 <HashLink onClick={props.closeMenu} smooth to="/#FooterPagedown" className="font-mono text-xl pl-5 text-gray-700 py-5 rounded border-b border-gray-400 block">
                 Contact
                 </HashLink>
                 
               </li>
              </ul>
    </div>
  );
}

export default NavigationMenu;
