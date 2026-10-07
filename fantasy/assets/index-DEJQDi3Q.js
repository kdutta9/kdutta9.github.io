(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))y(N);new MutationObserver(N=>{for(const E of N)if(E.type==="childList")for(const R of E.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&y(R)}).observe(document,{childList:!0,subtree:!0});function c(N){const E={};return N.integrity&&(E.integrity=N.integrity),N.referrerPolicy&&(E.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?E.credentials="include":N.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function y(N){if(N.ep)return;N.ep=!0;const E=c(N);fetch(N.href,E)}})();var Pa={exports:{}},Tr={},Ba={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function eh(){if(Ou)return K;Ou=1;var i=Symbol.for("react.element"),f=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),R=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),F=Symbol.iterator;function W(p){return p===null||typeof p!="object"?null:(p=F&&p[F]||p["@@iterator"],typeof p=="function"?p:null)}var be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$e=Object.assign,oe={};function X(p,k,U){this.props=p,this.context=k,this.refs=oe,this.updater=U||be}X.prototype.isReactComponent={},X.prototype.setState=function(p,k){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,k,"setState")},X.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function kn(){}kn.prototype=X.prototype;function dn(p,k,U){this.props=p,this.context=k,this.refs=oe,this.updater=U||be}var en=dn.prototype=new kn;en.constructor=dn,$e(en,X.prototype),en.isPureReactComponent=!0;var xe=Array.isArray,nn=Object.prototype.hasOwnProperty,je={current:null},Be={key:!0,ref:!0,__self:!0,__source:!0};function Ge(p,k,U){var $,V={},Q=null,ee=null;if(k!=null)for($ in k.ref!==void 0&&(ee=k.ref),k.key!==void 0&&(Q=""+k.key),k)nn.call(k,$)&&!Be.hasOwnProperty($)&&(V[$]=k[$]);var Z=arguments.length-2;if(Z===1)V.children=U;else if(1<Z){for(var se=Array(Z),He=0;He<Z;He++)se[He]=arguments[He+2];V.children=se}if(p&&p.defaultProps)for($ in Z=p.defaultProps,Z)V[$]===void 0&&(V[$]=Z[$]);return{$$typeof:i,type:p,key:Q,ref:ee,props:V,_owner:je.current}}function An(p,k){return{$$typeof:i,type:p.type,key:k,ref:p.ref,props:p.props,_owner:p._owner}}function bn(p){return typeof p=="object"&&p!==null&&p.$$typeof===i}function Xn(p){var k={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(U){return k[U]})}var hn=/\/+/g;function Me(p,k){return typeof p=="object"&&p!==null&&p.key!=null?Xn(""+p.key):k.toString(36)}function tn(p,k,U,$,V){var Q=typeof p;(Q==="undefined"||Q==="boolean")&&(p=null);var ee=!1;if(p===null)ee=!0;else switch(Q){case"string":case"number":ee=!0;break;case"object":switch(p.$$typeof){case i:case f:ee=!0}}if(ee)return ee=p,V=V(ee),p=$===""?"."+Me(ee,0):$,xe(V)?(U="",p!=null&&(U=p.replace(hn,"$&/")+"/"),tn(V,k,U,"",function(He){return He})):V!=null&&(bn(V)&&(V=An(V,U+(!V.key||ee&&ee.key===V.key?"":(""+V.key).replace(hn,"$&/")+"/")+p)),k.push(V)),1;if(ee=0,$=$===""?".":$+":",xe(p))for(var Z=0;Z<p.length;Z++){Q=p[Z];var se=$+Me(Q,Z);ee+=tn(Q,k,U,se,V)}else if(se=W(p),typeof se=="function")for(p=se.call(p),Z=0;!(Q=p.next()).done;)Q=Q.value,se=$+Me(Q,Z++),ee+=tn(Q,k,U,se,V);else if(Q==="object")throw k=String(p),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return ee}function fn(p,k,U){if(p==null)return p;var $=[],V=0;return tn(p,$,"","",function(Q){return k.call(U,Q,V++)}),$}function Le(p){if(p._status===-1){var k=p._result;k=k(),k.then(function(U){(p._status===0||p._status===-1)&&(p._status=1,p._result=U)},function(U){(p._status===0||p._status===-1)&&(p._status=2,p._result=U)}),p._status===-1&&(p._status=0,p._result=k)}if(p._status===1)return p._result.default;throw p._result}var ue={current:null},j={transition:null},I={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:j,ReactCurrentOwner:je};function B(){throw Error("act(...) is not supported in production builds of React.")}return K.Children={map:fn,forEach:function(p,k,U){fn(p,function(){k.apply(this,arguments)},U)},count:function(p){var k=0;return fn(p,function(){k++}),k},toArray:function(p){return fn(p,function(k){return k})||[]},only:function(p){if(!bn(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},K.Component=X,K.Fragment=c,K.Profiler=N,K.PureComponent=dn,K.StrictMode=y,K.Suspense=T,K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,K.act=B,K.cloneElement=function(p,k,U){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var $=$e({},p.props),V=p.key,Q=p.ref,ee=p._owner;if(k!=null){if(k.ref!==void 0&&(Q=k.ref,ee=je.current),k.key!==void 0&&(V=""+k.key),p.type&&p.type.defaultProps)var Z=p.type.defaultProps;for(se in k)nn.call(k,se)&&!Be.hasOwnProperty(se)&&($[se]=k[se]===void 0&&Z!==void 0?Z[se]:k[se])}var se=arguments.length-2;if(se===1)$.children=U;else if(1<se){Z=Array(se);for(var He=0;He<se;He++)Z[He]=arguments[He+2];$.children=Z}return{$$typeof:i,type:p.type,key:V,ref:Q,props:$,_owner:ee}},K.createContext=function(p){return p={$$typeof:R,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:E,_context:p},p.Consumer=p},K.createElement=Ge,K.createFactory=function(p){var k=Ge.bind(null,p);return k.type=p,k},K.createRef=function(){return{current:null}},K.forwardRef=function(p){return{$$typeof:M,render:p}},K.isValidElement=bn,K.lazy=function(p){return{$$typeof:Y,_payload:{_status:-1,_result:p},_init:Le}},K.memo=function(p,k){return{$$typeof:z,type:p,compare:k===void 0?null:k}},K.startTransition=function(p){var k=j.transition;j.transition={};try{p()}finally{j.transition=k}},K.unstable_act=B,K.useCallback=function(p,k){return ue.current.useCallback(p,k)},K.useContext=function(p){return ue.current.useContext(p)},K.useDebugValue=function(){},K.useDeferredValue=function(p){return ue.current.useDeferredValue(p)},K.useEffect=function(p,k){return ue.current.useEffect(p,k)},K.useId=function(){return ue.current.useId()},K.useImperativeHandle=function(p,k,U){return ue.current.useImperativeHandle(p,k,U)},K.useInsertionEffect=function(p,k){return ue.current.useInsertionEffect(p,k)},K.useLayoutEffect=function(p,k){return ue.current.useLayoutEffect(p,k)},K.useMemo=function(p,k){return ue.current.useMemo(p,k)},K.useReducer=function(p,k,U){return ue.current.useReducer(p,k,U)},K.useRef=function(p){return ue.current.useRef(p)},K.useState=function(p){return ue.current.useState(p)},K.useSyncExternalStore=function(p,k,U){return ue.current.useSyncExternalStore(p,k,U)},K.useTransition=function(){return ue.current.useTransition()},K.version="18.3.1",K}var _u;function _a(){return _u||(_u=1,Ba.exports=eh()),Ba.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function nh(){if(zu)return Tr;zu=1;var i=_a(),f=Symbol.for("react.element"),c=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,N=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function R(M,T,z){var Y,F={},W=null,be=null;z!==void 0&&(W=""+z),T.key!==void 0&&(W=""+T.key),T.ref!==void 0&&(be=T.ref);for(Y in T)y.call(T,Y)&&!E.hasOwnProperty(Y)&&(F[Y]=T[Y]);if(M&&M.defaultProps)for(Y in T=M.defaultProps,T)F[Y]===void 0&&(F[Y]=T[Y]);return{$$typeof:f,type:M,key:W,ref:be,props:F,_owner:N.current}}return Tr.Fragment=c,Tr.jsx=R,Tr.jsxs=R,Tr}var Iu;function th(){return Iu||(Iu=1,Pa.exports=nh()),Pa.exports}var l=th(),Ln=_a(),Oo={},La={exports:{}},ze={},Aa={exports:{}},Da={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu;function rh(){return Mu||(Mu=1,(function(i){function f(j,I){var B=j.length;j.push(I);e:for(;0<B;){var p=B-1>>>1,k=j[p];if(0<N(k,I))j[p]=I,j[B]=k,B=p;else break e}}function c(j){return j.length===0?null:j[0]}function y(j){if(j.length===0)return null;var I=j[0],B=j.pop();if(B!==I){j[0]=B;e:for(var p=0,k=j.length,U=k>>>1;p<U;){var $=2*(p+1)-1,V=j[$],Q=$+1,ee=j[Q];if(0>N(V,B))Q<k&&0>N(ee,V)?(j[p]=ee,j[Q]=B,p=Q):(j[p]=V,j[$]=B,p=$);else if(Q<k&&0>N(ee,B))j[p]=ee,j[Q]=B,p=Q;else break e}}return I}function N(j,I){var B=j.sortIndex-I.sortIndex;return B!==0?B:j.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;i.unstable_now=function(){return E.now()}}else{var R=Date,M=R.now();i.unstable_now=function(){return R.now()-M}}var T=[],z=[],Y=1,F=null,W=3,be=!1,$e=!1,oe=!1,X=typeof setTimeout=="function"?setTimeout:null,kn=typeof clearTimeout=="function"?clearTimeout:null,dn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function en(j){for(var I=c(z);I!==null;){if(I.callback===null)y(z);else if(I.startTime<=j)y(z),I.sortIndex=I.expirationTime,f(T,I);else break;I=c(z)}}function xe(j){if(oe=!1,en(j),!$e)if(c(T)!==null)$e=!0,Le(nn);else{var I=c(z);I!==null&&ue(xe,I.startTime-j)}}function nn(j,I){$e=!1,oe&&(oe=!1,kn(Ge),Ge=-1),be=!0;var B=W;try{for(en(I),F=c(T);F!==null&&(!(F.expirationTime>I)||j&&!Xn());){var p=F.callback;if(typeof p=="function"){F.callback=null,W=F.priorityLevel;var k=p(F.expirationTime<=I);I=i.unstable_now(),typeof k=="function"?F.callback=k:F===c(T)&&y(T),en(I)}else y(T);F=c(T)}if(F!==null)var U=!0;else{var $=c(z);$!==null&&ue(xe,$.startTime-I),U=!1}return U}finally{F=null,W=B,be=!1}}var je=!1,Be=null,Ge=-1,An=5,bn=-1;function Xn(){return!(i.unstable_now()-bn<An)}function hn(){if(Be!==null){var j=i.unstable_now();bn=j;var I=!0;try{I=Be(!0,j)}finally{I?Me():(je=!1,Be=null)}}else je=!1}var Me;if(typeof dn=="function")Me=function(){dn(hn)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,fn=tn.port2;tn.port1.onmessage=hn,Me=function(){fn.postMessage(null)}}else Me=function(){X(hn,0)};function Le(j){Be=j,je||(je=!0,Me())}function ue(j,I){Ge=X(function(){j(i.unstable_now())},I)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_continueExecution=function(){$e||be||($e=!0,Le(nn))},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):An=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return W},i.unstable_getFirstCallbackNode=function(){return c(T)},i.unstable_next=function(j){switch(W){case 1:case 2:case 3:var I=3;break;default:I=W}var B=W;W=I;try{return j()}finally{W=B}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(j,I){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var B=W;W=j;try{return I()}finally{W=B}},i.unstable_scheduleCallback=function(j,I,B){var p=i.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?p+B:p):B=p,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=B+k,j={id:Y++,callback:I,priorityLevel:j,startTime:B,expirationTime:k,sortIndex:-1},B>p?(j.sortIndex=B,f(z,j),c(T)===null&&j===c(z)&&(oe?(kn(Ge),Ge=-1):oe=!0,ue(xe,B-p))):(j.sortIndex=k,f(T,j),$e||be||($e=!0,Le(nn))),j},i.unstable_shouldYield=Xn,i.unstable_wrapCallback=function(j){var I=W;return function(){var B=W;W=I;try{return j.apply(this,arguments)}finally{W=B}}}})(Da)),Da}var Hu;function oh(){return Hu||(Hu=1,Aa.exports=rh()),Aa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function sh(){if(Fu)return ze;Fu=1;var i=_a(),f=oh();function c(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,N={};function E(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(N[e]=n,e=0;e<n.length;e++)y.add(n[e])}var M=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,z=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y={},F={};function W(e){return T.call(F,e)?!0:T.call(Y,e)?!1:z.test(e)?F[e]=!0:(Y[e]=!0,!1)}function be(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $e(e,n,t,r){if(n===null||typeof n>"u"||be(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function oe(e,n,t,r,o,s,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=a}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new oe(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];X[n]=new oe(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new oe(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new oe(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new oe(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new oe(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new oe(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new oe(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var kn=/[\-:]([a-z])/g;function dn(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(kn,dn);X[n]=new oe(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(kn,dn);X[n]=new oe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(kn,dn);X[n]=new oe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new oe(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function en(e,n,t,r){var o=X.hasOwnProperty(n)?X[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&($e(n,t,o,r)&&(t=null),r||o===null?W(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var xe=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nn=Symbol.for("react.element"),je=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),An=Symbol.for("react.profiler"),bn=Symbol.for("react.provider"),Xn=Symbol.for("react.context"),hn=Symbol.for("react.forward_ref"),Me=Symbol.for("react.suspense"),tn=Symbol.for("react.suspense_list"),fn=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),j=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,p;function k(e){if(p===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);p=n&&n[1]||""}return`
`+p+e}var U=!1;function $(e,n){if(!e||U)return"";U=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(w){var r=w}Reflect.construct(e,[],n)}else{try{n.call()}catch(w){r=w}e.call(n.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var o=w.stack.split(`
`),s=r.stack.split(`
`),a=o.length-1,u=s.length-1;1<=a&&0<=u&&o[a]!==s[u];)u--;for(;1<=a&&0<=u;a--,u--)if(o[a]!==s[u]){if(a!==1||u!==1)do if(a--,u--,0>u||o[a]!==s[u]){var d=`
`+o[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=u);break}}}finally{U=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function V(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1),e;case 11:return e=$(e.type.render,!1),e;case 1:return e=$(e.type,!0),e;default:return""}}function Q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Be:return"Fragment";case je:return"Portal";case An:return"Profiler";case Ge:return"StrictMode";case Me:return"Suspense";case tn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xn:return(e.displayName||"Context")+".Consumer";case bn:return(e._context.displayName||"Context")+".Provider";case hn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fn:return n=e.displayName||null,n!==null?n:Q(e.type)||"Memo";case Le:n=e._payload,e=e._init;try{return Q(e(n))}catch{}}return null}function ee(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(n);case 8:return n===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Z(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function He(e){var n=se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sr(e){e._valueTracker||(e._valueTracker=He(e))}function Fa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=se(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _o(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Wa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Z(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ua(e,n){n=n.checked,n!=null&&en(e,"checked",n,!1)}function zo(e,n){Ua(e,n);var t=Z(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Io(e,n.type,t):n.hasOwnProperty("defaultValue")&&Io(e,n.type,Z(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ka(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Io(e,n,t){(n!=="number"||Nr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var It=Array.isArray;function ft(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Z(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Mo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(c(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $a(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(c(92));if(It(t)){if(1<t.length)throw Error(c(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Z(t)}}function Ga(e,n){var t=Z(n.value),r=Z(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ya(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Va(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ho(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Va(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Qa=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oc=["Webkit","ms","Moz","O"];Object.keys(Ht).forEach(function(e){oc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ht[n]=Ht[e]})});function Ja(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ht.hasOwnProperty(e)&&Ht[e]?(""+n).trim():n+"px"}function Za(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Ja(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var sc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,n){if(n){if(sc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(c(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(c(61))}if(n.style!=null&&typeof n.style!="object")throw Error(c(62))}}function Wo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $o=null,pt=null,mt=null;function qa(e){if(e=lr(e)){if(typeof $o!="function")throw Error(c(280));var n=e.stateNode;n&&(n=Qr(n),$o(e.stateNode,e.type,n))}}function Xa(e){pt?mt?mt.push(e):mt=[e]:pt=e}function ei(){if(pt){var e=pt,n=mt;if(mt=pt=null,qa(e),n)for(e=0;e<n.length;e++)qa(n[e])}}function ni(e,n){return e(n)}function ti(){}var Go=!1;function ri(e,n,t){if(Go)return e(n,t);Go=!0;try{return ni(e,n,t)}finally{Go=!1,(pt!==null||mt!==null)&&(ti(),ei())}}function Ft(e,n){var t=e.stateNode;if(t===null)return null;var r=Qr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Yo=!1;if(M)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{Yo=!1}function ac(e,n,t,r,o,s,a,u,d){var w=Array.prototype.slice.call(arguments,3);try{n.apply(t,w)}catch(b){this.onError(b)}}var Ut=!1,jr=null,Cr=!1,Vo=null,ic={onError:function(e){Ut=!0,jr=e}};function lc(e,n,t,r,o,s,a,u,d){Ut=!1,jr=null,ac.apply(ic,arguments)}function uc(e,n,t,r,o,s,a,u,d){if(lc.apply(this,arguments),Ut){if(Ut){var w=jr;Ut=!1,jr=null}else throw Error(c(198));Cr||(Cr=!0,Vo=w)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function oi(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function si(e){if(et(e)!==e)throw Error(c(188))}function cc(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return si(o),e;if(s===r)return si(o),n;s=s.sibling}throw Error(c(188))}if(t.return!==r.return)t=o,r=s;else{for(var a=!1,u=o.child;u;){if(u===t){a=!0,t=o,r=s;break}if(u===r){a=!0,r=o,t=s;break}u=u.sibling}if(!a){for(u=s.child;u;){if(u===t){a=!0,t=s,r=o;break}if(u===r){a=!0,r=s,t=o;break}u=u.sibling}if(!a)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function ai(e){return e=cc(e),e!==null?ii(e):null}function ii(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ii(e);if(n!==null)return n;e=e.sibling}return null}var li=f.unstable_scheduleCallback,ui=f.unstable_cancelCallback,dc=f.unstable_shouldYield,hc=f.unstable_requestPaint,de=f.unstable_now,fc=f.unstable_getCurrentPriorityLevel,Qo=f.unstable_ImmediatePriority,ci=f.unstable_UserBlockingPriority,Pr=f.unstable_NormalPriority,pc=f.unstable_LowPriority,di=f.unstable_IdlePriority,Br=null,pn=null;function mc(e){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Br,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:yc,gc=Math.log,wc=Math.LN2;function yc(e){return e>>>=0,e===0?32:31-(gc(e)/wc|0)|0}var Lr=64,Ar=4194304;function Kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Dr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,a=t&268435455;if(a!==0){var u=a&~o;u!==0?r=Kt(u):(s&=a,s!==0&&(r=Kt(s)))}else a=t&~o,a!==0?r=Kt(a):s!==0&&(r=Kt(s));if(r===0)return 0;if(n!==0&&n!==r&&(n&o)===0&&(o=r&-r,s=n&-n,o>=s||o===16&&(s&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-rn(n),o=1<<t,r|=e[t],n&=~o;return r}function vc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-rn(s),u=1<<a,d=o[a];d===-1?((u&t)===0||(u&r)!==0)&&(o[a]=vc(u,n)):d<=n&&(e.expiredLanes|=u),s&=~u}}function Jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hi(){var e=Lr;return Lr<<=1,(Lr&4194240)===0&&(Lr=64),e}function Zo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function $t(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=t}function bc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-rn(t),s=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~s}}function qo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-rn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var q=0;function fi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pi,Xo,mi,gi,wi,es=!1,Rr=[],Dn=null,Rn=null,On=null,Gt=new Map,Yt=new Map,_n=[],xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yi(e,n){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Gt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function Vt(e,n,t,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},n!==null&&(n=lr(n),n!==null&&Xo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Tc(e,n,t,r,o){switch(n){case"focusin":return Dn=Vt(Dn,e,n,t,r,o),!0;case"dragenter":return Rn=Vt(Rn,e,n,t,r,o),!0;case"mouseover":return On=Vt(On,e,n,t,r,o),!0;case"pointerover":var s=o.pointerId;return Gt.set(s,Vt(Gt.get(s)||null,e,n,t,r,o)),!0;case"gotpointercapture":return s=o.pointerId,Yt.set(s,Vt(Yt.get(s)||null,e,n,t,r,o)),!0}return!1}function vi(e){var n=nt(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=oi(t),n!==null){e.blockedOn=n,wi(e.priority,function(){mi(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ts(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Uo=r,t.target.dispatchEvent(r),Uo=null}else return n=lr(t),n!==null&&Xo(n),e.blockedOn=t,!1;n.shift()}return!0}function ki(e,n,t){Or(e)&&t.delete(n)}function Sc(){es=!1,Dn!==null&&Or(Dn)&&(Dn=null),Rn!==null&&Or(Rn)&&(Rn=null),On!==null&&Or(On)&&(On=null),Gt.forEach(ki),Yt.forEach(ki)}function Qt(e,n){e.blockedOn===n&&(e.blockedOn=null,es||(es=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,Sc)))}function Jt(e){function n(o){return Qt(o,e)}if(0<Rr.length){Qt(Rr[0],e);for(var t=1;t<Rr.length;t++){var r=Rr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&Qt(Dn,e),Rn!==null&&Qt(Rn,e),On!==null&&Qt(On,e),Gt.forEach(n),Yt.forEach(n),t=0;t<_n.length;t++)r=_n[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(t=_n[0],t.blockedOn===null);)vi(t),t.blockedOn===null&&_n.shift()}var gt=xe.ReactCurrentBatchConfig,_r=!0;function Nc(e,n,t,r){var o=q,s=gt.transition;gt.transition=null;try{q=1,ns(e,n,t,r)}finally{q=o,gt.transition=s}}function Ec(e,n,t,r){var o=q,s=gt.transition;gt.transition=null;try{q=4,ns(e,n,t,r)}finally{q=o,gt.transition=s}}function ns(e,n,t,r){if(_r){var o=ts(e,n,t,r);if(o===null)vs(e,n,r,zr,t),yi(e,r);else if(Tc(o,e,n,t,r))r.stopPropagation();else if(yi(e,r),n&4&&-1<xc.indexOf(e)){for(;o!==null;){var s=lr(o);if(s!==null&&pi(s),s=ts(e,n,t,r),s===null&&vs(e,n,r,zr,t),s===o)break;o=s}o!==null&&r.stopPropagation()}else vs(e,n,r,null,t)}}var zr=null;function ts(e,n,t,r){if(zr=null,e=Ko(r),e=nt(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=oi(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zr=e,null}function bi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case Qo:return 1;case ci:return 4;case Pr:case pc:return 16;case di:return 536870912;default:return 16}default:return 16}}var zn=null,rs=null,Ir=null;function xi(){if(Ir)return Ir;var e,n=rs,t=n.length,r,o="value"in zn?zn.value:zn.textContent,s=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[s-r];r++);return Ir=o.slice(e,1<r?1-r:void 0)}function Mr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function Ti(){return!1}function Fe(e){function n(t,r,o,s,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hr:Ti,this.isPropagationStopped=Ti,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Fe(wt),Zt=B({},wt,{view:0,detail:0}),jc=Fe(Zt),ss,as,qt,Fr=B({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qt&&(qt&&e.type==="mousemove"?(ss=e.screenX-qt.screenX,as=e.screenY-qt.screenY):as=ss=0,qt=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:as}}),Si=Fe(Fr),Cc=B({},Fr,{dataTransfer:0}),Pc=Fe(Cc),Bc=B({},Zt,{relatedTarget:0}),is=Fe(Bc),Lc=B({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ac=Fe(Lc),Dc=B({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rc=Fe(Dc),Oc=B({},wt,{data:0}),Ni=Fe(Oc),_c={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ic[e])?!!n[e]:!1}function ls(){return Mc}var Hc=B({},Zt,{key:function(e){if(e.key){var n=_c[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fc=Fe(Hc),Wc=B({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ei=Fe(Wc),Uc=B({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),Kc=Fe(Uc),$c=B({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gc=Fe($c),Yc=B({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vc=Fe(Yc),Qc=[9,13,27,32],us=M&&"CompositionEvent"in window,Xt=null;M&&"documentMode"in document&&(Xt=document.documentMode);var Jc=M&&"TextEvent"in window&&!Xt,ji=M&&(!us||Xt&&8<Xt&&11>=Xt),Ci=" ",Pi=!1;function Bi(e,n){switch(e){case"keyup":return Qc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Li(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yt=!1;function Zc(e,n){switch(e){case"compositionend":return Li(n);case"keypress":return n.which!==32?null:(Pi=!0,Ci);case"textInput":return e=n.data,e===Ci&&Pi?null:e;default:return null}}function qc(e,n){if(yt)return e==="compositionend"||!us&&Bi(e,n)?(e=xi(),Ir=rs=zn=null,yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ji&&n.locale!=="ko"?null:n.data;default:return null}}var Xc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ai(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xc[e.type]:n==="textarea"}function Di(e,n,t,r){Xa(r),n=Gr(n,"onChange"),0<n.length&&(t=new os("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var er=null,nr=null;function ed(e){Zi(e,0)}function Wr(e){var n=Tt(e);if(Fa(n))return e}function nd(e,n){if(e==="change")return n}var Ri=!1;if(M){var cs;if(M){var ds="oninput"in document;if(!ds){var Oi=document.createElement("div");Oi.setAttribute("oninput","return;"),ds=typeof Oi.oninput=="function"}cs=ds}else cs=!1;Ri=cs&&(!document.documentMode||9<document.documentMode)}function _i(){er&&(er.detachEvent("onpropertychange",zi),nr=er=null)}function zi(e){if(e.propertyName==="value"&&Wr(nr)){var n=[];Di(n,nr,e,Ko(e)),ri(ed,n)}}function td(e,n,t){e==="focusin"?(_i(),er=n,nr=t,er.attachEvent("onpropertychange",zi)):e==="focusout"&&_i()}function rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wr(nr)}function od(e,n){if(e==="click")return Wr(n)}function sd(e,n){if(e==="input"||e==="change")return Wr(n)}function ad(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:ad;function tr(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!T.call(n,o)||!on(e[o],n[o]))return!1}return!0}function Ii(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mi(e,n){var t=Ii(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ii(t)}}function Hi(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hi(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fi(){for(var e=window,n=Nr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Nr(e.document)}return n}function hs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function id(e){var n=Fi(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Hi(t.ownerDocument.documentElement,t)){if(r!==null&&hs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Mi(t,s);var a=Mi(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ld=M&&"documentMode"in document&&11>=document.documentMode,vt=null,fs=null,rr=null,ps=!1;function Wi(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ps||vt==null||vt!==Nr(r)||(r=vt,"selectionStart"in r&&hs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&tr(rr,r)||(rr=r,r=Gr(fs,"onSelect"),0<r.length&&(n=new os("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=vt)))}function Ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var kt={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},ms={},Ui={};M&&(Ui=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function Kr(e){if(ms[e])return ms[e];if(!kt[e])return e;var n=kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ui)return ms[e]=n[t];return e}var Ki=Kr("animationend"),$i=Kr("animationiteration"),Gi=Kr("animationstart"),Yi=Kr("transitionend"),Vi=new Map,Qi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,n){Vi.set(e,n),E(n,[e])}for(var gs=0;gs<Qi.length;gs++){var ws=Qi[gs],ud=ws.toLowerCase(),cd=ws[0].toUpperCase()+ws.slice(1);In(ud,"on"+cd)}In(Ki,"onAnimationEnd"),In($i,"onAnimationIteration"),In(Gi,"onAnimationStart"),In("dblclick","onDoubleClick"),In("focusin","onFocus"),In("focusout","onBlur"),In(Yi,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dd=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Ji(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,uc(r,n,void 0,e),e.currentTarget=null}function Zi(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var a=r.length-1;0<=a;a--){var u=r[a],d=u.instance,w=u.currentTarget;if(u=u.listener,d!==s&&o.isPropagationStopped())break e;Ji(o,u,w),s=d}else for(a=0;a<r.length;a++){if(u=r[a],d=u.instance,w=u.currentTarget,u=u.listener,d!==s&&o.isPropagationStopped())break e;Ji(o,u,w),s=d}}}if(Cr)throw e=Vo,Cr=!1,Vo=null,e}function te(e,n){var t=n[Ns];t===void 0&&(t=n[Ns]=new Set);var r=e+"__bubble";t.has(r)||(qi(n,e,2,!1),t.add(r))}function ys(e,n,t){var r=0;n&&(r|=4),qi(t,e,r,n)}var $r="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[$r]){e[$r]=!0,y.forEach(function(t){t!=="selectionchange"&&(dd.has(t)||ys(t,!1,e),ys(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$r]||(n[$r]=!0,ys("selectionchange",!1,n))}}function qi(e,n,t,r){switch(bi(n)){case 1:var o=Nc;break;case 4:o=Ec;break;default:o=ns}t=o.bind(null,n,t,e),o=void 0,!Yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function vs(e,n,t,r,o){var s=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;a=a.return}for(;u!==null;){if(a=nt(u),a===null)return;if(d=a.tag,d===5||d===6){r=s=a;continue e}u=u.parentNode}}r=r.return}ri(function(){var w=s,b=Ko(t),x=[];e:{var v=Vi.get(e);if(v!==void 0){var C=os,L=e;switch(e){case"keypress":if(Mr(t)===0)break e;case"keydown":case"keyup":C=Fc;break;case"focusin":L="focus",C=is;break;case"focusout":L="blur",C=is;break;case"beforeblur":case"afterblur":C=is;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Si;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Pc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Kc;break;case Ki:case $i:case Gi:C=Ac;break;case Yi:C=Gc;break;case"scroll":C=jc;break;case"wheel":C=Vc;break;case"copy":case"cut":case"paste":C=Rc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ei}var A=(n&4)!==0,he=!A&&e==="scroll",m=A?v!==null?v+"Capture":null:v;A=[];for(var h=w,g;h!==null;){g=h;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=Ft(h,m),S!=null&&A.push(ar(h,S,g)))),he)break;h=h.return}0<A.length&&(v=new C(v,L,null,t,b),x.push({event:v,listeners:A}))}}if((n&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",v&&t!==Uo&&(L=t.relatedTarget||t.fromElement)&&(nt(L)||L[xn]))break e;if((C||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,C?(L=t.relatedTarget||t.toElement,C=w,L=L?nt(L):null,L!==null&&(he=et(L),L!==he||L.tag!==5&&L.tag!==6)&&(L=null)):(C=null,L=w),C!==L)){if(A=Si,S="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(A=Ei,S="onPointerLeave",m="onPointerEnter",h="pointer"),he=C==null?v:Tt(C),g=L==null?v:Tt(L),v=new A(S,h+"leave",C,t,b),v.target=he,v.relatedTarget=g,S=null,nt(b)===w&&(A=new A(m,h+"enter",L,t,b),A.target=g,A.relatedTarget=he,S=A),he=S,C&&L)n:{for(A=C,m=L,h=0,g=A;g;g=bt(g))h++;for(g=0,S=m;S;S=bt(S))g++;for(;0<h-g;)A=bt(A),h--;for(;0<g-h;)m=bt(m),g--;for(;h--;){if(A===m||m!==null&&A===m.alternate)break n;A=bt(A),m=bt(m)}A=null}else A=null;C!==null&&Xi(x,v,C,A,!1),L!==null&&he!==null&&Xi(x,he,L,A,!0)}}e:{if(v=w?Tt(w):window,C=v.nodeName&&v.nodeName.toLowerCase(),C==="select"||C==="input"&&v.type==="file")var D=nd;else if(Ai(v))if(Ri)D=sd;else{D=rd;var O=td}else(C=v.nodeName)&&C.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(D=od);if(D&&(D=D(e,w))){Di(x,D,t,b);break e}O&&O(e,v,w),e==="focusout"&&(O=v._wrapperState)&&O.controlled&&v.type==="number"&&Io(v,"number",v.value)}switch(O=w?Tt(w):window,e){case"focusin":(Ai(O)||O.contentEditable==="true")&&(vt=O,fs=w,rr=null);break;case"focusout":rr=fs=vt=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,Wi(x,t,b);break;case"selectionchange":if(ld)break;case"keydown":case"keyup":Wi(x,t,b)}var _;if(us)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else yt?Bi(e,t)&&(H="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(H="onCompositionStart");H&&(ji&&t.locale!=="ko"&&(yt||H!=="onCompositionStart"?H==="onCompositionEnd"&&yt&&(_=xi()):(zn=b,rs="value"in zn?zn.value:zn.textContent,yt=!0)),O=Gr(w,H),0<O.length&&(H=new Ni(H,e,null,t,b),x.push({event:H,listeners:O}),_?H.data=_:(_=Li(t),_!==null&&(H.data=_)))),(_=Jc?Zc(e,t):qc(e,t))&&(w=Gr(w,"onBeforeInput"),0<w.length&&(b=new Ni("onBeforeInput","beforeinput",null,t,b),x.push({event:b,listeners:w}),b.data=_))}Zi(x,n)})}function ar(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Gr(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Ft(e,t),s!=null&&r.unshift(ar(e,s,o)),s=Ft(e,n),s!=null&&r.push(ar(e,s,o))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xi(e,n,t,r,o){for(var s=n._reactName,a=[];t!==null&&t!==r;){var u=t,d=u.alternate,w=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&w!==null&&(u=w,o?(d=Ft(t,s),d!=null&&a.unshift(ar(t,d,u))):o||(d=Ft(t,s),d!=null&&a.push(ar(t,d,u)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var hd=/\r\n?/g,fd=/\u0000|\uFFFD/g;function el(e){return(typeof e=="string"?e:""+e).replace(hd,`
`).replace(fd,"")}function Yr(e,n,t){if(n=el(n),el(e)!==n&&t)throw Error(c(425))}function Vr(){}var ks=null,bs=null;function xs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ts=typeof setTimeout=="function"?setTimeout:void 0,pd=typeof clearTimeout=="function"?clearTimeout:void 0,nl=typeof Promise=="function"?Promise:void 0,md=typeof queueMicrotask=="function"?queueMicrotask:typeof nl<"u"?function(e){return nl.resolve(null).then(e).catch(gd)}:Ts;function gd(e){setTimeout(function(){throw e})}function Ss(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Jt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Jt(n)}function Mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function tl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var xt=Math.random().toString(36).slice(2),mn="__reactFiber$"+xt,ir="__reactProps$"+xt,xn="__reactContainer$"+xt,Ns="__reactEvents$"+xt,wd="__reactListeners$"+xt,yd="__reactHandles$"+xt;function nt(e){var n=e[mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[xn]||t[mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=tl(e);e!==null;){if(t=e[mn])return t;e=tl(e)}return n}e=t,t=e.parentNode}return null}function lr(e){return e=e[mn]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function Qr(e){return e[ir]||null}var Es=[],St=-1;function Hn(e){return{current:e}}function re(e){0>St||(e.current=Es[St],Es[St]=null,St--)}function ne(e,n){St++,Es[St]=e.current,e.current=n}var Fn={},Te=Hn(Fn),Ae=Hn(!1),tt=Fn;function Nt(e,n){var t=e.type.contextTypes;if(!t)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in t)o[s]=n[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function De(e){return e=e.childContextTypes,e!=null}function Jr(){re(Ae),re(Te)}function rl(e,n,t){if(Te.current!==Fn)throw Error(c(168));ne(Te,n),ne(Ae,t)}function ol(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(c(108,ee(e)||"Unknown",o));return B({},t,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,tt=Te.current,ne(Te,e),ne(Ae,Ae.current),!0}function sl(e,n,t){var r=e.stateNode;if(!r)throw Error(c(169));t?(e=ol(e,n,tt),r.__reactInternalMemoizedMergedChildContext=e,re(Ae),re(Te),ne(Te,e)):re(Ae),ne(Ae,t)}var Tn=null,qr=!1,js=!1;function al(e){Tn===null?Tn=[e]:Tn.push(e)}function vd(e){qr=!0,al(e)}function Wn(){if(!js&&Tn!==null){js=!0;var e=0,n=q;try{var t=Tn;for(q=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Tn=null,qr=!1}catch(o){throw Tn!==null&&(Tn=Tn.slice(e+1)),li(Qo,Wn),o}finally{q=n,js=!1}}return null}var Et=[],jt=0,Xr=null,eo=0,Ye=[],Ve=0,rt=null,Sn=1,Nn="";function ot(e,n){Et[jt++]=eo,Et[jt++]=Xr,Xr=e,eo=n}function il(e,n,t){Ye[Ve++]=Sn,Ye[Ve++]=Nn,Ye[Ve++]=rt,rt=e;var r=Sn;e=Nn;var o=32-rn(r)-1;r&=~(1<<o),t+=1;var s=32-rn(n)+o;if(30<s){var a=o-o%5;s=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Sn=1<<32-rn(n)+o|t<<o|r,Nn=s+e}else Sn=1<<s|t<<o|r,Nn=e}function Cs(e){e.return!==null&&(ot(e,1),il(e,1,0))}function Ps(e){for(;e===Xr;)Xr=Et[--jt],Et[jt]=null,eo=Et[--jt],Et[jt]=null;for(;e===rt;)rt=Ye[--Ve],Ye[Ve]=null,Nn=Ye[--Ve],Ye[Ve]=null,Sn=Ye[--Ve],Ye[Ve]=null}var We=null,Ue=null,ae=!1,sn=null;function ll(e,n){var t=qe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ul(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,We=e,Ue=Mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,We=e,Ue=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=rt!==null?{id:Sn,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=qe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,We=e,Ue=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ls(e){if(ae){var n=Ue;if(n){var t=n;if(!ul(e,n)){if(Bs(e))throw Error(c(418));n=Mn(t.nextSibling);var r=We;n&&ul(e,n)?ll(r,t):(e.flags=e.flags&-4097|2,ae=!1,We=e)}}else{if(Bs(e))throw Error(c(418));e.flags=e.flags&-4097|2,ae=!1,We=e}}}function cl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function no(e){if(e!==We)return!1;if(!ae)return cl(e),ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!xs(e.type,e.memoizedProps)),n&&(n=Ue)){if(Bs(e))throw dl(),Error(c(418));for(;n;)ll(e,n),n=Mn(n.nextSibling)}if(cl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ue=Mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ue=null}}else Ue=We?Mn(e.stateNode.nextSibling):null;return!0}function dl(){for(var e=Ue;e;)e=Mn(e.nextSibling)}function Ct(){Ue=We=null,ae=!1}function As(e){sn===null?sn=[e]:sn.push(e)}var kd=xe.ReactCurrentBatchConfig;function ur(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(c(309));var r=t.stateNode}if(!r)throw Error(c(147,e));var o=r,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(a){var u=o.refs;a===null?delete u[s]:u[s]=a},n._stringRef=s,n)}if(typeof e!="string")throw Error(c(284));if(!t._owner)throw Error(c(290,e))}return e}function to(e,n){throw e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function hl(e){var n=e._init;return n(e._payload)}function fl(e){function n(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function t(m,h){if(!e)return null;for(;h!==null;)n(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function o(m,h){return m=Jn(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,h,g,S){return h===null||h.tag!==6?(h=Ta(g,m.mode,S),h.return=m,h):(h=o(h,g),h.return=m,h)}function d(m,h,g,S){var D=g.type;return D===Be?b(m,h,g.props.children,S,g.key):h!==null&&(h.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Le&&hl(D)===h.type)?(S=o(h,g.props),S.ref=ur(m,h,g),S.return=m,S):(S=jo(g.type,g.key,g.props,null,m.mode,S),S.ref=ur(m,h,g),S.return=m,S)}function w(m,h,g,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Sa(g,m.mode,S),h.return=m,h):(h=o(h,g.children||[]),h.return=m,h)}function b(m,h,g,S,D){return h===null||h.tag!==7?(h=ht(g,m.mode,S,D),h.return=m,h):(h=o(h,g),h.return=m,h)}function x(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ta(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case nn:return g=jo(h.type,h.key,h.props,null,m.mode,g),g.ref=ur(m,null,h),g.return=m,g;case je:return h=Sa(h,m.mode,g),h.return=m,h;case Le:var S=h._init;return x(m,S(h._payload),g)}if(It(h)||I(h))return h=ht(h,m.mode,g,null),h.return=m,h;to(m,h)}return null}function v(m,h,g,S){var D=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return D!==null?null:u(m,h,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:return g.key===D?d(m,h,g,S):null;case je:return g.key===D?w(m,h,g,S):null;case Le:return D=g._init,v(m,h,D(g._payload),S)}if(It(g)||I(g))return D!==null?null:b(m,h,g,S,null);to(m,g)}return null}function C(m,h,g,S,D){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,u(h,m,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nn:return m=m.get(S.key===null?g:S.key)||null,d(h,m,S,D);case je:return m=m.get(S.key===null?g:S.key)||null,w(h,m,S,D);case Le:var O=S._init;return C(m,h,g,O(S._payload),D)}if(It(S)||I(S))return m=m.get(g)||null,b(h,m,S,D,null);to(h,S)}return null}function L(m,h,g,S){for(var D=null,O=null,_=h,H=h=0,ye=null;_!==null&&H<g.length;H++){_.index>H?(ye=_,_=null):ye=_.sibling;var J=v(m,_,g[H],S);if(J===null){_===null&&(_=ye);break}e&&_&&J.alternate===null&&n(m,_),h=s(J,h,H),O===null?D=J:O.sibling=J,O=J,_=ye}if(H===g.length)return t(m,_),ae&&ot(m,H),D;if(_===null){for(;H<g.length;H++)_=x(m,g[H],S),_!==null&&(h=s(_,h,H),O===null?D=_:O.sibling=_,O=_);return ae&&ot(m,H),D}for(_=r(m,_);H<g.length;H++)ye=C(_,m,H,g[H],S),ye!==null&&(e&&ye.alternate!==null&&_.delete(ye.key===null?H:ye.key),h=s(ye,h,H),O===null?D=ye:O.sibling=ye,O=ye);return e&&_.forEach(function(Zn){return n(m,Zn)}),ae&&ot(m,H),D}function A(m,h,g,S){var D=I(g);if(typeof D!="function")throw Error(c(150));if(g=D.call(g),g==null)throw Error(c(151));for(var O=D=null,_=h,H=h=0,ye=null,J=g.next();_!==null&&!J.done;H++,J=g.next()){_.index>H?(ye=_,_=null):ye=_.sibling;var Zn=v(m,_,J.value,S);if(Zn===null){_===null&&(_=ye);break}e&&_&&Zn.alternate===null&&n(m,_),h=s(Zn,h,H),O===null?D=Zn:O.sibling=Zn,O=Zn,_=ye}if(J.done)return t(m,_),ae&&ot(m,H),D;if(_===null){for(;!J.done;H++,J=g.next())J=x(m,J.value,S),J!==null&&(h=s(J,h,H),O===null?D=J:O.sibling=J,O=J);return ae&&ot(m,H),D}for(_=r(m,_);!J.done;H++,J=g.next())J=C(_,m,H,J.value,S),J!==null&&(e&&J.alternate!==null&&_.delete(J.key===null?H:J.key),h=s(J,h,H),O===null?D=J:O.sibling=J,O=J);return e&&_.forEach(function(Xd){return n(m,Xd)}),ae&&ot(m,H),D}function he(m,h,g,S){if(typeof g=="object"&&g!==null&&g.type===Be&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:e:{for(var D=g.key,O=h;O!==null;){if(O.key===D){if(D=g.type,D===Be){if(O.tag===7){t(m,O.sibling),h=o(O,g.props.children),h.return=m,m=h;break e}}else if(O.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Le&&hl(D)===O.type){t(m,O.sibling),h=o(O,g.props),h.ref=ur(m,O,g),h.return=m,m=h;break e}t(m,O);break}else n(m,O);O=O.sibling}g.type===Be?(h=ht(g.props.children,m.mode,S,g.key),h.return=m,m=h):(S=jo(g.type,g.key,g.props,null,m.mode,S),S.ref=ur(m,h,g),S.return=m,m=S)}return a(m);case je:e:{for(O=g.key;h!==null;){if(h.key===O)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){t(m,h.sibling),h=o(h,g.children||[]),h.return=m,m=h;break e}else{t(m,h);break}else n(m,h);h=h.sibling}h=Sa(g,m.mode,S),h.return=m,m=h}return a(m);case Le:return O=g._init,he(m,h,O(g._payload),S)}if(It(g))return L(m,h,g,S);if(I(g))return A(m,h,g,S);to(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(t(m,h.sibling),h=o(h,g),h.return=m,m=h):(t(m,h),h=Ta(g,m.mode,S),h.return=m,m=h),a(m)):t(m,h)}return he}var Pt=fl(!0),pl=fl(!1),ro=Hn(null),oo=null,Bt=null,Ds=null;function Rs(){Ds=Bt=oo=null}function Os(e){var n=ro.current;re(ro),e._currentValue=n}function _s(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Lt(e,n){oo=e,Ds=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Re=!0),e.firstContext=null)}function Qe(e){var n=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:n,next:null},Bt===null){if(oo===null)throw Error(c(308));Bt=e,oo.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return n}var st=null;function zs(e){st===null?st=[e]:st.push(e)}function ml(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,zs(n)):(t.next=o.next,o.next=t),n.interleaved=t,En(e,r)}function En(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Un=!1;function Is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,En(e,t)}return o=r.interleaved,o===null?(n.next=n,zs(r)):(n.next=o.next,o.next=n),r.interleaved=n,En(e,t)}function so(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qo(e,t)}}function wl(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?o=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?o=s=n:s=s.next=n}else o=s=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ao(e,n,t,r){var o=e.updateQueue;Un=!1;var s=o.firstBaseUpdate,a=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var d=u,w=d.next;d.next=null,a===null?s=w:a.next=w,a=d;var b=e.alternate;b!==null&&(b=b.updateQueue,u=b.lastBaseUpdate,u!==a&&(u===null?b.firstBaseUpdate=w:u.next=w,b.lastBaseUpdate=d))}if(s!==null){var x=o.baseState;a=0,b=w=d=null,u=s;do{var v=u.lane,C=u.eventTime;if((r&v)===v){b!==null&&(b=b.next={eventTime:C,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var L=e,A=u;switch(v=n,C=t,A.tag){case 1:if(L=A.payload,typeof L=="function"){x=L.call(C,x,v);break e}x=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=A.payload,v=typeof L=="function"?L.call(C,x,v):L,v==null)break e;x=B({},x,v);break e;case 2:Un=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[u]:v.push(u))}else C={eventTime:C,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},b===null?(w=b=C,d=x):b=b.next=C,a|=v;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;v=u,u=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(b===null&&(d=x),o.baseState=d,o.firstBaseUpdate=w,o.lastBaseUpdate=b,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else s===null&&(o.shared.lanes=0);lt|=a,e.lanes=a,e.memoizedState=x}}function yl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(c(191,o));o.call(r)}}}var cr={},gn=Hn(cr),dr=Hn(cr),hr=Hn(cr);function at(e){if(e===cr)throw Error(c(174));return e}function Ms(e,n){switch(ne(hr,n),ne(dr,e),ne(gn,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ho(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ho(n,e)}re(gn),ne(gn,n)}function At(){re(gn),re(dr),re(hr)}function vl(e){at(hr.current);var n=at(gn.current),t=Ho(n,e.type);n!==t&&(ne(dr,e),ne(gn,t))}function Hs(e){dr.current===e&&(re(gn),re(dr))}var ie=Hn(0);function io(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fs=[];function Ws(){for(var e=0;e<Fs.length;e++)Fs[e]._workInProgressVersionPrimary=null;Fs.length=0}var lo=xe.ReactCurrentDispatcher,Us=xe.ReactCurrentBatchConfig,it=0,le=null,pe=null,ge=null,uo=!1,fr=!1,pr=0,bd=0;function Se(){throw Error(c(321))}function Ks(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function $s(e,n,t,r,o,s){if(it=s,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,lo.current=e===null||e.memoizedState===null?Nd:Ed,e=t(r,o),fr){s=0;do{if(fr=!1,pr=0,25<=s)throw Error(c(301));s+=1,ge=pe=null,n.updateQueue=null,lo.current=jd,e=t(r,o)}while(fr)}if(lo.current=fo,n=pe!==null&&pe.next!==null,it=0,ge=pe=le=null,uo=!1,n)throw Error(c(300));return e}function Gs(){var e=pr!==0;return pr=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?le.memoizedState=ge=e:ge=ge.next=e,ge}function Je(){if(pe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=ge===null?le.memoizedState:ge.next;if(n!==null)ge=n,pe=e;else{if(e===null)throw Error(c(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?le.memoizedState=ge=e:ge=ge.next=e}return ge}function mr(e,n){return typeof n=="function"?n(e):n}function Ys(e){var n=Je(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=pe,o=r.baseQueue,s=t.pending;if(s!==null){if(o!==null){var a=o.next;o.next=s.next,s.next=a}r.baseQueue=o=s,t.pending=null}if(o!==null){s=o.next,r=r.baseState;var u=a=null,d=null,w=s;do{var b=w.lane;if((it&b)===b)d!==null&&(d=d.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var x={lane:b,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};d===null?(u=d=x,a=r):d=d.next=x,le.lanes|=b,lt|=b}w=w.next}while(w!==null&&w!==s);d===null?a=r:d.next=u,on(r,n.memoizedState)||(Re=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do s=o.lane,le.lanes|=s,lt|=s,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Vs(e){var n=Je(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,s=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do s=e(s,a.action),a=a.next;while(a!==o);on(s,n.memoizedState)||(Re=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function kl(){}function bl(e,n){var t=le,r=Je(),o=n(),s=!on(r.memoizedState,o);if(s&&(r.memoizedState=o,Re=!0),r=r.queue,Qs(Sl.bind(null,t,r,e),[e]),r.getSnapshot!==n||s||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,gr(9,Tl.bind(null,t,r,o,n),void 0,null),we===null)throw Error(c(349));(it&30)!==0||xl(t,n,o)}return o}function xl(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Tl(e,n,t,r){n.value=t,n.getSnapshot=r,Nl(n)&&El(e)}function Sl(e,n,t){return t(function(){Nl(n)&&El(e)})}function Nl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function El(e){var n=En(e,1);n!==null&&cn(n,e,1,-1)}function jl(e){var n=wn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},n.queue=e,e=e.dispatch=Sd.bind(null,le,e),[n.memoizedState,e]}function gr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Cl(){return Je().memoizedState}function co(e,n,t,r){var o=wn();le.flags|=e,o.memoizedState=gr(1|n,t,void 0,r===void 0?null:r)}function ho(e,n,t,r){var o=Je();r=r===void 0?null:r;var s=void 0;if(pe!==null){var a=pe.memoizedState;if(s=a.destroy,r!==null&&Ks(r,a.deps)){o.memoizedState=gr(n,t,s,r);return}}le.flags|=e,o.memoizedState=gr(1|n,t,s,r)}function Pl(e,n){return co(8390656,8,e,n)}function Qs(e,n){return ho(2048,8,e,n)}function Bl(e,n){return ho(4,2,e,n)}function Ll(e,n){return ho(4,4,e,n)}function Al(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dl(e,n,t){return t=t!=null?t.concat([e]):null,ho(4,4,Al.bind(null,n,e),t)}function Js(){}function Rl(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ks(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ol(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ks(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function _l(e,n,t){return(it&21)===0?(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=t):(on(t,n)||(t=hi(),le.lanes|=t,lt|=t,e.baseState=!0),n)}function xd(e,n){var t=q;q=t!==0&&4>t?t:4,e(!0);var r=Us.transition;Us.transition={};try{e(!1),n()}finally{q=t,Us.transition=r}}function zl(){return Je().memoizedState}function Td(e,n,t){var r=Vn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Il(e))Ml(n,t);else if(t=ml(e,n,t,r),t!==null){var o=Pe();cn(t,e,r,o),Hl(t,n,r)}}function Sd(e,n,t){var r=Vn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Il(e))Ml(n,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var a=n.lastRenderedState,u=s(a,t);if(o.hasEagerState=!0,o.eagerState=u,on(u,a)){var d=n.interleaved;d===null?(o.next=o,zs(n)):(o.next=d.next,d.next=o),n.interleaved=o;return}}catch{}finally{}t=ml(e,n,o,r),t!==null&&(o=Pe(),cn(t,e,r,o),Hl(t,n,r))}}function Il(e){var n=e.alternate;return e===le||n!==null&&n===le}function Ml(e,n){fr=uo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hl(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,qo(e,t)}}var fo={readContext:Qe,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Nd={readContext:Qe,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:Qe,useEffect:Pl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,co(4194308,4,Al.bind(null,n,e),t)},useLayoutEffect:function(e,n){return co(4194308,4,e,n)},useInsertionEffect:function(e,n){return co(4,2,e,n)},useMemo:function(e,n){var t=wn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=wn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Td.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:jl,useDebugValue:Js,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=jl(!1),n=e[0];return e=xd.bind(null,e[1]),wn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=le,o=wn();if(ae){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),we===null)throw Error(c(349));(it&30)!==0||xl(r,n,t)}o.memoizedState=t;var s={value:t,getSnapshot:n};return o.queue=s,Pl(Sl.bind(null,r,s,e),[e]),r.flags|=2048,gr(9,Tl.bind(null,r,s,t,n),void 0,null),t},useId:function(){var e=wn(),n=we.identifierPrefix;if(ae){var t=Nn,r=Sn;t=(r&~(1<<32-rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=pr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=bd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ed={readContext:Qe,useCallback:Rl,useContext:Qe,useEffect:Qs,useImperativeHandle:Dl,useInsertionEffect:Bl,useLayoutEffect:Ll,useMemo:Ol,useReducer:Ys,useRef:Cl,useState:function(){return Ys(mr)},useDebugValue:Js,useDeferredValue:function(e){var n=Je();return _l(n,pe.memoizedState,e)},useTransition:function(){var e=Ys(mr)[0],n=Je().memoizedState;return[e,n]},useMutableSource:kl,useSyncExternalStore:bl,useId:zl,unstable_isNewReconciler:!1},jd={readContext:Qe,useCallback:Rl,useContext:Qe,useEffect:Qs,useImperativeHandle:Dl,useInsertionEffect:Bl,useLayoutEffect:Ll,useMemo:Ol,useReducer:Vs,useRef:Cl,useState:function(){return Vs(mr)},useDebugValue:Js,useDeferredValue:function(e){var n=Je();return pe===null?n.memoizedState=e:_l(n,pe.memoizedState,e)},useTransition:function(){var e=Vs(mr)[0],n=Je().memoizedState;return[e,n]},useMutableSource:kl,useSyncExternalStore:bl,useId:zl,unstable_isNewReconciler:!1};function an(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Zs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var po={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Pe(),o=Vn(e),s=jn(r,o);s.payload=n,t!=null&&(s.callback=t),n=Kn(e,s,o),n!==null&&(cn(n,e,o,r),so(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Pe(),o=Vn(e),s=jn(r,o);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=Kn(e,s,o),n!==null&&(cn(n,e,o,r),so(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Pe(),r=Vn(e),o=jn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Kn(e,o,r),n!==null&&(cn(n,e,r,t),so(n,e,r))}};function Fl(e,n,t,r,o,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):n.prototype&&n.prototype.isPureReactComponent?!tr(t,r)||!tr(o,s):!0}function Wl(e,n,t){var r=!1,o=Fn,s=n.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(o=De(n)?tt:Te.current,r=n.contextTypes,s=(r=r!=null)?Nt(e,o):Fn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=po,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),n}function Ul(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&po.enqueueReplaceState(n,n.state,null)}function qs(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Is(e);var s=n.contextType;typeof s=="object"&&s!==null?o.context=Qe(s):(s=De(n)?tt:Te.current,o.context=Nt(e,s)),o.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Zs(e,n,s,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&po.enqueueReplaceState(o,o.state,null),ao(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Dt(e,n){try{var t="",r=n;do t+=V(r),r=r.return;while(r);var o=t}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:o,digest:null}}function Xs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ea(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Cd=typeof WeakMap=="function"?WeakMap:Map;function Kl(e,n,t){t=jn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){bo||(bo=!0,ma=r),ea(e,n)},t}function $l(e,n,t){t=jn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){ea(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ea(e,n),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Gl(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Cd;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Wd.bind(null,e,n,t),n.then(e,e))}function Yl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Vl(e,n,t,r,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=jn(-1,1),n.tag=2,Kn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Pd=xe.ReactCurrentOwner,Re=!1;function Ce(e,n,t,r){n.child=e===null?pl(n,null,t,r):Pt(n,e.child,t,r)}function Ql(e,n,t,r,o){t=t.render;var s=n.ref;return Lt(n,o),r=$s(e,n,t,r,s,o),t=Gs(),e!==null&&!Re?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Cn(e,n,o)):(ae&&t&&Cs(n),n.flags|=1,Ce(e,n,r,o),n.child)}function Jl(e,n,t,r,o){if(e===null){var s=t.type;return typeof s=="function"&&!xa(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Zl(e,n,s,r,o)):(e=jo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,(e.lanes&o)===0){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:tr,t(a,r)&&e.ref===n.ref)return Cn(e,n,o)}return n.flags|=1,e=Jn(s,r),e.ref=n.ref,e.return=n,n.child=e}function Zl(e,n,t,r,o){if(e!==null){var s=e.memoizedProps;if(tr(s,r)&&e.ref===n.ref)if(Re=!1,n.pendingProps=r=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Re=!0);else return n.lanes=e.lanes,Cn(e,n,o)}return na(e,n,t,r,o)}function ql(e,n,t){var r=n.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ot,Ke),Ke|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(Ot,Ke),Ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,ne(Ot,Ke),Ke|=r}else s!==null?(r=s.baseLanes|t,n.memoizedState=null):r=t,ne(Ot,Ke),Ke|=r;return Ce(e,n,o,t),n.child}function Xl(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function na(e,n,t,r,o){var s=De(t)?tt:Te.current;return s=Nt(n,s),Lt(n,o),t=$s(e,n,t,r,s,o),r=Gs(),e!==null&&!Re?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Cn(e,n,o)):(ae&&r&&Cs(n),n.flags|=1,Ce(e,n,t,o),n.child)}function eu(e,n,t,r,o){if(De(t)){var s=!0;Zr(n)}else s=!1;if(Lt(n,o),n.stateNode===null)go(e,n),Wl(n,t,r),qs(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var d=a.context,w=t.contextType;typeof w=="object"&&w!==null?w=Qe(w):(w=De(t)?tt:Te.current,w=Nt(n,w));var b=t.getDerivedStateFromProps,x=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||d!==w)&&Ul(n,a,r,w),Un=!1;var v=n.memoizedState;a.state=v,ao(n,r,a,o),d=n.memoizedState,u!==r||v!==d||Ae.current||Un?(typeof b=="function"&&(Zs(n,t,b,r),d=n.memoizedState),(u=Un||Fl(n,t,u,r,v,d,w))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),a.props=r,a.state=d,a.context=w,r=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,gl(e,n),u=n.memoizedProps,w=n.type===n.elementType?u:an(n.type,u),a.props=w,x=n.pendingProps,v=a.context,d=t.contextType,typeof d=="object"&&d!==null?d=Qe(d):(d=De(t)?tt:Te.current,d=Nt(n,d));var C=t.getDerivedStateFromProps;(b=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==x||v!==d)&&Ul(n,a,r,d),Un=!1,v=n.memoizedState,a.state=v,ao(n,r,a,o);var L=n.memoizedState;u!==x||v!==L||Ae.current||Un?(typeof C=="function"&&(Zs(n,t,C,r),L=n.memoizedState),(w=Un||Fl(n,t,w,r,v,L,d)||!1)?(b||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,L,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,L,d)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=L),a.props=r,a.state=L,a.context=d,r=w):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return ta(e,n,t,r,s,o)}function ta(e,n,t,r,o,s){Xl(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&sl(n,t,!1),Cn(e,n,s);r=n.stateNode,Pd.current=n;var u=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Pt(n,e.child,null,s),n.child=Pt(n,null,u,s)):Ce(e,n,u,s),n.memoizedState=r.state,o&&sl(n,t,!0),n.child}function nu(e){var n=e.stateNode;n.pendingContext?rl(e,n.pendingContext,n.pendingContext!==n.context):n.context&&rl(e,n.context,!1),Ms(e,n.containerInfo)}function tu(e,n,t,r,o){return Ct(),As(o),n.flags|=256,Ce(e,n,t,r),n.child}var ra={dehydrated:null,treeContext:null,retryLane:0};function oa(e){return{baseLanes:e,cachePool:null,transitions:null}}function ru(e,n,t){var r=n.pendingProps,o=ie.current,s=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ie,o&1),e===null)return Ls(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(a=r.children,e=r.fallback,s?(r=n.mode,s=n.child,a={mode:"hidden",children:a},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Co(a,r,0,null),e=ht(e,r,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=oa(t),n.memoizedState=ra,e):sa(n,a));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return Bd(e,n,a,r,u,o,t);if(s){s=r.fallback,a=n.mode,o=e.child,u=o.sibling;var d={mode:"hidden",children:r.children};return(a&1)===0&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=Jn(o,d),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?s=Jn(u,s):(s=ht(s,a,t,null),s.flags|=2),s.return=n,r.return=n,r.sibling=s,n.child=r,r=s,s=n.child,a=e.child.memoizedState,a=a===null?oa(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~t,n.memoizedState=ra,r}return s=e.child,e=s.sibling,r=Jn(s,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function sa(e,n){return n=Co({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mo(e,n,t,r){return r!==null&&As(r),Pt(n,e.child,null,t),e=sa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bd(e,n,t,r,o,s,a){if(t)return n.flags&256?(n.flags&=-257,r=Xs(Error(c(422))),mo(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=r.fallback,o=n.mode,r=Co({mode:"visible",children:r.children},o,0,null),s=ht(s,o,a,null),s.flags|=2,r.return=n,s.return=n,r.sibling=s,n.child=r,(n.mode&1)!==0&&Pt(n,e.child,null,a),n.child.memoizedState=oa(a),n.memoizedState=ra,s);if((n.mode&1)===0)return mo(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(c(419)),r=Xs(s,r,void 0),mo(e,n,a,r)}if(u=(a&e.childLanes)!==0,Re||u){if(r=we,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,En(e,o),cn(r,e,o,-1))}return ba(),r=Xs(Error(c(421))),mo(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Ud.bind(null,e),o._reactRetry=n,null):(e=s.treeContext,Ue=Mn(o.nextSibling),We=n,ae=!0,sn=null,e!==null&&(Ye[Ve++]=Sn,Ye[Ve++]=Nn,Ye[Ve++]=rt,Sn=e.id,Nn=e.overflow,rt=n),n=sa(n,r.children),n.flags|=4096,n)}function ou(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),_s(e.return,n,t)}function aa(e,n,t,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=o)}function su(e,n,t){var r=n.pendingProps,o=r.revealOrder,s=r.tail;if(Ce(e,n,r.children,t),r=ie.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ou(e,t,n);else if(e.tag===19)ou(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ie,r),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&io(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),aa(n,!1,o,t,s);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&io(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}aa(n,!0,t,null,s);break;case"together":aa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function go(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),lt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ld(e,n,t){switch(n.tag){case 3:nu(n),Ct();break;case 5:vl(n);break;case 1:De(n.type)&&Zr(n);break;case 4:Ms(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ne(ro,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ne(ie,ie.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ru(e,n,t):(ne(ie,ie.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);ne(ie,ie.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return su(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ie,ie.current),r)break;return null;case 22:case 23:return n.lanes=0,ql(e,n,t)}return Cn(e,n,t)}var au,ia,iu,lu;au=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ia=function(){},iu=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,at(gn.current);var s=null;switch(t){case"input":o=_o(e,o),r=_o(e,r),s=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),s=[];break;case"textarea":o=Mo(e,o),r=Mo(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}Fo(t,r);var a;t=null;for(w in o)if(!r.hasOwnProperty(w)&&o.hasOwnProperty(w)&&o[w]!=null)if(w==="style"){var u=o[w];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(N.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in r){var d=r[w];if(u=o!=null?o[w]:void 0,r.hasOwnProperty(w)&&d!==u&&(d!=null||u!=null))if(w==="style")if(u){for(a in u)!u.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in d)d.hasOwnProperty(a)&&u[a]!==d[a]&&(t||(t={}),t[a]=d[a])}else t||(s||(s=[]),s.push(w,t)),t=d;else w==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(s=s||[]).push(w,d)):w==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(w,""+d):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(N.hasOwnProperty(w)?(d!=null&&w==="onScroll"&&te("scroll",e),s||u===d||(s=[])):(s=s||[]).push(w,d))}t&&(s=s||[]).push("style",t);var w=s;(n.updateQueue=w)&&(n.flags|=4)}},lu=function(e,n,t,r){t!==r&&(n.flags|=4)};function wr(e,n){if(!ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Ad(e,n,t){var r=n.pendingProps;switch(Ps(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return De(n.type)&&Jr(),Ne(n),null;case 3:return r=n.stateNode,At(),re(Ae),re(Te),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sn!==null&&(ya(sn),sn=null))),ia(e,n),Ne(n),null;case 5:Hs(n);var o=at(hr.current);if(t=n.type,e!==null&&n.stateNode!=null)iu(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(c(166));return Ne(n),null}if(e=at(gn.current),no(n)){r=n.stateNode,t=n.type;var s=n.memoizedProps;switch(r[mn]=n,r[ir]=s,e=(n.mode&1)!==0,t){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(o=0;o<or.length;o++)te(or[o],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Wa(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":$a(r,s),te("invalid",r)}Fo(t,s),o=null;for(var a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&Yr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Yr(r.textContent,u,e),o=["children",""+u]):N.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&te("scroll",r)}switch(t){case"input":Sr(r),Ka(r,s,!0);break;case"textarea":Sr(r),Ya(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vr)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Va(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[mn]=n,e[ir]=r,au(e,n,!1,!1),n.stateNode=e;e:{switch(a=Wo(t,r),t){case"dialog":te("cancel",e),te("close",e),o=r;break;case"iframe":case"object":case"embed":te("load",e),o=r;break;case"video":case"audio":for(o=0;o<or.length;o++)te(or[o],e);o=r;break;case"source":te("error",e),o=r;break;case"img":case"image":case"link":te("error",e),te("load",e),o=r;break;case"details":te("toggle",e),o=r;break;case"input":Wa(e,r),o=_o(e,r),te("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),te("invalid",e);break;case"textarea":$a(e,r),o=Mo(e,r),te("invalid",e);break;default:o=r}Fo(t,o),u=o;for(s in u)if(u.hasOwnProperty(s)){var d=u[s];s==="style"?Za(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Qa(e,d)):s==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Mt(e,d):typeof d=="number"&&Mt(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(N.hasOwnProperty(s)?d!=null&&s==="onScroll"&&te("scroll",e):d!=null&&en(e,s,d,a))}switch(t){case"input":Sr(e),Ka(e,r,!1);break;case"textarea":Sr(e),Ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Z(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ft(e,!!r.multiple,s,!1):r.defaultValue!=null&&ft(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ne(n),null;case 6:if(e&&n.stateNode!=null)lu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(t=at(hr.current),at(gn.current),no(n)){if(r=n.stateNode,t=n.memoizedProps,r[mn]=n,(s=r.nodeValue!==t)&&(e=We,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[mn]=n,n.stateNode=r}return Ne(n),null;case 13:if(re(ie),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ue!==null&&(n.mode&1)!==0&&(n.flags&128)===0)dl(),Ct(),n.flags|=98560,s=!1;else if(s=no(n),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(c(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));s[mn]=n}else Ct(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ne(n),s=!1}else sn!==null&&(ya(sn),sn=null),s=!0;if(!s)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ie.current&1)!==0?me===0&&(me=3):ba())),n.updateQueue!==null&&(n.flags|=4),Ne(n),null);case 4:return At(),ia(e,n),e===null&&sr(n.stateNode.containerInfo),Ne(n),null;case 10:return Os(n.type._context),Ne(n),null;case 17:return De(n.type)&&Jr(),Ne(n),null;case 19:if(re(ie),s=n.memoizedState,s===null)return Ne(n),null;if(r=(n.flags&128)!==0,a=s.rendering,a===null)if(r)wr(s,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=io(e),a!==null){for(n.flags|=128,wr(s,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)s=t,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(ie,ie.current&1|2),n.child}e=e.sibling}s.tail!==null&&de()>_t&&(n.flags|=128,r=!0,wr(s,!1),n.lanes=4194304)}else{if(!r)if(e=io(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ae)return Ne(n),null}else 2*de()-s.renderingStartTime>_t&&t!==1073741824&&(n.flags|=128,r=!0,wr(s,!1),n.lanes=4194304);s.isBackwards?(a.sibling=n.child,n.child=a):(t=s.last,t!==null?t.sibling=a:n.child=a,s.last=a)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=de(),n.sibling=null,t=ie.current,ne(ie,r?t&1|2:t&1),n):(Ne(n),null);case 22:case 23:return ka(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Ke&1073741824)!==0&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),null;case 24:return null;case 25:return null}throw Error(c(156,n.tag))}function Dd(e,n){switch(Ps(n),n.tag){case 1:return De(n.type)&&Jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return At(),re(Ae),re(Te),Ws(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Hs(n),null;case 13:if(re(ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Ct()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return re(ie),null;case 4:return At(),null;case 10:return Os(n.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var wo=!1,Ee=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,P=null;function Rt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ce(e,n,r)}else t.current=null}function la(e,n,t){try{t()}catch(r){ce(e,n,r)}}var uu=!1;function Od(e,n){if(ks=_r,e=Fi(),hs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,u=-1,d=-1,w=0,b=0,x=e,v=null;n:for(;;){for(var C;x!==t||o!==0&&x.nodeType!==3||(u=a+o),x!==s||r!==0&&x.nodeType!==3||(d=a+r),x.nodeType===3&&(a+=x.nodeValue.length),(C=x.firstChild)!==null;)v=x,x=C;for(;;){if(x===e)break n;if(v===t&&++w===o&&(u=a),v===s&&++b===r&&(d=a),(C=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=C}t=u===-1||d===-1?null:{start:u,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(bs={focusedElem:e,selectionRange:t},_r=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var L=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(L!==null){var A=L.memoizedProps,he=L.memoizedState,m=n.stateNode,h=m.getSnapshotBeforeUpdate(n.elementType===n.type?A:an(n.type,A),he);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(S){ce(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return L=uu,uu=!1,L}function yr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&la(n,t,s)}o=o.next}while(o!==r)}}function yo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ua(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function cu(e){var n=e.alternate;n!==null&&(e.alternate=null,cu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[mn],delete n[ir],delete n[Ns],delete n[wd],delete n[yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function du(e){return e.tag===5||e.tag===3||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||du(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ca(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(ca(e,n,t),e=e.sibling;e!==null;)ca(e,n,t),e=e.sibling}function da(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,n,t),e=e.sibling;e!==null;)da(e,n,t),e=e.sibling}var ve=null,ln=!1;function $n(e,n,t){for(t=t.child;t!==null;)fu(e,n,t),t=t.sibling}function fu(e,n,t){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Br,t)}catch{}switch(t.tag){case 5:Ee||Rt(t,n);case 6:var r=ve,o=ln;ve=null,$n(e,n,t),ve=r,ln=o,ve!==null&&(ln?(e=ve,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ve.removeChild(t.stateNode));break;case 18:ve!==null&&(ln?(e=ve,t=t.stateNode,e.nodeType===8?Ss(e.parentNode,t):e.nodeType===1&&Ss(e,t),Jt(e)):Ss(ve,t.stateNode));break;case 4:r=ve,o=ln,ve=t.stateNode.containerInfo,ln=!0,$n(e,n,t),ve=r,ln=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,a=s.destroy;s=s.tag,a!==void 0&&((s&2)!==0||(s&4)!==0)&&la(t,n,a),o=o.next}while(o!==r)}$n(e,n,t);break;case 1:if(!Ee&&(Rt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){ce(t,n,u)}$n(e,n,t);break;case 21:$n(e,n,t);break;case 22:t.mode&1?(Ee=(r=Ee)||t.memoizedState!==null,$n(e,n,t),Ee=r):$n(e,n,t);break;default:$n(e,n,t)}}function pu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Rd),n.forEach(function(r){var o=Kd.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function un(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var s=e,a=n,u=a;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,ln=!1;break e;case 3:ve=u.stateNode.containerInfo,ln=!0;break e;case 4:ve=u.stateNode.containerInfo,ln=!0;break e}u=u.return}if(ve===null)throw Error(c(160));fu(s,a,o),ve=null,ln=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(w){ce(o,n,w)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mu(n,e),n=n.sibling}function mu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(un(n,e),yn(e),r&4){try{yr(3,e,e.return),yo(3,e)}catch(A){ce(e,e.return,A)}try{yr(5,e,e.return)}catch(A){ce(e,e.return,A)}}break;case 1:un(n,e),yn(e),r&512&&t!==null&&Rt(t,t.return);break;case 5:if(un(n,e),yn(e),r&512&&t!==null&&Rt(t,t.return),e.flags&32){var o=e.stateNode;try{Mt(o,"")}catch(A){ce(e,e.return,A)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,a=t!==null?t.memoizedProps:s,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&Ua(o,s),Wo(u,a);var w=Wo(u,s);for(a=0;a<d.length;a+=2){var b=d[a],x=d[a+1];b==="style"?Za(o,x):b==="dangerouslySetInnerHTML"?Qa(o,x):b==="children"?Mt(o,x):en(o,b,x,w)}switch(u){case"input":zo(o,s);break;case"textarea":Ga(o,s);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?ft(o,!!s.multiple,C,!1):v!==!!s.multiple&&(s.defaultValue!=null?ft(o,!!s.multiple,s.defaultValue,!0):ft(o,!!s.multiple,s.multiple?[]:"",!1))}o[ir]=s}catch(A){ce(e,e.return,A)}}break;case 6:if(un(n,e),yn(e),r&4){if(e.stateNode===null)throw Error(c(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(A){ce(e,e.return,A)}}break;case 3:if(un(n,e),yn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Jt(n.containerInfo)}catch(A){ce(e,e.return,A)}break;case 4:un(n,e),yn(e);break;case 13:un(n,e),yn(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(pa=de())),r&4&&pu(e);break;case 22:if(b=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(w=Ee)||b,un(n,e),Ee=w):un(n,e),yn(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!b&&(e.mode&1)!==0)for(P=e,b=e.child;b!==null;){for(x=P=b;P!==null;){switch(v=P,C=v.child,v.tag){case 0:case 11:case 14:case 15:yr(4,v,v.return);break;case 1:Rt(v,v.return);var L=v.stateNode;if(typeof L.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,L.props=n.memoizedProps,L.state=n.memoizedState,L.componentWillUnmount()}catch(A){ce(r,t,A)}}break;case 5:Rt(v,v.return);break;case 22:if(v.memoizedState!==null){yu(x);continue}}C!==null?(C.return=v,P=C):yu(x)}b=b.sibling}e:for(b=null,x=e;;){if(x.tag===5){if(b===null){b=x;try{o=x.stateNode,w?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=x.stateNode,d=x.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Ja("display",a))}catch(A){ce(e,e.return,A)}}}else if(x.tag===6){if(b===null)try{x.stateNode.nodeValue=w?"":x.memoizedProps}catch(A){ce(e,e.return,A)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;b===x&&(b=null),x=x.return}b===x&&(b=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:un(n,e),yn(e),r&4&&pu(e);break;case 21:break;default:un(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(du(t)){var r=t;break e}t=t.return}throw Error(c(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Mt(o,""),r.flags&=-33);var s=hu(e);da(e,s,o);break;case 3:case 4:var a=r.stateNode.containerInfo,u=hu(e);ca(e,u,a);break;default:throw Error(c(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _d(e,n,t){P=e,gu(e)}function gu(e,n,t){for(var r=(e.mode&1)!==0;P!==null;){var o=P,s=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||wo;if(!a){var u=o.alternate,d=u!==null&&u.memoizedState!==null||Ee;u=wo;var w=Ee;if(wo=a,(Ee=d)&&!w)for(P=o;P!==null;)a=P,d=a.child,a.tag===22&&a.memoizedState!==null?vu(o):d!==null?(d.return=a,P=d):vu(o);for(;s!==null;)P=s,gu(s),s=s.sibling;P=o,wo=u,Ee=w}wu(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,P=s):wu(e)}}function wu(e){for(;P!==null;){var n=P;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ee||yo(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ee)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:an(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&yl(n,s,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}yl(n,a,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var w=n.alternate;if(w!==null){var b=w.memoizedState;if(b!==null){var x=b.dehydrated;x!==null&&Jt(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ee||n.flags&512&&ua(n)}catch(v){ce(n,n.return,v)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function yu(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function vu(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{yo(4,n)}catch(d){ce(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(d){ce(n,o,d)}}var s=n.return;try{ua(n)}catch(d){ce(n,s,d)}break;case 5:var a=n.return;try{ua(n)}catch(d){ce(n,a,d)}}}catch(d){ce(n,n.return,d)}if(n===e){P=null;break}var u=n.sibling;if(u!==null){u.return=n.return,P=u;break}P=n.return}}var zd=Math.ceil,vo=xe.ReactCurrentDispatcher,ha=xe.ReactCurrentOwner,Ze=xe.ReactCurrentBatchConfig,G=0,we=null,fe=null,ke=0,Ke=0,Ot=Hn(0),me=0,vr=null,lt=0,ko=0,fa=0,kr=null,Oe=null,pa=0,_t=1/0,Pn=null,bo=!1,ma=null,Gn=null,xo=!1,Yn=null,To=0,br=0,ga=null,So=-1,No=0;function Pe(){return(G&6)!==0?de():So!==-1?So:So=de()}function Vn(e){return(e.mode&1)===0?1:(G&2)!==0&&ke!==0?ke&-ke:kd.transition!==null?(No===0&&(No=hi()),No):(e=q,e!==0||(e=window.event,e=e===void 0?16:bi(e.type)),e)}function cn(e,n,t,r){if(50<br)throw br=0,ga=null,Error(c(185));$t(e,t,r),((G&2)===0||e!==we)&&(e===we&&((G&2)===0&&(ko|=t),me===4&&Qn(e,ke)),_e(e,r),t===1&&G===0&&(n.mode&1)===0&&(_t=de()+500,qr&&Wn()))}function _e(e,n){var t=e.callbackNode;kc(e,n);var r=Dr(e,e===we?ke:0);if(r===0)t!==null&&ui(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ui(t),n===1)e.tag===0?vd(bu.bind(null,e)):al(bu.bind(null,e)),md(function(){(G&6)===0&&Wn()}),t=null;else{switch(fi(r)){case 1:t=Qo;break;case 4:t=ci;break;case 16:t=Pr;break;case 536870912:t=di;break;default:t=Pr}t=Pu(t,ku.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function ku(e,n){if(So=-1,No=0,(G&6)!==0)throw Error(c(327));var t=e.callbackNode;if(zt()&&e.callbackNode!==t)return null;var r=Dr(e,e===we?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Eo(e,r);else{n=r;var o=G;G|=2;var s=Tu();(we!==e||ke!==n)&&(Pn=null,_t=de()+500,ct(e,n));do try{Hd();break}catch(u){xu(e,u)}while(!0);Rs(),vo.current=s,G=o,fe!==null?n=0:(we=null,ke=0,n=me)}if(n!==0){if(n===2&&(o=Jo(e),o!==0&&(r=o,n=wa(e,o))),n===1)throw t=vr,ct(e,0),Qn(e,r),_e(e,de()),t;if(n===6)Qn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Id(o)&&(n=Eo(e,r),n===2&&(s=Jo(e),s!==0&&(r=s,n=wa(e,s))),n===1))throw t=vr,ct(e,0),Qn(e,r),_e(e,de()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(c(345));case 2:dt(e,Oe,Pn);break;case 3:if(Qn(e,r),(r&130023424)===r&&(n=pa+500-de(),10<n)){if(Dr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ts(dt.bind(null,e,Oe,Pn),n);break}dt(e,Oe,Pn);break;case 4:if(Qn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-rn(r);s=1<<a,a=n[a],a>o&&(o=a),r&=~s}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zd(r/1960))-r,10<r){e.timeoutHandle=Ts(dt.bind(null,e,Oe,Pn),r);break}dt(e,Oe,Pn);break;case 5:dt(e,Oe,Pn);break;default:throw Error(c(329))}}}return _e(e,de()),e.callbackNode===t?ku.bind(null,e):null}function wa(e,n){var t=kr;return e.current.memoizedState.isDehydrated&&(ct(e,n).flags|=256),e=Eo(e,n),e!==2&&(n=Oe,Oe=t,n!==null&&ya(n)),e}function ya(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Id(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],s=o.getSnapshot;o=o.value;try{if(!on(s(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qn(e,n){for(n&=~fa,n&=~ko,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-rn(n),r=1<<t;e[t]=-1,n&=~r}}function bu(e){if((G&6)!==0)throw Error(c(327));zt();var n=Dr(e,0);if((n&1)===0)return _e(e,de()),null;var t=Eo(e,n);if(e.tag!==0&&t===2){var r=Jo(e);r!==0&&(n=r,t=wa(e,r))}if(t===1)throw t=vr,ct(e,0),Qn(e,n),_e(e,de()),t;if(t===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,dt(e,Oe,Pn),_e(e,de()),null}function va(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(_t=de()+500,qr&&Wn())}}function ut(e){Yn!==null&&Yn.tag===0&&(G&6)===0&&zt();var n=G;G|=1;var t=Ze.transition,r=q;try{if(Ze.transition=null,q=1,e)return e()}finally{q=r,Ze.transition=t,G=n,(G&6)===0&&Wn()}}function ka(){Ke=Ot.current,re(Ot)}function ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,pd(t)),fe!==null)for(t=fe.return;t!==null;){var r=t;switch(Ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:At(),re(Ae),re(Te),Ws();break;case 5:Hs(r);break;case 4:At();break;case 13:re(ie);break;case 19:re(ie);break;case 10:Os(r.type._context);break;case 22:case 23:ka()}t=t.return}if(we=e,fe=e=Jn(e.current,null),ke=Ke=n,me=0,vr=null,fa=ko=lt=0,Oe=kr=null,st!==null){for(n=0;n<st.length;n++)if(t=st[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,s=t.pending;if(s!==null){var a=s.next;s.next=o,r.next=a}t.pending=r}st=null}return e}function xu(e,n){do{var t=fe;try{if(Rs(),lo.current=fo,uo){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}uo=!1}if(it=0,ge=pe=le=null,fr=!1,pr=0,ha.current=null,t===null||t.return===null){me=1,vr=n,fe=null;break}e:{var s=e,a=t.return,u=t,d=n;if(n=ke,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var w=d,b=u,x=b.tag;if((b.mode&1)===0&&(x===0||x===11||x===15)){var v=b.alternate;v?(b.updateQueue=v.updateQueue,b.memoizedState=v.memoizedState,b.lanes=v.lanes):(b.updateQueue=null,b.memoizedState=null)}var C=Yl(a);if(C!==null){C.flags&=-257,Vl(C,a,u,s,n),C.mode&1&&Gl(s,w,n),n=C,d=w;var L=n.updateQueue;if(L===null){var A=new Set;A.add(d),n.updateQueue=A}else L.add(d);break e}else{if((n&1)===0){Gl(s,w,n),ba();break e}d=Error(c(426))}}else if(ae&&u.mode&1){var he=Yl(a);if(he!==null){(he.flags&65536)===0&&(he.flags|=256),Vl(he,a,u,s,n),As(Dt(d,u));break e}}s=d=Dt(d,u),me!==4&&(me=2),kr===null?kr=[s]:kr.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var m=Kl(s,d,n);wl(s,m);break e;case 1:u=d;var h=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gn===null||!Gn.has(g)))){s.flags|=65536,n&=-n,s.lanes|=n;var S=$l(s,u,n);wl(s,S);break e}}s=s.return}while(s!==null)}Nu(t)}catch(D){n=D,fe===t&&t!==null&&(fe=t=t.return);continue}break}while(!0)}function Tu(){var e=vo.current;return vo.current=fo,e===null?fo:e}function ba(){(me===0||me===3||me===2)&&(me=4),we===null||(lt&268435455)===0&&(ko&268435455)===0||Qn(we,ke)}function Eo(e,n){var t=G;G|=2;var r=Tu();(we!==e||ke!==n)&&(Pn=null,ct(e,n));do try{Md();break}catch(o){xu(e,o)}while(!0);if(Rs(),G=t,vo.current=r,fe!==null)throw Error(c(261));return we=null,ke=0,me}function Md(){for(;fe!==null;)Su(fe)}function Hd(){for(;fe!==null&&!dc();)Su(fe)}function Su(e){var n=Cu(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,n===null?Nu(e):fe=n,ha.current=null}function Nu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Ad(t,n,Ke),t!==null){fe=t;return}}else{if(t=Dd(t,n),t!==null){t.flags&=32767,fe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);me===0&&(me=5)}function dt(e,n,t){var r=q,o=Ze.transition;try{Ze.transition=null,q=1,Fd(e,n,t,r)}finally{Ze.transition=o,q=r}return null}function Fd(e,n,t,r){do zt();while(Yn!==null);if((G&6)!==0)throw Error(c(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(bc(e,s),e===we&&(fe=we=null,ke=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||xo||(xo=!0,Pu(Pr,function(){return zt(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=Ze.transition,Ze.transition=null;var a=q;q=1;var u=G;G|=4,ha.current=null,Od(e,t),mu(t,e),id(bs),_r=!!ks,bs=ks=null,e.current=t,_d(t),hc(),G=u,q=a,Ze.transition=s}else e.current=t;if(xo&&(xo=!1,Yn=e,To=o),s=e.pendingLanes,s===0&&(Gn=null),mc(t.stateNode),_e(e,de()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(bo)throw bo=!1,e=ma,ma=null,e;return(To&1)!==0&&e.tag!==0&&zt(),s=e.pendingLanes,(s&1)!==0?e===ga?br++:(br=0,ga=e):br=0,Wn(),null}function zt(){if(Yn!==null){var e=fi(To),n=Ze.transition,t=q;try{if(Ze.transition=null,q=16>e?16:e,Yn===null)var r=!1;else{if(e=Yn,Yn=null,To=0,(G&6)!==0)throw Error(c(331));var o=G;for(G|=4,P=e.current;P!==null;){var s=P,a=s.child;if((P.flags&16)!==0){var u=s.deletions;if(u!==null){for(var d=0;d<u.length;d++){var w=u[d];for(P=w;P!==null;){var b=P;switch(b.tag){case 0:case 11:case 15:yr(8,b,s)}var x=b.child;if(x!==null)x.return=b,P=x;else for(;P!==null;){b=P;var v=b.sibling,C=b.return;if(cu(b),b===w){P=null;break}if(v!==null){v.return=C,P=v;break}P=C}}}var L=s.alternate;if(L!==null){var A=L.child;if(A!==null){L.child=null;do{var he=A.sibling;A.sibling=null,A=he}while(A!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&a!==null)a.return=s,P=a;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:yr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var h=e.current;for(P=h;P!==null;){a=P;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,P=g;else e:for(a=h;P!==null;){if(u=P,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:yo(9,u)}}catch(D){ce(u,u.return,D)}if(u===a){P=null;break e}var S=u.sibling;if(S!==null){S.return=u.return,P=S;break e}P=u.return}}if(G=o,Wn(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Br,e)}catch{}r=!0}return r}finally{q=t,Ze.transition=n}}return!1}function Eu(e,n,t){n=Dt(t,n),n=Kl(e,n,1),e=Kn(e,n,1),n=Pe(),e!==null&&($t(e,1,n),_e(e,n))}function ce(e,n,t){if(e.tag===3)Eu(e,e,t);else for(;n!==null;){if(n.tag===3){Eu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=Dt(t,e),e=$l(n,e,1),n=Kn(n,e,1),e=Pe(),n!==null&&($t(n,1,e),_e(n,e));break}}n=n.return}}function Wd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Pe(),e.pingedLanes|=e.suspendedLanes&t,we===e&&(ke&t)===t&&(me===4||me===3&&(ke&130023424)===ke&&500>de()-pa?ct(e,0):fa|=t),_e(e,n)}function ju(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ar,Ar<<=1,(Ar&130023424)===0&&(Ar=4194304)));var t=Pe();e=En(e,n),e!==null&&($t(e,n,t),_e(e,t))}function Ud(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ju(e,t)}function Kd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(n),ju(e,t)}var Cu;Cu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ae.current)Re=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Re=!1,Ld(e,n,t);Re=(e.flags&131072)!==0}else Re=!1,ae&&(n.flags&1048576)!==0&&il(n,eo,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;go(e,n),e=n.pendingProps;var o=Nt(n,Te.current);Lt(n,t),o=$s(null,n,r,e,o,t);var s=Gs();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,De(r)?(s=!0,Zr(n)):s=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Is(n),o.updater=po,n.stateNode=o,o._reactInternals=n,qs(n,r,e,t),n=ta(null,n,r,!0,s,t)):(n.tag=0,ae&&s&&Cs(n),Ce(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(go(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Gd(r),e=an(r,e),o){case 0:n=na(null,n,r,e,t);break e;case 1:n=eu(null,n,r,e,t);break e;case 11:n=Ql(null,n,r,e,t);break e;case 14:n=Jl(null,n,r,an(r.type,e),t);break e}throw Error(c(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),na(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),eu(e,n,r,o,t);case 3:e:{if(nu(n),e===null)throw Error(c(387));r=n.pendingProps,s=n.memoizedState,o=s.element,gl(e,n),ao(n,r,null,t);var a=n.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){o=Dt(Error(c(423)),n),n=tu(e,n,r,t,o);break e}else if(r!==o){o=Dt(Error(c(424)),n),n=tu(e,n,r,t,o);break e}else for(Ue=Mn(n.stateNode.containerInfo.firstChild),We=n,ae=!0,sn=null,t=pl(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ct(),r===o){n=Cn(e,n,t);break e}Ce(e,n,r,t)}n=n.child}return n;case 5:return vl(n),e===null&&Ls(n),r=n.type,o=n.pendingProps,s=e!==null?e.memoizedProps:null,a=o.children,xs(r,o)?a=null:s!==null&&xs(r,s)&&(n.flags|=32),Xl(e,n),Ce(e,n,a,t),n.child;case 6:return e===null&&Ls(n),null;case 13:return ru(e,n,t);case 4:return Ms(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Pt(n,null,r,t):Ce(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),Ql(e,n,r,o,t);case 7:return Ce(e,n,n.pendingProps,t),n.child;case 8:return Ce(e,n,n.pendingProps.children,t),n.child;case 12:return Ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,s=n.memoizedProps,a=o.value,ne(ro,r._currentValue),r._currentValue=a,s!==null)if(on(s.value,a)){if(s.children===o.children&&!Ae.current){n=Cn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var u=s.dependencies;if(u!==null){a=s.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=jn(-1,t&-t),d.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var b=w.pending;b===null?d.next=d:(d.next=b.next,b.next=d),w.pending=d}}s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),_s(s.return,t,n),u.lanes|=t;break}d=d.next}}else if(s.tag===10)a=s.type===n.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(c(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),_s(a,t,n),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===n){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ce(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Lt(n,t),o=Qe(o),r=r(o),n.flags|=1,Ce(e,n,r,t),n.child;case 14:return r=n.type,o=an(r,n.pendingProps),o=an(r.type,o),Jl(e,n,r,o,t);case 15:return Zl(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:an(r,o),go(e,n),n.tag=1,De(r)?(e=!0,Zr(n)):e=!1,Lt(n,t),Wl(n,r,o),qs(n,r,o,t),ta(null,n,r,!0,e,t);case 19:return su(e,n,t);case 22:return ql(e,n,t)}throw Error(c(156,n.tag))};function Pu(e,n){return li(e,n)}function $d(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,t,r){return new $d(e,n,t,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gd(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hn)return 11;if(e===fn)return 14}return 2}function Jn(e,n){var t=e.alternate;return t===null?(t=qe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function jo(e,n,t,r,o,s){var a=2;if(r=e,typeof e=="function")xa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Be:return ht(t.children,o,s,n);case Ge:a=8,o|=8;break;case An:return e=qe(12,t,n,o|2),e.elementType=An,e.lanes=s,e;case Me:return e=qe(13,t,n,o),e.elementType=Me,e.lanes=s,e;case tn:return e=qe(19,t,n,o),e.elementType=tn,e.lanes=s,e;case ue:return Co(t,o,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bn:a=10;break e;case Xn:a=9;break e;case hn:a=11;break e;case fn:a=14;break e;case Le:a=16,r=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return n=qe(a,t,n,o),n.elementType=e,n.type=r,n.lanes=s,n}function ht(e,n,t,r){return e=qe(7,e,r,n),e.lanes=t,e}function Co(e,n,t,r){return e=qe(22,e,r,n),e.elementType=ue,e.lanes=t,e.stateNode={isHidden:!1},e}function Ta(e,n,t){return e=qe(6,e,null,n),e.lanes=t,e}function Sa(e,n,t){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yd(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Na(e,n,t,r,o,s,a,u,d){return e=new Yd(e,n,t,u,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=qe(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Is(s),e}function Vd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:je,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Bu(e){if(!e)return Fn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(c(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(De(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(c(171))}if(e.tag===1){var t=e.type;if(De(t))return ol(e,t,n)}return n}function Lu(e,n,t,r,o,s,a,u,d){return e=Na(t,r,!0,e,o,s,a,u,d),e.context=Bu(null),t=e.current,r=Pe(),o=Vn(t),s=jn(r,o),s.callback=n??null,Kn(t,s,o),e.current.lanes=o,$t(e,o,r),_e(e,r),e}function Po(e,n,t,r){var o=n.current,s=Pe(),a=Vn(o);return t=Bu(t),n.context===null?n.context=t:n.pendingContext=t,n=jn(s,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Kn(o,n,a),e!==null&&(cn(e,o,a,s),so(e,o,a)),a}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Au(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ea(e,n){Au(e,n),(e=e.alternate)&&Au(e,n)}function Qd(){return null}var Du=typeof reportError=="function"?reportError:function(e){console.error(e)};function ja(e){this._internalRoot=e}Lo.prototype.render=ja.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));Po(e,n,null,null)},Lo.prototype.unmount=ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ut(function(){Po(null,e,null,null)}),n[xn]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var n=gi();e={blockedOn:null,target:e,priority:n};for(var t=0;t<_n.length&&n!==0&&n<_n[t].priority;t++);_n.splice(t,0,e),t===0&&vi(e)}};function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Jd(e,n,t,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var w=Bo(a);s.call(w)}}var a=Lu(n,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=a,e[xn]=a.current,sr(e.nodeType===8?e.parentNode:e),ut(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var w=Bo(d);u.call(w)}}var d=Na(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=d,e[xn]=d.current,sr(e.nodeType===8?e.parentNode:e),ut(function(){Po(n,d,t,r)}),d}function Do(e,n,t,r,o){var s=t._reactRootContainer;if(s){var a=s;if(typeof o=="function"){var u=o;o=function(){var d=Bo(a);u.call(d)}}Po(n,a,e,o)}else a=Jd(t,n,e,o,r);return Bo(a)}pi=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Kt(n.pendingLanes);t!==0&&(qo(n,t|1),_e(n,de()),(G&6)===0&&(_t=de()+500,Wn()))}break;case 13:ut(function(){var r=En(e,1);if(r!==null){var o=Pe();cn(r,e,1,o)}}),Ea(e,1)}},Xo=function(e){if(e.tag===13){var n=En(e,134217728);if(n!==null){var t=Pe();cn(n,e,134217728,t)}Ea(e,134217728)}},mi=function(e){if(e.tag===13){var n=Vn(e),t=En(e,n);if(t!==null){var r=Pe();cn(t,e,n,r)}Ea(e,n)}},gi=function(){return q},wi=function(e,n){var t=q;try{return q=e,n()}finally{q=t}},$o=function(e,n,t){switch(n){case"input":if(zo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Qr(r);if(!o)throw Error(c(90));Fa(r),zo(r,o)}}}break;case"textarea":Ga(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}},ni=va,ti=ut;var Zd={usingClientEntryPoint:!1,Events:[lr,Tt,Qr,Xa,ei,va]},xr={findFiberByHostInstance:nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qd={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ai(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||Qd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Br=Ro.inject(qd),pn=Ro}catch{}}return ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zd,ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ca(n))throw Error(c(200));return Vd(e,n,null,t)},ze.createRoot=function(e,n){if(!Ca(e))throw Error(c(299));var t=!1,r="",o=Du;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Na(e,1,!1,null,null,t,!1,r,o),e[xn]=n.current,sr(e.nodeType===8?e.parentNode:e),new ja(n)},ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=ai(n),e=e===null?null:e.stateNode,e},ze.flushSync=function(e){return ut(e)},ze.hydrate=function(e,n,t){if(!Ao(n))throw Error(c(200));return Do(null,e,n,!0,t)},ze.hydrateRoot=function(e,n,t){if(!Ca(e))throw Error(c(405));var r=t!=null&&t.hydratedSources||null,o=!1,s="",a=Du;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Lu(n,null,e,1,t??null,o,!1,s,a),e[xn]=n.current,sr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Lo(n)},ze.render=function(e,n,t){if(!Ao(n))throw Error(c(200));return Do(null,e,n,!1,t)},ze.unmountComponentAtNode=function(e){if(!Ao(e))throw Error(c(40));return e._reactRootContainer?(ut(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1},ze.unstable_batchedUpdates=va,ze.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ao(t))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Do(e,n,t,!1,r)},ze.version="18.3.1-next-f1338f8080-20240426",ze}var Wu;function ah(){if(Wu)return La.exports;Wu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(f){console.error(f)}}return i(),La.exports=sh(),La.exports}var Uu;function ih(){if(Uu)return Oo;Uu=1;var i=ah();return Oo.createRoot=i.createRoot,Oo.hydrateRoot=i.hydrateRoot,Oo}var lh=ih();const za="/fantasy/data/",Ia=i=>fetch(i).then(f=>f.ok?f.json():Promise.reject(new Error(`${f.status} ${i}`))),uh=()=>Ia(`${za}books/index.json`),ch=i=>Ia(`${za}books/${i}/index.json`),dh=(i,f)=>Ia(`${za}books/${i}/w${f}.json`);async function hh(i){const{weeks:f}=await ch(i),c=await Promise.all(f.map(y=>dh(i,y)));return{weeks:f,sheets:c}}function Ku(i){if(!i)return null;const f=i[0]==="−"||i[0]==="-",c=Number(i.slice(1));return Number.isFinite(c)?f?c/(c+100):100/(c+100):null}function Ma({now:i,was:f,prefix:c=""}){if(!i||!f||i===f)return null;const y=Ku(f),N=Ku(i);if(y==null||N==null)return null;const E=N>y;return l.jsxs("span",{className:`bk-move ${E?"up":"down"}`,children:[E?"▲":"▼"," ",c,f," → ",i]})}const $u=864e5;function Gu(i,f=Date.now()){if(!i)return null;const c=Date.parse(`${i.start}T00:00:00Z`),y=Date.parse(`${i.payout}T00:00:00Z`),N=Math.max(0,Math.min(f,y)-c)/$u,E=(y-c)/$u,R=M=>i.principal*((1+i.apy)**(M/365)-1);return{now:R(N),atPayout:R(E),days:Math.floor(N),totalDays:Math.round(E),apy:i.apy,principal:i.principal,settled:f>=y}}const Ra=i=>i.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),fh=i=>i.money.reduce((f,c)=>f+c.pct,0);function ph({standings:i,payingPlaces:f,structure:c,stakes:y,Panel:N}){const E=i[0].dist.length,R=new Set(f),M=c==="winner-take-all";return l.jsxs(N,{title:"PROJECTED STANDINGS",blurb:M?"Where every seat actually finishes, across 25,000 simulated seasons. The gold block is first place — the only finish in this league worth money. Everything to the right of it is the same season with nothing at the end of it.":"Where every seat actually finishes, across 25,000 simulated seasons. The gold blocks are the four finishes that pay; the wider a seat's gold, the more often its season ends with money. Hover any block for the price on that exact finish.",children:[l.jsxs("div",{className:"fb-standings",children:[l.jsxs("div",{className:"fb-st-head",children:[l.jsx("span",{className:"fb-st-rank",children:"#"}),l.jsx("span",{className:"fb-st-seat",children:"SEAT"}),l.jsx("span",{className:"fb-st-num",children:"PROJ"}),l.jsx("span",{className:"fb-st-num",children:"RECORD"}),l.jsx("span",{className:"fb-st-num",children:"PTS"}),l.jsxs("span",{className:"fb-st-dist",children:["FINISH DISTRIBUTION — 1ST (",E,"TH) "]}),l.jsx("span",{className:"fb-st-num",children:M?"WINS":"MONEY"}),l.jsx("span",{className:"fb-st-num",children:"LAST"})]}),i.map(T=>l.jsxs("div",{className:"fb-st-row",children:[l.jsx("span",{className:"fb-st-rank",children:T.rank}),l.jsxs("span",{className:"fb-st-seat",children:[l.jsx("span",{className:"fb-st-team",children:T.team}),l.jsx("span",{className:"fb-st-mgr",children:T.manager})]}),l.jsx("span",{className:"fb-st-num strong",children:T.projFinish.toFixed(1)}),l.jsxs("span",{className:"fb-st-num",children:[T.projWins.toFixed(1),"–",T.projLosses.toFixed(1)]}),l.jsx("span",{className:"fb-st-num",children:T.projPoints.toLocaleString("en-US")}),l.jsx("span",{className:"fb-st-dist",children:T.dist.map((z,Y)=>{const F=Y+1,W=T.money.find(be=>be.place===F);return l.jsx("span",{className:R.has(F)?"fb-seg pays":"fb-seg",style:{flexGrow:Math.max(z,.15)},title:W?`${Yu(F)} — ${W.label} — ${W.pct}% — ${W.price}`:`${Yu(F)} — ${z}%${F===E?" — last":""}`},F)})}),l.jsxs("span",{className:"fb-st-num strong",children:[fh(T).toFixed(1),"%"]}),l.jsxs("span",{className:"fb-st-num dim",children:[T.last,"%"]})]},T.rosterId))]}),l.jsxs("p",{className:"fb-note",children:["PROJ is the average finishing place across every simulated season, so it moves before any single market does — a seat can drift from 6.4 to 6.9 without its championship price changing at all."," ",M?"Only first place pays in this league, so the MONEY column is the championship number.":"MONEY is the chance of finishing in one of the four paying places — first, second, third, or fourth exactly."]})]})}const Yu=i=>`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`;function mh({sheet:i,prev:f,Panel:c}){const{futures:y,stakes:N}=i,E=y.structure==="winner-take-all",R=z=>y.markets.find(Y=>Y.key===z),M=z=>{var Y,F,W;return(W=(F=(Y=f==null?void 0:f.futures)==null?void 0:Y.markets)==null?void 0:F.find(be=>be.key===z))==null?void 0:W.rows},T=({market:z,blurb:Y,compact:F})=>{const W=R(z);return W?l.jsx(c,{title:W.pays?`${W.name} — PAYS ${W.pays.toUpperCase()}`:W.name,blurb:W.copy??Y,children:l.jsx(gh,{rows:W.rows,prevRows:M(z),compact:F})}):null};return l.jsxs(l.Fragment,{children:[l.jsx(ph,{standings:y.standings,payingPlaces:y.payingPlaces,structure:y.structure,stakes:N,Panel:c}),l.jsx(T,{market:"championship",blurb:E?`${N.pot}, winner take all. Nobody else gets a cent, which makes this the entire financial book — every other market on this sheet is pride.`:"The headline, and the only board here that is not a slice of the table above: winning the bracket is not the same question as finishing high, because three playoff weeks are three more coin flips."}),!E&&l.jsx(wh,{sheet:i,Panel:c}),l.jsx(T,{market:"lastPlace"}),l.jsx(c,{title:"SEASON WIN TOTALS",blurb:"Over/under on regular-season wins, per seat. The line is the half-win the simulated seasons split closest to evenly; unlike a weekly total, wins are integers, so these are priced on the real number rather than posted flat.",children:l.jsx("div",{className:"fb-wintotals",children:[...y.winTotals].sort((z,Y)=>Y.expected-z.expected).map(z=>l.jsxs("div",{className:"fb-wintotal",children:[l.jsx("span",{className:"fb-wintotal-name",children:z.team}),l.jsx("span",{className:"fb-wintotal-line",children:z.line.toFixed(1)}),l.jsxs("span",{className:"fb-wintotal-prices",children:["O ",z.over," · U ",z.under]}),l.jsxs("span",{className:"fb-wintotal-exp",children:[z.expected," proj"]})]},z.rosterId))})})]})}function gh({rows:i,prevRows:f,compact:c}){const y=Math.max(...i.map(N=>N.pct),1);return l.jsx("div",{className:"fb-runners",children:i.map((N,E)=>{var R;return l.jsxs("div",{className:E===0?"fb-runner lead":"fb-runner",children:[l.jsxs("span",{className:"fb-runner-main",children:[l.jsx("span",{className:"fb-runner-team",children:N.team}),l.jsx("span",{className:"fb-bar",style:{width:`${N.pct/y*100}%`}}),!c&&l.jsx("span",{className:"fb-runner-mgr",children:N.manager})]}),l.jsxs("span",{className:"fb-runner-pct",children:[N.pct,"%"]}),l.jsxs("span",{className:"bk-line-right",children:[l.jsx(Ma,{now:N.price,was:(R=f==null?void 0:f.find(M=>M.rosterId===N.rosterId))==null?void 0:R.price}),l.jsx("span",{className:"bk-price",children:N.price??"OFF"})]})]},N.rosterId)})})}function wh({sheet:i,Panel:f}){var E,R;const c=i.stakes.hysa,[y,N]=Ln.useState(()=>Gu(c));return Ln.useEffect(()=>{if(!c)return;const M=setInterval(()=>N(Gu(c)),6e4);return()=>clearInterval(M)},[c]),l.jsx(f,{title:"THE INTEREST — 4TH EXACTLY",blurb:c?`First takes ${(E=i.stakes.payouts[0])==null?void 0:E.label}, second ${(R=i.stakes.payouts[1])==null?void 0:R.label}, third gets the buy-in back. Fourth gets the interest the pot has earned sitting in a savings account at ${(c.apy*100).toFixed(2)}% APY. That is a real prize, this is what it is worth right now, and the fourth block of every bar above is who is most likely to collect it.`:"Fourth place, exactly.",children:y&&l.jsxs("div",{className:"fb-headline",children:[l.jsxs("span",{children:[l.jsx("span",{className:"fb-headline-label",children:Ra(y.now)}),l.jsxs("span",{className:"fb-headline-copy",children:["accrued on ",Ra(y.principal)," over ",y.days," of ",y.totalDays," days ·"," ",y.settled?"final":`${Ra(y.atPayout)} if it runs to payout`]})]}),l.jsx("span",{className:"fb-headline-price",children:"4TH"})]})})}let yh=0;const Xe=()=>`md${yh++}`;function vn({text:i,className:f}){if(!i)return null;const c=i.trim().split(/\n{2,}/);return l.jsx("div",{className:f,children:c.map(y=>tc(y))})}function tc(i){const f=i.split(`
`);if(/^###\s/.test(f[0])){const c=l.jsx("h3",{className:"md-h3",children:Bn(f[0].replace(/^###\s+/,""))},Xe());return f.length>1?[c,tc(f.slice(1).join(`
`))]:c}return/^(---|\*\*\*)$/.test(f[0].trim())?l.jsx("hr",{className:"md-hr"},Xe()):f.every(c=>/^>\s?/.test(c))?l.jsx("blockquote",{className:"md-quote",children:Bn(f.map(c=>c.replace(/^>\s?/,"")).join(" "))},Xe()):f.every(c=>/^[-*]\s+/.test(c))?l.jsx("ul",{className:"md-list",children:f.map(c=>l.jsx("li",{children:Bn(c.replace(/^[-*]\s+/,""))},Xe()))},Xe()):f.every(c=>/^\d+\.\s+/.test(c))?l.jsx("ol",{className:"md-list",children:f.map(c=>l.jsx("li",{children:Bn(c.replace(/^\d+\.\s+/,""))},Xe()))},Xe()):l.jsx("p",{className:"md-p",children:Bn(f.join(" "))},Xe())}const vh=[{re:/`([^`]+)`/,render:i=>l.jsx("code",{className:"md-code",children:i[1]},Xe())},{re:/\*\*([^*]+)\*\*/,render:i=>l.jsx("strong",{children:Bn(i[1])},Xe())},{re:/(?:\*|_)([^*_]+)(?:\*|_)/,render:i=>l.jsx("em",{children:Bn(i[1])},Xe())},{re:/\[([^\]]+)\]\(([^)]+)\)/,render:i=>l.jsx("a",{className:"bk-link",href:i[2],children:Bn(i[1])},Xe())}];function Bn(i){let f=null;for(const N of vh){const E=i.match(N.re);E&&(f==null||E.index<f.at.index)&&(f={rule:N,at:E})}if(!f)return i;const{rule:c,at:y}=f;return[i.slice(0,y.index),c.render(y),...[].concat(Bn(i.slice(y.index+y[0].length)))]}function kh({settled:i,punishment:f,Panel:c,note:y,benchNote:N}){const{reportCard:E}=i;return l.jsxs(l.Fragment,{children:[l.jsxs(c,{title:`HOW WEEK ${i.week} SETTLED`,blurb:y?null:"Final scores against the lines this book posted last Wednesday. Side A is the side that was favoured.",children:[y&&l.jsx(vn,{text:y,className:"fb-prose-cols"}),l.jsxs("div",{className:"fb-settled-head",children:[l.jsx("span",{children:"RESULT"}),l.jsx("span",{children:"LINE"}),l.jsx("span",{className:"spread",children:"ATS"}),l.jsx("span",{className:"total",children:"TOTAL"})]}),l.jsx("div",{className:"fb-card",children:i.matchups.map(R=>l.jsx(bh,{m:R},`${R.a.rosterId}-${R.b.rosterId}`))}),l.jsxs("div",{className:"fb-report",children:[l.jsx("h3",{className:"fb-report-title",children:"THE MODEL'S REPORT CARD"}),l.jsxs("div",{className:"fb-report-grid",children:[l.jsx(Oa,{label:"FAVOURITES SU",record:E.straightUp}),l.jsx(Oa,{label:"FAVOURITES ATS",record:E.ats}),l.jsx(Oa,{label:"TOTALS — OVER",record:E.total}),l.jsxs("div",{className:"fb-report-cell",children:[l.jsx("span",{className:"fb-report-num",children:E.brier.toFixed(3)}),l.jsx("span",{className:"fb-report-label",children:"BRIER SCORE"}),l.jsxs("span",{className:"fb-report-note",children:[E.brier<E.coinFlip?"better":"worse"," than ",E.coinFlip.toFixed(2),", which is what you score by calling every game a coin flip"]})]})]}),l.jsxs("p",{className:"fb-note",children:["The book expected ",E.expectedChalkWins.toFixed(2)," of its ",E.games," favourites to win. "," ",E.straightUp.w," did. Prices are graded on the fair probability, before the house margin — the margin is the book's edge, not the model's opinion."]})]})]}),l.jsxs("div",{className:"fb-grid2",children:[l.jsxs(c,{title:`${i.punishment.low.name} — SETTLED`,blurb:f.weekly.copy,children:[l.jsx(Vu,{outcome:i.punishment.low,verb:"took it",copy:i.punishment.low.hitFavourite?"The board's own favourite. The book called this one.":`Priced ${i.punishment.low.price}, ${Zu(i.punishment.low.rank)} of ${i.punishment.low.of} on the board.`}),i.punishment.high&&l.jsx(Vu,{outcome:i.punishment.high,verb:"picks",copy:`${i.punishment.high.name} — ${i.punishment.high.price} on the board, ${Zu(i.punishment.high.rank)} of ${i.punishment.high.of}.`}),i.punishment.joint&&l.jsx("p",{className:"fb-note",children:i.punishment.joint.hit?l.jsxs(l.Fragment,{children:["The joint ",l.jsx("b",{children:"hit"})," at ",i.punishment.joint.hit.price,". It was one of"," ",i.punishment.joint.offered," priced pairings out of"," ",i.punishment.joint.offered>1?"dozens":"many"," possible."]}):l.jsxs(l.Fragment,{children:["None of the ",i.punishment.joint.offered," featured joints hit — the pairing that landed was"," ",i.punishment.joint.low.team," and ",i.punishment.joint.high.team,", which the sheet did not print."]})})]}),l.jsxs(c,{title:"POINTS LEFT ON THE BENCH",blurb:"Every line on last week's sheet assumed an optimal lineup. This is what that assumption actually cost, scored on real points — the model's own §5.4 bias, measured rather than disclosed.",children:[N&&l.jsx(vn,{text:N,className:"fb-panel-prose"}),l.jsx("div",{className:"fb-bench",children:i.bench.slice(0,5).map((R,M)=>l.jsxs("div",{className:M===0?"fb-bench-row lead":"fb-bench-row",children:[l.jsxs("span",{className:"fb-bench-main",children:[l.jsx("span",{className:"fb-runner-team",children:R.team}),l.jsxs("span",{className:"fb-runner-mgr",children:[R.points.toFixed(2)," of a possible ",R.best.toFixed(2),R.missed.length>0&&l.jsxs(l.Fragment,{children:[" · benched ",R.missed.map(T=>`${T.name} ${T.points.toFixed(1)}`).join(", ")]})]})]}),l.jsxs("span",{className:"bk-price",children:["−",R.left.toFixed(1)]})]},R.rosterId))})]})]})]})}const Oa=({label:i,record:f})=>l.jsxs("div",{className:"fb-report-cell",children:[l.jsxs("span",{className:"fb-report-num",children:[f.w,"–",f.l,f.p?`–${f.p}`:""]}),l.jsx("span",{className:"fb-report-label",children:i})]}),Vu=({outcome:i,verb:f,copy:c})=>l.jsxs("div",{className:"fb-verdict",children:[l.jsxs("span",{className:"fb-slip-text",children:[l.jsx("b",{children:i.team})," ",f," — ",i.points.toFixed(2),l.jsxs("span",{className:"fb-slip-note",children:[i.manager," · ",c]})]}),l.jsx("span",{className:"bk-price",children:i.price??"—"})]});function bh({m:i}){return i.played?l.jsxs("div",{className:"fb-settled",children:[l.jsxs("div",{className:"fb-seats",children:[l.jsx(Qu,{seat:i.a,points:i.a.points,won:i.winner==="a",push:i.winner==="push"}),l.jsx(Qu,{seat:i.b,points:i.b.points,won:i.winner==="b",push:i.winner==="push"})]}),l.jsxs("div",{className:"fb-cell",children:[l.jsx("span",{className:"fb-odds",children:i.posted.moneyline.a}),l.jsx(Ju,{hit:i.winner==="a",push:i.winner==="push"})]}),l.jsxs("div",{className:"fb-cell spread",children:[l.jsx("span",{className:"fb-odds",children:i.posted.spread.a}),l.jsx(Ju,{hit:i.ats==="a",push:i.ats==="push"})]}),l.jsxs("div",{className:"fb-cell total",children:[l.jsx("span",{className:"fb-odds",children:i.total.toFixed(1)}),l.jsxs("span",{className:"fb-settled-sub",children:[i.ou==="push"?"push":i.ou==="a"?"over":"under"," ",i.posted.total.line.toFixed(1)]})]})]}):null}const Qu=({seat:i,points:f,won:c,push:y})=>l.jsxs("span",{className:c?"fb-seat fav":"fb-seat",children:[l.jsx("span",{className:"fb-seat-name",children:i.team}),l.jsxs("span",{className:"fb-seat-mgr",children:[i.manager,y?" · tie":""]}),l.jsx("span",{className:"fb-seat-proj",children:f.toFixed(2)})]}),Ju=({hit:i,push:f})=>l.jsx("span",{className:f?"fb-mark push":i?"fb-mark hit":"fb-mark miss",children:f?"PUSH":i?"✓":"✗"}),Zu=i=>i==null?"unpriced":`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`,xh=`---
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
`,Th=`---
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
`,Sh=`---
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
`,Nh=`---
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
`,Eh=`---
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
`,jh=`---
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
`,Ch=`---
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
`,Ph=`---
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
`,Bh=`---
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
`,Lh=`---
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
`,Ah=`---
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
`,Dh=`---
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
`,qu=Object.assign({"../content/dkenasty/w2.md":xh,"../content/dkenasty/w3.md":Th,"../content/dkenasty/w4.md":Sh,"../content/dkenasty/w5.md":Nh,"../content/loog/w2.md":Eh,"../content/loog/w3.md":jh,"../content/loog/w4.md":Ch,"../content/loog/w5.md":Ph,"../content/nicks/w2.md":Bh,"../content/nicks/w3.md":Lh,"../content/nicks/w4.md":Ah,"../content/nicks/w5.md":Dh}),Rh=/^[a-z][a-z0-9-]*(:\d+-\d+)?$/,Oh=/\/content\/([^/]+)\/w(\d+)\.md$/,rc=new Map;for(const i in qu){const f=i.match(Oh);f&&rc.set(`${f[1]}/w${f[2]}`,zh(qu[i]))}const _h=(i,f)=>rc.get(`${i}/w${f}`)??null;function zh(i){const{meta:f,body:c}=Mh(i.replace(/\r\n/g,`
`)),y=c.replace(/<!--[\s\S]*?-->/g,""),N=[];let E={id:"lede",title:null,lines:[]};for(const T of y.split(`
`)){const z=T.match(/^##\s+(.+?)\s*$/);if(!z){E.lines.push(T);continue}N.push(E);const Y=z[1],F=Y.toLowerCase();E=Rh.test(F)?{id:F,title:null,lines:[]}:{id:null,title:Y,lines:[]}}N.push(E);const R=new Map,M=[];for(const T of N){const z=T.lines.join(`
`).trim();z&&(T.id?R.set(T.id,z):M.push({title:T.title,text:z}))}return{meta:f,slots:R,panels:M}}const Ih=(i,f,c)=>(i==null?void 0:i.slots.get(`matchup:${f}-${c}`))??(i==null?void 0:i.slots.get(`matchup:${c}-${f}`))??null,Ie=(i,f)=>(i==null?void 0:i.slots.get(f))??null;function Mh(i){const f=i.match(/^---\n([\s\S]*?)\n---\n?/);if(!f)return{meta:{},body:i};const c={};for(const y of f[1].split(`
`)){const N=y.match(/^([A-Za-z][\w-]*):\s*(.*)$/);N&&(c[N[1]]=N[2].replace(/^["']|["']$/g,"").trim())}return{meta:c,body:i.slice(f[0].length)}}function Hh({bookId:i,week:f,view:c}){const[y,N]=Ln.useState({status:"loading"}),[E,R]=Ln.useState(0);return Ln.useEffect(()=>{let M=!0;const T=z=>M&&N(z);return i?hh(i).then(({weeks:z,sheets:Y})=>{T({status:"ok",weeks:z,sheets:Y});const F=f!=null?z.indexOf(f):-1;R(F>=0?F:z.length-1)}).catch(()=>T({status:"error"})):uh().then(z=>T({status:"ok",index:z})).catch(()=>T({status:"error"})),()=>{M=!1}},[i,f]),l.jsxs("div",{className:"book-root",children:[l.jsx("div",{className:"bk-backbar",children:l.jsx("a",{className:"bk-back",href:"?book",children:"← The lobby"})}),l.jsxs("div",{className:"book-wrap",children:[y.status==="loading"&&l.jsx("p",{className:"state-msg",children:"Opening the book…"}),y.status==="error"&&l.jsxs("p",{className:"state-msg",children:["No sheet posted for this league. ",l.jsx("a",{className:"bk-link",href:"?book",children:"Back to the lobby"})]}),y.status==="ok"&&y.index&&l.jsx(Fh,{index:y.index}),y.status==="ok"&&y.sheets&&l.jsx(Kh,{sheet:y.sheets[E],prev:E>0?y.sheets[E-1]:null,weeks:y.weeks,cur:E,view:c,onNav:R})]})]})}function Fh({index:i}){return Ln.useEffect(()=>{document.title="The Fantasy Book"},[]),l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:"bk-head",children:[l.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),l.jsx("h1",{className:"bk-title",children:"THE FANTASY BOOK"}),l.jsx("p",{className:"bk-sub",children:"Three leagues. Eighteen weeks. One coin-flip sport."})]}),l.jsx("div",{className:"group-list",style:{marginTop:28},children:i.map(f=>l.jsxs("a",{className:"group-link",href:`?book=${f.id}`,children:[l.jsx("div",{className:"gl-name",children:f.name}),l.jsx("div",{className:"gl-meta",children:"Open the book →"})]},f.id))})]})}const Wh=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Xu=(i,f)=>i.toUpperCase().includes(f)?i:`${i} — ${f}`;function qn({title:i,blurb:f,children:c}){return l.jsxs("section",{className:"bk-panel",id:Wh(i),children:[l.jsx("h2",{className:"bk-panel-title",children:i}),f&&l.jsx("p",{className:"bk-blurb",children:f}),c]})}function Uh({weeks:i,cur:f,onNav:c}){return l.jsxs("div",{className:"fb-weeknav",children:[l.jsx("button",{className:"bk-nav-btn",disabled:f===0,onClick:()=>c(f-1),children:"‹ PREV"}),l.jsx("select",{className:"bk-nav-select",value:f,onChange:y=>c(Number(y.target.value)),children:i.map((y,N)=>l.jsxs("option",{value:N,children:["WEEK ",y]},y))}),l.jsx("button",{className:"bk-nav-btn",disabled:f===i.length-1,onClick:()=>c(f+1),children:"NEXT ›"})]})}function Kh({sheet:i,prev:f,weeks:c,cur:y,view:N,onNav:E}){const R=_h(i.id,i.week),M=N;return Ln.useEffect(()=>{const T=M==="season"?Ha(i):`Week ${i.week}`;document.title=`${i.bookName} · ${T}`},[i.bookName,i.week,M]),Ln.useEffect(()=>{const T=window.location.hash&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)));T&&T.scrollIntoView()},[i.id,i.week]),l.jsxs(l.Fragment,{children:[l.jsx($h,{sheet:i,weeks:c,cur:y,onNav:E,page:M}),M==="week"&&l.jsx(Gh,{sheet:i,prev:f,note:R}),M==="season"&&l.jsx(Yh,{sheet:i,prev:f,note:R}),l.jsx(Zh,{sheet:i,page:M})]})}const Ha=i=>i.week===1?"Season preview":"The futures board";function $h({sheet:i,weeks:f,cur:c,onNav:y,page:N}){return l.jsxs("header",{className:"bk-head",children:[l.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),l.jsx("h1",{className:"bk-title",children:i.bookName}),l.jsxs("p",{className:"bk-sub",children:[i.tagline," · Week ",i.week,", ",i.season,i.meta.seed?l.jsxs(l.Fragment,{children:[" · Seed ",l.jsx("code",{children:i.meta.seed})]}):null]}),i.stakes&&l.jsxs("div",{className:"bk-chips",children:[l.jsxs("span",{className:"bk-chip",children:["Buy-in ",l.jsx("b",{children:i.stakes.buyIn})]}),l.jsxs("span",{className:"bk-chip",children:["Pot ",l.jsx("b",{children:i.stakes.pot})]}),i.stakes.payouts.map(E=>l.jsxs("span",{className:"bk-chip",children:[qh(E.place)," ",l.jsx("b",{children:E.label})]},E.place))]}),l.jsxs("div",{className:"bk-banner",children:["LINES BUILT FROM ",i.meta.sources]}),f.length>1&&l.jsx(Uh,{weeks:f,cur:c,onNav:y}),l.jsxs("nav",{className:"fb-viewnav",children:[l.jsxs("a",{className:N==="week"?"active":"",href:`?book=${i.id}&w=${i.week}`,children:["THE CARD — WEEK ",i.week]}),l.jsx("a",{className:N==="season"?"active":"",href:`?book=${i.id}&w=${i.week}&view=season`,children:Ha(i).toUpperCase()})]}),l.jsx("nav",{className:"fb-booknav",children:l.jsx("a",{href:"?book",children:"All books"})})]})}function Gh({sheet:i,prev:f,note:c}){var N,E,R,M;const{punishment:y}=i;return l.jsxs(l.Fragment,{children:[Ie(c,"lede")&&l.jsxs("section",{className:"bk-panel fb-lede",id:"the-lede",children:[l.jsx("h2",{className:"bk-panel-title",children:c.meta.headline??`WEEK ${i.week}`}),l.jsx(vn,{text:Ie(c,"lede"),className:"fb-prose-cols"}),c.meta.byline&&l.jsx("p",{className:"fb-byline",children:c.meta.byline})]}),i.settled&&l.jsx(kh,{settled:i.settled,punishment:y,Panel:qn,note:Ie(c,"settled"),benchNote:Ie(c,"bench")}),l.jsxs(qn,{title:`THE CARD — WEEK ${i.week}`,blurb:Ie(c,"card")??"Moneyline, spread and total on every matchup. Spreads and totals are the half-point where the simulated distribution splits evenly, so both sides post at −110 — the line moves, not the price.",children:[l.jsxs("div",{className:"fb-match-head",children:[l.jsx("span",{children:"MATCHUP"}),l.jsx("span",{children:"MONEYLINE"}),l.jsx("span",{className:"spread",children:"SPREAD"}),l.jsx("span",{className:"total",children:"TOTAL"})]}),l.jsx("div",{className:"fb-card",children:i.matchups.map(T=>l.jsx(Qh,{m:T,prev:Xh(f,T),note:Ih(c,T.a.rosterId,T.b.rosterId)},`${T.a.rosterId}-${T.b.rosterId}`))})]}),l.jsxs("div",{className:y.paired?"fb-grid2":"",children:[l.jsxs(qn,{title:Xu(y.weekly.name,"LOW SCORER"),blurb:y.weekly.copy,children:[Ie(c,"punishment")&&l.jsx(vn,{text:Ie(c,"punishment"),className:"fb-panel-prose"}),y.weekly.parlay&&l.jsxs("p",{className:"fb-note",children:[y.weekly.legs??y.weekly.parlay.legs," legs · $",y.weekly.parlay.stake," · lifetime record ",l.jsx("b",{children:y.weekly.parlay.lifetimeHits})," hits."]}),l.jsx(nc,{rows:y.weekly.rows,prevRows:(E=(N=f==null?void 0:f.punishment)==null?void 0:N.weekly)==null?void 0:E.rows})]}),y.paired&&l.jsxs(qn,{title:Xu(y.paired.name,"HIGH SCORER"),blurb:y.paired.copy,children:[Ie(c,"punishment-paired")&&l.jsx(vn,{text:Ie(c,"punishment-paired"),className:"fb-panel-prose"}),l.jsx(nc,{rows:y.paired.rows,prevRows:(M=(R=f==null?void 0:f.punishment)==null?void 0:R.paired)==null?void 0:M.rows})]})]}),y.joints.length>0&&l.jsxs(qn,{title:"THE JOINT — WHO SINGS WHAT",blurb:"Low scorer and high scorer in the same week, priced together rather than multiplied: a 145-point week makes you the high scorer and makes someone else the low one, so these are not independent.",children:[Ie(c,"joint")&&l.jsx(vn,{text:Ie(c,"joint"),className:"fb-panel-prose"}),y.joints.map(T=>l.jsxs("div",{className:"fb-slip",children:[l.jsxs("span",{className:"fb-slip-text",children:[l.jsx("b",{children:T.low.team})," sings a song picked by ",l.jsx("b",{children:T.high.team}),l.jsxs("span",{className:"fb-slip-note",children:[T.low.manager," · ",T.high.manager," · ",T.pct,"%"]})]}),l.jsx("span",{className:"bk-price",children:T.price})]},`${T.low.rosterId}-${T.high.rosterId}`))]}),l.jsxs(qn,{title:"THE LINEUPS",blurb:"Optimal by projection against each league's roster slots — what a manager knows Sunday morning. Scores are drawn on the simulation, never on the projection, which would be lookahead bias.",children:[Ie(c,"lineups")&&l.jsx(vn,{text:Ie(c,"lineups"),className:"fb-panel-prose"}),l.jsx("div",{className:"fb-lineups",children:[...i.lineups].sort((T,z)=>z.projected-T.projected).map(T=>l.jsx(Jh,{seat:T},T.rosterId))})]}),c==null?void 0:c.panels.map(T=>l.jsx(qn,{title:T.title.toUpperCase(),children:l.jsx(vn,{text:T.text,className:"fb-prose-cols"})},T.title))]})}function Yh({sheet:i,prev:f,note:c}){const y=Ie(c,"season");return l.jsxs(l.Fragment,{children:[y?l.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[l.jsx("h2",{className:"bk-panel-title",children:c.meta.headline??"THE FUTURES BOARD"}),l.jsx(vn,{text:y,className:"fb-prose-cols"})]}):i.preview&&l.jsx(Vh,{preview:i.preview,week:i.week}),l.jsx(mh,{sheet:i,prev:f,Panel:qn})]})}function Vh({preview:i,week:f}){return l.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[l.jsx("h2",{className:"bk-panel-title",children:f===1?"SEASON PREVIEW":`SEASON PREVIEW — WRITTEN WEEK ${i.writtenWeek}`}),i.standfirst&&l.jsx("p",{className:"fb-standfirst",children:i.standfirst}),l.jsx("div",{className:"fb-prose-cols",children:i.paragraphs.map((c,y)=>l.jsx("p",{className:"fb-prose",children:c},y))}),f>i.writtenWeek&&l.jsxs("p",{className:"fb-note",children:["Written in week ",i.writtenWeek," and left alone since. The boards below are current; the prose is not."]})]})}function Qh({m:i,prev:f,note:c}){var y;return l.jsxs("div",{className:c?"fb-match noted":"fb-match",children:[l.jsxs("div",{className:"fb-seats",children:[l.jsx(ec,{seat:i.a,proj:i.projected.a,fav:!0}),l.jsx(ec,{seat:i.b,proj:i.projected.b})]}),l.jsxs("div",{className:"fb-cell",children:[l.jsx("span",{className:"fb-odds",children:i.moneyline.a}),l.jsx("span",{className:"fb-odds dim",children:i.moneyline.b}),l.jsx(Ma,{now:i.moneyline.a,was:(y=f==null?void 0:f.moneyline)==null?void 0:y.a})]}),l.jsxs("div",{className:"fb-cell spread",children:[l.jsxs("span",{className:"fb-odds",children:[i.spread.a,l.jsx("small",{children:i.spread.price})]}),l.jsxs("span",{className:"fb-odds dim",children:[i.spread.b,l.jsx("small",{children:i.spread.price})]})]}),l.jsxs("div",{className:"fb-cell total",children:[l.jsxs("span",{className:"fb-odds",children:["O ",i.total.line.toFixed(1),l.jsx("small",{children:i.total.over})]}),l.jsxs("span",{className:"fb-odds dim",children:["U ",i.total.line.toFixed(1),l.jsx("small",{children:i.total.under})]})]}),c&&l.jsx(vn,{text:c,className:"fb-match-note"})]})}const ec=({seat:i,proj:f,fav:c})=>l.jsxs("span",{className:c?"fb-seat fav":"fb-seat",children:[l.jsx("span",{className:"fb-seat-name",children:i.team}),l.jsx("span",{className:"fb-seat-mgr",children:i.manager}),l.jsx("span",{className:"fb-seat-proj",children:f.toFixed(1)})]});function nc({rows:i,prevRows:f}){const c=Math.max(...i.map(y=>y.pct));return l.jsx("div",{className:"fb-runners",children:i.map((y,N)=>{var E;return l.jsxs("div",{className:N===0?"fb-runner lead":"fb-runner",children:[l.jsxs("span",{className:"fb-runner-main",children:[l.jsx("span",{className:"fb-runner-team",children:y.team}),l.jsx("span",{className:"fb-bar",style:{width:`${y.pct/c*100}%`}}),l.jsx("span",{className:"fb-runner-mgr",children:y.manager})]}),l.jsxs("span",{className:"fb-runner-pct",children:[y.pct,"%"]}),l.jsxs("span",{className:"bk-line-right",children:[l.jsx(Ma,{now:y.price,was:(E=f==null?void 0:f.find(R=>R.rosterId===y.rosterId))==null?void 0:E.price}),l.jsx("span",{className:"bk-price",children:y.price})]})]},y.rosterId)})})}function Jh({seat:i}){return l.jsxs("div",{className:"fb-lineup",children:[l.jsxs("div",{className:"fb-lineup-head",children:[l.jsx("span",{className:"fb-lineup-name",children:i.team}),l.jsx("span",{className:"fb-lineup-proj",children:i.projected.toFixed(1)})]}),i.players.map((f,c)=>l.jsxs("div",{className:f.name?"fb-slot":"fb-slot empty",children:[l.jsx("span",{className:"fb-slot-tag",children:f.slot}),l.jsxs("span",{className:"fb-slot-name",children:[f.name??"no eligible player",f.name&&l.jsxs("small",{children:[" ",f.position," ",f.team,f.waiver&&" · waivers"]})]}),l.jsx("span",{className:"fb-slot-mu",children:f.mu.toFixed(1)})]},`${f.slot}-${c}`)),i.players.some(f=>f.waiver)&&l.jsxs("p",{className:"fb-warn",children:["Nobody on the roster can play ",i.players.filter(f=>f.waiver).map(f=>f.slot).join(", "),". Priced as if he claims the best free agent there — he has not, and until he does this line is generous to him."]}),i.emptySlots.length>0&&l.jsxs("p",{className:"fb-warn",children:["Forfeits ",i.emptySlots.join(", ")," — nobody on the roster is eligible. Worth roughly eight points, and it is why this line looks the way it does."]})]})}function Zh({sheet:i,page:f}){var c;return l.jsxs("footer",{className:"bk-fine-block",children:[l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"HOW THE SAUSAGE IS MADE."})," Every rostered player's projected points come from Sleeper's own weekly projection, scored through this league's exact scoring settings (",i.meta.scoringKeys," keys, reproducing Sleeper's published totals to a mean absolute error of ",i.meta.mae,"). Weekly scores are drawn from a Gamma distribution whose spread was fitted on 2025 projection residuals, position by position — a receiver projected for 18 is far more volatile than a quarterback projected for 18, and a pooled number would misprice the top and bottom of every lineup in opposite directions. The week was simulated ",i.meta.sims.toLocaleString()," times."]}),l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"WHAT THIS BOOK CANNOT DO."})," ",i.meta.disclosures.join(" ")]}),((c=i.meta.overrides)==null?void 0:c.length)>0&&l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"MANUAL OVERRIDES."})," ",i.meta.overrides.map(y=>`${y.player} ${y.was} → ${y.pts}${y.note?` (${y.note})`:""}`).join(" · ")]}),l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"HOUSE RULES."})," All prices include the house's margin. Ties split. Rosters as pulled",i.meta.pulledAt?` ${i.meta.pulledAt.slice(0,10)}`:"","; once a week's sheet is posted it is frozen and never repriced. For entertainment only."]}),l.jsxs("p",{className:"bk-foot",children:[i.bookName," · EST. SEPTEMBER 2026 · NO REFUNDS"]}),l.jsxs("p",{className:"bk-foot-nav",children:[f==="week"&&l.jsxs(l.Fragment,{children:[l.jsx("a",{className:"bk-link",href:`?book=${i.id}&w=${i.week}&view=season`,children:Ha(i)})," ·"," "]}),f==="season"&&l.jsxs(l.Fragment,{children:[l.jsxs("a",{className:"bk-link",href:`?book=${i.id}&w=${i.week}`,children:["The card — week ",i.week]})," ·"," "]}),l.jsx("a",{className:"bk-link",href:"?book",children:"All books"})]})]})}const qh=i=>`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`;function Xh(i,f){if(!(i!=null&&i.matchups))return null;const c=N=>new Set([N.a.rosterId,N.b.rosterId]),y=i.matchups.find(N=>{const E=c(N);return E.has(f.a.rosterId)&&E.has(f.b.rosterId)});return y?y.a.rosterId===f.a.rosterId?y:{moneyline:{a:y.moneyline.b,b:y.moneyline.a}}:null}const ef=`
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
`;function nf(){const i=new URLSearchParams(window.location.search),f=i.get("book")||null,c=i.has("w")?Number(i.get("w")):null,y=i.get("view")==="season"?"season":"week";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:ef}),l.jsx(Hh,{bookId:f,week:c,view:y})]})}lh.createRoot(document.getElementById("root")).render(l.jsx(Ln.StrictMode,{children:l.jsx(nf,{})}));
