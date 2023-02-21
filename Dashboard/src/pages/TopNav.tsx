import { toggleState } from "@/app/toggleSlice";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import {
  ArchiveBoxIcon,
  DocumentDuplicateIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const TopNav = () => {
  const toggle = useSelector(toggleState);
  let [isOpen, setIsOpen] = useState(false);
  let [modalOn, setModalOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function modalOpen() {
    setModalOpen(true);
  }
  function modalClose() {
    setModalOpen(false);
  }

  return (
    <>
      <div className="">
        <Transition appear show={modalOn} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <div className="fixed top-10 right-40 overflow-y-auto">
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptates deleniti ut nisi nam amet facere quae
                        molestiae modi? Quo voluptatibus deserunt sed et sequi
                        quaerat eligendi reiciendis? Fugit quisquam quis dolorem
                        assumenda cum. Laudantium mollitia consequuntur,
                        voluptatibus neque tenetur et, provident voluptatem
                        perspiciatis blanditiis maxime quibusdam? Veritatis
                        recusandae facere, sit maiores in culpa. Sit quaerat
                        accusantium, aspernatur eum doloribus consequuntur.
                        Minima fuga perspiciatis sapiente consequuntur, dicta
                        magni distinctio illo commodi natus expedita voluptas
                        nihil aliquid vitae facilis cum debitis quas id
                        necessitatibus sunt deserunt facere deleniti. Porro,
                        necessitatibus praesentium perferendis delectus, soluta
                        aperiam sequi, similique provident harum repellendus
                        maxime placeat.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={modalClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div
          className={`fixed flex items-center justify-end bg-white border-b-[1px] border-b-blue-100 ${
            toggle
              ? "right-0 left-[70px] transition-all duration-300"
              : "right-0 left-[250px] transition-all duration-300"
          }`}
        >
          <nav className="flex items-center justify-end px-5 py-3">
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
                className="block outline-none w-96 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 hover:border-blue-500 focus:border-2 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-500"
                placeholder="Enter your video URL..."
                required
              />
            </div>
            <div className="relative">
              <Button className="rounded ml-3">Upgrade</Button>
              <div className=" hover:scale-105 absolute -top-2 -right-2 flex items-center justify-center text-white w-6 h-6 bg-red-700 rounded-full text-sm">
                2
              </div>
            </div>
            <button onClick={modalOpen} className="ml-4">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="pendo-help-icon"
                  height="38"
                  width="38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Icon</title>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
                </svg>
              </span>
            </button>

            <div>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button
                  onClick={openModal}
                  className="ml-2 rounded focus:border focus:border-blue-900 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className=" flex items-center  px-2 py-1">
                    <div className="flex items-center justify-center text-white w-8 h-8 bg-black rounded-full">
                      S
                    </div>
                    <div className="ml-3">Sumon Hossain</div>
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
                  </div>
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <PencilIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PencilIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Edit
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <DocumentDuplicateIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <DocumentDuplicateIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Duplicate
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <ArchiveBoxIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <ArchiveBoxIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Archive
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <ArchiveBoxIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <ArchiveBoxIcon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Move
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <TrashIcon
                                className="mr-2 h-5 w-5 text-violet-400"
                                aria-hidden="true"
                              />
                            ) : (
                              <TrashIcon
                                className="mr-2 h-5 w-5 text-violet-400"
                                aria-hidden="true"
                              />
                            )}
                            Delete
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNav;
