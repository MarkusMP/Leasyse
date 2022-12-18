/** @type {import('next').NextConfig} */
const sanityClient = require("@sanity/client");
const client = sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-11-15",
});

async function fetchSanityRedirects() {
  const data = await client.fetch(
    `*[_type == "redirects"]{ from, to, isPermanent }`
  );

  const redirects = data.map((redirect) => {
    return {
      source: `/${redirect.from}`,
      destination: `/${redirect.to}`,
      permanent: redirect.isPermanent,
    };
  });

  return redirects;
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async redirects() {
    const sanityRedirects = await fetchSanityRedirects();
    return sanityRedirects;
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
};

module.exports = nextConfig;
