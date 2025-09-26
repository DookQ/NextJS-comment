import Comments from "./Comments";

export const dynamic = 'force-dynamic'; // หรือใช้ revalidate = 0

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Post {params.id}</h1>
      <p className="text-gray-500">Comments:</p>
      <Comments postId={params.id} />
    </main>
  );
}
