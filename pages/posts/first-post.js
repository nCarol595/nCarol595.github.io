import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import newstyles from '../../components/layout.module.css'

export default function FirstPost() {
  return (
    <Layout>
      
      <Head>
        <title>Guinea Pig Enclosure</title>
      </Head>
      <header className={newstyles.header}>
        
        <p className={newstyles.secstyle}>
        <h2 className={newstyles.head2sec}>Guinea Pig Enclosure Project</h2>
          <h3 className={newstyles.head3sec}>How it happened: </h3>A relative of mine approached me with the idea of
          creating a guinea pig enclosure. Getting one custom made had to great of a price tag and 
          so I decided why not give it a try.
        
          <h3 className={newstyles.head3sec}>Idea: </h3>The point was for the enclosure to have storage and for cleaning up to be
          easier. Based on this and the desired length width and height of the enclosure I 
          proceded with a basic sketch which I then presented to my relative. After some 
          discussion I made a final sketch. 
      
         <h3 className={newstyles.head3sec}>
          Below is a in depth description of the build:
         </h3>
        </p>
       
        
      </header>
      <header className={newstyles.header2third}>
          <p className={newstyles.secstyle}>
              I made a basic diagram of the skeleton of the guinea pig cage enclosure:
              [I need to insert an image here] 
              
                
             
              
          </p>
          
      </header>
      <section className={newstyles.abme}> 
          <p>
              
          </p>
      </section>
    </Layout>

  )
}