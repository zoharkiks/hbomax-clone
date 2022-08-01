import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Footer, Hero } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="h-screen  bg-black bg-[url('https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg')] bg-contain bg-no-repeat p-3 md:bg-cover md:px-8 lg:px-12">
      <Head>
        <title>HBO Max Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
