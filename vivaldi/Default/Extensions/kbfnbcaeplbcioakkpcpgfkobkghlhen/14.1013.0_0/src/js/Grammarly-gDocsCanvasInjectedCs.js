var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{m:()=>l});class n{constructor(t,e,n,r){this._customInboundEventName=e,this._customOutboundEventName=n,this._wrapOutboundMessage=r,this.inbound={subscribe:t=>{const e=({detail:e})=>{const n=e;t&&("function"==typeof t?t(n):t.next&&t.next(n))};return this._target.addEventListener(this._customInboundEventName,e,!1),{unsubscribe:()=>this._target.removeEventListener(this._customInboundEventName,e,!1)}}},this.outbound=t=>{const e=this._wrapOutboundMessage?this._wrapOutboundMessage(t):t,n=new CustomEvent(this._customOutboundEventName,{bubbles:!0,cancelable:!0,detail:e});this._target.dispatchEvent(n)},this._target=t.defaultView||t}}function r(t,e,n,r){const s=new Map;let o=[];const i=[o];function a(t){o.length&&o[o.length-1].timestamp+10<t.timestamp&&(o=[],i.push(o)),o.push(t)}function c(t,e,n){a({timestamp:performance.now(),type:"call",prop:t,args:e,result:n})}return self.GR_RECORDING||(self.GR_RECORDING=[]),self.GR_RECORDING.push(i),new Proxy(t,{get(t,o,i){var l;const u=s.get(o);if(u)return u;const p=String(o),d=Reflect.get(t,o);if("function"==typeof d){const i=`proxy.${String(o)}`,a=null===(l=n.postFn)||void 0===l?void 0:l[o],u=a?(...n)=>{const s=d.apply(t,n);try{c(p,n,s),a(t,e,n,s)}catch(t){r.logException(i,t)}return s}:(...e)=>{const n=d.apply(t,e);return c(p,e,n),n};return s.set(o,u),u}return function(t,e){a({timestamp:performance.now(),type:"get",prop:t,result:e})}(p,d),d},set(t,s,o){var i;!function(t,e){a({timestamp:performance.now(),type:"set",prop:t,args:[e]})}(String(s),o);const c=null===(i=n.overrideSet)||void 0===i?void 0:i[s];if(c)try{const n=c(t,e,o);if(void 0!==n)return n}catch(t){r.logException(`proxy.${String(s)}`,t)}return Reflect.set(t,s,o)}})}const s={postFn:{fillText(t,e,[n,r,s,i]){const{api:a,currentPageMap:c,metricsMap:l}=e;if(!c)return;const u=t.font,p=c.words[c.words.length-1]||{y:null};p.y===s&&r-p.x-p.width>0&&(c.words.push({text:" ",x:p.x+p.width,y:p.y,width:r-p.x-p.width,start:p.end,end:p.end+1,font:p.font,matrix:o(t.getTransform())}),c.textLength++),null!=p.y&&s>p.y&&(c.words.push({text:"\n",x:p.x+p.width,y:p.y,width:0,start:p.end,end:p.end+1,font:p.font,matrix:o(t.getTransform())}),c.textLength++);let d=r;n.split(" ").reduce(((t,e,n,r)=>(/^ +$/.test(t[t.length-1])&&!e?t[t.length-1]+=" ":(t.push(e||" "),n<r.length-1&&t.push(" ")),t)),[]).forEach((n=>{var r;const i=null===(r=l.get(u))||void 0===r?void 0:r.get(n);i?(c.words.push({text:i.text,x:d,y:s,width:i.metrics.width,start:c.textLength,end:c.textLength+i.text.length,font:u,matrix:o(t.getTransform())}),c.textLength+=i.text.length,d+=i.metrics.width):(e.matchingBroken=!0,a.log("proxy.fillText","matching is broken",{word:n,fontStyle:u}))}))},clearRect(t,e,[n,r,s,o]){n<=0&&r<=0&&s>=1632&&o>=2112&&(e.pageCleared=!0)}},overrideSet:{strokeStyle:(t,e,n)=>"rgba(221,0,0,1)"===n||("rgba(66,133,244,1)"===n||void 0)}};function o(t){return{scaleX:t.a,scaleY:t.d,skewX:t.c,skewY:t.b,translateX:t.e,translateY:t.f}}Error;var i;!function(t){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}t.create=function(){return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}(i||(i={}));void 0!==self.requestIdleCallback&&self.requestIdleCallback;var a;!function(t){function e(t){return new Promise(t)}t.create=e,t.createCompletionSource=function(){let t,e;return{promise:new Promise(((n,r)=>{t=n,e=r})),resolve(e){t(e)},reject(t){e(t)}}},t.sync=function(t){return e(((e,n)=>e(t())))},t.delay=function(e){return t.create((t=>{setTimeout((()=>{t()}),e)}))}}(a||(a={}));Error;class c{constructor(t,e){this._transport=t,this._log=e,this._calls=new Map,this._sub=this._transport.inbound.subscribe((t=>{var e;const n=this._calls.get(t.id);if(n)try{"err"in t?n.reject(t.err):n.resolve(t.res)}finally{this._calls.delete(t.id)}else null===(e=this._log)||void 0===e||e.warn(`received rpc call response for unregistered call ${t.id}`)})),this.api=new Proxy({},{get:(t,e)=>"then"===e?void 0:(...t)=>this._handleCall(e,t)})}_handleCall(t,e){let n=i.create();for(;this._calls.has(n);)n=i.create();const r=a.createCompletionSource();return this._calls.set(n,r),this._transport.outbound({id:n,method:t,args:e}),r.promise}dispose(){this._sub.unsubscribe()}}function l(t){const{request:e,response:o}=function(t){return{request:`cs-grm-request-${t}`,response:`cs-grm-response-${t}`}}(t),i=new c(new n(document,o,e));!async function(){try{!function(){const t=self.HTMLCanvasElement.prototype.getContext;function e(...e){const n=t.call(this,...e);try{const[t]=e;if("2d"===t&&(null!==(o=n)&&void 0!==o.getTransform&&o.getTransform().is2D)){const t=function({api:t}){return{api:t,pageCleared:!1,matchingBroken:!1,currentPageMap:void 0,metricsMap:new Map}}({api:i.api});return function(t,{api:e,state:n}){return r(t,n,s,e)}(n,{api:i.api,state:t})}}catch(t){i.api.logException("getContext",t)}var o;return n}self.HTMLCanvasElement.prototype.getContext=e}(),await i.api.init()&&console.log("Grammarly communication channel has been successfully established.")}catch(t){try{await i.api.logException("init",t)}catch(t){}}}()}var u=e.m;export{u as startCanvasInjectedApp};