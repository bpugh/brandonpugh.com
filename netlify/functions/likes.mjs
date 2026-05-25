import { getStore } from "@netlify/blobs";

const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
};

export default async (req, context) => {
  const store = getStore("likes");
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug");

  if (!slug || slug.length > 300) {
    return new Response(JSON.stringify({ error: "Invalid slug" }), {
      status: 400,
      headers,
    });
  }

  // Blob keys must not start with /
  const key = slug.replace(/^\/+/, "");

  if (req.method === "GET") {
    const data = await store.get(key, { type: "json" });
    const count = data?.count ?? 0;
    return new Response(JSON.stringify({ count }), { headers });
  }

  if (req.method === "POST") {
    const data = await store.get(key, { type: "json" });
    const count = (data?.count ?? 0) + 1;
    await store.setJSON(key, { count });
    return new Response(JSON.stringify({ count }), { headers });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers,
  });
};

export const config = {
  path: "/api/likes",
};
