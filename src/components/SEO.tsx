import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SITE_NAME = 'Bhavna Institute';
const DEFAULT_DESCRIPTION = '100% job-oriented practical training in Meerut. Courses: AI Tools, Web Development, Data Analytics, Digital Marketing, Tally + GST, Graphic Design. Free demo classes available.';
const BASE_URL = 'https://bcss-vai.vercel.app';

export default function SEO({ title, description, canonical }: SEOProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Job-Oriented Computer Courses in Meerut`;
  const desc = description || DEFAULT_DESCRIPTION;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
