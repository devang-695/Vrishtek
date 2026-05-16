import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, description, budget, timeline, source } =
      body;

    // Validate required fields
    if (!name || !email || !company || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Store in PostgreSQL via Prisma
    // 2. Send email via Resend
    // 3. Optionally trigger a webhook

    console.log("Contact form submission:", {
      name,
      email,
      company,
      description,
      budget,
      timeline,
      source,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement actual email sending and database storage
    // For now, just return success
    return NextResponse.json(
      { success: true, message: "Inquiry received. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
