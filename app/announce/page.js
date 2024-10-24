'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    Card,
    CardHeader,
    CardBody,
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
            <div className="mx-auto grid lg:grid-cols-2 justify-items-center gap-8 md:gap-x-12">
                {announces.map((announce, index) =>
                    <Card className="w-full max-w-[48rem] flex-row" key={index}>
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                        >
                            <img
                                src={announce.content.image}
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h6" color="gray" className="mb-4 uppercase font-prompt">
                                {announce.content.date}
                            </Typography>
                            <Typography variant="h5" color="blue-gray" className="mb-2 font-prompt">
                                {announce.content.title}
                            </Typography>
                            <Typography color="gray" className="mb-8 font-normal font-prompt">
                                {stripHtml(announces[0].content.html).substring(0, 128)}...
                            </Typography>
                            <Button variant="text" className="flex items-center gap-2 font-prompt" onClick={() => router.push('announce/' + announce.fileName)}>
                                {language.readmore}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4" ><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                            </Button>
                        </CardBody>
                    </Card>
                )}
            </div>
        </Layout>
    );
}