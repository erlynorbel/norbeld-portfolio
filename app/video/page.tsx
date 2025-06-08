import { Play } from "lucide-react"

export default function VideoPortfolio() {
  return (
    <main className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-800">Video Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sample videos - replace with actual content */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-zinc-900 aspect-video relative rounded-md overflow-hidden border border-gray-200 hover:border-red-300 transition-colors"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-700 hover:bg-red-800 rounded-full p-4 transition-colors">
                <Play className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h2 className="text-white text-xl font-medium">Video Project {i + 1}</h2>
              <p className="text-white/70">Brief description of this video project</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
