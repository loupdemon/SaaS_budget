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
                                D<span className="text-accent">.pense</span>
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


                        <div className="md:flex flex mt-2 justify-center">
                            <Link href={""} className="btn btn-sm">
                            Mes Budgets 
                            </Link>
                            <Link href={""} className="btn mx-4 btn-sm">
                            Tableau de boar 
                            </Link>
                            <Link href={""} className="btn btn-sm">
                            Mes transactions 
                            </Link>
                        </div>

                    </>
                ) : (
                    <div className="flex items-center justify-between">
                         <div className="flex text-2xl items-center font-bold">
                                D<span className="text-accent">.pense</span>
                        </div>
                            <div className="flex mt-2 justify-center">
                            <Link href={"/sign-in"} className="btn btn-sm">
                            Se connecter
                            </Link>
                            <Link href={"/sign-up"} className="btn mx-4 btn-sm btn-accent">
                            S'inscrire 
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Navbar;
