import React from "react";
import { Link } from "react-router-dom";

const SettingMenu = () => {
  return (
    <>
      <div className=" w-64 fixed border-r border-blue-100 h-[93vh]">
        <div className="mx-7 mt-10 ">
          <h6 className="font-bold">Your settings</h6>
          <Link to="/setting/settingprofile">
            <button className="w-full h-8 rounded hover:bg-blue-gray-100 text-start pl-3">
              Profile
            </button>{" "}
          </Link>
          <br />
          <Link to="/setting/integration">
            <button className="w-full h-8 rounded hover:bg-blue-gray-100 text-start pl-3">
              Integrations
            </button>
          </Link>
          <h6 className="font-bold mt-5">Account settings</h6>
          <button className="flex items-center justify-between w-full h-8 rounded hover:bg-blue-gray-100 text-start pl-3">
            <div> o_sb33ed6oi</div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="dropdown-icon w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Icon</title>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </button>{" "}
          <br />
          <Link to="/setting/accountdetails">
            <button className="w-full h-8 rounded hover:bg-blue-gray-100 text-start pl-3">
              Account details
            </button>
          </Link>
          <button className="w-full h-8 rounded hover:bg-blue-gray-100 text-start pl-3">
            Custom domains
          </button>{" "}
          <br />
          <Link to="/setting/groups">
            <button className="w-full h-8 rounded hover:bg-blue-gray-100 text-start pl-3">
              Groups
            </button>
          </Link>
          <button className="w-full h-8 rounded hover:bg-blue-gray-100 text-start pl-3">
            CSV bulk shortening
          </button>
          <h6 className="font-bold mt-5">Developer settings</h6>
          <Link to="/setting/api">
            <button className="w-full h-8 rounded hover:bg-blue-gray-100 text-start pl-3">
              API
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SettingMenu;
