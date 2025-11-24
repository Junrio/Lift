import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: integrate email or database later
    console.log("CONTACT_MESSAGE", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}


