import React from "react";
import Navigation from "./Navigation";

function Header(){
    return(
        <header style={{ margin:"0rem 0rem 0rem -.36rem" }} className="mb-3 ml-0 border-b bg-gray-100 rounded-lg shadow w-full border-purple-300 p-3 flex justify-between items-center">
            <span className="pb-3 pt-3 text-gray-900 font-mono font-medium text-3xl px-3">
            BookWorld
            </span>
           <Navigation />
        </header>
    )
}
 export default Header;
