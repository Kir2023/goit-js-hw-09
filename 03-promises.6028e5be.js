!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var u=i("6JpON"),r=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function c(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector('button[type="submit"]').addEventListener("click",(function(n){n.preventDefault();var t=Number(r.value),o=Number(a.value);if(a.value>0&&r.value>0&&l.value>=0)for(var i=0;i<l.value;i++)c(1+i,t+i*o).then((function(n){var t=n.position,o=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}));else e(u).Notify.failure("Please use only positive numbers")}))}();
//# sourceMappingURL=03-promises.6028e5be.js.map
