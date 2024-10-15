'use client'
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export default function Login() {
    return (
        <div className="h-screen md:px-96">
            <div className="h-full flex justify-center items-center">
                <div>
                    <div className="w-72 space-y-4">
                        <Input label="Username" />
                        <Input label="Password" />
                        <div class="flex flex-row-reverse space-x-4 space-x-reverse">
                            <Button color="blue">Sign-in</Button>
                        </div>
                        <div class="flex flex-row-reverse space-x-1 space-x-reverse">
                            <a href="#" class="no-underline hover:underline text-xs">set new password</a>
                            <p class="text-xs">Forget Password?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
