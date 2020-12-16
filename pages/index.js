import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styles from '../components/layout.module.css'


export default function Home() {
  return (
    <Layout home>
      
        
    
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <section className={styles.secstyle}>
          <h2>
            Hello There!
          </h2>
          I am a computer science graduate. I've had more free time recently so this website is dedicated to documenting the various projects I have worked on in that time. You can further
          read about these projects below.
          
          {/*You can read more about me here(Link). Feel free to e-mail me(link) */ }

        </section>
        
      </header>
      <section className={styles.header2third}>
        <p className={styles.secstyle}>
          <h2 className={utilStyles.headingMd}>Projects</h2>
          <img
              src="/images/guinea_pigs.jpg"
              className={`${styles.imgClass} ${utilStyles.borderCircle}`}
            />
          <Link href="./posts/first-post">
            <a className={styles.projAnchor}>Guinea Pig Cage Enclosure Project</a>
          </Link>
          <p>Snippet: This wood-working project was the first major one I
          had taken on. I created an enclosure for 2 very sweet guinea pigs that
          would provide them ample space to play and double as storage for pet supplies.</p>
        
        {/*<p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        */}
        </p>
      </section>
    </Layout>
  )
}
