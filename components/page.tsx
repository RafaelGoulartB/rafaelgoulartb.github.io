import React from 'react'
import Head from 'next/head'

interface PageProps {
  title?: string
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>
          {title || 'Rafael Goulart - FullStack Developer Freelancer'}
        </title>

        <meta
          name="description"
          content="I'm Rafael Goulart, Full Stack Developer and I work with React.js, Next.js, React Native and Node.js, I’m currently working on freelance projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="content">{children}</main>

      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 80%;
          max-width: 1700px;
        }
      `}</style>
    </div>
  )
}

export default Page
