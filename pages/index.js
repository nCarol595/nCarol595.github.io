import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <Layout home>
      
        
    
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingBig}>
        <h2>Projects</h2>
        <p>[insert pic]
          <Link href="./posts/first-post">
            <a>Guinea Pig Cage Enclosure Project</a>
          </Link>
        </p>
        {/*<p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        */}
      </section>
    </Layout>
  )
}
