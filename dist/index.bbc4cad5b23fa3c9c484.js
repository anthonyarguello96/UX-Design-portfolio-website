(()=>{var e={264:e=>{!function(e,t,n,r,a){if("customElements"in n)a();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(a);var o=n.AWAITING_WEB_COMPONENTS_POLYFILL=l();o.then(a);var i=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?c(i).then((function(){o.isDone=!0,o.exec()})):c(s).then((function(){c(i).then((function(){o.isDone=!0,o.exec()}))}))}function l(){var e=[];return e.isDone=!1,e.exec=function(){e.splice(0).forEach((function(e){e()}))},e.then=function(t){return e.isDone?t():e.push(t),e},e}function c(e){var t=l(),n=r.createElement("script");return n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t.isDone=!0,t.exec())}:n.onload=function(){t.isDone=!0,t.exec()},n.src=e,r.getElementsByTagName("head")[0].appendChild(n),n.then=t.then,n}}(0,0,window,document,(function(){var t;window,t=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var o=(n=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r=n(3);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(4);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(e,t,n){"use strict";n.r(t);var r,a,o,i,s=n(1),l=n.n(s),c=n(2),f=n.n(c),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=(a=(r=Object).getPrototypeOf||function(e){return e.__proto__},o=r.setPrototypeOf||function(e,t){return e.__proto__=t,e},i="object"===("undefined"==typeof Reflect?"undefined":u(Reflect))?Reflect.construct:function(e,t,n){var r,a=[null];return a.push.apply(a,t),r=e.bind.apply(e,a),o(new r,n.prototype)},function(e){var t=a(e);return o(e,o((function(){return i(t,arguments,a(this).constructor)}),t))}),p=window,b={},y=document.createElement("template"),h=function(){return!!p.ShadyCSS};y.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+l.a+"\n"+f.a+'\n</style>\n<div id="icon"></div>';var g=d(function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.$ui=e.attachShadow({mode:"open"}),e.$ui.appendChild(e.ownerDocument.importNode(y.content,!0)),h()&&p.ShadyCSS.styleElement(e),e._state={$iconHolder:e.$ui.getElementById("icon"),type:e.getAttribute("type")},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,HTMLElement),m(t,null,[{key:"getIconSvg",value:function(e,t){var n=this.cdnUrl+"/regular/bx-"+e+".svg";return"solid"===t?n=this.cdnUrl+"/solid/bxs-"+e+".svg":"logo"===t&&(n=this.cdnUrl+"/logos/bxl-"+e+".svg"),n&&b[n]||(b[n]=new Promise((function(e,t){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?t(new Error(this.status+" "+this.responseText)):e(this.responseText)})),r.onerror=t,r.onabort=t,r.open("GET",n),r.send()}))),b[n]}},{key:"define",value:function(e){e=e||this.tagName,h()&&p.ShadyCSS.prepareTemplate(y,e),customElements.define(e,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.0.7/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),m(t,[{key:"attributeChangedCallback",value:function(e,t,n){var r=this._state.$iconHolder;switch(e){case"type":!function(e,t,n){var r=e._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==r.currentName&&e.constructor.getIconSvg(r.currentName,r.type).then((function(e){r.type===n&&(r.$iconHolder.innerHTML=e)})).catch((function(e){console.error("Failed to load icon: "+r.currentName+"\n"+e)}))}(this,0,n);break;case"name":!function(e,t,n){var r=e._state;r.currentName=n,r.$iconHolder.textContent="",n&&void 0!==r.type&&e.constructor.getIconSvg(n,r.type).then((function(e){r.currentName===n&&(r.$iconHolder.innerHTML=e)})).catch((function(e){console.error("Failed to load icon: "+n+"\n"+e)}))}(this,0,n);break;case"color":r.style.fill=n||"";break;case"size":!function(e,t,n){var r=e._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=n.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,n);break;case"rotate":t&&r.classList.remove("bx-rotate-"+t),n&&r.classList.add("bx-rotate-"+n);break;case"flip":t&&r.classList.remove("bx-flip-"+t),n&&r.classList.add("bx-flip-"+n);break;case"animation":t&&r.classList.remove("bx-"+t),n&&r.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){h()&&p.ShadyCSS.styleElement(this)}}]),t}());n.d(t,"BoxIconElement",(function(){return g})),t.default=g,g.define()}])},e.exports=t()}))}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{"use strict";const e=()=>{document.getElementById("nav-menu").classList.remove("show")};n(264);document.getElementsByClassName("skills__img");((e,t)=>{const n=document.getElementById(e),r=document.getElementById(t);n&&r&&(console.log("I'm working"),n.addEventListener("click",(()=>{r.classList.toggle("show")})))})("nav-toggle","nav-menu");document.querySelectorAll(".nav__link").forEach((t=>t.addEventListener("click",e)));const t=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){const e=window.pageYOffset;t.forEach((t=>{const n=t.offsetHeight,r=t.offsetTop-50;let a=t.getAttribute("id");e>r&&e<=r+n?document.querySelector(".nav__menu a[href*="+a+"]").classList.add("active"):document.querySelector(".nav__menu a[href*="+a+"]").classList.remove("active")}))}));const r=ScrollReveal({origin:"top",distance:"80px",duration:2e3,reset:!0});r.reveal(".home__title",{}),r.reveal(".home__scroll",{delay:200}),r.reveal(".home__img",{origin:"right",delay:400}),r.reveal(".about__img",{delay:500}),r.reveal(".about__subtitle",{delay:300}),r.reveal(".about__profession",{delay:400}),r.reveal(".about__text",{delay:500}),r.reveal(".about__question",{delay:600}),r.reveal(".about__social-icon",{delay:700,interval:200}),r.reveal(".subtitle",{}),r.reveal(".skills__name",{distance:"40px",delay:50,interval:100}),r.reveal(".skills__img",{delay:400}),r.reveal(".skills__main-title",{delay:500}),r.reveal(".skills__text",{delay:600}),r.reveal(".education__box",{delay:700,interval:200}),r.reveal(".portfolio__img",{interval:200}),r.reveal(".contact__subtitle",{}),r.reveal("contact__subtitle",{interval:200}),r.reveal(".contact__text",{interval:200}),r.reveal(".contact__input",{delay:400}),r.reveal(".contact__button",{delay:600})})()})();