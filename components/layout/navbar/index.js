'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Drawer } from "@material-tailwind/react";

import Thai from './thai.json';
import English from './english.json';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const lang = searchParams.get('lang');
  const [language, setLanguage] = useState(Thai);
  useEffect(() => {
    switch (lang) {
      case "en":
        setLanguage(English)
        break;
      case "th":
        setLanguage(Thai)
        break;
      default:
        setLanguage(Thai)
    }
  }, [lang])

  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  }, [searchParams])

  const [openRight, setOpenRight] = useState(false);

  return (
    <>
      <nav className="z-50 fixed h-16 w-screen px-8 lg:px-32 2xl:px-96 grid grid-cols-3 justify-items-center content-center lg:flex justify-evenly items-center bg-white">
        <button onClick={() => router.push('/')} className="col-start-2 lg:col-start-1 pointer">
          <img src="/images/KPC_LOGO.png" width={48} height={48} />
        </button>
        <div className="hidden lg:flex justify-center items-center gap-x-8">
          {language.menu.map((page, index) =>
            <button onClick={() => router.push(page.path)} className={`py-2 px-4 ${pathname === page.path ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`} key={index}>{page.title}</button>
          )}
        </div>
        <div className="hidden lg:flex">
          <button onClick={() => router.push('/login')} className="p-2 hover:bg-gray-100 rounded-full duration-150">
            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
          </button>
          <select onChange={(e) => router.push(pathname + '?' + createQueryString('lang', e.target.value))}>
            <option value="th">TH</option>
            <option value="en">EN</option>
          </select>
        </div>
        <button onClick={() => setOpenRight(true)} className="lg:hidden justify-self-end h-fit p-2 hover:bg-gray-100 rounded-lg duration-150">
          <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" /> <path d="M20 12L4 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" /> <path d="M20 17L4 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" /> </g></svg>
        </button>
      </nav>
      <Drawer
        placement="right"
        open={openRight}
        onClose={() => setOpenRight(false)}
        className="p-4"
      >
        <div className="grid gap-y-8">
          <div className="flex justify-between">
            <button onClick={() => router.push('/')} className="flex pointer">
              <img src="/images/KPC_LOGO.png" width={48} height={48} />
            </button>
            <button onClick={() => setOpenRight(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {language.menu.map((page, index) =>
            <button onClick={() => { router.push(page.path); setOpenRight(false); }} className={`py-2 px-4 ${pathname === page.path ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`} key={index}>{page.title}</button>
          )}
        </div>
      </Drawer>
    </>
  );
}
