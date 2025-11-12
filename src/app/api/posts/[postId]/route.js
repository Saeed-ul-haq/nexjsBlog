const POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next js",
    date: "2022-02-10",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is React framework for production",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with Next js 2",
    date: "2022-02-10",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is React framework for production",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with Next js 3",
    date: "2022-02-10",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is React framework for production",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with Next js 4",
    date: "2022-02-10",
    image: "getting-started-nextjs.png",
    excerpt: "Next js is React framework for production",
  },
];

export async function GET(request, { params }) {
  const { postId } = await params;
  const post = POSTS.find((p) => p.slug === postId);
  if (!post) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(post), {
    headers: { "content-type": "application/json" },
  });
}
