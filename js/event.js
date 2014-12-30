define(function(require) {
    var b = require("./zepto"),
        c = require("./global"),
        d = require("./page"),
        e = require("./image"),
        f = require("./sileFn"),
        g = require("./media");
    haddle_envent_fn = function() {
        c._on("start", function(){
            e.lazy_bigP();

        });
        c._on("fial", function() {
            setTimeout(function() {
                d._page.eq(d._pageNow).attr("data-translate", ""), d._page.eq(d._pageNow)[0].style[c._prefixStyle("transform")] = "", d._page.eq(d._pageNow)[0].style[c._prefixStyle("transition")] = "", d._page.eq(d._pageNext)[0].style[c._prefixStyle("transform")] = "", d._page.eq(d._pageNext)[0].style[c._prefixStyle("transition")] = "", d._page.eq(d._pageNext).removeClass("active").addClass("f-hide"), d._moveStart = !0, d._moveFirst = !0, d._pageNext = null, d._touchDeltaY = 0
            }, 300)
        });
        c._on("success", function() {
            0 == d._pageNext && d._pageNow == d._pageNum - 1 && (d._firstChange = !0), 0 != d._page.eq(d._pageNext).next(".m-page").length && f.lightapp_intro_hide(!0), setTimeout(function() {
                f.Txt_init(d._page.eq(d._pageNow)), d._pageNext == d._pageNum - 1 ? b(".u-arrow").addClass("f-hide") : b(".u-arrow").removeClass("f-hide"), d._page.eq(d._pageNow).addClass("f-hide"), d._page.eq(d._pageNow).attr("data-translate", ""), d._page.eq(d._pageNow)[0].style[c._prefixStyle("transform")] = "", d._page.eq(d._pageNow)[0].style[c._prefixStyle("transition")] = "", d._page.eq(d._pageNext)[0].style[c._prefixStyle("transform")] = "", d._page.eq(d._pageNext)[0].style[c._prefixStyle("transition")] = "", b(".p-ct").removeClass("fixed"), d._page.eq(d._pageNext).removeClass("active"), d._page.eq(d._pageNext).removeClass("fixed"), d._pageNow = d._pageNext, d._moveStart = !0, d._moveFirst = !0, d._pageNext = null, d._page.eq(d._pageNow).removeClass("fixed"), d._page.eq(d._pageNow).attr("data-translate", ""), d._touchDeltaY = 0, setTimeout(function() {
                    d._page.eq(d._pageNow).hasClass("z-animate") || d._page.eq(d._pageNow).addClass("z-animate")
                }, 20), b(".j-detail").removeClass("z-show"), b(".txt-arrow").removeClass("z-toggle"), b("video").each(function() {
                    this.paused || this.pause()
                }), f.Txt_init(d._page.eq(d._pageNow)), 0 == d._page.eq(d._pageNow).next(".m-page").length && (f.lightapp_intro_show(), f.lightapp_intro())
            }, 300);
            var teletextnode=d._page.eq(d._pageNow).find(".page-teletext");
            if(teletextnode.length>0){
                teletextnode.trigger("active");
            }
        });
        c._on("end", function(){
            var teletextnode=d._page.eq(d._pageNext).find(".page-teletext");
            if(teletextnode.length>0){
                teletextnode.trigger("current");
            }

        });
        c._on("audio_play", function() {
            b.fn.coffee.start(), b(".coffee-steam-box").show(500)
        }), c._on("audio_pause", function() {
            b.fn.coffee.stop(), b(".coffee-steam-box").hide(500)
        }), c._on("video_open", function() {
            var a = g._audio;
            g._audioNode.addClass("z-low"), b(".u-arrow").addClass("f-hide"), b(document.body).css("height", b(window).height()), a && a.pause(), d.page_stop()
        }), c._on("video_close", function() {
            var a = g._audio;
            g._audioNode.removeClass("z-low"), b(".u-arrow").removeClass("f-hide"), b(document.body).css("height", "100%"), a && a.play(), d.page_start()
        })
    }, b(function() {
        haddle_envent_fn()
    })
})