# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form in under 5 minutes!

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended)
4. Click **"Connect Account"** and authorize EmailJS to use your Gmail
5. Give your service a name (e.g., "PsychDevs Contact")
6. Copy the **Service ID** (looks like `service_xxxxxxx`)

## Step 3: Create Email Template

1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

### Subject Line:

```
New Contact Form Submission from {{from_name}}
```

### Email Content:

```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Company:</strong> {{company}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Project Type:</strong> {{project_type}}</p>
<p><strong>Budget:</strong> {{budget}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr />
<p><small>Sent via PsychDevs Contact Form</small></p>
```

4. Set **"To Email"** to: `{{to_email}}`
5. Save the template and copy the **Template ID** (looks like `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to **"Account"** in the sidebar
2. Find **"Public Key"** section
3. Copy your **Public Key** (looks like a long string)

## Step 5: Update Environment Variables

Open your `.env.local` file and update:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with what you copied from EmailJS.

## Step 6: Test Your Form

1. Restart your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your Gmail inbox for the test email!

## Free Tier Limits

-   ✅ **200 emails/month** (perfect for most small businesses)
-   ✅ **No app passwords needed**
-   ✅ **No credit card required**
-   ✅ **Reliable delivery**

## Troubleshooting

### Form not sending emails?

1. Check browser console for errors
2. Verify all three environment variables are set correctly
3. Make sure you restarted the dev server after updating `.env.local`

### EmailJS account issues?

1. Make sure you verified your email address
2. Check that your Gmail service is properly connected
3. Ensure template variables match exactly (case-sensitive)

## Benefits Over Gmail App Passwords

-   ✅ **No password management**
-   ✅ **No 2FA setup required**
-   ✅ **Better security**
-   ✅ **Easier to maintain**
-   ✅ **Professional email templates**

Your contact form is now ready to use! 🚀
