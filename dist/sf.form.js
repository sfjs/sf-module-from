!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require(void 0)):"function"==typeof define&&define.amd?define("sf-form",[],t):"object"==typeof exports?exports["sf-form"]=t(require("sf-core")):e["sf-form"]=t(e[void 0])}(this,function(__WEBPACK_EXTERNAL_MODULE_0__){return function(e){function t(o){if(s[o])return s[o].exports;var r=s[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var s={};return t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,o){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=7)}([function(e,t){e.exports=__WEBPACK_EXTERNAL_MODULE_0__},function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=s(0),r=s.n(o),n=s(2);r.a.registerInstanceType(n.a,"js-sf-form"),e.exports=n.a}).call(t,s(6)(e))},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_sf_core__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0_sf_core___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sf_core__),__WEBPACK_IMPORTED_MODULE_1__formToObject__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_1__formToObject___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__formToObject__);__webpack_require__.d(__webpack_exports__,"a",function(){return Form});var formMessages=__webpack_require__(3),iterateInputs=__webpack_require__(5),Form=function(e,t,s){this._construct(e,t,s)};Form.prototype=__WEBPACK_IMPORTED_MODULE_0_sf_core___default.a.createModulePrototype(),Form.prototype.name="form",Form.prototype._construct=function(e,t,s){this.init(e,t,s),this.mixMessagesOptions(),this.DOMEvents=new this.sf.modules.helpers.DOMEvents,this.addEvents(),this.events=new this.sf.modules.core.Events(["beforeSend","success","error","always"]),e.iterateInputs=iterateInputs},Form.prototype.optionsToGrab={context:{processor:function(e,t){return e}},self:{processor:function(e,t){return this}},url:{domAttr:"action",value:"/"},method:{domAttr:"method",value:"POST"},lockType:{value:"default",domAttr:"data-lockType"},messagesType:{value:"spiral",domAttr:"data-messagesType"},messages:{value:"",domAttr:"data-messages",processor:function(e,t,s){if(!t)return this.value;if("string"==typeof t)try{t=JSON.parse(t)}catch(e){console.error("Form JSON.parse error: ",e)}return Object.assign(s.value,t)}},useAjax:{value:!0,domAttr:"data-useAjax",processor:function(e,t){return"boolean"==typeof t?t:(t=void 0!==t&&null!==t?t.toLowerCase():"","false"===t?t=!1:"true"===t&&(t=!0),t)}},ajaxCallback:{value:!1,domAttr:"data-callback"},beforeSubmitCallback:{value:!1,domAttr:"data-before-submit"},afterSubmitCallback:{value:!1,domAttr:"data-after-submit"},headers:{value:{Accept:"application/json"},domAttr:"data-headers",processor:function(e,t,s){if(void 0===t||null==t)return this.value;if("string"==typeof t)try{t=JSON.parse(t)}catch(e){console.error("Form JSON.parse error: ",e)}return Object.assign(s.value,t)}}},Form.prototype.mixMessagesOptions=function(){var e=this.sf.options.instances.form;this.options.messages=Object.assign({},formMessages.defaults,e&&e.messages&&e.messages[this.options.messagesType],this.options.messages)},Form.prototype.onSubmit=function(e){if(this.sf.getInstance("lock",this.node))return e.preventDefault(),void e.stopPropagation();this.removeMessages(),this.options.data=this.getFormData(),window.FormData||0===this.options.context.querySelectorAll("input[type='file']").length||(this.options.useAjax=!1),this.events.trigger("beforeSend",this.options),this.options.useAjax&&(this.send(this.options),e.preventDefault(),e.stopPropagation())},Form.prototype.lock=function(e){this.options.lockType&&"none"!==this.options.lockType&&(e?this.sf.removeInstance("lock",this.node)||console.warn("You try to remove 'lock' instance, but it is not available or not started"):this.sf.addInstance("lock",this.node,{type:this.options.lockType})||console.warn("You try to add 'lock' instance, but it is not available or already started"))},Form.prototype.showFormMessage=formMessages.showFormMessage,Form.prototype.showFieldMessage=formMessages.showFieldMessage,Form.prototype.showFieldsMessages=formMessages.showFieldsMessages,Form.prototype.showMessages=formMessages.showMessages,Form.prototype.removeMessages=formMessages.removeMessages,Form.prototype.removeMessage=formMessages.removeMessage,Form.prototype.processAnswer=function(e){this.options.messagesType&&this.showMessages(e)},Form.prototype.send=function(sendOptions){var that=this;if(this.lock(),sendOptions.beforeSubmitCallback){var fn=eval(sendOptions.beforeSubmitCallback);"function"==typeof fn&&fn.call(sendOptions)}this.sf.ajax.send(sendOptions).then(function(e){return that.events.trigger("success",sendOptions),e},function(e){return that.events.trigger("error",sendOptions),e}).then(function(e){that.lock(!0),that.processAnswer(e),that.events.trigger("always",sendOptions)})},Form.prototype.getFormData=function(){return window.FormData?new FormData(this.options.context):(console.log("Form `"+this.options.context+"` were processed without FormData."),new __WEBPACK_IMPORTED_MODULE_1__formToObject___default.a(this.options.context))},Form.prototype.setOptions=function(e){this.options=Object.assign(this.options,e)},Form.prototype.addEvents=function(){var e=this;this.DOMEvents.add([{DOMNode:this.options.context,eventType:"submit",eventFunction:function(t){e.onSubmit.call(e,t)}}])},Form.prototype.die=function(){this.DOMEvents.removeAll()}},function(e,t,s){"use strict";function o(e,t){return"[object Object]"!==Object.prototype.toString.call(e)&&(e={text:e,type:t}),e.text=e.text||e.message||e,e.type=e.type||t,e}var r={template:'<div class="alert form-msg ${type}"><button class="btn-close">×</button><p class="msg">${text}</p></div>',close:".btn-close",place:"bottom",levels:{success:"success",info:"info",warning:"warning",error:"error"},field:".item-form",fieldTemplate:'<div class="alert form-msg ${type}"><p class="msg">${text}</p></div>',fieldClose:".btn-close",fieldPlace:"bottom",fieldPrefix:""};r.levels.message=r.levels.success,r.levels.debug=r.levels.success,r.levels.info=r.levels.notice=r.levels.info,r.levels.danger=r.levels.critical=r.levels.alert=r.levels.emergency=r.levels.error,e.exports={defaults:r,showMessages:function(e){if(e){var t=!1,s=this;for(var o in this.options.messages.levels)e[o]&&(this.showFormMessage(e[o],this.options.messages.levels[o]),t=!0);if(e.messages&&(this.showFieldsMessages(e.messages,"success"),t=!0),e.errors&&(this.showFieldsMessages(e.errors,"error"),t=!0),e.warnings&&(this.showFieldsMessages(e.warnings,"warning"),t=!0),!t&&e.status>300){var r=e.status?e.status+" ":"";r+=e.statusText?e.statusText:"",r+=e.data&&!e.statusText?e.data:"",r+=0===r.length?e:"",this.showFormMessage(r,"error")}this._messages.forEach(function(e){e.close&&(e.closeHandler=s.removeMessage.bind(s,e),e.close.addEventListener("click",e.closeHandler))})}},removeMessage:function(e,t){e.close&&e.close.removeEventListener("click",e.closeHandler),e.el.parentNode.removeChild(e.el),e.field&&e.field.classList.remove(this.options.messages.fieldPrefix+e.type),t&&(t.preventDefault&&t.preventDefault(),this._messages.splice(this._messages.indexOf(e),1))},removeMessages:function(){var e=this;this._messages&&this._messages.forEach(function(t){e.removeMessage(t,!1)}),e._messages=[]},showFormMessage:function(e,t){var s,r,n=this.options.messages.template,i=new DOMParser;e=o(e,t);for(var a in e){if(!e.hasOwnProperty(a))return;n=n.replace("${"+a+"}",e[a])}s=i.parseFromString(n,"text/html").firstChild.lastChild.firstChild,"bottom"===this.options.messages.place?this.node.appendChild(s):"top"===this.options.messages.place?this.node.insertBefore(s,this.node.firstChild):(r=document.querySelector(this.options.messages.place),r.appendChild(s)),this._messages.push({el:s,close:s.querySelector(this.options.messages.close)})},showFieldMessage:function(e,t,s,r){var n,i=r?e:sf.helpers.domTools.closest(e,this.options.messages.field),a=this.options.messages.fieldTemplate;if(i){var l=new DOMParser;t=o(t,s),i.classList.add(this.options.messages.fieldPrefix+s);for(var c in t){if(!t.hasOwnProperty(c))return;a=a.replace("${"+c+"}",t[c])}n=l.parseFromString(a,"text/html").firstChild.lastChild.firstChild,"bottom"===this.options.messages.fieldPlace?i.appendChild(n):"top"===this.options.messages.fieldPlace?i.insertBefore(n,i.firstChild):(i=i.querySelector(this.options.messages.fieldPlace),i.appendChild(n)),this._messages.push({el:n,close:n.querySelector(this.options.messages.fieldClose),field:i,type:s})}},showFieldsMessages:function(e,t){var s=this;sf.iterateInputs(this.node,e,function(e,o){s.showFieldMessage(e,o,t)}).forEach(function(e){Object.keys(e).forEach(function(o){var r=s.node.querySelector('[data-message-placeholder="'+o+'"]');r&&s.showFieldMessage(r,e[o],t,!0)})})}}},function(e,t){var s=function(e){return!!e&&(this.formRef=e,this.keyRegex=/[^\[\]]+/g,this.$form=null,this.$formElements=[],this.formObj={},!!this.setForm()&&!!this.setFormElements()&&this.setFormObj())};s.prototype.setForm=function(){switch(typeof this.formRef){case"string":this.$form=document.getElementById(this.formRef);break;case"object":this.isDomNode(this.formRef)&&(this.$form=this.formRef)}return this.$form},s.prototype.setFormElements=function(){return this.$formElements=this.$form.querySelectorAll("input, textarea, select"),this.$formElements.length},s.prototype.isDomNode=function(e){return"object"==typeof e&&"nodeType"in e&&1===e.nodeType},s.prototype.forEach=function(e,t){if([].forEach)return[].forEach.call(e,t);var s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(e,e[s])},s.prototype.addChild=function(e,t,s,o){if(1===s.length){if("INPUT"===t.nodeName&&"radio"===t.type)return t.checked?e[s]=o:void 0;if("INPUT"===t.nodeName&&"checkbox"===t.type)return t.checked?(e[s]||(e[s]=[]),e[s].push(o)):void 0;if("SELECT"===t.nodeName&&"select-multiple"===t.type){e[s]=[];var r=t.querySelectorAll("option[selected]");return void(r&&this.forEach(r,function(t){e[s].push(t.value)}))}e[s]=o}return s.length>1?(e[s[0]]||(e[s[0]]={}),this.addChild(e[s[0]],t,s.splice(1,s.length),o)):e},s.prototype.setFormObj=function(){var e,t=0;for(t=0;t<this.$formElements.length;t++)this.$formElements[t].name&&!this.$formElements[t].disabled&&(e=this.$formElements[t].name.match(this.keyRegex),this.addChild(this.formObj,this.$formElements[t],e,this.$formElements[t].value));return this.formObj},e.exports=s},function(e,t,s){"use strict";function o(e,t,s,n){for(var i in t)if(t.hasOwnProperty(i)){var a=n?n+"["+i+"]":i,l=Object.prototype.toString.call(t[i]),c="[name='"+a+"']";switch(l){case"[object Object]":o(e,t[i],s,a);break;case"[object Array]":t[i].forEach(function(t){var o="[name='"+a+"[]'][value='"+t+"']",n=e.querySelectorAll(o);0===n.length&&r.push(o);for(var i=0,l=n.length;i<l;i++)s(n[i],!0)});break;case"[object String]":case"[object Number]":var p=e.querySelectorAll(c);if(0===p.length){var f={};f[a]=t[i],r.push(f)}for(var u=0,m=p.length;u<m;u++)s(p[u],t[i]);break;default:console.error("unknown type -",l," and message",t[i])}}}var r=[],n=function(e,t,s,n){return r=[],o(e,t,s,n),0!==r.length&&console.log("Some element not found in form",r),r};e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,s){e.exports=s(1)}])});
//# sourceMappingURL=sf.form.js.map