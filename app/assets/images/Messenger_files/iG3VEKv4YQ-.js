if (self.CavalryLogger) { CavalryLogger.start_js(["7vw8h"]); }

__d("UnicodeCJK",[],(function a(b,c,d,e,f,g){"use strict";var h="a-zA-Z",i="\uff21-\uff3a\uff41-\uff5a",j=h+i,k="\u3040-\u309f",l="\u30a0-\u30ff",m="\u31f0-\u31ff",n="\uff65-\uff9f",o=l+m+n,p=k+o,q=[12352,12447],r=[12448,12543],s=r[0]-q[0],t="\u4e00-\u9fcf",u="\u3400-\u4dbf",v=t+u,w="\uac00-\ud7af",x=v+p+w,y=null,z=null,A=null,B=null;function C(K){z=z||new RegExp("["+p+"]");return z.test(K)}function D(K){y=y||new RegExp("["+v+"]");return y.test(K)}function E(K){A=A||new RegExp("["+x+"]");return A.test(K)}function F(K){var L=K.charCodeAt(0);return String.fromCharCode(L<q[0]||L>q[1]?L:L+s)}function G(K){if(!C(K))return K;return K.split("").map(F).join("")}function H(K){B=B||new RegExp("^["+p+"]+["+j+"]$");return B.test(K)}function I(K){if(H(K))return K.substr(0,K.length-1);return K}var J={hasKana:C,hasIdeograph:D,hasIdeoOrSyll:E,hiraganaToKatakana:G,isKanaWithTrailingLatin:H,kanaRemoveTrailingLatin:I};f.exports=J}),null);