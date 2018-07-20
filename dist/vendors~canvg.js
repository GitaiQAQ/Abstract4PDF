/*!
 * Abstract4PDF 0.1.0 <https://github.com/GitaiQAQ/Abstract4PDF>
 * Copyright (c) 2018 Gitai <i@gitai.me> https://gitai.me
 * Released under MIT License
 */
(window["webpackJsonpabstract4pdf"] = window["webpackJsonpabstract4pdf"] || []).push([["vendors~canvg"],{

/***/ "./node_modules/html2canvas/dist/npm/libs/canvg.js":
/*!*********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/libs/canvg.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * canvg.js - Javascript SVG parser and renderer on Canvas
 * MIT Licensed
 * Gabe Lerner (gabelerner@gmail.com)
 * http://code.google.com/p/canvg/
 *
 * Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/
 */


!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./rgbcolor */ "./node_modules/html2canvas/dist/npm/libs/rgbcolor.js"), __webpack_require__(/*! stackblur-canvas */ "./node_modules/stackblur-canvas/src/stackblur.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (RGBColor, stackBlur) {
    // canvg(target, s)
    // empty parameters: replace all 'svg' elements on page with 'canvas' elements
    // target: canvas element or the id of a canvas element
    // s: svg string, url to svg file, or xml document
    // opts: optional hash of options
    //		 ignoreMouse: true => ignore mouse events
    //		 ignoreAnimation: true => ignore animations
    //		 ignoreDimensions: true => does not try to resize canvas
    //       ignoreClear: true => does not clear canvas
    //       offsetX: int => draws at a x offset
    //		 offsetY: int => draws at a y offset
    //       scaleWidth: int => scales horizontally to width
    //       scaleHeight: int => scales vertically to height
    //       renderCallback: function => will call the function after the first render is completed
    //       forceRedraw: function => will call the function on every frame, if it returns true, will redraw
    var canvg = function canvg(target, s, opts) {
        // no parameters
        if (target == null && s == null && opts == null) {
            var svgTags = document.querySelectorAll('svg');
            for (var i = 0; i < svgTags.length; i++) {
                var svgTag = svgTags[i];
                var c = document.createElement('canvas');
                c.width = svgTag.clientWidth;
                c.height = svgTag.clientHeight;
                svgTag.parentNode.insertBefore(c, svgTag);
                svgTag.parentNode.removeChild(svgTag);
                var div = document.createElement('div');
                div.appendChild(svgTag);
                canvg(c, div.innerHTML);
            }
            return;
        }

        if (typeof target == 'string') {
            target = document.getElementById(target);
        }

        // store class on canvas
        if (target.svg != null) target.svg.stop();
        var svg = build(opts || {});
        // on i.e. 8 for flash canvas, we can't assign the property so check for it
        if (!(target.childNodes.length == 1 && target.childNodes[0].nodeName == 'OBJECT')) target.svg = svg;

        var ctx = target.getContext('2d');
        if (typeof s.documentElement != 'undefined') {
            // load from xml doc
            svg.loadXmlDoc(ctx, s);
        } else if (s.substr(0, 1) == '<') {
            // load from xml string
            svg.loadXml(ctx, s);
        } else {
            // load from url
            svg.load(ctx, s);
        }
    };

    // see https://developer.mozilla.org/en-US/docs/Web/API/Element.matches
    var matchesSelector;
    if (typeof Element.prototype.matches != 'undefined') {
        matchesSelector = function matchesSelector(node, selector) {
            return node.matches(selector);
        };
    } else if (typeof Element.prototype.webkitMatchesSelector != 'undefined') {
        matchesSelector = function matchesSelector(node, selector) {
            return node.webkitMatchesSelector(selector);
        };
    } else if (typeof Element.prototype.mozMatchesSelector != 'undefined') {
        matchesSelector = function matchesSelector(node, selector) {
            return node.mozMatchesSelector(selector);
        };
    } else if (typeof Element.prototype.msMatchesSelector != 'undefined') {
        matchesSelector = function matchesSelector(node, selector) {
            return node.msMatchesSelector(selector);
        };
    } else if (typeof Element.prototype.oMatchesSelector != 'undefined') {
        matchesSelector = function matchesSelector(node, selector) {
            return node.oMatchesSelector(selector);
        };
    } else {
        // requires Sizzle: https://github.com/jquery/sizzle/wiki/Sizzle-Documentation
        // or jQuery: http://jquery.com/download/
        // or Zepto: http://zeptojs.com/#
        // without it, this is a ReferenceError

        if (typeof jQuery === 'function' || typeof Zepto === 'function') {
            matchesSelector = function matchesSelector(node, selector) {
                return $(node).is(selector);
            };
        }

        if (typeof matchesSelector === 'undefined') {
            matchesSelector = Sizzle.matchesSelector;
        }
    }

    // slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js
    var attributeRegex = /(\[[^\]]+\])/g;
    var idRegex = /(#[^\s\+>~\.\[:]+)/g;
    var classRegex = /(\.[^\s\+>~\.\[:]+)/g;
    var pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi;
    var pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi;
    var pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g;
    var elementRegex = /([^\s\+>~\.\[:]+)/g;

    function getSelectorSpecificity(selector) {
        var typeCount = [0, 0, 0];
        var findMatch = function findMatch(regex, type) {
            var matches = selector.match(regex);
            if (matches == null) {
                return;
            }
            typeCount[type] += matches.length;
            selector = selector.replace(regex, ' ');
        };

        selector = selector.replace(/:not\(([^\)]*)\)/g, '     $1 ');
        selector = selector.replace(/{[^]*/gm, ' ');
        findMatch(attributeRegex, 1);
        findMatch(idRegex, 0);
        findMatch(classRegex, 1);
        findMatch(pseudoElementRegex, 2);
        findMatch(pseudoClassWithBracketsRegex, 1);
        findMatch(pseudoClassRegex, 1);
        selector = selector.replace(/[\*\s\+>~]/g, ' ');
        selector = selector.replace(/[#\.]/g, ' ');
        findMatch(elementRegex, 2);
        return typeCount.join('');
    }

    function build(opts) {
        var svg = {
            opts: opts
        };

        svg.FRAMERATE = 30;
        svg.MAX_VIRTUAL_PIXELS = 30000;

        svg.log = function (msg) {};
        if (svg.opts['log'] == true && typeof console != 'undefined') {
            svg.log = function (msg) {
                // console.log(msg);
            };
        }

        // globals
        svg.init = function (ctx) {
            var uniqueId = 0;
            svg.UniqueId = function () {
                uniqueId++;
                return 'canvg' + uniqueId;
            };
            svg.Definitions = {};
            svg.Styles = {};
            svg.StylesSpecificity = {};
            svg.Animations = [];
            svg.Images = [];
            svg.ctx = ctx;
            svg.ViewPort = new function () {
                this.viewPorts = [];
                this.Clear = function () {
                    this.viewPorts = [];
                };
                this.SetCurrent = function (width, height) {
                    this.viewPorts.push({
                        width: width,
                        height: height
                    });
                };
                this.RemoveCurrent = function () {
                    this.viewPorts.pop();
                };
                this.Current = function () {
                    return this.viewPorts[this.viewPorts.length - 1];
                };
                this.width = function () {
                    return this.Current().width;
                };
                this.height = function () {
                    return this.Current().height;
                };
                this.ComputeSize = function (d) {
                    if (d != null && typeof d == 'number') return d;
                    if (d == 'x') return this.width();
                    if (d == 'y') return this.height();
                    return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2);
                };
            }();
        };

        svg.init();

        // images loaded
        svg.ImagesLoaded = function () {
            for (var i = 0; i < svg.Images.length; i++) {
                if (!svg.Images[i].loaded) {
                    return false;
                }
            }
            return true;
        };

        // trim
        svg.trim = function (s) {
            return s.replace(/^\s+|\s+$/g, '');
        };

        // compress spaces
        svg.compressSpaces = function (s) {
            return s.replace(/[\s\r\t\n]+/gm, ' ');
        };

        // ajax
        svg.ajax = function (url) {
            var AJAX;
            if (window.XMLHttpRequest) {
                AJAX = new XMLHttpRequest();
            } else {
                AJAX = new ActiveXObject('Microsoft.XMLHTTP');
            }
            if (AJAX) {
                AJAX.open('GET', url, false);
                AJAX.send(null);
                return AJAX.responseText;
            }
            return null;
        };

        // parse xml
        svg.parseXml = function (xml) {
            if (typeof Windows != 'undefined' && typeof Windows.Data != 'undefined' && typeof Windows.Data.Xml != 'undefined') {
                var xmlDoc = new Windows.Data.Xml.Dom.XmlDocument();
                var settings = new Windows.Data.Xml.Dom.XmlLoadSettings();
                settings.prohibitDtd = false;
                xmlDoc.loadXml(xml, settings);
                return xmlDoc;
            } else if (window.DOMParser) {
                var parser = new DOMParser();
                return parser.parseFromString(xml, 'text/xml');
            } else {
                xml = xml.replace(/<!DOCTYPE svg[^>]*>/, '');
                var xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = 'false';
                xmlDoc.loadXML(xml);
                return xmlDoc;
            }
        };

        svg.Property = function (name, value) {
            this.name = name;
            this.value = value;
        };

        svg.Property.prototype.getValue = function () {
            return this.value;
        };

        svg.Property.prototype.hasValue = function () {
            return this.value != null && this.value !== '';
        };

        // return the numerical value of the property
        svg.Property.prototype.numValue = function () {
            if (!this.hasValue()) return 0;

            var n = parseFloat(this.value);
            if ((this.value + '').match(/%$/)) {
                n = n / 100.0;
            }
            return n;
        };

        svg.Property.prototype.valueOrDefault = function (def) {
            if (this.hasValue()) return this.value;
            return def;
        };

        svg.Property.prototype.numValueOrDefault = function (def) {
            if (this.hasValue()) return this.numValue();
            return def;
        };

        // color extensions
        // augment the current color value with the opacity
        svg.Property.prototype.addOpacity = function (opacityProp) {
            var newValue = this.value;
            if (opacityProp.value != null && opacityProp.value != '' && typeof this.value == 'string') {
                // can only add opacity to colors, not patterns
                var color = new RGBColor(this.value);
                if (color.ok) {
                    newValue = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + opacityProp.numValue() + ')';
                }
            }
            return new svg.Property(this.name, newValue);
        };

        // definition extensions
        // get the definition from the definitions table
        svg.Property.prototype.getDefinition = function () {
            var name = this.value.match(/#([^\)'"]+)/);
            if (name) {
                name = name[1];
            }
            if (!name) {
                name = this.value;
            }
            return svg.Definitions[name];
        };

        svg.Property.prototype.isUrlDefinition = function () {
            return this.value.indexOf('url(') == 0;
        };

        svg.Property.prototype.getFillStyleDefinition = function (e, opacityProp) {
            var def = this.getDefinition();

            // gradient
            if (def != null && def.createGradient) {
                return def.createGradient(svg.ctx, e, opacityProp);
            }

            // pattern
            if (def != null && def.createPattern) {
                if (def.getHrefAttribute().hasValue()) {
                    var pt = def.attribute('patternTransform');
                    def = def.getHrefAttribute().getDefinition();
                    if (pt.hasValue()) {
                        def.attribute('patternTransform', true).value = pt.value;
                    }
                }
                return def.createPattern(svg.ctx, e);
            }

            return null;
        };

        // length extensions
        svg.Property.prototype.getDPI = function (viewPort) {
            return 96.0; // TODO: compute?
        };

        svg.Property.prototype.getEM = function (viewPort) {
            var em = 12;

            var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
            if (fontSize.hasValue()) em = fontSize.toPixels(viewPort);

            return em;
        };

        svg.Property.prototype.getUnits = function () {
            var s = this.value + '';
            return s.replace(/[0-9\.\-]/g, '');
        };

        // get the length as pixels
        svg.Property.prototype.toPixels = function (viewPort, processPercent) {
            if (!this.hasValue()) return 0;
            var s = this.value + '';
            if (s.match(/em$/)) return this.numValue() * this.getEM(viewPort);
            if (s.match(/ex$/)) return this.numValue() * this.getEM(viewPort) / 2.0;
            if (s.match(/px$/)) return this.numValue();
            if (s.match(/pt$/)) return this.numValue() * this.getDPI(viewPort) * (1.0 / 72.0);
            if (s.match(/pc$/)) return this.numValue() * 15;
            if (s.match(/cm$/)) return this.numValue() * this.getDPI(viewPort) / 2.54;
            if (s.match(/mm$/)) return this.numValue() * this.getDPI(viewPort) / 25.4;
            if (s.match(/in$/)) return this.numValue() * this.getDPI(viewPort);
            if (s.match(/%$/)) return this.numValue() * svg.ViewPort.ComputeSize(viewPort);
            var n = this.numValue();
            if (processPercent && n < 1.0) return n * svg.ViewPort.ComputeSize(viewPort);
            return n;
        };

        // time extensions
        // get the time as milliseconds
        svg.Property.prototype.toMilliseconds = function () {
            if (!this.hasValue()) return 0;
            var s = this.value + '';
            if (s.match(/s$/)) return this.numValue() * 1000;
            if (s.match(/ms$/)) return this.numValue();
            return this.numValue();
        };

        // angle extensions
        // get the angle as radians
        svg.Property.prototype.toRadians = function () {
            if (!this.hasValue()) return 0;
            var s = this.value + '';
            if (s.match(/deg$/)) return this.numValue() * (Math.PI / 180.0);
            if (s.match(/grad$/)) return this.numValue() * (Math.PI / 200.0);
            if (s.match(/rad$/)) return this.numValue();
            return this.numValue() * (Math.PI / 180.0);
        };

        // text extensions
        // get the text baseline
        var textBaselineMapping = {
            'baseline': 'alphabetic',
            'before-edge': 'top',
            'text-before-edge': 'top',
            'middle': 'middle',
            'central': 'middle',
            'after-edge': 'bottom',
            'text-after-edge': 'bottom',
            'ideographic': 'ideographic',
            'alphabetic': 'alphabetic',
            'hanging': 'hanging',
            'mathematical': 'alphabetic'
        };
        svg.Property.prototype.toTextBaseline = function () {
            if (!this.hasValue()) return null;
            return textBaselineMapping[this.value];
        };

        // fonts
        svg.Font = new function () {
            this.Styles = 'normal|italic|oblique|inherit';
            this.Variants = 'normal|small-caps|inherit';
            this.Weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';

            this.CreateFont = function (fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
                var f = inherit != null ? this.Parse(inherit) : this.CreateFont('', '', '', '', '', svg.ctx.font);
                return {
                    fontFamily: fontFamily || f.fontFamily,
                    fontSize: fontSize || f.fontSize,
                    fontStyle: fontStyle || f.fontStyle,
                    fontWeight: fontWeight || f.fontWeight,
                    fontVariant: fontVariant || f.fontVariant,
                    toString: function toString() {
                        return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(' ');
                    }
                };
            };

            var that = this;
            this.Parse = function (s) {
                var f = {};
                var d = svg.trim(svg.compressSpaces(s || '')).split(' ');
                var set = {
                    fontSize: false,
                    fontStyle: false,
                    fontWeight: false,
                    fontVariant: false
                };
                var ff = '';
                for (var i = 0; i < d.length; i++) {
                    if (!set.fontStyle && that.Styles.indexOf(d[i]) != -1) {
                        if (d[i] != 'inherit') f.fontStyle = d[i];
                        set.fontStyle = true;
                    } else if (!set.fontVariant && that.Variants.indexOf(d[i]) != -1) {
                        if (d[i] != 'inherit') f.fontVariant = d[i];
                        set.fontStyle = set.fontVariant = true;
                    } else if (!set.fontWeight && that.Weights.indexOf(d[i]) != -1) {
                        if (d[i] != 'inherit') f.fontWeight = d[i];
                        set.fontStyle = set.fontVariant = set.fontWeight = true;
                    } else if (!set.fontSize) {
                        if (d[i] != 'inherit') f.fontSize = d[i].split('/')[0];
                        set.fontStyle = set.fontVariant = set.fontWeight = set.fontSize = true;
                    } else {
                        if (d[i] != 'inherit') ff += d[i];
                    }
                }
                if (ff != '') f.fontFamily = ff;
                return f;
            };
        }();

        // points and paths
        svg.ToNumberArray = function (s) {
            var a = svg.trim(svg.compressSpaces((s || '').replace(/,/g, ' '))).split(' ');
            for (var i = 0; i < a.length; i++) {
                a[i] = parseFloat(a[i]);
            }
            return a;
        };

        svg.Point = function (x, y) {
            this.x = x;
            this.y = y;
        };

        svg.Point.prototype.angleTo = function (p) {
            return Math.atan2(p.y - this.y, p.x - this.x);
        };

        svg.Point.prototype.applyTransform = function (v) {
            var xp = this.x * v[0] + this.y * v[2] + v[4];
            var yp = this.x * v[1] + this.y * v[3] + v[5];
            this.x = xp;
            this.y = yp;
        };

        svg.CreatePoint = function (s) {
            var a = svg.ToNumberArray(s);
            return new svg.Point(a[0], a[1]);
        };

        svg.CreatePath = function (s) {
            var a = svg.ToNumberArray(s);
            var path = [];
            for (var i = 0; i < a.length; i += 2) {
                path.push(new svg.Point(a[i], a[i + 1]));
            }
            return path;
        };

        // bounding box
        svg.BoundingBox = function (x1, y1, x2, y2) {
            // pass in initial points if you want
            this.x1 = Number.NaN;
            this.y1 = Number.NaN;
            this.x2 = Number.NaN;
            this.y2 = Number.NaN;

            this.x = function () {
                return this.x1;
            };
            this.y = function () {
                return this.y1;
            };
            this.width = function () {
                return this.x2 - this.x1;
            };
            this.height = function () {
                return this.y2 - this.y1;
            };

            this.addPoint = function (x, y) {
                if (x != null) {
                    if (isNaN(this.x1) || isNaN(this.x2)) {
                        this.x1 = x;
                        this.x2 = x;
                    }
                    if (x < this.x1) this.x1 = x;
                    if (x > this.x2) this.x2 = x;
                }

                if (y != null) {
                    if (isNaN(this.y1) || isNaN(this.y2)) {
                        this.y1 = y;
                        this.y2 = y;
                    }
                    if (y < this.y1) this.y1 = y;
                    if (y > this.y2) this.y2 = y;
                }
            };
            this.addX = function (x) {
                this.addPoint(x, null);
            };
            this.addY = function (y) {
                this.addPoint(null, y);
            };

            this.addBoundingBox = function (bb) {
                this.addPoint(bb.x1, bb.y1);
                this.addPoint(bb.x2, bb.y2);
            };

            this.addQuadraticCurve = function (p0x, p0y, p1x, p1y, p2x, p2y) {
                var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
                var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
                var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
                var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
                this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
            };

            this.addBezierCurve = function (p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
                // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
                var p0 = [p0x, p0y],
                    p1 = [p1x, p1y],
                    p2 = [p2x, p2y],
                    p3 = [p3x, p3y];
                this.addPoint(p0[0], p0[1]);
                this.addPoint(p3[0], p3[1]);

                for (var i = 0; i <= 1; i++) {
                    var f = function f(t) {
                        return Math.pow(1 - t, 3) * p0[i] + 3 * Math.pow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * Math.pow(t, 2) * p2[i] + Math.pow(t, 3) * p3[i];
                    };

                    var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
                    var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
                    var c = 3 * p1[i] - 3 * p0[i];

                    if (a == 0) {
                        if (b == 0) continue;
                        var t = -c / b;
                        if (0 < t && t < 1) {
                            if (i == 0) this.addX(f(t));
                            if (i == 1) this.addY(f(t));
                        }
                        continue;
                    }

                    var b2ac = Math.pow(b, 2) - 4 * c * a;
                    if (b2ac < 0) continue;
                    var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
                    if (0 < t1 && t1 < 1) {
                        if (i == 0) this.addX(f(t1));
                        if (i == 1) this.addY(f(t1));
                    }
                    var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
                    if (0 < t2 && t2 < 1) {
                        if (i == 0) this.addX(f(t2));
                        if (i == 1) this.addY(f(t2));
                    }
                }
            };

            this.isPointInBox = function (x, y) {
                return this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2;
            };

            this.addPoint(x1, y1);
            this.addPoint(x2, y2);
        };

        // transforms
        svg.Transform = function (v) {
            var that = this;
            this.Type = {};

            // translate
            this.Type.translate = function (s) {
                this.p = svg.CreatePoint(s);
                this.apply = function (ctx) {
                    ctx.translate(this.p.x || 0.0, this.p.y || 0.0);
                };
                this.unapply = function (ctx) {
                    ctx.translate(-1.0 * this.p.x || 0.0, -1.0 * this.p.y || 0.0);
                };
                this.applyToPoint = function (p) {
                    p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
                };
            };

            // rotate
            this.Type.rotate = function (s) {
                var a = svg.ToNumberArray(s);
                this.angle = new svg.Property('angle', a[0]);
                this.cx = a[1] || 0;
                this.cy = a[2] || 0;
                this.apply = function (ctx) {
                    ctx.translate(this.cx, this.cy);
                    ctx.rotate(this.angle.toRadians());
                    ctx.translate(-this.cx, -this.cy);
                };
                this.unapply = function (ctx) {
                    ctx.translate(this.cx, this.cy);
                    ctx.rotate(-1.0 * this.angle.toRadians());
                    ctx.translate(-this.cx, -this.cy);
                };
                this.applyToPoint = function (p) {
                    var a = this.angle.toRadians();
                    p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
                    p.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]);
                    p.applyTransform([1, 0, 0, 1, -this.p.x || 0.0, -this.p.y || 0.0]);
                };
            };

            this.Type.scale = function (s) {
                this.p = svg.CreatePoint(s);
                this.apply = function (ctx) {
                    ctx.scale(this.p.x || 1.0, this.p.y || this.p.x || 1.0);
                };
                this.unapply = function (ctx) {
                    ctx.scale(1.0 / this.p.x || 1.0, 1.0 / this.p.y || this.p.x || 1.0);
                };
                this.applyToPoint = function (p) {
                    p.applyTransform([this.p.x || 0.0, 0, 0, this.p.y || 0.0, 0, 0]);
                };
            };

            this.Type.matrix = function (s) {
                this.m = svg.ToNumberArray(s);
                this.apply = function (ctx) {
                    ctx.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
                };
                this.unapply = function (ctx) {
                    var a = this.m[0];
                    var b = this.m[2];
                    var c = this.m[4];
                    var d = this.m[1];
                    var e = this.m[3];
                    var f = this.m[5];
                    var g = 0.0;
                    var h = 0.0;
                    var i = 1.0;
                    var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
                    ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
                };
                this.applyToPoint = function (p) {
                    p.applyTransform(this.m);
                };
            };

            this.Type.SkewBase = function (s) {
                this.base = that.Type.matrix;
                this.base(s);
                this.angle = new svg.Property('angle', s);
            };
            this.Type.SkewBase.prototype = new this.Type.matrix();

            this.Type.skewX = function (s) {
                this.base = that.Type.SkewBase;
                this.base(s);
                this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0];
            };
            this.Type.skewX.prototype = new this.Type.SkewBase();

            this.Type.skewY = function (s) {
                this.base = that.Type.SkewBase;
                this.base(s);
                this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0];
            };
            this.Type.skewY.prototype = new this.Type.SkewBase();

            this.transforms = [];

            this.apply = function (ctx) {
                for (var i = 0; i < this.transforms.length; i++) {
                    this.transforms[i].apply(ctx);
                }
            };

            this.unapply = function (ctx) {
                for (var i = this.transforms.length - 1; i >= 0; i--) {
                    this.transforms[i].unapply(ctx);
                }
            };

            this.applyToPoint = function (p) {
                for (var i = 0; i < this.transforms.length; i++) {
                    this.transforms[i].applyToPoint(p);
                }
            };

            var data = svg.trim(svg.compressSpaces(v)).replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g, ') ').split(/\s(?=[a-z])/);
            for (var i = 0; i < data.length; i++) {
                var type = svg.trim(data[i].split('(')[0]);
                var s = data[i].split('(')[1].replace(')', '');
                var transform = new this.Type[type](s);
                transform.type = type;
                this.transforms.push(transform);
            }
        };

        // aspect ratio
        svg.AspectRatio = function (ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX, minY, refX, refY) {
            // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
            aspectRatio = svg.compressSpaces(aspectRatio);
            aspectRatio = aspectRatio.replace(/^defer\s/, ''); // ignore defer
            var align = aspectRatio.split(' ')[0] || 'xMidYMid';
            var meetOrSlice = aspectRatio.split(' ')[1] || 'meet';

            // calculate scale
            var scaleX = width / desiredWidth;
            var scaleY = height / desiredHeight;
            var scaleMin = Math.min(scaleX, scaleY);
            var scaleMax = Math.max(scaleX, scaleY);
            if (meetOrSlice == 'meet') {
                desiredWidth *= scaleMin;
                desiredHeight *= scaleMin;
            }
            if (meetOrSlice == 'slice') {
                desiredWidth *= scaleMax;
                desiredHeight *= scaleMax;
            }

            refX = new svg.Property('refX', refX);
            refY = new svg.Property('refY', refY);
            if (refX.hasValue() && refY.hasValue()) {
                ctx.translate(-scaleMin * refX.toPixels('x'), -scaleMin * refY.toPixels('y'));
            } else {
                // align
                if (align.match(/^xMid/) && (meetOrSlice == 'meet' && scaleMin == scaleY || meetOrSlice == 'slice' && scaleMax == scaleY)) ctx.translate(width / 2.0 - desiredWidth / 2.0, 0);
                if (align.match(/YMid$/) && (meetOrSlice == 'meet' && scaleMin == scaleX || meetOrSlice == 'slice' && scaleMax == scaleX)) ctx.translate(0, height / 2.0 - desiredHeight / 2.0);
                if (align.match(/^xMax/) && (meetOrSlice == 'meet' && scaleMin == scaleY || meetOrSlice == 'slice' && scaleMax == scaleY)) ctx.translate(width - desiredWidth, 0);
                if (align.match(/YMax$/) && (meetOrSlice == 'meet' && scaleMin == scaleX || meetOrSlice == 'slice' && scaleMax == scaleX)) ctx.translate(0, height - desiredHeight);
            }

            // scale
            if (align == 'none') ctx.scale(scaleX, scaleY);else if (meetOrSlice == 'meet') ctx.scale(scaleMin, scaleMin);else if (meetOrSlice == 'slice') ctx.scale(scaleMax, scaleMax);

            // translate
            ctx.translate(minX == null ? 0 : -minX, minY == null ? 0 : -minY);
        };

        // elements
        svg.Element = {};

        svg.EmptyProperty = new svg.Property('EMPTY', '');

        svg.Element.ElementBase = function (node) {
            this.attributes = {};
            this.styles = {};
            this.stylesSpecificity = {};
            this.children = [];

            // get or create attribute
            this.attribute = function (name, createIfNotExists) {
                var a = this.attributes[name];
                if (a != null) return a;

                if (createIfNotExists == true) {
                    a = new svg.Property(name, '');
                    this.attributes[name] = a;
                }
                return a || svg.EmptyProperty;
            };

            this.getHrefAttribute = function () {
                for (var a in this.attributes) {
                    if (a == 'href' || a.match(/:href$/)) {
                        return this.attributes[a];
                    }
                }
                return svg.EmptyProperty;
            };

            // get or create style, crawls up node tree
            this.style = function (name, createIfNotExists, skipAncestors) {
                var s = this.styles[name];
                if (s != null) return s;

                var a = this.attribute(name);
                if (a != null && a.hasValue()) {
                    this.styles[name] = a; // move up to me to cache
                    return a;
                }

                if (skipAncestors != true) {
                    var p = this.parent;
                    if (p != null) {
                        var ps = p.style(name);
                        if (ps != null && ps.hasValue()) {
                            return ps;
                        }
                    }
                }

                if (createIfNotExists == true) {
                    s = new svg.Property(name, '');
                    this.styles[name] = s;
                }
                return s || svg.EmptyProperty;
            };

            // base render
            this.render = function (ctx) {
                // don't render display=none
                if (this.style('display').value == 'none') return;

                // don't render visibility=hidden
                if (this.style('visibility').value == 'hidden') return;

                ctx.save();
                if (this.attribute('mask').hasValue()) {
                    // mask
                    var mask = this.attribute('mask').getDefinition();
                    if (mask != null) mask.apply(ctx, this);
                } else if (this.style('filter').hasValue()) {
                    // filter
                    var filter = this.style('filter').getDefinition();
                    if (filter != null) filter.apply(ctx, this);
                } else {
                    this.setContext(ctx);
                    this.renderChildren(ctx);
                    this.clearContext(ctx);
                }
                ctx.restore();
            };

            // base set context
            this.setContext = function (ctx) {
                // OVERRIDE ME!
            };

            // base clear context
            this.clearContext = function (ctx) {
                // OVERRIDE ME!
            };

            // base render children
            this.renderChildren = function (ctx) {
                for (var i = 0; i < this.children.length; i++) {
                    this.children[i].render(ctx);
                }
            };

            this.addChild = function (childNode, create) {
                var child = childNode;
                if (create) child = svg.CreateElement(childNode);
                child.parent = this;
                if (child.type != 'title') {
                    this.children.push(child);
                }
            };

            this.addStylesFromStyleDefinition = function () {
                // add styles
                for (var selector in svg.Styles) {
                    if (selector[0] != '@' && matchesSelector(node, selector)) {
                        var styles = svg.Styles[selector];
                        var specificity = svg.StylesSpecificity[selector];
                        if (styles != null) {
                            for (var name in styles) {
                                var existingSpecificity = this.stylesSpecificity[name];
                                if (typeof existingSpecificity == 'undefined') {
                                    existingSpecificity = '000';
                                }
                                if (specificity > existingSpecificity) {
                                    this.styles[name] = styles[name];
                                    this.stylesSpecificity[name] = specificity;
                                }
                            }
                        }
                    }
                }
            };

            if (node != null && node.nodeType == 1) {
                //ELEMENT_NODE
                // add attributes
                for (var i = 0; i < node.attributes.length; i++) {
                    var attribute = node.attributes[i];
                    this.attributes[attribute.nodeName] = new svg.Property(attribute.nodeName, attribute.value);
                }

                this.addStylesFromStyleDefinition();

                // add inline styles
                if (this.attribute('style').hasValue()) {
                    var styles = this.attribute('style').value.split(';');
                    for (var i = 0; i < styles.length; i++) {
                        if (svg.trim(styles[i]) != '') {
                            var style = styles[i].split(':');
                            var name = svg.trim(style[0]);
                            var value = svg.trim(style[1]);
                            this.styles[name] = new svg.Property(name, value);
                        }
                    }
                }

                // add id
                if (this.attribute('id').hasValue()) {
                    if (svg.Definitions[this.attribute('id').value] == null) {
                        svg.Definitions[this.attribute('id').value] = this;
                    }
                }

                // add children
                for (var i = 0; i < node.childNodes.length; i++) {
                    var childNode = node.childNodes[i];
                    if (childNode.nodeType == 1) this.addChild(childNode, true); //ELEMENT_NODE
                    if (this.captureTextNodes && (childNode.nodeType == 3 || childNode.nodeType == 4)) {
                        var text = childNode.value || childNode.text || childNode.textContent || '';
                        if (svg.compressSpaces(text) != '') {
                            this.addChild(new svg.Element.tspan(childNode), false); // TEXT_NODE
                        }
                    }
                }
            }
        };

        svg.Element.RenderedElementBase = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.setContext = function (ctx) {
                // fill
                if (this.style('fill').isUrlDefinition()) {
                    var fs = this.style('fill').getFillStyleDefinition(this, this.style('fill-opacity'));
                    if (fs != null) ctx.fillStyle = fs;
                } else if (this.style('fill').hasValue()) {
                    var fillStyle = this.style('fill');
                    if (fillStyle.value == 'currentColor') fillStyle.value = this.style('color').value;
                    if (fillStyle.value != 'inherit') ctx.fillStyle = fillStyle.value == 'none' ? 'rgba(0,0,0,0)' : fillStyle.value;
                }
                if (this.style('fill-opacity').hasValue()) {
                    var fillStyle = new svg.Property('fill', ctx.fillStyle);
                    fillStyle = fillStyle.addOpacity(this.style('fill-opacity'));
                    ctx.fillStyle = fillStyle.value;
                }

                // stroke
                if (this.style('stroke').isUrlDefinition()) {
                    var fs = this.style('stroke').getFillStyleDefinition(this, this.style('stroke-opacity'));
                    if (fs != null) ctx.strokeStyle = fs;
                } else if (this.style('stroke').hasValue()) {
                    var strokeStyle = this.style('stroke');
                    if (strokeStyle.value == 'currentColor') strokeStyle.value = this.style('color').value;
                    if (strokeStyle.value != 'inherit') ctx.strokeStyle = strokeStyle.value == 'none' ? 'rgba(0,0,0,0)' : strokeStyle.value;
                }
                if (this.style('stroke-opacity').hasValue()) {
                    var strokeStyle = new svg.Property('stroke', ctx.strokeStyle);
                    strokeStyle = strokeStyle.addOpacity(this.style('stroke-opacity'));
                    ctx.strokeStyle = strokeStyle.value;
                }
                if (this.style('stroke-width').hasValue()) {
                    var newLineWidth = this.style('stroke-width').toPixels();
                    ctx.lineWidth = newLineWidth == 0 ? 0.001 : newLineWidth; // browsers don't respect 0
                }
                if (this.style('stroke-linecap').hasValue()) ctx.lineCap = this.style('stroke-linecap').value;
                if (this.style('stroke-linejoin').hasValue()) ctx.lineJoin = this.style('stroke-linejoin').value;
                if (this.style('stroke-miterlimit').hasValue()) ctx.miterLimit = this.style('stroke-miterlimit').value;
                if (this.style('stroke-dasharray').hasValue() && this.style('stroke-dasharray').value != 'none') {
                    var gaps = svg.ToNumberArray(this.style('stroke-dasharray').value);
                    if (typeof ctx.setLineDash != 'undefined') {
                        ctx.setLineDash(gaps);
                    } else if (typeof ctx.webkitLineDash != 'undefined') {
                        ctx.webkitLineDash = gaps;
                    } else if (typeof ctx.mozDash != 'undefined' && !(gaps.length == 1 && gaps[0] == 0)) {
                        ctx.mozDash = gaps;
                    }

                    var offset = this.style('stroke-dashoffset').numValueOrDefault(1);
                    if (typeof ctx.lineDashOffset != 'undefined') {
                        ctx.lineDashOffset = offset;
                    } else if (typeof ctx.webkitLineDashOffset != 'undefined') {
                        ctx.webkitLineDashOffset = offset;
                    } else if (typeof ctx.mozDashOffset != 'undefined') {
                        ctx.mozDashOffset = offset;
                    }
                }

                // font
                if (typeof ctx.font != 'undefined') {
                    ctx.font = svg.Font.CreateFont(this.style('font-style').value, this.style('font-variant').value, this.style('font-weight').value, this.style('font-size').hasValue() ? this.style('font-size').toPixels() + 'px' : '', this.style('font-family').value).toString();
                }

                // transform
                if (this.style('transform', false, true).hasValue()) {
                    var transform = new svg.Transform(this.style('transform', false, true).value);
                    transform.apply(ctx);
                }

                // clip
                if (this.attribute('clip-path', false, true).hasValue()) {
                    var clip = this.attribute('clip-path', false, true).getDefinition();
                    if (clip != null) clip.apply(ctx);
                }

                // opacity
                if (this.style('opacity').hasValue()) {
                    ctx.globalAlpha = this.style('opacity').numValue();
                }
            };
        };
        svg.Element.RenderedElementBase.prototype = new svg.Element.ElementBase();

        svg.Element.PathElementBase = function (node) {
            this.base = svg.Element.RenderedElementBase;
            this.base(node);

            this.path = function (ctx) {
                if (ctx != null) ctx.beginPath();
                return new svg.BoundingBox();
            };

            this.renderChildren = function (ctx) {
                this.path(ctx);
                svg.Mouse.checkPath(this, ctx);
                if (ctx.fillStyle != '') {
                    if (this.style('fill-rule').valueOrDefault('inherit') != 'inherit') {
                        ctx.fill(this.style('fill-rule').value);
                    } else {
                        ctx.fill();
                    }
                }
                if (ctx.strokeStyle != '') ctx.stroke();

                var markers = this.getMarkers();
                if (markers != null) {
                    if (this.style('marker-start').isUrlDefinition()) {
                        var marker = this.style('marker-start').getDefinition();
                        marker.render(ctx, markers[0][0], markers[0][1]);
                    }
                    if (this.style('marker-mid').isUrlDefinition()) {
                        var marker = this.style('marker-mid').getDefinition();
                        for (var i = 1; i < markers.length - 1; i++) {
                            marker.render(ctx, markers[i][0], markers[i][1]);
                        }
                    }
                    if (this.style('marker-end').isUrlDefinition()) {
                        var marker = this.style('marker-end').getDefinition();
                        marker.render(ctx, markers[markers.length - 1][0], markers[markers.length - 1][1]);
                    }
                }
            };

            this.getBoundingBox = function () {
                return this.path();
            };

            this.getMarkers = function () {
                return null;
            };
        };
        svg.Element.PathElementBase.prototype = new svg.Element.RenderedElementBase();

        // svg element
        svg.Element.svg = function (node) {
            this.base = svg.Element.RenderedElementBase;
            this.base(node);

            this.baseClearContext = this.clearContext;
            this.clearContext = function (ctx) {
                this.baseClearContext(ctx);
                svg.ViewPort.RemoveCurrent();
            };

            this.baseSetContext = this.setContext;
            this.setContext = function (ctx) {
                // initial values and defaults
                ctx.strokeStyle = 'rgba(0,0,0,0)';
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                ctx.miterLimit = 4;
                if (typeof ctx.font != 'undefined' && typeof window.getComputedStyle != 'undefined') {
                    ctx.font = window.getComputedStyle(ctx.canvas).getPropertyValue('font');
                }

                this.baseSetContext(ctx);

                // create new view port
                if (!this.attribute('x').hasValue()) this.attribute('x', true).value = 0;
                if (!this.attribute('y').hasValue()) this.attribute('y', true).value = 0;
                ctx.translate(this.attribute('x').toPixels('x'), this.attribute('y').toPixels('y'));

                var width = svg.ViewPort.width();
                var height = svg.ViewPort.height();

                if (!this.attribute('width').hasValue()) this.attribute('width', true).value = '100%';
                if (!this.attribute('height').hasValue()) this.attribute('height', true).value = '100%';
                if (typeof this.root == 'undefined') {
                    width = this.attribute('width').toPixels('x');
                    height = this.attribute('height').toPixels('y');

                    var x = 0;
                    var y = 0;
                    if (this.attribute('refX').hasValue() && this.attribute('refY').hasValue()) {
                        x = -this.attribute('refX').toPixels('x');
                        y = -this.attribute('refY').toPixels('y');
                    }

                    if (this.attribute('overflow').valueOrDefault('hidden') != 'visible') {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(width, y);
                        ctx.lineTo(width, height);
                        ctx.lineTo(x, height);
                        ctx.closePath();
                        ctx.clip();
                    }
                }
                svg.ViewPort.SetCurrent(width, height);

                // viewbox
                if (this.attribute('viewBox').hasValue()) {
                    var viewBox = svg.ToNumberArray(this.attribute('viewBox').value);
                    var minX = viewBox[0];
                    var minY = viewBox[1];
                    width = viewBox[2];
                    height = viewBox[3];

                    svg.AspectRatio(ctx, this.attribute('preserveAspectRatio').value, svg.ViewPort.width(), width, svg.ViewPort.height(), height, minX, minY, this.attribute('refX').value, this.attribute('refY').value);

                    svg.ViewPort.RemoveCurrent();
                    svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);
                }
            };
        };
        svg.Element.svg.prototype = new svg.Element.RenderedElementBase();

        // rect element
        svg.Element.rect = function (node) {
            this.base = svg.Element.PathElementBase;
            this.base(node);

            this.path = function (ctx) {
                var x = this.attribute('x').toPixels('x');
                var y = this.attribute('y').toPixels('y');
                var width = this.attribute('width').toPixels('x');
                var height = this.attribute('height').toPixels('y');
                var rx = this.attribute('rx').toPixels('x');
                var ry = this.attribute('ry').toPixels('y');
                if (this.attribute('rx').hasValue() && !this.attribute('ry').hasValue()) ry = rx;
                if (this.attribute('ry').hasValue() && !this.attribute('rx').hasValue()) rx = ry;
                rx = Math.min(rx, width / 2.0);
                ry = Math.min(ry, height / 2.0);
                if (ctx != null) {
                    ctx.beginPath();
                    ctx.moveTo(x + rx, y);
                    ctx.lineTo(x + width - rx, y);
                    ctx.quadraticCurveTo(x + width, y, x + width, y + ry);
                    ctx.lineTo(x + width, y + height - ry);
                    ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
                    ctx.lineTo(x + rx, y + height);
                    ctx.quadraticCurveTo(x, y + height, x, y + height - ry);
                    ctx.lineTo(x, y + ry);
                    ctx.quadraticCurveTo(x, y, x + rx, y);
                    ctx.closePath();
                }

                return new svg.BoundingBox(x, y, x + width, y + height);
            };
        };
        svg.Element.rect.prototype = new svg.Element.PathElementBase();

        // circle element
        svg.Element.circle = function (node) {
            this.base = svg.Element.PathElementBase;
            this.base(node);

            this.path = function (ctx) {
                var cx = this.attribute('cx').toPixels('x');
                var cy = this.attribute('cy').toPixels('y');
                var r = this.attribute('r').toPixels();

                if (ctx != null) {
                    ctx.beginPath();
                    ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
                    ctx.closePath();
                }

                return new svg.BoundingBox(cx - r, cy - r, cx + r, cy + r);
            };
        };
        svg.Element.circle.prototype = new svg.Element.PathElementBase();

        // ellipse element
        svg.Element.ellipse = function (node) {
            this.base = svg.Element.PathElementBase;
            this.base(node);

            this.path = function (ctx) {
                var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
                var rx = this.attribute('rx').toPixels('x');
                var ry = this.attribute('ry').toPixels('y');
                var cx = this.attribute('cx').toPixels('x');
                var cy = this.attribute('cy').toPixels('y');

                if (ctx != null) {
                    ctx.beginPath();
                    ctx.moveTo(cx, cy - ry);
                    ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
                    ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
                    ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
                    ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
                    ctx.closePath();
                }

                return new svg.BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
            };
        };
        svg.Element.ellipse.prototype = new svg.Element.PathElementBase();

        // line element
        svg.Element.line = function (node) {
            this.base = svg.Element.PathElementBase;
            this.base(node);

            this.getPoints = function () {
                return [new svg.Point(this.attribute('x1').toPixels('x'), this.attribute('y1').toPixels('y')), new svg.Point(this.attribute('x2').toPixels('x'), this.attribute('y2').toPixels('y'))];
            };

            this.path = function (ctx) {
                var points = this.getPoints();

                if (ctx != null) {
                    ctx.beginPath();
                    ctx.moveTo(points[0].x, points[0].y);
                    ctx.lineTo(points[1].x, points[1].y);
                }

                return new svg.BoundingBox(points[0].x, points[0].y, points[1].x, points[1].y);
            };

            this.getMarkers = function () {
                var points = this.getPoints();
                var a = points[0].angleTo(points[1]);
                return [[points[0], a], [points[1], a]];
            };
        };
        svg.Element.line.prototype = new svg.Element.PathElementBase();

        // polyline element
        svg.Element.polyline = function (node) {
            this.base = svg.Element.PathElementBase;
            this.base(node);

            this.points = svg.CreatePath(this.attribute('points').value);
            this.path = function (ctx) {
                var bb = new svg.BoundingBox(this.points[0].x, this.points[0].y);
                if (ctx != null) {
                    ctx.beginPath();
                    ctx.moveTo(this.points[0].x, this.points[0].y);
                }
                for (var i = 1; i < this.points.length; i++) {
                    bb.addPoint(this.points[i].x, this.points[i].y);
                    if (ctx != null) ctx.lineTo(this.points[i].x, this.points[i].y);
                }
                return bb;
            };

            this.getMarkers = function () {
                var markers = [];
                for (var i = 0; i < this.points.length - 1; i++) {
                    markers.push([this.points[i], this.points[i].angleTo(this.points[i + 1])]);
                }
                markers.push([this.points[this.points.length - 1], markers[markers.length - 1][1]]);
                return markers;
            };
        };
        svg.Element.polyline.prototype = new svg.Element.PathElementBase();

        // polygon element
        svg.Element.polygon = function (node) {
            this.base = svg.Element.polyline;
            this.base(node);

            this.basePath = this.path;
            this.path = function (ctx) {
                var bb = this.basePath(ctx);
                if (ctx != null) {
                    ctx.lineTo(this.points[0].x, this.points[0].y);
                    ctx.closePath();
                }
                return bb;
            };
        };
        svg.Element.polygon.prototype = new svg.Element.polyline();

        // path element
        svg.Element.path = function (node) {
            this.base = svg.Element.PathElementBase;
            this.base(node);

            var d = this.attribute('d').value;
            // TODO: convert to real lexer based on http://www.w3.org/TR/SVG11/paths.html#PathDataBNF
            d = d.replace(/,/gm, ' '); // get rid of all commas
            // As the end of a match can also be the start of the next match, we need to run this replace twice.
            for (var i = 0; i < 2; i++) {
                d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, '$1 $2');
            } // suffix commands with spaces
            d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, '$1 $2'); // prefix commands with spaces
            d = d.replace(/([0-9])([+\-])/gm, '$1 $2'); // separate digits on +- signs
            // Again, we need to run this twice to find all occurances
            for (var i = 0; i < 2; i++) {
                d = d.replace(/(\.[0-9]*)(\.)/gm, '$1 $2');
            } // separate digits when they start with a comma
            d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, '$1 $3 $4 '); // shorthand elliptical arc path syntax
            d = svg.compressSpaces(d); // compress multiple spaces
            d = svg.trim(d);
            this.PathParser = new function (d) {
                this.tokens = d.split(' ');

                this.reset = function () {
                    this.i = -1;
                    this.command = '';
                    this.previousCommand = '';
                    this.start = new svg.Point(0, 0);
                    this.control = new svg.Point(0, 0);
                    this.current = new svg.Point(0, 0);
                    this.points = [];
                    this.angles = [];
                };

                this.isEnd = function () {
                    return this.i >= this.tokens.length - 1;
                };

                this.isCommandOrEnd = function () {
                    if (this.isEnd()) return true;
                    return this.tokens[this.i + 1].match(/^[A-Za-z]$/) != null;
                };

                this.isRelativeCommand = function () {
                    switch (this.command) {
                        case 'm':
                        case 'l':
                        case 'h':
                        case 'v':
                        case 'c':
                        case 's':
                        case 'q':
                        case 't':
                        case 'a':
                        case 'z':
                            return true;
                            break;
                    }
                    return false;
                };

                this.getToken = function () {
                    this.i++;
                    return this.tokens[this.i];
                };

                this.getScalar = function () {
                    return parseFloat(this.getToken());
                };

                this.nextCommand = function () {
                    this.previousCommand = this.command;
                    this.command = this.getToken();
                };

                this.getPoint = function () {
                    var p = new svg.Point(this.getScalar(), this.getScalar());
                    return this.makeAbsolute(p);
                };

                this.getAsControlPoint = function () {
                    var p = this.getPoint();
                    this.control = p;
                    return p;
                };

                this.getAsCurrentPoint = function () {
                    var p = this.getPoint();
                    this.current = p;
                    return p;
                };

                this.getReflectedControlPoint = function () {
                    if (this.previousCommand.toLowerCase() != 'c' && this.previousCommand.toLowerCase() != 's' && this.previousCommand.toLowerCase() != 'q' && this.previousCommand.toLowerCase() != 't') {
                        return this.current;
                    }

                    // reflect point
                    var p = new svg.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
                    return p;
                };

                this.makeAbsolute = function (p) {
                    if (this.isRelativeCommand()) {
                        p.x += this.current.x;
                        p.y += this.current.y;
                    }
                    return p;
                };

                this.addMarker = function (p, from, priorTo) {
                    // if the last angle isn't filled in because we didn't have this point yet ...
                    if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length - 1] == null) {
                        this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(priorTo);
                    }
                    this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
                };

                this.addMarkerAngle = function (p, a) {
                    this.points.push(p);
                    this.angles.push(a);
                };

                this.getMarkerPoints = function () {
                    return this.points;
                };
                this.getMarkerAngles = function () {
                    for (var i = 0; i < this.angles.length; i++) {
                        if (this.angles[i] == null) {
                            for (var j = i + 1; j < this.angles.length; j++) {
                                if (this.angles[j] != null) {
                                    this.angles[i] = this.angles[j];
                                    break;
                                }
                            }
                        }
                    }
                    return this.angles;
                };
            }(d);

            this.path = function (ctx) {
                var pp = this.PathParser;
                pp.reset();

                var bb = new svg.BoundingBox();
                if (ctx != null) ctx.beginPath();
                while (!pp.isEnd()) {
                    pp.nextCommand();
                    switch (pp.command) {
                        case 'M':
                        case 'm':
                            var p = pp.getAsCurrentPoint();
                            pp.addMarker(p);
                            bb.addPoint(p.x, p.y);
                            if (ctx != null) ctx.moveTo(p.x, p.y);
                            pp.start = pp.current;
                            while (!pp.isCommandOrEnd()) {
                                var p = pp.getAsCurrentPoint();
                                pp.addMarker(p, pp.start);
                                bb.addPoint(p.x, p.y);
                                if (ctx != null) ctx.lineTo(p.x, p.y);
                            }
                            break;
                        case 'L':
                        case 'l':
                            while (!pp.isCommandOrEnd()) {
                                var c = pp.current;
                                var p = pp.getAsCurrentPoint();
                                pp.addMarker(p, c);
                                bb.addPoint(p.x, p.y);
                                if (ctx != null) ctx.lineTo(p.x, p.y);
                            }
                            break;
                        case 'H':
                        case 'h':
                            while (!pp.isCommandOrEnd()) {
                                var newP = new svg.Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
                                pp.addMarker(newP, pp.current);
                                pp.current = newP;
                                bb.addPoint(pp.current.x, pp.current.y);
                                if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
                            }
                            break;
                        case 'V':
                        case 'v':
                            while (!pp.isCommandOrEnd()) {
                                var newP = new svg.Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
                                pp.addMarker(newP, pp.current);
                                pp.current = newP;
                                bb.addPoint(pp.current.x, pp.current.y);
                                if (ctx != null) ctx.lineTo(pp.current.x, pp.current.y);
                            }
                            break;
                        case 'C':
                        case 'c':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var p1 = pp.getPoint();
                                var cntrl = pp.getAsControlPoint();
                                var cp = pp.getAsCurrentPoint();
                                pp.addMarker(cp, cntrl, p1);
                                bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                            }
                            break;
                        case 'S':
                        case 's':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var p1 = pp.getReflectedControlPoint();
                                var cntrl = pp.getAsControlPoint();
                                var cp = pp.getAsCurrentPoint();
                                pp.addMarker(cp, cntrl, p1);
                                bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                if (ctx != null) ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                            }
                            break;
                        case 'Q':
                        case 'q':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var cntrl = pp.getAsControlPoint();
                                var cp = pp.getAsCurrentPoint();
                                pp.addMarker(cp, cntrl, cntrl);
                                bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
                            }
                            break;
                        case 'T':
                        case 't':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var cntrl = pp.getReflectedControlPoint();
                                pp.control = cntrl;
                                var cp = pp.getAsCurrentPoint();
                                pp.addMarker(cp, cntrl, cntrl);
                                bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);
                                if (ctx != null) ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
                            }
                            break;
                        case 'A':
                        case 'a':
                            while (!pp.isCommandOrEnd()) {
                                var curr = pp.current;
                                var rx = pp.getScalar();
                                var ry = pp.getScalar();
                                var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
                                var largeArcFlag = pp.getScalar();
                                var sweepFlag = pp.getScalar();
                                var cp = pp.getAsCurrentPoint();

                                // Conversion from endpoint to center parameterization
                                // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                                // x1', y1'
                                var currp = new svg.Point(Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0, -Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0);
                                // adjust radii
                                var l = Math.pow(currp.x, 2) / Math.pow(rx, 2) + Math.pow(currp.y, 2) / Math.pow(ry, 2);
                                if (l > 1) {
                                    rx *= Math.sqrt(l);
                                    ry *= Math.sqrt(l);
                                }
                                // cx', cy'
                                var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(currp.y, 2) - Math.pow(ry, 2) * Math.pow(currp.x, 2)) / (Math.pow(rx, 2) * Math.pow(currp.y, 2) + Math.pow(ry, 2) * Math.pow(currp.x, 2)));
                                if (isNaN(s)) s = 0;
                                var cpp = new svg.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
                                // cx, cy
                                var centp = new svg.Point((curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
                                // vector magnitude
                                var m = function m(v) {
                                    return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
                                };
                                // ratio between two vectors
                                var r = function r(u, v) {
                                    return (u[0] * v[0] + u[1] * v[1]) / (m(u) * m(v));
                                };
                                // angle between two vectors
                                var a = function a(u, v) {
                                    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(r(u, v));
                                };
                                // initial angle
                                var a1 = a([1, 0], [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry]);
                                // angle delta
                                var u = [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry];
                                var v = [(-currp.x - cpp.x) / rx, (-currp.y - cpp.y) / ry];
                                var ad = a(u, v);
                                if (r(u, v) <= -1) ad = Math.PI;
                                if (r(u, v) >= 1) ad = 0;

                                // for markers
                                var dir = 1 - sweepFlag ? 1.0 : -1.0;
                                var ah = a1 + dir * (ad / 2.0);
                                var halfWay = new svg.Point(centp.x + rx * Math.cos(ah), centp.y + ry * Math.sin(ah));
                                pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
                                pp.addMarkerAngle(cp, ah - dir * Math.PI);

                                bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better
                                if (ctx != null) {
                                    var r = rx > ry ? rx : ry;
                                    var sx = rx > ry ? 1 : rx / ry;
                                    var sy = rx > ry ? ry / rx : 1;

                                    ctx.translate(centp.x, centp.y);
                                    ctx.rotate(xAxisRotation);
                                    ctx.scale(sx, sy);
                                    ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
                                    ctx.scale(1 / sx, 1 / sy);
                                    ctx.rotate(-xAxisRotation);
                                    ctx.translate(-centp.x, -centp.y);
                                }
                            }
                            break;
                        case 'Z':
                        case 'z':
                            if (ctx != null) ctx.closePath();
                            pp.current = pp.start;
                    }
                }

                return bb;
            };

            this.getMarkers = function () {
                var points = this.PathParser.getMarkerPoints();
                var angles = this.PathParser.getMarkerAngles();

                var markers = [];
                for (var i = 0; i < points.length; i++) {
                    markers.push([points[i], angles[i]]);
                }
                return markers;
            };
        };
        svg.Element.path.prototype = new svg.Element.PathElementBase();

        // pattern element
        svg.Element.pattern = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.createPattern = function (ctx, element) {
                var width = this.attribute('width').toPixels('x', true);
                var height = this.attribute('height').toPixels('y', true);

                // render me using a temporary svg element
                var tempSvg = new svg.Element.svg();
                tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
                tempSvg.attributes['width'] = new svg.Property('width', width + 'px');
                tempSvg.attributes['height'] = new svg.Property('height', height + 'px');
                tempSvg.attributes['transform'] = new svg.Property('transform', this.attribute('patternTransform').value);
                tempSvg.children = this.children;

                var c = document.createElement('canvas');
                c.width = width;
                c.height = height;
                var cctx = c.getContext('2d');
                if (this.attribute('x').hasValue() && this.attribute('y').hasValue()) {
                    cctx.translate(this.attribute('x').toPixels('x', true), this.attribute('y').toPixels('y', true));
                }
                // render 3x3 grid so when we transform there's no white space on edges
                for (var x = -1; x <= 1; x++) {
                    for (var y = -1; y <= 1; y++) {
                        cctx.save();
                        tempSvg.attributes['x'] = new svg.Property('x', x * c.width);
                        tempSvg.attributes['y'] = new svg.Property('y', y * c.height);
                        tempSvg.render(cctx);
                        cctx.restore();
                    }
                }
                var pattern = ctx.createPattern(c, 'repeat');
                return pattern;
            };
        };
        svg.Element.pattern.prototype = new svg.Element.ElementBase();

        // marker element
        svg.Element.marker = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.baseRender = this.render;
            this.render = function (ctx, point, angle) {
                ctx.translate(point.x, point.y);
                if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(angle);
                if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(ctx.lineWidth, ctx.lineWidth);
                ctx.save();

                // render me using a temporary svg element
                var tempSvg = new svg.Element.svg();
                tempSvg.attributes['viewBox'] = new svg.Property('viewBox', this.attribute('viewBox').value);
                tempSvg.attributes['refX'] = new svg.Property('refX', this.attribute('refX').value);
                tempSvg.attributes['refY'] = new svg.Property('refY', this.attribute('refY').value);
                tempSvg.attributes['width'] = new svg.Property('width', this.attribute('markerWidth').value);
                tempSvg.attributes['height'] = new svg.Property('height', this.attribute('markerHeight').value);
                tempSvg.attributes['fill'] = new svg.Property('fill', this.attribute('fill').valueOrDefault('black'));
                tempSvg.attributes['stroke'] = new svg.Property('stroke', this.attribute('stroke').valueOrDefault('none'));
                tempSvg.children = this.children;
                tempSvg.render(ctx);

                ctx.restore();
                if (this.attribute('markerUnits').valueOrDefault('strokeWidth') == 'strokeWidth') ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
                if (this.attribute('orient').valueOrDefault('auto') == 'auto') ctx.rotate(-angle);
                ctx.translate(-point.x, -point.y);
            };
        };
        svg.Element.marker.prototype = new svg.Element.ElementBase();

        // definitions element
        svg.Element.defs = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.render = function (ctx) {
                // NOOP
            };
        };
        svg.Element.defs.prototype = new svg.Element.ElementBase();

        // base for gradients
        svg.Element.GradientBase = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.stops = [];
            for (var i = 0; i < this.children.length; i++) {
                var child = this.children[i];
                if (child.type == 'stop') this.stops.push(child);
            }

            this.getGradient = function () {
                // OVERRIDE ME!
            };

            this.gradientUnits = function () {
                return this.attribute('gradientUnits').valueOrDefault('objectBoundingBox');
            };

            this.attributesToInherit = ['gradientUnits'];

            this.inheritStopContainer = function (stopsContainer) {
                for (var i = 0; i < this.attributesToInherit.length; i++) {
                    var attributeToInherit = this.attributesToInherit[i];
                    if (!this.attribute(attributeToInherit).hasValue() && stopsContainer.attribute(attributeToInherit).hasValue()) {
                        this.attribute(attributeToInherit, true).value = stopsContainer.attribute(attributeToInherit).value;
                    }
                }
            };

            this.createGradient = function (ctx, element, parentOpacityProp) {
                var stopsContainer = this;
                if (this.getHrefAttribute().hasValue()) {
                    stopsContainer = this.getHrefAttribute().getDefinition();
                    this.inheritStopContainer(stopsContainer);
                }

                var addParentOpacity = function addParentOpacity(color) {
                    if (parentOpacityProp.hasValue()) {
                        var p = new svg.Property('color', color);
                        return p.addOpacity(parentOpacityProp).value;
                    }
                    return color;
                };

                var g = this.getGradient(ctx, element);
                if (g == null) return addParentOpacity(stopsContainer.stops[stopsContainer.stops.length - 1].color);
                for (var i = 0; i < stopsContainer.stops.length; i++) {
                    g.addColorStop(stopsContainer.stops[i].offset, addParentOpacity(stopsContainer.stops[i].color));
                }

                if (this.attribute('gradientTransform').hasValue()) {
                    // render as transformed pattern on temporary canvas
                    var rootView = svg.ViewPort.viewPorts[0];

                    var rect = new svg.Element.rect();
                    rect.attributes['x'] = new svg.Property('x', -svg.MAX_VIRTUAL_PIXELS / 3.0);
                    rect.attributes['y'] = new svg.Property('y', -svg.MAX_VIRTUAL_PIXELS / 3.0);
                    rect.attributes['width'] = new svg.Property('width', svg.MAX_VIRTUAL_PIXELS);
                    rect.attributes['height'] = new svg.Property('height', svg.MAX_VIRTUAL_PIXELS);

                    var group = new svg.Element.g();
                    group.attributes['transform'] = new svg.Property('transform', this.attribute('gradientTransform').value);
                    group.children = [rect];

                    var tempSvg = new svg.Element.svg();
                    tempSvg.attributes['x'] = new svg.Property('x', 0);
                    tempSvg.attributes['y'] = new svg.Property('y', 0);
                    tempSvg.attributes['width'] = new svg.Property('width', rootView.width);
                    tempSvg.attributes['height'] = new svg.Property('height', rootView.height);
                    tempSvg.children = [group];

                    var c = document.createElement('canvas');
                    c.width = rootView.width;
                    c.height = rootView.height;
                    var tempCtx = c.getContext('2d');
                    tempCtx.fillStyle = g;
                    tempSvg.render(tempCtx);
                    return tempCtx.createPattern(c, 'no-repeat');
                }

                return g;
            };
        };
        svg.Element.GradientBase.prototype = new svg.Element.ElementBase();

        // linear gradient element
        svg.Element.linearGradient = function (node) {
            this.base = svg.Element.GradientBase;
            this.base(node);

            this.attributesToInherit.push('x1');
            this.attributesToInherit.push('y1');
            this.attributesToInherit.push('x2');
            this.attributesToInherit.push('y2');

            this.getGradient = function (ctx, element) {
                var bb = this.gradientUnits() == 'objectBoundingBox' ? element.getBoundingBox() : null;

                if (!this.attribute('x1').hasValue() && !this.attribute('y1').hasValue() && !this.attribute('x2').hasValue() && !this.attribute('y2').hasValue()) {
                    this.attribute('x1', true).value = 0;
                    this.attribute('y1', true).value = 0;
                    this.attribute('x2', true).value = 1;
                    this.attribute('y2', true).value = 0;
                }

                var x1 = this.gradientUnits() == 'objectBoundingBox' ? bb.x() + bb.width() * this.attribute('x1').numValue() : this.attribute('x1').toPixels('x');
                var y1 = this.gradientUnits() == 'objectBoundingBox' ? bb.y() + bb.height() * this.attribute('y1').numValue() : this.attribute('y1').toPixels('y');
                var x2 = this.gradientUnits() == 'objectBoundingBox' ? bb.x() + bb.width() * this.attribute('x2').numValue() : this.attribute('x2').toPixels('x');
                var y2 = this.gradientUnits() == 'objectBoundingBox' ? bb.y() + bb.height() * this.attribute('y2').numValue() : this.attribute('y2').toPixels('y');

                if (x1 == x2 && y1 == y2) return null;
                return ctx.createLinearGradient(x1, y1, x2, y2);
            };
        };
        svg.Element.linearGradient.prototype = new svg.Element.GradientBase();

        // radial gradient element
        svg.Element.radialGradient = function (node) {
            this.base = svg.Element.GradientBase;
            this.base(node);

            this.attributesToInherit.push('cx');
            this.attributesToInherit.push('cy');
            this.attributesToInherit.push('r');
            this.attributesToInherit.push('fx');
            this.attributesToInherit.push('fy');

            this.getGradient = function (ctx, element) {
                var bb = element.getBoundingBox();

                if (!this.attribute('cx').hasValue()) this.attribute('cx', true).value = '50%';
                if (!this.attribute('cy').hasValue()) this.attribute('cy', true).value = '50%';
                if (!this.attribute('r').hasValue()) this.attribute('r', true).value = '50%';

                var cx = this.gradientUnits() == 'objectBoundingBox' ? bb.x() + bb.width() * this.attribute('cx').numValue() : this.attribute('cx').toPixels('x');
                var cy = this.gradientUnits() == 'objectBoundingBox' ? bb.y() + bb.height() * this.attribute('cy').numValue() : this.attribute('cy').toPixels('y');

                var fx = cx;
                var fy = cy;
                if (this.attribute('fx').hasValue()) {
                    fx = this.gradientUnits() == 'objectBoundingBox' ? bb.x() + bb.width() * this.attribute('fx').numValue() : this.attribute('fx').toPixels('x');
                }
                if (this.attribute('fy').hasValue()) {
                    fy = this.gradientUnits() == 'objectBoundingBox' ? bb.y() + bb.height() * this.attribute('fy').numValue() : this.attribute('fy').toPixels('y');
                }

                var r = this.gradientUnits() == 'objectBoundingBox' ? (bb.width() + bb.height()) / 2.0 * this.attribute('r').numValue() : this.attribute('r').toPixels();

                return ctx.createRadialGradient(fx, fy, 0, cx, cy, r);
            };
        };
        svg.Element.radialGradient.prototype = new svg.Element.GradientBase();

        // gradient stop element
        svg.Element.stop = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.offset = this.attribute('offset').numValue();
            if (this.offset < 0) this.offset = 0;
            if (this.offset > 1) this.offset = 1;

            var stopColor = this.style('stop-color', true);
            if (stopColor.value === '') stopColor.value = '#000';
            if (this.style('stop-opacity').hasValue()) stopColor = stopColor.addOpacity(this.style('stop-opacity'));
            this.color = stopColor.value;
        };
        svg.Element.stop.prototype = new svg.Element.ElementBase();

        // animation base element
        svg.Element.AnimateBase = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            svg.Animations.push(this);

            this.duration = 0.0;
            this.begin = this.attribute('begin').toMilliseconds();
            this.maxDuration = this.begin + this.attribute('dur').toMilliseconds();

            this.getProperty = function () {
                var attributeType = this.attribute('attributeType').value;
                var attributeName = this.attribute('attributeName').value;

                if (attributeType == 'CSS') {
                    return this.parent.style(attributeName, true);
                }
                return this.parent.attribute(attributeName, true);
            };

            this.initialValue = null;
            this.initialUnits = '';
            this.removed = false;

            this.calcValue = function () {
                // OVERRIDE ME!
                return '';
            };

            this.update = function (delta) {
                // set initial value
                if (this.initialValue == null) {
                    this.initialValue = this.getProperty().value;
                    this.initialUnits = this.getProperty().getUnits();
                }

                // if we're past the end time
                if (this.duration > this.maxDuration) {
                    // loop for indefinitely repeating animations
                    if (this.attribute('repeatCount').value == 'indefinite' || this.attribute('repeatDur').value == 'indefinite') {
                        this.duration = 0.0;
                    } else if (this.attribute('fill').valueOrDefault('remove') == 'freeze' && !this.frozen) {
                        this.frozen = true;
                        this.parent.animationFrozen = true;
                        this.parent.animationFrozenValue = this.getProperty().value;
                    } else if (this.attribute('fill').valueOrDefault('remove') == 'remove' && !this.removed) {
                        this.removed = true;
                        this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue;
                        return true;
                    }
                    return false;
                }
                this.duration = this.duration + delta;

                // if we're past the begin time
                var updated = false;
                if (this.begin < this.duration) {
                    var newValue = this.calcValue(); // tween

                    if (this.attribute('type').hasValue()) {
                        // for transform, etc.
                        var type = this.attribute('type').value;
                        newValue = type + '(' + newValue + ')';
                    }

                    this.getProperty().value = newValue;
                    updated = true;
                }

                return updated;
            };

            this.from = this.attribute('from');
            this.to = this.attribute('to');
            this.values = this.attribute('values');
            if (this.values.hasValue()) this.values.value = this.values.value.split(';');

            // fraction of duration we've covered
            this.progress = function () {
                var ret = {
                    progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
                };
                if (this.values.hasValue()) {
                    var p = ret.progress * (this.values.value.length - 1);
                    var lb = Math.floor(p),
                        ub = Math.ceil(p);
                    ret.from = new svg.Property('from', parseFloat(this.values.value[lb]));
                    ret.to = new svg.Property('to', parseFloat(this.values.value[ub]));
                    ret.progress = (p - lb) / (ub - lb);
                } else {
                    ret.from = this.from;
                    ret.to = this.to;
                }
                return ret;
            };
        };
        svg.Element.AnimateBase.prototype = new svg.Element.ElementBase();

        // animate element
        svg.Element.animate = function (node) {
            this.base = svg.Element.AnimateBase;
            this.base(node);

            this.calcValue = function () {
                var p = this.progress();

                // tween value linearly
                var newValue = p.from.numValue() + (p.to.numValue() - p.from.numValue()) * p.progress;
                return newValue + this.initialUnits;
            };
        };
        svg.Element.animate.prototype = new svg.Element.AnimateBase();

        // animate color element
        svg.Element.animateColor = function (node) {
            this.base = svg.Element.AnimateBase;
            this.base(node);

            this.calcValue = function () {
                var p = this.progress();
                var from = new RGBColor(p.from.value);
                var to = new RGBColor(p.to.value);

                if (from.ok && to.ok) {
                    // tween color linearly
                    var r = from.r + (to.r - from.r) * p.progress;
                    var g = from.g + (to.g - from.g) * p.progress;
                    var b = from.b + (to.b - from.b) * p.progress;
                    return 'rgb(' + parseInt(r, 10) + ',' + parseInt(g, 10) + ',' + parseInt(b, 10) + ')';
                }
                return this.attribute('from').value;
            };
        };
        svg.Element.animateColor.prototype = new svg.Element.AnimateBase();

        // animate transform element
        svg.Element.animateTransform = function (node) {
            this.base = svg.Element.AnimateBase;
            this.base(node);

            this.calcValue = function () {
                var p = this.progress();

                // tween value linearly
                var from = svg.ToNumberArray(p.from.value);
                var to = svg.ToNumberArray(p.to.value);
                var newValue = '';
                for (var i = 0; i < from.length; i++) {
                    newValue += from[i] + (to[i] - from[i]) * p.progress + ' ';
                }
                return newValue;
            };
        };
        svg.Element.animateTransform.prototype = new svg.Element.animate();

        // font element
        svg.Element.font = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.horizAdvX = this.attribute('horiz-adv-x').numValue();

            this.isRTL = false;
            this.isArabic = false;
            this.fontFace = null;
            this.missingGlyph = null;
            this.glyphs = [];
            for (var i = 0; i < this.children.length; i++) {
                var child = this.children[i];
                if (child.type == 'font-face') {
                    this.fontFace = child;
                    if (child.style('font-family').hasValue()) {
                        svg.Definitions[child.style('font-family').value] = this;
                    }
                } else if (child.type == 'missing-glyph') this.missingGlyph = child;else if (child.type == 'glyph') {
                    if (child.arabicForm != '') {
                        this.isRTL = true;
                        this.isArabic = true;
                        if (typeof this.glyphs[child.unicode] == 'undefined') this.glyphs[child.unicode] = [];
                        this.glyphs[child.unicode][child.arabicForm] = child;
                    } else {
                        this.glyphs[child.unicode] = child;
                    }
                }
            }
        };
        svg.Element.font.prototype = new svg.Element.ElementBase();

        // font-face element
        svg.Element.fontface = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.ascent = this.attribute('ascent').value;
            this.descent = this.attribute('descent').value;
            this.unitsPerEm = this.attribute('units-per-em').numValue();
        };
        svg.Element.fontface.prototype = new svg.Element.ElementBase();

        // missing-glyph element
        svg.Element.missingglyph = function (node) {
            this.base = svg.Element.path;
            this.base(node);

            this.horizAdvX = 0;
        };
        svg.Element.missingglyph.prototype = new svg.Element.path();

        // glyph element
        svg.Element.glyph = function (node) {
            this.base = svg.Element.path;
            this.base(node);

            this.horizAdvX = this.attribute('horiz-adv-x').numValue();
            this.unicode = this.attribute('unicode').value;
            this.arabicForm = this.attribute('arabic-form').value;
        };
        svg.Element.glyph.prototype = new svg.Element.path();

        // text element
        svg.Element.text = function (node) {
            this.captureTextNodes = true;
            this.base = svg.Element.RenderedElementBase;
            this.base(node);

            this.baseSetContext = this.setContext;
            this.setContext = function (ctx) {
                this.baseSetContext(ctx);

                var textBaseline = this.style('dominant-baseline').toTextBaseline();
                if (textBaseline == null) textBaseline = this.style('alignment-baseline').toTextBaseline();
                if (textBaseline != null) ctx.textBaseline = textBaseline;
            };

            this.getBoundingBox = function () {
                var x = this.attribute('x').toPixels('x');
                var y = this.attribute('y').toPixels('y');
                var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
                return new svg.BoundingBox(x, y - fontSize, x + Math.floor(fontSize * 2.0 / 3.0) * this.children[0].getText().length, y);
            };

            this.renderChildren = function (ctx) {
                this.x = this.attribute('x').toPixels('x');
                this.y = this.attribute('y').toPixels('y');
                if (this.attribute('dx').hasValue()) this.x += this.attribute('dx').toPixels('x');
                if (this.attribute('dy').hasValue()) this.y += this.attribute('dy').toPixels('y');
                this.x += this.getAnchorDelta(ctx, this, 0);
                for (var i = 0; i < this.children.length; i++) {
                    this.renderChild(ctx, this, i);
                }
            };

            this.getAnchorDelta = function (ctx, parent, startI) {
                var textAnchor = this.style('text-anchor').valueOrDefault('start');
                if (textAnchor != 'start') {
                    var width = 0;
                    for (var i = startI; i < parent.children.length; i++) {
                        var child = parent.children[i];
                        if (i > startI && child.attribute('x').hasValue()) break; // new group
                        width += child.measureTextRecursive(ctx);
                    }
                    return -1 * (textAnchor == 'end' ? width : width / 2.0);
                }
                return 0;
            };

            this.renderChild = function (ctx, parent, i) {
                var child = parent.children[i];
                if (child.attribute('x').hasValue()) {
                    child.x = child.attribute('x').toPixels('x') + parent.getAnchorDelta(ctx, parent, i);
                    if (child.attribute('dx').hasValue()) child.x += child.attribute('dx').toPixels('x');
                } else {
                    if (child.attribute('dx').hasValue()) parent.x += child.attribute('dx').toPixels('x');
                    child.x = parent.x;
                }
                parent.x = child.x + child.measureText(ctx);

                if (child.attribute('y').hasValue()) {
                    child.y = child.attribute('y').toPixels('y');
                    if (child.attribute('dy').hasValue()) child.y += child.attribute('dy').toPixels('y');
                } else {
                    if (child.attribute('dy').hasValue()) parent.y += child.attribute('dy').toPixels('y');
                    child.y = parent.y;
                }
                parent.y = child.y;

                child.render(ctx);

                for (var i = 0; i < child.children.length; i++) {
                    parent.renderChild(ctx, child, i);
                }
            };
        };
        svg.Element.text.prototype = new svg.Element.RenderedElementBase();

        // text base
        svg.Element.TextElementBase = function (node) {
            this.base = svg.Element.RenderedElementBase;
            this.base(node);

            this.getGlyph = function (font, text, i) {
                var c = text[i];
                var glyph = null;
                if (font.isArabic) {
                    var arabicForm = 'isolated';
                    if ((i == 0 || text[i - 1] == ' ') && i < text.length - 2 && text[i + 1] != ' ') arabicForm = 'terminal';
                    if (i > 0 && text[i - 1] != ' ' && i < text.length - 2 && text[i + 1] != ' ') arabicForm = 'medial';
                    if (i > 0 && text[i - 1] != ' ' && (i == text.length - 1 || text[i + 1] == ' ')) arabicForm = 'initial';
                    if (typeof font.glyphs[c] != 'undefined') {
                        glyph = font.glyphs[c][arabicForm];
                        if (glyph == null && font.glyphs[c].type == 'glyph') glyph = font.glyphs[c];
                    }
                } else {
                    glyph = font.glyphs[c];
                }
                if (glyph == null) glyph = font.missingGlyph;
                return glyph;
            };

            this.renderChildren = function (ctx) {
                var customFont = this.parent.style('font-family').getDefinition();
                if (customFont != null) {
                    var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
                    var fontStyle = this.parent.style('font-style').valueOrDefault(svg.Font.Parse(svg.ctx.font).fontStyle);
                    var text = this.getText();
                    if (customFont.isRTL) text = text.split("").reverse().join("");

                    var dx = svg.ToNumberArray(this.parent.attribute('dx').value);
                    for (var i = 0; i < text.length; i++) {
                        var glyph = this.getGlyph(customFont, text, i);
                        var scale = fontSize / customFont.fontFace.unitsPerEm;
                        ctx.translate(this.x, this.y);
                        ctx.scale(scale, -scale);
                        var lw = ctx.lineWidth;
                        ctx.lineWidth = ctx.lineWidth * customFont.fontFace.unitsPerEm / fontSize;
                        if (fontStyle == 'italic') ctx.transform(1, 0, .4, 1, 0, 0);
                        glyph.render(ctx);
                        if (fontStyle == 'italic') ctx.transform(1, 0, -.4, 1, 0, 0);
                        ctx.lineWidth = lw;
                        ctx.scale(1 / scale, -1 / scale);
                        ctx.translate(-this.x, -this.y);

                        this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / customFont.fontFace.unitsPerEm;
                        if (typeof dx[i] != 'undefined' && !isNaN(dx[i])) {
                            this.x += dx[i];
                        }
                    }
                    return;
                }

                if (ctx.fillStyle != '') ctx.fillText(svg.compressSpaces(this.getText()), this.x, this.y);
                if (ctx.strokeStyle != '') ctx.strokeText(svg.compressSpaces(this.getText()), this.x, this.y);
            };

            this.getText = function () {
                // OVERRIDE ME
            };

            this.measureTextRecursive = function (ctx) {
                var width = this.measureText(ctx);
                for (var i = 0; i < this.children.length; i++) {
                    width += this.children[i].measureTextRecursive(ctx);
                }
                return width;
            };

            this.measureText = function (ctx) {
                var customFont = this.parent.style('font-family').getDefinition();
                if (customFont != null) {
                    var fontSize = this.parent.style('font-size').numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
                    var measure = 0;
                    var text = this.getText();
                    if (customFont.isRTL) text = text.split("").reverse().join("");
                    var dx = svg.ToNumberArray(this.parent.attribute('dx').value);
                    for (var i = 0; i < text.length; i++) {
                        var glyph = this.getGlyph(customFont, text, i);
                        measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
                        if (typeof dx[i] != 'undefined' && !isNaN(dx[i])) {
                            measure += dx[i];
                        }
                    }
                    return measure;
                }

                var textToMeasure = svg.compressSpaces(this.getText());
                if (!ctx.measureText) return textToMeasure.length * 10;

                ctx.save();
                this.setContext(ctx);
                var width = ctx.measureText(textToMeasure).width;
                ctx.restore();
                return width;
            };
        };
        svg.Element.TextElementBase.prototype = new svg.Element.RenderedElementBase();

        // tspan
        svg.Element.tspan = function (node) {
            this.captureTextNodes = true;
            this.base = svg.Element.TextElementBase;
            this.base(node);

            this.text = svg.compressSpaces(node.value || node.text || node.textContent || '');
            this.getText = function () {
                // if this node has children, then they own the text
                if (this.children.length > 0) {
                    return '';
                }
                return this.text;
            };
        };
        svg.Element.tspan.prototype = new svg.Element.TextElementBase();

        // tref
        svg.Element.tref = function (node) {
            this.base = svg.Element.TextElementBase;
            this.base(node);

            this.getText = function () {
                var element = this.getHrefAttribute().getDefinition();
                if (element != null) return element.children[0].getText();
            };
        };
        svg.Element.tref.prototype = new svg.Element.TextElementBase();

        // a element
        svg.Element.a = function (node) {
            this.base = svg.Element.TextElementBase;
            this.base(node);

            this.hasText = node.childNodes.length > 0;
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].nodeType != 3) this.hasText = false;
            }

            // this might contain text
            this.text = this.hasText ? node.childNodes[0].value : '';
            this.getText = function () {
                return this.text;
            };

            this.baseRenderChildren = this.renderChildren;
            this.renderChildren = function (ctx) {
                if (this.hasText) {
                    // render as text element
                    this.baseRenderChildren(ctx);
                    var fontSize = new svg.Property('fontSize', svg.Font.Parse(svg.ctx.font).fontSize);
                    svg.Mouse.checkBoundingBox(this, new svg.BoundingBox(this.x, this.y - fontSize.toPixels('y'), this.x + this.measureText(ctx), this.y));
                } else if (this.children.length > 0) {
                    // render as temporary group
                    var g = new svg.Element.g();
                    g.children = this.children;
                    g.parent = this;
                    g.render(ctx);
                }
            };

            this.onclick = function () {
                window.open(this.getHrefAttribute().value);
            };

            this.onmousemove = function () {
                svg.ctx.canvas.style.cursor = 'pointer';
            };
        };
        svg.Element.a.prototype = new svg.Element.TextElementBase();

        // image element
        svg.Element.image = function (node) {
            this.base = svg.Element.RenderedElementBase;
            this.base(node);

            var href = this.getHrefAttribute().value;
            if (href == '') {
                return;
            }
            var isSvg = href.match(/\.svg$/);

            svg.Images.push(this);
            this.loaded = false;
            if (!isSvg) {
                this.img = document.createElement('img');
                if (svg.opts['useCORS'] == true) {
                    this.img.crossOrigin = 'Anonymous';
                }
                var self = this;
                this.img.onload = function () {
                    self.loaded = true;
                };
                this.img.onerror = function () {
                    svg.log('ERROR: image "' + href + '" not found');
                    self.loaded = true;
                };
                this.img.src = href;
            } else {
                this.img = svg.ajax(href);
                this.loaded = true;
            }

            this.renderChildren = function (ctx) {
                var x = this.attribute('x').toPixels('x');
                var y = this.attribute('y').toPixels('y');

                var width = this.attribute('width').toPixels('x');
                var height = this.attribute('height').toPixels('y');
                if (width == 0 || height == 0) return;

                ctx.save();
                if (isSvg) {
                    ctx.drawSvg(this.img, x, y, width, height);
                } else {
                    ctx.translate(x, y);
                    svg.AspectRatio(ctx, this.attribute('preserveAspectRatio').value, width, this.img.width, height, this.img.height, 0, 0);
                    ctx.drawImage(this.img, 0, 0);
                }
                ctx.restore();
            };

            this.getBoundingBox = function () {
                var x = this.attribute('x').toPixels('x');
                var y = this.attribute('y').toPixels('y');
                var width = this.attribute('width').toPixels('x');
                var height = this.attribute('height').toPixels('y');
                return new svg.BoundingBox(x, y, x + width, y + height);
            };
        };
        svg.Element.image.prototype = new svg.Element.RenderedElementBase();

        // group element
        svg.Element.g = function (node) {
            this.base = svg.Element.RenderedElementBase;
            this.base(node);

            this.getBoundingBox = function () {
                var bb = new svg.BoundingBox();
                for (var i = 0; i < this.children.length; i++) {
                    bb.addBoundingBox(this.children[i].getBoundingBox());
                }
                return bb;
            };
        };
        svg.Element.g.prototype = new svg.Element.RenderedElementBase();

        // symbol element
        svg.Element.symbol = function (node) {
            this.base = svg.Element.RenderedElementBase;
            this.base(node);

            this.render = function (ctx) {
                // NO RENDER
            };
        };
        svg.Element.symbol.prototype = new svg.Element.RenderedElementBase();

        // style element
        svg.Element.style = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            // text, or spaces then CDATA
            var css = '';
            for (var i = 0; i < node.childNodes.length; i++) {
                css += node.childNodes[i].data;
            }
            css = css.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ''); // remove comments
            css = svg.compressSpaces(css); // replace whitespace
            var cssDefs = css.split('}');
            for (var i = 0; i < cssDefs.length; i++) {
                if (svg.trim(cssDefs[i]) != '') {
                    var cssDef = cssDefs[i].split('{');
                    var cssClasses = cssDef[0].split(',');
                    var cssProps = cssDef[1].split(';');
                    for (var j = 0; j < cssClasses.length; j++) {
                        var cssClass = svg.trim(cssClasses[j]);
                        if (cssClass != '') {
                            var props = {};
                            for (var k = 0; k < cssProps.length; k++) {
                                var prop = cssProps[k].indexOf(':');
                                var name = cssProps[k].substr(0, prop);
                                var value = cssProps[k].substr(prop + 1, cssProps[k].length - prop);
                                if (name != null && value != null) {
                                    props[svg.trim(name)] = new svg.Property(svg.trim(name), svg.trim(value));
                                }
                            }
                            svg.Styles[cssClass] = props;
                            svg.StylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
                            if (cssClass == '@font-face') {
                                var fontFamily = props['font-family'].value.replace(/"/g, '');
                                var srcs = props['src'].value.split(',');
                                for (var s = 0; s < srcs.length; s++) {
                                    if (srcs[s].indexOf('format("svg")') > 0) {
                                        var urlStart = srcs[s].indexOf('url');
                                        var urlEnd = srcs[s].indexOf(')', urlStart);
                                        var url = srcs[s].substr(urlStart + 5, urlEnd - urlStart - 6);
                                        var doc = svg.parseXml(svg.ajax(url));
                                        var fonts = doc.getElementsByTagName('font');
                                        for (var f = 0; f < fonts.length; f++) {
                                            var font = svg.CreateElement(fonts[f]);
                                            svg.Definitions[fontFamily] = font;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        svg.Element.style.prototype = new svg.Element.ElementBase();

        // use element
        svg.Element.use = function (node) {
            this.base = svg.Element.RenderedElementBase;
            this.base(node);

            this.baseSetContext = this.setContext;
            this.setContext = function (ctx) {
                this.baseSetContext(ctx);
                if (this.attribute('x').hasValue()) ctx.translate(this.attribute('x').toPixels('x'), 0);
                if (this.attribute('y').hasValue()) ctx.translate(0, this.attribute('y').toPixels('y'));
            };

            var element = this.getHrefAttribute().getDefinition();

            this.path = function (ctx) {
                if (element != null) element.path(ctx);
            };

            this.getBoundingBox = function () {
                if (element != null) return element.getBoundingBox();
            };

            this.renderChildren = function (ctx) {
                if (element != null) {
                    var tempSvg = element;
                    if (element.type == 'symbol') {
                        // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
                        tempSvg = new svg.Element.svg();
                        tempSvg.type = 'svg';
                        tempSvg.attributes['viewBox'] = new svg.Property('viewBox', element.attribute('viewBox').value);
                        tempSvg.attributes['preserveAspectRatio'] = new svg.Property('preserveAspectRatio', element.attribute('preserveAspectRatio').value);
                        tempSvg.attributes['overflow'] = new svg.Property('overflow', element.attribute('overflow').value);
                        tempSvg.children = element.children;
                    }
                    if (tempSvg.type == 'svg') {
                        // if symbol or svg, inherit width/height from me
                        if (this.attribute('width').hasValue()) tempSvg.attributes['width'] = new svg.Property('width', this.attribute('width').value);
                        if (this.attribute('height').hasValue()) tempSvg.attributes['height'] = new svg.Property('height', this.attribute('height').value);
                    }
                    var oldParent = tempSvg.parent;
                    tempSvg.parent = null;
                    tempSvg.render(ctx);
                    tempSvg.parent = oldParent;
                }
            };
        };
        svg.Element.use.prototype = new svg.Element.RenderedElementBase();

        // mask element
        svg.Element.mask = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.apply = function (ctx, element) {
                // render as temp svg
                var x = this.attribute('x').toPixels('x');
                var y = this.attribute('y').toPixels('y');
                var width = this.attribute('width').toPixels('x');
                var height = this.attribute('height').toPixels('y');

                if (width == 0 && height == 0) {
                    var bb = new svg.BoundingBox();
                    for (var i = 0; i < this.children.length; i++) {
                        bb.addBoundingBox(this.children[i].getBoundingBox());
                    }
                    var x = Math.floor(bb.x1);
                    var y = Math.floor(bb.y1);
                    var width = Math.floor(bb.width());
                    var height = Math.floor(bb.height());
                }

                // temporarily remove mask to avoid recursion
                var mask = element.attribute('mask').value;
                element.attribute('mask').value = '';

                var cMask = document.createElement('canvas');
                cMask.width = x + width;
                cMask.height = y + height;
                var maskCtx = cMask.getContext('2d');
                this.renderChildren(maskCtx);

                var c = document.createElement('canvas');
                c.width = x + width;
                c.height = y + height;
                var tempCtx = c.getContext('2d');
                element.render(tempCtx);
                tempCtx.globalCompositeOperation = 'destination-in';
                tempCtx.fillStyle = maskCtx.createPattern(cMask, 'no-repeat');
                tempCtx.fillRect(0, 0, x + width, y + height);

                ctx.fillStyle = tempCtx.createPattern(c, 'no-repeat');
                ctx.fillRect(0, 0, x + width, y + height);

                // reassign mask
                element.attribute('mask').value = mask;
            };

            this.render = function (ctx) {
                // NO RENDER
            };
        };
        svg.Element.mask.prototype = new svg.Element.ElementBase();

        // clip element
        svg.Element.clipPath = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.apply = function (ctx) {
                var oldBeginPath = CanvasRenderingContext2D.prototype.beginPath;
                CanvasRenderingContext2D.prototype.beginPath = function () {};

                var oldClosePath = CanvasRenderingContext2D.prototype.closePath;
                CanvasRenderingContext2D.prototype.closePath = function () {};

                oldBeginPath.call(ctx);
                for (var i = 0; i < this.children.length; i++) {
                    var child = this.children[i];
                    if (typeof child.path != 'undefined') {
                        var transform = null;
                        if (child.style('transform', false, true).hasValue()) {
                            transform = new svg.Transform(child.style('transform', false, true).value);
                            transform.apply(ctx);
                        }
                        child.path(ctx);
                        CanvasRenderingContext2D.prototype.closePath = oldClosePath;
                        if (transform) {
                            transform.unapply(ctx);
                        }
                    }
                }
                oldClosePath.call(ctx);
                ctx.clip();

                CanvasRenderingContext2D.prototype.beginPath = oldBeginPath;
                CanvasRenderingContext2D.prototype.closePath = oldClosePath;
            };

            this.render = function (ctx) {
                // NO RENDER
            };
        };
        svg.Element.clipPath.prototype = new svg.Element.ElementBase();

        // filters
        svg.Element.filter = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.apply = function (ctx, element) {
                // render as temp svg
                var bb = element.getBoundingBox();
                var x = Math.floor(bb.x1);
                var y = Math.floor(bb.y1);
                var width = Math.floor(bb.width());
                var height = Math.floor(bb.height());

                // temporarily remove filter to avoid recursion
                var filter = element.style('filter').value;
                element.style('filter').value = '';

                var px = 0,
                    py = 0;
                for (var i = 0; i < this.children.length; i++) {
                    var efd = this.children[i].extraFilterDistance || 0;
                    px = Math.max(px, efd);
                    py = Math.max(py, efd);
                }

                var c = document.createElement('canvas');
                c.width = width + 2 * px;
                c.height = height + 2 * py;
                var tempCtx = c.getContext('2d');
                tempCtx.translate(-x + px, -y + py);
                element.render(tempCtx);

                // apply filters
                for (var i = 0; i < this.children.length; i++) {
                    if (typeof this.children[i].apply === 'function') {
                        this.children[i].apply(tempCtx, 0, 0, width + 2 * px, height + 2 * py);
                    }
                }

                // render on me
                ctx.drawImage(c, 0, 0, width + 2 * px, height + 2 * py, x - px, y - py, width + 2 * px, height + 2 * py);

                // reassign filter
                element.style('filter', true).value = filter;
            };

            this.render = function (ctx) {
                // NO RENDER
            };
        };
        svg.Element.filter.prototype = new svg.Element.ElementBase();

        svg.Element.feMorphology = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.apply = function (ctx, x, y, width, height) {
                // TODO: implement
            };
        };
        svg.Element.feMorphology.prototype = new svg.Element.ElementBase();

        svg.Element.feComposite = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.apply = function (ctx, x, y, width, height) {
                // TODO: implement
            };
        };
        svg.Element.feComposite.prototype = new svg.Element.ElementBase();

        svg.Element.feColorMatrix = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            var matrix = svg.ToNumberArray(this.attribute('values').value);
            switch (this.attribute('type').valueOrDefault('matrix')) {// http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
                case 'saturate':
                    var s = matrix[0];
                    matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                    break;
                case 'hueRotate':
                    var a = matrix[0] * Math.PI / 180.0;
                    var c = function c(m1, m2, m3) {
                        return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
                    };
                    matrix = [c(0.213, 0.787, -0.213), c(0.715, -0.715, -0.715), c(0.072, -0.072, 0.928), 0, 0, c(0.213, -0.213, 0.143), c(0.715, 0.285, 0.140), c(0.072, -0.072, -0.283), 0, 0, c(0.213, -0.213, -0.787), c(0.715, -0.715, 0.715), c(0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                    break;
                case 'luminanceToAlpha':
                    matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
                    break;
            }

            function imGet(img, x, y, width, height, rgba) {
                return img[y * width * 4 + x * 4 + rgba];
            }

            function imSet(img, x, y, width, height, rgba, val) {
                img[y * width * 4 + x * 4 + rgba] = val;
            }

            function m(i, v) {
                var mi = matrix[i];
                return mi * (mi < 0 ? v - 255 : v);
            }

            this.apply = function (ctx, x, y, width, height) {
                // assuming x==0 && y==0 for now
                var srcData = ctx.getImageData(0, 0, width, height);
                for (var y = 0; y < height; y++) {
                    for (var x = 0; x < width; x++) {
                        var r = imGet(srcData.data, x, y, width, height, 0);
                        var g = imGet(srcData.data, x, y, width, height, 1);
                        var b = imGet(srcData.data, x, y, width, height, 2);
                        var a = imGet(srcData.data, x, y, width, height, 3);
                        imSet(srcData.data, x, y, width, height, 0, m(0, r) + m(1, g) + m(2, b) + m(3, a) + m(4, 1));
                        imSet(srcData.data, x, y, width, height, 1, m(5, r) + m(6, g) + m(7, b) + m(8, a) + m(9, 1));
                        imSet(srcData.data, x, y, width, height, 2, m(10, r) + m(11, g) + m(12, b) + m(13, a) + m(14, 1));
                        imSet(srcData.data, x, y, width, height, 3, m(15, r) + m(16, g) + m(17, b) + m(18, a) + m(19, 1));
                    }
                }
                ctx.clearRect(0, 0, width, height);
                ctx.putImageData(srcData, 0, 0);
            };
        };
        svg.Element.feColorMatrix.prototype = new svg.Element.ElementBase();

        svg.Element.feGaussianBlur = function (node) {
            this.base = svg.Element.ElementBase;
            this.base(node);

            this.blurRadius = Math.floor(this.attribute('stdDeviation').numValue());
            this.extraFilterDistance = this.blurRadius;

            this.apply = function (ctx, x, y, width, height) {
                if (typeof stackBlurCanvasRGBA == 'undefined') {
                    svg.log('ERROR: StackBlur.js must be included for blur to work');
                    return;
                }

                // StackBlur requires canvas be on document
                ctx.canvas.id = svg.UniqueId();
                ctx.canvas.style.display = 'none';
                document.body.appendChild(ctx.canvas);
                stackBlurCanvasRGBA(ctx.canvas.id, x, y, width, height, this.blurRadius);
                document.body.removeChild(ctx.canvas);
            };
        };
        svg.Element.feGaussianBlur.prototype = new svg.Element.ElementBase();

        // title element, do nothing
        svg.Element.title = function (node) {};
        svg.Element.title.prototype = new svg.Element.ElementBase();

        // desc element, do nothing
        svg.Element.desc = function (node) {};
        svg.Element.desc.prototype = new svg.Element.ElementBase();

        svg.Element.MISSING = function (node) {
            svg.log('ERROR: Element \'' + node.nodeName + '\' not yet implemented.');
        };
        svg.Element.MISSING.prototype = new svg.Element.ElementBase();

        // element factory
        svg.CreateElement = function (node) {
            var className = node.nodeName.replace(/^[^:]+:/, ''); // remove namespace
            className = className.replace(/\-/g, ''); // remove dashes
            var e = null;
            if (typeof svg.Element[className] != 'undefined') {
                e = new svg.Element[className](node);
            } else {
                e = new svg.Element.MISSING(node);
            }

            e.type = node.nodeName;
            return e;
        };

        // load from url
        svg.load = function (ctx, url) {
            svg.loadXml(ctx, svg.ajax(url));
        };

        // load from xml
        svg.loadXml = function (ctx, xml) {
            svg.loadXmlDoc(ctx, svg.parseXml(xml));
        };

        svg.loadXmlDoc = function (ctx, dom) {
            svg.init(ctx);

            var mapXY = function mapXY(p) {
                var e = ctx.canvas;
                while (e) {
                    p.x -= e.offsetLeft;
                    p.y -= e.offsetTop;
                    e = e.offsetParent;
                }
                if (window.scrollX) p.x += window.scrollX;
                if (window.scrollY) p.y += window.scrollY;
                return p;
            };

            // bind mouse
            if (svg.opts['ignoreMouse'] != true) {
                ctx.canvas.onclick = function (e) {
                    var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
                    svg.Mouse.onclick(p.x, p.y);
                };
                ctx.canvas.onmousemove = function (e) {
                    var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
                    svg.Mouse.onmousemove(p.x, p.y);
                };
            }

            var e = svg.CreateElement(dom.documentElement);
            e.root = true;
            e.addStylesFromStyleDefinition();

            // render loop
            var isFirstRender = true;
            var draw = function draw() {
                svg.ViewPort.Clear();
                if (ctx.canvas.parentNode) svg.ViewPort.SetCurrent(ctx.canvas.parentNode.clientWidth, ctx.canvas.parentNode.clientHeight);

                if (svg.opts['ignoreDimensions'] != true) {
                    // set canvas size
                    if (e.style('width').hasValue()) {
                        ctx.canvas.width = e.style('width').toPixels('x');
                        ctx.canvas.style.width = ctx.canvas.width + 'px';
                    }
                    if (e.style('height').hasValue()) {
                        ctx.canvas.height = e.style('height').toPixels('y');
                        ctx.canvas.style.height = ctx.canvas.height + 'px';
                    }
                }
                var cWidth = ctx.canvas.clientWidth || ctx.canvas.width;
                var cHeight = ctx.canvas.clientHeight || ctx.canvas.height;
                if (svg.opts['ignoreDimensions'] == true && e.style('width').hasValue() && e.style('height').hasValue()) {
                    cWidth = e.style('width').toPixels('x');
                    cHeight = e.style('height').toPixels('y');
                }
                svg.ViewPort.SetCurrent(cWidth, cHeight);

                if (svg.opts['offsetX'] != null) e.attribute('x', true).value = svg.opts['offsetX'];
                if (svg.opts['offsetY'] != null) e.attribute('y', true).value = svg.opts['offsetY'];
                if (svg.opts['scaleWidth'] != null || svg.opts['scaleHeight'] != null) {
                    var xRatio = null,
                        yRatio = null,
                        viewBox = svg.ToNumberArray(e.attribute('viewBox').value);

                    if (svg.opts['scaleWidth'] != null) {
                        if (e.attribute('width').hasValue()) xRatio = e.attribute('width').toPixels('x') / svg.opts['scaleWidth'];else if (!isNaN(viewBox[2])) xRatio = viewBox[2] / svg.opts['scaleWidth'];
                    }

                    if (svg.opts['scaleHeight'] != null) {
                        if (e.attribute('height').hasValue()) yRatio = e.attribute('height').toPixels('y') / svg.opts['scaleHeight'];else if (!isNaN(viewBox[3])) yRatio = viewBox[3] / svg.opts['scaleHeight'];
                    }

                    if (xRatio == null) {
                        xRatio = yRatio;
                    }
                    if (yRatio == null) {
                        yRatio = xRatio;
                    }

                    e.attribute('width', true).value = svg.opts['scaleWidth'];
                    e.attribute('height', true).value = svg.opts['scaleHeight'];
                    e.style('transform', true, true).value += ' scale(' + 1.0 / xRatio + ',' + 1.0 / yRatio + ')';
                }

                // clear and render
                if (svg.opts['ignoreClear'] != true) {
                    ctx.clearRect(0, 0, cWidth, cHeight);
                }
                e.render(ctx);
                if (isFirstRender) {
                    isFirstRender = false;
                    if (typeof svg.opts['renderCallback'] == 'function') svg.opts['renderCallback'](dom);
                }
            };

            var waitingForImages = true;
            if (svg.ImagesLoaded()) {
                waitingForImages = false;
                draw();
            }
            svg.intervalID = setInterval(function () {
                var needUpdate = false;

                if (waitingForImages && svg.ImagesLoaded()) {
                    waitingForImages = false;
                    needUpdate = true;
                }

                // need update from mouse events?
                if (svg.opts['ignoreMouse'] != true) {
                    needUpdate = needUpdate | svg.Mouse.hasEvents();
                }

                // need update from animations?
                if (svg.opts['ignoreAnimation'] != true) {
                    for (var i = 0; i < svg.Animations.length; i++) {
                        needUpdate = needUpdate | svg.Animations[i].update(1000 / svg.FRAMERATE);
                    }
                }

                // need update from redraw?
                if (typeof svg.opts['forceRedraw'] == 'function') {
                    if (svg.opts['forceRedraw']() == true) needUpdate = true;
                }

                // render if needed
                if (needUpdate) {
                    draw();
                    svg.Mouse.runEvents(); // run and clear our events
                }
            }, 1000 / svg.FRAMERATE);
        };

        svg.stop = function () {
            if (svg.intervalID) {
                clearInterval(svg.intervalID);
            }
        };

        svg.Mouse = new function () {
            this.events = [];
            this.hasEvents = function () {
                return this.events.length != 0;
            };

            this.onclick = function (x, y) {
                this.events.push({
                    type: 'onclick',
                    x: x,
                    y: y,
                    run: function run(e) {
                        if (e.onclick) e.onclick();
                    }
                });
            };

            this.onmousemove = function (x, y) {
                this.events.push({
                    type: 'onmousemove',
                    x: x,
                    y: y,
                    run: function run(e) {
                        if (e.onmousemove) e.onmousemove();
                    }
                });
            };

            this.eventElements = [];

            this.checkPath = function (element, ctx) {
                for (var i = 0; i < this.events.length; i++) {
                    var e = this.events[i];
                    if (ctx.isPointInPath && ctx.isPointInPath(e.x, e.y)) this.eventElements[i] = element;
                }
            };

            this.checkBoundingBox = function (element, bb) {
                for (var i = 0; i < this.events.length; i++) {
                    var e = this.events[i];
                    if (bb.isPointInBox(e.x, e.y)) this.eventElements[i] = element;
                }
            };

            this.runEvents = function () {
                svg.ctx.canvas.style.cursor = '';

                for (var i = 0; i < this.events.length; i++) {
                    var e = this.events[i];
                    var element = this.eventElements[i];
                    while (element) {
                        e.run(element);
                        element = element.parent;
                    }
                }

                // done running, clear
                this.events = [];
                this.eventElements = [];
            };
        }();

        return svg;
    }
    if (typeof CanvasRenderingContext2D != 'undefined') {
        CanvasRenderingContext2D.prototype.drawSvg = function (s, dx, dy, dw, dh) {
            canvg(this.canvas, s, {
                ignoreMouse: true,
                ignoreAnimation: true,
                ignoreDimensions: true,
                ignoreClear: true,
                offsetX: dx,
                offsetY: dy,
                scaleWidth: dw,
                scaleHeight: dh
            });
        };
    }

    window.canvg = canvg;

    return canvg;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/libs/rgbcolor.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/libs/rgbcolor.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */
module.exports = function RGBColor(color_string) {
    this.ok = false;

    // strip any leading #
    if (color_string.charAt(0) == '#') {
        // remove # if any
        color_string = color_string.substr(1, 6);
    }

    color_string = color_string.replace(/ /g, '');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    for (var key in simple_colors) {
        if (color_string == key) {
            color_string = simple_colors[key];
        }
    }
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [{
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
        process: function process(bits) {
            return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
        }
    }, {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: ['#00ff00', '336699'],
        process: function process(bits) {
            return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
        }
    }, {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: ['#fb0', 'f0f'],
        process: function process(bits) {
            return [parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16)];
        }
    }];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            this.ok = true;
        }
    }

    // validate/cleanup values
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
    this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
    this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    };

    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    };

    // help
    this.getHelpXML = function () {
        var examples = new Array();
        // add regexps
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }

        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText = 'margin: 3px; ' + 'border: 1px solid black; ' + 'background:' + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);
            } catch (e) {}
        }
        return xml;
    };
};

/***/ }),

/***/ "./node_modules/stackblur-canvas/src/stackblur.js":
/*!********************************************************!*\
  !*** ./node_modules/stackblur-canvas/src/stackblur.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
    StackBlur - a fast almost Gaussian Blur For Canvas

    Version:     0.5
    Author:        Mario Klingemann
    Contact:     mario@quasimondo.com
    Website:    http://www.quasimondo.com/StackBlurForCanvas
    Twitter:    @quasimondo

    In case you find this class useful - especially in commercial projects -
    I am not totally unhappy for a small donation to my PayPal account
    mario@quasimondo.de

    Or support me on flattr:
    https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

    Copyright (c) 2010 Mario Klingemann

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    */


var mul_table = [
    512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
    454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
    482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
    437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
    497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
    320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
    446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
    329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
    505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
    399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
    324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
    268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
    451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
    385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
    332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
    289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];


var shg_table = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
    17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
    19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];


function processImage(img, canvas, radius, blurAlphaChannel)
{
    if (typeof(img) == 'string') {
        var img = document.getElementById(img);
    }
    else if (typeof HTMLImageElement !== 'undefined' && !img instanceof HTMLImageElement) {
        return;
    }
    var w = img.naturalWidth;
    var h = img.naturalHeight;

    if (typeof(canvas) == 'string') {
        var canvas = document.getElementById(canvas);
    }
    else if (typeof HTMLCanvasElement !== 'undefined' && !canvas instanceof HTMLCanvasElement) {
        return;
    }

    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    canvas.width = w;
    canvas.height = h;

    var context = canvas.getContext('2d');
    context.clearRect(0, 0, w, h);
    context.drawImage(img, 0, 0);

    if (isNaN(radius) || radius < 1) return;

    if (blurAlphaChannel)
        processCanvasRGBA(canvas, 0, 0, w, h, radius);
    else
        processCanvasRGB(canvas, 0, 0, w, h, radius);
}

function getImageDataFromCanvas(canvas, top_x, top_y, width, height)
{
    if (typeof(canvas) == 'string')
        var canvas  = document.getElementById(canvas);
    else if (typeof HTMLCanvasElement !== 'undefined' && !canvas instanceof HTMLCanvasElement)
        return;

    var context = canvas.getContext('2d');
    var imageData;

    try {
        try {
            imageData = context.getImageData(top_x, top_y, width, height);
        } catch(e) {
            throw new Error("unable to access local image data: " + e);
            return;
        }
    } catch(e) {
        throw new Error("unable to access image data: " + e);
    }

    return imageData;
}

function processCanvasRGBA(canvas, top_x, top_y, width, height, radius)
{
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;

    var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);

    imageData = processImageDataRGBA(imageData, top_x, top_y, width, height, radius);

    canvas.getContext('2d').putImageData(imageData, top_x, top_y);
}

function processImageDataRGBA(imageData, top_x, top_y, width, height, radius)
{
    var pixels = imageData.data;

    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
        r_out_sum, g_out_sum, b_out_sum, a_out_sum,
        r_in_sum, g_in_sum, b_in_sum, a_in_sum,
        pr, pg, pb, pa, rbs;

    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for (i = 1; i < div; i++)
    {
        stack = stack.next = new BlurStack();
        if (i == radiusPlus1) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for (y = 0; y < height; y++)
    {
        r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi+3]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }

        for (i = 1; i < radiusPlus1; i++)
        {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[p+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[p+2])) * rbs;
            a_sum += (stack.a = (pa = pixels[p+3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;
        }


        stackIn = stackStart;
        stackOut = stackEnd;
        for (x = 0; x < width; x++)
        {
            pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa != 0)
            {
                pa = 255 / pa;
                pixels[yi]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
                pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p =  (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

            r_in_sum += (stackIn.r = pixels[p]);
            g_in_sum += (stackIn.g = pixels[p+1]);
            b_in_sum += (stackIn.b = pixels[p+2]);
            a_in_sum += (stackIn.a = pixels[p+3]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);
            a_out_sum += (pa = stackOut.a);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }


    for (x = 0; x < width; x++)
    {
        g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi+3]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }

        yp = width;

        for (i = 1; i <= radius; i++)
        {
            yi = (yp + x) << 2;

            r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[yi+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[yi+2])) * rbs;
            a_sum += (stack.a = (pa = pixels[yi+3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;

            if(i < heightMinus1)
            {
                yp += width;
            }
        }

        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for (y = 0; y < height; y++)
        {
            p = yi << 2;
            pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa > 0)
            {
                pa = 255 / pa;
                pixels[p]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[p+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[p+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
                pixels[p] = pixels[p+1] = pixels[p+2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

            r_sum += (r_in_sum += (stackIn.r = pixels[p]));
            g_sum += (g_in_sum += (stackIn.g = pixels[p+1]));
            b_sum += (b_in_sum += (stackIn.b = pixels[p+2]));
            a_sum += (a_in_sum += (stackIn.a = pixels[p+3]));

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);
            a_out_sum += (pa = stackOut.a);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += width;
        }
    }
    return imageData;
}

function processCanvasRGB(canvas, top_x, top_y, width, height, radius)
{
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;

    var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);
    imageData = processImageDataRGB(imageData, top_x, top_y, width, height, radius);

    canvas.getContext('2d').putImageData(imageData, top_x, top_y);
}

function processImageDataRGB(imageData, top_x, top_y, width, height, radius)
{
    var pixels = imageData.data;

    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
        r_out_sum, g_out_sum, b_out_sum,
        r_in_sum, g_in_sum, b_in_sum,
        pr, pg, pb, rbs;

    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for (i = 1; i < div; i++)
    {
        stack = stack.next = new BlurStack();
        if (i == radiusPlus1) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for (y = 0; y < height; y++)
    {
        r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }

        for (i = 1; i < radiusPlus1; i++)
        {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[p+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[p+2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;
        }


        stackIn = stackStart;
        stackOut = stackEnd;
        for (x = 0; x < width; x++)
        {
            pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
            pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p =  (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

            r_in_sum += (stackIn.r = pixels[p]);
            g_in_sum += (stackIn.g = pixels[p+1]);
            b_in_sum += (stackIn.b = pixels[p+2]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }


    for (x = 0; x < width; x++)
    {
        g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }

        yp = width;

        for (i = 1; i <= radius; i++)
        {
            yi = (yp + x) << 2;

            r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[yi+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[yi+2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;

            if(i < heightMinus1)
            {
                yp += width;
            }
        }

        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for (y = 0; y < height; y++)
        {
            p = yi << 2;
            pixels[p]   = (r_sum * mul_sum) >> shg_sum;
            pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[p+2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

            r_sum += (r_in_sum += (stackIn.r = pixels[p]));
            g_sum += (g_in_sum += (stackIn.g = pixels[p+1]));
            b_sum += (b_in_sum += (stackIn.b = pixels[p+2]));

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += width;
        }
    }

    return imageData;
}

function BlurStack()
{
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
}

module.exports = {
    image: processImage,
    canvasRGBA: processCanvasRGBA,
    canvasRGB: processCanvasRGB,
    imageDataRGBA: processImageDataRGBA,
    imageDataRGB: processImageDataRGB
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vbGlicy9jYW52Zy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vbGlicy9yZ2Jjb2xvci5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvc3RhY2tibHVyLWNhbnZhcy9zcmMvc3RhY2tibHVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHNEQUFzRDtBQUN0RCxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJELDhEQUE4RDs7QUFFekg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdCQUF3QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsNEJBQTRCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0EsYUFBYTtBQUNiLHdFQUF3RTtBQUN4RSx1REFBdUQ7QUFDdkQ7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBLGFBQWE7QUFDYiw0Q0FBNEMsRUFBRSxxQ0FBcUM7QUFDbkYsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRDtBQUNBLCtDQUErQyx3QkFBd0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQixxQ0FBcUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGlDQUFpQztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtRUFBbUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNEJBQTRCO0FBQ3BFO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0EscUdBQXFHO0FBQ3JHLDBDQUEwQztBQUMxQyxzQ0FBc0M7QUFDdEMsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLHFEQUFxRDtBQUNyRCxtQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsa0JBQWtCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQyxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtJQUFrSTtBQUNsSTs7QUFFQTtBQUNBLHFJQUFxSTtBQUNySTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQywyQkFBMkI7QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQix3QkFBd0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUFBLHFHOzs7Ozs7Ozs7Ozs7QUN6aEdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDhCQUE4Qiw0Q0FBNEM7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ3JRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsWUFBWTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGVBQWUsV0FBVztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ2ZW5kb3JzfmNhbnZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGNhbnZnLmpzIC0gSmF2YXNjcmlwdCBTVkcgcGFyc2VyIGFuZCByZW5kZXJlciBvbiBDYW52YXNcbiAqIE1JVCBMaWNlbnNlZFxuICogR2FiZSBMZXJuZXIgKGdhYmVsZXJuZXJAZ21haWwuY29tKVxuICogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2NhbnZnL1xuICpcbiAqIFJlcXVpcmVzOiByZ2Jjb2xvci5qcyAtIGh0dHA6Ly93d3cucGhwaWVkLmNvbS9yZ2ItY29sb3ItcGFyc2VyLWluLWphdmFzY3JpcHQvXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZGVmaW5lKCdjYW52Z01vZHVsZScsIFsnLi9yZ2Jjb2xvcicsICdzdGFja2JsdXItY2FudmFzJ10sIGZ1bmN0aW9uIChSR0JDb2xvciwgc3RhY2tCbHVyKSB7XG4gICAgLy8gY2FudmcodGFyZ2V0LCBzKVxuICAgIC8vIGVtcHR5IHBhcmFtZXRlcnM6IHJlcGxhY2UgYWxsICdzdmcnIGVsZW1lbnRzIG9uIHBhZ2Ugd2l0aCAnY2FudmFzJyBlbGVtZW50c1xuICAgIC8vIHRhcmdldDogY2FudmFzIGVsZW1lbnQgb3IgdGhlIGlkIG9mIGEgY2FudmFzIGVsZW1lbnRcbiAgICAvLyBzOiBzdmcgc3RyaW5nLCB1cmwgdG8gc3ZnIGZpbGUsIG9yIHhtbCBkb2N1bWVudFxuICAgIC8vIG9wdHM6IG9wdGlvbmFsIGhhc2ggb2Ygb3B0aW9uc1xuICAgIC8vXHRcdCBpZ25vcmVNb3VzZTogdHJ1ZSA9PiBpZ25vcmUgbW91c2UgZXZlbnRzXG4gICAgLy9cdFx0IGlnbm9yZUFuaW1hdGlvbjogdHJ1ZSA9PiBpZ25vcmUgYW5pbWF0aW9uc1xuICAgIC8vXHRcdCBpZ25vcmVEaW1lbnNpb25zOiB0cnVlID0+IGRvZXMgbm90IHRyeSB0byByZXNpemUgY2FudmFzXG4gICAgLy8gICAgICAgaWdub3JlQ2xlYXI6IHRydWUgPT4gZG9lcyBub3QgY2xlYXIgY2FudmFzXG4gICAgLy8gICAgICAgb2Zmc2V0WDogaW50ID0+IGRyYXdzIGF0IGEgeCBvZmZzZXRcbiAgICAvL1x0XHQgb2Zmc2V0WTogaW50ID0+IGRyYXdzIGF0IGEgeSBvZmZzZXRcbiAgICAvLyAgICAgICBzY2FsZVdpZHRoOiBpbnQgPT4gc2NhbGVzIGhvcml6b250YWxseSB0byB3aWR0aFxuICAgIC8vICAgICAgIHNjYWxlSGVpZ2h0OiBpbnQgPT4gc2NhbGVzIHZlcnRpY2FsbHkgdG8gaGVpZ2h0XG4gICAgLy8gICAgICAgcmVuZGVyQ2FsbGJhY2s6IGZ1bmN0aW9uID0+IHdpbGwgY2FsbCB0aGUgZnVuY3Rpb24gYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlciBpcyBjb21wbGV0ZWRcbiAgICAvLyAgICAgICBmb3JjZVJlZHJhdzogZnVuY3Rpb24gPT4gd2lsbCBjYWxsIHRoZSBmdW5jdGlvbiBvbiBldmVyeSBmcmFtZSwgaWYgaXQgcmV0dXJucyB0cnVlLCB3aWxsIHJlZHJhd1xuICAgIHZhciBjYW52ZyA9IGZ1bmN0aW9uIGNhbnZnKHRhcmdldCwgcywgb3B0cykge1xuICAgICAgICAvLyBubyBwYXJhbWV0ZXJzXG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCAmJiBzID09IG51bGwgJiYgb3B0cyA9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgc3ZnVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2ZycpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdmdUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN2Z1RhZyA9IHN2Z1RhZ3NbaV07XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICBjLndpZHRoID0gc3ZnVGFnLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIGMuaGVpZ2h0ID0gc3ZnVGFnLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICBzdmdUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYywgc3ZnVGFnKTtcbiAgICAgICAgICAgICAgICBzdmdUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdmdUYWcpO1xuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ZnVGFnKTtcbiAgICAgICAgICAgICAgICBjYW52ZyhjLCBkaXYuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcmUgY2xhc3Mgb24gY2FudmFzXG4gICAgICAgIGlmICh0YXJnZXQuc3ZnICE9IG51bGwpIHRhcmdldC5zdmcuc3RvcCgpO1xuICAgICAgICB2YXIgc3ZnID0gYnVpbGQob3B0cyB8fCB7fSk7XG4gICAgICAgIC8vIG9uIGkuZS4gOCBmb3IgZmxhc2ggY2FudmFzLCB3ZSBjYW4ndCBhc3NpZ24gdGhlIHByb3BlcnR5IHNvIGNoZWNrIGZvciBpdFxuICAgICAgICBpZiAoISh0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGggPT0gMSAmJiB0YXJnZXQuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PSAnT0JKRUNUJykpIHRhcmdldC5zdmcgPSBzdmc7XG5cbiAgICAgICAgdmFyIGN0eCA9IHRhcmdldC5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAodHlwZW9mIHMuZG9jdW1lbnRFbGVtZW50ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBsb2FkIGZyb20geG1sIGRvY1xuICAgICAgICAgICAgc3ZnLmxvYWRYbWxEb2MoY3R4LCBzKTtcbiAgICAgICAgfSBlbHNlIGlmIChzLnN1YnN0cigwLCAxKSA9PSAnPCcpIHtcbiAgICAgICAgICAgIC8vIGxvYWQgZnJvbSB4bWwgc3RyaW5nXG4gICAgICAgICAgICBzdmcubG9hZFhtbChjdHgsIHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbG9hZCBmcm9tIHVybFxuICAgICAgICAgICAgc3ZnLmxvYWQoY3R4LCBzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQubWF0Y2hlc1xuICAgIHZhciBtYXRjaGVzU2VsZWN0b3I7XG4gICAgaWYgKHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5tb3pNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUubXNNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5vTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXF1aXJlcyBTaXp6bGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3dpa2kvU2l6emxlLURvY3VtZW50YXRpb25cbiAgICAgICAgLy8gb3IgalF1ZXJ5OiBodHRwOi8vanF1ZXJ5LmNvbS9kb3dubG9hZC9cbiAgICAgICAgLy8gb3IgWmVwdG86IGh0dHA6Ly96ZXB0b2pzLmNvbS8jXG4gICAgICAgIC8vIHdpdGhvdXQgaXQsIHRoaXMgaXMgYSBSZWZlcmVuY2VFcnJvclxuXG4gICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBaZXB0byA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQobm9kZSkuaXMoc2VsZWN0b3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgbWF0Y2hlc1NlbGVjdG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gU2l6emxlLm1hdGNoZXNTZWxlY3RvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNsaWdodGx5IG1vZGlmaWVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tlZWdhbnN0cmVldC9zcGVjaWZpY2l0eS9ibG9iL21hc3Rlci9zcGVjaWZpY2l0eS5qc1xuICAgIHZhciBhdHRyaWJ1dGVSZWdleCA9IC8oXFxbW15cXF1dK1xcXSkvZztcbiAgICB2YXIgaWRSZWdleCA9IC8oI1teXFxzXFwrPn5cXC5cXFs6XSspL2c7XG4gICAgdmFyIGNsYXNzUmVnZXggPSAvKFxcLlteXFxzXFwrPn5cXC5cXFs6XSspL2c7XG4gICAgdmFyIHBzZXVkb0VsZW1lbnRSZWdleCA9IC8oOjpbXlxcc1xcKz5+XFwuXFxbOl0rfDpmaXJzdC1saW5lfDpmaXJzdC1sZXR0ZXJ8OmJlZm9yZXw6YWZ0ZXIpL2dpO1xuICAgIHZhciBwc2V1ZG9DbGFzc1dpdGhCcmFja2V0c1JlZ2V4ID0gLyg6W1xcdy1dK1xcKFteXFwpXSpcXCkpL2dpO1xuICAgIHZhciBwc2V1ZG9DbGFzc1JlZ2V4ID0gLyg6W15cXHNcXCs+flxcLlxcWzpdKykvZztcbiAgICB2YXIgZWxlbWVudFJlZ2V4ID0gLyhbXlxcc1xcKz5+XFwuXFxbOl0rKS9nO1xuXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JTcGVjaWZpY2l0eShzZWxlY3Rvcikge1xuICAgICAgICB2YXIgdHlwZUNvdW50ID0gWzAsIDAsIDBdO1xuICAgICAgICB2YXIgZmluZE1hdGNoID0gZnVuY3Rpb24gZmluZE1hdGNoKHJlZ2V4LCB0eXBlKSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IHNlbGVjdG9yLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0eXBlQ291bnRbdHlwZV0gKz0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UocmVnZXgsICcgJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC86bm90XFwoKFteXFwpXSopXFwpL2csICcgICAgICQxICcpO1xuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoL3tbXl0qL2dtLCAnICcpO1xuICAgICAgICBmaW5kTWF0Y2goYXR0cmlidXRlUmVnZXgsIDEpO1xuICAgICAgICBmaW5kTWF0Y2goaWRSZWdleCwgMCk7XG4gICAgICAgIGZpbmRNYXRjaChjbGFzc1JlZ2V4LCAxKTtcbiAgICAgICAgZmluZE1hdGNoKHBzZXVkb0VsZW1lbnRSZWdleCwgMik7XG4gICAgICAgIGZpbmRNYXRjaChwc2V1ZG9DbGFzc1dpdGhCcmFja2V0c1JlZ2V4LCAxKTtcbiAgICAgICAgZmluZE1hdGNoKHBzZXVkb0NsYXNzUmVnZXgsIDEpO1xuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoL1tcXCpcXHNcXCs+fl0vZywgJyAnKTtcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC9bI1xcLl0vZywgJyAnKTtcbiAgICAgICAgZmluZE1hdGNoKGVsZW1lbnRSZWdleCwgMik7XG4gICAgICAgIHJldHVybiB0eXBlQ291bnQuam9pbignJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGQob3B0cykge1xuICAgICAgICB2YXIgc3ZnID0ge1xuICAgICAgICAgICAgb3B0czogb3B0c1xuICAgICAgICB9O1xuXG4gICAgICAgIHN2Zy5GUkFNRVJBVEUgPSAzMDtcbiAgICAgICAgc3ZnLk1BWF9WSVJUVUFMX1BJWEVMUyA9IDMwMDAwO1xuXG4gICAgICAgIHN2Zy5sb2cgPSBmdW5jdGlvbiAobXNnKSB7fTtcbiAgICAgICAgaWYgKHN2Zy5vcHRzWydsb2cnXSA9PSB0cnVlICYmIHR5cGVvZiBjb25zb2xlICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBzdmcubG9nID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2xvYmFsc1xuICAgICAgICBzdmcuaW5pdCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgIHZhciB1bmlxdWVJZCA9IDA7XG4gICAgICAgICAgICBzdmcuVW5pcXVlSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdW5pcXVlSWQrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NhbnZnJyArIHVuaXF1ZUlkO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN2Zy5EZWZpbml0aW9ucyA9IHt9O1xuICAgICAgICAgICAgc3ZnLlN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgc3ZnLlN0eWxlc1NwZWNpZmljaXR5ID0ge307XG4gICAgICAgICAgICBzdmcuQW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICAgICAgc3ZnLkltYWdlcyA9IFtdO1xuICAgICAgICAgICAgc3ZnLmN0eCA9IGN0eDtcbiAgICAgICAgICAgIHN2Zy5WaWV3UG9ydCA9IG5ldyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLkNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdQb3J0cyA9IFtdO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRDdXJyZW50ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuUmVtb3ZlQ3VycmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydHMucG9wKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLkN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdQb3J0c1t0aGlzLnZpZXdQb3J0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkN1cnJlbnQoKS53aWR0aDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DdXJyZW50KCkuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5Db21wdXRlU2l6ZSA9IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkICE9IG51bGwgJiYgdHlwZW9mIGQgPT0gJ251bWJlcicpIHJldHVybiBkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZCA9PSAneCcpIHJldHVybiB0aGlzLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkID09ICd5JykgcmV0dXJuIHRoaXMuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy53aWR0aCgpLCAyKSArIE1hdGgucG93KHRoaXMuaGVpZ2h0KCksIDIpKSAvIE1hdGguc3FydCgyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHN2Zy5pbml0KCk7XG5cbiAgICAgICAgLy8gaW1hZ2VzIGxvYWRlZFxuICAgICAgICBzdmcuSW1hZ2VzTG9hZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdmcuSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdmcuSW1hZ2VzW2ldLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdHJpbVxuICAgICAgICBzdmcudHJpbSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29tcHJlc3Mgc3BhY2VzXG4gICAgICAgIHN2Zy5jb21wcmVzc1NwYWNlcyA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9bXFxzXFxyXFx0XFxuXSsvZ20sICcgJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYWpheFxuICAgICAgICBzdmcuYWpheCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgIHZhciBBSkFYO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIEFKQVggPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQUpBWCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEFKQVgpIHtcbiAgICAgICAgICAgICAgICBBSkFYLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIEFKQVguc2VuZChudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQUpBWC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwYXJzZSB4bWxcbiAgICAgICAgc3ZnLnBhcnNlWG1sID0gZnVuY3Rpb24gKHhtbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBXaW5kb3dzICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBXaW5kb3dzLkRhdGEgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFdpbmRvd3MuRGF0YS5YbWwgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgeG1sRG9jID0gbmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbERvY3VtZW50KCk7XG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gbmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbExvYWRTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLnByb2hpYml0RHRkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgeG1sRG9jLmxvYWRYbWwoeG1sLCBzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHhtbERvYztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LkRPTVBhcnNlcikge1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sLCAndGV4dC94bWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeG1sID0geG1sLnJlcGxhY2UoLzwhRE9DVFlQRSBzdmdbXj5dKj4vLCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIHhtbERvYyA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MRE9NJyk7XG4gICAgICAgICAgICAgICAgeG1sRG9jLmFzeW5jID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICB4bWxEb2MubG9hZFhNTCh4bWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiB4bWxEb2M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3ZnLlByb3BlcnR5ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgIT0gbnVsbCAmJiB0aGlzLnZhbHVlICE9PSAnJztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyByZXR1cm4gdGhlIG51bWVyaWNhbCB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSByZXR1cm4gMDtcblxuICAgICAgICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCh0aGlzLnZhbHVlICsgJycpLm1hdGNoKC8lJC8pKSB7XG4gICAgICAgICAgICAgICAgbiA9IG4gLyAxMDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9O1xuXG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUudmFsdWVPckRlZmF1bHQgPSBmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSgpKSByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWY7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZU9yRGVmYXVsdCA9IGZ1bmN0aW9uIChkZWYpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKCkpIHJldHVybiB0aGlzLm51bVZhbHVlKCk7XG4gICAgICAgICAgICByZXR1cm4gZGVmO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbG9yIGV4dGVuc2lvbnNcbiAgICAgICAgLy8gYXVnbWVudCB0aGUgY3VycmVudCBjb2xvciB2YWx1ZSB3aXRoIHRoZSBvcGFjaXR5XG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUuYWRkT3BhY2l0eSA9IGZ1bmN0aW9uIChvcGFjaXR5UHJvcCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIGlmIChvcGFjaXR5UHJvcC52YWx1ZSAhPSBudWxsICYmIG9wYWNpdHlQcm9wLnZhbHVlICE9ICcnICYmIHR5cGVvZiB0aGlzLnZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FuIG9ubHkgYWRkIG9wYWNpdHkgdG8gY29sb3JzLCBub3QgcGF0dGVybnNcbiAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSBuZXcgUkdCQ29sb3IodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gJ3JnYmEoJyArIGNvbG9yLnIgKyAnLCAnICsgY29sb3IuZyArICcsICcgKyBjb2xvci5iICsgJywgJyArIG9wYWNpdHlQcm9wLm51bVZhbHVlKCkgKyAnKSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuUHJvcGVydHkodGhpcy5uYW1lLCBuZXdWYWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZGVmaW5pdGlvbiBleHRlbnNpb25zXG4gICAgICAgIC8vIGdldCB0aGUgZGVmaW5pdGlvbiBmcm9tIHRoZSBkZWZpbml0aW9ucyB0YWJsZVxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmdldERlZmluaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMudmFsdWUubWF0Y2goLyMoW15cXCknXCJdKykvKTtcbiAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdmcuRGVmaW5pdGlvbnNbbmFtZV07XG4gICAgICAgIH07XG5cbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS5pc1VybERlZmluaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5pbmRleE9mKCd1cmwoJykgPT0gMDtcbiAgICAgICAgfTtcblxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmdldEZpbGxTdHlsZURlZmluaXRpb24gPSBmdW5jdGlvbiAoZSwgb3BhY2l0eVByb3ApIHtcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmdldERlZmluaXRpb24oKTtcblxuICAgICAgICAgICAgLy8gZ3JhZGllbnRcbiAgICAgICAgICAgIGlmIChkZWYgIT0gbnVsbCAmJiBkZWYuY3JlYXRlR3JhZGllbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmLmNyZWF0ZUdyYWRpZW50KHN2Zy5jdHgsIGUsIG9wYWNpdHlQcm9wKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcGF0dGVyblxuICAgICAgICAgICAgaWYgKGRlZiAhPSBudWxsICYmIGRlZi5jcmVhdGVQYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZi5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHQgPSBkZWYuYXR0cmlidXRlKCdwYXR0ZXJuVHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlZiA9IGRlZi5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHQuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmLmF0dHJpYnV0ZSgncGF0dGVyblRyYW5zZm9ybScsIHRydWUpLnZhbHVlID0gcHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZi5jcmVhdGVQYXR0ZXJuKHN2Zy5jdHgsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBsZW5ndGggZXh0ZW5zaW9uc1xuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmdldERQSSA9IGZ1bmN0aW9uICh2aWV3UG9ydCkge1xuICAgICAgICAgICAgcmV0dXJuIDk2LjA7IC8vIFRPRE86IGNvbXB1dGU/XG4gICAgICAgIH07XG5cbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS5nZXRFTSA9IGZ1bmN0aW9uICh2aWV3UG9ydCkge1xuICAgICAgICAgICAgdmFyIGVtID0gMTI7XG5cbiAgICAgICAgICAgIHZhciBmb250U2l6ZSA9IG5ldyBzdmcuUHJvcGVydHkoJ2ZvbnRTaXplJywgc3ZnLkZvbnQuUGFyc2Uoc3ZnLmN0eC5mb250KS5mb250U2l6ZSk7XG4gICAgICAgICAgICBpZiAoZm9udFNpemUuaGFzVmFsdWUoKSkgZW0gPSBmb250U2l6ZS50b1BpeGVscyh2aWV3UG9ydCk7XG5cbiAgICAgICAgICAgIHJldHVybiBlbTtcbiAgICAgICAgfTtcblxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmdldFVuaXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnZhbHVlICsgJyc7XG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9bMC05XFwuXFwtXS9nLCAnJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBsZW5ndGggYXMgcGl4ZWxzXG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUudG9QaXhlbHMgPSBmdW5jdGlvbiAodmlld1BvcnQsIHByb2Nlc3NQZXJjZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSkgcmV0dXJuIDA7XG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMudmFsdWUgKyAnJztcbiAgICAgICAgICAgIGlmIChzLm1hdGNoKC9lbSQvKSkgcmV0dXJuIHRoaXMubnVtVmFsdWUoKSAqIHRoaXMuZ2V0RU0odmlld1BvcnQpO1xuICAgICAgICAgICAgaWYgKHMubWF0Y2goL2V4JC8pKSByZXR1cm4gdGhpcy5udW1WYWx1ZSgpICogdGhpcy5nZXRFTSh2aWV3UG9ydCkgLyAyLjA7XG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvcHgkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCk7XG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvcHQkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiB0aGlzLmdldERQSSh2aWV3UG9ydCkgKiAoMS4wIC8gNzIuMCk7XG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvcGMkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiAxNTtcbiAgICAgICAgICAgIGlmIChzLm1hdGNoKC9jbSQvKSkgcmV0dXJuIHRoaXMubnVtVmFsdWUoKSAqIHRoaXMuZ2V0RFBJKHZpZXdQb3J0KSAvIDIuNTQ7XG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvbW0kLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiB0aGlzLmdldERQSSh2aWV3UG9ydCkgLyAyNS40O1xuICAgICAgICAgICAgaWYgKHMubWF0Y2goL2luJC8pKSByZXR1cm4gdGhpcy5udW1WYWx1ZSgpICogdGhpcy5nZXREUEkodmlld1BvcnQpO1xuICAgICAgICAgICAgaWYgKHMubWF0Y2goLyUkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiBzdmcuVmlld1BvcnQuQ29tcHV0ZVNpemUodmlld1BvcnQpO1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLm51bVZhbHVlKCk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzc1BlcmNlbnQgJiYgbiA8IDEuMCkgcmV0dXJuIG4gKiBzdmcuVmlld1BvcnQuQ29tcHV0ZVNpemUodmlld1BvcnQpO1xuICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdGltZSBleHRlbnNpb25zXG4gICAgICAgIC8vIGdldCB0aGUgdGltZSBhcyBtaWxsaXNlY29uZHNcbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS50b01pbGxpc2Vjb25kcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSByZXR1cm4gMDtcbiAgICAgICAgICAgIHZhciBzID0gdGhpcy52YWx1ZSArICcnO1xuICAgICAgICAgICAgaWYgKHMubWF0Y2goL3MkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiAxMDAwO1xuICAgICAgICAgICAgaWYgKHMubWF0Y2goL21zJC8pKSByZXR1cm4gdGhpcy5udW1WYWx1ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtVmFsdWUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhbmdsZSBleHRlbnNpb25zXG4gICAgICAgIC8vIGdldCB0aGUgYW5nbGUgYXMgcmFkaWFuc1xuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLnRvUmFkaWFucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSByZXR1cm4gMDtcbiAgICAgICAgICAgIHZhciBzID0gdGhpcy52YWx1ZSArICcnO1xuICAgICAgICAgICAgaWYgKHMubWF0Y2goL2RlZyQvKSkgcmV0dXJuIHRoaXMubnVtVmFsdWUoKSAqIChNYXRoLlBJIC8gMTgwLjApO1xuICAgICAgICAgICAgaWYgKHMubWF0Y2goL2dyYWQkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiAoTWF0aC5QSSAvIDIwMC4wKTtcbiAgICAgICAgICAgIGlmIChzLm1hdGNoKC9yYWQkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW1WYWx1ZSgpICogKE1hdGguUEkgLyAxODAuMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdGV4dCBleHRlbnNpb25zXG4gICAgICAgIC8vIGdldCB0aGUgdGV4dCBiYXNlbGluZVxuICAgICAgICB2YXIgdGV4dEJhc2VsaW5lTWFwcGluZyA9IHtcbiAgICAgICAgICAgICdiYXNlbGluZSc6ICdhbHBoYWJldGljJyxcbiAgICAgICAgICAgICdiZWZvcmUtZWRnZSc6ICd0b3AnLFxuICAgICAgICAgICAgJ3RleHQtYmVmb3JlLWVkZ2UnOiAndG9wJyxcbiAgICAgICAgICAgICdtaWRkbGUnOiAnbWlkZGxlJyxcbiAgICAgICAgICAgICdjZW50cmFsJzogJ21pZGRsZScsXG4gICAgICAgICAgICAnYWZ0ZXItZWRnZSc6ICdib3R0b20nLFxuICAgICAgICAgICAgJ3RleHQtYWZ0ZXItZWRnZSc6ICdib3R0b20nLFxuICAgICAgICAgICAgJ2lkZW9ncmFwaGljJzogJ2lkZW9ncmFwaGljJyxcbiAgICAgICAgICAgICdhbHBoYWJldGljJzogJ2FscGhhYmV0aWMnLFxuICAgICAgICAgICAgJ2hhbmdpbmcnOiAnaGFuZ2luZycsXG4gICAgICAgICAgICAnbWF0aGVtYXRpY2FsJzogJ2FscGhhYmV0aWMnXG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUudG9UZXh0QmFzZWxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGV4dEJhc2VsaW5lTWFwcGluZ1t0aGlzLnZhbHVlXTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmb250c1xuICAgICAgICBzdmcuRm9udCA9IG5ldyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLlN0eWxlcyA9ICdub3JtYWx8aXRhbGljfG9ibGlxdWV8aW5oZXJpdCc7XG4gICAgICAgICAgICB0aGlzLlZhcmlhbnRzID0gJ25vcm1hbHxzbWFsbC1jYXBzfGluaGVyaXQnO1xuICAgICAgICAgICAgdGhpcy5XZWlnaHRzID0gJ25vcm1hbHxib2xkfGJvbGRlcnxsaWdodGVyfDEwMHwyMDB8MzAwfDQwMHw1MDB8NjAwfDcwMHw4MDB8OTAwfGluaGVyaXQnO1xuXG4gICAgICAgICAgICB0aGlzLkNyZWF0ZUZvbnQgPSBmdW5jdGlvbiAoZm9udFN0eWxlLCBmb250VmFyaWFudCwgZm9udFdlaWdodCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGluaGVyaXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGluaGVyaXQgIT0gbnVsbCA/IHRoaXMuUGFyc2UoaW5oZXJpdCkgOiB0aGlzLkNyZWF0ZUZvbnQoJycsICcnLCAnJywgJycsICcnLCBzdmcuY3R4LmZvbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHkgfHwgZi5mb250RmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZm9udFNpemUgfHwgZi5mb250U2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBmb250U3R5bGUgfHwgZi5mb250U3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQgfHwgZi5mb250V2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWFudDogZm9udFZhcmlhbnQgfHwgZi5mb250VmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmZvbnRTdHlsZSwgdGhpcy5mb250VmFyaWFudCwgdGhpcy5mb250V2VpZ2h0LCB0aGlzLmZvbnRTaXplLCB0aGlzLmZvbnRGYW1pbHldLmpvaW4oJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLlBhcnNlID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBkID0gc3ZnLnRyaW0oc3ZnLmNvbXByZXNzU3BhY2VzKHMgfHwgJycpKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIHZhciBzZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRWYXJpYW50OiBmYWxzZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGZmID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2V0LmZvbnRTdHlsZSAmJiB0aGF0LlN0eWxlcy5pbmRleE9mKGRbaV0pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZFtpXSAhPSAnaW5oZXJpdCcpIGYuZm9udFN0eWxlID0gZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldC5mb250U3R5bGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzZXQuZm9udFZhcmlhbnQgJiYgdGhhdC5WYXJpYW50cy5pbmRleE9mKGRbaV0pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZFtpXSAhPSAnaW5oZXJpdCcpIGYuZm9udFZhcmlhbnQgPSBkW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0LmZvbnRTdHlsZSA9IHNldC5mb250VmFyaWFudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNldC5mb250V2VpZ2h0ICYmIHRoYXQuV2VpZ2h0cy5pbmRleE9mKGRbaV0pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZFtpXSAhPSAnaW5oZXJpdCcpIGYuZm9udFdlaWdodCA9IGRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQuZm9udFN0eWxlID0gc2V0LmZvbnRWYXJpYW50ID0gc2V0LmZvbnRXZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzZXQuZm9udFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkW2ldICE9ICdpbmhlcml0JykgZi5mb250U2l6ZSA9IGRbaV0uc3BsaXQoJy8nKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldC5mb250U3R5bGUgPSBzZXQuZm9udFZhcmlhbnQgPSBzZXQuZm9udFdlaWdodCA9IHNldC5mb250U2l6ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZFtpXSAhPSAnaW5oZXJpdCcpIGZmICs9IGRbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZmICE9ICcnKSBmLmZvbnRGYW1pbHkgPSBmZjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcblxuICAgICAgICAvLyBwb2ludHMgYW5kIHBhdGhzXG4gICAgICAgIHN2Zy5Ub051bWJlckFycmF5ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHZhciBhID0gc3ZnLnRyaW0oc3ZnLmNvbXByZXNzU3BhY2VzKChzIHx8ICcnKS5yZXBsYWNlKC8sL2csICcgJykpKS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYVtpXSA9IHBhcnNlRmxvYXQoYVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfTtcblxuICAgICAgICBzdmcuUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3ZnLlBvaW50LnByb3RvdHlwZS5hbmdsZVRvID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHAueSAtIHRoaXMueSwgcC54IC0gdGhpcy54KTtcbiAgICAgICAgfTtcblxuICAgICAgICBzdmcuUG9pbnQucHJvdG90eXBlLmFwcGx5VHJhbnNmb3JtID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHZhciB4cCA9IHRoaXMueCAqIHZbMF0gKyB0aGlzLnkgKiB2WzJdICsgdls0XTtcbiAgICAgICAgICAgIHZhciB5cCA9IHRoaXMueCAqIHZbMV0gKyB0aGlzLnkgKiB2WzNdICsgdls1XTtcbiAgICAgICAgICAgIHRoaXMueCA9IHhwO1xuICAgICAgICAgICAgdGhpcy55ID0geXA7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3ZnLkNyZWF0ZVBvaW50ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHZhciBhID0gc3ZnLlRvTnVtYmVyQXJyYXkocyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHN2Zy5Qb2ludChhWzBdLCBhWzFdKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzdmcuQ3JlYXRlUGF0aCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICB2YXIgYSA9IHN2Zy5Ub051bWJlckFycmF5KHMpO1xuICAgICAgICAgICAgdmFyIHBhdGggPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgIHBhdGgucHVzaChuZXcgc3ZnLlBvaW50KGFbaV0sIGFbaSArIDFdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBib3VuZGluZyBib3hcbiAgICAgICAgc3ZnLkJvdW5kaW5nQm94ID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgICAvLyBwYXNzIGluIGluaXRpYWwgcG9pbnRzIGlmIHlvdSB3YW50XG4gICAgICAgICAgICB0aGlzLngxID0gTnVtYmVyLk5hTjtcbiAgICAgICAgICAgIHRoaXMueTEgPSBOdW1iZXIuTmFOO1xuICAgICAgICAgICAgdGhpcy54MiA9IE51bWJlci5OYU47XG4gICAgICAgICAgICB0aGlzLnkyID0gTnVtYmVyLk5hTjtcblxuICAgICAgICAgICAgdGhpcy54ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLngxO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMueSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55MTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLngyIC0gdGhpcy54MTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55MiAtIHRoaXMueTE7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmFkZFBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTih0aGlzLngxKSB8fCBpc05hTih0aGlzLngyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54MSA9IHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLngyID0geDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IHRoaXMueDEpIHRoaXMueDEgPSB4O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA+IHRoaXMueDIpIHRoaXMueDIgPSB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMueTEpIHx8IGlzTmFOKHRoaXMueTIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkxID0geTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueTIgPSB5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh5IDwgdGhpcy55MSkgdGhpcy55MSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5ID4gdGhpcy55MikgdGhpcy55MiA9IHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRkWCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludCh4LCBudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkZFkgPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUG9pbnQobnVsbCwgeSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmFkZEJvdW5kaW5nQm94ID0gZnVuY3Rpb24gKGJiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludChiYi54MSwgYmIueTEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUG9pbnQoYmIueDIsIGJiLnkyKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuYWRkUXVhZHJhdGljQ3VydmUgPSBmdW5jdGlvbiAocDB4LCBwMHksIHAxeCwgcDF5LCBwMngsIHAyeSkge1xuICAgICAgICAgICAgICAgIHZhciBjcDF4ID0gcDB4ICsgMiAvIDMgKiAocDF4IC0gcDB4KTsgLy8gQ1AxID0gUVAwICsgMi8zICooUVAxLVFQMClcbiAgICAgICAgICAgICAgICB2YXIgY3AxeSA9IHAweSArIDIgLyAzICogKHAxeSAtIHAweSk7IC8vIENQMSA9IFFQMCArIDIvMyAqKFFQMS1RUDApXG4gICAgICAgICAgICAgICAgdmFyIGNwMnggPSBjcDF4ICsgMSAvIDMgKiAocDJ4IC0gcDB4KTsgLy8gQ1AyID0gQ1AxICsgMS8zICooUVAyLVFQMClcbiAgICAgICAgICAgICAgICB2YXIgY3AyeSA9IGNwMXkgKyAxIC8gMyAqIChwMnkgLSBwMHkpOyAvLyBDUDIgPSBDUDEgKyAxLzMgKihRUDItUVAwKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQmV6aWVyQ3VydmUocDB4LCBwMHksIGNwMXgsIGNwMngsIGNwMXksIGNwMnksIHAyeCwgcDJ5KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuYWRkQmV6aWVyQ3VydmUgPSBmdW5jdGlvbiAocDB4LCBwMHksIHAxeCwgcDF5LCBwMngsIHAyeSwgcDN4LCBwM3kpIHtcbiAgICAgICAgICAgICAgICAvLyBmcm9tIGh0dHA6Ly9ibG9nLmhhY2tlcnMtY2FmZS5uZXQvMjAwOS8wNi9ob3ctdG8tY2FsY3VsYXRlLWJlemllci1jdXJ2ZXMtYm91bmRpbmcuaHRtbFxuICAgICAgICAgICAgICAgIHZhciBwMCA9IFtwMHgsIHAweV0sXG4gICAgICAgICAgICAgICAgICAgIHAxID0gW3AxeCwgcDF5XSxcbiAgICAgICAgICAgICAgICAgICAgcDIgPSBbcDJ4LCBwMnldLFxuICAgICAgICAgICAgICAgICAgICBwMyA9IFtwM3gsIHAzeV07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludChwMFswXSwgcDBbMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUG9pbnQocDNbMF0sIHAzWzFdKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uIGYodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KDEgLSB0LCAzKSAqIHAwW2ldICsgMyAqIE1hdGgucG93KDEgLSB0LCAyKSAqIHQgKiBwMVtpXSArIDMgKiAoMSAtIHQpICogTWF0aC5wb3codCwgMikgKiBwMltpXSArIE1hdGgucG93KHQsIDMpICogcDNbaV07XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSA2ICogcDBbaV0gLSAxMiAqIHAxW2ldICsgNiAqIHAyW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IC0zICogcDBbaV0gKyA5ICogcDFbaV0gLSA5ICogcDJbaV0gKyAzICogcDNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gMyAqIHAxW2ldIC0gMyAqIHAwW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSAtYyAvIGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA8IHQgJiYgdCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB0aGlzLmFkZFgoZih0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMSkgdGhpcy5hZGRZKGYodCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgYjJhYyA9IE1hdGgucG93KGIsIDIpIC0gNCAqIGMgKiBhO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYjJhYyA8IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdDEgPSAoLWIgKyBNYXRoLnNxcnQoYjJhYykpIC8gKDIgKiBhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDAgPCB0MSAmJiB0MSA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHRoaXMuYWRkWChmKHQxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB0aGlzLmFkZFkoZih0MSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MiA9ICgtYiAtIE1hdGguc3FydChiMmFjKSkgLyAoMiAqIGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoMCA8IHQyICYmIHQyIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkgdGhpcy5hZGRYKGYodDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDEpIHRoaXMuYWRkWShmKHQyKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmlzUG9pbnRJbkJveCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueDEgPD0geCAmJiB4IDw9IHRoaXMueDIgJiYgdGhpcy55MSA8PSB5ICYmIHkgPD0gdGhpcy55MjtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuYWRkUG9pbnQoeDEsIHkxKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUG9pbnQoeDIsIHkyKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyB0cmFuc2Zvcm1zXG4gICAgICAgIHN2Zy5UcmFuc2Zvcm0gPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5UeXBlID0ge307XG5cbiAgICAgICAgICAgIC8vIHRyYW5zbGF0ZVxuICAgICAgICAgICAgdGhpcy5UeXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wID0gc3ZnLkNyZWF0ZVBvaW50KHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wLnggfHwgMC4wLCB0aGlzLnAueSB8fCAwLjApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy51bmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKC0xLjAgKiB0aGlzLnAueCB8fCAwLjAsIC0xLjAgKiB0aGlzLnAueSB8fCAwLjApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvUG9pbnQgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgICAgICBwLmFwcGx5VHJhbnNmb3JtKFsxLCAwLCAwLCAxLCB0aGlzLnAueCB8fCAwLjAsIHRoaXMucC55IHx8IDAuMF0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyByb3RhdGVcbiAgICAgICAgICAgIHRoaXMuVHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHZhciBhID0gc3ZnLlRvTnVtYmVyQXJyYXkocyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IG5ldyBzdmcuUHJvcGVydHkoJ2FuZ2xlJywgYVswXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jeCA9IGFbMV0gfHwgMDtcbiAgICAgICAgICAgICAgICB0aGlzLmN5ID0gYVsyXSB8fCAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5jeCwgdGhpcy5jeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZS50b1JhZGlhbnMoKSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3gsIC10aGlzLmN5KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMudW5hcHBseSA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLmN4LCB0aGlzLmN5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSgtMS4wICogdGhpcy5hbmdsZS50b1JhZGlhbnMoKSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3gsIC10aGlzLmN5KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb1BvaW50ID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmFuZ2xlLnRvUmFkaWFucygpO1xuICAgICAgICAgICAgICAgICAgICBwLmFwcGx5VHJhbnNmb3JtKFsxLCAwLCAwLCAxLCB0aGlzLnAueCB8fCAwLjAsIHRoaXMucC55IHx8IDAuMF0pO1xuICAgICAgICAgICAgICAgICAgICBwLmFwcGx5VHJhbnNmb3JtKFtNYXRoLmNvcyhhKSwgTWF0aC5zaW4oYSksIC1NYXRoLnNpbihhKSwgTWF0aC5jb3MoYSksIDAsIDBdKTtcbiAgICAgICAgICAgICAgICAgICAgcC5hcHBseVRyYW5zZm9ybShbMSwgMCwgMCwgMSwgLXRoaXMucC54IHx8IDAuMCwgLXRoaXMucC55IHx8IDAuMF0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLlR5cGUuc2NhbGUgPSBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHRoaXMucCA9IHN2Zy5DcmVhdGVQb2ludChzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUodGhpcy5wLnggfHwgMS4wLCB0aGlzLnAueSB8fCB0aGlzLnAueCB8fCAxLjApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy51bmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUoMS4wIC8gdGhpcy5wLnggfHwgMS4wLCAxLjAgLyB0aGlzLnAueSB8fCB0aGlzLnAueCB8fCAxLjApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvUG9pbnQgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgICAgICBwLmFwcGx5VHJhbnNmb3JtKFt0aGlzLnAueCB8fCAwLjAsIDAsIDAsIHRoaXMucC55IHx8IDAuMCwgMCwgMF0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLlR5cGUubWF0cml4ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm0gPSBzdmcuVG9OdW1iZXJBcnJheShzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKHRoaXMubVswXSwgdGhpcy5tWzFdLCB0aGlzLm1bMl0sIHRoaXMubVszXSwgdGhpcy5tWzRdLCB0aGlzLm1bNV0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy51bmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMubVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLm1bMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5tWzRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMubVsxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm1bM107XG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gdGhpcy5tWzVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMS4wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGV0ID0gMSAvIChhICogKGUgKiBpIC0gZiAqIGgpIC0gYiAqIChkICogaSAtIGYgKiBnKSArIGMgKiAoZCAqIGggLSBlICogZykpO1xuICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKGRldCAqIChlICogaSAtIGYgKiBoKSwgZGV0ICogKGYgKiBnIC0gZCAqIGkpLCBkZXQgKiAoYyAqIGggLSBiICogaSksIGRldCAqIChhICogaSAtIGMgKiBnKSwgZGV0ICogKGIgKiBmIC0gYyAqIGUpLCBkZXQgKiAoYyAqIGQgLSBhICogZikpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvUG9pbnQgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgICAgICBwLmFwcGx5VHJhbnNmb3JtKHRoaXMubSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuVHlwZS5Ta2V3QmFzZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlID0gdGhhdC5UeXBlLm1hdHJpeDtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2Uocyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IG5ldyBzdmcuUHJvcGVydHkoJ2FuZ2xlJywgcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5UeXBlLlNrZXdCYXNlLnByb3RvdHlwZSA9IG5ldyB0aGlzLlR5cGUubWF0cml4KCk7XG5cbiAgICAgICAgICAgIHRoaXMuVHlwZS5za2V3WCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlID0gdGhhdC5UeXBlLlNrZXdCYXNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZShzKTtcbiAgICAgICAgICAgICAgICB0aGlzLm0gPSBbMSwgMCwgTWF0aC50YW4odGhpcy5hbmdsZS50b1JhZGlhbnMoKSksIDEsIDAsIDBdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuVHlwZS5za2V3WC5wcm90b3R5cGUgPSBuZXcgdGhpcy5UeXBlLlNrZXdCYXNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMuVHlwZS5za2V3WSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlID0gdGhhdC5UeXBlLlNrZXdCYXNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZShzKTtcbiAgICAgICAgICAgICAgICB0aGlzLm0gPSBbMSwgTWF0aC50YW4odGhpcy5hbmdsZS50b1JhZGlhbnMoKSksIDAsIDEsIDAsIDBdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuVHlwZS5za2V3WS5wcm90b3R5cGUgPSBuZXcgdGhpcy5UeXBlLlNrZXdCYXNlKCk7XG5cbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmFuc2Zvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3Jtc1tpXS5hcHBseShjdHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMudW5hcHBseSA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cmFuc2Zvcm1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3Jtc1tpXS51bmFwcGx5KGN0eCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5hcHBseVRvUG9pbnQgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmFuc2Zvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3Jtc1tpXS5hcHBseVRvUG9pbnQocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGRhdGEgPSBzdmcudHJpbShzdmcuY29tcHJlc3NTcGFjZXModikpLnJlcGxhY2UoL1xcKShbYS16QS1aXSkvZywgJykgJDEnKS5yZXBsYWNlKC9cXCkoXFxzPyxcXHM/KS9nLCAnKSAnKS5zcGxpdCgvXFxzKD89W2Etel0pLyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHN2Zy50cmltKGRhdGFbaV0uc3BsaXQoJygnKVswXSk7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSBkYXRhW2ldLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gbmV3IHRoaXMuVHlwZVt0eXBlXShzKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0udHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1zLnB1c2godHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhc3BlY3QgcmF0aW9cbiAgICAgICAgc3ZnLkFzcGVjdFJhdGlvID0gZnVuY3Rpb24gKGN0eCwgYXNwZWN0UmF0aW8sIHdpZHRoLCBkZXNpcmVkV2lkdGgsIGhlaWdodCwgZGVzaXJlZEhlaWdodCwgbWluWCwgbWluWSwgcmVmWCwgcmVmWSkge1xuICAgICAgICAgICAgLy8gYXNwZWN0IHJhdGlvIC0gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHL2Nvb3Jkcy5odG1sI1ByZXNlcnZlQXNwZWN0UmF0aW9BdHRyaWJ1dGVcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvID0gc3ZnLmNvbXByZXNzU3BhY2VzKGFzcGVjdFJhdGlvKTtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW8ucmVwbGFjZSgvXmRlZmVyXFxzLywgJycpOyAvLyBpZ25vcmUgZGVmZXJcbiAgICAgICAgICAgIHZhciBhbGlnbiA9IGFzcGVjdFJhdGlvLnNwbGl0KCcgJylbMF0gfHwgJ3hNaWRZTWlkJztcbiAgICAgICAgICAgIHZhciBtZWV0T3JTbGljZSA9IGFzcGVjdFJhdGlvLnNwbGl0KCcgJylbMV0gfHwgJ21lZXQnO1xuXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgc2NhbGVcbiAgICAgICAgICAgIHZhciBzY2FsZVggPSB3aWR0aCAvIGRlc2lyZWRXaWR0aDtcbiAgICAgICAgICAgIHZhciBzY2FsZVkgPSBoZWlnaHQgLyBkZXNpcmVkSGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHNjYWxlTWluID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICAgICAgdmFyIHNjYWxlTWF4ID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xuICAgICAgICAgICAgaWYgKG1lZXRPclNsaWNlID09ICdtZWV0Jykge1xuICAgICAgICAgICAgICAgIGRlc2lyZWRXaWR0aCAqPSBzY2FsZU1pbjtcbiAgICAgICAgICAgICAgICBkZXNpcmVkSGVpZ2h0ICo9IHNjYWxlTWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lZXRPclNsaWNlID09ICdzbGljZScpIHtcbiAgICAgICAgICAgICAgICBkZXNpcmVkV2lkdGggKj0gc2NhbGVNYXg7XG4gICAgICAgICAgICAgICAgZGVzaXJlZEhlaWdodCAqPSBzY2FsZU1heDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVmWCA9IG5ldyBzdmcuUHJvcGVydHkoJ3JlZlgnLCByZWZYKTtcbiAgICAgICAgICAgIHJlZlkgPSBuZXcgc3ZnLlByb3BlcnR5KCdyZWZZJywgcmVmWSk7XG4gICAgICAgICAgICBpZiAocmVmWC5oYXNWYWx1ZSgpICYmIHJlZlkuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXNjYWxlTWluICogcmVmWC50b1BpeGVscygneCcpLCAtc2NhbGVNaW4gKiByZWZZLnRvUGl4ZWxzKCd5JykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhbGlnblxuICAgICAgICAgICAgICAgIGlmIChhbGlnbi5tYXRjaCgvXnhNaWQvKSAmJiAobWVldE9yU2xpY2UgPT0gJ21lZXQnICYmIHNjYWxlTWluID09IHNjYWxlWSB8fCBtZWV0T3JTbGljZSA9PSAnc2xpY2UnICYmIHNjYWxlTWF4ID09IHNjYWxlWSkpIGN0eC50cmFuc2xhdGUod2lkdGggLyAyLjAgLSBkZXNpcmVkV2lkdGggLyAyLjAsIDApO1xuICAgICAgICAgICAgICAgIGlmIChhbGlnbi5tYXRjaCgvWU1pZCQvKSAmJiAobWVldE9yU2xpY2UgPT0gJ21lZXQnICYmIHNjYWxlTWluID09IHNjYWxlWCB8fCBtZWV0T3JTbGljZSA9PSAnc2xpY2UnICYmIHNjYWxlTWF4ID09IHNjYWxlWCkpIGN0eC50cmFuc2xhdGUoMCwgaGVpZ2h0IC8gMi4wIC0gZGVzaXJlZEhlaWdodCAvIDIuMCk7XG4gICAgICAgICAgICAgICAgaWYgKGFsaWduLm1hdGNoKC9eeE1heC8pICYmIChtZWV0T3JTbGljZSA9PSAnbWVldCcgJiYgc2NhbGVNaW4gPT0gc2NhbGVZIHx8IG1lZXRPclNsaWNlID09ICdzbGljZScgJiYgc2NhbGVNYXggPT0gc2NhbGVZKSkgY3R4LnRyYW5zbGF0ZSh3aWR0aCAtIGRlc2lyZWRXaWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKGFsaWduLm1hdGNoKC9ZTWF4JC8pICYmIChtZWV0T3JTbGljZSA9PSAnbWVldCcgJiYgc2NhbGVNaW4gPT0gc2NhbGVYIHx8IG1lZXRPclNsaWNlID09ICdzbGljZScgJiYgc2NhbGVNYXggPT0gc2NhbGVYKSkgY3R4LnRyYW5zbGF0ZSgwLCBoZWlnaHQgLSBkZXNpcmVkSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2NhbGVcbiAgICAgICAgICAgIGlmIChhbGlnbiA9PSAnbm9uZScpIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7ZWxzZSBpZiAobWVldE9yU2xpY2UgPT0gJ21lZXQnKSBjdHguc2NhbGUoc2NhbGVNaW4sIHNjYWxlTWluKTtlbHNlIGlmIChtZWV0T3JTbGljZSA9PSAnc2xpY2UnKSBjdHguc2NhbGUoc2NhbGVNYXgsIHNjYWxlTWF4KTtcblxuICAgICAgICAgICAgLy8gdHJhbnNsYXRlXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKG1pblggPT0gbnVsbCA/IDAgOiAtbWluWCwgbWluWSA9PSBudWxsID8gMCA6IC1taW5ZKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBlbGVtZW50c1xuICAgICAgICBzdmcuRWxlbWVudCA9IHt9O1xuXG4gICAgICAgIHN2Zy5FbXB0eVByb3BlcnR5ID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnRU1QVFknLCAnJyk7XG5cbiAgICAgICAgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XG4gICAgICAgICAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5zdHlsZXNTcGVjaWZpY2l0eSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuXG4gICAgICAgICAgICAvLyBnZXQgb3IgY3JlYXRlIGF0dHJpYnV0ZVxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSwgY3JlYXRlSWZOb3RFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoYSAhPSBudWxsKSByZXR1cm4gYTtcblxuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVJZk5vdEV4aXN0cyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSBuZXcgc3ZnLlByb3BlcnR5KG5hbWUsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW25hbWVdID0gYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgfHwgc3ZnLkVtcHR5UHJvcGVydHk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmdldEhyZWZBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT0gJ2hyZWYnIHx8IGEubWF0Y2goLzpocmVmJC8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2FdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzdmcuRW1wdHlQcm9wZXJ0eTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGdldCBvciBjcmVhdGUgc3R5bGUsIGNyYXdscyB1cCBub2RlIHRyZWVcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgY3JlYXRlSWZOb3RFeGlzdHMsIHNraXBBbmNlc3RvcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMuc3R5bGVzW25hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChzICE9IG51bGwpIHJldHVybiBzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoYSAhPSBudWxsICYmIGEuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tuYW1lXSA9IGE7IC8vIG1vdmUgdXAgdG8gbWUgdG8gY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNraXBBbmNlc3RvcnMgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAocCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHMgPSBwLnN0eWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBzICE9IG51bGwgJiYgcHMuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjcmVhdGVJZk5vdEV4aXN0cyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgPSBuZXcgc3ZnLlByb3BlcnR5KG5hbWUsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZXNbbmFtZV0gPSBzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcyB8fCBzdmcuRW1wdHlQcm9wZXJ0eTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGJhc2UgcmVuZGVyXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICAvLyBkb24ndCByZW5kZXIgZGlzcGxheT1ub25lXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ2Rpc3BsYXknKS52YWx1ZSA9PSAnbm9uZScpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIC8vIGRvbid0IHJlbmRlciB2aXNpYmlsaXR5PWhpZGRlblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCd2aXNpYmlsaXR5JykudmFsdWUgPT0gJ2hpZGRlbicpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdtYXNrJykuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXNrXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXNrID0gdGhpcy5hdHRyaWJ1dGUoJ21hc2snKS5nZXREZWZpbml0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNrICE9IG51bGwpIG1hc2suYXBwbHkoY3R4LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3R5bGUoJ2ZpbHRlcicpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnN0eWxlKCdmaWx0ZXInKS5nZXREZWZpbml0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgIT0gbnVsbCkgZmlsdGVyLmFwcGx5KGN0eCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckNvbnRleHQoY3R4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGJhc2Ugc2V0IGNvbnRleHRcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICAvLyBPVkVSUklERSBNRSFcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGJhc2UgY2xlYXIgY29udGV4dFxuICAgICAgICAgICAgdGhpcy5jbGVhckNvbnRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgLy8gT1ZFUlJJREUgTUUhXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBiYXNlIHJlbmRlciBjaGlsZHJlblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5yZW5kZXIoY3R4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkTm9kZSwgY3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGROb2RlO1xuICAgICAgICAgICAgICAgIGlmIChjcmVhdGUpIGNoaWxkID0gc3ZnLkNyZWF0ZUVsZW1lbnQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlICE9ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIHN0eWxlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHNlbGVjdG9yIGluIHN2Zy5TdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yWzBdICE9ICdAJyAmJiBtYXRjaGVzU2VsZWN0b3Iobm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGVzID0gc3ZnLlN0eWxlc1tzZWxlY3Rvcl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BlY2lmaWNpdHkgPSBzdmcuU3R5bGVzU3BlY2lmaWNpdHlbc2VsZWN0b3JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nU3BlY2lmaWNpdHkgPSB0aGlzLnN0eWxlc1NwZWNpZmljaXR5W25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGV4aXN0aW5nU3BlY2lmaWNpdHkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nU3BlY2lmaWNpdHkgPSAnMDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWNpdHkgPiBleGlzdGluZ1NwZWNpZmljaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tuYW1lXSA9IHN0eWxlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVzU3BlY2lmaWNpdHlbbmFtZV0gPSBzcGVjaWZpY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChub2RlICE9IG51bGwgJiYgbm9kZS5ub2RlVHlwZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy9FTEVNRU5UX05PREVcbiAgICAgICAgICAgICAgICAvLyBhZGQgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1thdHRyaWJ1dGUubm9kZU5hbWVdID0gbmV3IHN2Zy5Qcm9wZXJ0eShhdHRyaWJ1dGUubm9kZU5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgaW5saW5lIHN0eWxlc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnc3R5bGUnKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZXMgPSB0aGlzLmF0dHJpYnV0ZSgnc3R5bGUnKS52YWx1ZS5zcGxpdCgnOycpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zy50cmltKHN0eWxlc1tpXSkgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBzdHlsZXNbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHN2Zy50cmltKHN0eWxlWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzdmcudHJpbShzdHlsZVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZXNbbmFtZV0gPSBuZXcgc3ZnLlByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFkZCBpZFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnaWQnKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdmcuRGVmaW5pdGlvbnNbdGhpcy5hdHRyaWJ1dGUoJ2lkJykudmFsdWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5EZWZpbml0aW9uc1t0aGlzLmF0dHJpYnV0ZSgnaWQnKS52YWx1ZV0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYWRkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkTm9kZSA9IG5vZGUuY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PSAxKSB0aGlzLmFkZENoaWxkKGNoaWxkTm9kZSwgdHJ1ZSk7IC8vRUxFTUVOVF9OT0RFXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcHR1cmVUZXh0Tm9kZXMgJiYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PSAzIHx8IGNoaWxkTm9kZS5ub2RlVHlwZSA9PSA0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBjaGlsZE5vZGUudmFsdWUgfHwgY2hpbGROb2RlLnRleHQgfHwgY2hpbGROb2RlLnRleHRDb250ZW50IHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zy5jb21wcmVzc1NwYWNlcyh0ZXh0KSAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQobmV3IHN2Zy5FbGVtZW50LnRzcGFuKGNoaWxkTm9kZSksIGZhbHNlKTsgLy8gVEVYVF9OT0RFXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgIC8vIGZpbGxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnZmlsbCcpLmlzVXJsRGVmaW5pdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcyA9IHRoaXMuc3R5bGUoJ2ZpbGwnKS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsIHRoaXMuc3R5bGUoJ2ZpbGwtb3BhY2l0eScpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZzICE9IG51bGwpIGN0eC5maWxsU3R5bGUgPSBmcztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3R5bGUoJ2ZpbGwnKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxsU3R5bGUgPSB0aGlzLnN0eWxlKCdmaWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsU3R5bGUudmFsdWUgPT0gJ2N1cnJlbnRDb2xvcicpIGZpbGxTdHlsZS52YWx1ZSA9IHRoaXMuc3R5bGUoJ2NvbG9yJykudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsU3R5bGUudmFsdWUgIT0gJ2luaGVyaXQnKSBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlLnZhbHVlID09ICdub25lJyA/ICdyZ2JhKDAsMCwwLDApJyA6IGZpbGxTdHlsZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ2ZpbGwtb3BhY2l0eScpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGxTdHlsZSA9IG5ldyBzdmcuUHJvcGVydHkoJ2ZpbGwnLCBjdHguZmlsbFN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlID0gZmlsbFN0eWxlLmFkZE9wYWNpdHkodGhpcy5zdHlsZSgnZmlsbC1vcGFjaXR5JykpO1xuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHN0cm9rZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdzdHJva2UnKS5pc1VybERlZmluaXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnMgPSB0aGlzLnN0eWxlKCdzdHJva2UnKS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsIHRoaXMuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnMgIT0gbnVsbCkgY3R4LnN0cm9rZVN0eWxlID0gZnM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0eWxlKCdzdHJva2UnKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJva2VTdHlsZSA9IHRoaXMuc3R5bGUoJ3N0cm9rZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3Ryb2tlU3R5bGUudmFsdWUgPT0gJ2N1cnJlbnRDb2xvcicpIHN0cm9rZVN0eWxlLnZhbHVlID0gdGhpcy5zdHlsZSgnY29sb3InKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cm9rZVN0eWxlLnZhbHVlICE9ICdpbmhlcml0JykgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGUudmFsdWUgPT0gJ25vbmUnID8gJ3JnYmEoMCwwLDAsMCknIDogc3Ryb2tlU3R5bGUudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdzdHJva2Utb3BhY2l0eScpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0cm9rZVN0eWxlID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnc3Ryb2tlJywgY3R4LnN0cm9rZVN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZS5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JykpO1xuICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ3N0cm9rZS13aWR0aCcpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0xpbmVXaWR0aCA9IHRoaXMuc3R5bGUoJ3N0cm9rZS13aWR0aCcpLnRvUGl4ZWxzKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBuZXdMaW5lV2lkdGggPT0gMCA/IDAuMDAxIDogbmV3TGluZVdpZHRoOyAvLyBicm93c2VycyBkb24ndCByZXNwZWN0IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ3N0cm9rZS1saW5lY2FwJykuaGFzVmFsdWUoKSkgY3R4LmxpbmVDYXAgPSB0aGlzLnN0eWxlKCdzdHJva2UtbGluZWNhcCcpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdzdHJva2UtbGluZWpvaW4nKS5oYXNWYWx1ZSgpKSBjdHgubGluZUpvaW4gPSB0aGlzLnN0eWxlKCdzdHJva2UtbGluZWpvaW4nKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnc3Ryb2tlLW1pdGVybGltaXQnKS5oYXNWYWx1ZSgpKSBjdHgubWl0ZXJMaW1pdCA9IHRoaXMuc3R5bGUoJ3N0cm9rZS1taXRlcmxpbWl0JykudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknKS5oYXNWYWx1ZSgpICYmIHRoaXMuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknKS52YWx1ZSAhPSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdhcHMgPSBzdmcuVG9OdW1iZXJBcnJheSh0aGlzLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN0eC5zZXRMaW5lRGFzaCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNldExpbmVEYXNoKGdhcHMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdHgud2Via2l0TGluZURhc2ggIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC53ZWJraXRMaW5lRGFzaCA9IGdhcHM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGN0eC5tb3pEYXNoICE9ICd1bmRlZmluZWQnICYmICEoZ2Fwcy5sZW5ndGggPT0gMSAmJiBnYXBzWzBdID09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW96RGFzaCA9IGdhcHM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5zdHlsZSgnc3Ryb2tlLWRhc2hvZmZzZXQnKS5udW1WYWx1ZU9yRGVmYXVsdCgxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdHgubGluZURhc2hPZmZzZXQgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY3R4LndlYmtpdExpbmVEYXNoT2Zmc2V0ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgud2Via2l0TGluZURhc2hPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGN0eC5tb3pEYXNoT2Zmc2V0ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW96RGFzaE9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGZvbnRcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN0eC5mb250ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5mb250ID0gc3ZnLkZvbnQuQ3JlYXRlRm9udCh0aGlzLnN0eWxlKCdmb250LXN0eWxlJykudmFsdWUsIHRoaXMuc3R5bGUoJ2ZvbnQtdmFyaWFudCcpLnZhbHVlLCB0aGlzLnN0eWxlKCdmb250LXdlaWdodCcpLnZhbHVlLCB0aGlzLnN0eWxlKCdmb250LXNpemUnKS5oYXNWYWx1ZSgpID8gdGhpcy5zdHlsZSgnZm9udC1zaXplJykudG9QaXhlbHMoKSArICdweCcgOiAnJywgdGhpcy5zdHlsZSgnZm9udC1mYW1pbHknKS52YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgndHJhbnNmb3JtJywgZmFsc2UsIHRydWUpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IG5ldyBzdmcuVHJhbnNmb3JtKHRoaXMuc3R5bGUoJ3RyYW5zZm9ybScsIGZhbHNlLCB0cnVlKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5hcHBseShjdHgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNsaXBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ2NsaXAtcGF0aCcsIGZhbHNlLCB0cnVlKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGlwID0gdGhpcy5hdHRyaWJ1dGUoJ2NsaXAtcGF0aCcsIGZhbHNlLCB0cnVlKS5nZXREZWZpbml0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlwICE9IG51bGwpIGNsaXAuYXBwbHkoY3R4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ29wYWNpdHknKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuc3R5bGUoJ29wYWNpdHknKS5udW1WYWx1ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHN2Zy5Cb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGgoY3R4KTtcbiAgICAgICAgICAgICAgICBzdmcuTW91c2UuY2hlY2tQYXRoKHRoaXMsIGN0eCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5maWxsU3R5bGUgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ2ZpbGwtcnVsZScpLnZhbHVlT3JEZWZhdWx0KCdpbmhlcml0JykgIT0gJ2luaGVyaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCh0aGlzLnN0eWxlKCdmaWxsLXJ1bGUnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdHguc3Ryb2tlU3R5bGUgIT0gJycpIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXJrZXJzID0gdGhpcy5nZXRNYXJrZXJzKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnbWFya2VyLXN0YXJ0JykuaXNVcmxEZWZpbml0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSB0aGlzLnN0eWxlKCdtYXJrZXItc3RhcnQnKS5nZXREZWZpbml0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIucmVuZGVyKGN0eCwgbWFya2Vyc1swXVswXSwgbWFya2Vyc1swXVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ21hcmtlci1taWQnKS5pc1VybERlZmluaXRpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmtlciA9IHRoaXMuc3R5bGUoJ21hcmtlci1taWQnKS5nZXREZWZpbml0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG1hcmtlcnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnJlbmRlcihjdHgsIG1hcmtlcnNbaV1bMF0sIG1hcmtlcnNbaV1bMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdtYXJrZXItZW5kJykuaXNVcmxEZWZpbml0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSB0aGlzLnN0eWxlKCdtYXJrZXItZW5kJykuZ2V0RGVmaW5pdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyLnJlbmRlcihjdHgsIG1hcmtlcnNbbWFya2Vycy5sZW5ndGggLSAxXVswXSwgbWFya2Vyc1ttYXJrZXJzLmxlbmd0aCAtIDFdWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGF0aCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5nZXRNYXJrZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gc3ZnIGVsZW1lbnRcbiAgICAgICAgc3ZnLkVsZW1lbnQuc3ZnID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYmFzZUNsZWFyQ29udGV4dCA9IHRoaXMuY2xlYXJDb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5jbGVhckNvbnRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlQ2xlYXJDb250ZXh0KGN0eCk7XG4gICAgICAgICAgICAgICAgc3ZnLlZpZXdQb3J0LlJlbW92ZUN1cnJlbnQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuYmFzZVNldENvbnRleHQgPSB0aGlzLnNldENvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgLy8gaW5pdGlhbCB2YWx1ZXMgYW5kIGRlZmF1bHRzXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwwLDAsMCknO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gJ2J1dHQnO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lSm9pbiA9ICdtaXRlcic7XG4gICAgICAgICAgICAgICAgY3R4Lm1pdGVyTGltaXQgPSA0O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3R4LmZvbnQgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5mb250ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY3R4LmNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZVNldENvbnRleHQoY3R4KTtcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgdmlldyBwb3J0XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZSgneCcpLmhhc1ZhbHVlKCkpIHRoaXMuYXR0cmlidXRlKCd4JywgdHJ1ZSkudmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGUoJ3knKS5oYXNWYWx1ZSgpKSB0aGlzLmF0dHJpYnV0ZSgneScsIHRydWUpLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKCd4JykudG9QaXhlbHMoJ3gnKSwgdGhpcy5hdHRyaWJ1dGUoJ3knKS50b1BpeGVscygneScpKTtcblxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHN2Zy5WaWV3UG9ydC53aWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBzdmcuVmlld1BvcnQuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLmhhc1ZhbHVlKCkpIHRoaXMuYXR0cmlidXRlKCd3aWR0aCcsIHRydWUpLnZhbHVlID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcpLmhhc1ZhbHVlKCkpIHRoaXMuYXR0cmlidXRlKCdoZWlnaHQnLCB0cnVlKS52YWx1ZSA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucm9vdCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuYXR0cmlidXRlKCdoZWlnaHQnKS50b1BpeGVscygneScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ3JlZlgnKS5oYXNWYWx1ZSgpICYmIHRoaXMuYXR0cmlidXRlKCdyZWZZJykuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IC10aGlzLmF0dHJpYnV0ZSgncmVmWCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gLXRoaXMuYXR0cmlidXRlKCdyZWZZJykudG9QaXhlbHMoJ3knKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnb3ZlcmZsb3cnKS52YWx1ZU9yRGVmYXVsdCgnaGlkZGVuJykgIT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCwgeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNsaXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmcuVmlld1BvcnQuU2V0Q3VycmVudCh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIC8vIHZpZXdib3hcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ3ZpZXdCb3gnKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWV3Qm94ID0gc3ZnLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoJ3ZpZXdCb3gnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5YID0gdmlld0JveFswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pblkgPSB2aWV3Qm94WzFdO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHZpZXdCb3hbMl07XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHZpZXdCb3hbM107XG5cbiAgICAgICAgICAgICAgICAgICAgc3ZnLkFzcGVjdFJhdGlvKGN0eCwgdGhpcy5hdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nKS52YWx1ZSwgc3ZnLlZpZXdQb3J0LndpZHRoKCksIHdpZHRoLCBzdmcuVmlld1BvcnQuaGVpZ2h0KCksIGhlaWdodCwgbWluWCwgbWluWSwgdGhpcy5hdHRyaWJ1dGUoJ3JlZlgnKS52YWx1ZSwgdGhpcy5hdHRyaWJ1dGUoJ3JlZlknKS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3ZnLlZpZXdQb3J0LlJlbW92ZUN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3ZnLlZpZXdQb3J0LlNldEN1cnJlbnQodmlld0JveFsyXSwgdmlld0JveFszXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuc3ZnLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gcmVjdCBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LnJlY3QgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmF0dHJpYnV0ZSgneCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLmF0dHJpYnV0ZSgneScpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5hdHRyaWJ1dGUoJ3dpZHRoJykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHJ4ID0gdGhpcy5hdHRyaWJ1dGUoJ3J4JykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgcnkgPSB0aGlzLmF0dHJpYnV0ZSgncnknKS50b1BpeGVscygneScpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgncngnKS5oYXNWYWx1ZSgpICYmICF0aGlzLmF0dHJpYnV0ZSgncnknKS5oYXNWYWx1ZSgpKSByeSA9IHJ4O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgncnknKS5oYXNWYWx1ZSgpICYmICF0aGlzLmF0dHJpYnV0ZSgncngnKS5oYXNWYWx1ZSgpKSByeCA9IHJ5O1xuICAgICAgICAgICAgICAgIHJ4ID0gTWF0aC5taW4ocngsIHdpZHRoIC8gMi4wKTtcbiAgICAgICAgICAgICAgICByeSA9IE1hdGgubWluKHJ5LCBoZWlnaHQgLyAyLjApO1xuICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIHJ4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcnkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByeCwgeSArIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oeCArIHJ4LCB5ICsgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcnkpO1xuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcngsIHkpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuQm91bmRpbmdCb3goeCwgeSwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LnJlY3QucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIGNpcmNsZSBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LmNpcmNsZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5QYXRoRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3ggPSB0aGlzLmF0dHJpYnV0ZSgnY3gnKS50b1BpeGVscygneCcpO1xuICAgICAgICAgICAgICAgIHZhciBjeSA9IHRoaXMuYXR0cmlidXRlKCdjeScpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmF0dHJpYnV0ZSgncicpLnRvUGl4ZWxzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjdHguYXJjKGN4LCBjeSwgciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuQm91bmRpbmdCb3goY3ggLSByLCBjeSAtIHIsIGN4ICsgciwgY3kgKyByKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmNpcmNsZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gZWxsaXBzZSBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LmVsbGlwc2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgdmFyIEtBUFBBID0gNCAqICgoTWF0aC5zcXJ0KDIpIC0gMSkgLyAzKTtcbiAgICAgICAgICAgICAgICB2YXIgcnggPSB0aGlzLmF0dHJpYnV0ZSgncngnKS50b1BpeGVscygneCcpO1xuICAgICAgICAgICAgICAgIHZhciByeSA9IHRoaXMuYXR0cmlidXRlKCdyeScpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGN4ID0gdGhpcy5hdHRyaWJ1dGUoJ2N4JykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgY3kgPSB0aGlzLmF0dHJpYnV0ZSgnY3knKS50b1BpeGVscygneScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhjeCwgY3kgLSByeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKGN4ICsgS0FQUEEgKiByeCwgY3kgLSByeSwgY3ggKyByeCwgY3kgLSBLQVBQQSAqIHJ5LCBjeCArIHJ4LCBjeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKGN4ICsgcngsIGN5ICsgS0FQUEEgKiByeSwgY3ggKyBLQVBQQSAqIHJ4LCBjeSArIHJ5LCBjeCwgY3kgKyByeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKGN4IC0gS0FQUEEgKiByeCwgY3kgKyByeSwgY3ggLSByeCwgY3kgKyBLQVBQQSAqIHJ5LCBjeCAtIHJ4LCBjeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKGN4IC0gcngsIGN5IC0gS0FQUEEgKiByeSwgY3ggLSBLQVBQQSAqIHJ4LCBjeSAtIHJ5LCBjeCwgY3kgLSByeSk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHN2Zy5Cb3VuZGluZ0JveChjeCAtIHJ4LCBjeSAtIHJ5LCBjeCArIHJ4LCBjeSArIHJ5KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmVsbGlwc2UucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIGxpbmUgZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5saW5lID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRQb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgc3ZnLlBvaW50KHRoaXMuYXR0cmlidXRlKCd4MScpLnRvUGl4ZWxzKCd4JyksIHRoaXMuYXR0cmlidXRlKCd5MScpLnRvUGl4ZWxzKCd5JykpLCBuZXcgc3ZnLlBvaW50KHRoaXMuYXR0cmlidXRlKCd4MicpLnRvUGl4ZWxzKCd4JyksIHRoaXMuYXR0cmlidXRlKCd5MicpLnRvUGl4ZWxzKCd5JykpXTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRzID0gdGhpcy5nZXRQb2ludHMoKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhwb2ludHNbMV0ueCwgcG9pbnRzWzFdLnkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgc3ZnLkJvdW5kaW5nQm94KHBvaW50c1swXS54LCBwb2ludHNbMF0ueSwgcG9pbnRzWzFdLngsIHBvaW50c1sxXS55KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TWFya2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRzID0gdGhpcy5nZXRQb2ludHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHBvaW50c1swXS5hbmdsZVRvKHBvaW50c1sxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtbcG9pbnRzWzBdLCBhXSwgW3BvaW50c1sxXSwgYV1dO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQubGluZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gcG9seWxpbmUgZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5wb2x5bGluZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5QYXRoRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gc3ZnLkNyZWF0ZVBhdGgodGhpcy5hdHRyaWJ1dGUoJ3BvaW50cycpLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmIgPSBuZXcgc3ZnLkJvdW5kaW5nQm94KHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xuICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCwgdGhpcy5wb2ludHNbMF0ueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYmIuYWRkUG9pbnQodGhpcy5wb2ludHNbaV0ueCwgdGhpcy5wb2ludHNbaV0ueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJiO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5nZXRNYXJrZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXJrZXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vycy5wdXNoKFt0aGlzLnBvaW50c1tpXSwgdGhpcy5wb2ludHNbaV0uYW5nbGVUbyh0aGlzLnBvaW50c1tpICsgMV0pXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaChbdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV0sIG1hcmtlcnNbbWFya2Vycy5sZW5ndGggLSAxXVsxXV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXJrZXJzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQucG9seWxpbmUucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIHBvbHlnb24gZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5wb2x5Z29uID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LnBvbHlsaW5lO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gdGhpcy5wYXRoO1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgIHZhciBiYiA9IHRoaXMuYmFzZVBhdGgoY3R4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYmI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzdmcuRWxlbWVudC5wb2x5Z29uLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5wb2x5bGluZSgpO1xuXG4gICAgICAgIC8vIHBhdGggZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5wYXRoID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmF0dHJpYnV0ZSgnZCcpLnZhbHVlO1xuICAgICAgICAgICAgLy8gVE9ETzogY29udmVydCB0byByZWFsIGxleGVyIGJhc2VkIG9uIGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL3BhdGhzLmh0bWwjUGF0aERhdGFCTkZcbiAgICAgICAgICAgIGQgPSBkLnJlcGxhY2UoLywvZ20sICcgJyk7IC8vIGdldCByaWQgb2YgYWxsIGNvbW1hc1xuICAgICAgICAgICAgLy8gQXMgdGhlIGVuZCBvZiBhIG1hdGNoIGNhbiBhbHNvIGJlIHRoZSBzdGFydCBvZiB0aGUgbmV4dCBtYXRjaCwgd2UgbmVlZCB0byBydW4gdGhpcyByZXBsYWNlIHR3aWNlLlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkID0gZC5yZXBsYWNlKC8oW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkoW15cXHNdKS9nbSwgJyQxICQyJyk7XG4gICAgICAgICAgICB9IC8vIHN1ZmZpeCBjb21tYW5kcyB3aXRoIHNwYWNlc1xuICAgICAgICAgICAgZCA9IGQucmVwbGFjZSgvKFteXFxzXSkoW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkvZ20sICckMSAkMicpOyAvLyBwcmVmaXggY29tbWFuZHMgd2l0aCBzcGFjZXNcbiAgICAgICAgICAgIGQgPSBkLnJlcGxhY2UoLyhbMC05XSkoWytcXC1dKS9nbSwgJyQxICQyJyk7IC8vIHNlcGFyYXRlIGRpZ2l0cyBvbiArLSBzaWduc1xuICAgICAgICAgICAgLy8gQWdhaW4sIHdlIG5lZWQgdG8gcnVuIHRoaXMgdHdpY2UgdG8gZmluZCBhbGwgb2NjdXJhbmNlc1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICBkID0gZC5yZXBsYWNlKC8oXFwuWzAtOV0qKShcXC4pL2dtLCAnJDEgJDInKTtcbiAgICAgICAgICAgIH0gLy8gc2VwYXJhdGUgZGlnaXRzIHdoZW4gdGhleSBzdGFydCB3aXRoIGEgY29tbWFcbiAgICAgICAgICAgIGQgPSBkLnJlcGxhY2UoLyhbQWFdKFxccytbMC05XSspezN9KVxccysoWzAxXSlcXHMqKFswMV0pL2dtLCAnJDEgJDMgJDQgJyk7IC8vIHNob3J0aGFuZCBlbGxpcHRpY2FsIGFyYyBwYXRoIHN5bnRheFxuICAgICAgICAgICAgZCA9IHN2Zy5jb21wcmVzc1NwYWNlcyhkKTsgLy8gY29tcHJlc3MgbXVsdGlwbGUgc3BhY2VzXG4gICAgICAgICAgICBkID0gc3ZnLnRyaW0oZCk7XG4gICAgICAgICAgICB0aGlzLlBhdGhQYXJzZXIgPSBuZXcgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VucyA9IGQuc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbW1hbmQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBzdmcuUG9pbnQoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBzdmcuUG9pbnQoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5ldyBzdmcuUG9pbnQoMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGVzID0gW107XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmkgPj0gdGhpcy50b2tlbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmRPckVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbmQoKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmkgKyAxXS5tYXRjaCgvXltBLVphLXpdJC8pICE9IG51bGw7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWxhdGl2ZUNvbW1hbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaSsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pXTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTY2FsYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuZ2V0VG9rZW4oKSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMubmV4dENvbW1hbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21tYW5kID0gdGhpcy5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1hbmQgPSB0aGlzLmdldFRva2VuKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gbmV3IHN2Zy5Qb2ludCh0aGlzLmdldFNjYWxhcigpLCB0aGlzLmdldFNjYWxhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUFic29sdXRlKHApO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldEFzQ29udHJvbFBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMuZ2V0UG9pbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sID0gcDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXNDdXJyZW50UG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gdGhpcy5nZXRQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBwO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpICE9ICdjJyAmJiB0aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpICE9ICdzJyAmJiB0aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpICE9ICdxJyAmJiB0aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpICE9ICd0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZmxlY3QgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgc3ZnLlBvaW50KDIgKiB0aGlzLmN1cnJlbnQueCAtIHRoaXMuY29udHJvbC54LCAyICogdGhpcy5jdXJyZW50LnkgLSB0aGlzLmNvbnRyb2wueSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VBYnNvbHV0ZSA9IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUmVsYXRpdmVDb21tYW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAueCArPSB0aGlzLmN1cnJlbnQueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAueSArPSB0aGlzLmN1cnJlbnQueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIgPSBmdW5jdGlvbiAocCwgZnJvbSwgcHJpb3JUbykge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGFzdCBhbmdsZSBpc24ndCBmaWxsZWQgaW4gYmVjYXVzZSB3ZSBkaWRuJ3QgaGF2ZSB0aGlzIHBvaW50IHlldCAuLi5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByaW9yVG8gIT0gbnVsbCAmJiB0aGlzLmFuZ2xlcy5sZW5ndGggPiAwICYmIHRoaXMuYW5nbGVzW3RoaXMuYW5nbGVzLmxlbmd0aCAtIDFdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGVzW3RoaXMuYW5nbGVzLmxlbmd0aCAtIDFdID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV0uYW5nbGVUbyhwcmlvclRvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlckFuZ2xlKHAsIGZyb20gPT0gbnVsbCA/IG51bGwgOiBmcm9tLmFuZ2xlVG8ocCkpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlckFuZ2xlID0gZnVuY3Rpb24gKHAsIGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmdsZXMucHVzaChhKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNYXJrZXJQb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBvaW50cztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWFya2VyQW5nbGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmdsZXNbaV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuZ2xlc1tqXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlc1tpXSA9IHRoaXMuYW5nbGVzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KGQpO1xuXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBwID0gdGhpcy5QYXRoUGFyc2VyO1xuICAgICAgICAgICAgICAgIHBwLnJlc2V0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYmIgPSBuZXcgc3ZnLkJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCFwcC5pc0VuZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBwLm5leHRDb21tYW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocHAuY29tbWFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHBwLmdldEFzQ3VycmVudFBvaW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHAuYWRkTWFya2VyKHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJiLmFkZFBvaW50KHAueCwgcC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLnN0YXJ0ID0gcHAuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIXBwLmlzQ29tbWFuZE9yRW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBwcC5nZXRBc0N1cnJlbnRQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXIocCwgcHAuc3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRQb2ludChwLngsIHAueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmxpbmVUbyhwLngsIHAueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIXBwLmlzQ29tbWFuZE9yRW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBwcC5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHBwLmdldEFzQ3VycmVudFBvaW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlcihwLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmIuYWRkUG9pbnQocC54LCBwLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIGN0eC5saW5lVG8ocC54LCBwLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFwcC5pc0NvbW1hbmRPckVuZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdQID0gbmV3IHN2Zy5Qb2ludCgocHAuaXNSZWxhdGl2ZUNvbW1hbmQoKSA/IHBwLmN1cnJlbnQueCA6IDApICsgcHAuZ2V0U2NhbGFyKCksIHBwLmN1cnJlbnQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlcihuZXdQLCBwcC5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHAuY3VycmVudCA9IG5ld1A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJiLmFkZFBvaW50KHBwLmN1cnJlbnQueCwgcHAuY3VycmVudC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSBjdHgubGluZVRvKHBwLmN1cnJlbnQueCwgcHAuY3VycmVudC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICghcHAuaXNDb21tYW5kT3JFbmQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UCA9IG5ldyBzdmcuUG9pbnQocHAuY3VycmVudC54LCAocHAuaXNSZWxhdGl2ZUNvbW1hbmQoKSA/IHBwLmN1cnJlbnQueSA6IDApICsgcHAuZ2V0U2NhbGFyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXIobmV3UCwgcHAuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmN1cnJlbnQgPSBuZXdQO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRQb2ludChwcC5jdXJyZW50LngsIHBwLmN1cnJlbnQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmxpbmVUbyhwcC5jdXJyZW50LngsIHBwLmN1cnJlbnQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIXBwLmlzQ29tbWFuZE9yRW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnIgPSBwcC5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcDEgPSBwcC5nZXRQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY250cmwgPSBwcC5nZXRBc0NvbnRyb2xQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3AgPSBwcC5nZXRBc0N1cnJlbnRQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXIoY3AsIGNudHJsLCBwMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJiLmFkZEJlemllckN1cnZlKGN1cnIueCwgY3Vyci55LCBwMS54LCBwMS55LCBjbnRybC54LCBjbnRybC55LCBjcC54LCBjcC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBjbnRybC54LCBjbnRybC55LCBjcC54LCBjcC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICghcHAuaXNDb21tYW5kT3JFbmQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyciA9IHBwLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwMSA9IHBwLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY250cmwgPSBwcC5nZXRBc0NvbnRyb2xQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3AgPSBwcC5nZXRBc0N1cnJlbnRQb2ludCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXIoY3AsIGNudHJsLCBwMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJiLmFkZEJlemllckN1cnZlKGN1cnIueCwgY3Vyci55LCBwMS54LCBwMS55LCBjbnRybC54LCBjbnRybC55LCBjcC54LCBjcC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBjbnRybC54LCBjbnRybC55LCBjcC54LCBjcC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICghcHAuaXNDb21tYW5kT3JFbmQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyciA9IHBwLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjbnRybCA9IHBwLmdldEFzQ29udHJvbFBvaW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjcCA9IHBwLmdldEFzQ3VycmVudFBvaW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlcihjcCwgY250cmwsIGNudHJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmIuYWRkUXVhZHJhdGljQ3VydmUoY3Vyci54LCBjdXJyLnksIGNudHJsLngsIGNudHJsLnksIGNwLngsIGNwLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKGNudHJsLngsIGNudHJsLnksIGNwLngsIGNwLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFwcC5pc0NvbW1hbmRPckVuZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyID0gcHAuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNudHJsID0gcHAuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmNvbnRyb2wgPSBjbnRybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNwID0gcHAuZ2V0QXNDdXJyZW50UG9pbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHAuYWRkTWFya2VyKGNwLCBjbnRybCwgY250cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRRdWFkcmF0aWNDdXJ2ZShjdXJyLngsIGN1cnIueSwgY250cmwueCwgY250cmwueSwgY3AueCwgY3AueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LnF1YWRyYXRpY0N1cnZlVG8oY250cmwueCwgY250cmwueSwgY3AueCwgY3AueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIXBwLmlzQ29tbWFuZE9yRW5kKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnIgPSBwcC5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnggPSBwcC5nZXRTY2FsYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJ5ID0gcHAuZ2V0U2NhbGFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4QXhpc1JvdGF0aW9uID0gcHAuZ2V0U2NhbGFyKCkgKiAoTWF0aC5QSSAvIDE4MC4wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhcmdlQXJjRmxhZyA9IHBwLmdldFNjYWxhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3dlZXBGbGFnID0gcHAuZ2V0U2NhbGFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjcCA9IHBwLmdldEFzQ3VycmVudFBvaW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVyc2lvbiBmcm9tIGVuZHBvaW50IHRvIGNlbnRlciBwYXJhbWV0ZXJpemF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ltcGxub3RlLmh0bWwjQXJjSW1wbGVtZW50YXRpb25Ob3Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB4MScsIHkxJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycnAgPSBuZXcgc3ZnLlBvaW50KE1hdGguY29zKHhBeGlzUm90YXRpb24pICogKGN1cnIueCAtIGNwLngpIC8gMi4wICsgTWF0aC5zaW4oeEF4aXNSb3RhdGlvbikgKiAoY3Vyci55IC0gY3AueSkgLyAyLjAsIC1NYXRoLnNpbih4QXhpc1JvdGF0aW9uKSAqIChjdXJyLnggLSBjcC54KSAvIDIuMCArIE1hdGguY29zKHhBeGlzUm90YXRpb24pICogKGN1cnIueSAtIGNwLnkpIC8gMi4wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRqdXN0IHJhZGlpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gTWF0aC5wb3coY3VycnAueCwgMikgLyBNYXRoLnBvdyhyeCwgMikgKyBNYXRoLnBvdyhjdXJycC55LCAyKSAvIE1hdGgucG93KHJ5LCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeCAqPSBNYXRoLnNxcnQobCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeSAqPSBNYXRoLnNxcnQobCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3gnLCBjeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSAobGFyZ2VBcmNGbGFnID09IHN3ZWVwRmxhZyA/IC0xIDogMSkgKiBNYXRoLnNxcnQoKE1hdGgucG93KHJ4LCAyKSAqIE1hdGgucG93KHJ5LCAyKSAtIE1hdGgucG93KHJ4LCAyKSAqIE1hdGgucG93KGN1cnJwLnksIDIpIC0gTWF0aC5wb3cocnksIDIpICogTWF0aC5wb3coY3VycnAueCwgMikpIC8gKE1hdGgucG93KHJ4LCAyKSAqIE1hdGgucG93KGN1cnJwLnksIDIpICsgTWF0aC5wb3cocnksIDIpICogTWF0aC5wb3coY3VycnAueCwgMikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHMpKSBzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNwcCA9IG5ldyBzdmcuUG9pbnQocyAqIHJ4ICogY3VycnAueSAvIHJ5LCBzICogLXJ5ICogY3VycnAueCAvIHJ4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3gsIGN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjZW50cCA9IG5ldyBzdmcuUG9pbnQoKGN1cnIueCArIGNwLngpIC8gMi4wICsgTWF0aC5jb3MoeEF4aXNSb3RhdGlvbikgKiBjcHAueCAtIE1hdGguc2luKHhBeGlzUm90YXRpb24pICogY3BwLnksIChjdXJyLnkgKyBjcC55KSAvIDIuMCArIE1hdGguc2luKHhBeGlzUm90YXRpb24pICogY3BwLnggKyBNYXRoLmNvcyh4QXhpc1JvdGF0aW9uKSAqIGNwcC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVjdG9yIG1hZ25pdHVkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGZ1bmN0aW9uIG0odikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh2WzBdLCAyKSArIE1hdGgucG93KHZbMV0sIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmF0aW8gYmV0d2VlbiB0d28gdmVjdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGZ1bmN0aW9uIHIodSwgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh1WzBdICogdlswXSArIHVbMV0gKiB2WzFdKSAvIChtKHUpICogbSh2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZ2xlIGJldHdlZW4gdHdvIHZlY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBmdW5jdGlvbiBhKHUsIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodVswXSAqIHZbMV0gPCB1WzFdICogdlswXSA/IC0xIDogMSkgKiBNYXRoLmFjb3Mocih1LCB2KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluaXRpYWwgYW5nbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGExID0gYShbMSwgMF0sIFsoY3VycnAueCAtIGNwcC54KSAvIHJ4LCAoY3VycnAueSAtIGNwcC55KSAvIHJ5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZ2xlIGRlbHRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1ID0gWyhjdXJycC54IC0gY3BwLngpIC8gcngsIChjdXJycC55IC0gY3BwLnkpIC8gcnldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IFsoLWN1cnJwLnggLSBjcHAueCkgLyByeCwgKC1jdXJycC55IC0gY3BwLnkpIC8gcnldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWQgPSBhKHUsIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocih1LCB2KSA8PSAtMSkgYWQgPSBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocih1LCB2KSA+PSAxKSBhZCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIG1hcmtlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpciA9IDEgLSBzd2VlcEZsYWcgPyAxLjAgOiAtMS4wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWggPSBhMSArIGRpciAqIChhZCAvIDIuMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYWxmV2F5ID0gbmV3IHN2Zy5Qb2ludChjZW50cC54ICsgcnggKiBNYXRoLmNvcyhhaCksIGNlbnRwLnkgKyByeSAqIE1hdGguc2luKGFoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlckFuZ2xlKGhhbGZXYXksIGFoIC0gZGlyICogTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXJBbmdsZShjcCwgYWggLSBkaXIgKiBNYXRoLlBJKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRQb2ludChjcC54LCBjcC55KTsgLy8gVE9ETzogdGhpcyBpcyB0b28gbmFpdmUsIG1ha2UgaXQgYmV0dGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSByeCA+IHJ5ID8gcnggOiByeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzeCA9IHJ4ID4gcnkgPyAxIDogcnggLyByeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzeSA9IHJ4ID4gcnkgPyByeSAvIHJ4IDogMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjZW50cC54LCBjZW50cC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoeEF4aXNSb3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUoc3gsIHN5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoMCwgMCwgciwgYTEsIGExICsgYWQsIDEgLSBzd2VlcEZsYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNjYWxlKDEgLyBzeCwgMSAvIHN5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoLXhBeGlzUm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtY2VudHAueCwgLWNlbnRwLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5jdXJyZW50ID0gcHAuc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYmI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmdldE1hcmtlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50cyA9IHRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJQb2ludHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgYW5nbGVzID0gdGhpcy5QYXRoUGFyc2VyLmdldE1hcmtlckFuZ2xlcygpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzLnB1c2goW3BvaW50c1tpXSwgYW5nbGVzW2ldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXJrZXJzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQucGF0aC5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gcGF0dGVybiBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LnBhdHRlcm4gPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGF0dGVybiA9IGZ1bmN0aW9uIChjdHgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmF0dHJpYnV0ZSgnd2lkdGgnKS50b1BpeGVscygneCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmF0dHJpYnV0ZSgnaGVpZ2h0JykudG9QaXhlbHMoJ3knLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBtZSB1c2luZyBhIHRlbXBvcmFyeSBzdmcgZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciB0ZW1wU3ZnID0gbmV3IHN2Zy5FbGVtZW50LnN2ZygpO1xuICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1sndmlld0JveCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgndmlld0JveCcsIHRoaXMuYXR0cmlidXRlKCd2aWV3Qm94JykudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1snd2lkdGgnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ2hlaWdodCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzWyd0cmFuc2Zvcm0nXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3RyYW5zZm9ybScsIHRoaXMuYXR0cmlidXRlKCdwYXR0ZXJuVHJhbnNmb3JtJykudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRlbXBTdmcuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICBjLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIGNjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd4JykuaGFzVmFsdWUoKSAmJiB0aGlzLmF0dHJpYnV0ZSgneScpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2N0eC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoJ3gnKS50b1BpeGVscygneCcsIHRydWUpLCB0aGlzLmF0dHJpYnV0ZSgneScpLnRvUGl4ZWxzKCd5JywgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgM3gzIGdyaWQgc28gd2hlbiB3ZSB0cmFuc2Zvcm0gdGhlcmUncyBubyB3aGl0ZSBzcGFjZSBvbiBlZGdlc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAtMTsgeCA8PSAxOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IC0xOyB5IDw9IDE7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2N0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3gnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3gnLCB4ICogYy53aWR0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3knXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3knLCB5ICogYy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5yZW5kZXIoY2N0eCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGF0dGVybiA9IGN0eC5jcmVhdGVQYXR0ZXJuKGMsICdyZXBlYXQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LnBhdHRlcm4ucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gbWFya2VyIGVsZW1lbnRcbiAgICAgICAgc3ZnLkVsZW1lbnQubWFya2VyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLmJhc2VSZW5kZXIgPSB0aGlzLnJlbmRlcjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGN0eCwgcG9pbnQsIGFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ29yaWVudCcpLnZhbHVlT3JEZWZhdWx0KCdhdXRvJykgPT0gJ2F1dG8nKSBjdHgucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ21hcmtlclVuaXRzJykudmFsdWVPckRlZmF1bHQoJ3N0cm9rZVdpZHRoJykgPT0gJ3N0cm9rZVdpZHRoJykgY3R4LnNjYWxlKGN0eC5saW5lV2lkdGgsIGN0eC5saW5lV2lkdGgpO1xuICAgICAgICAgICAgICAgIGN0eC5zYXZlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgbWUgdXNpbmcgYSB0ZW1wb3Jhcnkgc3ZnIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFN2ZyA9IG5ldyBzdmcuRWxlbWVudC5zdmcoKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3ZpZXdCb3gnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3ZpZXdCb3gnLCB0aGlzLmF0dHJpYnV0ZSgndmlld0JveCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3JlZlgnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3JlZlgnLCB0aGlzLmF0dHJpYnV0ZSgncmVmWCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3JlZlknXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3JlZlknLCB0aGlzLmF0dHJpYnV0ZSgncmVmWScpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3dpZHRoJ10gPSBuZXcgc3ZnLlByb3BlcnR5KCd3aWR0aCcsIHRoaXMuYXR0cmlidXRlKCdtYXJrZXJXaWR0aCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ2hlaWdodCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnaGVpZ2h0JywgdGhpcy5hdHRyaWJ1dGUoJ21hcmtlckhlaWdodCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ2ZpbGwnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ2ZpbGwnLCB0aGlzLmF0dHJpYnV0ZSgnZmlsbCcpLnZhbHVlT3JEZWZhdWx0KCdibGFjaycpKTtcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3N0cm9rZSddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnc3Ryb2tlJywgdGhpcy5hdHRyaWJ1dGUoJ3N0cm9rZScpLnZhbHVlT3JEZWZhdWx0KCdub25lJykpO1xuICAgICAgICAgICAgICAgIHRlbXBTdmcuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIHRlbXBTdmcucmVuZGVyKGN0eCk7XG5cbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnbWFya2VyVW5pdHMnKS52YWx1ZU9yRGVmYXVsdCgnc3Ryb2tlV2lkdGgnKSA9PSAnc3Ryb2tlV2lkdGgnKSBjdHguc2NhbGUoMSAvIGN0eC5saW5lV2lkdGgsIDEgLyBjdHgubGluZVdpZHRoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ29yaWVudCcpLnZhbHVlT3JEZWZhdWx0KCdhdXRvJykgPT0gJ2F1dG8nKSBjdHgucm90YXRlKC1hbmdsZSk7XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtcG9pbnQueCwgLXBvaW50LnkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQubWFya2VyLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIGRlZmluaXRpb25zIGVsZW1lbnRcbiAgICAgICAgc3ZnLkVsZW1lbnQuZGVmcyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgLy8gTk9PUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuZGVmcy5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyBiYXNlIGZvciBncmFkaWVudHNcbiAgICAgICAgc3ZnLkVsZW1lbnQuR3JhZGllbnRCYXNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3BzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09ICdzdG9wJykgdGhpcy5zdG9wcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nZXRHcmFkaWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBPVkVSUklERSBNRSFcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZ3JhZGllbnRVbml0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGUoJ2dyYWRpZW50VW5pdHMnKS52YWx1ZU9yRGVmYXVsdCgnb2JqZWN0Qm91bmRpbmdCb3gnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdCA9IFsnZ3JhZGllbnRVbml0cyddO1xuXG4gICAgICAgICAgICB0aGlzLmluaGVyaXRTdG9wQ29udGFpbmVyID0gZnVuY3Rpb24gKHN0b3BzQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZVRvSW5oZXJpdCA9IHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZShhdHRyaWJ1dGVUb0luaGVyaXQpLmhhc1ZhbHVlKCkgJiYgc3RvcHNDb250YWluZXIuYXR0cmlidXRlKGF0dHJpYnV0ZVRvSW5oZXJpdCkuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUoYXR0cmlidXRlVG9Jbmhlcml0LCB0cnVlKS52YWx1ZSA9IHN0b3BzQ29udGFpbmVyLmF0dHJpYnV0ZShhdHRyaWJ1dGVUb0luaGVyaXQpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVHcmFkaWVudCA9IGZ1bmN0aW9uIChjdHgsIGVsZW1lbnQsIHBhcmVudE9wYWNpdHlQcm9wKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3BzQ29udGFpbmVyID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9wc0NvbnRhaW5lciA9IHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lcihzdG9wc0NvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGFkZFBhcmVudE9wYWNpdHkgPSBmdW5jdGlvbiBhZGRQYXJlbnRPcGFjaXR5KGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRPcGFjaXR5UHJvcC5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG5ldyBzdmcuUHJvcGVydHkoJ2NvbG9yJywgY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuYWRkT3BhY2l0eShwYXJlbnRPcGFjaXR5UHJvcCkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB2YXIgZyA9IHRoaXMuZ2V0R3JhZGllbnQoY3R4LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZyA9PSBudWxsKSByZXR1cm4gYWRkUGFyZW50T3BhY2l0eShzdG9wc0NvbnRhaW5lci5zdG9wc1tzdG9wc0NvbnRhaW5lci5zdG9wcy5sZW5ndGggLSAxXS5jb2xvcik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdG9wc0NvbnRhaW5lci5zdG9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBnLmFkZENvbG9yU3RvcChzdG9wc0NvbnRhaW5lci5zdG9wc1tpXS5vZmZzZXQsIGFkZFBhcmVudE9wYWNpdHkoc3RvcHNDb250YWluZXIuc3RvcHNbaV0uY29sb3IpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ2dyYWRpZW50VHJhbnNmb3JtJykuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgYXMgdHJhbnNmb3JtZWQgcGF0dGVybiBvbiB0ZW1wb3JhcnkgY2FudmFzXG4gICAgICAgICAgICAgICAgICAgIHZhciByb290VmlldyA9IHN2Zy5WaWV3UG9ydC52aWV3UG9ydHNbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBuZXcgc3ZnLkVsZW1lbnQucmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICByZWN0LmF0dHJpYnV0ZXNbJ3gnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3gnLCAtc3ZnLk1BWF9WSVJUVUFMX1BJWEVMUyAvIDMuMCk7XG4gICAgICAgICAgICAgICAgICAgIHJlY3QuYXR0cmlidXRlc1sneSddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgneScsIC1zdmcuTUFYX1ZJUlRVQUxfUElYRUxTIC8gMy4wKTtcbiAgICAgICAgICAgICAgICAgICAgcmVjdC5hdHRyaWJ1dGVzWyd3aWR0aCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnd2lkdGgnLCBzdmcuTUFYX1ZJUlRVQUxfUElYRUxTKTtcbiAgICAgICAgICAgICAgICAgICAgcmVjdC5hdHRyaWJ1dGVzWydoZWlnaHQnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ2hlaWdodCcsIHN2Zy5NQVhfVklSVFVBTF9QSVhFTFMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBncm91cCA9IG5ldyBzdmcuRWxlbWVudC5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmF0dHJpYnV0ZXNbJ3RyYW5zZm9ybSddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgndHJhbnNmb3JtJywgdGhpcy5hdHRyaWJ1dGUoJ2dyYWRpZW50VHJhbnNmb3JtJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBncm91cC5jaGlsZHJlbiA9IFtyZWN0XTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFN2ZyA9IG5ldyBzdmcuRWxlbWVudC5zdmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzWyd4J10gPSBuZXcgc3ZnLlByb3BlcnR5KCd4JywgMCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1sneSddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgneScsIDApO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3dpZHRoJ10gPSBuZXcgc3ZnLlByb3BlcnR5KCd3aWR0aCcsIHJvb3RWaWV3LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzWydoZWlnaHQnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ2hlaWdodCcsIHJvb3RWaWV3LmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuY2hpbGRyZW4gPSBbZ3JvdXBdO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgICAgIGMud2lkdGggPSByb290Vmlldy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYy5oZWlnaHQgPSByb290Vmlldy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wQ3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcucmVuZGVyKHRlbXBDdHgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVtcEN0eC5jcmVhdGVQYXR0ZXJuKGMsICduby1yZXBlYXQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LkdyYWRpZW50QmFzZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyBsaW5lYXIgZ3JhZGllbnQgZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5saW5lYXJHcmFkaWVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5HcmFkaWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCd4MScpO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goJ3kxJyk7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaCgneDInKTtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCd5MicpO1xuXG4gICAgICAgICAgICB0aGlzLmdldEdyYWRpZW50ID0gZnVuY3Rpb24gKGN0eCwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBiYiA9IHRoaXMuZ3JhZGllbnRVbml0cygpID09ICdvYmplY3RCb3VuZGluZ0JveCcgPyBlbGVtZW50LmdldEJvdW5kaW5nQm94KCkgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZSgneDEnKS5oYXNWYWx1ZSgpICYmICF0aGlzLmF0dHJpYnV0ZSgneTEnKS5oYXNWYWx1ZSgpICYmICF0aGlzLmF0dHJpYnV0ZSgneDInKS5oYXNWYWx1ZSgpICYmICF0aGlzLmF0dHJpYnV0ZSgneTInKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlKCd4MScsIHRydWUpLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUoJ3kxJywgdHJ1ZSkudmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZSgneDInLCB0cnVlKS52YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlKCd5MicsIHRydWUpLnZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgeDEgPSB0aGlzLmdyYWRpZW50VW5pdHMoKSA9PSAnb2JqZWN0Qm91bmRpbmdCb3gnID8gYmIueCgpICsgYmIud2lkdGgoKSAqIHRoaXMuYXR0cmlidXRlKCd4MScpLm51bVZhbHVlKCkgOiB0aGlzLmF0dHJpYnV0ZSgneDEnKS50b1BpeGVscygneCcpO1xuICAgICAgICAgICAgICAgIHZhciB5MSA9IHRoaXMuZ3JhZGllbnRVbml0cygpID09ICdvYmplY3RCb3VuZGluZ0JveCcgPyBiYi55KCkgKyBiYi5oZWlnaHQoKSAqIHRoaXMuYXR0cmlidXRlKCd5MScpLm51bVZhbHVlKCkgOiB0aGlzLmF0dHJpYnV0ZSgneTEnKS50b1BpeGVscygneScpO1xuICAgICAgICAgICAgICAgIHZhciB4MiA9IHRoaXMuZ3JhZGllbnRVbml0cygpID09ICdvYmplY3RCb3VuZGluZ0JveCcgPyBiYi54KCkgKyBiYi53aWR0aCgpICogdGhpcy5hdHRyaWJ1dGUoJ3gyJykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCd4MicpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHkyID0gdGhpcy5ncmFkaWVudFVuaXRzKCkgPT0gJ29iamVjdEJvdW5kaW5nQm94JyA/IGJiLnkoKSArIGJiLmhlaWdodCgpICogdGhpcy5hdHRyaWJ1dGUoJ3kyJykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCd5MicpLnRvUGl4ZWxzKCd5Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoeDEgPT0geDIgJiYgeTEgPT0geTIpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybiBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeDEsIHkxLCB4MiwgeTIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQubGluZWFyR3JhZGllbnQucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkdyYWRpZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIHJhZGlhbCBncmFkaWVudCBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LnJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkdyYWRpZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goJ2N4Jyk7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaCgnY3knKTtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCdyJyk7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaCgnZngnKTtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCdmeScpO1xuXG4gICAgICAgICAgICB0aGlzLmdldEdyYWRpZW50ID0gZnVuY3Rpb24gKGN0eCwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBiYiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdCb3goKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGUoJ2N4JykuaGFzVmFsdWUoKSkgdGhpcy5hdHRyaWJ1dGUoJ2N4JywgdHJ1ZSkudmFsdWUgPSAnNTAlJztcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXR0cmlidXRlKCdjeScpLmhhc1ZhbHVlKCkpIHRoaXMuYXR0cmlidXRlKCdjeScsIHRydWUpLnZhbHVlID0gJzUwJSc7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZSgncicpLmhhc1ZhbHVlKCkpIHRoaXMuYXR0cmlidXRlKCdyJywgdHJ1ZSkudmFsdWUgPSAnNTAlJztcblxuICAgICAgICAgICAgICAgIHZhciBjeCA9IHRoaXMuZ3JhZGllbnRVbml0cygpID09ICdvYmplY3RCb3VuZGluZ0JveCcgPyBiYi54KCkgKyBiYi53aWR0aCgpICogdGhpcy5hdHRyaWJ1dGUoJ2N4JykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCdjeCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGN5ID0gdGhpcy5ncmFkaWVudFVuaXRzKCkgPT0gJ29iamVjdEJvdW5kaW5nQm94JyA/IGJiLnkoKSArIGJiLmhlaWdodCgpICogdGhpcy5hdHRyaWJ1dGUoJ2N5JykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCdjeScpLnRvUGl4ZWxzKCd5Jyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZnggPSBjeDtcbiAgICAgICAgICAgICAgICB2YXIgZnkgPSBjeTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ2Z4JykuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBmeCA9IHRoaXMuZ3JhZGllbnRVbml0cygpID09ICdvYmplY3RCb3VuZGluZ0JveCcgPyBiYi54KCkgKyBiYi53aWR0aCgpICogdGhpcy5hdHRyaWJ1dGUoJ2Z4JykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCdmeCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnZnknKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ5ID0gdGhpcy5ncmFkaWVudFVuaXRzKCkgPT0gJ29iamVjdEJvdW5kaW5nQm94JyA/IGJiLnkoKSArIGJiLmhlaWdodCgpICogdGhpcy5hdHRyaWJ1dGUoJ2Z5JykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCdmeScpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdyYWRpZW50VW5pdHMoKSA9PSAnb2JqZWN0Qm91bmRpbmdCb3gnID8gKGJiLndpZHRoKCkgKyBiYi5oZWlnaHQoKSkgLyAyLjAgKiB0aGlzLmF0dHJpYnV0ZSgncicpLm51bVZhbHVlKCkgOiB0aGlzLmF0dHJpYnV0ZSgncicpLnRvUGl4ZWxzKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGZ4LCBmeSwgMCwgY3gsIGN5LCByKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LnJhZGlhbEdyYWRpZW50LnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5HcmFkaWVudEJhc2UoKTtcblxuICAgICAgICAvLyBncmFkaWVudCBzdG9wIGVsZW1lbnRcbiAgICAgICAgc3ZnLkVsZW1lbnQuc3RvcCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmF0dHJpYnV0ZSgnb2Zmc2V0JykubnVtVmFsdWUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldCA8IDApIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldCA+IDEpIHRoaXMub2Zmc2V0ID0gMTtcblxuICAgICAgICAgICAgdmFyIHN0b3BDb2xvciA9IHRoaXMuc3R5bGUoJ3N0b3AtY29sb3InLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChzdG9wQ29sb3IudmFsdWUgPT09ICcnKSBzdG9wQ29sb3IudmFsdWUgPSAnIzAwMCc7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnc3RvcC1vcGFjaXR5JykuaGFzVmFsdWUoKSkgc3RvcENvbG9yID0gc3RvcENvbG9yLmFkZE9wYWNpdHkodGhpcy5zdHlsZSgnc3RvcC1vcGFjaXR5JykpO1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IHN0b3BDb2xvci52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuc3RvcC5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyBhbmltYXRpb24gYmFzZSBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LkFuaW1hdGVCYXNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICBzdmcuQW5pbWF0aW9ucy5wdXNoKHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4wO1xuICAgICAgICAgICAgdGhpcy5iZWdpbiA9IHRoaXMuYXR0cmlidXRlKCdiZWdpbicpLnRvTWlsbGlzZWNvbmRzKCk7XG4gICAgICAgICAgICB0aGlzLm1heER1cmF0aW9uID0gdGhpcy5iZWdpbiArIHRoaXMuYXR0cmlidXRlKCdkdXInKS50b01pbGxpc2Vjb25kcygpO1xuXG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVUeXBlID0gdGhpcy5hdHRyaWJ1dGUoJ2F0dHJpYnV0ZVR5cGUnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHRoaXMuYXR0cmlidXRlKCdhdHRyaWJ1dGVOYW1lJykudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlVHlwZSA9PSAnQ1NTJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuc3R5bGUoYXR0cmlidXRlTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5hdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxVbml0cyA9ICcnO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsY1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIE9WRVJSSURFIE1FIVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IGluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsVW5pdHMgPSB0aGlzLmdldFByb3BlcnR5KCkuZ2V0VW5pdHMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSdyZSBwYXN0IHRoZSBlbmQgdGltZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gdGhpcy5tYXhEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIGZvciBpbmRlZmluaXRlbHkgcmVwZWF0aW5nIGFuaW1hdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdyZXBlYXRDb3VudCcpLnZhbHVlID09ICdpbmRlZmluaXRlJyB8fCB0aGlzLmF0dHJpYnV0ZSgncmVwZWF0RHVyJykudmFsdWUgPT0gJ2luZGVmaW5pdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0cmlidXRlKCdmaWxsJykudmFsdWVPckRlZmF1bHQoJ3JlbW92ZScpID09ICdmcmVlemUnICYmICF0aGlzLmZyb3plbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlID0gdGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXR0cmlidXRlKCdmaWxsJykudmFsdWVPckRlZmF1bHQoJ3JlbW92ZScpID09ICdyZW1vdmUnICYmICF0aGlzLnJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KCkudmFsdWUgPSB0aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW4gPyB0aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW5WYWx1ZSA6IHRoaXMuaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbiArIGRlbHRhO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UncmUgcGFzdCB0aGUgYmVnaW4gdGltZVxuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmVnaW4gPCB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY2FsY1ZhbHVlKCk7IC8vIHR3ZWVuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd0eXBlJykuaGFzVmFsdWUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIHRyYW5zZm9ybSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmF0dHJpYnV0ZSgndHlwZScpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0eXBlICsgJygnICsgbmV3VmFsdWUgKyAnKSc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5KCkudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmZyb20gPSB0aGlzLmF0dHJpYnV0ZSgnZnJvbScpO1xuICAgICAgICAgICAgdGhpcy50byA9IHRoaXMuYXR0cmlidXRlKCd0bycpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZSgndmFsdWVzJyk7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzVmFsdWUoKSkgdGhpcy52YWx1ZXMudmFsdWUgPSB0aGlzLnZhbHVlcy52YWx1ZS5zcGxpdCgnOycpO1xuXG4gICAgICAgICAgICAvLyBmcmFjdGlvbiBvZiBkdXJhdGlvbiB3ZSd2ZSBjb3ZlcmVkXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzOiAodGhpcy5kdXJhdGlvbiAtIHRoaXMuYmVnaW4pIC8gKHRoaXMubWF4RHVyYXRpb24gLSB0aGlzLmJlZ2luKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSByZXQucHJvZ3Jlc3MgKiAodGhpcy52YWx1ZXMudmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYiA9IE1hdGguZmxvb3IocCksXG4gICAgICAgICAgICAgICAgICAgICAgICB1YiA9IE1hdGguY2VpbChwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0LmZyb20gPSBuZXcgc3ZnLlByb3BlcnR5KCdmcm9tJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVtsYl0pKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRvID0gbmV3IHN2Zy5Qcm9wZXJ0eSgndG8nLCBwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW3ViXSkpO1xuICAgICAgICAgICAgICAgICAgICByZXQucHJvZ3Jlc3MgPSAocCAtIGxiKSAvICh1YiAtIGxiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQuZnJvbSA9IHRoaXMuZnJvbTtcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRvID0gdGhpcy50bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LkFuaW1hdGVCYXNlLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIGFuaW1hdGUgZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5hbmltYXRlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkFuaW1hdGVCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMucHJvZ3Jlc3MoKTtcblxuICAgICAgICAgICAgICAgIC8vIHR3ZWVuIHZhbHVlIGxpbmVhcmx5XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gcC5mcm9tLm51bVZhbHVlKCkgKyAocC50by5udW1WYWx1ZSgpIC0gcC5mcm9tLm51bVZhbHVlKCkpICogcC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsdWUgKyB0aGlzLmluaXRpYWxVbml0cztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmFuaW1hdGUucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkFuaW1hdGVCYXNlKCk7XG5cbiAgICAgICAgLy8gYW5pbWF0ZSBjb2xvciBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LmFuaW1hdGVDb2xvciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5BbmltYXRlQmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5jYWxjVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSB0aGlzLnByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGZyb20gPSBuZXcgUkdCQ29sb3IocC5mcm9tLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgdG8gPSBuZXcgUkdCQ29sb3IocC50by52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZnJvbS5vayAmJiB0by5vaykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0d2VlbiBjb2xvciBsaW5lYXJseVxuICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGZyb20uciArICh0by5yIC0gZnJvbS5yKSAqIHAucHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgICAgIHZhciBnID0gZnJvbS5nICsgKHRvLmcgLSBmcm9tLmcpICogcC5wcm9ncmVzcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBmcm9tLmIgKyAodG8uYiAtIGZyb20uYikgKiBwLnByb2dyZXNzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3JnYignICsgcGFyc2VJbnQociwgMTApICsgJywnICsgcGFyc2VJbnQoZywgMTApICsgJywnICsgcGFyc2VJbnQoYiwgMTApICsgJyknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGUoJ2Zyb20nKS52YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmFuaW1hdGVDb2xvci5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuQW5pbWF0ZUJhc2UoKTtcblxuICAgICAgICAvLyBhbmltYXRlIHRyYW5zZm9ybSBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm0gPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuQW5pbWF0ZUJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsY1ZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gdGhpcy5wcm9ncmVzcygpO1xuXG4gICAgICAgICAgICAgICAgLy8gdHdlZW4gdmFsdWUgbGluZWFybHlcbiAgICAgICAgICAgICAgICB2YXIgZnJvbSA9IHN2Zy5Ub051bWJlckFycmF5KHAuZnJvbS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHRvID0gc3ZnLlRvTnVtYmVyQXJyYXkocC50by52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmcm9tLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IGZyb21baV0gKyAodG9baV0gLSBmcm9tW2ldKSAqIHAucHJvZ3Jlc3MgKyAnICc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm0ucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LmFuaW1hdGUoKTtcblxuICAgICAgICAvLyBmb250IGVsZW1lbnRcbiAgICAgICAgc3ZnLkVsZW1lbnQuZm9udCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5ob3JpekFkdlggPSB0aGlzLmF0dHJpYnV0ZSgnaG9yaXotYWR2LXgnKS5udW1WYWx1ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmlzUlRMID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzQXJhYmljID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZvbnRGYWNlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubWlzc2luZ0dseXBoID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ2x5cGhzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09ICdmb250LWZhY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9udEZhY2UgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnN0eWxlKCdmb250LWZhbWlseScpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5EZWZpbml0aW9uc1tjaGlsZC5zdHlsZSgnZm9udC1mYW1pbHknKS52YWx1ZV0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC50eXBlID09ICdtaXNzaW5nLWdseXBoJykgdGhpcy5taXNzaW5nR2x5cGggPSBjaGlsZDtlbHNlIGlmIChjaGlsZC50eXBlID09ICdnbHlwaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFyYWJpY0Zvcm0gIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSVEwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FyYWJpYyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2x5cGhzW2NoaWxkLnVuaWNvZGVdID09ICd1bmRlZmluZWQnKSB0aGlzLmdseXBoc1tjaGlsZC51bmljb2RlXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nbHlwaHNbY2hpbGQudW5pY29kZV1bY2hpbGQuYXJhYmljRm9ybV0gPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2x5cGhzW2NoaWxkLnVuaWNvZGVdID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmZvbnQucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gZm9udC1mYWNlIGVsZW1lbnRcbiAgICAgICAgc3ZnLkVsZW1lbnQuZm9udGZhY2UgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXNjZW50ID0gdGhpcy5hdHRyaWJ1dGUoJ2FzY2VudCcpLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5kZXNjZW50ID0gdGhpcy5hdHRyaWJ1dGUoJ2Rlc2NlbnQnKS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudW5pdHNQZXJFbSA9IHRoaXMuYXR0cmlidXRlKCd1bml0cy1wZXItZW0nKS5udW1WYWx1ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBzdmcuRWxlbWVudC5mb250ZmFjZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyBtaXNzaW5nLWdseXBoIGVsZW1lbnRcbiAgICAgICAgc3ZnLkVsZW1lbnQubWlzc2luZ2dseXBoID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LnBhdGg7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuaG9yaXpBZHZYID0gMDtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQubWlzc2luZ2dseXBoLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5wYXRoKCk7XG5cbiAgICAgICAgLy8gZ2x5cGggZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5nbHlwaCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5wYXRoO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLmhvcml6QWR2WCA9IHRoaXMuYXR0cmlidXRlKCdob3Jpei1hZHYteCcpLm51bVZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLnVuaWNvZGUgPSB0aGlzLmF0dHJpYnV0ZSgndW5pY29kZScpLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5hcmFiaWNGb3JtID0gdGhpcy5hdHRyaWJ1dGUoJ2FyYWJpYy1mb3JtJykudmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmdseXBoLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5wYXRoKCk7XG5cbiAgICAgICAgLy8gdGV4dCBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LnRleHQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5jYXB0dXJlVGV4dE5vZGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYmFzZVNldENvbnRleHQgPSB0aGlzLnNldENvbnRleHQ7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlU2V0Q29udGV4dChjdHgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRleHRCYXNlbGluZSA9IHRoaXMuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJykudG9UZXh0QmFzZWxpbmUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGV4dEJhc2VsaW5lID09IG51bGwpIHRleHRCYXNlbGluZSA9IHRoaXMuc3R5bGUoJ2FsaWdubWVudC1iYXNlbGluZScpLnRvVGV4dEJhc2VsaW5lKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRleHRCYXNlbGluZSAhPSBudWxsKSBjdHgudGV4dEJhc2VsaW5lID0gdGV4dEJhc2VsaW5lO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5nZXRCb3VuZGluZ0JveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuYXR0cmlidXRlKCd4JykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMuYXR0cmlidXRlKCd5JykudG9QaXhlbHMoJ3knKTtcbiAgICAgICAgICAgICAgICB2YXIgZm9udFNpemUgPSB0aGlzLnBhcmVudC5zdHlsZSgnZm9udC1zaXplJykubnVtVmFsdWVPckRlZmF1bHQoc3ZnLkZvbnQuUGFyc2Uoc3ZnLmN0eC5mb250KS5mb250U2l6ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuQm91bmRpbmdCb3goeCwgeSAtIGZvbnRTaXplLCB4ICsgTWF0aC5mbG9vcihmb250U2l6ZSAqIDIuMCAvIDMuMCkgKiB0aGlzLmNoaWxkcmVuWzBdLmdldFRleHQoKS5sZW5ndGgsIHkpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLmF0dHJpYnV0ZSgneCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5hdHRyaWJ1dGUoJ3knKS50b1BpeGVscygneScpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnZHgnKS5oYXNWYWx1ZSgpKSB0aGlzLnggKz0gdGhpcy5hdHRyaWJ1dGUoJ2R4JykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ2R5JykuaGFzVmFsdWUoKSkgdGhpcy55ICs9IHRoaXMuYXR0cmlidXRlKCdkeScpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuZ2V0QW5jaG9yRGVsdGEoY3R4LCB0aGlzLCAwKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZChjdHgsIHRoaXMsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0QW5jaG9yRGVsdGEgPSBmdW5jdGlvbiAoY3R4LCBwYXJlbnQsIHN0YXJ0SSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0QW5jaG9yID0gdGhpcy5zdHlsZSgndGV4dC1hbmNob3InKS52YWx1ZU9yRGVmYXVsdCgnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICBpZiAodGV4dEFuY2hvciAhPSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEk7IGkgPCBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gc3RhcnRJICYmIGNoaWxkLmF0dHJpYnV0ZSgneCcpLmhhc1ZhbHVlKCkpIGJyZWFrOyAvLyBuZXcgZ3JvdXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICs9IGNoaWxkLm1lYXN1cmVUZXh0UmVjdXJzaXZlKGN0eCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICogKHRleHRBbmNob3IgPT0gJ2VuZCcgPyB3aWR0aCA6IHdpZHRoIC8gMi4wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNoaWxkID0gZnVuY3Rpb24gKGN0eCwgcGFyZW50LCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gcGFyZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5hdHRyaWJ1dGUoJ3gnKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnggPSBjaGlsZC5hdHRyaWJ1dGUoJ3gnKS50b1BpeGVscygneCcpICsgcGFyZW50LmdldEFuY2hvckRlbHRhKGN0eCwgcGFyZW50LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmF0dHJpYnV0ZSgnZHgnKS5oYXNWYWx1ZSgpKSBjaGlsZC54ICs9IGNoaWxkLmF0dHJpYnV0ZSgnZHgnKS50b1BpeGVscygneCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5hdHRyaWJ1dGUoJ2R4JykuaGFzVmFsdWUoKSkgcGFyZW50LnggKz0gY2hpbGQuYXR0cmlidXRlKCdkeCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnggPSBwYXJlbnQueDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50LnggPSBjaGlsZC54ICsgY2hpbGQubWVhc3VyZVRleHQoY3R4KTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5hdHRyaWJ1dGUoJ3knKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnkgPSBjaGlsZC5hdHRyaWJ1dGUoJ3knKS50b1BpeGVscygneScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuYXR0cmlidXRlKCdkeScpLmhhc1ZhbHVlKCkpIGNoaWxkLnkgKz0gY2hpbGQuYXR0cmlidXRlKCdkeScpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmF0dHJpYnV0ZSgnZHknKS5oYXNWYWx1ZSgpKSBwYXJlbnQueSArPSBjaGlsZC5hdHRyaWJ1dGUoJ2R5JykudG9QaXhlbHMoJ3knKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQueSA9IHBhcmVudC55O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQueSA9IGNoaWxkLnk7XG5cbiAgICAgICAgICAgICAgICBjaGlsZC5yZW5kZXIoY3R4KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbmRlckNoaWxkKGN0eCwgY2hpbGQsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LnRleHQucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyB0ZXh0IGJhc2VcbiAgICAgICAgc3ZnLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0R2x5cGggPSBmdW5jdGlvbiAoZm9udCwgdGV4dCwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBjID0gdGV4dFtpXTtcbiAgICAgICAgICAgICAgICB2YXIgZ2x5cGggPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChmb250LmlzQXJhYmljKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmFiaWNGb3JtID0gJ2lzb2xhdGVkJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpID09IDAgfHwgdGV4dFtpIC0gMV0gPT0gJyAnKSAmJiBpIDwgdGV4dC5sZW5ndGggLSAyICYmIHRleHRbaSArIDFdICE9ICcgJykgYXJhYmljRm9ybSA9ICd0ZXJtaW5hbCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCAmJiB0ZXh0W2kgLSAxXSAhPSAnICcgJiYgaSA8IHRleHQubGVuZ3RoIC0gMiAmJiB0ZXh0W2kgKyAxXSAhPSAnICcpIGFyYWJpY0Zvcm0gPSAnbWVkaWFsJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIHRleHRbaSAtIDFdICE9ICcgJyAmJiAoaSA9PSB0ZXh0Lmxlbmd0aCAtIDEgfHwgdGV4dFtpICsgMV0gPT0gJyAnKSkgYXJhYmljRm9ybSA9ICdpbml0aWFsJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmb250LmdseXBoc1tjXSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2x5cGggPSBmb250LmdseXBoc1tjXVthcmFiaWNGb3JtXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbHlwaCA9PSBudWxsICYmIGZvbnQuZ2x5cGhzW2NdLnR5cGUgPT0gJ2dseXBoJykgZ2x5cGggPSBmb250LmdseXBoc1tjXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdseXBoID0gZm9udC5nbHlwaHNbY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChnbHlwaCA9PSBudWxsKSBnbHlwaCA9IGZvbnQubWlzc2luZ0dseXBoO1xuICAgICAgICAgICAgICAgIHJldHVybiBnbHlwaDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1c3RvbUZvbnQgPSB0aGlzLnBhcmVudC5zdHlsZSgnZm9udC1mYW1pbHknKS5nZXREZWZpbml0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbUZvbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9udFNpemUgPSB0aGlzLnBhcmVudC5zdHlsZSgnZm9udC1zaXplJykubnVtVmFsdWVPckRlZmF1bHQoc3ZnLkZvbnQuUGFyc2Uoc3ZnLmN0eC5mb250KS5mb250U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmb250U3R5bGUgPSB0aGlzLnBhcmVudC5zdHlsZSgnZm9udC1zdHlsZScpLnZhbHVlT3JEZWZhdWx0KHN2Zy5Gb250LlBhcnNlKHN2Zy5jdHguZm9udCkuZm9udFN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdldFRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbUZvbnQuaXNSVEwpIHRleHQgPSB0ZXh0LnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkeCA9IHN2Zy5Ub051bWJlckFycmF5KHRoaXMucGFyZW50LmF0dHJpYnV0ZSgnZHgnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdseXBoID0gdGhpcy5nZXRHbHlwaChjdXN0b21Gb250LCB0ZXh0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZSA9IGZvbnRTaXplIC8gY3VzdG9tRm9udC5mb250RmFjZS51bml0c1BlckVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUoc2NhbGUsIC1zY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbHcgPSBjdHgubGluZVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGN0eC5saW5lV2lkdGggKiBjdXN0b21Gb250LmZvbnRGYWNlLnVuaXRzUGVyRW0gLyBmb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb250U3R5bGUgPT0gJ2l0YWxpYycpIGN0eC50cmFuc2Zvcm0oMSwgMCwgLjQsIDEsIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2x5cGgucmVuZGVyKGN0eCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9udFN0eWxlID09ICdpdGFsaWMnKSBjdHgudHJhbnNmb3JtKDEsIDAsIC0uNCwgMSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gbHc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUoMSAvIHNjYWxlLCAtMSAvIHNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSBmb250U2l6ZSAqIChnbHlwaC5ob3JpekFkdlggfHwgY3VzdG9tRm9udC5ob3JpekFkdlgpIC8gY3VzdG9tRm9udC5mb250RmFjZS51bml0c1BlckVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkeFtpXSAhPSAndW5kZWZpbmVkJyAmJiAhaXNOYU4oZHhbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IGR4W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY3R4LmZpbGxTdHlsZSAhPSAnJykgY3R4LmZpbGxUZXh0KHN2Zy5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksIHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LnN0cm9rZVN0eWxlICE9ICcnKSBjdHguc3Ryb2tlVGV4dChzdmcuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLCB0aGlzLngsIHRoaXMueSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmdldFRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gT1ZFUlJJREUgTUVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMubWVhc3VyZVRleHRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5tZWFzdXJlVGV4dChjdHgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCArPSB0aGlzLmNoaWxkcmVuW2ldLm1lYXN1cmVUZXh0UmVjdXJzaXZlKGN0eCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMubWVhc3VyZVRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1c3RvbUZvbnQgPSB0aGlzLnBhcmVudC5zdHlsZSgnZm9udC1mYW1pbHknKS5nZXREZWZpbml0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1c3RvbUZvbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9udFNpemUgPSB0aGlzLnBhcmVudC5zdHlsZSgnZm9udC1zaXplJykubnVtVmFsdWVPckRlZmF1bHQoc3ZnLkZvbnQuUGFyc2Uoc3ZnLmN0eC5mb250KS5mb250U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZWFzdXJlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdldFRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbUZvbnQuaXNSVEwpIHRleHQgPSB0ZXh0LnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHggPSBzdmcuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoJ2R4JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnbHlwaCA9IHRoaXMuZ2V0R2x5cGgoY3VzdG9tRm9udCwgdGV4dCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlICs9IChnbHlwaC5ob3JpekFkdlggfHwgY3VzdG9tRm9udC5ob3JpekFkdlgpICogZm9udFNpemUgLyBjdXN0b21Gb250LmZvbnRGYWNlLnVuaXRzUGVyRW07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGR4W2ldICE9ICd1bmRlZmluZWQnICYmICFpc05hTihkeFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlICs9IGR4W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtZWFzdXJlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB0ZXh0VG9NZWFzdXJlID0gc3ZnLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKTtcbiAgICAgICAgICAgICAgICBpZiAoIWN0eC5tZWFzdXJlVGV4dCkgcmV0dXJuIHRleHRUb01lYXN1cmUubGVuZ3RoICogMTA7XG5cbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjdHgpO1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0VG9NZWFzdXJlKS53aWR0aDtcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIHRzcGFuXG4gICAgICAgIHN2Zy5FbGVtZW50LnRzcGFuID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZVRleHROb2RlcyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5UZXh0RWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHN2Zy5jb21wcmVzc1NwYWNlcyhub2RlLnZhbHVlIHx8IG5vZGUudGV4dCB8fCBub2RlLnRleHRDb250ZW50IHx8ICcnKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIG5vZGUgaGFzIGNoaWxkcmVuLCB0aGVuIHRoZXkgb3duIHRoZSB0ZXh0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzdmcuRWxlbWVudC50c3Bhbi5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gdHJlZlxuICAgICAgICBzdmcuRWxlbWVudC50cmVmID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHJldHVybiBlbGVtZW50LmNoaWxkcmVuWzBdLmdldFRleHQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LnRyZWYucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIGEgZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5hID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5oYXNUZXh0ID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgIT0gMykgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMgbWlnaHQgY29udGFpbiB0ZXh0XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmhhc1RleHQgPyBub2RlLmNoaWxkTm9kZXNbMF0udmFsdWUgOiAnJztcbiAgICAgICAgICAgIHRoaXMuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW4gPSB0aGlzLnJlbmRlckNoaWxkcmVuO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhcyB0ZXh0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW4oY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvbnRTaXplID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnZm9udFNpemUnLCBzdmcuRm9udC5QYXJzZShzdmcuY3R4LmZvbnQpLmZvbnRTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgc3ZnLk1vdXNlLmNoZWNrQm91bmRpbmdCb3godGhpcywgbmV3IHN2Zy5Cb3VuZGluZ0JveCh0aGlzLngsIHRoaXMueSAtIGZvbnRTaXplLnRvUGl4ZWxzKCd5JyksIHRoaXMueCArIHRoaXMubWVhc3VyZVRleHQoY3R4KSwgdGhpcy55KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVuZGVyIGFzIHRlbXBvcmFyeSBncm91cFxuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IG5ldyBzdmcuRWxlbWVudC5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGcuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICBnLnBhcmVudCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGcucmVuZGVyKGN0eCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3ZnLmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuYS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gaW1hZ2UgZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5pbWFnZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB2YXIgaHJlZiA9IHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGhyZWYgPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaXNTdmcgPSBocmVmLm1hdGNoKC9cXC5zdmckLyk7XG5cbiAgICAgICAgICAgIHN2Zy5JbWFnZXMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWlzU3ZnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ3VzZUNPUlMnXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1nLmNyb3NzT3JpZ2luID0gJ0Fub255bW91cyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN2Zy5sb2coJ0VSUk9SOiBpbWFnZSBcIicgKyBocmVmICsgJ1wiIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZy5zcmMgPSBocmVmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltZyA9IHN2Zy5hamF4KGhyZWYpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuYXR0cmlidXRlKCd4JykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMuYXR0cmlidXRlKCd5JykudG9QaXhlbHMoJ3knKTtcblxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuYXR0cmlidXRlKCdoZWlnaHQnKS50b1BpeGVscygneScpO1xuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc1N2Zykge1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd1N2Zyh0aGlzLmltZywgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgICAgICAgICAgICAgICAgc3ZnLkFzcGVjdFJhdGlvKGN0eCwgdGhpcy5hdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nKS52YWx1ZSwgd2lkdGgsIHRoaXMuaW1nLndpZHRoLCBoZWlnaHQsIHRoaXMuaW1nLmhlaWdodCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIDAsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5nZXRCb3VuZGluZ0JveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuYXR0cmlidXRlKCd4JykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMuYXR0cmlidXRlKCd5JykudG9QaXhlbHMoJ3knKTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmF0dHJpYnV0ZSgnd2lkdGgnKS50b1BpeGVscygneCcpO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmF0dHJpYnV0ZSgnaGVpZ2h0JykudG9QaXhlbHMoJ3knKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHN2Zy5Cb3VuZGluZ0JveCh4LCB5LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuaW1hZ2UucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyBncm91cCBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LmcgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRCb3VuZGluZ0JveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmIgPSBuZXcgc3ZnLkJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJiLmFkZEJvdW5kaW5nQm94KHRoaXMuY2hpbGRyZW5baV0uZ2V0Qm91bmRpbmdCb3goKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBiYjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmcucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyBzeW1ib2wgZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5zeW1ib2wgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgLy8gTk8gUkVOREVSXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzdmcuRWxlbWVudC5zeW1ib2wucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyBzdHlsZSBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LnN0eWxlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICAvLyB0ZXh0LCBvciBzcGFjZXMgdGhlbiBDREFUQVxuICAgICAgICAgICAgdmFyIGNzcyA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjc3MgKz0gbm9kZS5jaGlsZE5vZGVzW2ldLmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjc3MgPSBjc3MucmVwbGFjZSgvKFxcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKlxcL118W1xcclxcbl0pKSkqXFwqK1xcLyl8KF5bXFxzXSpcXC9cXC8uKikvZ20sICcnKTsgLy8gcmVtb3ZlIGNvbW1lbnRzXG4gICAgICAgICAgICBjc3MgPSBzdmcuY29tcHJlc3NTcGFjZXMoY3NzKTsgLy8gcmVwbGFjZSB3aGl0ZXNwYWNlXG4gICAgICAgICAgICB2YXIgY3NzRGVmcyA9IGNzcy5zcGxpdCgnfScpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjc3NEZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN2Zy50cmltKGNzc0RlZnNbaV0pICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3NEZWYgPSBjc3NEZWZzW2ldLnNwbGl0KCd7Jyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3NDbGFzc2VzID0gY3NzRGVmWzBdLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3NQcm9wcyA9IGNzc0RlZlsxXS5zcGxpdCgnOycpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNzc0NsYXNzZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjc3NDbGFzcyA9IHN2Zy50cmltKGNzc0NsYXNzZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0NsYXNzICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBjc3NQcm9wcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IGNzc1Byb3BzW2tdLmluZGV4T2YoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBjc3NQcm9wc1trXS5zdWJzdHIoMCwgcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNzc1Byb3BzW2tdLnN1YnN0cihwcm9wICsgMSwgY3NzUHJvcHNba10ubGVuZ3RoIC0gcHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lICE9IG51bGwgJiYgdmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbc3ZnLnRyaW0obmFtZSldID0gbmV3IHN2Zy5Qcm9wZXJ0eShzdmcudHJpbShuYW1lKSwgc3ZnLnRyaW0odmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcuU3R5bGVzW2Nzc0NsYXNzXSA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5TdHlsZXNTcGVjaWZpY2l0eVtjc3NDbGFzc10gPSBnZXRTZWxlY3RvclNwZWNpZmljaXR5KGNzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3NzQ2xhc3MgPT0gJ0Bmb250LWZhY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb250RmFtaWx5ID0gcHJvcHNbJ2ZvbnQtZmFtaWx5J10udmFsdWUucmVwbGFjZSgvXCIvZywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjcyA9IHByb3BzWydzcmMnXS52YWx1ZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHNyY3MubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmNzW3NdLmluZGV4T2YoJ2Zvcm1hdChcInN2Z1wiKScpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmxTdGFydCA9IHNyY3Nbc10uaW5kZXhPZigndXJsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybEVuZCA9IHNyY3Nbc10uaW5kZXhPZignKScsIHVybFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc3Jjc1tzXS5zdWJzdHIodXJsU3RhcnQgKyA1LCB1cmxFbmQgLSB1cmxTdGFydCAtIDYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb2MgPSBzdmcucGFyc2VYbWwoc3ZnLmFqYXgodXJsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvbnRzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb250Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDA7IGYgPCBmb250cy5sZW5ndGg7IGYrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9udCA9IHN2Zy5DcmVhdGVFbGVtZW50KGZvbnRzW2ZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLkRlZmluaXRpb25zW2ZvbnRGYW1pbHldID0gZm9udDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LnN0eWxlLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIHVzZSBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50LnVzZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLmJhc2VTZXRDb250ZXh0ID0gdGhpcy5zZXRDb250ZXh0O1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0ID0gZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZVNldENvbnRleHQoY3R4KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ3gnKS5oYXNWYWx1ZSgpKSBjdHgudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKCd4JykudG9QaXhlbHMoJ3gnKSwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd5JykuaGFzVmFsdWUoKSkgY3R4LnRyYW5zbGF0ZSgwLCB0aGlzLmF0dHJpYnV0ZSgneScpLnRvUGl4ZWxzKCd5JykpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSBlbGVtZW50LnBhdGgoY3R4KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFN2ZyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBtZSB1c2luZyBhIHRlbXBvcmFyeSBzdmcgZWxlbWVudCBpbiBzeW1ib2wgY2FzZXMgKGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRy9zdHJ1Y3QuaHRtbCNVc2VFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2ZyA9IG5ldyBzdmcuRWxlbWVudC5zdmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdmcudHlwZSA9ICdzdmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzWyd2aWV3Qm94J10gPSBuZXcgc3ZnLlByb3BlcnR5KCd2aWV3Qm94JywgZWxlbWVudC5hdHRyaWJ1dGUoJ3ZpZXdCb3gnKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3ByZXNlcnZlQXNwZWN0UmF0aW8nXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCBlbGVtZW50LmF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1snb3ZlcmZsb3cnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ292ZXJmbG93JywgZWxlbWVudC5hdHRyaWJ1dGUoJ292ZXJmbG93JykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5jaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBTdmcudHlwZSA9PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgc3ltYm9sIG9yIHN2ZywgaW5oZXJpdCB3aWR0aC9oZWlnaHQgZnJvbSBtZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLmhhc1ZhbHVlKCkpIHRlbXBTdmcuYXR0cmlidXRlc1snd2lkdGgnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3dpZHRoJywgdGhpcy5hdHRyaWJ1dGUoJ3dpZHRoJykudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdoZWlnaHQnKS5oYXNWYWx1ZSgpKSB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ2hlaWdodCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnaGVpZ2h0JywgdGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkUGFyZW50ID0gdGVtcFN2Zy5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5yZW5kZXIoY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5wYXJlbnQgPSBvbGRQYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQudXNlLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gbWFzayBlbGVtZW50XG4gICAgICAgIHN2Zy5FbGVtZW50Lm1hc2sgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGFzIHRlbXAgc3ZnXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmF0dHJpYnV0ZSgneCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLmF0dHJpYnV0ZSgneScpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5hdHRyaWJ1dGUoJ3dpZHRoJykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcpLnRvUGl4ZWxzKCd5Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAod2lkdGggPT0gMCAmJiBoZWlnaHQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYmIgPSBuZXcgc3ZnLkJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmIuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltpXS5nZXRCb3VuZGluZ0JveCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoYmIueDEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoYmIueTEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBNYXRoLmZsb29yKGJiLndpZHRoKCkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5mbG9vcihiYi5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdGVtcG9yYXJpbHkgcmVtb3ZlIG1hc2sgdG8gYXZvaWQgcmVjdXJzaW9uXG4gICAgICAgICAgICAgICAgdmFyIG1hc2sgPSBlbGVtZW50LmF0dHJpYnV0ZSgnbWFzaycpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cmlidXRlKCdtYXNrJykudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgICAgIHZhciBjTWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIGNNYXNrLndpZHRoID0geCArIHdpZHRoO1xuICAgICAgICAgICAgICAgIGNNYXNrLmhlaWdodCA9IHkgKyBoZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2tDdHggPSBjTWFzay5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4obWFza0N0eCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgICAgIGMud2lkdGggPSB4ICsgd2lkdGg7XG4gICAgICAgICAgICAgICAgYy5oZWlnaHQgPSB5ICsgaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wQ3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVuZGVyKHRlbXBDdHgpO1xuICAgICAgICAgICAgICAgIHRlbXBDdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgICAgICAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IG1hc2tDdHguY3JlYXRlUGF0dGVybihjTWFzaywgJ25vLXJlcGVhdCcpO1xuICAgICAgICAgICAgICAgIHRlbXBDdHguZmlsbFJlY3QoMCwgMCwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZW1wQ3R4LmNyZWF0ZVBhdHRlcm4oYywgJ25vLXJlcGVhdCcpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVhc3NpZ24gbWFza1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cmlidXRlKCdtYXNrJykudmFsdWUgPSBtYXNrO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgLy8gTk8gUkVOREVSXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzdmcuRWxlbWVudC5tYXNrLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIGNsaXAgZWxlbWVudFxuICAgICAgICBzdmcuRWxlbWVudC5jbGlwUGF0aCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkQmVnaW5QYXRoID0gQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg7XG4gICAgICAgICAgICAgICAgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGggPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgICAgICAgICAgICAgIHZhciBvbGRDbG9zZVBhdGggPSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aDtcbiAgICAgICAgICAgICAgICBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICAgICAgICAgICAgb2xkQmVnaW5QYXRoLmNhbGwoY3R4KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5wYXRoICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5zdHlsZSgndHJhbnNmb3JtJywgZmFsc2UsIHRydWUpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSBuZXcgc3ZnLlRyYW5zZm9ybShjaGlsZC5zdHlsZSgndHJhbnNmb3JtJywgZmFsc2UsIHRydWUpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0uYXBwbHkoY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhdGgoY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoID0gb2xkQ2xvc2VQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS51bmFwcGx5KGN0eCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2xkQ2xvc2VQYXRoLmNhbGwoY3R4KTtcbiAgICAgICAgICAgICAgICBjdHguY2xpcCgpO1xuXG4gICAgICAgICAgICAgICAgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGggPSBvbGRCZWdpblBhdGg7XG4gICAgICAgICAgICAgICAgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGggPSBvbGRDbG9zZVBhdGg7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICAvLyBOTyBSRU5ERVJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmNsaXBQYXRoLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xuXG4gICAgICAgIC8vIGZpbHRlcnNcbiAgICAgICAgc3ZnLkVsZW1lbnQuZmlsdGVyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhcyB0ZW1wIHN2Z1xuICAgICAgICAgICAgICAgIHZhciBiYiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoYmIueDEpO1xuICAgICAgICAgICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihiYi55MSk7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gTWF0aC5mbG9vcihiYi53aWR0aCgpKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5mbG9vcihiYi5oZWlnaHQoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyB0ZW1wb3JhcmlseSByZW1vdmUgZmlsdGVyIHRvIGF2b2lkIHJlY3Vyc2lvblxuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSBlbGVtZW50LnN0eWxlKCdmaWx0ZXInKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlKCdmaWx0ZXInKS52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgdmFyIHB4ID0gMCxcbiAgICAgICAgICAgICAgICAgICAgcHkgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWZkID0gdGhpcy5jaGlsZHJlbltpXS5leHRyYUZpbHRlckRpc3RhbmNlIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIHB4ID0gTWF0aC5tYXgocHgsIGVmZCk7XG4gICAgICAgICAgICAgICAgICAgIHB5ID0gTWF0aC5tYXgocHksIGVmZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICBjLndpZHRoID0gd2lkdGggKyAyICogcHg7XG4gICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBoZWlnaHQgKyAyICogcHk7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBDdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgICAgdGVtcEN0eC50cmFuc2xhdGUoLXggKyBweCwgLXkgKyBweSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW5kZXIodGVtcEN0eCk7XG5cbiAgICAgICAgICAgICAgICAvLyBhcHBseSBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jaGlsZHJlbltpXS5hcHBseSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5hcHBseSh0ZW1wQ3R4LCAwLCAwLCB3aWR0aCArIDIgKiBweCwgaGVpZ2h0ICsgMiAqIHB5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBvbiBtZVxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoYywgMCwgMCwgd2lkdGggKyAyICogcHgsIGhlaWdodCArIDIgKiBweSwgeCAtIHB4LCB5IC0gcHksIHdpZHRoICsgMiAqIHB4LCBoZWlnaHQgKyAyICogcHkpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVhc3NpZ24gZmlsdGVyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZSgnZmlsdGVyJywgdHJ1ZSkudmFsdWUgPSBmaWx0ZXI7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgICAgICAgICAvLyBOTyBSRU5ERVJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHN2Zy5FbGVtZW50LmZpbHRlci5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcblxuICAgICAgICBzdmcuRWxlbWVudC5mZU1vcnBob2xvZ3kgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzdmcuRWxlbWVudC5mZU1vcnBob2xvZ3kucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgc3ZnLkVsZW1lbnQuZmVDb21wb3NpdGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzdmcuRWxlbWVudC5mZUNvbXBvc2l0ZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcblxuICAgICAgICBzdmcuRWxlbWVudC5mZUNvbG9yTWF0cml4ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xuXG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gc3ZnLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoJ3ZhbHVlcycpLnZhbHVlKTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hdHRyaWJ1dGUoJ3R5cGUnKS52YWx1ZU9yRGVmYXVsdCgnbWF0cml4JykpIHsvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvZmlsdGVycy5odG1sI2ZlQ29sb3JNYXRyaXhFbGVtZW50XG4gICAgICAgICAgICAgICAgY2FzZSAnc2F0dXJhdGUnOlxuICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG1hdHJpeFswXTtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4ID0gWzAuMjEzICsgMC43ODcgKiBzLCAwLjcxNSAtIDAuNzE1ICogcywgMC4wNzIgLSAwLjA3MiAqIHMsIDAsIDAsIDAuMjEzIC0gMC4yMTMgKiBzLCAwLjcxNSArIDAuMjg1ICogcywgMC4wNzIgLSAwLjA3MiAqIHMsIDAsIDAsIDAuMjEzIC0gMC4yMTMgKiBzLCAwLjcxNSAtIDAuNzE1ICogcywgMC4wNzIgKyAwLjkyOCAqIHMsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDFdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdodWVSb3RhdGUnOlxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IG1hdHJpeFswXSAqIE1hdGguUEkgLyAxODAuMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBmdW5jdGlvbiBjKG0xLCBtMiwgbTMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtMSArIE1hdGguY29zKGEpICogbTIgKyBNYXRoLnNpbihhKSAqIG0zO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXggPSBbYygwLjIxMywgMC43ODcsIC0wLjIxMyksIGMoMC43MTUsIC0wLjcxNSwgLTAuNzE1KSwgYygwLjA3MiwgLTAuMDcyLCAwLjkyOCksIDAsIDAsIGMoMC4yMTMsIC0wLjIxMywgMC4xNDMpLCBjKDAuNzE1LCAwLjI4NSwgMC4xNDApLCBjKDAuMDcyLCAtMC4wNzIsIC0wLjI4MyksIDAsIDAsIGMoMC4yMTMsIC0wLjIxMywgLTAuNzg3KSwgYygwLjcxNSwgLTAuNzE1LCAwLjcxNSksIGMoMC4wNzIsIDAuOTI4LCAwLjA3MiksIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDFdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsdW1pbmFuY2VUb0FscGhhJzpcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAuMjEyNSwgMC43MTU0LCAwLjA3MjEsIDAsIDAsIDAsIDAsIDAsIDAsIDFdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaW1HZXQoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByZ2JhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltZ1t5ICogd2lkdGggKiA0ICsgeCAqIDQgKyByZ2JhXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaW1TZXQoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByZ2JhLCB2YWwpIHtcbiAgICAgICAgICAgICAgICBpbWdbeSAqIHdpZHRoICogNCArIHggKiA0ICsgcmdiYV0gPSB2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG0oaSwgdikge1xuICAgICAgICAgICAgICAgIHZhciBtaSA9IG1hdHJpeFtpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWkgKiAobWkgPCAwID8gdiAtIDI1NSA6IHYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vIGFzc3VtaW5nIHg9PTAgJiYgeT09MCBmb3Igbm93XG4gICAgICAgICAgICAgICAgdmFyIHNyY0RhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgciA9IGltR2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IGltR2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGltR2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IGltR2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbVNldChzcmNEYXRhLmRhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDAsIG0oMCwgcikgKyBtKDEsIGcpICsgbSgyLCBiKSArIG0oMywgYSkgKyBtKDQsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltU2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMSwgbSg1LCByKSArIG0oNiwgZykgKyBtKDcsIGIpICsgbSg4LCBhKSArIG0oOSwgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1TZXQoc3JjRGF0YS5kYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCAyLCBtKDEwLCByKSArIG0oMTEsIGcpICsgbSgxMiwgYikgKyBtKDEzLCBhKSArIG0oMTQsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltU2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMywgbSgxNSwgcikgKyBtKDE2LCBnKSArIG0oMTcsIGIpICsgbSgxOCwgYSkgKyBtKDE5LCAxKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHNyY0RhdGEsIDAsIDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuZmVDb2xvck1hdHJpeC5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcblxuICAgICAgICBzdmcuRWxlbWVudC5mZUdhdXNzaWFuQmx1ciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcblxuICAgICAgICAgICAgdGhpcy5ibHVyUmFkaXVzID0gTWF0aC5mbG9vcih0aGlzLmF0dHJpYnV0ZSgnc3RkRGV2aWF0aW9uJykubnVtVmFsdWUoKSk7XG4gICAgICAgICAgICB0aGlzLmV4dHJhRmlsdGVyRGlzdGFuY2UgPSB0aGlzLmJsdXJSYWRpdXM7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFja0JsdXJDYW52YXNSR0JBID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN2Zy5sb2coJ0VSUk9SOiBTdGFja0JsdXIuanMgbXVzdCBiZSBpbmNsdWRlZCBmb3IgYmx1ciB0byB3b3JrJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTdGFja0JsdXIgcmVxdWlyZXMgY2FudmFzIGJlIG9uIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgY3R4LmNhbnZhcy5pZCA9IHN2Zy5VbmlxdWVJZCgpO1xuICAgICAgICAgICAgICAgIGN0eC5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN0eC5jYW52YXMpO1xuICAgICAgICAgICAgICAgIHN0YWNrQmx1ckNhbnZhc1JHQkEoY3R4LmNhbnZhcy5pZCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgdGhpcy5ibHVyUmFkaXVzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGN0eC5jYW52YXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuZmVHYXVzc2lhbkJsdXIucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gdGl0bGUgZWxlbWVudCwgZG8gbm90aGluZ1xuICAgICAgICBzdmcuRWxlbWVudC50aXRsZSA9IGZ1bmN0aW9uIChub2RlKSB7fTtcbiAgICAgICAgc3ZnLkVsZW1lbnQudGl0bGUucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgLy8gZGVzYyBlbGVtZW50LCBkbyBub3RoaW5nXG4gICAgICAgIHN2Zy5FbGVtZW50LmRlc2MgPSBmdW5jdGlvbiAobm9kZSkge307XG4gICAgICAgIHN2Zy5FbGVtZW50LmRlc2MucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XG5cbiAgICAgICAgc3ZnLkVsZW1lbnQuTUlTU0lORyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBzdmcubG9nKCdFUlJPUjogRWxlbWVudCBcXCcnICsgbm9kZS5ub2RlTmFtZSArICdcXCcgbm90IHlldCBpbXBsZW1lbnRlZC4nKTtcbiAgICAgICAgfTtcbiAgICAgICAgc3ZnLkVsZW1lbnQuTUlTU0lORy5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcblxuICAgICAgICAvLyBlbGVtZW50IGZhY3RvcnlcbiAgICAgICAgc3ZnLkNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXlteOl0rOi8sICcnKTsgLy8gcmVtb3ZlIG5hbWVzcGFjZVxuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcLS9nLCAnJyk7IC8vIHJlbW92ZSBkYXNoZXNcbiAgICAgICAgICAgIHZhciBlID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3ZnLkVsZW1lbnRbY2xhc3NOYW1lXSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGUgPSBuZXcgc3ZnLkVsZW1lbnRbY2xhc3NOYW1lXShub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZSA9IG5ldyBzdmcuRWxlbWVudC5NSVNTSU5HKG5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnR5cGUgPSBub2RlLm5vZGVOYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbG9hZCBmcm9tIHVybFxuICAgICAgICBzdmcubG9hZCA9IGZ1bmN0aW9uIChjdHgsIHVybCkge1xuICAgICAgICAgICAgc3ZnLmxvYWRYbWwoY3R4LCBzdmcuYWpheCh1cmwpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBsb2FkIGZyb20geG1sXG4gICAgICAgIHN2Zy5sb2FkWG1sID0gZnVuY3Rpb24gKGN0eCwgeG1sKSB7XG4gICAgICAgICAgICBzdmcubG9hZFhtbERvYyhjdHgsIHN2Zy5wYXJzZVhtbCh4bWwpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzdmcubG9hZFhtbERvYyA9IGZ1bmN0aW9uIChjdHgsIGRvbSkge1xuICAgICAgICAgICAgc3ZnLmluaXQoY3R4KTtcblxuICAgICAgICAgICAgdmFyIG1hcFhZID0gZnVuY3Rpb24gbWFwWFkocCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gY3R4LmNhbnZhcztcbiAgICAgICAgICAgICAgICB3aGlsZSAoZSkge1xuICAgICAgICAgICAgICAgICAgICBwLnggLT0gZS5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICAgICAgICBwLnkgLT0gZS5vZmZzZXRUb3A7XG4gICAgICAgICAgICAgICAgICAgIGUgPSBlLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxYKSBwLnggKz0gd2luZG93LnNjcm9sbFg7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZKSBwLnkgKz0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBiaW5kIG1vdXNlXG4gICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ2lnbm9yZU1vdXNlJ10gIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGN0eC5jYW52YXMub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gbWFwWFkobmV3IHN2Zy5Qb2ludChlICE9IG51bGwgPyBlLmNsaWVudFggOiBldmVudC5jbGllbnRYLCBlICE9IG51bGwgPyBlLmNsaWVudFkgOiBldmVudC5jbGllbnRZKSk7XG4gICAgICAgICAgICAgICAgICAgIHN2Zy5Nb3VzZS5vbmNsaWNrKHAueCwgcC55KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGN0eC5jYW52YXMub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG1hcFhZKG5ldyBzdmcuUG9pbnQoZSAhPSBudWxsID8gZS5jbGllbnRYIDogZXZlbnQuY2xpZW50WCwgZSAhPSBudWxsID8gZS5jbGllbnRZIDogZXZlbnQuY2xpZW50WSkpO1xuICAgICAgICAgICAgICAgICAgICBzdmcuTW91c2Uub25tb3VzZW1vdmUocC54LCBwLnkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlID0gc3ZnLkNyZWF0ZUVsZW1lbnQoZG9tLmRvY3VtZW50RWxlbWVudCk7XG4gICAgICAgICAgICBlLnJvb3QgPSB0cnVlO1xuICAgICAgICAgICAgZS5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIHJlbmRlciBsb29wXG4gICAgICAgICAgICB2YXIgaXNGaXJzdFJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICB2YXIgZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgc3ZnLlZpZXdQb3J0LkNsZWFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKGN0eC5jYW52YXMucGFyZW50Tm9kZSkgc3ZnLlZpZXdQb3J0LlNldEN1cnJlbnQoY3R4LmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoLCBjdHguY2FudmFzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIGlmIChzdmcub3B0c1snaWdub3JlRGltZW5zaW9ucyddICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGNhbnZhcyBzaXplXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnN0eWxlKCd3aWR0aCcpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jYW52YXMud2lkdGggPSBlLnN0eWxlKCd3aWR0aCcpLnRvUGl4ZWxzKCd4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguY2FudmFzLnN0eWxlLndpZHRoID0gY3R4LmNhbnZhcy53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuc3R5bGUoJ2hlaWdodCcpLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gZS5zdHlsZSgnaGVpZ2h0JykudG9QaXhlbHMoJ3knKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjV2lkdGggPSBjdHguY2FudmFzLmNsaWVudFdpZHRoIHx8IGN0eC5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGNIZWlnaHQgPSBjdHguY2FudmFzLmNsaWVudEhlaWdodCB8fCBjdHguY2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ2lnbm9yZURpbWVuc2lvbnMnXSA9PSB0cnVlICYmIGUuc3R5bGUoJ3dpZHRoJykuaGFzVmFsdWUoKSAmJiBlLnN0eWxlKCdoZWlnaHQnKS5oYXNWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNXaWR0aCA9IGUuc3R5bGUoJ3dpZHRoJykudG9QaXhlbHMoJ3gnKTtcbiAgICAgICAgICAgICAgICAgICAgY0hlaWdodCA9IGUuc3R5bGUoJ2hlaWdodCcpLnRvUGl4ZWxzKCd5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2Zy5WaWV3UG9ydC5TZXRDdXJyZW50KGNXaWR0aCwgY0hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ29mZnNldFgnXSAhPSBudWxsKSBlLmF0dHJpYnV0ZSgneCcsIHRydWUpLnZhbHVlID0gc3ZnLm9wdHNbJ29mZnNldFgnXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ29mZnNldFknXSAhPSBudWxsKSBlLmF0dHJpYnV0ZSgneScsIHRydWUpLnZhbHVlID0gc3ZnLm9wdHNbJ29mZnNldFknXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ3NjYWxlV2lkdGgnXSAhPSBudWxsIHx8IHN2Zy5vcHRzWydzY2FsZUhlaWdodCddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhSYXRpbyA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB5UmF0aW8gPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveCA9IHN2Zy5Ub051bWJlckFycmF5KGUuYXR0cmlidXRlKCd2aWV3Qm94JykudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdmcub3B0c1snc2NhbGVXaWR0aCddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmF0dHJpYnV0ZSgnd2lkdGgnKS5oYXNWYWx1ZSgpKSB4UmF0aW8gPSBlLmF0dHJpYnV0ZSgnd2lkdGgnKS50b1BpeGVscygneCcpIC8gc3ZnLm9wdHNbJ3NjYWxlV2lkdGgnXTtlbHNlIGlmICghaXNOYU4odmlld0JveFsyXSkpIHhSYXRpbyA9IHZpZXdCb3hbMl0gLyBzdmcub3B0c1snc2NhbGVXaWR0aCddO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zy5vcHRzWydzY2FsZUhlaWdodCddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmF0dHJpYnV0ZSgnaGVpZ2h0JykuaGFzVmFsdWUoKSkgeVJhdGlvID0gZS5hdHRyaWJ1dGUoJ2hlaWdodCcpLnRvUGl4ZWxzKCd5JykgLyBzdmcub3B0c1snc2NhbGVIZWlnaHQnXTtlbHNlIGlmICghaXNOYU4odmlld0JveFszXSkpIHlSYXRpbyA9IHZpZXdCb3hbM10gLyBzdmcub3B0c1snc2NhbGVIZWlnaHQnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh4UmF0aW8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeFJhdGlvID0geVJhdGlvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh5UmF0aW8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeVJhdGlvID0geFJhdGlvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZS5hdHRyaWJ1dGUoJ3dpZHRoJywgdHJ1ZSkudmFsdWUgPSBzdmcub3B0c1snc2NhbGVXaWR0aCddO1xuICAgICAgICAgICAgICAgICAgICBlLmF0dHJpYnV0ZSgnaGVpZ2h0JywgdHJ1ZSkudmFsdWUgPSBzdmcub3B0c1snc2NhbGVIZWlnaHQnXTtcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZSgndHJhbnNmb3JtJywgdHJ1ZSwgdHJ1ZSkudmFsdWUgKz0gJyBzY2FsZSgnICsgMS4wIC8geFJhdGlvICsgJywnICsgMS4wIC8geVJhdGlvICsgJyknO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFuZCByZW5kZXJcbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ2lnbm9yZUNsZWFyJ10gIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNXaWR0aCwgY0hlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucmVuZGVyKGN0eCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3RSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNGaXJzdFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN2Zy5vcHRzWydyZW5kZXJDYWxsYmFjayddID09ICdmdW5jdGlvbicpIHN2Zy5vcHRzWydyZW5kZXJDYWxsYmFjayddKGRvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHdhaXRpbmdGb3JJbWFnZXMgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHN2Zy5JbWFnZXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgICAgIHdhaXRpbmdGb3JJbWFnZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkcmF3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdmcuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmVlZFVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdhaXRpbmdGb3JJbWFnZXMgJiYgc3ZnLkltYWdlc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhaXRpbmdGb3JJbWFnZXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbmVlZCB1cGRhdGUgZnJvbSBtb3VzZSBldmVudHM/XG4gICAgICAgICAgICAgICAgaWYgKHN2Zy5vcHRzWydpZ25vcmVNb3VzZSddICE9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IG5lZWRVcGRhdGUgfCBzdmcuTW91c2UuaGFzRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbmVlZCB1cGRhdGUgZnJvbSBhbmltYXRpb25zP1xuICAgICAgICAgICAgICAgIGlmIChzdmcub3B0c1snaWdub3JlQW5pbWF0aW9uJ10gIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN2Zy5BbmltYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkVXBkYXRlID0gbmVlZFVwZGF0ZSB8IHN2Zy5BbmltYXRpb25zW2ldLnVwZGF0ZSgxMDAwIC8gc3ZnLkZSQU1FUkFURSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBuZWVkIHVwZGF0ZSBmcm9tIHJlZHJhdz9cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN2Zy5vcHRzWydmb3JjZVJlZHJhdyddID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zy5vcHRzWydmb3JjZVJlZHJhdyddKCkgPT0gdHJ1ZSkgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmIChuZWVkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgc3ZnLk1vdXNlLnJ1bkV2ZW50cygpOyAvLyBydW4gYW5kIGNsZWFyIG91ciBldmVudHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwIC8gc3ZnLkZSQU1FUkFURSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3ZnLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc3ZnLmludGVydmFsSUQpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHN2Zy5pbnRlcnZhbElEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzdmcuTW91c2UgPSBuZXcgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaGFzRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmV2ZW50cy5sZW5ndGggIT0gMDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25jbGljayA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvbmNsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICAgICAgcnVuOiBmdW5jdGlvbiBydW4oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUub25jbGljaykgZS5vbmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb25tb3VzZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgICAgICAgICBydW46IGZ1bmN0aW9uIHJ1bihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5vbm1vdXNlbW92ZSkgZS5vbm1vdXNlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmV2ZW50RWxlbWVudHMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5jaGVja1BhdGggPSBmdW5jdGlvbiAoZWxlbWVudCwgY3R4KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuZXZlbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LmlzUG9pbnRJblBhdGggJiYgY3R4LmlzUG9pbnRJblBhdGgoZS54LCBlLnkpKSB0aGlzLmV2ZW50RWxlbWVudHNbaV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tCb3VuZGluZ0JveCA9IGZ1bmN0aW9uIChlbGVtZW50LCBiYikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmV2ZW50c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJiLmlzUG9pbnRJbkJveChlLngsIGUueSkpIHRoaXMuZXZlbnRFbGVtZW50c1tpXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5ydW5FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3ZnLmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yID0gJyc7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5ldmVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5ldmVudEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5ydW4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBkb25lIHJ1bm5pbmcsIGNsZWFyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RWxlbWVudHMgPSBbXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0oKTtcblxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdTdmcgPSBmdW5jdGlvbiAocywgZHgsIGR5LCBkdywgZGgpIHtcbiAgICAgICAgICAgIGNhbnZnKHRoaXMuY2FudmFzLCBzLCB7XG4gICAgICAgICAgICAgICAgaWdub3JlTW91c2U6IHRydWUsXG4gICAgICAgICAgICAgICAgaWdub3JlQW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlnbm9yZURpbWVuc2lvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgaWdub3JlQ2xlYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WDogZHgsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogZHksXG4gICAgICAgICAgICAgICAgc2NhbGVXaWR0aDogZHcsXG4gICAgICAgICAgICAgICAgc2NhbGVIZWlnaHQ6IGRoXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3aW5kb3cuY2FudmcgPSBjYW52ZztcblxuICAgIHJldHVybiBjYW52Zztcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGNsYXNzIHRvIHBhcnNlIGNvbG9yIHZhbHVlc1xuICogQGF1dGhvciBTdG95YW4gU3RlZmFub3YgPHNzdG9vQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgaHR0cDovL3d3dy5waHBpZWQuY29tL3JnYi1jb2xvci1wYXJzZXItaW4tamF2YXNjcmlwdC9cbiAqIEBsaWNlbnNlIFVzZSBpdCBpZiB5b3UgbGlrZSBpdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFJHQkNvbG9yKGNvbG9yX3N0cmluZykge1xuICAgIHRoaXMub2sgPSBmYWxzZTtcblxuICAgIC8vIHN0cmlwIGFueSBsZWFkaW5nICNcbiAgICBpZiAoY29sb3Jfc3RyaW5nLmNoYXJBdCgwKSA9PSAnIycpIHtcbiAgICAgICAgLy8gcmVtb3ZlICMgaWYgYW55XG4gICAgICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5zdWJzdHIoMSwgNik7XG4gICAgfVxuXG4gICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnJlcGxhY2UoLyAvZywgJycpO1xuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gYmVmb3JlIGdldHRpbmcgaW50byByZWdleHBzLCB0cnkgc2ltcGxlIG1hdGNoZXNcbiAgICAvLyBhbmQgb3ZlcndyaXRlIHRoZSBpbnB1dFxuICAgIHZhciBzaW1wbGVfY29sb3JzID0ge1xuICAgICAgICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICAgICAgICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICAgICAgICBhcXVhOiAnMDBmZmZmJyxcbiAgICAgICAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gICAgICAgIGF6dXJlOiAnZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICdmNWY1ZGMnLFxuICAgICAgICBiaXNxdWU6ICdmZmU0YzQnLFxuICAgICAgICBibGFjazogJzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgICAgICAgYmx1ZTogJzAwMDBmZicsXG4gICAgICAgIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICAgICAgICBicm93bjogJ2E1MmEyYScsXG4gICAgICAgIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gICAgICAgIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICAgICAgICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICAgICAgICBjb3JhbDogJ2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICAgICAgICBjcmltc29uOiAnZGMxNDNjJyxcbiAgICAgICAgY3lhbjogJzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgICAgICAgZGFya2N5YW46ICcwMDhiOGInLFxuICAgICAgICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICdhOWE5YTknLFxuICAgICAgICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICAgICAgICBkYXJra2hha2k6ICdiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgICAgICAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICAgICAgICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgICAgICAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gICAgICAgIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICAgICAgICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgICAgICAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICAgICAgICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gICAgICAgIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICAgICAgICBmZWxkc3BhcjogJ2QxOTI3NScsXG4gICAgICAgIGZpcmVicmljazogJ2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICAgICAgICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgICAgICAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gICAgICAgIGdvbGQ6ICdmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICAgICAgICBncmF5OiAnODA4MDgwJyxcbiAgICAgICAgZ3JlZW46ICcwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gICAgICAgIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgICAgICAgaG90cGluazogJ2ZmNjliNCcsXG4gICAgICAgIGluZGlhbnJlZDogJ2NkNWM1YycsXG4gICAgICAgIGluZGlnbzogJzRiMDA4MicsXG4gICAgICAgIGl2b3J5OiAnZmZmZmYwJyxcbiAgICAgICAga2hha2k6ICdmMGU2OGMnLFxuICAgICAgICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICAgICAgICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICAgICAgICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICAgICAgICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgICAgICAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICAgICAgICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICAgICAgICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgICAgICAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgICAgICAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgICAgICAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgICAgICAgbGlnaHRzbGF0ZWJsdWU6ICc4NDcwZmYnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgICAgICAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnMDBmZjAwJyxcbiAgICAgICAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgICAgICAgbGluZW46ICdmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnZmYwMGZmJyxcbiAgICAgICAgbWFyb29uOiAnODAwMDAwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gICAgICAgIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICAgICAgICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICc5MzcwZDgnLFxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gICAgICAgIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgICAgICAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgICAgICAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgICAgICAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICAgICAgICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gICAgICAgIG5hdnk6ICcwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgICAgICAgb2xpdmU6ICc4MDgwMDAnLFxuICAgICAgICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICdmZmE1MDAnLFxuICAgICAgICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICAgICAgICBvcmNoaWQ6ICdkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgICAgICAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgICAgICAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICdkODcwOTMnLFxuICAgICAgICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgICAgICAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgICAgICAgcGVydTogJ2NkODUzZicsXG4gICAgICAgIHBpbms6ICdmZmMwY2InLFxuICAgICAgICBwbHVtOiAnZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gICAgICAgIHB1cnBsZTogJzgwMDA4MCcsXG4gICAgICAgIHJlZDogJ2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJ2JjOGY4ZicsXG4gICAgICAgIHJveWFsYmx1ZTogJzQxNjllMScsXG4gICAgICAgIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgICAgICAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gICAgICAgIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICAgICAgICBzaWVubmE6ICdhMDUyMmQnLFxuICAgICAgICBzaWx2ZXI6ICdjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnODdjZWViJyxcbiAgICAgICAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgICAgICAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgICAgICAgc25vdzogJ2ZmZmFmYScsXG4gICAgICAgIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgICAgICAgdGFuOiAnZDJiNDhjJyxcbiAgICAgICAgdGVhbDogJzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICdkOGJmZDgnLFxuICAgICAgICB0b21hdG86ICdmZjYzNDcnLFxuICAgICAgICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICdlZTgyZWUnLFxuICAgICAgICB2aW9sZXRyZWQ6ICdkMDIwOTAnLFxuICAgICAgICB3aGVhdDogJ2Y1ZGViMycsXG4gICAgICAgIHdoaXRlOiAnZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gICAgICAgIHllbGxvdzogJ2ZmZmYwMCcsXG4gICAgICAgIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xuICAgIH07XG4gICAgZm9yICh2YXIga2V5IGluIHNpbXBsZV9jb2xvcnMpIHtcbiAgICAgICAgaWYgKGNvbG9yX3N0cmluZyA9PSBrZXkpIHtcbiAgICAgICAgICAgIGNvbG9yX3N0cmluZyA9IHNpbXBsZV9jb2xvcnNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBlbWQgb2Ygc2ltcGxlIHR5cGUtaW4gY29sb3JzXG5cbiAgICAvLyBhcnJheSBvZiBjb2xvciBkZWZpbml0aW9uIG9iamVjdHNcbiAgICB2YXIgY29sb3JfZGVmcyA9IFt7XG4gICAgICAgIHJlOiAvXnJnYlxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSlcXCkkLyxcbiAgICAgICAgZXhhbXBsZTogWydyZ2IoMTIzLCAyMzQsIDQ1KScsICdyZ2IoMjU1LDIzNCwyNDUpJ10sXG4gICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIHByb2Nlc3MoYml0cykge1xuICAgICAgICAgICAgcmV0dXJuIFtwYXJzZUludChiaXRzWzFdKSwgcGFyc2VJbnQoYml0c1syXSksIHBhcnNlSW50KGJpdHNbM10pXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgcmU6IC9eKFxcd3syfSkoXFx3ezJ9KShcXHd7Mn0pJC8sXG4gICAgICAgIGV4YW1wbGU6IFsnIzAwZmYwMCcsICczMzY2OTknXSxcbiAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gcHJvY2VzcyhiaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gW3BhcnNlSW50KGJpdHNbMV0sIDE2KSwgcGFyc2VJbnQoYml0c1syXSwgMTYpLCBwYXJzZUludChiaXRzWzNdLCAxNildO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICByZTogL14oXFx3ezF9KShcXHd7MX0pKFxcd3sxfSkkLyxcbiAgICAgICAgZXhhbXBsZTogWycjZmIwJywgJ2YwZiddLFxuICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKGJpdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBbcGFyc2VJbnQoYml0c1sxXSArIGJpdHNbMV0sIDE2KSwgcGFyc2VJbnQoYml0c1syXSArIGJpdHNbMl0sIDE2KSwgcGFyc2VJbnQoYml0c1szXSArIGJpdHNbM10sIDE2KV07XG4gICAgICAgIH1cbiAgICB9XTtcblxuICAgIC8vIHNlYXJjaCB0aHJvdWdoIHRoZSBkZWZpbml0aW9ucyB0byBmaW5kIGEgbWF0Y2hcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlID0gY29sb3JfZGVmc1tpXS5yZTtcbiAgICAgICAgdmFyIHByb2Nlc3NvciA9IGNvbG9yX2RlZnNbaV0ucHJvY2VzcztcbiAgICAgICAgdmFyIGJpdHMgPSByZS5leGVjKGNvbG9yX3N0cmluZyk7XG4gICAgICAgIGlmIChiaXRzKSB7XG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBwcm9jZXNzb3IoYml0cyk7XG4gICAgICAgICAgICB0aGlzLnIgPSBjaGFubmVsc1swXTtcbiAgICAgICAgICAgIHRoaXMuZyA9IGNoYW5uZWxzWzFdO1xuICAgICAgICAgICAgdGhpcy5iID0gY2hhbm5lbHNbMl07XG4gICAgICAgICAgICB0aGlzLm9rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlL2NsZWFudXAgdmFsdWVzXG4gICAgdGhpcy5yID0gdGhpcy5yIDwgMCB8fCBpc05hTih0aGlzLnIpID8gMCA6IHRoaXMuciA+IDI1NSA/IDI1NSA6IHRoaXMucjtcbiAgICB0aGlzLmcgPSB0aGlzLmcgPCAwIHx8IGlzTmFOKHRoaXMuZykgPyAwIDogdGhpcy5nID4gMjU1ID8gMjU1IDogdGhpcy5nO1xuICAgIHRoaXMuYiA9IHRoaXMuYiA8IDAgfHwgaXNOYU4odGhpcy5iKSA/IDAgOiB0aGlzLmIgPiAyNTUgPyAyNTUgOiB0aGlzLmI7XG5cbiAgICAvLyBzb21lIGdldHRlcnNcbiAgICB0aGlzLnRvUkdCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYignICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnKSc7XG4gICAgfTtcblxuICAgIHRoaXMudG9IZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgYiA9IHRoaXMuYi50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKSByID0gJzAnICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpIGcgPSAnMCcgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSkgYiA9ICcwJyArIGI7XG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gICAgfTtcblxuICAgIC8vIGhlbHBcbiAgICB0aGlzLmdldEhlbHBYTUwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBleGFtcGxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAvLyBhZGQgcmVnZXhwc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBleGFtcGxlID0gY29sb3JfZGVmc1tpXS5leGFtcGxlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBleGFtcGxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZXNbZXhhbXBsZXMubGVuZ3RoXSA9IGV4YW1wbGVbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHR5cGUtaW4gY29sb3JzXG4gICAgICAgIGZvciAodmFyIHNjIGluIHNpbXBsZV9jb2xvcnMpIHtcbiAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBzYztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB4bWwuc2V0QXR0cmlidXRlKCdpZCcsICdyZ2Jjb2xvci1leGFtcGxlcycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2NvbG9yID0gbmV3IFJHQkNvbG9yKGV4YW1wbGVzW2ldKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhhbXBsZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5zdHlsZS5jc3NUZXh0ID0gJ21hcmdpbjogM3B4OyAnICsgJ2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAnICsgJ2JhY2tncm91bmQ6JyArIGxpc3RfY29sb3IudG9IZXgoKSArICc7ICcgKyAnY29sb3I6JyArIGxpc3RfY29sb3IudG9IZXgoKTtcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndGVzdCcpKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9pdGVtX3ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnICsgZXhhbXBsZXNbaV0gKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvUkdCKCkgKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvSGV4KCkpO1xuICAgICAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChleGFtcGxlX2Rpdik7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGxpc3RfaXRlbV92YWx1ZSk7XG4gICAgICAgICAgICAgICAgeG1sLmFwcGVuZENoaWxkKGxpc3RfaXRlbSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4bWw7XG4gICAgfTtcbn07IiwiLypcbiAgICBTdGFja0JsdXIgLSBhIGZhc3QgYWxtb3N0IEdhdXNzaWFuIEJsdXIgRm9yIENhbnZhc1xuXG4gICAgVmVyc2lvbjogICAgIDAuNVxuICAgIEF1dGhvcjogICAgICAgIE1hcmlvIEtsaW5nZW1hbm5cbiAgICBDb250YWN0OiAgICAgbWFyaW9AcXVhc2ltb25kby5jb21cbiAgICBXZWJzaXRlOiAgICBodHRwOi8vd3d3LnF1YXNpbW9uZG8uY29tL1N0YWNrQmx1ckZvckNhbnZhc1xuICAgIFR3aXR0ZXI6ICAgIEBxdWFzaW1vbmRvXG5cbiAgICBJbiBjYXNlIHlvdSBmaW5kIHRoaXMgY2xhc3MgdXNlZnVsIC0gZXNwZWNpYWxseSBpbiBjb21tZXJjaWFsIHByb2plY3RzIC1cbiAgICBJIGFtIG5vdCB0b3RhbGx5IHVuaGFwcHkgZm9yIGEgc21hbGwgZG9uYXRpb24gdG8gbXkgUGF5UGFsIGFjY291bnRcbiAgICBtYXJpb0BxdWFzaW1vbmRvLmRlXG5cbiAgICBPciBzdXBwb3J0IG1lIG9uIGZsYXR0cjpcbiAgICBodHRwczovL2ZsYXR0ci5jb20vdGhpbmcvNzI3OTEvU3RhY2tCbHVyLWEtZmFzdC1hbG1vc3QtR2F1c3NpYW4tQmx1ci1FZmZlY3QtZm9yLUNhbnZhc0phdmFzY3JpcHRcblxuICAgIENvcHlyaWdodCAoYykgMjAxMCBNYXJpbyBLbGluZ2VtYW5uXG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gICAgZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gICAgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gICAgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAgICBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICAgIGNvbmRpdGlvbnM6XG5cbiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICAgIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAgICBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gICAgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gICAgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICAgIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAgICAqL1xuXG5cbnZhciBtdWxfdGFibGUgPSBbXG4gICAgNTEyLDUxMiw0NTYsNTEyLDMyOCw0NTYsMzM1LDUxMiw0MDUsMzI4LDI3MSw0NTYsMzg4LDMzNSwyOTIsNTEyLFxuICAgIDQ1NCw0MDUsMzY0LDMyOCwyOTgsMjcxLDQ5Niw0NTYsNDIwLDM4OCwzNjAsMzM1LDMxMiwyOTIsMjczLDUxMixcbiAgICA0ODIsNDU0LDQyOCw0MDUsMzgzLDM2NCwzNDUsMzI4LDMxMiwyOTgsMjg0LDI3MSwyNTksNDk2LDQ3NSw0NTYsXG4gICAgNDM3LDQyMCw0MDQsMzg4LDM3NCwzNjAsMzQ3LDMzNSwzMjMsMzEyLDMwMiwyOTIsMjgyLDI3MywyNjUsNTEyLFxuICAgIDQ5Nyw0ODIsNDY4LDQ1NCw0NDEsNDI4LDQxNyw0MDUsMzk0LDM4MywzNzMsMzY0LDM1NCwzNDUsMzM3LDMyOCxcbiAgICAzMjAsMzEyLDMwNSwyOTgsMjkxLDI4NCwyNzgsMjcxLDI2NSwyNTksNTA3LDQ5Niw0ODUsNDc1LDQ2NSw0NTYsXG4gICAgNDQ2LDQzNyw0MjgsNDIwLDQxMiw0MDQsMzk2LDM4OCwzODEsMzc0LDM2NywzNjAsMzU0LDM0NywzNDEsMzM1LFxuICAgIDMyOSwzMjMsMzE4LDMxMiwzMDcsMzAyLDI5NywyOTIsMjg3LDI4MiwyNzgsMjczLDI2OSwyNjUsMjYxLDUxMixcbiAgICA1MDUsNDk3LDQ4OSw0ODIsNDc1LDQ2OCw0NjEsNDU0LDQ0Nyw0NDEsNDM1LDQyOCw0MjIsNDE3LDQxMSw0MDUsXG4gICAgMzk5LDM5NCwzODksMzgzLDM3OCwzNzMsMzY4LDM2NCwzNTksMzU0LDM1MCwzNDUsMzQxLDMzNywzMzIsMzI4LFxuICAgIDMyNCwzMjAsMzE2LDMxMiwzMDksMzA1LDMwMSwyOTgsMjk0LDI5MSwyODcsMjg0LDI4MSwyNzgsMjc0LDI3MSxcbiAgICAyNjgsMjY1LDI2MiwyNTksMjU3LDUwNyw1MDEsNDk2LDQ5MSw0ODUsNDgwLDQ3NSw0NzAsNDY1LDQ2MCw0NTYsXG4gICAgNDUxLDQ0Niw0NDIsNDM3LDQzMyw0MjgsNDI0LDQyMCw0MTYsNDEyLDQwOCw0MDQsNDAwLDM5NiwzOTIsMzg4LFxuICAgIDM4NSwzODEsMzc3LDM3NCwzNzAsMzY3LDM2MywzNjAsMzU3LDM1NCwzNTAsMzQ3LDM0NCwzNDEsMzM4LDMzNSxcbiAgICAzMzIsMzI5LDMyNiwzMjMsMzIwLDMxOCwzMTUsMzEyLDMxMCwzMDcsMzA0LDMwMiwyOTksMjk3LDI5NCwyOTIsXG4gICAgMjg5LDI4NywyODUsMjgyLDI4MCwyNzgsMjc1LDI3MywyNzEsMjY5LDI2NywyNjUsMjYzLDI2MSwyNTldO1xuXG5cbnZhciBzaGdfdGFibGUgPSBbXG4gICAgOSwgMTEsIDEyLCAxMywgMTMsIDE0LCAxNCwgMTUsIDE1LCAxNSwgMTUsIDE2LCAxNiwgMTYsIDE2LCAxNyxcbiAgICAxNywgMTcsIDE3LCAxNywgMTcsIDE3LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOSxcbiAgICAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMjAsIDIwLCAyMCxcbiAgICAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMSxcbiAgICAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSxcbiAgICAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMixcbiAgICAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMixcbiAgICAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0IF07XG5cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlKGltZywgY2FudmFzLCByYWRpdXMsIGJsdXJBbHBoYUNoYW5uZWwpXG57XG4gICAgaWYgKHR5cGVvZihpbWcpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbWcpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTEltYWdlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWltZyBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdyA9IGltZy5uYXR1cmFsV2lkdGg7XG4gICAgdmFyIGggPSBpbWcubmF0dXJhbEhlaWdodDtcblxuICAgIGlmICh0eXBlb2YoY2FudmFzKSA9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSB3ICsgJ3B4JztcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG4gICAgY2FudmFzLndpZHRoID0gdztcbiAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcblxuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcblxuICAgIGlmIChibHVyQWxwaGFDaGFubmVsKVxuICAgICAgICBwcm9jZXNzQ2FudmFzUkdCQShjYW52YXMsIDAsIDAsIHcsIGgsIHJhZGl1cyk7XG4gICAgZWxzZVxuICAgICAgICBwcm9jZXNzQ2FudmFzUkdCKGNhbnZhcywgMCwgMCwgdywgaCwgcmFkaXVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodClcbntcbiAgICBpZiAodHlwZW9mKGNhbnZhcykgPT0gJ3N0cmluZycpXG4gICAgICAgIHZhciBjYW52YXMgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgaW1hZ2VEYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5hYmxlIHRvIGFjY2VzcyBsb2NhbCBpbWFnZSBkYXRhOiBcIiArIGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuYWJsZSB0byBhY2Nlc3MgaW1hZ2UgZGF0YTogXCIgKyBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2FudmFzUkdCQShjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcbiAgICByYWRpdXMgfD0gMDtcblxuICAgIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGltYWdlRGF0YSA9IHByb2Nlc3NJbWFnZURhdGFSR0JBKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlRGF0YVJHQkEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG5cbiAgICB2YXIgeCwgeSwgaSwgcCwgeXAsIHlpLCB5dywgcl9zdW0sIGdfc3VtLCBiX3N1bSwgYV9zdW0sXG4gICAgICAgIHJfb3V0X3N1bSwgZ19vdXRfc3VtLCBiX291dF9zdW0sIGFfb3V0X3N1bSxcbiAgICAgICAgcl9pbl9zdW0sIGdfaW5fc3VtLCBiX2luX3N1bSwgYV9pbl9zdW0sXG4gICAgICAgIHByLCBwZywgcGIsIHBhLCByYnM7XG5cbiAgICB2YXIgZGl2ID0gcmFkaXVzICsgcmFkaXVzICsgMTtcbiAgICB2YXIgdzQgPSB3aWR0aCA8PCAyO1xuICAgIHZhciB3aWR0aE1pbnVzMSAgPSB3aWR0aCAtIDE7XG4gICAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gICAgdmFyIHJhZGl1c1BsdXMxICA9IHJhZGl1cyArIDE7XG4gICAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuXG4gICAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgICBmb3IgKGkgPSAxOyBpIDwgZGl2OyBpKyspXG4gICAge1xuICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgICAgIGlmIChpID09IHJhZGl1c1BsdXMxKSB2YXIgc3RhY2tFbmQgPSBzdGFjaztcbiAgICB9XG4gICAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gICAgdmFyIHN0YWNrSW4gPSBudWxsO1xuICAgIHZhciBzdGFja091dCA9IG51bGw7XG5cbiAgICB5dyA9IHlpID0gMDtcblxuICAgIHZhciBtdWxfc3VtID0gbXVsX3RhYmxlW3JhZGl1c107XG4gICAgdmFyIHNoZ19zdW0gPSBzaGdfdGFibGVbcmFkaXVzXTtcblxuICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICB7XG4gICAgICAgIHJfaW5fc3VtID0gZ19pbl9zdW0gPSBiX2luX3N1bSA9IGFfaW5fc3VtID0gcl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gYV9zdW0gPSAwO1xuXG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuICAgICAgICBhX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYSA9IHBpeGVsc1t5aSszXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICAgICAgYV9zdW0gKz0gc3VtRmFjdG9yICogcGE7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjay5hID0gcGE7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpICsgKCh3aWR0aE1pbnVzMSA8IGkgPyB3aWR0aE1pbnVzMSA6IGkpIDw8IDIpO1xuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbcF0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbcCsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbcCsyXSkpICogcmJzO1xuICAgICAgICAgICAgYV9zdW0gKz0gKHN0YWNrLmEgPSAocGEgPSBwaXhlbHNbcCszXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSArPSBwYTtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cblxuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBpeGVsc1t5aSszXSA9IHBhID0gKGFfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIGlmIChwYSAhPSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpXSAgID0gKChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpKzFdID0gKChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpKzJdID0gKChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aV0gPSBwaXhlbHNbeWkrMV0gPSBwaXhlbHNbeWkrMl0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG4gICAgICAgICAgICBhX3N1bSAtPSBhX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcbiAgICAgICAgICAgIGFfb3V0X3N1bSAtPSBzdGFja0luLmE7XG5cbiAgICAgICAgICAgIHAgPSAgKHl3ICsgKChwID0geCArIHJhZGl1cyArIDEpIDwgd2lkdGhNaW51czEgPyBwIDogd2lkdGhNaW51czEpKSA8PCAyO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKTtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSk7XG4gICAgICAgICAgICBiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gKHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdKTtcblxuICAgICAgICAgICAgcl9zdW0gKz0gcl9pbl9zdW07XG4gICAgICAgICAgICBnX3N1bSArPSBnX2luX3N1bTtcbiAgICAgICAgICAgIGJfc3VtICs9IGJfaW5fc3VtO1xuICAgICAgICAgICAgYV9zdW0gKz0gYV9pbl9zdW07XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcbiAgICAgICAgICAgIGFfb3V0X3N1bSArPSAocGEgPSBzdGFja091dC5hKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gLT0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICB5dyArPSB3aWR0aDtcbiAgICB9XG5cblxuICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgIHtcbiAgICAgICAgZ19pbl9zdW0gPSBiX2luX3N1bSA9IGFfaW5fc3VtID0gcl9pbl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gYV9zdW0gPSByX3N1bSA9IDA7XG5cbiAgICAgICAgeWkgPSB4IDw8IDI7XG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuICAgICAgICBhX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYSA9IHBpeGVsc1t5aSszXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICAgICAgYV9zdW0gKz0gc3VtRmFjdG9yICogcGE7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjay5hID0gcGE7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB5cCA9IHdpZHRoO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcmFkaXVzOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHlpID0gKHlwICsgeCkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbeWldKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3lpKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1t5aSsyXSkpICogcmJzO1xuICAgICAgICAgICAgYV9zdW0gKz0gKHN0YWNrLmEgPSAocGEgPSBwaXhlbHNbeWkrM10pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcblxuICAgICAgICAgICAgaWYoaSA8IGhlaWdodE1pbnVzMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5cCArPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHlpID0geDtcbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpIDw8IDI7XG4gICAgICAgICAgICBwaXhlbHNbcCszXSA9IHBhID0gKGFfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIGlmIChwYSA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGEgPSAyNTUgLyBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcF0gICA9ICgocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twKzFdID0gKChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3ArMl0gPSAoKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3BdID0gcGl4ZWxzW3ArMV0gPSBwaXhlbHNbcCsyXSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcbiAgICAgICAgICAgIGFfc3VtIC09IGFfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgICAgICAgYV9vdXRfc3VtIC09IHN0YWNrSW4uYTtcblxuICAgICAgICAgICAgcCA9ICh4ICsgKCgocCA9IHkgKyByYWRpdXNQbHVzMSkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxKSAqIHdpZHRoKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pKTtcbiAgICAgICAgICAgIGJfc3VtICs9IChiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pKTtcbiAgICAgICAgICAgIGFfc3VtICs9IChhX2luX3N1bSArPSAoc3RhY2tJbi5hID0gcGl4ZWxzW3ArM10pKTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuICAgICAgICAgICAgYV9vdXRfc3VtICs9IChwYSA9IHN0YWNrT3V0LmEpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSAtPSBwYTtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2FudmFzUkdCKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuICAgIHJhZGl1cyB8PSAwO1xuXG4gICAgdmFyIGltYWdlRGF0YSA9IGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGltYWdlRGF0YSA9IHByb2Nlc3NJbWFnZURhdGFSR0IoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG5cbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3kpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuXG4gICAgdmFyIHgsIHksIGksIHAsIHlwLCB5aSwgeXcsIHJfc3VtLCBnX3N1bSwgYl9zdW0sXG4gICAgICAgIHJfb3V0X3N1bSwgZ19vdXRfc3VtLCBiX291dF9zdW0sXG4gICAgICAgIHJfaW5fc3VtLCBnX2luX3N1bSwgYl9pbl9zdW0sXG4gICAgICAgIHByLCBwZywgcGIsIHJicztcblxuICAgIHZhciBkaXYgPSByYWRpdXMgKyByYWRpdXMgKyAxO1xuICAgIHZhciB3NCA9IHdpZHRoIDw8IDI7XG4gICAgdmFyIHdpZHRoTWludXMxICA9IHdpZHRoIC0gMTtcbiAgICB2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcbiAgICB2YXIgcmFkaXVzUGx1czEgID0gcmFkaXVzICsgMTtcbiAgICB2YXIgc3VtRmFjdG9yID0gcmFkaXVzUGx1czEgKiAocmFkaXVzUGx1czEgKyAxKSAvIDI7XG5cbiAgICB2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICB2YXIgc3RhY2sgPSBzdGFja1N0YXJ0O1xuICAgIGZvciAoaSA9IDE7IGkgPCBkaXY7IGkrKylcbiAgICB7XG4gICAgICAgIHN0YWNrID0gc3RhY2submV4dCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICAgICAgaWYgKGkgPT0gcmFkaXVzUGx1czEpIHZhciBzdGFja0VuZCA9IHN0YWNrO1xuICAgIH1cbiAgICBzdGFjay5uZXh0ID0gc3RhY2tTdGFydDtcbiAgICB2YXIgc3RhY2tJbiA9IG51bGw7XG4gICAgdmFyIHN0YWNrT3V0ID0gbnVsbDtcblxuICAgIHl3ID0geWkgPSAwO1xuXG4gICAgdmFyIG11bF9zdW0gPSBtdWxfdGFibGVbcmFkaXVzXTtcbiAgICB2YXIgc2hnX3N1bSA9IHNoZ190YWJsZVtyYWRpdXNdO1xuXG4gICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgIHtcbiAgICAgICAgcl9pbl9zdW0gPSBnX2luX3N1bSA9IGJfaW5fc3VtID0gcl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gMDtcblxuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpKSA8PCAyKTtcbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3BdKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3ArMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3ArMl0pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcGl4ZWxzW3lpXSAgID0gKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1t5aSsxXSA9IChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbeWkrMl0gPSAoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcblxuICAgICAgICAgICAgcCA9ICAoeXcgKyAoKHAgPSB4ICsgcmFkaXVzICsgMSkgPCB3aWR0aE1pbnVzMSA/IHAgOiB3aWR0aE1pbnVzMSkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKTtcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSk7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IHJfaW5fc3VtO1xuICAgICAgICAgICAgZ19zdW0gKz0gZ19pbl9zdW07XG4gICAgICAgICAgICBiX3N1bSArPSBiX2luX3N1bTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICB5dyArPSB3aWR0aDtcbiAgICB9XG5cblxuICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgIHtcbiAgICAgICAgZ19pbl9zdW0gPSBiX2luX3N1bSA9IHJfaW5fc3VtID0gZ19zdW0gPSBiX3N1bSA9IHJfc3VtID0gMDtcblxuICAgICAgICB5aSA9IHggPDwgMjtcbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHlwID0gd2lkdGg7XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSByYWRpdXM7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgeWkgPSAoeXAgKyB4KSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1t5aV0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbeWkrMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3lpKzJdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuXG4gICAgICAgICAgICBpZihpIDwgaGVpZ2h0TWludXMxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHlwICs9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeWkgPSB4O1xuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgPDwgMjtcbiAgICAgICAgICAgIHBpeGVsc1twXSAgID0gKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1twKzFdID0gKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1twKzJdID0gKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG5cbiAgICAgICAgICAgIHAgPSAoeCArICgoKHAgPSB5ICsgcmFkaXVzUGx1czEpIDwgaGVpZ2h0TWludXMxID8gcCA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChyX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKSk7XG4gICAgICAgICAgICBiX3N1bSArPSAoYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKSk7XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IHdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gQmx1clN0YWNrKClcbntcbiAgICB0aGlzLnIgPSAwO1xuICAgIHRoaXMuZyA9IDA7XG4gICAgdGhpcy5iID0gMDtcbiAgICB0aGlzLmEgPSAwO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGltYWdlOiBwcm9jZXNzSW1hZ2UsXG4gICAgY2FudmFzUkdCQTogcHJvY2Vzc0NhbnZhc1JHQkEsXG4gICAgY2FudmFzUkdCOiBwcm9jZXNzQ2FudmFzUkdCLFxuICAgIGltYWdlRGF0YVJHQkE6IHByb2Nlc3NJbWFnZURhdGFSR0JBLFxuICAgIGltYWdlRGF0YVJHQjogcHJvY2Vzc0ltYWdlRGF0YVJHQlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=