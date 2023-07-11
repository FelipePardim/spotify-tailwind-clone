import { PlayIcon } from "lucide-react";
import Image from "next/image";

export function Album({name, albumCover}: {name: string, albumCover: string}) {
    return (
        <div className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/5 transition-colors">
                <Image src={albumCover} width={100} height={100} alt="Album cover" />
                  <strong>{name}</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <PlayIcon fill="bg-black"/>
                  </button>
              </div>
    )
}