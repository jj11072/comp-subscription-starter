import {
  createBrowserSupabaseClient,
  User
} from '@supabase/auth-helpers-nextjs';

import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { ProductWithPrice } from 'types';
import type { Database } from 'types_db';

export const supabaseClient = useSupabaseClient();

export const supabase = createBrowserSupabaseClient<Database>();

export const getActiveProductsWithPrices = async (): Promise<
  ProductWithPrice[]
> => {
  const { data, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
    throw error;
  }
  
  return (data as any) || [];
};

export const updateUserName = async (user: User, name: string) => {
  await supabase
    .from('users')
    .update({
      full_name: name
    })
    .eq('id', user.id);
};

export const updateFullName = async (user: User, name: string) => {
  await supabase
    .from('users')
    .update({
      full_name: name
    })
    .eq('id', user.id);
    
    

}
;
export const updatePassWord = async (user: User, password: any) => {
  await supabase
    .from('auth')
    .update({
      password: password
    })
    .eq('id', user.id);
    
    

};


export const resetPasswordRequest = async (user: User, email: any) => {
  const {data, error} = await supabase.auth.resetPasswordForEmail(email,  {
          redirectTo: "http://localhost:3000/password-reset", // this will redirect to us at password-reset page,
          // you can also set your own page for it.
        })
        if (error) {
          console.log(error.message)
          throw error
        } else {
          console.log(data)
        };
}

