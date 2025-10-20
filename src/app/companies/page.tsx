"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const companies = [
  {
    id: "braseltontech-ai",
    name: "BraseltonTech",
    logo: "/images/braselton-tech-logo.jpg",
    description: "BraseltonTech is a technology company focused on innovative AI solutions and digital transformation.",
    website: "https://www.braseltontech.com",
    contactName: "BraseltonTech Team",
    email: "info@braseltontech.com",
    phone: "(555) 555-5555",
    address: "Braselton, GA"
  }
];

export default function CompaniesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 text-center flex items-center gap-4">
            Companies Helped by
            <img
              src="/images/braselton-tech-logo.jpg"
              alt="Braselton Tech Logo"
              className="h-16 w-16 rounded-full object-cover inline-block align-middle"
            />
          </h1>
        </div>
        <div className="flex flex-col gap-12 w-full items-center">
          {companies.map(company => (
            <div
              key={company.id}
              id={company.id}
              className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-10 border border-blue-100 flex flex-col md:flex-row items-center gap-10"
            >
              <img
                src={company.logo}
                alt={company.name + " logo"}
                className="w-32 h-32 rounded-xl object-cover border-2 border-blue-100 shadow-md mb-4 md:mb-0"
              />
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <h1 className="text-3xl font-extrabold text-gray-800">{company.name}</h1>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-2">{company.description}</p>
                <div className="w-full flex flex-col md:flex-row gap-8 mb-2">
                  <div className="flex-1 flex flex-col gap-2">
                    <div><span className="font-semibold text-gray-800">Contact:</span> {company.contactName}</div>
                    <div><span className="font-semibold text-gray-800">Email:</span> <a href={`mailto:${company.email}`} className="text-blue-700 underline">{company.email}</a></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div><span className="font-semibold text-gray-800">Phone:</span> <a href={`tel:${company.phone}`} className="text-blue-700 underline">{company.phone}</a></div>
                    <div><span className="font-semibold text-gray-800">Address:</span> {company.address}</div>
                  </div>
                </div>
                <a href={company.website} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-700 text-white font-bold px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-800 transition mt-2">
                    Website
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 