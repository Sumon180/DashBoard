import { toggleState } from "@/app/toggleSlice";
import SideNav from "@/pages/SideNav";
import TopNav from "@/pages/TopNav";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SettingMenu from "./SettingMenu";

const Api = () => {
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
                      <h2 className=" text-3xl font-bold mb-5">API</h2>
                    </div>
                    <p className="my-5">
                      For documentation on using the Bitly API visit the{" "}
                      <Link to={"#"} className="text-blue-600">
                        API Documentation
                      </Link>
                    </p>
                    <h1 className=" text-xl font-bold mb-4">Access token</h1>
                    <p className=" text-normal mb-4">
                      Some integrations from other apps will ask you for an
                      access token. You'll also need one when connecting to
                      Bitly through our API.
                    </p>
                    <p className=" text-normal mb-4 mt-10">Enter password</p>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-96 outline-none p-2 pl-5 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                      placeholder="Enter your video URL..."
                      required
                    />

                    <Button variant="outlined" className="mt-5 rounded">
                      Generate Token
                    </Button>
                    <h2 className=" text-2xl font-bold my-10">
                      Registered OAuth applications
                    </h2>
                    <p>
                      For added security, we'll send an email with a
                      registration link to your primary email address.
                    </p>
                    <table className="w-full text-start mt-5">
                      <thead className="border-b border-green-200">
                        <tr>
                          <th className=" text-start">App</th>
                          <th className=" text-start">App Link</th>
                          <th className=" text-start">Redirect URIs</th>
                          <th className=" text-start">Client ID</th>
                          <th className=" text-start">Client secret</th>
                        </tr>
                      </thead>
                      <tbody className="border-b border-green-200">
                        <tr></tr>
                      </tbody>
                    </table>
                    <Button variant="outlined" className="mt-5 rounded">
                      Register new app
                    </Button>
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

export default Api;
