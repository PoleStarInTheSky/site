(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{313:function(e,t,s){},331:function(e,t,s){var a=s(0),n=s(2),i=s(68),c=[].slice,o=function(e){return function(t,s){var a=arguments.length>2,n=a?c.call(arguments,2):void 0;return e(a?function(){("function"==typeof t?t:Function(t)).apply(this,n)}:t,s)}};a({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:o(n.setTimeout),setInterval:o(n.setInterval)})},332:function(e,t,s){e.exports=s.p+"assets/img/code-debug.65df077b.gif"},333:function(e,t,s){e.exports=s.p+"assets/img/code-fusion.e888e7af.gif"},334:function(e,t,s){e.exports=s.p+"assets/img/code-auxiliary.a4d7cbf3.gif"},335:function(e,t,s){e.exports=s.p+"assets/img/code-quality.011bfc14.gif"},336:function(e,t,s){e.exports=s.p+"assets/img/code-action.15a5391f.gif"},337:function(e,t,s){"use strict";s(313)},348:function(e,t,s){"use strict";s.r(t);s(331);var a={name:"Carousel",data:function(){return{carouselItems:[{adjective:"极简",text:"的开发流程",message:"我们将创建、调试和发布项目的操作通过插件的方式集成到了常用的编辑器中，让项目的开发流程更简单。",img:s(332)},{adjective:"友好",text:"的开发体验",message:"我们提供了基于物料的可视化开发方式，区块组装生成页面，一键添加物料到代码，这对于新人来说非常友好。",img:s(333)},{adjective:"强大",text:"的编码辅助",message:"代码补全，定义预览与跳转，代码片段，代码重构的多重助力，让前端工程开发更轻松。不但支持 JavaScript 文件，对样式文件同样有效。",img:s(334)},{adjective:"详尽",text:"的代码分析",message:"非常快速的获取多维度检测报告，支持一键快速修复问题。帮助团队实现代码规范统一，提升和改善代码质量。并为阿里内部工程提供数据分析服务。",img:s(335)},{adjective:"完善",text:"的编程指标",message:"我们自动追踪您在编辑器中的编码行为，通过对收集到的数据进行量化，以帮助您从数据中学习，更高效地编写代码，提高生产力。",img:s(336)}],activeIndex:0}},mounted:function(){var e=this;setInterval((function(){return e.handleAdd()}),2e4)},methods:{handleChangeActive:function(e){this.activeIndex=e},handleAdd:function(){this.activeIndex=(this.activeIndex+1)%5},handleDesc:function(){this.activeIndex=(this.activeIndex-1+5)%5}}},n=(s(337),s(44)),i=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"carousel-container"},[s("nav",[s("ul",{staticClass:"nav-items"},e._l(e.carouselItems,(function(t,a){return s("li",{key:a,staticClass:"nav-item",class:e.activeIndex===a?"nav-item-active":"",on:{click:function(t){return e.handleChangeActive(a)}}},[e._v("\n        "+e._s(t.adjective)+e._s(e.activeIndex===a?t.text:"")+"\n      ")])})),0)]),e._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("p",{key:e.carouselItems[e.activeIndex].message,staticClass:"carousel-message"},[e._v("\n      "+e._s(e.carouselItems[e.activeIndex].message)+"\n    ")])]),e._v(" "),s("div",{staticClass:"carousel-wrapper"},[s("button",{staticClass:"carousel-button left",on:{click:e.handleDesc}},[e._v("<")]),e._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("img",{key:e.carouselItems[e.activeIndex].message,staticClass:"carousel-img",attrs:{src:e.carouselItems[e.activeIndex].img,alt:"img"}})]),e._v(" "),s("button",{staticClass:"carousel-button right",on:{click:e.handleAdd}},[e._v(">")])],1)],1)}),[],!1,null,"46ce61c9",null);t.default=i.exports}}]);