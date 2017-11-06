if (self.CavalryLogger) { CavalryLogger.start_js(["Ft+yA"]); }

__d("ContextualLayerAutoFlip",["ContextualLayerDimensions","DOMDimensions","Vector","Rect","getDocumentScrollElement"],(function a(b,c,d,e,f,g){function h(j,k){k=new(c("Rect"))(k).convertTo(j.domain);var l=Math.max(j.l,k.l),m=Math.min(j.r,k.r);return Math.max(m-l,0)}function i(j){"use strict";this._layer=j}i.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe("adjust",this._adjustOrientation.bind(this));if(this._layer.isShown())this._layer.updatePosition()};i.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;if(this._layer.isShown())this._layer.updatePosition()};i.prototype._adjustOrientation=function(j,k){"use strict";var l=this.getValidPositions(k);if(!l.length){k.invalidate();return}var m=c("ContextualLayerDimensions").getViewportRect(this._layer),n=this._getValidAlignments(k),o,p,q;for(o=0;o<n.length;o++){k.setAlignment(n[o]);for(p=0;p<l.length;p++){k.setPosition(l[p]);q=c("ContextualLayerDimensions").getLayerRect(this._layer,k);if(m.contains(q))return}}var r=-1;if(k.getPreferMoreContentShownRect()){var s=c("DOMDimensions").getDocumentDimensions(),t=new(c("Rect"))(m).convertTo("document"),u=99999;for(p=0;p<l.length;p++){k.setPosition(l[p]);q=c("ContextualLayerDimensions").getLayerRect(this._layer,k);var v=new(c("Rect"))(q).convertTo("document");if(v.l>=0&&v.r<=s.width&&v.t>=43&&v.b<=s.height){var w=t.l-v.l,x=v.r-t.r,y=t.t-v.t,z=v.b-t.b,A=(w>0?w:0)+(x>0?x:0)+(y>0?y:0)+(z>0?z:0);if(A<u){r=p;u=A}}}}if(r>=0)k.setPosition(l[r]);else k.setPosition(l.includes("below")?"below":l[0]);var B,C=0,D=0;for(o=0;o<n.length;o++){k.setAlignment(n[o]);q=c("ContextualLayerDimensions").getLayerRect(this._layer,k);B=h(m,q);if(B>D){D=B;C=o}}k.setAlignment(n[C])};i.prototype.getValidPositions=function(j){"use strict";var k=[j.getPosition(),j.getOppositePosition()],l=this._layer.getContextScrollParent();if(l===window||l===c("getDocumentScrollElement")())return k;var m=this._layer.getContext(),n=c("Vector").getElementPosition(l,"viewport").y,o=c("Vector").getElementPosition(m,"viewport").y;if(j.isVertical())return k.filter(function(q){if(q==="above")return o>=n;else{var p=n+l.offsetHeight,r=o+m.offsetHeight;return r<=p}});else{var p=n+l.offsetHeight;if(o>=n&&o+m.offsetHeight<=p)return k;else return[]}};i.prototype._getValidAlignments=function(j){"use strict";var k=["left","right","center"],l=j.getAlignment(),m=k.indexOf(l);if(m>0){k.splice(m,1);k.unshift(l)}return k};Object.assign(i.prototype,{_subscription:null});f.exports=i}),null);
__d("getInlineBoundingRect",["Rect"],(function a(b,c,d,e,f,g){function h(i,j){var k=i.getClientRects();if(!j||k.length===0)return c("Rect").getElementBounds(i);var l,m=false;for(var n=0;n<k.length;n++){var o=new(c("Rect"))(Math.round(k[n].top),Math.round(k[n].right),Math.round(k[n].bottom),Math.round(k[n].left),"viewport").convertTo("document"),p=o.getPositionVector(),q=p.add(o.getDimensionVector());if(!l||p.x<=l.l&&p.y>l.t){if(m)break;l=new(c("Rect"))(p.y,q.x,q.y,p.x,"document")}else{l.t=Math.min(l.t,p.y);l.b=Math.max(l.b,q.y);l.r=q.x}if(o.contains(j))m=true}if(!l)l=c("Rect").getElementBounds(i);return l}f.exports=h}),null);
__d("nl2br",["DOM"],(function a(b,c,d,e,f,g){var h=/(\r\n|[\r\n])/;function i(j){return j.split(h).map(function(k){return h.test(k)?c("DOM").create("br"):k})}f.exports=i}),null);
__d("Tooltip",["fbt","AsyncRequest","ContextualLayer","ContextualLayerAutoFlip","CSS","DOM","Event","Style","TooltipData","Vector","emptyFunction","getElementText","getInlineBoundingRect","getOrCreateDOMID","nl2br","setImmediate"],(function a(b,c,d,e,f,g,h){var i=null,j=null,k=null,l=null,m=null,n=null,o=[],p=[];function q(){if(!l){m=c("DOM").create("div",{className:"tooltipContent","data-testid":"tooltip_testid"});n=c("getOrCreateDOMID")(m);var u=c("DOM").create("i",{className:"arrow"}),v=c("DOM").create("div",{className:"uiTooltipX"},[m,u]);l=new(c("ContextualLayer"))({},v);l.shouldSetARIAProperties(false);l.enableBehavior(c("ContextualLayerAutoFlip"))}}function r(u,v){t._show(u,h._("Loading..."));new(c("AsyncRequest"))(v).setHandler(function(w){t._show(u,w.getPayload())}).setErrorHandler(c("emptyFunction")).send()}var s;c("Event").listen(document.documentElement,"mouseover",function(event){s=event;c("setImmediate")(function(){s=null})});var t=babelHelpers["extends"]({},c("TooltipData"),{isActive:function u(v){return v===i},process:function u(v,w){if(!c("DOM").contains(v,w))return;if(v!==i){t.fetchIfNecessary(v);var x=t._get(v);if(x.suppress)return;if(x.delay)t._showWithDelay(v,x.delay);else t.show(v)}},fetchIfNecessary:function u(v){var w=v.getAttribute("data-tooltip-uri");if(w){v.removeAttribute("data-tooltip-uri");r(v,w)}},hide:function u(){if(i){l.hide();i=null;while(o.length)o.pop().remove()}},_show:function u(v,w){t._store({context:v,content:w});t.isActive(v)&&t.show(v)},show:function u(v){var w=function w(){v.setAttribute("aria-describedby",n);l.show()},x=function x(){v.removeAttribute("aria-describedby");t.hide()},y=function y(H){if(!c("DOM").contains(i,H.getTarget()))x()};q();x();var z=t._get(v);if(z.suppress||t.allSuppressed)return;var A=z.content;if(z.overflowDisplay){if(v.offsetWidth>=v.scrollWidth)return;if(!A)A=c("getElementText")(v)}if(!A)return;var B=0,C=0;if(z.position==="left"||z.position==="right")C=(v.offsetHeight-28)/2;else if(z.alignH!=="center"){var D=v.offsetWidth;if(D<32)B=(D-32)/2*(z.alignH==="right"?-1:1)}l.setContextWithBounds(v,c("getInlineBoundingRect")(v,s&&c("Vector").getEventPosition(s))).setOffsetX(B).setOffsetY(C).setPosition(z.position).setAlignment(z.alignH);if(typeof A==="string"){c("CSS").addClass(l.getRoot(),"invisible_elem");var E=c("DOM").create("span",{},c("nl2br")(A)),F=c("DOM").create("div",{className:"tooltipText"},E);c("DOM").setContent(m,F);w();c("CSS").removeClass(l.getRoot(),"invisible_elem")}else{c("DOM").setContent(m,A);w()}o.push(c("Event").listen(document.documentElement,"mouseover",y),c("Event").listen(document.documentElement,"focusin",y));var G=c("Style").getScrollParent(v);if(G!==window)o.push(c("Event").listen(G,"scroll",x));if(!z.persistOnClick)o.push(c("Event").listen(v,"click",x));i=v},_showWithDelay:function u(v,w){if(v!==j)t._clearDelay();if(!k){var x=function x(y){if(!c("DOM").contains(j,y.getTarget()))t._clearDelay()};p.push(c("Event").listen(document.documentElement,"mouseover",x),c("Event").listen(document.documentElement,"focusin",x));j=v;k=setTimeout(function(){t._clearDelay();t.show(v)},w)}},_clearDelay:function u(){clearTimeout(k);j=null;k=null;while(p.length)p.pop().remove()}});c("Event").listen(window,"scroll",t.hide);f.exports=t}),null);