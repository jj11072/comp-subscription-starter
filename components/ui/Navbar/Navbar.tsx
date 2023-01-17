import Link from '@/components/NoScrollLink';
import s from './Navbar.module.css';
import ThemeChanger from './ThemeChanger';

import { useRouter } from 'next/router';
import { useUser } from 'utils/useUser';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Disclosure } from '@headlessui/react';
import { Logo } from '@/components/icons/Icons';



const Header = () => {
  const navigation = ['product', 'account', 'pricing', 'contact'];
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  

  return (
    <header className="container sticky top-0 bg-white dark:bg-[rgb(18,18,18)] z-20 mx-auto ">
      <nav className="container outline-bottom relative flex flex-wrap items-center justify-between p-6 w-full lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure >
          {({ open }) => (
            <>
              <div className=" flex flex-wrap items-center justify-between w-full lg:w-auto ">
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
                  className="px-2 py-1  text-gray-500 rounded-md lg:hidden hover:text-purple-500 dark:hover:text-purple-500 focus:text-purple-500 dark:focus:text-purple-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-transparent"
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

                <Disclosure.Panel  className="relative pb-10 flex flex-wrap w-full my-5 lg:hidden">  
                  <>
                    {navigation.map((item, index ) => (
                      <Link href={`/${item}`} key={index} >
                          <a className={s.a}>
                            <Disclosure.Button>
                              {item}
                            </Disclosure.Button>
                          </a>
                        </Link>        
                    ))}    
                  </>
                  <>
                    {user ? (
                      <span
                        className='bg-purple-500 px-4 py-2 rounded-md text-white cursor-pointer'
                        onClick={async () => {
                          await supabaseClient.auth.signOut();
                          router.push('/signin');
                        }}
                      >
                        Sign out
                      </span>
                    ) : (
                      <Link href="/signin">
                          <a className='absolute right-0 bottom-0 rounded-md lg:ml-5'>
                            <Disclosure.Button className=' btn rounded-md bg-purple-500 text-white'  >
                              Sign in
                            </Disclosure.Button>
                          </a>
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
                <Link href={menu}>
                  <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-500 dark:focus:text-purple-500  focus:text-purple-500  focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden space-x-4 lg:flex ">     
            {user ? (
              <span
              className='btn bg-purple-500 text-white'
                onClick={async () => {
                  await supabaseClient.auth.signOut();
                  router.push('/signin');
                }}
              >
                Sign out
              </span>
            ) : (
              <Link href="/signin">
                <a className='btn bg-purple-500 text-white'>Sign in</a>
              </Link>
            )}
          
        </div>
      </nav>
    </header>
  );
};



export default Header;
