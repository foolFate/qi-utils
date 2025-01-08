"use strict";

exports.EventBus = class {
    event={};
    on(e, t) {
        t._origin = t, this.event[e] ? this.event[e].push(t) : this.event[e] = [ t ];
    }
    once(e, t) {
        const s = (...e) => {
            t(...e);
        };
        s._origin = t, s._once = !0, this.event[e] ? this.event[e].push(s) : this.event[e] = [ s ];
    }
    emit(e, ...t) {
        if (this.event[e]) {
            const s = [];
            this.event[e].forEach((e => {
                e(...t), e._once && s.push(e);
            })), s.forEach((t => this.off(e, t)));
        }
    }
    off(e, t) {
        if (this.event[e]) {
            const s = this.event[e];
            if (t) {
                let e = s.findIndex((e => e._origin === t));
                s.splice(e, 1);
            } else delete this.event[e];
        }
    }
}, exports.formatTimestamp = function(e, t) {
    const s = new Date(e);
    return `${s.getFullYear()}年${s.getMonth()}月${s.getDate()}日 ${s.getHours()}时${s.getMinutes()}分${s.getSeconds()}秒`;
}, exports.isPhoneNumber = e => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e), exports.padNumber = (e, t) => e.padStart(t, "0"), 
exports.reverseString = e => [ ...e ].reverse().join("");
