"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[245],{7449:function(e,t,n){var a,l=n(5276),r=n(4794),i=n(6540),o=n(4715);t.A=e=>{let t,n,a,l,{maxPage:o,current:m,type:s=""}=e;return t=1===m?i.createElement("li",{className:"not-work",key:"pagination0"},i.createElement("span",null,"最新")):i.createElement("li",{key:"pagination0"},i.createElement(r.Link,{to:"/"+s+(s?"/":"")},"最新")),n=1===m?i.createElement("li",{className:"not-work",key:"pagination1"},i.createElement("span",null,"前へ")):2===m?i.createElement("li",{key:"pagination1"},i.createElement(r.Link,{to:"/"+s+(s?"/":"")},"前へ")):i.createElement("li",{key:"pagination1"},i.createElement(r.Link,{to:"/"+s+(s?"/":"")+"page/"+(m-1)+"/"},"前へ")),a=m===o?i.createElement("li",{className:"not-work",key:"pagination3"},i.createElement("span",null,"次へ")):i.createElement("li",{key:"pagination3"},i.createElement(r.Link,{to:"/"+s+(s?"/":"")+"page/"+(m+1)+"/"},"次へ")),l=m===o?i.createElement("li",{className:"not-work",key:"paginatio4"},i.createElement("span",null,"最後")):i.createElement("li",{key:"pagination4"},i.createElement(r.Link,{to:"/"+s+(s?"/":"")+"page/"+o+"/"},"最後")),o>1?i.createElement(c,null,i.createElement("ul",null,t,n,i.createElement("li",{key:"pagination2"},"page ",m,"/",o),a,l)):i.createElement(i.Fragment,null)};const c=o.Ay.nav(a||(a=(0,l.A)(["\n  ul {\n    display: flex;\n    list-style: none;\n    justify-content: center;\n\n    li {\n      padding: 0 10px;\n\n      &.not-work span {\n        text-decoration: none;\n        background: var(--orange);\n        color: #fff;\n        opacity: 0.5;\n      }\n\n      span, a {\n        text-decoration: underline;\n        display: flex;\n        align-items: center;\n        font-weight: 700;\n        color: var(--orange);\n        border-radius: 5px;\n        border: 1px solid var(--orange);\n        padding: 0 10px;\n      }\n    }\n  }\n"])))},1042:function(e,t,n){var a=n(4506),l=n(6540),r=n(2738);t.A=e=>{let{title:t,description:n,location:i,imagePath:o,post:c,children:m}=e;const{siteMetadata:s}=r.A,p="/"===i.pathname,d=n||s.description,g=p?s.title:t+" | "+s.title,u=s.siteUrl+i.pathname.replace(/\/page\/([0-9])+\//,""),E=""+s.siteUrl+(o||"/favicon.webp");let y=function(){const e=[{"@type":"Person",name:s.author.name,description:s.author.summary,url:s.siteUrl,sameAs:[s.social.twitter,s.social.github]}],n={"@type":"Organization",name:s.title,description:s.description,logo:{"@type":"ImageObject",url:s.siteUrl+"/favicon.webp",width:512,height:512}};let l=[{"@context":"http://schema.org","@type":p?"webSite":"webPage",inLanguage:"ja",url:u,name:t,author:e,publisher:n,image:E,description:d}];if(c){const t={"@context":"http://schema.org","@type":"BlogPosting",url:u,name:c.title,headline:c.title,image:{"@type":"ImageObject",url:E},description:c.excerpt,datePublished:new Date(c.date),dateModified:new Date(c.dateModified),mainEntityOfPage:{"@type":"WebPage","@id":u},author:e,publisher:n};l=[].concat((0,a.A)(l),[t])}return JSON.stringify(l)}();return l.createElement(l.Fragment,null,l.createElement("html",{lang:"ja"}),l.createElement("title",null,g),l.createElement("link",{rel:"canonical",href:u}),l.createElement("script",{type:"application/ld+json"},y),l.createElement("meta",{name:"description",content:d}),o&&l.createElement(l.Fragment,null,l.createElement("meta",{property:"og:image",content:E}),l.createElement("meta",{property:"og:url",content:E}),l.createElement("meta",{property:"twitter:image",content:E})),l.createElement("meta",{property:"og:title",content:g}),l.createElement("meta",{property:"og:description",content:d}),l.createElement("meta",{property:"og:type",content:p?"website":"webpage"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:s.social.twitter}),l.createElement("meta",{name:"twitter:title",content:g}),l.createElement("meta",{name:"twitter:description",content:d}),m)}},2783:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p}});var a=n(6540),l=n(4794),r=n(5776),i=n(1042),o=n(2532),c=n(500),m=n(1877),s=n(7449);t.default=e=>{let{data:t,location:n}=e;const i=(0,c.u5)(t.allMdx,t.allWpPost,t.allFile);if(0===i.length)return a.createElement(r.A,{location:n},a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'));const p=Math.ceil(i.length/12);return a.createElement(r.A,{location:n},a.createElement(m.N1,null,i.slice(0,12).map((e=>a.createElement("li",{key:e.slug},a.createElement("article",{className:"post-list-item",itemType:"https://schema.org/Article"},a.createElement(l.Link,{to:"/"+(0,c.Ed)(e.category)+"/"+e.slug,itemProp:"url"},a.createElement("h2",null,a.createElement("span",{itemProp:"headline"},e.title)),a.createElement("section",null,a.createElement("div",{style:{textAlign:"right"}},a.createElement("small",null,a.createElement("time",null,e.dateModified))),a.createElement("div",{className:"thumbnail"},void 0===e.gatsbyImage||a.createElement(o.G,{alt:e.altText,image:e.gatsbyImage})),a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt},itemProp:"description"})))))))),a.createElement(s.A,{maxPage:p,current:1}))};const p=e=>{let{location:t}=e;return a.createElement(i.A,{title:"",location:t})}},1877:function(e,t,n){n.d(t,{N1:function(){return m},yH:function(){return c}});var a,l,r,i=n(5276),o=n(4715);const c=o.Ay.header(a||(a=(0,i.A)(["\n  text-align: center;\n\n  h1, h2 {\n    &:after {\n      margin: 0 auto;\n      content: '';\n      display: block;\n      width: 98%;\n      height: 3px;\n      background: var(--orange);\n    }\n  }\n"]))),m=o.Ay.ol(l||(l=(0,i.A)(["\n  column-count: 1;\n  list-style: none;\n  padding: 0;\n  margin: 0 -15px;\n  display: flex;\n  flex-wrap: wrap;\n  width: var(--maxWidth-full);\n\n  li {\n    padding: 5px;\n    margin: var(--spacing-1) ;\n    box-sizing: border-box;\n    border: 1px solid var(--black);\n    border-radius: 5px;\n    background-color: #fff;\n\n    a {\n      color: var(--black);\n      text-decoration: none;\n    }\n\n    h2 {\n      font-size: var(--fontSize-2);\n    }\n  }\n  .thumbnail {\n    float: left;\n  }\n\n  @media screen and (min-width: calc(512px + 160px)) {\n    column-count: 2;\n\n    li {\n      padding: 15px;\n      width: 48%;\n\n      h2 {\n        font-size: var(--fontSize-3);\n      }\n\n      a {\n        &:hover h2 {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  @media screen and (min-width: calc(768px + 330px)) {\n    column-count: 3;\n\n    li {\n      width: 32%;\n    }\n  }\n"])));o.Ay.div(r||(r=(0,i.A)(["\n  background-color: #fff;\n"])))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-38b463ec9c1c67ca3bec.js.map