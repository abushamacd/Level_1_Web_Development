import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <form action="">
                <input type="email" name="" id="" placeholder='Your email' />
                <br />
                <input type="password" name="" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;