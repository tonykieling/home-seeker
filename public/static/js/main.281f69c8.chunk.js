(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(29),s=c.n(r),i=(c(37),c(10)),o=c(2),l=(c(38),c.p+"static/media/logo192.74b45c28.png"),b=c(0),d=function(){return Object(b.jsxs)("div",{className:"main-header",children:[Object(b.jsxs)("div",{className:"header-1",children:[Object(b.jsx)("a",{href:"https://tkwebdev.ca",target:"_blank",rel:"noreferrer",className:"logo",children:Object(b.jsx)("img",{src:l,alt:"temps",title:"Homes",width:"100%"})}),Object(b.jsx)(i.b,{className:"item",to:"aptosList",children:"Check Apartments"})]}),Object(b.jsx)("div",{className:"header-2",children:Object(b.jsx)(i.b,{className:"item",to:"about",children:"About"})})]})},j=c(20),h=c.n(j),u=c(32),p=c(16),O=c(9),m=(c(49),[{postId:"7388747820",url:"https://vancouver.craigslist.org/bnc/apa/d/burnaby-bedroom-on-26th-floor-in/7388747820.html",description:"1 Bedroom on 26th floor in Station Square",price:"$1,780",active:!0,location:"Joyce",reactived:!0},{postId:"7388747820",url:"https://vancouver.craigslist.org/bnc/apa/d/burnaby-bedroom-on-26th-floor-in/7388747820.html",description:"1 Bedroom on 26th floor in Station Square",price:"$1,780",active:!0,location:"Joyce",reactived:!0},{postId:"7388747820",url:"https://vancouver.craigslist.org/bnc/apa/d/burnaby-bedroom-on-26th-floor-in/7388747820.html",description:"1 Bedroom on 26th floor in Station Square",price:"$1,780",active:!0,location:"Joyce",reactived:!0},{postId:"7380919502",url:"https://vancouver.craigslist.org/bnc/apa/d/burnaby-spacious-1br-with-balcony-in/7380919502.html",description:"Spacious 1br with Balcony in Metrotown area",price:"$1,765",active:!0,location:"Patterson"},{postId:"7380919325",url:"https://vancouver.craigslist.org/bnc/apa/d/burnaby-spacious-studio-with-great-views/7380919325.html",description:"Spacious - STUDIO - WITH GREAT VIEWS",price:"$1,650",active:!1,location:"Joyce"}]),x=Object(b.jsx)("thead",{id:"color-head",children:Object(b.jsxs)("tr",{className:"tr-first",children:[Object(b.jsx)("th",{className:"table-index",children:" # "}),Object(b.jsx)("th",{style:{},className:"name-head",children:" Description "}),Object(b.jsx)("th",{style:{},className:"others-head",children:" $ Now "}),Object(b.jsx)("th",{style:{},className:"others-head",children:" $ Old "}),Object(b.jsx)("th",{style:{},children:" Location "}),Object(b.jsx)("th",{rowSpan:"1",children:" Reactived"})]},"head")});var v=function(){var e=Object(a.useState)(null),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),s=Object(O.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(null),d=Object(O.a)(l,2),j=d[0],v=d[1],f=Object(a.useState)(null),g=Object(O.a)(f,2),y=g[0],N=g[1],S=Object(a.useState)(null),w=Object(O.a)(S,2),k=w[0],I=w[1],B=Object(a.useState)(null),T=Object(O.a)(B,2),A=T[0],E=T[1],$=function(e,t){var c=e.map((function(e,t){var c=e.description,a=e.location,n=e.price,r=e.oldPrice,s=e.url,i=e.active,o=e.reactived;return Object(b.jsxs)("tr",{className:i?"tr-table tr-hover":"tr-table",onClick:function(){return i&&window.open(s,"_blank")},children:[Object(b.jsx)("td",{className:"table-index",children:t+1}),Object(b.jsx)("td",{children:c}),Object(b.jsx)("td",{className:"table-price",children:n}),Object(b.jsx)("td",{className:"table-price",children:r}),Object(b.jsx)("td",{className:"table-location",children:a}),Object(b.jsx)("td",{className:"table-reactivated",children:o})]},t)}));"av"===t&&N(c),"rbo"===t&&I(c),"rba"===t&&E(c)};Object(a.useEffect)((function(){(function(){var e=Object(u.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){setTimeout((function(){e({data:{apartments:[].concat(m)}})}),2300)}));case 3:if(!(t=e.sent).data.apartments){e.next=8;break}c=t.data.apartments,n(Object(p.a)(c.filter((function(e){return e.active})))),o(Object(p.a)(c.filter((function(e){return!e.active&&!e.removedByAdmin})))),v(Object(p.a)(c.filter((function(e){return e.removedByAdmin})))),e.next=9;break;case 8:throw new Error;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("### error post",e.t0.message);case 14:case"end":return e.stop()}var c}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){return c&&$(c,"av"),i&&$(i,"rbo"),j&&$(j,"rba"),function(){}}),[c,i,j]);var C=Object(b.jsx)("tr",{children:Object(b.jsx)("td",{className:"processing",colSpan:"6",children:"...Processing"})}),J=Object(b.jsx)("tr",{children:Object(b.jsx)("td",{className:"tr-empty",colSpan:"6",children:"Empty for now. ;)"})});return Object(b.jsxs)("div",{className:"app-body",children:[Object(b.jsx)("h1",{children:"List of apartments"}),Object(b.jsx)("h2",{className:"table-section-title av",children:"Current available"}),Object(b.jsxs)("table",{children:[x,Object(b.jsx)("tbody",{children:y?y.length?y:J:C})]}),Object(b.jsx)("h2",{className:"table-section-title rbo",children:"Removed by Owners"}),Object(b.jsxs)("table",{children:[x,Object(b.jsx)("tbody",{children:k?k.length?k:J:C})]}),Object(b.jsx)("h2",{className:"table-section-title rba",children:"Removed by Admins"}),Object(b.jsxs)("table",{children:[x,Object(b.jsx)("tbody",{children:A?A.length?A:J:C})]}),Object(b.jsx)("p",{style:{paddingBottom:"5rem"}})]})};function f(){return Object(b.jsxs)("div",{className:"signature",children:["Tony Kieling",Object(b.jsx)("span",{children:"\xa0\u2122\ufe0f \xa0\u2013\xa0  2021"})]})}var g=function(){return Object(b.jsx)("div",{className:"app-body",children:Object(b.jsx)("h2",{children:"This is About page"})})};var y=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/aptosList",children:Object(b.jsx)(v,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/about",children:Object(b.jsx)(g,{})})]}),Object(b.jsx)(f,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),N()}},[[68,1,2]]]);
//# sourceMappingURL=main.281f69c8.chunk.js.map