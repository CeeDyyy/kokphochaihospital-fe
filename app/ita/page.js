'use client'

import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Select, Option, Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";

import Thai from './thai.json';
import English from './english.json';
import ITA2563 from './ita2563.json';
import ITA2564 from './ita2564.json';
import ITA2565 from './ita2565.json';
import ITA2566 from './ita2566.json';
import ITA2567 from './ita2567.json';

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function Announce() {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

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

    const year = searchParams.get('year');
    const [ita, setIta] = useState(null);
    useEffect(() => {
        switch (year) {
            case "2563":
                setIta(ITA2563)
                break;
            case "2564":
                setIta(ITA2564)
                break;
            case "2565":
                setIta(ITA2565)
                break;
            case "2566":
                setIta(ITA2566)
                break;
            case "2567":
                setIta(ITA2567)
                break;
            default:
                setIta(null)
        }
    }, [year])

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)

        return params.toString()
    }, [searchParams])


    return (
        <div className="py-32 md:px-96 grid gap-20">
            <p className="text-center text-6xl">{language.ita}</p>
            <Select label="Select Year" onChange={(value) => router.push(pathname + '?' + createQueryString('year', value))}>
                <Option value='2563'>ITA-2563</Option>
                <Option value='2564'>ITA-2564</Option>
                <Option value='2565'>ITA-2565</Option>
                <Option value='2566'>ITA-2566</Option>
                <Option value='2567'>ITA-2567</Option>
            </Select>

            <div>
                {ita && ita.map((e, index) =>
                    <Accordion key={index} open={open === index} icon={<Icon id={index} open={open} />}>
                        <AccordionHeader className='font-prompt' onClick={() => handleOpen(index)}>{e.title}</AccordionHeader>
                        <AccordionBody className='grid gap-y-4 font-prompt font-normal'>
                            {
                                e.details.map((detail, dIndex) =>
                                    <div key={dIndex}>
                                        {detail.type === "link" && <a href={detail.url} target='_blank' className='hover:underline hover:text-blue-500'>{detail.title}</a>}
                                        {detail.type === "text" && <p>{detail.title}</p>}
                                        {detail.type === "heading" &&

                                            <details >
                                                <summary>{detail.title}</summary>
                                                <div className='grid gap-y-4 mt-4'>
                                                    {
                                                        detail.details.map((link, lIndex) =>
                                                            <div key={lIndex}>
                                                                {link.type === "link" && <a href={link.url} target='_blank' className='hover:underline hover:text-blue-500'>{link.title}</a>}
                                                                {link.type === "text" && <p>{link.title}</p>}
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </details>}
                                    </div>
                                )
                            }
                        </AccordionBody>
                    </Accordion>
                )}
            </div>
        </div>
    );
}