import { Album } from "@/components/Album"
import { Footer } from "@/components/Footer"
import { Playlist } from "@/components/Playlist"
import { Sidebar } from "@/components/Sidebar"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

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
              <Album name="Album name" albumCover="/album-cover.jpg" />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
            </div>

            <h2 className="font-semibold text-2xl mt-6">Made for you</h2>

            <div className="grid grid-cols-5 gap-4 mt-4">

              <Playlist name="Daily Mix 5" about="About the Daily Mix 5" playlistCover="/album-cover.jpg" />
              <Playlist />
              <Playlist />
              <Playlist />
              <Playlist />

            </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
