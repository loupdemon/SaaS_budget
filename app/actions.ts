"use server"

import prisma from "@/lib/prisma";
//fonction qui vérifie si un user existe dans BDD sinon l'ajoute
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

//function ajout de budget
export async function addBudget(email : string , name : string, amount : number, selectedEmoji : string){

    try{
        const user = await prisma.user.findUnique({
            where : {email}
        })
        if(!user) {
            throw new Error('Utilisateur non trouvé')
        }
        await prisma.budget.create({
            data : {
                name , 
                amount,
                emoji : selectedEmoji,
                userId : user.id 
            }
        })
    }
    catch(error) {
        console.log('Erreur lors de l\'ajout des budgets', error);
        throw error
    }
}