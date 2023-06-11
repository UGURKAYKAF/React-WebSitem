import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';

export function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("./admin.json")
            .then(response => response.json())
            .then(data => {
                setUserData(data.admin);
            });
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();

        const isUserExists = userData.length > 0 && userData.some(user => user.username === username && user.password === password);

        if (isUserExists) {
            window.location.href = '/admin'; 
        } else {
            setErrorMessage('Kullanıcı adı veya şifre yanlış.');
        }
    };

    return (
        <div className="container">
            <Form className="mt-5">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleLogin} className="mt-3">
                    Login
                </Button>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </Form>
        </div >
    );
}

