import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const MenuItems = () => {

  const location = useLocation();

  return (
    <>
      <li className={location.pathname === '/' ? 'menu-active' : ''}>
        <Link to="/">Accueil</Link>
      </li>

      <li className={location.pathname === '/nos-formations' ? 'menu-active' : ''}>
        <Link to="/nos-formations">
          Nos Formations
        </Link>
        {/*<li className={postURL[1] === "course" && pathLength > 2 ? "menu-active" : ""}>*/}
        {/*    <Link to="/course/1">Course Single</Link>*/}
        {/*</li>*/}
      </li>

      <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
}

export default MenuItems;