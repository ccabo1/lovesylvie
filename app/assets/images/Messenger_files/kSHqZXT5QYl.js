if (self.CavalryLogger) { CavalryLogger.start_js(["s50yf"]); }

__d("messengerNotificationsButtonReact",["cx","fbt","bs_curry","React","keysRe","formatDate","ReasonReact","leftRightReact","messengerDialogsRe","messengerCustomColorUtilsRe","messengerNotificationsIconSVGReact","messengerCompositeMuteSettingsDialogBootloaderReact"],(function a(b,c,d,e,f,g,h,i){"use strict";function j(n,o){if(n)return 0;else{c("messengerDialogsRe").removeDialog(0);var p=o[4][0][0];if(p)return p[0].focus();else return 0}}function k(n,o){o[4][0][0]=n==null?0:[n];return 0}var l=c("ReasonReact").reducerComponent("MessengerNotificationsButtonReact");function m(n,o,p,q,r,s,t,u,v){var w=function w(B){return c("messengerDialogsRe").showDialog(function(){return c("ReasonReact").element(0,0,c("messengerCompositeMuteSettingsDialogBootloaderReact").make(n,o,q,1-+u.is_canonical,r,t,s,c("bs_curry")._1(B[0],j),[]))})},x=function x(B,C){B.preventDefault();B.stopPropagation();return w(C)},y=function y(B,C){if(B.keyCode===c("keysRe").$$return){B.preventDefault();B.stopPropagation();return w(C)}else return 0},z=function z(){if(p){var B=p[0];if(B!==0){var C;if(B>0)if(B<86401)C=0;else{var D=+(new Date(B*1e3).getDay()===new Date().getDay());C=D?[i._("Off until {time}",[i.param("time",c("formatDate")(B,"g:ia"))])]:[i._("Off until {time} tomorrow",[i.param("time",c("formatDate")(B,"g:ia"))])]}else C=B===-1?[i._("Off indefinitely")]:0;if(C)return c("React").createElement("span",{className:"_3x6v"},C[0]);else return null}else return null}else return null},A=l.slice();A[9]=function(B){var C=i._("Notifications"),D=c("messengerCustomColorUtilsRe").customColorOrBlue(u);return c("React").createElement("div",{ref:c("bs_curry")._1(B[0],k),className:"_3szn _3szo",role:"button",tabIndex:0,onKeyDown:c("bs_curry")._1(B[0],y),onClick:c("bs_curry")._1(B[0],x)},c("React").createElement("div",{className:"_3szp"},c("messengerNotificationsIconSVGReact").make("_3wh2",D)),c("ReasonReact").element(0,0,c("leftRightReact").make(["_3szq"],[C,z(0)])))};A[10]=function(){return[[0]]};A[12]=function(v,B){return 0};return A}g.handleDialogToggle=j;g.setRef=k;g.component=l;g.make=m}),null);