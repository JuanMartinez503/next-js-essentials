/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[//the protocal must be set when using Images element
            {
                protocol:'https',
                hostname:'www.thecocktaildb.com',
                port:'',
                pathname:'/images/**'
            }
        ]
    }
}

module.exports = nextConfig
