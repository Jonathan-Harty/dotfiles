var webClient=(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[3],{132:function(e,n,t){"use strict";var r=t(46);function i(e,n){return void 0===n?{type:e}:{type:e,payload:n}}var a=t(350),_="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&s.test(e)},u=[],E=0;E<256;++E)u.push((E+256).toString(16).substr(1));var l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase();if(!c(t))throw TypeError("Stringified UUID is invalid");return t};var d=function(e,n,t){var r=(e=e||{}).random||(e.rng||function(){if(!_)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _(o)})();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var i=0;i<16;++i)n[t+i]=r[i];return n}return l(r)};var f,I=t(36),A=t(5),p=t(262),S=t(554);function O(e){switch(e){case S.a.Address:return I.b.Address;case S.a.PaymentCard:return I.b.CreditCard;case S.a.Password:default:return I.b.Password}}function T(e,n,t){return{"Fill Session Id":e,Source:t,"Item Type":n}}function m(e,n){return function(t,r){var i=r.page.sections.find(function(n){return n.id===e});if(i){var a=i.type,_=i.sessionId,o=i.source,s=i.fields.find(function(e){return e.id===n});if(_&&o&&s&&s.fill){var c=O(a);return Object(p.b)("LastPass Fill Modified",Object(A.a)({},T(_,c,o),{"Field Type":s?s.type:""}))}}}}function R(e,n,t){return function(r){return Object(p.b)("LastPass Fill Initiated",Object(A.a)({},T(e,O(n),t),{"Is Launch":!!r.launchedId}))}}t.d(n,"a",function(){return v}),t.d(n,"b",function(){return L}),function(e){e.RESET="[fill] reset",e.STATE_CHANGE="[fill] state change",e.FILL="[fill] fill",e.RESET_TAB_STATE="[fill] reset tab state",e.FILL_VALUES="[fill] fill values",e.SET_PASSWORD_FILLED="[fill] set password filled",e.UPDATE_CONTEXT_MENU="[fill] update context menu",e.CHANGE_INPUTS="[fill] change inputs",e.SECTION_FILLED="[fill] section filled",e.SET_SECTIONS="[fill] set sections",e.ITEMS_TO_SAVE_DETECTED="[save] items to save detected",e.SAVE_ITEMS="[save] save items",e.RESIZE_INFIELD_CONTAINER="[fill] resize infield container",e.LAUNCH="[fill] launch",e.SET_USERNAME="[fill] set username",e.SET_LAUNCHED="[fill] set launched",e.CLEAR_ACTIVE_PAGE="[fill] clear active page"}(f||(f={}));var N,v={reset:function(e){return i(f.RESET,{initialPageState:e})},stateChange:function(e){return i(f.STATE_CHANGE,{state:e})},fill:function(e){var n,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I.c.Null,i=arguments.length>2?arguments[2]:void 0,_=d();return Object(a.b)((n=f.FILL,void 0===(t={sectionId:i,vaultRecord:e,fillSessionId:_,source:r})?{type:n}:{type:n,payload:t}),{segment:R(_,e.recordType,r)})},clearActivePage:function(){return Object(r.a)(f.CLEAR_ACTIVE_PAGE)},updateContextMenu:function(e){return i(f.UPDATE_CONTEXT_MENU,{records:e})},setUsername:function(e,n){return Object(r.a)(f.SET_USERNAME,{page:e,username:n})},launch:function(e){return Object(r.a)(f.LAUNCH,{vaultRecord:e})},setLaunched:function(e,n){return i(f.SET_LAUNCHED,{id:e,tabId:n})},resetTabState:function(e){return Object(r.a)(f.RESET_TAB_STATE,{tabId:e})},fillValues:function(e,n,t,i,a,_){return Object(r.a)(f.FILL_VALUES,{page:e,values:n,sessionId:i,sectionId:t,recordId:a,source:_})},setPasswordFilled:function(e,n){return Object(r.a)(f.SET_PASSWORD_FILLED,{page:e,id:n})},changeInput:function(e,n,t){return Object(a.b)(i(f.CHANGE_INPUTS,{sectionId:e,id:n,value:t}),{segment:m(e,n)})},setSections:function(e){return i(f.SET_SECTIONS,{sections:e})},sectionFilled:function(e){return i(f.SECTION_FILLED,{section:e})},itemsToSaveDetected:function(e,n,t){return i(f.ITEMS_TO_SAVE_DETECTED,{itemsToSave:e,numberOfKind:n,submittedHostname:t})},resizeInfieldContainer:function(e,n){return i(f.RESIZE_INFIELD_CONTAINER,{width:e,height:n})}};!function(e){e.ANIMATION_DONE="[save prompt] animationDone",e.CANCEL="[save prompt] cancel",e.SAVE="[save prompt] save",e.RESIZE="[save prompt] resize",e.SET_ACTIVE_SCREEN="[save prompt] set active screen",e.TRY_AGAIN="[save prompt] try again",e.SET_ICON_DATA="[save prompt] set icon data"}(N||(N={}));var L={cancel:function(){return i(N.CANCEL)},animationDone:function(){return i(N.ANIMATION_DONE)},save:function(e){return i(N.SAVE,{records:e})},resize:function(e,n){return i(N.RESIZE,{width:e,height:n})},tryAgain:function(){return i(N.TRY_AGAIN)},setIconData:function(e){return i(N.SET_ICON_DATA,{data:e})},setActiveScreen:function(e,n,t,i){return Object(r.a)(N.SET_ACTIVE_SCREEN,{tabId:e,frameId:n,url:t,screen:i})}}},18:function(e,n,t){"use strict";var r;t.d(n,"a",function(){return r}),function(e){e.ENTERPRISE="Enterprise",e.ENTERPRISE_EXPIRED="Enterprise_Expired",e.ENTERPRISE_TRIAL="Enterprise_Trial",e.ENTERPRISE_TRIAL_EXPIRED="Enterprise_Trial_Expired",e.FAMILY="Family",e.FAMILY_EXPIRED="Family_Expired",e.FAMILY_TRIAL="Family_Trial",e.FAMILY_TRIAL_EXPIRED="Family_Trial_Expired",e.FREE="Free",e.PREMIUM="Premium",e.PREMIUM_TRIAL="Premium_Trial",e.TEAMS="Teams",e.TEAMS_EXPIRED="Teams_Expired",e.TEAMS_TRIAL="Teams_Trial",e.TEAMS_TRIAL_EXPIRED="Teams_Trial_Expired"}(r||(r={}))},262:function(e,n,t){"use strict";function r(e,n){return{event:e,properties:n}}function i(e){return r(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0)}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i})},345:function(e,n,t){"use strict";function r(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return t.reduce(function(e,n){return new URL(n,e).href},e)}t.d(n,"a",function(){return r})},348:function(e,n,t){"use strict";t.d(n,"a",function(){return _});var r=t(5),i=t(41),a=t(113);function _(e,n){return function(t,_){if(!t){var o=n(t,_);return Object(r.a)({},e,o)}if(_.type===i.a)return Object(a.apply_patch)(t,_.payload);var s=n(t,_);return function(e,n){for(var t in n)if(e[t]!==n[t])return!0;return!1}(t,s)?Object(r.a)({},t,s):t}}},350:function(e,n,t){"use strict";var r,i=t(16),a=t(5),_=function(e){return Array.isArray(e)?e:[e]},o="[tracking] segment event";function s(e,n){return Object(a.a)({},e,{events:n})}function c(e,n){if(n){var t=Object(a.a)({},e),r=function(r){var i=e[r];t[r]=function(){var e=i.apply(void 0,arguments);return Object(a.a)({},e,{metadata:n})}};for(var i in e)r(i);return t}return e}function u(e,n,t){var r=n.event,i=n.properties;e&&e(r,i,t)}function E(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.passThrough,a=n.enabledSelector,s={},c=[],E=function(n){return function(_){return function(E){if(function(e){return e.type===o}(E))t?_(E):u(s[r.SEGMENT],E.payload);else{var l=E.events,d=E.metadata,f=Object(i.a)(E,["events","metadata"]);if(l){var I=n.getState();if(!a||a(I))for(var A in l)e(l,A,I,d)}_(f),c=c.filter(function(e){return e(n.getState())})}}}};return E.initialize=function(n){e=function(e,n){var t=function(e,t,r){_(e).forEach(function(e){!function(e){return"function"===typeof e}(e)?r(e):n(function(e,n,t){return function(r){var i=e(r,n);switch(typeof i){case"boolean":return i;case"undefined":return!0;default:return i&&t(i),!1}}}(e,t,r))})};return function(n,i,a,_){switch(i){case r.LEGACY_SEGMENT:case r.SEGMENT:t(n[i],a,function(n){u(e[i],n,_)});break;case r.GOOGLE_ANALYTICS:t(n[i],a,function(n){!function(e,n){e&&e(n)}(e[i],n)})}}}(s=n,function(e){c.push(e)})},E}t.d(n,"b",function(){return s}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return E}),function(e){e.LEGACY_SEGMENT="legacySegment",e.SEGMENT="segment",e.GOOGLE_ANALYTICS="google"}(r||(r={}))},36:function(e,n,t){"use strict";var r,i,a,_,o,s,c,u,E,l,d,f,I,A,p,S,O,T,m,R,N,v,L,g,D,C,b,M,P,h,y,U,w,G,F,V,B,x,H,j,k,W,Y,X,K,z,Z,q,J,Q,$,ee,ne,te,re;t.d(n,"b",function(){return M}),t.d(n,"c",function(){return P}),t.d(n,"a",function(){return J}),t.d(n,"d",function(){return Q}),function(e){e.Anonymous="Anonymous",e.Enterprise="Enterprise",e.EnterpriseExpired="Enterprise_Expired",e.EnterpriseTrial="Enterprise_Trial",e.EnterpriseTrialExpired="Enterprise_Trial_Expired",e.Family="Family",e.FamilyExpired="Family_Expired",e.FamilyTrial="Family_Trial",e.FamilyTrialExpired="Family_Trial_Expired",e.Free="Free",e.Premium="Premium",e.PremiumTrial="Premium_Trial",e.Teams="Teams",e.TeamsExpired="Teams_Expired",e.TeamsTrial="Teams_Trial",e.TeamsTrialExpired="Teams_Trial_Expired"}(r||(r={})),function(e){e.LastPassLegacy="LastPass Legacy",e.UnifiedAdminConsole="Unified Admin Console"}(i||(i={})),function(e){e.UserDetail="User Detail",e.UsersOverview="Users Overview"}(a||(a={})),function(e){e.API="api",e.Android="android",e.CR="cr",e.Dolphin="dolphin",e.Edge="edge",e.Edgecr="edgecr",e.EntInvite="ent_invite",e.Fennec="fennec",e.Ff="ff",e.Installer="installer",e.Iphone="iphone",e.Iwallet="iwallet",e.MX="mx",e.Macapp="macapp",e.Op="op",e.Sfjs="sfjs",e.Sfx="sfx",e.Web="web",e.Winmetro="winmetro",e.Winphone="winphone"}(_||(_={})),function(e){e.SSOAppsHome="SSO Apps Home"}(o||(o={})),function(e){e.AddUsersDrawer="Add Users Drawer",e.AdminDashboard="Admin Dashboard",e.ConfirmModal="Confirm Modal",e.InactiveUsersDrawer="Inactive Users Drawer",e.InviteUsersDrawer="Invite Users Drawer",e.ReinviteUsersDrawer="Reinvite Users Drawer",e.UserDetailsDrawer="User Details Drawer",e.UsersOverview="Users Overview",e.WeakMasterPasswordUsersDrawer="Users With Weak Master Password Drawer"}(s||(s={})),function(e){e.AccountHistory="Account History",e.BuyPremium="Buy Premium",e.CreditMonitoring="Credit Monitoring",e.DeletedItems="Deleted Items",e.EnterpriseTrial="Enterprise Trial",e.Export="Export",e.FamiliesTrial="Families Trial",e.FavoriteSites="Favorite Sites",e.Identities="Identities",e.Import="Import",e.ImproveSecurity="Improve Security",e.ManageOTP="Manage OTP",e.PasswordGenerator="Password Generator",e.RemoveLinkedAccount="Remove Linked Account",e.SharedKeyGenerator="Shared Key Generator",e.UpdateVault="Update Vault"}(c||(c={})),function(e){e.ExtensionDropdown="Extension Dropdown",e.Vault="Vault"}(u||(u={})),function(e){e.Admin="Admin",e.CustomAdmin="Custom Admin",e.SuperAdmin="Super Admin"}(E||(E={})),function(e){e.LaunchURL="Launch URL",e.MissingURL="Missing URL",e.OpenURL="Open URL"}(l||(l={})),function(e){e.PasswordSecurity="Password Security",e.SecurityAlert="Security Alert"}(d||(d={})),function(e){e.ADConnector="AD Connector",e.AzureAD="Azure AD",e.Okta="Okta",e.OneLogin="OneLogin"}(f||(f={})),function(e){e.SecurityDashboard="Security Dashboard"}(I||(I={})),function(e){e.Close="Close",e.ContinueMonitoring="Continue Monitoring",e.StopMonitoring="Stop Monitoring"}(A||(A={})),function(e){e.Agree="Agree",e.Close="Close",e.LearnMore="Learn More"}(p||(p={})),function(e){e.GroupDetails="Group Details",e.GroupsOverview="Groups Overview"}(S||(S={})),function(e){e.Active="Active",e.AwaitingApproval="Awaiting Approval",e.Disabled="Disabled",e.Invited="Invited",e.Staged="Staged"}(O||(O={})),function(e){e.Browser="Browser",e.Extension="Extension",e.Generate="Generate",e.IOSAutofill="iOS Autofill",e.Manual="Manual",e.Menu="Menu",e.SecurityDashboard="Security Dashboard",e.Settings="Settings",e.Shortcut="Shortcut",e.Site="Site",e.The3D="3D",e.Vault="Vault"}(T||(T={})),function(e){e.BankAccount="bank account",e.Custom="custom",e.Database="database",e.DriversLicense="drivers license",e.Email="email",e.Generic="generic",e.HealthInsurance="health insurance",e.InstantMessenger="instant messenger",e.InsurancePolicy="insurance policy",e.Membership="membership",e.Null="null",e.Passport="passport",e.Password="password",e.PaymentCard="payment card",e.SSH="ssh",e.Server="server",e.SoftwareLicense="software license",e.Ssn="ssn",e.Wifi="wifi"}(m||(m={})),function(e){e.Accept="Accept",e.Close="Close",e.NotNow="Not Now"}(R||(R={})),function(e){e.Active="Active",e.All="All",e.AwaitingAproval="Awaiting Aproval",e.Disabled="Disabled",e.ExpiredInvitation="ExpiredInvitation",e.Invited="Invited",e.Staged="Staged"}(N||(N={})),function(e){e.AttendTraining="Attend Training",e.Support="Support",e.Tutorials="Tutorials",e.VaultTour="Vault Tour"}(v||(v={})),function(e){e.Dismiss="Dismiss",e.LearnMore="Learn More",e.MainCTA="Main CTA"}(L||(L={})),function(e){e.FamilyManager="Family Manager",e.FamilyMember="Family Member",e.None="None"}(g||(g={})),function(e){e.ExtensionDropdown="Extension Dropdown",e.VaultPopUp="Vault Pop Up"}(D||(D={})),function(e){e.AccountSettings="Account Settings",e.AdvancedOptions="Advanced Options",e.EmergencyAccess="Emergency Access",e.Help="Help",e.SecurityDashboard="Security Dashboard",e.SharingCenter="Sharing Center"}(C||(C={})),function(e){e.None="None"}(b||(b={})),function(e){e.Address="Address",e.CreditCard="Credit Card",e.Password="Password"}(M||(M={})),function(e){e.Autofill="Autofill",e.ContextMenu="Context Menu",e.Hotkey="Hotkey",e.IconDropdown="Icon Dropdown",e.InfieldV2="Infield V2",e.Null="null",e.Sites="Sites",e.Vault="Vault"}(P||(P={})),function(e){e.Folder="Folder",e.Individual="Individual",e.None="None"}(h||(h={})),function(e){e.DarkWebMonitor="Dark Web Monitor",e.SecurityScore="Security Score"}(y||(y={})),function(e){e.SecurityDashboard="Security Dashboard",e.Settings="Settings"}(U||(U={})),function(e){e.Activate="Activate",e.Manage="Manage"}(w||(w={})),function(e){e.Dismiss="Dismiss",e.GoPremium="Go Premium",e.LearnMore="Learn More",e.Logout="Logout",e.Switch="Switch"}(G||(G={})),function(e){e.ExtensionDropdown="Extension Dropdown",e.ExtensionDropdownBanner="Extension Dropdown Banner",e.InfieldDropdown="Infield Dropdown",e.VaultOverlay="Vault Overlay",e.VaultPopUp="Vault Pop Up"}(F||(F={})),function(e){e.Confirm="Confirm",e.Dismiss="Dismiss",e.GoPremium="Go Premium"}(V||(V={})),function(e){e.Desktop="Desktop",e.Mobile="Mobile"}(B||(B={})),function(e){e.All="All",e.AllAtRisk="All at Risk",e.Missing="Missing",e.Old="Old",e.Reused="Reused",e.Weak="Weak"}(x||(x={})),function(e){e.PolicyDetailPage="Policy Detail Page",e.PolicyOverviewPage="Policy Overview Page"}(H||(H={})),function(e){e.ExtensionDropdown="Extension Dropdown",e.ExtensionDropdownBanner="Extension Dropdown Banner",e.VaultOverlay="Vault Overlay",e.VaultPopUp="Vault Pop Up"}(j||(j={})),function(e){e.UserDetail="User Detail"}(k||(k={})),function(e){e.InviteExpired="InviteExpired",e.Invited=" Invited",e.Staged="Staged"}(W||(W={})),function(e){e.UserDetails="User Details",e.UsersOverview="Users Overview"}(Y||(Y={})),function(e){e.Back="Back",e.Close="Close",e.Continue="Continue",e.Discard="Discard"}(X||(X={})),function(e){e.Back="Back",e.Continue="Continue",e.Discard="Discard",e.ReadInstructions="Read Instructions",e.SaveAndClose="Save and Close"}(K||(K={})),function(e){e.Close="Close",e.Continue="Continue",e.Discard="Discard",e.LearnMore="Learn More"}(z||(z={})),function(e){e.Save="Save",e.SaveAndAssign="Save and Assign"}(Z||(Z={})),function(e){e.DarkWeb="Dark Web",e.MasterPassword="Master Password"}(q||(q={})),function(e){e.Dwm="DWM",e.Main="Main",e.Passwords="Passwords"}(J||(J={})),function(e){e.V1="V1",e.V2="V2"}(Q||(Q={})),function(e){e.InviteExpired="InviteExpired",e.Invited="Invited",e.Staged="Staged"}($||($={})),function(e){e.ActingUserIsHelpdeskAdmin="ActingUserIsHelpdeskAdmin",e.ActingUserIsInEu="ActingUserIsInEu",e.ActingUserIsNotAdmin="ActingUserIsNotAdmin",e.ActingUserNotFound="ActingUserNotFound",e.PermissionDenied="PermissionDenied",e.ServerFailure="ServerFailure"}(ee||(ee={})),function(e){e.Password="Password",e.Sso="SSO"}(ne||(ne={})),function(e){e.AccountStatus="Account Status",e.AddUsers="Add Users",e.Admin="Admin",e.Applications="Applications",e.Entry="Entry ",e.Policies="Policies",e.Reports="Reports",e.Users="Users"}(te||(te={})),function(e){e.False="False",e.True="True"}(re||(re={}))},384:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r={colors:{blue:{lighter:"#f5f7f8",light:"#00a3e0",neutral:"#3598db",dark:"#3c4862"},grey:{lighter:"#e7e8ea",light:"#c3cbcb",neutral:"#646d73",dark:"#52585b"},orange:{neutral:"#f39c12"},green:{light:"#5fd889"},red:{light:"#d22d27"},black:"black",white:"#ffffff"},fonts:{primary:"'Open Sans', sans-serif"}}},41:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r="[state-sync]"},46:function(e,n,t){"use strict";function r(e,n){return void 0===n?{type:e}:{type:e,payload:n}}t.d(n,"a",function(){return r})},554:function(e,n,t){"use strict";var r;t.d(n,"a",function(){return r}),function(e){e.Note="Note",e.Password="Password",e.PaymentCard="Credit Card",e.Address="Address",e.BankAccount="Bank Account"}(r||(r={}))},569:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(0),i=function(e){return Object(r.useEffect)(function(){var n=document.getElementById("root");if(n){var t=function(){n.firstElementChild&&e(n.firstElementChild.clientWidth,n.firstElementChild.clientHeight)};if("undefined"!==typeof ResizeObserver){var r=new ResizeObserver(t);n.firstElementChild&&r.observe(n.firstElementChild);var i=new MutationObserver(function(e){t(),e.forEach(function(e){e.addedNodes.forEach(function(e){r.observe(e)}),e.removedNodes.forEach(function(e){r.unobserve(e)})})});return i.observe(n,{childList:!0}),function(){i.disconnect(),r.disconnect()}}var a,_=0,o=0,s=!1,c=function(){a=setInterval(function(){var e=!1;n.firstElementChild&&(n.firstElementChild.clientHeight!==_&&(_=n.firstElementChild.clientHeight,e=!0),n.firstElementChild.clientWidth!==o&&(o=n.firstElementChild.clientWidth,e=!0)),e&&t()},50)},u=function(){s||(s=!0,c())},E=function(){s=!1,clearInterval(a)};return window.addEventListener("focus",u),window.addEventListener("blur",E),c(),function(){window.removeEventListener("focus",u),window.removeEventListener("blur",E)}}},[e])}},575:function(e,n,t){"use strict";t.r(n);var r=t(4),i=t.n(r),a=t(7),_=t(1),o=(t(0),t(31)),s=t.n(o),c=t(8),u=t(28),E=t(384),l=function(){},d=t(79),f=t(348),I=function(){return Object(_.jsx)("div",{style:{width:"300px"}},"Hello Infield!")},A=t(569),p=t(132),S=t(80);function O(){return(O=Object(a.a)(i.a.mark(function e(n){var t,r,a,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(){return Object(A.a)(function(e,n){return a.dispatch(p.a.resizeInfieldContainer(e,n))}),Object(_.jsx)(u.a,{theme:E.a},Object(_.jsx)(c.a,{store:a},Object(_.jsx)(I,null)))},e.next=3,n.stateSync({filterType:d.a.Infield});case 3:t=e.sent,r=Object(S.a)(n,Object(f.a)(t.background.initialState,l),void 0,t),a=r.store,s.a.render(Object(_.jsx)(o,null),document.getElementById("root"));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(e){O.apply(this,arguments)}(t(81).a)},77:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return c});var r=t(4),i=t.n(r),a=t(5),_=t(7);function o(e){return function(n,t){return function(){var r=Object(_.a)(i.a.mark(function r(_){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e(n,Object(a.a)({},t,{body:_,method:"POST"})));case 1:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}}function s(e){return function(n,t){var r=o(e)(n,t);return function(){var e=Object(_.a)(i.a.mark(function e(n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}}function c(e){return function(n,t){var r=o(e)(n,t);return function(){var e=Object(_.a)(i.a.mark(function e(n){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}}},78:function(e,n,t){"use strict";function r(e,n){if(Object.values(e).includes(n))return n}t.d(n,"a",function(){return r})},79:function(e,n,t){"use strict";var r;t.d(n,"a",function(){return r}),function(e){e.ContentScript="content-script-filter",e.Popup="popup-filter",e.Vault="vault",e.SavePrompt="save-prompt",e.Infield="infield"}(r||(r={}))},80:function(e,n,t){"use strict";var r=t(54),i=t(116),a=(t(231),t(41));var _=t(26),o=t(350),s=t(5);function c(e,n){return function(t,r,i){return n.segment.post(Object(s.a)({event:t},e,{properties:Object(s.a)({},r,i)}))}}var u,E=t(112),l=t.n(E);!function(e){e.BUNDLE="Bundle",e.ENTERPRISE="Enterprise",e.MFA="MFA"}(u||(u={}));var d;t(18);function f(e,n){var t,r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];e.subscribe(function(e){t=new l.a("SEGMENT_WRITE_KEY",{host:e})}),n.subscribe(function(e){r=e});return function(e,n){var _=r&&r.userId;_&&function(e){var n=a.find(function(n){return n.events.includes(e)});return!n||n.enabled()}(e)&&t.track({userId:_,event:e,properties:Object(s.a)({},n,{method:i.platform,lpversion:i.version},r&&r.traits),context:{page:{path:location.pathname,search:location.search,title:document.title,url:location.href,referrer:document.referrer},userAgent:navigator.userAgent}})}}!function(e){e.none="none",e.mfa="mfa",e.enterprise="enterprise",e.iDaaS="iDaaS",e.teams="teams",e.family="family"}(d||(d={}));function I(e,n){var t=new Set,r=n(e.getState()),i=null;function a(){var i=n(e.getState());i!==r&&(r=i,t.forEach(function(e){return e(r)}))}return{subscribe:function(n){return t.add(n),i||(i=e.subscribe(a)),n(r),{unsubscribe:function(){t.delete(n),!t.size&&i&&(i(),i=null)}}}}}var A,p,S=t(29),O=t(345),T=t(10),m=t(17),R=t(78);function N(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.LOG}!function(e){e.CANARY_TESTING="canary_testing",e.ANGULAR_FRONTEND_ENABLED="angular_frontend_enabled",e.BASIC_AUTH="basic_auth",e.COUNT_BLOB_SEGMENTS_FOR_REBUILD="count_blob_segments_for_rebuild",e.COLLECT_SHARED_FOLDER_STATISTIC="collect_shared_folder_statistic",e.NO_AUTO_FOLDER="no_auto_folder",e.OMAR_IA="omar_ia",e.OMAR_FOR_WEB="omar_for_web",e.OMAR_NON_CHROME="omar_non_chrome",e.OMAR_PASSWORD_GENERATOR="omar_password_generator",e.OMAR_UI_DRAWER_ENABLED="omar_ui_drawer_enabled",e.ZIGGY="ziggy",e.FORMFILL_MIGRATION="formfill_migration",e.FAMILY_SHARED_FOLDERS="family_shared_folders",e.FAMILY_LEGACY_SHARED_FOLDERS="family_legacy_shared_folders",e.OMAR_INFIELD_B="omar_infield_b",e.OMAR_INFIELD_C="omar_infield_c",e.TRY_FAMILIES="try_families",e.ONE_TO_ONE_SHARING_RESTRICTED="one_to_one_sharing_restricted",e.PREMIUM_SHARING_RESTRICTED="premium_sharing_restricted",e.EMERGENCY_ACCESS_RESTRICTED="emergency_access_restricted",e.RETIRE_3_0="retire_3_0",e.SAFARI_LEGACY_MESSAGING="safari_legacy_messaging",e.PREDATES_FAMILIES="predates_families",e.PROMPT_EMAIL_VERIFY_ON_SHARE_ACCEPT="prompt_email_verify_on_share_accept",e.PBKDF2_ITERATIONS_MIGRATION="pbkdf2_iterations_migration",e.BLOB_ENCRYPTION="blob_encryption",e.READ_FROM_ENCRYPTED_BLOB="read_from_encrypted_blob",e.CACHE_BLOB_ENCRYPTION_KEY="cache_blob_encryption_key",e.GETGO_ADDRESS_VALIDATION_SERVICE="getgo_address_validation_service",e.BUSINESS_BILLING_ADDRESS="business_billing_address",e.PERSONAL_BILLING_ADDRESS="personal_billing_address",e.LOGOFF_WHEN_CLOSE_BROWSER="logoff_when_close_browser",e.PASSWORD_SUBMITTED_EVENT="password_submitted_event",e.PREMIUM_BUY_AB_TEST="premium_buy_ab_test",e.ENTERPRISE_TRIAL_FORM="enterprise_trial_form",e.PRICE_CHANGE_2019="price_change_2019",e.PREMIUM_PRICE_CHANGE_2019="premium_price_change_2019",e.EMAIL_VERIFICATION_REQUIRED="email_verification_required",e.DOWNLOAD_EXTENSION_WEB_PROMPT="download_extension_web_prompt",e.LICENSE_EXPIRATION="license_expiration",e.SHOW_TRIAL_EXPIRATION="show_trial_expiration",e.LANGUAGE_USER_TEST="language_user_test",e.MIGRATION_OPT_IN="migration_opt_in",e.OMAR_MIGRATION_OPT_IN="omar_migration_opt_in",e.SAVE_A_SITE_WEB_REQUEST_2="save_a_site_web_request_2",e.OATH_KILL_SWITCH_ACTIVE="oath_kill_switch_active",e.AUTOFILL_HTTPS_TEST="autofill_https_test",e.REACT_LOGIN="react_login",e.REACT_LOGIN_CONTROL="react_login_control",e.REACT_LOGIN_EXT="react_login_ext",e.REDUX_VAULT_DATA="redux_vault_data",e.UNIVERSAL_ADMIN_CONSOLE="universal_admin_console",e.UAC_EXISTING_ADMIN_LAUNCH_LIGHTBOX="uac_existing_admin_launch_lightbox",e.UNIVERSAL_PROFILER="universal_profiler",e.SHARED_FOLDER_SKIP_LOG="shared_folder_skip_log",e.CSP_REPORTING_ENABLED="csp_reporting_enabled",e.BLOB_ASSEMBLE_TIME_TRACKING="blob_assemble_time_tracking",e.AUTORENEWAL_CHARGE="autorenewal_charge",e.KILL_LEGACY_SSO="kill_legacy_sso",e.SCIM_EXTENDED_LOGGING="scim_extended_logging",e.LOGIN_VERIFICATION_EMAIL_SENT_REPORT_LOG="login_verification_email_sent_report_log",e.LOGIN_TYPE_CHECK_NO_USER_FOUND_WITH_VALID_EMAIL_LOG="login_type_check_no_user_found_with_valid_email_log",e.IDENTITY_WEB_TRIAL_PURCHASE="identity_web_trial_purchase",e.BOSS_CONNECTION_ENABLED="boss_connection_enabled",e.VIEW_OLDUI_ON_INSTALL_PAGE="view_oldui_on_install_page",e.FAMILIES_PROVISIONING_UPDATE="families_provisioning_update",e.FILL_MULTI_STEP_LOGIN="fill_multi_step_login",e.ICON_EXPANDED_LOOKS_LIKE_USERNAME="icon_expanded_looks_like_username",e.SAVE_A_SITE_OTP="save_a_site_otp",e.MOVE_USER_TO_DATA_RESIDENCY_INSTEAD_OF_DC="move_user_to_data_residency_instead_of_dc",e.MOVE_COMPANY_TO_DATA_RESIDENCY_INSTEAD_OF_DC="move_company_to_data_residency_instead_of_dc",e.SITE_FEEDBACK="site_feedback",e.SITE_FEEDBACK_NEW_BADGE="site_feedback_new_badge",e.FIELD_OVERRIDE_GLOBAL="field_override_global",e.FIELD_OVERRIDE_ADMIN="field_override_admin",e.DECLINE_ENTERPRISE_INVITATION="decline_enterprise_invitation",e.GIFT_MENU_ITEM_BUTTON="gift_menu_item_button",e.SECURE_NOTE_HISTORY_INCREASED_TO_100="secure_note_history_increased_to_100",e.MESSAGE_DEPRECATED_CLIENTS_ON_LOGIN="message_deprecated_clients_on_login",e.DEVICE_LIMIT_NOTIFICATION="device_limit_notification",e.OMAR_VAULT_MIGRATION_PHASE_1="omar_vault_migration_phase_1",e.OMAR_VAULT_MIGRATION_PHASE_2="omar_vault_migration_phase_2",e.OMAR_VAULT_MIGRATION_PHASE_3="omar_vault_migration_phase_3",e.VAULT_PREMIUM_FEATURE_INDICATOR="vault_premium_feature_indicator",e.VAULT_PREMIUM_POPUPS_ENABLED="vault_premium_popups_enabled",e.NEW_NATIVE_EXTENSION_ADS_ENABLED="new_native_extension_ads_enabled",e.BINARYLESS_ATTACHMENT_HANDLING="binaryless_attachment_handling",e.ACCOUNT_VERSION_TRACKING="account_version_tracking",e.FAMILY_BOSS_CONNECTION_ENABLED="family_boss_connection_enabled",e.REPORT_INAPP_TO_BOSS="report_inapp_to_boss",e.DISPLAY_UPGRADE_ADFS_WARNING="display_upgrade_adfs_warning",e.ALLOW_PING_FEDERATE="allow_ping_federate",e.SSO_SHOW_IN_IFRAME="sso_show_in_iframe",e.PREMIUM_BOSS_CONNECTION_ENABLED="premium_boss_connection_enabled",e.SECURITY_DASHBOARD="security_dashboard",e.OVERRIDE_POLL_INTERVAL_POLICY="override_poll_interval_policy",e.PREMIUM_TRIAL_UPGRADE_TEST_SHARING="premium_trial_upgrade_test_sharing",e.PREMIUM_TRIAL_UPGRADE_TEST_EMERGENCY_ACCESS="premium_trial_upgrade_test_emergency_access",e.PREMIUM_TRIAL_TO_FAMILIES_TEST_GENERIC="premium_trial_to_families_test_generic",e.PREMIUM_TO_FAMILIES_TEST_GENERIC="premium_to_families_test_generic",e.FREE_TO_PREMIUM_AD_TEST_GENERIC="free_to_premium_ad_test_generic",e.FREE_TO_PREMIUM_AD_TEST_SHARING="free_to_premium_ad_test_sharing",e.IDENTITY_TRIAL_UPGRADE_TEST_GENERIC="identity_trial_upgrade_test_generic",e.BOSS_ACCOUNT_CREATION_FROM_FREE_ENABLED="boss_account_creation_from_free_enabled",e.BOSS_ACCOUNT_CREATION_FOR_USERS_WITH_PAYMENT_HISTORY="boss_account_creation_for_users_with_payment_history",e.ON_THE_FLY_PREMIUM_BOSS_MIGRATION_UPON_FREE_USER_CONVERSION="on_the_fly_premium_boss_migration_upon_free_user_conversion",e.ON_THE_FLY_FAMILIES_BOSS_MIGRATION_UPON_FREE_USER_CONVERSION="on_the_fly_families_boss_migration_upon_free_user_conversion",e.ON_THE_FLY_BUSINESS_BOSS_MIGRATION_UPON_FREE_USER_CONVERSION="on_the_fly_business_boss_migration_upon_free_user_conversion",e.CUSTOM_PRICE_FOR_BOSS_MIGRATION="custom_price_for_boss_migration",e.SHOW_INCLUDE_LOGGING="show_include_logging",e.LOG_EXPANDABLEDATA_STATS_IN_SPLUNK="log_expandabledata_stats_in_splunk",e.MANAGED_SERVICE_PROVIDER_FUNCTIONALITY="managed_service_provider_functionality",e.MSP_AGGREGATOR_FUNCTIONALITY="msp_aggregator_functionality",e.MSP_IDENTITY_CHILDREN="msp_identity_children",e.DISABLE_SF_FOR_EXPIRED_COMPANIES="disable_sf_for_expired_companies",e.ENABLE_SEGMENT_GROUP_ASSOCIATION_CALLS="enable_segment_group_association_calls",e.WEB_CLIENT_FILL="web_client_fill",e.WEB_CLIENT_FILL_TRACKING="web_client_fill_tracking",e.WEB_CLIENT_SAVE="web_client_save",e.WEB_CLIENT_INFIELD="web_client_infield",e.HIDE_PAYMENT_FLOWS="hide_payment_flows",e.BOSS_ACCOUNT_CREATION_FOR_EXPIRED_BUSINESS="boss_account_creation_for_expired_business",e.DO_SF_REPAIR="do_sf_repair",e.DWM_EXPRESS_VPN_AD="dwm_express_vpn_ad",e.ASYNC_INCREMENT_ACCTS_VERSION_MULTIPLE="async_increment_accts_version_multiple",e.CACHE_FILLABLE_SITES="cache_fillable_sites",e.SUPPORT_LEVEL0_ENABLED="support_level0_enabled",e.MIXPANEL_IAM="mixpanel_iam",e.FAST_USER_DELETE_BY_DEACTIVATED3="fast_user_delete_by_deactivated3",e.ENABLE_MFA_SERVICE="enable_mfa_service",e.IN_APP_MESSAGING_WEB_VAULT="in_app_messaging_web_vault",e.IN_APP_MESSAGING_EXTENSION_VAULT="in_app_messaging_extension_vault",e.IN_APP_MESSAGING_EXTENSION_DROPDOWN="in_app_messaging_extension_dropdown",e.HIDE_TWO_FACTOR_CODE_IN_VAULT="hide_two_factor_code_in_vault",e.PREMIUM_BILLING_ADDRESS_COLLECTION="premium_billing_address_collection",e.FAMILIES_ADMINS_BILLING_ADDRESS_COLLECTION="families_admins_billing_address_collection",e.TEAMS_ADMINS_BILLING_ADDRESS_COLLECTION="teams_admins_billing_address_collection",e.ENTERPRISE_ADMINS_BILLING_ADDRESS_COLLECTION="enterprise_admins_billing_address_collection",e.ALLOW_TRANSAKT_MFA="allow_transakt_mfa",e.OPTIMIZATION_FOR_SCIMOFFSETQUERIES="optimization_for_scimoffsetqueries",e.MULTI_DEVICE_PAYWALL="multi_device_paywall",e.PREMIUM_RETRIAL="premium_retrial",e.PROMOTION_VAULT_SEARCH="promotion_vault_search",e.PROMOTION_EXTENSION_SEARCH="promotion_extension_search",e.PROMOTION_VAULT_SIDEBAR_G2A="promotion_vault_sidebar_g2a",e.PROMOTION_VAULT_SIDEBAR_G2W="promotion_vault_sidebar_g2w",e.PROMOTION_VAULT_SIDEBAR_G2M_VARIANT_A="promotion_vault_sidebar_g2m_variant_a",e.PROMOTION_VAULT_SIDEBAR_G2M_VARIANT_B="promotion_vault_sidebar_g2m_variant_b",e.PROMOTION_EXTENSION_MENU_ITEM_G2A="promotion_extension_menu_item_g2a",e.PROMOTION_EXTENSION_MENU_ITEM_G2W="promotion_extension_menu_item_g2w",e.PROMOTION_EXTENSION_MENU_ITEM_G2M="promotion_extension_menu_item_g2m",e.PROMOTION_EXTENSION_DIALOG_G2A="promotion_extension_dialog_g2a",e.PROMOTION_EXTENSION_DIALOG_G2W="promotion_extension_dialog_g2w",e.PROMOTION_PROMPT_EMAIL_VERIFY="promotion_prompt_email_verify",e.PAYPAL_CANCELLATION="paypal_cancellation",e.SKIP_BACKUP_BEFORE_COMPANY_USER_DELETION="skip_backup_before_company_user_deletion",e.RESPECT_COMPANY_RESIDENCY_FOR_CASSANDRA_OPERATIONS="respect_company_residency_for_cassandra_operations",e.SCIM_PATCH_NO_CONTENT="scim_patch_no_content",e.INFIELD_MULTIDEVICE_PAYWALL_TRACKING="infield_multidevice_paywall_tracking",e.PERMISSION_ENGINE="permission_engine"}(A||(A={})),function(e){e.DEBUG="debug",e.LOG="log",e.WARN="warn",e.ERROR="error"}(p||(p={}));var v=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return N.apply(void 0,[p.LOG].concat(n))},L=["intro_tutorial_version","freamon","is_mobile_active","blob_version_set","isDogfood","hide_cloud_apps_policy_enabled","omar_vault_migration","security_dashboard_paywall"];function g(e){var n,t=e.omar_vault_migration,r=(n={},Object(m.a)(n,A.OMAR_VAULT_MIGRATION_PHASE_1,1===t),Object(m.a)(n,A.OMAR_VAULT_MIGRATION_PHASE_2,2===t),Object(m.a)(n,A.OMAR_VAULT_MIGRATION_PHASE_3,3===t),n);return Object.entries(e).forEach(function(e){var n=Object(T.a)(e,2),t=n[0],i=n[1];if(!L.includes(t))try{r[function(e){var n=Object(R.a)(A,e);if(n)return n;switch(e){case"better_generate_password_enabled":return A.OMAR_PASSWORD_GENERATOR;case"omaria":return A.OMAR_IA;case"family_legacy_shared_folders_enabled":return A.FAMILY_LEGACY_SHARED_FOLDERS;case"family_shared_folders_enabled":return A.FAMILY_SHARED_FOLDERS;case"try_families_enabled":return A.TRY_FAMILIES;case"omardrawer":return A.OMAR_UI_DRAWER_ENABLED;case"show_vault_premium_feature_indicator":return A.VAULT_PREMIUM_FEATURE_INDICATOR;default:throw new Error("Unmapped legacy feature flag name: "+e)}}(t)]=!!i}catch(a){v(p.WARN,a)}}),r}function D(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return f(I(e,Object(S.a)(function(e){return e.login.baseUrl},function(e){return Object(O.a)(e,"/segment/web-client")})),I(e,Object(S.a)(function(e){return e.user.uid},function(e){return e.user.type},function(e){return e.user.enterpriseVersion},function(e,n,t){if(e&&n)return{userId:e.toString(),traits:{"Account Type":n,"Enterprise Version":t,features:g("undefined"!==typeof LPContentScriptFeatures?LPContentScriptFeatures:{})}}})),n,t)}var C=t(77);var b=t(4),M=t.n(b),P=t(7);function h(e){if(e&&e.body)return Object(s.a)({},e,{body:e.body?JSON.stringify(e.body):"",headers:Object(s.a)({},e&&e.headers,{"Content-Type":"application/json"})})}var y=function(e,n){return fetch(e,n)};function U(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return location.origin},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return function(){var r=Object(P.a)(M.a.mark(function r(i,a){var _;return M.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return _=h(a),r.abrupt("return",t(Object(O.a)(n(),"lmiapi/",i),Object(s.a)({},_,{credentials:"include",headers:Object(s.a)({},_&&_.headers,{"X-CSRF-TOKEN":e()})})));case 2:case"end":return r.stop()}},r)}));return function(e,n){return r.apply(this,arguments)}}()}function w(e,n){var t,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3?arguments[3]:void 0,E=Object(i.a)(),l=Object(o.a)({enabledSelector:function(e){var n=localStorage.getItem("isTrackingEnabled");return null===n?e.encryptedVaultDataSource.repromptSettings.improve:e.encryptedVaultDataSource.repromptSettings.improve&&"true"===n}}),d=[l,E,(t=u.background.dispatch,function(){return function(e){return function(n){n.type!==a.a&&t(n),e(n)}}})].concat(Object(r.a)(s));var f=Object(_.e)(n,_.a.apply(void 0,Object(r.a)(d)));u.initialize(f.dispatch);var I,A={segment:(I=U(function(){return f.getState().user.csrf},function(){return f.getState().login.baseUrl},e.fetchAPI),{post:Object(C.a)(I)("segment/send-web-client-event")})};return l.initialize({legacySegment:c({platform:e.platform,version:e.version||""},A),segment:D(f,{platform:e.platform,version:e.version},[{events:["LastPass Fill Initiated","LastPass Fill Modified"],enabled:function(){return f.getState().settings.features.webClientFillTracking}}])}),{store:f,sagaMiddleware:E}}t.d(n,"a",function(){return w})},81:function(e,n,t){"use strict";var r;!function(e){e.WEB="web",e.CHROME="cr",e.OPERA="op",e.EDGE="edge",e.EDGE_CHROMIUM="edgecr",e.FIREFOX="ff",e.SAFARI="sfx"}(r||(r={}));var i=t(5),a=t(114);t.d(n,"a",function(){return _});var _={version:"4.71.0",platform:-1!=navigator.userAgent.indexOf(" OPR/")?r.OPERA:r.CHROME,stateSync:function(e){return new Promise(function(n){var t;"undefined"!==typeof browser&&(t=window===top?"0":Object(a.v4)());var r=chrome.runtime.connect({name:"sync"});r.onMessage.addListener(function e(t){r.onMessage.removeListener(e),n({background:{dispatch:function(e){return r.postMessage(e)},initialState:t},initialize:function(e){r.onMessage.addListener(e)}})}),r.postMessage(Object(i.a)({},e,{initialize:!0,frameId:t}))})},binaryService:function(e){return new Promise(function(n,t){var r={argcount:e.arguments.length,cmd:e.cmd};e.arguments.forEach(function(e,n){r["arg"+n]=e}),chrome.runtime.sendNativeMessage("com.lastpass.nplastpass",r,function(e){chrome.runtime.lastError?t(chrome.runtime.lastError):n(e.retval)})})}}}},[[575,0,1]]]);