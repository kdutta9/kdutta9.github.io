(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))v(E);new MutationObserver(E=>{for(const j of E)if(j.type==="childList")for(const R of j.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&v(R)}).observe(document,{childList:!0,subtree:!0});function c(E){const j={};return E.integrity&&(j.integrity=E.integrity),E.referrerPolicy&&(j.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?j.credentials="include":E.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function v(E){if(E.ep)return;E.ep=!0;const j=c(E);fetch(E.href,j)}})();var _l={exports:{}},Sr={},zl={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function qd(){if(Ou)return W;Ou=1;var s=Symbol.for("react.element"),p=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),R=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),U=Symbol.iterator;function $(h){return h===null||typeof h!="object"?null:(h=U&&h[U]||h["@@iterator"],typeof h=="function"?h:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,oe={};function q(h,x,H){this.props=h,this.context=x,this.refs=oe,this.updater=H||ke}q.prototype.isReactComponent={},q.prototype.setState=function(h,x){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,x,"setState")},q.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function wt(){}wt.prototype=q.prototype;function ct(h,x,H){this.props=h,this.context=x,this.refs=oe,this.updater=H||ke}var et=ct.prototype=new wt;et.constructor=ct,Ve(et,q.prototype),et.isPureReactComponent=!0;var be=Array.isArray,tt=Object.prototype.hasOwnProperty,Te={current:null},ze={key:!0,ref:!0,__self:!0,__source:!0};function Ke(h,x,H){var V,G={},Y=null,ee=null;if(x!=null)for(V in x.ref!==void 0&&(ee=x.ref),x.key!==void 0&&(Y=""+x.key),x)tt.call(x,V)&&!ze.hasOwnProperty(V)&&(G[V]=x[V]);var J=arguments.length-2;if(J===1)G.children=H;else if(1<J){for(var ie=Array(J),Be=0;Be<J;Be++)ie[Be]=arguments[Be+2];G.children=ie}if(h&&h.defaultProps)for(V in J=h.defaultProps,J)G[V]===void 0&&(G[V]=J[V]);return{$$typeof:s,type:h,key:Y,ref:ee,props:G,_owner:Te.current}}function Pt(h,x){return{$$typeof:s,type:h.type,key:x,ref:h.ref,props:h.props,_owner:h._owner}}function xt(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function Xt(h){var x={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(H){return x[H]})}var dt=/\/+/g;function Me(h,x){return typeof h=="object"&&h!==null&&h.key!=null?Xt(""+h.key):x.toString(36)}function nt(h,x,H,V,G){var Y=typeof h;(Y==="undefined"||Y==="boolean")&&(h=null);var ee=!1;if(h===null)ee=!0;else switch(Y){case"string":case"number":ee=!0;break;case"object":switch(h.$$typeof){case s:case p:ee=!0}}if(ee)return ee=h,G=G(ee),h=V===""?"."+Me(ee,0):V,be(G)?(H="",h!=null&&(H=h.replace(dt,"$&/")+"/"),nt(G,x,H,"",function(Be){return Be})):G!=null&&(xt(G)&&(G=Pt(G,H+(!G.key||ee&&ee.key===G.key?"":(""+G.key).replace(dt,"$&/")+"/")+h)),x.push(G)),1;if(ee=0,V=V===""?".":V+":",be(h))for(var J=0;J<h.length;J++){Y=h[J];var ie=V+Me(Y,J);ee+=nt(Y,x,H,ie,G)}else if(ie=$(h),typeof ie=="function")for(h=ie.call(h),J=0;!(Y=h.next()).done;)Y=Y.value,ie=V+Me(Y,J++),ee+=nt(Y,x,H,ie,G);else if(Y==="object")throw x=String(h),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.");return ee}function ft(h,x,H){if(h==null)return h;var V=[],G=0;return nt(h,V,"","",function(Y){return x.call(H,Y,G++)}),V}function Pe(h){if(h._status===-1){var x=h._result;x=x(),x.then(function(H){(h._status===0||h._status===-1)&&(h._status=1,h._result=H)},function(H){(h._status===0||h._status===-1)&&(h._status=2,h._result=H)}),h._status===-1&&(h._status=0,h._result=x)}if(h._status===1)return h._result.default;throw h._result}var ue={current:null},T={transition:null},F={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:T,ReactCurrentOwner:Te};function z(){throw Error("act(...) is not supported in production builds of React.")}return W.Children={map:ft,forEach:function(h,x,H){ft(h,function(){x.apply(this,arguments)},H)},count:function(h){var x=0;return ft(h,function(){x++}),x},toArray:function(h){return ft(h,function(x){return x})||[]},only:function(h){if(!xt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},W.Component=q,W.Fragment=c,W.Profiler=E,W.PureComponent=ct,W.StrictMode=v,W.Suspense=S,W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,W.act=z,W.cloneElement=function(h,x,H){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var V=Ve({},h.props),G=h.key,Y=h.ref,ee=h._owner;if(x!=null){if(x.ref!==void 0&&(Y=x.ref,ee=Te.current),x.key!==void 0&&(G=""+x.key),h.type&&h.type.defaultProps)var J=h.type.defaultProps;for(ie in x)tt.call(x,ie)&&!ze.hasOwnProperty(ie)&&(V[ie]=x[ie]===void 0&&J!==void 0?J[ie]:x[ie])}var ie=arguments.length-2;if(ie===1)V.children=H;else if(1<ie){J=Array(ie);for(var Be=0;Be<ie;Be++)J[Be]=arguments[Be+2];V.children=J}return{$$typeof:s,type:h.type,key:G,ref:Y,props:V,_owner:ee}},W.createContext=function(h){return h={$$typeof:R,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:j,_context:h},h.Consumer=h},W.createElement=Ke,W.createFactory=function(h){var x=Ke.bind(null,h);return x.type=h,x},W.createRef=function(){return{current:null}},W.forwardRef=function(h){return{$$typeof:M,render:h}},W.isValidElement=xt,W.lazy=function(h){return{$$typeof:Q,_payload:{_status:-1,_result:h},_init:Pe}},W.memo=function(h,x){return{$$typeof:D,type:h,compare:x===void 0?null:x}},W.startTransition=function(h){var x=T.transition;T.transition={};try{h()}finally{T.transition=x}},W.unstable_act=z,W.useCallback=function(h,x){return ue.current.useCallback(h,x)},W.useContext=function(h){return ue.current.useContext(h)},W.useDebugValue=function(){},W.useDeferredValue=function(h){return ue.current.useDeferredValue(h)},W.useEffect=function(h,x){return ue.current.useEffect(h,x)},W.useId=function(){return ue.current.useId()},W.useImperativeHandle=function(h,x,H){return ue.current.useImperativeHandle(h,x,H)},W.useInsertionEffect=function(h,x){return ue.current.useInsertionEffect(h,x)},W.useLayoutEffect=function(h,x){return ue.current.useLayoutEffect(h,x)},W.useMemo=function(h,x){return ue.current.useMemo(h,x)},W.useReducer=function(h,x,H){return ue.current.useReducer(h,x,H)},W.useRef=function(h){return ue.current.useRef(h)},W.useState=function(h){return ue.current.useState(h)},W.useSyncExternalStore=function(h,x,H){return ue.current.useSyncExternalStore(h,x,H)},W.useTransition=function(){return ue.current.useTransition()},W.version="18.3.1",W}var Iu;function Il(){return Iu||(Iu=1,zl.exports=qd()),zl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function ef(){if(Du)return Sr;Du=1;var s=Il(),p=Symbol.for("react.element"),c=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,E=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function R(M,S,D){var Q,U={},$=null,ke=null;D!==void 0&&($=""+D),S.key!==void 0&&($=""+S.key),S.ref!==void 0&&(ke=S.ref);for(Q in S)v.call(S,Q)&&!j.hasOwnProperty(Q)&&(U[Q]=S[Q]);if(M&&M.defaultProps)for(Q in S=M.defaultProps,S)U[Q]===void 0&&(U[Q]=S[Q]);return{$$typeof:p,type:M,key:$,ref:ke,props:U,_owner:E.current}}return Sr.Fragment=c,Sr.jsx=R,Sr.jsxs=R,Sr}var Fu;function tf(){return Fu||(Fu=1,_l.exports=ef()),_l.exports}var a=tf(),zt=Il(),Oo={},Pl={exports:{}},De={},Ll={exports:{}},Al={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function nf(){return Mu||(Mu=1,(function(s){function p(T,F){var z=T.length;T.push(F);e:for(;0<z;){var h=z-1>>>1,x=T[h];if(0<E(x,F))T[h]=F,T[z]=x,z=h;else break e}}function c(T){return T.length===0?null:T[0]}function v(T){if(T.length===0)return null;var F=T[0],z=T.pop();if(z!==F){T[0]=z;e:for(var h=0,x=T.length,H=x>>>1;h<H;){var V=2*(h+1)-1,G=T[V],Y=V+1,ee=T[Y];if(0>E(G,z))Y<x&&0>E(ee,G)?(T[h]=ee,T[Y]=z,h=Y):(T[h]=G,T[V]=z,h=V);else if(Y<x&&0>E(ee,z))T[h]=ee,T[Y]=z,h=Y;else break e}}return F}function E(T,F){var z=T.sortIndex-F.sortIndex;return z!==0?z:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;s.unstable_now=function(){return j.now()}}else{var R=Date,M=R.now();s.unstable_now=function(){return R.now()-M}}var S=[],D=[],Q=1,U=null,$=3,ke=!1,Ve=!1,oe=!1,q=typeof setTimeout=="function"?setTimeout:null,wt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function et(T){for(var F=c(D);F!==null;){if(F.callback===null)v(D);else if(F.startTime<=T)v(D),F.sortIndex=F.expirationTime,p(S,F);else break;F=c(D)}}function be(T){if(oe=!1,et(T),!Ve)if(c(S)!==null)Ve=!0,Pe(tt);else{var F=c(D);F!==null&&ue(be,F.startTime-T)}}function tt(T,F){Ve=!1,oe&&(oe=!1,wt(Ke),Ke=-1),ke=!0;var z=$;try{for(et(F),U=c(S);U!==null&&(!(U.expirationTime>F)||T&&!Xt());){var h=U.callback;if(typeof h=="function"){U.callback=null,$=U.priorityLevel;var x=h(U.expirationTime<=F);F=s.unstable_now(),typeof x=="function"?U.callback=x:U===c(S)&&v(S),et(F)}else v(S);U=c(S)}if(U!==null)var H=!0;else{var V=c(D);V!==null&&ue(be,V.startTime-F),H=!1}return H}finally{U=null,$=z,ke=!1}}var Te=!1,ze=null,Ke=-1,Pt=5,xt=-1;function Xt(){return!(s.unstable_now()-xt<Pt)}function dt(){if(ze!==null){var T=s.unstable_now();xt=T;var F=!0;try{F=ze(!0,T)}finally{F?Me():(Te=!1,ze=null)}}else Te=!1}var Me;if(typeof ct=="function")Me=function(){ct(dt)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=dt,Me=function(){ft.postMessage(null)}}else Me=function(){q(dt,0)};function Pe(T){ze=T,Te||(Te=!0,Me())}function ue(T,F){Ke=q(function(){T(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(T){T.callback=null},s.unstable_continueExecution=function(){Ve||ke||(Ve=!0,Pe(tt))},s.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<T?Math.floor(1e3/T):5},s.unstable_getCurrentPriorityLevel=function(){return $},s.unstable_getFirstCallbackNode=function(){return c(S)},s.unstable_next=function(T){switch($){case 1:case 2:case 3:var F=3;break;default:F=$}var z=$;$=F;try{return T()}finally{$=z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=$;$=T;try{return F()}finally{$=z}},s.unstable_scheduleCallback=function(T,F,z){var h=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?h+z:h):z=h,T){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=z+x,T={id:Q++,callback:F,priorityLevel:T,startTime:z,expirationTime:x,sortIndex:-1},z>h?(T.sortIndex=z,p(D,T),c(S)===null&&T===c(D)&&(oe?(wt(Ke),Ke=-1):oe=!0,ue(be,z-h))):(T.sortIndex=x,p(S,T),Ve||ke||(Ve=!0,Pe(tt))),T},s.unstable_shouldYield=Xt,s.unstable_wrapCallback=function(T){var F=$;return function(){var z=$;$=F;try{return T.apply(this,arguments)}finally{$=z}}}})(Al)),Al}var Bu;function rf(){return Bu||(Bu=1,Ll.exports=nf()),Ll.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uu;function of(){if(Uu)return De;Uu=1;var s=Il(),p=rf();function c(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v=new Set,E={};function j(e,t){R(e,t),R(e+"Capture",t)}function R(e,t){for(E[e]=t,e=0;e<t.length;e++)v.add(t[e])}var M=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,D=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q={},U={};function $(e){return S.call(U,e)?!0:S.call(Q,e)?!1:D.test(e)?U[e]=!0:(Q[e]=!0,!1)}function ke(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ve(e,t,n,r){if(t===null||typeof t>"u"||ke(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function oe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new oe(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new oe(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new oe(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new oe(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new oe(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new oe(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new oe(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new oe(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var wt=/[\-:]([a-z])/g;function ct(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wt,ct);q[t]=new oe(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wt,ct);q[t]=new oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wt,ct);q[t]=new oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new oe(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function et(e,t,n,r){var o=q.hasOwnProperty(t)?q[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ve(t,n,o,r)&&(n=null),r||o===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var be=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),Te=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),Xt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),T=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,h;function x(e){if(h===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);h=t&&t[1]||""}return`
`+h+e}var H=!1;function V(e,t){if(!e||H)return"";H=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var d=`
`+o[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?x(e):""}function G(e){switch(e.tag){case 5:return x(e.type);case 16:return x("Lazy");case 13:return x("Suspense");case 19:return x("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1),e;case 11:return e=V(e.type.render,!1),e;case 1:return e=V(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case Te:return"Portal";case Pt:return"Profiler";case Ke:return"StrictMode";case Me:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xt:return(e.displayName||"Context")+".Consumer";case xt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:Y(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return Y(e(t))}catch{}}return null}function ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function J(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Be(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=Be(e))}function Ul(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Io(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $l(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=J(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hl(e,t){t=t.checked,t!=null&&et(e,"checked",t,!1)}function Do(e,t){Hl(e,t);var n=J(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fo(e,t.type,J(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fo(e,t,n){(t!=="number"||Er(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+J(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(c(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(c(92));if(Fn(n)){if(1<n.length)throw Error(c(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:J(n)}}function Kl(e,t){var n=J(t.value),r=J(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ql(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,Yl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rc=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){rc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Zl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Jl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Zl(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var oc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(e,t){if(t){if(oc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(c(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(c(61))}if(t.style!=null&&typeof t.style!="object")throw Error(c(62))}}function $o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ho=null;function Wo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vo=null,hn=null,mn=null;function Xl(e){if(e=ar(e)){if(typeof Vo!="function")throw Error(c(280));var t=e.stateNode;t&&(t=Yr(t),Vo(e.stateNode,e.type,t))}}function ql(e){hn?mn?mn.push(e):mn=[e]:hn=e}function es(){if(hn){var e=hn,t=mn;if(mn=hn=null,Xl(e),t)for(e=0;e<t.length;e++)Xl(t[e])}}function ts(e,t){return e(t)}function ns(){}var Ko=!1;function rs(e,t,n){if(Ko)return e(t,n);Ko=!0;try{return ts(e,t,n)}finally{Ko=!1,(hn!==null||mn!==null)&&(ns(),es())}}function Un(e,t){var n=e.stateNode;if(n===null)return null;var r=Yr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Qo=!1;if(M)try{var $n={};Object.defineProperty($n,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{Qo=!1}function ic(e,t,n,r,o,i,l,u,d){var y=Array.prototype.slice.call(arguments,3);try{t.apply(n,y)}catch(k){this.onError(k)}}var Hn=!1,Tr=null,Cr=!1,Go=null,lc={onError:function(e){Hn=!0,Tr=e}};function sc(e,t,n,r,o,i,l,u,d){Hn=!1,Tr=null,ic.apply(lc,arguments)}function ac(e,t,n,r,o,i,l,u,d){if(sc.apply(this,arguments),Hn){if(Hn){var y=Tr;Hn=!1,Tr=null}else throw Error(c(198));Cr||(Cr=!0,Go=y)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function os(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function is(e){if(qt(e)!==e)throw Error(c(188))}function uc(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return is(o),e;if(i===r)return is(o),t;i=i.sibling}throw Error(c(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function ls(e){return e=uc(e),e!==null?ss(e):null}function ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ss(e);if(t!==null)return t;e=e.sibling}return null}var as=p.unstable_scheduleCallback,us=p.unstable_cancelCallback,cc=p.unstable_shouldYield,dc=p.unstable_requestPaint,de=p.unstable_now,fc=p.unstable_getCurrentPriorityLevel,Yo=p.unstable_ImmediatePriority,cs=p.unstable_UserBlockingPriority,_r=p.unstable_NormalPriority,pc=p.unstable_LowPriority,ds=p.unstable_IdlePriority,zr=null,pt=null;function hc(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(zr,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:yc,mc=Math.log,gc=Math.LN2;function yc(e){return e>>>=0,e===0?32:31-(mc(e)/gc|0)|0}var Pr=64,Lr=4194304;function Wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?r=Wn(u):(i&=l,i!==0&&(r=Wn(i)))}else l=n&~o,l!==0?r=Wn(l):i!==0&&(r=Wn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),o=1<<n,r|=e[n],t&=~o;return r}function vc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-rt(i),u=1<<l,d=o[l];d===-1?((u&n)===0||(u&r)!==0)&&(o[l]=vc(u,t)):d<=t&&(e.expiredLanes|=u),i&=~u}}function Zo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fs(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function xc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-rt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function ps(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var hs,qo,ms,gs,ys,ei=!1,Rr=[],Lt=null,At=null,Rt=null,Kn=new Map,Qn=new Map,Ot=[],kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vs(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Gn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ar(t),t!==null&&qo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function bc(e,t,n,r,o){switch(t){case"focusin":return Lt=Gn(Lt,e,t,n,r,o),!0;case"dragenter":return At=Gn(At,e,t,n,r,o),!0;case"mouseover":return Rt=Gn(Rt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Kn.set(i,Gn(Kn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qn.set(i,Gn(Qn.get(i)||null,e,t,n,r,o)),!0}return!1}function ws(e){var t=en(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=os(n),t!==null){e.blockedOn=t,ys(e.priority,function(){ms(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ni(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ho=r,n.target.dispatchEvent(r),Ho=null}else return t=ar(n),t!==null&&qo(t),e.blockedOn=n,!1;t.shift()}return!0}function xs(e,t,n){Or(e)&&n.delete(t)}function Sc(){ei=!1,Lt!==null&&Or(Lt)&&(Lt=null),At!==null&&Or(At)&&(At=null),Rt!==null&&Or(Rt)&&(Rt=null),Kn.forEach(xs),Qn.forEach(xs)}function Yn(e,t){e.blockedOn===t&&(e.blockedOn=null,ei||(ei=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Sc)))}function Zn(e){function t(o){return Yn(o,e)}if(0<Rr.length){Yn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&Yn(Lt,e),At!==null&&Yn(At,e),Rt!==null&&Yn(Rt,e),Kn.forEach(t),Qn.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)ws(n),n.blockedOn===null&&Ot.shift()}var gn=be.ReactCurrentBatchConfig,Ir=!0;function Nc(e,t,n,r){var o=X,i=gn.transition;gn.transition=null;try{X=1,ti(e,t,n,r)}finally{X=o,gn.transition=i}}function Ec(e,t,n,r){var o=X,i=gn.transition;gn.transition=null;try{X=4,ti(e,t,n,r)}finally{X=o,gn.transition=i}}function ti(e,t,n,r){if(Ir){var o=ni(e,t,n,r);if(o===null)wi(e,t,r,Dr,n),vs(e,r);else if(bc(o,e,t,n,r))r.stopPropagation();else if(vs(e,r),t&4&&-1<kc.indexOf(e)){for(;o!==null;){var i=ar(o);if(i!==null&&hs(i),i=ni(e,t,n,r),i===null&&wi(e,t,r,Dr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else wi(e,t,r,null,n)}}var Dr=null;function ni(e,t,n,r){if(Dr=null,e=Wo(r),e=en(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=os(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case Yo:return 1;case cs:return 4;case _r:case pc:return 16;case ds:return 536870912;default:return 16}default:return 16}}var It=null,ri=null,Fr=null;function bs(){if(Fr)return Fr;var e,t=ri,n=t.length,r,o="value"in It?It.value:It.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Fr=o.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function Ss(){return!1}function Ue(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Br:Ss,this.isPropagationStopped=Ss,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oi=Ue(yn),Jn=z({},yn,{view:0,detail:0}),jc=Ue(Jn),ii,li,Xn,Ur=z({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ii=e.screenX-Xn.screenX,li=e.screenY-Xn.screenY):li=ii=0,Xn=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:li}}),Ns=Ue(Ur),Tc=z({},Ur,{dataTransfer:0}),Cc=Ue(Tc),_c=z({},Jn,{relatedTarget:0}),si=Ue(_c),zc=z({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pc=Ue(zc),Lc=z({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ac=Ue(Lc),Rc=z({},yn,{data:0}),Es=Ue(Rc),Oc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ic={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dc[e])?!!t[e]:!1}function ai(){return Fc}var Mc=z({},Jn,{key:function(e){if(e.key){var t=Oc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ic[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bc=Ue(Mc),Uc=z({},Ur,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=Ue(Uc),$c=z({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),Hc=Ue($c),Wc=z({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vc=Ue(Wc),Kc=z({},Ur,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qc=Ue(Kc),Gc=[9,13,27,32],ui=M&&"CompositionEvent"in window,qn=null;M&&"documentMode"in document&&(qn=document.documentMode);var Yc=M&&"TextEvent"in window&&!qn,Ts=M&&(!ui||qn&&8<qn&&11>=qn),Cs=" ",_s=!1;function zs(e,t){switch(e){case"keyup":return Gc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ps(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vn=!1;function Zc(e,t){switch(e){case"compositionend":return Ps(t);case"keypress":return t.which!==32?null:(_s=!0,Cs);case"textInput":return e=t.data,e===Cs&&_s?null:e;default:return null}}function Jc(e,t){if(vn)return e==="compositionend"||!ui&&zs(e,t)?(e=bs(),Fr=ri=It=null,vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ts&&t.locale!=="ko"?null:t.data;default:return null}}var Xc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xc[e.type]:t==="textarea"}function As(e,t,n,r){ql(r),t=Kr(t,"onChange"),0<t.length&&(n=new oi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var er=null,tr=null;function qc(e){Js(e,0)}function $r(e){var t=Sn(e);if(Ul(t))return e}function ed(e,t){if(e==="change")return t}var Rs=!1;if(M){var ci;if(M){var di="oninput"in document;if(!di){var Os=document.createElement("div");Os.setAttribute("oninput","return;"),di=typeof Os.oninput=="function"}ci=di}else ci=!1;Rs=ci&&(!document.documentMode||9<document.documentMode)}function Is(){er&&(er.detachEvent("onpropertychange",Ds),tr=er=null)}function Ds(e){if(e.propertyName==="value"&&$r(tr)){var t=[];As(t,tr,e,Wo(e)),rs(qc,t)}}function td(e,t,n){e==="focusin"?(Is(),er=t,tr=n,er.attachEvent("onpropertychange",Ds)):e==="focusout"&&Is()}function nd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $r(tr)}function rd(e,t){if(e==="click")return $r(t)}function od(e,t){if(e==="input"||e==="change")return $r(t)}function id(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:id;function nr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!S.call(t,o)||!ot(e[o],t[o]))return!1}return!0}function Fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ms(e,t){var n=Fs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fs(n)}}function Bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Us(){for(var e=window,t=Er();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Er(e.document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ld(e){var t=Us(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bs(n.ownerDocument.documentElement,n)){if(r!==null&&fi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ms(n,i);var l=Ms(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sd=M&&"documentMode"in document&&11>=document.documentMode,wn=null,pi=null,rr=null,hi=!1;function $s(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hi||wn==null||wn!==Er(r)||(r=wn,"selectionStart"in r&&fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&nr(rr,r)||(rr=r,r=Kr(pi,"onSelect"),0<r.length&&(t=new oi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xn={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},mi={},Hs={};M&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function Wr(e){if(mi[e])return mi[e];if(!xn[e])return e;var t=xn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hs)return mi[e]=t[n];return e}var Ws=Wr("animationend"),Vs=Wr("animationiteration"),Ks=Wr("animationstart"),Qs=Wr("transitionend"),Gs=new Map,Ys="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Gs.set(e,t),j(t,[e])}for(var gi=0;gi<Ys.length;gi++){var yi=Ys[gi],ad=yi.toLowerCase(),ud=yi[0].toUpperCase()+yi.slice(1);Dt(ad,"on"+ud)}Dt(Ws,"onAnimationEnd"),Dt(Vs,"onAnimationIteration"),Dt(Ks,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(Qs,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cd=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Zs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ac(r,t,void 0,e),e.currentTarget=null}function Js(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,y=u.currentTarget;if(u=u.listener,d!==i&&o.isPropagationStopped())break e;Zs(o,u,y),i=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,y=u.currentTarget,u=u.listener,d!==i&&o.isPropagationStopped())break e;Zs(o,u,y),i=d}}}if(Cr)throw e=Go,Cr=!1,Go=null,e}function ne(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(Xs(t,e,2,!1),n.add(r))}function vi(e,t,n){var r=0;t&&(r|=4),Xs(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Vr]){e[Vr]=!0,v.forEach(function(n){n!=="selectionchange"&&(cd.has(n)||vi(n,!1,e),vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,vi("selectionchange",!1,t))}}function Xs(e,t,n,r){switch(ks(t)){case 1:var o=Nc;break;case 4:o=Ec;break;default:o=ti}n=o.bind(null,t,n,e),o=void 0,!Qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wi(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;l=l.return}for(;u!==null;){if(l=en(u),l===null)return;if(d=l.tag,d===5||d===6){r=i=l;continue e}u=u.parentNode}}r=r.return}rs(function(){var y=i,k=Wo(n),b=[];e:{var w=Gs.get(e);if(w!==void 0){var C=oi,P=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":C=Bc;break;case"focusin":P="focus",C=si;break;case"focusout":P="blur",C=si;break;case"beforeblur":case"afterblur":C=si;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Hc;break;case Ws:case Vs:case Ks:C=Pc;break;case Qs:C=Vc;break;case"scroll":C=jc;break;case"wheel":C=Qc;break;case"copy":case"cut":case"paste":C=Ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=js}var L=(t&4)!==0,fe=!L&&e==="scroll",m=L?w!==null?w+"Capture":null:w;L=[];for(var f=y,g;f!==null;){g=f;var N=g.stateNode;if(g.tag===5&&N!==null&&(g=N,m!==null&&(N=Un(f,m),N!=null&&L.push(lr(f,N,g)))),fe)break;f=f.return}0<L.length&&(w=new C(w,P,null,n,k),b.push({event:w,listeners:L}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",w&&n!==Ho&&(P=n.relatedTarget||n.fromElement)&&(en(P)||P[kt]))break e;if((C||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,C?(P=n.relatedTarget||n.toElement,C=y,P=P?en(P):null,P!==null&&(fe=qt(P),P!==fe||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=y),C!==P)){if(L=Ns,N="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(L=js,N="onPointerLeave",m="onPointerEnter",f="pointer"),fe=C==null?w:Sn(C),g=P==null?w:Sn(P),w=new L(N,f+"leave",C,n,k),w.target=fe,w.relatedTarget=g,N=null,en(k)===y&&(L=new L(m,f+"enter",P,n,k),L.target=g,L.relatedTarget=fe,N=L),fe=N,C&&P)t:{for(L=C,m=P,f=0,g=L;g;g=kn(g))f++;for(g=0,N=m;N;N=kn(N))g++;for(;0<f-g;)L=kn(L),f--;for(;0<g-f;)m=kn(m),g--;for(;f--;){if(L===m||m!==null&&L===m.alternate)break t;L=kn(L),m=kn(m)}L=null}else L=null;C!==null&&qs(b,w,C,L,!1),P!==null&&fe!==null&&qs(b,fe,P,L,!0)}}e:{if(w=y?Sn(y):window,C=w.nodeName&&w.nodeName.toLowerCase(),C==="select"||C==="input"&&w.type==="file")var A=ed;else if(Ls(w))if(Rs)A=od;else{A=nd;var O=td}else(C=w.nodeName)&&C.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(A=rd);if(A&&(A=A(e,y))){As(b,A,n,k);break e}O&&O(e,w,y),e==="focusout"&&(O=w._wrapperState)&&O.controlled&&w.type==="number"&&Fo(w,"number",w.value)}switch(O=y?Sn(y):window,e){case"focusin":(Ls(O)||O.contentEditable==="true")&&(wn=O,pi=y,rr=null);break;case"focusout":rr=pi=wn=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,$s(b,n,k);break;case"selectionchange":if(sd)break;case"keydown":case"keyup":$s(b,n,k)}var I;if(ui)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else vn?zs(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Ts&&n.locale!=="ko"&&(vn||B!=="onCompositionStart"?B==="onCompositionEnd"&&vn&&(I=bs()):(It=k,ri="value"in It?It.value:It.textContent,vn=!0)),O=Kr(y,B),0<O.length&&(B=new Es(B,e,null,n,k),b.push({event:B,listeners:O}),I?B.data=I:(I=Ps(n),I!==null&&(B.data=I)))),(I=Yc?Zc(e,n):Jc(e,n))&&(y=Kr(y,"onBeforeInput"),0<y.length&&(k=new Es("onBeforeInput","beforeinput",null,n,k),b.push({event:k,listeners:y}),k.data=I))}Js(b,t)})}function lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Un(e,n),i!=null&&r.unshift(lr(e,i,o)),i=Un(e,t),i!=null&&r.push(lr(e,i,o))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,y=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&y!==null&&(u=y,o?(d=Un(n,i),d!=null&&l.unshift(lr(n,d,u))):o||(d=Un(n,i),d!=null&&l.push(lr(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var dd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function ea(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(fd,"")}function Qr(e,t,n){if(t=ea(t),ea(e)!==t&&n)throw Error(c(425))}function Gr(){}var xi=null,ki=null;function bi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,pd=typeof clearTimeout=="function"?clearTimeout:void 0,ta=typeof Promise=="function"?Promise:void 0,hd=typeof queueMicrotask=="function"?queueMicrotask:typeof ta<"u"?function(e){return ta.resolve(null).then(e).catch(md)}:Si;function md(e){setTimeout(function(){throw e})}function Ni(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zn(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function na(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),ht="__reactFiber$"+bn,sr="__reactProps$"+bn,kt="__reactContainer$"+bn,Ei="__reactEvents$"+bn,gd="__reactListeners$"+bn,yd="__reactHandles$"+bn;function en(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=na(e);e!==null;){if(n=e[ht])return n;e=na(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[ht]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Yr(e){return e[sr]||null}var ji=[],Nn=-1;function Mt(e){return{current:e}}function re(e){0>Nn||(e.current=ji[Nn],ji[Nn]=null,Nn--)}function te(e,t){Nn++,ji[Nn]=e.current,e.current=t}var Bt={},Se=Mt(Bt),Le=Mt(!1),tn=Bt;function En(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Zr(){re(Le),re(Se)}function ra(e,t,n){if(Se.current!==Bt)throw Error(c(168));te(Se,t),te(Le,n)}function oa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(c(108,ee(e)||"Unknown",o));return z({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,tn=Se.current,te(Se,e),te(Le,Le.current),!0}function ia(e,t,n){var r=e.stateNode;if(!r)throw Error(c(169));n?(e=oa(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,re(Le),re(Se),te(Se,e)):re(Le),te(Le,n)}var bt=null,Xr=!1,Ti=!1;function la(e){bt===null?bt=[e]:bt.push(e)}function vd(e){Xr=!0,la(e)}function Ut(){if(!Ti&&bt!==null){Ti=!0;var e=0,t=X;try{var n=bt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,Xr=!1}catch(o){throw bt!==null&&(bt=bt.slice(e+1)),as(Yo,Ut),o}finally{X=t,Ti=!1}}return null}var jn=[],Tn=0,qr=null,eo=0,Qe=[],Ge=0,nn=null,St=1,Nt="";function rn(e,t){jn[Tn++]=eo,jn[Tn++]=qr,qr=e,eo=t}function sa(e,t,n){Qe[Ge++]=St,Qe[Ge++]=Nt,Qe[Ge++]=nn,nn=e;var r=St;e=Nt;var o=32-rt(r)-1;r&=~(1<<o),n+=1;var i=32-rt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,St=1<<32-rt(t)+o|n<<o|r,Nt=i+e}else St=1<<i|n<<o|r,Nt=e}function Ci(e){e.return!==null&&(rn(e,1),sa(e,1,0))}function _i(e){for(;e===qr;)qr=jn[--Tn],jn[Tn]=null,eo=jn[--Tn],jn[Tn]=null;for(;e===nn;)nn=Qe[--Ge],Qe[Ge]=null,Nt=Qe[--Ge],Qe[Ge]=null,St=Qe[--Ge],Qe[Ge]=null}var $e=null,He=null,le=!1,it=null;function aa(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ua(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,He=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:St,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,He=null,!0):!1;default:return!1}}function zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(le){var t=He;if(t){var n=t;if(!ua(e,t)){if(zi(e))throw Error(c(418));t=Ft(n.nextSibling);var r=$e;t&&ua(e,t)?aa(r,n):(e.flags=e.flags&-4097|2,le=!1,$e=e)}}else{if(zi(e))throw Error(c(418));e.flags=e.flags&-4097|2,le=!1,$e=e}}}function ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function to(e){if(e!==$e)return!1;if(!le)return ca(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bi(e.type,e.memoizedProps)),t&&(t=He)){if(zi(e))throw da(),Error(c(418));for(;t;)aa(e,t),t=Ft(t.nextSibling)}if(ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=$e?Ft(e.stateNode.nextSibling):null;return!0}function da(){for(var e=He;e;)e=Ft(e.nextSibling)}function Cn(){He=$e=null,le=!1}function Li(e){it===null?it=[e]:it.push(e)}var wd=be.ReactCurrentBatchConfig;function ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var u=o.refs;l===null?delete u[i]:u[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function no(e,t){throw e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fa(e){var t=e._init;return t(e._payload)}function pa(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=Yt(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,f,g,N){return f===null||f.tag!==6?(f=Sl(g,m.mode,N),f.return=m,f):(f=o(f,g),f.return=m,f)}function d(m,f,g,N){var A=g.type;return A===ze?k(m,f,g.props.children,N,g.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Pe&&fa(A)===f.type)?(N=o(f,g.props),N.ref=ur(m,f,g),N.return=m,N):(N=To(g.type,g.key,g.props,null,m.mode,N),N.ref=ur(m,f,g),N.return=m,N)}function y(m,f,g,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Nl(g,m.mode,N),f.return=m,f):(f=o(f,g.children||[]),f.return=m,f)}function k(m,f,g,N,A){return f===null||f.tag!==7?(f=fn(g,m.mode,N,A),f.return=m,f):(f=o(f,g),f.return=m,f)}function b(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Sl(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tt:return g=To(f.type,f.key,f.props,null,m.mode,g),g.ref=ur(m,null,f),g.return=m,g;case Te:return f=Nl(f,m.mode,g),f.return=m,f;case Pe:var N=f._init;return b(m,N(f._payload),g)}if(Fn(f)||F(f))return f=fn(f,m.mode,g,null),f.return=m,f;no(m,f)}return null}function w(m,f,g,N){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:u(m,f,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tt:return g.key===A?d(m,f,g,N):null;case Te:return g.key===A?y(m,f,g,N):null;case Pe:return A=g._init,w(m,f,A(g._payload),N)}if(Fn(g)||F(g))return A!==null?null:k(m,f,g,N,null);no(m,g)}return null}function C(m,f,g,N,A){if(typeof N=="string"&&N!==""||typeof N=="number")return m=m.get(g)||null,u(f,m,""+N,A);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case tt:return m=m.get(N.key===null?g:N.key)||null,d(f,m,N,A);case Te:return m=m.get(N.key===null?g:N.key)||null,y(f,m,N,A);case Pe:var O=N._init;return C(m,f,g,O(N._payload),A)}if(Fn(N)||F(N))return m=m.get(g)||null,k(f,m,N,A,null);no(f,N)}return null}function P(m,f,g,N){for(var A=null,O=null,I=f,B=f=0,ve=null;I!==null&&B<g.length;B++){I.index>B?(ve=I,I=null):ve=I.sibling;var Z=w(m,I,g[B],N);if(Z===null){I===null&&(I=ve);break}e&&I&&Z.alternate===null&&t(m,I),f=i(Z,f,B),O===null?A=Z:O.sibling=Z,O=Z,I=ve}if(B===g.length)return n(m,I),le&&rn(m,B),A;if(I===null){for(;B<g.length;B++)I=b(m,g[B],N),I!==null&&(f=i(I,f,B),O===null?A=I:O.sibling=I,O=I);return le&&rn(m,B),A}for(I=r(m,I);B<g.length;B++)ve=C(I,m,B,g[B],N),ve!==null&&(e&&ve.alternate!==null&&I.delete(ve.key===null?B:ve.key),f=i(ve,f,B),O===null?A=ve:O.sibling=ve,O=ve);return e&&I.forEach(function(Zt){return t(m,Zt)}),le&&rn(m,B),A}function L(m,f,g,N){var A=F(g);if(typeof A!="function")throw Error(c(150));if(g=A.call(g),g==null)throw Error(c(151));for(var O=A=null,I=f,B=f=0,ve=null,Z=g.next();I!==null&&!Z.done;B++,Z=g.next()){I.index>B?(ve=I,I=null):ve=I.sibling;var Zt=w(m,I,Z.value,N);if(Zt===null){I===null&&(I=ve);break}e&&I&&Zt.alternate===null&&t(m,I),f=i(Zt,f,B),O===null?A=Zt:O.sibling=Zt,O=Zt,I=ve}if(Z.done)return n(m,I),le&&rn(m,B),A;if(I===null){for(;!Z.done;B++,Z=g.next())Z=b(m,Z.value,N),Z!==null&&(f=i(Z,f,B),O===null?A=Z:O.sibling=Z,O=Z);return le&&rn(m,B),A}for(I=r(m,I);!Z.done;B++,Z=g.next())Z=C(I,m,B,Z.value,N),Z!==null&&(e&&Z.alternate!==null&&I.delete(Z.key===null?B:Z.key),f=i(Z,f,B),O===null?A=Z:O.sibling=Z,O=Z);return e&&I.forEach(function(Xd){return t(m,Xd)}),le&&rn(m,B),A}function fe(m,f,g,N){if(typeof g=="object"&&g!==null&&g.type===ze&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case tt:e:{for(var A=g.key,O=f;O!==null;){if(O.key===A){if(A=g.type,A===ze){if(O.tag===7){n(m,O.sibling),f=o(O,g.props.children),f.return=m,m=f;break e}}else if(O.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Pe&&fa(A)===O.type){n(m,O.sibling),f=o(O,g.props),f.ref=ur(m,O,g),f.return=m,m=f;break e}n(m,O);break}else t(m,O);O=O.sibling}g.type===ze?(f=fn(g.props.children,m.mode,N,g.key),f.return=m,m=f):(N=To(g.type,g.key,g.props,null,m.mode,N),N.ref=ur(m,f,g),N.return=m,m=N)}return l(m);case Te:e:{for(O=g.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=o(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=Nl(g,m.mode,N),f.return=m,m=f}return l(m);case Pe:return O=g._init,fe(m,f,O(g._payload),N)}if(Fn(g))return P(m,f,g,N);if(F(g))return L(m,f,g,N);no(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=o(f,g),f.return=m,m=f):(n(m,f),f=Sl(g,m.mode,N),f.return=m,m=f),l(m)):n(m,f)}return fe}var _n=pa(!0),ha=pa(!1),ro=Mt(null),oo=null,zn=null,Ai=null;function Ri(){Ai=zn=oo=null}function Oi(e){var t=ro.current;re(ro),e._currentValue=t}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){oo=e,Ai=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Re=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Ai!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(oo===null)throw Error(c(308));zn=e,oo.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var on=null;function Di(e){on===null?on=[e]:on.push(e)}function ma(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Di(t)):(n.next=o.next,o.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Et(e,n)}return o=r.interleaved,o===null?(t.next=t,Di(r)):(t.next=o.next,o.next=t),r.interleaved=t,Et(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xo(e,n)}}function ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var o=e.updateQueue;$t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var d=u,y=d.next;d.next=null,l===null?i=y:l.next=y,l=d;var k=e.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==l&&(u===null?k.firstBaseUpdate=y:u.next=y,k.lastBaseUpdate=d))}if(i!==null){var b=o.baseState;l=0,k=y=d=null,u=i;do{var w=u.lane,C=u.eventTime;if((r&w)===w){k!==null&&(k=k.next={eventTime:C,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var P=e,L=u;switch(w=t,C=n,L.tag){case 1:if(P=L.payload,typeof P=="function"){b=P.call(C,b,w);break e}b=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=L.payload,w=typeof P=="function"?P.call(C,b,w):P,w==null)break e;b=z({},b,w);break e;case 2:$t=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=o.effects,w===null?o.effects=[u]:w.push(u))}else C={eventTime:C,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(y=k=C,d=b):k=k.next=C,l|=w;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;w=u,u=w.next,w.next=null,o.lastBaseUpdate=w,o.shared.pending=null}}while(!0);if(k===null&&(d=b),o.baseState=d,o.firstBaseUpdate=y,o.lastBaseUpdate=k,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);an|=l,e.lanes=l,e.memoizedState=b}}function va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(c(191,o));o.call(r)}}}var cr={},mt=Mt(cr),dr=Mt(cr),fr=Mt(cr);function ln(e){if(e===cr)throw Error(c(174));return e}function Mi(e,t){switch(te(fr,t),te(dr,e),te(mt,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bo(t,e)}re(mt),te(mt,t)}function Ln(){re(mt),re(dr),re(fr)}function wa(e){ln(fr.current);var t=ln(mt.current),n=Bo(t,e.type);t!==n&&(te(dr,e),te(mt,n))}function Bi(e){dr.current===e&&(re(mt),re(dr))}var se=Mt(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=[];function $i(){for(var e=0;e<Ui.length;e++)Ui[e]._workInProgressVersionPrimary=null;Ui.length=0}var ao=be.ReactCurrentDispatcher,Hi=be.ReactCurrentBatchConfig,sn=0,ae=null,he=null,ge=null,uo=!1,pr=!1,hr=0,xd=0;function Ne(){throw Error(c(321))}function Wi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Vi(e,t,n,r,o,i){if(sn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ao.current=e===null||e.memoizedState===null?Nd:Ed,e=n(r,o),pr){i=0;do{if(pr=!1,hr=0,25<=i)throw Error(c(301));i+=1,ge=he=null,t.updateQueue=null,ao.current=jd,e=n(r,o)}while(pr)}if(ao.current=po,t=he!==null&&he.next!==null,sn=0,ge=he=ae=null,uo=!1,t)throw Error(c(300));return e}function Ki(){var e=hr!==0;return hr=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ae.memoizedState=ge=e:ge=ge.next=e,ge}function Ze(){if(he===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ge===null?ae.memoizedState:ge.next;if(t!==null)ge=t,he=e;else{if(e===null)throw Error(c(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?ae.memoizedState=ge=e:ge=ge.next=e}return ge}function mr(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,d=null,y=i;do{var k=y.lane;if((sn&k)===k)d!==null&&(d=d.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var b={lane:k,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};d===null?(u=d=b,l=r):d=d.next=b,ae.lanes|=k,an|=k}y=y.next}while(y!==null&&y!==i);d===null?l=r:d.next=u,ot(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,an|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ot(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xa(){}function ka(e,t){var n=ae,r=Ze(),o=t(),i=!ot(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,Yi(Na.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,gr(9,Sa.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(c(349));(sn&30)!==0||ba(n,t,o)}return o}function ba(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sa(e,t,n,r){t.value=n,t.getSnapshot=r,Ea(t)&&ja(e)}function Na(e,t,n){return n(function(){Ea(t)&&ja(e)})}function Ea(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function ja(e){var t=Et(e,1);t!==null&&ut(t,e,1,-1)}function Ta(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Sd.bind(null,ae,e),[t.memoizedState,e]}function gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ca(){return Ze().memoizedState}function co(e,t,n,r){var o=gt();ae.flags|=e,o.memoizedState=gr(1|t,n,void 0,r===void 0?null:r)}function fo(e,t,n,r){var o=Ze();r=r===void 0?null:r;var i=void 0;if(he!==null){var l=he.memoizedState;if(i=l.destroy,r!==null&&Wi(r,l.deps)){o.memoizedState=gr(t,n,i,r);return}}ae.flags|=e,o.memoizedState=gr(1|t,n,i,r)}function _a(e,t){return co(8390656,8,e,t)}function Yi(e,t){return fo(2048,8,e,t)}function za(e,t){return fo(4,2,e,t)}function Pa(e,t){return fo(4,4,e,t)}function La(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Aa(e,t,n){return n=n!=null?n.concat([e]):null,fo(4,4,La.bind(null,t,e),n)}function Zi(){}function Ra(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oa(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ia(e,t,n){return(sn&21)===0?(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n):(ot(n,t)||(n=fs(),ae.lanes|=n,an|=n,e.baseState=!0),t)}function kd(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),t()}finally{X=n,Hi.transition=r}}function Da(){return Ze().memoizedState}function bd(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fa(e))Ma(t,n);else if(n=ma(e,t,n,r),n!==null){var o=_e();ut(n,e,r,o),Ba(n,t,r)}}function Sd(e,t,n){var r=Qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fa(e))Ma(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,u=i(l,n);if(o.hasEagerState=!0,o.eagerState=u,ot(u,l)){var d=t.interleaved;d===null?(o.next=o,Di(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=ma(e,t,o,r),n!==null&&(o=_e(),ut(n,e,r,o),Ba(n,t,r))}}function Fa(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Ma(e,t){pr=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ba(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xo(e,n)}}var po={readContext:Ye,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Nd={readContext:Ye,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:_a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,co(4194308,4,La.bind(null,t,e),n)},useLayoutEffect:function(e,t){return co(4194308,4,e,t)},useInsertionEffect:function(e,t){return co(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bd.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Ta,useDebugValue:Zi,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Ta(!1),t=e[0];return e=kd.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=gt();if(le){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),ye===null)throw Error(c(349));(sn&30)!==0||ba(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,_a(Na.bind(null,r,i,e),[e]),r.flags|=2048,gr(9,Sa.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=ye.identifierPrefix;if(le){var n=Nt,r=St;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ed={readContext:Ye,useCallback:Ra,useContext:Ye,useEffect:Yi,useImperativeHandle:Aa,useInsertionEffect:za,useLayoutEffect:Pa,useMemo:Oa,useReducer:Qi,useRef:Ca,useState:function(){return Qi(mr)},useDebugValue:Zi,useDeferredValue:function(e){var t=Ze();return Ia(t,he.memoizedState,e)},useTransition:function(){var e=Qi(mr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:xa,useSyncExternalStore:ka,useId:Da,unstable_isNewReconciler:!1},jd={readContext:Ye,useCallback:Ra,useContext:Ye,useEffect:Yi,useImperativeHandle:Aa,useInsertionEffect:za,useLayoutEffect:Pa,useMemo:Oa,useReducer:Gi,useRef:Ca,useState:function(){return Gi(mr)},useDebugValue:Zi,useDeferredValue:function(e){var t=Ze();return he===null?t.memoizedState=e:Ia(t,he.memoizedState,e)},useTransition:function(){var e=Gi(mr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:xa,useSyncExternalStore:ka,useId:Da,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ji(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ho={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Qt(e),i=jt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(ut(t,e,o,r),io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Qt(e),i=jt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(ut(t,e,o,r),io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Qt(e),o=jt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ht(e,o,r),t!==null&&(ut(t,e,r,n),io(t,e,r))}};function Ua(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!nr(n,r)||!nr(o,i):!0}function $a(e,t,n){var r=!1,o=Bt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(o=Ae(t)?tn:Se.current,r=t.contextTypes,i=(r=r!=null)?En(e,o):Bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ha(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fi(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ye(i):(i=Ae(t)?tn:Se.current,o.context=En(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ji(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ho.enqueueReplaceState(o,o.state,null),lo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function An(e,t){try{var n="",r=t;do n+=G(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function el(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Td=typeof WeakMap=="function"?WeakMap:Map;function Wa(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ko||(ko=!0,ml=r),el(e,t)},n}function Va(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){el(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){el(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ka(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Td;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ud.bind(null,e,t,n),t.then(e,e))}function Qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Cd=be.ReactCurrentOwner,Re=!1;function Ce(e,t,n,r){t.child=e===null?ha(t,null,n,r):_n(t,e.child,n,r)}function Ya(e,t,n,r,o){n=n.render;var i=t.ref;return Pn(t,o),r=Vi(e,t,n,r,i,o),n=Ki(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(le&&n&&Ci(t),t.flags|=1,Ce(e,t,r,o),t.child)}function Za(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!bl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ja(e,t,i,r,o)):(e=To(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:nr,n(l,r)&&e.ref===t.ref)return Tt(e,t,o)}return t.flags|=1,e=Yt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ja(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(nr(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,Tt(e,t,o)}return tl(e,t,n,r,o)}function Xa(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(On,We),We|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(On,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(On,We),We|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(On,We),We|=r;return Ce(e,t,o,n),t.child}function qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tl(e,t,n,r,o){var i=Ae(n)?tn:Se.current;return i=En(t,i),Pn(t,o),n=Vi(e,t,n,r,i,o),r=Ki(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Tt(e,t,o)):(le&&r&&Ci(t),t.flags|=1,Ce(e,t,n,o),t.child)}function eu(e,t,n,r,o){if(Ae(n)){var i=!0;Jr(t)}else i=!1;if(Pn(t,o),t.stateNode===null)go(e,t),$a(t,n,r),Xi(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,y=n.contextType;typeof y=="object"&&y!==null?y=Ye(y):(y=Ae(n)?tn:Se.current,y=En(t,y));var k=n.getDerivedStateFromProps,b=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function";b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==y)&&Ha(t,l,r,y),$t=!1;var w=t.memoizedState;l.state=w,lo(t,r,l,o),d=t.memoizedState,u!==r||w!==d||Le.current||$t?(typeof k=="function"&&(Ji(t,n,k,r),d=t.memoizedState),(u=$t||Ua(t,n,u,r,w,d,y))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=y,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ga(e,t),u=t.memoizedProps,y=t.type===t.elementType?u:lt(t.type,u),l.props=y,b=t.pendingProps,w=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ye(d):(d=Ae(n)?tn:Se.current,d=En(t,d));var C=n.getDerivedStateFromProps;(k=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==b||w!==d)&&Ha(t,l,r,d),$t=!1,w=t.memoizedState,l.state=w,lo(t,r,l,o);var P=t.memoizedState;u!==b||w!==P||Le.current||$t?(typeof C=="function"&&(Ji(t,n,C,r),P=t.memoizedState),(y=$t||Ua(t,n,y,r,w,P,d)||!1)?(k||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,P,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,P,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=P),l.props=r,l.state=P,l.context=d,r=y):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return nl(e,t,n,r,i,o)}function nl(e,t,n,r,o,i){qa(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ia(t,n,!1),Tt(e,t,i);r=t.stateNode,Cd.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=_n(t,e.child,null,i),t.child=_n(t,null,u,i)):Ce(e,t,u,i),t.memoizedState=r.state,o&&ia(t,n,!0),t.child}function tu(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),Mi(e,t.containerInfo)}function nu(e,t,n,r,o){return Cn(),Li(o),t.flags|=256,Ce(e,t,n,r),t.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function ru(e,t,n){var r=t.pendingProps,o=se.current,i=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(se,o&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Co(l,r,0,null),e=fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ol(n),t.memoizedState=rl,e):il(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return _d(e,t,l,r,u,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,u=o.sibling;var d={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Yt(o,d),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=Yt(u,i):(i=fn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ol(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=rl,r}return i=e.child,e=i.sibling,r=Yt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function il(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&Li(r),_n(t,e.child,null,n),e=il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _d(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=qi(Error(c(422))),mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Co({mode:"visible",children:r.children},o,0,null),i=fn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&_n(t,e.child,null,l),t.child.memoizedState=ol(l),t.memoizedState=rl,i);if((t.mode&1)===0)return mo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(c(419)),r=qi(i,r,void 0),mo(e,t,l,r)}if(u=(l&e.childLanes)!==0,Re||u){if(r=ye,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Et(e,o),ut(r,e,o,-1))}return kl(),r=qi(Error(c(421))),mo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=$d.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,He=Ft(o.nextSibling),$e=t,le=!0,it=null,e!==null&&(Qe[Ge++]=St,Qe[Ge++]=Nt,Qe[Ge++]=nn,St=e.id,Nt=e.overflow,nn=t),t=il(t,r.children),t.flags|=4096,t)}function ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function ll(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function iu(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ce(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,n,t);else if(e.tag===19)ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ll(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&so(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ll(t,!0,n,null,i);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function go(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zd(e,t,n){switch(t.tag){case 3:tu(t),Cn();break;case 5:wa(t);break;case 1:Ae(t.type)&&Jr(t);break;case 4:Mi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(ro,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ru(e,t,n):(te(se,se.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return iu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Xa(e,t,n)}return Tt(e,t,n)}var lu,sl,su,au;lu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},sl=function(){},su=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ln(mt.current);var i=null;switch(n){case"input":o=Io(e,o),r=Io(e,r),i=[];break;case"select":o=z({},o,{value:void 0}),r=z({},r,{value:void 0}),i=[];break;case"textarea":o=Mo(e,o),r=Mo(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}Uo(n,r);var l;n=null;for(y in o)if(!r.hasOwnProperty(y)&&o.hasOwnProperty(y)&&o[y]!=null)if(y==="style"){var u=o[y];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(E.hasOwnProperty(y)?i||(i=[]):(i=i||[]).push(y,null));for(y in r){var d=r[y];if(u=o!=null?o[y]:void 0,r.hasOwnProperty(y)&&d!==u&&(d!=null||u!=null))if(y==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(i||(i=[]),i.push(y,n)),n=d;else y==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(i=i||[]).push(y,d)):y==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(y,""+d):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(E.hasOwnProperty(y)?(d!=null&&y==="onScroll"&&ne("scroll",e),i||u===d||(i=[])):(i=i||[]).push(y,d))}n&&(i=i||[]).push("style",n);var y=i;(t.updateQueue=y)&&(t.flags|=4)}},au=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pd(e,t,n){var r=t.pendingProps;switch(_i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ae(t.type)&&Zr(),Ee(t),null;case 3:return r=t.stateNode,Ln(),re(Le),re(Se),$i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(to(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(vl(it),it=null))),sl(e,t),Ee(t),null;case 5:Bi(t);var o=ln(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)su(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(c(166));return Ee(t),null}if(e=ln(mt.current),to(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ht]=t,r[sr]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<or.length;o++)ne(or[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":$l(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Vl(r,i),ne("invalid",r)}Uo(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,u,e),o=["children",""+u]):E.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":Nr(r),Wl(r,i,!0);break;case"textarea":Nr(r),Ql(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gr)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ht]=t,e[sr]=r,lu(e,t,!1,!1),t.stateNode=e;e:{switch(l=$o(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<or.length;o++)ne(or[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":$l(e,r),o=Io(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=z({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Vl(e,r),o=Mo(e,r),ne("invalid",e);break;default:o=r}Uo(n,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var d=u[i];i==="style"?Jl(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Yl(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Mn(e,d):typeof d=="number"&&Mn(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(E.hasOwnProperty(i)?d!=null&&i==="onScroll"&&ne("scroll",e):d!=null&&et(e,i,d,l))}switch(n){case"input":Nr(e),Wl(e,r,!1);break;case"textarea":Nr(e),Ql(e);break;case"option":r.value!=null&&e.setAttribute("value",""+J(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Gr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)au(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(c(166));if(n=ln(fr.current),ln(mt.current),to(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return Ee(t),null;case 13:if(re(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&He!==null&&(t.mode&1)!==0&&(t.flags&128)===0)da(),Cn(),t.flags|=98560,i=!1;else if(i=to(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[ht]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else it!==null&&(vl(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?me===0&&(me=3):kl())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Ln(),sl(e,t),e===null&&ir(t.stateNode.containerInfo),Ee(t),null;case 10:return Oi(t.type._context),Ee(t),null;case 17:return Ae(t.type)&&Zr(),Ee(t),null;case 19:if(re(se),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)yr(i,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=so(e),l!==null){for(t.flags|=128,yr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>In&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304)}else{if(!r)if(e=so(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!le)return Ee(t),null}else 2*de()-i.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return xl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(We&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(c(156,t.tag))}function Ld(e,t){switch(_i(t),t.tag){case 1:return Ae(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),re(Le),re(Se),$i(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bi(t),null;case 13:if(re(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(se),null;case 4:return Ln(),null;case 10:return Oi(t.type._context),null;case 22:case 23:return xl(),null;case 24:return null;default:return null}}var yo=!1,je=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,_=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function al(e,t,n){try{n()}catch(r){ce(e,t,r)}}var uu=!1;function Rd(e,t){if(xi=Ir,e=Us(),fi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,y=0,k=0,b=e,w=null;t:for(;;){for(var C;b!==n||o!==0&&b.nodeType!==3||(u=l+o),b!==i||r!==0&&b.nodeType!==3||(d=l+r),b.nodeType===3&&(l+=b.nodeValue.length),(C=b.firstChild)!==null;)w=b,b=C;for(;;){if(b===e)break t;if(w===n&&++y===o&&(u=l),w===i&&++k===r&&(d=l),(C=b.nextSibling)!==null)break;b=w,w=b.parentNode}b=C}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},Ir=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var P=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var L=P.memoizedProps,fe=P.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?L:lt(t.type,L),fe);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(N){ce(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return P=uu,uu=!1,P}function vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&al(t,n,i)}o=o.next}while(o!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ul(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cu(e){var t=e.alternate;t!==null&&(e.alternate=null,cu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[sr],delete t[Ei],delete t[gd],delete t[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function du(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(cl(e,t,n),e=e.sibling;e!==null;)cl(e,t,n),e=e.sibling}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}var we=null,st=!1;function Wt(e,t,n){for(n=n.child;n!==null;)pu(e,t,n),n=n.sibling}function pu(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(zr,n)}catch{}switch(n.tag){case 5:je||Rn(n,t);case 6:var r=we,o=st;we=null,Wt(e,t,n),we=r,st=o,we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?Ni(e.parentNode,n):e.nodeType===1&&Ni(e,n),Zn(e)):Ni(we,n.stateNode));break;case 4:r=we,o=st,we=n.stateNode.containerInfo,st=!0,Wt(e,t,n),we=r,st=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&al(n,t,l),o=o.next}while(o!==r)}Wt(e,t,n);break;case 1:if(!je&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ce(n,t,u)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Wt(e,t,n),je=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ad),t.forEach(function(r){var o=Hd.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:we=u.stateNode,st=!1;break e;case 3:we=u.stateNode.containerInfo,st=!0;break e;case 4:we=u.stateNode.containerInfo,st=!0;break e}u=u.return}if(we===null)throw Error(c(160));pu(i,l,o),we=null,st=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(y){ce(o,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mu(t,e),t=t.sibling}function mu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),yt(e),r&4){try{vr(3,e,e.return),vo(3,e)}catch(L){ce(e,e.return,L)}try{vr(5,e,e.return)}catch(L){ce(e,e.return,L)}}break;case 1:at(t,e),yt(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(at(t,e),yt(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var o=e.stateNode;try{Mn(o,"")}catch(L){ce(e,e.return,L)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Hl(o,i),$o(u,l);var y=$o(u,i);for(l=0;l<d.length;l+=2){var k=d[l],b=d[l+1];k==="style"?Jl(o,b):k==="dangerouslySetInnerHTML"?Yl(o,b):k==="children"?Mn(o,b):et(o,k,b,y)}switch(u){case"input":Do(o,i);break;case"textarea":Kl(o,i);break;case"select":var w=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?pn(o,!!i.multiple,C,!1):w!==!!i.multiple&&(i.defaultValue!=null?pn(o,!!i.multiple,i.defaultValue,!0):pn(o,!!i.multiple,i.multiple?[]:"",!1))}o[sr]=i}catch(L){ce(e,e.return,L)}}break;case 6:if(at(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(c(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(L){ce(e,e.return,L)}}break;case 3:if(at(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(L){ce(e,e.return,L)}break;case 4:at(t,e),yt(e);break;case 13:at(t,e),yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(hl=de())),r&4&&hu(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(je=(y=je)||k,at(t,e),je=y):at(t,e),yt(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!k&&(e.mode&1)!==0)for(_=e,k=e.child;k!==null;){for(b=_=k;_!==null;){switch(w=_,C=w.child,w.tag){case 0:case 11:case 14:case 15:vr(4,w,w.return);break;case 1:Rn(w,w.return);var P=w.stateNode;if(typeof P.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,P.props=t.memoizedProps,P.state=t.memoizedState,P.componentWillUnmount()}catch(L){ce(r,n,L)}}break;case 5:Rn(w,w.return);break;case 22:if(w.memoizedState!==null){vu(b);continue}}C!==null?(C.return=w,_=C):vu(b)}k=k.sibling}e:for(k=null,b=e;;){if(b.tag===5){if(k===null){k=b;try{o=b.stateNode,y?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=b.stateNode,d=b.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Zl("display",l))}catch(L){ce(e,e.return,L)}}}else if(b.tag===6){if(k===null)try{b.stateNode.nodeValue=y?"":b.memoizedProps}catch(L){ce(e,e.return,L)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;k===b&&(k=null),b=b.return}k===b&&(k=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:at(t,e),yt(e),r&4&&hu(e);break;case 21:break;default:at(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(du(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Mn(o,""),r.flags&=-33);var i=fu(e);dl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=fu(e);cl(e,u,l);break;default:throw Error(c(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Od(e,t,n){_=e,gu(e)}function gu(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||yo;if(!l){var u=o.alternate,d=u!==null&&u.memoizedState!==null||je;u=yo;var y=je;if(yo=l,(je=d)&&!y)for(_=o;_!==null;)l=_,d=l.child,l.tag===22&&l.memoizedState!==null?wu(o):d!==null?(d.return=l,_=d):wu(o);for(;i!==null;)_=i,gu(i),i=i.sibling;_=o,yo=u,je=y}yu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,_=i):yu(e)}}function yu(e){for(;_!==null;){var t=_;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:je||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&va(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}va(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var k=y.memoizedState;if(k!==null){var b=k.dehydrated;b!==null&&Zn(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}je||t.flags&512&&ul(t)}catch(w){ce(t,t.return,w)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function vu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function wu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(d){ce(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(d){ce(t,o,d)}}var i=t.return;try{ul(t)}catch(d){ce(t,i,d)}break;case 5:var l=t.return;try{ul(t)}catch(d){ce(t,l,d)}}}catch(d){ce(t,t.return,d)}if(t===e){_=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_=u;break}_=t.return}}var Id=Math.ceil,wo=be.ReactCurrentDispatcher,fl=be.ReactCurrentOwner,Je=be.ReactCurrentBatchConfig,K=0,ye=null,pe=null,xe=0,We=0,On=Mt(0),me=0,wr=null,an=0,xo=0,pl=0,xr=null,Oe=null,hl=0,In=1/0,Ct=null,ko=!1,ml=null,Vt=null,bo=!1,Kt=null,So=0,kr=0,gl=null,No=-1,Eo=0;function _e(){return(K&6)!==0?de():No!==-1?No:No=de()}function Qt(e){return(e.mode&1)===0?1:(K&2)!==0&&xe!==0?xe&-xe:wd.transition!==null?(Eo===0&&(Eo=fs()),Eo):(e=X,e!==0||(e=window.event,e=e===void 0?16:ks(e.type)),e)}function ut(e,t,n,r){if(50<kr)throw kr=0,gl=null,Error(c(185));Vn(e,n,r),((K&2)===0||e!==ye)&&(e===ye&&((K&2)===0&&(xo|=n),me===4&&Gt(e,xe)),Ie(e,r),n===1&&K===0&&(t.mode&1)===0&&(In=de()+500,Xr&&Ut()))}function Ie(e,t){var n=e.callbackNode;wc(e,t);var r=Ar(e,e===ye?xe:0);if(r===0)n!==null&&us(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&us(n),t===1)e.tag===0?vd(ku.bind(null,e)):la(ku.bind(null,e)),hd(function(){(K&6)===0&&Ut()}),n=null;else{switch(ps(r)){case 1:n=Yo;break;case 4:n=cs;break;case 16:n=_r;break;case 536870912:n=ds;break;default:n=_r}n=_u(n,xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xu(e,t){if(No=-1,Eo=0,(K&6)!==0)throw Error(c(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Ar(e,e===ye?xe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=jo(e,r);else{t=r;var o=K;K|=2;var i=Su();(ye!==e||xe!==t)&&(Ct=null,In=de()+500,cn(e,t));do try{Md();break}catch(u){bu(e,u)}while(!0);Ri(),wo.current=i,K=o,pe!==null?t=0:(ye=null,xe=0,t=me)}if(t!==0){if(t===2&&(o=Zo(e),o!==0&&(r=o,t=yl(e,o))),t===1)throw n=wr,cn(e,0),Gt(e,r),Ie(e,de()),n;if(t===6)Gt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Dd(o)&&(t=jo(e,r),t===2&&(i=Zo(e),i!==0&&(r=i,t=yl(e,i))),t===1))throw n=wr,cn(e,0),Gt(e,r),Ie(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(c(345));case 2:dn(e,Oe,Ct);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=hl+500-de(),10<t)){if(Ar(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Si(dn.bind(null,e,Oe,Ct),t);break}dn(e,Oe,Ct);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-rt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Id(r/1960))-r,10<r){e.timeoutHandle=Si(dn.bind(null,e,Oe,Ct),r);break}dn(e,Oe,Ct);break;case 5:dn(e,Oe,Ct);break;default:throw Error(c(329))}}}return Ie(e,de()),e.callbackNode===n?xu.bind(null,e):null}function yl(e,t){var n=xr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=jo(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&vl(t)),e}function vl(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Dd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ot(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~pl,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function ku(e){if((K&6)!==0)throw Error(c(327));Dn();var t=Ar(e,0);if((t&1)===0)return Ie(e,de()),null;var n=jo(e,t);if(e.tag!==0&&n===2){var r=Zo(e);r!==0&&(t=r,n=yl(e,r))}if(n===1)throw n=wr,cn(e,0),Gt(e,t),Ie(e,de()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Oe,Ct),Ie(e,de()),null}function wl(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(In=de()+500,Xr&&Ut())}}function un(e){Kt!==null&&Kt.tag===0&&(K&6)===0&&Dn();var t=K;K|=1;var n=Je.transition,r=X;try{if(Je.transition=null,X=1,e)return e()}finally{X=r,Je.transition=n,K=t,(K&6)===0&&Ut()}}function xl(){We=On.current,re(On)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pd(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:Ln(),re(Le),re(Se),$i();break;case 5:Bi(r);break;case 4:Ln();break;case 13:re(se);break;case 19:re(se);break;case 10:Oi(r.type._context);break;case 22:case 23:xl()}n=n.return}if(ye=e,pe=e=Yt(e.current,null),xe=We=t,me=0,wr=null,pl=xo=an=0,Oe=xr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}on=null}return e}function bu(e,t){do{var n=pe;try{if(Ri(),ao.current=po,uo){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(sn=0,ge=he=ae=null,pr=!1,hr=0,fl.current=null,n===null||n.return===null){me=1,wr=t,pe=null;break}e:{var i=e,l=n.return,u=n,d=t;if(t=xe,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var y=d,k=u,b=k.tag;if((k.mode&1)===0&&(b===0||b===11||b===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var C=Qa(l);if(C!==null){C.flags&=-257,Ga(C,l,u,i,t),C.mode&1&&Ka(i,y,t),t=C,d=y;var P=t.updateQueue;if(P===null){var L=new Set;L.add(d),t.updateQueue=L}else P.add(d);break e}else{if((t&1)===0){Ka(i,y,t),kl();break e}d=Error(c(426))}}else if(le&&u.mode&1){var fe=Qa(l);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),Ga(fe,l,u,i,t),Li(An(d,u));break e}}i=d=An(d,u),me!==4&&(me=2),xr===null?xr=[i]:xr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Wa(i,d,t);ya(i,m);break e;case 1:u=d;var f=i.type,g=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vt===null||!Vt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var N=Va(i,u,t);ya(i,N);break e}}i=i.return}while(i!==null)}Eu(n)}catch(A){t=A,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Su(){var e=wo.current;return wo.current=po,e===null?po:e}function kl(){(me===0||me===3||me===2)&&(me=4),ye===null||(an&268435455)===0&&(xo&268435455)===0||Gt(ye,xe)}function jo(e,t){var n=K;K|=2;var r=Su();(ye!==e||xe!==t)&&(Ct=null,cn(e,t));do try{Fd();break}catch(o){bu(e,o)}while(!0);if(Ri(),K=n,wo.current=r,pe!==null)throw Error(c(261));return ye=null,xe=0,me}function Fd(){for(;pe!==null;)Nu(pe)}function Md(){for(;pe!==null&&!cc();)Nu(pe)}function Nu(e){var t=Cu(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?Eu(e):pe=t,fl.current=null}function Eu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Pd(n,t,We),n!==null){pe=n;return}}else{if(n=Ld(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);me===0&&(me=5)}function dn(e,t,n){var r=X,o=Je.transition;try{Je.transition=null,X=1,Bd(e,t,n,r)}finally{Je.transition=o,X=r}return null}function Bd(e,t,n,r){do Dn();while(Kt!==null);if((K&6)!==0)throw Error(c(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(xc(e,i),e===ye&&(pe=ye=null,xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||bo||(bo=!0,_u(_r,function(){return Dn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Je.transition,Je.transition=null;var l=X;X=1;var u=K;K|=4,fl.current=null,Rd(e,n),mu(n,e),ld(ki),Ir=!!xi,ki=xi=null,e.current=n,Od(n),dc(),K=u,X=l,Je.transition=i}else e.current=n;if(bo&&(bo=!1,Kt=e,So=o),i=e.pendingLanes,i===0&&(Vt=null),hc(n.stateNode),Ie(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ko)throw ko=!1,e=ml,ml=null,e;return(So&1)!==0&&e.tag!==0&&Dn(),i=e.pendingLanes,(i&1)!==0?e===gl?kr++:(kr=0,gl=e):kr=0,Ut(),null}function Dn(){if(Kt!==null){var e=ps(So),t=Je.transition,n=X;try{if(Je.transition=null,X=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,So=0,(K&6)!==0)throw Error(c(331));var o=K;for(K|=4,_=e.current;_!==null;){var i=_,l=i.child;if((_.flags&16)!==0){var u=i.deletions;if(u!==null){for(var d=0;d<u.length;d++){var y=u[d];for(_=y;_!==null;){var k=_;switch(k.tag){case 0:case 11:case 15:vr(8,k,i)}var b=k.child;if(b!==null)b.return=k,_=b;else for(;_!==null;){k=_;var w=k.sibling,C=k.return;if(cu(k),k===y){_=null;break}if(w!==null){w.return=C,_=w;break}_=C}}}var P=i.alternate;if(P!==null){var L=P.child;if(L!==null){P.child=null;do{var fe=L.sibling;L.sibling=null,L=fe}while(L!==null)}}_=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:vr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,_=m;break e}_=i.return}}var f=e.current;for(_=f;_!==null;){l=_;var g=l.child;if((l.subtreeFlags&2064)!==0&&g!==null)g.return=l,_=g;else e:for(l=f;_!==null;){if(u=_,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:vo(9,u)}}catch(A){ce(u,u.return,A)}if(u===l){_=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,_=N;break e}_=u.return}}if(K=o,Ut(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(zr,e)}catch{}r=!0}return r}finally{X=n,Je.transition=t}}return!1}function ju(e,t,n){t=An(n,t),t=Wa(e,t,1),e=Ht(e,t,1),t=_e(),e!==null&&(Vn(e,1,t),Ie(e,t))}function ce(e,t,n){if(e.tag===3)ju(e,e,n);else for(;t!==null;){if(t.tag===3){ju(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=An(n,e),e=Va(t,e,1),t=Ht(t,e,1),e=_e(),t!==null&&(Vn(t,1,e),Ie(t,e));break}}t=t.return}}function Ud(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(xe&n)===n&&(me===4||me===3&&(xe&130023424)===xe&&500>de()-hl?cn(e,0):pl|=n),Ie(e,t)}function Tu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var n=_e();e=Et(e,t),e!==null&&(Vn(e,t,n),Ie(e,n))}function $d(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tu(e,n)}function Hd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(t),Tu(e,n)}var Cu;Cu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Re=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Re=!1,zd(e,t,n);Re=(e.flags&131072)!==0}else Re=!1,le&&(t.flags&1048576)!==0&&sa(t,eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;go(e,t),e=t.pendingProps;var o=En(t,Se.current);Pn(t,n),o=Vi(null,t,r,e,o,n);var i=Ki();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(i=!0,Jr(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fi(t),o.updater=ho,t.stateNode=o,o._reactInternals=t,Xi(t,r,e,n),t=nl(null,t,r,!0,i,n)):(t.tag=0,le&&i&&Ci(t),Ce(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(go(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vd(r),e=lt(r,e),o){case 0:t=tl(null,t,r,e,n);break e;case 1:t=eu(null,t,r,e,n);break e;case 11:t=Ya(null,t,r,e,n);break e;case 14:t=Za(null,t,r,lt(r.type,e),n);break e}throw Error(c(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),tl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),eu(e,t,r,o,n);case 3:e:{if(tu(t),e===null)throw Error(c(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ga(e,t),lo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=An(Error(c(423)),t),t=nu(e,t,r,n,o);break e}else if(r!==o){o=An(Error(c(424)),t),t=nu(e,t,r,n,o);break e}else for(He=Ft(t.stateNode.containerInfo.firstChild),$e=t,le=!0,it=null,n=ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===o){t=Tt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return wa(t),e===null&&Pi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,bi(r,o)?l=null:i!==null&&bi(r,i)&&(t.flags|=32),qa(e,t),Ce(e,t,l,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return ru(e,t,n);case 4:return Mi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_n(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Ya(e,t,r,o,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,te(ro,r._currentValue),r._currentValue=l,i!==null)if(ot(i.value,l)){if(i.children===o.children&&!Le.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=jt(-1,n&-n),d.tag=2;var y=i.updateQueue;if(y!==null){y=y.shared;var k=y.pending;k===null?d.next=d:(d.next=k.next,k.next=d),y.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Ii(i.return,n,t),u.lanes|=n;break}d=d.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(c(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Ii(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ce(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pn(t,n),o=Ye(o),r=r(o),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),Za(e,t,r,o,n);case 15:return Ja(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),go(e,t),t.tag=1,Ae(r)?(e=!0,Jr(t)):e=!1,Pn(t,n),$a(t,r,o),Xi(t,r,o,n),nl(null,t,r,!0,e,n);case 19:return iu(e,t,n);case 22:return Xa(e,t,n)}throw Error(c(156,t.tag))};function _u(e,t){return as(e,t)}function Wd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new Wd(e,t,n,r)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vd(e){if(typeof e=="function")return bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function To(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")bl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ze:return fn(n.children,o,i,t);case Ke:l=8,o|=8;break;case Pt:return e=Xe(12,n,t,o|2),e.elementType=Pt,e.lanes=i,e;case Me:return e=Xe(13,n,t,o),e.elementType=Me,e.lanes=i,e;case nt:return e=Xe(19,n,t,o),e.elementType=nt,e.lanes=i,e;case ue:return Co(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:l=10;break e;case Xt:l=9;break e;case dt:l=11;break e;case ft:l=14;break e;case Pe:l=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return t=Xe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function fn(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function Nl(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kd(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function El(e,t,n,r,o,i,l,u,d){return e=new Kd(e,t,n,u,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Xe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fi(i),e}function Qd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zu(e){if(!e)return Bt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(c(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(Ae(n))return oa(e,n,t)}return t}function Pu(e,t,n,r,o,i,l,u,d){return e=El(n,r,!0,e,o,i,l,u,d),e.context=zu(null),n=e.current,r=_e(),o=Qt(n),i=jt(r,o),i.callback=t??null,Ht(n,i,o),e.current.lanes=o,Vn(e,o,r),Ie(e,r),e}function _o(e,t,n,r){var o=t.current,i=_e(),l=Qt(o);return n=zu(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(o,t,l),e!==null&&(ut(e,o,l,i),io(e,o,l)),l}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jl(e,t){Lu(e,t),(e=e.alternate)&&Lu(e,t)}function Gd(){return null}var Au=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tl(e){this._internalRoot=e}Po.prototype.render=Tl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));_o(e,t,null,null)},Po.prototype.unmount=Tl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){_o(null,e,null,null)}),t[kt]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=gs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&ws(e)}};function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Yd(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var y=zo(l);i.call(y)}}var l=Pu(t,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=l,e[kt]=l.current,ir(e.nodeType===8?e.parentNode:e),un(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var y=zo(d);u.call(y)}}var d=El(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=d,e[kt]=d.current,ir(e.nodeType===8?e.parentNode:e),un(function(){_o(t,d,n,r)}),d}function Ao(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var d=zo(l);u.call(d)}}_o(t,l,e,o)}else l=Yd(n,t,e,o,r);return zo(l)}hs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wn(t.pendingLanes);n!==0&&(Xo(t,n|1),Ie(t,de()),(K&6)===0&&(In=de()+500,Ut()))}break;case 13:un(function(){var r=Et(e,1);if(r!==null){var o=_e();ut(r,e,1,o)}}),jl(e,1)}},qo=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=_e();ut(t,e,134217728,n)}jl(e,134217728)}},ms=function(e){if(e.tag===13){var t=Qt(e),n=Et(e,t);if(n!==null){var r=_e();ut(n,e,t,r)}jl(e,t)}},gs=function(){return X},ys=function(e,t){var n=X;try{return X=e,t()}finally{X=n}},Vo=function(e,t,n){switch(t){case"input":if(Do(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Yr(r);if(!o)throw Error(c(90));Ul(r),Do(r,o)}}}break;case"textarea":Kl(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}},ts=wl,ns=un;var Zd={usingClientEntryPoint:!1,Events:[ar,Sn,Yr,ql,es,wl]},br={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jd={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ls(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Gd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{zr=Ro.inject(Jd),pt=Ro}catch{}}return De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zd,De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cl(t))throw Error(c(200));return Qd(e,t,null,n)},De.createRoot=function(e,t){if(!Cl(e))throw Error(c(299));var n=!1,r="",o=Au;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=El(e,1,!1,null,null,n,!1,r,o),e[kt]=t.current,ir(e.nodeType===8?e.parentNode:e),new Tl(t)},De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ls(t),e=e===null?null:e.stateNode,e},De.flushSync=function(e){return un(e)},De.hydrate=function(e,t,n){if(!Lo(t))throw Error(c(200));return Ao(null,e,t,!0,n)},De.hydrateRoot=function(e,t,n){if(!Cl(e))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Au;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pu(t,null,e,1,n??null,o,!1,i,l),e[kt]=t.current,ir(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Po(t)},De.render=function(e,t,n){if(!Lo(t))throw Error(c(200));return Ao(null,e,t,!1,n)},De.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(c(40));return e._reactRootContainer?(un(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},De.unstable_batchedUpdates=wl,De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lo(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ao(e,t,n,!1,r)},De.version="18.3.1-next-f1338f8080-20240426",De}var $u;function lf(){if($u)return Pl.exports;$u=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(p){console.error(p)}}return s(),Pl.exports=of(),Pl.exports}var Hu;function sf(){if(Hu)return Oo;Hu=1;var s=lf();return Oo.createRoot=s.createRoot,Oo.hydrateRoot=s.hydrateRoot,Oo}var af=sf();const Dl="/fantasy/data/",Fl=s=>fetch(s).then(p=>p.ok?p.json():Promise.reject(new Error(`${p.status} ${s}`))),uf=()=>Fl(`${Dl}books/index.json`),cf=s=>Fl(`${Dl}books/${s}/index.json`),df=(s,p)=>Fl(`${Dl}books/${s}/w${p}.json`);async function ff(s){const{weeks:p}=await cf(s),c=await Promise.all(p.map(v=>df(s,v)));return{weeks:p,sheets:c}}function Wu(s){if(!s)return null;const p=s[0]==="−"||s[0]==="-",c=Number(s.slice(1));return Number.isFinite(c)?p?c/(c+100):100/(c+100):null}function Ml({now:s,was:p,prefix:c=""}){if(!s||!p||s===p)return null;const v=Wu(p),E=Wu(s);if(v==null||E==null)return null;const j=E>v;return a.jsxs("span",{className:`bk-move ${j?"up":"down"}`,children:[j?"▲":"▼"," ",c,p," → ",s]})}const Vu=864e5;function Ku(s,p=Date.now()){if(!s)return null;const c=Date.parse(`${s.start}T00:00:00Z`),v=Date.parse(`${s.payout}T00:00:00Z`),E=Math.max(0,Math.min(p,v)-c)/Vu,j=(v-c)/Vu,R=M=>s.principal*((1+s.apy)**(M/365)-1);return{now:R(E),atPayout:R(j),days:Math.floor(E),totalDays:Math.round(j),apy:s.apy,principal:s.principal,settled:p>=v}}const Rl=s=>s.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),pf=s=>s.money.reduce((p,c)=>p+c.pct,0);function hf({standings:s,payingPlaces:p,structure:c,stakes:v,Panel:E}){const j=s[0].dist.length,R=new Set(p),M=c==="winner-take-all";return a.jsxs(E,{title:"PROJECTED STANDINGS",blurb:M?"Where every seat actually finishes, across 25,000 simulated seasons. The gold block is first place — the only finish in this league worth money. Everything to the right of it is the same season with nothing at the end of it.":"Where every seat actually finishes, across 25,000 simulated seasons. The gold blocks are the four finishes that pay; the wider a seat's gold, the more often its season ends with money. Hover any block for the price on that exact finish.",children:[a.jsxs("div",{className:"fb-standings",children:[a.jsxs("div",{className:"fb-st-head",children:[a.jsx("span",{className:"fb-st-rank",children:"#"}),a.jsx("span",{className:"fb-st-seat",children:"SEAT"}),a.jsx("span",{className:"fb-st-num",children:"PROJ"}),a.jsx("span",{className:"fb-st-num",children:"RECORD"}),a.jsx("span",{className:"fb-st-num",children:"PTS"}),a.jsxs("span",{className:"fb-st-dist",children:["FINISH DISTRIBUTION — 1ST (",j,"TH) "]}),a.jsx("span",{className:"fb-st-num",children:M?"WINS":"MONEY"}),a.jsx("span",{className:"fb-st-num",children:"LAST"})]}),s.map(S=>a.jsxs("div",{className:"fb-st-row",children:[a.jsx("span",{className:"fb-st-rank",children:S.rank}),a.jsxs("span",{className:"fb-st-seat",children:[a.jsx("span",{className:"fb-st-team",children:S.team}),a.jsx("span",{className:"fb-st-mgr",children:S.manager})]}),a.jsx("span",{className:"fb-st-num strong",children:S.projFinish.toFixed(1)}),a.jsxs("span",{className:"fb-st-num",children:[S.projWins.toFixed(1),"–",S.projLosses.toFixed(1)]}),a.jsx("span",{className:"fb-st-num",children:S.projPoints.toLocaleString("en-US")}),a.jsx("span",{className:"fb-st-dist",children:S.dist.map((D,Q)=>{const U=Q+1,$=S.money.find(ke=>ke.place===U);return a.jsx("span",{className:R.has(U)?"fb-seg pays":"fb-seg",style:{flexGrow:Math.max(D,.15)},title:$?`${Qu(U)} — ${$.label} — ${$.pct}% — ${$.price}`:`${Qu(U)} — ${D}%${U===j?" — last":""}`},U)})}),a.jsxs("span",{className:"fb-st-num strong",children:[pf(S).toFixed(1),"%"]}),a.jsxs("span",{className:"fb-st-num dim",children:[S.last,"%"]})]},S.rosterId))]}),a.jsxs("p",{className:"fb-note",children:["PROJ is the average finishing place across every simulated season, so it moves before any single market does — a seat can drift from 6.4 to 6.9 without its championship price changing at all."," ",M?"Only first place pays in this league, so the MONEY column is the championship number.":"MONEY is the chance of finishing in one of the four paying places — first, second, third, or fourth exactly."]})]})}const Qu=s=>`${s}${["th","st","nd","rd"][s%100>>3^1&&s%10]||"th"}`;function mf({sheet:s,prev:p,Panel:c}){const{futures:v,stakes:E}=s,j=v.structure==="winner-take-all",R=D=>v.markets.find(Q=>Q.key===D),M=D=>{var Q,U,$;return($=(U=(Q=p==null?void 0:p.futures)==null?void 0:Q.markets)==null?void 0:U.find(ke=>ke.key===D))==null?void 0:$.rows},S=({market:D,blurb:Q,compact:U})=>{const $=R(D);return $?a.jsx(c,{title:$.pays?`${$.name} — PAYS ${$.pays.toUpperCase()}`:$.name,blurb:$.copy??Q,children:a.jsx(gf,{rows:$.rows,prevRows:M(D),compact:U})}):null};return a.jsxs(a.Fragment,{children:[a.jsx(hf,{standings:v.standings,payingPlaces:v.payingPlaces,structure:v.structure,stakes:E,Panel:c}),a.jsx(S,{market:"championship",blurb:j?`${E.pot}, winner take all. Nobody else gets a cent, which makes this the entire financial book — every other market on this sheet is pride.`:"The headline, and the only board here that is not a slice of the table above: winning the bracket is not the same question as finishing high, because three playoff weeks are three more coin flips."}),!j&&a.jsx(yf,{sheet:s,Panel:c}),a.jsx(S,{market:"lastPlace"}),a.jsx(c,{title:"SEASON WIN TOTALS",blurb:"Over/under on regular-season wins, per seat. The line is the half-win the simulated seasons split closest to evenly; unlike a weekly total, wins are integers, so these are priced on the real number rather than posted flat.",children:a.jsx("div",{className:"fb-wintotals",children:[...v.winTotals].sort((D,Q)=>Q.expected-D.expected).map(D=>a.jsxs("div",{className:"fb-wintotal",children:[a.jsx("span",{className:"fb-wintotal-name",children:D.team}),a.jsx("span",{className:"fb-wintotal-line",children:D.line.toFixed(1)}),a.jsxs("span",{className:"fb-wintotal-prices",children:["O ",D.over," · U ",D.under]}),a.jsxs("span",{className:"fb-wintotal-exp",children:[D.expected," proj"]})]},D.rosterId))})})]})}function gf({rows:s,prevRows:p,compact:c}){const v=Math.max(...s.map(E=>E.pct),1);return a.jsx("div",{className:"fb-runners",children:s.map((E,j)=>{var R;return a.jsxs("div",{className:j===0?"fb-runner lead":"fb-runner",children:[a.jsxs("span",{className:"fb-runner-main",children:[a.jsx("span",{className:"fb-runner-team",children:E.team}),a.jsx("span",{className:"fb-bar",style:{width:`${E.pct/v*100}%`}}),!c&&a.jsx("span",{className:"fb-runner-mgr",children:E.manager})]}),a.jsxs("span",{className:"fb-runner-pct",children:[E.pct,"%"]}),a.jsxs("span",{className:"bk-line-right",children:[a.jsx(Ml,{now:E.price,was:(R=p==null?void 0:p.find(M=>M.rosterId===E.rosterId))==null?void 0:R.price}),a.jsx("span",{className:"bk-price",children:E.price??"OFF"})]})]},E.rosterId)})})}function yf({sheet:s,Panel:p}){var j,R;const c=s.stakes.hysa,[v,E]=zt.useState(()=>Ku(c));return zt.useEffect(()=>{if(!c)return;const M=setInterval(()=>E(Ku(c)),6e4);return()=>clearInterval(M)},[c]),a.jsx(p,{title:"THE INTEREST — 4TH EXACTLY",blurb:c?`First takes ${(j=s.stakes.payouts[0])==null?void 0:j.label}, second ${(R=s.stakes.payouts[1])==null?void 0:R.label}, third gets the buy-in back. Fourth gets the interest the pot has earned sitting in a savings account at ${(c.apy*100).toFixed(2)}% APY. That is a real prize, this is what it is worth right now, and the fourth block of every bar above is who is most likely to collect it.`:"Fourth place, exactly.",children:v&&a.jsxs("div",{className:"fb-headline",children:[a.jsxs("span",{children:[a.jsx("span",{className:"fb-headline-label",children:Rl(v.now)}),a.jsxs("span",{className:"fb-headline-copy",children:["accrued on ",Rl(v.principal)," over ",v.days," of ",v.totalDays," days ·"," ",v.settled?"final":`${Rl(v.atPayout)} if it runs to payout`]})]}),a.jsx("span",{className:"fb-headline-price",children:"4TH"})]})})}let vf=0;const qe=()=>`md${vf++}`;function vt({text:s,className:p}){if(!s)return null;const c=s.trim().split(/\n{2,}/);return a.jsx("div",{className:p,children:c.map(v=>wf(v))})}function wf(s){const p=s.split(`
`);return/^###\s/.test(p[0])?a.jsx("h3",{className:"md-h3",children:_t(p[0].replace(/^###\s+/,""))},qe()):/^(---|\*\*\*)$/.test(p[0].trim())?a.jsx("hr",{className:"md-hr"},qe()):p.every(c=>/^>\s?/.test(c))?a.jsx("blockquote",{className:"md-quote",children:_t(p.map(c=>c.replace(/^>\s?/,"")).join(" "))},qe()):p.every(c=>/^[-*]\s+/.test(c))?a.jsx("ul",{className:"md-list",children:p.map(c=>a.jsx("li",{children:_t(c.replace(/^[-*]\s+/,""))},qe()))},qe()):p.every(c=>/^\d+\.\s+/.test(c))?a.jsx("ol",{className:"md-list",children:p.map(c=>a.jsx("li",{children:_t(c.replace(/^\d+\.\s+/,""))},qe()))},qe()):a.jsx("p",{className:"md-p",children:_t(p.join(" "))},qe())}const xf=[{re:/`([^`]+)`/,render:s=>a.jsx("code",{className:"md-code",children:s[1]},qe())},{re:/\*\*([^*]+)\*\*/,render:s=>a.jsx("strong",{children:_t(s[1])},qe())},{re:/(?:\*|_)([^*_]+)(?:\*|_)/,render:s=>a.jsx("em",{children:_t(s[1])},qe())},{re:/\[([^\]]+)\]\(([^)]+)\)/,render:s=>a.jsx("a",{className:"bk-link",href:s[2],children:_t(s[1])},qe())}];function _t(s){let p=null;for(const E of xf){const j=s.match(E.re);j&&(p==null||j.index<p.at.index)&&(p={rule:E,at:j})}if(!p)return s;const{rule:c,at:v}=p;return[s.slice(0,v.index),c.render(v),...[].concat(_t(s.slice(v.index+v[0].length)))]}function kf({settled:s,punishment:p,Panel:c,note:v,benchNote:E}){const{reportCard:j}=s;return a.jsxs(a.Fragment,{children:[a.jsxs(c,{title:`HOW WEEK ${s.week} SETTLED`,blurb:v?null:"Final scores against the lines this book posted last Wednesday. Side A is the side that was favoured.",children:[v&&a.jsx(vt,{text:v,className:"fb-prose-cols"}),a.jsxs("div",{className:"fb-settled-head",children:[a.jsx("span",{children:"RESULT"}),a.jsx("span",{children:"LINE"}),a.jsx("span",{className:"spread",children:"ATS"}),a.jsx("span",{className:"total",children:"TOTAL"})]}),a.jsx("div",{className:"fb-card",children:s.matchups.map(R=>a.jsx(bf,{m:R},`${R.a.rosterId}-${R.b.rosterId}`))}),a.jsxs("div",{className:"fb-report",children:[a.jsx("h3",{className:"fb-report-title",children:"THE MODEL'S REPORT CARD"}),a.jsxs("div",{className:"fb-report-grid",children:[a.jsx(Ol,{label:"FAVOURITES SU",record:j.straightUp}),a.jsx(Ol,{label:"FAVOURITES ATS",record:j.ats}),a.jsx(Ol,{label:"TOTALS — OVER",record:j.total}),a.jsxs("div",{className:"fb-report-cell",children:[a.jsx("span",{className:"fb-report-num",children:j.brier.toFixed(3)}),a.jsx("span",{className:"fb-report-label",children:"BRIER SCORE"}),a.jsxs("span",{className:"fb-report-note",children:[j.brier<j.coinFlip?"better":"worse"," than ",j.coinFlip.toFixed(2),", which is what you score by calling every game a coin flip"]})]})]}),a.jsxs("p",{className:"fb-note",children:["The book expected ",j.expectedChalkWins.toFixed(2)," of its ",j.games," favourites to win. "," ",j.straightUp.w," did. Prices are graded on the fair probability, before the house margin — the margin is the book's edge, not the model's opinion."]})]})]}),a.jsxs("div",{className:"fb-grid2",children:[a.jsxs(c,{title:`${s.punishment.low.name} — SETTLED`,blurb:p.weekly.copy,children:[a.jsx(Gu,{outcome:s.punishment.low,verb:"took it",copy:s.punishment.low.hitFavourite?"The board's own favourite. The book called this one.":`Priced ${s.punishment.low.price}, ${Ju(s.punishment.low.rank)} of ${s.punishment.low.of} on the board.`}),s.punishment.high&&a.jsx(Gu,{outcome:s.punishment.high,verb:"picks",copy:`${s.punishment.high.name} — ${s.punishment.high.price} on the board, ${Ju(s.punishment.high.rank)} of ${s.punishment.high.of}.`}),s.punishment.joint&&a.jsx("p",{className:"fb-note",children:s.punishment.joint.hit?a.jsxs(a.Fragment,{children:["The joint ",a.jsx("b",{children:"hit"})," at ",s.punishment.joint.hit.price,". It was one of"," ",s.punishment.joint.offered," priced pairings out of"," ",s.punishment.joint.offered>1?"dozens":"many"," possible."]}):a.jsxs(a.Fragment,{children:["None of the ",s.punishment.joint.offered," featured joints hit — the pairing that landed was"," ",s.punishment.joint.low.team," and ",s.punishment.joint.high.team,", which the sheet did not print."]})})]}),a.jsxs(c,{title:"POINTS LEFT ON THE BENCH",blurb:"Every line on last week's sheet assumed an optimal lineup. This is what that assumption actually cost, scored on real points — the model's own §5.4 bias, measured rather than disclosed.",children:[E&&a.jsx(vt,{text:E,className:"fb-panel-prose"}),a.jsx("div",{className:"fb-bench",children:s.bench.slice(0,5).map((R,M)=>a.jsxs("div",{className:M===0?"fb-bench-row lead":"fb-bench-row",children:[a.jsxs("span",{className:"fb-bench-main",children:[a.jsx("span",{className:"fb-runner-team",children:R.team}),a.jsxs("span",{className:"fb-runner-mgr",children:[R.points.toFixed(2)," of a possible ",R.best.toFixed(2),R.missed.length>0&&a.jsxs(a.Fragment,{children:[" · benched ",R.missed.map(S=>`${S.name} ${S.points.toFixed(1)}`).join(", ")]})]})]}),a.jsxs("span",{className:"bk-price",children:["−",R.left.toFixed(1)]})]},R.rosterId))})]})]})]})}const Ol=({label:s,record:p})=>a.jsxs("div",{className:"fb-report-cell",children:[a.jsxs("span",{className:"fb-report-num",children:[p.w,"–",p.l,p.p?`–${p.p}`:""]}),a.jsx("span",{className:"fb-report-label",children:s})]}),Gu=({outcome:s,verb:p,copy:c})=>a.jsxs("div",{className:"fb-verdict",children:[a.jsxs("span",{className:"fb-slip-text",children:[a.jsx("b",{children:s.team})," ",p," — ",s.points.toFixed(2),a.jsxs("span",{className:"fb-slip-note",children:[s.manager," · ",c]})]}),a.jsx("span",{className:"bk-price",children:s.price??"—"})]});function bf({m:s}){return s.played?a.jsxs("div",{className:"fb-settled",children:[a.jsxs("div",{className:"fb-seats",children:[a.jsx(Yu,{seat:s.a,points:s.a.points,won:s.winner==="a",push:s.winner==="push"}),a.jsx(Yu,{seat:s.b,points:s.b.points,won:s.winner==="b",push:s.winner==="push"})]}),a.jsxs("div",{className:"fb-cell",children:[a.jsx("span",{className:"fb-odds",children:s.posted.moneyline.a}),a.jsx(Zu,{hit:s.winner==="a",push:s.winner==="push"})]}),a.jsxs("div",{className:"fb-cell spread",children:[a.jsx("span",{className:"fb-odds",children:s.posted.spread.a}),a.jsx(Zu,{hit:s.ats==="a",push:s.ats==="push"})]}),a.jsxs("div",{className:"fb-cell total",children:[a.jsx("span",{className:"fb-odds",children:s.total.toFixed(1)}),a.jsxs("span",{className:"fb-settled-sub",children:[s.ou==="push"?"push":s.ou==="a"?"over":"under"," ",s.posted.total.line.toFixed(1)]})]})]}):null}const Yu=({seat:s,points:p,won:c,push:v})=>a.jsxs("span",{className:c?"fb-seat fav":"fb-seat",children:[a.jsx("span",{className:"fb-seat-name",children:s.team}),a.jsxs("span",{className:"fb-seat-mgr",children:[s.manager,v?" · tie":""]}),a.jsx("span",{className:"fb-seat-proj",children:p.toFixed(2)})]}),Zu=({hit:s,push:p})=>a.jsx("span",{className:p?"fb-mark push":s?"fb-mark hit":"fb-mark miss",children:p?"PUSH":s?"✓":"✗"}),Ju=s=>s==null?"unpriced":`${s}${["th","st","nd","rd"][s%100>>3^1&&s%10]||"th"}`,Sf=`---
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
`,Tf=`---
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
`,Cf=`---
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
`,Xu=Object.assign({"../content/dkenasty/w2.md":Sf,"../content/dkenasty/w3.md":Nf,"../content/loog/w2.md":Ef,"../content/loog/w3.md":jf,"../content/nicks/w2.md":Tf,"../content/nicks/w3.md":Cf}),_f=/^[a-z][a-z0-9-]*(:\d+-\d+)?$/,zf=/\/content\/([^/]+)\/w(\d+)\.md$/,nc=new Map;for(const s in Xu){const p=s.match(zf);p&&nc.set(`${p[1]}/w${p[2]}`,Lf(Xu[s]))}const Pf=(s,p)=>nc.get(`${s}/w${p}`)??null;function Lf(s){const{meta:p,body:c}=Rf(s.replace(/\r\n/g,`
`)),v=c.replace(/<!--[\s\S]*?-->/g,""),E=[];let j={id:"lede",title:null,lines:[]};for(const S of v.split(`
`)){const D=S.match(/^##\s+(.+?)\s*$/);if(!D){j.lines.push(S);continue}E.push(j);const Q=D[1],U=Q.toLowerCase();j=_f.test(U)?{id:U,title:null,lines:[]}:{id:null,title:Q,lines:[]}}E.push(j);const R=new Map,M=[];for(const S of E){const D=S.lines.join(`
`).trim();D&&(S.id?R.set(S.id,D):M.push({title:S.title,text:D}))}return{meta:p,slots:R,panels:M}}const Af=(s,p,c)=>(s==null?void 0:s.slots.get(`matchup:${p}-${c}`))??(s==null?void 0:s.slots.get(`matchup:${c}-${p}`))??null,Fe=(s,p)=>(s==null?void 0:s.slots.get(p))??null;function Rf(s){const p=s.match(/^---\n([\s\S]*?)\n---\n?/);if(!p)return{meta:{},body:s};const c={};for(const v of p[1].split(`
`)){const E=v.match(/^([A-Za-z][\w-]*):\s*(.*)$/);E&&(c[E[1]]=E[2].replace(/^["']|["']$/g,"").trim())}return{meta:c,body:s.slice(p[0].length)}}function Of({bookId:s,week:p,view:c}){const[v,E]=zt.useState({status:"loading"}),[j,R]=zt.useState(0);return zt.useEffect(()=>{let M=!0;const S=D=>M&&E(D);return s?ff(s).then(({weeks:D,sheets:Q})=>{S({status:"ok",weeks:D,sheets:Q});const U=p!=null?D.indexOf(p):-1;R(U>=0?U:D.length-1)}).catch(()=>S({status:"error"})):uf().then(D=>S({status:"ok",index:D})).catch(()=>S({status:"error"})),()=>{M=!1}},[s,p]),a.jsxs("div",{className:"book-root",children:[a.jsx("div",{className:"bk-backbar",children:a.jsx("a",{className:"bk-back",href:"?book",children:"← The lobby"})}),a.jsxs("div",{className:"book-wrap",children:[v.status==="loading"&&a.jsx("p",{className:"state-msg",children:"Opening the book…"}),v.status==="error"&&a.jsxs("p",{className:"state-msg",children:["No sheet posted for this league. ",a.jsx("a",{className:"bk-link",href:"?book",children:"Back to the lobby"})]}),v.status==="ok"&&v.index&&a.jsx(If,{index:v.index}),v.status==="ok"&&v.sheets&&a.jsx(Mf,{sheet:v.sheets[j],prev:j>0?v.sheets[j-1]:null,weeks:v.weeks,cur:j,view:c,onNav:R})]})]})}function If({index:s}){return zt.useEffect(()=>{document.title="The Fantasy Book"},[]),a.jsxs(a.Fragment,{children:[a.jsxs("header",{className:"bk-head",children:[a.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),a.jsx("h1",{className:"bk-title",children:"THE FANTASY BOOK"}),a.jsx("p",{className:"bk-sub",children:"Three leagues. Eighteen weeks. One coin-flip sport."})]}),a.jsx("div",{className:"group-list",style:{marginTop:28},children:s.map(p=>a.jsxs("a",{className:"group-link",href:`?book=${p.id}`,children:[a.jsx("div",{className:"gl-name",children:p.name}),a.jsx("div",{className:"gl-meta",children:"Open the book →"})]},p.id))})]})}const Df=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),qu=(s,p)=>s.toUpperCase().includes(p)?s:`${s} — ${p}`;function Jt({title:s,blurb:p,children:c}){return a.jsxs("section",{className:"bk-panel",id:Df(s),children:[a.jsx("h2",{className:"bk-panel-title",children:s}),p&&a.jsx("p",{className:"bk-blurb",children:p}),c]})}function Ff({weeks:s,cur:p,onNav:c}){return a.jsxs("div",{className:"fb-weeknav",children:[a.jsx("button",{className:"bk-nav-btn",disabled:p===0,onClick:()=>c(p-1),children:"‹ PREV"}),a.jsx("select",{className:"bk-nav-select",value:p,onChange:v=>c(Number(v.target.value)),children:s.map((v,E)=>a.jsxs("option",{value:E,children:["WEEK ",v]},v))}),a.jsx("button",{className:"bk-nav-btn",disabled:p===s.length-1,onClick:()=>c(p+1),children:"NEXT ›"})]})}function Mf({sheet:s,prev:p,weeks:c,cur:v,view:E,onNav:j}){const R=Pf(s.id,s.week),M=E;return zt.useEffect(()=>{const S=M==="season"?Bl(s):`Week ${s.week}`;document.title=`${s.bookName} · ${S}`},[s.bookName,s.week,M]),zt.useEffect(()=>{const S=window.location.hash&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)));S&&S.scrollIntoView()},[s.id,s.week]),a.jsxs(a.Fragment,{children:[a.jsx(Bf,{sheet:s,weeks:c,cur:v,onNav:j,page:M}),M==="week"&&a.jsx(Uf,{sheet:s,prev:p,note:R}),M==="season"&&a.jsx($f,{sheet:s,prev:p,note:R}),a.jsx(Kf,{sheet:s,page:M})]})}const Bl=s=>s.week===1?"Season preview":"The futures board";function Bf({sheet:s,weeks:p,cur:c,onNav:v,page:E}){return a.jsxs("header",{className:"bk-head",children:[a.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),a.jsx("h1",{className:"bk-title",children:s.bookName}),a.jsxs("p",{className:"bk-sub",children:[s.tagline," · Week ",s.week,", ",s.season,s.meta.seed?a.jsxs(a.Fragment,{children:[" · Seed ",a.jsx("code",{children:s.meta.seed})]}):null]}),s.stakes&&a.jsxs("div",{className:"bk-chips",children:[a.jsxs("span",{className:"bk-chip",children:["Buy-in ",a.jsx("b",{children:s.stakes.buyIn})]}),a.jsxs("span",{className:"bk-chip",children:["Pot ",a.jsx("b",{children:s.stakes.pot})]}),s.stakes.payouts.map(j=>a.jsxs("span",{className:"bk-chip",children:[Qf(j.place)," ",a.jsx("b",{children:j.label})]},j.place))]}),a.jsxs("div",{className:"bk-banner",children:["LINES BUILT FROM ",s.meta.sources]}),p.length>1&&a.jsx(Ff,{weeks:p,cur:c,onNav:v}),a.jsxs("nav",{className:"fb-viewnav",children:[a.jsxs("a",{className:E==="week"?"active":"",href:`?book=${s.id}&w=${s.week}`,children:["THE CARD — WEEK ",s.week]}),a.jsx("a",{className:E==="season"?"active":"",href:`?book=${s.id}&w=${s.week}&view=season`,children:Bl(s).toUpperCase()})]}),a.jsx("nav",{className:"fb-booknav",children:a.jsx("a",{href:"?book",children:"All books"})})]})}function Uf({sheet:s,prev:p,note:c}){var E,j,R,M;const{punishment:v}=s;return a.jsxs(a.Fragment,{children:[Fe(c,"lede")&&a.jsxs("section",{className:"bk-panel fb-lede",id:"the-lede",children:[a.jsx("h2",{className:"bk-panel-title",children:c.meta.headline??`WEEK ${s.week}`}),a.jsx(vt,{text:Fe(c,"lede"),className:"fb-prose-cols"}),c.meta.byline&&a.jsx("p",{className:"fb-byline",children:c.meta.byline})]}),s.settled&&a.jsx(kf,{settled:s.settled,punishment:v,Panel:Jt,note:Fe(c,"settled"),benchNote:Fe(c,"bench")}),a.jsxs(Jt,{title:`THE CARD — WEEK ${s.week}`,blurb:Fe(c,"card")??"Moneyline, spread and total on every matchup. Spreads and totals are the half-point where the simulated distribution splits evenly, so both sides post at −110 — the line moves, not the price.",children:[a.jsxs("div",{className:"fb-match-head",children:[a.jsx("span",{children:"MATCHUP"}),a.jsx("span",{children:"MONEYLINE"}),a.jsx("span",{className:"spread",children:"SPREAD"}),a.jsx("span",{className:"total",children:"TOTAL"})]}),a.jsx("div",{className:"fb-card",children:s.matchups.map(S=>a.jsx(Wf,{m:S,prev:Gf(p,S),note:Af(c,S.a.rosterId,S.b.rosterId)},`${S.a.rosterId}-${S.b.rosterId}`))})]}),a.jsxs("div",{className:v.paired?"fb-grid2":"",children:[a.jsxs(Jt,{title:qu(v.weekly.name,"LOW SCORER"),blurb:v.weekly.copy,children:[Fe(c,"punishment")&&a.jsx(vt,{text:Fe(c,"punishment"),className:"fb-panel-prose"}),v.weekly.parlay&&a.jsxs("p",{className:"fb-note",children:[v.weekly.legs??v.weekly.parlay.legs," legs · $",v.weekly.parlay.stake," · lifetime record ",a.jsx("b",{children:v.weekly.parlay.lifetimeHits})," hits."]}),a.jsx(tc,{rows:v.weekly.rows,prevRows:(j=(E=p==null?void 0:p.punishment)==null?void 0:E.weekly)==null?void 0:j.rows})]}),v.paired&&a.jsxs(Jt,{title:qu(v.paired.name,"HIGH SCORER"),blurb:v.paired.copy,children:[Fe(c,"punishment-paired")&&a.jsx(vt,{text:Fe(c,"punishment-paired"),className:"fb-panel-prose"}),a.jsx(tc,{rows:v.paired.rows,prevRows:(M=(R=p==null?void 0:p.punishment)==null?void 0:R.paired)==null?void 0:M.rows})]})]}),v.joints.length>0&&a.jsxs(Jt,{title:"THE JOINT — WHO SINGS WHAT",blurb:"Low scorer and high scorer in the same week, priced together rather than multiplied: a 145-point week makes you the high scorer and makes someone else the low one, so these are not independent.",children:[Fe(c,"joint")&&a.jsx(vt,{text:Fe(c,"joint"),className:"fb-panel-prose"}),v.joints.map(S=>a.jsxs("div",{className:"fb-slip",children:[a.jsxs("span",{className:"fb-slip-text",children:[a.jsx("b",{children:S.low.team})," sings a song picked by ",a.jsx("b",{children:S.high.team}),a.jsxs("span",{className:"fb-slip-note",children:[S.low.manager," · ",S.high.manager," · ",S.pct,"%"]})]}),a.jsx("span",{className:"bk-price",children:S.price})]},`${S.low.rosterId}-${S.high.rosterId}`))]}),a.jsxs(Jt,{title:"THE LINEUPS",blurb:"Optimal by projection against each league's roster slots — what a manager knows Sunday morning. Scores are drawn on the simulation, never on the projection, which would be lookahead bias.",children:[Fe(c,"lineups")&&a.jsx(vt,{text:Fe(c,"lineups"),className:"fb-panel-prose"}),a.jsx("div",{className:"fb-lineups",children:[...s.lineups].sort((S,D)=>D.projected-S.projected).map(S=>a.jsx(Vf,{seat:S},S.rosterId))})]}),c==null?void 0:c.panels.map(S=>a.jsx(Jt,{title:S.title.toUpperCase(),children:a.jsx(vt,{text:S.text,className:"fb-prose-cols"})},S.title))]})}function $f({sheet:s,prev:p,note:c}){const v=Fe(c,"season");return a.jsxs(a.Fragment,{children:[v?a.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[a.jsx("h2",{className:"bk-panel-title",children:c.meta.headline??"THE FUTURES BOARD"}),a.jsx(vt,{text:v,className:"fb-prose-cols"})]}):s.preview&&a.jsx(Hf,{preview:s.preview,week:s.week}),a.jsx(mf,{sheet:s,prev:p,Panel:Jt})]})}function Hf({preview:s,week:p}){return a.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[a.jsx("h2",{className:"bk-panel-title",children:p===1?"SEASON PREVIEW":`SEASON PREVIEW — WRITTEN WEEK ${s.writtenWeek}`}),s.standfirst&&a.jsx("p",{className:"fb-standfirst",children:s.standfirst}),a.jsx("div",{className:"fb-prose-cols",children:s.paragraphs.map((c,v)=>a.jsx("p",{className:"fb-prose",children:c},v))}),p>s.writtenWeek&&a.jsxs("p",{className:"fb-note",children:["Written in week ",s.writtenWeek," and left alone since. The boards below are current; the prose is not."]})]})}function Wf({m:s,prev:p,note:c}){var v;return a.jsxs("div",{className:c?"fb-match noted":"fb-match",children:[a.jsxs("div",{className:"fb-seats",children:[a.jsx(ec,{seat:s.a,proj:s.projected.a,fav:!0}),a.jsx(ec,{seat:s.b,proj:s.projected.b})]}),a.jsxs("div",{className:"fb-cell",children:[a.jsx("span",{className:"fb-odds",children:s.moneyline.a}),a.jsx("span",{className:"fb-odds dim",children:s.moneyline.b}),a.jsx(Ml,{now:s.moneyline.a,was:(v=p==null?void 0:p.moneyline)==null?void 0:v.a})]}),a.jsxs("div",{className:"fb-cell spread",children:[a.jsxs("span",{className:"fb-odds",children:[s.spread.a,a.jsx("small",{children:s.spread.price})]}),a.jsxs("span",{className:"fb-odds dim",children:[s.spread.b,a.jsx("small",{children:s.spread.price})]})]}),a.jsxs("div",{className:"fb-cell total",children:[a.jsxs("span",{className:"fb-odds",children:["O ",s.total.line.toFixed(1),a.jsx("small",{children:s.total.over})]}),a.jsxs("span",{className:"fb-odds dim",children:["U ",s.total.line.toFixed(1),a.jsx("small",{children:s.total.under})]})]}),c&&a.jsx(vt,{text:c,className:"fb-match-note"})]})}const ec=({seat:s,proj:p,fav:c})=>a.jsxs("span",{className:c?"fb-seat fav":"fb-seat",children:[a.jsx("span",{className:"fb-seat-name",children:s.team}),a.jsx("span",{className:"fb-seat-mgr",children:s.manager}),a.jsx("span",{className:"fb-seat-proj",children:p.toFixed(1)})]});function tc({rows:s,prevRows:p}){const c=Math.max(...s.map(v=>v.pct));return a.jsx("div",{className:"fb-runners",children:s.map((v,E)=>{var j;return a.jsxs("div",{className:E===0?"fb-runner lead":"fb-runner",children:[a.jsxs("span",{className:"fb-runner-main",children:[a.jsx("span",{className:"fb-runner-team",children:v.team}),a.jsx("span",{className:"fb-bar",style:{width:`${v.pct/c*100}%`}}),a.jsx("span",{className:"fb-runner-mgr",children:v.manager})]}),a.jsxs("span",{className:"fb-runner-pct",children:[v.pct,"%"]}),a.jsxs("span",{className:"bk-line-right",children:[a.jsx(Ml,{now:v.price,was:(j=p==null?void 0:p.find(R=>R.rosterId===v.rosterId))==null?void 0:j.price}),a.jsx("span",{className:"bk-price",children:v.price})]})]},v.rosterId)})})}function Vf({seat:s}){return a.jsxs("div",{className:"fb-lineup",children:[a.jsxs("div",{className:"fb-lineup-head",children:[a.jsx("span",{className:"fb-lineup-name",children:s.team}),a.jsx("span",{className:"fb-lineup-proj",children:s.projected.toFixed(1)})]}),s.players.map((p,c)=>a.jsxs("div",{className:p.name?"fb-slot":"fb-slot empty",children:[a.jsx("span",{className:"fb-slot-tag",children:p.slot}),a.jsxs("span",{className:"fb-slot-name",children:[p.name??"no eligible player",p.name&&a.jsxs("small",{children:[" ",p.position," ",p.team,p.waiver&&" · waivers"]})]}),a.jsx("span",{className:"fb-slot-mu",children:p.mu.toFixed(1)})]},`${p.slot}-${c}`)),s.players.some(p=>p.waiver)&&a.jsxs("p",{className:"fb-warn",children:["Nobody on the roster can play ",s.players.filter(p=>p.waiver).map(p=>p.slot).join(", "),". Priced as if he claims the best free agent there — he has not, and until he does this line is generous to him."]}),s.emptySlots.length>0&&a.jsxs("p",{className:"fb-warn",children:["Forfeits ",s.emptySlots.join(", ")," — nobody on the roster is eligible. Worth roughly eight points, and it is why this line looks the way it does."]})]})}function Kf({sheet:s,page:p}){var c;return a.jsxs("footer",{className:"bk-fine-block",children:[a.jsxs("p",{className:"bk-fine",children:[a.jsx("b",{children:"HOW THE SAUSAGE IS MADE."})," Every rostered player's projected points come from Sleeper's own weekly projection, scored through this league's exact scoring settings (",s.meta.scoringKeys," keys, reproducing Sleeper's published totals to a mean absolute error of ",s.meta.mae,"). Weekly scores are drawn from a Gamma distribution whose spread was fitted on 2025 projection residuals, position by position — a receiver projected for 18 is far more volatile than a quarterback projected for 18, and a pooled number would misprice the top and bottom of every lineup in opposite directions. The week was simulated ",s.meta.sims.toLocaleString()," times."]}),a.jsxs("p",{className:"bk-fine",children:[a.jsx("b",{children:"WHAT THIS BOOK CANNOT DO."})," ",s.meta.disclosures.join(" ")]}),((c=s.meta.overrides)==null?void 0:c.length)>0&&a.jsxs("p",{className:"bk-fine",children:[a.jsx("b",{children:"MANUAL OVERRIDES."})," ",s.meta.overrides.map(v=>`${v.player} ${v.was} → ${v.pts}${v.note?` (${v.note})`:""}`).join(" · ")]}),a.jsxs("p",{className:"bk-fine",children:[a.jsx("b",{children:"HOUSE RULES."})," All prices include the house's margin. Ties split. Rosters as pulled",s.meta.pulledAt?` ${s.meta.pulledAt.slice(0,10)}`:"","; once a week's sheet is posted it is frozen and never repriced. For entertainment only."]}),a.jsxs("p",{className:"bk-foot",children:[s.bookName," · EST. SEPTEMBER 2026 · NO REFUNDS"]}),a.jsxs("p",{className:"bk-foot-nav",children:[p==="week"&&a.jsxs(a.Fragment,{children:[a.jsx("a",{className:"bk-link",href:`?book=${s.id}&w=${s.week}&view=season`,children:Bl(s)})," ·"," "]}),p==="season"&&a.jsxs(a.Fragment,{children:[a.jsxs("a",{className:"bk-link",href:`?book=${s.id}&w=${s.week}`,children:["The card — week ",s.week]})," ·"," "]}),a.jsx("a",{className:"bk-link",href:"?book",children:"All books"})]})]})}const Qf=s=>`${s}${["th","st","nd","rd"][s%100>>3^1&&s%10]||"th"}`;function Gf(s,p){if(!(s!=null&&s.matchups))return null;const c=E=>new Set([E.a.rosterId,E.b.rosterId]),v=s.matchups.find(E=>{const j=c(E);return j.has(p.a.rosterId)&&j.has(p.b.rosterId)});return v?v.a.rosterId===p.a.rosterId?v:{moneyline:{a:v.moneyline.b,b:v.moneyline.a}}:null}const Yf=`
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
`;function Zf(){const s=new URLSearchParams(window.location.search),p=s.get("book")||null,c=s.has("w")?Number(s.get("w")):null,v=s.get("view")==="season"?"season":"week";return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Yf}),a.jsx(Of,{bookId:p,week:c,view:v})]})}af.createRoot(document.getElementById("root")).render(a.jsx(zt.StrictMode,{children:a.jsx(Zf,{})}));
