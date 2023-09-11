import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ user }) {
    return (
        <main>
            <h1 className="text-center">Auth Page</h1>
            <SignUpForm />
        </main>
    );
}