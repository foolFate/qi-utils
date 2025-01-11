const e = e => [ ...e ].reverse().join(""), t = (e, t) => e.padStart(t, "0"), n = e => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e);

class s {
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
}

function i(e, t) {
    const n = new Date(e);
    return `${n.getFullYear()}年${n.getMonth()}月${n.getDate()}日 ${n.getHours()}时${n.getMinutes()}分${n.getSeconds()}秒`;
}

const o = (e = new Date) => {
    const t = e.getFullYear(), n = Math.floor((e.getTime() - new Date(t, 0, 0).getTime()) / 864e5), s = new Date(t, 0, 1).getDay();
    let i = 0;
    i = 0 === s ? n : n - (7 - s);
    let o = 0;
    return o = Math.ceil(i / 7), Math.abs(o);
};

export { s as EventBus, i as formatTimestamp, o as getWeekOfYear, n as isPhoneNumber, t as padNumber, e as reverseString };
//# sourceMappingURL=qi-utils.esm.js.map
