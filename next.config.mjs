import withExportImages from "next-export-optimize-images";
import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer(
  withExportImages({
    reactStrictMode: true,
    swcMinify: false,
    output: "export",
  })
);

export default nextConfig;
