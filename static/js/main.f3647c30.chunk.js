(this["webpackJsonpboda-samu"]=this["webpackJsonpboda-samu"]||[]).push([[0],{30:function(A,e){A.exports={getTime:function(A){var e=new Date,c=(new Date(A)-e+1e3)/1e3;return{seconds:("0"+Math.floor(c%60)).slice(-2),minutes:("0"+Math.floor(c/60%60)).slice(-2),hours:("0"+Math.floor(c/3600%24)).slice(-2),days:Math.floor(c/86400),time:c}}}},35:function(A,e,c){},45:function(A,e,c){},46:function(A,e,c){},47:function(A,e,c){},49:function(A,e,c){},68:function(A,e,c){},69:function(A,e,c){},70:function(A,e,c){},71:function(A,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),t=c(27),l=c.n(t),r=c(7),O=c(2),d=c(6),a=(c(35),c.p+"static/media/logo_boda.1dfc0e0d.png"),i=c(0),j=function(){var A=Object(n.useState)(!1),e=Object(d.a)(A,2),c=e[0],s=e[1],t=Object(O.f)().pathname;return Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsxs)("div",{className:"max-width",children:[Object(i.jsx)("img",{src:a,alt:"Boda de Samuel y Dayan",className:"nav__logo"}),Object(i.jsxs)("div",{className:"nav__hamb",onClick:function(){return s(!0)},children:[Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]}),Object(i.jsxs)("ul",{className:c?"nav_menu active":"nav_menu",children:[Object(i.jsx)("div",{className:"close",onClick:function(){return s(!1)},children:"X"}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{onClick:function(){return s(!1)},to:"/",className:"/"===t?"link_active":"",children:"INICIO"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{onClick:function(){return s(!1)},to:"/nuestra-historia",className:"/nuestra-historia"===t?"link_active":"",children:"NUESTRA HISTORIA"})}),Object(i.jsx)("li",{children:Object(i.jsx)(r.b,{onClick:function(){return s(!1)},to:"/regalos",className:"/regalos"===t?"link_active":"",children:"REGALOS"})})]})]})})},g=(c(45),c.p+"static/media/logo-zoom.c1119a92.png"),b=c.p+"static/media/logo-fb-live.68bc8178.png",o=c.p+"static/media/logo-yt.8692bc7e.png",m=c(30),u=new Date,J=new Date(u);J.setSeconds(0),J.setMinutes(0),J.setHours(0),J.setDate(26),J.setMonth(10);var B=function(){var A=Object(n.useState)([]),e=Object(d.a)(A,2),c=e[0],s=e[1];return Object(n.useEffect)((function(){var A=setInterval((function(){s(Object(m.getTime)(J))}),1e3);return function(){return clearInterval(A)}}),[]),Object(i.jsx)("div",{className:"home bkg",children:Object(i.jsxs)("div",{className:"max-width",children:[Object(i.jsx)("div",{className:"logo_boda",children:Object(i.jsx)("img",{src:a,alt:"Boda de Samuel y Dayan"})}),Object(i.jsxs)("div",{className:"home_texto",children:[Object(i.jsx)("h1",{children:"Cuenta regresiva"}),Object(i.jsxs)("div",{className:"contador",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"D\xcdAS"}),Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:c.days})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"HORAS"}),Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:c.hours})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"MINUTOS"}),Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:c.minutes})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"SEGUNDOS"}),Object(i.jsx)("div",{className:"cont-last",children:Object(i.jsx)("h2",{children:c.seconds})})]})]}),Object(i.jsx)("h3",{className:"fecha_boda_t",children:"FECHA DE BODA"}),Object(i.jsx)("h1",{className:"f_boda",children:"26"}),Object(i.jsx)("h3",{children:"DE NOVIEMBRE"}),Object(i.jsx)("h4",{children:"2021"}),Object(i.jsxs)("div",{className:"logos",children:[Object(i.jsx)("img",{src:g,alt:"Enlace para el zoom"}),Object(i.jsx)("img",{src:b,alt:"Enlace para la trasnmisi\xf3n de facebook"}),Object(i.jsx)("img",{src:o,alt:"Enlace para la transmisi\xf3n de YouTube"})]})]})]})})},C=(c(46),c(47),function(){return Object(i.jsx)("div",{className:"historia bkg",children:Object(i.jsx)("div",{className:"max-width",children:Object(i.jsx)("iframe",{className:"video-yt",src:"https://www.youtube.com/embed/RNB_m6_3PLM?controls=0",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})})})}),v=(c(18),c(8),c(12),c(49),c.p+"static/media/flor-r.2e037614.png"),y=c.p+"static/media/flor-l.405bcee7.png",x=(c(17),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAAIcCAYAAAC9/nd8AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAHYgAAB2IBOHqZ2wAABHppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wOS0yOTwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4xZjg2ZGRiYy03ZTM3LTQ4NDItYTdkZS04ZTIyMDkzNzYwNjY8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+QmxvY2stMjwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRp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"),w=(c(68),c.p+"static/media/logo-g-map.21bbc613.png"),M=c.p+"static/media/logo-bbva.7bf7f9de.png",D=c.p+"static/media/logo-bcp.b19319c8.png",p=(c(69),function(){return Object(i.jsxs)("div",{className:"bkg regalos asistencia",children:[Object(i.jsx)("img",{src:y,alt:"",className:"fl"}),Object(i.jsx)("img",{src:v,alt:"",className:"fr"}),Object(i.jsxs)("div",{className:"max-width",children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("img",{src:x,alt:""}),Object(i.jsx)("h1",{children:"Regalos"})]}),Object(i.jsx)("p",{children:"Sus buenos deseos son suficientes para nosotros en el matrimonio y en caso de querer hacernos un presente este puede ser presencial o en efectivo."}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Direcci\xf3n del novio: "}),"Calle Manuel Gonzales 736 - Urb. El Retablo -Comas",Object(i.jsx)("a",{href:"https://goo.gl/maps/TsEZzLQp2ZCZfBtm7",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:w,alt:""})})]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Direcci\xf3n de novia: "}),"Jir\xf3n Jose Gaete 119 - Urb. Sta. Luzmila - Comas",Object(i.jsx)("a",{href:"https://goo.gl/maps/dAvFAaFdiu9JTq2z9",target:"_blank",rel:"noreferrer",children:Object(i.jsx)("img",{src:w,alt:""})})]}),Object(i.jsxs)("div",{className:"cuentas",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:M,alt:""}),Object(i.jsx)("span",{children:"0011-0814-0216796743"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:D,alt:""}),Object(i.jsx)("span",{children:"19135987013016"})]})]}),Object(i.jsx)("h3",{children:"A nombre de Victor Samuel Izquierdo Zuloaga"})]})]})}),f=(c(70),c.p,function(){return Object(n.useEffect)((function(){console.log("Cargo la p\xe1gina")}),[]),Object(i.jsxs)(r.a,{children:[Object(i.jsx)(j,{}),Object(i.jsxs)(O.c,{children:[Object(i.jsx)(O.a,{path:"/regalos",children:Object(i.jsx)(p,{})}),Object(i.jsx)(O.a,{path:"/nuestra-historia",children:Object(i.jsx)(C,{})}),Object(i.jsx)(O.a,{path:"/",children:Object(i.jsx)(B,{})})]})]})});l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f3647c30.chunk.js.map