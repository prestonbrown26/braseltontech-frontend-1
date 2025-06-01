import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface DropdownModalProps {
  link: string;
  label: string;
  children: ReactNode;
}

export default function DropdownModal({ link, label, children }: DropdownModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-2 z-50 min-w-[200px] bg-white border border-blue-100 shadow-xl rounded-xl p-4 text-center"
          >
            <div className="text-gray-700 text-sm mb-2">Go to:</div>
            <Link href={link} className="font-bold underline underline-offset-2 transition" style={{ color: '#5b7bb3' }}>
              {label}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 