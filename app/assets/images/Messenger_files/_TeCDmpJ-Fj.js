if (self.CavalryLogger) { CavalryLogger.start_js(["A53Ha"]); }

__d("ChatSidebarSheetChatReconnectMsg.react",["fbt","ChannelConstants","Link.react","MessengerSpinner.react","React"],(function a(b,c,d,e,f,g,h){"use strict";var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").PureComponent);j=i&&i.prototype;l.prototype.render=function(){var m=this.props,n=m.isMessenger,o=m.msecs,p=c("React").createElement(c("Link.react"),{className:"fbChatReconnectLink",onClick:this.props.onManuallyConnectClick},h._("No Internet Connection"));if(o==null||false===navigator.onLine)return n?p:c("React").createElement("div",null,h._("Unable to connect to chat. Check your Internet connection."));else if(o>c("ChannelConstants").WARNING_COUNTDOWN_THRESHOLD_MSEC)return n?p:c("React").createElement("div",null,h._("Unable to connect to chat. {try-again-link}",[h.param("try-again-link",c("React").createElement(c("Link.react"),{className:"fbChatReconnectLink",onClick:this.props.onManuallyConnectClick},h._("Try again")))]));else if(o>1e3)return n?p:c("React").createElement("div",null,h._("Unable to connect to chat. Reconnecting in {seconds}",[h.param("seconds",Math.floor(o/1e3))]));else return n?c("React").createElement("div",null,c("React").createElement(c("MessengerSpinner.react"),{color:"grey"}),h._("Connecting...")):c("React").createElement("div",null,h._("Unable to connect to chat. Reconnecting..."))};function l(){i.apply(this,arguments)}l.propTypes={isMessenger:k.bool,msecs:k.number,onManuallyConnectClick:k.func};f.exports=l}),null);