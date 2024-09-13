"use strict";

exports.isPhoneNumber = e => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e), exports.padNumber = (e, r) => e.padStart(r, "0"), 
exports.reverseString = e => [ ...e ].reverse().join("");
