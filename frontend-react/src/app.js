import React, { useState, useEffect } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Usuários</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
