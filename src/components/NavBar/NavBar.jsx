import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Container } from 'react-bootstrap';

export default function NavBar({ user, setUser }) {
  // Log Out Function
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  
  return (
    <Container className="container">
      <nav id="nav-bar" className="navbar fixed-top navbar-light">
        <span><strong>{user.name}</strong></span>
        &nbsp;&nbsp;
        <Link className="link">Home</Link>
        &nbsp;&nbsp;
        <Link className="link" to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
    </Container>
  );
}