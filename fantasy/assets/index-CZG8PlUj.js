(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))v(E);new MutationObserver(E=>{for(const T of E)if(T.type==="childList")for(const R of T.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&v(R)}).observe(document,{childList:!0,subtree:!0});function c(E){const T={};return E.integrity&&(T.integrity=E.integrity),E.referrerPolicy&&(T.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?T.credentials="include":E.crossOrigin==="anonymous"?T.credentials="omit":T.credentials="same-origin",T}function v(E){if(E.ep)return;E.ep=!0;const T=c(E);fetch(E.href,T)}})();var _l={exports:{}},Sr={},zl={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function qd(){if(Du)return $;Du=1;var s=Symbol.for("react.element"),p=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),R=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),I=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),H=Symbol.iterator;function U(h){return h===null||typeof h!="object"?null:(h=H&&h[H]||h["@@iterator"],typeof h=="function"?h:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,oe={};function q(h,x,W){this.props=h,this.context=x,this.refs=oe,this.updater=W||ke}q.prototype.isReactComponent={},q.prototype.setState=function(h,x){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,x,"setState")},q.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function xn(){}xn.prototype=q.prototype;function dn(h,x,W){this.props=h,this.context=x,this.refs=oe,this.updater=W||ke}var en=dn.prototype=new xn;en.constructor=dn,Ve(en,q.prototype),en.isPureReactComponent=!0;var be=Array.isArray,nn=Object.prototype.hasOwnProperty,je={current:null},ze={key:!0,ref:!0,__self:!0,__source:!0};function Ke(h,x,W){var V,G={},Y=null,ee=null;if(x!=null)for(V in x.ref!==void 0&&(ee=x.ref),x.key!==void 0&&(Y=""+x.key),x)nn.call(x,V)&&!ze.hasOwnProperty(V)&&(G[V]=x[V]);var Z=arguments.length-2;if(Z===1)G.children=W;else if(1<Z){for(var ie=Array(Z),Be=0;Be<Z;Be++)ie[Be]=arguments[Be+2];G.children=ie}if(h&&h.defaultProps)for(V in Z=h.defaultProps,Z)G[V]===void 0&&(G[V]=Z[V]);return{$$typeof:s,type:h,key:Y,ref:ee,props:G,_owner:je.current}}function Ln(h,x){return{$$typeof:s,type:h.type,key:x,ref:h.ref,props:h.props,_owner:h._owner}}function kn(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function qn(h){var x={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(W){return x[W]})}var fn=/\/+/g;function Fe(h,x){return typeof h=="object"&&h!==null&&h.key!=null?qn(""+h.key):x.toString(36)}function tn(h,x,W,V,G){var Y=typeof h;(Y==="undefined"||Y==="boolean")&&(h=null);var ee=!1;if(h===null)ee=!0;else switch(Y){case"string":case"number":ee=!0;break;case"object":switch(h.$$typeof){case s:case p:ee=!0}}if(ee)return ee=h,G=G(ee),h=V===""?"."+Fe(ee,0):V,be(G)?(W="",h!=null&&(W=h.replace(fn,"$&/")+"/"),tn(G,x,W,"",function(Be){return Be})):G!=null&&(kn(G)&&(G=Ln(G,W+(!G.key||ee&&ee.key===G.key?"":(""+G.key).replace(fn,"$&/")+"/")+h)),x.push(G)),1;if(ee=0,V=V===""?".":V+":",be(h))for(var Z=0;Z<h.length;Z++){Y=h[Z];var ie=V+Fe(Y,Z);ee+=tn(Y,x,W,ie,G)}else if(ie=U(h),typeof ie=="function")for(h=ie.call(h),Z=0;!(Y=h.next()).done;)Y=Y.value,ie=V+Fe(Y,Z++),ee+=tn(Y,x,W,ie,G);else if(Y==="object")throw x=String(h),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return ee}function pn(h,x,W){if(h==null)return h;var V=[],G=0;return tn(h,V,"","",function(Y){return x.call(W,Y,G++)}),V}function Pe(h){if(h._status===-1){var x=h._result;x=x(),x.then(function(W){(h._status===0||h._status===-1)&&(h._status=1,h._result=W)},function(W){(h._status===0||h._status===-1)&&(h._status=2,h._result=W)}),h._status===-1&&(h._status=0,h._result=x)}if(h._status===1)return h._result.default;throw h._result}var ue={current:null},j={transition:null},M={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:j,ReactCurrentOwner:je};function z(){throw Error("act(...) is not supported in production builds of React.")}return $.Children={map:pn,forEach:function(h,x,W){pn(h,function(){x.apply(this,arguments)},W)},count:function(h){var x=0;return pn(h,function(){x++}),x},toArray:function(h){return pn(h,function(x){return x})||[]},only:function(h){if(!kn(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},$.Component=q,$.Fragment=c,$.Profiler=E,$.PureComponent=dn,$.StrictMode=v,$.Suspense=S,$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,$.act=z,$.cloneElement=function(h,x,W){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var V=Ve({},h.props),G=h.key,Y=h.ref,ee=h._owner;if(x!=null){if(x.ref!==void 0&&(Y=x.ref,ee=je.current),x.key!==void 0&&(G=""+x.key),h.type&&h.type.defaultProps)var Z=h.type.defaultProps;for(ie in x)nn.call(x,ie)&&!ze.hasOwnProperty(ie)&&(V[ie]=x[ie]===void 0&&Z!==void 0?Z[ie]:x[ie])}var ie=arguments.length-2;if(ie===1)V.children=W;else if(1<ie){Z=Array(ie);for(var Be=0;Be<ie;Be++)Z[Be]=arguments[Be+2];V.children=Z}return{$$typeof:s,type:h.type,key:G,ref:Y,props:V,_owner:ee}},$.createContext=function(h){return h={$$typeof:R,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:T,_context:h},h.Consumer=h},$.createElement=Ke,$.createFactory=function(h){var x=Ke.bind(null,h);return x.type=h,x},$.createRef=function(){return{current:null}},$.forwardRef=function(h){return{$$typeof:F,render:h}},$.isValidElement=kn,$.lazy=function(h){return{$$typeof:Q,_payload:{_status:-1,_result:h},_init:Pe}},$.memo=function(h,x){return{$$typeof:I,type:h,compare:x===void 0?null:x}},$.startTransition=function(h){var x=j.transition;j.transition={};try{h()}finally{j.transition=x}},$.unstable_act=z,$.useCallback=function(h,x){return ue.current.useCallback(h,x)},$.useContext=function(h){return ue.current.useContext(h)},$.useDebugValue=function(){},$.useDeferredValue=function(h){return ue.current.useDeferredValue(h)},$.useEffect=function(h,x){return ue.current.useEffect(h,x)},$.useId=function(){return ue.current.useId()},$.useImperativeHandle=function(h,x,W){return ue.current.useImperativeHandle(h,x,W)},$.useInsertionEffect=function(h,x){return ue.current.useInsertionEffect(h,x)},$.useLayoutEffect=function(h,x){return ue.current.useLayoutEffect(h,x)},$.useMemo=function(h,x){return ue.current.useMemo(h,x)},$.useReducer=function(h,x,W){return ue.current.useReducer(h,x,W)},$.useRef=function(h){return ue.current.useRef(h)},$.useState=function(h){return ue.current.useState(h)},$.useSyncExternalStore=function(h,x,W){return ue.current.useSyncExternalStore(h,x,W)},$.useTransition=function(){return ue.current.useTransition()},$.version="18.3.1",$}var Ou;function Ol(){return Ou||(Ou=1,zl.exports=qd()),zl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function ef(){if(Iu)return Sr;Iu=1;var s=Ol(),p=Symbol.for("react.element"),c=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,E=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function R(F,S,I){var Q,H={},U=null,ke=null;I!==void 0&&(U=""+I),S.key!==void 0&&(U=""+S.key),S.ref!==void 0&&(ke=S.ref);for(Q in S)v.call(S,Q)&&!T.hasOwnProperty(Q)&&(H[Q]=S[Q]);if(F&&F.defaultProps)for(Q in S=F.defaultProps,S)H[Q]===void 0&&(H[Q]=S[Q]);return{$$typeof:p,type:F,key:U,ref:ke,props:H,_owner:E.current}}return Sr.Fragment=c,Sr.jsx=R,Sr.jsxs=R,Sr}var Mu;function nf(){return Mu||(Mu=1,_l.exports=ef()),_l.exports}var a=nf(),Pn=Ol(),Do={},Pl={exports:{}},Ie={},Ll={exports:{}},Al={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function tf(){return Fu||(Fu=1,(function(s){function p(j,M){var z=j.length;j.push(M);e:for(;0<z;){var h=z-1>>>1,x=j[h];if(0<E(x,M))j[h]=M,j[z]=x,z=h;else break e}}function c(j){return j.length===0?null:j[0]}function v(j){if(j.length===0)return null;var M=j[0],z=j.pop();if(z!==M){j[0]=z;e:for(var h=0,x=j.length,W=x>>>1;h<W;){var V=2*(h+1)-1,G=j[V],Y=V+1,ee=j[Y];if(0>E(G,z))Y<x&&0>E(ee,G)?(j[h]=ee,j[Y]=z,h=Y):(j[h]=G,j[V]=z,h=V);else if(Y<x&&0>E(ee,z))j[h]=ee,j[Y]=z,h=Y;else break e}}return M}function E(j,M){var z=j.sortIndex-M.sortIndex;return z!==0?z:j.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var T=performance;s.unstable_now=function(){return T.now()}}else{var R=Date,F=R.now();s.unstable_now=function(){return R.now()-F}}var S=[],I=[],Q=1,H=null,U=3,ke=!1,Ve=!1,oe=!1,q=typeof setTimeout=="function"?setTimeout:null,xn=typeof clearTimeout=="function"?clearTimeout:null,dn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function en(j){for(var M=c(I);M!==null;){if(M.callback===null)v(I);else if(M.startTime<=j)v(I),M.sortIndex=M.expirationTime,p(S,M);else break;M=c(I)}}function be(j){if(oe=!1,en(j),!Ve)if(c(S)!==null)Ve=!0,Pe(nn);else{var M=c(I);M!==null&&ue(be,M.startTime-j)}}function nn(j,M){Ve=!1,oe&&(oe=!1,xn(Ke),Ke=-1),ke=!0;var z=U;try{for(en(M),H=c(S);H!==null&&(!(H.expirationTime>M)||j&&!qn());){var h=H.callback;if(typeof h=="function"){H.callback=null,U=H.priorityLevel;var x=h(H.expirationTime<=M);M=s.unstable_now(),typeof x=="function"?H.callback=x:H===c(S)&&v(S),en(M)}else v(S);H=c(S)}if(H!==null)var W=!0;else{var V=c(I);V!==null&&ue(be,V.startTime-M),W=!1}return W}finally{H=null,U=z,ke=!1}}var je=!1,ze=null,Ke=-1,Ln=5,kn=-1;function qn(){return!(s.unstable_now()-kn<Ln)}function fn(){if(ze!==null){var j=s.unstable_now();kn=j;var M=!0;try{M=ze(!0,j)}finally{M?Fe():(je=!1,ze=null)}}else je=!1}var Fe;if(typeof dn=="function")Fe=function(){dn(fn)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,pn=tn.port2;tn.port1.onmessage=fn,Fe=function(){pn.postMessage(null)}}else Fe=function(){q(fn,0)};function Pe(j){ze=j,je||(je=!0,Fe())}function ue(j,M){Ke=q(function(){j(s.unstable_now())},M)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){Ve||ke||(Ve=!0,Pe(nn))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ln=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return U},s.unstable_getFirstCallbackNode=function(){return c(S)},s.unstable_next=function(j){switch(U){case 1:case 2:case 3:var M=3;break;default:M=U}var z=U;U=M;try{return j()}finally{U=z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,M){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var z=U;U=j;try{return M()}finally{U=z}},s.unstable_scheduleCallback=function(j,M,z){var h=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?h+z:h):z=h,j){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=z+x,j={id:Q++,callback:M,priorityLevel:j,startTime:z,expirationTime:x,sortIndex:-1},z>h?(j.sortIndex=z,p(I,j),c(S)===null&&j===c(I)&&(oe?(xn(Ke),Ke=-1):oe=!0,ue(be,z-h))):(j.sortIndex=x,p(S,j),Ve||ke||(Ve=!0,Pe(nn))),j},s.unstable_shouldYield=qn,s.unstable_wrapCallback=function(j){var M=U;return function(){var z=U;U=M;try{return j.apply(this,arguments)}finally{U=z}}}})(Al)),Al}var Bu;function rf(){return Bu||(Bu=1,Ll.exports=tf()),Ll.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu;function of(){if(Hu)return Ie;Hu=1;var s=Ol(),p=rf();function c(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,E={};function T(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(E[e]=n,e=0;e<n.length;e++)v.add(n[e])}var F=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},H={};function U(e){return S.call(H,e)?!0:S.call(Q,e)?!1:I.test(e)?H[e]=!0:(Q[e]=!0,!1)}function ke(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ve(e,n,t,r){if(n===null||typeof n>"u"||ke(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function oe(e,n,t,r,o,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new oe(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];q[n]=new oe(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new oe(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new oe(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new oe(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new oe(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new oe(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new oe(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xn=/[\-:]([a-z])/g;function dn(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xn,dn);q[n]=new oe(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xn,dn);q[n]=new oe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xn,dn);q[n]=new oe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new oe(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function en(e,n,t,r){var o=q.hasOwnProperty(n)?q[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ve(n,t,o,r)&&(t=null),r||o===null?U(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var be=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nn=Symbol.for("react.element"),je=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Ln=Symbol.for("react.profiler"),kn=Symbol.for("react.provider"),qn=Symbol.for("react.context"),fn=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),tn=Symbol.for("react.suspense_list"),pn=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),j=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,h;function x(e){if(h===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);h=n&&n[1]||""}return`
`+h+e}var W=!1;function V(e,n){if(!e||W)return"";W=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(y){var r=y}Reflect.construct(e,[],n)}else{try{n.call()}catch(y){r=y}e.call(n.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var d=`
`+o[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{W=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?x(e):""}function G(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1),e;case 11:return e=V(e.type.render,!1),e;case 1:return e=V(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case je:return"Portal";case Ln:return"Profiler";case Ke:return"StrictMode";case Fe:return"Suspense";case tn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qn:return(e.displayName||"Context")+".Consumer";case kn:return(e._context.displayName||"Context")+".Provider";case fn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pn:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case Pe:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}function ee(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(n);case 8:return n===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Z(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Be(e){var n=ie(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Nr(e){e._valueTracker||(e._valueTracker=Be(e))}function Hl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,n){var t=n.checked;return z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ul(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Z(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Wl(e,n){n=n.checked,n!=null&&en(e,"checked",n,!1)}function Io(e,n){Wl(e,n);var t=Z(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Mo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Mo(e,n.type,Z(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $l(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Mo(e,n,t){(n!=="number"||Er(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Mt=Array.isArray;function pt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Z(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Fo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(c(91));return z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(c(92));if(Mt(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Z(t)}}function Kl(e,n){var t=Z(n.value),r=Z(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ql(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Gl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Gl(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tr,Yl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Bt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rc=["Webkit","ms","Moz","O"];Object.keys(Bt).forEach(function(e){rc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Bt[n]=Bt[e]})});function Jl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Bt.hasOwnProperty(e)&&Bt[e]?(""+n).trim():n+"px"}function Zl(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Jl(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var oc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ho(e,n){if(n){if(oc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(c(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(c(61))}if(n.style!=null&&typeof n.style!="object")throw Error(c(62))}}function Uo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vo=null,ht=null,mt=null;function Xl(e){if(e=ar(e)){if(typeof Vo!="function")throw Error(c(280));var n=e.stateNode;n&&(n=Yr(n),Vo(e.stateNode,e.type,n))}}function ql(e){ht?mt?mt.push(e):mt=[e]:ht=e}function es(){if(ht){var e=ht,n=mt;if(mt=ht=null,Xl(e),n)for(e=0;e<n.length;e++)Xl(n[e])}}function ns(e,n){return e(n)}function ts(){}var Ko=!1;function rs(e,n,t){if(Ko)return e(n,t);Ko=!0;try{return ns(e,n,t)}finally{Ko=!1,(ht!==null||mt!==null)&&(ts(),es())}}function Ht(e,n){var t=e.stateNode;if(t===null)return null;var r=Yr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Qo=!1;if(F)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch{Qo=!1}function ic(e,n,t,r,o,i,l,u,d){var y=Array.prototype.slice.call(arguments,3);try{n.apply(t,y)}catch(k){this.onError(k)}}var Wt=!1,jr=null,Cr=!1,Go=null,lc={onError:function(e){Wt=!0,jr=e}};function sc(e,n,t,r,o,i,l,u,d){Wt=!1,jr=null,ic.apply(lc,arguments)}function ac(e,n,t,r,o,i,l,u,d){if(sc.apply(this,arguments),Wt){if(Wt){var y=jr;Wt=!1,jr=null}else throw Error(c(198));Cr||(Cr=!0,Go=y)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function os(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function is(e){if(et(e)!==e)throw Error(c(188))}function uc(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return is(o),e;if(i===r)return is(o),n;i=i.sibling}throw Error(c(188))}if(t.return!==r.return)t=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function ls(e){return e=uc(e),e!==null?ss(e):null}function ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ss(e);if(n!==null)return n;e=e.sibling}return null}var as=p.unstable_scheduleCallback,us=p.unstable_cancelCallback,cc=p.unstable_shouldYield,dc=p.unstable_requestPaint,de=p.unstable_now,fc=p.unstable_getCurrentPriorityLevel,Yo=p.unstable_ImmediatePriority,cs=p.unstable_UserBlockingPriority,_r=p.unstable_NormalPriority,pc=p.unstable_LowPriority,ds=p.unstable_IdlePriority,zr=null,hn=null;function hc(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(zr,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:yc,mc=Math.log,gc=Math.LN2;function yc(e){return e>>>=0,e===0?32:31-(mc(e)/gc|0)|0}var Pr=64,Lr=4194304;function $t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~o;u!==0?r=$t(u):(i&=l,i!==0&&(r=$t(i)))}else l=t&~o,l!==0?r=$t(l):i!==0&&(r=$t(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&o)===0&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-rn(n),o=1<<t,r|=e[t],n&=~o;return r}function vc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-rn(i),u=1<<l,d=o[l];d===-1?((u&t)===0||(u&r)!==0)&&(o[l]=vc(u,n)):d<=n&&(e.expiredLanes|=u),i&=~u}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fs(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function Zo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Vt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=t}function xc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-rn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function Xo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-rn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var X=0;function ps(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hs,qo,ms,gs,ys,ei=!1,Rr=[],An=null,Rn=null,Dn=null,Kt=new Map,Qt=new Map,On=[],kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vs(e,n){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Kt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qt.delete(n.pointerId)}}function Gt(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=ar(n),n!==null&&qo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function bc(e,n,t,r,o){switch(n){case"focusin":return An=Gt(An,e,n,t,r,o),!0;case"dragenter":return Rn=Gt(Rn,e,n,t,r,o),!0;case"mouseover":return Dn=Gt(Dn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Kt.set(i,Gt(Kt.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qt.set(i,Gt(Qt.get(i)||null,e,n,t,r,o)),!0}return!1}function ws(e){var n=nt(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=os(t),n!==null){e.blockedOn=n,ys(e.priority,function(){ms(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ti(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Wo=r,t.target.dispatchEvent(r),Wo=null}else return n=ar(t),n!==null&&qo(n),e.blockedOn=t,!1;n.shift()}return!0}function xs(e,n,t){Dr(e)&&t.delete(n)}function Sc(){ei=!1,An!==null&&Dr(An)&&(An=null),Rn!==null&&Dr(Rn)&&(Rn=null),Dn!==null&&Dr(Dn)&&(Dn=null),Kt.forEach(xs),Qt.forEach(xs)}function Yt(e,n){e.blockedOn===n&&(e.blockedOn=null,ei||(ei=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Sc)))}function Jt(e){function n(o){return Yt(o,e)}if(0<Rr.length){Yt(Rr[0],e);for(var t=1;t<Rr.length;t++){var r=Rr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(An!==null&&Yt(An,e),Rn!==null&&Yt(Rn,e),Dn!==null&&Yt(Dn,e),Kt.forEach(n),Qt.forEach(n),t=0;t<On.length;t++)r=On[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(t=On[0],t.blockedOn===null);)ws(t),t.blockedOn===null&&On.shift()}var gt=be.ReactCurrentBatchConfig,Or=!0;function Nc(e,n,t,r){var o=X,i=gt.transition;gt.transition=null;try{X=1,ni(e,n,t,r)}finally{X=o,gt.transition=i}}function Ec(e,n,t,r){var o=X,i=gt.transition;gt.transition=null;try{X=4,ni(e,n,t,r)}finally{X=o,gt.transition=i}}function ni(e,n,t,r){if(Or){var o=ti(e,n,t,r);if(o===null)wi(e,n,r,Ir,t),vs(e,r);else if(bc(o,e,n,t,r))r.stopPropagation();else if(vs(e,r),n&4&&-1<kc.indexOf(e)){for(;o!==null;){var i=ar(o);if(i!==null&&hs(i),i=ti(e,n,t,r),i===null&&wi(e,n,r,Ir,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else wi(e,n,r,null,t)}}var Ir=null;function ti(e,n,t,r){if(Ir=null,e=$o(r),e=nt(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=os(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ir=e,null}function ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case Yo:return 1;case cs:return 4;case _r:case pc:return 16;case ds:return 536870912;default:return 16}default:return 16}}var In=null,ri=null,Mr=null;function bs(){if(Mr)return Mr;var e,n=ri,t=n.length,r,o="value"in In?In.value:In.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===o[i-r];r++);return Mr=o.slice(e,1<r?1-r:void 0)}function Fr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function Ss(){return!1}function He(e){function n(t,r,o,i,l){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Br:Ss,this.isPropagationStopped=Ss,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),n}var yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=He(yt),Zt=z({},yt,{view:0,detail:0}),Tc=He(Zt),ii,li,Xt,Hr=z({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&e.type==="mousemove"?(ii=e.screenX-Xt.screenX,li=e.screenY-Xt.screenY):li=ii=0,Xt=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:li}}),Ns=He(Hr),jc=z({},Hr,{dataTransfer:0}),Cc=He(jc),_c=z({},Zt,{relatedTarget:0}),si=He(_c),zc=z({},yt,{animationName:0,elapsedTime:0,pseudoElement:0}),Pc=He(zc),Lc=z({},yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ac=He(Lc),Rc=z({},yt,{data:0}),Es=He(Rc),Dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ic[e])?!!n[e]:!1}function ai(){return Mc}var Fc=z({},Zt,{key:function(e){if(e.key){var n=Dc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bc=He(Fc),Hc=z({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=He(Hc),Uc=z({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),Wc=He(Uc),$c=z({},yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vc=He($c),Kc=z({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qc=He(Kc),Gc=[9,13,27,32],ui=F&&"CompositionEvent"in window,qt=null;F&&"documentMode"in document&&(qt=document.documentMode);var Yc=F&&"TextEvent"in window&&!qt,js=F&&(!ui||qt&&8<qt&&11>=qt),Cs=" ",_s=!1;function zs(e,n){switch(e){case"keyup":return Gc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vt=!1;function Jc(e,n){switch(e){case"compositionend":return Ps(n);case"keypress":return n.which!==32?null:(_s=!0,Cs);case"textInput":return e=n.data,e===Cs&&_s?null:e;default:return null}}function Zc(e,n){if(vt)return e==="compositionend"||!ui&&zs(e,n)?(e=bs(),Mr=ri=In=null,vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return js&&n.locale!=="ko"?null:n.data;default:return null}}var Xc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xc[e.type]:n==="textarea"}function As(e,n,t,r){ql(r),n=Kr(n,"onChange"),0<n.length&&(t=new oi("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var er=null,nr=null;function qc(e){Zs(e,0)}function Ur(e){var n=St(e);if(Hl(n))return e}function ed(e,n){if(e==="change")return n}var Rs=!1;if(F){var ci;if(F){var di="oninput"in document;if(!di){var Ds=document.createElement("div");Ds.setAttribute("oninput","return;"),di=typeof Ds.oninput=="function"}ci=di}else ci=!1;Rs=ci&&(!document.documentMode||9<document.documentMode)}function Os(){er&&(er.detachEvent("onpropertychange",Is),nr=er=null)}function Is(e){if(e.propertyName==="value"&&Ur(nr)){var n=[];As(n,nr,e,$o(e)),rs(qc,n)}}function nd(e,n,t){e==="focusin"?(Os(),er=n,nr=t,er.attachEvent("onpropertychange",Is)):e==="focusout"&&Os()}function td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ur(nr)}function rd(e,n){if(e==="click")return Ur(n)}function od(e,n){if(e==="input"||e==="change")return Ur(n)}function id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:id;function tr(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!S.call(n,o)||!on(e[o],n[o]))return!1}return!0}function Ms(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,n){var t=Ms(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ms(t)}}function Bs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hs(){for(var e=window,n=Er();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Er(e.document)}return n}function fi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ld(e){var n=Hs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Bs(t.ownerDocument.documentElement,t)){if(r!==null&&fi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Fs(t,i);var l=Fs(t,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sd=F&&"documentMode"in document&&11>=document.documentMode,wt=null,pi=null,rr=null,hi=!1;function Us(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;hi||wt==null||wt!==Er(r)||(r=wt,"selectionStart"in r&&fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&tr(rr,r)||(rr=r,r=Kr(pi,"onSelect"),0<r.length&&(n=new oi("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=wt)))}function Wr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xt={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},mi={},Ws={};F&&(Ws=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function $r(e){if(mi[e])return mi[e];if(!xt[e])return e;var n=xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ws)return mi[e]=n[t];return e}var $s=$r("animationend"),Vs=$r("animationiteration"),Ks=$r("animationstart"),Qs=$r("transitionend"),Gs=new Map,Ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,n){Gs.set(e,n),T(n,[e])}for(var gi=0;gi<Ys.length;gi++){var yi=Ys[gi],ad=yi.toLowerCase(),ud=yi[0].toUpperCase()+yi.slice(1);Mn(ad,"on"+ud)}Mn($s,"onAnimationEnd"),Mn(Vs,"onAnimationIteration"),Mn(Ks,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(Qs,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),T("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),T("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),T("onBeforeInput",["compositionend","keypress","textInput","paste"]),T("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cd=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Js(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ac(r,n,void 0,e),e.currentTarget=null}function Zs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,y=u.currentTarget;if(u=u.listener,d!==i&&o.isPropagationStopped())break e;Js(o,u,y),i=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,y=u.currentTarget,u=u.listener,d!==i&&o.isPropagationStopped())break e;Js(o,u,y),i=d}}}if(Cr)throw e=Go,Cr=!1,Go=null,e}function te(e,n){var t=n[Ei];t===void 0&&(t=n[Ei]=new Set);var r=e+"__bubble";t.has(r)||(Xs(n,e,2,!1),t.add(r))}function vi(e,n,t){var r=0;n&&(r|=4),Xs(t,e,r,n)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Vr]){e[Vr]=!0,v.forEach(function(t){t!=="selectionchange"&&(cd.has(t)||vi(t,!1,e),vi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vr]||(n[Vr]=!0,vi("selectionchange",!1,n))}}function Xs(e,n,t,r){switch(ks(n)){case 1:var o=Nc;break;case 4:o=Ec;break;default:o=ni}t=o.bind(null,n,t,e),o=void 0,!Qo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function wi(e,n,t,r,o){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;l=l.return}for(;u!==null;){if(l=nt(u),l===null)return;if(d=l.tag,d===5||d===6){r=i=l;continue e}u=u.parentNode}}r=r.return}rs(function(){var y=i,k=$o(t),b=[];e:{var w=Gs.get(e);if(w!==void 0){var C=oi,P=e;switch(e){case"keypress":if(Fr(t)===0)break e;case"keydown":case"keyup":C=Bc;break;case"focusin":P="focus",C=si;break;case"focusout":P="blur",C=si;break;case"beforeblur":case"afterblur":C=si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Wc;break;case $s:case Vs:case Ks:C=Pc;break;case Qs:C=Vc;break;case"scroll":C=Tc;break;case"wheel":C=Qc;break;case"copy":case"cut":case"paste":C=Ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ts}var L=(n&4)!==0,fe=!L&&e==="scroll",m=L?w!==null?w+"Capture":null:w;L=[];for(var f=y,g;f!==null;){g=f;var N=g.stateNode;if(g.tag===5&&N!==null&&(g=N,m!==null&&(N=Ht(f,m),N!=null&&L.push(lr(f,N,g)))),fe)break;f=f.return}0<L.length&&(w=new C(w,P,null,t,k),b.push({event:w,listeners:L}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",w&&t!==Wo&&(P=t.relatedTarget||t.fromElement)&&(nt(P)||P[bn]))break e;if((C||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,C?(P=t.relatedTarget||t.toElement,C=y,P=P?nt(P):null,P!==null&&(fe=et(P),P!==fe||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=y),C!==P)){if(L=Ns,N="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(L=Ts,N="onPointerLeave",m="onPointerEnter",f="pointer"),fe=C==null?w:St(C),g=P==null?w:St(P),w=new L(N,f+"leave",C,t,k),w.target=fe,w.relatedTarget=g,N=null,nt(k)===y&&(L=new L(m,f+"enter",P,t,k),L.target=g,L.relatedTarget=fe,N=L),fe=N,C&&P)n:{for(L=C,m=P,f=0,g=L;g;g=kt(g))f++;for(g=0,N=m;N;N=kt(N))g++;for(;0<f-g;)L=kt(L),f--;for(;0<g-f;)m=kt(m),g--;for(;f--;){if(L===m||m!==null&&L===m.alternate)break n;L=kt(L),m=kt(m)}L=null}else L=null;C!==null&&qs(b,w,C,L,!1),P!==null&&fe!==null&&qs(b,fe,P,L,!0)}}e:{if(w=y?St(y):window,C=w.nodeName&&w.nodeName.toLowerCase(),C==="select"||C==="input"&&w.type==="file")var A=ed;else if(Ls(w))if(Rs)A=od;else{A=td;var D=nd}else(C=w.nodeName)&&C.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(A=rd);if(A&&(A=A(e,y))){As(b,A,t,k);break e}D&&D(e,w,y),e==="focusout"&&(D=w._wrapperState)&&D.controlled&&w.type==="number"&&Mo(w,"number",w.value)}switch(D=y?St(y):window,e){case"focusin":(Ls(D)||D.contentEditable==="true")&&(wt=D,pi=y,rr=null);break;case"focusout":rr=pi=wt=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,Us(b,t,k);break;case"selectionchange":if(sd)break;case"keydown":case"keyup":Us(b,t,k)}var O;if(ui)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else vt?zs(e,t)&&(B="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(B="onCompositionStart");B&&(js&&t.locale!=="ko"&&(vt||B!=="onCompositionStart"?B==="onCompositionEnd"&&vt&&(O=bs()):(In=k,ri="value"in In?In.value:In.textContent,vt=!0)),D=Kr(y,B),0<D.length&&(B=new Es(B,e,null,t,k),b.push({event:B,listeners:D}),O?B.data=O:(O=Ps(t),O!==null&&(B.data=O)))),(O=Yc?Jc(e,t):Zc(e,t))&&(y=Kr(y,"onBeforeInput"),0<y.length&&(k=new Es("onBeforeInput","beforeinput",null,t,k),b.push({event:k,listeners:y}),k.data=O))}Zs(b,n)})}function lr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Kr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ht(e,t),i!=null&&r.unshift(lr(e,i,o)),i=Ht(e,n),i!=null&&r.push(lr(e,i,o))),e=e.return}return r}function kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,n,t,r,o){for(var i=n._reactName,l=[];t!==null&&t!==r;){var u=t,d=u.alternate,y=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&y!==null&&(u=y,o?(d=Ht(t,i),d!=null&&l.unshift(lr(t,d,u))):o||(d=Ht(t,i),d!=null&&l.push(lr(t,d,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var dd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function ea(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(fd,"")}function Qr(e,n,t){if(n=ea(n),ea(e)!==n&&t)throw Error(c(425))}function Gr(){}var xi=null,ki=null;function bi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,pd=typeof clearTimeout=="function"?clearTimeout:void 0,na=typeof Promise=="function"?Promise:void 0,hd=typeof queueMicrotask=="function"?queueMicrotask:typeof na<"u"?function(e){return na.resolve(null).then(e).catch(md)}:Si;function md(e){setTimeout(function(){throw e})}function Ni(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Jt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Jt(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ta(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),mn="__reactFiber$"+bt,sr="__reactProps$"+bt,bn="__reactContainer$"+bt,Ei="__reactEvents$"+bt,gd="__reactListeners$"+bt,yd="__reactHandles$"+bt;function nt(e){var n=e[mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[bn]||t[mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ta(e);e!==null;){if(t=e[mn])return t;e=ta(e)}return n}e=t,t=e.parentNode}return null}function ar(e){return e=e[mn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Yr(e){return e[sr]||null}var Ti=[],Nt=-1;function Bn(e){return{current:e}}function re(e){0>Nt||(e.current=Ti[Nt],Ti[Nt]=null,Nt--)}function ne(e,n){Nt++,Ti[Nt]=e.current,e.current=n}var Hn={},Se=Bn(Hn),Le=Bn(!1),tt=Hn;function Et(e,n){var t=e.type.contextTypes;if(!t)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Jr(){re(Le),re(Se)}function ra(e,n,t){if(Se.current!==Hn)throw Error(c(168));ne(Se,n),ne(Le,t)}function oa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(c(108,ee(e)||"Unknown",o));return z({},t,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,tt=Se.current,ne(Se,e),ne(Le,Le.current),!0}function ia(e,n,t){var r=e.stateNode;if(!r)throw Error(c(169));t?(e=oa(e,n,tt),r.__reactInternalMemoizedMergedChildContext=e,re(Le),re(Se),ne(Se,e)):re(Le),ne(Le,t)}var Sn=null,Xr=!1,ji=!1;function la(e){Sn===null?Sn=[e]:Sn.push(e)}function vd(e){Xr=!0,la(e)}function Un(){if(!ji&&Sn!==null){ji=!0;var e=0,n=X;try{var t=Sn;for(X=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Sn=null,Xr=!1}catch(o){throw Sn!==null&&(Sn=Sn.slice(e+1)),as(Yo,Un),o}finally{X=n,ji=!1}}return null}var Tt=[],jt=0,qr=null,eo=0,Qe=[],Ge=0,rt=null,Nn=1,En="";function ot(e,n){Tt[jt++]=eo,Tt[jt++]=qr,qr=e,eo=n}function sa(e,n,t){Qe[Ge++]=Nn,Qe[Ge++]=En,Qe[Ge++]=rt,rt=e;var r=Nn;e=En;var o=32-rn(r)-1;r&=~(1<<o),t+=1;var i=32-rn(n)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Nn=1<<32-rn(n)+o|t<<o|r,En=i+e}else Nn=1<<i|t<<o|r,En=e}function Ci(e){e.return!==null&&(ot(e,1),sa(e,1,0))}function _i(e){for(;e===qr;)qr=Tt[--jt],Tt[jt]=null,eo=Tt[--jt],Tt[jt]=null;for(;e===rt;)rt=Qe[--Ge],Qe[Ge]=null,En=Qe[--Ge],Qe[Ge]=null,Nn=Qe[--Ge],Qe[Ge]=null}var Ue=null,We=null,le=!1,ln=null;function aa(e,n){var t=Xe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ua(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ue=e,We=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ue=e,We=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=rt!==null?{id:Nn,overflow:En}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Xe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ue=e,We=null,!0):!1;default:return!1}}function zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(le){var n=We;if(n){var t=n;if(!ua(e,n)){if(zi(e))throw Error(c(418));n=Fn(t.nextSibling);var r=Ue;n&&ua(e,n)?aa(r,t):(e.flags=e.flags&-4097|2,le=!1,Ue=e)}}else{if(zi(e))throw Error(c(418));e.flags=e.flags&-4097|2,le=!1,Ue=e}}}function ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function no(e){if(e!==Ue)return!1;if(!le)return ca(e),le=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!bi(e.type,e.memoizedProps)),n&&(n=We)){if(zi(e))throw da(),Error(c(418));for(;n;)aa(e,n),n=Fn(n.nextSibling)}if(ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){We=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}We=null}}else We=Ue?Fn(e.stateNode.nextSibling):null;return!0}function da(){for(var e=We;e;)e=Fn(e.nextSibling)}function Ct(){We=Ue=null,le=!1}function Li(e){ln===null?ln=[e]:ln.push(e)}var wd=be.ReactCurrentBatchConfig;function ur(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var r=t.stateNode}if(!r)throw Error(c(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var u=o.refs;l===null?delete u[i]:u[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function to(e,n){throw e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function fa(e){var n=e._init;return n(e._payload)}function pa(e){function n(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=Jn(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,f,g,N){return f===null||f.tag!==6?(f=Sl(g,m.mode,N),f.return=m,f):(f=o(f,g),f.return=m,f)}function d(m,f,g,N){var A=g.type;return A===ze?k(m,f,g.props.children,N,g.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Pe&&fa(A)===f.type)?(N=o(f,g.props),N.ref=ur(m,f,g),N.return=m,N):(N=jo(g.type,g.key,g.props,null,m.mode,N),N.ref=ur(m,f,g),N.return=m,N)}function y(m,f,g,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Nl(g,m.mode,N),f.return=m,f):(f=o(f,g.children||[]),f.return=m,f)}function k(m,f,g,N,A){return f===null||f.tag!==7?(f=ft(g,m.mode,N,A),f.return=m,f):(f=o(f,g),f.return=m,f)}function b(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Sl(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nn:return g=jo(f.type,f.key,f.props,null,m.mode,g),g.ref=ur(m,null,f),g.return=m,g;case je:return f=Nl(f,m.mode,g),f.return=m,f;case Pe:var N=f._init;return b(m,N(f._payload),g)}if(Mt(f)||M(f))return f=ft(f,m.mode,g,null),f.return=m,f;to(m,f)}return null}function w(m,f,g,N){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:u(m,f,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:return g.key===A?d(m,f,g,N):null;case je:return g.key===A?y(m,f,g,N):null;case Pe:return A=g._init,w(m,f,A(g._payload),N)}if(Mt(g)||M(g))return A!==null?null:k(m,f,g,N,null);to(m,g)}return null}function C(m,f,g,N,A){if(typeof N=="string"&&N!==""||typeof N=="number")return m=m.get(g)||null,u(f,m,""+N,A);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case nn:return m=m.get(N.key===null?g:N.key)||null,d(f,m,N,A);case je:return m=m.get(N.key===null?g:N.key)||null,y(f,m,N,A);case Pe:var D=N._init;return C(m,f,g,D(N._payload),A)}if(Mt(N)||M(N))return m=m.get(g)||null,k(f,m,N,A,null);to(f,N)}return null}function P(m,f,g,N){for(var A=null,D=null,O=f,B=f=0,ve=null;O!==null&&B<g.length;B++){O.index>B?(ve=O,O=null):ve=O.sibling;var J=w(m,O,g[B],N);if(J===null){O===null&&(O=ve);break}e&&O&&J.alternate===null&&n(m,O),f=i(J,f,B),D===null?A=J:D.sibling=J,D=J,O=ve}if(B===g.length)return t(m,O),le&&ot(m,B),A;if(O===null){for(;B<g.length;B++)O=b(m,g[B],N),O!==null&&(f=i(O,f,B),D===null?A=O:D.sibling=O,D=O);return le&&ot(m,B),A}for(O=r(m,O);B<g.length;B++)ve=C(O,m,B,g[B],N),ve!==null&&(e&&ve.alternate!==null&&O.delete(ve.key===null?B:ve.key),f=i(ve,f,B),D===null?A=ve:D.sibling=ve,D=ve);return e&&O.forEach(function(Zn){return n(m,Zn)}),le&&ot(m,B),A}function L(m,f,g,N){var A=M(g);if(typeof A!="function")throw Error(c(150));if(g=A.call(g),g==null)throw Error(c(151));for(var D=A=null,O=f,B=f=0,ve=null,J=g.next();O!==null&&!J.done;B++,J=g.next()){O.index>B?(ve=O,O=null):ve=O.sibling;var Zn=w(m,O,J.value,N);if(Zn===null){O===null&&(O=ve);break}e&&O&&Zn.alternate===null&&n(m,O),f=i(Zn,f,B),D===null?A=Zn:D.sibling=Zn,D=Zn,O=ve}if(J.done)return t(m,O),le&&ot(m,B),A;if(O===null){for(;!J.done;B++,J=g.next())J=b(m,J.value,N),J!==null&&(f=i(J,f,B),D===null?A=J:D.sibling=J,D=J);return le&&ot(m,B),A}for(O=r(m,O);!J.done;B++,J=g.next())J=C(O,m,B,J.value,N),J!==null&&(e&&J.alternate!==null&&O.delete(J.key===null?B:J.key),f=i(J,f,B),D===null?A=J:D.sibling=J,D=J);return e&&O.forEach(function(Xd){return n(m,Xd)}),le&&ot(m,B),A}function fe(m,f,g,N){if(typeof g=="object"&&g!==null&&g.type===ze&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:e:{for(var A=g.key,D=f;D!==null;){if(D.key===A){if(A=g.type,A===ze){if(D.tag===7){t(m,D.sibling),f=o(D,g.props.children),f.return=m,m=f;break e}}else if(D.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Pe&&fa(A)===D.type){t(m,D.sibling),f=o(D,g.props),f.ref=ur(m,D,g),f.return=m,m=f;break e}t(m,D);break}else n(m,D);D=D.sibling}g.type===ze?(f=ft(g.props.children,m.mode,N,g.key),f.return=m,m=f):(N=jo(g.type,g.key,g.props,null,m.mode,N),N.ref=ur(m,f,g),N.return=m,m=N)}return l(m);case je:e:{for(D=g.key;f!==null;){if(f.key===D)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(m,f.sibling),f=o(f,g.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Nl(g,m.mode,N),f.return=m,m=f}return l(m);case Pe:return D=g._init,fe(m,f,D(g._payload),N)}if(Mt(g))return P(m,f,g,N);if(M(g))return L(m,f,g,N);to(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(m,f.sibling),f=o(f,g),f.return=m,m=f):(t(m,f),f=Sl(g,m.mode,N),f.return=m,m=f),l(m)):t(m,f)}return fe}var _t=pa(!0),ha=pa(!1),ro=Bn(null),oo=null,zt=null,Ai=null;function Ri(){Ai=zt=oo=null}function Di(e){var n=ro.current;re(ro),e._currentValue=n}function Oi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Pt(e,n){oo=e,Ai=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Re=!0),e.firstContext=null)}function Ye(e){var n=e._currentValue;if(Ai!==e)if(e={context:e,memoizedValue:n,next:null},zt===null){if(oo===null)throw Error(c(308));zt=e,oo.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return n}var it=null;function Ii(e){it===null?it=[e]:it.push(e)}function ma(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Ii(n)):(t.next=o.next,o.next=t),n.interleaved=t,Tn(e,r)}function Tn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Wn=!1;function Mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ga(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function $n(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Tn(e,t)}return o=r.interleaved,o===null?(n.next=n,Ii(r)):(n.next=o.next,o.next=n),r.interleaved=n,Tn(e,t)}function io(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xo(e,t)}}function ya(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function lo(e,n,t,r){var o=e.updateQueue;Wn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var d=u,y=d.next;d.next=null,l===null?i=y:l.next=y,l=d;var k=e.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==l&&(u===null?k.firstBaseUpdate=y:u.next=y,k.lastBaseUpdate=d))}if(i!==null){var b=o.baseState;l=0,k=y=d=null,u=i;do{var w=u.lane,C=u.eventTime;if((r&w)===w){k!==null&&(k=k.next={eventTime:C,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var P=e,L=u;switch(w=n,C=t,L.tag){case 1:if(P=L.payload,typeof P=="function"){b=P.call(C,b,w);break e}b=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=L.payload,w=typeof P=="function"?P.call(C,b,w):P,w==null)break e;b=z({},b,w);break e;case 2:Wn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=o.effects,w===null?o.effects=[u]:w.push(u))}else C={eventTime:C,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(y=k=C,d=b):k=k.next=C,l|=w;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;w=u,u=w.next,w.next=null,o.lastBaseUpdate=w,o.shared.pending=null}}while(!0);if(k===null&&(d=b),o.baseState=d,o.firstBaseUpdate=y,o.lastBaseUpdate=k,n=o.shared.interleaved,n!==null){o=n;do l|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);at|=l,e.lanes=l,e.memoizedState=b}}function va(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(c(191,o));o.call(r)}}}var cr={},gn=Bn(cr),dr=Bn(cr),fr=Bn(cr);function lt(e){if(e===cr)throw Error(c(174));return e}function Fi(e,n){switch(ne(fr,n),ne(dr,e),ne(gn,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Bo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Bo(n,e)}re(gn),ne(gn,n)}function Lt(){re(gn),re(dr),re(fr)}function wa(e){lt(fr.current);var n=lt(gn.current),t=Bo(n,e.type);n!==t&&(ne(dr,e),ne(gn,t))}function Bi(e){dr.current===e&&(re(gn),re(dr))}var se=Bn(0);function so(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=[];function Ui(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var ao=be.ReactCurrentDispatcher,Wi=be.ReactCurrentBatchConfig,st=0,ae=null,he=null,ge=null,uo=!1,pr=!1,hr=0,xd=0;function Ne(){throw Error(c(321))}function $i(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function Vi(e,n,t,r,o,i){if(st=i,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ao.current=e===null||e.memoizedState===null?Nd:Ed,e=t(r,o),pr){i=0;do{if(pr=!1,hr=0,25<=i)throw Error(c(301));i+=1,ge=he=null,n.updateQueue=null,ao.current=Td,e=t(r,o)}while(pr)}if(ao.current=po,n=he!==null&&he.next!==null,st=0,ge=he=ae=null,uo=!1,n)throw Error(c(300));return e}function Ki(){var e=hr!==0;return hr=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ae.memoizedState=ge=e:ge=ge.next=e,ge}function Je(){if(he===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var n=ge===null?ae.memoizedState:ge.next;if(n!==null)ge=n,he=e;else{if(e===null)throw Error(c(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?ae.memoizedState=ge=e:ge=ge.next=e}return ge}function mr(e,n){return typeof n=="function"?n(e):n}function Qi(e){var n=Je(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,d=null,y=i;do{var k=y.lane;if((st&k)===k)d!==null&&(d=d.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var b={lane:k,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};d===null?(u=d=b,l=r):d=d.next=b,ae.lanes|=k,at|=k}y=y.next}while(y!==null&&y!==i);d===null?l=r:d.next=u,on(r,n.memoizedState)||(Re=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,at|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Gi(e){var n=Je(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);on(i,n.memoizedState)||(Re=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function xa(){}function ka(e,n){var t=ae,r=Je(),o=n(),i=!on(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,Yi(Na.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,gr(9,Sa.bind(null,t,r,o,n),void 0,null),ye===null)throw Error(c(349));(st&30)!==0||ba(t,n,o)}return o}function ba(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ae.updateQueue,n===null?(n={lastEffect:null,stores:null},ae.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sa(e,n,t,r){n.value=t,n.getSnapshot=r,Ea(n)&&Ta(e)}function Na(e,n,t){return t(function(){Ea(n)&&Ta(e)})}function Ea(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function Ta(e){var n=Tn(e,1);n!==null&&cn(n,e,1,-1)}function ja(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},n.queue=e,e=e.dispatch=Sd.bind(null,ae,e),[n.memoizedState,e]}function gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ae.updateQueue,n===null?(n={lastEffect:null,stores:null},ae.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Ca(){return Je().memoizedState}function co(e,n,t,r){var o=yn();ae.flags|=e,o.memoizedState=gr(1|n,t,void 0,r===void 0?null:r)}function fo(e,n,t,r){var o=Je();r=r===void 0?null:r;var i=void 0;if(he!==null){var l=he.memoizedState;if(i=l.destroy,r!==null&&$i(r,l.deps)){o.memoizedState=gr(n,t,i,r);return}}ae.flags|=e,o.memoizedState=gr(1|n,t,i,r)}function _a(e,n){return co(8390656,8,e,n)}function Yi(e,n){return fo(2048,8,e,n)}function za(e,n){return fo(4,2,e,n)}function Pa(e,n){return fo(4,4,e,n)}function La(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Aa(e,n,t){return t=t!=null?t.concat([e]):null,fo(4,4,La.bind(null,n,e),t)}function Ji(){}function Ra(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&$i(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Da(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&$i(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Oa(e,n,t){return(st&21)===0?(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=t):(on(t,n)||(t=fs(),ae.lanes|=t,at|=t,e.baseState=!0),n)}function kd(e,n){var t=X;X=t!==0&&4>t?t:4,e(!0);var r=Wi.transition;Wi.transition={};try{e(!1),n()}finally{X=t,Wi.transition=r}}function Ia(){return Je().memoizedState}function bd(e,n,t){var r=Gn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ma(e))Fa(n,t);else if(t=ma(e,n,t,r),t!==null){var o=_e();cn(t,e,r,o),Ba(t,n,r)}}function Sd(e,n,t){var r=Gn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ma(e))Fa(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,u=i(l,t);if(o.hasEagerState=!0,o.eagerState=u,on(u,l)){var d=n.interleaved;d===null?(o.next=o,Ii(n)):(o.next=d.next,d.next=o),n.interleaved=o;return}}catch{}finally{}t=ma(e,n,o,r),t!==null&&(o=_e(),cn(t,e,r,o),Ba(t,n,r))}}function Ma(e){var n=e.alternate;return e===ae||n!==null&&n===ae}function Fa(e,n){pr=uo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ba(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xo(e,t)}}var po={readContext:Ye,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Nd={readContext:Ye,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:Ye,useEffect:_a,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,co(4194308,4,La.bind(null,n,e),t)},useLayoutEffect:function(e,n){return co(4194308,4,e,n)},useInsertionEffect:function(e,n){return co(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=yn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bd.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:ja,useDebugValue:Ji,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=ja(!1),n=e[0];return e=kd.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ae,o=yn();if(le){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),ye===null)throw Error(c(349));(st&30)!==0||ba(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,_a(Na.bind(null,r,i,e),[e]),r.flags|=2048,gr(9,Sa.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=yn(),n=ye.identifierPrefix;if(le){var t=En,r=Nn;t=(r&~(1<<32-rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=hr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=xd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ed={readContext:Ye,useCallback:Ra,useContext:Ye,useEffect:Yi,useImperativeHandle:Aa,useInsertionEffect:za,useLayoutEffect:Pa,useMemo:Da,useReducer:Qi,useRef:Ca,useState:function(){return Qi(mr)},useDebugValue:Ji,useDeferredValue:function(e){var n=Je();return Oa(n,he.memoizedState,e)},useTransition:function(){var e=Qi(mr)[0],n=Je().memoizedState;return[e,n]},useMutableSource:xa,useSyncExternalStore:ka,useId:Ia,unstable_isNewReconciler:!1},Td={readContext:Ye,useCallback:Ra,useContext:Ye,useEffect:Yi,useImperativeHandle:Aa,useInsertionEffect:za,useLayoutEffect:Pa,useMemo:Da,useReducer:Gi,useRef:Ca,useState:function(){return Gi(mr)},useDebugValue:Ji,useDeferredValue:function(e){var n=Je();return he===null?n.memoizedState=e:Oa(n,he.memoizedState,e)},useTransition:function(){var e=Gi(mr)[0],n=Je().memoizedState;return[e,n]},useMutableSource:xa,useSyncExternalStore:ka,useId:Ia,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Zi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ho={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=_e(),o=Gn(e),i=jn(r,o);i.payload=n,t!=null&&(i.callback=t),n=$n(e,i,o),n!==null&&(cn(n,e,o,r),io(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=_e(),o=Gn(e),i=jn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=$n(e,i,o),n!==null&&(cn(n,e,o,r),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=_e(),r=Gn(e),o=jn(t,r);o.tag=2,n!=null&&(o.callback=n),n=$n(e,o,r),n!==null&&(cn(n,e,r,t),io(n,e,r))}};function Ha(e,n,t,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!tr(t,r)||!tr(o,i):!0}function Ua(e,n,t){var r=!1,o=Hn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(o=Ae(n)?tt:Se.current,r=n.contextTypes,i=(r=r!=null)?Et(e,o):Hn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ho,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Wa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ho.enqueueReplaceState(n,n.state,null)}function Xi(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Mi(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Ye(i):(i=Ae(n)?tt:Se.current,o.context=Et(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Zi(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ho.enqueueReplaceState(o,o.state,null),lo(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function At(e,n){try{var t="",r=n;do t+=G(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function qi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function el(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var jd=typeof WeakMap=="function"?WeakMap:Map;function $a(e,n,t){t=jn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ko||(ko=!0,ml=r),el(e,n)},t}function Va(e,n,t){t=jn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){el(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){el(e,n),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ka(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new jd;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Hd.bind(null,e,n,t),n.then(e,e))}function Qa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ga(e,n,t,r,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=jn(-1,1),n.tag=2,$n(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Cd=be.ReactCurrentOwner,Re=!1;function Ce(e,n,t,r){n.child=e===null?ha(n,null,t,r):_t(n,e.child,t,r)}function Ya(e,n,t,r,o){t=t.render;var i=n.ref;return Pt(n,o),r=Vi(e,n,t,r,i,o),t=Ki(),e!==null&&!Re?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Cn(e,n,o)):(le&&t&&Ci(n),n.flags|=1,Ce(e,n,r,o),n.child)}function Ja(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!bl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Za(e,n,i,r,o)):(e=jo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:tr,t(l,r)&&e.ref===n.ref)return Cn(e,n,o)}return n.flags|=1,e=Jn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Za(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(tr(i,r)&&e.ref===n.ref)if(Re=!1,n.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Re=!0);else return n.lanes=e.lanes,Cn(e,n,o)}return nl(e,n,t,r,o)}function Xa(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Dt,$e),$e|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(Dt,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ne(Dt,$e),$e|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ne(Dt,$e),$e|=r;return Ce(e,n,o,t),n.child}function qa(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function nl(e,n,t,r,o){var i=Ae(t)?tt:Se.current;return i=Et(n,i),Pt(n,o),t=Vi(e,n,t,r,i,o),r=Ki(),e!==null&&!Re?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Cn(e,n,o)):(le&&r&&Ci(n),n.flags|=1,Ce(e,n,t,o),n.child)}function eu(e,n,t,r,o){if(Ae(t)){var i=!0;Zr(n)}else i=!1;if(Pt(n,o),n.stateNode===null)go(e,n),Ua(n,t,r),Xi(n,t,r,o),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var d=l.context,y=t.contextType;typeof y=="object"&&y!==null?y=Ye(y):(y=Ae(t)?tt:Se.current,y=Et(n,y));var k=t.getDerivedStateFromProps,b=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function";b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==y)&&Wa(n,l,r,y),Wn=!1;var w=n.memoizedState;l.state=w,lo(n,r,l,o),d=n.memoizedState,u!==r||w!==d||Le.current||Wn?(typeof k=="function"&&(Zi(n,t,k,r),d=n.memoizedState),(u=Wn||Ha(n,t,u,r,w,d,y))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),l.props=r,l.state=d,l.context=y,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,ga(e,n),u=n.memoizedProps,y=n.type===n.elementType?u:sn(n.type,u),l.props=y,b=n.pendingProps,w=l.context,d=t.contextType,typeof d=="object"&&d!==null?d=Ye(d):(d=Ae(t)?tt:Se.current,d=Et(n,d));var C=t.getDerivedStateFromProps;(k=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==b||w!==d)&&Wa(n,l,r,d),Wn=!1,w=n.memoizedState,l.state=w,lo(n,r,l,o);var P=n.memoizedState;u!==b||w!==P||Le.current||Wn?(typeof C=="function"&&(Zi(n,t,C,r),P=n.memoizedState),(y=Wn||Ha(n,t,y,r,w,P,d)||!1)?(k||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,P,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,P,d)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=P),l.props=r,l.state=P,l.context=d,r=y):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),r=!1)}return tl(e,n,t,r,i,o)}function tl(e,n,t,r,o,i){qa(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return o&&ia(n,t,!1),Cn(e,n,i);r=n.stateNode,Cd.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=_t(n,e.child,null,i),n.child=_t(n,null,u,i)):Ce(e,n,u,i),n.memoizedState=r.state,o&&ia(n,t,!0),n.child}function nu(e){var n=e.stateNode;n.pendingContext?ra(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ra(e,n.context,!1),Fi(e,n.containerInfo)}function tu(e,n,t,r,o){return Ct(),Li(o),n.flags|=256,Ce(e,n,t,r),n.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function ru(e,n,t){var r=n.pendingProps,o=se.current,i=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(se,o&1),e===null)return Pi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Co(l,r,0,null),e=ft(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ol(t),n.memoizedState=rl,e):il(n,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return _d(e,n,l,r,u,o,t);if(i){i=r.fallback,l=n.mode,o=e.child,u=o.sibling;var d={mode:"hidden",children:r.children};return(l&1)===0&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=Jn(o,d),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=Jn(u,i):(i=ft(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?ol(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=rl,r}return i=e.child,e=i.sibling,r=Jn(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function il(e,n){return n=Co({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mo(e,n,t,r){return r!==null&&Li(r),_t(n,e.child,null,t),e=il(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _d(e,n,t,r,o,i,l){if(t)return n.flags&256?(n.flags&=-257,r=qi(Error(c(422))),mo(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Co({mode:"visible",children:r.children},o,0,null),i=ft(i,o,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&_t(n,e.child,null,l),n.child.memoizedState=ol(l),n.memoizedState=rl,i);if((n.mode&1)===0)return mo(e,n,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(c(419)),r=qi(i,r,void 0),mo(e,n,l,r)}if(u=(l&e.childLanes)!==0,Re||u){if(r=ye,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Tn(e,o),cn(r,e,o,-1))}return kl(),r=qi(Error(c(421))),mo(e,n,l,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Ud.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,We=Fn(o.nextSibling),Ue=n,le=!0,ln=null,e!==null&&(Qe[Ge++]=Nn,Qe[Ge++]=En,Qe[Ge++]=rt,Nn=e.id,En=e.overflow,rt=n),n=il(n,r.children),n.flags|=4096,n)}function ou(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Oi(e.return,n,t)}function ll(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function iu(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,n,r.children,t),r=se.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,t,n);else if(e.tag===19)ou(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(se,r),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&so(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ll(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&so(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ll(n,!0,t,null,i);break;case"together":ll(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function go(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),at|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function zd(e,n,t){switch(n.tag){case 3:nu(n),Ct();break;case 5:wa(n);break;case 1:Ae(n.type)&&Zr(n);break;case 4:Fi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ne(ro,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ne(se,se.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ru(e,n,t):(ne(se,se.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);ne(se,se.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return iu(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(se,se.current),r)break;return null;case 22:case 23:return n.lanes=0,Xa(e,n,t)}return Cn(e,n,t)}var lu,sl,su,au;lu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},sl=function(){},su=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,lt(gn.current);var i=null;switch(t){case"input":o=Oo(e,o),r=Oo(e,r),i=[];break;case"select":o=z({},o,{value:void 0}),r=z({},r,{value:void 0}),i=[];break;case"textarea":o=Fo(e,o),r=Fo(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}Ho(t,r);var l;t=null;for(y in o)if(!r.hasOwnProperty(y)&&o.hasOwnProperty(y)&&o[y]!=null)if(y==="style"){var u=o[y];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(E.hasOwnProperty(y)?i||(i=[]):(i=i||[]).push(y,null));for(y in r){var d=r[y];if(u=o!=null?o[y]:void 0,r.hasOwnProperty(y)&&d!==u&&(d!=null||u!=null))if(y==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(t||(t={}),t[l]=d[l])}else t||(i||(i=[]),i.push(y,t)),t=d;else y==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(i=i||[]).push(y,d)):y==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(y,""+d):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(E.hasOwnProperty(y)?(d!=null&&y==="onScroll"&&te("scroll",e),i||u===d||(i=[])):(i=i||[]).push(y,d))}t&&(i=i||[]).push("style",t);var y=i;(n.updateQueue=y)&&(n.flags|=4)}},au=function(e,n,t,r){t!==r&&(n.flags|=4)};function yr(e,n){if(!le)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Pd(e,n,t){var r=n.pendingProps;switch(_i(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return Ae(n.type)&&Jr(),Ee(n),null;case 3:return r=n.stateNode,Lt(),re(Le),re(Se),Ui(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ln!==null&&(vl(ln),ln=null))),sl(e,n),Ee(n),null;case 5:Bi(n);var o=lt(fr.current);if(t=n.type,e!==null&&n.stateNode!=null)su(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(c(166));return Ee(n),null}if(e=lt(gn.current),no(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[mn]=n,r[sr]=i,e=(n.mode&1)!==0,t){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<or.length;o++)te(or[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Ul(r,i),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},te("invalid",r);break;case"textarea":Vl(r,i),te("invalid",r)}Ho(t,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,u,e),o=["children",""+u]):E.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&te("scroll",r)}switch(t){case"input":Nr(r),$l(r,i,!0);break;case"textarea":Nr(r),Ql(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gr)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[mn]=n,e[sr]=r,lu(e,n,!1,!1),n.stateNode=e;e:{switch(l=Uo(t,r),t){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<or.length;o++)te(or[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":Ul(e,r),o=Oo(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=z({},r,{value:void 0}),te("invalid",e);break;case"textarea":Vl(e,r),o=Fo(e,r),te("invalid",e);break;default:o=r}Ho(t,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var d=u[i];i==="style"?Zl(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Yl(e,d)):i==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Ft(e,d):typeof d=="number"&&Ft(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(E.hasOwnProperty(i)?d!=null&&i==="onScroll"&&te("scroll",e):d!=null&&en(e,i,d,l))}switch(t){case"input":Nr(e),$l(e,r,!1);break;case"textarea":Nr(e),Ql(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Z(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pt(e,!!r.multiple,i,!1):r.defaultValue!=null&&pt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Gr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)au(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(t=lt(fr.current),lt(gn.current),no(n)){if(r=n.stateNode,t=n.memoizedProps,r[mn]=n,(i=r.nodeValue!==t)&&(e=Ue,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[mn]=n,n.stateNode=r}return Ee(n),null;case 13:if(re(se),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&We!==null&&(n.mode&1)!==0&&(n.flags&128)===0)da(),Ct(),n.flags|=98560,i=!1;else if(i=no(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[mn]=n}else Ct(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),i=!1}else ln!==null&&(vl(ln),ln=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(se.current&1)!==0?me===0&&(me=3):kl())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return Lt(),sl(e,n),e===null&&ir(n.stateNode.containerInfo),Ee(n),null;case 10:return Di(n.type._context),Ee(n),null;case 17:return Ae(n.type)&&Jr(),Ee(n),null;case 19:if(re(se),i=n.memoizedState,i===null)return Ee(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)yr(i,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=so(e),l!==null){for(n.flags|=128,yr(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(se,se.current&1|2),n.child}e=e.sibling}i.tail!==null&&de()>Ot&&(n.flags|=128,r=!0,yr(i,!1),n.lanes=4194304)}else{if(!r)if(e=so(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return Ee(n),null}else 2*de()-i.renderingStartTime>Ot&&t!==1073741824&&(n.flags|=128,r=!0,yr(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=de(),n.sibling=null,t=se.current,ne(se,r?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return xl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?($e&1073741824)!==0&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(c(156,n.tag))}function Ld(e,n){switch(_i(n),n.tag){case 1:return Ae(n.type)&&Jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lt(),re(Le),re(Se),Ui(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Bi(n),null;case 13:if(re(se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return re(se),null;case 4:return Lt(),null;case 10:return Di(n.type._context),null;case 22:case 23:return xl(),null;case 24:return null;default:return null}}var yo=!1,Te=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,_=null;function Rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ce(e,n,r)}else t.current=null}function al(e,n,t){try{t()}catch(r){ce(e,n,r)}}var uu=!1;function Rd(e,n){if(xi=Or,e=Hs(),fi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,u=-1,d=-1,y=0,k=0,b=e,w=null;n:for(;;){for(var C;b!==t||o!==0&&b.nodeType!==3||(u=l+o),b!==i||r!==0&&b.nodeType!==3||(d=l+r),b.nodeType===3&&(l+=b.nodeValue.length),(C=b.firstChild)!==null;)w=b,b=C;for(;;){if(b===e)break n;if(w===t&&++y===o&&(u=l),w===i&&++k===r&&(d=l),(C=b.nextSibling)!==null)break;b=w,w=b.parentNode}b=C}t=u===-1||d===-1?null:{start:u,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(ki={focusedElem:e,selectionRange:t},Or=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var P=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var L=P.memoizedProps,fe=P.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?L:sn(n.type,L),fe);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(N){ce(n,n.return,N)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return P=uu,uu=!1,P}function vr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&al(n,t,i)}o=o.next}while(o!==r)}}function vo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ul(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function cu(e){var n=e.alternate;n!==null&&(e.alternate=null,cu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[mn],delete n[sr],delete n[Ei],delete n[gd],delete n[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function du(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(cl(e,n,t),e=e.sibling;e!==null;)cl(e,n,t),e=e.sibling}function dl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dl(e,n,t),e=e.sibling;e!==null;)dl(e,n,t),e=e.sibling}var we=null,an=!1;function Vn(e,n,t){for(t=t.child;t!==null;)pu(e,n,t),t=t.sibling}function pu(e,n,t){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(zr,t)}catch{}switch(t.tag){case 5:Te||Rt(t,n);case 6:var r=we,o=an;we=null,Vn(e,n,t),we=r,an=o,we!==null&&(an?(e=we,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):we.removeChild(t.stateNode));break;case 18:we!==null&&(an?(e=we,t=t.stateNode,e.nodeType===8?Ni(e.parentNode,t):e.nodeType===1&&Ni(e,t),Jt(e)):Ni(we,t.stateNode));break;case 4:r=we,o=an,we=t.stateNode.containerInfo,an=!0,Vn(e,n,t),we=r,an=o;break;case 0:case 11:case 14:case 15:if(!Te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&al(t,n,l),o=o.next}while(o!==r)}Vn(e,n,t);break;case 1:if(!Te&&(Rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){ce(t,n,u)}Vn(e,n,t);break;case 21:Vn(e,n,t);break;case 22:t.mode&1?(Te=(r=Te)||t.memoizedState!==null,Vn(e,n,t),Te=r):Vn(e,n,t);break;default:Vn(e,n,t)}}function hu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ad),n.forEach(function(r){var o=Wd.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function un(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:we=u.stateNode,an=!1;break e;case 3:we=u.stateNode.containerInfo,an=!0;break e;case 4:we=u.stateNode.containerInfo,an=!0;break e}u=u.return}if(we===null)throw Error(c(160));pu(i,l,o),we=null,an=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(y){ce(o,n,y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mu(n,e),n=n.sibling}function mu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(n,e),vn(e),r&4){try{vr(3,e,e.return),vo(3,e)}catch(L){ce(e,e.return,L)}try{vr(5,e,e.return)}catch(L){ce(e,e.return,L)}}break;case 1:un(n,e),vn(e),r&512&&t!==null&&Rt(t,t.return);break;case 5:if(un(n,e),vn(e),r&512&&t!==null&&Rt(t,t.return),e.flags&32){var o=e.stateNode;try{Ft(o,"")}catch(L){ce(e,e.return,L)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Wl(o,i),Uo(u,l);var y=Uo(u,i);for(l=0;l<d.length;l+=2){var k=d[l],b=d[l+1];k==="style"?Zl(o,b):k==="dangerouslySetInnerHTML"?Yl(o,b):k==="children"?Ft(o,b):en(o,k,b,y)}switch(u){case"input":Io(o,i);break;case"textarea":Kl(o,i);break;case"select":var w=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?pt(o,!!i.multiple,C,!1):w!==!!i.multiple&&(i.defaultValue!=null?pt(o,!!i.multiple,i.defaultValue,!0):pt(o,!!i.multiple,i.multiple?[]:"",!1))}o[sr]=i}catch(L){ce(e,e.return,L)}}break;case 6:if(un(n,e),vn(e),r&4){if(e.stateNode===null)throw Error(c(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(L){ce(e,e.return,L)}}break;case 3:if(un(n,e),vn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(L){ce(e,e.return,L)}break;case 4:un(n,e),vn(e);break;case 13:un(n,e),vn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(hl=de())),r&4&&hu(e);break;case 22:if(k=t!==null&&t.memoizedState!==null,e.mode&1?(Te=(y=Te)||k,un(n,e),Te=y):un(n,e),vn(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!k&&(e.mode&1)!==0)for(_=e,k=e.child;k!==null;){for(b=_=k;_!==null;){switch(w=_,C=w.child,w.tag){case 0:case 11:case 14:case 15:vr(4,w,w.return);break;case 1:Rt(w,w.return);var P=w.stateNode;if(typeof P.componentWillUnmount=="function"){r=w,t=w.return;try{n=r,P.props=n.memoizedProps,P.state=n.memoizedState,P.componentWillUnmount()}catch(L){ce(r,t,L)}}break;case 5:Rt(w,w.return);break;case 22:if(w.memoizedState!==null){vu(b);continue}}C!==null?(C.return=w,_=C):vu(b)}k=k.sibling}e:for(k=null,b=e;;){if(b.tag===5){if(k===null){k=b;try{o=b.stateNode,y?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=b.stateNode,d=b.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Jl("display",l))}catch(L){ce(e,e.return,L)}}}else if(b.tag===6){if(k===null)try{b.stateNode.nodeValue=y?"":b.memoizedProps}catch(L){ce(e,e.return,L)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;k===b&&(k=null),b=b.return}k===b&&(k=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:un(n,e),vn(e),r&4&&hu(e);break;case 21:break;default:un(n,e),vn(e)}}function vn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(du(t)){var r=t;break e}t=t.return}throw Error(c(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ft(o,""),r.flags&=-33);var i=fu(e);dl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=fu(e);cl(e,u,l);break;default:throw Error(c(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dd(e,n,t){_=e,gu(e)}function gu(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||yo;if(!l){var u=o.alternate,d=u!==null&&u.memoizedState!==null||Te;u=yo;var y=Te;if(yo=l,(Te=d)&&!y)for(_=o;_!==null;)l=_,d=l.child,l.tag===22&&l.memoizedState!==null?wu(o):d!==null?(d.return=l,_=d):wu(o);for(;i!==null;)_=i,gu(i),i=i.sibling;_=o,yo=u,Te=y}yu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,_=i):yu(e)}}function yu(e){for(;_!==null;){var n=_;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Te||vo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Te)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&va(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}va(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var y=n.alternate;if(y!==null){var k=y.memoizedState;if(k!==null){var b=k.dehydrated;b!==null&&Jt(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Te||n.flags&512&&ul(n)}catch(w){ce(n,n.return,w)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function vu(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function wu(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{vo(4,n)}catch(d){ce(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(d){ce(n,o,d)}}var i=n.return;try{ul(n)}catch(d){ce(n,i,d)}break;case 5:var l=n.return;try{ul(n)}catch(d){ce(n,l,d)}}}catch(d){ce(n,n.return,d)}if(n===e){_=null;break}var u=n.sibling;if(u!==null){u.return=n.return,_=u;break}_=n.return}}var Od=Math.ceil,wo=be.ReactCurrentDispatcher,fl=be.ReactCurrentOwner,Ze=be.ReactCurrentBatchConfig,K=0,ye=null,pe=null,xe=0,$e=0,Dt=Bn(0),me=0,wr=null,at=0,xo=0,pl=0,xr=null,De=null,hl=0,Ot=1/0,_n=null,ko=!1,ml=null,Kn=null,bo=!1,Qn=null,So=0,kr=0,gl=null,No=-1,Eo=0;function _e(){return(K&6)!==0?de():No!==-1?No:No=de()}function Gn(e){return(e.mode&1)===0?1:(K&2)!==0&&xe!==0?xe&-xe:wd.transition!==null?(Eo===0&&(Eo=fs()),Eo):(e=X,e!==0||(e=window.event,e=e===void 0?16:ks(e.type)),e)}function cn(e,n,t,r){if(50<kr)throw kr=0,gl=null,Error(c(185));Vt(e,t,r),((K&2)===0||e!==ye)&&(e===ye&&((K&2)===0&&(xo|=t),me===4&&Yn(e,xe)),Oe(e,r),t===1&&K===0&&(n.mode&1)===0&&(Ot=de()+500,Xr&&Un()))}function Oe(e,n){var t=e.callbackNode;wc(e,n);var r=Ar(e,e===ye?xe:0);if(r===0)t!==null&&us(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&us(t),n===1)e.tag===0?vd(ku.bind(null,e)):la(ku.bind(null,e)),hd(function(){(K&6)===0&&Un()}),t=null;else{switch(ps(r)){case 1:t=Yo;break;case 4:t=cs;break;case 16:t=_r;break;case 536870912:t=ds;break;default:t=_r}t=_u(t,xu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function xu(e,n){if(No=-1,Eo=0,(K&6)!==0)throw Error(c(327));var t=e.callbackNode;if(It()&&e.callbackNode!==t)return null;var r=Ar(e,e===ye?xe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=To(e,r);else{n=r;var o=K;K|=2;var i=Su();(ye!==e||xe!==n)&&(_n=null,Ot=de()+500,ct(e,n));do try{Fd();break}catch(u){bu(e,u)}while(!0);Ri(),wo.current=i,K=o,pe!==null?n=0:(ye=null,xe=0,n=me)}if(n!==0){if(n===2&&(o=Jo(e),o!==0&&(r=o,n=yl(e,o))),n===1)throw t=wr,ct(e,0),Yn(e,r),Oe(e,de()),t;if(n===6)Yn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Id(o)&&(n=To(e,r),n===2&&(i=Jo(e),i!==0&&(r=i,n=yl(e,i))),n===1))throw t=wr,ct(e,0),Yn(e,r),Oe(e,de()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(c(345));case 2:dt(e,De,_n);break;case 3:if(Yn(e,r),(r&130023424)===r&&(n=hl+500-de(),10<n)){if(Ar(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Si(dt.bind(null,e,De,_n),n);break}dt(e,De,_n);break;case 4:if(Yn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var l=31-rn(r);i=1<<l,l=n[l],l>o&&(o=l),r&=~i}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Od(r/1960))-r,10<r){e.timeoutHandle=Si(dt.bind(null,e,De,_n),r);break}dt(e,De,_n);break;case 5:dt(e,De,_n);break;default:throw Error(c(329))}}}return Oe(e,de()),e.callbackNode===t?xu.bind(null,e):null}function yl(e,n){var t=xr;return e.current.memoizedState.isDehydrated&&(ct(e,n).flags|=256),e=To(e,n),e!==2&&(n=De,De=t,n!==null&&vl(n)),e}function vl(e){De===null?De=e:De.push.apply(De,e)}function Id(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!on(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yn(e,n){for(n&=~pl,n&=~xo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-rn(n),r=1<<t;e[t]=-1,n&=~r}}function ku(e){if((K&6)!==0)throw Error(c(327));It();var n=Ar(e,0);if((n&1)===0)return Oe(e,de()),null;var t=To(e,n);if(e.tag!==0&&t===2){var r=Jo(e);r!==0&&(n=r,t=yl(e,r))}if(t===1)throw t=wr,ct(e,0),Yn(e,n),Oe(e,de()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,dt(e,De,_n),Oe(e,de()),null}function wl(e,n){var t=K;K|=1;try{return e(n)}finally{K=t,K===0&&(Ot=de()+500,Xr&&Un())}}function ut(e){Qn!==null&&Qn.tag===0&&(K&6)===0&&It();var n=K;K|=1;var t=Ze.transition,r=X;try{if(Ze.transition=null,X=1,e)return e()}finally{X=r,Ze.transition=t,K=n,(K&6)===0&&Un()}}function xl(){$e=Dt.current,re(Dt)}function ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pd(t)),pe!==null)for(t=pe.return;t!==null;){var r=t;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:Lt(),re(Le),re(Se),Ui();break;case 5:Bi(r);break;case 4:Lt();break;case 13:re(se);break;case 19:re(se);break;case 10:Di(r.type._context);break;case 22:case 23:xl()}t=t.return}if(ye=e,pe=e=Jn(e.current,null),xe=$e=n,me=0,wr=null,pl=xo=at=0,De=xr=null,it!==null){for(n=0;n<it.length;n++)if(t=it[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}t.pending=r}it=null}return e}function bu(e,n){do{var t=pe;try{if(Ri(),ao.current=po,uo){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(st=0,ge=he=ae=null,pr=!1,hr=0,fl.current=null,t===null||t.return===null){me=1,wr=n,pe=null;break}e:{var i=e,l=t.return,u=t,d=n;if(n=xe,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var y=d,k=u,b=k.tag;if((k.mode&1)===0&&(b===0||b===11||b===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var C=Qa(l);if(C!==null){C.flags&=-257,Ga(C,l,u,i,n),C.mode&1&&Ka(i,y,n),n=C,d=y;var P=n.updateQueue;if(P===null){var L=new Set;L.add(d),n.updateQueue=L}else P.add(d);break e}else{if((n&1)===0){Ka(i,y,n),kl();break e}d=Error(c(426))}}else if(le&&u.mode&1){var fe=Qa(l);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),Ga(fe,l,u,i,n),Li(At(d,u));break e}}i=d=At(d,u),me!==4&&(me=2),xr===null?xr=[i]:xr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var m=$a(i,d,n);ya(i,m);break e;case 1:u=d;var f=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kn===null||!Kn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var N=Va(i,u,n);ya(i,N);break e}}i=i.return}while(i!==null)}Eu(t)}catch(A){n=A,pe===t&&t!==null&&(pe=t=t.return);continue}break}while(!0)}function Su(){var e=wo.current;return wo.current=po,e===null?po:e}function kl(){(me===0||me===3||me===2)&&(me=4),ye===null||(at&268435455)===0&&(xo&268435455)===0||Yn(ye,xe)}function To(e,n){var t=K;K|=2;var r=Su();(ye!==e||xe!==n)&&(_n=null,ct(e,n));do try{Md();break}catch(o){bu(e,o)}while(!0);if(Ri(),K=t,wo.current=r,pe!==null)throw Error(c(261));return ye=null,xe=0,me}function Md(){for(;pe!==null;)Nu(pe)}function Fd(){for(;pe!==null&&!cc();)Nu(pe)}function Nu(e){var n=Cu(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?Eu(e):pe=n,fl.current=null}function Eu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Pd(t,n,$e),t!==null){pe=t;return}}else{if(t=Ld(t,n),t!==null){t.flags&=32767,pe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,pe=null;return}}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);me===0&&(me=5)}function dt(e,n,t){var r=X,o=Ze.transition;try{Ze.transition=null,X=1,Bd(e,n,t,r)}finally{Ze.transition=o,X=r}return null}function Bd(e,n,t,r){do It();while(Qn!==null);if((K&6)!==0)throw Error(c(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(xc(e,i),e===ye&&(pe=ye=null,xe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||bo||(bo=!0,_u(_r,function(){return It(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=Ze.transition,Ze.transition=null;var l=X;X=1;var u=K;K|=4,fl.current=null,Rd(e,t),mu(t,e),ld(ki),Or=!!xi,ki=xi=null,e.current=t,Dd(t),dc(),K=u,X=l,Ze.transition=i}else e.current=t;if(bo&&(bo=!1,Qn=e,So=o),i=e.pendingLanes,i===0&&(Kn=null),hc(t.stateNode),Oe(e,de()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(ko)throw ko=!1,e=ml,ml=null,e;return(So&1)!==0&&e.tag!==0&&It(),i=e.pendingLanes,(i&1)!==0?e===gl?kr++:(kr=0,gl=e):kr=0,Un(),null}function It(){if(Qn!==null){var e=ps(So),n=Ze.transition,t=X;try{if(Ze.transition=null,X=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,So=0,(K&6)!==0)throw Error(c(331));var o=K;for(K|=4,_=e.current;_!==null;){var i=_,l=i.child;if((_.flags&16)!==0){var u=i.deletions;if(u!==null){for(var d=0;d<u.length;d++){var y=u[d];for(_=y;_!==null;){var k=_;switch(k.tag){case 0:case 11:case 15:vr(8,k,i)}var b=k.child;if(b!==null)b.return=k,_=b;else for(;_!==null;){k=_;var w=k.sibling,C=k.return;if(cu(k),k===y){_=null;break}if(w!==null){w.return=C,_=w;break}_=C}}}var P=i.alternate;if(P!==null){var L=P.child;if(L!==null){P.child=null;do{var fe=L.sibling;L.sibling=null,L=fe}while(L!==null)}}_=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:vr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,_=m;break e}_=i.return}}var f=e.current;for(_=f;_!==null;){l=_;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,_=g;else e:for(l=f;_!==null;){if(u=_,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:vo(9,u)}}catch(A){ce(u,u.return,A)}if(u===l){_=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,_=N;break e}_=u.return}}if(K=o,Un(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(zr,e)}catch{}r=!0}return r}finally{X=t,Ze.transition=n}}return!1}function Tu(e,n,t){n=At(t,n),n=$a(e,n,1),e=$n(e,n,1),n=_e(),e!==null&&(Vt(e,1,n),Oe(e,n))}function ce(e,n,t){if(e.tag===3)Tu(e,e,t);else for(;n!==null;){if(n.tag===3){Tu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=At(t,e),e=Va(n,e,1),n=$n(n,e,1),e=_e(),n!==null&&(Vt(n,1,e),Oe(n,e));break}}n=n.return}}function Hd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=_e(),e.pingedLanes|=e.suspendedLanes&t,ye===e&&(xe&t)===t&&(me===4||me===3&&(xe&130023424)===xe&&500>de()-hl?ct(e,0):pl|=t),Oe(e,n)}function ju(e,n){n===0&&((e.mode&1)===0?n=1:(n=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var t=_e();e=Tn(e,n),e!==null&&(Vt(e,n,t),Oe(e,t))}function Ud(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ju(e,t)}function Wd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(n),ju(e,t)}var Cu;Cu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Le.current)Re=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Re=!1,zd(e,n,t);Re=(e.flags&131072)!==0}else Re=!1,le&&(n.flags&1048576)!==0&&sa(n,eo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;go(e,n),e=n.pendingProps;var o=Et(n,Se.current);Pt(n,t),o=Vi(null,n,r,e,o,t);var i=Ki();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(r)?(i=!0,Zr(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Mi(n),o.updater=ho,n.stateNode=o,o._reactInternals=n,Xi(n,r,e,t),n=tl(null,n,r,!0,i,t)):(n.tag=0,le&&i&&Ci(n),Ce(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(go(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Vd(r),e=sn(r,e),o){case 0:n=nl(null,n,r,e,t);break e;case 1:n=eu(null,n,r,e,t);break e;case 11:n=Ya(null,n,r,e,t);break e;case 14:n=Ja(null,n,r,sn(r.type,e),t);break e}throw Error(c(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),nl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),eu(e,n,r,o,t);case 3:e:{if(nu(n),e===null)throw Error(c(387));r=n.pendingProps,i=n.memoizedState,o=i.element,ga(e,n),lo(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=At(Error(c(423)),n),n=tu(e,n,r,t,o);break e}else if(r!==o){o=At(Error(c(424)),n),n=tu(e,n,r,t,o);break e}else for(We=Fn(n.stateNode.containerInfo.firstChild),Ue=n,le=!0,ln=null,t=ha(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ct(),r===o){n=Cn(e,n,t);break e}Ce(e,n,r,t)}n=n.child}return n;case 5:return wa(n),e===null&&Pi(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,bi(r,o)?l=null:i!==null&&bi(r,i)&&(n.flags|=32),qa(e,n),Ce(e,n,l,t),n.child;case 6:return e===null&&Pi(n),null;case 13:return ru(e,n,t);case 4:return Fi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=_t(n,null,r,t):Ce(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),Ya(e,n,r,o,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,l=o.value,ne(ro,r._currentValue),r._currentValue=l,i!==null)if(on(i.value,l)){if(i.children===o.children&&!Le.current){n=Cn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=jn(-1,t&-t),d.tag=2;var y=i.updateQueue;if(y!==null){y=y.shared;var k=y.pending;k===null?d.next=d:(d.next=k.next,k.next=d),y.pending=d}}i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Oi(i.return,t,n),u.lanes|=t;break}d=d.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(c(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Oi(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Pt(n,t),o=Ye(o),r=r(o),n.flags|=1,Ce(e,n,r,t),n.child;case 14:return r=n.type,o=sn(r,n.pendingProps),o=sn(r.type,o),Ja(e,n,r,o,t);case 15:return Za(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:sn(r,o),go(e,n),n.tag=1,Ae(r)?(e=!0,Zr(n)):e=!1,Pt(n,t),Ua(n,r,o),Xi(n,r,o,t),tl(null,n,r,!0,e,t);case 19:return iu(e,n,t);case 22:return Xa(e,n,t)}throw Error(c(156,n.tag))};function _u(e,n){return as(e,n)}function $d(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,n,t,r){return new $d(e,n,t,r)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vd(e){if(typeof e=="function")return bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fn)return 11;if(e===pn)return 14}return 2}function Jn(e,n){var t=e.alternate;return t===null?(t=Xe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function jo(e,n,t,r,o,i){var l=2;if(r=e,typeof e=="function")bl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ze:return ft(t.children,o,i,n);case Ke:l=8,o|=8;break;case Ln:return e=Xe(12,t,n,o|2),e.elementType=Ln,e.lanes=i,e;case Fe:return e=Xe(13,t,n,o),e.elementType=Fe,e.lanes=i,e;case tn:return e=Xe(19,t,n,o),e.elementType=tn,e.lanes=i,e;case ue:return Co(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kn:l=10;break e;case qn:l=9;break e;case fn:l=11;break e;case pn:l=14;break e;case Pe:l=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return n=Xe(l,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function ft(e,n,t,r){return e=Xe(7,e,r,n),e.lanes=t,e}function Co(e,n,t,r){return e=Xe(22,e,r,n),e.elementType=ue,e.lanes=t,e.stateNode={isHidden:!1},e}function Sl(e,n,t){return e=Xe(6,e,null,n),e.lanes=t,e}function Nl(e,n,t){return n=Xe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Kd(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function El(e,n,t,r,o,i,l,u,d){return e=new Kd(e,n,t,u,d),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Xe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mi(i),e}function Qd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function zu(e){if(!e)return Hn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(c(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(Ae(t))return oa(e,t,n)}return n}function Pu(e,n,t,r,o,i,l,u,d){return e=El(t,r,!0,e,o,i,l,u,d),e.context=zu(null),t=e.current,r=_e(),o=Gn(t),i=jn(r,o),i.callback=n??null,$n(t,i,o),e.current.lanes=o,Vt(e,o,r),Oe(e,r),e}function _o(e,n,t,r){var o=n.current,i=_e(),l=Gn(o);return t=zu(t),n.context===null?n.context=t:n.pendingContext=t,n=jn(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=$n(o,n,l),e!==null&&(cn(e,o,l,i),io(e,o,l)),l}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Tl(e,n){Lu(e,n),(e=e.alternate)&&Lu(e,n)}function Gd(){return null}var Au=typeof reportError=="function"?reportError:function(e){console.error(e)};function jl(e){this._internalRoot=e}Po.prototype.render=jl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));_o(e,n,null,null)},Po.prototype.unmount=jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ut(function(){_o(null,e,null,null)}),n[bn]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var n=gs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<On.length&&n!==0&&n<On[t].priority;t++);On.splice(t,0,e),t===0&&ws(e)}};function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Yd(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var y=zo(l);i.call(y)}}var l=Pu(n,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=l,e[bn]=l.current,ir(e.nodeType===8?e.parentNode:e),ut(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var y=zo(d);u.call(y)}}var d=El(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=d,e[bn]=d.current,ir(e.nodeType===8?e.parentNode:e),ut(function(){_o(n,d,t,r)}),d}function Ao(e,n,t,r,o){var i=t._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var d=zo(l);u.call(d)}}_o(n,l,e,o)}else l=Yd(t,n,e,o,r);return zo(l)}hs=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=$t(n.pendingLanes);t!==0&&(Xo(n,t|1),Oe(n,de()),(K&6)===0&&(Ot=de()+500,Un()))}break;case 13:ut(function(){var r=Tn(e,1);if(r!==null){var o=_e();cn(r,e,1,o)}}),Tl(e,1)}},qo=function(e){if(e.tag===13){var n=Tn(e,134217728);if(n!==null){var t=_e();cn(n,e,134217728,t)}Tl(e,134217728)}},ms=function(e){if(e.tag===13){var n=Gn(e),t=Tn(e,n);if(t!==null){var r=_e();cn(t,e,n,r)}Tl(e,n)}},gs=function(){return X},ys=function(e,n){var t=X;try{return X=e,n()}finally{X=t}},Vo=function(e,n,t){switch(n){case"input":if(Io(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Yr(r);if(!o)throw Error(c(90));Hl(r),Io(r,o)}}}break;case"textarea":Kl(e,t);break;case"select":n=t.value,n!=null&&pt(e,!!t.multiple,n,!1)}},ns=wl,ts=ut;var Jd={usingClientEntryPoint:!1,Events:[ar,St,Yr,ql,es,wl]},br={findFiberByHostInstance:nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ls(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Gd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{zr=Ro.inject(Zd),hn=Ro}catch{}}return Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jd,Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cl(n))throw Error(c(200));return Qd(e,n,null,t)},Ie.createRoot=function(e,n){if(!Cl(e))throw Error(c(299));var t=!1,r="",o=Au;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=El(e,1,!1,null,null,t,!1,r,o),e[bn]=n.current,ir(e.nodeType===8?e.parentNode:e),new jl(n)},Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ls(n),e=e===null?null:e.stateNode,e},Ie.flushSync=function(e){return ut(e)},Ie.hydrate=function(e,n,t){if(!Lo(n))throw Error(c(200));return Ao(null,e,n,!0,t)},Ie.hydrateRoot=function(e,n,t){if(!Cl(e))throw Error(c(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",l=Au;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Pu(n,null,e,1,t??null,o,!1,i,l),e[bn]=n.current,ir(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Po(n)},Ie.render=function(e,n,t){if(!Lo(n))throw Error(c(200));return Ao(null,e,n,!1,t)},Ie.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(c(40));return e._reactRootContainer?(ut(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},Ie.unstable_batchedUpdates=wl,Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Lo(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ao(e,n,t,!1,r)},Ie.version="18.3.1-next-f1338f8080-20240426",Ie}var Uu;function lf(){if(Uu)return Pl.exports;Uu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(p){console.error(p)}}return s(),Pl.exports=of(),Pl.exports}var Wu;function sf(){if(Wu)return Do;Wu=1;var s=lf();return Do.createRoot=s.createRoot,Do.hydrateRoot=s.hydrateRoot,Do}var af=sf();const Il="/fantasy/data/",Ml=s=>fetch(s).then(p=>p.ok?p.json():Promise.reject(new Error(`${p.status} ${s}`))),uf=()=>Ml(`${Il}books/index.json`),cf=s=>Ml(`${Il}books/${s}/index.json`),df=(s,p)=>Ml(`${Il}books/${s}/w${p}.json`);async function ff(s){const{weeks:p}=await cf(s),c=await Promise.all(p.map(v=>df(s,v)));return{weeks:p,sheets:c}}function $u(s){if(!s)return null;const p=s[0]==="−"||s[0]==="-",c=Number(s.slice(1));return Number.isFinite(c)?p?c/(c+100):100/(c+100):null}function Fl({now:s,was:p,prefix:c=""}){if(!s||!p||s===p)return null;const v=$u(p),E=$u(s);if(v==null||E==null)return null;const T=E>v;return a.jsxs("span",{className:`bk-move ${T?"up":"down"}`,children:[T?"▲":"▼"," ",c,p," → ",s]})}const Vu=864e5;function Ku(s,p=Date.now()){if(!s)return null;const c=Date.parse(`${s.start}T00:00:00Z`),v=Date.parse(`${s.payout}T00:00:00Z`),E=Math.max(0,Math.min(p,v)-c)/Vu,T=(v-c)/Vu,R=F=>s.principal*((1+s.apy)**(F/365)-1);return{now:R(E),atPayout:R(T),days:Math.floor(E),totalDays:Math.round(T),apy:s.apy,principal:s.principal,settled:p>=v}}const Rl=s=>s.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),pf=s=>s.money.reduce((p,c)=>p+c.pct,0);function hf({standings:s,payingPlaces:p,structure:c,stakes:v,Panel:E}){const T=s[0].dist.length,R=new Set(p),F=c==="winner-take-all";return a.jsxs(E,{title:"PROJECTED STANDINGS",blurb:F?"Where every seat actually finishes, across 25,000 simulated seasons. The gold block is first place — the only finish in this league worth money. Everything to the right of it is the same season with nothing at the end of it.":"Where every seat actually finishes, across 25,000 simulated seasons. The gold blocks are the four finishes that pay; the wider a seat's gold, the more often its season ends with money. Hover any block for the price on that exact finish.",children:[a.jsxs("div",{className:"fb-standings",children:[a.jsxs("div",{className:"fb-st-head",children:[a.jsx("span",{className:"fb-st-rank",children:"#"}),a.jsx("span",{className:"fb-st-seat",children:"SEAT"}),a.jsx("span",{className:"fb-st-num",children:"PROJ"}),a.jsx("span",{className:"fb-st-num",children:"RECORD"}),a.jsx("span",{className:"fb-st-num",children:"PTS"}),a.jsxs("span",{className:"fb-st-dist",children:["FINISH DISTRIBUTION — 1ST (",T,"TH) "]}),a.jsx("span",{className:"fb-st-num",children:F?"WINS":"MONEY"}),a.jsx("span",{className:"fb-st-num",children:"LAST"})]}),s.map(S=>a.jsxs("div",{className:"fb-st-row",children:[a.jsx("span",{className:"fb-st-rank",children:S.rank}),a.jsxs("span",{className:"fb-st-seat",children:[a.jsx("span",{className:"fb-st-team",children:S.team}),a.jsx("span",{className:"fb-st-mgr",children:S.manager})]}),a.jsx("span",{className:"fb-st-num strong",children:S.projFinish.toFixed(1)}),a.jsxs("span",{className:"fb-st-num",children:[S.projWins.toFixed(1),"–",S.projLosses.toFixed(1)]}),a.jsx("span",{className:"fb-st-num",children:S.projPoints.toLocaleString("en-US")}),a.jsx("span",{className:"fb-st-dist",children:S.dist.map((I,Q)=>{const H=Q+1,U=S.money.find(ke=>ke.place===H);return a.jsx("span",{className:R.has(H)?"fb-seg pays":"fb-seg",style:{flexGrow:Math.max(I,.15)},title:U?`${Qu(H)} — ${U.label} — ${U.pct}% — ${U.price}`:`${Qu(H)} — ${I}%${H===T?" — last":""}`},H)})}),a.jsxs("span",{className:"fb-st-num strong",children:[pf(S).toFixed(1),"%"]}),a.jsxs("span",{className:"fb-st-num dim",children:[S.last,"%"]})]},S.rosterId))]}),a.jsxs("p",{className:"fb-note",children:["PROJ is the average finishing place across every simulated season, so it moves before any single market does — a seat can drift from 6.4 to 6.9 without its championship price changing at all."," ",F?"Only first place pays in this league, so the MONEY column is the championship number.":"MONEY is the chance of finishing in one of the four paying places — first, second, third, or fourth exactly."]})]})}const Qu=s=>`${s}${["th","st","nd","rd"][s%100>>3^1&&s%10]||"th"}`;function mf({sheet:s,prev:p,Panel:c}){const{futures:v,stakes:E}=s,T=v.structure==="winner-take-all",R=I=>v.markets.find(Q=>Q.key===I),F=I=>{var Q,H,U;return(U=(H=(Q=p==null?void 0:p.futures)==null?void 0:Q.markets)==null?void 0:H.find(ke=>ke.key===I))==null?void 0:U.rows},S=({market:I,blurb:Q,compact:H})=>{const U=R(I);return U?a.jsx(c,{title:U.pays?`${U.name} — PAYS ${U.pays.toUpperCase()}`:U.name,blurb:U.copy??Q,children:a.jsx(gf,{rows:U.rows,prevRows:F(I),compact:H})}):null};return a.jsxs(a.Fragment,{children:[a.jsx(hf,{standings:v.standings,payingPlaces:v.payingPlaces,structure:v.structure,stakes:E,Panel:c}),a.jsx(S,{market:"championship",blurb:T?`${E.pot}, winner take all. Nobody else gets a cent, which makes this the entire financial book — every other market on this sheet is pride.`:"The headline, and the only board here that is not a slice of the table above: winning the bracket is not the same question as finishing high, because three playoff weeks are three more coin flips."}),!T&&a.jsx(yf,{sheet:s,Panel:c}),a.jsx(S,{market:"lastPlace"}),a.jsx(c,{title:"SEASON WIN TOTALS",blurb:"Over/under on regular-season wins, per seat. The line is the half-win the simulated seasons split closest to evenly; unlike a weekly total, wins are integers, so these are priced on the real number rather than posted flat.",children:a.jsx("div",{className:"fb-wintotals",children:[...v.winTotals].sort((I,Q)=>Q.expected-I.expected).map(I=>a.jsxs("div",{className:"fb-wintotal",children:[a.jsx("span",{className:"fb-wintotal-name",children:I.team}),a.jsx("span",{className:"fb-wintotal-line",children:I.line.toFixed(1)}),a.jsxs("span",{className:"fb-wintotal-prices",children:["O ",I.over," · U ",I.under]}),a.jsxs("span",{className:"fb-wintotal-exp",children:[I.expected," proj"]})]},I.rosterId))})})]})}function gf({rows:s,prevRows:p,compact:c}){const v=Math.max(...s.map(E=>E.pct),1);return a.jsx("div",{className:"fb-runners",children:s.map((E,T)=>{var R;return a.jsxs("div",{className:T===0?"fb-runner lead":"fb-runner",children:[a.jsxs("span",{className:"fb-runner-main",children:[a.jsx("span",{className:"fb-runner-team",children:E.team}),a.jsx("span",{className:"fb-bar",style:{width:`${E.pct/v*100}%`}}),!c&&a.jsx("span",{className:"fb-runner-mgr",children:E.manager})]}),a.jsxs("span",{className:"fb-runner-pct",children:[E.pct,"%"]}),a.jsxs("span",{className:"bk-line-right",children:[a.jsx(Fl,{now:E.price,was:(R=p==null?void 0:p.find(F=>F.rosterId===E.rosterId))==null?void 0:R.price}),a.jsx("span",{className:"bk-price",children:E.price??"OFF"})]})]},E.rosterId)})})}function yf({sheet:s,Panel:p}){var T,R;const c=s.stakes.hysa,[v,E]=Pn.useState(()=>Ku(c));return Pn.useEffect(()=>{if(!c)return;const F=setInterval(()=>E(Ku(c)),6e4);return()=>clearInterval(F)},[c]),a.jsx(p,{title:"THE INTEREST — 4TH EXACTLY",blurb:c?`First takes ${(T=s.stakes.payouts[0])==null?void 0:T.label}, second ${(R=s.stakes.payouts[1])==null?void 0:R.label}, third gets the buy-in back. Fourth gets the interest the pot has earned sitting in a savings account at ${(c.apy*100).toFixed(2)}% APY. That is a real prize, this is what it is worth right now, and the fourth block of every bar above is who is most likely to collect it.`:"Fourth place, exactly.",children:v&&a.jsxs("div",{className:"fb-headline",children:[a.jsxs("span",{children:[a.jsx("span",{className:"fb-headline-label",children:Rl(v.now)}),a.jsxs("span",{className:"fb-headline-copy",children:["accrued on ",Rl(v.principal)," over ",v.days," of ",v.totalDays," days ·"," ",v.settled?"final":`${Rl(v.atPayout)} if it runs to payout`]})]}),a.jsx("span",{className:"fb-headline-price",children:"4TH"})]})})}let vf=0;const qe=()=>`md${vf++}`;function wn({text:s,className:p}){if(!s)return null;const c=s.trim().split(/\n{2,}/);return a.jsx("div",{className:p,children:c.map(v=>wf(v))})}function wf(s){const p=s.split(`
`);return/^###\s/.test(p[0])?a.jsx("h3",{className:"md-h3",children:zn(p[0].replace(/^###\s+/,""))},qe()):/^(---|\*\*\*)$/.test(p[0].trim())?a.jsx("hr",{className:"md-hr"},qe()):p.every(c=>/^>\s?/.test(c))?a.jsx("blockquote",{className:"md-quote",children:zn(p.map(c=>c.replace(/^>\s?/,"")).join(" "))},qe()):p.every(c=>/^[-*]\s+/.test(c))?a.jsx("ul",{className:"md-list",children:p.map(c=>a.jsx("li",{children:zn(c.replace(/^[-*]\s+/,""))},qe()))},qe()):p.every(c=>/^\d+\.\s+/.test(c))?a.jsx("ol",{className:"md-list",children:p.map(c=>a.jsx("li",{children:zn(c.replace(/^\d+\.\s+/,""))},qe()))},qe()):a.jsx("p",{className:"md-p",children:zn(p.join(" "))},qe())}const xf=[{re:/`([^`]+)`/,render:s=>a.jsx("code",{className:"md-code",children:s[1]},qe())},{re:/\*\*([^*]+)\*\*/,render:s=>a.jsx("strong",{children:zn(s[1])},qe())},{re:/(?:\*|_)([^*_]+)(?:\*|_)/,render:s=>a.jsx("em",{children:zn(s[1])},qe())},{re:/\[([^\]]+)\]\(([^)]+)\)/,render:s=>a.jsx("a",{className:"bk-link",href:s[2],children:zn(s[1])},qe())}];function zn(s){let p=null;for(const E of xf){const T=s.match(E.re);T&&(p==null||T.index<p.at.index)&&(p={rule:E,at:T})}if(!p)return s;const{rule:c,at:v}=p;return[s.slice(0,v.index),c.render(v),...[].concat(zn(s.slice(v.index+v[0].length)))]}function kf({settled:s,punishment:p,Panel:c,note:v,benchNote:E}){const{reportCard:T}=s;return a.jsxs(a.Fragment,{children:[a.jsxs(c,{title:`HOW WEEK ${s.week} SETTLED`,blurb:v?null:"Final scores against the lines this book posted last Wednesday. Side A is the side that was favoured.",children:[v&&a.jsx(wn,{text:v,className:"fb-prose-cols"}),a.jsxs("div",{className:"fb-settled-head",children:[a.jsx("span",{children:"RESULT"}),a.jsx("span",{children:"LINE"}),a.jsx("span",{className:"spread",children:"ATS"}),a.jsx("span",{className:"total",children:"TOTAL"})]}),a.jsx("div",{className:"fb-card",children:s.matchups.map(R=>a.jsx(bf,{m:R},`${R.a.rosterId}-${R.b.rosterId}`))}),a.jsxs("div",{className:"fb-report",children:[a.jsx("h3",{className:"fb-report-title",children:"THE MODEL'S REPORT CARD"}),a.jsxs("div",{className:"fb-report-grid",children:[a.jsx(Dl,{label:"FAVOURITES SU",record:T.straightUp}),a.jsx(Dl,{label:"FAVOURITES ATS",record:T.ats}),a.jsx(Dl,{label:"TOTALS — OVER",record:T.total}),a.jsxs("div",{className:"fb-report-cell",children:[a.jsx("span",{className:"fb-report-num",children:T.brier.toFixed(3)}),a.jsx("span",{className:"fb-report-label",children:"BRIER SCORE"}),a.jsxs("span",{className:"fb-report-note",children:[T.brier<T.coinFlip?"better":"worse"," than ",T.coinFlip.toFixed(2),", which is what you score by calling every game a coin flip"]})]})]}),a.jsxs("p",{className:"fb-note",children:["The book expected ",T.expectedChalkWins.toFixed(2)," of its ",T.games," favourites to win. "," ",T.straightUp.w," did. Prices are graded on the fair probability, before the house margin — the margin is the book's edge, not the model's opinion."]})]})]}),a.jsxs("div",{className:"fb-grid2",children:[a.jsxs(c,{title:`${s.punishment.low.name} — SETTLED`,blurb:p.weekly.copy,children:[a.jsx(Gu,{outcome:s.punishment.low,verb:"took it",copy:s.punishment.low.hitFavourite?"The board's own favourite. The book called this one.":`Priced ${s.punishment.low.price}, ${Zu(s.punishment.low.rank)} of ${s.punishment.low.of} on the board.`}),s.punishment.high&&a.jsx(Gu,{outcome:s.punishment.high,verb:"picks",copy:`${s.punishment.high.name} — ${s.punishment.high.price} on the board, ${Zu(s.punishment.high.rank)} of ${s.punishment.high.of}.`}),s.punishment.joint&&a.jsx("p",{className:"fb-note",children:s.punishment.joint.hit?a.jsxs(a.Fragment,{children:["The joint ",a.jsx("b",{children:"hit"})," at ",s.punishment.joint.hit.price,". It was one of"," ",s.punishment.joint.offered," priced pairings out of"," ",s.punishment.joint.offered>1?"dozens":"many"," possible."]}):a.jsxs(a.Fragment,{children:["None of the ",s.punishment.joint.offered," featured joints hit — the pairing that landed was"," ",s.punishment.joint.low.team," and ",s.punishment.joint.high.team,", which the sheet did not print."]})})]}),a.jsxs(c,{title:"POINTS LEFT ON THE BENCH",blurb:"Every line on last week's sheet assumed an optimal lineup. This is what that assumption actually cost, scored on real points — the model's own §5.4 bias, measured rather than disclosed.",children:[E&&a.jsx(wn,{text:E,className:"fb-panel-prose"}),a.jsx("div",{className:"fb-bench",children:s.bench.slice(0,5).map((R,F)=>a.jsxs("div",{className:F===0?"fb-bench-row lead":"fb-bench-row",children:[a.jsxs("span",{className:"fb-bench-main",children:[a.jsx("span",{className:"fb-runner-team",children:R.team}),a.jsxs("span",{className:"fb-runner-mgr",children:[R.points.toFixed(2)," of a possible ",R.best.toFixed(2),R.missed.length>0&&a.jsxs(a.Fragment,{children:[" · benched ",R.missed.map(S=>`${S.name} ${S.points.toFixed(1)}`).join(", ")]})]})]}),a.jsxs("span",{className:"bk-price",children:["−",R.left.toFixed(1)]})]},R.rosterId))})]})]})]})}const Dl=({label:s,record:p})=>a.jsxs("div",{className:"fb-report-cell",children:[a.jsxs("span",{className:"fb-report-num",children:[p.w,"–",p.l,p.p?`–${p.p}`:""]}),a.jsx("span",{className:"fb-report-label",children:s})]}),Gu=({outcome:s,verb:p,copy:c})=>a.jsxs("div",{className:"fb-verdict",children:[a.jsxs("span",{className:"fb-slip-text",children:[a.jsx("b",{children:s.team})," ",p," — ",s.points.toFixed(2),a.jsxs("span",{className:"fb-slip-note",children:[s.manager," · ",c]})]}),a.jsx("span",{className:"bk-price",children:s.price??"—"})]});function bf({m:s}){return s.played?a.jsxs("div",{className:"fb-settled",children:[a.jsxs("div",{className:"fb-seats",children:[a.jsx(Yu,{seat:s.a,points:s.a.points,won:s.winner==="a",push:s.winner==="push"}),a.jsx(Yu,{seat:s.b,points:s.b.points,won:s.winner==="b",push:s.winner==="push"})]}),a.jsxs("div",{className:"fb-cell",children:[a.jsx("span",{className:"fb-odds",children:s.posted.moneyline.a}),a.jsx(Ju,{hit:s.winner==="a",push:s.winner==="push"})]}),a.jsxs("div",{className:"fb-cell spread",children:[a.jsx("span",{className:"fb-odds",children:s.posted.spread.a}),a.jsx(Ju,{hit:s.ats==="a",push:s.ats==="push"})]}),a.jsxs("div",{className:"fb-cell total",children:[a.jsx("span",{className:"fb-odds",children:s.total.toFixed(1)}),a.jsxs("span",{className:"fb-settled-sub",children:[s.ou==="push"?"push":s.ou==="a"?"over":"under"," ",s.posted.total.line.toFixed(1)]})]})]}):null}const Yu=({seat:s,points:p,won:c,push:v})=>a.jsxs("span",{className:c?"fb-seat fav":"fb-seat",children:[a.jsx("span",{className:"fb-seat-name",children:s.team}),a.jsxs("span",{className:"fb-seat-mgr",children:[s.manager,v?" · tie":""]}),a.jsx("span",{className:"fb-seat-proj",children:p.toFixed(2)})]}),Ju=({hit:s,push:p})=>a.jsx("span",{className:p?"fb-mark push":s?"fb-mark hit":"fb-mark miss",children:p?"PUSH":s?"✓":"✗"}),Zu=s=>s==null?"unpriced":`${s}${["th","st","nd","rd"][s%100>>3^1&&s%10]||"th"}`,Sf=`---
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
`,Nf=`---
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
`,Ef=`---
league: dkenasty
week: 4
headline: WEEK 4
byline: The House
---

<!-- DKENASTY SPORTSBOOK · week 4 · seed 1592621279
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!--
     biggest edge: Yan Dynasty −240 over Saddam Hussein Al-B’esnoy (65.9%, −14.0)
     closest game: The Washington Redskins vs ETN SZN at −125 (51.3%)
     highest total: 288.5
     last week: The Washington Redskins 171.2 high, Trust the Process 87.9 low
     the book went 5-1 on favourites, Brier 0.234
-->

## settled

<!--
     favourites 5-1 SU, 3-3 ATS, totals 1-5 over
     Brier 0.234 vs 0.25 for a coin flip; expected 3.9 chalk wins, got 5
     low scorer Trust the Process 87.9 — priced +290, 1 of 12
     high scorer The Washington Redskins 171.2
     joint: did not hit
     biggest beat: Disciples of Yakub 170.5 vs 122.8 projected (+47.7)
     biggest miss: Yan Dynasty 105.8 vs 146 projected (-40.2)
-->

## bench

<!--
     Disciples of Yakub left 34.0 — Bo Nix 25.1, Kalif Raymond 21, Pat Bryant 14.4
     ETN SZN left 30.9 — Jordan Love 19.5, Keenan Allen 18.3, Keaton Mitchell 13.7
     Yan Dynasty left 29 — Michael Wilson 25.9, Brian Robinson 11, Colston Loveland 7.1
-->

## card

<!--
     the board spans 241 to 288.5 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

## matchup:11-10

<!-- The Washington Redskins vs ETN SZN
     −125 / −110 — 51.3% fair
     spread −1.0, total 254
     projected 128.1 vs 126.9
     last week The Washington Redskins: 171.2 (projected 125.3, +45.9)
     last week ETN SZN: 109.2 (projected 125.4, -16.2)
-->

## matchup:2-7

<!-- The DNs vs Empyrean Athletic
     −140 / +100 — 53.9% fair
     spread −3.5, total 288.5
     projected 147.2 vs 143.1
     last week The DNs: 133.5 (projected 153.8, -20.3)
     last week Empyrean Athletic: 119.9 (projected 133.7, -13.8)
-->

## matchup:6-1

<!-- Disciples of Yakub vs Tal top Smitty bottom
     −135 / −100 — 53.1% fair
     spread −2.5, total 259
     projected 131.1 vs 129.1
     last week Disciples of Yakub: 170.5 (projected 122.8, +47.7)
     last week Tal top Smitty bottom: 104.1 (projected 131.6, -27.5)
-->

## matchup:5-8

<!-- 3 AM afters in bull room vs Rat
     −210 / +150 — 62.6% fair
     spread −11.0, total 267.5
     projected 139.9 vs 129.2
     last week 3 AM afters in bull room: 147.7 (projected 138.5, +9.2)
     last week Rat: 129.8 (projected 133.7, -3.9)
-->

## matchup:3-12

<!-- Yan Dynasty vs Saddam Hussein Al-B’esnoy
     −240 / +175 — 65.9% fair
     spread −14.0, total 286.5
     projected 150.4 vs 137.1
     last week Yan Dynasty: 105.8 (projected 146, -40.2)
     last week Saddam Hussein Al-B’esnoy: 152.4 (projected 131.5, +20.9)
-->

## matchup:4-9

<!-- Little St. Lane’s vs Trust the Process
     −180 / +130 — 60% fair
     spread −8.0, total 241
     projected 125.1 vs 117.1
     last week Little St. Lane’s: 109.9 (projected 118.2, -8.3)
     last week Trust the Process: 87.9 (projected 115.9, -28.0)
-->

## punishment

<!-- THE PARLAY WINDOW — low scorer
     Trust the Process +260 (22.3%)
     Little St. Lane’s +520 (13%)
     ETN SZN +610 (11.3%)
-->

## lineups

<!--
     highest projected: Yan Dynasty
     forfeited slots: none
     priced off waivers: Trust the Process DEF Chicago Bears 8.6
-->

## The Film Room

<!-- Not a slot, so this becomes its own panel titled THE FILM ROOM.
     Rename it, duplicate it, or delete it. -->
`,Tf=`---
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
`,jf=`---
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
`,Cf=`---
league: loog
week: 4
headline: WEEK 4
byline: The House
---

<!-- THE ORDINARY GENTLEMEN · week 4 · seed 1592621581
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!--
     biggest edge: Jahmyracle on Ice −570 over Step Brockers (79.1%, −26.0)
     closest game: T-Posers vs The Warren Ukraine at −145 (54.9%)
     highest total: 255.5
     last week: Jahmyracle on Ice 150.8 high, ❄️ 95.1 low
     the book went 5-0 on favourites, Brier 0.179
-->

## settled

<!--
     favourites 5-0 SU, 4-1 ATS, totals 3-2 over
     Brier 0.179 vs 0.25 for a coin flip; expected 2.9 chalk wins, got 5
     low scorer ❄️ 95.1 — priced +680, 5 of 10
     high scorer Jahmyracle on Ice 150.8
     joint: did not hit
     biggest beat: McLovin 139.4 vs 119.5 projected (+19.9)
     biggest miss: ❄️ 95.1 vs 119.7 projected (-24.6)
-->

## bench

<!--
     Step Brockers left 38.8 — Kenyon Sadiq 23.5, Luther Burden 19.8, Houston Texans 11
     ❄️ left 33.4 — Michael Wilson 25.9, Rachaad White 11.1, Jameson Williams 8.9
     The Warren Ukraine left 30.1 — Harold Fannin 24.1, Los Angeles Rams 5
-->

## card

<!--
     the board spans 239 to 255.5 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

## matchup:3-10

<!-- McLovin vs bmilgram
     −195 / +140 — 61.3% fair
     spread −9.0, total 255.5
     projected 133.1 vs 123.9
     last week McLovin: 139.4 (projected 119.5, +19.9)
     last week bmilgram: 116.7 (projected 124.5, -7.8)
-->

## matchup:1-6

<!-- Easy Breece-y vs ❄️
     −230 / +165 — 65.2% fair
     spread −12.0, total 239
     projected 126.3 vs 113.7
     last week Easy Breece-y: 104.7 (projected 118.8, -14.1)
     last week ❄️: 95.1 (projected 119.7, -24.6)
-->

## matchup:5-4

<!-- aruni3 vs Skat in LaPorta Potty
     −175 / +130 — 59.2% fair
     spread −7.0, total 241.5
     projected 125 vs 118
     last week aruni3: 114.6 (projected 122.3, -7.7)
     last week Skat in LaPorta Potty: 110.1 (projected 113, -2.9)
-->

## matchup:7-2

<!-- Jahmyracle on Ice vs Step Brockers
     −570 / +340 — 79.1% fair
     spread −26.0, total 254
     projected 141.1 vs 114.5
     last week Jahmyracle on Ice: 150.8 (projected 137.2, +13.6)
     last week Step Brockers: 121.8 (projected 121.8, -0.0)
-->

## matchup:8-9

<!-- T-Posers vs The Warren Ukraine
     −145 / +105 — 54.9% fair
     spread −4.0, total 251.5
     projected 128.6 vs 124.9
     last week T-Posers: 135.9 (projected 126.8, +9.1)
     last week The Warren Ukraine: 126.1 (projected 120.3, +5.8)
-->

## punishment

<!-- LOW SCORER OF THE WEEK — low scorer
     ❄️ +320 (19%)
     Step Brockers +330 (18.8%)
     Skat in LaPorta Potty +470 (14%)
-->

## lineups

<!--
     highest projected: Jahmyracle on Ice
     forfeited slots: none
     priced off waivers: none
-->

## The Film Room

<!-- Not a slot, so this becomes its own panel titled THE FILM ROOM.
     Rename it, duplicate it, or delete it. -->
`,_f=`---
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
`,zf=`---
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
`,Pf=`---
league: nicks
week: 4
headline: WEEK 4
byline: The House
---

<!-- NICK'S SPORTSBOOK · week 4 · seed 1592621476
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!--
     biggest edge: Haircut Haircut 🗣️ −410 over Gus’s Balls (74.9%, −22.5)
     closest game: Return of the Menace vs Need TE HMU at −125 (52.1%)
     highest total: 281
     last week: Perc Thuggins 172.4 high, Death By Foriegn War  85.9 low
     the book went 5-1 on favourites, Brier 0.191
-->

## settled

<!--
     favourites 5-1 SU, 4-2 ATS, totals 1-5 over
     Brier 0.191 vs 0.25 for a coin flip; expected 3.5 chalk wins, got 5
     low scorer Death By Foriegn War  85.9 — priced +670, 4 of 12
     high scorer Perc Thuggins 172.4
     joint: did not hit
     biggest beat: Perc Thuggins 172.4 vs 136.7 projected (+35.7)
     biggest miss: Death By Foriegn War  85.9 vs 128.3 projected (-42.4)
-->

## bench

<!--
     Got My Noahs in Paris left 32.6 — Jakobi Meyers 19.4, Houston Texans 13, RJ Harvey 10.7
     Death By Foriegn War  left 24.8 — Kenyon Sadiq 23.5, Justin Herbert 13.7, Rachaad White 11.1
     Need TE HMU left 24 — Matthew Golden 21, Romeo Doubs 7.9
-->

## card

<!--
     the board spans 248 to 281 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

## matchup:3-5

<!-- Return of the Menace vs Need TE HMU
     −125 / −105 — 52.1% fair
     spread −1.5, total 248
     projected 125.9 vs 123.9
     last week Return of the Menace: 113.9 (projected 129.2, -15.3)
     last week Need TE HMU: 121.9 (projected 129.9, -8.0)
-->

## matchup:2-11

<!-- Haircut Haircut 🗣️ vs Gus’s Balls
     −410 / +270 — 74.9% fair
     spread −22.5, total 272
     projected 148.4 vs 125.4
     last week Haircut Haircut 🗣️: 136.7 (projected 136.9, -0.2)
     last week Gus’s Balls: 122.0 (projected 125.2, -3.2)
-->

## matchup:8-4

<!-- Beriousbeast vs Nonchalant Dreadhead
     −320 / +220 — 71% fair
     spread −19.0, total 277.5
     projected 149.1 vs 129.7
     last week Beriousbeast: 159.5 (projected 140.6, +18.9)
     last week Nonchalant Dreadhead: 114.4 (projected 133.2, -18.8)
-->

## matchup:1-6

<!-- Garbers mirror selfie vs Comet club?
     −195 / +140 — 61.3% fair
     spread −9.0, total 251
     projected 130.8 vs 121.6
     last week Garbers mirror selfie: 129.9 (projected 131.3, -1.4)
     last week Comet club?: 87.9 (projected 126.8, -38.9)
-->

## matchup:9-12

<!-- Got My Noahs in Paris vs Death By Foriegn War 
     −190 / +135 — 60.8% fair
     spread −9.0, total 258.5
     projected 134.2 vs 125.5
     last week Got My Noahs in Paris: 104.7 (projected 126.4, -21.7)
     last week Death By Foriegn War : 85.9 (projected 128.3, -42.4)
-->

## matchup:7-10

<!-- Perc Thuggins vs George Droyd
     −185 / +135 — 60.5% fair
     spread −9.0, total 281
     projected 146.1 vs 136.8
     last week Perc Thuggins: 172.4 (projected 136.7, +35.7)
     last week George Droyd: 108.0 (projected 133.5, -25.5)
-->

## punishment

<!-- KARAOKE — low scorer
     Comet club? +410 (15.8%)
     Need TE HMU +480 (13.9%)
     Death By Foriegn War  +540 (12.5%)
-->

## punishment-paired

<!-- SONG SELECT — high scorer
     Beriousbeast +290 (20.4%)
     Haircut Haircut 🗣️ +310 (19.3%)
     Perc Thuggins +360 (17.3%)
-->

## joint

<!--
     Comet club? sings for Beriousbeast — +2700 (3.3%)
     Comet club? sings for Haircut Haircut 🗣️ — +2950 (3%)
     Need TE HMU sings for Beriousbeast — +3100 (2.9%)
     Comet club? sings for Perc Thuggins — +3400 (2.7%)
     Need TE HMU sings for Haircut Haircut 🗣️ — +3400 (2.7%)
     Death By Foriegn War  sings for Beriousbeast — +3500 (2.6%)
-->

## lineups

<!--
     highest projected: Beriousbeast
     forfeited slots: none
     priced off waivers: none
-->

## The Film Room

<!-- Not a slot, so this becomes its own panel titled THE FILM ROOM.
     Rename it, duplicate it, or delete it. -->
`,Xu=Object.assign({"../content/dkenasty/w2.md":Sf,"../content/dkenasty/w3.md":Nf,"../content/dkenasty/w4.md":Ef,"../content/loog/w2.md":Tf,"../content/loog/w3.md":jf,"../content/loog/w4.md":Cf,"../content/nicks/w2.md":_f,"../content/nicks/w3.md":zf,"../content/nicks/w4.md":Pf}),Lf=/^[a-z][a-z0-9-]*(:\d+-\d+)?$/,Af=/\/content\/([^/]+)\/w(\d+)\.md$/,tc=new Map;for(const s in Xu){const p=s.match(Af);p&&tc.set(`${p[1]}/w${p[2]}`,Df(Xu[s]))}const Rf=(s,p)=>tc.get(`${s}/w${p}`)??null;function Df(s){const{meta:p,body:c}=If(s.replace(/\r\n/g,`
`)),v=c.replace(/<!--[\s\S]*?-->/g,""),E=[];let T={id:"lede",title:null,lines:[]};for(const S of v.split(`
`)){const I=S.match(/^##\s+(.+?)\s*$/);if(!I){T.lines.push(S);continue}E.push(T);const Q=I[1],H=Q.toLowerCase();T=Lf.test(H)?{id:H,title:null,lines:[]}:{id:null,title:Q,lines:[]}}E.push(T);const R=new Map,F=[];for(const S of E){const I=S.lines.join(`
`).trim();I&&(S.id?R.set(S.id,I):F.push({title:S.title,text:I}))}return{meta:p,slots:R,panels:F}}const Of=(s,p,c)=>(s==null?void 0:s.slots.get(`matchup:${p}-${c}`))??(s==null?void 0:s.slots.get(`matchup:${c}-${p}`))??null,Me=(s,p)=>(s==null?void 0:s.slots.get(p))??null;function If(s){const p=s.match(/^---\n([\s\S]*?)\n---\n?/);if(!p)return{meta:{},body:s};const c={};for(const v of p[1].split(`
`)){const E=v.match(/^([A-Za-z][\w-]*):\s*(.*)$/);E&&(c[E[1]]=E[2].replace(/^["']|["']$/g,"").trim())}return{meta:c,body:s.slice(p[0].length)}}function Mf({bookId:s,week:p,view:c}){const[v,E]=Pn.useState({status:"loading"}),[T,R]=Pn.useState(0);return Pn.useEffect(()=>{let F=!0;const S=I=>F&&E(I);return s?ff(s).then(({weeks:I,sheets:Q})=>{S({status:"ok",weeks:I,sheets:Q});const H=p!=null?I.indexOf(p):-1;R(H>=0?H:I.length-1)}).catch(()=>S({status:"error"})):uf().then(I=>S({status:"ok",index:I})).catch(()=>S({status:"error"})),()=>{F=!1}},[s,p]),a.jsxs("div",{className:"book-root",children:[a.jsx("div",{className:"bk-backbar",children:a.jsx("a",{className:"bk-back",href:"?book",children:"← The lobby"})}),a.jsxs("div",{className:"book-wrap",children:[v.status==="loading"&&a.jsx("p",{className:"state-msg",children:"Opening the book…"}),v.status==="error"&&a.jsxs("p",{className:"state-msg",children:["No sheet posted for this league. ",a.jsx("a",{className:"bk-link",href:"?book",children:"Back to the lobby"})]}),v.status==="ok"&&v.index&&a.jsx(Ff,{index:v.index}),v.status==="ok"&&v.sheets&&a.jsx(Uf,{sheet:v.sheets[T],prev:T>0?v.sheets[T-1]:null,weeks:v.weeks,cur:T,view:c,onNav:R})]})]})}function Ff({index:s}){return Pn.useEffect(()=>{document.title="The Fantasy Book"},[]),a.jsxs(a.Fragment,{children:[a.jsxs("header",{className:"bk-head",children:[a.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),a.jsx("h1",{className:"bk-title",children:"THE FANTASY BOOK"}),a.jsx("p",{className:"bk-sub",children:"Three leagues. Eighteen weeks. One coin-flip sport."})]}),a.jsx("div",{className:"group-list",style:{marginTop:28},children:s.map(p=>a.jsxs("a",{className:"group-link",href:`?book=${p.id}`,children:[a.jsx("div",{className:"gl-name",children:p.name}),a.jsx("div",{className:"gl-meta",children:"Open the book →"})]},p.id))})]})}const Bf=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),qu=(s,p)=>s.toUpperCase().includes(p)?s:`${s} — ${p}`;function Xn({title:s,blurb:p,children:c}){return a.jsxs("section",{className:"bk-panel",id:Bf(s),children:[a.jsx("h2",{className:"bk-panel-title",children:s}),p&&a.jsx("p",{className:"bk-blurb",children:p}),c]})}function Hf({weeks:s,cur:p,onNav:c}){return a.jsxs("div",{className:"fb-weeknav",children:[a.jsx("button",{className:"bk-nav-btn",disabled:p===0,onClick:()=>c(p-1),children:"‹ PREV"}),a.jsx("select",{className:"bk-nav-select",value:p,onChange:v=>c(Number(v.target.value)),children:s.map((v,E)=>a.jsxs("option",{value:E,children:["WEEK ",v]},v))}),a.jsx("button",{className:"bk-nav-btn",disabled:p===s.length-1,onClick:()=>c(p+1),children:"NEXT ›"})]})}function Uf({sheet:s,prev:p,weeks:c,cur:v,view:E,onNav:T}){const R=Rf(s.id,s.week),F=E;return Pn.useEffect(()=>{const S=F==="season"?Bl(s):`Week ${s.week}`;document.title=`${s.bookName} · ${S}`},[s.bookName,s.week,F]),Pn.useEffect(()=>{const S=window.location.hash&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)));S&&S.scrollIntoView()},[s.id,s.week]),a.jsxs(a.Fragment,{children:[a.jsx(Wf,{sheet:s,weeks:c,cur:v,onNav:T,page:F}),F==="week"&&a.jsx($f,{sheet:s,prev:p,note:R}),F==="season"&&a.jsx(Vf,{sheet:s,prev:p,note:R}),a.jsx(Yf,{sheet:s,page:F})]})}const Bl=s=>s.week===1?"Season preview":"The futures board";function Wf({sheet:s,weeks:p,cur:c,onNav:v,page:E}){return a.jsxs("header",{className:"bk-head",children:[a.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),a.jsx("h1",{className:"bk-title",children:s.bookName}),a.jsxs("p",{className:"bk-sub",children:[s.tagline," · Week ",s.week,", ",s.season,s.meta.seed?a.jsxs(a.Fragment,{children:[" · Seed ",a.jsx("code",{children:s.meta.seed})]}):null]}),s.stakes&&a.jsxs("div",{className:"bk-chips",children:[a.jsxs("span",{className:"bk-chip",children:["Buy-in ",a.jsx("b",{children:s.stakes.buyIn})]}),a.jsxs("span",{className:"bk-chip",children:["Pot ",a.jsx("b",{children:s.stakes.pot})]}),s.stakes.payouts.map(T=>a.jsxs("span",{className:"bk-chip",children:[Jf(T.place)," ",a.jsx("b",{children:T.label})]},T.place))]}),a.jsxs("div",{className:"bk-banner",children:["LINES BUILT FROM ",s.meta.sources]}),p.length>1&&a.jsx(Hf,{weeks:p,cur:c,onNav:v}),a.jsxs("nav",{className:"fb-viewnav",children:[a.jsxs("a",{className:E==="week"?"active":"",href:`?book=${s.id}&w=${s.week}`,children:["THE CARD — WEEK ",s.week]}),a.jsx("a",{className:E==="season"?"active":"",href:`?book=${s.id}&w=${s.week}&view=season`,children:Bl(s).toUpperCase()})]}),a.jsx("nav",{className:"fb-booknav",children:a.jsx("a",{href:"?book",children:"All books"})})]})}function $f({sheet:s,prev:p,note:c}){var E,T,R,F;const{punishment:v}=s;return a.jsxs(a.Fragment,{children:[Me(c,"lede")&&a.jsxs("section",{className:"bk-panel fb-lede",id:"the-lede",children:[a.jsx("h2",{className:"bk-panel-title",children:c.meta.headline??`WEEK ${s.week}`}),a.jsx(wn,{text:Me(c,"lede"),className:"fb-prose-cols"}),c.meta.byline&&a.jsx("p",{className:"fb-byline",children:c.meta.byline})]}),s.settled&&a.jsx(kf,{settled:s.settled,punishment:v,Panel:Xn,note:Me(c,"settled"),benchNote:Me(c,"bench")}),a.jsxs(Xn,{title:`THE CARD — WEEK ${s.week}`,blurb:Me(c,"card")??"Moneyline, spread and total on every matchup. Spreads and totals are the half-point where the simulated distribution splits evenly, so both sides post at −110 — the line moves, not the price.",children:[a.jsxs("div",{className:"fb-match-head",children:[a.jsx("span",{children:"MATCHUP"}),a.jsx("span",{children:"MONEYLINE"}),a.jsx("span",{className:"spread",children:"SPREAD"}),a.jsx("span",{className:"total",children:"TOTAL"})]}),a.jsx("div",{className:"fb-card",children:s.matchups.map(S=>a.jsx(Qf,{m:S,prev:Zf(p,S),note:Of(c,S.a.rosterId,S.b.rosterId)},`${S.a.rosterId}-${S.b.rosterId}`))})]}),a.jsxs("div",{className:v.paired?"fb-grid2":"",children:[a.jsxs(Xn,{title:qu(v.weekly.name,"LOW SCORER"),blurb:v.weekly.copy,children:[Me(c,"punishment")&&a.jsx(wn,{text:Me(c,"punishment"),className:"fb-panel-prose"}),v.weekly.parlay&&a.jsxs("p",{className:"fb-note",children:[v.weekly.legs??v.weekly.parlay.legs," legs · $",v.weekly.parlay.stake," · lifetime record ",a.jsx("b",{children:v.weekly.parlay.lifetimeHits})," hits."]}),a.jsx(nc,{rows:v.weekly.rows,prevRows:(T=(E=p==null?void 0:p.punishment)==null?void 0:E.weekly)==null?void 0:T.rows})]}),v.paired&&a.jsxs(Xn,{title:qu(v.paired.name,"HIGH SCORER"),blurb:v.paired.copy,children:[Me(c,"punishment-paired")&&a.jsx(wn,{text:Me(c,"punishment-paired"),className:"fb-panel-prose"}),a.jsx(nc,{rows:v.paired.rows,prevRows:(F=(R=p==null?void 0:p.punishment)==null?void 0:R.paired)==null?void 0:F.rows})]})]}),v.joints.length>0&&a.jsxs(Xn,{title:"THE JOINT — WHO SINGS WHAT",blurb:"Low scorer and high scorer in the same week, priced together rather than multiplied: a 145-point week makes you the high scorer and makes someone else the low one, so these are not independent.",children:[Me(c,"joint")&&a.jsx(wn,{text:Me(c,"joint"),className:"fb-panel-prose"}),v.joints.map(S=>a.jsxs("div",{className:"fb-slip",children:[a.jsxs("span",{className:"fb-slip-text",children:[a.jsx("b",{children:S.low.team})," sings a song picked by ",a.jsx("b",{children:S.high.team}),a.jsxs("span",{className:"fb-slip-note",children:[S.low.manager," · ",S.high.manager," · ",S.pct,"%"]})]}),a.jsx("span",{className:"bk-price",children:S.price})]},`${S.low.rosterId}-${S.high.rosterId}`))]}),a.jsxs(Xn,{title:"THE LINEUPS",blurb:"Optimal by projection against each league's roster slots — what a manager knows Sunday morning. Scores are drawn on the simulation, never on the projection, which would be lookahead bias.",children:[Me(c,"lineups")&&a.jsx(wn,{text:Me(c,"lineups"),className:"fb-panel-prose"}),a.jsx("div",{className:"fb-lineups",children:[...s.lineups].sort((S,I)=>I.projected-S.projected).map(S=>a.jsx(Gf,{seat:S},S.rosterId))})]}),c==null?void 0:c.panels.map(S=>a.jsx(Xn,{title:S.title.toUpperCase(),children:a.jsx(wn,{text:S.text,className:"fb-prose-cols"})},S.title))]})}function Vf({sheet:s,prev:p,note:c}){const v=Me(c,"season");return a.jsxs(a.Fragment,{children:[v?a.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[a.jsx("h2",{className:"bk-panel-title",children:c.meta.headline??"THE FUTURES BOARD"}),a.jsx(wn,{text:v,className:"fb-prose-cols"})]}):s.preview&&a.jsx(Kf,{preview:s.preview,week:s.week}),a.jsx(mf,{sheet:s,prev:p,Panel:Xn})]})}function Kf({preview:s,week:p}){return a.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[a.jsx("h2",{className:"bk-panel-title",children:p===1?"SEASON PREVIEW":`SEASON PREVIEW — WRITTEN WEEK ${s.writtenWeek}`}),s.standfirst&&a.jsx("p",{className:"fb-standfirst",children:s.standfirst}),a.jsx("div",{className:"fb-prose-cols",children:s.paragraphs.map((c,v)=>a.jsx("p",{className:"fb-prose",children:c},v))}),p>s.writtenWeek&&a.jsxs("p",{className:"fb-note",children:["Written in week ",s.writtenWeek," and left alone since. The boards below are current; the prose is not."]})]})}function Qf({m:s,prev:p,note:c}){var v;return a.jsxs("div",{className:c?"fb-match noted":"fb-match",children:[a.jsxs("div",{className:"fb-seats",children:[a.jsx(ec,{seat:s.a,proj:s.projected.a,fav:!0}),a.jsx(ec,{seat:s.b,proj:s.projected.b})]}),a.jsxs("div",{className:"fb-cell",children:[a.jsx("span",{className:"fb-odds",children:s.moneyline.a}),a.jsx("span",{className:"fb-odds dim",children:s.moneyline.b}),a.jsx(Fl,{now:s.moneyline.a,was:(v=p==null?void 0:p.moneyline)==null?void 0:v.a})]}),a.jsxs("div",{className:"fb-cell spread",children:[a.jsxs("span",{className:"fb-odds",children:[s.spread.a,a.jsx("small",{children:s.spread.price})]}),a.jsxs("span",{className:"fb-odds dim",children:[s.spread.b,a.jsx("small",{children:s.spread.price})]})]}),a.jsxs("div",{className:"fb-cell total",children:[a.jsxs("span",{className:"fb-odds",children:["O ",s.total.line.toFixed(1),a.jsx("small",{children:s.total.over})]}),a.jsxs("span",{className:"fb-odds dim",children:["U ",s.total.line.toFixed(1),a.jsx("small",{children:s.total.under})]})]}),c&&a.jsx(wn,{text:c,className:"fb-match-note"})]})}const ec=({seat:s,proj:p,fav:c})=>a.jsxs("span",{className:c?"fb-seat fav":"fb-seat",children:[a.jsx("span",{className:"fb-seat-name",children:s.team}),a.jsx("span",{className:"fb-seat-mgr",children:s.manager}),a.jsx("span",{className:"fb-seat-proj",children:p.toFixed(1)})]});function nc({rows:s,prevRows:p}){const c=Math.max(...s.map(v=>v.pct));return a.jsx("div",{className:"fb-runners",children:s.map((v,E)=>{var T;return a.jsxs("div",{className:E===0?"fb-runner lead":"fb-runner",children:[a.jsxs("span",{className:"fb-runner-main",children:[a.jsx("span",{className:"fb-runner-team",children:v.team}),a.jsx("span",{className:"fb-bar",style:{width:`${v.pct/c*100}%`}}),a.jsx("span",{className:"fb-runner-mgr",children:v.manager})]}),a.jsxs("span",{className:"fb-runner-pct",children:[v.pct,"%"]}),a.jsxs("span",{className:"bk-line-right",children:[a.jsx(Fl,{now:v.price,was:(T=p==null?void 0:p.find(R=>R.rosterId===v.rosterId))==null?void 0:T.price}),a.jsx("span",{className:"bk-price",children:v.price})]})]},v.rosterId)})})}function Gf({seat:s}){return a.jsxs("div",{className:"fb-lineup",children:[a.jsxs("div",{className:"fb-lineup-head",children:[a.jsx("span",{className:"fb-lineup-name",children:s.team}),a.jsx("span",{className:"fb-lineup-proj",children:s.projected.toFixed(1)})]}),s.players.map((p,c)=>a.jsxs("div",{className:p.name?"fb-slot":"fb-slot empty",children:[a.jsx("span",{className:"fb-slot-tag",children:p.slot}),a.jsxs("span",{className:"fb-slot-name",children:[p.name??"no eligible player",p.name&&a.jsxs("small",{children:[" ",p.position," ",p.team,p.waiver&&" · waivers"]})]}),a.jsx("span",{className:"fb-slot-mu",children:p.mu.toFixed(1)})]},`${p.slot}-${c}`)),s.players.some(p=>p.waiver)&&a.jsxs("p",{className:"fb-warn",children:["Nobody on the roster can play ",s.players.filter(p=>p.waiver).map(p=>p.slot).join(", "),". Priced as if he claims the best free agent there — he has not, and until he does this line is generous to him."]}),s.emptySlots.length>0&&a.jsxs("p",{className:"fb-warn",children:["Forfeits ",s.emptySlots.join(", ")," — nobody on the roster is eligible. Worth roughly eight points, and it is why this line looks the way it does."]})]})}function Yf({sheet:s,page:p}){var c;return a.jsxs("footer",{className:"bk-fine-block",children:[a.jsxs("p",{className:"bk-fine",children:[a.jsx("b",{children:"HOW THE SAUSAGE IS MADE."})," Every rostered player's projected points come from Sleeper's own weekly projection, scored through this league's exact scoring settings (",s.meta.scoringKeys," keys, reproducing Sleeper's published totals to a mean absolute error of ",s.meta.mae,"). Weekly scores are drawn from a Gamma distribution whose spread was fitted on 2025 projection residuals, position by position — a receiver projected for 18 is far more volatile than a quarterback projected for 18, and a pooled number would misprice the top and bottom of every lineup in opposite directions. The week was simulated ",s.meta.sims.toLocaleString()," times."]}),a.jsxs("p",{className:"bk-fine",children:[a.jsx("b",{children:"WHAT THIS BOOK CANNOT DO."})," ",s.meta.disclosures.join(" ")]}),((c=s.meta.overrides)==null?void 0:c.length)>0&&a.jsxs("p",{className:"bk-fine",children:[a.jsx("b",{children:"MANUAL OVERRIDES."})," ",s.meta.overrides.map(v=>`${v.player} ${v.was} → ${v.pts}${v.note?` (${v.note})`:""}`).join(" · ")]}),a.jsxs("p",{className:"bk-fine",children:[a.jsx("b",{children:"HOUSE RULES."})," All prices include the house's margin. Ties split. Rosters as pulled",s.meta.pulledAt?` ${s.meta.pulledAt.slice(0,10)}`:"","; once a week's sheet is posted it is frozen and never repriced. For entertainment only."]}),a.jsxs("p",{className:"bk-foot",children:[s.bookName," · EST. SEPTEMBER 2026 · NO REFUNDS"]}),a.jsxs("p",{className:"bk-foot-nav",children:[p==="week"&&a.jsxs(a.Fragment,{children:[a.jsx("a",{className:"bk-link",href:`?book=${s.id}&w=${s.week}&view=season`,children:Bl(s)})," ·"," "]}),p==="season"&&a.jsxs(a.Fragment,{children:[a.jsxs("a",{className:"bk-link",href:`?book=${s.id}&w=${s.week}`,children:["The card — week ",s.week]})," ·"," "]}),a.jsx("a",{className:"bk-link",href:"?book",children:"All books"})]})]})}const Jf=s=>`${s}${["th","st","nd","rd"][s%100>>3^1&&s%10]||"th"}`;function Zf(s,p){if(!(s!=null&&s.matchups))return null;const c=E=>new Set([E.a.rosterId,E.b.rosterId]),v=s.matchups.find(E=>{const T=c(E);return T.has(p.a.rosterId)&&T.has(p.b.rosterId)});return v?v.a.rosterId===p.a.rosterId?v:{moneyline:{a:v.moneyline.b,b:v.moneyline.a}}:null}const Xf=`
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
`;function qf(){const s=new URLSearchParams(window.location.search),p=s.get("book")||null,c=s.has("w")?Number(s.get("w")):null,v=s.get("view")==="season"?"season":"week";return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Xf}),a.jsx(Mf,{bookId:p,week:c,view:v})]})}af.createRoot(document.getElementById("root")).render(a.jsx(Pn.StrictMode,{children:a.jsx(qf,{})}));
