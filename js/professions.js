// ============================================================================
// 1. ACTIVE LAUNCH BATCH (The Initial Seed - Weeks 1 & 2)
// ============================================================================
// These 12 high-volume, high-intent careers are live the second you deploy.
const professionData = {
    "web-developer": {
        name: "Web Developer",
        income: 95000,
        expenses: 280,
        tools: "premium cloud hosting testing stacks, IDE enterprise licenses, and automated deployment pipelines"
    },
    "graphic-designer": {
        name: "Graphic Designer",
        income: 70000,
        expenses: 120,
        tools: "Adobe Creative Cloud subscriptions, premium typography licenses, and high-res asset bundles"
    },
    "copywriter": {
        name: "Copywriter",
        income: 65000,
        expenses: 45,
        tools: "advanced research databases, premium grammar checkers, and client management CRM software"
    },
    "virtual-assistant": {
        name: "Virtual Assistant",
        income: 45000,
        expenses: 45,
        tools: "premium scheduling calendars, visual design layers, and cloud team workspace credentials"
    },
    "ui-ux-designer": {
        name: "UI/UX Designer",
        income: 105000,
        expenses: 140,
        tools: "Figma team seats, user testing panel credits, interactive prototyping plugins, and design system kits"
    },
    "seo-specialist": {
        name: "SEO Specialist",
        income: 85000,
        expenses: 380,
        tools: "enterprise keyword tracking software, site crawler data credits, and link-building outreach systems"
    },
    "video-editor": {
        name: "Video Editor",
        income: 80000,
        expenses: 210,
        tools: "heavy cloud storage pipelines, stock footage/audio licenses, render-acceleration plugins, and hardware depreciation buffers"
    },
    "social-media-manager": {
        name: "Social Media Manager",
        income: 62000,
        expenses: 110,
        tools: "automated post schedulers, team collaboration spaces, and client metrics analytics dashboards"
    },
    "bookkeeper": {
        name: "Freelance Bookkeeper",
        income: 72000,
        expenses: 160,
        tools: "certified accounting software, secure data backup portals, and tax filing software matrix keys"
    },
    "content-writer": {
        name: "Content Writer",
        income: 55000,
        expenses: 40,
        tools: "SEO content optimization software, content brief databases, and readability grading applications"
    },
    "frontend-developer": {
        name: "Frontend Developer",
        income: 92000,
        expenses: 180,
        tools: "component testing suites, design-to-code extraction pipelines, and advanced browser debugging extensions"
    },
    "project-manager": {
        name: "Contract Project Manager",
        income: 95000,
        expenses: 85,
        tools: "premium organizational workspaces, timeline mapping tools, and status dashboard applications"
    }
};

// ============================================================================
// 2. FUTURE RELEASES (STAGED BATCHES)
// ============================================================================
// INSTRUCTIONS: Every 2 weeks, cut professions from a batch below and paste 
// them into the main 'professionData' object above.
// REMEMBER: Also add the new ?job=KEY URLs to sitemap.xml before deploying.

/* -------------------------------------------------------------------------------
BATCH A: TECH & MARKETING EXPANSION (Deploy at Week 3)
-------------------------------------------------------------------------------
    "backend-developer": {
        name: "Backend Developer",
        income: 105000,
        expenses: 320,
        tools: "database instance credits, security scanning packages, containerization engines, and structural monitoring tools"
    },
    "ppc-ads-manager": {
        name: "PPC Media Buyer",
        income: 95000,
        expenses: 290,
        tools: "cross-platform ad tracking tools, landing page builders, and real-time click fraud protection suites"
    },
    "mobile-app-developer": {
        name: "Mobile App Developer",
        income: 110000,
        expenses: 250,
        tools: "official developer portal fees, virtual device emulators, and cross-platform compilation services"
    },
    "email-marketer": {
        name: "Email Marketing Strategist",
        income: 88000,
        expenses: 260,
        tools: "subscriber broadcast testing sandboxes, deliverability monitoring software, and visual template designs"
    },
    "wordpress-developer": {
        name: "WordPress Developer",
        income: 68000,
        expenses: 140,
        tools: "premium local server environments, theme frameworks, and security monitoring subscriptions"
    },
    "shopify-developer": {
        name: "Shopify Developer",
        income: 98000,
        expenses: 220,
        tools: "partner sandbox environments, custom theme CLI toolsets, and API call monitoring software"
    },
    "data-analyst": {
        name: "Data Analyst",
        income: 85000,
        expenses: 150,
        tools: "business intelligence licenses, dedicated data computation servers, and programmatic visualization tools"
    },
    "growth-marketer": {
        name: "Growth Hacker",
        income: 115000,
        expenses: 420,
        tools: "funnel testing applications, user behavior heatmaps, and multivariant analytical software"
    },
    "brand-strategist": {
        name: "Brand Strategist",
        income: 100000,
        expenses: 130,
        tools: "market intelligence reports, industry survey panel keys, and presentation delivery suites"
    },
    "data-engineer": {
        name: "Data Engineer",
        income: 118000,
        expenses: 390,
        tools: "cloud infrastructure pipeline architecture, pipeline debugging applications, and big-data streaming matrix frameworks"
    }

-------------------------------------------------------------------------------
BATCH B: CREATIVE & CONTENT SPECIALISTS (Deploy at Week 5)
-------------------------------------------------------------------------------
    "motion-designer": {
        name: "Motion Designer",
        income: 88000,
        expenses: 240,
        tools: "3D simulation engine keys, third-party rendering farm credits, and dynamic element directories"
    },
    "ghostwriter": {
        name: "Ghostwriter",
        income: 80000,
        expenses: 50,
        tools: "highly secure cloud backup layers, professional plagiarism verification checks, and audio transcription tools"
    },
    "technical-writer": {
        name: "Technical Writer",
        income: 90000,
        expenses: 95,
        tools: "documentation hosting instances, specialized API testing sandbox environments, and diagram charting engines"
    },
    "illustrator": {
        name: "Freelance Illustrator",
        income: 58000,
        expenses: 85,
        tools: "digital drawing software, high-end drawing tablet drivers, print-testing proofs, and portfolio gallery fees"
    },
    "photographer": {
        name: "Commercial Photographer",
        income: 75000,
        expenses: 350,
        tools: "studio lighting arrays, specialized lens rentals, professional editing software, and expensive equipment insurance policies"
    },
    "editor-proofreader": {
        name: "Editor & Proofreader",
        income: 52000,
        expenses: 35,
        tools: "style manual subscriptions, professional document tracking plug-ins, and collaborative workflow suites"
    },
    "translator": {
        name: "Translator & Localizer",
        income: 60000,
        expenses: 70,
        tools: "industry-standard Computer-Assisted Translation (CAT) software, terminology databases, and linguistic references"
    },
    "voice-over-artist": {
        name: "Voice Over Artist",
        income: 68000,
        expenses: 130,
        tools: "studio acoustic sound treatment, professional audio engineering software, and premium mic hardware upkeep"
    },
    "video-animator": {
        name: "2D/3D Video Animator",
        income: 82000,
        expenses: 220,
        tools: "physics engine plugins, texture material registries, and distributed render farm balances"
    },
    "audio-engineer": {
        name: "Audio Engineer",
        income: 70000,
        expenses: 160,
        tools: "DAW plugin suites, spatial audio decoders, mastering algorithm keys, and hardware monitor tuning"
    }

-------------------------------------------------------------------------------
BATCH C: HIGH-VALUE CONSULTING & AUDITING (Deploy at Week 7)
-------------------------------------------------------------------------------
    "cybersecurity-consultant": {
        name: "Cybersecurity Consultant",
        income: 135000,
        expenses: 450,
        tools: "vulnerability network scanners, sandboxed testing servers, and comprehensive professional liability insurance"
    },
    "business-coach": {
        name: "Business Coach",
        income: 90000,
        expenses: 120,
        tools: "assessment framework toolkits, client scheduling automation, and white-labeled training materials"
    },
    "financial-planner": {
        name: "Financial Advisor",
        income: 110000,
        expenses: 310,
        tools: "portfolio modeling systems, regulatory compliance logging applications, and market feed indices"
    },
    "hr-consultant": {
        name: "HR Consultant",
        income: 85000,
        expenses: 110,
        tools: "applicant parsing services, labor law tracking portals, and psychometric evaluation suites"
    },
    "agile-scrum-master": {
        name: "Agile Scrum Master",
        income: 105000,
        expenses: 90,
        tools: "enterprise sprint planning workspaces, digital retro whiteboards, and burndown chart tracking layers"
    },
    "legal-consultant": {
        name: "Freelance Legal Consultant",
        income: 140000,
        expenses: 500,
        tools: "statutory law research access, verified digital contract builders, and comprehensive malpractice coverage buffers"
    },
    "it-support-specialist": {
        name: "IT Support Specialist",
        income: 78000,
        expenses: 140,
        tools: "remote desktop terminal seats, network packet scanning modules, and diagnostic reporting frameworks"
    },
    "game-developer": {
        name: "Indie Game Developer",
        income: 92000,
        expenses: 260,
        tools: "commercial physics engine software, spatial mapping nodes, and compilation machine setups"
    },
    "interior-designer": {
        name: "Interior Designer",
        income: 82000,
        expenses: 190,
        tools: "3D architectural rendering software, material sample sourcing arrays, and spatial drafting toolsets"
    }

-------------------------------------------------------------------------------
BATCH D: VIRTUAL ADMINISTRATIVE & EDUCATION (Deploy at Week 9)
-------------------------------------------------------------------------------
    "executive-assistant": {
        name: "Executive Assistant",
        income: 58000,
        expenses: 60,
        tools: "encrypted communications lines, expense filing managers, and travel planning software"
    },
    "customer-support-agent": {
        name: "Customer Support Freelancer",
        income: 40000,
        expenses: 55,
        tools: "helpdesk ticket tracking seats, softphone cloud numbers, and macros macro library setups"
    },
    "data-entry-specialist": {
        name: "Data Entry Specialist",
        income: 38000,
        expenses: 30,
        tools: "optical character recognition software, spreadsheet hotkey macros, and data verification scripts"
    },
    "transcriptionist": {
        name: "Transcriptionist",
        income: 42000,
        expenses: 50,
        tools: "high-fidelity audio player foot-pedal systems, text expansion tools, and file distribution modules"
    },
    "online-tutor": {
        name: "Online Tutor",
        income: 50000,
        expenses: 75,
        tools: "interactive whiteboard software, subject curriculum vaults, and digital parent communication links"
    },
    "instructional-designer": {
        name: "Instructional Designer",
        income: 88000,
        expenses: 190,
        tools: "e-learning authoring tools, asset recording licenses, and training management databases"
    },
    "podcasting-consultant": {
        name: "Podcasting Consultant",
        income: 75000,
        expenses: 120,
        tools: "multi-track podcast hosting instances, distribution pipeline analysis tools, and dynamic ad placement configurations"
    },
    "resume-writer": {
        name: "Resume Writer & Career Coach",
        income: 60000,
        expenses: 45,
        tools: "Applicant Tracking System (ATS) checking algorithms, keyword optimization sets, and professional layout designs"
    },
    "notary-signing-agent": {
        name: "Notary Signing Agent",
        income: 64000,
        expenses: 180,
        tools: "e-notary public registration portals, high-security print servers, and physical bond insurance safeguards"
    }

-------------------------------------------------------------------------------
BATCH E: EMERGING AI, AR/VR & WEB3 ECOSYSTEMS (Deploy at Week 11)
-------------------------------------------------------------------------------
    "ai-prompt-engineer": {
        name: "AI Prompt Engineer & Consultant",
        income: 110000,
        expenses: 150,
        tools: "enterprise LLM API platform access, premium orchestration vector sandboxes, and vector database test registries"
    },
    "vr-ar-developer": {
        name: "AR/VR Spatial Developer",
        income: 115000,
        expenses: 320,
        tools: "spatial computing SDK enterprise licenses, virtual device testing rigs, and 3D environment asset databases"
    },
    "automation-architect": {
        name: "No-Code Automation Architect",
        income: 95000,
        expenses: 280,
        tools: "advanced logic webhook services, visual pipeline testing environments, and premium team cloud databases"
    },
    "fractional-cmo": {
        name: "Fractional Chief Marketing Officer",
        income: 160000,
        expenses: 240,
        tools: "premium market attribution software, executive tracking dashboards, and strategic diagnostic toolkits"
    },
    "fractional-cto": {
        name: "Fractional Chief Technology Officer",
        income: 180000,
        expenses: 380,
        tools: "enterprise architecture mapping nodes, software compliance portals, and rapid prototyping cloud spaces"
    },
    "vrtual-world-architect": {
        name: "Metaverse & 3D World Builder",
        income: 88000,
        expenses: 290,
        tools: "distributed engine computing passes, heavy render farm nodes, and spatial physics testing modules"
    },
    "synthetics-voice-designer": {
        name: "AI Voice & Audio Synthesizer",
        income: 72000,
        expenses: 140,
        tools: "neural speech cloning rendering allocations, digital workstation plugins, and sound isolation suites"
    },
    "sub-stack-strategist": {
        name: "Newsletter Growth Consultant",
        income: 68000,
        expenses: 85,
        tools: "audience analytics premium trackers, referral logic monitors, and cross-channel automation pipelines"
    },
    "notion-consultant": {
        name: "Certified Notion Architect",
        income: 80000,
        expenses: 60,
        tools: "workspace template distribution models, client collaboration hubs, and automation plugin setups"
    },
    "fintech-compliance-auditor": {
        name: "FinTech Compliance Consultant",
        income: 145000,
        expenses: 420,
        tools: "regulatory law legal feeds, banking sandbox testing registries, and strict encrypted storage solutions"
    }

-------------------------------------------------------------------------------
BATCH F: GEOGRAPHIC LOCALIZATION - UNITED KINGDOM & EUROPE (Deploy at Week 13)
-------------------------------------------------------------------------------
    "uk-web-developer": {
        name: "Web Developer (UK Pricing Model)",
        income: 65000,
        expenses: 200,
        tools: "HMRC accounting software bridges, corporate registry protections, and premium testing cloud frameworks"
    },
    "uk-graphic-designer": {
        name: "Graphic Designer (UK Pricing Model)",
        income: 48000,
        expenses: 95,
        tools: "Adobe UK licenses, structural asset packages, and regional printing profile templates"
    },
    "uk-copywriter": {
        name: "Copywriter (UK Pricing Model)",
        income: 45000,
        expenses: 35,
        tools: "SEO local database configurations, grammar monitoring software, and client pipeline managers"
    },
    "eu-seo-specialist": {
        name: "SEO Specialist (Eurozone Pricing Model)",
        income: 58000,
        expenses: 320,
        tools: "multilingual keyword index credits, international site data crawlers, and localization trackers"
    },
    "eu-ui-ux-designer": {
        name: "UI/UX Designer (Eurozone Pricing Model)",
        income: 70000,
        expenses: 120,
        tools: "GDPR-compliant user testing platforms, design system frameworks, and Figma design seats"
    },
    "uk-social-media-manager": {
        name: "Social Media Manager (UK Pricing Model)",
        income: 42000,
        expenses: 80,
        tools: "social distribution dashboard access, analytics tracking modules, and asset editing software"
    },
    "eu-shopify-developer": {
        name: "Shopify Developer (Eurozone Pricing Model)",
        income: 75000,
        expenses: 180,
        tools: "multi-currency sandbox environments, locale testing instances, and local deployment pipelines"
    },
    "uk-virtual-assistant": {
        name: "Virtual Assistant (UK Pricing Model)",
        income: 32000,
        expenses: 30,
        tools: "calendar coordination tools, localized invoicing layouts, and cloud communication spaces"
    },
    "uk-project-manager": {
        name: "Contract Project Manager (UK Pricing Model)",
        income: 72000,
        expenses: 70,
        tools: "enterprise sprint boards, timeline management nodes, and milestone reporting tools"
    },
    "eu-business-coach": {
        name: "Business Consultant (Eurozone Pricing Model)",
        income: 80000,
        expenses: 110,
        tools: "diagnostic metric frameworks, white-label instruction manuals, and calendar scheduling modules"
    }

-------------------------------------------------------------------------------
BATCH G: HIGH-TIER SPECIALIZED TRADES & CREATIVES (Deploy at Week 15)
-------------------------------------------------------------------------------
    "architectural-visualizer": {
        name: "Architectural 3D Visualizer",
        income: 85000,
        expenses: 280,
        tools: "CAD engine compatibility bridges, material asset catalogs, and high-performance rendering array nodes"
    },
    "package-designer": {
        name: "Product Packaging Designer",
        income: 78000,
        expenses: 140,
        tools: "die-line production tools, realistic 3D mock-up engines, and pantone color calibration kits"
    },
    "fashion-consultant": {
        name: "Freelance Fashion Designer",
        income: 68000,
        expenses: 110,
        tools: "pattern vector engineering programs, textile sourcing directories, and mood board composition kits"
    },
    "medical-writer": {
        name: "Medical & Regulatory Writer",
        income: 105000,
        expenses: 130,
        tools: "peer-reviewed clinical database access, scientific citation engines, and credential indexing vaults"
    },
    "grant-writer": {
        name: "Freelance Grant Writer",
        income: 72000,
        expenses: 60,
        tools: "institutional funding search portals, compliance checklist sheets, and metric validation trackers"
    },
    "sustainability-consultant": {
        name: "Sustainability & ESG Consultant",
        income: 98000,
        expenses: 150,
        tools: "carbon output modeling tables, ESG framework report generators, and compliance data matrices"
    },
    "voice-coach": {
        name: "Vocal Coach & Speech Trainer",
        income: 58000,
        expenses: 65,
        tools: "high-fidelity audio interface suites, real-time waveform tracking displays, and booking engines"
    },
    "event-planner": {
        name: "Corporate Event Strategist",
        income: 82000,
        expenses: 90,
        tools: "floorplan rendering spaces, floor asset booking portals, and collaborative budget trackers"
    },
    "videographer": {
        name: "Independent Videographer",
        income: 74000,
        expenses: 400,
        tools: "camera insurance policy protections, advanced lighting maintenance buffers, and pro video codecs"
    },
    "b2b-sales-consultant": {
        name: "B2B Lead Generation Consultant",
        income: 110000,
        expenses: 350,
        tools: "corporate data enrichment tools, cold email dispatch validation registries, and pipeline CRM instances"
    }
*/

// ============================================================================
// 3. CORE CORE TEMPLATE HUMANIZER ENGINE
// ============================================================================
function getDynamicContent(jobKey) {
    const job = professionData[jobKey];
    if (!job) return null;

    return {
        title: `Freelance ${job.name} Hourly Rate Calculator`,
        metaTitle: `What Should a Freelance ${job.name} Charge Per Hour?`,
        intro: `As a professional freelance ${job.name.toLowerCase()}, setting your price point involves more than just picking a random number. Your rate must structurally absorb the monthly cost of ${job.tools}, alongside self-employment tax liabilities and the unavoidable, unbillable hours spent tracking down clients and organizing proposals. Use this calculator pre-configured with industry baselines to secure your lifestyle margins.`
    };
}