if (self.CavalryLogger) { CavalryLogger.start_js(["MD0Ig"]); }

__d("SearchI18nArabic",[],(function a(b,c,d,e,f,g){"use strict";var h=/[\u0600-\u06FF]/;function i(o){return h.test(o)}var j={1570:1575,1571:1575,1573:1575,1649:1575,1609:1610,1577:1607,1572:1569,1574:1569},k=[1600,1611,1612,1613,1614,1615,1616,1617,1618];function l(o){return Object.prototype.hasOwnProperty.call(j,o)?String.fromCharCode(j[o]):k.indexOf(o)!=-1?"":String.fromCharCode(o)}function m(o){if(!i(o))return o;var p=[];for(var q=0;q<o.length;q++){var r=o.charCodeAt(q);p.push(l(r))}return p.join("")}var n={hasArabicCharacters:i,normalizeCharCode:l,arabicNormalization:m};f.exports=n}),null);