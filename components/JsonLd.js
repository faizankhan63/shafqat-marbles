export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Shafqat Marble & Granite",
          "image": "https://shafqat-marbles-shop.vercel.app/og-image.jpg",
          "description": "Premium marble and granite supplier. We offer high-quality natural stone products, custom fabrication, and installation services.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address",
            "addressLocality": "Your City",
            "addressRegion": "Your Region",
            "postalCode": "Your Postal Code",
            "addressCountry": "Your Country"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": YOUR_LATITUDE,
            "longitude": YOUR_LONGITUDE
          },
          "url": "https://shafqat-marbles-shop.vercel.app/",
          "telephone": "YOUR_PHONE_NUMBER",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          ]
        })
      }}
    />
  );
} 