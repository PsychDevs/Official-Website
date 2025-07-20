# Email Setup Instructions for PsychDevs Contact Form

## Gmail App Password Setup

To enable the contact form to send emails to your Gmail account, you need to set up an App Password:

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow the prompts to enable 2-factor authentication if not already enabled

### Step 2: Generate App Password

1. Still in the Security section, scroll down to "2-Step Verification"
2. Click on "App passwords" (this option only appears after 2FA is enabled)
3. Select "Mail" for the app and "Other" for the device
4. Enter "PsychDevs Website" as the device name
5. Click "Generate"
6. Copy the 16-character password (format: xxxx-xxxx-xxxx-xxxx)

### Step 3: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace `your_app_password_here` with the generated app password (without spaces or dashes)
3. Ensure the email is set to `psychdevs@gmail.com`

Example `.env.local`:

```
GMAIL_USER=psychdevs@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

### Step 4: Restart Your Development Server

After updating the environment variables:

1. Stop your development server (Ctrl+C)
2. Run `npm run dev` again
3. The contact form should now be able to send emails

## Testing the Contact Form

1. Go to your website's contact page
2. Fill out the form with test data
3. Click "Send Project Inquiry"
4. Check your Gmail inbox for the email
5. The email will come from your own Gmail address with the form data

## Security Notes

-   Never commit the `.env.local` file to version control
-   The app password is specifically for this application only
-   You can revoke the app password anytime from your Google Account settings
-   The emails are sent from your Gmail account to your Gmail account

## Troubleshooting

### "Invalid login" error:

-   Double-check your Gmail address
-   Ensure you're using the App Password, not your regular Gmail password
-   Make sure 2FA is enabled on your Google account

### Emails not being received:

-   Check your spam folder
-   Verify the environment variables are correctly set
-   Restart the development server after changing .env.local

### Form submission errors:

-   Check the browser console for detailed error messages
-   Ensure all required fields are filled
-   Check network connectivity

## Customizing Email Content

The email template can be customized in `src/app/api/contact/route.ts`:

-   Modify the `subject` line
-   Update the HTML template in the `html` property
-   Change the plain text version in the `text` property
