(window.webpackChunk=window.webpackChunk||[]).push([[108],{14281:(e,r,t)=>{t.r(r),t.d(r,{PreSendEmailPremiumPopup:()=>c});var a=t(5872),n=t(88326),o=t(27378),s=t(49708),l=t(39464),m=t(16237),i=t(5739),p=t(55200);const c=({isFlipped:e,onClosePreSendEmailPremiumPopup:r,openPlanComparisonPageFromPopup:t,alerts:a})=>o.createElement(i.F.div,null,a.view((e=>(0,l.t)(e.filter((e=>!e.isFree))))).view((a=>o.createElement(u,{isFlipped:e,onClosePreSendEmailPremiumPopup:r,openPlanComparisonPageFromPopup:t,friendlyGroupedLensAlerts:a}))));class u extends o.Component{componentDidMount(){this.documentClickSub=(0,s.R)(document,"click").subscribe((e=>!this.refs.popup.contains(e.target)&&e&&e.target&&!e.target.closest("grammarly-extension-before-send-hook")&&this.props.onClosePreSendEmailPremiumPopup("auto")))}componentWillUnmount(){var e;null===(e=this.documentClickSub)||void 0===e||e.unsubscribe()}render(){const{isFlipped:e,onClosePreSendEmailPremiumPopup:r,openPlanComparisonPageFromPopup:t,friendlyGroupedLensAlerts:s}=this.props,l=s.length>3?s.slice(0,2).concat({friendlyName:"more...",free:s.slice(2).reduce(((e,r)=>e+r.free),0),premium:s.slice(2).reduce(((e,r)=>e+r.premium),0)}):s;return o.createElement("div",{ref:"popup",className:(0,a.cs)(p.preSendEmailPremiumPopup,e&&p.flipped)},o.createElement("p",{className:p.header},"Grammarly For Gmail"),o.createElement("p",{className:p.title},"Are you sure you want to send this email with these advanced issues?"),o.createElement("div",{className:p.text},l.slice(0,3).map((e=>o.createElement("div",{className:p.category,key:e.friendlyName},o.createElement(m.A,{count:e.premium,kind:"gold",className:p.counter}),o.createElement("span",{className:p.name,title:e.friendlyName},e.friendlyName))))),o.createElement("div",{className:p.buttons},o.createElement(n.M,{clickHandler:t},o.createElement("button",{className:(0,a.cs)(p.button,p.upgrade)},"Learn more")),o.createElement(n.M,{clickHandler:()=>r("user")},o.createElement("button",{className:(0,a.cs)(p.button,p.close)},"Dismiss for a while"))),o.createElement("div",{className:(0,a.cs)(p.popupFooter,e&&p.isFlipped)},"▲"))}}},55200:e=>{e.exports={preSendEmailPremiumPopup:"_197uy",showWrapper:"wRPYW",flipped:"_2Nlke",header:"_3mZS2",title:"_3ToMa",category:"_1kPN5",name:"_2SbPC",counter:"_1b3tx",buttons:"aforp",button:"_1smMj",upgrade:"_3FqVG",close:"_3bLaS",popupFooter:"_1mQ3G",isFlipped:"Sj37H"}}}]);