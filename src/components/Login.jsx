import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email:username, password }),
            });

            const data = await response.json();
            
            if (response.ok) {
                login(data.token);
                alert('Login SuccessFully')
                navigate('/table')
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('An error occurred');
        }
    };

    return (
        <>
        <div className="login-container"> 
            <form className="login-form" onSubmit={handleSubmit}>
                 <h1>Login From</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    /> <br/> <br/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    /> <br/> <br/>
                <button className="btn-login" type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
       
        </div>
         </>
    );
};

export default Login;
