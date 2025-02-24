"use server"

import prisma from "@/lib/prisma";
//fonction qui vérifie si un user existe dan sBDD sinon l'ajoute
export async function checkAndAddUser (email : string | undefined){
    if(!email) return

    try{

        const existingUser = await prisma.user.findUnique({
            where : {
                email
            }
        })
        if(!existingUser){
            await prisma.user.create({
                data: {email}
            })
            console.log("Nouvel utilisateur ajouté dans la BDD")

        }
        else{
                console.log("Utilisateur déja présent dans la BDD")
            }
        }
        
        catch (error){
        console.log("Erreur lors de la vérification de l'utilisateur", error);
    }
}