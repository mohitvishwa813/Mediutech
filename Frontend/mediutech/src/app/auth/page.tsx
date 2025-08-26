"use client"

import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

export default function AuthPage() {
  const supabase = useSupabaseClient()

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4 border rounded-lg shadow">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]} // add "github", "facebook", etc. if needed
        />
      </div>
    </div>
  )
}
