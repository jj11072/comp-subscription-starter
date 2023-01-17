import 'styles/main.css';
import 'styles/chrome-bug.css';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/Layout';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
import type { Database } from 'types_db';
import { ThemeProvider } from "next-themes";

 




export default function MyApp({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>()
  );
  useEffect(() => {
    document.body.classList?.remove('loading');
    
  }, []);

  return (
    <ThemeProvider attribute="class">
      <SessionContextProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider>
          <Layout>            
            <Component {...pageProps} />            
          </Layout>
        </MyUserContextProvider>
      </SessionContextProvider>
    </ThemeProvider>
  );
}
