if (self.CavalryLogger) { CavalryLogger.start_js(["cOHWo"]); }

__d("P2PPendingPaymentRequestJewelBanner.react",["fbt","P2PJewelBanner.react","P2PPaymentRequest","P2PPaymentRequestActionHelper","React"],(function a(b,c,d,e,f,g,h){"use strict";var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.handleDeclineClick=function(){c("P2PPaymentRequestActionHelper").initDeclinePaymentRequestFlow(this.props.paymentRequest)}.bind(this),this.handlePayClick=function(){c("P2PPaymentRequestActionHelper").initPayForPaymentRequestFlow(this.props.paymentRequest,"banner")}.bind(this),this.renderBodyText=function(){var r=this.props.paymentRequest,s=r.memoText;if(!s)return null;return h._("For {What the user paid for}",[h.param("What the user paid for",s)])}.bind(this),n}l.prototype.render=function(){var m=this.props.paymentRequest;return c("React").createElement(c("P2PJewelBanner.react"),{bodyText:this.renderBodyText(),primaryActionConfig:{onClick:this.handlePayClick,text:h._("Pay")},secondaryActionConfig:{onClick:this.handleDeclineClick,text:h._("Decline")},titleText:h._("{requester_name} requested {amount}",[h.param("requester_name",m.requester.name),h.param("amount",m.amountWithSymbol)])})};l.propTypes={paymentRequest:k.instanceOf(c("P2PPaymentRequest")).isRequired};f.exports=l}),null);