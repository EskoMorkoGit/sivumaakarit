export const siteConfig = {
    name: "Etelä-Suomen Mökkihuolto & Vahti",
    slogan: "Mielenrauhaa mökkilomalle Etelä-Suomessa",
    description: "Ammattitaitoinen mökkitalkkari huolehtii kiinteistöstäsi, kun olet poissa. Nauti vapaa-ajasta – me hoidamme loput.",
    url: "https://etela-suomen-mokkihuolto.vercel.app",

    // Yhteystiedot (NAP - Name, Address, Phone)
    contact: {
        phone: "045 123 4567",
        email: "info@mokkihuolto.fi",
        address: "Etelä-Suomi",
        openingHours: "Ma-Pe 09-17",
        googleMapsEmbedUrl: ""
    },

    // Navigaatio
    nav: [
        { label: "Etusivu", href: "/" },
        { label: "Palvelut", href: "#services" },
        { label: "Hinnasto", href: "#pricing" },
        { label: "Usein kysyttyä", href: "#faq" },
        { label: "Ota yhteyttä", href: "#contact" },
    ],
    sivumaakaritNav: [
        { label: "Kotisivut", href: "#websites" },
        { label: "Verkkokaupat", href: "#ecommerce" },
        { label: "Referenssit", href: "#references" },
        { label: "Ota yhteyttä", href: "#contact" },
    ],

    // SEO & AIO
    keywords: ["Mökkitalkkari", "Lomavahti", "Kausihuolto", "Etelä-Suomi", "Mökin huolto", "LVI-tarkastus"],

    // Lomake-integraatio
    web3formsKey: "YOUR_WEB3FORMS_KEY_HERE",

    // Niche-kohtaiset palvelut
    services: [
        {
            title: "Mökkitalkkari ja pihatyöt",
            desc: "Nurmikonleikkuu, haravointi, rännien puhdistus ja polttopuiden teko. Hoidamme pihan ja kiinteistön kuntoon, jotta sinä voit rentoutua.",
            price: "Alk. 46 €/h",
            image: "/images/service_caretaker.webp"
        },
        {
            title: "Tekninen kausihuolto (LVI)",
            desc: "Vesijärjestelmien, pumppujen ja varaajien tyhjennys talveksi jäätymisvaurioiden estämiseksi. Ammattitaitoinen tarkastus takaa mielenrauhan.",
            image: "/images/service_hvac.webp"
        },
        {
            title: "Lomavahti ja turvallisuus",
            desc: "Säännölliset tarkastuskäynnit, raportointi ja mökin lämmitys ennen saapumistasi. Varmistamme kiinteistösi turvallisuuden poissaollessasi.",
            image: "/images/service_winter.webp"
        }
    ]
};
