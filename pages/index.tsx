import type { NextPage } from "next";
import Head from "next/head";

// import containers
import { Footer, Hero, NewReleases, Popular } from "../containers";
// import components
import { Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="h-scree bg-black bg-[url('https://m.media-amazon.com/images/I/71mUK6cPosL._SL1280_.jpg')] bg-contain bg-no-repeat p-5 md:bg-cover md:px-9 lg:px-12">
      <Head>
        <title>HBO Max Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Website Sections */}
      <Navbar />
      <Hero />
      <Popular />
      <NewReleases/>
      <Footer />
    </div>
  );
};

export default Home;
