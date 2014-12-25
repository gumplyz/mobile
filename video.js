var video = (function(){
    var c=Global;
    Zepto(".u-maskLayer-close").on("click", function() {
        Zepto(this).parent().trigger("click");
    });
    var v={
        _video: Zepto(".j-video"),
        _videoArr: [],
        video_init: function() {
            var a = this;
            this._video.each(function() {
                var d, e = Zepto(this).attr("data-video-src"),
                    f = Zepto(this).attr("data-video-type"),
                    g = Zepto(this).find(".img"),
                    h = Zepto(this).find(".video");
                "bendi" == f ? d = a.bendi_video(e) : "qq" == f ? d = a.qq_video(e) : "youku" == f && (d = a.youku_video(e));
                Zepto(this).find(".videoWrap").append(Zepto(d));
                a._videoArr.push(d);
                g.on("click", function() {
                    Zepto(this).hide();
                    "IFRAME" == d.nodeName && b(d).data("src") && (d.src = Zepto(d).data("src"));
                    h.removeClass("f-hide");
                    setTimeout(function() {
                        h.addClass("z-show");
                        setTimeout(function() {
                            "function" == typeof d.play && d.play()
                        }, 500);
                    }, 20);
                    c._handleEvent("video_open", d)
                });
                h.on("click", function(a) {
                    var e = a.target;
                    Zepto(e).hasClass("videoWrap") || Zepto(e).parents(".videoWrap").length >= 1 || (h.removeClass("z-show"),
                        g.show(),
                    "function" == typeof d.pause && d.pause(),
                    "IFRAME" == d.nodeName && (Zepto(d).data("src", d.src), d.src = ""), setTimeout(function() {
                        h.addClass("f-hide"), c._handleEvent("video_close", d)
                    }, 500))
                });
            })
        },
        bendi_video: function(a) {
            var c = {
                    controls: "controls",
                    preload: "none",
                    src: a
                },
                d = Zepto("<video></video>")[0];
            for (var e in c) c.hasOwnProperty(e) && e in d && (d[e] = c[e]);
            return d
        },
        qq_video: function(a) {
            return b('<iframe src="' + a + '" frameborder=0 allowfullscreen></iframe>')[0]
        },
        youku_video: function(a) {
            return b('<iframe src="' + a + '" frameborder=0 allowfullscreen></iframe>')[0]
        }
    };
    return v;
} )();
