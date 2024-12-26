export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://shafqat-marbles-shop.vercel.app/sitemap.xml',
  }
} 