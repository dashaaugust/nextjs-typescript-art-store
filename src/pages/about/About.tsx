import Head from "next/head";
import { MainLayout } from "layouts";

const About = () => {
  return (
    <MainLayout>
      <Head>
        {/* TODO: Head */}
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      About
    </MainLayout>
  );
};

export default About;
