const t = t => [ ...t ].reverse().join(""), e = (t, e) => t.padStart(e, "0"), r = t => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(t);

export { r as isPhoneNumber, e as padNumber, t as reverseString };
