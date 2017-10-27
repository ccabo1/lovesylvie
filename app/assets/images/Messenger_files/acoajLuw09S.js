if (self.CavalryLogger) { CavalryLogger.start_js(["eBo3L"]); }

__d("MessagingThreadCustomizationSource",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ADMIN_MSG_CHANGE_LINK:"admin_msg",THREAD_INLINE:"thread_inline",JOURNEY_PROMPT:"journey_prompt",JOURNEY_PROMPT_WRITE_IN:"journey_prompt_write_in",PROMO_LINK:"promo_link",SETTINGS:"thread_settings",USER_INFO_ACTION_SHEET:"user_info_action_sheet",ROOM_CREATION:"room_creation",DELETE_ALL_SETTING:"delete_all_setting"})}),null);
__d("abstractPopoverButtonReact",["ReasonReact","bs_js_null_undefined","AbstractPopoverButton.react"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l,m,n){return c("ReasonReact").wrapJsForReason(c("AbstractPopoverButton.react"),{config:c("bs_js_null_undefined").from_opt(i),haschevron:c("bs_js_null_undefined").from_opt(j),image:c("bs_js_null_undefined").from_opt(k),label:c("bs_js_null_undefined").from_opt(l),maxwidth:c("bs_js_null_undefined").from_opt(m)},n)}g.make=h}),null);
__d("messengerDeleteAllDialog",["fbt","ReasonReact","MercuryConfig","messengerDialogsRe","MercuryThreadActions","messengerDialogReact","messengerDialogBodyReact","MessagingThreadCustomizationSource"],(function a(b,c,d,e,f,g,h){"use strict";var i=c("ReasonReact").statelessComponent("messengerDeleteAllDialog");function j(){return c("messengerDialogsRe").removeDialog(0)}function k(n){if(n)return 0;else return c("messengerDialogsRe").removeDialog(0)}function l(n,o){var p=i.slice();p[9]=function(){var q=function q(){c("messengerDialogsRe").removeDialog(0);if(n.length!==0){c("MercuryThreadActions").get().batchDelete(n,c("MessagingThreadCustomizationSource").SETTINGS);return 0}else return 0},r=+c("MercuryConfig").AggregationStyle,s=r!==0?h._("Delete All Connection Requests?"):h._("Delete All Message Requests?");return c("ReasonReact").element(0,0,c("messengerDialogReact").Dialog[0](0,k,0,0,0,0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").Header[0](0,0,s)),c("ReasonReact").element(0,0,c("messengerDialogBodyReact").make(0,[h._("This permanently deletes these messages, but won't show that you've seen or deleted them.")])),c("ReasonReact").element(0,0,c("messengerDialogReact").Footer[0](0,0,[c("ReasonReact").element(0,0,c("messengerDialogReact").CancelButton[0]([j],[])),c("ReasonReact").element(0,0,c("messengerDialogReact").Button[0](0,[h._("Delete All")],0,["danger"],[q],[0],0,0,[]))]))]))};return p}var m=c("ReasonReact").wrapReasonForJs(i,function(n){return l(n.threadIDs,[])});g.component=i;g.handleCancel=j;g.handleToggle=k;g.make=l;g.jsComponent=m}),null);
__d("messengerMenuReact",["ReasonReact","bs_js_null_undefined","MessengerMenu.react"],(function a(b,c,d,e,f,g){"use strict";function h(n){return c("ReasonReact").wrapJsForReason(c("MessengerMenu.react"),{},n)}var i=[h];function j(n,o,p,q,r){return c("ReasonReact").wrapJsForReason(c("MessengerMenu.react").Item,{href:c("bs_js_null_undefined").from_opt(n),label:o,onclick:c("bs_js_null_undefined").from_opt(p),target:c("bs_js_null_undefined").from_opt(q)},r)}var k=[j];function l(n){return c("ReasonReact").wrapJsForReason(c("MessengerMenu.react").Separator,{},n)}var m=[l];g.Menu=i;g.MenuItem=k;g.MenuSeparator=m}),null);
__d("messengerPopoverMenuReact",["utilsRe","ReasonReact","bs_js_null_undefined","MessengerPopoverMenu.react"],(function a(b,c,d,e,f,g){"use strict";function h(i,j,k,l,m,n){return c("ReasonReact").wrapJsForReason(c("MessengerPopoverMenu.react"),{disableArrowKeyActivation:c("utilsRe").optionBoolToNullUndefinedBoolean(i),isOpen:c("utilsRe").optionBoolToNullUndefinedBoolean(j),menu:k,onHide:c("bs_js_null_undefined").from_opt(l),onShow:c("bs_js_null_undefined").from_opt(m)},n)}g.make=h}),null);
__d("messengerDeleteAllMenuReact",["cx","fbt","linkReact","ReasonReact","messengerDialogsRe","messengerMenuReact","MercuryThreadActions","messengerDeleteAllDialog","messengerPopoverMenuReact","abstractPopoverButtonReact","MessagingThreadCustomizationSource"],(function a(b,c,d,e,f,g,h,i){"use strict";var j=c("ReasonReact").statelessComponent("messengerDeleteAllMenuReact");function k(m,n){var o=j.slice();o[9]=function(){var p=function p(){return c("messengerDialogsRe").showDialog(function(){return c("ReasonReact").element(0,0,c("messengerDeleteAllDialog").make(m,[]))})},q=function q(){if(m.length!==0){c("MercuryThreadActions").get().batchMarkRead(m,c("MessagingThreadCustomizationSource").DELETE_ALL_SETTING);return 0}else return 0},r=c("ReasonReact").element(0,0,c("messengerMenuReact").Menu[0]([c("ReasonReact").element(0,0,c("messengerMenuReact").MenuItem[0](0,i._("Delete All"),[p],0,[])),c("ReasonReact").element(0,0,c("messengerMenuReact").MenuItem[0](0,i._("Read All"),[q],0,[]))])),s=i._("Settings, help and more"),t={button:c("ReasonReact").element(0,0,c("linkReact").make([s],["_30yy _2fug"],0,0,0,0,0,0,0,["button"],0,0,0,[s],[])),defaultMaxWidth:200};return c("ReasonReact").element(0,0,c("messengerPopoverMenuReact").make(0,0,r,0,0,[c("ReasonReact").element(0,0,c("abstractPopoverButtonReact").make([t],[false],0,0,[200],[]))]))};return o}var l=c("ReasonReact").wrapReasonForJs(j,function(m){return k(m.threadIDs,[])});g.component=j;g.make=k;g.jsComponent=l}),null);
__d("messengerDeleteAllMenuReactComponent",["messengerDeleteAllMenuReact"],(function a(b,c,d,e,f,g){"use strict";var h=c("messengerDeleteAllMenuReact").jsComponent;f.exports=h}),null);