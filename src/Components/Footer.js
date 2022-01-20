import React from "react";
import * as Icon from 'react-bootstrap-icons';

function Footer(){
    return(
        <footer className="bg-black text-center text-white text-xs p-3 mt-4 absolute bottom-0 w-full">
         <h4 className="mb-3 font-mono text-2xl w-full rounded">Contact Us</h4>
        
         <div style={{ margin:"0rem 0rem 0rem 1rem" }} className="flex justify-start flex-col">
            <span className="pl-3 pb-1 text-sm flex items-center">
              <Icon.Telephone /><span className="pl-2">9394300002</span>
            </span>
            <span className="pl-3 pb-5 text-sm flex items-center">
              <Icon.Envelope /> <span className="pl-2">booksafari@gmail.com</span>
              </span>
          </div>
          <div style={{ margin:"0rem 0rem -0.4rem -1rem" }} className="flex justify-center">
            <span className="pl-3 text-xl md:text-3xl">
              <Icon.Facebook />
            </span>
            <span className="pl-3 text-xl md:text-3xl">
              <Icon.Instagram />
              </span>
              <span className="pl-3 text-xl md:text-3xl">
              <Icon.Twitter />
              </span>
              <span className="pl-3 text-xl md:text-3xl">
              <Icon.Linkedin />
              </span>
          </div>
          <br />
          <span className="text-center font-sans text-white text-xs">&copy; Copyright 2022</span>
        </footer>
    )
}
 export default Footer;