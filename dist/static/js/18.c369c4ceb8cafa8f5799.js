webpackJsonp([18],{428:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(701),o=r(702),a=r(11),i=a(s.a,o.a,null,null,null);t.default=i.exports},701:function(e,t,r){"use strict";var s=r(140);t.a={name:"referrers",components:{cSwitch:s.a},data:function(){return{items:{},getItems:{},code:{popId:[]},isLoad:{popId:!0}}},computed:{popId:{get:function(){var e=this;return this.code.popId.find(function(t){return t.popId===e.items.popId})||null},set:function(e){this.items.popId=null!==e?e.popId:null}}},created:function(){var e=this;void 0===this.$route.query.q&&(alert("잘못된 접근입니다"),this.$router.push({name:"Referrer 관리"}));var t=JSON.parse(this.$route.query.q),r=t.referrerId,s=t.referrerTypeCode;this.items={referrerId:r,referrerTypeCode:s,referrerUseYn:!0,popId:null},this.getItems=JSON.parse(this.$route.query.q),this.$https.get("/pops").then(function(t){e.isLoad.popId=!1,e.code.popId=t.data.items})},methods:{onSubmit:function(){var e=this;this.items.modifyHistReason="등록",this.$https.post("/referrers",this.items).then(function(){e.$router.push({name:"Referrer 상세",params:{id:e.items.referrerId},query:{referrerTypeCode:e.items.referrerTypeCode}})}).catch(function(e){console.log(e)})}}}},702:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"animated fadeIn"},[r("b-form",[r("b-card",[r("b-form-fieldset",{attrs:{label:"구분","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{value:e.getItems.referrerTypeCodeName,type:"text",plaintext:""}})],1),e._v(" "),r("b-form-fieldset",{attrs:{label:"IP","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{value:e.getItems.componentIp,type:"text",plaintext:""}})],1),e._v(" "),r("b-form-fieldset",{attrs:{label:"Host Name","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{value:e.getItems.componentHostName,type:"text",plaintext:""}})],1),e._v(" "),r("b-form-fieldset",{attrs:{label:"PoP 선택 *","label-cols":3,horizontal:!0}},[r("multiselect",{attrs:{allowEmpty:!1,showLabels:!1,searchable:!1,options:e.code.popId,loading:e.isLoad.popId,label:"popName",placeholder:"선택"},model:{value:e.popId,callback:function(t){e.popId=t},expression:"popId"}})],1),e._v(" "),r("b-form-fieldset",{attrs:{label:"사용여부","label-cols":3,horizontal:!0}},[r("c-switch",e._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:e.items.referrerUseYn,callback:function(t){e.items.referrerUseYn=t},expression:"items.referrerUseYn"}},"c-switch",{on:"",off:""},!1))],1),e._v(" "),r("div",{staticClass:"form-btn",slot:"footer"},[r("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onSubmit}},[r("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 저장")]),e._v(" "),r("b-button",{attrs:{type:"button",size:"sm",variant:"secondary",to:{name:"Referrer 관리"}}},[r("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1)],1)],1)],1)},o=[],a={render:s,staticRenderFns:o};t.a=a}});