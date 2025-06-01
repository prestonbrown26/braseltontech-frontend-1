import { useState, useEffect, useRef, createElement } from "react";

interface AdminEditableTextProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
  as?: React.ElementType;
  children?: React.ReactNode;
}

export default function AdminEditableText({ value, onChange, className = "", as = "p", children }: AdminEditableTextProps) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

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

  const Tag = as;

  if (!isAdmin) {
    return children ? createElement(Tag, { className }, children) : createElement(Tag, { className }, value);
  }

  return (
    <div className="relative group w-full">
      {editing ? (
        <div className="flex flex-col gap-2">
          <textarea
            ref={inputRef}
            className="w-full border border-blue-200 rounded-md p-2 text-gray-800 mb-2"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            rows={as === "h2" ? 2 : 4}
          />
          <div className="flex gap-2">
            <button
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-bold"
              onClick={() => { setEditing(false); onChange(editValue); }}
            >Save</button>
            <button
              className="px-4 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 font-bold"
              onClick={() => { setEditing(false); setEditValue(value); }}
            >Cancel</button>
          </div>
        </div>
      ) : (
        <>
          {children ? createElement(Tag, { className }, children) : createElement(Tag, { className }, value)}
          <button
            className="absolute top-0 right-0 text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-bold shadow opacity-0 group-hover:opacity-100 transition"
            onClick={() => setEditing(true)}
            style={{ zIndex: 10 }}
            aria-label="Edit text"
          >Edit</button>
        </>
      )}
    </div>
  );
} 