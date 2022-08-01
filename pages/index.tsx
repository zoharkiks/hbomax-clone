import type { NextPage } from 'next'
import Head from 'next/head'

// import containers
import {Footer,Hero}  from '../containers'
// import components 
import {Navbar}  from '../components'

const Home: NextPage = () => {
  return (
    <div className="p-3 md:px-8 lg:px-12 h-screen bg-black bg-no-repeat bg-contain md:bg-cover bg-[url('https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg')]" >
      <Head>
        <title>HBO Max Clone</title>
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
