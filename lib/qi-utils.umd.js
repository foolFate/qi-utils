!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([ "exports" ], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).$qi = {});
}(this, (function(e) {
    "use strict";
    e.isPhoneNumber = e => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e), e.padNumber = (e, t) => e.padStart(t, "0"), 
    e.reverseString = e => [ ...e ].reverse().join("");
}));
