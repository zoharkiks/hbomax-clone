import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Footer, Hero, NewReleases, Popular } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>HBO Max Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}

      <div className="lg:h-screen bg-[url('https://m.media-amazon.com/images/I/71mUK6cPosL._SL1280_.jpg')] bg-cover bg-center bg-no-repeat p-5 md:px-9 lg:px-12">
        <Navbar />
        <Hero />
      </div>
      <div className="p-5  md:px-9 lg:px-12">
        <Popular />
        <NewReleases />
      
      </div>
    </div>
  );
};

export default Home;
