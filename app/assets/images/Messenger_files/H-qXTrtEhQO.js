if (self.CavalryLogger) { CavalryLogger.start_js(["lfsxr"]); }

__d("MessengerThreadSearchStore",["cx","immutable","ImmutableObject","MercuryIDs","MercuryMessages","MercurySearchContextResults","MercurySearchSnippetResults","MercuryThreads","MessengerContentSearchDataTypedLogger","MessengerDispatcher","MessengerStateStore","MessengerStore","MessengerActions","MessengerThreadSearchActions","MessengerView"],(function a(b,c,d,e,f,g,h){"use strict";var i,j,k=c("immutable").List,l=c("immutable").Record,m=l({downExhausted:null,loading:false,messages:null,query:null,results:k(),selectedIndex:0,threadID:null,totalCount:0,upExhausted:null,threads:null,threadsExhausted:null,mid:null});i=babelHelpers.inherits(n,c("MessengerStore"));j=i&&i.prototype;function n(){j.constructor.call(this);this.$MessengerThreadSearchStore3=new m()}n.prototype.getForFBID=function(o){this.$MessengerThreadSearchStore4=new(c("MercurySearchSnippetResults"))(o);this.$MessengerThreadSearchStore1=c("MercuryMessages").getForFBID(o);this.$MessengerThreadSearchStore2=c("MercuryThreads").getForFBID(o)};n.prototype.getState=function(){return this.$MessengerThreadSearchStore3};n.prototype.__onDispatch=function(o){if(!this.$MessengerThreadSearchStore4)return;c("MessengerDispatcher").waitFor([c("MessengerStateStore").getDispatchToken()]);var p=c("MessengerStateStore").getState(),q=p.activeThreadID,r=p.masterView,s=p.mid,t=p.query,u=r===c("MessengerView").MASTER.SEARCH;switch(o.type){case c("MessengerActions").Types.REPLACE_STATE:if(s!=this.$MessengerThreadSearchStore3.mid&&q!=this.$MessengerThreadSearchStore3.activeThreadID){if(s&&q){this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.merge({threadID:q,mid:s});c("MercurySearchContextResults").getSearchContext(this.$MessengerThreadSearchStore5(),this.$MessengerThreadSearchStore3.threadID,function(y){return this.setMessages(y)}.bind(this))}else this.$MessengerThreadSearchStore3=new m();return}else if(this.$MessengerThreadSearchStore3.query!==t||this.$MessengerThreadSearchStore3.threadID!==q){if(t&&!s){this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.set("loading",true);this.$MessengerThreadSearchStore4.getSingleThreadSearchResults(t,q,function(){for(var y=arguments.length,z=Array(y),A=0;A<y;A++)z[A]=arguments[A];return this.accumulateSearchResultsAndEmitChange.apply(this,[t,q,0].concat(z))}.bind(this))}else{if(this.$MessengerThreadSearchStore3.query&&this.$MessengerThreadSearchStore3.results.size===0)this.logCurrentResult(null,"no_results_found","single_thread_search");var v=this.$MessengerThreadSearchStore3.results.get(this.$MessengerThreadSearchStore3.selectedIndex);if(v!==undefined)this.logCurrentResult(v.toObject(),"search_ended","single_thread_search");this.$MessengerThreadSearchStore6()}if(u){this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.set("loading",true);if(t!==this.$MessengerThreadSearchStore3.query)this.$MessengerThreadSearchStore4.getAllThreadSearchResults(t,function(y,z){return this.setAllThreadResults(y,z)}.bind(this));else this.$MessengerThreadSearchStore4.getAllLocalThreadSearchResults(t,function(y,z){return this.setAllThreadResults(y,z)}.bind(this))}else this.$MessengerThreadSearchStore7();this.emitChange()}break;case c("MessengerThreadSearchActions").Types.CHANGE_RESULT_INDEX:var w=Math.max(Math.min(this.$MessengerThreadSearchStore3.totalCount-1,this.$MessengerThreadSearchStore3.selectedIndex+o.delta),0);if(w===this.$MessengerThreadSearchStore3.selectedIndex)break;if(w>=this.$MessengerThreadSearchStore3.results.size){this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.set("loading",true);this.$MessengerThreadSearchStore4.getSingleThreadSearchMoreResults(t,q,function(){for(var y=arguments.length,z=Array(y),A=0;A<y;A++)z[A]=arguments[A];return this.accumulateSearchResultsAndEmitChange.apply(this,[t,q,w].concat(z))}.bind(this))}else{this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.merge({loading:true,selectedIndex:w});c("MercurySearchContextResults").getSearchContext(this.$MessengerThreadSearchStore5(),this.$MessengerThreadSearchStore3.threadID,function(y){return this.setMessages(y)}.bind(this))}this.emitChange();var x=this.$MessengerThreadSearchStore3.results.get(w).toObject();this.logCurrentResult(x,"result_loaded","single_thread_search");break;case c("MessengerThreadSearchActions").Types.GET_MORE_CONTEXT:this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.set("loading",true);c("MercurySearchContextResults").getMoreSearchContext(this.$MessengerThreadSearchStore5(),this.$MessengerThreadSearchStore3.threadID,o.direction,function(y){return this.setMessages(y)}.bind(this));this.emitChange();break;case c("MessengerThreadSearchActions").Types.GET_MORE_THREADS:this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.set("loading",true);this.$MessengerThreadSearchStore4.getAllThreadSearchMoreResults(t,function(y,z){return this.setAllThreadResults(y,z)}.bind(this));this.emitChange();break}};n.prototype.logCurrentResult=function(o,p,q){var r=new(c("MessengerContentSearchDataTypedLogger"))().setSearchTerm(this.$MessengerThreadSearchStore3.query).setThreadFbid(c("MercuryIDs").getThreadFBIDFromThreadID(this.$MessengerThreadSearchStore3.threadID)).setNumResults(this.$MessengerThreadSearchStore3.results.size).setSearchOutcome(p).setSearchType(q);if(o!==undefined&&o!==null)r.setMessageID(o.message_id).setMessageTimestamp(o.timestamp).setResultIndex(this.$MessengerThreadSearchStore3.selectedIndex+1);r.log()};n.prototype.setAllThreadResults=function(o,p){var q=Object.keys(o),r=q.map(function(s){var t=this.$MessengerThreadSearchStore2.getThreadMetaNow(s);if(!t)return;var u=o[t.thread_id];if(!u)return;return new(c("ImmutableObject"))(babelHelpers["extends"]({},t,{snippetCount:u.num_total_snippets}))}.bind(this)).filter(function(s){return s});this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.merge({threads:r,threadsExhausted:p,loading:false});this.emitChange()};n.prototype.$MessengerThreadSearchStore7=function(){this.$MessengerThreadSearchStore8(["threads","threadsExhausted","loading"])};n.prototype.accumulateSearchResultsAndEmitChange=function(o,p,q,r,s){this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.merge({query:o,threadID:p,selectedIndex:q,results:r,totalCount:s});if(this.$MessengerThreadSearchStore3.results.size){c("MercurySearchContextResults").getSearchContext(this.$MessengerThreadSearchStore5(),this.$MessengerThreadSearchStore3.threadID,function(r){return this.setMessages(r)}.bind(this));var t=this.$MessengerThreadSearchStore3.results.get(this.$MessengerThreadSearchStore3.selectedIndex);this.logCurrentResult(t.toObject(),"search_started","single_thread_search")}else this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.merge({messages:null});this.emitChange()};n.prototype.$MessengerThreadSearchStore6=function(){this.$MessengerThreadSearchStore8(["query","threadID","selectedIndex","results","totalCount","downExhausted","loading","messages","upExhausted"])};n.prototype.$MessengerThreadSearchStore8=function(o){this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.withMutations(function(p){o.forEach(function(q){return p.remove(q)})})};n.prototype.setMessages=function(o){var p=this.$MessengerThreadSearchStore1.getMessagesFromIDs([].concat(o.up_message_ids,o.message_id,o.down_message_ids)).map(function(q){var r,s=this;if(q&&q.message_id===o.message_id)if(!this.$MessengerThreadSearchStore3.results.isEmpty()){var r=function(){var t=s.$MessengerThreadSearchStore3.results.get(s.$MessengerThreadSearchStore3.selectedIndex).toJS(),u=t.matched_keywords,v=q.body.indexOf(t.body),w=Object.keys(t.matched_keywords).map(function(x){return{offset:v+Number(x),length:u[x].length,entity:{url:""},className:"__in"}});return{v:new(c("ImmutableObject"))(babelHelpers["extends"]({},q,{ranges:q.ranges?q.ranges.concat(w):w}))}}();if(typeof r==="object")return r.v}else return new(c("ImmutableObject"))(babelHelpers["extends"]({},q,{isSelected:true}));return q}.bind(this));this.$MessengerThreadSearchStore3=this.$MessengerThreadSearchStore3.merge({downExhausted:o.down_exhausted,loading:false,messages:p,upExhausted:o.up_exhausted});this.emitChange()};n.prototype.$MessengerThreadSearchStore5=function(){return this.$MessengerThreadSearchStore3.mid||this.$MessengerThreadSearchStore3.results.getIn([this.$MessengerThreadSearchStore3.selectedIndex,"message_id"])};f.exports=new n()}),null);