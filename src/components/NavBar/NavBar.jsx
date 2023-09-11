import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function NavBar({ user }) {
  return (
    <nav>
      <Link>Sign Up</Link>
      &nbsp; | &nbsp;
      <Link>Link 2</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}!</span>
    </nav>
  );
}