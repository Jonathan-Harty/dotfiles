(window.webpackChunk=window.webpackChunk||[]).push([[547],{51897:(e,t,r)=>{var a=r(25682),i="chrome-extension://__MSG_@@extension_id__/",n="moz-extension://__MSG_@@extension_id__/",s=window.GR_RESOURCE_ROOT||i,o=window.GR_RESOURCE_ROOT||n;e.exports={__css:a.toString().replace(new RegExp(i,"g"),s).replace(new RegExp(n,"g"),o),...a.locals}},98403:(e,t,r)=>{r.d(t,{PU:()=>w,wW:()=>E,Ft:()=>F,wX:()=>C,gw:()=>B,Dx:()=>T,ab:()=>O,GQ:()=>R,RX:()=>N,Hl:()=>H,b2:()=>I,jw:()=>D,aI:()=>M});var a=r(25656),i=r(38983),n=r(8125),s=r(5114),o=r(95195),l=r(22232),d=r(83078),c=r(40151),h=r(76974),u=r(13444),m=r(44586),p=r(77176),g=r(12126),f=r(93508),b=r(91224),_=r(24209),v=r(17343),S=r(78674),x=r(28043),k=r(66310),P=r(8473),y=r(55935),A=r(14601),w=void 0;function E(e){return function(t){return e.set(t)}}var I,F=function(e){return(0,n.RN)(e,c.E)},C=function(e){return(0,n.RN)(c.E,e)},B=function(e,t){return h.of(e).pipe(u.g(t))};function T(e){return e instanceof m.y?e:h.of(e)}function O(e,t){return e instanceof m.y?e.pipe(p.U(t)):t(e)}function R(e){return g.D(e().then((function(e){return s.some(o.F2(e))})).catch((function(e){return s.some(o.t$(e))}))).pipe(f.O(s.none))}function N(e){return function(t,r){return r.pipe(b.K((function(r,a){return e.error(t+" exception",r),a}))).subscribe()}}function H(e,t,r){return void 0===r&&(r=!0),_.T(e.pipe(v.h(r)),e.pipe(S.b(t),v.h(!r))).pipe(x.x())}function D(e,t){var r=function(t){return"function"==typeof e?e(t):t[e]};return t.view(r).view((function(e){return function(e,t){var r=t.get();(0,l.kG)(e(r),"first value should satisfy predicate");var a=i.h.create(r),n=a.set.bind(a);a.set=function(r){e(r)?n(r):s.closed||t.set(r)};var s=t.pipe(P.o(e),y.T(1)).subscribe(E(a)).add(void 0!==t.set?a.subscribe(E(t)):A.w.EMPTY);return a}((function(t){return r(t)===e}),t)}))}function M(e){return d.dH((function(t){return m.y.create((function(r){try{return e(t)}catch(e){return r.error(e),a.Z}}))}),c.E)}!function(e){e.ricScheduler=function(t){return"requestIdleCallback"in window?function(e){var r=window;return m.y.create((function(a){var i=r.requestIdleCallback((function(t){(t.timeRemaining()>0||t.didTimeout)&&a.next(e)}),{timeout:t});return function(){return r.cancelIdleCallback(i)}}))}:e.rafScheduler},e.rafScheduler=function(e){return m.y.create((function(t){var r=requestAnimationFrame((function(){return t.next(e)}));return function(){return cancelAnimationFrame(r)}}))},e.syncScheduler=function(e){return h.of(e)},e.inRaf=function(t){return t.pipe(k.w(e.rafScheduler))},e.inRic=function(t,r){return t.pipe(k.w(e.ricScheduler(r)))}}(I||(I={}))},5178:(e,t,r)=>{r.d(t,{Q:()=>a,_:()=>s});var a,i=r(75003),n=r(53844);!function(e){e.readersAttention="readers_attention",e.settings="settings",e.smartPhrases="smart_phrases"}(a||(a={}));class s{constructor(e,t,r){this._assistantLayoutViewModel=e,this._domain=t,this._gnar=r}getDomain(){return this._domain}openFeedback(e){this._entryPoint=e,this._gnar.assistantFeedbackButtonClick(this._entryPoint),this._assistantLayoutViewModel.pushActiveView({type:i.a.Type.feedback})}submitFeedback(e){this._gnar.assistantFeedbackSubmitButtonClick(this._entryPoint,e.domain,e.text,(0,n.d)(e)?e.score:void 0)}get entryPoint(){return this._entryPoint}}},15401:(e,t,r)=>{r.r(t),r.d(t,{SmartPhrasesFeature:()=>B});var a=r(40327),i=r(23830),n=r(17404),s=r(5178),o=r(34311),l=r(56983),d=r(90361),c=r(74850),h=r(84966),u=r(80800),m=r(40018),p=r(14601),g=r(16118),f=r(77176),b=r(85985),_=r(2844),v=r(98403),S=r(80900),x=r(17343),k=r(2834),P=r(13444),y=r(42833),A=r(50628),w=r(28043),E=r(15646),I=r(5114),F=r(83078),C=r(38983);class B{constructor(e,t,r,a,i,s,o,l,h){this._highlights=e,this._alertProcessor=t,this._alertStateService=r,this._geometryProvider=a,this._textObserver=i,this._getCheckingService=s,this._assistantOpenState=o,this._experiments=l,this._gnar=h,this._subs=new p.w,this._log=c.Y.create("SmartPhrasesFeature"),this._smartPhrasesAlertState=new Map,this._addedPhraseHighlightId=C.h.create(null),this._activeSmartPhrasesAlertAssistant=C.h.create(null),this._activeSmartPhrasesAlertInline=C.h.create(null),this._subs.add(this._highlights.geometry.pipe(g.G(),f.U((([e,t])=>{const r=new Set(Array.from(e.values()).map((e=>e.meta.alertId)));return Array.from(t.values()).filter((e=>!r.has(e.meta.alertId))).map((e=>this._alertProcessor.alerts.getAlertById(e.meta.alertId))).find((e=>e&&n.S.isSmartPhrasesAlert(e)))})),b.h(d.fQ),b.h(n.S.isSmartPhrasesAlert)).subscribe((e=>{var t;return this._gnar.smartPhrasesIntentSentenceHighlight(e.title,(null===(t=this._experiments)||void 0===t?void 0:t.smartPhrasesInline)?"V2":"V1")}))),this._subs.add(_.aj([this._alertStateService.getActiveAlert(),this._assistantOpenState]).pipe(f.U((([e,t])=>"closed"===t?(null==e?void 0:e.alertId)&&this._alertProcessor.alerts.getAlertById(e.alertId):null)),f.U((e=>e&&n.S.isSmartPhrasesAlert(e)?e:null))).subscribe(v.wW(this._activeSmartPhrasesAlertInline)))}getAlertState(e){return this._smartPhrasesAlertState.get(e)}registerAlertState(e,t){this._smartPhrasesAlertState.set(e,t)}highlightAddedPhrase(e,t,r,a=!1){const i=S.H(100).pipe(x.h(o.y$.Id.create(`${e}-${r.trim().toLowerCase().replace(/\s+/g,"-")}`)),k.b((i=>{const n={start:t.start,end:t.start+r.length};this._log.trace(`Adding highlight to added phrase. Highlight ID: ${i}. Range:`,n),this._highlights.addHighlight(i,n,{highlightId:i,alertId:e,highlightColor:l.hE.green,highlightDisplayFormat:l.jk.backgroundOnly}),a&&this._addedPhraseHighlightId.set(i)})));this._subs.add(i.pipe(P.g(2500),b.h((()=>!a))).subscribe((e=>{this._removeHighlightFromAddedPhrase(e)})))}get pinRect(){return C.h.combine(this._activeSmartPhrasesAlertInline,this._activeSmartPhrasesAlertAssistant,this._addedPhraseHighlightId,((e,t,r)=>r?null:e||t)).view((e=>{var t;return(null===(t=this._experiments)||void 0===t?void 0:t.smartPhrasesInline)&&e?this._calculatePinRect(e):null}))}get addStateToRawAlertTransformer(){return e=>{if(h.wQ.isSmartPhrases(e)){const t=this.getAlertState(e.id);return t&&e.extra_properties.smart_phrases_intent?{...e,extra_properties:{...e.extra_properties,smart_phrases_alert_state:{...e.extra_properties.smart_phrases_alert_state,...t}}}:e}return e}}initCardActionsProcessing(e,t,r,i){this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesUpdateStateAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),I.chain((e=>m.bZ.getRawId(e))),F.bw((t=>this.registerAlertState(t,e.state))))))),this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesShowMiniCardAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),F.bw((e=>this._gnar.smartPhrasesAssistantCardMinifiedShow(e.title))))))),this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesShowFullCardAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),F.bw((e=>this._gnar.smartPhrasesAssistantCardExpandedShow(e.title))))))),this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesApplyAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),I.chain(m.bZ.getRawId),I.chain((e=>I.fromNullable(this._alertProcessor.alerts.getAlertById(e)))),I.filter(n.S.isSmartPhrasesAlert),F.bw((t=>{this.highlightAddedPhrase(h.wQ.Id.create(t.id),t.transformRange,t.replacements[e.originalReplacementIndex],!0),this._hideAppliedSmartPhrasesAlertOnContentChange=this._textObserver.contentChanges.async.pipe(y.u(S.H(1e3)),b.h((e=>e.changes.length>0)),A.P()).subscribe((()=>this._removeAppliedSmartPhrasesAlert())),this._subs.add(this._hideAppliedSmartPhrasesAlertOnContentChange),this._gnar.smartPhrasesAssistantCardExpandedReplacementApply(t.title,t.replacements[e.originalReplacementIndex])})))))),this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesShowMoreIdeasAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),F.bw((e=>{var t;this._removeHighlightFromAddedPhrase(),null===(t=this._hideAppliedSmartPhrasesAlertOnContentChange)||void 0===t||t.unsubscribe(),this._hideAppliedSmartPhrasesAlertOnContentChange=null,this._gnar.smartPhrasesAssistantCardExpandedShowMoreIdeasButtonClick(e.title)})))))),this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesDismissAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),F.bw((e=>this._gnar.smartPhrasesAssistantCardExpandedDismissButtonClick(e.title))))))),this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesFeedbackAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),F.bw((t=>{e.feedbackType===m.cm.SMART_PHRASES_INTENT_DETECTED_ACCURATE?this._gnar.smartPhrasesAssistantCardMinifiedYesButtonClick(t.title):e.feedbackType===m.cm.SMART_PHRASES_INTENT_DETECTED_INACCURATE&&this._gnar.smartPhrasesAssistantCardMinifiedNoButtonClick(t.title)})))))),this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesDoneAction)).subscribe((e=>(0,a.pipe)(t.getById(e.alertId),F.bw((t=>{this._removeHighlightFromAddedPhrase(),"user"===e.source?this._gnar.smartPhrasesAssistantCardExpandedDoneButtonClick(t.title):this._gnar.smartPhrasesAssistantCardHide(t.title)})))))),this._subs.add(this._assistantOpenState.pipe(w.x(),b.h((e=>"closed"===e))).subscribe((()=>this._removeAppliedSmartPhrasesAlert()))),this._subs.add(e.pipe(b.h(E.lY.isSmartPhrasesOpenFeedbackFormAction)).subscribe((()=>{r.openFeedback(s.Q.smartPhrases)}))),this._subs.add(_.aj([i.activeAlert,this._assistantOpenState]).pipe(f.U((([e,r])=>(0,a.pipe)(I.fromNullable("open"===r?e:null),I.chain((e=>t.getById(e.id))),I.chain(m.bZ.getRawId),I.fold((()=>null),(e=>e))))),f.U((e=>e?this._alertProcessor.alerts.getAlertById(e):null)),f.U((e=>e&&n.S.isSmartPhrasesAlert(e)?e:null))).subscribe(v.wW(this._activeSmartPhrasesAlertAssistant)))}static shouldCreate(e,t,r,a){var i,n,s,o;const l=null!==(s=null===(n=null===(i=t.smartPhrases)||void 0===i?void 0:i.enableByBrowser)||void 0===n?void 0:n[e])&&void 0!==s&&s,d=Boolean(null===(o=r.experiments)||void 0===o?void 0:o.smartPhrases);return l&&d&&"docs.google.com"!==a}_removeAppliedSmartPhrasesAlert(){this._removeHighlightFromAddedPhrase(),this._smartPhrasesAlertState.forEach(((e,t)=>{var r;e.hideReplacements&&this._alertProcessor.alerts.getAlertById(t)&&(this._log.trace("Dismissing used SmartPhrases alert:",t),null===(r=this._getCheckingService())||void 0===r||r.onAlertHideById(t,h.e3.Sidebar),this._alertProcessor.removeAlert(t,{_tag:i.i.alertAccepted}),this._smartPhrasesAlertState.delete(t))}))}_removeHighlightFromAddedPhrase(e){const t=this._addedPhraseHighlightId.get(),r=null!=e?e:t;r&&(this._log.trace(`Removing highlight from added phrase. Highlight ID: ${r}.`),this._highlights.removeHighlights([r]),t&&this._addedPhraseHighlightId.set(null))}_calculatePinRect(e){const t=this._geometryProvider.create({start:e.transformRange.start-1,end:e.transformRange.end},this._textObserver.getCurrentTextMap());if(t){const e=this._geometryProvider.getClientRects(t);return e?Array.from(e)[0]:null}return null}dispose(){this._subs.unsubscribe()}}B.getRequiredDenaliSupportedFeatures=(e,t,r,a)=>B.shouldCreate(e,t,r,a)?[u.zV.smartPhrases]:[]},29207:(e,t,r)=>{r.r(t),r.d(t,{SmartPhrasesCardView:()=>a.K,SmartPhrasesPinView:()=>h});var a=r(77753),i=r(27378),n=r(20855),s=r(23828),o=r(12187),l=r(11702);const d=({height:e,top:t,left:r,tooltipMessage:a="Text will be added here.",position:d="absolute",zIndex:c="auto"})=>{const[h,u]=i.useState(!0);return(0,s.x)((()=>u(!1)),3e3,[h],(()=>h)),i.createElement("div",{"data-grammarly-part":"add-text-pin",className:l.addTextPin,style:{top:t,left:r,height:e,position:d,zIndex:c}},i.createElement(n.u,{showDelay:500,message:a,forceHovered:h},i.createElement("div",Object.assign({},(0,o.Sh)(l.addTextPinHead,h?l.addTextPinHeadHovered:null)),i.createElement("div",{className:l.addTextPinHeadAnimationHover}))),i.createElement("div",{className:l.addTextPinBody},i.createElement("div",Object.assign({},(0,o.Sh)(l.addTextPinBodyAnimationRing,l.addTextPinBodyAnimationRingInner))),i.createElement("div",Object.assign({},(0,o.Sh)(l.addTextPinBodyAnimationRing,l.addTextPinBodyAnimationRingOuter)))))};var c=r(5739);const h=({rect:e,zIndex:t})=>i.createElement(c.F.Fragment,null,e.view((e=>e?i.createElement(d,{position:"fixed",zIndex:t,left:e.left+2,top:e.top,height:e.height,tooltipMessage:"This is where your phrase will be inserted."}):null)))},95888:(e,t,r)=>{r.d(t,{J:()=>l});var a=r(27378),i=r(53112);const n=({color:e=i.Z.neutral0})=>a.createElement("svg",{width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{filter:"url(#filter0_d)"},a.createElement("path",{d:"M3 5L6.5 8.5L13 2",stroke:e,strokeWidth:"2"})),a.createElement("defs",null,a.createElement("filter",{id:"filter0_d",x:"0.292892",y:"0.292847",width:"15.4142",height:"12.6213",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),a.createElement("feOffset",{dy:"1"}),a.createElement("feGaussianBlur",{stdDeviation:"1"}),a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.211765 0 0 0 0 0.34902 0 0 0 0 0.709804 0 0 0 0.5 0"}),a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))));var s=r(12187),o=r(53358);const l=({onChange:e=(()=>null),labelId:t,className:r,children:i})=>{const[l,d]=a.useState(!1);a.useEffect((()=>{e(l)}),[l]);const c=e=>{e.preventDefault(),e.stopPropagation(),d(!l)};return a.createElement("div",{"data-grammarly-part":"ui-kit-checkbox",className:r},a.createElement("div",{className:o.checkboxContainer},a.createElement("div",Object.assign({},(0,s.Sh)(o.checkbox,l?o.checkboxChecked:null),{role:"checkbox","aria-checked":l,tabIndex:0,"aria-labelledby":t,onKeyDown:e=>{" "===e.key&&c(e)},onClick:c}),l?a.createElement(n,null):null),a.createElement("label",{id:t,onClick:c},i)))}},47422:(e,t,r)=>{r.d(t,{z:()=>l});var a=r(27378),i=r(84488),n=r(68370),s=r(51897),o=r.n(s);const l=({placeholder:e,onChange:t,ariaLabel:r,className:s})=>{const[l,d]=a.useState("");return a.useEffect((()=>{t(l)}),[l]),a.createElement(i.G,{"data-grammarly-part":"ui-kit-textbox",className:s,style:{width:"100%",height:"100%"}},a.createElement(n.b,null,o().__css),a.createElement("div",{role:"textbox",className:o().textBox,contentEditable:!0,onInput:e=>d(e.target.innerText),"data-placeholder":e,"aria-placeholder":e,"aria-label":r}))}},53844:(e,t,r)=>{r.d(t,{q:()=>f,d:()=>g});var a=r(27378),i=r(12187),n=r(21420);const s=({options:e,onChange:t=(()=>null),ariaLabel:r,className:s})=>{const o=[],[l,d]=a.useState(null);a.useEffect((()=>{var r;null!==l&&(null===(r=o[l])||void 0===r||r.focus()),t(null!==l?e[l].value:null)}),[l]);const c=null!==l?e[l]:null;return a.createElement("div",{"data-grammarly-part":"ui-kit-radio-group",className:s},a.createElement("div",{className:n.radioGroup,role:"radiogroup","aria-label":r,onKeyDown:t=>{if(" "!==t.key||c){if("ArrowRight"===t.key||"ArrowDown"===t.key){t.preventDefault(),t.stopPropagation();d(((l||0)+1)%e.length)}else if("ArrowLeft"===t.key||"ArrowUp"===t.key){t.preventDefault(),t.stopPropagation();const r=(l||0)-1;d(r<0?e.length-1:r)}}else t.preventDefault(),t.stopPropagation(),d(0)}},e.map(((e,t)=>{const r=(null==c?void 0:c.value)===e.value,s=0===t;return a.createElement("div",Object.assign({key:e.value},(0,i.Sh)(n.radioGroupOption,r?n.radioGroupOptionSelected:null),{role:"radio",tabIndex:r||s&&!c?0:-1,"aria-checked":r,onClick:e=>{e.preventDefault(),e.stopPropagation(),d(t)},ref:e=>o.push(e)}),e.render())}))))};var o,l=r(24606),d=r(47422),c=r(95888),h=r(53112),u=r(5872),m=r(51217),p=r(44544);function g(e){return"score"in e}!function(e){e.bad="bad",e.ok="ok",e.good="good"}(o||(o={}));const f=e=>{const t=[o.bad,o.ok,o.good],[r,n]=a.useState(null),[g,f]=a.useState(""),[b,_]=a.useState(!1),[v,S]=a.useState(!1);let x;return x=v?a.createElement("div",Object.assign({"data-grammarly-part":"surveys-feedback-form-thank-you"},(0,i.Sh)(m.feedbackFormContainer,m.feedbackFormContainerAlignCenter)),a.createElement("div",{className:m.feedbackFormSuccessMessageTextContainer},a.createElement("div",{className:m.feedbackFormSuccessMessageIcon}),a.createElement("div",{className:m.feedbackFormSuccessMessageTitle},"Thank you!"),a.createElement("div",{className:m.feedbackFormSuccessMessageSubtitle},"Your feedback helps us improve.")),a.createElement(l.z,{containerClassName:(0,u.cs)(m.feedbackFormSubmitButton,e.fixSubmitButtonOverflowBottomPadding?m.feedbackFormSubmitButtonFixOverflowBottomPadding:null),kind:"success",type:"submit",onClick:e.onClose,style:{height:"32px"}},"Done")):a.createElement("div",Object.assign({"data-grammarly-part":"surveys-feedback-form-fields"},(0,i.Sh)(m.feedbackFormContainer,"center"===e.align?m.feedbackFormContainerAlignCenter:null)),a.createElement("div",{className:m.feedbackFormFields},e.hideLogo?null:a.createElement("div",{className:m.feedbackFormLogo}),a.createElement("div",{className:m.feedbackFormTitle},e.title||a.createElement("span",null,"How do you like ",a.createElement("br",null)," Grammarly?")),e.withScore?a.createElement(a.Fragment,null,a.createElement(s,{ariaLabel:"Feedback Score",options:t.map((e=>({value:e,render(){let t,r;return e===o.bad?(t=p.feedbackFormOptionIconDisheartening,r="Dissatisfied"):e===o.ok?(t=p.feedbackFormOptionIconNeutral,r="It's Ok"):(t=t=p.feedbackFormOptionIconSmiling,r="Satisfied"),a.createElement("div",{className:p.feedbackFormOption},a.createElement("div",Object.assign({},(0,i.Sh)(p.feedbackFormOptionIcon,t))),a.createElement("div",null,r))}}))),onChange:n,className:m.feedbackFormScore}),a.createElement("div",{className:m.feedbackFormTextBoxTitle},"How can we improve?")):null,a.createElement(d.z,{onChange:f,placeholder:"Tell us what you think",ariaLabel:"Feedback Text",className:m.feedbackFormTextBox}),e.domain?a.createElement(a.Fragment,null,a.createElement("div",{className:m.feedbackFormShareDomainTitle},"Help improve Grammarly by sharing the domain you’re on:"),a.createElement(c.J,{labelId:"feedback-form-share-domain-checkbox",onChange:_,className:m.feedbackFormShareDomainCheckbox},"Include the domain ",a.createElement("b",null,e.domain)," with my feedback")):null),a.createElement(l.z,{containerClassName:(0,u.cs)(m.feedbackFormSubmitButton,e.fixSubmitButtonOverflowBottomPadding?m.feedbackFormSubmitButtonFixOverflowBottomPadding:null),kind:"success",type:"submit",disabled:e.withScore?!r:!g,onClick:()=>{var t,a;e.withScore&&r?(null===(t=e.onSubmit)||void 0===t||t.call(e,{score:r,text:g,domain:b?e.domain:void 0}),S(!0)):!e.withScore&&g&&(null===(a=e.onSubmit)||void 0===a||a.call(e,{text:g,domain:b?e.domain:void 0}),S(!0))},style:{height:"32px",background:(e.withScore?r:g)?void 0:h.Z.neutral40}},"Submit")),a.createElement("div",{style:{height:"100%",...e.style},"data-grammarly-part":"surveys-feedback-form"},x)};f.defaultProps={hideLogo:!1,align:"center",fixSubmitButtonOverflowBottomPadding:!1}},25682:(e,t,r)=>{var a=r(93476)((function(e){return e[1]}));a.push([e.id,"._380Y1-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._380Y1-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",""]),a.locals={textBox:"_380Y1-textBox"},e.exports=a},53358:e=>{e.exports={checkboxContainer:"_30OQ2",checkbox:"_1eqmB",checkboxChecked:"_105R3"}},21420:e=>{e.exports={radioGroup:"_3jZFB",radioGroupOption:"_1Boe7",radioGroupOptionSelected:"_37tnK"}},11702:e=>{e.exports={addTextPin:"_2g-uW",addTextPinHead:"_2kBck",addTextPinHeadAnimationHover:"_2Nt4p",addTextPinHeadHovered:"_1pIf",pinHeadAnimationHover:"_3zvrY",addTextPinBody:"_3qZMz",addTextPinBodyAnimationRing:"P8hci",addTextPinBodyAnimationRingInner:"_3J-ag",pinBodyAnimationRingInner:"-EM3h",addTextPinBodyAnimationRingOuter:"d30Lb",pinBodyAnimationRingOuter:"tlOxH",spin:"_3M1r1"}},51217:e=>{e.exports={feedbackFormContainer:"_1M-GI",feedbackFormContainerAlignCenter:"_3QNrK",feedbackFormFields:"Jg_OY",feedbackFormTitle:"nPjzw",feedbackFormTextBoxTitle:"_2yUbL",feedbackFormLogo:"_2C-d7",feedbackFormScore:"_3AmBq",feedbackFormTextBox:"FO2oU",feedbackFormShareDomainTitle:"_2UXTO",feedbackFormShareDomainCheckbox:"_3mSXM",feedbackFormSubmitButton:"_32xYR",feedbackFormSubmitButtonFixOverflowBottomPadding:"IJDSA",feedbackFormSuccessMessageTextContainer:"_2JO6Z",feedbackFormSuccessMessageIcon:"oVxds",feedbackFormSuccessMessageTitle:"_1MdvM",feedbackFormSuccessMessageSubtitle:"_1EKkw",spin:"_2ycFE"}},44544:e=>{e.exports={feedbackFormOption:"_9K_Q8",feedbackFormOptionIcon:"_259oL",feedbackFormOptionIconDisheartening:"_3NJTM",feedbackFormOptionIconNeutral:"i-5N8",feedbackFormOptionIconSmiling:"_1Dxi9",spin:"_2elyX"}},16118:(e,t,r)=>{r.d(t,{G:()=>n});var a=r(59312),i=r(98036);function n(){return function(e){return e.lift(new s)}}var s=function(){function e(){}return e.prototype.call=function(e,t){return t.subscribe(new o(e))},e}(),o=function(e){function t(t){var r=e.call(this,t)||this;return r.hasPrev=!1,r}return a.ZT(t,e),t.prototype._next=function(e){var t;this.hasPrev?t=[this.prev,e]:this.hasPrev=!0,this.prev=e,t&&this.destination.next(t)},t}(i.L)},42833:(e,t,r)=>{r.d(t,{u:()=>n});var a=r(59312),i=r(46601);function n(e){return function(t){return t.lift(new s(e))}}var s=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){return t.subscribe(new o(e,this.notifier))},e}(),o=function(e){function t(t,r){var a=e.call(this,t)||this;a.hasValue=!1;var n=new i.IY(a);a.add(n),a.innerSubscription=n;var s=(0,i.ft)(r,n);return s!==n&&(a.add(s),a.innerSubscription=s),a}return a.ZT(t,e),t.prototype._next=function(t){this.hasValue&&e.prototype._next.call(this,t)},t.prototype.notifyNext=function(){this.hasValue=!0,this.innerSubscription&&this.innerSubscription.unsubscribe()},t.prototype.notifyComplete=function(){},t}(i.Ds)}}]);