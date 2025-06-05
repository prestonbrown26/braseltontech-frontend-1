"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { redirectToAdmin } from "@/lib/api";

interface EnvironmentInfo {
  pathname?: string;
  hostname?: string;
  protocol?: string;
  localStorage?: {
    hasToken: boolean;
    tokenLength: number;
    expiry: string;
  };
  userAgent?: string;
  nextPublicApiBaseUrl?: string;
  nextPublicBackendUrl?: string;
}

export default function AdminDebugPage() {
  const router = useRouter();
  const [info, setInfo] = useState<EnvironmentInfo>({});
  
  useEffect(() => {
    // Collect information about the environment
    if (typeof window !== "undefined") {
      setInfo({
        pathname: window.location.pathname,
        hostname: window.location.hostname,
        protocol: window.location.protocol,
        localStorage: {
          hasToken: !!localStorage.getItem("braseltontech_admin_token"),
          tokenLength: localStorage.getItem("braseltontech_admin_token")?.length || 0,
          expiry: localStorage.getItem("braseltontech_admin_token_expiry") || "none"
        },
        userAgent: navigator.userAgent,
        nextPublicApiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "not set",
        nextPublicBackendUrl: process.env.NEXT_PUBLIC_BACKEND_URL || "not set"
      });
    }
  }, []);
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Navigation Debug Page</h1>
      
      <div className="mb-8 flex gap-4">
        <button 
          onClick={() => router.push("/admin")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to Admin (router.push)
        </button>
        
        <button 
          onClick={() => redirectToAdmin(router)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Go to Admin (redirectToAdmin)
        </button>
        
        <Link href="/admin">
          <button className="px-4 py-2 bg-purple-500 text-white rounded">
            Go to Admin (Link)
          </button>
        </Link>
        
        <button 
          onClick={() => window.location.href = "/admin"}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Go to Admin (window.location)
        </button>
      </div>
      
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Environment Info:</h2>
        <pre className="whitespace-pre-wrap">{JSON.stringify(info, null, 2)}</pre>
      </div>
    </div>
  );
} 