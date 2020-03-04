(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(n,t,a){n.exports=a.p+"assets/img/css11.7455eb34.png"},247:function(n,t,a){"use strict";a.r(t);var e=a(28),i=Object(e.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"实现三栏布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现三栏布局"}},[n._v("#")]),n._v(" 实现三栏布局")]),n._v(" "),e("p",[n._v("所谓的三栏布局就是两边固定长度 中间自适应")]),n._v(" "),e("p",[e("img",{attrs:{src:a(212),alt:"三栏布局效果"}})]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// html\n <div class="main">\n    <div class="left"></div>\n    <div class="right"></div>\n    <div class="mid">\n        <h2>标题</h2>\n    </div>\n</div>\n')])])]),e("h2",{attrs:{id:"绝对定位实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位实现"}},[n._v("#")]),n._v(" 绝对定位实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// css\n*{\n    margin: 0;\n    padding: 0;\n}\n.main{\n    height: 150px;\n    background: #f5f5f5;\n}\n.left {\n    position: absolute;\n    left: 0;\n    width: 100px;\n    height: 100px;\n    background: lightgreen;\n}\n.right {\n    position: absolute;\n    right: 0;\n    width: 100px;\n    height: 100px;\n    background: lightyellow;\n}\n.mid{\n    margin-left: 100px; // 不加margin内容会被前面的两个div遮住一部分\n    margin-right: 100px;\n    background: lightblue;\n}\n")])])]),e("h2",{attrs:{id:"浮动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[n._v("#")]),n._v(" 浮动")]),n._v(" "),e("p",[n._v("运用浮动的方法其实跟使用绝对定位是一个意思")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("*{\n    margin: 0;\n    padding: 0;\n}\n.main{\n    height: 150px;\n    background: #f5f5f5;\n}\n.left {\n    float: left;\n    width: 100px;\n    height: 100px;\n    background: lightgreen;\n}\n.right {\n    float: right;\n    width: 100px;\n    height: 100px;\n    background: lightyellow;\n}\n.mid{\n    margin-left: 100px;\n    margin-right: 100px;\n    background: lightblue;\n}\n")])])]),e("h2",{attrs:{id:"使用-flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-flex"}},[n._v("#")]),n._v(" 使用 flex")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("*{\n    margin: 0;\n    padding: 0;\n}\n.main{\n    display: flex;\n    height: 150px;\n    background: #f5f5f5;\n}\n.left {\n    width: 100px;\n    height: 100px;\n    background: lightgreen;\n}\n.right {\n    width: 100px;\n    height: 100px;\n    background: lightyellow;\n}\n.mid{\n    flex: 1; // flex: 1; 因为只有一个元素使用flex: 1; 所以相当于所以剩余空间 \n    background: lightblue;\n}\n")])])]),e("h2",{attrs:{id:"使用-grid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-grid"}},[n._v("#")]),n._v(" 使用 grid")]),n._v(" "),e("p",[n._v("个人感觉使用grid是最方便的，但是grid从IE10起才兼容")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("*{\n    margin: 0;\n    padding: 0;\n}\n.main{\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 100px auto 100px; // 分成三个块 宽度分别为 100px 自适应 100px\n    height: 150px;\n    background: #f5f5f5;\n}\n.left {\n    width: 100px;\n    height: 100px;\n    background: lightgreen;\n}\n.right {\n    width: 100px;\n    height: 100px;\n    background: lightyellow;\n}\n.mid{\n    background: lightblue;\n}\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);