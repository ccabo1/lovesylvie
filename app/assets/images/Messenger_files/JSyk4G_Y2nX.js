if (self.CavalryLogger) { CavalryLogger.start_js(["9SNwh"]); }

__d("MessengerQuickCamDispatcher",["ExplicitRegistrationReactDispatcher"],(function a(b,c,d,e,f,g){"use strict";var h,i;h=babelHelpers.inherits(j,c("ExplicitRegistrationReactDispatcher"));i=h&&h.prototype;function j(){h.apply(this,arguments)}f.exports=new j({strict:false})}),null);
__d("MessengerQuickCamActions",["MessengerQuickCamDispatcher","keyMirror"],(function a(b,c,d,e,f,g){"use strict";var h=c("keyMirror")({CLOSE:null,COUNT_DOWN_TIMER:null,COUNT_DOWN_TIMER_START:null,PROCESS_RECORDING:null,REGISTER_QUICKCAM:null,REMOVE_ALL_LISTENERS:null,REQUEST_USER_MEDIA:null,RETAKE:null,SEND_PHOTO:null,SEND_VIDEO:null,SET_MEDIA:null,SHUTTER_OFF:null,STOP_VIDEO:null,TAKE_VIDEO:null,UPDATE_PROGRESS:null,UPLOAD_COMPLETE:null,UPLOAD_ERROR:null,USER_MEDIA_ERROR:null}),i={Types:h,close:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.CLOSE})},countDownTimer:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.COUNT_DOWN_TIMER})},countDownTimerStart:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.COUNT_DOWN_TIMER_START})},processRecording:function j(k){c("MessengerQuickCamDispatcher").dispatch({type:h.PROCESS_RECORDING,videoBlob:k})},registerQuickCam:function j(k,l){c("MessengerQuickCamDispatcher").dispatch({type:h.REGISTER_QUICKCAM,source:k,quickcam:l})},requestUserMedia:function j(k,l){c("MessengerQuickCamDispatcher").dispatch({type:h.REQUEST_USER_MEDIA,viewer:k,threadID:l})},retake:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.RETAKE})},sendPhoto:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.SEND_PHOTO})},sendVideo:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.SEND_VIDEO})},setMedia:function j(k,l){c("MessengerQuickCamDispatcher").dispatch({type:h.SET_MEDIA,videoSrc:k,videoStream:l})},stopVideo:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.STOP_VIDEO})},shutterOff:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.SHUTTER_OFF})},takeVideo:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.TAKE_VIDEO})},updateProgress:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.UPDATE_PROGRESS})},uploadError:function j(k){c("MessengerQuickCamDispatcher").dispatch({type:h.UPLOAD_ERROR,error:k})},uploadComplete:function j(k){c("MessengerQuickCamDispatcher").dispatch({type:h.UPLOAD_COMPLETE,data:k})},userMediaError:function j(){c("MessengerQuickCamDispatcher").dispatch({type:h.USER_MEDIA_ERROR})}};f.exports=i}),null);
__d("XSetNUXSeenController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/chat/nux_seen/",{setting_name:{type:"String"}})}),null);
__d("MessagingShowNUX.react",["AsyncRequest","ChatConfig","React","XSetNUXSeenController","XUIAmbientNUX.react"],(function a(b,c,d,e,f,g){"use strict";var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").PureComponent);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.state={showNUX:!c("ChatConfig").get(this.props.settingName)},this.$MessagingShowNUX1=function(){if(!this.state.showNUX)return;c("ChatConfig").set(this.props.settingName,true);new(c("AsyncRequest"))(c("XSetNUXSeenController").getURIBuilder().getURI()).setData({setting_name:this.props.settingName}).send();this.setState({showNUX:false});this.props.onHidden()}.bind(this),m}k.prototype.render=function(){return c("React").createElement(c("XUIAmbientNUX.react"),{contextRef:this.props.contextRef,onCloseButtonClick:this.$MessagingShowNUX1,position:"left",width:"auto",shown:this.state.showNUX&&this.props.shown},this.props.children)};k.propTypes={children:j.any,contextRef:j.func.isRequired,onHidden:j.func.isRequired,settingName:j.string.isRequired,shown:j.bool.isRequired};f.exports=k}),null);
__d("MessengerQuickCamOrigins",[],(function a(b,c,d,e,f,g){"use strict";var h={CHAT_TAB:"chat tab",MESSENGER:"messenger",getValues:function i(){return[h.CHAT_TAB,h.MESSENGER]}};f.exports=h}),null);
__d("MessengerQuickCamButtonHTML5.react",["cx","fbt","BootloadedComponent.react","ChatConfig","JSResource","Link.react","MessagingShowNUX.react","MessengerDialog.react","MessengerQuickCamActions","MessengerQuickCamOrigins","MessengerSpinner.react","React","XUIDialog.react","XUISpinner.react","joinClasses"],(function a(b,c,d,e,f,g,h,i){"use strict";var j,k,l=c("React").PropTypes,m="seen_cam_button_nux";j=babelHelpers.inherits(n,c("React").Component);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.$MessengerQuickCamButtonHTML53=function(){this.setState({nuxOpen:false,nuxShown:true,dialogOpen:true})}.bind(this);this.$MessengerQuickCamButtonHTML56=function(){if(this.state.dialogOpen)this.setState({dialogOpen:false})}.bind(this);this.$MessengerQuickCamButtonHTML57=function(p){if(!p)this.$MessengerQuickCamButtonHTML56();else c("MessengerQuickCamActions").requestUserMedia(this.props.viewer,this.props.threadID)}.bind(this);this.$MessengerQuickCamButtonHTML51=function(p){if(!this.state.nuxShown){this.setState({nuxOpen:true});return}if(this.state.dialogOpen)return;p.stopPropagation();this.setState({dialogOpen:!this.state.dialogOpen})}.bind(this);this.state={dialogOpen:false,nuxShown:!!c("ChatConfig").get(m),nuxOpen:false}}n.prototype.render=function(){var o=this.props.textChild;return c("React").createElement(c("Link.react"),{className:c("joinClasses")(this.props.className,"_30yy"),onClick:this.$MessengerQuickCamButtonHTML51,ref:"photoButton",role:"button",title:i._("Take a picture using quick cam")},!!o&&o,this.$MessengerQuickCamButtonHTML52())};n.prototype.$MessengerQuickCamButtonHTML52=function(){if(!this.state.nuxShown)return c("React").createElement(c("MessagingShowNUX.react"),{contextRef:function(){return this.refs.photoButton}.bind(this),settingName:m,shown:this.state.nuxOpen,onHidden:this.$MessengerQuickCamButtonHTML53,ref:"camNUX"},i._("Send photos and videos from your computer's camera."));if(!this.state.dialogOpen)return null;return this.props.location===c("MessengerQuickCamOrigins").MESSENGER?this.$MessengerQuickCamButtonHTML54():this.$MessengerQuickCamButtonHTML55()};n.prototype.$MessengerQuickCamButtonHTML54=function(){var o=window.innerWidth/3;return c("React").createElement(c("MessengerDialog.react"),{overflow:"hidden",contextRef:function(){return this.refs.photoButton}.bind(this),shown:this.state.dialogOpen,onBlur:this.$MessengerQuickCamButtonHTML56,onToggle:this.$MessengerQuickCamButtonHTML57,width:400>o?400:o},c("React").createElement(c("BootloadedComponent.react"),{bootloadPlaceholder:c("React").createElement("div",{style:{padding:"30px",textAlign:"center"}},c("React").createElement(c("MessengerSpinner.react"),null)),bootloadLoader:c("JSResource")("MessengerQuickCamDialog.react").__setRef("MessengerQuickCamButtonHTML5.react"),location:this.props.location,onShown:function(p){this.$MessengerQuickCamButtonHTML57(true);if(this.props.onDialogShown)this.props.onDialogShown(p)}.bind(this),onHidden:this.$MessengerQuickCamButtonHTML56,onEscKeyDown:this.$MessengerQuickCamButtonHTML56,shown:this.state.dialogOpen,threadID:this.props.threadID,viewer:this.props.viewer}))};n.prototype.$MessengerQuickCamButtonHTML55=function(){var o=window.innerWidth/3;return c("React").createElement(c("XUIDialog.react"),{overflow:"hidden",contextRef:function(){return this.refs.photoButton}.bind(this),shown:this.state.dialogOpen,onBlur:this.$MessengerQuickCamButtonHTML56,hideOnEscape:true,onToggle:this.$MessengerQuickCamButtonHTML57,width:400>o?400:o},c("React").createElement(c("BootloadedComponent.react"),{bootloadPlaceholder:c("React").createElement("div",{style:{padding:"30px",textAlign:"center"}},c("React").createElement(c("XUISpinner.react"),null)),bootloadLoader:c("JSResource")("MessengerQuickCamDialog.react").__setRef("MessengerQuickCamButtonHTML5.react"),location:this.props.location,onShown:function(p){this.$MessengerQuickCamButtonHTML57(true);if(this.props.onDialogShown)this.props.onDialogShown(p)}.bind(this),onHidden:this.$MessengerQuickCamButtonHTML56,onEscKeyDown:this.$MessengerQuickCamButtonHTML56,shown:this.state.dialogOpen,threadID:this.props.threadID,viewer:this.props.viewer}))};n.propTypes={className:l.string.isRequired,location:l.oneOf(c("MessengerQuickCamOrigins").getValues()).isRequired,textChild:l.node,threadID:l.string.isRequired,viewer:l.string.isRequired};f.exports=n}),null);