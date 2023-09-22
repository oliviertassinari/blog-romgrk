import{r as reactExports,m as m$3,e as e$2,a as reactDomExports}from"./index.e83d5bfa.js";/* empty css                            */var jsxRuntime={exports:{}},reactJsxRuntime_production_min={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f$5=reactExports,k=Symbol.for("react.element"),l$4=Symbol.for("react.fragment"),m$2=Object.prototype.hasOwnProperty,n$3=f$5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$4={key:!0,ref:!0,__self:!0,__source:!0};function q(L,A,_){var W,B={},G=null,V=null;_!==void 0&&(G=""+_),A.key!==void 0&&(G=""+A.key),A.ref!==void 0&&(V=A.ref);for(W in A)m$2.call(A,W)&&!p$4.hasOwnProperty(W)&&(B[W]=A[W]);if(L&&L.defaultProps)for(W in A=L.defaultProps,A)B[W]===void 0&&(B[W]=A[W]);return{$$typeof:k,type:L,key:G,ref:V,props:B,_owner:n$3.current}}reactJsxRuntime_production_min.Fragment=l$4;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;var jsxRuntimeExports=jsxRuntime.exports,i$2=Object.defineProperty,d$4=(L,A,_)=>A in L?i$2(L,A,{enumerable:!0,configurable:!0,writable:!0,value:_}):L[A]=_,r$3=(L,A,_)=>(d$4(L,typeof A!="symbol"?A+"":A,_),_);let o$4=class{constructor(){r$3(this,"current",this.detect()),r$3(this,"handoffState","pending"),r$3(this,"currentId",0)}set(A){this.current!==A&&(this.handoffState="pending",this.currentId=0,this.current=A)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},s$7=new o$4,l$3=(L,A)=>{s$7.isServer?reactExports.useEffect(L,A):reactExports.useLayoutEffect(L,A)};function s$6(L){let A=reactExports.useRef(L);return l$3(()=>{A.current=L},[L]),A}function t$5(L){typeof queueMicrotask=="function"?queueMicrotask(L):Promise.resolve().then(L).catch(A=>setTimeout(()=>{throw A}))}function o$3(){let L=[],A={addEventListener(_,W,B,G){return _.addEventListener(W,B,G),A.add(()=>_.removeEventListener(W,B,G))},requestAnimationFrame(..._){let W=requestAnimationFrame(..._);return A.add(()=>cancelAnimationFrame(W))},nextFrame(..._){return A.requestAnimationFrame(()=>A.requestAnimationFrame(..._))},setTimeout(..._){let W=setTimeout(..._);return A.add(()=>clearTimeout(W))},microTask(..._){let W={current:!0};return t$5(()=>{W.current&&_[0]()}),A.add(()=>{W.current=!1})},style(_,W,B){let G=_.style.getPropertyValue(W);return Object.assign(_.style,{[W]:B}),this.add(()=>{Object.assign(_.style,{[W]:G})})},group(_){let W=o$3();return _(W),this.add(()=>W.dispose())},add(_){return L.push(_),()=>{let W=L.indexOf(_);if(W>=0)for(let B of L.splice(W,1))B()}},dispose(){for(let _ of L.splice(0))_()}};return A}function p$3(){let[L]=reactExports.useState(o$3);return reactExports.useEffect(()=>()=>L.dispose(),[L]),L}let o$2=function(L){let A=s$6(L);return m$3.useCallback((..._)=>A.current(..._),[A])};function s$5(){let L=typeof document>"u";return"useSyncExternalStore"in e$2?(A=>A.useSyncExternalStore)(e$2)(()=>()=>{},()=>!1,()=>!L):!1}function l$2(){let L=s$5(),[A,_]=reactExports.useState(s$7.isHandoffComplete);return A&&s$7.isHandoffComplete===!1&&_(!1),reactExports.useEffect(()=>{A!==!0&&_(!0)},[A]),reactExports.useEffect(()=>s$7.handoff(),[]),L?!1:A}var o$1;let I$3=(o$1=m$3.useId)!=null?o$1:function(){let L=l$2(),[A,_]=m$3.useState(L?()=>s$7.nextId():null);return l$3(()=>{A===null&&_(s$7.nextId())},[A]),A!=null?""+A:void 0};function u$3(L,A,..._){if(L in A){let B=A[L];return typeof B=="function"?B(..._):B}let W=new Error(`Tried to handle "${L}" but there is no handler defined. Only defined handlers are: ${Object.keys(A).map(B=>`"${B}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(W,u$3),W}function e$1(L){return s$7.isServer?null:L instanceof Node?L.ownerDocument:L!=null&&L.hasOwnProperty("current")&&L.current instanceof Node?L.current.ownerDocument:document}let c$5=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(L=>`${L}:not([tabindex='-1'])`).join(",");var M$2=(L=>(L[L.First=1]="First",L[L.Previous=2]="Previous",L[L.Next=4]="Next",L[L.Last=8]="Last",L[L.WrapAround=16]="WrapAround",L[L.NoScroll=32]="NoScroll",L))(M$2||{}),N$2=(L=>(L[L.Error=0]="Error",L[L.Overflow=1]="Overflow",L[L.Success=2]="Success",L[L.Underflow=3]="Underflow",L))(N$2||{}),F$1=(L=>(L[L.Previous=-1]="Previous",L[L.Next=1]="Next",L))(F$1||{});function f$4(L=document.body){return L==null?[]:Array.from(L.querySelectorAll(c$5)).sort((A,_)=>Math.sign((A.tabIndex||Number.MAX_SAFE_INTEGER)-(_.tabIndex||Number.MAX_SAFE_INTEGER)))}var T$2=(L=>(L[L.Strict=0]="Strict",L[L.Loose=1]="Loose",L))(T$2||{});function h$5(L,A=0){var _;return L===((_=e$1(L))==null?void 0:_.body)?!1:u$3(A,{0(){return L.matches(c$5)},1(){let W=L;for(;W!==null;){if(W.matches(c$5))return!0;W=W.parentElement}return!1}})}var w$1=(L=>(L[L.Keyboard=0]="Keyboard",L[L.Mouse=1]="Mouse",L))(w$1||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",L=>{L.metaKey||L.altKey||L.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",L=>{L.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:L.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function y$3(L){L?.focus({preventScroll:!0})}let S$5=["textarea","input"].join(",");function H(L){var A,_;return(_=(A=L?.matches)==null?void 0:A.call(L,S$5))!=null?_:!1}function I$2(L,A=_=>_){return L.slice().sort((_,W)=>{let B=A(_),G=A(W);if(B===null||G===null)return 0;let V=B.compareDocumentPosition(G);return V&Node.DOCUMENT_POSITION_FOLLOWING?-1:V&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function O(L,A,{sorted:_=!0,relativeTo:W=null,skipElements:B=[]}={}){let G=Array.isArray(L)?L.length>0?L[0].ownerDocument:document:L.ownerDocument,V=Array.isArray(L)?_?I$2(L):L:f$4(L);B.length>0&&V.length>1&&(V=V.filter(oe=>!B.includes(oe))),W=W??G.activeElement;let K=(()=>{if(A&5)return 1;if(A&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),ee=(()=>{if(A&1)return 0;if(A&2)return Math.max(0,V.indexOf(W))-1;if(A&4)return Math.max(0,V.indexOf(W))+1;if(A&8)return V.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),te=A&32?{preventScroll:!0}:{},ne=0,re=V.length,le;do{if(ne>=re||ne+re<=0)return 0;let oe=ee+ne;if(A&16)oe=(oe+re)%re;else{if(oe<0)return 3;if(oe>=re)return 1}le=V[oe],le?.focus(te),ne+=K}while(le!==G.activeElement);return A&6&&H(le)&&le.select(),2}function d$3(L,A,_){let W=s$6(A);reactExports.useEffect(()=>{function B(G){W.current(G)}return document.addEventListener(L,B,_),()=>document.removeEventListener(L,B,_)},[L,_])}function s$4(L,A,_){let W=s$6(A);reactExports.useEffect(()=>{function B(G){W.current(G)}return window.addEventListener(L,B,_),()=>window.removeEventListener(L,B,_)},[L,_])}function h$4(L,A,_=!0){let W=reactExports.useRef(!1);reactExports.useEffect(()=>{requestAnimationFrame(()=>{W.current=_})},[_]);function B(V,K){if(!W.current||V.defaultPrevented)return;let ee=K(V);if(ee===null||!ee.getRootNode().contains(ee)||!ee.isConnected)return;let te=function ne(re){return typeof re=="function"?ne(re()):Array.isArray(re)||re instanceof Set?re:[re]}(L);for(let ne of te){if(ne===null)continue;let re=ne instanceof HTMLElement?ne:ne.current;if(re!=null&&re.contains(ee)||V.composed&&V.composedPath().includes(re))return}return!h$5(ee,T$2.Loose)&&ee.tabIndex!==-1&&V.preventDefault(),A(V,ee)}let G=reactExports.useRef(null);d$3("pointerdown",V=>{var K,ee;W.current&&(G.current=((ee=(K=V.composedPath)==null?void 0:K.call(V))==null?void 0:ee[0])||V.target)},!0),d$3("mousedown",V=>{var K,ee;W.current&&(G.current=((ee=(K=V.composedPath)==null?void 0:K.call(V))==null?void 0:ee[0])||V.target)},!0),d$3("click",V=>{G.current&&(B(V,()=>G.current),G.current=null)},!0),d$3("touchend",V=>B(V,()=>V.target instanceof HTMLElement?V.target:null),!0),s$4("blur",V=>B(V,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let u$2=Symbol();function T$1(L,A=!0){return Object.assign(L,{[u$2]:A})}function y$2(...L){let A=reactExports.useRef(L);reactExports.useEffect(()=>{A.current=L},[L]);let _=o$2(W=>{for(let B of A.current)B!=null&&(typeof B=="function"?B(W):B.current=W)});return L.every(W=>W==null||W?.[u$2])?void 0:_}function t$4(...L){return Array.from(new Set(L.flatMap(A=>typeof A=="string"?A.split(" "):[]))).filter(Boolean).join(" ")}var S$4=(L=>(L[L.None=0]="None",L[L.RenderStrategy=1]="RenderStrategy",L[L.Static=2]="Static",L))(S$4||{}),j$2=(L=>(L[L.Unmount=0]="Unmount",L[L.Hidden=1]="Hidden",L))(j$2||{});function X$1({ourProps:L,theirProps:A,slot:_,defaultTag:W,features:B,visible:G=!0,name:V}){let K=N$1(A,L);if(G)return c$4(K,_,W,V);let ee=B??0;if(ee&2){let{static:te=!1,...ne}=K;if(te)return c$4(ne,_,W,V)}if(ee&1){let{unmount:te=!0,...ne}=K;return u$3(te?0:1,{0(){return null},1(){return c$4({...ne,hidden:!0,style:{display:"none"}},_,W,V)}})}return c$4(K,_,W,V)}function c$4(L,A={},_,W){let{as:B=_,children:G,refName:V="ref",...K}=g(L,["unmount","static"]),ee=L.ref!==void 0?{[V]:L.ref}:{},te=typeof G=="function"?G(A):G;"className"in K&&K.className&&typeof K.className=="function"&&(K.className=K.className(A));let ne={};if(A){let re=!1,le=[];for(let[oe,ie]of Object.entries(A))typeof ie=="boolean"&&(re=!0),ie===!0&&le.push(oe);re&&(ne["data-headlessui-state"]=le.join(" "))}if(B===reactExports.Fragment&&Object.keys(R(K)).length>0){if(!reactExports.isValidElement(te)||Array.isArray(te)&&te.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${W} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(K).map(ie=>`  - ${ie}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(ie=>`  - ${ie}`).join(`
`)].join(`
`));let re=te.props,le=typeof re?.className=="function"?(...ie)=>t$4(re?.className(...ie),K.className):t$4(re?.className,K.className),oe=le?{className:le}:{};return reactExports.cloneElement(te,Object.assign({},N$1(te.props,R(g(K,["ref"]))),ne,ee,w(te.ref,ee.ref),oe))}return reactExports.createElement(B,Object.assign({},g(K,["ref"]),B!==reactExports.Fragment&&ee,B!==reactExports.Fragment&&ne),te)}function w(...L){return{ref:L.every(A=>A==null)?void 0:A=>{for(let _ of L)_!=null&&(typeof _=="function"?_(A):_.current=A)}}}function N$1(...L){if(L.length===0)return{};if(L.length===1)return L[0];let A={},_={};for(let W of L)for(let B in W)B.startsWith("on")&&typeof W[B]=="function"?(_[B]!=null||(_[B]=[]),_[B].push(W[B])):A[B]=W[B];if(A.disabled||A["aria-disabled"])return Object.assign(A,Object.fromEntries(Object.keys(_).map(W=>[W,void 0])));for(let W in _)Object.assign(A,{[W](B,...G){let V=_[W];for(let K of V){if((B instanceof Event||B?.nativeEvent instanceof Event)&&B.defaultPrevented)return;K(B,...G)}}});return A}function D$1(L){var A;return Object.assign(reactExports.forwardRef(L),{displayName:(A=L.displayName)!=null?A:L.name})}function R(L){let A=Object.assign({},L);for(let _ in A)A[_]===void 0&&delete A[_];return A}function g(L,A=[]){let _=Object.assign({},L);for(let W of A)W in _&&delete _[W];return _}function r$2(L){let A=L.parentElement,_=null;for(;A&&!(A instanceof HTMLFieldSetElement);)A instanceof HTMLLegendElement&&(_=A),A=A.parentElement;let W=A?.getAttribute("disabled")==="";return W&&i$1(_)?!1:W}function i$1(L){if(!L)return!1;let A=L.previousElementSibling;for(;A!==null;){if(A instanceof HTMLLegendElement)return!1;A=A.previousElementSibling}return!0}let a$5="div";var p$2=(L=>(L[L.None=1]="None",L[L.Focusable=2]="Focusable",L[L.Hidden=4]="Hidden",L))(p$2||{});function s$3(L,A){let{features:_=1,...W}=L,B={ref:A,"aria-hidden":(_&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(_&4)===4&&(_&2)!==2&&{display:"none"}}};return X$1({ourProps:B,theirProps:W,slot:{},defaultTag:a$5,name:"Hidden"})}let c$3=D$1(s$3),n$2=reactExports.createContext(null);n$2.displayName="OpenClosedContext";var d$2=(L=>(L[L.Open=1]="Open",L[L.Closed=2]="Closed",L[L.Closing=4]="Closing",L[L.Opening=8]="Opening",L))(d$2||{});function C(){return reactExports.useContext(n$2)}var o=(L=>(L.Space=" ",L.Enter="Enter",L.Escape="Escape",L.Backspace="Backspace",L.Delete="Delete",L.ArrowLeft="ArrowLeft",L.ArrowUp="ArrowUp",L.ArrowRight="ArrowRight",L.ArrowDown="ArrowDown",L.Home="Home",L.End="End",L.PageUp="PageUp",L.PageDown="PageDown",L.Tab="Tab",L))(o||{});function m$1(L,A){let _=reactExports.useRef([]),W=o$2(L);reactExports.useEffect(()=>{let B=[..._.current];for(let[G,V]of A.entries())if(_.current[G]!==V){let K=W(A,B);return _.current=A,K}},[W,...A])}function t$3(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function n$1(...L){return reactExports.useMemo(()=>e$1(...L),[...L])}var s$2=(L=>(L[L.Forwards=0]="Forwards",L[L.Backwards=1]="Backwards",L))(s$2||{});function n(){let L=reactExports.useRef(0);return s$4("keydown",A=>{A.key==="Tab"&&(L.current=A.shiftKey?1:0)},!0),L}function f$3(){let L=reactExports.useRef(!1);return l$3(()=>(L.current=!0,()=>{L.current=!1}),[]),L}function E(L,A,_,W){let B=s$6(_);reactExports.useEffect(()=>{L=L??window;function G(V){B.current(V)}return L.addEventListener(A,G,W),()=>L.removeEventListener(A,G,W)},[L,A,W])}function t$2(L){function A(){document.readyState!=="loading"&&(L(),document.removeEventListener("DOMContentLoaded",A))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",A),A())}function c$2(L){let A=o$2(L),_=reactExports.useRef(!1);reactExports.useEffect(()=>(_.current=!1,()=>{_.current=!0,t$5(()=>{_.current&&A()})}),[A])}function P$1(L){if(!L)return new Set;if(typeof L=="function")return new Set(L());let A=new Set;for(let _ of L.current)_.current instanceof HTMLElement&&A.add(_.current);return A}let J="div";var h$3=(L=>(L[L.None=1]="None",L[L.InitialFocus=2]="InitialFocus",L[L.TabLock=4]="TabLock",L[L.FocusLock=8]="FocusLock",L[L.RestoreFocus=16]="RestoreFocus",L[L.All=30]="All",L))(h$3||{});function X(L,A){let _=reactExports.useRef(null),W=y$2(_,A),{initialFocus:B,containers:G,features:V=30,...K}=L;l$2()||(V=1);let ee=n$1(_);Y({ownerDocument:ee},!!(V&16));let te=Z({ownerDocument:ee,container:_,initialFocus:B},!!(V&2));$({ownerDocument:ee,container:_,containers:G,previousActiveElement:te},!!(V&8));let ne=n(),re=o$2(ue=>{let fe=_.current;fe&&(Ee=>Ee())(()=>{u$3(ne.current,{[s$2.Forwards]:()=>{O(fe,M$2.First,{skipElements:[ue.relatedTarget]})},[s$2.Backwards]:()=>{O(fe,M$2.Last,{skipElements:[ue.relatedTarget]})}})})}),le=p$3(),oe=reactExports.useRef(!1),ie={ref:W,onKeyDown(ue){ue.key=="Tab"&&(oe.current=!0,le.requestAnimationFrame(()=>{oe.current=!1}))},onBlur(ue){let fe=P$1(G);_.current instanceof HTMLElement&&fe.add(_.current);let Ee=ue.relatedTarget;Ee instanceof HTMLElement&&Ee.dataset.headlessuiFocusGuard!=="true"&&(S$3(fe,Ee)||(oe.current?O(_.current,u$3(ne.current,{[s$2.Forwards]:()=>M$2.Next,[s$2.Backwards]:()=>M$2.Previous})|M$2.WrapAround,{relativeTo:ue.target}):ue.target instanceof HTMLElement&&y$3(ue.target)))}};return m$3.createElement(m$3.Fragment,null,!!(V&4)&&m$3.createElement(c$3,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:re,features:p$2.Focusable}),X$1({ourProps:ie,theirProps:K,defaultTag:J,name:"FocusTrap"}),!!(V&4)&&m$3.createElement(c$3,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:re,features:p$2.Focusable}))}let z=D$1(X),ge=Object.assign(z,{features:h$3}),a$4=[];t$2(()=>{function L(A){A.target instanceof HTMLElement&&A.target!==document.body&&a$4[0]!==A.target&&(a$4.unshift(A.target),a$4=a$4.filter(_=>_!=null&&_.isConnected),a$4.splice(10))}window.addEventListener("click",L,{capture:!0}),window.addEventListener("mousedown",L,{capture:!0}),window.addEventListener("focus",L,{capture:!0}),document.body.addEventListener("click",L,{capture:!0}),document.body.addEventListener("mousedown",L,{capture:!0}),document.body.addEventListener("focus",L,{capture:!0})});function Q(L=!0){let A=reactExports.useRef(a$4.slice());return m$1(([_],[W])=>{W===!0&&_===!1&&t$5(()=>{A.current.splice(0)}),W===!1&&_===!0&&(A.current=a$4.slice())},[L,a$4,A]),o$2(()=>{var _;return(_=A.current.find(W=>W!=null&&W.isConnected))!=null?_:null})}function Y({ownerDocument:L},A){let _=Q(A);m$1(()=>{A||L?.activeElement===L?.body&&y$3(_())},[A]),c$2(()=>{A&&y$3(_())})}function Z({ownerDocument:L,container:A,initialFocus:_},W){let B=reactExports.useRef(null),G=f$3();return m$1(()=>{if(!W)return;let V=A.current;V&&t$5(()=>{if(!G.current)return;let K=L?.activeElement;if(_!=null&&_.current){if(_?.current===K){B.current=K;return}}else if(V.contains(K)){B.current=K;return}_!=null&&_.current?y$3(_.current):O(V,M$2.First)===N$2.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),B.current=L?.activeElement})},[W]),B}function $({ownerDocument:L,container:A,containers:_,previousActiveElement:W},B){let G=f$3();E(L?.defaultView,"focus",V=>{if(!B||!G.current)return;let K=P$1(_);A.current instanceof HTMLElement&&K.add(A.current);let ee=W.current;if(!ee)return;let te=V.target;te&&te instanceof HTMLElement?S$3(K,te)?(W.current=te,y$3(te)):(V.preventDefault(),V.stopPropagation(),y$3(ee)):y$3(W.current)},!0)}function S$3(L,A){for(let _ of L)if(_.contains(A))return!0;return!1}let e=reactExports.createContext(!1);function l$1(){return reactExports.useContext(e)}function P(L){return m$3.createElement(e.Provider,{value:L.force},L.children)}function F(L){let A=l$1(),_=reactExports.useContext(v),W=n$1(L),[B,G]=reactExports.useState(()=>{if(!A&&_!==null||s$7.isServer)return null;let V=W?.getElementById("headlessui-portal-root");if(V)return V;if(W===null)return null;let K=W.createElement("div");return K.setAttribute("id","headlessui-portal-root"),W.body.appendChild(K)});return reactExports.useEffect(()=>{B!==null&&(W!=null&&W.body.contains(B)||W==null||W.body.appendChild(B))},[B,W]),reactExports.useEffect(()=>{A||_!==null&&G(_.current)},[_,G,A]),B}let U=reactExports.Fragment;function N(L,A){let _=L,W=reactExports.useRef(null),B=y$2(T$1(ne=>{W.current=ne}),A),G=n$1(W),V=F(W),[K]=reactExports.useState(()=>{var ne;return s$7.isServer?null:(ne=G?.createElement("div"))!=null?ne:null}),ee=reactExports.useContext(f$2),te=l$2();return l$3(()=>{!V||!K||V.contains(K)||(K.setAttribute("data-headlessui-portal",""),V.appendChild(K))},[V,K]),l$3(()=>{if(K&&ee)return ee.register(K)},[ee,K]),c$2(()=>{var ne;!V||!K||(K instanceof Node&&V.contains(K)&&V.removeChild(K),V.childNodes.length<=0&&((ne=V.parentElement)==null||ne.removeChild(V)))}),te?!V||!K?null:reactDomExports.createPortal(X$1({ourProps:{ref:B},theirProps:_,defaultTag:U,name:"Portal"}),K):null}let S$2=reactExports.Fragment,v=reactExports.createContext(null);function j$1(L,A){let{target:_,...W}=L,B={ref:y$2(A)};return m$3.createElement(v.Provider,{value:_},X$1({ourProps:B,theirProps:W,defaultTag:S$2,name:"Popover.Group"}))}let f$2=reactExports.createContext(null);function ae(){let L=reactExports.useContext(f$2),A=reactExports.useRef([]),_=o$2(G=>(A.current.push(G),L&&L.register(G),()=>W(G))),W=o$2(G=>{let V=A.current.indexOf(G);V!==-1&&A.current.splice(V,1),L&&L.unregister(G)}),B=reactExports.useMemo(()=>({register:_,unregister:W,portals:A}),[_,W,A]);return[A,reactExports.useMemo(()=>function({children:G}){return m$3.createElement(f$2.Provider,{value:B},G)},[B])]}let D=D$1(N),I$1=D$1(j$1),pe=Object.assign(D,{Group:I$1}),d$1=reactExports.createContext(null);function f$1(){let L=reactExports.useContext(d$1);if(L===null){let A=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(A,f$1),A}return L}function M$1(){let[L,A]=reactExports.useState([]);return[L.length>0?L.join(" "):void 0,reactExports.useMemo(()=>function(_){let W=o$2(G=>(A(V=>[...V,G]),()=>A(V=>{let K=V.slice(),ee=K.indexOf(G);return ee!==-1&&K.splice(ee,1),K}))),B=reactExports.useMemo(()=>({register:W,slot:_.slot,name:_.name,props:_.props}),[W,_.slot,_.name,_.props]);return m$3.createElement(d$1.Provider,{value:B},_.children)},[A])]}let S$1="p";function h$2(L,A){let _=I$3(),{id:W=`headlessui-description-${_}`,...B}=L,G=f$1(),V=y$2(A);l$3(()=>G.register(W),[W,G.register]);let K={ref:V,...G.props,id:W};return X$1({ourProps:K,theirProps:B,slot:G.slot||{},defaultTag:S$1,name:G.name||"Description"})}let y$1=D$1(h$2),b$1=Object.assign(y$1,{}),a$3=reactExports.createContext(()=>{});a$3.displayName="StackContext";var s$1=(L=>(L[L.Add=0]="Add",L[L.Remove=1]="Remove",L))(s$1||{});function x(){return reactExports.useContext(a$3)}function M({children:L,onUpdate:A,type:_,element:W,enabled:B}){let G=x(),V=o$2((...K)=>{A?.(...K),G(...K)});return l$3(()=>{let K=B===void 0||B===!0;return K&&V(0,_,W),()=>{K&&V(1,_,W)}},[V,_,W,B]),m$3.createElement(a$3.Provider,{value:V},L)}function i(L,A){return L===A&&(L!==0||1/L===1/A)||L!==L&&A!==A}const d=typeof Object.is=="function"?Object.is:i,{useState:u$1,useEffect:h$1,useLayoutEffect:f,useDebugValue:p$1}=e$2;function y(L,A,_){const W=A(),[{inst:B},G]=u$1({inst:{value:W,getSnapshot:A}});return f(()=>{B.value=W,B.getSnapshot=A,r$1(B)&&G({inst:B})},[L,W,A]),h$1(()=>(r$1(B)&&G({inst:B}),L(()=>{r$1(B)&&G({inst:B})})),[L]),p$1(W),W}function r$1(L){const A=L.getSnapshot,_=L.value;try{const W=A();return!d(_,W)}catch{return!0}}function t$1(L,A,_){return A()}const r=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s=!r,c$1=s?t$1:y,a$2="useSyncExternalStore"in e$2?(L=>L.useSyncExternalStore)(e$2):c$1;function S(L){return a$2(L.subscribe,L.getSnapshot,L.getSnapshot)}function a$1(L,A){let _=L(),W=new Set;return{getSnapshot(){return _},subscribe(B){return W.add(B),()=>W.delete(B)},dispatch(B,...G){let V=A[B].call(_,...G);V&&(_=V,W.forEach(K=>K()))}}}function c(){let L;return{before({doc:A}){var _;let W=A.documentElement;L=((_=A.defaultView)!=null?_:window).innerWidth-W.clientWidth},after({doc:A,d:_}){let W=A.documentElement,B=W.clientWidth-W.offsetWidth,G=L-B;_.style(W,"paddingRight",`${G}px`)}}}function T(){if(!t$3())return{};let L;return{before(){L=window.pageYOffset},after({doc:A,d:_,meta:W}){function B(G){return W.containers.flatMap(V=>V()).some(V=>V.contains(G))}_.microTask(()=>{if(window.getComputedStyle(A.documentElement).scrollBehavior!=="auto"){let V=o$3();V.style(A.documentElement,"scroll-behavior","auto"),_.add(()=>_.microTask(()=>V.dispose()))}_.style(A.body,"marginTop",`-${L}px`),window.scrollTo(0,0);let G=null;_.addEventListener(A,"click",V=>{if(V.target instanceof HTMLElement)try{let K=V.target.closest("a");if(!K)return;let{hash:ee}=new URL(K.href),te=A.querySelector(ee);te&&!B(te)&&(G=te)}catch{}},!0),_.addEventListener(A,"touchmove",V=>{V.target instanceof HTMLElement&&!B(V.target)&&V.preventDefault()},{passive:!1}),_.add(()=>{window.scrollTo(0,window.pageYOffset+L),G&&G.isConnected&&(G.scrollIntoView({block:"nearest"}),G=null)})})}}}function l(){return{before({doc:L,d:A}){A.style(L.documentElement,"overflow","hidden")}}}function m(L){let A={};for(let _ of L)Object.assign(A,_(A));return A}let a=a$1(()=>new Map,{PUSH(L,A){var _;let W=(_=this.get(L))!=null?_:{doc:L,count:0,d:o$3(),meta:new Set};return W.count++,W.meta.add(A),this.set(L,W),this},POP(L,A){let _=this.get(L);return _&&(_.count--,_.meta.delete(A)),this},SCROLL_PREVENT({doc:L,d:A,meta:_}){let W={doc:L,d:A,meta:m(_)},B=[T(),c(),l()];B.forEach(({before:G})=>G?.(W)),B.forEach(({after:G})=>G?.(W))},SCROLL_ALLOW({d:L}){L.dispose()},TEARDOWN({doc:L}){this.delete(L)}});a.subscribe(()=>{let L=a.getSnapshot(),A=new Map;for(let[_]of L)A.set(_,_.documentElement.style.overflow);for(let _ of L.values()){let W=A.get(_.doc)==="hidden",B=_.count!==0;(B&&!W||!B&&W)&&a.dispatch(_.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",_),_.count===0&&a.dispatch("TEARDOWN",_)}});function p(L,A,_){let W=S(a),B=L?W.get(L):void 0,G=B?B.count>0:!1;return l$3(()=>{if(!(!L||!A))return a.dispatch("PUSH",L,_),()=>a.dispatch("POP",L,_)},[A,L]),G}let u=new Map,t=new Map;function h(L,A=!0){l$3(()=>{var _;if(!A)return;let W=typeof L=="function"?L():L.current;if(!W)return;function B(){var V;if(!W)return;let K=(V=t.get(W))!=null?V:1;if(K===1?t.delete(W):t.set(W,K-1),K!==1)return;let ee=u.get(W);ee&&(ee["aria-hidden"]===null?W.removeAttribute("aria-hidden"):W.setAttribute("aria-hidden",ee["aria-hidden"]),W.inert=ee.inert,u.delete(W))}let G=(_=t.get(W))!=null?_:0;return t.set(W,G+1),G!==0||(u.set(W,{"aria-hidden":W.getAttribute("aria-hidden"),inert:W.inert}),W.setAttribute("aria-hidden","true"),W.inert=!0),B},[L,A])}function j({defaultContainers:L=[],portals:A,mainTreeNodeRef:_}={}){var W;let B=reactExports.useRef((W=_?.current)!=null?W:null),G=n$1(B),V=o$2(()=>{var K;let ee=[];for(let te of L)te!==null&&(te instanceof HTMLElement?ee.push(te):"current"in te&&te.current instanceof HTMLElement&&ee.push(te.current));if(A!=null&&A.current)for(let te of A.current)ee.push(te);for(let te of(K=G?.querySelectorAll("html > *, body > *"))!=null?K:[])te!==document.body&&te!==document.head&&te instanceof HTMLElement&&te.id!=="headlessui-portal-root"&&(te.contains(B.current)||ee.some(ne=>te.contains(ne))||ee.push(te));return ee});return{resolveContainers:V,contains:o$2(K=>V().some(ee=>ee.contains(K))),mainTreeNodeRef:B,MainTreeNode:reactExports.useMemo(()=>function(){return _!=null?null:m$3.createElement(c$3,{features:p$2.Hidden,ref:B})},[B,_])}}var _e=(L=>(L[L.Open=0]="Open",L[L.Closed=1]="Closed",L))(_e||{}),Ie=(L=>(L[L.SetTitleId=0]="SetTitleId",L))(Ie||{});let Me={0(L,A){return L.titleId===A.id?L:{...L,titleId:A.id}}},I=reactExports.createContext(null);I.displayName="DialogContext";function b(L){let A=reactExports.useContext(I);if(A===null){let _=new Error(`<${L} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(_,b),_}return A}function we(L,A,_=()=>[document.body]){p(L,A,W=>{var B;return{containers:[...(B=W.containers)!=null?B:[],_]}})}function Be(L,A){return u$3(A.type,Me,L,A)}let He="div",Ge=S$4.RenderStrategy|S$4.Static;function Ne(L,A){var _;let W=I$3(),{id:B=`headlessui-dialog-${W}`,open:G,onClose:V,initialFocus:K,__demoMode:ee=!1,...te}=L,[ne,re]=reactExports.useState(0),le=C();G===void 0&&le!==null&&(G=(le&d$2.Open)===d$2.Open);let oe=reactExports.useRef(null),ie=y$2(oe,A),ue=n$1(oe),fe=L.hasOwnProperty("open")||le!==null,Ee=L.hasOwnProperty("onClose");if(!fe&&!Ee)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!fe)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!Ee)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof G!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${G}`);if(typeof V!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${V}`);let ce=G?0:1,[xe,Pe]=reactExports.useReducer(Be,{titleId:null,descriptionId:null,panelRef:reactExports.createRef()}),he=o$2(()=>V(!1)),Ce=o$2(se=>Pe({type:0,id:se})),ve=l$2()?ee?!1:ce===0:!1,ye=ne>1,Te=reactExports.useContext(I)!==null,[ke,De]=ae(),{resolveContainers:Oe,mainTreeNodeRef:be,MainTreeNode:Fe}=j({portals:ke,defaultContainers:[(_=xe.panelRef.current)!=null?_:oe.current]}),Ae=ye?"parent":"leaf",Re=le!==null?(le&d$2.Closing)===d$2.Closing:!1,et=(()=>Te||Re?!1:ve)(),tt=reactExports.useCallback(()=>{var se,me;return(me=Array.from((se=ue?.querySelectorAll("body > *"))!=null?se:[]).find(de=>de.id==="headlessui-portal-root"?!1:de.contains(be.current)&&de instanceof HTMLElement))!=null?me:null},[be]);h(tt,et);let nt=(()=>ye?!0:ve)(),rt=reactExports.useCallback(()=>{var se,me;return(me=Array.from((se=ue?.querySelectorAll("[data-headlessui-portal]"))!=null?se:[]).find(de=>de.contains(be.current)&&de instanceof HTMLElement))!=null?me:null},[be]);h(rt,nt);let ot=(()=>!(!ve||ye))();h$4(Oe,he,ot);let at=(()=>!(ye||ce!==0))();E(ue?.defaultView,"keydown",se=>{at&&(se.defaultPrevented||se.key===o.Escape&&(se.preventDefault(),se.stopPropagation(),he()))});let lt=(()=>!(Re||ce!==0||Te))();we(ue,lt,Oe),reactExports.useEffect(()=>{if(ce!==0||!oe.current)return;let se=new ResizeObserver(me=>{for(let de of me){let Se=de.target.getBoundingClientRect();Se.x===0&&Se.y===0&&Se.width===0&&Se.height===0&&he()}});return se.observe(oe.current),()=>se.disconnect()},[ce,oe,he]);let[ut,st]=M$1(),it=reactExports.useMemo(()=>[{dialogState:ce,close:he,setTitleId:Ce},xe],[ce,xe,he,Ce]),Le=reactExports.useMemo(()=>({open:ce===0}),[ce]),ct={ref:ie,id:B,role:"dialog","aria-modal":ce===0?!0:void 0,"aria-labelledby":xe.titleId,"aria-describedby":ut};return m$3.createElement(M,{type:"Dialog",enabled:ce===0,element:oe,onUpdate:o$2((se,me)=>{me==="Dialog"&&u$3(se,{[s$1.Add]:()=>re(de=>de+1),[s$1.Remove]:()=>re(de=>de-1)})})},m$3.createElement(P,{force:!0},m$3.createElement(pe,null,m$3.createElement(I.Provider,{value:it},m$3.createElement(pe.Group,{target:oe},m$3.createElement(P,{force:!1},m$3.createElement(st,{slot:Le,name:"Dialog.Description"},m$3.createElement(ge,{initialFocus:K,containers:Oe,features:ve?u$3(Ae,{parent:ge.features.RestoreFocus,leaf:ge.features.All&~ge.features.FocusLock}):ge.features.None},m$3.createElement(De,null,X$1({ourProps:ct,theirProps:te,slot:Le,defaultTag:He,features:Ge,visible:ce===0,name:"Dialog"}))))))))),m$3.createElement(Fe,null))}let Ue="div";function We(L,A){let _=I$3(),{id:W=`headlessui-dialog-overlay-${_}`,...B}=L,[{dialogState:G,close:V}]=b("Dialog.Overlay"),K=y$2(A),ee=o$2(ne=>{if(ne.target===ne.currentTarget){if(r$2(ne.currentTarget))return ne.preventDefault();ne.preventDefault(),ne.stopPropagation(),V()}}),te=reactExports.useMemo(()=>({open:G===0}),[G]);return X$1({ourProps:{ref:K,id:W,"aria-hidden":!0,onClick:ee},theirProps:B,slot:te,defaultTag:Ue,name:"Dialog.Overlay"})}let Ye="div";function $e(L,A){let _=I$3(),{id:W=`headlessui-dialog-backdrop-${_}`,...B}=L,[{dialogState:G},V]=b("Dialog.Backdrop"),K=y$2(A);reactExports.useEffect(()=>{if(V.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[V.panelRef]);let ee=reactExports.useMemo(()=>({open:G===0}),[G]);return m$3.createElement(P,{force:!0},m$3.createElement(pe,null,X$1({ourProps:{ref:K,id:W,"aria-hidden":!0},theirProps:B,slot:ee,defaultTag:Ye,name:"Dialog.Backdrop"})))}let Je="div";function Xe(L,A){let _=I$3(),{id:W=`headlessui-dialog-panel-${_}`,...B}=L,[{dialogState:G},V]=b("Dialog.Panel"),K=y$2(A,V.panelRef),ee=reactExports.useMemo(()=>({open:G===0}),[G]),te=o$2(ne=>{ne.stopPropagation()});return X$1({ourProps:{ref:K,id:W,onClick:te},theirProps:B,slot:ee,defaultTag:Je,name:"Dialog.Panel"})}let je="h2";function Ke(L,A){let _=I$3(),{id:W=`headlessui-dialog-title-${_}`,...B}=L,[{dialogState:G,setTitleId:V}]=b("Dialog.Title"),K=y$2(A);reactExports.useEffect(()=>(V(W),()=>V(null)),[W,V]);let ee=reactExports.useMemo(()=>({open:G===0}),[G]);return X$1({ourProps:{ref:K,id:W},theirProps:B,slot:ee,defaultTag:je,name:"Dialog.Title"})}let Ve=D$1(Ne),qe=D$1($e),ze=D$1(Xe),Qe=D$1(We),Ze=D$1(Ke),_t=Object.assign(Ve,{Backdrop:qe,Panel:ze,Overlay:Qe,Title:Ze,Description:b$1});function noop(){}function createWeakMap(){return typeof WeakMap<"u"?new WeakMap:fakeSetOrMap()}function fakeSetOrMap(){return{add:noop,delete:noop,get:noop,set:noop,has:function(L){return!1}}}var hop=Object.prototype.hasOwnProperty,has=function(L,A){return hop.call(L,A)};function extend(L,A){for(var _ in A)has(A,_)&&(L[_]=A[_]);return L}var reLeadingNewline=/^[ \t]*(?:\r\n|\r|\n)/,reTrailingNewline=/(?:\r\n|\r|\n)[ \t]*$/,reStartsWithNewlineOrIsEmpty=/^(?:[\r\n]|$)/,reDetectIndentation=/(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,reOnlyWhitespaceWithAtLeastOneNewline=/^[ \t]*[\r\n][ \t\r\n]*$/;function _outdentArray(L,A,_){var W=0,B=L[0].match(reDetectIndentation);B&&(W=B[1].length);var G="(\\r\\n|\\r|\\n).{0,"+W+"}",V=new RegExp(G,"g");A&&(L=L.slice(1));var K=_.newline,ee=_.trimLeadingNewline,te=_.trimTrailingNewline,ne=typeof K=="string",re=L.length,le=L.map(function(oe,ie){return oe=oe.replace(V,"$1"),ie===0&&ee&&(oe=oe.replace(reLeadingNewline,"")),ie===re-1&&te&&(oe=oe.replace(reTrailingNewline,"")),ne&&(oe=oe.replace(/\r\n|\n|\r/g,function(ue){return K})),oe});return le}function concatStringsAndValues(L,A){for(var _="",W=0,B=L.length;W<B;W++)_+=L[W],W<B-1&&(_+=A[W]);return _}function isTemplateStringsArray(L){return has(L,"raw")&&has(L,"length")}function createInstance(L){var A=createWeakMap(),_=createWeakMap();function W(G){for(var V=[],K=1;K<arguments.length;K++)V[K-1]=arguments[K];if(isTemplateStringsArray(G)){var ee=G,te=(V[0]===W||V[0]===defaultOutdent)&&reOnlyWhitespaceWithAtLeastOneNewline.test(ee[0])&&reStartsWithNewlineOrIsEmpty.test(ee[1]),ne=te?_:A,re=ne.get(ee);if(re||(re=_outdentArray(ee,te,L),ne.set(ee,re)),V.length===0)return re[0];var le=concatStringsAndValues(re,te?V.slice(1):V);return le}else return createInstance(extend(extend({},L),G||{}))}var B=extend(W,{string:function(G){return _outdentArray([G],!1,L)[0]}});return B}var defaultOutdent=createInstance({trimLeadingNewline:!0,trimTrailingNewline:!0});if(typeof module<"u")try{module.exports=defaultOutdent,Object.defineProperty(defaultOutdent,"__esModule",{value:!0}),defaultOutdent.default=defaultOutdent,defaultOutdent.outdent=defaultOutdent}catch{}const globalScope=typeof window<"u"?window:{},originalConsole=globalScope.console;function CodeRunner(props){const[code,setCode]=reactExports.useState(defaultOutdent.string(props.code)),[isOpen,setIsOpen]=reactExports.useState(!1),[output,setOutput]=reactExports.useState(""),console={log:L=>{const A=typeof L=="string"?L:JSON.stringify(L);setOutput(_=>_+A+`
`)}},run=()=>{setOutput(""),globalScope.console=console;try{eval((props.context??"")+";"+code)}catch(L){console.log(L.message)}globalScope.console=originalConsole,props.transformOutput&&setOutput(props.transformOutput)};return jsxRuntimeExports.jsxs("div",{className:"code-runner",children:[props.context&&jsxRuntimeExports.jsxs("div",{className:"code-runner-show-context",children:[jsxRuntimeExports.jsx("button",{className:"sm",title:"The context is code executed before this snippet but not relevant to the example.",onClick:()=>setIsOpen(!0),children:"Show context"}),jsxRuntimeExports.jsxs(_t,{className:"modal",open:isOpen,onClose:()=>setIsOpen(!1),children:[jsxRuntimeExports.jsx("div",{className:"modal-backdrop",onClick:()=>setIsOpen(!1)}),jsxRuntimeExports.jsx("div",{className:"modal-panel",children:jsxRuntimeExports.jsxs(_t.Panel,{children:[jsxRuntimeExports.jsx(_t.Title,{children:"Code runner context"}),jsxRuntimeExports.jsx(_t.Description,{children:"The context code is run before the snippet inside the code runner is executed. It contains code that isn't directly relevant to the example."}),jsxRuntimeExports.jsx("pre",{children:defaultOutdent.string(props.context??"")}),jsxRuntimeExports.jsx("div",{className:"modal-actions",children:jsxRuntimeExports.jsx("button",{onClick:()=>setIsOpen(!1),children:"Close"})})]})})]})]}),jsxRuntimeExports.jsx("textarea",{style:{"--lines":props.codeLines},onChange:L=>setCode(L.target.value),value:code}),jsxRuntimeExports.jsx("button",{onClick:run,children:"Run"}),jsxRuntimeExports.jsx("textarea",{style:{"--lines":props.consoleLines},disabled:!0,value:output})]})}function ExampleStack(){const L=`
    function printStackTrace() {
      console.log(new Error().stack)
    }
    function useCallback(fn) { return fn }
  `;return jsxRuntimeExports.jsxs("div",{className:"row mb-1",children:[jsxRuntimeExports.jsx(CodeRunner,{transformOutput,consoleLines:6,codeLines:13,code:`
          class Component {
            a() { this.b() }
            b() { this.c() }
            c() { this.d() }
            d() { this.e() }
            e() {
              printStackTrace()
            }
          }

          new Component().a()
        `,context:L}),jsxRuntimeExports.jsx(CodeRunner,{transformOutput,consoleLines:6,codeLines:13,code:`
          function Component() {
            const a = useCallback(() => { b() }, [])
            const b = useCallback(() => { c() }, [])
            const c = useCallback(() => { d() }, [])
            const d = useCallback(() => { e() }, [])
            const e = useCallback(() => {
              printStackTrace()
            }, [])
            return a
          }

          Component()()
        `,context:L})]})}function transformOutput(L){return L.split(`
`).slice(0,6).join(`
`).replace(/Error\s+/m,"").replaceAll(/^\s*(at )?eval/gm,"<anonymous>").replaceAll(/^\s*(at )?/gm,"")}const CONTEXT=`
function cuid() { return 42 }
function createRef() { return { current: null } }

let currentContext = null
const contexts = []

function nextContext() {
  return (currentContext = currentContext.next ??= { value: null, next: null })
}

function useRef() {
  nextContext()
  return (currentContext.value ??= { current: null })
}
function useState(s) {
  nextContext()
  if (currentContext.value)
    return [currentContext.value[0], currentContext.value[1]]
  return (currentContext.value = [s, () => {}])
}
function useCallback(fn, d) {
  nextContext()
  return (currentContext.value ??= fn)
}
`,CLASS_VERSION=`
  class Selector {
    id = cuid()
    ref = createRef()
    position = { x: 0, y: 0}

    state = {
      open: false,
      loading: false,
      disabled: false,
      selectedIndex: -1,
    }

    open() {}
    close() {}
    select(index) {}
    focus() {}

    render() {
      return '<div>Hello</div>'
    }
  }

  const start = Date.now()
  const elements = Array.from({ length: 3000 })
    .map(() => new Selector())
  for (let i = 0; i < 5; i++) {
    elements.forEach(e => e.render())
  }
  const end = Date.now()
  console.log((end - start) + 'ms')
`,FUNCTION_VERSION=`
  function Selector(props) {
    const id = useRef(cuid())
    const ref = useRef()
    const position = useRef({ x: 0, y: 0 })

    const [isOpen, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const open = useCallback(() => {}, [])
    const close = useCallback(() => {}, [])
    const select = useCallback((index) => {}, [])
    const focus = useCallback(() => {}, [])

    return '<div>Hello</div>'
  }

  const start = Date.now()
  const elements = Array.from({ length: 3000 })
    .map((_, i) => (contexts[i] = { value: null, next: null }))
  for (let i = 0; i < 5; i++) {
    elements.forEach((_, i) => (currentContext = contexts[i], Selector()))
  }
  const end = Date.now()
  console.log((end - start) + 'ms')
`;function ExamplePerformance(){return jsxRuntimeExports.jsxs("div",{className:"row mb-1",children:[jsxRuntimeExports.jsx(CodeRunner,{context:CONTEXT,code:CLASS_VERSION,codeLines:10}),jsxRuntimeExports.jsx(CodeRunner,{context:CONTEXT,code:FUNCTION_VERSION,codeLines:10})]})}export{ExamplePerformance,ExampleStack};