"use client";
import { useEffect, useState } from "react";

type Comment = { id: number; name: string; email: string; body: string };

export default function Comments({ postId }: { postId: string }) {
  const [data, setData] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/api/comments?postId=${postId}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (!cancelled) setData(json);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [postId]);

  if (loading) return <p>Loading…</p>;

  return (
    <ul className="space-y-3">
      {data.map((c) => (
        <li key={c.id} className="rounded border p-3">
          <div className="font-semibold">{c.name}</div>
          <div className="text-sm text-gray-600">{c.email}</div>
          <p>{c.body}</p>
        </li>
      ))}
    </ul>
  );
}
