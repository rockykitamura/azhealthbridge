import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from '@remix-run/react';
import { Navigation } from '../components/ui/Navigation';
import { Section, SectionHeader, Container, Grid } from '../components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { Input, Select } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Alert, InfoBox } from '../components/ui/Alert';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  StarIcon,
  CheckCircleIcon,
  XMarkIcon,
  InformationCircleIcon,
  ArrowsUpDownIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PhoneIcon,
  HeartIcon,
  EyeIcon,
  SparklesIcon,
  TruckIcon,
  GlobeAltIcon,
  BeakerIcon,
  UserGroupIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { 
  arizonaMedicarePlans, 
  arizonaCounties, 
  planTypes, 
  premiumRanges,
  benefitPriorities 
} from '../data/arizonaMedicarePlans';

export const meta = () => {
  return [
    { title: "Arizona Medicare Plan Finder 2025 | Compare Plans & Prices | AZ Health Bridge" },
    { name: "description", content: "Find and compare Medicare Advantage, Medicare Supplement, and Part D plans in Arizona. Free plan finder tool with real-time filtering by county, premium, benefits, and star ratings." },
    { name: "keywords", content: "Arizona Medicare plan finder, compare Medicare plans Arizona, Medicare Advantage Arizona, Medicare Supplement Arizona, Part D plans Arizona, Medicare plan comparison, Arizona Medicare costs, find Medicare plans" },
    { property: "og:title", content: "Arizona Medicare Plan Finder | Compare All Plans & Save" },
    { property: "og:description", content: "Compare Medicare plans available in your Arizona county. Filter by premium, benefits, star ratings, and more. Find the perfect Medicare plan for your needs and budget." },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/medicare-plan-finder-og.jpg" },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "en-us" },
    { name: "geo.region", content: "US-AZ" },
    { name: "geo.placename", content: "Arizona" },
    { property: "article:section", content: "Medicare Plans" },
    { property: "article:tag", content: "Medicare, Plan Finder, Arizona, Healthcare" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Find Your Perfect Arizona Medicare Plan" },
    { name: "twitter:description", content: "Compare all Medicare plans in Arizona with our free tool" },
  ];
};

// Helper function to render star ratings
function StarRating({ rating }) {
  if (!rating) return <span className="text-sm text-neutral-500">Not rated</span>;
  
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIconSolid
          key={i}
          className={`h-5 w-5 ${
            i < fullStars 
              ? 'text-yellow-400' 
              : i === fullStars && hasHalfStar
              ? 'text-yellow-400 opacity-50'
              : 'text-neutral-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-semibold text-neutral-700">{rating}/5</span>
    </div>
  );
}

export default function PlanFinder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCounty, setSelectedCounty] = useState(searchParams.get('county') || '');
  const [selectedPlanType, setSelectedPlanType] = useState(searchParams.get('type') || 'all');
  const [selectedPremiumRange, setSelectedPremiumRange] = useState(searchParams.get('premium') || 'all');
  const [selectedBenefits, setSelectedBenefits] = useState(
    searchParams.get('benefits') ? searchParams.get('benefits').split(',') : []
  );
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'premium');
  const [showFilters, setShowFilters] = useState(true);
  const [compareList, setCompareList] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCounty) params.set('county', selectedCounty);
    if (selectedPlanType !== 'all') params.set('type', selectedPlanType);
    if (selectedPremiumRange !== 'all') params.set('premium', selectedPremiumRange);
    if (selectedBenefits.length > 0) params.set('benefits', selectedBenefits.join(','));
    if (sortBy !== 'premium') params.set('sort', sortBy);
    setSearchParams(params, { replace: true });
  }, [selectedCounty, selectedPlanType, selectedPremiumRange, selectedBenefits, sortBy, setSearchParams]);

  // Filter and sort plans
  const filteredPlans = useMemo(() => {
    let filtered = [...arizonaMedicarePlans];

    // Filter by county
    if (selectedCounty) {
      filtered = filtered.filter(plan => 
        !plan.counties || 
        plan.counties.includes("All Arizona counties") || 
        plan.counties.includes(selectedCounty)
      );
    }

    // Filter by plan type
    if (selectedPlanType !== 'all') {
      filtered = filtered.filter(plan => 
        plan.type.includes(selectedPlanType) ||
        (selectedPlanType === 'Medicare Supplement' && plan.type.includes('Medigap')) ||
        (selectedPlanType === 'Part D' && plan.type.includes('Part D'))
      );
    }

    // Filter by premium range
    if (selectedPremiumRange !== 'all') {
      const range = premiumRanges.find(r => r.value === selectedPremiumRange);
      if (range) {
        filtered = filtered.filter(plan => 
          plan.monthlyPremium >= range.min && plan.monthlyPremium <= range.max
        );
      }
    }

    // Filter by selected benefits
    if (selectedBenefits.length > 0) {
      filtered = filtered.filter(plan => {
        return selectedBenefits.every(benefit => {
          if (!plan.benefits) return false;
          switch(benefit) {
            case 'prescription': return plan.benefits.prescriptionDrugs || plan.type.includes('Part D');
            case 'dental': return plan.benefits.dental && plan.benefits.dental !== 'Not covered';
            case 'vision': return plan.benefits.vision && plan.benefits.vision !== 'Not covered';
            case 'hearing': return plan.benefits.hearing && plan.benefits.hearing !== 'Not covered';
            case 'fitness': return plan.benefits.fitness;
            case 'otc': return plan.benefits.otc;
            case 'transportation': return plan.benefits.transportation;
            case 'worldwide': return plan.benefits.worldwideCoverage;
            default: return false;
          }
        });
      });
    }

    // Sort plans
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'premium':
          return a.monthlyPremium - b.monthlyPremium;
        case 'rating':
          return (b.starRating || 0) - (a.starRating || 0);
        case 'oop':
          return (a.maxOutOfPocket || 99999) - (b.maxOutOfPocket || 99999);
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCounty, selectedPlanType, selectedPremiumRange, selectedBenefits, sortBy]);

  // Add/remove plans from comparison
  const toggleCompare = (planId) => {
    if (compareList.includes(planId)) {
      setCompareList(compareList.filter(id => id !== planId));
    } else if (compareList.length < 3) {
      setCompareList([...compareList, planId]);
    }
  };

  // Get county info
  const countyInfo = selectedCounty ? arizonaCounties.find(c => c.name === selectedCounty) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navigation />
      
      <Section padding="xl">
        <Container>
          <SectionHeader 
            title="Arizona Medicare Plan Finder"
            subtitle="Compare Medicare Advantage, Medicare Supplement, and Part D plans available in your county"
          />

          {/* Important Notice */}
          <Alert variant="info" className="mb-8">
            <strong>2025 Plan Year:</strong> Plans and prices shown are for the 2025 coverage year. 
            During Annual Enrollment (October 15 - December 7), you can change plans for coverage starting January 1, 2025.
          </Alert>

          {/* Filters Section */}
          <Card variant="elevated" padding="lg" className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle size="lg" className="flex items-center gap-2">
                  <FunnelIcon className="h-6 w-6 text-primary-600" />
                  Filter Medicare Plans
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  icon={showFilters ? XMarkIcon : FunnelIcon}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>
            </CardHeader>
            
            {showFilters && (
              <CardContent>
                <Grid columns={4} gap="lg" responsive={true}>
                  {/* County Selection */}
                  <div>
                    <Select
                      label="Select Your County"
                      value={selectedCounty}
                      onChange={(e) => setSelectedCounty(e.target.value)}
                      required
                    >
                      <option value="">Choose County...</option>
                      {arizonaCounties.map(county => (
                        <option key={county.name} value={county.name}>
                          {county.name} County - {county.majorCity}
                        </option>
                      ))}
                    </Select>
                    {countyInfo && (
                      <p className="text-sm text-neutral-600 mt-2">
                        Plan availability: <Badge variant={
                          countyInfo.planAvailability === 'extensive' ? 'primary' :
                          countyInfo.planAvailability === 'good' ? 'secondary' :
                          countyInfo.planAvailability === 'moderate' ? 'sage' :
                          'neutral'
                        } size="sm">{countyInfo.planAvailability}</Badge>
                      </p>
                    )}
                  </div>

                  {/* Plan Type */}
                  <div>
                    <Select
                      label="Plan Type"
                      value={selectedPlanType}
                      onChange={(e) => setSelectedPlanType(e.target.value)}
                    >
                      {planTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  {/* Premium Range */}
                  <div>
                    <Select
                      label="Monthly Premium"
                      value={selectedPremiumRange}
                      onChange={(e) => setSelectedPremiumRange(e.target.value)}
                    >
                      {premiumRanges.map(range => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </Select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <Select
                      label="Sort By"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="premium">Lowest Premium</option>
                      <option value="rating">Highest Star Rating</option>
                      <option value="oop">Lowest Out-of-Pocket</option>
                      <option value="name">Plan Name (A-Z)</option>
                    </Select>
                  </div>
                </Grid>

                {/* Benefit Priorities */}
                <div className="mt-6">
                  <label className="block text-lg font-semibold text-neutral-800 mb-3">
                    Important Benefits (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {benefitPriorities.map(benefit => (
                      <label
                        key={benefit.value}
                        className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedBenefits.includes(benefit.value)
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedBenefits.includes(benefit.value)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBenefits([...selectedBenefits, benefit.value]);
                            } else {
                              setSelectedBenefits(selectedBenefits.filter(b => b !== benefit.value));
                            }
                          }}
                          className="sr-only"
                        />
                        <span className={`flex items-center gap-2 ${
                          selectedBenefits.includes(benefit.value) ? 'text-primary-700' : 'text-neutral-700'
                        }`}>
                          {benefit.value === 'prescription' && <BeakerIcon className="h-5 w-5" />}
                          {benefit.value === 'dental' && <SparklesIcon className="h-5 w-5" />}
                          {benefit.value === 'vision' && <EyeIcon className="h-5 w-5" />}
                          {benefit.value === 'hearing' && <HeartIcon className="h-5 w-5" />}
                          {benefit.value === 'fitness' && <UserGroupIcon className="h-5 w-5" />}
                          {benefit.value === 'otc' && <ShieldCheckIcon className="h-5 w-5" />}
                          {benefit.value === 'transportation' && <TruckIcon className="h-5 w-5" />}
                          {benefit.value === 'worldwide' && <GlobeAltIcon className="h-5 w-5" />}
                          {benefit.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedCounty || selectedPlanType !== 'all' || selectedPremiumRange !== 'all' || selectedBenefits.length > 0) && (
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm text-neutral-600">
                      Active filters applied
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedCounty('');
                        setSelectedPlanType('all');
                        setSelectedPremiumRange('all');
                        setSelectedBenefits([]);
                      }}
                      icon={XMarkIcon}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </CardContent>
            )}
          </Card>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-lg text-neutral-700">
              Found <span className="font-bold text-primary-600">{filteredPlans.length}</span> plans
              {selectedCounty && ` available in ${selectedCounty} County`}
            </p>
            {compareList.length > 0 && (
              <Button
                variant="primary"
                size="md"
                onClick={() => setShowComparison(true)}
                icon={ChartBarIcon}
              >
                Compare {compareList.length} Plans
              </Button>
            )}
          </div>

          {/* No County Selected Warning */}
          {!selectedCounty && (
            <Alert variant="warning" className="mb-6">
              <strong>Select your county</strong> to see accurate plan availability and pricing for your area.
            </Alert>
          )}

          {/* Plans Grid */}
          {filteredPlans.length === 0 ? (
            <Alert variant="info">
              <strong>No plans found.</strong> Try adjusting your filters to see more options.
            </Alert>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPlans.map(plan => (
                <Card 
                  key={plan.id} 
                  variant="elevated" 
                  padding="lg"
                  className={`hover:shadow-xl transition-all duration-300 ${
                    compareList.includes(plan.id) ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle size="md" className="text-primary-600">
                            {plan.name}
                          </CardTitle>
                          <p className="text-sm text-neutral-600 mt-1">{plan.carrier}</p>
                        </div>
                        {plan.starRating && (
                          <div className="text-right">
                            <StarRating rating={plan.starRating} />
                          </div>
                        )}
                      </div>
                      <Badge variant={
                        plan.type.includes('HMO') ? 'primary' :
                        plan.type.includes('PPO') ? 'secondary' :
                        plan.type.includes('SNP') ? 'sage' :
                        plan.type.includes('Supplement') ? 'neutral' :
                        'primary'
                      } size="sm">
                        {plan.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Pricing */}
                    <div className="bg-primary-50 p-4 rounded-xl">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <p className="text-sm text-primary-700 font-medium">Monthly Premium</p>
                          <p className="text-3xl font-bold text-primary-900">
                            ${plan.monthlyPremium}
                          </p>
                        </div>
                        {plan.maxOutOfPocket !== undefined && plan.maxOutOfPocket !== null && (
                          <div className="text-right">
                            <p className="text-sm text-primary-700">Max Out-of-Pocket</p>
                            <p className="text-lg font-semibold text-primary-900">
                              {plan.maxOutOfPocket === 0 ? '$0' : `$${plan.maxOutOfPocket.toLocaleString()}`}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key Features */}
                    {plan.features && (
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-800 mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {plan.features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircleIcon className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-neutral-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Benefits Icons */}
                    {plan.benefits && (
                      <div className="flex flex-wrap gap-2">
                        {plan.benefits.prescriptionDrugs && (
                          <Badge variant="neutral" size="sm">Rx</Badge>
                        )}
                        {plan.benefits.dental && plan.benefits.dental !== 'Not covered' && (
                          <Badge variant="neutral" size="sm">Dental</Badge>
                        )}
                        {plan.benefits.vision && plan.benefits.vision !== 'Not covered' && (
                          <Badge variant="neutral" size="sm">Vision</Badge>
                        )}
                        {plan.benefits.hearing && plan.benefits.hearing !== 'Not covered' && (
                          <Badge variant="neutral" size="sm">Hearing</Badge>
                        )}
                        {plan.benefits.fitness && (
                          <Badge variant="neutral" size="sm">Fitness</Badge>
                        )}
                      </div>
                    )}

                    {/* Best For */}
                    {plan.bestFor && (
                      <div className="pt-3 border-t border-neutral-200">
                        <p className="text-sm text-neutral-600">
                          <span className="font-semibold">Best for:</span> {plan.bestFor}
                        </p>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="space-y-3">
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      icon={DocumentTextIcon}
                    >
                      View Details
                    </Button>
                    <Button
                      variant={compareList.includes(plan.id) ? 'secondary' : 'outline'}
                      size="sm"
                      fullWidth
                      onClick={() => toggleCompare(plan.id)}
                      icon={ChartBarIcon}
                    >
                      {compareList.includes(plan.id) ? 'Remove from Compare' : 'Add to Compare'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {/* Comparison Modal (simplified) */}
          {showComparison && compareList.length > 0 && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
                <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-neutral-900">Compare Plans</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowComparison(false)}
                    icon={XMarkIcon}
                  >
                    Close
                  </Button>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {compareList.map(planId => {
                      const plan = arizonaMedicarePlans.find(p => p.id === planId);
                      if (!plan) return null;
                      return (
                        <div key={planId} className="border rounded-xl p-4">
                          <h3 className="font-bold text-lg text-primary-600">{plan.name}</h3>
                          <p className="text-sm text-neutral-600 mb-4">{plan.carrier}</p>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-neutral-600">Monthly Premium</p>
                              <p className="text-2xl font-bold">${plan.monthlyPremium}</p>
                            </div>
                            {plan.maxOutOfPocket !== undefined && plan.maxOutOfPocket !== null && (
                              <div>
                                <p className="text-sm text-neutral-600">Max Out-of-Pocket</p>
                                <p className="text-lg font-semibold">
                                  {plan.maxOutOfPocket === 0 ? '$0' : `$${plan.maxOutOfPocket.toLocaleString()}`}
                                </p>
                              </div>
                            )}
                            {plan.starRating && (
                              <div>
                                <p className="text-sm text-neutral-600">Star Rating</p>
                                <StarRating rating={plan.starRating} />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO Content Section */}
          <section className="mt-16">
            <Card variant="sage" padding="xl">
              <CardHeader>
                <CardTitle size="xl" className="flex items-center gap-3">
                  <InformationCircleIcon className="h-8 w-8 text-sage-600" />
                  Finding the Right Medicare Plan in Arizona
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-sage-900 mb-4">How to Use the Arizona Medicare Plan Finder</h3>
                <p className="mb-6">
                  Our Medicare Plan Finder helps Arizona residents compare all available Medicare options in their county. 
                  With over 100 Medicare plans available across Arizona's 15 counties, finding the right coverage can be overwhelming. 
                  This tool simplifies your search by filtering plans based on your specific needs, location, and budget.
                </p>

                <h3 className="text-xl font-semibold text-sage-900 mb-4">Understanding Plan Availability by County</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Extensive Coverage Counties</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Maricopa County (Phoenix Metro): 50+ plans available</li>
                      <li>Pima County (Tucson Metro): 40+ plans available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Limited Coverage Counties</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Rural counties may have 10-15 plans</li>
                      <li>Medicare Supplement plans available statewide</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-sage-900 mb-4">Key Factors When Choosing a Medicare Plan</h3>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Monthly Premium:</strong> The amount you pay each month for coverage. Many Medicare Advantage plans offer $0 premiums.
                  </li>
                  <li>
                    <strong>Out-of-Pocket Maximum:</strong> The most you'll pay for covered services in a year. Critical for protecting against high medical costs.
                  </li>
                  <li>
                    <strong>Prescription Drug Coverage:</strong> Ensure your medications are covered and check the plan's formulary.
                  </li>
                  <li>
                    <strong>Provider Network:</strong> Verify your doctors and hospitals are in-network, especially important for HMO plans.
                  </li>
                  <li>
                    <strong>Extra Benefits:</strong> Many Arizona Medicare Advantage plans include dental, vision, hearing, and fitness benefits.
                  </li>
                  <li>
                    <strong>Star Ratings:</strong> Medicare rates plans from 1-5 stars based on quality and customer satisfaction.
                  </li>
                </ol>

                <h3 className="text-xl font-semibold text-sage-900 mb-4">Special Considerations for Arizona Residents</h3>
                <div className="bg-sage-50 p-6 rounded-xl mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <GlobeAltIcon className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Snowbirds:</strong> Consider PPO plans or Medicare Supplement plans that provide coverage when traveling out of state.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPinIcon className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Rural Residents:</strong> Original Medicare with a Supplement plan may offer more provider flexibility in areas with limited networks.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <UserGroupIcon className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Dual Eligible:</strong> If you qualify for both Medicare and AHCCCS (Arizona Medicaid), Dual SNP plans offer comprehensive coverage with minimal costs.
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-sage-900 mb-4">When to Use This Plan Finder</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Annual Enrollment Period (October 15 - December 7):</strong> Compare and switch plans for the following year</li>
                  <li><strong>Turning 65:</strong> Research options during your Initial Enrollment Period</li>
                  <li><strong>Moving to Arizona:</strong> Find plans available in your new county</li>
                  <li><strong>Losing other coverage:</strong> Explore Medicare options during your Special Enrollment Period</li>
                  <li><strong>Annual plan review:</strong> Even if happy with your plan, compare annually as benefits and costs change</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Help Section */}
          <section className="mt-8">
            <InfoBox 
              title="Need Personal Assistance?" 
              icon={PhoneIcon}
              className="bg-gradient-to-br from-primary-50 to-primary-100"
            >
              <p className="mb-4">
                While our plan finder helps you compare options, you may want personalized guidance for your specific situation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-primary-600" />
                  <span><strong>Medicare:</strong> 1-800-MEDICARE (1-800-633-4227)</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-primary-600" />
                  <span><strong>Arizona SHIP:</strong> 1-800-432-4040 (free counseling)</span>
                </div>
              </div>
            </InfoBox>
          </section>
        </Container>
      </Section>
    </div>
  );
}