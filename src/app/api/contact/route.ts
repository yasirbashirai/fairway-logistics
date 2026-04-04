import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = "info@fwllogistics.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, ...data } = body;

    if (!formType) {
      return NextResponse.json(
        { error: "Missing form type" },
        { status: 400 }
      );
    }

    /* ── Build the email subject and body based on form type ── */
    let subject = "";
    let htmlBody = "";

    switch (formType) {
      case "contact": {
        subject = `New Contact Form: ${data.subject || "General Inquiry"} — from ${data.name}`;
        htmlBody = `
          <h2 style="color:#b8860b;">New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Subject</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.subject || "General Inquiry"}</td></tr>
          </table>
          <h3 style="margin-top:20px;">Message:</h3>
          <p style="background:#f9f9f9;padding:15px;border-radius:8px;white-space:pre-wrap;">${data.message}</p>
        `;
        break;
      }

      case "quote": {
        subject = `New Quote Request — ${data.freightType || "Freight"} — from ${data.fullName}`;
        htmlBody = `
          <h2 style="color:#b8860b;">New Quote Request</h2>
          <h3>Shipment Details</h3>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Origin</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.origin}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Destination</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.destination}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Freight Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.freightType}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Equipment</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.equipmentNeeds || "None specified"}</td></tr>
          </table>
          <h3>Cargo Details</h3>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Weight</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.weight} lbs</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Dimensions</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.dimensions || "Not specified"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Commodity</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.commodity}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Special Requirements</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.specialRequirements || "None"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Hazmat</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.hazmat ? "YES" : "No"}</td></tr>
          </table>
          <h3>Contact Information</h3>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.fullName}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.company || "Not provided"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Preferred Contact</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.preferredContact || "Not specified"}</td></tr>
          </table>
          ${data.additionalNotes ? `<h3>Additional Notes:</h3><p style="background:#f9f9f9;padding:15px;border-radius:8px;white-space:pre-wrap;">${data.additionalNotes}</p>` : ""}
          ${data.hasAttachments ? "<p style='color:#b8860b;font-weight:bold;margin-top:15px;'>⚠️ Customer uploaded product photos. Please follow up to receive them.</p>" : ""}
        `;
        break;
      }

      case "carrier": {
        subject = `New Carrier Application — ${data.companyName} — ${data.contactName}`;
        htmlBody = `
          <h2 style="color:#b8860b;">New Carrier Partner Application</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.companyName}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Contact</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.contactName}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">MC Number</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.mcNumber || "Not provided"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">DOT Number</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.dotNumber || "Not provided"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Equipment</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.equipmentTypes || "Not specified"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Service Areas</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.serviceAreas || "Not specified"}</td></tr>
          </table>
          ${data.additionalInfo ? `<h3>Additional Info:</h3><p style="background:#f9f9f9;padding:15px;border-radius:8px;white-space:pre-wrap;">${data.additionalInfo}</p>` : ""}
        `;
        break;
      }

      case "career": {
        subject = `New Job Application — ${data.position || "General"} — ${data.name}`;
        htmlBody = `
          <h2 style="color:#b8860b;">New Career Application</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Position</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.position || "General Application"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Experience</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.experience || "Not specified"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">CDL</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.cdl || "Not specified"}</td></tr>
          </table>
          ${data.message ? `<h3>Cover Letter / Message:</h3><p style="background:#f9f9f9;padding:15px;border-radius:8px;white-space:pre-wrap;">${data.message}</p>` : ""}
        `;
        break;
      }

      case "quote-calculator": {
        subject = `New Quick Quote — ${data.serviceType || "Freight"} — ${data.name}`;
        htmlBody = `
          <h2 style="color:#b8860b;">New Quick Quote Request (Calculator)</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Service Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.serviceType}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Origin</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.origin}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Destination</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.destination}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Weight</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.weight || "Not specified"}</td></tr>
          </table>
        `;
        break;
      }

      case "newsletter": {
        subject = `New Newsletter Subscription — ${data.email}`;
        htmlBody = `
          <h2 style="color:#b8860b;">New Newsletter Subscriber</h2>
          <p>A new user has subscribed to the Fairway Logistics newsletter:</p>
          <p style="font-size:18px;font-weight:bold;"><a href="mailto:${data.email}">${data.email}</a></p>
        `;
        break;
      }

      default:
        return NextResponse.json(
          { error: "Unknown form type" },
          { status: 400 }
        );
    }

    /* ── Send email via SMTP ── */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || RECIPIENT,
        pass: process.env.SMTP_PASS || "",
      },
    });

    await transporter.sendMail({
      from: `"Fairway Logistics Website" <${process.env.SMTP_USER || RECIPIENT}>`,
      to: RECIPIENT,
      replyTo: data.email || undefined,
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:0 auto;padding:20px;">
          <div style="text-align:center;padding:20px 0;border-bottom:2px solid #b8860b;">
            <h1 style="color:#0a1628;margin:0;">Fairway Logistics</h1>
            <p style="color:#666;margin:5px 0 0;">Website Form Submission</p>
          </div>
          <div style="padding:20px 0;">
            ${htmlBody}
          </div>
          <div style="border-top:1px solid #eee;padding:15px 0;color:#999;font-size:12px;text-align:center;">
            <p>This email was sent from the Fairway Logistics website at fairwaylogisticsllc.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call (251) 725-1929." },
      { status: 500 }
    );
  }
}
