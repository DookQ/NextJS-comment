export async function getComments(postId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
    cache: "no-store", // ให้ดึงใหม่ทุกครั้ง (ไม่ cache)
  });
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}
