# EmailJS Debugging Guide

## Current Configuration

Your `.env.local` file has:

-   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_rrqigwi
-   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_j0017sv
-   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=c6fMK7cKe2DOpGncK

## Debugging Steps

### 1. Check Browser Console

1. Open your website in the browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Fill out and submit the contact form
5. Look for:
    - "EmailJS Config:" log - verify your IDs are loading correctly
    - "Template Params:" log - verify form data is correct
    - "EmailJS Result:" log - see the actual response from EmailJS
    - Any error messages with specific details

### 2. Verify EmailJS Setup

Go to https://www.emailjs.com/ and check:

#### Service Setup:

1. Login to EmailJS dashboard
2. Go to "Email Services"
3. Verify your service ID matches: `service_rrqigwi`
4. Make sure the service is connected and active

#### Template Setup:

1. Go to "Email Templates"
2. Verify your template ID matches: `template_j0017sv`
3. Check that your template has these variables:
    - {{from_name}}
    - {{from_email}}
    - {{company}}
    - {{phone}}
    - {{project_type}}
    - {{budget}}
    - {{message}}
    - {{to_email}}

#### Public Key:

1. Go to "Account" section
2. Verify your public key matches: `c6fMK7cKe2DOpGncK`

### 3. Template Configuration

Your EmailJS template should be set up like this:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**

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

**To Email:** {{to_email}}

### 4. Common Issues & Solutions

#### Issue: "Invalid public key"

-   Solution: Check that your public key is correct in EmailJS dashboard

#### Issue: "Service not found"

-   Solution: Verify service ID and make sure service is active

#### Issue: "Template not found"

-   Solution: Check template ID and ensure template is saved

#### Issue: "Network error"

-   Solution: Check internet connection and try again

#### Issue: "Template variables not working"

-   Solution: Make sure all variable names in template match exactly (case-sensitive)

### 5. Test EmailJS Directly

Try this simple test in browser console:

```javascript
emailjs
    .send(
        "service_rrqigwi",
        "template_j0017sv",
        {
            from_name: "Test User",
            from_email: "test@example.com",
            message: "This is a test message",
        },
        "c6fMK7cKe2DOpGncK"
    )
    .then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            console.log("FAILED...", error);
        }
    );
```

### 6. Next Steps

1. Try submitting the form again and check the browser console
2. Look for specific error messages in the console logs
3. If you see configuration errors, double-check your EmailJS dashboard settings
4. If you still have issues, share the console error messages for more specific help

### 7. Environment Variables

Make sure you restarted your development server after updating `.env.local`:

```bash
npm run dev
```

## Contact for Help

If you continue having issues, share:

1. The exact error message from browser console
2. Screenshots of your EmailJS service and template configuration
3. The console logs when submitting the form
