import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get("folder");

  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!;
  const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET_KEY!;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;


  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  try {
    const cloudinaryRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expression: `folder:${folder}`,
          max_results: 100,
        }),
      }
    );

    const data = await cloudinaryRes.json();
    return NextResponse.json(data.resources);
  } catch (error) {
    console.error("Cloudinary fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch from Cloudinary" }, { status: 500 });
  }
}