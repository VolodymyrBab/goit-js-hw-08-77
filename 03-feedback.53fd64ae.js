var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function v(e,t,n){var i,o,r,a,f,u,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function w(e){return l=e,f=setTimeout(T,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=r}function T(){var e=d();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return v?m(n,r-(e-l)):n}(e))}function h(e){return f=void 0,b&&i?y(e):(i=o=void 0,a)}function O(){var e=d(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return w(u);if(v)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},O.flush=function(){return void 0===f?a:h(d())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector("form.feedback-form"),y=b.elements.message,w=b.elements.email;!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(y.value=t.message,w.value=t.email)}(),b.addEventListener("submit",(function(e){e.preventDefault();const t={email:w.value,message:y.value};""!==w.value.trim()&&""!==y.value.trim()?(console.log(t),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")):window.alert("Усі поля мають бути заповнені!")})),b.addEventListener("input",t((function(e){const t=y.value,n=w.value;localStorage.setItem("feedback-form-state",JSON.stringify({message:t,email:n}))}),500));
//# sourceMappingURL=03-feedback.53fd64ae.js.map