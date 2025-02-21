import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="text-[#CF992D] text-2xl font-semibold mb-6 flex items-center">
        PangeaPay
      </div>
      
      <div className="bg-white rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Login to account</h1>
        <p className="text-gray-600 mb-6">
          Access to the most powerfull tool in the entire design and web industry.
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="E-mail Address"
            className="w-full p-3 bg-gray-100 rounded-lg outline-none"
          />
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-100 rounded-lg outline-none"
            />
            <div className="text-right">
              <Link to="/Forget" className="text-sm text-black hover:text-[#CF992D]">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#CF992D] text-white py-3 rounded-lg font-medium hover:bg-black transition-colors"
          >
            Login
          </button>
        </form>

        {/* <div className="mt-6">
          <p className="text-center text-gray-600 mb-4">Or login with</p>
          <div className="flex justify-center space-x-4">
            <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
              Facebook
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
              Google
            </button>
            <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
              Linkedin
            </button>
          </div>
        </div> */}

        <div className="mt-6 text-center">
          <Link to="/RegisterPage" className="text-gray-900 font-medium hover:underline">
            Register new account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;