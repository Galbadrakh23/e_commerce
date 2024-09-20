import React from "react";

const Login = () => {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-6">Нэвтрэх</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Имэйл хаяг
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Имэйл хаяг"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Нууц үг
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Нууц үг"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200">
            Нэвтрэх
          </button>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Нууц үг мартсан
            </a>
          </div>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Бүртгүүлэх
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
