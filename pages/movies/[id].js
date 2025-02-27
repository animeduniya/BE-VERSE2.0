import { useRouter } from "next/router";

export default function MovieDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold">Movie: {id}</h1>
      <p className="mt-4">Details about {id} will be displayed here.</p>
    </div>
  );
}
