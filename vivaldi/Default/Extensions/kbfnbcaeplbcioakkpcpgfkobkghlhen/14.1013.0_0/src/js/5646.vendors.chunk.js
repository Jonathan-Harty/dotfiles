(self.webpackChunk=self.webpackChunk||[]).push([[5646],{17594:(e,t,n)=>{n.d(t,{$:()=>r});var r,s=n(57050),a=n(8125),i=n(5114),o=n(73975),l=n(22232),c=n(32427);!function(e){let t;function n(e){return e.type===t.default}function r(e){return e.type===t.super}function u(e){return e.type===t.takeaway}function p(e){return e.type===t.smartPhrases}function d(e){return e.type===t.shortenIt}function y(e){return e.type===t.toneAI}!function(e){e.default="default",e.super="super",e.plagiarism="plagiarism",e.premium="premium",e.smartPhrases="smartPhrases",e.takeaway="takeaway",e.sentenceLevelBrandTones="sentenceLevelBrandTones",e.synfony="synfony",e.shortenIt="shortenIt",e.toneAI="toneAI"}(t=e.Type||(e.Type={})),e.isApplicableAlert=function(e){return(0,a.Kg)(n,r,u,d,y)(e)},e.isDefault=n,e.isSuper=r,e.isPlagiarism=function(e){return e.type===t.plagiarism},e.isFree=function(e){return e.isFree},e.isPriority=function(e){return"priority"===e.view},e.isTakeaway=u,e.isSmartPhrases=p,e.isSentenceLevelBrandTones=function(e){return e.type===t.sentenceLevelBrandTones},e.isShortenIt=d,e.isToneAI=y,e.isFullSentence=function(e){return n(e)&&c.eT.isFullSentence(e.extraProperties.cardType)},e.isSynfony=function(e){return n(e)&&c.eT.isSynfony(e.extraProperties.cardType)},e.isOneGap=function(e){return n(e)&&c.eT.isOneGap(e.extraProperties.cardType)},e.isInQuotes=function(e){return n(e)&&e.extraProperties.isInQuotes},e.hasTone=function(e){return i.isSome(e.extraProperties.tone)},e.isBulkApplied=function(e){return c.bZ.State.isBulkApplied(e.state)},e.isBeingApplied=function(e){return c.bZ.State.isBeingApplied(e.state)},e.eq=o.fromEquals(((e,t)=>e.type===t.type&&c.h$.ordId.equals(e,t))),e.updateSmartPhrasesAlert=function(e,t){return p(e)&&t?Object.assign(Object.assign({},e),{intentDetectedFeedback:t.intentDetectedFeedback,replacementsStartIndex:t.replacementsStartIndex,replacementsEndIndex:t.replacementsEndIndex,replacementsLength:t.replacementsLength,usedReplacementsIndexes:t.usedReplacementsIndexes,originalReplacementsIndexes:t.originalReplacementsIndexes,hideReplacements:t.hideReplacements}):e},e.snapshot=e=>({id:e.id,type:e.type,state:e.state,title:e.title,view:e.view,lensId:e.lensId,allowUpdate:e.allowUpdate,belongsToAllAlerts:e.belongsToAllAlerts}),e.fromModel=function(n){const r={id:n.id,state:n.state,title:n.title,progress:n.progress,lensId:n.lensId,lensType:n.lensType,lensName:n.toLensAlert().lensName,alertType:n.alertType,lensPriority:n.lensPriority,getHighlightRanges:n.getHighlightRanges,hasNestedHighlights:n.hasNestedHighlights,highlightTexts:n.highlightTexts,allowUpdate:n.allowUpdate,miniCardTitle:n.miniCardTitle,todoAction:n.todoAction,patternName:n.patternName,belongsToAllAlerts:n.belongsToAllAlerts,hashCode:()=>n.hashCode(),equals:function(t){return e.eq.equals(this,t)},toJSON:function(){return e.snapshot(this)},toString:function(){return JSON.stringify(this)},isFree:n.isFree,view:n.view,bundleInfo:n.bundleInfo,prediction:n.prediction,dismissSurvey:n.dismissSurvey,acceptSurvey:n.acceptSurvey};if(c.bZ.isSmartPhrases(n))return(0,s.unsafeCoerce)(Object.assign(Object.assign({},r),{type:t.smartPhrases,examples:n.examples,explanation:n.explanation,details:n.details,extraProperties:n.extraProperties,getTransform:()=>n.transform,intent:n.intent,emoji:n.emoji,showPhrasesTitle:n.showPhrasesTitle,phraseAddedTitle:n.phraseAddedTitle,intentDetectedFeedback:n.intentDetectedFeedback,replacementsStartIndex:n.replacementsStartIndex,replacementsEndIndex:n.replacementsEndIndex,replacementsLength:n.replacementsLength,usedReplacementsIndexes:n.usedReplacementsIndexes,hideReplacements:n.hideReplacements,originalReplacementsIndexes:n.originalReplacementsIndexes,replacements:n.replacements}));if(c.bZ.isTakeaway(n)){const e=Object.assign(Object.assign({},r),{type:t.takeaway,examples:n.examples,explanation:n.explanation,details:n.details,extraProperties:n.extraProperties,getTransform:()=>n.transform,takeawayScore:n.takeawayScore,takeawayIsLikelyToBeRead:n.takeawayIsLikelyToBeRead,takeawayFeedback:n.takeawayFeedback});return(0,s.unsafeCoerce)(e)}if(c.bZ.isSuperAlert(n))return(0,s.unsafeCoerce)(Object.assign(Object.assign({},r),{type:t.super,examples:n.examples,explanation:n.explanation,details:n.details,extraProperties:n.extraProperties,getTransform:()=>n.transform,labels:n.labels}));if(c.bZ.isSentenceLevelBrandTones(n))return(0,s.unsafeCoerce)(Object.assign(Object.assign({},r),{type:t.sentenceLevelBrandTones,extraProperties:n.extraProperties,description:n.description,emoji:n.emoji,emotion:n.emotion,label:n.label,feedback:n.feedback,companyLogoUrl:n.companyLogoUrl}));if(c.bZ.isShortenIt(n)){const e=Object.assign(Object.assign({},r),{type:t.shortenIt,examples:n.examples,explanation:n.explanation,details:n.details,extraProperties:n.extraProperties,getTransform:()=>n.transform,sentenceCount:n.sentenceCount,summariesRequestState:n.summariesRequestState});return(0,s.unsafeCoerce)(e)}if(c.bZ.isToneAI(n))return(0,s.unsafeCoerce)(Object.assign(Object.assign({},r),{type:t.toneAI,examples:n.examples,explanation:n.explanation,details:n.details,extraProperties:n.extraProperties,getTransform:()=>n.transform,toneAlternatives:n.toneAlternatives,selectedToneAlternativeIdx:n.selectedToneAlternativeIdx}));if(c.bZ.isPlagiarism(n))return(0,s.unsafeCoerce)(Object.assign(Object.assign({},r),{type:t.plagiarism,cardId:n.cardId,plagiarismType:n.plagiarismType}));if(c.bZ.isApplicableAlert(n))return(0,s.unsafeCoerce)(Object.assign(Object.assign({},r),{type:t.default,examples:n.examples,explanation:n.explanation,details:n.details,extraProperties:n.extraProperties,getTransform:()=>n.transform}));if(c.bZ.isPremium(n))return(0,s.unsafeCoerce)(Object.assign(Object.assign({},r),{type:t.premium}));throw new l.ej(`Not supported type of alert, must be either Alert, SuperAlert or PlagiarismAlert, was: ${n.constructor.name}(${n.lensType})`)}}(r||(r={}))},15646:(e,t,n)=>{n.d(t,{lY:()=>r,GM:()=>s,eI:()=>a,FG:()=>i});var r,s,a,i,o=n(8125),l=n(22232),c=n(17594),u=n(39210);!function(e){let t,n;function r(t){return t.type===e.Type.takeawayCorrectlyDetected||t.type===e.Type.takeawayIncorrectlyDetected}function s(t){return r(t)||t.type===e.Type.takeawayDismiss||t.type===e.Type.takeawayResolve}function a(t){return t.type===e.Type.bulkApply}function i(t){return t.type===e.Type.bulkDismiss}function l(t){return t.type===e.Type.bulkIgnore}function p(t){return t.type===e.Type.bulkHighlight}function d(t){return t.type===e.Type.bulkUndo}function y(t){return t.type===e.Type.bulkIndividualUndo}function m(t){return t.type===e.Type.bulkLooksGood}!function(e){e.switchToNext="switchToNext",e.switchToClosestByViewport="switchToClosestByViewport",e.alertMinicardButtonClick="alertMinicardButtonClick",e.cardMatchesNavigationButtonClick="cardMatchesNavigationButtonClick",e.openSetGoals="setGoals",e.alertCardShow="alertCardShow",e.moreAlertsButtonShow="moreAlertsButtonShow",e.alternativeReplacementRadioButtonClick="alternativeReplacementRadioButtonClick",e.alertApply="alertApply",e.alertFeedback="alertFeedback",e.hover="hover",e.onboardingClose="onboardingClose",e.muteAlertCategory="muteAlertCategory",e.undoMuteAlertCategory="undoMuteAlertCategory",e.premiumTrialFooterCtaClick="premiumTrialFooterCtaClick",e.toSignIn="toSignIn",e.moreActionsButtonToggle="moreActionsButtonToggle",e.openPreferences="preferences",e.dismissMuteQuotedAdvice="dismissMuteQuotedAdvice",e.fullSentenceHighlightChangesToggle="fullSentenceHighlightChangesToggle",e.muteQuotedAdviceShow="muteQuotedAdviceShow",e.alertIgnore="alertIgnore",e.alertResolve="alertResolve",e.alertIgnoreFormSubmit="alertIgnoreFormSubmit",e.alertApplyFormSubmit="alertApplyFormSubmit",e.alertIgnoreFeedbackFormShow="alertIgnoreFeedbackFormShow",e.takeawayCorrectlyDetected="takeawayCorrectlyDetected",e.takeawayIncorrectlyDetected="takeawayIncorrectlyDetected",e.takeawayCorrectlyDetectedAndDone="takeawayCorrectlyDetectedAndDone",e.takeawayDismiss="takeawayDismiss",e.takeawayResolve="takeawayResolve",e.requestShortenItReplacements="requestShortenItReplacements",e.smartPhrasesShowMiniCard="smartPhrasesShowMiniCard",e.smartPhrasesShowFullCard="smartPhrasesShowFullCard",e.smartPhrasesShowMoreIdeas="smartPhrasesShowMoreIdeas",e.smartPhrasesFeedback="smartPhrasesFeedback",e.smartPhrasesApply="smartPhrasesApply",e.smartPhrasesDone="smartPhrasesDone",e.smartPhrasesUpdateState="smartPhrasesUpdateState",e.smartPhrasesDismiss="smartPhrasesDismiss",e.smartPhrasesOpenFeedbackForm="smartPhrasesOpenFeedbackForm",e.changeUserInput="changeUserInput",e.focusUserInput="focusUserInput",e.miniItemClick="miniItemClick",e.bulkApply="bulkApply",e.bulkDismiss="bulkDismiss",e.bulkIgnore="bulkIgnore",e.bulkHighlight="bulkHighlight",e.bulkIndividualUndo="bulkIndividualUndo",e.bulkUndo="bulkUndo",e.bulkAcceptItemShow="bulkAcceptItemShow",e.bulkLooksGood="bulkLooksGood",e.mutedAlertSuccessShow="mutedAlertSuccessShow",e.mutedAlertSuccessDismissed="mutedAlertSuccessDismissed",e.mutedAlertSuggestionManagementClick="mutedAlertSuggestionManagementClick",e.sentenceLevelBrandTonesFeedback="sentenceLevelBrandTonesFeedback",e.toneAIChangeToneAlternative="toneAIChangeToneAlternative"}(t=e.Type||(e.Type={})),function(e){e.defaultCard="defaultCard",e.superCard="superCard"}(n=e.CardType||(e.CardType={})),e.getCardType=function(e){switch(e.activeAlert.type){case c.$.Type.super:return n.superCard;case c.$.Type.default:default:return n.defaultCard}},e.isAlertApplyAction=function(t){return t.type===e.Type.alertApply},e.isAlertFeedbackAction=function(t){return t.type===e.Type.alertFeedback},e.isTakeawayCorrectlyDetectedAction=function(t){return t.type===e.Type.takeawayCorrectlyDetected},e.isTakeawayIncorrectlyDetectedAction=function(t){return t.type===e.Type.takeawayIncorrectlyDetected},e.isTakeawayDoneAction=function(t){return t.type===e.Type.takeawayCorrectlyDetectedAndDone},e.isTakeawayDismissAction=function(t){return t.type===e.Type.takeawayDismiss},e.isTakeawayResolveAction=function(t){return t.type===e.Type.takeawayResolve},e.isTakeawayDetectionFeedbackAction=r,e.isTakeawayDetectionFeedbackOrDoneAction=function(t){return r(t)||t.type===e.Type.takeawayCorrectlyDetectedAndDone},e.isTakeawayFeedbackAction=s,e.isTakeawayAction=function(t){return s(t)||t.type===e.Type.takeawayCorrectlyDetectedAndDone},e.isRequestShortenItReplacementsAction=function(t){return t.type===e.Type.requestShortenItReplacements},e.isSmartPhrasesShowMiniCardAction=function(t){return t.type===e.Type.smartPhrasesShowMiniCard},e.isSmartPhrasesShowFullCardAction=function(t){return t.type===e.Type.smartPhrasesShowFullCard},e.isSmartPhrasesShowMoreIdeasAction=function(t){return t.type===e.Type.smartPhrasesShowMoreIdeas},e.isSmartPhrasesFeedbackAction=function(t){return t.type===e.Type.smartPhrasesFeedback},e.isSmartPhrasesApplyAction=function(t){return t.type===e.Type.smartPhrasesApply},e.isSmartPhrasesDoneAction=function(t){return t.type===e.Type.smartPhrasesDone},e.isSmartPhrasesUpdateStateAction=function(t){return t.type===e.Type.smartPhrasesUpdateState},e.isSmartPhrasesDismissAction=function(t){return t.type===e.Type.smartPhrasesDismiss},e.isSmartPhrasesOpenFeedbackFormAction=function(t){return t.type===e.Type.smartPhrasesOpenFeedbackForm},e.isSentenceLevelBrandTonesFeedbackAction=function(t){return t.type===e.Type.sentenceLevelBrandTonesFeedback},e.isToneAIChangeToneAlternativeAction=function(t){return t.type===e.Type.toneAIChangeToneAlternative},e.isAlertIgnoreAction=function(t){return t.type===e.Type.alertIgnore},e.isAlertResolveAction=function(t){return t.type===e.Type.alertResolve},e.isAlertIgnoreFeedbackFormSubmit=function(t){return t.type===e.Type.alertIgnoreFormSubmit},e.isAlertApplyFeedbackFormSubmit=function(t){return t.type===e.Type.alertApplyFormSubmit},e.isMuteCategoryAction=function(t){return t.type===e.Type.muteAlertCategory},e.isUndoMuteCategoryAction=function(t){return t.type===e.Type.undoMuteAlertCategory},e.isMutedAlertCardDismissedAction=function(t){return t.type===e.Type.mutedAlertSuccessDismissed},e.isHoverAction=function(t){return t.type===e.Type.hover},e.isAlertCardShow=function(t){return t.type===e.Type.alertCardShow},e.isBulkAcceptItemShow=function(t){return t.type===e.Type.bulkAcceptItemShow},e.isSwitchToClosestByViewport=function(t){return t.type===e.Type.switchToClosestByViewport},e.isAlertMinicardButtonClick=function(t){return t.type===e.Type.alertMinicardButtonClick},e.isMiniItemClick=function(t){return t.type===e.Type.miniItemClick},e.isChecklistItemCollapseButtonClick=function(e){return e.type===u.C.Type.collapseButtonClick},e.isOnboardingClose=function(t){return t.type===e.Type.onboardingClose},e.isNavigation=function(t){return t.type===e.Type.openSetGoals||t.type===e.Type.openPreferences},e.isDismissMuteQuotedAdvice=function(t){return t.type===e.Type.dismissMuteQuotedAdvice},e.isMuteQuotedAdviceShow=function(t){return t.type===e.Type.muteQuotedAdviceShow},e.isChangeUserInput=function(t){return t.type===e.Type.changeUserInput},e.isFocusUserInput=function(t){return t.type===e.Type.focusUserInput},e.isBulkApply=a,e.isBulkDismiss=i,e.isBulkIgnore=l,e.isBulkHighlight=p,e.isBulkUndo=d,e.isBulkIndividualUndo=y,e.isBulkLooksGood=m,e.isBulkAction=(0,o.Kg)(a,i,l,p,y,m,d),e.isMutedAlertSuggestionsManagementClick=function(t){return t.type===e.Type.mutedAlertSuggestionManagementClick}}(r||(r={})),function(e){let t;!function(e){e.drilldown="synfonyDrilldownSelect",e.back="synfonyDrilldownBack"}(t=e.Kind||(e.Kind={})),e.isDrilldown=function(e){return e.type===t.drilldown},e.isBack=function(e){return e.type===t.back}}(s||(s={})),function(e){let t;function n(e){return e.type===t.startTransitionTo}!function(e){e.startTransitionTo="startTransitionTo",e.completeTransitionTo="completeTransitionTo"}(t=e.Kind||(e.Kind={})),e.isStartTransitionTo=n,e.isCardExpand=function(e){return n(e)&&"expanded"===e.transition.type},e.isCompleteTransitionTo=function(e){return e.type===t.completeTransitionTo}}(a||(a={})),function(e){let t;!function(e){e.dismissBatch="dismissBatch"}(t=e.Kind||(e.Kind={})),e.isDismissAlertsBatchAction=function(e){return e.type===t.dismissBatch}}(i||(i={})),(0,l.L0)(void 0)},39210:(e,t,n)=>{var r;n.d(t,{C:()=>r}),function(e){let t;!function(e){e.collapseButtonClick="collapseButtonClick"}(t=e.Type||(e.Type={}))}(r||(r={}))}}]);