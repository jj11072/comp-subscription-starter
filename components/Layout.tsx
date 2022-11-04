import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from 'components/ui/Navbar';
import Footer from 'components/ui/Footer';
import { ReactNode } from 'react';
import { PageMeta } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';




interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function Layout({ children, meta: pageMeta, }: Props) {
  const router = useRouter();
  const meta = {
    title: 'Next.js Subscription Starter',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
  };


 
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://comp-subscription-starter.vercel.app${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <Header /> 
      <motion.main         
        initial='hidden'
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'spring' }}
        >        
          <AnimatePresence
            mode='wait'
            
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            {children}
          </AnimatePresence>
      </motion.main>
      <Footer />
    </>
  );
}
