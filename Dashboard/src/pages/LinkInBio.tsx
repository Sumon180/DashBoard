import { toggleState } from "@/app/toggleSlice";
import { Button } from "@material-tailwind/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const LinkInBio = () => {
  const toggle = useSelector(toggleState);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
            <div className="flex items-center justify-center">
              <div className="mt-20">
                <div className="">
                  <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-50 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    Open dialog
                  </button>
                </div>

                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Create a link-in-bio
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Let's get started by setting up your link-in-bio
                                URL. This is the web address you can paste into
                                social media profiles or share just like you
                                would any other link.
                              </p>
                              <h4>Link-in-bio URL</h4>
                              <div className="flex items-center justify-between mt-4 bg-blue-50 p-5">
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

                                <div className=" w-2/4">
                                  <h3>Back-half</h3>
                                  <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full outline-none p-3 pl-10 text-sm text-gray-900 border border-blue-gray-200 rounded bg-gray-50 dark:focus:border-blue-500"
                                    placeholder="Enter your video URL..."
                                    required
                                  />
                                </div>
                              </div>
                              <div className="w-full p-3 rounded bg-red-50 mt-5">
                                Brand your Link-in-bio with a custom domain!
                                You'll even get a complimentary domain when you
                                upgrade to Basic.
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Got it, thanks!
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default LinkInBio;
