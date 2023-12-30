import { Store } from '@/utils/Store';
import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <Head>
        <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            <Link className='text-lg font-bold' href='/'>
              amazona
            </Link>
            <div>
              <Link className='p-2' href='/cart'>
                Cart
                {cart.cartItems.length > 0 && (
                  <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link className='p-2' href='/login'>
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>
          Copyright @ 2022 Amazona
        </footer>
      </div>
    </>
  );
}
