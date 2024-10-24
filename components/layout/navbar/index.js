'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

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

  return (
    <nav className="z-50 fixed h-16 w-screen md:px-32 2xl:px-96 flex justify-evenly items-center bg-white">
      <button onClick={() => router.push('/')} className="pointer">
        <img src="/images/KPC_LOGO.png" width={48} height={48} />
      </button>
      <div className="flex justify-center items-center gap-x-8">
        {language.map((page, index) =>
          <button onClick={() => router.push(page.path)} className={`py-2 px-4 ${pathname === page.path ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`} key={index}>{page.title}</button>
        )}
      </div>
      <button onClick={() => router.push('/login')} className="p-2 hover:bg-gray-100 rounded-full duration-150">
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
      </button>
      <select onChange={(e) => router.push(pathname + '?' + createQueryString('lang', e.target.value))}>
        <option value="th">TH</option>
        <option value="en">EN</option>
      </select>
    </nav>
  );
}
