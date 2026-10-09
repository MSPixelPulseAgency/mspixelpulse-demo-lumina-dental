export const site = {
  name: "LUMINA Dental Studio",
  email: "hello@mspixelpulse.com",
  phone: "+1 (000) 000-0000",
  location: "Brampton, Ontario · Demonstration only",
  tagline: "A Brighter Smile Begins Here.",
};
export const nav = [
  { label: "Our studio", href: "/about/" },
  { label: "Our care", href: "/services/" },
  { label: "New patients", href: "/new-patients/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact", href: "/contact/" },
];
export const categories = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Orthodontic Care",
  "Additional Care",
];
export type Service = {
  slug: string;
  name: string;
  category: string;
  short: string;
  overview: string;
  benefit: string;
  expect: string[];
  image: string;
  question: string;
  answer: string;
};
export const services: Service[] = [
  {
    slug: "dental-exams",
    name: "Dental Exams",
    category: categories[0],
    short: "A thoughtful starting point for your oral health.",
    overview:
      "A dental examination is a conversation and an assessment. In a real practice, your dental professional would review your oral health, listen to your concerns and explain their findings before discussing next steps.",
    benefit:
      "People looking to establish care, discuss a concern or review their current oral health with a qualified professional.",
    expect: [
      "Discuss your health history and priorities.",
      "Have your teeth, gums and mouth assessed.",
      "Review findings and any recommended next steps.",
    ],
    image: "care",
    question: "Is every first visit the same?",
    answer:
      "No. A real visit would be tailored to your history and needs. Imaging or further assessments would be discussed individually.",
  },
  {
    slug: "dental-cleanings",
    name: "Dental Cleanings",
    category: categories[0],
    short: "Everyday care, with a little more attention.",
    overview:
      "Professional cleaning visits are part of a preventive care conversation. A real dental team would assess your needs and explain a suitable approach to hygiene care.",
    benefit:
      "People seeking an individualized hygiene routine or a conversation about their gums and daily care.",
    expect: [
      "Review your current home-care routine.",
      "Discuss a cleaning approach suited to your needs.",
      "Ask questions about follow-up and maintenance.",
    ],
    image: "details",
    question: "How often would I need a cleaning?",
    answer:
      "A qualified dental professional would recommend a schedule based on your individual circumstances. This demo does not prescribe a visit frequency.",
  },
  {
    slug: "fillings",
    name: "Fillings",
    category: categories[0],
    short: "Explore options for repairing a damaged tooth.",
    overview:
      "Fillings are one possible way to restore part of a tooth. In a real consultation, a dentist would assess the tooth and discuss material choices, alternatives, costs and possible limitations.",
    benefit:
      "People who have been advised that a tooth may need repair, or who want an assessment of an existing restoration.",
    expect: [
      "Have the affected tooth assessed.",
      "Discuss suitable repair options and materials.",
      "Review the proposed procedure and aftercare.",
    ],
    image: "dental-chair",
    question: "Which filling material is best?",
    answer:
      "Material selection depends on the tooth and clinical circumstances. A dentist can explain the trade-offs relevant to you.",
  },
  {
    slug: "preventive-care",
    name: "Preventive Care",
    category: categories[0],
    short: "Small habits. A considered approach to care.",
    overview:
      "Preventive care brings together professional assessments and everyday habits. A real team could help you understand your oral-health priorities and develop an appropriate plan.",
    benefit:
      "People interested in reviewing daily oral care and discussing factors that may affect their dental health.",
    expect: [
      "Talk about your daily routine.",
      "Review individual oral-health considerations.",
      "Agree on practical next steps with your provider.",
    ],
    image: "details",
    question: "Is a preventive plan one-size-fits-all?",
    answer:
      "No. Advice should reflect your health history, age, preferences and professional assessment.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: categories[1],
    short: "A conversation about a brighter, natural-looking smile.",
    overview:
      "A whitening consultation explores your goals and whether whitening may be appropriate. A real dentist would discuss expected variability, sensitivity, alternatives and how existing restorations may affect the result.",
    benefit:
      "Adults interested in discussing the appearance of their smile and understanding available whitening options.",
    expect: [
      "Discuss your goals and current tooth shade.",
      "Review suitability and possible sensitivity.",
      "Explore options, expectations and maintenance.",
    ],
    image: "smile",
    question: "Can results be guaranteed?",
    answer:
      "No. Outcomes vary. This demonstration uses stock photography and does not show treatment results or promise a particular shade.",
  },
  {
    slug: "porcelain-veneers",
    name: "Porcelain Veneers",
    category: categories[1],
    short: "Explore a considered approach to smile aesthetics.",
    overview:
      "Veneers are a cosmetic treatment option that requires careful planning. A real consultation would explore your goals, tooth condition, alternatives and the long-term implications of treatment.",
    benefit:
      "People considering a change to the shape or appearance of their teeth who want to understand their options.",
    expect: [
      "Share the changes you would like to explore.",
      "Review tooth health and treatment alternatives.",
      "Discuss preparation, maintenance and limitations.",
    ],
    image: "smile",
    question: "Are veneers suitable for everyone?",
    answer:
      "No. Suitability requires an individual examination. A qualified dentist would explain whether other approaches may be more appropriate.",
  },
  {
    slug: "smile-consultations",
    name: "Smile Consultations",
    category: categories[1],
    short: "Your questions. Your goals. A clear conversation.",
    overview:
      "A smile consultation starts with listening. It is an opportunity to discuss what matters to you, ask questions about possible treatments and understand the decisions involved.",
    benefit:
      "People exploring cosmetic care who want a starting point without committing to a treatment.",
    expect: [
      "Describe your goals and questions.",
      "Review options with a qualified professional.",
      "Consider timelines, costs and alternatives.",
    ],
    image: "care",
    question: "Does a consultation commit me to treatment?",
    answer:
      "A real consultation should help you make an informed decision. This demo does not provide treatment or accept bookings.",
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    category: categories[2],
    short: "Understand an option for restoring a tooth.",
    overview:
      "A crown is a restoration that covers a prepared tooth. A real dentist would assess the tooth, explain why a crown might be considered and discuss alternatives and ongoing care.",
    benefit:
      "People whose dentist has recommended a restoration, or who want to discuss the condition of an existing crown.",
    expect: [
      "Assess the tooth and existing restorations.",
      "Discuss material choices and alternatives.",
      "Review preparation, fitting and follow-up.",
    ],
    image: "care-room",
    question: "How long does a crown last?",
    answer:
      "Longevity varies with many factors. A real provider would discuss expectations and maintenance without guaranteeing a lifespan.",
  },
  {
    slug: "dental-bridges",
    name: "Dental Bridges",
    category: categories[2],
    short: "Explore an approach to replacing missing teeth.",
    overview:
      "A bridge may be one option for a gap left by missing teeth. A real dental professional would assess the surrounding teeth and discuss the available approaches, including their limitations.",
    benefit:
      "People with missing teeth who want to compare replacement options with a qualified dental professional.",
    expect: [
      "Review the gap and supporting teeth.",
      "Compare replacement approaches.",
      "Discuss fitting, cleaning and future care.",
    ],
    image: "dental-chair",
    question: "Is a bridge the only replacement option?",
    answer:
      "No. Other approaches may be considered after an examination. Your dentist can help you compare suitable choices.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: categories[2],
    short: "Learn about a carefully planned replacement option.",
    overview:
      "Implant care involves assessment and treatment planning. A real consultation would explore your health history, anatomy, goals and alternatives before considering a personalized plan.",
    benefit:
      "People interested in understanding whether implants could be an appropriate option for missing teeth.",
    expect: [
      "Discuss your history and replacement goals.",
      "Review the assessments a provider may require.",
      "Explore stages, risks, costs and alternatives.",
    ],
    image: "details",
    question: "Can anyone receive an implant?",
    answer:
      "No. Suitability and risks must be assessed by a qualified clinician. This demo offers no eligibility assessment or treatment promise.",
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    category: categories[3],
    short: "A discreet option to discuss for your smile.",
    overview:
      "Clear aligner treatment uses a planned sequence of removable appliances. A real professional would assess your teeth and bite, explain whether aligners may be suitable and discuss the commitment involved.",
    benefit:
      "People interested in exploring tooth alignment options and comparing them with a qualified provider.",
    expect: [
      "Review your alignment goals and bite.",
      "Compare suitable orthodontic approaches.",
      "Discuss wear requirements and monitoring.",
    ],
    image: "smile",
    question: "Are all clear aligners Invisalign?",
    answer:
      "No. Invisalign is a third-party brand. This concept uses the general term clear aligners and does not claim provider affiliation.",
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    category: categories[4],
    short: "Understand where to turn when care cannot wait.",
    overview:
      "Unexpected dental concerns need attention from a real provider. This page demonstrates how a practice could present an urgent-care pathway; LUMINA does not offer emergency assessment or appointments.",
    benefit:
      "Visitors exploring how an urgent-care information page could work in a real clinic website.",
    expect: [
      "Contact a real dental provider directly.",
      "Describe the concern to their care team.",
      "Follow the instructions provided by that professional.",
    ],
    image: "care-room",
    question: "Can I request urgent care through this site?",
    answer:
      "No. This is a fictional demonstration. For urgent concerns, contact a real dental professional or local emergency services as appropriate.",
  },
  {
    slug: "family-dentistry",
    name: "Family Dentistry",
    category: categories[4],
    short: "A welcoming care concept for every generation.",
    overview:
      "Family dental care considers the needs of people at different stages of life. A real practice would personalize visits and explain care options in language that families can understand.",
    benefit:
      "Families looking to learn how a practice might organize visits for different ages and care needs.",
    expect: [
      "Share each family member’s needs.",
      "Discuss age-appropriate visit planning.",
      "Ask about individual care and follow-up.",
    ],
    image: "care",
    question: "Can family members share a treatment plan?",
    answer:
      "Each person needs an individual assessment and care plan. Coordinating visits does not replace personalized advice.",
  },
];
export const featured = [
  "dental-exams",
  "teeth-whitening",
  "clear-aligners",
  "dental-implants",
  "porcelain-veneers",
  "emergency-dentistry",
].map((slug) => services.find((s) => s.slug === slug)!);
export const faqs = [
  {
    q: "What can I expect at a first visit?",
    a: "In the LUMINA concept, a first visit begins with a conversation about your goals, followed by an individual assessment and a clear discussion of next steps. This website is a demo; no clinical visit can be arranged here.",
  },
  {
    q: "How does the appointment request work?",
    a: "Use the appointment page to try a sample request. Fields are validated in your browser and a simulated confirmation appears. Nothing is transmitted, saved or sent to a clinic.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Insurance information here is illustrative. A real clinic would review your plan and explain billing; coverage would need to be confirmed with your insurer. This fictional studio does not process insurance.",
  },
  {
    q: "Can I discuss cosmetic treatment before deciding?",
    a: "The concept makes room for an unhurried consultation: your questions, potential options and individual considerations. LUMINA does not offer medical advice, diagnosis or treatment.",
  },
  {
    q: "Are emergency appointments available?",
    a: "There are no real appointments on this demo. If you need urgent dental care, contact a real dental provider directly. Do not use this site to seek emergency help.",
  },
  {
    q: "Are the photographs actual patients or results?",
    a: "No. All photographs are licensed stock images used for visual storytelling. They do not depict LUMINA patients, premises or treatment outcomes.",
  },
  {
    q: "Is LUMINA a real dental practice in Brampton?",
    a: "No. LUMINA Dental Studio is a fictional Canadian dental-clinic concept created by MSPixelPulse to demonstrate website design and development.",
  },
];
export const team = [
  {
    name: "Alex Morgan",
    role: "Dental care · Example profile",
    image: 0,
    description:
      "A fictional care-team profile demonstrating a thoughtful introduction, clear communication and a patient-centred philosophy.",
  },
  {
    name: "Jamie Chen",
    role: "Hygiene care · Example profile",
    image: 1,
    description:
      "An illustrative profile showing how preventive care and everyday habits could be introduced in an approachable way.",
  },
  {
    name: "Taylor Brooks",
    role: "Patient experience · Example profile",
    image: 2,
    description:
      "A fictional front-of-house profile focused on helping visitors understand the next step and feel welcome.",
  },
];
export const gallery = [
  {
    image: "smile",
    title: "A moment of confidence",
    type: "Smiles",
    alt: "Stock photograph of a woman smiling while looking in a handheld mirror",
  },
  {
    image: "treatment-room",
    title: "Room to feel at ease",
    type: "Studio",
    alt: "Stock photograph of a bright dental treatment room with a reclining chair",
  },
  {
    image: "care",
    title: "Care, in the details",
    type: "Care",
    alt: "Stock photograph of a dental professional carrying out a check-up",
  },
  {
    image: "care-room",
    title: "A considered environment",
    type: "Studio",
    alt: "Stock photograph of a dental chair and equipment in a clean treatment space",
  },
  {
    image: "details",
    title: "A closer look",
    type: "Care",
    alt: "Stock photograph of a dental mirror and demonstration tooth model",
  },
  {
    image: "dental-chair",
    title: "A different perspective",
    type: "Studio",
    alt: "Black-and-white stock photograph of a dental chair and overhead equipment",
  },
];

export const imageDescriptions: Record<string, string> = {
  smile:
    "Stock photograph of a smiling woman in a dental chair holding a handheld mirror",
  care: "Stock photograph of a dental professional carrying out a check-up with a seated person",
  "treatment-room":
    "Stock photograph of a bright dental treatment room with a reclining chair and overhead equipment",
  "care-room":
    "Stock photograph of a clean dental treatment room and modern examination equipment",
  "dental-chair":
    "Black-and-white stock photograph of a dental chair and overhead equipment",
  details:
    "Stock photograph of a dental mirror beside a demonstration tooth model",
  studio: "Stock photograph of a treatment room with a turquoise dental chair",
};
