/**
 * English UI dictionary (SPEC §12).
 * In components, strings come only from the dictionary — hardcoding is forbidden.
 */
import type { UIDictionary } from './types';

export const en: UIDictionary = {
  siteName: 'Albania Guidebook',
  tagline: 'Albania travel guide: vetted places',
  langName: 'English',
  skipToContent: 'Skip to content',
  backToTop: 'Back to top',
  cookieConsent: {
    text: 'We use cookies only for analytics (Google Analytics) to understand what readers find useful. Analytics runs only with your consent.',
    accept: 'Accept',
    decline: 'Decline',
    aria: 'Cookie consent',
    learnMore: 'Learn more',
  },
  notFound: {
    heading: 'Page not found',
    text: 'The page you are looking for doesn’t exist or has moved. Use the menu above or head back to the homepage.',
    home: 'Go to homepage',
  },
  liveData: {
    heading: 'Right now in Albania',
    desc: 'Weather in the main cities and the lek exchange rate — check before you travel.',
    weather: 'Weather',
    sea: 'Sea, Sarandë',
    fx: 'Lek rate',
    cities: { tirana: 'Tirana', durres: 'Durrës', sarande: 'Sarandë' },
    updated: 'updated',
    source: 'weather: open-meteo · rate: ExchangeRate-API',
  },
  nav: {
    home: 'Home',
    attractions: 'What to see',
    cities: 'Cities',
    food: 'Food',
    entertainment: 'Entertainment',
    routes: 'Routes',
    planning: 'Before you go',
    transport: 'Transport',
    'car-rental': 'Car rental',
    insurance: 'Insurance',
    news: 'News',
    relocation: 'Relocation',
    about: 'About',
    contact: 'Contact',
  },
  header: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuShort: 'Menu',
    primaryNav: 'Primary navigation',
    menuNav: 'All sections',
  },
  lang: {
    label: 'Language',
    switchTo: 'Switch to {lang}',
  },
  footer: {
    disclaimer:
      'Some links on the site are affiliate links. This does not change the price for you and helps support the project.',
    navHeading: 'Sections',
    note: 'Places are chosen by rating and cross-checked with experienced travelers, guides and locals.',
    creatorPrefix: 'Made by',
    creator: 'KOBTSEV',
    privacy: 'Privacy & Cookie Policy',
  },
  verified: {
    inPlace: 'Verified · {date}',
    short: 'Verified',
    updated: 'Updated · {date}',
    caption: 'by experienced travelers, guides, and locals',
    photoAlt: 'Photo of the place',
    samplePlaceholder: 'date verified',
  },
  home: {
    heroTitle: 'Albania travel guide: vetted places',
    heroSubtitle:
      'Plan your Albania trip without the tourist traps: we pick places by rating and cross-check them with guides and locals. Updated regularly.',
    heroCredit: 'Photo: Braveheart / Wikimedia Commons · CC BY-SA 4.0',
    photoPrefix: 'Photo',
    search: {
      label: 'Search the site',
      placeholder: 'Where are you headed? Theth, Tirana, car rental…',
      emptyNoContent:
        'Nothing found yet. Try another word — search runs over the articles already published.',
      emptyNoMatch: 'Nothing found. Try a different query.',
      hint: 'Search runs over already published articles, right in your browser.',
    },
    entriesHeading: 'Where to start',
    tiles: {
      attractions: 'Nature, churches, fortresses, waterfalls, and canyons of Albania',
      cities: 'City guides: what to see, where to eat, how to get around',
      food: 'What to try and where to eat honestly — without tourist markups',
      entertainment: 'Where to go out: clubs and bars, quizzes, beaches, casinos, and parks',
      routes: 'Ready-made road trips: a day-by-day plan, budget, and map',
    },
    showcase: {
      heading: 'Albania showcase',
      lead: 'The best places, routes and vetted venues — Albania at a glance.',
      partnerNote: 'Includes partner placements.',
      aria: 'Showcase: featured places, routes and venues',
      adKicker: 'Advertising',
      adTitle: 'Place your business here',
      kickers: {
        city: 'City',
        route: 'Route',
        sight: 'See',
        food: 'Food',
        nightlife: 'Nightlife',
      },
    },
    allSectionsHeading: 'All sections',
    trustHeading: 'Verified by experienced travelers, guides, and locals',
    trustLead:
      'We don’t rely on memory or old blog posts. Every place is chosen and cross-checked across several sources, so the details stay current.',
    trust: {
      ratingTitle: 'Selected by high ratings',
      ratingText: 'The guide includes places rated 4+★ across several independent sources.',
      localsTitle: 'Confirmed by locals and guides',
      localsText:
        'We check the details with experienced travelers, guides, and locals, not from old blogs.',
      updatedTitle: 'Regular updates',
      updatedText: 'Each article shows the date of its last check — we revisit them by season.',
    },
    badgeSampleHeading: 'What the verification mark looks like',
    sectionsHeading: 'Guide sections',
    freshHeading: 'Latest articles',
    freshEmpty:
      'Nothing to show here right now — please check back soon. We keep adding vetted, up-to-date guides.',
    about: {
      heading: 'About the project',
      text: 'Albania Guidebook is a travel guide to Albania: attractions, cities, food, routes, and car rental. We pick places by rating, cross-check the facts, and date-stamp every article — here’s how we work.',
      link: 'More about the project',
    },
  },
  newsFeed: {
    recentHeading: 'Latest news',
    all: 'All news',
    recentEmpty: 'No recent news yet.',
  },
  actions: {
    more: 'Read more',
    affiliateDisclosure: 'Affiliate link — the price for you stays the same.',
  },
  breadcrumbs: {
    home: 'Home',
    aria: 'Breadcrumbs',
  },
  hub: {
    listHeading: 'In this section',
    empty:
      'The first articles in this section are coming soon. We’re preparing vetted guides with up-to-date information.',
    sections: {
      attractions: {
        intro: [
          'What to see in Albania — from the peaks of the Albanian Alps and the UNESCO old towns of Berat and Gjirokastër to the ancient ruins of Butrint, waterfalls, canyons, and centuries-old churches. In this section we gather the places worth traveling for: nature, fortresses, monasteries, and viewpoints across the country — from the mountains of the north to the Riviera in the south.',
          'For each attraction we try to honestly answer the main questions: what exactly to see, how to get there, how much time to set aside, and when to go so you’re not disappointed. Where it makes sense, the end of the article has tips on car rental and tours, because the most convenient way to reach many places in Albania is by car.',
        ],
      },
      cities: {
        intro: [
          'Albania’s cities are like different countries in miniature: lively, modern Tirana, the port and beaches of Durrës, seaside Sarandë on the Ionian, the stone UNESCO towns of Berat and Gjirokastër, and Shkodër at the gateway to the Alps. This section has city guides: what to see, where to eat honestly, how to get there, and where to stay.',
          'Cities are a handy starting point for planning: routes branch out from them, attractions are nearby, and this is where you book accommodation, pick up a car, and sort out connectivity. That’s why in the city guides we link to related sections — food, routes, and rental — to put your whole trip in one place.',
        ],
      },
      entertainment: {
        intro: [
          'Entertainment in Albania — where to go for experiences beyond ancient churches and mountains: Adriatic and Ionian beaches, the Riviera, cable cars and parks, botanical gardens, museums, and casinos. In this section we gather places to relax and have fun across the country’s cities — with a focus on what matters in practice: where it is, how much admission costs, and when it’s open.',
          'We keep building the section out, city by city. Prices and opening hours are listed per place, so a night out or a day trip is easy to plan ahead.',
        ],
      },
      routes: {
        intro: [
          'Ready-made road trips around Albania: a day-by-day plan, a budget guideline, key stops, and a map. The country is compact but mountainous — a car opens up what’s hard to reach by public transport: the passes of the Albanian Alps, the wine villages, the canyons, and the road to Theth and the Valbona valley.',
          'How to choose a direction. North — the Albanian Alps with Theth, the Valbona valley, and Shkodër as the gateway; the stone UNESCO towns of Berat and Gjirokastër inland; south — the Albanian Riviera along the Ionian, from Sarandë and Ksamil to Himarë, Dhërmi, and Borsh, with the ruins of Butrint nearby; the coast — the Tirana → Durrës → Sarandë corridor. And to see it all in one trip, there’s the “Grand Tour of Albania,” roughly two weeks long.',
          'Season and preparation. The best time for most routes is from late spring to autumn. In winter the mountain sections (the roads into the Albanian Alps, the pass to Theth, the road to Valbona) are harder, and passes are sometimes closed because of snow — check road conditions before setting off. For the high mountains and dirt roads, take an SUV. The mileage, days, and budget in the cards are guidelines, not exact measurements: it all depends on the number of stops, the season, and accommodation.',
        ],
      },
      transport: {
        intro: [
          'Transport in Albania — how to get around the country: the airport, ferries, furgon minibuses, intercity buses, and transfers. This section has practical guides: how to get from point to point, roughly how long the trip takes, and what options there are.',
          'Here you’ll find Tirana International Airport (the main gateway), the ferry ports of Durrës (from Italy) and Sarandë (from Corfu), city transport, and popular routes like Tirana → Durrës → Sarandë (bus, car) — and we keep adding directions and modes of transport. It’s handy to plan transport together with the “Car rental” and “Routes” sections.',
        ],
      },
      'car-rental': {
        intro: [
          'Car rental in Albania is one of the most common questions before a trip: where to get a car, how much it costs, whether you need a deposit, and what catches there are in the contracts. In this section we break down rental by city and airport and compare the options — from international aggregators to local rental companies.',
          'We write about rental from the perspective of a traveler who has personally dealt with deposits, surcharges, and “insurance on site.” Specific prices and terms are something that goes out of date fast, so we mark the date they’re current and don’t pass off old figures as fresh.',
        ],
      },
      insurance: {
        intro: [
          'Insurance for a trip to Albania and for living in the country is a topic that’s easy to put off and that people regret at the worst possible moment. In this section we break down which insurance policies actually work for travelers and relocators, how they differ, and what to look for when choosing.',
          'Different readers need different solutions: a tourist staying a week needs one kind of policy, while someone living in Albania for months is better served by monthly, renewable cover. We focus on what works for international travelers — from short-trip travel-medical policies to nomad subscriptions — and on what to check before you buy.',
        ],
      },
      planning: {
        intro: [
          'Planning a trip to Albania is what people look up before booking: do you need a visa, when to go, how much money to bring, and what about insurance and safety. This section gives short, practical answers with links to the sections that cover each topic in depth.',
          'We keep only what actually affects your prep here: visa and entry rules, seasons and weather, money and budget, the mandatory insurance. Regulatory things (visas, insurance) change fast — we mark the date and link the official source rather than passing off old facts as current.',
        ],
      },
      news: {
        intro: [
          'News and updates to the guide: new vetted places, seasonal tips, and changes worth knowing before a trip. Albania changes — venues open and close, prices and rental terms shift, new routes appear — and this section keeps the guide up to date.',
          'We don’t chase “hot” news for the sake of traffic. What lands here is what actually affects trip planning: what we’ve re-checked, what we’ve updated by season, and which places we’ve added after cross-checking with locals and guides. The entries show a date — so you always know how current the information is.',
        ],
      },
    },
  },
  map: {
    placeHeading: 'On the map',
    placeAria: 'Interactive map with the location of the place',
    placeHint: 'The map loads on click — to keep the page lightweight.',
    show: 'Show map',
    error: 'The map didn’t load. Check your connection and refresh the page.',
    attribution: '© OpenStreetMap contributors',
    openInGoogle: 'Open in Google Maps',
    label: 'Map · Google',
  },
  access: {
    heading: 'Distance',
    km: 'km',
    origins: {
      tirana: 'Tirana',
      durres: 'Durrës',
      sarande: 'Saranda',
    },
  },
  visit: {
    heading: 'Admission and opening hours',
    price: 'Admission price',
    hours: 'Opening hours',
    checked: 'Details checked',
  },
  gallery: {
    heading: 'Photos',
    dialogName: 'Photo viewer',
    open: 'Open photo',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
  article: {
    tocHeading: 'Contents',
    relatedHeading: 'Read also',
    about: {
      heading: 'How we select and verify places',
      text: 'Places make it into the guide by high ratings across several independent sources and are cross-checked with experienced travelers, guides, and locals. We don’t reprint others’ ratings verbatim and we update articles regularly — each one shows the date it was checked.',
      link: 'More about the project',
    },
    demoNoteHeading: 'An example listing',
    demoNote:
      'This is a sample card for this section — a real venue will appear here with its address, opening hours, prices and our own description. Want your venue featured? Get in touch via the Contact page.',
    demoLabel: 'Example',
  },
  route: {
    summary: {
      days: 'Days on the road',
      daysValue: '{count}',
      distance: 'Distance',
      distanceValue: '≈{km} km',
      budget: 'Budget from',
      season: 'Best season',
    },
    timelineHeading: 'Route day by day',
    timelineAria: 'Route stops in order',
    stopKm: '{km} km from the start',
    stopStart: 'Route start',
    stopStay: 'stop ≈{min} min',
    mapHeading: 'Route map',
    mapHint: 'The map with stops loads on click — to keep the page lightweight.',
    mapAria: 'Interactive route map with stops',
    affiliateHeading: 'A car for this route',
    affiliatePlaceholder:
      'The most convenient way to do this route is by car. How to get a car without surprises is in the “Car rental” section.',
    affiliateNote: 'Get a car for this route — compare prices on Trip.com.',
    affiliateHotelsHeading: 'Where to stay along the route',
    affiliateHotelsNote: 'Overnight stops along the way — hotels and apartments on Trip.com.',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    demoNote:
      'Mileage, travel time, and budget are rounded guidelines. Before your trip, verify the current figures, prices, and road conditions.',
  },
  about: {
    heading: 'About the project',
    breadcrumb: 'About',
    intro: [
      'Albania Guidebook is a guide to all of Albania, available in English. We bring together in one place everything you need for a trip: attractions, cities, food, ready-made routes, car rental, insurance, and news. The goal is simple — to help you plan a trip without outdated advice and tourist traps.',
      'We don’t write “from memory” and we don’t retell other people’s articles. The guide has a clear principle: how we select places, how we verify facts, and why each article shows the date it was checked. More on that below.',
    ],
    sections: [
      {
        heading: 'How we select places',
        paragraphs: [
          'Not everything makes it into the guide — only places with high ratings, from 4★ and up, and across several independent sources at that. If a place is rated well in just one place while others are silent or negative about it, that’s not a consensus for us, and we don’t add it.',
          'A high rating from several sources is a filter at the entrance, not a finished article. Then our work begins: our own honest description, a check of the details, and a current date. Thin “tick-the-box” spots with no real value don’t make it into the guide.',
        ],
      },
      {
        heading: 'How we verify facts',
        paragraphs: [
          'We cross-check the details — how to get there, when to go, what to budget time and money for — with experienced travelers, guides, and locals, rather than taking them from blogs five years old. That’s collective verification: several points of view instead of a single opinion.',
          'Each article shows the date of its last check or update. So you immediately know how current the information is. We revisit articles by season: places change, some close, prices and terms drift — the guide should reflect that.',
        ],
      },
      {
        heading: 'Honest about figures and prices',
        paragraphs: [
          'We don’t reprint others’ ratings and review counts verbatim — that’s platform data, and their rules forbid such copying. For us a rating is a selection criterion, not content: to see the current rating and reviews, follow the link to the source or the map.',
          'Prices, opening hours, and terms in our articles are guidelines as of the check date, not a guarantee. Albania changes fast, so always verify the details that matter for your trip (the rental price, the deposit, the admission cost) on the other side before you pay.',
        ],
      },
      {
        heading: 'How the project runs',
        paragraphs: [
          'Some links on the site are affiliate links: car rental, accommodation, tours, insurance, connectivity. If you follow such a link and book something, we get a small commission from the service. The price for you stays the same — and the project exists and is updated on these funds.',
          'Partnership doesn’t affect selection: a place makes it into the guide for its rating and verification, not because it has an affiliate program. If it’s better or more honest to recommend an option without an affiliate link, we recommend it.',
        ],
      },
    ],
    feedback: {
      heading: 'Spotted an inaccuracy?',
      text: 'The guide lives on updates. If a place has closed, prices or terms have changed — or you want to suggest a good place — write to us. That keeps the information current for everyone.',
      link: 'Go to contact',
    },
  },
  insurance: {
    heading: 'Insurance for a trip to Albania: rules and where to get it',
    breadcrumb: 'Insurance',
    intro: [
      'Travel medical insurance is strongly recommended for everyone visiting Albania, and for some travelers it may be required at the border or by their airline. Below are the practical points, the minimum you’d want a policy to cover, and the services through which you can get one.',
      'The topic is regulatory: entry rules and border-check procedures can change. So we’ve gathered the key points into one block and advise verifying them against official sources before your trip — links to the primary sources are at the bottom of the page.',
    ],
    updatedIso: '2026-06-14',
    callout: {
      heading: 'Current rules — verify before your trip',
      disclaimer:
        'Entry and insurance requirements for Albania can differ by nationality and can change. Travel medical insurance is strongly recommended for everyone, and may be required at the border or by your airline — the details (wording, amounts, check procedures) may change, so be sure to verify they’re current before your trip.',
      sourceNote:
        'The primary source is official resources: embassies, the Ministry for Europe and Foreign Affairs, and the border authorities of Albania. Links to the sources are at the bottom of the page.',
    },
    guideLink: 'In depth: how to choose and buy a policy',
    requirements: {
      heading: 'What you need to know',
      items: [
        'Travel medical insurance is recommended for all foreign tourists, whatever their nationality — and it’s worth getting a policy for children too.',
        'Aim for a comfortable coverage limit (many travelers choose at least €30,000) — check the exact figure that suits your trip.',
        'The policy should cover the entire trip: from the entry date to the exit date.',
        'The issuer can be either a local Albanian or a foreign insurance company.',
        'Coverage is best when it includes both medical expenses and accident insurance — a “health and accident” policy. Medical evacuation and repatriation are worth having as well.',
        'A policy with English-language documents is the safest choice — it is the easiest to use at the border or with a clinic.',
        'A policy may be checked on entry — at the airport or at land border crossings — and airlines may ask for one as early as check-in. Requirements vary by nationality, so verify the rules that apply to you.',
        'Entry and insurance rules can change — confirm the current requirements with official Albanian sources before you travel.',
      ],
    },
    penalty: {
      heading: 'What happens without a policy',
      paragraphs: [
        'Travelling without insurance is a gamble: if anything goes wrong, you pay for treatment out of pocket, and depending on your nationality entry may be harder — so it’s better to get a policy in advance rather than counting on “sorting it out on site.”',
        'For active travel — trekking in the Albanian Alps, skiing, rafting, and other extreme activities — you need a separate coverage option: a basic tourist policy may not cover such cases. Verify the coverage terms for extreme activities with the insurer before your trip.',
      ],
    },
    services: {
      heading: 'Where to get a policy',
      lead: 'Below are the services through which travelers most often get insurance for Albania. Whichever option you choose, check that the policy fits your trip: a comfortable coverage limit for the entire stay, ideally a policy in English, and accident insurance included (basic plans often don’t have it — it’s added as a separate option). Prices depend on age, duration, and the coverage set, so we give only guidelines, without exact amounts.',
      ctaPlaceholder:
        'Sign up on the service’s website. Before buying, verify the current terms and rate.',
      items: [
        {
          name: 'International travel insurers',
          note: 'single-trip travel-medical cover',
          text: 'Mainstream providers such as World Nomads or Heymondo can work well for US, UK, EU, Canadian, and Australian travelers on a fixed trip. Check that Albania is covered, that the certificate is available in English, and that your planned activities — driving, hiking, rafting, or skiing — are not excluded.',
        },
        {
          name: 'SafetyWing (Nomad Insurance)',
          note: 'for digital nomads and long trips',
          text: 'Subscription insurance billed monthly — convenient for those who live in Albania or travel for a long time and don’t want to buy a policy for a fixed period. Suits a relocation and wintering scenario. The service has changed its terms and rates — verify the current ones before buying.',
        },
        {
          name: 'Comparison sites',
          note: 'compare several insurers before you buy',
          text: 'Insurance comparison sites can help you compare limits, activity coverage, deductibles, and cancellation terms in one place. The available insurers differ by your country of residence, so treat any comparison result as a starting point and verify the final policy wording before payment.',
        },
        {
          name: 'Local Albanian insurers',
          note: 'companies based in Albania',
          text: 'Albanian companies issue policies on the spot, often with English-language documents. This can be a convenient option if you want a policy that fits local rules and is easy to use with a local clinic — compare the coverage and terms with the international services above.',
        },
      ],
    },
    affiliate: {
      title: 'Get SafetyWing insurance',
      note: 'Nomad Insurance billed monthly — convenient for long trips and living in Albania. Before buying, verify the current terms and that they meet the entry requirements.',
      label: 'Sign up online',
    },
    notes: {
      heading: 'What’s important to keep in mind',
      items: [
        'Check that the policy includes accident insurance. A solid travel policy is a “health and accident” one, and in basic medical plans an accident often comes as a separate option: medical coverage alone may not be enough.',
        'EU and UK travelers: an EHIC or UK GHIC card does not cover Albania, because Albania is outside the EU/EEA system — you still need private travel insurance here.',
        'Buy the policy before entering Albania: some services have a 5–7 day “waiting period” — the insurance doesn’t take effect immediately after payment.',
        'Visa-free entry does not replace insurance: these are different things, and being allowed in without a visa doesn’t mean your medical costs are covered.',
        'Car rental insurance is a separate matter. A medical policy doesn’t cover damage to the car: for the rental you need your own insurance (CDW / collision), which is arranged together with the rental.',
      ],
      rentalLink: 'More about car rental and its insurance',
    },
    claims: {
      heading: 'What to do in case of a claim',
      items: [
        'Keep your insurer’s assistance service contact (usually a 24/7 phone line or app) — it’s listed in your policy. Save it to your phone before the trip.',
        'If you fall ill or get injured, call the assistance service first whenever possible: many policies require treatment to be pre-authorised. If you go to a clinic without it, the costs may not be reimbursed.',
        'Keep all documents: bills and payment receipts, discharge notes, diagnoses, referrals and prescriptions. Without supporting documents, reimbursement is difficult.',
        'Check how your policy works: the insurer either pays the clinic directly (direct billing) or you pay yourself and are reimbursed later against your receipts.',
        'Respect the deadline for filing a claim — it’s stated in your policy terms. Don’t delay: late claims are often rejected.',
        'Albania uses the European emergency number 112 (ambulance, police, rescue). In a serious situation, call for help first and sort things out with the insurer afterwards.',
      ],
    },
    photos: [],
    sources: {
      heading: 'Sources',
      items: [
        'Your country’s embassy or foreign ministry travel advice for Albania — entry rules and whether insurance is required for your nationality.',
        'Ministry for Europe and Foreign Affairs of Albania (entry and visa rules) — punetejashtme.gov.al.',
        'Albanian Border and Migration Police — checks and documents required at entry.',
        'Local Albanian insurance companies — coverage limits and policy language.',
      ],
    },
  },
  contacts: {
    heading: 'Contact',
    breadcrumb: 'Contact',
    intro: [
      'The guide stays current thanks in part to readers. If you’ve spotted outdated information, know a good place, or have a question about a trip — tell us.',
      'There are no forms on the site — this is a deliberate choice: less spam and no storing of your personal data. For suggestions, advertising, and any questions, write to us by email — it’s listed below.',
    ],
    reasonsHeading: 'What’s worth writing about',
    reasons: [
      'A place has closed, moved, or its prices and terms have changed — we’ll help update the article.',
      'You want to suggest a vetted place, route, or tip for the guide.',
      'Advertising, collaboration, or a commercial proposal — we’ll discuss placement terms.',
      'You have a trip question you didn’t find an answer to in the articles.',
      'You found an error or inaccuracy in the text.',
    ],
    channels: {
      heading: 'How to get in touch',
      emailLabel: 'Write to us by email:',
      email: 'info@albaniaguidebook.com',
      emailUrl: 'mailto:info@albaniaguidebook.com',
    },
  },
  privacy: {
    heading: 'Privacy & Cookie Policy',
    breadcrumb: 'Privacy',
    updatedLabel: 'Last updated',
    updatedIso: '2026-06-30',
    intro: [
      'This page explains what limited data this website collects, the cookies it uses, and the choices you have. We keep it deliberately simple: this is a static travel guide with no accounts, no forms, and no newsletter, so we don’t ask for or store your personal details.',
    ],
    sections: [
      {
        heading: 'What we collect',
        paragraphs: [
          'We use Google Analytics 4 to understand which articles readers find useful — for example, which pages are visited and roughly which country a visit comes from. This is aggregate, statistical data; we don’t use it to identify you personally.',
          'Analytics runs only after you agree to it. Until you accept the cookie banner, analytics is switched off and no analytics cookies are set (Google Consent Mode v2, default “denied”). If you decline, the site works exactly the same — we simply collect no analytics.',
        ],
      },
      {
        heading: 'Cookies we use',
        paragraphs: [
          'Analytics cookies (set by Google Analytics, such as _ga) — only after you accept. They help us count visits and see which content works. You can clear them at any time in your browser.',
          'Your consent choice is stored locally in your browser so the banner doesn’t ask again on every page. It stays on your device and isn’t sent to us.',
          'We don’t use advertising, social-media, or other tracking cookies beyond the analytics described above.',
        ],
      },
      {
        heading: 'Affiliate links',
        paragraphs: [
          'Some outbound links to partners — for example car rental, transfers, insurance, eSIM, tours, or hotels — are affiliate links. If you book through them we may earn a commission at no extra cost to you; this is how the guide pays for itself. We only point to services we consider worth it, and a commission never changes our selection.',
          'When you follow such a link you leave this site, and the partner’s own privacy policy and cookies then apply. We have no control over how partners process your data.',
        ],
      },
      {
        heading: 'Third-party services',
        paragraphs: [
          'Google Analytics processes the analytics data described above, once you consent — see Google’s own privacy policy for details.',
          'The site is served by our hosting provider, which may process standard technical request logs (such as your IP address) to deliver pages and protect against abuse. Some pages show live weather and currency rates fetched from public third-party APIs; those requests don’t send any personal data about you.',
        ],
      },
      {
        heading: 'Your choices and rights',
        paragraphs: [
          'You can accept or decline analytics in the cookie banner, and change your mind any time by clearing this site’s data in your browser, which makes the banner appear again.',
          'You can also block or delete cookies in your browser settings, or use Google’s analytics opt-out browser add-on.',
          'If you’re in the EU or UK, data-protection law gives you rights over your personal data, such as access or erasure. Because this site stores no personal data of its own, these mainly concern consent-based analytics — and you can withdraw consent at any time as described above. For any request, email us (below).',
        ],
      },
      {
        heading: 'Changes to this policy',
        paragraphs: [
          'We may update this policy as the site evolves; the date above shows the last revision. Significant changes will be reflected on this page.',
        ],
      },
    ],
    contactLabel: 'Questions about privacy or this policy? Email us at',
  },
  relocation: {
    heading: 'Relocating to Albania: how to settle in',
    breadcrumb: 'Relocation',
    uslugi: {
      heading: 'Services for living in Albania',
      text: 'Real estate agents, cleaning, moving, repairs, documents, translators — a directory of vetted services so you don’t have to dig through chats.',
      cta: 'Open services',
    },
    intro: [
      'Albania is one of the easiest destinations for a long stay and relocation: visa-free or easy entry for citizens of many countries, inexpensive living, fast internet, a mild Mediterranean climate, and growing expat and digital-nomad communities. This section is a practical guide to settling in on the ground.',
      'We start with the non-regulatory things everyone needs: housing, connectivity, banking, transport, insurance. Documents, visas, and taxes are regulated by the state, and they change periodically — for those we give direct links to official sources and are preparing separate breakdowns.',
    ],
    updatedIso: '2026-06-15',
    callout: {
      heading: 'Documents and taxes change — verify with the primary source',
      disclaimer:
        'The rules for entry, residence permits, business registration, and taxes in Albania are revised periodically. Don’t rely on retellings in chats and outdated articles — verify the terms as of the time of your move directly with the government bodies (links below).',
      sourceNote:
        'That’s why we don’t fix specific deadlines, amounts, and requirements here as unchanging, but point you to the official sites — they always have the current version.',
    },
    guides: {
      heading: 'Detailed guides',
      lead: 'In-depth, non-regulatory how-tos for settling in — updated as things change.',
    },
    steps: {
      heading: 'Where to start on the ground',
      items: [
        {
          title: 'Housing for your first weeks',
          text: 'For the first weeks it’s convenient to stay in a hotel, guesthouse, or apart-hotel, and look for a long-term rental on the ground, having seen the neighborhood in person. Listings turn up on local property portals and international booking sites; there are also many options through local chats and agencies.',
        },
        {
          title: 'SIM card and internet',
          text: 'A local SIM is sold with a passport at the airport and at the mobile operators’ shops; the main carriers cover the cities and the coast well. Mobile internet is fast and inexpensive, Wi-Fi is everywhere in the cities; this is one of Albania’s strengths for remote work.',
        },
        {
          title: 'Bank account',
          text: 'An account and a card are opened for foreigners by the major banks operating in Albania. Requirements and check times are periodically tightened, so verify the document set and terms at a branch in advance.',
        },
        {
          title: 'Long-term rental',
          text: 'The lease is usually for 6–12 months, with a deposit most often equal to one month. Prices depend on the city and season: on the coast, places like Sarandë and Durrës get more expensive in summer, while in Tirana demand is steadier year-round. Check the meters, the internet, and who pays for utilities.',
        },
        {
          title: 'Transport and getting around',
          text: 'In the cities — cheap public transport (in Tirana, a dense city bus network); between cities — buses and furgon minibuses, plus ferries along the coast. For freedom of movement many rent a car — how that works is in our rental section.',
        },
        {
          title: 'Health and insurance',
          text: 'There are public and private clinics; the level of private medicine in the big cities is good. For the move and for trips, medical insurance with coverage abroad is convenient — options are in our insurance section.',
        },
        {
          title: 'Daily life and community',
          text: 'The lek (L) — cash is needed in smaller towns and the regions, while in the cities cards are accepted almost everywhere, and on the coast and in tourism many prices are quoted in euros. Tirana and the coastal towns have growing international communities, and cafes and services often speak English and Italian — it’s easy to adapt even without Albanian.',
        },
      ],
    },
    affiliate: {
      title: 'Where to stay the first weeks',
      note: 'Hotels and apartments for your first weeks in Albania — compare prices on Trip.com.',
      label: 'Find a place for your first weeks',
    },
    esim: {
      title: 'eSIM with internet for your first days',
      note: 'Mobile internet from arrival, until you get a local SIM — the eSIM activates online.',
      label: 'Buy an eSIM for Albania',
    },
    links: {
      heading: 'What’s already on the site',
      lead: 'Practical sections that come in handy when relocating:',
      items: [
        { section: 'insurance', text: 'medical insurance with coverage abroad' },
        { section: 'car-rental', text: 'car rental: how, where, and without overpaying' },
        { section: 'transport', text: 'how to get there and travel between cities' },
        { section: 'cities', text: 'Albania’s cities — where to live and what’s nearby' },
        { section: 'food', text: 'where to eat: vetted places by city' },
      ],
    },
    regulatory: {
      heading: 'Documents, visas, and taxes: official sources',
      lead: 'For these topics we point you straight to government sites — they have the current rules, deadlines, and amounts. We prepare separate breakdowns relying on these same sources.',
      items: [
        {
          topic: 'Visa, visa-free entry, and length of stay',
          org: 'Ministry for Europe and Foreign Affairs of Albania',
          url: 'https://punetejashtme.gov.al/en/',
        },
        {
          topic: 'Residence permit and public services',
          org: 'e-Albania government services portal',
          url: 'https://e-albania.al/',
        },
        {
          topic: 'Taxes and self-employment',
          org: 'General Directorate of Taxes of Albania',
          url: 'https://www.tatime.gov.al/',
        },
        {
          topic: 'Registering a company or sole proprietorship',
          org: 'National Business Center (QKB)',
          url: 'https://qkb.gov.al/',
        },
        {
          topic: 'Driver’s license and vehicle registration',
          org: 'General Directorate of Road Transport Services',
          url: 'https://e-albania.al/',
        },
      ],
      linkLabel: 'official site',
    },
    notes: {
      heading: 'Nuances people ask about',
      items: [
        'The language is Albanian, but in the cities you can easily get by with English and Italian: signs and menus are often duplicated.',
        'The money is the lek (L), and on the coast and in tourism many prices are quoted in euros. We show the current rate on the home page in the live block.',
        'Internet and connectivity are cheap and fast, which is why remote workers love Albania.',
        'Housing on the coast (Sarandë, Durrës) gets noticeably more expensive in the summer season — worth keeping in mind for a long-term rental.',
      ],
    },
    sources: {
      heading: 'Official sources',
      items: [
        'Ministry for Europe and Foreign Affairs of Albania (visa, entry) — punetejashtme.gov.al',
        'e-Albania government services portal (residence permit, civil registry) — e-albania.al',
        'General Directorate of Taxes of Albania (taxes, self-employment) — tatime.gov.al',
        'National Business Center, QKB (business registration) — qkb.gov.al',
        'Road transport and licensing services via e-Albania (license, vehicle registration) — e-albania.al',
      ],
    },
  },
  eda: {
    heading: 'Where to eat in Albania',
    lead: 'Restaurants, cafes, wine bars, bakeries and markets — by city. Each place has its address, hours, our honest write-up and a link to the map.',
    breadcrumbHome: 'Home',
    filtersLegend: 'Place filters',
    filters: {
      cityLabel: 'City',
      districtLabel: 'District',
      cuisineLabel: 'Cuisine',
      priceLabel: 'Price level',
      anyOption: 'Any',
      reset: 'Reset filters',
    },
    cuisineKeys: {
      albanian: 'Albanian',
      seafood: 'Seafood',
      wine: 'Wine bar',
      cafe: 'Café',
      bakery: 'Bakery',
      vegetarian: 'Vegetarian',
      asian: 'Asian',
      street: 'Street food',
      bar: 'Bar',
    },
    priceHint: 'Price level: € — cheap, €€ — mid-range, €€€ — above average.',
    sponsoredBadge: 'Partner',
    illustrativeBadge: 'Illustration',
    dishesLabel: 'Prices for main dishes',
    dishesHint: 'a guideline, check on site',
    hoursLabel: 'Opening hours',
    cuisineGuide: 'What to try in Albania: a guide to the cuisine',
    lodgingHeading: 'Where to stay in Albania',
    lodgingInCity: 'Where to stay in {city}',
    lodgingNote: 'Hotels and apartments near the best places — compare on Trip.com.',
    onMap: 'On the map',
    onMapAria: 'Open “{name}” on the map (in a new tab)',
    website: 'Website',
    resultsCount: 'Places shown: {count}',
    emptyFiltered: 'Nothing matches the selected filters. Reset some of the conditions.',
    emptyNoData:
      'This section is being filled in: vetted places with honest descriptions and a check date will appear here soon.',
    selectionHeading: 'How we pick these places',
    selectionNote:
      'Places make it here on merit: we take venues with high ratings (4+★) across several sources and cross-check them with experienced travelers, guides and locals. A rating is a selection criterion, not the write-up itself — we don’t reprint other sites’ scores word for word; see the exact rating on the map. We write every description ourselves. The gold medal on a card is our seal of quality: only places we have checked in person that meet a high standard of service and food quality receive it.',
    cityPages: {
      navHeading: 'Where to eat, by city',
      picksHeading: 'Our vetted places',
      backToAll: 'The whole “Where to eat” directory',
      cityGuideLink: 'City guide',
      items: {
        tirana: {
          cityName: 'Tirana',
          heading: 'Tirana restaurants & cafes',
          lead: 'Tirana is Albania’s culinary capital: from traditional taverns and byrek bakeries to signature restaurants and wine bars. We’ve gathered vetted places by district and occasion.',
          intro: [
            'In Tirana people eat everywhere and in all sorts of ways. Around the New Bazaar (Pazari i Ri) — traditional taverns and grills; in the Blloku district — coffee shops, breakfasts, and modern bistros; on the central squares — wine bars and signature restaurants. Prices rise toward the center and the tourist streets, and they’re noticeably cheaper in simple local canteens.',
            'Below are our vetted places: Albanian classics, signature cuisine, wine, vegetarian, and coffee. What exactly to order — byrek, tavë kosi, fërgesë, grilled meats, local wine and raki — is in the guide to the cuisine. We verify each venue and note the check date.',
          ],
        },
        durres: {
          cityName: 'Durrës',
          heading: 'Durrës restaurants & cafes',
          lead: 'Durrës is the Adriatic and seafood: fresh fish, grilled catch, and seaside terraces along the beachfront. Vetted places by the promenade and in the old town.',
          intro: [
            'In Durrës the gastronomy revolves around the sea: fish restaurants, fresh seafood, and seaside verandas, with Italian influence everywhere in the pasta, pizza, and coffee. By the promenade and the beaches there are more tourist spots and nightlife; a little off to the side it’s calmer and cheaper.',
            'Below are our vetted places in Durrës. For the basic dishes of Albanian cuisine and what the coast is famous for, take a look at the guide to the cuisine; each venue shows the check date.',
          ],
        },
        sarande: {
          cityName: 'Sarandë',
          heading: 'Sarandë restaurants & cafes',
          lead: 'Sarandë is the gateway to the Albanian Riviera, with the turquoise water of Ksamil and the ruins of Butrint nearby. Fresh seafood and vetted places along the waterfront.',
          intro: [
            'On the Ionian coast the cuisine revolves around the sea: grilled fish and seafood, seaside terraces, and the laid-back rhythm of a resort town, with strong Greek and Mediterranean influence. Sarandë has many family-run places with home-style cooking, and along the promenade — cafes, fish restaurants, and ice cream.',
            'Below are our vetted places in Sarandë. What to try first is in the guide to the cuisine; each venue lists the check date.',
          ],
        },
      },
    },
  },
  attractionTypes: {
    'mountains-nature': 'Mountains and nature',
    'waterfalls-canyons-lakes': 'Waterfalls, canyons, lakes',
    caves: 'Caves and cave towns',
    'churches-monasteries': 'Churches and monasteries',
    'fortresses-castles': 'Fortresses and castles',
    'resorts-springs': 'Resorts and hot springs',
    'museums-landmarks': 'Museums and city sights',
  },
  regions: {
    tirane: 'Tirana',
    berat: 'Berat',
    diber: 'Dibër',
    durres: 'Durrës',
    elbasan: 'Elbasan',
    fier: 'Fier',
    gjirokaster: 'Gjirokastër',
    korce: 'Korçë',
    kukes: 'Kukës',
    lezhe: 'Lezhë',
    shkoder: 'Shkodër',
    vlore: 'Vlorë',
  },
  razvlTypes: {
    nightlife: 'Nightlife',
    events: 'What’s on',
    active: 'Active leisure',
    casino: 'Casinos',
    places: 'Places',
  },
  serviceRubrics: {
    'housing-realtors': 'Housing and real estate agents',
    cleaning: 'Cleaning',
    moving: 'Moving and freight',
    repairs: 'Repairs and tradespeople',
    documents: 'Documents and lawyers',
    translators: 'Translators and notary services',
  },
  entertainment: {
    filtersLegend: 'Entertainment filters',
    typeLabel: 'Type',
    anyOption: 'Any',
    reset: 'Reset filters',
    resultsCount: 'Shown: {count}',
    listHeading: 'Where to go out',
    emptyFiltered: 'Nothing yet for the selected type. Reset the filter.',
  },
  catalog: {
    heading: 'What to see in Albania',
    intro: [
      'A catalog of Albania’s attractions: nature and mountains, beaches and the Riviera, waterfalls and canyons, UNESCO old towns and ancient ruins, churches and monasteries, fortresses, and resorts. Filter them by type and region below and open a card with the details.',
      'Places make it into the catalog not “from an old blog from memory.” We select them by high ratings across several independent sources and check the details with experienced travelers, guides, and locals. Every article shows the date of its last check.',
    ],
    breadcrumbHome: 'Home',
    mapHeading: 'All places on the map',
    mapAria: 'Interactive map of Albania’s attractions',
    mapHint: 'The map with all the markers loads on click — to keep the page lightweight.',
    filtersLegend: 'Attraction filters',
    typeLabel: 'Type',
    regionLabel: 'Region',
    anyOption: 'Any',
    reset: 'Reset filters',
    resultsCount: 'Places shown: {count}',
    listHeading: 'Attractions',
    emptyFiltered: 'Nothing matches the selected filters. Reset some of the conditions.',
    emptyNoData:
      'This section is being filled in: vetted places with honest descriptions and a check date will appear here soon.',
  },
  uslugi: {
    heading: 'Services in Albania: for living and relocating',
    breadcrumb: 'Services',
    intro: [
      'Services that those living in Albania and those relocating need: real estate agents and help with housing, cleaning, freight, repairs, paperwork, translators. Conveniently gathered in one place — by category and city.',
      'We add to this section as requests come in. Paid placements are marked with a gold border; everything else we add once we’ve verified the service.',
    ],
    rubricLabel: 'Category',
    anyOption: 'Any',
    reset: 'Reset filters',
    filtersLegend: 'Service filters',
    resultsCount: 'Services shown: {count}',
    listHeading: 'Services',
    contactLabel: 'Contact',
    siteLabel: 'Website',
    demoLabel: 'Sample',
    emptyFiltered: 'Nothing yet for the selected category. Reset the filter.',
    emptyNoData:
      'This section is being filled in: vetted services for living in Albania will appear here soon.',
    ctaHeading: 'Is your service here?',
    ctaText:
      'Real estate agents, cleaning, tradespeople, and other services for those living in Albania — write to us and we’ll tell you about placement.',
    ctaLabel: 'Ask about placement',
  },
  coordCopy: {
    label: 'Coordinates',
    copy: 'Copy',
    copied: 'Copied',
    copyAria: 'Copy coordinates {coords}',
  },
  hubAffiliate: {
    'car-rental': {
      title: 'Car rental in Albania',
      note: 'Compare rental prices on Trip.com.',
    },
    transport: {
      title: 'Flights to Albania',
      note: 'Search flights and fares on Trip.com.',
    },
    cities: {
      title: 'Where to stay',
      note: 'Hotels and apartments across Albania on Trip.com.',
    },
    entertainment: {
      title: 'Tours & activities',
      note: 'Find tours and activities across Albania on Trip.com.',
    },
  },
};
