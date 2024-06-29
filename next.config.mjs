import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  reactStrictMode: true,
  swcMinify: false,
  output: 'export',
  sassOptions: {
    prependData: `@use "@/styles/_mixins.scss" as mix;
                  @use "@/styles/_variables.scss" as var;
                  @import "@/styles/_colors.scss";
                  `,
  },
});

export default nextConfig;
