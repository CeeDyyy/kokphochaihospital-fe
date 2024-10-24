'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

import Layout from '@/components/layout/layout';

import Thai from './thai.json';
import English from './english.json';

export default function Announce() {
    const router = useRouter();

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

    const [announces, setAnnounces] = useState([]);
    useEffect(() => {
        fetch('/api/announce')
            .then((response) => response.json())
            .then((data) => {
                setAnnounces(data.announces);
            })
            .catch((error) => console.error('Error fetching file list:', error));
    }, []);

    const stripHtml = (html) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    };

    return (
        <Layout title={language.title}>
            <div className="mx-auto grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-8 md:gap-x-12">
                {announces.map((announce, index) =>
                    <Card className="w-full md:w-64" key={index}>
                        <div className="m-4 rounded-2xl overflow-clip">
                            <img
                                src={announce.content.image}
                                alt="card-image"
                            />
                        </div>
                        <CardBody>
                            <p className="font-semibold text-neutral-600">{announce.content.title}</p>
                            <p className="text-xs mt-1 mb-3">{announce.content.date}</p>
                            <p className="text-sm">{stripHtml(announces[0].content.html).substring(0, 128)}...</p>
                        </CardBody>
                        <CardFooter>
                            <Button className="font-prompt" onClick={() => router.push('announce/' + announce.fileName)}>{language.readmore}</Button>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </Layout>
    );
}