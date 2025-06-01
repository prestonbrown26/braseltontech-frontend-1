"use client";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AdminEditableText from "@/components/AdminEditableText";
import { useState } from "react";
import AdminEditableImage from "@/components/AdminEditableImage";

export default function AboutPage() {
  const [heroTitle, setHeroTitle] = useState("Cultivating a Community of Excellence");
  const [heroText, setHeroText] = useState("Made possible by a unique public-private collaborative model between Georgia Tech and corporate sponsors, ATDC delivers expert coaching, curriculum, community, and connections to our portfolio members. For 44 years, we've guided nascent startups into becoming fledgling, viable companies contributing to the Georgia, national, and global economy.");
  const [csTitle, setCsTitle] = useState("What's our edge? In a word—or, more specifically, the letter C.");
  const [csList, setCsList] = useState([
    "Coaching: Our highly specialized, individualized, vertical-specific coaches.",
    "Capacity: We are networked into a large talent pool for startups in search of world class staff.",
    "Capital: Support for finding venture capital and nondilutive funding sources.",
    "Corporate Connections: Access to pilots with our corporate innovation team customized and tailored to those partners' needs.",
    "Community: An expansive network of tech founders & mentors.",
    "Curiculum: World-class facilities & ecosystem-wide programming."
  ]);
  const [visionTitle, setVisionTitle] = useState("ATDC is the Hub for Tech Innovation");
  const [visionText, setVisionText] = useState("Our vision is to make Georgia the best place on Earth to start and scale a technology company. For four decades running, ATDC has been housed at the center of academic excellence on the Georgia Tech campus. Synonymous with innovation, ATDC is the 'go-to' in the Southeast for tech founders on a mission to scale.");
  const [statewideTitle, setStatewideTitle] = useState("Statewide Innovation Network");
  const [statewidePs, setStatewidePs] = useState([
    "Connecting Georgia's Tech Entrepreneurs to Resources and Opportunities",
    "Nestled on the Georgia Tech campus in the heart of Midtown Atlanta, ATDC's flagship headquarters in Tech Square serves as the epicenter of Georgia's tech innovation. We offer a vibrant community for entrepreneurs, investors, and tech enthusiasts. Our 48,000-square-foot space in the Centergy Building provides ATDC's portfolio companies with the environment they need to thrive, amidst the intellectual capital of Georgia Tech and a thriving business ecosystem.",
    "For startups focusing on physical products, ATDC's Advanced Manufacturing Program and Design Studio offer an array of resources, from maker space tools to 15,000 square feet of wet lab space, supporting every step from conception to scale.",
    "Branching beyond Atlanta, ATDC's presence in Alpharetta, Athens, Augusta, Forsyth County, Peachtree Corners, and Savannah brings our unique blend of education, coaching, and connections to tech companies and startups across the state. Each location is tailored to meet the specific needs of its community, whether it's fostering the next generation of blockchain innovators in Forsyth County or supporting healthcare technology growth in Savannah."
  ]);
  const [teamImg, setTeamImg] = useState("https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo3MjJiZDBlZS1lZDI1LTRmMGYtOWEwMS0wZjU0M2NmZDI1YjE%3D%2FTeam%2520photo%2520cropped.jpg&w=3840&q=75");
  const [mapImg, setMapImg] = useState("https://www.guideoftheworld.com/map/north-america/united-states/georgia/georgia-counties-blank-map.jpg");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 py-16 px-2">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* Hero Section as two side-by-side cards */}
          <section className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left card: text */}
            <div className="flex-1 bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col gap-4">
              <AdminEditableText value={heroTitle} onChange={setHeroTitle} className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2" as="h1" />
              <AdminEditableText value={heroText} onChange={setHeroText} className="text-gray-700 text-base sm:text-lg leading-relaxed" as="p" />
            </div>
            {/* Right: image and button (no card) */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <AdminEditableImage
                src={teamImg}
                onChange={setTeamImg}
                alt="ATDC Graduation"
                className="w-3/4 max-w-sm rounded-xl shadow-lg border border-blue-100 object-cover"
              />
              <Link href="/about/board">
                <Button className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition w-fit">
                  Meet the Board
                </Button>
              </Link>
            </div>
          </section>

          {/* The C's Section */}
          <section className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col gap-4">
            <AdminEditableText value={csTitle} onChange={setCsTitle} className="text-2xl font-bold text-gray-800 mb-2" as="h2" />
            <ul className="list-disc pl-6 text-gray-700 text-base sm:text-lg space-y-1">
              {csList.map((item, i) => (
                <li key={i}>
                  <AdminEditableText value={item} onChange={val => setCsList(list => list.map((li, j) => j === i ? val : li))} as="span" />
                </li>
              ))}
            </ul>
          </section>

          {/* Vision Section */}
          <section className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col gap-4">
            <AdminEditableText value={visionTitle} onChange={setVisionTitle} className="text-2xl font-bold text-gray-800 mb-2" as="h2" />
            <AdminEditableText value={visionText} onChange={setVisionText} className="text-gray-700 text-base sm:text-lg leading-relaxed" as="p" />
          </section>

          {/* Statewide Innovation Network Section as two side-by-side cards */}
          <section className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Left card: text */}
            <div className="flex-1 bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 flex flex-col gap-4">
              <AdminEditableText value={statewideTitle} onChange={setStatewideTitle} className="text-2xl font-bold text-gray-800 mb-2" as="h2" />
              {statewidePs.map((p, i) => (
                <AdminEditableText key={i} value={p} onChange={val => setStatewidePs(arr => arr.map((x, j) => j === i ? val : x))} className="text-gray-700 text-base sm:text-lg leading-relaxed" as="p" />
              ))}
            </div>
            {/* Right: map image (no card) */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <AdminEditableImage
                src={mapImg}
                onChange={setMapImg}
                alt="Map of Georgia State"
                className="w-3/4 max-w-sm rounded-xl shadow-lg border border-blue-100 object-cover"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 