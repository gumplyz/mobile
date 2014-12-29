define(function (require, exports, module) {
    var b = require("./zepto");
    b=require("./ylmusic");
    var c = require("./mask"),
        d = (require("./global"), require("./page")),
        e = require("./media"),
        f = require("./video"),
        g = {
            init: function() {
                b("#coffee_flow").coffee({
                    steams: ["<img src='img/audio_widget_01@2x.png' />", "<img src='img/audio_widget_01@2x.png' />"],
                    steamHeight: 100,
                    steamWidth: 44
                }), e.media_init(), f.video_init();
                var a = b(".translate-front").data("open");
                if (1 == a) {
                    var c = b("#j-mengban")[0],
                        d = "/template/19/img/page_01_bg@2x.jpg",
                        h = b("#r-cover").val(),
                        i = "image",
                        j = 640,
                        k = b(window).height(),
                        l = g.start_callback;
                    g.cover_draw(c, d, h, i, j, k, l)
                } else g.start_callback()
            },
            cover_draw: function(a, b, d, e, f, g, h) {
                if (!(a.style.display.indexOf("none") > -1)) {
                    var i = new c(a, d, e, f, g, h);
                    i.init()
                }
            },
            start_callback: function() {
                var a = b(".translate-front").data("open");
                if (d.page_start(), b(document).one("touchstart", function() {
                        e._audio.play()
                    }), 1 == a) {
                    if (b("#j-mengban").removeClass("z-show"), setTimeout(function() {
                            b("#j-mengban").addClass("f-hide")
                        }, 1500), b(".u-arrow").removeClass("f-hide"), !e._audio) return;
                    e._audioNode.removeClass("f-hide"), e._audio.play()
                } else b("#j-mengban").removeClass("z-show").addClass("f-hide")
            }
        };
    return b(window).on("load", function() {
        g.init()
    }), g
});