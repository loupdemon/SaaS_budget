import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col py-10 w-ful">
         {/* mettre les flexible, centrer vertifcalement et horizontalement, pour que les élement soit en une colonne */}
          <div>
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl font-bold text-center">
                {/* on veut un text centrer et frand et bold , ui se rétrécit quand on fait petit ecran */}
                Soyez le gérant de vos finances
              </h1>

              <p className="py-6 text-gray-800 test-center">
                Restez à l'écoute de sévolution de vos dépenses, suivez de près vos consommations<br/>
                avec toute simplicité
              </p>

              <div className="flex justify-center items-center">
                <Link href={"/sign-in"} 
                      className="btn btn-sm md:btn-md btn-outline btn-accent"
                      >
                        Se connecter
                </Link>

                <Link href={"/sign-up"} 
                      className="btn btn-sm md:btn-md ml-2 btn-accent"
                      >
                        {/* on rajoute un margin left */}
                        S'inscrire
                </Link>

              </div>

            </div>
          </div>

      </div>
    </div>
  );
}
