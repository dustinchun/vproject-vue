webpackJsonp([21],{432:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(713),o=s(714),a=s(11),l=a(i.a,o.a,null,null,null);e.default=l.exports},713:function(t,e,s){"use strict";var i=s(140),o=s(139);e.a={name:"pops",props:["id","histories"],components:{ContentHeader:i.a,cSwitch:o.a},data:function(){return{name:"Pop 상세",originItems:{},items:{popName:"",popHostName:"",popDomainName:"",popCtprvnCode:"",popSigCode:"11230",popAddress:"",qualitySolutionTeamCode:"",qualitySolutionTeamCodeName:"",bandwidth:0,popUseYn:!0,serviceNames:"",lowReferrerList:[],edgeList:[]},code:{popCtprvnCode:[],popSigCode:[],qualitySolutionTeamCode:[]},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},modifyHistReason:{label:"변경이력",class:"text-left"},histMgmtId:{label:"보기"}},items:[]},isLoad:{popCtprvnCode:!0,popSigCode:!0,qualitySolutionTeamCode:!0},isEdit:!1,isModalHistory:!1,modalMessage:"",deploy:{status:!0,count:11234}}},computed:{popCtprvnCode:{get:function(){var t=this;return this.code.popCtprvnCode.find(function(e){return e.addressCode===t.items.popCtprvnCode})||null},set:function(t){this.items.popCtprvnCode=null!==t?t.addressCode:null}},popSigCode:{get:function(){var t=this;return this.code.popSigCode.find(function(e){return e.addressCode===t.items.popSigCode})||null},set:function(t){this.items.popSigCode=null!==t?t.addressCode:null}},qualitySolutionTeamCode:{get:function(){var t=this;return this.code.qualitySolutionTeamCode.find(function(e){return e.code===t.items.qualitySolutionTeamCode})||null},set:function(t){this.items.qualitySolutionTeamCode=null!==t?t.code:null}},serviceNames:function(){return null!==this.items.serviceNames?this.items.serviceNames.split(","):[]}},created:function(){var t=this,e=this.$route.query.histories,s=void 0!==e?"/pops/"+this.id+"/histories/"+e:"/pops/"+this.id;e&&document.querySelector("body.app").classList.add("history-mode"),this.fetchAddress(),this.$https.get("/system/commonCode",{q:{groupCode:"QUALITY_TEAM"}}).then(function(e){t.isLoad.qualitySolutionTeamCode=!1,t.code.qualitySolutionTeamCode=e.data.items}),this.$https.get(s).then(function(e){t.items=e.data.items,t.originItems=JSON.parse(JSON.stringify(t.items)),""!==t.items.popCtprvnCode&&t.fetchAddress(t.items.popCtprvnCode)})},methods:{onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onSubmit:function(){var t=this;this.$https.put("/pops/"+this.id,this.items).then(function(e){t.$router.go(t.$router.currentRoute)}).catch(function(t){console.log(t)})},onDelete:function(){this.modalMessage="정말 삭제하시겠습니까?",this.showMessage()},onDeleteData:function(){var t=this;this.$https.delete("/pops/"+this.id).then(function(e){t.$router.push({name:"Pop 관리"})}).catch(function(t){console.log(t)})},onFirstAddress:function(t){this.fetchAddress(t.addressCode)},fetchAddress:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$https.get("/pops/address",{firstDepth:e}).then(function(s){""===e?(t.isLoad.popCtprvnCode=!1,t.code.popCtprvnCode=s.data.items):(t.isLoad.popSigCode=!1,t.code.popSigCode=s.data.items)})},getHistoryLink:function(t){return"#/configuration/pop/"+this.id+"?histories="+t},showHistory:function(){var t=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/pops/"+this.id+"/histories").then(function(e){t.history.items=e.data.items})},showMessage:function(){this.$refs.messageModalRef.show()},hideMessage:function(){this.$refs.messageModalRef.hide()}}}},714:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"animated fadeIn"},[s("content-header",{attrs:{title:t.items.popName,name:t.name}}),t._v(" "),s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],attrs:{variant:"secondary",block:!0}},[t._v("\n      기본정보\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),t._v(" "),s("b-collapse",{attrs:{id:"formDefault",visible:""}},[s("b-card",[t.isEdit?t._e():s("b-form-fieldset",{attrs:{label:"PoP ID","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.id,type:"text",plaintext:""}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"PoP Name","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.popName,type:"text",plaintext:""}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"Host Name(Prefix)","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.popHostName,type:"text",plaintext:""}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"Domain","label-cols":3,horizontal:!0}},[s("span",{staticClass:"domain-text"},[t._v("\n          http(s)://[edge].[content type]."),s("strong",{staticClass:"text-danger"},[t._v(t._s(t.items.popDomainName))]),t._v(".[country].[service type].[service name].vessels.com\n        ")])]),t._v(" "),t.isEdit?s("b-form-fieldset",{attrs:{label:"주소","label-cols":3,horizontal:!0}},[s("multiselect",{staticClass:"inline",class:{"view-type":!t.isEdit},staticStyle:{"min-width":"130px"},attrs:{showLabels:!1,searchable:!1,options:t.code.popCtprvnCode,loading:t.isLoad.popCtprvnCode,disabled:!t.isEdit,label:"addressCodeName",placeholder:"선택"},on:{input:t.onFirstAddress},model:{value:t.popCtprvnCode,callback:function(e){t.popCtprvnCode=e},expression:"popCtprvnCode"}}),t._v(" "),t.popCtprvnCode?s("multiselect",{staticClass:"inline",staticStyle:{"min-width":"130px"},attrs:{showLabels:!1,searchable:!1,options:t.code.popSigCode,loading:t.isLoad.popSigCode,label:"addressCodeName",placeholder:"선택"},model:{value:t.popSigCode,callback:function(e){t.popSigCode=e},expression:"popSigCode"}}):t._e()],1):s("b-form-fieldset",{attrs:{label:"주소","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.popAddress,type:"text",plaintext:""}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"품질솔루션팀","label-cols":3,horizontal:!0}},[t.isEdit?s("multiselect",{attrs:{showLabels:!1,searchable:!1,options:t.code.qualitySolutionTeamCode,loading:t.isLoad.qualitySolutionTeamCode,label:"codeName",placeholder:"선택"},model:{value:t.qualitySolutionTeamCode,callback:function(e){t.qualitySolutionTeamCode=e},expression:"qualitySolutionTeamCode"}}):s("b-form-input",{attrs:{value:t.items.qualitySolutionTeamCodeName,type:"text",plaintext:""}})],1),t._v(" "),t.isEdit?t._e():s("b-form-fieldset",{attrs:{label:"Service","label-cols":3,horizontal:!0}},t._l(t.serviceNames,function(e){return s("span",{staticClass:"badge badge-success badge-pill"},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),s("b-form-fieldset",{attrs:{label:"Bandwidth","label-cols":3,horizontal:!0}},[t.isEdit?s("b-form-input",{staticClass:"w-25",attrs:{type:"text"},model:{value:t.items.bandwidth,callback:function(e){t.items.bandwidth=e},expression:"items.bandwidth"}}):s("b-form-input",{staticClass:"w-25",attrs:{value:t.items.bandwidth,type:"text",plaintext:""}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"사용여부","label-cols":3,horizontal:!0}},[t.isEdit?s("c-switch",t._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:t.items.popUseYn,callback:function(e){t.items.popUseYn=e},expression:"items.popUseYn"}},"c-switch",{on:"",off:""},!1)):s("b-badge",{attrs:{pill:"",variant:t.items.popUseYn?"success":"secondary"}},[t._v("\n          "+t._s(t.items.popUseYn?"사용":"미사용")+"\n        ")])],1),t._v(" "),t.isEdit?s("b-form-fieldset",{attrs:{label:"변경이력","label-cols":3,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:6},model:{value:t.items.modifyHistReason,callback:function(e){t.items.modifyHistReason=e},expression:"items.modifyHistReason"}})],1):t._e()],1)],1),t._v(" "),t.isEdit?t._e():s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.history",modifiers:{history:!0}}],attrs:{variant:"secondary",block:!0}},[t._v("\n      처리이력\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),t._v(" "),t.isEdit?t._e():s("b-collapse",{attrs:{id:"history"}},[s("b-card",[s("b-form-fieldset",{attrs:{label:"등록일","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.createDateTime,plaintext:"",type:"text"}})],1),t._v(" "),s("b-form-fieldset",{attrs:{label:"등록자","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.createId,plaintext:"",type:"text"}})],1),t._v(" "),t.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정일","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.modifyDateTime,plaintext:"",type:"text"}})],1):t._e(),t._v(" "),t.items.modifyDateTime?s("b-form-fieldset",{attrs:{label:"수정자","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:t.items.modifyId,plaintext:"",type:"text"}})],1):t._e(),t._v(" "),s("b-form-fieldset",{attrs:{label:"배포상태","label-cols":3,horizontal:!0}},[s("b-form-input",{staticStyle:{width:"30px"},attrs:{value:t.deploy.status?"성공":"실패",plaintext:"",type:"text"}}),t._v("\n        ("),s("a",{attrs:{href:"#"}},[t._v(t._s(t.deploy.count))]),t._v(")\n      ")],1)],1)],1),t._v(" "),t.isEdit?s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:t.onSubmit}},[s("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" 저장")]),t._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary"},on:{click:t.onView}},[s("i",{staticClass:"fa fa-ban"}),t._v(" 취소")])],1):s("div",{staticClass:"page-btn"},[s("b-button",{staticClass:"float-left",attrs:{type:"button",size:"sm",variant:"danger"},on:{click:t.onDelete}},[s("i",{staticClass:"fa fa-times"}),t._v(" 삭제")]),t._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"outline-primary"}},[t._v("배포")]),t._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"outline-primary"},on:{click:t.showHistory}},[t._v("이력관리")]),t._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:t.onEdit}},[s("i",{staticClass:"fa fa-pencil"}),t._v(" 수정")]),t._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary",to:{name:"Pop 관리"}}},[s("i",{staticClass:"fa fa-list"}),t._v(" 목록")])],1),t._v(" "),s("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:t.isModalHistory,callback:function(e){t.isModalHistory=e},expression:"isModalHistory"}},[s("section",{staticClass:"board"},[s("b-table",{attrs:{striped:"",bordered:"",hover:"","show-empty":"",items:t.history.items,fields:t.history.fields},scopedSlots:t._u([{key:"histMgmtId",fn:function(e){return[s("a",{attrs:{href:t.getHistoryLink(e.value),target:"_blank"}},[t._v("보기")])]}}])})],1),t._v(" "),s("div",{slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:function(e){t.isModalHistory=!1}}},[s("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" 확인")])],1)]),t._v(" "),s("b-modal",{ref:"messageModalRef",staticClass:"modal-danger",attrs:{title:"Message",size:"sm"}},[s("div",{staticClass:"d-block text-center"},[s("h5",[t._v(t._s(t.modalMessage))])]),t._v(" "),s("div",{slot:"modal-footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"danger"},on:{click:t.onDeleteData}},[s("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" 삭제")]),t._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary"},on:{click:t.hideMessage}},[s("i",{staticClass:"fa fa-ban"}),t._v(" 취소")])],1)])],1)},o=[],a={render:i,staticRenderFns:o};e.a=a}});