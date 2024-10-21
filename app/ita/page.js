'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

import Thai from './thai.json';
import English from './english.json';

export default function Announce() {
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

    const year = searchParams.get('year');
    console.log(year);

    return (
        <div className="py-32 md:px-96 grid gap-20">
            <p className="text-center text-6xl">{language.ita}</p>

        </div>
    );
}