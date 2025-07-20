import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, company, phone, budget, message } =
            body;

        // Validate required fields
        if (!firstName || !email || !message) {
            return NextResponse.json(
                {
                    error: "Missing required fields: firstName, email, and message are required",
                },
                { status: 400 }
            );
        }

        // Create transporter object using Gmail SMTP
        // Note: You'll need to configure these environment variables
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password (not regular password)
            },
        });

        // Email content
        const mailOptions = {
            from: `"PsychDevs Contact Form" <${process.env.GMAIL_USER}>`,
            to: "psychdevs@gmail.com", // Your receiving email
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #555; margin-bottom: 15px;">Contact Information:</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td>
                                <td style="padding: 8px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
                                <td style="padding: 8px; border-bottom: 1px solid #eee;">
                                    <a href="mailto:${email}" style="color: #007bff;">${email}</a>
                                </td>
                            </tr>
                            ${
                                company
                                    ? `
                            <tr>
                                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Company:</td>
                                <td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td>
                            </tr>
                            `
                                    : ""
                            }
                            ${
                                phone
                                    ? `
                            <tr>
                                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
                                <td style="padding: 8px; border-bottom: 1px solid #eee;">
                                    <a href="tel:${phone}" style="color: #007bff;">${phone}</a>
                                </td>
                            </tr>
                            `
                                    : ""
                            }
                            ${
                                budget
                                    ? `
                            <tr>
                                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Budget:</td>
                                <td style="padding: 8px; border-bottom: 1px solid #eee;">${budget}</td>
                            </tr>
                            `
                                    : ""
                            }
                        </table>
                    </div>

                    <div style="margin: 20px 0;">
                        <h3 style="color: #555; margin-bottom: 15px;">Project Details:</h3>
                        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                            ${message.replace(/\n/g, "<br>")}
                        </div>
                    </div>

                    <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px; text-align: center;">
                        <p style="margin: 0; color: #666; font-size: 14px;">
                            This email was sent from the PsychDevs contact form on ${new Date().toLocaleString()}
                        </p>
                    </div>
                </div>
            `,
            // Also include plain text version
            text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
${company ? `Company: ${company}` : ""}
${phone ? `Phone: ${phone}` : ""}
${budget ? `Budget: ${budget}` : ""}

Project Details:
${message}

Sent on: ${new Date().toLocaleString()}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
