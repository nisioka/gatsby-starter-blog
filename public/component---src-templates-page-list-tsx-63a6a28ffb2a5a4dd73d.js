"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[794],{7449:function(e,n,t){var a,l=t(5276),r=t(4794),i=t(6540),o=t(4715);n.A=e=>{let n,t,a,l,{maxPage:o,current:d,type:u=""}=e;return n=1===d?i.createElement("li",{className:"not-work",key:"pagination0"},i.createElement("span",null,"最新")):i.createElement("li",{key:"pagination0"},i.createElement(r.Link,{to:"/"+u+(u?"/":"")},"最新")),t=1===d?i.createElement("li",{className:"not-work",key:"pagination1"},i.createElement("span",null,"前へ")):2===d?i.createElement("li",{key:"pagination1"},i.createElement(r.Link,{to:"/"+u+(u?"/":"")},"前へ")):i.createElement("li",{key:"pagination1"},i.createElement(r.Link,{to:"/"+u+(u?"/":"")+"page/"+(d-1)+"/"},"前へ")),a=d===o?i.createElement("li",{className:"not-work",key:"pagination3"},i.createElement("span",null,"次へ")):i.createElement("li",{key:"pagination3"},i.createElement(r.Link,{to:"/"+u+(u?"/":"")+"page/"+(d+1)+"/"},"次へ")),l=d===o?i.createElement("li",{className:"not-work",key:"paginatio4"},i.createElement("span",null,"最後")):i.createElement("li",{key:"pagination4"},i.createElement(r.Link,{to:"/"+u+(u?"/":"")+"page/"+o+"/"},"最後")),o>1?i.createElement(c,null,i.createElement("ul",null,n,t,i.createElement("li",{key:"pagination2"},"page ",d,"/",o),a,l)):i.createElement(i.Fragment,null)};const c=o.Ay.nav(a||(a=(0,l.A)(["\n  ul {\n    display: flex;\n    list-style: none;\n    justify-content: center;\n\n    li {\n      padding: 0 10px;\n\n      &.not-work span {\n        text-decoration: none;\n        background: var(--orange);\n        color: #fff;\n        opacity: 0.5;\n      }\n\n      span, a {\n        text-decoration: underline;\n        display: flex;\n        align-items: center;\n        font-weight: 700;\n        color: var(--orange);\n        border-radius: 5px;\n        border: 1px solid var(--orange);\n        padding: 0 10px;\n      }\n    }\n  }\n"])))},1877:function(e,n,t){t.d(n,{N:function(){return c},y:function(){return o}});var a,l,r=t(5276),i=t(4715);const o=i.Ay.header(a||(a=(0,r.A)(["\n  text-align: center;\n\n  h1, h2 {\n    &:after {\n      margin: 0 auto;\n      content: '';\n      display: block;\n      width: 98%;\n      height: 3px;\n      background: var(--orange);\n    }\n  }\n"]))),c=i.Ay.ol(l||(l=(0,r.A)(["\n  column-count: 1;\n  list-style: none;\n  padding: 0;\n  margin: 0 -15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: var(--maxWidth-full);\n\n  li {\n    padding: 5px;\n    margin: var(--spacing-1) ;\n    box-sizing: border-box;\n    border: 1px solid var(--black);\n    border-radius: 5px;\n\n    a {\n      color: var(--black);\n      text-decoration: none;\n    }\n\n    h2 {\n      font-size: var(--fontSize-2);\n    }\n  }\n  .thumbnail {\n    float: left;\n  }\n\n  @media screen and (min-width: 512px) {\n    column-count: 2;\n\n    li {\n      padding: 15px;\n      width: 48%;\n\n      h2 {\n        font-size: var(--fontSize-3);\n      }\n\n      a {\n        &:hover h2 {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  @media screen and (min-width: 768px) {\n    column-count: 3;\n\n    li {\n      width: 32%;\n    }\n  }\n"])))},5700:function(e,n,t){t.r(n),t.d(n,{Head:function(){return m}});var a=t(6540),l=t(4794),r=t(500),i=t(1911),o=t(1042),c=t(2532),d=t(1877),u=t(7449);n.default=e=>{let{pageContext:n,data:t,location:o}=e;const m=(0,r.u)(t.allMdx,t.allWpPost,t.allFile);return a.createElement(i.A,{location:o},a.createElement(d.y,null,a.createElement("h1",null,"記事一覧")),a.createElement(d.N,null,m.map((e=>a.createElement("li",{key:e.slug},a.createElement("article",{className:"post-list-item",itemType:"http://schema.org/Article"},a.createElement(l.Link,{to:e.slug},a.createElement("h2",null,a.createElement("span",null,e.title)),a.createElement("section",null,a.createElement("div",null,a.createElement("small",null,a.createElement("time",null,e.date))),a.createElement("div",{className:"thumbnail"},void 0===e.gatsbyImage||a.createElement(c.G,{alt:e.altText,image:e.gatsbyImage,className:"thumbnail"})),a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))))))),a.createElement(u.A,{maxPage:n.maxPage,current:n.current}))};const m=e=>{let{location:n}=e;return a.createElement(o.A,{title:"記事一覧",location:n})}},500:function(e,n,t){t.d(n,{d:function(){return r},u:function(){return l}});var a=t(2532);function l(e,n,t){let l={};t&&t.edges.forEach((e=>{l[e.node.relativePath]=e.node.childImageSharp.gatsbyImageData}));const r=e.nodes,i=n.nodes;return r.map((e=>({title:e.frontmatter.title,excerpt:e.excerpt,slug:e.fields.slug,date:e.frontmatter.date,description:e.frontmatter.description,altText:e.frontmatter.featuredImagePath,gatsbyImage:(0,a.c)(l[e.frontmatter.featuredImagePath||"featured/defaultThumbnail.png"]),category:e.frontmatter.category||"",tags:e.frontmatter.tags||[]}))).concat(i.map((e=>{var n,t,r,i,o;return{title:e.title,excerpt:e.excerpt,slug:"/"+e.slug,date:e.date,altText:(null===(n=e.featuredImage)||void 0===n?void 0:n.node.altText)||"",gatsbyImage:(null===(t=e.featuredImage)||void 0===t?void 0:t.node.gatsbyImage)||(0,a.c)(l["featured/defaultThumbnail.png"]),category:(null===(r=e.categories)||void 0===r||null===(i=r.nodes[0])||void 0===i?void 0:i.name)||"",tags:(null===(o=e.tags)||void 0===o?void 0:o.nodes.map((e=>e.name)))||[]}}))).sort(((e,n)=>new Date(n.date).getTime()-new Date(e.date).getTime()))}function r(e,n,t){var l,r;let i={};return t&&t.edges.forEach((e=>{i[e.node.relativePath]=e.node.childImageSharp.gatsbyImageData})),{title:(null==e?void 0:e.frontmatter.title)||(null==n?void 0:n.title),excerpt:(null==e?void 0:e.excerpt)||(null==n?void 0:n.excerpt),slug:(null==e?void 0:e.fields.slug)||"/"+(null==n?void 0:n.slug),date:(null==e?void 0:e.frontmatter.date)||(null==n?void 0:n.date),description:(null==e?void 0:e.frontmatter.description)||"",altText:(null==e?void 0:e.frontmatter.featuredImagePath)||(null==n||null===(l=n.featuredImage)||void 0===l?void 0:l.node.altText)||"",gatsbyImage:(0,a.c)(i[(null==e?void 0:e.frontmatter.featuredImagePath)||"featured/defaultThumbnail.webp"])||(null==n||null===(r=n.featuredImage)||void 0===r?void 0:r.node.gatsbyImage)||(0,a.c)(i["featured/defaultThumbnail.webp"])}}}}]);
//# sourceMappingURL=component---src-templates-page-list-tsx-63a6a28ffb2a5a4dd73d.js.map