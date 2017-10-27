if (self.CavalryLogger) { CavalryLogger.start_js(["V4q76"]); }

__d("XHPTemplate",["DataStore","DOM","HTML","XHPTemplateProcessor"],(function a(b,c,d,e,f,g){var h=c("XHPTemplateProcessor").processor;function i(k){"use strict";if(h instanceof Function)k=h(k);this._model=k}i.prototype.render=function(){"use strict";if(c("HTML").isHTML(this._model))this._model=c("DOM").setContent(document.createDocumentFragment(),this._model)[0];return this._model.cloneNode(true)};i.prototype.build=function(){"use strict";return new j(this.render())};i.getNode=function(k,l){"use strict";return i.getNodes(k)[l]};i.getNodes=function(k){"use strict";var l=c("DataStore").get(k,"XHPTemplate:nodes");if(!l){l={};var m=c("DOM").scry(k,"[data-jsid]");m.push(k);var n=m.length;while(n--){var o=m[n];l[o.getAttribute("data-jsid")]=o;o.removeAttribute("data-jsid")}c("DataStore").set(k,"XHPTemplate:nodes",l)}return l};function j(k){"use strict";this._root=k;this._populateNodes()}j.prototype._populateNodes=function(){"use strict";this._nodes={};this._leaves={};var k=this._root.getElementsByTagName("*");for(var l=0,m=k.length;l<m;l++){var n=k[l],o=n.getAttribute("data-jsid");if(o){n.removeAttribute("data-jsid");this._nodes[o]=n;this._leaves[o]=!n.childNodes.length}}};j.prototype.getRoot=function(){"use strict";return this._root};j.prototype.getNode=function(k){"use strict";return this._nodes[k]};j.prototype.setNodeProperty=function(k,l,m){"use strict";this.getNode(k)[l]=m;return this};j.prototype.setNodeContent=function(k,l){"use strict";if(!this._leaves[k])throw new Error("Can't setContent on non-leaf node: "+k);c("DOM").setContent(this.getNode(k),l);return this};f.exports=i}),null);