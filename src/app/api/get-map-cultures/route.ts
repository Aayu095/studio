import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const state = searchParams.get("state");

  if (!state) {
    return NextResponse.json({ error: "Missing state param" }, { status: 400 });
  }

  try {
    const client = await connectToDatabase;
    const db = client.db("maatimap"); 
    const doc = await db.collection("map_cultures").findOne({ state });

    return NextResponse.json({ cultures: doc?.cultures || [] });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
