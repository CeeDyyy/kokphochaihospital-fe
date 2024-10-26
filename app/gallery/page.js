'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
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

    const [galleries, setGalleries] = useState([]);
    useEffect(() => {
        fetch('/api/gallery')
            .then((response) => response.json())
            .then((data) => {
                setGalleries(data.galleries);
            })
            .catch((error) => console.error('Error fetching file list:', error));
    }, []);

    return (
        <Layout title={language.title}>
            <div className="mx-auto flex flex-wrap justify-center gap-8">
                {galleries.map((gallery, index) =>
                    <Card
                        shadow={false}
                        className="grow basis-1/4 relative grid h-[40rem] items-end justify-center overflow-hidden text-center hover:scale-105 duration-150"
                        key={index}
                    >
                        <a href={gallery.url} target="_blank">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                                style={{ backgroundImage: `url(${gallery.image})` }}
                            >
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                            </CardHeader>
                            <CardBody className="relative py-14 px-6 md:px-12">
                                <Typography
                                    variant="h2"
                                    color="white"
                                    className="mb-6 font-medium leading-[1.5]"
                                >
                                    {gallery.title}
                                </Typography>
                            </CardBody>
                        </a>
                    </Card>
                )}
            </div>
        </Layout>
    );
}