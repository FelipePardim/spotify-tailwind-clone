import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, PlayIcon, Heart, Shuffle, SkipBack, SkipForward, Repeat, Mic2, List, MonitorSpeaker, Volume, Maximize, Maximize2 } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon></HomeIcon>
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search></Search>
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library></Library>
              Your Library
            </a>
          </nav>

          <nav className="mt-6 ml-2 pt-10 border-t border-zinc-700 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 1</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-black/60">
              <ChevronLeft></ChevronLeft>
            </button>
            <button>
              <ChevronRight></ChevronRight>
            </button>
          </div>

            <h1 className="font-semibold text-3xl mt-6">Good Afternoon</h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/5 transition-colors">
                <Image src="/album-cover.jpg" width={100} height={100} alt="Album cover" />
                  <strong>Album name</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <PlayIcon fill="bg-black"/>
                  </button>
              </div>

              <div className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/5 transition-colors">
                <Image src="/album-cover.jpg" width={100} height={100} alt="Album cover" />
                  <strong>Album name</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <PlayIcon fill="bg-black"/>
                  </button>
              </div>

              <div className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/5 transition-colors">
                <Image src="/album-cover.jpg" width={100} height={100} alt="Album cover" />
                  <strong>Album name</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <PlayIcon fill="bg-black"/>
                  </button>
              </div>

              <div className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/5 transition-colors">
                <Image src="/album-cover.jpg" width={100} height={100} alt="Album cover" />
                  <strong>Album name</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <PlayIcon fill="bg-black"/>
                  </button>
              </div>

              <div className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/5 transition-colors">
                <Image src="/album-cover.jpg" width={100} height={100} alt="Album cover" />
                  <strong>Album name</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <PlayIcon fill="bg-black"/>
                  </button>
              </div>

              <div className="bg-white/10 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/5 transition-colors">
                <Image src="/album-cover.jpg" width={100} height={100} alt="Album cover" />
                  <strong>Album name</strong>
                  <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                    <PlayIcon fill="bg-black"/>
                  </button>
              </div>
            </div>

            <h2 className="font-semibold text-2xl mt-6">Made for you</h2>

            <div className="grid grid-cols-5 gap-4 mt-4">
              <a href="" className="relative bg-white/5 p-3 rounded  flex flex-col gap-2 hover:bg-white/10 group">
                <button className="absolute bottom-20 left-44 right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible">
                    <PlayIcon fill="bg-black" className="w-6 h-6"/>
                </button>
                <Image src="/album-cover.jpg" className="w-full" width={60} height={60} alt="Album cover" />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-xs text-zinc-500">About this playlist</span>
              </a>

              <a href="" className="relative bg-white/5 p-3 rounded  flex flex-col gap-2 hover:bg-white/10 group">
                <button className="absolute bottom-20 left-44 right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible">
                    <PlayIcon fill="bg-black" className="w-6 h-6"/>
                </button>
                <Image src="/album-cover.jpg" className="w-full" width={60} height={60} alt="Album cover" />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-xs text-zinc-500">About this playlist</span>
              </a>

              <a href="" className="relative bg-white/5 p-3 rounded  flex flex-col gap-2 hover:bg-white/10 group">
                <button className="absolute bottom-20 left-44 right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible">
                    <PlayIcon fill="bg-black" className="w-6 h-6"/>
                </button>
                <Image src="/album-cover.jpg" className="w-full" width={60} height={60} alt="Album cover" />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-xs text-zinc-500">About this playlist</span>
              </a>

              <a href="" className="relative bg-white/5 p-3 rounded  flex flex-col gap-2 hover:bg-white/10 group">
                <button className="absolute bottom-20 left-44 right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible">
                    <PlayIcon fill="bg-black" className="w-6 h-6"/>
                </button>
                <Image src="/album-cover.jpg" className="w-full" width={60} height={60} alt="Album cover" />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-xs text-zinc-500">About this playlist</span>
              </a>

              <a href="" className="relative bg-white/5 p-3 rounded  flex flex-col gap-2 hover:bg-white/10 group">
                <button className="absolute bottom-20 left-44 right-0 w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible">
                    <PlayIcon fill="bg-black" className="w-6 h-6"/>
                </button>
                <Image src="/album-cover.jpg" className="w-full" width={60} height={60} alt="Album cover" />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-xs text-zinc-500">About this playlist</span>
              </a>
            </div>
        </main>
      </div>
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
            <Shuffle></Shuffle>
            <SkipBack></SkipBack>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <PlayIcon fill="bg-black"/>
            </button>
            <SkipForward></SkipForward>
            <Repeat></Repeat>
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
    </div>
  )
}
