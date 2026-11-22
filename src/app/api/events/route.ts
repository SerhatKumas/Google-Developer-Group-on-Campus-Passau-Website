import { NextResponse } from "next/server";
import { getEvents } from "@/services";

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json({
      success: true,
      data: events,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch events",
      },
      { status: 500 }
    );
  }
}
