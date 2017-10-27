if (self.CavalryLogger) { CavalryLogger.start_js(["+nffI"]); }

__d("MercuryMessageBody.react",["cx","fbt","BootloadedComponent.react","DateConsts","EmojiRenderer","EmoticonsList","EmoticonEmojiList","EmployeeLinkMatcher","EmployeeLinkRanges","EventReminderStateStore","EventRemindersGating","RedditLinkMatcher","RedditLinkRanges","JSResource","Link.react","MercuryConfig","MercuryIDs","MercuryMessageRenderLocations","messengerContactActionsRe","MessengerMathUtils","MessengerFormattingUtils","MessengerSupportedEmojiUtils","MessengerTextWithEntities.react","P2PTriggersUtils","React","TextWithEntities.react","TextWithEntitiesMetadataType","UnicodeUtils","URI","URLMatcher","emptyFunction","getURLRanges","ifRequired","requireWeak","shouldAddMRefParam"],(function a(b,c,d,e,f,g,h,i){"use strict";var j,k,l=c("messengerContactActionsRe").actions,m=c("React").PropTypes,n=function p(){n=c("emptyFunction");c("ifRequired")("ChatAppActions",function(q){q.setInitialDisplayDone()})};j=babelHelpers.inherits(o,c("React").PureComponent);k=j&&j.prototype;function o(p){k.constructor.call(this,p);this.interpolator=function(q,r){var s,t=this;if(r.className)return c("React").createElement("span",{className:r.className},q);if(r.math)return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("MessengerMath.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:c("React").createElement("span",null,q),body:this.$MercuryMessageBody4(q),fallbackBody:q,inline:true,stripDelimiters:true,className:"_1e4d _1e4e"});if(r.id){var s=function(){var y={};if(!t.props.isFromViewer&&t.props.threadCustomColor)y.color=t.props.threadCustomColor;var z=t.props.onContactSelect,A=t.props.threadID?c("MercuryIDs").getThreadFBIDFromThreadID(t.props.threadID)===r.id:false,B=c("React").createElement(c("Link.react"),{className:"_ih-",href:A?"#":r.url,style:y,onClick:z&&!A?function(C){this.$MercuryMessageBody3(z,r,C)}.bind(t):c("emptyFunction")},q);if(c("MercuryConfig").WWWMessengerAvatarActions&&!A&&z){if(typeof q==="string")r.contactName=q&&q.replace("@","");B=c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("MessengerAvatarActions.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:B,avatar:B,contact:r,showSendMessageItem:true,onAction:t.props.onContactSelect})}return{v:B}}();if(typeof s==="object")return s.v}if(r.formatter)if(r.recursivelyFormat){var u=this.renderBody(r.innerText,true,r.innerOffset);return r.formatter(u)}else return r.formatter(r.innerText);if(r.entity&&r.entity.url){var v=new(c("URI"))(r.entity.url.replace(/#+$/,""));if(c("shouldAddMRefParam")(v))v.addQueryData({__mref:"mb"});var w=v.toString();if(c("URI").isValidURI(w))return c("React").createElement(c("Link.react"),{href:{url:w,shimhash:r.entity.shimhash},s:r.entity.s,target:"_blank"},q);else return q}if(!r.entity){var x=typeof r.type==="number"?r.type:c("TextWithEntitiesMetadataType")[r.type];switch(x){case c("TextWithEntitiesMetadataType").NONE:return c("React").createElement("span",{className:"_2y9",title:JSON.stringify(r.data)},q);case c("TextWithEntitiesMetadataType").CONCEPT:return this.renderConceptMetadata(q,r.data);case c("TextWithEntitiesMetadataType").INTENT:return this.renderIntentMetadata(q,r.data);default:return q}}return q}.bind(this);this.state=this.parseMessageBody(p)}o.prototype.componentWillReceiveProps=function(p){if(this.props.body!==p.body||this.props.metaRanges!==p.metaRanges||this.props.ranges!==p.ranges)this.setState(this.parseMessageBody(p))};o.prototype.parseMessageBody=function(p){var q=(p.body||"").replace(/\s+$/,""),r=this.$MercuryMessageBody1(p.metaRanges||[]),s={normalizedBody:q,isEncrypted:false,isMathBlock:false,isRichText:false,ranges:[],filteredMetaRanges:r};if(q.length===0)return s;if(q.startsWith("?OTR")){s.isEncrypted=true;return s}if(c("MessengerMathUtils").isMathBlock(q)){s.isMathBlock=true;return s}var t=p.ranges,u=p.metaRanges,v=t&&t.length||u&&u.length||c("EmoticonsList").noncapturingRegexp.test(q)||c("EmojiRenderer").containsEmoji(q)||c("URLMatcher").match(q)||c("EmployeeLinkMatcher").isMatch(q)||c("RedditLinkMatcher").isMatch(q)||this.$MercuryMessageBody2(q,p)||c("MessengerSupportedEmojiUtils").containsEmoji(q)||c("EmoticonEmojiList").noncapturingRegexp.test(q)||c("MessengerFormattingUtils").hasMatch(q)||c("MessengerMathUtils").hasInlineMath(q);if(!v)return s;s.isRichText=true;if(t&&t.length===1&&t[0].className==="__in")t=c("getURLRanges")(q).concat(t);t=t||[];t=t.concat(c("getURLRanges")(q),c("EmployeeLinkRanges").get(q));if(c("MercuryConfig").WWWRedditLinksGK)t=t.concat(c("RedditLinkRanges").get(q));t=t.concat(c("MessengerFormattingUtils").getRanges(q));t=t.concat(c("MessengerMathUtils").getInlineMathRanges(q));s.ranges=t.filter(function(w){return w!=undefined});return s};o.prototype.hasFormatting=function(){return this.state.isRichText||this.state.isMathBlock||this.state.isEncrypted};o.prototype.$MercuryMessageBody3=function(p,q,r){c("MercuryConfig").WWWMessengerAvatarActions?r.preventDefault():p(l.MESSAGE,q,r)};o.prototype.$MercuryMessageBody4=function(p){if(this.props.isFromViewer)return"\\color{#fff}{"+c("MessengerMathUtils").getMathBlockInner(p)+"}";else return c("MessengerMathUtils").getMathBlockInner(p)};o.prototype.renderConceptMetadata=function(p,q){if(!q)return p;if(q.intent_name||q.name)return this.renderIntentMetadata(p,q);return p};o.prototype.renderIntentMetadata=function(p,q){if(!q)return p;var r=q.intent_name||q.name;switch(r){case"request_time":return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("ServicesVerticalRequestTimeTriggers.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:c("React").createElement("span",null,p),data:q,text:p,threadID:this.props.threadID});case"timestamp":if(this.$MercuryMessageBody5(q.value)&&c("EventRemindersGating").shouldShowTriggerWords)if(this.props.renderLocation===c("MercuryMessageRenderLocations").CHAT)return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("ChatEventPlanTriggers.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:c("React").createElement("span",null,p),data:q,text:p,threadID:this.props.threadID});else if(this.props.renderLocation===c("MercuryMessageRenderLocations").MESSENGER)return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("MessengerEventPlanTriggers.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:c("React").createElement("span",null,p),data:q,text:p,threadID:this.props.threadID});return p;default:return p}};o.prototype.renderIntentCTA=function(p){if(p){var q=p.intent_name||p.name;switch(q){case"request_time":return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("ServicesRequestTimeIntentCTA.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:c("React").createElement("span",null),data:p,isFromViewer:this.props.isFromViewer,threadID:this.props.threadID});case"create_event":c("requireWeak")("EventReminderActionsLogger",function(t){t.logTriggerOnTriggerCTA()});var r=this.props.threadID,s=r&&this.$MercuryMessageBody5(p.timestamp)&&c("EventReminderStateStore").shouldShowCTA(r,p.confidence);if(!s)return null;if(this.props.renderLocation===c("MercuryMessageRenderLocations").CHAT)return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("ChatEventPlanCTA.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:c("React").createElement("span",null),data:p,threadID:r});else if(this.props.renderLocation===c("MercuryMessageRenderLocations").MESSENGER)return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("MessengerEventPlanCTA.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:c("React").createElement("span",null),data:p,threadID:r})}}return null};o.prototype.renderCTAs=function(p){var q=null;if(p.length>0){var r=p[0]||{},s=typeof r.type==="number"?r.type:c("TextWithEntitiesMetadataType")[r.type];switch(s){case c("TextWithEntitiesMetadataType").CONCEPT:case c("TextWithEntitiesMetadataType").INTENT:q=this.renderIntentCTA(r.data);break}}return q};o.prototype.renderBody=function(p){var q=arguments.length<=1||arguments[1]===undefined?false:arguments[1],r=arguments.length<=2||arguments[2]===undefined?0:arguments[2],s=this.state,t=s.isRichText,u=s.ranges,v=s.filteredMetaRanges,w=c("UnicodeUtils").strlen(p);if(!t)return c("React").createElement("span",{className:this.props.className},p);if(q){u=u.filter(function(B){return B.offset>=r&&B.offset+B.length<=r+w}).map(function(B){return babelHelpers["extends"]({},B,{offset:B.offset-r})});v=v.filter(function(B){return B.offset>=r&&B.offset+B.length<=r+w}).map(function(B){return babelHelpers["extends"]({},B,{offset:B.offset-r})})}var x={className:this.props.className,interpolator:this.interpolator,metaRanges:v,ranges:u,renderEmoji:true,renderEmoticons:true,text:p};if(this.$MercuryMessageBody2(p)){var y=c("React").createElement(c("TextWithEntities.react"),x);return c("React").createElement(c("BootloadedComponent.react"),babelHelpers["extends"]({bootloadPlaceholder:y,bootloadLoader:c("JSResource")("TextWithEntitiesAndP2P.react").__setRef("MercuryMessageBody.react")},x,{getMessengerEmote:this.$MercuryMessageBody6,isSupportedEmoji:this.$MercuryMessageBody7,threadID:this.props.threadID}))}var z=c("React").createElement(c("MessengerTextWithEntities.react"),x);if(q)return z;var A=this.renderCTAs(this.props.metaRanges||[]);if(!A)return z;return c("React").createElement("span",null,z,A)};o.prototype.render=function(){var p=this.state,q=p.normalizedBody,r=p.isEncrypted,s=p.isMathBlock;if(q.length===0)return null;n();if(this.props.plainText)return c("React").createElement("span",null,q);else if(r)return c("React").createElement("span",{className:"_89h"},i._("[encrypted message]"));else if(s)return c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("MessengerMath.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:c("React").createElement("div",null,q),body:this.$MercuryMessageBody4(q),fallbackBody:q,stripDelimiters:true,className:"_1e4d"});else return this.renderBody(q)};o.prototype.$MercuryMessageBody7=function(p){return c("MessengerSupportedEmojiUtils").isSupportedEmojiKey(p)};o.prototype.$MercuryMessageBody6=function(p){var q=c("EmoticonEmojiList").emote2emojis[p];return c("MessengerSupportedEmojiUtils").isSupportedEmojiKey(q)?q:null};o.prototype.$MercuryMessageBody5=function(p){var q=new Date(p*c("DateConsts").MS_PER_SEC),r=new Date(Date.now()+5*c("DateConsts").MS_PER_MIN),s=new Date(new Date().setFullYear(new Date().getFullYear()+1));return q>r&&q<s};o.prototype.$MercuryMessageBody1=function(p){var q=p.filter(function(r){return r.data&&(r.data.intent_name==="create_event"||r.data.name==="create_event")});return q.length!==0?q:p};o.prototype.$MercuryMessageBody2=function(p){var q=arguments.length<=1||arguments[1]===undefined?this.props:arguments[1];return!!(q.threadID&&c("P2PTriggersUtils").canSeeTriggers(q.threadID)&&c("P2PTriggersUtils").getMatches(p))};o.propTypes={body:m.string,customLike:m.object,isFromViewer:m.bool,metaRanges:m.array,ranges:m.array,threadCustomColor:m.string,threadID:m.string,onContactSelect:m.func,renderLocation:m.oneOf([c("MercuryMessageRenderLocations").CHAT,c("MercuryMessageRenderLocations").MESSENGER,c("MercuryMessageRenderLocations").PAGES])};f.exports=o}),null);