import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import ThemeContainer from '../contexts/theme/ThemeContainer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Rafael Goulart - FullStack Developer Freelancer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
