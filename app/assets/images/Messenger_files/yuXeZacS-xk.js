if (self.CavalryLogger) { CavalryLogger.start_js(["fz8y8"]); }

__d("createMentionsSearchSourceFromParticipants",["fbt","ix","AtSignAllowEmptyMentionsStrategy","CapitalizedNameMentionsStrategy","DocumentCompositeMentionsSource","DocumentMentionsSource","FourLetterMentionsStrategy","LogHistory","SearchableEntry","StaticSearchSource","nullthrows"],(function a(b,c,d,e,f,g,h,i){"use strict";var j=c("LogHistory").getInstance("messenger_mentions"),k=i("91674").uri;function l(n,o,p,q){if(!n||!o||o.length<=2)return null;var r=o.reduce(function(t,u){if(!u||u.fbid===n)return t;var v=p&&p.custom_nickname&&p.custom_nickname[u.fbid]?p.custom_nickname[u.fbid]:"";t.push(new(c("SearchableEntry"))({uniqueID:u.fbid,title:"@"+u.name,subtitle:v,photo:u.image_src,keywordString:v}));return t},[]);if(q&&p&&p.thread_fbid)r.push(m(p.thread_fbid));var s=new(c("StaticSearchSource"))(r);j.debug("constructed_search_source",JSON.stringify({participants:o.map(function(t){return t&&t.fbid})}));return new(c("DocumentCompositeMentionsSource"))([new(c("DocumentMentionsSource"))(c("AtSignAllowEmptyMentionsStrategy"),s),new(c("DocumentMentionsSource"))(c("CapitalizedNameMentionsStrategy"),s),new(c("DocumentMentionsSource"))(c("FourLetterMentionsStrategy"),s)])}function m(n){var o=h._("everyone").toString(),p=h._("Mention everyone in this chat").toString();return new(c("SearchableEntry"))({photo:k,title:"@"+o,uniqueID:c("nullthrows")(n),subtitle:p})}f.exports=l}),null);