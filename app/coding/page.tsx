export default function CodingPortfolio() {
  return (
    <main className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-800">Coding Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample projects - replace with actual content */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-md hover:border-red-200 transition-all"
          >
            <h2 className="text-xl font-semibold mb-2 text-zinc-800">Project {i + 1}</h2>
            <p className="text-zinc-600 mb-4">A brief description of this coding project and the technologies used.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">React</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">TypeScript</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Next.js</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
