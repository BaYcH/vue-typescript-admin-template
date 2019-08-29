(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["markdown"],{"40c5":function(t,e,n){},4255:function(t,e,n){"use strict";var o=n("40c5"),a=n.n(o);a.a},"440b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Basic:\n    ")]),n("markdown-editor",{ref:"markdownEditor",attrs:{height:"300px"},model:{value:t.content1,callback:function(e){t.content1=e},expression:"content1"}})],1),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Markdown Mode:\n    ")]),n("markdown-editor",{attrs:{height:"200px",options:{hideModeSwitch:!0,previewStyle:"tab"}},model:{value:t.content2,callback:function(e){t.content2=e},expression:"content2"}})],1),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      Customize Toolbar:\n    ")]),n("markdown-editor",{attrs:{options:{toolbarItems:["heading","bold","italic"]}},model:{value:t.content3,callback:function(e){t.content3=e},expression:"content3"}})],1),n("div",{staticClass:"editor-container"},[n("el-tag",{staticClass:"tag-title"},[t._v("\n      I18n:\n    ")]),n("el-alert",{attrs:{closable:!1,title:"You can change the language of the admin system to see the effect",type:"success"}}),n("markdown-editor",{attrs:{height:"300px",language:t.language},model:{value:t.content4,callback:function(e){t.content4=e},expression:"content4"}})],1),n("el-button",{staticStyle:{"margin-top":"80px"},attrs:{type:"primary",icon:"el-icon-document"},on:{click:t.getHtml}},[t._v("\n    Get HTML\n  ")]),n("div",{domProps:{innerHTML:t._s(t.html)}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[t._v("\n    Markdown is based on\n    "),n("a",{attrs:{href:"https://github.com/nhnent/tui.editor",target:"_blank"}},[t._v("tui.editor")]),t._v(" ，simply wrapped with Vue.\n    "),n("a",{attrs:{target:"_blank",href:"https://armour.github.io/vue-typescript-admin-docs/features/components/markdown-editor.html"}},[t._v("\n      Documentation ")])])}],i=n("d225"),r=n("b0b4"),c=n("308d"),d=n("6bb5"),s=n("4e2b"),l=n("9ab4"),u=n("60a3"),h=n("ac1a"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.id}})},b=[],g=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),p=(n("a7be"),n("44f8"),n("a6e0"),{previewStyle:"vertical",usageStatistics:!1,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]}),k=n("547e"),v=n.n(k);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach(function(e){Object(g["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var y=function(){return"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)},O=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(r["a"])(e,[{key:"onValueChange",value:function(t,e){this.markdownEditor&&t!==e&&t!==this.markdownEditor.getValue()&&this.markdownEditor.setValue(t)}},{key:"onLanguageChange",value:function(){this.destroyEditor(),this.initEditor()}},{key:"onHeightChange",value:function(t){this.markdownEditor&&this.markdownEditor.height(t)}},{key:"onModeChange",value:function(t){this.markdownEditor&&this.markdownEditor.changeMode(t)}},{key:"mounted",value:function(){this.initEditor()}},{key:"destroyed",value:function(){this.destroyEditor()}},{key:"initEditor",value:function(){var t=this,e=document.getElementById(this.id);e&&(this.markdownEditor=new v.a(w({el:e},this.editorOptions)),this.value&&this.markdownEditor.setValue(this.value),this.markdownEditor.on("change",function(){t.$emit("input",t.markdownEditor.getValue())}))}},{key:"destroyEditor",value:function(){this.markdownEditor&&(this.markdownEditor.off("change"),this.markdownEditor.remove(),this.markdownEditor=void 0)}},{key:"focus",value:function(){this.markdownEditor&&this.markdownEditor.focus()}},{key:"setValue",value:function(t){this.markdownEditor&&this.markdownEditor.setValue(t)}},{key:"getValue",value:function(){return this.markdownEditor?this.markdownEditor.getValue():""}},{key:"setHtml",value:function(t){this.markdownEditor&&this.markdownEditor.setHtml(t)}},{key:"getHtml",value:function(){return this.markdownEditor?this.markdownEditor.getHtml():""}},{key:"editorOptions",get:function(){var t=Object.assign({},p,this.options);return t.initialEditType=this.mode,t.height=this.height,t.language=this.language,t}}]),e}(u["c"]);Object(l["a"])([Object(u["b"])({required:!0})],O.prototype,"value",void 0),Object(l["a"])([Object(u["b"])({default:y})],O.prototype,"id",void 0),Object(l["a"])([Object(u["b"])({default:function(){return p}})],O.prototype,"options",void 0),Object(l["a"])([Object(u["b"])({default:"markdown"})],O.prototype,"mode",void 0),Object(l["a"])([Object(u["b"])({default:"300px"})],O.prototype,"height",void 0),Object(l["a"])([Object(u["b"])({default:"en_US"})],O.prototype,"language",void 0),Object(l["a"])([Object(u["d"])("value")],O.prototype,"onValueChange",null),Object(l["a"])([Object(u["d"])("language")],O.prototype,"onLanguageChange",null),Object(l["a"])([Object(u["d"])("height")],O.prototype,"onHeightChange",null),Object(l["a"])([Object(u["d"])("mode")],O.prototype,"onModeChange",null),O=Object(l["a"])([Object(u["a"])({name:"MarkdownEditor"})],O);var j=O,E=j,_=n("2877"),C=Object(_["a"])(E,m,b,!1,null,null,null),M=C.exports,x="\n**This is test**\n\n* vue\n* element\n* webpack\n",H=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.content1=x,t.content2=x,t.content3=x,t.content4=x,t.html="",t.languageTypeList={en:"en_US",zh:"zh_CN",es:"es_ES",ja:"ja_JP"},t}return Object(s["a"])(e,t),Object(r["a"])(e,[{key:"mounted",value:function(){window.scrollTo(0,0)}},{key:"getHtml",value:function(){this.html=this.$refs.markdownEditor.getHtml()}},{key:"language",get:function(){return this.languageTypeList[h["a"].language]}}]),e}(u["c"]);H=Object(l["a"])([Object(u["a"])({name:"MarkdownDemo",components:{MarkdownEditor:M}})],H);var V=H,P=V,S=(n("4255"),Object(_["a"])(P,o,a,!1,null,"2f8708b7",null));e["default"]=S.exports}}]);