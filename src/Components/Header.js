import React from "react";
import Navigation from "./Navigation";

function Header(){
    return(
        <header style={{ margin:"0rem 0rem 0rem -.3rem" }} className="mb-3 ml-0 border-b bg-gray-100 rounded-lg shadow w-full border-purple-300 p-3 flex justify-between items-center">
            <span className="pb-3 pt-3 text-purple-600 font-mono font-medium text-3xl px-3">
            Whatta product!
            </span>
           <Navigation />
        </header>
    )
}
 export default Header;