import React from 'react'

function LoginForm() {
  return (
     <form className="flex flex-col gap-4 animate-fade-in">
      <div className="flex flex-col">
        <label htmlFor="emailLogin" className="mb-1 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="emailLogin"
          placeholder="john.doe@example.com"
          className="border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="mb-1 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-900 text-white w-full py-2 rounded-lg font-semibold hover:bg-blue-800 transition-all mt-4"
      >
        Log In
      </button>
    </form>
  )
}

export default LoginForm