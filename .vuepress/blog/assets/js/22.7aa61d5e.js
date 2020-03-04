(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{256:function(e,t,n){"use strict";n.r(t);var a=n(28),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"使用-xmlhttprequest-实现一个类-ajax-请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-xmlhttprequest-实现一个类-ajax-请求"}},[e._v("#")]),e._v(" 使用 XMLHttpRequest 实现一个类 ajax 请求")]),e._v(" "),n("p",[e._v("由于自身知识有限，可能实现得不是很好，读者们也可以通过查看 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),n("OutboundLink")],1),e._v(" 中与 XMLHttpRequest 相关的文档来实现")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function myAjax({url, method, data, success, contentType, responseType, header, timeout}) {\n    let xhr = new XMLHttpRequest()\n    if(!url) {\n        throw new Error(`Missing parameter url`)\n    }\n    let type = method.toLowerCase() || 'get'\n    params = null\n    if(type === 'get'){\n        if(data) {\n            url = url + '?'\n            let i = 0\n            for(let key in data){\n                url += i === 0 ? (key + '=' + data[key]) : ('&' + key + '=' + data[key])\n                i++ \n            }\n        }\n    } else if(type === 'post'){\n        if(data) {\n            params = ''\n            let i = 0\n            for(let key in data) {\n                params += i == 0 ? (key + '=' + data[key]) : ('&' + key + '=' + data[key]) \n                i++\n            }\n        }\n    }\n\n    xhr.onreadystatechange = function() {\n        if(xhr.readyState === 4){\n            if(this.status === 200 || this.status === 304){\n                success && success(this.response)\n            }\n        }\n    }\n\n    xhr.open(type, url, true)\n\n    timeout && (xhr.timeout = timeout)\n    \n    xhr.responseType = responseType ? responseType : 'json'\n\n    if(type === 'get'){\n        xhr.setRequestHeader(\"Content-Type\", \"application/json\")\n    } else if (type === 'post') {\n        xhr.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\")\n        \n    }\n\n    contentType && xhr.setRequestHeader(\"Content-Type\", contentType)\n    \n    for(let key in header) {\n        xhr.setRequestHeader(key, header[key])\n    }\n\n    xhr.send(params)\n}\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);