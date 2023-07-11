import { PlayIcon } from "lucide-react";
import Image from "next/image";

export function Playlist({ name, about, playlistCover }: {name: string, about: string, playlistCover: string}) {
    return (
        <a href="" className="relative bg-white/5 p-3 rounded  flex flex-col gap-2 hover:bg-white/10 group">
            <button className="absolute bottom-20 left-44 right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible">
                <PlayIcon fill="bg-black" className="w-6 h-6"/>
            </button>
            <Image src={playlistCover} className="w-full" width={60} height={60} alt="Playlist cover" />
            <strong className="font-semibold">{name}</strong>
            <span className="text-xs text-zinc-500">{about}</span>
        </a>
    )
}