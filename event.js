(function () {
    var b = Zepto,
        c = Global,
        d = page,
        e = LazyImage;
    c._on("start", e.lazy_bigP);
    c._on("fial", function () {
        setTimeout(function () {
            d._page.eq(d._pageNow).attr("data-translate", ""), d._page.eq(d._pageNow)[0].style[c._prefixStyle("transform")] = "", d._page.eq(d._pageNow)[0].style[c._prefixStyle("transition")] = "", d._page.eq(d._pageNext)[0].style[c._prefixStyle("transform")] = "", d._page.eq(d._pageNext)[0].style[c._prefixStyle("transition")] = "", d._page.eq(d._pageNext).removeClass("active").addClass("f-hide"), d._moveStart = !0, d._moveFirst = !0, d._pageNext = null, d._touchDeltaY = 0
        }, 300)
    });
    c._on("success", function () {
        0 == d._pageNext && d._pageNow == d._pageNum - 1 && (d._firstChange = !0), 0 != d._page.eq(d._pageNext).next(".m-page").length, setTimeout(function () {
            d._pageNext == d._pageNum - 1 ? b(".u-arrow").addClass("f-hide") : b(".u-arrow").removeClass("f-hide"), d._page.eq(d._pageNow).addClass("f-hide"), d._page.eq(d._pageNow).attr("data-translate", ""), d._page.eq(d._pageNow)[0].style[c._prefixStyle("transform")] = "", d._page.eq(d._pageNow)[0].style[c._prefixStyle("transition")] = "", d._page.eq(d._pageNext)[0].style[c._prefixStyle("transform")] = "", d._page.eq(d._pageNext)[0].style[c._prefixStyle("transition")] = "", b(".p-ct").removeClass("fixed"), d._page.eq(d._pageNext).removeClass("active"), d._page.eq(d._pageNext).removeClass("fixed"), d._pageNow = d._pageNext, d._moveStart = !0, d._moveFirst = !0, d._pageNext = null, d._page.eq(d._pageNow).removeClass("fixed"), d._page.eq(d._pageNow).attr("data-translate", ""), d._touchDeltaY = 0, setTimeout(function () {
                d._page.eq(d._pageNow).hasClass("z-animate") || d._page.eq(d._pageNow).addClass("z-animate")
            }, 20), b(".j-detail").removeClass("z-show"), b(".txt-arrow").removeClass("z-toggle"), b("video").each(function () {
                this.paused || this.pause()
            }), 0 == d._page.eq(d._pageNow).next(".m-page").length
        }, 300)
    });
})();