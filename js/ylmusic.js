define(function (require, exports, module) {
    var d = require("./zepto");
    d = require("./fx");
    module.exports = d,
        function(a) {
            a.fn.coffee = function(b) {
                function c() {
                    var b = f(8, m.steamMaxSize),
                        c = e(1, m.steamsFontFamily),
                        d = "#" + e(6, "0123456789ABCDEF"),
                        h = f(0, 44),
                        i = f(-90, 89),
                        j = g(.4, 1),
                        l = a.fx.cssPrefix + "transform";
                    l = l + ":rotate(" + i + "deg) scale(" + j + ");";
                    var p = a('<span class="coffee-steam">' + e(1, m.steams) + "</span>"),
                        q = f(0, n - m.steamWidth - b);
                    q > h && (q = f(0, h)), p.css({
                        position: "absolute",
                        left: h,
                        top: m.steamHeight,
                        "font-size:": b + "px",
                        color: d,
                        "font-family": c,
                        display: "block",
                        opacity: 1
                    }).attr("style", p.attr("style") + l).appendTo(o).animate({
                        top: f(m.steamHeight / 2, 0),
                        left: q,
                        opacity: 0
                    }, f(m.steamFlyTime / 2, 1.2 * m.steamFlyTime), k, function() {
                        p.remove(), p = null
                    })
                }

                function d() {
                    var a = f(-10, 10);
                    a += parseInt(o.css("left")), a >= 54 ? a = 54 : 34 >= a && (a = 34), o.animate({
                        left: a
                    }, f(1e3, 3e3), k)
                }

                function e(a, b) {
                    a = a || 1;
                    var c = "",
                        d = b.length - 1,
                        e = 0;
                    for (i = 0; a > i; i++) e = f(0, d - 1), c += b.slice(e, e + 1);
                    return c
                }

                function f(a, b) {
                    var c = b - a,
                        d = a + Math.round(Math.random() * c);
                    return parseInt(d)
                }

                function g(a, b) {
                    var c = b - a,
                        d = a + Math.random() * c;
                    return parseFloat(d)
                }
                var h = null,
                    j = null,
                    k = "cubic-bezier(.09,.64,.16,.94)",
                    l = a(this),
                    m = a.extend({}, a.fn.coffee.defaults, b),
                    n = m.steamWidth,
                    o = a('<div class="coffee-steam-box"></div>').css({
                        height: m.steamHeight,
                        width: m.steamWidth,
                        left: 60,
                        top: -50,
                        position: "absolute",
                        overflow: "hidden",
                        "z-index": 0
                    }).appendTo(l);
                return a.fn.coffee.stop = function() {
                    clearInterval(h), clearInterval(j)
                }, a.fn.coffee.start = function() {
                    h = setInterval(function() {
                        c()
                    }, f(m.steamInterval / 2, 2 * m.steamInterval)), j = setInterval(function() {
                        d()
                    }, f(100, 1e3) + f(1e3, 3e3))
                }, l
            }, a.fn.coffee.defaults = {
                steams: ["jQuery", "HTML5", "HTML6", "CSS2", "CSS3", "JS", "$.fn()", "char", "short", "if", "float", "else", "type", "case", "function", "travel", "return", "array()", "empty()", "eval", "C++", "JAVA", "PHP", "JSP", ".NET", "while", "this", "$.find();", "float", "$.ajax()", "addClass", "width", "height", "Click", "each", "animate", "cookie", "bug", "Design", "Julying", "$(this)", "i++", "Chrome", "Firefox", "Firebug", "IE6", "Guitar", "Music", "攻城师", "旅行", "王子墨", "啤酒"],
                steamsFontFamily: ["Verdana", "Geneva", "Comic Sans MS", "MS Serif", "Lucida Sans Unicode", "Times New Roman", "Trebuchet MS", "Arial", "Courier New", "Georgia"],
                steamFlyTime: 5e3,
                steamInterval: 500,
                steamMaxSize: 30,
                steamHeight: 200,
                steamWidth: 300
            }, a.fn.coffee.version = "2.0.0"
        }(d)
});