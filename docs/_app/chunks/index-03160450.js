function j(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function W(t){return t()}function z(){return Object.create(null)}function p(t){t.forEach(W)}function K(t){return typeof t=="function"}function ft(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function dt(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function Q(t){return Object.keys(t).length===0}function R(t,...n){if(t==null)return j;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function _t(t,n,e){t.$$.on_destroy.push(R(n,e))}function ht(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,u){if(r){const c=B(n,e,i,u);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function gt(t){return t==null?"":t}function bt(t,n,e){return t.set(e),n}let v=!1;function U(){v=!0}function V(){v=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&o.push(f)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const l=n[o].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:X(1,r,y=>n[e[y]].claim_order,l))-1;i[o]=e[f]+1;const a=f+1;e[a]=o,r=Math.max(a,r)}const u=[],c=[];let s=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(u.push(n[o-1]);s>=o;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(c[o],f)}}function Z(t,n){t.appendChild(n)}function tt(t,n){if(v){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function xt(t,n,e){v&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function I(t){t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function O(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function $t(){return C(" ")}function vt(){return C("")}function L(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function kt(t){return t===""?null:+t}function et(t){return Array.from(t.childNodes)}function it(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){it(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const o=e(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function D(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function At(t,n,e){return D(t,n,e,O)}function St(t,n,e){return D(t,n,e,nt)}function rt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function Nt(t){return rt(t," ")}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ct(t,n){t.value=n==null?"":n}function qt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function zt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}let b;function ot(){if(b===void 0){b=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{b=!0}}return b}function Lt(t,n){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=O("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ot();let u;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",u=L(window,"message",c=>{c.source===i.contentWindow&&n()})):(i.src="about:blank",i.onload=()=>{u=L(i.contentWindow,"resize",n)}),Z(t,i),()=>{(r||u&&i.contentWindow)&&u(),I(i)}}function Tt(t,n,e){t.classList[e?"add":"remove"](n)}function Wt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function Bt(t){E().$$.on_mount.push(t)}function It(t){E().$$.after_update.push(t)}function Ot(t,n){E().$$.context.set(t,n)}function Pt(t){return E().$$.context.get(t)}const _=[],T=[],w=[],A=[],F=Promise.resolve();let S=!1;function H(){S||(S=!0,F.then(G))}function Dt(){return H(),F}function N(t){w.push(t)}function Ft(t){A.push(t)}const k=new Set;let x=0;function G(){const t=m;do{for(;x<_.length;){const n=_[x];x++,h(n),ct(n.$$)}for(h(null),_.length=0,x=0;T.length;)T.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];k.has(e)||(k.add(e),e())}w.length=0}while(_.length);for(;A.length;)A.pop()();S=!1,k.clear(),h(t)}function ct(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const $=new Set;let d;function Ht(){d={r:0,c:[],p:d}}function Gt(){d.r||p(d.c),d=d.p}function st(t,n){t&&t.i&&($.delete(t),t.i(n))}function Jt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Kt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],s=n[u];if(s){for(const o in c)o in s||(i[o]=1);for(const o in s)r[o]||(e[o]=s[o],r[o]=1);t[u]=s}else for(const o in c)r[o]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Qt(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Ut(t){t&&t.c()}function Vt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:s}=t.$$;r&&r.m(n,e),i||N(()=>{const o=u.map(W).filter(K);c?c.push(...o):p(o),t.$$.on_mount=[]}),s.forEach(N)}function lt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(_.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Xt(t,n,e,i,r,u,c,s=[-1]){const o=m;h(t);const l=t.$$={fragment:null,ctx:null,props:u,update:j,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:z(),dirty:s,skip_bound:!1,root:n.target||o.$$.root};c&&c(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,y,...q)=>{const M=q.length?q[0]:y;return l.ctx&&r(l.ctx[a],l.ctx[a]=M)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](M),f&&at(t,a)),y}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){U();const a=et(n.target);l.fragment&&l.fragment.l(a),a.forEach(I)}else l.fragment&&l.fragment.c();n.intro&&st(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),V(),G()}h(o)}class Yt{$destroy(){lt(this,1),this.$destroy=j}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{gt as $,Qt as A,lt as B,J as C,Dt as D,j as E,R as F,p as G,K as H,tt as I,ht as J,pt as K,yt as L,mt as M,Wt as N,wt as O,dt as P,L as Q,Tt as R,Yt as S,T,Rt as U,Ft as V,Ct as W,kt as X,N as Y,Mt as Z,zt as _,et as a,Lt as a0,_t as a1,bt as a2,nt as a3,St as a4,Pt as a5,Et as b,At as c,I as d,O as e,qt as f,xt as g,rt as h,Xt as i,jt as j,$t as k,vt as l,Nt as m,Ht as n,Jt as o,Gt as p,st as q,Ot as r,ft as s,C as t,It as u,Bt as v,Ut as w,Vt as x,ut as y,Kt as z};
