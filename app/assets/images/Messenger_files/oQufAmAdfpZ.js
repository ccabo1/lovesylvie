if (self.CavalryLogger) { CavalryLogger.start_js(["x5g8\/"]); }

__d("MercurySyncDataFetcherImpl",["errorCode","Promise","AsyncRequest","AsyncResponse","MessagingConfig","setTimeoutAcrossTransitions"],(function a(b,c,d,e,f,g,h){"use strict";var i=c("MessagingConfig").syncFetchRequestTimeoutMs;function j(l){return new(c("Promise"))(function(m,n){k(l,m,n,0)})}function k(l,m,n,o){if(o>c("MessagingConfig").syncFetchRetries){n();return}var p=o===0?0:c("MessagingConfig").syncFetchInitialTimeoutMs*Math.pow(c("MessagingConfig").syncFetchTimeoutMultiplier,o);c("setTimeoutAcrossTransitions")(function(){var q=false,r=function r(s){if(q)return;q=true;if(s instanceof c("AsyncResponse"))if(s.error===1357001||s.error===1340004||s.error===1373034){n(true);return}k(l,m,n,o+1)};new(c("AsyncRequest"))().setURI(l).setHandler(function(s){q=true;m(s)}).setErrorHandler(r).setTimeoutHandler(i,r).setAllowCrossPageTransition(true).send()},p)}f.exports={fetch:j}}),null);