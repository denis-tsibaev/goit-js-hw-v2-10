!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var e={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,s=l||f||Function("return this")(),p=Object.prototype.toString,d=Math.max,v=Math.min,y=function(){return s.Date.now()};function g(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var l=a.test(t);return l||c.test(t)?u(t.slice(2),l?2:8):r.test(t)?NaN:+t}e=function(t,n,e){var o,i,r,a,c,u,l=0,f=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(n){var e=o,r=i;return o=i=void 0,l=n,a=t.apply(r,e)}function h(t){return l=t,c=setTimeout(T,n),f?b(t):a}function j(t){var e=t-u;return void 0===u||e>=n||e<0||s&&t-l>=r}function T(){var t=y();if(j(t))return w(t);c=setTimeout(T,function(t){var e=n-(t-u);return s?v(e,r-(t-l)):e}(t))}function w(t){return c=void 0,p&&o?b(t):(o=i=void 0,a)}function M(){var t=y(),e=j(t);if(o=arguments,i=this,u=t,e){if(void 0===c)return h(u);if(s)return c=setTimeout(T,n),b(u)}return void 0===c&&(c=setTimeout(T,n)),a}return n=m(n)||0,g(e)&&(f=!!e.leading,r=(s="maxWait"in e)?d(m(e.maxWait)||0,n):r,p="trailing"in e?!!e.trailing:p),M.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=i=c=void 0},M.flush=function(){return void 0===c?a:w(y())},M};document.querySelector("input#search-box").addEventListener("input",e((function(t){h.innerHTML="",b.innerHTML="";var n=t.target.value.trim();console.log(n);var e="https://restcountries.com/v3.1/name/".concat(n);fetch(e).then((function(t){return t.json()})).then((function(t){if(404!==t.status)if(t.length>10)alert("Слишком много вариантов. Делайте запрос точнее");else{console.log(t);var n=!0,e=!1,o=void 0;try{for(var i,r=t[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var a=i.value;console.log(a),h.insertAdjacentHTML("beforeend",'\n\t\t <li class= "item-list">\n\t\t \t<img width=50 src="'.concat(a.flags.svg,'" alt ="').concat(a.flags.alt,'"/>\n\t\t\t<p class="country-name">').concat(a.name.official,"</p>\n\t\t </li> \n\t\t  "))}}catch(t){e=!0,o=t}finally{try{n||null==r.return||r.return()}finally{if(e)throw o}}if(1===t.length){var c=t[0],u=Object.values(t[0].languages).join(", ");h.innerHTML="",b.innerHTML='\n\t\t\t<img width=200 src="'.concat(c.flags.svg,'" alt ="').concat(c.flags.alt,'"/> \n\t\t\t<p class="title-name">').concat(c.name.official,'</p>\n\t\t\t<p><span class="title-span">capital</span>: ').concat(c.capital,'</p>\n\t\t\t<p><span class="title-span">population:</span> ').concat(c.population,'</p>\n\t\t\t<p><span class="title-span">languages:</span> ').concat(u,"</p>\n\t\t\t")}}else alert("Некорректный запрос")})).catch((function(t){console.log(t.message)}))}),500));var b=document.querySelector(".country-info"),h=document.querySelector(".country-list")}();
//# sourceMappingURL=index.7b8df509.js.map
