"use client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  contactName: string;
  email: string;
  phone: string;
  address: string;
}

const companies: Company[] = [
  // Companies will be added here as BraseltonTech helps more businesses
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
          {companies.length > 0 ? (
            companies.map(company => (
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
            ))
          ) : (
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 border border-blue-100 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H7m2 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v5" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Coming Soon</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We&apos;re working with amazing companies to help them grow and succeed. 
                    Check back soon to see the businesses we&apos;ve had the privilege to help!
                  </p>
                </div>
                <div className="mt-4">
                  <a href="/contact" className="inline-block">
                    <Button className="bg-blue-700 text-white font-bold px-8 py-3 rounded-md shadow-lg hover:bg-blue-800 transition">
                      Get in Touch
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 