if (self.CavalryLogger) { CavalryLogger.start_js(["H020k"]); }

__d("MercurySyncReadReceiptTransformer",[],(function a(b,c,d,e,f,g){"use strict";function h(i){var j={watermark:parseInt(i.watermarkTimestampMs,10),action:parseInt(i.actionTimestampMs,10)},k=i.threadKey.otherUserFbId||i.actorFbId,l=i.threadKey.otherUserFbId||i.threadKey.threadFbId,m={roger:{}};m.roger[l]={};m.roger[l][k]=j;return m}f.exports={transform:h}}),null);