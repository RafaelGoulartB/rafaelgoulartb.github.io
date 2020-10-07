import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import ThemeContainer from '../contexts/theme/ThemeContainer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Rafael Goulart - FullStack Developer Freelancer</title>

        <meta
          name="description"
          content="I'm Rafael Goulart, Full Stack Developer and I work with React.js, Next.js, React Native and Node.js, I’m currently working on freelance projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
