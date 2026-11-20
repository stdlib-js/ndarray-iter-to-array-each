"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var v=l(function(g,o){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),q=require('@stdlib/ndarray-to-array/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist');function i(e){var r,n;if(!m(e))throw new TypeError(y('1jz46',e));return r={},a(r,"next",s),a(r,"return",c),u&&d(e[u])&&a(r,u,f),r;function s(){var t;return n?{done:!0}:(t=e.next(),t.done?(n=!0,t):{value:q(t.value),done:!1})}function c(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return i(e[u]())}}o.exports=i
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
