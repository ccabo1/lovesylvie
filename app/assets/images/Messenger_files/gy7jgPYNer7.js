if (self.CavalryLogger) { CavalryLogger.start_js(["fbi7V"]); }

__d("messengerMoveToWorkplaceDialogReact",["fbt","ReasonReact","MercuryViewer","MercuryThreads","MercurySourceType","messengerDialogsRe","MercuryMessageObject","messengerDialogReact","MercuryLogMessageType","MercuryMessageActions","messengerDialogBodyReact"],(function a(b,c,d,e,f,g,h){"use strict";var i=c("ReasonReact").statelessComponent("MessengerMoveToWorkplaceDialogReact");function j(l){if(l)return 0;else return c("messengerDialogsRe").removeDialog(0)}function k(l,m){var n=function n(){var p=c("MercuryThreads").get();if(!p.isEmptyLocalThread(l)){var q=c("MercuryMessageObject").get(),r=c("MercuryMessageActions").get(),s=q.constructLogMessageObject(c("MercurySourceType").MESSENGER_WEB,l,c("MercuryLogMessageType").SWITCH_TO_WORK,{removed_participants:[c("MercuryViewer").getID()]});r.send(s,undefined,undefined)}return j(false)},o=i.slice();o[9]=function(){return c("ReasonReact").element(0,0,c("messengerDialogReact").Dialog[0](0,j,0,0,0,0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").Header[0](0,0,h._("Move Conversation to Workplace?"))),c("ReasonReact").element(0,0,c("messengerDialogBodyReact").make(0,[h._("Do you want to move this conversation to Workplace?")])),c("ReasonReact").element(0,0,c("messengerDialogReact").Footer[0](0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").CancelButton[0](0,[])),c("ReasonReact").element(0,0,c("messengerDialogReact").Button[0](0,[h._("Move Conversation")],0,0,[n],[1],0,0,[]))]))]))};return o}g.component=i;g.handleToggle=j;g.make=k}),null);