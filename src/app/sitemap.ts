import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://g7travels.in';
  
  const routes = [
    '',
    '/book-ride',
    '/rental-cars',
    '/pilgrimage-packages',
    '/airport-transfers',
    '/outstation',
    '/chennai-to-tirupati-taxi',
    '/bangalore-to-tirupati-taxi',
    '/hyderabad-to-tirupati-taxi',
    '/vijayawada-to-tirupati-taxi',
    '/services',
    '/about',
    '/contact',
    '/darshan-guide',
    '/tirupati-places',
    '/travel-guide',
    '/footpath-guide',
    '/talakona-guide',
    '/srikalahasti-guide',
    '/temple-combo-guide',
    '/local-temples-guide',
    '/chandragiri-guide',
    '/kanipakam-guide',
    '/accommodation-guide',
    '/temple-sevas-guide',
    '/faqs',
    '/safety',
    '/partner-with-us',
    '/privacy',
    '/terms',
    '/refund-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.match(/^\/(privacy|terms|refund-policy)/) ? 0.3 : 0.8,
  }));
}
