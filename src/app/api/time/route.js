export const runtime = "edge";

export async function GET() {
  const now = new Date().toISOString();
  return new Response(JSON.stringify({ now }), {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
