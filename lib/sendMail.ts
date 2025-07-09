import siteConfig from "@/config/metadata";
import { transporter } from "@/lib/nodemailer";
export interface EmailResult {
    success: boolean;
    error?: string;
}

export const sendVerificationEmail = async (email: string, code: string): Promise<EmailResult> => {
    try {
        await transporter.verify();

        const info = await transporter.sendMail({
            from: `${siteConfig.name} <${process.env.EMAIL}>`,
            to: email,
            subject: `${siteConfig.name} - Email Verification`,
            html: verificationEmailTemplate(code),
            text: `Your verification code is: ${code}\n\nThis code will expire in 1 hour.`
        });

        console.log('Message sent: %s', info.messageId);
        return { success: true };
    } catch (error) {
        console.error('Email sending error:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to send email'
        };
    }
};

export const verificationEmailTemplate = (code: string) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #4CAF50; color: white; padding: 10px; text-align: center; }
        .content { padding: 20px; }
        .code { 
            font-size: 24px; 
            font-weight: bold; 
            text-align: center; 
            margin: 20px 0;
            padding: 10px;
            background-color: #f4f4f4;
            border-radius: 5px;
        }
        .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Email Verification</h1>
        </div>
        <div class="content">
            <p>Thank you for registering with our service. Please use the following verification code to complete your registration:</p>
            <div class="code">${code}</div>
            <p>This code will expire in 1 hour. If you didn't request this, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;
