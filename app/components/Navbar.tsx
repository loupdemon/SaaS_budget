"use client";

import React, { useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { checkAndAddUser } from "../actions";

const Navbar = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    useEffect(()=>{
        //manière de reccuperer l'adressre utilisateur avec clerk
        if(user?.primaryEmailAddress?.emailAddress){
            checkAndAddUser(user?.primaryEmailAddress?.emailAddress)
        }
    },[])
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
                                <Link href={"/budgets"} className="btn">
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


                        <div className="md:hidden flex mt-2 justify-center">
                            <Link href={"/budgets"} className="btn btn-sm">
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
