import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
        <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Already have an account? Log In Here!' : "Don't have an account? Sign Up Here!"}</button>
        <div className="auth-page">
          { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
          }
        </div>
    </main>
  );
}