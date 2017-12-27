webpackJsonp([18],{436:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(721),i=s(722),a=s(11),o=a(r.a,i.a,null,null,null);t.default=o.exports},721:function(e,t,s){"use strict";var r=s(139),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e};t.a={name:"referrer",props:["id"],components:{cSwitch:r.a},data:function(){return{name:"Referrer 상세",originItems:{},items:{referrerId:null,popId:null,referrerUseYn:!1,referrerTypeCode:null,preferenceList:[],ipRestrictionList:[],oneTimeUrlInfo:{expireTime:null,bypassYn:null},modifyHistReason:"Referrer 수정"},referrerTypeCode:"",code:{popId:[]},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},modifyHistReason:{label:"변경이력",class:"text-left"},histMgmtId:{label:"보기"}},items:[]},isLoad:{popId:!0},isEdit:!1,isModalHistory:!1,isModalMessage:!1,modalMessage:"",isReferrerType:"",deploy:{status:!0,count:11234}}},computed:{popId:{get:function(){var e=this;return this.code.popId.find(function(t){return t.popId===e.items.popId})||null},set:function(e){this.items.popId=null!==e?e.popId:null}}},created:function(){var e=this;void 0===this.$route.query.referrerTypeCode&&(alert("잘못된 접근입니다"),this.$router.push({name:"Referrer 관리"}));var t=this.$route.query.histories,s=void 0!==t?"/referrers/"+this.id+"/histories/"+t:"/referrers/"+this.id;t&&document.querySelector("body.app").classList.add("history-mode"),this.referrerTypeCode=this.$route.query.referrerTypeCode,this.$https.get("/pops").then(function(t){e.isLoad.popId=!1,e.code.popId=t.data.items}),this.$https.get(s,{referrerTypeCode:this.referrerTypeCode}).then(function(t){e.items=i({},e.items,t.data.items,{referrerId:e.id}),e.originItems=JSON.parse(JSON.stringify(e.items)),e.isReferrerType="COMPONENT_TYPE_01"===e.referrerTypeCode?"high":"low"})},methods:{onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onSubmit:function(){var e=this,t=this.items,s=t.referrerId,r=t.popId,i=t.referrerUseYn,a=t.referrerTypeCode,o=t.modifyHistReason;this.$https.put("/referrers/"+this.id,{referrerId:s,popId:r,referrerUseYn:i,referrerTypeCode:a,modifyHistReason:o}).then(function(){e.$router.go(e.$router.currentRoute)}).catch(function(e){console.log(e)})},onDelete:function(){this.modalMessage="정말 삭제하시겠습니까?",this.isModalMessage=!0},onDeleteData:function(){var e=this;this.$https.delete("/referrers/"+this.id+"?referrerTypeCode="+this.referrerTypeCode).then(function(){e.$router.push({name:"Referrer 관리"})}).catch(function(e){console.log(e)})},getHistoryLink:function(e){return"#/configuration/referrer/"+this.id+"?histories="+e+"&referrerTypeCode="+this.referrerTypeCode},showHistory:function(){var e=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/referrers/"+this.id+"/histories",{referrerTypeCode:this.referrerTypeCode}).then(function(t){e.history.items=t.data.items})}}}},722:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"animated fadeIn"},[s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],attrs:{variant:"secondary",block:!0}},[e._v("\n      기본정보\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),e._v(" "),s("b-collapse",{attrs:{id:"formDefault",visible:""}},[s("b-card",[s("b-form-fieldset",{attrs:{label:"ID","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.id,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"구분","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.referrerTypeCodeName,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"IP","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.componentIp,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Host Name","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.componentHostName,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"PoP 선택 *","label-cols":3,horizontal:!0}},[e.isEdit?s("multiselect",{attrs:{allowEmpty:!1,showLabels:!1,searchable:!1,options:e.code.popId,loading:e.isLoad.popId,label:"popName",placeholder:"선택"},model:{value:e.popId,callback:function(t){e.popId=t},expression:"popId"}}):s("b-form-input",{attrs:{value:e.items.popName,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"사용여부","label-cols":3,horizontal:!0}},[e.isEdit?s("c-switch",e._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:e.items.referrerUseYn,callback:function(t){e.items.referrerUseYn=t},expression:"items.referrerUseYn"}},"c-switch",{on:"",off:""},!1)):s("b-badge",{attrs:{pill:"",variant:e.items.referrerUseYn?"success":"secondary"}},[e._v("\n          "+e._s(e.items.referrerUseYn?"사용":"미사용")+"\n        ")])],1),e._v(" "),e.isEdit?s("b-form-fieldset",{attrs:{label:"변경이력","label-cols":3,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:6},model:{value:e.items.modifyHistReason,callback:function(t){e.items.modifyHistReason=t},expression:"items.modifyHistReason"}})],1):e._e()],1)],1),e._v(" "),e.isEdit?e._e():s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.policy",modifiers:{policy:!0}}],attrs:{variant:"secondary",block:!0}},[e._v("\n      Policy\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),e._v(" "),e.isEdit?e._e():s("b-collapse",{attrs:{id:"policy",visible:""}},["high"===e.isReferrerType?s("b-card",[s("div",{slot:"header"},[s("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:"#/policy/ip-restriction",target:"_blank"}},[e._v("IP Restriction 설정")]),e._v(" "),s("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:"#/policy/pop-preference",target:"_blank"}},[e._v("PoP Preference 설정")])]),e._v(" "),s("b-form-fieldset",{attrs:{label:"IP Restriction","label-cols":3,horizontal:!0}},[s("div",{staticClass:"form-in-group"},e._l(e.items.ipRestrictionList,function(t,r){return s("b-form-fieldset",{key:r,attrs:{label:String(r+1),"label-cols":1,horizontal:!0}},[s("span",{staticClass:"domain-text"},[e._v(e._s(t))])])}))]),e._v(" "),s("b-form-fieldset",{attrs:{label:"PoP Preference","label-cols":3,horizontal:!0}},[s("div",{staticClass:"form-in-group"},e._l(e.items.preferenceList,function(t,r){return s("b-form-fieldset",{key:t.popId,attrs:{label:t.serviceName,"label-cols":2,horizontal:!0}},[s("span",{staticClass:"domain-text"},[e._v("\n              "+e._s(t.targetPopIdName1)+" -\n              "+e._s(t.targetPopIdName2)+" -\n              "+e._s(t.targetPopIdName3)+" -\n              "+e._s(t.targetPopIdName4)+" -\n              "+e._s(t.targetPopIdName5)+"\n            ")])])}))])],1):e._e(),e._v(" "),"low"===e.isReferrerType?s("b-card",[s("div",{slot:"header"},[s("a",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{href:"#/policy/onetime-url",target:"_blank"}},[e._v("One-Time URL 설정")])]),e._v(" "),s("b-form-fieldset",{attrs:{label:"One-Time URL","label-cols":3,horizontal:!0}},[s("div",{staticClass:"form-in-group"},[s("b-form-fieldset",{attrs:{label:"expireTime","label-cols":4,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.oneTimeUrlInfo.expireTime,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"ByPass","label-cols":4,horizontal:!0}},[s("b-badge",{attrs:{pill:"",variant:e.items.oneTimeUrlInfo.bypassYn?"success":"secondary"}},[e._v("\n              "+e._s(e.items.oneTimeUrlInfo.bypassYn?"사용":"미사용")+"\n            ")])],1)],1)])],1):e._e()],1),e._v(" "),e.isEdit?e._e():s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.history",modifiers:{history:!0}}],attrs:{variant:"secondary",block:!0}},[e._v("\n      처리이력\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),e._v(" "),e.isEdit?e._e():s("b-collapse",{attrs:{id:"history"}},[s("b-card",[s("b-form-fieldset",{attrs:{label:"등록일","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.createDateTime,plaintext:"",type:"text"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"등록자","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.createId,plaintext:"",type:"text"}})],1),e._v(" "),e.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정일","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.modifyDateTime,plaintext:"",type:"text"}})],1):e._e(),e._v(" "),e.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정자","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.modifyId,plaintext:"",type:"text"}})],1):e._e(),e._v(" "),s("b-form-fieldset",{attrs:{label:"배포상태","label-cols":3,horizontal:!0}},[s("b-form-input",{staticStyle:{width:"30px"},attrs:{value:e.deploy.status?"성공":"실패",plaintext:"",type:"text"}}),e._v("\n        ("),s("a",{attrs:{href:"#"}},[e._v(e._s(e.deploy.count))]),e._v(")\n      ")],1)],1)],1),e._v(" "),e.isEdit?s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onSubmit}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 저장")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary"},on:{click:e.onView}},[s("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1):s("div",{staticClass:"page-btn"},[s("b-button",{staticClass:"float-left",attrs:{type:"button",size:"sm",variant:"danger"},on:{click:e.onDelete}},[s("i",{staticClass:"fa fa-times"}),e._v(" 삭제")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"outline-primary"},on:{click:e.showHistory}},[e._v("이력관리")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onEdit}},[s("i",{staticClass:"fa fa-pencil"}),e._v(" 수정")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary",to:{name:"Referrer 관리"}}},[s("i",{staticClass:"fa fa-list"}),e._v(" 목록")])],1),e._v(" "),s("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:e.isModalHistory,callback:function(t){e.isModalHistory=t},expression:"isModalHistory"}},[s("section",{staticClass:"board"},[s("b-table",{attrs:{striped:"",bordered:"",hover:"","show-empty":"",items:e.history.items,fields:e.history.fields},scopedSlots:e._u([{key:"histMgmtId",fn:function(t){return[s("a",{attrs:{href:e.getHistoryLink(t.value),target:"_blank"}},[e._v("보기")])]}}])})],1),e._v(" "),s("div",{slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(t){e.isModalHistory=!1}}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 확인")])],1)]),e._v(" "),s("b-modal",{staticClass:"modal-danger",attrs:{title:"Message",size:"sm"},model:{value:e.isModalMessage,callback:function(t){e.isModalMessage=t},expression:"isModalMessage"}},[s("div",{staticClass:"d-block text-center"},[s("h5",[e._v(e._s(e.modalMessage))])]),e._v(" "),s("div",{slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"danger"},on:{click:e.onDeleteData}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 삭제")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary"},on:{click:function(t){e.isModalMessage=!1}}},[s("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1)])],1)},i=[],a={render:r,staticRenderFns:i};t.a=a}});