import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogLocale?: string;
  schema?: object | object[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/og-image.png',
  ogLocale = 'pt_BR',
  schema,
}: SEOProps) {
  const siteName = 'Souriê Odontologia Integrada';
  const fullTitle = title || siteName;
  const defaultDescription = 'Clínica odontológica moderna e acessível em Nova Era, MG. Especialistas em Invisalign, Implantes, Próteses e Odontologia Estética com tecnologia e conforto.';

  // Format absolute image URL for external social platforms / link preview scrapers
  const baseDomain = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : 'https://sourie.com.br';
  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${baseDomain}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;
  const imageType = absoluteOgImage.endsWith('.jpg') || absoluteOgImage.endsWith('.jpeg')
    ? 'image/jpeg'
    : absoluteOgImage.endsWith('.webp')
    ? 'image/webp'
    : 'image/png';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:secure_url" content={absoluteOgImage} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* WhatsApp / Generic Link Preview Fallbacks */}
      <link rel="image_src" href={absoluteOgImage} />
      <meta itemProp="image" content={absoluteOgImage} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content={siteName} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
