'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function Announce() {
    const params = useParams();
    const id = params.id;

    const [announce, setAnnounce] = useState(null);
    useEffect(() => {
        fetch(`/api/announce/${id}`)
            .then((response) => response.json())
            .then((data) => setAnnounce(data))
            .catch((error) => console.error("error : " + error))
    }, [id])

    if (announce) return (
        <>
            <div className="absolute -z-10 h-[50vh] w-full bg-[#F4F6F8]" />
            <div className="min-h-[72vh] py-32 px-8 md:px-32 2xl:px-96 grid gap-20">
                <div className="px-8 lg:px-24 2xl:px-32 grid gap-y-6">
                    <p className="text-center text-3xl md:text-5xl text-balance">{announce.title}</p>
                    <hr className="mx-auto w-16 border-y-[1.5px] border-gray-700" />
                    <p className="text-center text-sm text-gray-700">{announce.date}</p>
                </div>
                <img src={announce.image} className="mx-auto" />
                <p className="px-8 lg:px-24 2xl:px-32" dangerouslySetInnerHTML={{ __html: announce.html }}></p>
            </div>
        </>
    );
}