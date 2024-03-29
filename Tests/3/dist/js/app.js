/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst token = `someToken`;\r\nconst urlSendData = `https://someUrl${token}`;\r\nconst form = document.querySelector('form');\r\n\r\nconst customInputsControls = document.querySelector('#custom-inputs-control');\r\nconst titleField = document.querySelector('#title');\r\nconst nameField = document.querySelector('#name');\r\nconst countField = document.querySelector('#count');\r\nconst packagingField = document.querySelector('#packaging');\r\nconst clientField = document.querySelector('#client');\r\nconst commentField = document.querySelector('#comment');\r\n\r\nconst sendBtn = document.querySelector('#sendData');\r\n\r\nconst btnPlus = document.querySelector('#plus');\r\nconst btnMinus = document.querySelector('#minus');\r\n\r\nasync function sendData(data) {\r\n\tfor (let key of data.keys()) {\r\n\t\t// eslint-disable-next-line no-console\r\n\t\tconsole.log(`${key}: ${data.get(key)}`);\r\n\t}\r\n\ttry {\r\n\t\tlet response = await fetch(urlSendData, {\r\n\t\t\tmethod: 'POST',\r\n\t\t\tbody: data,\r\n\t\t});\r\n\r\n\t\tlet result = await response.json();\r\n\r\n\t\treturn result;\r\n\t} catch (error) {\r\n\t\tconsole.error(error);\r\n\t}\r\n\r\n\treturn false;\r\n}\r\n\r\nlet formData = new FormData(form);\r\nform.addEventListener('change', (event) => {\r\n\tlet title = titleField.value;\r\n\r\n\tlet category = document.querySelector('input[name=\"category-radio\"]:checked')\r\n\t\t? document.querySelector('input[name=\"category-radio\"]:checked').value\r\n\t\t: false;\r\n\r\n\tlet type = document.querySelector('input[name=\"type-radio\"]:checked')\r\n\t\t? document.querySelector('input[name=\"type-radio\"]:checked').value\r\n\t\t: false;\r\n\r\n\tlet storage = document.getElementById('storage').value;\r\n\tlet composition = document.getElementById('composition').value;\r\n\r\n\tlet name = nameField.value ? nameField.value : false;\r\n\tlet count = countField.value ? countField.value : false;\r\n\tlet packaging = packagingField.value ? packagingField.value : false;\r\n\tlet client = clientField.value ? clientField.value : false;\r\n\tlet comment = commentField.value ? commentField.value : false;\r\n\r\n\tformData.set('title', `${title}`);\r\n\tformData.set(`category`, `${category}`);\r\n\tformData.set(`type`, `${type}`);\r\n\tformData.set(`storage`, `${storage}`);\r\n\tformData.set(`composition`, `${composition}`);\r\n\tformData.set(`name`, `${name}`);\r\n\tformData.set(`count`, `${count}`);\r\n\tformData.set(`packaging`, `${packaging}`);\r\n\tformData.set(`client`, `${client}`);\r\n\tformData.set(`comment`, `${comment}`);\r\n\r\n\tlet custominputs = document.querySelectorAll('.custom-input');\r\n\tif (custominputs.length > 0) {\r\n\t\tcustominputs.forEach((input) => {\r\n\t\t\tlet customName = input.querySelector('input').value;\r\n\t\t\tlet value = input.querySelector('input:last-child').value;\r\n\r\n\t\t\tformData.set(`${customName}`, `${value}`);\r\n\t\t});\r\n\t}\r\n\r\n\tif (event.target === document.querySelector('#files')) {\r\n\t\tlet files = event.target.files;\r\n\t\tfor (let i = 0; i < files.length; i++) {\r\n\t\t\tformData.set(`file_${i}`, files[i]);\r\n\t\t}\r\n\t}\r\n\r\n\tif (title && category && type) {\r\n\t\tsendBtn.removeAttribute('disabled');\r\n\t}\r\n});\r\n\r\nbtnPlus.addEventListener('click', () => {\r\n\tlet htmlElem = document.createElement('div');\r\n\thtmlElem.className = 'input-flex custom-input col-md-12 col-lg-6 p-0 mt-1';\r\n\r\n\tlet inputLabel = document.createElement('input');\r\n\tinputLabel.type = 'text';\r\n\tinputLabel.className = 'form-control mb-1 customInputName';\r\n\tinputLabel.placeholder = 'Название поля';\r\n\r\n\tlet input = document.createElement('input');\r\n\tinput.type = 'text';\r\n\tinput.className = 'form-control customInputValue';\r\n\tinput.placeholder = 'Значение поля';\r\n\r\n\thtmlElem.append(inputLabel);\r\n\thtmlElem.append(input);\r\n\r\n\tcustomInputsControls.before(htmlElem);\r\n});\r\n\r\nbtnMinus.addEventListener('click', () => {\r\n\tlet inputsNode = document.querySelectorAll('.input-flex');\r\n\tlet inputs = [...inputsNode];\r\n\tlet lastElem = inputs[inputs.length - 1];\r\n\tlet lastElemNameValue = lastElem.querySelector('input').value;\r\n\r\n\tformData.delete(`${lastElemNameValue}`);\r\n\r\n\tlastElem.remove();\r\n});\r\n\r\nsendBtn.addEventListener('click', () => sendData(formData));\r\n\n\n//# sourceURL=webpack://cooltest/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;