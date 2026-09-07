// app/sitemap.ts
import { MetadataRoute } from 'next';
import { ALL_PACKAGES } from '@/src/data/packagesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rsholidays.com';
  const now = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/weekend-getaways`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/upcoming-trips`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/corporate-tours`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events-festivals`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ];

  // Dynamic package detail routes
  const packageRoutes: MetadataRoute.Sitemap = ALL_PACKAGES.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Unique state tourism routes
  const states = Array.from(
    new Set(
      ALL_PACKAGES.map((pkg) =>
        pkg.state
          .split('/')[0]
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      )
    )
  );

  const stateRoutes: MetadataRoute.Sitemap = states.map((stateSlug) => ({
    url: `${baseUrl}/states/${stateSlug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  // International trips
  const internationalTripSlugs = [
    'bali',
    'newzealand',
    'dubai',
    'thailand',
    'maldives',
    'singapore',
    'vietnam',
  ];

  const tripRoutes: MetadataRoute.Sitemap = internationalTripSlugs.map((slug) => ({
    url: `${baseUrl}/trips/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...packageRoutes, ...stateRoutes, ...tripRoutes];
}
