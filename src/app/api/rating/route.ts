import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { stars, comment } = await req.json();

    if (!stars) {
      return NextResponse.json({ error: "Stars required" }, { status: 400 });
    }

    const { error } = await supabase.from("ratings").insert([{ stars, comment }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("ratings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const avg = data.length
      ? data.reduce((a, b) => a + b.stars, 0) / data.length
      : 0;

    return NextResponse.json({ reviews: data, average: avg });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
