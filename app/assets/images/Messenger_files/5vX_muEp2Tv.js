if (self.CavalryLogger) { CavalryLogger.start_js(["HejXk"]); }

__d("MessengerConversation.react",["cx","csx","fbt","BootloadOnRender.react","ChatTypingIndicators.react","CSS","DOM","DOMDimensions","Event","FluxContainer","immutable","ImmutableObject","JSReliabilityFixesGatingConfig","JSResource","KeyEventController","LazyComponent.react","MercuryActionType","MercuryConfig","MercuryIDs","MercuryDeliveryReceipts","mercuryRogerRe","MercuryShareAttachmentRenderLocations","MessageList.react","MessengerAttachmentRenderer","messengerButtonReact","MessengerCollapsedLogMessageGroup.react","MessengerConfig","MessengerContextBannerContainer.react","MessengerDateBreak.react","MessengerFlexScrollableArea.react","MessengerBootloadedLogMessage.react","MessengerMessageGroup.react","messengerNewMessagesNoticeReact","MessengerPlatformSubscriptionMessageClassification","MessengerQuickCamButtonHTML5.react","MessengerQuickCamOrigins","MessengerSpinner.react","MessengerTypingIndicator.react","MessengerVideoAutoplayActions","MessengerVideoAutoplayStore","MNOmniMConstants","OmniMStore","Parent","React","ReactDOM","Set","SubscriptionsHandler","UserActivity","WebMessengerConstants","convertMIGColorToFIGColor","joinClasses","setImmediate","throttle"],(function a(b,c,d,e,f,g,h,i,j){"use strict";var k,l,m=c("MercuryDeliveryReceipts").get(),n=c("mercuryRogerRe").get(),o=c("messengerButtonReact").jsComponent,p=c("messengerNewMessagesNoticeReact").jsComponent,q=c("immutable").OrderedMap,r=c("React").PropTypes,s=20,t=100;function u(event,y){return!!(c("KeyEventController").filterEventTypes(event,y)&&c("KeyEventController").filterEventModifiers(event,y)&&event.target instanceof Element&&c("Parent").bySelector(event.target,"._4_j4"))}k=babelHelpers.inherits(v,c("React").PureComponent);l=k&&k.prototype;function v(){var y,z;for(var A=arguments.length,B=Array(A),C=0;C<A;C++)B[C]=arguments[C];return z=(y=l.constructor).call.apply(y,[this].concat(B)),this.state={readReceipts:w(this.props),deliveryTimestamp:0,scrollingToUnreadMessage:false,showUnreadNotice:false,unreadCount:this.props.thread?this.props.thread.unread_count:0,width:0,suggestions:null,omniMPrefs:null},this.$MessengerConversation1=null,this.$MessengerConversation2=0,this.$MessengerConversation3=0,this.$MessengerConversation4=null,this.$MessengerConversation6=function(){var D=this.$MessengerConversation14();D&&D.pageUp();return false}.bind(this),this.$MessengerConversation7=function(){var D=this.$MessengerConversation14();D&&D.pageDown();return false}.bind(this),this.$MessengerConversation8=function(D){if(D.target===document.body){this.scrollToTop();return false}return null}.bind(this),this.$MessengerConversation9=function(D){if(D.target===document.body){this.scrollToBottom();return false}return null}.bind(this),this.$MessengerConversation12=function(){if(c("JSReliabilityFixesGatingConfig").should_get_fix&&!this.refs)return;if(!this.refs.scrollable)return;var D=this.$MessengerConversation14(),E=this.refs.quickReply;E&&c("CSS").conditionClass(E,"_1mzg",!this.isScrolledToBottom());this.$MessengerConversation10();this.$MessengerConversation11();if(D&&this.state.unreadCount&&this.$MessengerConversation18(D))this.setState({showUnreadNotice:false,unreadCount:0});this.$MessengerConversation26(D)}.bind(this),this.$MessengerConversation25=function(D){D.preventDefault();this.setState({showUnreadNotice:false});this.$MessengerConversation16()}.bind(this),this.$MessengerConversation11=function(){if(!this.isScrolledToBottom()||this.props.messages.size===0)return;if(c("UserActivity").isOnTab()&&c("UserActivity").isActive())this.props.onRead(this.props.threadID);else if(!this.$MessengerConversation4)this.$MessengerConversation4=c("UserActivity").subscribe(function(){if(c("UserActivity").isOnTab()){this.$MessengerConversation13();this.props.onRead(this.props.threadID)}}.bind(this))}.bind(this),this.handleResize=function(){if(c("JSReliabilityFixesGatingConfig").should_get_fix&&!this.refs)return;if(this.refs.scrollable){this.refs.scrollable.handleResize();var D=c("DOMDimensions").getElementDimensions(c("ReactDOM").findDOMNode(this.refs.scrollable)).width;if(D!==this.state.width)this.setState({width:D})}var E=this.refs.quickReply;E&&c("CSS").conditionClass(E,"_1mzg",!this.isScrolledToBottom());this.trackBottomIfRequired()}.bind(this),z}v.getStores=function(){return[c("OmniMStore")]};v.calculateState=function(y,z){if(!c("MercuryIDs").isValid(z.threadID))return babelHelpers["extends"]({},y);return{suggestions:c("OmniMStore").suggestionsForThread(z.threadID),omniMPrefs:c("OmniMStore").prefs()}};v.prototype.componentDidMount=function(){var y=new(c("SubscriptionsHandler"))();y.addSubscriptions(c("Event").listen(window,"resize",c("throttle")(this.handleResize,50)),c("KeyEventController").registerKey("PAGE_UP",this.$MessengerConversation6,u),c("KeyEventController").registerKey("PAGE_DOWN",this.$MessengerConversation7,u),c("KeyEventController").registerKey("HOME",this.$MessengerConversation8,u),c("KeyEventController").registerKey("END",this.$MessengerConversation9,u),n.subscribe("change",function(z,A){A[this.props.threadID]&&this.setState({readReceipts:w(this.props)})}.bind(this)),m.subscribe("change",function(z,A){this.setState({deliveryTimestamp:this.props.threadID?m.getDeliveryTime(this.props.threadID):0})}.bind(this)));this.$MessengerConversation1=y;this.$MessengerConversation10();this.handleResize();this.$MessengerConversation11();this.$MessengerConversation5=c("throttle")(this.$MessengerConversation12,t)};v.prototype.componentWillReceiveProps=function(y){var z=y.threadID!==this.props.threadID;if(z){this.$MessengerConversation13();this.setState({scrollingToUnreadMessage:false,showUnreadNotice:false,unreadCount:y.thread?y.thread.unread_count:0})}if(z||y.messages!==this.props.messages)this.setState({readReceipts:w(y),deliveryTimestamp:y.threadID?m.getDeliveryTime(y.threadID):0})};v.prototype.componentWillUnmount=function(){this.$MessengerConversation13();this.$MessengerConversation1&&this.$MessengerConversation1.release()};v.prototype.componentWillUpdate=function(){var y=this.$MessengerConversation14();if(y){this.$MessengerConversation2=y.getScrollHeight();this.$MessengerConversation3=y.getScrollTop()}};v.prototype.componentDidUpdate=function(y){if(c("JSReliabilityFixesGatingConfig").should_get_fix&&!this.refs)return;if(!this.refs.scrollable)return;if(this.props.threadID!==y.threadID||x(y,this.props)){this.scrollToBottom();this.$MessengerConversation15()}else{var z=this.$MessengerConversation14();if(z){var A=z.getScrollHeight();if(A!==this.$MessengerConversation2){var B=z.getScrollHeight()-this.$MessengerConversation2+this.$MessengerConversation3;this.refs.scrollable.scrollToPosition(B)}else this.$MessengerConversation15()}}if(this.props.messages!==y.messages){this.$MessengerConversation11();if(this.state.scrollingToUnreadMessage)this.$MessengerConversation16();c("MessengerVideoAutoplayActions").updateStore(this.props.threadID,this.$MessengerConversation17())}setTimeout(function(){var C=this.$MessengerConversation14();this.trackBottomIfRequired();if(C&&this.state.unreadCount&&!this.state.scrollingToUnreadMessage&&!this.props.isLoading)if(this.$MessengerConversation18(C))this.setState({showUnreadNotice:false,unreadCount:0});else this.setState({showUnreadNotice:true});this.$MessengerConversation10()}.bind(this),0)};v.prototype.render=function(){if(this.props.isLoading&&this.props.messages.isEmpty())return this.$MessengerConversation19();var y=this.props.messages.last(),z=c("MercuryIDs").getParticipantIDFromUserID(this.props.viewer),A=null,B=null,C=this.state.suggestions||{},D=C.quickReplies,E=C.agentSuggestions;if(!D||!D.length)D=this.$MessengerConversation20(y);if(D&&D.length&&y.author!==z){A=D;B=c("MNOmniMConstants").QUICKREPLIES}else if(E&&E.length&&c("MercuryConfig").EnableOmniM){A=E;B=c("MNOmniMConstants").OMNIM}var F=A&&A.length&&A.filter(function(O){return!O.dismissed}).length?c("React").createElement(c("BootloadOnRender.react"),{component:c("React").createElement(c("LazyComponent.react"),{options:A,threadID:y.thread_id,onVoiceClipCreate:this.props.onVoiceClipCreate,source:B,viewer:this.props.viewer,quickCamOriginLocation:c("MessengerQuickCamOrigins").MESSENGER,omniMPrefs:this.state.omniMPrefs}),loader:c("JSResource")("MessengerBotsQuickReplyButtonList.react").__setRef("MessengerConversation.react"),placeholder:c("React").createElement("div",null)}):null,G=null;if(y&&y.message_source&&y.author!==z&&c("MercuryConfig").WebCamQuickReply){var H=y.message_source;if(H==="camera"){var I=this.props.thread?c("convertMIGColorToFIGColor")(this.props.thread.custom_color):null,J=c("React").createElement("div",{className:"_1gc5",style:I&&{color:I}},j._("Send a photo reply"));G=c("React").createElement("div",{className:"_1gc6"},c("React").createElement(c("MessengerQuickCamButtonHTML5.react"),{className:"_4rv5 _1gcb",location:c("MessengerQuickCamOrigins").MESSENGER,threadID:this.props.threadID,viewer:this.props.viewer,textChild:J}))}}var K=null,L=null;if(G||F){K=c("React").createElement("div",{className:"_51op"},c("React").createElement("div",{className:"_51oq",onResize:this.handleResize}));L=c("React").createElement("div",{ref:"quickReply"},c("React").createElement("div",{className:"_1mzb",onResize:this.handleResize},G,F))}var M=j._("Messages"),N=j._("Load more...");return c("React").createElement(c("MessengerFlexScrollableArea.react"),{className:this.props.className,flexChildren:this.$MessengerConversation21(),footerChildren:L,onMount:function(){return c("setImmediate")(this.$MessengerConversation11)}.bind(this),onScroll:this.props.useManualFetch?undefined:this.$MessengerConversation5,ref:"scrollable",shouldStickToBottom:true,tabIndex:0,useScrollProtection:c("MessengerConfig").ChatScrollInterval},c("React").createElement("div",{"aria-label":M,className:c("joinClasses")("__i_",this.props.innerClassName),role:"region"},c("React").createElement("h3",{className:"accessible_elem"},M),this.$MessengerConversation22(),this.props.useManualFetch&&!this.props.upExhausted?c("React").createElement(o,{className:"_41jf",label:N,onClick:function(){return this.props.fetchMessages(c("WebMessengerConstants").MORE_SEARCH_CONTEXT_UP)}.bind(this),type:"primary",use:"default"}):null,this.$MessengerConversation23(),c("React").createElement(c("MessageList.react"),{DateBreak:c("MessengerDateBreak.react"),deliveryTimestamp:this.state.deliveryTimestamp,isCanonical:this.props.isCanonical,LogMessage:c("MessengerBootloadedLogMessage.react"),CollapsedLogMessageGroup:c("MessengerCollapsedLogMessageGroup.react"),MessageGroup:c("MessengerMessageGroup.react"),messages:this.props.messages,onAttachmentLoad:this.$MessengerConversation24(this.props.threadID),readReceipts:this.state.readReceipts,ref:"messageList",location:c("MercuryShareAttachmentRenderLocations").MESSENGER,viewer:this.props.viewer,thread:this.props.thread}),this.props.useManualFetch&&!this.props.downExhausted?c("React").createElement(o,{className:"_41jf",label:N,onClick:function(){return this.props.fetchMessages(c("WebMessengerConstants").MORE_SEARCH_CONTEXT_DOWN)}.bind(this),type:"primary",use:"default"}):null,c("React").createElement(c("ChatTypingIndicators.react"),{indicatorClass:c("MessengerTypingIndicator.react"),indicatorsDidShow:function(){this.trackBottomIfRequired()}.bind(this),rootClassName:"clearfix _17pz",threadID:this.props.threadID,viewer:this.props.viewer}),K))};v.prototype.$MessengerConversation20=function(y){var z=null,A=y&&y.platform_xmd&&JSON.parse(y.platform_xmd),B=A&&A.message_classification===c("MessengerPlatformSubscriptionMessageClassification").AD_MESSAGE;if(B)z=A&&A.quick_replies;return z};v.prototype.$MessengerConversation10=function(){if(this.props.useManualFetch)return;var y=this.$MessengerConversation14();if(y&&y.getScrollTop()<s){this.props.fetchMessages(c("WebMessengerConstants").MORE_SEARCH_CONTEXT_UP);c("MessengerVideoAutoplayActions").updateStore(this.props.threadID,this.$MessengerConversation17())}};v.prototype.isScrolledToBottom=function(){return!!(this.refs.scrollable&&this.refs.scrollable.isScrolledToBottom())};v.prototype.isScrolledToBottomWithHeight=function(y){return!!(this.refs.scrollable&&this.refs.scrollable.isScrolledToBottomWithHeight(y))};v.prototype.$MessengerConversation21=function(){return c("React").createElement(p,{isOpen:this.state.showUnreadNotice,label:j._({"*":"{number} unread messages","_1":"1 unread message"},[j.plural(this.state.unreadCount,"number")]),onClick:this.$MessengerConversation25})};v.prototype.$MessengerConversation22=function(){if(!this.props.isLoaded)return null;return c("React").createElement(c("MessengerContextBannerContainer.react"),{location:c("MercuryShareAttachmentRenderLocations").MESSENGER,threadID:this.props.threadID,viewer:this.props.viewer})};v.prototype.$MessengerConversation23=function(){if(this.props.isLoaded)return null;return c("React").createElement("div",{className:"_2k8v"},this.props.isLoading?c("React").createElement(c("MessengerSpinner.react"),null):null)};v.prototype.$MessengerConversation19=function(){return c("React").createElement("div",{className:"_4xu0"},c("React").createElement(c("MessengerSpinner.react"),{className:"_4xu1",size:c("MessengerSpinner.react").large_size}))};v.prototype.trackBottomIfRequired=function(){if(c("JSReliabilityFixesGatingConfig").should_get_fix&&!this.refs)return;this.refs.scrollable&&this.refs.scrollable.trackBottomIfRequired()};v.prototype.scrollToBottom=function(){if(c("JSReliabilityFixesGatingConfig").should_get_fix&&!this.refs)return;this.refs.scrollable&&this.refs.scrollable.scrollToBottom()};v.prototype.scrollToTop=function(y){if(c("JSReliabilityFixesGatingConfig").should_get_fix&&!this.refs)return;this.refs.scrollable&&this.refs.scrollable.scrollToTop(y)};v.prototype.$MessengerConversation24=function(y){return function(){if(this.props.threadID!==y)return;this.trackBottomIfRequired()}.bind(this)};v.prototype.$MessengerConversation15=function(){c("DOM").scry(c("ReactDOM").findDOMNode(this),"img").forEach(function(y){if(y.complete)return;var z=this.props.threadID,A=c("Event").listen(y,"load",function(){if(this.props.threadID===z)this.trackBottomIfRequired();A.remove()}.bind(this))}.bind(this))};v.prototype.$MessengerConversation27=function(){var y=this.props.messages,z=this.state.unreadCount;if(!z||z>y.size)return null;return y.get(y.size-z)};v.prototype.$MessengerConversation18=function(y){var z=this.$MessengerConversation27();if(!z)return false;var A=this.refs.messageList.getMessageElement(z.message_id);if(!A)return false;var B=A.getBoundingClientRect().top,C=y.getElement().getBoundingClientRect().top;if(B-C<0)return false;return true};v.prototype.$MessengerConversation28=function(y){return!!this.props.messages.find(function(z){return z.message_id===y})};v.prototype.$MessengerConversation16=function(){if(!this.state.unreadCount)return;this.setState({scrollingToUnreadMessage:true});var y=this.$MessengerConversation27();if(!y){this.scrollToTop(false);return}this.$MessengerConversation29(y.message_id,function(){this.setState({scrollingToUnreadMessage:false,unreadCount:0})}.bind(this))};v.prototype.$MessengerConversation29=function(y,z){var A=this.refs.messageList.getMessageElement(y,true),B=this.$MessengerConversation14();if(!A||!B)return;var C=A.getBoundingClientRect().top,D=c("ReactDOM").findDOMNode(this.refs.messageList).getBoundingClientRect().top,E=B.getElement().getBoundingClientRect().top,F=C+Math.abs(D)+E;B.setScrollTop(F,true,{callback:z})};v.prototype.$MessengerConversation14=function(){if(c("JSReliabilityFixesGatingConfig").should_get_fix&&!this.refs)return;return this.refs.scrollable&&this.refs.scrollable.getArea()};v.prototype.$MessengerConversation13=function(){this.$MessengerConversation4&&this.$MessengerConversation4.unsubscribe();this.$MessengerConversation4=null};v.prototype.$MessengerConversation17=function(){return this.props.messages.filter(function(y){return c("MessengerAttachmentRenderer").isSingleVideoAttachment(y)||c("MessengerAttachmentRenderer").isSharedVideoAttachmentMessage(y)}).reverse().map(function(y){return y.message_id})};v.prototype.$MessengerConversation26=function(y){var z=this.refs.messageList;if(!z||!y)return;var A=[],B=y.getElement().getBoundingClientRect(),C=c("MessengerVideoAutoplayStore").getMessageIDs(this.props.threadID),D=C||this.$MessengerConversation17()||c("immutable").List();D.map(function(E){var F=c("MessengerAttachmentRenderer").getVideoElem(E,z);if(F)A.push([E,F.getBoundingClientRect()])});if(A.length)c("MessengerVideoAutoplayActions").onScroll(this.props.threadID,C?null:D,c("immutable").Map(A),B)};v.propTypes={contact:r.instanceOf(c("ImmutableObject")),downExhausted:r.bool,fetchMessages:r.func.isRequired,innerClassName:r.string,isCanonical:r.bool,isLoaded:r.bool,isLoading:r.bool,messages:r.instanceOf(c("immutable").List).isRequired,onVoiceClipCreate:r.func,participants:r.instanceOf(c("immutable").Map),thread:r.object,threadID:r.string.isRequired,upExhausted:r.bool,useManualFetch:r.bool,viewer:r.string.isRequired};function w(y){var z=c("MercuryIDs").getParticipantIDFromUserID(y.viewer),A=n.getSeenTimestamps(y.threadID),B=new(c("Set"))(y.thread?y.thread.participants:A.keys());B["delete"](z);var C=null;c("immutable").Seq(y.messages).reverse().forEach(function(D){if(D.action_type!==c("MercuryActionType").LOG_MESSAGE){C=D;return false}return true});return A.withMutations(function(A){c("immutable").Seq(y.messages).reverse().forEach(function(D){if(B.size===0)return false;if(!B.has(D.author))return;A.update(D.author,function(E){var F=E;if(!E||E.watermark<=D.timestamp)F={watermark:D.timestamp,action:D.timestamp};if(C&&C.timestamp<F.watermark)F={watermark:C.timestamp,action:C.timestamp};return F});B["delete"](D.author)})})}function x(y,z){var A=c("MercuryIDs").getParticipantIDFromUserID(z.viewer);return z.threadID===y.threadID&&z.messages!==y.messages&&!z.messages.isEmpty()&&z.messages.last()!==y.messages.last()&&z.messages.last().author===A}f.exports=c("FluxContainer").create(v,{withProps:true})}),null);