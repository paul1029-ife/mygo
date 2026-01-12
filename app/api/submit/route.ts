// app/api/submit/route.ts
import { NextResponse } from "next/server";

const FORM_ID = "1FAIpQLSfYPqJ99TgNeTWxfq6NSRaR16krC5dzfHoaLzBxGYTsAbgPxw";
const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

const FIELD_MAPPING = {
  name: "entry.380546734",
  email: "entry.482241721",
  type: "entry.1523552963",
  details: "entry.1576543735",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, details, type } = body;

    if (!name || !email || !details || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const formattedType = type.charAt(0).toUpperCase() + type.slice(1);

    const formData = new URLSearchParams();
    formData.append(FIELD_MAPPING.name, name);
    formData.append(FIELD_MAPPING.email, email);
    formData.append(FIELD_MAPPING.type, formattedType);
    formData.append(FIELD_MAPPING.details, details);

    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
