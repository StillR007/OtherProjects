/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("var e,t;e=this,t=function(){\"use strict\";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(e){return n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e},n(e)}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if(\"undefined\"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e[\"@@iterator\"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function o(e,t){if(e){if(\"string\"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return\"Object\"===n&&e.constructor&&(n=e.constructor.name),\"Map\"===n||\"Set\"===n?Array.from(e):\"Arguments\"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){return\"string\"==typeof e?document.querySelector(e):e()},a=function(e,t){var n=\"string\"==typeof e?document.createElement(e):e;for(var r in t){var i=t[r];if(\"inside\"===r)i.append(n);else if(\"dest\"===r)u(i[0]).insertAdjacentElement(i[1],n);else if(\"around\"===r){var o=i;o.parentNode.insertBefore(n,o),n.append(o),null!=o.getAttribute(\"autofocus\")&&o.focus()}else r in n?n[r]=i:n.setAttribute(r,i)}return n},c=function(e,t){return e=String(e).toLowerCase(),t?e.normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g,\"\").normalize(\"NFC\"):e},l=function(e,n){return a(\"mark\",t({innerHTML:e},\"string\"==typeof n&&{class:n})).outerHTML},f=function(e,t){t.input.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:t.feedback,cancelable:!0}))},p=function(e,t,n){var r=n||{},i=r.mode,o=r.diacritics,s=r.highlight,u=c(t,o);if(t=String(t),e=c(e,o),\"loose\"===i){var a=(e=e.replace(/ /g,\"\")).length,f=0,p=Array.from(t).map((function(t,n){return f<a&&u[n]===e[f]&&(t=s?l(t,s):t,f++),t})).join(\"\");if(f===a)return p}else{var d=u.indexOf(e);if(~d)return e=t.substring(d,d+e.length),d=s?t.replace(e,l(e,s)):t}},d=function(e,t){return new Promise((function(n,r){var i;return(i=e.data).cache&&i.store?n():new Promise((function(e,n){return\"function\"==typeof i.src?i.src(t).then(e,n):e(i.src)})).then((function(t){try{return e.feedback=i.store=t,f(\"response\",e),n()}catch(e){return r(e)}}),r)}))},h=function(e,t){var n=t.data,r=t.searchEngine,i=[];n.store.forEach((function(s,u){var a=function(n){var o=n?s[n]:s,u=\"function\"==typeof r?r(e,o):p(e,o,{mode:r,diacritics:t.diacritics,highlight:t.resultItem.highlight});if(u){var a={match:u,value:s};n&&(a.key=n),i.push(a)}};if(n.keys){var c,l=function(e,t){var n=\"undefined\"!=typeof Symbol&&e[Symbol.iterator]||e[\"@@iterator\"];if(!n){if(Array.isArray(e)||(n=o(e))||t&&e&&\"number\"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}var s,u=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,s=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw s}}}}(n.keys);try{for(l.s();!(c=l.n()).done;)a(c.value)}catch(e){l.e(e)}finally{l.f()}}else a()})),n.filter&&(i=n.filter(i));var s=i.slice(0,t.resultsList.maxResults);t.feedback={query:e,matches:i,results:s},f(\"results\",t)},m=\"aria-expanded\",b=\"aria-activedescendant\",y=\"aria-selected\",v=function(e,n){e.feedback.selection=t({index:n},e.feedback.results[n])},g=function(e){e.isOpen||((e.wrapper||e.input).setAttribute(m,!0),e.list.removeAttribute(\"hidden\"),e.isOpen=!0,f(\"open\",e))},w=function(e){e.isOpen&&((e.wrapper||e.input).setAttribute(m,!1),e.input.setAttribute(b,\"\"),e.list.setAttribute(\"hidden\",\"\"),e.isOpen=!1,f(\"close\",e))},O=function(e,t){var n=t.resultItem,r=t.list.getElementsByTagName(n.tag),o=!!n.selected&&n.selected.split(\" \");if(t.isOpen&&r.length){var s,u,a=t.cursor;e>=r.length&&(e=0),e<0&&(e=r.length-1),t.cursor=e,a>-1&&(r[a].removeAttribute(y),o&&(u=r[a].classList).remove.apply(u,i(o))),r[e].setAttribute(y,!0),o&&(s=r[e].classList).add.apply(s,i(o)),t.input.setAttribute(b,r[t.cursor].id),t.list.scrollTop=r[e].offsetTop-t.list.clientHeight+r[e].clientHeight+5,t.feedback.cursor=t.cursor,v(t,e),f(\"navigate\",t)}},A=function(e){O(e.cursor+1,e)},k=function(e){O(e.cursor-1,e)},L=function(e,t,n){(n=n>=0?n:e.cursor)<0||(e.feedback.event=t,v(e,n),f(\"selection\",e),w(e))};function j(e,n){var r=this;return new Promise((function(i,o){var s,u;return s=n||((u=e.input)instanceof HTMLInputElement||u instanceof HTMLTextAreaElement?u.value:u.innerHTML),function(e,t,n){return t?t(e):e.length>=n}(s=e.query?e.query(s):s,e.trigger,e.threshold)?d(e,s).then((function(n){try{return e.feedback instanceof Error?i():(h(s,e),e.resultsList&&function(e){var n=e.resultsList,r=e.list,i=e.resultItem,o=e.feedback,s=o.matches,u=o.results;if(e.cursor=-1,r.innerHTML=\"\",s.length||n.noResults){var c=new DocumentFragment;u.forEach((function(e,n){var r=a(i.tag,t({id:\"\".concat(i.id,\"_\").concat(n),role:\"option\",innerHTML:e.match,inside:c},i.class&&{class:i.class}));i.element&&i.element(r,e)})),r.append(c),n.element&&n.element(r,o),g(e)}else w(e)}(e),c.call(r))}catch(e){return o(e)}}),o):(w(e),c.call(r));function c(){return i()}}))}var S=function(e,t){for(var n in e)for(var r in e[n])t(n,r)},T=function(e){var n,r,i,o=e.events,s=(n=function(){return j(e)},r=e.debounce,function(){clearTimeout(i),i=setTimeout((function(){return n()}),r)}),u=e.events=t({input:t({},o&&o.input)},e.resultsList&&{list:o?t({},o.list):{}}),a={input:{input:function(){s()},keydown:function(t){!function(e,t){switch(e.keyCode){case 40:case 38:e.preventDefault(),40===e.keyCode?A(t):k(t);break;case 13:t.submit||e.preventDefault(),t.cursor>=0&&L(t,e);break;case 9:t.resultsList.tabSelect&&t.cursor>=0&&L(t,e);break;case 27:t.input.value=\"\",w(t)}}(t,e)},blur:function(){w(e)}},list:{mousedown:function(e){e.preventDefault()},click:function(t){!function(e,t){var n=t.resultItem.tag.toUpperCase(),r=Array.from(t.list.querySelectorAll(n)),i=e.target.closest(n);i&&i.nodeName===n&&L(t,e,r.indexOf(i))}(t,e)}}};S(a,(function(t,n){(e.resultsList||\"input\"===n)&&(u[t][n]||(u[t][n]=a[t][n]))})),S(u,(function(t,n){e[t].addEventListener(n,u[t][n])}))};function E(e){var n=this;return new Promise((function(r,i){var o,s,u;if(o=e.placeHolder,u={role:\"combobox\",\"aria-owns\":(s=e.resultsList).id,\"aria-haspopup\":!0,\"aria-expanded\":!1},a(e.input,t(t({\"aria-controls\":s.id,\"aria-autocomplete\":\"both\"},o&&{placeholder:o}),!e.wrapper&&t({},u))),e.wrapper&&(e.wrapper=a(\"div\",t({around:e.input,class:e.name+\"_wrapper\"},u))),s&&(e.list=a(s.tag,t({dest:[s.destination,s.position],id:s.id,role:\"listbox\",hidden:\"hidden\"},s.class&&{class:s.class}))),T(e),e.data.cache)return d(e).then((function(e){try{return c.call(n)}catch(e){return i(e)}}),i);function c(){return f(\"init\",e),r()}return c.call(n)}))}function x(e){var t=e.prototype;t.init=function(){E(this)},t.start=function(e){j(this,e)},t.unInit=function(){if(this.wrapper){var e=this.wrapper.parentNode;e.insertBefore(this.input,this.wrapper),e.removeChild(this.wrapper)}var t;S((t=this).events,(function(e,n){t[e].removeEventListener(n,t.events[e][n])}))},t.open=function(){g(this)},t.close=function(){w(this)},t.goTo=function(e){O(e,this)},t.next=function(){A(this)},t.previous=function(){k(this)},t.select=function(e){L(this,null,e)},t.search=function(e,t,n){return p(e,t,n)}}return function e(t){this.options=t,this.id=e.instances=(e.instances||0)+1,this.name=\"autoComplete\",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:\"afterend\",tag:\"ul\",maxResults:5},this.resultItem={tag:\"li\"},function(e){var t=e.name,r=e.options,i=e.resultsList,o=e.resultItem;for(var s in r)if(\"object\"===n(r[s]))for(var a in e[s]||(e[s]={}),r[s])e[s][a]=r[s][a];else e[s]=r[s];e.selector=e.selector||\"#\"+t,i.destination=i.destination||e.selector,i.id=i.id||t+\"_list_\"+e.id,o.id=o.id||t+\"_result\",e.input=u(e.selector)}(this),x.call(this,e),E(this)}}, true?module.exports=t():0;\n\n\n//# sourceURL=webpack://cooltest/./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ \"./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js\");\n/* harmony import */ var _modules_getCityList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getCityList.js */ \"./src/js/modules/getCityList.js\");\n/* harmony import */ var _modules_checkValidFormFields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/checkValidFormFields.js */ \"./src/js/modules/checkValidFormFields.js\");\n\r\n\r\n\r\n\r\n\r\n// eslint-disable-next-line func-names\r\n(async function () {\r\n\tconst getCitiesObject = await (0,_modules_getCityList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\tconst citiesObj = [...getCitiesObject];\r\n\tlet cities = [];\r\n\r\n\tcitiesObj.forEach((city) => {\r\n\t\tcities.push(city);\r\n\t});\r\n\r\n\tconst cityPickup = new _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__({\r\n\t\tselector: '#city_pickup_code',\r\n\t\tplaceHolder: 'Откуда',\r\n\t\tdata: {\r\n\t\t\tsrc: cities,\r\n\t\t\tcache: true,\r\n\t\t\tkeys: ['name'],\r\n\t\t},\r\n\t\tresultItem: {\r\n\t\t\thighlight: true,\r\n\t\t},\r\n\t\tevents: {\r\n\t\t\tinput: {\r\n\t\t\t\tselection: (event) => {\r\n\t\t\t\t\tconst name = event.detail.selection.value.name;\r\n\t\t\t\t\tconst type = event.detail.selection.value.type;\r\n\t\t\t\t\tcityPickup.input.value = `${type} ${name}`;\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t},\r\n\t\twrapper: false,\r\n\t});\r\n\tconst cityDelivery = new _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__({\r\n\t\tselector: '#city_delivery_code',\r\n\t\tplaceHolder: 'Куда',\r\n\t\tdata: {\r\n\t\t\tsrc: cities,\r\n\t\t\tcache: true,\r\n\t\t\tkeys: ['name'],\r\n\t\t},\r\n\t\tresultItem: {\r\n\t\t\thighlight: true,\r\n\t\t},\r\n\t\tevents: {\r\n\t\t\tinput: {\r\n\t\t\t\tselection: (event) => {\r\n\t\t\t\t\tconst name = event.detail.selection.value.name;\r\n\t\t\t\t\tconst type = event.detail.selection.value.type;\r\n\t\t\t\t\tcityDelivery.input.value = `${type} ${name}`;\r\n\t\t\t\t},\r\n\t\t\t},\r\n\t\t},\r\n\t\twrapper: false,\r\n\t});\r\n})();\r\n\r\nlet cityPickupCode = '';\r\nlet cityDeliveryCode = '';\r\n\r\nconst selects = document.querySelector('.selects');\r\nconst cityPickupField = document.querySelector('#city_pickup_code');\r\nconst cityDeliveryField = document.querySelector('#city_delivery_code');\r\n\r\ncityPickupField.addEventListener('init', () => {\r\n\tselects.classList.remove('loading');\r\n});\r\n\r\ncityPickupField.addEventListener('selection', (event) => {\r\n\tcityPickupCode = event.detail.selection.value.code;\r\n});\r\ncityDeliveryField.addEventListener('selection', (event) => {\r\n\tcityDeliveryCode = event.detail.selection.value.code;\r\n});\r\n\r\ndocument.querySelector('form').addEventListener('change', () => {\r\n\t(0,_modules_checkValidFormFields_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n\t\tcityPickupCode,\r\n\t\tcityDeliveryCode,\r\n\t);\r\n});\r\n\n\n//# sourceURL=webpack://cooltest/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/checkValidFormFields.js":
/*!************************************************!*\
  !*** ./src/js/modules/checkValidFormFields.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ checkValidFormFields; }\n/* harmony export */ });\n/* harmony import */ var _sendData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendData.js */ \"./src/js/modules/sendData.js\");\n\r\n\r\nconst submitButton = document.querySelector('#submit');\r\nconst warningText = document.querySelector('#warningText');\r\nconst weightField = document.querySelector('#weight');\r\nconst volumeField = document.querySelector('#volume');\r\nconst lengthField = document.querySelector('#length');\r\nconst heightField = document.querySelector('#height');\r\nconst widthField = document.querySelector('#width');\r\n\r\nconst pickUpField = document.querySelector('#pick_up');\r\nconst deliveryField = document.querySelector('#delivery');\r\n\r\nconst showErrorMassage = (errorText) => {\r\n\tsubmitButton.setAttribute('disabled', 'disabled');\r\n\twarningText.innerText = `${errorText}`;\r\n\r\n\treturn false;\r\n};\r\n\r\nfunction checkValidFormFields(\r\n\tCityPickupCode,\r\n\tcityDeliveryCode,\r\n) {\r\n\tif (!CityPickupCode) {\r\n\t\tshowErrorMassage('Не указан город отправки');\r\n\r\n\t\treturn false;\r\n\t}\r\n\r\n\tif (!cityDeliveryCode) {\r\n\t\tshowErrorMassage('Не указан город получения');\r\n\r\n\t\treturn false;\r\n\t}\r\n\r\n\tif (!weightField.value) {\r\n\t\tshowErrorMassage('Не указан вес посылки');\r\n\r\n\t\treturn false;\r\n\t}\r\n\r\n\tif (!volumeField.value && !(lengthField.value && heightField.value && widthField.value)) {\r\n\t\tshowErrorMassage('Укажите объем или длину, высоту и ширину');\r\n\r\n\t\treturn false;\r\n\t}\r\n\r\n\tlet notEmptyValues = [lengthField.value, heightField.value, widthField.value].filter((values) => values.length > 0);\r\n\tif (notEmptyValues.length > 1) {\r\n\t\tlet sumOfDimensions = notEmptyValues.reduce((acc, rec) => acc * rec);\r\n\r\n\t\tif (volumeField.value && volumeField.value < sumOfDimensions) {\r\n\t\t\tshowErrorMassage('Объём меньше указанных габаритов');\r\n\r\n\t\t\treturn false;\r\n\t\t}\r\n\t}\r\n\r\n\tsubmitButton.removeAttribute('disabled');\r\n\tsubmitButton.onclick = () => {\r\n\t\t(0,_sendData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n\t\t\tCityPickupCode,\r\n\t\t\tcityDeliveryCode,\r\n\t\t\tweightField.value,\r\n\t\t\tvolumeField.value,\r\n\t\t\tlengthField.value,\r\n\t\t\theightField.value,\r\n\t\t\twidthField.value,\r\n\t\t\tpickUpField.checked ? 'T001' : false,\r\n\t\t\tdeliveryField.checked ? 'S026' : false,\r\n\t\t);\r\n\t};\r\n\r\n\treturn true;\r\n}\r\n\n\n//# sourceURL=webpack://cooltest/./src/js/modules/checkValidFormFields.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"someFunc\": function() { return /* binding */ someFunc; }\n/* harmony export */ });\nfunction someFunc() {\r\n\tconsole.warn('i am module');\r\n}\r\n\n\n//# sourceURL=webpack://cooltest/./src/js/modules/functions.js?");

/***/ }),

/***/ "./src/js/modules/getCityList.js":
/*!***************************************!*\
  !*** ./src/js/modules/getCityList.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getCityFetch; }\n/* harmony export */ });\nconst token = `3LNFozYVEsWJi93DOrtB7ekeecF3jMwI`;\r\nconst urlGetCities = `https://capi.tk-kit.com/1.0/tdd/city/get-list?token=${token}`;\r\n\r\n// eslint-disable-next-line consistent-return\r\nasync function getCityFetch() {\r\n\ttry {\r\n\t\tconst response = await fetch(urlGetCities);\r\n\t\tconst result = await response.json();\r\n\r\n\t\treturn result;\r\n\t} catch (error) {\r\n\t\tconsole.error(error);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://cooltest/./src/js/modules/getCityList.js?");

/***/ }),

/***/ "./src/js/modules/sendData.js":
/*!************************************!*\
  !*** ./src/js/modules/sendData.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ sendData; }\n/* harmony export */ });\n/* eslint-disable object-shorthand */\r\nconst token = `3LNFozYVEsWJi93DOrtB7ekeecF3jMwI`;\r\nconst urlSendData = `https://capi.tk-kit.com/1.0/order/calculate?token=${token}`;\r\n// const urlSendData = `https://tk-kit.com/developers/api-doc/1.0/order/calculate?token=${token}`;\r\n\r\n// eslint-disable-next-line consistent-return\r\nasync function sendData(\r\n\tCityPickupCode,\r\n\tcityDeliveryCode, weight,\r\n\tvolume,\r\n\tlength,\r\n\theight,\r\n\twidth,\r\n\tpickUp = false,\r\n\tdelivery = false,\r\n) {\r\n\tlet data = {\r\n\t\tvalidate: {\r\n\t\t\tcity_delivery_code: `${cityDeliveryCode}`,\r\n\t\t\tcity_pickup_code: `${CityPickupCode}`,\r\n\t\t\tdeclared_price: '100',\r\n\t\t\tcurrency_code: [\r\n\t\t\t\t'KZT',\r\n\t\t\t\t'RUB',\r\n\t\t\t],\r\n\t\t\tservice: [\r\n\t\t\t\tpickUp,\r\n\t\t\t\tdelivery,\r\n\t\t\t],\r\n\t\t\tplaces: [\r\n\t\t\t\t{\r\n\t\t\t\t\tcount_place: 1,\r\n\t\t\t\t\theight: height,\r\n\t\t\t\t\twidth: width,\r\n\t\t\t\t\tlength: length,\r\n\t\t\t\t\tweight: weight,\r\n\t\t\t\t\tvolume: volume,\r\n\t\t\t\t},\r\n\t\t\t],\r\n\t\t\tinsurance: '1',\r\n\t\t\tinsurance_agent_code: '8000152423',\r\n\t\t},\r\n\t};\r\n\ttry {\r\n\t\tlet response = await fetch(urlSendData, {\r\n\t\t\tmethod: 'POST',\r\n\t\t\tbody: JSON.stringify(data),\r\n\t\t});\r\n\r\n\t\t// eslint-disable-next-line no-console\r\n\t\tconsole.log('response data: ', data);\r\n\t\tlet result = await response.json();\r\n\r\n\t\treturn result;\r\n\t} catch (error) {\r\n\t\tconsole.error(error);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://cooltest/./src/js/modules/sendData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	__webpack_require__("./src/js/modules/checkValidFormFields.js");
/******/ 	__webpack_require__("./src/js/modules/functions.js");
/******/ 	__webpack_require__("./src/js/modules/getCityList.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/sendData.js");
/******/ 	
/******/ })()
;