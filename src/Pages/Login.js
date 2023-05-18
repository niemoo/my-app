import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import TextInput from '../components/TextInput';
import AuthLayouts from '../Layouts/AuthLayouts';

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleLogin(e) {
    e.preventDefault();

    console.log(`email : ${email}`);
    console.log(`password : ${password}`);
  }

  return (
    <AuthLayouts>
      <h1 className="font-medium text-2xl">LOGIN</h1>

      <form className="mt-8" onSubmit={handleLogin}>
        <div className="space-y-5">
          <div>
            <label htmlFor="email">Email</label>
            <TextInput type="email" id="email" placeholder="email@example.com" className="block w-full p-2 border rounded mt-1" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="mt-3">
            <label htmlFor="password">Password</label>
            <TextInput type="password" id="password" className="block w-full p-2 border rounded mt-1" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <PrimaryButton className="w-full">Login</PrimaryButton>

          <div>
            Belum punya akun? Ayo
            <Link to="/register" className="text-blue-500 hover:underline">
              {' '}
              Daftar
            </Link>
          </div>
        </div>
      </form>
    </AuthLayouts>
  );
}

export default Login;
