if (self.CavalryLogger) { CavalryLogger.start_js(["cTC6T"]); }

__d("XUIOverlayFooter.react",["cx","React","joinClasses"],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;k.prototype.render=function(){"use strict";return c("React").createElement("div",babelHelpers["extends"]({},this.props,{className:c("joinClasses")(this.props.className,"_5lnf uiOverlayFooter")}),this.props.children)};function k(){"use strict";i.apply(this,arguments)}f.exports=k}),null);
__d("ServerTime",["InitialServerTime"],(function a(b,c,d,e,f,g){k(c("InitialServerTime").serverTime);var h;function i(){return Date.now()-h}function j(){return h}function k(l){h=Date.now()-l}f.exports={getMillis:i,getOffsetMillis:j,update:k,get:i,getSkew:j}}),18);
__d("ReactFragment",["React","fbjs/lib/emptyFunction","fbjs/lib/invariant","fbjs/lib/warning"],(function a(b,c,d,e,f,g){"use strict";var h=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103,i=".",j=":",k=false,l=typeof Symbol==="function"&&(typeof Symbol==="function"?Symbol.iterator:"@@iterator"),m="@@iterator";function n(I){var J=I&&(l&&I[l]||I[m]);if(typeof J==="function")return J}function o(I){var J=/[=:]/g,K={"=":"=0",":":"=2"},L=(""+I).replace(J,function(M){return K[M]});return"$"+L}function p(I,J){if(I&&typeof I==="object"&&I.key!=null)return o(I.key);return J.toString(36)}function q(I,J,K,L){var M=typeof I;if(M==="undefined"||M==="boolean")I=null;if(I===null||M==="string"||M==="number"||M==="object"&&I.$$typeof===h){K(L,I,J===""?i+p(I,0):J);return 1}var N,O,P=0,Q=J===""?i:J+j;if(Array.isArray(I))for(var R=0;R<I.length;R++){N=I[R];O=Q+p(N,R);P+=q(N,O,K,L)}else{var S=n(I);if(S){var T=S.call(I),U,V=0;while(!(U=T.next()).done){N=U.value;O=Q+p(N,V++);P+=q(N,O,K,L)}}else if(M==="object"){var W="",X=""+I;c("fbjs/lib/invariant")(0)}}return P}function r(I,J,K){if(I==null)return 0;return q(I,"",J,K)}var s=/\/+/g;function t(I){return(""+I).replace(s,"$&/")}function u(I,J){return c("React").cloneElement(I,{key:J},I.props!==undefined?I.props.children:undefined)}var v=10,w=x,x=function x(I){var J=this;if(J.instancePool.length){var K=J.instancePool.pop();J.call(K,I);return K}else return new J(I)},y=function y(I,J){var K=I;K.instancePool=[];K.getPooled=J||w;if(!K.poolSize)K.poolSize=v;K.release=z;return K},z=function z(I){var J=this;I instanceof J||c("fbjs/lib/invariant")(0);I.destructor();if(J.instancePool.length<J.poolSize)J.instancePool.push(I)},A=function A(I,J,K,L){var M=this;if(M.instancePool.length){var N=M.instancePool.pop();M.call(N,I,J,K,L);return N}else return new M(I,J,K,L)};function B(I,J,K,L){this.result=I;this.keyPrefix=J;this.func=K;this.context=L;this.count=0}B.prototype.destructor=function(){this.result=null;this.keyPrefix=null;this.func=null;this.context=null;this.count=0};y(B,A);function C(I,J,K){var L=I.result,M=I.keyPrefix,N=I.func,O=I.context,P=N.call(O,J,I.count++);if(Array.isArray(P))D(P,L,K,c("fbjs/lib/emptyFunction").thatReturnsArgument);else if(P!=null){if(c("React").isValidElement(P))P=u(P,M+(P.key&&(!J||J.key!==P.key)?t(P.key)+"/":"")+K);L.push(P)}}function D(I,J,K,L,M){var N="";if(K!=null)N=t(K)+"/";var O=B.getPooled(J,N,L,M);r(I,C,O);B.release(O)}var E=/^\d+$/,F=false;function G(I){if(typeof I!=="object"||!I||Array.isArray(I)){c("fbjs/lib/warning")(false,"ReactFragment.create only accepts a single object. Got: %s",I);return I}if(c("React").isValidElement(I)){c("fbjs/lib/warning")(false,"ReactFragment.create does not accept a ReactElement without a wrapper object.");return I}I.nodeType!==1||c("fbjs/lib/invariant")(0);var J=[];for(var K in I)D(I[K],J,K,c("fbjs/lib/emptyFunction").thatReturnsArgument);return J}var H={create:G};f.exports=H}),null);