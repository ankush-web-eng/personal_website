import siteConfig from '@/config/metadata';

export default function CustomHead() {
  return (
    <>
      <meta
        name="description"
        content="This is Ankush's professional space where you can explore his projects, testimonials, and blogs."
      />
      <meta name="application-name" content={siteConfig.name} />

      {/* PWA Meta Tags */}
      <link rel="manifest" href={`${siteConfig.url}/manifest.json`} />
      <meta name="theme-color" content={siteConfig.themeColor} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-title" content={siteConfig.name} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href={siteConfig.profileImage} />
      
      {/* Additional Social Media Meta Tags */}
      <meta name="linkedin:title" content={siteConfig.name} />
      <meta name="linkedin:description" content="Explore Ankush's professional portfolio and projects." />
      <meta name="linkedin:image" content={siteConfig.profileImage} />
      
      {/* Preload Critical Resources */}
      <link
        rel="preload"
        href={siteConfig.profileImage}
        as="image"
        type="image/png"
      />
    </>
  );
}