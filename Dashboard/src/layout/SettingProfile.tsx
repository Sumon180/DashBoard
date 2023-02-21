import { toggleState } from "@/app/toggleSlice";
import SideNav from "@/pages/SideNav";
import TopNav from "@/pages/TopNav";
import { Button } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SettingMenu from "./SettingMenu";

const SettingProfile = () => {
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
                    <div className="border-b border-blue-gray-100 mb-5">
                      <h2 className=" text-3xl font-bold mb-5">Profile</h2>
                    </div>
                    <div className="">
                      <h1 className=" text-2xl font-bold mb-4">Preferences</h1>
                      <h1 className=" text-xl mb-4">Display name</h1>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-96 outline-none p-2 pl-5 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                        placeholder="Enter your video URL..."
                        required
                      />
                      <Button
                        disabled
                        className=" cursor-not-allowed rounded mt-4"
                      >
                        Update display Name
                      </Button>
                      <h3 className="mt-10 mb-2 text-xl font-bold">
                        Email addresses
                      </h3>
                      <p>
                        Select or add a new email address to receive
                        notifications. Only verified emails can be designated as
                        the primary email address, which is used to log in.
                      </p>

                      <table className="w-full text-start mt-5">
                        <thead className="border-b border-green-200">
                          <tr>
                            <th className=" text-start">Email addresses</th>
                            <th className=" text-start">Status</th>
                            <th className=" text-start">Primary</th>
                          </tr>
                        </thead>
                        <tbody className="border-b border-green-200">
                          <tr>
                            <td className="py-2">sumonengr.96@gmail.com</td>
                            <td>Verified</td>
                            <td>+</td>
                          </tr>
                        </tbody>
                      </table>
                      <Button variant="outlined" className=" rounded mt-4">
                        Add new email
                      </Button>
                      <br />
                      <Button
                        disabled
                        className=" cursor-not-allowed rounded mt-4"
                      >
                        Update primary email
                      </Button>
                      <h3 className="mt-10 mb-2 text-2xl font-bold">
                        Security & authentication
                      </h3>
                      <h4 className="mt-10 mb-2 text-xl font-bold">
                        Change password
                      </h4>
                      <p>
                        You will be required to login after changing your
                        password
                      </p>
                      <div className="my-5">
                        <form action="">
                          <h6>Current password</h6>
                          <input
                            type="search"
                            id="default-search"
                            className="block mb-5 w-96 outline-none p-2 pl-5 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                            placeholder="Enter your video URL..."
                            required
                          />
                          <h6>New password</h6>
                          <input
                            type="search"
                            id="default-search"
                            className="block mb-5 w-96 outline-none p-2 pl-5 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                            placeholder="Enter your video URL..."
                            required
                          />
                          <h6>Confirm new password</h6>
                          <input
                            type="search"
                            id="default-search"
                            className="block mb-5 w-96 outline-none p-2 pl-5 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                            placeholder="Enter your video URL..."
                            required
                          />
                        </form>
                      </div>
                      <Button className="rounded mt-4">Change password</Button>
                      <div className="my-7">
                        <h3 className=" font-bold text-2xl">
                          2-Factor authentication
                        </h3>
                        <form action="">
                          <h6>Country Code</h6>
                          <input
                            type="search"
                            id="default-search"
                            className="block mb-5 w-96 outline-none p-2 pl-5 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                            placeholder="Enter your video URL..."
                            required
                          />
                          <h6>Mobile number</h6>
                          <input
                            type="search"
                            id="default-search"
                            className="block mb-5 w-96 outline-none p-2 pl-5 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                            placeholder="Enter your video URL..."
                            required
                          />
                        </form>
                      </div>
                      <Button className="rounded mt-4">Change password</Button>
                      <h3 className=" font-bold text-2xl mt-10">
                        Access history
                      </h3>
                      <p>
                        You're viewing recent activity on your account. Logging
                        out will apply to all devices currently connected to
                        Bitly.
                      </p>
                      <Button className="rounded mt-4">
                        Log out of all sessions
                      </Button>
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

export default SettingProfile;
