// Email service using native fetch instead of axios for better compatibility
// This file should only run on the server side where process.env is already available

import { EmailAudit } from '~/models/email-audit.server.js';

export default class MailerService {
    constructor() {
        this.apiUrl = 'https://mailer-service.builtwithheart.co/send-email';
        this.apiKey = process.env.BUILTWITHHEART_API_KEY;
        this.defaultFromEmail = process.env.EMAIL_FROM_ADDRESS;
        
        if (!this.apiKey) {
            throw new Error('BUILTWITHHEART_API_KEY is required for MailerService');
        }
        if (!this.defaultFromEmail) {
            throw new Error('EMAIL_FROM_ADDRESS is required for MailerService');
        }
    }

    async sendEmail({ 
        from = this.defaultFromEmail, 
        to, 
        subject, 
        body,
        // Additional audit context
        userId = null,
        emailType = 'general',
        ipAddress = null,
        userAgent = null,
        metadata = {}
    }) {
        let auditStatus = 'sent';
        let errorMessage = null;

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey
                },
                body: JSON.stringify({ from, to, subject, body })
            });

            if (!response.ok) {
                const errorData = await response.text();
                auditStatus = 'failed';
                errorMessage = `HTTP ${response.status}: ${errorData}`;
                throw new Error(errorMessage);
            }

            const result = await response.json();

            // Log successful email to audit
            await this.logEmailAudit({
                emailAddress: to,
                userId,
                subject,
                content: body,
                emailType,
                status: auditStatus,
                errorMessage,
                ipAddress,
                userAgent,
                metadata
            });

            return result;
        } catch (error) {
            auditStatus = 'failed';
            errorMessage = error.message;

            // Log failed email to audit
            await this.logEmailAudit({
                emailAddress: to,
                userId,
                subject,
                content: body,
                emailType,
                status: auditStatus,
                errorMessage,
                ipAddress,
                userAgent,
                metadata
            });

            console.error('Error sending email:', error.message);
            throw error;
        }
    }

    /**
     * Log email to audit system
     * Private method to handle audit logging
     */
    async logEmailAudit(auditData) {
        try {
            await EmailAudit.create(auditData);
        } catch (auditError) {
            // Don't let audit failures break email sending
            console.error('Failed to log email audit:', auditError.message || auditError);
            
            // If database is not configured, log this information for debugging
            if (auditError.message && auditError.message.includes('MONGODB_URI')) {
                console.warn('Email audit disabled: MongoDB not configured. Emails will send but not be audited.');
            }
        }
    }
}

// Example usage:
// (async () => {
//   const mailer = new MailerService();
//   const result = await mailer.sendEmail({
//     to: 'user@example.com',
//     subject: 'Welcome to Bank Statement Converter',
//     body: 'Thank you for signing up!',
//     // Audit context (optional)
//     userId: 'user123',
//     emailType: 'welcome',
//     ipAddress: '192.168.1.1',
//     userAgent: 'Mozilla/5.0...',
//     metadata: { locale: 'en', version: '1.0' }
//     // from is optional - will use EMAIL_FROM_ADDRESS by default
//   });
//   console.log(result);
// })();
