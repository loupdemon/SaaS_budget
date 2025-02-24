import { PrismaClient } from "@prisma/client";


const prismaClientSingleton = () => {
  return new PrismaClient()   //on crée une instance prisma qui va nous permettre de nous connecter à la bdd
}


//le reste du code pour optimiser la connexion

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma