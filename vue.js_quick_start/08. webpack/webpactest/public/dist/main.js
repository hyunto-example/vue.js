(function(e){var t={};function r(n){if(t[n]){return t[n].exports}var u=t[n]={i:n,l:false,exports:{}};e[n].call(u.exports,u,u.exports,r);u.l=true;return u.exports}r.m=e;r.c=t;r.d=function(e,t,n){if(!r.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};r.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};r.t=function(e,t){if(t&1)e=r(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);r.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n};r.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};r.d(t,"a",t);return t};r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};r.p="/dist";return r(r.s=0)})([function(e,t,r){"use strict";var n=r(1);var u=o(n);function o(e){return e&&e.__esModule?e:{default:e}}var i=5;var f=5;var l="<h2>"+i+" + "+f+" = "+u.default.add(i,f)+"</h2>";document.getElementById("app").innerHTML=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n={add:function e(t,r){return t+r},multiply:function e(t,r){return t*r}};t.default=n}]);