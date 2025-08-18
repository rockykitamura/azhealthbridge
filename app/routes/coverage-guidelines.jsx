import { Navigation } from '../components/ui/Navigation';
import { Section, SectionHeader, Container, Grid } from '../components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Alert, InfoBox } from '../components/ui/Alert';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { 
  ShieldCheckIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  HeartIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  PhoneIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';

export const meta = () => {
  return [
    { title: "Arizona Medicare Coverage Guidelines 2025 | Complete Guide | AZ Health Bridge" },
    { name: "description", content: "Complete guide to Medicare coverage guidelines in Arizona. Learn about eligibility, enrollment periods, plan options, costs, and Arizona-specific Medicare regulations for 2025." },
    { name: "keywords", content: "Arizona Medicare coverage, Medicare guidelines Arizona, Arizona Medicare eligibility, Medicare enrollment Arizona, Medicare plans Arizona, Arizona Medicare costs, Medicare rules Arizona, Arizona Medicare benefits" },
    { property: "og:title", content: "Arizona Medicare Coverage Guidelines 2025 | Complete Guide" },
    { property: "og:description", content: "Everything you need to know about Medicare coverage in Arizona. Eligibility requirements, enrollment periods, plan options, costs, and state-specific guidelines." },
    { property: "og:type", content: "article" },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "en-us" },
    { name: "geo.region", content: "US-AZ" },
    { name: "geo.placename", content: "Arizona" },
    { name: "author", content: "AZ Health Bridge" },
    { property: "article:section", content: "Medicare Guidelines" },
    { property: "article:tag", content: "Medicare, Arizona, Coverage Guidelines, Health Insurance" },
  ];
};

export default function CoverageGuidelines() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navigation />
      
      <Section padding="xl">
        <Container>
          <SectionHeader 
            title="Arizona Medicare Coverage Guidelines"
            subtitle="Your complete guide to Medicare eligibility, enrollment, and coverage options in the Grand Canyon State"
          />

          {/* Important Notice */}
          <Alert variant="info" className="mb-8">
            <strong>2025 Medicare Updates:</strong> Important changes to Medicare coverage and costs are now in effect. Review your current plan during the Annual Enrollment Period (October 15 - December 7) to ensure you have the best coverage for your needs.
          </Alert>

          {/* Quick Facts Grid */}
          <Grid columns={4} gap="md" responsive={true} className="mb-12">
            <Card variant="primary" padding="lg" className="text-center">
              <CardContent>
                <UserGroupIcon className="h-12 w-12 mx-auto text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">1.4 Million</h3>
                <p className="text-primary-700">Arizona Medicare Beneficiaries</p>
              </CardContent>
            </Card>
            
            <Card variant="secondary" padding="lg" className="text-center">
              <CardContent>
                <MapPinIcon className="h-12 w-12 mx-auto text-secondary-600 mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">15 Counties</h3>
                <p className="text-secondary-700">Covered Statewide</p>
              </CardContent>
            </Card>
            
            <Card variant="sage" padding="lg" className="text-center">
              <CardContent>
                <ClockIcon className="h-12 w-12 mx-auto text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold text-sage-900 mb-2">65+ Age</h3>
                <p className="text-sage-700">Primary Eligibility</p>
              </CardContent>
            </Card>
            
            <Card variant="neutral" padding="lg" className="text-center">
              <CardContent>
                <ShieldCheckIcon className="h-12 w-12 mx-auto text-neutral-600 mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">100%</h3>
                <p className="text-neutral-700">Coverage Guarantee</p>
              </CardContent>
            </Card>
          </Grid>

          {/* Main Content Grid */}
          <Grid columns={3} gap="xl" responsive={true}>
            {/* Main Content */}
            <div className="col-span-2 space-y-8">
              
              {/* Eligibility Requirements */}
              <Card variant="elevated" padding="xl">
                <CardHeader>
                  <CardTitle size="xl" className="flex items-center gap-3">
                    <CheckCircleIcon className="h-8 w-8 text-primary-600" />
                    Medicare Eligibility in Arizona
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Arizona residents are eligible for Medicare under the same federal guidelines that apply nationwide. 
                    Understanding these requirements is crucial for planning your healthcare coverage transition.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
                      <h4 className="text-lg font-semibold text-primary-900 mb-3">Primary Eligibility Criteria</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                          <span><strong>Age 65 or older:</strong> Automatic eligibility regardless of income or health status</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                          <span><strong>Under 65 with disability:</strong> Must receive Social Security Disability Insurance (SSDI) for 24 months</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                          <span><strong>End-Stage Renal Disease (ESRD):</strong> Immediate eligibility at any age</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                          <span><strong>ALS (Lou Gehrig's Disease):</strong> No waiting period required</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary-50 p-6 rounded-xl border-l-4 border-secondary-500">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-3">Arizona Residency Requirements</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <InformationCircleIcon className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                          <span>Legal resident of Arizona (including seasonal residents with primary residence)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <InformationCircleIcon className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                          <span>Must be enrolled in Medicare Part A and/or Part B to access Arizona-specific plan options</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <InformationCircleIcon className="h-5 w-5 text-secondary-600 mt-1 flex-shrink-0" />
                          <span>Snowbirds: Can maintain Arizona plans with proper documentation of residency</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enrollment Periods */}
              <Card variant="elevated" padding="xl">
                <CardHeader>
                  <CardTitle size="xl" className="flex items-center gap-3">
                    <CalendarDaysIcon className="h-8 w-8 text-sage-600" />
                    Arizona Medicare Enrollment Periods
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Understanding Medicare enrollment periods is critical for Arizona residents to avoid penalties 
                    and ensure continuous coverage. Missing deadlines can result in permanent premium increases.
                  </p>

                  <div className="space-y-6">
                    <div className="border border-primary-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="primary" size="lg">Critical</Badge>
                        <h4 className="text-xl font-semibold text-neutral-900">Initial Enrollment Period (IEP)</h4>
                      </div>
                      <p className="text-neutral-700 mb-4">
                        Your first opportunity to enroll in Medicare. This 7-month window is crucial for avoiding late enrollment penalties.
                      </p>
                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li><strong>Duration:</strong> 3 months before your 65th birthday + birth month + 3 months after</li>
                          <li><strong>Coverage Start:</strong> First day of birth month if enrolled during first 3 months</li>
                          <li><strong>Arizona Tip:</strong> Apply early due to processing times for rural counties</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-secondary-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" size="lg">Annual</Badge>
                        <h4 className="text-xl font-semibold text-neutral-900">Annual Enrollment Period (AEP)</h4>
                      </div>
                      <p className="text-neutral-700 mb-4">
                        <strong>October 15 - December 7:</strong> The yearly opportunity to change your Medicare coverage for the following year.
                      </p>
                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li><strong>Switch Plans:</strong> Change from Original Medicare to Medicare Advantage or vice versa</li>
                          <li><strong>Change Providers:</strong> Switch between different Medicare Advantage or Part D plans</li>
                          <li><strong>Arizona Focus:</strong> Review network changes as some plans modify Arizona provider networks annually</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-sage-200 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="sage" size="lg">Special</Badge>
                        <h4 className="text-xl font-semibold text-neutral-900">Special Enrollment Periods (SEP)</h4>
                      </div>
                      <p className="text-neutral-700 mb-4">
                        Life events that qualify you for enrollment outside normal periods.
                      </p>
                      <div className="bg-neutral-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                          <li><strong>Moving:</strong> Relocating within Arizona or to/from Arizona</li>
                          <li><strong>Loss of Coverage:</strong> Losing employer insurance or other creditable coverage</li>
                          <li><strong>Plan Changes:</strong> Your current plan leaving your area or dropping coverage</li>
                          <li><strong>Income Changes:</strong> Qualifying for Medicare Savings Programs or Extra Help</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arizona-Specific Coverage Details */}
              <Card variant="elevated" padding="xl">
                <CardHeader>
                  <CardTitle size="xl" className="flex items-center gap-3">
                    <MapPinIcon className="h-8 w-8 text-primary-600" />
                    Arizona-Specific Medicare Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    While Medicare is a federal program, Arizona has unique characteristics that affect coverage options, 
                    provider networks, and costs for residents throughout the state's 15 counties.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-primary-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-primary-900 mb-4 flex items-center gap-2">
                        <BuildingOffice2Icon className="h-6 w-6" />
                        Medicare Advantage Availability
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-primary-800 mb-2">High Availability Counties</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Maricopa (Phoenix metro)</li>
                            <li>• Pima (Tucson metro)</li>
                            <li>• Pinal (Phoenix suburbs)</li>
                            <li>• Yavapai (Prescott area)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary-800 mb-2">Limited Options Counties</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Rural counties (11 counties)</li>
                            <li>• Tribal lands coverage</li>
                            <li>• Border communities</li>
                            <li>• Remote desert areas</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                        <HeartIcon className="h-6 w-6" />
                        State Health Programs Integration
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-secondary-800">AHCCCS (Arizona Medicaid)</h5>
                          <p className="text-sm text-secondary-700">Dual-eligible beneficiaries receive coordinated care through Arizona's Medicaid program, which works alongside Medicare for comprehensive coverage.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-secondary-800">Arizona State Health Insurance Assistance Program (SHIP)</h5>
                          <p className="text-sm text-secondary-700">Free, unbiased counseling for Medicare beneficiaries, including help with enrollment, plan comparisons, and appeals.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-sage-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-sage-900 mb-4 flex items-center gap-2">
                        <ExclamationTriangleIcon className="h-6 w-6" />
                        Unique Arizona Considerations
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Snowbird Coverage:</strong> Many plans offer temporary out-of-state coverage for seasonal residents who spend winter months in Arizona.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Border Healthcare:</strong> Some plans provide coverage for emergency services in Mexican border communities.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Tribal Land Coverage:</strong> Special considerations for Medicare beneficiaries living on or near tribal lands.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Rural Provider Networks:</strong> Limited specialist availability in rural counties may require travel to Phoenix or Tucson for certain services.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Types */}
              <Card variant="elevated" padding="xl">
                <CardHeader>
                  <CardTitle size="xl" className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-8 w-8 text-secondary-600" />
                    Medicare Coverage Options in Arizona
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Arizona residents have access to all standard Medicare coverage options, with varying availability 
                    depending on geographic location and specific plan offerings in each county.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-neutral-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                        <DocumentTextIcon className="h-6 w-6 text-primary-600" />
                        Original Medicare
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-neutral-800">Part A (Hospital Insurance)</h5>
                          <p className="text-sm text-neutral-600">Covers inpatient hospital stays, skilled nursing facilities, hospice care, and some home health care.</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-neutral-800">Part B (Medical Insurance)</h5>
                          <p className="text-sm text-neutral-600">Covers doctor visits, outpatient care, medical supplies, and preventive services.</p>
                        </div>
                        <div className="bg-neutral-50 p-3 rounded-lg mt-4">
                          <p className="text-sm"><strong>Arizona Advantage:</strong> Wide provider acceptance throughout the state, especially important in rural areas.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-neutral-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                        <HeartIcon className="h-6 w-6 text-secondary-600" />
                        Medicare Advantage (Part C)
                      </h4>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-600">
                          Private insurance plans that replace Original Medicare, often including prescription drug coverage and additional benefits.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Often includes Part D prescription coverage</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">May include dental, vision, hearing aids</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Provider networks vary by county</span>
                          </div>
                        </div>
                        <div className="bg-secondary-50 p-3 rounded-lg mt-4">
                          <p className="text-sm"><strong>Arizona Note:</strong> Best availability in Maricopa and Pima counties; limited options in rural areas.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-neutral-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                        <BanknotesIcon className="h-6 w-6 text-sage-600" />
                        Medicare Supplement (Medigap)
                      </h4>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-600">
                          Private insurance that helps pay for costs not covered by Original Medicare, such as copayments, coinsurance, and deductibles.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Standardized plans (A, B, C, D, F, G, K, L, M, N)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Works with any Medicare-accepting provider</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Guaranteed renewable</span>
                          </div>
                        </div>
                        <div className="bg-sage-50 p-3 rounded-lg mt-4">
                          <p className="text-sm"><strong>Arizona Benefit:</strong> Excellent for snowbirds who travel frequently, as coverage follows you nationwide.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-neutral-200 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                        <EyeIcon className="h-6 w-6 text-primary-600" />
                        Part D Prescription Drug Coverage
                      </h4>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-600">
                          Prescription drug coverage available through standalone Part D plans or included in most Medicare Advantage plans.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Formulary (covered drug list) varies by plan</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Pharmacy networks include major chains</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircleIcon className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Mail-order options available</span>
                          </div>
                        </div>
                        <div className="bg-primary-50 p-3 rounded-lg mt-4">
                          <p className="text-sm"><strong>Arizona Access:</strong> All major pharmacy chains (CVS, Walgreens, Fry's, Safeway) participate in most networks.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Costs and Financial Assistance */}
              <Card variant="elevated" padding="xl">
                <CardHeader>
                  <CardTitle size="xl" className="flex items-center gap-3">
                    <BanknotesIcon className="h-8 w-8 text-sage-600" />
                    Medicare Costs in Arizona (2025)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Understanding Medicare costs helps Arizona residents budget for healthcare expenses and choose 
                    the most cost-effective coverage options for their needs.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-neutral-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-neutral-900 mb-4">Standard Medicare Costs (2025)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-neutral-800 mb-3">Part A (Hospital Insurance)</h5>
                          <ul className="space-y-2 text-sm">
                            <li><strong>Premium:</strong> $0 for most people (if you or spouse paid Medicare taxes for 10+ years)</li>
                            <li><strong>Deductible:</strong> $1,676 per benefit period</li>
                            <li><strong>Coinsurance:</strong> $419/day (days 61-90), $838/day (days 91-150)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-neutral-800 mb-3">Part B (Medical Insurance)</h5>
                          <ul className="space-y-2 text-sm">
                            <li><strong>Standard Premium:</strong> $185/month</li>
                            <li><strong>Deductible:</strong> $240 annually</li>
                            <li><strong>Coinsurance:</strong> 20% of Medicare-approved amount</li>
                            <li><strong>IRMAA:</strong> Higher earners pay additional premium</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-primary-900 mb-4">Financial Assistance Programs</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-semibold text-primary-800">Medicare Savings Programs (MSP)</h5>
                          <p className="text-sm text-primary-700 mb-2">Arizona administers federal programs to help pay Medicare premiums and cost-sharing:</p>
                          <ul className="text-sm space-y-1 ml-4">
                            <li>• <strong>QMB:</strong> Pays Part A and B premiums, deductibles, coinsurance</li>
                            <li>• <strong>SLMB:</strong> Pays Part B premiums only</li>
                            <li>• <strong>QI:</strong> Limited assistance with Part B premiums</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-primary-800">Extra Help (Low Income Subsidy)</h5>
                          <p className="text-sm text-primary-700">Helps pay Part D prescription drug costs for qualifying individuals with limited income and resources.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-sage-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-sage-900 mb-4">Arizona-Specific Cost Considerations</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <InformationCircleIcon className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Regional Pricing:</strong> Medicare Advantage and Part D plan premiums may vary between Arizona counties due to local healthcare costs.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <InformationCircleIcon className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Rural Healthcare Costs:</strong> Limited provider networks in rural counties may result in higher out-of-pocket costs for specialist care.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <InformationCircleIcon className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                          <div>
                            <strong>Snowbird Considerations:</strong> Additional costs may apply for out-of-network care in other states during seasonal residence.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Quick Reference */}
              <Card variant="elevated" padding="lg" className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-2 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <PhoneIcon className="h-6 w-6" />
                    Quick Reference
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                        <PhoneIcon className="h-5 w-5" />
                        Important Phone Numbers
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex flex-col">
                          <span className="text-white font-semibold">Medicare</span>
                          <span className="text-white/90 text-lg font-mono">1-800-MEDICARE</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="text-white font-semibold">Arizona SHIP</span>
                          <span className="text-white/90 text-lg font-mono">1-800-432-4040</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="text-white font-semibold">AHCCCS</span>
                          <span className="text-white/90 text-lg font-mono">1-855-432-7587</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="text-white font-semibold">Social Security</span>
                          <span className="text-white/90 text-lg font-mono">1-800-772-1213</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <h4 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                        <InformationCircleIcon className="h-5 w-5" />
                        Key Websites
                      </h4>
                      <ul className="space-y-3">
                        <li className="text-white/90 text-lg font-mono">Medicare.gov</li>
                        <li className="text-white/90 text-lg font-mono">MyMedicare.gov</li>
                        <li className="text-white/90 text-lg font-mono">AHCCCS.gov</li>
                        <li className="text-white/90 text-lg font-mono">SSA.gov</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* County Resources */}
              <Card variant="secondary" padding="lg">
                <CardHeader>
                  <CardTitle>Arizona County Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Major Population Centers</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Maricopa County:</strong> Phoenix, Mesa, Scottsdale, Tempe, Glendale</li>
                        <li><strong>Pima County:</strong> Tucson, Oro Valley, Marana, Sahuarita</li>
                        <li><strong>Pinal County:</strong> Casa Grande, Maricopa, Apache Junction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Rural Counties</h4>
                      <ul className="space-y-1 text-sm">
                        <li>Apache, Cochise, Coconino</li>
                        <li>Gila, Graham, Greenlee</li>
                        <li>La Paz, Mohave, Navajo</li>
                        <li>Santa Cruz, Yavapai, Yuma</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <InfoBox 
                title="Ready to Explore Your Options?" 
                icon={PhoneIcon}
                className="bg-gradient-to-br from-sage-50 to-sage-100"
              >
                <p className="mb-4">
                  Understanding Arizona Medicare guidelines is the first step. Now learn about specific plan options available in your county.
                </p>
                <div className="space-y-3">
                  <Button variant="sage" size="md" fullWidth icon={DocumentTextIcon}>
                    Compare Plans
                  </Button>
                  <Button variant="outline" size="md" fullWidth icon={CalendarDaysIcon}>
                    Find Enrollment Dates
                  </Button>
                </div>
              </InfoBox>

              {/* Newsletter Signup */}
              <Card variant="neutral" padding="lg">
                <CardContent>
                  <h4 className="font-semibold text-neutral-900 mb-3">Stay Updated</h4>
                  <p className="text-sm text-neutral-700 mb-4">
                    Get notified about Medicare changes, enrollment deadlines, and Arizona-specific updates.
                  </p>
                  <Button variant="neutral" size="sm" fullWidth>
                    Get Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Grid>

          {/* Bottom CTA Section */}
          <section className="mt-16">
            <Card variant="sage" padding="xl">
              <CardContent className="text-center">
                <h3 className="text-2xl font-semibold text-sage-900 mb-4">
                  Need Help Navigating Arizona Medicare Options?
                </h3>
                <p className="text-lg text-sage-700 mb-6 max-w-3xl mx-auto">
                  Medicare can be complex, especially with Arizona's unique geographic and demographic considerations. 
                  Our comprehensive resources help you understand your options and make informed decisions about your healthcare coverage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="sage" size="xl" icon={DocumentTextIcon}>
                    View Plan Comparison Guide
                  </Button>
                  <Button variant="outline" size="xl" icon={PhoneIcon}>
                    Contact Local Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </Container>
      </Section>
    </div>
  );
}