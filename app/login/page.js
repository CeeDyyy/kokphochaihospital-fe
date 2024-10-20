'use client'

import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { Input, Button } from "@material-tailwind/react";

import Thai from './thai.json';
import English from './english.json';

export default function Login() {
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
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (username) {
            console.log(username);
        } else {
            console.error("Please enter the username")
        }
        if (password) {
            console.log(password);
        } else{
            console.error("Please enter password")
        }
    }

    return (
        <div className="h-screen md:px-96">
            <div className="h-full flex justify-center items-center">
                <div>
                    <div className="w-72 space-y-4">
                        <p className="text-6xl mb-12">{language.login}</p>
                        <Input label={language.username} onChange={(e) => setUsername(e.target.value)} />
                        <Input label={language.password} type="password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="flex justify-end">
                            <Button color="blue" className="w-56" onClick={() => handleLogin()}>{language.signin}</Button>
                        </div>
                        <div class="flex justify-end space-x-1">
                            <p className="text-xs">{language.forget_password}</p>
                            <a href="#" className="no-underline hover:underline text-xs text-[#1E88E5]">{language.set_new_password}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
