"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[757],{7815:function(e,t,l){l.r(t),l.d(t,{Head:function(){return f},default:function(){return p}});var n=l(8453),i=l(6540);function a(e){const t=Object.assign({p:"p",a:"a"},(0,n.R)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.p,null,"Wow! I love blogging so much already."),"\n",i.createElement(t.p,null,'Did you know that "despite its name, salted duck eggs can also be made from\r\nchicken eggs, though the taste and texture will be somewhat different, and the\r\negg yolk will be less rich."?\r\n(',i.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Salted_duck_egg"},"Wikipedia Link"),")"),"\n",i.createElement(t.p,null,"Yeah, I didn't either."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.R)(),e.components);return t?i.createElement(t,e,i.createElement(a,e)):a(e)},r=l(4794),d=l(4967),c=l(9087),u=l(7528);const s=e=>{var t,l;let{data:{site:n,mdx:a,mdPrevious:o,mdNext:u,wpPost:s,wpPrevious:f,wpNext:p},location:m,children:v}=e;const g={id:(null==a?void 0:a.id)||(null==s?void 0:s.id),title:(null==a?void 0:a.frontmatter.title)||(null==s?void 0:s.title),body:(null==a?void 0:a.body)||(null==s?void 0:s.content),excerpt:(null==a?void 0:a.excerpt)||(null==s?void 0:s.excerpt),slug:(null==a?void 0:a.fields.slug)||(null==s?void 0:s.slug),date:(null==a?void 0:a.frontmatter.date)||(null==s?void 0:s.date),description:null==a?void 0:a.frontmatter.description,altText:(null==s||null===(t=s.featuredImage)||void 0===t?void 0:t.node.altText)||"",gatsbyImage:(null==s||null===(l=s.featuredImage)||void 0===l?void 0:l.node.gatsbyImage)||null},b={id:(null==o?void 0:o.id)||(null==f?void 0:f.id),title:(null==o?void 0:o.frontmatter.title)||(null==f?void 0:f.title),slug:(null==o?void 0:o.fields.slug)||(null==f?void 0:f.slug)},h={id:(null==u?void 0:u.id)||(null==p?void 0:p.id),title:(null==u?void 0:u.frontmatter.title)||(null==p?void 0:p.title),slug:(null==u?void 0:u.fields.slug)||(null==p?void 0:p.slug)};return i.createElement(c.A,{location:m},i.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},i.createElement("header",null,i.createElement("h1",{itemProp:"headline"},g.title),i.createElement("p",null,g.date)),v||i.createElement("section",{dangerouslySetInnerHTML:{__html:g.body},itemProp:"articleBody"}),i.createElement("hr"),i.createElement("footer",null,i.createElement(d.A))),i.createElement("nav",{className:"blog-post-nav"},i.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.createElement("li",null,b&&i.createElement(r.Link,{to:b.slug,rel:"prev"},"← ",b.title)),i.createElement("li",null,h&&i.createElement(r.Link,{to:h.slug,rel:"next"},h.title," →")))))},f=e=>{let{data:{mdPost:t,wpPost:l}}=e;const n={id:(null==t?void 0:t.id)||(null==l?void 0:l.id),title:(null==t?void 0:t.frontmatter.title)||(null==l?void 0:l.title),slug:(null==t?void 0:t.fields.slug)||(null==l?void 0:l.slug)};return i.createElement(u.A,{title:n.title,description:n.excerpt})};function p(e){return i.createElement(s,e,i.createElement(o,e))}},4967:function(e,t,l){var n=l(6540),i=l(4794),a=l(2532);t.A=()=>{var e,t;const o=(0,i.useStaticQuery)("3257411868"),r=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,d=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"bio"},n.createElement(a.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(3034)}),(null==r?void 0:r.name)&&n.createElement("p",null,"Written by ",n.createElement("strong",null,r.name)," ",(null==r?void 0:r.summary)||null," ",n.createElement("a",{href:"https://twitter.com/"+((null==d?void 0:d.twitter)||"")},"You should follow them on Twitter")))}},8453:function(e,t,l){l.d(t,{R:function(){return o}});var n=l(6540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}},3034:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-content-blog-my-second-post-index-md-74e846a8f9780fe02fb2.js.map