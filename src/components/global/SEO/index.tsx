import { Helmet } from "react-helmet";

interface SEOProps {
  prefix: string;
  path: string;
  description?: string;
  ogImageUrl?: string;
  twitterImageUrl?: string;
}

function SEO({
  prefix,
  path,
  description = "A simple GIF search app based on the Giphy API"
}: SEOProps) {
  const seo = {
    description,
    url: `https://gif-app.netlify.app${path}`,
    title: `${prefix} | Gif App`,
    twitterUsername: "@gbsolomon1"
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  );
}

export default SEO;
