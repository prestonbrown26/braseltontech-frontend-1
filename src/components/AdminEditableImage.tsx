import { useState, useEffect, useRef } from "react";

interface AdminEditableImageProps {
  src: string;
  onChange: (val: string) => void;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function AdminEditableImage({ src, onChange, alt = "", className = "", style = {}, children }: AdminEditableImageProps) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(src);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEditValue(src);
  }, [src]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("admin_token"));
    }
  }, []);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  if (!isAdmin) {
    return (
      <div className={className} style={style}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        {children}
      </div>
    );
  }

  return (
    <div className={"relative group " + className} style={style}>
      {editing ? (
        <div className="flex flex-col gap-2 items-center">
          <input
            ref={inputRef}
            type="text"
            className="w-full border border-blue-200 rounded-md p-2 text-gray-800 mb-2"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            placeholder="Paste image URL..."
          />
          <div className="flex gap-2">
            <button
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-bold"
              onClick={() => { setEditing(false); onChange(editValue); }}
            >Save</button>
            <button
              className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-bold"
              onClick={() => { setEditing(false); setEditValue(src); }}
            >Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <img src={src} alt={alt} className="w-full h-full object-cover" />
          {children}
          <button
            className="absolute top-0 right-0 text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-bold shadow opacity-0 group-hover:opacity-100 transition"
            onClick={() => setEditing(true)}
            style={{ zIndex: 10 }}
            aria-label="Edit image"
          >Edit</button>
        </>
      )}
    </div>
  );
} 