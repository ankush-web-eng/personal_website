"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";

export const Navbar = () => {
  return (
    <ul className="flex justify-evenly md:justify-center items-end fixed md:sticky md:top-0 bottom-0 md:flex-col py-3 md:space-y-10 md:h-screen md:w-1/5 max-sm:space-x-7 w-full border-r dark:border-slate-800 z-50 backdrop-filter backdrop-blur-lg">


      <li className="italic font-semibold md:mr-8">
        <Link href="/">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill={window.location.pathname === "/" ? "blue" : "gray"}
            fillOpacity={0.32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"></path>
            <path fill-opacity=".16" d="M4 7v11h13V7l-6.5-5z"></path>
          </svg>
        </Link>
      </li>

      <li className="italic font-semibold md:mr-8">
        <Link href="/about">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill={window.location.pathname === "/about" ? "blue" : "gray"}
            fillOpacity={0.32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
            <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"></path>
          </svg>
        </Link>
      </li>

      <li className="italic font-semibold md:mr-8">
        <Link href="/kaizen">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill={window.location.pathname === "/kaizen" ? "blue" : "gray"}
            fillOpacity={0.32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-opacity=".16"
              fill-rule="nonzero"
              d="M1 5h16v14H1z"
            ></path>
            <path
              fill-rule="nonzero"
              d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"
            ></path>
          </svg>
        </Link>
      </li>

      <li className="italic font-semibold md:mr-8">
        <Link href="/freelance">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill={
              window.location.pathname === "/freelance" ? "blue" : "gray"
            }
            fillOpacity={0.32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 4h18v10H1z"></path>
            <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z"></path>
          </svg>
        </Link>
      </li>

      <li className="italic font-semibold md:mr-8">
        <Link href="/messages">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill={window.location.pathname === "/messages" ? "blue" : "gray"}
            fillOpacity={0.32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13.4 18-3-7.4-7.4-3L19 2z"></path>
            <path d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z"></path>
          </svg>
        </Link>
      </li>

      {/* <li className="md:mr-8"><ModeToggle /></li> */}
    </ul>
  );
};

//
