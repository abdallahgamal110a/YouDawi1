import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2>Login</h2>
            Or
            <br />
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
}

export default Login;