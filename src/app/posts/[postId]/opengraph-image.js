import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function fetchPost(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function DynamicOpengraphImage({ params }) {
  const { postId } = await params; // ✅ Now correctly awaited
  const post = await fetchPost(postId);
  if (!post) {
    return { title: "Post not found" };
  } // --- FIX: Dynamic Base URL Calculation ---
  const title = post?.title || "Default Blog Title";
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a, #06b6d4)",
          color: "white",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        {title}
      </div>
    ),
    {
      ...size,
    }
  );
}
