import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div>
            <h2>Login</h2>

            Or
            <br/>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    );
}

export default Login;