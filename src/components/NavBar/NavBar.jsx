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
      <nav id="nav-bar" className="navbar fixed-top shadow-lg">
        <Link className="link navbar-text text-white" to="/">Home</Link>
        <Link className="link navbar-text text-white" to="/search">Search</Link>
        <Link className="link navbar-text text-white" to="/recommendations">Discover</Link>
        <Link className="link navbar-text text-white" to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
    </Container>
  );
}