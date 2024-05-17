/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
import type { GatsbyConfig } from "gatsby"

type feedArgument = {
  query: {
    site: {
      siteMetadata: SiteMetadata
    }
    allMdx: allMdx
  }
}

type allMdx = {
  nodes: {
    frontmatter: {
      title: string
      date: string
    }
    excerpt: string
    fields: {
      slug: string
    }
  }[]
}

const siteMetadata: SiteMetadata = {
  title: `分かりやすい技術ブログ`,
  author: {
    name: `nisioka`,
    summary: `オレンジ好きの中で最強のエンジニアになりたい。`,
    avatarImagePath: 'src/static/24okBlock.webp'
  },
  description: `誰にでも分かりやすいをモットーに、IT技術的な内容を投稿するブログです。`,
  siteUrl: `https://sun0range.tech.server-on.net`,
  social: {
    github: `nisioka`,
    twitter: `nisioka55`,
  },
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config: GatsbyConfig = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-G75Y1FWLC0",//GOOGLE_ANALYTICS_TRACKING_ID,
          "pub-3123919168024595",//GOOGLE_ADSENSE_ID,
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [
          `/page/*`,
          `/404?(.*)`,
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }: feedArgument) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                })
              })
            },
            query: `{
              allMdx(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `分かりやすい技術ブログ`,
        short_name: `分か技ブログ`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.webp`, // This path is relative to the root of the site.
      },
    },
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
            process.env.WPGRAPHQL_URL ||
            `http://localhost/graphql`,
        // type: {
        //   __all: {
        //     limit: process.env.NODE_ENV === `development` ? 5 : null
        //   }
        // },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
  ],
}
export default config
