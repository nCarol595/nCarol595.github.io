import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import newstyles from '../../components/layout.module.css'

export default function FirstPost() {
  return (
    <Layout>
      
      <Head>
        <title>First Post</title>
      </Head>
      
      <header className={newstyles.header2}>
          <section className={newstyles.secstyle}>
              
              [I need to insert an image here] : <h3 className={newstyles.header3}> A guinea pig cage</h3>
              
                I need to write description here
              
          </section>
          <section className={newstyles.secstyle}>
            [Another image here]: <h3 className={newstyles.header3}>A table</h3>
            I need to write description here
            
          </section>
      </header>
      <section className={newstyles.abme}> 
          <p>
              [DELETE]
          </p>
      </section>
    </Layout>

  )
}