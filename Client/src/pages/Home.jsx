import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[375px] mx-auto min-h-screen flex flex-col justify-end px-6 py-10 bg-white text-center shadow-md">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="w-full space-y-3">
          <button
            onClick={() => navigate("/register")}
            className="w-full py-3 rounded-md text-white bg-violet-600 hover:bg-violet-700 transition"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 rounded-md text-violet-600 bg-violet-100 hover:bg-violet-200 transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
