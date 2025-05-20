import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <>
      {/* Banner */}
      <div className="relative rounded-b-[40px] overflow-hidden shadow-md">
        <img
          src="src/assets/orange.jpg"
          alt="Banner"
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Document Request Form
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design,
            publishing, and web development.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="min-h-screen flex flex-col lg:flex-row py-10 lg:py-20 font-sans bg-gray-50">

        {/* Tab buttons on top for mobile */}
        <div className="flex lg:hidden justify-center gap-4 mb-6">
          <button
            className={`transition-all duration-300 text-sm font-semibold tracking-wide px-6 py-2 rounded-xl shadow-md ${
              activeTab === "signup"
                ? "bg-blue-100 text-blue-900 ring-2 ring-blue-300"
                : "bg-white text-gray-900"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
          <button
            className={`transition-all duration-300 text-sm font-semibold tracking-wide px-6 py-2 rounded-xl shadow-md ${
              activeTab === "login"
                ? "bg-blue-100 text-blue-900 ring-2 ring-blue-300"
                : "bg-white text-gray-900"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
        </div>

        {/* Left Image Section (hidden on small screens) */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden rounded-r-[100px]">
          <img
            src="src/assets/unsplash_m_7p45JfXQo.png"
            alt="Background"
            className="object-cover w-full h-full absolute inset-0 z-0"
          />

          {/* Tabs on side for laptop */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-1px] z-10 flex flex-col items-end space-y-3">
            <button
              className={`transition-all duration-300 text-sm font-semibold tracking-wide px-6 py-3 w-[110px] rounded-l-xl shadow-xl backdrop-blur-md ${
                activeTab === "signup"
                  ? "bg-gray-50 text-blue-900 ring-2 ring-blue-200"
                  : "bg-white text-gray-900 hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
            <button
              className={`transition-all duration-300 text-sm font-semibold tracking-wide px-6 py-3 w-[110px] rounded-l-xl shadow-xl backdrop-blur-md ${
                activeTab === "login"
                  ? "bg-gray-50 text-blue-900 ring-2 ring-blue-200"
                  : "bg-white text-gray-900 hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 sm:px-10 md:px-12 bg-gray-50">
          <img
            src="src/assets/logo.png"
            alt="Mallak Logo"
            className="h-10 sm:h-12 mb-4 sm:mb-6"
          />

          {/* Card */}
          <div className="bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-md min-h-[460px] sm:min-h-[500px] md:min-h-[520px] flex flex-col border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-extrabold text-blue-900 mb-2 tracking-tight">
              {activeTab === "signup"
                ? "Document Request Form"
                : "Welcome Back!"}
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              {activeTab === "signup"
                ? "Fill in your details to request access."
                : "Enter your credentials to continue."}
            </p>

            {activeTab === "signup" ? <SignUpForm /> : <LoginForm />}
          </div>
        </div>
      </div>
    </>
  );
}
