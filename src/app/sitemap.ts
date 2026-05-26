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
    '/services',
    '/about',
    '/contact',
    '/faqs',
    '/safety',
    '/partner',
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
