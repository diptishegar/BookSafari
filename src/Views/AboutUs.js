import React from "react";
import { HashLink } from "react-router-hash-link";

function AboutUs(){
    return(
        <div><h3>About Page</h3>
        <HashLink smooth to="/AboutUs#aboutpage" className="font-mono pl-5 text-xl text-purple-900 py-5 rounded border-b border-purple-200 block">
                  About
                  </HashLink>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1 id="aboutpage">We can be found at</h1>
        </div>
    )
}

export default AboutUs;