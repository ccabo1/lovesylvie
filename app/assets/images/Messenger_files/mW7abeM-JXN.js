if (self.CavalryLogger) { CavalryLogger.start_js(["iBSVG"]); }

__d("UFIPager.react",["cx","LeftRight.react","React","SutroPhase2GatingConfig","UFIImageBlock.react","XUISpinner.react","joinClasses"],(function a(b,c,d,e,f,g,h){"use strict";var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=j.constructor).call.apply(l,[this].concat(o)),this.onPagerClick=function(q){!this.props.isLoading&&this.props.onPagerClick&&this.props.onPagerClick();q.nativeEvent.prevent()}.bind(this),m}k.prototype.render=function(){var l=this.onPagerClick,m=c("joinClasses")("UFIRow"+(this.props.isUnseen?" UFIUnseenItem":"")+" UFIPagerRow _4oep"+(this.props.isFirstCommentComponent?" _48pi":"")+(this.props.isLastCommentComponent?" UFILastCommentComponent":"")+(this.props.isFirstComponent?" _4204":"")+(this.props.isLastComponent?" _2o9m":"")),n=null;if(this.props.isLoading)n=c("React").createElement(c("XUISpinner.react"),{className:"mls",background:"light",size:"small"});var o=c("React").createElement("a",{className:"UFIPagerLink",onClick:l,href:"#",role:"button"},this.props.pagerLabel,n),p="fcg UFIPagerCount",q=c("SutroPhase2GatingConfig").enabled_bling_above_ufi&&c("React").createElement("span",{className:p},this.props.countSentence),r=void 0;if(this.props.contextArgs.entstream||!this.props.isReply)r=c("React").createElement(c("LeftRight.react"),{direction:c("LeftRight.react").DIRECTION.right},o,q);else r=c("React").createElement(c("UFIImageBlock.react"),null,c("React").createElement("a",{className:"UFIPagerIcon",onClick:l,href:"#",role:"button"}),o,q);return c("React").createElement("div",{className:m,"data-ft":this.props["data-ft"]},r)};f.exports=k}),null);