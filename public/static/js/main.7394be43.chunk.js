(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(31),s=c.n(r),i=(c(39),c(12)),o=c(2),l=(c(40),c.p+"static/media/logo192.74b45c28.png"),b=c(0),j=function(){return Object(b.jsxs)("div",{className:"main-header",children:[Object(b.jsxs)("div",{className:"header-1",children:[Object(b.jsx)("a",{href:"https://tkwebdev.ca",target:"_blank",rel:"noreferrer",className:"logo",children:Object(b.jsx)("img",{src:l,alt:"temps",title:"Homes",width:"100%"})}),Object(b.jsx)(i.b,{className:"item",to:"aptosList",children:"Check Apartments"})]}),Object(b.jsx)("div",{className:"header-2",children:Object(b.jsx)(i.b,{className:"item",to:"about",children:"About"})})]})},d=c(14),u=c.n(d),h=c(21),m=c(10),O=c(8),p=c(34),x=c(22),f=c.n(x),v=function(e){return Object(b.jsx)("thead",{id:"color-head",children:Object(b.jsxs)("tr",{className:"tr-first",children:[Object(b.jsx)("th",{className:"table-index",children:" # "}),Object(b.jsx)("th",{className:"table-description",children:" Description "}),Object(b.jsx)("th",{className:"table-price",children:" $ Now "}),Object(b.jsx)("th",{className:"table-price",children:" $ Old "}),Object(b.jsx)("th",{className:"table-location",children:" Location "}),Object(b.jsx)("th",{className:"table-reactivated",children:" Reactived"}),e&&Object(b.jsx)("th",{className:"table-remove",children:" "})]},"head")})};var g=function(){var e=Object(a.useState)(null),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),s=Object(O.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(null),j=Object(O.a)(l,2),d=j[0],x=j[1],g=Object(a.useState)(null),N=Object(O.a)(g,2),w=N[0],y=N[1],k=Object(a.useState)(null),S=Object(O.a)(k,2),P=S[0],A=S[1],C=Object(a.useState)(null),E=Object(O.a)(C,2),L=E[0],T=E[1],_=Object(a.useState)(!0),B=Object(O.a)(_,2),F=B[0],R=B[1],I=function(e,t){var c=e.map((function(e,t){console.log("current",e);var c=e.description,a=e.location,n=e.price,r=e.oldPrice,s=e.url,i=e.active,o=e.reactived,l=e.reasonRemovedFromAdmin;return Object(b.jsxs)("tr",{className:i?"tr-table tr-hover":"tr-table",onClick:function(){return i?window.open(s,"_blank"):l&&window.alert("\nAdmin's Reason for removing is:\n\n".concat(l))},children:[Object(b.jsx)("td",{className:"table-index",children:t+1}),Object(b.jsx)("td",{children:c}),Object(b.jsx)("td",{className:"table-price",children:n}),Object(b.jsx)("td",{className:"table-price",children:r}),Object(b.jsx)("td",{className:"table-location",children:a}),Object(b.jsx)("td",{className:"table-reactivated",children:o&&Object(b.jsx)("b",{children:" \u2713 "})}),i&&Object(b.jsx)("td",{className:"table-remove",onClick:function(t){return $(t,e)},children:Object(b.jsx)(p.a,{color:"red",className:"table-trash"})})]},t)}));"av"===t&&y(c),"rbo"===t&&A(c),"rba"===t&&T(c)};Object(a.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,f.a.get("/api",{headers:{"Content-Type":"application/json"}});case 4:if(!(t=e.sent).data.apartments){e.next=9;break}c=t.data.apartments,n(Object(m.a)(c.filter((function(e){return e.active})))),o(Object(m.a)(c.filter((function(e){return!e.active&&!e.removedByAdmin})))),x(Object(m.a)(c.filter((function(e){return e.removedByAdmin})))),e.next=10;break;case 9:throw new Error;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("### error post",e.t0.message);case 15:return e.prev=15,R(!1),e.finish(15);case 18:case"end":return e.stop()}var c}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){return console.log("changingggggggggggggggg",c,d),c&&I(c,"av"),i&&I(i,"rbo"),d&&I(d,"rba"),function(){}}),[c,i,d]);var D=Object(b.jsx)("tr",{children:Object(b.jsx)("td",{className:"processing",colSpan:"6",children:"...Processing"})}),J=Object(b.jsx)("tr",{children:Object(b.jsx)("td",{className:"tr-empty",colSpan:"6",children:"Empty for now. ;)"})}),$=function(){var e=Object(h.a)(u.a.mark((function e(t,a){var r,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),r=window.prompt("\nPlease confirm remove action with password"),console.log("confirmDeletion",r,"item:",a),r){e.next=5;break}return e.abrupt("return");case 5:for(s="";!s;)s=window.prompt("\n Short reason, please ;)");return"/api",e.prev=8,R(!0),e.next=12,f.a.patch("/api",{removePass:r,reason:s,_id:a._id});case 12:if((i=e.sent).data.message){e.next=16;break}throw console.log("---error",i.data.error),i.data.error;case 16:n(Object(m.a)(c.filter((function(e){return a._id!==e._id})))),o={postId:a.postId,url:a.url,price:a.price,oldPrice:a.oldPrice,active:!1,description:a.description,location:a.location,reason:s},x([].concat(Object(m.a)(d),[o])),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(8),console.log("errorrrr",e.t0),window.alert("\nError: ".concat(e.t0,"\n\nTry again ;)"));case 25:return e.prev=25,R(!1),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[8,21,25,28]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"app-body",children:[Object(b.jsx)("h1",{children:"List of apartments"}),Object(b.jsx)("h2",{className:"table-section-title av",children:"Current available"}),Object(b.jsxs)("table",{className:F?"table-no-mouse-cursor":"",children:[v(!0),Object(b.jsx)("tbody",{className:F?"table-no-mouse-events":"",children:w?w.length?w:J:D})]}),Object(b.jsx)("h2",{className:"table-section-title rbo",children:"Removed by Owners"}),Object(b.jsxs)("table",{className:F?"table-no-mouse-cursor":"",children:[v(),Object(b.jsx)("tbody",{className:F?"table-no-mouse-events":"",children:P?P.length?P:J:D})]}),Object(b.jsx)("h2",{className:"table-section-title rba",children:"Removed by Admins"}),Object(b.jsxs)("table",{className:F?"table-no-mouse-cursor":"",children:[v(),Object(b.jsx)("tbody",{className:F?"table-no-mouse-events":"",children:L?L.length?L:J:D})]}),Object(b.jsx)("p",{style:{paddingBottom:"5rem"}})]})};function N(){return Object(b.jsxs)("div",{className:"signature",children:["Tony Kieling",Object(b.jsx)("span",{children:"\xa0\u2122\ufe0f \xa0\u2013\xa0  2021"})]})}var w=function(){return Object(b.jsx)("div",{className:"app-body",children:Object(b.jsx)("h2",{children:"This is About page"})})};var y=function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(j,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/aptosList",children:Object(b.jsx)(g,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/about",children:Object(b.jsx)(w,{})})]}),Object(b.jsx)(N,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),k()}},[[69,1,2]]]);
//# sourceMappingURL=main.7394be43.chunk.js.map