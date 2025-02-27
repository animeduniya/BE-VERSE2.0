import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-5xl font-bold text-center">Welcome to BE-VERSE</h1>
      <p className="text-center text-lg mt-4">Your ultimate streaming platform for Movies, K-Dramas, and Anime Movies.</p>
      <div className="flex justify-center gap-6 mt-8">
        <Link href="/movies" className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-700">Movies</Link>
        <Link href="/kdramas" className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-700">K-Dramas</Link>
        <Link href="/anime-movies" className="bg-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-700">Anime Movies</Link>
      </div>
    </div>
  );
}
