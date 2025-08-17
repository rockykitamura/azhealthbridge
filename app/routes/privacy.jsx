import { Navigation } from '../components/ui/Navigation';
import { Section, SectionHeader, Container } from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';
import { Alert } from '../components/ui/Alert';

export const meta = () => {
  return [
    { title: "Privacy Policy | AZ Health Bridge" },
    { name: "description", content: "Privacy Policy for AZ Health Bridge Medicare information resource." },
    { name: "robots", content: "noindex, follow" },
  ];
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navigation />
      
      <Section padding="xl">
        <Container size="sm">
          <SectionHeader 
            title="Privacy Policy"
            subtitle="Last updated: January 2025"
            centered={false}
          />
          
          <Alert variant="info" className="mb-8">
            <strong>Your Privacy Matters:</strong> We are committed to protecting your personal information and being transparent about how we collect, use, and protect your data.
          </Alert>
          
          <Card variant="elevated" padding="xl">
            <CardContent className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Personal Information</h3>
              <p className="mb-4">When you voluntarily submit information through our contact forms, we may collect:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name (first and last)</li>
                <li>Email address</li>
                <li>ZIP code</li>
                <li>Medicare status information</li>
                <li>Questions or comments you provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-neutral-800 mb-3">Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we automatically collect certain information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide Medicare information and resources relevant to your area</li>
                <li>Respond to your questions and provide customer support</li>
                <li>Send educational materials about Medicare (only if you request them)</li>
                <li>Improve our website content and user experience</li>
                <li>Analyze website usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-4"><strong>We do not sell your personal information.</strong> We may share your information only in these limited circumstances:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who help us operate our website (web hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to you)</li>
                <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="mb-6">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Third-Party Links</h2>
              <p className="mb-6">
                Our website may contain links to third-party websites, including Medicare.gov and insurance carrier websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Your Rights and Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Access:</strong> Request information about the personal data we have about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Data Retention</h2>
              <p className="mb-6">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Children's Privacy</h2>
              <p className="mb-6">
                Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Contact Us</h2>
              <p className="mb-4">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Through our website contact form</li>
                <li>By email (contact information available on our website)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">12. California Privacy Rights</h2>
              <p className="mb-6">
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}