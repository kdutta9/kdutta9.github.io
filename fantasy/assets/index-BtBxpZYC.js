(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))w(N);new MutationObserver(N=>{for(const E of N)if(E.type==="childList")for(const D of E.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&w(D)}).observe(document,{childList:!0,subtree:!0});function c(N){const E={};return N.integrity&&(E.integrity=N.integrity),N.referrerPolicy&&(E.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?E.credentials="include":N.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function w(N){if(N.ep)return;N.ep=!0;const E=c(N);fetch(N.href,E)}})();var Pi={exports:{}},Sr={},_i={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function qd(){if(Ru)return $;Ru=1;var a=Symbol.for("react.element"),h=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),D=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),I=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),H=Symbol.iterator;function W(p){return p===null||typeof p!="object"?null:(p=H&&p[H]||p["@@iterator"],typeof p=="function"?p:null)}var xe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ke=Object.assign,oe={};function q(p,k,U){this.props=p,this.context=k,this.refs=oe,this.updater=U||xe}q.prototype.isReactComponent={},q.prototype.setState=function(p,k){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,k,"setState")},q.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function kn(){}kn.prototype=q.prototype;function dn(p,k,U){this.props=p,this.context=k,this.refs=oe,this.updater=U||xe}var en=dn.prototype=new kn;en.constructor=dn,Ke(en,q.prototype),en.isPureReactComponent=!0;var be=Array.isArray,nn=Object.prototype.hasOwnProperty,je={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Ge(p,k,U){var K,Q={},Y=null,ee=null;if(k!=null)for(K in k.ref!==void 0&&(ee=k.ref),k.key!==void 0&&(Y=""+k.key),k)nn.call(k,K)&&!_e.hasOwnProperty(K)&&(Q[K]=k[K]);var Z=arguments.length-2;if(Z===1)Q.children=U;else if(1<Z){for(var se=Array(Z),Me=0;Me<Z;Me++)se[Me]=arguments[Me+2];Q.children=se}if(p&&p.defaultProps)for(K in Z=p.defaultProps,Z)Q[K]===void 0&&(Q[K]=Z[K]);return{$$typeof:a,type:p,key:Y,ref:ee,props:Q,_owner:je.current}}function Ln(p,k){return{$$typeof:a,type:p.type,key:k,ref:p.ref,props:p.props,_owner:p._owner}}function xn(p){return typeof p=="object"&&p!==null&&p.$$typeof===a}function qn(p){var k={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(U){return k[U]})}var fn=/\/+/g;function Fe(p,k){return typeof p=="object"&&p!==null&&p.key!=null?qn(""+p.key):k.toString(36)}function tn(p,k,U,K,Q){var Y=typeof p;(Y==="undefined"||Y==="boolean")&&(p=null);var ee=!1;if(p===null)ee=!0;else switch(Y){case"string":case"number":ee=!0;break;case"object":switch(p.$$typeof){case a:case h:ee=!0}}if(ee)return ee=p,Q=Q(ee),p=K===""?"."+Fe(ee,0):K,be(Q)?(U="",p!=null&&(U=p.replace(fn,"$&/")+"/"),tn(Q,k,U,"",function(Me){return Me})):Q!=null&&(xn(Q)&&(Q=Ln(Q,U+(!Q.key||ee&&ee.key===Q.key?"":(""+Q.key).replace(fn,"$&/")+"/")+p)),k.push(Q)),1;if(ee=0,K=K===""?".":K+":",be(p))for(var Z=0;Z<p.length;Z++){Y=p[Z];var se=K+Fe(Y,Z);ee+=tn(Y,k,U,se,Q)}else if(se=W(p),typeof se=="function")for(p=se.call(p),Z=0;!(Y=p.next()).done;)Y=Y.value,se=K+Fe(Y,Z++),ee+=tn(Y,k,U,se,Q);else if(Y==="object")throw k=String(p),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return ee}function hn(p,k,U){if(p==null)return p;var K=[],Q=0;return tn(p,K,"","",function(Y){return k.call(U,Y,Q++)}),K}function ze(p){if(p._status===-1){var k=p._result;k=k(),k.then(function(U){(p._status===0||p._status===-1)&&(p._status=1,p._result=U)},function(U){(p._status===0||p._status===-1)&&(p._status=2,p._result=U)}),p._status===-1&&(p._status=0,p._result=k)}if(p._status===1)return p._result.default;throw p._result}var ue={current:null},j={transition:null},B={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:j,ReactCurrentOwner:je};function _(){throw Error("act(...) is not supported in production builds of React.")}return $.Children={map:hn,forEach:function(p,k,U){hn(p,function(){k.apply(this,arguments)},U)},count:function(p){var k=0;return hn(p,function(){k++}),k},toArray:function(p){return hn(p,function(k){return k})||[]},only:function(p){if(!xn(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},$.Component=q,$.Fragment=c,$.Profiler=N,$.PureComponent=dn,$.StrictMode=w,$.Suspense=S,$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,$.act=_,$.cloneElement=function(p,k,U){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var K=Ke({},p.props),Q=p.key,Y=p.ref,ee=p._owner;if(k!=null){if(k.ref!==void 0&&(Y=k.ref,ee=je.current),k.key!==void 0&&(Q=""+k.key),p.type&&p.type.defaultProps)var Z=p.type.defaultProps;for(se in k)nn.call(k,se)&&!_e.hasOwnProperty(se)&&(K[se]=k[se]===void 0&&Z!==void 0?Z[se]:k[se])}var se=arguments.length-2;if(se===1)K.children=U;else if(1<se){Z=Array(se);for(var Me=0;Me<se;Me++)Z[Me]=arguments[Me+2];K.children=Z}return{$$typeof:a,type:p.type,key:Q,ref:Y,props:K,_owner:ee}},$.createContext=function(p){return p={$$typeof:D,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:E,_context:p},p.Consumer=p},$.createElement=Ge,$.createFactory=function(p){var k=Ge.bind(null,p);return k.type=p,k},$.createRef=function(){return{current:null}},$.forwardRef=function(p){return{$$typeof:F,render:p}},$.isValidElement=xn,$.lazy=function(p){return{$$typeof:V,_payload:{_status:-1,_result:p},_init:ze}},$.memo=function(p,k){return{$$typeof:I,type:p,compare:k===void 0?null:k}},$.startTransition=function(p){var k=j.transition;j.transition={};try{p()}finally{j.transition=k}},$.unstable_act=_,$.useCallback=function(p,k){return ue.current.useCallback(p,k)},$.useContext=function(p){return ue.current.useContext(p)},$.useDebugValue=function(){},$.useDeferredValue=function(p){return ue.current.useDeferredValue(p)},$.useEffect=function(p,k){return ue.current.useEffect(p,k)},$.useId=function(){return ue.current.useId()},$.useImperativeHandle=function(p,k,U){return ue.current.useImperativeHandle(p,k,U)},$.useInsertionEffect=function(p,k){return ue.current.useInsertionEffect(p,k)},$.useLayoutEffect=function(p,k){return ue.current.useLayoutEffect(p,k)},$.useMemo=function(p,k){return ue.current.useMemo(p,k)},$.useReducer=function(p,k,U){return ue.current.useReducer(p,k,U)},$.useRef=function(p){return ue.current.useRef(p)},$.useState=function(p){return ue.current.useState(p)},$.useSyncExternalStore=function(p,k,U){return ue.current.useSyncExternalStore(p,k,U)},$.useTransition=function(){return ue.current.useTransition()},$.version="18.3.1",$}var Ou;function Oi(){return Ou||(Ou=1,_i.exports=qd()),_i.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function ef(){if(Iu)return Sr;Iu=1;var a=Oi(),h=Symbol.for("react.element"),c=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,N=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function D(F,S,I){var V,H={},W=null,xe=null;I!==void 0&&(W=""+I),S.key!==void 0&&(W=""+S.key),S.ref!==void 0&&(xe=S.ref);for(V in S)w.call(S,V)&&!E.hasOwnProperty(V)&&(H[V]=S[V]);if(F&&F.defaultProps)for(V in S=F.defaultProps,S)H[V]===void 0&&(H[V]=S[V]);return{$$typeof:h,type:F,key:W,ref:xe,props:H,_owner:N.current}}return Sr.Fragment=c,Sr.jsx=D,Sr.jsxs=D,Sr}var Bu;function nf(){return Bu||(Bu=1,Pi.exports=ef()),Pi.exports}var l=nf(),zn=Oi(),Ro={},zi={exports:{}},Ie={},Li={exports:{}},Ai={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function tf(){return Fu||(Fu=1,(function(a){function h(j,B){var _=j.length;j.push(B);e:for(;0<_;){var p=_-1>>>1,k=j[p];if(0<N(k,B))j[p]=B,j[_]=k,_=p;else break e}}function c(j){return j.length===0?null:j[0]}function w(j){if(j.length===0)return null;var B=j[0],_=j.pop();if(_!==B){j[0]=_;e:for(var p=0,k=j.length,U=k>>>1;p<U;){var K=2*(p+1)-1,Q=j[K],Y=K+1,ee=j[Y];if(0>N(Q,_))Y<k&&0>N(ee,Q)?(j[p]=ee,j[Y]=_,p=Y):(j[p]=Q,j[K]=_,p=K);else if(Y<k&&0>N(ee,_))j[p]=ee,j[Y]=_,p=Y;else break e}}return B}function N(j,B){var _=j.sortIndex-B.sortIndex;return _!==0?_:j.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;a.unstable_now=function(){return E.now()}}else{var D=Date,F=D.now();a.unstable_now=function(){return D.now()-F}}var S=[],I=[],V=1,H=null,W=3,xe=!1,Ke=!1,oe=!1,q=typeof setTimeout=="function"?setTimeout:null,kn=typeof clearTimeout=="function"?clearTimeout:null,dn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function en(j){for(var B=c(I);B!==null;){if(B.callback===null)w(I);else if(B.startTime<=j)w(I),B.sortIndex=B.expirationTime,h(S,B);else break;B=c(I)}}function be(j){if(oe=!1,en(j),!Ke)if(c(S)!==null)Ke=!0,ze(nn);else{var B=c(I);B!==null&&ue(be,B.startTime-j)}}function nn(j,B){Ke=!1,oe&&(oe=!1,kn(Ge),Ge=-1),xe=!0;var _=W;try{for(en(B),H=c(S);H!==null&&(!(H.expirationTime>B)||j&&!qn());){var p=H.callback;if(typeof p=="function"){H.callback=null,W=H.priorityLevel;var k=p(H.expirationTime<=B);B=a.unstable_now(),typeof k=="function"?H.callback=k:H===c(S)&&w(S),en(B)}else w(S);H=c(S)}if(H!==null)var U=!0;else{var K=c(I);K!==null&&ue(be,K.startTime-B),U=!1}return U}finally{H=null,W=_,xe=!1}}var je=!1,_e=null,Ge=-1,Ln=5,xn=-1;function qn(){return!(a.unstable_now()-xn<Ln)}function fn(){if(_e!==null){var j=a.unstable_now();xn=j;var B=!0;try{B=_e(!0,j)}finally{B?Fe():(je=!1,_e=null)}}else je=!1}var Fe;if(typeof dn=="function")Fe=function(){dn(fn)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,hn=tn.port2;tn.port1.onmessage=fn,Fe=function(){hn.postMessage(null)}}else Fe=function(){q(fn,0)};function ze(j){_e=j,je||(je=!0,Fe())}function ue(j,B){Ge=q(function(){j(a.unstable_now())},B)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_continueExecution=function(){Ke||xe||(Ke=!0,ze(nn))},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ln=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return W},a.unstable_getFirstCallbackNode=function(){return c(S)},a.unstable_next=function(j){switch(W){case 1:case 2:case 3:var B=3;break;default:B=W}var _=W;W=B;try{return j()}finally{W=_}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(j,B){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var _=W;W=j;try{return B()}finally{W=_}},a.unstable_scheduleCallback=function(j,B,_){var p=a.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?p+_:p):_=p,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=_+k,j={id:V++,callback:B,priorityLevel:j,startTime:_,expirationTime:k,sortIndex:-1},_>p?(j.sortIndex=_,h(I,j),c(S)===null&&j===c(I)&&(oe?(kn(Ge),Ge=-1):oe=!0,ue(be,_-p))):(j.sortIndex=k,h(S,j),Ke||xe||(Ke=!0,ze(nn))),j},a.unstable_shouldYield=qn,a.unstable_wrapCallback=function(j){var B=W;return function(){var _=W;W=B;try{return j.apply(this,arguments)}finally{W=_}}}})(Ai)),Ai}var Mu;function rf(){return Mu||(Mu=1,Li.exports=tf()),Li.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu;function of(){if(Hu)return Ie;Hu=1;var a=Oi(),h=rf();function c(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w=new Set,N={};function E(e,n){D(e,n),D(e+"Capture",n)}function D(e,n){for(N[e]=n,e=0;e<n.length;e++)w.add(n[e])}var F=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),S=Object.prototype.hasOwnProperty,I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},H={};function W(e){return S.call(H,e)?!0:S.call(V,e)?!1:I.test(e)?H[e]=!0:(V[e]=!0,!1)}function xe(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ke(e,n,t,r){if(n===null||typeof n>"u"||xe(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function oe(e,n,t,r,o,s,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=i}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new oe(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];q[n]=new oe(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new oe(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new oe(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new oe(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new oe(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new oe(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new oe(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var kn=/[\-:]([a-z])/g;function dn(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(kn,dn);q[n]=new oe(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(kn,dn);q[n]=new oe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(kn,dn);q[n]=new oe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new oe(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function en(e,n,t,r){var o=q.hasOwnProperty(n)?q[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ke(n,t,o,r)&&(t=null),r||o===null?W(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var be=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nn=Symbol.for("react.element"),je=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Ln=Symbol.for("react.profiler"),xn=Symbol.for("react.provider"),qn=Symbol.for("react.context"),fn=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),tn=Symbol.for("react.suspense_list"),hn=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),j=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,p;function k(e){if(p===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);p=n&&n[1]||""}return`
`+p+e}var U=!1;function K(e,n){if(!e||U)return"";U=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(y){var r=y}Reflect.construct(e,[],n)}else{try{n.call()}catch(y){r=y}e.call(n.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,u=s.length-1;1<=i&&0<=u&&o[i]!==s[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==s[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==s[u]){var d=`
`+o[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=u);break}}}finally{U=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function Q(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case je:return"Portal";case Ln:return"Profiler";case Ge:return"StrictMode";case Fe:return"Suspense";case tn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qn:return(e.displayName||"Context")+".Consumer";case xn:return(e._context.displayName||"Context")+".Provider";case fn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hn:return n=e.displayName||null,n!==null?n:Y(e.type)||"Memo";case ze:n=e._payload,e=e._init;try{return Y(e(n))}catch{}}return null}function ee(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(n);case 8:return n===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Z(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Me(e){var n=se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Tr(e){e._valueTracker||(e._valueTracker=Me(e))}function Hi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=se(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,n){var t=n.checked;return _({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Wi(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Z(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ui(e,n){n=n.checked,n!=null&&en(e,"checked",n,!1)}function Io(e,n){Ui(e,n);var t=Z(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Bo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Bo(e,n.type,Z(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $i(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Bo(e,n,t){(n!=="number"||Nr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bt=Array.isArray;function ht(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Z(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Fo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(c(91));return _({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ki(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(c(92));if(Bt(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Z(t)}}function Gi(e,n){var t=Z(n.value),r=Z(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Vi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qi(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Yi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ft(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rc=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){rc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function Ji(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function Zi(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Ji(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var oc=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ho(e,n){if(n){if(oc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(c(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(c(61))}if(n.style!=null&&typeof n.style!="object")throw Error(c(62))}}function Wo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ko=null,pt=null,mt=null;function Xi(e){if(e=lr(e)){if(typeof Ko!="function")throw Error(c(280));var n=e.stateNode;n&&(n=Yr(n),Ko(e.stateNode,e.type,n))}}function qi(e){pt?mt?mt.push(e):mt=[e]:pt=e}function ea(){if(pt){var e=pt,n=mt;if(mt=pt=null,Xi(e),n)for(e=0;e<n.length;e++)Xi(n[e])}}function na(e,n){return e(n)}function ta(){}var Go=!1;function ra(e,n,t){if(Go)return e(n,t);Go=!0;try{return na(e,n,t)}finally{Go=!1,(pt!==null||mt!==null)&&(ta(),ea())}}function Ht(e,n){var t=e.stateNode;if(t===null)return null;var r=Yr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Vo=!1;if(F)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{Vo=!1}function sc(e,n,t,r,o,s,i,u,d){var y=Array.prototype.slice.call(arguments,3);try{n.apply(t,y)}catch(x){this.onError(x)}}var Ut=!1,jr=null,Cr=!1,Qo=null,ic={onError:function(e){Ut=!0,jr=e}};function ac(e,n,t,r,o,s,i,u,d){Ut=!1,jr=null,sc.apply(ic,arguments)}function lc(e,n,t,r,o,s,i,u,d){if(ac.apply(this,arguments),Ut){if(Ut){var y=jr;Ut=!1,jr=null}else throw Error(c(198));Cr||(Cr=!0,Qo=y)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function oa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function sa(e){if(et(e)!==e)throw Error(c(188))}function uc(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return sa(o),e;if(s===r)return sa(o),n;s=s.sibling}throw Error(c(188))}if(t.return!==r.return)t=o,r=s;else{for(var i=!1,u=o.child;u;){if(u===t){i=!0,t=o,r=s;break}if(u===r){i=!0,r=o,t=s;break}u=u.sibling}if(!i){for(u=s.child;u;){if(u===t){i=!0,t=s,r=o;break}if(u===r){i=!0,r=s,t=o;break}u=u.sibling}if(!i)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function ia(e){return e=uc(e),e!==null?aa(e):null}function aa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=aa(e);if(n!==null)return n;e=e.sibling}return null}var la=h.unstable_scheduleCallback,ua=h.unstable_cancelCallback,cc=h.unstable_shouldYield,dc=h.unstable_requestPaint,de=h.unstable_now,fc=h.unstable_getCurrentPriorityLevel,Yo=h.unstable_ImmediatePriority,ca=h.unstable_UserBlockingPriority,Pr=h.unstable_NormalPriority,hc=h.unstable_LowPriority,da=h.unstable_IdlePriority,_r=null,pn=null;function pc(e){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:yc,mc=Math.log,gc=Math.LN2;function yc(e){return e>>>=0,e===0?32:31-(mc(e)/gc|0)|0}var zr=64,Lr=4194304;function $t(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=t&268435455;if(i!==0){var u=i&~o;u!==0?r=$t(u):(s&=i,s!==0&&(r=$t(s)))}else i=t&~o,i!==0?r=$t(i):s!==0&&(r=$t(s));if(r===0)return 0;if(n!==0&&n!==r&&(n&o)===0&&(o=r&-r,s=n&-n,o>=s||o===16&&(s&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-rn(n),o=1<<t,r|=e[t],n&=~o;return r}function wc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-rn(s),u=1<<i,d=o[i];d===-1?((u&t)===0||(u&r)!==0)&&(o[i]=wc(u,n)):d<=n&&(e.expiredLanes|=u),s&=~u}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fa(){var e=zr;return zr<<=1,(zr&4194240)===0&&(zr=64),e}function Zo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=t}function kc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-rn(t),s=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~s}}function Xo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-rn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var X=0;function ha(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pa,qo,ma,ga,ya,es=!1,Dr=[],An=null,Dn=null,Rn=null,Gt=new Map,Vt=new Map,On=[],xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wa(e,n){switch(e){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Gt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vt.delete(n.pointerId)}}function Qt(e,n,t,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},n!==null&&(n=lr(n),n!==null&&qo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function bc(e,n,t,r,o){switch(n){case"focusin":return An=Qt(An,e,n,t,r,o),!0;case"dragenter":return Dn=Qt(Dn,e,n,t,r,o),!0;case"mouseover":return Rn=Qt(Rn,e,n,t,r,o),!0;case"pointerover":var s=o.pointerId;return Gt.set(s,Qt(Gt.get(s)||null,e,n,t,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Vt.set(s,Qt(Vt.get(s)||null,e,n,t,r,o)),!0}return!1}function va(e){var n=nt(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=oa(t),n!==null){e.blockedOn=n,ya(e.priority,function(){ma(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ts(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Uo=r,t.target.dispatchEvent(r),Uo=null}else return n=lr(t),n!==null&&qo(n),e.blockedOn=t,!1;n.shift()}return!0}function ka(e,n,t){Rr(e)&&t.delete(n)}function Sc(){es=!1,An!==null&&Rr(An)&&(An=null),Dn!==null&&Rr(Dn)&&(Dn=null),Rn!==null&&Rr(Rn)&&(Rn=null),Gt.forEach(ka),Vt.forEach(ka)}function Yt(e,n){e.blockedOn===n&&(e.blockedOn=null,es||(es=!0,h.unstable_scheduleCallback(h.unstable_NormalPriority,Sc)))}function Jt(e){function n(o){return Yt(o,e)}if(0<Dr.length){Yt(Dr[0],e);for(var t=1;t<Dr.length;t++){var r=Dr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(An!==null&&Yt(An,e),Dn!==null&&Yt(Dn,e),Rn!==null&&Yt(Rn,e),Gt.forEach(n),Vt.forEach(n),t=0;t<On.length;t++)r=On[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&(t=On[0],t.blockedOn===null);)va(t),t.blockedOn===null&&On.shift()}var gt=be.ReactCurrentBatchConfig,Or=!0;function Tc(e,n,t,r){var o=X,s=gt.transition;gt.transition=null;try{X=1,ns(e,n,t,r)}finally{X=o,gt.transition=s}}function Nc(e,n,t,r){var o=X,s=gt.transition;gt.transition=null;try{X=4,ns(e,n,t,r)}finally{X=o,gt.transition=s}}function ns(e,n,t,r){if(Or){var o=ts(e,n,t,r);if(o===null)vs(e,n,r,Ir,t),wa(e,r);else if(bc(o,e,n,t,r))r.stopPropagation();else if(wa(e,r),n&4&&-1<xc.indexOf(e)){for(;o!==null;){var s=lr(o);if(s!==null&&pa(s),s=ts(e,n,t,r),s===null&&vs(e,n,r,Ir,t),s===o)break;o=s}o!==null&&r.stopPropagation()}else vs(e,n,r,null,t)}}var Ir=null;function ts(e,n,t,r){if(Ir=null,e=$o(r),e=nt(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=oa(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ir=e,null}function xa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case Yo:return 1;case ca:return 4;case Pr:case hc:return 16;case da:return 536870912;default:return 16}default:return 16}}var In=null,rs=null,Br=null;function ba(){if(Br)return Br;var e,n=rs,t=n.length,r,o="value"in In?In.value:In.textContent,s=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[s-r];r++);return Br=o.slice(e,1<r?1-r:void 0)}function Fr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Mr(){return!0}function Sa(){return!1}function He(e){function n(t,r,o,s,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mr:Sa,this.isPropagationStopped=Sa,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),n}var yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=He(yt),Zt=_({},yt,{view:0,detail:0}),Ec=He(Zt),ss,is,Xt,Hr=_({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&e.type==="mousemove"?(ss=e.screenX-Xt.screenX,is=e.screenY-Xt.screenY):is=ss=0,Xt=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:is}}),Ta=He(Hr),jc=_({},Hr,{dataTransfer:0}),Cc=He(jc),Pc=_({},Zt,{relatedTarget:0}),as=He(Pc),_c=_({},yt,{animationName:0,elapsedTime:0,pseudoElement:0}),zc=He(_c),Lc=_({},yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ac=He(Lc),Dc=_({},yt,{data:0}),Na=He(Dc),Rc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ic[e])?!!n[e]:!1}function ls(){return Bc}var Fc=_({},Zt,{key:function(e){if(e.key){var n=Rc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Oc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mc=He(Fc),Hc=_({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=He(Hc),Wc=_({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),Uc=He(Wc),$c=_({},yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kc=He($c),Gc=_({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vc=He(Gc),Qc=[9,13,27,32],us=F&&"CompositionEvent"in window,qt=null;F&&"documentMode"in document&&(qt=document.documentMode);var Yc=F&&"TextEvent"in window&&!qt,ja=F&&(!us||qt&&8<qt&&11>=qt),Ca=" ",Pa=!1;function _a(e,n){switch(e){case"keyup":return Qc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function za(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wt=!1;function Jc(e,n){switch(e){case"compositionend":return za(n);case"keypress":return n.which!==32?null:(Pa=!0,Ca);case"textInput":return e=n.data,e===Ca&&Pa?null:e;default:return null}}function Zc(e,n){if(wt)return e==="compositionend"||!us&&_a(e,n)?(e=ba(),Br=rs=In=null,wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ja&&n.locale!=="ko"?null:n.data;default:return null}}var Xc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function La(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xc[e.type]:n==="textarea"}function Aa(e,n,t,r){qi(r),n=Gr(n,"onChange"),0<n.length&&(t=new os("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var er=null,nr=null;function qc(e){Za(e,0)}function Wr(e){var n=St(e);if(Hi(n))return e}function ed(e,n){if(e==="change")return n}var Da=!1;if(F){var cs;if(F){var ds="oninput"in document;if(!ds){var Ra=document.createElement("div");Ra.setAttribute("oninput","return;"),ds=typeof Ra.oninput=="function"}cs=ds}else cs=!1;Da=cs&&(!document.documentMode||9<document.documentMode)}function Oa(){er&&(er.detachEvent("onpropertychange",Ia),nr=er=null)}function Ia(e){if(e.propertyName==="value"&&Wr(nr)){var n=[];Aa(n,nr,e,$o(e)),ra(qc,n)}}function nd(e,n,t){e==="focusin"?(Oa(),er=n,nr=t,er.attachEvent("onpropertychange",Ia)):e==="focusout"&&Oa()}function td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wr(nr)}function rd(e,n){if(e==="click")return Wr(n)}function od(e,n){if(e==="input"||e==="change")return Wr(n)}function sd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:sd;function tr(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!S.call(n,o)||!on(e[o],n[o]))return!1}return!0}function Ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fa(e,n){var t=Ba(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ba(t)}}function Ma(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ma(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ha(){for(var e=window,n=Nr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Nr(e.document)}return n}function fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function id(e){var n=Ha(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ma(t.ownerDocument.documentElement,t)){if(r!==null&&fs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Fa(t,s);var i=Fa(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ad=F&&"documentMode"in document&&11>=document.documentMode,vt=null,hs=null,rr=null,ps=!1;function Wa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ps||vt==null||vt!==Nr(r)||(r=vt,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&tr(rr,r)||(rr=r,r=Gr(hs,"onSelect"),0<r.length&&(n=new os("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=vt)))}function Ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var kt={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},ms={},Ua={};F&&(Ua=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function $r(e){if(ms[e])return ms[e];if(!kt[e])return e;var n=kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ua)return ms[e]=n[t];return e}var $a=$r("animationend"),Ka=$r("animationiteration"),Ga=$r("animationstart"),Va=$r("transitionend"),Qa=new Map,Ya="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,n){Qa.set(e,n),E(n,[e])}for(var gs=0;gs<Ya.length;gs++){var ys=Ya[gs],ld=ys.toLowerCase(),ud=ys[0].toUpperCase()+ys.slice(1);Bn(ld,"on"+ud)}Bn($a,"onAnimationEnd"),Bn(Ka,"onAnimationIteration"),Bn(Ga,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Va,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cd=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Ja(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,lc(r,n,void 0,e),e.currentTarget=null}function Za(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var i=r.length-1;0<=i;i--){var u=r[i],d=u.instance,y=u.currentTarget;if(u=u.listener,d!==s&&o.isPropagationStopped())break e;Ja(o,u,y),s=d}else for(i=0;i<r.length;i++){if(u=r[i],d=u.instance,y=u.currentTarget,u=u.listener,d!==s&&o.isPropagationStopped())break e;Ja(o,u,y),s=d}}}if(Cr)throw e=Qo,Cr=!1,Qo=null,e}function te(e,n){var t=n[Ns];t===void 0&&(t=n[Ns]=new Set);var r=e+"__bubble";t.has(r)||(Xa(n,e,2,!1),t.add(r))}function ws(e,n,t){var r=0;n&&(r|=4),Xa(t,e,r,n)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Kr]){e[Kr]=!0,w.forEach(function(t){t!=="selectionchange"&&(cd.has(t)||ws(t,!1,e),ws(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kr]||(n[Kr]=!0,ws("selectionchange",!1,n))}}function Xa(e,n,t,r){switch(xa(n)){case 1:var o=Tc;break;case 4:o=Nc;break;default:o=ns}t=o.bind(null,n,t,e),o=void 0,!Vo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function vs(e,n,t,r,o){var s=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;i=i.return}for(;u!==null;){if(i=nt(u),i===null)return;if(d=i.tag,d===5||d===6){r=s=i;continue e}u=u.parentNode}}r=r.return}ra(function(){var y=s,x=$o(t),b=[];e:{var v=Qa.get(e);if(v!==void 0){var C=os,z=e;switch(e){case"keypress":if(Fr(t)===0)break e;case"keydown":case"keyup":C=Mc;break;case"focusin":z="focus",C=as;break;case"focusout":z="blur",C=as;break;case"beforeblur":case"afterblur":C=as;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Uc;break;case $a:case Ka:case Ga:C=zc;break;case Va:C=Kc;break;case"scroll":C=Ec;break;case"wheel":C=Vc;break;case"copy":case"cut":case"paste":C=Ac;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ea}var L=(n&4)!==0,fe=!L&&e==="scroll",m=L?v!==null?v+"Capture":null:v;L=[];for(var f=y,g;f!==null;){g=f;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,m!==null&&(T=Ht(f,m),T!=null&&L.push(ir(f,T,g)))),fe)break;f=f.return}0<L.length&&(v=new C(v,z,null,t,x),b.push({event:v,listeners:L}))}}if((n&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",v&&t!==Uo&&(z=t.relatedTarget||t.fromElement)&&(nt(z)||z[bn]))break e;if((C||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,C?(z=t.relatedTarget||t.toElement,C=y,z=z?nt(z):null,z!==null&&(fe=et(z),z!==fe||z.tag!==5&&z.tag!==6)&&(z=null)):(C=null,z=y),C!==z)){if(L=Ta,T="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(L=Ea,T="onPointerLeave",m="onPointerEnter",f="pointer"),fe=C==null?v:St(C),g=z==null?v:St(z),v=new L(T,f+"leave",C,t,x),v.target=fe,v.relatedTarget=g,T=null,nt(x)===y&&(L=new L(m,f+"enter",z,t,x),L.target=g,L.relatedTarget=fe,T=L),fe=T,C&&z)n:{for(L=C,m=z,f=0,g=L;g;g=xt(g))f++;for(g=0,T=m;T;T=xt(T))g++;for(;0<f-g;)L=xt(L),f--;for(;0<g-f;)m=xt(m),g--;for(;f--;){if(L===m||m!==null&&L===m.alternate)break n;L=xt(L),m=xt(m)}L=null}else L=null;C!==null&&qa(b,v,C,L,!1),z!==null&&fe!==null&&qa(b,fe,z,L,!0)}}e:{if(v=y?St(y):window,C=v.nodeName&&v.nodeName.toLowerCase(),C==="select"||C==="input"&&v.type==="file")var A=ed;else if(La(v))if(Da)A=od;else{A=td;var R=nd}else(C=v.nodeName)&&C.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(A=rd);if(A&&(A=A(e,y))){Aa(b,A,t,x);break e}R&&R(e,v,y),e==="focusout"&&(R=v._wrapperState)&&R.controlled&&v.type==="number"&&Bo(v,"number",v.value)}switch(R=y?St(y):window,e){case"focusin":(La(R)||R.contentEditable==="true")&&(vt=R,hs=y,rr=null);break;case"focusout":rr=hs=vt=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,Wa(b,t,x);break;case"selectionchange":if(ad)break;case"keydown":case"keyup":Wa(b,t,x)}var O;if(us)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else wt?_a(e,t)&&(M="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(ja&&t.locale!=="ko"&&(wt||M!=="onCompositionStart"?M==="onCompositionEnd"&&wt&&(O=ba()):(In=x,rs="value"in In?In.value:In.textContent,wt=!0)),R=Gr(y,M),0<R.length&&(M=new Na(M,e,null,t,x),b.push({event:M,listeners:R}),O?M.data=O:(O=za(t),O!==null&&(M.data=O)))),(O=Yc?Jc(e,t):Zc(e,t))&&(y=Gr(y,"onBeforeInput"),0<y.length&&(x=new Na("onBeforeInput","beforeinput",null,t,x),b.push({event:x,listeners:y}),x.data=O))}Za(b,n)})}function ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Gr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Ht(e,t),s!=null&&r.unshift(ir(e,s,o)),s=Ht(e,n),s!=null&&r.push(ir(e,s,o))),e=e.return}return r}function xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qa(e,n,t,r,o){for(var s=n._reactName,i=[];t!==null&&t!==r;){var u=t,d=u.alternate,y=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&y!==null&&(u=y,o?(d=Ht(t,s),d!=null&&i.unshift(ir(t,d,u))):o||(d=Ht(t,s),d!=null&&i.push(ir(t,d,u)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var dd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function el(e){return(typeof e=="string"?e:""+e).replace(dd,`
`).replace(fd,"")}function Vr(e,n,t){if(n=el(n),el(e)!==n&&t)throw Error(c(425))}function Qr(){}var ks=null,xs=null;function bs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ss=typeof setTimeout=="function"?setTimeout:void 0,hd=typeof clearTimeout=="function"?clearTimeout:void 0,nl=typeof Promise=="function"?Promise:void 0,pd=typeof queueMicrotask=="function"?queueMicrotask:typeof nl<"u"?function(e){return nl.resolve(null).then(e).catch(md)}:Ss;function md(e){setTimeout(function(){throw e})}function Ts(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Jt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Jt(n)}function Fn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function tl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var bt=Math.random().toString(36).slice(2),mn="__reactFiber$"+bt,ar="__reactProps$"+bt,bn="__reactContainer$"+bt,Ns="__reactEvents$"+bt,gd="__reactListeners$"+bt,yd="__reactHandles$"+bt;function nt(e){var n=e[mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[bn]||t[mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=tl(e);e!==null;){if(t=e[mn])return t;e=tl(e)}return n}e=t,t=e.parentNode}return null}function lr(e){return e=e[mn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Yr(e){return e[ar]||null}var Es=[],Tt=-1;function Mn(e){return{current:e}}function re(e){0>Tt||(e.current=Es[Tt],Es[Tt]=null,Tt--)}function ne(e,n){Tt++,Es[Tt]=e.current,e.current=n}var Hn={},Se=Mn(Hn),Le=Mn(!1),tt=Hn;function Nt(e,n){var t=e.type.contextTypes;if(!t)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in t)o[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Jr(){re(Le),re(Se)}function rl(e,n,t){if(Se.current!==Hn)throw Error(c(168));ne(Se,n),ne(Le,t)}function ol(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(c(108,ee(e)||"Unknown",o));return _({},t,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,tt=Se.current,ne(Se,e),ne(Le,Le.current),!0}function sl(e,n,t){var r=e.stateNode;if(!r)throw Error(c(169));t?(e=ol(e,n,tt),r.__reactInternalMemoizedMergedChildContext=e,re(Le),re(Se),ne(Se,e)):re(Le),ne(Le,t)}var Sn=null,Xr=!1,js=!1;function il(e){Sn===null?Sn=[e]:Sn.push(e)}function wd(e){Xr=!0,il(e)}function Wn(){if(!js&&Sn!==null){js=!0;var e=0,n=X;try{var t=Sn;for(X=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Sn=null,Xr=!1}catch(o){throw Sn!==null&&(Sn=Sn.slice(e+1)),la(Yo,Wn),o}finally{X=n,js=!1}}return null}var Et=[],jt=0,qr=null,eo=0,Ve=[],Qe=0,rt=null,Tn=1,Nn="";function ot(e,n){Et[jt++]=eo,Et[jt++]=qr,qr=e,eo=n}function al(e,n,t){Ve[Qe++]=Tn,Ve[Qe++]=Nn,Ve[Qe++]=rt,rt=e;var r=Tn;e=Nn;var o=32-rn(r)-1;r&=~(1<<o),t+=1;var s=32-rn(n)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Tn=1<<32-rn(n)+o|t<<o|r,Nn=s+e}else Tn=1<<s|t<<o|r,Nn=e}function Cs(e){e.return!==null&&(ot(e,1),al(e,1,0))}function Ps(e){for(;e===qr;)qr=Et[--jt],Et[jt]=null,eo=Et[--jt],Et[jt]=null;for(;e===rt;)rt=Ve[--Qe],Ve[Qe]=null,Nn=Ve[--Qe],Ve[Qe]=null,Tn=Ve[--Qe],Ve[Qe]=null}var We=null,Ue=null,ie=!1,sn=null;function ll(e,n){var t=Xe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ul(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,We=e,Ue=Fn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,We=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=rt!==null?{id:Tn,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Xe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,We=e,Ue=null,!0):!1;default:return!1}}function _s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(ie){var n=Ue;if(n){var t=n;if(!ul(e,n)){if(_s(e))throw Error(c(418));n=Fn(t.nextSibling);var r=We;n&&ul(e,n)?ll(r,t):(e.flags=e.flags&-4097|2,ie=!1,We=e)}}else{if(_s(e))throw Error(c(418));e.flags=e.flags&-4097|2,ie=!1,We=e}}}function cl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function no(e){if(e!==We)return!1;if(!ie)return cl(e),ie=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!bs(e.type,e.memoizedProps)),n&&(n=Ue)){if(_s(e))throw dl(),Error(c(418));for(;n;)ll(e,n),n=Fn(n.nextSibling)}if(cl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ue=Fn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=We?Fn(e.stateNode.nextSibling):null;return!0}function dl(){for(var e=Ue;e;)e=Fn(e.nextSibling)}function Ct(){Ue=We=null,ie=!1}function Ls(e){sn===null?sn=[e]:sn.push(e)}var vd=be.ReactCurrentBatchConfig;function ur(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var r=t.stateNode}if(!r)throw Error(c(147,e));var o=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(i){var u=o.refs;i===null?delete u[s]:u[s]=i},n._stringRef=s,n)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function to(e,n){throw e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function fl(e){var n=e._init;return n(e._payload)}function hl(e){function n(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=Jn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,f,g,T){return f===null||f.tag!==6?(f=Si(g,m.mode,T),f.return=m,f):(f=o(f,g),f.return=m,f)}function d(m,f,g,T){var A=g.type;return A===_e?x(m,f,g.props.children,T,g.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ze&&fl(A)===f.type)?(T=o(f,g.props),T.ref=ur(m,f,g),T.return=m,T):(T=jo(g.type,g.key,g.props,null,m.mode,T),T.ref=ur(m,f,g),T.return=m,T)}function y(m,f,g,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ti(g,m.mode,T),f.return=m,f):(f=o(f,g.children||[]),f.return=m,f)}function x(m,f,g,T,A){return f===null||f.tag!==7?(f=ft(g,m.mode,T,A),f.return=m,f):(f=o(f,g),f.return=m,f)}function b(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Si(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nn:return g=jo(f.type,f.key,f.props,null,m.mode,g),g.ref=ur(m,null,f),g.return=m,g;case je:return f=Ti(f,m.mode,g),f.return=m,f;case ze:var T=f._init;return b(m,T(f._payload),g)}if(Bt(f)||B(f))return f=ft(f,m.mode,g,null),f.return=m,f;to(m,f)}return null}function v(m,f,g,T){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:u(m,f,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:return g.key===A?d(m,f,g,T):null;case je:return g.key===A?y(m,f,g,T):null;case ze:return A=g._init,v(m,f,A(g._payload),T)}if(Bt(g)||B(g))return A!==null?null:x(m,f,g,T,null);to(m,g)}return null}function C(m,f,g,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return m=m.get(g)||null,u(f,m,""+T,A);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case nn:return m=m.get(T.key===null?g:T.key)||null,d(f,m,T,A);case je:return m=m.get(T.key===null?g:T.key)||null,y(f,m,T,A);case ze:var R=T._init;return C(m,f,g,R(T._payload),A)}if(Bt(T)||B(T))return m=m.get(g)||null,x(f,m,T,A,null);to(f,T)}return null}function z(m,f,g,T){for(var A=null,R=null,O=f,M=f=0,we=null;O!==null&&M<g.length;M++){O.index>M?(we=O,O=null):we=O.sibling;var J=v(m,O,g[M],T);if(J===null){O===null&&(O=we);break}e&&O&&J.alternate===null&&n(m,O),f=s(J,f,M),R===null?A=J:R.sibling=J,R=J,O=we}if(M===g.length)return t(m,O),ie&&ot(m,M),A;if(O===null){for(;M<g.length;M++)O=b(m,g[M],T),O!==null&&(f=s(O,f,M),R===null?A=O:R.sibling=O,R=O);return ie&&ot(m,M),A}for(O=r(m,O);M<g.length;M++)we=C(O,m,M,g[M],T),we!==null&&(e&&we.alternate!==null&&O.delete(we.key===null?M:we.key),f=s(we,f,M),R===null?A=we:R.sibling=we,R=we);return e&&O.forEach(function(Zn){return n(m,Zn)}),ie&&ot(m,M),A}function L(m,f,g,T){var A=B(g);if(typeof A!="function")throw Error(c(150));if(g=A.call(g),g==null)throw Error(c(151));for(var R=A=null,O=f,M=f=0,we=null,J=g.next();O!==null&&!J.done;M++,J=g.next()){O.index>M?(we=O,O=null):we=O.sibling;var Zn=v(m,O,J.value,T);if(Zn===null){O===null&&(O=we);break}e&&O&&Zn.alternate===null&&n(m,O),f=s(Zn,f,M),R===null?A=Zn:R.sibling=Zn,R=Zn,O=we}if(J.done)return t(m,O),ie&&ot(m,M),A;if(O===null){for(;!J.done;M++,J=g.next())J=b(m,J.value,T),J!==null&&(f=s(J,f,M),R===null?A=J:R.sibling=J,R=J);return ie&&ot(m,M),A}for(O=r(m,O);!J.done;M++,J=g.next())J=C(O,m,M,J.value,T),J!==null&&(e&&J.alternate!==null&&O.delete(J.key===null?M:J.key),f=s(J,f,M),R===null?A=J:R.sibling=J,R=J);return e&&O.forEach(function(Xd){return n(m,Xd)}),ie&&ot(m,M),A}function fe(m,f,g,T){if(typeof g=="object"&&g!==null&&g.type===_e&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:e:{for(var A=g.key,R=f;R!==null;){if(R.key===A){if(A=g.type,A===_e){if(R.tag===7){t(m,R.sibling),f=o(R,g.props.children),f.return=m,m=f;break e}}else if(R.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ze&&fl(A)===R.type){t(m,R.sibling),f=o(R,g.props),f.ref=ur(m,R,g),f.return=m,m=f;break e}t(m,R);break}else n(m,R);R=R.sibling}g.type===_e?(f=ft(g.props.children,m.mode,T,g.key),f.return=m,m=f):(T=jo(g.type,g.key,g.props,null,m.mode,T),T.ref=ur(m,f,g),T.return=m,m=T)}return i(m);case je:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){t(m,f.sibling),f=o(f,g.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Ti(g,m.mode,T),f.return=m,m=f}return i(m);case ze:return R=g._init,fe(m,f,R(g._payload),T)}if(Bt(g))return z(m,f,g,T);if(B(g))return L(m,f,g,T);to(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(t(m,f.sibling),f=o(f,g),f.return=m,m=f):(t(m,f),f=Si(g,m.mode,T),f.return=m,m=f),i(m)):t(m,f)}return fe}var Pt=hl(!0),pl=hl(!1),ro=Mn(null),oo=null,_t=null,As=null;function Ds(){As=_t=oo=null}function Rs(e){var n=ro.current;re(ro),e._currentValue=n}function Os(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function zt(e,n){oo=e,As=_t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(De=!0),e.firstContext=null)}function Ye(e){var n=e._currentValue;if(As!==e)if(e={context:e,memoizedValue:n,next:null},_t===null){if(oo===null)throw Error(c(308));_t=e,oo.dependencies={lanes:0,firstContext:e}}else _t=_t.next=e;return n}var st=null;function Is(e){st===null?st=[e]:st.push(e)}function ml(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Is(n)):(t.next=o.next,o.next=t),n.interleaved=t,En(e,r)}function En(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Un=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function $n(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,En(e,t)}return o=r.interleaved,o===null?(n.next=n,Is(r)):(n.next=o.next,o.next=n),r.interleaved=n,En(e,t)}function so(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xo(e,t)}}function yl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?o=s=i:s=s.next=i,t=t.next}while(t!==null);s===null?o=s=n:s=s.next=n}else o=s=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function io(e,n,t,r){var o=e.updateQueue;Un=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var d=u,y=d.next;d.next=null,i===null?s=y:i.next=y,i=d;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==i&&(u===null?x.firstBaseUpdate=y:u.next=y,x.lastBaseUpdate=d))}if(s!==null){var b=o.baseState;i=0,x=y=d=null,u=s;do{var v=u.lane,C=u.eventTime;if((r&v)===v){x!==null&&(x=x.next={eventTime:C,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var z=e,L=u;switch(v=n,C=t,L.tag){case 1:if(z=L.payload,typeof z=="function"){b=z.call(C,b,v);break e}b=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=L.payload,v=typeof z=="function"?z.call(C,b,v):z,v==null)break e;b=_({},b,v);break e;case 2:Un=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[u]:v.push(u))}else C={eventTime:C,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(y=x=C,d=b):x=x.next=C,i|=v;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;v=u,u=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(x===null&&(d=b),o.baseState=d,o.firstBaseUpdate=y,o.lastBaseUpdate=x,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else s===null&&(o.shared.lanes=0);lt|=i,e.lanes=i,e.memoizedState=b}}function wl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(c(191,o));o.call(r)}}}var cr={},gn=Mn(cr),dr=Mn(cr),fr=Mn(cr);function it(e){if(e===cr)throw Error(c(174));return e}function Fs(e,n){switch(ne(fr,n),ne(dr,e),ne(gn,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Mo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Mo(n,e)}re(gn),ne(gn,n)}function Lt(){re(gn),re(dr),re(fr)}function vl(e){it(fr.current);var n=it(gn.current),t=Mo(n,e.type);n!==t&&(ne(dr,e),ne(gn,t))}function Ms(e){dr.current===e&&(re(gn),re(dr))}var ae=Mn(0);function ao(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hs=[];function Ws(){for(var e=0;e<Hs.length;e++)Hs[e]._workInProgressVersionPrimary=null;Hs.length=0}var lo=be.ReactCurrentDispatcher,Us=be.ReactCurrentBatchConfig,at=0,le=null,pe=null,ge=null,uo=!1,hr=!1,pr=0,kd=0;function Te(){throw Error(c(321))}function $s(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function Ks(e,n,t,r,o,s){if(at=s,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,lo.current=e===null||e.memoizedState===null?Td:Nd,e=t(r,o),hr){s=0;do{if(hr=!1,pr=0,25<=s)throw Error(c(301));s+=1,ge=pe=null,n.updateQueue=null,lo.current=Ed,e=t(r,o)}while(hr)}if(lo.current=ho,n=pe!==null&&pe.next!==null,at=0,ge=pe=le=null,uo=!1,n)throw Error(c(300));return e}function Gs(){var e=pr!==0;return pr=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?le.memoizedState=ge=e:ge=ge.next=e,ge}function Je(){if(pe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=ge===null?le.memoizedState:ge.next;if(n!==null)ge=n,pe=e;else{if(e===null)throw Error(c(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?le.memoizedState=ge=e:ge=ge.next=e}return ge}function mr(e,n){return typeof n=="function"?n(e):n}function Vs(e){var n=Je(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=pe,o=r.baseQueue,s=t.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,t.pending=null}if(o!==null){s=o.next,r=r.baseState;var u=i=null,d=null,y=s;do{var x=y.lane;if((at&x)===x)d!==null&&(d=d.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var b={lane:x,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};d===null?(u=d=b,i=r):d=d.next=b,le.lanes|=x,lt|=x}y=y.next}while(y!==null&&y!==s);d===null?i=r:d.next=u,on(r,n.memoizedState)||(De=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do s=o.lane,le.lanes|=s,lt|=s,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Qs(e){var n=Je(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,s=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);on(s,n.memoizedState)||(De=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function kl(){}function xl(e,n){var t=le,r=Je(),o=n(),s=!on(r.memoizedState,o);if(s&&(r.memoizedState=o,De=!0),r=r.queue,Ys(Tl.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,gr(9,Sl.bind(null,t,r,o,n),void 0,null),ye===null)throw Error(c(349));(at&30)!==0||bl(t,n,o)}return o}function bl(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sl(e,n,t,r){n.value=t,n.getSnapshot=r,Nl(n)&&El(e)}function Tl(e,n,t){return t(function(){Nl(n)&&El(e)})}function Nl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function El(e){var n=En(e,1);n!==null&&cn(n,e,1,-1)}function jl(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},n.queue=e,e=e.dispatch=Sd.bind(null,le,e),[n.memoizedState,e]}function gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Cl(){return Je().memoizedState}function co(e,n,t,r){var o=yn();le.flags|=e,o.memoizedState=gr(1|n,t,void 0,r===void 0?null:r)}function fo(e,n,t,r){var o=Je();r=r===void 0?null:r;var s=void 0;if(pe!==null){var i=pe.memoizedState;if(s=i.destroy,r!==null&&$s(r,i.deps)){o.memoizedState=gr(n,t,s,r);return}}le.flags|=e,o.memoizedState=gr(1|n,t,s,r)}function Pl(e,n){return co(8390656,8,e,n)}function Ys(e,n){return fo(2048,8,e,n)}function _l(e,n){return fo(4,2,e,n)}function zl(e,n){return fo(4,4,e,n)}function Ll(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Al(e,n,t){return t=t!=null?t.concat([e]):null,fo(4,4,Ll.bind(null,n,e),t)}function Js(){}function Dl(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&$s(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Rl(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&$s(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ol(e,n,t){return(at&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=t):(on(t,n)||(t=fa(),le.lanes|=t,lt|=t,e.baseState=!0),n)}function xd(e,n){var t=X;X=t!==0&&4>t?t:4,e(!0);var r=Us.transition;Us.transition={};try{e(!1),n()}finally{X=t,Us.transition=r}}function Il(){return Je().memoizedState}function bd(e,n,t){var r=Qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Bl(e))Fl(n,t);else if(t=ml(e,n,t,r),t!==null){var o=Pe();cn(t,e,r,o),Ml(t,n,r)}}function Sd(e,n,t){var r=Qn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))Fl(n,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var i=n.lastRenderedState,u=s(i,t);if(o.hasEagerState=!0,o.eagerState=u,on(u,i)){var d=n.interleaved;d===null?(o.next=o,Is(n)):(o.next=d.next,d.next=o),n.interleaved=o;return}}catch{}finally{}t=ml(e,n,o,r),t!==null&&(o=Pe(),cn(t,e,r,o),Ml(t,n,r))}}function Bl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Fl(e,n){hr=uo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ml(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xo(e,t)}}var ho={readContext:Ye,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Td={readContext:Ye,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:Ye,useEffect:Pl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,co(4194308,4,Ll.bind(null,n,e),t)},useLayoutEffect:function(e,n){return co(4194308,4,e,n)},useInsertionEffect:function(e,n){return co(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=yn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=bd.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:jl,useDebugValue:Js,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=jl(!1),n=e[0];return e=xd.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=le,o=yn();if(ie){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),ye===null)throw Error(c(349));(at&30)!==0||bl(r,n,t)}o.memoizedState=t;var s={value:t,getSnapshot:n};return o.queue=s,Pl(Tl.bind(null,r,s,e),[e]),r.flags|=2048,gr(9,Sl.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=yn(),n=ye.identifierPrefix;if(ie){var t=Nn,r=Tn;t=(r&~(1<<32-rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=pr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=kd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Nd={readContext:Ye,useCallback:Dl,useContext:Ye,useEffect:Ys,useImperativeHandle:Al,useInsertionEffect:_l,useLayoutEffect:zl,useMemo:Rl,useReducer:Vs,useRef:Cl,useState:function(){return Vs(mr)},useDebugValue:Js,useDeferredValue:function(e){var n=Je();return Ol(n,pe.memoizedState,e)},useTransition:function(){var e=Vs(mr)[0],n=Je().memoizedState;return[e,n]},useMutableSource:kl,useSyncExternalStore:xl,useId:Il,unstable_isNewReconciler:!1},Ed={readContext:Ye,useCallback:Dl,useContext:Ye,useEffect:Ys,useImperativeHandle:Al,useInsertionEffect:_l,useLayoutEffect:zl,useMemo:Rl,useReducer:Qs,useRef:Cl,useState:function(){return Qs(mr)},useDebugValue:Js,useDeferredValue:function(e){var n=Je();return pe===null?n.memoizedState=e:Ol(n,pe.memoizedState,e)},useTransition:function(){var e=Qs(mr)[0],n=Je().memoizedState;return[e,n]},useMutableSource:kl,useSyncExternalStore:xl,useId:Il,unstable_isNewReconciler:!1};function an(e,n){if(e&&e.defaultProps){n=_({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Zs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:_({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var po={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Pe(),o=Qn(e),s=jn(r,o);s.payload=n,t!=null&&(s.callback=t),n=$n(e,s,o),n!==null&&(cn(n,e,o,r),so(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Pe(),o=Qn(e),s=jn(r,o);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=$n(e,s,o),n!==null&&(cn(n,e,o,r),so(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Pe(),r=Qn(e),o=jn(t,r);o.tag=2,n!=null&&(o.callback=n),n=$n(e,o,r),n!==null&&(cn(n,e,r,t),so(n,e,r))}};function Hl(e,n,t,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):n.prototype&&n.prototype.isPureReactComponent?!tr(t,r)||!tr(o,s):!0}function Wl(e,n,t){var r=!1,o=Hn,s=n.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(o=Ae(n)?tt:Se.current,r=n.contextTypes,s=(r=r!=null)?Nt(e,o):Hn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=po,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),n}function Ul(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&po.enqueueReplaceState(n,n.state,null)}function Xs(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Bs(e);var s=n.contextType;typeof s=="object"&&s!==null?o.context=Ye(s):(s=Ae(n)?tt:Se.current,o.context=Nt(e,s)),o.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Zs(e,n,s,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&po.enqueueReplaceState(o,o.state,null),io(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function At(e,n){try{var t="",r=n;do t+=Q(r),r=r.return;while(r);var o=t}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:o,digest:null}}function qs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ei(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var jd=typeof WeakMap=="function"?WeakMap:Map;function $l(e,n,t){t=jn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){xo||(xo=!0,mi=r),ei(e,n)},t}function Kl(e,n,t){t=jn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){ei(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ei(e,n),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Gl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new jd;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Hd.bind(null,e,n,t),n.then(e,e))}function Vl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ql(e,n,t,r,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=jn(-1,1),n.tag=2,$n(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Cd=be.ReactCurrentOwner,De=!1;function Ce(e,n,t,r){n.child=e===null?pl(n,null,t,r):Pt(n,e.child,t,r)}function Yl(e,n,t,r,o){t=t.render;var s=n.ref;return zt(n,o),r=Ks(e,n,t,r,s,o),t=Gs(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Cn(e,n,o)):(ie&&t&&Cs(n),n.flags|=1,Ce(e,n,r,o),n.child)}function Jl(e,n,t,r,o){if(e===null){var s=t.type;return typeof s=="function"&&!bi(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Zl(e,n,s,r,o)):(e=jo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,(e.lanes&o)===0){var i=s.memoizedProps;if(t=t.compare,t=t!==null?t:tr,t(i,r)&&e.ref===n.ref)return Cn(e,n,o)}return n.flags|=1,e=Jn(s,r),e.ref=n.ref,e.return=n,n.child=e}function Zl(e,n,t,r,o){if(e!==null){var s=e.memoizedProps;if(tr(s,r)&&e.ref===n.ref)if(De=!1,n.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(De=!0);else return n.lanes=e.lanes,Cn(e,n,o)}return ni(e,n,t,r,o)}function Xl(e,n,t){var r=n.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Rt,$e),$e|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(Rt,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,ne(Rt,$e),$e|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,ne(Rt,$e),$e|=r;return Ce(e,n,o,t),n.child}function ql(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ni(e,n,t,r,o){var s=Ae(t)?tt:Se.current;return s=Nt(n,s),zt(n,o),t=Ks(e,n,t,r,s,o),r=Gs(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Cn(e,n,o)):(ie&&r&&Cs(n),n.flags|=1,Ce(e,n,t,o),n.child)}function eu(e,n,t,r,o){if(Ae(t)){var s=!0;Zr(n)}else s=!1;if(zt(n,o),n.stateNode===null)go(e,n),Wl(n,t,r),Xs(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,u=n.memoizedProps;i.props=u;var d=i.context,y=t.contextType;typeof y=="object"&&y!==null?y=Ye(y):(y=Ae(t)?tt:Se.current,y=Nt(n,y));var x=t.getDerivedStateFromProps,b=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function";b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||d!==y)&&Ul(n,i,r,y),Un=!1;var v=n.memoizedState;i.state=v,io(n,r,i,o),d=n.memoizedState,u!==r||v!==d||Le.current||Un?(typeof x=="function"&&(Zs(n,t,x,r),d=n.memoizedState),(u=Un||Hl(n,t,u,r,v,d,y))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),i.props=r,i.state=d,i.context=y,r=u):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,gl(e,n),u=n.memoizedProps,y=n.type===n.elementType?u:an(n.type,u),i.props=y,b=n.pendingProps,v=i.context,d=t.contextType,typeof d=="object"&&d!==null?d=Ye(d):(d=Ae(t)?tt:Se.current,d=Nt(n,d));var C=t.getDerivedStateFromProps;(x=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==b||v!==d)&&Ul(n,i,r,d),Un=!1,v=n.memoizedState,i.state=v,io(n,r,i,o);var z=n.memoizedState;u!==b||v!==z||Le.current||Un?(typeof C=="function"&&(Zs(n,t,C,r),z=n.memoizedState),(y=Un||Hl(n,t,y,r,v,z,d)||!1)?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,z,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,z,d)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=z),i.props=r,i.state=z,i.context=d,r=y):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return ti(e,n,t,r,s,o)}function ti(e,n,t,r,o,s){ql(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&sl(n,t,!1),Cn(e,n,s);r=n.stateNode,Cd.current=n;var u=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=Pt(n,e.child,null,s),n.child=Pt(n,null,u,s)):Ce(e,n,u,s),n.memoizedState=r.state,o&&sl(n,t,!0),n.child}function nu(e){var n=e.stateNode;n.pendingContext?rl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&rl(e,n.context,!1),Fs(e,n.containerInfo)}function tu(e,n,t,r,o){return Ct(),Ls(o),n.flags|=256,Ce(e,n,t,r),n.child}var ri={dehydrated:null,treeContext:null,retryLane:0};function oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ru(e,n,t){var r=n.pendingProps,o=ae.current,s=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ae,o&1),e===null)return zs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(i=r.children,e=r.fallback,s?(r=n.mode,s=n.child,i={mode:"hidden",children:i},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Co(i,r,0,null),e=ft(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=oi(t),n.memoizedState=ri,e):si(n,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return Pd(e,n,i,r,u,o,t);if(s){s=r.fallback,i=n.mode,o=e.child,u=o.sibling;var d={mode:"hidden",children:r.children};return(i&1)===0&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=Jn(o,d),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?s=Jn(u,s):(s=ft(s,i,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,i=e.child.memoizedState,i=i===null?oi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~t,n.memoizedState=ri,r}return s=e.child,e=s.sibling,r=Jn(s,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function si(e,n){return n=Co({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mo(e,n,t,r){return r!==null&&Ls(r),Pt(n,e.child,null,t),e=si(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pd(e,n,t,r,o,s,i){if(t)return n.flags&256?(n.flags&=-257,r=qs(Error(c(422))),mo(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,o=n.mode,r=Co({mode:"visible",children:r.children},o,0,null),s=ft(s,o,i,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,(n.mode&1)!==0&&Pt(n,e.child,null,i),n.child.memoizedState=oi(i),n.memoizedState=ri,s);if((n.mode&1)===0)return mo(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(c(419)),r=qs(s,r,void 0),mo(e,n,i,r)}if(u=(i&e.childLanes)!==0,De||u){if(r=ye,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,En(e,o),cn(r,e,o,-1))}return xi(),r=qs(Error(c(421))),mo(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Wd.bind(null,e),o._reactRetry=n,null):(e=s.treeContext,Ue=Fn(o.nextSibling),We=n,ie=!0,sn=null,e!==null&&(Ve[Qe++]=Tn,Ve[Qe++]=Nn,Ve[Qe++]=rt,Tn=e.id,Nn=e.overflow,rt=n),n=si(n,r.children),n.flags|=4096,n)}function ou(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Os(e.return,n,t)}function ii(e,n,t,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=o)}function su(e,n,t){var r=n.pendingProps,o=r.revealOrder,s=r.tail;if(Ce(e,n,r.children,t),r=ae.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,t,n);else if(e.tag===19)ou(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ae,r),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&ao(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ii(n,!1,o,t,s);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&ao(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ii(n,!0,t,null,s);break;case"together":ii(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function go(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),lt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _d(e,n,t){switch(n.tag){case 3:nu(n),Ct();break;case 5:vl(n);break;case 1:Ae(n.type)&&Zr(n);break;case 4:Fs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ne(ro,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ne(ae,ae.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ru(e,n,t):(ne(ae,ae.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);ne(ae,ae.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return su(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ae,ae.current),r)break;return null;case 22:case 23:return n.lanes=0,Xl(e,n,t)}return Cn(e,n,t)}var iu,ai,au,lu;iu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ai=function(){},au=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,it(gn.current);var s=null;switch(t){case"input":o=Oo(e,o),r=Oo(e,r),s=[];break;case"select":o=_({},o,{value:void 0}),r=_({},r,{value:void 0}),s=[];break;case"textarea":o=Fo(e,o),r=Fo(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}Ho(t,r);var i;t=null;for(y in o)if(!r.hasOwnProperty(y)&&o.hasOwnProperty(y)&&o[y]!=null)if(y==="style"){var u=o[y];for(i in u)u.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(N.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in r){var d=r[y];if(u=o!=null?o[y]:void 0,r.hasOwnProperty(y)&&d!==u&&(d!=null||u!=null))if(y==="style")if(u){for(i in u)!u.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in d)d.hasOwnProperty(i)&&u[i]!==d[i]&&(t||(t={}),t[i]=d[i])}else t||(s||(s=[]),s.push(y,t)),t=d;else y==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(s=s||[]).push(y,d)):y==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(y,""+d):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(N.hasOwnProperty(y)?(d!=null&&y==="onScroll"&&te("scroll",e),s||u===d||(s=[])):(s=s||[]).push(y,d))}t&&(s=s||[]).push("style",t);var y=s;(n.updateQueue=y)&&(n.flags|=4)}},lu=function(e,n,t,r){t!==r&&(n.flags|=4)};function yr(e,n){if(!ie)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function zd(e,n,t){var r=n.pendingProps;switch(Ps(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return Ae(n.type)&&Jr(),Ne(n),null;case 3:return r=n.stateNode,Lt(),re(Le),re(Se),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sn!==null&&(wi(sn),sn=null))),ai(e,n),Ne(n),null;case 5:Ms(n);var o=it(fr.current);if(t=n.type,e!==null&&n.stateNode!=null)au(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(c(166));return Ne(n),null}if(e=it(gn.current),no(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[mn]=n,r[ar]=s,e=(n.mode&1)!==0,t){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<or.length;o++)te(or[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Wi(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Ki(r,s),te("invalid",r)}Ho(t,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&Vr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Vr(r.textContent,u,e),o=["children",""+u]):N.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&te("scroll",r)}switch(t){case"input":Tr(r),$i(r,s,!0);break;case"textarea":Tr(r),Vi(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qr)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qi(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[mn]=n,e[ar]=r,iu(e,n,!1,!1),n.stateNode=e;e:{switch(i=Wo(t,r),t){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<or.length;o++)te(or[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":Wi(e,r),o=Oo(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=_({},r,{value:void 0}),te("invalid",e);break;case"textarea":Ki(e,r),o=Fo(e,r),te("invalid",e);break;default:o=r}Ho(t,o),u=o;for(s in u)if(u.hasOwnProperty(s)){var d=u[s];s==="style"?Zi(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Yi(e,d)):s==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Ft(e,d):typeof d=="number"&&Ft(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(N.hasOwnProperty(s)?d!=null&&s==="onScroll"&&te("scroll",e):d!=null&&en(e,s,d,i))}switch(t){case"input":Tr(e),$i(e,r,!1);break;case"textarea":Tr(e),Vi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Z(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ht(e,!!r.multiple,s,!1):r.defaultValue!=null&&ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ne(n),null;case 6:if(e&&n.stateNode!=null)lu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(t=it(fr.current),it(gn.current),no(n)){if(r=n.stateNode,t=n.memoizedProps,r[mn]=n,(s=r.nodeValue!==t)&&(e=We,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[mn]=n,n.stateNode=r}return Ne(n),null;case 13:if(re(ae),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ue!==null&&(n.mode&1)!==0&&(n.flags&128)===0)dl(),Ct(),n.flags|=98560,s=!1;else if(s=no(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[mn]=n}else Ct(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ne(n),s=!1}else sn!==null&&(wi(sn),sn=null),s=!0;if(!s)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ae.current&1)!==0?me===0&&(me=3):xi())),n.updateQueue!==null&&(n.flags|=4),Ne(n),null);case 4:return Lt(),ai(e,n),e===null&&sr(n.stateNode.containerInfo),Ne(n),null;case 10:return Rs(n.type._context),Ne(n),null;case 17:return Ae(n.type)&&Jr(),Ne(n),null;case 19:if(re(ae),s=n.memoizedState,s===null)return Ne(n),null;if(r=(n.flags&128)!==0,i=s.rendering,i===null)if(r)yr(s,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=ao(e),i!==null){for(n.flags|=128,yr(s,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(ae,ae.current&1|2),n.child}e=e.sibling}s.tail!==null&&de()>Ot&&(n.flags|=128,r=!0,yr(s,!1),n.lanes=4194304)}else{if(!r)if(e=ao(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!ie)return Ne(n),null}else 2*de()-s.renderingStartTime>Ot&&t!==1073741824&&(n.flags|=128,r=!0,yr(s,!1),n.lanes=4194304);s.isBackwards?(i.sibling=n.child,n.child=i):(t=s.last,t!==null?t.sibling=i:n.child=i,s.last=i)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=de(),n.sibling=null,t=ae.current,ne(ae,r?t&1|2:t&1),n):(Ne(n),null);case 22:case 23:return ki(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?($e&1073741824)!==0&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),null;case 24:return null;case 25:return null}throw Error(c(156,n.tag))}function Ld(e,n){switch(Ps(n),n.tag){case 1:return Ae(n.type)&&Jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Lt(),re(Le),re(Se),Ws(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Ms(n),null;case 13:if(re(ae),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return re(ae),null;case 4:return Lt(),null;case 10:return Rs(n.type._context),null;case 22:case 23:return ki(),null;case 24:return null;default:return null}}var yo=!1,Ee=!1,Ad=typeof WeakSet=="function"?WeakSet:Set,P=null;function Dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ce(e,n,r)}else t.current=null}function li(e,n,t){try{t()}catch(r){ce(e,n,r)}}var uu=!1;function Dd(e,n){if(ks=Or,e=Ha(),fs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var i=0,u=-1,d=-1,y=0,x=0,b=e,v=null;n:for(;;){for(var C;b!==t||o!==0&&b.nodeType!==3||(u=i+o),b!==s||r!==0&&b.nodeType!==3||(d=i+r),b.nodeType===3&&(i+=b.nodeValue.length),(C=b.firstChild)!==null;)v=b,b=C;for(;;){if(b===e)break n;if(v===t&&++y===o&&(u=i),v===s&&++x===r&&(d=i),(C=b.nextSibling)!==null)break;b=v,v=b.parentNode}b=C}t=u===-1||d===-1?null:{start:u,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(xs={focusedElem:e,selectionRange:t},Or=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var z=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var L=z.memoizedProps,fe=z.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?L:an(n.type,L),fe);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(T){ce(n,n.return,T)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return z=uu,uu=!1,z}function wr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&li(n,t,s)}o=o.next}while(o!==r)}}function wo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ui(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function cu(e){var n=e.alternate;n!==null&&(e.alternate=null,cu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[mn],delete n[ar],delete n[Ns],delete n[gd],delete n[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function du(e){return e.tag===5||e.tag===3||e.tag===4}function fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ci(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(ci(e,n,t),e=e.sibling;e!==null;)ci(e,n,t),e=e.sibling}function di(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(di(e,n,t),e=e.sibling;e!==null;)di(e,n,t),e=e.sibling}var ve=null,ln=!1;function Kn(e,n,t){for(t=t.child;t!==null;)hu(e,n,t),t=t.sibling}function hu(e,n,t){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(_r,t)}catch{}switch(t.tag){case 5:Ee||Dt(t,n);case 6:var r=ve,o=ln;ve=null,Kn(e,n,t),ve=r,ln=o,ve!==null&&(ln?(e=ve,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ve.removeChild(t.stateNode));break;case 18:ve!==null&&(ln?(e=ve,t=t.stateNode,e.nodeType===8?Ts(e.parentNode,t):e.nodeType===1&&Ts(e,t),Jt(e)):Ts(ve,t.stateNode));break;case 4:r=ve,o=ln,ve=t.stateNode.containerInfo,ln=!0,Kn(e,n,t),ve=r,ln=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&((s&2)!==0||(s&4)!==0)&&li(t,n,i),o=o.next}while(o!==r)}Kn(e,n,t);break;case 1:if(!Ee&&(Dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){ce(t,n,u)}Kn(e,n,t);break;case 21:Kn(e,n,t);break;case 22:t.mode&1?(Ee=(r=Ee)||t.memoizedState!==null,Kn(e,n,t),Ee=r):Kn(e,n,t);break;default:Kn(e,n,t)}}function pu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ad),n.forEach(function(r){var o=Ud.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function un(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var s=e,i=n,u=i;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,ln=!1;break e;case 3:ve=u.stateNode.containerInfo,ln=!0;break e;case 4:ve=u.stateNode.containerInfo,ln=!0;break e}u=u.return}if(ve===null)throw Error(c(160));hu(s,i,o),ve=null,ln=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(y){ce(o,n,y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mu(n,e),n=n.sibling}function mu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(n,e),wn(e),r&4){try{wr(3,e,e.return),wo(3,e)}catch(L){ce(e,e.return,L)}try{wr(5,e,e.return)}catch(L){ce(e,e.return,L)}}break;case 1:un(n,e),wn(e),r&512&&t!==null&&Dt(t,t.return);break;case 5:if(un(n,e),wn(e),r&512&&t!==null&&Dt(t,t.return),e.flags&32){var o=e.stateNode;try{Ft(o,"")}catch(L){ce(e,e.return,L)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=t!==null?t.memoizedProps:s,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&Ui(o,s),Wo(u,i);var y=Wo(u,s);for(i=0;i<d.length;i+=2){var x=d[i],b=d[i+1];x==="style"?Zi(o,b):x==="dangerouslySetInnerHTML"?Yi(o,b):x==="children"?Ft(o,b):en(o,x,b,y)}switch(u){case"input":Io(o,s);break;case"textarea":Gi(o,s);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?ht(o,!!s.multiple,C,!1):v!==!!s.multiple&&(s.defaultValue!=null?ht(o,!!s.multiple,s.defaultValue,!0):ht(o,!!s.multiple,s.multiple?[]:"",!1))}o[ar]=s}catch(L){ce(e,e.return,L)}}break;case 6:if(un(n,e),wn(e),r&4){if(e.stateNode===null)throw Error(c(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(L){ce(e,e.return,L)}}break;case 3:if(un(n,e),wn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(L){ce(e,e.return,L)}break;case 4:un(n,e),wn(e);break;case 13:un(n,e),wn(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(pi=de())),r&4&&pu(e);break;case 22:if(x=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(y=Ee)||x,un(n,e),Ee=y):un(n,e),wn(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!x&&(e.mode&1)!==0)for(P=e,x=e.child;x!==null;){for(b=P=x;P!==null;){switch(v=P,C=v.child,v.tag){case 0:case 11:case 14:case 15:wr(4,v,v.return);break;case 1:Dt(v,v.return);var z=v.stateNode;if(typeof z.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,z.props=n.memoizedProps,z.state=n.memoizedState,z.componentWillUnmount()}catch(L){ce(r,t,L)}}break;case 5:Dt(v,v.return);break;case 22:if(v.memoizedState!==null){wu(b);continue}}C!==null?(C.return=v,P=C):wu(b)}x=x.sibling}e:for(x=null,b=e;;){if(b.tag===5){if(x===null){x=b;try{o=b.stateNode,y?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=b.stateNode,d=b.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Ji("display",i))}catch(L){ce(e,e.return,L)}}}else if(b.tag===6){if(x===null)try{b.stateNode.nodeValue=y?"":b.memoizedProps}catch(L){ce(e,e.return,L)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;x===b&&(x=null),b=b.return}x===b&&(x=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:un(n,e),wn(e),r&4&&pu(e);break;case 21:break;default:un(n,e),wn(e)}}function wn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(du(t)){var r=t;break e}t=t.return}throw Error(c(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ft(o,""),r.flags&=-33);var s=fu(e);di(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=fu(e);ci(e,u,i);break;default:throw Error(c(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Rd(e,n,t){P=e,gu(e)}function gu(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var o=P,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||yo;if(!i){var u=o.alternate,d=u!==null&&u.memoizedState!==null||Ee;u=yo;var y=Ee;if(yo=i,(Ee=d)&&!y)for(P=o;P!==null;)i=P,d=i.child,i.tag===22&&i.memoizedState!==null?vu(o):d!==null?(d.return=i,P=d):vu(o);for(;s!==null;)P=s,gu(s),s=s.sibling;P=o,yo=u,Ee=y}yu(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,P=s):yu(e)}}function yu(e){for(;P!==null;){var n=P;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ee||wo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ee)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:an(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&wl(n,s,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}wl(n,i,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var y=n.alternate;if(y!==null){var x=y.memoizedState;if(x!==null){var b=x.dehydrated;b!==null&&Jt(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ee||n.flags&512&&ui(n)}catch(v){ce(n,n.return,v)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function wu(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function vu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wo(4,n)}catch(d){ce(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(d){ce(n,o,d)}}var s=n.return;try{ui(n)}catch(d){ce(n,s,d)}break;case 5:var i=n.return;try{ui(n)}catch(d){ce(n,i,d)}}}catch(d){ce(n,n.return,d)}if(n===e){P=null;break}var u=n.sibling;if(u!==null){u.return=n.return,P=u;break}P=n.return}}var Od=Math.ceil,vo=be.ReactCurrentDispatcher,fi=be.ReactCurrentOwner,Ze=be.ReactCurrentBatchConfig,G=0,ye=null,he=null,ke=0,$e=0,Rt=Mn(0),me=0,vr=null,lt=0,ko=0,hi=0,kr=null,Re=null,pi=0,Ot=1/0,Pn=null,xo=!1,mi=null,Gn=null,bo=!1,Vn=null,So=0,xr=0,gi=null,To=-1,No=0;function Pe(){return(G&6)!==0?de():To!==-1?To:To=de()}function Qn(e){return(e.mode&1)===0?1:(G&2)!==0&&ke!==0?ke&-ke:vd.transition!==null?(No===0&&(No=fa()),No):(e=X,e!==0||(e=window.event,e=e===void 0?16:xa(e.type)),e)}function cn(e,n,t,r){if(50<xr)throw xr=0,gi=null,Error(c(185));Kt(e,t,r),((G&2)===0||e!==ye)&&(e===ye&&((G&2)===0&&(ko|=t),me===4&&Yn(e,ke)),Oe(e,r),t===1&&G===0&&(n.mode&1)===0&&(Ot=de()+500,Xr&&Wn()))}function Oe(e,n){var t=e.callbackNode;vc(e,n);var r=Ar(e,e===ye?ke:0);if(r===0)t!==null&&ua(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ua(t),n===1)e.tag===0?wd(xu.bind(null,e)):il(xu.bind(null,e)),pd(function(){(G&6)===0&&Wn()}),t=null;else{switch(ha(r)){case 1:t=Yo;break;case 4:t=ca;break;case 16:t=Pr;break;case 536870912:t=da;break;default:t=Pr}t=Pu(t,ku.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ku(e,n){if(To=-1,No=0,(G&6)!==0)throw Error(c(327));var t=e.callbackNode;if(It()&&e.callbackNode!==t)return null;var r=Ar(e,e===ye?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Eo(e,r);else{n=r;var o=G;G|=2;var s=Su();(ye!==e||ke!==n)&&(Pn=null,Ot=de()+500,ct(e,n));do try{Fd();break}catch(u){bu(e,u)}while(!0);Ds(),vo.current=s,G=o,he!==null?n=0:(ye=null,ke=0,n=me)}if(n!==0){if(n===2&&(o=Jo(e),o!==0&&(r=o,n=yi(e,o))),n===1)throw t=vr,ct(e,0),Yn(e,r),Oe(e,de()),t;if(n===6)Yn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Id(o)&&(n=Eo(e,r),n===2&&(s=Jo(e),s!==0&&(r=s,n=yi(e,s))),n===1))throw t=vr,ct(e,0),Yn(e,r),Oe(e,de()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(c(345));case 2:dt(e,Re,Pn);break;case 3:if(Yn(e,r),(r&130023424)===r&&(n=pi+500-de(),10<n)){if(Ar(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ss(dt.bind(null,e,Re,Pn),n);break}dt(e,Re,Pn);break;case 4:if(Yn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-rn(r);s=1<<i,i=n[i],i>o&&(o=i),r&=~s}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Od(r/1960))-r,10<r){e.timeoutHandle=Ss(dt.bind(null,e,Re,Pn),r);break}dt(e,Re,Pn);break;case 5:dt(e,Re,Pn);break;default:throw Error(c(329))}}}return Oe(e,de()),e.callbackNode===t?ku.bind(null,e):null}function yi(e,n){var t=kr;return e.current.memoizedState.isDehydrated&&(ct(e,n).flags|=256),e=Eo(e,n),e!==2&&(n=Re,Re=t,n!==null&&wi(n)),e}function wi(e){Re===null?Re=e:Re.push.apply(Re,e)}function Id(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],s=o.getSnapshot;o=o.value;try{if(!on(s(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yn(e,n){for(n&=~hi,n&=~ko,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-rn(n),r=1<<t;e[t]=-1,n&=~r}}function xu(e){if((G&6)!==0)throw Error(c(327));It();var n=Ar(e,0);if((n&1)===0)return Oe(e,de()),null;var t=Eo(e,n);if(e.tag!==0&&t===2){var r=Jo(e);r!==0&&(n=r,t=yi(e,r))}if(t===1)throw t=vr,ct(e,0),Yn(e,n),Oe(e,de()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,dt(e,Re,Pn),Oe(e,de()),null}function vi(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(Ot=de()+500,Xr&&Wn())}}function ut(e){Vn!==null&&Vn.tag===0&&(G&6)===0&&It();var n=G;G|=1;var t=Ze.transition,r=X;try{if(Ze.transition=null,X=1,e)return e()}finally{X=r,Ze.transition=t,G=n,(G&6)===0&&Wn()}}function ki(){$e=Rt.current,re(Rt)}function ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hd(t)),he!==null)for(t=he.return;t!==null;){var r=t;switch(Ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:Lt(),re(Le),re(Se),Ws();break;case 5:Ms(r);break;case 4:Lt();break;case 13:re(ae);break;case 19:re(ae);break;case 10:Rs(r.type._context);break;case 22:case 23:ki()}t=t.return}if(ye=e,he=e=Jn(e.current,null),ke=$e=n,me=0,vr=null,hi=ko=lt=0,Re=kr=null,st!==null){for(n=0;n<st.length;n++)if(t=st[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,s=t.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}t.pending=r}st=null}return e}function bu(e,n){do{var t=he;try{if(Ds(),lo.current=ho,uo){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(at=0,ge=pe=le=null,hr=!1,pr=0,fi.current=null,t===null||t.return===null){me=1,vr=n,he=null;break}e:{var s=e,i=t.return,u=t,d=n;if(n=ke,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var y=d,x=u,b=x.tag;if((x.mode&1)===0&&(b===0||b===11||b===15)){var v=x.alternate;v?(x.updateQueue=v.updateQueue,x.memoizedState=v.memoizedState,x.lanes=v.lanes):(x.updateQueue=null,x.memoizedState=null)}var C=Vl(i);if(C!==null){C.flags&=-257,Ql(C,i,u,s,n),C.mode&1&&Gl(s,y,n),n=C,d=y;var z=n.updateQueue;if(z===null){var L=new Set;L.add(d),n.updateQueue=L}else z.add(d);break e}else{if((n&1)===0){Gl(s,y,n),xi();break e}d=Error(c(426))}}else if(ie&&u.mode&1){var fe=Vl(i);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),Ql(fe,i,u,s,n),Ls(At(d,u));break e}}s=d=At(d,u),me!==4&&(me=2),kr===null?kr=[s]:kr.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var m=$l(s,d,n);yl(s,m);break e;case 1:u=d;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gn===null||!Gn.has(g)))){s.flags|=65536,n&=-n,s.lanes|=n;var T=Kl(s,u,n);yl(s,T);break e}}s=s.return}while(s!==null)}Nu(t)}catch(A){n=A,he===t&&t!==null&&(he=t=t.return);continue}break}while(!0)}function Su(){var e=vo.current;return vo.current=ho,e===null?ho:e}function xi(){(me===0||me===3||me===2)&&(me=4),ye===null||(lt&268435455)===0&&(ko&268435455)===0||Yn(ye,ke)}function Eo(e,n){var t=G;G|=2;var r=Su();(ye!==e||ke!==n)&&(Pn=null,ct(e,n));do try{Bd();break}catch(o){bu(e,o)}while(!0);if(Ds(),G=t,vo.current=r,he!==null)throw Error(c(261));return ye=null,ke=0,me}function Bd(){for(;he!==null;)Tu(he)}function Fd(){for(;he!==null&&!cc();)Tu(he)}function Tu(e){var n=Cu(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?Nu(e):he=n,fi.current=null}function Nu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=zd(t,n,$e),t!==null){he=t;return}}else{if(t=Ld(t,n),t!==null){t.flags&=32767,he=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,he=null;return}}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);me===0&&(me=5)}function dt(e,n,t){var r=X,o=Ze.transition;try{Ze.transition=null,X=1,Md(e,n,t,r)}finally{Ze.transition=o,X=r}return null}function Md(e,n,t,r){do It();while(Vn!==null);if((G&6)!==0)throw Error(c(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(kc(e,s),e===ye&&(he=ye=null,ke=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||bo||(bo=!0,Pu(Pr,function(){return It(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=Ze.transition,Ze.transition=null;var i=X;X=1;var u=G;G|=4,fi.current=null,Dd(e,t),mu(t,e),id(xs),Or=!!ks,xs=ks=null,e.current=t,Rd(t),dc(),G=u,X=i,Ze.transition=s}else e.current=t;if(bo&&(bo=!1,Vn=e,So=o),s=e.pendingLanes,s===0&&(Gn=null),pc(t.stateNode),Oe(e,de()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(xo)throw xo=!1,e=mi,mi=null,e;return(So&1)!==0&&e.tag!==0&&It(),s=e.pendingLanes,(s&1)!==0?e===gi?xr++:(xr=0,gi=e):xr=0,Wn(),null}function It(){if(Vn!==null){var e=ha(So),n=Ze.transition,t=X;try{if(Ze.transition=null,X=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,So=0,(G&6)!==0)throw Error(c(331));var o=G;for(G|=4,P=e.current;P!==null;){var s=P,i=s.child;if((P.flags&16)!==0){var u=s.deletions;if(u!==null){for(var d=0;d<u.length;d++){var y=u[d];for(P=y;P!==null;){var x=P;switch(x.tag){case 0:case 11:case 15:wr(8,x,s)}var b=x.child;if(b!==null)b.return=x,P=b;else for(;P!==null;){x=P;var v=x.sibling,C=x.return;if(cu(x),x===y){P=null;break}if(v!==null){v.return=C,P=v;break}P=C}}}var z=s.alternate;if(z!==null){var L=z.child;if(L!==null){z.child=null;do{var fe=L.sibling;L.sibling=null,L=fe}while(L!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&i!==null)i.return=s,P=i;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:wr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var f=e.current;for(P=f;P!==null;){i=P;var g=i.child;if((i.subtreeFlags&2064)!==0&&g!==null)g.return=i,P=g;else e:for(i=f;P!==null;){if(u=P,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:wo(9,u)}}catch(A){ce(u,u.return,A)}if(u===i){P=null;break e}var T=u.sibling;if(T!==null){T.return=u.return,P=T;break e}P=u.return}}if(G=o,Wn(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(_r,e)}catch{}r=!0}return r}finally{X=t,Ze.transition=n}}return!1}function Eu(e,n,t){n=At(t,n),n=$l(e,n,1),e=$n(e,n,1),n=Pe(),e!==null&&(Kt(e,1,n),Oe(e,n))}function ce(e,n,t){if(e.tag===3)Eu(e,e,t);else for(;n!==null;){if(n.tag===3){Eu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=At(t,e),e=Kl(n,e,1),n=$n(n,e,1),e=Pe(),n!==null&&(Kt(n,1,e),Oe(n,e));break}}n=n.return}}function Hd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Pe(),e.pingedLanes|=e.suspendedLanes&t,ye===e&&(ke&t)===t&&(me===4||me===3&&(ke&130023424)===ke&&500>de()-pi?ct(e,0):hi|=t),Oe(e,n)}function ju(e,n){n===0&&((e.mode&1)===0?n=1:(n=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var t=Pe();e=En(e,n),e!==null&&(Kt(e,n,t),Oe(e,t))}function Wd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ju(e,t)}function Ud(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(n),ju(e,t)}var Cu;Cu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Le.current)De=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return De=!1,_d(e,n,t);De=(e.flags&131072)!==0}else De=!1,ie&&(n.flags&1048576)!==0&&al(n,eo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;go(e,n),e=n.pendingProps;var o=Nt(n,Se.current);zt(n,t),o=Ks(null,n,r,e,o,t);var s=Gs();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ae(r)?(s=!0,Zr(n)):s=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Bs(n),o.updater=po,n.stateNode=o,o._reactInternals=n,Xs(n,r,e,t),n=ti(null,n,r,!0,s,t)):(n.tag=0,ie&&s&&Cs(n),Ce(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(go(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Kd(r),e=an(r,e),o){case 0:n=ni(null,n,r,e,t);break e;case 1:n=eu(null,n,r,e,t);break e;case 11:n=Yl(null,n,r,e,t);break e;case 14:n=Jl(null,n,r,an(r.type,e),t);break e}throw Error(c(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),ni(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),eu(e,n,r,o,t);case 3:e:{if(nu(n),e===null)throw Error(c(387));r=n.pendingProps,s=n.memoizedState,o=s.element,gl(e,n),io(n,r,null,t);var i=n.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){o=At(Error(c(423)),n),n=tu(e,n,r,t,o);break e}else if(r!==o){o=At(Error(c(424)),n),n=tu(e,n,r,t,o);break e}else for(Ue=Fn(n.stateNode.containerInfo.firstChild),We=n,ie=!0,sn=null,t=pl(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ct(),r===o){n=Cn(e,n,t);break e}Ce(e,n,r,t)}n=n.child}return n;case 5:return vl(n),e===null&&zs(n),r=n.type,o=n.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,bs(r,o)?i=null:s!==null&&bs(r,s)&&(n.flags|=32),ql(e,n),Ce(e,n,i,t),n.child;case 6:return e===null&&zs(n),null;case 13:return ru(e,n,t);case 4:return Fs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Pt(n,null,r,t):Ce(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),Yl(e,n,r,o,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,s=n.memoizedProps,i=o.value,ne(ro,r._currentValue),r._currentValue=i,s!==null)if(on(s.value,i)){if(s.children===o.children&&!Le.current){n=Cn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var u=s.dependencies;if(u!==null){i=s.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=jn(-1,t&-t),d.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var x=y.pending;x===null?d.next=d:(d.next=x.next,x.next=d),y.pending=d}}s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),Os(s.return,t,n),u.lanes|=t;break}d=d.next}}else if(s.tag===10)i=s.type===n.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(c(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Os(i,t,n),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===n){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ce(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,zt(n,t),o=Ye(o),r=r(o),n.flags|=1,Ce(e,n,r,t),n.child;case 14:return r=n.type,o=an(r,n.pendingProps),o=an(r.type,o),Jl(e,n,r,o,t);case 15:return Zl(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),go(e,n),n.tag=1,Ae(r)?(e=!0,Zr(n)):e=!1,zt(n,t),Wl(n,r,o),Xs(n,r,o,t),ti(null,n,r,!0,e,t);case 19:return su(e,n,t);case 22:return Xl(e,n,t)}throw Error(c(156,n.tag))};function Pu(e,n){return la(e,n)}function $d(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,n,t,r){return new $d(e,n,t,r)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kd(e){if(typeof e=="function")return bi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fn)return 11;if(e===hn)return 14}return 2}function Jn(e,n){var t=e.alternate;return t===null?(t=Xe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function jo(e,n,t,r,o,s){var i=2;if(r=e,typeof e=="function")bi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case _e:return ft(t.children,o,s,n);case Ge:i=8,o|=8;break;case Ln:return e=Xe(12,t,n,o|2),e.elementType=Ln,e.lanes=s,e;case Fe:return e=Xe(13,t,n,o),e.elementType=Fe,e.lanes=s,e;case tn:return e=Xe(19,t,n,o),e.elementType=tn,e.lanes=s,e;case ue:return Co(t,o,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xn:i=10;break e;case qn:i=9;break e;case fn:i=11;break e;case hn:i=14;break e;case ze:i=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return n=Xe(i,t,n,o),n.elementType=e,n.type=r,n.lanes=s,n}function ft(e,n,t,r){return e=Xe(7,e,r,n),e.lanes=t,e}function Co(e,n,t,r){return e=Xe(22,e,r,n),e.elementType=ue,e.lanes=t,e.stateNode={isHidden:!1},e}function Si(e,n,t){return e=Xe(6,e,null,n),e.lanes=t,e}function Ti(e,n,t){return n=Xe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Gd(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ni(e,n,t,r,o,s,i,u,d){return e=new Gd(e,n,t,u,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Xe(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(s),e}function Vd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function _u(e){if(!e)return Hn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(c(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ae(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(Ae(t))return ol(e,t,n)}return n}function zu(e,n,t,r,o,s,i,u,d){return e=Ni(t,r,!0,e,o,s,i,u,d),e.context=_u(null),t=e.current,r=Pe(),o=Qn(t),s=jn(r,o),s.callback=n??null,$n(t,s,o),e.current.lanes=o,Kt(e,o,r),Oe(e,r),e}function Po(e,n,t,r){var o=n.current,s=Pe(),i=Qn(o);return t=_u(t),n.context===null?n.context=t:n.pendingContext=t,n=jn(s,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=$n(o,n,i),e!==null&&(cn(e,o,i,s),so(e,o,i)),i}function _o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ei(e,n){Lu(e,n),(e=e.alternate)&&Lu(e,n)}function Qd(){return null}var Au=typeof reportError=="function"?reportError:function(e){console.error(e)};function ji(e){this._internalRoot=e}zo.prototype.render=ji.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));Po(e,n,null,null)},zo.prototype.unmount=ji.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ut(function(){Po(null,e,null,null)}),n[bn]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var n=ga();e={blockedOn:null,target:e,priority:n};for(var t=0;t<On.length&&n!==0&&n<On[t].priority;t++);On.splice(t,0,e),t===0&&va(e)}};function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Yd(e,n,t,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var y=_o(i);s.call(y)}}var i=zu(n,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=i,e[bn]=i.current,sr(e.nodeType===8?e.parentNode:e),ut(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var y=_o(d);u.call(y)}}var d=Ni(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=d,e[bn]=d.current,sr(e.nodeType===8?e.parentNode:e),ut(function(){Po(n,d,t,r)}),d}function Ao(e,n,t,r,o){var s=t._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var u=o;o=function(){var d=_o(i);u.call(d)}}Po(n,i,e,o)}else i=Yd(t,n,e,o,r);return _o(i)}pa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=$t(n.pendingLanes);t!==0&&(Xo(n,t|1),Oe(n,de()),(G&6)===0&&(Ot=de()+500,Wn()))}break;case 13:ut(function(){var r=En(e,1);if(r!==null){var o=Pe();cn(r,e,1,o)}}),Ei(e,1)}},qo=function(e){if(e.tag===13){var n=En(e,134217728);if(n!==null){var t=Pe();cn(n,e,134217728,t)}Ei(e,134217728)}},ma=function(e){if(e.tag===13){var n=Qn(e),t=En(e,n);if(t!==null){var r=Pe();cn(t,e,n,r)}Ei(e,n)}},ga=function(){return X},ya=function(e,n){var t=X;try{return X=e,n()}finally{X=t}},Ko=function(e,n,t){switch(n){case"input":if(Io(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Yr(r);if(!o)throw Error(c(90));Hi(r),Io(r,o)}}}break;case"textarea":Gi(e,t);break;case"select":n=t.value,n!=null&&ht(e,!!t.multiple,n,!1)}},na=vi,ta=ut;var Jd={usingClientEntryPoint:!1,Events:[lr,St,Yr,qi,ea,vi]},br={findFiberByHostInstance:nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ia(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Qd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{_r=Do.inject(Zd),pn=Do}catch{}}return Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jd,Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ci(n))throw Error(c(200));return Vd(e,n,null,t)},Ie.createRoot=function(e,n){if(!Ci(e))throw Error(c(299));var t=!1,r="",o=Au;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Ni(e,1,!1,null,null,t,!1,r,o),e[bn]=n.current,sr(e.nodeType===8?e.parentNode:e),new ji(n)},Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ia(n),e=e===null?null:e.stateNode,e},Ie.flushSync=function(e){return ut(e)},Ie.hydrate=function(e,n,t){if(!Lo(n))throw Error(c(200));return Ao(null,e,n,!0,t)},Ie.hydrateRoot=function(e,n,t){if(!Ci(e))throw Error(c(405));var r=t!=null&&t.hydratedSources||null,o=!1,s="",i=Au;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=zu(n,null,e,1,t??null,o,!1,s,i),e[bn]=n.current,sr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new zo(n)},Ie.render=function(e,n,t){if(!Lo(n))throw Error(c(200));return Ao(null,e,n,!1,t)},Ie.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(c(40));return e._reactRootContainer?(ut(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},Ie.unstable_batchedUpdates=vi,Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Lo(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Ao(e,n,t,!1,r)},Ie.version="18.3.1-next-f1338f8080-20240426",Ie}var Wu;function sf(){if(Wu)return zi.exports;Wu=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(h){console.error(h)}}return a(),zi.exports=of(),zi.exports}var Uu;function af(){if(Uu)return Ro;Uu=1;var a=sf();return Ro.createRoot=a.createRoot,Ro.hydrateRoot=a.hydrateRoot,Ro}var lf=af();const Ii="/fantasy/data/",Bi=a=>fetch(a).then(h=>h.ok?h.json():Promise.reject(new Error(`${h.status} ${a}`))),uf=()=>Bi(`${Ii}books/index.json`),cf=a=>Bi(`${Ii}books/${a}/index.json`),df=(a,h)=>Bi(`${Ii}books/${a}/w${h}.json`);async function ff(a){const{weeks:h}=await cf(a),c=await Promise.all(h.map(w=>df(a,w)));return{weeks:h,sheets:c}}function $u(a){if(!a)return null;const h=a[0]==="−"||a[0]==="-",c=Number(a.slice(1));return Number.isFinite(c)?h?c/(c+100):100/(c+100):null}function Fi({now:a,was:h,prefix:c=""}){if(!a||!h||a===h)return null;const w=$u(h),N=$u(a);if(w==null||N==null)return null;const E=N>w;return l.jsxs("span",{className:`bk-move ${E?"up":"down"}`,children:[E?"▲":"▼"," ",c,h," → ",a]})}const Ku=864e5;function Gu(a,h=Date.now()){if(!a)return null;const c=Date.parse(`${a.start}T00:00:00Z`),w=Date.parse(`${a.payout}T00:00:00Z`),N=Math.max(0,Math.min(h,w)-c)/Ku,E=(w-c)/Ku,D=F=>a.principal*((1+a.apy)**(F/365)-1);return{now:D(N),atPayout:D(E),days:Math.floor(N),totalDays:Math.round(E),apy:a.apy,principal:a.principal,settled:h>=w}}const Di=a=>a.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),hf=a=>a.money.reduce((h,c)=>h+c.pct,0);function pf({standings:a,payingPlaces:h,structure:c,stakes:w,Panel:N}){const E=a[0].dist.length,D=new Set(h),F=c==="winner-take-all";return l.jsxs(N,{title:"PROJECTED STANDINGS",blurb:F?"Where every seat actually finishes, across 25,000 simulated seasons. The gold block is first place — the only finish in this league worth money. Everything to the right of it is the same season with nothing at the end of it.":"Where every seat actually finishes, across 25,000 simulated seasons. The gold blocks are the four finishes that pay; the wider a seat's gold, the more often its season ends with money. Hover any block for the price on that exact finish.",children:[l.jsxs("div",{className:"fb-standings",children:[l.jsxs("div",{className:"fb-st-head",children:[l.jsx("span",{className:"fb-st-rank",children:"#"}),l.jsx("span",{className:"fb-st-seat",children:"SEAT"}),l.jsx("span",{className:"fb-st-num",children:"PROJ"}),l.jsx("span",{className:"fb-st-num",children:"RECORD"}),l.jsx("span",{className:"fb-st-num",children:"PTS"}),l.jsxs("span",{className:"fb-st-dist",children:["FINISH DISTRIBUTION — 1ST (",E,"TH) "]}),l.jsx("span",{className:"fb-st-num",children:F?"WINS":"MONEY"}),l.jsx("span",{className:"fb-st-num",children:"LAST"})]}),a.map(S=>l.jsxs("div",{className:"fb-st-row",children:[l.jsx("span",{className:"fb-st-rank",children:S.rank}),l.jsxs("span",{className:"fb-st-seat",children:[l.jsx("span",{className:"fb-st-team",children:S.team}),l.jsx("span",{className:"fb-st-mgr",children:S.manager})]}),l.jsx("span",{className:"fb-st-num strong",children:S.projFinish.toFixed(1)}),l.jsxs("span",{className:"fb-st-num",children:[S.projWins.toFixed(1),"–",S.projLosses.toFixed(1)]}),l.jsx("span",{className:"fb-st-num",children:S.projPoints.toLocaleString("en-US")}),l.jsx("span",{className:"fb-st-dist",children:S.dist.map((I,V)=>{const H=V+1,W=S.money.find(xe=>xe.place===H);return l.jsx("span",{className:D.has(H)?"fb-seg pays":"fb-seg",style:{flexGrow:Math.max(I,.15)},title:W?`${Vu(H)} — ${W.label} — ${W.pct}% — ${W.price}`:`${Vu(H)} — ${I}%${H===E?" — last":""}`},H)})}),l.jsxs("span",{className:"fb-st-num strong",children:[hf(S).toFixed(1),"%"]}),l.jsxs("span",{className:"fb-st-num dim",children:[S.last,"%"]})]},S.rosterId))]}),l.jsxs("p",{className:"fb-note",children:["PROJ is the average finishing place across every simulated season, so it moves before any single market does — a seat can drift from 6.4 to 6.9 without its championship price changing at all."," ",F?"Only first place pays in this league, so the MONEY column is the championship number.":"MONEY is the chance of finishing in one of the four paying places — first, second, third, or fourth exactly."]})]})}const Vu=a=>`${a}${["th","st","nd","rd"][a%100>>3^1&&a%10]||"th"}`;function mf({sheet:a,prev:h,Panel:c}){const{futures:w,stakes:N}=a,E=w.structure==="winner-take-all",D=I=>w.markets.find(V=>V.key===I),F=I=>{var V,H,W;return(W=(H=(V=h==null?void 0:h.futures)==null?void 0:V.markets)==null?void 0:H.find(xe=>xe.key===I))==null?void 0:W.rows},S=({market:I,blurb:V,compact:H})=>{const W=D(I);return W?l.jsx(c,{title:W.pays?`${W.name} — PAYS ${W.pays.toUpperCase()}`:W.name,blurb:W.copy??V,children:l.jsx(gf,{rows:W.rows,prevRows:F(I),compact:H})}):null};return l.jsxs(l.Fragment,{children:[l.jsx(pf,{standings:w.standings,payingPlaces:w.payingPlaces,structure:w.structure,stakes:N,Panel:c}),l.jsx(S,{market:"championship",blurb:E?`${N.pot}, winner take all. Nobody else gets a cent, which makes this the entire financial book — every other market on this sheet is pride.`:"The headline, and the only board here that is not a slice of the table above: winning the bracket is not the same question as finishing high, because three playoff weeks are three more coin flips."}),!E&&l.jsx(yf,{sheet:a,Panel:c}),l.jsx(S,{market:"lastPlace"}),l.jsx(c,{title:"SEASON WIN TOTALS",blurb:"Over/under on regular-season wins, per seat. The line is the half-win the simulated seasons split closest to evenly; unlike a weekly total, wins are integers, so these are priced on the real number rather than posted flat.",children:l.jsx("div",{className:"fb-wintotals",children:[...w.winTotals].sort((I,V)=>V.expected-I.expected).map(I=>l.jsxs("div",{className:"fb-wintotal",children:[l.jsx("span",{className:"fb-wintotal-name",children:I.team}),l.jsx("span",{className:"fb-wintotal-line",children:I.line.toFixed(1)}),l.jsxs("span",{className:"fb-wintotal-prices",children:["O ",I.over," · U ",I.under]}),l.jsxs("span",{className:"fb-wintotal-exp",children:[I.expected," proj"]})]},I.rosterId))})})]})}function gf({rows:a,prevRows:h,compact:c}){const w=Math.max(...a.map(N=>N.pct),1);return l.jsx("div",{className:"fb-runners",children:a.map((N,E)=>{var D;return l.jsxs("div",{className:E===0?"fb-runner lead":"fb-runner",children:[l.jsxs("span",{className:"fb-runner-main",children:[l.jsx("span",{className:"fb-runner-team",children:N.team}),l.jsx("span",{className:"fb-bar",style:{width:`${N.pct/w*100}%`}}),!c&&l.jsx("span",{className:"fb-runner-mgr",children:N.manager})]}),l.jsxs("span",{className:"fb-runner-pct",children:[N.pct,"%"]}),l.jsxs("span",{className:"bk-line-right",children:[l.jsx(Fi,{now:N.price,was:(D=h==null?void 0:h.find(F=>F.rosterId===N.rosterId))==null?void 0:D.price}),l.jsx("span",{className:"bk-price",children:N.price??"OFF"})]})]},N.rosterId)})})}function yf({sheet:a,Panel:h}){var E,D;const c=a.stakes.hysa,[w,N]=zn.useState(()=>Gu(c));return zn.useEffect(()=>{if(!c)return;const F=setInterval(()=>N(Gu(c)),6e4);return()=>clearInterval(F)},[c]),l.jsx(h,{title:"THE INTEREST — 4TH EXACTLY",blurb:c?`First takes ${(E=a.stakes.payouts[0])==null?void 0:E.label}, second ${(D=a.stakes.payouts[1])==null?void 0:D.label}, third gets the buy-in back. Fourth gets the interest the pot has earned sitting in a savings account at ${(c.apy*100).toFixed(2)}% APY. That is a real prize, this is what it is worth right now, and the fourth block of every bar above is who is most likely to collect it.`:"Fourth place, exactly.",children:w&&l.jsxs("div",{className:"fb-headline",children:[l.jsxs("span",{children:[l.jsx("span",{className:"fb-headline-label",children:Di(w.now)}),l.jsxs("span",{className:"fb-headline-copy",children:["accrued on ",Di(w.principal)," over ",w.days," of ",w.totalDays," days ·"," ",w.settled?"final":`${Di(w.atPayout)} if it runs to payout`]})]}),l.jsx("span",{className:"fb-headline-price",children:"4TH"})]})})}let wf=0;const qe=()=>`md${wf++}`;function vn({text:a,className:h}){if(!a)return null;const c=a.trim().split(/\n{2,}/);return l.jsx("div",{className:h,children:c.map(w=>vf(w))})}function vf(a){const h=a.split(`
`);return/^###\s/.test(h[0])?l.jsx("h3",{className:"md-h3",children:_n(h[0].replace(/^###\s+/,""))},qe()):/^(---|\*\*\*)$/.test(h[0].trim())?l.jsx("hr",{className:"md-hr"},qe()):h.every(c=>/^>\s?/.test(c))?l.jsx("blockquote",{className:"md-quote",children:_n(h.map(c=>c.replace(/^>\s?/,"")).join(" "))},qe()):h.every(c=>/^[-*]\s+/.test(c))?l.jsx("ul",{className:"md-list",children:h.map(c=>l.jsx("li",{children:_n(c.replace(/^[-*]\s+/,""))},qe()))},qe()):h.every(c=>/^\d+\.\s+/.test(c))?l.jsx("ol",{className:"md-list",children:h.map(c=>l.jsx("li",{children:_n(c.replace(/^\d+\.\s+/,""))},qe()))},qe()):l.jsx("p",{className:"md-p",children:_n(h.join(" "))},qe())}const kf=[{re:/`([^`]+)`/,render:a=>l.jsx("code",{className:"md-code",children:a[1]},qe())},{re:/\*\*([^*]+)\*\*/,render:a=>l.jsx("strong",{children:_n(a[1])},qe())},{re:/(?:\*|_)([^*_]+)(?:\*|_)/,render:a=>l.jsx("em",{children:_n(a[1])},qe())},{re:/\[([^\]]+)\]\(([^)]+)\)/,render:a=>l.jsx("a",{className:"bk-link",href:a[2],children:_n(a[1])},qe())}];function _n(a){let h=null;for(const N of kf){const E=a.match(N.re);E&&(h==null||E.index<h.at.index)&&(h={rule:N,at:E})}if(!h)return a;const{rule:c,at:w}=h;return[a.slice(0,w.index),c.render(w),...[].concat(_n(a.slice(w.index+w[0].length)))]}function xf({settled:a,punishment:h,Panel:c,note:w,benchNote:N}){const{reportCard:E}=a;return l.jsxs(l.Fragment,{children:[l.jsxs(c,{title:`HOW WEEK ${a.week} SETTLED`,blurb:w?null:"Final scores against the lines this book posted last Wednesday. Side A is the side that was favoured.",children:[w&&l.jsx(vn,{text:w,className:"fb-prose-cols"}),l.jsxs("div",{className:"fb-settled-head",children:[l.jsx("span",{children:"RESULT"}),l.jsx("span",{children:"LINE"}),l.jsx("span",{className:"spread",children:"ATS"}),l.jsx("span",{className:"total",children:"TOTAL"})]}),l.jsx("div",{className:"fb-card",children:a.matchups.map(D=>l.jsx(bf,{m:D},`${D.a.rosterId}-${D.b.rosterId}`))}),l.jsxs("div",{className:"fb-report",children:[l.jsx("h3",{className:"fb-report-title",children:"THE MODEL'S REPORT CARD"}),l.jsxs("div",{className:"fb-report-grid",children:[l.jsx(Ri,{label:"FAVOURITES SU",record:E.straightUp}),l.jsx(Ri,{label:"FAVOURITES ATS",record:E.ats}),l.jsx(Ri,{label:"TOTALS — OVER",record:E.total}),l.jsxs("div",{className:"fb-report-cell",children:[l.jsx("span",{className:"fb-report-num",children:E.brier.toFixed(3)}),l.jsx("span",{className:"fb-report-label",children:"BRIER SCORE"}),l.jsxs("span",{className:"fb-report-note",children:[E.brier<E.coinFlip?"better":"worse"," than ",E.coinFlip.toFixed(2),", which is what you score by calling every game a coin flip"]})]})]}),l.jsxs("p",{className:"fb-note",children:["The book expected ",E.expectedChalkWins.toFixed(2)," of its ",E.games," favourites to win. "," ",E.straightUp.w," did. Prices are graded on the fair probability, before the house margin — the margin is the book's edge, not the model's opinion."]})]})]}),l.jsxs("div",{className:"fb-grid2",children:[l.jsxs(c,{title:`${a.punishment.low.name} — SETTLED`,blurb:h.weekly.copy,children:[l.jsx(Qu,{outcome:a.punishment.low,verb:"took it",copy:a.punishment.low.hitFavourite?"The board's own favourite. The book called this one.":`Priced ${a.punishment.low.price}, ${Zu(a.punishment.low.rank)} of ${a.punishment.low.of} on the board.`}),a.punishment.high&&l.jsx(Qu,{outcome:a.punishment.high,verb:"picks",copy:`${a.punishment.high.name} — ${a.punishment.high.price} on the board, ${Zu(a.punishment.high.rank)} of ${a.punishment.high.of}.`}),a.punishment.joint&&l.jsx("p",{className:"fb-note",children:a.punishment.joint.hit?l.jsxs(l.Fragment,{children:["The joint ",l.jsx("b",{children:"hit"})," at ",a.punishment.joint.hit.price,". It was one of"," ",a.punishment.joint.offered," priced pairings out of"," ",a.punishment.joint.offered>1?"dozens":"many"," possible."]}):l.jsxs(l.Fragment,{children:["None of the ",a.punishment.joint.offered," featured joints hit — the pairing that landed was"," ",a.punishment.joint.low.team," and ",a.punishment.joint.high.team,", which the sheet did not print."]})})]}),l.jsxs(c,{title:"POINTS LEFT ON THE BENCH",blurb:"Every line on last week's sheet assumed an optimal lineup. This is what that assumption actually cost, scored on real points — the model's own §5.4 bias, measured rather than disclosed.",children:[N&&l.jsx(vn,{text:N,className:"fb-panel-prose"}),l.jsx("div",{className:"fb-bench",children:a.bench.slice(0,5).map((D,F)=>l.jsxs("div",{className:F===0?"fb-bench-row lead":"fb-bench-row",children:[l.jsxs("span",{className:"fb-bench-main",children:[l.jsx("span",{className:"fb-runner-team",children:D.team}),l.jsxs("span",{className:"fb-runner-mgr",children:[D.points.toFixed(2)," of a possible ",D.best.toFixed(2),D.missed.length>0&&l.jsxs(l.Fragment,{children:[" · benched ",D.missed.map(S=>`${S.name} ${S.points.toFixed(1)}`).join(", ")]})]})]}),l.jsxs("span",{className:"bk-price",children:["−",D.left.toFixed(1)]})]},D.rosterId))})]})]})]})}const Ri=({label:a,record:h})=>l.jsxs("div",{className:"fb-report-cell",children:[l.jsxs("span",{className:"fb-report-num",children:[h.w,"–",h.l,h.p?`–${h.p}`:""]}),l.jsx("span",{className:"fb-report-label",children:a})]}),Qu=({outcome:a,verb:h,copy:c})=>l.jsxs("div",{className:"fb-verdict",children:[l.jsxs("span",{className:"fb-slip-text",children:[l.jsx("b",{children:a.team})," ",h," — ",a.points.toFixed(2),l.jsxs("span",{className:"fb-slip-note",children:[a.manager," · ",c]})]}),l.jsx("span",{className:"bk-price",children:a.price??"—"})]});function bf({m:a}){return a.played?l.jsxs("div",{className:"fb-settled",children:[l.jsxs("div",{className:"fb-seats",children:[l.jsx(Yu,{seat:a.a,points:a.a.points,won:a.winner==="a",push:a.winner==="push"}),l.jsx(Yu,{seat:a.b,points:a.b.points,won:a.winner==="b",push:a.winner==="push"})]}),l.jsxs("div",{className:"fb-cell",children:[l.jsx("span",{className:"fb-odds",children:a.posted.moneyline.a}),l.jsx(Ju,{hit:a.winner==="a",push:a.winner==="push"})]}),l.jsxs("div",{className:"fb-cell spread",children:[l.jsx("span",{className:"fb-odds",children:a.posted.spread.a}),l.jsx(Ju,{hit:a.ats==="a",push:a.ats==="push"})]}),l.jsxs("div",{className:"fb-cell total",children:[l.jsx("span",{className:"fb-odds",children:a.total.toFixed(1)}),l.jsxs("span",{className:"fb-settled-sub",children:[a.ou==="push"?"push":a.ou==="a"?"over":"under"," ",a.posted.total.line.toFixed(1)]})]})]}):null}const Yu=({seat:a,points:h,won:c,push:w})=>l.jsxs("span",{className:c?"fb-seat fav":"fb-seat",children:[l.jsx("span",{className:"fb-seat-name",children:a.team}),l.jsxs("span",{className:"fb-seat-mgr",children:[a.manager,w?" · tie":""]}),l.jsx("span",{className:"fb-seat-proj",children:h.toFixed(2)})]}),Ju=({hit:a,push:h})=>l.jsx("span",{className:h?"fb-mark push":a?"fb-mark hit":"fb-mark miss",children:h?"PUSH":a?"✓":"✗"}),Zu=a=>a==null?"unpriced":`${a}${["th","st","nd","rd"][a%100>>3^1&&a%10]||"th"}`,Sf=`---
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
`,Tf=`---
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
`,Nf=`---
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
`,Cf=`---
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
`,Pf=`---
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
`,_f=`---
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
`,zf=`---
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
`,Xu=Object.assign({"../content/dkenasty/w2.md":Sf,"../content/dkenasty/w3.md":Tf,"../content/dkenasty/w4.md":Nf,"../content/loog/w2.md":Ef,"../content/loog/w3.md":jf,"../content/loog/w4.md":Cf,"../content/nicks/w2.md":Pf,"../content/nicks/w3.md":_f,"../content/nicks/w4.md":zf}),Lf=/^[a-z][a-z0-9-]*(:\d+-\d+)?$/,Af=/\/content\/([^/]+)\/w(\d+)\.md$/,tc=new Map;for(const a in Xu){const h=a.match(Af);h&&tc.set(`${h[1]}/w${h[2]}`,Rf(Xu[a]))}const Df=(a,h)=>tc.get(`${a}/w${h}`)??null;function Rf(a){const{meta:h,body:c}=If(a.replace(/\r\n/g,`
`)),w=c.replace(/<!--[\s\S]*?-->/g,""),N=[];let E={id:"lede",title:null,lines:[]};for(const S of w.split(`
`)){const I=S.match(/^##\s+(.+?)\s*$/);if(!I){E.lines.push(S);continue}N.push(E);const V=I[1],H=V.toLowerCase();E=Lf.test(H)?{id:H,title:null,lines:[]}:{id:null,title:V,lines:[]}}N.push(E);const D=new Map,F=[];for(const S of N){const I=S.lines.join(`
`).trim();I&&(S.id?D.set(S.id,I):F.push({title:S.title,text:I}))}return{meta:h,slots:D,panels:F}}const Of=(a,h,c)=>(a==null?void 0:a.slots.get(`matchup:${h}-${c}`))??(a==null?void 0:a.slots.get(`matchup:${c}-${h}`))??null,Be=(a,h)=>(a==null?void 0:a.slots.get(h))??null;function If(a){const h=a.match(/^---\n([\s\S]*?)\n---\n?/);if(!h)return{meta:{},body:a};const c={};for(const w of h[1].split(`
`)){const N=w.match(/^([A-Za-z][\w-]*):\s*(.*)$/);N&&(c[N[1]]=N[2].replace(/^["']|["']$/g,"").trim())}return{meta:c,body:a.slice(h[0].length)}}function Bf({bookId:a,week:h,view:c}){const[w,N]=zn.useState({status:"loading"}),[E,D]=zn.useState(0);return zn.useEffect(()=>{let F=!0;const S=I=>F&&N(I);return a?ff(a).then(({weeks:I,sheets:V})=>{S({status:"ok",weeks:I,sheets:V});const H=h!=null?I.indexOf(h):-1;D(H>=0?H:I.length-1)}).catch(()=>S({status:"error"})):uf().then(I=>S({status:"ok",index:I})).catch(()=>S({status:"error"})),()=>{F=!1}},[a,h]),l.jsxs("div",{className:"book-root",children:[l.jsx("div",{className:"bk-backbar",children:l.jsx("a",{className:"bk-back",href:"?book",children:"← The lobby"})}),l.jsxs("div",{className:"book-wrap",children:[w.status==="loading"&&l.jsx("p",{className:"state-msg",children:"Opening the book…"}),w.status==="error"&&l.jsxs("p",{className:"state-msg",children:["No sheet posted for this league. ",l.jsx("a",{className:"bk-link",href:"?book",children:"Back to the lobby"})]}),w.status==="ok"&&w.index&&l.jsx(Ff,{index:w.index}),w.status==="ok"&&w.sheets&&l.jsx(Wf,{sheet:w.sheets[E],prev:E>0?w.sheets[E-1]:null,weeks:w.weeks,cur:E,view:c,onNav:D})]})]})}function Ff({index:a}){return zn.useEffect(()=>{document.title="The Fantasy Book"},[]),l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:"bk-head",children:[l.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),l.jsx("h1",{className:"bk-title",children:"THE FANTASY BOOK"}),l.jsx("p",{className:"bk-sub",children:"Three leagues. Eighteen weeks. One coin-flip sport."})]}),l.jsx("div",{className:"group-list",style:{marginTop:28},children:a.map(h=>l.jsxs("a",{className:"group-link",href:`?book=${h.id}`,children:[l.jsx("div",{className:"gl-name",children:h.name}),l.jsx("div",{className:"gl-meta",children:"Open the book →"})]},h.id))})]})}const Mf=a=>a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),qu=(a,h)=>a.toUpperCase().includes(h)?a:`${a} — ${h}`;function Xn({title:a,blurb:h,children:c}){return l.jsxs("section",{className:"bk-panel",id:Mf(a),children:[l.jsx("h2",{className:"bk-panel-title",children:a}),h&&l.jsx("p",{className:"bk-blurb",children:h}),c]})}function Hf({weeks:a,cur:h,onNav:c}){return l.jsxs("div",{className:"fb-weeknav",children:[l.jsx("button",{className:"bk-nav-btn",disabled:h===0,onClick:()=>c(h-1),children:"‹ PREV"}),l.jsx("select",{className:"bk-nav-select",value:h,onChange:w=>c(Number(w.target.value)),children:a.map((w,N)=>l.jsxs("option",{value:N,children:["WEEK ",w]},w))}),l.jsx("button",{className:"bk-nav-btn",disabled:h===a.length-1,onClick:()=>c(h+1),children:"NEXT ›"})]})}function Wf({sheet:a,prev:h,weeks:c,cur:w,view:N,onNav:E}){const D=Df(a.id,a.week),F=N;return zn.useEffect(()=>{const S=F==="season"?Mi(a):`Week ${a.week}`;document.title=`${a.bookName} · ${S}`},[a.bookName,a.week,F]),zn.useEffect(()=>{const S=window.location.hash&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)));S&&S.scrollIntoView()},[a.id,a.week]),l.jsxs(l.Fragment,{children:[l.jsx(Uf,{sheet:a,weeks:c,cur:w,onNav:E,page:F}),F==="week"&&l.jsx($f,{sheet:a,prev:h,note:D}),F==="season"&&l.jsx(Kf,{sheet:a,prev:h,note:D}),l.jsx(Yf,{sheet:a,page:F})]})}const Mi=a=>a.week===1?"Season preview":"The futures board";function Uf({sheet:a,weeks:h,cur:c,onNav:w,page:N}){return l.jsxs("header",{className:"bk-head",children:[l.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),l.jsx("h1",{className:"bk-title",children:a.bookName}),l.jsxs("p",{className:"bk-sub",children:[a.tagline," · Week ",a.week,", ",a.season,a.meta.seed?l.jsxs(l.Fragment,{children:[" · Seed ",l.jsx("code",{children:a.meta.seed})]}):null]}),a.stakes&&l.jsxs("div",{className:"bk-chips",children:[l.jsxs("span",{className:"bk-chip",children:["Buy-in ",l.jsx("b",{children:a.stakes.buyIn})]}),l.jsxs("span",{className:"bk-chip",children:["Pot ",l.jsx("b",{children:a.stakes.pot})]}),a.stakes.payouts.map(E=>l.jsxs("span",{className:"bk-chip",children:[Jf(E.place)," ",l.jsx("b",{children:E.label})]},E.place))]}),l.jsxs("div",{className:"bk-banner",children:["LINES BUILT FROM ",a.meta.sources]}),h.length>1&&l.jsx(Hf,{weeks:h,cur:c,onNav:w}),l.jsxs("nav",{className:"fb-viewnav",children:[l.jsxs("a",{className:N==="week"?"active":"",href:`?book=${a.id}&w=${a.week}`,children:["THE CARD — WEEK ",a.week]}),l.jsx("a",{className:N==="season"?"active":"",href:`?book=${a.id}&w=${a.week}&view=season`,children:Mi(a).toUpperCase()})]}),l.jsx("nav",{className:"fb-booknav",children:l.jsx("a",{href:"?book",children:"All books"})})]})}function $f({sheet:a,prev:h,note:c}){var N,E,D,F;const{punishment:w}=a;return l.jsxs(l.Fragment,{children:[Be(c,"lede")&&l.jsxs("section",{className:"bk-panel fb-lede",id:"the-lede",children:[l.jsx("h2",{className:"bk-panel-title",children:c.meta.headline??`WEEK ${a.week}`}),l.jsx(vn,{text:Be(c,"lede"),className:"fb-prose-cols"}),c.meta.byline&&l.jsx("p",{className:"fb-byline",children:c.meta.byline})]}),a.settled&&l.jsx(xf,{settled:a.settled,punishment:w,Panel:Xn,note:Be(c,"settled"),benchNote:Be(c,"bench")}),l.jsxs(Xn,{title:`THE CARD — WEEK ${a.week}`,blurb:Be(c,"card")??"Moneyline, spread and total on every matchup. Spreads and totals are the half-point where the simulated distribution splits evenly, so both sides post at −110 — the line moves, not the price.",children:[l.jsxs("div",{className:"fb-match-head",children:[l.jsx("span",{children:"MATCHUP"}),l.jsx("span",{children:"MONEYLINE"}),l.jsx("span",{className:"spread",children:"SPREAD"}),l.jsx("span",{className:"total",children:"TOTAL"})]}),l.jsx("div",{className:"fb-card",children:a.matchups.map(S=>l.jsx(Vf,{m:S,prev:Zf(h,S),note:Of(c,S.a.rosterId,S.b.rosterId)},`${S.a.rosterId}-${S.b.rosterId}`))})]}),l.jsxs("div",{className:w.paired?"fb-grid2":"",children:[l.jsxs(Xn,{title:qu(w.weekly.name,"LOW SCORER"),blurb:w.weekly.copy,children:[Be(c,"punishment")&&l.jsx(vn,{text:Be(c,"punishment"),className:"fb-panel-prose"}),w.weekly.parlay&&l.jsxs("p",{className:"fb-note",children:[w.weekly.legs??w.weekly.parlay.legs," legs · $",w.weekly.parlay.stake," · lifetime record ",l.jsx("b",{children:w.weekly.parlay.lifetimeHits})," hits."]}),l.jsx(nc,{rows:w.weekly.rows,prevRows:(E=(N=h==null?void 0:h.punishment)==null?void 0:N.weekly)==null?void 0:E.rows})]}),w.paired&&l.jsxs(Xn,{title:qu(w.paired.name,"HIGH SCORER"),blurb:w.paired.copy,children:[Be(c,"punishment-paired")&&l.jsx(vn,{text:Be(c,"punishment-paired"),className:"fb-panel-prose"}),l.jsx(nc,{rows:w.paired.rows,prevRows:(F=(D=h==null?void 0:h.punishment)==null?void 0:D.paired)==null?void 0:F.rows})]})]}),w.joints.length>0&&l.jsxs(Xn,{title:"THE JOINT — WHO SINGS WHAT",blurb:"Low scorer and high scorer in the same week, priced together rather than multiplied: a 145-point week makes you the high scorer and makes someone else the low one, so these are not independent.",children:[Be(c,"joint")&&l.jsx(vn,{text:Be(c,"joint"),className:"fb-panel-prose"}),w.joints.map(S=>l.jsxs("div",{className:"fb-slip",children:[l.jsxs("span",{className:"fb-slip-text",children:[l.jsx("b",{children:S.low.team})," sings a song picked by ",l.jsx("b",{children:S.high.team}),l.jsxs("span",{className:"fb-slip-note",children:[S.low.manager," · ",S.high.manager," · ",S.pct,"%"]})]}),l.jsx("span",{className:"bk-price",children:S.price})]},`${S.low.rosterId}-${S.high.rosterId}`))]}),l.jsxs(Xn,{title:"THE LINEUPS",blurb:"Optimal by projection against each league's roster slots — what a manager knows Sunday morning. Scores are drawn on the simulation, never on the projection, which would be lookahead bias.",children:[Be(c,"lineups")&&l.jsx(vn,{text:Be(c,"lineups"),className:"fb-panel-prose"}),l.jsx("div",{className:"fb-lineups",children:[...a.lineups].sort((S,I)=>I.projected-S.projected).map(S=>l.jsx(Qf,{seat:S},S.rosterId))})]}),c==null?void 0:c.panels.map(S=>l.jsx(Xn,{title:S.title.toUpperCase(),children:l.jsx(vn,{text:S.text,className:"fb-prose-cols"})},S.title))]})}function Kf({sheet:a,prev:h,note:c}){const w=Be(c,"season");return l.jsxs(l.Fragment,{children:[w?l.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[l.jsx("h2",{className:"bk-panel-title",children:c.meta.headline??"THE FUTURES BOARD"}),l.jsx(vn,{text:w,className:"fb-prose-cols"})]}):a.preview&&l.jsx(Gf,{preview:a.preview,week:a.week}),l.jsx(mf,{sheet:a,prev:h,Panel:Xn})]})}function Gf({preview:a,week:h}){return l.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[l.jsx("h2",{className:"bk-panel-title",children:h===1?"SEASON PREVIEW":`SEASON PREVIEW — WRITTEN WEEK ${a.writtenWeek}`}),a.standfirst&&l.jsx("p",{className:"fb-standfirst",children:a.standfirst}),l.jsx("div",{className:"fb-prose-cols",children:a.paragraphs.map((c,w)=>l.jsx("p",{className:"fb-prose",children:c},w))}),h>a.writtenWeek&&l.jsxs("p",{className:"fb-note",children:["Written in week ",a.writtenWeek," and left alone since. The boards below are current; the prose is not."]})]})}function Vf({m:a,prev:h,note:c}){var w;return l.jsxs("div",{className:c?"fb-match noted":"fb-match",children:[l.jsxs("div",{className:"fb-seats",children:[l.jsx(ec,{seat:a.a,proj:a.projected.a,fav:!0}),l.jsx(ec,{seat:a.b,proj:a.projected.b})]}),l.jsxs("div",{className:"fb-cell",children:[l.jsx("span",{className:"fb-odds",children:a.moneyline.a}),l.jsx("span",{className:"fb-odds dim",children:a.moneyline.b}),l.jsx(Fi,{now:a.moneyline.a,was:(w=h==null?void 0:h.moneyline)==null?void 0:w.a})]}),l.jsxs("div",{className:"fb-cell spread",children:[l.jsxs("span",{className:"fb-odds",children:[a.spread.a,l.jsx("small",{children:a.spread.price})]}),l.jsxs("span",{className:"fb-odds dim",children:[a.spread.b,l.jsx("small",{children:a.spread.price})]})]}),l.jsxs("div",{className:"fb-cell total",children:[l.jsxs("span",{className:"fb-odds",children:["O ",a.total.line.toFixed(1),l.jsx("small",{children:a.total.over})]}),l.jsxs("span",{className:"fb-odds dim",children:["U ",a.total.line.toFixed(1),l.jsx("small",{children:a.total.under})]})]}),c&&l.jsx(vn,{text:c,className:"fb-match-note"})]})}const ec=({seat:a,proj:h,fav:c})=>l.jsxs("span",{className:c?"fb-seat fav":"fb-seat",children:[l.jsx("span",{className:"fb-seat-name",children:a.team}),l.jsx("span",{className:"fb-seat-mgr",children:a.manager}),l.jsx("span",{className:"fb-seat-proj",children:h.toFixed(1)})]});function nc({rows:a,prevRows:h}){const c=Math.max(...a.map(w=>w.pct));return l.jsx("div",{className:"fb-runners",children:a.map((w,N)=>{var E;return l.jsxs("div",{className:N===0?"fb-runner lead":"fb-runner",children:[l.jsxs("span",{className:"fb-runner-main",children:[l.jsx("span",{className:"fb-runner-team",children:w.team}),l.jsx("span",{className:"fb-bar",style:{width:`${w.pct/c*100}%`}}),l.jsx("span",{className:"fb-runner-mgr",children:w.manager})]}),l.jsxs("span",{className:"fb-runner-pct",children:[w.pct,"%"]}),l.jsxs("span",{className:"bk-line-right",children:[l.jsx(Fi,{now:w.price,was:(E=h==null?void 0:h.find(D=>D.rosterId===w.rosterId))==null?void 0:E.price}),l.jsx("span",{className:"bk-price",children:w.price})]})]},w.rosterId)})})}function Qf({seat:a}){return l.jsxs("div",{className:"fb-lineup",children:[l.jsxs("div",{className:"fb-lineup-head",children:[l.jsx("span",{className:"fb-lineup-name",children:a.team}),l.jsx("span",{className:"fb-lineup-proj",children:a.projected.toFixed(1)})]}),a.players.map((h,c)=>l.jsxs("div",{className:h.name?"fb-slot":"fb-slot empty",children:[l.jsx("span",{className:"fb-slot-tag",children:h.slot}),l.jsxs("span",{className:"fb-slot-name",children:[h.name??"no eligible player",h.name&&l.jsxs("small",{children:[" ",h.position," ",h.team,h.waiver&&" · waivers"]})]}),l.jsx("span",{className:"fb-slot-mu",children:h.mu.toFixed(1)})]},`${h.slot}-${c}`)),a.players.some(h=>h.waiver)&&l.jsxs("p",{className:"fb-warn",children:["Nobody on the roster can play ",a.players.filter(h=>h.waiver).map(h=>h.slot).join(", "),". Priced as if he claims the best free agent there — he has not, and until he does this line is generous to him."]}),a.emptySlots.length>0&&l.jsxs("p",{className:"fb-warn",children:["Forfeits ",a.emptySlots.join(", ")," — nobody on the roster is eligible. Worth roughly eight points, and it is why this line looks the way it does."]})]})}function Yf({sheet:a,page:h}){var c;return l.jsxs("footer",{className:"bk-fine-block",children:[l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"HOW THE SAUSAGE IS MADE."})," Every rostered player's projected points come from Sleeper's own weekly projection, scored through this league's exact scoring settings (",a.meta.scoringKeys," keys, reproducing Sleeper's published totals to a mean absolute error of ",a.meta.mae,"). Weekly scores are drawn from a Gamma distribution whose spread was fitted on 2025 projection residuals, position by position — a receiver projected for 18 is far more volatile than a quarterback projected for 18, and a pooled number would misprice the top and bottom of every lineup in opposite directions. The week was simulated ",a.meta.sims.toLocaleString()," times."]}),l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"WHAT THIS BOOK CANNOT DO."})," ",a.meta.disclosures.join(" ")]}),((c=a.meta.overrides)==null?void 0:c.length)>0&&l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"MANUAL OVERRIDES."})," ",a.meta.overrides.map(w=>`${w.player} ${w.was} → ${w.pts}${w.note?` (${w.note})`:""}`).join(" · ")]}),l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"HOUSE RULES."})," All prices include the house's margin. Ties split. Rosters as pulled",a.meta.pulledAt?` ${a.meta.pulledAt.slice(0,10)}`:"","; once a week's sheet is posted it is frozen and never repriced. For entertainment only."]}),l.jsxs("p",{className:"bk-foot",children:[a.bookName," · EST. SEPTEMBER 2026 · NO REFUNDS"]}),l.jsxs("p",{className:"bk-foot-nav",children:[h==="week"&&l.jsxs(l.Fragment,{children:[l.jsx("a",{className:"bk-link",href:`?book=${a.id}&w=${a.week}&view=season`,children:Mi(a)})," ·"," "]}),h==="season"&&l.jsxs(l.Fragment,{children:[l.jsxs("a",{className:"bk-link",href:`?book=${a.id}&w=${a.week}`,children:["The card — week ",a.week]})," ·"," "]}),l.jsx("a",{className:"bk-link",href:"?book",children:"All books"})]})]})}const Jf=a=>`${a}${["th","st","nd","rd"][a%100>>3^1&&a%10]||"th"}`;function Zf(a,h){if(!(a!=null&&a.matchups))return null;const c=N=>new Set([N.a.rosterId,N.b.rosterId]),w=a.matchups.find(N=>{const E=c(N);return E.has(h.a.rosterId)&&E.has(h.b.rosterId)});return w?w.a.rosterId===h.a.rosterId?w:{moneyline:{a:w.moneyline.b,b:w.moneyline.a}}:null}const Xf=`
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
`;function qf(){const a=new URLSearchParams(window.location.search),h=a.get("book")||null,c=a.has("w")?Number(a.get("w")):null,w=a.get("view")==="season"?"season":"week";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:Xf}),l.jsx(Bf,{bookId:h,week:c,view:w})]})}lf.createRoot(document.getElementById("root")).render(l.jsx(zn.StrictMode,{children:l.jsx(qf,{})}));
