"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[453],{1042:function(e,t,n){var a=n(4506),r=n(6540),i=n(2738);t.A=e=>{let{title:t,description:n,location:o,imagePath:l,post:c,children:m}=e;const{siteMetadata:s}=i.A,p="/"===o.pathname,u=n||s.description,g=p?s.title:`${t} | ${s.title}`,d=s.siteUrl+o.pathname.replace(/\/page\/([0-9])+\//,""),h=`${s.siteUrl}${l||"/favicon.webp"}`;let E=function(){const e=[{"@type":"Person",name:s.author.name,description:s.author.summary,url:s.siteUrl,sameAs:[s.social.twitter,s.social.github]}],n={"@type":"Organization",name:s.title,description:s.description,logo:{"@type":"ImageObject",url:`${s.siteUrl}/favicon.webp`,width:512,height:512}};let r=[{"@context":"http://schema.org","@type":p?"webSite":"webPage",inLanguage:"ja",url:d,name:t,author:e,publisher:n,image:h,description:u}];if(c){const t={"@context":"http://schema.org","@type":"BlogPosting",url:d,name:c.title,headline:c.title,image:{"@type":"ImageObject",url:h},description:c.excerpt,datePublished:new Date(c.date),dateModified:new Date(c.dateModified),mainEntityOfPage:{"@type":"WebPage","@id":d},author:e,publisher:n};r=[].concat((0,a.A)(r),[t])}return JSON.stringify(r)}();return r.createElement(r.Fragment,null,r.createElement("html",{lang:"ja"}),r.createElement("title",null,g),r.createElement("link",{rel:"canonical",href:d}),r.createElement("script",{type:"application/ld+json"},E),r.createElement("meta",{name:"description",content:u}),l&&r.createElement(r.Fragment,null,r.createElement("meta",{property:"og:image",content:h}),r.createElement("meta",{property:"og:url",content:h}),r.createElement("meta",{property:"twitter:image",content:h})),r.createElement("meta",{property:"og:title",content:g}),r.createElement("meta",{property:"og:description",content:u}),r.createElement("meta",{property:"og:type",content:""+(p?"website":"webpage")}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:s.social.twitter}),r.createElement("meta",{name:"twitter:title",content:g}),r.createElement("meta",{name:"twitter:description",content:u}),m)}},731:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(6540),r=n(5776),i=n(1042);const o=e=>{let{location:t}=e;return a.createElement(i.A,{title:"404: Not Found",location:t})};t.default=e=>{let{location:t}=e;return a.createElement(r.A,{location:t},a.createElement("h1",null,"404: Not Found"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-a742d088c6b21252ce08.js.map