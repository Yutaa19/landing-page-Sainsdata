import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Ganti URL ini dengan domain asli kamu
  const baseUrl = 'https://www.sainsdatauinsalatiga.com' 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Contoh kalau ada halaman rahasia
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}