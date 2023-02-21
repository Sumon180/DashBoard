import { toggleState } from "@/app/toggleSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const CreateLink = () => {
  const [enabled, setEnabled] = useState(false);
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
            <div className="flex items-center justify-center w-3/5 m-auto -z-10">
              <div className="mt-24 w-full">
                <h1 className="text-3xl font-bold">Create new</h1>
                <h5 className="mt-10 mb-3 font-bold text-gray-700">
                  Destination
                </h5>
                <input
                  type="search"
                  id="default-search"
                  className="block outline-none w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 focus:border-blue-700 rounded bg-gray-50 dark:focus:border-blue-500"
                  placeholder="Enter your video URL..."
                  required
                />
                <div className="w-full p-3 rounded bg-blue-50 mt-5">
                  You can create 50 more links this month.
                </div>
                <h5 className="mt-10 mb-3 font-bold text-gray-700">
                  Title (optional)
                </h5>
                <input
                  type="search"
                  id="default-search"
                  className="block outline-none w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 focus:border-blue-700 rounded bg-gray-50 dark:focus:border-blue-500"
                  placeholder="Enter your video URL..."
                  required
                />
                <h2 className="text-2xl font-bold mt-10 mb-1">Ways to share</h2>
                <h3 className="text-xl font-bold mb-2">Short link</h3>

                <div className="flex items-center justify-between mt-4">
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
                <div className="w-full p-3 rounded bg-blue-50 mt-5">
                  You can create 50 more custom back-halves this month.
                </div>
                <h2 className="text-xl font-bold mt-10 mb-1">
                  QR Code (optional)
                </h2>
                <div className="flex items-center gap-2 mb-4 mt-1">
                  <div className="">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[25px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          enabled ? "translate-x-5" : "translate-x-0"
                        }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </div>
                  <p>Generate a QR Code to share anywhere people can scan it</p>
                </div>
                <h2 className="text-xl font-bold mt-10 mb-1">
                  Link-in-bio (optional)
                </h2>
                <div className="flex items-center gap-2 mb-4 mt-1">
                  <div className="">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-[25px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          enabled ? "translate-x-5" : "translate-x-0"
                        }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </div>
                  <p>
                    Add this link to your Link-in-bio page for people to easily
                    find
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CreateLink;
