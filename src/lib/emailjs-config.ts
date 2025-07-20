// EmailJS Configuration
// You'll get these values from your EmailJS dashboard at https://www.emailjs.com/

export const emailjsConfig = {
    serviceId:
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_psychdevs",
    templateId:
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_contact",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

// Template parameters structure for EmailJS
export interface EmailTemplateParams {
    from_name: string;
    from_email: string;
    company: string;
    phone: string;
    project_type: string;
    budget: string;
    message: string;
    to_email: string;
}
