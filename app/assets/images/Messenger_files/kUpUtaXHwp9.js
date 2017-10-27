if (self.CavalryLogger) { CavalryLogger.start_js(["IagG6"]); }

__d("MercuryMessageStore",["MercuryAPIArgsSource","LogHistory","MercuryMessages","MercuryViewer","MercuryMessageList","SubscriptionsHandler","MercuryThreadInformer","MercuryThreadlistConstants","MercuryThreads","mixInEventEmitter","setImmediate","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g){"use strict";var h=c("MercuryThreads").get(),i=c("LogHistory").getInstance("mercury_message_store");function j(k,l,m){this.$MercuryMessageStore9=k;this.$MercuryMessageStore6=new(c("MercuryMessageList"))();this.$MercuryMessageStore4=m?c("MercuryMessages").getForFBID(m):c("MercuryMessages").get();this.$MercuryMessageStore2=1;this.$MercuryMessageStore1=null;this.$MercuryMessageStore5=0;this.$MercuryMessageStore3=l||c("MercuryThreadlistConstants").RECENT_MESSAGES_LIMIT;this.$MercuryMessageStore10=m?c("MercuryThreadInformer").getForFBID(m):c("MercuryThreadInformer").get();this.$MercuryMessageStore8=new(c("SubscriptionsHandler"))();this.$MercuryMessageStore8.addSubscriptions(this.$MercuryMessageStore10.subscribe("messages-received",function(n,o){return this.$MercuryMessageStore11(o)}.bind(this)),this.$MercuryMessageStore10.subscribe("messages-updated",function(n,o){return o[this.$MercuryMessageStore9]&&this.$MercuryMessageStore12(o[this.$MercuryMessageStore9])}.bind(this)),this.$MercuryMessageStore10.subscribe("messages-reordered",function(n,o){return o[this.$MercuryMessageStore9]&&this.$MercuryMessageStore13()}.bind(this)),this.$MercuryMessageStore10.subscribe("thread-invalidated",function(n,o){return o[this.$MercuryMessageStore9]&&this.$MercuryMessageStore14()}.bind(this)));i.debug("constructed",JSON.stringify({threadID:this.$MercuryMessageStore9}));this.$MercuryMessageStore15()}j.prototype.setNewThreadID=function(k){this.$MercuryMessageStore7=k};j.prototype.destroy=function(){this.$MercuryMessageStore8&&this.$MercuryMessageStore8.release();i.debug("destroyed",JSON.stringify({threadID:this.$MercuryMessageStore9}))};j.prototype.subscribe=function(k){return this.addRetroactiveListener("updated",k)};j.prototype.fetchMoreMessages=function(){if(this.hasFetchedAll())return false;this.$MercuryMessageStore15();return true};j.prototype.hasFetchedAll=function(){if(this.$MercuryMessageStore4.hasLoadedExactlyNMessages(this.$MercuryMessageStore9,this.$MercuryMessageStore5)&&this.$MercuryMessageStore4.hasLoadedAllMessages(this.$MercuryMessageStore9))return true;return h.isNewEmptyLocalThread(this.$MercuryMessageStore9)};j.prototype.$MercuryMessageStore15=function(){var k=this.$MercuryMessageStore5+this.$MercuryMessageStore3*this.$MercuryMessageStore2;this.$MercuryMessageStore4.getThreadMessagesRange(this.$MercuryMessageStore9,0,k,this.$MercuryMessageStore16.bind(this),null,c("MercuryAPIArgsSource").MERCURY);if(this.$MercuryMessageStore2<10)this.$MercuryMessageStore2+=1;if(this.$MercuryMessageStore4.hasLoadedNMessages(this.$MercuryMessageStore9,k))c("setImmediate")(function(){this.$MercuryMessageStore13()}.bind(this))};j.prototype.$MercuryMessageStore16=function(k){if(k&&k.length){this.$MercuryMessageStore1=k[0].timestamp;this.$MercuryMessageStore5=k.length}else if(k&&!k.length&&!this.$MercuryMessageStore5)this.$MercuryMessageStore17(j.THREAD_IS_EMPTY)};j.prototype.$MercuryMessageStore11=function(k){var l=[],m=k[this.$MercuryMessageStore9];if(m&&m.length)l=l.concat(m.filter(function(p){return!!p}));if(this.$MercuryMessageStore7){var n=k[this.$MercuryMessageStore7];if(n&&n.length){l=l.concat(n.filter(function(p){return!!p}));this.$MercuryMessageStore7=null}}if(l.length){this.$MercuryMessageStore6.append(l);this.$MercuryMessageStore5+=l.length;var o=l.every(function(p){return p.author!=c("MercuryViewer").getID()});this.$MercuryMessageStore17(j.MESSAGES_RECEIVED,{allFromOthers:o})}};j.prototype.$MercuryMessageStore12=function(k){this.$MercuryMessageStore6.update(this.$MercuryMessageStore4.getMessagesFromIDs(Object.keys(k)));this.$MercuryMessageStore18();this.$MercuryMessageStore17(j.MESSAGES_CHANGED)};j.prototype.$MercuryMessageStore13=function(){if(!this.$MercuryMessageStore1)return;this.$MercuryMessageStore6.reorder(this.$MercuryMessageStore4.getThreadMessagesSinceTimestamp(this.$MercuryMessageStore9,this.$MercuryMessageStore1));this.$MercuryMessageStore18();this.$MercuryMessageStore17(j.MESSAGES_REORDERED)};j.prototype.$MercuryMessageStore14=function(){this.$MercuryMessageStore6=new(c("MercuryMessageList"))();this.$MercuryMessageStore2=1;this.$MercuryMessageStore1=null;this.$MercuryMessageStore5=0;this.$MercuryMessageStore15()};j.prototype.$MercuryMessageStore17=function(k,l){var m=this.$MercuryMessageStore6.toArray();this.releaseHeldEventType("updated");this.emitAndHold("updated",babelHelpers["extends"]({messages:m,eventType:k},l))};j.prototype.$MercuryMessageStore18=function(){var k=this.$MercuryMessageStore6.at(0);if(k)this.$MercuryMessageStore1=k.timestamp};Object.assign(j,{MESSAGES_FETCHED:"fetched",MESSAGES_CHANGED:"changed",MESSAGES_RECEIVED:"received",MESSAGES_REORDERED:"reordered",THREAD_IS_EMPTY:"thread-is-empty"});c("mixInEventEmitter")(j,{updated:true});f.exports=j}),null);