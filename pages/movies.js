import Link from "next/link";

export default function Movies() {
  const movies = [
    { title: "Inception", id: "inception" },
    { title: "Interstellar", id: "interstellar" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold">Movies</h1>
      <div className="mt-4">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`} className="block bg-gray-700 p-4 rounded mt-2 hover:bg-gray-600">
            {movie.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
