'use client'

import Script from 'next/script'

export function CloudflareAnalyticsOne() {
    return (
        <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({
                token: process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN_ONE,
            })}
            strategy="afterInteractive"
        />
    )
}

export function CloudflareAnalyticsTwo() {
    return (
        <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({
                token: process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN_TWO,
            })}
            strategy="afterInteractive"
        />
    )
}