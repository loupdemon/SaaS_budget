"use client";

import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    return (
        <div className="bg-base-200/30 px-5 md:px-[10%] py-4">
            {isLoaded &&
                (isSignedIn ? (
                    <>
                        <div className="flex justify-between items-center">
                            <div className="flex text-2xl items-center font-bold">
                                Ton<span className="text-accent">.Budget</span>
                            </div>
                            <div className="md:flex hidden">
                                <Link href={""} className="btn">
                                Mes Budgets 
                                </Link>
                                <Link href={""} className="btn">
                                Tableau de boar 
                                </Link>
                                <Link href={""} className="btn">
                                Mes transactions 
                                </Link>
                            </div>
                            <UserButton/>
                        </div>
                    </>
                ) : (
                    <div>je</div>
                ))}
        </div>
    );
};

export default Navbar;
