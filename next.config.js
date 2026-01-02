/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',  // Required for Amplify SSR (fixes exit code 127)
}

module.exports = nextConfig