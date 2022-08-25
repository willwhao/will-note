(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{597:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"子组件派发事件和值给父组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子组件派发事件和值给父组件"}},[s._v("#")]),s._v(" 子组件派发事件和值给父组件")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components.html#%E7%9B%91%E5%90%AC%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("API"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("子组件通过"),t("code",[s._v("$emit")]),s._v("派发事件和值给父组件（值可以有多个）")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$emit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fnX'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),s._v(" "),t("p",[s._v("父组件通过"),t("code",[s._v("v-on")]),s._v("绑定子组件派发的事件，并触发一个新的事件，新的事件内可以接收传来的值")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ComponentName @fnX"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fnY"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ComponentName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("methods")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fnY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"父子组件间传递数据-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父子组件间传递数据-demo"}},[s._v("#")]),s._v(" 父子组件间传递数据 demo")]),s._v(" "),t("p",{staticClass:"codepen",staticStyle:{height:"400px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"400","data-theme-id":"light","data-default-tab":"js,result","data-user":"xugaoyi","data-slug-hash":"mdJVqgg","data-pen-title":"mdJVqgg"}},[t("span",[s._v("See the Pen "),t("a",{attrs:{href:"https://codepen.io/xugaoyi/pen/mdJVqgg"}},[s._v("\n  mdJVqgg")]),s._v(" by xugaoyi ("),t("a",{attrs:{href:"https://codepen.io/xugaoyi"}},[s._v("@xugaoyi")]),s._v(")\n  on "),t("a",{attrs:{href:"https://codepen.io"}},[s._v("CodePen")]),s._v(".")])]),s._v(" "),t("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}})])}),[],!1,null,null,null);t.default=e.exports}}]);