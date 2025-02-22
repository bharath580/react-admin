import React from "react";
import { Link, Outlet, Route, Router, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Purchase from "../purchase/Purchase";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="relative  h-screen flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 w-80  p-4 shadow-xl shadow-blue-gray-900/5">
        
        
        <div className="mb-2 p-4">
          <h5 className="block antialiased tracking-normal font-sans text-xl font-bold leading-snug text-gray-900">
            Kabadiwalla <span className="text-green-500">Connect</span> 
          </h5>
        </div>
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <Link to="/layout"
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-green-50 hover:bg-opacity-80 focus:bg-green-50 focus:bg-opacity-80 active:bg-green-50 active:bg-opacity-80 hover:text-green-900 focus:text-green-500 active:text-green-500 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5 w-5"
>
  <path
    fillRule="evenodd"
    d="M3 3.75A.75.75 0 013.75 3h4.5a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-6.5zM3 13a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v7.25a.75.75 0 01-.75.75h-4.5A.75.75 0 013 20.25V13zm9.75-9.25a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V4.5a.75.75 0 00-.75-.75h-7.5zM12 13a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.25a.75.75 0 01-.75.75h-7.5A.75.75 0 0112 20.25V13z"
    clipRule="evenodd"
  />
</svg>

            </div>
           Dashboard
          </Link>
          <Link
          to="/layout/purchase"
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-green-50 hover:bg-opacity-80 focus:bg-green-50 focus:bg-opacity-80 active:bg-green-50 active:bg-opacity-80 hover:text-green-900 focus:text-green-500 active:text-green-500 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5 w-5"
>
  <path
    fillRule="evenodd"
    d="M6 2.25A2.25 2.25 0 003.75 4.5v15A2.25 2.25 0 006 21.75h12a2.25 2.25 0 002.25-2.25v-10.5a.75.75 0 00-.22-.53l-4.5-4.5a.75.75 0 00-.53-.22H6zm7.5 1.81V8.25h4.19L13.5 4.06zM7.5 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 110 1.5h-7.5a.75.75 0 01-.75-.75zM8.25 13.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zM7.5 17.25a.75.75 0 01.75-.75h3.75a.75.75 0 110 1.5H8.25a.75.75 0 01-.75-.75z"
    clipRule="evenodd"
  />
</svg>

            </div>
            Purchase Orders
          </Link>
          
          <Link
          to="/layout/supplier"
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-green-50 hover:bg-opacity-80 focus:bg-green-50 focus:bg-opacity-80 active:bg-green-50 active:bg-opacity-80 hover:text-green-900 focus:text-green-500 active:text-green-500 outline-none"
          >
            <div className="grid place-items-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            Supplier
          </Link>
          <Link
          to="/layout/batch"
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-green-50 hover:bg-opacity-80 focus:bg-green-50 focus:bg-opacity-80 active:bg-green-50 active:bg-opacity-80 hover:text-green-900 focus:text-green-500 active:text-green-500 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5 w-5"
>
  <path
    fillRule="evenodd"
    d="M4.5 3.75A.75.75 0 015.25 3h13.5a.75.75 0 01.75.75v16.5a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V3.75zm1.5.75v15h12v-15h-12zm2.25 3a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zM7.5 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H8.25A.75.75 0 017.5 12zm.75 2.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z"
    clipRule="evenodd"
  />
</svg>

            </div>
            Batch
          </Link>
          <Link
          to="/layout/baling"
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-green-50 hover:bg-opacity-80 focus:bg-green-50 focus:bg-opacity-80 active:bg-green-50 active:bg-opacity-80 hover:text-green-900 focus:text-green-500 active:text-green-500 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5 w-5"
>
  <path 
    d="M4 8c0-2.21 2.24-4 5-4h6c2.76 0 5 1.79 5 4v8c0 2.21-2.24 4-5 4H9c-2.76 0-5-1.79-5-4V8z"
  />
  <path 
    d="M7 12h10M7 16h10M7 8h10" 
    stroke="white" 
    strokeWidth="1.5" 
    strokeLinecap="round"
  />
</svg>



            </div>
           Bale
          
          </Link>
          <Link
          to="/layout/sale"
            role="button"
            tabIndex="0"
            className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-green-50 hover:bg-opacity-80 focus:bg-green-50 focus:bg-opacity-80 active:bg-green-50 active:bg-opacity-80 hover:text-green-900 focus:text-green-500 active:text-green-500 outline-none"
          >
            <div className="grid place-items-center mr-4">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5 w-5"
>
  <path
    fillRule="evenodd"
    d="M12 2.25a.75.75 0 01.53.22l2.47 2.47 3.03-.41a.75.75 0 01.83.83l-.41 3.03 2.47 2.47a.75.75 0 010 1.06l-2.47 2.47.41 3.03a.75.75 0 01-.83.83l-3.03-.41-2.47 2.47a.75.75 0 01-1.06 0l-2.47-2.47-3.03.41a.75.75 0 01-.83-.83l.41-3.03-2.47-2.47a.75.75 0 010-1.06l2.47-2.47-.41-3.03a.75.75 0 01.83-.83l3.03.41 2.47-2.47a.75.75 0 01.53-.22zM9.75 9a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM9 13.5a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
    clipRule="evenodd"
  />
</svg>

            </div>
          Sale
          </Link>
        </nav>
      </div>
     
        
     
      {/* <Outlet/> */}
    </div>
  );
}
