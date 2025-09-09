import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // use service role in API routes
);

// Define Testimonial type manually
type Testimonial = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

// GET testimonials
export async function GET() {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Cast data to typed array
  const testimonials: Testimonial[] | null = data;

  return NextResponse.json(testimonials);
}

// POST new testimonial
export async function POST(req: Request) {
  try {
    const body: Partial<Testimonial> = await req.json();

    const { data, error } = await supabase
      .from("testimonials")
      .insert([body])
      .select();

    if (error) throw error;

    const newTestimonial: Testimonial | null = data?.[0] ?? null;

    return NextResponse.json(newTestimonial);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
