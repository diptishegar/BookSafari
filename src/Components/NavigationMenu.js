import React from "react";
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';


function NavigationMenu(props) {
  
  return (
    <div className="mt-3 z-50 bg-transparent ml-2 rounded h-full">
              <span className="pb-5 shadow pt-6 text-gray-900 font-mono text-3xl sm:pl-0 md:px-3">BookSafari</span>
      
              <ul>
                <li>
                  <Link onClick={props.closeMenu} to="/" className="font-mono text-xl pl-2 text-gray-700 pt-6 mt-6 py-3 rounded border-b border-gray-400 block">
                  <button className="flex focus:outline-none border hover:shadow-inner shadow-base border-white rounded focus:border-blue-300 justify-start flex-row items-center px-3 hover:text-gray-500 focus:text-gray-900"><Icon.HouseDoor className="text-lg" /><span className="pl-3">Home</span></button>
                  </Link>
                </li>
                <li>
                  <HashLink onClick={props.closeMenu} smooth to="/AboutUs" className="flex justify-start flex-row items-center font-mono pl-2 text-xl text-gray-700 py-3 rounded border-b border-gray-400 block">
                  <button className="flex focus:outline-none border hover:shadow-inner shadow-base border-white rounded focus:border-blue-300 justify-start px-3 flex-row items-center hover:text-gray-500 focus:text-gray-900"><Icon.InfoCircle className="text-lg" /><span className="pl-3">About</span></button>
                  </HashLink>
                </li>
               <li>
                 <HashLink onClick={props.closeMenu} smooth to="#FooterPagedown" className="flex justify-start flex-row items-center font-mono text-xl pl-2 text-gray-700 py-3 rounded border-b border-gray-400 block">
                 <button className="flex focus:outline-none border hover:shadow-inner shadow-base border-white rounded focus:border-blue-300 px-3 justify-start flex-row items-center hover:text-gray-500 focus:text-gray-900"><Icon.Telephone className="text-base" /><span className="pl-3">Contact</span></button>
                 </HashLink>
                 
               </li>
              </ul>
    </div>
  );
}

export default NavigationMenu;
