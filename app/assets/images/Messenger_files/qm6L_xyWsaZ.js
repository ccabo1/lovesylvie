if (self.CavalryLogger) { CavalryLogger.start_js(["hsKgk"]); }

__d("TimeSpentImmediateActiveSecondsLogger",["Banzai","ImmediateActiveSecondsConfig","ScriptPath"],(function a(b,c,d,e,f,g){var h="immediate_active_seconds",i={signal:true,retry:true},j=c("ImmediateActiveSecondsConfig").sampling_rate,k=c("ImmediateActiveSecondsConfig").ias_bucket,l=0;function m(o){if(j<=0)return false;var p=Math.floor(o/1e3)%j;return p===k}function n(o){if(o>=l&&o-l<1e3)return;if(m(o)){var p={activity_time_ms:o,last_activity_time_ms:l,script_path:c("ScriptPath").getTopViewEndpoint()};try{c("Banzai").post(h,p,i)}catch(q){}}l=Math.floor(o/1e3)*1e3}f.exports={maybeReportActiveSecond:n}}),null);