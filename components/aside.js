import React from "react";

function Aside() {
  return (
    <aside className=" lg:top-0 top-14 lg:bottom-0 border-r border-l sticky h-fit border-gray-200 lg:right-auto lg:h-screen lg:z-auto lg:border-l lg:border-t-0 border-t border-primaryBorder hidden lg:block z-20">
      <div className=" lg:w-[270px] lg:block h-full bg-white px-4 pt-4 ">
        <div className="flex items-center justify-between mb-4 border-b border-primaryBorder pb-1 pt-16">
          <h3 className="text-base font-medium ">Recommended people</h3>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
