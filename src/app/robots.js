const baseUrl = process.env.BASE_URL;

export default function robots() {
  const routes = [
    {
      name: "/",
    },
    {
      name: "/#home/",
    },
    {
      name: "/#aboutMe/",
    },
    {
      name: "/#portfolio/",
    },
    {
      name: "/#contact/",
    },
  ].map((route) => route.name);
  return {
    rules: {
      userAgent: "*",
      allow: [...routes],
      disallow: ["/private/"],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
