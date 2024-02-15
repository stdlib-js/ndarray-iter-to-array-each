// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(d){var m,l;if(!r(d))throw new TypeError(i("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",d));return t(m={},"next",(function(){var t;if(l)return{done:!0};if((t=d.next()).done)return l=!0,t;return{value:s(t.value),done:!1}})),t(m,"return",(function(t){if(l=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),n&&e(d[n])&&t(m,n,(function(){return o(d[n]())})),m}export{o as default};
//# sourceMappingURL=index.mjs.map
