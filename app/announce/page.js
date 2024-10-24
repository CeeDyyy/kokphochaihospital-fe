'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
        <Layout title={language.announce}>
            <div className="mx-auto grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-8 md:gap-x-12">
                {[...Array(8)].map((_, index) =>
                    <Card className="w-full md:w-64">
                        <div className="m-4 rounded-2xl overflow-clip">
                            <img
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                alt="card-image"
                            />
                        </div>
                        <CardBody>
                            <Typography variant="h6" color="blue-gray">
                                UI/UX Review Check {index}
                            </Typography>
                            <Typography variant="small" className="mb-2">January 10</Typography>
                            <Typography variant="small">
                                The place is close to Barceloneta Beach and bus stop just 2 min by
                                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                night life in Barcelona.
                            </Typography>
                        </CardBody>
                        <CardFooter>
                            <Button>Read More</Button>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </Layout>
    );
}