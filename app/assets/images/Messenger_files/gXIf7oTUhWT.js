if (self.CavalryLogger) { CavalryLogger.start_js(["3TXM8"]); }

__d("P2PTimeBasedAcceptMessage.react",["fbt","React"],(function a(b,c,d,e,f,g,h){"use strict";var i,j,k=c("React").PropTypes;i=babelHelpers.inherits(l,c("React").Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props.transfer,n=m.creationTime*1e3,o=1e3*60*60*24,p=Date.now(),q=(p-n)/o,r=m.expirationTimestamp*1e3-p,s=Math.round(Math.max(r/o,1)),t=void 0;if(q<=2)t=h._("Add a debit card and it'll go straight to your bank.");else if(q<=4)t=h._("This money will be sent back in {days left} days. Add a debit card to accept it.",[h.param("days left",s)]);else if(q<=5)t=h._({"day":"You have {days left} day to add a debit card before the money is sent back to {sender_name}.","days":"You have {days left} days to add a debit card before the money is sent back to {sender_name}."},[h.param("days left",s),h["enum"](s===1?"day":"days",{day:"day",days:"days"}),h.param("sender_name",m.sender.name)]);else t=h._("You have 24 hours to add a debit card before the money is sent back to {sender_name}.",[h.param("sender_name",m.sender.name)]);return c("React").createElement("div",null,t)};function l(){i.apply(this,arguments)}l.propTypes={transfer:k.object.isRequired};f.exports=l}),null);