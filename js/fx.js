define(function (require, exports, module) {
    var d = require("./zepto");
    module.exports = d,
        function(a, b) {
            function c(a) {
                return a.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
            }

            function d(a) {
                return e ? e + a : a.toLowerCase()
            }
            var e, f, g, h, i, j, k, l, m, n, o = "",
                p = {
                    Webkit: "webkit",
                    Moz: "",
                    O: "o"
                },
                q = window.document,
                r = q.createElement("div"),
                s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                t = {};
            a.each(p, function(a, c) {
                return r.style[a + "TransitionProperty"] !== b ? (o = "-" + a.toLowerCase() + "-", e = c, !1) : void 0
            }), f = o + "transform", t[g = o + "transition-property"] = t[h = o + "transition-duration"] = t[j = o + "transition-delay"] = t[i = o + "transition-timing-function"] = t[k = o + "animation-name"] = t[l = o + "animation-duration"] = t[n = o + "animation-delay"] = t[m = o + "animation-timing-function"] = "", a.fx = {
                off: e === b && r.style.transitionProperty === b,
                speeds: {
                    _default: 400,
                    fast: 200,
                    slow: 600
                },
                cssPrefix: o,
                transitionEnd: d("TransitionEnd"),
                animationEnd: d("AnimationEnd")
            }, a.fn.animate = function(c, d, e, f, g) {
                return a.isFunction(d) && (f = d, e = b, d = b), a.isFunction(e) && (f = e, e = b), a.isPlainObject(d) && (e = d.easing, f = d.complete, g = d.delay, d = d.duration), d && (d = ("number" == typeof d ? d : a.fx.speeds[d] || a.fx.speeds._default) / 1e3), g && (g = parseFloat(g) / 1e3), this.anim(c, d, e, f, g)
            }, a.fn.anim = function(d, e, o, p, q) {
                var r, u, v, w = {},
                    x = "",
                    y = this,
                    z = a.fx.transitionEnd,
                    A = !1;
                if (e === b && (e = a.fx.speeds._default / 1e3), q === b && (q = 0), a.fx.off && (e = 0), "string" == typeof d) w[k] = d, w[l] = e + "s", w[n] = q + "s", w[m] = o || "linear", z = a.fx.animationEnd;
                else {
                    u = [];
                    for (r in d) s.test(r) ? x += r + "(" + d[r] + ") " : (w[r] = d[r], u.push(c(r)));
                    x && (w[f] = x, u.push(f)), e > 0 && "object" == typeof d && (w[g] = u.join(", "), w[h] = e + "s", w[j] = q + "s", w[i] = o || "linear")
                }
                return v = function(b) {
                    if ("undefined" != typeof b) {
                        if (b.target !== b.currentTarget) return;
                        a(b.target).unbind(z, v)
                    } else a(this).unbind(z, v);
                    A = !0, a(this).css(t), p && p.call(this)
                }, e > 0 && (this.bind(z, v), setTimeout(function() {
                    A || v.call(y)
                }, 1e3 * e + 25)), this.size() && this.get(0).clientLeft, this.css(w), 0 >= e && setTimeout(function() {
                    y.each(function() {
                        v.call(this)
                    })
                }, 0), this
            }, r = null
        }(d);
})