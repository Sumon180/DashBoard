import { toggleState, toggleHandle } from "@/app/toggleSlice";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const toggle = useSelector(toggleState);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen z-10 border-r-[1px] border-blue-100 ${
          toggle
            ? "w-[70px] transition-all duration-300"
            : "w-[250px] transition-all duration-300"
        }`}
      >
        <div className="relative">
          <div
            onClick={() => dispatch(toggleHandle())}
            className="absolute cursor-pointer rounded-full flex items-center justify-center w-6 h-6 top-[52px] right-[-12px] bg-white border border-blue-100"
          >
            {toggle ? (
              <ChevronRightIcon className="w-4 h-4" />
            ) : (
              <ChevronLeftIcon className="w-4 h-4" />
            )}
          </div>
        </div>
        <div className="mx-4">
          <div className="">
            <div className="my-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-deep-orange-500 text-deep-orange-500 text-3xl">
              eL
            </div>
            <div className="flex flex-col justify-start">
              <button
                className={`flex items-center justify-center rounded text-white bg-blue-600 mt-4 ${
                  toggle ? "w-10 h-10 text-3xl" : "w-full h-10"
                }`}
              >
                {toggle ? "+" : "Create new"}
              </button>
              <hr className="my-5" />
              <ul className="flex flex-col gap-5">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-black font-thin"
                  }
                >
                  <li
                    className={`cursor-pointer  rounded hover:bg-blue-gray-100 ${
                      toggle
                        ? "flex items-center justify-center w-10 h-10"
                        : "flex items-center gap-3 w-full h-10 pl-2"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg>

                    <span className={`${toggle ? "hidden" : "block"}`}>
                      Dashboard
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  to="/link"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-black font-thin"
                  }
                >
                  <li
                    className={`cursor-pointer rounded hover:bg-blue-gray-100 ${
                      toggle
                        ? "flex items-center justify-center w-10 h-10"
                        : "flex items-center gap-3 w-full h-10 pl-2"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>

                    <span className={`${toggle ? "hidden" : "block"}`}>
                      Links
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  to="/qrcode"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-black font-thin"
                  }
                >
                  <li
                    className={`cursor-pointer rounded hover:bg-blue-gray-100 ${
                      toggle
                        ? "flex items-center justify-center w-10 h-10"
                        : "flex items-center gap-3 w-full h-10 pl-2"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                      />
                    </svg>

                    <span className={`${toggle ? "hidden" : "block"}`}>
                      QR Codes
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  to="/linkinbio"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-black font-thin"
                  }
                >
                  <li
                    className={`cursor-pointer rounded hover:bg-blue-gray-100 ${
                      toggle
                        ? "flex items-center justify-center w-10 h-10"
                        : "flex items-center gap-3 w-full h-10 pl-2"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      />
                    </svg>

                    <span className={`${toggle ? "hidden" : "block"}`}>
                      Link-in-bio
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  to="/campaigns"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-black font-thin"
                  }
                >
                  <li
                    className={`cursor-pointer rounded hover:bg-blue-gray-100 ${
                      toggle
                        ? "flex items-center justify-center w-10 h-10"
                        : "flex items-center gap-3 w-full h-10 pl-2"
                    } `}
                  >
                    <svg fill="none" viewBox="0 0 20 20" className="w-6 h-6">
                      <path
                        fill="#273144"
                        d="M10.333 5h6.334c.916 0 1.666.75 1.666 1.667v4.166c0 .5-.333.834-.833.834-.5 0-.833-.334-.833-.834V6.667H10a.757.757 0 01-.583-.25L8 5H3.333v10h5.834c.5 0 .833.333.833.833 0 .5-.333.834-.833.834H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667H8c.417 0 .833.167 1.167.5L10.333 5z"
                      ></path>
                      <path
                        fill="#273144"
                        d="M17.083 13.25c.084 0 .167 0 .25.083.084.084.084.167 0 .167v.25s0 .083-.083.167l-1.417 1.25L16.25 17v.25a.465.465 0 00-.068.09c-.027.045-.047.077-.099.077 0 .083-.083.083-.166.083-.042 0-.084-.02-.125-.042-.042-.02-.084-.041-.125-.041l-1.584-1-1.583 1c-.083.083-.167.083-.25.083 0 0-.083 0-.167-.083a.468.468 0 00-.09-.069c-.045-.027-.076-.046-.076-.098V17l.416-1.833-1.416-1.25a.18.18 0 01-.167-.167v-.25c0-.083 0-.083.083-.167.042 0 .084-.02.125-.041a.296.296 0 01.125-.042L13 13.083l.75-1.75c.032-.031.052-.063.068-.09.027-.045.047-.076.099-.076 0-.084.083-.084.166-.084 0 0 .084.084.167.084a.18.18 0 01.167.166l.75 1.75 1.916.167z"
                      ></path>
                    </svg>

                    <span className={`${toggle ? "hidden" : "block"}`}>
                      Campaigns
                    </span>
                  </li>
                </NavLink>
                <NavLink
                  to="/customlinks"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-black font-thin"
                  }
                >
                  <li
                    className={`cursor-pointer rounded hover:bg-blue-gray-100 ${
                      toggle
                        ? "flex items-center justify-center w-10 h-10"
                        : "flex items-center gap-3 w-full h-10 pl-2"
                    }`}
                  >
                    <svg fill="#273144" viewBox="0 0 20 20" className="w-6 h-6">
                      <path
                        fill="#273144"
                        d="M18.083 3.75a.18.18 0 01.167.167c.083.083.083.166.083.25 0 .083 0 .166-.083.25a.18.18 0 01-.167.166l-1.25.584-.583 1.25a.18.18 0 01-.167.166c-.083.084-.166.084-.25.084-.083 0-.166 0-.25-.084a.18.18 0 01-.166-.166l-.584-1.25-1.25-.584a.18.18 0 01-.166-.166c-.084-.084-.084-.167-.084-.25 0-.084 0-.167.084-.25a.18.18 0 01.166-.167l1.25-.583.584-1.25a.18.18 0 01.166-.167c.084-.083.167-.083.25-.083.084 0 .167 0 .25.083a.18.18 0 01.167.167l.583 1.25 1.25.583zM4.167 6.917c0 .666.25 1.333.75 1.916l1.833 1.834a.805.805 0 010 1.166.9.9 0 01-.583.25.9.9 0 01-.584-.25L3.75 10C2.917 9.167 2.5 8.083 2.5 6.917c0-1.167.417-2.334 1.25-3.167C4.583 3 5.667 2.5 6.833 2.5 8 2.5 9.167 3 10 3.75l1.833 1.917a.805.805 0 010 1.166.805.805 0 01-1.166 0L8.833 5C7.833 4 6 4 5 5c-.583.5-.833 1.167-.833 1.917zM13.167 8.167a.805.805 0 011.166 0l1.834 1.916c.833.834 1.25 1.917 1.25 3.084 0 1.166-.417 2.25-1.25 3.083-.834.833-2 1.25-3.084 1.25-1.083 0-2.25-.417-3.083-1.25l-1.833-1.833a.806.806 0 010-1.167.806.806 0 011.166 0l1.834 1.833c1.083 1.084 2.75 1.084 3.833 0 .583-.5.833-1.166.833-1.916S15.5 11.75 15 11.25l-1.833-1.917a.805.805 0 010-1.166z"
                      ></path>
                      <path
                        fill="#273144"
                        d="M11.667 12.5c.25 0 .416-.083.583-.25a.806.806 0 000-1.167L8.917 7.75a.806.806 0 00-1.167 0 .806.806 0 000 1.167l3.333 3.333c.167.167.334.25.584.25z"
                      ></path>
                    </svg>

                    <span className={`${toggle ? "hidden" : "block"}`}>
                      Custom links
                    </span>
                  </li>
                </NavLink>
                <hr />
                <NavLink
                  to="/setting"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-black font-thin"
                  }
                >
                  <li
                    className={`cursor-pointer rounded hover:bg-blue-gray-100 ${
                      toggle
                        ? "flex items-center justify-center w-10 h-10"
                        : "flex items-center gap-3 w-full h-10 pl-2"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className={`${toggle ? "hidden" : "block"}`}>
                      Setting
                    </span>
                  </li>
                </NavLink>
                <li
                  className={` bg-light-blue-50 p-3 flex flex-col mt-10 rounded ${
                    toggle ? "hidden" : "block"
                  }`}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Icon</title>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path>
                  </svg>

                  <span className={`${toggle ? "hidden" : "block"}`}>
                    Get custom links and a complimentary domain. Upgrade now
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
