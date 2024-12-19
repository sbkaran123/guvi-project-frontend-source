import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => res.json())
      .then((data) => alert('Registration successful!'))
      .catch((err) => console.error('Error during registration:', err));
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <div className="flex flex-col space-y-4 mt-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 rounded"
        />
        <button
          onClick={handleRegister}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
