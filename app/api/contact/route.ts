import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

// Validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  source: z.string().optional(),
  sourceDetails: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate incoming data
    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, description, budget, timeline, source, sourceDetails } =
      validationResult.data;

    // Save to database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name,
        email,
        company,
        description,
        budget,
        timeline,
        source,
        sourceDetails,
        status: "new",
      },
    });

    // TODO: Send email via Resend
    // const response = await resend.emails.send({
    //   from: "noreply@vrishtek.com",
    //   to: email,
    //   subject: "We received your inquiry — Vrishtek",
    //   html: `...`,
    // });
    //
    // Also send notification to admin:
    // await resend.emails.send({
    //   from: "noreply@vrishtek.com",
    //   to: "contact@vrishtek.com",
    //   subject: `New inquiry from ${name}`,
    //   html: `...`,
    // });

    console.log("Contact inquiry saved:", inquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received. We'll be in touch within 24 hours!",
        inquiryId: inquiry.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again." },
      { status: 500 }
    );
  }
}
