"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminEditableText from "./AdminEditableText";
import AdminEditableImage from "./AdminEditableImage";

export default function FeaturesSection() {
  const [index, setIndex] = useState(0);
  const [whoWeAre, setWhoWeAre] = useState("Braselton Tech is a non-profit initiative to in partnership with the Advanced Technology Development Center (ATDC) headquartered at Georgia Tech.");
  const [mission, setMission] = useState("To develop a technology ecosystem that attracts technology companies, investors, and the talent required to scale.");
  const [whatIsATDC, setWhatIsATDC] = useState("ATDC is a Georgia economic development organization funded by the state legislature and managed under the Georgia Tech Enterprise Organization Institute. It is the oldest technology business accelerator in the U.S. and its graduating companies have raised over $3 billion in venture capital.");
  const [whoWeAreTitle, setWhoWeAreTitle] = useState("Who Are We?");
  const [missionTitle, setMissionTitle] = useState("Our Mission");
  const [whatIsATDCTitle, setWhatIsATDCTitle] = useState("What is ATDC?");
  const [imageUrls, setImageUrls] = useState([
    "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo3MjJiZDBlZS1lZDI1LTRmMGYtOWEwMS0wZjU0M2NmZDI1YjE%3D%2FTeam%2520photo%2520cropped.jpg&w=3840&q=75",
    "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTpmZTA3NGMxYS0xZTY0LTQ3MWMtOGI1Zi1lOTZhYzJmMTc2NWM%3D%2Ftable%25202.jpeg&w=3840&q=75",
    "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo1ZjYxYTgwMS05NzJjLTRkNjYtODU1Yy02NzgxYmEzODczNWM%3D%2FTable.jpeg&w=3840&q=75"
  ]);
  const [isHovered, setIsHovered] = useState(false);
  const [adding, setAdding] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("admin_token"));
    }
  }, []);

  // Automatically cycle images every 4 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex(i => (i === imageUrls.length - 1 ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [imageUrls.length, isHovered]);

  return (
    <section className="w-full py-20 px-4 md:px-0 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-stretch md:items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 bg-white/90 rounded-2xl shadow-xl p-8 border border-blue-100 flex flex-col gap-6 justify-center md:max-w-xl w-full mx-auto"
        >
          <AdminEditableText value={whoWeAreTitle} onChange={setWhoWeAreTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight" as="h2" />
          <AdminEditableText value={whoWeAre} onChange={setWhoWeAre} className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed" as="p" />
          <AdminEditableText value={missionTitle} onChange={setMissionTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight" as="h2" />
          <AdminEditableText value={mission} onChange={setMission} className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed" as="p" />
          <AdminEditableText value={whatIsATDCTitle} onChange={setWhatIsATDCTitle} className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight" as="h2" />
          <AdminEditableText value={whatIsATDC} onChange={setWhatIsATDC} className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed" as="p" />
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center flex-1 w-full shrink"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex-1 w-full bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 flex flex-col items-center mx-auto">
            <div
              className="relative w-full aspect-[16/10] mx-auto overflow-hidden rounded-xl h-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full"
                >
                  <AdminEditableImage
                    src={imageUrls[index]}
                    onChange={url => setImageUrls(urls => urls.map((u, i) => i === index ? url : u))}
                    alt={`Braselton Tech event photo ${index + 1}`}
                    className={`w-full h-full rounded-2xl${index === 0 ? ' object-top' : ''}`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {isAdmin && (
              <div className="w-full flex flex-col items-center mt-4">
                {adding ? (
                  <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                    <input
                      type="text"
                      className="flex-1 border border-blue-200 rounded-md p-2 text-gray-800"
                      value={newImageUrl}
                      onChange={e => setNewImageUrl(e.target.value)}
                      placeholder="Paste new image URL..."
                    />
                    <button
                      className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-bold"
                      onClick={() => {
                        if (newImageUrl.trim()) {
                          setImageUrls(urls => [...urls, newImageUrl.trim()]);
                          setNewImageUrl("");
                          setAdding(false);
                        }
                      }}
                    >Add</button>
                    <button
                      className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-bold"
                      onClick={() => { setAdding(false); setNewImageUrl(""); }}
                    >Cancel</button>
                  </div>
                ) : (
                  <button
                    className="px-4 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-bold shadow mt-2"
                    onClick={() => setAdding(true)}
                  >+ Add Image</button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 