if (self.CavalryLogger) { CavalryLogger.start_js(["6n8Dp"]); }

__d("handleSoftNewlineForMessengerEmoticon",["DraftModifier","EditorState","applyMessengerEmoticonToContentState"],(function a(b,c,d,e,f,g){"use strict";function h(i){var j=i.getCurrentContent(),k=i.getSelection(),l=c("applyMessengerEmoticonToContentState")(j,k),m=c("DraftModifier").splitBlock(l,j===l?k:l.getSelectionAfter());return c("EditorState").push(i,m,"split-block")}f.exports=h}),null);