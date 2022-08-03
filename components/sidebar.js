import React from "react";
import a from 'next/link'


function Sidebar() {
  return (
    <div className="min-w-200 fixed left-0 lg:block hidden">
      <div className="w-72 pl-20 min-w-64 pt-16 pb-10 pr-3 flex flex-col lg:justify-between bg-gray-100 right-0 top-0 h-screen">
        <div className="lg:block hidden">
        <div className="lg:hidden flex justify-end pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <desc>
              Download more icon variants from https://tabler-icons.io/i/x
            </desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
          <ul className="mt-2">
            <li className="mb-2">
              <a
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-300 bg-gray-300 text-primary rounded font-medium"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-float-left"
                width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/float-left
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect width="6" height="6" x="4" y="5" rx="1"></rect>
                  <line x1="14" y1="7" x2="20" y2="7"></line>
                  <line x1="14" y1="11" x2="20" y2="11"></line>
                  <line x1="4" y1="15" x2="20" y2="15"></line>
                  <line x1="4" y1="19" x2="20" y2="19"></line>
                </svg>
                <span className="text-primary text-base capitalise ml-2">
                  Scroll
                </span>
                <span className="py-0.5 flex items-center text-xs leading-2 text-center whitespace-nowrap align-top font-normal bg-gray-400 text-white rounded-full ml-2 px-1.5">
                  beta
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-200 text-primary rounded font-normal"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-users"
                width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/users
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                </svg>
                <span className="text-primary text-base capitalise ml-2">
                  My Network
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-300 text-primary rounded font-normal"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/search
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="10" cy="10" r="7"></circle>
                  <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>
                <span className="text-primary text-base capitalise ml-2">Find</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-300 text-primary rounded font-normal"
                
              >
               <svg xmlns="http://www.w3.org/2000/svg" className="flex-none" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><desc>Download more icon variants from https://tabler-icons.io/i/briefcase</desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="7" width="18" height="13" rx="2"></rect><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><line x1="12" y1="12" x2="12" y2="12.01"></line><path d="M3 13a20 20 0 0 0 18 0"></path></svg>
                <span className=" text-base capitalise ml-2">
                  Jobs
                </span>
                <span className="py-0.5 flex items-center text-xs leading-2 text-center whitespace-nowrap align-top font-normal bg-green-600 text-white rounded-full ml-2 px-2">
                  New
                </span>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-300 text-primary rounded font-normal"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user-circle"
                width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <desc>
                    Download more icon variants from
                    https://tabler-icons.io/i/user-circle
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                </svg>
                <span className="text-primary text-base capitalise ml-2">
                  Profile
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
