const Z="growi-plugin-script-template",ee="1.0.0",te="GROWI plugin template for script",ne="MIT",re=["growi","growi-plugin"],oe="module",ue={dev:"vite",build:"tsc && vite build",preview:"vite preview"},ie={react:"^18.3.1","react-dom":"^18.3.1","react-innertext":"^1.1.5"},ce={"@types/react":"^18.3.3","@types/react-dom":"^18.3.0","@typescript-eslint/eslint-plugin":"^5.0.0","@typescript-eslint/parser":"^5.0.0","@vitejs/plugin-react":"^4.3.1",eslint:"^8.18.0","eslint-config-next":"^14.2.4","eslint-config-weseek":"^2.1.0","eslint-import-resolver-typescript":"^3.2.5","eslint-plugin-import":"^2.29.1","eslint-plugin-jest":"^27.1.0","eslint-plugin-react":"^7.30.1","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-regex":"^1.10.0",jest:"^29.7.0",typescript:"^5.5.2",vite:"^5.3.2"},se={schemaVersion:"4",types:["script"]},le={name:Z,version:ee,description:te,license:ne,keywords:re,type:oe,scripts:ue,dependencies:ie,devDependencies:ce,growiPlugin:se};var L={exports:{}},E={},U={exports:{}},i={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=Symbol.for("react.element"),fe=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),he=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),_e=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),A=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=A&&e[A]||e["@@iterator"],typeof e=="function"?e:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,M={};function m(e,t,n){this.props=e,this.context=t,this.refs=M,this.updater=n||G}m.prototype.isReactComponent={};m.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function B(){}B.prototype=m.prototype;function R(e,t,n){this.props=e,this.context=t,this.refs=M,this.updater=n||G}var P=R.prototype=new B;P.constructor=R;q(P,m.prototype);P.isPureReactComponent=!0;var I=Array.isArray,W=Object.prototype.hasOwnProperty,O={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function H(e,t,n){var r,o={},u=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(u=""+t.key),t)W.call(t,r)&&!z.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:g,type:e,key:u,ref:s,props:o,_owner:O.current}}function ke(e,t){return{$$typeof:g,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $(e){return typeof e=="object"&&e!==null&&e.$$typeof===g}function Se(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var F=/\/+/g;function x(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Se(""+e.key):t.toString(36)}function k(e,t,n,r,o){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case g:case fe:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+x(s,0):r,I(o)?(n="",e!=null&&(n=e.replace(F,"$&/")+"/"),k(o,t,n,"",function(f){return f})):o!=null&&($(o)&&(o=ke(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(F,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",I(e))for(var l=0;l<e.length;l++){u=e[l];var c=r+x(u,l);s+=k(u,t,n,c,o)}else if(c=we(e),typeof c=="function")for(e=c.call(e),l=0;!(u=e.next()).done;)u=u.value,c=r+x(u,l++),s+=k(u,t,n,c,o);else if(u==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function w(e,t,n){if(e==null)return e;var r=[],o=0;return k(e,r,"","",function(u){return t.call(n,u,o++)}),r}function Ee(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var p={current:null},S={transition:null},be={ReactCurrentDispatcher:p,ReactCurrentBatchConfig:S,ReactCurrentOwner:O};i.Children={map:w,forEach:function(e,t,n){w(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return w(e,function(){t++}),t},toArray:function(e){return w(e,function(t){return t})||[]},only:function(e){if(!$(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};i.Component=m;i.Fragment=pe;i.Profiler=ye;i.PureComponent=R;i.StrictMode=ae;i.Suspense=ve;i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=be;i.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=q({},e.props),o=e.key,u=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(u=t.ref,s=O.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)W.call(t,c)&&!z.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];r.children=l}return{$$typeof:g,type:e.type,key:o,ref:u,props:r,_owner:s}};i.createContext=function(e){return e={$$typeof:he,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:de,_context:e},e.Consumer=e};i.createElement=H;i.createFactory=function(e){var t=H.bind(null,e);return t.type=e,t};i.createRef=function(){return{current:null}};i.forwardRef=function(e){return{$$typeof:me,render:e}};i.isValidElement=$;i.lazy=function(e){return{$$typeof:ge,_payload:{_status:-1,_result:e},_init:Ee}};i.memo=function(e,t){return{$$typeof:_e,type:e,compare:t===void 0?null:t}};i.startTransition=function(e){var t=S.transition;S.transition={};try{e()}finally{S.transition=t}};i.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};i.useCallback=function(e,t){return p.current.useCallback(e,t)};i.useContext=function(e){return p.current.useContext(e)};i.useDebugValue=function(){};i.useDeferredValue=function(e){return p.current.useDeferredValue(e)};i.useEffect=function(e,t){return p.current.useEffect(e,t)};i.useId=function(){return p.current.useId()};i.useImperativeHandle=function(e,t,n){return p.current.useImperativeHandle(e,t,n)};i.useInsertionEffect=function(e,t){return p.current.useInsertionEffect(e,t)};i.useLayoutEffect=function(e,t){return p.current.useLayoutEffect(e,t)};i.useMemo=function(e,t){return p.current.useMemo(e,t)};i.useReducer=function(e,t,n){return p.current.useReducer(e,t,n)};i.useRef=function(e){return p.current.useRef(e)};i.useState=function(e){return p.current.useState(e)};i.useSyncExternalStore=function(e,t,n){return p.current.useSyncExternalStore(e,t,n)};i.useTransition=function(){return p.current.useTransition()};i.version="18.2.0";U.exports=i;var xe=U.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=xe,Pe=Symbol.for("react.element"),Oe=Symbol.for("react.fragment"),$e=Object.prototype.hasOwnProperty,je=Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ce={key:!0,ref:!0,__self:!0,__source:!0};function J(e,t,n){var r,o={},u=null,s=null;n!==void 0&&(u=""+n),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)$e.call(t,r)&&!Ce.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Pe,type:e,key:u,ref:s,props:o,_owner:je.current}}E.Fragment=Oe;E.jsx=J;E.jsxs=J;L.exports=E;var Ae=L.exports;const K=function(e){if(e==null)return Te;if(typeof e=="function")return b(e);if(typeof e=="object")return Array.isArray(e)?Ie(e):Fe(e);if(typeof e=="string")return Ne(e);throw new Error("Expected function, string, or object as test")};function Ie(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=K(e[n]);return b(r);function r(...o){let u=-1;for(;++u<t.length;)if(t[u].apply(this,o))return!0;return!1}}function Fe(e){const t=e;return b(n);function n(r){const o=r;let u;for(u in e)if(o[u]!==t[u])return!1;return!0}}function Ne(e){return b(t);function t(n){return n&&n.type===e}}function b(e){return t;function t(n,r,o){return!!(De(n)&&e.call(this,n,typeof r=="number"?r:void 0,o||void 0))}}function Te(){return!0}function De(e){return e!==null&&typeof e=="object"&&"type"in e}const Y=[],Ve=!0,N=!1,Le="skip";function Ue(e,t,n,r){let o;typeof t=="function"&&typeof n!="function"?(r=n,n=t):o=t;const u=K(o),s=r?-1:1;l(e,void 0,[])();function l(c,f,a){const d=c&&typeof c=="object"?c:{};if(typeof d.type=="string"){const y=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(j,"name",{value:"node ("+(c.type+(y?"<"+y+">":""))+")"})}return j;function j(){let y=Y,v,h,C;if((!t||u(c,f,a[a.length-1]||void 0))&&(y=Ge(n(c,a)),y[0]===N))return y;if("children"in c&&c.children){const _=c;if(_.children&&y[0]!==Le)for(h=(r?_.children.length:-1)+s,C=a.concat(_);h>-1&&h<_.children.length;){const X=_.children[h];if(v=l(X,h,C)(),v[0]===N)return v;h=typeof v[1]=="number"?v[1]:h+s}}return y}}}function Ge(e){return Array.isArray(e)?e:typeof e=="number"?[Ve,e]:e==null?Y:[e]}function Q(e,t,n,r){let o,u,s;typeof t=="function"&&typeof n!="function"?(u=void 0,s=t,o=n):(u=t,s=n,o=r),Ue(e,u,l,o);function l(c,f){const a=f[f.length-1],d=a?a.children.indexOf(c):void 0;return s(c,d,a)}}const T=e=>({children:t,...n})=>Ae.jsx(e,{...n,children:t}),D=()=>e=>{Q(e,t=>{const n=t;if(n.name!=="plugin")return;const r=n.data||(n.data={}),{value:o}=n.children[0];r.hName="a",r.hChildren=[{type:"text",value:`${o}, growi!`}],r.hProperties={href:"https://example.com/rss",title:JSON.stringify(n.attributes)}})},V=()=>e=>{Q(e,"text",t=>{const n=t,{value:r}=n;n.value=`${r} 😄`})},qe=()=>{if(growiFacade==null||growiFacade.markdownRenderer==null)return;const{optionsGenerators:e}=growiFacade.markdownRenderer,t=e.customGenerateViewOptions;e.customGenerateViewOptions=(...r)=>{const o=t?t(...r):e.generateViewOptions(...r),u=o.components.a;return o.components.a=T(u),o.remarkPlugins.push(D),o.rehypePlugins.push(V),o};const n=e.customGeneratePreviewOptions;e.customGeneratePreviewOptions=(...r)=>{const o=n?n(...r):e.generatePreviewOptions(...r),{a:u}=o.components;return o.components.a=T(u),o.remarkPlugins.push(D),o.rehypePlugins.push(V),o}},Me=()=>{};window.pluginActivators==null&&(window.pluginActivators={});window.pluginActivators[le.name]={activate:qe,deactivate:Me};