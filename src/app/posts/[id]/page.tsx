import Comments from "./Comments";

// เลือกใช้สักอัน:
// export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Post {params.id}</h1>
      <Comments postId={params.id} />
    </main>
  );
}
