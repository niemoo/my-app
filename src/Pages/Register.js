import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import TextInput from '../components/TextInput';
import AuthLayouts from '../Layouts/AuthLayouts';

function Register() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  function handleRegister(e) {
    e.preventDefault();

    console.log(`username : ${username}`);
    console.log(`firstName : ${firstName}`);
    console.log(`lastName : ${lastName}`);
    console.log(`email : ${email}`);
    console.log(`password : ${password}`);
  }

  return (
    <AuthLayouts>
      <h1 className="font-medium text-2xl">REGISTER</h1>

      <form className="mt-5" onSubmit={handleRegister}>
        <div className="space-y-3">
          <div>
            <label htmlFor="username">Username</label>
            <TextInput type="username" id="username" placeholder="" className="block w-full p-2 border rounded mt-1" onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div>
            <label htmlFor="firstName">First Name</label>
            <TextInput type="firstName" id="firstName" placeholder="" className="block w-full p-2 border rounded mt-1" onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <TextInput type="lastName" id="lastName" placeholder="" className="block w-full p-2 border rounded mt-1" onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <TextInput type="email" id="email" placeholder="email@example.com" className="block w-full p-2 border rounded mt-1" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <TextInput type="password" id="password" className="block w-full p-2 border rounded mt-1" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <PrimaryButton className="w-full">Register</PrimaryButton>

          <div>
            Sudah punya akun?
            <Link to="/login" className="hover:text-blue-500 hover:underline">
              {' '}
              Masuk Sekarang
            </Link>
          </div>
        </div>
      </form>
    </AuthLayouts>
  );
}

export default Register;
