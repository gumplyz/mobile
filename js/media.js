define(function (require, exports, module) {
    var c = require("./zepto"),
        d = require("./global"),
        b = {
            _audioNode: c(".u-audio"),
            _audio: null,
            audio_init: function() {
                if (!(b._audioNode.length <= 0)) {
                    var a = {
                        loop: !0,
                        preload: "auto",
                        src: this._audioNode.attr("data-src")
                    };
                    this._audio = new Audio;
                    for (var c in a) a.hasOwnProperty(c) && c in this._audio && (this._audio[c] = a[c]);
                    this._audio.load()
                }
            },
            audio_addEvent: function() {
                function a(a, b, c) {
                    a.text(b ? "打开" : "关闭"), c && clearTimeout(c), a.removeClass("z-move z-hide"), c = setTimeout(function() {
                        a.addClass("z-move").addClass("z-hide")
                    }, 1e3)
                }
                if (!(this._audioNode.length <= 0)) {
                    var b = this._audioNode.find(".txt_audio"),
                        e = null;
                    c(this._audio).on("play", function() {
                        a(b, !0, e), d._handleEvent("audio_play")
                    }), c(this._audio).on("pause", function() {
                        a(b, !1, e), d._handleEvent("audio_pause")
                    })
                }
            },
            media_init: function() {
                this.audio_init(), this.audio_addEvent()
            }
        };
    return c(window).on("load", function() {
        b._audioNode.find(".btn_audio").on("click", function() {
            b._audio.paused ? b._audio.play() : b._audio.pause()
        })
    }), b
});