if (self.CavalryLogger) { CavalryLogger.start_js(["LN+wA"]); }

__d("messengerEditNicknameDialogReact",["cx","fbt","bs_curry","React","MercuryIDs","ReasonReact","messengerDialogReact","messengerDialogBodyReact","messengerTextWithEmojiInputReact","MessagingThreadCustomizationConfig"],(function a(b,c,d,e,f,g,h,i){"use strict";var j=c("ReasonReact").reducerComponent("MessengerEditNicknameDialogReact");function k(m,n){n[4][0][0]=m==null?0:[m];return 0}function l(m,n,o,p,q,r){var s=function s(r,u){var v=u[4][0][0],w=v?[v[0].getValue()]:0,x=0;if(w)if(w[0]===""){if(n)x=1}else x=1;if(x===1)if(w!==n){var y=c("MercuryIDs").getUserIDFromParticipantID(m.id);if(!(y==null))c("bs_curry")._1(o,[y,w[0]])}return c("bs_curry")._1(p,false)},t=j.slice();t[9]=function(u){var v=m.name,w=c("MercuryIDs").getUserIDFromParticipantID(m.id),x,y=0;if(!(w==null)&&w===q)x=i._("Edit Your Nickname");else y=1;if(y===1)x=i._("Edit Nickname for {personName}",[i.param("personName",v)]);return c("ReasonReact").element(0,0,c("messengerDialogReact").Dialog[0](["_2c1u"],p,0,0,0,0,[400],[c("ReasonReact").element(0,0,c("messengerDialogReact").Header[0](0,0,x)),c("ReasonReact").element(0,0,c("messengerDialogBodyReact").make(0,[c("React").createElement("div",{className:"_-bo"},i._("Everyone in this conversation will see this.")),c("ReasonReact").element(0,[c("bs_curry")._1(u[0],k)],c("messengerTextWithEmojiInputReact").make(["_2c1v"],[c("bs_curry")._1(u[0],s)],[c("MessagingThreadCustomizationConfig").maxNicknameLength],0,[v],n,[]))])),c("ReasonReact").element(0,0,c("messengerDialogReact").Footer[0](0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").CancelButton[0](0,[])),c("ReasonReact").element(0,0,c("messengerDialogReact").Button[0](0,[i._("Save")],0,0,[c("bs_curry")._1(u[0],s)],[0],0,0,[]))]))]))};t[10]=function(){return[[0]]};t[12]=function(r,u){return 0};return t}g.component=j;g.setInput=k;g.make=l}),null);