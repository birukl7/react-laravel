import{R as b,r as m}from"./app-CrwSGshG.js";import{l as y,a as w,b as F,u as P,c as S,s as A}from"./transition-CROoXdbP.js";var h;let q=(h=b.useId)!=null?h:function(){let e=y(),[t,r]=b.useState(e?()=>w.nextId():null);return F(()=>{t===null&&r(w.nextId())},[t]),t!=null?""+t:void 0};function g(e){return w.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let p=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(M||{}),I=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(I||{}),T=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(T||{});function L(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(p)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var x=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(x||{});function N(e,t=0){var r;return e===((r=g(e))==null?void 0:r.body)?!1:P(t,{0(){return e.matches(p)},1(){let o=e;for(;o!==null;){if(o.matches(p))return!0;o=o.parentElement}return!1}})}function B(e){let t=g(e);S().nextFrame(()=>{t&&!N(t.activeElement,0)&&O(e)})}var D=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(D||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function O(e){e==null||e.focus({preventScroll:!0})}let $=["textarea","input"].join(",");function R(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,$))!=null?r:!1}function H(e,t=r=>r){return e.slice().sort((r,o)=>{let l=t(r),a=t(o);if(l===null||a===null)return 0;let n=l.compareDocumentPosition(a);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t){return _(L(),t,{relativeTo:e})}function _(e,t,{sorted:r=!0,relativeTo:o=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?r?H(e):e:L(e);l.length>0&&n.length>1&&(n=n.filter(d=>!l.includes(d))),o=o??a.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,n.indexOf(o))-1;if(t&4)return Math.max(0,n.indexOf(o))+1;if(t&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=t&32?{preventScroll:!0}:{},c=0,i=n.length,f;do{if(c>=i||c+i<=0)return 0;let d=u+c;if(t&16)d=(d+i)%i;else{if(d<0)return 3;if(d>=i)return 1}f=n[d],f==null||f.focus(v),c+=s}while(f!==a.activeElement);return t&6&&R(f)&&f.select(),2}function U(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function k(){return/Android/gi.test(window.navigator.userAgent)}function K(){return U()||k()}function E(e,t,r){let o=A(t);m.useEffect(()=>{function l(a){o.current(a)}return document.addEventListener(e,l,r),()=>document.removeEventListener(e,l,r)},[e,r])}function C(e,t,r){let o=A(t);m.useEffect(()=>{function l(a){o.current(a)}return window.addEventListener(e,l,r),()=>window.removeEventListener(e,l,r)},[e,r])}function z(e,t,r=!0){let o=m.useRef(!1);m.useEffect(()=>{requestAnimationFrame(()=>{o.current=r})},[r]);function l(n,s){if(!o.current||n.defaultPrevented)return;let u=s(n);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let v=function c(i){return typeof i=="function"?c(i()):Array.isArray(i)||i instanceof Set?i:[i]}(e);for(let c of v){if(c===null)continue;let i=c instanceof HTMLElement?c:c.current;if(i!=null&&i.contains(u)||n.composed&&n.composedPath().includes(i))return}return!N(u,x.Loose)&&u.tabIndex!==-1&&n.preventDefault(),t(n,u)}let a=m.useRef(null);E("pointerdown",n=>{var s,u;o.current&&(a.current=((u=(s=n.composedPath)==null?void 0:s.call(n))==null?void 0:u[0])||n.target)},!0),E("mousedown",n=>{var s,u;o.current&&(a.current=((u=(s=n.composedPath)==null?void 0:s.call(n))==null?void 0:u[0])||n.target)},!0),E("click",n=>{K()||a.current&&(l(n,()=>a.current),a.current=null)},!0),E("touchend",n=>l(n,()=>n.target instanceof HTMLElement?n.target:null),!0),C("blur",n=>l(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function J(...e){return m.useMemo(()=>g(...e),[...e])}function Q(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let o=(t==null?void 0:t.getAttribute("disabled"))==="";return o&&G(r)?!1:o}function G(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var V=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(V||{});export{B as D,q as I,M,I as N,_ as O,x as T,X as _,z as a,g as b,H as c,N as h,J as n,V as o,Q as r,C as s,U as t,O as y};
