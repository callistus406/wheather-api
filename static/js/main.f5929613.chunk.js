(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(7),c=a.n(n),r=(a(86),a(19)),d=a(28),l=a(25),j=(a(87),a(54),a(88),a(49)),o=a.n(j),h=a.p+"static/media/pexels-pixabay-36717.bed9849f.jpg",b=a(65),x=a.n(b),p=a(4),O=a(139),m=a(23),g=a(151),u=a(144),v=a(145),f=a(143),w=a(148),N=a(46),y=a(147),S=a(146),M=a(42),k=a.n(M),q=a(43),D=a.n(q),C=a(44),I=a.n(C),B=a(149),R=a(150),_=a(141),F=a(64),A=a.n(F),G=a(1),H=240,J=Object(O.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},extendedIcon:{marginRight:e.spacing(1)}}}));function P(){var e=J();return Object(G.jsx)("div",{className:e.root,children:Object(G.jsx)(_.a,{"aria-label":"add",size:"small",style:{background:"#26283A",color:"white"},children:Object(G.jsx)(A.a,{})})})}var T=Object(O.a)({root:{background:"#2b2d42"}}),W=Object(O.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(H,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:H},title:{flexGrow:1},hide:{display:"none"},drawer:{width:H,flexShrink:0},drawerPaper:{width:H},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0}}})),E="Nigeria";var L=function(){function e(e){var t=function(e){E=e.target.textContent,console.log(E),o()({method:"get",url:"https://api.openweathermap.org/data/2.5/forecast?q=".concat(E,"&appid=4d47712ce868cdb474c3fc53d9e2183e")}).then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))},a=W(),s=Object(m.a)(),c=T(),l=Object(i.useState)(!1),j=Object(d.a)(l,2),h=j[0],b=j[1];return Object(G.jsxs)("div",{className:a.root,children:[Object(G.jsx)(f.a,{}),Object(G.jsx)(u.a,{position:"fixed",className:Object(p.a)(a.appBar,c.root,Object(r.a)({},a.appBarShift,h)),children:Object(G.jsxs)(v.a,{children:[Object(G.jsx)(N.a,{variant:"h6",noWrap:!0,className:a.title,children:"Weather App"}),Object(G.jsx)(N.a,{variant:"h6",noWrap:!0,className:a.title,children:e.date}),Object(G.jsx)(S.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){b(!0)},className:Object(p.a)(h&&a.hide),children:Object(G.jsx)(k.a,{})})]})}),Object(G.jsx)("main",{className:Object(p.a)(a.content,Object(r.a)({},a.contentShift,h)),children:Object(G.jsx)("div",{className:a.drawerHeader})}),Object(G.jsxs)(g.a,{className:a.drawer,variant:"persistent",anchor:"right",open:h,classes:{paper:a.drawerPaper},children:[Object(G.jsx)("div",{className:a.drawerHeader,children:Object(G.jsx)(S.a,{onClick:function(){b(!1)},children:"rtl"===s.direction?Object(G.jsx)(D.a,{}):Object(G.jsx)(I.a,{})})}),Object(G.jsx)(y.a,{}),Object(G.jsx)(w.a,{children:["Nigeria","Ghana","Rwanda","Egypt"].map((function(e,a){return Object(G.jsx)(B.a,{button:!0,onClick:t,children:Object(G.jsx)(R.a,{primary:e})},e)}))}),Object(G.jsx)(y.a,{}),Object(G.jsx)(w.a,{children:["London","Spain","Italy"].map((function(e,a){return Object(G.jsx)(B.a,{button:!0,onClick:t,children:Object(G.jsx)(R.a,{primary:e})},e)}))})]})]})}var t=Object(i.useState)([]),a=Object(d.a)(t,2),s=a[0],n=a[1];Object(i.useEffect)((function(){o()({method:"get",url:"https://api.openweathermap.org/data/2.5/forecast?q=".concat(E,"&appid=4d47712ce868cdb474c3fc53d9e2183e")}).then((function(e){n(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday","Friday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function j(e){var t=new Date(e);return c[t.getDay()]}var b=new Date;function O(){return Object(G.jsxs)("div",{className:"card-container",children:[Object(G.jsxs)("div",{className:"card-header",children:[Object(G.jsx)("img",{src:h,alt:"paris",className:"paris"}),Object(G.jsxs)("div",{className:"inner-container",children:[Object(G.jsxs)("div",{className:"temperature",children:[Object(G.jsxs)("div",{className:"temp-text",children:[Object(G.jsx)("h1",{children:Math.floor(s.list[0].main.temp-273.15)}),Object(G.jsx)("span",{children:Object(G.jsx)("sup",{children:"o"})})]}),Object(G.jsx)("p",{children:s.list[0].weather[0].description})]}),Object(G.jsxs)("div",{className:"country-name",children:[Object(G.jsx)("h2",{children:s.city.name}),Object(G.jsx)("div",{className:"underline"})]})]}),Object(G.jsxs)("div",{className:"humidity-wind",children:[Object(G.jsxs)("div",{className:"humidity",children:[Object(G.jsx)("h6",{children:"HUMIDITY"}),Object(G.jsxs)("p",{children:[s.list[0].main.humidity,"%"]})]}),Object(G.jsx)("div",{className:"separator"}),Object(G.jsxs)("div",{className:"wind",children:[Object(G.jsx)("h6",{children:"WIND"}),Object(G.jsxs)("p",{children:[s.list[0].wind.speed," K/M"]})]})]})]}),Object(G.jsxs)("div",{className:"card-footer",children:[Object(G.jsxs)("div",{className:"quotes",children:[Object(G.jsxs)("div",{className:"daily-quotes",children:[Object(G.jsx)("div",{className:"daily-quotes-logo",children:Object(G.jsx)(x.a,{})}),Object(G.jsx)("h3",{children:"Daily Quotes"})]}),Object(G.jsxs)("div",{className:"quote-text-container",children:[Object(G.jsxs)("div",{className:"quote-text",children:[Object(G.jsx)("div",{className:"quote-icon"}),Object(G.jsx)("p",{children:"Die with memories, not dreams."})]}),Object(G.jsxs)("div",{className:"quote-text",children:[Object(G.jsx)("div",{className:"quote-icon"}),Object(G.jsx)("p",{children:"Every moment is a fresh beginning."})]}),Object(G.jsx)("div",{className:"next-btn",children:Object(G.jsx)(P,{})})]})]}),Object(G.jsx)("div",{className:"quotes-separator"}),Object(G.jsxs)("div",{className:"weather-content",children:[Object(G.jsxs)("div",{className:"box",children:[Object(G.jsx)("h3",{children:j(s.list[3].dt_txt.slice(0,10))}),Object(G.jsx)("div",{className:"days",children:Object(G.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(s.list[3].weather[0].icon,".png"),alt:"icon"})}),Object(G.jsxs)("div",{className:"tmp",children:[Object(G.jsx)("h4",{children:Math.floor(s.list[3].main.temp-273.15)}),Object(G.jsx)("span",{children:Object(G.jsx)("sup",{children:"o"})})]}),Object(G.jsx)("div",{className:"para",children:Object(G.jsx)("p",{children:s.list[3].weather[0].description})})]}),Object(G.jsxs)("div",{className:"box",children:[Object(G.jsx)("h3",{children:j(s.list[11].dt_txt.slice(0,10))}),Object(G.jsx)("div",{className:"days",children:Object(G.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(s.list[11].weather[0].icon,".png"),alt:"icon"})}),Object(G.jsxs)("div",{className:"tmp",children:[Object(G.jsx)("h4",{children:Math.floor(s.list[11].main.temp-273.15)}),Object(G.jsx)("span",{children:Object(G.jsx)("sup",{children:"o"})})]}),Object(G.jsx)("div",{className:"para",children:Object(G.jsx)("p",{children:s.list[11].weather[0].description})})]}),Object(G.jsxs)("div",{className:"box",children:[Object(G.jsx)("h3",{children:j(s.list[19].dt_txt.slice(0,10))}),Object(G.jsx)("div",{className:"days",children:Object(G.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(s.list[19].weather[0].icon,".png"),alt:"icon"})}),Object(G.jsxs)("div",{className:"tmp",children:[Object(G.jsx)("h4",{children:Math.floor(s.list[19].main.temp-273.15)}),Object(G.jsx)("span",{children:Object(G.jsx)("sup",{children:"o"})})]}),Object(G.jsx)("div",{className:"para",children:Object(G.jsx)("p",{children:s.list[19].weather[0].description})})]}),Object(G.jsxs)("div",{className:"box",children:[Object(G.jsx)("h3",{children:j(s.list[27].dt_txt.slice(0,10))}),Object(G.jsx)("div",{className:"days",children:Object(G.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(s.list[27].weather[0].icon,".png"),alt:"icon"})}),Object(G.jsxs)("div",{className:"tmp",children:[Object(G.jsx)("h4",{children:Math.floor(s.list[27].main.temp-273.15)}),Object(G.jsx)("span",{children:Object(G.jsx)("sup",{children:"o"})})]}),Object(G.jsx)("div",{className:"para",children:Object(G.jsx)("p",{children:s.list[27].weather[0].description})})]}),Object(G.jsxs)("div",{className:"box",children:[Object(G.jsx)("h3",{children:j(s.list[35].dt_txt.slice(0,10))}),Object(G.jsx)("div",{className:"days",children:Object(G.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(s.list[35].weather[0].icon,".png"),alt:"icon"})}),Object(G.jsxs)("div",{className:"tmp",children:[Object(G.jsx)("h4",{children:Math.floor(s.list[35].main.temp-273.15)}),Object(G.jsx)("span",{children:Object(G.jsx)("sup",{children:"o"})})]}),Object(G.jsx)("div",{className:"para",children:Object(G.jsx)("p",{children:s.list[35].weather[0].description})})]})]})]})]})}var M=Object(i.useState)("close"),q=Object(d.a)(M,2);return q[0],q[1],0===s.length?Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{class:"fifth",children:"Loading..."}),Object(G.jsx)("div",{id:"pulse-wrapper",children:Object(G.jsxs)("div",{id:"pulse",children:[Object(G.jsx)("span",{}),Object(G.jsx)("span",{})]})})]}):Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)("div",{className:"p-container",children:[Object(G.jsx)(e,{date:"".concat(j(s.list[0].dt_txt.slice(0,10))," - ").concat(b.getDate(),"  - ").concat(function(e){var t=new Date(e);return l[t.getMonth()]}(s.list[0].dt_txt.slice(0,10)))}),Object(G.jsx)(O,{})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,152)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),i(e),s(e),n(e),c(e)}))},K=240;Object(O.a)({root:{background:"#2b2d42"}}),Object(O.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(K,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:K},title:{flexGrow:1},hide:{display:"none"},drawer:{width:K,flexShrink:0},drawerPaper:{width:K},drawerHeader:Object(l.a)(Object(l.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0}}}));c.a.render(Object(G.jsx)(s.a.StrictMode,{children:Object(G.jsx)(L,{})}),document.getElementById("root")),z()},54:function(e,t,a){},86:function(e,t,a){},88:function(e,t){console.log("light rain")}},[[114,1,2]]]);
//# sourceMappingURL=main.f5929613.chunk.js.map