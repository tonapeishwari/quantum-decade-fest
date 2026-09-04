import { createFileRoute } from "@tanstack/react-router";

import { ArenaSection } from "@/components/ArenaSection";
import { CollaborationSection } from "@/components/CollaborationSection";
import { HaqthonSection } from "@/components/HaqthonSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { QuantumBackdrop } from "@/components/QuantumBackdrop";
import { ScheduleSection } from "@/components/ScheduleSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SocialSection } from "@/components/SocialSection";
import { SpeakersSection } from "@/components/SpeakersSection";

const TITLE = "Qiskit Fall Fest Pune — A Decade of Quantum on Cloud";
const DESCRIPTION =
  "Qiskit Fall Fest in Pune by IISER Pune, MIT WPU and MMCOE: quantum workshops, talks and the HaQthon hackathon, in partnership with IBM Qiskit.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <QuantumBackdrop />
      <Navbar />
      <main>
        <Hero />
        <div className="divider-glow mx-auto w-full max-w-6xl" />
        <HaqthonSection />
        <ScheduleSection />
        <SpeakersSection />
        <CollaborationSection />
        <SocialSection />
        <ArenaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
