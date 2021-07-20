
import React, {useContext} from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import {AuthContext} from '../providers/AuthProvider'

const Navbar = () => {
  const history = useHistory()
  const {pathname} = useLocation()
  const {authenticated, handleLogout} = useContext(AuthContext)
  const getRightNave = () => {
    if(authenticated){
      return (
      <Menu.Menu position='right'>
        <Menu.Item onClick={()=>handleLogout(history)}>Logout</Menu.Item>
      </Menu.Menu>
      )
    } else {
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item active={pathname ==='/register'}>Register</Menu.Item>
        </Link>
        <Link to='/login'>
          <Menu.Item active={pathname ==='/login'}>Login</Menu.Item>
        </Link>
      </Menu.Menu>
    )
  }}

  return (
    <Menu pointing secondary>
      <Link to='/'>
        <Menu.Item active={pathname ==='/'}>Home</Menu.Item>
      </Link>
      {getRightNave()}
    </Menu>
  );
}

export default Navbar;