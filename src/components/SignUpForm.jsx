import React from 'react'

function SignUpForm() {
  return (
      <form className="flex flex-col gap-4 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="company" className="mb-1 text-sm font-medium">
            Company
          </label>
          <input
            type="text"
            id="company"
            placeholder="Acme Corporation"
            className="border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 text-sm font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+1 (555) 123-4567"
            className="border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
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
            className="border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="flex flex-col text-sm text-gray-700">
        <p className="mb-2">Are you a current customer of Mallak?</p>
        <div>
          <label className="mr-4">
            <input type="radio" name="customer" className="mr-1" /> Yes
          </label>
          <label>
            <input type="radio" name="customer" className="mr-1" defaultChecked /> No
          </label>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address" className="mb-1 text-sm font-medium">
          Address
        </label>
        <textarea
          id="address"
          placeholder="123 Business Ave, Suite 100, City, Country"
          className="border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="2"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-900 text-white w-full py-2 rounded-lg font-semibold hover:bg-blue-800 transition-all mt-4"
      >
        Submit Request
      </button>
    </form>
  )
}

export default SignUpForm