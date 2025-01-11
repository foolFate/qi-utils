!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define([ "exports" ], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).$qi = {});
}(this, (function(e) {
    "use strict";
    e.EventBus = class {
        event={};
        on(e, t) {
            t._origin = t, this.event[e] ? this.event[e].push(t) : this.event[e] = [ t ];
        }
        once(e, t) {
            const n = (...e) => {
                t(...e);
            };
            n._origin = t, n._once = !0, this.event[e] ? this.event[e].push(n) : this.event[e] = [ n ];
        }
        emit(e, ...t) {
            if (this.event[e]) {
                const n = [];
                this.event[e].forEach((e => {
                    e(...t), e._once && n.push(e);
                })), n.forEach((t => this.off(e, t)));
            }
        }
        off(e, t) {
            if (this.event[e]) {
                const n = this.event[e];
                if (t) {
                    let e = n.findIndex((e => e._origin === t));
                    n.splice(e, 1);
                } else delete this.event[e];
            }
        }
    }, e.formatTimestamp = function(e, t) {
        const n = new Date(e);
        return `${n.getFullYear()}年${n.getMonth()}月${n.getDate()}日 ${n.getHours()}时${n.getMinutes()}分${n.getSeconds()}秒`;
    }, e.getWeekOfYear = (e = new Date) => {
        const t = e.getFullYear(), n = Math.floor((e.getTime() - new Date(t, 0, 0).getTime()) / 864e5), i = new Date(t, 0, 1).getDay();
        let s = 0;
        s = 0 === i ? n : n - (7 - i);
        let o = 0;
        return o = Math.ceil(s / 7), Math.abs(o);
    }, e.isPhoneNumber = e => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e), e.padNumber = (e, t) => e.padStart(t, "0"), 
    e.reverseString = e => [ ...e ].reverse().join("");
}));
//# sourceMappingURL=qi-utils.umd.js.map
