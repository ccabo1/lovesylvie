if (self.CavalryLogger) { CavalryLogger.start_js(["OdGNy"]); }

__d("MercuryReadOnlyReason",["fbt","Link.react","MercuryConfig","React","URI"],(function a(b,c,d,e,f,g,h){"use strict";var i={getReason:function j(){var k=arguments.length<=0||arguments[0]===undefined?false:arguments[0];if(k){var l=c("MercuryConfig").DYIDeepLink;return h._("Sorry, this conversation isn't active anymore because messages can no longer be sent to email addresses. After May 1st 2016, conversations with email addresses will only be available in a copy of your Facebook data. {download your information}",[h.param("download your information",c("React").createElement("a",{href:l},h._("Learn More")))])}else if(c("MercuryConfig").ViewerIsReadOnly)return h._("You're temporarily blocked from sending messages. {learn more about blocks}",[h.param("learn more about blocks",c("React").createElement(c("Link.react"),{href:new(c("URI"))("https://www.facebook.com/help/181183045316843"),target:"_blank"},"Learn more"))]);else if(c("MercuryConfig").ColdOpenBlock)return h._("You're temporarily blocked from starting new conversations. {learn more about blocks}",[h.param("learn more about blocks",c("React").createElement(c("Link.react"),{href:new(c("URI"))("https://www.facebook.com/help/181183045316843"),target:"_blank"},"Learn more"))]);else return h._("You cannot reply to this conversation.")}};f.exports=i}),null);