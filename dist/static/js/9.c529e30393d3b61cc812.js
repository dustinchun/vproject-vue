webpackJsonp([9],{446:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(741),o=s(742),a=s(11),n=a(i.a,o.a,null,null,null);t.default=n.exports},741:function(e,t,s){"use strict";var i=s(140),o=s(139);t.a={name:"service",props:["id"],components:{ContentHeader:i.a,cSwitch:o.a},data:function(){return{name:"Service 상세",originItems:{},items:{serviceName:"",accountId:null,accountName:"",companyName:"",serviceTypeCode:[],serviceDomainList:[],cnameUseYn:!0,cnameDomainName:"",sslCertUseYn:!0,sslCert:"",sslCertKey:"",sslCertExpireDate:"",serviceUseYn:!0,createDateTime:"",createId:"",modifyDateTime:"",modifyId:""},serviceItems:{command:"ADD",serviceTypeCode:[],modifyHistReason:"서비스 타입 추가"},serviceUseYnItems:{serviceUseYn:null,modifyHistReason:"서비스 사용 여부 변경"},code:{serviceTypeCode:[],domainProtocolCode:[],domainHashingTypeCode:[]},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},modifyHistReason:{label:"변경이력",class:"text-left"},histMgmtId:{label:"보기"}},items:[]},isLoad:{serviceTypeCode:!0,domainProtocolCode:!0,domainHashingTypeCode:!0},isEdit:!1,isModalService:!1,isServiceAdd:!0,isModalUseYn:!1,isModalMessage:!1,modalService:{serviceTypeCode:[],history:""},modalUseYn:{serviceUseYn:!1,history:""},isModalHistory:!1,modalMessage:"",deploy:{status:!0,count:11234}}},computed:{serviceTypeCode:{get:function(){var e=this;return this.items.serviceTypeCode.length>0?this.items.serviceTypeCode.map(function(t){return e.code.serviceTypeCode.find(function(e){return e.code===t})}):[]},set:function(e){this.items.serviceTypeCode=e.length>0?e.map(function(e){return e.code}):[]}},serviceDomainList:function(){var e=this;return this.items.serviceDomainList.length>0?this.items.serviceDomainList.map(function(t){var s=e.getCodeObj(t.serviceTypeCode);return Object.assign({},t,{domainProtocolCode:e.code.domainProtocolCode.find(function(e){return e.code===t.domainProtocolCode}),domainHashingTypeCode:e.code.domainHashingTypeCode.find(function(e){return e.code===t.domainHashingTypeCode}),serviceCodeVal:s.codeValChar1,serviceCodeName:s.codeName})}):[]}},created:function(){var e=this,t=this.$route.query.histories,s=void 0!==t?"/services/"+this.id+"/histories/"+t:"/services/"+this.id;t&&document.querySelector("body.app").classList.add("history-mode"),this.$https.get("/system/commonCode",{q:{groupCode:"SERVICE_TYPE"}}).then(function(t){e.isLoad.serviceTypeCode=!1,e.code.serviceTypeCode=t.data.items}),this.$https.get("/system/commonCode",{q:{groupCode:"DOMAIN_PROTOCOL"}}).then(function(t){e.isLoad.domainProtocolCode=!1,e.code.domainProtocolCode=t.data.items}),this.$https.get("/system/commonCode",{q:{groupCode:"HASHING_TYPE"}}).then(function(t){e.isLoad.domainHashingTypeCode=!1,e.code.domainHashingTypeCode=t.data.items}),this.$https.get(s).then(function(t){e.items=t.data.items,e.originItems=JSON.parse(JSON.stringify(e.items)),e.serviceUseYnItems.serviceUseYn=e.items.serviceUseYn})},methods:{onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onSubmit:function(){var e=this;this.items.serviceDomainList=this.serviceDomainList.map(function(e){return{serviceTypeCode:e.serviceTypeCode,domainProtocolCode:null!==e.domainProtocolCode?e.domainProtocolCode.code:null,domainHashingTypeCode:null!==e.domainHashingTypeCode?e.domainHashingTypeCode.code:null}}),this.$https.put("/services/"+this.id,this.items).then(function(){e.$router.go(e.$router.currentRoute)}).catch(function(e){console.log(e)})},onSubmitService:function(){var e=this;"ADD"===this.serviceItems.command&&(this.serviceItems.serviceTypeCode=this.items.serviceTypeCode.filter(function(t){return e.originItems.serviceTypeCode.indexOf(t)<0})),this.$https.put("/services/"+this.id+"/types",this.serviceItems).then(function(){e.$router.go(e.$router.currentRoute)}).catch(function(e){console.log(e)})},onResetService:function(){this.isModalService=!1,this.items=JSON.parse(JSON.stringify(this.originItems)),this.serviceItems={command:"ADD",serviceTypeCode:[],modifyHistReason:"서비스 타입 추가"}},onSubmitUseYn:function(){var e=this;this.$https.put("/services/"+this.id+"/use",this.serviceUseYnItems).then(function(){e.$router.go(e.$router.currentRoute)}).catch(function(e){console.log(e)})},onResetUseYn:function(){this.isModalUseYn=!1,this.items=JSON.parse(JSON.stringify(this.originItems)),this.serviceUseYnItems={serviceUseYn:this.items.serviceUseYn,modifyHistReason:"서비스 사용 여부 변경"}},onDelete:function(){this.modalMessage="정말 삭제하시겠습니까?",this.isModalMessage=!0},onDeleteData:function(){var e=this;this.$https.delete("/services/"+this.id).then(function(t){e.$router.push({name:"Service 관리"})}).catch(function(e){console.log(e)})},getHistoryLink:function(e){return"#/service/service/"+this.id+"?histories="+e},showHistory:function(){var e=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/services/"+this.id+"/histories").then(function(t){e.history.items=t.data.items})},getCodeObj:function(e){return this.code.serviceTypeCode.find(function(t){return t.code===e})||{}},onSelectType:function(e){this.serviceDomainList.find(function(t){return t.serviceCodeVal===e.codeValChar1})||this.items.serviceDomainList.push({serviceTypeCode:e.code,domainProtocolCode:this.code.domainProtocolCode[0].code,domainHashingTypeCode:this.code.domainHashingTypeCode[0].code})},onRemoveType:function(e){var t=this;this.$https.get("services/"+this.id+"/types",{serviceType:e.code}).then(function(e){"Success"===e.data.result||(t.items.serviceName="",t.modalMessage="\n            사용 설정된 PoP이 존재하여 삭제할 수 없습니다.\n            삭제 후, 다시 시도해주세요.\n            ",t.isModalMessage=!0,t.items=JSON.parse(JSON.stringify(t.originItems)))})}}}},742:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"animated fadeIn"},[s("content-header",{attrs:{title:e.items.serviceName,name:e.name}}),e._v(" "),s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],attrs:{variant:"secondary",block:!0}},[e._v("\n      기본정보\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),e._v(" "),s("b-collapse",{attrs:{id:"formDefault",visible:""}},[s("b-card",[s("b-form-fieldset",{attrs:{label:"Account","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.accountName,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Service Name","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.serviceName,plaintext:"",type:"text"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Service Type","label-cols":3,horizontal:!0}},[e._l(e.serviceTypeCode,function(t){return s("span",{staticClass:"badge badge-success badge-pill"},[e._v("\n          "+e._s(t.codeName)+"\n        ")])}),e._v(" "),e.isEdit?e._e():s("b-button",{staticClass:"only-icon",attrs:{variant:"link"},on:{click:function(t){e.isModalService=!e.isModalService}}},[s("i",{staticClass:"fa fa-pencil"})])],2),e._v(" "),s("b-form-fieldset",{attrs:{label:"Domain","label-cols":3,horizontal:!0}},[s("ul",{staticClass:"icons-list",class:{"list-view":!e.isEdit}},e._l(e.serviceDomainList,function(t,i){return s("li",[s("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bg-primary",attrs:{title:t.serviceCodeName}},[e._v(e._s(t.serviceCodeVal))]),e._v(" "),s("div",{staticClass:"desc"},[s("small",[e._v("Domain")]),e._v(" "),s("div",{staticClass:"title"},[e.isEdit?s("multiselect",{staticClass:"inline sm protocol",attrs:{label:"codeName",allowEmpty:!0,showLabels:!1,searchable:!1,options:e.code.domainProtocolCode,loading:e.isLoad.domainProtocolCode,placeholder:"://"},model:{value:t.domainProtocolCode,callback:function(e){t.domainProtocolCode=e},expression:"domain.domainProtocolCode"}}):s("span",[e._v(e._s(t.domainProtocolName))]),e._v("\n                "+e._s(e._f("lowercase")(t.serviceCodeVal))+"."+e._s(e.items.serviceName)+".vessels.com\n              ")],1)]),e._v(" "),s("div",{staticClass:"value"},[s("div",{staticClass:"small text-muted"},[e._v("Hashing Type")]),e._v(" "),e.isEdit?s("multiselect",{staticClass:"inline sm",attrs:{label:"codeName",allowEmpty:!0,showLabels:!1,searchable:!1,options:e.code.domainHashingTypeCode,loading:e.isLoad.domainHashingTypeCode,placeholder:"Select"},model:{value:t.domainHashingTypeCode,callback:function(e){t.domainHashingTypeCode=e},expression:"domain.domainHashingTypeCode"}}):s("span",[e._v(e._s(t.domainHashingTypeName))])],1)])}))]),e._v(" "),s("b-form-fieldset",{attrs:{label:"CNAME 사용여부","label-cols":3,horizontal:!0}},[e.isEdit?s("c-switch",e._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:e.items.cnameUseYn,callback:function(t){e.items.cnameUseYn=t},expression:"items.cnameUseYn"}},"c-switch",{on:"",off:""},!1)):s("b-badge",{attrs:{pill:"",variant:e.items.cnameUseYn?"success":"secondary"}},[e._v("\n          "+e._s(e.items.cnameUseYn?"사용":"미사용")+"\n        ")])],1),e._v(" "),e.items.cnameUseYn?s("b-form-fieldset",{attrs:{label:"CNAME 도메인","label-cols":3,horizontal:!0}},[e.isEdit?s("b-form-input",{attrs:{type:"text"},model:{value:e.items.cnameDomainName,callback:function(t){e.items.cnameDomainName=t},expression:"items.cnameDomainName"}}):s("b-form-input",{attrs:{value:e.items.cnameDomainName,plaintext:"",type:"text"}})],1):e._e(),e._v(" "),s("b-form-fieldset",{attrs:{label:"SSL 인증서","label-cols":3,horizontal:!0}},[e.isEdit?s("c-switch",e._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:e.items.sslCertUseYn,callback:function(t){e.items.sslCertUseYn=t},expression:"items.sslCertUseYn"}},"c-switch",{on:"",off:""},!1)):s("b-badge",{attrs:{pill:"",variant:e.items.sslCertUseYn?"success":"secondary"}},[e._v("\n          "+e._s(e.items.sslCertUseYn?"사용":"미사용")+"\n        ")])],1),e._v(" "),e.items.sslCertUseYn?s("b-form-fieldset",{attrs:{label:"SSL 인증서","label-cols":3,horizontal:!0}},[s("div",{staticClass:"form-in-group"},[s("b-form-fieldset",{attrs:{label:"Cert","label-cols":2,horizontal:!0}},[s("b-form-textarea",{attrs:{plaintext:!e.isEdit,"no-resize":!e.isEdit,disabled:!e.isEdit,rows:2,placeholder:"Cert"},model:{value:e.items.sslCert,callback:function(t){e.items.sslCert=t},expression:"items.sslCert"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Key","label-cols":2,horizontal:!0}},[s("b-form-textarea",{attrs:{plaintext:!e.isEdit,"no-resize":!e.isEdit,disabled:!e.isEdit,rows:2,placeholder:"Key"},model:{value:e.items.sslCertKey,callback:function(t){e.items.sslCertKey=t},expression:"items.sslCertKey"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"만료일","label-cols":2,horizontal:!0}},[s("b-form-input",{attrs:{type:"date",plaintext:!e.isEdit},model:{value:e.items.sslCertExpireDate,callback:function(t){e.items.sslCertExpireDate=t},expression:"items.sslCertExpireDate"}})],1)],1)]):e._e(),e._v(" "),s("b-form-fieldset",{attrs:{label:"사용여부","label-cols":3,horizontal:!0}},[s("b-badge",{attrs:{pill:"",variant:e.items.serviceUseYn?"success":"secondary"}},[e._v("\n          "+e._s(e.items.serviceUseYn?"사용":"미사용")+"\n        ")]),e._v(" "),e.isEdit?e._e():s("b-button",{staticClass:"only-icon",attrs:{variant:"link"},on:{click:function(t){e.isModalUseYn=!e.isModalUseYn}}},[s("i",{staticClass:"fa fa-pencil"})])],1),e._v(" "),e.isEdit?s("b-form-fieldset",{attrs:{label:"변경이력","label-cols":3,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:6},model:{value:e.items.modifyHistReason,callback:function(t){e.items.modifyHistReason=t},expression:"items.modifyHistReason"}})],1):e._e()],1)],1),e._v(" "),e.isEdit?e._e():s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.history",modifiers:{history:!0}}],attrs:{variant:"secondary",block:!0}},[e._v("\n      처리이력\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),e._v(" "),e.isEdit?e._e():s("b-collapse",{attrs:{id:"history"}},[s("b-card",[s("b-form-fieldset",{attrs:{label:"등록일","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.createDateTime,plaintext:"",type:"text"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"등록자","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.createId,plaintext:"",type:"text"}})],1),e._v(" "),e.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정일","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.modifyDateTime,plaintext:"",type:"text"}})],1):e._e(),e._v(" "),e.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정자","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.modifyId,plaintext:"",type:"text"}})],1):e._e(),e._v(" "),e.isEdit?e._e():s("b-form-fieldset",{attrs:{label:"배포상태","label-cols":3,horizontal:!0}},[s("b-form-input",{staticStyle:{width:"30px"},attrs:{value:e.deploy.status?"성공":"실패",plaintext:"",type:"text"}}),e._v("\n        ("),s("a",{attrs:{href:"#"}},[e._v(e._s(e.deploy.count))]),e._v(")\n      ")],1)],1)],1),e._v(" "),e.isEdit?s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onSubmit}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 저장")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary"},on:{click:e.onView}},[s("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1):s("div",{staticClass:"page-btn"},[s("b-button",{staticClass:"float-left",attrs:{type:"button",size:"sm",variant:"danger"},on:{click:e.onDelete}},[s("i",{staticClass:"fa fa-times"}),e._v(" 삭제")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"outline-primary"},on:{click:e.showHistory}},[e._v("이력관리")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onEdit}},[s("i",{staticClass:"fa fa-pencil"}),e._v(" 수정")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary",to:{name:"Service 관리"}}},[s("i",{staticClass:"fa fa-list"}),e._v(" 목록")])],1),e._v(" "),s("b-modal",{attrs:{id:"serviceModal",size:"lg"},on:{hide:e.onResetService},model:{value:e.isModalService,callback:function(t){e.isModalService=t},expression:"isModalService"}},[s("template",{slot:"modal-title"},[e._v("\n      "+e._s(e.items.serviceName)+"\n      "),s("small",[e._v(" > Service Type")])]),e._v(" "),s("div",{staticClass:"form-in-group"},[s("b-form-fieldset",{attrs:{label:"구분","label-cols":2,horizontal:!0}},[s("b-form-radio-group",{attrs:{options:[{text:"추가",value:"ADD"},{text:"삭제",value:"DELETE"}],value:e.serviceItems.command},model:{value:e.serviceItems.command,callback:function(t){e.serviceItems.command=t},expression:"serviceItems.command"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Service Type","label-cols":2,horizontal:!0}},[s("multiselect",{class:{addMode:"ADD"===e.serviceItems.command},attrs:{trackBy:"code",label:"codeName",showPointer:!1,multiple:!0,showLabels:!1,options:e.code.serviceTypeCode,loading:e.isLoad.serviceTypeCode,closeOnSelect:!1,allowEmpty:!0,placeholder:"Select service type"},on:{select:e.onSelectType,remove:e.onRemoveType},model:{value:e.serviceTypeCode,callback:function(t){e.serviceTypeCode=t},expression:"serviceTypeCode"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"이력관리","label-cols":2,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:6},model:{value:e.serviceItems.modifyHistReason,callback:function(t){e.serviceItems.modifyHistReason=t},expression:"serviceItems.modifyHistReason"}})],1)],1),e._v(" "),s("div",{slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onSubmitService}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 저장")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"danger"},on:{click:e.onResetService}},[s("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1)],2),e._v(" "),s("b-modal",{attrs:{size:"lg"},on:{hide:e.onResetUseYn},model:{value:e.isModalUseYn,callback:function(t){e.isModalUseYn=t},expression:"isModalUseYn"}},[s("template",{slot:"modal-title"},[e._v("\n      "+e._s(e.items.serviceName)+"\n      "),s("small",[e._v(" > 사용 여부")])]),e._v(" "),s("div",{staticClass:"form-in-group"},[s("b-form-fieldset",{attrs:{label:"사용 여부","label-cols":2,horizontal:!0}},[s("c-switch",e._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:e.serviceUseYnItems.serviceUseYn,callback:function(t){e.serviceUseYnItems.serviceUseYn=t},expression:"serviceUseYnItems.serviceUseYn"}},"c-switch",{on:"",off:""},!1))],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"이력관리","label-cols":2,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:6},model:{value:e.serviceUseYnItems.modifyHistReason,callback:function(t){e.serviceUseYnItems.modifyHistReason=t},expression:"serviceUseYnItems.modifyHistReason"}})],1)],1),e._v(" "),s("div",{slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onSubmitUseYn}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 저장")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"danger"},on:{click:e.onResetUseYn}},[s("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1)],2),e._v(" "),s("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:e.isModalHistory,callback:function(t){e.isModalHistory=t},expression:"isModalHistory"}},[s("section",{staticClass:"board"},[s("b-table",{attrs:{striped:"",bordered:"",hover:"","show-empty":"",items:e.history.items,fields:e.history.fields},scopedSlots:e._u([{key:"histMgmtId",fn:function(t){return[s("a",{attrs:{href:e.getHistoryLink(t.value),target:"_blank"}},[e._v("보기")])]}}])})],1),e._v(" "),s("div",{slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(t){e.isModalHistory=!1}}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 확인")])],1)]),e._v(" "),s("b-modal",{staticClass:"modal-danger",attrs:{title:"Message",size:"sm"},model:{value:e.isModalMessage,callback:function(t){e.isModalMessage=t},expression:"isModalMessage"}},[s("div",{staticClass:"d-block text-center"},[s("h5",[e._v(e._s(e.modalMessage))])]),e._v(" "),s("div",{slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"danger"},on:{click:e.onDeleteData}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 삭제")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary"},on:{click:function(t){e.isModalMessage=!1}}},[s("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1)])],1)},o=[],a={render:i,staticRenderFns:o};t.a=a}});