import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
    delay: 200,
  });

  return (
    <nav>
      <span className="text-3xl font-medium border py-1 px-3 rounded border-purple-200">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {maskTransitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed bg-black-t-50 left-0 w-full shadow h-full z-50 top-0"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}
      {menuTransitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed bg-gray-200 left-0 w-4/5 shadow h-full z-50 top-0 p-3"
            >
              <NavigationMenu closeMenu={() => setShowMenu(false)}/>
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navigation;
