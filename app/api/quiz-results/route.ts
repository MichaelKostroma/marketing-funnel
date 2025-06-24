import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if email is provided
    if (!body.email) {
      console.error("Email is required but not provided in the request");
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Log the quiz results to console as requested
    console.log("Quiz Results Received:", {
      email: body.email,
      timestamp: body.timestamp,
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    });

    // For now, we just return a success response
    return NextResponse.json({
      success: true,
      message: "Quiz results received successfully",
    });
  } catch (error) {
    console.error("Error processing quiz results:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process quiz results" },
      { status: 500 }
    );
  }
}
