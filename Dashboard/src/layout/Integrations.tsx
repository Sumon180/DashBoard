import { toggleState } from "@/app/toggleSlice";
import SideNav from "@/pages/SideNav";
import TopNav from "@/pages/TopNav";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SettingMenu from "./SettingMenu";

const Integrations = () => {
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
            <div className="flex items-center">
              <div className="mt-16 w-full">
                <div className="flex w-full">
                  <SettingMenu />
                  <div className=" ml-[19rem] mt-10 w-full mr-10">
                    <div className="border-b border-blue-gray-100">
                      <h2 className=" text-3xl font-bold mb-5">Integrations</h2>
                    </div>

                    <h1 className=" text-2xl font-bold mb-4">
                      Default app group
                    </h1>
                    <p className=" text-normal mb-4">
                      Your apps will create your links in this group.{" "}
                      <Link to={"#"} className="text-blue-600">
                        Learn more
                      </Link>
                    </p>
                    <p className=" text-normal mb-4 mt-10">
                      Default app group (required)
                    </p>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-96 outline-none p-2 pl-5 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                      placeholder="Enter your video URL..."
                      required
                    />
                    <div className="p-3 rounded bg-blue-50 mt-5">
                      Your links will use this group's default custom domain,
                      bit.ly, unless another one is selected within the app.
                    </div>
                    <Button
                      disabled
                      className=" cursor-not-allowed rounded mt-4"
                    >
                      Save Change
                    </Button>
                    <h3 className="mt-10 mb-2 text-2xl font-bold">
                      App connections
                    </h3>
                    <p>
                      Third-party integrations that you've connected to Bitly
                    </p>
                    <div className="h-72 border border-blue-100">
                      <div className=" flex items-center justify-around w-full h-8 bg-blue-50">
                        <div className=" w-32 h-3 bg-white rounded-full"></div>
                        <div className=" w-32 h-3 bg-white rounded-full"></div>
                        <div className=" w-32 h-3 bg-white rounded-full"></div>
                        <div className=" w-32 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="h-full flex items-center justify-start">
                        <div className=" ml-24">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="table-empty__icon-md-block text-2xl mb-5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 014 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0120 12c0 4.42-3.58 8-8 8z"></path>
                          </svg>

                          <h4 className="text-2xl font-semebold">
                            No apps connected
                          </h4>
                          <p>
                            If you integrate third party apps, they will appear
                            here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Integrations;
