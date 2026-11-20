(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))y(x);new MutationObserver(x=>{for(const E of x)if(E.type==="childList")for(const D of E.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&y(D)}).observe(document,{childList:!0,subtree:!0});function u(x){const E={};return x.integrity&&(E.integrity=x.integrity),x.referrerPolicy&&(E.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?E.credentials="include":x.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function y(x){if(x.ep)return;x.ep=!0;const E=u(x);fetch(x.href,E)}})();var Br={exports:{}},Sa={},Lr={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh;function nc(){if(Kh)return G;Kh=1;var i=Symbol.for("react.element"),f=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),D=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),F=Symbol.iterator;function z(p){return p===null||typeof p!="object"?null:(p=F&&p[F]||p["@@iterator"],typeof p=="function"?p:null)}var ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ue=Object.assign,oe={};function X(p,b,_){this.props=p,this.context=b,this.refs=oe,this.updater=_||ve}X.prototype.isReactComponent={},X.prototype.setState=function(p,b){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,b,"setState")},X.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function bn(){}bn.prototype=X.prototype;function cn(p,b,_){this.props=p,this.context=b,this.refs=oe,this.updater=_||ve}var en=cn.prototype=new bn;en.constructor=cn,Ue(en,X.prototype),en.isPureReactComponent=!0;var Te=Array.isArray,nn=Object.prototype.hasOwnProperty,Ce={current:null},Pe={key:!0,ref:!0,__self:!0,__source:!0};function Je(p,b,_){var U,$={},V=null,ee=null;if(b!=null)for(U in b.ref!==void 0&&(ee=b.ref),b.key!==void 0&&(V=""+b.key),b)nn.call(b,U)&&!Pe.hasOwnProperty(U)&&($[U]=b[U]);var q=arguments.length-2;if(q===1)$.children=_;else if(1<q){for(var se=Array(q),We=0;We<q;We++)se[We]=arguments[We+2];$.children=se}if(p&&p.defaultProps)for(U in q=p.defaultProps,q)$[U]===void 0&&($[U]=q[U]);return{$$typeof:i,type:p,key:V,ref:ee,props:$,_owner:Ce.current}}function An(p,b){return{$$typeof:i,type:p.type,key:b,ref:p.ref,props:p.props,_owner:p._owner}}function vn(p){return typeof p=="object"&&p!==null&&p.$$typeof===i}function Xn(p){var b={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(_){return b[_]})}var fn=/\/+/g;function Ie(p,b){return typeof p=="object"&&p!==null&&p.key!=null?Xn(""+p.key):b.toString(36)}function tn(p,b,_,U,$){var V=typeof p;(V==="undefined"||V==="boolean")&&(p=null);var ee=!1;if(p===null)ee=!0;else switch(V){case"string":case"number":ee=!0;break;case"object":switch(p.$$typeof){case i:case f:ee=!0}}if(ee)return ee=p,$=$(ee),p=U===""?"."+Ie(ee,0):U,Te($)?(_="",p!=null&&(_=p.replace(fn,"$&/")+"/"),tn($,b,_,"",function(We){return We})):$!=null&&(vn($)&&($=An($,_+(!$.key||ee&&ee.key===$.key?"":(""+$.key).replace(fn,"$&/")+"/")+p)),b.push($)),1;if(ee=0,U=U===""?".":U+":",Te(p))for(var q=0;q<p.length;q++){V=p[q];var se=U+Ie(V,q);ee+=tn(V,b,_,se,$)}else if(se=z(p),typeof se=="function")for(p=se.call(p),q=0;!(V=p.next()).done;)V=V.value,se=U+Ie(V,q++),ee+=tn(V,b,_,se,$);else if(V==="object")throw b=String(p),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ee}function pn(p,b,_){if(p==null)return p;var U=[],$=0;return tn(p,U,"","",function(V){return b.call(_,V,$++)}),U}function Ae(p){if(p._status===-1){var b=p._result;b=b(),b.then(function(_){(p._status===0||p._status===-1)&&(p._status=1,p._result=_)},function(_){(p._status===0||p._status===-1)&&(p._status=2,p._result=_)}),p._status===-1&&(p._status=0,p._result=b)}if(p._status===1)return p._result.default;throw p._result}var he={current:null},C={transition:null},I={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:C,ReactCurrentOwner:Ce};function P(){throw Error("act(...) is not supported in production builds of React.")}return G.Children={map:pn,forEach:function(p,b,_){pn(p,function(){b.apply(this,arguments)},_)},count:function(p){var b=0;return pn(p,function(){b++}),b},toArray:function(p){return pn(p,function(b){return b})||[]},only:function(p){if(!vn(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},G.Component=X,G.Fragment=u,G.Profiler=x,G.PureComponent=cn,G.StrictMode=y,G.Suspense=B,G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,G.act=P,G.cloneElement=function(p,b,_){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var U=Ue({},p.props),$=p.key,V=p.ref,ee=p._owner;if(b!=null){if(b.ref!==void 0&&(V=b.ref,ee=Ce.current),b.key!==void 0&&($=""+b.key),p.type&&p.type.defaultProps)var q=p.type.defaultProps;for(se in b)nn.call(b,se)&&!Pe.hasOwnProperty(se)&&(U[se]=b[se]===void 0&&q!==void 0?q[se]:b[se])}var se=arguments.length-2;if(se===1)U.children=_;else if(1<se){q=Array(se);for(var We=0;We<se;We++)q[We]=arguments[We+2];U.children=q}return{$$typeof:i,type:p.type,key:$,ref:V,props:U,_owner:ee}},G.createContext=function(p){return p={$$typeof:D,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:E,_context:p},p.Consumer=p},G.createElement=Je,G.createFactory=function(p){var b=Je.bind(null,p);return b.type=p,b},G.createRef=function(){return{current:null}},G.forwardRef=function(p){return{$$typeof:K,render:p}},G.isValidElement=vn,G.lazy=function(p){return{$$typeof:J,_payload:{_status:-1,_result:p},_init:Ae}},G.memo=function(p,b){return{$$typeof:N,type:p,compare:b===void 0?null:b}},G.startTransition=function(p){var b=C.transition;C.transition={};try{p()}finally{C.transition=b}},G.unstable_act=P,G.useCallback=function(p,b){return he.current.useCallback(p,b)},G.useContext=function(p){return he.current.useContext(p)},G.useDebugValue=function(){},G.useDeferredValue=function(p){return he.current.useDeferredValue(p)},G.useEffect=function(p,b){return he.current.useEffect(p,b)},G.useId=function(){return he.current.useId()},G.useImperativeHandle=function(p,b,_){return he.current.useImperativeHandle(p,b,_)},G.useInsertionEffect=function(p,b){return he.current.useInsertionEffect(p,b)},G.useLayoutEffect=function(p,b){return he.current.useLayoutEffect(p,b)},G.useMemo=function(p,b){return he.current.useMemo(p,b)},G.useReducer=function(p,b,_){return he.current.useReducer(p,b,_)},G.useRef=function(p){return he.current.useRef(p)},G.useState=function(p){return he.current.useState(p)},G.useSyncExternalStore=function(p,b,_){return he.current.useSyncExternalStore(p,b,_)},G.useTransition=function(){return he.current.useTransition()},G.version="18.3.1",G}var Dh;function Dr(){return Dh||(Dh=1,Lr.exports=nc()),Lr.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function tc(){if(Mh)return Sa;Mh=1;var i=Dr(),f=Symbol.for("react.element"),u=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,x=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function D(K,B,N){var J,F={},z=null,ve=null;N!==void 0&&(z=""+N),B.key!==void 0&&(z=""+B.key),B.ref!==void 0&&(ve=B.ref);for(J in B)y.call(B,J)&&!E.hasOwnProperty(J)&&(F[J]=B[J]);if(K&&K.defaultProps)for(J in B=K.defaultProps,B)F[J]===void 0&&(F[J]=B[J]);return{$$typeof:f,type:K,key:z,ref:ve,props:F,_owner:x.current}}return Sa.Fragment=u,Sa.jsx=D,Sa.jsxs=D,Sa}var Oh;function ac(){return Oh||(Oh=1,Br.exports=tc()),Br.exports}var l=ac(),Pn=Dr(),Ko={},Pr={exports:{}},Oe={},Ar={exports:{}},Rr={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function oc(){return Ih||(Ih=1,(function(i){function f(C,I){var P=C.length;C.push(I);e:for(;0<P;){var p=P-1>>>1,b=C[p];if(0<x(b,I))C[p]=I,C[P]=b,P=p;else break e}}function u(C){return C.length===0?null:C[0]}function y(C){if(C.length===0)return null;var I=C[0],P=C.pop();if(P!==I){C[0]=P;e:for(var p=0,b=C.length,_=b>>>1;p<_;){var U=2*(p+1)-1,$=C[U],V=U+1,ee=C[V];if(0>x($,P))V<b&&0>x(ee,$)?(C[p]=ee,C[V]=P,p=V):(C[p]=$,C[U]=P,p=U);else if(V<b&&0>x(ee,P))C[p]=ee,C[V]=P,p=V;else break e}}return I}function x(C,I){var P=C.sortIndex-I.sortIndex;return P!==0?P:C.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;i.unstable_now=function(){return E.now()}}else{var D=Date,K=D.now();i.unstable_now=function(){return D.now()-K}}var B=[],N=[],J=1,F=null,z=3,ve=!1,Ue=!1,oe=!1,X=typeof setTimeout=="function"?setTimeout:null,bn=typeof clearTimeout=="function"?clearTimeout:null,cn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function en(C){for(var I=u(N);I!==null;){if(I.callback===null)y(N);else if(I.startTime<=C)y(N),I.sortIndex=I.expirationTime,f(B,I);else break;I=u(N)}}function Te(C){if(oe=!1,en(C),!Ue)if(u(B)!==null)Ue=!0,Ae(nn);else{var I=u(N);I!==null&&he(Te,I.startTime-C)}}function nn(C,I){Ue=!1,oe&&(oe=!1,bn(Je),Je=-1),ve=!0;var P=z;try{for(en(I),F=u(B);F!==null&&(!(F.expirationTime>I)||C&&!Xn());){var p=F.callback;if(typeof p=="function"){F.callback=null,z=F.priorityLevel;var b=p(F.expirationTime<=I);I=i.unstable_now(),typeof b=="function"?F.callback=b:F===u(B)&&y(B),en(I)}else y(B);F=u(B)}if(F!==null)var _=!0;else{var U=u(N);U!==null&&he(Te,U.startTime-I),_=!1}return _}finally{F=null,z=P,ve=!1}}var Ce=!1,Pe=null,Je=-1,An=5,vn=-1;function Xn(){return!(i.unstable_now()-vn<An)}function fn(){if(Pe!==null){var C=i.unstable_now();vn=C;var I=!0;try{I=Pe(!0,C)}finally{I?Ie():(Ce=!1,Pe=null)}}else Ce=!1}var Ie;if(typeof cn=="function")Ie=function(){cn(fn)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,pn=tn.port2;tn.port1.onmessage=fn,Ie=function(){pn.postMessage(null)}}else Ie=function(){X(fn,0)};function Ae(C){Pe=C,Ce||(Ce=!0,Ie())}function he(C,I){Je=X(function(){C(i.unstable_now())},I)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(C){C.callback=null},i.unstable_continueExecution=function(){Ue||ve||(Ue=!0,Ae(nn))},i.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):An=0<C?Math.floor(1e3/C):5},i.unstable_getCurrentPriorityLevel=function(){return z},i.unstable_getFirstCallbackNode=function(){return u(B)},i.unstable_next=function(C){switch(z){case 1:case 2:case 3:var I=3;break;default:I=z}var P=z;z=I;try{return C()}finally{z=P}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(C,I){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=z;z=C;try{return I()}finally{z=P}},i.unstable_scheduleCallback=function(C,I,P){var p=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?p+P:p):P=p,C){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=P+b,C={id:J++,callback:I,priorityLevel:C,startTime:P,expirationTime:b,sortIndex:-1},P>p?(C.sortIndex=P,f(N,C),u(B)===null&&C===u(N)&&(oe?(bn(Je),Je=-1):oe=!0,he(Te,P-p))):(C.sortIndex=b,f(B,C),Ue||ve||(Ue=!0,Ae(nn))),C},i.unstable_shouldYield=Xn,i.unstable_wrapCallback=function(C){var I=z;return function(){var P=z;z=I;try{return C.apply(this,arguments)}finally{z=P}}}})(Rr)),Rr}var Wh;function sc(){return Wh||(Wh=1,Ar.exports=oc()),Ar.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function rc(){if(Fh)return Oe;Fh=1;var i=Dr(),f=sc();function u(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y=new Set,x={};function E(e,n){D(e,n),D(e+"Capture",n)}function D(e,n){for(x[e]=n,e=0;e<n.length;e++)y.add(n[e])}var K=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),B=Object.prototype.hasOwnProperty,N=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J={},F={};function z(e){return B.call(F,e)?!0:B.call(J,e)?!1:N.test(e)?F[e]=!0:(J[e]=!0,!1)}function ve(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ue(e,n,t,a){if(n===null||typeof n>"u"||ve(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function oe(e,n,t,a,o,s,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=r}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new oe(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];X[n]=new oe(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new oe(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new oe(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new oe(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new oe(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new oe(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new oe(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var bn=/[\-:]([a-z])/g;function cn(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(bn,cn);X[n]=new oe(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(bn,cn);X[n]=new oe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(bn,cn);X[n]=new oe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new oe(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function en(e,n,t,a){var o=X.hasOwnProperty(n)?X[n]:null;(o!==null?o.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ue(n,t,o,a)&&(t=null),a||o===null?z(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,a=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nn=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),Pe=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),An=Symbol.for("react.profiler"),vn=Symbol.for("react.provider"),Xn=Symbol.for("react.context"),fn=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),tn=Symbol.for("react.suspense_list"),pn=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),C=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,p;function b(e){if(p===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);p=n&&n[1]||""}return`
`+p+e}var _=!1;function U(e,n){if(!e||_)return"";_=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(w){var a=w}Reflect.construct(e,[],n)}else{try{n.call()}catch(w){a=w}e.call(n.prototype)}else{try{throw Error()}catch(w){a=w}e()}}catch(w){if(w&&a&&typeof w.stack=="string"){for(var o=w.stack.split(`
`),s=a.stack.split(`
`),r=o.length-1,h=s.length-1;1<=r&&0<=h&&o[r]!==s[h];)h--;for(;1<=r&&0<=h;r--,h--)if(o[r]!==s[h]){if(r!==1||h!==1)do if(r--,h--,0>h||o[r]!==s[h]){var d=`
`+o[r].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=r&&0<=h);break}}}finally{_=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?b(e):""}function $(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1),e;case 11:return e=U(e.type.render,!1),e;case 1:return e=U(e.type,!0),e;default:return""}}function V(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pe:return"Fragment";case Ce:return"Portal";case An:return"Profiler";case Je:return"StrictMode";case Ie:return"Suspense";case tn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xn:return(e.displayName||"Context")+".Consumer";case vn:return(e._context.displayName||"Context")+".Provider";case fn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pn:return n=e.displayName||null,n!==null?n:V(e.type)||"Memo";case Ae:n=e._payload,e=e._init;try{return V(e(n))}catch{}}return null}function ee(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(n);case 8:return n===Je?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(e){var n=se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xa(e){e._valueTracker||(e._valueTracker=We(e))}function Fr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=se(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Ea(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Do(e,n){var t=n.checked;return P({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function zr(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=q(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function _r(e,n){n=n.checked,n!=null&&en(e,"checked",n,!1)}function Mo(e,n){_r(e,n);var t=q(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Oo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Oo(e,n.type,q(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Gr(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Oo(e,n,t){(n!=="number"||Ea(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ot=Array.isArray;function ft(e,n,t,a){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&a&&(e[t].defaultSelected=!0)}else{for(t=""+q(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Io(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(u(91));return P({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ur(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(u(92));if(Ot(t)){if(1<t.length)throw Error(u(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:q(t)}}function Jr(e,n){var t=q(n.value),a=q(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Yr(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $r(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$r(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Na,Vr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,o)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function It(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},su=["Webkit","ms","Moz","O"];Object.keys(Wt).forEach(function(e){su.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Wt[n]=Wt[e]})});function Qr(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Wt.hasOwnProperty(e)&&Wt[e]?(""+n).trim():n+"px"}function qr(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,o=Qr(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,o):e[t]=o}}var ru=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,n){if(n){if(ru[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(u(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(u(61))}if(n.style!=null&&typeof n.style!="object")throw Error(u(62))}}function zo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _o=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uo=null,pt=null,mt=null;function Zr(e){if(e=la(e)){if(typeof Uo!="function")throw Error(u(280));var n=e.stateNode;n&&(n=Va(n),Uo(e.stateNode,e.type,n))}}function Xr(e){pt?mt?mt.push(e):mt=[e]:pt=e}function ei(){if(pt){var e=pt,n=mt;if(mt=pt=null,Zr(e),n)for(e=0;e<n.length;e++)Zr(n[e])}}function ni(e,n){return e(n)}function ti(){}var Jo=!1;function ai(e,n,t){if(Jo)return e(n,t);Jo=!0;try{return ni(e,n,t)}finally{Jo=!1,(pt!==null||mt!==null)&&(ti(),ei())}}function Ft(e,n){var t=e.stateNode;if(t===null)return null;var a=Va(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Yo=!1;if(K)try{var zt={};Object.defineProperty(zt,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",zt,zt),window.removeEventListener("test",zt,zt)}catch{Yo=!1}function iu(e,n,t,a,o,s,r,h,d){var w=Array.prototype.slice.call(arguments,3);try{n.apply(t,w)}catch(v){this.onError(v)}}var _t=!1,Ca=null,ja=!1,$o=null,lu={onError:function(e){_t=!0,Ca=e}};function hu(e,n,t,a,o,s,r,h,d){_t=!1,Ca=null,iu.apply(lu,arguments)}function uu(e,n,t,a,o,s,r,h,d){if(hu.apply(this,arguments),_t){if(_t){var w=Ca;_t=!1,Ca=null}else throw Error(u(198));ja||(ja=!0,$o=w)}}function et(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function oi(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function si(e){if(et(e)!==e)throw Error(u(188))}function du(e){var n=e.alternate;if(!n){if(n=et(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){t=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return si(o),e;if(s===a)return si(o),n;s=s.sibling}throw Error(u(188))}if(t.return!==a.return)t=o,a=s;else{for(var r=!1,h=o.child;h;){if(h===t){r=!0,t=o,a=s;break}if(h===a){r=!0,a=o,t=s;break}h=h.sibling}if(!r){for(h=s.child;h;){if(h===t){r=!0,t=s,a=o;break}if(h===a){r=!0,a=s,t=o;break}h=h.sibling}if(!r)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function ri(e){return e=du(e),e!==null?ii(e):null}function ii(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ii(e);if(n!==null)return n;e=e.sibling}return null}var li=f.unstable_scheduleCallback,hi=f.unstable_cancelCallback,cu=f.unstable_shouldYield,fu=f.unstable_requestPaint,de=f.unstable_now,pu=f.unstable_getCurrentPriorityLevel,Vo=f.unstable_ImmediatePriority,ui=f.unstable_UserBlockingPriority,Ba=f.unstable_NormalPriority,mu=f.unstable_LowPriority,di=f.unstable_IdlePriority,La=null,mn=null;function gu(e){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:ku,wu=Math.log,yu=Math.LN2;function ku(e){return e>>>=0,e===0?32:31-(wu(e)/yu|0)|0}var Pa=64,Aa=4194304;function Gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ra(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes,r=t&268435455;if(r!==0){var h=r&~o;h!==0?a=Gt(h):(s&=r,s!==0&&(a=Gt(s)))}else r=t&~o,r!==0?a=Gt(r):s!==0&&(a=Gt(s));if(a===0)return 0;if(n!==0&&n!==a&&(n&o)===0&&(o=a&-a,s=n&-n,o>=s||o===16&&(s&4194240)!==0))return n;if((a&4)!==0&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-an(n),o=1<<t,a|=e[t],n&=~o;return a}function bu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var r=31-an(s),h=1<<r,d=o[r];d===-1?((h&t)===0||(h&a)!==0)&&(o[r]=bu(h,n)):d<=n&&(e.expiredLanes|=h),s&=~h}}function Qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ci(){var e=Pa;return Pa<<=1,(Pa&4194240)===0&&(Pa=64),e}function qo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ut(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-an(n),e[n]=t}function Tu(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-an(t),s=1<<o;n[o]=0,a[o]=-1,e[o]=-1,t&=~s}}function Zo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-an(t),o=1<<a;o&n|e[a]&n&&(e[a]|=n),t&=~o}}var Z=0;function fi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pi,Xo,mi,gi,wi,es=!1,Ha=[],Rn=null,Hn=null,Kn=null,Jt=new Map,Yt=new Map,Dn=[],Su="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yi(e,n){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yt.delete(n.pointerId)}}function $t(e,n,t,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},n!==null&&(n=la(n),n!==null&&Xo(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function xu(e,n,t,a,o){switch(n){case"focusin":return Rn=$t(Rn,e,n,t,a,o),!0;case"dragenter":return Hn=$t(Hn,e,n,t,a,o),!0;case"mouseover":return Kn=$t(Kn,e,n,t,a,o),!0;case"pointerover":var s=o.pointerId;return Jt.set(s,$t(Jt.get(s)||null,e,n,t,a,o)),!0;case"gotpointercapture":return s=o.pointerId,Yt.set(s,$t(Yt.get(s)||null,e,n,t,a,o)),!0}return!1}function ki(e){var n=nt(e.target);if(n!==null){var t=et(n);if(t!==null){if(n=t.tag,n===13){if(n=oi(t),n!==null){e.blockedOn=n,wi(e.priority,function(){mi(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ka(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ts(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);_o=a,t.target.dispatchEvent(a),_o=null}else return n=la(t),n!==null&&Xo(n),e.blockedOn=t,!1;n.shift()}return!0}function bi(e,n,t){Ka(e)&&t.delete(n)}function Eu(){es=!1,Rn!==null&&Ka(Rn)&&(Rn=null),Hn!==null&&Ka(Hn)&&(Hn=null),Kn!==null&&Ka(Kn)&&(Kn=null),Jt.forEach(bi),Yt.forEach(bi)}function Vt(e,n){e.blockedOn===n&&(e.blockedOn=null,es||(es=!0,f.unstable_scheduleCallback(f.unstable_NormalPriority,Eu)))}function Qt(e){function n(o){return Vt(o,e)}if(0<Ha.length){Vt(Ha[0],e);for(var t=1;t<Ha.length;t++){var a=Ha[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Rn!==null&&Vt(Rn,e),Hn!==null&&Vt(Hn,e),Kn!==null&&Vt(Kn,e),Jt.forEach(n),Yt.forEach(n),t=0;t<Dn.length;t++)a=Dn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Dn.length&&(t=Dn[0],t.blockedOn===null);)ki(t),t.blockedOn===null&&Dn.shift()}var gt=Te.ReactCurrentBatchConfig,Da=!0;function Nu(e,n,t,a){var o=Z,s=gt.transition;gt.transition=null;try{Z=1,ns(e,n,t,a)}finally{Z=o,gt.transition=s}}function Cu(e,n,t,a){var o=Z,s=gt.transition;gt.transition=null;try{Z=4,ns(e,n,t,a)}finally{Z=o,gt.transition=s}}function ns(e,n,t,a){if(Da){var o=ts(e,n,t,a);if(o===null)ks(e,n,a,Ma,t),yi(e,a);else if(xu(o,e,n,t,a))a.stopPropagation();else if(yi(e,a),n&4&&-1<Su.indexOf(e)){for(;o!==null;){var s=la(o);if(s!==null&&pi(s),s=ts(e,n,t,a),s===null&&ks(e,n,a,Ma,t),s===o)break;o=s}o!==null&&a.stopPropagation()}else ks(e,n,a,null,t)}}var Ma=null;function ts(e,n,t,a){if(Ma=null,e=Go(a),e=nt(e),e!==null)if(n=et(e),n===null)e=null;else if(t=n.tag,t===13){if(e=oi(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ma=e,null}function vi(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pu()){case Vo:return 1;case ui:return 4;case Ba:case mu:return 16;case di:return 536870912;default:return 16}default:return 16}}var Mn=null,as=null,Oa=null;function Ti(){if(Oa)return Oa;var e,n=as,t=n.length,a,o="value"in Mn?Mn.value:Mn.textContent,s=o.length;for(e=0;e<t&&n[e]===o[e];e++);var r=t-e;for(a=1;a<=r&&n[t-a]===o[s-a];a++);return Oa=o.slice(e,1<a?1-a:void 0)}function Ia(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wa(){return!0}function Si(){return!1}function Fe(e){function n(t,a,o,s,r){this._reactName=t,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Si,this.isPropagationStopped=Si,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=Fe(wt),qt=P({},wt,{view:0,detail:0}),ju=Fe(qt),ss,rs,Zt,Fa=P({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zt&&(Zt&&e.type==="mousemove"?(ss=e.screenX-Zt.screenX,rs=e.screenY-Zt.screenY):rs=ss=0,Zt=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),xi=Fe(Fa),Bu=P({},Fa,{dataTransfer:0}),Lu=Fe(Bu),Pu=P({},qt,{relatedTarget:0}),is=Fe(Pu),Au=P({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ru=Fe(Au),Hu=P({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ku=Fe(Hu),Du=P({},wt,{data:0}),Ei=Fe(Du),Mu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ou={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wu(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Iu[e])?!!n[e]:!1}function ls(){return Wu}var Fu=P({},qt,{key:function(e){if(e.key){var n=Mu[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ia(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ou[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?Ia(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ia(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zu=Fe(Fu),_u=P({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ni=Fe(_u),Gu=P({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),Uu=Fe(Gu),Ju=P({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yu=Fe(Ju),$u=P({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vu=Fe($u),Qu=[9,13,27,32],hs=K&&"CompositionEvent"in window,Xt=null;K&&"documentMode"in document&&(Xt=document.documentMode);var qu=K&&"TextEvent"in window&&!Xt,Ci=K&&(!hs||Xt&&8<Xt&&11>=Xt),ji=" ",Bi=!1;function Li(e,n){switch(e){case"keyup":return Qu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yt=!1;function Zu(e,n){switch(e){case"compositionend":return Pi(n);case"keypress":return n.which!==32?null:(Bi=!0,ji);case"textInput":return e=n.data,e===ji&&Bi?null:e;default:return null}}function Xu(e,n){if(yt)return e==="compositionend"||!hs&&Li(e,n)?(e=Ti(),Oa=as=Mn=null,yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ci&&n.locale!=="ko"?null:n.data;default:return null}}var ed={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ai(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ed[e.type]:n==="textarea"}function Ri(e,n,t,a){Xr(a),n=Ja(n,"onChange"),0<n.length&&(t=new os("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var ea=null,na=null;function nd(e){qi(e,0)}function za(e){var n=St(e);if(Fr(n))return e}function td(e,n){if(e==="change")return n}var Hi=!1;if(K){var us;if(K){var ds="oninput"in document;if(!ds){var Ki=document.createElement("div");Ki.setAttribute("oninput","return;"),ds=typeof Ki.oninput=="function"}us=ds}else us=!1;Hi=us&&(!document.documentMode||9<document.documentMode)}function Di(){ea&&(ea.detachEvent("onpropertychange",Mi),na=ea=null)}function Mi(e){if(e.propertyName==="value"&&za(na)){var n=[];Ri(n,na,e,Go(e)),ai(nd,n)}}function ad(e,n,t){e==="focusin"?(Di(),ea=n,na=t,ea.attachEvent("onpropertychange",Mi)):e==="focusout"&&Di()}function od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return za(na)}function sd(e,n){if(e==="click")return za(n)}function rd(e,n){if(e==="input"||e==="change")return za(n)}function id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:id;function ta(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var o=t[a];if(!B.call(n,o)||!on(e[o],n[o]))return!1}return!0}function Oi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ii(e,n){var t=Oi(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Oi(t)}}function Wi(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wi(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fi(){for(var e=window,n=Ea();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ea(e.document)}return n}function cs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ld(e){var n=Fi(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wi(t.ownerDocument.documentElement,t)){if(a!==null&&cs(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,s=Math.min(a.start,o);a=a.end===void 0?s:Math.min(a.end,o),!e.extend&&s>a&&(o=a,a=s,s=o),o=Ii(t,s);var r=Ii(t,a);o&&r&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),s>a?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hd=K&&"documentMode"in document&&11>=document.documentMode,kt=null,fs=null,aa=null,ps=!1;function zi(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ps||kt==null||kt!==Ea(a)||(a=kt,"selectionStart"in a&&cs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),aa&&ta(aa,a)||(aa=a,a=Ja(fs,"onSelect"),0<a.length&&(n=new os("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=kt)))}function _a(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var bt={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},ms={},_i={};K&&(_i=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function Ga(e){if(ms[e])return ms[e];if(!bt[e])return e;var n=bt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in _i)return ms[e]=n[t];return e}var Gi=Ga("animationend"),Ui=Ga("animationiteration"),Ji=Ga("animationstart"),Yi=Ga("transitionend"),$i=new Map,Vi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,n){$i.set(e,n),E(n,[e])}for(var gs=0;gs<Vi.length;gs++){var ws=Vi[gs],ud=ws.toLowerCase(),dd=ws[0].toUpperCase()+ws.slice(1);On(ud,"on"+dd)}On(Gi,"onAnimationEnd"),On(Ui,"onAnimationIteration"),On(Ji,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(Yi,"onTransitionEnd"),D("onMouseEnter",["mouseout","mouseover"]),D("onMouseLeave",["mouseout","mouseover"]),D("onPointerEnter",["pointerout","pointerover"]),D("onPointerLeave",["pointerout","pointerover"]),E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E("onBeforeInput",["compositionend","keypress","textInput","paste"]),E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cd=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Qi(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,uu(a,n,void 0,e),e.currentTarget=null}function qi(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],o=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var r=a.length-1;0<=r;r--){var h=a[r],d=h.instance,w=h.currentTarget;if(h=h.listener,d!==s&&o.isPropagationStopped())break e;Qi(o,h,w),s=d}else for(r=0;r<a.length;r++){if(h=a[r],d=h.instance,w=h.currentTarget,h=h.listener,d!==s&&o.isPropagationStopped())break e;Qi(o,h,w),s=d}}}if(ja)throw e=$o,ja=!1,$o=null,e}function te(e,n){var t=n[Es];t===void 0&&(t=n[Es]=new Set);var a=e+"__bubble";t.has(a)||(Zi(n,e,2,!1),t.add(a))}function ys(e,n,t){var a=0;n&&(a|=4),Zi(t,e,a,n)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function sa(e){if(!e[Ua]){e[Ua]=!0,y.forEach(function(t){t!=="selectionchange"&&(cd.has(t)||ys(t,!1,e),ys(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ua]||(n[Ua]=!0,ys("selectionchange",!1,n))}}function Zi(e,n,t,a){switch(vi(n)){case 1:var o=Nu;break;case 4:o=Cu;break;default:o=ns}t=o.bind(null,n,t,e),o=void 0,!Yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ks(e,n,t,a,o){var s=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var h=a.stateNode.containerInfo;if(h===o||h.nodeType===8&&h.parentNode===o)break;if(r===4)for(r=a.return;r!==null;){var d=r.tag;if((d===3||d===4)&&(d=r.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;r=r.return}for(;h!==null;){if(r=nt(h),r===null)return;if(d=r.tag,d===5||d===6){a=s=r;continue e}h=h.parentNode}}a=a.return}ai(function(){var w=s,v=Go(t),T=[];e:{var k=$i.get(e);if(k!==void 0){var j=os,A=e;switch(e){case"keypress":if(Ia(t)===0)break e;case"keydown":case"keyup":j=zu;break;case"focusin":A="focus",j=is;break;case"focusout":A="blur",j=is;break;case"beforeblur":case"afterblur":j=is;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=xi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Uu;break;case Gi:case Ui:case Ji:j=Ru;break;case Yi:j=Yu;break;case"scroll":j=ju;break;case"wheel":j=Vu;break;case"copy":case"cut":case"paste":j=Ku;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Ni}var R=(n&4)!==0,ce=!R&&e==="scroll",m=R?k!==null?k+"Capture":null:k;R=[];for(var c=w,g;c!==null;){g=c;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=Ft(c,m),S!=null&&R.push(ra(c,S,g)))),ce)break;c=c.return}0<R.length&&(k=new j(k,A,null,t,v),T.push({event:k,listeners:R}))}}if((n&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",k&&t!==_o&&(A=t.relatedTarget||t.fromElement)&&(nt(A)||A[Tn]))break e;if((j||k)&&(k=v.window===v?v:(k=v.ownerDocument)?k.defaultView||k.parentWindow:window,j?(A=t.relatedTarget||t.toElement,j=w,A=A?nt(A):null,A!==null&&(ce=et(A),A!==ce||A.tag!==5&&A.tag!==6)&&(A=null)):(j=null,A=w),j!==A)){if(R=xi,S="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(R=Ni,S="onPointerLeave",m="onPointerEnter",c="pointer"),ce=j==null?k:St(j),g=A==null?k:St(A),k=new R(S,c+"leave",j,t,v),k.target=ce,k.relatedTarget=g,S=null,nt(v)===w&&(R=new R(m,c+"enter",A,t,v),R.target=g,R.relatedTarget=ce,S=R),ce=S,j&&A)n:{for(R=j,m=A,c=0,g=R;g;g=vt(g))c++;for(g=0,S=m;S;S=vt(S))g++;for(;0<c-g;)R=vt(R),c--;for(;0<g-c;)m=vt(m),g--;for(;c--;){if(R===m||m!==null&&R===m.alternate)break n;R=vt(R),m=vt(m)}R=null}else R=null;j!==null&&Xi(T,k,j,R,!1),A!==null&&ce!==null&&Xi(T,ce,A,R,!0)}}e:{if(k=w?St(w):window,j=k.nodeName&&k.nodeName.toLowerCase(),j==="select"||j==="input"&&k.type==="file")var H=td;else if(Ai(k))if(Hi)H=rd;else{H=od;var M=ad}else(j=k.nodeName)&&j.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(H=sd);if(H&&(H=H(e,w))){Ri(T,H,t,v);break e}M&&M(e,k,w),e==="focusout"&&(M=k._wrapperState)&&M.controlled&&k.type==="number"&&Oo(k,"number",k.value)}switch(M=w?St(w):window,e){case"focusin":(Ai(M)||M.contentEditable==="true")&&(kt=M,fs=w,aa=null);break;case"focusout":aa=fs=kt=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,zi(T,t,v);break;case"selectionchange":if(hd)break;case"keydown":case"keyup":zi(T,t,v)}var O;if(hs)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else yt?Li(e,t)&&(W="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(W="onCompositionStart");W&&(Ci&&t.locale!=="ko"&&(yt||W!=="onCompositionStart"?W==="onCompositionEnd"&&yt&&(O=Ti()):(Mn=v,as="value"in Mn?Mn.value:Mn.textContent,yt=!0)),M=Ja(w,W),0<M.length&&(W=new Ei(W,e,null,t,v),T.push({event:W,listeners:M}),O?W.data=O:(O=Pi(t),O!==null&&(W.data=O)))),(O=qu?Zu(e,t):Xu(e,t))&&(w=Ja(w,"onBeforeInput"),0<w.length&&(v=new Ei("onBeforeInput","beforeinput",null,t,v),T.push({event:v,listeners:w}),v.data=O))}qi(T,n)})}function ra(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ja(e,n){for(var t=n+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=Ft(e,t),s!=null&&a.unshift(ra(e,s,o)),s=Ft(e,n),s!=null&&a.push(ra(e,s,o))),e=e.return}return a}function vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xi(e,n,t,a,o){for(var s=n._reactName,r=[];t!==null&&t!==a;){var h=t,d=h.alternate,w=h.stateNode;if(d!==null&&d===a)break;h.tag===5&&w!==null&&(h=w,o?(d=Ft(t,s),d!=null&&r.unshift(ra(t,d,h))):o||(d=Ft(t,s),d!=null&&r.push(ra(t,d,h)))),t=t.return}r.length!==0&&e.push({event:n,listeners:r})}var fd=/\r\n?/g,pd=/\u0000|\uFFFD/g;function el(e){return(typeof e=="string"?e:""+e).replace(fd,`
`).replace(pd,"")}function Ya(e,n,t){if(n=el(n),el(e)!==n&&t)throw Error(u(425))}function $a(){}var bs=null,vs=null;function Ts(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ss=typeof setTimeout=="function"?setTimeout:void 0,md=typeof clearTimeout=="function"?clearTimeout:void 0,nl=typeof Promise=="function"?Promise:void 0,gd=typeof queueMicrotask=="function"?queueMicrotask:typeof nl<"u"?function(e){return nl.resolve(null).then(e).catch(wd)}:Ss;function wd(e){setTimeout(function(){throw e})}function xs(e,n){var t=n,a=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(a===0){e.removeChild(o),Qt(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=o}while(t);Qt(n)}function In(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function tl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Tt=Math.random().toString(36).slice(2),gn="__reactFiber$"+Tt,ia="__reactProps$"+Tt,Tn="__reactContainer$"+Tt,Es="__reactEvents$"+Tt,yd="__reactListeners$"+Tt,kd="__reactHandles$"+Tt;function nt(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Tn]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=tl(e);e!==null;){if(t=e[gn])return t;e=tl(e)}return n}e=t,t=e.parentNode}return null}function la(e){return e=e[gn]||e[Tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Va(e){return e[ia]||null}var Ns=[],xt=-1;function Wn(e){return{current:e}}function ae(e){0>xt||(e.current=Ns[xt],Ns[xt]=null,xt--)}function ne(e,n){xt++,Ns[xt]=e.current,e.current=n}var Fn={},Se=Wn(Fn),Re=Wn(!1),tt=Fn;function Et(e,n){var t=e.type.contextTypes;if(!t)return Fn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in t)o[s]=n[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function Qa(){ae(Re),ae(Se)}function al(e,n,t){if(Se.current!==Fn)throw Error(u(168));ne(Se,n),ne(Re,t)}function ol(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var o in a)if(!(o in n))throw Error(u(108,ee(e)||"Unknown",o));return P({},t,a)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,tt=Se.current,ne(Se,e),ne(Re,Re.current),!0}function sl(e,n,t){var a=e.stateNode;if(!a)throw Error(u(169));t?(e=ol(e,n,tt),a.__reactInternalMemoizedMergedChildContext=e,ae(Re),ae(Se),ne(Se,e)):ae(Re),ne(Re,t)}var Sn=null,Za=!1,Cs=!1;function rl(e){Sn===null?Sn=[e]:Sn.push(e)}function bd(e){Za=!0,rl(e)}function zn(){if(!Cs&&Sn!==null){Cs=!0;var e=0,n=Z;try{var t=Sn;for(Z=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Sn=null,Za=!1}catch(o){throw Sn!==null&&(Sn=Sn.slice(e+1)),li(Vo,zn),o}finally{Z=n,Cs=!1}}return null}var Nt=[],Ct=0,Xa=null,eo=0,Ye=[],$e=0,at=null,xn=1,En="";function ot(e,n){Nt[Ct++]=eo,Nt[Ct++]=Xa,Xa=e,eo=n}function il(e,n,t){Ye[$e++]=xn,Ye[$e++]=En,Ye[$e++]=at,at=e;var a=xn;e=En;var o=32-an(a)-1;a&=~(1<<o),t+=1;var s=32-an(n)+o;if(30<s){var r=o-o%5;s=(a&(1<<r)-1).toString(32),a>>=r,o-=r,xn=1<<32-an(n)+o|t<<o|a,En=s+e}else xn=1<<s|t<<o|a,En=e}function js(e){e.return!==null&&(ot(e,1),il(e,1,0))}function Bs(e){for(;e===Xa;)Xa=Nt[--Ct],Nt[Ct]=null,eo=Nt[--Ct],Nt[Ct]=null;for(;e===at;)at=Ye[--$e],Ye[$e]=null,En=Ye[--$e],Ye[$e]=null,xn=Ye[--$e],Ye[$e]=null}var ze=null,_e=null,re=!1,sn=null;function ll(e,n){var t=Ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function hl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,_e=In(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=at!==null?{id:xn,overflow:En}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,_e=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ps(e){if(re){var n=_e;if(n){var t=n;if(!hl(e,n)){if(Ls(e))throw Error(u(418));n=In(t.nextSibling);var a=ze;n&&hl(e,n)?ll(a,t):(e.flags=e.flags&-4097|2,re=!1,ze=e)}}else{if(Ls(e))throw Error(u(418));e.flags=e.flags&-4097|2,re=!1,ze=e}}}function ul(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function no(e){if(e!==ze)return!1;if(!re)return ul(e),re=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ts(e.type,e.memoizedProps)),n&&(n=_e)){if(Ls(e))throw dl(),Error(u(418));for(;n;)ll(e,n),n=In(n.nextSibling)}if(ul(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=In(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=ze?In(e.stateNode.nextSibling):null;return!0}function dl(){for(var e=_e;e;)e=In(e.nextSibling)}function jt(){_e=ze=null,re=!1}function As(e){sn===null?sn=[e]:sn.push(e)}var vd=Te.ReactCurrentBatchConfig;function ha(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(u(309));var a=t.stateNode}if(!a)throw Error(u(147,e));var o=a,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(r){var h=o.refs;r===null?delete h[s]:h[s]=r},n._stringRef=s,n)}if(typeof e!="string")throw Error(u(284));if(!t._owner)throw Error(u(290,e))}return e}function to(e,n){throw e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function cl(e){var n=e._init;return n(e._payload)}function fl(e){function n(m,c){if(e){var g=m.deletions;g===null?(m.deletions=[c],m.flags|=16):g.push(c)}}function t(m,c){if(!e)return null;for(;c!==null;)n(m,c),c=c.sibling;return null}function a(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function o(m,c){return m=Qn(m,c),m.index=0,m.sibling=null,m}function s(m,c,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<c?(m.flags|=2,c):g):(m.flags|=2,c)):(m.flags|=1048576,c)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function h(m,c,g,S){return c===null||c.tag!==6?(c=Sr(g,m.mode,S),c.return=m,c):(c=o(c,g),c.return=m,c)}function d(m,c,g,S){var H=g.type;return H===Pe?v(m,c,g.props.children,S,g.key):c!==null&&(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ae&&cl(H)===c.type)?(S=o(c,g.props),S.ref=ha(m,c,g),S.return=m,S):(S=Co(g.type,g.key,g.props,null,m.mode,S),S.ref=ha(m,c,g),S.return=m,S)}function w(m,c,g,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=xr(g,m.mode,S),c.return=m,c):(c=o(c,g.children||[]),c.return=m,c)}function v(m,c,g,S,H){return c===null||c.tag!==7?(c=ct(g,m.mode,S,H),c.return=m,c):(c=o(c,g),c.return=m,c)}function T(m,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Sr(""+c,m.mode,g),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case nn:return g=Co(c.type,c.key,c.props,null,m.mode,g),g.ref=ha(m,null,c),g.return=m,g;case Ce:return c=xr(c,m.mode,g),c.return=m,c;case Ae:var S=c._init;return T(m,S(c._payload),g)}if(Ot(c)||I(c))return c=ct(c,m.mode,g,null),c.return=m,c;to(m,c)}return null}function k(m,c,g,S){var H=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return H!==null?null:h(m,c,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:return g.key===H?d(m,c,g,S):null;case Ce:return g.key===H?w(m,c,g,S):null;case Ae:return H=g._init,k(m,c,H(g._payload),S)}if(Ot(g)||I(g))return H!==null?null:v(m,c,g,S,null);to(m,g)}return null}function j(m,c,g,S,H){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,h(c,m,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nn:return m=m.get(S.key===null?g:S.key)||null,d(c,m,S,H);case Ce:return m=m.get(S.key===null?g:S.key)||null,w(c,m,S,H);case Ae:var M=S._init;return j(m,c,g,M(S._payload),H)}if(Ot(S)||I(S))return m=m.get(g)||null,v(c,m,S,H,null);to(c,S)}return null}function A(m,c,g,S){for(var H=null,M=null,O=c,W=c=0,ye=null;O!==null&&W<g.length;W++){O.index>W?(ye=O,O=null):ye=O.sibling;var Q=k(m,O,g[W],S);if(Q===null){O===null&&(O=ye);break}e&&O&&Q.alternate===null&&n(m,O),c=s(Q,c,W),M===null?H=Q:M.sibling=Q,M=Q,O=ye}if(W===g.length)return t(m,O),re&&ot(m,W),H;if(O===null){for(;W<g.length;W++)O=T(m,g[W],S),O!==null&&(c=s(O,c,W),M===null?H=O:M.sibling=O,M=O);return re&&ot(m,W),H}for(O=a(m,O);W<g.length;W++)ye=j(O,m,W,g[W],S),ye!==null&&(e&&ye.alternate!==null&&O.delete(ye.key===null?W:ye.key),c=s(ye,c,W),M===null?H=ye:M.sibling=ye,M=ye);return e&&O.forEach(function(qn){return n(m,qn)}),re&&ot(m,W),H}function R(m,c,g,S){var H=I(g);if(typeof H!="function")throw Error(u(150));if(g=H.call(g),g==null)throw Error(u(151));for(var M=H=null,O=c,W=c=0,ye=null,Q=g.next();O!==null&&!Q.done;W++,Q=g.next()){O.index>W?(ye=O,O=null):ye=O.sibling;var qn=k(m,O,Q.value,S);if(qn===null){O===null&&(O=ye);break}e&&O&&qn.alternate===null&&n(m,O),c=s(qn,c,W),M===null?H=qn:M.sibling=qn,M=qn,O=ye}if(Q.done)return t(m,O),re&&ot(m,W),H;if(O===null){for(;!Q.done;W++,Q=g.next())Q=T(m,Q.value,S),Q!==null&&(c=s(Q,c,W),M===null?H=Q:M.sibling=Q,M=Q);return re&&ot(m,W),H}for(O=a(m,O);!Q.done;W++,Q=g.next())Q=j(O,m,W,Q.value,S),Q!==null&&(e&&Q.alternate!==null&&O.delete(Q.key===null?W:Q.key),c=s(Q,c,W),M===null?H=Q:M.sibling=Q,M=Q);return e&&O.forEach(function(ec){return n(m,ec)}),re&&ot(m,W),H}function ce(m,c,g,S){if(typeof g=="object"&&g!==null&&g.type===Pe&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case nn:e:{for(var H=g.key,M=c;M!==null;){if(M.key===H){if(H=g.type,H===Pe){if(M.tag===7){t(m,M.sibling),c=o(M,g.props.children),c.return=m,m=c;break e}}else if(M.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ae&&cl(H)===M.type){t(m,M.sibling),c=o(M,g.props),c.ref=ha(m,M,g),c.return=m,m=c;break e}t(m,M);break}else n(m,M);M=M.sibling}g.type===Pe?(c=ct(g.props.children,m.mode,S,g.key),c.return=m,m=c):(S=Co(g.type,g.key,g.props,null,m.mode,S),S.ref=ha(m,c,g),S.return=m,m=S)}return r(m);case Ce:e:{for(M=g.key;c!==null;){if(c.key===M)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){t(m,c.sibling),c=o(c,g.children||[]),c.return=m,m=c;break e}else{t(m,c);break}else n(m,c);c=c.sibling}c=xr(g,m.mode,S),c.return=m,m=c}return r(m);case Ae:return M=g._init,ce(m,c,M(g._payload),S)}if(Ot(g))return A(m,c,g,S);if(I(g))return R(m,c,g,S);to(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(t(m,c.sibling),c=o(c,g),c.return=m,m=c):(t(m,c),c=Sr(g,m.mode,S),c.return=m,m=c),r(m)):t(m,c)}return ce}var Bt=fl(!0),pl=fl(!1),ao=Wn(null),oo=null,Lt=null,Rs=null;function Hs(){Rs=Lt=oo=null}function Ks(e){var n=ao.current;ae(ao),e._currentValue=n}function Ds(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Pt(e,n){oo=e,Rs=Lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ke=!0),e.firstContext=null)}function Ve(e){var n=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:n,next:null},Lt===null){if(oo===null)throw Error(u(308));Lt=e,oo.dependencies={lanes:0,firstContext:e}}else Lt=Lt.next=e;return n}var st=null;function Ms(e){st===null?st=[e]:st.push(e)}function ml(e,n,t,a){var o=n.interleaved;return o===null?(t.next=t,Ms(n)):(t.next=o.next,o.next=t),n.interleaved=t,Nn(e,a)}function Nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var _n=!1;function Os(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Gn(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Y&2)!==0){var o=a.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),a.pending=n,Nn(e,t)}return o=a.interleaved,o===null?(n.next=n,Ms(a)):(n.next=o.next,o.next=n),a.interleaved=n,Nn(e,t)}function so(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Zo(e,t)}}function wl(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var r={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?o=s=r:s=s.next=r,t=t.next}while(t!==null);s===null?o=s=n:s=s.next=n}else o=s=n;t={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ro(e,n,t,a){var o=e.updateQueue;_n=!1;var s=o.firstBaseUpdate,r=o.lastBaseUpdate,h=o.shared.pending;if(h!==null){o.shared.pending=null;var d=h,w=d.next;d.next=null,r===null?s=w:r.next=w,r=d;var v=e.alternate;v!==null&&(v=v.updateQueue,h=v.lastBaseUpdate,h!==r&&(h===null?v.firstBaseUpdate=w:h.next=w,v.lastBaseUpdate=d))}if(s!==null){var T=o.baseState;r=0,v=w=d=null,h=s;do{var k=h.lane,j=h.eventTime;if((a&k)===k){v!==null&&(v=v.next={eventTime:j,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var A=e,R=h;switch(k=n,j=t,R.tag){case 1:if(A=R.payload,typeof A=="function"){T=A.call(j,T,k);break e}T=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=R.payload,k=typeof A=="function"?A.call(j,T,k):A,k==null)break e;T=P({},T,k);break e;case 2:_n=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,k=o.effects,k===null?o.effects=[h]:k.push(h))}else j={eventTime:j,lane:k,tag:h.tag,payload:h.payload,callback:h.callback,next:null},v===null?(w=v=j,d=T):v=v.next=j,r|=k;if(h=h.next,h===null){if(h=o.shared.pending,h===null)break;k=h,h=k.next,k.next=null,o.lastBaseUpdate=k,o.shared.pending=null}}while(!0);if(v===null&&(d=T),o.baseState=d,o.firstBaseUpdate=w,o.lastBaseUpdate=v,n=o.shared.interleaved,n!==null){o=n;do r|=o.lane,o=o.next;while(o!==n)}else s===null&&(o.shared.lanes=0);lt|=r,e.lanes=r,e.memoizedState=T}}function yl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],o=a.callback;if(o!==null){if(a.callback=null,a=t,typeof o!="function")throw Error(u(191,o));o.call(a)}}}var ua={},wn=Wn(ua),da=Wn(ua),ca=Wn(ua);function rt(e){if(e===ua)throw Error(u(174));return e}function Is(e,n){switch(ne(ca,n),ne(da,e),ne(wn,ua),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Wo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Wo(n,e)}ae(wn),ne(wn,n)}function At(){ae(wn),ae(da),ae(ca)}function kl(e){rt(ca.current);var n=rt(wn.current),t=Wo(n,e.type);n!==t&&(ne(da,e),ne(wn,t))}function Ws(e){da.current===e&&(ae(wn),ae(da))}var ie=Wn(0);function io(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fs=[];function zs(){for(var e=0;e<Fs.length;e++)Fs[e]._workInProgressVersionPrimary=null;Fs.length=0}var lo=Te.ReactCurrentDispatcher,_s=Te.ReactCurrentBatchConfig,it=0,le=null,pe=null,ge=null,ho=!1,fa=!1,pa=0,Td=0;function xe(){throw Error(u(321))}function Gs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function Us(e,n,t,a,o,s){if(it=s,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,lo.current=e===null||e.memoizedState===null?Nd:Cd,e=t(a,o),fa){s=0;do{if(fa=!1,pa=0,25<=s)throw Error(u(301));s+=1,ge=pe=null,n.updateQueue=null,lo.current=jd,e=t(a,o)}while(fa)}if(lo.current=fo,n=pe!==null&&pe.next!==null,it=0,ge=pe=le=null,ho=!1,n)throw Error(u(300));return e}function Js(){var e=pa!==0;return pa=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?le.memoizedState=ge=e:ge=ge.next=e,ge}function Qe(){if(pe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var n=ge===null?le.memoizedState:ge.next;if(n!==null)ge=n,pe=e;else{if(e===null)throw Error(u(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?le.memoizedState=ge=e:ge=ge.next=e}return ge}function ma(e,n){return typeof n=="function"?n(e):n}function Ys(e){var n=Qe(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=pe,o=a.baseQueue,s=t.pending;if(s!==null){if(o!==null){var r=o.next;o.next=s.next,s.next=r}a.baseQueue=o=s,t.pending=null}if(o!==null){s=o.next,a=a.baseState;var h=r=null,d=null,w=s;do{var v=w.lane;if((it&v)===v)d!==null&&(d=d.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),a=w.hasEagerState?w.eagerState:e(a,w.action);else{var T={lane:v,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};d===null?(h=d=T,r=a):d=d.next=T,le.lanes|=v,lt|=v}w=w.next}while(w!==null&&w!==s);d===null?r=a:d.next=h,on(a,n.memoizedState)||(Ke=!0),n.memoizedState=a,n.baseState=r,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){o=e;do s=o.lane,le.lanes|=s,lt|=s,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function $s(e){var n=Qe(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,o=t.pending,s=n.memoizedState;if(o!==null){t.pending=null;var r=o=o.next;do s=e(s,r.action),r=r.next;while(r!==o);on(s,n.memoizedState)||(Ke=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function bl(){}function vl(e,n){var t=le,a=Qe(),o=n(),s=!on(a.memoizedState,o);if(s&&(a.memoizedState=o,Ke=!0),a=a.queue,Vs(xl.bind(null,t,a,e),[e]),a.getSnapshot!==n||s||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,ga(9,Sl.bind(null,t,a,o,n),void 0,null),we===null)throw Error(u(349));(it&30)!==0||Tl(t,n,o)}return o}function Tl(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Sl(e,n,t,a){n.value=t,n.getSnapshot=a,El(n)&&Nl(e)}function xl(e,n,t){return t(function(){El(n)&&Nl(e)})}function El(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function Nl(e){var n=Nn(e,1);n!==null&&un(n,e,1,-1)}function Cl(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},n.queue=e,e=e.dispatch=Ed.bind(null,le,e),[n.memoizedState,e]}function ga(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=le.updateQueue,n===null?(n={lastEffect:null,stores:null},le.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function jl(){return Qe().memoizedState}function uo(e,n,t,a){var o=yn();le.flags|=e,o.memoizedState=ga(1|n,t,void 0,a===void 0?null:a)}function co(e,n,t,a){var o=Qe();a=a===void 0?null:a;var s=void 0;if(pe!==null){var r=pe.memoizedState;if(s=r.destroy,a!==null&&Gs(a,r.deps)){o.memoizedState=ga(n,t,s,a);return}}le.flags|=e,o.memoizedState=ga(1|n,t,s,a)}function Bl(e,n){return uo(8390656,8,e,n)}function Vs(e,n){return co(2048,8,e,n)}function Ll(e,n){return co(4,2,e,n)}function Pl(e,n){return co(4,4,e,n)}function Al(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rl(e,n,t){return t=t!=null?t.concat([e]):null,co(4,4,Al.bind(null,n,e),t)}function Qs(){}function Hl(e,n){var t=Qe();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Gs(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Kl(e,n){var t=Qe();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Gs(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Dl(e,n,t){return(it&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=t):(on(t,n)||(t=ci(),le.lanes|=t,lt|=t,e.baseState=!0),n)}function Sd(e,n){var t=Z;Z=t!==0&&4>t?t:4,e(!0);var a=_s.transition;_s.transition={};try{e(!1),n()}finally{Z=t,_s.transition=a}}function Ml(){return Qe().memoizedState}function xd(e,n,t){var a=$n(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Ol(e))Il(n,t);else if(t=ml(e,n,t,a),t!==null){var o=Be();un(t,e,a,o),Wl(t,n,a)}}function Ed(e,n,t){var a=$n(e),o={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Il(n,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var r=n.lastRenderedState,h=s(r,t);if(o.hasEagerState=!0,o.eagerState=h,on(h,r)){var d=n.interleaved;d===null?(o.next=o,Ms(n)):(o.next=d.next,d.next=o),n.interleaved=o;return}}catch{}finally{}t=ml(e,n,o,a),t!==null&&(o=Be(),un(t,e,a,o),Wl(t,n,a))}}function Ol(e){var n=e.alternate;return e===le||n!==null&&n===le}function Il(e,n){fa=ho=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Wl(e,n,t){if((t&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Zo(e,t)}}var fo={readContext:Ve,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Nd={readContext:Ve,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:Ve,useEffect:Bl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,uo(4194308,4,Al.bind(null,n,e),t)},useLayoutEffect:function(e,n){return uo(4194308,4,e,n)},useInsertionEffect:function(e,n){return uo(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=yn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=xd.bind(null,le,e),[a.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:Cl,useDebugValue:Qs,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Cl(!1),n=e[0];return e=Sd.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=le,o=yn();if(re){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),we===null)throw Error(u(349));(it&30)!==0||Tl(a,n,t)}o.memoizedState=t;var s={value:t,getSnapshot:n};return o.queue=s,Bl(xl.bind(null,a,s,e),[e]),a.flags|=2048,ga(9,Sl.bind(null,a,s,t,n),void 0,null),t},useId:function(){var e=yn(),n=we.identifierPrefix;if(re){var t=En,a=xn;t=(a&~(1<<32-an(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=pa++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Td++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Cd={readContext:Ve,useCallback:Hl,useContext:Ve,useEffect:Vs,useImperativeHandle:Rl,useInsertionEffect:Ll,useLayoutEffect:Pl,useMemo:Kl,useReducer:Ys,useRef:jl,useState:function(){return Ys(ma)},useDebugValue:Qs,useDeferredValue:function(e){var n=Qe();return Dl(n,pe.memoizedState,e)},useTransition:function(){var e=Ys(ma)[0],n=Qe().memoizedState;return[e,n]},useMutableSource:bl,useSyncExternalStore:vl,useId:Ml,unstable_isNewReconciler:!1},jd={readContext:Ve,useCallback:Hl,useContext:Ve,useEffect:Vs,useImperativeHandle:Rl,useInsertionEffect:Ll,useLayoutEffect:Pl,useMemo:Kl,useReducer:$s,useRef:jl,useState:function(){return $s(ma)},useDebugValue:Qs,useDeferredValue:function(e){var n=Qe();return pe===null?n.memoizedState=e:Dl(n,pe.memoizedState,e)},useTransition:function(){var e=$s(ma)[0],n=Qe().memoizedState;return[e,n]},useMutableSource:bl,useSyncExternalStore:vl,useId:Ml,unstable_isNewReconciler:!1};function rn(e,n){if(e&&e.defaultProps){n=P({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function qs(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:P({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var po={isMounted:function(e){return(e=e._reactInternals)?et(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Be(),o=$n(e),s=Cn(a,o);s.payload=n,t!=null&&(s.callback=t),n=Gn(e,s,o),n!==null&&(un(n,e,o,a),so(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Be(),o=$n(e),s=Cn(a,o);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=Gn(e,s,o),n!==null&&(un(n,e,o,a),so(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),a=$n(e),o=Cn(t,a);o.tag=2,n!=null&&(o.callback=n),n=Gn(e,o,a),n!==null&&(un(n,e,a,t),so(n,e,a))}};function Fl(e,n,t,a,o,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,r):n.prototype&&n.prototype.isPureReactComponent?!ta(t,a)||!ta(o,s):!0}function zl(e,n,t){var a=!1,o=Fn,s=n.contextType;return typeof s=="object"&&s!==null?s=Ve(s):(o=He(n)?tt:Se.current,a=n.contextTypes,s=(a=a!=null)?Et(e,o):Fn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=po,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),n}function _l(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&po.enqueueReplaceState(n,n.state,null)}function Zs(e,n,t,a){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Os(e);var s=n.contextType;typeof s=="object"&&s!==null?o.context=Ve(s):(s=He(n)?tt:Se.current,o.context=Et(e,s)),o.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(qs(e,n,s,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&po.enqueueReplaceState(o,o.state,null),ro(e,t,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Rt(e,n){try{var t="",a=n;do t+=$(a),a=a.return;while(a);var o=t}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:o,digest:null}}function Xs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function er(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Bd=typeof WeakMap=="function"?WeakMap:Map;function Gl(e,n,t){t=Cn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){vo||(vo=!0,mr=a),er(e,n)},t}function Ul(e,n,t){t=Cn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=n.value;t.payload=function(){return a(o)},t.callback=function(){er(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){er(e,n),typeof a!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),t}function Jl(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Bd;var o=new Set;a.set(n,o)}else o=a.get(n),o===void 0&&(o=new Set,a.set(n,o));o.has(t)||(o.add(t),e=_d.bind(null,e,n,t),n.then(e,e))}function Yl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function $l(e,n,t,a,o){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Cn(-1,1),n.tag=2,Gn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Ld=Te.ReactCurrentOwner,Ke=!1;function je(e,n,t,a){n.child=e===null?pl(n,null,t,a):Bt(n,e.child,t,a)}function Vl(e,n,t,a,o){t=t.render;var s=n.ref;return Pt(n,o),a=Us(e,n,t,a,s,o),t=Js(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,jn(e,n,o)):(re&&t&&js(n),n.flags|=1,je(e,n,a,o),n.child)}function Ql(e,n,t,a,o){if(e===null){var s=t.type;return typeof s=="function"&&!Tr(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,ql(e,n,s,a,o)):(e=Co(t.type,null,a,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,(e.lanes&o)===0){var r=s.memoizedProps;if(t=t.compare,t=t!==null?t:ta,t(r,a)&&e.ref===n.ref)return jn(e,n,o)}return n.flags|=1,e=Qn(s,a),e.ref=n.ref,e.return=n,n.child=e}function ql(e,n,t,a,o){if(e!==null){var s=e.memoizedProps;if(ta(s,a)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=a=s,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ke=!0);else return n.lanes=e.lanes,jn(e,n,o)}return nr(e,n,t,a,o)}function Zl(e,n,t){var a=n.pendingProps,o=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Kt,Ge),Ge|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(Kt,Ge),Ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:t,ne(Kt,Ge),Ge|=a}else s!==null?(a=s.baseLanes|t,n.memoizedState=null):a=t,ne(Kt,Ge),Ge|=a;return je(e,n,o,t),n.child}function Xl(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function nr(e,n,t,a,o){var s=He(t)?tt:Se.current;return s=Et(n,s),Pt(n,o),t=Us(e,n,t,a,s,o),a=Js(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,jn(e,n,o)):(re&&a&&js(n),n.flags|=1,je(e,n,t,o),n.child)}function eh(e,n,t,a,o){if(He(t)){var s=!0;qa(n)}else s=!1;if(Pt(n,o),n.stateNode===null)go(e,n),zl(n,t,a),Zs(n,t,a,o),a=!0;else if(e===null){var r=n.stateNode,h=n.memoizedProps;r.props=h;var d=r.context,w=t.contextType;typeof w=="object"&&w!==null?w=Ve(w):(w=He(t)?tt:Se.current,w=Et(n,w));var v=t.getDerivedStateFromProps,T=typeof v=="function"||typeof r.getSnapshotBeforeUpdate=="function";T||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==a||d!==w)&&_l(n,r,a,w),_n=!1;var k=n.memoizedState;r.state=k,ro(n,a,r,o),d=n.memoizedState,h!==a||k!==d||Re.current||_n?(typeof v=="function"&&(qs(n,t,v,a),d=n.memoizedState),(h=_n||Fl(n,t,h,a,k,d,w))?(T||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),r.props=a,r.state=d,r.context=w,a=h):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{r=n.stateNode,gl(e,n),h=n.memoizedProps,w=n.type===n.elementType?h:rn(n.type,h),r.props=w,T=n.pendingProps,k=r.context,d=t.contextType,typeof d=="object"&&d!==null?d=Ve(d):(d=He(t)?tt:Se.current,d=Et(n,d));var j=t.getDerivedStateFromProps;(v=typeof j=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h!==T||k!==d)&&_l(n,r,a,d),_n=!1,k=n.memoizedState,r.state=k,ro(n,a,r,o);var A=n.memoizedState;h!==T||k!==A||Re.current||_n?(typeof j=="function"&&(qs(n,t,j,a),A=n.memoizedState),(w=_n||Fl(n,t,w,a,k,A,d)||!1)?(v||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,d)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=A),r.props=a,r.state=A,r.context=d,a=w):(typeof r.componentDidUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),a=!1)}return tr(e,n,t,a,s,o)}function tr(e,n,t,a,o,s){Xl(e,n);var r=(n.flags&128)!==0;if(!a&&!r)return o&&sl(n,t,!1),jn(e,n,s);a=n.stateNode,Ld.current=n;var h=r&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&r?(n.child=Bt(n,e.child,null,s),n.child=Bt(n,null,h,s)):je(e,n,h,s),n.memoizedState=a.state,o&&sl(n,t,!0),n.child}function nh(e){var n=e.stateNode;n.pendingContext?al(e,n.pendingContext,n.pendingContext!==n.context):n.context&&al(e,n.context,!1),Is(e,n.containerInfo)}function th(e,n,t,a,o){return jt(),As(o),n.flags|=256,je(e,n,t,a),n.child}var ar={dehydrated:null,treeContext:null,retryLane:0};function or(e){return{baseLanes:e,cachePool:null,transitions:null}}function ah(e,n,t){var a=n.pendingProps,o=ie.current,s=!1,r=(n.flags&128)!==0,h;if((h=r)||(h=e!==null&&e.memoizedState===null?!1:(o&2)!==0),h?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(ie,o&1),e===null)return Ps(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(r=a.children,e=a.fallback,s?(a=n.mode,s=n.child,r={mode:"hidden",children:r},(a&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=r):s=jo(r,a,0,null),e=ct(e,a,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=or(t),n.memoizedState=ar,e):sr(n,r));if(o=e.memoizedState,o!==null&&(h=o.dehydrated,h!==null))return Pd(e,n,r,a,h,o,t);if(s){s=a.fallback,r=n.mode,o=e.child,h=o.sibling;var d={mode:"hidden",children:a.children};return(r&1)===0&&n.child!==o?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=Qn(o,d),a.subtreeFlags=o.subtreeFlags&14680064),h!==null?s=Qn(h,s):(s=ct(s,r,t,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,a=s,s=n.child,r=e.child.memoizedState,r=r===null?or(t):{baseLanes:r.baseLanes|t,cachePool:null,transitions:r.transitions},s.memoizedState=r,s.childLanes=e.childLanes&~t,n.memoizedState=ar,a}return s=e.child,e=s.sibling,a=Qn(s,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function sr(e,n){return n=jo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mo(e,n,t,a){return a!==null&&As(a),Bt(n,e.child,null,t),e=sr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pd(e,n,t,a,o,s,r){if(t)return n.flags&256?(n.flags&=-257,a=Xs(Error(u(422))),mo(e,n,r,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=a.fallback,o=n.mode,a=jo({mode:"visible",children:a.children},o,0,null),s=ct(s,o,r,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,(n.mode&1)!==0&&Bt(n,e.child,null,r),n.child.memoizedState=or(r),n.memoizedState=ar,s);if((n.mode&1)===0)return mo(e,n,r,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var h=a.dgst;return a=h,s=Error(u(419)),a=Xs(s,a,void 0),mo(e,n,r,a)}if(h=(r&e.childLanes)!==0,Ke||h){if(a=we,a!==null){switch(r&-r){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(a.suspendedLanes|r))!==0?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Nn(e,o),un(a,e,o,-1))}return vr(),a=Xs(Error(u(421))),mo(e,n,r,a)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Gd.bind(null,e),o._reactRetry=n,null):(e=s.treeContext,_e=In(o.nextSibling),ze=n,re=!0,sn=null,e!==null&&(Ye[$e++]=xn,Ye[$e++]=En,Ye[$e++]=at,xn=e.id,En=e.overflow,at=n),n=sr(n,a.children),n.flags|=4096,n)}function oh(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Ds(e.return,n,t)}function rr(e,n,t,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:o}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=o)}function sh(e,n,t){var a=n.pendingProps,o=a.revealOrder,s=a.tail;if(je(e,n,a.children,t),a=ie.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oh(e,t,n);else if(e.tag===19)oh(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ne(ie,a),(n.mode&1)===0)n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&io(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),rr(n,!1,o,t,s);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&io(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}rr(n,!0,t,null,s);break;case"together":rr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function go(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),lt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=Qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Ad(e,n,t){switch(n.tag){case 3:nh(n),jt();break;case 5:kl(n);break;case 1:He(n.type)&&qa(n);break;case 4:Is(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,o=n.memoizedProps.value;ne(ao,a._currentValue),a._currentValue=o;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ne(ie,ie.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?ah(e,n,t):(ne(ie,ie.current&1),e=jn(e,n,t),e!==null?e.sibling:null);ne(ie,ie.current&1);break;case 19:if(a=(t&n.childLanes)!==0,(e.flags&128)!==0){if(a)return sh(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(ie,ie.current),a)break;return null;case 22:case 23:return n.lanes=0,Zl(e,n,t)}return jn(e,n,t)}var rh,ir,ih,lh;rh=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ir=function(){},ih=function(e,n,t,a){var o=e.memoizedProps;if(o!==a){e=n.stateNode,rt(wn.current);var s=null;switch(t){case"input":o=Do(e,o),a=Do(e,a),s=[];break;case"select":o=P({},o,{value:void 0}),a=P({},a,{value:void 0}),s=[];break;case"textarea":o=Io(e,o),a=Io(e,a),s=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=$a)}Fo(t,a);var r;t=null;for(w in o)if(!a.hasOwnProperty(w)&&o.hasOwnProperty(w)&&o[w]!=null)if(w==="style"){var h=o[w];for(r in h)h.hasOwnProperty(r)&&(t||(t={}),t[r]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(x.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in a){var d=a[w];if(h=o!=null?o[w]:void 0,a.hasOwnProperty(w)&&d!==h&&(d!=null||h!=null))if(w==="style")if(h){for(r in h)!h.hasOwnProperty(r)||d&&d.hasOwnProperty(r)||(t||(t={}),t[r]="");for(r in d)d.hasOwnProperty(r)&&h[r]!==d[r]&&(t||(t={}),t[r]=d[r])}else t||(s||(s=[]),s.push(w,t)),t=d;else w==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,h=h?h.__html:void 0,d!=null&&h!==d&&(s=s||[]).push(w,d)):w==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(w,""+d):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(x.hasOwnProperty(w)?(d!=null&&w==="onScroll"&&te("scroll",e),s||h===d||(s=[])):(s=s||[]).push(w,d))}t&&(s=s||[]).push("style",t);var w=s;(n.updateQueue=w)&&(n.flags|=4)}},lh=function(e,n,t,a){t!==a&&(n.flags|=4)};function wa(e,n){if(!re)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Rd(e,n,t){var a=n.pendingProps;switch(Bs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return He(n.type)&&Qa(),Ee(n),null;case 3:return a=n.stateNode,At(),ae(Re),ae(Se),zs(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(no(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sn!==null&&(yr(sn),sn=null))),ir(e,n),Ee(n),null;case 5:Ws(n);var o=rt(ca.current);if(t=n.type,e!==null&&n.stateNode!=null)ih(e,n,t,a,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ee(n),null}if(e=rt(wn.current),no(n)){a=n.stateNode,t=n.type;var s=n.memoizedProps;switch(a[gn]=n,a[ia]=s,e=(n.mode&1)!==0,t){case"dialog":te("cancel",a),te("close",a);break;case"iframe":case"object":case"embed":te("load",a);break;case"video":case"audio":for(o=0;o<oa.length;o++)te(oa[o],a);break;case"source":te("error",a);break;case"img":case"image":case"link":te("error",a),te("load",a);break;case"details":te("toggle",a);break;case"input":zr(a,s),te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},te("invalid",a);break;case"textarea":Ur(a,s),te("invalid",a)}Fo(t,s),o=null;for(var r in s)if(s.hasOwnProperty(r)){var h=s[r];r==="children"?typeof h=="string"?a.textContent!==h&&(s.suppressHydrationWarning!==!0&&Ya(a.textContent,h,e),o=["children",h]):typeof h=="number"&&a.textContent!==""+h&&(s.suppressHydrationWarning!==!0&&Ya(a.textContent,h,e),o=["children",""+h]):x.hasOwnProperty(r)&&h!=null&&r==="onScroll"&&te("scroll",a)}switch(t){case"input":xa(a),Gr(a,s,!0);break;case"textarea":xa(a),Yr(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=$a)}a=o,n.updateQueue=a,a!==null&&(n.flags|=4)}else{r=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$r(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=r.createElement(t,{is:a.is}):(e=r.createElement(t),t==="select"&&(r=e,a.multiple?r.multiple=!0:a.size&&(r.size=a.size))):e=r.createElementNS(e,t),e[gn]=n,e[ia]=a,rh(e,n,!1,!1),n.stateNode=e;e:{switch(r=zo(t,a),t){case"dialog":te("cancel",e),te("close",e),o=a;break;case"iframe":case"object":case"embed":te("load",e),o=a;break;case"video":case"audio":for(o=0;o<oa.length;o++)te(oa[o],e);o=a;break;case"source":te("error",e),o=a;break;case"img":case"image":case"link":te("error",e),te("load",e),o=a;break;case"details":te("toggle",e),o=a;break;case"input":zr(e,a),o=Do(e,a),te("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=P({},a,{value:void 0}),te("invalid",e);break;case"textarea":Ur(e,a),o=Io(e,a),te("invalid",e);break;default:o=a}Fo(t,o),h=o;for(s in h)if(h.hasOwnProperty(s)){var d=h[s];s==="style"?qr(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Vr(e,d)):s==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&It(e,d):typeof d=="number"&&It(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(x.hasOwnProperty(s)?d!=null&&s==="onScroll"&&te("scroll",e):d!=null&&en(e,s,d,r))}switch(t){case"input":xa(e),Gr(e,a,!1);break;case"textarea":xa(e),Yr(e);break;case"option":a.value!=null&&e.setAttribute("value",""+q(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?ft(e,!!a.multiple,s,!1):a.defaultValue!=null&&ft(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=$a)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)lh(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(t=rt(ca.current),rt(wn.current),no(n)){if(a=n.stateNode,t=n.memoizedProps,a[gn]=n,(s=a.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:Ya(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ya(a.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[gn]=n,n.stateNode=a}return Ee(n),null;case 13:if(ae(ie),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&_e!==null&&(n.mode&1)!==0&&(n.flags&128)===0)dl(),jt(),n.flags|=98560,s=!1;else if(s=no(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[gn]=n}else jt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),s=!1}else sn!==null&&(yr(sn),sn=null),s=!0;if(!s)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ie.current&1)!==0?me===0&&(me=3):vr())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return At(),ir(e,n),e===null&&sa(n.stateNode.containerInfo),Ee(n),null;case 10:return Ks(n.type._context),Ee(n),null;case 17:return He(n.type)&&Qa(),Ee(n),null;case 19:if(ae(ie),s=n.memoizedState,s===null)return Ee(n),null;if(a=(n.flags&128)!==0,r=s.rendering,r===null)if(a)wa(s,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(r=io(e),r!==null){for(n.flags|=128,wa(s,!1),a=r.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)s=t,e=a,s.flags&=14680066,r=s.alternate,r===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,s.type=r.type,e=r.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(ie,ie.current&1|2),n.child}e=e.sibling}s.tail!==null&&de()>Dt&&(n.flags|=128,a=!0,wa(s,!1),n.lanes=4194304)}else{if(!a)if(e=io(r),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!r.alternate&&!re)return Ee(n),null}else 2*de()-s.renderingStartTime>Dt&&t!==1073741824&&(n.flags|=128,a=!0,wa(s,!1),n.lanes=4194304);s.isBackwards?(r.sibling=n.child,n.child=r):(t=s.last,t!==null?t.sibling=r:n.child=r,s.last=r)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=de(),n.sibling=null,t=ie.current,ne(ie,a?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return br(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(Ge&1073741824)!==0&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(u(156,n.tag))}function Hd(e,n){switch(Bs(n),n.tag){case 1:return He(n.type)&&Qa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return At(),ae(Re),ae(Se),zs(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Ws(n),null;case 13:if(ae(ie),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));jt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(ie),null;case 4:return At(),null;case 10:return Ks(n.type._context),null;case 22:case 23:return br(),null;case 24:return null;default:return null}}var wo=!1,Ne=!1,Kd=typeof WeakSet=="function"?WeakSet:Set,L=null;function Ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){ue(e,n,a)}else t.current=null}function lr(e,n,t){try{t()}catch(a){ue(e,n,a)}}var hh=!1;function Dd(e,n){if(bs=Da,e=Fi(),cs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var r=0,h=-1,d=-1,w=0,v=0,T=e,k=null;n:for(;;){for(var j;T!==t||o!==0&&T.nodeType!==3||(h=r+o),T!==s||a!==0&&T.nodeType!==3||(d=r+a),T.nodeType===3&&(r+=T.nodeValue.length),(j=T.firstChild)!==null;)k=T,T=j;for(;;){if(T===e)break n;if(k===t&&++w===o&&(h=r),k===s&&++v===a&&(d=r),(j=T.nextSibling)!==null)break;T=k,k=T.parentNode}T=j}t=h===-1||d===-1?null:{start:h,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(vs={focusedElem:e,selectionRange:t},Da=!1,L=n;L!==null;)if(n=L,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,L=e;else for(;L!==null;){n=L;try{var A=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var R=A.memoizedProps,ce=A.memoizedState,m=n.stateNode,c=m.getSnapshotBeforeUpdate(n.elementType===n.type?R:rn(n.type,R),ce);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(S){ue(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,L=e;break}L=n.return}return A=hh,hh=!1,A}function ya(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&lr(n,t,s)}o=o.next}while(o!==a)}}function yo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function hr(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function uh(e){var n=e.alternate;n!==null&&(e.alternate=null,uh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[gn],delete n[ia],delete n[Es],delete n[yd],delete n[kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dh(e){return e.tag===5||e.tag===3||e.tag===4}function ch(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ur(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=$a));else if(a!==4&&(e=e.child,e!==null))for(ur(e,n,t),e=e.sibling;e!==null;)ur(e,n,t),e=e.sibling}function dr(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(dr(e,n,t),e=e.sibling;e!==null;)dr(e,n,t),e=e.sibling}var ke=null,ln=!1;function Un(e,n,t){for(t=t.child;t!==null;)fh(e,n,t),t=t.sibling}function fh(e,n,t){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(La,t)}catch{}switch(t.tag){case 5:Ne||Ht(t,n);case 6:var a=ke,o=ln;ke=null,Un(e,n,t),ke=a,ln=o,ke!==null&&(ln?(e=ke,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ke.removeChild(t.stateNode));break;case 18:ke!==null&&(ln?(e=ke,t=t.stateNode,e.nodeType===8?xs(e.parentNode,t):e.nodeType===1&&xs(e,t),Qt(e)):xs(ke,t.stateNode));break;case 4:a=ke,o=ln,ke=t.stateNode.containerInfo,ln=!0,Un(e,n,t),ke=a,ln=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var s=o,r=s.destroy;s=s.tag,r!==void 0&&((s&2)!==0||(s&4)!==0)&&lr(t,n,r),o=o.next}while(o!==a)}Un(e,n,t);break;case 1:if(!Ne&&(Ht(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(h){ue(t,n,h)}Un(e,n,t);break;case 21:Un(e,n,t);break;case 22:t.mode&1?(Ne=(a=Ne)||t.memoizedState!==null,Un(e,n,t),Ne=a):Un(e,n,t);break;default:Un(e,n,t)}}function ph(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Kd),n.forEach(function(a){var o=Ud.bind(null,e,a);t.has(a)||(t.add(a),a.then(o,o))})}}function hn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];try{var s=e,r=n,h=r;e:for(;h!==null;){switch(h.tag){case 5:ke=h.stateNode,ln=!1;break e;case 3:ke=h.stateNode.containerInfo,ln=!0;break e;case 4:ke=h.stateNode.containerInfo,ln=!0;break e}h=h.return}if(ke===null)throw Error(u(160));fh(s,r,o),ke=null,ln=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(w){ue(o,n,w)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mh(n,e),n=n.sibling}function mh(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(n,e),kn(e),a&4){try{ya(3,e,e.return),yo(3,e)}catch(R){ue(e,e.return,R)}try{ya(5,e,e.return)}catch(R){ue(e,e.return,R)}}break;case 1:hn(n,e),kn(e),a&512&&t!==null&&Ht(t,t.return);break;case 5:if(hn(n,e),kn(e),a&512&&t!==null&&Ht(t,t.return),e.flags&32){var o=e.stateNode;try{It(o,"")}catch(R){ue(e,e.return,R)}}if(a&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,r=t!==null?t.memoizedProps:s,h=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{h==="input"&&s.type==="radio"&&s.name!=null&&_r(o,s),zo(h,r);var w=zo(h,s);for(r=0;r<d.length;r+=2){var v=d[r],T=d[r+1];v==="style"?qr(o,T):v==="dangerouslySetInnerHTML"?Vr(o,T):v==="children"?It(o,T):en(o,v,T,w)}switch(h){case"input":Mo(o,s);break;case"textarea":Jr(o,s);break;case"select":var k=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?ft(o,!!s.multiple,j,!1):k!==!!s.multiple&&(s.defaultValue!=null?ft(o,!!s.multiple,s.defaultValue,!0):ft(o,!!s.multiple,s.multiple?[]:"",!1))}o[ia]=s}catch(R){ue(e,e.return,R)}}break;case 6:if(hn(n,e),kn(e),a&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(R){ue(e,e.return,R)}}break;case 3:if(hn(n,e),kn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(R){ue(e,e.return,R)}break;case 4:hn(n,e),kn(e);break;case 13:hn(n,e),kn(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(pr=de())),a&4&&ph(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(Ne=(w=Ne)||v,hn(n,e),Ne=w):hn(n,e),kn(e),a&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!v&&(e.mode&1)!==0)for(L=e,v=e.child;v!==null;){for(T=L=v;L!==null;){switch(k=L,j=k.child,k.tag){case 0:case 11:case 14:case 15:ya(4,k,k.return);break;case 1:Ht(k,k.return);var A=k.stateNode;if(typeof A.componentWillUnmount=="function"){a=k,t=k.return;try{n=a,A.props=n.memoizedProps,A.state=n.memoizedState,A.componentWillUnmount()}catch(R){ue(a,t,R)}}break;case 5:Ht(k,k.return);break;case 22:if(k.memoizedState!==null){yh(T);continue}}j!==null?(j.return=k,L=j):yh(T)}v=v.sibling}e:for(v=null,T=e;;){if(T.tag===5){if(v===null){v=T;try{o=T.stateNode,w?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(h=T.stateNode,d=T.memoizedProps.style,r=d!=null&&d.hasOwnProperty("display")?d.display:null,h.style.display=Qr("display",r))}catch(R){ue(e,e.return,R)}}}else if(T.tag===6){if(v===null)try{T.stateNode.nodeValue=w?"":T.memoizedProps}catch(R){ue(e,e.return,R)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===e)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===e)break e;for(;T.sibling===null;){if(T.return===null||T.return===e)break e;v===T&&(v=null),T=T.return}v===T&&(v=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:hn(n,e),kn(e),a&4&&ph(e);break;case 21:break;default:hn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(dh(t)){var a=t;break e}t=t.return}throw Error(u(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(It(o,""),a.flags&=-33);var s=ch(e);dr(e,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,h=ch(e);ur(e,h,r);break;default:throw Error(u(161))}}catch(d){ue(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Md(e,n,t){L=e,gh(e)}function gh(e,n,t){for(var a=(e.mode&1)!==0;L!==null;){var o=L,s=o.child;if(o.tag===22&&a){var r=o.memoizedState!==null||wo;if(!r){var h=o.alternate,d=h!==null&&h.memoizedState!==null||Ne;h=wo;var w=Ne;if(wo=r,(Ne=d)&&!w)for(L=o;L!==null;)r=L,d=r.child,r.tag===22&&r.memoizedState!==null?kh(o):d!==null?(d.return=r,L=d):kh(o);for(;s!==null;)L=s,gh(s),s=s.sibling;L=o,wo=h,Ne=w}wh(e)}else(o.subtreeFlags&8772)!==0&&s!==null?(s.return=o,L=s):wh(e)}}function wh(e){for(;L!==null;){var n=L;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ne||yo(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Ne)if(t===null)a.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:rn(n.type,t.memoizedProps);a.componentDidUpdate(o,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&yl(n,s,a);break;case 3:var r=n.updateQueue;if(r!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}yl(n,r,t)}break;case 5:var h=n.stateNode;if(t===null&&n.flags&4){t=h;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var w=n.alternate;if(w!==null){var v=w.memoizedState;if(v!==null){var T=v.dehydrated;T!==null&&Qt(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Ne||n.flags&512&&hr(n)}catch(k){ue(n,n.return,k)}}if(n===e){L=null;break}if(t=n.sibling,t!==null){t.return=n.return,L=t;break}L=n.return}}function yh(e){for(;L!==null;){var n=L;if(n===e){L=null;break}var t=n.sibling;if(t!==null){t.return=n.return,L=t;break}L=n.return}}function kh(e){for(;L!==null;){var n=L;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{yo(4,n)}catch(d){ue(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var o=n.return;try{a.componentDidMount()}catch(d){ue(n,o,d)}}var s=n.return;try{hr(n)}catch(d){ue(n,s,d)}break;case 5:var r=n.return;try{hr(n)}catch(d){ue(n,r,d)}}}catch(d){ue(n,n.return,d)}if(n===e){L=null;break}var h=n.sibling;if(h!==null){h.return=n.return,L=h;break}L=n.return}}var Od=Math.ceil,ko=Te.ReactCurrentDispatcher,cr=Te.ReactCurrentOwner,qe=Te.ReactCurrentBatchConfig,Y=0,we=null,fe=null,be=0,Ge=0,Kt=Wn(0),me=0,ka=null,lt=0,bo=0,fr=0,ba=null,De=null,pr=0,Dt=1/0,Bn=null,vo=!1,mr=null,Jn=null,To=!1,Yn=null,So=0,va=0,gr=null,xo=-1,Eo=0;function Be(){return(Y&6)!==0?de():xo!==-1?xo:xo=de()}function $n(e){return(e.mode&1)===0?1:(Y&2)!==0&&be!==0?be&-be:vd.transition!==null?(Eo===0&&(Eo=ci()),Eo):(e=Z,e!==0||(e=window.event,e=e===void 0?16:vi(e.type)),e)}function un(e,n,t,a){if(50<va)throw va=0,gr=null,Error(u(185));Ut(e,t,a),((Y&2)===0||e!==we)&&(e===we&&((Y&2)===0&&(bo|=t),me===4&&Vn(e,be)),Me(e,a),t===1&&Y===0&&(n.mode&1)===0&&(Dt=de()+500,Za&&zn()))}function Me(e,n){var t=e.callbackNode;vu(e,n);var a=Ra(e,e===we?be:0);if(a===0)t!==null&&hi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&hi(t),n===1)e.tag===0?bd(vh.bind(null,e)):rl(vh.bind(null,e)),gd(function(){(Y&6)===0&&zn()}),t=null;else{switch(fi(a)){case 1:t=Vo;break;case 4:t=ui;break;case 16:t=Ba;break;case 536870912:t=di;break;default:t=Ba}t=Bh(t,bh.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bh(e,n){if(xo=-1,Eo=0,(Y&6)!==0)throw Error(u(327));var t=e.callbackNode;if(Mt()&&e.callbackNode!==t)return null;var a=Ra(e,e===we?be:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=No(e,a);else{n=a;var o=Y;Y|=2;var s=Sh();(we!==e||be!==n)&&(Bn=null,Dt=de()+500,ut(e,n));do try{Fd();break}catch(h){Th(e,h)}while(!0);Hs(),ko.current=s,Y=o,fe!==null?n=0:(we=null,be=0,n=me)}if(n!==0){if(n===2&&(o=Qo(e),o!==0&&(a=o,n=wr(e,o))),n===1)throw t=ka,ut(e,0),Vn(e,a),Me(e,de()),t;if(n===6)Vn(e,a);else{if(o=e.current.alternate,(a&30)===0&&!Id(o)&&(n=No(e,a),n===2&&(s=Qo(e),s!==0&&(a=s,n=wr(e,s))),n===1))throw t=ka,ut(e,0),Vn(e,a),Me(e,de()),t;switch(e.finishedWork=o,e.finishedLanes=a,n){case 0:case 1:throw Error(u(345));case 2:dt(e,De,Bn);break;case 3:if(Vn(e,a),(a&130023424)===a&&(n=pr+500-de(),10<n)){if(Ra(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ss(dt.bind(null,e,De,Bn),n);break}dt(e,De,Bn);break;case 4:if(Vn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,o=-1;0<a;){var r=31-an(a);s=1<<r,r=n[r],r>o&&(o=r),a&=~s}if(a=o,a=de()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Od(a/1960))-a,10<a){e.timeoutHandle=Ss(dt.bind(null,e,De,Bn),a);break}dt(e,De,Bn);break;case 5:dt(e,De,Bn);break;default:throw Error(u(329))}}}return Me(e,de()),e.callbackNode===t?bh.bind(null,e):null}function wr(e,n){var t=ba;return e.current.memoizedState.isDehydrated&&(ut(e,n).flags|=256),e=No(e,n),e!==2&&(n=De,De=t,n!==null&&yr(n)),e}function yr(e){De===null?De=e:De.push.apply(De,e)}function Id(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var o=t[a],s=o.getSnapshot;o=o.value;try{if(!on(s(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vn(e,n){for(n&=~fr,n&=~bo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-an(n),a=1<<t;e[t]=-1,n&=~a}}function vh(e){if((Y&6)!==0)throw Error(u(327));Mt();var n=Ra(e,0);if((n&1)===0)return Me(e,de()),null;var t=No(e,n);if(e.tag!==0&&t===2){var a=Qo(e);a!==0&&(n=a,t=wr(e,a))}if(t===1)throw t=ka,ut(e,0),Vn(e,n),Me(e,de()),t;if(t===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,dt(e,De,Bn),Me(e,de()),null}function kr(e,n){var t=Y;Y|=1;try{return e(n)}finally{Y=t,Y===0&&(Dt=de()+500,Za&&zn())}}function ht(e){Yn!==null&&Yn.tag===0&&(Y&6)===0&&Mt();var n=Y;Y|=1;var t=qe.transition,a=Z;try{if(qe.transition=null,Z=1,e)return e()}finally{Z=a,qe.transition=t,Y=n,(Y&6)===0&&zn()}}function br(){Ge=Kt.current,ae(Kt)}function ut(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,md(t)),fe!==null)for(t=fe.return;t!==null;){var a=t;switch(Bs(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Qa();break;case 3:At(),ae(Re),ae(Se),zs();break;case 5:Ws(a);break;case 4:At();break;case 13:ae(ie);break;case 19:ae(ie);break;case 10:Ks(a.type._context);break;case 22:case 23:br()}t=t.return}if(we=e,fe=e=Qn(e.current,null),be=Ge=n,me=0,ka=null,fr=bo=lt=0,De=ba=null,st!==null){for(n=0;n<st.length;n++)if(t=st[n],a=t.interleaved,a!==null){t.interleaved=null;var o=a.next,s=t.pending;if(s!==null){var r=s.next;s.next=o,a.next=r}t.pending=a}st=null}return e}function Th(e,n){do{var t=fe;try{if(Hs(),lo.current=fo,ho){for(var a=le.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}ho=!1}if(it=0,ge=pe=le=null,fa=!1,pa=0,cr.current=null,t===null||t.return===null){me=1,ka=n,fe=null;break}e:{var s=e,r=t.return,h=t,d=n;if(n=be,h.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var w=d,v=h,T=v.tag;if((v.mode&1)===0&&(T===0||T===11||T===15)){var k=v.alternate;k?(v.updateQueue=k.updateQueue,v.memoizedState=k.memoizedState,v.lanes=k.lanes):(v.updateQueue=null,v.memoizedState=null)}var j=Yl(r);if(j!==null){j.flags&=-257,$l(j,r,h,s,n),j.mode&1&&Jl(s,w,n),n=j,d=w;var A=n.updateQueue;if(A===null){var R=new Set;R.add(d),n.updateQueue=R}else A.add(d);break e}else{if((n&1)===0){Jl(s,w,n),vr();break e}d=Error(u(426))}}else if(re&&h.mode&1){var ce=Yl(r);if(ce!==null){(ce.flags&65536)===0&&(ce.flags|=256),$l(ce,r,h,s,n),As(Rt(d,h));break e}}s=d=Rt(d,h),me!==4&&(me=2),ba===null?ba=[s]:ba.push(s),s=r;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var m=Gl(s,d,n);wl(s,m);break e;case 1:h=d;var c=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Jn===null||!Jn.has(g)))){s.flags|=65536,n&=-n,s.lanes|=n;var S=Ul(s,h,n);wl(s,S);break e}}s=s.return}while(s!==null)}Eh(t)}catch(H){n=H,fe===t&&t!==null&&(fe=t=t.return);continue}break}while(!0)}function Sh(){var e=ko.current;return ko.current=fo,e===null?fo:e}function vr(){(me===0||me===3||me===2)&&(me=4),we===null||(lt&268435455)===0&&(bo&268435455)===0||Vn(we,be)}function No(e,n){var t=Y;Y|=2;var a=Sh();(we!==e||be!==n)&&(Bn=null,ut(e,n));do try{Wd();break}catch(o){Th(e,o)}while(!0);if(Hs(),Y=t,ko.current=a,fe!==null)throw Error(u(261));return we=null,be=0,me}function Wd(){for(;fe!==null;)xh(fe)}function Fd(){for(;fe!==null&&!cu();)xh(fe)}function xh(e){var n=jh(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,n===null?Eh(e):fe=n,cr.current=null}function Eh(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Rd(t,n,Ge),t!==null){fe=t;return}}else{if(t=Hd(t,n),t!==null){t.flags&=32767,fe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);me===0&&(me=5)}function dt(e,n,t){var a=Z,o=qe.transition;try{qe.transition=null,Z=1,zd(e,n,t,a)}finally{qe.transition=o,Z=a}return null}function zd(e,n,t,a){do Mt();while(Yn!==null);if((Y&6)!==0)throw Error(u(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Tu(e,s),e===we&&(fe=we=null,be=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||To||(To=!0,Bh(Ba,function(){return Mt(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=qe.transition,qe.transition=null;var r=Z;Z=1;var h=Y;Y|=4,cr.current=null,Dd(e,t),mh(t,e),ld(vs),Da=!!bs,vs=bs=null,e.current=t,Md(t),fu(),Y=h,Z=r,qe.transition=s}else e.current=t;if(To&&(To=!1,Yn=e,So=o),s=e.pendingLanes,s===0&&(Jn=null),gu(t.stateNode),Me(e,de()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],a(o.value,{componentStack:o.stack,digest:o.digest});if(vo)throw vo=!1,e=mr,mr=null,e;return(So&1)!==0&&e.tag!==0&&Mt(),s=e.pendingLanes,(s&1)!==0?e===gr?va++:(va=0,gr=e):va=0,zn(),null}function Mt(){if(Yn!==null){var e=fi(So),n=qe.transition,t=Z;try{if(qe.transition=null,Z=16>e?16:e,Yn===null)var a=!1;else{if(e=Yn,Yn=null,So=0,(Y&6)!==0)throw Error(u(331));var o=Y;for(Y|=4,L=e.current;L!==null;){var s=L,r=s.child;if((L.flags&16)!==0){var h=s.deletions;if(h!==null){for(var d=0;d<h.length;d++){var w=h[d];for(L=w;L!==null;){var v=L;switch(v.tag){case 0:case 11:case 15:ya(8,v,s)}var T=v.child;if(T!==null)T.return=v,L=T;else for(;L!==null;){v=L;var k=v.sibling,j=v.return;if(uh(v),v===w){L=null;break}if(k!==null){k.return=j,L=k;break}L=j}}}var A=s.alternate;if(A!==null){var R=A.child;if(R!==null){A.child=null;do{var ce=R.sibling;R.sibling=null,R=ce}while(R!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&r!==null)r.return=s,L=r;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ya(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var c=e.current;for(L=c;L!==null;){r=L;var g=r.child;if((r.subtreeFlags&2064)!==0&&g!==null)g.return=r,L=g;else e:for(r=c;L!==null;){if(h=L,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:yo(9,h)}}catch(H){ue(h,h.return,H)}if(h===r){L=null;break e}var S=h.sibling;if(S!==null){S.return=h.return,L=S;break e}L=h.return}}if(Y=o,zn(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(La,e)}catch{}a=!0}return a}finally{Z=t,qe.transition=n}}return!1}function Nh(e,n,t){n=Rt(t,n),n=Gl(e,n,1),e=Gn(e,n,1),n=Be(),e!==null&&(Ut(e,1,n),Me(e,n))}function ue(e,n,t){if(e.tag===3)Nh(e,e,t);else for(;n!==null;){if(n.tag===3){Nh(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Jn===null||!Jn.has(a))){e=Rt(t,e),e=Ul(n,e,1),n=Gn(n,e,1),e=Be(),n!==null&&(Ut(n,1,e),Me(n,e));break}}n=n.return}}function _d(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,we===e&&(be&t)===t&&(me===4||me===3&&(be&130023424)===be&&500>de()-pr?ut(e,0):fr|=t),Me(e,n)}function Ch(e,n){n===0&&((e.mode&1)===0?n=1:(n=Aa,Aa<<=1,(Aa&130023424)===0&&(Aa=4194304)));var t=Be();e=Nn(e,n),e!==null&&(Ut(e,n,t),Me(e,t))}function Gd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ch(e,t)}function Ud(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(u(314))}a!==null&&a.delete(n),Ch(e,t)}var jh;jh=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Re.current)Ke=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Ke=!1,Ad(e,n,t);Ke=(e.flags&131072)!==0}else Ke=!1,re&&(n.flags&1048576)!==0&&il(n,eo,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;go(e,n),e=n.pendingProps;var o=Et(n,Se.current);Pt(n,t),o=Us(null,n,a,e,o,t);var s=Js();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,He(a)?(s=!0,qa(n)):s=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Os(n),o.updater=po,n.stateNode=o,o._reactInternals=n,Zs(n,a,e,t),n=tr(null,n,a,!0,s,t)):(n.tag=0,re&&s&&js(n),je(null,n,o,t),n=n.child),n;case 16:a=n.elementType;e:{switch(go(e,n),e=n.pendingProps,o=a._init,a=o(a._payload),n.type=a,o=n.tag=Yd(a),e=rn(a,e),o){case 0:n=nr(null,n,a,e,t);break e;case 1:n=eh(null,n,a,e,t);break e;case 11:n=Vl(null,n,a,e,t);break e;case 14:n=Ql(null,n,a,rn(a.type,e),t);break e}throw Error(u(306,a,""))}return n;case 0:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:rn(a,o),nr(e,n,a,o,t);case 1:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:rn(a,o),eh(e,n,a,o,t);case 3:e:{if(nh(n),e===null)throw Error(u(387));a=n.pendingProps,s=n.memoizedState,o=s.element,gl(e,n),ro(n,a,null,t);var r=n.memoizedState;if(a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){o=Rt(Error(u(423)),n),n=th(e,n,a,t,o);break e}else if(a!==o){o=Rt(Error(u(424)),n),n=th(e,n,a,t,o);break e}else for(_e=In(n.stateNode.containerInfo.firstChild),ze=n,re=!0,sn=null,t=pl(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jt(),a===o){n=jn(e,n,t);break e}je(e,n,a,t)}n=n.child}return n;case 5:return kl(n),e===null&&Ps(n),a=n.type,o=n.pendingProps,s=e!==null?e.memoizedProps:null,r=o.children,Ts(a,o)?r=null:s!==null&&Ts(a,s)&&(n.flags|=32),Xl(e,n),je(e,n,r,t),n.child;case 6:return e===null&&Ps(n),null;case 13:return ah(e,n,t);case 4:return Is(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Bt(n,null,a,t):je(e,n,a,t),n.child;case 11:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:rn(a,o),Vl(e,n,a,o,t);case 7:return je(e,n,n.pendingProps,t),n.child;case 8:return je(e,n,n.pendingProps.children,t),n.child;case 12:return je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,o=n.pendingProps,s=n.memoizedProps,r=o.value,ne(ao,a._currentValue),a._currentValue=r,s!==null)if(on(s.value,r)){if(s.children===o.children&&!Re.current){n=jn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var h=s.dependencies;if(h!==null){r=s.child;for(var d=h.firstContext;d!==null;){if(d.context===a){if(s.tag===1){d=Cn(-1,t&-t),d.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var v=w.pending;v===null?d.next=d:(d.next=v.next,v.next=d),w.pending=d}}s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),Ds(s.return,t,n),h.lanes|=t;break}d=d.next}}else if(s.tag===10)r=s.type===n.type?null:s.child;else if(s.tag===18){if(r=s.return,r===null)throw Error(u(341));r.lanes|=t,h=r.alternate,h!==null&&(h.lanes|=t),Ds(r,t,n),r=s.sibling}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===n){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}je(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,a=n.pendingProps.children,Pt(n,t),o=Ve(o),a=a(o),n.flags|=1,je(e,n,a,t),n.child;case 14:return a=n.type,o=rn(a,n.pendingProps),o=rn(a.type,o),Ql(e,n,a,o,t);case 15:return ql(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:rn(a,o),go(e,n),n.tag=1,He(a)?(e=!0,qa(n)):e=!1,Pt(n,t),zl(n,a,o),Zs(n,a,o,t),tr(null,n,a,!0,e,t);case 19:return sh(e,n,t);case 22:return Zl(e,n,t)}throw Error(u(156,n.tag))};function Bh(e,n){return li(e,n)}function Jd(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,n,t,a){return new Jd(e,n,t,a)}function Tr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yd(e){if(typeof e=="function")return Tr(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fn)return 11;if(e===pn)return 14}return 2}function Qn(e,n){var t=e.alternate;return t===null?(t=Ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Co(e,n,t,a,o,s){var r=2;if(a=e,typeof e=="function")Tr(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Pe:return ct(t.children,o,s,n);case Je:r=8,o|=8;break;case An:return e=Ze(12,t,n,o|2),e.elementType=An,e.lanes=s,e;case Ie:return e=Ze(13,t,n,o),e.elementType=Ie,e.lanes=s,e;case tn:return e=Ze(19,t,n,o),e.elementType=tn,e.lanes=s,e;case he:return jo(t,o,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vn:r=10;break e;case Xn:r=9;break e;case fn:r=11;break e;case pn:r=14;break e;case Ae:r=16,a=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return n=Ze(r,t,n,o),n.elementType=e,n.type=a,n.lanes=s,n}function ct(e,n,t,a){return e=Ze(7,e,a,n),e.lanes=t,e}function jo(e,n,t,a){return e=Ze(22,e,a,n),e.elementType=he,e.lanes=t,e.stateNode={isHidden:!1},e}function Sr(e,n,t){return e=Ze(6,e,null,n),e.lanes=t,e}function xr(e,n,t){return n=Ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $d(e,n,t,a,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Er(e,n,t,a,o,s,r,h,d){return e=new $d(e,n,t,h,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ze(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Os(s),e}function Vd(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Lh(e){if(!e)return Fn;e=e._reactInternals;e:{if(et(e)!==e||e.tag!==1)throw Error(u(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(He(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(u(171))}if(e.tag===1){var t=e.type;if(He(t))return ol(e,t,n)}return n}function Ph(e,n,t,a,o,s,r,h,d){return e=Er(t,a,!0,e,o,s,r,h,d),e.context=Lh(null),t=e.current,a=Be(),o=$n(t),s=Cn(a,o),s.callback=n??null,Gn(t,s,o),e.current.lanes=o,Ut(e,o,a),Me(e,a),e}function Bo(e,n,t,a){var o=n.current,s=Be(),r=$n(o);return t=Lh(t),n.context===null?n.context=t:n.pendingContext=t,n=Cn(s,r),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Gn(o,n,r),e!==null&&(un(e,o,r,s),so(e,o,r)),r}function Lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ah(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Nr(e,n){Ah(e,n),(e=e.alternate)&&Ah(e,n)}function Qd(){return null}var Rh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cr(e){this._internalRoot=e}Po.prototype.render=Cr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));Bo(e,n,null,null)},Po.prototype.unmount=Cr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ht(function(){Bo(null,e,null,null)}),n[Tn]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var n=gi();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Dn.length&&n!==0&&n<Dn[t].priority;t++);Dn.splice(t,0,e),t===0&&ki(e)}};function jr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hh(){}function qd(e,n,t,a,o){if(o){if(typeof a=="function"){var s=a;a=function(){var w=Lo(r);s.call(w)}}var r=Ph(n,a,e,0,null,!1,!1,"",Hh);return e._reactRootContainer=r,e[Tn]=r.current,sa(e.nodeType===8?e.parentNode:e),ht(),r}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var h=a;a=function(){var w=Lo(d);h.call(w)}}var d=Er(e,0,!1,null,null,!1,!1,"",Hh);return e._reactRootContainer=d,e[Tn]=d.current,sa(e.nodeType===8?e.parentNode:e),ht(function(){Bo(n,d,t,a)}),d}function Ro(e,n,t,a,o){var s=t._reactRootContainer;if(s){var r=s;if(typeof o=="function"){var h=o;o=function(){var d=Lo(r);h.call(d)}}Bo(n,r,e,o)}else r=qd(t,n,e,o,a);return Lo(r)}pi=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Gt(n.pendingLanes);t!==0&&(Zo(n,t|1),Me(n,de()),(Y&6)===0&&(Dt=de()+500,zn()))}break;case 13:ht(function(){var a=Nn(e,1);if(a!==null){var o=Be();un(a,e,1,o)}}),Nr(e,1)}},Xo=function(e){if(e.tag===13){var n=Nn(e,134217728);if(n!==null){var t=Be();un(n,e,134217728,t)}Nr(e,134217728)}},mi=function(e){if(e.tag===13){var n=$n(e),t=Nn(e,n);if(t!==null){var a=Be();un(t,e,n,a)}Nr(e,n)}},gi=function(){return Z},wi=function(e,n){var t=Z;try{return Z=e,n()}finally{Z=t}},Uo=function(e,n,t){switch(n){case"input":if(Mo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var o=Va(a);if(!o)throw Error(u(90));Fr(a),Mo(a,o)}}}break;case"textarea":Jr(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}},ni=kr,ti=ht;var Zd={usingClientEntryPoint:!1,Events:[la,St,Va,Xr,ei,kr]},Ta={findFiberByHostInstance:nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xd={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ri(e),e===null?null:e.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||Qd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{La=Ho.inject(Xd),mn=Ho}catch{}}return Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zd,Oe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jr(n))throw Error(u(200));return Vd(e,n,null,t)},Oe.createRoot=function(e,n){if(!jr(e))throw Error(u(299));var t=!1,a="",o=Rh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Er(e,1,!1,null,null,t,!1,a,o),e[Tn]=n.current,sa(e.nodeType===8?e.parentNode:e),new Cr(n)},Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=ri(n),e=e===null?null:e.stateNode,e},Oe.flushSync=function(e){return ht(e)},Oe.hydrate=function(e,n,t){if(!Ao(n))throw Error(u(200));return Ro(null,e,n,!0,t)},Oe.hydrateRoot=function(e,n,t){if(!jr(e))throw Error(u(405));var a=t!=null&&t.hydratedSources||null,o=!1,s="",r=Rh;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),n=Ph(n,null,e,1,t??null,o,!1,s,r),e[Tn]=n.current,sa(e),a)for(e=0;e<a.length;e++)t=a[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Po(n)},Oe.render=function(e,n,t){if(!Ao(n))throw Error(u(200));return Ro(null,e,n,!1,t)},Oe.unmountComponentAtNode=function(e){if(!Ao(e))throw Error(u(40));return e._reactRootContainer?(ht(function(){Ro(null,null,e,!1,function(){e._reactRootContainer=null,e[Tn]=null})}),!0):!1},Oe.unstable_batchedUpdates=kr,Oe.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!Ao(t))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return Ro(e,n,t,!1,a)},Oe.version="18.3.1-next-f1338f8080-20240426",Oe}var zh;function ic(){if(zh)return Pr.exports;zh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(f){console.error(f)}}return i(),Pr.exports=rc(),Pr.exports}var _h;function lc(){if(_h)return Ko;_h=1;var i=ic();return Ko.createRoot=i.createRoot,Ko.hydrateRoot=i.hydrateRoot,Ko}var hc=lc();const Mr="/fantasy/data/",Or=i=>fetch(i).then(f=>f.ok?f.json():Promise.reject(new Error(`${f.status} ${i}`))),uc=()=>Or(`${Mr}books/index.json`),dc=i=>Or(`${Mr}books/${i}/index.json`),cc=(i,f)=>Or(`${Mr}books/${i}/w${f}.json`);async function fc(i){const{weeks:f}=await dc(i),u=await Promise.all(f.map(y=>cc(i,y)));return{weeks:f,sheets:u}}function Gh(i){if(!i)return null;const f=i[0]==="−"||i[0]==="-",u=Number(i.slice(1));return Number.isFinite(u)?f?u/(u+100):100/(u+100):null}function Ir({now:i,was:f,prefix:u=""}){if(!i||!f||i===f)return null;const y=Gh(f),x=Gh(i);if(y==null||x==null)return null;const E=x>y;return l.jsxs("span",{className:`bk-move ${E?"up":"down"}`,children:[E?"▲":"▼"," ",u,f," → ",i]})}const Uh=864e5;function Jh(i,f=Date.now()){if(!i)return null;const u=Date.parse(`${i.start}T00:00:00Z`),y=Date.parse(`${i.payout}T00:00:00Z`),x=Math.max(0,Math.min(f,y)-u)/Uh,E=(y-u)/Uh,D=K=>i.principal*((1+i.apy)**(K/365)-1);return{now:D(x),atPayout:D(E),days:Math.floor(x),totalDays:Math.round(E),apy:i.apy,principal:i.principal,settled:f>=y}}const Hr=i=>i.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),pc=i=>i.money.reduce((f,u)=>f+u.pct,0);function mc({standings:i,payingPlaces:f,structure:u,stakes:y,Panel:x}){const E=i[0].dist.length,D=new Set(f),K=u==="winner-take-all";return l.jsxs(x,{title:"PROJECTED STANDINGS",blurb:K?"Where every seat actually finishes, across 25,000 simulated seasons. The gold block is first place — the only finish in this league worth money. Everything to the right of it is the same season with nothing at the end of it.":"Where every seat actually finishes, across 25,000 simulated seasons. The gold blocks are the four finishes that pay; the wider a seat's gold, the more often its season ends with money. Hover any block for the price on that exact finish.",children:[l.jsxs("div",{className:"fb-standings",children:[l.jsxs("div",{className:"fb-st-head",children:[l.jsx("span",{className:"fb-st-rank",children:"#"}),l.jsx("span",{className:"fb-st-seat",children:"SEAT"}),l.jsx("span",{className:"fb-st-num",children:"PROJ"}),l.jsx("span",{className:"fb-st-num",children:"RECORD"}),l.jsx("span",{className:"fb-st-num",children:"PTS"}),l.jsxs("span",{className:"fb-st-dist",children:["FINISH DISTRIBUTION — 1ST (",E,"TH) "]}),l.jsx("span",{className:"fb-st-num",children:K?"WINS":"MONEY"}),l.jsx("span",{className:"fb-st-num",children:"LAST"})]}),i.map(B=>l.jsxs("div",{className:"fb-st-row",children:[l.jsx("span",{className:"fb-st-rank",children:B.rank}),l.jsxs("span",{className:"fb-st-seat",children:[l.jsx("span",{className:"fb-st-team",children:B.team}),l.jsx("span",{className:"fb-st-mgr",children:B.manager})]}),l.jsx("span",{className:"fb-st-num strong",children:B.projFinish.toFixed(1)}),l.jsxs("span",{className:"fb-st-num",children:[B.projWins.toFixed(1),"–",B.projLosses.toFixed(1)]}),l.jsx("span",{className:"fb-st-num",children:B.projPoints.toLocaleString("en-US")}),l.jsx("span",{className:"fb-st-dist",children:B.dist.map((N,J)=>{const F=J+1,z=B.money.find(ve=>ve.place===F);return l.jsx("span",{className:D.has(F)?"fb-seg pays":"fb-seg",style:{flexGrow:Math.max(N,.15)},title:z?`${Yh(F)} — ${z.label} — ${z.pct}% — ${z.price}`:`${Yh(F)} — ${N}%${F===E?" — last":""}`},F)})}),l.jsxs("span",{className:"fb-st-num strong",children:[pc(B).toFixed(1),"%"]}),l.jsxs("span",{className:"fb-st-num dim",children:[B.last,"%"]})]},B.rosterId))]}),l.jsxs("p",{className:"fb-note",children:["PROJ is the average finishing place across every simulated season, so it moves before any single market does — a seat can drift from 6.4 to 6.9 without its championship price changing at all."," ",K?"Only first place pays in this league, so the MONEY column is the championship number.":"MONEY is the chance of finishing in one of the four paying places — first, second, third, or fourth exactly."]})]})}const Yh=i=>`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`;function gc({sheet:i,prev:f,Panel:u}){const{futures:y,stakes:x}=i,E=y.structure==="winner-take-all",D=N=>y.markets.find(J=>J.key===N),K=N=>{var J,F,z;return(z=(F=(J=f==null?void 0:f.futures)==null?void 0:J.markets)==null?void 0:F.find(ve=>ve.key===N))==null?void 0:z.rows},B=({market:N,blurb:J,compact:F})=>{const z=D(N);return z?l.jsx(u,{title:z.pays?`${z.name} — PAYS ${z.pays.toUpperCase()}`:z.name,blurb:z.copy??J,children:l.jsx(wc,{rows:z.rows,prevRows:K(N),compact:F})}):null};return l.jsxs(l.Fragment,{children:[l.jsx(mc,{standings:y.standings,payingPlaces:y.payingPlaces,structure:y.structure,stakes:x,Panel:u}),l.jsx(B,{market:"championship",blurb:E?`${x.pot}, winner take all. Nobody else gets a cent, which makes this the entire financial book — every other market on this sheet is pride.`:"The headline, and the only board here that is not a slice of the table above: winning the bracket is not the same question as finishing high, because three playoff weeks are three more coin flips."}),!E&&l.jsx(yc,{sheet:i,Panel:u}),l.jsx(B,{market:"lastPlace"}),l.jsx(u,{title:"SEASON WIN TOTALS",blurb:"Over/under on regular-season wins, per seat. The line is the half-win the simulated seasons split closest to evenly; unlike a weekly total, wins are integers, so these are priced on the real number rather than posted flat.",children:l.jsx("div",{className:"fb-wintotals",children:[...y.winTotals].sort((N,J)=>J.expected-N.expected).map(N=>l.jsxs("div",{className:"fb-wintotal",children:[l.jsx("span",{className:"fb-wintotal-name",children:N.team}),l.jsx("span",{className:"fb-wintotal-line",children:N.line.toFixed(1)}),l.jsxs("span",{className:"fb-wintotal-prices",children:["O ",N.over," · U ",N.under]}),l.jsxs("span",{className:"fb-wintotal-exp",children:[N.expected," proj"]})]},N.rosterId))})})]})}function wc({rows:i,prevRows:f,compact:u}){const y=Math.max(...i.map(x=>x.pct),1);return l.jsx("div",{className:"fb-runners",children:i.map((x,E)=>{var D;return l.jsxs("div",{className:E===0?"fb-runner lead":"fb-runner",children:[l.jsxs("span",{className:"fb-runner-main",children:[l.jsx("span",{className:"fb-runner-team",children:x.team}),l.jsx("span",{className:"fb-bar",style:{width:`${x.pct/y*100}%`}}),!u&&l.jsx("span",{className:"fb-runner-mgr",children:x.manager})]}),l.jsxs("span",{className:"fb-runner-pct",children:[x.pct,"%"]}),l.jsxs("span",{className:"bk-line-right",children:[l.jsx(Ir,{now:x.price,was:(D=f==null?void 0:f.find(K=>K.rosterId===x.rosterId))==null?void 0:D.price}),l.jsx("span",{className:"bk-price",children:x.price??"OFF"})]})]},x.rosterId)})})}function yc({sheet:i,Panel:f}){var E,D;const u=i.stakes.hysa,[y,x]=Pn.useState(()=>Jh(u));return Pn.useEffect(()=>{if(!u)return;const K=setInterval(()=>x(Jh(u)),6e4);return()=>clearInterval(K)},[u]),l.jsx(f,{title:"THE INTEREST — 4TH EXACTLY",blurb:u?`First takes ${(E=i.stakes.payouts[0])==null?void 0:E.label}, second ${(D=i.stakes.payouts[1])==null?void 0:D.label}, third gets the buy-in back. Fourth gets the interest the pot has earned sitting in a savings account at ${(u.apy*100).toFixed(2)}% APY. That is a real prize, this is what it is worth right now, and the fourth block of every bar above is who is most likely to collect it.`:"Fourth place, exactly.",children:y&&l.jsxs("div",{className:"fb-headline",children:[l.jsxs("span",{children:[l.jsx("span",{className:"fb-headline-label",children:Hr(y.now)}),l.jsxs("span",{className:"fb-headline-copy",children:["accrued on ",Hr(y.principal)," over ",y.days," of ",y.totalDays," days ·"," ",y.settled?"final":`${Hr(y.atPayout)} if it runs to payout`]})]}),l.jsx("span",{className:"fb-headline-price",children:"4TH"})]})})}let kc=0;const Xe=()=>`md${kc++}`;function dn({text:i,className:f}){if(!i)return null;const u=i.trim().split(/\n{2,}/);return l.jsx("div",{className:f,children:u.map(y=>au(y))})}function au(i){const f=i.split(`
`);if(/^###\s/.test(f[0])){const u=l.jsx("h3",{className:"md-h3",children:Ln(f[0].replace(/^###\s+/,""))},Xe());return f.length>1?[u,au(f.slice(1).join(`
`))]:u}return/^(---|\*\*\*)$/.test(f[0].trim())?l.jsx("hr",{className:"md-hr"},Xe()):f.every(u=>/^>\s?/.test(u))?l.jsx("blockquote",{className:"md-quote",children:Ln(f.map(u=>u.replace(/^>\s?/,"")).join(" "))},Xe()):f.every(u=>/^[-*]\s+/.test(u))?l.jsx("ul",{className:"md-list",children:f.map(u=>l.jsx("li",{children:Ln(u.replace(/^[-*]\s+/,""))},Xe()))},Xe()):f.every(u=>/^\d+\.\s+/.test(u))?l.jsx("ol",{className:"md-list",children:f.map(u=>l.jsx("li",{children:Ln(u.replace(/^\d+\.\s+/,""))},Xe()))},Xe()):l.jsx("p",{className:"md-p",children:Ln(f.join(" "))},Xe())}const bc=[{re:/`([^`]+)`/,render:i=>l.jsx("code",{className:"md-code",children:i[1]},Xe())},{re:/\*\*([^*]+)\*\*/,render:i=>l.jsx("strong",{children:Ln(i[1])},Xe())},{re:/(?:\*|_)([^*_]+)(?:\*|_)/,render:i=>l.jsx("em",{children:Ln(i[1])},Xe())},{re:/\[([^\]]+)\]\(([^)]+)\)/,render:i=>l.jsx("a",{className:"bk-link",href:i[2],children:Ln(i[1])},Xe())}];function Ln(i){let f=null;for(const x of bc){const E=i.match(x.re);E&&(f==null||E.index<f.at.index)&&(f={rule:x,at:E})}if(!f)return i;const{rule:u,at:y}=f;return[i.slice(0,y.index),u.render(y),...[].concat(Ln(i.slice(y.index+y[0].length)))]}function vc({settled:i,punishment:f,Panel:u,note:y,benchNote:x,punishmentNote:E}){const{reportCard:D}=i;return l.jsxs(l.Fragment,{children:[l.jsxs(u,{title:`HOW WEEK ${i.week} SETTLED`,blurb:y?null:"Final scores against the lines this book posted last Wednesday. Side A is the side that was favoured.",children:[y&&l.jsx(dn,{text:y,className:"fb-prose-cols"}),l.jsxs("div",{className:"fb-settled-head",children:[l.jsx("span",{children:"RESULT"}),l.jsx("span",{children:"LINE"}),l.jsx("span",{className:"spread",children:"ATS"}),l.jsx("span",{className:"total",children:"TOTAL"})]}),l.jsx("div",{className:"fb-card",children:i.matchups.map(K=>l.jsx(Tc,{m:K},`${K.a.rosterId}-${K.b.rosterId}`))}),l.jsxs("div",{className:"fb-report",children:[l.jsx("h3",{className:"fb-report-title",children:"THE MODEL'S REPORT CARD"}),l.jsxs("div",{className:"fb-report-grid",children:[l.jsx(Kr,{label:"FAVOURITES SU",record:D.straightUp}),l.jsx(Kr,{label:"FAVOURITES ATS",record:D.ats}),l.jsx(Kr,{label:"TOTALS — OVER",record:D.total}),l.jsxs("div",{className:"fb-report-cell",children:[l.jsx("span",{className:"fb-report-num",children:D.brier.toFixed(3)}),l.jsx("span",{className:"fb-report-label",children:"BRIER SCORE"}),l.jsxs("span",{className:"fb-report-note",children:[D.brier<D.coinFlip?"better":"worse"," than ",D.coinFlip.toFixed(2),", which is what you score by calling every game a coin flip"]})]})]}),l.jsxs("p",{className:"fb-note",children:["The book expected ",D.expectedChalkWins.toFixed(2)," of its ",D.games," favourites to win. "," ",D.straightUp.w," did. Prices are graded on the fair probability, before the house margin — the margin is the book's edge, not the model's opinion."]})]})]}),l.jsxs("div",{className:"fb-grid2",children:[l.jsxs(u,{title:`${i.punishment.low.name} — SETTLED`,blurb:f.weekly.copy,children:[l.jsx($h,{outcome:i.punishment.low,verb:"took it",copy:i.punishment.low.hitFavourite?"The board's own favourite. The book called this one.":`Priced ${i.punishment.low.price}, ${qh(i.punishment.low.rank)} of ${i.punishment.low.of} on the board.`}),i.punishment.high&&l.jsx($h,{outcome:i.punishment.high,verb:"picks",copy:`${i.punishment.high.name} — ${i.punishment.high.price} on the board, ${qh(i.punishment.high.rank)} of ${i.punishment.high.of}.`}),i.punishment.joint&&l.jsx("p",{className:"fb-note",children:i.punishment.joint.hit?l.jsxs(l.Fragment,{children:["The joint ",l.jsx("b",{children:"hit"})," at ",i.punishment.joint.hit.price,". It was one of"," ",i.punishment.joint.offered," priced pairings out of"," ",i.punishment.joint.offered>1?"dozens":"many"," possible."]}):l.jsxs(l.Fragment,{children:["None of the ",i.punishment.joint.offered," featured joints hit — the pairing that landed was"," ",i.punishment.joint.low.team," and ",i.punishment.joint.high.team,", which the sheet did not print."]})}),E&&l.jsx(dn,{text:E,className:"fb-panel-prose"})]}),l.jsxs(u,{title:"POINTS LEFT ON THE BENCH",blurb:"Every line on last week's sheet assumed an optimal lineup. This is what that assumption actually cost, scored on real points — the model's own §5.4 bias, measured rather than disclosed.",children:[x&&l.jsx(dn,{text:x,className:"fb-panel-prose"}),l.jsx("div",{className:"fb-bench",children:i.bench.slice(0,5).map((K,B)=>l.jsxs("div",{className:B===0?"fb-bench-row lead":"fb-bench-row",children:[l.jsxs("span",{className:"fb-bench-main",children:[l.jsx("span",{className:"fb-runner-team",children:K.team}),l.jsxs("span",{className:"fb-runner-mgr",children:[K.points.toFixed(2)," of a possible ",K.best.toFixed(2),K.missed.length>0&&l.jsxs(l.Fragment,{children:[" · benched ",K.missed.map(N=>`${N.name} ${N.points.toFixed(1)}`).join(", ")]})]})]}),l.jsxs("span",{className:"bk-price",children:["−",K.left.toFixed(1)]})]},K.rosterId))})]})]})]})}const Kr=({label:i,record:f})=>l.jsxs("div",{className:"fb-report-cell",children:[l.jsxs("span",{className:"fb-report-num",children:[f.w,"–",f.l,f.p?`–${f.p}`:""]}),l.jsx("span",{className:"fb-report-label",children:i})]}),$h=({outcome:i,verb:f,copy:u})=>l.jsxs("div",{className:"fb-verdict",children:[l.jsxs("span",{className:"fb-slip-text",children:[l.jsx("b",{children:i.team})," ",f," — ",i.points.toFixed(2),l.jsxs("span",{className:"fb-slip-note",children:[i.manager," · ",u]})]}),l.jsx("span",{className:"bk-price",children:i.price??"—"})]});function Tc({m:i}){return i.played?l.jsxs("div",{className:"fb-settled",children:[l.jsxs("div",{className:"fb-seats",children:[l.jsx(Vh,{seat:i.a,points:i.a.points,won:i.winner==="a",push:i.winner==="push"}),l.jsx(Vh,{seat:i.b,points:i.b.points,won:i.winner==="b",push:i.winner==="push"})]}),l.jsxs("div",{className:"fb-cell",children:[l.jsx("span",{className:"fb-odds",children:i.posted.moneyline.a}),l.jsx(Qh,{hit:i.winner==="a",push:i.winner==="push"})]}),l.jsxs("div",{className:"fb-cell spread",children:[l.jsx("span",{className:"fb-odds",children:i.posted.spread.a}),l.jsx(Qh,{hit:i.ats==="a",push:i.ats==="push"})]}),l.jsxs("div",{className:"fb-cell total",children:[l.jsx("span",{className:"fb-odds",children:i.total.toFixed(1)}),l.jsxs("span",{className:"fb-settled-sub",children:[i.ou==="push"?"push":i.ou==="a"?"over":"under"," ",i.posted.total.line.toFixed(1)]})]})]}):null}const Vh=({seat:i,points:f,won:u,push:y})=>l.jsxs("span",{className:u?"fb-seat fav":"fb-seat",children:[l.jsx("span",{className:"fb-seat-name",children:i.team}),l.jsxs("span",{className:"fb-seat-mgr",children:[i.manager,y?" · tie":""]}),l.jsx("span",{className:"fb-seat-proj",children:f.toFixed(2)})]}),Qh=({hit:i,push:f})=>l.jsx("span",{className:f?"fb-mark push":i?"fb-mark hit":"fb-mark miss",children:f?"PUSH":i?"✓":"✗"}),qh=i=>i==null?"unpriced":`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`,Sc=`---
league: dkenasty
week: 10
headline: HAYWARD
byline: The House · Week 10
---

<!-- DKENASTY SPORTSBOOK · week 10 · seed 1592538677
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: DKEnasty prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-11-11 PT):
       TYLER LOOP (K, BAL, Sleeper id 12711, now IR): Chris (Christopheryu21, r9) started him wk6 (3), wk7 (7), wk8 (3).
         Loop had no wk9 projection → wk9 sheet priced Chris's K off waivers (McPherson). Chris tried to start Loop wk9 (Kunal).
         Lane commissioner add: Eddy Pineiro → r9, Sun 11/8 9:44 AM PT. Chris dropped Kendre Miller 10:12 AM PT (28 min later).
         Chris dropped Loop on Wed 11/11 waivers for Dallas DEF. Pineiro wk9 = 8. Chris beat Keeyan 107.16–89.08 (+140 dog), margin 18.08.
         Without Pineiro still wins (99.16). Ended Chris's three-straight parlay run (wk6, wk7, wk8). Chris 3-6.
       GROUP CHAT (Kunal, 2026-11-11). Quotes printed with slurs trimmed (Kunal's call); "Gay Rat" kept as Garrett's own name for himself.
         Lane threatens to sell Chris's spot to Fonck; "move the franchise to Hayward". Garrett went to Florida on his marathon trip
         to see his Costa Rica date (w6: a woman twenty years older). Kunal + Chris are Nob Hill roommates; the house defends the
         Tenderloin bar women on Kunal's instruction.
       LANE (lanek12, r1) Wed 11/11 1:01 PM PT cut NYG DEF for Zonovan Knight → no DEF on roster; house priced Colts off waivers.
         Lane beat Garrett 146.08–121.8 (+140 dog). Lane 5-4. Garrett 3-6. Chris owns Garrett's 2027 1st (w8 receipts);
         w9 prose: "Chris ... needs the commissioner to win." He did, by 24.28.
       MENDOZA (QB LV, id 13269): on Chris's roster all season, 2.22 pts wk5, 0 otherwise. Wk10 is the first week Sleeper projects
         him (11.6). Daniels 18.7 starts in the house's lineup. "Cal legend" per Kunal.
       Kunal (r5) wk9 HIGH 168.88, beat Besnoy 167.34 by 1.54 (Besnoy +40.1, week's biggest beat; second-highest score of the week).
       JC (jc199, r6) wk9 LOW 70.7, priced +1350 (9th of 12), −65.8 vs projection. Bench 31.4 (Tank Dell 20.5). Places the parlay.
       Ethan (r10) lost to Burnes 115.24–114.58 (0.66). Started J.J. McCarthy 7.28, benched Jordan Love 36.18. Best 147.58. 1-8, title 0%.
       Rohan (r11) 8-1, seven straight (wk3–wk9). Tal (r2) 7-2.
       Parlay: Ethan +180 (28.4) · Chris +380 · Burnes +430. Milk mile: Ethan +200 (27.2) · Chris +230 (24.9) · Keeyan +370.
       Title: Tal +160 (28.9) · Rohan +270 (20.6) · Kunal +290 (19.6). -->

## lede

<!--
     biggest edge: Rat −290 over Yan Dynasty (69.2%, −15.5)
     closest game: 3 AM afters in bull room vs Disciples of Yakub at −125 (51.7%)
     highest total: 283.5
     last week: 3 AM afters in bull room 168.9 high, Disciples of Yakub 70.7 low
     the book went 4-2 on favourites, Brier 0.224
-->

Tyler Loop kicked for Chris in weeks six, seven and eight. He scored 3, 7 and 3. Then the Ravens put
him on injured reserve, and in week nine Chris tried to start him anyway. Lane:

> "Chris stop starting ppl not on rosters and or on IR or Garrett is gonna make me kick u out"

Chris said Garrett was only angling to get back the 2027 first Chris took off him for Jakobi Meyers,
and told him to go support his single mother in Florida. Garrett:

> "I will go support my single rich childless woman who invited me to visit her in Florida. You go tend to your tenderloin “women”. Btw it’s the Gay Rat to you"

The house has the files. In Costa Rica, in week six, Garrett went on a date with a woman **twenty years
older** than him. Then he flew east, ran a marathon, and while he
was on that side of the country he went to Florida to see her again.

A disclosure. The house is based in Nob Hill, and so is Chris. 

**The women of the Tenderloin are beautiful and perfect**, and the house won't take notes on them from a man who needed two flights and a
five-hour marathon to get a second date OTPHJ.

At **9:44 on Sunday morning**, the commissioner used his powers to put Eddy Pineiro on Chris's roster.
Twenty-eight minutes later, Chris cut Kendre Miller. Then Lane:

> "Having to manage Chris’ team for him is unbelievable. ... Why can’t you count to 12? Why did you offer me Kendre Miller? ... The league is going to force a sale and move the franchise to Hayward!"

Pineiro scored 8. Chris beat Keeyan by **18.08** as a +140 underdog, so he didn't need the kicker, and he
didn't score the league-low for the first time in four weeks.

The house checked on the commissioner's own team while he was busy managing Chris's.
Lane has a winning record for the first time and enacted the Laneocracy by stripping Keeyan's treasured third round pick.
Commissioner Lane stocks would be up, but Fonck lives in San Mateo, not Hayward, so he's stupid and wrong.


## settled

<!--
     favourites 4-2 SU, 2-4 ATS, totals 3-3 over
     Brier 0.224 vs 0.25 for a coin flip; expected 3.7 chalk wins, got 4
     low scorer Disciples of Yakub 70.7 — priced +1350, 9 of 12
     high scorer 3 AM afters in bull room 168.9
     joint: did not hit
     biggest beat: K9 FentPack 167.3 vs 127.2 projected (+40.1)
     biggest miss: Disciples of Yakub 70.7 vs 136.5 projected (-65.8)
-->

**Four and two, Brier 0.224.** Two underdogs won, Chris and Lane, both at +140.

**BCJ scored 70.7**, 65.8 under his projection, and places the parlay. The house had him at +1350, ninth
of twelve. He left 31.4 on his bench.

**The house scored the high**, 168.88, and beat Besnoy by **1.54**. Besnoy scored 167.34, the second-best
score of the week, and lost. The house apologises to nobody.

**Ethan lost by 0.66.** Last week the house noted that he'd claimed J.J. McCarthy, the quarterback from
Rohan's tank week. On Sunday Ethan started McCarthy, who scored **7.28**, and benched Jordan Love, who
scored **36.18**. Ethan is 1-8, and the house has taken him off the title board.

Lane beat Garrett by 24.28. Last week the house said Chris, who owns Garrett's 2027 first, needed the
commissioner to win. Chris won, Lane won, and Garrett's pick got better. Chris had a very good Sunday
for a man who couldn't start a kicker.


## bench

<!--
     ‘22 LA Rams  left 33 — Jordan Love 36.2, Kimani Vidal 4.6
     Disciples of Yakub left 31.4 — Tank Dell 20.5, Chris Rodriguez Jr. 11.2, Xavier Worthy 10.8
     Yan Dynasty left 26.6 — C.J. Stroud 36.4, Quentin Johnston 13.3
-->

Ethan left 33 on his bench and lost by 0.66. His best lineup was **147.58**, and it wins by 32.34. Ethical tank.


## card

<!--
     the board spans 221 to 283.5 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

Chris, who couldn't start a kicker last week, is a favourite this week. Garrett is the biggest
favourite on the board. Lane is a +195 underdog without a defence.


## matchup:9-10

<!-- Trust the Process vs ‘22 LA Rams 
     −185 / +135 — 60.3% fair
     spread −7.5, total 221
     projected 114.5 vs 107.5
     last week Trust the Process: 107.2 (projected 121.1, -13.9)
     last week ‘22 LA Rams : 114.6 (projected 128.5, -13.9)
-->

**Chris is −185.** His kicker is Eddy Pineiro, courtesy of the commissioner.

There's news at backup quarterback. **Fernando Mendoza**, Cal legend, has been on Chris's roster all season.
He's scored 2.22 points. After the trade deadline he's the Raiders' starter, and this is the first week
Sleeper has projected him at all: **11.6**. Jayden Daniels still starts in the house's lineup. The house
would like Chris to start Daniels too, and to check that he isn't on IR first.

Ethan has the lowest total on the board and the tank's quarterback. The house has priced Love.


## matchup:12-4

<!-- K9 FentPack vs Little St. Lane’s
     −280 / +200 — 68.8% fair
     spread −15.5, total 248
     projected 132.5 vs 117.1
     last week K9 FentPack: 167.3 (projected 127.2, +40.1)
     last week Little St. Lane’s: 115.2 (projected 130.6, -15.4)
-->

Besnoy scored 167.34 and lost. This week he's −280 over Burnes.


## matchup:8-3

<!-- Rat vs Yan Dynasty
     −290 / +200 — 69.2% fair
     spread −15.5, total 252
     projected 134.8 vs 118.9
     last week Rat: 121.8 (projected 134.1, -12.3)
     last week Yan Dynasty: 89.1 (projected 129.9, -40.8)
-->

The Gay Rat is **−290** over Keeyan, the biggest edge on the board. Chris owns his 2027 first, so Chris
needs him to lose. Garrett, for once, has someone in this league rooting for him to stay in Florida.


## matchup:5-6

<!-- 3 AM afters in bull room vs Disciples of Yakub
     −125 / −110 — 51.7% fair
     spread −1.5, total 270
     projected 136.6 vs 135.1
     last week 3 AM afters in bull room: 168.9 (projected 143.8, +25.1)
     last week Disciples of Yakub: 70.7 (projected 136.5, -65.8)
-->

The closest game on the board. The house scored the high, BCJ scored the low, and the house is only
−125. Usual conflict of interest disclosed.


## matchup:7-1

<!-- Empyrean Athletic vs Lane Doe
     −270 / +195 — 68.2% fair
     spread −15.5, total 267.5
     projected 142.2 vs 126.4
     last week Empyrean Athletic: 136.4 (projected 131.1, +5.3)
     last week Lane Doe: 146.1 (projected 124.9, +21.2)
-->

Laur is −270 over the commissioner and riding high from the Blue Tsunami.
The house's lineup for Lane starts the **Colts defence**, which Lane
doesn't own. Lane can add one before Sunday. He's very good at adding players to rosters.


## matchup:2-11

<!-- The DNs vs The Washington Redskins
     −210 / +150 — 62.8% fair
     spread −11.0, total 283.5
     projected 148.2 vs 136.7
     last week The DNs: 108.7 (projected 151.7, -43.0)
     last week The Washington Redskins: 157.9 (projected 138.7, +19.2)
-->

Rohan is 8-1 and has won seven straight, and he's a **+150 underdog.** Tal is 7-2. The highest total on
the board, 283.5, and the best game of the week.


## punishment

<!-- THE PARLAY WINDOW — low scorer
     ‘22 LA Rams  +180 (28.4%)
     Trust the Process +380 (16.6%)
     Little St. Lane’s +430 (15.1%)
-->

Ethan is the **+180** favourite. Chris is +380. If it's Chris, Lane will probably place it for him.


## lineups

<!--
     highest projected: The DNs
     forfeited slots: none
     priced off waivers: Lane Doe DEF Indianapolis Colts 8
-->

## season

<!-- Tal +160 · Rohan +270 · Kunal +290. Milk mile: Ethan +200 · Chris +230 · Keeyan +370. -->

**Tal is +160**, with Rohan +270 and the house +290.

**The milk mile:** Ethan is the favourite at **+200**, and Chris is right behind him at +230. Lane has
threatened to sell Chris's seat to Fonck. The house would remind the commissioner that if he does, Fonck
inherits a +230 shot at a gallon of milk, and Fonck has already seen how that ends. 
`,xc=`---
league: dkenasty
week: 11
headline: MR. PF
byline: The House · Week 11
panels: top
---

<!-- DKENASTY SPORTSBOOK · week 11 · seed 1592547110
     House rule for this book: DKEnasty prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-11-20 1:56 PM PT, after TNF HOU–IND;
     TNF players priced at their pre-game projections, Kunal's call):
       RECORDS thru wk10: Tal 8-2 (1476.10) · Rohan 8-2 (1334.10) · Laur 7-3 · Kunal 6-4 · JC 6-4 · Besnoy 5-5
         · Lane 5-5 (PF 1164.58) · Garrett 4-6 (1276.42) · Burnes 4-6 (PF 1274.90) · Chris 3-7 · Keeyan 2-8 · Ethan 2-8.
       BURNES (MBurnes, r4) "Mr. PF": won wk8, wk9, wk10 (beat Besnoy 144.98–106.96 as +200 dog, +27.9 vs proj).
         Playoffs 9.8% (w10) → 31.0% (w11). Quote: "I think I make ploffs that's my parlay prediction".
         JC/Jacob (jc199, r6): "Your team is doing well rn - flexing w a 4-6 record is making yourself a lightning rod". Burnes plays JC wk11 (−430).
       LANE (lanek12, r1): "Tie break is who beat who before PF". Sleeper/sim tiebreak is wins then PF (season.mjs:164).
         Lane beat Burnes wk2 121.00–118.56 (2.44). Wk13: Lane vs Burnes ("Mr. PF vs The Excuse"; The Excuse = Lane, Kunal).
         Under Lane's rule a tie goes Lane; under the real one Burnes (+110.32 PF). Projected 6.5 wins Lane vs 6.3 Burnes, playoffs 19.5% vs 31.0%.
         Lane: "Doesnt matter u guys dont follow the rules anyways so i’ll just change them". Only known violation: Chris's unplaced parlays.
       CHRIS (Christopheryu21, r9): wk10 low 80.26 (−185 fav, lost to Ethan 133.70). Lows wk3, wk6, wk7, wk8, wk10 = five parlays owed.
         Has not placed the wk10 slip; sat the CPA Fri 11/20 (Kunal). Trade Sun 11/15 8:32 PM PT: Mike Evans → JC for Xavier Worthy + JC's 2029 2nd.
         Mendoza (LV, Cal) still on Chris's roster, projected 12.05, not in the house's lineup (Daniels 21.5). Chris owns Garrett's 2027 1st (w8).
       DRAFT: 2026 linear, 3 rounds. 1.01 Besnoy (2025 4-10, 1615 PF) · 1.02 Lane (4-10) · 1.05 Burnes (2025 5-9, 1721). Burnes lost the 2025 toilet bowl
         and ran the milk mile in Costa Rica (league config). His complaint: the toilet-bowl loser should have been 1.01.
       ETHAN (r10): "What does Nals AI say?" → NAL'S AI panel, w11 futures sorted by playoff %.
       Wk11 byes ATL, GB, SEA, CLE: Rohan has Bijan, London, Pitts, Golden, Kraft out → 101.8 projected, +700 to Kunal.
       Trades this week: only Chris–JC (above). Nothing after the pull.
       Specials: node scripts/props/specials-w11.mjs. Cal +115ish at home vs Stanford, de-vigged 45.0%; Leafs vs CBJ 51.6%. -->

## lede

<!--
     biggest edge: 3 AM afters in bull room −1850 over The Washington Redskins (88.3%, −36.5)
     closest game: The DNs vs Lane Doe at −160 (57.4%)
     highest total: 269
     last week: The DNs 170.1 high, Trust the Process 80.3 low
     the book went 4-2 on favourites, Brier 0.234
-->

Burnes is 4-6. He's won three straight, his playoff chance went from **9.8% to 31.0%** in a week, and he
has announced a forecast:

> "I think I make ploffs that’s my parlay prediction"

Jacob didn't love it:

> "Your team is doing well rn - flexing w a 4-6 record is making yourself a lightning rod"

Burnes plays Jacob on Sunday. Burnes is **−430**.

The chat has a name for him now. **Mr. PF.** Burnes has scored 1,274.90 points, which is 110.32 more
than the commissioner. That matters, because Burnes and Lane play each other in week 13, and the
commissioner has explained how ties work:

> "Tie break is who beat who before PF"

It isn't. Points for is the tiebreak. The house checked who beat who anyway. **Lane beat Burnes in week
two, 121.00 to 118.56.** So the commissioner misremembered the one rule that matters, and he
misremembered it in his own favour. When this was pointed out:

> "Doesnt matter u guys dont follow the rules anyways so i’ll just change them"

The house has looked for the rule violations. It found one. Chris owes a parlay. It's his fifth of
the season, and he hasn't placed it, because he's taking the CPA. The house wishes him
well on the exam. Accounting is the only part of this league he hasn't been asked to do yet.

Then there's the draft. Burnes lost the toilet bowl last year and ran the milk mile in Costa Rica.
He'd like it noted that he should have picked **1.01**. The league drafts in reverse order of the
regular season, so 1.01 went to Besnoy, who went 4-10. Burnes, at 5-9,
picked fifth. Burnes has two complaints: the draft order and his playoff odds. The fix for both is the
same. Win more games.



## The Specials

<!-- printed by scripts/props/specials-w11.mjs
     outside legs, de-vigged: cal 45.0% · leafs 51.6% · psg 65.9% · raiders 18.1% · panthers 58.0% · commanders 28.6%
     BotBinLaden 72.4% vs ethansmith2580 27.6%
     Garrettrh 84.9% vs Christopheryu21 15.1%
     MBurnes 75.5% vs jc199 24.5%
     samlaur 73% vs Keeyan99 27.0%
     kdutta 88.3% vs rnath499 11.7%
     tal262000 57.4% vs lanek12 42.6%
     The Big Game: Cal beats Stanford and Chris beats Garrett: fair 6.8%
     The Cal Legend: Cal beats Stanford and Mendoza's Raiders win at Denver: fair 8.1%
     Mr. PF's parlay: Burnes makes the playoffs and the Leafs beat Columbus: fair 16.0%
     Mr. PF passes The Excuse: Burnes beats Jacob and Lane loses to Tal: fair 43.3%
     The Lightning Rod: Jacob beats Burnes and Lane beats Tal: fair 10.4%
     The Commissioner's Special: Lane beats Tal and his new Panthers defence beats Baltimore: fair 24.7%
     The Nob Hill: the house and Chris both win: fair 13.3%
     Burnes makes ploffs: fair 31.0%
     Week 13, Mr. PF vs The Excuse: Burnes beats Lane: fair 61.7%
     wk13: rest-of-season weekly projections Burnes 134 vs Lane 124.2, σ 23.2 a side
     Chris places the week-10 parlay before Sunday's first kickoff: fair 45.0%
-->

The Big Game is Saturday in Berkeley. Cal is a +115 underdog to Stanford, and Chris has had a Cal legend
on his bench all season. Every price below is fair odds times the house margin. Legs are independent.

- The Big Game: Cal beats Stanford and Chris beats Garrett: **Yes +1250** · **No −2400**
- The Cal Legend: Cal beats Stanford and Mendoza's Raiders win at Denver: **Yes +1050** · **No −2400**
- Mr. PF's parlay: Burnes makes the playoffs and the Leafs beat Columbus: **Yes +480** · **No −930**
- Mr. PF passes The Excuse: Burnes beats Jacob and Lane loses to Tal: **Yes +115** · **No −155**
- The Lightning Rod: Jacob beats Burnes and Lane beats Tal: **Yes +790** · **No −2400**
- The Commissioner's Special: Lane beats Tal and his new Panthers defence beats Baltimore: **Yes +280** · **No −420**
- The Nob Hill: the house and Chris both win: **Yes +600** · **No −1350**
- Burnes makes ploffs: **Yes +200** · **No −290**
- Week 13, Mr. PF vs The Excuse: Burnes beats Lane: **Yes −195** · **No +145**
- Chris places the week-10 parlay before Sunday's first kickoff: **Yes +105** · **No −145**

## Nal's AI

<!-- w11 futures: projected wins-losses, playoff %. Six make it, two byes. Sim seeds on wins, then PF. -->

Ethan asked what Nal's AI says. Twenty-five thousand seasons, seeded on wins, then points:

- **Tal** 10.8-3.2 · playoffs 100% · bye 87.8%
- **Laur** 9.7-4.3 · 99.1% · bye 40.4%
- **Kunal** 9.2-4.8 · 98.7% · bye 31.5%
- **Rohan** 9.8-4.2 · 98.3% · bye 36.7%
- **Jacob** 7.9-6.1 · 75.1%
- **Besnoy** 7.2-6.8 · 55.0%
- **Burnes** 6.3-7.7 · 31.0%
- **Garrett** 6.2-7.8 · 23.3%
- **Lane** 6.5-7.5 · 19.5%
- Ethan, Keeyan, Chris · 0%

Lane is projected for more wins than Burnes and has the worse playoff chance. That's points for. It's
also the rule Lane says doesn't exist.



## settled

<!--
     favourites 4-2 SU, 4-2 ATS, totals 3-3 over
     Brier 0.234 vs 0.25 for a coin flip; expected 3.8 chalk wins, got 4
     low scorer Trust the Process 80.3 — priced +380, 2 of 12
     high scorer The DNs 170.1
     biggest beat: Little St. Lane’s 145.0 vs 117.1 projected (+27.9)
     biggest miss: Trust the Process 80.3 vs 114.5 projected (-34.2)
-->

**Four and two, Brier 0.234.** The two favourites who lost were Chris at −185 and Besnoy at −280.

**Chris scored 80.26** and places the parlay. It's the fifth time this season he's had the job. He's been the low scorer in weeks
three, six, seven, eight and ten. Ethan, the +180 favourite for the parlay, beat him by 53.44.

**Burnes beat Besnoy by 38.02** as a +200 underdog. He was 27.9 over his projection, the biggest beat
of the week. Tal scored the high, 170.06, and handed Rohan his second loss.


## bench

<!--
     Yan Dynasty left 29.1 — Deebo Samuel Sr. 25.9, Chimere Dike 4.1
     Empyrean Athletic left 29.0 — Jordyn Tyson 19, DK Metcalf 15.4, Bryce Young 8.1
     3 AM afters in bull room left 17.4 — Mark Andrews 16.2, Aaron Jones Sr. 12.5, Malachi Fields 9.2
-->

Keeyan left 29.1 on his bench, 25.9 of it Deebo Samuel's, and lost to Garrett by 58.4. It didn't matter.
Laur left 29.0 and won by 45.54. That didn't matter either.


## card

<!--
     the board spans 231.5 to 269 on totals
-->

Atlanta, Green Bay, Seattle and Cleveland are on bye, and they've taken Rohan's team with them. Two
games are priced past −1000. The closest game on the board is the commissioner's.


## matchup:4-6

<!-- Little St. Lane’s vs Disciples of Yakub
     −430 / +280 — 75.5% fair
     spread −22.5, total 257.5
     projected 141 vs 118.4
-->

**Mr. PF vs. the man who called him a lightning rod.** Burnes is −430, and a win puts him at 5-6.
Jacob is 6-4, and he'd like everyone to know he isn't flexing.


## matchup:2-1

<!-- The DNs vs Lane Doe
     −160 / +120 — 57.4% fair
     spread −6.0, total 251.5
     projected 129.2 vs 123.7
-->

The closest game on the board. Lane is +120 to Tal, who has the best record and the most points in the
league. A win here and Lane wouldn't need to know the tiebreak.


## matchup:8-9

<!-- Rat vs Trust the Process
     −1050 / +520 — 84.9% fair
     spread −31.5, total 246.5
     projected 139.9 vs 108.3
-->

**Chris is +520.** He owns Garrett's 2027 first, so beating Garrett is the one win in this league that
pays Chris twice. Fernando Mendoza, Cal legend, is on his bench,
projected for 12.05. It's Big Game weekend, and the house's lineup still starts Jayden Daniels.


## matchup:5-11

<!-- 3 AM afters in bull room vs The Washington Redskins
     −1850 / +700 — 88.3% fair
     spread −36.5, total 239
     projected 138.5 vs 101.8
-->

Rohan is 8-2 and has Bijan Robinson, Drake London, Kyle Pitts, Matthew Golden and Tucker Kraft on bye.
The house is **−1850.** Usual conflict of interest disclosed.


## matchup:7-3

<!-- Empyrean Athletic vs Yan Dynasty
     −360 / +240 — 73% fair
     spread −19.5, total 269
     projected 145.2 vs 125
-->

The highest total on the board. Laur is −360, and the house's lineup puts the Lions defence in his
DEF slot, which he doesn't own.


## matchup:12-10

<!-- K9 FentPack vs ‘22 LA Rams
     −350 / +240 — 72.4% fair
     spread −18.0, total 231.5
     projected 125.7 vs 107.3
-->

Ethan beat Chris by 53.44 and is 2-8. Besnoy is −350 and has lost two straight.


## punishment

<!-- THE PARLAY WINDOW — low scorer
     The Washington Redskins +175 (29.3%)
     ‘22 LA Rams  +290 (20.5%)
     Trust the Process +320 (18.9%)
-->

**Rohan is the +175 favourite** to place next week's parlay, which tells you everything about the
bye week. Chris is +320, and he'd have two to place.


## lineups

<!--
     highest projected: Empyrean Athletic
     priced off waivers: Empyrean Athletic DEF Detroit Lions 7.5
-->


## season

<!-- Tal +210 (was +160) · Kunal +240 (was +290) · Rohan +380 (was +270) · Laur +420 (was +800).
     Milk mile: Chris +120 (was +230) · Keeyan +330 · Ethan +340 (was +200). -->

**Tal is +210**, Kunal +240 and Rohan +380. Laur came in from +800 to +420.

**The milk mile** has a new favourite. **Chris is +120**, in from +230, with Keeyan +330 and Ethan
+340. Burnes ran it in Costa Rica for last season. This season he's +200 to make the playoffs instead.
`,Ec=`---
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
`,Nc=`---
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
`,Cc=`---
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
`,jc=`---
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
`,Bc=`---
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
`,Lc=`---
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
`,Pc=`---
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

The house has read that sentence many times and is still not sure what this means.
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
`,Ac=`---
league: dkenasty
week: 9
headline: 4:21
byline: The House · Week 9
---

<!-- DKENASTY SPORTSBOOK · week 9 · seed 1592530180
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: DKEnasty prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-11-05 PT):
       MARATHON (Kunal): NYC Marathon Sun 2026-11-01. Burnes (MBurnes, r4) 4:21:21 (9:59/mi), Garrett (Garrettrh, Rat, r8) 5:04:03.
         Gap 42:42. Neither texted the GC after (Kunal); "celebrated by drinking" is Kunal's assumption — printed as the house's.
       COUSINS. Kunal (r5) dropped Kirk Cousins Wed 10/28 4:21:47 PM ET for Chig Okonkwo. Burnes claimed Cousins on waivers
         Fri 10/30 3:22 PM ET, dropping Geno Smith. Kunal dropped Okonkwo Sun 11/1 10:45 AM for Eli Raridon (scored 1.5).
         wk8 Burnes 176.08 beat Kunal 124.2 by 51.88 as +155. Cousins 28.18, Higgins 37.5, Swift 27.9, PIT DEF 21. Burnes best 187.18.
         Kunal started Lamar Jackson 0, benched Trevor Lawrence 19.4; Kunal best 146.5 (still loses by 29.58).
         176.08 = wk8 high, 4th-highest score of the season (199.86, 187.24, 181.72). Burnes 2-6 (wins wk3, wk8). 176.08/26.2 = 6.72.
       Garrett lost to Rohan 132.46–120.08 (−12.38). Started Stafford 9.28 + Breece Hall 0; bench Dak 19.8, BTJ 8.2. Best 138.8.
       Lane beat Chris 90.86–87.48 (−370; Chris covered +18.5). Total 178.34 = lowest game total this season (prior 184.98, wk7);
         posted 218.5, under by 40.16. Lane QB Jacoby Brissett (Wed bye pickup) 4.46, dropped Tue 11/3 9:00 AM. Now Bo Nix,
         added Wed 11/4 8:01 AM — JC dropped Nix 10/29 for Chiefs DEF (KC scored 1 for JC wk8; JC dropped KC on 11/4 waivers).
       Chris LOW again: wk3, wk6, wk7, wk8 — fourth slip, third straight. Priced −120 (fav), hit. wk8 slip legs/result: NOT given.
       Rohan 7-1, six straight (wk3–wk8). Bench 33.7, most in league: Adonai Mitchell 27.2 benched (started him wk7, scored 0).
       Tal lost to Besnoy 126.98–107.18 as −195; −38.6 vs projection, week's biggest miss. JC +105 over Laur 137.24–127.96.
       Ethan (r10) 1-7. Sun 11/1 7:21–7:22 PM dropped Zonovan Knight + Alvin Kamara; Besnoy claimed Kamara on Wed waivers.
         Wed waivers: Ethan claimed J.J. McCarthy (Rohan dropped him 10/31), Kevin Coleman Jr., MIA DEF, Kimani Vidal, Cam Little.
       Draft picks (w8 receipts): Rohan owns Burnes' 2027 1st; Chris owns Garrett's 2027 1st.
       MODEL (2026-11-05): from wk9 rest-of-season = mean of Sleeper weekly projections wks 10–17 (ros-w9.json), not the stale
         season endpoint (Cousins was 2.2/g there). Futures moved w8→w9 partly from that — do not narrate it as football.
       Milk mile: Chris +200 (27.1) · Ethan +400 (16.1) · Burnes +420 (15.7) · Keeyan +460 (14.5) · Lane +490 (13.7).
       Title: Tal +135 (31.4) · Kunal +330 (17.2) · Rohan +350 (16.6) · JC +600 (10.6) · Laur +640 (10.0). -->

## lede

<!--
     biggest edge: 3 AM afters in bull room −290 over K9 FentPack (69.1%, −16.5)
     closest game: Little St. Lane’s vs ‘22 LA Rams  at −130 (52.8%)
     highest total: 287
     last week: Little St. Lane’s 176.1 high, Trust the Process 87.5 low
     the book went 3-3 on favourites, Brier 0.261
-->

On Wednesday, October 28, at **4:21 PM**, Kunal dropped Kirk Cousins for a tight end named Chig
Okonkwo. On Friday, Burnes claimed Cousins off waivers. On Sunday, Burnes ran the New York City
Marathon in **4:21:21**, and Cousins scored **28.18** against Kunal.

Burnes put up **176.08**. That's the high score of the week, the fourth-highest in this league all
season, and **6.72 points per mile**. He beat the house by **51.88** as a +155 underdog. Last week the
house said it hoped he'd set his lineup on Saturday. He'd set it on Friday, with the house's own
quarterback.

The house's side of the ledger: Kunal started Lamar Jackson, who scored **0**, with Trevor Lawrence's
19.4 on the bench. Okonkwo didn't last until kickoff either. Kunal cut him on Sunday morning for Eli
Raridon, who scored 1.5. Kunal's best possible lineup was 146.5, and it loses by 29.58. **The house
was beaten by a man who spent four hours, twenty-one minutes and twenty-one seconds of his Sunday
running.**

Garrett ran it too, in **5:04:03**, 42 minutes and 42 seconds behind Burnes. His fantasy team finished
behind as well. He lost to Rohan by 12.38, with Matthew Stafford's 9.28 in his lineup and Dak
Prescott's **19.8** on the bench. His best lineup was 138.8, and it wins. **Garrett finished his race.
His lineup didn't.**

And then neither man said a word in the group chat. Not a split time, not a medal photo, nothing.
Two men ran 26.2 miles through five boroughs and went silent, and the house doesn't need a model for
this one. It assumes Burnes celebrated a 4:21 marathon and a 176-point week the way any reasonable
man would, by drinking heavily. It assumes Garrett drank through a 5:04 and a loss with the same
commitment, which is the only pace that matters at that point. Kunal's team is named for 3 AM afters.
The house assumes two other men in this league went to one, and that they haven't texted because
they're still recovering.


## settled

<!--
     favourites 3-3 SU, 2-4 ATS, totals 2-4 over
     Brier 0.261 vs 0.25 for a coin flip; expected 3.6 chalk wins, got 3
     low scorer Trust the Process 87.5 — priced −120, 1 of 12
     high scorer Little St. Lane’s 176.1
     joint: did not hit
     biggest beat: Little St. Lane’s 176.1 vs 122.8 projected (+53.3)
     biggest miss: The DNs 107.2 vs 145.8 projected (-38.6)
-->

**Three and three, Brier 0.261**, a hair worse than a coin flip. Three underdogs won: Burnes over the
house at +155, Besnoy over Tal at +140, and JC over Laur at +105.

Tal scored 107.18, **38.6 under** his projection and the week's biggest miss, and lost to Besnoy by
19.8. He's 6-2 and still the title favourite.

Last week the house posted **218.5** on Lane and Chris, the lowest total it had ever posted. They
combined for **178.34**, the lowest-scoring game of the season, and went under by 40.16. Lane won by
3.38 as a −370 favourite, so Chris covered. Lane's quarterback was Jacoby Brissett, the bye-week
pickup the house praised last week. He scored **4.46**, and Lane cut him on Tuesday morning. Excuse
Man checked the calendar. He didn't check Brissett.

**Chris finished last again**, at 87.48. He places the parlay for the fourth time this season and
the third week in a row: weeks three, six, seven and eight. The house made him −120, the first
odds-on favourite this market had ever posted, and it was right.


## bench

<!--
     The Washington Redskins left 33.7 — Adonai Mitchell 27.2, Caleb Douglas 8.3
     K9 FentPack left 32.4 — Harold Fannin Jr. 23.4, Wan'Dale Robinson 15.7
     3 AM afters in bull room left 22.3 — Trevor Lawrence 19.4, Mark Andrews 4.4
-->

Rohan left the most on his bench for the second week running, **33.7**. Most of it was Adonai
Mitchell, who scored **27.2**. In week seven, the week Rohan was trying to lose, he started Mitchell
and Mitchell scored zero. This week he benched him, and Mitchell scored 27.2. Rohan won anyway, by
12.38. He's 7-1 and has won six straight, and he can't even lose a lineup decision.

He did lose something on Sunday, though. Rohan owns Burnes' 2027 first, and Burnes beat the house.


## card

<!--
     the board spans 249.5 to 287 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

Burnes gets Ethan in the closest game on the board. Garrett gets the commissioner. Chris, who has
placed the last three parlays, gets Keeyan. And the house, still a little sore, is the biggest
favourite on the card.


## matchup:4-10

<!-- Little St. Lane’s vs ‘22 LA Rams 
     −130 / −105 — 52.8% fair
     spread −2.5, total 257.5
     projected 130.6 vs 128.5
     last week Little St. Lane’s: 176.1 (projected 122.8, +53.3)
     last week ‘22 LA Rams : 148.6 (projected 126.8, +21.8)
-->

**The marathon man is a favourite.** Burnes is −130 over Ethan, his quarterback is still the one Kunal
cut, and the house projects Cousins for 17.2.

Ethan is 1-7, the worst record in the league. On Sunday night he cut Zonovan Knight and Alvin Kamara
within a minute of each other. Besnoy claimed Kamara on Wednesday. Ethan claimed five players on
Wednesday himself, and one of them was **J.J. McCarthy**, the quarterback Rohan started in his tank
week. Ethan now has the tank's quarterback. The house is choosing to see this as a coincidence.


## matchup:3-9

<!-- Yan Dynasty vs Trust the Process
     −190 / +140 — 61% fair
     spread −8.5, total 249.5
     projected 129.9 vs 121.1
     last week Yan Dynasty: 152.1 (projected 129.2, +22.9)
     last week Trust the Process: 87.5 (projected 100.8, -13.3)
-->

Chris is a +140 underdog to Keeyan and the **+370 favourite** to place the parlay again. Keeyan beat
Ethan by 3.52 last week, with Tyler Allgeier scoring 36.1. Chris is still rebuilding. The parlay has
started to look like part of the rebuild.


## matchup:5-12

<!-- 3 AM afters in bull room vs K9 FentPack
     −290 / +200 — 69.1% fair
     spread −16.5, total 270
     projected 143.8 vs 127.2
     last week 3 AM afters in bull room: 124.2 (projected 133.5, -9.3)
     last week K9 FentPack: 127.0 (projected 135.9, -8.9)
-->

The house is **−290** over Besnoy, the biggest edge on the board, and it discloses the usual conflict
of interest. It would also like to note that it has started a quarterback who plays this week. Last
week it didn't.


## matchup:8-1

<!-- Rat vs Lane Doe
     −195 / +140 — 61.4% fair
     spread −9.0, total 257.5
     projected 134.1 vs 124.9
     last week Rat: 120.1 (projected 131.7, -11.6)
     last week Lane Doe: 90.9 (projected 119.3, -28.4)
-->

Garrett is −195 over Lane, and the house's lineup for him starts Dak Prescott. The house would ask
Garrett to consider doing the same.

Lane's quarterback this week is **Bo Nix**, his third starter in three weeks. He picked Nix up on
Wednesday morning, a week after JC dropped him for the Chiefs defence. The Chiefs scored one point
for JC, and JC cut them on Wednesday too.

One more thing. **Chris owns Garrett's 2027 first.** A Lane win makes that pick better. Chris, who
spent last week calling Lane a bum, needs the commissioner to win.


## matchup:2-6

<!-- The DNs vs Disciples of Yakub
     −250 / +175 — 66.3% fair
     spread −15.0, total 287
     projected 151.7 vs 136.5
     last week The DNs: 107.2 (projected 145.8, -38.6)
     last week Disciples of Yakub: 137.2 (projected 133.4, +3.8)
-->

Tal comes off a 38.6-point miss, and JC comes off a win as an underdog. It's
the highest total on the board, **287**, and Tal is −250.


## matchup:11-7

<!-- The Washington Redskins vs Empyrean Athletic
     −180 / +130 — 59.6% fair
     spread −7.5, total 268.5
     projected 138.7 vs 131.1
     last week The Washington Redskins: 132.5 (projected 136.7, -4.2)
     last week Empyrean Athletic: 128.0 (projected 137.7, -9.7)
-->

## punishment

<!-- THE PARLAY WINDOW — low scorer
     Trust the Process +370 (17%)
     Lane Doe +480 (13.9%)
     ‘22 LA Rams  +620 (11%)
-->

Chris is **+370** to place it again. He's placed the last three. Last week the house had him at
−120 and it hit. This week's price is longer, and the house doesn't believe it either.


## lineups

<!--
     highest projected: The DNs
     forfeited slots: none
     priced off waivers: Trust the Process K Evan McPherson 9.3; The Washington Redskins RB Austin Ekeler 7.4; The Washington Redskins K Evan McPherson 9.3
-->

## season

<!-- milk mile: Chris +200 · Ethan +400 · Burnes +420 · Keeyan +460 · Lane +490. Tal title +135. Model change w9. -->

**A note from the house first.** It rebuilt its season model this week. It had been pricing every week
after this one off Sleeper's preseason totals, and those still had Kirk Cousins as a backup worth
**2.2 points a game**. Now it uses Sleeper's weekly projections for every week left. If the futures
moved more than the football did, that's why, and it's Burnes' fault.

**The milk mile:** Chris is the favourite at **+200**, then Ethan +400, Burnes +420, Keeyan +460 and Lane
+490. Burnes won the milk mile in Costa Rica and now has a marathon medal. The house thinks he should
retire from distance events while he's ahead.

At the top, **Tal is +135**, then Kunal +330 and Rohan +350.
`,Rc=`---
league: loog
week: 10
headline: WEEK 10
byline: The House · Week 10
---

<!-- THE ORDINARY GENTLEMEN · week 10 · seed 1592538343
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!--
     biggest edge: Jahmyracle on Ice −500 over bmilgram (77.6%, −25.0)
     closest game: The Warren Ukraine vs Easy Breece-y at −140 (54.2%)
     highest total: 264
     last week: The Warren Ukraine 156.0 high, Jahmyracle on Ice 81.7 low
     the book went 3-2 on favourites, Brier 0.218
-->

Step Brockers' six-game winning streak ended against The Warren Ukraine, 156.04 to 145.88. The two teams are now tied at the top at 6-3.


## settled

<!--
     favourites 3-2 SU, 2-3 ATS, totals 1-4 over
     Brier 0.218 vs 0.25 for a coin flip; expected 3.1 chalk wins, got 3
     low scorer Jahmyracle on Ice 81.7 — priced +2350, 10 of 10
     high scorer The Warren Ukraine 156.0
     joint: did not hit
     biggest beat: The Warren Ukraine 156.0 vs 134.2 projected (+21.8)
     biggest miss: Jahmyracle on Ice 81.7 vs 138.1 projected (-56.4)
-->

Favourites went 3-2 and the Brier score was 0.218.

Jahmyracle on Ice scored the low, 81.74, 56.4 below its projection. The house had it at +2350, the longest price of the ten. It has scored the most points in the league, 1,198.18, and is 4-5. The favourite in the low-score market, McLovin at +220, scored 85.96, second-lowest. The favourite in that market has now missed nine weeks running.


## bench

<!--
     T-Posers left 23.4 — Tee Higgins 20.2, Isaiah Likely 16.3
     Jahmyracle on Ice left 14.8 — Dak Prescott 19.5, Blake Corum 11.8, Jalen Coker 6.6
     bmilgram left 13.9 — Denzel Boston 15.8
-->

T-Posers left 23.4 on the bench, the most in the league, with Tee Higgins' 20.2 and Isaiah Likely's 16.3. It won anyway. Jahmyracle on Ice benched Dak Prescott's 19.5.


## card

<!--
     the board spans 231.5 to 264 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

## matchup:2-3

<!-- Step Brockers vs McLovin
     −250 / +175 — 66.1% fair
     spread −12.0, total 231.5
     projected 122.9 vs 110.5
     last week Step Brockers: 145.9 (projected 126.8, +19.1)
     last week McLovin: 86.0 (projected 111.2, -25.2)
-->

## matchup:8-5

<!-- T-Posers vs aruni3
     −190 / +140 — 61% fair
     spread −9.5, total 258.5
     projected 134.5 vs 125.1
     last week T-Posers: 120.5 (projected 132.9, -12.4)
     last week aruni3: 131.6 (projected 124.4, +7.2)
-->

## matchup:9-1

<!-- The Warren Ukraine vs Easy Breece-y
     −140 / +105 — 54.2% fair
     spread −3.0, total 241
     projected 123.2 vs 119.3
     last week The Warren Ukraine: 156.0 (projected 134.2, +21.8)
     last week Easy Breece-y: 138.8 (projected 124.2, +14.6)
-->

The closest game on the board. The Warren Ukraine scored the high last week and is −140.


## matchup:7-10

<!-- Jahmyracle on Ice vs bmilgram
     −500 / +320 — 77.6% fair
     spread −25.0, total 264
     projected 145.3 vs 120
     last week Jahmyracle on Ice: 81.7 (projected 138.1, -56.4)
     last week bmilgram: 124.0 (projected 125.6, -1.6)
-->

Jahmyracle on Ice is −500, the biggest edge on the board, a week after scoring the low.


## matchup:4-6

<!-- Skat in LaPorta Potty vs ❄️
     −260 / +185 — 67.1% fair
     spread −13.5, total 232.5
     projected 123.9 vs 110
     last week Skat in LaPorta Potty: 99.1 (projected 124.4, -25.3)
     last week ❄️: 118.0 (projected 118.5, -0.5)
-->

## punishment

<!-- LOW SCORER OF THE WEEK — low scorer
     ❄️ +250 (22.6%)
     McLovin +270 (21.6%)
     Easy Breece-y +660 (10.6%)
-->

❄️ is the +250 favourite to score the low, with McLovin +270. No favourite in this market has scored the low yet.


## lineups

<!--
     highest projected: Jahmyracle on Ice
     forfeited slots: none
     priced off waivers: McLovin QB Bryce Young 18.9; ❄️ RB Devin Singletary 8.4
-->

## season

<!-- Jahmyracle +210 (was +175) · Step Brockers +320 (was +410) · T-Posers +490. Last: Easy Breece-y +260 · ❄️ +370. -->

Jahmyracle on Ice is still the title favourite, at +210, out from +175 after the loss. Step Brockers is +320 and T-Posers +490. Easy Breece-y is the favourite to finish last, at +260.
`,Hc=`---
league: loog
week: 11
headline: WEEK 11
byline: The House · Week 11
---

<!-- THE ORDINARY GENTLEMEN · week 11 · seed 1592546804
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped. -->

## lede

<!--
     biggest edge: T-Posers −660 over bmilgram (80.8%, −28.5)
     closest game: aruni3 vs McLovin at −140 (54.6%)
     highest total: 258.5
     last week: T-Posers 219.4 high, bmilgram 69.4 low
     the book went 4-1 on favourites, Brier 0.191
-->

The Warren Ukraine beat Easy Breece-y 175.26 to 107.06 and is alone in first at 7-3. Step Brockers lost to McLovin as a −250 favourite and fell to 6-4, level with McLovin.


## settled

<!--
     favourites 4-1 SU, 4-1 ATS, totals 2-3 over
     Brier 0.191 vs 0.25 for a coin flip; expected 3.3 chalk wins, got 4
     low scorer bmilgram 69.4 — priced +670, 4 of 10
     high scorer T-Posers 219.4
     joint: did not hit
     biggest beat: T-Posers 219.4 vs 134.5 projected (+84.9)
     biggest miss: bmilgram 69.4 vs 120 projected (-50.6)
-->

Favourites went 4-1 and the Brier score was 0.191. The one upset was McLovin over Step Brockers, 101.7 to 88.86.

T-Posers scored the high, 219.42, 84.9 above its projection. bmilgram scored the low, 69.38, priced at +670, fourth of ten.


## bench

<!--
     Jahmyracle on Ice left 44.1 — Dak Prescott 34.4, Blake Corum 20.9, Konata Mumpfield 11.1
     Skat in LaPorta Potty left 31.6 — Patrick Mahomes 35.4, Deebo Samuel Sr. 25.9
     Step Brockers left 29.3 — Omarion Hampton 17.5, KC Concepcion Jr. 11.7, Caleb Douglas 10.1
-->

Jahmyracle on Ice left 44.1 on the bench, the most in the league, with Dak Prescott's 34.4 among it. It won by 98.24 anyway.


## card

<!--
     the board spans 229 to 258.5 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

## matchup:5-3

<!-- aruni3 vs McLovin
     −140 / +105 — 54.6% fair
     spread −3.5, total 229
     projected 117.1 vs 113.3
     last week aruni3: 145.7 (projected 125.1, +20.6)
     last week McLovin: 101.7 (projected 110.5, -8.8)
-->

## matchup:1-2

<!-- Easy Breece-y vs Step Brockers
     −140 / +105 — 54.6% fair
     spread −3.5, total 235
     projected 120 vs 116.4
     last week Easy Breece-y: 107.1 (projected 119.3, -12.2)
     last week Step Brockers: 88.9 (projected 122.9, -34.0)
-->

## matchup:8-10

<!-- T-Posers vs bmilgram
     −660 / +380 — 80.8% fair
     spread −28.5, total 248
     projected 139.2 vs 110.7
     last week T-Posers: 219.4 (projected 134.5, +84.9)
     last week bmilgram: 69.4 (projected 120, -50.6)
-->

## matchup:9-6

<!-- The Warren Ukraine vs ❄️
     −145 / +110 — 55.4% fair
     spread −4.0, total 235.5
     projected 120.5 vs 116.9
     last week The Warren Ukraine: 175.3 (projected 123.2, +52.1)
     last week ❄️: 93 (projected 110, -17)
-->

## matchup:4-7

<!-- Skat in LaPorta Potty vs Jahmyracle on Ice
     −195 / +140 — 61.6% fair
     spread −9.0, total 258.5
     projected 134.5 vs 125.1
     last week Skat in LaPorta Potty: 126.7 (projected 123.9, +2.8)
     last week Jahmyracle on Ice: 167.6 (projected 145.3, +22.3)
-->

## punishment

<!-- LOW SCORER OF THE WEEK — low scorer
     bmilgram +310 (19.7%)
     McLovin +400 (15.9%)
     Step Brockers +510 (13.1%)
-->

## lineups

<!--
     highest projected: T-Posers
     forfeited slots: none
     priced off waivers: aruni3 DEF Carolina Panthers 6.7
-->

`,Kc=`---
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
`,Dc=`---
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
`,Mc=`---
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
`,Oc=`---
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
`,Ic=`---
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
`,Wc=`---
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
`,Fc=`---
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

`,zc=`---
league: loog
week: 9
headline: WEEK 9
byline: The House · Week 9
---

<!-- THE ORDINARY GENTLEMEN · week 9 · seed 1592530902
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     No lore in this book, by design.
     RECEIPTS (committed files, 2026-11-05):
       wk8: 5-0 SU, 4-1 ATS, 2-3 totals, Brier 0.16. Warren Ukraine beat McLovin 154.18–97.08 (57.10, 3rd-largest margin of season).
       McLovin LOW 97.08, priced +950 (8th of 10). Bench 64.5 (Allgeier 36.1, Emmett Johnson 25.3); best 161.58 > week high 154.18.
       Low-score favourite has not finished last in any of weeks 1–8 (wk8 fav Easy Breece-y +210).
       Standings: Step Brockers 6-2 (six straight); Warren Ukraine, McLovin, ❄️ 5-3; Jahmyracle, aruni3, bmilgram 4-4; T-Posers 3-5;
         Easy Breece-y, Skat 2-6. Jahmyracle PF 1116.44, league high.
       MODEL (2026-11-05): rest-of-season now off Sleeper weekly projections wks 10–17. Futures moved partly from that.
       Title: Jahmyracle +175 (26.9) · Step Brockers +410 (14.4) · Warren Ukraine +480 (12.9). -->

## lede

<!--
     biggest edge: T-Posers −430 over McLovin (75.4%, −22.0)
     closest game: Skat in LaPorta Potty vs Easy Breece-y at −120 (50.6%)
     highest total: 261
     last week: The Warren Ukraine 154.2 high, McLovin 97.1 low
     the book went 5-0 on favourites, Brier 0.16
-->

Step Brockers has won six straight and leads the league at 6-2. This week it plays The Warren Ukraine, which is a game behind at 5-3 and scored the week's high last week, 154.18.


## settled

<!--
     favourites 5-0 SU, 4-1 ATS, totals 2-3 over
     Brier 0.16 vs 0.25 for a coin flip; expected 3.1 chalk wins, got 5
     low scorer McLovin 97.1 — priced +950, 8 of 10
     high scorer The Warren Ukraine 154.2
     joint: did not hit
     biggest beat: The Warren Ukraine 154.2 vs 128.9 projected (+25.3)
     biggest miss: McLovin 97.1 vs 124.5 projected (-27.4)
-->

Favourites went 5-0 and the Brier score was 0.16, the book's best week in this league. The Warren Ukraine beat McLovin by 57.10, the third-largest margin of the season.

McLovin scored the low, 97.08, at +950. His bench scored 64.5, with Tyler Allgeier's 36.1 among it. His best lineup was 161.58, which would have been the high score of the week.


## bench

<!--
     McLovin left 64.5 — Tyler Allgeier 36.1, Emmett Johnson 25.3, Wan'Dale Robinson 15.7
     ❄️ left 28.1 — Jordan Love 21.5, Jameson Williams 17
     Skat in LaPorta Potty left 24.5 — Malik Washington 15, Rome Odunze 12.7
-->

## card

<!--
     the board spans 242.5 to 261 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

Step Brockers plays The Warren Ukraine. T-Posers is the biggest favourite at −430 over McLovin, and Skat in LaPorta Potty against Easy Breece-y, both 2-6, is the closest game.


## matchup:8-3

<!-- T-Posers vs McLovin
     −430 / +280 — 75.4% fair
     spread −22.0, total 242.5
     projected 132.9 vs 111.2
     last week T-Posers: 130.2 (projected 118.8, +11.4)
     last week McLovin: 97.1 (projected 124.5, -27.4)
-->

## matchup:9-2

<!-- The Warren Ukraine vs Step Brockers
     −170 / +125 — 58.6% fair
     spread −7.0, total 259.5
     projected 134.2 vs 126.8
     last week The Warren Ukraine: 154.2 (projected 128.9, +25.3)
     last week Step Brockers: 127.2 (projected 123.1, +4.1)
-->

## matchup:7-5

<!-- Jahmyracle on Ice vs aruni3
     −240 / +175 — 66% fair
     spread −14.0, total 261
     projected 138.1 vs 124.4
     last week Jahmyracle on Ice: 151.5 (projected 146.9, +4.6)
     last week aruni3: 117.8 (projected 121.1, -3.3)
-->

## matchup:4-1

<!-- Skat in LaPorta Potty vs Easy Breece-y
     −120 / −115 — 50.6% fair
     spread −0.5, total 247.5
     projected 124.4 vs 124.2
     last week Skat in LaPorta Potty: 111.8 (projected 119.7, -7.9)
     last week Easy Breece-y: 114.1 (projected 107.4, +6.7)
-->

## matchup:10-6

<!-- bmilgram vs ❄️
     −165 / +120 — 58.2% fair
     spread −6.5, total 242.5
     projected 125.6 vs 118.5
     last week bmilgram: 124.8 (projected 117.9, +6.9)
     last week ❄️: 121.1 (projected 122.7, -1.6)
-->

## punishment

<!-- LOW SCORER OF THE WEEK — low scorer
     McLovin +220 (24.7%)
     ❄️ +420 (15.4%)
     aruni3 +680 (10.2%)
-->

McLovin is the +220 favourite to score the low. The favourite in this market has not scored the low in any of the first eight weeks.


## lineups

<!--
     highest projected: Jahmyracle on Ice
     forfeited slots: none
     priced off waivers: none
-->

## season

<!-- Jahmyracle +175 · Step Brockers +410 · Warren Ukraine +480. Model change w9. -->

From this week, the house prices every remaining week off Sleeper's weekly projections for that week, not its preseason totals. Some of this week's movement in the futures comes from that change.

Jahmyracle on Ice is the title favourite at +175. It is 4-4 and has scored the most points in the league, 1,116.44.
`,_c=`---
league: nicks
week: 10
headline: SILVER CLOUDS
byline: The House · Week 10
---

<!-- NICK'S SPORTSBOOK · week 10 · seed 1592538958
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: Nick's prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-11-11 PT):
       Book wk9: 5-1 SU, 5-1 ATS, 3-3 totals, Brier 0.19. Only upset: Fonck +200 beat Call 127.56–122.8.
       Hunter (TheHumSack, r12) wk9 LOW 71.74, priced +610 (3rd of 12). Third song (wk3, wk5, wk9). 1-8, playoffs 0.1%.
         Started Ladd McConkey 0, Will Reichard 9 with Cameron Dicker 13 on bench. Best 92.34 > Burnes 87.4 → best lineup = Burnes sings.
       Kobe (A5Kobe, r8) wk9 HIGH 177.78 (+155 fav hit), beat Keeyan by 58.04 at −640. Breece Hall 11.7. 7-2, PF 1356.48 (most; Prozan 1263.64, gap 92.84).
       JOINT "Hunter sings for Kobe" HIT +2400. Only joint hits ever: wk5 +2850 and wk9 +2400, both Hunter/Kobe.
       KARAOKE favourite: 0 for 9 (wk9 fav Fonck +230 scored 127.56 and won).
       Chris (r5) 157.16 beat Burnes 87.4 by 69.76 (−220). Chris 4-5. Caleb Williams on bye (CHI) wk10 → house priced Jared Goff off waivers.
       Oanta (r9) cut Jared Goff Wed 11/11 12:50 AM PT for Konata Mumpfield. Goff now the waiver QB priced for Chris AND Burnes.
       Burnes (r10) QBs: Lamar Jackson (IR) and Malik Willis (IR, added 11/4). 3-6.
       Kunal (r1) beat Oanta 142.04–131.86, 6-3, five straight. Arnst (r4) 5-4, added KC DEF Wed.
       Prozan (r7) Wed 11/11 cut Kamara for Jordan Mason and Gainwell for Corey Kiner.
       Byes wk10: CHI, DEN, PHI, TB. Keeyan priced with 3 waiver slots (Loveland CHI, McLaughlin TB on bye).
       Kobe −770 over Fonck = biggest line this book has ever posted (prior −760 wk5).
       JENSEN (Kunal, 2026-11-11): Jensen Huang sex scandal, may be out as NVIDIA CEO. Jensen of Nick's = Kobe; scandal = THE LOAN (w5 receipts).
         Loan: trade Wed 9/30 5:57 PM PT, Kobe sent Bowers/Nabers/Purdy/J. Warren for Goff/Puka/Kincaid. Commissioner reversal Tue 10/6 6:40 AM PT.
         Goff returned to Oanta, started wk5 (28.94), benched wks 6–9, cut Wed 11/11 12:50 AM PT. Kobe wk5 (first week after reversal) 203.56.
         Since reversal Kobe 3-2 (W wk5, W wk6, L wk7, L wk8, W wk9). Oanta 3-6, bus stop fav +180.
       KARAOKE NIGHT: Thu 2026-11-12, 9 PM, Silver Clouds, after TNF. Fonck can't make it up from San Mateo; pays later.
         Unpicked songs printed as "picker's choice" (Kunal's call). Running order is the house's.
       Title: Kobe +105 (35.7, was +130) · Prozan +220 · Kunal +730. Bus stop: Oanta +180 (29, was +360) · Hunter +330 · Burnes +500. -->

## lede

<!--
     biggest edge: Beriousbeast −770 over Gus’s Balls (82.4%, −31.5)
     closest game: Haircut Haircut 🗣️ vs Return of the Menace at −135 (53.5%)
     highest total: 284
     last week: Beriousbeast 177.8 high, Death By Foriegn War  71.7 low
     the book went 5-1 on favourites, Brier 0.19
-->

**Thursday, November 12. 9 PM. Silver Clouds.** Right after the Thursday game, Nick's finally pays
what it owes. Nine weeks, nine low scorers, and nobody has sung a note. Here's the running order. The
oldest debt goes first.

- 1. **Kunal** (week 1). Kobe picked "Vamp Anthem."
- 2. **Burnes** (week 2). Prozan's pick, revealed at the mic.
- 3. **Hunter** (week 3). Prozan's pick, revealed at the mic.
- 4. **Rohan** (week 4). Oanta picked "Or Nah (Remix)."
- 5. **Hunter** (week 5). Kobe's pick, revealed at the mic.
- 6. **Burnes** (week 6). Keeyan's pick, revealed at the mic.
- 7. **Jacob** (week 8). Kunal's pick, revealed at the mic.
- 8. **Hunter** (week 9). Kobe's pick, revealed at the mic.
- Not appearing: **Fonck** (week 7, Burnes picks). He can't make it up from San Mateo. It goes on his tab.

Set your lineups before you leave the house. The game ends, the singing starts, and nobody is checking
Sleeper from the stage.

**One more thing.** Jensen Huang, the CEO of the most valuable company in the world, is in a sex scandal
and might be out of a job. The league wants to know who the Jensen of Nick's is.

It's Kobe. He's scored **1,356.48** points, 92.84 more than anyone. He's 7-2 and the title favourite at
+105, and this week the house made him **−770**, the biggest line this book has ever posted.

And he's already had his scandal. In week four Kobe lent Oanta Brock Bowers, Malik Nabers, Brock Purdy
and Jaylen Warren for Jared Goff, Puka Nacua and Dalton Kincaid. Oanta called it getting Bowers "for
part of the season." Arnst exposed it, and the commissioner reversed it. The next week Kobe scored
**203.56**.

Every scandal needs someone to take the fall, and it's never the CEO. Oanta is 3-6 and the **+180
favourite for the bus stop.** On Wednesday at 12:50 AM he cut Jared Goff, the quarterback from the loan.
**Kobe kept the company. Oanta's left holding the collateral, and now he's cut that too.**


## settled

<!--
     favourites 5-1 SU, 5-1 ATS, totals 3-3 over
     Brier 0.19 vs 0.25 for a coin flip; expected 3.9 chalk wins, got 5
     low scorer Death By Foriegn War  71.7 — priced +610, 3 of 12
     high scorer Beriousbeast 177.8
     joint: HIT at +2400
     biggest beat: Need Crumbs HMU 157.2 vs 135.1 projected (+22.1)
     biggest miss: Death By Foriegn War  71.7 vs 124.5 projected (-52.8)
-->

**Five and one, Brier 0.19.** The only favourite to lose was Jacob, at −290, to Fonck. Fonck was the
+230 favourite to sing that week. He scored 127.56 instead, and the karaoke favourite is now **0 for 9.**

**Hunter scored 71.74** and sings for the third time this season. He started Ladd McConkey, who scored
zero, and Will Reichard, who scored 9, with Cameron Dicker's 13 on his bench. Hunter has two kickers.
He started the wrong one.

**Chris beat Burnes by 69.76**, the biggest margin of the week, 157.16 to 87.4. Burnes would like it
noted that he wasn't the low. Hunter's best lineup was 92.34, so if Hunter had set it, **Burnes would be
singing a third song.**


## bench

<!--
     Death By Foriegn War  left 20.6 — Cameron Dicker 13, Zach Charbonnet 9.6, Kenyon Sadiq 8.9
     Haircut Haircut 🗣️ left 19.1 — Tyler Shough 19.7, Rome Odunze 16, Caleb Douglas 13
     George Droyd left 17.2 — Tank Dell 20.5, Ryan Flournoy 7.3, Keenan Allen 6.6
-->

Hunter left the most on his bench, 20.6. Rohan left 19.1, including Tyler Shough's 19.7, and lost to
Arnst by 6.54. Rohan's best lineup wins that game.


## card

<!--
     the board spans 236 to 284 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

Four teams are on bye: Chicago, Denver, Philadelphia and Tampa. Two seats have no quarterback who
plays this week, and the house priced both of them with **the same one.**


## matchup:7-5

<!-- Need RB HMU vs Need Crumbs HMU
     −140 / +105 — 54.3% fair
     spread −3.5, total 280
     projected 142.7 vs 138.9
     last week Need RB HMU: 121.3 (projected 142.7, -21.4)
     last week Need Crumbs HMU: 157.2 (projected 135.1, +22.1)
-->

Chris scored 157.16 last week. This week his quarterback, Caleb Williams, is on bye, and he doesn't
have another one. The house priced him with **Jared Goff**, the best free agent, whom Oanta cut at 12:50
on Wednesday morning.

Prozan still needs a running back. On Wednesday he cut Alvin Kamara for Jordan Mason and Kenny
Gainwell for Corey Kiner. He's −140.


## matchup:10-9

<!-- George Droyd vs Loan Shark
     −170 / +125 — 58.3% fair
     spread −6.5, total 241.5
     projected 124.9 vs 118.6
     last week George Droyd: 87.4 (projected 123.7, -36.3)
     last week Loan Shark: 131.9 (projected 126.3, +5.6)
-->

Burnes has two quarterbacks, Lamar Jackson and Malik Willis, and **both are on injured reserve.** So
the house priced him with Jared Goff too.

Oanta cut Goff on Wednesday morning. If Burnes has any sense, he picks Goff up and starts him
against the man who cut him. Burnes
is −170, and Oanta is now the **+180 favourite** for the bus stop.


## matchup:12-6

<!-- Death By Foriegn War  vs Comet club?
     −135 / +100 — 53.6% fair
     spread −3.0, total 241
     projected 122.7 vs 119.8
     last week Death By Foriegn War : 71.7 (projected 124.5, -52.8)
     last week Comet club?: 119.7 (projected 126.7, -7.0)
-->

**Hunter is a favourite**, at −135. He's 1-8, he owes three songs, and his playoff chance is 0.1%.
It's because Keeyan's tight end and kicker are on bye, and the house had to fill three of Keeyan's
slots off waivers. The house would remind Hunter that he has two kickers, and to start the good one.


## matchup:4-1

<!-- Need Loan HMU vs Garbers mirror selfie
     −155 / +110 — 56.2% fair
     spread −5.0, total 253
     projected 130 vs 125
     last week Need Loan HMU: 132.1 (projected 133.8, -1.7)
     last week Garbers mirror selfie: 142.0 (projected 132.5, +9.5)
-->

Usual conflict of interest disclosed. Kunal has won five straight and the house still has him as a +110
underdog to Arnst. Arnst picked up the Chiefs defence on Wednesday. For once, he didn't cut anybody
the house had to mention.


## matchup:8-11

<!-- Beriousbeast vs Gus’s Balls
     −770 / +430 — 82.4% fair
     spread −31.5, total 284
     projected 158.4 vs 126.8
     last week Beriousbeast: 177.8 (projected 156.2, +21.6)
     last week Gus’s Balls: 127.6 (projected 113.6, +14.0)
-->

**−770.** Fonck beat the karaoke curse last week and won as a +200 underdog. The house is not
impressed. He also can't make it up from San Mateo on
Thursday, so his week-seven song goes on the tab.


## matchup:2-3

<!-- Haircut Haircut 🗣️ vs Return of the Menace
     −135 / +100 — 53.5% fair
     spread −3.0, total 236
     projected 120.1 vs 117.1
     last week Haircut Haircut 🗣️: 125.5 (projected 132.2, -6.7)
     last week Return of the Menace: 122.8 (projected 128.9, -6.1)
-->

The closest game and the lowest total on the board. Rohan and Jacob are both 4-5, and both owe a song.
They'll sing on Thursday and play each other on Sunday, and the house suggests they hold the trash
talk until after the second one.


## punishment

<!-- KARAOKE — low scorer
     Return of the Menace +400 (16%)
     Loan Shark +490 (13.6%)
     Comet club? +520 (12.9%)
-->

Jacob is the **+400** favourite to sing again. The favourite in this market is 0 for 9. If the curse
holds, Jacob sings once on Thursday and not again.


## punishment-paired

<!-- SONG SELECT — high scorer
     Beriousbeast +110 (38.3%)
     Need RB HMU +380 (16.5%)
     Need Crumbs HMU +820 (8.7%)
-->

Kobe is +110 to pick another song. He's picked three so far: Kunal's, and two of Hunter's.


## joint

<!--
     Return of the Menace sings for Beriousbeast — +1400 (6.3%)
     Comet club? sings for Beriousbeast — +1750 (5%)
     Haircut Haircut 🗣️ sings for Beriousbeast — +1750 (5%)
     Loan Shark sings for Beriousbeast — +1750 (5%)
     Death By Foriegn War  sings for Beriousbeast — +2200 (4%)
     George Droyd sings for Beriousbeast — +2700 (3.3%)
-->

Every one of the top six goes through Kobe. Jacob sings for Kobe is the shortest, at **+1400**.


## lineups

<!--
     highest projected: Beriousbeast
     forfeited slots: none
     priced off waivers: Need Crumbs HMU QB Jared Goff 18.8; Comet club? TE Mike Gesicki 10.4; Comet club? FLEX Juwan Johnson 9.1; Comet club? K Dominic Zvada 8.3; George Droyd QB Jared Goff 18.8; George Droyd RB Zonovan Knight 8.6
-->

## season

<!-- Kobe +105 (was +130) · Prozan +220 · Kunal +730. Bus stop: Oanta +180 (was +360) · Hunter +330 · Burnes +500. -->

**Kobe is +105**, a coin flip away from even money, with Prozan next at +220. Nobody else is shorter
than +700.

The bus stop has a new favourite. **Oanta is +180**, down from +360, after losing to the house and
cutting Jared Goff. Hunter, who is 1-8, is +330. The house has made him a favourite this week, and it
would like that on the record before Sunday.
`,Gc=`---
league: nicks
week: 11
headline: THE LOAN, PAID IN FULL
byline: The House · Week 11
panels: top
---

<!-- NICK'S SPORTSBOOK · week 11 · seed 1592546909
     House rule for this book: Nick's prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-11-20 1:56 PM PT, after TNF HOU–IND;
     TNF players priced at their pre-game projections, Kunal's call):
       KARAOKE NIGHT happened Thu 11/12 at Silver Clouds (Kunal). Every debt paid except Fonck's (wk7), who was on a date.
         Rohan was queued for "Or Nah" (Oanta's pick), choked, and paid later that night with "Paris" (Kanye & JAY-Z).
         Fonck now owes "Or Nah" next time. No second date set. Song list otherwise unknown — not printed.
         Two French women at Silver Clouds; nobody from Nick's talked to them (Kunal).
       W7 KARAOKE PROPS (scripts/props/karaoke-nov12.mjs, content/nicks/w7.md:261–265) settle:
         happens Nov 12 Yes −160 WIN · over 3.5 of six Yes +550 WIN · all six Yes +7800 WIN · Burnes clears both Yes +820 WIN
         · Kunal sings "Vamp Anthem" No −140 WIN: Silver Clouds didn't have it; Kunal sang "Wet Dreamz" (J. Cole) (Kunal, 2026-11-20).
       LEDGER NOW: Fonck (wk7, "Or Nah)") · Oanta (wk10, Arnst picks).
       KARAOKE FAVOURITE 0 for 10 (wk10 fav Jacob +400; Oanta sang at +490). Wk11 fav Prozan +200.
       WK10: 6-0 SU, Brier 0.173. Oanta 53.52 = lowest score in Nick's this season (prior low Burnes 67.62 wk6).
         Arnst 210.54 high (+80.5 vs proj), beat Kunal 190.56 by 19.98, total 401.1. Arnst exposed THE LOAN (w5).
         Fonck benched Mahomes 35.42, lost to Kobe 169.16–101.44; best lineup 123.72 still loses.
         Chris lost to Prozan 115.48–97.28 with Skattebo 27.2 and Hampton 17.5 benched; best 134.48 wins.
       THE TRADE Thu 11/19 10:51 AM PT: Kobe (A5Kobe, r8) sends Jayden Daniels, Breece Hall, Alec Pierce (IR), KC Concepcion
         to Oanta (goochsniffer2nd, r9) for Puka Nacua (IR). Puka was in the original Loan (w5: Bowers/Nabers/Purdy/Warren for
         Goff/Puka/Kincaid, reversed Tue 10/6). Oanta then cut Bo Nix 10:59, Singletary 11:00, Vele 11:01.
         Oanta had cut Drake Maye for Bo Nix Wed 11/18 10:18 AM; Kobe added Maye (Out) Fri 11/20 9:52 AM.
         Kobe title +105 (35.7%) → −105 (38.2%). Kobe 8-2 (PF 1525.64), Prozan 8-2. Oanta 3-7, bus stop +195.
       OTHER TRADE Mon 11/16 11:07 PM PT: Prozan sends Garrett Wilson to Chris for Ollie Gordon II.
       Wk11 byes ATL, GB, SEA, CLE: Prozan loses JSN, Christian Watson, Fannin, Kiner → 106.1 projected, +690 to Keeyan.
       Specials: node scripts/props/specials-w11.mjs. Cal de-vigged 45.0% vs Stanford. -->

## lede

<!--
     biggest edge: Comet club? −1800 over Need RB HMU (88.2%, −36.0)
     closest game: Gus’s Balls vs Death By Foriegn War  at −130 (52.3%)
     highest total: 275
     last week: Need Loan HMU 210.5 high, Loan Shark 53.5 low
     the book went 6-0 on favourites, Brier 0.173
-->

**Nick's paid its debts.** Thursday, November 12, Silver Clouds. Kunal, Burnes, Hunter, Jacob and Rohan
were all there, and eight songs from nine weeks got sung in one night.

The oldest debt went first. Kobe had picked "Vamp Anthem" for Kunal in week one. Silver Clouds didn't
have it, so Kunal sang **"Wet Dreamz"** by J. Cole instead. The house accepts the substitution.

Almost. Rohan was queued up for "Or Nah," Oanta's pick from week four. The music started and
Rohan **choked.** He came back later that night and paid with "Paris." The debt's cleared. The song
is not, and it's been reassigned.

**Fonck** wasn't there. He was on a date with his girlfriend. The house would point out that everyone
else was at Silver Clouds, and so were two very attractive French women, and **nobody from Nick's said
a word to either of them.** So the room with the girlfriend went one-for-one, and the room with the
microphone went zero-for-two. Fonck still owes week seven, and his song is now **"Or Nah"**.

Then there's Kobe, who has never needed a karaoke night to make news. In week four he lent Oanta four
players for Puka Nacua, Jared Goff and Dalton Kincaid, and the commissioner reversed it. On Thursday
morning, seven weeks later, he paid for real. **Jayden Daniels, Breece Hall, Alec Pierce and KC Concepcion** went to Oanta. Puka went
to Kobe.

Puka Nacua is on injured reserve. So is Alec Pierce. Kobe sent away a starting running back and a
quarterback he had on his bench for a receiver who can't play this week. The house moved his title price **from +105 to −105** anyway. This
is a playoff trade, and Kobe is 8-2.

Eight minutes after it went through, Oanta cut Bo Nix, whom he'd picked up the day before by cutting
Drake Maye. On Friday morning, Kobe picked up Drake Maye.



## The Specials

<!-- printed by scripts/props/specials-w11.mjs
     outside legs, de-vigged: cal 45.0% · leafs 51.6% · psg 65.9% · raiders 18.1% · panthers 58.0% · commanders 28.6%
     Christopheryu21 61.8% vs goochsniffer2nd 38.2%
     Keeyan99 88.2% vs prozan 11.8%
     arnst 75.9% vs MBurnes 24.1%
     FonckYou 52.3% vs TheHumSack 47.7%
     kdutta 65.2% vs jc199 34.8%
     A5Kobe 63.3% vs rnath499 36.7%
     The Big Game: Cal beats Stanford and Chris beats Oanta: fair 27.8%
     Paris: Rohan beats Kobe and PSG wins at Nice: fair 24.2%
     The Loan III: Oanta beats Chris and Kobe loses to Rohan: fair 14.0%
     Daniels' Revenge: Oanta beats Chris and the Commanders beat Cincinnati on Monday night: fair 10.9%
     Date Night: Fonck beats Hunter and Cal beats Stanford: fair 23.5%
     The Bye-Week Heist: Prozan beats Keeyan and Kobe loses to Rohan: fair 4.3%
     The karaoke curse holds: Prozan, the favourite, doesn't sing: fair 73.7%
     Fonck sings "Or Nah (Remix)" before the playoffs: fair 30.0%
     Someone from Nick's talks to the French girls next time: fair 8.0%
-->

The Big Game is Saturday night in Berkeley, and San Francisco is full of Cal people. Cal is a +115
underdog. PSG kicks off at Nice at 8:15 Saturday morning, so Rohan's parlay is the first one to sweat.

- The Big Game: Cal beats Stanford and Chris beats Oanta: **Yes +230** · **No −350**
- Paris: Rohan beats Kobe and PSG wins at Nice: **Yes +280** · **No −440**
- The Loan III: Oanta beats Chris and Kobe loses to Rohan: **Yes +560** · **No −1200**
- Daniels' Revenge: Oanta beats Chris and the Commanders beat Cincinnati on Monday night: **Yes +750** · **No −2250**
- Date Night: Fonck beats Hunter and Cal beats Stanford: **Yes +300** · **No −460**
- The Bye-Week Heist: Prozan beats Keeyan and Kobe loses to Rohan: **Yes +2050** · **No −2400**
- The karaoke curse holds: Prozan, the favourite, doesn't sing: **Yes −380** · **No +250**
- Fonck sings "Or Nah (Remix)" before the playoffs: **Yes +210** · **No −300**
- Someone from Nick's talks to the French girls next time: **Yes +1050** · **No −2400**

## Nal's AI

<!-- w11 futures sorted by playoff %. Six make it, two byes, four places paid. Sim seeds on wins, then PF. -->

Twenty-five thousand seasons, seeded on wins, then points. Six make the playoffs, and four get paid:

- **Kobe** 10.9-3.1 · playoffs 100% · bye 97.5% · paid 98.9%
- **Prozan** 10.0-4.0 · 100% · bye 74.3% · paid 86.7%
- **Kunal** 8.1-5.9 · 94.7% · paid 55.7%
- **Arnst** 8.4-5.6 · 93.2% · paid 47.3%
- **Keeyan** 7.5-6.5 · 66.1% · paid 35.5%
- **Rohan** 6.8-7.2 · 55.8% · paid 28.4%
- **Chris** 6.4-7.6 · 42.7% · paid 26.0%
- **Fonck** 6.4-7.6 · 20.7% · paid 9.1%
- **Jacob** 5.8-8.2 · 18.7%
- **Burnes** 5.5-8.5 · 6.9%
- **Oanta** 4.3-9.7 · 1.1%
- **Hunter** 3.8-10.2 · 0%

Chris and Fonck are projected for the same record. Chris has twice the playoff chance, because he has
the points. Kobe is 98.9% to get paid, and he traded for a man on injured reserve.

## punishment-settled

The week-seven karaoke props, posted October 22, have settled:

- Karaoke happens on Nov 12: **Yes −160 wins**
- Of the six songs owed, over 3.5 sung: **Yes +550 wins**
- All six cleared on Nov 12: **Yes +7800 wins**
- Burnes clears both of his: **Yes +820 wins**
- Kunal sings "Vamp Anthem" on Nov 12: **No −140 wins.** Silver Clouds didn't have it. He sang "Wet Dreamz."

At **+7800**, the house would like everyone who said this league would never show up to know that it did.


## settled

<!--
     favourites 6-0 SU, 5-1 ATS, totals 2-4 over
     Brier 0.173 vs 0.25 for a coin flip; expected 3.6 chalk wins, got 6
     low scorer Loan Shark 53.5 — priced +490, 2 of 12
     high scorer Need Loan HMU 210.5
     biggest beat: Need Loan HMU 210.5 vs 130 projected (+80.5)
     biggest miss: Loan Shark 53.5 vs 118.6 projected (-65.1)
-->

**Six and oh, Brier 0.173.** Every favourite won.

**Oanta scored 53.52**, the lowest score in Nick's this season. He sings, and **Arnst picks the song.**
Arnst is the one who exposed the loan in week four. The house can't think of a better DJ.

Arnst scored **210.54**, 80.5 over his projection, and beat Kunal by 19.98. Kunal scored 190.56 and
lost. The karaoke favourite, Jacob at +400, didn't sing. The favourite in that market is now **0 for 10.**


## bench

<!--
     Need Crumbs HMU left 37.2 — Cam Skattebo 27.2, Omarion Hampton 17.5
     Need RB HMU left 25.9 — Garrett Wilson 15.6, Aaron Jones Sr. 12.5, Dylan Sampson 7.7
     Gus’s Balls left 22.3 — Patrick Mahomes 35.4, Justice Hill 8.8, Tyjae Spears 3.8
-->

Chris left **37.2** on his bench, with Cam Skattebo's 27.2 and Omarion Hampton's 17.5, and lost to Prozan
by 18.2. His best lineup wins.

Fonck skipped karaoke for a date on Thursday, and on Sunday he benched **Patrick Mahomes, who scored
35.42.** He lost by 67.72, so Mahomes wouldn't have saved him. It's still a big week to be away from
the group chat.


## card

<!--
     the board spans 224.5 to 275 on totals
-->

Atlanta, Green Bay, Seattle and Cleveland are on bye, and Prozan, who's 8-2, is a **+690** underdog.


## matchup:5-9

<!-- Need Crumbs HMU vs Loan Shark
     −200 / +145 — 61.8% fair
     spread −9.0, total 235
     projected 122.4 vs 113.9
-->

Oanta's starting **Jayden Daniels** and Breece Hall, who were Kobe's until Thursday morning. Chris is
still −200. He traded Ollie Gordon to Prozan for Garrett Wilson on Monday. The Big Game parlay needs
Chris and Cal both, at +230.


## matchup:6-7

<!-- Comet club? vs Need RB HMU
     −1800 / +690 — 88.2% fair
     spread −36.0, total 247.5
     projected 142.8 vs 106.1
-->

Prozan is 8-2 and a **+690** underdog. Jaxon Smith-Njigba, Christian Watson and Harold Fannin are on bye,
and the house had to price his tight end off waivers. He's also the +200 favourite to sing, and the
favourite in that market has never sung.


## matchup:8-2

<!-- Beriousbeast vs Haircut Haircut 🗣️
     −210 / +155 — 63.3% fair
     spread −11.5, total 275
     projected 143.9 vs 132.2
-->

The highest total on the board. Kobe traded away four players and still starts Brock Purdy, Jahmyr
Gibbs, CeeDee Lamb and Brock Bowers. Kobe's −210 over Rohan, who is now debt-free and singing "Paris"
in the shower.


## matchup:4-10

<!-- Need Loan HMU vs George Droyd
     −440 / +290 — 75.9% fair
     spread −23.0, total 267
     projected 145.7 vs 123
-->

Arnst scored 210.54 and picks Oanta's song. Burnes cleared both of his songs on Thursday, at +820, and
he's +290 here.


## matchup:1-3

<!-- Garbers mirror selfie vs Return of the Menace
     −230 / +165 — 65.2% fair
     spread −12.5, total 271
     projected 142.8 vs 129.8
-->

Usual conflict of interest disclosed. Kunal scored 190.56 last week and lost. He's −230 over Jacob,
who sang and has a clean slate.


## matchup:11-12

<!-- Gus’s Balls vs Death By Foriegn War
     −130 / −105 — 52.3% fair
     spread −1.5, total 224.5
     projected 113.9 vs 112.3
-->

The closest game and the lowest total on the board. Fonck is −130. The house would like him to start
Mahomes.


## punishment

<!-- KARAOKE — low scorer
     Need RB HMU +200 (26.3%)
     Death By Foriegn War  +370 (17.1%)
     Loan Shark +440 (14.9%)
-->

Prozan is the **+200** favourite to sing, the shortest price this market has posted all season. It's
also 0 for 10.


## punishment-paired

<!-- SONG SELECT — high scorer
     Need Loan HMU +300 (19.9%)
     Beriousbeast +310 (19.3%)
     Comet club? +380 (16.8%)
-->

Arnst is +300 to pick again.


## joint

<!--
     Need RB HMU sings for Beriousbeast — +1750 (5%)
     Need RB HMU sings for Need Loan HMU — +1800 (4.9%)
-->


## lineups

<!--
     highest projected: Need Loan HMU
     priced off waivers: Return of the Menace DEF Dallas Cowboys 7.2; Need Crumbs HMU K Drew Stevens 8.2; Need RB HMU TE Chig Okonkwo 10.3
-->


## season

<!-- Kobe −105 (was +105) · Prozan +270 (was +220) · Kunal +540 (was +730).
     Bus stop: Oanta +195 (was +180) · Hunter +320 · Fonck +430 (was +690). -->

**Kobe is −105**, the first odds-on title price this book has posted, the week he traded for a man on
injured reserve. Prozan is +270 and Kunal +540.

**The bus stop:** Oanta is still the favourite at +195. He now has Kobe's Jayden Daniels. Fonck came in
from +690 to +430.
`,Uc=`---
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
`,Jc=`---
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
`,Yc=`---
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
`,$c=`---
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
`,Vc=`---
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
`,Qc=`---
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
`,qc=`---
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
`,Zc=`---
league: nicks
week: 9
headline: BACK TO EARTH
byline: The House · Week 9
---

<!-- NICK'S SPORTSBOOK · week 9 · seed 1592530047
     Sections with lowercase names are SLOTS and land in a specific panel.
     Any other heading becomes a panel of its own, titled as you wrote it.
     Delete anything you do not want. An empty section is dropped.
     House rule for this book: Nick's prose never cites another league.
     RECEIPTS (Sleeper + committed files, pulled 2026-11-05 PT):
       Book wk8: 4-2 SU, 3-3 ATS, 2-4 totals, Brier 0.206.
       Call (jc199, Return of the Menace, r3) wk8 LOW 92, priced +620 (3rd of 12). Lost to Keeyan 123.96–92.
         Dak 19.8 + Javonte Williams 6.7 = 26.5 vs 41.5 projected (wk8 sheet: 22.6 + 18.9). wk7 quote "womp womp cowboys offense to the moon".
       Kunal (r1, Garbers mirror selfie) wk8 HIGH 164.78 (Burrow 42.48) → picks Call's song. Beat Burnes 164.78–121 (−250). 5-3, 4 straight.
       KARAOKE favourite (low-score market) never hit: wk1–wk8, 0 for 8 (wk8 fav Arnst +250, scored 100.6).
       Keeyan (r6) bench: wk7 42.3, wk8 49.1 (Pollard 28.7, Coleman 20.4) — most both weeks, won both.
       Kobe (r8) lost to Prozan (r7) 134–126.28 at −135. Breece Hall started wk7 (0) and wk8 (0). Kobe 6-2, Prozan 6-2.
         Kobe's RBs wk8 Gibbs 24.8 + Hall 0; Prozan (Need RB HMU) Aaron Jones 6 + Gainwell 14.
       Hunter (r12) −145 fav (2nd of season) lost to Chris 104.88–97.08; his Cousins scored 28.18. 1-7.
       Burnes (r10) wk8 started Lamar Jackson 0, benched Geno Smith 19. Best 145.8. Ran NYC Marathon 4:21:21 (Kunal; real-world).
         Wed 11/4 10:39 AM dropped Geno for a QB, dropped that QB 2:00 PM for Malik Willis (MIA). 3-5.
       Arnst (r4) wk8: added Michael Penix Jr. 10/28 (started, 2.1; dropped 11/3). Added Travis Hunter Wed 10/28, dropped Fri 10/30
         for Khalil Shakir (whom Kobe had dropped 10/28); started Shakir 11.4; dropped him Wed 11/4. Lost 3 straight, 4-4.
       Rohan (r2) beat Oanta (r9) 151.18–124.76. Gus's Balls (r11) −300 beat Arnst 109.86–100.6.
       KARAOKE LEDGER: wk1 Kunal (Kobe, "Vamp Anthem") · wk2 Burnes (Prozan) · wk3 Hunter (Prozan) · wk4 Rohan (Oanta, "Or Nah (Remix)")
         · wk5 Hunter (Kobe) · wk6 Burnes (Keeyan) · wk7 Gus's Balls (Burnes) · wk8 Call (Kunal). Eight owed, zero sung. Thu 2026-11-12.
       MODEL (2026-11-05): rest-of-season now off Sleeper weekly projections wks 10–17 (ros-w9.json). Futures moved partly from that.
       Title: Kobe +130 (32.2) · Prozan +280 (19.6) · Kunal +650. Bus stop: Hunter +320 (18.9) · Oanta +360 (17.2) · Gus's Balls +430. -->

## lede

<!--
     biggest edge: Beriousbeast −640 over Comet club? (80.5%, −29.5)
     closest game: Need Loan HMU vs Haircut Haircut 🗣️ at −130 (52.6%)
     highest total: 281
     last week: Garbers mirror selfie 164.8 high, Return of the Menace 92 low
     the book went 4-2 on favourites, Brier 0.206
-->

Two weeks ago, after he beat Prozan, Jacob Call told the league:

> "womp womp cowboys offense to the moon"

Last week the house projected Jacob's two Cowboys for **41.5**. Dak Prescott scored 19.8 and Javonte
Williams scored 6.7. That's **26.5**, fifteen points short. **The Cowboys came back down to earth, and
they landed on Jacob.**

He scored **92**, the low of the week, and he sings. The house had him at +620 to do it. Two weeks
ago it had him as the +270 favourite, and he beat the second-best team in the league instead. That's
how this market works: the favourite never sings. **The house's favourite is now 0 for 8.**

And the man who picks Jacob's song is the house. Kunal scored the high, **164.78**, with Joe Burrow
throwing for 42.48.

Womp womp.


## settled

<!--
     favourites 4-2 SU, 3-3 ATS, totals 2-4 over
     Brier 0.206 vs 0.25 for a coin flip; expected 3.5 chalk wins, got 4
     low scorer Return of the Menace 92 — priced +620, 3 of 12
     high scorer Garbers mirror selfie 164.8
     joint: did not hit
     biggest beat: Garbers mirror selfie 164.8 vs 138.4 projected (+26.4)
     biggest miss: Return of the Menace 92 vs 123.5 projected (-31.5)
-->

**Four and two, Brier 0.206.** A week after the worst week this book has had, it was respectable.

**Kobe lost again.** Prozan beat him 134 to 126.28. That's two in a row for the 6-0 team, and Prozan
has caught him at 6-2. Kobe started Breece Hall for the second straight week, and Breece scored zero
for the second straight week. Prozan's team is called Need RB HMU, and Kobe was the one with the
running back problem.

**Hunter was a favourite and lost.** It was the second time all season the house had made him one,
at −145, and Chris beat him 104.88 to 97.08. His quarterback, Kirk Cousins, scored **28.18**. Hunter is
1-7. Two weeks ago he won without the Chargers. Last week he lost with a good quarterback.

**Burnes ran the New York City Marathon** in 4:21:21. His fantasy team didn't make it to the finish.
He started Lamar Jackson, who scored **0**, with Geno Smith's 19 on the bench, and lost to the house by
43.78. On Wednesday he dropped Geno for another quarterback, and three hours later he dropped that
one for Malik Willis. The house admires a man who keeps running after the race is over.


## bench

<!--
     Comet club? left 49.1 — Tony Pollard 28.7, Jonah Coleman 20.4
     George Droyd left 24.8 — Geno Smith 19, Keenan Allen 13.7, Pat Freiermuth 11.6
     Death By Foriegn War  left 20.6 — Cameron Dicker 11, Quinshon Judkins 6.9, Kenyon Sadiq 3.2
-->

**Keeyan left the most on his bench again**: 42.3 two weeks ago, **49.1** last week, Tony Pollard's
28.7 included. He won both weeks. Keeyan's bench would be a playoff team. It might be his best one.


## card

<!--
     the board spans 241.5 to 281 on totals
     replaces the default blurb under THE CARD — leave it out to keep the default
-->

Kobe is the biggest favourite on the board, at −640 over Keeyan. Jacob, who sings, gets the man most
likely to join him. And Burnes, who has picked up two new quarterbacks this week alone, gets
Chris.


## matchup:5-10

<!-- Need Crumbs HMU vs George Droyd
     −210 / +155 — 63.5% fair
     spread −11.0, total 256.5
     projected 135.1 vs 123.7
     last week Need Crumbs HMU: 104.9 (projected 121.5, -16.6)
     last week George Droyd: 121 (projected 124.9, -3.9)
-->

Chris is −210 over Burnes. Burnes' quarterback is Malik Willis, projected for 17.8, and the house
would like to know if he's still Burnes' quarterback by Sunday.


## matchup:7-12

<!-- Need RB HMU vs Death By Foriegn War 
     −310 / +220 — 70.5% fair
     spread −18.0, total 266.5
     projected 142.7 vs 124.5
     last week Need RB HMU: 134 (projected 139.8, -5.8)
     last week Death By Foriegn War : 97.1 (projected 125.9, -28.8)
-->

Prozan is −310 over Hunter. Prozan has just beaten the title favourite. Hunter has just lost
as a favourite with a 28-point quarterback.


## matchup:1-9

<!-- Garbers mirror selfie vs Loan Shark
     −165 / +120 — 58% fair
     spread −6.5, total 257.5
     projected 132.5 vs 126.3
     last week Garbers mirror selfie: 164.8 (projected 138.4, +26.4)
     last week Loan Shark: 124.8 (projected 135.2, -10.4)
-->

The house is −165 over Oanta. Usual conflict of interest disclosed. Kunal has won four straight, and
he picks a song this week either way.


## matchup:8-6

<!-- Beriousbeast vs Comet club?
     −640 / +380 — 80.5% fair
     spread −29.5, total 281
     projected 156.2 vs 126.7
     last week Beriousbeast: 126.3 (projected 142.2, -15.9)
     last week Comet club?: 124.0 (projected 124.1, -0.1)
-->

**−640.** Kobe has lost two straight, and the house has made him its biggest favourite of the week
anyway. It's not the biggest line this book has posted, which was −760 in week five, but it's close.
The house would like to point out that the biggest favourite it ever lost was Kobe, at −680, two
weeks ago.

Breece Hall is in the house's lineup again, projected for 8.4. The house is starting him on faith.


## matchup:4-2

<!-- Need Loan HMU vs Haircut Haircut 🗣️
     −130 / −105 — 52.6% fair
     spread −2.5, total 264.5
     projected 133.8 vs 132.2
     last week Need Loan HMU: 100.6 (projected 113.7, -13.1)
     last week Haircut Haircut 🗣️: 151.2 (projected 139.9, +11.3)
-->

The closest game on the board, at −130. Arnst has lost three straight, and he's been busy. In the
last eight days he picked up Michael Penix Jr., started him for 2.1 and cut him. He picked up Travis
Hunter last Wednesday and cut him on Friday for Khalil Shakir, whom Kobe had cut two days earlier. He started Shakir, got
11.4, and cut him too. **Arnst is running a waiver wire with a revolving door.**


## matchup:3-11

<!-- Return of the Menace vs Gus’s Balls
     −290 / +200 — 69.1% fair
     spread −15.5, total 241.5
     projected 128.9 vs 113.6
     last week Return of the Menace: 92 (projected 123.5, -31.5)
     last week Gus’s Balls: 109.9 (projected 129.7, -19.8)
-->

Jacob is −290 over Gus's Balls, who is the **+230 favourite** to sing this week. The house's favourite
in that market has never sung. Fonck already owes a song from week seven. Jacob owes one from
week eight. Whoever loses this game could make it a duet.


## punishment

<!-- KARAOKE — low scorer
     Gus’s Balls +230 (24.1%)
     George Droyd +590 (11.6%)
     Death By Foriegn War  +630 (11%)
-->

Gus's Balls is the **+230** favourite to sing. The house's favourite in this market has never sung,
eight weeks running. Fonck, enjoy the curse.


## punishment-paired

<!-- SONG SELECT — high scorer
     Beriousbeast +155 (31.6%)
     Need RB HMU +420 (15.4%)
     Need Crumbs HMU +820 (8.7%)
-->

Kobe is +155 to pick the song. He already picks two of the eight that are owed, and the house has
no idea how many songs Kobe intends to make this league sing.


## joint

<!--
     Gus’s Balls sings for Beriousbeast — +1150 (7.5%)
     George Droyd sings for Beriousbeast — +2400 (3.7%)
     Gus’s Balls sings for Need RB HMU — +2450 (3.7%)
     Death By Foriegn War  sings for Beriousbeast — +2550 (3.5%)
     Comet club? sings for Beriousbeast — +2850 (3.2%)
     Loan Shark sings for Beriousbeast — +3000 (3%)
-->

## lineups

<!--
     highest projected: Beriousbeast
     forfeited slots: none
     priced off waivers: Return of the Menace K Eddy Pineiro 8.5
-->

## THE KARAOKE BACKLOG

Eight weeks, eight low scorers, **zero songs sung.** Everything is set for **Thursday, November 12**.

- Week 1: **Kunal** owes, and Kobe picks. Kobe has picked "Vamp Anthem."
- Week 2: **Burnes** owes, and Prozan picks.
- Week 3: **Hunter** owes, and Prozan picks.
- Week 4: **Rohan** owes, and Oanta picks. Oanta has picked "Or Nah (Remix)."
- Week 5: **Hunter** owes again, and Kobe picks.
- Week 6: **Burnes** owes again, and Keeyan picks.
- Week 7: **Fonck** owes, and **Burnes** picks.
- Week 8: **Jacob** owes, and **Kunal** picks.

## season

<!-- Kobe +130 · Prozan +280. Bus stop Hunter +320 · Oanta +360 · Gus's Balls +430. Model change w9. -->

**A note from the house first.** It rebuilt its season model this week. Every week after this one is
now priced off Sleeper's weekly projections for that week, not its preseason totals, which never
change. If the futures moved more than the football did, that's why.

**Kobe is still the favourite**, at +130, after two straight losses. Prozan, who just beat him, is
+280. At the bottom, Hunter is the **+320** favourite for the bus stop, and Oanta is next at +360.
`,Zh=Object.assign({"../content/dkenasty/w10.md":Sc,"../content/dkenasty/w11.md":xc,"../content/dkenasty/w2.md":Ec,"../content/dkenasty/w3.md":Nc,"../content/dkenasty/w4.md":Cc,"../content/dkenasty/w5.md":jc,"../content/dkenasty/w6.md":Bc,"../content/dkenasty/w7.md":Lc,"../content/dkenasty/w8.md":Pc,"../content/dkenasty/w9.md":Ac,"../content/loog/w10.md":Rc,"../content/loog/w11.md":Hc,"../content/loog/w2.md":Kc,"../content/loog/w3.md":Dc,"../content/loog/w4.md":Mc,"../content/loog/w5.md":Oc,"../content/loog/w6.md":Ic,"../content/loog/w7.md":Wc,"../content/loog/w8.md":Fc,"../content/loog/w9.md":zc,"../content/nicks/w10.md":_c,"../content/nicks/w11.md":Gc,"../content/nicks/w2.md":Uc,"../content/nicks/w3.md":Jc,"../content/nicks/w4.md":Yc,"../content/nicks/w5.md":$c,"../content/nicks/w6.md":Vc,"../content/nicks/w7.md":Qc,"../content/nicks/w8.md":qc,"../content/nicks/w9.md":Zc}),Xc=/^[a-z][a-z0-9-]*(:\d+-\d+)?$/,ef=/\/content\/([^/]+)\/w(\d+)\.md$/,ou=new Map;for(const i in Zh){const f=i.match(ef);f&&ou.set(`${f[1]}/w${f[2]}`,tf(Zh[i]))}const nf=(i,f)=>ou.get(`${i}/w${f}`)??null;function tf(i){const{meta:f,body:u}=of(i.replace(/\r\n/g,`
`)),y=u.replace(/<!--[\s\S]*?-->/g,""),x=[];let E={id:"lede",title:null,lines:[]};for(const B of y.split(`
`)){const N=B.match(/^##\s+(.+?)\s*$/);if(!N){E.lines.push(B);continue}x.push(E);const J=N[1],F=J.toLowerCase();E=Xc.test(F)?{id:F,title:null,lines:[]}:{id:null,title:J,lines:[]}}x.push(E);const D=new Map,K=[];for(const B of x){const N=B.lines.join(`
`).trim();N&&(B.id?D.set(B.id,N):K.push({title:B.title,text:N}))}return{meta:f,slots:D,panels:K}}const af=(i,f,u)=>(i==null?void 0:i.slots.get(`matchup:${f}-${u}`))??(i==null?void 0:i.slots.get(`matchup:${u}-${f}`))??null,Le=(i,f)=>(i==null?void 0:i.slots.get(f))??null;function of(i){const f=i.match(/^---\n([\s\S]*?)\n---\n?/);if(!f)return{meta:{},body:i};const u={};for(const y of f[1].split(`
`)){const x=y.match(/^([A-Za-z][\w-]*):\s*(.*)$/);x&&(u[x[1]]=x[2].replace(/^["']|["']$/g,"").trim())}return{meta:u,body:i.slice(f[0].length)}}function sf({bookId:i,week:f,view:u}){const[y,x]=Pn.useState({status:"loading"}),[E,D]=Pn.useState(0);return Pn.useEffect(()=>{let K=!0;const B=N=>K&&x(N);return i?fc(i).then(({weeks:N,sheets:J})=>{B({status:"ok",weeks:N,sheets:J});const F=f!=null?N.indexOf(f):-1;D(F>=0?F:N.length-1)}).catch(()=>B({status:"error"})):uc().then(N=>B({status:"ok",index:N})).catch(()=>B({status:"error"})),()=>{K=!1}},[i,f]),l.jsxs("div",{className:"book-root",children:[l.jsx("div",{className:"bk-backbar",children:l.jsx("a",{className:"bk-back",href:"?book",children:"← The lobby"})}),l.jsxs("div",{className:"book-wrap",children:[y.status==="loading"&&l.jsx("p",{className:"state-msg",children:"Opening the book…"}),y.status==="error"&&l.jsxs("p",{className:"state-msg",children:["No sheet posted for this league. ",l.jsx("a",{className:"bk-link",href:"?book",children:"Back to the lobby"})]}),y.status==="ok"&&y.index&&l.jsx(rf,{index:y.index}),y.status==="ok"&&y.sheets&&l.jsx(uf,{sheet:y.sheets[E],prev:E>0?y.sheets[E-1]:null,weeks:y.weeks,cur:E,view:u,onNav:D})]})]})}function rf({index:i}){return Pn.useEffect(()=>{document.title="The Fantasy Book"},[]),l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:"bk-head",children:[l.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),l.jsx("h1",{className:"bk-title",children:"THE FANTASY BOOK"}),l.jsx("p",{className:"bk-sub",children:"Three leagues. Eighteen weeks. One coin-flip sport."})]}),l.jsx("div",{className:"group-list",style:{marginTop:28},children:i.map(f=>l.jsxs("a",{className:"group-link",href:`?book=${f.id}`,children:[l.jsx("div",{className:"gl-name",children:f.name}),l.jsx("div",{className:"gl-meta",children:"Open the book →"})]},f.id))})]})}const lf=i=>i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),Xh=(i,f)=>i.toUpperCase().includes(f)?i:`${i} — ${f}`;function Zn({title:i,blurb:f,children:u}){return l.jsxs("section",{className:"bk-panel",id:lf(i),children:[l.jsx("h2",{className:"bk-panel-title",children:i}),f&&l.jsx("p",{className:"bk-blurb",children:f}),u]})}function hf({weeks:i,cur:f,onNav:u}){return l.jsxs("div",{className:"fb-weeknav",children:[l.jsx("button",{className:"bk-nav-btn",disabled:f===0,onClick:()=>u(f-1),children:"‹ PREV"}),l.jsx("select",{className:"bk-nav-select",value:f,onChange:y=>u(Number(y.target.value)),children:i.map((y,x)=>l.jsxs("option",{value:x,children:["WEEK ",y]},y))}),l.jsx("button",{className:"bk-nav-btn",disabled:f===i.length-1,onClick:()=>u(f+1),children:"NEXT ›"})]})}function uf({sheet:i,prev:f,weeks:u,cur:y,view:x,onNav:E}){const D=nf(i.id,i.week),K=x;return Pn.useEffect(()=>{const B=K==="season"?Wr(i):`Week ${i.week}`;document.title=`${i.bookName} · ${B}`},[i.bookName,i.week,K]),Pn.useEffect(()=>{const B=window.location.hash&&document.getElementById(decodeURIComponent(window.location.hash.slice(1)));B&&B.scrollIntoView()},[i.id,i.week]),l.jsxs(l.Fragment,{children:[l.jsx(df,{sheet:i,weeks:u,cur:y,onNav:E,page:K}),K==="week"&&l.jsx(cf,{sheet:i,prev:f,note:D}),K==="season"&&l.jsx(ff,{sheet:i,prev:f,note:D}),l.jsx(wf,{sheet:i,page:K})]})}const Wr=i=>i.week===1?"Season preview":"The futures board";function df({sheet:i,weeks:f,cur:u,onNav:y,page:x}){return l.jsxs("header",{className:"bk-head",children:[l.jsx("p",{className:"bk-eyebrow",children:"THE HOUSE ALWAYS WINS"}),l.jsx("h1",{className:"bk-title",children:i.bookName}),l.jsxs("p",{className:"bk-sub",children:[i.tagline," · Week ",i.week,", ",i.season,i.meta.seed?l.jsxs(l.Fragment,{children:[" · Seed ",l.jsx("code",{children:i.meta.seed})]}):null]}),i.stakes&&l.jsxs("div",{className:"bk-chips",children:[l.jsxs("span",{className:"bk-chip",children:["Buy-in ",l.jsx("b",{children:i.stakes.buyIn})]}),l.jsxs("span",{className:"bk-chip",children:["Pot ",l.jsx("b",{children:i.stakes.pot})]}),i.stakes.payouts.map(E=>l.jsxs("span",{className:"bk-chip",children:[yf(E.place)," ",l.jsx("b",{children:E.label})]},E.place))]}),l.jsxs("div",{className:"bk-banner",children:["LINES BUILT FROM ",i.meta.sources]}),f.length>1&&l.jsx(hf,{weeks:f,cur:u,onNav:y}),l.jsxs("nav",{className:"fb-viewnav",children:[l.jsxs("a",{className:x==="week"?"active":"",href:`?book=${i.id}&w=${i.week}`,children:["THE CARD — WEEK ",i.week]}),l.jsx("a",{className:x==="season"?"active":"",href:`?book=${i.id}&w=${i.week}&view=season`,children:Wr(i).toUpperCase()})]}),l.jsx("nav",{className:"fb-booknav",children:l.jsx("a",{href:"?book",children:"All books"})})]})}function cf({sheet:i,prev:f,note:u}){var E,D,K,B;const{punishment:y}=i,x=(u==null?void 0:u.meta.panels)==="top";return l.jsxs(l.Fragment,{children:[Le(u,"lede")&&l.jsxs("section",{className:"bk-panel fb-lede",id:"the-lede",children:[l.jsx("h2",{className:"bk-panel-title",children:u.meta.headline??`WEEK ${i.week}`}),l.jsx(dn,{text:Le(u,"lede"),className:"fb-prose-cols"}),u.meta.byline&&l.jsx("p",{className:"fb-byline",children:u.meta.byline})]}),x&&l.jsx(eu,{note:u}),i.settled&&l.jsx(vc,{settled:i.settled,punishment:y,Panel:Zn,note:Le(u,"settled"),benchNote:Le(u,"bench"),punishmentNote:Le(u,"punishment-settled")}),l.jsxs(Zn,{title:`THE CARD — WEEK ${i.week}`,blurb:Le(u,"card")??"Moneyline, spread and total on every matchup. Spreads and totals are the half-point where the simulated distribution splits evenly, so both sides post at −110 — the line moves, not the price.",children:[l.jsxs("div",{className:"fb-match-head",children:[l.jsx("span",{children:"MATCHUP"}),l.jsx("span",{children:"MONEYLINE"}),l.jsx("span",{className:"spread",children:"SPREAD"}),l.jsx("span",{className:"total",children:"TOTAL"})]}),l.jsx("div",{className:"fb-card",children:i.matchups.map(N=>l.jsx(mf,{m:N,prev:kf(f,N),note:af(u,N.a.rosterId,N.b.rosterId)},`${N.a.rosterId}-${N.b.rosterId}`))})]}),l.jsxs("div",{className:y.paired?"fb-grid2":"",children:[l.jsxs(Zn,{title:Xh(y.weekly.name,"LOW SCORER"),blurb:y.weekly.copy,children:[Le(u,"punishment")&&l.jsx(dn,{text:Le(u,"punishment"),className:"fb-panel-prose"}),y.weekly.parlay&&l.jsxs("p",{className:"fb-note",children:[y.weekly.legs??y.weekly.parlay.legs," legs · $",y.weekly.parlay.stake," · lifetime record ",l.jsx("b",{children:y.weekly.parlay.lifetimeHits})," hits."]}),l.jsx(tu,{rows:y.weekly.rows,prevRows:(D=(E=f==null?void 0:f.punishment)==null?void 0:E.weekly)==null?void 0:D.rows})]}),y.paired&&l.jsxs(Zn,{title:Xh(y.paired.name,"HIGH SCORER"),blurb:y.paired.copy,children:[Le(u,"punishment-paired")&&l.jsx(dn,{text:Le(u,"punishment-paired"),className:"fb-panel-prose"}),l.jsx(tu,{rows:y.paired.rows,prevRows:(B=(K=f==null?void 0:f.punishment)==null?void 0:K.paired)==null?void 0:B.rows})]})]}),y.joints.length>0&&l.jsxs(Zn,{title:"THE JOINT — WHO SINGS WHAT",blurb:"Low scorer and high scorer in the same week, priced together rather than multiplied: a 145-point week makes you the high scorer and makes someone else the low one, so these are not independent.",children:[Le(u,"joint")&&l.jsx(dn,{text:Le(u,"joint"),className:"fb-panel-prose"}),y.joints.map(N=>l.jsxs("div",{className:"fb-slip",children:[l.jsxs("span",{className:"fb-slip-text",children:[l.jsx("b",{children:N.low.team})," sings a song picked by ",l.jsx("b",{children:N.high.team}),l.jsxs("span",{className:"fb-slip-note",children:[N.low.manager," · ",N.high.manager," · ",N.pct,"%"]})]}),l.jsx("span",{className:"bk-price",children:N.price})]},`${N.low.rosterId}-${N.high.rosterId}`))]}),l.jsxs(Zn,{title:"THE LINEUPS",blurb:"Optimal by projection against each league's roster slots — what a manager knows Sunday morning. Scores are drawn on the simulation, never on the projection, which would be lookahead bias.",children:[Le(u,"lineups")&&l.jsx(dn,{text:Le(u,"lineups"),className:"fb-panel-prose"}),l.jsx("div",{className:"fb-lineups",children:[...i.lineups].sort((N,J)=>J.projected-N.projected).map(N=>l.jsx(gf,{seat:N},N.rosterId))})]}),!x&&l.jsx(eu,{note:u})]})}function eu({note:i}){return i==null?void 0:i.panels.map(f=>l.jsx(Zn,{title:f.title.toUpperCase(),children:l.jsx(dn,{text:f.text,className:"fb-prose-cols"})},f.title))}function ff({sheet:i,prev:f,note:u}){const y=Le(u,"season");return l.jsxs(l.Fragment,{children:[y?l.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[l.jsx("h2",{className:"bk-panel-title",children:u.meta.futuresHeadline??"THE FUTURES BOARD"}),l.jsx(dn,{text:y,className:"fb-prose-cols"})]}):i.preview&&l.jsx(pf,{preview:i.preview,week:i.week}),l.jsx(gc,{sheet:i,prev:f,Panel:Zn})]})}function pf({preview:i,week:f}){return l.jsxs("section",{className:"bk-panel fb-preview",id:"season-preview",children:[l.jsx("h2",{className:"bk-panel-title",children:f===1?"SEASON PREVIEW":`SEASON PREVIEW — WRITTEN WEEK ${i.writtenWeek}`}),i.standfirst&&l.jsx("p",{className:"fb-standfirst",children:i.standfirst}),l.jsx("div",{className:"fb-prose-cols",children:i.paragraphs.map((u,y)=>l.jsx("p",{className:"fb-prose",children:u},y))}),f>i.writtenWeek&&l.jsxs("p",{className:"fb-note",children:["Written in week ",i.writtenWeek," and left alone since. The boards below are current; the prose is not."]})]})}function mf({m:i,prev:f,note:u}){var y;return l.jsxs("div",{className:u?"fb-match noted":"fb-match",children:[l.jsxs("div",{className:"fb-seats",children:[l.jsx(nu,{seat:i.a,proj:i.projected.a,fav:!0}),l.jsx(nu,{seat:i.b,proj:i.projected.b})]}),l.jsxs("div",{className:"fb-cell",children:[l.jsx("span",{className:"fb-odds",children:i.moneyline.a}),l.jsx("span",{className:"fb-odds dim",children:i.moneyline.b}),l.jsx(Ir,{now:i.moneyline.a,was:(y=f==null?void 0:f.moneyline)==null?void 0:y.a})]}),l.jsxs("div",{className:"fb-cell spread",children:[l.jsxs("span",{className:"fb-odds",children:[i.spread.a,l.jsx("small",{children:i.spread.price})]}),l.jsxs("span",{className:"fb-odds dim",children:[i.spread.b,l.jsx("small",{children:i.spread.price})]})]}),l.jsxs("div",{className:"fb-cell total",children:[l.jsxs("span",{className:"fb-odds",children:["O ",i.total.line.toFixed(1),l.jsx("small",{children:i.total.over})]}),l.jsxs("span",{className:"fb-odds dim",children:["U ",i.total.line.toFixed(1),l.jsx("small",{children:i.total.under})]})]}),u&&l.jsx(dn,{text:u,className:"fb-match-note"})]})}const nu=({seat:i,proj:f,fav:u})=>l.jsxs("span",{className:u?"fb-seat fav":"fb-seat",children:[l.jsx("span",{className:"fb-seat-name",children:i.team}),l.jsx("span",{className:"fb-seat-mgr",children:i.manager}),l.jsx("span",{className:"fb-seat-proj",children:f.toFixed(1)})]});function tu({rows:i,prevRows:f}){const u=Math.max(...i.map(y=>y.pct));return l.jsx("div",{className:"fb-runners",children:i.map((y,x)=>{var E;return l.jsxs("div",{className:x===0?"fb-runner lead":"fb-runner",children:[l.jsxs("span",{className:"fb-runner-main",children:[l.jsx("span",{className:"fb-runner-team",children:y.team}),l.jsx("span",{className:"fb-bar",style:{width:`${y.pct/u*100}%`}}),l.jsx("span",{className:"fb-runner-mgr",children:y.manager})]}),l.jsxs("span",{className:"fb-runner-pct",children:[y.pct,"%"]}),l.jsxs("span",{className:"bk-line-right",children:[l.jsx(Ir,{now:y.price,was:(E=f==null?void 0:f.find(D=>D.rosterId===y.rosterId))==null?void 0:E.price}),l.jsx("span",{className:"bk-price",children:y.price})]})]},y.rosterId)})})}function gf({seat:i}){return l.jsxs("div",{className:"fb-lineup",children:[l.jsxs("div",{className:"fb-lineup-head",children:[l.jsx("span",{className:"fb-lineup-name",children:i.team}),l.jsx("span",{className:"fb-lineup-proj",children:i.projected.toFixed(1)})]}),i.players.map((f,u)=>l.jsxs("div",{className:f.name?"fb-slot":"fb-slot empty",children:[l.jsx("span",{className:"fb-slot-tag",children:f.slot}),l.jsxs("span",{className:"fb-slot-name",children:[f.name??"no eligible player",f.name&&l.jsxs("small",{children:[" ",f.position," ",f.team,f.waiver&&" · waivers"]})]}),l.jsx("span",{className:"fb-slot-mu",children:f.mu.toFixed(1)})]},`${f.slot}-${u}`)),i.players.some(f=>f.waiver)&&l.jsxs("p",{className:"fb-warn",children:["Nobody on the roster can play ",i.players.filter(f=>f.waiver).map(f=>f.slot).join(", "),". Priced as if he claims the best free agent there — he has not, and until he does this line is generous to him."]}),i.emptySlots.length>0&&l.jsxs("p",{className:"fb-warn",children:["Forfeits ",i.emptySlots.join(", ")," — nobody on the roster is eligible. Worth roughly eight points, and it is why this line looks the way it does."]})]})}function wf({sheet:i,page:f}){var u;return l.jsxs("footer",{className:"bk-fine-block",children:[l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"HOW THE SAUSAGE IS MADE."})," Every rostered player's projected points come from Sleeper's own weekly projection, scored through this league's exact scoring settings (",i.meta.scoringKeys," keys, reproducing Sleeper's published totals to a mean absolute error of ",i.meta.mae,"). Weekly scores are drawn from a Gamma distribution whose spread was fitted on 2025 projection residuals, position by position — a receiver projected for 18 is far more volatile than a quarterback projected for 18, and a pooled number would misprice the top and bottom of every lineup in opposite directions. The week was simulated ",i.meta.sims.toLocaleString()," times."]}),l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"WHAT THIS BOOK CANNOT DO."})," ",i.meta.disclosures.join(" ")]}),((u=i.meta.overrides)==null?void 0:u.length)>0&&l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"MANUAL OVERRIDES."})," ",i.meta.overrides.map(y=>`${y.player} ${y.was} → ${y.pts}${y.note?` (${y.note})`:""}`).join(" · ")]}),l.jsxs("p",{className:"bk-fine",children:[l.jsx("b",{children:"HOUSE RULES."})," All prices include the house's margin. Ties split. Rosters as pulled",i.meta.pulledAt?` ${i.meta.pulledAt.slice(0,10)}`:"","; once a week's sheet is posted it is frozen and never repriced. For entertainment only."]}),l.jsxs("p",{className:"bk-foot",children:[i.bookName," · EST. SEPTEMBER 2026 · NO REFUNDS"]}),l.jsxs("p",{className:"bk-foot-nav",children:[f==="week"&&l.jsxs(l.Fragment,{children:[l.jsx("a",{className:"bk-link",href:`?book=${i.id}&w=${i.week}&view=season`,children:Wr(i)})," ·"," "]}),f==="season"&&l.jsxs(l.Fragment,{children:[l.jsxs("a",{className:"bk-link",href:`?book=${i.id}&w=${i.week}`,children:["The card — week ",i.week]})," ·"," "]}),l.jsx("a",{className:"bk-link",href:"?book",children:"All books"})]})]})}const yf=i=>`${i}${["th","st","nd","rd"][i%100>>3^1&&i%10]||"th"}`;function kf(i,f){if(!(i!=null&&i.matchups))return null;const u=x=>new Set([x.a.rosterId,x.b.rosterId]),y=i.matchups.find(x=>{const E=u(x);return E.has(f.a.rosterId)&&E.has(f.b.rosterId)});return y?y.a.rosterId===f.a.rosterId?y:{moneyline:{a:y.moneyline.b,b:y.moneyline.a}}:null}const bf=`
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
`;function vf(){const i=new URLSearchParams(window.location.search),f=i.get("book")||null,u=i.has("w")?Number(i.get("w")):null,y=i.get("view")==="season"?"season":"week";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:bf}),l.jsx(sf,{bookId:f,week:u,view:y})]})}hc.createRoot(document.getElementById("root")).render(l.jsx(Pn.StrictMode,{children:l.jsx(vf,{})}));
