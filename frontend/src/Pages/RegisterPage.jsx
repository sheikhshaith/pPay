import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      {/* Company name at the top */}
      <div className="text-[#CF992D] text-2xl font-semibold mb-6 flex items-center">
        PangeaPay
      </div>

      {/* Main card */}
      <div className="bg-white rounded-3xl p-8 w-full max-w-md">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-2">Register new account</h1>
        <p className="text-gray-600 mb-6">
          Access to the most powerfull tool in the entire design and web industry.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-gray-100 rounded-lg outline-none"
          />
          <input
            type="email"
            placeholder="E-mail Address"
            className="w-full p-3 bg-gray-100 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-100 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#CF992D] text-white py-3 rounded-lg font-medium hover:bg-black transition-colors"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <div className="mt-6 text-center">
          <Link to="/login" className="text-gray-900 font-medium hover:underline">
            Login to account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;