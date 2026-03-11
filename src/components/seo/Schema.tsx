import { siteConfig } from "@/lib/site-config";

export function Schema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": `${siteConfig.url}/#localbusiness`,
                "name": siteConfig.name,
                "description": siteConfig.description,
                "url": siteConfig.url,
                "telephone": siteConfig.contact.phone,
                "email": siteConfig.contact.email,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": siteConfig.contact.address, // Ideally split street/city/zip
                    "addressLocality": "Etelä-Suomi", // Placeholder based on content
                    "addressCountry": "FI"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "60.0", // Placeholder
                    "longitude": "24.0" // Placeholder
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "17:00"
                },
                "image": `${siteConfig.url}/og-image.jpg`, // Placeholder
                "priceRange": "€€"
            },
            {
                "@type": "FAQPage",
                "@id": `${siteConfig.url}/#faq`,
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Miten varmistatte mökin turvallisuuden talvella?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Suoritamme säännölliset tarkastuskäynnit ja raportoimme havainnoista välittömästi. Talvivahti-palvelumme kattaa myös lumikuorman tarkkailun."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Mitä teen jos mökillä on putkirikko?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ota meihin yhteyttä heti. Talvivahti-asiakkaana havaitsemme vuodot nopeasti ja järjestämme tarvittavat korjaustoimenpiteet yhteistyökumppaneidemme kautta."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
