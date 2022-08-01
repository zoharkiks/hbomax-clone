import type { NextPage } from 'next'
import Head from 'next/head'

// import components
import {Navbar, Footer,Hero}  from '../containers'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Website Sections */}
<Navbar/>
<Hero/>
<Footer/>

    </div>
  )
}

export default Home
