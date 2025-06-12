"use client";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

type VideoMeta = {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
};

const VIDEO_IDS = [
  "fUD9p6D-A2Y", "EyKfrPj0pFE", "UdON1aOEnOI", "2-JwK_1RwBU",
  "xcM547bzVtg", "FvEswI4_LpA", "fuQbbFgLG0Y", "0gsw_LCUvT8",
  "edxG2f9iCoQ", "HMrZV9WCHPs", "7RwUTFRYEU0", "OmY7wDZFdKc", "f6oi4CV8-XQ"
];

export default function VideoPortfolio() {
  const [videos, setVideos] = useState<VideoMeta[]>([]);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_IDS.join(",")}&key=${apiKey}`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch YouTube metadata.");
        }

        const data = await res.json();
        const videoData = data.items.map((item: any) => ({
          id: item.id,
          videoId: item.id,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high.url,
        }));

        setVideos(videoData);
        setLoading(false);
      } catch (err) {
        setError("Could not load videos. Please try again later.");
        setLoading(false);
      }
    };

    fetchMetadata();
  }, []);

  const getEmbedUrl = (id: string) => `https://www.youtube.com/embed/${id}`;

  return (
    <main className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-800">
        Video Portfolio
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64" aria-live="polite">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600 border-opacity-50"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-600 text-lg font-medium mt-10" aria-live="polite">
          {error}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-zinc-900 aspect-video relative rounded-md overflow-hidden border border-gray-200 hover:border-red-300 transition-colors"
            >
              {playingVideo === video.id ? (
                <iframe
                  src={getEmbedUrl(video.videoId)}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => setPlayingVideo(video.id)}
                  >
                    <div className="bg-red-700 hover:bg-red-800 rounded-full p-4 transition-colors">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h2 className="text-white text-xl font-medium">
                      {video.title}
                    </h2>
                    <p className="text-white/70 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
