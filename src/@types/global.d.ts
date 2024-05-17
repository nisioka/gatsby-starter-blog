declare const __PATH_PREFIX__: string;

type SiteMetadata = {
  title: string
  author: {
    name: string
    summary: string
    avatarImagePath: string
  }
  description: string
  siteUrl: string
  social: {
    github: string
    twitter: string
  }
};

type AllMdx = {
  nodes: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      date: string
      description: string
      featuredImagePath: string
    }
  }[]
}

type AllWpPost = {
  nodes: {
    title: string
    excerpt: string
    slug: string
    date: string
    featuredImage: {
      node: {
        altText: string
        gatsbyImage: IGatsbyImageData | null
      }
    }
  }[]
}

type AllFile = {
  edges: {
    node: {
      relativePath: string
      childImageSharp: {
        gatsbyImageData: any
      }
    }
  }[]
}

type CommonPost = {
  title: string
  excerpt: string
  slug: string
  date: string
  description?: string
  altText: string
  gatsbyImage: IGatsbyImageData | undefined
}

type MdxPost = {
  id: string
  excerpt: string
  body: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
    description: string
    featuredImagePath: string
    category: string
    tags: string[]
  }
}

type WpPost = {
  id: string
  title: string
  content: string
  excerpt: string
  slug: string
  date: string
  featuredImage: {
    node: {
      altText: string
      gatsbyImage: any
    }
  }
  categories: {
    nodes: {
      name: string
    }[]
  }
  tags: {
    nodes: {
      name: string
    }[]
  }
}