export const medicareTerms = [
  {
    id: "advance-directive",
    term: "Advance Directive",
    definition: "A legal document that states your wishes about medical care in case you become unable to communicate these yourself. It includes a living will and medical power of attorney.",
    category: "Legal",
    relatedTerms: ["Living Will", "Power of Attorney", "End-of-Life Care"],
    commonFor: "all"
  },
  {
    id: "annual-enrollment-period",
    term: "Annual Enrollment Period (AEP)",
    definition: "The yearly period (October 15 - December 7) when you can make changes to your Medicare health and drug coverage that will take effect January 1 of the following year.",
    category: "Enrollment",
    relatedTerms: ["Open Enrollment", "Special Enrollment Period", "Medicare Advantage"],
    commonFor: "all"
  },
  {
    id: "appeal",
    term: "Appeal",
    definition: "A formal way of asking for a review of a decision about your health care coverage or payment for health care services.",
    category: "Claims",
    relatedTerms: ["Grievance", "Coverage Decision", "Denial"],
    commonFor: "all"
  },
  {
    id: "assignment",
    term: "Assignment",
    definition: "An agreement by your doctor, provider, or supplier to be paid directly by Medicare, to accept the payment amount Medicare approves for the service, and not to bill you for more than the Medicare deductible and coinsurance.",
    category: "Payment",
    relatedTerms: ["Medicare-approved Amount", "Limiting Charge", "Non-participating Provider"],
    commonFor: "original"
  },
  {
    id: "benefit-period",
    term: "Benefit Period",
    definition: "The way Medicare measures your use of services in a hospital or skilled nursing facility. A benefit period starts the day you go to a hospital or skilled nursing facility and ends when you haven't received inpatient care for 60 days in a row.",
    category: "Coverage",
    relatedTerms: ["Part A", "Inpatient Care", "Skilled Nursing Facility"],
    commonFor: "original"
  },
  {
    id: "catastrophic-coverage",
    term: "Catastrophic Coverage",
    definition: "The phase of Part D prescription drug coverage when you pay the greater of 5% coinsurance or copayments of $4.15 for generics and $10.35 for brand drugs after you've spent $8,000 out-of-pocket in 2025.",
    category: "Part D",
    relatedTerms: ["Coverage Gap", "Donut Hole", "True Out-of-Pocket"],
    commonFor: "partd"
  },
  {
    id: "cms",
    term: "CMS (Centers for Medicare & Medicaid Services)",
    definition: "The federal agency that runs the Medicare and Medicaid programs and monitors compliance with various federal healthcare regulations.",
    category: "Government",
    relatedTerms: ["Federal Government", "Medicare Administration", "Healthcare Regulations"],
    commonFor: "all"
  },
  {
    id: "coinsurance",
    term: "Coinsurance",
    definition: "The percentage of costs of a covered health care service you pay after you've paid your deductible. For example, if the health insurance or plan's allowed amount for an office visit is $100 and you've met your deductible, your coinsurance payment of 20% would be $20.",
    category: "Costs",
    relatedTerms: ["Copayment", "Deductible", "Out-of-Pocket"],
    commonFor: "all"
  },
  {
    id: "copayment",
    term: "Copayment (Copay)",
    definition: "A fixed amount you pay for a covered health care service, usually when you receive the service. The amount can vary by the type of covered health care service.",
    category: "Costs",
    relatedTerms: ["Coinsurance", "Deductible", "Cost-sharing"],
    commonFor: "all"
  },
  {
    id: "coverage-gap",
    term: "Coverage Gap (Donut Hole)",
    definition: "A temporary limit on what Medicare Part D will cover for prescription drugs. In 2025, once you and your plan have spent $5,030 on covered drugs, you'll pay 25% of the cost for covered brand-name and generic drugs until you reach catastrophic coverage.",
    category: "Part D",
    relatedTerms: ["Catastrophic Coverage", "Part D", "Prescription Drugs"],
    commonFor: "partd"
  },
  {
    id: "creditable-coverage",
    term: "Creditable Coverage",
    definition: "Prescription drug coverage that's expected to pay, on average, at least as much as Medicare's standard prescription drug coverage. If you have creditable coverage, you can keep it and may not have to pay a penalty if you decide to enroll in Medicare prescription drug coverage later.",
    category: "Part D",
    relatedTerms: ["Late Enrollment Penalty", "Part D", "Prescription Drug Coverage"],
    commonFor: "partd"
  },
  {
    id: "deductible",
    term: "Deductible",
    definition: "The amount you must pay for health care or prescriptions before Original Medicare, your prescription drug plan, or your other insurance begins to pay.",
    category: "Costs",
    relatedTerms: ["Coinsurance", "Copayment", "Out-of-Pocket Maximum"],
    commonFor: "all"
  },
  {
    id: "dual-eligible",
    term: "Dual Eligible",
    definition: "A person who qualifies for both Medicare and Medicaid coverage. Also called a 'dual eligible special needs individual.'",
    category: "Eligibility",
    relatedTerms: ["Medicaid", "Special Needs Plan", "Low Income Subsidy"],
    commonFor: "all"
  },
  {
    id: "durable-medical-equipment",
    term: "Durable Medical Equipment (DME)",
    definition: "Equipment and supplies ordered by a health care provider for everyday or extended use, such as wheelchairs, oxygen equipment, or hospital beds.",
    category: "Equipment",
    relatedTerms: ["Part B", "Medical Equipment", "Supplier"],
    commonFor: "original"
  },
  {
    id: "emergency-care",
    term: "Emergency Care",
    definition: "Services to evaluate and treat medical conditions that could result in serious disability or death if not immediately treated, such as accidents or sudden illness.",
    category: "Services",
    relatedTerms: ["Urgent Care", "Hospital", "Out-of-Network"],
    commonFor: "all"
  },
  {
    id: "end-stage-renal-disease",
    term: "End-Stage Renal Disease (ESRD)",
    definition: "Permanent kidney failure that requires dialysis or a kidney transplant. People with ESRD can get Medicare at any age.",
    category: "Medical Conditions",
    relatedTerms: ["Dialysis", "Kidney Transplant", "Medicare Eligibility"],
    commonFor: "all"
  },
  {
    id: "explanation-of-benefits",
    term: "Explanation of Benefits (EOB)",
    definition: "A statement from Medicare that shows what medical treatments and/or services were provided to you, how much Medicare paid, and what you may owe the provider.",
    category: "Claims",
    relatedTerms: ["Medicare Summary Notice", "Claims", "Payment"],
    commonFor: "all"
  },
  {
    id: "extra-help",
    term: "Extra Help",
    definition: "A Medicare program that helps people with limited income and resources pay Medicare prescription drug costs. Also called the 'Low Income Subsidy' (LIS).",
    category: "Financial Assistance",
    relatedTerms: ["Low Income Subsidy", "Part D", "Financial Assistance"],
    commonFor: "partd"
  },
  {
    id: "formulary",
    term: "Formulary",
    definition: "A list of prescription drugs covered by a prescription drug plan or another insurance plan offering prescription drug benefits.",
    category: "Part D",
    relatedTerms: ["Covered Drugs", "Preferred Drugs", "Prior Authorization"],
    commonFor: "partd"
  },
  {
    id: "grievance",
    term: "Grievance",
    definition: "A complaint about the way your Medicare health plan or Medicare prescription drug plan is giving care or handling a complaint about the quality of care.",
    category: "Claims",
    relatedTerms: ["Appeal", "Complaint", "Quality of Care"],
    commonFor: "advantage"
  },
  {
    id: "guaranteed-issue",
    term: "Guaranteed Issue",
    definition: "A right you have in certain situations when insurance companies must sell you a Medigap policy even if you have health problems. Companies can't charge you more for a Medigap policy because of past or present health problems.",
    category: "Medigap",
    relatedTerms: ["Medigap", "Open Enrollment", "Underwriting"],
    commonFor: "supplement"
  },
  {
    id: "health-maintenance-organization",
    term: "Health Maintenance Organization (HMO)",
    definition: "A type of Medicare Advantage Plan that provides all Original Medicare Part A and Part B health coverage and sometimes covers Part D prescription drugs. You can only get care from doctors who work for the HMO or are under contract with the HMO, except in emergencies.",
    category: "Plan Types",
    relatedTerms: ["Medicare Advantage", "PPO", "Network"],
    commonFor: "advantage"
  },
  {
    id: "home-health-care",
    term: "Home Health Care",
    definition: "Limited part-time or intermittent skilled nursing care and home health aide services, physical therapy, occupational therapy, speech-language therapy, medical social services, durable medical equipment, and other services.",
    category: "Services",
    relatedTerms: ["Part A", "Part B", "Skilled Nursing"],
    commonFor: "original"
  },
  {
    id: "hospice-care",
    term: "Hospice Care",
    definition: "A special way of caring for people who are terminally ill and their families. Hospice care involves a team-oriented approach that addresses the medical, physical, social, emotional, and spiritual needs of terminally ill patients and their families.",
    category: "Services",
    relatedTerms: ["Terminal Illness", "Palliative Care", "Part A"],
    commonFor: "all"
  },
  {
    id: "initial-coverage-limit",
    term: "Initial Coverage Limit",
    definition: "The maximum limit of coverage under the standard Medicare Part D benefit before the coverage gap begins. In 2025, this limit is $5,030 in total drug costs.",
    category: "Part D",
    relatedTerms: ["Coverage Gap", "Part D", "Drug Costs"],
    commonFor: "partd"
  },
  {
    id: "initial-enrollment-period",
    term: "Initial Enrollment Period (IEP)",
    definition: "The 7-month period that begins 3 months before the month you turn 65, includes the month you turn 65, and ends 3 months after the month you turn 65.",
    category: "Enrollment",
    relatedTerms: ["Medicare Eligibility", "Part A", "Part B"],
    commonFor: "all"
  },
  {
    id: "late-enrollment-penalty",
    term: "Late Enrollment Penalty",
    definition: "An amount added to your Medicare Part B or Part D premium if you don't sign up when you're first eligible or if you have a gap in coverage of 63 or more consecutive days.",
    category: "Penalties",
    relatedTerms: ["Part B Premium", "Part D Premium", "Creditable Coverage"],
    commonFor: "all"
  },
  {
    id: "lifetime-reserve-days",
    term: "Lifetime Reserve Days",
    definition: "In Original Medicare, these are 60 'extra' days that Medicare will pay for when you're in a hospital for more than 90 days. You can use these 60 days only once during your lifetime.",
    category: "Coverage",
    relatedTerms: ["Part A", "Hospital Stay", "Inpatient Care"],
    commonFor: "original"
  },
  {
    id: "limiting-charge",
    term: "Limiting Charge",
    definition: "The highest amount of money you can be charged by a doctor or other health care provider who doesn't accept assignment. The limiting charge is 15% over Medicare's approved amount.",
    category: "Payment",
    relatedTerms: ["Non-participating Provider", "Assignment", "Balance Billing"],
    commonFor: "original"
  },
  {
    id: "low-income-subsidy",
    term: "Low Income Subsidy (LIS)",
    definition: "Help paying for Medicare prescription drug costs for people with limited income and resources. Also called 'Extra Help.'",
    category: "Financial Assistance",
    relatedTerms: ["Extra Help", "Part D", "Medicaid"],
    commonFor: "partd"
  },
  {
    id: "maximum-out-of-pocket",
    term: "Maximum Out-of-Pocket",
    definition: "The most you pay during a policy period (usually one year) before your health insurance or plan starts to pay 100% for covered essential health benefits.",
    category: "Costs",
    relatedTerms: ["Deductible", "Coinsurance", "Copayment"],
    commonFor: "advantage"
  },
  {
    id: "medicaid",
    term: "Medicaid",
    definition: "A joint federal and state program that helps with medical costs for some people with limited income and resources. Medicaid programs vary from state to state.",
    category: "Government Programs",
    relatedTerms: ["Dual Eligible", "State Programs", "Medicare"],
    commonFor: "all"
  },
  {
    id: "medicare-advantage",
    term: "Medicare Advantage (Part C)",
    definition: "A type of Medicare health plan offered by a private company that contracts with Medicare to provide you with all your Part A and Part B benefits. Usually includes prescription drug coverage (Part D).",
    category: "Plan Types",
    relatedTerms: ["Part C", "HMO", "PPO", "Private Plans"],
    commonFor: "advantage"
  },
  {
    id: "medicare-part-a",
    term: "Medicare Part A (Hospital Insurance)",
    definition: "Hospital insurance that helps cover inpatient care in hospitals, skilled nursing facility care, hospice care, and some home health care.",
    category: "Medicare Parts",
    relatedTerms: ["Hospital Insurance", "Inpatient Care", "Premium-free"],
    commonFor: "original"
  },
  {
    id: "medicare-part-b",
    term: "Medicare Part B (Medical Insurance)",
    definition: "Medical insurance that helps cover doctors' services, outpatient care, medical supplies, and preventive services.",
    category: "Medicare Parts",
    relatedTerms: ["Medical Insurance", "Outpatient Care", "Monthly Premium"],
    commonFor: "original"
  },
  {
    id: "medicare-part-c",
    term: "Medicare Part C",
    definition: "Another name for Medicare Advantage plans, which are offered by private companies approved by Medicare.",
    category: "Medicare Parts",
    relatedTerms: ["Medicare Advantage", "Private Plans", "Part A and B"],
    commonFor: "advantage"
  },
  {
    id: "medicare-part-d",
    term: "Medicare Part D (Prescription Drug Coverage)",
    definition: "Prescription drug coverage that helps cover the cost of prescription drugs. This coverage is offered by insurance companies and other private companies approved by Medicare.",
    category: "Medicare Parts",
    relatedTerms: ["Prescription Drugs", "Drug Plans", "Formulary"],
    commonFor: "partd"
  },
  {
    id: "medicare-supplement",
    term: "Medicare Supplement (Medigap)",
    definition: "Insurance sold by private companies that can help pay some of the health care costs that Original Medicare doesn't cover, like copayments, coinsurance, and deductibles.",
    category: "Plan Types",
    relatedTerms: ["Medigap", "Original Medicare", "Supplement Insurance"],
    commonFor: "supplement"
  },
  {
    id: "medigap",
    term: "Medigap",
    definition: "Another name for Medicare Supplement Insurance. These policies help fill 'gaps' in Original Medicare coverage.",
    category: "Plan Types",
    relatedTerms: ["Medicare Supplement", "Plan A through Plan N", "Private Insurance"],
    commonFor: "supplement"
  },
  {
    id: "network",
    term: "Network",
    definition: "The facilities, providers, and suppliers your health insurer or plan has contracted with to provide health care services.",
    category: "Providers",
    relatedTerms: ["In-Network", "Out-of-Network", "Provider Directory"],
    commonFor: "advantage"
  },
  {
    id: "open-enrollment-period",
    term: "Open Enrollment Period",
    definition: "The yearly period when you can make changes to your Medicare coverage. For most people, this runs from October 15 through December 7.",
    category: "Enrollment",
    relatedTerms: ["Annual Enrollment Period", "Medicare Advantage", "Part D"],
    commonFor: "all"
  },
  {
    id: "original-medicare",
    term: "Original Medicare",
    definition: "Fee-for-service health coverage managed by the federal government. Includes Part A (Hospital Insurance) and Part B (Medical Insurance).",
    category: "Plan Types",
    relatedTerms: ["Part A", "Part B", "Fee-for-Service"],
    commonFor: "original"
  },
  {
    id: "out-of-pocket-costs",
    term: "Out-of-Pocket Costs",
    definition: "Health care costs that you have to pay yourself because they aren't covered by Medicare or other insurance.",
    category: "Costs",
    relatedTerms: ["Deductible", "Copayment", "Coinsurance"],
    commonFor: "all"
  },
  {
    id: "preferred-provider-organization",
    term: "Preferred Provider Organization (PPO)",
    definition: "A type of Medicare Advantage Plan where you pay less if you use providers in the plan's network. You can use doctors, hospitals, and providers outside of the network for an additional cost.",
    category: "Plan Types",
    relatedTerms: ["Medicare Advantage", "HMO", "Network"],
    commonFor: "advantage"
  },
  {
    id: "premium",
    term: "Premium",
    definition: "The amount you pay for your health insurance or plan. You and/or your employer usually pay it monthly, quarterly, or yearly.",
    category: "Costs",
    relatedTerms: ["Monthly Payment", "Part B Premium", "Part D Premium"],
    commonFor: "all"
  },
  {
    id: "preventive-services",
    term: "Preventive Services",
    definition: "Health care to prevent illness (like the flu) or detect it at an early stage, when treatment is most likely to work best.",
    category: "Services",
    relatedTerms: ["Screenings", "Vaccinations", "Wellness Visits"],
    commonFor: "all"
  },
  {
    id: "primary-care-physician",
    term: "Primary Care Physician (PCP)",
    definition: "A doctor who provides primary care and coordinates your care with other health professionals and services.",
    category: "Providers",
    relatedTerms: ["Family Doctor", "Referrals", "Care Coordination"],
    commonFor: "advantage"
  },
  {
    id: "prior-authorization",
    term: "Prior Authorization",
    definition: "Approval that you may need to get before you can get a service, supply, or prescription. Your plan may require prior authorization for certain services before you receive them.",
    category: "Coverage",
    relatedTerms: ["Pre-approval", "Coverage Decision", "Medical Necessity"],
    commonFor: "advantage"
  },
  {
    id: "qualified-medicare-beneficiary",
    term: "Qualified Medicare Beneficiary (QMB)",
    definition: "A person who qualifies for a state program that pays Medicare Part A and Part B premiums, deductibles, coinsurance, and copayments for people with limited income and resources.",
    category: "Financial Assistance",
    relatedTerms: ["Medicaid", "State Programs", "Premium Assistance"],
    commonFor: "all"
  },
  {
    id: "referral",
    term: "Referral",
    definition: "A written order from your primary care doctor for you to see a specialist or get certain medical services.",
    category: "Care Coordination",
    relatedTerms: ["Primary Care Physician", "Specialist", "HMO"],
    commonFor: "advantage"
  },
  {
    id: "skilled-nursing-facility",
    term: "Skilled Nursing Facility (SNF)",
    definition: "A nursing facility with the staff and equipment to give skilled nursing care and, in most cases, skilled rehabilitative services and other related health services.",
    category: "Facilities",
    relatedTerms: ["Part A", "Rehabilitation", "Nursing Home"],
    commonFor: "original"
  },
  {
    id: "special-enrollment-period",
    term: "Special Enrollment Period (SEP)",
    definition: "A time outside the yearly Open Enrollment Period when you can sign up for Medicare health and drug coverage. You qualify for a Special Enrollment Period if you have certain life events.",
    category: "Enrollment",
    relatedTerms: ["Life Events", "Qualifying Event", "Enrollment"],
    commonFor: "all"
  },
  {
    id: "special-needs-plan",
    term: "Special Needs Plan (SNP)",
    definition: "A type of Medicare Advantage Plan that's designed to provide focused and specialized health care for specific groups of people, like those with chronic conditions, dual eligibility, or who live in institutions.",
    category: "Plan Types",
    relatedTerms: ["Medicare Advantage", "Chronic Conditions", "Dual Eligible"],
    commonFor: "advantage"
  },
  {
    id: "star-rating",
    term: "Star Rating",
    definition: "A rating system that measures the quality and performance of Medicare Advantage and Part D plans. Plans are rated from 1 to 5 stars, with 5 being the highest rating.",
    category: "Quality",
    relatedTerms: ["Quality Measures", "Plan Performance", "Medicare Advantage"],
    commonFor: "advantage"
  },
  {
    id: "step-therapy",
    term: "Step Therapy",
    definition: "A coverage rule that requires you to try one drug to treat your medical condition before the plan will cover another drug for that condition.",
    category: "Part D",
    relatedTerms: ["Prior Authorization", "Formulary", "Drug Coverage"],
    commonFor: "partd"
  },
  {
    id: "summary-of-benefits",
    term: "Summary of Benefits and Coverage (SBC)",
    definition: "An easy-to-read summary that lets you make apples-to-apples comparisons of costs and coverage between health plans.",
    category: "Plan Information",
    relatedTerms: ["Plan Comparison", "Benefits", "Coverage Details"],
    commonFor: "all"
  },
  {
    id: "supplemental-benefits",
    term: "Supplemental Benefits",
    definition: "Extra benefits that Medicare Advantage plans can offer beyond what Original Medicare covers, such as vision, dental, hearing aids, wellness programs, or transportation.",
    category: "Benefits",
    relatedTerms: ["Medicare Advantage", "Extra Benefits", "Value-added Services"],
    commonFor: "advantage"
  },
  {
    id: "true-out-of-pocket",
    term: "True Out-of-Pocket (TrOOP)",
    definition: "Your actual out-of-pocket costs for Part D covered drugs. This amount doesn't include monthly premiums, amounts paid by others on your behalf, or costs for drugs not covered by your plan.",
    category: "Part D",
    relatedTerms: ["Catastrophic Coverage", "Coverage Gap", "Drug Costs"],
    commonFor: "partd"
  },
  {
    id: "urgent-care",
    term: "Urgent Care",
    definition: "Care for an illness, injury, or condition serious enough that a reasonable person would seek care right away, but not so severe as to require emergency room care.",
    category: "Services",
    relatedTerms: ["Emergency Care", "After-hours Care", "Walk-in Clinic"],
    commonFor: "all"
  },
  // Plan-specific terms
  {
    id: "plan-a",
    term: "Medigap Plan A",
    definition: "A standardized Medicare Supplement insurance plan that covers Medicare Part A coinsurance and hospital costs up to an additional 365 days after Medicare benefits are used up.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Basic Benefits", "Standardized Plans"],
    commonFor: "supplement"
  },
  {
    id: "plan-b",
    term: "Medigap Plan B",
    definition: "A standardized Medicare Supplement insurance plan that includes all Plan A benefits plus Medicare Part A deductible coverage.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Part A Deductible", "Standardized Plans"],
    commonFor: "supplement"
  },
  {
    id: "plan-c",
    term: "Medigap Plan C",
    definition: "A standardized Medicare Supplement insurance plan that includes comprehensive coverage including Medicare Part A and Part B deductibles, coinsurance, and foreign travel emergency care. No longer sold to new Medicare beneficiaries.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Comprehensive Coverage", "Legacy Plan"],
    commonFor: "supplement"
  },
  {
    id: "plan-d",
    term: "Medigap Plan D",
    definition: "A standardized Medicare Supplement insurance plan that covers most Medicare gaps except the Part B deductible and excess charges.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Standardized Plans", "Coverage Options"],
    commonFor: "supplement"
  },
  {
    id: "plan-f",
    term: "Medigap Plan F",
    definition: "A standardized Medicare Supplement insurance plan that provides the most comprehensive coverage, paying for all Medicare deductibles, coinsurance, and copayments. No longer sold to new Medicare beneficiaries.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Comprehensive Coverage", "Legacy Plan"],
    commonFor: "supplement"
  },
  {
    id: "plan-g",
    term: "Medigap Plan G",
    definition: "A standardized Medicare Supplement insurance plan that covers everything Plan F covers except the Medicare Part B deductible. Most popular plan for new Medicare beneficiaries.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Popular Plan", "Comprehensive Coverage"],
    commonFor: "supplement"
  },
  {
    id: "plan-k",
    term: "Medigap Plan K",
    definition: "A standardized Medicare Supplement insurance plan that covers 50% of most Medicare cost-sharing and has an annual out-of-pocket limit.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Cost-sharing", "Out-of-pocket Limit"],
    commonFor: "supplement"
  },
  {
    id: "plan-l",
    term: "Medigap Plan L",
    definition: "A standardized Medicare Supplement insurance plan that covers 75% of most Medicare cost-sharing and has an annual out-of-pocket limit.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Cost-sharing", "Out-of-pocket Limit"],
    commonFor: "supplement"
  },
  {
    id: "plan-m",
    term: "Medigap Plan M",
    definition: "A standardized Medicare Supplement insurance plan that covers 50% of the Medicare Part A deductible and other standard benefits.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Part A Deductible", "Standardized Plans"],
    commonFor: "supplement"
  },
  {
    id: "plan-n",
    term: "Medigap Plan N",
    definition: "A standardized Medicare Supplement insurance plan that covers Medicare gaps with small copayments for some office visits and emergency room visits.",
    category: "Medigap Plans",
    relatedTerms: ["Medicare Supplement", "Copayments", "Popular Plan"],
    commonFor: "supplement"
  },
  // Arizona-specific terms
  {
    id: "arizona-health-care-cost-containment-system",
    term: "Arizona Health Care Cost Containment System (AHCCCS)",
    definition: "Arizona's Medicaid program that provides health insurance to eligible low-income individuals and families, including some Medicare beneficiaries.",
    category: "State Programs",
    relatedTerms: ["Arizona Medicaid", "Dual Eligible", "State Insurance"],
    commonFor: "all"
  },
  {
    id: "medicare-advantage-arizona",
    term: "Medicare Advantage in Arizona",
    definition: "Medicare Advantage plans available in Arizona, offered by private insurance companies. Arizona has extensive plan options available in most counties.",
    category: "State Coverage",
    relatedTerms: ["Arizona Plans", "County Coverage", "Plan Options"],
    commonFor: "advantage"
  },
  {
    id: "part-d-arizona",
    term: "Part D Coverage in Arizona",
    definition: "Prescription drug coverage available to Arizona Medicare beneficiaries through standalone Part D plans or Medicare Advantage plans with drug coverage.",
    category: "State Coverage",
    relatedTerms: ["Arizona Pharmacies", "Drug Coverage", "Prescription Plans"],
    commonFor: "partd"
  },
  // Additional important terms
  {
    id: "observation-status",
    term: "Observation Status",
    definition: "A designation used by hospitals for patients who need more care than can be given in an emergency room but who aren't sick enough to be admitted as inpatients. This can affect Medicare coverage.",
    category: "Hospital Care",
    relatedTerms: ["Inpatient", "Outpatient", "Hospital Admission"],
    commonFor: "original"
  },
  {
    id: "medicare-savings-program",
    term: "Medicare Savings Program (MSP)",
    definition: "State programs that help pay Medicare premiums and, in some cases, may also pay Medicare deductibles and coinsurance for people with limited income and resources.",
    category: "Financial Assistance",
    relatedTerms: ["QMB", "SLMB", "QI", "State Assistance"],
    commonFor: "all"
  },
  {
    id: "employer-coverage",
    term: "Employer Coverage",
    definition: "Health insurance provided by an employer to current or former employees. This coverage may work with Medicare or provide primary coverage.",
    category: "Other Insurance",
    relatedTerms: ["Group Health Plan", "Retiree Benefits", "COBRA"],
    commonFor: "all"
  },
  {
    id: "cobra",
    term: "COBRA",
    definition: "The Consolidated Omnibus Budget Reconciliation Act allows you to temporarily keep group health plan coverage after your employment ends or you lose coverage as a dependent.",
    category: "Other Insurance",
    relatedTerms: ["Employer Coverage", "Temporary Coverage", "Group Health Plan"],
    commonFor: "all"
  },
  {
    id: "medicare-administrative-contractor",
    term: "Medicare Administrative Contractor (MAC)",
    definition: "Private companies that process Medicare Part A and Part B claims for Medicare. They provide customer service and handle appeals for Original Medicare.",
    category: "Administration",
    relatedTerms: ["Claims Processing", "Customer Service", "Appeals"],
    commonFor: "original"
  }
];

export const categories = [
  "All Terms",
  "Medicare Parts",
  "Plan Types", 
  "Medigap Plans",
  "Enrollment",
  "Costs",
  "Coverage",
  "Services",
  "Providers",
  "Claims",
  "Financial Assistance",
  "Government",
  "Legal",
  "State Programs",
  "Other Insurance"
];

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");