import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, ReactNode } from 'react';

import LoadingDots from 'components/ui/LoadingDots';
import Button from 'components/ui/Button';
import Input from '@/components/ui/Input';

import { useUser } from 'utils/useUser';
import { postData } from 'utils/helpers';
import { resetPasswordRequest, updateFullName } from 'utils/supabase-client';

import { User } from '@supabase/supabase-js';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div className="border border-zinc-700	max-w-3xl w-full p rounded-md m-auto my-8">
      <div className="px-5 py-4">
        <h3 className="text-2xl mb-1 font-medium">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
        {children}
      </div>
      <div className="border-t border-zinc-700 bg-purple-600 dark:bg-zinc-900 p-4 text-white dark:text-zinc-500 rounded-b-md">
        {footer}
      </div>
    </div>
  );
}





  

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });

export default function Account({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const { isLoading, subscription, userDetails } = useUser();
  const [name, setName] = useState('');
  const router = useRouter();
  const notify = () => toast('Account updated');
  const notifyEmail = () => toast('Check your email for the password reset link.');

  const handleUpdateName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await updateFullName(user, name);
    setLoading(false);
    router.reload();
    notify();
  };

  const handleResetRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await resetPasswordRequest(user, user ? user.email : undefined);
    setLoading(false);
    notifyEmail();
  };

  

 
  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link'
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  const subscriptionPrice =
  subscription &&
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: subscription?.prices?.currency,
    minimumFractionDigits: 0
  }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <section className="bg-white dark:bg-dark mb-32"> 
      <ToastContainer />
      <div className="max-w-6xl mx-auto pt-8 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white sm:text-center sm:text-6xl">
            Account
          </h1>
          <p className="mt-5 text-xl dark:text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
            We partnered with Stripe for a simplified billing.
          </p>
        </div>
      </div>
      <div className="p-4">
        <Card
          title="Your Plan"
          description={
            subscription
              ? `You are currently on the ${subscription?.prices?.products?.name} plan.`
              : ''
          }
          footer={
            <div className="flex items-start justify-between flex-col sm:flex-row sm:items-center">
              <p className="pb-4 sm:pb-0">
                Manage your subscription on Stripe.
              </p>
              
            </div>
          }
        >
          <div className="text-xl mt-8 mb-4 font-semibold">           
            {isLoading ? (
              <div className="h-12 mb-6">
                <LoadingDots />
              </div>
            ) : subscription ? (
              `${subscriptionPrice}/${subscription?.prices?.interval}`
            ) : (
              <Link href="/pricing">
                <a className='underline'>Choose your plan</a>
              </Link>
            )}
          </div>
          <Button
            variant="slim"
            loading={loading}
            disabled={loading || !subscription}
            onClick={redirectToCustomerPortal}
          >
            Open customer portal
          </Button>
        </Card>
        <Card
          title="Your Name"
          description="Please enter your full name."
          footer={<p>Please use 32 characters at maximum. (refresh the page to see changes)</p>}
        >
         
          <div className="text-xl mt-4 mb-4 font-semibold">
            <form className='mb-4' onSubmit={handleUpdateName} >
              <Input placeholder="Name" value={name} onChange={setName} className='mb-4' />
              <Button
                variant="slim"
                type="submit"
                loading={loading}
                disabled={loading || !name.length }           
              >
                change
              </Button>
            </form>
            {userDetails ? (
              `${
                userDetails.full_name ??
                `${userDetails.first_name} ${userDetails.last_name}`
              }`
             
            ) : (
              <div className="h-8 mb-6">
                <LoadingDots />
              
              </div>
            )}
            
          </div>
        </Card>
       
        <Card
          title="Your Email"
          description="Please enter the email address you want to use to login."
          footer={<p>To change your email please contact admin@comp.co.uk or call us 01484 484 484</p>}
        >
          <p className="text-xl mt-8 mb-4 font-semibold">
            {user ? user.email : undefined}
          </p>
        </Card>
        <Card
          title="Reset Password"
          description="request a password change."
          footer={<p>We will email you to verify the change.</p>}
        >
          <form className='mt-8 mb-4' onSubmit={handleResetRequest} method='post'>
            
            <Button
              variant="slim"
              type="submit"
              loading={loading}
              disabled={loading || !user }
            >
              change
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
