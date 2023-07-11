import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  let playlistNames = generatePlaylistName();

  function generatePlaylistName() {
    let firstNames = ["My ", "Best", "(G)OLD", "Calm" , "Party 🎉"];
    let secondNames = [" Playlist", " Mix", " Eletro 👽", " Rock", " HipHop", " 🌕" ];

    let playlistNames = secondNames.map(playlistName => {
      let firstSeed = Math.floor(Math.random() * 5);
      let secondSeed = Math.floor(Math.random() * 6);

      return firstNames[firstSeed] + secondNames[secondSeed]
    })

    return playlistNames;
  }

    return (
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 ml-2 pt-10 border-t border-zinc-700 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{playlistNames[0]}</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{playlistNames[1]}</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{playlistNames[2]}</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{playlistNames[3]}</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{playlistNames[4]}</a>
          </nav>
        </aside>
    )
}