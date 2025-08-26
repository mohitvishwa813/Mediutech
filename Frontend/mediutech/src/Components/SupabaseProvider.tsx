// src/components/SupabaseProvider.tsx
"use client";
import { type ReactNode } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabaseClient";

type Props = { children: ReactNode; initialSession?: Session | null };

const SupabaseProvider = ({ children, initialSession }: Props) => (
  <SessionContextProvider supabaseClient={supabase} initialSession={initialSession}>
    {children}
  </SessionContextProvider>
);

export default SupabaseProvider;
