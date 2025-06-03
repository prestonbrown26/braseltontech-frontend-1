"use client";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";
import AdminEditableText from "@/components/AdminEditableText";
import AdminEditableImage from "@/components/AdminEditableImage";

const members = [
  {
    name: "Marc Carson",
    title: "ADVISORY BOARD MEMBER",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTpkYzM4NWI0Mi0wYTZjLTQ2MzUtOTVjNi04Yjc5MGE0NDAyOTc%3D%2FMarc%2520Carson%2520crop.jpg&w=3840&q=75",
    bio: `Meet Marc, the leader of a team of startup catalysts at ATDC, where he provides valuable services to help companies grow, connect, and scale. Prior to joining ATDC, Marc founded Keystone Industries and HOTPACK, serving as their President and CEO. Marc is also the Chair of the Planning Commission for the City of Braselton. Marc received his bachelor's degree in finance from Gannon University in Pennsylvania. With his extensive business experience, Marc is excited to help mentor young tech entrepreneurs and guide them through the tough decisions that come with building a successful company. Outside of work, he enjoys spending time outdoors, hunting, fishing, playing golf, and spending time with his family.`
  },
  {
    name: "Cindy Green",
    title: "ADVISORY BOARD MEMBER",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo1NjM1OTIzNi03YWRkLTQ3NWEtOWMyNS0xYWM2YTdlYjA2Njk%3D%2FCindy%2520Green%2520Crop.jpg&w=3840&q=75",
    bio: `Cindy graduated from Auburn University with a degree in Chemical Engineering. She started working for Dupont as a Business Unit President before transitioning to Chief Marketing Officer before she retired. Outside of her corporate career, Cindy is a member of the Board of Trustees for Northeast Hospital System, where she has made significant contributions to the organization. She also served ten years on the Braselton Downtown Development Authority, primarily focused on driving economic development in the area. Cindy is also an accomplished businesswoman; she owns The Cotton Calf Kitchen, a popular restaurant in downtown Braselton, with her husband. As an engineer and business leader, Cindy is excited to be a part of Braselton Tech and contribute to the growth and success of start-up technology businesses in the area.`
  },
  {
    name: "Jeff Ford",
    title: "VICE PRESIDENT",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTphYjdmNDUwNS0wNzE4LTQ3OWEtYjIzNi1hYzg1YTEwZmFiYzI%3D%2FJeff%2520Ford%2520Crop.jpg&w=3840&q=75",
    bio: `Meet Jeff, an experienced executive, entrepreneur, and electrical engineer with a diverse portfolio spanning complex silicon, IoT, video compression, CGI, image processing, film scanning, and machine learning. Jeff has an MBA from Georgia Tech and a B.S. in Electrical Engineering from Mississippi State University. In addition to serving on Braselton Tech's advisory board, he's also a board member for a stealth med-tech startup, Falcomm, and iVue Robotics. As founder and CEO of ComplexIQ, Jeff designed multi-gigabit networking silicon and software used in over 50 million devices worldwide and won multi-million dollar intellectual property licensing contracts with international semiconductor manufacturers like Intel, Cisco, and ST Microelectronics. Prior to founding ComplexIQ, Jeff led Cisco's silicon development team and designed networking gateways for clients such as Comcast, Time Warner, and Cox. He also designed computer-generated imagery and video content creation workstations for Silicon Graphics and Intergraph Computer Systems. Jeff holds 14 patents and is the principal author of a peer-reviewed research publication that will be presented at the 2023 IEEE International Conference on Robotics and Automation (ICRA) in London.`
  },
  {
    name: "Dr. Patrick Fulbright",
    title: "ADVISORY BOARD MEMBER",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZToxZTI5NjgzNi0zNTM2LTQ0OTItYjZjZC03NjlhZGEyOWJlMWU%3D%2FDr.%2520W%2520Patrick_Fulbright.jpg&w=3840&q=75",
    bio: `Dr. Patrick Fulbright has over 25 years of executive management experience spending the majority of this time with The Home Depot where he honed his business experience in retail management, logistics, advertising, and finance. Previous to his time with The Home Depot, Dr. Fulbright spent ten years with Publix Supermarkets in Store Management and Expense Accounting. Dr. Fulbright has had his own businesses and partnerships throughout his life.  Dr. Fulbright was the Business Professor for the Savannah College of Art and Design (SCAD) from 2011 – 2017 where he taught graduate and undergraduate classes in business and finance.  In 2018, Dr. Fulbright joined the University of Georgia Public Service and Outreach Small Business Development Center as Area Director for Region II of Georgia.  Recently, Dr. Fulbright has assumed the interim Deputy Director Role for the UGA Georgia Center in Athens.  Dr. Fulbright earned his B.S. in Management from Florida Southern College, M.B.A. from Coles College of Business – Kennesaw State University and his Ph.D. in Educational Leadership from Trident University.  Dr. Fulbright has earned many awards throughout his career such as Georgia State's MAX Award for Excellence in Marketing Strategy and two UGA PSO SBDC Flewellens' for outstanding business consulting; is an avid woodworker and self-proclaimed business nerd.`
  },
  {
    name: "Chris Nedza",
    title: "ADVISORY BOARD MEMBER",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTozZmE5NGI1MS1iZWUyLTRmZTQtOGE1Mi05ZjJiMTc4MzU5MGQ%3D%2FChris%2520Nedza.jpg&w=3840&q=75",
    bio: `Chris is a serial entrepreneur and avid keynote speaker with a passion for building unbeatable and sustainable cultures. Chris graduated from the University of Georgia with a B.S. in Economics and earned his MBA from Emory University's Goizueta Business School. When he's not studying industry trends, contributing to thought leadership, or drumming at church, Chris can be found spending quality time with his wife and six sons. He's built an Inc. 5000 company, served as CEO of a restaurant point-of-sale business, founded CMD Services, and currently serves as Interim Lead Entrepreneur-In-Residence for ATDC. He has also served as a teacher and coordinator of academy business partnerships through Gwinnett County Public Schools. Chris developed ZeeZor, a real-time mobile reporting tool for his wife, to help manage their chain of hair salons. Today, ZeeZor is a leader in employee engagement with high-profile clients.`
  },
  {
    name: "Larry Monroe",
    title: "ADVISORY BOARD MEMBER",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTplNzA0ODg0Ni0yYWVjLTRjNmYtOWI2Ny0yODg1ODAzNzljYTk%3D%2FLarry%2520Monroe%2520crop.jpg&w=3840&q=75",
    bio: `Meet Larry Monroe, an energy and environment consultant with extensive experience in energy technology research. He holds a PhD in Chemical Engineering from MIT, and previously served as Southern Company's Chief Environmental Officer and executive in charge of all R&D. Larry is a part-owner of the Cotton Calf Kitchen in Braselton. He's passionate about supporting technology companies and bringing new jobs to the Braselton area. Larry sees Braselton Tech as a crucial step in establishing a supportive ecosystem for both established and startup tech companies.`
  },
  {
    name: "Jennifer Scott",
    title: "SECRETARY",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo4YjU1YWRkNC01OGQ0LTQyZjYtOTQxOS1jNWIyZTdkYWIwNmU%3D%2FJennifer%2520Scott.jpg&w=1920&q=75",
    bio: `Jennifer Scott is a skilled professional with over two decades of experience working for the Town of Braselton. Jennifer holds a Bachelor's degree in English from Huntingdon College, a Master of Science in Justice and Public Safety from Auburn University at Montgomery, and a Juris Doctor degree from Cumberland School of Law. As the overseer of all town services, Jennifer is responsible for supervising local government staff and serving as the liaison between the town council, town staff, volunteers, Agency and Authority members, and consultants. In 2004, Jennifer was named Local Government Administrator of the Year by the Northeast Georgia Regional Development Center, and in 2015, she was awarded Jackson County Woman of the Year.`
  },
  {
    name: "Russell Smith",
    title: "ADVISORY BOARD MEMBER",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTphOTdkMWU3Yi02NTcwLTQ1YjYtYWYzMC00OGY3OTExYzUwZGU%3D%2FRussell%2520Smith%2520Crop.jpg&w=3840&q=75",
    bio: `Russell Smith is a seasoned angel investor, startup mentor, and business builder with a wealth of industry experience. A Georgia Tech President's Scholar graduate, Russell is also a graduate of the Entrepreneurial Masters Programme from the Entrepreneurs' Organization and MIT. With his broad expertise, Russell has been involved in building businesses in a variety of industries, including agriculture, fintech, healthcare, manufacturing, robotics, and telecommunications. He has invested directly in over 20 startup and early-stage businesses, providing active advisory support to many of them. In addition to his entrepreneurial pursuits, Russell has held leadership roles in various business and civic organizations such as Leadership Georgia, Georgia Technology Authority, NGHS Foundation, Young Presidents' Organization, and Gwinnett Tech Foundation.`
  },
  {
    name: "Rhonda Stites",
    title: "ADVISORY BOARD PRESIDENT",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZToxZjQwNjk1Zi02MWRiLTQ5NmMtYmJkOS1mMmNlZjg1NzNmM2Y%3D%2FRhonda%2520Stites.jpg&w=3840&q=75",
    bio: `Meet Rhonda, an accomplished technology leader with 25 years of experience in launching and growing businesses. She spent two decades at Google and Microsoft, leading sales, marketing, and partnerships. At Google Cloud, Rhonda launched incubation businesses, developed solutions for retail, manufacturing, and media industries, and built strong relationships with consulting firms and third-party software providers. She continued her success at Microsoft, transforming fintech businesses through product innovation and cloud services, and serving as the lead for Georgia Fintech Academy. Rhonda is committed to giving back to her community, having served on the Braselton Town Council, the Braselton Downtown Development Authority, and the Northeast Georgia Health System Foundation cabinet. Rhonda holds a B.S. in Computer Science from DePaul University, a fintech certificate from Harvard, and is currently pursuing a Master's in Leadership from Cornell.`
  },
  {
    name: "Kurt Ward",
    title: "ADVISORY BOARD MEMBER",
    img: "https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTpmZDU4ZTU3Ni1hOGE2LTQxNDAtYTEzMy1mZDRkOWMxZmE3ODY%3D%2FKurt%2520Ward.jpg&w=3840&q=75",
    bio: `A native of DeKalb County, Kurt Ward graduated from Lithonia High in 1990, Baylor University in 1994, and Georgia State University College of Law in 2001.  He practices law in the areas of estate planning (wills, trusts, and probate), general counsel for small-to-medium size businesses, and litigation for disability and injury matters.  Outside of work, Kurt enjoys spending time outside with his wife Tamara and his two boys, volunteering in the community, and being an active member of Gwinnett Church.`
  }
];

export default function BoardPage() {
  const [bios, setBios] = useState(members.map(m => m.bio));
  const [imgs, setImgs] = useState(members.map(m => m.img));

  const handleClick = (anchor: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.history.replaceState(null, '', `#${anchor}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#f0f6ff] to-[#a7c7ff]">
      <NavBar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 mb-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex flex-col items-center justify-center text-center order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">Meet the Board</h1>
              <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide" style={{ color: '#5b7bb3' }}>Advisory Board Members</h2>
              <ul className="text-gray-700 text-base sm:text-lg space-y-1 font-medium">
                {members.map((member) => {
                  const anchor = member.name.replace(/\s+/g, '-').replace(/\./g, '').toLowerCase();
                  return (
                    <li key={member.name}>
                      <motion.a
                        href={`#${anchor}`}
                        onClick={handleClick(anchor)}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.1 }}
                        style={{ display: 'inline-block' }}
                        className="outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded"
                      >
                        {member.name}
                      </motion.a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <img
              src="https://xh0avnqjifo.makeswift.site/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo3MjJiZDBlZS1lZDI1LTRmMGYtOWEwMS0wZjU0M2NmZDI1YjE%3D%2FTeam%2520photo%2520cropped.jpg&w=3840&q=75"
              alt="Braselton Tech Board Group"
              className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg border border-blue-100 object-cover mb-6 md:mb-0 order-1 md:order-2"
            />
          </div>
          <div className="grid grid-cols-1 gap-8">
            {members.map((member, i) => (
              <motion.div
                key={member.name}
                id={member.name.replace(/\s+/g, '-').replace(/\./g, '').toLowerCase()}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left border border-blue-100 gap-6"
              >
                <AdminEditableImage
                  src={imgs[i]}
                  onChange={url => setImgs(arr => arr.map((img, j) => j === i ? url : img))}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 shadow"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h2>
                  <p className="text-base font-semibold mb-2 uppercase tracking-wide" style={{ color: '#5b7bb3' }}>{member.title}</p>
                  <AdminEditableText value={bios[i]} onChange={val => setBios(b => b.map((bio, j) => j === i ? val : bio))} className="text-gray-700 text-base whitespace-pre-line" as="p" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 