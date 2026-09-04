// ─────────────────────────────────────────────────────────────
// All event content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

import iiserLogo from "@/assets/iiser-pune.png.asset.json";
import mitwpuLogo from "@/assets/mitwpu.png.asset.json";
import ihubLogo from "@/assets/ihub-quantum.png.asset.json";
import mmcoeLogo from "@/assets/mmcoe.png.asset.json";
import ibmQuantumLogo from "@/assets/ibm-quantum.jpg.asset.json";


export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "haqthon", label: "HaQthon" },
  { id: "schedule", label: "Schedule" },
  { id: "speakers", label: "Speakers" },
  { id: "collaboration", label: "Collaboration" },
  { id: "social", label: "Social Media" },
  { id: "arena", label: "Quantum Arena" },
] as const;

export const INSTITUTIONS = [
  { name: "IISER", full: "IISER Pune", url: "https://www.iiserpune.ac.in" },
  { name: "MIT WPU", full: "MIT World Peace University", url: "https://mitwpu.edu.in" },
  { name: "MMCOE", full: "MMCOE", url: "https://mmcoe.edu.in" },
];

export const HERO = {
  eyebrow: "In partnership with IBM Qiskit",
  title: "Qiskit Fall Fest: A decade of quantum on cloud",
  meta: [
    { label: "When", value: "October 2026" },
    { label: "Where", value: "Pune, India" },
    { label: "Format", value: "Hybrid" },
  ],
};

export const ABOUT = {
  eyebrow: "About",
  title: "About the event",
  paragraphs: [
    "Qiskit Fall Fest is a student-led celebration of quantum computing held on campuses worldwide in partnership with IBM Quantum. The Pune edition is hosted jointly by IISER Pune, MIT World Peace University and MMCOE.",
    "Across the festival, participants move from first circuits to real hardware through workshops, talks and the HaQthon challenge — open to newcomers and experienced researchers alike.",
  ],
};

export const HAQTHON = {
  title: "HaQthon",
  tagline: "",
  description:
    "A quantum hackathon for students and researchers across the three host institutes. Teams prototype on real quantum hardware and simulators using Qiskit — no prior quantum experience required.",
  details: [
    { label: "Dates", value: "To be announced" },
    { label: "Mode", value: "To be announced" },
    { label: "Team size", value: "To be announced" },
    { label: "Eligibility", value: "To be announced" },
  ],
  // Set to a registration URL when available.
  registrationUrl: "",
  ctaLabel: "Registration opening soon",
};

export type ScheduleItemData = {
  date: string;
  time: string;
  title: string;
  host: string;
  description: string;
};

export const SCHEDULE: ScheduleItemData[] = [
  {
    date: "Day 1",
    time: "To be announced",
    title: "Opening & Keynote",
    host: "To be announced",
    description: "Festival inauguration and an opening keynote on the decade of quantum on the cloud.",
  },
  {
    date: "Day 1",
    time: "To be announced",
    title: "Qiskit Workshop",
    host: "To be announced",
    description: "Hands-on introduction to circuits, gates and running jobs on cloud backends.",
  },
  {
    date: "Day 2",
    time: "To be announced",
    title: "Faculty Development Programme",
    host: "To be announced",
    description: "Session for educators on bringing quantum computing into the classroom.",
  },
  {
    date: "Day 2",
    time: "To be announced",
    title: "HaQthon Kickoff",
    host: "To be announced",
    description: "Problem statements, team formation and mentor allocation.",
  },
  {
    date: "Day 3",
    time: "To be announced",
    title: "Project Showcase & Closing",
    host: "To be announced",
    description: "Team demos, judging and the closing ceremony.",
  },
];

export type SpeakerData = {
  name: string;
  designation: string;
  institution: string;
  bio: string;
  image?: string;
  profileUrl?: string;
};

// Add speakers here as they are confirmed.
export const SPEAKERS: SpeakerData[] = [];

export type CollaboratorData = {
  name: string;
  role: string;
  url: string;
  initials: string;
  logo?: string;
};

export const COLLABORATORS: CollaboratorData[] = [
  {
    name: "IISER Pune",
    role: "",
    url: "https://www.iiserpune.ac.in",
    initials: "IP",
    logo: iiserLogo.url,
  },
  {
    name: "MIT World Peace University",
    role: "",
    url: "https://mitwpu.edu.in",
    initials: "MW",
    logo: mitwpuLogo.url,
  },
  { name: "MMCOE", role: "", url: "https://mmcoe.edu.in", initials: "MM", logo: mmcoeLogo.url },
  {
    name: "I-HUB Quantum Technology Foundation",
    role: "",
    url: "",
    initials: "IH",
    logo: ihubLogo.url,
  },
  {
    name: "IBM Quantum",
    role: "",
    url: "https://www.ibm.com/quantum",
    initials: "IQ",
    logo: ibmQuantumLogo.url,
  },
];

export type SocialData = { platform: string; url: string };

// Add the official handles here; empty URLs render as "coming soon".
export const SOCIALS: SocialData[] = [
  { platform: "Instagram", url: "" },
  { platform: "LinkedIn", url: "" },
];

export const ARENA_CARDS = [
  {
    title: "Circuit Puzzles",
    description: "Timed gate-sequence challenges that reward the shortest correct circuit.",
  },
  {
    title: "Entanglement Duels",
    description: "Two-player rounds built around measurement and correlation.",
  },
  {
    title: "Daily Qubit",
    description: "A short quantum brain-teaser posted through the festival.",
  },
];
