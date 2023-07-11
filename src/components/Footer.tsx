import { Heart, List, Maximize2, Mic2, MonitorSpeaker, PlayIcon, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/album-cover.jpg" width={60} height={60} alt="Album cover" />
          <div className="flex flex-col">
            <strong className="font-normal">Music name</strong>
            <span className="text-xs text-zinc-400">Artist name</span>
          </div>
          <Heart />
        </div>

        <div className="flex flex-col items-center pl-28">
          <div className="flex items-center gap-6">
            <Shuffle/>
            <SkipBack/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <PlayIcon fill="bg-black"/>
            </button>
            <SkipForward/>
            <Repeat/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full w-40 bg-zinc-400" />
            </div>
            <span className="text-xs text-zinc-400">2:37</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <List size={20} />
          <MonitorSpeaker size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="h-1 rounded-full w-12 bg-zinc-400" />
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    )
}