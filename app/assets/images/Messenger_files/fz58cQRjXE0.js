if (self.CavalryLogger) { CavalryLogger.start_js(["xR6Kf"]); }

__d("messengerInfoPanelSectionReact",["cx","fbt","React","utilsRe","bs_js_boolean","Link.react","ReasonReact","bs_js_primitive","bs_js_null_undefined","messengerMenuReact","MessengerMenu.react","messengerPopoverMenuReact","MessengerWebDriverTestIDs","customColorHighlightingReact"],(function a(b,c,d,e,f,g,h,i){"use strict";var j=c("ReasonReact").statelessComponent("MessengerInfoPanelSectionReact");function k(o,p){var q=c("utilsRe").isSomeTrue(o),r=q!==0?i._("Show section"):i._("Hide section");return c("ReasonReact").element(0,0,c("messengerMenuReact").Menu[0](c("React").createElement(c("MessengerMenu.react").Item,{"data-testid":c("MessengerWebDriverTestIDs").INFO_PANEL_TOGGLER_OPTION,label:r,onclick:c("bs_js_null_undefined").from_opt(p)},r)))}function l(o,p,q,r){var s=c("utilsRe").isSomeTrue(o);if(s!==0)return c("ReasonReact").element(0,0,c("messengerPopoverMenuReact").make(0,0,k(p,q),0,0,c("React").createElement(c("Link.react"),{"aria-haspopup":1,"aria-label":i._("Info panel options for {sectionName}",[i.param("sectionName",r)]),className:"_1lj1",role:"button"})));else return null}function m(o,p,q,r,s,t){var u=j.slice();u[9]=function(){var v;if(s){var w=s[0];v=c("React").createElement("h4",{className:"_1lj0"},w,l(p,q,r,w))}else v=null;return c("React").createElement("div",{className:"_1lix"+(c("bs_js_boolean").to_js_boolean(c("utilsRe").isSomeTrue(p))?" _1liy":"")+(c("bs_js_boolean").to_js_boolean(c("utilsRe").isSomeTrue(p)&&c("utilsRe").isSomeTrue(q))?" _1liz":"")},c("React").createElement("div",{className:"_1li-"}),v,c("React").createElement("div",{className:"_1li_"},c("ReasonReact").element(0,0,c("customColorHighlightingReact").make(o,t))))};return u}var n=c("ReasonReact").wrapReasonForJs(j,function(o){return m(c("bs_js_primitive").null_undefined_to_opt(o.customColor),c("utilsRe").nullUndefinedBooleanToOptionBool(o.isCollapsible),c("utilsRe").nullUndefinedBooleanToOptionBool(o.isCollapsed),c("bs_js_primitive").null_undefined_to_opt(o.onToggle),c("bs_js_primitive").null_undefined_to_opt(o.title),o.children)});g.component=j;g.renderMenu=k;g.renderToggle=l;g.make=m;g.jsComponent=n}),null);