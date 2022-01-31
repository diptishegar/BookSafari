import React, { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useTransition, animated } from "react-spring";
import NavigationMenu from "./NavigationMenu";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
  });
  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    delay: 200,
  });

  return (
    <nav>
      <span className="text-4xl font-medium font-font-extrabold">
        <Icon.List className="font-extrabold w-12 mr-5" onClick={() => setShowMenu(true)}/>
      </span>
      {maskTransitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed bg-black-t-50 bg-blur-backg z-50 left-0 w-full shadow h-full top-0"
              onClick={() => setShowMenu(false)}
              >
              <Icon.X onClick={() => setShowMenu(false)} className="strong text-white text-4xl xs:text-4xl md:text-5xl font-bold fuckingcross"/>
            </animated.div>
          )
      )}
      {menuTransitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed bg-white left-0 w-4/5 shadow h-full z-50 top-0 p-3"
            >
              <NavigationMenu closeMenu={() => setShowMenu(false)}/>
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
