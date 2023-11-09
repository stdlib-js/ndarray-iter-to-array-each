"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=l(function(g,o){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),n=require('@stdlib/symbol-iterator/dist'),q=require('@stdlib/ndarray-to-array/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function i(e){var r,u;if(!m(e))throw new TypeError(y('1jz46',e));return r={},a(r,"next",s),a(r,"return",c),n&&d(e[n])&&a(r,n,f),r;function s(){var t;return u?{done:!0}:(t=e.next(),t.done?(u=!0,t):{value:q(t.value),done:!1})}function c(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return i(e[n]())}}o.exports=i
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
