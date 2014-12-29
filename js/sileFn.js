define(function (require, exports, module) {
    var b = require("./zepto"),
        d = require("./global"),
        e = require("./page"),
        c = {

            Txt_init: function(a) {
                a.find(".j-txt").length <= 0 || a.find(".j-txt").find(".j-detail p").length <= 0 || a.find(".j-txt").each(function() {
                    var a = b(this).find(".j-detail"),
                        c = b(this).find(".j-title"),
                        e = c.find(".txt-arrow"),
                        f = a.find("p"),
                        g = parseInt(c.height()),
                        h = parseInt(f.height()),
                        i = h + g;
                    f.length <= 0 || (b(this).parents(".m-page").hasClass("m-smallTxt") && (0 == b(this).parents(".smallTxt-bd").index() ? a.css("top", g) : a.css("bottom", g)), a.attr("data-height", h), b(this).attr("data-height-init", g), b(this).attr("data-height-extand", i), f[0].style[d._prefixStyle("transform")] = "translate(0,-" + h + "px)", b(this.parentNode).hasClass("z-left") && (f[0].style[d._prefixStyle("transform")] = "translate(0," + h + "px)"), a.css("height", "0"), e.removeClass("z-toggle"), b(this).css("height", g))
                })
            },
            bigTxt_extand: function() {
                b("body").on("click", ".j-title", function() {
                    if (!(b(".j-detail").length <= 0)) {
                        var a = b(this.parentNode).find(".j-detail");
                        b(".j-detail").removeClass("action"), a.addClass("action"), b(this).hasClass("smallTxt-arrow") && (b(".smallTxt-bd").removeClass("action"), a.parent().addClass("action")), a.hasClass("z-show") ? (a.removeClass("z-show"), a.css("height", 0), b(this.parentNode).css("height", parseInt(b(this.parentNode).attr("data-height-init")))) : (a.addClass("z-show"), a.css("height", parseInt(a.attr("data-height"))), b(this.parentNode).css("height", parseInt(b(this.parentNode).attr("data-height-extand")))), b(".j-detail").not(".action").removeClass("z-show"), b(".txt-arrow").removeClass("z-toggle"), a.hasClass("z-show") ? b(this).find(".txt-arrow").addClass("z-toggle") : b(this).find(".txt-arrow").removeClass("z-toggle")
                    }
                })
            },
            Txt_back: function() {
                b("body").on("click", ".m-page", function(a) {
                    a.stopPropagation();
                    var c = b(a.target),
                        d = c.parents(".m-page"),
                        e = 0 == c.parents(".j-txtWrap").length ? c : c.parents(".j-txtWrap");
                    if (!(d.find(".j-txt").find(".j-detail p").length <= 0 || d.find(".j-txt").length <= 0 || c.parents(".j-txt").length >= 1 || c.hasClass("bigTxt-btn") || c.parents(".bigTxt-btn").length >= 1)) {
                        var f = e.find(".j-detail");
                        b(".j-detail").removeClass("action"), f.addClass("action"), b(".j-detail").not(".action").removeClass("z-show"), e.each(function() {
                            var a = b(this).find(".j-detail"),
                                c = b(this).find(".txt-arrow"),
                                d = b(this).find(".j-txt");
                            a.hasClass("z-show") ? (a.removeClass("z-show"), a.css("height", 0), d.css("height", parseInt(d.attr("data-height-init")))) : (a.addClass("z-show"), a.css("height", parseInt(a.attr("data-height"))), d.css("height", parseInt(d.attr("data-height-extand")))), a.hasClass("z-show") ? c.addClass("z-toggle") : c.removeClass("z-toggle")
                        })
                    }
                })
            },

            sex_select: function() {
                var a = b("#j-signUp").find(".sex p"),
                    c = b("#j-signUp").find(".sex strong"),
                    d = b("#j-signUp").find(".sex input");
                a.on("click", function() {
                    var a = b(this).find("strong");
                    c.removeClass("open"), a.addClass("open");
                    var e = b(this).attr("data-sex");
                    d.val(e)
                })
            },
            lightapp_intro_show: function() {
                b(".market-notice").removeClass("f-hide"), setTimeout(function() {
                    b(".market-notice").addClass("show")
                }, 100)
            },
            lightapp_intro_hide: function(a) {
                return a ? void b(".market-notice").addClass("f-hide").removeClass("show") : (b(".market-notice").removeClass("show"), void setTimeout(function() {
                    b(".market-notice").addClass("f-hide")
                }, 500))
            },
            lightapp_intro: function() {
                b(".market-notice").off("click"), b(".market-notice").on("click", function() {
                    b(".market-page").removeClass("f-hide"), setTimeout(function() {
                        b(".market-page").addClass("show"), setTimeout(function() {
                            b(".market-img").addClass("show")
                        }, 100), c.lightapp_intro_hide()
                    }, 100), e.page_stop(), d._scrollStop()
                }), b(".market-page").off("click"), b(".market-page").on("click", function(a) {
                    b(a.target).hasClass("market-page") && (b(".market-img").removeClass("show"), setTimeout(function() {
                        b(".market-page").removeClass("show"), setTimeout(function() {
                            b(".market-page").addClass("f-hide")
                        }, 200)
                    }, 500), c.lightapp_intro_show(), e.page_start(), d._scrollStart())
                })
            },
            ajaxTongji: function(a) {
                var c = location.search.substr(location.search.indexOf("channel=") + 8);
                c = c.match(/^\d+/), (!c || isNaN(c) || 0 > c) && (c = 1);
                var d = b("#activity_id").val(),
                    e = "/analyseplugin/plugin?activity_id=" + d + "&plugtype=" + a;
                b.get(e, {}, function() {})
            },
            wxShare: function() {
                b("body").on("click", ".bigTxt-btn-wx", function() {
                    var a = b(this).parent().find(".bigTxt-weixin");
                    a.addClass("z-show"), e.page_stop(), a.on("click", function() {
                        b(this).removeClass("z-show"), e.page_start(), b(this).off("click")
                    })
                })
            },
            toggleVideo: function() {
                b(".j-video").find(".img").on("click", function() {
                    var a = b(this).next()[0];
                    a.length <= 0 || a.paused && (b(a).removeClass("f-hide"), a.play(), b(this).hide())
                })
            },
            signUp_submit: function() {
                b("#j-signUp-submit").on("click", function(a) {
                    a.preventDefault();
                    var c = b(this).parents("#j-signUp"),
                        d = g.signUpCheck_input(c, b(".u-note"));
                    d && g.signUpCheck_submit(c, b(".u-note"))
                })
            },
            loadingPageShow: function() {
                b(".u-pageLoading").show()
            },
            loadingPageHide: function() {
                b(".u-pageLoading").hide()
            }
        };
    return b(function() {
        c.bigTxt_extand(), c.Txt_back(), c.sex_select(), c.lightapp_intro(), c.wxShare(), c.toggleVideo(), c.signUp_submit(), c.Txt_init(e._page.eq(e._pageNow))
    }), c
});