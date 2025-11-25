import React from 'react'
import login from '../assets/login.png'
import logo from '../assets/logo.png'
import Button from '../components/Button.jsx'

function Login() {
  return (
    <div className="flex h-screen">
      {/* LEFT SIDE IMAGE – 25% WIDTH */}
      <div className="w-3/4 h-full p-6 flex items-center justify-center bg-white">
        <img
          src={login}
          alt="login"
          className="w-3/4 h-auto object-contain rounded-xl "
        />
      </div>

      {/* RIGHT SIDE LOGIN SECTION */}
      <div className="w-3/4 flex items-center justify-center bg-blue-600 px-16">
        <div className="w-full max-w-md">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="logo"
              className="h-40 w-40 mb-8 object-cover rounded-full shadow-lg"
            />
          </div>
          <br /> <br />
          <h3 className="text-4xl font-bold mb-6 text-white">Welcome back to Checkify</h3>
          <h3 className="text-4xl font-bold mb-6 text-white">Please Login!!</h3>
          <br />
          <br />
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-white font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white text-black 
                     outline-none border border-white 
                     focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <label className="block mb-1 text-white font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none border border-white focus:ring-2 focus:ring-yellow-300"
              />
            </div>
            <br />
            <br />

            <Button text="Login" className="w-full bg-white text-blue-600 hover:bg-blue-900 hover:text-white"/>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login