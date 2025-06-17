import React from "react";
import { useAppContext } from "../context/AppContext";

const Userdata = () => {
  const { user } = useAppContext();

  return (
    <div className="h-[100dvh] max-w-xs mx-auto mt-0 border border-gray-200 p-4 bg-gray-50 rounded">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14">
          <img
            src="https://picsum.photos/60"
            alt="user"
            className="rounded-full w-full h-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm10 9a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">{user?.name || "Guest User"}</p>
          <p className="text-sm text-gray-600">{user?.email || "guest@email.com"}</p>
        </div>
      </div>

      <div className="border-t border-gray-300 my-4" />

      <p className="text-sm text-gray-700 leading-relaxed">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
        Sed Diam
      </p>
    </div>
  );
};

export default Userdata;
