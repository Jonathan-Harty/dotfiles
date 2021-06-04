'use strict';var py={TAB:0,Lm:1,tu:2},qy=function(){return new Gb("MediaRouter.CastStreaming.Session.Launch")},ry=function(){return new Nb("MediaRouter.CastStreaming.Session.Length")},sy=function(a){Rb("MediaRouter.CastStreaming.Start.Success",a,py)};var ty=ib("mr.mirror.cast.LogUploader");function uy(a,b,c){vy("raw_events.log.gz",a,b,c);return b?"https://crash.corp.google.com/samples?reportid=&q="+encodeURIComponent("UserComments='"+b+"'"):""}
function vy(a,b,c,d){if(0==b.size)ty.info("Trying to upload an empty file to Crash"),d&&d(null);else{var e=new FormData;e.append("prod","Cast");e.append("ver",chrome.runtime.getManifest().version);e.append(a,b);c&&e.append("comments",c);Xx("https://clients2.google.com/cr/report",function(f){f=f.target;var g=null;gy(f)?(g=iy(f),ty.info("Upload to Crash succeeded: "+g)):ty.info("Upload to Crash failed. HTTP status: "+f.za());d&&d(g)},"POST",e,void 0,3E4)}};var wy=function(){this.g=0;Nm(this)},yy=function(){xy||(xy=new wy);return xy},zy=function(){var a=yy(),b={fraction:.01,autoSubmitTimeLimitMillis:6048E5},c=b.autoSubmitTimeLimitMillis,d=Date.now();return a.g&&c&&d-a.g<c?!1:Math.random()<b.fraction};wy.prototype.fb=function(){return"mirror.cast.LogUtils"};wy.prototype.cc=function(){return[void 0,{lastAutoSubmitMillis:this.g}]};wy.prototype.jc=function(){var a=Lm(this);this.g=a&&a.lastAutoSubmitMillis||0};var xy=null;ib("mr.mirror.cast.LogUtils");var Ay={uL:"OFFER",uD:"ANSWER",BM:"PRESENTATION",FH:"GET_STATUS",wP:"STATUS_RESPONSE",AH:"GET_CAPABILITIES",YE:"CAPABILITIES_RESPONSE",uO:"RPC"};var By=function(){this.capabilities=this.status=this.g=this.error=this.rpc=this.result=this.type=this.h=this.sessionId=null},Ey=function(a){try{if("string"!==typeof a)throw SyntaxError("Cannot parse non-string as JSON");var b;Cy(JSON.parse(a),function(d){b=Dy(d)},function(){throw Error("non-Object result from JSON parse");});return b}catch(d){var c=d instanceof SyntaxError?"JSON parse error: "+d.message:"Type coercion error: "+d.message}"string"==typeof a?a="a string: "+a:a instanceof ArrayBuffer?
(a=new Uint8Array(a),a="an ArrayBuffer whose base64 is "+btoa(String.fromCharCode.apply(null,a))):a="of invalid data type "+typeof a;throw Error(c+". Input was "+a);},Dy=function(a){var b=new By;null!=a.sessionId&&(b.sessionId=String(a.sessionId));Fy(a.seqNum,function(f){b.h=f},function(){throw Error('"seqNum" must be a number');});if("type"in a){for(var c=String(a.type).toUpperCase(),d=m(Object.keys(Ay)),e=d.next();!e.done;e=d.next())if(Ay[e.value]==c){b.type=c;break}if(!b.type)throw Error('not a known message "type"');
}"result"in a&&(b.result=String(a.result));if("rpc"in a){if("string"!==typeof a.rpc)throw Error('"rpc" must be a String containing a base64 payload');b.rpc=new Uint8Array([].concat(q(atob(a.rpc))).map(function(f){return f.charCodeAt(0)}))}Cy(a.error,function(f){b.error=Gy(f)},function(){throw Error('"error" must be an Object');});Cy(a.answer,function(f){b.g=Hy(f)},function(){throw Error('"answer" must be an Object');});Cy(a.status,function(f){b.status=Iy(f)},function(){throw Error('"status" must be an Object');
});Cy(a.capabilities,function(f){b.capabilities=Jy(f)},function(){throw Error('"capabilities" must be an Object');});return b},Cy=function(a,b,c){void 0!==a&&(a instanceof Object?b(a):c())},Fy=function(a,b,c){void 0!==a&&("number"!==typeof a?c():b(a))},Ky=function(a,b,c){void 0!==a&&(a instanceof Array&&a.every(function(d){return"number"===typeof d})?b(a):c())},Ly=function(a,b,c){void 0!==a&&(a instanceof Array?b(a.map(function(d){return String(d)})):c())},My=function(){this.m=null;this.g=[];this.h=
[];this.j=this.l=this.s=null},Hy=function(a){var b=new My;Fy(a.udpPort,function(c){b.m=c},function(){throw Error('"answer.udpPort" must be a number');});Ky(a.sendIndexes,function(c){b.g=c},function(){throw Error('"answer.sendIndexes" must be an array of numbers');});Ky(a.ssrcs,function(c){b.h=c},function(){throw Error('"answer.ssrcs" must be an array of numbers');});"IV"in a&&(b.s=String(a.IV));"receiverGetStatus"in a&&(b.l="true"==String(a.receiverGetStatus).toLowerCase());"castMode"in a&&(b.j=String(a.castMode));
return b},Ny=function(){this.details=this.description=this.code=null},Gy=function(a){var b=new Ny;Fy(a.code,function(c){b.code=c},function(){throw Error('"error.code" must be a number');});"description"in a&&(b.description=String(a.description));Cy(a.details,function(c){b.details=c},function(){throw Error('"error.details" must be an Object');});return b},Oy=function(){this.h=this.g=null},Iy=function(a){var b=new Oy;Fy(a.wifiSnr,function(c){b.g=c},function(){throw Error('"status.wifiSnr" must be a number');
});Ky(a.wifiSpeed,function(c){b.h=c},function(){throw Error('"status.wifiSpeed" must be an array of numbers');});return b},Py=function(){this.h=this.g=null},Jy=function(a){var b=new Py;Ly(a.mediaCaps,function(c){b.g=c},function(){throw Error('"capabilities.mediaCaps" must be an array');});if("keySystems"in a){a=a.keySystems;if(!(a instanceof Array))throw Error('"capabilities.keySystems" must be an array');b.h=a.map(function(c){var d;Cy(c,function(e){d=Qy(e)},function(){throw Error('"capabilities.keySystems" entries must be *Objects');
});return d})}return b},Ry=function(){this.h=this.s=this.m=this.l=this.u=this.g=this.C=this.codecs=this.initDataTypes=this.j=null},Qy=function(a){var b=new Ry;"keySystemName"in a&&(b.j=String(a.keySystemName));Ly(a.initDataTypes,function(c){b.initDataTypes=c},function(){throw Error('"capabilities.initDataTypes" must be an array');});Ly(a.codecs,function(c){b.codecs=c},function(){throw Error('"capabilities.codecs" must be an array');});Ly(a.secureCodecs,function(c){b.C=c},function(){throw Error('"capabilities.secureCodecs" must be an array');
});Ly(a.audioRobustness,function(c){b.g=c},function(){throw Error('"capabilities.audioRobustness" must be an array');});Ly(a.videoRobustness,function(c){b.u=c},function(){throw Error('"capabilities.videoRobustness" must be an array');});"persistentLicenseSessionSupport"in a&&(b.l=String(a.persistentLicenseSessionSupport));"persistentReleaseMessageSessionSupport"in a&&(b.m=String(a.persistentReleaseMessageSessionSupport));"persistentStateSupport"in a&&(b.s=String(a.persistentStateSupport));"distinctiveIdentifierSupport"in
a&&(b.h=String(a.distinctiveIdentifierSupport));return b};var Sy=function(a){this.o=ib("mr.mirror.cast.MessageDispatcher");this.l=a;this.g=null;this.h=new Map;this.j=0},Ty=function(a,b,c){if(a.h.has(b))throw Error("Attempt to multiple-subscribe to the same response type: "+b);a.h.set(b,c);a.j=0;qb(a.o,"Added subscriber for "+b+"-type messages.");a.g||(a.g=Jw(a.l),a.g.onMessage=a.m.bind(a))},Uy=function(a,b){a.h.delete(b)&&qb(a.o,function(){return"Removed subscriber of "+b+"-type messages."});0==a.h.size&&a.g&&(a.g.dispose(),a.g=null)};
Sy.prototype.sendMessage=function(a){return this.g?"RPC"==a.type?this.g.sendMessage(a,{namespace:"urn:x-cast:com.google.cast.remoting"}):this.g.sendMessage(a,{namespace:"urn:x-cast:com.google.cast.webrtc"}):Promise.reject(Error("Require at least one subscriber before sending messages."))};
var Vy=function(a,b,c,d,e){var f=null,g=function(){Uy(a,c);null!=f&&(clearTimeout(f),f=null)};try{Ty(a,c,function(h){e(h)&&g()})}catch(h){e(null,h);return}f=setTimeout(function(){g();e(null,Error("timeout"))},d);a.sendMessage(b).catch(function(h){g();e(null,h)})};
Sy.prototype.m=function(a){if(a&&"string"===typeof a.namespace_&&a.namespace_.startsWith("urn:x-cast:com.google.cast.")){do{var b=void 0;try{b=Ey(a.data)}catch(d){b=d.message;break}if(b.type){var c=this.h.get(b.type);if(c)try{c(b);return}catch(d){b="Error thrown during delivery. Response was: "+(JSON.stringify(b)+". Error from subscriber callback was: ")+(d.message+".")}else b="Message was ignored: "+JSON.stringify(b)}else b="Message did not include response type: "+JSON.stringify(b)}while(0);10>
this.j?this.o.K(b):qb(this.o,b);++this.j}};var Wy=function(){this.g=Promise.resolve(1)},Yy=function(a,b,c){return Xy(a,function(d){return d==b},c)},Zy=function(a,b){var c=[3,4];return Xy(a,function(d){return-1!=c.indexOf(d)},b)},$y=function(a,b){a.g=a.g.catch(function(){return 1});return Xy(a,function(){return!0},b)},Xy=function(a,b,c){var d,e,f=new Promise(function(g,h){d=g;e=h});a.g=a.g.then(function(g){if(!b(g))return e(Error("Operation requires a different starting checkpoint than "+g)),Promise.resolve(g);var h=new az(g);try{var n=c(h)}catch(p){n=
Promise.reject(p)}return n.then(function(p){return d(p)},function(p){return e(p)}).then(function(){if(null===h.g)throw Error("A prior operation that started at "+(g+" did not complete."));return h.g})},function(g){e(g);throw g;});return f},az=function(a){this.h=a;this.g=null},bz=function(a,b){a.g="number"===typeof b?b:a.h};var cz=chrome.cast.streaming,dz=ib("mr.mirror.cast.StreamingLaunchWorkflow"),fz=function(a,b,c,d,e){this.L=a.sessionId;this.D=a.Zh;this.W=a.hf;this.j=b;this.J=c;this.H=d;this.ab=ez(e,"onAnswer",this.D);this.aa=ez(e,"onSessionStop",this.D);this.o=dz;this.F=new Wy;this.C=this.G=this.u=this.h=this.g=this.s=this.m=this.l=null};
fz.prototype.start=function(a,b,c){var d=this;if(!a&&!b)return Promise.reject(Error("No tracks to stream"));var e=a instanceof gz,f=b instanceof gz;(e&&b&&!f||f&&a&&!e)&&Zb("Mixing remoting and non-remoting tracks");return Yy(this.F,1,function(g){d.l=a;d.m=b;d.s=c;d.o.info(function(){return"Launching streaming for "+hz(d)+" to a "+(d.W+".")});return iz(d).then(d.O.bind(d)).then(function(h){return jz(d,h).then(function(n){d.ab();var p=kz(d,n,h);d.g=lz(d,d.g,p);d.h=lz(d,d.h,p);if(!d.g&&!d.h)throw Error("Receiver did not select any offers from: "+
JSON.stringify(h));d.G=!!n.l;d.C=function(r,y){r==d.g?d.s.Uf("Audio stream (id="+r+") error: "+y):r==d.h&&d.s.Uf("Video stream (id="+r+") error: "+y)};cz.rtpStream.onError.addListener(d.C);return mz(d,n,p)})}).then(function(){d.o.info(function(){return"Launched streaming for "+hz(d)});d.s.ph(d);bz(g,2);return{Iv:d.g,PC:d.h}})})};
fz.prototype.stop=function(){var a=this;return $y(this.F,function(b){if(!a.l&&!a.m)return bz(b,1),Promise.resolve();a.o.info(function(){return"Stopping streaming for "+hz(a)+"."});a.C&&(cz.rtpStream.onError.removeListener(a.C),a.C=null);if(a.s){var c=a.s.di();a.s=null}else c=Promise.resolve();return c.then(function(){a.g&&(cz.rtpStream.stop(a.g),cz.rtpStream.destroy(a.g),a.g=null);a.h&&(cz.rtpStream.stop(a.h),cz.rtpStream.destroy(a.h),a.h=null);a.u&&(cz.udpTransport.destroy(a.u),a.u=null);a.aa();
a.o.info(function(){return"Stopped streaming for "+hz(a)+"."});a.l=null;a.m=null;bz(b,1)})})};
var nz=function(a,b){var c=JSON.stringify(b);return Promise.all([a.g&&new Promise(function(d){return cz.rtpStream.getRawEvents(a.g,c,d)}),a.h&&new Promise(function(d){return cz.rtpStream.getRawEvents(a.h,c,d)})]).catch(function(d){a.o.error("Unexpected error when calling getRawEvents()",d);return[]}).then(function(d){return new Blob(d.filter(function(e){return!!e}),{type:"application/gzip"})})},oz=function(a){return Promise.all([a.g&&new Promise(function(b){return cz.rtpStream.getStats(a.g,b)}),a.h&&
new Promise(function(b){return cz.rtpStream.getStats(a.h,b)})]).catch(function(b){a.o.error("Unexpected error when calling getStats()",b);return[]}).then(function(b){return Object.assign.apply(Object,[{}].concat(q(b.filter(function(c){return!!c}))))})},hz=function(a){if(a.l&&a.m)var b="audio+video ";else if(a.l)b="audio-only ";else if(a.m)b="video-only ";else return"stopped";return a.l instanceof gz||a.m instanceof gz?b+"remoting":b+"streaming"},iz=function(a){return new Promise(function(b){var c=
function(d,e,f){d&&!a.l&&(cz.rtpStream.destroy(d),d=null);e&&!a.m&&(cz.rtpStream.destroy(e),e=null);a.o.info(function(){return"Created Cast Streaming session: audioStreamId="+d+", videoStreamId="+e+"."});a.g=d;a.h=e;a.u=f;b()};a.l instanceof gz||a.m instanceof gz?cz.session.create(null,null,c):cz.session.create(a.l,a.m,c)})};
fz.prototype.O=function(){for(var a=wk(),b=wk(),c=[],d=m([this.g,this.h]),e=d.next();!e.done;e=d.next())if(e=e.value)for(var f=e==this.g,g=f?127:96,h=f?Math.floor(499999*Math.random())+1:Math.floor(499999*Math.random())+500001,n=f?48E3:9E4,p=m(cz.rtpStream.getSupportedParams(e)),r=p.next();!r.done;r=p.next())r=r.value,r.payload.payloadType=g,r.payload.maxLatency=this.j.maxLatencyMillis,r.payload.minLatency=this.j.minLatencyMillis,r.payload.animatedLatency=this.j.animatedLatencyMillis,r.payload.ssrc=
h,r.payload.clockRate=n,r.payload.aesKey=a,r.payload.aesIvMask=b,f?(r.payload.channels=2,r.payload.maxBitrate=this.j.audioBitrate,r.payload.maxFrameRate=100):(r.payload.minBitrate=this.j.minVideoBitrate,r.payload.maxBitrate=this.j.maxVideoBitrate,r.payload.maxFrameRate=this.j.maxFrameRate),c.push(new pz(e,r));return c};
var lz=function(a,b,c){b&&!c.some(function(d){return d.Rg==b})&&(a.o.K("Destroying RTP stream not selected by the receiver: id="+b),cz.rtpStream.destroy(b),b=null);return b},jz=function(a,b){return new Promise(function(c,d){for(var e=[],f=0;f<b.length;++f){var g=b[f].params,h={index:f,codecName:g.payload.codecName.toLowerCase(),rtpProfile:"cast",rtpPayloadType:g.payload.payloadType,ssrc:g.payload.ssrc,targetDelay:g.payload.animatedLatency,aesKey:g.payload.aesKey,aesIvMask:g.payload.aesIvMask,timeBase:"1/"+
g.payload.clockRate,receiverRtcpEventLog:a.j.enableLogging,rtpExtensions:["adaptive_playout_delay"]};a.j.dscpEnabled&&(h.receiverRtcpDscp=46);127==g.payload.payloadType?Object.assign(h,{type:"audio_source",bitRate:0<g.payload.maxBitrate?1E3*g.payload.maxBitrate:60*g.payload.maxFrameRate+g.payload.clockRate*g.payload.channels,sampleRate:g.payload.clockRate,channels:g.payload.channels}):Object.assign(h,{type:"video_source",renderMode:"video",maxFrameRate:Math.round(1E3*g.payload.maxFrameRate)+"/1000",
maxBitRate:1E3*g.payload.maxBitrate,resolutions:[{width:a.j.maxWidth,height:a.j.maxHeight}]});e.push(h)}var n=a.l instanceof gz||a.m instanceof gz?"remoting":"mirroring",p={type:"OFFER",sessionId:a.L,seqNum:Xn(a.J),offer:{castMode:n,receiverGetStatus:!0,supportedStreams:e}};a.o.info(function(){return"Sending OFFER message: "+JSON.stringify(p)});Vy(a.H,p,"ANSWER",1E4,function(r,y){if(null==r)d(y);else if("ok"==r.result&&r.g){if(r.h!=p.seqNum)return a.o.K("Ignoring ANSWER for OFFER with different seqNum: "+
JSON.stringify(r)),!1;((y=r.g.j)&&y!=n||!y&&"mirroring"!=n)&&a.o.error("Expected receiver to ANSWER with castMode="+n+", but got: "+y);qb(a.o,function(){return"Received ANSWER: "+JSON.stringify(r)});c(r.g)}else d(Error("Non-OK ANSWER received: "+JSON.stringify(r)));return!0})})},kz=function(a,b,c){if(b.g.length!=b.h.length)return a.o.error("sendIndexes.length != ssrcs.length in ANSWER: "+JSON.stringify(b)),[];for(var d=[],e={},f=0;f<b.g.length;e={hg:e.hg},++f){var g=b.g[f];if(0>g||g>=c.length)return a.o.error("Receiver selected invalid index ("+
g+" < "+c.length+") in ANSWER: "+JSON.stringify(b)),[];e.hg=c[g];if(d.some(function(h){return function(n){return n.Rg==h.hg.Rg}}(e)))return a.o.error("Receiver selected same RTP stream twice in ANSWER: "+JSON.stringify(b)),[];e.hg.params.payload.feedbackSsrc=b.h[g];if(d.some(function(h){return function(n){return n.params.payload.feedbackSsrc==h.hg.params.payload.feedbackSsrc}}(e)))return a.o.error("Receiver provided same SSRC for two different RTP streams in ANSWER: "+JSON.stringify(b)),[];d.push(e.hg)}return d},
mz=function(a,b,c){var d=null,e=function(){d&&(cz.rtpStream.onStarted.removeListener(d),d=null)};return(new Promise(function(f,g){var h=b.m||2344;a.o.info(function(){return"Starting RTP streams to receiver at "+(a.D+":"+h)+(" for selected offers: "+JSON.stringify(c))});var n=a.u||-1;a.j.dscpEnabled&&(a.o.info("Enabled DSCP in sender."),cz.udpTransport.setOptions(n,{DSCP:!0}));cz.udpTransport.setDestination(n,{address:a.D,port:h});var p=new Set(c.map(function(y){return y.Rg}));d=function(y){p.delete(y);
0==p.size&&f()};cz.rtpStream.onStarted.addListener(d);n=m(c);for(var r=n.next();!r.done;r=n.next())r=r.value,cz.rtpStream.toggleLogging(r.Rg,a.j.enableLogging),cz.rtpStream.start(r.Rg,r.params);setTimeout(function(){g(Error("Timeout: RTP streams failed to start."))},1E4)})).then(e).catch(function(f){e();throw f;})},ez=function(a,b,c){return a&&b in a?function(){try{a[b](c)}catch(d){dz.error("Error from testHooks."+b,d)}}:function(){}},pz=function(a,b){this.Rg=a;this.params=b},gz=function(){};var qz=ib("mr.mirror.cast.MediaRemoter"),tz=function(a,b,c,d,e,f){this.C=a;this.J=rz(b,this.C.Mb);this.L=new fz(this.C.Mb,c,d,e,f);this.F=e;this.m=new Wy;this.j=new sz;this.D=new mojo.Binding(mojo.MirrorServiceRemoter,this,null);this.o=qz;this.G=this.g=this.s=this.l=this.H=null;this.h=!0;this.u=this.O.bind(this)};
tz.prototype.initialize=function(a,b){var c=this;return Yy(this.m,1,function(d){c.H=a;c.l=b;var e=c.D.createInterfacePtrAndBind();c.D.setConnectionErrorHandler(function(){c.o.info("Remoter mojo pipe connection error.");uz(c)});c.g=new mojo.MirrorServiceRemotingSourcePtr;var f=ik(c.C.mediaSource||"");if(!f)throw Error("Failed to parse tab ID from source:\n          "+c.C.mediaSource);c.o.info("Connecting remoter to browser: tabId="+f);(Rj.get("mr.ProviderManager")||null).onMediaRemoterCreated(f,e,
mojo.makeRequest(c.g));c.g.ptr.setConnectionErrorHandler(function(){c.o.info("RemotingSource mojo pipe connection error.");uz(c)});return vz(c).then(function(){if(c.h)c.g.onSinkAvailable(c.J);bz(d,2)})})};
var uz=function(a){return $y(a.m,function(b){a.g&&(a.g.ptr.reset(),a.g=null);var c=a.s;a.s=null;a.l=null;a.H=null;a.D.close();chrome.settingsPrivate.onPrefsChanged.hasListener(a.u)&&chrome.settingsPrivate.onPrefsChanged.removeListener(a.u);return new Promise(function(d){window.setTimeout(function(){wz(a).then(function(){bz(b,1);d();c&&c()})},250)})})};k=tz.prototype;k.PB=function(a){xz(this.j,a)};k.ph=function(a){this.l&&this.l.ph(a)};k.di=function(){return this.l?this.l.di():Promise.resolve()};
k.Uf=function(a,b){this.o.error("Error during streaming: "+a,b);if(this.g)this.g.onError();uz(this)};
k.start=function(){var a=this,b=!1;this.o.info(function(){b=!0;return"Starting next media remoting session."});b&&yz(this.j,function(c){return a.o.info(c)});zz(this.j);Yy(this.m,2,function(c){return(0,a.H)().then(function(d){a.s=d;Ty(a.F,"RPC",function(e){if(e.rpc){var f=a.j;e=e.rpc;f.s&&(++f.C,f.h+=e.length,f.s(e))}});bz(c,3)}).catch(function(d){return wz(a).then(function(){bz(c);throw d;})})}).then(function(){a.o.info("Remoting started successfully.")}).catch(function(c){a.o.error("Failed to start remoting",c);
a.g.onError()})};k.rC=function(a,b){var c=this;return Yy(this.m,3,function(d){return c.L.start(a?new gz:null,b?new gz:null,c).then(function(e){Az(c.j,function(f){return c.F.sendMessage(f)},function(f){c.g.onMessageFromSink(f)});bz(d,4);return{audio_stream_id:e.Iv||-1,video_stream_id:e.PC||-1}}).catch(function(e){return wz(c).then(function(){bz(d);throw e;})})}).catch(function(d){c.o.error("Failed to start remoting streams",d);uz(c);return{audio_stream_id:-1,video_stream_id:-1}})};
k.stop=function(a){var b=this;Zy(this.m,function(c){b.g.onStopped(a);return wz(b).then(function(){b.o.info("Remoting stopped.");bz(c,5);(0,b.s)().then(function(){return Yy(b.m,5,function(d){if(b.g&&b.h)b.g.onSinkAvailable(b.J);bz(d,2);return Promise.resolve()})}).catch(function(d){throw d;});b.s=null})}).catch(function(c){b.o.error("Failed to stop remoting: ",c);uz(b)})};
k.lw=function(){null===this.G&&(this.G=Fb(this.C.Mb.Zh).then(function(a){return a.g||!1}));return this.G.then(function(a){return{rate:(a?1E7:5E6)/8}})};
var wz=function(a){return a.L.stop().then(function(){Uy(a.F,"RPC");Bz(a.j);Cz(a.j)})},vz=function(a){return new Promise(function(b){chrome.settingsPrivate.getPref("media_router.media_remoting.enabled",function(c){chrome.runtime.lastError?a.o.error("Encountered error getting media remoting pref: "+JSON.stringify(chrome.runtime.lastError)):c.type!=chrome.settingsPrivate.PrefType.BOOLEAN?a.o.error("Pref value not a boolean: "+JSON.stringify(c)):(a.h=!!c.value,a.o.info("Initializing mediaRemotingEnabled_ with value read from pref: "+
a.h));chrome.settingsPrivate.onPrefsChanged.hasListener(a.u)||chrome.settingsPrivate.onPrefsChanged.addListener(a.u);b()})})};
tz.prototype.O=function(a){if(this.g){a=m(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,"media_router.media_remoting.enabled"==b.key){if(b.type!=chrome.settingsPrivate.PrefType.BOOLEAN){this.o.error("Pref value not a boolean: "+JSON.stringify(b));break}a=!!b.value;if(this.h==a)break;this.h=a;this.o.info("mediaRemotingEnabled_ changed to: "+this.h);if(this.h)this.g.onSinkAvailable(this.J);else this.g.onStopped(mojo.RemotingStopReason.USER_DISABLED);break}}};
var rz=function(a,b){var c=new mojo.RemotingSinkMetadata;c.features=[];c.friendly_name=b.nC||"";c.audio_capabilities=[];c.video_capabilities=[];var d=mojo.RemotingSinkAudioCapability,e=mojo.RemotingSinkVideoCapability,f=c.audio_capabilities,g=c.video_capabilities,h=b.hf||"";(a.g||[]).forEach(function(n){switch(n){case "audio":f.push(d.CODEC_BASELINE_SET);break;case "aac":f.push(d.CODEC_AAC);break;case "opus":f.push(d.CODEC_OPUS);break;case "video":g.push(e.CODEC_BASELINE_SET);break;case "4k":g.push(e.SUPPORT_4K);
break;case "h264":g.push(e.CODEC_H264);break;case "vp8":g.push(e.CODEC_VP8);break;case "vp9":h.startsWith("Chromecast Ultra")&&g.push(e.CODEC_VP9);break;case "hevc":h.startsWith("Chromecast Ultra")&&g.push(e.CODEC_HEVC);break;default:qz.info("Unknown mediaCap name: "+n)}});b.hf&&"Chromecast Ultra"==b.hf&&g.push(e.SUPPORT_4K);return c};tz.prototype.estimateTransmissionCapacity=tz.prototype.lw;tz.prototype.stop=tz.prototype.stop;tz.prototype.startDataStreams=tz.prototype.rC;tz.prototype.start=tz.prototype.start;
tz.prototype.sendMessageToSink=tz.prototype.PB;
var sz=function(){this.s=this.m=this.g=null;this.D=this.h=this.C=this.j=this.u=0;this.l=null},zz=function(a){a.g=[];Dz(a,performance.now())},Az=function(a,b,c){a.m=b;a.s=c;a.g?(b=a.g,a.g=null,b.forEach(function(d){return xz(a,d.data).then(d.RB,d.Uq)})):Dz(a,performance.now())},Bz=function(a){if(a.g){var b=Error("Stop before delivering pending message");a.g.forEach(function(c){return c.Uq(b)});a.g=null}a.m=null;a.s=null},xz=function(a,b){if(a.m){var c=btoa(String.fromCharCode.apply(null,b));++a.u;
a.j+=b.length;return a.m({type:"RPC",rpc:c})}return a.g?new Promise(function(d,e){a.g.push({data:b,RB:d,Uq:e})}):Promise.reject(Error("RPC pipe not started"))},yz=function(a,b){Cz(a);a.l=setInterval(function(){if(a.g)var c=a.g.length+" messages are waiting to send.";else{c=performance.now();var d=(c-a.D)/1E3;d="Over the past "+d.toFixed(1)+" seconds, sent "+(a.u+" messages ("+Math.round(a.j/d)+" bytes/sec) and received ")+(a.C+" messages ("+Math.round(a.h/d)+" bytes/sec).");Dz(a,c);c=d}b(c)},3E4)},
Cz=function(a){null!=a.l&&(clearInterval(a.l),a.l=null)},Dz=function(a,b){a.u=0;a.j=0;a.C=0;a.h=0;a.D=b};function Ez(a){return a&&a.getAudioTracks()&&0<a.getAudioTracks().length?a.getAudioTracks()[0]:null}function Fz(a){return a&&a.getVideoTracks()&&0<a.getVideoTracks().length?a.getVideoTracks()[0]:null};var Gz=function(a,b,c,d,e){this.j=new fz(a,b,c,d,void 0===e?null:e);this.o=ib("mr.mirror.cast.MediaStreamer");this.m=new Wy;this.l=this.h=this.g=this.s=null};Gz.prototype.start=function(a,b){var c=this;return Yy(this.m,1,function(d){c.s=a;c.g=Ez(a);c.g&&"ended"==c.g.readyState&&(c.g=null);c.h=Fz(a);c.h&&"ended"==c.h.readyState&&(c.h=null);if(!c.g&&!c.h)return bz(d),Promise.reject(Error("No MediaStream tracks to stream."));c.l=b;return c.j.start(c.g,c.h,c.l).then(function(){return bz(d,2)})})};
Gz.prototype.stop=function(){var a=this;return $y(this.m,function(b){return a.j.stop().then(function(){a.g=null;a.h=null;a.s=null;a.l=null;bz(b,1)})})};var Hz=function(a){return Yy(a.m,2,function(b){a.o.info("Suspending media streaming...");return a.j.stop().then(function(){a.o.info("Suspended media streaming.");bz(b,3)})})};
Gz.prototype.resume=function(){var a=this;return Yy(this.m,3,function(b){a.g&&"ended"==a.g.readyState&&(a.g=null);a.h&&"ended"==a.h.readyState&&(a.h=null);if(!a.g&&!a.h)return Promise.reject(Error("Cannot resume: All tracks have ended."));a.o.info("Resuming media streaming...");return a.j.start(a.g,a.h,a.l).then(function(){a.o.info("Resumed media streaming.");bz(b,2)})})};var Iz=function(a,b,c){this.m=a;this.l=b;this.j=c;this.o=ib("mr.mirror.cast.WifiStatusMonitor");this.g=null;this.h=[]};Iz.prototype.start=function(){var a=this;null==this.g&&(qb(this.o,"Starting Wifi Status Monitoring."),this.h=[],Ty(this.j,"STATUS_RESPONSE",function(b){return Jz(a,b)}),this.g=setInterval(function(){return Kz(a)},12E4),Kz(this))};Iz.prototype.stop=function(){null!=this.g&&(qb(this.o,"Stopping Wifi Status Monitoring."),clearInterval(this.g),this.g=null,Uy(this.j,"STATUS_RESPONSE"))};
var Jz=function(a,b){if(null!=a.g)if(b.status){var c={};null!=b.status.g&&(c.wifiSnr=b.status.g);null!=b.status.h&&(c.wifiSpeed=b.status.h[3]);0==Object.keys(c).length?a.o.K(function(){return"No status fields populated in response: "+JSON.stringify(b)}):(c.timestamp=Date.now(),30==a.h.length&&a.h.shift(),a.h.push(c),a.o.info(function(){return"Current Wifi status: "+JSON.stringify(c)}))}else a.o.K(function(){return"Ignoring response without status: "+JSON.stringify(b)})},Kz=function(a){a.j.sendMessage({type:"GET_STATUS",
sessionId:a.m,seqNum:Xn(a.l),get_status:["wifiSnr","wifiSpeed"]})};var Lz=function(a,b,c,d){this.G=b.Zh;this.J={extVersion:chrome.runtime.getManifest().version,extChannel:"public",mirrorSettings:fr(a),sender:navigator.userAgent||"UNKNOWN",receiverProductName:b.hf};this.H=c;this.F=d;this.l=this.h=this.C=this.s=this.m=this.u=this.j=null;this.g=[]};Lz.prototype.ph=function(a){null!=this.h&&clearInterval(this.h);this.j=a;this.u=Date.now();this.h=setInterval(this.D.bind(this,a),9E5)};
Lz.prototype.di=function(){null!=this.h&&(clearInterval(this.h),this.h=null);if(null!=this.j){var a=this.D(this.j);this.j=null;return a}return Promise.resolve()};Lz.prototype.Uf=function(a,b){null==this.m&&(this.m=Date.now(),"function"===typeof a?this.s=a():"string"===typeof a&&(this.s=a),b&&"string"===typeof b.stack&&(this.C=b.stack))};
var Nz=function(a,b){return(null==a.j?Promise.resolve():a.D(a.j)).then(function(){var c=b.map(function(d){d=Mz(a,d);var e=d.map(function(g){return g.vd}).filter(function(g){return null!=g}),f=["["];d.map(function(g){return g.Qg}).forEach(function(g,h){0<h&&f.push(",");f.push(g)});f.push("]");return{vd:new Blob(e,{type:"application/gzip"}),Qg:new Blob(f,{type:"application/json"})}});a.g=[];return c})};
Lz.prototype.D=function(a){var b=this;if(null!=this.l)return this.l;var c=Fb(this.G).then(function(d){d={receiverVersion:d.tg,receiverConnected:d.h,receiverOnEthernet:d.g,receiverHasUpdatePending:d.j,receiverUptimeSeconds:d.l};Object.assign(d,b.J);var e=Date.now();Object.assign(d,{startTime:b.u,endTime:e,activity:hz(a),receiverWifiStatus:Array.from(b.F.h)});b.u=e;null!=b.m&&(Object.assign(d,{streamingErrorTime:b.m,streamingErrorMessage:b.s,streamingErrorCause:b.C}),b.m=null,b.s=null,b.C=null);return d});
return(this.l=Promise.all([c.then(function(d){return nz(a,d)}),c,oz(a)]).then(function(d){var e=m(d);d=e.next().value;var f=e.next().value;e=e.next().value;b.g.push({vd:d,Qg:new Blob([JSON.stringify(Object.assign({tags:f},e))],{type:"application/json"})});b.g=Mz(b,b.H);b.l=null}))||Promise.resolve()};
var Mz=function(a,b){b-=2;for(var c=[],d=a.g.length-1;0<=d;--d){b-=a.g[d].Qg.size+1;if(0>b)break;c.push({vd:null,Qg:a.g[d].Qg});if(null!=a.g[d].vd){var e=a.g[d].vd.size;b>=e&&(c[c.length-1].vd=a.g[d].vd,b-=e)}}return c.reverse()};var Oz=function(a,b,c,d){d=void 0===d?null:d;vk.call(this,b);var e=b.Mb;this.D=e.sessionId;this.G=a;this.L=d;this.o=ib("mr.mirror.cast.Session");this.s=new Wy;this.m=new Wn("mirror.cast.SeqNumGenerator");this.l=new Sy(b.id);this.u=new Gz(e,this.G,this.m,this.l,this.L);this.C=null;this.g=new Lz(a,e,c,new Iz(this.D,this.m,this.l));this.F=null};t(Oz,vk);k=Oz.prototype;
k.start=function(a){var b=this;return Yy(this.s,1,function(c){var d=qy();return b.u.start(a,b).then(function(){b.u.j.G&&(b.g.F.start(),Pz(b));d.end();b.F=ry();bz(c,2);return b})})};k.stop=function(){var a=this;return $y(this.s,function(b){a.F&&(a.F.end(),a.F=null);a.g.F.stop();return a.u.stop().then(function(){return a.C?uz(a.C):Promise.resolve()}).then(function(){a.C=null;bz(b,4)})})};
k.Sq=function(){var a=this,b={sessionId:this.D,seqNum:Xn(this.m),type:"PRESENTATION",icons:[],title:tk(this.ad)};this.o.info("Sending session metadata update to receiver: "+this.D);this.l.sendMessage(b).catch(function(c){a.o.K("Failed to send activity to sink: "+c.message)})};k.ph=function(a){this.g.ph(a)};k.di=function(){return this.g.di()};k.Uf=function(a,b){this.g.Uf(a,b);this.o.error(a,b);this.stop()};
var Qz=function(a,b){return Nz(a.g,b)},Pz=function(a){Rz(a).then(function(b){(b.g||[]).includes("video")?Sz(a,b):a.o.K(function(){return"Receiver incapable of Media Remoting: "+JSON.stringify(b)})}).catch(function(b){a.o.K("None/Invalid capabilites response. Media Remoting disabled.",b)})},Rz=function(a){return new Promise(function(b,c){var d={type:"GET_CAPABILITIES",sessionId:a.D,seqNum:Xn(a.m)};a.o.info(function(){return"Sending GET_CAPABILITIES message: "+JSON.stringify(d)});Vy(a.l,d,"CAPABILITIES_RESPONSE",
3E4,function(e,f){if(null==e)return c(f),!0;if("ok"!=e.result||!e.capabilities)return c(Error("Bad response: "+JSON.stringify(e))),!0;if(e.h!=d.seqNum)return a.o.info(function(){return"Ignoring CAPABILITIES_RESPONSE with different seqNum: "+JSON.stringify(e)}),!1;qb(a.o,function(){return"Received CAPABILITIES_RESPONSE: "+JSON.stringify(e)});b(e.capabilities);return!0})})},Sz=function(a,b){Yy(a.s,2,function(c){var d=a.h.Mb.hf||"<UNKNOWN>";if(!d.startsWith("Chromecast")&&!d.startsWith("Eureka Dongle"))return a.o.K('HACK: Media Remoting disabled because the receiver model--"'+
(d+'" according to discovery--is not a Chromecast.')),bz(c),Promise.resolve();a.C=new tz(a.h,b,a.G,a.m,a.l,a.L);return a.C.initialize(a.O.bind(a),a).catch(function(e){a.o.error("Media Remoting start failed: "+e.message,e)}).then(function(){return bz(c)})})};
Oz.prototype.O=function(){var a=this;return Yy(this.s,2,function(b){return new Promise(function(c,d){Hz(a.u).then(function(){bz(b,3);a.H=!0;lk(a);c(a.W.bind(a))}).catch(function(e){a.Uf("Failed to suspend MediaStreamer before starting remoting",e);d(e)})})})};Oz.prototype.W=function(){var a=this;return Yy(this.s,3,function(b){return new Promise(function(c,d){a.u.resume().then(function(){bz(b,2);a.H=!1;lk(a);c()}).catch(function(e){a.Uf("Failed resume MediaStreamer after ending remoting mode",e);d(e)})})})};var Tz=function(){jk.call(this,"cast_streaming");this.m=this.F=this.J=this.H=this.l=null;this.dc=this.L="";this.ha=this.u=!1;this.pa=this.Ca.bind(this);this.O=this.W=this.ab=this.aa=this.s=null};t(Tz,jk);k=Tz.prototype;k.rh=function(a){this.u=a||!1;this.ha=!0};k.getName=function(){return"cast_streaming"};
k.Og=function(a,b,c,d,e){var f=this;if(!this.u)return jk.prototype.Og.call(this,a,b,c,d,e);this.M.info("Start mirroring on route "+a.id);if(!this.ha)return wj(Error("Not initialized"));var g=new Promise(function(h,n){f.C().then(function(){if(hk(b)&&c.shouldCaptureVideo)return Oj(!1).then(function(p){f.dc=p})}).then(function(){return e?e(a).promise:a}).then(function(p){f.L=b;Uz(f,p);var r=f.H.createInterfacePtrAndBind(),y=f.J.createInterfacePtrAndBind(),B=Vz(p,c);Wz(f,p,b,d);if(!f.l)throw new Aj("Error to get mirroring service host");
f.F=new mojo.MirroringCastMessageChannelPtr;f.aa=qy();f.l.start(B,r,y,mojo.makeRequest(f.F));f.s=new vk(a,f.j.Gp.bind(f.j));lk(f.s);Xz(f,p,b);f.W=function(){return h(p)};f.O=n}).catch(function(p){f.M.error("Mirroring launch error: "+p);f.Lg(void 0===p.reason?9:p.reason);n(p)})});return xj(g)};k.Ki=function(a,b){return new Oz(a,b,20969472,null)};k.Th=function(){sy(0)};k.Qh=function(){sy(1)};k.pj=function(){sy(2)};k.Rh=function(){Qb("MediaRouter.CastStreaming.Session.End")};
k.Lg=function(a){Rb("MediaRouter.CastStreaming.Start.Failure",a,zj)};k.Sh=function(){Qb("MediaRouter.CastStreaming.Stream.End")};
k.Ik=function(a){var b=this;return this.u?Promise.resolve():(new Promise(function(c){return chrome.metricsPrivate.getIsCrashReportingEnabled(c)})).then(function(c){var d=c&&zy(),e=[9351424];d&&e.push(20969472);return Qz(a,e).then(function(f){var g=f[f.length-1];f=Wm(f[0].vd).catch(function(h){b.M.error("Failed to persist events Blob.",h)});d&&0<g.vd.size?uy(g.vd,void 0,b.FA.bind(b)):c&&vy("stats.json",g.Qg,void 0,void 0);return f})})};k.FA=function(a){if(a){a=yy();var b=Date.now();a.g=b}};
k.Mj=function(a){if(this.u)return fb();this.M.info("Received message to upload logs for "+a);return this.g?Qz(this.g,[20969472]).then(function(b){b=m(b).next().value;return 0==b.vd.size?"":uy(b.vd,a)}):Promise.resolve(Yz(this,a))};
var Yz=function(a,b){var c=window.localStorage.getItem("mr.temp.mirror.cast.Service.eventsBlob");if(null==c||1>c.length)c=null;else{for(var d=new Uint16Array(c.length),e=0;e<c.length;++e)d[e]=c.charCodeAt(e);c=d.buffer;d=(new Uint8Array(c,c.byteLength-1,1))[0];c=new Uint8Array(c,0,c.byteLength-(0==d?2:1));c=new Blob([c],{type:"application/gzip"})}if(null!=c&&0!=c.size)return Wm(new Blob),a.M.info("Uploading saved logs for feedback."),uy(c,b)};k=Tz.prototype;
k.onError=function(a){this.O&&(this.O(a),this.W=this.O=null,this.Lg(9));this.M.info("Mirroring service error: "+a);this.C()};k.didStart=function(){this.W&&(this.W(),this.W=this.O=null);this.aa&&(this.aa.end(),this.aa=null);this.ab=ry();gk(this.L)?this.Th():hk(this.L)?this.Qh():ek(this.L)&&this.pj()};k.didStop=function(){this.C()};k.send=function(a){if(this.m){var b=JSON.parse(a.jsonFormatData);qb(this.M,function(){return"Sending message: "+JSON.stringify(b)});this.m.sendMessage(a.jsonFormatData,{namespace:a.messageNamespace})}};
k.HA=function(a){if(a&&(a.namespace_===mojo.MirroringWebRtcNamespace||a.namespace_===mojo.MirroringRemotingNamespace)&&this.F){var b=new mojo.MirroringCastMessage;b.messageNamespace=a.namespace_;"string"!==typeof a.data?this.M.info("Received non-string as JSON"):(b.jsonFormatData=a.data,this.F.send(b))}};
var Uz=function(a,b){a.H=new mojo.Binding(mojo.MirroringSessionObserver,a,null);a.J=new mojo.Binding(mojo.MirroringCastMessageChannel,a,null);a.m=Jw(b.id);a.m.onMessage=a.HA.bind(a)},Vz=function(a,b){var c=new mojo.MirroringSessionParameters;c.receiverAddress=new mojo.IPAddress;c.receiverAddress.addressBytes=a.Mb.Zh.split(".").map(function(d){return parseInt(d,10)});c.receiverModelName=a.Mb.hf;a=Zz(a.mediaSource);c.targetPlayoutDelay=$z(a);!b.shouldCaptureVideo||!b.shouldCaptureAudio||a&&"0"===a.searchParams.get("streamingCaptureAudio")?
c.type=b.shouldCaptureVideo?mojo.MirroringSessionType.VIDEO_ONLY:mojo.MirroringSessionType.AUDIO_ONLY:c.type=mojo.MirroringSessionType.AUDIO_AND_VIDEO;return c},$z=function(a){if(!a)return null;a=Number(a.searchParams.get("streamingTargetPlayoutDelayMillis"));return isNaN(a)||0>=a?null:new mojo.TimeDelta({microseconds:1E3*a})},Zz=function(a){if(!a)return null;try{return new URL(a)}catch(b){return null}},Wz=function(a,b,c,d){a.l=new mojo.MirroringServiceHostPtr;b=b.Mb.tabId||-1;gk(c)?a.j.getMirroringServiceHostForTab(b,
mojo.makeRequest(a.l)):hk(c)?a.j.getMirroringServiceHostForDesktop(-1,a.dc,mojo.makeRequest(a.l)):ek(c)?(b=new mojo.Url,b.url=c,a.j.getMirroringServiceHostForOffscreenTab(b,d||"",mojo.makeRequest(a.l))):a.l=null},Xz=function(a,b,c){gk(c)&&!chrome.tabs.onUpdated.hasListener(a.pa)&&chrome.tabs.onUpdated.addListener(a.pa);(gk(c)||ek(c))&&ok(a.s,b.Mb.tabId)};Tz.prototype.Ca=function(a,b,c){dk(14);this.s&&qk(this.s,a,b,c)};
Tz.prototype.C=function(){chrome.tabs.onUpdated.removeListener(this.pa);return this.u?this.ha?this.l?(this.l.ptr.reset(),this.F=this.l=null,this.m&&this.m.dispose(),this.m=null,this.H&&(this.H.close(),this.H=null),this.J&&(this.J.close(),this.J=null),pk(this.j,this.s.h.id),this.s=null,this.dc=this.L="",this.ab&&(this.ab.end(),this.ab=null),this.Rh(),Promise.resolve(!0)):Promise.resolve(!1):Promise.reject("Not initialized"):jk.prototype.C.call(this)};
Tz.prototype.ci=function(a,b,c,d,e,f){return this.u?wj(Error("Mirroring service does not support updating stream")):jk.prototype.ci.call(this,a,b,c,d,e,f)};Tz.prototype.send=Tz.prototype.send;Tz.prototype.didStop=Tz.prototype.didStop;Tz.prototype.didStart=Tz.prototype.didStart;Tz.prototype.onError=Tz.prototype.onError;var aA=new Tz;ak("mr.mirror.cast.Service",aA);
