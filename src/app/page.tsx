import { Album } from "@/components/Album"
import { Footer } from "@/components/Footer"
import { Playlist } from "@/components/Playlist"
import { Sidebar } from "@/components/Sidebar"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  let albumsNames = generateAlbumName();
  let playlistsNames = generatePlaylistName();

  function generateAlbumName() {
    let firstNames = ["Nemesis", "Cherry", "Moonquake", "Dream", "Glass", "Ilusion" ];
    let secondNames = [" the road", " act", " treasures", " infinity", " feeling", "" ];

    let albumsNames = firstNames.map(albumName => {
      let firstSeed = Math.floor(Math.random() * 6);
      let secondSeed = Math.floor(Math.random() * 6);

      return firstNames[firstSeed] + secondNames[secondSeed]
    })

    return albumsNames;
  }

  function generatePlaylistName() {
    let firstNames = ["Daily", "Drive", "Top", "Hits" ];
    let secondNames = [" Mix 1", " Mix 3", " Eletro", " Sounds", " Brazil", " Sports" ];

    let playlistNames = secondNames.map(playlistName => {
      let firstSeed = Math.floor(Math.random() * 4);
      let secondSeed = Math.floor(Math.random() * 6);

      
      return firstNames[firstSeed] + secondNames[secondSeed]
    })
    console.log(playlistNames);

    return playlistNames;
  }
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
              <Album name={albumsNames[0]} albumCover="/album-cover.jpg" />
              <Album />
              <Album />
              <Album />
              <Album />
              <Album />
            </div>

            <h2 className="font-semibold text-2xl mt-6">Made for you</h2>

            <div className="grid grid-cols-5 gap-4 mt-4">

              <Playlist name={playlistsNames[0]} about={`About the ${playlistsNames[0]} playlist`} playlistCover="/album-cover.jpg" />
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
