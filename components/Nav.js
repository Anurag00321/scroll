import React from "react";

function Nav() {
  return (
    
    
          <ul className="flex fixed z-10 items-center w-full md:w-5/6 lg:w-[51.1%] border-b border-gray-200 bg-white text-sm  lg:px-10 top-16 lg:top-16 mt-px">
            <li className="flex items-center">
              <button
                className="focus:outline-none mx-0 rounded-sm 
								flex items-center justify-center lg:px-8 px-5 py-2.5 hover:bg-gray-50 capitalize transition-all ease-in duration-75
								font-semibold text-primary border-b-2 border-gray-900
								"
                type="button"
              >
                All
              </button>
            </li>
            <li className="flex items-center">
              <button
                className="focus:outline-none mx-0 rounded-sm 
								flex items-center justify-center lg:px-8 px-5 py-2.5 hover:bg-gray-50 capitalize transition-all ease-in duration-75
								font-medium text-gray border-b-2 border-transparent
								"
                type="button"
              >
                Following
              </button>
            </li>
          </ul>
  );
}

export default Nav;
