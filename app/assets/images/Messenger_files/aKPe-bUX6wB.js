if (self.CavalryLogger) { CavalryLogger.start_js(["2kRjL"]); }

__d("messengerDetailViewHeaderReact",["cx","fbt","bs_curry","Event","React","ReactDOM","debounce","linkReact","RTCConfig","bs_js_boolean","ReasonReact","FBRTCSupport","bs_js_primitive","MercuryConfig","WorkModeConfig","bs_js_null_undefined","MercuryThreadInfo","messengerDomIDsRe","archiveWarningReact","MercuryParticipantTypes","mercuryThreadTitleReact","messengerLocalTimeReact","WorkFocusModeController","MessengerJoinableModeType","MessengerWebDriverTestIDs","messengerCustomColorUtilsRe","messengerRTCCallButtonReact","messengerPresenceStatusReact","messengerInfoPanelButtonReact","montageThreadViewContainerReact","messengerCalculateTruncationState"],(function a(b,c,d,e,f,g,h,i){"use strict";var j=c("WorkFocusModeController").MessengerWorkAvailabilityStatus;function k(w){var x=c("bs_js_null_undefined").from_opt(w[0][0]),y=c("bs_js_null_undefined").from_opt(w[1][0]),z=c("bs_js_null_undefined").from_opt(w[2][0]),A=c("bs_js_null_undefined").from_opt(w[3][0]),B=c("bs_js_null_undefined").from_opt(w[4][0]);return c("messengerCalculateTruncationState")(x,y,z,A,B)}function l(w,x){x[4][3][0]=w==null?0:[c("ReactDOM").findDOMNode(w)];return 0}function m(w,x){x[4][1][0]=w==null?0:[w];return 0}function n(w,x){x[4][0][0]=w==null?0:[w];return 0}function o(w,x){x[4][2][0]=w==null?0:[w];return 0}function p(w,x){x[4][4][0]=w==null?0:[w];return 0}function q(w,x){if(w.has_montage&&c("MercuryConfig").MontageThreadViewer)return c("React").createElement("div",{ref:c("bs_curry")._1(x[0],p),className:"_1cwz"},c("ReasonReact").element(0,0,c("montageThreadViewContainerReact").make(w.thread_id,0,[])));else return null}function r(w,x){var y=x.filter(function(B,C,D){if(B==null)return false;else{var z=B.fbid;if(z==null)return false;else return c("bs_js_boolean").to_js_boolean(+(z!==w))}}),z=y.count(),A=y.first();if(z!==1||A==null)return null;else return c("ReasonReact").element(0,0,c("messengerLocalTimeReact").make("_5eu7",c("bs_js_primitive").null_undefined_to_opt(A.timezone),[]))}function s(w,x,y){var z=+(c("FBRTCSupport").isWebrtcSupported()&&c("FBRTCSupport").isOSSupported()),A=w?+(w[0].contact.type===c("MercuryParticipantTypes").PAGE):0,B=x?+(x[0].joinable_mode===c("MessengerJoinableModeType").JOINABLE):0,C;if(x){var D=x[0];C=+(D.participants.length>1)&&+c("MercuryThreadInfo").canReply(D)&&(+D.is_canonical||y&&+c("RTCConfig").RtcConferencingVideoGK||1-y&&c("RTCConfig").RtcConferencingGK)}else C=0;if(z&&!A&&!B)return C;else return 0}var t=c("ReasonReact").reducerComponent("MessengerDetailViewHeaderReact");function u(w,x,y,z,A,B,C){var D=function D(){if(s(w,A,0))if(A){var G=A[0],H=G.thread_id;return c("React").createElement("li",undefined,c("ReasonReact").element(0,0,c("messengerRTCCallButtonReact").make("_30yy",c("messengerCustomColorUtilsRe").customColorOrBlue(G),0,z,G,H,B,w?w[0].contact.name:"",[])))}else return null;else return null},E=function E(){if(s(w,A,1))if(A){var G=A[0],H=G.thread_id,I;if(w){var J=+(w[0].isUserActive&&c("RTCConfig").RtcActiveUserCallability);I=J!==0?"_3qfl":""}else I="";return c("React").createElement("li",undefined,c("ReasonReact").element(0,0,c("messengerRTCCallButtonReact").make("_30yy",c("messengerCustomColorUtilsRe").customColorOrBlue(G),1,z,G,H,B,w?w[0].contact.name:"",[])),c("React").createElement("div",{className:I}))}else return null;else return null},F=function F(){var G;if(j==null)G=0;else{var H=+j.displayFocusBanner(B,z);G=H!==0?[j]:0}if(G)return[0,c("React").createElement(G[0],{className:"_2v6o",viewer:B,thread:c("bs_js_null_undefined").from_opt(A),participants:z})];else if(w){var I=w[0];return[0,c("ReasonReact").element(0,0,c("messengerPresenceStatusReact").make(["_2v6o"],+I.isUserActive,c("bs_js_primitive").null_undefined_to_opt(I.lastActive),[I.platform],[]))]}else return[1,null]};return[t[0],t[1],t[2],t[3],function(G){var H=G[4];H[5][0]=[c("Event").listen(window,"resize",c("debounce")(function(){return k(H)},20))];return 0},function(G){return k(G[1][4])},function(G){var H=G[4][5][0];if(H)return H[0].remove();else return 0},t[7],t[8],function(G){if(A){var H=A[0],I=1-+z.isEmpty()&&+z.every(function(L,C,M){if(L==null)return false;else return L.employee}),J=i._("Conversation Information"),K=F(0);return c("React").createElement("div",{ref:c("bs_curry")._1(G[0],n),className:"_5742"+(c("bs_js_boolean").to_js_boolean(K[0])?" _1_fz":"")},q(H,G),c("React").createElement("div",{key:"threadTitle",ref:c("bs_curry")._1(G[0],m),className:"_5743"},c("React").createElement("h2",{className:"_17w2",id:c("messengerDomIDsRe").ids.THREAD_TITLE},c("ReasonReact").element(0,[c("bs_curry")._1(G[0],l)],c("mercuryThreadTitleReact").make(["_3oh-"],H,B,0,0,0,0,[]))),K[1],r(B,z)),c("React").createElement("ul",{key:"buttonsContainer",ref:c("bs_curry")._1(G[0],o),className:"_fl2"},c("React").createElement("li",undefined,c("ReasonReact").element(0,0,c("archiveWarningReact").make(+c("WorkModeConfig").is_work_user,I,[]))),D(0),E(0),c("React").createElement("li",undefined,c("React").cloneElement(c("ReasonReact").element(0,0,c("linkReact").make(0,["_30yy"],0,0,0,0,[y],0,0,["button"],0,0,0,[J],[])),{"aria-expanded":x!==0?false:true,"aria-label":J,"data-testid":c("MessengerWebDriverTestIDs").INFO_PANEL_BUTTON},c("messengerInfoPanelButtonReact").make(c("messengerCustomColorUtilsRe").customColorOrBlue(H),x)),c("React").createElement("div",{"aria-owns":c("messengerDomIDsRe").ids.THREAD_INFO_PANEL}))))}else return null},function(){return[[0],[0],[0],[0],[0],[0]]},t[11],function(C,G){return 0},t[13]]}var v=c("ReasonReact").wrapReasonForJs(t,function(w){return u(c("bs_js_primitive").null_undefined_to_opt(w.contactData),+w.infoPanelCollapsed,w.onInfoPanelToggle,w.participants,c("bs_js_primitive").null_undefined_to_opt(w.thread),w.viewer,[])});g.messengerWorkAvailabilityStatus_=j;g.calculateTruncationState=k;g.findMercuryTitle=l;g.findTitle=m;g.findRoot=n;g.findButtons=o;g.findMontage=p;g.renderMontageThread=q;g.renderLocalTime=r;g.shouldShowCallButton=s;g.component=t;g.make=u;g.jsComponent=v}),null);