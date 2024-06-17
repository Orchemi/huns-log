import { withContentlayer } from 'next-contentlayer';
import withExportImages from 'next-export-optimize-images';

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer(
  withExportImages({
    reactStrictMode: true,
    swcMinify: false,
    output: 'export',
    sassOptions: {
      prependData: `@use "@/styles/_mixins.scss" as mix;
                    @use "@/styles/_variables.scss" as var;`,
    },
  }),
);

export default nextConfig;
