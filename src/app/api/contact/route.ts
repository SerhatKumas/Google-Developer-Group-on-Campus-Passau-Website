import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  category: z.enum(["general", "team", "talk"]),
  subject: z.string().min(3, "Subject must be at least 3 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  studyProgram: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // In production with CMS / Mailer:
    // await sendEmail({ to: siteConfig.email, ...validatedData });
    // or persist in Supabase/Prisma

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Our team will get back to you shortly.",
        data: { receivedAt: new Date().toISOString(), category: validatedData.category },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
