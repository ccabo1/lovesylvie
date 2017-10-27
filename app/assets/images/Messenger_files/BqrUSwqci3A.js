if (self.CavalryLogger) { CavalryLogger.start_js(["gDwi8"]); }

__d("AvailableList",["Arbiter","ArbiterMixin","AsyncRequest","AvailableListConstants","BanzaiODS","Bootloader","ChannelConstants","ChatConfig","ChatDispatcher","ChatproxyPresence","ChatReliabilityInstrumentation","ChatVisibility","CurrentUser","FBID","ErrorUtils","JSLogger","LastActiveTimes","PresencePrivacy","PresenceStatus","PresenceStatusActionTypes","Run","ServerTime","TypingStates","debounceAcrossTransitions","emptyFunction","requireWeak"],(function a(b,c,d,e,f,g){"use strict";c("BanzaiODS").setEntitySample("presence",1e-4);var h=babelHelpers["extends"]({},c("AvailableListConstants"),c("ArbiterMixin")),i=/\D/;h.subscribe([c("AvailableListConstants").ON_AVAILABILITY_CHANGED,c("AvailableListConstants").ON_UPDATE_ERROR],function(p,q){c("Arbiter").inform(p,q)});c("PresenceStatus").subscribe("change",c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED)},0));var j=c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED);c("ChatDispatcher").dispatch({type:c("PresenceStatusActionTypes").AVAILABILITY_CHANGED})},0);function k(q,r,s,t,u){if(q===c("CurrentUser").getID())return;var v=c("PresenceStatus").set(q,r,s,t,u);if(v){var w=c("debounceAcrossTransitions")(function(){h.inform(c("AvailableListConstants").ON_AVAILABILITY_CHANGED,q);c("ChatDispatcher").dispatch({type:c("PresenceStatusActionTypes").AVAILABILITY_CHANGED,id:q})},0);w()}}function l(q){var r=q.payload.availability||{};for(var s in r)k(s&&s.toString(),r[s].a,true,"mercury_tabs",r[s].c)}function m(q){if(!q||q==="0"||i.test(q)){c("ChatReliabilityInstrumentation").logERROR("bad id for available list: "+q);return}new(c("AsyncRequest"))("/ajax/mercury/tabs_presence.php").setData({target_id:q}).setHandler(l).setErrorHandler(c("emptyFunction")).setAllowCrossPageTransition(true).send()}function n(q,r){r.chat_config=c("ChatConfig").getDebugInfo();r.available_list_debug_info={count:c("PresenceStatus").getOnlineIDs().length}}var o=undefined;try{o=new(c("ChatproxyPresence"))(function(event){h.inform(event)});o.subscribe()}catch(p){c("ErrorUtils").reportError&&c("ErrorUtils").reportError(p,false);c("ChatReliabilityInstrumentation").logERROR(p.getMessage())}Object.assign(h,{getChatproxyPresenceObject:function q(){return o},get:function q(r){return c("PresenceStatus").get(r)},updateForID:function q(r){if(c("ChatConfig").get("presence_page_green_dot_sub")&&!c("FBID").isUser(r))return;m(r);if(c("PresencePrivacy").getVisibility()==c("PresencePrivacy").ONLINE)c("Run").onAfterLoad(function(){return c("Bootloader").loadModules(["ChannelManager","ChannelTransport"],function(s,t){s.startChannelManager();t.sendAdditionalBuddyRequest(s.getCompleteConfig(),r)},"AvailableList")})},getWebChatNotification:function q(){return o&&o.getWebChatNotification()},isReady:function q(){return!!o},set:function q(r,s,t,u){k(r,s,true,t,u)}});c("Arbiter").subscribe(c("JSLogger").DUMP_EVENT,n);c("PresencePrivacy").subscribe(["privacy-changed","privacy-availability-changed","privacy-user-presence-response"],j);c("requireWeak")("ChannelConnection",function(q){return q.subscribe([q.CONNECTED,q.RECONNECTING,q.SHUTDOWN,q.MUTE_WARNING,q.UNMUTE_WARNING],j)});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("buddylist_overlay"),function(q,r){var s={},t=r.obj.overlay;for(var u in t){h.set(u,t[u].a,t[u].s||"channel",t[u].vc);if(t[u].la)s[u]=t[u].la}c("LastActiveTimes").update(s)});c("Arbiter").subscribe([c("ChannelConstants").getArbiterType("typ"),c("ChannelConstants").getArbiterType("ttyp")],function(q,r){var s=r.obj;if(s.st===c("TypingStates").TYPING){var t=s.from;if(c("ChatVisibility").isOnline()){c("BanzaiODS").bumpEntityKey("presence","stale_presence_check_typing");var u=c("PresenceStatus").get(t);if(u!=c("AvailableListConstants").ACTIVE){var v=c("LastActiveTimes").get(t)*1e3,w=c("ServerTime").get();if(!v)c("BanzaiODS").bumpEntityKey("presence","no_detailed_presence_typing");else if(w-v>5*60*1e3){var x="stale_presence_typing",y=w-v;if(y<10*60*1e3)x+="600";else if(y<60*60*1e3)x+="3600";c("BanzaiODS").bumpEntityKey("presence",x)}}}h.set(t&&t.toString(),c("AvailableListConstants").ACTIVE,"channel-typing")}});c("Arbiter").subscribe(c("ChannelConstants").getArbiterType("messaging"),function(q,r){if(!c("ChatVisibility").isOnline())return;var s=r.obj;if(s.message&&s.message.timestamp&&s.message.sender_fbid){var t=c("ServerTime").get(),u=s.message.timestamp;if(t-u<2*60*1e3){c("BanzaiODS").bumpEntityKey("presence","stale_presence_check");var v=s.message.sender_fbid,w=c("PresenceStatus").get(v);if(w==c("AvailableListConstants").ACTIVE)return;var x=c("LastActiveTimes").get(v)*1e3;if(!x)c("BanzaiODS").bumpEntityKey("presence","no_detailed_presence");else if(u-x>5*60*1e3){var y="stale_presence",z=u-x;if(z<10*60*1e3)y+="600";else if(z<60*60*1e3)y+="3600";c("BanzaiODS").bumpEntityKey("presence",y)}}}});f.exports=h}),null);