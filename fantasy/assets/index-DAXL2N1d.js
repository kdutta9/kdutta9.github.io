(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))y(N);new MutationObserver(N=>{for(const E of N)if(E.type==="childList")for(const D of E.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&y(D)}).observe(document,{childList:!0,subtree:!0});function u(N){const E={};return N.integrity&&(E.integrity=N.integrity),N.referrerPolicy&&(E.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?E.credentials="include":N.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function y(N){if(N.ep)return;N.ep=!0;const E=u(N);fetch(N.href,E)}})();var Br={exports:{}},So={},Lr={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function ec(){if(Dh)return U;Dh=1;var i=Symbol.for("react.element"),f=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),D=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),z=Symbol.iterator;function W(p){return p===null||typeof p!="object"?null:(p=z&&p[z]||p["@@iterator"],typeof p=="function"?p:null)}var be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ge=Object.assign,ae={};function X(p,v,F){this.props=p,this.context=v,this.refs=ae,this.updater=F||be}X.prototype.isReactComponent={},X.prototype.setState=function(p,v){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,v,"setState")},X.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function vn(){}vn.prototype=X.prototype;function cn(p,v,F){this.props=p,this.context=v,this.refs=ae,this.updater=F||be}var en=cn.prototype=new vn;en.constructor=cn,Ge(en,X.prototype),en.isPureReactComponent=!0;var Te=Array.isArray,nn=Object.prototype.hasOwnProperty,je={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Je(p,v,F){var G,Y={},V=null,ee=null;if(v!=null)for(G in v.ref!==void 0&&(ee=v.ref),v.key!==void 0&&(V=""+v.key),v)nn.call(v,G)&&!Pe.hasOwnProperty(G)&&(Y[G]=v[G]);var q=arguments.length-2;if(q===1)Y.children=F;else if(1<q){for(var se=Array(q),_e=0;_e<q;_e++)se[_e]=arguments[_e+2];Y.children=se}if(p&&p.defaultProps)for(G in q=p.defaultProps,q)Y[G]===void 0&&(Y[G]=q[G]);return{$$typeof:i,type:p,key:V,ref:ee,props:Y,_owner:je.current}}function An(p,v){return{$$typeof:i,type:p.type,key:v,ref:p.ref,props:p.props,_owner:p._owner}}function bn(p){return typeof p=="object"&&p!==null&&p.$$typeof===i}function Xn(p){var v={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(F){return v[F]})}var fn=/\/+/g;function Ie(p,v){return typeof p=="object"&&p!==null&&p.key!=null?Xn(""+p.key):v.toString(36)}function tn(p,v,F,G,Y){var V=typeof p;(V==="undefined"||V==="boolean")&&(p=null);var ee=!1;if(p===null)ee=!0;else switch(V){case"string":case"number":ee=!0;break;case"object":switch(p.$$typeof){case i:case f:ee=!0}}if(ee)return ee=p,Y=Y(ee),p=G===""?"."+Ie(ee,0):G,Te(Y)?(F="",p!=null&&(F=p.replace(fn,"$&/")+"/"),tn(Y,v,F,"",function(_e){return _e})):Y!=null&&(bn(Y)&&(Y=An(Y,F+(!Y.key||ee&&ee.key===Y.key?"":(""+Y.key).replace(fn,"$&/")+"/")+p)),v.push(Y)),1;if(ee=0,G=G===""?".":G+":",Te(p))for(var q=0;q<p.length;q++){V=p[q];var se=G+Ie(V,q);ee+=tn(V,v,F,se,Y)}else if(se=W(p),typeof se=="function")for(p=se.call(p),q=0;!(V=p.next()).done;)V=V.value,se=G+Ie(V,q++),ee+=tn(V,v,F,se,Y);else if(V==="object")throw v=String(p),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.");return ee}function pn(p,v,F){if(p==null)return p;var G=[],Y=0;return tn(p,G,"","",function(V){return v.call(F,V,Y++)}),G}function Ae(p){if(p._status===-1){var v=p._result;v=v(),v.then(function(F){(p._status===0||p._status===-1)&&(p._status=1,p._result=F)},function(F){(p._status===0||p._status===-1)&&(p._status=2,p._result=F)}),p._status===-1&&(p._status=0,p._result=v)}if(p._status===1)return p._result.default;throw p._result}var he={current:null},j={transition:null},I={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:j,ReactCurrentOwner:je};function L(){throw Error("act(...) is not supported in production builds of React.")}return U.Children={map:pn,forEach:function(p,v,F){pn(p,function(){v.apply(this,arguments)},F)},count:function(p){var v=0;return pn(p,function(){v++}),v},toArray:function(p){return pn(p,function(v){return v})||[]},only:function(p){if(!bn(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},U.Component=X,U.Fragment=u,U.Profiler=N,U.PureComponent=cn,U.StrictMode=y,U.Suspense=S,U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,U.act=L,U.cloneElement=function(p,v,F){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var G=Ge({},p.props),Y=p.key,V=p.ref,ee=p._owner;if(v!=null){if(v.ref!==void 0&&(V=v.ref,ee=je.current),v.key!==void 0&&(Y=""+v.key),p.type&&p.type.defaultProps)var q=p.type.defaultProps;for(se in v)nn.call(v,se)&&!Pe.hasOwnProperty(se)&&(G[se]=v[se]===void 0&&q!==void 0?q[se]:v[se])}var se=arguments.length-2;if(se===1)G.children=F;else if(1<se){q=Array(se);for(var _e=0;_e<se;_e++)q[_e]=arguments[_e+2];G.children=q}return{$$typeof:i,type:p.type,key:Y,ref:V,props:G,_owner:ee}},U.createContext=function(p){return p={$$typeof:D,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:E,_context:p},p.Consumer=p},U.createElement=Je,U.createFactory=function(p){var v=Je.bind(null,p);return v.type=p,v},U.createRef=function(){return{current:null}},U.forwardRef=function(p){return{$$typeof:H,render:p}},U.isValidElement=bn,U.lazy=function(p){return{$$typeof:$,_payload:{_status:-1,_result:p},_init:Ae}},U.memo=function(p,v){return{$$typeof:O,type:p,compare:v===void 0?null:v}},U.startTransition=function(p){var v=j.transition;j.transition={};try{p()}finally{j.transition=v}},U.unstable_act=L,U.useCallback=function(p,v){return he.current.useCallback(p,v)},U.useContext=function(p){return he.current.useContext(p)},U.useDebugValue=function(){},U.useDeferredValue=function(p){return he.current.useDeferredValue(p)},U.useEffect=function(p,v){return he.current.useEffect(p,v)},U.useId=function(){return he.current.useId()},U.useImperativeHandle=function(p,v,F){return he.current.useImperativeHandle(p,v,F)},U.useInsertionEffect=function(p,v){return he.current.useInsertionEffect(p,v)},U.useLayoutEffect=function(p,v){return he.current.useLayoutEffect(p,v)},U.useMemo=function(p,v){return he.current.useMemo(p,v)},U.useReducer=function(p,v,F){return he.current.useReducer(p,v,F)},U.useRef=function(p){return he.current.useRef(p)},U.useState=function(p){return he.current.useState(p)},U.useSyncExternalStore=function(p,v,F){return he.current.useSyncExternalStore(p,v,F)},U.useTransition=function(){return he.current.useTransition()},U.version="18.3.1",U}var Oh;function Or(){return Oh||(Oh=1,Lr.exports=ec()),Lr.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function nc(){if(Mh)return So;Mh=1;var i=Or(),f=Symbol.for("react.element"),u=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,N=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function D(H,S,O){var $,z={},W=null,be=null;O!==void 0&&(W=""+O),S.key!==void 0&&(W=""+S.key),S.ref!==void 0&&(be=S.ref);for($ in S)y.call(S,$)&&!E.hasOwnProperty($)&&(z[$]=S[$]);if(H&&H.defaultProps)for($ in S=H.defaultProps,S)z[$]===void 0&&(z[$]=S[$]);return{$$typeof:f,type:H,key:W,ref:be,props:z,_owner:N.current}}return So.Fragment=u,So.jsx=D,So.jsxs=D,So}var Kh;function tc(){return Kh||(Kh=1,Br.exports=nc()),Br.exports}var l=tc(),Pn=Or(),Da={},Pr={exports:{}},Ke={},Ar={exports:{}},Rr={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function oc(){return Ih||(Ih=1,(function(i){function f(j,I){var L=j.length;j.push(I);e:for(;0<L;){var p=L-1>>>1,v=j[p];if(0<N(v,I))j[p]=I,j[L]=v,L=p;else break e}}function u(j){return j.length===0?null:j[0]}function y(j){if(j.length===0)return null;var I=j[0],L=j.pop();if(L!==I){j[0]=L;e:for(var p=0,v=j.length,F=v>>>1;p<F;){var G=2*(p+1)-1,Y=j[G],V=G+1,ee=j[V];if(0>N(Y,L))V<v&&0>N(ee,Y)?(j[p]=ee,j[V]=L,p=V):(j[p]=Y,j[G]=L,p=G);else if(V<v&&0>N(ee,L))j[p]=ee,j[V]=L,p=V;else break e}}return I}function N(j,I){var L=j.sortIndex-I.sortIndex;return L!==0?L:j.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;i.unstable_now=function(){return E.now()}}else{var D=Date,H=D.now();i.unstable_now=function(){return D.now()-H}}var S=[],O=[],$=1,z=null,W=3,be=!1,Ge=!1,ae=!1,X=typeof setTimeout=="function"?setTimeout:null,vn=typeof clearTimeout=="function"?clearTimeout:null,cn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function en(j){for(var I=u(O);I!==null;){if(I.callback===null)y(O);else if(I.startTime<=j)y(O),I.sortIndex=I.expirationTime,f(S,I);else break;I=u(O)}}function Te(j){if(ae=!1,en(j),!Ge)if(u(S)!==null)Ge=!0,Ae(nn);else{var I=u(O);I!==null&&he(Te,I.startTime-j)}}function nn(j,I){Ge=!1,ae&&(ae=!1,vn(Je),Je=-1),be=!0;var L=W;try{for(en(I),z=u(S);z!==null&&(!(z.expirationTime>I)||j&&!Xn());){var p=z.callback;if(typeof p=="function"){z.callback=null,W=z.priorityLevel;var v=p(z.expirationTime<=I);I=i.unstable_now(),typeof v=="function"?z.callback=v:z===u(S)&&y(S),en(I)}else y(S);z=u(S)}if(z!==null)var F=!0;else{var G=u(O);G!==null&&he(Te,G.startTime-I),F=!1}return F}finally{z=null,W=L,be=!1}}var je=!1,Pe=null,Je=-1,An=5,bn=-1;function Xn(){return!(i.unstable_now()-bn<An)}function fn(){if(Pe!==null){var j=i.unstable_now();bn=j;var I=!0;try{I=Pe(!0,j)}finally{I?Ie():(je=!1,Pe=null)}}else je=!1}var Ie;if(typeof cn=="function")Ie=function(){cn(fn)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,pn=tn.port2;tn.port1.onmessage=fn,Ie=function(){pn.postMessage(null)}}else Ie=function(){X(fn,0)};function Ae(j){Pe=j,je||(je=!0,Ie())}function he(j,I){Je=X(function(){j(i.unstable_now())},I)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_continueExecution=function(){Ge||be||(Ge=!0,Ae(nn))},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):An=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return W},i.unstable_getFirstCallbackNode=function(){return u(S)},i.unstable_next=function(j){switch(W){case 1:case 2:case 3:var I=3;break;default:I=W}var L=W;W=I;try{return j()}finally{W=L}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=W;W=j;try{return I()}finally{W=L}},i.unstable_scheduleCallback=function(j,I,L){var p=i.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?p+L:p):L=p,j){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=L+v,j={id:$++,callback:I,priorityLevel:j,startTime:L,expirationTime:v,sortIndex:-1},L>p?(j.sortIndex=L,f(O,j),u(S)===null&&j===u(O)&&(ae?(vn(Je),Je=-1):ae=!0,he(Te,L-p))):(j.sortIndex=v,f(S,j),Ge||be||(Ge=!0,Ae(nn))),j},i.unstable_shouldYield=Xn,i.unstable_wrapCallback=function(j){var I=W;return function(){var L=W;W=I;try{return j.apply(this,arguments)}finally{W=L}}}})(Rr)),Rr}var _h;function ac(){return _h||(_h=1,Ar.exports=oc()),Ar.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function sc(){if(zh)return Ke;zh=1;var i=Or(),f=ac();function u(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,N={};function E(e,n){D(e,n),D(e+"Capture",n)}function D(e,n){for(N[e]=n,e=0;e<n.length;e++)y.add(n[e])}var H=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,O=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$={},z={};function W(e){return S.call(z,e)?!0:S.call($,e)?!1:O.test(e)?z[e]=!0:($[e]=!0,!1)}function be(e,n,t,o){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ge(e,n,t,o){if(n===null||typeof n>"u"||be(e,n,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,o,a,s,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=r}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new ae(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];X[n]=new ae(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new ae(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new ae(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new ae(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new ae(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var vn=/[\-:]([a-z])/g;function cn(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(vn,cn);X[n]=new ae(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(vn,cn);X[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(vn,cn);X[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function en(e,n,t,o){var a=X.hasOwnProperty(n)?X[n]:null;(a!==null?a.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ge(n,t,a,o)&&(t=null),o||a===null?W(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,o=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,o?e.setAttributeNS(o,n,t):e.setAttribute(n,t))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nn=Symbol.for("react.element"),je=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),An=Symbol.for("react.profiler"),bn=Symbol.for("react.provider"),Xn=Symbol.for("react.context"),fn=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),tn=Symbol.for("react.suspense_list"),pn=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),j=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,p;function v(e){if(p===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);p=n&&n[1]||""}return`
`+p+e}var F=!1;function G(e,n){if(!e||F)return"";F=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(w){var o=w}Reflect.construct(e,[],n)}else{try{n.call()}catch(w){o=w}e.call(n.prototype)}else{try{throw Error()}catch(w){o=w}e()}}catch(w){if(w&&o&&typeof w.stack=="string"){for(var a=w.stack.split(`
`),s=o.stack.split(`
`),r=a.length-1,h=s.length-1;1<=r&&0<=h&&a[r]!==s[h];)h--;for(;1<=r&&0<=h;r--,h--)if(a[r]!==s[h]){if(r!==1||h!==1)do if(r--,h--,0>h||a[r]!==s[h]){var d=`
`+a[r].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=r&&0<=h);break}}}finally{F=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?v(e):""}function Y(e){switch(e.tag){case 5:return v(e.type);case 16:return v("Lazy");case 13:return v("Suspense");case 19:return v("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function V(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case je:return"Portal";case An:return"Profiler";case Je:return"StrictMode";case Ie:return"Suspense";case tn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xn:return(e.displayName||"Context")+".Consumer";case bn:return(e._context.displayName||"Context")+".Provider";case fn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pn:return n=e.displayName||null,n!==null?n:V(e.type)||"Memo";case Ae:n=e._payload,e=e._init;try{return V(e(n))}catch{}}return null}function ee(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(n);case 8:return n===Je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _e(e){var n=se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(r){o=""+r,s.call(this,r)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(r){o=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function No(e){e._valueTracker||(e._valueTracker=_e(e))}function zr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),o="";return e&&(o=se(e)?e.checked?"true":"false":e.value),e=o,e!==t?(n.setValue(e),!0):!1}function Eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oa(e,n){var t=n.checked;return L({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Wr(e,n){var t=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;t=q(n.value!=null?n.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fr(e,n){n=n.checked,n!=null&&en(e,"checked",n,!1)}function Ma(e,n){Fr(e,n);var t=q(n.value),o=n.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ka(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ka(e,n.type,q(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ur(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ka(e,n,t){(n!=="number"||Eo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Kt=Array.isArray;function ft(e,n,t,o){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&o&&(e[t].defaultSelected=!0)}else{for(t=""+q(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Ia(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(u(91));return L({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gr(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(u(92));if(Kt(t)){if(1<t.length)throw Error(u(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:q(t)}}function Jr(e,n){var t=q(n.value),o=q(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function $r(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Yr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Yr(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,Vr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,o,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,o,a)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function It(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var _t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},au=["Webkit","ms","Moz","O"];Object.keys(_t).forEach(function(e){au.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_t[n]=_t[e]})});function Qr(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||_t.hasOwnProperty(e)&&_t[e]?(""+n).trim():n+"px"}function qr(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var o=t.indexOf("--")===0,a=Qr(t,n[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,a):e[t]=a}}var su=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function za(e,n){if(n){if(su[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(u(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(u(61))}if(n.style!=null&&typeof n.style!="object")throw Error(u(62))}}function Wa(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Ua(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,pt=null,mt=null;function Zr(e){if(e=lo(e)){if(typeof Ga!="function")throw Error(u(280));var n=e.stateNode;n&&(n=Qo(n),Ga(e.stateNode,e.type,n))}}function Xr(e){pt?mt?mt.push(e):mt=[e]:pt=e}function ei(){if(pt){var e=pt,n=mt;if(mt=pt=null,Zr(e),n)for(e=0;e<n.length;e++)Zr(n[e])}}function ni(e,n){return e(n)}function ti(){}var Ja=!1;function oi(e,n,t){if(Ja)return e(n,t);Ja=!0;try{return ni(e,n,t)}finally{Ja=!1,(pt!==null||mt!==null)&&(ti(),ei())}}function zt(e,n){var t=e.stateNode;if(t===null)return null;var o=Qo(t);if(o===null)return null;t=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var $a=!1;if(H)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){$a=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{$a=!1}function ru(e,n,t,o,a,s,r,h,d){var w=Array.prototype.slice.call(arguments,3);try{n.apply(t,w)}catch(b){this.onError(b)}}var Ft=!1,Co=null,Bo=!1,Ya=null,iu={onError:function(e){Ft=!0,Co=e}};function lu(e,n,t,o,a,s,r,h,d){Ft=!1,Co=null,ru.apply(iu,arguments)}function hu(e,n,t,o,a,s,r,h,d){if(lu.apply(this,arguments),Ft){if(Ft){var w=Co;Ft=!1,Co=null}else throw Error(u(198));Bo||(Bo=!0,Ya=w)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ai(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function si(e){if(et(e)!==e)throw Error(u(188))}function uu(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,o=n;;){var a=t.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){t=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===t)return si(a),e;if(s===o)return si(a),n;s=s.sibling}throw Error(u(188))}if(t.return!==o.return)t=a,o=s;else{for(var r=!1,h=a.child;h;){if(h===t){r=!0,t=a,o=s;break}if(h===o){r=!0,o=a,t=s;break}h=h.sibling}if(!r){for(h=s.child;h;){if(h===t){r=!0,t=s,o=a;break}if(h===o){r=!0,o=s,t=a;break}h=h.sibling}if(!r)throw Error(u(189))}}if(t.alternate!==o)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function ri(e){return e=uu(e),e!==null?ii(e):null}function ii(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ii(e);if(n!==null)return n;e=e.sibling}return null}var li=f.unstable_scheduleCallback,hi=f.unstable_cancelCallback,du=f.unstable_shouldYield,cu=f.unstable_requestPaint,de=f.unstable_now,fu=f.unstable_getCurrentPriorityLevel,Va=f.unstable_ImmediatePriority,ui=f.unstable_UserBlockingPriority,Lo=f.unstable_NormalPriority,pu=f.unstable_LowPriority,di=f.unstable_IdlePriority,Po=null,mn=null;function mu(e){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:yu,gu=Math.log,wu=Math.LN2;function yu(e){return e>>>=0,e===0?32:31-(gu(e)/wu|0)|0}var Ao=64,Ro=4194304;function Ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,n){var t=e.pendingLanes;if(t===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,r=t&268435455;if(r!==0){var h=r&~a;h!==0?o=Ut(h):(s&=r,s!==0&&(o=Ut(s)))}else r=t&~a,r!==0?o=Ut(r):s!==0&&(o=Ut(s));if(o===0)return 0;if(n!==0&&n!==o&&(n&a)===0&&(a=o&-o,s=n&-n,a>=s||a===16&&(s&4194240)!==0))return n;if((o&4)!==0&&(o|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=o;0<n;)t=31-on(n),a=1<<t,o|=e[t],n&=~a;return o}function ku(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(e,n){for(var t=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var r=31-on(s),h=1<<r,d=a[r];d===-1?((h&t)===0||(h&o)!==0)&&(a[r]=ku(h,n)):d<=n&&(e.expiredLanes|=h),s&=~h}}function Qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ci(){var e=Ao;return Ao<<=1,(Ao&4194240)===0&&(Ao=64),e}function qa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Gt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-on(n),e[n]=t}function bu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-on(t),s=1<<a;n[a]=0,o[a]=-1,e[a]=-1,t&=~s}}function Za(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var o=31-on(t),a=1<<o;a&n|e[o]&n&&(e[o]|=n),t&=~a}}var Z=0;function fi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pi,Xa,mi,gi,wi,es=!1,Do=[],Rn=null,Hn=null,Dn=null,Jt=new Map,$t=new Map,On=[],Tu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yi(e,n){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$t.delete(n.pointerId)}}function Yt(e,n,t,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},n!==null&&(n=lo(n),n!==null&&Xa(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function xu(e,n,t,o,a){switch(n){case"focusin":return Rn=Yt(Rn,e,n,t,o,a),!0;case"dragenter":return Hn=Yt(Hn,e,n,t,o,a),!0;case"mouseover":return Dn=Yt(Dn,e,n,t,o,a),!0;case"pointerover":var s=a.pointerId;return Jt.set(s,Yt(Jt.get(s)||null,e,n,t,o,a)),!0;case"gotpointercapture":return s=a.pointerId,$t.set(s,Yt($t.get(s)||null,e,n,t,o,a)),!0}return!1}function ki(e){var n=nt(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=ai(t),n!==null){e.blockedOn=n,wi(e.priority,function(){mi(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ts(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Fa=o,t.target.dispatchEvent(o),Fa=null}else return n=lo(t),n!==null&&Xa(n),e.blockedOn=t,!1;n.shift()}return!0}function vi(e,n,t){Oo(e)&&t.delete(n)}function Su(){es=!1,Rn!==null&&Oo(Rn)&&(Rn=null),Hn!==null&&Oo(Hn)&&(Hn=null),Dn!==null&&Oo(Dn)&&(Dn=null),Jt.forEach(vi),$t.forEach(vi)}function Vt(e,n){e.blockedOn===n&&(e.blockedOn=null,es||(es=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,Su)))}function Qt(e){function n(a){return Vt(a,e)}if(0<Do.length){Vt(Do[0],e);for(var t=1;t<Do.length;t++){var o=Do[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Rn!==null&&Vt(Rn,e),Hn!==null&&Vt(Hn,e),Dn!==null&&Vt(Dn,e),Jt.forEach(n),$t.forEach(n),t=0;t<On.length;t++)o=On[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<On.length&&(t=On[0],t.blockedOn===null);)ki(t),t.blockedOn===null&&On.shift()}var gt=Te.ReactCurrentBatchConfig,Mo=!0;function Nu(e,n,t,o){var a=Z,s=gt.transition;gt.transition=null;try{Z=1,ns(e,n,t,o)}finally{Z=a,gt.transition=s}}function Eu(e,n,t,o){var a=Z,s=gt.transition;gt.transition=null;try{Z=4,ns(e,n,t,o)}finally{Z=a,gt.transition=s}}function ns(e,n,t,o){if(Mo){var a=ts(e,n,t,o);if(a===null)ks(e,n,o,Ko,t),yi(e,o);else if(xu(a,e,n,t,o))o.stopPropagation();else if(yi(e,o),n&4&&-1<Tu.indexOf(e)){for(;a!==null;){var s=lo(a);if(s!==null&&pi(s),s=ts(e,n,t,o),s===null&&ks(e,n,o,Ko,t),s===a)break;a=s}a!==null&&o.stopPropagation()}else ks(e,n,o,null,t)}}var Ko=null;function ts(e,n,t,o){if(Ko=null,e=Ua(o),e=nt(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ai(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ko=e,null}function bi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fu()){case Va:return 1;case ui:return 4;case Lo:case pu:return 16;case di:return 536870912;default:return 16}default:return 16}}var Mn=null,os=null,Io=null;function Ti(){if(Io)return Io;var e,n=os,t=n.length,o,a="value"in Mn?Mn.value:Mn.textContent,s=a.length;for(e=0;e<t&&n[e]===a[e];e++);var r=t-e;for(o=1;o<=r&&n[t-o]===a[s-o];o++);return Io=a.slice(e,1<o?1-o:void 0)}function _o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function xi(){return!1}function ze(e){function n(t,o,a,s,r){this._reactName=t,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zo:xi,this.isPropagationStopped=xi,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=ze(wt),qt=L({},wt,{view:0,detail:0}),ju=ze(qt),ss,rs,Zt,Wo=L({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zt&&(Zt&&e.type==="mousemove"?(ss=e.screenX-Zt.screenX,rs=e.screenY-Zt.screenY):rs=ss=0,Zt=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),Si=ze(Wo),Cu=L({},Wo,{dataTransfer:0}),Bu=ze(Cu),Lu=L({},qt,{relatedTarget:0}),is=ze(Lu),Pu=L({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Au=ze(Pu),Ru=L({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hu=ze(Ru),Du=L({},wt,{data:0}),Ni=ze(Du),Ou={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ku[e])?!!n[e]:!1}function ls(){return Iu}var _u=L({},qt,{key:function(e){if(e.key){var n=Ou[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zu=ze(_u),Wu=L({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ei=ze(Wu),Fu=L({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),Uu=ze(Fu),Gu=L({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ju=ze(Gu),$u=L({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yu=ze($u),Vu=[9,13,27,32],hs=H&&"CompositionEvent"in window,Xt=null;H&&"documentMode"in document&&(Xt=document.documentMode);var Qu=H&&"TextEvent"in window&&!Xt,ji=H&&(!hs||Xt&&8<Xt&&11>=Xt),Ci=" ",Bi=!1;function Li(e,n){switch(e){case"keyup":return Vu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yt=!1;function qu(e,n){switch(e){case"compositionend":return Pi(n);case"keypress":return n.which!==32?null:(Bi=!0,Ci);case"textInput":return e=n.data,e===Ci&&Bi?null:e;default:return null}}function Zu(e,n){if(yt)return e==="compositionend"||!hs&&Li(e,n)?(e=Ti(),Io=os=Mn=null,yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ji&&n.locale!=="ko"?null:n.data;default:return null}}var Xu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ai(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xu[e.type]:n==="textarea"}function Ri(e,n,t,o){Xr(o),n=$o(n,"onChange"),0<n.length&&(t=new as("onChange","change",null,t,o),e.push({event:t,listeners:n}))}var eo=null,no=null;function ed(e){qi(e,0)}function Fo(e){var n=xt(e);if(zr(n))return e}function nd(e,n){if(e==="change")return n}var Hi=!1;if(H){var us;if(H){var ds="oninput"in document;if(!ds){var Di=document.createElement("div");Di.setAttribute("oninput","return;"),ds=typeof Di.oninput=="function"}us=ds}else us=!1;Hi=us&&(!document.documentMode||9<document.documentMode)}function Oi(){eo&&(eo.detachEvent("onpropertychange",Mi),no=eo=null)}function Mi(e){if(e.propertyName==="value"&&Fo(no)){var n=[];Ri(n,no,e,Ua(e)),oi(ed,n)}}function td(e,n,t){e==="focusin"?(Oi(),eo=n,no=t,eo.attachEvent("onpropertychange",Mi)):e==="focusout"&&Oi()}function od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(no)}function ad(e,n){if(e==="click")return Fo(n)}function sd(e,n){if(e==="input"||e==="change")return Fo(n)}function rd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:rd;function to(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var a=t[o];if(!S.call(n,a)||!an(e[a],n[a]))return!1}return!0}function Ki(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ii(e,n){var t=Ki(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=n&&o>=n)return{node:t,offset:n-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ki(t)}}function _i(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_i(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zi(){for(var e=window,n=Eo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Eo(e.document)}return n}function cs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function id(e){var n=zi(),t=e.focusedElem,o=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&_i(t.ownerDocument.documentElement,t)){if(o!==null&&cs(t)){if(n=o.start,e=o.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=Ii(t,s);var r=Ii(t,o);a&&r&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ld=H&&"documentMode"in document&&11>=document.documentMode,kt=null,fs=null,oo=null,ps=!1;function Wi(e,n,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ps||kt==null||kt!==Eo(o)||(o=kt,"selectionStart"in o&&cs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&to(oo,o)||(oo=o,o=$o(fs,"onSelect"),0<o.length&&(n=new as("onSelect","select",null,n,t),e.push({event:n,listeners:o}),n.target=kt)))}function Uo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var vt={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},ms={},Fi={};H&&(Fi=document.createElement("div").style,"AnimationEvent"in window||(delete vt.animationend.animation,delete vt.animationiteration.animation,delete vt.animationstart.animation),"TransitionEvent"in window||delete vt.transitionend.transition);function Go(e){if(ms[e])return ms[e];if(!vt[e])return e;var n=vt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Fi)return ms[e]=n[t];return e}var Ui=Go("animationend"),Gi=Go("animationiteration"),Ji=Go("animationstart"),$i=Go("transitionend"),Yi=new Map,Vi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,n){Yi.set(e,n),E(n,[e])}for(var gs=0;gs<Vi.length;gs++){var ws=Vi[gs],hd=ws.toLowerCase(),ud=ws[0].toUpperCase()+ws.slice(1);Kn(hd,"on"+ud)}Kn(Ui,"onAnimationEnd"),Kn(Gi,"onAnimationIteration"),Kn(Ji,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn($i,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dd=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Qi(e,n,t){var o=e.type||"unknown-event";e.currentTarget=t,hu(o,n,void 0,e),e.currentTarget=null}function qi(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],a=o.event;o=o.listeners;e:{var s=void 0;if(n)for(var r=o.length-1;0<=r;r--){var h=o[r],d=h.instance,w=h.currentTarget;if(h=h.listener,d!==s&&a.isPropagationStopped())break e;Qi(a,h,w),s=d}else for(r=0;r<o.length;r++){if(h=o[r],d=h.instance,w=h.currentTarget,h=h.listener,d!==s&&a.isPropagationStopped())break e;Qi(a,h,w),s=d}}}if(Bo)throw e=Ya,Bo=!1,Ya=null,e}function te(e,n){var t=n[Ns];t===void 0&&(t=n[Ns]=new Set);var o=e+"__bubble";t.has(o)||(Zi(n,e,2,!1),t.add(o))}function ys(e,n,t){var o=0;n&&(o|=4),Zi(t,e,o,n)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function so(e){if(!e[Jo]){e[Jo]=!0,y.forEach(function(t){t!=="selectionchange"&&(dd.has(t)||ys(t,!1,e),ys(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jo]||(n[Jo]=!0,ys("selectionchange",!1,n))}}function Zi(e,n,t,o){switch(bi(n)){case 1:var a=Nu;break;case 4:a=Eu;break;default:a=ns}t=a.bind(null,n,t,e),a=void 0,!$a||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function ks(e,n,t,o,a){var s=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var r=o.tag;if(r===3||r===4){var h=o.stateNode.containerInfo;if(h===a||h.nodeType===8&&h.parentNode===a)break;if(r===4)for(r=o.return;r!==null;){var d=r.tag;if((d===3||d===4)&&(d=r.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;r=r.return}for(;h!==null;){if(r=nt(h),r===null)return;if(d=r.tag,d===5||d===6){o=s=r;continue e}h=h.parentNode}}o=o.return}oi(function(){var w=s,b=Ua(t),T=[];e:{var k=Yi.get(e);if(k!==void 0){var C=as,P=e;switch(e){case"keypress":if(_o(t)===0)break e;case"keydown":case"keyup":C=zu;break;case"focusin":P="focus",C=is;break;case"focusout":P="blur",C=is;break;case"beforeblur":case"afterblur":C=is;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Si;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Bu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Uu;break;case Ui:case Gi:case Ji:C=Au;break;case $i:C=Ju;break;case"scroll":C=ju;break;case"wheel":C=Yu;break;case"copy":case"cut":case"paste":C=Hu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ei}var A=(n&4)!==0,ce=!A&&e==="scroll",m=A?k!==null?k+"Capture":null:k;A=[];for(var c=w,g;c!==null;){g=c;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=zt(c,m),x!=null&&A.push(ro(c,x,g)))),ce)break;c=c.return}0<A.length&&(k=new C(k,P,null,t,b),T.push({event:k,listeners:A}))}}if((n&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",k&&t!==Fa&&(P=t.relatedTarget||t.fromElement)&&(nt(P)||P[Tn]))break e;if((C||k)&&(k=b.window===b?b:(k=b.ownerDocument)?k.defaultView||k.parentWindow:window,C?(P=t.relatedTarget||t.toElement,C=w,P=P?nt(P):null,P!==null&&(ce=et(P),P!==ce||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=w),C!==P)){if(A=Si,x="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(A=Ei,x="onPointerLeave",m="onPointerEnter",c="pointer"),ce=C==null?k:xt(C),g=P==null?k:xt(P),k=new A(x,c+"leave",C,t,b),k.target=ce,k.relatedTarget=g,x=null,nt(b)===w&&(A=new A(m,c+"enter",P,t,b),A.target=g,A.relatedTarget=ce,x=A),ce=x,C&&P)n:{for(A=C,m=P,c=0,g=A;g;g=bt(g))c++;for(g=0,x=m;x;x=bt(x))g++;for(;0<c-g;)A=bt(A),c--;for(;0<g-c;)m=bt(m),g--;for(;c--;){if(A===m||m!==null&&A===m.alternate)break n;A=bt(A),m=bt(m)}A=null}else A=null;C!==null&&Xi(T,k,C,A,!1),P!==null&&ce!==null&&Xi(T,ce,P,A,!0)}}e:{if(k=w?xt(w):window,C=k.nodeName&&k.nodeName.toLowerCase(),C==="select"||C==="input"&&k.type==="file")var R=nd;else if(Ai(k))if(Hi)R=sd;else{R=od;var M=td}else(C=k.nodeName)&&C.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(R=ad);if(R&&(R=R(e,w))){Ri(T,R,t,b);break e}M&&M(e,k,w),e==="focusout"&&(M=k._wrapperState)&&M.controlled&&k.type==="number"&&Ka(k,"number",k.value)}switch(M=w?xt(w):window,e){case"focusin":(Ai(M)||M.contentEditable==="true")&&(kt=M,fs=w,oo=null);break;case"focusout":oo=fs=kt=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,Wi(T,t,b);break;case"selectionchange":if(ld)break;case"keydown":case"keyup":Wi(T,t,b)}var K;if(hs)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else yt?Li(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(ji&&t.locale!=="ko"&&(yt||_!=="onCompositionStart"?_==="onCompositionEnd"&&yt&&(K=Ti()):(Mn=b,os="value"in Mn?Mn.value:Mn.textContent,yt=!0)),M=$o(w,_),0<M.length&&(_=new Ni(_,e,null,t,b),T.push({event:_,listeners:M}),K?_.data=K:(K=Pi(t),K!==null&&(_.data=K)))),(K=Qu?qu(e,t):Zu(e,t))&&(w=$o(w,"onBeforeInput"),0<w.length&&(b=new Ni("onBeforeInput","beforeinput",null,t,b),T.push({event:b,listeners:w}),b.data=K))}qi(T,n)})}function ro(e,n,t){return{instance:e,listener:n,currentTarget:t}}function $o(e,n){for(var t=n+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=zt(e,t),s!=null&&o.unshift(ro(e,s,a)),s=zt(e,n),s!=null&&o.push(ro(e,s,a))),e=e.return}return o}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xi(e,n,t,o,a){for(var s=n._reactName,r=[];t!==null&&t!==o;){var h=t,d=h.alternate,w=h.stateNode;if(d!==null&&d===o)break;h.tag===5&&w!==null&&(h=w,a?(d=zt(t,s),d!=null&&r.unshift(ro(t,d,h))):a||(d=zt(t,s),d!=null&&r.push(ro(t,d,h)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var cd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function el(e){return(typeof e=="string"?e:""+e).replace(cd,`
`).replace(fd,"")}function Yo(e,n,t){if(n=el(n),el(e)!==n&&t)throw Error(u(425))}function Vo(){}var vs=null,bs=null;function Ts(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,pd=typeof clearTimeout=="function"?clearTimeout:void 0,nl=typeof Promise=="function"?Promise:void 0,md=typeof queueMicrotask=="function"?queueMicrotask:typeof nl<"u"?function(e){return nl.resolve(null).then(e).catch(gd)}:xs;function gd(e){setTimeout(function(){throw e})}function Ss(e,n){var t=n,o=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(o===0){e.removeChild(a),Qt(n);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=a}while(t);Qt(n)}function In(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function tl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),gn="__reactFiber$"+Tt,io="__reactProps$"+Tt,Tn="__reactContainer$"+Tt,Ns="__reactEvents$"+Tt,wd="__reactListeners$"+Tt,yd="__reactHandles$"+Tt;function nt(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Tn]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=tl(e);e!==null;){if(t=e[gn])return t;e=tl(e)}return n}e=t,t=e.parentNode}return null}function lo(e){return e=e[gn]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Qo(e){return e[io]||null}var Es=[],St=-1;function _n(e){return{current:e}}function oe(e){0>St||(e.current=Es[St],Es[St]=null,St--)}function ne(e,n){St++,Es[St]=e.current,e.current=n}var zn={},xe=_n(zn),Re=_n(!1),tt=zn;function Nt(e,n){var t=e.type.contextTypes;if(!t)return zn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in t)a[s]=n[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function He(e){return e=e.childContextTypes,e!=null}function qo(){oe(Re),oe(xe)}function ol(e,n,t){if(xe.current!==zn)throw Error(u(168));ne(xe,n),ne(Re,t)}function al(e,n,t){var o=e.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var a in o)if(!(a in n))throw Error(u(108,ee(e)||"Unknown",a));return L({},t,o)}function Zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,tt=xe.current,ne(xe,e),ne(Re,Re.current),!0}function sl(e,n,t){var o=e.stateNode;if(!o)throw Error(u(169));t?(e=al(e,n,tt),o.__reactInternalMemoizedMergedChildContext=e,oe(Re),oe(xe),ne(xe,e)):oe(Re),ne(Re,t)}var xn=null,Xo=!1,js=!1;function rl(e){xn===null?xn=[e]:xn.push(e)}function kd(e){Xo=!0,rl(e)}function Wn(){if(!js&&xn!==null){js=!0;var e=0,n=Z;try{var t=xn;for(Z=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}xn=null,Xo=!1}catch(a){throw xn!==null&&(xn=xn.slice(e+1)),li(Va,Wn),a}finally{Z=n,js=!1}}return null}var Et=[],jt=0,ea=null,na=0,$e=[],Ye=0,ot=null,Sn=1,Nn="";function at(e,n){Et[jt++]=na,Et[jt++]=ea,ea=e,na=n}function il(e,n,t){$e[Ye++]=Sn,$e[Ye++]=Nn,$e[Ye++]=ot,ot=e;var o=Sn;e=Nn;var a=32-on(o)-1;o&=~(1<<a),t+=1;var s=32-on(n)+a;if(30<s){var r=a-a%5;s=(o&(1<<r)-1).toString(32),o>>=r,a-=r,Sn=1<<32-on(n)+a|t<<a|o,Nn=s+e}else Sn=1<<s|t<<a|o,Nn=e}function Cs(e){e.return!==null&&(at(e,1),il(e,1,0))}function Bs(e){for(;e===ea;)ea=Et[--jt],Et[jt]=null,na=Et[--jt],Et[jt]=null;for(;e===ot;)ot=$e[--Ye],$e[Ye]=null,Nn=$e[--Ye],$e[Ye]=null,Sn=$e[--Ye],$e[Ye]=null}var We=null,Fe=null,re=!1,sn=null;function ll(e,n){var t=Ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function hl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,We=e,Fe=In(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,We=e,Fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ot!==null?{id:Sn,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,We=e,Fe=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(re){var n=Fe;if(n){var t=n;if(!hl(e,n)){if(Ls(e))throw Error(u(418));n=In(t.nextSibling);var o=We;n&&hl(e,n)?ll(o,t):(e.flags=e.flags&-4097|2,re=!1,We=e)}}else{if(Ls(e))throw Error(u(418));e.flags=e.flags&-4097|2,re=!1,We=e}}}function ul(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function ta(e){if(e!==We)return!1;if(!re)return ul(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ts(e.type,e.memoizedProps)),n&&(n=Fe)){if(Ls(e))throw dl(),Error(u(418));for(;n;)ll(e,n),n=In(n.nextSibling)}if(ul(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Fe=In(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Fe=null}}else Fe=We?In(e.stateNode.nextSibling):null;return!0}function dl(){for(var e=Fe;e;)e=In(e.nextSibling)}function Ct(){Fe=We=null,re=!1}function As(e){sn===null?sn=[e]:sn.push(e)}var vd=Te.ReactCurrentBatchConfig;function ho(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(u(309));var o=t.stateNode}if(!o)throw Error(u(147,e));var a=o,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(r){var h=a.refs;r===null?delete h[s]:h[s]=r},n._stringRef=s,n)}if(typeof e!="string")throw Error(u(284));if(!t._owner)throw Error(u(290,e))}return e}function oa(e,n){throw e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function cl(e){var n=e._init;return n(e._payload)}function fl(e){function n(m,c){if(e){var g=m.deletions;g===null?(m.deletions=[c],m.flags|=16):g.push(c)}}function t(m,c){if(!e)return null;for(;c!==null;)n(m,c),c=c.sibling;return null}function o(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function a(m,c){return m=Qn(m,c),m.index=0,m.sibling=null,m}function s(m,c,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<c?(m.flags|=2,c):g):(m.flags|=2,c)):(m.flags|=1048576,c)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function h(m,c,g,x){return c===null||c.tag!==6?(c=xr(g,m.mode,x),c.return=m,c):(c=a(c,g),c.return=m,c)}function d(m,c,g,x){var R=g.type;return R===Pe?b(m,c,g.props.children,x,g.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ae&&cl(R)===c.type)?(x=a(c,g.props),x.ref=ho(m,c,g),x.return=m,x):(x=ja(g.type,g.key,g.props,null,m.mode,x),x.ref=ho(m,c,g),x.return=m,x)}function w(m,c,g,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Sr(g,m.mode,x),c.return=m,c):(c=a(c,g.children||[]),c.return=m,c)}function b(m,c,g,x,R){return c===null||c.tag!==7?(c=ct(g,m.mode,x,R),c.return=m,c):(c=a(c,g),c.return=m,c)}function T(m,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=xr(""+c,m.mode,g),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case nn:return g=ja(c.type,c.key,c.props,null,m.mode,g),g.ref=ho(m,null,c),g.return=m,g;case je:return c=Sr(c,m.mode,g),c.return=m,c;case Ae:var x=c._init;return T(m,x(c._payload),g)}if(Kt(c)||I(c))return c=ct(c,m.mode,g,null),c.return=m,c;oa(m,c)}return null}function k(m,c,g,x){var R=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:h(m,c,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:return g.key===R?d(m,c,g,x):null;case je:return g.key===R?w(m,c,g,x):null;case Ae:return R=g._init,k(m,c,R(g._payload),x)}if(Kt(g)||I(g))return R!==null?null:b(m,c,g,x,null);oa(m,g)}return null}function C(m,c,g,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,h(c,m,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nn:return m=m.get(x.key===null?g:x.key)||null,d(c,m,x,R);case je:return m=m.get(x.key===null?g:x.key)||null,w(c,m,x,R);case Ae:var M=x._init;return C(m,c,g,M(x._payload),R)}if(Kt(x)||I(x))return m=m.get(g)||null,b(c,m,x,R,null);oa(c,x)}return null}function P(m,c,g,x){for(var R=null,M=null,K=c,_=c=0,ye=null;K!==null&&_<g.length;_++){K.index>_?(ye=K,K=null):ye=K.sibling;var Q=k(m,K,g[_],x);if(Q===null){K===null&&(K=ye);break}e&&K&&Q.alternate===null&&n(m,K),c=s(Q,c,_),M===null?R=Q:M.sibling=Q,M=Q,K=ye}if(_===g.length)return t(m,K),re&&at(m,_),R;if(K===null){for(;_<g.length;_++)K=T(m,g[_],x),K!==null&&(c=s(K,c,_),M===null?R=K:M.sibling=K,M=K);return re&&at(m,_),R}for(K=o(m,K);_<g.length;_++)ye=C(K,m,_,g[_],x),ye!==null&&(e&&ye.alternate!==null&&K.delete(ye.key===null?_:ye.key),c=s(ye,c,_),M===null?R=ye:M.sibling=ye,M=ye);return e&&K.forEach(function(qn){return n(m,qn)}),re&&at(m,_),R}function A(m,c,g,x){var R=I(g);if(typeof R!="function")throw Error(u(150));if(g=R.call(g),g==null)throw Error(u(151));for(var M=R=null,K=c,_=c=0,ye=null,Q=g.next();K!==null&&!Q.done;_++,Q=g.next()){K.index>_?(ye=K,K=null):ye=K.sibling;var qn=k(m,K,Q.value,x);if(qn===null){K===null&&(K=ye);break}e&&K&&qn.alternate===null&&n(m,K),c=s(qn,c,_),M===null?R=qn:M.sibling=qn,M=qn,K=ye}if(Q.done)return t(m,K),re&&at(m,_),R;if(K===null){for(;!Q.done;_++,Q=g.next())Q=T(m,Q.value,x),Q!==null&&(c=s(Q,c,_),M===null?R=Q:M.sibling=Q,M=Q);return re&&at(m,_),R}for(K=o(m,K);!Q.done;_++,Q=g.next())Q=C(K,m,_,Q.value,x),Q!==null&&(e&&Q.alternate!==null&&K.delete(Q.key===null?_:Q.key),c=s(Q,c,_),M===null?R=Q:M.sibling=Q,M=Q);return e&&K.forEach(function(Xd){return n(m,Xd)}),re&&at(m,_),R}function ce(m,c,g,x){if(typeof g=="object"&&g!==null&&g.type===Pe&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:e:{for(var R=g.key,M=c;M!==null;){if(M.key===R){if(R=g.type,R===Pe){if(M.tag===7){t(m,M.sibling),c=a(M,g.props.children),c.return=m,m=c;break e}}else if(M.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ae&&cl(R)===M.type){t(m,M.sibling),c=a(M,g.props),c.ref=ho(m,M,g),c.return=m,m=c;break e}t(m,M);break}else n(m,M);M=M.sibling}g.type===Pe?(c=ct(g.props.children,m.mode,x,g.key),c.return=m,m=c):(x=ja(g.type,g.key,g.props,null,m.mode,x),x.ref=ho(m,c,g),x.return=m,m=x)}return r(m);case je:e:{for(M=g.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){t(m,c.sibling),c=a(c,g.children||[]),c.return=m,m=c;break e}else{t(m,c);break}else n(m,c);c=c.sibling}c=Sr(g,m.mode,x),c.return=m,m=c}return r(m);case Ae:return M=g._init,ce(m,c,M(g._payload),x)}if(Kt(g))return P(m,c,g,x);if(I(g))return A(m,c,g,x);oa(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(t(m,c.sibling),c=a(c,g),c.return=m,m=c):(t(m,c),c=xr(g,m.mode,x),c.return=m,m=c),r(m)):t(m,c)}return ce}var Bt=fl(!0),pl=fl(!1),aa=_n(null),sa=null,Lt=null,Rs=null;function Hs(){Rs=Lt=sa=null}function Ds(e){var n=aa.current;oe(aa),e._currentValue=n}function Os(e,n,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===t)break;e=e.return}}function Pt(e,n){sa=e,Rs=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(De=!0),e.firstContext=null)}function Ve(e){var n=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(sa===null)throw Error(u(308));Lt=e,sa.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var st=null;function Ms(e){st===null?st=[e]:st.push(e)}function ml(e,n,t,o){var a=n.interleaved;return a===null?(t.next=t,Ms(n)):(t.next=a.next,a.next=t),n.interleaved=t,En(e,o)}function En(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Fn=!1;function Ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Un(e,n,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(J&2)!==0){var a=o.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),o.pending=n,En(e,t)}return a=o.interleaved,a===null?(n.next=n,Ms(o)):(n.next=a.next,a.next=n),o.interleaved=n,En(e,t)}function ra(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Za(e,t)}}function wl(e,n){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var a=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var r={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?a=s=r:s=s.next=r,t=t.next}while(t!==null);s===null?a=s=n:s=s.next=n}else a=s=n;t={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ia(e,n,t,o){var a=e.updateQueue;Fn=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var d=h,w=d.next;d.next=null,r===null?s=w:r.next=w,r=d;var b=e.alternate;b!==null&&(b=b.updateQueue,h=b.lastBaseUpdate,h!==r&&(h===null?b.firstBaseUpdate=w:h.next=w,b.lastBaseUpdate=d))}if(s!==null){var T=a.baseState;r=0,b=w=d=null,h=s;do{var k=h.lane,C=h.eventTime;if((o&k)===k){b!==null&&(b=b.next={eventTime:C,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var P=e,A=h;switch(k=n,C=t,A.tag){case 1:if(P=A.payload,typeof P=="function"){T=P.call(C,T,k);break e}T=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=A.payload,k=typeof P=="function"?P.call(C,T,k):P,k==null)break e;T=L({},T,k);break e;case 2:Fn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,k=a.effects,k===null?a.effects=[h]:k.push(h))}else C={eventTime:C,lane:k,tag:h.tag,payload:h.payload,callback:h.callback,next:null},b===null?(w=b=C,d=T):b=b.next=C,r|=k;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;k=h,h=k.next,k.next=null,a.lastBaseUpdate=k,a.shared.pending=null}}while(!0);if(b===null&&(d=T),a.baseState=d,a.firstBaseUpdate=w,a.lastBaseUpdate=b,n=a.shared.interleaved,n!==null){a=n;do r|=a.lane,a=a.next;while(a!==n)}else s===null&&(a.shared.lanes=0);lt|=r,e.lanes=r,e.memoizedState=T}}function yl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var o=e[n],a=o.callback;if(a!==null){if(o.callback=null,o=t,typeof a!="function")throw Error(u(191,a));a.call(o)}}}var uo={},wn=_n(uo),co=_n(uo),fo=_n(uo);function rt(e){if(e===uo)throw Error(u(174));return e}function Is(e,n){switch(ne(fo,n),ne(co,e),ne(wn,uo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:_a(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=_a(n,e)}oe(wn),ne(wn,n)}function At(){oe(wn),oe(co),oe(fo)}function kl(e){rt(fo.current);var n=rt(wn.current),t=_a(n,e.type);n!==t&&(ne(co,e),ne(wn,t))}function _s(e){co.current===e&&(oe(wn),oe(co))}var ie=_n(0);function la(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var zs=[];function Ws(){for(var e=0;e<zs.length;e++)zs[e]._workInProgressVersionPrimary=null;zs.length=0}var ha=Te.ReactCurrentDispatcher,Fs=Te.ReactCurrentBatchConfig,it=0,le=null,pe=null,ge=null,ua=!1,po=!1,mo=0,bd=0;function Se(){throw Error(u(321))}function Us(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!an(e[t],n[t]))return!1;return!0}function Gs(e,n,t,o,a,s){if(it=s,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ha.current=e===null||e.memoizedState===null?Nd:Ed,e=t(o,a),po){s=0;do{if(po=!1,mo=0,25<=s)throw Error(u(301));s+=1,ge=pe=null,n.updateQueue=null,ha.current=jd,e=t(o,a)}while(po)}if(ha.current=fa,n=pe!==null&&pe.next!==null,it=0,ge=pe=le=null,ua=!1,n)throw Error(u(300));return e}function Js(){var e=mo!==0;return mo=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?le.memoizedState=ge=e:ge=ge.next=e,ge}function Qe(){if(pe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=ge===null?le.memoizedState:ge.next;if(n!==null)ge=n,pe=e;else{if(e===null)throw Error(u(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?le.memoizedState=ge=e:ge=ge.next=e}return ge}function go(e,n){return typeof n=="function"?n(e):n}function $s(e){var n=Qe(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var o=pe,a=o.baseQueue,s=t.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}o.baseQueue=a=s,t.pending=null}if(a!==null){s=a.next,o=o.baseState;var h=r=null,d=null,w=s;do{var b=w.lane;if((it&b)===b)d!==null&&(d=d.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),o=w.hasEagerState?w.eagerState:e(o,w.action);else{var T={lane:b,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};d===null?(h=d=T,r=o):d=d.next=T,le.lanes|=b,lt|=b}w=w.next}while(w!==null&&w!==s);d===null?r=o:d.next=h,an(o,n.memoizedState)||(De=!0),n.memoizedState=o,n.baseState=r,n.baseQueue=d,t.lastRenderedState=o}if(e=t.interleaved,e!==null){a=e;do s=a.lane,le.lanes|=s,lt|=s,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ys(e){var n=Qe(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var o=t.dispatch,a=t.pending,s=n.memoizedState;if(a!==null){t.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);an(s,n.memoizedState)||(De=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,o]}function vl(){}function bl(e,n){var t=le,o=Qe(),a=n(),s=!an(o.memoizedState,a);if(s&&(o.memoizedState=a,De=!0),o=o.queue,Vs(Sl.bind(null,t,o,e),[e]),o.getSnapshot!==n||s||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,wo(9,xl.bind(null,t,o,a,n),void 0,null),we===null)throw Error(u(349));(it&30)!==0||Tl(t,n,a)}return a}function Tl(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function xl(e,n,t,o){n.value=t,n.getSnapshot=o,Nl(n)&&El(e)}function Sl(e,n,t){return t(function(){Nl(n)&&El(e)})}function Nl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!an(e,t)}catch{return!0}}function El(e){var n=En(e,1);n!==null&&un(n,e,1,-1)}function jl(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},n.queue=e,e=e.dispatch=Sd.bind(null,le,e),[n.memoizedState,e]}function wo(e,n,t,o){return e={tag:e,create:n,destroy:t,deps:o,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,n.lastEffect=e)),e}function Cl(){return Qe().memoizedState}function da(e,n,t,o){var a=yn();le.flags|=e,a.memoizedState=wo(1|n,t,void 0,o===void 0?null:o)}function ca(e,n,t,o){var a=Qe();o=o===void 0?null:o;var s=void 0;if(pe!==null){var r=pe.memoizedState;if(s=r.destroy,o!==null&&Us(o,r.deps)){a.memoizedState=wo(n,t,s,o);return}}le.flags|=e,a.memoizedState=wo(1|n,t,s,o)}function Bl(e,n){return da(8390656,8,e,n)}function Vs(e,n){return ca(2048,8,e,n)}function Ll(e,n){return ca(4,2,e,n)}function Pl(e,n){return ca(4,4,e,n)}function Al(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rl(e,n,t){return t=t!=null?t.concat([e]):null,ca(4,4,Al.bind(null,n,e),t)}function Qs(){}function Hl(e,n){var t=Qe();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Us(n,o[1])?o[0]:(t.memoizedState=[e,n],e)}function Dl(e,n){var t=Qe();n=n===void 0?null:n;var o=t.memoizedState;return o!==null&&n!==null&&Us(n,o[1])?o[0]:(e=e(),t.memoizedState=[e,n],e)}function Ol(e,n,t){return(it&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=t):(an(t,n)||(t=ci(),le.lanes|=t,lt|=t,e.baseState=!0),n)}function Td(e,n){var t=Z;Z=t!==0&&4>t?t:4,e(!0);var o=Fs.transition;Fs.transition={};try{e(!1),n()}finally{Z=t,Fs.transition=o}}function Ml(){return Qe().memoizedState}function xd(e,n,t){var o=Yn(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},Kl(e))Il(n,t);else if(t=ml(e,n,t,o),t!==null){var a=Be();un(t,e,o,a),_l(t,n,o)}}function Sd(e,n,t){var o=Yn(e),a={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kl(e))Il(n,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var r=n.lastRenderedState,h=s(r,t);if(a.hasEagerState=!0,a.eagerState=h,an(h,r)){var d=n.interleaved;d===null?(a.next=a,Ms(n)):(a.next=d.next,d.next=a),n.interleaved=a;return}}catch{}finally{}t=ml(e,n,a,o),t!==null&&(a=Be(),un(t,e,o,a),_l(t,n,o))}}function Kl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Il(e,n){po=ua=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _l(e,n,t){if((t&4194240)!==0){var o=n.lanes;o&=e.pendingLanes,t|=o,n.lanes=t,Za(e,t)}}var fa={readContext:Ve,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Nd={readContext:Ve,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:Ve,useEffect:Bl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,da(4194308,4,Al.bind(null,n,e),t)},useLayoutEffect:function(e,n){return da(4194308,4,e,n)},useInsertionEffect:function(e,n){return da(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var o=yn();return n=t!==void 0?t(n):n,o.memoizedState=o.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},o.queue=e,e=e.dispatch=xd.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:jl,useDebugValue:Qs,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=jl(!1),n=e[0];return e=Td.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var o=le,a=yn();if(re){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),we===null)throw Error(u(349));(it&30)!==0||Tl(o,n,t)}a.memoizedState=t;var s={value:t,getSnapshot:n};return a.queue=s,Bl(Sl.bind(null,o,s,e),[e]),o.flags|=2048,wo(9,xl.bind(null,o,s,t,n),void 0,null),t},useId:function(){var e=yn(),n=we.identifierPrefix;if(re){var t=Nn,o=Sn;t=(o&~(1<<32-on(o)-1)).toString(32)+t,n=":"+n+"R"+t,t=mo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=bd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ed={readContext:Ve,useCallback:Hl,useContext:Ve,useEffect:Vs,useImperativeHandle:Rl,useInsertionEffect:Ll,useLayoutEffect:Pl,useMemo:Dl,useReducer:$s,useRef:Cl,useState:function(){return $s(go)},useDebugValue:Qs,useDeferredValue:function(e){var n=Qe();return Ol(n,pe.memoizedState,e)},useTransition:function(){var e=$s(go)[0],n=Qe().memoizedState;return[e,n]},useMutableSource:vl,useSyncExternalStore:bl,useId:Ml,unstable_isNewReconciler:!1},jd={readContext:Ve,useCallback:Hl,useContext:Ve,useEffect:Vs,useImperativeHandle:Rl,useInsertionEffect:Ll,useLayoutEffect:Pl,useMemo:Dl,useReducer:Ys,useRef:Cl,useState:function(){return Ys(go)},useDebugValue:Qs,useDeferredValue:function(e){var n=Qe();return pe===null?n.memoizedState=e:Ol(n,pe.memoizedState,e)},useTransition:function(){var e=Ys(go)[0],n=Qe().memoizedState;return[e,n]},useMutableSource:vl,useSyncExternalStore:bl,useId:Ml,unstable_isNewReconciler:!1};function rn(e,n){if(e&&e.defaultProps){n=L({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function qs(e,n,t,o){n=e.memoizedState,t=t(o,n),t=t==null?n:L({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var pa={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var o=Be(),a=Yn(e),s=jn(o,a);s.payload=n,t!=null&&(s.callback=t),n=Un(e,s,a),n!==null&&(un(n,e,a,o),ra(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var o=Be(),a=Yn(e),s=jn(o,a);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=Un(e,s,a),n!==null&&(un(n,e,a,o),ra(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),o=Yn(e),a=jn(t,o);a.tag=2,n!=null&&(a.callback=n),n=Un(e,a,o),n!==null&&(un(n,e,o,t),ra(n,e,o))}};function zl(e,n,t,o,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,r):n.prototype&&n.prototype.isPureReactComponent?!to(t,o)||!to(a,s):!0}function Wl(e,n,t){var o=!1,a=zn,s=n.contextType;return typeof s=="object"&&s!==null?s=Ve(s):(a=He(n)?tt:xe.current,o=n.contextTypes,s=(o=o!=null)?Nt(e,a):zn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=pa,e.stateNode=n,n._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),n}function Fl(e,n,t,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,o),n.state!==e&&pa.enqueueReplaceState(n,n.state,null)}function Zs(e,n,t,o){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Ks(e);var s=n.contextType;typeof s=="object"&&s!==null?a.context=Ve(s):(s=He(n)?tt:xe.current,a.context=Nt(e,s)),a.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(qs(e,n,s,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&pa.enqueueReplaceState(a,a.state,null),ia(e,t,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Rt(e,n){try{var t="",o=n;do t+=Y(o),o=o.return;while(o);var a=t}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:a,digest:null}}function Xs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function er(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Cd=typeof WeakMap=="function"?WeakMap:Map;function Ul(e,n,t){t=jn(-1,t),t.tag=3,t.payload={element:null};var o=n.value;return t.callback=function(){ba||(ba=!0,mr=o),er(e,n)},t}function Gl(e,n,t){t=jn(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=n.value;t.payload=function(){return o(a)},t.callback=function(){er(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){er(e,n),typeof o!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),t}function Jl(e,n,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Cd;var a=new Set;o.set(n,a)}else a=o.get(n),a===void 0&&(a=new Set,o.set(n,a));a.has(t)||(a.add(t),e=Wd.bind(null,e,n,t),n.then(e,e))}function $l(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Yl(e,n,t,o,a){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=jn(-1,1),n.tag=2,Un(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Bd=Te.ReactCurrentOwner,De=!1;function Ce(e,n,t,o){n.child=e===null?pl(n,null,t,o):Bt(n,e.child,t,o)}function Vl(e,n,t,o,a){t=t.render;var s=n.ref;return Pt(n,a),o=Gs(e,n,t,o,s,a),t=Js(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Cn(e,n,a)):(re&&t&&Cs(n),n.flags|=1,Ce(e,n,o,a),n.child)}function Ql(e,n,t,o,a){if(e===null){var s=t.type;return typeof s=="function"&&!Tr(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,ql(e,n,s,o,a)):(e=ja(t.type,null,o,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,(e.lanes&a)===0){var r=s.memoizedProps;if(t=t.compare,t=t!==null?t:to,t(r,o)&&e.ref===n.ref)return Cn(e,n,a)}return n.flags|=1,e=Qn(s,o),e.ref=n.ref,e.return=n,n.child=e}function ql(e,n,t,o,a){if(e!==null){var s=e.memoizedProps;if(to(s,o)&&e.ref===n.ref)if(De=!1,n.pendingProps=o=s,(e.lanes&a)!==0)(e.flags&131072)!==0&&(De=!0);else return n.lanes=e.lanes,Cn(e,n,a)}return nr(e,n,t,o,a)}function Zl(e,n,t){var o=n.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Dt,Ue),Ue|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(Dt,Ue),Ue|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:t,ne(Dt,Ue),Ue|=o}else s!==null?(o=s.baseLanes|t,n.memoizedState=null):o=t,ne(Dt,Ue),Ue|=o;return Ce(e,n,a,t),n.child}function Xl(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function nr(e,n,t,o,a){var s=He(t)?tt:xe.current;return s=Nt(n,s),Pt(n,a),t=Gs(e,n,t,o,s,a),o=Js(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Cn(e,n,a)):(re&&o&&Cs(n),n.flags|=1,Ce(e,n,t,a),n.child)}function eh(e,n,t,o,a){if(He(t)){var s=!0;Zo(n)}else s=!1;if(Pt(n,a),n.stateNode===null)ga(e,n),Wl(n,t,o),Zs(n,t,o,a),o=!0;else if(e===null){var r=n.stateNode,h=n.memoizedProps;r.props=h;var d=r.context,w=t.contextType;typeof w=="object"&&w!==null?w=Ve(w):(w=He(t)?tt:xe.current,w=Nt(n,w));var b=t.getDerivedStateFromProps,T=typeof b=="function"||typeof r.getSnapshotBeforeUpdate=="function";T||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==o||d!==w)&&Fl(n,r,o,w),Fn=!1;var k=n.memoizedState;r.state=k,ia(n,o,r,a),d=n.memoizedState,h!==o||k!==d||Re.current||Fn?(typeof b=="function"&&(qs(n,t,b,o),d=n.memoizedState),(h=Fn||zl(n,t,h,o,k,d,w))?(T||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=d),r.props=o,r.state=d,r.context=w,o=h):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{r=n.stateNode,gl(e,n),h=n.memoizedProps,w=n.type===n.elementType?h:rn(n.type,h),r.props=w,T=n.pendingProps,k=r.context,d=t.contextType,typeof d=="object"&&d!==null?d=Ve(d):(d=He(t)?tt:xe.current,d=Nt(n,d));var C=t.getDerivedStateFromProps;(b=typeof C=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==T||k!==d)&&Fl(n,r,o,d),Fn=!1,k=n.memoizedState,r.state=k,ia(n,o,r,a);var P=n.memoizedState;h!==T||k!==P||Re.current||Fn?(typeof C=="function"&&(qs(n,t,C,o),P=n.memoizedState),(w=Fn||zl(n,t,w,o,k,P,d)||!1)?(b||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(o,P,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(o,P,d)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=P),r.props=o,r.state=P,r.context=d,o=w):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),o=!1)}return tr(e,n,t,o,s,a)}function tr(e,n,t,o,a,s){Xl(e,n);var r=(n.flags&128)!==0;if(!o&&!r)return a&&sl(n,t,!1),Cn(e,n,s);o=n.stateNode,Bd.current=n;var h=r&&typeof t.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,e!==null&&r?(n.child=Bt(n,e.child,null,s),n.child=Bt(n,null,h,s)):Ce(e,n,h,s),n.memoizedState=o.state,a&&sl(n,t,!0),n.child}function nh(e){var n=e.stateNode;n.pendingContext?ol(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ol(e,n.context,!1),Is(e,n.containerInfo)}function th(e,n,t,o,a){return Ct(),As(a),n.flags|=256,Ce(e,n,t,o),n.child}var or={dehydrated:null,treeContext:null,retryLane:0};function ar(e){return{baseLanes:e,cachePool:null,transitions:null}}function oh(e,n,t){var o=n.pendingProps,a=ie.current,s=!1,r=(n.flags&128)!==0,h;if((h=r)||(h=e!==null&&e.memoizedState===null?!1:(a&2)!==0),h?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ne(ie,a&1),e===null)return Ps(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(r=o.children,e=o.fallback,s?(o=n.mode,s=n.child,r={mode:"hidden",children:r},(o&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=r):s=Ca(r,o,0,null),e=ct(e,o,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=ar(t),n.memoizedState=or,e):sr(n,r));if(a=e.memoizedState,a!==null&&(h=a.dehydrated,h!==null))return Ld(e,n,r,o,h,a,t);if(s){s=o.fallback,r=n.mode,a=e.child,h=a.sibling;var d={mode:"hidden",children:o.children};return(r&1)===0&&n.child!==a?(o=n.child,o.childLanes=0,o.pendingProps=d,n.deletions=null):(o=Qn(a,d),o.subtreeFlags=a.subtreeFlags&14680064),h!==null?s=Qn(h,s):(s=ct(s,r,t,null),s.flags|=2),s.return=n,o.return=n,o.sibling=s,n.child=o,o=s,s=n.child,r=e.child.memoizedState,r=r===null?ar(t):{baseLanes:r.baseLanes|t,cachePool:null,transitions:r.transitions},s.memoizedState=r,s.childLanes=e.childLanes&~t,n.memoizedState=or,o}return s=e.child,e=s.sibling,o=Qn(s,{mode:"visible",children:o.children}),(n.mode&1)===0&&(o.lanes=t),o.return=n,o.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=o,n.memoizedState=null,o}function sr(e,n){return n=Ca({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ma(e,n,t,o){return o!==null&&As(o),Bt(n,e.child,null,t),e=sr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ld(e,n,t,o,a,s,r){if(t)return n.flags&256?(n.flags&=-257,o=Xs(Error(u(422))),ma(e,n,r,o)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=o.fallback,a=n.mode,o=Ca({mode:"visible",children:o.children},a,0,null),s=ct(s,a,r,null),s.flags|=2,o.return=n,s.return=n,o.sibling=s,n.child=o,(n.mode&1)!==0&&Bt(n,e.child,null,r),n.child.memoizedState=ar(r),n.memoizedState=or,s);if((n.mode&1)===0)return ma(e,n,r,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var h=o.dgst;return o=h,s=Error(u(419)),o=Xs(s,o,void 0),ma(e,n,r,o)}if(h=(r&e.childLanes)!==0,De||h){if(o=we,o!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|r))!==0?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,En(e,a),un(o,e,a,-1))}return br(),o=Xs(Error(u(421))),ma(e,n,r,o)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=Fd.bind(null,e),a._reactRetry=n,null):(e=s.treeContext,Fe=In(a.nextSibling),We=n,re=!0,sn=null,e!==null&&($e[Ye++]=Sn,$e[Ye++]=Nn,$e[Ye++]=ot,Sn=e.id,Nn=e.overflow,ot=n),n=sr(n,o.children),n.flags|=4096,n)}function ah(e,n,t){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Os(e.return,n,t)}function rr(e,n,t,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:a}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=t,s.tailMode=a)}function sh(e,n,t){var o=n.pendingProps,a=o.revealOrder,s=o.tail;if(Ce(e,n,o.children,t),o=ie.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ah(e,t,n);else if(e.tag===19)ah(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ne(ie,o),(n.mode&1)===0)n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&la(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),rr(n,!1,a,t,s);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&la(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}rr(n,!0,t,null,s);break;case"together":rr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ga(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),lt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=Qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Pd(e,n,t){switch(n.tag){case 3:nh(n),Ct();break;case 5:kl(n);break;case 1:He(n.type)&&Zo(n);break;case 4:Is(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,a=n.memoizedProps.value;ne(aa,o._currentValue),o._currentValue=a;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(ne(ie,ie.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?oh(e,n,t):(ne(ie,ie.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);ne(ie,ie.current&1);break;case 19:if(o=(t&n.childLanes)!==0,(e.flags&128)!==0){if(o)return sh(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ne(ie,ie.current),o)break;return null;case 22:case 23:return n.lanes=0,Zl(e,n,t)}return Cn(e,n,t)}var rh,ir,ih,lh;rh=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ir=function(){},ih=function(e,n,t,o){var a=e.memoizedProps;if(a!==o){e=n.stateNode,rt(wn.current);var s=null;switch(t){case"input":a=Oa(e,a),o=Oa(e,o),s=[];break;case"select":a=L({},a,{value:void 0}),o=L({},o,{value:void 0}),s=[];break;case"textarea":a=Ia(e,a),o=Ia(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Vo)}za(t,o);var r;t=null;for(w in a)if(!o.hasOwnProperty(w)&&a.hasOwnProperty(w)&&a[w]!=null)if(w==="style"){var h=a[w];for(r in h)h.hasOwnProperty(r)&&(t||(t={}),t[r]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(N.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in o){var d=o[w];if(h=a!=null?a[w]:void 0,o.hasOwnProperty(w)&&d!==h&&(d!=null||h!=null))if(w==="style")if(h){for(r in h)!h.hasOwnProperty(r)||d&&d.hasOwnProperty(r)||(t||(t={}),t[r]="");for(r in d)d.hasOwnProperty(r)&&h[r]!==d[r]&&(t||(t={}),t[r]=d[r])}else t||(s||(s=[]),s.push(w,t)),t=d;else w==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,h=h?h.__html:void 0,d!=null&&h!==d&&(s=s||[]).push(w,d)):w==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(w,""+d):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(N.hasOwnProperty(w)?(d!=null&&w==="onScroll"&&te("scroll",e),s||h===d||(s=[])):(s=s||[]).push(w,d))}t&&(s=s||[]).push("style",t);var w=s;(n.updateQueue=w)&&(n.flags|=4)}},lh=function(e,n,t,o){t!==o&&(n.flags|=4)};function yo(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=t,n}function Ad(e,n,t){var o=n.pendingProps;switch(Bs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return He(n.type)&&qo(),Ne(n),null;case 3:return o=n.stateNode,At(),oe(Re),oe(xe),Ws(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ta(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sn!==null&&(yr(sn),sn=null))),ir(e,n),Ne(n),null;case 5:_s(n);var a=rt(fo.current);if(t=n.type,e!==null&&n.stateNode!=null)ih(e,n,t,o,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(u(166));return Ne(n),null}if(e=rt(wn.current),ta(n)){o=n.stateNode,t=n.type;var s=n.memoizedProps;switch(o[gn]=n,o[io]=s,e=(n.mode&1)!==0,t){case"dialog":te("cancel",o),te("close",o);break;case"iframe":case"object":case"embed":te("load",o);break;case"video":case"audio":for(a=0;a<ao.length;a++)te(ao[a],o);break;case"source":te("error",o);break;case"img":case"image":case"link":te("error",o),te("load",o);break;case"details":te("toggle",o);break;case"input":Wr(o,s),te("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},te("invalid",o);break;case"textarea":Gr(o,s),te("invalid",o)}za(t,s),a=null;for(var r in s)if(s.hasOwnProperty(r)){var h=s[r];r==="children"?typeof h=="string"?o.textContent!==h&&(s.suppressHydrationWarning!==!0&&Yo(o.textContent,h,e),a=["children",h]):typeof h=="number"&&o.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&Yo(o.textContent,h,e),a=["children",""+h]):N.hasOwnProperty(r)&&h!=null&&r==="onScroll"&&te("scroll",o)}switch(t){case"input":No(o),Ur(o,s,!0);break;case"textarea":No(o),$r(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Vo)}o=a,n.updateQueue=o,o!==null&&(n.flags|=4)}else{r=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yr(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=r.createElement(t,{is:o.is}):(e=r.createElement(t),t==="select"&&(r=e,o.multiple?r.multiple=!0:o.size&&(r.size=o.size))):e=r.createElementNS(e,t),e[gn]=n,e[io]=o,rh(e,n,!1,!1),n.stateNode=e;e:{switch(r=Wa(t,o),t){case"dialog":te("cancel",e),te("close",e),a=o;break;case"iframe":case"object":case"embed":te("load",e),a=o;break;case"video":case"audio":for(a=0;a<ao.length;a++)te(ao[a],e);a=o;break;case"source":te("error",e),a=o;break;case"img":case"image":case"link":te("error",e),te("load",e),a=o;break;case"details":te("toggle",e),a=o;break;case"input":Wr(e,o),a=Oa(e,o),te("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=L({},o,{value:void 0}),te("invalid",e);break;case"textarea":Gr(e,o),a=Ia(e,o),te("invalid",e);break;default:a=o}za(t,a),h=a;for(s in h)if(h.hasOwnProperty(s)){var d=h[s];s==="style"?qr(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Vr(e,d)):s==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&It(e,d):typeof d=="number"&&It(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(N.hasOwnProperty(s)?d!=null&&s==="onScroll"&&te("scroll",e):d!=null&&en(e,s,d,r))}switch(t){case"input":No(e),Ur(e,o,!1);break;case"textarea":No(e),$r(e);break;case"option":o.value!=null&&e.setAttribute("value",""+q(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?ft(e,!!o.multiple,s,!1):o.defaultValue!=null&&ft(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Vo)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ne(n),null;case 6:if(e&&n.stateNode!=null)lh(e,n,e.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(u(166));if(t=rt(fo.current),rt(wn.current),ta(n)){if(o=n.stateNode,t=n.memoizedProps,o[gn]=n,(s=o.nodeValue!==t)&&(e=We,e!==null))switch(e.tag){case 3:Yo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yo(o.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[gn]=n,n.stateNode=o}return Ne(n),null;case 13:if(oe(ie),o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Fe!==null&&(n.mode&1)!==0&&(n.flags&128)===0)dl(),Ct(),n.flags|=98560,s=!1;else if(s=ta(n),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[gn]=n}else Ct(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ne(n),s=!1}else sn!==null&&(yr(sn),sn=null),s=!0;if(!s)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ie.current&1)!==0?me===0&&(me=3):br())),n.updateQueue!==null&&(n.flags|=4),Ne(n),null);case 4:return At(),ir(e,n),e===null&&so(n.stateNode.containerInfo),Ne(n),null;case 10:return Ds(n.type._context),Ne(n),null;case 17:return He(n.type)&&qo(),Ne(n),null;case 19:if(oe(ie),s=n.memoizedState,s===null)return Ne(n),null;if(o=(n.flags&128)!==0,r=s.rendering,r===null)if(o)yo(s,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=la(e),r!==null){for(n.flags|=128,yo(s,!1),o=r.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=t,t=n.child;t!==null;)s=t,e=o,s.flags&=14680066,r=s.alternate,r===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,s.type=r.type,e=r.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(ie,ie.current&1|2),n.child}e=e.sibling}s.tail!==null&&de()>Ot&&(n.flags|=128,o=!0,yo(s,!1),n.lanes=4194304)}else{if(!o)if(e=la(r),e!==null){if(n.flags|=128,o=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!r.alternate&&!re)return Ne(n),null}else 2*de()-s.renderingStartTime>Ot&&t!==1073741824&&(n.flags|=128,o=!0,yo(s,!1),n.lanes=4194304);s.isBackwards?(r.sibling=n.child,n.child=r):(t=s.last,t!==null?t.sibling=r:n.child=r,s.last=r)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=de(),n.sibling=null,t=ie.current,ne(ie,o?t&1|2:t&1),n):(Ne(n),null);case 22:case 23:return vr(),o=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(n.flags|=8192),o&&(n.mode&1)!==0?(Ue&1073741824)!==0&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),null;case 24:return null;case 25:return null}throw Error(u(156,n.tag))}function Rd(e,n){switch(Bs(n),n.tag){case 1:return He(n.type)&&qo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return At(),oe(Re),oe(xe),Ws(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return _s(n),null;case 13:if(oe(ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));Ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return oe(ie),null;case 4:return At(),null;case 10:return Ds(n.type._context),null;case 22:case 23:return vr(),null;case 24:return null;default:return null}}var wa=!1,Ee=!1,Hd=typeof WeakSet=="function"?WeakSet:Set,B=null;function Ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){ue(e,n,o)}else t.current=null}function lr(e,n,t){try{t()}catch(o){ue(e,n,o)}}var hh=!1;function Dd(e,n){if(vs=Mo,e=zi(),cs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var r=0,h=-1,d=-1,w=0,b=0,T=e,k=null;n:for(;;){for(var C;T!==t||a!==0&&T.nodeType!==3||(h=r+a),T!==s||o!==0&&T.nodeType!==3||(d=r+o),T.nodeType===3&&(r+=T.nodeValue.length),(C=T.firstChild)!==null;)k=T,T=C;for(;;){if(T===e)break n;if(k===t&&++w===a&&(h=r),k===s&&++b===o&&(d=r),(C=T.nextSibling)!==null)break;T=k,k=T.parentNode}T=C}t=h===-1||d===-1?null:{start:h,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(bs={focusedElem:e,selectionRange:t},Mo=!1,B=n;B!==null;)if(n=B,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,B=e;else for(;B!==null;){n=B;try{var P=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var A=P.memoizedProps,ce=P.memoizedState,m=n.stateNode,c=m.getSnapshotBeforeUpdate(n.elementType===n.type?A:rn(n.type,A),ce);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(x){ue(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,B=e;break}B=n.return}return P=hh,hh=!1,P}function ko(e,n,t){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&lr(n,t,s)}a=a.next}while(a!==o)}}function ya(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==n)}}function hr(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function uh(e){var n=e.alternate;n!==null&&(e.alternate=null,uh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[gn],delete n[io],delete n[Ns],delete n[wd],delete n[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dh(e){return e.tag===5||e.tag===3||e.tag===4}function ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ur(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vo));else if(o!==4&&(e=e.child,e!==null))for(ur(e,n,t),e=e.sibling;e!==null;)ur(e,n,t),e=e.sibling}function dr(e,n,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(dr(e,n,t),e=e.sibling;e!==null;)dr(e,n,t),e=e.sibling}var ke=null,ln=!1;function Gn(e,n,t){for(t=t.child;t!==null;)fh(e,n,t),t=t.sibling}function fh(e,n,t){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(Po,t)}catch{}switch(t.tag){case 5:Ee||Ht(t,n);case 6:var o=ke,a=ln;ke=null,Gn(e,n,t),ke=o,ln=a,ke!==null&&(ln?(e=ke,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ke.removeChild(t.stateNode));break;case 18:ke!==null&&(ln?(e=ke,t=t.stateNode,e.nodeType===8?Ss(e.parentNode,t):e.nodeType===1&&Ss(e,t),Qt(e)):Ss(ke,t.stateNode));break;case 4:o=ke,a=ln,ke=t.stateNode.containerInfo,ln=!0,Gn(e,n,t),ke=o,ln=a;break;case 0:case 11:case 14:case 15:if(!Ee&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,r=s.destroy;s=s.tag,r!==void 0&&((s&2)!==0||(s&4)!==0)&&lr(t,n,r),a=a.next}while(a!==o)}Gn(e,n,t);break;case 1:if(!Ee&&(Ht(t,n),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(h){ue(t,n,h)}Gn(e,n,t);break;case 21:Gn(e,n,t);break;case 22:t.mode&1?(Ee=(o=Ee)||t.memoizedState!==null,Gn(e,n,t),Ee=o):Gn(e,n,t);break;default:Gn(e,n,t)}}function ph(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Hd),n.forEach(function(o){var a=Ud.bind(null,e,o);t.has(o)||(t.add(o),o.then(a,a))})}}function hn(e,n){var t=n.deletions;if(t!==null)for(var o=0;o<t.length;o++){var a=t[o];try{var s=e,r=n,h=r;e:for(;h!==null;){switch(h.tag){case 5:ke=h.stateNode,ln=!1;break e;case 3:ke=h.stateNode.containerInfo,ln=!0;break e;case 4:ke=h.stateNode.containerInfo,ln=!0;break e}h=h.return}if(ke===null)throw Error(u(160));fh(s,r,a),ke=null,ln=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(w){ue(a,n,w)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mh(n,e),n=n.sibling}function mh(e,n){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(n,e),kn(e),o&4){try{ko(3,e,e.return),ya(3,e)}catch(A){ue(e,e.return,A)}try{ko(5,e,e.return)}catch(A){ue(e,e.return,A)}}break;case 1:hn(n,e),kn(e),o&512&&t!==null&&Ht(t,t.return);break;case 5:if(hn(n,e),kn(e),o&512&&t!==null&&Ht(t,t.return),e.flags&32){var a=e.stateNode;try{It(a,"")}catch(A){ue(e,e.return,A)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,r=t!==null?t.memoizedProps:s,h=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&Fr(a,s),Wa(h,r);var w=Wa(h,s);for(r=0;r<d.length;r+=2){var b=d[r],T=d[r+1];b==="style"?qr(a,T):b==="dangerouslySetInnerHTML"?Vr(a,T):b==="children"?It(a,T):en(a,b,T,w)}switch(h){case"input":Ma(a,s);break;case"textarea":Jr(a,s);break;case"select":var k=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?ft(a,!!s.multiple,C,!1):k!==!!s.multiple&&(s.defaultValue!=null?ft(a,!!s.multiple,s.defaultValue,!0):ft(a,!!s.multiple,s.multiple?[]:"",!1))}a[io]=s}catch(A){ue(e,e.return,A)}}break;case 6:if(hn(n,e),kn(e),o&4){if(e.stateNode===null)throw Error(u(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(A){ue(e,e.return,A)}}break;case 3:if(hn(n,e),kn(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(A){ue(e,e.return,A)}break;case 4:hn(n,e),kn(e);break;case 13:hn(n,e),kn(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(pr=de())),o&4&&ph(e);break;case 22:if(b=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(w=Ee)||b,hn(n,e),Ee=w):hn(n,e),kn(e),o&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!b&&(e.mode&1)!==0)for(B=e,b=e.child;b!==null;){for(T=B=b;B!==null;){switch(k=B,C=k.child,k.tag){case 0:case 11:case 14:case 15:ko(4,k,k.return);break;case 1:Ht(k,k.return);var P=k.stateNode;if(typeof P.componentWillUnmount=="function"){o=k,t=k.return;try{n=o,P.props=n.memoizedProps,P.state=n.memoizedState,P.componentWillUnmount()}catch(A){ue(o,t,A)}}break;case 5:Ht(k,k.return);break;case 22:if(k.memoizedState!==null){yh(T);continue}}C!==null?(C.return=k,B=C):yh(T)}b=b.sibling}e:for(b=null,T=e;;){if(T.tag===5){if(b===null){b=T;try{a=T.stateNode,w?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=T.stateNode,d=T.memoizedProps.style,r=d!=null&&d.hasOwnProperty("display")?d.display:null,h.style.display=Qr("display",r))}catch(A){ue(e,e.return,A)}}}else if(T.tag===6){if(b===null)try{T.stateNode.nodeValue=w?"":T.memoizedProps}catch(A){ue(e,e.return,A)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===e)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===e)break e;for(;T.sibling===null;){if(T.return===null||T.return===e)break e;b===T&&(b=null),T=T.return}b===T&&(b=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:hn(n,e),kn(e),o&4&&ph(e);break;case 21:break;default:hn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(dh(t)){var o=t;break e}t=t.return}throw Error(u(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(It(a,""),o.flags&=-33);var s=ch(e);dr(e,s,a);break;case 3:case 4:var r=o.stateNode.containerInfo,h=ch(e);ur(e,h,r);break;default:throw Error(u(161))}}catch(d){ue(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Od(e,n,t){B=e,gh(e)}function gh(e,n,t){for(var o=(e.mode&1)!==0;B!==null;){var a=B,s=a.child;if(a.tag===22&&o){var r=a.memoizedState!==null||wa;if(!r){var h=a.alternate,d=h!==null&&h.memoizedState!==null||Ee;h=wa;var w=Ee;if(wa=r,(Ee=d)&&!w)for(B=a;B!==null;)r=B,d=r.child,r.tag===22&&r.memoizedState!==null?kh(a):d!==null?(d.return=r,B=d):kh(a);for(;s!==null;)B=s,gh(s),s=s.sibling;B=a,wa=h,Ee=w}wh(e)}else(a.subtreeFlags&8772)!==0&&s!==null?(s.return=a,B=s):wh(e)}}function wh(e){for(;B!==null;){var n=B;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ee||ya(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!Ee)if(t===null)o.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:rn(n.type,t.memoizedProps);o.componentDidUpdate(a,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&yl(n,s,o);break;case 3:var r=n.updateQueue;if(r!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}yl(n,r,t)}break;case 5:var h=n.stateNode;if(t===null&&n.flags&4){t=h;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var w=n.alternate;if(w!==null){var b=w.memoizedState;if(b!==null){var T=b.dehydrated;T!==null&&Qt(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ee||n.flags&512&&hr(n)}catch(k){ue(n,n.return,k)}}if(n===e){B=null;break}if(t=n.sibling,t!==null){t.return=n.return,B=t;break}B=n.return}}function yh(e){for(;B!==null;){var n=B;if(n===e){B=null;break}var t=n.sibling;if(t!==null){t.return=n.return,B=t;break}B=n.return}}function kh(e){for(;B!==null;){var n=B;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ya(4,n)}catch(d){ue(n,t,d)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var a=n.return;try{o.componentDidMount()}catch(d){ue(n,a,d)}}var s=n.return;try{hr(n)}catch(d){ue(n,s,d)}break;case 5:var r=n.return;try{hr(n)}catch(d){ue(n,r,d)}}}catch(d){ue(n,n.return,d)}if(n===e){B=null;break}var h=n.sibling;if(h!==null){h.return=n.return,B=h;break}B=n.return}}var Md=Math.ceil,ka=Te.ReactCurrentDispatcher,cr=Te.ReactCurrentOwner,qe=Te.ReactCurrentBatchConfig,J=0,we=null,fe=null,ve=0,Ue=0,Dt=_n(0),me=0,vo=null,lt=0,va=0,fr=0,bo=null,Oe=null,pr=0,Ot=1/0,Bn=null,ba=!1,mr=null,Jn=null,Ta=!1,$n=null,xa=0,To=0,gr=null,Sa=-1,Na=0;function Be(){return(J&6)!==0?de():Sa!==-1?Sa:Sa=de()}function Yn(e){return(e.mode&1)===0?1:(J&2)!==0&&ve!==0?ve&-ve:vd.transition!==null?(Na===0&&(Na=ci()),Na):(e=Z,e!==0||(e=window.event,e=e===void 0?16:bi(e.type)),e)}function un(e,n,t,o){if(50<To)throw To=0,gr=null,Error(u(185));Gt(e,t,o),((J&2)===0||e!==we)&&(e===we&&((J&2)===0&&(va|=t),me===4&&Vn(e,ve)),Me(e,o),t===1&&J===0&&(n.mode&1)===0&&(Ot=de()+500,Xo&&Wn()))}function Me(e,n){var t=e.callbackNode;vu(e,n);var o=Ho(e,e===we?ve:0);if(o===0)t!==null&&hi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=o&-o,e.callbackPriority!==n){if(t!=null&&hi(t),n===1)e.tag===0?kd(bh.bind(null,e)):rl(bh.bind(null,e)),md(function(){(J&6)===0&&Wn()}),t=null;else{switch(fi(o)){case 1:t=Va;break;case 4:t=ui;break;case 16:t=Lo;break;case 536870912:t=di;break;default:t=Lo}t=Bh(t,vh.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function vh(e,n){if(Sa=-1,Na=0,(J&6)!==0)throw Error(u(327));var t=e.callbackNode;if(Mt()&&e.callbackNode!==t)return null;var o=Ho(e,e===we?ve:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||n)n=Ea(e,o);else{n=o;var a=J;J|=2;var s=xh();(we!==e||ve!==n)&&(Bn=null,Ot=de()+500,ut(e,n));do try{_d();break}catch(h){Th(e,h)}while(!0);Hs(),ka.current=s,J=a,fe!==null?n=0:(we=null,ve=0,n=me)}if(n!==0){if(n===2&&(a=Qa(e),a!==0&&(o=a,n=wr(e,a))),n===1)throw t=vo,ut(e,0),Vn(e,o),Me(e,de()),t;if(n===6)Vn(e,o);else{if(a=e.current.alternate,(o&30)===0&&!Kd(a)&&(n=Ea(e,o),n===2&&(s=Qa(e),s!==0&&(o=s,n=wr(e,s))),n===1))throw t=vo,ut(e,0),Vn(e,o),Me(e,de()),t;switch(e.finishedWork=a,e.finishedLanes=o,n){case 0:case 1:throw Error(u(345));case 2:dt(e,Oe,Bn);break;case 3:if(Vn(e,o),(o&130023424)===o&&(n=pr+500-de(),10<n)){if(Ho(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=xs(dt.bind(null,e,Oe,Bn),n);break}dt(e,Oe,Bn);break;case 4:if(Vn(e,o),(o&4194240)===o)break;for(n=e.eventTimes,a=-1;0<o;){var r=31-on(o);s=1<<r,r=n[r],r>a&&(a=r),o&=~s}if(o=a,o=de()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Md(o/1960))-o,10<o){e.timeoutHandle=xs(dt.bind(null,e,Oe,Bn),o);break}dt(e,Oe,Bn);break;case 5:dt(e,Oe,Bn);break;default:throw Error(u(329))}}}return Me(e,de()),e.callbackNode===t?vh.bind(null,e):null}function wr(e,n){var t=bo;return e.current.memoizedState.isDehydrated&&(ut(e,n).flags|=256),e=Ea(e,n),e!==2&&(n=Oe,Oe=t,n!==null&&yr(n)),e}function yr(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Kd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var a=t[o],s=a.getSnapshot;a=a.value;try{if(!an(s(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vn(e,n){for(n&=~fr,n&=~va,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-on(n),o=1<<t;e[t]=-1,n&=~o}}function bh(e){if((J&6)!==0)throw Error(u(327));Mt();var n=Ho(e,0);if((n&1)===0)return Me(e,de()),null;var t=Ea(e,n);if(e.tag!==0&&t===2){var o=Qa(e);o!==0&&(n=o,t=wr(e,o))}if(t===1)throw t=vo,ut(e,0),Vn(e,n),Me(e,de()),t;if(t===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,dt(e,Oe,Bn),Me(e,de()),null}function kr(e,n){var t=J;J|=1;try{return e(n)}finally{J=t,J===0&&(Ot=de()+500,Xo&&Wn())}}function ht(e){$n!==null&&$n.tag===0&&(J&6)===0&&Mt();var n=J;J|=1;var t=qe.transition,o=Z;try{if(qe.transition=null,Z=1,e)return e()}finally{Z=o,qe.transition=t,J=n,(J&6)===0&&Wn()}}function vr(){Ue=Dt.current,oe(Dt)}function ut(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pd(t)),fe!==null)for(t=fe.return;t!==null;){var o=t;switch(Bs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&qo();break;case 3:At(),oe(Re),oe(xe),Ws();break;case 5:_s(o);break;case 4:At();break;case 13:oe(ie);break;case 19:oe(ie);break;case 10:Ds(o.type._context);break;case 22:case 23:vr()}t=t.return}if(we=e,fe=e=Qn(e.current,null),ve=Ue=n,me=0,vo=null,fr=va=lt=0,Oe=bo=null,st!==null){for(n=0;n<st.length;n++)if(t=st[n],o=t.interleaved,o!==null){t.interleaved=null;var a=o.next,s=t.pending;if(s!==null){var r=s.next;s.next=a,o.next=r}t.pending=o}st=null}return e}function Th(e,n){do{var t=fe;try{if(Hs(),ha.current=fa,ua){for(var o=le.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}ua=!1}if(it=0,ge=pe=le=null,po=!1,mo=0,cr.current=null,t===null||t.return===null){me=1,vo=n,fe=null;break}e:{var s=e,r=t.return,h=t,d=n;if(n=ve,h.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var w=d,b=h,T=b.tag;if((b.mode&1)===0&&(T===0||T===11||T===15)){var k=b.alternate;k?(b.updateQueue=k.updateQueue,b.memoizedState=k.memoizedState,b.lanes=k.lanes):(b.updateQueue=null,b.memoizedState=null)}var C=$l(r);if(C!==null){C.flags&=-257,Yl(C,r,h,s,n),C.mode&1&&Jl(s,w,n),n=C,d=w;var P=n.updateQueue;if(P===null){var A=new Set;A.add(d),n.updateQueue=A}else P.add(d);break e}else{if((n&1)===0){Jl(s,w,n),br();break e}d=Error(u(426))}}else if(re&&h.mode&1){var ce=$l(r);if(ce!==null){(ce.flags&65536)===0&&(ce.flags|=256),Yl(ce,r,h,s,n),As(Rt(d,h));break e}}s=d=Rt(d,h),me!==4&&(me=2),bo===null?bo=[s]:bo.push(s),s=r;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var m=Ul(s,d,n);wl(s,m);break e;case 1:h=d;var c=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Jn===null||!Jn.has(g)))){s.flags|=65536,n&=-n,s.lanes|=n;var x=Gl(s,h,n);wl(s,x);break e}}s=s.return}while(s!==null)}Nh(t)}catch(R){n=R,fe===t&&t!==null&&(fe=t=t.return);continue}break}while(!0)}function xh(){var e=ka.current;return ka.current=fa,e===null?fa:e}function br(){(me===0||me===3||me===2)&&(me=4),we===null||(lt&268435455)===0&&(va&268435455)===0||Vn(we,ve)}function Ea(e,n){var t=J;J|=2;var o=xh();(we!==e||ve!==n)&&(Bn=null,ut(e,n));do try{Id();break}catch(a){Th(e,a)}while(!0);if(Hs(),J=t,ka.current=o,fe!==null)throw Error(u(261));return we=null,ve=0,me}function Id(){for(;fe!==null;)Sh(fe)}function _d(){for(;fe!==null&&!du();)Sh(fe)}function Sh(e){var n=Ch(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,n===null?Nh(e):fe=n,cr.current=null}function Nh(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Ad(t,n,Ue),t!==null){fe=t;return}}else{if(t=Rd(t,n),t!==null){t.flags&=32767,fe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);me===0&&(me=5)}function dt(e,n,t){var o=Z,a=qe.transition;try{qe.transition=null,Z=1,zd(e,n,t,o)}finally{qe.transition=a,Z=o}return null}function zd(e,n,t,o){do Mt();while($n!==null);if((J&6)!==0)throw Error(u(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(bu(e,s),e===we&&(fe=we=null,ve=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Ta||(Ta=!0,Bh(Lo,function(){return Mt(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=qe.transition,qe.transition=null;var r=Z;Z=1;var h=J;J|=4,cr.current=null,Dd(e,t),mh(t,e),id(bs),Mo=!!vs,bs=vs=null,e.current=t,Od(t),cu(),J=h,Z=r,qe.transition=s}else e.current=t;if(Ta&&(Ta=!1,$n=e,xa=a),s=e.pendingLanes,s===0&&(Jn=null),mu(t.stateNode),Me(e,de()),n!==null)for(o=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],o(a.value,{componentStack:a.stack,digest:a.digest});if(ba)throw ba=!1,e=mr,mr=null,e;return(xa&1)!==0&&e.tag!==0&&Mt(),s=e.pendingLanes,(s&1)!==0?e===gr?To++:(To=0,gr=e):To=0,Wn(),null}function Mt(){if($n!==null){var e=fi(xa),n=qe.transition,t=Z;try{if(qe.transition=null,Z=16>e?16:e,$n===null)var o=!1;else{if(e=$n,$n=null,xa=0,(J&6)!==0)throw Error(u(331));var a=J;for(J|=4,B=e.current;B!==null;){var s=B,r=s.child;if((B.flags&16)!==0){var h=s.deletions;if(h!==null){for(var d=0;d<h.length;d++){var w=h[d];for(B=w;B!==null;){var b=B;switch(b.tag){case 0:case 11:case 15:ko(8,b,s)}var T=b.child;if(T!==null)T.return=b,B=T;else for(;B!==null;){b=B;var k=b.sibling,C=b.return;if(uh(b),b===w){B=null;break}if(k!==null){k.return=C,B=k;break}B=C}}}var P=s.alternate;if(P!==null){var A=P.child;if(A!==null){P.child=null;do{var ce=A.sibling;A.sibling=null,A=ce}while(A!==null)}}B=s}}if((s.subtreeFlags&2064)!==0&&r!==null)r.return=s,B=r;else e:for(;B!==null;){if(s=B,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ko(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,B=m;break e}B=s.return}}var c=e.current;for(B=c;B!==null;){r=B;var g=r.child;if((r.subtreeFlags&2064)!==0&&g!==null)g.return=r,B=g;else e:for(r=c;B!==null;){if(h=B,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ya(9,h)}}catch(R){ue(h,h.return,R)}if(h===r){B=null;break e}var x=h.sibling;if(x!==null){x.return=h.return,B=x;break e}B=h.return}}if(J=a,Wn(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(Po,e)}catch{}o=!0}return o}finally{Z=t,qe.transition=n}}return!1}function Eh(e,n,t){n=Rt(t,n),n=Ul(e,n,1),e=Un(e,n,1),n=Be(),e!==null&&(Gt(e,1,n),Me(e,n))}function ue(e,n,t){if(e.tag===3)Eh(e,e,t);else for(;n!==null;){if(n.tag===3){Eh(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Jn===null||!Jn.has(o))){e=Rt(t,e),e=Gl(n,e,1),n=Un(n,e,1),e=Be(),n!==null&&(Gt(n,1,e),Me(n,e));break}}n=n.return}}function Wd(e,n,t){var o=e.pingCache;o!==null&&o.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,we===e&&(ve&t)===t&&(me===4||me===3&&(ve&130023424)===ve&&500>de()-pr?ut(e,0):fr|=t),Me(e,n)}function jh(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ro,Ro<<=1,(Ro&130023424)===0&&(Ro=4194304)));var t=Be();e=En(e,n),e!==null&&(Gt(e,n,t),Me(e,t))}function Fd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),jh(e,t)}function Ud(e,n){var t=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(u(314))}o!==null&&o.delete(n),jh(e,t)}var Ch;Ch=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Re.current)De=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return De=!1,Pd(e,n,t);De=(e.flags&131072)!==0}else De=!1,re&&(n.flags&1048576)!==0&&il(n,na,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;ga(e,n),e=n.pendingProps;var a=Nt(n,xe.current);Pt(n,t),a=Gs(null,n,o,e,a,t);var s=Js();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,He(o)?(s=!0,Zo(n)):s=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ks(n),a.updater=pa,n.stateNode=a,a._reactInternals=n,Zs(n,o,e,t),n=tr(null,n,o,!0,s,t)):(n.tag=0,re&&s&&Cs(n),Ce(null,n,a,t),n=n.child),n;case 16:o=n.elementType;e:{switch(ga(e,n),e=n.pendingProps,a=o._init,o=a(o._payload),n.type=o,a=n.tag=Jd(o),e=rn(o,e),a){case 0:n=nr(null,n,o,e,t);break e;case 1:n=eh(null,n,o,e,t);break e;case 11:n=Vl(null,n,o,e,t);break e;case 14:n=Ql(null,n,o,rn(o.type,e),t);break e}throw Error(u(306,o,""))}return n;case 0:return o=n.type,a=n.pendingProps,a=n.elementType===o?a:rn(o,a),nr(e,n,o,a,t);case 1:return o=n.type,a=n.pendingProps,a=n.elementType===o?a:rn(o,a),eh(e,n,o,a,t);case 3:e:{if(nh(n),e===null)throw Error(u(387));o=n.pendingProps,s=n.memoizedState,a=s.element,gl(e,n),ia(n,o,null,t);var r=n.memoizedState;if(o=r.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){a=Rt(Error(u(423)),n),n=th(e,n,o,t,a);break e}else if(o!==a){a=Rt(Error(u(424)),n),n=th(e,n,o,t,a);break e}else for(Fe=In(n.stateNode.containerInfo.firstChild),We=n,re=!0,sn=null,t=pl(n,null,o,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ct(),o===a){n=Cn(e,n,t);break e}Ce(e,n,o,t)}n=n.child}return n;case 5:return kl(n),e===null&&Ps(n),o=n.type,a=n.pendingProps,s=e!==null?e.memoizedProps:null,r=a.children,Ts(o,a)?r=null:s!==null&&Ts(o,s)&&(n.flags|=32),Xl(e,n),Ce(e,n,r,t),n.child;case 6:return e===null&&Ps(n),null;case 13:return oh(e,n,t);case 4:return Is(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Bt(n,null,o,t):Ce(e,n,o,t),n.child;case 11:return o=n.type,a=n.pendingProps,a=n.elementType===o?a:rn(o,a),Vl(e,n,o,a,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(o=n.type._context,a=n.pendingProps,s=n.memoizedProps,r=a.value,ne(aa,o._currentValue),o._currentValue=r,s!==null)if(an(s.value,r)){if(s.children===a.children&&!Re.current){n=Cn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var h=s.dependencies;if(h!==null){r=s.child;for(var d=h.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=jn(-1,t&-t),d.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var b=w.pending;b===null?d.next=d:(d.next=b.next,b.next=d),w.pending=d}}s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),Os(s.return,t,n),h.lanes|=t;break}d=d.next}}else if(s.tag===10)r=s.type===n.type?null:s.child;else if(s.tag===18){if(r=s.return,r===null)throw Error(u(341));r.lanes|=t,h=r.alternate,h!==null&&(h.lanes|=t),Os(r,t,n),r=s.sibling}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===n){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}Ce(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,o=n.pendingProps.children,Pt(n,t),a=Ve(a),o=o(a),n.flags|=1,Ce(e,n,o,t),n.child;case 14:return o=n.type,a=rn(o,n.pendingProps),a=rn(o.type,a),Ql(e,n,o,a,t);case 15:return ql(e,n,n.type,n.pendingProps,t);case 17:return o=n.type,a=n.pendingProps,a=n.elementType===o?a:rn(o,a),ga(e,n),n.tag=1,He(o)?(e=!0,Zo(n)):e=!1,Pt(n,t),Wl(n,o,a),Zs(n,o,a,t),tr(null,n,o,!0,e,t);case 19:return sh(e,n,t);case 22:return Zl(e,n,t)}throw Error(u(156,n.tag))};function Bh(e,n){return li(e,n)}function Gd(e,n,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,n,t,o){return new Gd(e,n,t,o)}function Tr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jd(e){if(typeof e=="function")return Tr(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fn)return 11;if(e===pn)return 14}return 2}function Qn(e,n){var t=e.alternate;return t===null?(t=Ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ja(e,n,t,o,a,s){var r=2;if(o=e,typeof e=="function")Tr(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Pe:return ct(t.children,a,s,n);case Je:r=8,a|=8;break;case An:return e=Ze(12,t,n,a|2),e.elementType=An,e.lanes=s,e;case Ie:return e=Ze(13,t,n,a),e.elementType=Ie,e.lanes=s,e;case tn:return e=Ze(19,t,n,a),e.elementType=tn,e.lanes=s,e;case he:return Ca(t,a,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bn:r=10;break e;case Xn:r=9;break e;case fn:r=11;break e;case pn:r=14;break e;case Ae:r=16,o=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return n=Ze(r,t,n,a),n.elementType=e,n.type=o,n.lanes=s,n}function ct(e,n,t,o){return e=Ze(7,e,o,n),e.lanes=t,e}function Ca(e,n,t,o){return e=Ze(22,e,o,n),e.elementType=he,e.lanes=t,e.stateNode={isHidden:!1},e}function xr(e,n,t){return e=Ze(6,e,null,n),e.lanes=t,e}function Sr(e,n,t){return n=Ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $d(e,n,t,o,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qa(0),this.expirationTimes=qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Nr(e,n,t,o,a,s,r,h,d){return e=new $d(e,n,t,h,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ze(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ks(s),e}function Yd(e,n,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:o==null?null:""+o,children:e,containerInfo:n,implementation:t}}function Lh(e){if(!e)return zn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(u(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(He(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(u(171))}if(e.tag===1){var t=e.type;if(He(t))return al(e,t,n)}return n}function Ph(e,n,t,o,a,s,r,h,d){return e=Nr(t,o,!0,e,a,s,r,h,d),e.context=Lh(null),t=e.current,o=Be(),a=Yn(t),s=jn(o,a),s.callback=n??null,Un(t,s,a),e.current.lanes=a,Gt(e,a,o),Me(e,o),e}function Ba(e,n,t,o){var a=n.current,s=Be(),r=Yn(a);return t=Lh(t),n.context===null?n.context=t:n.pendingContext=t,n=jn(s,r),n.payload={element:e},o=o===void 0?null:o,o!==null&&(n.callback=o),e=Un(a,n,r),e!==null&&(un(e,a,r,s),ra(e,a,r)),r}function La(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ah(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Er(e,n){Ah(e,n),(e=e.alternate)&&Ah(e,n)}function Vd(){return null}var Rh=typeof reportError=="function"?reportError:function(e){console.error(e)};function jr(e){this._internalRoot=e}Pa.prototype.render=jr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));Ba(e,n,null,null)},Pa.prototype.unmount=jr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ht(function(){Ba(null,e,null,null)}),n[Tn]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var n=gi();e={blockedOn:null,target:e,priority:n};for(var t=0;t<On.length&&n!==0&&n<On[t].priority;t++);On.splice(t,0,e),t===0&&ki(e)}};function Cr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function Qd(e,n,t,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var w=La(r);s.call(w)}}var r=Ph(n,o,e,0,null,!1,!1,"",Hh);return e._reactRootContainer=r,e[Tn]=r.current,so(e.nodeType===8?e.parentNode:e),ht(),r}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var h=o;o=function(){var w=La(d);h.call(w)}}var d=Nr(e,0,!1,null,null,!1,!1,"",Hh);return e._reactRootContainer=d,e[Tn]=d.current,so(e.nodeType===8?e.parentNode:e),ht(function(){Ba(n,d,t,o)}),d}function Ra(e,n,t,o,a){var s=t._reactRootContainer;if(s){var r=s;if(typeof a=="function"){var h=a;a=function(){var d=La(r);h.call(d)}}Ba(n,r,e,a)}else r=Qd(t,n,e,a,o);return La(r)}pi=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ut(n.pendingLanes);t!==0&&(Za(n,t|1),Me(n,de()),(J&6)===0&&(Ot=de()+500,Wn()))}break;case 13:ht(function(){var o=En(e,1);if(o!==null){var a=Be();un(o,e,1,a)}}),Er(e,1)}},Xa=function(e){if(e.tag===13){var n=En(e,134217728);if(n!==null){var t=Be();un(n,e,134217728,t)}Er(e,134217728)}},mi=function(e){if(e.tag===13){var n=Yn(e),t=En(e,n);if(t!==null){var o=Be();un(t,e,n,o)}Er(e,n)}},gi=function(){return Z},wi=function(e,n){var t=Z;try{return Z=e,n()}finally{Z=t}},Ga=function(e,n,t){switch(n){case"input":if(Ma(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var o=t[n];if(o!==e&&o.form===e.form){var a=Qo(o);if(!a)throw Error(u(90));zr(o),Ma(o,a)}}}break;case"textarea":Jr(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}},ni=kr,ti=ht;var qd={usingClientEntryPoint:!1,Events:[lo,xt,Qo,Xr,ei,kr]},xo={findFiberByHostInstance:nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ri(e),e===null?null:e.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||Vd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{Po=Ha.inject(Zd),mn=Ha}catch{}}return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qd,Ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cr(n))throw Error(u(200));return Yd(e,n,null,t)},Ke.createRoot=function(e,n){if(!Cr(e))throw Error(u(299));var t=!1,o="",a=Rh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Nr(e,1,!1,null,null,t,!1,o,a),e[Tn]=n.current,so(e.nodeType===8?e.parentNode:e),new jr(n)},Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ri(n),e=e===null?null:e.stateNode,e},Ke.flushSync=function(e){return ht(e)},Ke.hydrate=function(e,n,t){if(!Aa(n))throw Error(u(200));return Ra(null,e,n,!0,t)},Ke.hydrateRoot=function(e,n,t){if(!Cr(e))throw Error(u(405));var o=t!=null&&t.hydratedSources||null,a=!1,s="",r=Rh;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),n=Ph(n,null,e,1,t??null,a,!1,s,r),e[Tn]=n.current,so(e),o)for(e=0;e<o.length;e++)t=o[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new Pa(n)},Ke.render=function(e,n,t){if(!Aa(n))throw Error(u(200));return Ra(null,e,n,!1,t)},Ke.unmountComponentAtNode=function(e){if(!Aa(e))throw Error(u(40));return e._reactRootContainer?(ht(function(){Ra(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1},Ke.unstable_batchedUpdates=kr,Ke.unstable_renderSubtreeIntoContainer=function(e,n,t,o){if(!Aa(t))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Ra(e,n,t,!1,o)},Ke.version="18.3.1-next-f1338f8080-20240426",Ke}var Wh;function rc(){if(Wh)return Pr.exports;Wh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(f){console.error(f)}}return i(),Pr.exports=sc(),Pr.exports}var Fh;function ic(){if(Fh)return Da;Fh=1;var i=rc();return Da.createRoot=i.createRoot,Da.hydrateRoot=i.hydrateRoot,Da}var lc=ic();const Mr="/fantasy/data/",Kr=i=>fetch(i).then(f=>f.ok?f.json():Promise.reject(new Error(`${f.status} ${i}`))),hc=()=>Kr(`${Mr}books/index.json`),uc=i=>Kr(`${Mr}books/${i}/index.json`),dc=(i,f)=>Kr(`${Mr}books/${i}/w${f}.json`);async function cc(i){const{weeks:f}=await uc(i),u=await Promise.all(f.map(y=>dc(i,y)));return{weeks:f,sheets:u}}function Uh(i){if(!i)return null;const f=i[0]==="−"||i[0]==="-",u=Number(i.slice(1));return Number.isFinite(u)?f?u/(u+100):100/(u+100):null}function Ir({now:i,was:f,prefix:u=""}){if(!i||!f||i===f)return null;const y=Uh(f),N=Uh(i);if(y==null||N==null)return null;const E=N>y;return l.jsxs("span",{className:`bk-move ${E?"up":"down"}`,children:[E?"▲":"▼"," ",u,f," → ",i]})}const Gh=864e5;function Jh(i,f=Date.now()){if(!i)return null;const u=Date.parse(`${i.start}T00:00:00Z`),y=Date.parse(`${i.payout}T00:00:00Z`),N=Math.max(0,Math.min(f,y)-u)/Gh,E=(y-u)/Gh,D=H=>i.principal*((1+i.apy)**(H/365)-1);return{now:D(N),atPayout:D(E),days:Math.floor(N),totalDays:Math.round(E),apy:i.apy,principal:i.principal,settled:f>=y}}const Hr=i=>i.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),fc=i=>i.money.reduce((f,u)=>f+u.pct,0);function pc({standings:i,payingPlaces:f,structure:u,stakes:y,Panel:N}){const E=i[0].dist.length,D=new Set(f),H=u==="winner-take-all";return l.jsxs(N,{title:"PROJECTED STANDINGS",blurb:H?"Where every seat actually finishes, across 25,000 simulated seasons. The gold block is first place — the only finish in this league worth money. Everything to the right of it is the same season with nothing at the end of it.":"Where every seat actually finishes, across 25,000 simulated seasons. The gold blocks are the four finishes that pay; the wider a seat's gold, the more often its season ends with money. Hover any block for the price on that exact finish.",children:[l.jsxs("div",{className:"fb-standings",children:[l.jsxs("div",{className:"fb-st-head",children:[l.jsx("span",{className:"fb-st-rank",children:"#"}),l.jsx("span",{className:"fb-st-seat",children:"SEAT"}),l.jsx("span",{className:"fb-st-num",children:"PROJ"}),l.jsx("span",{className:"fb-st-num",children:"RECORD"}),l.jsx("span",{className:"fb-st-num",children:"PTS"}),l.jsxs("span",{className:"fb-st-dist",children:["FINISH DISTRIBUTION — 1ST (",E,"TH) "]}),l.jsx("span",{className:"fb-st-num",children:H?"WINS":"MONEY"}),l.jsx("span",{className:"fb-st-num",children:"LAST"})]}),i.map(S=>l.jsxs("div",{className:"fb-st-row",children:[l.jsx("span",{className:"fb-st-rank",children:S.rank}),l.jsxs("span",{className:"fb-st-seat",children:[l.jsx("span",{className:"fb-st-team",children:S.team}),l.jsx("span",{className:"fb-st-mgr",children:S.manager})]}),l.jsx("span",{className:"fb-st-num strong",children:S.projFinish.toFixed(1)}),l.jsxs("span",{className:"fb-st-num",children:[S.projWins.toFixed(1),"–",S.projLosses.toFixed(1)]}),l.jsx("span",{className:"fb-st-num",children:S.projPoints.toLocaleString("en-US")}),l.jsx("span",{className:"fb-st-dist",children:S.dist.map((O,$)=>{const z=$+1,W=S.money.find(be=>be.place===z);return l.jsx("span",{className:D.has(z)?"fb-seg pays":"fb-seg",style:{flexGrow:Math.max(O,.15)},title:W?`${$h(z)} — ${W.label} — ${W.pct}% — ${W.price}`:`${$h(z)} — ${O}%${z===E?" — last":""}`},z)})}),l.jsxs("span",{className:"fb-st-num strong",children:[fc(S).toFixed(1),"%"]}),l.jsxs("span",{className:"fb-st-num dim",children:[S.last,"%"]})]},S.rosterId))]}),l.jsxs("p",{className:"fb-note",children:["PROJ is the average finishing place across every simulated season, so it moves before any single market does — a seat can drift from 6.4 to 6.9 without its championship price changing at all."," ",H?"Only first place pays in this league, so the MONEY column is the championship number.":"MONEY is the chance of finishing in one of the four paying places — first, second, third, or fourth exactly."]})]})}const $h=i=>`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`;function mc({sheet:i,prev:f,Panel:u}){const{futures:y,stakes:N}=i,E=y.structure==="winner-take-all",D=O=>y.markets.find($=>$.key===O),H=O=>{var $,z,W;return(W=(z=($=f==null?void 0:f.futures)==null?void 0:$.markets)==null?void 0:z.find(be=>be.key===O))==null?void 0:W.rows},S=({market:O,blurb:$,compact:z})=>{const W=D(O);return W?l.jsx(u,{title:W.pays?`${W.name} — PAYS ${W.pays.toUpperCase()}`:W.name,blurb:W.copy??$,children:l.jsx(gc,{rows:W.rows,prevRows:H(O),compact:z})}):null};return l.jsxs(l.Fragment,{children:[l.jsx(pc,{standings:y.standings,payingPlaces:y.payingPlaces,structure:y.structure,stakes:N,Panel:u}),l.jsx(S,{market:"championship",blurb:E?`${N.pot}, winner take all. Nobody else gets a cent, which makes this the entire financial book — every other market on this sheet is pride.`:"The headline, and the only board here that is not a slice of the table above: winning the bracket is not the same question as finishing high, because three playoff weeks are three more coin flips."}),!E&&l.jsx(wc,{sheet:i,Panel:u}),l.jsx(S,{market:"lastPlace"}),l.jsx(u,{title:"SEASON WIN TOTALS",blurb:"Over/under on regular-season wins, per seat. The line is the half-win the simulated seasons split closest to evenly; unlike a weekly total, wins are integers, so these are priced on the real number rather than posted flat.",children:l.jsx("div",{className:"fb-wintotals",children:[...y.winTotals].sort((O,$)=>$.expected-O.expected).map(O=>l.jsxs("div",{className:"fb-wintotal",children:[l.jsx("span",{className:"fb-wintotal-name",children:O.team}),l.jsx("span",{className:"fb-wintotal-line",children:O.line.toFixed(1)}),l.jsxs("span",{className:"fb-wintotal-prices",children:["O ",O.over," · U ",O.under]}),l.jsxs("span",{className:"fb-wintotal-exp",children:[O.expected," proj"]})]},O.rosterId))})})]})}function gc({rows:i,prevRows:f,compact:u}){const y=Math.max(...i.map(N=>N.pct),1);return l.jsx("div",{className:"fb-runners",children:i.map((N,E)=>{var D;return l.jsxs("div",{className:E===0?"fb-runner lead":"fb-runner",children:[l.jsxs("span",{className:"fb-runner-main",children:[l.jsx("span",{className:"fb-runner-team",children:N.team}),l.jsx("span",{className:"fb-bar",style:{width:`${N.pct/y*100}%`}}),!u&&l.jsx("span",{className:"fb-runner-mgr",children:N.manager})]}),l.jsxs("span",{className:"fb-runner-pct",children:[N.pct,"%"]}),l.jsxs("span",{className:"bk-line-right",children:[l.jsx(Ir,{now:N.price,was:(D=f==null?void 0:f.find(H=>H.rosterId===N.rosterId))==null?void 0:D.price}),l.jsx("span",{className:"bk-price",children:N.price??"OFF"})]})]},N.rosterId)})})}function wc({sheet:i,Panel:f}){var E,D;const u=i.stakes.hysa,[y,N]=Pn.useState(()=>Jh(u));return Pn.useEffect(()=>{if(!u)return;const H=setInterval(()=>N(Jh(u)),6e4);return()=>clearInterval(H)},[u]),l.jsx(f,{title:"THE INTEREST — 4TH EXACTLY",blurb:u?`First takes ${(E=i.stakes.payouts[0])==null?void 0:E.label}, second ${(D=i.stakes.payouts[1])==null?void 0:D.label}, third gets the buy-in back. Fourth gets the interest the pot has earned sitting in a savings account at ${(u.apy*100).toFixed(2)}% APY. That is a real prize, this is what it is worth right now, and the fourth block of every bar above is who is most likely to collect it.`:"Fourth place, exactly.",children:y&&l.jsxs("div",{className:"fb-headline",children:[l.jsxs("span",{children:[l.jsx("span",{className:"fb-headline-label",children:Hr(y.now)}),l.jsxs("span",{className:"fb-headline-copy",children:["accrued on ",Hr(y.principal)," over ",y.days," of ",y.totalDays," days ·"," ",y.settled?"final":`${Hr(y.atPayout)} if it runs to payout`]})]}),l.jsx("span",{className:"fb-headline-price",children:"4TH"})]})})}let yc=0;const Xe=()=>`md${yc++}`;function dn({text:i,className:f}){if(!i)return null;const u=i.trim().split(/\n{2,}/);return l.jsx("div",{className:f,children:u.map(y=>tu(y))})}function tu(i){const f=i.split(`
`);if(/^###\s/.test(f[0])){const u=l.jsx("h3",{className:"md-h3",children:Ln(f[0].replace(/^###\s+/,""))},Xe());return f.length>1?[u,tu(f.slice(1).join(`
`))]:u}return/^(---|\*\*\*)$/.test(f[0].trim())?l.jsx("hr",{className:"md-hr"},Xe()):f.every(u=>/^>\s?/.test(u))?l.jsx("blockquote",{className:"md-quote",children:Ln(f.map(u=>u.replace(/^>\s?/,"")).join(" "))},Xe()):f.every(u=>/^[-*]\s+/.test(u))?l.jsx("ul",{className:"md-list",children:f.map(u=>l.jsx("li",{children:Ln(u.replace(/^[-*]\s+/,""))},Xe()))},Xe()):f.every(u=>/^\d+\.\s+/.test(u))?l.jsx("ol",{className:"md-list",children:f.map(u=>l.jsx("li",{children:Ln(u.replace(/^\d+\.\s+/,""))},Xe()))},Xe()):l.jsx("p",{className:"md-p",children:Ln(f.join(" "))},Xe())}const kc=[{re:/`([^`]+)`/,render:i=>l.jsx("code",{className:"md-code",children:i[1]},Xe())},{re:/\*\*([^*]+)\*\*/,render:i=>l.jsx("strong",{children:Ln(i[1])},Xe())},{re:/(?:\*|_)([^*_]+)(?:\*|_)/,render:i=>l.jsx("em",{children:Ln(i[1])},Xe())},{re:/\[([^\]]+)\]\(([^)]+)\)/,render:i=>l.jsx("a",{className:"bk-link",href:i[2],children:Ln(i[1])},Xe())}];function Ln(i){let f=null;for(const N of kc){const E=i.match(N.re);E&&(f==null||E.index<f.at.index)&&(f={rule:N,at:E})}if(!f)return i;const{rule:u,at:y}=f;return[i.slice(0,y.index),u.render(y),...[].concat(Ln(i.slice(y.index+y[0].length)))]}function vc({settled:i,punishment:f,Panel:u,note:y,benchNote:N,punishmentNote:E}){const{reportCard:D}=i;return l.jsxs(l.Fragment,{children:[l.jsxs(u,{title:`HOW WEEK ${i.week} SETTLED`,blurb:y?null:"Final scores against the lines this book posted last Wednesday. Side A is the side that was favoured.",children:[y&&l.jsx(dn,{text:y,className:"fb-prose-cols"}),l.jsxs("div",{className:"fb-settled-head",children:[l.jsx("span",{children:"RESULT"}),l.jsx("span",{children:"LINE"}),l.jsx("span",{className:"spread",children:"ATS"}),l.jsx("span",{className:"total",children:"TOTAL"})]}),l.jsx("div",{className:"fb-card",children:i.matchups.map(H=>l.jsx(bc,{m:H},`${H.a.rosterId}-${H.b.rosterId}`))}),l.jsxs("div",{className:"fb-report",children:[l.jsx("h3",{className:"fb-report-title",children:"THE MODEL'S REPORT CARD"}),l.jsxs("div",{className:"fb-report-grid",children:[l.jsx(Dr,{label:"FAVOURITES SU",record:D.straightUp}),l.jsx(Dr,{label:"FAVOURITES ATS",record:D.ats}),l.jsx(Dr,{label:"TOTALS — OVER",record:D.total}),l.jsxs("div",{className:"fb-report-cell",children:[l.jsx("span",{className:"fb-report-num",children:D.brier.toFixed(3)}),l.jsx("span",{className:"fb-report-label",children:"BRIER SCORE"}),l.jsxs("span",{className:"fb-report-note",children:[D.brier<D.coinFlip?"better":"worse"," than ",D.coinFlip.toFixed(2),", which is what you score by calling every game a coin flip"]})]})]}),l.jsxs("p",{className:"fb-note",children:["The book expected ",D.expectedChalkWins.toFixed(2)," of its ",D.games," favourites to win. "," ",D.straightUp.w," did. Prices are graded on the fair probability, before the house margin — the margin is the book's edge, not the model's opinion."]})]})]}),l.jsxs("div",{className:"fb-grid2",children:[l.jsxs(u,{title:`${i.punishment.low.name} — SETTLED`,blurb:f.weekly.copy,children:[l.jsx(Yh,{outcome:i.punishment.low,verb:"took it",copy:i.punishment.low.hitFavourite?"The board's own favourite. The book called this one.":`Priced ${i.punishment.low.price}, ${qh(i.punishment.low.rank)} of ${i.punishment.low.of} on the board.`}),i.punishment.high&&l.jsx(Yh,{outcome:i.punishment.high,verb:"picks",copy:`${i.punishment.high.name} — ${i.punishment.high.price} on the board, ${qh(i.punishment.high.rank)} of ${i.punishment.high.of}.`}),i.punishment.joint&&l.jsx("p",{className:"fb-note",children:i.punishment.joint.hit?l.jsxs(l.Fragment,{children:["The joint ",l.jsx("b",{children:"hit"})," at ",i.punishment.joint.hit.price,". It was one of"," ",i.punishment.joint.offered," priced pairings out of"," ",i.punishment.joint.offered>1?"dozens":"many"," possible."]}):l.jsxs(l.Fragment,{children:["None of the ",i.punishment.joint.offered," featured joints hit — the pairing that landed was"," ",i.punishment.joint.low.team," and ",i.punishment.joint.high.team,", which the sheet did not print."]})}),E&&l.jsx(dn,{text:E,className:"fb-panel-prose"})]}),l.jsxs(u,{title:"POINTS LEFT ON THE BENCH",blurb:"Every line on last week's sheet assumed an optimal lineup. This is what that assumption actually cost, scored on real points — the model's own §5.4 bias, measured rather than disclosed.",children:[N&&l.jsx(dn,{text:N,className:"fb-panel-prose"}),l.jsx("div",{className:"fb-bench",children:i.bench.slice(0,5).map((H,S)=>l.jsxs("div",{className:S===0?"fb-bench-row lead":"fb-bench-row",children:[l.jsxs("span",{className:"fb-bench-main",children:[l.jsx("span",{className:"fb-runner-team",children:H.team}),l.jsxs("span",{className:"fb-runner-mgr",children:[H.points.toFixed(2)," of a possible ",H.best.toFixed(2),H.missed.length>0&&l.jsxs(l.Fragment,{children:[" · benched ",H.missed.map(O=>`${O.name} ${O.points.toFixed(1)}`).join(", ")]})]})]}),l.jsxs("span",{className:"bk-price",children:["−",H.left.toFixed(1)]})]},H.rosterId))})]})]})]})}const Dr=({label:i,record:f})=>l.jsxs("div",{className:"fb-report-cell",children:[l.jsxs("span",{className:"fb-report-num",children:[f.w,"–",f.l,f.p?`–${f.p}`:""]}),l.jsx("span",{className:"fb-report-label",children:i})]}),Yh=({outcome:i,verb:f,copy:u})=>l.jsxs("div",{className:"fb-verdict",children:[l.jsxs("span",{className:"fb-slip-text",children:[l.jsx("b",{children:i.team})," ",f," — ",i.points.toFixed(2),l.jsxs("span",{className:"fb-slip-note",children:[i.manager," · ",u]})]}),l.jsx("span",{className:"bk-price",children:i.price??"—"})]});function bc({m:i}){return i.played?l.jsxs("div",{className:"fb-settled",children:[l.jsxs("div",{className:"fb-seats",children:[l.jsx(Vh,{seat:i.a,points:i.a.points,won:i.winner==="a",push:i.winner==="push"}),l.jsx(Vh,{seat:i.b,points:i.b.points,won:i.winner==="b",push:i.winner==="push"})]}),l.jsxs("div",{className:"fb-cell",children:[l.jsx("span",{className:"fb-odds",children:i.posted.moneyline.a}),l.jsx(Qh,{hit:i.winner==="a",push:i.winner==="push"})]}),l.jsxs("div",{className:"fb-cell spread",children:[l.jsx("span",{className:"fb-odds",children:i.posted.spread.a}),l.jsx(Qh,{hit:i.ats==="a",push:i.ats==="push"})]}),l.jsxs("div",{className:"fb-cell total",children:[l.jsx("span",{className:"fb-odds",children:i.total.toFixed(1)}),l.jsxs("span",{className:"fb-settled-sub",children:[i.ou==="push"?"push":i.ou==="a"?"over":"under"," ",i.posted.total.line.toFixed(1)]})]})]}):null}const Vh=({seat:i,points:f,won:u,push:y})=>l.jsxs("span",{className:u?"fb-seat fav":"fb-seat",children:[l.jsx("span",{className:"fb-seat-name",children:i.team}),l.jsxs("span",{className:"fb-seat-mgr",children:[i.manager,y?" · tie":""]}),l.jsx("span",{className:"fb-seat-proj",children:f.toFixed(2)})]}),Qh=({hit:i,push:f})=>l.jsx("span",{className:f?"fb-mark push":i?"fb-mark hit":"fb-mark miss",children:f?"PUSH":i?"✓":"✗"}),qh=i=>i==null?"unpriced":`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`,Tc=`---
league: dkenasty
week: 2
headline: THE ONLY BOOK THAT BEAT THE COIN
byline: The House · Week 2
---

<!-- DKENASTY SPORTSBOOK · week 2 · seed 1592606397
     Every lowercase heading is a SLOT and lands in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it. -->

## lede

<!-- The DNs 199.86 vs 149.4 projected (+50.46), biggest beat anywhere. Title 20.1% → 23.8%.
     ETN SZN low at 109.46, priced +820, 5th of 12, left 33.82 on the bench. -->

**The DNs scored 199.86 points.** Not 199.86 against a bad projection — 199.86 against a
projection of 149.4, which was already the highest number on the board. They beat their
own forecast by 50.46 — no seat in this league has ever been handed a bigger week by
this book's own standards — and they did it while leaving 12.3 on the bench, which by the
standards of this weekend counts as restraint.

The market has responded the way a market responds. They were +270 to win this thing
before a snap was played; they are **+210 now**, the shortest title price this book has
posted, and they are laying **24 points** this week — a −470 moneyline, which is a number
this house did not think it would ever print. It went and checked. Both lineups are
genuinely optimal, the bench included, and the best player Trust the Process has in
reserve is a tight end worth 10.2. The gap is real. The line is the line.

## settled

<!-- 5-1 SU, 5-1 ATS, 3-3 totals. Brier 0.232 vs 0.25. Expected 3.42 chalk wins, got 5. -->

Five-and-one on favourites, five-and-one against the spread, and a **Brier score of
0.232** against the 0.250 a coin flip scores. That is the model beating the coin in its
first week of existence, which is one week more than it was entitled to.

Before anyone gets attached to that: the model expected 3.42 of its six favourites to
win and five of them did. Running a point and a half ahead of your own forecast over six
games is variance wearing a lab coat. The house is not claiming a read. It is claiming a
week.

## bench

ETN SZN scored the fewest points in the league while Dallas Goedert put up 23.7 and
Jordan Love put up 20.48, both of them watching. The 33.82 he left behind is the
difference between the lowest score in the league and the third-highest, and therefore
the difference between owing the parlay and never thinking about it again.

## card

The board has split in two. Four games are priced inside five points and two of them are
effectively coin flips. The other two — The DNs at −470 and Tal top Smitty bottom at
−230 — are the first genuinely lopsided lines this book has posted.

## matchup:2-9

<!-- The DNs −470 / −24.0, proj 145.8 vs 122.1. −470 is 76.7% fair. -->

**−470.** The house's own house rule says a −400 weekly moneyline means the variance
model is broken, so this line got audited before it got posted. It survived. The DNs
optimise to 145.8 — Smith-Njigba, Collins and St. Brown all north of 17, Achane, Jeanty
and McBride behind them — and Trust the Process optimises to 122.1, topping out at Jayden
Daniels and then falling off a cliff into a 5.3 defence and a kicker. The fair number is
76.7%, and a closed-form check off the fitted variance says 76.0%. Everything agrees.

It is still a fantasy football game, which means it comes in about one Sunday in four.
That is the trade the plus money is for.

## matchup:10-6

<!-- ETN SZN −190 / −9.0. Last week: 109.46 (low scorer) vs 138.84. -->

Last week's low scorer opens this week as a nine-point favourite. Nothing about the
roster changed; the lineup card did. This is the cleanest illustration on the sheet of
what the settlement panel above is actually measuring — the model never thought ETN SZN
was the worst team in the league, it thought he was the fifth-likeliest to *finish*
lowest, at +820, and then he benched forty-four points of tight end and quarterback.

## matchup:1-4

<!-- Tal top Smitty bottom −230 / −11.5. Lane vs MBurnes. -->

The commissioner, who has still not invented the season-loser punishment, lays 11.5
against the man who has been the favourite to serve it since the day the board opened.
Lane scored 121.4 against a 141.4 projection last week, the second-worst miss in the
league, and is favoured here anyway. Make of that what you will.

## punishment

<!-- Board favourite was Trust the Process at +420; ETN SZN came in at +820, 5th of 12.
     Lifetime parlay record: 0 hits. -->

So: eleven legs, ten dollars, one leg chosen by each of the other managers, winnings
split league-wide, and a **lifetime record of zero.** The streak is intact and the first
entrant of 2026 is ETN SZN, who arrives at the window having benched a starting
quarterback.

The board's own favourite was Trust the Process at +420, and he came third-lowest — two
seats away from the window. Chalk went 0-for-1 on a market where the chalk is a 15% shot,
which is roughly what should happen.

## THE STANDING INVITATION

The season-loser punishment in this league remains, officially, \`TBD\`. It has been TBD
since the board opened. It was TBD all offseason, during which the commissioner found
time to propose several trades but none to specify what happens to the person who
finishes twelfth.

The market has noticed. **Little St. Lane's is +380 to owe a punishment that does not
exist**, which would make it two unserved punishments, and the house would like to point
out that an undefined forfeit compounds like interest and settles like nothing at all.
Somebody write it down.
`,xc=`---
league: dkenasty
week: 3
headline: THE HOUSE DISCLOSES AN INTEREST
byline: The House · Week 3
---

<!-- DKENASTY · week 3
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!--
     biggest edge: Yan Dynasty −650 over Little St. Lane’s (80.6%, −27.5)
     5-9: 3 AM afters (kdutta) −470 over Trust the Process. Kyler Murray (FA, 17.6) fills TtP's QB.
       Daniels OUT, Mendoza is Cousins' backup. Without Kyler: 98.3 vs 138.5 → priced −2400 on the first build.
     last week: The DNs 181.7 high, ETN SZN 64.1 low
     the book went 3-3 on favourites, Brier 0.212
-->

**In the interest of full disclosure: the man who runs this book is a −470 favourite
this week, and the only reason it isn't −2400 is that the book wouldn't let it be.**

Here's what happened. Trust the Process has no quarterback. Jayden Daniels is out,
and the backup Chris drafted, Fernando Mendoza, is behind Kirk Cousins on the Raiders'
depth chart and projects for nothing. The first build of this sheet priced that empty
slot at zero and put 3 AM afters in bull room at **90.6%**. That tripped a guard the
house wrote to stop itself from ever posting a lock. The model was right. The guard did its
job anyway. So the house had a choice between loosening its own rules and pricing
Chris as a man who'll pick up a quarterback before Sunday.

It picked the second one. Trust the Process now carries **Kyler Murray, 17.6 points,
off waivers**, a player Chris doesn't own. The line moved from −2400 to −470. Of all
the things the house could do to its own game, it made that game *worse* for the
house. Remember that when someone calls this book rigged.

## settled

<!--
     favourites 3-3 SU, 2-4 ATS, totals 2-4 over
     Brier 0.212 vs 0.25 for a coin flip; expected 3.6 chalk wins, got 3
     upsets: Disciples 129.18 over ETN SZN (−190) 64.1; Empyrean over Rat (−120); Saddam over Redskins (−120)
     low scorer ETN SZN 64.1 — priced +1100, 7 of 12
     high scorer The DNs 181.7
     biggest miss: ETN SZN 64.1 vs 130.7 projected (-66.6)
-->

Three-and-three straight up, two-and-four against the number, and still a Brier of
**0.212**, which beats the coin by a respectable margin. That's how you can go .500 and
still be right. The two coin-flip games went the way coin flips go, and the only real
opinion the book lost was ETN SZN at −190. ETN SZN then scored 64.1.

That's 66.6 under projection, the biggest miss on the board. It isn't a bad beat. It's a roster that stopped trying.

## bench

<!--
     The DNs left 40.1 — Matthew Stafford 28.0, Tre Tucker 22.9
     ETN SZN left 31.5 — George Kittle 18, Oronde Gadsden 9.8, Keaton Mitchell 4.9
     Empyrean Athletic left 29.8 — Stefon Diggs 21.7, TreVeyon Henderson 13.6, Baker Mayfield 13.2
-->

The DNs scored **181.72**, the best score in the league, and left 40.1 more on the
bench, including a 28-point Matthew Stafford. The optimal lineup was 221.8. At some
point this stops being a fantasy team and becomes a zoning dispute.

ETN SZN left 31.5 on the bench and would still have lost by 33. That's the rare bench
number that doesn't make things worse, because nothing could.

## card

<!-- the board spans 246.5 to 286 on totals -->

Two lines past −600, one pick'em and a middle that actually means something. This
board looks like the NFL: a couple of teams
that are clearly better and a few that are clearly finding out.

## matchup:5-9

<!-- 3 AM afters in bull room vs Trust the Process
     −470 / +300 — 76.6% fair
     spread −22.5, total 253.5
     projected 138.5 vs 115.9 (Kyler Murray, FA, 17.6 in the QB slot)
     last week 3 AM afters in bull room: 118.9 (projected 133, -14.1)
     last week Trust the Process: 99.4 (projected 122.1, -22.7), lost to The DNs at +300
-->

The house is laying 22.5 against a man with no quarterback, and it wants that on the
record twice. Last week Trust the Process was a +300 underdog to The DNs and lost by
82. This week it's +300 again, against the house. Chris is 0-2, the favourite to finish
last at +340, and one waiver claim from making this a football game. Chris, if you're
reading: the house would like you to claim a quarterback. It would also like you not to.

## matchup:3-4

<!-- Yan Dynasty vs Little St. Lane’s
     −650 / +380 — 80.6% fair
     spread −27.5, total 263
     projected 146 vs 118.2
     last week Yan Dynasty: 165.2 (projected 138.1, +27.1)
     last week Little St. Lane’s: 118.6 (projected 117.6, +1.0), lost 121–118.56 to Lane (−230), covered
-->

MBurnes is 0-2, a 27.5-point underdog, and 2.1% to win the league. Week two he lost
by 2.44 to **Lane**, the commissioner who still hasn't invented the punishment MBurnes
still owes. So the man who can't define a punishment beat the man
who won't serve one, by a field goal, and both of them seemed fine with it.

MBurnes is +350 to finish last, a hair behind Chris. The season-loser forfeit is still
listed as **TBD**. Very little that has happened in this league since 2025 has improved
MBurnes's position on either count.

## matchup:2-8

<!-- The DNs vs Rat
     −350 / +240 — 72.3% fair
     spread −19.5, total 286
     projected 153.8 vs 133.7
     last week The DNs: 181.7 (projected 145.8, +35.9)
     last week Rat: 114.5 (projected 132.8, -18.3)
-->

The DNs have scored 381.58 in two weeks, project for the most points in the league
again, and are **24.9% to win the whole thing**. In a winner-take-all league with twelve
teams, that's the favourite running two lengths clear at the first turn. The highest
total on the board belongs to this game, and almost all of it belongs to one side.

## matchup:12-1

<!-- Saddam Hussein Al-B’esnoy vs Tal top Smitty bottom
     −120 / −115 — 50.4% fair
     spread −0.5, total 262
     projected 131.5 vs 131.6
-->

A tenth of a point apart. The house can't separate them and isn't going to pretend
otherwise. The commissioner is playing for his second straight win and, presumably,
further time to not write the punishment.

## punishment

<!-- THE PARLAY WINDOW — low scorer
     Trust the Process +290 (20.4%)
     Little St. Lane’s +370 (17.2%)
     Disciples of Yakub +540 (12.5%)
     week 2: ETN SZN 64.1, priced +1100 (7th of 12)
     TODO(kunal): the parlay — legs, which one killed it, how early. Replace the bracketed line.
     lifetimeHits in config is 0; if it HIT, bump config/leagues/dkenasty.json punishment.weekly.lifetimeHits
     (that is a builder input — it only changes sheets built after the edit, and must be gated if it
     would change a posted sheet's bytes).
-->

ETN SZN owned the parlay window after a 64.1 that came off the seventh line at
+1100. It did not hit.

The book's lifetime record on the eleven-leg parlay stays **0 hits**. The house notes
that eleven legs at −110 each pay about 1,230-to-1, and that the league's
leg-pickers have been treating it like a charity auction.

This week the favourite is Chris at +290. That's with the phantom quarterback. Without
one he's a clear favourite to be placing a ten-dollar bet with eleven other people's
ideas in it.
`,Sc=`---
league: dkenasty
week: 4
headline: MINUS SIX FIFTY
byline: The House · Week 4
---

<!-- DKENASTY SPORTSBOOK · week 4 · seed 1592621279
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.

     House rule for this book: DKEnasty prose never cites another league. -->

## lede

<!--
     biggest edge: Yan Dynasty −240 over Saddam Hussein Al-B’esnoy (65.9%, −14.0)
     closest game: The Washington Redskins vs ETN SZN at −125 (51.3%)
     highest total: 288.5
     last week: The Washington Redskins 171.2 high, Trust the Process 87.9 low
     the book went 5-1 on favourites, Brier 0.234
     THE upset: Little St. Lane’s (MBurnes) 109.92 over Yan Dynasty 105.84. Yan −650 / 80.6% —
       the biggest price ANY of the three books has posted (prior max 77.8%). Yan left 29 on the bench (Michael Wilson 25.9).
     Brier of that one game 0.650; other five combined 0.752 (avg 0.150).
-->

**Last week this book posted the biggest number it has ever posted. Yan Dynasty, −650.
An 80.6% favourite. It lost.**

It lost to Burnes. That's the same Burnes who still owes this league a punishment from
last season, has never been in a hurry to find out what it is, and opened this season
as the favourite to owe a second one. Little St. Lane's scored 109.92, which isn't a
good score. Yan Dynasty scored 105.84 with Michael Wilson's 25.9 on the bench. Nobody
played well. One man played worse, and he was the −650.

For the record, the house doesn't regret the price. An 80.6% favourite is supposed to
lose about one week in five, and this was that week. The house would just like it noted
that it happened to the man whose team is named after a dynasty.

## settled

<!--
     favourites 5-1 SU, 3-3 ATS, totals 1-5 over
     Brier 0.234 vs 0.25 for a coin flip; expected 3.9 chalk wins, got 5
     per-game Brier: Yan 0.650 | other five 0.161 0.213 0.077 0.246 0.055 (= 0.752)
     low scorer Trust the Process 87.9 — priced +290, 1 of 12
     high scorer The Washington Redskins 171.2
     biggest beat: Disciples of Yakub 170.5 vs 122.8 projected (+47.7)
     biggest miss: Yan Dynasty 105.8 vs 146 projected (-40.2)
     Redskins–Disciples total 341.62 against a posted 246.5: over by 95.1
-->

Five of six favourites won, and the Brier score is still only **0.234**, barely better
than a coin. That's what one −650 does to a report card. The other five games averaged
0.150, which is excellent. The Yan Dynasty game scored 0.650 on its own, almost as much
as the other five combined. It's the fantasy version of getting a C because one
exam was worth half the grade.

The totals went 1-5. The one over was Redskins vs. Disciples, posted at 246.5, which
finished at **341.62**. That's 95 points over. The two teams combined to outscore every
other game on the board by at least 78, and one of them still lost. Fucking Call.

## bench

<!--
     Disciples of Yakub left 34.0 — Bo Nix 25.1, Kalif Raymond 21, Pat Bryant 14.4 — lost by 0.70; Goff 19.36 started at QB
     ETN SZN left 30.9 — Jordan Love 19.5, Keenan Allen 18.3, Keaton Mitchell 13.7
     Yan Dynasty left 29 — Michael Wilson 25.9, Brian Robinson 11, Colston Loveland 7.1 — lost by 4.08
     Trust the Process: best 114.22 → NOT low scorer. Tal top Smitty bottom (lanek12, commissioner) 104.1 would have been.
-->

Call scored **170.46** and lost. He lost by 0.70, with Bo Nix's 25.14 on the bench
and Jared Goff's 19.36 starting at quarterback. Make that swap (and endure the shame of starting Bo Nix) 
and he wins by five. Leave it, and he's put up the second-highest score of the week, lost the highest-scoring game
of the week, and gets to spend the next seven days thinking about one decision.

Yan Dynasty left 29 points on the bench and lost by 4.08. The −650 didn't lose that
game. It was benched.

And then Chris. Chris left 26.3 on the bench (possibly as a failed tanking maneuver), 
including a 20-point Jordan Addison. His optimal lineup scores **114.22**. 
That isn't the low score. The low score would then have been Tal top Smitty bottom at 104.1, 
which means the eleven-leg parlay would have been
placed by Commissioner Lane. 
The same guy who has gone a full offseason without designing the punishment he's responsible for nor collecting the money for the league he founded. 
The house can't think of a better way to motivate him than being punished first.

## card

<!-- the board spans 241 to 288.5 on totals -->

Two 3-0 teams playing each other. Two 0-3 teams with very different reasons for being
0-3. And the two seats at the top of the last-place board meet head-to-head, with one
man's unserved punishment and the other man's roster both on the line.

## matchup:11-10

<!-- The Washington Redskins vs ETN SZN
     −125 / −110 — 51.3% fair
     spread −1.0, total 254
     projected 128.1 vs 126.9
     last week The Washington Redskins: 171.2 (projected 125.3, +45.9) — won by 0.70
     last week ETN SZN: 109.2 (projected 125.4, -16.2)
     ETN SZN 0-3, fewest points in the league (282.8). Placed the parlay weeks 1 and 2. Picked up Alvin Kamara Sunday.
-->

The Redskins scored 171.16 last week and won by seventy hundredths of a point, which is
the most stressful way possible to put up the best score of the week. This week they're
a one-point favourite over ETN SZN. ETN SZN is 0-3 with the fewest points in the league,
and has placed **the parlay twice already**. That makes him the most experienced
sports bettor in this league, and possibly the least successful.

## matchup:2-7

<!-- The DNs vs Empyrean Athletic
     −140 / +100 — 53.9% fair
     spread −3.5, total 288.5
     projected 147.2 vs 143.1
     last week The DNs: 133.5 (projected 153.8, -20.3) — won by 3.70 at −19.5
     last week Empyrean Athletic: 119.9 (projected 133.7, -13.8)
     records: both 3-0. PF: The DNs 515.1 (1st), Empyrean 382.8 (7th of 12)
-->

**The battle of the unbeatens.** It's the highest total on the board at 288.5, and
it's a fascinating game because these are two very different 3-0 teams.

The DNs have scored 515 points, the most in the league by 77. Empyrean Athletic has
scored 382.8, the **seventh-most**. One of these teams is 3-0 because it's good.
The other is 3-0 because it has a sense of timing. The book only makes The DNs −140,
because Empyrean's projected lineup this week is genuinely the third-best on the board.
The house isn't calling Empyrean lucky. The house is noting that they've been lucky,
and that luck runs out.

## matchup:6-1

<!-- Disciples of Yakub vs Tal top Smitty bottom
     −135 / −100 — 53.1% fair
     spread −2.5, total 259
     projected 131.1 vs 129.1
     last week Disciples of Yakub: 170.5 (projected 122.8, +47.7) — lost by 0.70, Bo Nix 25.14 on bench
     last week Tal top Smitty bottom: 104.1 (projected 131.6, -27.5) — lost by 48.28
-->

Call vs. Commish. The Disciples are coming off a 0.70 point loss and Lane is coming
off a 48-point one. In fairness to Lane, he was the one in danger of placing the
parlay had Chris set a sensible lineup, and he doesn't know that yet. He does now.

<!-- TODO(kunal): any Lane trade proposals this week? Still no season punishment? -->

## matchup:5-8

<!-- 3 AM afters in bull room vs Rat
     −210 / +150 — 62.6% fair
     spread −11.0, total 267.5
     projected 139.9 vs 129.2
     last week 3 AM afters in bull room: 147.7 (projected 138.5, +9.2) — beat Trust the Process by 59.82, covered −22.5
     last week Rat: 129.8 (projected 133.7, -3.9) — lost to The DNs by 3.70, covered +19.5
-->

Disclosure, again: the man who runs this book is −210 here. Last week he was −470 and
won by 59.82, which the house is aware looks bad. It would like to point out that
the line was set by a computer and the 59.82 was set by Chris.

Rat lost to The DNs last week by 3.70 as a 19.5-point underdog. That's the best losing
performance on last week's board. The book respects it and is still laying eleven.

## matchup:3-12

<!-- Yan Dynasty vs Saddam Hussein Al-B’esnoy
     −240 / +175 — 65.9% fair
     spread −14.0, total 286.5
     projected 150.4 vs 137.1
     last week Yan Dynasty: 105.8 (projected 146, -40.2) — lost at −650
     last week Saddam Hussein Al-B’esnoy: 152.4 (projected 131.5, +20.9) — beat Tal top Smitty bottom by 48.28
-->

Yan Dynasty is the biggest favourite on the board again, at −240. It's a long way
down from −650, and the house wants to be clear that the price came down because
of who he's playing, not because of what happened last week. The model doesn't hold
grudges. It doesn't remember last week at all. Remembering is the house's job,
and the house remembers everything.

## matchup:4-9

<!-- Little St. Lane’s vs Trust the Process
     −180 / +130 — 60% fair
     spread −8.0, total 241
     projected 125.1 vs 117.1
     last week Little St. Lane’s: 109.9 (projected 118.2, -8.3) — beat Yan −650
     last week Trust the Process: 87.9 (projected 115.9, -28.0)
     LAST PLACE board: Trust the Process 18.6% (1st), Little St. Lane’s 16.3% (2nd)
     TtP DEF priced off waivers (Chicago Bears 8.6) — Chris dropped the Saints for Kendre Miller on Wed.
-->

**The Last-Place Derby.** The two favourites to finish last and owe Lane's undefined
punishment play each other. Burnes, who already owes one, is −180 after the biggest
upset in book history. Chris, who doesn't owe one *yet*, is 0-3 and the favourite to
place another parlay.

Strictly speaking, this game is between a man trying to avoid a second punishment
and a man trying to avoid his first. The house finds both of them deeply relatable.

## punishment

<!-- THE PARLAY WINDOW — low scorer
     Trust the Process +260 (22.3%)
     Little St. Lane’s +520 (13%)
     ETN SZN +610 (11.3%)
     history: wk1 ETN SZN (+820), wk2 ETN SZN (+1100), wk3 Trust the Process (+290, the favourite)
     Trust the Process is the FIRST punishment favourite to hit in nine settled boards across all three books.
     TODO(kunal): did ETN SZN's two parlays come close? Has Chris placed his? Legs? Still 0 lifetime hits?
-->

**A first.** Across all three of this house's books, nine weekly punishment markets have
now been settled, and Trust the Process last week is the first one where the favourite
actually hit. It took three weeks for the board to be right once. Chris was +290, he
scored 87.92, and he places the parlay.

The fellas still haven't hit on a parlay. We're gonna be so rich though.

Chris is the favourite again this week at **+260**. If Chris wins the Parlay Window two weeks
running, the house will consider renaming it.

## lineups

<!--
     highest projected: Yan Dynasty
     forfeited slots: none
     priced off waivers: Trust the Process DEF Chicago Bears 8.6
     Chris's DK week: Thu 9/24 claimed Kyler Murray (the exact FA the book priced into his slot), dropped Bengals DEF.
       Sun 9/27 09:51 ET dropped Alvin Kamara for the Saints DEF. Week-3 DEF slot left EMPTY; Saints on bench (2.0).
       Wed 9/30 dropped Saints for Kendre Miller → no DEF again. ETN SZN picked up Kamara.
       Kyler scored 11.42 against the book's 17.6.
     Wed 9/30 waivers: Chris claimed Ollie Gordon — FAILED ("claimed by another owner"). Rat got him.
       Seven of twelve teams claimed Gordon. League is ROLLING waivers (waiver_type 0), not reverse standings.
       Per Kunal: Chris believed the week's low scorer goes first on waivers, and was mad it's rolling.
-->

One slot here is marked **waivers**, and for the second week running it's on Chris's
roster.

Here's his week, because it deserves to be read in order. On Thursday he claimed **Kyler
Murray**, the exact free agent this book had priced into his empty quarterback slot. The
house would like to thank him for reading. On Sunday morning he cut Alvin Kamara to pick
up the Saints defence. Then he didn't start the Saints defence. His defence slot
sat empty all day, with the Saints on his bench, where they scored two points. On
Wednesday he dropped the Saints too.

So the book is once again priced to give Chris a defence he doesn't have, this time the
Bears at 8.6. Alvin Kamara now plays for ETN SZN.

And then Wednesday morning, the twist. Chris put in a claim for **Ollie Gordon**, along
with six other teams, fully confident he'd get him. Chris believed, sincerely, that the
week's low scorer goes first on waivers. That's a rule in plenty of leagues. It
isn't one in this league. This league runs **rolling waivers**, the claim failed, Rat
got Gordon, and Chris found out the hard way.

Which forces the house to ask the question the whole league is now asking. Was last week
a tank? Read his week again. An empty defence slot. A defence he picked up and then
didn't start. A 20-point Jordan Addison on the bench. The lowest score in the league,
right on schedule. If this was a tank, it was flawless: he hit the target, lost by 60,
earned the parlay, and got absolutely nothing for it. The Process, it turns out, needed
someone to read the league settings first.

The house would like to remind the league that it prices lineups as if every manager is
trying to win. Chris is the first real test of that assumption.

## THE FUTURES DESK

<!-- The DNs title 26% (+185). winner-take-all. ROS 125.1/wk vs next 114.5.
     This tripped the house's own guard (title favourite < 25%); exempted for this week, kdutta9/fantasy-book#2. -->

The DNs are **26% to win the whole thing**, at +185. This week that number tripped one
of the house's own safety checks, which was written in week one to stop the model from
ever believing a fantasy team is a lock. The house checked: the model is right. The DNs
are 3-0, they project ten points a week better than anyone else for the rest of the
season, and this league pays one place. When there's one prize and one team clearly in
front, the odds bunch up at the top.

So the house overrode its own rule, put a note in the file saying exactly why, and
opened a ticket to fix the rule properly. That's more paperwork than Lane has done for
the season punishment.
`,Nc=`---
league: dkenasty
week: 5
headline: PUKA VIDA
byline: The House · Week 5
---

<!-- DKENASTY SPORTSBOOK · week 5 · seed 1592629704
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.

     House rule for this book: DKEnasty prose never cites another league.

     COSTA RICA (per Kunal): Kunal (5), Burnes (4, his house; "president of Costa Rica"), Lane (1),
       Jacob Call (6), Tal (2), Besnoy (12), Garrett (8, Rat), Ethan (10). 8 of 12.
       Home: Keeyan (3), samlaur (7), Chris (9), rnath (11).
     THE PUKA INCIDENT (Sat 2026-10-03, ET, from Sleeper transactions):
       Ethan's pee bag (Doritos) spilled on Lane in the car.
       18:42:51  commissioner drops Puka Nacua from ETN SZN
       18:43:18  Besnoy adds Puka, drops Terrance Ferguson (27 seconds)
       23:46:43  commissioner moves Puka back to ETN SZN
       23:47:34  commissioner restores Ferguson to Besnoy
       Sun 10:50 Besnoy drops Ferguson for Emanuel Wilson → Wilson 27.0 ON HIS BENCH. Puka scored 27.7 for Ethan.
       Besnoy claims the reversal is unfair.
     WEEK 5: still in Costa Rica (a mansion in Guanacaste), except Kunal, who leaves early.
     RENAMES (Sleeper, picked up 2026-10-07 via --refresh-names): roster 10 ETN SZN → ‘22 LA Rams;
       roster 1 Tal top Smitty bottom → Lane Doe.
     SEASON PUNISHMENT, finally: Lane enforced it. The 2024 loser (Tal) and the 2025 loser (Burnes)
       run a milk mile in Costa Rica. NB config/leagues/dkenasty.json punishment.season.copy still says
       Lane "has still not invented" it, and that copy is a builder input; fixing it needs a since-gate.
     PARLAY: placed from Costa Rica. Legs so far: Jonathan Taylor anytime TD, Marvin Harrison Jr. over rec yds. -->

## lede

<!--
     biggest edge: The DNs −650 over ETN SZN (80.6%, −29.5) — ties the biggest line this book has posted
       (Yan −650 in week 3, which LOST to Burnes)
     closest game: Yan Dynasty vs Disciples of Yakub at −160 (57.3%)
     highest total: 272
     last week: Tal top Smitty bottom 164.7 high, 3 AM afters in bull room 98.7 low
     the book went 1-5 on favourites, Brier 0.333
-->

**On Saturday, somewhere on a road in Costa Rica, Ethan's pee bag spilled on Lane.**

The house wants to be precise about what happened next, because Sleeper keeps a timestamp on
everything. At **6:42 PM**, Lane, the commissioner of this league, who has had an entire
offseason and four weeks to design the season punishment and hasn't, found the commissioner
tools in about the time it takes to dry off. He cut Ethan's Puka Nacua into free agency.

Twenty-seven seconds later, Besnoy had him.

Five hours after that, Lane put it all back. Puka went home to Ethan, Besnoy got his Terrance
Ferguson back, and Besnoy has been calling it unfair ever since. Ethan, for his part, got
Puka's 27.7 points on Sunday and lost anyway. He's 0-4. This week he's a +380 underdog to the
title favourite, and the house would like to say, gently, that he's lost more than a
bag of pee this season.

Then, sometime between the pee and this sheet, Lane did something he hadn't done in an
entire offseason and four weeks: **he enforced the season punishment.** Tal, last in 2024,
and Burnes, last in 2025, will settle their debts in Costa Rica with a **milk mile**. The
house can't prove the two events are connected. The house is pricing them as correlated.

## settled

<!--
     favourites 1-5 SU, 1-5 ATS, totals 2-4 over
     Brier 0.333 vs 0.25 for a coin flip; expected 3.5 chalk wins, got 1
     low scorer 3 AM afters in bull room 98.7 — priced +1850, 9 of 12
     high scorer Tal top Smitty bottom 164.7
     biggest beat: Tal top Smitty bottom 164.7 vs 129.1 projected (+35.6)
     biggest miss: 3 AM afters in bull room 98.7 vs 139.9 projected (-41.2)
     only chalk win: Redskins −125 over ETN, 129.92–109.48.
     House w4 copy on Empyrean: "The house isn't calling Empyrean lucky... luck runs out." Empyrean won by 17.54.
     COSTA RICA SPLIT (w4): travelers avg 130.98 (8 teams, 1047.84), home avg 130.44 (4 teams, 521.76).
       Travel-vs-home games: home 3-1 (Redskins>ETN, Empyrean>DNs, TtP>Burnes; Saddam>Yan).
-->

**One and five.** The only favourite that won was the Redskins at −125, which is about as
close to not being a favourite as it gets. The Brier score was **0.333**, the worst this book
has ever posted, and the house has a theory.

Eight of the twelve managers in this league are spending the week at a mansion in Guanacaste,
and were already there for week four. The house went looking
for a Costa Rica effect and here's what it found: the eight travelers averaged **130.98**
points, and the four who stayed home averaged **130.44**. No difference at all. Whatever was
happening down there, it wasn't affecting lineups. But when a traveler played someone who
stayed home, **home went 3-1**. The trip didn't make anyone worse. It just made them lose to
people who were at home and sober.

And a correction, for the record. Last week the house wrote that it wasn't calling Empyrean
Athletic lucky, just noting that they had been, and "luck runs out." Empyrean beat The DNs by
17.54 and is now the only unbeaten team in the league. The house's luck ran out.

## bench

<!--
     Saddam Hussein Al-B’esnoy left 55.5 — Kyle Monangai 28, Emanuel Wilson 27, Carnell Tate 21.5 — best 208.92, won by 20.32
     Empyrean Athletic left 42.2 — Drake Maye 27.2, T.J. Hockenson 24.9, DK Metcalf 16.5 — won anyway
     Trust the Process left 36.9 — Romeo Doubs 23.8, Keon Coleman 23.6, Hunter Henry 11.2
     3 AM afters in bull room best 130.68 → NOT low. Low would've been Little St. Lane's (Burnes) 108.62.
-->

**Besnoy's case, examined.** Besnoy says losing Puka was unfair. Here's what the reversal cost
him. On Sunday morning he used the roster spot Puka would have filled on **Emanuel Wilson**,
who scored **27.0**. Puka scored 27.7. So Lane's reversal cost Besnoy, at most, seven-tenths of
a point, and he didn't start Wilson anyway. Wilson was on the bench, along with 28 from Kyle
Monangai and 21.5 from Carnell Tate. Besnoy left **55.5 points** on his bench, the most in the
league. He won by 20 regardless. His best possible lineup was **208.92**, which would have
been the week's high score by 44.

The house has reviewed the appeal. Besnoy had one Puka-sized problem, and he solved it on his
own bench.

And the house's seat left 32 on its own bench. The best lineup was 130.68, which isn't the low
score. The low score would then have gone to **Burnes, at 108.62**: the president of Costa Rica,
placing an eleven-leg parlay from his own house. The house would like to formally apologize to
the people of Costa Rica for not making that happen.

## card

<!--
     the board spans 233 to 272 on totals
-->

The biggest line in this book's history, again. The last time it was posted, the favourite
lost to Burnes. The league's only unbeaten team plays the house. Two men owe a milk mile, and
one of them is playing a man who used to own Ollie Gordon. And both men from the Puka
incident are on the card: Ethan as a +380 underdog to the title favourite, Besnoy as a −190
favourite over Chris.

## matchup:2-10

<!-- The DNs vs ETN SZN
     −650 / +380 — 80.6% fair — ties biggest DK line (Yan −650 in wk3, lost to Burnes)
     spread −29.5, total 272
     projected 151.4 vs 122.1
     last week The DNs: 124.4 (projected 147.2, -22.8) — lost to Empyrean by 17.54
     last week ETN SZN: 109.5 (projected 126.9, -17.4) — lost to Redskins by 20.44 with Puka 27.7
     DNs 3-1, PF 639.5 (league high by 67.7). Title 26.0% (+185), same as last week, despite the loss.
     ETN 0-4, PF 392.3 (league low). K slot priced off waivers (Jake Bates 8.4).
     Tue 10/6 trade: DNs send Stafford + Alec Pierce to Rat for Kayshon Boutte, Ricky Pearsall, Ollie Gordon.
-->

**−650**, which ties the biggest line this book has ever posted. The last −650 was Yan Dynasty
in week three, and it lost to Burnes. The house has no comment except that Burnes isn't in
this game.

The DNs lost last week and their title odds didn't move: **26.0%** before, 26.0% after. When
you've scored 67 more points than anyone else in a winner-take-all league, one loss
doesn't mean much. They also made a trade on Tuesday, sending Matthew Stafford and Alec Pierce
to Rat for three players, including **Ollie Gordon**, the waiver claim Chris was sure he'd
get two weeks ago. Gordon has now been on two rosters in this league in two weeks, and neither
of them was Chris's.

Ethan is 0-4 with the fewest points in the league, and he has Puka Nacua only because the
commissioner who dropped him changed his mind. He has responded by renaming his team the
**'22 LA Rams**. The 2022 Rams went 5-12 the year after winning the Super Bowl, the most
losses any defending Super Bowl champion has ever had. They're also the one Rams team Puka Nacua never played
for, since he was drafted in 2023. Ethan has named his team after the only Rams season his
best player wasn't around for, and is playing like it.

## matchup:11-1

<!-- The Washington Redskins vs Tal top Smitty bottom
     −260 / +185 — 67.5% fair
     spread −14.5, total 247
     projected 131.5 vs 117.4
     last week The Washington Redskins: 129.9 (projected 128.1, +1.8) — the book's ONLY chalk win
     last week Tal top Smitty bottom: 164.7 (projected 129.1, +35.6) — HIGH SCORER, beat Call by 31.46
     Redskins 3-1, home. Lane 2-2, traveler.
-->

Lane had the best week of anyone in this league. He scored **164.74**, the high score, beat
Call by 31, used his commissioner powers for the first time all season (for revenge), and then
finally enforced the season punishment. The house has been saying for a month that something
had to happen to get Lane to do his job. It turns out that something was urine.

He has also renamed his team **Lane Doe**. That's the name you give an unidentified victim, and
after Saturday the house won't argue with it. It respects his privacy.

## matchup:7-5

<!-- Empyrean Athletic vs 3 AM afters in bull room
     −190 / +140 — 60.9% fair
     spread −9.0, total 263
     projected 136.7 vs 127.9
     last week Empyrean Athletic: 142.0 (projected 143.1, -1.1) — beat DNs by 17.54, left 42.2 on bench
     last week 3 AM afters in bull room: 98.7 (projected 139.9, -41.2) — lost to Rat by 56.52 at −210
     Empyrean 4-0 (only unbeaten), PF 524.8 (6th of 12). House 2-2.
-->

Disclosure: the house's own seat is a +140 underdog, against the team it called lucky last
week. Empyrean is 4-0 and still only sixth in points. The house is 2-2, lost by 56 last week as
a −210 favourite, and is about to place an eleven-leg parlay. It isn't the house's week.

## matchup:3-6

<!-- Yan Dynasty vs Disciples of Yakub
     −160 / +120 — 57.3% fair — closest game
     spread −6.0, total 268.5
     projected 137.9 vs 132
     last week Yan Dynasty: 133.1 (projected 150.4, -17.3) — lost to Besnoy by 20.32, left 35.4 on bench
     last week Disciples of Yakub: 133.3 (projected 131.1, +2.2) — lost to Lane by 31.46
     Yan 1-3 but PF 568.9 (3rd). Call 2-2, PF 571.8 (2nd). Yan QB priced off waivers: Jacoby Brissett 18.1.
-->

The closest game on the card is between the second- and third-highest-scoring teams in the
league, who are a combined 3-5. Call has scored 571.8 points and is 2-2. Yan Dynasty has
scored 568.9 and is 1-3. This league has spent four weeks proving that points don't win
games. Yan's quarterback slot is priced at the best free agent, Jacoby Brissett. The
dynasty is in a rebuilding year.

## matchup:8-4

<!-- Rat vs Little St. Lane’s
     −220 / +160 — 64.2% fair
     spread −11.0, total 238
     projected 125.3 vs 114
     last week Rat: 155.2 (projected 129.2, +26) — beat the house by 56.52
     last week Little St. Lane’s: 108.6 (projected 125.1, -16.5) — lost to Chris by 8.16
     Both travelers. Burnes 1-3, owes last season's punishment, 17.6% to finish last (2nd).
-->

**The Costa Rica Derby.** Two travelers, one of them hosting. Burnes is 1-3, second-favourite to
finish last again, and this week, for the first time, he's actually paying for last year:
the milk mile. He's playing a fantasy game and running off a punishment in the same week, in
his own country. A 1-3 start means he's 17.6% to come back next October and do it again.

## matchup:12-9

<!-- Saddam Hussein Al-B’esnoy vs Trust the Process
     −190 / +140 — 61% fair
     spread −8.5, total 233
     projected 121.2 vs 113
     last week Saddam Hussein Al-B’esnoy: 153.4 (projected 137.1, +16.3) — beat Yan by 20.32, left 55.5
     last week Trust the Process: 116.8 (projected 117.1, -0.3) — beat Burnes by 8.16
     Chris: Parlay Window favourite (+310), 4th time in 5 weeks.
-->

Besnoy is −190 and still upset about a player he had for five hours. Chris won last week, beat
Burnes, and is still the Parlay Window favourite for the fourth time in five weeks.
He's done everything right. The board doesn't believe in him yet.

## THE TRIP REPORT

<!-- Simmons running-diary format. Every timestamp is from Sleeper's transaction log (ET).
     Non-Sleeper: mansion in Guanacaste, "getting heinous"; Kunal leaves early. Nothing timestamped. -->

A running diary of Saturday, October 3rd, assembled from the only witness that doesn't drink:
Sleeper's transaction log.

**Earlier.** A car somewhere in Costa Rica. Ethan's pee and Lane meet. Details are
not in the transaction log.

**6:42:51 PM.** Commissioner Lane drops Puka Nacua from ETN SZN. This is the first known use
of commissioner powers in this league this season. The season punishment remains undesigned, for now.

**6:43:18 PM.** Besnoy picks up Puka Nacua and drops Terrance Ferguson. Elapsed time: 27
seconds. The house has never seen this league move that fast on anything, including the
check.

**6:43:19 PM to 11:46 PM.** Five hours in which Besnoy owns Puka Nacua. The house assumes this
was the best five hours of his season.

**11:46:43 PM.** Lane moves Puka back to Ethan. Whether this was forgiveness, guilt, or the
pee drying, the log doesn't say.

**11:47:34 PM.** Lane restores Terrance Ferguson to Besnoy, 51 seconds later. At least he was
thorough.

**Sunday, 10:50 AM.** Besnoy drops Ferguson for Emanuel Wilson. Wilson scores 27.0. On the
bench.

**Sunday, end of day.** Puka scores 27.7 for Ethan. Ethan loses by 20. Besnoy wins by 20.
Lane posts the high score of the week. Nobody involved learns anything.

**The rest of the week.** The mansion in Guanacaste is reported to be getting heinous. The
transaction log has no further comment. The house is leaving early, which is the most
responsible thing anyone in this league has done since the draft.

## THE MILK MILE

<!-- Priced by scripts/props/milk-mile.mjs (seeded, 200k sims). Regenerate the board with
     \`node scripts/props/milk-mile.mjs\` after changing any INPUT; it prints this block.
     Kunal's inputs: standard format (4 x [16 oz whole milk + quarter mile], throw-up = penalty lap),
       sober miles Burnes 7:00 / Tal 8:00, both likely to throw up (house set 60% / 70%).
     House assumptions: Guanacaste heat + a week of "getting heinous" = 12% slower; each 16 oz
       already down costs 6% a lap; Burnes chugs faster (18s vs 26s); 3% chance a throw-up ends the run.
     Fair: Burnes 80.2%, median margin 148s, median times 12:20 / 14:50.
     Date and venue TBD (Kunal, 2026-10-07). Board stands until it's run. -->

**The season punishment, priced.** The date and the course are still to be confirmed, so this
board stays open until the milk is poured. Tal finished last in 2024. Burnes finished last in 2025.
Lane, having finally been moved to act, has sentenced them both to the same thing: a **milk
mile** in Costa Rica. Four laps, sixteen ounces of whole milk before each one, and a penalty
lap every time anyone throws up.

The house ran it two hundred thousand times. The scouting report: Burnes runs a seven-minute
mile sober and can put milk away. Tal runs an eight and is leaner, which in a milk mile is a
disadvantage, because there's less of him to put the milk in. Neither of them will be sober,
and the house has priced in the Guanacaste heat and a week of getting heinous at no extra
charge.

### The line
- Winner: **Burnes −620** · **Tal +370**
- Spread: **Burnes −150.5s −115** · **Tal +150.5s −115**

### Throw-ups
- Total, over/under 1.5: **Over −155** · **Under +115**
- Burnes, over/under 0.5: **Over −180** · **Under +130**
- Tal, over/under 0.5: **Over −310** · **Under +210**

### Finishing times
- A runner who doesn't finish grades as over.
- Burnes, over/under 12:20: **Over −120** · **Under −110**
- Tal, over/under 14:50: **Over −125** · **Under −110**

### Specials
- First to throw up: **Burnes +120** · **Tal +105** · **Nobody +670**
- Both throw up: **Yes +120** · **No −165**
- Somebody doesn't finish: **Yes +1650** · **No −2400**
- Winning margin under 30 seconds: **Yes +930** · **No −2400**

The house doesn't do locks; it does fair prices. But if it did, it would point out that the
**nobody throws up** price is +670. It's the longest number on the board, and it's the one
outcome where these two men keep sixty-four ounces of milk each down in the Costa Rica heat. The
house will be very surprised to pay it. It would also note that Burnes owes this league a
punishment from last season and this is it. A man who waited a full year to serve his
sentence is a −620 favourite to serve it fastest.

## punishment

<!-- THE PARLAY WINDOW — low scorer
     Trust the Process +310 (19.4%)
     Little St. Lane’s +350 (17.7%)
     Tal top Smitty bottom +470 (14.1%)
     history: wk1 ETN SZN (+820), wk2 ETN SZN (+1100), wk3 Trust the Process (+290), wk4 3 AM afters (kdutta, +1850)
     lifetimeHits: 0
     Placed from Costa Rica. Remaining nine legs still pending as of posting; Kunal: "assume it's stupid." -->

**The house places the parlay.** Ninth of twelve at +1850, which is a long way out for the man
setting the prices. Eleven legs, one picked by each other manager, ten dollars, and it has
never hit. The house would like to point out a conflict of interest: the man who runs the book
is now the one making the bet. It's the first time all season the house has had to stake real
money on someone else's legs.

It's being placed from Costa Rica. So far, the slip includes **Jonathan Taylor to score a
touchdown** and **Marvin Harrison Jr. over his receiving yards**, which are about as sensible as
legs on an eleven-leg parlay get. The other nine are still being picked, by nine men at a
mansion in Guanacaste, which tells you everything you need to know about the other nine. The
house hasn't seen them. It doesn't need to. It's already priced the slip at its lifetime
record: zero hits.

This week's favourite is Chris again, at +310. Burnes is second, at +350. If Burnes ends up
placing a parlay in the same week he runs a milk mile, the house will consider his debts to
this league paid in full, with interest.

## lineups

<!--
     highest projected: The DNs
     forfeited slots: none
     priced off waivers: Yan Dynasty QB Jacoby Brissett 18.1; ETN SZN K Jake Bates 8.4
-->

Two slots on this card are priced off waivers: Yan Dynasty's quarterback and Ethan's kicker.
Every other player on the card is on the roster that's starting him, which, after Saturday,
the house no longer takes for granted.

## THE FUTURES DESK

<!-- The DNs title 26.0% (+185), unchanged from w4 despite the loss. Empyrean 11.7% (+530).
     The guard (favourite < 25%) tripped again; exemption extended to dkenasty w5. kdutta9/fantasy-book#2 still open. -->

The DNs are still **26% to win it all**, after a loss, which tripped the house's own safety
check for the second week running. Last week the house overrode its own rule, wrote down why,
and opened a ticket to fix it properly. This week the house extended the override and didn't
fix it. Meanwhile, Lane enforced the season punishment. As of this week, the least diligent
administrator in this league is the house.
`,Ec=`---
league: dkenasty
week: 6
headline: INACTIVE
byline: The House · Week 6
---

<!-- DKENASTY SPORTSBOOK · week 6 · seed 1592638201
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: DKEnasty prose never cites another league.
     RECEIPTS (Sleeper, pulled 2026-10-15):
       Laur (samlaur, Empyrean Athletic, r7): 4-1, title 12.0% (+520, 2nd), playoffs 82.7%.
         Roster moves all season: 9 (7 FA, 2 waiver, 0 trades). Lane (lanek12, Lane Doe, r1): 18 (13 FA,
         2 waiver, 3 trades), plus the commissioner moves that don't count against him.
         Laur's only loss: wk5, 152.96 vs Kunal's 187.24.
       Lane: 2-3, lost wk5 to the Redskins 142.2–98.74 (by 43.46). Playoffs 54.5% → 42.6%.
         +300 favourite to be low scorer this week, i.e. to place the parlay.
       Ethan (ethansmith2580, '22 LA Rams, r10): 0-5, 532 PF (league low). Covered +29.5 vs DNs (lost by 9.38).
         Now −370 over Lane — the commissioner who cut his Puka in wk4.
       Garrett (Garrettrh, Rat, r8): 3-2, won by 10.74 with Stafford 27.3 on the bench. +165 vs Besnoy (12.5 pts).
       Besnoy (BotBinLaden, r12): 72.8 low (+690, 4th of 12) → places the parlay. Lost to Chris by 64.26.
         Low-scorer favourite was Chris (+310) — scored 137.06.
       Kunal (r5) 187.24 high, after leaving Costa Rica early.
       The DNs 4-1, 27.4% (+170) — tripped the house's title-ceiling test (issue #2, now week-gated).
       MILK MILE (recap from Kunal, 2026-10-15; graded against the w5 board, scripts/props/milk-mile.mjs):
         Format as run: 1 gallon whole Costa Rican milk each, 4 laps of [drink, any amount + 0.25 mi].
           Not the priced format (4 x 16 oz, penalty lap per throw-up); no penalty laps were run.
         Burnes 22:29.23 (drink 11:28.46, run 11:00.77) · Tal 25:11.36 (drink 14:08.53, run 11:02.83).
           Kunal's recap header says Tal 25:01 and "covered by 1.5 seconds"; the splits say 25:11.36 and
           a 162.13s margin, covering −150.5 by 11.63s. The splits are used here.
         Cumulative leader: B +2.75 (L1), T +0.56 (L2), B +9.44 (L3). Last drink 6:47.43 vs 9:05.29 = 137.86s,
           85% of the margin. Drinking 160.07s of 162.13s (98.7%). Tal's last drink > his first three runs (7:31.57).
         Pace: B 8:16.5 → 13:05.7 /mi, T 8:23.6 → 14:05.0 /mi.
         Model: Burnes 80.2%, median margin 148s (actual 162.13), median times 12:20 / 14:50 (actual +10:09 / +10:21).
         Timing: Noah Fonck. Moral support: Mehul Ajith. Spectators followed in a golf cart. -->

## lede

<!--
     biggest edge: Empyrean Athletic −520 over Little St. Lane’s (77.9%, −24.5)
     closest game: Disciples of Yakub vs Trust the Process at −125 (51.6%)
     highest total: 280
     last week: 3 AM afters in bull room 187.2 high, Saddam Hussein Al-B’esnoy 72.8 low
     the book went 3-3 on favourites, Brier 0.224
-->

**Lane, the commissioner, called Laur inactive.**

> Laur inactive and gay

The house pulled the transaction log, because the house always pulls the transaction log. This
season Laur has made **nine** roster moves. Lane has made **eighteen**, not counting the ones
he made from the commissioner's chair, like cutting Ethan's Puka into free agency on a Saturday
night in Costa Rica.

Here's what nine moves got Laur: a 4-1 record, the second-best title odds in the league at
**+520**, and the biggest favourite on this week's board at **−520**. Here's what eighteen moves
got Lane: 2-3, a 43-point loss last week, and playoff odds that fell from 54.5% to 42.6% in
a week.

So the house would like to update the record. Laur isn't inactive. **Laur is efficient.**
Activity is what you call it when you're 2-3.

And this week Lane is the **+300 favourite to score lowest in the league**, which in this
league means placing the parlay. He's also a +250 underdog to Ethan, who has not won a game.

## settled

<!--
     favourites 3-3 SU, 1-5 ATS, totals 3-3 over
     Brier 0.224 vs 0.25 for a coin flip; expected 3.9 chalk wins, got 3
     low scorer Saddam Hussein Al-B’esnoy 72.8 — priced +690, 4 of 12
     high scorer 3 AM afters in bull room 187.2
     joint: did not hit
     biggest beat: 3 AM afters in bull room 187.2 vs 127.9 projected (+59.3)
     biggest miss: Saddam Hussein Al-B’esnoy 72.8 vs 121.2 projected (-48.4)
     Brier history: 0.232, 0.212, 0.234, 0.333, 0.224
-->

Three and three, Brier **0.224**, a real recovery from last week's 0.333. Against the spread
the favourites went **1-5**, so the house picked winners and nothing else.

Two results from Costa Rica. First, Kunal, the only manager who left the mansion early, put up
**187.24**, the high score of the week, and handed Laur the first loss of the season. The house
has been tracking a Costa Rica effect for two weeks and this is the strongest evidence yet:
the one guy who went home scored 59 over his projection.

Second, Besnoy. Besnoy spent last week telling anyone who would listen that the Puka reversal
was unfair. He then scored **72.8**, the low score of the week, and lost to Chris by 64. That
means Besnoy places the parlay: ten dollars, eleven legs, one picked by each of the eleven men
he's been complaining to (or 8, or 10, depending on Mamdani's gambling laws. which don't exist btw)

And the old debts are settled. Tal and Burnes ran the milk mile. The full grading is at the
bottom of the card.

## bench

<!--
     ‘22 LA Rams  left 28.7 — MarShawn Lloyd 16.7, Courtland Sutton 9.8, Keaton Mitchell 5.9 (lost by 9.38)
     Rat left 26.0 — Matthew Stafford 27.3, Tyler Higbee 13.3 (won by 10.74)
     Trust the Process left 22.7 — Hunter Henry 13.4, Kendre Miller 9, Keon Coleman 7.7
-->

Ethan left **28.7** on his bench and lost by **9.38**. He's the only manager in this league who
can lose to a −650 favourite while covering by twenty, and still have lost it on the bench.

Garrett benched Matthew Stafford's 27.3 and won anyway. Garrett has had a very good trip.

## card

<!--
     the board spans 237 to 280 on totals
-->

The winless team is a −370 favourite over the commissioner. The "inactive" team is the biggest
favourite on the board. And Garrett is getting points.

## matchup:10-1

<!-- ‘22 LA Rams  vs Lane Doe
     −370 / +250 — 73.3% fair
     spread −19.5, total 246
     projected 133.6 vs 114.1
     last week ‘22 LA Rams : 139.9 (projected 122.1, +17.8)
     last week Lane Doe: 98.7 (projected 117.4, -18.7)
-->

**Ethan is 0-5, and Ethan is a −370 favourite.** Over Lane.

Two weeks ago, Ethan's pee bag spilled on Lane in the car, and Lane cut Ethan's Puka Nacua into
free agency, then put him back five hours later. Last week Ethan scored 139.88, covered a
29.5-point spread against the title favourite, and lost anyway. Lane scored 98.74 and lost by
43.

The projections have Ethan at 133.6 and Lane at 114.1. This is the house's best chance yet to
price Ethan's first win, and it comes against the man who took his Puka. The house doesn't
pick sides. The house would just like to note that Puka is still on Ethan's team.

## matchup:7-4

<!-- Empyrean Athletic vs Little St. Lane’s
     −520 / +320 — 77.9% fair
     spread −24.5, total 251.5
     projected 138.5 vs 114.3
     last week Empyrean Athletic: 153.0 (projected 136.7, +16.3)
     last week Little St. Lane’s: 124.5 (projected 114, +10.5)
-->

The biggest line on the board belongs to the inactive manager. Laur projects 138.5. Burnes projects
114.3. The house has priced the inactive team at 77.9% to
win, which is the most confidence it has shown in anyone this week, including the people who
make eighteen moves a season.

Burnes doesn't owe this league anything anymore. He paid last week in Costa Rica, in milk, and
won. He's still a +320 underdog on Sunday, and the house suspects he hasn't fully digested it.

## matchup:12-8

<!-- Saddam Hussein Al-B’esnoy vs Rat
     −230 / +165 — 64.9% fair
     spread −12.5, total 255.5
     projected 134.6 vs 122
     last week Saddam Hussein Al-B’esnoy: 72.8 (projected 121.2, -48.4)
     last week Rat: 135.2 (projected 125.3, +9.9)
-->

In Costa Rica, Garrett went on a date with a woman **twenty years older** than him. This week
Rat is getting **12.5 points**. Garrett got twenty years in Costa Rica.

Garrett is 3-2, won last week with Stafford's 27.3 on his bench, and is, by every available
measure, comfortable as the underdog. Besnoy is coming off a 72.8, a parlay to place, and a
grievance. The house has Besnoy at −230, and doesn't feel great about it.

## matchup:2-5

<!-- The DNs vs 3 AM afters in bull room
     −160 / +120 — 57.3% fair
     spread −6.0, total 271
     projected 139.4 vs 132.8
     last week The DNs: 149.3 (projected 151.4, -2.1)
     last week 3 AM afters in bull room: 187.2 (projected 127.9, +59.3)
-->

Tal is 4-1 and **27.4%** to win a winner-take-all league. That number broke one of the house's
own tests this week, which had a rule that nobody could be above 25%. The house checked, and Tal
is just that good. The rule is gone. Tal is a −160 favourite over the man who scored 187 last
week, and the house thinks that's the right price.

## matchup:11-3

<!-- The Washington Redskins vs Yan Dynasty
     −135 / +100 — 53.8% fair
     spread −3.0, total 280
     projected 142.3 vs 138.9
     last week The Washington Redskins: 142.2 (projected 131.5, +10.7)
     last week Yan Dynasty: 121.0 (projected 137.9, -16.9)
-->

## matchup:6-9

<!-- Disciples of Yakub vs Trust the Process
     −125 / −110 — 51.6% fair
     spread −1.0, total 237
     projected 120 vs 118.4
     last week Disciples of Yakub: 134.5 (projected 132, +2.5)
     last week Trust the Process: 137.1 (projected 113, +24.1)
-->

## THE MILK MILE — SETTLED

<!-- See the MILK MILE receipts at the top. Every line below is graded against the w5 board. -->

**Burnes 22:29. Tal 25:11.** The 2024 and 2025 losers of this league ran the milk mile in
Costa Rica, and the debts are paid. The house apologises to the people of Costa Rica, but their
president had obligations to fulfill. He fulfilled them, mostly onto the grass.

The format, as run: a gallon of whole Costa Rican milk per man and four laps. At the start of
each lap you drink as much as you choose, then you run a quarter mile. Noah Fonck, friend of the
league, kept time. Mehul Ajith, also a friend of the league, provided moral support. Spectators
followed the athletes around in a golf cart.

### The race

**The running was a dead heat.** Over the mile that was actually run, Burnes beat Tal by
**2.06 seconds**. Tal was the faster runner on laps two and three.

**The milk decided everything.** Burnes spent 11:28 drinking and Tal spent 14:08. That's
**98.7%** of the final margin, and all of it was spent standing still.

It was a race for three laps. Burnes led by 2.75 seconds after lap one, Tal led by 0.56 after
lap two, and Burnes led by 9.44 after lap three. Then came the last drink. Burnes took **6:47**.
Tal took **9:05**. That one drink opened a gap of 2:17.86, 85% of the final margin, and Tal spent
longer on it than on his first three runs combined.

Burnes opened at an 8:16 mile pace and finished at 13:06. Tal went from 8:24 to 14:05. By the
end, both men were running five or six minutes a mile slower than they would sober, which the
house would like to point out is a pace you can walk.

### The board

- Winner: **Burnes −620**. ✓
- Spread: **Burnes −150.5s**. ✓ He won by 162.13 seconds and covered by 11.63.
- Total throw-ups, over 1.5 at **−155**. ✓ By at least 18.5.
- Burnes over 0.5, **−180**. ✓
- Tal over 0.5, **−310**. ✓
- Both throw up, **Yes +120**. ✓
- First to throw up: **Burnes +120**. ✓ The house had Tal slightly shorter, at +105.
- Nobody throws up, **+670**. ✗ By a long way.
- Somebody doesn't finish, **No −2400**. ✓
- Margin under 30 seconds, **No −2400**. ✓
- Burnes over 12:20 and Tal over 14:50. ✓ Both, by more than ten minutes.

The model had Burnes at 80.2% and a median winning margin of **148 seconds**. He won by **162**,
so it priced the race to within fourteen seconds. It priced the finishing times ten minutes too
fast, because it was told sixteen ounces a lap and the athletes were handed a gallon. For the
record, the house got the milk mile right and the amount of milk wrong.

### Intangibles

- Burnes yakked in style every time.
- Besnoy brought out his F21 DKE basement form.
- Tal is 4-1 and the favourite to win this league. Burnes is +340 to finish last in it again, the second favourite. The milk mile has been run, and the house sees no reason the standings should change.

## THE LANEOCRACY

<!-- Announced by Lane (commissioner) in the group chat, Thu 2026-10-15 morning, after this sheet's
     numbers were built. Strikes as he stated them: Rohan 2, Keeyan 2, Laur 1. -->

On Thursday morning, the commissioner issued a decree. Effective immediately, a manager loses
his **least valuable pick** when he:

- fails to send his parlay leg by Thursday Night Football, three times;
- places the parlay without every leg that was sent to him;
- doesn't place the parlay at all, which the decree calls "egregious."

It was signed **'Mish**, and it closed with the line of the season: this is a **Laneocracy**,
and he rules "with a Marvin Harrison Junior sized fist."

**The house's position: it's a good law, badly launched.** The parlay is supposed to have eleven
legs, one from each manager. By the commissioner's own account, the league has been "ass" about
placing it with all of them, and it has never hit. Those two facts may be related. Something had to give, and the house supports the principle.

The house has three notes on the launch.

**One: it's retroactive.** The rule was announced this morning, and Rohan and Keeyan are already
on two strikes. They're one late text from losing a pick under a law that didn't exist when they
broke it the first two times. The house would have started everyone at zero.

**Two: the only scoreboard is Lane's head.** He's the legislature, the judge and the
record-keeper. The same morning, the same commissioner who called Laur inactive has her at one
strike. The house doesn't allege anything. It would just like the strike count posted in the
group chat every time it changes, which is what Sleeper does for every waiver claim.

**Three: "least valuable pick" isn't defined.** Is it the latest round, or the worst pick by
somebody's chart? This should be settled before the first pick is taken, not after.

And one observation, at no charge. This week Lane is the **+300 favourite to be the low scorer**,
which makes him the man most likely to place this week's parlay. The first slip placed under the
Laneocracy has better odds of being placed by Lane than by anyone else.

### The board

<!-- printed by scripts/props/laneocracy.mjs
     Lane low scorer: 19.9% (w6 sheet)
     Rohan or Keeyan reaches strike three tonight: fair 43.8%
     Lane is the low scorer and places all eleven legs: fair 11.9%
     Lane is the low scorer and does not: fair 8.0%
     Somebody actually loses a pick this season: fair 50.0%
-->

- Rohan or Keeyan reaches strike three tonight: **Yes +115** · **No −155**
- Lane is the low scorer and places all eleven legs: **Yes +680** · **No −1750**
- Lane is the low scorer and does not: **Yes +1050** · **No −2400**
- Somebody actually loses a pick this season: **Yes −115** · **No −115**

The deadline for legs is tonight. The house has the two-strike pair at better than 40% to give
the Laneocracy its first test case by kickoff.

## punishment

<!-- THE PARLAY WINDOW — low scorer
     Lane Doe +300 (19.9%)
     Little St. Lane’s +310 (19.4%)
     Trust the Process +460 (14.3%)
-->

The house has made Chris the favourite to place the parlay in **four of five weeks**. He's done
it once. Last week he was +310 and scored 137.

This week, for the first time since week two, the favourite isn't Chris. It's **Lane, at +300**,
narrowly ahead of Little St. Lane's at +310. Between them that's a 39.3% chance the parlay is
placed by Lane or by a team with Lane in its name.

## lineups

<!--
     highest projected: The Washington Redskins
     forfeited slots: none
     priced off waivers: none
-->
`,jc=`---
league: dkenasty
week: 7
headline: SOLD HIGH
byline: The House · Week 7
---

<!-- DKENASTY SPORTSBOOK · week 7 · seed 1592646634
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: DKEnasty prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-10-22):
       THE TRADE, Sat 2026-10-17 19:43 ET: Kunal (kdutta, r5) gets Christian McCaffrey, Davante Adams, Kaelon Black.
         Keeyan (Keeyan99, Yan Dynasty, r3) gets Denzel Boston, Jacory Croskey-Merritt, Michael Mayer + Kunal's 2027 1st.
         Status 2026-10-22: Adams IR · Croskey-Merritt IR · Boston Questionable · CMC, Black, Mayer active.
       wk6, the next day: Kunal started CMC 30.7 and Adams 6.9, benched Black 4.7. Lost to Tal 131.96–122.94 (by 9.02), now 3-3.
         Kunal left 12.3 (Egbuka 17.8). Best lineup 135.24 > Tal's 131.96.
         Keeyan started Boston 2.5, benched Mayer 16.5 and Croskey-Merritt 0. Lost to Rohan 148–99.88 (by 48.12), now 1-5.
         Keeyan 99.88 was 1.88 above the low score (Chris 98).
       Futures w6 → w7: Kunal title 8.5 → 12.4 (+540), playoffs 64.6 → 74.1, ROS 110.6 → 115.3.
         Keeyan title 6.1 → 0.9 (+8700), playoffs 32.9 → 8.5, ROS 113.2 → 99.7, P(last) 22.3%.
       Tal (tal262000, The DNs, r2): visited SF, watched Cal with Kunal, blacked out (Kunal). Beat Kunal that weekend.
         5-1, 920.76 PF (league high). Title 27.4 → 29.3 (+175). Playoffs 98.8. This week −1800 over Burnes (−38.5).
       Jacob Call (jc199, Disciples of Yakub, r6) added Christian Kirk (SF WR, on IR), dropped Darius Cooper, Wed 2026-10-21.
         "Charlie" nickname cleared by Kunal for print. 4-2, −250 over Rat this week.
       Lane (lanek12, Lane Doe, r1) lost 112.14–101.96 to Ethan (ethansmith2580, '22 LA Rams, r10): Ethan's first win, now 1-5.
         Lane's excuse (via Kunal): Ethan is a "bye week merchant." All ten of Lane's starters played and scored.
         RETRACTED 2026-10-22: the first post said "There were no byes." Wrong. Ja'Marr Chase (CIN) and Sam LaPorta (DET)
           were on bye, 0 pts on Lane's bench, and the w6 sheet priced Lane (114.1) without them. Lane in the chat:
           "Just blatant ai hallucinations". The math (variance.json closed form; w7 projections Chase 18.85, LaPorta 12.82
           stand in for the bye week, which had none):
           They'd have replaced Gainwell 3.4 (FLEX) and Barner 4.6 (TE), so Lane needed > 18.18 from the pair to beat 112.14.
           Pair by week, w1–w5: 13.0, 43.7, 32.2, 28.1, 39.5 → avg 31.3, cleared 18.18 in 4 of 5. Model P = 86.4% (sigma 12.26).
           Pre-game with both in (Chase for Dobbins 7.6 FLEX, LaPorta for Barner 7.6): Lane 130.6 vs 133.5,
           Ethan 53.5% → −135 / +100, against the posted −370 / +250.
           Lane's only wk6 move: Sat 2026-10-17 13:07, +Carolina DEF −Pittsburgh DEF (CAR scored 4). Gainwell added wk5 (10/8).
           Ethan had no confirmed byes: Jacobs/Montgomery/Etienne lacked w6 projections, but HOU and NO played (injury, not bye).
           Kunal's call (2026-10-22): correction stays, Lane stays Excuse Man; commish = league villain.
         Ethan's K Nick Folk 1, DEF Houston 1. Lane left 6.4 on the bench. Lane 2-4, playoffs 42.7 → 32.2.
         Lane was the +300 favourite to be low and finished 3rd-lowest. New nickname: "Excuse Man."
       Chris (Christopheryu21, Trust the Process, r9) 98, wk6 LOW, priced +460 → places the parlay. His 2nd (wk3).
         Favourite for low in 4 of the first 5 weeks; low in wk3 (as fav) and wk6 (not fav).
       Book wk6: 6-0 SU, 3-3 ATS, 0-6 totals (every game under). Brier 0.145; season 0.232, 0.212, 0.234, 0.333, 0.224. -->

## lede

<!--
     biggest edge: The DNs −1800 over Little St. Lane’s (88.1%, −38.5)
     closest game: Empyrean Athletic vs K9 FentPack at −135 (53.8%)
     highest total: 271.5
     last week: The Washington Redskins 148 high, Trust the Process 98 low
     the book went 6-0 on favourites, Brier 0.145
-->

**Yan Dynasty is rebuilding.** On Saturday night Keeyan sent Christian McCaffrey, Davante Adams and
Kaelon Black to Kunal for Denzel Boston, Jacory Croskey-Merritt, Michael Mayer and Kunal's **2027
first**.

Then Davante Adams went on IR. The house would like to congratulate Keeyan on selling high. Kunal
now has a receiver he can't start.

But the house checked the other side of the trade too, and it's on IR as well. **Jacory
Croskey-Merritt is on injured reserve.** The headline running back of the rebuild is hurt, and so
is the headline receiver Kunal bought to win now. Both men traded for an IR stint, and only one of
them got a first-round pick with it.

Here's the first week. Kunal started McCaffrey, who scored **30.7**, and lost by 9 anyway, falling to
3-3. Keeyan started Denzel Boston, who scored **2.5**, and benched Michael Mayer, who scored **16.5**.
Keeyan lost by 48 and is 1-5. He finished **1.88 points** above the low score of the week, which in
this league is the difference between rebuilding and rebuilding while placing the parlay.

The house's verdict is in the futures. Kunal's title odds went from 8.5% to **12.4%**. Keeyan's went
from 6.1% to **0.9%**, and he's now 22.3% to finish last. That's what a rebuild is supposed to look like.
The house just can't remember the last one that started with the seller's new running back on IR.

## settled

<!--
     favourites 6-0 SU, 3-3 ATS, totals 0-6 over
     Brier 0.145 vs 0.25 for a coin flip; expected 3.8 chalk wins, got 6
     low scorer Trust the Process 98 — priced +460, 3 of 12
     high scorer The Washington Redskins 148
     joint: did not hit
     biggest beat: The Washington Redskins 148 vs 142.3 projected (+5.7)
     biggest miss: Yan Dynasty 99.9 vs 138.9 projected (-39.0)
-->

**Six and oh.** Every favourite won, and the Brier score was **0.145**, the best this book has
posted all season by more than six hundredths. Every game also went under, so the house knew who
would win and had no idea anyone would score.

**Ethan won.** After five losses, the '22 LA Rams beat Lane, **112.14 to 101.96**. Ethan's kicker
scored one point. His defence scored one point. Lane lost anyway.

Lane's explanation was that Ethan is a **bye week merchant**, and the group chat named him **Excuse
Man** for it.

**CORRECTION.** The first version of this card said: "There were no byes. There was just Ethan."
**There were byes.** Ja'Marr Chase and Sam LaPorta both had the week off, and both sat on Lane's
bench for zero points. Worse, they were on the house's own sheet, which priced Lane without them at
+250. The house regrets the error. The commissioner responded in the group chat:

> "Just blatant ai hallucinations 🤦‍♂️"

**The house accepts the correction. It does not accept the excuse.**

Here's the math, since the commissioner asked. Lane lost by 10.18. With Chase and LaPorta in for
Kenny Gainwell's 3.4 and AJ Barner's 4.6, he needed **18.19** from the pair, and the house makes
that **86%**. So yes, the byes probably cost him the game.

Byes have been on the schedule since the spring, and every manager in this league gets them.
Here's how Lane handled his: **one roster move all week.** On Saturday afternoon he swapped the
Steelers defence for the Panthers. The Panthers scored **4**. His flex was Kenny Gainwell, picked
up the week before, who scored **3.4**. That was the plan.

And this is the commissioner. He can move any player on any roster in this league, and he has: ask
Ethan about his Puka. He could edit anybody's lineup, and he couldn't fill his own. He wrote the
Laneocracy, which takes a pick from a manager who doesn't send a parlay leg on time. The house
proposes an amendment: same penalty for a commissioner who starts AJ Barner and blames the
calendar.

Ethan didn't schedule the Bengals' bye. He just showed up the week Lane didn't. The record now reads:
the house was wrong about the byes, and right about Lane. He keeps the name. **Excuse Man**, now
with a footnote.

And **Chris places the parlay**, which is its own story, just below.

## punishment-settled

<!-- Legs from Kunal, 2026-10-22. Not placed as of then; no sportsbook price known.
     Ethan sent the Pickens TD. Per Kunal: every leg Ethan has sent this season was Chargers ML, all missed.
       Chargers 0-6, on bye wk7 (verified, see nicks w7 receipts). Leg count per week not verified.
     Chris: favourite for low in 4 of the first 5 weeks; low in wk3 (as fav) and wk6 (+460). This is his 2nd slip.
     Loveland plays TNF (Bears home, Thu 2026-10-22), so a slip placed after kickoff can't carry that leg as-is.
     Ja'Kobi Lane (WR BAL, id 13293) is on Lane's own roster; w7 projection 6.44 PPR. Yardage leg, so still 50%.
       (The first post said he wasn't in the data: the search missed the apostrophe.)
     Jefferson, Saquon and Golden were Questionable on the 2026-10-22 pull.
     ML sources: ESPN/bet365/Vegas Insider/SBR listings, 2026-10-19 to 10-21.
     Full output, including the off-board markets: node scripts/props/parlay-w7.mjs -->

Four of the first five weeks, the house made Chris the favourite to finish last. The one week it
didn't, he did. He places the first slip of the Laneocracy.

**The slip:** Loveland under receiving yards · Jets ML · Jefferson over receiving yards · Walker over
rushing yards · Jonathan Taylor anytime TD · Pickens anytime TD · Saquon over rushing yards · Ja'Kobi
Lane over receiving yards · Skattebo over rushing yards · 49ers ML · Golden over receiving yards.

Seven are yardage props with no line yet, so coin flips. The rest: Jets **66%**, 49ers **62%**,
Taylor **62.8%**, Pickens **18.1%**. Together, **one in 2,746**.

**The Pickens leg is Ethan's.** Every leg Ethan has sent this season has been the Chargers
moneyline, and the Chargers are **0-6**. This week the Chargers are on bye, so for the first time
all season Ethan had to pick something else. He picked the worst leg on the slip. Lane calls Ethan a
bye week merchant. It took a Chargers bye to get him off the Chargers.

<!-- printed by scripts/props/parlay-w7.mjs
     Chris places the parlay: fair 85.00%
     Chris loses a pick under the Laneocracy: fair 49.00%
     All eleven hit: fair 0.04%
     The slip Chris actually places hits: fair 0.05%
     George Pickens scores: fair 18.13%
-->

- Chris places the parlay: **Yes −1050** · **No +520**
- Chris forgets a leg: **Yes −110** · **No −120**
- All eleven hit: **Yes +255000** · **No −2400**
- The slip Chris actually places hits: **Yes +203000** · **No −2400**
- George Pickens scores: **Yes +410** · **No −730**

Chris will place it. All of it is another matter: eleven is a lot of legs, and Chris has a lot
going on. Hence the best line here: **the slip he actually places beats the one he was sent**,
because a forgotten leg can't miss. If one goes missing, the house suggests Ethan's.

## bench

<!--
     Yan Dynasty left 31.6 — C.J. Stroud 24.0, Michael Mayer 16.5, Quentin Johnston 6.7
     The Washington Redskins left 22.1 — Omar Cooper 22.3, Jaylin Noel 20.7
     Rat left 17.6 — Jakobi Meyers 13.3, Rico Dowdle 7.9, Kimani Vidal 7
-->

Keeyan left **31.6** on his bench, more than anyone in the league. C.J. Stroud scored 23.98 there,
and Michael Mayer, who'd been on his team for less than a day, scored 16.5. The rebuild's first
productive player was on the bench for its first game.

Kunal left 12.3, Emeka Egbuka's 17.8 included. His best lineup scored **135.24**. Tal scored 131.96.

## card

<!--
     the board spans 244.5 to 271.5 on totals
-->

The biggest line on the board belongs to the man who blacked out in San Francisco. Excuse Man is an
underdog to the team that's rebuilding. And Kunal gets Ethan, who's finally on the board.

## matchup:2-4

<!-- The DNs vs Little St. Lane’s
     −1800 / +680 — 88.1% fair
     spread −38.5, total 259
     projected 149.5 vs 110.5
     last week The DNs: 132.0 (projected 139.4, -7.4)
     last week Little St. Lane’s: 114.3 (projected 114.3, 0)
-->

Last weekend Tal flew to San Francisco, watched the Cal game with Kunal, and **immediately blacked
out**. He also beat Kunal by 9.02. The house doesn't know which of those happened first and
doesn't want to.

Tal is 5-1, has the most points in the league, and is **+175** to win it. This week he's
**−1800** over Burnes, with a spread of 38.5 points, the biggest line on the board. The
house is giving Burnes an 11.9% chance, which is roughly what it would give Tal of remembering the
second half.

## matchup:3-1

<!-- Yan Dynasty vs Lane Doe
     −145 / +110 — 55.2% fair
     spread −4.5, total 254.5
     projected 130.2 vs 126.1
     last week Yan Dynasty: 99.9 (projected 138.9, -39.0)
     last week Lane Doe: 102.0 (projected 114.1, -12.1)
-->

**Excuse Man is an underdog to a rebuild.** Keeyan traded his best players on Saturday, is 1-5, and
has a 0.9% chance to win the league. He's still a **−145** favourite over Lane, because Jonathan
Taylor and Justin Jefferson are still on his roster and the house can read a depth chart.

The house checked twice this time, against its own sheet. Chase and LaPorta are back, and neither
projected lineup has a player on bye. If Lane loses this one, the excuse will have to be new.

## matchup:5-10

<!-- 3 AM afters in bull room vs ‘22 LA Rams
     −290 / +200 — 69.4% fair
     spread −17.0, total 271.5
     projected 144.9 vs 128.4
     last week 3 AM afters in bull room: 122.9 (projected 132.8, -9.9)
     last week ‘22 LA Rams : 112.1 (projected 133.6, -21.5)
-->

Kunal's first full week with McCaffrey, and Kunal is a −290 favourite. He projects for 144.9, with
Davante Adams nowhere near the lineup. Ethan is 1-5 and has just won his first game, which by Lane's
math means somebody on Kunal's roster is about to go on bye.

## matchup:6-8

<!-- Disciples of Yakub vs Rat
     −250 / +180 — 66.8% fair
     spread −13.5, total 257
     projected 136.3 vs 122.2
     last week Disciples of Yakub: 122.6 (projected 120, +2.6)
     last week Rat: 119.1 (projected 122, -2.9)
-->

On Wednesday, Jacob added **Christian "Charlie" Kirk** to his roster. Jacob is 4-2 and a
**−250** favourite over Garrett. He didn't need the help.

## matchup:11-9

<!-- The Washington Redskins vs Trust the Process
     −350 / +240 — 72.4% fair
     spread −19.0, total 244.5
     projected 132.4 vs 113.5
     last week The Washington Redskins: 148 (projected 142.3, +5.7)
     last week Trust the Process: 98 (projected 118.4, -20.4)
-->

## matchup:7-12

<!-- Empyrean Athletic vs K9 FentPack
     −135 / +100 — 53.8% fair
     spread −3.0, total 270
     projected 137.5 vs 134.1
     last week Empyrean Athletic: 116.2 (projected 138.5, -22.3)
     last week K9 FentPack: 129.1 (projected 134.6, -5.5)
-->

## punishment

<!-- THE PARLAY WINDOW — low scorer
     Little St. Lane’s +210 (26%)
     Trust the Process +270 (21.4%)
     Rat +620 (11.1%)
-->

Burnes is the **+210** favourite to place next week's parlay, which tracks with being an
11.9% underdog to Tal. Chris, who's placing this week's, is second at +270. The house's favourite
in this market has finished last once in six weeks.

## lineups

<!--
     highest projected: The DNs
     forfeited slots: none
     priced off waivers: The Washington Redskins QB Kirk Cousins 15.5
-->

## season

<!-- Futures receipts (w1 → w6 → w7 sheets):
       Title: DNs 20.1 → 27.4 → 29.3 (+155). Redskins 12.6 (+490), Kunal 12.4 (+500, from 8.5 in w6), Laur 12.4 (+500).
       Keeyan title 9.2 (w1, 4th) → 6.1 → 0.9 (+8100).
       Last place: Chris 23.8 (+240) · Keeyan 7.9 → 22.3 (+260) · Burnes 17.8 (+350) · Ethan 11.7 (+580) · Lane 7.4 (+990).
       Kunal 2.3 (+3400). Tal 0.0 (+400000); Chris's parlay, all eleven, is +255000 (scripts/props/parlay-w7.mjs).
     Punishment: Kunal 2026-10-22, the 2026 season loser runs the milk mile, Costa Rica format (Kunal's correction):
       one gallon each, drink any amount before each lap, gallon gone before the last running lap starts.
       No penalty laps stated. Lane named it in week 5, in Costa Rica (Kunal). w5/w6 sheets say "yet to name";
       not backfilled (Kunal: not important).
       The w7 sheet's market still reads TBD; config names it from week 8. -->

**The season punishment has a name, and has for two weeks.** The last-place market on this board
still says **TBD**, which is the house's fault: Lane named it in Costa Rica back in week five, and
the house was too busy pricing the milk to notice. The season loser runs the **milk mile**. One gallon
of whole milk, four quarter-mile laps. You can drink as much as you like before each lap, as long
as the gallon is gone before the last one starts. That's the format Tal and Burnes actually ran in
Costa Rica, and the house knows exactly how it goes: Burnes won by 2:42, and almost all of that
was spent standing still, drinking. The board below still says TBD. Next week it won't.

**The favourite to run it is Chris, at +240.** He's 2-4, he's placing this week's parlay, and the
house has had him as the favourite to finish last in a given week four times out of six. Right
behind him is the newest name on the board: **Keeyan, at +260**. A week ago he was 7.9% to finish
last. Then he traded McCaffrey and Adams for a 2027 first, and now he's **22.3%**. The rebuild comes
with a first-round pick and roughly a one-in-four shot at a gallon of milk.

Third is **Burnes, at +350**. Burnes has already run a milk mile this season, and won it. He is the
only man in the league with a course record and a real chance to defend it. The commissioner who
named the punishment is fifth, at **+990**. He has seven weeks to learn how to handle a bye.

At the top, nothing has changed except the gap. **Tal is +155** to win the league, up from 20.1% in
week one to **29.3%**. His price to finish last is **+400000**, a longer number than Chris's
eleven-leg parlay hitting. Behind him it's a three-way tie at about 12.5%: Rohan, Laur and
**Kunal**, who was 8.5% a week ago. McCaffrey did that, even with Davante Adams on IR.

Keeyan opened the season as the fourth favourite to win this league, at 9.2%. He's now 0.9%, eleventh of twelve.
That's what a rebuild looks like from the futures desk: one trade, and the line flips from the
trophy to the milk.
`,Cc=`---
league: dkenasty
week: 8
headline: CLEARED WITH THE COMMISSIONER
byline: The House · Week 8
---

<!-- DKENASTY SPORTSBOOK · week 8 · seed 1592652827
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: DKEnasty prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-10-28):
       THE TANK. Rohan (rnath499, The Washington Redskins, r11) 6-1. Owns Burnes' (r4) 2027 1st (traded_picks: orig 4, owner 11).
         wk7 vs Chris (r9). Posted: Rohan −350 / +240 (72.4%), spread −19, total 244.5.
         Sheet's optimal: QB Cousins (waiver fill, 15.5; Josh Allen BUF on bye) · London 16.6 · Golden 15.4 · Burden 12.4 · Cooper 9.5 → 132.3.
         Started: McCarthy QB 13.3 · Noel 5.9 · A. Mitchell (Q) 3.6 · T. Franklin 5.0 → starters projected 99.4 (w7 projections).
         Scored: Noel 1.7, Mitchell 0, Franklin 0. Bench: London 19.6, Burden 23.7, Golden 9.9, Cooper 22.5, Douglas 21. Left 71.9.
         Chris's actual starters projected 107.6. Closed form (variance.json): Rohan 38.8% → fair ≈ +158 dog.
           With London/Golden/Burden in for Noel/Mitchell/Franklin: 129.4, Rohan 75.5%.
         Sat 2026-10-24 23:17 ET Rohan added J.J. McCarthy, dropped Chris Rodriguez Jr. Legit: Allen on bye, the sheet priced his QB
           off waivers. "Last night" in Rohan's text fits Saturday night.
         Result: Rohan 108.58, Chris 76.4 (wk7 LOW). Rohan by 32.18. Pollard 36.5.
         Burnes P(last) 17.8 → 23.2 anyway: scored 146.48 (+36.0 over proj, week's biggest beat), lost to Tal 169.42 at +680.
         Draft-order mechanics for the 1.01 NOT verified; prose says only "Burnes' pick".
       Quotes (via Kunal, verbatim): Rohan "Lane I called you last night and cleared my starting lineup with you".
         Lane, later: "So many of you fuckers are unethical and not sneaky athletic". Kunal: Lane has no idea what's going on.
         Chris to Lane, after Lane called out the TE: "Hey Karlitz we got the same record u bum. I had to drop my former first j
           to start a QB give a guy a fuckin rest". Sent before Sunday's games (Kunal): both 2-4 then.
         Former first = Travis Hunter (Kunal). Chris's 2025 firsts: Hunter 1.06 (dropped wk4, 10/4, for ARI DEF), Tyler Warren 1.10.
           2026 firsts: Jadarian Price 1.03 (IR), Fernando Mendoza 1.11 (bench QB).
       THE TE. Chris's only TE is Tyler Warren (Q in wk7, scored 0). wk7 bench: 9 players, 0.0 points (Pittman IR, Doubs IR,
         Price IR, Evans Q, Charbonnet Q, Daniels, Keon Coleman, Sarratt, Mendoza). Kunal: not unethical, rebuilding dynasty.
         Lane's TE: Hunter Henry, added Wed 10/21 dropping AJ Barner. Chris dropped Henry on wk5 waivers (10/14, for Jalen Royals).
       Lane beat Keeyan 112.32–83.3 as +110 (book's only SU loss wk7). Lane 3-4, Chris 2-5.
         wk8: NO on bye; Lane's Shough and Olave unprojected. Lane added Jacoby Brissett 10/28 10:18 (dropped Gainwell),
         Bengals DEF 03:45 (dropped Jets). He handled the bye.
       Chris low: wk3, wk6, wk7 → third slip, back to back. Priced +270 (2nd of 12); fav was Burnes +210.
         WK7 SLIP (Kunal + Parlay Tracker "Legs" tab, 2026-10-28): Chris placed it, 8 legs only, no unders
           (California prediction-market rules). Which three were dropped beyond the Loveland under: not given.
           Hits (4 of 11): Ja'Kobi Lane over 14.5 (Lane) · JT anytime TD (Tal) · Pickens anytime TD (Ethan, +155) · Skattebo
           over 31.5 rush (Sam/Laur). Misses (7): Jefferson (JC), Jets ML (Han), Loveland under (Yan), Saquon (Burnes),
           49ers ML (Kunal), Golden (Garrett), K9 over (Bes'noy). Kunal: wouldn't have hit anyway.
           w7 house priced Pickens 18.1% and called it the worst leg. It hit. Ethan's previous legs: all Chargers ML, all missed.
       MARATHON (Kunal): Burnes and Garrett (Garrettrh, Rat, r8) run the NYC Marathon Sun 2026-11-01.
         Burnes plays Kunal (−210 / +155). Garrett plays Rohan (−150 / +110). Chris owns Garrett's 2027 1st (orig 8, owner 9).
       Milk mile (lastPlace market): Chris +230 (24.8) · Burnes +250 (23.2) · Keeyan +260 (22.5) · Ethan +610 · Garrett +1450.
       Title: Tal +140 (31.1) · Kunal +440 (13.8) · Rohan +440 (13.7) · Laur +450 (13.4) · Lane +830 (8.0).
       Book wk7: 5-1 SU, 2-4 ATS, 1-5 totals. Brier 0.135, season best (prior best 0.145, wk6).
       Keeyan: C.J. Stroud on the bench two weeks running, 23.98 then 16.5. -->

## lede

<!--
     biggest edge: Lane Doe −370 over Trust the Process (73.3%, −18.5)
     closest game: Yan Dynasty vs ‘22 LA Rams  at −130 (52.8%)
     highest total: 280
     last week: The DNs 169.4 high, Trust the Process 76.4 low
     the book went 5-1 on favourites, Brier 0.135
-->

**Rohan is 6-1, and he owns Burnes' 2027 first-round pick.** Last week he played Chris. A
Chris win would have kept Burnes nearer the bottom and Burnes' pick nearer the top. So Rohan
set a lineup.

At receiver he started Jaylin Noel, Adonai Mitchell and Troy Franklin. On the bench he kept
Drake London, Luther Burden and Matthew Golden. The house ran the lineup he actually set
through its own model. It projected **99.4**. Chris's projected 107.6. Rohan had turned
himself from a −350 favourite into a **+158 underdog** against the worst team in the league.

Then Tony Pollard scored **36.5**, Chris scored **76.4**, and Rohan won by **32.18**. His three
receivers scored 1.7. His bench scored 71.9, which is 4.5 points short of Chris's entire team.
**He tried to lose to Chris and couldn't.**

The house will be fair. The Saturday-night pickup of J.J. McCarthy was legitimate: Josh Allen
was on bye, and the house's own sheet had to fill Rohan's quarterback off the waiver wire. The
receivers were not.

Rohan's defence, in the group chat:

> "Lane I called you last night and cleared my starting lineup with you"

And later, the commissioner:

> "So many of you fuckers are unethical and not sneaky athletic"

The house has read that sentence many times and is still not sure what "sneaky athletic" means.
It is sure of the order of events. The commissioner was called about a lineup on Saturday night,
the lineup ran on Sunday, and afterwards he called the league unethical. This is the man who
wrote the Laneocracy. **He cleared the tank, then condemned it.** The house's best read is that
Lane picked up the phone and had no idea what he was agreeing to.

The verdict: **Rohan, guilty, and bad at it.** Burnes' chance of finishing last went up anyway,
from 17.8% to **23.2%**, because Burnes scored 146.48 and still lost to Tal. The tank didn't
work, and the pick got better without it.

## settled

<!--
     favourites 5-1 SU, 2-4 ATS, totals 1-5 over
     Brier 0.135 vs 0.25 for a coin flip; expected 4.1 chalk wins, got 5
     low scorer Trust the Process 76.4 — priced +270, 2 of 12
     high scorer The DNs 169.4
     joint: did not hit
     biggest beat: Little St. Lane’s 146.5 vs 110.5 projected (+36.0)
     biggest miss: Yan Dynasty 83.3 vs 130.2 projected (-46.9)
-->

**Five and one, Brier 0.135**, the best this book has posted all season, beating last week's
0.145. The house has stopped missing winners. It still can't find points: one over in six.

The one loss was **Excuse Man**. Lane was a +110 underdog to Keeyan's rebuild and won by
**29.02**, 112.32 to 83.3. He even had a player on bye, Omarion Hampton, zero points on the
bench, with the Chargers off. He won anyway, and nobody needed an excuse.

Burnes scored **146.48**, 36 over his projection and the best beat of the week. He lost by 22.94,
because he was playing Tal, who scored **169.42**. Tal is 6-1 with the most points in the league,
and he didn't need to set his lineup to lose. He set it to win.

**Chris finished last**, with 76.4, while the man across from him was trying to lose. He places
the parlay again: his third slip of the season and his second in a row.

**About last week's slip.** Chris placed it. Only eight of the eleven legs made it on, and none
of the unders, because California's prediction-market rules don't take them. Last week the house
priced "Chris forgets a leg." He didn't forget any. California dropped them for him.

It wouldn't have mattered. **Four of eleven hit**: Lane's leg on his own receiver, Ja'Kobi Lane;
Tal's Jonathan Taylor touchdown; Laur's Skattebo; and **George Pickens**. Seven missed, including
the house's own 49ers.

The house owes Ethan a correction, and this one it's happy to print. Last week it called the
Pickens leg the worst on the slip, at **18.1%**. Pickens scored. Maybe the bye week merchant was onto something.

## bench

<!--
     The Washington Redskins left 71.9 — Luther Burden III 23.7, Omar Cooper Jr. 22.5, Caleb Douglas 21
     Disciples of Yakub left 27.5 — Bo Nix 26.2, Quinshon Judkins 23.4
     Yan Dynasty left 21.9 — C.J. Stroud 16.5, Michael Mayer 6.2, Michael Wilson 10.6
-->

Rohan left **71.9** on his bench, and the house has already covered why.

Keeyan left C.J. Stroud on the bench again: 23.98 points in week six, **16.5** in week seven.
Keeyan has started a rebuild. Stroud has started a protest.

## card

<!--
     the board spans 218.5 to 280 on totals
-->

Chris, who lost to a tank, plays the commissioner who cleared it.
Two first-round picks run the New York City Marathon. And Rohan plays Garrett, whose pick belongs
to Chris.

## matchup:1-9

<!-- Lane Doe vs Trust the Process
     −370 / +250 — 73.3% fair
     spread −18.5, total 218.5
     projected 119.3 vs 100.8
     last week Lane Doe: 112.3 (projected 126.1, -13.8)
     last week Trust the Process: 76.4 (projected 113.5, -37.1)
-->

Last week Lane called out Chris for not starting an active tight end. Chris's reply:

> "Hey Karlitz we got the same record u bum. I had to drop my former first j to start a QB give a guy a fuckin rest"

When he sent it, it was true: both men were **2-4**. Then Lane won and Chris didn't, so it isn't
any more.

The house looked at the tight end, though, and it **acquits Chris**. His only tight end is Tyler
Warren, his own first-round pick from 2025, who was questionable and scored zero. To start a
healthy one, Chris would have had to cut someone. Last week his nine bench players scored **0.0**
points between them: three on IR, one of them his 2026 first-round pick, two questionable, and
a backup quarterback who was his other 2026 first. The former
first in the text is Travis Hunter, the sixth pick of the 2025 draft, already cut in week four.
You don't release your future in a dynasty league to stream a tight end for a 2-5 team.

Meanwhile, Lane's tight end is **Hunter Henry**, picked up last Wednesday. Chris dropped Henry
in week five. The commissioner is lecturing Chris on tight ends with Chris's old tight end.

To be fair to Lane, he did his homework this week. The Saints are on bye, which takes out his
quarterback, Tyler Shough, and Chris Olave, so on Wednesday morning he picked up Jacoby Brissett.
**Excuse Man checked the calendar.** He's −370, and this total, **218.5**, is the lowest the house
has ever posted in this league, by 14.5 points. This is the game the parlay probably comes from: Chris is −120
to finish last and Lane is +540, so the house makes it **56.2%** that the low score comes out of
this game.

## matchup:5-4

<!-- 3 AM afters in bull room vs Little St. Lane’s
     −210 / +155 — 63.4% fair
     spread −11.0, total 255
     projected 133.5 vs 122.8
     last week 3 AM afters in bull room: 131 (projected 144.9, -13.9)
     last week Little St. Lane’s: 146.5 (projected 110.5, +36.0)
-->

**Burnes runs the New York City Marathon on Sunday.** He'll be somewhere between Staten Island
and Central Park when his lineup locks, and the house hopes he set it on Saturday.

He has run 26.2 miles' worth of bad luck already: 146.48 last week, the second-highest score in
the league, and a loss. He's 1-6. This week he's a **+155** underdog to Kunal, which the house
discloses with the usual conflict of interest. A Kunal win also improves the pick Rohan owns.
Rohan is rooting for the house. The house is used to that.

## matchup:11-8

<!-- The Washington Redskins vs Rat
     −150 / +110 — 56% fair
     spread −5.0, total 267
     projected 136.7 vs 131.7
     last week The Washington Redskins: 108.6 (projected 132.4, -23.8)
     last week Rat: 109.2 (projected 122.2, -13)
-->

**Garrett is running the marathon too.** He plays Rohan, who is a −150 favourite and presumably
starting his receivers this week.

Here's the twist. **Chris owns Garrett's 2027 first.** So the man Rohan tried to lose to last
week needs Rohan to win this week. Chris is rooting for Rohan. Burnes is rooting against Kunal.
Garrett is mostly rooting to finish.

## matchup:3-10

<!-- Yan Dynasty vs ‘22 LA Rams
     −130 / −105 — 52.8% fair
     spread −2.5, total 255
     projected 129.2 vs 126.8
     last week Yan Dynasty: 83.3 (projected 130.2, -46.9)
     last week ‘22 LA Rams : 115.0 (projected 128.4, -13.4)
-->

Both teams are 1-6, and as far as the house can tell, both are trying to win. Keeyan is −130.
His kicker plays for Houston and his defence is San Francisco, both on bye, so the house is
pricing both off the waiver wire. Lane would like a word about bye week merchants.

## matchup:2-12

<!-- The DNs vs K9 FentPack
     −195 / +140 — 61.3% fair
     spread −9.5, total 280
     projected 145.8 vs 135.9
     last week The DNs: 169.4 (projected 149.5, +19.9)
     last week K9 FentPack: 119.4 (projected 134.1, -14.7)
-->

## matchup:7-6

<!-- Empyrean Athletic vs Disciples of Yakub
     −145 / +105 — 54.9% fair
     spread −4.0, total 270
     projected 137.7 vs 133.4
     last week Empyrean Athletic: 135.6 (projected 137.5, -1.9)
     last week Disciples of Yakub: 113.4 (projected 136.3, -22.9)
-->

## punishment

<!-- THE PARLAY WINDOW — low scorer
     Trust the Process −120 (43.7%)
     Lane Doe +540 (12.5%)
     Little St. Lane’s +770 (9.2%)
-->

Chris is **−120** to place the parlay for a third week running, the first odds-on favourite this
market has ever posted. Second is the man playing him. Third is Burnes, who'll have run a
marathon and might still have to place a parlay.

## season

<!-- milk mile: Chris +230 · Burnes +250 · Keeyan +260 · Ethan +610 · Garrett +1450. Tal title +140. -->

**The milk mile has three real candidates**, and they're close. Chris is the favourite to run it
at **+230**, Burnes **+250** and Keeyan **+260**, and nobody else is shorter than +610.

Burnes is the one to watch. He won the milk mile in Costa Rica. On Sunday he runs a marathon. He
is the only man in the league who could finish this season with a course record, a marathon medal
and a gallon of milk in his stomach, all in the same autumn. Garrett runs on Sunday too, at
**+1450** for the milk. He's training for the wrong race.

At the top, **Tal is +140**. Behind him are Kunal, Rohan and Laur, all at about 13.5%. One of them
spent last Sunday trying to lose, and he's still the third favourite to win the league.
`,Bc=`---
league: loog
week: 2
headline: WEEK 2
byline: The House
---

<!-- THE ORDINARY GENTLEMEN · week 2 · seed 1592605807
     This league gets no lore by request. Keep this file factual and short.
     Every lowercase heading is a SLOT; any other heading becomes its own panel. -->

## lede

<!-- McLovin 173.26 vs 123.1 projected (+50.16). bmilgram 156.4 (+40.2) and won.
     Brier 0.270 vs 0.25. Step Brockers low at 101.7. -->

Two seats beat their projection by more than forty points in week one — McLovin by 50.16
and bmilgram by 40.2 — and the model graded out **worse than a coin flip**, at a Brier
score of 0.270 against 0.250. Ten teams, five games, one week. That is the sample, and it
is not one anybody should read much into in either direction.

The board has moved less than those numbers suggest. All ten seats sit between 5.1% and
16.7% to win the league — a 3.3× spread between the best roster and the worst, in a
ten-team league where an even split would be 10% each.

## settled

Favourites went 3-2 straight up, 3-2 against the spread, and totals went over three times
in five. The model expected 2.93 of its five favourites to win and got three, which is as
close to the forecast as a five-game week can land.

## card

<!-- Jahmyracle on Ice −510 / −24.0, 77.8% fair. Nine starters, so totals run in the 230s. -->

Four of the five games are priced inside seven points. The fifth is Jahmyracle on Ice at
−510, laying 24 — a 77.8% fair price off a 136.5-to-112.3 projection gap, with both
lineups optimised and nothing stranded on either bench. Skat in LaPorta Potty's most
valuable reserve is a second quarterback he cannot start.

## bench

Jahmyracle on Ice left 37.1 on the bench and lost by 1.5 points as a −260 favourite. Any
one of Jalen Coker's 33.8 or Chuba Hubbard's 23.7 wins that game on its own. Step Brockers
left 36.9 and finished last in the league. Same mistake, different bill.

## punishment

No forfeit attached in this league. The board is the number and nothing else: bmilgram
opens at +320 to score the fewest points this week, having scored the second-most last
week.
`,Lc=`---
league: loog
week: 3
headline: WEEK 3
byline: The House
---

<!-- LEAGUE OF ORDINARY GENTLEMEN · week 3
     No lore in this book, deliberately. Numbers, stated plainly.
     Sections with lowercase names are SLOTS and land in a specific panel. -->

## lede

<!--
     biggest edge: Jahmyracle on Ice −300 over The Warren Ukraine (69.6%, −16.5)
     closest game: McLovin vs Easy Breece-y at −120 (50.5%)
     the book went 4-1 on favourites, Brier 0.198
-->

Three of the five games are within three points. The one real edge is Jahmyracle on
Ice, last week's high scorer, laying 16.5 to The Warren Ukraine, last week's low scorer.
Last week the book went 4-1 on favourites with a Brier score of 0.198, a week after
posting 0.270 — worse than a coin flip.

## settled

<!--
     favourites 4-1 SU, 4-1 ATS, totals 2-3 over
     Brier 0.198 vs 0.25 for a coin flip; expected 3.2 chalk wins, got 4
     low scorer The Warren Ukraine 76.5 — priced +1700, 9 of 10
     high scorer Jahmyracle on Ice 162.9
-->

Four of five favourites won and covered, against 3.2 expected. The low scorer came from
the ninth line of ten at +1700: The Warren Ukraine, 76.5 against a projection of 130.1.

## bench

<!--
     The Warren Ukraine left 35.9 — Joe Burrow 16.2, Los Angeles Rams 11, Harold Fannin 10.4
     bmilgram left 26.6 — Travis Kelce 25.1, Xavier Worthy 13.5
-->

The Warren Ukraine left 35.9 on the bench, Joe Burrow among them. The optimal lineup
scores 112.4: still a 21-point loss to ❄️, but not the week's low score, which would
have gone to McLovin at 84.9.

## matchup:7-9

<!-- Jahmyracle on Ice vs The Warren Ukraine
     −300 / +210 — 69.6% fair
     spread −16.5, total 256
     projected 137.2 vs 120.3
-->

Last week's high scorer against last week's low scorer. Jahmyracle on Ice leads the
league in points for (317.8) and projects highest again.

## lineups

<!--
     priced off waivers: bmilgram K Matt Gay 7.5
-->

bmilgram has no kicker on the roster. From this week, a slot nobody on the roster can
fill is priced at the best available free agent, here Matt Gay for 7.5, marked
**waivers** below. Week two priced his empty defence at zero, and that sheet stays as
posted.
`,Pc=`---
league: loog
week: 4
headline: WEEK 4
byline: The House
---

<!-- THE ORDINARY GENTLEMEN · week 4 · seed 1592621581
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.

     LoOG is the boring book on purpose: no lore, factual copy only. -->

## lede

<!--
     biggest edge: Jahmyracle on Ice −570 over Step Brockers (79.1%, −26.0)
     closest game: T-Posers vs The Warren Ukraine at −145 (54.9%)
     highest total: 255.5
     last week: Jahmyracle on Ice 150.8 high, ❄️ 95.1 low
     the book went 5-0 on favourites, Brier 0.179 (wk1 0.270, wk2 0.198)
-->

The book went 5-0 on favourites last week with a Brier score of 0.179, its best in
this league so far, after 0.270 in week one and 0.198 in week two. This week's one real
edge is Jahmyracle on Ice at −570 over Step Brockers. The other four games are all
within twelve points.

## settled

<!--
     favourites 5-0 SU, 4-1 ATS, totals 3-2 over
     Brier 0.179 vs 0.25 for a coin flip; expected 2.9 chalk wins, got 5
     low scorer ❄️ 95.1 — priced +680, 5 of 10
     high scorer Jahmyracle on Ice 150.8
     biggest beat: McLovin 139.4 vs 119.5 projected (+19.9)
     biggest miss: ❄️ 95.1 vs 119.7 projected (-24.6)
     low-scorer history: wk1 Step Brockers (3rd of 10), wk2 The Warren Ukraine (9th), wk3 ❄️ (5th). Favourite has not hit.
-->

All five favourites won and four covered, against 2.9 expected. The low scorer was ❄️
at 95.1, priced fifth of ten at +680. In three weeks, the favourite for low scorer has
not yet finished last.

## bench

<!--
     Step Brockers left 38.8 — Kenyon Sadiq 23.5, Luther Burden 19.8, Houston Texans 11
     ❄️ left 33.4 — Michael Wilson 25.9, Rachaad White 11.1, Jameson Williams 8.9
     ❄️ optimal 128.54 → not low; Easy Breece-y 104.7 would have been.
     The Warren Ukraine left 30.1 — Harold Fannin 24.1, Los Angeles Rams 5
-->

Step Brockers left 38.8 on the bench, the most in the league, and won anyway. ❄️ left
33.4, Michael Wilson's 25.9 among it. The optimal lineup scores 128.5 and the week's low
score passes to Easy Breece-y at 104.7.

## matchup:7-2

<!-- Jahmyracle on Ice vs Step Brockers
     −570 / +340 — 79.1% fair
     spread −26.0, total 254
     projected 141.1 vs 114.5
     records: Jahmyracle 2-1, 468.6 PF (league high by 71.0); Step Brockers 1-2
-->

Jahmyracle on Ice has scored 468.6 points, 71 more than anyone else in the league,
and projects highest again. He's also the title favourite at +280.

## matchup:8-9

<!-- T-Posers vs The Warren Ukraine
     −145 / +105 — 54.9% fair
     spread −4.0, total 251.5
     projected 128.6 vs 124.9
-->

The closest game on the board. T-Posers is the house's own seat.

## matchup:5-4

<!-- aruni3 vs Skat in LaPorta Potty
     −175 / +130 — 59.2% fair
     spread −7.0, total 241.5
     projected 125 vs 118
     Skat in LaPorta Potty is the only 0-3 team.
-->

Skat in LaPorta Potty is the league's only winless team.

## lineups

<!--
     highest projected: Jahmyracle on Ice
     forfeited slots: none
     priced off waivers: none
     bmilgram's empty K slot (priced off waivers in wk3) is filled: Evan McPherson.
-->

No slot is priced off waivers this week. bmilgram's kicker slot, priced at the best free
agent last week, now has a kicker on the roster.
`,Ac=`---
league: loog
week: 5
headline: WEEK 5
byline: The House
---

<!-- THE ORDINARY GENTLEMEN · week 5 · seed 1592630042
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     LoOG is the boring book on purpose: no lore, factual copy only. -->

## lede

<!--
     biggest edge: Skat in LaPorta Potty −430 over bmilgram (75.5%, −20.0)
     closest game: McLovin vs ❄️ at −145 (54.9%)
     highest total: 254
     last week: The Warren Ukraine 160.4 high, bmilgram 75.8 low
     the book went 2-3 on favourites, Brier 0.334 (wk1 0.270, wk2 0.198, wk3 0.179) — worst yet
     Jahmyracle −570 (79.1%), the biggest line this book has posted, lost by 2.82.
-->

The book went 2-3 on favourites last week with a Brier score of 0.334, its worst in this league
so far. The biggest line it has posted, Jahmyracle on Ice at −570, lost to Step Brockers by
2.82. This week the biggest favourite on the board is Skat in LaPorta Potty, the league's only
winless team, at −430.

## settled

<!--
     favourites 2-3 SU, 2-3 ATS, totals 3-2 over
     Brier 0.334 vs 0.25 for a coin flip; expected 3.2 chalk wins, got 2
     low scorer bmilgram 75.8 — priced +770, 4 of 10
     high scorer The Warren Ukraine 160.4
     biggest beat: The Warren Ukraine 160.4 vs 124.9 projected (+35.5)
     biggest miss: bmilgram 75.8 vs 123.9 projected (-48.1)
     low-scorer history: wk1 Step Brockers (3rd of 10), wk2 The Warren Ukraine (9th), wk3 ❄️ (5th),
       wk4 bmilgram (4th). Favourite has not hit in four weeks.
     upsets: Step Brockers over Jahmyracle −570 by 2.82; ❄️ over Easy Breece-y −230 by 0.80;
       The Warren Ukraine over T-Posers −145 by 24.54.
-->

Two of five favourites won, against 3.2 expected. Three upsets: Step Brockers over the −570
by 2.82, ❄️ over Easy Breece-y by 0.80, and The Warren Ukraine over the house's own seat by
24.54.

The low scorer was bmilgram at 75.78, priced fourth of ten at +770. In four weeks, the
favourite for low scorer hasn't once finished last. The Warren Ukraine had the high score,
160.42, beating its projection by 35.5.

## bench

<!--
     bmilgram left 72.3 — Kyle Monangai 28, RJ Harvey 19.3, Devaughn Vele 17.4
       best 148.08 → beats McLovin 138.64 by 9.44; low would have been Skat in LaPorta Potty 122.42.
       Started Rashee Rice (0) and Saquon Barkley (2). Monangai added Thu 2026-10-01.
     ❄️ left 29.5 — Romeo Doubs 23.8, MarShawn Lloyd 9.9
     aruni3 left 24.4 — Alvin Kamara 22.8, Mark Andrews 13.7, Jalen Hurts 13.5
     The Warren Ukraine: Puka Nacua (27.7) started from IR per the Tuesday snapshot; the bench pool
       now counts anyone who started (fixed in settle.mjs this week).
-->

bmilgram left **72.3** points on the bench, the most this board has recorded in this league.
Kyle Monangai, picked up on Thursday, scored 28 on the bench, while Rashee Rice and Saquon
Barkley started for a combined 2. The optimal lineup scores 148.08, which beats McLovin by
9.44, and the week's low score passes to Skat in LaPorta Potty at 122.42.

## card

<!--
     the board spans 215.5 to 254 on totals
-->

Three teams are 3-1. The 0-4 team is the biggest favourite on the card. The team with the most
points in the league is 2-2.

## matchup:3-6

<!-- McLovin vs ❄️
     −145 / +105 — 54.9% fair — closest game
     spread −4.0, total 235
     projected 120.3 vs 115.9
     last week McLovin: 138.6 (projected 133.1, +5.5)
     last week ❄️: 126.3 (projected 113.7, +12.6) — won by 0.80
     both 3-1.
-->

The closest game on the board, between two of the three 3-1 teams. ❄️ won last week by 0.80.

## matchup:4-10

<!-- Skat in LaPorta Potty vs bmilgram
     −430 / +280 — 75.5% fair
     spread −20.0, total 215.5 (lowest)
     projected 119 vs 98.4
     last week Skat in LaPorta Potty: 122.4 (projected 118, +4.4)
     last week bmilgram: 75.8 (projected 123.9, -48.1)
     Skat 0-4. bmilgram 2-2, lowest projection on the board, low-scorer favourite at +125 (35.8%) —
       shortest low-scorer price this book has posted (prior shortest +320).
-->

Skat in LaPorta Potty is 0-4 and a −430 favourite. bmilgram projects 98.4, the lowest on the
board, and is +125 to post the week's low score. That's the shortest price this market has
posted in this league; the previous shortest was +320.

## matchup:7-1

<!-- Jahmyracle on Ice vs Easy Breece-y
     −195 / +145 — 61.7% fair
     spread −10.0, total 252
     projected 131.5 vs 121.7
     last week Jahmyracle on Ice: 123.4 (projected 141.1, -17.7) — lost at −570
     last week Easy Breece-y: 125.5 (projected 126.3, -0.8) — lost by 0.80 at −230
     Jahmyracle 2-2, PF 592.0 (league high by 55.8). Title favourite 18.6% (+300). Easy Breece-y 1-3.
-->

Jahmyracle on Ice has scored 592.0 points, 55.8 more than anyone else, and is 2-2. He's still
the title favourite, at +300. Easy Breece-y is 1-3 after losing last week by 0.80.

## matchup:9-5

<!-- The Warren Ukraine vs aruni3
     −210 / +150 — 62.7% fair
     spread −10.5, total 254
     projected 132.9 vs 122.1
     last week The Warren Ukraine: 160.4 (projected 124.9, +35.5)
     last week aruni3: 131.6 (projected 125, +6.6)
     The Warren Ukraine 2-2, highest projection on the board. aruni3 3-1; K slot priced off waivers (Matt Gay 7.5).
-->

The Warren Ukraine projects highest on the board after last week's high score. aruni3 is 3-1,
and its kicker slot is priced off waivers.

## matchup:8-2

<!-- T-Posers vs Step Brockers
     −200 / +145 — 61.8% fair
     spread −9.0, total 232
     projected 121.5 vs 112
     last week T-Posers: 135.9 (projected 128.6, +7.3) — lost at −145
     last week Step Brockers: 126.2 (projected 114.5, +11.7) — beat the −570
     Step Brockers 2-2 (LLWW).
-->

T-Posers is the house's own seat. Step Brockers has won two straight, the last one as a +340
underdog.

## lineups

<!--
     highest projected: The Warren Ukraine
     forfeited slots: none
     priced off waivers: aruni3 K Matt Gay 7.5
-->

One slot is priced off waivers this week: aruni3's kicker, at Matt Gay.
`,Rc=`---
league: loog
week: 6
headline: WEEK 6
byline: The House · Week 6
---

<!-- THE ORDINARY GENTLEMEN · week 6 · seed 1592637483
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!--
     biggest edge: Easy Breece-y −300 over T-Posers (69.7%, −16.5)
     closest game: Step Brockers vs aruni3 at −135 (53.3%)
     highest total: 255
     last week: The Warren Ukraine 165.5 high, ❄️ 92.8 low
     the book went 3-2 on favourites, Brier 0.233
-->

Skat in LaPorta Potty won as the biggest favourite on last week's board and is 1-4. This
week's biggest line is Easy Breece-y at −300 over T-Posers. The team with the most points in
the league is 2-3 and the title favourite.


## settled

<!--
     favourites 3-2 SU, 3-2 ATS, totals 4-1 over
     Brier 0.233 vs 0.25 for a coin flip; expected 3.2 chalk wins, got 3
     low scorer ❄️ 92.8 — priced +680, 3 of 10
     high scorer The Warren Ukraine 165.5
     joint: did not hit
     biggest beat: Step Brockers 152.4 vs 112 projected (+40.4)
     biggest miss: ❄️ 92.8 vs 115.9 projected (-23.1)
-->

The book went 3-2 on favourites and 3-2 against the spread, with a Brier score of 0.233.
Skat in LaPorta Potty, the −430 favourite and the only winless team, won its first game,
148.10 to 121.44, and covered the 20 by 6.66.

The low scorer was ❄️ at 92.80, priced third of ten at +680. It's ❄️'s second low score
this season, after week three. The favourite for low scorer, bmilgram, scored 121.44. In five
weeks, the favourite in that market hasn't finished last once.

The Warren Ukraine had the high score for the second week running, 165.50, after 160.42 in
week four.


## bench

<!--
     Jahmyracle on Ice left 41.4 — Drake Maye 39.5, Blake Corum 16.2
     T-Posers left 39.8 — Isaiah Likely 32.4, Emeka Egbuka 17.2
     McLovin left 20.2 — Rhamondre Stevenson 17.5, J.K. Dobbins 15.4
-->

Jahmyracle on Ice left **41.4** on the bench, 39.5 of it from Drake Maye, and lost by 41.88
as a −195 favourite. T-Posers left 39.8, Isaiah Likely's 32.4 included, and lost by 11.22.
Either bench would have been enough to win.


## card

<!--
     the board spans 237.5 to 255 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

Jahmyracle on Ice has scored the most points in the league, 703, and is 2-3. It's also the
title favourite at +370. McLovin is the only one-loss team in the league and the most likely to
make the playoffs, at 82.4%, but isn't the title favourite.


## matchup:3-4

<!-- McLovin vs Skat in LaPorta Potty
     −200 / +145 — 61.8% fair
     spread −9.5, total 249.5
     projected 130.1 vs 120.5
     last week McLovin: 114.5 (projected 120.3, -5.8)
     last week Skat in LaPorta Potty: 148.1 (projected 119, +29.1)
-->

## matchup:7-6

<!-- Jahmyracle on Ice vs ❄️
     −140 / +105 — 54.2% fair
     spread −3.5, total 247
     projected 125.9 vs 122.7
     last week Jahmyracle on Ice: 111.2 (projected 131.5, -20.3)
     last week ❄️: 92.8 (projected 115.9, -23.1)
-->

## matchup:9-10

<!-- The Warren Ukraine vs bmilgram
     −240 / +170 — 65.5% fair
     spread −13.0, total 255
     projected 134.7 vs 121.4
     last week The Warren Ukraine: 165.5 (projected 132.9, +32.6)
     last week bmilgram: 121.4 (projected 98.4, +23.0)
-->

## matchup:1-8

<!-- Easy Breece-y vs T-Posers
     −300 / +210 — 69.7% fair
     spread −16.5, total 247.5
     projected 133 vs 116
     last week Easy Breece-y: 153.1 (projected 121.7, +31.4)
     last week T-Posers: 141.1 (projected 121.5, +19.6)
-->

## matchup:2-5

<!-- Step Brockers vs aruni3
     −135 / −100 — 53.3% fair
     spread −2.5, total 237.5
     projected 120.7 vs 118.1
     last week Step Brockers: 152.4 (projected 112, +40.4)
     last week aruni3: 112.1 (projected 122.1, -10.0)
-->

## punishment

<!-- LOW SCORER OF THE WEEK — low scorer
     T-Posers +360 (17.2%)
     aruni3 +450 (14.6%)
     Step Brockers +550 (12.3%)
-->

T-Posers is the favourite at +360. The favourite in this market is 0 for 5.


## lineups

<!--
     highest projected: The Warren Ukraine
     forfeited slots: none
     priced off waivers: McLovin K Trey Smack 7.7; McLovin DEF Indianapolis Colts 8.1
-->
`,Hc=`---
league: loog
week: 7
headline: WEEK 7
byline: The House · Week 7
---

<!-- THE ORDINARY GENTLEMEN · week 7 · seed 1592645944
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     No lore in this book, by design.
     RECEIPTS (committed files, 2026-10-22):
       wk6 low The Warren Ukraine 87.24, priced +1750 (9th of 10); high scores wk4 160.42, wk5 165.50. Lost to bmilgram 91.04 as −240.
       wk6 high T-Posers 159.82 (+43.8 over projection), beat Easy Breece-y as +210; T-Posers was the low-score favourite (+360).
       Low-score favourite has not finished last in any of weeks 1–6.
       Skat in LaPorta Potty beat McLovin 113.5–98.1 as +145: second straight win, 2-4.
       Standings: McLovin, Step Brockers 4-2; six teams 3-3; Easy Breece-y, Skat 2-4.
       Jahmyracle on Ice 840.00 PF (league high), 3-3, title 16.0% (+400).
       McLovin left 29.0 (Shough 27.0); best lineup 127.1 > 113.5. -->

## lede

<!--
     biggest edge: Jahmyracle on Ice −440 over McLovin (75.8%, −23.5)
     closest game: T-Posers vs ❄️ at −125 (51.4%)
     highest total: 266
     last week: T-Posers 159.8 high, The Warren Ukraine 87.2 low
     the book went 2-3 on favourites, Brier 0.345
-->

Six teams are 3-3 and nobody has more than four wins. The biggest line this week is Jahmyracle on Ice at −440 over McLovin, which pits the team with the most points against one of the two teams with the best record.

## settled

<!--
     favourites 2-3 SU, 2-3 ATS, totals 1-4 over
     Brier 0.345 vs 0.25 for a coin flip; expected 3.0 chalk wins, got 2
     low scorer The Warren Ukraine 87.2 — priced +1750, 9 of 10
     high scorer T-Posers 159.8
     joint: did not hit
     biggest beat: T-Posers 159.8 vs 116 projected (+43.8)
     biggest miss: The Warren Ukraine 87.2 vs 134.7 projected (-47.5)
-->

The book went 2-3 on favourites, with a Brier score of 0.345, worse than a coin flip.

The Warren Ukraine had the high score in weeks four and five. In week six it had the low, 87.24, priced ninth of ten at +1750, and lost to bmilgram as a −240 favourite.

T-Posers, the favourite to score lowest, scored the most instead: 159.82. In six weeks the favourite in that market hasn't finished last once.

## bench

<!--
     McLovin left 29.0 — Tyler Shough 27.0, Xavier Worthy 14.3, J.K. Dobbins 13.6
     The Warren Ukraine left 25.8 — Colston Loveland 18.5, Stefon Diggs 16.4, Khalil Shakir 13.4
     ❄️ left 25.1 — Rachaad White 15.7, Dallas Goedert 12.1, Romeo Doubs 11.2
-->

McLovin left 29.0 on the bench, 27.0 of it from Tyler Shough, and lost to Skat in LaPorta Potty by 15.4. The best lineup available would have scored 127.1 and won.

## card

<!--
     the board spans 234 to 266 on totals
-->

Jahmyracle on Ice has the most points in the league, 840.00, a 3-3 record, and the best title odds at +400. Skat in LaPorta Potty has won two straight and is the favourite to score lowest, at +280.

## lineups

<!--
     highest projected: Jahmyracle on Ice
     forfeited slots: none
     priced off waivers: T-Posers RB Zonovan Knight 7.6
-->
`,Dc=`---
league: loog
week: 8
headline: WEEK 8
byline: The House · Week 8
---

<!-- THE ORDINARY GENTLEMEN · week 8 · seed 1592653513
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     No lore in this book, by design.
     RECEIPTS (committed files, 2026-10-28):
       wk7: 3-2 SU, 3-2 ATS, 1-4 totals, Brier 0.254. Upset: McLovin +280 over Jahmyracle on Ice (−440), 139.92–124.94.
       wk7 low Easy Breece-y 78.4, priced +710 (5th of 10); 121.8 projected (−43.4). High The Warren Ukraine 140.48 (wk6 low, 87.24).
       Low-score favourite has not finished last in any of weeks 1–7 (wk7 fav Skat +280).
       Standings: McLovin, Step Brockers 5-2; Warren Ukraine, ❄️, aruni3 4-3; Jahmyracle, T-Posers, bmilgram 3-4; Skat, Easy Breece-y 2-5.
       Jahmyracle on Ice 964 PF (league high) at 3-4, title favourite +310 (18.2%). Warren Ukraine +340 (17.0%).
       This week: Jahmyracle −610 over T-Posers, biggest line. -->

## lede

<!--
     biggest edge: Jahmyracle on Ice −610 over T-Posers (79.9%, −28.0)
     closest game: ❄️ vs aruni3 at −125 (52%)
     highest total: 264
     last week: The Warren Ukraine 140.5 high, Easy Breece-y 78.4 low
     the book went 3-2 on favourites, Brier 0.254
-->

McLovin and Step Brockers lead at 5-2. Jahmyracle on Ice has scored the most points in the league, 964, and is 3-4. It is also the title favourite at +310 and this week's biggest favourite, −610 over T-Posers.

## settled

<!--
     favourites 3-2 SU, 3-2 ATS, totals 1-4 over
     Brier 0.254 vs 0.25 for a coin flip; expected 3.2 chalk wins, got 3
     low scorer Easy Breece-y 78.4 — priced +710, 5 of 10
     high scorer The Warren Ukraine 140.5
     joint: did not hit
     biggest beat: McLovin 139.9 vs 122 projected (+17.9)
     biggest miss: Easy Breece-y 78.4 vs 121.8 projected (-43.4)
-->

Favourites went 3-2 and the Brier score was 0.254, a coin flip. The upset was McLovin, a +280 underdog, beating Jahmyracle on Ice 139.92 to 124.94.

The Warren Ukraine went from the low score in week six to the high score in week seven, 140.48. Easy Breece-y scored 78.4, the low, after projecting 121.8.

## bench

<!--
     Step Brockers left 34.3 — Luther Burden III 23.7, KC Concepcion Jr. 23.2, Dameon Pierce 11.8
     Easy Breece-y left 24.8 — Quinshon Judkins 23.4, Marvin Harrison Jr. 7.6
     Jahmyracle on Ice left 24.1 — Blake Corum 17.1, Kaelon Black 10.9, Carnell Tate 9.9
-->

## card

<!--
     the board spans 224 to 264 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

The board runs from a 224 total to 264. McLovin, tied for the lead at 5-2, plays The Warren Ukraine, the second favourite for the title at +340.

## matchup:9-3

<!-- The Warren Ukraine vs McLovin
     −150 / +110 — 55.8% fair
     spread −4.5, total 252
     projected 128.9 vs 124.5
     last week The Warren Ukraine: 140.5 (projected 132.2, +8.3)
     last week McLovin: 139.9 (projected 122, +17.9)
-->

## matchup:7-8

<!-- Jahmyracle on Ice vs T-Posers
     −610 / +360 — 79.9% fair
     spread −28.0, total 264
     projected 146.9 vs 118.8
     last week Jahmyracle on Ice: 124.9 (projected 145.5, -20.6)
     last week T-Posers: 106.2 (projected 118.4, -12.2)
-->

## matchup:2-4

<!-- Step Brockers vs Skat in LaPorta Potty
     −140 / +105 — 54.5% fair
     spread −3.5, total 241.5
     projected 123.1 vs 119.7
     last week Step Brockers: 110.3 (projected 125.7, -15.4)
     last week Skat in LaPorta Potty: 119.6 (projected 112, +7.6)
-->

## matchup:6-5

<!-- ❄️ vs aruni3
     −125 / −105 — 52% fair
     spread −1.5, total 242.5
     projected 122.7 vs 121.1
     last week ❄️: 127.8 (projected 117.1, +10.7)
     last week aruni3: 111.5 (projected 126.3, -14.8)
-->

## matchup:10-1

<!-- bmilgram vs Easy Breece-y
     −220 / +155 — 63.9% fair
     spread −10.5, total 224
     projected 117.9 vs 107.4
     last week bmilgram: 93.6 (projected 118, -24.4)
     last week Easy Breece-y: 78.4 (projected 121.8, -43.4)
-->

## punishment

<!-- LOW SCORER OF THE WEEK — low scorer
     Easy Breece-y +210 (25.7%)
     T-Posers +560 (12.1%)
     bmilgram +580 (11.8%)
-->

Easy Breece-y is the +210 favourite to score the low for a second week running. The favourite in this market has not finished last in any of the first seven weeks.

## lineups

<!--
     highest projected: Jahmyracle on Ice
     forfeited slots: none
     priced off waivers: McLovin K Trey Smack 7.4; McLovin DEF Washington Commanders 9.7; ❄️ K Trey Smack 7.4
-->

`,Oc=`---
league: nicks
week: 2
headline: THE KARAOKE ISSUE
byline: The House · Week 2
---

<!-- NICK'S SPORTSBOOK · week 2 · seed 1592606662
     Every lowercase heading is a SLOT and lands in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!-- kdutta 85.66, low, priced +980 (7th of 12). Projected 130.6. Bench had 37.7 on it.
     A5Kobe 174.6, high, was the +460 SONG SELECT favourite and won it. -->

**The commissioner of this book finished last and now has to sing about it.** That is
the week-one story in Nick's Sticky Fantasy, and the house would like the record to show that it did
not see it coming: Garbers mirror selfie opened the season priced +980 to be the low
scorer, seventh on a twelve-horse board, projected for 130.6 points. He scored 85.66.
Nobody else in the league finished within 27 points of that number.

What makes it *karaoke* rather than merely bad luck is the bench. There were 37.7 points
sitting on it — Isaiah Likely for 27.8, Denzel Boston for 13.9, Alec Pierce for 10.1 —
which means the roster that scored 85.66 had 123.4 available to it. Play the optimal
lineup and he finishes ninth, keeps his dignity, and this column is about something
else. Instead there is a night at Silver Clouds coming, and the song belongs to
A5Kobe, who put up 174.6 and was the only seat on the board the house actually called
right.

There is a second half to that joke, and it is that Kobe left 24.3 on *his* bench too —
Jalen Coker (haha), 33.8. He won the scoring title by exactly thirty points while sitting the
single best performance on his own roster. That is the state of play after one week: the
two loudest results on the sheet were both produced by managers who were not paying full
attention.

## settled

<!-- 3-3 SU, 3-3 ATS, 3-3 totals. Brier 0.251 vs 0.25. Expected 3.27 chalk wins, got 3. -->

Three-and-three, three-and-three, three-and-three. The book split every category it
posted, which sounds like a wash until you look at the Brier score: **0.251, against
0.250 for a model that calls every game a coin flip and goes home.** One week in, this
entire apparatus — 25,000 simulations, a variance model fitted on a full season of
residuals, a scoring dot product accurate to two hundredths of a point — is performing
one thousandth of a point worse than a man with a quarter.

That is not a disaster, it is a sample size of six. But the house said it would print
this number every week whether it flattered the model or not, so there it is, and it is
going to sit there until the model earns something better.

## bench

The most expensive Sunday in the league, and it is not close. Second place is Perc
Thuggins, who left Christian Watson's 32.7 on the bench and still won his game by 1.44 —
which is the cheapest possible way to make this list and he should enjoy it while it
lasts.

## card

Five of the six games this week are inside a touchdown and four of them are priced
identically at −140. This is what a flat league looks like when nothing has happened
yet: one real edge, one pick'em, and a middle you could shuffle.

## matchup:8-10

<!-- Beriousbeast −210 / −11.0, proj 140.6 vs 129.4. Last week 174.6 (+35.6) and 142.2 (+4.9). -->

The only line on the board with an opinion. Beriousbeast projects 140.6 — eleven clear
of George Droyd and the highest number in the league — and is still only a **62.9%
favourite**, which is the whole thesis of this book in one row. The best roster in a
twelve-team league, coming off a 174.6, laying eleven points, and it is barely a
two-to-one shot. Fantasy does not do locks.

## matchup:1-12

<!-- Garbers mirror selfie −120 / PK, proj 127.7 vs 127.6. Last week 85.66 and 120.96. -->

A genuine pick'em: 127.7 against 127.6, the closest projection on any of the three
sheets. The house has no read here and declines to pretend otherwise. Worth noting only
that one of these two seats scored 85.66 last week and is still projected dead level
with his opponent, which is the model telling you — politely — that last Sunday was
about the lineup card, not the roster.

## matchup:4-5

<!-- Chris's seat scored 141.66 vs 120.7 projected (+20.96), biggest riser 3.8% → 5.9%.
     Renamed himself on Sleeper this week: "Need TE HMU". Week 1's sheet keeps the old nameplate. -->

The seat this book buried in week one went out and scored 141.66 against a projection of
120.7 — the second-biggest beat in the league — and has been the biggest riser on the
futures board ever since, from 3.8% to 5.9% to win it all. He is still the seat with the
worst roster by the numbers. He is no longer the seat with the worst week.

He has also, finally, named his team. The house had taken the liberty of doing it for him
after Cal lost to UCLA on opening weekend, and that nameplate is not coming down — it is
still there on the week-1 sheet, where it was true, and it will be there in December. From
this week the sheet prints what he actually chose, which is **Need TE HMU**, filed on the
same weekend the low scorer of this league left 27.8 points of tight end on his bench.
Somebody in this room should answer that ad.

## punishment

<!-- Board favourite was Cal's seat at +370; kdutta came in at +980, 7th of 12. -->

The board's own favourite last week was Chris at +370. He finished fifth from the top.
This is a 12-runner market where the leader is barely an 11% shot, so being wrong is the
default state — but it is worth saying plainly that the singer came off the seventh line.

## punishment-paired

Called it. Beriousbeast was the +460 favourite to be the week's high scorer and was the
week's high scorer, which means he now owns a song selection, and everyone in this league
should be slightly worried about what a man who benches a 33-point receiver considers
funny.

## joint

Nothing landed — the pairing that actually came in was Garbers mirror selfie singing for
Beriousbeast, at +6100, which the sheet priced and did not feature. Six joints were on
the board. The one the house buried at the bottom is the one that hit. Read that however
you like.

## THE INTEREST WATCH

Fourth place in this league pays the interest accrued on six hundred dollars sitting in a
savings account at 4.50%. The pot started earning on 1 September. As of this sheet it has
generated **roughly a dollar.** By the payout, it will be about $8.75 if Rohan ever decides to pay.

Somebody is going to finish fourth in a fourteen-week season, beat eight other managers,
survive a playoff round, and receive a sandwich's worth of compound interest. The panel
on the season page ticks it live. 
`,Mc=`---
league: nicks
week: 3
headline: THE PHANTOM QUARTERBACK
byline: The House · Week 3
---

<!-- NICK'S SPORTSBOOK · week 3 · seed 1592614613
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!--
     biggest edge: Beriousbeast −260 over Got My Noahs in Paris (67.1%, −14.5)
     closest game: Nonchalant Dreadhead vs Return of the Menace at −145 (54.8%)
     highest total: 266.5
     last week: Perc Thuggins 158.5 high, George Droyd 75.1 low
     the book went 6-0 on favourites, Brier 0.201
     Need TE HMU: favourite −150 only because Bo Nix (FA, 16.8) fills his QB slot.
       Without him: 113.1 vs 125.2. Caleb Williams doubtful. Zero transactions in rounds 1–3.
-->

**Last week the house lost to a coin. This week it went six-for-six.** Every favourite on
the week-2 board won, and every one of them covered. None of them was priced better than
63%, most sat at 54%, and stringing all six together was a 2.8% proposition: a **+3400
chalk parlay** that nobody in this league had the nerve to bet, because it was six
games at −140 and every one of them looked like a coin flip. They were coin flips, and
all six came up heads.

The house would love to call that skill. It will settle for the Brier score, which went
from 0.251 (lost to the quarter) to **0.201**. That's the largest one-week improvement
any model has ever made in a twelve-team league with a karaoke forfeit, as far as the
house knows.

Then the house went and made Chris a favourite. **Need TE HMU is −150 this week** and
has no starting quarterback. Caleb Williams is doubtful, nobody else on the roster
plays the position, and Chris hasn't made one transaction in this league all season. The
book now prices an empty slot as the best free agent available, which here is Bo Nix at
16.8 points. Chris doesn't own Bo Nix. Chris has never looked at Bo Nix. Take Nix out and
Chris is a 12-point underdog. That's the line. Whether the house is being generous or
prophetic depends on one waiver claim that only one man can make.

## settled

<!--
     favourites 6-0 SU, 6-0 ATS, totals 2-4 over
     Brier 0.201 vs 0.25 for a coin flip; expected 3.3 chalk wins, got 6
     low scorer George Droyd 75.1 — priced +1050, 10 of 12
     high scorer Perc Thuggins 158.5
     joint: did not hit
     biggest beat: Perc Thuggins 158.5 vs 129 projected (+29.5)
     biggest miss: George Droyd 75.1 vs 129.4 projected (-54.3)
-->

Six and oh, straight up and against the number. The model expected 3.3 favourites to
win. It got six, and the house wants the math on the record before anyone starts
asking for bigger lines: the model didn't get smarter between Tuesdays. It said
54% six times and got every one right, which happens about once every thirty-five weeks.
Last week it said 54% six times and went 3-3. Both results mean the same thing, and the
Brier score will eventually say so.

The totals went 2-4, with four unders. That's because Beriousbeast and George Droyd
combined for **177.88** against a posted 269. That's not an under, it's a missing
persons report.

## bench

<!--
     George Droyd left 43.7 — Tre Tucker 22.9, Jake Ferguson 20.3, Brenton Strange 3.7
     Perc Thuggins left 25.9 — Davante Adams 39.5, Mark Andrews 10.9
     Got My Noahs in Paris left 19.1 — Sam LaPorta 17.2, Carnell Tate 5.7
     MBurnes: 75.1 + 43.7 = 118.8 optimal vs 102.78 → would have WON by 16, and not sung.
-->

Here's the sentence that decides who sings. George Droyd scored 75.1 and lost by
27.68. His bench had 43.7 on it: Tre Tucker for 22.9, Jake Ferguson for 20.3. **The
optimal lineup scores 118.8, wins the game by sixteen, and hands the microphone to
somebody else.** MBurnes didn't lose to Beriousbeast. He lost to his own roster
settings, and he'll be singing about it.

Honourable mention, for the second week running, goes to Perc Thuggins. He benched a
**39.5-point Davante Adams** and was the week's high scorer anyway. Week one he benched a 32.7 and won by 1.44. At this point
the bench isn't a mistake, it's a handicap he plays with on purpose so the rest of the
league stays interested.

## matchup:5-11

<!-- Need TE HMU vs Gus’s Balls
     −150 / +110 — 56% fair
     spread −4.5, total 254
     projected 129.9 vs 125.2
     QB slot: Bo Nix 16.8, off waivers. Without him 113.1 — a 12-point dog.
     last week Need TE HMU: 111.6 (projected 124.5, -12.9)
     last week Gus’s Balls: 117.1 (projected 123.6, -6.5)
-->

The most honest line on the board, and it sits on top of a player who isn't on the
roster. Put Bo Nix in Chris's QB slot and he's a 56% favourite. Leave it empty and he
was a +210 karaoke favourite on the first draft of this sheet. The book had to choose
what to price, and it chose optimism.

Consider what Chris has built. The team is named **Need TE HMU**, and the roster carries
two tight ends and zero healthy quarterbacks. He answered his own ad and then ran out of
the one position every team needs. Somebody in this league should text him "QB HMU" and
see whether it's the week he checks his phone.

Gus's Balls is 0-2 and the karaoke favourite at +560. If Chris doesn't claim a
quarterback, this game becomes a race to the bottom between the two people least
prepared to win it.

## matchup:4-3

<!-- Nonchalant Dreadhead vs Return of the Menace
     −145 / +105 — 54.8% fair
     spread −4.0, total 261
     projected 133.2 vs 129.2
     last week Nonchalant Dreadhead: 149.2 (projected 128.2, +21.0)
     last week Return of the Menace: 134.5 (projected 130.9, +3.6)
-->

Two 2-0 teams, four points apart, priced like the pick'em it is. Someone leaves this
game undefeated and someone leaves it learning the standings were a rumour. It's the
closest game on the card and the only one where the house would take either side
without complaint.

## matchup:8-9

<!-- Beriousbeast vs Got My Noahs in Paris
     −260 / +185 — 67.1% fair
     spread −14.5, total 266
     projected 140.6 vs 126.4
     last week Beriousbeast: 102.8 (projected 140.6, -37.8)
     last week Got My Noahs in Paris: 92.3 (projected 127.5, -35.2)
-->

Beriousbeast scored 102.78 last week, 37.8 under his projection, and still won by
27, because his opponent's lineup card stopped at 75.1. That's the kind of luck
people get in the first month and complain about not having in December.
He's still the biggest favourite on the board, still the title favourite at 19.5%, and
still the man who picks the song if the song-select board is right (+430).

## punishment

<!-- KARAOKE — low scorer
     Gus’s Balls +560 (12.2%)
     Got My Noahs in Paris +590 (11.6%)
     Comet club? +590 (11.5%)
     week 2: George Droyd 75.1, priced +1050 (10th of 12). Perc Thuggins picked the song.
     TODO(kunal): the song, and how it went. Replace the bracketed line below.
-->

Week two's singer came off the tenth line of twelve at +1050, which is the second
straight week the karaoke market has been won by a longshot. 

Burnes and Kunal will sing together this weekend in honor of Theta Zeta DKE's 150th anniversary. 
How appropriate.

This week's board is the flattest it's been. The top three are separated by less than
a point of probability and nobody is better than a one-in-eight shot. The only seat
that was a real favourite, Chris at +210, was taken off the board by a free agent he
hasn't claimed.

## punishment-paired

<!-- SONG SELECT — high scorer
     Beriousbeast +430 (15%)
     Perc Thuggins +560 (12.2%)
     Haircut Haircut 🗣️ +560 (12.1%)
-->

Perc Thuggins earned the honor to pick the song after benching 39.5 points to do it. He's +560
to pick again. The house wouldn't put him past benching his quarterback just to make
it interesting.

## lineups

<!--
     highest projected: Beriousbeast
     forfeited slots: none
     priced off waivers: Need TE HMU QB Bo Nix 16.8
-->

One slot on this page is marked **waivers**: Chris's quarterback. From this week on,
the book prices a slot nobody on the roster can fill as the best free agent who could.
It's a better guess than zero, and it's generous to exactly one person.

## THE INTEREST WATCH

Fourth place's prize has been in the bank for 23 days at 4.50 APY and has earned
**about $1.70**. It's up fifty-two cents on the week, which beats George Droyd.
`,Kc=`---
league: nicks
week: 4
headline: FOUR HUNDREDTHS
byline: The House · Week 4
---

<!-- NICK'S SPORTSBOOK · week 4 · seed 1592621476
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.

     House rule for this book: Nick's prose never cites another league. -->

## lede

<!--
     biggest edge: Haircut Haircut 🗣️ −410 over Gus’s Balls (74.9%, −22.5) — biggest line this book has posted
     closest game: Return of the Menace vs Need TE HMU at −125 (52.1%)
     highest total: 281
     last week: Perc Thuggins 172.4 high, Death By Foriegn War  85.9 low
     the book went 5-1 on favourites, Brier 0.191
     Chris: first transaction of the season, Kirk Cousins (FA) Sun 2026-09-27 15:27 ET, dropped Jalen Nailor.
       Cousins 22.22. Lost 121.92–121.96. Golden 21.0 benched. Trey Smack (K) scored 1.
       Wed: waived Oronde Gadsden (TE) for Ollie Gordon.
-->

**Last week the house told Chris he needed a quarterback. He went and got one.** At
3:27 on Sunday afternoon, with the early games already underway, Chris made the first
transaction of his season: Kirk Cousins, off the street, for Jalen Nailor. Cousins threw
for 22.22 points. The house had priced Chris's empty slot at 16.8. On the one day he
finally listened, he beat the house's own guess by five and a half points.

He lost by **0.04**.

That's four hundredths of a point. In this scoring system it's less than half a yard
of rushing. It's a running back falling forward instead of backward. It's also the
1 point Trey Smack scored all day, which means one more extra point would have won it. Chris
also had Matthew Golden's 21 points on the bench. This week the book has him
as the closest thing on the card to a coin flip, against the one man in this league who
knows exactly how he feels.

## settled

<!--
     favourites 5-1 SU, 4-2 ATS, totals 1-5 over
     Brier 0.191 vs 0.25 for a coin flip; expected 3.5 chalk wins, got 5
     low scorer Death By Foriegn War  85.9 — priced +670, 4 of 12
     high scorer Perc Thuggins 172.4
     joint: did not hit
     biggest beat: Perc Thuggins 172.4 vs 136.7 projected (+35.7)
     biggest miss: Death By Foriegn War  85.9 vs 128.3 projected (-42.4)
     only loss: Need TE HMU −150, lost by 0.04
-->

Five and one. The book's only loss of the week was by four hundredths of a point, which
means the Brier score, **0.191**, is the best this book has posted, and still
technically slightly unlucky. Two weeks ago the model lost to a coin. It's now 11-1 on
favourites since, and the house would like everyone to note that it hasn't once asked
for credit.

The totals went 1-5. Four unders the week before, five this week. Two weeks running the book has set
totals too high, and that is a real finding, not a joke: the totals are built off
projections that assume everyone starts their best lineup. This league doesn't.
See the bench panel, which is where the missing points went.

## bench

<!--
     Got My Noahs in Paris left 32.6 — Jakobi Meyers 19.4, Houston Texans 13, RJ Harvey 10.7
     Death By Foriegn War  left 24.8 — Kenyon Sadiq 23.5, Justin Herbert 13.7, Rachaad White 11.1
     Need TE HMU left 24 — Matthew Golden 21, Romeo Doubs 7.9
     DBFW optimal 110.74 vs George Droyd 108.04 → would have WON by 2.70.
       Next-lowest score was Comet club? 87.94 → Keeyan99 sings instead.
     Perc Thuggins left 11.8 — Drake London 28.4 benched. Wk1 benched 32.7, wk2 Adams 39.5.
-->

**For the second week in a row, the karaoke singer had the escape route on his own
bench.** Hunter scored 85.92 and lost by 22.12. His bench had Kenyon Sadiq for 23.5
and Justin Herbert for 13.7. The optimal lineup scores 110.74, **wins the game by
2.70**, and hands the microphone to Comet club? at 87.94. Keeyan should send flowers.
Last week it was Burnes. The house is starting to think the bench in this league
isn't a bench. It's a waiting room for people who'd rather sing.

Then there's Perc Thuggins, who has now benched a 28-point player in **three straight
weeks**: 32.7 in week one, Davante Adams's 39.5 in week two, Drake London's 28.4 last
week. He's 3-0. Noah Prozan leads the league in points. At some point you have to stop calling
it a mistake and start calling it a strategy: Xon is playing this league with one hand
tied behind his back, and the rest of the league has not yet noticed it's losing to
the other hand.

## card

<!-- the board spans 248 to 281 on totals -->

Three teams are undefeated, and two of them play each other. Two teams are winless, and
they play each other too. And the two men who lost by a combined **half a point** last
week meet in the closest game on the card. Whoever made this schedule is either a genius
or has a group-chat leak.

## matchup:3-5

<!-- Return of the Menace vs Need TE HMU
     −125 / −105 — 52.1% fair
     spread −1.5, total 248
     projected 125.9 vs 123.9
     last week Return of the Menace: 113.9 (projected 129.2, -15.3) — lost by 0.46, left 9.4 on bench
     last week Need TE HMU: 121.9 (projected 129.9, -8.0) — lost by 0.04
-->

**The Half-Point Bowl.** Call lost by 0.46 last week. Chris lost by 0.04. Combined,
the two of them were half a point from 3-0 and 2-1. Instead they're 2-1 and 1-2,
playing each other at −125 in the closest game on the card.

The house can't decide if this is the most fair game of the week or the cruelest one.
One of them is about to lose for the second week in a row, and given how these two
lose, it'll probably be by less than a point. Chris, meanwhile, has done something since Sunday the house can only describe
as character development: on Wednesday he dropped a tight end. The team is still
called **Need TE HMU**. He's down to one. He might need one again.

## matchup:2-11

<!-- Haircut Haircut 🗣️ vs Gus’s Balls
     −410 / +270 — 74.9% fair — the biggest line this book has posted (prior 67.1%)
     spread −22.5, total 272
     projected 148.4 vs 125.4
     last week Haircut Haircut 🗣️: 136.7 (projected 136.9, -0.2)
     last week Gus’s Balls: 122.0 (projected 125.2, -3.2) — won by 0.04
-->

Gus's Balls won last week by four hundredths of a point and was rewarded with the
biggest line this book has ever posted: **−410**, a 22.5-point spread. That's how
the market works. Nobody gets paid for winning ugly. Haircut Haircut projected
136.9 last week and scored 136.7, which is the most boring and most reliable thing
anyone has done in this league all year.

## matchup:8-4

<!-- Beriousbeast vs Nonchalant Dreadhead
     −320 / +220 — 71% fair
     spread −19.0, total 277.5
     projected 149.1 vs 129.7
     last week Beriousbeast: 159.5 (projected 140.6, +18.9)
     last week Nonchalant Dreadhead: 114.4 (projected 133.2, -18.8)
     WITHOUT the trade: Beriousbeast 158.6 and −600. See THE TRADE DESK.
     Nonchalant: 3-0 on 394.0 PF, fewest of the three unbeatens. Benched Jalen Hurts (13.6) last week, won by 0.46.
-->

The battle of the unbeatens, and it isn't priced like one. Nonchalant Dreadhead is 3-0 on
the fewest points of the three undefeated teams, and won last week by 0.46 with Jalen
Hurts on the bench. That's a team that's either clutch or living on borrowed time,
and the book has an opinion on which.

Beriousbeast is −320. Before Wednesday night he was **−600**. What happened in between
has its own panel below.

## matchup:1-6

<!-- Garbers mirror selfie vs Comet club?
     −195 / +140 — 61.3% fair
     spread −9.0, total 251
     projected 130.8 vs 121.6
     last week Garbers mirror selfie: 129.9 (projected 131.3, -1.4) — 4th-highest score, lost by 42.56
     last week Comet club?: 87.9 (projected 126.8, -38.9)
     Comet club? is the karaoke favourite (+410) and the last-place favourite (15.3%).
-->

In the interest of full disclosure, the house's own seat is a −195 favourite. Last week
it scored the fourth-highest total in the league and lost by 42 to Perc Thuggins, which is
the fantasy equivalent of being the second-best band at a Metallica concert.

Comet club? is the favourite for karaoke **and** the favourite to finish last, and was
two points from singing last week, and only got out of it because Hunter got
there first. Keeyan has since dropped Jayden Daniels and added two receivers and a tight end. The house admires a man who reads
his own odds.

## matchup:9-12

<!-- Got My Noahs in Paris vs Death By Foriegn War 
     −190 / +135 — 60.8% fair
     spread −9.0, total 258.5
     projected 134.2 vs 125.5
     last week Got My Noahs in Paris: 104.7 (projected 126.4, -21.7)
     last week Death By Foriegn War : 85.9 (projected 128.3, -42.4)
     WITHOUT the trade: Got My Noahs 127.1 and −125.
     both 0-3. Last place: DBFW 13.4%, GMNiP lower.
-->

**The Bus Stop Invitational.** Both teams are 0-3, and between them they left 57.4 points
on their benches last week. One of them goes to 1-3 and starts talking about a
run. The other goes to 0-4 and starts pricing beers.

Got My Noahs in Paris is −190 here, and before Wednesday's trade this was a −125 coin
flip. The trade made his week. Whether it made his season is a separate question,
and the answer is in the panel below. He won't like it.

<!-- TODO(kunal): "Foriegn". Roast the spelling, or leave it alone? -->

## matchup:7-10

<!-- Perc Thuggins vs George Droyd
     −185 / +135 — 60.5% fair
     spread −9.0, total 281
     projected 146.1 vs 136.8
     last week Perc Thuggins: 172.4 (projected 136.7, +35.7)
     last week George Droyd: 108.0 (projected 133.5, -25.5)
-->

Perc Thuggins is 3-0, leads the league in points, and benched a 28-point receiver last
week. George Droyd sang two weeks ago and won last week. This game has the highest
total on the board, 281, because it's two offences and one man who may or may not
start them.

## THE LEVELS OF LOSING

<!-- Homage to the Simmons column; tiers are the house's own.
     DBFW: lost by 22.12, optimal lineup wins by 2.70, sings.
     jc199: lost 114.40–113.94, left 9.4 on bench.
     Chris: lost 121.92–121.96, Golden 21 benched, K scored 1. First transaction of the season (Cousins 22.22). -->

Not all losses are equal. The house ranks last week's, worst last.

**Level 3: The Waiting Room.** Hunter. Lost by 22, had the win on his bench, owes a
song anyway. Painful, but there was a fork in the road and he can point at the exact moment he
took the wrong one. You can sleep after a loss like that. Eventually.

**Level 2: The Rounding Error.** Call. Lost by 0.46 to a man who benched Jalen Hurts.
Left 9.4 on his own bench, roughly twenty times the margin. Any one of a dozen
decisions flips it, which means none of them did, which is worse.

**Level 1: The Four Hundredths.** Chris. Ignored the league for two weeks. Got told by
a sportsbook, in public, that he needed a quarterback. Got one, mid-Sunday, and the
quarterback **beat the house's projection by five points**. Did everything right for
the first time all season and lost by a number that doesn't show up on the scoreboard
unless you ask it to. The kicker scored one point. The house has no further notes.

## THE TRADE DESK

<!-- Trade executed 2026-09-30 20:57 ET, three days after these two played (Beriousbeast won by 54.82).
     Beriousbeast gets: Jared Goff, Puka Nacua, Dalton Kincaid
     Got My Noahs gets: Brock Purdy, Jaylen Warren, Brock Bowers, Malik Nabers
     Counterfactual: nicks w4 rebuilt in scratch with ONLY these 7 players swapped back; same seed,
     same projections, waiver moves kept. Caveat: 4-for-3, so pre-trade Beriousbeast carries one extra bench body.
                      week 4        line      rest of season   title
     Beriousbeast    158.6→149.1   −600→−320   118.3→118.0     19.9%→19.7%
     Got My Noahs    127.1→134.2   −125→−190   109.8→109.1      5.1%→4.8%
     TODO(kunal): who started it? any group-chat context? -->

On Wednesday night, three days after Beriousbeast beat Got My Noahs in Paris by 55 points, the
two of them made a seven-player trade. Beriousbeast sent **Brock Bowers, Malik Nabers,
Brock Purdy and Jaylen Warren**. He got back **Jared Goff, Puka Nacua and Dalton
Kincaid**.

The house rebuilt this week's sheet with the trade reversed: same seed, same
projections, nothing else changed. Here's the grade.

**This week:** Beriousbeast got 9.5 points worse, in the one game all year against
another unbeaten team. His line dropped from −600 to −320. Got My Noahs got 7.1 points
better and went from a −125 coin flip to −190. A clear win for the 0-3 team.

**Rest of season:** both teams got *worse*. Beriousbeast drops from 118.3 a week to
118.0. Got My Noahs drops from 109.8 to 109.1. Title odds go 19.9% to 19.7% and 5.1% to
4.8%.

So the trade is a **loss-loss**. Each side gave up a little of its future so one of
them could win a single October game. That's the rarest trade in fantasy football, and
the house has never seen a grade it liked more.

## punishment

<!-- KARAOKE — low scorer
     Comet club? +410 (15.8%)
     Need TE HMU +480 (13.9%)
     Death By Foriegn War  +540 (12.5%)
     week 3: Death By Foriegn War 85.9, priced +670 (4th of 12). Perc Thuggins picked the song — 2nd straight week.
     BACKLOG (as of 2026-10-01): nobody has sung yet.
       wk1 Garbers mirror selfie (kdutta — the house) · wk2 George Droyd (MBurnes) · wk3 Death By Foriegn War (Hunter)
     Not this weekend either: some of the boys are in Costa Rica. Maybe week 5.
-->

**Nobody has sung.** Three weeks, three losers, zero songs. The week-one singer is the
house itself. The week-two singer is Burnes, and the two of them were booked to sing
together for the chapter's 150th, which, the house can confirm, also didn't happen (no need to note why).
Week three adds Hunter, off the fourth line at +670. Not one of the three was the
favourite, which makes the karaoke market in this league a longshot sport where nobody
gets paid out.

It won't clear this weekend either, because a portion of this league is in Costa Rica.
The house respects the travel. It doesn't respect the attempt to wait it out. A
karaoke debt doesn't expire, and it doesn't care what country you're in. **The backlog
is three singers and counting**, and if it reaches four, Silver Clouds should start
selling tickets.

This week's favourite is Comet club? at +410. Chris is second at +480. A man who loses
by four hundredths of a point and then joins a queue of singers who are out of the
country would be the most Nick's thing that has ever happened, and the house is
pricing it at about one in seven.

## punishment-paired

<!-- SONG SELECT — high scorer
     Beriousbeast +290 (20.4%)
     Haircut Haircut 🗣️ +310 (19.3%)
     Perc Thuggins +360 (17.3%)
     Perc has picked the song in weeks 2 and 3.
-->

Perc Thuggins has picked the song two weeks running. He's third on this board at
+360, which is the book's way of saying it doesn't believe a man who benches his
best player every week can keep doing this. The book has been wrong about Xon for
three weeks.

## joint

<!--
     Comet club? sings for Beriousbeast — +2700 (3.3%)
     Comet club? sings for Haircut Haircut 🗣️ — +2950 (3%)
     Need TE HMU sings for Beriousbeast — +3100 (2.9%)
-->

## lineups

<!--
     highest projected: Beriousbeast
     forfeited slots: none
     priced off waivers: none
-->

No slot on this page is priced off waivers. Every starter here belongs to the man who
starts him. Chris has a quarterback.

## THE INTEREST WATCH

<!-- $600 at 4.50% APY since 2026-09-01 → 30 days at 2026-10-01 → $2.17. Last week $1.70. -->

Fourth place's prize has now been in the bank for 30 days and has earned **$2.17**. It's
up 47 cents on the week. At this rate it reaches eight dollars, about one drink
at Silver Clouds, in the third week of December, right as the playoffs start. Fourth
place will have to decide whether to drink it or frame it.
`,Ic=`---
league: nicks
week: 5
headline: STRICTLY A LOAN
byline: The House · Week 5
---

<!-- NICK'S SPORTSBOOK · week 5 · seed 1592629427
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.

     House rule for this book: Nick's prose never cites another league.

     THE LOAN, for reference:
       Wed 2026-09-30 20:57 ET  trade: Kobe (A5Kobe, Beriousbeast, roster 8) sends Bowers, Nabers, Purdy,
                                Jaylen Warren; Oanta (goochsniffer2nd, Got My Noahs in Paris, roster 9)
                                sends Goff, Puka, Kincaid. Three days after Kobe beat Oanta by 54.82.
       w4 sheet (posted Thu)    graded it "loss-loss": ROS Kobe 118.3→118.0, Oanta 109.8→109.1.
                                Lines: Kobe −600→−320, Oanta −125→−190.
       Sun                      both won. Official (Sleeper standings, trade reversed): Oanta 165.38 beat
                                DBFW 116.18 by 49.20; Kobe 165.12 beat Arnst 120.02 by 45.10.
                                High score: Oanta by 0.26 over Kobe. Chris 159.3 third.
       Arnst exposed it when Oanta called out Rohan for the low score / karaoke.
       Tue 2026-10-06 09:40 ET  Kunal (commissioner) reversed it.
       Oanta still says it was fair, not collusion.
     Sleeper's matchup endpoint broke on the reversal (starters rewritten, points not) and briefly had both
     colluders LOSING; results/w4.json carries a \`repairs\` block and reconciles with the standings. -->

## lede

<!--
     biggest edge: Haircut Haircut 🗣️ −760 over Need TE HMU (82.3%, −29.5)
     closest game: Perc Thuggins vs Got My Noahs in Paris at −130 (52.8%)
     highest total: 277
     last week: Got My Noahs in Paris 165.4 high, Haircut Haircut 🗣️ 88.0 low
     the book went 3-3 on favourites, Brier 0.267
-->

**Last week the house graded a trade.** Kobe sent Brock Bowers, Malik Nabers, Brock Purdy
and Jaylen Warren to Oanta for Jared Goff, Puka Nacua and Dalton Kincaid. The house's
verdict, word for word, was that each side "gave up a little of its future so one of them
could win a single October game." Then it called that the best grade it had ever given and
moved on.

Read that sentence again. It isn't describing a trade. It's describing a **loan**. The house
described a loan, in writing, on its own sheet, gave it a gold star, and didn't notice.

Arnst noticed. On Sunday Oanta posted the high score of the week and used it to go after
Rohan about karaoke, and Arnst, a hero, exposed the trade for what it was. Prozan got mad.
Prozan wasn't in the trade, wasn't hurt by the trade, and didn't expose it. Prozan was a
bystander, and the house would like to thank him for his anger. On Tuesday morning the
commissioner reversed the trade, and Bowers went home.

Oanta maintains it was fair. Here is his defence, in full and unedited, because the house
couldn't improve it:

> "That trade as is I kinda trape Kobe (I win). With no bowers he trapes me. So looking at
> total expected points per player, we decided I get bowers for part of the season, which
> calculated to be a completely even trade in terms of total expected points. Not
> controversial at all we just did simple math to make it fair on both ends"

**"We decided I get Bowers for part of the season."** That's not a defence of the trade. It's
the definition of a loan, typed by the man who took it out, in his own words, as his
alibi.

And the worst part for the prosecution: the math checks out. By the house's own numbers the
trade made **both** teams worse for the rest of the season, Kobe from 118.3 a week to 118.0
and Oanta from 109.8 to 109.1. It really was completely even. It was even in the wrong
direction.

## settled

<!--
     favourites 3-3 SU, 2-4 ATS, totals 3-3 over
     Brier 0.267 vs 0.25 for a coin flip; expected 3.8 chalk wins, got 3
     low scorer Haircut Haircut 🗣️ 88.0 — priced +3800, 11 of 12
     high scorer Got My Noahs in Paris 165.4
     joint: did not hit
     biggest beat: Need TE HMU 159.3 vs 123.9 projected (+35.4)
     biggest miss: Haircut Haircut 🗣️ 88.0 vs 148.4 projected (-60.4)
     Chalk wins: Kobe (−320), Oanta (−190), Perc (−185). Losses: Rohan −410, kdutta −195, jc199 −125.
     Pre-repair the raw API had this at 1-5, with both colluders losing.
-->

Three and three, with a Brier score of **0.267**, which is a hair worse than flipping a coin.
The two favourites the house is proudest of hitting are Kobe at −320 and Oanta at −190. Those
were the two loan games. The house went 3-3, and two of its three wins are now evidence.

A note from the back office. A reversed trade confuses Sleeper's box score: it moves the
players back but not their points. Briefly, on Wednesday morning, this board had
Kobe and Oanta both **losing** last week, with three starters apiece scoring zero. The
standings say otherwise, and the standings are right. The house now checks every week's
results against the official standings before it settles anything. The loan is the first
thing in this league to make the house write a new test.

## bench

<!--
     Got My Noahs in Paris left 42.4 — Drake Maye 27.2, Sam LaPorta 22.4, Carnell Tate 21.5 (won by 49.20)
     Need TE HMU left 34.2 — Romeo Doubs 23.8, Ollie Gordon 18 (won by 40.4)
     Return of the Menace left 30.7 — Kyle Monangai 28, Mike Evans 12.6, Malik Washington 12 (lost by 40.4)
     Haircut best 105.64 — still the low score (next: Gus's Balls 109.72). Sings either way.
     Gus's Balls left 0.00 — perfect lineup, and beat the −410.
-->

Oanta left **42.4** on his bench, Drake Maye's 27.2 included, in a game he won by 49. That's
what happens when a man has more good players than he's supposed to.

Gus's Balls left **zero**. He set the perfect lineup and beat the biggest favourite this book
had ever posted. And Rohan's best possible lineup was 105.64, still the lowest in the league.
There was no escape on his bench. He sings either way.

## card

<!--
     the board spans 226.5 to 277 on totals
-->

The biggest line in book history, for the second week running, on the same team. Last week's
lost. The two men who lost to the loan play each other. And Oanta plays an unbeaten team
with nobody's players but his own.

## matchup:2-5

<!-- Haircut Haircut 🗣️ vs Need TE HMU
     −760 / +420 — 82.3% fair — biggest line this book has posted (prior: 74.9%, Haircut −410 last week, LOST)
     spread −29.5, total 250
     projected 140.7 vs 110.8
     last week Haircut Haircut 🗣️: 88.0 (projected 148.4, -60.4) — lost by 21.74, low scorer at +3800
     last week Need TE HMU: 159.3 (projected 123.9, +35.4) — beat jc199 by 40.4, 3rd-highest
     Haircut K slot priced off waivers: Will Reichard 8.8. Chris's K is Trey Smack (scored 1 in wk3).
-->

**−760.** Last week the house made Rohan −410, the biggest line it had ever posted. He scored
87.98, missed his projection by **60.4**, lost by 22, and finished 11th of 12 on the karaoke
board at **+3800**. That's the longest price this punishment market has ever paid out on.
He now owes a song, and Oanta gets to pick it.

The house's response is to make him −760.

The house understands how this looks. In its defence, Rohan projects 140.7 and Chris projects
110.8, and those numbers don't care about last week. The one thing the house will concede:
the −760 favourite doesn't currently own a kicker. His kicker slot is priced at the best free
agent.

Chris, meanwhile, scored 159.3 last week, the best score anybody in this league put up
**without a loan**, and finished third.

## matchup:8-3

<!-- Beriousbeast vs Return of the Menace
     −360 / +240 — 72.7% fair
     spread −20.5, total 276.5
     projected 149.2 vs 128.7
     last week Beriousbeast: 165.1 official (beat Arnst by 45.10)
     last week Return of the Menace: 118.9 (projected 125.9, -7) — lost to Chris by 40.4
     Kobe 4-0, 601.98 PF; title favourite 20.4% (+260). Bowers back, projected 15.5.
     jc199 2-2, WWLL.
-->

Kobe is 4-0 and the title favourite at +260. Bowers is back at tight end, projected for 15.5,
and the house hasn't asked him where he was last weekend. Call has lost two straight, and the
last one was by 40 to a team called Need TE HMU.

## matchup:1-11

<!-- Garbers mirror selfie vs Gus’s Balls
     −230 / +165 — 65.1% fair
     spread −11.5, total 236
     projected 124.7 vs 113
     last week Garbers mirror selfie: 116.1 (projected 130.8, -14.7) — lost to Comet club? by 16.54 at −195
     last week Gus’s Balls: 109.7 (projected 125.4, -15.7) — beat Haircut −410, perfect lineup
     kdutta 1-3. Gus 2-2 (LLWW).
-->

Disclosure: the house's own seat is −230. The house is 1-3 and lost last week as a −195
favourite. Gus's Balls is 2-2 on two straight wins, the most recent a perfect lineup that took
down a −410. The book has been on the wrong side of this man twice in a row, and it's laying
eleven and a half again. You can admire the stubbornness or bet against it.

## matchup:12-4

<!-- Death By Foriegn War  vs Nonchalant Dreadhead
     −165 / +120 — 57.9% fair
     spread −6.0, total 226.5
     projected 116.8 vs 111
     last week Death By Foriegn War : 116.2 (projected 125.5, -9.3) — lost to Oanta (the loan) by 49.20
     last week Nonchalant Dreadhead: 120.0 (projected 129.7, -9.7) — lost to Kobe (the loan) by 45.10, first loss
     DBFW 0-4. Arnst 3-1. Arnst is the karaoke favourite (+330).
-->

**The Victims' Bowl.** Hunter lost to one half of the loan by 49. Arnst lost to the other half
by 45, his first loss of the season, and then reported the whole thing. They play each other
this week, and the whistleblower is a **+120 underdog to an 0-4 team**. He's also the
favourite to sing. Nobody said whistleblowing pays.

## matchup:6-10

<!-- Comet club? vs George Droyd
     −145 / +105 — 54.8% fair
     spread −4.0, total 239
     projected 122.1 vs 118.3
     last week Comet club?: 132.7 (projected 121.6, +11.1) — beat kdutta by 16.54
     last week George Droyd: 134.3 (projected 136.8, -2.5) — lost to Perc by 6.6
     BOTH QB slots priced off waivers at Jacoby Brissett 18.1. Each seat is filled independently.
-->

Neither of these teams has a quarterback it can start this week, so the house prices each
empty slot at the best free agent available. For both teams, that's the same man. **Jacoby Brissett is projected
to start for both sides of this game**, at 18.1 points each. That's a Nick's first, and the
house would guess an NFL one too. Whoever picks him up on Thursday wins a quarterback and makes
the other guy's line wrong.

## matchup:7-9

<!-- Perc Thuggins vs Got My Noahs in Paris
     −130 / −105 — 52.8% fair — closest game
     spread −2.5, total 277
     projected 140.6 vs 138.2
     last week Perc Thuggins: 140.9 (projected 146.1, -5.2) — beat Burnes by 6.6
     last week Got My Noahs in Paris: 165.4 official — high score, beat DBFW by 49.20
     Perc 4-0, 601.58 PF (Kobe 601.98). Oanta 1-3. Oanta starts Goff 21.6, Puka 20.7, Kincaid 10.2.
-->

**The Bystander Bowl.** Prozan got mad about the loan without being involved in it, and the
schedule has rewarded him with the defendant. He's 4-0, the closest thing this league has to an
innocent victim, except that nothing happened to him. Oanta's 1-3 now, and for the first time since Wednesday his lineup is entirely his own: Goff,
Puka and Kincaid, back where they started. Perc Thuggins is 4-0 and second in the league in
points, 0.40 behind Kobe. The book makes it basically a coin flip. If Oanta wins, he can call
it fair. If Prozan wins, the house expects to hear about it at length.

## THE COLLUSION COURT

<!-- Format: a Simmons-style mock tribunal. Exhibits are all real. Ruling = the reversal.
     Kunal 2026-10-07: punishment for Kobe and Oanta is TBD; offer humorous suggestions. -->

The house sat as a court this week, as both the commissioner who reversed the trade and the
sportsbook that graded it. Here's the record.

**Exhibit A: the timing.** Kobe beat Oanta by 54.82 in week three. Three days later they made
a seven-player trade. Nobody does business with the guy who just beat him by 55. Unless it
isn't really business.

**Exhibit B: the house's own grade.** "Each side gave up a little of its future so one of them
could win a single October game." Written in good faith, by the court, on the record. The
court would like to recuse itself and also cite itself as evidence.

**Exhibit C: the scoreboard.** Both of them won. Oanta scored 165.38, the high score of the
week. Kobe scored 165.12, the second-highest. **Twenty-six hundredths of a point** separated
the two halves of the loan, and the honest teams split everything below them.

**Exhibit D: the defence.** "We decided I get Bowers for part of the season." The defence
rests, and in doing so, so does the prosecution.

**Witnesses.** Arnst, for the prosecution, a hero. Prozan, who was angry, and who the court
lists here as a bystander.

**Ruling.** Reversed. Bowers goes back to Kobe, Goff and Puka go back to Oanta, and the court
notes for the record that Oanta, having won the high score in a week he had a borrowed tight end, then
picked a fight about karaoke. The loan didn't get Oanta caught. Bragging did.

**Sentencing** is pending. The league hasn't decided what Kobe and Oanta owe for this, so the
house submits the following, without prejudice:

- **Joint custody.** Kobe and Oanta sing at Silver Clouds as a duet, and the song is chosen by Arnst. If they want to share things for part of the season, they can share a microphone.
- **A loan agreement.** They draft, sign and post to the group chat a formal Bowers loan agreement, with an interest rate, a return date and a clause about tight-end depreciation. The league holds it as evidence.
- **The Bus Stop, on loan.** Whichever of the two finishes lower lends the other one his last place, for part of the season, at a completely even rate in total expected beers.
- **The simple math.** Oanta shows his work. All of it. A full spreadsheet of "total expected points per player", presented to the league, which is allowed to ask questions.

## punishment

<!-- KARAOKE — low scorer
     Nonchalant Dreadhead +330 (18.7%)
     Need TE HMU +330 (18.5%)
     Gus’s Balls +400 (16.1%)
     week 4: Haircut Haircut 🗣️ (Rohan) 87.98, priced +3800 (11th of 12) — longest price to hit in this book.
       Song: Oanta (high scorer, 165.38).
     BACKLOG as of 2026-10-07: nobody has sung. wk1 kdutta, wk2 MBurnes, wk3 Hunter, wk4 Rohan.
     Kunal: "we'll rip it all together for sure." -->

**Rohan sings.** At +3800 he was the second-longest shot on the board, and no man in this book's
history has paid out at a longer price. The song will be chosen by Oanta, who won the right to
pick it in the one week he had Brock Bowers. The house can't stop that. It can only point out that the karaoke
market in this league has now been decided by a loan.

Nobody has sung yet. **The queue is four deep**: the house, Burnes, Hunter, and now Rohan, and
the league's position is that it'll all be done in one night. At this point it isn't a
punishment, it's a lineup. Silver Clouds should be selling tickets, and the house would like to
open a market on the running order.

This week's favourite is Arnst at +330, with Chris right behind him. If the whistleblower ends
up singing a song the defendant picked, the house will consider that a precedent.

## punishment-paired

<!-- SONG SELECT — high scorer
     Beriousbeast +195 (27.3%)
     Perc Thuggins +360 (17.4%)
     Haircut Haircut 🗣️ +400 (15.9%)
     history: wk2 Perc, wk3 Perc, wk4 Oanta.
-->

Kobe is +195 to pick next week's song. He's been the favourite on this board all five weeks and
has won it once. Last week he finished second, by 0.26, to his business partner.

## joint

<!--
     Need TE HMU sings for Beriousbeast — +1750 (5.1%)
     Nonchalant Dreadhead sings for Beriousbeast — +1750 (5%)
     Gus’s Balls sings for Beriousbeast — +1950 (4.5%)
-->

**Arnst sings, Kobe picks: +1750.** The man who reported the loan sings a song chosen by one
of the two men who took it out. About one in twenty. The house would pay to watch it.

## lineups

<!--
     highest projected: Beriousbeast
     forfeited slots: none
     priced off waivers: Haircut Haircut 🗣️ K Will Reichard 8.8; Comet club? QB Jacoby Brissett 18.1; George Droyd QB Jacoby Brissett 18.1
-->

Three slots on this card are priced off waivers. Two of them are the same quarterback, in the
same game. The third is the kicker for the biggest favourite in book history. Chris has a
quarterback and a kicker, and is +420.

## THE INTEREST WATCH

<!-- $600 at 4.50% APY since 2026-09-01 → 36 days at 2026-10-07 → $2.61. Last week $2.17 (+$0.44). -->

Fourth place's prize has been in the bank for 36 days and has earned **$2.61**, up 44 cents.
It's the only asset in this league that's grown all season without being traded for, loaned
out, or reversed by the commissioner.
`,_c=`---
league: nicks
week: 6
headline: POISON PILL
byline: The House · Week 6
---

<!-- NICK'S SPORTSBOOK · week 6 · seed 1592638338
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: Nick's prose never cites another league.
     RECEIPTS (Sleeper, pulled 2026-10-15):
       Kobe (A5Kobe, Beriousbeast, r8) 5-0, 805 PF (league high). 203.56 in wk5 = season high; 174.6 wk1 = #2.
       Trades: wk2 Bowers ← Gus's Balls (r11) for Jalen Coker · wk4 THE LOAN w/ Oanta (reversed) ·
               Wed 2026-10-14 20:53 ET: CeeDee Lamb + Breece Hall ← Keeyan (r6) for D'Andre Swift,
               Jaylen Warren, Luther Burden.
       Draft (this league): Gibbs 1.02, CeeDee 1.10 (Keeyan), Nico 2.11, Bowers 3.01 (FonckYou),
               Nabers 3.02, Breece 3.10 (Keeyan) — six of the first 36 picks, three drafted by others.
       ROS/wk w5→w6: Kobe 117.3→120.4, Keeyan 104.3→101.3 (next best Rohan 113.5).
       Title Kobe 20.4% (+260) → 25.0% (+195). Playoffs 92.8 → 97.4. Keeyan playoffs 38.6 → 18.9, title 4.5 → 2.1.
       Arnst (r4) 4-1, title 11.2 (+560) → 12.0 (+520), playoffs 68.8 → 76.7.
       test/futures.test.mjs went red on Kobe (97.4 vs a 95 ceiling); fixed by week-gating (issue #2).
       wk6: Gibbs has no projection (week off), Breece Hall Doubtful → Kobe starts Corum 7.8 + B. Robinson 6.0.
       Call quote via Kunal: "I mean it's obv not collusion it's just the league collectively poison
               pilling itself so Arnst doesn't win" -->

## lede

<!--
     biggest edge: Got My Noahs in Paris −420 over Comet club? (75.2%, −21.0)
     closest game: Need TE HMU vs Beriousbeast at −125 (52%)
     highest total: 272.5
     last week: Beriousbeast 203.6 high, Death By Foriegn War  84.0 low
     the book went 3-3 on favourites, Brier 0.19
-->

**Last week the commissioner reversed a trade.** On Wednesday night Kobe made another one.

At 8:53 PM, Kobe sent D'Andre Swift, Jaylen Warren and Luther Burden to Keeyan for **CeeDee
Lamb and Breece Hall**. That's Kobe's third trade of the season. In week two he got Brock
Bowers from Gus's Balls for Jalen Coker. In week four he took out the loan. Jaylen Warren has
now been traded by Kobe twice, which is more trades than most of this league has made.

Here's where that leaves him. This league held a draft in August. **Six of the first 36 picks
are now on one roster**: Gibbs, CeeDee, Nico, Bowers, Nabers and Breece. Kobe drafted three of
them. Kobe is 5-0, has the most points in the league, and last week put up **203.56**, the
highest score this league has seen all year. The second-highest is also his.

The house has a test suite. It exists to catch a model that's gotten too sure of itself, and
one of its rules was that nobody can be more than 95% to make the playoffs. On Thursday
morning that test failed. It was Kobe, at **97.4%**. The house checked the math and the math
was fine. The house deleted the rule.

Jacob Call, asked whether any of this is collusion, offered the defence:

> "I mean it's obv not collusion it's just the league collectively poison pilling itself so
> Arnst doesn't win"

The house would like to report on how the poison pill is going. Arnst is 4-1. His title odds
went **up** this week, from 11.2% to 12.0%. He is the second favourite in the league. The pill
has been swallowed by everybody except Arnst.

## settled

<!--
     favourites 3-3 SU, 2-4 ATS, totals 3-3 over
     Brier 0.19 vs 0.25 for a coin flip; expected 3.9 chalk wins, got 3
     low scorer Death By Foriegn War  84.0 — priced +570, 4 of 12
     high scorer Beriousbeast 203.6
     joint: HIT at +2850
     biggest beat: Beriousbeast 203.6 vs 149.2 projected (+54.4)
     biggest miss: Death By Foriegn War  84.0 vs 116.8 projected (-32.8)
     Rohan −760 won 128.1–106.02 (by 22.08), did NOT cover −29.5.
     Call 167.94 lost to Kobe by 35.62 — 4th-highest score of the season, a loss.
     Arnst 93.8 beat Hunter 83.96 — total 177.76, ugliest game on the board.
     KARAOKE LEDGER (Kunal, 2026-10-15): nobody has sung yet. Owed: wk1 Kunal (Kobe picks: "Vamp Anthem"),
       wk2 Burnes (Prozan picks; Burnes is in Canada), wk3 Hunter (Prozan), wk4 Rohan (Oanta: "Or Nah (Remix)"),
       wk5 Hunter (Kobe). Oanta is trying to rally a session tonight. Props: scripts/props/karaoke.mjs.
-->

Three and three, Brier **0.19**, the best this book has ever posted in this league, by one
thousandth of a point.
Rohan, at −760, won by 22 and didn't cover the 29.5. He's now held the biggest line in book
history twice: −410, lost, and −760, won without covering. The house is 1-1 on Rohan and still
hasn't been paid.

**The joint market hit at +2850.** Hunter scored 83.96, the low score of the week, and Kobe
scored 203.56, the high, which means Hunter owes Silver Clouds a song, his second of the season, and Kobe picks it.
In one week Kobe beat Jacob Call by 35, traded for Keeyan's best receiver, and picked Hunter's
karaoke song. Three managers, three different services.

Jacob Call scored **167.94**. That's the fourth-highest score anybody in this league has put
up this season. He lost by 35. He lost to Kobe. Consider that context for the quote above.

Meanwhile, Arnst and Hunter combined for 177.76 points, the ugliest game on the board by almost
forty.
Arnst won with **93.8**. The poison pill is working on Arnst's offence, at least.

Hunter now owes two songs. He's not alone: the full karaoke ledger is at the bottom of the card,
and it's not pretty.

## bench

<!--
     Garbers mirror selfie left 32.4 — Isaiah Likely 32.4 (won by 58.9)
     Got My Noahs in Paris left 27.1 — Drake Maye 39.5, Rashod Bateman 11.2, Keon Coleman 7.7 (won by 4.2)
     Perc Thuggins left 24.8 — Garrett Wilson 23.4, Davante Adams 22.1, Keaton Mitchell 5.9 (lost by 4.2)
     wk4 Oanta bench had Drake Maye 27.2 too.
-->

Oanta benched Drake Maye again. Two weeks ago Maye scored 27.2 on his bench; last week, 39.5.
He won both weeks anyway, last week by 4.2, over Prozan, who left 24.8 on his own bench and
would have won with either of his top two.

## card

<!--
     the board spans 244.5 to 272.5 on totals
-->

The best roster in the league is an underdog. The man who just lost CeeDee to Kobe plays the
man who borrowed Bowers from Kobe. And the whistleblower plays the bystander.

## matchup:5-8

<!-- Need TE HMU vs Beriousbeast
     −125 / −105 — 52% fair
     spread −1.5, total 263.5
     projected 133.3 vs 131.2
     last week Need TE HMU: 106.0 (projected 110.8, -4.8)
     last week Beriousbeast: 203.6 (projected 149.2, +54.4)
-->

**Kobe is an underdog.** Five games, five wins, six of the first 36 picks, and the house has
him at −105 against Chris. That's not a statement about Chris. Gibbs has the week off and
Breece Hall, acquired Wednesday night, is doubtful, so this week the most expensive roster in
the league starts **Blake Corum and Brian Robinson** at running back, projected for 13.8
between them. Kobe traded for Breece Hall on Wednesday so that on Sunday his running backs could be Blake
Corum and Brian Robinson.

Chris projects 133.3 to Kobe's 131.2. If you want to bet against the superteam, this is the
week it's starting backups.

## matchup:9-6

<!-- Got My Noahs in Paris vs Comet club?
     −420 / +280 — 75.2% fair
     spread −21.0, total 245
     projected 134.2 vs 112.4
     last week Got My Noahs in Paris: 150.1 (projected 138.2, +11.9)
     last week Comet club?: 93.1 (projected 122.1, -29.0)
-->

The biggest line on the board, and every part of it runs through Kobe. Keeyan, who on
Wednesday traded CeeDee Lamb to Kobe, is a +280 underdog on Sunday to Oanta, who in week four
borrowed Brock Bowers from Kobe.

The house graded Keeyan's trade. Kobe's rest-of-season projection went up **3.1** points a
week, and Keeyan's went down **3.0**. Last time Kobe traded, the house said both sides came out
worse. This time the math is cleaner: what Kobe gained, Keeyan lost. Keeyan's playoff odds went
from **38.6% to 18.9%**, cut in half overnight. He also gets Jaylen Warren, who at this point is
less a running back than a receipt.

## matchup:7-4

<!-- Perc Thuggins vs Nonchalant Dreadhead
     −190 / +140 — 61.1% fair
     spread −9.5, total 272.5
     projected 141.8 vs 132
     last week Perc Thuggins: 145.9 (projected 140.6, +5.3)
     last week Nonchalant Dreadhead: 93.8 (projected 111, -17.2)
-->

The whistleblower against the bystander. Two weeks ago Arnst exposed the loan, and Prozan, who
wasn't in the trade and wasn't hurt by it, got the angriest. This week they finally play.
Prozan projects for **141.8**, the highest on the board, and is a −190 favourite. Arnst is
4-1, the second favourite to win the league, and a +140 dog.

If the league really is poison pilling itself so Arnst doesn't win, this is the dose.

## matchup:1-2

<!-- Garbers mirror selfie vs Haircut Haircut 🗣️
     −220 / +160 — 64.2% fair
     spread −11.5, total 254.5
     projected 133.6 vs 122.4
     last week Garbers mirror selfie: 164.2 (projected 124.7, +39.5)
     last week Haircut Haircut 🗣️: 128.1 (projected 140.7, -12.6)
-->

## matchup:3-12

<!-- Return of the Menace vs Death By Foriegn War
     −145 / +105 — 55.1% fair
     spread −4.0, total 244.5
     projected 124.7 vs 120.8
     last week Return of the Menace: 167.9 (projected 128.7, +39.2)
     last week Death By Foriegn War : 84.0 (projected 116.8, -32.8)
-->

Jacob Call scored 167.94 last week and lost. Hunter scored 83.96 and is 0-5. Call is a −145
favourite, which is the first good news he's had since he called it a poison pill.

## matchup:11-10

<!-- Gus’s Balls vs George Droyd
     −175 / +130 — 59.4% fair
     spread −7.5, total 255
     projected 131.9 vs 124.2
     last week Gus’s Balls: 105.3 (projected 113, -7.7)
     last week George Droyd: 123.4 (projected 118.3, +5.1)
-->

## punishment

<!-- KARAOKE — low scorer
     Comet club? +240 (23.4%)
     Death By Foriegn War  +470 (14.1%)
     Haircut Haircut 🗣️ +610 (11.2%)
-->

Keeyan is the +240 favourite to sing this week. Three days ago he had CeeDee Lamb.

## punishment-paired

<!-- SONG SELECT — high scorer
     Perc Thuggins +320 (19%)
     Got My Noahs in Paris +640 (10.9%)
     Need TE HMU +640 (10.8%)
-->

## joint

<!--
     Comet club? sings for Perc Thuggins — +2050 (4.3%)
     Death By Foriegn War  sings for Perc Thuggins — +3300 (2.7%)
     Comet club? sings for Got My Noahs in Paris — +3500 (2.6%)
-->

Last week's joint paid +2850. This week the house's favourite is Keeyan singing for Prozan at
+2050. The better story is **Keeyan singing for Oanta at +3500**: the guy who traded CeeDee to
Kobe, singing a song picked by the guy who borrowed Bowers from Kobe.

## THE KARAOKE BACKLOG

Five weeks of this league. Five low scorers. **Zero songs sung.**

- Week 1: **Kunal** owes, and Kobe picks. Kobe has picked "Vamp Anthem."
- Week 2: **Burnes** owes, and Prozan picks. Burnes has gone to his igloo in Canada.
- Week 3: **Hunter** owes, and Prozan picks.
- Week 4: **Rohan** owes, and Oanta picks. Oanta has picked "Or Nah (Remix)." The house has read the lyrics and understands the choice completely.
- Week 5: **Hunter** owes again, and Kobe picks.

The oldest debt on the ledger belongs to the man who runs this book. The house is aware. The house
has set its own line anyway, and the house is not a favourite to pay.

Prozan holds two picks and hasn't used either. Kobe holds two as well, which tracks, because Kobe
holds two of most things in this league.

Oanta is trying to get everyone out **tonight**. The house has been here before. This league is
0 for 5 on songs, it's a Thursday, and there's a game on. Here's the board.

<!-- printed by scripts/props/karaoke.mjs
     Karaoke happens tonight (any owed song sung): fair 32.3%
     Songs sung tonight, over 1.5: fair 20.9%
     Kunal sings "Vamp Anthem" tonight: fair 26.8%
     Rohan sings "Or Nah (Remix)" tonight: fair 14.7%
     Hunter clears both debts tonight: fair 9.2%
     Burnes sings at all this season: fair 40.0%
-->

- Karaoke happens tonight (any owed song sung): **Yes +190** · **No −270**
- Songs sung tonight, over 1.5: **Yes +350** · **No −570**
- Kunal sings "Vamp Anthem" tonight: **Yes +250** · **No −370**
- Rohan sings "Or Nah (Remix)" tonight: **Yes +530** · **No −1100**
- Hunter clears both debts tonight: **Yes +910** · **No −2400**
- Burnes sings at all this season: **Yes +135** · **No −180**

The house's favourite is **No**, on everything. Burnes singing at all this season is the closest
thing on the board to a coin flip, and it's only there because the season is long and Canada
isn't forever.

## lineups

<!--
     highest projected: Perc Thuggins
     forfeited slots: none
     priced off waivers: Haircut Haircut 🗣️ RB Keaton Mitchell 8; Haircut Haircut 🗣️ RB Dameon Pierce 7.8; Perc Thuggins K Nick Folk 8.7
-->
`,zc=`---
league: nicks
week: 7
headline: "#STAYMAD"
byline: The House · Week 7
---

<!-- NICK'S SPORTSBOOK · week 7 · seed 1592646289
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: Nick's prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-10-22):
       Kobe (A5Kobe, Beriousbeast, r8) 6-0, 944.70 PF (league high). Won wk6 139.16–124.9 over Chris as a −105 dog.
         wk6 RBs: Blake Corum 14, Dameon Pierce 15 (not B. Robinson as w6 prose guessed). CeeDee 16. Breece Hall 0, benched.
         Title 25.0 → 26.5% (+200). Playoffs 97.3 → 99.4.
       The wk5 trade (Wed 2026-10-14 20:53 ET) stood. No trades in wk6 or wk7.
       Keeyan (Keeyan99, Comet club?, r6): 139.94, wk6 HIGH. Priced +5200 (1.5%) to be high, 12th of 12.
         Beat Oanta 139.94–118.1 as a +280 dog (biggest line on the w6 board, −21).
         From Kobe's side of the trade: D'Andre Swift 23, Luther Burden 17.5, Jaylen Warren 9.8 = 50.3.
         Kobe's side: CeeDee 16 + Breece 0 = 16.
         3-3, 695.28 PF (10th of 12). Title 2.1 → 3.3 (+2350). Playoffs 19.0 → 32.9. ROS 100.9/wk, 2nd-lowest (Hunter 93.6).
       Kobe quote via Kunal (verbatim as given, after the trade). "Muadib Nal" = Kunal, who reversed the wk4 loan.
       Oanta (Loan Shark, r9) 2-4 after losing to Keeyan. Playoffs 47.9 → 38.1.
       Arnst (Need Loan HMU, r4) lost to Prozan 132.84–124.88. 4-2. Title 12.0 → 9.1, playoffs 76.8 → 67.6.
       Prozan (Need RB HMU, r7) 5-1. Title 11.0 → 12.7 (+530), playoffs 83.3 → 93.4.
       Renamed this week: r4 Nonchalant Dreadhead → Need Loan HMU · r5 Need TE HMU → Need Crumbs HMU ·
         r7 Perc Thuggins → Need RB HMU · r9 Got My Noahs in Paris → Loan Shark.
       Hunter (TheHumSack, r12) 0-6. Lost to Call 110.92–95.12. Playoffs 10.4 → 0.8, title 2.1 → 0.2 (+53000).
         ROS 107.7 → 93.6: Justin Herbert (id 6797) dropped on wk6 waivers, Kirk Cousins added; Kyler Murray also gone.
         Hunter's favourite team is the Chargers (Kunal). Chargers 0-6 after a 22-6 loss at KC in wk6, worst start since 2000,
         bye in wk7 (il foglio / Newsweek / La Nacion, Oct 2026). Herbert absent from the w7 players file because of the bye.
       Burnes (MBurnes, George Droyd, r10) 67.62, wk6 LOW. Priced +730, 4th of 12. Low-score favourite was Keeyan (+240).
       Chris (r5) left 33.2 on the bench (Germie Bernard 25.7). Best lineup 158.1 > Kobe's 139.16.
       Rohan 89.08, lost to Kunal 130.94 by 41.86. Tyler Shough 26.96 on his bench.
       KARAOKE LEDGER: wk1 Kunal (Kobe picks "Vamp Anthem") · wk2 Burnes (Prozan) · wk3 Hunter (Prozan) ·
         wk4 Rohan (Oanta, "Or Nah (Remix)") · wk5 Hunter (Kobe) · wk6 Burnes (Keeyan). Six owed, zero sung.
         The Oct 15 rally didn't happen (inferred from Kunal's note). All songs moved to Thu 2026-11-12.
         Props: scripts/props/karaoke-nov12.mjs. -->

## lede

<!--
     biggest edge: Beriousbeast −680 over Death By Foriegn War  (81.1%, −29.5)
     closest game: Haircut Haircut 🗣️ vs George Droyd at −120 (50.8%)
     highest total: 272.5
     last week: Comet club? 139.9 high, George Droyd 67.6 low
     the book went 4-2 on favourites, Brier 0.247
-->

After the trade, Kobe addressed the league:

> "Fellas, lock in. Start moving some pieces around. Who gives a shit. Make a loan and get it reversed but see what your team could've looked like until Muadib Nal sets things back to their rightful order. It's beast right oanta? And keeyan. Your team is now better than the rest of the league. See you in the chip #staymad #beberious"

The house's job is to check the receipts, even on a quote like this one. **They hold up.**

Keeyan scored **139.94** last week, the high score in the league. The house had priced him at
**+5200** to do it, twelfth of twelve. He beat Oanta as a +280 underdog, the biggest upset on
the board. And the three players Kobe sent him, D'Andre Swift, Luther Burden and Jaylen Warren,
scored **50.3** between them. What Kobe got back, CeeDee Lamb and Breece Hall, scored **16**.
Breece was on the bench.

So for one week, Keeyan's team really was better than the rest of the league. Kobe still won.
Kobe is **6-0**, has the most points in the league, and is the +200 title favourite. He traded
Keeyan the week's best team and kept the league's best record. That's the berious part.

As for "it's beast right oanta?": Oanta, Kobe's partner on the reversed loan, lost to Keeyan
and is **2-4**. His playoff odds fell from 47.9% to 38.1%. The house assumes that's a no.

The house also notes that four teams renamed themselves, and two of the new names have
the word **loan** in them. Muadib Nal reversed a trade. He can't reverse a group chat.

## settled

<!--
     favourites 4-2 SU, 3-3 ATS, totals 2-4 over
     Brier 0.247 vs 0.25 for a coin flip; expected 3.7 chalk wins, got 4
     low scorer George Droyd 67.6 — priced +730, 4 of 12
     high scorer Comet club? 139.9
     joint: did not hit
     biggest beat: Comet club? 139.9 vs 112.4 projected (+27.5)
     biggest miss: George Droyd 67.6 vs 124.2 projected (-56.6)
-->

Four and two, Brier **0.247**, which is a coin flip with a better haircut.

Last week the house made Kobe an underdog because his running backs were Blake Corum and a
backup. Corum scored 14 and the backup, Dameon Pierce, scored 15. That's **29** points from the
running backs the house was betting against. Kobe won by 14.26. The house is 0 for 1 on betting against the
superteam's bench.

Then there's the poison pill. Last week the house wrote that Prozan against Arnst was "the dose."
Prozan won, **132.84 to 124.88**. Arnst's title odds fell from 12.0% to 9.1%, and he's no longer
the second favourite. Prozan is: 5-1, at +530. The pill finally hit somebody.

**Burnes scored 67.62**, the low score of the week, and owes his **second** song. Keeyan, the
high scorer, picks it. The house had Keeyan as the favourite to be low, at +240. He scored the
high instead, which means the man the house expected to sing is now choosing the song.

Hunter lost to Jacob Call and is **0-6**. His favourite team is the Los Angeles Chargers, who
are also **0-6**, their worst start since 2000. Hunter's playoff odds are **0.8%**. The house
doesn't price the Chargers.

One more thing. Justin Herbert, the Chargers' quarterback, was on Hunter's roster until last week's
waivers. He isn't anymore. Kirk Cousins is. The man is 0-6 and dropped his own team's quarterback,
which is the most Chargers thing anyone in this league has done all season.

## bench

<!--
     Need Crumbs HMU left 33.2 — Germie Bernard 25.7, Romeo Doubs 11.2
     Gus’s Balls left 21.6 — Keon Coleman 15.9, Hunter Henry 14.8
     Death By Foriegn War  left 21.4 — Stefon Diggs 16.4, Chris Godwin 7.7
-->

Chris left **33.2** on the bench, 25.7 of it from Germie Bernard. His best lineup scored **158.1**.
Kobe scored 139.16. Chris had the lineup to give Kobe his first loss, and it was on his bench.

## card

<!--
     the board spans 250 to 272.5 on totals
-->

The 6-0 team plays the 0-6 team. Keeyan, whose team is better than the rest of the league,
gets to prove it against Arnst, at +110. Kunal plays Chris, and Burnes plays Rohan in the closest game on the board.

## matchup:8-12

<!-- Beriousbeast vs Death By Foriegn War
     −680 / +390 — 81.1% fair
     spread −29.5, total 272.5
     projected 152.1 vs 121.9
     last week Beriousbeast: 139.2 (projected 131.2, +8.0)
     last week Death By Foriegn War : 95.1 (projected 120.8, -25.7)
-->

**6-0 against 0-6.** Kobe projects for **152.1**, the highest on the board, with Gibbs back and
Breece Hall finally starting. Hunter
projects 121.9 with Kirk Cousins at quarterback. It's the biggest line of the week at −680.

The Chargers have a bye this week, so they can't lose. Hunter doesn't, and plays Kobe.

Kobe has a 99.4% chance to make the playoffs. Hunter has 0.8%. The house can't price a bigger
gap in this league, and this week they play each other.

## matchup:6-4

<!-- Need Loan HMU vs Comet club?
     −150 / +110 — 56.1% fair
     spread −4.5, total 261.5
     projected 133.9 vs 129
     last week Need Loan HMU: 124.9 (projected 132, -7.1)
     last week Comet club?: 139.94 (projected 112.4, +27.5)
-->

Kobe says Keeyan's team is better than the rest of the league. The house has him as a **+110
underdog** to Arnst. Keeyan's rest-of-season projection is **100.9** a week, the second-lowest in the league,
ahead of only Hunter.

This is the week to find out who's right. Kobe is 6-0 and the house is 4-2.

## matchup:2-10

<!-- Haircut Haircut 🗣️ vs George Droyd
     −120 / −115 — 50.8% fair
     spread −0.5, total 250
     projected 125.6 vs 125.3
     last week Haircut Haircut 🗣️: 89.1 (projected 122.4, -33.3)
     last week George Droyd: 67.6 (projected 124.2, -56.6)
-->

Two men who owe songs. Rohan owes one, and Burnes, as of Sunday, owes two. Between them they
scored 156.7 last week. The house has this at **−120 / −115**, the closest game on the board. The loser is a
good bet to owe another one.

## matchup:9-11

<!-- Loan Shark vs Gus’s Balls
     −310 / +220 — 70.5% fair
     spread −17.5, total 257
     projected 138 vs 120.5
     last week Loan Shark: 118.1 (projected 134.2, -16.1)
     last week Gus’s Balls: 94.6 (projected 131.9, -37.3)
-->

Oanta renamed his team **Loan Shark**. He's 2-4. The house has him at −310, and asks only that
he not borrow anyone's tight end this week.

## matchup:7-3

<!-- Need RB HMU vs Return of the Menace
     −480 / +300 — 77% fair
     spread −24.5, total 253
     projected 139.6 vs 114.9
     last week Need RB HMU: 132.8 (projected 141.8, -9.0)
     last week Return of the Menace: 110.9 (projected 124.7, -13.8)
-->

## matchup:5-1

<!-- Need Crumbs HMU vs Garbers mirror selfie
     −150 / +110 — 55.6% fair
     spread −5.0, total 260
     projected 132.8 vs 128
     last week Need Crumbs HMU: 124.9 (projected 133.3, -8.4)
     last week Garbers mirror selfie: 130.9 (projected 133.6, -2.7)
-->

## punishment

<!-- KARAOKE — low scorer
     Return of the Menace +270 (21.6%)
     Gus’s Balls +450 (14.6%)
     Death By Foriegn War  +510 (13.1%)
-->

Jacob Call is the +270 favourite to sing. He has never owed a song. For what it's worth, the
house's favourite in this market is **0 for 6**. Six weeks, six favourites, and not one of them has
finished last.

## punishment-paired

<!-- SONG SELECT — high scorer
     Beriousbeast +185 (28.1%)
     Need RB HMU +470 (14.1%)
     Loan Shark +560 (12.1%)
-->

Kobe is **+185** to pick a song this week. He already holds two picks. Last week the high scorer
was priced at +5200.

## THE KARAOKE BACKLOG

Six weeks, six low scorers, **zero songs sung.** Last week Oanta tried to rally a Thursday session.
The house set "karaoke happens tonight" at **No −270**. No cashed.

The league has now agreed to sing everything at once, on **Thursday, November 12**.

- Week 1: **Kunal** owes, and Kobe picks. Kobe has picked "Vamp Anthem."
- Week 2: **Burnes** owes, and Prozan picks.
- Week 3: **Hunter** owes, and Prozan picks.
- Week 4: **Rohan** owes, and Oanta picks. Oanta has picked "Or Nah (Remix)."
- Week 5: **Hunter** owes again, and Kobe picks.
- Week 6: **Burnes** owes again, and Keeyan picks.

Weeks seven, eight and nine settle before November 12, so the ledger will be **nine** songs by the
time anyone picks up a microphone. The house has priced only the six on the books today, so the
board can be graded against a list that already exists.

<!-- printed by scripts/props/karaoke-nov12.mjs
     Karaoke happens on Nov 12 (any owed song sung): fair 57.5%
     Of the six songs owed today, over 3.5 sung: fair 14.2%
     All six cleared on Nov 12: fair 1.2%
     Kunal sings "Vamp Anthem" on Nov 12: fair 45.9%
     Burnes clears both of his: fair 10.1%
     Hunter owes a third song by Nov 12: fair 34.4%
     Kobe owes a song by Nov 12: fair 2.7%
-->

- Karaoke happens on Nov 12 (any owed song sung): **Yes −160** · **No +120**
- Of the six songs owed today, over 3.5 sung: **Yes +550** · **No −1200**
- All six cleared on Nov 12: **Yes +7800** · **No −2400**
- Kunal sings "Vamp Anthem" on Nov 12: **Yes +105** · **No −140**
- Burnes clears both of his: **Yes +820** · **No −2400**
- Hunter owes a third song by Nov 12: **Yes +170** · **No −240**
- Kobe owes a song by Nov 12: **Yes +3400** · **No −2400**

For the first time all season the house has karaoke as the favourite, at −160. A date three weeks
out, agreed to by everyone, is worth more than one man rallying on a Thursday. The house still
won't go near all six. The oldest debt is the commissioner's, and the house has him at slightly
worse than a coin flip to pay it.

## joint

<!--
     Return of the Menace sings for Beriousbeast — +1450 (5.9%)
     Gus’s Balls sings for Beriousbeast — +2200 (4.1%)
     Death By Foriegn War  sings for Beriousbeast — +2350 (3.8%)
-->

## lineups

<!--
     highest projected: Beriousbeast
     forfeited slots: none
     priced off waivers: Garbers mirror selfie DEF Tennessee Titans 8.2; Haircut Haircut 🗣️ RB Roschon Johnson 9.7; Need RB HMU QB Bo Nix 19.2
-->
`,Wc=`---
league: nicks
week: 8
headline: WOMP WOMP
byline: The House · Week 8
---

<!-- NICK'S SPORTSBOOK · week 8 · seed 1592653152
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: Nick's prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-10-28):
       Book wk7: 1-5 SU, 1-5 ATS, 3-3 totals, Brier 0.37. Season: 0.251, 0.201, 0.191, 0.267, 0.19, 0.247, 0.37 → worst by 0.103.
       Biggest favourites this book has ever LOST (all sheets w1–w7): 81.1% Kobe wk7, 77.0% Prozan wk7, 75.2% Oanta wk6.
         (Biggest line ever posted: −760 wk5, Rohan over Chris, won.)
       Hunter (TheHumSack, Death By Foriegn War, r12) beat Kobe 129.9–107.72 as +390 (−29.5). First win, 1-6.
         QB Kirk Cousins 20.4: the QB he added on wk6 waivers after dropping Herbert (w7 receipts). Flowers 27.7, Judkins 23.4.
         Chargers were on bye wk7 (w7 receipts). Hunter is −145 over Chris this week: favoured for only the 2nd time (wk5 −165).
       Kobe (A5Kobe, Beriousbeast, r8) first loss, 6-1. 107.72 vs 152.1 projected (−44.4, week's biggest miss).
         Breece Hall started for the first time since the trade (w7 prose: "finally starting") and scored 0. Bench: Corum 17.1,
         Concepcion 23.2; left 37.7. Title 26.5 → 27.3 (+170), still the favourite.
       Call (jc199, Return of the Menace, r3) beat Prozan (prozan, Need RB HMU, r7) 131.18–128 as +300 (−24.5). By 3.18.
         Call quote via Kunal, after the win: "womp womp cowboys offense to the moon".
         Dak 23.28 (proj 16.1) + Javonte Williams 21.5 (proj 17.5) = 44.78 vs 33.6 projected (+11.2).
         RBs: Call's Braelon Allen 19.4 + J. Williams 21.5 = 40.9. Prozan's Aaron Jones 3.6 + Kamara 13.2 = 16.8.
         Call was the wk7 +270 favourite to sing (w7 prose). Now 4-3. Prozan 5-2, title 12.7 → 12.4.
       Burnes (MBurnes, George Droyd, r10): wk6 LOW 67.62 → wk7 HIGH 149.98 (+82.36). Priced +1850 (9th of 12) to be high.
         First manager in this book to go low → high in consecutive weeks (results w1–w7). Beat Rohan 149.98–124.7.
         Geno 24.48, Higgins 26.8, Jameson Williams 26.1. 3-4, playoffs 31.4 → 36.0.
         Owes songs wk2 (Prozan picks) and wk6 (Keeyan picks). Now picks wk7's.
         NYC Marathon Sun 2026-11-01 (Kunal). Real-world, not another league's data.
       Gus's Balls (FonckYou, r11) 78, wk7 LOW, priced +450 (2nd of 12). First song owed by this seat.
       KARAOKE LEDGER: wk1 Kunal (Kobe, "Vamp Anthem") · wk2 Burnes (Prozan) · wk3 Hunter (Prozan) ·
         wk4 Rohan (Oanta, "Or Nah (Remix)") · wk5 Hunter (Kobe) · wk6 Burnes (Keeyan) · wk7 Gus's Balls (Burnes).
         Seven owed, zero sung. All set for Thu 2026-11-12. No new song picks as of 2026-10-28 (Kunal); the rest stay unlisted, as in prior weeks.
       Bus stop (lastPlace): Hunter 32.4 (+145) · Chris 11.9 (+570) · Gus's Balls 11.5 (+600). -->

## lede

<!--
     biggest edge: Gus’s Balls −300 over Need Loan HMU (69.8%, −16.0)
     closest game: Comet club? vs Return of the Menace at −120 (50.5%)
     highest total: 280.5
     last week: George Droyd 150.0 high, Gus’s Balls 78 low
     the book went 1-5 on favourites, Brier 0.37
-->

After he beat Prozan, Jacob Call addressed the league:

> "womp womp cowboys offense to the moon"

**The house checked, and the Cowboys did go to the moon.** Dak Prescott scored 23.28 and
Javonte Williams scored 21.5, which is **11.2 points** more than the house projected for the
pair. Jacob won by **3.18**. Take the Cowboys back to earth and he loses.

The house had Prozan at **−480**. Prozan's team is called **Need RB HMU**, and last week it lost a
game on running backs: Jacob's scored 40.9, and Prozan's scored 16.8. The man asked for running
backs in his team name and the league didn't hit him up.

And Jacob was the house's favourite to sing karaoke last week, at +270. He beat the second-best
team in the league instead. Womp womp, indeed.

That was the second-biggest upset in the history of this book. **The biggest happened the same
week.**

## settled

<!--
     favourites 1-5 SU, 1-5 ATS, totals 3-3 over
     Brier 0.37 vs 0.25 for a coin flip; expected 3.9 chalk wins, got 1
     low scorer Gus’s Balls 78 — priced +450, 2 of 12
     high scorer George Droyd 150.0
     joint: did not hit
     biggest beat: George Droyd 150.0 vs 125.3 projected (+24.7)
     biggest miss: Beriousbeast 107.7 vs 152.1 projected (-44.4)
-->

**One and five. Brier 0.37.** The house's worst week of the season by a full tenth. In Brier terms
that's the gap between a coin flip and a coin flip that's been drinking.

**Hunter beat Kobe.** 0-6 against 6-0, the biggest line of the week at −680, and Hunter won
**129.9 to 107.72**. His quarterback was Kirk Cousins, who scored 20.4. Hunter picked Cousins up on
week-six waivers when he dropped Justin Herbert, and last week the house called that the most
Chargers thing anyone in this league had done all season. The Chargers were on bye. Hunter won without them.

Kobe, meanwhile, finally started Breece Hall. Breece scored **zero**. Blake Corum scored 17.1 on the bench. Kobe is 6-1, still the title favourite at +170,
and has learned what Hunter has known all season: the house's projections don't play the games.

Those are the two biggest favourites this book has ever lost, **81.1%** and **77.0%**, and they
lost on the same Sunday.

**Burnes scored the high**, 149.98, a week after scoring the low. Then he was 67.62; now he's
+82.36 better. Nobody in this league had ever gone from last to first in back-to-back weeks.
The house had him at +1850 to do it.

**Gus's Balls scored 78** and owes the league a song, the first from that seat. And the man who
picks it is **Burnes**, who owes two himself. Last week the house said whoever lost Burnes against
Rohan was a good bet to owe another song. Burnes won, Rohan scored 124.7, and nobody owed anything
from that game.

## bench

<!--
     Comet club? left 42.3 — Tony Pollard 36.5, Omar Cooper Jr. 22.5
     Beriousbeast left 37.7 — KC Concepcion Jr. 23.2, Blake Corum 17.1
     Haircut Haircut 🗣️ left 17.2 — Caleb Douglas 21
-->

Keeyan left **42.3** on the bench, Tony Pollard's 36.5 included, and still scored 146.72 and beat
Arnst. Kobe left 37.7, and that one cost him a game.

## card

<!--
     the board spans 242.5 to 280.5 on totals
-->

Hunter is a favourite. Kobe plays Prozan in a game between the two teams that just lost the
biggest upsets in book history. Jacob gets Keeyan in the closest game on the board. And Burnes,
who picks the next song, runs a marathon.

## matchup:8-7

<!-- Beriousbeast vs Need RB HMU
     −135 / −100 — 53.3% fair
     spread −3.0, total 280.5
     projected 142.2 vs 139.8
     last week Beriousbeast: 107.7 (projected 152.1, -44.4)
     last week Need RB HMU: 128 (projected 139.6, -11.6)
-->

**The two victims.** Kobe lost at −680 and Prozan lost at −480. Between them they cost the house
its worst week of the season. They're the top two title favourites, and the top two records,
6-1 and 5-2.

The house has Kobe at **−135**. It would like to remind both men that last week it had them at a
combined 158.1% to win two games, and they won none.

## matchup:12-5

<!-- Death By Foriegn War  vs Need Crumbs HMU
     −145 / +110 — 55.4% fair
     spread −4.5, total 245.5
     projected 125.9 vs 121.5
     last week Death By Foriegn War : 129.9 (projected 121.9, +8)
     last week Need Crumbs HMU: 102.0 (projected 132.8, -30.8)
-->

**Hunter is a favourite.** It's the second time all season, at −145 over Chris. He's still the +145
favourite to finish last, at 32.4%, but he's 1-6 now, and that's one more win than the Chargers
had when he dropped their quarterback.

## matchup:6-3

<!-- Comet club? vs Return of the Menace
     −120 / −115 — 50.5% fair
     spread −0.5, total 246
     projected 124.1 vs 123.5
     last week Comet club?: 146.7 (projected 129, +17.7)
     last week Return of the Menace: 131.2 (projected 114.9, +16.3)
-->

Jacob is a **−115 underdog** to Keeyan, the closest game on the board. The house projects Jacob's
two Cowboys for **41.5** this week. Last week it projected 33.6
and they scored 44.78. The moon is a long way up.

## matchup:1-10

<!-- Garbers mirror selfie vs George Droyd
     −250 / +180 — 66.5% fair
     spread −13.5, total 262
     projected 138.4 vs 124.9
     last week Garbers mirror selfie: 119.4 (projected 128, -8.6)
     last week George Droyd: 150.0 (projected 125.3, +24.7)
-->

Burnes runs the **New York City Marathon** on Sunday. Last week he went from last to first in
three hours of football. This week he gets 26.2 miles to do it again. He's a +180 underdog to Kunal, the
house's usual conflict of interest disclosed. Last week the house had Burnes at +1850 to score
the high. It is no longer confident about anything Burnes does on a Sunday.

## matchup:11-4

<!-- Gus’s Balls vs Need Loan HMU
     −300 / +210 — 69.8% fair
     spread −16.0, total 242.5
     projected 129.7 vs 113.7
     last week Gus’s Balls: 78 (projected 120.5, -42.5)
     last week Need Loan HMU: 120.1 (projected 133.9, -13.8)
-->

The low scorer is the biggest favourite on the board. Gus's Balls is −300 over Arnst, who is the
house's favourite to sing this week. The house would like to point out that last week this board's
biggest favourite lost to an 0-6 team.

## matchup:2-9

<!-- Haircut Haircut 🗣️ vs Loan Shark
     −150 / +110 — 55.8% fair
     spread −5.0, total 274
     projected 139.9 vs 135.2
     last week Haircut Haircut 🗣️: 124.7 (projected 125.6, -0.9)
     last week Loan Shark: 126.7 (projected 138, -11.3)
-->

I want both of them to lose.

## punishment

<!-- KARAOKE — low scorer
     Need Loan HMU +250 (22.9%)
     Need Crumbs HMU +490 (13.6%)
     Return of the Menace +620 (11.1%)
-->

Arnst is the **+250** favourite to sing. The house's favourite in this market is now **0 for 7**:
last week it was Jacob, who beat a 5-1 team instead. Arnst, the house apologises in advance for the
curse.

## punishment-paired

<!-- SONG SELECT — high scorer
     Beriousbeast +370 (17.1%)
     Haircut Haircut 🗣️ +420 (15.4%)
     Need RB HMU +440 (14.7%)
-->

Kobe is +370 to pick a song. Last week the high scorer was priced at +1850.

## THE KARAOKE BACKLOG

Seven weeks, seven low scorers, **zero songs sung.** Everything is set for **Thursday, November 12**.

- Week 1: **Kunal** owes, and Kobe picks. Kobe has picked "Vamp Anthem."
- Week 2: **Burnes** owes, and Prozan picks.
- Week 3: **Hunter** owes, and Prozan picks.
- Week 4: **Rohan** owes, and Oanta picks. Oanta has picked "Or Nah (Remix)."
- Week 5: **Hunter** owes again, and Kobe picks.
- Week 6: **Burnes** owes again, and Keeyan picks.
- Week 7: **Gus's Balls** owes, and **Burnes** picks.

Burnes is now on both sides of the ledger: he owes two songs and picks one.
`,Zh=Object.assign({"../content/dkenasty/w2.md":Tc,"../content/dkenasty/w3.md":xc,"../content/dkenasty/w4.md":Sc,"../content/dkenasty/w5.md":Nc,"../content/dkenasty/w6.md":Ec,"../content/dkenasty/w7.md":jc,"../content/dkenasty/w8.md":Cc,"../content/loog/w2.md":Bc,"../content/loog/w3.md":Lc,"../content/loog/w4.md":Pc,"../content/loog/w5.md":Ac,"../content/loog/w6.md":Rc,"../content/loog/w7.md":Hc,"../content/loog/w8.md":Dc,"../content/nicks/w2.md":Oc,"../content/nicks/w3.md":Mc,"../content/nicks/w4.md":Kc,"../content/nicks/w5.md":Ic,"../content/nicks/w6.md":_c,"../content/nicks/w7.md":zc,"../content/nicks/w8.md":Wc}),Fc=/^[a-z][a-z0-9-]*(:\d+-\d+)?$/,Uc=/\/content\/([^/]+)\/w(\d+)\.md$/,ou=new Map;for(const i in Zh){const f=i.match(Uc);f&&ou.set(`${f[1]}/w${f[2]}`,Jc(Zh[i]))}const Gc=(i,f)=>ou.get(`${i}/w${f}`)??null;function Jc(i){const{meta:f,body:u}=Yc(i.replace(/\r\n/g,`
`)),y=u.replace(/<!--[\s\S]*?-->/g,""),N=[];let E={id:"lede",title:null,lines:[]};for(const S of y.split(`
`)){const O=S.match(/^##\s+(.+?)\s*$/);if(!O){E.lines.push(S);continue}N.push(E);const $=O[1],z=$.toLowerCase();E=Fc.test(z)?{id:z,title:null,lines:[]}:{id:null,title:$,lines:[]}}N.push(E);const D=new Map,H=[];for(const S of N){const O=S.lines.join(`
`).trim();O&&(S.id?D.set(S.id,O):H.push({title:S.title,text:O}))}return{meta:f,slots:D,panels:H}}const $c=(i,f,u)=>(i==null?void 0:i.slots.get(`matchup:${f}-${u}`))??(i==null?void 0:i.slots.get(`matchup:${u}-${f}`))??null,Le=(i,f)=>(i==null?void 0:i.slots.get(f))??null;function Yc(i){const f=i.match(/^---\n([\s\S]*?)\n---\n?/);if(!f)return{meta:{},body:i};const u={};for(const y of f[1].split(`
`)){const N=y.match(/^([A-Za-z][\w-]*):\s*(.*)$/);N&&(u[N[1]]=N[2].replace(/^["']|["']$/g,"").trim())}return{meta:u,body:i.slice(f[0].length)}}function Vc({bookId:i,week:f,view:u}){const[y,N]=Pn.useState({status:"loading"}),[E,D]=Pn.useState(0);return Pn.useEffect(()=>{let H=!0;const S=O=>H&&N(O);return i?cc(i).then(({weeks:O,sheets:$})=>{S({status:"ok",weeks:O,sheets:$});const z=f!=null?O.indexOf(f):-1;D(z>=0?z:O.length-1)}).catch(()=>S({status:"error"})):hc().then(O=>S({status:"ok",index:O})).catch(()=>S({status:"error"})),()=>{H=!1}},[i,f]),l.jsxs("div",{className:"book-root",children:[l.jsx("div",{className:"bk-backbar",children:l.jsx("a",{className:"bk-back",href:"?book",children:"← The lobby"})}),l.jsxs("div",{className:"book-wrap",children:[y.status==="loading"&&l.jsx("p",{className:"state-msg",children:"Opening the book…"}),y.status==="error"&&l.jsxs("p",{className:"state-msg",children:["No sheet posted for this league. ",l.jsx("a",{className:"bk-link",href:"?book",children:"Back to the lobby"})]}),y.status==="ok"&&y.index&&l.jsx(Qc,{index:y.index}),y.status==="ok"&&y.sheets&&l.jsx(Xc,{sheet:y.sheets[E],prev:E>0?y.sheets[E-1]:null,weeks:y.weeks,cur:E,view:u,onNav:D})]})]})}function Qc({index:i}){return Pn.useEffect(()=>{document.title="The Fantasy Book"},[]),l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:"bk-head",children:[l.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),l.jsx("h1",{className:"bk-title",children:"THE FANTASY BOOK"}),l.jsx("p",{className:"bk-sub",children:"Three leagues. Eighteen weeks. One coin-flip sport."})]}),l.jsx("div",{className:"group-list",style:{marginTop:28},children:i.map(f=>l.jsxs("a",{className:"group-link",href:`?book=${f.id}`,children:[l.jsx("div",{className:"gl-name",children:f.name}),l.jsx("div",{className:"gl-meta",children:"Open the book →"})]},f.id))})]})}const qc=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Xh=(i,f)=>i.toUpperCase().includes(f)?i:`${i} — ${f}`;function Zn({title:i,blurb:f,children:u}){return l.jsxs("section",{className:"bk-panel",id:qc(i),children:[l.jsx("h2",{className:"bk-panel-title",children:i}),f&&l.jsx("p",{className:"bk-blurb",children:f}),u]})}function Zc({weeks:i,cur:f,onNav:u}){return l.jsxs("div",{className:"fb-weeknav",children:[l.jsx("button",{className:"bk-nav-btn",disabled:f===0,onClick:()=>u(f-1),children:"‹ PREV"}),l.jsx("select",{className:"bk-nav-select",value:f,onChange:y=>u(Number(y.target.value)),children:i.map((y,N)=>l.jsxs("option",{value:N,children:["WEEK ",y]},y))}),l.jsx("button",{className:"bk-nav-btn",disabled:f===i.length-1,onClick:()=>u(f+1),children:"NEXT ›"})]})}function Xc({sheet:i,prev:f,weeks:u,cur:y,view:N,onNav:E}){const D=Gc(i.id,i.week),H=N;return Pn.useEffect(()=>{const S=H==="season"?_r(i):`Week ${i.week}`;document.title=`${i.bookName} · ${S}`},[i.bookName,i.week,H]),Pn.useEffect(()=>{const S=window.location.hash&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)));S&&S.scrollIntoView()},[i.id,i.week]),l.jsxs(l.Fragment,{children:[l.jsx(ef,{sheet:i,weeks:u,cur:y,onNav:E,page:H}),H==="week"&&l.jsx(nf,{sheet:i,prev:f,note:D}),H==="season"&&l.jsx(tf,{sheet:i,prev:f,note:D}),l.jsx(rf,{sheet:i,page:H})]})}const _r=i=>i.week===1?"Season preview":"The futures board";function ef({sheet:i,weeks:f,cur:u,onNav:y,page:N}){return l.jsxs("header",{className:"bk-head",children:[l.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),l.jsx("h1",{className:"bk-title",children:i.bookName}),l.jsxs("p",{className:"bk-sub",children:[i.tagline," · Week ",i.week,", ",i.season,i.meta.seed?l.jsxs(l.Fragment,{children:[" · Seed ",l.jsx("code",{children:i.meta.seed})]}):null]}),i.stakes&&l.jsxs("div",{className:"bk-chips",children:[l.jsxs("span",{className:"bk-chip",children:["Buy-in ",l.jsx("b",{children:i.stakes.buyIn})]}),l.jsxs("span",{className:"bk-chip",children:["Pot ",l.jsx("b",{children:i.stakes.pot})]}),i.stakes.payouts.map(E=>l.jsxs("span",{className:"bk-chip",children:[lf(E.place)," ",l.jsx("b",{children:E.label})]},E.place))]}),l.jsxs("div",{className:"bk-banner",children:["LINES BUILT FROM ",i.meta.sources]}),f.length>1&&l.jsx(Zc,{weeks:f,cur:u,onNav:y}),l.jsxs("nav",{className:"fb-viewnav",children:[l.jsxs("a",{className:N==="week"?"active":"",href:`?book=${i.id}&w=${i.week}`,children:["THE CARD — WEEK ",i.week]}),l.jsx("a",{className:N==="season"?"active":"",href:`?book=${i.id}&w=${i.week}&view=season`,children:_r(i).toUpperCase()})]}),l.jsx("nav",{className:"fb-booknav",children:l.jsx("a",{href:"?book",children:"All books"})})]})}function nf({sheet:i,prev:f,note:u}){var N,E,D,H;const{punishment:y}=i;return l.jsxs(l.Fragment,{children:[Le(u,"lede")&&l.jsxs("section",{className:"bk-panel fb-lede",id:"the-lede",children:[l.jsx("h2",{className:"bk-panel-title",children:u.meta.headline??`WEEK ${i.week}`}),l.jsx(dn,{text:Le(u,"lede"),className:"fb-prose-cols"}),u.meta.byline&&l.jsx("p",{className:"fb-byline",children:u.meta.byline})]}),i.settled&&l.jsx(vc,{settled:i.settled,punishment:y,Panel:Zn,note:Le(u,"settled"),benchNote:Le(u,"bench"),punishmentNote:Le(u,"punishment-settled")}),l.jsxs(Zn,{title:`THE CARD — WEEK ${i.week}`,blurb:Le(u,"card")??"Moneyline, spread and total on every matchup. Spreads and totals are the half-point where the simulated distribution splits evenly, so both sides post at −110 — the line moves, not the price.",children:[l.jsxs("div",{className:"fb-match-head",children:[l.jsx("span",{children:"MATCHUP"}),l.jsx("span",{children:"MONEYLINE"}),l.jsx("span",{className:"spread",children:"SPREAD"}),l.jsx("span",{className:"total",children:"TOTAL"})]}),l.jsx("div",{className:"fb-card",children:i.matchups.map(S=>l.jsx(af,{m:S,prev:hf(f,S),note:$c(u,S.a.rosterId,S.b.rosterId)},`${S.a.rosterId}-${S.b.rosterId}`))})]}),l.jsxs("div",{className:y.paired?"fb-grid2":"",children:[l.jsxs(Zn,{title:Xh(y.weekly.name,"LOW SCORER"),blurb:y.weekly.copy,children:[Le(u,"punishment")&&l.jsx(dn,{text:Le(u,"punishment"),className:"fb-panel-prose"}),y.weekly.parlay&&l.jsxs("p",{className:"fb-note",children:[y.weekly.legs??y.weekly.parlay.legs," legs · $",y.weekly.parlay.stake," · lifetime record ",l.jsx("b",{children:y.weekly.parlay.lifetimeHits})," hits."]}),l.jsx(nu,{rows:y.weekly.rows,prevRows:(E=(N=f==null?void 0:f.punishment)==null?void 0:N.weekly)==null?void 0:E.rows})]}),y.paired&&l.jsxs(Zn,{title:Xh(y.paired.name,"HIGH SCORER"),blurb:y.paired.copy,children:[Le(u,"punishment-paired")&&l.jsx(dn,{text:Le(u,"punishment-paired"),className:"fb-panel-prose"}),l.jsx(nu,{rows:y.paired.rows,prevRows:(H=(D=f==null?void 0:f.punishment)==null?void 0:D.paired)==null?void 0:H.rows})]})]}),y.joints.length>0&&l.jsxs(Zn,{title:"THE JOINT — WHO SINGS WHAT",blurb:"Low scorer and high scorer in the same week, priced together rather than multiplied: a 145-point week makes you the high scorer and makes someone else the low one, so these are not independent.",children:[Le(u,"joint")&&l.jsx(dn,{text:Le(u,"joint"),className:"fb-panel-prose"}),y.joints.map(S=>l.jsxs("div",{className:"fb-slip",children:[l.jsxs("span",{className:"fb-slip-text",children:[l.jsx("b",{children:S.low.team})," sings a song picked by ",l.jsx("b",{children:S.high.team}),l.jsxs("span",{className:"fb-slip-note",children:[S.low.manager," · ",S.high.manager," · ",S.pct,"%"]})]}),l.jsx("span",{className:"bk-price",children:S.price})]},`${S.low.rosterId}-${S.high.rosterId}`))]}),l.jsxs(Zn,{title:"THE LINEUPS",blurb:"Optimal by projection against each league's roster slots — what a manager knows Sunday morning. Scores are drawn on the simulation, never on the projection, which would be lookahead bias.",children:[Le(u,"lineups")&&l.jsx(dn,{text:Le(u,"lineups"),className:"fb-panel-prose"}),l.jsx("div",{className:"fb-lineups",children:[...i.lineups].sort((S,O)=>O.projected-S.projected).map(S=>l.jsx(sf,{seat:S},S.rosterId))})]}),u==null?void 0:u.panels.map(S=>l.jsx(Zn,{title:S.title.toUpperCase(),children:l.jsx(dn,{text:S.text,className:"fb-prose-cols"})},S.title))]})}function tf({sheet:i,prev:f,note:u}){const y=Le(u,"season");return l.jsxs(l.Fragment,{children:[y?l.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[l.jsx("h2",{className:"bk-panel-title",children:u.meta.futuresHeadline??"THE FUTURES BOARD"}),l.jsx(dn,{text:y,className:"fb-prose-cols"})]}):i.preview&&l.jsx(of,{preview:i.preview,week:i.week}),l.jsx(mc,{sheet:i,prev:f,Panel:Zn})]})}function of({preview:i,week:f}){return l.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[l.jsx("h2",{className:"bk-panel-title",children:f===1?"SEASON PREVIEW":`SEASON PREVIEW — WRITTEN WEEK ${i.writtenWeek}`}),i.standfirst&&l.jsx("p",{className:"fb-standfirst",children:i.standfirst}),l.jsx("div",{className:"fb-prose-cols",children:i.paragraphs.map((u,y)=>l.jsx("p",{className:"fb-prose",children:u},y))}),f>i.writtenWeek&&l.jsxs("p",{className:"fb-note",children:["Written in week ",i.writtenWeek," and left alone since. The boards below are current; the prose is not."]})]})}function af({m:i,prev:f,note:u}){var y;return l.jsxs("div",{className:u?"fb-match noted":"fb-match",children:[l.jsxs("div",{className:"fb-seats",children:[l.jsx(eu,{seat:i.a,proj:i.projected.a,fav:!0}),l.jsx(eu,{seat:i.b,proj:i.projected.b})]}),l.jsxs("div",{className:"fb-cell",children:[l.jsx("span",{className:"fb-odds",children:i.moneyline.a}),l.jsx("span",{className:"fb-odds dim",children:i.moneyline.b}),l.jsx(Ir,{now:i.moneyline.a,was:(y=f==null?void 0:f.moneyline)==null?void 0:y.a})]}),l.jsxs("div",{className:"fb-cell spread",children:[l.jsxs("span",{className:"fb-odds",children:[i.spread.a,l.jsx("small",{children:i.spread.price})]}),l.jsxs("span",{className:"fb-odds dim",children:[i.spread.b,l.jsx("small",{children:i.spread.price})]})]}),l.jsxs("div",{className:"fb-cell total",children:[l.jsxs("span",{className:"fb-odds",children:["O ",i.total.line.toFixed(1),l.jsx("small",{children:i.total.over})]}),l.jsxs("span",{className:"fb-odds dim",children:["U ",i.total.line.toFixed(1),l.jsx("small",{children:i.total.under})]})]}),u&&l.jsx(dn,{text:u,className:"fb-match-note"})]})}const eu=({seat:i,proj:f,fav:u})=>l.jsxs("span",{className:u?"fb-seat fav":"fb-seat",children:[l.jsx("span",{className:"fb-seat-name",children:i.team}),l.jsx("span",{className:"fb-seat-mgr",children:i.manager}),l.jsx("span",{className:"fb-seat-proj",children:f.toFixed(1)})]});function nu({rows:i,prevRows:f}){const u=Math.max(...i.map(y=>y.pct));return l.jsx("div",{className:"fb-runners",children:i.map((y,N)=>{var E;return l.jsxs("div",{className:N===0?"fb-runner lead":"fb-runner",children:[l.jsxs("span",{className:"fb-runner-main",children:[l.jsx("span",{className:"fb-runner-team",children:y.team}),l.jsx("span",{className:"fb-bar",style:{width:`${y.pct/u*100}%`}}),l.jsx("span",{className:"fb-runner-mgr",children:y.manager})]}),l.jsxs("span",{className:"fb-runner-pct",children:[y.pct,"%"]}),l.jsxs("span",{className:"bk-line-right",children:[l.jsx(Ir,{now:y.price,was:(E=f==null?void 0:f.find(D=>D.rosterId===y.rosterId))==null?void 0:E.price}),l.jsx("span",{className:"bk-price",children:y.price})]})]},y.rosterId)})})}function sf({seat:i}){return l.jsxs("div",{className:"fb-lineup",children:[l.jsxs("div",{className:"fb-lineup-head",children:[l.jsx("span",{className:"fb-lineup-name",children:i.team}),l.jsx("span",{className:"fb-lineup-proj",children:i.projected.toFixed(1)})]}),i.players.map((f,u)=>l.jsxs("div",{className:f.name?"fb-slot":"fb-slot empty",children:[l.jsx("span",{className:"fb-slot-tag",children:f.slot}),l.jsxs("span",{className:"fb-slot-name",children:[f.name??"no eligible player",f.name&&l.jsxs("small",{children:[" ",f.position," ",f.team,f.waiver&&" · waivers"]})]}),l.jsx("span",{className:"fb-slot-mu",children:f.mu.toFixed(1)})]},`${f.slot}-${u}`)),i.players.some(f=>f.waiver)&&l.jsxs("p",{className:"fb-warn",children:["Nobody on the roster can play ",i.players.filter(f=>f.waiver).map(f=>f.slot).join(", "),". Priced as if he claims the best free agent there — he has not, and until he does this line is generous to him."]}),i.emptySlots.length>0&&l.jsxs("p",{className:"fb-warn",children:["Forfeits ",i.emptySlots.join(", ")," — nobody on the roster is eligible. Worth roughly eight points, and it is why this line looks the way it does."]})]})}function rf({sheet:i,page:f}){var u;return l.jsxs("footer",{className:"bk-fine-block",children:[l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"HOW THE SAUSAGE IS MADE."})," Every rostered player's projected points come from Sleeper's own weekly projection, scored through this league's exact scoring settings (",i.meta.scoringKeys," keys, reproducing Sleeper's published totals to a mean absolute error of ",i.meta.mae,"). Weekly scores are drawn from a Gamma distribution whose spread was fitted on 2025 projection residuals, position by position — a receiver projected for 18 is far more volatile than a quarterback projected for 18, and a pooled number would misprice the top and bottom of every lineup in opposite directions. The week was simulated ",i.meta.sims.toLocaleString()," times."]}),l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"WHAT THIS BOOK CANNOT DO."})," ",i.meta.disclosures.join(" ")]}),((u=i.meta.overrides)==null?void 0:u.length)>0&&l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"MANUAL OVERRIDES."})," ",i.meta.overrides.map(y=>`${y.player} ${y.was} → ${y.pts}${y.note?` (${y.note})`:""}`).join(" · ")]}),l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"HOUSE RULES."})," All prices include the house's margin. Ties split. Rosters as pulled",i.meta.pulledAt?` ${i.meta.pulledAt.slice(0,10)}`:"","; once a week's sheet is posted it is frozen and never repriced. For entertainment only."]}),l.jsxs("p",{className:"bk-foot",children:[i.bookName," · EST. SEPTEMBER 2026 · NO REFUNDS"]}),l.jsxs("p",{className:"bk-foot-nav",children:[f==="week"&&l.jsxs(l.Fragment,{children:[l.jsx("a",{className:"bk-link",href:`?book=${i.id}&w=${i.week}&view=season`,children:_r(i)})," ·"," "]}),f==="season"&&l.jsxs(l.Fragment,{children:[l.jsxs("a",{className:"bk-link",href:`?book=${i.id}&w=${i.week}`,children:["The card — week ",i.week]})," ·"," "]}),l.jsx("a",{className:"bk-link",href:"?book",children:"All books"})]})]})}const lf=i=>`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`;function hf(i,f){if(!(i!=null&&i.matchups))return null;const u=N=>new Set([N.a.rosterId,N.b.rosterId]),y=i.matchups.find(N=>{const E=u(N);return E.has(f.a.rosterId)&&E.has(f.b.rosterId)});return y?y.a.rosterId===f.a.rosterId?y:{moneyline:{a:y.moneyline.b,b:y.moneyline.a}}:null}const uf=`
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;700&display=swap');

* { box-sizing: border-box; }
body { margin: 0; background: #0B0B0E; }

/* --- ported from ../worldcup src/styles.js ------------------------------ */
.group-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }
.group-link {
  display: block; text-decoration: none; color: #F2EFE6;
  background: rgba(255,255,255,0.045); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px; padding: 20px; transition: border-color 0.15s, background 0.15s;
}
.group-link:hover { border-color: #C9A24B; background: rgba(201,162,75,0.08); }
.group-link .gl-name { font-family: 'Anton', sans-serif; font-size: 24px; color: #E4C46A; letter-spacing: 0.04em; }
.group-link .gl-meta { font-size: 12px; color: rgba(242,239,230,0.6); margin-top: 4px; }
.state-msg { text-align: center; color: rgba(242,239,230,0.6); padding: 40px 0; font-size: 15px; }

/* Sportsbook sheet — its own near-black casino look, distinct from the green felt */
.book-root {
  min-height: 100vh;
  background:
    radial-gradient(110% 70% at 50% 0%, rgba(201,162,75,0.08) 0%, rgba(201,162,75,0) 55%),
    #0B0B0E;
  color: #EDE8DA;
  font-family: 'Archivo', system-ui, sans-serif;
  padding: 36px 14px 64px;
}
.book-wrap { max-width: 980px; margin: 0 auto; }
.bk-backbar {
  position: sticky; top: 0; z-index: 10;
  margin: -36px -14px 26px; padding: 10px 14px;
  padding-top: calc(10px + env(safe-area-inset-top));
  background: rgba(11,11,14,0.88);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(201,162,75,0.18);
}
.bk-back {
  color: #C9A24B; text-decoration: none; font-weight: 700; font-size: 12px;
  letter-spacing: 0.1em; text-transform: uppercase;
}
.bk-back:hover { color: #E4C46A; }
.bk-head { text-align: center; }
.bk-eyebrow { letter-spacing: 0.55em; font-size: 10px; font-weight: 700; color: #C9A24B; margin: 0 0 10px; }
.bk-title {
  font-family: 'Anton', Impact, sans-serif;
  font-size: clamp(38px, 7vw, 64px);
  letter-spacing: 0.05em; margin: 0; color: #EDE8DA;
}
.bk-sub { color: rgba(237,232,218,0.55); font-size: 13px; margin: 8px 0 0; }
.bk-sub code { color: #C9A24B; font-size: 12px; }
.bk-chips { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: 14px; }
.bk-chip {
  border: 1px solid rgba(201,162,75,0.35); border-radius: 999px;
  padding: 6px 14px; font-size: 12px; color: rgba(237,232,218,0.75);
}
.bk-chip b { color: #E4C46A; }
.bk-banner {
  width: fit-content; margin: 18px auto 0;
  background: linear-gradient(180deg, #E4C46A, #C9A24B); color: #14110A;
  letter-spacing: 0.22em; font-size: 11px; font-weight: 700;
  padding: 8px 18px; border-radius: 6px;
}
.bk-panel {
  background: #131318; border: 1px solid #26262E; border-radius: 12px;
  padding: 20px 22px; margin-top: 22px;
}
.bk-panel-title {
  font-size: 14px; font-weight: 700; letter-spacing: 0.32em;
  color: #C9A24B; margin: 0 0 6px;
  border-bottom: 1px solid rgba(201,162,75,0.25); padding-bottom: 10px;
}
.bk-blurb { color: rgba(237,232,218,0.55); font-size: 12.5px; line-height: 1.55; margin: 10px 0 6px; }
.bk-rows { display: flex; flex-direction: column; }
.bk-row {
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
  padding: 10px 2px; border-bottom: 1px solid rgba(255,255,255,0.06);
}
.bk-row:last-child { border-bottom: none; }
.bk-row-main { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.bk-player { font-family: 'Anton', sans-serif; font-size: 17px; letter-spacing: 0.04em; }
.bk-teamline { color: rgba(237,232,218,0.6); font-size: 12px; line-height: 1.5; }
.bk-flags { font-size: 16px; letter-spacing: 2px; }
.bk-price {
  font-family: 'Anton', sans-serif; font-size: 17px; color: #E4C46A;
  background: rgba(201,162,75,0.08); border: 1px solid rgba(201,162,75,0.28);
  border-radius: 8px; padding: 6px 13px; min-width: 78px; text-align: center;
  flex-shrink: 0; white-space: nowrap;
}
.bk-price.sm { font-size: 13px; }
.bk-tag {
  font-family: 'Archivo', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.18em;
  border-radius: 4px; padding: 3px 7px; margin-left: 9px; vertical-align: 2px;
}
.bk-tag.fav { background: rgba(201,162,75,0.18); color: #E4C46A; }
.bk-tag.dog { background: rgba(232,128,107,0.15); color: #E8806B; }
.bk-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.bk-grid2 .bk-panel { margin-top: 22px; }
.bk-h2h-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 12px; }
.bk-h2h {
  border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 16px;
  background: rgba(0,0,0,0.25);
}
.bk-h2h-side { display: flex; justify-content: space-between; align-items: center; font-family: 'Anton', sans-serif; font-size: 16px; padding: 4px 0; }
.bk-h2h-vs { text-align: center; color: rgba(237,232,218,0.35); font-size: 10px; letter-spacing: 0.3em; padding: 2px 0; }
.bk-vs-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: 18px; align-items: start; margin-top: 12px; }
.bk-vs {
  align-self: center; font-family: 'Anton', sans-serif; font-size: 22px; color: rgba(201,162,75,0.7);
}
.bk-side { background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 14px 16px; }
.bk-side-name { font-family: 'Anton', sans-serif; font-size: 19px; letter-spacing: 0.08em; color: #E4C46A; margin: 0 0 8px; }
.bk-side-player { display: flex; justify-content: space-between; font-size: 13px; padding: 3px 0; color: rgba(237,232,218,0.85); }
.bk-side-lines { margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 8px; }
.bk-faction-status {
  font-family: 'Anton', sans-serif; letter-spacing: 0.08em; font-size: 15px;
  text-align: center; padding: 8px 0; margin-bottom: 4px; border-radius: 8px;
}
.bk-faction-status.clinched { color: #7FE3A8; border: 1px solid rgba(127,227,168,0.35); background: rgba(127,227,168,0.08); }
.bk-faction-status.eliminated { color: rgba(237,232,218,0.4); border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.03); }
.bk-faction-decided {
  margin: 4px 0 0; padding: 8px 12px; border-radius: 8px; font-size: 12.5px; line-height: 1.5;
  color: rgba(237,232,218,0.75); border: 1px solid rgba(201,162,75,0.3); background: rgba(201,162,75,0.05);
}
.bk-line { display: flex; justify-content: space-between; align-items: center; padding: 5px 0; font-size: 13px; }
.bk-line.dim { color: rgba(237,232,218,0.5); }
.bk-mainline { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 10px; }
.bk-mainline .bk-line {
  flex: 1; min-width: 200px; border: 1px solid rgba(201,162,75,0.3); border-radius: 10px;
  padding: 10px 14px; background: rgba(201,162,75,0.05); font-size: 15px;
}
.bk-subhead { letter-spacing: 0.28em; font-size: 11px; color: rgba(237,232,218,0.5); margin: 22px 0 8px; }
.bk-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.bk-table th {
  text-align: left; font-size: 10px; letter-spacing: 0.18em; color: rgba(201,162,75,0.8);
  padding: 6px 8px; border-bottom: 1px solid rgba(201,162,75,0.25);
}
.bk-table td { padding: 7px 8px; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(237,232,218,0.85); }
.bk-table .bk-td-team { font-weight: 500; color: #EDE8DA; }
.bk-table .bk-col-r { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
.bk-table.bk-standings td.bk-col-r { font-family: 'Anton', sans-serif; letter-spacing: 0.03em; font-size: 15px; color: #E4C46A; }
.bk-table.bk-standings td.bk-col-r.out { color: rgba(237,232,218,0.35); }
.bk-table.ladder { max-width: 420px; }
.bk-table.ladder tr.main td { color: #E4C46A; font-weight: 700; }
.bk-hist { display: flex; align-items: flex-end; gap: 3px; height: 130px; margin-top: 26px; }
.bk-bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; min-width: 0; }
.bk-bar { width: 100%; background: linear-gradient(180deg, #E4C46A, #8A6E2F); border-radius: 3px 3px 0 0; min-height: 1px; }
.bk-bar-pct { font-size: 9px; color: rgba(237,232,218,0.45); margin-bottom: 3px; }
.bk-bar-label { font-size: 10px; color: rgba(237,232,218,0.55); margin-top: 5px; }
.bk-hist-caption { text-align: center; color: rgba(237,232,218,0.45); font-size: 11px; margin-top: 10px; }
.bk-roster { margin-top: 18px; }
.bk-roster-head { font-family: 'Anton', sans-serif; font-size: 16px; letter-spacing: 0.04em; color: #E4C46A; margin: 0 0 8px; }
.bk-caleb-label { font-size: 13.5px; color: rgba(237,232,218,0.85); line-height: 1.4; }

/* The house organ (?post=) — editorial prose on the book chrome */
.post-wrap { max-width: 760px; }
.post-deck { color: rgba(237,232,218,0.7); font-size: 14.5px; line-height: 1.65; margin: 18px auto 0; max-width: 620px; }
.post-p { color: rgba(237,232,218,0.8); font-size: 14px; line-height: 1.7; margin: 12px 0 0; }
.post-note { color: rgba(237,232,218,0.55); font-size: 12px; }
.post-vs { color: rgba(237,232,218,0.45); font-size: 12px; letter-spacing: 0.1em; }
.post-fixture-note { color: rgba(201,162,75,0.85); }

.bk-fine-block { margin-top: 26px; }
.bk-fine { color: rgba(237,232,218,0.45); font-size: 11px; line-height: 1.65; margin: 10px 0; }
.bk-fine b { color: rgba(237,232,218,0.65); }
.bk-foot { text-align: center; letter-spacing: 0.3em; font-size: 10px; color: rgba(201,162,75,0.7); margin-top: 26px; }
.bk-foot-nav { text-align: center; font-size: 12px; margin-top: 10px; }
.bk-link { color: #C9A24B; }

/* Snapshot navigation (prev / date dropdown / next) */
.bk-nav { display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 16px; }
.bk-nav-btn {
  background: transparent; color: #C9A24B; border: 1px solid rgba(201,162,75,0.5);
  border-radius: 6px; padding: 8px 14px; cursor: pointer;
  font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.12em;
}
.bk-nav-btn:hover:not(:disabled) { background: rgba(201,162,75,0.12); }
.bk-nav-btn:disabled { opacity: 0.35; cursor: default; }
.bk-nav-select {
  background: rgba(0,0,0,0.4); color: #E4C46A; border: 1px solid rgba(201,162,75,0.5);
  border-radius: 6px; padding: 8px 12px; cursor: pointer;
  font-family: 'Archivo', sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 0.1em;
}
.bk-nav-btn:focus-visible, .bk-nav-select:focus-visible { outline: 2px solid #E4C46A; outline-offset: 2px; }

/* Line movement vs the previous sheet */
.bk-move { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; margin-top: 2px; white-space: nowrap; }
.bk-move.up { color: #7FE3A8; }
.bk-move.down { color: #E8806B; }
.bk-line-right { display: inline-flex; align-items: center; gap: 9px; }
.bk-tick { font-size: 9px; }
.bk-tick.up { color: #7FE3A8; }
.bk-tick.down { color: #E8806B; }

/* Settled markets (clinched / eliminated) come off the board */
.bk-price.bk-settled { font-family: 'Archivo', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; }
.bk-settled.locked { color: #7FE3A8; border-color: rgba(127,227,168,0.35); background: rgba(127,227,168,0.08); }
.bk-settled.dead { color: rgba(237,232,218,0.4); border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.03); }

/* --- THE CARD — the weekly matchup board, new to this book -------------- */
.fb-card { display: flex; flex-direction: column; gap: 10px; margin-top: 14px; }
.fb-match {
  display: grid; grid-template-columns: 1fr 90px 90px 90px; align-items: center;
  gap: 10px; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px; padding: 12px 16px;
}
.fb-match-head {
  display: grid; grid-template-columns: 1fr 90px 90px 90px; gap: 10px;
  padding: 0 16px 6px; font-size: 10px; letter-spacing: 0.22em;
  color: rgba(237,232,218,0.4); font-weight: 700;
}
.fb-match-head span:not(:first-child), .fb-match > .fb-cell { text-align: center; }
.fb-seats { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.fb-seat { display: flex; align-items: baseline; gap: 8px; min-width: 0; }
.fb-seat-name {
  font-family: 'Anton', sans-serif; font-size: 16px; letter-spacing: 0.03em;
  color: #EDE8DA; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.fb-seat.fav .fb-seat-name { color: #E4C46A; }
.fb-seat-mgr { font-size: 11px; color: rgba(237,232,218,0.45); white-space: nowrap; }
.fb-seat-proj { font-size: 11px; color: rgba(237,232,218,0.35); margin-left: auto; padding-left: 10px; font-variant-numeric: tabular-nums; }
.fb-cell { display: flex; flex-direction: column; gap: 6px; align-items: center; }
.fb-odds {
  font-family: 'Anton', sans-serif; font-size: 15px; letter-spacing: 0.03em;
  color: #E4C46A; border: 1px solid rgba(201,162,75,0.28); border-radius: 6px;
  padding: 4px 0; width: 100%; text-align: center; font-variant-numeric: tabular-nums;
}
.fb-odds.dim { color: rgba(237,232,218,0.7); border-color: rgba(255,255,255,0.1); }
.fb-odds small { display: block; font-family: 'Archivo', sans-serif; font-size: 9px; letter-spacing: 0.1em; color: rgba(237,232,218,0.4); font-weight: 700; }

/* --- Runner boards (low scorer, high scorer) ---------------------------- */
.fb-runners { display: flex; flex-direction: column; margin-top: 10px; }
.fb-runner {
  display: grid; grid-template-columns: 1fr auto auto; gap: 12px; align-items: center;
  padding: 8px 2px; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.fb-runner:last-child { border-bottom: none; }
.fb-runner.lead .fb-runner-team { color: #E4C46A; }
.fb-runner-main { display: flex; flex-direction: column; min-width: 0; }
.fb-runner-team { font-family: 'Anton', sans-serif; font-size: 15px; letter-spacing: 0.03em;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fb-runner-mgr { font-size: 11px; color: rgba(237,232,218,0.45); }
.fb-runner-pct { font-size: 11px; color: rgba(237,232,218,0.45); font-variant-numeric: tabular-nums; min-width: 46px; text-align: right; }
.fb-bar { display: block; height: 3px; max-width: 100%; border-radius: 2px; background: linear-gradient(90deg, #E4C46A, #8A6E2F); margin: 4px 0 3px; }

/* --- Joint slips ---------------------------------------------------------- */
.fb-slip {
  display: flex; justify-content: space-between; align-items: center; gap: 14px;
  padding: 10px 2px; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.fb-slip:last-child { border-bottom: none; }
.fb-slip-text { font-size: 13.5px; color: rgba(237,232,218,0.85); line-height: 1.45; }
.fb-slip-text b { color: #EDE8DA; font-weight: 700; }
.fb-slip-note { display: block; font-size: 11px; color: rgba(237,232,218,0.4); margin-top: 2px; }
.fb-headline {
  background: rgba(201,162,75,0.08); border-left: 3px solid #C9A24B;
  padding: 16px 20px; margin-top: 14px; border-radius: 0 8px 8px 0;
  display: flex; justify-content: space-between; align-items: center; gap: 18px; flex-wrap: wrap;
}
.fb-headline-label { display: block; font-family: 'Anton', sans-serif; font-size: 17px; letter-spacing: 0.04em; color: #E4C46A; }
.fb-headline-copy { display: block; font-size: 12.5px; color: rgba(237,232,218,0.6); margin-top: 4px; line-height: 1.5; }
.fb-headline-price { font-family: 'Anton', sans-serif; font-size: 30px; color: #E4C46A; letter-spacing: 0.03em; }

/* --- Lineups ------------------------------------------------------------ */
.fb-lineups { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px; }
.fb-lineup { background: rgba(0,0,0,0.22); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 12px 14px; }
.fb-lineup-head { display: flex; justify-content: space-between; align-items: baseline; gap: 10px; margin-bottom: 8px; }
.fb-lineup-name { font-family: 'Anton', sans-serif; font-size: 15px; color: #E4C46A; letter-spacing: 0.03em;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fb-lineup-proj { font-family: 'Anton', sans-serif; font-size: 15px; color: #EDE8DA; font-variant-numeric: tabular-nums; }
.fb-slot { display: grid; grid-template-columns: 44px 1fr auto; gap: 8px; padding: 3px 0; font-size: 12.5px; align-items: baseline; }
.fb-slot-tag { font-size: 9px; font-weight: 700; letter-spacing: 0.12em; color: rgba(237,232,218,0.4); }
.fb-slot-name { color: rgba(237,232,218,0.85); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fb-slot-name small { color: rgba(237,232,218,0.35); }
.fb-slot-mu { color: #C9A24B; font-variant-numeric: tabular-nums; }
.fb-slot.empty .fb-slot-name { color: #E8806B; font-style: italic; }
.fb-slot.empty .fb-slot-mu { color: rgba(232,128,107,0.7); }
.fb-warn { color: #E8806B; font-size: 11px; margin-top: 6px; }

/* --- Win totals --------------------------------------------------------- */
.fb-wintotals { display: grid; grid-template-columns: 1fr 1fr; gap: 2px 24px; margin-top: 10px; }
.fb-wintotal {
  display: grid; grid-template-columns: 1fr 44px 118px 66px; align-items: baseline; gap: 8px;
  padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.fb-wintotal-name { font-family: 'Anton', sans-serif; font-size: 14px; letter-spacing: 0.03em;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.fb-wintotal-line { font-family: 'Anton', sans-serif; font-size: 16px; color: #E4C46A; text-align: right; font-variant-numeric: tabular-nums; }
.fb-wintotal-prices { font-size: 12px; color: rgba(237,232,218,0.7); text-align: right; font-variant-numeric: tabular-nums; }
.fb-wintotal-exp { font-size: 11px; color: rgba(237,232,218,0.35); text-align: right; font-variant-numeric: tabular-nums; }

/* --- Chrome ------------------------------------------------------------- */
.fb-weeknav { display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 16px; }
/* PROJECTED STANDINGS. One grid, twelve rows, replacing six ladders. The
   distribution strip is the whole reason this exists: a cumulative board can
   only say "35% to finish top three", the strip shows whether a season is a
   slope or a plateau. */
.fb-standings { margin-top: 4px; }
.fb-st-head, .fb-st-row {
  display: grid; align-items: center; gap: 10px;
  grid-template-columns: 22px minmax(120px, 1.5fr) 46px 62px 52px minmax(150px, 2.2fr) 58px 46px;
}
.fb-st-head {
  font-size: 9.5px; letter-spacing: 0.13em; font-weight: 700;
  color: rgba(242,239,230,0.42); padding: 0 6px 8px;
  border-bottom: 1px solid rgba(255,255,255,0.10);
}
.fb-st-row {
  padding: 9px 6px; border-bottom: 1px solid rgba(255,255,255,0.055); font-size: 12.5px;
}
.fb-st-row:last-child { border-bottom: 0; }
.fb-st-row:hover { background: rgba(201,162,75,0.05); }
.fb-st-rank { font-size: 11px; color: rgba(242,239,230,0.4); font-variant-numeric: tabular-nums; }
.fb-st-seat { min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.fb-st-team {
  color: #EDE8DA; font-weight: 600; font-size: 12.5px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.fb-st-mgr { color: rgba(242,239,230,0.42); font-size: 10.5px; }
.fb-st-num {
  text-align: right; font-variant-numeric: tabular-nums;
  color: rgba(242,239,230,0.66); font-size: 12px;
}
.fb-st-num.strong { color: #E4C46A; font-weight: 600; }
.fb-st-num.dim { color: rgba(242,239,230,0.4); }
.fb-st-head .fb-st-num, .fb-st-head .fb-st-dist, .fb-st-head .fb-st-seat, .fb-st-head .fb-st-rank { text-align: inherit; }
.fb-st-head .fb-st-num { text-align: right; }

/* Twelve segments, flex-grown by probability. The "pays" segments are the
   finishes with money attached — one segment in DKEnasty, four in Nick's, which makes the two
   leagues' payout structures visible at a glance rather than a footnote. */
.fb-st-dist { display: flex; gap: 1.5px; height: 15px; align-items: stretch; min-width: 0; }
.fb-seg { background: rgba(242,239,230,0.16); border-radius: 1px; min-width: 1px; transition: background 0.12s; }
.fb-seg.pays { background: #C9A24B; }
.fb-st-row:hover .fb-seg { background: rgba(242,239,230,0.24); }
.fb-st-row:hover .fb-seg.pays { background: #E4C46A; }
.fb-seg:hover { background: #F2EFE6 !important; }

@media (max-width: 760px) {
  .fb-st-head, .fb-st-row { grid-template-columns: 20px minmax(90px, 1.4fr) 40px minmax(90px, 1.8fr) 50px; gap: 8px; }
  .fb-st-head span:nth-child(4), .fb-st-row span:nth-child(4),
  .fb-st-head span:nth-child(5), .fb-st-row span:nth-child(5),
  .fb-st-head span:nth-child(8), .fb-st-row span:nth-child(8) { display: none; }
}

/* The two league pages: the week card and the season board. Tabs, not a
   dropdown — there are exactly two and both should be one click away. */
.fb-viewnav {
  display: flex; justify-content: center; margin: 18px auto 4px; flex-wrap: wrap;
  border: 1px solid rgba(255,255,255,0.14); border-radius: 8px; overflow: hidden; width: fit-content; max-width: 100%;
}
.fb-viewnav a {
  padding: 9px 20px; font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
  text-decoration: none; color: rgba(242,239,230,0.62); background: transparent; white-space: nowrap;
  transition: background 0.15s, color 0.15s;
}
.fb-viewnav a + a { border-left: 1px solid rgba(255,255,255,0.14); }
.fb-viewnav a:hover { color: #EDE8DA; background: rgba(201,162,75,0.10); }
.fb-viewnav a.active { color: #0B0B0E; background: #E4C46A; }

/* Season-preview prose. Serif, wider measure, real leading — this is the one
   place on the sheet meant to be read rather than scanned, so it should not look
   like the boards around it. */
.fb-standfirst {
  margin: 0 0 20px; padding-bottom: 18px;
  border-bottom: 1px solid rgba(255,255,255,0.10);
  font-family: Georgia, 'Times New Roman', serif; font-size: 19px; line-height: 1.5;
  color: #EDE8DA;
}
.fb-prose-cols { columns: 2; column-gap: 40px; }
.fb-prose {
  margin: 0 0 14px;
  font-family: Georgia, 'Times New Roman', serif; font-size: 15.5px; line-height: 1.75;
  color: rgba(242,239,230,0.74);
  text-align: justify; hyphens: auto;
}
.fb-prose:last-of-type { margin-bottom: 0; }
/* A drop-cap-ish lead-in: the first line of the first paragraph in small caps,
   which is what tells the eye this block is editorial and not another board. */
.fb-prose-cols .fb-prose:first-child::first-line {
  font-variant-caps: small-caps; letter-spacing: 0.04em; color: rgba(242,239,230,0.92);
}
@media (max-width: 900px) {
  .fb-prose-cols { columns: 1; }
  .fb-prose { text-align: left; hyphens: manual; }
}
.fb-preview .fb-note { margin-top: 18px; }
@media (max-width: 640px) {
  .fb-viewnav a { padding: 8px 12px; font-size: 10px; letter-spacing: 0.1em; }
  .fb-standfirst { font-size: 16.5px; }
  .fb-prose { font-size: 15px; line-height: 1.7; }
}
.fb-booknav { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
.fb-booknav a {
  color: #C9A24B; text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
  border: 1px solid rgba(201,162,75,0.3); border-radius: 999px; padding: 6px 14px;
}
.fb-booknav a:hover { background: rgba(201,162,75,0.12); }
.fb-booknav a.active { background: linear-gradient(180deg, #E4C46A, #C9A24B); color: #14110A; border-color: transparent; }
.fb-note { color: rgba(237,232,218,0.5); font-size: 12px; line-height: 1.6; margin: 8px 0 0; }
.fb-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.fb-grid2 .bk-panel { margin-top: 22px; }

/* --- THE RECKONING — settlement, and the book grading itself ------------ */
/* The settled board deliberately reuses .fb-seats / .fb-cell so last week's row
   sits in the same grid as this week's. A reader compares them by eye; two
   different layouts would make that work. */
.fb-settled {
  display: grid; grid-template-columns: 1fr 90px 90px 90px; align-items: center;
  gap: 10px; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px; padding: 12px 16px;
}
.fb-settled-head {
  display: grid; grid-template-columns: 1fr 90px 90px 90px; gap: 10px;
  padding: 0 16px 6px; font-size: 10px; letter-spacing: 0.22em;
  color: rgba(237,232,218,0.4); font-weight: 700;
}
.fb-settled-head span:not(:first-child), .fb-settled > .fb-cell { text-align: center; }
.fb-settled .fb-odds { color: rgba(237,232,218,0.55); border-color: rgba(255,255,255,0.1); font-size: 13px; }
.fb-settled-sub { font-size: 9px; letter-spacing: 0.12em; font-weight: 700; color: rgba(237,232,218,0.4); text-transform: uppercase; }
.fb-mark { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; }
.fb-mark.hit { color: #7FE3A8; }
.fb-mark.miss { color: #E8806B; }
.fb-mark.push { color: rgba(237,232,218,0.45); font-size: 9px; }

.fb-report { margin-top: 20px; border-top: 1px solid rgba(201,162,75,0.2); padding-top: 16px; }
.fb-report-title { font-family: 'Anton', sans-serif; font-size: 14px; letter-spacing: 0.18em; color: #C9A24B; margin: 0 0 12px; }
.fb-report-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.fb-report-cell {
  background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px; padding: 12px 14px; display: flex; flex-direction: column; gap: 3px;
}
.fb-report-num { font-family: 'Anton', sans-serif; font-size: 26px; color: #E4C46A; letter-spacing: 0.02em; font-variant-numeric: tabular-nums; }
.fb-report-label { font-size: 9px; font-weight: 700; letter-spacing: 0.16em; color: rgba(237,232,218,0.45); }
.fb-report-note { font-size: 11px; color: rgba(237,232,218,0.4); line-height: 1.45; margin-top: 2px; }

.fb-verdict {
  display: flex; justify-content: space-between; align-items: center; gap: 14px;
  padding: 12px 2px; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.fb-verdict:last-of-type { border-bottom: none; }
.fb-bench { display: flex; flex-direction: column; margin-top: 10px; }
.fb-bench-row {
  display: grid; grid-template-columns: 1fr auto; gap: 12px; align-items: center;
  padding: 8px 2px; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.fb-bench-row:last-child { border-bottom: none; }
.fb-bench-row.lead .fb-runner-team { color: #E8806B; }
.fb-bench-main { display: flex; flex-direction: column; min-width: 0; }

/* --- The editorial layer (content/<league>/w<N>.md) ---------------------- */
.fb-lede { border-left: 3px solid #C9A24B; }
.fb-byline {
  font-size: 10px; font-weight: 700; letter-spacing: 0.22em; color: rgba(201,162,75,0.8);
  text-transform: uppercase; margin: 16px 0 0;
}
/* Prose inside a board panel is a note, not a column: one measure, no justify,
   and visibly quieter than the numbers it is annotating. */
.fb-panel-prose { margin: 12px 0 4px; max-width: 72ch; }
.fb-match.noted { grid-template-areas: none; }
.fb-match-note {
  grid-column: 1 / -1; margin-top: 8px; padding-top: 10px;
  border-top: 1px dashed rgba(201,162,75,0.22);
}
.fb-match-note .md-p, .fb-panel-prose .md-p {
  font-family: Georgia, 'Times New Roman', serif; font-size: 13.5px; line-height: 1.65;
  color: rgba(242,239,230,0.7); margin: 0 0 10px;
}
.fb-match-note .md-p:last-child, .fb-panel-prose .md-p:last-child { margin-bottom: 0; }

.md-p {
  margin: 0 0 14px;
  font-family: Georgia, 'Times New Roman', serif; font-size: 15.5px; line-height: 1.75;
  color: rgba(242,239,230,0.74); text-align: justify; hyphens: auto;
}
.fb-prose-cols .md-p:first-child::first-line {
  font-variant-caps: small-caps; letter-spacing: 0.04em; color: rgba(242,239,230,0.92);
}
.md-h3 { font-family: 'Anton', sans-serif; font-size: 13px; letter-spacing: 0.16em; color: #C9A24B; margin: 0 0 8px; break-after: avoid; }
.md-list { margin: 0 0 14px; padding-left: 20px; font-family: Georgia, serif; font-size: 15px; line-height: 1.7; color: rgba(242,239,230,0.74); }
.md-list li { margin-bottom: 5px; }
.md-quote {
  margin: 0 0 14px; padding: 8px 0 8px 16px; border-left: 2px solid rgba(201,162,75,0.5);
  font-family: Georgia, serif; font-size: 16px; line-height: 1.6; color: rgba(242,239,230,0.88); font-style: italic;
}
.md-hr { border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 18px 0; }
.md-code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.88em; color: #E4C46A; }
.md-p strong, .md-list strong { color: rgba(242,239,230,0.95); font-weight: 700; }
@media (max-width: 900px) {
  .fb-prose-cols .md-p { text-align: left; hyphens: manual; }
}
@media (max-width: 820px) {
  .fb-settled, .fb-settled-head { grid-template-columns: 1fr 74px 74px; }
  .fb-settled .fb-cell.total, .fb-settled-head span.total { display: none; }
  .fb-report-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .fb-settled, .fb-settled-head { grid-template-columns: 1fr 68px; }
  .fb-settled .fb-cell.spread, .fb-settled-head span.spread { display: none; }
}

@media (max-width: 820px) {
  .fb-match, .fb-match-head { grid-template-columns: 1fr 74px 74px; }
  .fb-match-head { font-size: 9px; letter-spacing: 0.08em; }
  .fb-match .fb-cell.total, .fb-match-head span.total { display: none; }
  .fb-lineups { grid-template-columns: 1fr; }
  .fb-grid2 { grid-template-columns: 1fr; }
  .fb-wintotals { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .fb-match, .fb-match-head { grid-template-columns: 1fr 68px; }
  .fb-match .fb-cell.spread, .fb-match-head span.spread { display: none; }
  .fb-seat-proj { display: none; }
}
`;function df(){const i=new URLSearchParams(window.location.search),f=i.get("book")||null,u=i.has("w")?Number(i.get("w")):null,y=i.get("view")==="season"?"season":"week";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:uf}),l.jsx(Vc,{bookId:f,week:u,view:y})]})}lc.createRoot(document.getElementById("root")).render(l.jsx(Pn.StrictMode,{children:l.jsx(df,{})}));
