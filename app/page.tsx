"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

const fetchImages = async (query: string) => {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  );
  const data = await response.json();
  return data.photos;
};

export default function Home() {
  const [query, setQuery] = useState<string>("cat");
  const [photos, setPhotos] = useState<
    Array<{ src: { medium: string }; alt: string }>
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedGetImage = debounce(async (query: string) => {
    if (!query.trim()) {
      setPhotos([]); // Clear photos if query is empty
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const photos = await fetchImages(query);
      setPhotos(photos);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Failed to load images.");
    } finally {
      setLoading(false);
    }
  }, 300); // Debounce delay of 300ms

  useEffect(() => {
    debouncedGetImage(query);
  }, [query]);

  const handleSearch = () => {
    debouncedGetImage(query);
  };

  return (
    <div className="App p-4">
      <h1 className="text-5xl text-center mb-8">Amazing Image Gallery</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="border rounded-l px-4 py-2 w-1/2 focus:outline-none"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className="flex justify-between flex-wrap items-center px-24">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center  flex-wrap gap-6 group overflow-hidden  rounded-lg shadow-lg w-[400px] h-[400px]"
          >
            <Image
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              src={photo.src.medium}
              className="transform my-8 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
