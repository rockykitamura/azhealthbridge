import { Navigation } from '../components/ui/Navigation';
import { Section, SectionHeader, Container } from '../components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Alert } from '../components/ui/Alert';
import { Button } from '../components/ui/Button';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export const meta = () => {
  return [
    { title: "Accessibility Statement | AZ Health Bridge" },
    { name: "description", content: "Accessibility statement and commitment for AZ Health Bridge Medicare information resource." },
    { name: "robots", content: "index, follow" },
  ];
};

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navigation />
      
      <Section padding="xl">
        <Container size="sm">
          <SectionHeader 
            title="Accessibility Statement"
            subtitle="Our commitment to making Medicare information accessible to everyone"
            centered={false}
          />
          
          <Alert variant="success" className="mb-8">
            <strong>Our Commitment:</strong> We are committed to ensuring digital accessibility for people with disabilities and strive to continually improve the user experience for everyone.
          </Alert>
          
          <div className="space-y-8">
            <Card variant="elevated" padding="xl">
              <CardContent className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Accessibility Standards</h2>
                <p className="mb-6">
                  AZ Health Bridge is committed to ensuring that our website is accessible to people with disabilities. We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which are internationally recognized guidelines for web accessibility.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Features We've Implemented</h2>
                
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Design for Seniors</h3>
                <p className="mb-4">Our website is specifically designed with seniors in mind:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Large, readable fonts:</strong> Minimum 18px base font size with generous line spacing</li>
                  <li><strong>High contrast colors:</strong> Strong color contrast ratios for better readability</li>
                  <li><strong>Large touch targets:</strong> Buttons and links are sized for easy clicking/tapping</li>
                  <li><strong>Clear navigation:</strong> Simple, consistent navigation structure</li>
                  <li><strong>Minimal visual clutter:</strong> Clean layouts that reduce cognitive load</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Keyboard Navigation</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>All interactive elements are accessible via keyboard</li>
                  <li>Logical tab order throughout the site</li>
                  <li>Visible focus indicators on all focusable elements</li>
                  <li>Skip links for main content navigation</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Screen Reader Support</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Semantic HTML markup for proper content structure</li>
                  <li>Descriptive alt text for all informative images</li>
                  <li>ARIA labels and landmarks for enhanced navigation</li>
                  <li>Proper heading hierarchy (H1-H6) for content organization</li>
                  <li>Form labels clearly associated with input fields</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Visual Design</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Color contrast ratios meet or exceed WCAG AA standards</li>
                  <li>Information is not conveyed by color alone</li>
                  <li>Text can be resized up to 200% without horizontal scrolling</li>
                  <li>Consistent visual design patterns throughout the site</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Mobile Accessibility</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Responsive design that works on all device sizes</li>
                  <li>Touch targets meet minimum size requirements (44x44px)</li>
                  <li>Pinch-to-zoom functionality preserved</li>
                  <li>Content reflows appropriately on smaller screens</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="primary" padding="lg">
              <CardHeader>
                <CardTitle>Ongoing Efforts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Accessibility is an ongoing effort. We regularly review and update our website to ensure it remains accessible and usable for all visitors. Our efforts include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Regular accessibility audits and testing</li>
                  <li>User testing with individuals who have disabilities</li>
                  <li>Staff training on accessibility best practices</li>
                  <li>Implementing user feedback and suggestions</li>
                  <li>Staying current with accessibility guidelines and standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="secondary" padding="lg">
              <CardHeader>
                <CardTitle>Assistive Technology Compatibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our website is designed to be compatible with common assistive technologies, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                  <li>Voice recognition software</li>
                  <li>Keyboard navigation tools</li>
                  <li>Switch access devices</li>
                  <li>Screen magnification software</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="sage" padding="lg">
              <CardHeader>
                <CardTitle>Third-Party Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  While we strive to ensure that all content on our website is accessible, some third-party content or external links may not meet our accessibility standards. We encourage users to contact us if they encounter accessibility barriers with any linked content, and we will work to provide alternative access methods when possible.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="xl">
              <CardContent>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Feedback and Support</h2>
                <p className="mb-6">
                  We welcome your feedback on the accessibility of AZ Health Bridge. If you encounter any accessibility barriers or have suggestions for improvement, please let us know. We are committed to addressing accessibility issues promptly.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">How to Contact Us</h3>
                <p className="mb-4">If you experience any difficulty accessing our website or need assistance, please contact us:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Use our website contact form (designed for accessibility)</li>
                  <li>Email us using the contact information on our website</li>
                  <li>Describe the specific page or feature you're having trouble with</li>
                  <li>Include details about the assistive technology you're using</li>
                </ul>

                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-neutral-800 mb-3">Response Commitment</h4>
                  <p className="mb-4">
                    We aim to respond to accessibility feedback within 2 business days and to implement fixes for accessibility issues within a reasonable timeframe based on the complexity of the issue.
                  </p>
                  <Button variant="primary" icon={EnvelopeIcon}>
                    Contact Us About Accessibility
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" padding="lg">
              <CardContent>
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Additional Resources</h2>
                <p className="mb-4">
                  For general information about web accessibility and assistive technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://www.w3.org/WAI/" className="text-primary-600 hover:text-primary-700 underline">Web Accessibility Initiative (WAI)</a></li>
                  <li><a href="https://webaim.org/" className="text-primary-600 hover:text-primary-700 underline">WebAIM - Web Accessibility In Mind</a></li>
                  <li><a href="https://www.ada.gov/" className="text-primary-600 hover:text-primary-700 underline">Americans with Disabilities Act (ADA)</a></li>
                  <li><a href="https://www.medicare.gov/about-us/accessibility" className="text-primary-600 hover:text-primary-700 underline">Medicare.gov Accessibility Information</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}