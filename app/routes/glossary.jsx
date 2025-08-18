import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from '@remix-run/react';
import { Navigation } from '../components/ui/Navigation';
import { Section, SectionHeader, Container } from '../components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Alert } from '../components/ui/Alert';
import { 
  MagnifyingGlassIcon, 
  BookOpenIcon,
  TagIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { medicareTerms, categories, alphabet } from '../data/medicareTerms';

export const meta = () => {
  return [
    { title: "Medicare Glossary | Complete Guide to Medicare Terms | AZ Health Bridge" },
    { name: "description", content: "Comprehensive Medicare glossary with 75+ terms. Search Medicare definitions, Medicare Advantage, Medicare Supplement, Part D, and Arizona-specific Medicare information." },
    { name: "keywords", content: "Medicare glossary, Medicare terms, Medicare definitions, Medicare dictionary, Medicare Advantage terms, Medicare Supplement terms, Part D glossary, Arizona Medicare terms, Medicare vocabulary" },
    { property: "og:title", content: "Complete Medicare Glossary | AZ Health Bridge" },
    { property: "og:description", content: "Search and understand 75+ Medicare terms with clear definitions. Your comprehensive guide to Medicare vocabulary." },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "en-us" },
    { name: "geo.region", content: "US-AZ" },
    { name: "geo.placename", content: "Arizona" },
  ];
};

export default function Glossary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All Terms');
  const [selectedLetter, setSelectedLetter] = useState(searchParams.get('letter') || '');

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory !== 'All Terms') params.set('category', selectedCategory);
    if (selectedLetter) params.set('letter', selectedLetter);
    setSearchParams(params, { replace: true });
  }, [searchTerm, selectedCategory, selectedLetter, setSearchParams]);

  // Filter and search terms
  const filteredTerms = useMemo(() => {
    let filtered = medicareTerms;

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(term => 
        term.term.toLowerCase().includes(search) ||
        term.definition.toLowerCase().includes(search) ||
        term.relatedTerms.some(related => related.toLowerCase().includes(search))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Terms') {
      filtered = filtered.filter(term => term.category === selectedCategory);
    }

    // Filter by letter
    if (selectedLetter) {
      filtered = filtered.filter(term => 
        term.term.charAt(0).toUpperCase() === selectedLetter
      );
    }

    // Sort alphabetically
    return filtered.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchTerm, selectedCategory, selectedLetter]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Terms');
    setSelectedLetter('');
  };

  // Get letter counts for alphabet navigation
  const letterCounts = useMemo(() => {
    const counts = {};
    alphabet.forEach(letter => {
      counts[letter] = medicareTerms.filter(term => 
        term.term.charAt(0).toUpperCase() === letter
      ).length;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <Navigation />
      
      <Section padding="xl">
        <Container>
          <SectionHeader 
            title="Medicare Glossary"
            subtitle="Your comprehensive guide to Medicare terminology. Search, browse, and understand over 75 Medicare terms and definitions."
          />

          {/* Search and Filters */}
          <Card variant="elevated" padding="lg" className="mb-8">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Input
                  label="Search Medicare Terms"
                  placeholder="Search for Medicare terms, definitions, or related concepts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={MagnifyingGlassIcon}
                  className="text-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-11 text-neutral-400 hover:text-neutral-600"
                    aria-label="Clear search"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      icon={TagIcon}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Alphabet Navigation */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">Browse by Letter</h3>
                <div className="flex flex-wrap gap-1">
                  {alphabet.map((letter) => (
                    <Button
                      key={letter}
                      variant={selectedLetter === letter ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedLetter(selectedLetter === letter ? '' : letter)}
                      className="p-2 text-center"
                      disabled={letterCounts[letter] === 0}
                    >
                      {letter}
                      {letterCounts[letter] > 0 && (
                        <span className="block text-xs opacity-75">
                          {letterCounts[letter]}
                        </span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {(searchTerm || selectedCategory !== 'All Terms' || selectedLetter) && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-neutral-700">Active filters:</span>
                  {searchTerm && (
                    <Badge variant="primary">
                      Search: "{searchTerm}"
                    </Badge>
                  )}
                  {selectedCategory !== 'All Terms' && (
                    <Badge variant="secondary">
                      Category: {selectedCategory}
                    </Badge>
                  )}
                  {selectedLetter && (
                    <Badge variant="sage">
                      Letter: {selectedLetter}
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    icon={XMarkIcon}
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Search Results Summary */}
          <div className="mb-6">
            <p className="text-lg text-neutral-700">
              Showing <span className="font-semibold">{filteredTerms.length}</span> of <span className="font-semibold">{medicareTerms.length}</span> Medicare terms
            </p>
          </div>

          {/* Terms List */}
          {filteredTerms.length === 0 ? (
            <Alert variant="info">
              <strong>No terms found.</strong> Try adjusting your search or filters to find Medicare terms.
            </Alert>
          ) : (
            <div className="space-y-6">
              {filteredTerms.map((term) => (
                <Card 
                  key={term.id} 
                  variant="elevated" 
                  padding="lg"
                  className="hover:shadow-xl transition-shadow duration-300"
                  id={term.id}
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <CardTitle size="lg" className="text-primary-600">
                        {term.term}
                      </CardTitle>
                      <Badge variant="secondary" size="sm">
                        {term.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                      {term.definition}
                    </p>
                    
                    {term.relatedTerms && term.relatedTerms.length > 0 && (
                      <div>
                        <h4 className="text-base font-semibold text-neutral-800 mb-2">
                          Related Terms:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {term.relatedTerms.map((relatedTerm) => {
                            const relatedTermObj = medicareTerms.find(t => 
                              t.term.toLowerCase() === relatedTerm.toLowerCase()
                            );
                            return (
                              <Badge 
                                key={relatedTerm} 
                                variant="neutral" 
                                size="sm"
                                className={relatedTermObj ? "cursor-pointer hover:bg-neutral-200" : ""}
                                onClick={relatedTermObj ? () => {
                                  document.getElementById(relatedTermObj.id)?.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'center'
                                  });
                                } : undefined}
                              >
                                {relatedTerm}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* SEO Content */}
          <section className="mt-16">
            <Card variant="sage" padding="xl">
              <CardHeader>
                <CardTitle size="lg" className="flex items-center gap-3">
                  <BookOpenIcon className="h-8 w-8 text-sage-600" />
                  Understanding Medicare Terminology
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="mb-6">
                  Medicare can seem complicated with its many terms and acronyms. This comprehensive Medicare glossary 
                  is designed to help Arizona seniors understand the language of Medicare, from basic terms like 
                  "Medicare Part A" to complex concepts like "True Out-of-Pocket costs."
                </p>

                <h3 className="text-xl font-semibold text-sage-900 mb-4">How to Use This Glossary</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Search:</strong> Use the search bar to find specific Medicare terms or concepts</li>
                  <li><strong>Browse by Category:</strong> Filter terms by Medicare parts, plan types, costs, and more</li>
                  <li><strong>Alphabetical Navigation:</strong> Click any letter to see all terms starting with that letter</li>
                  <li><strong>Related Terms:</strong> Click on related terms to jump to their definitions</li>
                </ul>

                <h3 className="text-xl font-semibold text-sage-900 mb-4">Medicare Basics for Arizona Residents</h3>
                <p className="mb-6">
                  Whether you're new to Medicare or reviewing your options during Annual Enrollment Period, 
                  understanding Medicare terminology is crucial for making informed decisions about your healthcare 
                  coverage. This glossary covers terms relevant to all Medicare beneficiaries in Arizona's 15 counties.
                </p>

                <h3 className="text-xl font-semibold text-sage-900 mb-4">Key Medicare Terms to Know</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Medicare Parts A, B, C, and D:</strong> The foundation of Medicare coverage</li>
                  <li><strong>Medicare Advantage vs. Medicare Supplement:</strong> Understanding your plan options</li>
                  <li><strong>Enrollment Periods:</strong> When you can sign up or make changes</li>
                  <li><strong>Costs:</strong> Premiums, deductibles, copayments, and coinsurance</li>
                  <li><strong>Coverage:</strong> What's covered and what's not under different plans</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </Container>
      </Section>
    </div>
  );
}