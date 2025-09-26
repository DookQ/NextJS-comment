import { NextResponse } from "next/server";

export const revalidate = 0; // ให้ API เป็น dynamic
// (ถ้าจำเป็น) export const runtime = 'nodejs';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");
  if (!postId) return NextResponse.json({ error: "postId is required" }, { status: 400 });

  const r = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
    cache: "no-store",
  });
  if (!r.ok) return NextResponse.json({ error: "upstream failed" }, { status: 502 });

  return NextResponse.json(await r.json());
}
