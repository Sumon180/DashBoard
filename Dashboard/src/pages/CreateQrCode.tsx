import { toggleState } from "@/app/toggleSlice";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";

import { useSelector } from "react-redux";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const CreateQrCode = () => {
  const toggle = useSelector(toggleState);

  return (
    <>
      <div>
        <SideNav />
        <TopNav />
        <div className="">
          <main
            className={`${
              toggle
                ? " ml-[70px] transition-all duration-300"
                : " ml-[250px] transition-all duration-300"
            }`}
          >
            <div className="border-b border-blue-gray-200">
              <div className="mx-5 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex gap-5">
                    <ArrowSmallLeftIcon className="w-6 h-6" />
                    <h2 className=" font-bold">Create a QR Code</h2>
                  </div>
                  <div className="flex items-center w-72 h-10 rounded-full bg-blue-50">
                    <button className=" bg-blue-100 w-1/2 h-full rounded-full">
                      Content
                    </button>
                    <button className="w-1/2 h-full rounded-full">
                      Customize
                    </button>
                  </div>
                  <div>
                    <Button className="rounded">Create QR Code</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-4/6">
                <div className="mx-24 mt-10">
                  <h1 className="text-3xl font-bold">Enter your destination</h1>
                  <h5 className="mt-10 mb-3 font-bold text-red-800">
                    Destination URL
                  </h5>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block outline-none w-full p-3 pl-10 text-sm text-gray-900 border border-red-800 rounded bg-gray-50 dark:focus:border-blue-500"
                      placeholder="Enter your video URL..."
                      required
                    />
                  </div>
                  <p className="text-red-800 mt-1">
                    We'll need a valid URL, like "yourbrnd.co/niceurl"
                  </p>
                  <p className="my-3">
                    You can create 50 more QR Codes or links this month.
                  </p>

                  <h5 className="mb-1">Title (optional)</h5>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block outline-none w-full p-3 pl-10 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                      placeholder="Enter your video URL..."
                      required
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-10 mb-2">Short link</h3>
                  <p>
                    The short link directs users to the website or content
                    linked to your QR Code. If you update the short link after
                    creating the QR Code it will change the code.
                  </p>
                  <div className="flex items-center justify-between mt-5">
                    <div className=" w-1/4">
                      <h3>Domain</h3>
                      <input
                        type="search"
                        id="default-search"
                        className="block outline-none p-3 pl-10 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                        placeholder="Enter your video URL..."
                        required
                      />
                    </div>
                    <span>/</span>
                    <div className=" w-2/4">
                      <h3>Custom back-half (optional)</h3>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full outline-none p-3 pl-10 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                        placeholder="Enter your video URL..."
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/6">QR Code</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CreateQrCode;
