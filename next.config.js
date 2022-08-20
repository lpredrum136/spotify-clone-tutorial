/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['i.scdn.co', 'mosaic.scdn.co']
	}
}

module.exports = nextConfig
