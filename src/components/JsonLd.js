export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Shafqat Marble & Granite",
    "image": "https://shafqat-marbles-shop.vercel.app/og-image.jpg",
    "description": "Premium marble and granite supplier in Pakistan. We offer high-quality natural stone products, custom fabrication, and installation services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK",
      "addressRegion": "Punjab",
      "addressLocality": "Lahore"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.529089",
      "longitude": "74.319649"
    },
    "url": "https://shafqat-marbles-shop.vercel.app",
    "telephone": "+923226671946",
    "email": "jk3241581@gmail.com",
    "priceRange": "$$",
    "openingHours": "Mo-Sa 09:00-18:00",
    "sameAs": [
      "https://wa.me/+923226671946"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "31.529089",
        "longitude": "74.319649"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marble and Granite Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Badal Marble",
            "description": "Premium Pakistani Badal Grey Marble"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Black Gold Marble",
            "description": "Luxurious Pakistani Black Gold Marble"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 