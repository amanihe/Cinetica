import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const searchParams = new URL(req.url).searchParams;
  const type = searchParams.get("type"); 

  if (!id || !type) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  try {
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=credits,images`;
    console.log("Fetching URL:", url); 

    const res = await fetch(url);

    if (!res.ok) {
      console.error("TMDB API Error:", await res.text());
      throw new Error("Failed to fetch details from TMDB");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Failed to fetch details" }, { status: 500 });
  }
}
