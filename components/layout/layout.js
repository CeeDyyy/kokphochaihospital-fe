'use client'

import React from 'react';

export default function Layout({ children, title }) {

    return (
        <div className="min-h-[72vh] py-32 px-8 lg:px-96 grid gap-20">
            <p className="text-center text-3xl md:text-6xl">{title}</p>
            {children}
        </div>
    );
}
