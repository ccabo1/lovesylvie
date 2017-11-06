if (self.CavalryLogger) { CavalryLogger.start_js(["C2HoL"]); }

__d("FantaConst",[],(function a(b,c,d,e,f,g){"use strict";var h={DEFAULT_ALLOWED_RAISED_TABS:2,DEFAULT_MESSAGE_COUNT:10,cookieIDs:{PERSONAL_COOKIE_ID:"t3",PERSONAL_FOCUS_COOKIE_ID:"lm3",PERSONAL_TIME_COOKIE_ID:"utc3",WORK_COOKIE_ID:"t3w",WORK_FOCUS_COOKIE_ID:"lm3w",WORK_TIME_COOKIE_ID:"utc3w"},getCookieIDs:function i(){return[h.cookieIDs.PERSONAL_COOKIE_ID,h.cookieIDs.PERSONAL_FOCUS_COOKIE_ID,h.cookieIDs.PERSONAL_TIME_COOKIE_ID,h.cookieIDs.WORK_COOKIE_ID,h.cookieIDs.WORK_FOCUS_COOKIE_ID,h.cookieIDs.WORK_TIME_COOKIE_ID]}};f.exports=h}),null);
__d("Dcode",[],(function a(b,c,d,e,f,g){var h,i={},j={_:"%",A:"%2",B:"000",C:"%7d",D:"%7b%22",E:"%2c%22",F:"%22%3a",G:"%2c%22ut%22%3a1",H:"%2c%22bls%22%3a",I:"%2c%22n%22%3a%22%",J:"%22%3a%7b%22i%22%3a0%7d",K:"%2c%22pt%22%3a0%2c%22vis%22%3a",L:"%2c%22ch%22%3a%7b%22h%22%3a%22",M:"%7b%22v%22%3a2%2c%22time%22%3a1",N:".channel%22%2c%22sub%22%3a%5b",O:"%2c%22sb%22%3a1%2c%22t%22%3a%5b",P:"%2c%22ud%22%3a100%2c%22lc%22%3a0",Q:"%5d%2c%22f%22%3anull%2c%22uct%22%3a",R:".channel%22%2c%22sub%22%3a%5b1%5d",S:"%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a",T:"%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a",U:"%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",V:"%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a",W:"%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a",X:"%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1",Y:"%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",Z:"%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a"};(function(){var l=[];for(var m in j){i[j[m]]=m;l.push(j[m])}l.reverse();h=new RegExp(l.join("|"),"g")})();var k={encode:function l(m){return encodeURIComponent(m).replace(/([_A-Z])|%../g,function(n,o){return o?"%"+o.charCodeAt(0).toString(16):n}).toLowerCase().replace(h,function(n){return i[n]})},decode:function l(m){return decodeURIComponent(m.replace(/[_A-Z]/g,function(n){return j[n]}))}};f.exports=k}),null);
__d("PresenceCookieManager",["Cookie","CurrentUser","Dcode","ErrorUtils","JSLogger","PresenceInitialData","PresenceUtil","WebStorage","WorkModeConfig"],(function a(b,c,d,e,f,g){var h=c("PresenceInitialData").cookieVersion,i="presence",j={},k=null,l=null,m=c("JSLogger").create("presence_cookie");function n(y){var z=c("Cookie").get(i)||"";if(z.length===0)return null;if(z[0]!==y)return null;return z.substring(1)}function o(y,z){c("Cookie").set(i,y+z)}function p(){if(!(c("PresenceInitialData").useWebStorage||false))return null;return c("WebStorage").getSessionStorage()}function q(){var y=p(),z=y!=null?y.getItem(i):null;if(z!=null)return z.substring(1);return null}function r(y){var z=p();if(z==null)return false;z.setItem(i,"E"+y);return true}function s(){var y=q();if(y!=null)return y;return n("E")}function t(y){var z=y.state;if(z==null)return"";var A=n("S")||"",B=c("WorkModeConfig").is_work_user?"w":"f",C=c("WorkModeConfig").is_work_user?z.t3w:z.t3,D=C!=null?C.length>0:false,E=A.indexOf(B)!==-1;if(E&&!D)A=A.replace(B,"");if(!E&&D)A+=B;return A}function u(y,z){var A=r(y);if(A)o("S",z);else{if(y.length>1024)m.warn("big_cookie",y.length);o("E",y)}}function v(){try{var y=s();if(k!==y){k=y;l=null;if(y){y=c("Dcode").decode(y);l=JSON.parse(y)}}if(l){if(l.user&&l.user!==c("CurrentUser").getID())return null;if(l.v!==h)return null;return l}}catch(z){m.warn("getcookie_error",z)}return null}function w(){return parseInt(Date.now()/1e3,10)}var x={register:function y(z,A){j[z]=A},store:function y(){var z=v();if(z&&z.v&&h<z.v){m.debug("stale_cookie",h);return}var A={v:h,time:w(),user:c("CurrentUser").getID()};for(var B in j)A[B]=c("ErrorUtils").applyWithGuard(j[B],j,[z&&z[B]],function(D){D.presence_subcookie=B});var C=c("Dcode").encode(JSON.stringify(A));if(c("PresenceUtil").hasUserCookie())u(C,t(A))},clear:function y(){c("Cookie").clear(i);var z=c("WebStorage").getSessionStorage();if(z!=null)z.removeItem(i)},getSubCookie:function y(z){var A=v();if(!A)return null;return A[z]}};f.exports=x}),null);
__d("PresenceState",["Arbiter","ErrorUtils","FantaConst","JSLogger","PresenceCookieManager","debounceAcrossTransitions","setIntervalAcrossTransitions","PresenceInitialData"],(function a(b,c,d,e,f,g){"use strict";var h=c("PresenceInitialData").cookiePollInterval||2e3,i=c("PresenceInitialData").shouldSuppress||false,j=[],k=[],l=null,m=null,n=0,o=null,p=0,q=["sb2","tr","tw","at","wml"].concat(c("FantaConst").getCookieIDs()),r=c("JSLogger").create("presence_state");function s(){return c("PresenceCookieManager").getSubCookie("state")}function t(){n=Date.now();c("PresenceCookieManager").store();x(m)}var u=c("debounceAcrossTransitions")(t,0);function v(C){if(C==undefined||isNaN(C)||C==Number.POSITIVE_INFINITY||C==Number.NEGATIVE_INFINITY)C=0;return C}function w(C){var D={};if(C){q.forEach(function(G){if(C&&C[G])D[G]=C[G]});if(n<C.ut)r.error("new_cookie",{cookie_time:C.ut,local_time:n})}D.ut=n;for(var E=0,F=j.length;E<F;E++)c("ErrorUtils").applyWithGuard(j[E],null,[D]);m=D;return m}function x(C){p++;n=v(C&&C.ut);if(!l)l=c("setIntervalAcrossTransitions")(A,h);m=C;if(o===null)o=C;for(var D=0,E=k.length;D<E;D++)c("ErrorUtils").applyWithGuard(k[D],null,[C]);p--}function y(C){if(C&&C.ut)if(n<C.ut)return true;else if(C.ut<n)r.error("old_cookie",{cookie_time:C.ut,local_time:n});return false}function z(){var C=s();if(y(C))m=C;return m}function A(){var C=s();if(y(C))x(C)}c("PresenceCookieManager").register("state",w);c("Arbiter").subscribe(c("JSLogger").DUMP_EVENT,function(C,D){D.presence_state={initial:babelHelpers["extends"]({},o),state:babelHelpers["extends"]({},m),update_time:n,sync_paused:p,poll_time:h}});(function(){var C=z();if(C)x(C);else{r.debug("no_cookie_initial");x(w());return}})();var B={doSync:function C(D){if(p)return;if(D)t();else u()},registerStateStorer:function C(D){j.push(D)},registerStateLoader:function C(D){k.push(D)},get:function C(){return z()},getInitial:function C(){return o},shouldSuppress:function C(){return i},verifyNumber:v};f.exports=B}),null);