(this.webpackJsonpfinished=this.webpackJsonpfinished||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),u=n.n(c),l=n(1);n(9);function o(){var e=Object(a.useState)(25),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(0),o=Object(l.a)(u,2),s=o[0],i=o[1],b=Object(a.useState)(k()),m=Object(l.a)(b,2),p=m[0],d=m[1],f=Object(a.useState)(!1),E=Object(l.a)(f,2),v=E[0],j=E[1],O=Object(a.useState)("#Lets Crack It"),S=Object(l.a)(O,2),g=S[0],C=S[1],I=Object(a.useRef)(null);function h(e){return e.toString().padStart(2,"0")}function k(){return 60*n+s}var N=Math.floor(p/60),x=Math.floor(p-60*N);return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"task"},r.a.createElement("input",{value:g,onChange:function(e){C(e.currentTarget.value)}})),r.a.createElement("div",{className:"timer"},r.a.createElement("span",{contentEditable:!v,suppressContentEditableWarning:!0,onInput:function(e){c(e.currentTarget.textContent)}},h(N)),r.a.createElement("span",null,":"),r.a.createElement("span",{contentEditable:!v,suppressContentEditableWarning:!0,onInput:function(e){i(e.currentTarget.textContent)}},h(x))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){null==I.current&&(j(!0),d(k()),I.current=setInterval((function(){d((function(e){return e>=1?e-1:(localStorage.setItem("task",g),j(!1),clearInterval(I.current),d(k()),0)}))}),1e3))},disabled:v},"Start"),r.a.createElement("button",{onClick:function(){j(!1),clearInterval(I.current),I.current=null},disabled:!v},"Stop"),r.a.createElement("button",{onClick:function(){j(!1),clearInterval(I.current),d(k()),I.current=null}},"Reset")))}u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o,null)),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.f724caf9.chunk.js.map