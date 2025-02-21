import React from 'react';

const Forget = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="text-[#CF992D] text-2xl font-semibold mb-6">
        PangeaPay
      </div>
      
      <div className="bg-white rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Password Reset</h1>
        <p className="text-gray-600 mb-6">
          To reset your password, enter the email address you use to sign in to iofrm
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="E-mail Address"
            className="w-full p-3 bg-gray-100 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#CF992D] text-white py-3 rounded-lg font-medium hover:bg-black transition-colors"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forget;