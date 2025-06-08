import Image from "next/image";
import lebicon from "@/images/lebicon.jpg"; // Assuming you have an images folder at root

export default function About() {
  return (
    <main className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-800">About Me</h1>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <div className="aspect-square relative rounded-md overflow-hidden border border-gray-200">
              {/* Corrected Image component */}
              <Image 
                src={lebicon} 
                alt="NorbelD" 
                fill
                className="object-cover"
                placeholder="blur" // Optional: adds blur effect while loading
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-800">NorbelD</h2>
            <p className="text-zinc-700">
              I'm a multimedia artist, front-end developer, and UI/UX designer with a passion for creating engaging
              digital experiences. With over 5 years of experience in the creative industry, I specialize in blending
              technical expertise with artistic vision.
            </p>
            <p className="text-zinc-700">
              My work spans across various mediums including web development, photography, and video production. I
              believe in the power of visual storytelling and creating meaningful connections through design.
            </p>

            <h3 className="text-xl font-semibold mt-8 text-zinc-800">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-red-700">Development</h4>
                <ul className="list-disc list-inside text-zinc-700">
                  <li>Vercel</li>
                  <li>React, Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>   
                  <li>Java</li>
                  <li>Python</li>
                  <li>C++</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-red-700">Design</h4>
                <ul className="list-disc list-inside text-zinc-700">
                  <li>Adobe After Effects</li>
                  <li>Adobe Premiere Pro</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Lightroom</li>
                  <li>Davinci Resolve</li>
                  <li>Figma</li>
                  <li>Canva</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}