var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,s=Math.max,p=Math.min,d=function(){return c.Date.now()};function v(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=v(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=i.test(t);return f||r.test(t)?u(t.slice(2),f?2:8):o.test(t)?NaN:+t}n=function(t,n,e){var o,i,r,u,f,a,c=0,l=!1,y=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=o,r=i;return o=i=void 0,c=n,u=t.apply(r,e)}function h(t){return c=t,f=setTimeout($,n),l?m(t):u}function j(t){var e=t-a;return void 0===a||e>=n||e<0||y&&t-c>=r}function $(){var t=d();if(j(t))return T(t);f=setTimeout($,function(t){var e=n-(t-a);return y?p(e,r-(t-c)):e}(t))}function T(t){return f=void 0,b&&o?m(t):(o=i=void 0,u)}function w(){var t=d(),e=j(t);if(o=arguments,i=this,a=t,e){if(void 0===f)return h(a);if(y)return f=setTimeout($,n),m(a)}return void 0===f&&(f=setTimeout($,n)),u}return n=g(n)||0,v(e)&&(l=!!e.leading,r=(y="maxWait"in e)?s(g(e.maxWait)||0,n):r,b="trailing"in e?!!e.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},w.flush=function(){return void 0===f?u:T(d())},w};document.querySelector("#search-box").addEventListener("input",n((function(t){const n=t.target.value.trim();console.log(n);fetch(`https://restcountries.com/v3.1/name/${n}`).then((t=>t.json())).then((t=>{console.log(t);const n=t[0],e=Object.values(t[0].languages).join(", ");y.innerHTML=`\n\t  <p>name official: ${n.name.official}</p>\n\t  <p>population: ${n.population}</p>\n\t  <p>capital: ${n.capital}</p>\n\t  <img width=320 src="${n.flags.svg}" alt ="${n.flags.alt}"/>\n\t  <p>languages: ${e}</p>\n\t\t`})).catch((t=>console.log(t)))}),300));const y=document.querySelector(".country-info");
//# sourceMappingURL=index.78bb9da4.js.map
