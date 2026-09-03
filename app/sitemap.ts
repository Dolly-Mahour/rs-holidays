// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Optional: Fetch dynamic blog/product URLs here
  
  return [
    // {
    //   url: 'https://mywebsite.com',
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 1,
    // },
    // {
    //   url: 'https://mywebsite.com',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    // THIS WILL BE APPLIED ACCORDING TO THE HOSTED URL -------------------
  ];
}
