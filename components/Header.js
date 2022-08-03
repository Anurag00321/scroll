import React from "react";

function Header() {
  return (
    <div className="w-full fixed top-0 z-10 bg-white backdrop-filter backdrop-blur-sm h-16 bg-opacity-80 border-b border-gray-300">
      <div className="xl:max-w-screen md:w-5/6 md:mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between w-full px-4 lg:px-0 relative lg:py-3 py-2">
          <button type="button" className="cursor-pointer">
            <img
              width={160}
              height={100}
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1651469799987/Wktfa92Vx.png"
            />
          </button>
          <div className="relative flex items-center">
            <div className="hidden md:block md:mr-3 mr-0">
              <div aria-hidden="true" className="relative flex rounded">
                <div
                  aria-hidden="true"
                  className="flex border  border-gray-400 items-center py-0.5 px-2 sm:w-96 rounded-md font-light text-base bg-white  focus-within:border-gray-300  focus-within:bg-white"
                >
                  <label htmlFor="search" className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg" 
                      className="text-gray-500 focus:text-primary"
                      width="16"
                      height="16"
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
                  </label>
                  <input
                    type="search"
                    inputMode="search"
                    id="search"
                    autoComplete="off"
                    placeholder="Search Peerlist..."
                    className="peers-search-bar font-semibold text-gray-500 text-sm py-px px-1 w-full bg-transparent outline-none"
                    defaultValue=""
                  ></input>
                </div>
                <div className="flex">
                <a
                className="items-center rounded-full px-2 mx-2 border border-gray-400 py-2 hover:bg-gray-300 text-primary   font-normal"
                href="/notifications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-none"
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
                    https://tabler-icons.io/i/bell
                  </desc>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                </svg>
              </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
