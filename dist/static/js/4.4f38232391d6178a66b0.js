webpackJsonp([4],{443:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(731),s=a(732),n=a(11),o=n(i.a,s.a,null,null,null);e.default=o.exports},731:function(t,e,a){"use strict";var i=a(141),s=a(140);e.a={name:"service",props:["id"],components:{ContentHeader:i.a,cSwitch:s.a},data:function(){return{name:"Service 상세",originItems:{},items:[],isEdit:!1,isModalHistory:!1}},created:function(){},methods:{onEdit:function(){},onView:function(){},onSubmit:function(){},showHistory:function(){}}}},732:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated fadeIn"},[a("content-header",{attrs:{title:t.items.serviceName,name:t.name}}),t._v(" "),a("div",{staticClass:"collapse-title"},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],attrs:{variant:"secondary",block:!0}},[t._v("\n      PoP\n      "),a("i",{staticClass:"fa fa-angle-down"})])],1),t._v(" "),a("b-collapse",{attrs:{id:"formDefault",visible:""}},[a("b-card",[a("section",{staticClass:"board"},[a("b-table",{attrs:{striped:"",bordered:"",hover:"","show-empty":""}})],1)])],1),t._v(" "),t.isEdit?t._e():a("div",{staticClass:"collapse-title"},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.history",modifiers:{history:!0}}],attrs:{variant:"secondary",block:!0}},[t._v("\n      배포이력\n      "),a("i",{staticClass:"fa fa-angle-down"})])],1),t._v(" "),a("b-collapse",{attrs:{id:"history",visible:""}},[a("b-card",[a("b-form-fieldset",{attrs:{label:"배포일시","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{value:"배포일시",plaintext:"",type:"text"}})],1),t._v(" "),a("b-form-fieldset",{attrs:{label:"배포자","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{value:"배포자",plaintext:"",type:"text"}})],1),t._v(" "),a("b-form-fieldset",{attrs:{label:"배포상태","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{value:"배포상태",plaintext:"",type:"text"}})],1)],1)],1),t._v(" "),t.isEdit?a("div",{staticClass:"page-btn"},[a("b-button",{attrs:{type:"button",size:"sm",variant:"outline-primary"},on:{click:t.showHistory}},[t._v("이력관리")]),t._v(" "),a("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:t.onSubmit}},[a("i",{staticClass:"fa fa-dot-circle-o"}),t._v(" 배포")]),t._v(" "),a("b-button",{attrs:{type:"button",size:"sm",variant:"secondary"},on:{click:t.onView}},[a("i",{staticClass:"fa fa-ban"}),t._v(" 취소")])],1):t._e()],1)},s=[],n={render:i,staticRenderFns:s};e.a=n}});