import Image from "next/image";
import me_transparent from "@/images/me-transparentbg-bandw.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-4 left-4 text-xs text-red-400 opacity-50">Started: 06/03/24</div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="relative aspect-square max-w-md overflow-hidden rounded-md border border-gray-200">
            <Image
              src={me_transparent}
              alt="NorbelD"
              fill
              priority // Important for above-the-fold images
              className="object-cover sepia brightness-90 contrast-125"
              sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
            />
          </div>
          <div className="absolute bottom-4 left-4 text-white/80 text-sm backdrop-blur-sm bg-black/20 px-2 rounded">
            <p>Lebron D.</p>
          </div>
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-50 border border-red-200 px-4 py-2 backdrop-blur-sm rounded">
            <p className="text-red-800 font-medium">01/21</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-800">NorbelD</h1>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-sm shadow-sm">
            <ul className="space-y-2 text-zinc-700">
              <li className="flex items-center gap-2">
                <span className="text-red-700">•</span>
                <span className="font-mono tracking-wide">multimedia artist</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-700">•</span>
                <span className="font-mono tracking-wide">front-end developer</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-700">•</span>
                <span className="font-mono tracking-wide">ui/ux designer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}