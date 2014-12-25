var Global = {
    _click: "ontouchstart" in window ? "tap" : "click",
    _events: {},
    _windowHeight: Zepto(window).height(),
    _windowWidth: Zepto(window).width(),
    _rotateNode: Zepto(".p-ct"),
    _isMotion: !!window.DeviceMotionEvent,
    _elementStyle: document.createElement("div").style,
    _UC: RegExp("Android").test(navigator.userAgent) && RegExp("UC").test(navigator.userAgent) ? !0 : !1,
    _weixin: RegExp("MicroMessenger").test(navigator.userAgent) ? !0 : !1,
    _iPhoen: RegExp("iPhone").test(navigator.userAgent) || RegExp("iPod").test(navigator.userAgent) || RegExp("iPad").test(navigator.userAgent) ? !0 : !1,
    _Android: RegExp("Android").test(navigator.userAgent) ? !0 : !1,
    _IsPC: function() {
        for (var a = navigator.userAgent, b = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"), c = !0, d = 0; d < b.length; d++)
            if (a.indexOf(b[d]) > 0) {
                c = !1;
                break
            }
        return c
    },
    _isOwnEmpty: function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !1;
        return !0
    },
    _vendor: function() {
        for (var a, b = ["t", "webkitT", "MozT", "msT", "OT"], c = 0, d = b.length; d > c; c++)
            if (a = b[c] + "ransform", a in this._elementStyle) return b[c].substr(0, b[c].length - 1);
        return !1
    },
    _prefixStyle: function(a) {
        return this._vendor() === !1 ? !1 : "" === this._vendor() ? a : this._vendor() + a.charAt(0).toUpperCase() + a.substr(1)
    },
    _hasPerspective: function() {
        var a = this._prefixStyle("perspective") in this._elementStyle;
        return a && "webkitPerspective" in this._elementStyle && this._injectStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), !!a
    },
    _injectStyles: function(a, b, c, d) {
        var e, f, g, h, i = document.createElement("div"),
            j = document.body,
            k = j || document.createElement("body"),
            l = "modernizr";
        if (parseInt(c, 10))
            for (; c--;) g = document.createElement("div"), g.id = d ? d[c] : l + (c + 1), i.appendChild(g);
        return e = ["&#173;", '<style id="s', l, '">', a, "</style>"].join(""), i.id = l, (j ? i : k).innerHTML += e, k.appendChild(i), j || (k.style.background = "", k.style.overflow = "hidden", h = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(k)), f = b(i, a), j ? i.parentNode.removeChild(i) : (k.parentNode.removeChild(k), docElement.style.overflow = h), !!f
    },
    _translateZ: function() {
        return this._hasPerspective ? " translateZ(0)" : ""
    },
    _handleEvent: function(a) {
        if (this._events[a]) {
            var b = 0,
                c = this._events[a].length;
            if (c)
                for (; c > b; b++) this._events[a][b].apply(this, [].slice.call(arguments, 1))
        }
    },
    _on: function(a, b) {
        this._events[a] || (this._events[a] = []), this._events[a].push(b)
    },
    execHandler: function(a) {
        if (a && a instanceof Object) {
            var b = a.callback || null,
                c = a.opts || [],
                d = a.context || null,
                e = a.delay || -1;
            b && b instanceof Function && ("number" == typeof e && e >= 0 ? setTimeout(function() {
                b.call(d, c)
            }, e) : b.call(d, c))
        }
    },
    execAfterMergerHandler: function(a, b) {
        if (a && a instanceof Object) {
            {
                a.opts || []
            }
            a.opts = c.extend(a.opts, b)
        }
        this.execHandler(a)
    },
    _scrollStop: function() {
        Zepto("body").addClass("f-ofh"), Zepto(window).on("touchmove", this._scrollControl), Zepto(window).on("scroll", this._scrollControl)
    },
    _scrollStart: function() {
        Zepto("body").removeClass("f-ofh"), Zepto(window).off("touchmove"), Zepto(window).off("scroll")
    },
    _scrollControl: function(a) {
        return a.preventDefault(), !1
    },
    setActionHook: function() {
        Zepto("body").on(a._click, "[data-action]", d)
    },
    injectAction: function(a) {
        c.extend(c.Action, a)
    },
    loadingPageShow: function(a) {
        a.length >= 1 && a.show()
    },
    loadingPageHide: function(a) {
        a.length >= 1 && a.hide()
    },
    refresh: function() {
        this._windowHeight = Zepto(window).height(), this._windowWidth = Zepto(window).width()
    }
};