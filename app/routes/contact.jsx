import { useState, useEffect } from 'react';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import { Navigation } from '../components/ui/Navigation';
import { Section, SectionHeader, Container, Grid } from '../components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input, Select, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Alert } from '../components/ui/Alert';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const meta = () => {
  return [
    { title: "Contact Us | AZ Health Bridge" },
    { name: "description", content: "Contact AZ Health Bridge for Medicare information and assistance. Get help understanding your Medicare options in Arizona." },
    { name: "robots", content: "index, follow" },
  ];
};

// Server-side form validation and spam protection
export async function action({ request }) {
  const formData = await request.formData();
  const submission = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    zipCode: formData.get('zipCode'),
    medicareStatus: formData.get('medicareStatus'),
    primaryInterest: formData.get('primaryInterest'),
    message: formData.get('message'),
    honeypot: formData.get('website'), // Honeypot field
    timestamp: formData.get('timestamp'),
    formToken: formData.get('formToken')
  };

  // Spam protection checks
  const errors = {};

  // 1. Honeypot check - if filled, it's likely a bot
  if (submission.honeypot && submission.honeypot.trim() !== '') {
    return json({ 
      success: false, 
      error: 'Submission blocked. Please try again.' 
    }, { status: 400 });
  }

  // 2. Time-based check - form submitted too quickly (less than 3 seconds)
  const submissionTime = Date.now();
  const formStartTime = parseInt(submission.timestamp);
  if (submissionTime - formStartTime < 3000) {
    return json({ 
      success: false, 
      error: 'Form submitted too quickly. Please take your time filling out the form.' 
    }, { status: 400 });
  }

  // 3. Basic validation
  if (!submission.firstName || submission.firstName.trim().length < 2) {
    errors.firstName = 'First name is required';
  }
  if (!submission.lastName || submission.lastName.trim().length < 2) {
    errors.lastName = 'Last name is required';
  }
  if (!submission.email || !submission.email.includes('@')) {
    errors.email = 'Valid email address is required';
  }
  if (!submission.zipCode || !/^\d{5}(-\d{4})?$/.test(submission.zipCode)) {
    errors.zipCode = 'Valid ZIP code is required';
  }
  if (!submission.medicareStatus) {
    errors.medicareStatus = 'Please select your Medicare status';
  }
  if (!submission.message || submission.message.trim().length < 10) {
    errors.message = 'Please provide a message with at least 10 characters';
  }

  // 4. Content filtering - basic spam detection
  const spamKeywords = ['viagra', 'casino', 'loan', 'crypto', 'bitcoin', 'seo services', 'web design'];
  const messageText = submission.message.toLowerCase();
  const hasSpamContent = spamKeywords.some(keyword => messageText.includes(keyword));
  
  if (hasSpamContent) {
    return json({ 
      success: false, 
      error: 'Message content not allowed. Please focus on Medicare-related questions.' 
    }, { status: 400 });
  }

  if (Object.keys(errors).length > 0) {
    return json({ success: false, errors }, { status: 400 });
  }

  // Here you would typically:
  // 1. Send email notification
  // 2. Store in database
  // 3. Send confirmation email to user
  
  // For now, simulate processing
  console.log('Contact form submission:', {
    ...submission,
    honeypot: undefined, // Don't log honeypot
    timestamp: undefined,
    formToken: undefined
  });

  // Return success response
  return json({ 
    success: true, 
    message: 'Thank you for your message! We typically respond within 1-2 business days.' 
  });
}

export default function Contact() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  // Generate form timestamp and token for spam protection
  const [formData, setFormData] = useState({
    timestamp: Date.now(),
    formToken: Math.random().toString(36).substring(2, 15)
  });

  // Reset form data after successful submission
  useEffect(() => {
    if (actionData?.success) {
      // Reset form by regenerating timestamp and token
      setFormData({
        timestamp: Date.now(),
        formToken: Math.random().toString(36).substring(2, 15)
      });
    }
  }, [actionData]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navigation />
      
      <Section padding="xl">
        <Container>
          <SectionHeader 
            title="Contact Us"
            subtitle="Get help with your Medicare questions. We're here to provide information and guidance."
          />
          
          <Grid columns={2} gap="xl" responsive={true}>
            {/* Contact Information */}
            <div className="space-y-6">
              <Card variant="elevated" padding="lg">
                <CardHeader>
                  <CardTitle>Get Medicare Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-neutral-700 mb-6">
                    We're here to help you understand your Medicare options in Arizona. 
                    Our information resource is designed to make Medicare simple and accessible.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <ClockIcon className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-900">Response Time</h4>
                        <p className="text-neutral-700">We typically respond within 1-2 business days</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPinIcon className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-900">Service Area</h4>
                        <p className="text-neutral-700">All 15 Arizona counties</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <EnvelopeIcon className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-neutral-900">Best Way to Reach Us</h4>
                        <p className="text-neutral-700">Use the contact form for the fastest response</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="secondary" padding="lg">
                <CardContent>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4">Common Questions We Help With</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                      <span>Understanding Medicare Advantage vs Medicare Supplement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                      <span>Enrollment periods and deadlines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                      <span>Plan options available in your Arizona county</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                      <span>Part D prescription drug coverage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                      <span>Medicare basics for new beneficiaries</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div>
              {actionData?.success && (
                <Alert variant="success" className="mb-6">
                  <strong>Message Sent Successfully!</strong> {actionData.message}
                </Alert>
              )}
              
              {actionData?.error && (
                <Alert variant="error" className="mb-6">
                  <strong>Submission Error:</strong> {actionData.error}
                </Alert>
              )}
              
              <Card variant="elevated" padding="xl">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form method="post" className="space-y-6">
                    {/* Hidden fields for spam protection */}
                    <input type="hidden" name="timestamp" value={formData.timestamp} />
                    <input type="hidden" name="formToken" value={formData.formToken} />
                    
                    {/* Honeypot field - hidden from users but visible to bots */}
                    <div style={{ display: 'none' }}>
                      <label htmlFor="website">Website (leave blank)</label>
                      <input 
                        type="text" 
                        id="website" 
                        name="website" 
                        tabIndex="-1" 
                        autoComplete="off"
                      />
                    </div>
                    
                    <Grid columns={2} gap="md">
                      <Input
                        label="First Name"
                        name="firstName"
                        placeholder="John"
                        required
                        error={actionData?.errors?.firstName}
                        disabled={isSubmitting}
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        placeholder="Smith"
                        required
                        error={actionData?.errors?.lastName}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    
                    <Grid columns={2} gap="md">
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        helper="We'll never share your email address"
                        required
                        error={actionData?.errors?.email}
                        disabled={isSubmitting}
                      />
                      <Input
                        label="Phone Number (Optional)"
                        name="phone"
                        type="tel"
                        placeholder="(602) 555-0123"
                        helper="Include if you prefer a phone response"
                        disabled={isSubmitting}
                      />
                    </Grid>
                    
                    <Grid columns={2} gap="md">
                      <Input
                        label="ZIP Code"
                        name="zipCode"
                        placeholder="85001"
                        helper="To provide area-specific information"
                        required
                        error={actionData?.errors?.zipCode}
                        disabled={isSubmitting}
                      />
                      <Select
                        label="Medicare Status"
                        name="medicareStatus"
                        options={[
                          'New to Medicare',
                          'Currently on Medicare',
                          'Planning Ahead (not yet 65)',
                          'Helping Someone Else',
                          'Medicare Professional'
                        ]}
                        required
                        error={actionData?.errors?.medicareStatus}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    
                    <Select
                      label="Primary Interest (Optional)"
                      name="primaryInterest"
                      options={[
                        'Medicare Advantage Plans',
                        'Medicare Supplement Plans',
                        'Part D Prescription Plans',
                        'Medicare Basics Information',
                        'Enrollment Assistance',
                        'Plan Comparison Help',
                        'Website Feedback',
                        'Other'
                      ]}
                      helper="Helps us provide more relevant information"
                      disabled={isSubmitting}
                    />
                    
                    <Textarea
                      label="Your Message"
                      name="message"
                      placeholder="Please describe how we can help you with Medicare information..."
                      rows={5}
                      helper="Please be specific about your Medicare questions or needs"
                      required
                      error={actionData?.errors?.message}
                      disabled={isSubmitting}
                    />
                    
                    <Alert variant="neutral">
                      <strong>Privacy Notice:</strong> Your information is secure and will only be used to respond to your inquiry. We never sell or share personal information.
                    </Alert>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="xl" 
                      fullWidth
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : EnvelopeIcon}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>
    </div>
  );
}