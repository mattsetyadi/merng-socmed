import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar() {
  // we destructure context.user and logout to easiest use, but in login and register page we dont because its confusing, too many login word inside of it
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const MenuBar = user ? (
    <div className="menubar-wrap">
      <Menu pointing secondary size="massive" color="teal">
        <div className="item-wrap">
          <Menu.Item name={`Hi ${user.username}`} active as={Link} to="/" />
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={logout} />
          </Menu.Menu>
        </div>
      </Menu>
    </div>
  ) : (
    <div className="menubar-wrap">
      <Menu pointing secondary size="massive" color="teal">
        <div className="item-wrap">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
        </div>
        <div className="item-wrap">
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to="/register"
          />
        </div>
      </Menu>
    </div>
  );

  return MenuBar;
}

export default MenuBar;
