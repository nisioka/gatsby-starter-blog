"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[905],{1042:function(e,t,n){var a=n(4506),l=n(6540),r=n(2738);t.A=e=>{let{title:t,description:n,location:i,imagePath:c,post:o,children:m}=e;const{siteMetadata:p}=r.A,s="/"===i.pathname,d=n||p.description,u=s?p.title:t+" | "+p.title,g=p.siteUrl+i.pathname.replace(/\/page\/([0-9])+\//,""),h=""+p.siteUrl+(c||"/favicon.webp");let E=function(){const e=[{"@type":"Person",name:p.author.name,description:p.author.summary,url:p.siteUrl,sameAs:[p.social.twitter,p.social.github]}],n={"@type":"Organization",name:p.title,description:p.description,logo:{"@type":"ImageObject",url:p.siteUrl+"/favicon.webp",width:512,height:512}};let l=[{"@context":"http://schema.org","@type":s?"webSite":"webPage",inLanguage:"ja",url:g,name:t,author:e,publisher:n,image:h,description:d}];if(o){const t={"@context":"http://schema.org","@type":"BlogPosting",url:g,name:o.title,headline:o.title,image:{"@type":"ImageObject",url:h},description:o.excerpt,datePublished:new Date(o.date),dateModified:new Date(o.dateModified),mainEntityOfPage:{"@type":"WebPage","@id":g},author:e,publisher:n};l=[].concat((0,a.A)(l),[t])}return JSON.stringify(l)}();return l.createElement(l.Fragment,null,l.createElement("html",{lang:"ja"}),l.createElement("title",null,u),l.createElement("link",{rel:"canonical",href:g}),l.createElement("script",{type:"application/ld+json"},E),l.createElement("meta",{name:"description",content:d}),c&&l.createElement(l.Fragment,null,l.createElement("meta",{property:"og:image",content:h}),l.createElement("meta",{property:"og:url",content:h}),l.createElement("meta",{property:"twitter:image",content:h})),l.createElement("meta",{property:"og:title",content:u}),l.createElement("meta",{property:"og:description",content:d}),l.createElement("meta",{property:"og:type",content:s?"website":"webpage"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:p.social.twitter}),l.createElement("meta",{name:"twitter:title",content:u}),l.createElement("meta",{name:"twitter:description",content:d}),m)}},1877:function(e,t,n){n.d(t,{N1:function(){return m},yH:function(){return o}});var a,l,r,i=n(5276),c=n(4715);const o=c.Ay.header(a||(a=(0,i.A)(["\n  text-align: center;\n\n  h1, h2 {\n    &:after {\n      margin: 0 auto;\n      content: '';\n      display: block;\n      width: 98%;\n      height: 3px;\n      background: var(--orange);\n    }\n  }\n"]))),m=c.Ay.ol(l||(l=(0,i.A)(["\n  column-count: 1;\n  list-style: none;\n  padding: 0;\n  margin: 0 -15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: var(--maxWidth-full);\n\n  li {\n    padding: 5px;\n    margin: var(--spacing-1) ;\n    box-sizing: border-box;\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background-color: #fff;\n\n    a {\n      color: var(--black);\n      text-decoration: none;\n    }\n\n    h2 {\n      font-size: var(--fontSize-2);\n    }\n  }\n  .thumbnail {\n    float: left;\n  }\n\n  @media screen and (min-width: calc(512px + 160px)) {\n    column-count: 2;\n\n    li {\n      padding: 15px;\n      width: 48%;\n\n      h2 {\n        font-size: var(--fontSize-3);\n      }\n\n      a {\n        &:hover h2 {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  @media screen and (min-width: calc(768px + 330px)) {\n    column-count: 3;\n\n    li {\n      width: 32%;\n    }\n  }\n"])));c.Ay.div(r||(r=(0,i.A)(["\n  background-color: #fff;\n"])))},399:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p}});var a=n(6540),l=n(4794),r=n(500),i=n(5776),c=n(1042),o=n(2532),m=n(1877);t.default=e=>{let{pageContext:t,data:n,location:c}=e;const p=t.category,s=(0,r.u5)(n.allMdx,n.allWpPost,n.allFile),d="【"+p+"】カテゴリー 一覧";return 0===s.length?a.createElement(i.A,{location:c},a.createElement("p",null,"そのカテゴリーの記事はありません。")):a.createElement(i.A,{location:c},a.createElement(m.yH,null,a.createElement("h1",null,d),a.createElement("p",null,s.length," 記事あります")),a.createElement(m.N1,null,s.map((e=>a.createElement("li",{key:e.slug},a.createElement("article",{className:"post-list-item",itemType:"http://schema.org/Article"},a.createElement(l.Link,{to:"/"+(0,r.Ed)(p)+"/"+e.slug},a.createElement("h2",null,a.createElement("span",null,e.title)),a.createElement("section",null,a.createElement("div",null,a.createElement("small",null,a.createElement("time",null,e.dateModified))),a.createElement("div",{className:"thumbnail"},void 0===e.gatsbyImage||a.createElement(o.G,{alt:e.altText,image:e.gatsbyImage,className:"thumbnail"})),a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))))))))};const p=e=>{let{pageContext:t,location:n}=e;return a.createElement(c.A,{title:"【"+t.category+"】カテゴリー 一覧",description:"【"+t.category+"】カテゴリーの記事一覧です",location:n})}}}]);
//# sourceMappingURL=component---src-templates-category-list-tsx-4446294c05182d751c31.js.map