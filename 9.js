/*! For license information please see 9.js.LICENSE.txt */
(self.webpackChunkinspirux = self.webpackChunkinspirux || []).push([
    [9], {
        9755: function(t, e) {
            var n;
            ! function(e, n) {
                "use strict";
                "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return n(t)
                } : n(e)
            }("undefined" != typeof window ? window : this, (function(i, r) {
                "use strict";
                var s = [],
                    o = Object.getPrototypeOf,
                    a = s.slice,
                    l = s.flat ? function(t) {
                        return s.flat.call(t)
                    } : function(t) {
                        return s.concat.apply([], t)
                    },
                    u = s.push,
                    c = s.indexOf,
                    h = {},
                    p = h.toString,
                    d = h.hasOwnProperty,
                    f = d.toString,
                    g = f.call(Object),
                    m = {},
                    v = function(t) {
                        return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
                    },
                    y = function(t) {
                        return null != t && t === t.window
                    },
                    x = i.document,
                    w = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function _(t, e, n) {
                    var i, r, s = (n = n || x).createElement("script");
                    if (s.text = t, e)
                        for (i in w)(r = e[i] || e.getAttribute && e.getAttribute(i)) && s.setAttribute(i, r);
                    n.head.appendChild(s).parentNode.removeChild(s)
                }

                function b(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[p.call(t)] || "object" : typeof t
                }
                var C = "3.6.0",
                    T = function(t, e) {
                        return new T.fn.init(t, e)
                    };

                function E(t) {
                    var e = !!t && "length" in t && t.length,
                        n = b(t);
                    return !v(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                }
                T.fn = T.prototype = {
                    jquery: C,
                    constructor: T,
                    length: 0,
                    toArray: function() {
                        return a.call(this)
                    },
                    get: function(t) {
                        return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
                    },
                    pushStack: function(t) {
                        var e = T.merge(this.constructor(), t);
                        return e.prevObject = this, e
                    },
                    each: function(t) {
                        return T.each(this, t)
                    },
                    map: function(t) {
                        return this.pushStack(T.map(this, (function(e, n) {
                            return t.call(e, n, e)
                        })))
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(T.grep(this, (function(t, e) {
                            return (e + 1) % 2
                        })))
                    },
                    odd: function() {
                        return this.pushStack(T.grep(this, (function(t, e) {
                            return e % 2
                        })))
                    },
                    eq: function(t) {
                        var e = this.length,
                            n = +t + (t < 0 ? e : 0);
                        return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: u,
                    sort: s.sort,
                    splice: s.splice
                }, T.extend = T.fn.extend = function() {
                    var t, e, n, i, r, s, o = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        u = !1;
                    for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || v(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
                        if (null != (t = arguments[a]))
                            for (e in t) i = t[e], "__proto__" !== e && o !== i && (u && i && (T.isPlainObject(i) || (r = Array.isArray(i))) ? (n = o[e], s = r && !Array.isArray(n) ? [] : r || T.isPlainObject(n) ? n : {}, r = !1, o[e] = T.extend(u, s, i)) : void 0 !== i && (o[e] = i));
                    return o
                }, T.extend({
                    expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(t) {
                        throw new Error(t)
                    },
                    noop: function() {},
                    isPlainObject: function(t) {
                        var e, n;
                        return !(!t || "[object Object]" !== p.call(t) || (e = o(t)) && ("function" != typeof(n = d.call(e, "constructor") && e.constructor) || f.call(n) !== g))
                    },
                    isEmptyObject: function(t) {
                        var e;
                        for (e in t) return !1;
                        return !0
                    },
                    globalEval: function(t, e, n) {
                        _(t, {
                            nonce: e && e.nonce
                        }, n)
                    },
                    each: function(t, e) {
                        var n, i = 0;
                        if (E(t))
                            for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                        else
                            for (i in t)
                                if (!1 === e.call(t[i], i, t[i])) break;
                        return t
                    },
                    makeArray: function(t, e) {
                        var n = e || [];
                        return null != t && (E(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n
                    },
                    inArray: function(t, e, n) {
                        return null == e ? -1 : c.call(e, t, n)
                    },
                    merge: function(t, e) {
                        for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                        return t.length = r, t
                    },
                    grep: function(t, e, n) {
                        for (var i = [], r = 0, s = t.length, o = !n; r < s; r++) !e(t[r], r) !== o && i.push(t[r]);
                        return i
                    },
                    map: function(t, e, n) {
                        var i, r, s = 0,
                            o = [];
                        if (E(t))
                            for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && o.push(r);
                        else
                            for (s in t) null != (r = e(t[s], s, n)) && o.push(r);
                        return l(o)
                    },
                    guid: 1,
                    support: m
                }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = s[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                    h["[object " + e + "]"] = e.toLowerCase()
                }));
                var S = function(t) {
                    var e, n, i, r, s, o, a, l, u, c, h, p, d, f, g, m, v, y, x, w = "sizzle" + 1 * new Date,
                        _ = t.document,
                        b = 0,
                        C = 0,
                        T = lt(),
                        E = lt(),
                        S = lt(),
                        D = lt(),
                        k = function(t, e) {
                            return t === e && (h = !0), 0
                        },
                        A = {}.hasOwnProperty,
                        j = [],
                        N = j.pop,
                        $ = j.push,
                        L = j.push,
                        q = j.slice,
                        H = function(t, e) {
                            for (var n = 0, i = t.length; n < i; n++)
                                if (t[n] === e) return n;
                            return -1
                        },
                        z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        P = "[\\x20\\t\\r\\n\\f]",
                        O = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        M = "\\[[\\x20\\t\\r\\n\\f]*(" + O + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + P + "*\\]",
                        R = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                        I = new RegExp(P + "+", "g"),
                        W = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                        B = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                        F = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                        U = new RegExp(P + "|>"),
                        X = new RegExp(R),
                        V = new RegExp("^" + O + "$"),
                        G = {
                            ID: new RegExp("^#(" + O + ")"),
                            CLASS: new RegExp("^\\.(" + O + ")"),
                            TAG: new RegExp("^(" + O + "|[*])"),
                            ATTR: new RegExp("^" + M),
                            PSEUDO: new RegExp("^" + R),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                            bool: new RegExp("^(?:" + z + ")$", "i"),
                            needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                        },
                        Y = /HTML$/i,
                        Z = /^(?:input|select|textarea|button)$/i,
                        Q = /^h\d$/i,
                        J = /^[^{]+\{\s*\[native \w/,
                        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        tt = /[+~]/,
                        et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                        nt = function(t, e) {
                            var n = "0x" + t.slice(1) - 65536;
                            return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        },
                        it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        rt = function(t, e) {
                            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                        },
                        st = function() {
                            p()
                        },
                        ot = wt((function(t) {
                            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                        }), {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        L.apply(j = q.call(_.childNodes), _.childNodes), j[_.childNodes.length].nodeType
                    } catch (t) {
                        L = {
                            apply: j.length ? function(t, e) {
                                $.apply(t, q.call(e))
                            } : function(t, e) {
                                for (var n = t.length, i = 0; t[n++] = e[i++];);
                                t.length = n - 1
                            }
                        }
                    }

                    function at(t, e, i, r) {
                        var s, a, u, c, h, f, v, y = e && e.ownerDocument,
                            _ = e ? e.nodeType : 9;
                        if (i = i || [], "string" != typeof t || !t || 1 !== _ && 9 !== _ && 11 !== _) return i;
                        if (!r && (p(e), e = e || d, g)) {
                            if (11 !== _ && (h = K.exec(t)))
                                if (s = h[1]) {
                                    if (9 === _) {
                                        if (!(u = e.getElementById(s))) return i;
                                        if (u.id === s) return i.push(u), i
                                    } else if (y && (u = y.getElementById(s)) && x(e, u) && u.id === s) return i.push(u), i
                                } else {
                                    if (h[2]) return L.apply(i, e.getElementsByTagName(t)), i;
                                    if ((s = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(s)), i
                                }
                            if (n.qsa && !D[t + " "] && (!m || !m.test(t)) && (1 !== _ || "object" !== e.nodeName.toLowerCase())) {
                                if (v = t, y = e, 1 === _ && (U.test(t) || F.test(t))) {
                                    for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(it, rt) : e.setAttribute("id", c = w)), a = (f = o(t)).length; a--;) f[a] = (c ? "#" + c : ":scope") + " " + xt(f[a]);
                                    v = f.join(",")
                                }
                                try {
                                    return L.apply(i, y.querySelectorAll(v)), i
                                } catch (e) {
                                    D(t, !0)
                                } finally {
                                    c === w && e.removeAttribute("id")
                                }
                            }
                        }
                        return l(t.replace(W, "$1"), e, i, r)
                    }

                    function lt() {
                        var t = [];
                        return function e(n, r) {
                            return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                        }
                    }

                    function ut(t) {
                        return t[w] = !0, t
                    }

                    function ct(t) {
                        var e = d.createElement("fieldset");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function ht(t, e) {
                        for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
                    }

                    function pt(t, e) {
                        var n = e && t,
                            i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === e) return -1;
                        return t ? 1 : -1
                    }

                    function dt(t) {
                        return function(e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t
                        }
                    }

                    function ft(t) {
                        return function(e) {
                            var n = e.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && e.type === t
                        }
                    }

                    function gt(t) {
                        return function(e) {
                            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
                        }
                    }

                    function mt(t) {
                        return ut((function(e) {
                            return e = +e, ut((function(n, i) {
                                for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                            }))
                        }))
                    }

                    function vt(t) {
                        return t && void 0 !== t.getElementsByTagName && t
                    }
                    for (e in n = at.support = {}, s = at.isXML = function(t) {
                            var e = t && t.namespaceURI,
                                n = t && (t.ownerDocument || t).documentElement;
                            return !Y.test(e || n && n.nodeName || "HTML")
                        }, p = at.setDocument = function(t) {
                            var e, r, o = t ? t.ownerDocument || t : _;
                            return o != d && 9 === o.nodeType && o.documentElement ? (f = (d = o).documentElement, g = !s(d), _ != d && (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", st, !1) : r.attachEvent && r.attachEvent("onunload", st)), n.scope = ct((function(t) {
                                return f.appendChild(t).appendChild(d.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                            })), n.attributes = ct((function(t) {
                                return t.className = "i", !t.getAttribute("className")
                            })), n.getElementsByTagName = ct((function(t) {
                                return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                            })), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ct((function(t) {
                                return f.appendChild(t).id = w, !d.getElementsByName || !d.getElementsByName(w).length
                            })), n.getById ? (i.filter.ID = function(t) {
                                var e = t.replace(et, nt);
                                return function(t) {
                                    return t.getAttribute("id") === e
                                }
                            }, i.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && g) {
                                    var n = e.getElementById(t);
                                    return n ? [n] : []
                                }
                            }) : (i.filter.ID = function(t) {
                                var e = t.replace(et, nt);
                                return function(t) {
                                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                            }, i.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && g) {
                                    var n, i, r, s = e.getElementById(t);
                                    if (s) {
                                        if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                                        for (r = e.getElementsByName(t), i = 0; s = r[i++];)
                                            if ((n = s.getAttributeNode("id")) && n.value === t) return [s]
                                    }
                                    return []
                                }
                            }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                            } : function(t, e) {
                                var n, i = [],
                                    r = 0,
                                    s = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                                    return i
                                }
                                return s
                            }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                                if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                            }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ct((function(t) {
                                var e;
                                f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + z + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (e = d.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                            })), ct((function(t) {
                                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var e = d.createElement("input");
                                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                            }))), (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ct((function(t) {
                                n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", R)
                            })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(f.compareDocumentPosition), x = e || J.test(f.contains) ? function(t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t,
                                    i = e && e.parentNode;
                                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                            } : function(t, e) {
                                if (e)
                                    for (; e = e.parentNode;)
                                        if (e === t) return !0;
                                return !1
                            }, k = e ? function(t, e) {
                                if (t === e) return h = !0, 0;
                                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == d || t.ownerDocument == _ && x(_, t) ? -1 : e == d || e.ownerDocument == _ && x(_, e) ? 1 : c ? H(c, t) - H(c, e) : 0 : 4 & i ? -1 : 1)
                            } : function(t, e) {
                                if (t === e) return h = !0, 0;
                                var n, i = 0,
                                    r = t.parentNode,
                                    s = e.parentNode,
                                    o = [t],
                                    a = [e];
                                if (!r || !s) return t == d ? -1 : e == d ? 1 : r ? -1 : s ? 1 : c ? H(c, t) - H(c, e) : 0;
                                if (r === s) return pt(t, e);
                                for (n = t; n = n.parentNode;) o.unshift(n);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (; o[i] === a[i];) i++;
                                return i ? pt(o[i], a[i]) : o[i] == _ ? -1 : a[i] == _ ? 1 : 0
                            }, d) : d
                        }, at.matches = function(t, e) {
                            return at(t, null, null, e)
                        }, at.matchesSelector = function(t, e) {
                            if (p(t), n.matchesSelector && g && !D[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                                var i = y.call(t, e);
                                if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                            } catch (t) {
                                D(e, !0)
                            }
                            return at(e, d, null, [t]).length > 0
                        }, at.contains = function(t, e) {
                            return (t.ownerDocument || t) != d && p(t), x(t, e)
                        }, at.attr = function(t, e) {
                            (t.ownerDocument || t) != d && p(t);
                            var r = i.attrHandle[e.toLowerCase()],
                                s = r && A.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                            return void 0 !== s ? s : n.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
                        }, at.escape = function(t) {
                            return (t + "").replace(it, rt)
                        }, at.error = function(t) {
                            throw new Error("Syntax error, unrecognized expression: " + t)
                        }, at.uniqueSort = function(t) {
                            var e, i = [],
                                r = 0,
                                s = 0;
                            if (h = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(k), h) {
                                for (; e = t[s++];) e === t[s] && (r = i.push(s));
                                for (; r--;) t.splice(i[r], 1)
                            }
                            return c = null, t
                        }, r = at.getText = function(t) {
                            var e, n = "",
                                i = 0,
                                s = t.nodeType;
                            if (s) {
                                if (1 === s || 9 === s || 11 === s) {
                                    if ("string" == typeof t.textContent) return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                                } else if (3 === s || 4 === s) return t.nodeValue
                            } else
                                for (; e = t[i++];) n += r(e);
                            return n
                        }, (i = at.selectors = {
                            cacheLength: 50,
                            createPseudo: ut,
                            match: G,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(t) {
                                    return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                },
                                CHILD: function(t) {
                                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                                },
                                PSEUDO: function(t) {
                                    var e, n = !t[6] && t[2];
                                    return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(t) {
                                    var e = t.replace(et, nt).toLowerCase();
                                    return "*" === t ? function() {
                                        return !0
                                    } : function(t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    }
                                },
                                CLASS: function(t) {
                                    var e = T[t + " "];
                                    return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + P + "|$)")) && T(t, (function(t) {
                                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function(t, e, n) {
                                    return function(i) {
                                        var r = at.attr(i, t);
                                        return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(t, e, n, i, r) {
                                    var s = "nth" !== t.slice(0, 3),
                                        o = "last" !== t.slice(-4),
                                        a = "of-type" === e;
                                    return 1 === i && 0 === r ? function(t) {
                                        return !!t.parentNode
                                    } : function(e, n, l) {
                                        var u, c, h, p, d, f, g = s !== o ? "nextSibling" : "previousSibling",
                                            m = e.parentNode,
                                            v = a && e.nodeName.toLowerCase(),
                                            y = !l && !a,
                                            x = !1;
                                        if (m) {
                                            if (s) {
                                                for (; g;) {
                                                    for (p = e; p = p[g];)
                                                        if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                    f = g = "only" === t && !f && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                                for (x = (d = (u = (c = (h = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === b && u[1]) && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || f.pop();)
                                                    if (1 === p.nodeType && ++x && p === e) {
                                                        c[t] = [b, d, x];
                                                        break
                                                    }
                                            } else if (y && (x = d = (u = (c = (h = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] || [])[0] === b && u[1]), !1 === x)
                                                for (;
                                                    (p = ++d && p && p[g] || (x = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((c = (h = p[w] || (p[w] = {}))[p.uniqueID] || (h[p.uniqueID] = {}))[t] = [b, x]), p !== e)););
                                            return (x -= r) === i || x % i == 0 && x / i >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(t, e) {
                                    var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                                    return r[w] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ut((function(t, n) {
                                        for (var i, s = r(t, e), o = s.length; o--;) t[i = H(t, s[o])] = !(n[i] = s[o])
                                    })) : function(t) {
                                        return r(t, 0, n)
                                    }) : r
                                }
                            },
                            pseudos: {
                                not: ut((function(t) {
                                    var e = [],
                                        n = [],
                                        i = a(t.replace(W, "$1"));
                                    return i[w] ? ut((function(t, e, n, r) {
                                        for (var s, o = i(t, null, r, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                                    })) : function(t, r, s) {
                                        return e[0] = t, i(e, null, s, n), e[0] = null, !n.pop()
                                    }
                                })),
                                has: ut((function(t) {
                                    return function(e) {
                                        return at(t, e).length > 0
                                    }
                                })),
                                contains: ut((function(t) {
                                    return t = t.replace(et, nt),
                                        function(e) {
                                            return (e.textContent || r(e)).indexOf(t) > -1
                                        }
                                })),
                                lang: ut((function(t) {
                                    return V.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                        function(e) {
                                            var n;
                                            do {
                                                if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                            } while ((e = e.parentNode) && 1 === e.nodeType);
                                            return !1
                                        }
                                })),
                                target: function(e) {
                                    var n = t.location && t.location.hash;
                                    return n && n.slice(1) === e.id
                                },
                                root: function(t) {
                                    return t === f
                                },
                                focus: function(t) {
                                    return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                },
                                enabled: gt(!1),
                                disabled: gt(!0),
                                checked: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                                },
                                selected: function(t) {
                                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                },
                                empty: function(t) {
                                    for (t = t.firstChild; t; t = t.nextSibling)
                                        if (t.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(t) {
                                    return !i.pseudos.empty(t)
                                },
                                header: function(t) {
                                    return Q.test(t.nodeName)
                                },
                                input: function(t) {
                                    return Z.test(t.nodeName)
                                },
                                button: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && "button" === t.type || "button" === e
                                },
                                text: function(t) {
                                    var e;
                                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                },
                                first: mt((function() {
                                    return [0]
                                })),
                                last: mt((function(t, e) {
                                    return [e - 1]
                                })),
                                eq: mt((function(t, e, n) {
                                    return [n < 0 ? n + e : n]
                                })),
                                even: mt((function(t, e) {
                                    for (var n = 0; n < e; n += 2) t.push(n);
                                    return t
                                })),
                                odd: mt((function(t, e) {
                                    for (var n = 1; n < e; n += 2) t.push(n);
                                    return t
                                })),
                                lt: mt((function(t, e, n) {
                                    for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                                    return t
                                })),
                                gt: mt((function(t, e, n) {
                                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                    return t
                                }))
                            }
                        }).pseudos.nth = i.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) i.pseudos[e] = dt(e);
                    for (e in {
                            submit: !0,
                            reset: !0
                        }) i.pseudos[e] = ft(e);

                    function yt() {}

                    function xt(t) {
                        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                        return i
                    }

                    function wt(t, e, n) {
                        var i = e.dir,
                            r = e.next,
                            s = r || i,
                            o = n && "parentNode" === s,
                            a = C++;
                        return e.first ? function(e, n, r) {
                            for (; e = e[i];)
                                if (1 === e.nodeType || o) return t(e, n, r);
                            return !1
                        } : function(e, n, l) {
                            var u, c, h, p = [b, a];
                            if (l) {
                                for (; e = e[i];)
                                    if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                            } else
                                for (; e = e[i];)
                                    if (1 === e.nodeType || o)
                                        if (c = (h = e[w] || (e[w] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                        else {
                                            if ((u = c[s]) && u[0] === b && u[1] === a) return p[2] = u[2];
                                            if (c[s] = p, p[2] = t(e, n, l)) return !0
                                        } return !1
                        }
                    }

                    function _t(t) {
                        return t.length > 1 ? function(e, n, i) {
                            for (var r = t.length; r--;)
                                if (!t[r](e, n, i)) return !1;
                            return !0
                        } : t[0]
                    }

                    function bt(t, e, n, i, r) {
                        for (var s, o = [], a = 0, l = t.length, u = null != e; a < l; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), u && e.push(a)));
                        return o
                    }

                    function Ct(t, e, n, i, r, s) {
                        return i && !i[w] && (i = Ct(i)), r && !r[w] && (r = Ct(r, s)), ut((function(s, o, a, l) {
                            var u, c, h, p = [],
                                d = [],
                                f = o.length,
                                g = s || function(t, e, n) {
                                    for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                                    return n
                                }(e || "*", a.nodeType ? [a] : a, []),
                                m = !t || !s && e ? g : bt(g, p, t, a, l),
                                v = n ? r || (s ? t : f || i) ? [] : o : m;
                            if (n && n(m, v, a, l), i)
                                for (u = bt(v, d), i(u, [], a, l), c = u.length; c--;)(h = u[c]) && (v[d[c]] = !(m[d[c]] = h));
                            if (s) {
                                if (r || t) {
                                    if (r) {
                                        for (u = [], c = v.length; c--;)(h = v[c]) && u.push(m[c] = h);
                                        r(null, v = [], u, l)
                                    }
                                    for (c = v.length; c--;)(h = v[c]) && (u = r ? H(s, h) : p[c]) > -1 && (s[u] = !(o[u] = h))
                                }
                            } else v = bt(v === o ? v.splice(f, v.length) : v), r ? r(null, o, v, l) : L.apply(o, v)
                        }))
                    }

                    function Tt(t) {
                        for (var e, n, r, s = t.length, o = i.relative[t[0].type], a = o || i.relative[" "], l = o ? 1 : 0, c = wt((function(t) {
                                return t === e
                            }), a, !0), h = wt((function(t) {
                                return H(e, t) > -1
                            }), a, !0), p = [function(t, n, i) {
                                var r = !o && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : h(t, n, i));
                                return e = null, r
                            }]; l < s; l++)
                            if (n = i.relative[t[l].type]) p = [wt(_t(p), n)];
                            else {
                                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                                    for (r = ++l; r < s && !i.relative[t[r].type]; r++);
                                    return Ct(l > 1 && _t(p), l > 1 && xt(t.slice(0, l - 1).concat({
                                        value: " " === t[l - 2].type ? "*" : ""
                                    })).replace(W, "$1"), n, l < r && Tt(t.slice(l, r)), r < s && Tt(t = t.slice(r)), r < s && xt(t))
                                }
                                p.push(n)
                            }
                        return _t(p)
                    }
                    return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, o = at.tokenize = function(t, e) {
                        var n, r, s, o, a, l, u, c = E[t + " "];
                        if (c) return e ? 0 : c.slice(0);
                        for (a = t, l = [], u = i.preFilter; a;) {
                            for (o in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = F.exec(a)) && (n = r.shift(), s.push({
                                    value: n,
                                    type: r[0].replace(W, " ")
                                }), a = a.slice(n.length)), i.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), s.push({
                                value: n,
                                type: o,
                                matches: r
                            }), a = a.slice(n.length));
                            if (!n) break
                        }
                        return e ? a.length : a ? at.error(t) : E(t, l).slice(0)
                    }, a = at.compile = function(t, e) {
                        var n, r = [],
                            s = [],
                            a = S[t + " "];
                        if (!a) {
                            for (e || (e = o(t)), n = e.length; n--;)(a = Tt(e[n]))[w] ? r.push(a) : s.push(a);
                            (a = S(t, function(t, e) {
                                var n = e.length > 0,
                                    r = t.length > 0,
                                    s = function(s, o, a, l, c) {
                                        var h, f, m, v = 0,
                                            y = "0",
                                            x = s && [],
                                            w = [],
                                            _ = u,
                                            C = s || r && i.find.TAG("*", c),
                                            T = b += null == _ ? 1 : Math.random() || .1,
                                            E = C.length;
                                        for (c && (u = o == d || o || c); y !== E && null != (h = C[y]); y++) {
                                            if (r && h) {
                                                for (f = 0, o || h.ownerDocument == d || (p(h), a = !g); m = t[f++];)
                                                    if (m(h, o || d, a)) {
                                                        l.push(h);
                                                        break
                                                    }
                                                c && (b = T)
                                            }
                                            n && ((h = !m && h) && v--, s && x.push(h))
                                        }
                                        if (v += y, n && y !== v) {
                                            for (f = 0; m = e[f++];) m(x, w, o, a);
                                            if (s) {
                                                if (v > 0)
                                                    for (; y--;) x[y] || w[y] || (w[y] = N.call(l));
                                                w = bt(w)
                                            }
                                            L.apply(l, w), c && !s && w.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                                        }
                                        return c && (b = T, u = _), x
                                    };
                                return n ? ut(s) : s
                            }(s, r))).selector = t
                        }
                        return a
                    }, l = at.select = function(t, e, n, r) {
                        var s, l, u, c, h, p = "function" == typeof t && t,
                            d = !r && o(t = p.selector || t);
                        if (n = n || [], 1 === d.length) {
                            if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                                if (!(e = (i.find.ID(u.matches[0].replace(et, nt), e) || [])[0])) return n;
                                p && (e = e.parentNode), t = t.slice(l.shift().value.length)
                            }
                            for (s = G.needsContext.test(t) ? 0 : l.length; s-- && (u = l[s], !i.relative[c = u.type]);)
                                if ((h = i.find[c]) && (r = h(u.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                                    if (l.splice(s, 1), !(t = r.length && xt(l))) return L.apply(n, r), n;
                                    break
                                }
                        }
                        return (p || a(t, d))(r, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
                    }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!h, p(), n.sortDetached = ct((function(t) {
                        return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
                    })), ct((function(t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    })) || ht("type|href|height|width", (function(t, e, n) {
                        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    })), n.attributes && ct((function(t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    })) || ht("value", (function(t, e, n) {
                        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                    })), ct((function(t) {
                        return null == t.getAttribute("disabled")
                    })) || ht(z, (function(t, e, n) {
                        var i;
                        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    })), at
                }(i);
                T.find = S, T.expr = S.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = S.uniqueSort, T.text = S.getText, T.isXMLDoc = S.isXML, T.contains = S.contains, T.escapeSelector = S.escape;
                var D = function(t, e, n) {
                        for (var i = [], r = void 0 !== n;
                            (t = t[e]) && 9 !== t.nodeType;)
                            if (1 === t.nodeType) {
                                if (r && T(t).is(n)) break;
                                i.push(t)
                            }
                        return i
                    },
                    k = function(t, e) {
                        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                        return n
                    },
                    A = T.expr.match.needsContext;

                function j(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                }
                var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function $(t, e, n) {
                    return v(e) ? T.grep(t, (function(t, i) {
                        return !!e.call(t, i, t) !== n
                    })) : e.nodeType ? T.grep(t, (function(t) {
                        return t === e !== n
                    })) : "string" != typeof e ? T.grep(t, (function(t) {
                        return c.call(e, t) > -1 !== n
                    })) : T.filter(e, t, n)
                }
                T.filter = function(t, e, n) {
                    var i = e[0];
                    return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, (function(t) {
                        return 1 === t.nodeType
                    })))
                }, T.fn.extend({
                    find: function(t) {
                        var e, n, i = this.length,
                            r = this;
                        if ("string" != typeof t) return this.pushStack(T(t).filter((function() {
                            for (e = 0; e < i; e++)
                                if (T.contains(r[e], this)) return !0
                        })));
                        for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, r[e], n);
                        return i > 1 ? T.uniqueSort(n) : n
                    },
                    filter: function(t) {
                        return this.pushStack($(this, t || [], !1))
                    },
                    not: function(t) {
                        return this.pushStack($(this, t || [], !0))
                    },
                    is: function(t) {
                        return !!$(this, "string" == typeof t && A.test(t) ? T(t) : t || [], !1).length
                    }
                });
                var L, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (T.fn.init = function(t, e, n) {
                    var i, r;
                    if (!t) return this;
                    if (n = n || L, "string" == typeof t) {
                        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : q.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                        if (i[1]) {
                            if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : x, !0)), N.test(i[1]) && T.isPlainObject(e))
                                for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                            return this
                        }
                        return (r = x.getElementById(i[2])) && (this[0] = r, this.length = 1), this
                    }
                    return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this)
                }).prototype = T.fn, L = T(x);
                var H = /^(?:parents|prev(?:Until|All))/,
                    z = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function P(t, e) {
                    for (;
                        (t = t[e]) && 1 !== t.nodeType;);
                    return t
                }
                T.fn.extend({
                    has: function(t) {
                        var e = T(t, this),
                            n = e.length;
                        return this.filter((function() {
                            for (var t = 0; t < n; t++)
                                if (T.contains(this, e[t])) return !0
                        }))
                    },
                    closest: function(t, e) {
                        var n, i = 0,
                            r = this.length,
                            s = [],
                            o = "string" != typeof t && T(t);
                        if (!A.test(t))
                            for (; i < r; i++)
                                for (n = this[i]; n && n !== e; n = n.parentNode)
                                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                                        s.push(n);
                                        break
                                    }
                        return this.pushStack(s.length > 1 ? T.uniqueSort(s) : s)
                    },
                    index: function(t) {
                        return t ? "string" == typeof t ? c.call(T(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(t, e) {
                        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
                    },
                    addBack: function(t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                    }
                }), T.each({
                    parent: function(t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    },
                    parents: function(t) {
                        return D(t, "parentNode")
                    },
                    parentsUntil: function(t, e, n) {
                        return D(t, "parentNode", n)
                    },
                    next: function(t) {
                        return P(t, "nextSibling")
                    },
                    prev: function(t) {
                        return P(t, "previousSibling")
                    },
                    nextAll: function(t) {
                        return D(t, "nextSibling")
                    },
                    prevAll: function(t) {
                        return D(t, "previousSibling")
                    },
                    nextUntil: function(t, e, n) {
                        return D(t, "nextSibling", n)
                    },
                    prevUntil: function(t, e, n) {
                        return D(t, "previousSibling", n)
                    },
                    siblings: function(t) {
                        return k((t.parentNode || {}).firstChild, t)
                    },
                    children: function(t) {
                        return k(t.firstChild)
                    },
                    contents: function(t) {
                        return null != t.contentDocument && o(t.contentDocument) ? t.contentDocument : (j(t, "template") && (t = t.content || t), T.merge([], t.childNodes))
                    }
                }, (function(t, e) {
                    T.fn[t] = function(n, i) {
                        var r = T.map(this, e, n);
                        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = T.filter(i, r)), this.length > 1 && (z[t] || T.uniqueSort(r), H.test(t) && r.reverse()), this.pushStack(r)
                    }
                }));
                var O = /[^\x20\t\r\n\f]+/g;

                function M(t) {
                    return t
                }

                function R(t) {
                    throw t
                }

                function I(t, e, n, i) {
                    var r;
                    try {
                        t && v(r = t.promise) ? r.call(t).done(e).fail(n) : t && v(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
                    } catch (t) {
                        n.apply(void 0, [t])
                    }
                }
                T.Callbacks = function(t) {
                    t = "string" == typeof t ? function(t) {
                        var e = {};
                        return T.each(t.match(O) || [], (function(t, n) {
                            e[n] = !0
                        })), e
                    }(t) : T.extend({}, t);
                    var e, n, i, r, s = [],
                        o = [],
                        a = -1,
                        l = function() {
                            for (r = r || t.once, i = e = !0; o.length; a = -1)
                                for (n = o.shift(); ++a < s.length;) !1 === s[a].apply(n[0], n[1]) && t.stopOnFalse && (a = s.length, n = !1);
                            t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                        },
                        u = {
                            add: function() {
                                return s && (n && !e && (a = s.length - 1, o.push(n)), function e(n) {
                                    T.each(n, (function(n, i) {
                                        v(i) ? t.unique && u.has(i) || s.push(i) : i && i.length && "string" !== b(i) && e(i)
                                    }))
                                }(arguments), n && !e && l()), this
                            },
                            remove: function() {
                                return T.each(arguments, (function(t, e) {
                                    for (var n;
                                        (n = T.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= a && a--
                                })), this
                            },
                            has: function(t) {
                                return t ? T.inArray(t, s) > -1 : s.length > 0
                            },
                            empty: function() {
                                return s && (s = []), this
                            },
                            disable: function() {
                                return r = o = [], s = n = "", this
                            },
                            disabled: function() {
                                return !s
                            },
                            lock: function() {
                                return r = o = [], n || e || (s = n = ""), this
                            },
                            locked: function() {
                                return !!r
                            },
                            fireWith: function(t, n) {
                                return r || (n = [t, (n = n || []).slice ? n.slice() : n], o.push(n), e || l()), this
                            },
                            fire: function() {
                                return u.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!i
                            }
                        };
                    return u
                }, T.extend({
                    Deferred: function(t) {
                        var e = [
                                ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                                ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                            ],
                            n = "pending",
                            r = {
                                state: function() {
                                    return n
                                },
                                always: function() {
                                    return s.done(arguments).fail(arguments), this
                                },
                                catch: function(t) {
                                    return r.then(null, t)
                                },
                                pipe: function() {
                                    var t = arguments;
                                    return T.Deferred((function(n) {
                                        T.each(e, (function(e, i) {
                                            var r = v(t[i[4]]) && t[i[4]];
                                            s[i[1]]((function() {
                                                var t = r && r.apply(this, arguments);
                                                t && v(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                            }))
                                        })), t = null
                                    })).promise()
                                },
                                then: function(t, n, r) {
                                    var s = 0;

                                    function o(t, e, n, r) {
                                        return function() {
                                            var a = this,
                                                l = arguments,
                                                u = function() {
                                                    var i, u;
                                                    if (!(t < s)) {
                                                        if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                        u = i && ("object" == typeof i || "function" == typeof i) && i.then, v(u) ? r ? u.call(i, o(s, e, M, r), o(s, e, R, r)) : (s++, u.call(i, o(s, e, M, r), o(s, e, R, r), o(s, e, M, e.notifyWith))) : (n !== M && (a = void 0, l = [i]), (r || e.resolveWith)(a, l))
                                                    }
                                                },
                                                c = r ? u : function() {
                                                    try {
                                                        u()
                                                    } catch (i) {
                                                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(i, c.stackTrace), t + 1 >= s && (n !== R && (a = void 0, l = [i]), e.rejectWith(a, l))
                                                    }
                                                };
                                            t ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), i.setTimeout(c))
                                        }
                                    }
                                    return T.Deferred((function(i) {
                                        e[0][3].add(o(0, i, v(r) ? r : M, i.notifyWith)), e[1][3].add(o(0, i, v(t) ? t : M)), e[2][3].add(o(0, i, v(n) ? n : R))
                                    })).promise()
                                },
                                promise: function(t) {
                                    return null != t ? T.extend(t, r) : r
                                }
                            },
                            s = {};
                        return T.each(e, (function(t, i) {
                            var o = i[2],
                                a = i[5];
                            r[i[1]] = o.add, a && o.add((function() {
                                n = a
                            }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), o.add(i[3].fire), s[i[0]] = function() {
                                return s[i[0] + "With"](this === s ? void 0 : this, arguments), this
                            }, s[i[0] + "With"] = o.fireWith
                        })), r.promise(s), t && t.call(s, s), s
                    },
                    when: function(t) {
                        var e = arguments.length,
                            n = e,
                            i = Array(n),
                            r = a.call(arguments),
                            s = T.Deferred(),
                            o = function(t) {
                                return function(n) {
                                    i[t] = this, r[t] = arguments.length > 1 ? a.call(arguments) : n, --e || s.resolveWith(i, r)
                                }
                            };
                        if (e <= 1 && (I(t, s.done(o(n)).resolve, s.reject, !e), "pending" === s.state() || v(r[n] && r[n].then))) return s.then();
                        for (; n--;) I(r[n], o(n), s.reject);
                        return s.promise()
                    }
                });
                var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                T.Deferred.exceptionHook = function(t, e) {
                    i.console && i.console.warn && t && W.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
                }, T.readyException = function(t) {
                    i.setTimeout((function() {
                        throw t
                    }))
                };
                var B = T.Deferred();

                function F() {
                    x.removeEventListener("DOMContentLoaded", F), i.removeEventListener("load", F), T.ready()
                }
                T.fn.ready = function(t) {
                    return B.then(t).catch((function(t) {
                        T.readyException(t)
                    })), this
                }, T.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(t) {
                        (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== t && --T.readyWait > 0 || B.resolveWith(x, [T]))
                    }
                }), T.ready.then = B.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? i.setTimeout(T.ready) : (x.addEventListener("DOMContentLoaded", F), i.addEventListener("load", F));
                var U = function(t, e, n, i, r, s, o) {
                        var a = 0,
                            l = t.length,
                            u = null == n;
                        if ("object" === b(n))
                            for (a in r = !0, n) U(t, e, a, n[a], !0, s, o);
                        else if (void 0 !== i && (r = !0, v(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                                return u.call(T(t), n)
                            })), e))
                            for (; a < l; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
                        return r ? t : u ? e.call(t) : l ? e(t[0], n) : s
                    },
                    X = /^-ms-/,
                    V = /-([a-z])/g;

                function G(t, e) {
                    return e.toUpperCase()
                }

                function Y(t) {
                    return t.replace(X, "ms-").replace(V, G)
                }
                var Z = function(t) {
                    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                };

                function Q() {
                    this.expando = T.expando + Q.uid++
                }
                Q.uid = 1, Q.prototype = {
                    cache: function(t) {
                        var e = t[this.expando];
                        return e || (e = {}, Z(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0
                        }))), e
                    },
                    set: function(t, e, n) {
                        var i, r = this.cache(t);
                        if ("string" == typeof e) r[Y(e)] = n;
                        else
                            for (i in e) r[Y(i)] = e[i];
                        return r
                    },
                    get: function(t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
                    },
                    access: function(t, e, n) {
                        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
                    },
                    remove: function(t, e) {
                        var n, i = t[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(O) || []).length;
                                for (; n--;) delete i[e[n]]
                            }(void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                        }
                    },
                    hasData: function(t) {
                        var e = t[this.expando];
                        return void 0 !== e && !T.isEmptyObject(e)
                    }
                };
                var J = new Q,
                    K = new Q,
                    tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    et = /[A-Z]/g;

                function nt(t, e, n) {
                    var i;
                    if (void 0 === n && 1 === t.nodeType)
                        if (i = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                            try {
                                n = function(t) {
                                    return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                                }(n)
                            } catch (t) {}
                            K.set(t, e, n)
                        } else n = void 0;
                    return n
                }
                T.extend({
                    hasData: function(t) {
                        return K.hasData(t) || J.hasData(t)
                    },
                    data: function(t, e, n) {
                        return K.access(t, e, n)
                    },
                    removeData: function(t, e) {
                        K.remove(t, e)
                    },
                    _data: function(t, e, n) {
                        return J.access(t, e, n)
                    },
                    _removeData: function(t, e) {
                        J.remove(t, e)
                    }
                }), T.fn.extend({
                    data: function(t, e) {
                        var n, i, r, s = this[0],
                            o = s && s.attributes;
                        if (void 0 === t) {
                            if (this.length && (r = K.get(s), 1 === s.nodeType && !J.get(s, "hasDataAttrs"))) {
                                for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = Y(i.slice(5)), nt(s, i, r[i]));
                                J.set(s, "hasDataAttrs", !0)
                            }
                            return r
                        }
                        return "object" == typeof t ? this.each((function() {
                            K.set(this, t)
                        })) : U(this, (function(e) {
                            var n;
                            if (s && void 0 === e) return void 0 !== (n = K.get(s, t)) || void 0 !== (n = nt(s, t)) ? n : void 0;
                            this.each((function() {
                                K.set(this, t, e)
                            }))
                        }), null, e, arguments.length > 1, null, !0)
                    },
                    removeData: function(t) {
                        return this.each((function() {
                            K.remove(this, t)
                        }))
                    }
                }), T.extend({
                    queue: function(t, e, n) {
                        var i;
                        if (t) return e = (e || "fx") + "queue", i = J.get(t, e), n && (!i || Array.isArray(n) ? i = J.access(t, e, T.makeArray(n)) : i.push(n)), i || []
                    },
                    dequeue: function(t, e) {
                        e = e || "fx";
                        var n = T.queue(t, e),
                            i = n.length,
                            r = n.shift(),
                            s = T._queueHooks(t, e);
                        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, (function() {
                            T.dequeue(t, e)
                        }), s)), !i && s && s.empty.fire()
                    },
                    _queueHooks: function(t, e) {
                        var n = e + "queueHooks";
                        return J.get(t, n) || J.access(t, n, {
                            empty: T.Callbacks("once memory").add((function() {
                                J.remove(t, [e + "queue", n])
                            }))
                        })
                    }
                }), T.fn.extend({
                    queue: function(t, e) {
                        var n = 2;
                        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? T.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                            var n = T.queue(this, t, e);
                            T._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && T.dequeue(this, t)
                        }))
                    },
                    dequeue: function(t) {
                        return this.each((function() {
                            T.dequeue(this, t)
                        }))
                    },
                    clearQueue: function(t) {
                        return this.queue(t || "fx", [])
                    },
                    promise: function(t, e) {
                        var n, i = 1,
                            r = T.Deferred(),
                            s = this,
                            o = this.length,
                            a = function() {
                                --i || r.resolveWith(s, [s])
                            };
                        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(n = J.get(s[o], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(), r.promise(e)
                    }
                });
                var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
                    st = ["Top", "Right", "Bottom", "Left"],
                    ot = x.documentElement,
                    at = function(t) {
                        return T.contains(t.ownerDocument, t)
                    },
                    lt = {
                        composed: !0
                    };
                ot.getRootNode && (at = function(t) {
                    return T.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
                });
                var ut = function(t, e) {
                    return "none" === (t = e || t).style.display || "" === t.style.display && at(t) && "none" === T.css(t, "display")
                };

                function ct(t, e, n, i) {
                    var r, s, o = 20,
                        a = i ? function() {
                            return i.cur()
                        } : function() {
                            return T.css(t, e, "")
                        },
                        l = a(),
                        u = n && n[3] || (T.cssNumber[e] ? "" : "px"),
                        c = t.nodeType && (T.cssNumber[e] || "px" !== u && +l) && rt.exec(T.css(t, e));
                    if (c && c[3] !== u) {
                        for (l /= 2, u = u || c[3], c = +l || 1; o--;) T.style(t, e, c + u), (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (o = 0), c /= s;
                        c *= 2, T.style(t, e, c + u), n = n || []
                    }
                    return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
                }
                var ht = {};

                function pt(t) {
                    var e, n = t.ownerDocument,
                        i = t.nodeName,
                        r = ht[i];
                    return r || (e = n.body.appendChild(n.createElement(i)), r = T.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), ht[i] = r, r)
                }

                function dt(t, e) {
                    for (var n, i, r = [], s = 0, o = t.length; s < o; s++)(i = t[s]).style && (n = i.style.display, e ? ("none" === n && (r[s] = J.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && ut(i) && (r[s] = pt(i))) : "none" !== n && (r[s] = "none", J.set(i, "display", n)));
                    for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
                    return t
                }
                T.fn.extend({
                    show: function() {
                        return dt(this, !0)
                    },
                    hide: function() {
                        return dt(this)
                    },
                    toggle: function(t) {
                        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                            ut(this) ? T(this).show() : T(this).hide()
                        }))
                    }
                });
                var ft, gt, mt = /^(?:checkbox|radio)$/i,
                    vt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    yt = /^$|^module$|\/(?:java|ecma)script/i;
                ft = x.createDocumentFragment().appendChild(x.createElement("div")), (gt = x.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), ft.appendChild(gt), m.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue, ft.innerHTML = "<option></option>", m.option = !!ft.lastChild;
                var xt = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

                function wt(t, e) {
                    var n;
                    return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && j(t, e) ? T.merge([t], n) : n
                }

                function _t(t, e) {
                    for (var n = 0, i = t.length; n < i; n++) J.set(t[n], "globalEval", !e || J.get(e[n], "globalEval"))
                }
                xt.tbody = xt.tfoot = xt.colgroup = xt.caption = xt.thead, xt.th = xt.td, m.option || (xt.optgroup = xt.option = [1, "<select multiple='multiple'>", "</select>"]);
                var bt = /<|&#?\w+;/;

                function Ct(t, e, n, i, r) {
                    for (var s, o, a, l, u, c, h = e.createDocumentFragment(), p = [], d = 0, f = t.length; d < f; d++)
                        if ((s = t[d]) || 0 === s)
                            if ("object" === b(s)) T.merge(p, s.nodeType ? [s] : s);
                            else if (bt.test(s)) {
                        for (o = o || h.appendChild(e.createElement("div")), a = (vt.exec(s) || ["", ""])[1].toLowerCase(), l = xt[a] || xt._default, o.innerHTML = l[1] + T.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
                        T.merge(p, o.childNodes), (o = h.firstChild).textContent = ""
                    } else p.push(e.createTextNode(s));
                    for (h.textContent = "", d = 0; s = p[d++];)
                        if (i && T.inArray(s, i) > -1) r && r.push(s);
                        else if (u = at(s), o = wt(h.appendChild(s), "script"), u && _t(o), n)
                        for (c = 0; s = o[c++];) yt.test(s.type || "") && n.push(s);
                    return h
                }
                var Tt = /^([^.]*)(?:\.(.+)|)/;

                function Et() {
                    return !0
                }

                function St() {
                    return !1
                }

                function Dt(t, e) {
                    return t === function() {
                        try {
                            return x.activeElement
                        } catch (t) {}
                    }() == ("focus" === e)
                }

                function kt(t, e, n, i, r, s) {
                    var o, a;
                    if ("object" == typeof e) {
                        for (a in "string" != typeof n && (i = i || n, n = void 0), e) kt(t, a, n, i, e[a], s);
                        return t
                    }
                    if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = St;
                    else if (!r) return t;
                    return 1 === s && (o = r, (r = function(t) {
                        return T().off(t), o.apply(this, arguments)
                    }).guid = o.guid || (o.guid = T.guid++)), t.each((function() {
                        T.event.add(this, e, r, i, n)
                    }))
                }

                function At(t, e, n) {
                    n ? (J.set(t, e, !1), T.event.add(t, e, {
                        namespace: !1,
                        handler: function(t) {
                            var i, r, s = J.get(this, e);
                            if (1 & t.isTrigger && this[e]) {
                                if (s.length)(T.event.special[e] || {}).delegateType && t.stopPropagation();
                                else if (s = a.call(arguments), J.set(this, e, s), i = n(this, e), this[e](), s !== (r = J.get(this, e)) || i ? J.set(this, e, !1) : r = {}, s !== r) return t.stopImmediatePropagation(), t.preventDefault(), r && r.value
                            } else s.length && (J.set(this, e, {
                                value: T.event.trigger(T.extend(s[0], T.Event.prototype), s.slice(1), this)
                            }), t.stopImmediatePropagation())
                        }
                    })) : void 0 === J.get(t, e) && T.event.add(t, e, Et)
                }
                T.event = {
                    global: {},
                    add: function(t, e, n, i, r) {
                        var s, o, a, l, u, c, h, p, d, f, g, m = J.get(t);
                        if (Z(t))
                            for (n.handler && (n = (s = n).handler, r = s.selector), r && T.find.matchesSelector(ot, r), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = Object.create(null)), (o = m.handle) || (o = m.handle = function(e) {
                                    return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                                }), u = (e = (e || "").match(O) || [""]).length; u--;) d = g = (a = Tt.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), d && (h = T.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = T.event.special[d] || {}, c = T.extend({
                                type: d,
                                origType: g,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: r,
                                needsContext: r && T.expr.match.needsContext.test(r),
                                namespace: f.join(".")
                            }, s), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, f, o) || t.addEventListener && t.addEventListener(d, o)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), T.event.global[d] = !0)
                    },
                    remove: function(t, e, n, i, r) {
                        var s, o, a, l, u, c, h, p, d, f, g, m = J.hasData(t) && J.get(t);
                        if (m && (l = m.events)) {
                            for (u = (e = (e || "").match(O) || [""]).length; u--;)
                                if (d = g = (a = Tt.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), d) {
                                    for (h = T.event.special[d] || {}, p = l[d = (i ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) c = p[s], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                                    o && !p.length && (h.teardown && !1 !== h.teardown.call(t, f, m.handle) || T.removeEvent(t, d, m.handle), delete l[d])
                                } else
                                    for (d in l) T.event.remove(t, d + e[u], n, i, !0);
                            T.isEmptyObject(l) && J.remove(t, "handle events")
                        }
                    },
                    dispatch: function(t) {
                        var e, n, i, r, s, o, a = new Array(arguments.length),
                            l = T.event.fix(t),
                            u = (J.get(this, "events") || Object.create(null))[l.type] || [],
                            c = T.event.special[l.type] || {};
                        for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
                        if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                            for (o = T.event.handlers.call(this, l, u), e = 0;
                                (r = o[e++]) && !l.isPropagationStopped();)
                                for (l.currentTarget = r.elem, n = 0;
                                    (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace) || (l.handleObj = s, l.data = s.data, void 0 !== (i = ((T.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, l), l.result
                        }
                    },
                    handlers: function(t, e) {
                        var n, i, r, s, o, a = [],
                            l = e.delegateCount,
                            u = t.target;
                        if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                            for (; u !== this; u = u.parentNode || this)
                                if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                                    for (s = [], o = {}, n = 0; n < l; n++) void 0 === o[r = (i = e[n]).selector + " "] && (o[r] = i.needsContext ? T(r, this).index(u) > -1 : T.find(r, this, null, [u]).length), o[r] && s.push(i);
                                    s.length && a.push({
                                        elem: u,
                                        handlers: s
                                    })
                                }
                        return u = this, l < e.length && a.push({
                            elem: u,
                            handlers: e.slice(l)
                        }), a
                    },
                    addProp: function(t, e) {
                        Object.defineProperty(T.Event.prototype, t, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(e) ? function() {
                                if (this.originalEvent) return e(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[t]
                            },
                            set: function(e) {
                                Object.defineProperty(this, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: e
                                })
                            }
                        })
                    },
                    fix: function(t) {
                        return t[T.expando] ? t : new T.Event(t)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(t) {
                                var e = this || t;
                                return mt.test(e.type) && e.click && j(e, "input") && At(e, "click", Et), !1
                            },
                            trigger: function(t) {
                                var e = this || t;
                                return mt.test(e.type) && e.click && j(e, "input") && At(e, "click"), !0
                            },
                            _default: function(t) {
                                var e = t.target;
                                return mt.test(e.type) && e.click && j(e, "input") && J.get(e, "click") || j(e, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(t) {
                                void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                            }
                        }
                    }
                }, T.removeEvent = function(t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n)
                }, T.Event = function(t, e) {
                    if (!(this instanceof T.Event)) return new T.Event(t, e);
                    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Et : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
                }, T.Event.prototype = {
                    constructor: T.Event,
                    isDefaultPrevented: St,
                    isPropagationStopped: St,
                    isImmediatePropagationStopped: St,
                    isSimulated: !1,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        this.isDefaultPrevented = Et, t && !this.isSimulated && t.preventDefault()
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        this.isPropagationStopped = Et, t && !this.isSimulated && t.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        this.isImmediatePropagationStopped = Et, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, T.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, T.event.addProp), T.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(t, e) {
                    T.event.special[t] = {
                        setup: function() {
                            return At(this, t, Dt), !1
                        },
                        trigger: function() {
                            return At(this, t), !0
                        },
                        _default: function() {
                            return !0
                        },
                        delegateType: e
                    }
                })), T.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(t, e) {
                    T.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function(t) {
                            var n, i = this,
                                r = t.relatedTarget,
                                s = t.handleObj;
                            return r && (r === i || T.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                        }
                    }
                })), T.fn.extend({
                    on: function(t, e, n, i) {
                        return kt(this, t, e, n, i)
                    },
                    one: function(t, e, n, i) {
                        return kt(this, t, e, n, i, 1)
                    },
                    off: function(t, e, n) {
                        var i, r;
                        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof t) {
                            for (r in t) this.off(r, e, t[r]);
                            return this
                        }
                        return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each((function() {
                            T.event.remove(this, t, n, e)
                        }))
                    }
                });
                var jt = /<script|<style|<link/i,
                    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function Lt(t, e) {
                    return j(t, "table") && j(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
                }

                function qt(t) {
                    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                }

                function Ht(t) {
                    return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
                }

                function zt(t, e) {
                    var n, i, r, s, o, a;
                    if (1 === e.nodeType) {
                        if (J.hasData(t) && (a = J.get(t).events))
                            for (r in J.remove(e, "handle events"), a)
                                for (n = 0, i = a[r].length; n < i; n++) T.event.add(e, r, a[r][n]);
                        K.hasData(t) && (s = K.access(t), o = T.extend({}, s), K.set(e, o))
                    }
                }

                function Pt(t, e) {
                    var n = e.nodeName.toLowerCase();
                    "input" === n && mt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                }

                function Ot(t, e, n, i) {
                    e = l(e);
                    var r, s, o, a, u, c, h = 0,
                        p = t.length,
                        d = p - 1,
                        f = e[0],
                        g = v(f);
                    if (g || p > 1 && "string" == typeof f && !m.checkClone && Nt.test(f)) return t.each((function(r) {
                        var s = t.eq(r);
                        g && (e[0] = f.call(this, r, s.html())), Ot(s, e, n, i)
                    }));
                    if (p && (s = (r = Ct(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
                        for (a = (o = T.map(wt(r, "script"), qt)).length; h < p; h++) u = r, h !== d && (u = T.clone(u, !0, !0), a && T.merge(o, wt(u, "script"))), n.call(t[h], u, h);
                        if (a)
                            for (c = o[o.length - 1].ownerDocument, T.map(o, Ht), h = 0; h < a; h++) u = o[h], yt.test(u.type || "") && !J.access(u, "globalEval") && T.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
                                nonce: u.nonce || u.getAttribute("nonce")
                            }, c) : _(u.textContent.replace($t, ""), u, c))
                    }
                    return t
                }

                function Mt(t, e, n) {
                    for (var i, r = e ? T.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || T.cleanData(wt(i)), i.parentNode && (n && at(i) && _t(wt(i, "script")), i.parentNode.removeChild(i));
                    return t
                }
                T.extend({
                    htmlPrefilter: function(t) {
                        return t
                    },
                    clone: function(t, e, n) {
                        var i, r, s, o, a = t.cloneNode(!0),
                            l = at(t);
                        if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                            for (o = wt(a), i = 0, r = (s = wt(t)).length; i < r; i++) Pt(s[i], o[i]);
                        if (e)
                            if (n)
                                for (s = s || wt(t), o = o || wt(a), i = 0, r = s.length; i < r; i++) zt(s[i], o[i]);
                            else zt(t, a);
                        return (o = wt(a, "script")).length > 0 && _t(o, !l && wt(t, "script")), a
                    },
                    cleanData: function(t) {
                        for (var e, n, i, r = T.event.special, s = 0; void 0 !== (n = t[s]); s++)
                            if (Z(n)) {
                                if (e = n[J.expando]) {
                                    if (e.events)
                                        for (i in e.events) r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                                    n[J.expando] = void 0
                                }
                                n[K.expando] && (n[K.expando] = void 0)
                            }
                    }
                }), T.fn.extend({
                    detach: function(t) {
                        return Mt(this, t, !0)
                    },
                    remove: function(t) {
                        return Mt(this, t)
                    },
                    text: function(t) {
                        return U(this, (function(t) {
                            return void 0 === t ? T.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                            }))
                        }), null, t, arguments.length)
                    },
                    append: function() {
                        return Ot(this, arguments, (function(t) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t)
                        }))
                    },
                    prepend: function() {
                        return Ot(this, arguments, (function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = Lt(this, t);
                                e.insertBefore(t, e.firstChild)
                            }
                        }))
                    },
                    before: function() {
                        return Ot(this, arguments, (function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this)
                        }))
                    },
                    after: function() {
                        return Ot(this, arguments, (function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                        }))
                    },
                    empty: function() {
                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(wt(t, !1)), t.textContent = "");
                        return this
                    },
                    clone: function(t, e) {
                        return t = null != t && t, e = null == e ? t : e, this.map((function() {
                            return T.clone(this, t, e)
                        }))
                    },
                    html: function(t) {
                        return U(this, (function(t) {
                            var e = this[0] || {},
                                n = 0,
                                i = this.length;
                            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                            if ("string" == typeof t && !jt.test(t) && !xt[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = T.htmlPrefilter(t);
                                try {
                                    for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(wt(e, !1)), e.innerHTML = t);
                                    e = 0
                                } catch (t) {}
                            }
                            e && this.empty().append(t)
                        }), null, t, arguments.length)
                    },
                    replaceWith: function() {
                        var t = [];
                        return Ot(this, arguments, (function(e) {
                            var n = this.parentNode;
                            T.inArray(this, t) < 0 && (T.cleanData(wt(this)), n && n.replaceChild(e, this))
                        }), t)
                    }
                }), T.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(t, e) {
                    T.fn[t] = function(t) {
                        for (var n, i = [], r = T(t), s = r.length - 1, o = 0; o <= s; o++) n = o === s ? this : this.clone(!0), T(r[o])[e](n), u.apply(i, n.get());
                        return this.pushStack(i)
                    }
                }));
                var Rt = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
                    It = function(t) {
                        var e = t.ownerDocument.defaultView;
                        return e && e.opener || (e = i), e.getComputedStyle(t)
                    },
                    Wt = function(t, e, n) {
                        var i, r, s = {};
                        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                        for (r in i = n.call(t), e) t.style[r] = s[r];
                        return i
                    },
                    Bt = new RegExp(st.join("|"), "i");

                function Ft(t, e, n) {
                    var i, r, s, o, a = t.style;
                    return (n = n || It(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || at(t) || (o = T.style(t, e)), !m.pixelBoxStyles() && Rt.test(o) && Bt.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
                }

                function Ut(t, e) {
                    return {
                        get: function() {
                            if (!t()) return (this.get = e).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function t() {
                        if (c) {
                            u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ot.appendChild(u).appendChild(c);
                            var t = i.getComputedStyle(c);
                            n = "1%" !== t.top, l = 12 === e(t.marginLeft), c.style.right = "60%", o = 36 === e(t.right), r = 36 === e(t.width), c.style.position = "absolute", s = 12 === e(c.offsetWidth / 3), ot.removeChild(u), c = null
                        }
                    }

                    function e(t) {
                        return Math.round(parseFloat(t))
                    }
                    var n, r, s, o, a, l, u = x.createElement("div"),
                        c = x.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(m, {
                        boxSizingReliable: function() {
                            return t(), r
                        },
                        pixelBoxStyles: function() {
                            return t(), o
                        },
                        pixelPosition: function() {
                            return t(), n
                        },
                        reliableMarginLeft: function() {
                            return t(), l
                        },
                        scrollboxSize: function() {
                            return t(), s
                        },
                        reliableTrDimensions: function() {
                            var t, e, n, r;
                            return null == a && (t = x.createElement("table"), e = x.createElement("tr"), n = x.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "border:1px solid", e.style.height = "1px", n.style.height = "9px", n.style.display = "block", ot.appendChild(t).appendChild(e).appendChild(n), r = i.getComputedStyle(e), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === e.offsetHeight, ot.removeChild(t)), a
                        }
                    }))
                }();
                var Xt = ["Webkit", "Moz", "ms"],
                    Vt = x.createElement("div").style,
                    Gt = {};

                function Yt(t) {
                    return T.cssProps[t] || Gt[t] || (t in Vt ? t : Gt[t] = function(t) {
                        for (var e = t[0].toUpperCase() + t.slice(1), n = Xt.length; n--;)
                            if ((t = Xt[n] + e) in Vt) return t
                    }(t) || t)
                }
                var Zt = /^(none|table(?!-c[ea]).+)/,
                    Qt = /^--/,
                    Jt = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    Kt = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function te(t, e, n) {
                    var i = rt.exec(e);
                    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
                }

                function ee(t, e, n, i, r, s) {
                    var o = "width" === e ? 1 : 0,
                        a = 0,
                        l = 0;
                    if (n === (i ? "border" : "content")) return 0;
                    for (; o < 4; o += 2) "margin" === n && (l += T.css(t, n + st[o], !0, r)), i ? ("content" === n && (l -= T.css(t, "padding" + st[o], !0, r)), "margin" !== n && (l -= T.css(t, "border" + st[o] + "Width", !0, r))) : (l += T.css(t, "padding" + st[o], !0, r), "padding" !== n ? l += T.css(t, "border" + st[o] + "Width", !0, r) : a += T.css(t, "border" + st[o] + "Width", !0, r));
                    return !i && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5)) || 0), l
                }

                function ne(t, e, n) {
                    var i = It(t),
                        r = (!m.boxSizingReliable() || n) && "border-box" === T.css(t, "boxSizing", !1, i),
                        s = r,
                        o = Ft(t, e, i),
                        a = "offset" + e[0].toUpperCase() + e.slice(1);
                    if (Rt.test(o)) {
                        if (!n) return o;
                        o = "auto"
                    }
                    return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && j(t, "tr") || "auto" === o || !parseFloat(o) && "inline" === T.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === T.css(t, "boxSizing", !1, i), (s = a in t) && (o = t[a])), (o = parseFloat(o) || 0) + ee(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
                }

                function ie(t, e, n, i, r) {
                    return new ie.prototype.init(t, e, n, i, r)
                }
                T.extend({
                    cssHooks: {
                        opacity: {
                            get: function(t, e) {
                                if (e) {
                                    var n = Ft(t, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(t, e, n, i) {
                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                            var r, s, o, a = Y(e),
                                l = Qt.test(e),
                                u = t.style;
                            if (l || (e = Yt(a)), o = T.cssHooks[e] || T.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : u[e];
                            "string" == (s = typeof n) && (r = rt.exec(n)) && r[1] && (n = ct(t, e, r), s = "number"), null != n && n == n && ("number" !== s || l || (n += r && r[3] || (T.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
                        }
                    },
                    css: function(t, e, n, i) {
                        var r, s, o, a = Y(e);
                        return Qt.test(e) || (e = Yt(a)), (o = T.cssHooks[e] || T.cssHooks[a]) && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = Ft(t, e, i)), "normal" === r && e in Kt && (r = Kt[e]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
                    }
                }), T.each(["height", "width"], (function(t, e) {
                    T.cssHooks[e] = {
                        get: function(t, n, i) {
                            if (n) return !Zt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, i) : Wt(t, Jt, (function() {
                                return ne(t, e, i)
                            }))
                        },
                        set: function(t, n, i) {
                            var r, s = It(t),
                                o = !m.scrollboxSize() && "absolute" === s.position,
                                a = (o || i) && "border-box" === T.css(t, "boxSizing", !1, s),
                                l = i ? ee(t, e, i, a, s) : 0;
                            return a && o && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - ee(t, e, "border", !1, s) - .5)), l && (r = rt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = T.css(t, e)), te(0, n, l)
                        }
                    }
                })), T.cssHooks.marginLeft = Ut(m.reliableMarginLeft, (function(t, e) {
                    if (e) return (parseFloat(Ft(t, "marginLeft")) || t.getBoundingClientRect().left - Wt(t, {
                        marginLeft: 0
                    }, (function() {
                        return t.getBoundingClientRect().left
                    }))) + "px"
                })), T.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(t, e) {
                    T.cssHooks[t + e] = {
                        expand: function(n) {
                            for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + st[i] + e] = s[i] || s[i - 2] || s[0];
                            return r
                        }
                    }, "margin" !== t && (T.cssHooks[t + e].set = te)
                })), T.fn.extend({
                    css: function(t, e) {
                        return U(this, (function(t, e, n) {
                            var i, r, s = {},
                                o = 0;
                            if (Array.isArray(e)) {
                                for (i = It(t), r = e.length; o < r; o++) s[e[o]] = T.css(t, e[o], !1, i);
                                return s
                            }
                            return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
                        }), t, e, arguments.length > 1)
                    }
                }), T.Tween = ie, ie.prototype = {
                    constructor: ie,
                    init: function(t, e, n, i, r, s) {
                        this.elem = t, this.prop = n, this.easing = r || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (T.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var t = ie.propHooks[this.prop];
                        return t && t.get ? t.get(this) : ie.propHooks._default.get(this)
                    },
                    run: function(t) {
                        var e, n = ie.propHooks[this.prop];
                        return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ie.propHooks._default.set(this), this
                    }
                }, ie.prototype.init.prototype = ie.prototype, ie.propHooks = {
                    _default: {
                        get: function(t) {
                            var e;
                            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                        },
                        set: function(t) {
                            T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[Yt(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
                        }
                    }
                }, ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
                    set: function(t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                    }
                }, T.easing = {
                    linear: function(t) {
                        return t
                    },
                    swing: function(t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    _default: "swing"
                }, T.fx = ie.prototype.init, T.fx.step = {};
                var re, se, oe = /^(?:toggle|show|hide)$/,
                    ae = /queueHooks$/;

                function le() {
                    se && (!1 === x.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(le) : i.setTimeout(le, T.fx.interval), T.fx.tick())
                }

                function ue() {
                    return i.setTimeout((function() {
                        re = void 0
                    })), re = Date.now()
                }

                function ce(t, e) {
                    var n, i = 0,
                        r = {
                            height: t
                        };
                    for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = st[i])] = r["padding" + n] = t;
                    return e && (r.opacity = r.width = t), r
                }

                function he(t, e, n) {
                    for (var i, r = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), s = 0, o = r.length; s < o; s++)
                        if (i = r[s].call(n, e, t)) return i
                }

                function pe(t, e, n) {
                    var i, r, s = 0,
                        o = pe.prefilters.length,
                        a = T.Deferred().always((function() {
                            delete l.elem
                        })),
                        l = function() {
                            if (r) return !1;
                            for (var e = re || ue(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), s = 0, o = u.tweens.length; s < o; s++) u.tweens[s].run(i);
                            return a.notifyWith(t, [u, i, n]), i < 1 && o ? n : (o || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
                        },
                        u = a.promise({
                            elem: t,
                            props: T.extend({}, e),
                            opts: T.extend(!0, {
                                specialEasing: {},
                                easing: T.easing._default
                            }, n),
                            originalProperties: e,
                            originalOptions: n,
                            startTime: re || ue(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(e, n) {
                                var i = T.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                                return u.tweens.push(i), i
                            },
                            stop: function(e) {
                                var n = 0,
                                    i = e ? u.tweens.length : 0;
                                if (r) return this;
                                for (r = !0; n < i; n++) u.tweens[n].run(1);
                                return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                            }
                        }),
                        c = u.props;
                    for (function(t, e) {
                            var n, i, r, s, o;
                            for (n in t)
                                if (r = e[i = Y(n)], s = t[n], Array.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), (o = T.cssHooks[i]) && "expand" in o)
                                    for (n in s = o.expand(s), delete t[i], s) n in t || (t[n] = s[n], e[n] = r);
                                else e[i] = r
                        }(c, u.opts.specialEasing); s < o; s++)
                        if (i = pe.prefilters[s].call(u, t, c, u.opts)) return v(i.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
                    return T.map(c, he, u), v(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
                        elem: t,
                        anim: u,
                        queue: u.opts.queue
                    })), u
                }
                T.Animation = T.extend(pe, {
                        tweeners: {
                            "*": [function(t, e) {
                                var n = this.createTween(t, e);
                                return ct(n.elem, t, rt.exec(e), n), n
                            }]
                        },
                        tweener: function(t, e) {
                            v(t) ? (e = t, t = ["*"]) : t = t.match(O);
                            for (var n, i = 0, r = t.length; i < r; i++) n = t[i], pe.tweeners[n] = pe.tweeners[n] || [], pe.tweeners[n].unshift(e)
                        },
                        prefilters: [function(t, e, n) {
                            var i, r, s, o, a, l, u, c, h = "width" in e || "height" in e,
                                p = this,
                                d = {},
                                f = t.style,
                                g = t.nodeType && ut(t),
                                m = J.get(t, "fxshow");
                            for (i in n.queue || (null == (o = T._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function() {
                                    o.unqueued || a()
                                }), o.unqueued++, p.always((function() {
                                    p.always((function() {
                                        o.unqueued--, T.queue(t, "fx").length || o.empty.fire()
                                    }))
                                }))), e)
                                if (r = e[i], oe.test(r)) {
                                    if (delete e[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
                                        if ("show" !== r || !m || void 0 === m[i]) continue;
                                        g = !0
                                    }
                                    d[i] = m && m[i] || T.style(t, i)
                                }
                            if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(d))
                                for (i in h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = m && m.display) && (u = J.get(t, "display")), "none" === (c = T.css(t, "display")) && (u ? c = u : (dt([t], !0), u = t.style.display || u, c = T.css(t, "display"), dt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(t, "float") && (l || (p.done((function() {
                                        f.display = u
                                    })), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always((function() {
                                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                                    }))), l = !1, d) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(t, "fxshow", {
                                    display: u
                                }), s && (m.hidden = !g), g && dt([t], !0), p.done((function() {
                                    for (i in g || dt([t]), J.remove(t, "fxshow"), d) T.style(t, i, d[i])
                                }))), l = he(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                        }],
                        prefilter: function(t, e) {
                            e ? pe.prefilters.unshift(t) : pe.prefilters.push(t)
                        }
                    }), T.speed = function(t, e, n) {
                        var i = t && "object" == typeof t ? T.extend({}, t) : {
                            complete: n || !n && e || v(t) && t,
                            duration: t,
                            easing: n && e || e && !v(e) && e
                        };
                        return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                            v(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
                        }, i
                    }, T.fn.extend({
                        fadeTo: function(t, e, n, i) {
                            return this.filter(ut).css("opacity", 0).show().end().animate({
                                opacity: e
                            }, t, n, i)
                        },
                        animate: function(t, e, n, i) {
                            var r = T.isEmptyObject(t),
                                s = T.speed(e, n, i),
                                o = function() {
                                    var e = pe(this, T.extend({}, t), s);
                                    (r || J.get(this, "finish")) && e.stop(!0)
                                };
                            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                        },
                        stop: function(t, e, n) {
                            var i = function(t) {
                                var e = t.stop;
                                delete t.stop, e(n)
                            };
                            return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                                var e = !0,
                                    r = null != t && t + "queueHooks",
                                    s = T.timers,
                                    o = J.get(this);
                                if (r) o[r] && o[r].stop && i(o[r]);
                                else
                                    for (r in o) o[r] && o[r].stop && ae.test(r) && i(o[r]);
                                for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                                !e && n || T.dequeue(this, t)
                            }))
                        },
                        finish: function(t) {
                            return !1 !== t && (t = t || "fx"), this.each((function() {
                                var e, n = J.get(this),
                                    i = n[t + "queue"],
                                    r = n[t + "queueHooks"],
                                    s = T.timers,
                                    o = i ? i.length : 0;
                                for (n.finish = !0, T.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                                for (e = 0; e < o; e++) i[e] && i[e].finish && i[e].finish.call(this);
                                delete n.finish
                            }))
                        }
                    }), T.each(["toggle", "show", "hide"], (function(t, e) {
                        var n = T.fn[e];
                        T.fn[e] = function(t, i, r) {
                            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ce(e, !0), t, i, r)
                        }
                    })), T.each({
                        slideDown: ce("show"),
                        slideUp: ce("hide"),
                        slideToggle: ce("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, (function(t, e) {
                        T.fn[t] = function(t, n, i) {
                            return this.animate(e, t, n, i)
                        }
                    })), T.timers = [], T.fx.tick = function() {
                        var t, e = 0,
                            n = T.timers;
                        for (re = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                        n.length || T.fx.stop(), re = void 0
                    }, T.fx.timer = function(t) {
                        T.timers.push(t), T.fx.start()
                    }, T.fx.interval = 13, T.fx.start = function() {
                        se || (se = !0, le())
                    }, T.fx.stop = function() {
                        se = null
                    }, T.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, T.fn.delay = function(t, e) {
                        return t = T.fx && T.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, n) {
                            var r = i.setTimeout(e, t);
                            n.stop = function() {
                                i.clearTimeout(r)
                            }
                        }))
                    },
                    function() {
                        var t = x.createElement("input"),
                            e = x.createElement("select").appendChild(x.createElement("option"));
                        t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = x.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
                    }();
                var de, fe = T.expr.attrHandle;
                T.fn.extend({
                    attr: function(t, e) {
                        return U(this, T.attr, t, e, arguments.length > 1)
                    },
                    removeAttr: function(t) {
                        return this.each((function() {
                            T.removeAttr(this, t)
                        }))
                    }
                }), T.extend({
                    attr: function(t, e, n) {
                        var i, r, s = t.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === s && T.isXMLDoc(t) || (r = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? de : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i)
                    },
                    attrHooks: {
                        type: {
                            set: function(t, e) {
                                if (!m.radioValue && "radio" === e && j(t, "input")) {
                                    var n = t.value;
                                    return t.setAttribute("type", e), n && (t.value = n), e
                                }
                            }
                        }
                    },
                    removeAttr: function(t, e) {
                        var n, i = 0,
                            r = e && e.match(O);
                        if (r && 1 === t.nodeType)
                            for (; n = r[i++];) t.removeAttribute(n)
                    }
                }), de = {
                    set: function(t, e, n) {
                        return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n
                    }
                }, T.each(T.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                    var n = fe[e] || T.find.attr;
                    fe[e] = function(t, e, i) {
                        var r, s, o = e.toLowerCase();
                        return i || (s = fe[o], fe[o] = r, r = null != n(t, e, i) ? o : null, fe[o] = s), r
                    }
                }));
                var ge = /^(?:input|select|textarea|button)$/i,
                    me = /^(?:a|area)$/i;

                function ve(t) {
                    return (t.match(O) || []).join(" ")
                }

                function ye(t) {
                    return t.getAttribute && t.getAttribute("class") || ""
                }

                function xe(t) {
                    return Array.isArray(t) ? t : "string" == typeof t && t.match(O) || []
                }
                T.fn.extend({
                    prop: function(t, e) {
                        return U(this, T.prop, t, e, arguments.length > 1)
                    },
                    removeProp: function(t) {
                        return this.each((function() {
                            delete this[T.propFix[t] || t]
                        }))
                    }
                }), T.extend({
                    prop: function(t, e, n) {
                        var i, r, s = t.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s) return 1 === s && T.isXMLDoc(t) || (e = T.propFix[e] || e, r = T.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(t) {
                                var e = T.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : ge.test(t.nodeName) || me.test(t.nodeName) && t.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), m.optSelected || (T.propHooks.selected = {
                    get: function(t) {
                        var e = t.parentNode;
                        return e && e.parentNode && e.parentNode.selectedIndex, null
                    },
                    set: function(t) {
                        var e = t.parentNode;
                        e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                    }
                }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    T.propFix[this.toLowerCase()] = this
                })), T.fn.extend({
                    addClass: function(t) {
                        var e, n, i, r, s, o, a, l = 0;
                        if (v(t)) return this.each((function(e) {
                            T(this).addClass(t.call(this, e, ye(this)))
                        }));
                        if ((e = xe(t)).length)
                            for (; n = this[l++];)
                                if (r = ye(n), i = 1 === n.nodeType && " " + ve(r) + " ") {
                                    for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                                    r !== (a = ve(i)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    removeClass: function(t) {
                        var e, n, i, r, s, o, a, l = 0;
                        if (v(t)) return this.each((function(e) {
                            T(this).removeClass(t.call(this, e, ye(this)))
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = xe(t)).length)
                            for (; n = this[l++];)
                                if (r = ye(n), i = 1 === n.nodeType && " " + ve(r) + " ") {
                                    for (o = 0; s = e[o++];)
                                        for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                                    r !== (a = ve(i)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    toggleClass: function(t, e) {
                        var n = typeof t,
                            i = "string" === n || Array.isArray(t);
                        return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each((function(n) {
                            T(this).toggleClass(t.call(this, n, ye(this), e), e)
                        })) : this.each((function() {
                            var e, r, s, o;
                            if (i)
                                for (r = 0, s = T(this), o = xe(t); e = o[r++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                            else void 0 !== t && "boolean" !== n || ((e = ye(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(t) {
                        var e, n, i = 0;
                        for (e = " " + t + " "; n = this[i++];)
                            if (1 === n.nodeType && (" " + ve(ye(n)) + " ").indexOf(e) > -1) return !0;
                        return !1
                    }
                });
                var we = /\r/g;
                T.fn.extend({
                    val: function(t) {
                        var e, n, i, r = this[0];
                        return arguments.length ? (i = v(t), this.each((function(n) {
                            var r;
                            1 === this.nodeType && (null == (r = i ? t.call(this, n, T(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = T.map(r, (function(t) {
                                return null == t ? "" : t + ""
                            }))), (e = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                        }))) : r ? (e = T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(we, "") : null == n ? "" : n : void 0
                    }
                }), T.extend({
                    valHooks: {
                        option: {
                            get: function(t) {
                                var e = T.find.attr(t, "value");
                                return null != e ? e : ve(T.text(t))
                            }
                        },
                        select: {
                            get: function(t) {
                                var e, n, i, r = t.options,
                                    s = t.selectedIndex,
                                    o = "select-one" === t.type,
                                    a = o ? null : [],
                                    l = o ? s + 1 : r.length;
                                for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                                    if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                        if (e = T(n).val(), o) return e;
                                        a.push(e)
                                    }
                                return a
                            },
                            set: function(t, e) {
                                for (var n, i, r = t.options, s = T.makeArray(e), o = r.length; o--;)((i = r[o]).selected = T.inArray(T.valHooks.option.get(i), s) > -1) && (n = !0);
                                return n || (t.selectedIndex = -1), s
                            }
                        }
                    }
                }), T.each(["radio", "checkbox"], (function() {
                    T.valHooks[this] = {
                        set: function(t, e) {
                            if (Array.isArray(e)) return t.checked = T.inArray(T(t).val(), e) > -1
                        }
                    }, m.checkOn || (T.valHooks[this].get = function(t) {
                        return null === t.getAttribute("value") ? "on" : t.value
                    })
                })), m.focusin = "onfocusin" in i;
                var _e = /^(?:focusinfocus|focusoutblur)$/,
                    be = function(t) {
                        t.stopPropagation()
                    };
                T.extend(T.event, {
                    trigger: function(t, e, n, r) {
                        var s, o, a, l, u, c, h, p, f = [n || x],
                            g = d.call(t, "type") ? t.type : t,
                            m = d.call(t, "namespace") ? t.namespace.split(".") : [];
                        if (o = p = a = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !_e.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[T.expando] ? t : new T.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), h = T.event.special[g] || {}, r || !h.trigger || !1 !== h.trigger.apply(n, e))) {
                            if (!r && !h.noBubble && !y(n)) {
                                for (l = h.delegateType || g, _e.test(l + g) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                                a === (n.ownerDocument || x) && f.push(a.defaultView || a.parentWindow || i)
                            }
                            for (s = 0;
                                (o = f[s++]) && !t.isPropagationStopped();) p = o, t.type = s > 1 ? l : h.bindType || g, (c = (J.get(o, "events") || Object.create(null))[t.type] && J.get(o, "handle")) && c.apply(o, e), (c = u && o[u]) && c.apply && Z(o) && (t.result = c.apply(o, e), !1 === t.result && t.preventDefault());
                            return t.type = g, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(f.pop(), e) || !Z(n) || u && v(n[g]) && !y(n) && ((a = n[u]) && (n[u] = null), T.event.triggered = g, t.isPropagationStopped() && p.addEventListener(g, be), n[g](), t.isPropagationStopped() && p.removeEventListener(g, be), T.event.triggered = void 0, a && (n[u] = a)), t.result
                        }
                    },
                    simulate: function(t, e, n) {
                        var i = T.extend(new T.Event, n, {
                            type: t,
                            isSimulated: !0
                        });
                        T.event.trigger(i, null, e)
                    }
                }), T.fn.extend({
                    trigger: function(t, e) {
                        return this.each((function() {
                            T.event.trigger(t, e, this)
                        }))
                    },
                    triggerHandler: function(t, e) {
                        var n = this[0];
                        if (n) return T.event.trigger(t, e, n, !0)
                    }
                }), m.focusin || T.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(t, e) {
                    var n = function(t) {
                        T.event.simulate(e, t.target, T.event.fix(t))
                    };
                    T.event.special[e] = {
                        setup: function() {
                            var i = this.ownerDocument || this.document || this,
                                r = J.access(i, e);
                            r || i.addEventListener(t, n, !0), J.access(i, e, (r || 0) + 1)
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this.document || this,
                                r = J.access(i, e) - 1;
                            r ? J.access(i, e, r) : (i.removeEventListener(t, n, !0), J.remove(i, e))
                        }
                    }
                }));
                var Ce = i.location,
                    Te = {
                        guid: Date.now()
                    },
                    Ee = /\?/;
                T.parseXML = function(t) {
                    var e, n;
                    if (!t || "string" != typeof t) return null;
                    try {
                        e = (new i.DOMParser).parseFromString(t, "text/xml")
                    } catch (t) {}
                    return n = e && e.getElementsByTagName("parsererror")[0], e && !n || T.error("Invalid XML: " + (n ? T.map(n.childNodes, (function(t) {
                        return t.textContent
                    })).join("\n") : t)), e
                };
                var Se = /\[\]$/,
                    De = /\r?\n/g,
                    ke = /^(?:submit|button|image|reset|file)$/i,
                    Ae = /^(?:input|select|textarea|keygen)/i;

                function je(t, e, n, i) {
                    var r;
                    if (Array.isArray(e)) T.each(e, (function(e, r) {
                        n || Se.test(t) ? i(t, r) : je(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
                    }));
                    else if (n || "object" !== b(e)) i(t, e);
                    else
                        for (r in e) je(t + "[" + r + "]", e[r], n, i)
                }
                T.param = function(t, e) {
                    var n, i = [],
                        r = function(t, e) {
                            var n = v(e) ? e() : e;
                            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == t) return "";
                    if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, (function() {
                        r(this.name, this.value)
                    }));
                    else
                        for (n in t) je(n, t[n], e, r);
                    return i.join("&")
                }, T.fn.extend({
                    serialize: function() {
                        return T.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var t = T.prop(this, "elements");
                            return t ? T.makeArray(t) : this
                        })).filter((function() {
                            var t = this.type;
                            return this.name && !T(this).is(":disabled") && Ae.test(this.nodeName) && !ke.test(t) && (this.checked || !mt.test(t))
                        })).map((function(t, e) {
                            var n = T(this).val();
                            return null == n ? null : Array.isArray(n) ? T.map(n, (function(t) {
                                return {
                                    name: e.name,
                                    value: t.replace(De, "\r\n")
                                }
                            })) : {
                                name: e.name,
                                value: n.replace(De, "\r\n")
                            }
                        })).get()
                    }
                });
                var Ne = /%20/g,
                    $e = /#.*$/,
                    Le = /([?&])_=[^&]*/,
                    qe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    He = /^(?:GET|HEAD)$/,
                    ze = /^\/\//,
                    Pe = {},
                    Oe = {},
                    Me = "*/".concat("*"),
                    Re = x.createElement("a");

                function Ie(t) {
                    return function(e, n) {
                        "string" != typeof e && (n = e, e = "*");
                        var i, r = 0,
                            s = e.toLowerCase().match(O) || [];
                        if (v(n))
                            for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                    }
                }

                function We(t, e, n, i) {
                    var r = {},
                        s = t === Oe;

                    function o(a) {
                        var l;
                        return r[a] = !0, T.each(t[a] || [], (function(t, a) {
                            var u = a(e, n, i);
                            return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                        })), l
                    }
                    return o(e.dataTypes[0]) || !r["*"] && o("*")
                }

                function Be(t, e) {
                    var n, i, r = T.ajaxSettings.flatOptions || {};
                    for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                    return i && T.extend(!0, t, i), t
                }
                Re.href = Ce.href, T.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Ce.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Me,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": T.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(t, e) {
                        return e ? Be(Be(t, T.ajaxSettings), e) : Be(T.ajaxSettings, t)
                    },
                    ajaxPrefilter: Ie(Pe),
                    ajaxTransport: Ie(Oe),
                    ajax: function(t, e) {
                        "object" == typeof t && (e = t, t = void 0), e = e || {};
                        var n, r, s, o, a, l, u, c, h, p, d = T.ajaxSetup({}, e),
                            f = d.context || d,
                            g = d.context && (f.nodeType || f.jquery) ? T(f) : T.event,
                            m = T.Deferred(),
                            v = T.Callbacks("once memory"),
                            y = d.statusCode || {},
                            w = {},
                            _ = {},
                            b = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function(t) {
                                    var e;
                                    if (u) {
                                        if (!o)
                                            for (o = {}; e = qe.exec(s);) o[e[1].toLowerCase() + " "] = (o[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                        e = o[t.toLowerCase() + " "]
                                    }
                                    return null == e ? null : e.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return u ? s : null
                                },
                                setRequestHeader: function(t, e) {
                                    return null == u && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t, w[t] = e), this
                                },
                                overrideMimeType: function(t) {
                                    return null == u && (d.mimeType = t), this
                                },
                                statusCode: function(t) {
                                    var e;
                                    if (t)
                                        if (u) C.always(t[C.status]);
                                        else
                                            for (e in t) y[e] = [y[e], t[e]];
                                    return this
                                },
                                abort: function(t) {
                                    var e = t || b;
                                    return n && n.abort(e), E(0, e), this
                                }
                            };
                        if (m.promise(C), d.url = ((t || d.url || Ce.href) + "").replace(ze, Ce.protocol + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(O) || [""], null == d.crossDomain) {
                            l = x.createElement("a");
                            try {
                                l.href = d.url, l.href = l.href, d.crossDomain = Re.protocol + "//" + Re.host != l.protocol + "//" + l.host
                            } catch (t) {
                                d.crossDomain = !0
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = T.param(d.data, d.traditional)), We(Pe, d, e, C), u) return C;
                        for (h in (c = T.event && d.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !He.test(d.type), r = d.url.replace($e, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Ne, "+")) : (p = d.url.slice(r.length), d.data && (d.processData || "string" == typeof d.data) && (r += (Ee.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (r = r.replace(Le, "$1"), p = (Ee.test(r) ? "&" : "?") + "_=" + Te.guid++ + p), d.url = r + p), d.ifModified && (T.lastModified[r] && C.setRequestHeader("If-Modified-Since", T.lastModified[r]), T.etag[r] && C.setRequestHeader("If-None-Match", T.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : d.accepts["*"]), d.headers) C.setRequestHeader(h, d.headers[h]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(f, C, d) || u)) return C.abort();
                        if (b = "abort", v.add(d.complete), C.done(d.success), C.fail(d.error), n = We(Oe, d, e, C)) {
                            if (C.readyState = 1, c && g.trigger("ajaxSend", [C, d]), u) return C;
                            d.async && d.timeout > 0 && (a = i.setTimeout((function() {
                                C.abort("timeout")
                            }), d.timeout));
                            try {
                                u = !1, n.send(w, E)
                            } catch (t) {
                                if (u) throw t;
                                E(-1, t)
                            }
                        } else E(-1, "No Transport");

                        function E(t, e, o, l) {
                            var h, p, x, w, _, b = e;
                            u || (u = !0, a && i.clearTimeout(a), n = void 0, s = l || "", C.readyState = t > 0 ? 4 : 0, h = t >= 200 && t < 300 || 304 === t, o && (w = function(t, e, n) {
                                for (var i, r, s, o, a = t.contents, l = t.dataTypes;
                                    "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) {
                                            l.unshift(r);
                                            break
                                        }
                                if (l[0] in n) s = l[0];
                                else {
                                    for (r in n) {
                                        if (!l[0] || t.converters[r + " " + l[0]]) {
                                            s = r;
                                            break
                                        }
                                        o || (o = r)
                                    }
                                    s = s || o
                                }
                                if (s) return s !== l[0] && l.unshift(s), n[s]
                            }(d, C, o)), !h && T.inArray("script", d.dataTypes) > -1 && T.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), w = function(t, e, n, i) {
                                var r, s, o, a, l, u = {},
                                    c = t.dataTypes.slice();
                                if (c[1])
                                    for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
                                for (s = c.shift(); s;)
                                    if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                                        if ("*" === s) s = l;
                                        else if ("*" !== l && l !== s) {
                                    if (!(o = u[l + " " + s] || u["* " + s]))
                                        for (r in u)
                                            if ((a = r.split(" "))[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                !0 === o ? o = u[r] : !0 !== u[r] && (s = a[0], c.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== o)
                                        if (o && t.throws) e = o(e);
                                        else try {
                                            e = o(e)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: o ? t : "No conversion from " + l + " to " + s
                                            }
                                        }
                                }
                                return {
                                    state: "success",
                                    data: e
                                }
                            }(d, w, C, h), h ? (d.ifModified && ((_ = C.getResponseHeader("Last-Modified")) && (T.lastModified[r] = _), (_ = C.getResponseHeader("etag")) && (T.etag[r] = _)), 204 === t || "HEAD" === d.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = w.state, p = w.data, h = !(x = w.error))) : (x = b, !t && b || (b = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || b) + "", h ? m.resolveWith(f, [p, b, C]) : m.rejectWith(f, [C, b, x]), C.statusCode(y), y = void 0, c && g.trigger(h ? "ajaxSuccess" : "ajaxError", [C, d, h ? p : x]), v.fireWith(f, [C, b]), c && (g.trigger("ajaxComplete", [C, d]), --T.active || T.event.trigger("ajaxStop")))
                        }
                        return C
                    },
                    getJSON: function(t, e, n) {
                        return T.get(t, e, n, "json")
                    },
                    getScript: function(t, e) {
                        return T.get(t, void 0, e, "script")
                    }
                }), T.each(["get", "post"], (function(t, e) {
                    T[e] = function(t, n, i, r) {
                        return v(n) && (r = r || i, i = n, n = void 0), T.ajax(T.extend({
                            url: t,
                            type: e,
                            dataType: r,
                            data: n,
                            success: i
                        }, T.isPlainObject(t) && t))
                    }
                })), T.ajaxPrefilter((function(t) {
                    var e;
                    for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
                })), T._evalUrl = function(t, e, n) {
                    return T.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(t) {
                            T.globalEval(t, e, n)
                        }
                    })
                }, T.fn.extend({
                    wrapAll: function(t) {
                        var e;
                        return this[0] && (v(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                            for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                            return t
                        })).append(this)), this
                    },
                    wrapInner: function(t) {
                        return v(t) ? this.each((function(e) {
                            T(this).wrapInner(t.call(this, e))
                        })) : this.each((function() {
                            var e = T(this),
                                n = e.contents();
                            n.length ? n.wrapAll(t) : e.append(t)
                        }))
                    },
                    wrap: function(t) {
                        var e = v(t);
                        return this.each((function(n) {
                            T(this).wrapAll(e ? t.call(this, n) : t)
                        }))
                    },
                    unwrap: function(t) {
                        return this.parent(t).not("body").each((function() {
                            T(this).replaceWith(this.childNodes)
                        })), this
                    }
                }), T.expr.pseudos.hidden = function(t) {
                    return !T.expr.pseudos.visible(t)
                }, T.expr.pseudos.visible = function(t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                }, T.ajaxSettings.xhr = function() {
                    try {
                        return new i.XMLHttpRequest
                    } catch (t) {}
                };
                var Fe = {
                        0: 200,
                        1223: 204
                    },
                    Ue = T.ajaxSettings.xhr();
                m.cors = !!Ue && "withCredentials" in Ue, m.ajax = Ue = !!Ue, T.ajaxTransport((function(t) {
                    var e, n;
                    if (m.cors || Ue && !t.crossDomain) return {
                        send: function(r, s) {
                            var o, a = t.xhr();
                            if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                for (o in t.xhrFields) a[o] = t.xhrFields[o];
                            for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(o, r[o]);
                            e = function(t) {
                                return function() {
                                    e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()))
                                }
                            }, a.onload = e(), n = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                4 === a.readyState && i.setTimeout((function() {
                                    e && n()
                                }))
                            }, e = e("abort");
                            try {
                                a.send(t.hasContent && t.data || null)
                            } catch (t) {
                                if (e) throw t
                            }
                        },
                        abort: function() {
                            e && e()
                        }
                    }
                })), T.ajaxPrefilter((function(t) {
                    t.crossDomain && (t.contents.script = !1)
                })), T.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(t) {
                            return T.globalEval(t), t
                        }
                    }
                }), T.ajaxPrefilter("script", (function(t) {
                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                })), T.ajaxTransport("script", (function(t) {
                    var e, n;
                    if (t.crossDomain || t.scriptAttrs) return {
                        send: function(i, r) {
                            e = T("<script>").attr(t.scriptAttrs || {}).prop({
                                charset: t.scriptCharset,
                                src: t.url
                            }).on("load error", n = function(t) {
                                e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                            }), x.head.appendChild(e[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }));
                var Xe, Ve = [],
                    Ge = /(=)\?(?=&|$)|\?\?/;
                T.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var t = Ve.pop() || T.expando + "_" + Te.guid++;
                        return this[t] = !0, t
                    }
                }), T.ajaxPrefilter("json jsonp", (function(t, e, n) {
                    var r, s, o, a = !1 !== t.jsonp && (Ge.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(t.data) && "data");
                    if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ge, "$1" + r) : !1 !== t.jsonp && (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                        return o || T.error(r + " was not called"), o[0]
                    }, t.dataTypes[0] = "json", s = i[r], i[r] = function() {
                        o = arguments
                    }, n.always((function() {
                        void 0 === s ? T(i).removeProp(r) : i[r] = s, t[r] && (t.jsonpCallback = e.jsonpCallback, Ve.push(r)), o && v(s) && s(o[0]), o = s = void 0
                    })), "script"
                })), m.createHTMLDocument = ((Xe = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), T.parseHTML = function(t, e, n) {
                    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (m.createHTMLDocument ? ((i = (e = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, e.head.appendChild(i)) : e = x), s = !n && [], (r = N.exec(t)) ? [e.createElement(r[1])] : (r = Ct([t], e, s), s && s.length && T(s).remove(), T.merge([], r.childNodes)));
                    var i, r, s
                }, T.fn.load = function(t, e, n) {
                    var i, r, s, o = this,
                        a = t.indexOf(" ");
                    return a > -1 && (i = ve(t.slice(a)), t = t.slice(0, a)), v(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && T.ajax({
                        url: t,
                        type: r || "GET",
                        dataType: "html",
                        data: e
                    }).done((function(t) {
                        s = arguments, o.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
                    })).always(n && function(t, e) {
                        o.each((function() {
                            n.apply(this, s || [t.responseText, e, t])
                        }))
                    }), this
                }, T.expr.pseudos.animated = function(t) {
                    return T.grep(T.timers, (function(e) {
                        return t === e.elem
                    })).length
                }, T.offset = {
                    setOffset: function(t, e, n) {
                        var i, r, s, o, a, l, u = T.css(t, "position"),
                            c = T(t),
                            h = {};
                        "static" === u && (t.style.position = "relative"), a = c.offset(), s = T.css(t, "top"), l = T.css(t, "left"), ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (o = (i = c.position()).top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), v(e) && (e = e.call(t, n, T.extend({}, a))), null != e.top && (h.top = e.top - a.top + o), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
                    }
                }, T.fn.extend({
                    offset: function(t) {
                        if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                            T.offset.setOffset(this, t, e)
                        }));
                        var e, n, i = this[0];
                        return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                            top: e.top + n.pageYOffset,
                            left: e.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var t, e, n, i = this[0],
                                r = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();
                            else {
                                for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
                                t && t !== i && 1 === t.nodeType && ((r = T(t).offset()).top += T.css(t, "borderTopWidth", !0), r.left += T.css(t, "borderLeftWidth", !0))
                            }
                            return {
                                top: e.top - r.top - T.css(i, "marginTop", !0),
                                left: e.left - r.left - T.css(i, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
                            return t || ot
                        }))
                    }
                }), T.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(t, e) {
                    var n = "pageYOffset" === e;
                    T.fn[t] = function(i) {
                        return U(this, (function(t, i, r) {
                            var s;
                            if (y(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === r) return s ? s[e] : t[i];
                            s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r
                        }), t, i, arguments.length)
                    }
                })), T.each(["top", "left"], (function(t, e) {
                    T.cssHooks[e] = Ut(m.pixelPosition, (function(t, n) {
                        if (n) return n = Ft(t, e), Rt.test(n) ? T(t).position()[e] + "px" : n
                    }))
                })), T.each({
                    Height: "height",
                    Width: "width"
                }, (function(t, e) {
                    T.each({
                        padding: "inner" + t,
                        content: e,
                        "": "outer" + t
                    }, (function(n, i) {
                        T.fn[i] = function(r, s) {
                            var o = arguments.length && (n || "boolean" != typeof r),
                                a = n || (!0 === r || !0 === s ? "margin" : "border");
                            return U(this, (function(e, n, r) {
                                var s;
                                return y(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? T.css(e, n, a) : T.style(e, n, r, a)
                            }), e, o ? r : void 0, o)
                        }
                    }))
                })), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                    T.fn[e] = function(t) {
                        return this.on(e, t)
                    }
                })), T.fn.extend({
                    bind: function(t, e, n) {
                        return this.on(t, null, e, n)
                    },
                    unbind: function(t, e) {
                        return this.off(t, null, e)
                    },
                    delegate: function(t, e, n, i) {
                        return this.on(e, t, n, i)
                    },
                    undelegate: function(t, e, n) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                    },
                    hover: function(t, e) {
                        return this.mouseenter(t).mouseleave(e || t)
                    }
                }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
                    T.fn[e] = function(t, n) {
                        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                    }
                }));
                var Ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                T.proxy = function(t, e) {
                    var n, i, r;
                    if ("string" == typeof e && (n = t[e], e = t, t = n), v(t)) return i = a.call(arguments, 2), (r = function() {
                        return t.apply(e || this, i.concat(a.call(arguments)))
                    }).guid = t.guid = t.guid || T.guid++, r
                }, T.holdReady = function(t) {
                    t ? T.readyWait++ : T.ready(!0)
                }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = j, T.isFunction = v, T.isWindow = y, T.camelCase = Y, T.type = b, T.now = Date.now, T.isNumeric = function(t) {
                    var e = T.type(t);
                    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                }, T.trim = function(t) {
                    return null == t ? "" : (t + "").replace(Ye, "")
                }, void 0 === (n = function() {
                    return T
                }.apply(e, [])) || (t.exports = n);
                var Ze = i.jQuery,
                    Qe = i.$;
                return T.noConflict = function(t) {
                    return i.$ === T && (i.$ = Qe), t && i.jQuery === T && (i.jQuery = Ze), T
                }, void 0 === r && (i.jQuery = i.$ = T), T
            }))
        },
        7009: (t, e, n) => {
            var i = n(9755),
                r = n(9755);
            ! function(t, e, n, r) {
                function s(e, n) {
                    this.settings = null, this.options = t.extend({}, s.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                        time: null,
                        target: null,
                        pointer: null,
                        stage: {
                            start: null,
                            current: null
                        },
                        direction: null
                    }, this._states = {
                        current: {},
                        tags: {
                            initializing: ["busy"],
                            animating: ["busy"],
                            dragging: ["interacting"]
                        }
                    }, t.each(["onResize", "onThrottledResize"], t.proxy((function(e, n) {
                        this._handlers[n] = t.proxy(this[n], this)
                    }), this)), t.each(s.Plugins, t.proxy((function(t, e) {
                        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
                    }), this)), t.each(s.Workers, t.proxy((function(e, n) {
                        this._pipe.push({
                            filter: n.filter,
                            run: t.proxy(n.run, this)
                        })
                    }), this)), this.setup(), this.initialize()
                }
                s.Defaults = {
                    items: 3,
                    loop: !1,
                    center: !1,
                    rewind: !1,
                    checkVisibility: !0,
                    mouseDrag: !0,
                    touchDrag: !0,
                    pullDrag: !0,
                    freeDrag: !1,
                    margin: 0,
                    stagePadding: 0,
                    merge: !1,
                    mergeFit: !0,
                    autoWidth: !1,
                    startPosition: 0,
                    rtl: !1,
                    smartSpeed: 250,
                    fluidSpeed: !1,
                    dragEndSpeed: !1,
                    responsive: {},
                    responsiveRefreshRate: 200,
                    responsiveBaseElement: e,
                    fallbackEasing: "swing",
                    slideTransition: "",
                    info: !1,
                    nestedItemSelector: !1,
                    itemElement: "div",
                    stageElement: "div",
                    refreshClass: "owl-refresh",
                    loadedClass: "owl-loaded",
                    loadingClass: "owl-loading",
                    rtlClass: "owl-rtl",
                    responsiveClass: "owl-responsive",
                    dragClass: "owl-drag",
                    itemClass: "owl-item",
                    stageClass: "owl-stage",
                    stageOuterClass: "owl-stage-outer",
                    grabClass: "owl-grab"
                }, s.Width = {
                    Default: "default",
                    Inner: "inner",
                    Outer: "outer"
                }, s.Type = {
                    Event: "event",
                    State: "state"
                }, s.Plugins = {}, s.Workers = [{
                    filter: ["width", "settings"],
                    run: function() {
                        this._width = this.$element.width()
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        t.current = this._items && this._items[this.relative(this._current)]
                    }
                }, {
                    filter: ["items", "settings"],
                    run: function() {
                        this.$stage.children(".cloned").remove()
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = this.settings.margin || "",
                            n = !this.settings.autoWidth,
                            i = this.settings.rtl,
                            r = {
                                width: "auto",
                                "margin-left": i ? e : "",
                                "margin-right": i ? "" : e
                            };
                        !n && this.$stage.children().css(r), t.css = r
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                            n = null,
                            i = this._items.length,
                            r = !this.settings.autoWidth,
                            s = [];
                        for (t.items = {
                                merge: !1,
                                width: e
                            }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, s[i] = r ? e * n : this._items[i].width();
                        this._widths = s
                    }
                }, {
                    filter: ["items", "settings"],
                    run: function() {
                        var e = [],
                            n = this._items,
                            i = this.settings,
                            r = Math.max(2 * i.items, 4),
                            s = 2 * Math.ceil(n.length / 2),
                            o = i.loop && n.length ? i.rewind ? r : Math.max(r, s) : 0,
                            a = "",
                            l = "";
                        for (o /= 2; o > 0;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l, o -= 1;
                        this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function() {
                        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < e;) i = s[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, s.push(i + r * t);
                        this._coordinates = s
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function() {
                        var t = this.settings.stagePadding,
                            e = this._coordinates,
                            n = {
                                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                                "padding-left": t || "",
                                "padding-right": t || ""
                            };
                        this.$stage.css(n)
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        var e = this._coordinates.length,
                            n = !this.settings.autoWidth,
                            i = this.$stage.children();
                        if (n && t.items.merge)
                            for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
                        else n && (t.css.width = t.items.width, i.css(t.css))
                    }
                }, {
                    filter: ["items"],
                    run: function() {
                        this._coordinates.length < 1 && this.$stage.removeAttr("style")
                    }
                }, {
                    filter: ["width", "items", "settings"],
                    run: function(t) {
                        t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
                    }
                }, {
                    filter: ["position"],
                    run: function() {
                        this.animate(this.coordinates(this._current))
                    }
                }, {
                    filter: ["width", "position", "items", "settings"],
                    run: function() {
                        var t, e, n, i, r = this.settings.rtl ? 1 : -1,
                            s = 2 * this.settings.stagePadding,
                            o = this.coordinates(this.current()) + s,
                            a = o + this.width() * r,
                            l = [];
                        for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + s * r, (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(n);
                        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
                    }
                }], s.prototype.initializeStage = function() {
                    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
                        class: this.settings.stageClass
                    }).wrap(t("<div/>", {
                        class: this.settings.stageOuterClass
                    })), this.$element.append(this.$stage.parent()))
                }, s.prototype.initializeItems = function() {
                    var e = this.$element.find(".owl-item");
                    if (e.length) return this._items = e.get().map((function(e) {
                        return t(e)
                    })), this._mergers = this._items.map((function() {
                        return 1
                    })), void this.refresh();
                    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
                }, s.prototype.initialize = function() {
                    var t, e, n;
                    this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t)), this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
                }, s.prototype.isVisible = function() {
                    return !this.settings.checkVisibility || this.$element.is(":visible")
                }, s.prototype.setup = function() {
                    var e = this.viewport(),
                        n = this.options.responsive,
                        i = -1,
                        r = null;
                    n ? (t.each(n, (function(t) {
                        t <= e && t > i && (i = Number(t))
                    })), "function" == typeof(r = t.extend({}, this.options, n[i])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", {
                        property: {
                            name: "settings",
                            value: r
                        }
                    }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                        property: {
                            name: "settings",
                            value: this.settings
                        }
                    })
                }, s.prototype.optionsLogic = function() {
                    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
                }, s.prototype.prepare = function(e) {
                    var n = this.trigger("prepare", {
                        content: e
                    });
                    return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                        content: n.data
                    }), n.data
                }, s.prototype.update = function() {
                    for (var e = 0, n = this._pipe.length, i = t.proxy((function(t) {
                            return this[t]
                        }), this._invalidated), r = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
                    this._invalidated = {}, !this.is("valid") && this.enter("valid")
                }, s.prototype.width = function(t) {
                    switch (t = t || s.Width.Default) {
                        case s.Width.Inner:
                        case s.Width.Outer:
                            return this._width;
                        default:
                            return this._width - 2 * this.settings.stagePadding + this.settings.margin
                    }
                }, s.prototype.refresh = function() {
                    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
                }, s.prototype.onThrottledResize = function() {
                    e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
                }, s.prototype.onResize = function() {
                    return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                }, s.prototype.registerEventHandlers = function() {
                    t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() {
                        return !1
                    }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
                }, s.prototype.onDragStart = function(e) {
                    var i = null;
                    3 !== e.which && (t.support.transform ? i = {
                        x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
                        y: i[16 === i.length ? 13 : 5]
                    } : (i = this.$stage.position(), i = {
                        x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
                        y: i.top
                    }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy((function(e) {
                        var i = this.difference(this._drag.pointer, this.pointer(e));
                        t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                    }), this)))
                }, s.prototype.onDragMove = function(t) {
                    var e = null,
                        n = null,
                        i = null,
                        r = this.difference(this._drag.pointer, this.pointer(t)),
                        s = this.difference(this._drag.stage.start, r);
                    this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + i), n + i)), this._drag.stage.current = s, this.animate(s.x))
                }, s.prototype.onDragEnd = function(e) {
                    var i = this.difference(this._drag.pointer, this.pointer(e)),
                        r = this._drag.stage.current,
                        s = i.x > 0 ^ this.settings.rtl ? "left" : "right";
                    t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() {
                        return !1
                    }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
                }, s.prototype.closest = function(e, n) {
                    var i = -1,
                        s = this.width(),
                        o = this.coordinates();
                    return this.settings.freeDrag || t.each(o, t.proxy((function(t, a) {
                        return "left" === n && e > a - 30 && e < a + 30 ? i = t : "right" === n && e > a - s - 30 && e < a - s + 30 ? i = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] !== r ? o[t + 1] : a - s) && (i = "left" === n ? t + 1 : t), -1 === i
                    }), this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
                }, s.prototype.animate = function(e) {
                    var n = this.speed() > 0;
                    this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                        transform: "translate3d(" + e + "px,0px,0px)",
                        transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
                    }) : n ? this.$stage.animate({
                        left: e + "px"
                    }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                        left: e + "px"
                    })
                }, s.prototype.is = function(t) {
                    return this._states.current[t] && this._states.current[t] > 0
                }, s.prototype.current = function(t) {
                    if (t === r) return this._current;
                    if (0 === this._items.length) return r;
                    if (t = this.normalize(t), this._current !== t) {
                        var e = this.trigger("change", {
                            property: {
                                name: "position",
                                value: t
                            }
                        });
                        e.data !== r && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                            property: {
                                name: "position",
                                value: this._current
                            }
                        })
                    }
                    return this._current
                }, s.prototype.invalidate = function(e) {
                    return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function(t, e) {
                        return e
                    }))
                }, s.prototype.reset = function(t) {
                    (t = this.normalize(t)) !== r && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
                }, s.prototype.normalize = function(t, e) {
                    var n = this._items.length,
                        i = e ? 0 : this._clones.length;
                    return !this.isNumeric(t) || n < 1 ? t = r : (t < 0 || t >= n + i) && (t = ((t - i / 2) % n + n) % n + i / 2), t
                }, s.prototype.relative = function(t) {
                    return t -= this._clones.length / 2, this.normalize(t, !0)
                }, s.prototype.maximum = function(t) {
                    var e, n, i, r = this.settings,
                        s = this._coordinates.length;
                    if (r.loop) s = this._clones.length / 2 + this._items.length - 1;
                    else if (r.autoWidth || r.merge) {
                        if (e = this._items.length)
                            for (n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i););
                        s = e + 1
                    } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
                    return t && (s -= this._clones.length / 2), Math.max(s, 0)
                }, s.prototype.minimum = function(t) {
                    return t ? 0 : this._clones.length / 2
                }, s.prototype.items = function(t) {
                    return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
                }, s.prototype.mergers = function(t) {
                    return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
                }, s.prototype.clones = function(e) {
                    var n = this._clones.length / 2,
                        i = n + this._items.length,
                        s = function(t) {
                            return t % 2 == 0 ? i + t / 2 : n - (t + 1) / 2
                        };
                    return e === r ? t.map(this._clones, (function(t, e) {
                        return s(e)
                    })) : t.map(this._clones, (function(t, n) {
                        return t === e ? s(n) : null
                    }))
                }, s.prototype.speed = function(t) {
                    return t !== r && (this._speed = t), this._speed
                }, s.prototype.coordinates = function(e) {
                    var n, i = 1,
                        s = e - 1;
                    return e === r ? t.map(this._coordinates, t.proxy((function(t, e) {
                        return this.coordinates(e)
                    }), this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * i) : n = this._coordinates[s] || 0, n = Math.ceil(n))
                }, s.prototype.duration = function(t, e, n) {
                    return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
                }, s.prototype.to = function(t, e) {
                    var n = this.current(),
                        i = null,
                        r = t - this.relative(n),
                        s = (r > 0) - (r < 0),
                        o = this._items.length,
                        a = this.minimum(),
                        l = this.maximum();
                    this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o), (i = (((t = n + r) - a) % o + o) % o + a) !== t && i - r <= l && i - r > 0 && (n = i - r, t = i, this.reset(n))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.isVisible() && this.update()
                }, s.prototype.next = function(t) {
                    t = t || !1, this.to(this.relative(this.current()) + 1, t)
                }, s.prototype.prev = function(t) {
                    t = t || !1, this.to(this.relative(this.current()) - 1, t)
                }, s.prototype.onTransitionEnd = function(t) {
                    if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                    this.leave("animating"), this.trigger("translated")
                }, s.prototype.viewport = function() {
                    var i;
                    return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
                }, s.prototype.replace = function(e) {
                    this.$stage.empty(), this._items = [], e && (e = e instanceof i ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function() {
                        return 1 === this.nodeType
                    })).each(t.proxy((function(t, e) {
                        e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                    }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
                }, s.prototype.add = function(e, n) {
                    var s = this.relative(this._current);
                    n = n === r ? this._items.length : this.normalize(n, !0), e = e instanceof i ? e : t(e), this.trigger("add", {
                        content: e,
                        position: n
                    }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
                        content: e,
                        position: n
                    })
                }, s.prototype.remove = function(t) {
                    (t = this.normalize(t, !0)) !== r && (this.trigger("remove", {
                        content: this._items[t],
                        position: t
                    }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                        content: null,
                        position: t
                    }))
                }, s.prototype.preloadAutoWidthImages = function(e) {
                    e.each(t.proxy((function(e, n) {
                        this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy((function(t) {
                            n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                        }), this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
                    }), this))
                }, s.prototype.destroy = function() {
                    for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
                    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
                }, s.prototype.op = function(t, e, n) {
                    var i = this.settings.rtl;
                    switch (e) {
                        case "<":
                            return i ? t > n : t < n;
                        case ">":
                            return i ? t < n : t > n;
                        case ">=":
                            return i ? t <= n : t >= n;
                        case "<=":
                            return i ? t >= n : t <= n
                    }
                }, s.prototype.on = function(t, e, n, i) {
                    t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
                }, s.prototype.off = function(t, e, n, i) {
                    t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
                }, s.prototype.trigger = function(e, n, i, r, o) {
                    var a = {
                            item: {
                                count: this._items.length,
                                index: this.current()
                            }
                        },
                        l = t.camelCase(t.grep(["on", e, i], (function(t) {
                            return t
                        })).join("-").toLowerCase()),
                        u = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                            relatedTarget: this
                        }, a, n));
                    return this._supress[e] || (t.each(this._plugins, (function(t, e) {
                        e.onTrigger && e.onTrigger(u)
                    })), this.register({
                        type: s.Type.Event,
                        name: e
                    }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
                }, s.prototype.enter = function(e) {
                    t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
                        this._states.current[e] === r && (this._states.current[e] = 0), this._states.current[e]++
                    }), this))
                }, s.prototype.leave = function(e) {
                    t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
                        this._states.current[e]--
                    }), this))
                }, s.prototype.register = function(e) {
                    if (e.type === s.Type.Event) {
                        if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                            var n = t.event.special[e.name]._default;
                            t.event.special[e.name]._default = function(t) {
                                return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                            }, t.event.special[e.name].owl = !0
                        }
                    } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function(n, i) {
                        return t.inArray(n, this._states.tags[e.name]) === i
                    }), this)))
                }, s.prototype.suppress = function(e) {
                    t.each(e, t.proxy((function(t, e) {
                        this._supress[e] = !0
                    }), this))
                }, s.prototype.release = function(e) {
                    t.each(e, t.proxy((function(t, e) {
                        delete this._supress[e]
                    }), this))
                }, s.prototype.pointer = function(t) {
                    var n = {
                        x: null,
                        y: null
                    };
                    return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
                }, s.prototype.isNumeric = function(t) {
                    return !isNaN(parseFloat(t))
                }, s.prototype.difference = function(t, e) {
                    return {
                        x: t.x - e.x,
                        y: t.y - e.y
                    }
                }, t.fn.owlCarousel = function(e) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    return this.each((function() {
                        var i = t(this),
                            r = i.data("owl.carousel");
                        r || (r = new s(this, "object" == typeof e && e), i.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(e, n) {
                            r.register({
                                type: s.Type.Event,
                                name: n
                            }), r.$element.on(n + ".owl.carousel.core", t.proxy((function(t) {
                                t.namespace && t.relatedTarget !== this && (this.suppress([n]), r[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                            }), r))
                        }))), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, n)
                    }))
                }, t.fn.owlCarousel.Constructor = s
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) {
                    this._core = e, this._interval = null, this._visible = null, this._handlers = {
                        "initialized.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoRefresh && this.watch()
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
                };
                r.Defaults = {
                    autoRefresh: !0,
                    autoRefreshInterval: 500
                }, r.prototype.watch = function() {
                    this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
                }, r.prototype.refresh = function() {
                    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
                }, r.prototype.destroy = function() {
                    var t, n;
                    for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) {
                    this._core = e, this._loaded = [], this._handlers = {
                        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function(e) {
                            if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                                var n = this._core.settings,
                                    i = n.center && Math.ceil(n.items / 2) || n.items,
                                    r = n.center && -1 * i || 0,
                                    s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r,
                                    o = this._core.clones().length,
                                    a = t.proxy((function(t, e) {
                                        this.load(e)
                                    }), this);
                                for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (s -= n.lazyLoadEager, i++)); r++ < i;) this.load(o / 2 + this._core.relative(s)), o && t.each(this._core.clones(this._core.relative(s)), a), s++
                            }
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
                };
                r.Defaults = {
                    lazyLoad: !1,
                    lazyLoadEager: 0
                }, r.prototype.load = function(n) {
                    var i = this._core.$stage.children().eq(n),
                        r = i && i.find(".owl-lazy");
                    !r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy((function(n, i) {
                        var r, s = t(i),
                            o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
                        this._core.trigger("load", {
                            element: s,
                            url: o
                        }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy((function() {
                            s.css("opacity", 1), this._core.trigger("loaded", {
                                element: s,
                                url: o
                            }, "lazy")
                        }), this)).attr("src", o) : s.is("source") ? s.one("load.owl.lazy", t.proxy((function() {
                            this._core.trigger("loaded", {
                                element: s,
                                url: o
                            }, "lazy")
                        }), this)).attr("srcset", o) : ((r = new Image).onload = t.proxy((function() {
                            s.css({
                                "background-image": 'url("' + o + '")',
                                opacity: "1"
                            }), this._core.trigger("loaded", {
                                element: s,
                                url: o
                            }, "lazy")
                        }), this), r.src = o)
                    }), this)), this._loaded.push(i.get(0)))
                }, r.prototype.destroy = function() {
                    var t, e;
                    for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(n) {
                    this._core = n, this._previousHeight = null, this._handlers = {
                        "initialized.owl.carousel refreshed.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoHeight && this.update()
                        }), this),
                        "changed.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
                        }), this),
                        "loaded.owl.lazy": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
                    var i = this;
                    t(e).on("load", (function() {
                        i._core.settings.autoHeight && i.update()
                    })), t(e).resize((function() {
                        i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout((function() {
                            i.update()
                        }), 250))
                    }))
                };
                r.Defaults = {
                    autoHeight: !1,
                    autoHeightClass: "owl-height"
                }, r.prototype.update = function() {
                    var e = this._core._current,
                        n = e + this._core.settings.items,
                        i = this._core.settings.lazyLoad,
                        r = this._core.$stage.children().toArray().slice(e, n),
                        s = [],
                        o = 0;
                    t.each(r, (function(e, n) {
                        s.push(t(n).height())
                    })), (o = Math.max.apply(null, s)) <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
                }, r.prototype.destroy = function() {
                    var t, e;
                    for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) {
                    this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                        "initialized.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.register({
                                type: "state",
                                name: "playing",
                                tags: ["interacting"]
                            })
                        }), this),
                        "resize.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                        }), this),
                        "refreshed.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                        }), this),
                        "changed.owl.carousel": t.proxy((function(t) {
                            t.namespace && "position" === t.property.name && this._playing && this.stop()
                        }), this),
                        "prepared.owl.carousel": t.proxy((function(e) {
                            if (e.namespace) {
                                var n = t(e.content).find(".owl-video");
                                n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                            }
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function(t) {
                        this.play(t)
                    }), this))
                };
                r.Defaults = {
                    video: !1,
                    videoHeight: !1,
                    videoWidth: !1
                }, r.prototype.fetch = function(t, e) {
                    var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                        i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                        r = t.attr("data-width") || this._core.settings.videoWidth,
                        s = t.attr("data-height") || this._core.settings.videoHeight,
                        o = t.attr("href");
                    if (!o) throw new Error("Missing video URL.");
                    if ((i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
                    else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
                    else {
                        if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                        n = "vzaar"
                    }
                    i = i[6], this._videos[o] = {
                        type: n,
                        id: i,
                        width: r,
                        height: s
                    }, e.attr("data-video", o), this.thumbnail(t, this._videos[o])
                }, r.prototype.thumbnail = function(e, n) {
                    var i, r, s = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
                        o = e.find("img"),
                        a = "src",
                        l = "",
                        u = this._core.settings,
                        c = function(n) {
                            i = u.lazyLoad ? t("<div/>", {
                                class: "owl-video-tn " + l,
                                srcType: n
                            }) : t("<div/>", {
                                class: "owl-video-tn",
                                style: "opacity:1;background-image:url(" + n + ")"
                            }), e.after(i), e.after('<div class="owl-video-play-icon"></div>')
                        };
                    if (e.wrap(t("<div/>", {
                            class: "owl-video-wrapper",
                            style: s
                        })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), o.length) return c(o.attr(a)), o.remove(), !1;
                    "youtube" === n.type ? (r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", c(r)) : "vimeo" === n.type ? t.ajax({
                        type: "GET",
                        url: "//vimeo.com/api/v2/video/" + n.id + ".json",
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: function(t) {
                            r = t[0].thumbnail_large, c(r)
                        }
                    }) : "vzaar" === n.type && t.ajax({
                        type: "GET",
                        url: "//vzaar.com/api/videos/" + n.id + ".json",
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: function(t) {
                            r = t.framegrab_url, c(r)
                        }
                    })
                }, r.prototype.stop = function() {
                    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
                }, r.prototype.play = function(e) {
                    var n, i = t(e.target).closest("." + this._core.settings.itemClass),
                        r = this._videos[i.attr("data-video")],
                        s = r.width || "100%",
                        o = r.height || this._core.$stage.height();
                    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (n = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", o), n.attr("width", s), "youtube" === r.type ? n.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id) : "vimeo" === r.type ? n.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1") : "vzaar" === r.type && n.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"), t(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
                }, r.prototype.isInFullScreen = function() {
                    var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
                    return e && t(e).parent().hasClass("owl-video-frame")
                }, r.prototype.destroy = function() {
                    var t, e;
                    for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Video = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) {
                    this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
                        "change.owl.carousel": t.proxy((function(t) {
                            t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                        }), this),
                        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function(t) {
                            t.namespace && (this.swapping = "translated" == t.type)
                        }), this),
                        "translate.owl.carousel": t.proxy((function(t) {
                            t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                        }), this)
                    }, this.core.$element.on(this.handlers)
                };
                r.Defaults = {
                    animateOut: !1,
                    animateIn: !1
                }, r.prototype.swap = function() {
                    if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                        this.core.speed(0);
                        var e, n = t.proxy(this.clear, this),
                            i = this.core.$stage.children().eq(this.previous),
                            r = this.core.$stage.children().eq(this.next),
                            s = this.core.settings.animateIn,
                            o = this.core.settings.animateOut;
                        this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({
                            left: e + "px"
                        }).addClass("animated owl-animated-out").addClass(o)), s && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s))
                    }
                }, r.prototype.clear = function(e) {
                    t(e.target).css({
                        left: ""
                    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
                }, r.prototype.destroy = function() {
                    var t, e;
                    for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = function(e) {
                    this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                        "changed.owl.carousel": t.proxy((function(t) {
                            t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
                        }), this),
                        "initialized.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.autoplay && this.play()
                        }), this),
                        "play.owl.autoplay": t.proxy((function(t, e, n) {
                            t.namespace && this.play(e, n)
                        }), this),
                        "stop.owl.autoplay": t.proxy((function(t) {
                            t.namespace && this.stop()
                        }), this),
                        "mouseover.owl.autoplay": t.proxy((function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                        }), this),
                        "mouseleave.owl.autoplay": t.proxy((function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                        }), this),
                        "touchstart.owl.core": t.proxy((function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                        }), this),
                        "touchend.owl.core": t.proxy((function() {
                            this._core.settings.autoplayHoverPause && this.play()
                        }), this)
                    }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
                };
                r.Defaults = {
                    autoplay: !1,
                    autoplayTimeout: 5e3,
                    autoplayHoverPause: !1,
                    autoplaySpeed: !1
                }, r.prototype._next = function(i) {
                    this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
                }, r.prototype.read = function() {
                    return (new Date).getTime() - this._time
                }, r.prototype.play = function(n, i) {
                    var r;
                    this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % n - r, this._timeout = n, this._call = e.setTimeout(t.proxy(this._next, this, i), n - r)
                }, r.prototype.stop = function() {
                    this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
                }, r.prototype.pause = function() {
                    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
                }, r.prototype.destroy = function() {
                    var t, e;
                    for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                "use strict";
                var r = function(e) {
                    this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                        next: this._core.next,
                        prev: this._core.prev,
                        to: this._core.to
                    }, this._handlers = {
                        "prepared.owl.carousel": t.proxy((function(e) {
                            e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                        }), this),
                        "added.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                        }), this),
                        "remove.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                        }), this),
                        "changed.owl.carousel": t.proxy((function(t) {
                            t.namespace && "position" == t.property.name && this.draw()
                        }), this),
                        "initialized.owl.carousel": t.proxy((function(t) {
                            t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                        }), this),
                        "refreshed.owl.carousel": t.proxy((function(t) {
                            t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
                };
                r.Defaults = {
                    nav: !1,
                    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
                    navSpeed: !1,
                    navElement: 'button type="button" role="presentation"',
                    navContainer: !1,
                    navContainerClass: "owl-nav",
                    navClass: ["owl-prev", "owl-next"],
                    slideBy: 1,
                    dotClass: "owl-dot",
                    dotsClass: "owl-dots",
                    dots: !0,
                    dotsEach: !1,
                    dotsData: !1,
                    dotsSpeed: !1,
                    dotsContainer: !1
                }, r.prototype.initialize = function() {
                    var e, n = this._core.settings;
                    for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function(t) {
                            this.prev(n.navSpeed)
                        }), this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function(t) {
                            this.next(n.navSpeed)
                        }), this)), n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function(e) {
                            var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                            e.preventDefault(), this.to(i, n.dotsSpeed)
                        }), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
                }, r.prototype.destroy = function() {
                    var t, e, n, i, r;
                    for (t in r = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
                    for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                    for (i in this.overides) this._core[i] = this._overrides[i];
                    for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
                }, r.prototype.update = function() {
                    var t, e, n = this._core.clones().length / 2,
                        i = n + this._core.items().length,
                        r = this._core.maximum(!0),
                        s = this._core.settings,
                        o = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
                    if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
                        for (this._pages = [], t = n, e = 0; t < i; t++) {
                            if (e >= o || 0 === e) {
                                if (this._pages.push({
                                        start: Math.min(r, t - n),
                                        end: t - n + o - 1
                                    }), Math.min(r, t - n) === r) break;
                                e = 0
                            }
                            e += this._core.mergers(this._core.relative(t))
                        }
                }, r.prototype.draw = function() {
                    var e, n = this._core.settings,
                        i = this._core.items().length <= n.items,
                        r = this._core.relative(this._core.current()),
                        s = n.loop || n.rewind;
                    this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
                }, r.prototype.onTrigger = function(e) {
                    var n = this._core.settings;
                    e.page = {
                        index: t.inArray(this.current(), this._pages),
                        count: this._pages.length,
                        size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
                    }
                }, r.prototype.current = function() {
                    var e = this._core.relative(this._core.current());
                    return t.grep(this._pages, t.proxy((function(t, n) {
                        return t.start <= e && t.end >= e
                    }), this)).pop()
                }, r.prototype.getPosition = function(e) {
                    var n, i, r = this._core.settings;
                    return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n
                }, r.prototype.next = function(e) {
                    t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
                }, r.prototype.prev = function(e) {
                    t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
                }, r.prototype.to = function(e, n, i) {
                    var r;
                    !i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
                }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                "use strict";
                var r = function(n) {
                    this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                        "initialized.owl.carousel": t.proxy((function(n) {
                            n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                        }), this),
                        "prepared.owl.carousel": t.proxy((function(e) {
                            if (e.namespace) {
                                var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                if (!n) return;
                                this._hashes[n] = e.content
                            }
                        }), this),
                        "changed.owl.carousel": t.proxy((function(n) {
                            if (n.namespace && "position" === n.property.name) {
                                var i = this._core.items(this._core.relative(this._core.current())),
                                    r = t.map(this._hashes, (function(t, e) {
                                        return t === i ? e : null
                                    })).join();
                                if (!r || e.location.hash.slice(1) === r) return;
                                e.location.hash = r
                            }
                        }), this)
                    }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function(t) {
                        var n = e.location.hash.substring(1),
                            i = this._core.$stage.children(),
                            r = this._hashes[n] && i.index(this._hashes[n]);
                        void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
                    }), this))
                };
                r.Defaults = {
                    URLhashListener: !1
                }, r.prototype.destroy = function() {
                    var n, i;
                    for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
                    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
            }(window.Zepto || r, window, document),
            function(t, e, n, i) {
                var r = t("<support>").get(0).style,
                    s = "Webkit Moz O ms".split(" "),
                    o = {
                        transition: {
                            end: {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd",
                                transition: "transitionend"
                            }
                        },
                        animation: {
                            end: {
                                WebkitAnimation: "webkitAnimationEnd",
                                MozAnimation: "animationend",
                                OAnimation: "oAnimationEnd",
                                animation: "animationend"
                            }
                        }
                    };

                function a(e, n) {
                    var i = !1,
                        o = e.charAt(0).toUpperCase() + e.slice(1);
                    return t.each((e + " " + s.join(o + " ") + o).split(" "), (function(t, e) {
                        if (void 0 !== r[e]) return i = !n || e, !1
                    })), i
                }

                function l(t) {
                    return a(t, !0)
                }!!a("transition") && (t.support.transition = new String(l("transition")), t.support.transition.end = o.transition.end[t.support.transition]), !!a("animation") && (t.support.animation = new String(l("animation")), t.support.animation.end = o.animation.end[t.support.animation]), a("transform") && (t.support.transform = new String(l("transform")), t.support.transform3d = !!a("perspective"))
            }(window.Zepto || r, window, document)
        }
    }
]);