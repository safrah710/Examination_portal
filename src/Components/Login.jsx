import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate=useNavigate();

    const login = async (e) => {
        e.preventDefault(); 
        try {
            let res = await axios.post('https://examination-portal-nhe6.onrender.com/login/user', { email, password });
            if (res.status === 200) {
                toast.success("Logged in successfully");
                setEmail('');
                setPassword('');
                sessionStorage.setItem('Token', res.data.token);
                sessionStorage.setItem('id', res.data.id);
                sessionStorage.setItem('role', res.data.role);
                sessionStorage.setItem('name', res.data.Name);
                navigate('/Dashboard');

            } else if (res.status === 400) {
                toast.error("Password is incorrect");
            }
        } catch (err) {
            toast.error("Login failed");
        }
    };

    return (
        <>
            <div className="new1">
                <h1 className="head">
                    <marquee width="60%" direction="right" height="100px">
                        WELCOME TO EXAMINATION PORTAL
                    </marquee>
                </h1>
                <div className="form1">
                    <p className="p1">LOGIN</p>
                    <form onSubmit={login}>
                        <input
                          
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            className="input1"
                            required
                            placeholder="Email"
                        />
                        <br />
                        <br />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            className="input2"
                            type="password"
                            maxLength="8"
                            required
                            placeholder="Password"
                        />
                        <button type="submit" className="logbtn">
                            LOGIN
                        </button>
                        <br />
                        <Link to='/Login/Forgot1'>
                            <p className="ang">
                                Forget password???
                            </p>
                        </Link>
                        <Link to='/Login/Create'>
                            <p className="ang">
                                CREATE ACCOUNT
                            </p>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;