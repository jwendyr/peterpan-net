// ── Grant & Funding Database ──
const GRANTS = {
  "khrc-home": {
    name: "KHRC HOME Investment Partnership",
    agency: "Kansas Housing Resources Corporation",
    type: "state",
    amount: "$300,000 – $500,000",
    match: "25% match required (can be in-kind)",
    deadline: "Annual NOFA released March–May, applications due 60–90 days later",
    cycle: "Annual — Spring",
    url: "https://kshousingcorp.org/",
    summary: "Federal HOME funds administered by Kansas for affordable housing development, rehabilitation, and homebuyer assistance. Nonprofits with CHDO designation receive 15% set-aside.",
    requirements: [
      "Must be a 501(c)(3) nonprofit — Peterpan Corp qualifies",
      "CHDO (Community Housing Development Organization) certification required for set-aside funds",
      "CHDO requires: affordable housing stated in mission, board with low-income representation, demonstrated capacity",
      "Projects must serve households at or below 80% AMI (Area Median Income)",
      "Units must remain affordable for 5–15 years depending on investment amount",
      "Environmental review (NEPA) required before construction",
      "Davis-Bacon prevailing wages may apply for projects with 12+ HOME-assisted units"
    ],
    steps: [
      "Step 1: Apply for CHDO certification with KHRC (2–3 month process)",
      "Step 2: Identify target properties for rehabilitation (Herington houses are ideal)",
      "Step 3: Obtain cost estimates for rehabilitation from licensed contractors",
      "Step 4: Submit HOME application during spring NOFA window",
      "Step 5: If awarded, complete environmental review before construction",
      "Step 6: Rehabilitate properties and lease to qualifying tenants",
      "Step 7: Submit completion report and maintain affordability compliance"
    ],
    faq: [
      { q: "What is CHDO certification?", a: "Community Housing Development Organization — a special HUD designation for nonprofits whose primary mission is affordable housing. It unlocks 15% of the state's HOME allocation as set-aside funds only available to CHDOs." },
      { q: "How long does CHDO certification take?", a: "Typically 2–3 months. Requires documentation of mission, board composition (at least 1/3 low-income representation), and organizational capacity." },
      { q: "Can we use HOME funds for acquisition?", a: "Yes — HOME funds can be used for acquisition, rehabilitation, new construction, and tenant-based rental assistance." },
      { q: "What counts as the 25% match?", a: "Cash, donated labor, donated materials, below-market land value, waived fees, and other federal/state grants can count toward match." }
    ]
  },
  "khrc-htf": {
    name: "Housing Trust Fund (HTF)",
    agency: "Kansas Housing Resources Corporation",
    type: "state",
    amount: "$200,000 – $600,000",
    match: "None required",
    deadline: "Annual — typically aligned with HOME cycle",
    cycle: "Annual",
    url: "https://kshousingcorp.org/",
    summary: "Federal Housing Trust Fund for extremely low-income housing (30% AMI and below). No match requirement makes this highly accessible.",
    requirements: [
      "Units must serve households at or below 30% AMI (extremely low income)",
      "30-year affordability period for rental housing",
      "Nonprofit 501(c)(3) status required",
      "Properties must meet HQS (Housing Quality Standards)",
      "Lead-based paint requirements for pre-1978 properties"
    ],
    steps: [
      "Step 1: Identify properties suitable for extremely low-income tenants",
      "Step 2: Develop pro forma showing rents affordable at 30% AMI",
      "Step 3: Apply during KHRC funding round",
      "Step 4: Complete rehabilitation to HQS standards",
      "Step 5: Lease to qualifying tenants and maintain 30-year compliance"
    ],
    faq: [
      { q: "What income qualifies as 30% AMI?", a: "For Dickinson County, 30% AMI for a family of 4 is approximately $18,000–$20,000/year. Rent must be affordable at 30% of this income." },
      { q: "Why no match required?", a: "HTF is specifically designed to serve the hardest-to-house populations. The federal government waives match to maximize impact." }
    ]
  },
  "usda-cf": {
    name: "USDA Community Facilities Program",
    agency: "USDA Rural Development — Kansas State Office",
    type: "federal",
    amount: "$50,000 – $2,000,000+",
    match: "Varies by community poverty level — high-poverty areas qualify for up to 75% grant",
    deadline: "Rolling — applications accepted year-round",
    cycle: "Rolling",
    url: "https://www.rd.usda.gov/ks",
    summary: "Grants and loans for essential community facilities in rural areas. High-poverty communities like Herington can qualify for up to 75% grant funding. Covers childcare centers, community centers, and public facilities.",
    requirements: [
      "Community must be rural (population under 20,000) — Herington (2,400), Abilene (6,800), Hope, White City all qualify",
      "Facility must provide essential community service",
      "Applicant must be a public entity, nonprofit, or tribal organization",
      "Must demonstrate community need and support",
      "Grant percentage based on community median household income vs state median",
      "Environmental review required"
    ],
    steps: [
      "Step 1: Contact USDA Rural Development Kansas office in Topeka (785-271-2700)",
      "Step 2: Schedule pre-application meeting to discuss project scope",
      "Step 3: Gather community support letters from local government, schools, businesses",
      "Step 4: Obtain preliminary cost estimates for facility conversion/renovation",
      "Step 5: Submit application (rolling — no fixed deadline)",
      "Step 6: USDA conducts environmental review and project evaluation",
      "Step 7: If approved, execute grant agreement and begin construction"
    ],
    faq: [
      { q: "What qualifies as a community facility?", a: "Childcare centers, community centers, libraries, healthcare facilities, public safety buildings, educational facilities, and food distribution centers." },
      { q: "How is the grant percentage determined?", a: "Communities with median household income below 80% of state median qualify for up to 75% grant. Herington likely qualifies for maximum grant percentage." },
      { q: "Can this fund the Abilene daycare conversion?", a: "Yes — converting the 17,768 sqft former church into a licensed childcare center is exactly the type of project this program targets." }
    ]
  },
  "cdbg": {
    name: "Community Development Block Grant (CDBG)",
    agency: "HUD / Kansas Department of Commerce",
    type: "federal",
    amount: "$250,000 – $500,000",
    match: "Varies — typically 10-25%",
    deadline: "Late spring/early summer annually",
    cycle: "Annual",
    url: "https://www.kansascommerce.gov/program/community-programs/community-development-block-grant/",
    summary: "Federal block grants for housing rehabilitation, public facilities, and economic development. Kansas receives $12–15M annually. Nonprofits partner with municipal governments to apply.",
    requirements: [
      "Activities must primarily benefit low/moderate-income (LMI) persons (51%+ of beneficiaries)",
      "Nonprofit must partner with municipal government to apply (city of Herington, Abilene, etc.)",
      "Categories: housing rehabilitation, public facilities, economic development, community development",
      "Environmental review required",
      "Davis-Bacon prevailing wages for construction over $2,000",
      "Fair housing and equal opportunity compliance"
    ],
    steps: [
      "Step 1: Meet with city administrator in each target community (Herington, Abilene, Emporia, Junction City)",
      "Step 2: Propose partnership — nonprofit provides properties, city applies for CDBG",
      "Step 3: Conduct income survey of target area to document LMI benefit",
      "Step 4: Develop project scope and cost estimates",
      "Step 5: City submits application to Kansas Dept of Commerce (spring deadline)",
      "Step 6: If awarded, complete environmental review",
      "Step 7: Execute rehabilitation and submit completion documentation"
    ],
    faq: [
      { q: "Why does the city need to apply?", a: "Non-entitlement communities (under 50,000 population) apply through the state CDBG program. The city is the applicant; the nonprofit is the sub-recipient or partner." },
      { q: "What is an LMI area benefit?", a: "If 51%+ of residents in the service area are low/moderate income (below 80% AMI), the entire project qualifies. Most Herington neighborhoods meet this threshold." }
    ]
  },
  "htc-federal": {
    name: "Federal Historic Tax Credit (20%)",
    agency: "National Park Service / IRS",
    type: "federal",
    amount: "20% of qualified rehabilitation expenditures",
    match: "None — it's a tax credit, not a grant",
    deadline: "Rolling — submit Part 1/2 before construction, Part 3 after",
    cycle: "Rolling",
    url: "https://www.nps.gov/subjects/taxincentives/",
    summary: "20% tax credit on qualified rehabilitation costs for income-producing properties listed on the National Register. Combined with Kansas 25% credit = 45% back. Nonprofits syndicate credits to investors for cash equity.",
    requirements: [
      "Property must be listed on or eligible for the National Register of Historic Places",
      "Building must be income-producing (rental housing, commercial)",
      "Rehabilitation must follow Secretary of the Interior's Standards",
      "Qualified expenses must exceed the adjusted basis of the building",
      "Nonprofits need a tax credit syndicator/investor partner to monetize credits",
      "Three-part application: Part 1 (significance), Part 2 (proposed work), Part 3 (completion)"
    ],
    steps: [
      "Step 1: Hire a preservation consultant to evaluate National Register eligibility",
      "Step 2: Submit Part 1 application to Kansas SHPO for significance determination",
      "Step 3: Develop rehabilitation plans following Secretary of Interior's Standards",
      "Step 4: Submit Part 2 describing proposed rehabilitation work",
      "Step 5: Engage a tax credit syndicator (e.g., National Equity Fund, Raymond James)",
      "Step 6: Form partnership structure — investor provides equity in exchange for credits",
      "Step 7: Complete rehabilitation, submit Part 3 for final certification",
      "Step 8: Credits flow to investor partner over 5 years"
    ],
    faq: [
      { q: "How does a nonprofit use tax credits?", a: "Nonprofits don't pay taxes, so they can't directly use credits. Instead, they form a partnership with a tax credit investor who provides cash equity (typically 85-90 cents per dollar of credit) in exchange for the credits." },
      { q: "What is the Secretary of Interior's Standards?", a: "10 principles for historic rehabilitation — preserve original character, repair rather than replace, don't create false historical appearances. A preservation architect ensures compliance." },
      { q: "Can this combine with LIHTC?", a: "Yes — 'dual credit' deals combining Historic Tax Credits with Low-Income Housing Tax Credits are common and highly effective. This maximizes equity for affordable housing in historic buildings." }
    ]
  },
  "htc-kansas": {
    name: "Kansas Historic Tax Credit (25%)",
    agency: "Kansas Historical Society",
    type: "state",
    amount: "25% of qualified rehabilitation expenditures",
    match: "None",
    deadline: "Rolling",
    cycle: "Rolling",
    url: "https://www.kshs.org/p/state-historic-rehabilitation-tax-credit/14666",
    summary: "State-level 25% tax credit that stacks on top of the federal 20% for a combined 45% credit on qualified rehabilitation costs. Same National Register requirements as federal program.",
    requirements: [
      "Same National Register listing requirement as federal program",
      "Qualified expenditures must exceed $5,000",
      "Work must comply with Secretary of Interior's Standards",
      "Credits can be carried forward up to 10 years"
    ],
    steps: [
      "Step 1: Apply simultaneously with federal HTC application",
      "Step 2: Kansas SHPO reviews state credit application alongside federal",
      "Step 3: Credits issued upon completion and final certification"
    ],
    faq: [
      { q: "Does this stack with the federal credit?", a: "Yes — a $500,000 rehabilitation project would generate $100,000 federal credit (20%) + $125,000 state credit (25%) = $225,000 total (45% back)." }
    ]
  },
  "lihtc": {
    name: "Low-Income Housing Tax Credits (LIHTC)",
    agency: "Kansas Housing Resources Corporation",
    type: "federal",
    amount: "$500,000 – $2,000,000+ in equity",
    match: "None — generates equity from tax credit investors",
    deadline: "1–2 funding rounds per year, typically spring",
    cycle: "Annual — Spring",
    url: "https://kshousingcorp.org/low-income-housing-tax-credits/",
    summary: "The largest affordable housing funding source in the US. 9% credits generate ~70% of development costs as equity. Rural projects, historic properties, and nonprofits score competitively in Kansas QAP.",
    requirements: [
      "Units must serve households at or below 60% AMI (or lower for more points)",
      "Minimum 15-year compliance period + 15-year extended use",
      "Requires experienced LIHTC development partner/consultant",
      "Environmental review and market study required",
      "Must meet Kansas Qualified Allocation Plan (QAP) scoring criteria",
      "Rural set-aside available for communities under 10,000 population",
      "Nonprofit set-aside provides dedicated allocation for 501(c)(3) organizations"
    ],
    steps: [
      "Step 1: Engage an experienced LIHTC consultant or development partner",
      "Step 2: Commission a market study for the target area",
      "Step 3: Develop project pro forma with construction and operating budgets",
      "Step 4: Apply during KHRC allocation round (scored competitively)",
      "Step 5: If awarded, secure tax credit investor/syndicator",
      "Step 6: Close financing and begin construction/rehabilitation",
      "Step 7: Lease up to qualifying tenants",
      "Step 8: Maintain compliance for 30-year affordability period"
    ],
    faq: [
      { q: "What's the difference between 9% and 4% credits?", a: "9% credits are competitive and generate ~70% of costs as equity. 4% credits are non-competitive (paired with tax-exempt bonds) and generate ~30% of costs. 9% is harder to get but much more valuable." },
      { q: "Why does Peterpan Corp need a development partner?", a: "LIHTC deals are complex legal and financial transactions requiring specialized expertise in tax credit syndication, partnership law, and compliance. An experienced partner de-risks the application and improves scoring." },
      { q: "How does the Abilene church qualify?", a: "Adaptive reuse of a historic building into affordable housing scores well on multiple QAP criteria: rural location, historic preservation, nonprofit sponsor, and community revitalization." }
    ]
  },
  "oldcc": {
    name: "OLDCC Military Community Grants",
    agency: "Office of Local Defense Community Cooperation (DoD)",
    type: "military",
    amount: "$100,000 – $5,000,000+",
    match: "Varies by program",
    deadline: "Periodic NOFAs — varies by program",
    cycle: "Periodic",
    url: "https://oldcc.gov/our-programs",
    summary: "DoD grants for community infrastructure supporting military installations. Geary County (Junction City) and Riley County (Manhattan, Ogden) qualify as Fort Riley-adjacent communities.",
    requirements: [
      "Community must be adjacent to or impacted by a military installation",
      "Projects must support military family quality of life or installation resilience",
      "Local government or nonprofit applicant",
      "Partnership with Fort Riley garrison or Flint Hills Regional Council strengthens application"
    ],
    steps: [
      "Step 1: Contact OLDCC program manager for applicable programs",
      "Step 2: Partner with Geary County or Junction City government",
      "Step 3: Develop proposal connecting property to military family support",
      "Step 4: Obtain letter of support from Fort Riley garrison commander",
      "Step 5: Submit application during open NOFA period"
    ],
    faq: [
      { q: "What replaced the OEA?", a: "The Office of Economic Adjustment (OEA) was renamed to OLDCC (Office of Local Defense Community Cooperation) but maintains the same programs and mission." },
      { q: "How does a church building serve military families?", a: "Converting the Junction City limestone church into a veteran family resource center directly serves Fort Riley personnel — counseling, community gatherings, childcare referral, and transition support services." }
    ]
  },
  "mccyn": {
    name: "MCCYN Military Childcare Subsidy",
    agency: "DoD / Child Care Aware of America",
    type: "military",
    amount: "Up to $2,000/month per child (vs standard $800)",
    match: "None — revenue stream, not a grant",
    deadline: "Ongoing enrollment",
    cycle: "Ongoing",
    url: "https://www.childcareaware.org/fee-assistancerespite/military-702/",
    summary: "Fee assistance program subsidizing childcare for military families using civilian providers. Becoming MCCYN-eligible guarantees premium revenue that funds the Abilene daycare business case.",
    requirements: [
      "Must be a licensed childcare facility in Kansas",
      "Must meet DoD childcare quality standards",
      "Staff background checks and training requirements",
      "Facility must be within reasonable distance of military installation"
    ],
    steps: [
      "Step 1: Obtain Kansas childcare license for Abilene Campus facility",
      "Step 2: Meet DoD quality standards (staff ratios, training, facilities)",
      "Step 3: Register with Child Care Aware of America as MCCYN provider",
      "Step 4: Market to Fort Riley families through installation family support services",
      "Step 5: Receive military fee assistance payments for enrolled military children"
    ],
    faq: [
      { q: "Why $2,000/mo vs $800/mo?", a: "Military childcare subsidies are significantly higher than civilian market rates because DoD recognizes the true cost of quality childcare and the retention impact on military families." },
      { q: "How many military children could we serve?", a: "The Abilene Campus at 17,768 sqft can serve 150+ children. Even at 50% military enrollment, that's 75+ children × $2,000/mo = $150,000+/month in revenue." }
    ]
  },
  "children-cabinet": {
    name: "Kansas Children's Cabinet & Trust Fund",
    agency: "Kansas Children's Cabinet (State Agency)",
    type: "state",
    amount: "$10,000 – $250,000",
    match: "Varies by program",
    deadline: "Typically spring applications",
    cycle: "Annual",
    url: "https://kschildrenscabinet.org/",
    summary: "Funds early childhood programs, childcare infrastructure, and family support for ages 0–5. Addresses the Kansas childcare desert problem in rural counties like Dickinson.",
    requirements: [
      "Must serve children ages 0–5",
      "Nonprofit, local government, or school district applicant",
      "Must demonstrate community need for childcare",
      "Facility must meet Kansas childcare licensing standards"
    ],
    steps: [
      "Step 1: Document childcare shortage in Dickinson County (data from Child Care Aware)",
      "Step 2: Develop facility plan for Abilene Campus childcare conversion",
      "Step 3: Apply during spring funding cycle",
      "Step 4: If awarded, use funds for facility renovation and startup"
    ],
    faq: [
      { q: "Is Dickinson County a childcare desert?", a: "Many rural Kansas counties including Dickinson have fewer childcare slots than families need. Child Care Aware of Kansas publishes county-level data documenting this shortage." }
    ]
  },
  "heritage-trust": {
    name: "Kansas Heritage Trust Fund",
    agency: "Kansas Historical Society / SHPO",
    type: "historic",
    amount: "$5,000 – $90,000 (50% match required)",
    match: "50% match required",
    deadline: "Applications typically due October",
    cycle: "Annual — October",
    url: "https://www.kshs.org/p/grants/14632",
    summary: "Matching grants for preservation of National Register-listed properties. Funds structural stabilization, facade restoration, and preservation planning.",
    requirements: [
      "Property must be listed on National Register or Register of Kansas Historic Places",
      "50% cash match required",
      "Work must follow Secretary of Interior's Standards",
      "Grant period typically 12–18 months"
    ],
    steps: [
      "Step 1: Confirm or obtain National Register listing for target property",
      "Step 2: Develop preservation scope of work with qualified architect",
      "Step 3: Submit application by October deadline",
      "Step 4: If awarded, complete preservation work within grant period",
      "Step 5: Submit completion report with documentation"
    ],
    faq: [
      { q: "What types of work qualify?", a: "Structural stabilization, roof repair, masonry repointing, window restoration, facade work, and preservation planning. Interior renovation may qualify if it preserves historic character." }
    ]
  },
  "emporia-mainstreet": {
    name: "Emporia Main Street Programs (IWW/ROOMS)",
    agency: "Emporia Main Street / Kansas Dept of Commerce",
    type: "community",
    amount: "IWW: $500–$5,000 | ROOMS: $5,000–$25,000 | State: $5,000–$50,000",
    match: "Varies — typically 1:1 match",
    deadline: "Varies locally — contact Emporia Main Street",
    cycle: "Periodic",
    url: "https://emporiamainstreet.com/",
    summary: "Local facade improvement grants (IWW), upper-floor housing incentives (ROOMS), and state Main Street matching grants for downtown commercial buildings.",
    requirements: [
      "Property must be within designated Main Street district",
      "IWW: exterior improvements only",
      "ROOMS: upper-floor residential conversion",
      "Must comply with downtown design guidelines"
    ],
    steps: [
      "Step 1: Contact Casey Woods at Emporia Main Street to confirm eligibility",
      "Step 2: Develop facade improvement plan (IWW) or upper-floor housing plan (ROOMS)",
      "Step 3: Submit application during open period",
      "Step 4: Complete improvements per approved plan"
    ],
    faq: [
      { q: "What is IWW?", a: "Improving With Wallbuster — small grants for exterior/facade improvements to downtown commercial buildings. Quick application, fast turnaround." },
      { q: "What is ROOMS?", a: "Renovating Our Old Main Street — incentives specifically for converting upper floors of downtown commercial buildings into residential housing units." }
    ]
  },
  "sunflower": {
    name: "Sunflower Foundation",
    agency: "Sunflower Foundation (Topeka)",
    type: "foundation",
    amount: "$10,000 – $200,000+",
    match: "None typically required",
    deadline: "1–2 funding cycles per year",
    cycle: "Semi-annual",
    url: "https://www.sunflowerfoundation.org/",
    summary: "Health and wellness grants for Kansas nonprofits. Frame affordable housing and childcare as social determinants of health to align with foundation priorities.",
    requirements: [
      "Kansas 501(c)(3) organization",
      "Project must address health and wellness",
      "Must demonstrate measurable health outcomes"
    ],
    steps: [
      "Step 1: Frame project as health infrastructure (housing stability = health outcome)",
      "Step 2: Submit letter of inquiry during open cycle",
      "Step 3: If invited, submit full proposal with health impact metrics"
    ],
    faq: [
      { q: "How does housing relate to health?", a: "Housing instability is a leading social determinant of health. Stable, affordable housing reduces ER visits, improves mental health, and supports child development. This framing aligns Peterpan Corp's work with Sunflower Foundation priorities." }
    ]
  },
  "cdo-tax-credit": {
    name: "Community Service Tax Credit (CDO)",
    agency: "Kansas Department of Commerce",
    type: "state",
    amount: "70% state tax credit for donors",
    match: "N/A — enhances private fundraising",
    deadline: "Rolling application for CDO status",
    cycle: "Rolling",
    url: "https://www.kansascommerce.gov/program/community-programs/",
    summary: "Becoming an approved Community Development Organization (CDO) allows donors to receive 70% Kansas state tax credits on contributions. Dramatically enhances private fundraising for the entire portfolio.",
    requirements: [
      "Must be a 501(c)(3) serving Kansas communities",
      "Must demonstrate community development mission",
      "Annual reporting to Kansas Dept of Commerce"
    ],
    steps: [
      "Step 1: Apply to Kansas Dept of Commerce for CDO designation",
      "Step 2: Once approved, market tax credit benefit to potential donors",
      "Step 3: Donors contribute and receive 70% Kansas tax credit plus federal deduction",
      "Step 4: Use raised funds across portfolio"
    ],
    faq: [
      { q: "How does the 70% credit work for donors?", a: "A donor who gives $10,000 receives a $7,000 Kansas tax credit plus a federal charitable deduction. Their net cost is approximately $1,500 for a $10,000 donation — extremely attractive for Kansas taxpayers." }
    ]
  },
  "kansas-health": {
    name: "Kansas Health Foundation",
    agency: "Kansas Health Foundation (Wichita)",
    type: "foundation",
    amount: "$25,000 – $500,000+",
    match: "None",
    deadline: "Rolling — letters of inquiry accepted year-round",
    cycle: "Rolling",
    url: "https://kansashealth.org/grants/",
    summary: "Major Kansas foundation funding health equity and healthy communities. Invitation-based for larger grants. Their 'Healthy Communities' initiative aligns with rural community development.",
    requirements: [
      "Kansas 501(c)(3) organization",
      "Project addresses health equity or community wellness",
      "Strong preference for underserved rural communities"
    ],
    steps: [
      "Step 1: Submit letter of inquiry describing project's health impact",
      "Step 2: If invited, develop full proposal with measurable outcomes",
      "Step 3: Foundation staff may conduct site visit"
    ],
    faq: [
      { q: "What health-related projects could Peterpan Corp propose?", a: "Childcare facility (child health/development), affordable housing (housing stability), community wellness center (preventive health), or food access programs (nutrition) — all connect to health outcomes." }
    ]
  }
};

// Map grants to properties
const PROPERTY_GRANTS = {
  "abilene-121-ne-5th": ["usda-cf", "children-cabinet", "mccyn", "lihtc", "cdbg", "htc-federal", "htc-kansas", "khrc-home", "kansas-health"],
  "emporia-511-commercial": ["emporia-mainstreet", "htc-federal", "htc-kansas", "lihtc", "heritage-trust", "cdbg"],
  "herington-200-kansas": ["usda-cf", "cdbg", "khrc-home", "khrc-htf", "sunflower"],
  "junction-city-337-w-7th": ["oldcc", "htc-federal", "htc-kansas", "heritage-trust", "usda-cf", "cdbg"],
  "hutchinson-402-e-1st": ["htc-federal", "htc-kansas", "heritage-trust", "lihtc", "khrc-home", "cdbg"],
  "manhattan-1509-pierre": ["khrc-home", "khrc-htf", "cdbg"],
  "manhattan-1020-colorado": ["khrc-home", "khrc-htf", "cdbg"],
  "ogden-204-12th": ["oldcc", "khrc-home", "khrc-htf", "cdbg"],
  "herington-6-s-broadway": ["cdbg", "khrc-home", "cdo-tax-credit"],
  "herington-broadway-block": ["htc-federal", "htc-kansas", "heritage-trust", "usda-cf", "cdbg", "khrc-home", "sunflower"],
  "herington-12-s-broadway": ["cdbg", "khrc-home", "cdo-tax-credit"],
  "herington-14-e-day": ["cdbg", "khrc-home"],
  "herington-212-w-main": ["khrc-home", "khrc-htf", "cdbg"],
  "herington-317-s-2nd": ["khrc-home", "khrc-htf", "lihtc", "cdbg"],
  "herington-202-w-walnut": ["khrc-home", "khrc-htf", "cdbg"],
  "herington-516-e-arnold": ["khrc-home", "khrc-htf", "cdbg"],
  "herington-604-n-d": ["khrc-home", "khrc-htf", "cdbg"],
  "hope-114-e-broadway": ["usda-cf", "cdbg", "sunflower", "kansas-health"],
  "white-city-124-w-mckenzie": ["usda-cf", "cdbg", "khrc-home"],
  "herington-9th-street-triad": ["khrc-home", "khrc-htf", "lihtc", "cdbg"],
  "herington-walnut-pair": ["khrc-home", "khrc-htf", "cdbg"],
  "herington-317-w-walnut": ["khrc-home", "cdbg"],
  "meade-402-w-carthage": ["cdbg"]
};

// Property-specific development strategies
const PROPERTY_STRATEGIES = {
  "abilene-121-ne-5th": {
    vision: "The Abilene Campus — 150+ Child Daycare & Community Hub",
    phases: [
      { name: "Campus Consolidation", timeline: "Month 1–2", cost: "$5,000", actions: ["Unify 121 NE 5th, 100 NE 6th, and 200 NE 6th as one 'Campus' legally and operationally", "Clear out 2 storage outbuildings and service the boiler/HVAC", "Do NOT sell parking lots separately — kills main building utility"], outcome: "Unified campus asset with 60+ parking stalls ready for development" },
      { name: "Mega-Daycare Launch", timeline: "Month 3–12", cost: "$250,000+ (grant-funded)", actions: ["Pitch to Child Care Aware of Kansas & Dickinson County Economic Development", "Apply for Capital Accelerator Grant ($250k+) for fire suppression & classroom modernization", "Obtain Kansas childcare license for 150+ child capacity", "Register as MCCYN military childcare provider for Fort Riley families"], outcome: "Licensed childcare facility generating $1.5M–$2M annual gross revenue" },
      { name: "Event & Wedding Venue (Plan B)", timeline: "Concurrent", cost: "$15,000", actions: ["Brand as 'The Sanctuary at Abilene' — weddings in sanctuary with pipe organ", "Use classrooms/hall for receptions — 60 parking stalls = only downtown venue with adequate parking", "Market to Abilene/Junction City wedding market"], outcome: "Secondary revenue stream from event rentals at $2,000–$5,000 per event" }
    ],
    totalFunding: "$500K–$2M+ (grants + LIHTC + MCCYN revenue)",
    keyContacts: ["Child Care Aware of Kansas", "Jessica Goodale — Dickinson County Economic Development Director", "KHRC for LIHTC application"]
  },
  "emporia-511-commercial": {
    vision: "The Million Dollar Main Street — Mixed-Use Community Hub",
    phases: [
      { name: "Ground Floor Engine", timeline: "Month 1–4", cost: "$20,000 (IWW loan)", actions: ["Launch community services center / artisan market on ground floor", "Apply for Incentives Without Walls (IWW) 0% loan ($20k) for startup", "Restore historic facade using Main Street facade grant"], outcome: "Active ground-floor community retail generating foot traffic and revenue" },
      { name: "Scholar Lofts (Upper Floor Housing)", timeline: "Month 4–12", cost: "$150,000 (grant-stacked)", actions: ["Renovate upper floors into 6 affordable housing units for ESU students", "Stack HEAL Grant ($100k) + ROOMS Grant ($50k) + Historic Tax Credits (45%)", "Target $5,400/mo total residential income across 6 units"], outcome: "6 affordable apartments producing $64,800/year in rental income" },
      { name: "Valuation Flip", timeline: "Month 12–18", cost: "$0", actions: ["Refinance based on new income stream at commercial cap rate (6.5%)", "Post-renovation appraisal target: $1M+ valuation", "Pull equity for next acquisition"], outcome: "Property value increases from $120K to $1M+ based on NOI" }
    ],
    totalFunding: "$150K–$300K (grants) + 45% Historic Tax Credits on rehab costs",
    keyContacts: ["Casey Woods — Emporia Main Street Director", "Kansas SHPO for Historic Tax Credit application", "ESU housing office for student rental demand"]
  },
  "herington-200-kansas": {
    vision: "The Kansas Avenue Community Grounds — Event Center & Development Site",
    phases: [
      { name: "Event Venue Pivot", timeline: "Month 1–3", cost: "$10,000", actions: ["Clean up 6 acres — mow, grade, create parking areas", "Market as 'Indoor/Outdoor' event venue next to City Garden", "Launch seasonal farmers market (weekly June–September)"], outcome: "Herington's only dedicated wedding/event venue with outdoor space" },
      { name: "Residential Conversion (Alternative)", timeline: "Month 6–12", cost: "$50,000", actions: ["Convert dance floor/hall into open-concept living room/kitchen", "Use existing 'back of house' rooms for bedrooms", "Market as barndominium on 6 acres with city utilities"], outcome: "Unique residential property on 6 acres inside city limits" },
      { name: "Land Development (Long-term)", timeline: "Year 2–3", cost: "$25,000", actions: ["Subdivide 6 acres into 12–15 residential lots (R-1 zoning)", "Sell lots to builders at $10k each", "Retain event building on 1 acre"], outcome: "Potential $150K+ from lot sales alone" }
    ],
    totalFunding: "$50K–$200K (USDA CF + CDBG + event revenue)",
    keyContacts: ["Herington City Administrator", "USDA Rural Development — Topeka office"]
  },
  "junction-city-337-w-7th": {
    vision: "The Limestone Sanctuary — Veteran & Family Resource Center",
    phases: [
      { name: "Structural Preservation", timeline: "Month 1", cost: "$2,000", actions: ["Inspect mortar joints (pointing) and roof — limestone needs to breathe", "Ensure no modern sealants have trapped moisture", "Specialized masonry audit and patching"], outcome: "Building envelope secured, historic limestone preserved" },
      { name: "Military Arbitrage Housing", timeline: "Month 2–6", cost: "$80,000", actions: ["Renovate interior into unique living space or large family home", "Target officers/Senior NCOs seeking off-base housing with character", "Set rent at BAH rates: $1,800–$2,200/mo"], outcome: "Premium military rental generating $21,600–$26,400/year" },
      { name: "Community Facility (Plan B)", timeline: "Month 6–12", cost: "$150,000 (OLDCC/USDA)", actions: ["Leverage nonprofit ownership for Veteran Support Center designation", "Apply for OLDCC military community grant ($100K–$5M)", "Partner with Fort Riley for veteran transition services programming"], outcome: "Federally-supported veteran family resource center" }
    ],
    totalFunding: "$100K–$1M (OLDCC + Historic Tax Credits 45% + USDA CF)",
    keyContacts: ["Fort Riley Garrison Commander (letter of support)", "OLDCC Program Manager", "Kansas SHPO for National Register nomination"]
  },
  "hutchinson-402-e-1st": {
    vision: "The Victorian Grand Dame — Historic Affordable Housing",
    phases: [
      { name: "Secure the Envelope", timeline: "Month 1", cost: "$3,000", actions: ["Emergency roof patch and gutter cleaning — 1894 structure vulnerable to water", "Board up any broken windows to prevent squatter access", "Weatherproofing assessment"], outcome: "Building stabilized against further deterioration" },
      { name: "House Hacking Layout", timeline: "Month 2–6", cost: "$15,000", actions: ["Separate guest cottage utilities from main house", "Renovate the small cottage unit FIRST — it's faster", "Rent cottage at $600/mo to fund main house renovation"], outcome: "Cottage generating $7,200/year while main house rehabilitation proceeds" },
      { name: "Historic Restoration", timeline: "Month 6–18", cost: "$200,000 (45% back via HTC)", actions: ["Apply for Heritage Trust Fund grant ($5K–$90K) through Kansas SHPO", "Submit National Register nomination (property already on NPS registry)", "Restore exterior to 'Painted Lady' Victorian status", "Rehabilitate 5 bed/4 bath main house as affordable multi-family"], outcome: "Fully restored Victorian generating $1,554+/mo rent, valued at $190K+" }
    ],
    totalFunding: "$200K+ (Historic Tax Credits 45% + Heritage Trust Fund + LIHTC equity)",
    keyContacts: ["Reno County Historical Society", "Kansas SHPO — Heritage Trust Fund", "LIHTC syndicator for dual-credit deal"]
  },
  "manhattan-1509-pierre": {
    vision: "The K-State Cash Cow — Steady Portfolio Anchor",
    phases: [
      { name: "Lease Audit", timeline: "Immediate", cost: "$0", actions: ["Review current lease terms — ensure alignment with semester cycle (July/August)", "Compare current rent to market — if under $900/mo, plan increase", "Verify tenant quality and payment history"], outcome: "Optimized lease terms for 2026–2027 school year" },
      { name: "Summer Turn", timeline: "July 2026", cost: "$3,000", actions: ["LVP flooring (indestructible for student use)", "Fresh paint in neutral colors", "Updated bathroom fixtures and kitchen hardware"], outcome: "Refreshed unit commanding 15–20% higher rent" },
      { name: "Portfolio Anchor", timeline: "Ongoing", cost: "$0", actions: ["Keep this asset permanently — steady cash flow supports riskier renovations", "Use equity to secure lines of credit for Herington/Emporia projects", "Bundle management with 1020 Colorado to reduce overhead"], outcome: "Consistent $900–$1,100/mo cash flow anchoring the portfolio" }
    ],
    totalFunding: "Self-funded ($3K renovation) — generates equity for other projects",
    keyContacts: ["K-State housing office for rental comps", "Manhattan property management companies"]
  },
  "manhattan-1020-colorado": {
    vision: "The Little Apple Starter — Hold or Strategic Flip",
    phases: [
      { name: "Efficiency Upgrade", timeline: "Month 1", cost: "$500", actions: ["Install smart thermostat and LED lighting", "Check window seals — lower utility costs", "Market as 'Low Utility Cost' rental"], outcome: "Reduced operating costs, improved tenant appeal" },
      { name: "Cosmetic Refresh", timeline: "Month 2–3", cost: "$5,000", actions: ["Kitchen cabinet paint + new backsplash", "Modern light fixtures", "Refinish or replace flooring"], outcome: "Property ready for retail sale at $110K or premium rental" },
      { name: "Hold & Bundle", timeline: "Ongoing", cost: "$0", actions: ["Treat as a pair with 1509 Pierre — same handyman/team", "Hold for long-term appreciation in Manhattan market", "Alternative: sell to first-time homebuyer at $110K for portfolio rebalancing"], outcome: "Bundled management reducing overhead, or $45K profit on flip" }
    ],
    totalFunding: "Self-funded ($5.5K) — cash flow or flip profit",
    keyContacts: ["Manhattan first-time homebuyer programs", "K-State student rental market"]
  },
  "ogden-204-12th": {
    vision: "Fort Riley Gateway — Section 8 Military Housing",
    phases: [
      { name: "Functional Check", timeline: "Month 1", cost: "$1,000", actions: ["Ensure HVAC and water heater are reliable (top tenant complaints)", "Check for deferred maintenance that scares off good tenants", "Basic safety inspection"], outcome: "Property certified safe, clean, functional" },
      { name: "Section 8 / HUD Certification", timeline: "Month 2", cost: "$0", actions: ["Certify property for Section 8 housing vouchers", "Government-guaranteed rent often exceeds market cash rent", "Ensures 100% on-time payment from HUD"], outcome: "Guaranteed rental income stream backed by federal government" },
      { name: "Steady Cash Flow", timeline: "Ongoing", cost: "$0", actions: ["Do NOT over-improve — keep finishes durable (vinyl flooring, semi-gloss paint)", "Focus on 'Safe, Clean, Functional' standard", "Target $700–$800/mo net rent"], outcome: "$8,400–$9,600/year cash flow on $12,500 investment" }
    ],
    totalFunding: "Minimal — self-funded operations, Section 8 revenue",
    keyContacts: ["Riley County Housing Authority for Section 8", "Fort Riley housing referral office"]
  },
  "herington-6-s-broadway": {
    vision: "The Broadway Gateway — Peterpan Corp HQ & Mixed-Use",
    phases: [
      { name: "Facade Restoration", timeline: "Month 1–3", cost: "$5,000 (grant-funded)", actions: ["Apply for facade improvement grant — this is the 'face' of Broadway", "Restore original brick exterior to increase perceived value of entire block", "Install professional signage for Peterpan Corp headquarters"], outcome: "Restored facade anchoring downtown revitalization" },
      { name: "Mixed-Use Conversion", timeline: "Month 3–6", cost: "$25,000", actions: ["Ground floor: Peterpan Corp office + community retail space", "Upper floor: affordable apartment unit ($700/mo)", "Apply 'Emporia Strategy' on smaller scale"], outcome: "HQ operations + $1,500/mo potential (retail $800 + apt $700)" },
      { name: "Equity Tap", timeline: "Month 6+", cost: "$0", actions: ["Once leased and operational, order appraisal", "At $99K value, pull ~$70K in cash-out refinance", "Use equity to fund acquisitions in other markets"], outcome: "Unlocked equity funding further portfolio growth" }
    ],
    totalFunding: "$5K–$25K (facade grant + CDO tax credit fundraising)",
    keyContacts: ["Herington City Administrator for facade grant", "Kansas Dept of Commerce for CDO status"]
  },
  "herington-12-s-broadway": {
    vision: "Broadway Boutique — Small Commercial Activation",
    phases: [
      { name: "Clean & List", timeline: "Month 1", cost: "$1,000", actions: ["Clean out building, basic cosmetic refresh", "List for lease at $400–$500/mo", "Market to local entrepreneurs needing small office/retail"], outcome: "Leased commercial space generating $4,800–$6,000/year" },
      { name: "Block 33 Synergy", timeline: "Ongoing", cost: "$0", actions: ["Coordinate with 6 S Broadway HQ for shared services", "Cross-promote with Block 33 tenants", "Consider consolidation with HQ operations if needed"], outcome: "Integrated Block 33 commercial presence" },
      { name: "Sale or Hold", timeline: "Year 2+", cost: "$0", actions: ["Hold for appreciation ($12K purchase → $92K est. value)", "Or sell to established tenant at market price", "Use proceeds for higher-priority projects"], outcome: "7.6x equity multiple on $12K investment" }
    ],
    totalFunding: "$1K self-funded → $4.8K–$6K/year rental",
    keyContacts: ["Herington Chamber of Commerce for tenant leads"]
  },
  "herington-14-e-day": {
    vision: "Day Street — Lot Consolidation or Micro-Housing",
    phases: [
      { name: "Assessment", timeline: "Month 1", cost: "$500", actions: ["Inspect 1,080 sqft structure for viability", "Determine: renovate, teardown, or consolidate with Block 33", "Check zoning for micro-housing or ADU potential"], outcome: "Development path determined" },
      { name: "Renovation or Teardown", timeline: "Month 2–4", cost: "$5,000–$15,000", actions: ["If structure viable: basic rehab for $400–$500/mo rental", "If not viable: demolish and clear lot for future use", "Consider tiny home or modular placement on cleared lot"], outcome: "Rental unit or clean development-ready lot" },
      { name: "Block 33 Integration", timeline: "Year 2+", cost: "$0", actions: ["Integrate with HQ and 12 S Broadway for Block 33 master plan", "Possible community garden or pocket park if not developed", "Hold for long-term downtown revitalization value"], outcome: "Contributing to Block 33 cohesive development" }
    ],
    totalFunding: "$5K–$15K self-funded",
    keyContacts: ["Herington Building Inspector", "City zoning office"]
  },
  "herington-broadway-block": {
    vision: "The Broadway Block — 3-Building Community Campus",
    phases: [
      { name: "Church Re-Activation + Annex Cafe", timeline: "Month 1–4", cost: "$20,000", actions: ["Re-activate church (120 S Broadway) for events — weddings, memorials, community theater", "Renovate annex (112 S Broadway) front into community cafe/market", "Set up annex rear as Peterpan Corp admin HQ and housing resource office", "Market church sanctuary as premium event venue at $500–$2,000/event"], outcome: "Active 3-building campus generating event revenue + daily cafe foot traffic" },
      { name: "Kitchen Modernization + Historic Grants", timeline: "Month 4–10", cost: "$30,000 (grant-funded)", actions: ["Modernize church kitchen for catering operations", "Apply for Heritage Trust Fund ($5K–$90K) for church preservation", "Submit National Register nomination for Historic Tax Credits (45%)", "Apply for USDA Community Facilities grant for campus designation"], outcome: "Grant-funded campus improvements, historic preservation underway" },
      { name: "Broadway Block Brand", timeline: "Month 10+", cost: "$0", actions: ["Create unified 'Broadway Block' brand spanning all 3 buildings", "Offer integrated lease packages: church events + annex admin + garage", "Cross-promote with downtown businesses and visitor bureau", "Use church visibility to anchor entire Herington commercial revival"], outcome: "Self-sustaining community campus generating $50K+/year in combined revenue" }
    ],
    totalFunding: "$50K–$150K (Heritage Trust Fund + USDA CF + Historic Tax Credits 45% + Sunflower Foundation)",
    keyContacts: ["Kansas SHPO for National Register evaluation", "Herington Convention & Visitor Bureau", "USDA Rural Development for community facility designation"]
  },
  "herington-212-w-main": {
    vision: "Main Street Home — Staff Housing & Operations Base",
    phases: [
      { name: "Clean & Secure", timeline: "Month 1", cost: "$500", actions: ["Clean out any debris, ensure doors lock securely", "Verify new roof, furnace, water heater, basement supports are functioning", "Use as immediate storage for Peterpan Corp maintenance tools"], outcome: "Secure, functional property ready for occupancy" },
      { name: "Staff Housing / Studio Rental", timeline: "Month 2+", cost: "$0", actions: ["House Peterpan Corp program director (reduces payroll housing costs)", "Alternative: rent to local hobbyist/artist needing workspace at $300–$400/mo", "Low-impact, steady cash flow while maintaining portfolio presence"], outcome: "Staff housing savings or $3,600–$4,800/year rental income" },
      { name: "Hold or Strategic Sale", timeline: "Year 2+", cost: "$0", actions: ["If not needed for staff housing, list at $49K as 'Workshop/Commercial'", "3 bed/1.5 bath with all-new systems commands strong local market price", "Use proceeds for higher-yield acquisitions"], outcome: "Strategic flexibility — hold for operations or sell for capital" }
    ],
    totalFunding: "Self-funded — minimal investment needed (systems already updated)",
    keyContacts: ["Herington rental market — Karon's Real Estate for comps"]
  },
  "herington-317-s-2nd": {
    vision: "The Second Street Manor — Workforce Rental or Equity Play",
    phases: [
      { name: "Audit & Seal", timeline: "Month 1", cost: "$1,500", actions: ["Full roof and foundation inspection with DeWalt Squad mobile workshop", "Patch any leaks immediately to preserve $140K valuation", "Secure all entry points"], outcome: "Building envelope protected, valuation preserved" },
      { name: "Cosmetic Lift", timeline: "Month 2–4", cost: "$5,000", actions: ["Interior paint in neutral grays/whites", "Refinish original hardwood floors (major selling point)", "Update light fixtures and hardware"], outcome: "Market-ready interior with historic character preserved" },
      { name: "Cash Flow or Equity Release", timeline: "Month 6+", cost: "$0", actions: ["Option A: Rent to Railroad/Hospital workforce at $950/mo ($11,400/year)", "Option B: Refinance at $140K appraisal, pull out tax-free cash", "Use LIHTC for larger affordable housing conversion (3,890 sqft = multi-unit potential)"], outcome: "$11,400/year cash flow OR $100K+ equity release for portfolio growth" }
    ],
    totalFunding: "$6.5K self-funded rehab → $140K value (LIHTC for multi-unit conversion: $500K+)",
    keyContacts: ["Herington Railroad/Hospital HR for workforce housing demand", "KHRC for LIHTC pre-application consultation"]
  },
  "herington-202-w-walnut": {
    vision: "Walnut Street Cottage — Workforce Rental Pipeline",
    phases: [
      { name: "Zoning & Condition Assessment", timeline: "Month 1", cost: "$500", actions: ["Verify zoning (residential vs mixed-use)", "Inspect plumbing and electrical for occupancy readiness", "Check 4 bed/2 bath layout configuration"], outcome: "Clear path to rental or sale determined" },
      { name: "Workforce Rental", timeline: "Month 2–3", cost: "$3,000", actions: ["Basic cosmetic rehab — paint, carpet, fixtures", "Target $650–$750/mo rent to local workforce", "List with Karon's Real Estate or self-manage"], outcome: "$7,800–$9,000/year rental income" },
      { name: "Contract for Deed Sale", timeline: "Year 2+", cost: "$0", actions: ["Sell to local handyman or starter family on Contract for Deed", "Terms: $5,000 down, $600/mo for 10 years", "Passive income without maintenance headaches"], outcome: "$72,000 total sale price with zero maintenance responsibility" }
    ],
    totalFunding: "$3.5K self-funded → $7.8K–$9K/year rental or $72K contract sale",
    keyContacts: ["Karon's Real Estate — Herington rental management"]
  },
  "herington-516-e-arnold": {
    vision: "Arnold Street — Quick-Turn Cash Flow Machine",
    phases: [
      { name: "Rapid Turn", timeline: "Month 1", cost: "$2,000", actions: ["Clean, paint, rent — do NOT over-renovate", "Metal roof already replaced (major cost avoided)", "Focus on safe, clean, functional standard"], outcome: "Rent-ready property in 30 days" },
      { name: "Cash Flow", timeline: "Month 2+", cost: "$0", actions: ["Target Section 8 tenant for guaranteed $600–$700/mo", "Self-manage or bundle with other Herington properties for efficiency", "Net $400/mo positive cash flow after taxes and insurance"], outcome: "$4,800/year net cash flow on $14K investment" },
      { name: "1031 Exchange (Long-term)", timeline: "Year 3–5", cost: "$0", actions: ["Hold for 3–5 years of cash flow + appreciation", "Sell and upgrade into larger commercial asset via 1031 exchange", "Defer capital gains taxes while scaling up"], outcome: "Tax-deferred upgrade into higher-value property" }
    ],
    totalFunding: "$2K self-funded → $4.8K/year cash flow (34% annual ROI)",
    keyContacts: ["Dickinson County Housing Authority for Section 8"]
  },
  "herington-604-n-d": {
    vision: "North D Street — Section 8 Guaranteed Income",
    phases: [
      { name: "Refresh", timeline: "Month 1", cost: "$500", actions: ["Update bathroom fixtures and kitchen hardware", "Touch-up paint and ensure all systems functional", "Minimal investment — property already in rentable condition"], outcome: "Move-in ready property" },
      { name: "Section 8 Certification", timeline: "Month 1–2", cost: "$0", actions: ["Certify for Section 8 vouchers — perfect fit for 2-bedroom payment standard", "Government-guaranteed rent exceeds market rate in this price range", "100% on-time payment from HUD"], outcome: "Guaranteed $700–$800/mo from HUD" },
      { name: "Long-term Hold", timeline: "Ongoing", cost: "$0", actions: ["Hold for long-term appreciation and principal paydown", "Minimal maintenance — durable finishes already in place", "Part of Herington north-side housing stability strategy"], outcome: "$8,400–$9,600/year guaranteed income on $12K investment (70%+ ROI)" }
    ],
    totalFunding: "$500 self-funded → $8.4K–$9.6K/year guaranteed income",
    keyContacts: ["Dickinson County Housing Authority"]
  },
  "hope-114-e-broadway": {
    vision: "Hope Community Hub — Rural Outreach Center",
    phases: [
      { name: "Condition Verification", timeline: "Month 1", cost: "$1,000", actions: ["Verify habitability — if yes, it's a rental goldmine at $550/mo", "If needs work, classify as fixer-upper special with community rehab project", "Assess for community facility potential"], outcome: "Clear development path determined" },
      { name: "Remote Worker Rental", timeline: "Month 2+", cost: "$2,000", actions: ["Market to remote workers seeking ultra-low cost of living", "Target $550/mo rent — exceptional value for a small-town home", "Install high-speed internet (Starlink if needed) as amenity"], outcome: "$6,600/year rental income with infinite ROI on $13K tax basis" },
      { name: "Community Outreach Center", timeline: "Year 2", cost: "$50,000 (USDA CF)", actions: ["Apply for USDA Community Facilities grant for rural community center", "Convert to workshop/meeting space for Hope community programs", "Partner with K-State Extension for rural education programming"], outcome: "Vital community asset serving Hope's 350 residents" }
    ],
    totalFunding: "$50K (USDA CF) or self-funded rental ($3K investment)",
    keyContacts: ["Hope City Council", "USDA Rural Development — Topeka", "K-State Extension — Dickinson County"]
  },
  "herington-9th-street-triad": {
    vision: "The 9th Street Triad — Multi-Family Housing Development",
    phases: [
      { name: "Audit All Three Properties", timeline: "Month 1", cost: "$1,500", actions: ["Inspect all 3 buildings simultaneously — roof, foundation, utilities", "Determine which are habitable now vs. need renovation", "Survey combined lot for multi-family development potential"], outcome: "Clear rehabilitation priority order established" },
      { name: "Phased Rehabilitation", timeline: "Month 2–8", cost: "$15,000", actions: ["Renovate the strongest building first (likely 216 — highest assessed value)", "Rent at $650–$750/mo to fund renovation of second building", "Repeat: each rental funds the next renovation", "Apply for LIHTC if converting to 3+ affordable housing units"], outcome: "3 rental units generating $1,950–$2,250/mo combined" },
      { name: "Portfolio Scale Play", timeline: "Year 2+", cost: "$0", actions: ["Combined $181K estimated value on $13.7K purchase = 1,220% equity multiple", "Refinance entire triad as a package at combined appraised value", "Use equity to fund larger projects (Abilene, Emporia)"], outcome: "$167K+ equity unlocked from $13.7K investment" }
    ],
    totalFunding: "$15K self-funded + LIHTC potential ($500K+) for multi-family conversion",
    keyContacts: ["Dickinson County Housing Authority", "KHRC for LIHTC pre-application"]
  },
  "herington-walnut-pair": {
    vision: "Walnut Street Pair — Downtown-Adjacent Housing",
    phases: [
      { name: "Assessment & Zoning Check", timeline: "Month 1", cost: "$500", actions: ["Verify zoning for both parcels — residential vs. mixed-use", "Inspect both buildings for structural integrity", "Evaluate combined multi-family conversion potential (6,451 sqft total)"], outcome: "Development path determined — individual rentals or combined conversion" },
      { name: "Rental Rehabilitation", timeline: "Month 2–4", cost: "$6,000", actions: ["Basic cosmetic rehab on both units — paint, flooring, fixtures", "Target $600–$700/mo per unit = $1,200–$1,400/mo combined", "Downtown-adjacent location commands premium for Herington"], outcome: "$14,400–$16,800/year combined rental income" },
      { name: "Contract for Deed Exit", timeline: "Year 2+", cost: "$0", actions: ["Sell to owner-occupants on Contract for Deed terms", "Terms: $5K down, $600/mo per unit for 10 years", "Passive income stream without maintenance responsibility"], outcome: "Two passive income streams totaling $144K over 10 years" }
    ],
    totalFunding: "$6.5K self-funded → $14.4K–$16.8K/year rental income",
    keyContacts: ["Karon's Real Estate for Herington rental management"]
  },
  "herington-317-w-walnut": {
    vision: "West Walnut Workshop — Portfolio Support Asset",
    phases: [
      { name: "Secure & Assess", timeline: "Month 1", cost: "$200", actions: ["Secure building and cut grass", "Assess 8,060 sqft building for usability", "At $201/year tax, carrying cost is negligible"], outcome: "Low-cost asset secured" },
      { name: "Workshop / Storage Use", timeline: "Month 2+", cost: "$0", actions: ["Use as equipment storage for Peterpan Corp renovation projects", "DeWalt ToughSystem mobile workshop staging area", "Alternative: rent to local contractor at $300–$400/mo"], outcome: "Operational support for portfolio OR $3,600–$4,800/year rental" },
      { name: "Future Development", timeline: "Year 3+", cost: "TBD", actions: ["14,500 sqft lot (1/3 acre) has subdivision potential", "Could support new-build affordable housing if market warrants", "Hold for long-term appreciation — $42K value on $4.4K purchase"], outcome: "Development option retained at minimal cost" }
    ],
    totalFunding: "Self-funded — negligible carrying costs",
    keyContacts: ["Herington City Administrator for zoning verification"]
  },
  "meade-402-w-carthage": {
    vision: "Meade Property — Strategic Disposition",
    phases: [
      { name: "Land Assessment", timeline: "Month 1", cost: "$500", actions: ["Survey vacant lot after demolition", "Determine current land-only market value", "Check for environmental concerns from demolished structure"], outcome: "Clear land value and condition established" },
      { name: "Sale or New Build", timeline: "Month 2–6", cost: "Varies", actions: ["Option A: Sell vacant lot to local buyer — recover partial purchase price", "Option B: Partner with Meade County for affordable housing new-build", "Option C: Hold for future development if land value is appreciating"], outcome: "Capital recovery or new development" },
      { name: "Tax Strategy", timeline: "Ongoing", cost: "$0", actions: ["If lot is unsellable, consider donation to Meade County for community use", "Tax deduction on donated value reduces overall portfolio tax burden", "Eliminates ongoing tax and maintenance liability"], outcome: "Clean disposition with tax benefit" }
    ],
    totalFunding: "Disposition play — recover $33.5K purchase cost or tax deduction",
    keyContacts: ["Meade County Appraiser", "Local Meade real estate agents"]
  },
  "white-city-124-w-mckenzie": {
    vision: "White City — Strategic Disposition",
    phases: [
      { name: "Liability Check", timeline: "Month 1", cost: "$100", actions: ["Ensure no open wells, basements, or dangerous structures", "Cut grass and secure property", "Annual maintenance: $100/year"], outcome: "Property safe and liability-free" },
      { name: "Neighbor Sale", timeline: "Month 2", cost: "$0", actions: ["Offer to next-door neighbor for $2,500 to expand their yard", "Most likely buyer is always the adjacent property owner", "Quick sale clears the books and eliminates tax liability"], outcome: "Clean disposition generating $2,500 cash" },
      { name: "Donation (Alternative)", timeline: "If unsellable", cost: "$0", actions: ["Donate to White City fire department for training exercises", "Or donate to city for community garden/park use", "Tax deduction on assessed value + zero ongoing liability"], outcome: "Tax benefit and goodwill in Morris County" }
    ],
    totalFunding: "Disposition — $2.5K sale or tax-deductible donation",
    keyContacts: ["White City Mayor/City Council", "Morris County fire department"]
  }
};

// Type labels and colors
const GRANT_TYPES = {
  state: { label: "State", color: "#059669", bg: "#ecfdf5" },
  federal: { label: "Federal", color: "#2563eb", bg: "#dbeafe" },
  military: { label: "Military", color: "#7c3aed", bg: "#ede9fe" },
  historic: { label: "Historic", color: "#d97706", bg: "#fef3c7" },
  community: { label: "Community", color: "#059669", bg: "#ecfdf5" },
  foundation: { label: "Foundation", color: "#dc2626", bg: "#fee2e2" }
};
