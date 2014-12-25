(function(){
    var b = Zepto,
        c = Global;
    return window.page = {
        _page: b(".m-page"),
        _pageNum: b(".m-page").size(),
        _pageNow: 0,
        _pageNext: null,
        _touchStartValY: 0,
        _touchDeltaY: 0,
        _moveStart: !0,
        _movePosition: null,
        _movePosition_c: null,
        _mouseDown: !1,
        _moveFirst: !0,
        _moveInit: !1,
        _firstChange: !1,
        page_start: function() {
            page._page.on("touchstart mousedown", page.page_touch_start), page._page.on("touchmove mousemove", page.page_touch_move), page._page.on("touchend mouseup", page.page_touch_end)
        },
        page_stop: function() {
            page._page.off("touchstart mousedown"), page._page.off("touchmove mousemove"), page._page.off("touchend mouseup")
        },
        page_touch_start: function(a) {
            page._moveStart && ("touchstart" == a.type ? page._touchStartValY = window.event.touches[0].pageY : (page._touchStartValY = a.pageY || a.y, page._mouseDown = !0), page._moveInit = !0, c._handleEvent("start"))
        },
        page_touch_move: function(a) {
            if (a.preventDefault(), page._moveStart && page._moveInit) {
                var b, d = page._page.eq(page._pageNow),
                    e = (parseInt(d.height()), null),
                    f = !1;
                if ("touchmove" == a.type) b = window.event.touches[0].pageY, f = !0;
                else {
                    if (!page._mouseDown) return;
                    b = a.pageY || a.y, f = !0
                }
                e = page.page_position(a, b, d), page.page_translate(e), c._handleEvent("move")
            }
        },
        page_position: function(a, d, e) {
            function f(a) {
                var d, e, f = c._translateZ();
                page._page.removeClass("action"), b(a[1]).addClass("action").removeClass("f-hide"), page._page.not(".action").addClass("f-hide"), b(a[0]).removeClass("f-hide").addClass("active"), "up" == page._movePosition ? (d = parseInt(b(window).scrollTop()), e = d > 0 ? b(window).height() + d : b(window).height(), a[0].style[c._prefixStyle("transform")] = "translate(0," + e + "px)" + f, b(a[0]).attr("data-translate", e)) : (a[0].style[c._prefixStyle("transform")] = "translate(0,-" + Math.max(b(window).height(), b(a[0]).height()) + "px)" + f, b(a[0]).attr("data-translate", -Math.max(b(window).height(), b(a[0]).height()))), b(a[1]).attr("data-translate", 0), page._page.eq(page._pageNext).height(b(window).height())
            }
            var g, h;
            if ("undefined" != d && (page._touchDeltaY = d - page._touchStartValY), page._movePosition = d - page._touchStartValY > 0 ? "down" : "up", page._movePosition != page._movePosition_c ? (page._moveFirst = !0, page._movePosition_c = page._movePosition) : page._moveFirst = !1, page._touchDeltaY <= 0) page._pageNext = 0 == e.next(".m-page").length ? 0 : page._pageNow + 1, h = page._page.eq(page._pageNext)[0];
            else {
                if (0 == e.prev(".m-page").length) {
                    if (!page._firstChange) return page._pageNext = null, void(page._touchDeltaY = 0);
                    page._pageNext = page._pageNum - 1
                } else page._pageNext = page._pageNow - 1;
                h = page._page.eq(page._pageNext)[0]
            }
            return g = page._page.eq(page._pageNow)[0], node = [h, g], page._moveFirst && f(node), node
        },
        page_translate: function(a) {
            if (a) {
                var d, e, f, g = c._translateZ(),
                    h = page._touchDeltaY;
                b(a[0]).attr("data-translate") && (d = h + parseInt(b(a[0]).attr("data-translate"))), a[0].style[c._prefixStyle("transform")] = "translate(0," + d + "px)" + g, b(a[1]).attr("data-translate") && (e = h + parseInt(b(a[1]).attr("data-translate"))), f = (1 - Math.abs(.2 * h / b(window).height())).toFixed(6), e /= 5, a[1].style[c._prefixStyle("transform")] = "translate(0," + e + "px)" + g + " scale(" + f + ")"
            }
        },
        page_touch_end: function() {
            page._moveInit = !1, page._mouseDown = !1, page._moveStart && (page._pageNext || 0 == page._pageNext) && (page._moveStart = !1, page._moveFirst = !0, Math.abs(page._touchDeltaY) > 10 && (page._page.eq(page._pageNext)[0].style[c._prefixStyle("transition")] = "all .3s", page._page.eq(page._pageNow)[0].style[c._prefixStyle("transition")] = "all .3s"), Math.abs(page._touchDeltaY) >= 100 ? page.page_success() : (Math.abs(page._touchDeltaY) > 10 && Math.abs(page._touchDeltaY) < 100, page.page_fial()), c._handleEvent("end"), page._movePosition = null, page._movePosition_c = null, page._touchStartValY = 0)
        },
        page_success: function() {
            var a = c._translateZ();
            page._page.eq(page._pageNext)[0].style[c._prefixStyle("transform")] = "translate(0,0)" + a;
            var d = page._touchDeltaY > 0 ? b(window).height() / 5 : -b(window).height() / 5,
                e = .8;
            page._page.eq(page._pageNow)[0].style[c._prefixStyle("transform")] = "translate(0," + d + "px)" + a + " scale(" + e + ")", c._handleEvent("success")
        },
        page_fial: function() {
            var a = c._translateZ();
            return page._pageNext || 0 == page._pageNext ? (page._page.eq(page._pageNext)[0].style[c._prefixStyle("transform")] = "up" == page._movePosition ? "translate(0," + b(window).height() + "px)" + a : "translate(0,-" + b(window).height() + "px)" + a, page._page.eq(page._pageNow)[0].style[c._prefixStyle("transform")] = "translate(0,0)" + a + " scale(1)", void c._handleEvent("fial")) : (page._moveStart = !0, void(page._moveFirst = !0))
        },
        height_auto: function(a, c) {
            c = c ? c : b(window).height(), a.children(".page-con").css("height", c)
        }
    }, b(function() {
        b(window).on("resize", function() {})
    })
})();
