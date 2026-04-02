import { siteConfig } from "@/lib/site-config";

export function Schema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${siteConfig.url}/#organization`,
                "name": siteConfig.name,
                "url": siteConfig.url,
                "logo": {
                    "@type": "ImageObject",
                    "@id": `${siteConfig.url}/#logo`,
                    "url": `${siteConfig.url}/icon.webp`, // Using the high-res icon I just set
                    "contentUrl": `${siteConfig.url}/icon.webp`,
                    "width": "1024",
                    "height": "1024",
                    "caption": siteConfig.name
                },
                "image": { "@id": `${siteConfig.url}/#logo` },
                "description": siteConfig.description,
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": siteConfig.contact.phone,
                    "contactType": "customer service",
                    "email": siteConfig.contact.email,
                    "areaServed": "FI",
                    "availableLanguage": "Finnish"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": `${siteConfig.url}/#business`,
                "name": siteConfig.name,
                "description": siteConfig.description,
                "url": siteConfig.url,
                "telephone": siteConfig.contact.phone,
                "email": siteConfig.contact.email,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lohja",
                    "addressRegion": "Uusimaa",
                    "addressCountry": "FI"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "60.248",
                    "longitude": "24.066"
                },
                "image": `${siteConfig.url}/images/tarjous-hero.webp`, 
                "priceRange": "€€",
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "17:00"
                }
            },
            {
                "@type": "FAQPage",
                "@id": `${siteConfig.url}/#faq`,
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Mistä 990 euron hinta koostuu ja miten voitte myydä tähän hintaan?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Käytämme tekoälyä asiantuntevasti apuna koodauksessa ja tekstintuotannossa. Tekoäly ei tee sivuja puolestamme, mutta se poistaa rutiinityön, jolloin voimme keskittyä tuomaan sinulle rahaa hakukonenäkyvyydellä ja myyvällä asettelulla."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Miksi maksaisin 150 €/kk ylläpidosta?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "150 €/kk on VIP-huoltosopimus: me pesemme auton, katsomme moottoriin ja huolehdimme, että oikeat asiakkaat nousevat kyytiin. Se on sijoitus siihen, että sivusi tuo jatkuvasti uutta kauppaa."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Miten voitte tarjota näin nopeat, 7 päivän toimitukset?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Keskitymme olennaiseen: selkeyteen, toimivuuteen ja löydettävyyteen. Emme rakenna raskaita himmeleitä, vaan työskentelemme tehokkaasti ja viivyttelemättä heti kun toimitat meille materiaalisi."
                        }
                    }
                ]
            },
            {
                "@type": "ItemList",
                "@id": `${siteConfig.url}/#services`,
                "name": "Sivumaakareiden Palvelusivut",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Moderni laskeutumissivu",
                        "description": "Premium-tason myyntisivu, joka on suunniteltu muuttamaan kävijät asiakkaiksi."
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Google Lighthouse 100/100",
                        "description": "Täydelliset tekniset pisteet nopeudesta ja löydettävyydestä."
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Toimitus 7 päivässä",
                        "description": "Sivustot ovat valmiina viikossa materiaalin toimittamisen jälkeen."
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
