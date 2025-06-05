'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { redirectToAdmin } from "@/lib/api";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/involved" },
];

const companiesList = [
  { name: "BraseltonTech", id: "braseltontech-ai" }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<false | 'get-involved' | 'about' | 'events' | 'companies'>(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const isDropdownOpen = open || hovered || dropdownHovered;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("braseltontech_admin_token"));
      
      // Add debug logging
      console.log('NavBar: Current pathname:', window.location.pathname);
      console.log('NavBar: Admin status:', !!localStorage.getItem("braseltontech_admin_token"));
    }
  }, []);

  function scrollToCompany(companyId: string) {
    // Try to scroll to the element, retrying if not found (for navigation from another page)
    let attempts = 0;
    const maxAttempts = 10;
    const delay = 120;
    function tryScroll() {
      const el = document.getElementById(companyId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, delay);
      }
    }
    tryScroll();
  }

  return (
    <nav className="w-full bg-white px-12 py-3 flex items-center justify-between font-sans relative z-40 sticky top-0 border-b border-blue-100" style={{ fontFamily: 'Geist, Inter, Arial, sans-serif' }}>
      <motion.div whileHover={{ scale: 1.12 }} transition={{ duration: 0.1 }} className="inline-block">
        <Link href="/" className="flex items-center text-2xl font-extrabold text-gray-800 tracking-tight">
          <img src="/images/braselton-tech-logo.jpg" alt="Braselton Tech Logo" className="h-8 w-8 rounded-full mr-3 object-cover" />
          BraseltonTech
        </Link>
      </motion.div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex">
        <ul className="flex gap-10 text-lg font-light text-gray-800" style={{ fontFamily: 'Geist, Inter, Arial, sans-serif', fontWeight: 300 }}>
          {navLinks.map(link => (
            <li key={link.href} className="relative">
              {link.label === "Companies" ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHovered('companies')}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Link href={link.href} className="transition font-light text-gray-800" style={{ fontWeight: 300 }}>{link.label}</Link>
                  </motion.div>
                  <AnimatePresence>
                    {hovered === 'companies' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[220px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center font-light"
                        style={{ fontFamily: 'Geist, Inter, Arial, sans-serif', fontWeight: 300 }}
                        onMouseEnter={() => setHovered('companies')}
                        onMouseLeave={() => setHovered(false)}
                      >
                        <div className="flex flex-col gap-2">
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/companies" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>Companies</Link>
                          </motion.div>
                          {companiesList.map(company => (
                            <motion.div key={company.id} whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                              <a
                                href={"/companies#" + company.id}
                                className="text-gray-800 font-light transition block cursor-pointer"
                                style={{ fontWeight: 300 }}
                                onClick={e => {
                                  e.preventDefault();
                                  if (window.location.pathname !== "/companies") {
                                    window.location.href = `/companies#${company.id}`;
                                    setTimeout(() => scrollToCompany(company.id), 500);
                                  } else {
                                    scrollToCompany(company.id);
                                  }
                                  setOpen(false);
                                  setHovered(false);
                                }}
                              >
                                {company.name}
                              </a>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : link.label === "Get Involved" ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHovered('get-involved')}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Link href={link.href} className="transition font-light text-gray-800" style={{ fontWeight: 300 }}>{link.label}</Link>
                  </motion.div>
                  <AnimatePresence>
                    {hovered === 'get-involved' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[220px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center font-light"
                        style={{ fontFamily: 'Geist, Inter, Arial, sans-serif', fontWeight: 300 }}
                        onMouseEnter={() => setHovered('get-involved')}
                        onMouseLeave={() => setHovered(false)}
                      >
                        <div className="flex flex-col gap-2">
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/involved" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>Get Involved</Link>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/involved/join" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>Join Braselton Tech</Link>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/involved/levelup" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>Level Up Your Startup</Link>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/involved/sponsor" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>Become a Sponsor</Link>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/involved/mentor" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>Become a Mentor</Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : link.label === "About" ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHovered('about')}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Link href={link.href} className="transition font-light text-gray-800" style={{ fontWeight: 300 }}>{link.label}</Link>
                  </motion.div>
                  <AnimatePresence>
                    {hovered === 'about' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[220px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center font-light"
                        style={{ fontFamily: 'Geist, Inter, Arial, sans-serif', fontWeight: 300 }}
                        onMouseEnter={() => setHovered('about')}
                        onMouseLeave={() => setHovered(false)}
                      >
                        <div className="flex flex-col gap-2">
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/about" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>About</Link>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/about/board" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>Meet the Board</Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : link.label === "Events" ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={() => setHovered('events')}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <Link href={link.href} className="transition font-light text-gray-800" style={{ fontWeight: 300 }}>{link.label}</Link>
                  </motion.div>
                  <AnimatePresence>
                    {hovered === 'events' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[220px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center font-light"
                        style={{ fontFamily: 'Geist, Inter, Arial, sans-serif', fontWeight: 300 }}
                        onMouseEnter={() => setHovered('events')}
                        onMouseLeave={() => setHovered(false)}
                      >
                        <div className="flex flex-col gap-2">
                          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.12 }}>
                            <Link href="/events" className="text-gray-800 font-light transition" style={{ fontWeight: 300 }}>Events</Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.1 }}>
                  <Link href={link.href} className="transition font-light text-gray-800" style={{ fontWeight: 300 }}>{link.label}</Link>
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Hamburger for mobile */}
      <motion.button
        className="xl:hidden flex flex-col gap-1"
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => { setHovered('get-involved'); setOpen(true); }}
        onMouseLeave={() => { setHovered(false); setOpen(false); }}
        aria-label="Open menu"
        animate={open ? { rotate: 90, scale: 1.15 } : { rotate: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <motion.span className="w-7 h-1 bg-gray-800 rounded transition-all" animate={open ? { scaleX: 1.2 } : { scaleX: 1 }} />
        <motion.span className="w-7 h-1 bg-gray-800 rounded transition-all" animate={open ? { scaleX: 0.8 } : { scaleX: 1 }} />
        <motion.span className="w-7 h-1 bg-gray-800 rounded transition-all" animate={open ? { scaleX: 1.2 } : { scaleX: 1 }} />
      </motion.button>
      <div className="hidden xl:flex items-center gap-2">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.1 }}
            className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition"
            type="button"
          >
            Contact
          </motion.button>
        </Link>
        {!isAdmin && (
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.1 }}
              className="bg-white text-blue-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition ml-2"
              type="button"
            >
              Log In
            </motion.button>
          </Link>
        )}
        {isAdmin && (
          <>
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.1 }}
              className="bg-blue-700 text-white font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-800 transition ml-2"
              type="button"
              onClick={() => redirectToAdmin(router)}
            >
              Admin
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.1 }}
              className="bg-white text-red-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-red-50 transition ml-2"
              type="button"
              onClick={() => {
                localStorage.removeItem("braseltontech_admin_token");
                localStorage.removeItem("braseltontech_admin_token_expiry");
                setIsAdmin(false);
                router.push("/");
              }}
            >
              Log Out
            </motion.button>
          </>
        )}
      </div>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ type: 'spring', stiffness: 400, damping: 32, duration: 0.25 }}
            className="absolute left-0 top-full w-full bg-white rounded-b-2xl flex flex-col items-center justify-center gap-6 py-8 xl:hidden border-b border-blue-100"
            style={{ fontFamily: 'Geist, Inter, Arial, sans-serif', fontWeight: 300 }}
            onMouseEnter={() => setDropdownHovered(true)}
            onMouseLeave={() => setDropdownHovered(false)}
          >
            {navLinks.map(link => (
              <motion.div key={link.href} whileHover={{ scale: 1.15 }} transition={{ duration: 0.1 }}>
                <Link href={link.href} className="text-lg font-light text-gray-800 transition" style={{ fontWeight: 300 }} onClick={() => setOpen(false)}>{link.label}</Link>
              </motion.div>
            ))}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.1 }}
                className="bg-white text-gray-800 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition"
                type="button"
              >
                Contact
              </motion.button>
            </Link>
            {!isAdmin && (
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.1 }}
                  className="bg-white text-blue-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-50 transition ml-2"
                  type="button"
                >
                  Log In
                </motion.button>
              </Link>
            )}
            {isAdmin && (
              <>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.1 }}
                  className="bg-blue-700 text-white font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-blue-800 transition ml-2"
                  type="button"
                  onClick={() => redirectToAdmin(router)}
                >
                  Admin
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.1 }}
                  className="bg-white text-red-700 font-mono font-extrabold tracking-wide uppercase px-8 py-2 rounded-md shadow-lg border border-blue-100 hover:bg-red-50 transition ml-2"
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("braseltontech_admin_token");
                    localStorage.removeItem("braseltontech_admin_token_expiry");
                    setIsAdmin(false);
                    router.push("/");
                  }}
                >
                  Log Out
                </motion.button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 