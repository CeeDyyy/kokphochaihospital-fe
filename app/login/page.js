'use client'

import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

export default function Login() {
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
                        <p className="text-6xl mb-12">Login</p>
                        <Input label="Username" onChange={(e) => setUsername(e.target.value)} />
                        <Input label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="flex justify-end">
                            <Button color="blue" className="w-56" onClick={() => handleLogin()}>Sign-in</Button>
                        </div>
                        <div class="flex justify-end space-x-1">
                            <p className="text-xs">Forget Password?</p>
                            <a href="#" className="no-underline hover:underline text-xs text-[#1E88E5]">set new password</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
