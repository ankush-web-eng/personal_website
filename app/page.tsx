import Homepage from "@/components/pages/homepage"
import Head from "next/head";
import siteConfig from "@/config/metadata";
export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <meta property="og:title" content={siteConfig.name} key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content={siteConfig.url} key="url" />
        <meta property="og:description" content={siteConfig.description} key="description" />
        <meta name="description" content={siteConfig.description} />
        <meta property="og:site_name" content="Ankush's World" key="siteName" />
      </Head>
      <Homepage />
    </>
  );
}
