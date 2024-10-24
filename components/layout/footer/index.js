'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import Thai from './thai.json';
import English from './english.json';

export default function Footer() {
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

  return (
    <footer className="pt-32 px-8 md:px-32 2xl:px-96 bg-white">
      <div className="grid 2xl:grid-cols-5 gap-8">
        <div className="2xl:col-span-2 2xl:justify-self-start grid justify-items-center">
          <img src="/images/KPC_LOGO.png" width={96} height={96} />
          <p>{language.hospital}</p>
        </div>
        <div className="2xl:col-span-3 grid 2xl:flex gap-8">
          <pre className="font-prompt leading-relaxed">
            {language.working_hours}
          </pre>
          <div className="grid gap-y-2">
            <div className="flex items-center gap-x-4">
              <div className="h-10 w-10 p-2 flex justify-center items-center bg-blue-200 rounded-full">
                <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="black" /> </g></svg>
              </div>
              <div className="grid">
                <a href="tel:(043) 216-100" target="_blank">(043) 216-100</a>
                <a href="tel:095-651-5681" target="_blank">095-651-5681</a>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="h-10 w-10 p-2 flex justify-center items-center bg-blue-200 rounded-full">
                <svg fill="black" width="32px" height="32px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>email-solid</title> <path className="clr-i-solid clr-i-solid-path-1" d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z" /><path className="clr-i-solid clr-i-solid-path-2" d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z" /> <rect x={0} y={0} width={36} height={36} fillOpacity={0} /> </g></svg>
              </div>
              <div className="grid">
                <a href="mailto:kokphochaihospital@gmail.com" target="_blank">kokphochaihospital@gmail.com</a>
                <a href="mailto:KPChospKK@gmail.com" target="_blank">KPChospKK@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="h-10 w-10 p-2 flex justify-center items-center bg-blue-200 rounded-full">
                <svg fill="black" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title /> <g id="location"> <path d="M16,1A11,11,0,0,0,5,12C5,23.24,15,30.51,15.42,30.81a1,1,0,0,0,1.16,0C17,30.51,27,23.24,27,12A11,11,0,0,0,16,1Zm0,16a5,5,0,1,1,5-5A5,5,0,0,1,16,17Z" /> </g> </g></svg>
              </div>
              <a href="https://maps.app.goo.gl/tUK6QrWyjYWVSvoQ6" target="_blank">
                <p className="leading-relaxed text-wrap">
                  {language.address}
                </p>
              </a>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="h-10 w-10 p-2 flex justify-center items-center bg-blue-200 rounded-full">
                <svg width="32px" height="32px" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"> </path> </g> </g> </g> </g></svg>
              </div>
              <a href="https://www.facebook.com/Kokphochaihospital" target="_blank">โรงพยาบาลโคกโพธิ์ไชย</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-8" />
    </footer>
  );
}
