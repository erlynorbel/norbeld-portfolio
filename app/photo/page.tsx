import Image from "next/image"

export default function PhotoPortfolio() {
  return (
    <main className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-800">Photo Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sample photos - replace with actual content */}
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square relative overflow-hidden rounded-md border border-gray-200 hover:border-red-300 transition-colors"
          >
            <Image
              src={`/placeholder.svg?height=400&width=400&text=Photo ${i + 1}`}
              alt={`Photo ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
