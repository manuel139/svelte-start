import{S as te,i as se,s as le,e as E,k as I,t as L,N as ge,c as k,d as h,m as A,a as T,h as B,b,f as Y,I as a,g as R,O as be,P as Z,j as Q,H as Ee,E as ee,G as ce,v as ke,q as x,w as pe,x as me,y as de,o as K,B as he,n as ye,p as _e,Q as ve,R as X,T as Ce}from"../chunks/index-bf4467d3.js";import{d as Se}from"../chunks/transform-899ca3c0.js";import{b as Te}from"../chunks/paths-396f020f.js";class ze extends Map{constructor(e,l=De){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:l}}),e!=null)for(const[t,f]of e)this.set(t,f)}get(e){return super.get(re(this,e))}has(e){return super.has(re(this,e))}set(e,l){return super.set(we(this,e),l)}delete(e){return super.delete(Pe(this,e))}}function re({_intern:s,_key:e},l){const t=e(l);return s.has(t)?s.get(t):l}function we({_intern:s,_key:e},l){const t=e(l);return s.has(t)?s.get(t):(s.set(t,l),l)}function Pe({_intern:s,_key:e},l){const t=e(l);return s.has(t)&&(l=s.get(t),s.delete(t)),l}function De(s){return s!==null&&typeof s=="object"?s.valueOf():s}function Me(s){return s}function Ie(s,...e){return Le(s,Array.from,Me,e)}function Le(s,e,l,t){return function f(u,g){if(g>=t.length)return l(u);const y=new ze,_=t[g++];let n=-1;for(const m of u){const o=_(m,++n,u),r=y.get(o);r?r.push(m):y.set(o,[m])}for(const[m,o]of y)y.set(m,f(o,g));return e(y)}(s,0)}const Ae=async s=>{if("clipboard"in navigator)await navigator.clipboard.writeText(s);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=s,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},Be=(s,e)=>{async function l(){if(e)try{await Ae(e),s.dispatchEvent(new CustomEvent("svelte-copy",{detail:e}))}catch(t){s.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:t}))}}return s.addEventListener("click",l,!0),{update:t=>e=t,destroy:()=>s.removeEventListener("click",l,!0)}};function Ne(s){let e,l,t,f,u,g,y,_,n,m,o,r,p,z,w,q,D,N,U,P,F,M,j,J;return{c(){e=E("link"),l=I(),t=E("div"),f=E("h3"),u=L(s[0]),g=I(),y=E("p"),_=L(s[1]),n=I(),m=E("details"),o=E("summary"),r=L("CSS Snippet"),p=I(),z=E("code"),w=L(s[2]),q=I(),D=E("p"),N=E("button"),U=L("Copy CSS to Clipboard"),F=E("span"),M=L(s[3]),this.h()},l(S){const C=ge('[data-svelte="svelte-1uevrx3"]',document.head);e=k(C,"LINK",{rel:!0,href:!0}),C.forEach(h),l=A(S),t=k(S,"DIV",{style:!0,class:!0});var c=T(t);f=k(c,"H3",{class:!0});var W=T(f);u=B(W,s[0]),W.forEach(h),g=A(c),y=k(c,"P",{});var i=T(y);_=B(i,s[1]),i.forEach(h),n=A(c),m=k(c,"DETAILS",{class:!0});var d=T(m);o=k(d,"SUMMARY",{class:!0});var v=T(o);r=B(v,"CSS Snippet"),v.forEach(h),p=A(d),z=k(d,"CODE",{class:!0});var H=T(z);w=B(H,s[2]),H.forEach(h),d.forEach(h),q=A(c),D=k(c,"P",{});var V=T(D);N=k(V,"BUTTON",{class:!0});var O=T(N);U=B(O,"Copy CSS to Clipboard"),O.forEach(h),F=k(V,"SPAN",{class:!0});var G=T(F);M=B(G,s[3]),G.forEach(h),V.forEach(h),c.forEach(h),this.h()},h(){b(e,"rel","external stylesheet"),b(e,"href",s[5]),b(f,"class","svelte-19ry7n"),Y(y,"font-size",s[4],!1),b(o,"class","svelte-19ry7n"),b(z,"class","svelte-19ry7n"),b(m,"class","svelte-19ry7n"),b(N,"class","svelte-19ry7n"),b(F,"class","svelte-19ry7n"),Y(t,"font-family","'"+s[0]+"'"),b(t,"class","svelte-19ry7n")},m(S,C){a(document.head,e),R(S,l,C),R(S,t,C),a(t,f),a(f,u),a(t,g),a(t,y),a(y,_),a(t,n),a(t,m),a(m,o),a(o,r),a(m,p),a(m,z),a(z,w),a(t,q),a(t,D),a(D,N),a(N,U),a(D,F),a(F,M),j||(J=[be(P=Be.call(null,N,s[2])),Z(N,"svelte-copy",s[6])],j=!0)},p(S,[C]){C&1&&Q(u,S[0]),C&2&&Q(_,S[1]),C&16&&Y(y,"font-size",S[4],!1),C&4&&Q(w,S[2]),P&&Ee(P.update)&&C&4&&P.update.call(null,S[2]),C&8&&Q(M,S[3]),C&1&&Y(t,"font-family","'"+S[0]+"'")},i:ee,o:ee,d(S){h(e),S&&h(l),S&&h(t),j=!1,ce(J)}}}function Fe(s,e,l){let t,{id:f=""}=e,{family:u=""}=e,{size:g=16}=e,{text:y}=e,_="",n="";const m=`${Te}/assets/demo/fonts/${f}.css`,o=()=>{l(3,n="Copied!"),setTimeout(()=>{l(3,n="")},1e3)};return ke(async()=>{const r=await fetch(m);l(2,_=await r.text())}),s.$$set=r=>{"id"in r&&l(7,f=r.id),"family"in r&&l(0,u=r.family),"size"in r&&l(8,g=r.size),"text"in r&&l(1,y=r.text)},s.$$.update=()=>{s.$$.dirty&256&&l(4,t=`${g}px`)},[u,y,_,n,t,m,o,f,g]}class Oe extends te{constructor(e){super(),se(this,e,Fe,Ne,le,{id:7,family:0,size:8,text:1})}}var je=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function ae(s,e,l){const t=s.slice();return t[5]=e[l][0],t[6]=e[l][1],t}function ie(s,e,l){const t=s.slice();return t[9]=e[l].family,t[10]=e[l].id,t}function fe(s){let e,l;return e=new Oe({props:{id:s[10],family:s[9],size:s[0],text:s[1]}}),{c(){pe(e.$$.fragment)},l(t){me(e.$$.fragment,t)},m(t,f){de(e,t,f),l=!0},p(t,f){const u={};f&1&&(u.size=t[0]),f&2&&(u.text=t[1]),e.$set(u)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){K(e.$$.fragment,t),l=!1},d(t){he(e,t)}}}function ue(s){let e,l=s[5]+"",t,f,u,g,y,_=s[6],n=[];for(let o=0;o<_.length;o+=1)n[o]=fe(ie(s,_,o));const m=o=>K(n[o],1,1,()=>{n[o]=null});return{c(){e=E("h2"),t=L(l),f=I(),u=E("section");for(let o=0;o<n.length;o+=1)n[o].c();g=I(),this.h()},l(o){e=k(o,"H2",{});var r=T(e);t=B(r,l),r.forEach(h),f=A(o),u=k(o,"SECTION",{class:!0});var p=T(u);for(let z=0;z<n.length;z+=1)n[z].l(p);g=A(p),p.forEach(h),this.h()},h(){b(u,"class","svelte-4m0s58")},m(o,r){R(o,e,r),a(e,t),R(o,f,r),R(o,u,r);for(let p=0;p<n.length;p+=1)n[p].m(u,null);a(u,g),y=!0},p(o,r){if(r&7){_=o[6];let p;for(p=0;p<_.length;p+=1){const z=ie(o,_,p);n[p]?(n[p].p(z,r),x(n[p],1)):(n[p]=fe(z),n[p].c(),x(n[p],1),n[p].m(u,g))}for(ye(),p=_.length;p<n.length;p+=1)m(p);_e()}},i(o){if(!y){for(let r=0;r<_.length;r+=1)x(n[r]);y=!0}},o(o){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)K(n[r]);y=!1},d(o){o&&h(e),o&&h(f),o&&h(u),ve(n,o)}}}function He(s){let e,l,t,f,u,g,y,_,n,m,o,r,p,z,w,q,D,N,U,P,F,M,j,J,S,C=s[2],c=[];for(let i=0;i<C.length;i+=1)c[i]=ue(ae(s,C,i));const W=i=>K(c[i],1,1,()=>{c[i]=null});return{c(){e=E("div"),l=E("h1"),t=L("Hosted Fonts on The Pudding"),f=I(),u=E("p"),g=E("em"),y=L("Do not use fonts hosted by The Pudding without written permission."),_=I(),n=E("form"),m=E("label"),o=L("font-size: "),r=L(s[0]),p=L("px"),z=I(),w=E("input"),q=I(),D=E("label"),N=L("text sample"),U=I(),P=E("input"),F=I(),M=E("article");for(let i=0;i<c.length;i+=1)c[i].c();this.h()},l(i){e=k(i,"DIV",{id:!0,class:!0});var d=T(e);l=k(d,"H1",{});var v=T(l);t=B(v,"Hosted Fonts on The Pudding"),v.forEach(h),f=A(d),u=k(d,"P",{});var H=T(u);g=k(H,"EM",{});var V=T(g);y=B(V,"Do not use fonts hosted by The Pudding without written permission."),V.forEach(h),H.forEach(h),_=A(d),n=k(d,"FORM",{});var O=T(n);m=k(O,"LABEL",{for:!0,class:!0});var G=T(m);o=B(G,"font-size: "),r=B(G,s[0]),p=B(G,"px"),G.forEach(h),z=A(O),w=k(O,"INPUT",{id:!0,type:!0,min:!0,max:!0}),q=A(O),D=k(O,"LABEL",{for:!0,class:!0});var ne=T(D);N=B(ne,"text sample"),ne.forEach(h),U=A(O),P=k(O,"INPUT",{id:!0,type:!0,maxlength:!0}),O.forEach(h),d.forEach(h),F=A(i),M=k(i,"ARTICLE",{class:!0});var oe=T(M);for(let $=0;$<c.length;$+=1)c[$].l(oe);oe.forEach(h),this.h()},h(){b(m,"for","size"),b(m,"class","svelte-4m0s58"),b(w,"id","size"),b(w,"type","range"),b(w,"min","12"),b(w,"max","48"),b(D,"for","text"),b(D,"class","svelte-4m0s58"),b(P,"id","text"),b(P,"type","text"),b(P,"maxlength","100"),b(e,"id","info"),b(e,"class","svelte-4m0s58"),b(M,"class","svelte-4m0s58")},m(i,d){R(i,e,d),a(e,l),a(l,t),a(e,f),a(e,u),a(u,g),a(g,y),a(e,_),a(e,n),a(n,m),a(m,o),a(m,r),a(m,p),a(n,z),a(n,w),X(w,s[0]),a(n,q),a(n,D),a(D,N),a(n,U),a(n,P),X(P,s[1]),R(i,F,d),R(i,M,d);for(let v=0;v<c.length;v+=1)c[v].m(M,null);j=!0,J||(S=[Z(w,"change",s[3]),Z(w,"input",s[3]),Z(P,"input",s[4])],J=!0)},p(i,[d]){if((!j||d&1)&&Q(r,i[0]),d&1&&X(w,i[0]),d&2&&P.value!==i[1]&&X(P,i[1]),d&7){C=i[2];let v;for(v=0;v<C.length;v+=1){const H=ae(i,C,v);c[v]?(c[v].p(H,d),x(c[v],1)):(c[v]=ue(H),c[v].c(),x(c[v],1),c[v].m(M,null))}for(ye(),v=C.length;v<c.length;v+=1)W(v);_e()}},i(i){if(!j){for(let d=0;d<C.length;d+=1)x(c[d]);j=!0}},o(i){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)K(c[d]);j=!1},d(i){i&&h(e),i&&h(F),i&&h(M),ve(c,i),J=!1,ce(S)}}}function Re(s,e,l){let t=18,f="The quick brown fox jumps over the lazy dog.";const u=Ie(je,_=>_.type);u.sort((_,n)=>Se(_[1].length,n[1].length));function g(){t=Ce(this.value),l(0,t)}function y(){f=this.value,l(1,f)}return[t,f,u,g,y]}class xe extends te{constructor(e){super(),se(this,e,Re,He,le,{})}}function qe(s){let e,l;return e=new xe({}),{c(){pe(e.$$.fragment)},l(t){me(e.$$.fragment,t)},m(t,f){de(e,t,f),l=!0},p:ee,i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){K(e.$$.fragment,t),l=!1},d(t){he(e,t)}}}class Ve extends te{constructor(e){super(),se(this,e,null,qe,le,{})}}export{Ve as default};
