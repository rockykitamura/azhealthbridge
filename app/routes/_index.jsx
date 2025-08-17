import { Navigation } from '../components/ui/Navigation';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Badge, StatusBadge } from '../components/ui/Badge';
import { Input, Select, Textarea } from '../components/ui/Input';
import { Alert, InfoBox } from '../components/ui/Alert';
import { Section, SectionHeader, Container, Grid } from '../components/ui/Section';

export const meta = () => {
  return [
    { title: "Arizona Medicare Plans 2025 | Compare Medicare Advantage & Supplement Plans" },
    { name: "description", content: "Compare 2025 Medicare plans in Arizona. Learn about Medicare Advantage, Medicare Supplement (Medigap), and Part D plans. Information resource serving all 15 Arizona counties." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <Section background="gradient" padding="2xl">
        <div className="text-center">
          <Badge variant="primary" size="lg" icon="🌟" className="mb-6">
            2025 Medicare Plans Now Available
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Your Trusted Arizona
            <span className="text-primary-500 block mt-2">Medicare Resource</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-neutral-700 max-w-3xl mx-auto mb-10">
            Clear, simple Medicare guidance designed for Arizona seniors. 
            Compare plans, understand your options, and make confident decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="xl" icon="📋">
              Compare 2025 Plans
            </Button>
            <Button variant="outline" size="xl" icon="📚">
              Medicare Guide
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-sage-600 text-2xl">✓</span>
              <span className="text-neutral-700">Free Information</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sage-600 text-2xl">✓</span>
              <span className="text-neutral-700">No Obligations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sage-600 text-2xl">✓</span>
              <span className="text-neutral-700">Easy to Understand</span>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Alert Banner */}
      <Section padding="sm">
        <Alert variant="info" title="Medicare Annual Enrollment Period">
          The Annual Enrollment Period runs from October 15 through December 7. 
          Now is the perfect time to review your Medicare coverage for 2025.
        </Alert>
      </Section>
      
      {/* Medicare Plans Section */}
      <Section id="plans" padding="xl">
        <SectionHeader 
          title="Medicare Plans in Arizona"
          subtitle="Choose the coverage that fits your needs and budget"
        />
        
        <Grid columns={3} gap="lg">
          <Card variant="primary" hover padding="lg">
            <CardHeader>
              <StatusBadge status="popular" className="mb-4" />
              <CardTitle size="lg">Medicare Advantage</CardTitle>
              <CardDescription>
                All-in-one Medicare coverage with extra benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Hospital & Medical coverage (Parts A & B)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Usually includes prescription drugs (Part D)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Extra benefits: dental, vision, hearing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>$0 premium plans available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Fitness programs included</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary" fullWidth size="lg">
                View Advantage Plans
              </Button>
            </CardFooter>
          </Card>
          
          <Card variant="secondary" hover padding="lg">
            <CardHeader>
              <StatusBadge status="recommended" className="mb-4" />
              <CardTitle size="lg">Medicare Supplement</CardTitle>
              <CardDescription>
                Fill the gaps in Original Medicare coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Works with Original Medicare</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>No network restrictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>See any Medicare doctor nationwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Predictable out-of-pocket costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Foreign travel emergency coverage</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" fullWidth size="lg">
                View Supplement Plans
              </Button>
            </CardFooter>
          </Card>
          
          <Card variant="sage" hover padding="lg">
            <CardHeader>
              <StatusBadge status="new" className="mb-4" />
              <CardTitle size="lg">Part D Prescription</CardTitle>
              <CardDescription>
                Standalone prescription drug coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Coverage for prescription medications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Works with Original Medicare</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Network pharmacies statewide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Mail-order options available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600 text-xl mt-1">✓</span>
                  <span>Extra Help programs for low income</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="sage" fullWidth size="lg">
                View Part D Plans
              </Button>
            </CardFooter>
          </Card>
        </Grid>
      </Section>
      
      {/* Info Box */}
      <Section padding="md">
        <Container size="sm">
          <InfoBox title="Not Sure Which Plan is Right for You?" icon="💡">
            Each Medicare plan type has its own advantages. Medicare Advantage offers convenience and extra benefits, 
            while Medicare Supplement provides flexibility and predictable costs. We're here to help you understand 
            your options without any pressure or obligations.
          </InfoBox>
        </Container>
      </Section>
      
      {/* Service Areas */}
      <Section id="counties" background="light" padding="xl">
        <SectionHeader 
          title="Serving All Arizona Counties"
          subtitle="Local Medicare information for your area"
        />
        
        <Grid columns={4} gap="md">
          {[
            'Maricopa (Phoenix)',
            'Pima (Tucson)',
            'Pinal',
            'Yavapai',
            'Mohave',
            'Coconino',
            'Cochise',
            'Navajo',
            'Apache',
            'Gila',
            'Santa Cruz',
            'Yuma',
            'La Paz',
            'Graham',
            'Greenlee'
          ].map((county) => (
            <Card key={county} variant="default" hover padding="md">
              <div className="text-center">
                <span className="text-3xl mb-2 block">📍</span>
                <p className="font-semibold text-lg text-neutral-800">{county}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>
      
      {/* Resources Section */}
      <Section id="resources" padding="xl">
        <SectionHeader 
          title="Medicare Resources & Tools"
          subtitle="Everything you need to make informed decisions"
        />
        
        <Grid columns={3} gap="lg">
          <Card variant="elevated" hover padding="lg">
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📖</span>
              </div>
              <CardTitle size="md">Medicare Basics Guide</CardTitle>
              <CardDescription>
                Learn the fundamentals of Medicare Parts A, B, C, and D
              </CardDescription>
              <div className="mt-6">
                <Button variant="secondary" size="md">
                  Read Guide
                </Button>
              </div>
            </div>
          </Card>
          
          <Card variant="elevated" hover padding="lg">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <CardTitle size="md">Plan Comparison Tool</CardTitle>
              <CardDescription>
                Compare Medicare plans side-by-side to find your best fit
              </CardDescription>
              <div className="mt-6">
                <Button variant="primary" size="md">
                  Compare Plans
                </Button>
              </div>
            </div>
          </Card>
          
          <Card variant="elevated" hover padding="lg">
            <div className="text-center">
              <div className="w-20 h-20 bg-sage-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📅</span>
              </div>
              <CardTitle size="md">Enrollment Calendar</CardTitle>
              <CardDescription>
                Important Medicare enrollment dates and deadlines
              </CardDescription>
              <div className="mt-6">
                <Button variant="sage" size="md">
                  View Dates
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
      </Section>
      
      {/* Contact Form */}
      <Section id="contact" background="gradient" padding="xl">
        <Container size="sm">
          <SectionHeader 
            title="Get Your Free Medicare Guide"
            subtitle="We'll send you easy-to-understand information about your Medicare options"
          />
          
          <Card variant="elevated" padding="xl">
            <form className="space-y-6">
              <Grid columns={2} gap="md">
                <Input 
                  label="First Name"
                  placeholder="John"
                  required
                />
                <Input 
                  label="Last Name"
                  placeholder="Smith"
                  required
                />
              </Grid>
              
              <Input 
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                helper="We'll never share your email"
                required
              />
              
              <Grid columns={2} gap="md">
                <Input 
                  label="ZIP Code"
                  placeholder="85001"
                  helper="To show plans in your area"
                  required
                />
                <Select 
                  label="Medicare Status"
                  options={[
                    'New to Medicare',
                    'Currently on Medicare',
                    'Planning Ahead',
                    'Helping Someone Else'
                  ]}
                  required
                />
              </Grid>
              
              <Select 
                label="Primary Interest"
                options={[
                  'Medicare Advantage Plans',
                  'Medicare Supplement Plans',
                  'Part D Prescription Plans',
                  'Not Sure - Need Information',
                  'All Medicare Options'
                ]}
                helper="We'll customize information based on your interests"
              />
              
              <Textarea 
                label="Questions or Comments (Optional)"
                placeholder="Tell us how we can help you..."
                rows={4}
              />
              
              <Alert variant="neutral">
                <strong>Privacy Promise:</strong> Your information is secure and will never be sold. 
                We respect your privacy and will only use your information to provide Medicare resources.
              </Alert>
              
              <Button variant="primary" size="xl" fullWidth>
                Get My Free Guide
              </Button>
            </form>
          </Card>
        </Container>
      </Section>
      
      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <Container>
          <Grid columns={4} gap="lg">
            <div>
              <h3 className="text-xl font-bold mb-4">AZ Health Bridge</h3>
              <p className="text-neutral-400 text-lg">
                Your comprehensive Arizona Medicare information resource.
              </p>
              <div className="mt-6 flex gap-4">
                <Button variant="ghost" size="sm">
                  <span className="text-2xl">📧</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <span className="text-2xl">📘</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <span className="text-2xl">🐦</span>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-lg">
                <li><a href="/medicare-basics" className="text-neutral-400 hover:text-white transition-colors">Medicare Basics</a></li>
                <li><a href="/plan-types" className="text-neutral-400 hover:text-white transition-colors">Plan Types</a></li>
                <li><a href="/enrollment" className="text-neutral-400 hover:text-white transition-colors">Enrollment Periods</a></li>
                <li><a href="/faqs" className="text-neutral-400 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-3 text-lg">
                <li><a href="/phoenix-medicare" className="text-neutral-400 hover:text-white transition-colors">Phoenix Medicare</a></li>
                <li><a href="/tucson-medicare" className="text-neutral-400 hover:text-white transition-colors">Tucson Medicare</a></li>
                <li><a href="/scottsdale-medicare" className="text-neutral-400 hover:text-white transition-colors">Scottsdale Medicare</a></li>
                <li><a href="/arizona-counties" className="text-neutral-400 hover:text-white transition-colors">All Arizona Counties</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-lg">
                <li><a href="https://www.medicare.gov" className="text-neutral-400 hover:text-white transition-colors">Medicare.gov</a></li>
                <li><a href="/plan-finder" className="text-neutral-400 hover:text-white transition-colors">Plan Finder Tool</a></li>
                <li><a href="/coverage-guidelines" className="text-neutral-400 hover:text-white transition-colors">Coverage Guidelines</a></li>
                <li><a href="/glossary" className="text-neutral-400 hover:text-white transition-colors">Medicare Glossary</a></li>
              </ul>
            </div>
          </Grid>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p className="text-neutral-400 text-lg">
              © 2025 AZ Health Bridge. All rights reserved. | Arizona Medicare Information Resource
            </p>
            <div className="mt-4 flex justify-center gap-6 text-base">
              <a href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="/accessibility" className="text-neutral-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}