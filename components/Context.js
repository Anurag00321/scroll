import React from "react";

function Context() {
  const context = [
    {
      name: "none",
    },
  ];

  return (context.name = "Add context" ? (
    <div className="lg:mt-16 mt-14 rounded">
      <div className="bg-gray-100 p-4 md:p-6 border-b border-gray-200">
        <div className="border rounded-lg border-gray-200">
          <div>
            <div className=" rounded-lg border border-gray-100 focus-within:border-gray-100 relative rounded-t-lg lg:max-w-[640px] h-full">
              <div className="flex flex-1 flex-col"></div>
              <div>
                <div className="h-24 rounded-lg bg-white min-h-[56px] max-h-[620px]">
                  <form>
                    <textarea
                      type="text"
                      //onFocus={() => setShow1(true)}
                      maxLength={20}
                      rows="4"
                      placeholder="Write a post"
                      className="text-xs p-2 font-mono h-24 w-[630px] resize-none placeholder:text-xs outline-none"
                    ></textarea>
                  </form>
                </div>
                <p className="font-mono absolute  right-2 top-2 text-xs px-2 justify-self-end text-right ml-auto block">
                  0/280
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null);
}

export default Context;
