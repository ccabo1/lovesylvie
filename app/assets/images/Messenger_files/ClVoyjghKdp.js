if (self.CavalryLogger) { CavalryLogger.start_js(["WBgy3"]); }

__d("applyMessengerEmoticonToContentState",["EmoticonEmojiList","applyMessengerEmoticonToContentBlock","getTextAfterNearestEntity"],(function a(b,c,d,e,f,g){"use strict";function h(i,j){var k=j.getAnchorKey(),l=j.getAnchorOffset(),m=i.getBlockForKey(k),n=c("getTextAfterNearestEntity")(m,l),o=c("EmoticonEmojiList").regexp.exec(n);if(!o)return i;var p=o[1];if(!p&&l!==n.length)return i;var q=o[2],r=l-n.length,s=r+o.index+o[1].length,t=i.getBlockMap().set(k,c("applyMessengerEmoticonToContentBlock")(i,m,q,s));l-=q.length-1;return i.merge({blockMap:t,selectionBefore:j,selectionAfter:j.merge({anchorOffset:l,focusOffset:l})})}f.exports=h}),null);