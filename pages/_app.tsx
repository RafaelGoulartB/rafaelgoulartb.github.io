import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import ThemeContainer from '../contexts/theme/theme-container'
import Router from 'next/router'

import '../styles/global.css'

import seoConfig from '../config/seo'
import * as gtag from '../utils/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContainer>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
