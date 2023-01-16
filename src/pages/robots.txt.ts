// User-agent: *
// Allow: /

// Sitemap: https://www.example.com/sitemap.xml

export const get = async () => {
  return {
    body: `User-agent: *\nAllow: /\n\nSitemap: ${
      import.meta.env.SITE
    }sitemap-index.xml`,
  }
}
