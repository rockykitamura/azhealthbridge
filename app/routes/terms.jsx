import { Navigation } from '../components/ui/Navigation';
import { Section, SectionHeader, Container } from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';

export const meta = () => {
  return [
    { title: "Terms of Use | AZ Health Bridge" },
    { name: "description", content: "Terms of Use for AZ Health Bridge Medicare information resource." },
    { name: "robots", content: "noindex, follow" },
  ];
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navigation />
      
      <Section padding="xl">
        <Container size="sm">
          <SectionHeader 
            title="Terms of Use"
            subtitle="Last updated: January 2025"
            centered={false}
          />
          
          <Card variant="elevated" padding="xl">
            <CardContent className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using the AZ Health Bridge website ("Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Information Purpose</h2>
              <p className="mb-6">
                AZ Health Bridge is an informational resource about Medicare plans available in Arizona. We provide educational content to help seniors understand their Medicare options. We are not a Medicare broker or insurance agent.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. No Medical or Insurance Advice</h2>
              <p className="mb-6">
                The information provided on this Website is for educational purposes only and should not be considered medical, legal, or insurance advice. Always consult with qualified healthcare professionals and Medicare experts for personalized guidance.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Accuracy of Information</h2>
              <p className="mb-6">
                While we strive to provide accurate and up-to-date information about Medicare plans, benefits, and regulations, Medicare information changes frequently. We cannot guarantee the accuracy, completeness, or timeliness of all information presented.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. External Links</h2>
              <p className="mb-6">
                Our Website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies or content.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Prohibited Uses</h2>
              <p className="mb-4">You may not use our Website:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Intellectual Property</h2>
              <p className="mb-6">
                The Website and its original content, features, and functionality are and will remain the exclusive property of AZ Health Bridge and its licensors. The Website is protected by copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Disclaimer</h2>
              <p className="mb-6">
                The information on this Website is provided on an "as is" basis. To the fullest extent permitted by law, AZ Health Bridge excludes all representations, warranties, conditions, and other terms.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Limitation of Liability</h2>
              <p className="mb-6">
                In no event shall AZ Health Bridge, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Contact Information</h2>
              <p className="mb-6">
                If you have any questions about these Terms of Use, please contact us through our website contact form.
              </p>

              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">12. Governing Law</h2>
              <p className="mb-0">
                These Terms shall be interpreted and governed by the laws of the State of Arizona, United States of America.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}