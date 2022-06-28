import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { ReactElement, ReactNode, useEffect } from 'react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'

// function Layout({children}: {children: ReactElement}) {
//   return <></>
// }

// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// }

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// }

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap")
  }, []);

  //const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
