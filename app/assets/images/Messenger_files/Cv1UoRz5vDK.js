if (self.CavalryLogger) { CavalryLogger.start_js(["Qtq3P"]); }

__d("MercurySyncPagesManagerEventTransformer",["MercuryActionType","PagesMessagingEventType"],(function a(b,c,d,e,f,g){"use strict";function h(i){var j=JSON.parse(i.jsonBlob),k=j&&j.type;if(!k)return undefined;switch(k){case c("PagesMessagingEventType").FLAG:var l=!!(j&&j.flagData&&j.flagData.state),m={action_type:c("MercuryActionType").CHANGE_FLAG,mark_as_flag:l,other_user_fbid:i.threadKey.otherUserFbId,thread_fbid:i.threadKey.threadFbId};return m;default:return undefined}}f.exports={transform:h}}),null);