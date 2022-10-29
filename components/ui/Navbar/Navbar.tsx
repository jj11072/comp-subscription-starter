import Link from 'next/link';
import s from './Navbar.module.css';



import { useRouter } from 'next/router';
import { useUser } from 'utils/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Disclosure } from '@headlessui/react';
import ThemeChanger from './ThemeChanger';
import { Logo } from '@/components/icons/Icons';

const Navbar = () => {
  const navigation = ['product', 'account', 'pricing', 'contact'];
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();



  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-purple-500 dark:hover:text-purple-500 dark:text-gray-100">
                    <span>
                      <Logo />
                    </span>
                    <span>Comp</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-purple-500 dark:hover:text-purple-500 focus:text-purple-500 dark:focus:text-purple-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item}>
                        <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-500 focus:text-purple-500 focus:bg-indigo-100 dark:focus:bg-black focus:outline-none">
                          {item}
                        </a>
                      </Link>
                    ))}
                      {user ? (
                        <span
                          className={s.btn}
                          onClick={async () => {
                            await supabaseClient.auth.signOut();
                            router.push('/signin');
                          }}
                        >
                          Sign out
                        </span>
                      ) : (
                        <Link href="/signin">
                            <a className={s.btn}>Sign in</a>
                        </Link>
                      )}
                    
                  </>
                </Disclosure.Panel>
                <div className="absolute mx-auto right-20 lg:right-60">
                  {!open ? <ThemeChanger /> : null}
                </div>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/">
                  <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">     
            {user ? (
              <span
              className={s.btn}
                onClick={async () => {
                  await supabaseClient.auth.signOut();
                  router.push('/signin');
                }}
              >
                Sign out
              </span>
            ) : (
              <Link href="/signin">
                <a className={s.btn}>Sign in</a>
              </Link>
            )}
          
        </div>
      </nav>
    </div>
  );
};

// const Navbar = () => {
//   const router = useRouter();
//   const supabaseClient = useSupabaseClient();
//   const { user } = useUser();

//   return (
//     <nav className={s.root}>
//       <a href="#skip" className="sr-only focus:not-sr-only">
//         Skip to content
//       </a>
//       <div className="mx-auto max-w-6xl px-6">
//         <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
//           <div className="flex flex-1 items-center">
//             <Link href="/">
//               <a className={s.logo} aria-label="Logo" role="img">
//                 <Logo />
//               </a>
//             </Link>
//             <nav className="space-x-2 ml-6 lg:block">
//               <Link href="/">
//                 <a className={s.link}>Pricing</a>
//               </Link>
//               <Link href="/account">
//                 <a className={s.link}>Account</a>
//               </Link>
//             </nav>
//           </div>

//           <div className="flex flex-1 justify-end space-x-8">
//             {user ? (
//               <span
//                 className={s.link}
//                 onClick={async () => {
//                   await supabaseClient.auth.signOut();
//                   router.push('/signin');
//                 }}
//               >
//                 Sign out
//               </span>
//             ) : (
//               <Link href="/signin">
//                 <a className={s.link}>Sign in</a>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

export default Navbar;
