'use client'

import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname()

  return (
    <nav className="z-50 fixed h-16 w-screen md:px-[640px] flex justify-evenly items-center bg-white">
      <button onClick={() => router.push('/')} className="pointer">
        <img src="/images/KPC_LOGO.png" width={48} height={48} />
      </button>
      <div className="flex justify-center items-center gap-x-8">
        <button onClick={() => router.push('/')} className={`py-2 px-4 ${pathname === '/' ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`}>Home</button>
        <button onClick={() => router.push('/about')} className={`py-2 px-4 ${pathname === '/about' ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`}>About</button>
        <button onClick={() => router.push('/forum')} className={`py-2 px-4 ${pathname === '/forum' ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`}>Forum</button>
        <button onClick={() => router.push('/activity')} className={`py-2 px-4 ${pathname === '/activity' ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`}>Activity</button>
        <button onClick={() => router.push('/ita')} className={`py-2 px-4 ${pathname === '/ita' ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`}>ITA</button>
        <button onClick={() => router.push('/contact')} className={`py-2 px-4 ${pathname === '/contact' ? "text-blue-500" : ""} hover:bg-gray-100 active:bg-gray-300 rounded-lg duration-150`}>Contact</button>
      </div>
      <button onClick={() => router.push('/login')} className="p-2 hover:bg-gray-100 rounded-full duration-150">
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
      </button>
    </nav>
  );
}
