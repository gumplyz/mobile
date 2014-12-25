var LazyImage=(function(a) {
    var b = Zepto,
        c = page,
        d = {
            lazy_img: function() {
                var a = b(".lazy-img");
                a.each(function() {
                    var a = b(this);
                    if (a.is("img")) a.attr("src", "loading_large.gif");
                    else {
                        var c = a.css("background-position"),
                            d = a.css("background-size");
                        a.attr({
                            "data-position": c,
                            "data-size": d
                        }), "no" == a.attr("data-bg") && a.css({
                            "background-repeat": "no-repeat"
                        }), a.css({
                            "background-image": "url(loading_large.gif)",
                            "background-size": "120px 120px",
                            "background-position": "center"
                        }), "no" == a.attr("data-image") && a.css({
                            "background-image": "none"
                        })
                    }
                })
            },
            lazy_start: function() {
                var a = this;
                setTimeout(function() {
                    for (var c = 0; 3 > c; c++) {
                        var d = b(".m-page").eq(c);
                        if (0 == d.length) break;
                        0 != d.find(".lazy-img").length && (a.lazy_change(d, !1), "flyCon" == d.attr("data-page-type") && a.lazy_change(b(".m-flypop"), !1))
                    }
                }, 200)
            },
            lazy_bigP: function() {
                if (0 != b(".lazy-img").length)
                    for (var a = 3; 5 >= a; a++) {
                        var e = b(".m-page").eq(c._pageNow + a);
                        if (0 == e.length) break;
                        0 != e.find(".lazy-img").length && (d.lazy_change(e, !0), "flyCon" == e.attr("data-page-type") && d.lazy_change(b(".m-flypop"), !1))
                    }
            },
            lazy_change: function(a, c) {
                if ("3d" == a.attr("data-page-type") && this.lazy_3d(a), "flyCon" == a.attr("data-page-type")) {
                    var e = b(".m-flypop").find(".lazy-img");
                    e.each(function() {
                        var a = b(this),
                            c = a.attr("data-src");
                        b("<img />").on("load", function() {
                            a.is("img") && a.attr("src", c)
                        }).attr("src", c)
                    })
                }
                var f = a.find(".lazy-img");
                f.each(function() {
                    var a = b(this),
                        e = a.attr("data-src"),
                        f = a.attr("data-position"),
                        g = a.attr("data-size");
                    "no" != a.attr("data-bg") ? (b("<img />").on("load", function() {
                        if (a.is("img") ? a.attr("src", e) : a.css({
                                "background-image": "url(" + e + ")",
                                "background-position": f,
                                "background-size": g
                            }), c)
                            for (var h = 0; h < b(".m-page").size(); h++) {
                                var i = b(".m-page").eq(h);
                                0 != b(".m-page").find(".lazy-img").length && d.lazy_change(i, !0)
                            }
                    }).attr("src", e), a.removeClass("lazy-img").addClass("lazy-finish")) : "yes" == a.attr("data-auto") && a.css("background", "none")
                })
            },
            lazy_load: function() {
                var a = b(".lazy-img.load");
                a.each(function() {
                    var a = b(this),
                        c = a.attr("data-src"),
                        d = a.attr("data-position"),
                        e = a.attr("data-size");
                    "no" != a.attr("data-bg") ? (b("<img />").on("load", function() {
                        a.is("img") ? a.attr("src", c) : a.css({
                            "background-image": "url(" + c + ")",
                            "background-position": d,
                            "background-size": e
                        })
                    }).attr("src", c), a.removeClass("lazy-img").addClass("lazy-finish")) : "yes" == a.attr("data-auto") && a.css("background", "none")
                })
            }
        };
    return b(function() {
        d.lazy_img()
    }), b(window).on("load", function() {
        d.lazy_start(), setTimeout(function() {
            d.lazy_load()
        }, 200)
    }), d
})();
