import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import VideoCard from "../components/VideoCards/VideoCard";
import VideoCard2 from "../components/VideoCards/VideoCard2";

export default function Home() {
  return (
    <>
      <SeoHead title="Selenium Ninja" />
      <Layout>
        <Hero />

        <div className="py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard2 />
        </div>
      </Layout>
    </>
  );
}
