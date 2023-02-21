import { toggleState } from "@/app/toggleSlice";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import Navbar from "./SideNav";
import * as React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Links = () => {
  const toggle = useSelector(toggleState);
  const [open, setOpen] = React.useState(false);

  const chart = () => {
    return setOpen(!open);
  };

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
              <div className="mt-24 w-full">
                <div className={`relative border-b border-gray-500`}>
                  <button
                    onClick={chart}
                    className="absolute -bottom-8 bg-white right-1/2 px-2 py-1 rounded border-b border-r border-l border-gray-500"
                  >
                    {open ? "Hide chart" : "Show chart"}
                  </button>
                  <div className="mx-10">
                    <div className="flex justify-between">
                      <h2 className=" text-4xl font-bold">Links</h2>
                      <div className="flex gap-2">
                        <Button className="rounded">
                          Upgrade for custom links
                        </Button>
                        <Button className="rounded" variant="outlined">
                          Select date
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-5 my-5">
                      <span>
                        <input type="radio" className="mr-2 cursor-pointer" />
                        <label>Date created</label>
                      </span>
                      <span>
                        <input type="radio" className="mr-2 cursor-pointer" />
                        <label>Top performing</label>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-5">
                      <Button className="rounded">Filter</Button>

                      <select
                        name="cars"
                        id="cars"
                        className="h-10 w-48 rounded outline-1 outline-blue-800 border-[1px] border-gray-500"
                      >
                        <optgroup label="Swedish Cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                        </optgroup>
                        <optgroup label="German Cars">
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </optgroup>
                      </select>
                      <span>
                        <input
                          type="checkbox"
                          className="mr-2 cursor-pointer"
                        />
                        <label>Hidden links only</label>
                      </span>
                    </div>
                    {open ? (
                      <div className="flex items-center my-7">
                        <div className="flex flex-col gap-4 w-1/4">
                          <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
                              A
                            </span>
                            <div>
                              <h6 className="text-3xl">0</h6>
                              <h5 className=" text-xs">TOTAL ENGAGEMENTS</h5>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
                              B
                            </span>
                            <div>
                              <h6 className="text-xl">0</h6>
                              <h5 className=" text-xs">TOTAL ENGAGEMENTS</h5>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
                              C
                            </span>
                            <div>
                              <h6 className="text-xl">0</h6>
                              <h5 className=" text-xs">TOTAL ENGAGEMENTS</h5>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center border-b border-gray-500 w-3/4">
                          <p className=" text-center">
                            <span>No links yet.</span>
                            <br /> Create links, share them, and see how they
                            perform.
                          </p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="mt-10 ml-5">
                  <div className="flex">
                    <div className=" w-2/5 border border-r-gray-500 pr-5">
                      <Link to="/link/createlink">
                        <Button className="rounded w-full bg-deep-orange-500">
                          Create first link
                        </Button>
                      </Link>
                    </div>
                    <div className=" w-3/5 text-center">
                      <p>
                        After your links get clicks, we'll display your link
                        information, options, and performance data.
                      </p>
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

export default Links;
