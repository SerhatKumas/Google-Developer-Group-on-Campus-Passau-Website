import { NextResponse } from "next/server";
import { z } from "zod";

const partnerInquirySchema = z.object({
  organizationName: z.string().min(2, "Organization name is required"),
  organizationType: z.enum(["company", "student_group", "university"]),
  contactName: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Valid email address is required"),
  collaborationInterest: z.string().min(2, "Please select an interest"),
  message: z.string().min(10, "Please provide more details (minimum 10 characters)"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = partnerInquirySchema.parse(body);

    // In production:
    // await savePartnerInquiry(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${validatedData.contactName}. We have received the partnership inquiry from ${validatedData.organizationName} and will reach out within 2 business days.`,
        data: {
          organization: validatedData.organizationName,
          timestamp: new Date().toISOString(),
        },
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
