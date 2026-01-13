import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti URL ini dengan domain asli kamu
  const baseUrl = 'https://www.sainsdatauinsalatiga.com' 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },

  ]
}