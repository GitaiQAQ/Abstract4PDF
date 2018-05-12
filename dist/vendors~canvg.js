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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vbGlicy9jYW52Zy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vbGlicy9yZ2Jjb2xvci5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvc3RhY2tibHVyLWNhbnZhcy9zcmMvc3RhY2tibHVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQscURBQXFEO0FBQ3JELHNEQUFzRDtBQUN0RCxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJELDhEQUE4RDs7QUFFekg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdCQUF3QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsNEJBQTRCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0EsYUFBYTtBQUNiLHdFQUF3RTtBQUN4RSx1REFBdUQ7QUFDdkQ7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBLGFBQWE7QUFDYiw0Q0FBNEMsRUFBRSxxQ0FBcUM7QUFDbkYsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRDtBQUNBLCtDQUErQyx3QkFBd0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRO0FBQ3hDLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQixxQ0FBcUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGlDQUFpQztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRjs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtRUFBbUU7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNEJBQTRCO0FBQ3BFO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0EscUdBQXFHO0FBQ3JHLDBDQUEwQztBQUMxQyxzQ0FBc0M7QUFDdEMsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLHFEQUFxRDtBQUNyRCxtQ0FBbUMsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGlCQUFpQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsa0JBQWtCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQyxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtJQUFrSTtBQUNsSTs7QUFFQTtBQUNBLHFJQUFxSTtBQUNySTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQywyQkFBMkI7QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0EsK0JBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQix3QkFBd0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQztBQUFBLHFHOzs7Ozs7Ozs7Ozs7QUN6aEdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDhCQUE4Qiw0Q0FBNEM7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ3JRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsWUFBWTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGVBQWUsV0FBVztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ2ZW5kb3JzfmNhbnZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogY2FudmcuanMgLSBKYXZhc2NyaXB0IFNWRyBwYXJzZXIgYW5kIHJlbmRlcmVyIG9uIENhbnZhc1xyXG4gKiBNSVQgTGljZW5zZWRcclxuICogR2FiZSBMZXJuZXIgKGdhYmVsZXJuZXJAZ21haWwuY29tKVxyXG4gKiBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvY2FudmcvXHJcbiAqXHJcbiAqIFJlcXVpcmVzOiByZ2Jjb2xvci5qcyAtIGh0dHA6Ly93d3cucGhwaWVkLmNvbS9yZ2ItY29sb3ItcGFyc2VyLWluLWphdmFzY3JpcHQvXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5kZWZpbmUoJ2NhbnZnTW9kdWxlJywgWycuL3JnYmNvbG9yJywgJ3N0YWNrYmx1ci1jYW52YXMnXSwgZnVuY3Rpb24gKFJHQkNvbG9yLCBzdGFja0JsdXIpIHtcclxuICAgIC8vIGNhbnZnKHRhcmdldCwgcylcclxuICAgIC8vIGVtcHR5IHBhcmFtZXRlcnM6IHJlcGxhY2UgYWxsICdzdmcnIGVsZW1lbnRzIG9uIHBhZ2Ugd2l0aCAnY2FudmFzJyBlbGVtZW50c1xyXG4gICAgLy8gdGFyZ2V0OiBjYW52YXMgZWxlbWVudCBvciB0aGUgaWQgb2YgYSBjYW52YXMgZWxlbWVudFxyXG4gICAgLy8gczogc3ZnIHN0cmluZywgdXJsIHRvIHN2ZyBmaWxlLCBvciB4bWwgZG9jdW1lbnRcclxuICAgIC8vIG9wdHM6IG9wdGlvbmFsIGhhc2ggb2Ygb3B0aW9uc1xyXG4gICAgLy9cdFx0IGlnbm9yZU1vdXNlOiB0cnVlID0+IGlnbm9yZSBtb3VzZSBldmVudHNcclxuICAgIC8vXHRcdCBpZ25vcmVBbmltYXRpb246IHRydWUgPT4gaWdub3JlIGFuaW1hdGlvbnNcclxuICAgIC8vXHRcdCBpZ25vcmVEaW1lbnNpb25zOiB0cnVlID0+IGRvZXMgbm90IHRyeSB0byByZXNpemUgY2FudmFzXHJcbiAgICAvLyAgICAgICBpZ25vcmVDbGVhcjogdHJ1ZSA9PiBkb2VzIG5vdCBjbGVhciBjYW52YXNcclxuICAgIC8vICAgICAgIG9mZnNldFg6IGludCA9PiBkcmF3cyBhdCBhIHggb2Zmc2V0XHJcbiAgICAvL1x0XHQgb2Zmc2V0WTogaW50ID0+IGRyYXdzIGF0IGEgeSBvZmZzZXRcclxuICAgIC8vICAgICAgIHNjYWxlV2lkdGg6IGludCA9PiBzY2FsZXMgaG9yaXpvbnRhbGx5IHRvIHdpZHRoXHJcbiAgICAvLyAgICAgICBzY2FsZUhlaWdodDogaW50ID0+IHNjYWxlcyB2ZXJ0aWNhbGx5IHRvIGhlaWdodFxyXG4gICAgLy8gICAgICAgcmVuZGVyQ2FsbGJhY2s6IGZ1bmN0aW9uID0+IHdpbGwgY2FsbCB0aGUgZnVuY3Rpb24gYWZ0ZXIgdGhlIGZpcnN0IHJlbmRlciBpcyBjb21wbGV0ZWRcclxuICAgIC8vICAgICAgIGZvcmNlUmVkcmF3OiBmdW5jdGlvbiA9PiB3aWxsIGNhbGwgdGhlIGZ1bmN0aW9uIG9uIGV2ZXJ5IGZyYW1lLCBpZiBpdCByZXR1cm5zIHRydWUsIHdpbGwgcmVkcmF3XHJcbiAgICB2YXIgY2FudmcgPSBmdW5jdGlvbiBjYW52Zyh0YXJnZXQsIHMsIG9wdHMpIHtcclxuICAgICAgICAvLyBubyBwYXJhbWV0ZXJzXHJcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsICYmIHMgPT0gbnVsbCAmJiBvcHRzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIHN2Z1RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdmcnKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdmdUYWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3ZnVGFnID0gc3ZnVGFnc1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBjLndpZHRoID0gc3ZnVGFnLmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBzdmdUYWcuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgc3ZnVGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMsIHN2Z1RhZyk7XHJcbiAgICAgICAgICAgICAgICBzdmdUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdmdUYWcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN2Z1RhZyk7XHJcbiAgICAgICAgICAgICAgICBjYW52ZyhjLCBkaXYuaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RvcmUgY2xhc3Mgb24gY2FudmFzXHJcbiAgICAgICAgaWYgKHRhcmdldC5zdmcgIT0gbnVsbCkgdGFyZ2V0LnN2Zy5zdG9wKCk7XHJcbiAgICAgICAgdmFyIHN2ZyA9IGJ1aWxkKG9wdHMgfHwge30pO1xyXG4gICAgICAgIC8vIG9uIGkuZS4gOCBmb3IgZmxhc2ggY2FudmFzLCB3ZSBjYW4ndCBhc3NpZ24gdGhlIHByb3BlcnR5IHNvIGNoZWNrIGZvciBpdFxyXG4gICAgICAgIGlmICghKHRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aCA9PSAxICYmIHRhcmdldC5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lID09ICdPQkpFQ1QnKSkgdGFyZ2V0LnN2ZyA9IHN2ZztcclxuXHJcbiAgICAgICAgdmFyIGN0eCA9IHRhcmdldC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcy5kb2N1bWVudEVsZW1lbnQgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy8gbG9hZCBmcm9tIHhtbCBkb2NcclxuICAgICAgICAgICAgc3ZnLmxvYWRYbWxEb2MoY3R4LCBzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDEpID09ICc8Jykge1xyXG4gICAgICAgICAgICAvLyBsb2FkIGZyb20geG1sIHN0cmluZ1xyXG4gICAgICAgICAgICBzdmcubG9hZFhtbChjdHgsIHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGxvYWQgZnJvbSB1cmxcclxuICAgICAgICAgICAgc3ZnLmxvYWQoY3R4LCBzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC5tYXRjaGVzXHJcbiAgICB2YXIgbWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgaWYgKHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpO1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBtYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3Iobm9kZSwgc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLm1vek1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uIG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3Rvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5vTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZXF1aXJlcyBTaXp6bGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3dpa2kvU2l6emxlLURvY3VtZW50YXRpb25cclxuICAgICAgICAvLyBvciBqUXVlcnk6IGh0dHA6Ly9qcXVlcnkuY29tL2Rvd25sb2FkL1xyXG4gICAgICAgIC8vIG9yIFplcHRvOiBodHRwOi8vemVwdG9qcy5jb20vI1xyXG4gICAgICAgIC8vIHdpdGhvdXQgaXQsIHRoaXMgaXMgYSBSZWZlcmVuY2VFcnJvclxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgWmVwdG8gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKG5vZGUsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJChub2RlKS5pcyhzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG1hdGNoZXNTZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgbWF0Y2hlc1NlbGVjdG9yID0gU2l6emxlLm1hdGNoZXNTZWxlY3RvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2xpZ2h0bHkgbW9kaWZpZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2VlZ2Fuc3RyZWV0L3NwZWNpZmljaXR5L2Jsb2IvbWFzdGVyL3NwZWNpZmljaXR5LmpzXHJcbiAgICB2YXIgYXR0cmlidXRlUmVnZXggPSAvKFxcW1teXFxdXStcXF0pL2c7XHJcbiAgICB2YXIgaWRSZWdleCA9IC8oI1teXFxzXFwrPn5cXC5cXFs6XSspL2c7XHJcbiAgICB2YXIgY2xhc3NSZWdleCA9IC8oXFwuW15cXHNcXCs+flxcLlxcWzpdKykvZztcclxuICAgIHZhciBwc2V1ZG9FbGVtZW50UmVnZXggPSAvKDo6W15cXHNcXCs+flxcLlxcWzpdK3w6Zmlyc3QtbGluZXw6Zmlyc3QtbGV0dGVyfDpiZWZvcmV8OmFmdGVyKS9naTtcclxuICAgIHZhciBwc2V1ZG9DbGFzc1dpdGhCcmFja2V0c1JlZ2V4ID0gLyg6W1xcdy1dK1xcKFteXFwpXSpcXCkpL2dpO1xyXG4gICAgdmFyIHBzZXVkb0NsYXNzUmVnZXggPSAvKDpbXlxcc1xcKz5+XFwuXFxbOl0rKS9nO1xyXG4gICAgdmFyIGVsZW1lbnRSZWdleCA9IC8oW15cXHNcXCs+flxcLlxcWzpdKykvZztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RvclNwZWNpZmljaXR5KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIHR5cGVDb3VudCA9IFswLCAwLCAwXTtcclxuICAgICAgICB2YXIgZmluZE1hdGNoID0gZnVuY3Rpb24gZmluZE1hdGNoKHJlZ2V4LCB0eXBlKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gc2VsZWN0b3IubWF0Y2gocmVnZXgpO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHlwZUNvdW50W3R5cGVdICs9IG1hdGNoZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UocmVnZXgsICcgJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC86bm90XFwoKFteXFwpXSopXFwpL2csICcgICAgICQxICcpO1xyXG4gICAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgve1teXSovZ20sICcgJyk7XHJcbiAgICAgICAgZmluZE1hdGNoKGF0dHJpYnV0ZVJlZ2V4LCAxKTtcclxuICAgICAgICBmaW5kTWF0Y2goaWRSZWdleCwgMCk7XHJcbiAgICAgICAgZmluZE1hdGNoKGNsYXNzUmVnZXgsIDEpO1xyXG4gICAgICAgIGZpbmRNYXRjaChwc2V1ZG9FbGVtZW50UmVnZXgsIDIpO1xyXG4gICAgICAgIGZpbmRNYXRjaChwc2V1ZG9DbGFzc1dpdGhCcmFja2V0c1JlZ2V4LCAxKTtcclxuICAgICAgICBmaW5kTWF0Y2gocHNldWRvQ2xhc3NSZWdleCwgMSk7XHJcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC9bXFwqXFxzXFwrPn5dL2csICcgJyk7XHJcbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC9bI1xcLl0vZywgJyAnKTtcclxuICAgICAgICBmaW5kTWF0Y2goZWxlbWVudFJlZ2V4LCAyKTtcclxuICAgICAgICByZXR1cm4gdHlwZUNvdW50LmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ1aWxkKG9wdHMpIHtcclxuICAgICAgICB2YXIgc3ZnID0ge1xyXG4gICAgICAgICAgICBvcHRzOiBvcHRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3ZnLkZSQU1FUkFURSA9IDMwO1xyXG4gICAgICAgIHN2Zy5NQVhfVklSVFVBTF9QSVhFTFMgPSAzMDAwMDtcclxuXHJcbiAgICAgICAgc3ZnLmxvZyA9IGZ1bmN0aW9uIChtc2cpIHt9O1xyXG4gICAgICAgIGlmIChzdmcub3B0c1snbG9nJ10gPT0gdHJ1ZSAmJiB0eXBlb2YgY29uc29sZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBzdmcubG9nID0gZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdsb2JhbHNcclxuICAgICAgICBzdmcuaW5pdCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgdmFyIHVuaXF1ZUlkID0gMDtcclxuICAgICAgICAgICAgc3ZnLlVuaXF1ZUlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlSWQrKztcclxuICAgICAgICAgICAgICAgIHJldHVybiAnY2FudmcnICsgdW5pcXVlSWQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN2Zy5EZWZpbml0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBzdmcuU3R5bGVzID0ge307XHJcbiAgICAgICAgICAgIHN2Zy5TdHlsZXNTcGVjaWZpY2l0eSA9IHt9O1xyXG4gICAgICAgICAgICBzdmcuQW5pbWF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICBzdmcuSW1hZ2VzID0gW107XHJcbiAgICAgICAgICAgIHN2Zy5jdHggPSBjdHg7XHJcbiAgICAgICAgICAgIHN2Zy5WaWV3UG9ydCA9IG5ldyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdQb3J0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdQb3J0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0Q3VycmVudCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZUN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3UG9ydHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5DdXJyZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdQb3J0c1t0aGlzLnZpZXdQb3J0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkN1cnJlbnQoKS53aWR0aDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5DdXJyZW50KCkuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29tcHV0ZVNpemUgPSBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkICE9IG51bGwgJiYgdHlwZW9mIGQgPT0gJ251bWJlcicpIHJldHVybiBkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkID09ICd4JykgcmV0dXJuIHRoaXMud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZCA9PSAneScpIHJldHVybiB0aGlzLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codGhpcy53aWR0aCgpLCAyKSArIE1hdGgucG93KHRoaXMuaGVpZ2h0KCksIDIpKSAvIE1hdGguc3FydCgyKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0oKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuaW5pdCgpO1xyXG5cclxuICAgICAgICAvLyBpbWFnZXMgbG9hZGVkXHJcbiAgICAgICAgc3ZnLkltYWdlc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdmcuSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN2Zy5JbWFnZXNbaV0ubG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHRyaW1cclxuICAgICAgICBzdmcudHJpbSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBjb21wcmVzcyBzcGFjZXNcclxuICAgICAgICBzdmcuY29tcHJlc3NTcGFjZXMgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9bXFxzXFxyXFx0XFxuXSsvZ20sICcgJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWpheFxyXG4gICAgICAgIHN2Zy5hamF4ID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICB2YXIgQUpBWDtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgQUpBWCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQUpBWCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChBSkFYKSB7XHJcbiAgICAgICAgICAgICAgICBBSkFYLm9wZW4oJ0dFVCcsIHVybCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgQUpBWC5zZW5kKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEFKQVgucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHBhcnNlIHhtbFxyXG4gICAgICAgIHN2Zy5wYXJzZVhtbCA9IGZ1bmN0aW9uICh4bWwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBXaW5kb3dzICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBXaW5kb3dzLkRhdGEgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFdpbmRvd3MuRGF0YS5YbWwgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4bWxEb2MgPSBuZXcgV2luZG93cy5EYXRhLlhtbC5Eb20uWG1sRG9jdW1lbnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IG5ldyBXaW5kb3dzLkRhdGEuWG1sLkRvbS5YbWxMb2FkU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLnByb2hpYml0RHRkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB4bWxEb2MubG9hZFhtbCh4bWwsIHNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4bWxEb2M7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LkRPTVBhcnNlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgJ3RleHQveG1sJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB4bWwgPSB4bWwucmVwbGFjZSgvPCFET0NUWVBFIHN2Z1tePl0qPi8sICcnKTtcclxuICAgICAgICAgICAgICAgIHZhciB4bWxEb2MgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTERPTScpO1xyXG4gICAgICAgICAgICAgICAgeG1sRG9jLmFzeW5jID0gJ2ZhbHNlJztcclxuICAgICAgICAgICAgICAgIHhtbERvYy5sb2FkWE1MKHhtbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geG1sRG9jO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3ZnLlByb3BlcnR5ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmhhc1ZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPSBudWxsICYmIHRoaXMudmFsdWUgIT09ICcnO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgbnVtZXJpY2FsIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUubnVtVmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLnZhbHVlICsgJycpLm1hdGNoKC8lJC8pKSB7XHJcbiAgICAgICAgICAgICAgICBuID0gbiAvIDEwMC4wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUudmFsdWVPckRlZmF1bHQgPSBmdW5jdGlvbiAoZGVmKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKCkpIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUubnVtVmFsdWVPckRlZmF1bHQgPSBmdW5jdGlvbiAoZGVmKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKCkpIHJldHVybiB0aGlzLm51bVZhbHVlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWY7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY29sb3IgZXh0ZW5zaW9uc1xyXG4gICAgICAgIC8vIGF1Z21lbnQgdGhlIGN1cnJlbnQgY29sb3IgdmFsdWUgd2l0aCB0aGUgb3BhY2l0eVxyXG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUuYWRkT3BhY2l0eSA9IGZ1bmN0aW9uIChvcGFjaXR5UHJvcCkge1xyXG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAob3BhY2l0eVByb3AudmFsdWUgIT0gbnVsbCAmJiBvcGFjaXR5UHJvcC52YWx1ZSAhPSAnJyAmJiB0eXBlb2YgdGhpcy52YWx1ZSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2FuIG9ubHkgYWRkIG9wYWNpdHkgdG8gY29sb3JzLCBub3QgcGF0dGVybnNcclxuICAgICAgICAgICAgICAgIHZhciBjb2xvciA9IG5ldyBSR0JDb2xvcih0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvci5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gJ3JnYmEoJyArIGNvbG9yLnIgKyAnLCAnICsgY29sb3IuZyArICcsICcgKyBjb2xvci5iICsgJywgJyArIG9wYWNpdHlQcm9wLm51bVZhbHVlKCkgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuUHJvcGVydHkodGhpcy5uYW1lLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gZGVmaW5pdGlvbiBleHRlbnNpb25zXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBkZWZpbml0aW9uIGZyb20gdGhlIGRlZmluaXRpb25zIHRhYmxlXHJcbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS5nZXREZWZpbml0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMudmFsdWUubWF0Y2goLyMoW15cXCknXCJdKykvKTtcclxuICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN2Zy5EZWZpbml0aW9uc1tuYW1lXTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmlzVXJsRGVmaW5pdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuaW5kZXhPZigndXJsKCcpID09IDA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uID0gZnVuY3Rpb24gKGUsIG9wYWNpdHlQcm9wKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmdldERlZmluaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdyYWRpZW50XHJcbiAgICAgICAgICAgIGlmIChkZWYgIT0gbnVsbCAmJiBkZWYuY3JlYXRlR3JhZGllbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWYuY3JlYXRlR3JhZGllbnQoc3ZnLmN0eCwgZSwgb3BhY2l0eVByb3ApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBwYXR0ZXJuXHJcbiAgICAgICAgICAgIGlmIChkZWYgIT0gbnVsbCAmJiBkZWYuY3JlYXRlUGF0dGVybikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZi5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwdCA9IGRlZi5hdHRyaWJ1dGUoJ3BhdHRlcm5UcmFuc2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWYgPSBkZWYuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHQuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWYuYXR0cmlidXRlKCdwYXR0ZXJuVHJhbnNmb3JtJywgdHJ1ZSkudmFsdWUgPSBwdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmLmNyZWF0ZVBhdHRlcm4oc3ZnLmN0eCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGxlbmd0aCBleHRlbnNpb25zXHJcbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS5nZXREUEkgPSBmdW5jdGlvbiAodmlld1BvcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDk2LjA7IC8vIFRPRE86IGNvbXB1dGU/XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS5nZXRFTSA9IGZ1bmN0aW9uICh2aWV3UG9ydCkge1xyXG4gICAgICAgICAgICB2YXIgZW0gPSAxMjtcclxuXHJcbiAgICAgICAgICAgIHZhciBmb250U2l6ZSA9IG5ldyBzdmcuUHJvcGVydHkoJ2ZvbnRTaXplJywgc3ZnLkZvbnQuUGFyc2Uoc3ZnLmN0eC5mb250KS5mb250U2l6ZSk7XHJcbiAgICAgICAgICAgIGlmIChmb250U2l6ZS5oYXNWYWx1ZSgpKSBlbSA9IGZvbnRTaXplLnRvUGl4ZWxzKHZpZXdQb3J0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlbTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLmdldFVuaXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMudmFsdWUgKyAnJztcclxuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvWzAtOVxcLlxcLV0vZywgJycpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgbGVuZ3RoIGFzIHBpeGVsc1xyXG4gICAgICAgIHN2Zy5Qcm9wZXJ0eS5wcm90b3R5cGUudG9QaXhlbHMgPSBmdW5jdGlvbiAodmlld1BvcnQsIHByb2Nlc3NQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnZhbHVlICsgJyc7XHJcbiAgICAgICAgICAgIGlmIChzLm1hdGNoKC9lbSQvKSkgcmV0dXJuIHRoaXMubnVtVmFsdWUoKSAqIHRoaXMuZ2V0RU0odmlld1BvcnQpO1xyXG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvZXgkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiB0aGlzLmdldEVNKHZpZXdQb3J0KSAvIDIuMDtcclxuICAgICAgICAgICAgaWYgKHMubWF0Y2goL3B4JC8pKSByZXR1cm4gdGhpcy5udW1WYWx1ZSgpO1xyXG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvcHQkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiB0aGlzLmdldERQSSh2aWV3UG9ydCkgKiAoMS4wIC8gNzIuMCk7XHJcbiAgICAgICAgICAgIGlmIChzLm1hdGNoKC9wYyQvKSkgcmV0dXJuIHRoaXMubnVtVmFsdWUoKSAqIDE1O1xyXG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvY20kLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiB0aGlzLmdldERQSSh2aWV3UG9ydCkgLyAyLjU0O1xyXG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvbW0kLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiB0aGlzLmdldERQSSh2aWV3UG9ydCkgLyAyNS40O1xyXG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvaW4kLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiB0aGlzLmdldERQSSh2aWV3UG9ydCk7XHJcbiAgICAgICAgICAgIGlmIChzLm1hdGNoKC8lJC8pKSByZXR1cm4gdGhpcy5udW1WYWx1ZSgpICogc3ZnLlZpZXdQb3J0LkNvbXB1dGVTaXplKHZpZXdQb3J0KTtcclxuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLm51bVZhbHVlKCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzUGVyY2VudCAmJiBuIDwgMS4wKSByZXR1cm4gbiAqIHN2Zy5WaWV3UG9ydC5Db21wdXRlU2l6ZSh2aWV3UG9ydCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHRpbWUgZXh0ZW5zaW9uc1xyXG4gICAgICAgIC8vIGdldCB0aGUgdGltZSBhcyBtaWxsaXNlY29uZHNcclxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLnRvTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBzID0gdGhpcy52YWx1ZSArICcnO1xyXG4gICAgICAgICAgICBpZiAocy5tYXRjaCgvcyQvKSkgcmV0dXJuIHRoaXMubnVtVmFsdWUoKSAqIDEwMDA7XHJcbiAgICAgICAgICAgIGlmIChzLm1hdGNoKC9tcyQvKSkgcmV0dXJuIHRoaXMubnVtVmFsdWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtVmFsdWUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBhbmdsZSBleHRlbnNpb25zXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBhbmdsZSBhcyByYWRpYW5zXHJcbiAgICAgICAgc3ZnLlByb3BlcnR5LnByb3RvdHlwZS50b1JhZGlhbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnZhbHVlICsgJyc7XHJcbiAgICAgICAgICAgIGlmIChzLm1hdGNoKC9kZWckLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiAoTWF0aC5QSSAvIDE4MC4wKTtcclxuICAgICAgICAgICAgaWYgKHMubWF0Y2goL2dyYWQkLykpIHJldHVybiB0aGlzLm51bVZhbHVlKCkgKiAoTWF0aC5QSSAvIDIwMC4wKTtcclxuICAgICAgICAgICAgaWYgKHMubWF0Y2goL3JhZCQvKSkgcmV0dXJuIHRoaXMubnVtVmFsdWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtVmFsdWUoKSAqIChNYXRoLlBJIC8gMTgwLjApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHRleHQgZXh0ZW5zaW9uc1xyXG4gICAgICAgIC8vIGdldCB0aGUgdGV4dCBiYXNlbGluZVxyXG4gICAgICAgIHZhciB0ZXh0QmFzZWxpbmVNYXBwaW5nID0ge1xyXG4gICAgICAgICAgICAnYmFzZWxpbmUnOiAnYWxwaGFiZXRpYycsXHJcbiAgICAgICAgICAgICdiZWZvcmUtZWRnZSc6ICd0b3AnLFxyXG4gICAgICAgICAgICAndGV4dC1iZWZvcmUtZWRnZSc6ICd0b3AnLFxyXG4gICAgICAgICAgICAnbWlkZGxlJzogJ21pZGRsZScsXHJcbiAgICAgICAgICAgICdjZW50cmFsJzogJ21pZGRsZScsXHJcbiAgICAgICAgICAgICdhZnRlci1lZGdlJzogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICd0ZXh0LWFmdGVyLWVkZ2UnOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgJ2lkZW9ncmFwaGljJzogJ2lkZW9ncmFwaGljJyxcclxuICAgICAgICAgICAgJ2FscGhhYmV0aWMnOiAnYWxwaGFiZXRpYycsXHJcbiAgICAgICAgICAgICdoYW5naW5nJzogJ2hhbmdpbmcnLFxyXG4gICAgICAgICAgICAnbWF0aGVtYXRpY2FsJzogJ2FscGhhYmV0aWMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuUHJvcGVydHkucHJvdG90eXBlLnRvVGV4dEJhc2VsaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzVmFsdWUoKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0QmFzZWxpbmVNYXBwaW5nW3RoaXMudmFsdWVdO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGZvbnRzXHJcbiAgICAgICAgc3ZnLkZvbnQgPSBuZXcgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLlN0eWxlcyA9ICdub3JtYWx8aXRhbGljfG9ibGlxdWV8aW5oZXJpdCc7XHJcbiAgICAgICAgICAgIHRoaXMuVmFyaWFudHMgPSAnbm9ybWFsfHNtYWxsLWNhcHN8aW5oZXJpdCc7XHJcbiAgICAgICAgICAgIHRoaXMuV2VpZ2h0cyA9ICdub3JtYWx8Ym9sZHxib2xkZXJ8bGlnaHRlcnwxMDB8MjAwfDMwMHw0MDB8NTAwfDYwMHw3MDB8ODAwfDkwMHxpbmhlcml0JztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuQ3JlYXRlRm9udCA9IGZ1bmN0aW9uIChmb250U3R5bGUsIGZvbnRWYXJpYW50LCBmb250V2VpZ2h0LCBmb250U2l6ZSwgZm9udEZhbWlseSwgaW5oZXJpdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGYgPSBpbmhlcml0ICE9IG51bGwgPyB0aGlzLlBhcnNlKGluaGVyaXQpIDogdGhpcy5DcmVhdGVGb250KCcnLCAnJywgJycsICcnLCAnJywgc3ZnLmN0eC5mb250KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSB8fCBmLmZvbnRGYW1pbHksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGZvbnRTaXplIHx8IGYuZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBmb250U3R5bGUgfHwgZi5mb250U3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCB8fCBmLmZvbnRXZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFZhcmlhbnQ6IGZvbnRWYXJpYW50IHx8IGYuZm9udFZhcmlhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RoaXMuZm9udFN0eWxlLCB0aGlzLmZvbnRWYXJpYW50LCB0aGlzLmZvbnRXZWlnaHQsIHRoaXMuZm9udFNpemUsIHRoaXMuZm9udEZhbWlseV0uam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuUGFyc2UgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGYgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gc3ZnLnRyaW0oc3ZnLmNvbXByZXNzU3BhY2VzKHMgfHwgJycpKS5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmb250VmFyaWFudDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2YXIgZmYgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2V0LmZvbnRTdHlsZSAmJiB0aGF0LlN0eWxlcy5pbmRleE9mKGRbaV0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkW2ldICE9ICdpbmhlcml0JykgZi5mb250U3R5bGUgPSBkW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQuZm9udFN0eWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzZXQuZm9udFZhcmlhbnQgJiYgdGhhdC5WYXJpYW50cy5pbmRleE9mKGRbaV0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkW2ldICE9ICdpbmhlcml0JykgZi5mb250VmFyaWFudCA9IGRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldC5mb250U3R5bGUgPSBzZXQuZm9udFZhcmlhbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNldC5mb250V2VpZ2h0ICYmIHRoYXQuV2VpZ2h0cy5pbmRleE9mKGRbaV0pICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkW2ldICE9ICdpbmhlcml0JykgZi5mb250V2VpZ2h0ID0gZFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0LmZvbnRTdHlsZSA9IHNldC5mb250VmFyaWFudCA9IHNldC5mb250V2VpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzZXQuZm9udFNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRbaV0gIT0gJ2luaGVyaXQnKSBmLmZvbnRTaXplID0gZFtpXS5zcGxpdCgnLycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQuZm9udFN0eWxlID0gc2V0LmZvbnRWYXJpYW50ID0gc2V0LmZvbnRXZWlnaHQgPSBzZXQuZm9udFNpemUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkW2ldICE9ICdpbmhlcml0JykgZmYgKz0gZFtpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZmYgIT0gJycpIGYuZm9udEZhbWlseSA9IGZmO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSgpO1xyXG5cclxuICAgICAgICAvLyBwb2ludHMgYW5kIHBhdGhzXHJcbiAgICAgICAgc3ZnLlRvTnVtYmVyQXJyYXkgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICB2YXIgYSA9IHN2Zy50cmltKHN2Zy5jb21wcmVzc1NwYWNlcygocyB8fCAnJykucmVwbGFjZSgvLC9nLCAnICcpKSkuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhW2ldID0gcGFyc2VGbG9hdChhW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHN2Zy5Qb2ludC5wcm90b3R5cGUuYW5nbGVUbyA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHAueSAtIHRoaXMueSwgcC54IC0gdGhpcy54KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuUG9pbnQucHJvdG90eXBlLmFwcGx5VHJhbnNmb3JtID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgdmFyIHhwID0gdGhpcy54ICogdlswXSArIHRoaXMueSAqIHZbMl0gKyB2WzRdO1xyXG4gICAgICAgICAgICB2YXIgeXAgPSB0aGlzLnggKiB2WzFdICsgdGhpcy55ICogdlszXSArIHZbNV07XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHhwO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB5cDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuQ3JlYXRlUG9pbnQgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICB2YXIgYSA9IHN2Zy5Ub051bWJlckFycmF5KHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHN2Zy5Qb2ludChhWzBdLCBhWzFdKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuQ3JlYXRlUGF0aCA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHZhciBhID0gc3ZnLlRvTnVtYmVyQXJyYXkocyk7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKG5ldyBzdmcuUG9pbnQoYVtpXSwgYVtpICsgMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBib3VuZGluZyBib3hcclxuICAgICAgICBzdmcuQm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICAgICAgLy8gcGFzcyBpbiBpbml0aWFsIHBvaW50cyBpZiB5b3Ugd2FudFxyXG4gICAgICAgICAgICB0aGlzLngxID0gTnVtYmVyLk5hTjtcclxuICAgICAgICAgICAgdGhpcy55MSA9IE51bWJlci5OYU47XHJcbiAgICAgICAgICAgIHRoaXMueDIgPSBOdW1iZXIuTmFOO1xyXG4gICAgICAgICAgICB0aGlzLnkyID0gTnVtYmVyLk5hTjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMueCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLngxO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55MTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLngyIC0gdGhpcy54MTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy55MiAtIHRoaXMueTE7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4odGhpcy54MSkgfHwgaXNOYU4odGhpcy54MikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54MSA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueDIgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IHRoaXMueDEpIHRoaXMueDEgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID4gdGhpcy54MikgdGhpcy54MiA9IHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTih0aGlzLnkxKSB8fCBpc05hTih0aGlzLnkyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnkxID0geTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55MiA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh5IDwgdGhpcy55MSkgdGhpcy55MSA9IHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPiB0aGlzLnkyKSB0aGlzLnkyID0geTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hZGRYID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkUG9pbnQoeCwgbnVsbCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWRkWSA9IGZ1bmN0aW9uICh5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFBvaW50KG51bGwsIHkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRCb3VuZGluZ0JveCA9IGZ1bmN0aW9uIChiYikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludChiYi54MSwgYmIueTEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludChiYi54MiwgYmIueTIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRRdWFkcmF0aWNDdXJ2ZSA9IGZ1bmN0aW9uIChwMHgsIHAweSwgcDF4LCBwMXksIHAyeCwgcDJ5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3AxeCA9IHAweCArIDIgLyAzICogKHAxeCAtIHAweCk7IC8vIENQMSA9IFFQMCArIDIvMyAqKFFQMS1RUDApXHJcbiAgICAgICAgICAgICAgICB2YXIgY3AxeSA9IHAweSArIDIgLyAzICogKHAxeSAtIHAweSk7IC8vIENQMSA9IFFQMCArIDIvMyAqKFFQMS1RUDApXHJcbiAgICAgICAgICAgICAgICB2YXIgY3AyeCA9IGNwMXggKyAxIC8gMyAqIChwMnggLSBwMHgpOyAvLyBDUDIgPSBDUDEgKyAxLzMgKihRUDItUVAwKVxyXG4gICAgICAgICAgICAgICAgdmFyIGNwMnkgPSBjcDF5ICsgMSAvIDMgKiAocDJ5IC0gcDB5KTsgLy8gQ1AyID0gQ1AxICsgMS8zICooUVAyLVFQMClcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQmV6aWVyQ3VydmUocDB4LCBwMHksIGNwMXgsIGNwMngsIGNwMXksIGNwMnksIHAyeCwgcDJ5KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQmV6aWVyQ3VydmUgPSBmdW5jdGlvbiAocDB4LCBwMHksIHAxeCwgcDF5LCBwMngsIHAyeSwgcDN4LCBwM3kpIHtcclxuICAgICAgICAgICAgICAgIC8vIGZyb20gaHR0cDovL2Jsb2cuaGFja2Vycy1jYWZlLm5ldC8yMDA5LzA2L2hvdy10by1jYWxjdWxhdGUtYmV6aWVyLWN1cnZlcy1ib3VuZGluZy5odG1sXHJcbiAgICAgICAgICAgICAgICB2YXIgcDAgPSBbcDB4LCBwMHldLFxyXG4gICAgICAgICAgICAgICAgICAgIHAxID0gW3AxeCwgcDF5XSxcclxuICAgICAgICAgICAgICAgICAgICBwMiA9IFtwMngsIHAyeV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcDMgPSBbcDN4LCBwM3ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludChwMFswXSwgcDBbMV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludChwM1swXSwgcDNbMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmID0gZnVuY3Rpb24gZih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMykgKiBwMFtpXSArIDMgKiBNYXRoLnBvdygxIC0gdCwgMikgKiB0ICogcDFbaV0gKyAzICogKDEgLSB0KSAqIE1hdGgucG93KHQsIDIpICogcDJbaV0gKyBNYXRoLnBvdyh0LCAzKSAqIHAzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiID0gNiAqIHAwW2ldIC0gMTIgKiBwMVtpXSArIDYgKiBwMltpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IC0zICogcDBbaV0gKyA5ICogcDFbaV0gLSA5ICogcDJbaV0gKyAzICogcDNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSAzICogcDFbaV0gLSAzICogcDBbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIgPT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gLWMgLyBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA8IHQgJiYgdCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHRoaXMuYWRkWChmKHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDEpIHRoaXMuYWRkWShmKHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiMmFjID0gTWF0aC5wb3coYiwgMikgLSA0ICogYyAqIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIyYWMgPCAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdDEgPSAoLWIgKyBNYXRoLnNxcnQoYjJhYykpIC8gKDIgKiBhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoMCA8IHQxICYmIHQxIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB0aGlzLmFkZFgoZih0MSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB0aGlzLmFkZFkoZih0MSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdDIgPSAoLWIgLSBNYXRoLnNxcnQoYjJhYykpIC8gKDIgKiBhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoMCA8IHQyICYmIHQyIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB0aGlzLmFkZFgoZih0MikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB0aGlzLmFkZFkoZih0MikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNQb2ludEluQm94ID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLngxIDw9IHggJiYgeCA8PSB0aGlzLngyICYmIHRoaXMueTEgPD0geSAmJiB5IDw9IHRoaXMueTI7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFBvaW50KHgxLCB5MSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUG9pbnQoeDIsIHkyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyB0cmFuc2Zvcm1zXHJcbiAgICAgICAgc3ZnLlRyYW5zZm9ybSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5UeXBlID0ge307XHJcblxyXG4gICAgICAgICAgICAvLyB0cmFuc2xhdGVcclxuICAgICAgICAgICAgdGhpcy5UeXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnAgPSBzdmcuQ3JlYXRlUG9pbnQocyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wLnggfHwgMC4wLCB0aGlzLnAueSB8fCAwLjApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5hcHBseSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKC0xLjAgKiB0aGlzLnAueCB8fCAwLjAsIC0xLjAgKiB0aGlzLnAueSB8fCAwLjApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb1BvaW50ID0gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgICAgICBwLmFwcGx5VHJhbnNmb3JtKFsxLCAwLCAwLCAxLCB0aGlzLnAueCB8fCAwLjAsIHRoaXMucC55IHx8IDAuMF0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJvdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLlR5cGUucm90YXRlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gc3ZnLlRvTnVtYmVyQXJyYXkocyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnYW5nbGUnLCBhWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3ggPSBhWzFdIHx8IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN5ID0gYVsyXSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3gsIHRoaXMuY3kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZS50b1JhZGlhbnMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5jeCwgLXRoaXMuY3kpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5hcHBseSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMuY3gsIHRoaXMuY3kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5yb3RhdGUoLTEuMCAqIHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuY3gsIC10aGlzLmN5KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5VG9Qb2ludCA9IGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmFuZ2xlLnRvUmFkaWFucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHAuYXBwbHlUcmFuc2Zvcm0oWzEsIDAsIDAsIDEsIHRoaXMucC54IHx8IDAuMCwgdGhpcy5wLnkgfHwgMC4wXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5hcHBseVRyYW5zZm9ybShbTWF0aC5jb3MoYSksIE1hdGguc2luKGEpLCAtTWF0aC5zaW4oYSksIE1hdGguY29zKGEpLCAwLCAwXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcC5hcHBseVRyYW5zZm9ybShbMSwgMCwgMCwgMSwgLXRoaXMucC54IHx8IDAuMCwgLXRoaXMucC55IHx8IDAuMF0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVHlwZS5zY2FsZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnAgPSBzdmcuQ3JlYXRlUG9pbnQocyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zY2FsZSh0aGlzLnAueCB8fCAxLjAsIHRoaXMucC55IHx8IHRoaXMucC54IHx8IDEuMCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5zY2FsZSgxLjAgLyB0aGlzLnAueCB8fCAxLjAsIDEuMCAvIHRoaXMucC55IHx8IHRoaXMucC54IHx8IDEuMCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvUG9pbnQgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHAuYXBwbHlUcmFuc2Zvcm0oW3RoaXMucC54IHx8IDAuMCwgMCwgMCwgdGhpcy5wLnkgfHwgMC4wLCAwLCAwXSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5UeXBlLm1hdHJpeCA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm0gPSBzdmcuVG9OdW1iZXJBcnJheShzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSh0aGlzLm1bMF0sIHRoaXMubVsxXSwgdGhpcy5tWzJdLCB0aGlzLm1bM10sIHRoaXMubVs0XSwgdGhpcy5tWzVdKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuYXBwbHkgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLm1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLm1bMl07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLm1bNF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLm1bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLm1bM107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSB0aGlzLm1bNV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAxLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRldCA9IDEgLyAoYSAqIChlICogaSAtIGYgKiBoKSAtIGIgKiAoZCAqIGkgLSBmICogZykgKyBjICogKGQgKiBoIC0gZSAqIGcpKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKGRldCAqIChlICogaSAtIGYgKiBoKSwgZGV0ICogKGYgKiBnIC0gZCAqIGkpLCBkZXQgKiAoYyAqIGggLSBiICogaSksIGRldCAqIChhICogaSAtIGMgKiBnKSwgZGV0ICogKGIgKiBmIC0gYyAqIGUpLCBkZXQgKiAoYyAqIGQgLSBhICogZikpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb1BvaW50ID0gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgICAgICBwLmFwcGx5VHJhbnNmb3JtKHRoaXMubSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5UeXBlLlNrZXdCYXNlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZSA9IHRoYXQuVHlwZS5tYXRyaXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2Uocyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnYW5nbGUnLCBzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5UeXBlLlNrZXdCYXNlLnByb3RvdHlwZSA9IG5ldyB0aGlzLlR5cGUubWF0cml4KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlR5cGUuc2tld1ggPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlID0gdGhhdC5UeXBlLlNrZXdCYXNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlKHMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tID0gWzEsIDAsIE1hdGgudGFuKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLCAxLCAwLCAwXTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5UeXBlLnNrZXdYLnByb3RvdHlwZSA9IG5ldyB0aGlzLlR5cGUuU2tld0Jhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuVHlwZS5za2V3WSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UgPSB0aGF0LlR5cGUuU2tld0Jhc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2Uocyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm0gPSBbMSwgTWF0aC50YW4odGhpcy5hbmdsZS50b1JhZGlhbnMoKSksIDAsIDEsIDAsIDBdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLlR5cGUuc2tld1kucHJvdG90eXBlID0gbmV3IHRoaXMuVHlwZS5Ta2V3QmFzZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1zID0gW107XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyYW5zZm9ybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybXNbaV0uYXBwbHkoY3R4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudW5hcHBseSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyYW5zZm9ybXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybXNbaV0udW5hcHBseShjdHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcHBseVRvUG9pbnQgPSBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyYW5zZm9ybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybXNbaV0uYXBwbHlUb1BvaW50KHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBzdmcudHJpbShzdmcuY29tcHJlc3NTcGFjZXModikpLnJlcGxhY2UoL1xcKShbYS16QS1aXSkvZywgJykgJDEnKS5yZXBsYWNlKC9cXCkoXFxzPyxcXHM/KS9nLCAnKSAnKS5zcGxpdCgvXFxzKD89W2Etel0pLyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBzdmcudHJpbShkYXRhW2ldLnNwbGl0KCcoJylbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBkYXRhW2ldLnNwbGl0KCcoJylbMV0ucmVwbGFjZSgnKScsICcnKTtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm0gPSBuZXcgdGhpcy5UeXBlW3R5cGVdKHMpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1zLnB1c2godHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGFzcGVjdCByYXRpb1xyXG4gICAgICAgIHN2Zy5Bc3BlY3RSYXRpbyA9IGZ1bmN0aW9uIChjdHgsIGFzcGVjdFJhdGlvLCB3aWR0aCwgZGVzaXJlZFdpZHRoLCBoZWlnaHQsIGRlc2lyZWRIZWlnaHQsIG1pblgsIG1pblksIHJlZlgsIHJlZlkpIHtcclxuICAgICAgICAgICAgLy8gYXNwZWN0IHJhdGlvIC0gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHL2Nvb3Jkcy5odG1sI1ByZXNlcnZlQXNwZWN0UmF0aW9BdHRyaWJ1dGVcclxuICAgICAgICAgICAgYXNwZWN0UmF0aW8gPSBzdmcuY29tcHJlc3NTcGFjZXMoYXNwZWN0UmF0aW8pO1xyXG4gICAgICAgICAgICBhc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvLnJlcGxhY2UoL15kZWZlclxccy8sICcnKTsgLy8gaWdub3JlIGRlZmVyXHJcbiAgICAgICAgICAgIHZhciBhbGlnbiA9IGFzcGVjdFJhdGlvLnNwbGl0KCcgJylbMF0gfHwgJ3hNaWRZTWlkJztcclxuICAgICAgICAgICAgdmFyIG1lZXRPclNsaWNlID0gYXNwZWN0UmF0aW8uc3BsaXQoJyAnKVsxXSB8fCAnbWVldCc7XHJcblxyXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgc2NhbGVcclxuICAgICAgICAgICAgdmFyIHNjYWxlWCA9IHdpZHRoIC8gZGVzaXJlZFdpZHRoO1xyXG4gICAgICAgICAgICB2YXIgc2NhbGVZID0gaGVpZ2h0IC8gZGVzaXJlZEhlaWdodDtcclxuICAgICAgICAgICAgdmFyIHNjYWxlTWluID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgICAgICAgICB2YXIgc2NhbGVNYXggPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICAgICAgICAgIGlmIChtZWV0T3JTbGljZSA9PSAnbWVldCcpIHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRXaWR0aCAqPSBzY2FsZU1pbjtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRIZWlnaHQgKj0gc2NhbGVNaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1lZXRPclNsaWNlID09ICdzbGljZScpIHtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRXaWR0aCAqPSBzY2FsZU1heDtcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRIZWlnaHQgKj0gc2NhbGVNYXg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlZlggPSBuZXcgc3ZnLlByb3BlcnR5KCdyZWZYJywgcmVmWCk7XHJcbiAgICAgICAgICAgIHJlZlkgPSBuZXcgc3ZnLlByb3BlcnR5KCdyZWZZJywgcmVmWSk7XHJcbiAgICAgICAgICAgIGlmIChyZWZYLmhhc1ZhbHVlKCkgJiYgcmVmWS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKC1zY2FsZU1pbiAqIHJlZlgudG9QaXhlbHMoJ3gnKSwgLXNjYWxlTWluICogcmVmWS50b1BpeGVscygneScpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsaWduXHJcbiAgICAgICAgICAgICAgICBpZiAoYWxpZ24ubWF0Y2goL154TWlkLykgJiYgKG1lZXRPclNsaWNlID09ICdtZWV0JyAmJiBzY2FsZU1pbiA9PSBzY2FsZVkgfHwgbWVldE9yU2xpY2UgPT0gJ3NsaWNlJyAmJiBzY2FsZU1heCA9PSBzY2FsZVkpKSBjdHgudHJhbnNsYXRlKHdpZHRoIC8gMi4wIC0gZGVzaXJlZFdpZHRoIC8gMi4wLCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbGlnbi5tYXRjaCgvWU1pZCQvKSAmJiAobWVldE9yU2xpY2UgPT0gJ21lZXQnICYmIHNjYWxlTWluID09IHNjYWxlWCB8fCBtZWV0T3JTbGljZSA9PSAnc2xpY2UnICYmIHNjYWxlTWF4ID09IHNjYWxlWCkpIGN0eC50cmFuc2xhdGUoMCwgaGVpZ2h0IC8gMi4wIC0gZGVzaXJlZEhlaWdodCAvIDIuMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxpZ24ubWF0Y2goL154TWF4LykgJiYgKG1lZXRPclNsaWNlID09ICdtZWV0JyAmJiBzY2FsZU1pbiA9PSBzY2FsZVkgfHwgbWVldE9yU2xpY2UgPT0gJ3NsaWNlJyAmJiBzY2FsZU1heCA9PSBzY2FsZVkpKSBjdHgudHJhbnNsYXRlKHdpZHRoIC0gZGVzaXJlZFdpZHRoLCAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbGlnbi5tYXRjaCgvWU1heCQvKSAmJiAobWVldE9yU2xpY2UgPT0gJ21lZXQnICYmIHNjYWxlTWluID09IHNjYWxlWCB8fCBtZWV0T3JTbGljZSA9PSAnc2xpY2UnICYmIHNjYWxlTWF4ID09IHNjYWxlWCkpIGN0eC50cmFuc2xhdGUoMCwgaGVpZ2h0IC0gZGVzaXJlZEhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHNjYWxlXHJcbiAgICAgICAgICAgIGlmIChhbGlnbiA9PSAnbm9uZScpIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7ZWxzZSBpZiAobWVldE9yU2xpY2UgPT0gJ21lZXQnKSBjdHguc2NhbGUoc2NhbGVNaW4sIHNjYWxlTWluKTtlbHNlIGlmIChtZWV0T3JTbGljZSA9PSAnc2xpY2UnKSBjdHguc2NhbGUoc2NhbGVNYXgsIHNjYWxlTWF4KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKG1pblggPT0gbnVsbCA/IDAgOiAtbWluWCwgbWluWSA9PSBudWxsID8gMCA6IC1taW5ZKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBlbGVtZW50c1xyXG4gICAgICAgIHN2Zy5FbGVtZW50ID0ge307XHJcblxyXG4gICAgICAgIHN2Zy5FbXB0eVByb3BlcnR5ID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnRU1QVFknLCAnJyk7XHJcblxyXG4gICAgICAgIHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzU3BlY2lmaWNpdHkgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IG9yIGNyZWF0ZSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSBmdW5jdGlvbiAobmFtZSwgY3JlYXRlSWZOb3RFeGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcy5hdHRyaWJ1dGVzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEgIT0gbnVsbCkgcmV0dXJuIGE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZUlmTm90RXhpc3RzID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhID0gbmV3IHN2Zy5Qcm9wZXJ0eShuYW1lLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzW25hbWVdID0gYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhIHx8IHN2Zy5FbXB0eVByb3BlcnR5O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRIcmVmQXR0cmlidXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYSBpbiB0aGlzLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSA9PSAnaHJlZicgfHwgYS5tYXRjaCgvOmhyZWYkLykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1thXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ZnLkVtcHR5UHJvcGVydHk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgb3IgY3JlYXRlIHN0eWxlLCBjcmF3bHMgdXAgbm9kZSB0cmVlXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSBmdW5jdGlvbiAobmFtZSwgY3JlYXRlSWZOb3RFeGlzdHMsIHNraXBBbmNlc3RvcnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcy5zdHlsZXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAocyAhPSBudWxsKSByZXR1cm4gcztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRoaXMuYXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGEgIT0gbnVsbCAmJiBhLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tuYW1lXSA9IGE7IC8vIG1vdmUgdXAgdG8gbWUgdG8gY2FjaGVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2tpcEFuY2VzdG9ycyAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB0aGlzLnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcyA9IHAuc3R5bGUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcyAhPSBudWxsICYmIHBzLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlSWZOb3RFeGlzdHMgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBuZXcgc3ZnLlByb3BlcnR5KG5hbWUsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tuYW1lXSA9IHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcyB8fCBzdmcuRW1wdHlQcm9wZXJ0eTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJhc2UgcmVuZGVyXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgcmVuZGVyIGRpc3BsYXk9bm9uZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ2Rpc3BsYXknKS52YWx1ZSA9PSAnbm9uZScpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkb24ndCByZW5kZXIgdmlzaWJpbGl0eT1oaWRkZW5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCd2aXNpYmlsaXR5JykudmFsdWUgPT0gJ2hpZGRlbicpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdtYXNrJykuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hc2tcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWFzayA9IHRoaXMuYXR0cmlidXRlKCdtYXNrJykuZ2V0RGVmaW5pdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNrICE9IG51bGwpIG1hc2suYXBwbHkoY3R4LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHlsZSgnZmlsdGVyJykuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnN0eWxlKCdmaWx0ZXInKS5nZXREZWZpbml0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlciAhPSBudWxsKSBmaWx0ZXIuYXBwbHkoY3R4LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJDb250ZXh0KGN0eCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gYmFzZSBzZXQgY29udGV4dFxyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBPVkVSUklERSBNRSFcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJhc2UgY2xlYXIgY29udGV4dFxyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQ29udGV4dCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9WRVJSSURFIE1FIVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gYmFzZSByZW5kZXIgY2hpbGRyZW5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0ucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkTm9kZSwgY3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZE5vZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlKSBjaGlsZCA9IHN2Zy5DcmVhdGVFbGVtZW50KGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgIT0gJ3RpdGxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgc3R5bGVzXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBzdmcuU3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yWzBdICE9ICdAJyAmJiBtYXRjaGVzU2VsZWN0b3Iobm9kZSwgc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZXMgPSBzdmcuU3R5bGVzW3NlbGVjdG9yXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljaXR5ID0gc3ZnLlN0eWxlc1NwZWNpZmljaXR5W3NlbGVjdG9yXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1NwZWNpZmljaXR5ID0gdGhpcy5zdHlsZXNTcGVjaWZpY2l0eVtuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGV4aXN0aW5nU3BlY2lmaWNpdHkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdTcGVjaWZpY2l0eSA9ICcwMDAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWNpdHkgPiBleGlzdGluZ1NwZWNpZmljaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3R5bGVzW25hbWVdID0gc3R5bGVzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1NwZWNpZmljaXR5W25hbWVdID0gc3BlY2lmaWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGUgIT0gbnVsbCAmJiBub2RlLm5vZGVUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vRUxFTUVOVF9OT0RFXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgYXR0cmlidXRlc1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1thdHRyaWJ1dGUubm9kZU5hbWVdID0gbmV3IHN2Zy5Qcm9wZXJ0eShhdHRyaWJ1dGUubm9kZU5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGlubGluZSBzdHlsZXNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnc3R5bGUnKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlcyA9IHRoaXMuYXR0cmlidXRlKCdzdHlsZScpLnZhbHVlLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN2Zy50cmltKHN0eWxlc1tpXSkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IHN0eWxlc1tpXS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBzdmcudHJpbShzdHlsZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzdmcudHJpbShzdHlsZVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlc1tuYW1lXSA9IG5ldyBzdmcuUHJvcGVydHkobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkZCBpZFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdpZCcpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ZnLkRlZmluaXRpb25zW3RoaXMuYXR0cmlidXRlKCdpZCcpLnZhbHVlXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5EZWZpbml0aW9uc1t0aGlzLmF0dHJpYnV0ZSgnaWQnKS52YWx1ZV0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkTm9kZSA9IG5vZGUuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09IDEpIHRoaXMuYWRkQ2hpbGQoY2hpbGROb2RlLCB0cnVlKTsgLy9FTEVNRU5UX05PREVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXB0dXJlVGV4dE5vZGVzICYmIChjaGlsZE5vZGUubm9kZVR5cGUgPT0gMyB8fCBjaGlsZE5vZGUubm9kZVR5cGUgPT0gNCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBjaGlsZE5vZGUudmFsdWUgfHwgY2hpbGROb2RlLnRleHQgfHwgY2hpbGROb2RlLnRleHRDb250ZW50IHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ZnLmNvbXByZXNzU3BhY2VzKHRleHQpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKG5ldyBzdmcuRWxlbWVudC50c3BhbihjaGlsZE5vZGUpLCBmYWxzZSk7IC8vIFRFWFRfTk9ERVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmaWxsXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnZmlsbCcpLmlzVXJsRGVmaW5pdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZzID0gdGhpcy5zdHlsZSgnZmlsbCcpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcywgdGhpcy5zdHlsZSgnZmlsbC1vcGFjaXR5JykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmcyAhPSBudWxsKSBjdHguZmlsbFN0eWxlID0gZnM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3R5bGUoJ2ZpbGwnKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGxTdHlsZSA9IHRoaXMuc3R5bGUoJ2ZpbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbFN0eWxlLnZhbHVlID09ICdjdXJyZW50Q29sb3InKSBmaWxsU3R5bGUudmFsdWUgPSB0aGlzLnN0eWxlKCdjb2xvcicpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsU3R5bGUudmFsdWUgIT0gJ2luaGVyaXQnKSBjdHguZmlsbFN0eWxlID0gZmlsbFN0eWxlLnZhbHVlID09ICdub25lJyA/ICdyZ2JhKDAsMCwwLDApJyA6IGZpbGxTdHlsZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdmaWxsLW9wYWNpdHknKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGxTdHlsZSA9IG5ldyBzdmcuUHJvcGVydHkoJ2ZpbGwnLCBjdHguZmlsbFN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGUgPSBmaWxsU3R5bGUuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKCdmaWxsLW9wYWNpdHknKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxTdHlsZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzdHJva2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdzdHJva2UnKS5pc1VybERlZmluaXRpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmcyA9IHRoaXMuc3R5bGUoJ3N0cm9rZScpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcywgdGhpcy5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZzICE9IG51bGwpIGN0eC5zdHJva2VTdHlsZSA9IGZzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0eWxlKCdzdHJva2UnKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0cm9rZVN0eWxlID0gdGhpcy5zdHlsZSgnc3Ryb2tlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cm9rZVN0eWxlLnZhbHVlID09ICdjdXJyZW50Q29sb3InKSBzdHJva2VTdHlsZS52YWx1ZSA9IHRoaXMuc3R5bGUoJ2NvbG9yJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cm9rZVN0eWxlLnZhbHVlICE9ICdpbmhlcml0JykgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGUudmFsdWUgPT0gJ25vbmUnID8gJ3JnYmEoMCwwLDAsMCknIDogc3Ryb2tlU3R5bGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0cm9rZVN0eWxlID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnc3Ryb2tlJywgY3R4LnN0cm9rZVN0eWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlLmFkZE9wYWNpdHkodGhpcy5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnc3Ryb2tlLXdpZHRoJykuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdMaW5lV2lkdGggPSB0aGlzLnN0eWxlKCdzdHJva2Utd2lkdGgnKS50b1BpeGVscygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBuZXdMaW5lV2lkdGggPT0gMCA/IDAuMDAxIDogbmV3TGluZVdpZHRoOyAvLyBicm93c2VycyBkb24ndCByZXNwZWN0IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdzdHJva2UtbGluZWNhcCcpLmhhc1ZhbHVlKCkpIGN0eC5saW5lQ2FwID0gdGhpcy5zdHlsZSgnc3Ryb2tlLWxpbmVjYXAnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdzdHJva2UtbGluZWpvaW4nKS5oYXNWYWx1ZSgpKSBjdHgubGluZUpvaW4gPSB0aGlzLnN0eWxlKCdzdHJva2UtbGluZWpvaW4nKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdzdHJva2UtbWl0ZXJsaW1pdCcpLmhhc1ZhbHVlKCkpIGN0eC5taXRlckxpbWl0ID0gdGhpcy5zdHlsZSgnc3Ryb2tlLW1pdGVybGltaXQnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JykuaGFzVmFsdWUoKSAmJiB0aGlzLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JykudmFsdWUgIT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdhcHMgPSBzdmcuVG9OdW1iZXJBcnJheSh0aGlzLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3R4LnNldExpbmVEYXNoICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zZXRMaW5lRGFzaChnYXBzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdHgud2Via2l0TGluZURhc2ggIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LndlYmtpdExpbmVEYXNoID0gZ2FwcztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdHgubW96RGFzaCAhPSAndW5kZWZpbmVkJyAmJiAhKGdhcHMubGVuZ3RoID09IDEgJiYgZ2Fwc1swXSA9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW96RGFzaCA9IGdhcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5zdHlsZSgnc3Ryb2tlLWRhc2hvZmZzZXQnKS5udW1WYWx1ZU9yRGVmYXVsdCgxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN0eC5saW5lRGFzaE9mZnNldCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZURhc2hPZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY3R4LndlYmtpdExpbmVEYXNoT2Zmc2V0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC53ZWJraXRMaW5lRGFzaE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdHgubW96RGFzaE9mZnNldCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW96RGFzaE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZm9udFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdHguZm9udCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5mb250ID0gc3ZnLkZvbnQuQ3JlYXRlRm9udCh0aGlzLnN0eWxlKCdmb250LXN0eWxlJykudmFsdWUsIHRoaXMuc3R5bGUoJ2ZvbnQtdmFyaWFudCcpLnZhbHVlLCB0aGlzLnN0eWxlKCdmb250LXdlaWdodCcpLnZhbHVlLCB0aGlzLnN0eWxlKCdmb250LXNpemUnKS5oYXNWYWx1ZSgpID8gdGhpcy5zdHlsZSgnZm9udC1zaXplJykudG9QaXhlbHMoKSArICdweCcgOiAnJywgdGhpcy5zdHlsZSgnZm9udC1mYW1pbHknKS52YWx1ZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCd0cmFuc2Zvcm0nLCBmYWxzZSwgdHJ1ZSkuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm0gPSBuZXcgc3ZnLlRyYW5zZm9ybSh0aGlzLnN0eWxlKCd0cmFuc2Zvcm0nLCBmYWxzZSwgdHJ1ZSkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5hcHBseShjdHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNsaXBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgZmFsc2UsIHRydWUpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xpcCA9IHRoaXMuYXR0cmlidXRlKCdjbGlwLXBhdGgnLCBmYWxzZSwgdHJ1ZSkuZ2V0RGVmaW5pdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGlwICE9IG51bGwpIGNsaXAuYXBwbHkoY3R4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBvcGFjaXR5XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnb3BhY2l0eScpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLnN0eWxlKCdvcGFjaXR5JykubnVtVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuQm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGgoY3R4KTtcclxuICAgICAgICAgICAgICAgIHN2Zy5Nb3VzZS5jaGVja1BhdGgodGhpcywgY3R4KTtcclxuICAgICAgICAgICAgICAgIGlmIChjdHguZmlsbFN0eWxlICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ2ZpbGwtcnVsZScpLnZhbHVlT3JEZWZhdWx0KCdpbmhlcml0JykgIT0gJ2luaGVyaXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsKHRoaXMuc3R5bGUoJ2ZpbGwtcnVsZScpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdHguc3Ryb2tlU3R5bGUgIT0gJycpIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VycyA9IHRoaXMuZ2V0TWFya2VycygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlcnMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdtYXJrZXItc3RhcnQnKS5pc1VybERlZmluaXRpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFya2VyID0gdGhpcy5zdHlsZSgnbWFya2VyLXN0YXJ0JykuZ2V0RGVmaW5pdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIucmVuZGVyKGN0eCwgbWFya2Vyc1swXVswXSwgbWFya2Vyc1swXVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKCdtYXJrZXItbWlkJykuaXNVcmxEZWZpbml0aW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcmtlciA9IHRoaXMuc3R5bGUoJ21hcmtlci1taWQnKS5nZXREZWZpbml0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFya2Vycy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlci5yZW5kZXIoY3R4LCBtYXJrZXJzW2ldWzBdLCBtYXJrZXJzW2ldWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdHlsZSgnbWFya2VyLWVuZCcpLmlzVXJsRGVmaW5pdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSB0aGlzLnN0eWxlKCdtYXJrZXItZW5kJykuZ2V0RGVmaW5pdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIucmVuZGVyKGN0eCwgbWFya2Vyc1ttYXJrZXJzLmxlbmd0aCAtIDFdWzBdLCBtYXJrZXJzW21hcmtlcnMubGVuZ3RoIC0gMV1bMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXRoKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldE1hcmtlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBzdmcgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LnN2ZyA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUNsZWFyQ29udGV4dCA9IHRoaXMuY2xlYXJDb250ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQ29udGV4dCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZUNsZWFyQ29udGV4dChjdHgpO1xyXG4gICAgICAgICAgICAgICAgc3ZnLlZpZXdQb3J0LlJlbW92ZUN1cnJlbnQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVNldENvbnRleHQgPSB0aGlzLnNldENvbnRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWwgdmFsdWVzIGFuZCBkZWZhdWx0c1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwwLDAsMCknO1xyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSAnYnV0dCc7XHJcbiAgICAgICAgICAgICAgICBjdHgubGluZUpvaW4gPSAnbWl0ZXInO1xyXG4gICAgICAgICAgICAgICAgY3R4Lm1pdGVyTGltaXQgPSA0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdHguZm9udCAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZm9udCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGN0eC5jYW52YXMpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2VTZXRDb250ZXh0KGN0eCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyB2aWV3IHBvcnRcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGUoJ3gnKS5oYXNWYWx1ZSgpKSB0aGlzLmF0dHJpYnV0ZSgneCcsIHRydWUpLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGUoJ3knKS5oYXNWYWx1ZSgpKSB0aGlzLmF0dHJpYnV0ZSgneScsIHRydWUpLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoJ3gnKS50b1BpeGVscygneCcpLCB0aGlzLmF0dHJpYnV0ZSgneScpLnRvUGl4ZWxzKCd5JykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHN2Zy5WaWV3UG9ydC53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHN2Zy5WaWV3UG9ydC5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLmhhc1ZhbHVlKCkpIHRoaXMuYXR0cmlidXRlKCd3aWR0aCcsIHRydWUpLnZhbHVlID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZSgnaGVpZ2h0JykuaGFzVmFsdWUoKSkgdGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcsIHRydWUpLnZhbHVlID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJvb3QgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLnRvUGl4ZWxzKCd4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcpLnRvUGl4ZWxzKCd5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdyZWZYJykuaGFzVmFsdWUoKSAmJiB0aGlzLmF0dHJpYnV0ZSgncmVmWScpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IC10aGlzLmF0dHJpYnV0ZSgncmVmWCcpLnRvUGl4ZWxzKCd4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSAtdGhpcy5hdHRyaWJ1dGUoJ3JlZlknKS50b1BpeGVscygneScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdvdmVyZmxvdycpLnZhbHVlT3JEZWZhdWx0KCdoaWRkZW4nKSAhPSAndmlzaWJsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHdpZHRoLCB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4LCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jbGlwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3ZnLlZpZXdQb3J0LlNldEN1cnJlbnQod2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdmlld2JveFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd2aWV3Qm94JykuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWV3Qm94ID0gc3ZnLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoJ3ZpZXdCb3gnKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pblggPSB2aWV3Qm94WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5ZID0gdmlld0JveFsxXTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHZpZXdCb3hbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gdmlld0JveFszXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnLkFzcGVjdFJhdGlvKGN0eCwgdGhpcy5hdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nKS52YWx1ZSwgc3ZnLlZpZXdQb3J0LndpZHRoKCksIHdpZHRoLCBzdmcuVmlld1BvcnQuaGVpZ2h0KCksIGhlaWdodCwgbWluWCwgbWluWSwgdGhpcy5hdHRyaWJ1dGUoJ3JlZlgnKS52YWx1ZSwgdGhpcy5hdHRyaWJ1dGUoJ3JlZlknKS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN2Zy5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnLlZpZXdQb3J0LlNldEN1cnJlbnQodmlld0JveFsyXSwgdmlld0JveFszXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5zdmcucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gcmVjdCBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQucmVjdCA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmF0dHJpYnV0ZSgneCcpLnRvUGl4ZWxzKCd4Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMuYXR0cmlidXRlKCd5JykudG9QaXhlbHMoJ3knKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLnRvUGl4ZWxzKCd4Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcpLnRvUGl4ZWxzKCd5Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnggPSB0aGlzLmF0dHJpYnV0ZSgncngnKS50b1BpeGVscygneCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ5ID0gdGhpcy5hdHRyaWJ1dGUoJ3J5JykudG9QaXhlbHMoJ3knKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgncngnKS5oYXNWYWx1ZSgpICYmICF0aGlzLmF0dHJpYnV0ZSgncnknKS5oYXNWYWx1ZSgpKSByeSA9IHJ4O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdyeScpLmhhc1ZhbHVlKCkgJiYgIXRoaXMuYXR0cmlidXRlKCdyeCcpLmhhc1ZhbHVlKCkpIHJ4ID0gcnk7XHJcbiAgICAgICAgICAgICAgICByeCA9IE1hdGgubWluKHJ4LCB3aWR0aCAvIDIuMCk7XHJcbiAgICAgICAgICAgICAgICByeSA9IE1hdGgubWluKHJ5LCBoZWlnaHQgLyAyLjApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8oeCArIHJ4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJ4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJ4LCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHggKyByeCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJ4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuQm91bmRpbmdCb3goeCwgeSwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LnJlY3QucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBjaXJjbGUgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmNpcmNsZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN4ID0gdGhpcy5hdHRyaWJ1dGUoJ2N4JykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgIHZhciBjeSA9IHRoaXMuYXR0cmlidXRlKCdjeScpLnRvUGl4ZWxzKCd5Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMuYXR0cmlidXRlKCdyJykudG9QaXhlbHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmFyYyhjeCwgY3ksIHIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuQm91bmRpbmdCb3goY3ggLSByLCBjeSAtIHIsIGN4ICsgciwgY3kgKyByKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmNpcmNsZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIGVsbGlwc2UgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmVsbGlwc2UgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5QYXRoRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBLQVBQQSA9IDQgKiAoKE1hdGguc3FydCgyKSAtIDEpIC8gMyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnggPSB0aGlzLmF0dHJpYnV0ZSgncngnKS50b1BpeGVscygneCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ5ID0gdGhpcy5hdHRyaWJ1dGUoJ3J5JykudG9QaXhlbHMoJ3knKTtcclxuICAgICAgICAgICAgICAgIHZhciBjeCA9IHRoaXMuYXR0cmlidXRlKCdjeCcpLnRvUGl4ZWxzKCd4Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3kgPSB0aGlzLmF0dHJpYnV0ZSgnY3knKS50b1BpeGVscygneScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKGN4LCBjeSAtIHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhjeCArIEtBUFBBICogcngsIGN5IC0gcnksIGN4ICsgcngsIGN5IC0gS0FQUEEgKiByeSwgY3ggKyByeCwgY3kpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKGN4ICsgcngsIGN5ICsgS0FQUEEgKiByeSwgY3ggKyBLQVBQQSAqIHJ4LCBjeSArIHJ5LCBjeCwgY3kgKyByeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmJlemllckN1cnZlVG8oY3ggLSBLQVBQQSAqIHJ4LCBjeSArIHJ5LCBjeCAtIHJ4LCBjeSArIEtBUFBBICogcnksIGN4IC0gcngsIGN5KTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyhjeCAtIHJ4LCBjeSAtIEtBUFBBICogcnksIGN4IC0gS0FQUEEgKiByeCwgY3kgLSByeSwgY3gsIGN5IC0gcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHN2Zy5Cb3VuZGluZ0JveChjeCAtIHJ4LCBjeSAtIHJ5LCBjeCArIHJ4LCBjeSArIHJ5KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmVsbGlwc2UucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBsaW5lIGVsZW1lbnRcclxuICAgICAgICBzdmcuRWxlbWVudC5saW5lID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFBvaW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IHN2Zy5Qb2ludCh0aGlzLmF0dHJpYnV0ZSgneDEnKS50b1BpeGVscygneCcpLCB0aGlzLmF0dHJpYnV0ZSgneTEnKS50b1BpeGVscygneScpKSwgbmV3IHN2Zy5Qb2ludCh0aGlzLmF0dHJpYnV0ZSgneDInKS50b1BpeGVscygneCcpLCB0aGlzLmF0dHJpYnV0ZSgneTInKS50b1BpeGVscygneScpKV07XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRzID0gdGhpcy5nZXRQb2ludHMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8ocG9pbnRzWzFdLngsIHBvaW50c1sxXS55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHN2Zy5Cb3VuZGluZ0JveChwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnksIHBvaW50c1sxXS54LCBwb2ludHNbMV0ueSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldE1hcmtlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRzID0gdGhpcy5nZXRQb2ludHMoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gcG9pbnRzWzBdLmFuZ2xlVG8ocG9pbnRzWzFdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbW3BvaW50c1swXSwgYV0sIFtwb2ludHNbMV0sIGFdXTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmxpbmUucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBwb2x5bGluZSBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQucG9seWxpbmUgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5QYXRoRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gc3ZnLkNyZWF0ZVBhdGgodGhpcy5hdHRyaWJ1dGUoJ3BvaW50cycpLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJiID0gbmV3IHN2Zy5Cb3VuZGluZ0JveCh0aGlzLnBvaW50c1swXS54LCB0aGlzLnBvaW50c1swXS55KTtcclxuICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJiLmFkZFBvaW50KHRoaXMucG9pbnRzW2ldLngsIHRoaXMucG9pbnRzW2ldLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LCB0aGlzLnBvaW50c1tpXS55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBiYjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFya2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXJrZXJzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnMucHVzaChbdGhpcy5wb2ludHNbaV0sIHRoaXMucG9pbnRzW2ldLmFuZ2xlVG8odGhpcy5wb2ludHNbaSArIDFdKV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWFya2Vycy5wdXNoKFt0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXSwgbWFya2Vyc1ttYXJrZXJzLmxlbmd0aCAtIDFdWzFdXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFya2VycztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LnBvbHlsaW5lLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gcG9seWdvbiBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQucG9seWdvbiA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LnBvbHlsaW5lO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gdGhpcy5wYXRoO1xyXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmIgPSB0aGlzLmJhc2VQYXRoKGN0eCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnRzWzBdLngsIHRoaXMucG9pbnRzWzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBiYjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LnBvbHlnb24ucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LnBvbHlsaW5lKCk7XHJcblxyXG4gICAgICAgIC8vIHBhdGggZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LnBhdGggPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5QYXRoRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5hdHRyaWJ1dGUoJ2QnKS52YWx1ZTtcclxuICAgICAgICAgICAgLy8gVE9ETzogY29udmVydCB0byByZWFsIGxleGVyIGJhc2VkIG9uIGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL3BhdGhzLmh0bWwjUGF0aERhdGFCTkZcclxuICAgICAgICAgICAgZCA9IGQucmVwbGFjZSgvLC9nbSwgJyAnKTsgLy8gZ2V0IHJpZCBvZiBhbGwgY29tbWFzXHJcbiAgICAgICAgICAgIC8vIEFzIHRoZSBlbmQgb2YgYSBtYXRjaCBjYW4gYWxzbyBiZSB0aGUgc3RhcnQgb2YgdGhlIG5leHQgbWF0Y2gsIHdlIG5lZWQgdG8gcnVuIHRoaXMgcmVwbGFjZSB0d2ljZS5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGQgPSBkLnJlcGxhY2UoLyhbTW1aekxsSGhWdkNjU3NRcVR0QWFdKShbXlxcc10pL2dtLCAnJDEgJDInKTtcclxuICAgICAgICAgICAgfSAvLyBzdWZmaXggY29tbWFuZHMgd2l0aCBzcGFjZXNcclxuICAgICAgICAgICAgZCA9IGQucmVwbGFjZSgvKFteXFxzXSkoW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkvZ20sICckMSAkMicpOyAvLyBwcmVmaXggY29tbWFuZHMgd2l0aCBzcGFjZXNcclxuICAgICAgICAgICAgZCA9IGQucmVwbGFjZSgvKFswLTldKShbK1xcLV0pL2dtLCAnJDEgJDInKTsgLy8gc2VwYXJhdGUgZGlnaXRzIG9uICstIHNpZ25zXHJcbiAgICAgICAgICAgIC8vIEFnYWluLCB3ZSBuZWVkIHRvIHJ1biB0aGlzIHR3aWNlIHRvIGZpbmQgYWxsIG9jY3VyYW5jZXNcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGQgPSBkLnJlcGxhY2UoLyhcXC5bMC05XSopKFxcLikvZ20sICckMSAkMicpO1xyXG4gICAgICAgICAgICB9IC8vIHNlcGFyYXRlIGRpZ2l0cyB3aGVuIHRoZXkgc3RhcnQgd2l0aCBhIGNvbW1hXHJcbiAgICAgICAgICAgIGQgPSBkLnJlcGxhY2UoLyhbQWFdKFxccytbMC05XSspezN9KVxccysoWzAxXSlcXHMqKFswMV0pL2dtLCAnJDEgJDMgJDQgJyk7IC8vIHNob3J0aGFuZCBlbGxpcHRpY2FsIGFyYyBwYXRoIHN5bnRheFxyXG4gICAgICAgICAgICBkID0gc3ZnLmNvbXByZXNzU3BhY2VzKGQpOyAvLyBjb21wcmVzcyBtdWx0aXBsZSBzcGFjZXNcclxuICAgICAgICAgICAgZCA9IHN2Zy50cmltKGQpO1xyXG4gICAgICAgICAgICB0aGlzLlBhdGhQYXJzZXIgPSBuZXcgZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zID0gZC5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tYW5kID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0NvbW1hbmQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ID0gbmV3IHN2Zy5Qb2ludCgwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgc3ZnLlBvaW50KDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5ldyBzdmcuUG9pbnQoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmkgPj0gdGhpcy50b2tlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmRPckVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VuZCgpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pICsgMV0ubWF0Y2goL15bQS1aYS16XSQvKSAhPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVsYXRpdmVDb21tYW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb21tYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3YnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3EnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3onOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRva2VuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmldO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNjYWxhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmdldFRva2VuKCkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRDb21tYW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDb21tYW5kID0gdGhpcy5jb21tYW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWFuZCA9IHRoaXMuZ2V0VG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb2ludCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG5ldyBzdmcuUG9pbnQodGhpcy5nZXRTY2FsYXIoKSwgdGhpcy5nZXRTY2FsYXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUFic29sdXRlKHApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFzQ29udHJvbFBvaW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gdGhpcy5nZXRQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbCA9IHA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXNDdXJyZW50UG9pbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSB0aGlzLmdldFBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gcDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkgIT0gJ2MnICYmIHRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkgIT0gJ3MnICYmIHRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkgIT0gJ3EnICYmIHRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkgIT0gJ3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZWZsZWN0IHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgc3ZnLlBvaW50KDIgKiB0aGlzLmN1cnJlbnQueCAtIHRoaXMuY29udHJvbC54LCAyICogdGhpcy5jdXJyZW50LnkgLSB0aGlzLmNvbnRyb2wueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWFrZUFic29sdXRlID0gZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlbGF0aXZlQ29tbWFuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAueCArPSB0aGlzLmN1cnJlbnQueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC55ICs9IHRoaXMuY3VycmVudC55O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIgPSBmdW5jdGlvbiAocCwgZnJvbSwgcHJpb3JUbykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsYXN0IGFuZ2xlIGlzbid0IGZpbGxlZCBpbiBiZWNhdXNlIHdlIGRpZG4ndCBoYXZlIHRoaXMgcG9pbnQgeWV0IC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmlvclRvICE9IG51bGwgJiYgdGhpcy5hbmdsZXMubGVuZ3RoID4gMCAmJiB0aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGggLSAxXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5nbGVzW3RoaXMuYW5nbGVzLmxlbmd0aCAtIDFdID0gdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV0uYW5nbGVUbyhwcmlvclRvKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXJBbmdsZShwLCBmcm9tID09IG51bGwgPyBudWxsIDogZnJvbS5hbmdsZVRvKHApKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXJBbmdsZSA9IGZ1bmN0aW9uIChwLCBhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaChwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlcy5wdXNoKGEpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1hcmtlclBvaW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wb2ludHM7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNYXJrZXJBbmdsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmdsZXNbaV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmdsZXNbal0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlc1tpXSA9IHRoaXMuYW5nbGVzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVzO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfShkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcCA9IHRoaXMuUGF0aFBhcnNlcjtcclxuICAgICAgICAgICAgICAgIHBwLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGJiID0gbmV3IHN2Zy5Cb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIXBwLmlzRW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcC5uZXh0Q29tbWFuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocHAuY29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdNJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHBwLmdldEFzQ3VycmVudFBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXIocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRQb2ludChwLngsIHAueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIGN0eC5tb3ZlVG8ocC54LCBwLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHAuc3RhcnQgPSBwcC5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFwcC5pc0NvbW1hbmRPckVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBwcC5nZXRBc0N1cnJlbnRQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlcihwLCBwcC5zdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmIuYWRkUG9pbnQocC54LCBwLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmxpbmVUbyhwLngsIHAueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnTCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFwcC5pc0NvbW1hbmRPckVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBwcC5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gcHAuZ2V0QXNDdXJyZW50UG9pbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXIocCwgYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmIuYWRkUG9pbnQocC54LCBwLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmxpbmVUbyhwLngsIHAueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnSCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFwcC5pc0NvbW1hbmRPckVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1AgPSBuZXcgc3ZnLlBvaW50KChwcC5pc1JlbGF0aXZlQ29tbWFuZCgpID8gcHAuY3VycmVudC54IDogMCkgKyBwcC5nZXRTY2FsYXIoKSwgcHAuY3VycmVudC55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXIobmV3UCwgcHAuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHAuY3VycmVudCA9IG5ld1A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmIuYWRkUG9pbnQocHAuY3VycmVudC54LCBwcC5jdXJyZW50LnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmxpbmVUbyhwcC5jdXJyZW50LngsIHBwLmN1cnJlbnQueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3YnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFwcC5pc0NvbW1hbmRPckVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1AgPSBuZXcgc3ZnLlBvaW50KHBwLmN1cnJlbnQueCwgKHBwLmlzUmVsYXRpdmVDb21tYW5kKCkgPyBwcC5jdXJyZW50LnkgOiAwKSArIHBwLmdldFNjYWxhcigpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcC5hZGRNYXJrZXIobmV3UCwgcHAuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHAuY3VycmVudCA9IG5ld1A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmIuYWRkUG9pbnQocHAuY3VycmVudC54LCBwcC5jdXJyZW50LnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdHggIT0gbnVsbCkgY3R4LmxpbmVUbyhwcC5jdXJyZW50LngsIHBwLmN1cnJlbnQueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFwcC5pc0NvbW1hbmRPckVuZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnIgPSBwcC5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwMSA9IHBwLmdldFBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNudHJsID0gcHAuZ2V0QXNDb250cm9sUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3AgPSBwcC5nZXRBc0N1cnJlbnRQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlcihjcCwgY250cmwsIHAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRCZXppZXJDdXJ2ZShjdXJyLngsIGN1cnIueSwgcDEueCwgcDEueSwgY250cmwueCwgY250cmwueSwgY3AueCwgY3AueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBjbnRybC54LCBjbnRybC55LCBjcC54LCBjcC55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdTJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIXBwLmlzQ29tbWFuZE9yRW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyciA9IHBwLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAxID0gcHAuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNudHJsID0gcHAuZ2V0QXNDb250cm9sUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3AgPSBwcC5nZXRBc0N1cnJlbnRQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlcihjcCwgY250cmwsIHAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRCZXppZXJDdXJ2ZShjdXJyLngsIGN1cnIueSwgcDEueCwgcDEueSwgY250cmwueCwgY250cmwueSwgY3AueCwgY3AueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSBjdHguYmV6aWVyQ3VydmVUbyhwMS54LCBwMS55LCBjbnRybC54LCBjbnRybC55LCBjcC54LCBjcC55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdRJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIXBwLmlzQ29tbWFuZE9yRW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyciA9IHBwLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNudHJsID0gcHAuZ2V0QXNDb250cm9sUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3AgPSBwcC5nZXRBc0N1cnJlbnRQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlcihjcCwgY250cmwsIGNudHJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRRdWFkcmF0aWNDdXJ2ZShjdXJyLngsIGN1cnIueSwgY250cmwueCwgY250cmwueSwgY3AueCwgY3AueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSBjdHgucXVhZHJhdGljQ3VydmVUbyhjbnRybC54LCBjbnRybC55LCBjcC54LCBjcC55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIXBwLmlzQ29tbWFuZE9yRW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VyciA9IHBwLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNudHJsID0gcHAuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHAuY29udHJvbCA9IGNudHJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjcCA9IHBwLmdldEFzQ3VycmVudFBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHAuYWRkTWFya2VyKGNwLCBjbnRybCwgY250cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJiLmFkZFF1YWRyYXRpY0N1cnZlKGN1cnIueCwgY3Vyci55LCBjbnRybC54LCBjbnRybC55LCBjcC54LCBjcC55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKGNudHJsLngsIGNudHJsLnksIGNwLngsIGNwLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0EnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICghcHAuaXNDb21tYW5kT3JFbmQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyID0gcHAuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnggPSBwcC5nZXRTY2FsYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnkgPSBwcC5nZXRTY2FsYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeEF4aXNSb3RhdGlvbiA9IHBwLmdldFNjYWxhcigpICogKE1hdGguUEkgLyAxODAuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhcmdlQXJjRmxhZyA9IHBwLmdldFNjYWxhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzd2VlcEZsYWcgPSBwcC5nZXRTY2FsYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3AgPSBwcC5nZXRBc0N1cnJlbnRQb2ludCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJzaW9uIGZyb20gZW5kcG9pbnQgdG8gY2VudGVyIHBhcmFtZXRlcml6YXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9pbXBsbm90ZS5odG1sI0FyY0ltcGxlbWVudGF0aW9uTm90ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB4MScsIHkxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJycCA9IG5ldyBzdmcuUG9pbnQoTWF0aC5jb3MoeEF4aXNSb3RhdGlvbikgKiAoY3Vyci54IC0gY3AueCkgLyAyLjAgKyBNYXRoLnNpbih4QXhpc1JvdGF0aW9uKSAqIChjdXJyLnkgLSBjcC55KSAvIDIuMCwgLU1hdGguc2luKHhBeGlzUm90YXRpb24pICogKGN1cnIueCAtIGNwLngpIC8gMi4wICsgTWF0aC5jb3MoeEF4aXNSb3RhdGlvbikgKiAoY3Vyci55IC0gY3AueSkgLyAyLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkanVzdCByYWRpaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gTWF0aC5wb3coY3VycnAueCwgMikgLyBNYXRoLnBvdyhyeCwgMikgKyBNYXRoLnBvdyhjdXJycC55LCAyKSAvIE1hdGgucG93KHJ5LCAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnggKj0gTWF0aC5zcXJ0KGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeSAqPSBNYXRoLnNxcnQobCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN4JywgY3knXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSAobGFyZ2VBcmNGbGFnID09IHN3ZWVwRmxhZyA/IC0xIDogMSkgKiBNYXRoLnNxcnQoKE1hdGgucG93KHJ4LCAyKSAqIE1hdGgucG93KHJ5LCAyKSAtIE1hdGgucG93KHJ4LCAyKSAqIE1hdGgucG93KGN1cnJwLnksIDIpIC0gTWF0aC5wb3cocnksIDIpICogTWF0aC5wb3coY3VycnAueCwgMikpIC8gKE1hdGgucG93KHJ4LCAyKSAqIE1hdGgucG93KGN1cnJwLnksIDIpICsgTWF0aC5wb3cocnksIDIpICogTWF0aC5wb3coY3VycnAueCwgMikpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocykpIHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjcHAgPSBuZXcgc3ZnLlBvaW50KHMgKiByeCAqIGN1cnJwLnkgLyByeSwgcyAqIC1yeSAqIGN1cnJwLnggLyByeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3gsIGN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlbnRwID0gbmV3IHN2Zy5Qb2ludCgoY3Vyci54ICsgY3AueCkgLyAyLjAgKyBNYXRoLmNvcyh4QXhpc1JvdGF0aW9uKSAqIGNwcC54IC0gTWF0aC5zaW4oeEF4aXNSb3RhdGlvbikgKiBjcHAueSwgKGN1cnIueSArIGNwLnkpIC8gMi4wICsgTWF0aC5zaW4oeEF4aXNSb3RhdGlvbikgKiBjcHAueCArIE1hdGguY29zKHhBeGlzUm90YXRpb24pICogY3BwLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlY3RvciBtYWduaXR1ZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IGZ1bmN0aW9uIG0odikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHZbMF0sIDIpICsgTWF0aC5wb3codlsxXSwgMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmF0aW8gYmV0d2VlbiB0d28gdmVjdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gZnVuY3Rpb24gcih1LCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodVswXSAqIHZbMF0gKyB1WzFdICogdlsxXSkgLyAobSh1KSAqIG0odikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5nbGUgYmV0d2VlbiB0d28gdmVjdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gZnVuY3Rpb24gYSh1LCB2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodVswXSAqIHZbMV0gPCB1WzFdICogdlswXSA/IC0xIDogMSkgKiBNYXRoLmFjb3Mocih1LCB2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0aWFsIGFuZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGExID0gYShbMSwgMF0sIFsoY3VycnAueCAtIGNwcC54KSAvIHJ4LCAoY3VycnAueSAtIGNwcC55KSAvIHJ5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5nbGUgZGVsdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IFsoY3VycnAueCAtIGNwcC54KSAvIHJ4LCAoY3VycnAueSAtIGNwcC55KSAvIHJ5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdiA9IFsoLWN1cnJwLnggLSBjcHAueCkgLyByeCwgKC1jdXJycC55IC0gY3BwLnkpIC8gcnldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZCA9IGEodSwgdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIodSwgdikgPD0gLTEpIGFkID0gTWF0aC5QSTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocih1LCB2KSA+PSAxKSBhZCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBtYXJrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpciA9IDEgLSBzd2VlcEZsYWcgPyAxLjAgOiAtMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhaCA9IGExICsgZGlyICogKGFkIC8gMi4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFsZldheSA9IG5ldyBzdmcuUG9pbnQoY2VudHAueCArIHJ4ICogTWF0aC5jb3MoYWgpLCBjZW50cC55ICsgcnkgKiBNYXRoLnNpbihhaCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlckFuZ2xlKGhhbGZXYXksIGFoIC0gZGlyICogTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmFkZE1hcmtlckFuZ2xlKGNwLCBhaCAtIGRpciAqIE1hdGguUEkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYi5hZGRQb2ludChjcC54LCBjcC55KTsgLy8gVE9ETzogdGhpcyBpcyB0b28gbmFpdmUsIG1ha2UgaXQgYmV0dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gcnggPiByeSA/IHJ4IDogcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzeCA9IHJ4ID4gcnkgPyAxIDogcnggLyByeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN5ID0gcnggPiByeSA/IHJ5IC8gcnggOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZShjZW50cC54LCBjZW50cC55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJvdGF0ZSh4QXhpc1JvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNjYWxlKHN4LCBzeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5hcmMoMCwgMCwgciwgYTEsIGExICsgYWQsIDEgLSBzd2VlcEZsYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguc2NhbGUoMSAvIHN4LCAxIC8gc3kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHgucm90YXRlKC14QXhpc1JvdGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSgtY2VudHAueCwgLWNlbnRwLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdaJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAneic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4ICE9IG51bGwpIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwLmN1cnJlbnQgPSBwcC5zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJiO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRNYXJrZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50cyA9IHRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJQb2ludHMoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhbmdsZXMgPSB0aGlzLlBhdGhQYXJzZXIuZ2V0TWFya2VyQW5nbGVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vycy5wdXNoKFtwb2ludHNbaV0sIGFuZ2xlc1tpXV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcmtlcnM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5wYXRoLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gcGF0dGVybiBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQucGF0dGVybiA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBhdHRlcm4gPSBmdW5jdGlvbiAoY3R4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmF0dHJpYnV0ZSgnd2lkdGgnKS50b1BpeGVscygneCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuYXR0cmlidXRlKCdoZWlnaHQnKS50b1BpeGVscygneScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBtZSB1c2luZyBhIHRlbXBvcmFyeSBzdmcgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTdmcgPSBuZXcgc3ZnLkVsZW1lbnQuc3ZnKCk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3ZpZXdCb3gnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3ZpZXdCb3gnLCB0aGlzLmF0dHJpYnV0ZSgndmlld0JveCcpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1snd2lkdGgnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1snaGVpZ2h0J10gPSBuZXcgc3ZnLlByb3BlcnR5KCdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcclxuICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1sndHJhbnNmb3JtJ10gPSBuZXcgc3ZnLlByb3BlcnR5KCd0cmFuc2Zvcm0nLCB0aGlzLmF0dHJpYnV0ZSgncGF0dGVyblRyYW5zZm9ybScpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRlbXBTdmcuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgICAgICBjLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgICAgIHZhciBjY3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd4JykuaGFzVmFsdWUoKSAmJiB0aGlzLmF0dHJpYnV0ZSgneScpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjY3R4LnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZSgneCcpLnRvUGl4ZWxzKCd4JywgdHJ1ZSksIHRoaXMuYXR0cmlidXRlKCd5JykudG9QaXhlbHMoJ3knLCB0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgM3gzIGdyaWQgc28gd2hlbiB3ZSB0cmFuc2Zvcm0gdGhlcmUncyBubyB3aGl0ZSBzcGFjZSBvbiBlZGdlc1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IC0xOyB4IDw9IDE7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAtMTsgeSA8PSAxOyB5KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2N0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1sneCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgneCcsIHggKiBjLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzWyd5J10gPSBuZXcgc3ZnLlByb3BlcnR5KCd5JywgeSAqIGMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5yZW5kZXIoY2N0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjdHgucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gY3R4LmNyZWF0ZVBhdHRlcm4oYywgJ3JlcGVhdCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm47XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5wYXR0ZXJuLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBtYXJrZXIgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50Lm1hcmtlciA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhc2VSZW5kZXIgPSB0aGlzLnJlbmRlcjtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoY3R4LCBwb2ludCwgYW5nbGUpIHtcclxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ29yaWVudCcpLnZhbHVlT3JEZWZhdWx0KCdhdXRvJykgPT0gJ2F1dG8nKSBjdHgucm90YXRlKGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnbWFya2VyVW5pdHMnKS52YWx1ZU9yRGVmYXVsdCgnc3Ryb2tlV2lkdGgnKSA9PSAnc3Ryb2tlV2lkdGgnKSBjdHguc2NhbGUoY3R4LmxpbmVXaWR0aCwgY3R4LmxpbmVXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBtZSB1c2luZyBhIHRlbXBvcmFyeSBzdmcgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBTdmcgPSBuZXcgc3ZnLkVsZW1lbnQuc3ZnKCk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3ZpZXdCb3gnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3ZpZXdCb3gnLCB0aGlzLmF0dHJpYnV0ZSgndmlld0JveCcpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1sncmVmWCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgncmVmWCcsIHRoaXMuYXR0cmlidXRlKCdyZWZYJykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzWydyZWZZJ10gPSBuZXcgc3ZnLlByb3BlcnR5KCdyZWZZJywgdGhpcy5hdHRyaWJ1dGUoJ3JlZlknKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3dpZHRoJ10gPSBuZXcgc3ZnLlByb3BlcnR5KCd3aWR0aCcsIHRoaXMuYXR0cmlidXRlKCdtYXJrZXJXaWR0aCcpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1snaGVpZ2h0J10gPSBuZXcgc3ZnLlByb3BlcnR5KCdoZWlnaHQnLCB0aGlzLmF0dHJpYnV0ZSgnbWFya2VySGVpZ2h0JykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzWydmaWxsJ10gPSBuZXcgc3ZnLlByb3BlcnR5KCdmaWxsJywgdGhpcy5hdHRyaWJ1dGUoJ2ZpbGwnKS52YWx1ZU9yRGVmYXVsdCgnYmxhY2snKSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3N0cm9rZSddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnc3Ryb2tlJywgdGhpcy5hdHRyaWJ1dGUoJ3N0cm9rZScpLnZhbHVlT3JEZWZhdWx0KCdub25lJykpO1xyXG4gICAgICAgICAgICAgICAgdGVtcFN2Zy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICB0ZW1wU3ZnLnJlbmRlcihjdHgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ21hcmtlclVuaXRzJykudmFsdWVPckRlZmF1bHQoJ3N0cm9rZVdpZHRoJykgPT0gJ3N0cm9rZVdpZHRoJykgY3R4LnNjYWxlKDEgLyBjdHgubGluZVdpZHRoLCAxIC8gY3R4LmxpbmVXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ29yaWVudCcpLnZhbHVlT3JEZWZhdWx0KCdhdXRvJykgPT0gJ2F1dG8nKSBjdHgucm90YXRlKC1hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNsYXRlKC1wb2ludC54LCAtcG9pbnQueSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5tYXJrZXIucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIGRlZmluaXRpb25zIGVsZW1lbnRcclxuICAgICAgICBzdmcuRWxlbWVudC5kZWZzID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTk9PUFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuZGVmcy5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gYmFzZSBmb3IgZ3JhZGllbnRzXHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuR3JhZGllbnRCYXNlID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT0gJ3N0b3AnKSB0aGlzLnN0b3BzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEdyYWRpZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gT1ZFUlJJREUgTUUhXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50VW5pdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGUoJ2dyYWRpZW50VW5pdHMnKS52YWx1ZU9yRGVmYXVsdCgnb2JqZWN0Qm91bmRpbmdCb3gnKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdCA9IFsnZ3JhZGllbnRVbml0cyddO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lciA9IGZ1bmN0aW9uIChzdG9wc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlVG9Jbmhlcml0ID0gdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGUoYXR0cmlidXRlVG9Jbmhlcml0KS5oYXNWYWx1ZSgpICYmIHN0b3BzQ29udGFpbmVyLmF0dHJpYnV0ZShhdHRyaWJ1dGVUb0luaGVyaXQpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUoYXR0cmlidXRlVG9Jbmhlcml0LCB0cnVlKS52YWx1ZSA9IHN0b3BzQ29udGFpbmVyLmF0dHJpYnV0ZShhdHRyaWJ1dGVUb0luaGVyaXQpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR3JhZGllbnQgPSBmdW5jdGlvbiAoY3R4LCBlbGVtZW50LCBwYXJlbnRPcGFjaXR5UHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0b3BzQ29udGFpbmVyID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcHNDb250YWluZXIgPSB0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lcihzdG9wc0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFkZFBhcmVudE9wYWNpdHkgPSBmdW5jdGlvbiBhZGRQYXJlbnRPcGFjaXR5KGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE9wYWNpdHlQcm9wLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBuZXcgc3ZnLlByb3BlcnR5KCdjb2xvcicsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuYWRkT3BhY2l0eShwYXJlbnRPcGFjaXR5UHJvcCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGcgPSB0aGlzLmdldEdyYWRpZW50KGN0eCwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZyA9PSBudWxsKSByZXR1cm4gYWRkUGFyZW50T3BhY2l0eShzdG9wc0NvbnRhaW5lci5zdG9wc1tzdG9wc0NvbnRhaW5lci5zdG9wcy5sZW5ndGggLSAxXS5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0b3BzQ29udGFpbmVyLnN0b3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZy5hZGRDb2xvclN0b3Aoc3RvcHNDb250YWluZXIuc3RvcHNbaV0ub2Zmc2V0LCBhZGRQYXJlbnRPcGFjaXR5KHN0b3BzQ29udGFpbmVyLnN0b3BzW2ldLmNvbG9yKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdncmFkaWVudFRyYW5zZm9ybScpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgYXMgdHJhbnNmb3JtZWQgcGF0dGVybiBvbiB0ZW1wb3JhcnkgY2FudmFzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3RWaWV3ID0gc3ZnLlZpZXdQb3J0LnZpZXdQb3J0c1swXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBuZXcgc3ZnLkVsZW1lbnQucmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY3QuYXR0cmlidXRlc1sneCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgneCcsIC1zdmcuTUFYX1ZJUlRVQUxfUElYRUxTIC8gMy4wKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0LmF0dHJpYnV0ZXNbJ3knXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3knLCAtc3ZnLk1BWF9WSVJUVUFMX1BJWEVMUyAvIDMuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdC5hdHRyaWJ1dGVzWyd3aWR0aCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnd2lkdGgnLCBzdmcuTUFYX1ZJUlRVQUxfUElYRUxTKTtcclxuICAgICAgICAgICAgICAgICAgICByZWN0LmF0dHJpYnV0ZXNbJ2hlaWdodCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnaGVpZ2h0Jywgc3ZnLk1BWF9WSVJUVUFMX1BJWEVMUyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBncm91cCA9IG5ldyBzdmcuRWxlbWVudC5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAuYXR0cmlidXRlc1sndHJhbnNmb3JtJ10gPSBuZXcgc3ZnLlByb3BlcnR5KCd0cmFuc2Zvcm0nLCB0aGlzLmF0dHJpYnV0ZSgnZ3JhZGllbnRUcmFuc2Zvcm0nKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAuY2hpbGRyZW4gPSBbcmVjdF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wU3ZnID0gbmV3IHN2Zy5FbGVtZW50LnN2ZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1sneCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgneCcsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1sneSddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgneScsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1snd2lkdGgnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3dpZHRoJywgcm9vdFZpZXcud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1snaGVpZ2h0J10gPSBuZXcgc3ZnLlByb3BlcnR5KCdoZWlnaHQnLCByb290Vmlldy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuY2hpbGRyZW4gPSBbZ3JvdXBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGMud2lkdGggPSByb290Vmlldy53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBjLmhlaWdodCA9IHJvb3RWaWV3LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IGc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5yZW5kZXIodGVtcEN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBDdHguY3JlYXRlUGF0dGVybihjLCAnbm8tcmVwZWF0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGc7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5HcmFkaWVudEJhc2UucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIGxpbmVhciBncmFkaWVudCBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQubGluZWFyR3JhZGllbnQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5HcmFkaWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCd4MScpO1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaCgneTEnKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goJ3gyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCd5MicpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRHcmFkaWVudCA9IGZ1bmN0aW9uIChjdHgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYiA9IHRoaXMuZ3JhZGllbnRVbml0cygpID09ICdvYmplY3RCb3VuZGluZ0JveCcgPyBlbGVtZW50LmdldEJvdW5kaW5nQm94KCkgOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdHRyaWJ1dGUoJ3gxJykuaGFzVmFsdWUoKSAmJiAhdGhpcy5hdHRyaWJ1dGUoJ3kxJykuaGFzVmFsdWUoKSAmJiAhdGhpcy5hdHRyaWJ1dGUoJ3gyJykuaGFzVmFsdWUoKSAmJiAhdGhpcy5hdHRyaWJ1dGUoJ3kyJykuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlKCd4MScsIHRydWUpLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZSgneTEnLCB0cnVlKS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUoJ3gyJywgdHJ1ZSkudmFsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlKCd5MicsIHRydWUpLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgeDEgPSB0aGlzLmdyYWRpZW50VW5pdHMoKSA9PSAnb2JqZWN0Qm91bmRpbmdCb3gnID8gYmIueCgpICsgYmIud2lkdGgoKSAqIHRoaXMuYXR0cmlidXRlKCd4MScpLm51bVZhbHVlKCkgOiB0aGlzLmF0dHJpYnV0ZSgneDEnKS50b1BpeGVscygneCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHkxID0gdGhpcy5ncmFkaWVudFVuaXRzKCkgPT0gJ29iamVjdEJvdW5kaW5nQm94JyA/IGJiLnkoKSArIGJiLmhlaWdodCgpICogdGhpcy5hdHRyaWJ1dGUoJ3kxJykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCd5MScpLnRvUGl4ZWxzKCd5Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgeDIgPSB0aGlzLmdyYWRpZW50VW5pdHMoKSA9PSAnb2JqZWN0Qm91bmRpbmdCb3gnID8gYmIueCgpICsgYmIud2lkdGgoKSAqIHRoaXMuYXR0cmlidXRlKCd4MicpLm51bVZhbHVlKCkgOiB0aGlzLmF0dHJpYnV0ZSgneDInKS50b1BpeGVscygneCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHkyID0gdGhpcy5ncmFkaWVudFVuaXRzKCkgPT0gJ29iamVjdEJvdW5kaW5nQm94JyA/IGJiLnkoKSArIGJiLmhlaWdodCgpICogdGhpcy5hdHRyaWJ1dGUoJ3kyJykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCd5MicpLnRvUGl4ZWxzKCd5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHgxID09IHgyICYmIHkxID09IHkyKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeDEsIHkxLCB4MiwgeTIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQubGluZWFyR3JhZGllbnQucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkdyYWRpZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyByYWRpYWwgZ3JhZGllbnQgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LnJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuR3JhZGllbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaCgnY3gnKTtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goJ2N5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCdyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKCdmeCcpO1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaCgnZnknKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0R3JhZGllbnQgPSBmdW5jdGlvbiAoY3R4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmIgPSBlbGVtZW50LmdldEJvdW5kaW5nQm94KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZSgnY3gnKS5oYXNWYWx1ZSgpKSB0aGlzLmF0dHJpYnV0ZSgnY3gnLCB0cnVlKS52YWx1ZSA9ICc1MCUnO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZSgnY3knKS5oYXNWYWx1ZSgpKSB0aGlzLmF0dHJpYnV0ZSgnY3knLCB0cnVlKS52YWx1ZSA9ICc1MCUnO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZSgncicpLmhhc1ZhbHVlKCkpIHRoaXMuYXR0cmlidXRlKCdyJywgdHJ1ZSkudmFsdWUgPSAnNTAlJztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY3ggPSB0aGlzLmdyYWRpZW50VW5pdHMoKSA9PSAnb2JqZWN0Qm91bmRpbmdCb3gnID8gYmIueCgpICsgYmIud2lkdGgoKSAqIHRoaXMuYXR0cmlidXRlKCdjeCcpLm51bVZhbHVlKCkgOiB0aGlzLmF0dHJpYnV0ZSgnY3gnKS50b1BpeGVscygneCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGN5ID0gdGhpcy5ncmFkaWVudFVuaXRzKCkgPT0gJ29iamVjdEJvdW5kaW5nQm94JyA/IGJiLnkoKSArIGJiLmhlaWdodCgpICogdGhpcy5hdHRyaWJ1dGUoJ2N5JykubnVtVmFsdWUoKSA6IHRoaXMuYXR0cmlidXRlKCdjeScpLnRvUGl4ZWxzKCd5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZ4ID0gY3g7XHJcbiAgICAgICAgICAgICAgICB2YXIgZnkgPSBjeTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnZngnKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnggPSB0aGlzLmdyYWRpZW50VW5pdHMoKSA9PSAnb2JqZWN0Qm91bmRpbmdCb3gnID8gYmIueCgpICsgYmIud2lkdGgoKSAqIHRoaXMuYXR0cmlidXRlKCdmeCcpLm51bVZhbHVlKCkgOiB0aGlzLmF0dHJpYnV0ZSgnZngnKS50b1BpeGVscygneCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCdmeScpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmeSA9IHRoaXMuZ3JhZGllbnRVbml0cygpID09ICdvYmplY3RCb3VuZGluZ0JveCcgPyBiYi55KCkgKyBiYi5oZWlnaHQoKSAqIHRoaXMuYXR0cmlidXRlKCdmeScpLm51bVZhbHVlKCkgOiB0aGlzLmF0dHJpYnV0ZSgnZnknKS50b1BpeGVscygneScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5ncmFkaWVudFVuaXRzKCkgPT0gJ29iamVjdEJvdW5kaW5nQm94JyA/IChiYi53aWR0aCgpICsgYmIuaGVpZ2h0KCkpIC8gMi4wICogdGhpcy5hdHRyaWJ1dGUoJ3InKS5udW1WYWx1ZSgpIDogdGhpcy5hdHRyaWJ1dGUoJ3InKS50b1BpeGVscygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoZngsIGZ5LCAwLCBjeCwgY3ksIHIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQucmFkaWFsR3JhZGllbnQucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkdyYWRpZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBncmFkaWVudCBzdG9wIGVsZW1lbnRcclxuICAgICAgICBzdmcuRWxlbWVudC5zdG9wID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5hdHRyaWJ1dGUoJ29mZnNldCcpLm51bVZhbHVlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldCA8IDApIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0ID4gMSkgdGhpcy5vZmZzZXQgPSAxO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0b3BDb2xvciA9IHRoaXMuc3R5bGUoJ3N0b3AtY29sb3InLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHN0b3BDb2xvci52YWx1ZSA9PT0gJycpIHN0b3BDb2xvci52YWx1ZSA9ICcjMDAwJztcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3R5bGUoJ3N0b3Atb3BhY2l0eScpLmhhc1ZhbHVlKCkpIHN0b3BDb2xvciA9IHN0b3BDb2xvci5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoJ3N0b3Atb3BhY2l0eScpKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IHN0b3BDb2xvci52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LnN0b3AucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIGFuaW1hdGlvbiBiYXNlIGVsZW1lbnRcclxuICAgICAgICBzdmcuRWxlbWVudC5BbmltYXRlQmFzZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICBzdmcuQW5pbWF0aW9ucy5wdXNoKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMDtcclxuICAgICAgICAgICAgdGhpcy5iZWdpbiA9IHRoaXMuYXR0cmlidXRlKCdiZWdpbicpLnRvTWlsbGlzZWNvbmRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RHVyYXRpb24gPSB0aGlzLmJlZ2luICsgdGhpcy5hdHRyaWJ1dGUoJ2R1cicpLnRvTWlsbGlzZWNvbmRzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFByb3BlcnR5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZVR5cGUgPSB0aGlzLmF0dHJpYnV0ZSgnYXR0cmlidXRlVHlwZScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSB0aGlzLmF0dHJpYnV0ZSgnYXR0cmlidXRlTmFtZScpLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVUeXBlID09ICdDU1MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LnN0eWxlKGF0dHJpYnV0ZU5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVW5pdHMgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbGNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9WRVJSSURFIE1FIVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBpbml0aWFsIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbFVuaXRzID0gdGhpcy5nZXRQcm9wZXJ0eSgpLmdldFVuaXRzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UncmUgcGFzdCB0aGUgZW5kIHRpbWVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmR1cmF0aW9uID4gdGhpcy5tYXhEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgZm9yIGluZGVmaW5pdGVseSByZXBlYXRpbmcgYW5pbWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgncmVwZWF0Q291bnQnKS52YWx1ZSA9PSAnaW5kZWZpbml0ZScgfHwgdGhpcy5hdHRyaWJ1dGUoJ3JlcGVhdER1cicpLnZhbHVlID09ICdpbmRlZmluaXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hdHRyaWJ1dGUoJ2ZpbGwnKS52YWx1ZU9yRGVmYXVsdCgncmVtb3ZlJykgPT0gJ2ZyZWV6ZScgJiYgIXRoaXMuZnJvemVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuVmFsdWUgPSB0aGlzLmdldFByb3BlcnR5KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF0dHJpYnV0ZSgnZmlsbCcpLnZhbHVlT3JEZWZhdWx0KCdyZW1vdmUnKSA9PSAncmVtb3ZlJyAmJiAhdGhpcy5yZW1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZSA9IHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plbiA/IHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlIDogdGhpcy5pbml0aWFsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5kdXJhdGlvbiArIGRlbHRhO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHdlJ3JlIHBhc3QgdGhlIGJlZ2luIHRpbWVcclxuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZWdpbiA8IHRoaXMuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNhbGNWYWx1ZSgpOyAvLyB0d2VlblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ3R5cGUnKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciB0cmFuc2Zvcm0sIGV0Yy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0aGlzLmF0dHJpYnV0ZSgndHlwZScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHR5cGUgKyAnKCcgKyBuZXdWYWx1ZSArICcpJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mcm9tID0gdGhpcy5hdHRyaWJ1dGUoJ2Zyb20nKTtcclxuICAgICAgICAgICAgdGhpcy50byA9IHRoaXMuYXR0cmlidXRlKCd0bycpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuYXR0cmlidXRlKCd2YWx1ZXMnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc1ZhbHVlKCkpIHRoaXMudmFsdWVzLnZhbHVlID0gdGhpcy52YWx1ZXMudmFsdWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZyYWN0aW9uIG9mIGR1cmF0aW9uIHdlJ3ZlIGNvdmVyZWRcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6ICh0aGlzLmR1cmF0aW9uIC0gdGhpcy5iZWdpbikgLyAodGhpcy5tYXhEdXJhdGlvbiAtIHRoaXMuYmVnaW4pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IHJldC5wcm9ncmVzcyAqICh0aGlzLnZhbHVlcy52YWx1ZS5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGIgPSBNYXRoLmZsb29yKHApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1YiA9IE1hdGguY2VpbChwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXQuZnJvbSA9IG5ldyBzdmcuUHJvcGVydHkoJ2Zyb20nLCBwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW2xiXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldC50byA9IG5ldyBzdmcuUHJvcGVydHkoJ3RvJywgcGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVt1Yl0pKTtcclxuICAgICAgICAgICAgICAgICAgICByZXQucHJvZ3Jlc3MgPSAocCAtIGxiKSAvICh1YiAtIGxiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LmZyb20gPSB0aGlzLmZyb207XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRvID0gdGhpcy50bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5BbmltYXRlQmFzZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gYW5pbWF0ZSBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuYW5pbWF0ZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkFuaW1hdGVCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbGNWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwID0gdGhpcy5wcm9ncmVzcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHR3ZWVuIHZhbHVlIGxpbmVhcmx5XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBwLmZyb20ubnVtVmFsdWUoKSArIChwLnRvLm51bVZhbHVlKCkgLSBwLmZyb20ubnVtVmFsdWUoKSkgKiBwLnByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlICsgdGhpcy5pbml0aWFsVW5pdHM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5hbmltYXRlLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5BbmltYXRlQmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBhbmltYXRlIGNvbG9yIGVsZW1lbnRcclxuICAgICAgICBzdmcuRWxlbWVudC5hbmltYXRlQ29sb3IgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5BbmltYXRlQmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWxjVmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMucHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tID0gbmV3IFJHQkNvbG9yKHAuZnJvbS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG8gPSBuZXcgUkdCQ29sb3IocC50by52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZyb20ub2sgJiYgdG8ub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0d2VlbiBjb2xvciBsaW5lYXJseVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gZnJvbS5yICsgKHRvLnIgLSBmcm9tLnIpICogcC5wcm9ncmVzcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZyA9IGZyb20uZyArICh0by5nIC0gZnJvbS5nKSAqIHAucHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBmcm9tLmIgKyAodG8uYiAtIGZyb20uYikgKiBwLnByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAncmdiKCcgKyBwYXJzZUludChyLCAxMCkgKyAnLCcgKyBwYXJzZUludChnLCAxMCkgKyAnLCcgKyBwYXJzZUludChiLCAxMCkgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGUoJ2Zyb20nKS52YWx1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmFuaW1hdGVDb2xvci5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuQW5pbWF0ZUJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gYW5pbWF0ZSB0cmFuc2Zvcm0gZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm0gPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5BbmltYXRlQmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWxjVmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHRoaXMucHJvZ3Jlc3MoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0d2VlbiB2YWx1ZSBsaW5lYXJseVxyXG4gICAgICAgICAgICAgICAgdmFyIGZyb20gPSBzdmcuVG9OdW1iZXJBcnJheShwLmZyb20udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvID0gc3ZnLlRvTnVtYmVyQXJyYXkocC50by52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJvbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IGZyb21baV0gKyAodG9baV0gLSBmcm9tW2ldKSAqIHAucHJvZ3Jlc3MgKyAnICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5hbmltYXRlVHJhbnNmb3JtLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5hbmltYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIGZvbnQgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmZvbnQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3JpekFkdlggPSB0aGlzLmF0dHJpYnV0ZSgnaG9yaXotYWR2LXgnKS5udW1WYWx1ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pc1JUTCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzQXJhYmljID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZm9udEZhY2UgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm1pc3NpbmdHbHlwaCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZ2x5cGhzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09ICdmb250LWZhY2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb250RmFjZSA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5zdHlsZSgnZm9udC1mYW1pbHknKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5EZWZpbml0aW9uc1tjaGlsZC5zdHlsZSgnZm9udC1mYW1pbHknKS52YWx1ZV0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQudHlwZSA9PSAnbWlzc2luZy1nbHlwaCcpIHRoaXMubWlzc2luZ0dseXBoID0gY2hpbGQ7ZWxzZSBpZiAoY2hpbGQudHlwZSA9PSAnZ2x5cGgnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFyYWJpY0Zvcm0gIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JUTCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBcmFiaWMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ2x5cGhzW2NoaWxkLnVuaWNvZGVdID09ICd1bmRlZmluZWQnKSB0aGlzLmdseXBoc1tjaGlsZC51bmljb2RlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdseXBoc1tjaGlsZC51bmljb2RlXVtjaGlsZC5hcmFiaWNGb3JtXSA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2x5cGhzW2NoaWxkLnVuaWNvZGVdID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5mb250LnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBmb250LWZhY2UgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmZvbnRmYWNlID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXNjZW50ID0gdGhpcy5hdHRyaWJ1dGUoJ2FzY2VudCcpLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NlbnQgPSB0aGlzLmF0dHJpYnV0ZSgnZGVzY2VudCcpLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnVuaXRzUGVyRW0gPSB0aGlzLmF0dHJpYnV0ZSgndW5pdHMtcGVyLWVtJykubnVtVmFsdWUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmZvbnRmYWNlLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBtaXNzaW5nLWdseXBoIGVsZW1lbnRcclxuICAgICAgICBzdmcuRWxlbWVudC5taXNzaW5nZ2x5cGggPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5wYXRoO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhvcml6QWR2WCA9IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5taXNzaW5nZ2x5cGgucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LnBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gZ2x5cGggZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmdseXBoID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQucGF0aDtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3JpekFkdlggPSB0aGlzLmF0dHJpYnV0ZSgnaG9yaXotYWR2LXgnKS5udW1WYWx1ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVuaWNvZGUgPSB0aGlzLmF0dHJpYnV0ZSgndW5pY29kZScpLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmFyYWJpY0Zvcm0gPSB0aGlzLmF0dHJpYnV0ZSgnYXJhYmljLWZvcm0nKS52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmdseXBoLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5wYXRoKCk7XHJcblxyXG4gICAgICAgIC8vIHRleHQgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LnRleHQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVUZXh0Tm9kZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhc2VTZXRDb250ZXh0ID0gdGhpcy5zZXRDb250ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHQgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2VTZXRDb250ZXh0KGN0eCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRleHRCYXNlbGluZSA9IHRoaXMuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJykudG9UZXh0QmFzZWxpbmUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0QmFzZWxpbmUgPT0gbnVsbCkgdGV4dEJhc2VsaW5lID0gdGhpcy5zdHlsZSgnYWxpZ25tZW50LWJhc2VsaW5lJykudG9UZXh0QmFzZWxpbmUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0QmFzZWxpbmUgIT0gbnVsbCkgY3R4LnRleHRCYXNlbGluZSA9IHRleHRCYXNlbGluZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuYXR0cmlidXRlKCd4JykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5hdHRyaWJ1dGUoJ3knKS50b1BpeGVscygneScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvbnRTaXplID0gdGhpcy5wYXJlbnQuc3R5bGUoJ2ZvbnQtc2l6ZScpLm51bVZhbHVlT3JEZWZhdWx0KHN2Zy5Gb250LlBhcnNlKHN2Zy5jdHguZm9udCkuZm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBzdmcuQm91bmRpbmdCb3goeCwgeSAtIGZvbnRTaXplLCB4ICsgTWF0aC5mbG9vcihmb250U2l6ZSAqIDIuMCAvIDMuMCkgKiB0aGlzLmNoaWxkcmVuWzBdLmdldFRleHQoKS5sZW5ndGgsIHkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMuYXR0cmlidXRlKCd4JykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuYXR0cmlidXRlKCd5JykudG9QaXhlbHMoJ3knKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnZHgnKS5oYXNWYWx1ZSgpKSB0aGlzLnggKz0gdGhpcy5hdHRyaWJ1dGUoJ2R4JykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZSgnZHknKS5oYXNWYWx1ZSgpKSB0aGlzLnkgKz0gdGhpcy5hdHRyaWJ1dGUoJ2R5JykudG9QaXhlbHMoJ3knKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLmdldEFuY2hvckRlbHRhKGN0eCwgdGhpcywgMCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNoaWxkKGN0eCwgdGhpcywgaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEFuY2hvckRlbHRhID0gZnVuY3Rpb24gKGN0eCwgcGFyZW50LCBzdGFydEkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0QW5jaG9yID0gdGhpcy5zdHlsZSgndGV4dC1hbmNob3InKS52YWx1ZU9yRGVmYXVsdCgnc3RhcnQnKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0QW5jaG9yICE9ICdzdGFydCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEk7IGkgPCBwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gcGFyZW50LmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IHN0YXJ0SSAmJiBjaGlsZC5hdHRyaWJ1dGUoJ3gnKS5oYXNWYWx1ZSgpKSBicmVhazsgLy8gbmV3IGdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICs9IGNoaWxkLm1lYXN1cmVUZXh0UmVjdXJzaXZlKGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAqICh0ZXh0QW5jaG9yID09ICdlbmQnID8gd2lkdGggOiB3aWR0aCAvIDIuMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGQgPSBmdW5jdGlvbiAoY3R4LCBwYXJlbnQsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudC5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5hdHRyaWJ1dGUoJ3gnKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQueCA9IGNoaWxkLmF0dHJpYnV0ZSgneCcpLnRvUGl4ZWxzKCd4JykgKyBwYXJlbnQuZ2V0QW5jaG9yRGVsdGEoY3R4LCBwYXJlbnQsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5hdHRyaWJ1dGUoJ2R4JykuaGFzVmFsdWUoKSkgY2hpbGQueCArPSBjaGlsZC5hdHRyaWJ1dGUoJ2R4JykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmF0dHJpYnV0ZSgnZHgnKS5oYXNWYWx1ZSgpKSBwYXJlbnQueCArPSBjaGlsZC5hdHRyaWJ1dGUoJ2R4JykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC54ID0gcGFyZW50Lng7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQueCA9IGNoaWxkLnggKyBjaGlsZC5tZWFzdXJlVGV4dChjdHgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5hdHRyaWJ1dGUoJ3knKS5oYXNWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQueSA9IGNoaWxkLmF0dHJpYnV0ZSgneScpLnRvUGl4ZWxzKCd5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmF0dHJpYnV0ZSgnZHknKS5oYXNWYWx1ZSgpKSBjaGlsZC55ICs9IGNoaWxkLmF0dHJpYnV0ZSgnZHknKS50b1BpeGVscygneScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuYXR0cmlidXRlKCdkeScpLmhhc1ZhbHVlKCkpIHBhcmVudC55ICs9IGNoaWxkLmF0dHJpYnV0ZSgnZHknKS50b1BpeGVscygneScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnkgPSBwYXJlbnQueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcmVudC55ID0gY2hpbGQueTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW5kZXIoY3R4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbmRlckNoaWxkKGN0eCwgY2hpbGQsIGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQudGV4dC5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyB0ZXh0IGJhc2VcclxuICAgICAgICBzdmcuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEdseXBoID0gZnVuY3Rpb24gKGZvbnQsIHRleHQsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjID0gdGV4dFtpXTtcclxuICAgICAgICAgICAgICAgIHZhciBnbHlwaCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9udC5pc0FyYWJpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmFiaWNGb3JtID0gJ2lzb2xhdGVkJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGkgPT0gMCB8fCB0ZXh0W2kgLSAxXSA9PSAnICcpICYmIGkgPCB0ZXh0Lmxlbmd0aCAtIDIgJiYgdGV4dFtpICsgMV0gIT0gJyAnKSBhcmFiaWNGb3JtID0gJ3Rlcm1pbmFsJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDAgJiYgdGV4dFtpIC0gMV0gIT0gJyAnICYmIGkgPCB0ZXh0Lmxlbmd0aCAtIDIgJiYgdGV4dFtpICsgMV0gIT0gJyAnKSBhcmFiaWNGb3JtID0gJ21lZGlhbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIHRleHRbaSAtIDFdICE9ICcgJyAmJiAoaSA9PSB0ZXh0Lmxlbmd0aCAtIDEgfHwgdGV4dFtpICsgMV0gPT0gJyAnKSkgYXJhYmljRm9ybSA9ICdpbml0aWFsJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvbnQuZ2x5cGhzW2NdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdseXBoID0gZm9udC5nbHlwaHNbY11bYXJhYmljRm9ybV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbHlwaCA9PSBudWxsICYmIGZvbnQuZ2x5cGhzW2NdLnR5cGUgPT0gJ2dseXBoJykgZ2x5cGggPSBmb250LmdseXBoc1tjXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdseXBoID0gZm9udC5nbHlwaHNbY107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2x5cGggPT0gbnVsbCkgZ2x5cGggPSBmb250Lm1pc3NpbmdHbHlwaDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnbHlwaDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VzdG9tRm9udCA9IHRoaXMucGFyZW50LnN0eWxlKCdmb250LWZhbWlseScpLmdldERlZmluaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXN0b21Gb250ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9udFNpemUgPSB0aGlzLnBhcmVudC5zdHlsZSgnZm9udC1zaXplJykubnVtVmFsdWVPckRlZmF1bHQoc3ZnLkZvbnQuUGFyc2Uoc3ZnLmN0eC5mb250KS5mb250U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvbnRTdHlsZSA9IHRoaXMucGFyZW50LnN0eWxlKCdmb250LXN0eWxlJykudmFsdWVPckRlZmF1bHQoc3ZnLkZvbnQuUGFyc2Uoc3ZnLmN0eC5mb250KS5mb250U3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nZXRUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1c3RvbUZvbnQuaXNSVEwpIHRleHQgPSB0ZXh0LnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHggPSBzdmcuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoJ2R4JykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2x5cGggPSB0aGlzLmdldEdseXBoKGN1c3RvbUZvbnQsIHRleHQsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSBmb250U2l6ZSAvIGN1c3RvbUZvbnQuZm9udEZhY2UudW5pdHNQZXJFbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5zY2FsZShzY2FsZSwgLXNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGx3ID0gY3R4LmxpbmVXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGN0eC5saW5lV2lkdGggKiBjdXN0b21Gb250LmZvbnRGYWNlLnVuaXRzUGVyRW0gLyBmb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvbnRTdHlsZSA9PSAnaXRhbGljJykgY3R4LnRyYW5zZm9ybSgxLCAwLCAuNCwgMSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdseXBoLnJlbmRlcihjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9udFN0eWxlID09ICdpdGFsaWMnKSBjdHgudHJhbnNmb3JtKDEsIDAsIC0uNCwgMSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBsdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnNjYWxlKDEgLyBzY2FsZSwgLTEgLyBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCwgLXRoaXMueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gZm9udFNpemUgKiAoZ2x5cGguaG9yaXpBZHZYIHx8IGN1c3RvbUZvbnQuaG9yaXpBZHZYKSAvIGN1c3RvbUZvbnQuZm9udEZhY2UudW5pdHNQZXJFbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkeFtpXSAhPSAndW5kZWZpbmVkJyAmJiAhaXNOYU4oZHhbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gZHhbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdHguZmlsbFN0eWxlICE9ICcnKSBjdHguZmlsbFRleHQoc3ZnLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN0eC5zdHJva2VTdHlsZSAhPSAnJykgY3R4LnN0cm9rZVRleHQoc3ZnLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gT1ZFUlJJREUgTUVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWVhc3VyZVRleHRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLm1lYXN1cmVUZXh0KGN0eCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCArPSB0aGlzLmNoaWxkcmVuW2ldLm1lYXN1cmVUZXh0UmVjdXJzaXZlKGN0eCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkdGg7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lYXN1cmVUZXh0ID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1c3RvbUZvbnQgPSB0aGlzLnBhcmVudC5zdHlsZSgnZm9udC1mYW1pbHknKS5nZXREZWZpbml0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tRm9udCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvbnRTaXplID0gdGhpcy5wYXJlbnQuc3R5bGUoJ2ZvbnQtc2l6ZScpLm51bVZhbHVlT3JEZWZhdWx0KHN2Zy5Gb250LlBhcnNlKHN2Zy5jdHguZm9udCkuZm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZWFzdXJlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2V0VGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21Gb250LmlzUlRMKSB0ZXh0ID0gdGV4dC5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHggPSBzdmcuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoJ2R4JykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2x5cGggPSB0aGlzLmdldEdseXBoKGN1c3RvbUZvbnQsIHRleHQsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlICs9IChnbHlwaC5ob3JpekFkdlggfHwgY3VzdG9tRm9udC5ob3JpekFkdlgpICogZm9udFNpemUgLyBjdXN0b21Gb250LmZvbnRGYWNlLnVuaXRzUGVyRW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZHhbaV0gIT0gJ3VuZGVmaW5lZCcgJiYgIWlzTmFOKGR4W2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZSArPSBkeFtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVhc3VyZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dFRvTWVhc3VyZSA9IHN2Zy5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN0eC5tZWFzdXJlVGV4dCkgcmV0dXJuIHRleHRUb01lYXN1cmUubGVuZ3RoICogMTA7XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjdHgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHRUb01lYXN1cmUpLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3aWR0aDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZS5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyB0c3BhblxyXG4gICAgICAgIHN2Zy5FbGVtZW50LnRzcGFuID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXB0dXJlVGV4dE5vZGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSBzdmcuY29tcHJlc3NTcGFjZXMobm9kZS52YWx1ZSB8fCBub2RlLnRleHQgfHwgbm9kZS50ZXh0Q29udGVudCB8fCAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgbm9kZSBoYXMgY2hpbGRyZW4sIHRoZW4gdGhleSBvd24gdGhlIHRleHRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQudHNwYW4ucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyB0cmVmXHJcbiAgICAgICAgc3ZnLkVsZW1lbnQudHJlZiA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSByZXR1cm4gZWxlbWVudC5jaGlsZHJlblswXS5nZXRUZXh0KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC50cmVmLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gYSBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuYSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oYXNUZXh0ID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzW2ldLm5vZGVUeXBlICE9IDMpIHRoaXMuaGFzVGV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzIG1pZ2h0IGNvbnRhaW4gdGV4dFxyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmhhc1RleHQgPyBub2RlLmNoaWxkTm9kZXNbMF0udmFsdWUgOiAnJztcclxuICAgICAgICAgICAgdGhpcy5nZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVJlbmRlckNoaWxkcmVuID0gdGhpcy5yZW5kZXJDaGlsZHJlbjtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1RleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgYXMgdGV4dCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW4oY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm9udFNpemUgPSBuZXcgc3ZnLlByb3BlcnR5KCdmb250U2l6ZScsIHN2Zy5Gb250LlBhcnNlKHN2Zy5jdHguZm9udCkuZm9udFNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN2Zy5Nb3VzZS5jaGVja0JvdW5kaW5nQm94KHRoaXMsIG5ldyBzdmcuQm91bmRpbmdCb3godGhpcy54LCB0aGlzLnkgLSBmb250U2l6ZS50b1BpeGVscygneScpLCB0aGlzLnggKyB0aGlzLm1lYXN1cmVUZXh0KGN0eCksIHRoaXMueSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgYXMgdGVtcG9yYXJ5IGdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBuZXcgc3ZnLkVsZW1lbnQuZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGcuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGcucGFyZW50ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBnLnJlbmRlcihjdHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5nZXRIcmVmQXR0cmlidXRlKCkudmFsdWUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN2Zy5jdHguY2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmEucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlRleHRFbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyBpbWFnZSBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuaW1hZ2UgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaHJlZiA9IHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoaHJlZiA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpc1N2ZyA9IGhyZWYubWF0Y2goL1xcLnN2ZyQvKTtcclxuXHJcbiAgICAgICAgICAgIHN2Zy5JbWFnZXMucHVzaCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCFpc1N2Zykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdmcub3B0c1sndXNlQ09SUyddID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltZy5jcm9zc09yaWdpbiA9ICdBbm9ueW1vdXMnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN2Zy5sb2coJ0VSUk9SOiBpbWFnZSBcIicgKyBocmVmICsgJ1wiIG5vdCBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZy5zcmMgPSBocmVmO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWcgPSBzdmcuYWpheChocmVmKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy5hdHRyaWJ1dGUoJ3gnKS50b1BpeGVscygneCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLmF0dHJpYnV0ZSgneScpLnRvUGl4ZWxzKCd5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5hdHRyaWJ1dGUoJ3dpZHRoJykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmF0dHJpYnV0ZSgnaGVpZ2h0JykudG9QaXhlbHMoJ3knKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1N2Zykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3U3ZnKHRoaXMuaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBzdmcuQXNwZWN0UmF0aW8oY3R4LCB0aGlzLmF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycpLnZhbHVlLCB3aWR0aCwgdGhpcy5pbWcud2lkdGgsIGhlaWdodCwgdGhpcy5pbWcuaGVpZ2h0LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEJvdW5kaW5nQm94ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmF0dHJpYnV0ZSgneCcpLnRvUGl4ZWxzKCd4Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMuYXR0cmlidXRlKCd5JykudG9QaXhlbHMoJ3knKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLnRvUGl4ZWxzKCd4Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcpLnRvUGl4ZWxzKCd5Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHN2Zy5Cb3VuZGluZ0JveCh4LCB5LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuaW1hZ2UucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gZ3JvdXAgZWxlbWVudFxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmcgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldEJvdW5kaW5nQm94ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJiID0gbmV3IHN2Zy5Cb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmIuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltpXS5nZXRCb3VuZGluZ0JveCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBiYjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmcucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gc3ltYm9sIGVsZW1lbnRcclxuICAgICAgICBzdmcuRWxlbWVudC5zeW1ib2wgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5PIFJFTkRFUlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuc3ltYm9sLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIHN0eWxlIGVsZW1lbnRcclxuICAgICAgICBzdmcuRWxlbWVudC5zdHlsZSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAvLyB0ZXh0LCBvciBzcGFjZXMgdGhlbiBDREFUQVxyXG4gICAgICAgICAgICB2YXIgY3NzID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjc3MgKz0gbm9kZS5jaGlsZE5vZGVzW2ldLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3NzID0gY3NzLnJlcGxhY2UoLyhcXC9cXCooW14qXXxbXFxyXFxuXXwoXFwqKyhbXipcXC9dfFtcXHJcXG5dKSkpKlxcKitcXC8pfCheW1xcc10qXFwvXFwvLiopL2dtLCAnJyk7IC8vIHJlbW92ZSBjb21tZW50c1xyXG4gICAgICAgICAgICBjc3MgPSBzdmcuY29tcHJlc3NTcGFjZXMoY3NzKTsgLy8gcmVwbGFjZSB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIHZhciBjc3NEZWZzID0gY3NzLnNwbGl0KCd9Jyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3NzRGVmcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN2Zy50cmltKGNzc0RlZnNbaV0pICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNzc0RlZiA9IGNzc0RlZnNbaV0uc3BsaXQoJ3snKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3NzQ2xhc3NlcyA9IGNzc0RlZlswXS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjc3NQcm9wcyA9IGNzc0RlZlsxXS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY3NzQ2xhc3Nlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3NzQ2xhc3MgPSBzdmcudHJpbShjc3NDbGFzc2VzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0NsYXNzICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY3NzUHJvcHMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IGNzc1Byb3BzW2tdLmluZGV4T2YoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGNzc1Byb3BzW2tdLnN1YnN0cigwLCBwcm9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjc3NQcm9wc1trXS5zdWJzdHIocHJvcCArIDEsIGNzc1Byb3BzW2tdLmxlbmd0aCAtIHByb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lICE9IG51bGwgJiYgdmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1tzdmcudHJpbShuYW1lKV0gPSBuZXcgc3ZnLlByb3BlcnR5KHN2Zy50cmltKG5hbWUpLCBzdmcudHJpbSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5TdHlsZXNbY3NzQ2xhc3NdID0gcHJvcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcuU3R5bGVzU3BlY2lmaWNpdHlbY3NzQ2xhc3NdID0gZ2V0U2VsZWN0b3JTcGVjaWZpY2l0eShjc3NDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3NzQ2xhc3MgPT0gJ0Bmb250LWZhY2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvbnRGYW1pbHkgPSBwcm9wc1snZm9udC1mYW1pbHknXS52YWx1ZS5yZXBsYWNlKC9cIi9nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY3MgPSBwcm9wc1snc3JjJ10udmFsdWUuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHNyY3MubGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyY3Nbc10uaW5kZXhPZignZm9ybWF0KFwic3ZnXCIpJykgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsU3RhcnQgPSBzcmNzW3NdLmluZGV4T2YoJ3VybCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybEVuZCA9IHNyY3Nbc10uaW5kZXhPZignKScsIHVybFN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBzcmNzW3NdLnN1YnN0cih1cmxTdGFydCArIDUsIHVybEVuZCAtIHVybFN0YXJ0IC0gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG9jID0gc3ZnLnBhcnNlWG1sKHN2Zy5hamF4KHVybCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvbnRzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb250Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBmID0gMDsgZiA8IGZvbnRzLmxlbmd0aDsgZisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvbnQgPSBzdmcuQ3JlYXRlRWxlbWVudChmb250c1tmXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLkRlZmluaXRpb25zW2ZvbnRGYW1pbHldID0gZm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuc3R5bGUucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIHVzZSBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQudXNlID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5iYXNlU2V0Q29udGV4dCA9IHRoaXMuc2V0Q29udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0ID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlU2V0Q29udGV4dChjdHgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd4JykuaGFzVmFsdWUoKSkgY3R4LnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZSgneCcpLnRvUGl4ZWxzKCd4JyksIDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd5JykuaGFzVmFsdWUoKSkgY3R4LnRyYW5zbGF0ZSgwLCB0aGlzLmF0dHJpYnV0ZSgneScpLnRvUGl4ZWxzKCd5JykpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhdGggPSBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSBlbGVtZW50LnBhdGgoY3R4KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Qm91bmRpbmdCb3ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSByZXR1cm4gZWxlbWVudC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFN2ZyA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PSAnc3ltYm9sJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgbWUgdXNpbmcgYSB0ZW1wb3Jhcnkgc3ZnIGVsZW1lbnQgaW4gc3ltYm9sIGNhc2VzIChodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvc3RydWN0Lmh0bWwjVXNlRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2ZyA9IG5ldyBzdmcuRWxlbWVudC5zdmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy50eXBlID0gJ3N2Zyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuYXR0cmlidXRlc1sndmlld0JveCddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgndmlld0JveCcsIGVsZW1lbnQuYXR0cmlidXRlKCd2aWV3Qm94JykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wU3ZnLmF0dHJpYnV0ZXNbJ3ByZXNlcnZlQXNwZWN0UmF0aW8nXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCBlbGVtZW50LmF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5hdHRyaWJ1dGVzWydvdmVyZmxvdyddID0gbmV3IHN2Zy5Qcm9wZXJ0eSgnb3ZlcmZsb3cnLCBlbGVtZW50LmF0dHJpYnV0ZSgnb3ZlcmZsb3cnKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBTdmcuY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcFN2Zy50eXBlID09ICdzdmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHN5bWJvbCBvciBzdmcsIGluaGVyaXQgd2lkdGgvaGVpZ2h0IGZyb20gbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlKCd3aWR0aCcpLmhhc1ZhbHVlKCkpIHRlbXBTdmcuYXR0cmlidXRlc1snd2lkdGgnXSA9IG5ldyBzdmcuUHJvcGVydHkoJ3dpZHRoJywgdGhpcy5hdHRyaWJ1dGUoJ3dpZHRoJykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGUoJ2hlaWdodCcpLmhhc1ZhbHVlKCkpIHRlbXBTdmcuYXR0cmlidXRlc1snaGVpZ2h0J10gPSBuZXcgc3ZnLlByb3BlcnR5KCdoZWlnaHQnLCB0aGlzLmF0dHJpYnV0ZSgnaGVpZ2h0JykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkUGFyZW50ID0gdGVtcFN2Zy5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBTdmcucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFN2Zy5wYXJlbnQgPSBvbGRQYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC51c2UucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gbWFzayBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQubWFzayA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGFzIHRlbXAgc3ZnXHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuYXR0cmlidXRlKCd4JykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5hdHRyaWJ1dGUoJ3knKS50b1BpeGVscygneScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5hdHRyaWJ1dGUoJ3dpZHRoJykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmF0dHJpYnV0ZSgnaGVpZ2h0JykudG9QaXhlbHMoJ3knKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2lkdGggPT0gMCAmJiBoZWlnaHQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiYiA9IG5ldyBzdmcuQm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmIuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltpXS5nZXRCb3VuZGluZ0JveCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKGJiLngxKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IE1hdGguZmxvb3IoYmIueTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IE1hdGguZmxvb3IoYmIud2lkdGgoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IE1hdGguZmxvb3IoYmIuaGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRlbXBvcmFyaWx5IHJlbW92ZSBtYXNrIHRvIGF2b2lkIHJlY3Vyc2lvblxyXG4gICAgICAgICAgICAgICAgdmFyIG1hc2sgPSBlbGVtZW50LmF0dHJpYnV0ZSgnbWFzaycpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyaWJ1dGUoJ21hc2snKS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjTWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgY01hc2sud2lkdGggPSB4ICsgd2lkdGg7XHJcbiAgICAgICAgICAgICAgICBjTWFzay5oZWlnaHQgPSB5ICsgaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hc2tDdHggPSBjTWFzay5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbihtYXNrQ3R4KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgYy53aWR0aCA9IHggKyB3aWR0aDtcclxuICAgICAgICAgICAgICAgIGMuaGVpZ2h0ID0geSArIGhlaWdodDtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wQ3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW5kZXIodGVtcEN0eCk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wQ3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XHJcbiAgICAgICAgICAgICAgICB0ZW1wQ3R4LmZpbGxTdHlsZSA9IG1hc2tDdHguY3JlYXRlUGF0dGVybihjTWFzaywgJ25vLXJlcGVhdCcpO1xyXG4gICAgICAgICAgICAgICAgdGVtcEN0eC5maWxsUmVjdCgwLCAwLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZW1wQ3R4LmNyZWF0ZVBhdHRlcm4oYywgJ25vLXJlcGVhdCcpO1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVhc3NpZ24gbWFza1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRyaWJ1dGUoJ21hc2snKS52YWx1ZSA9IG1hc2s7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5PIFJFTkRFUlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQubWFzay5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gY2xpcCBlbGVtZW50XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuY2xpcFBhdGggPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvbGRCZWdpblBhdGggPSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmJlZ2luUGF0aDtcclxuICAgICAgICAgICAgICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuYmVnaW5QYXRoID0gZnVuY3Rpb24gKCkge307XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9sZENsb3NlUGF0aCA9IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoO1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGggPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBvbGRCZWdpblBhdGguY2FsbChjdHgpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnBhdGggIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5zdHlsZSgndHJhbnNmb3JtJywgZmFsc2UsIHRydWUpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IG5ldyBzdmcuVHJhbnNmb3JtKGNoaWxkLnN0eWxlKCd0cmFuc2Zvcm0nLCBmYWxzZSwgdHJ1ZSkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLmFwcGx5KGN0eCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQucGF0aChjdHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aCA9IG9sZENsb3NlUGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLnVuYXBwbHkoY3R4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9sZENsb3NlUGF0aC5jYWxsKGN0eCk7XHJcbiAgICAgICAgICAgICAgICBjdHguY2xpcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuYmVnaW5QYXRoID0gb2xkQmVnaW5QYXRoO1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGggPSBvbGRDbG9zZVBhdGg7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5PIFJFTkRFUlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuY2xpcFBhdGgucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlcnNcclxuICAgICAgICBzdmcuRWxlbWVudC5maWx0ZXIgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGZ1bmN0aW9uIChjdHgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBhcyB0ZW1wIHN2Z1xyXG4gICAgICAgICAgICAgICAgdmFyIGJiID0gZWxlbWVudC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKGJiLngxKTtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gTWF0aC5mbG9vcihiYi55MSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBNYXRoLmZsb29yKGJiLndpZHRoKCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IE1hdGguZmxvb3IoYmIuaGVpZ2h0KCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRlbXBvcmFyaWx5IHJlbW92ZSBmaWx0ZXIgdG8gYXZvaWQgcmVjdXJzaW9uXHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gZWxlbWVudC5zdHlsZSgnZmlsdGVyJykudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlKCdmaWx0ZXInKS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBweCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVmZCA9IHRoaXMuY2hpbGRyZW5baV0uZXh0cmFGaWx0ZXJEaXN0YW5jZSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHB4ID0gTWF0aC5tYXgocHgsIGVmZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHkgPSBNYXRoLm1heChweSwgZWZkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgYy53aWR0aCA9IHdpZHRoICsgMiAqIHB4O1xyXG4gICAgICAgICAgICAgICAgYy5oZWlnaHQgPSBoZWlnaHQgKyAyICogcHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcEN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgIHRlbXBDdHgudHJhbnNsYXRlKC14ICsgcHgsIC15ICsgcHkpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW5kZXIodGVtcEN0eCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXBwbHkgZmlsdGVyc1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNoaWxkcmVuW2ldLmFwcGx5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uYXBwbHkodGVtcEN0eCwgMCwgMCwgd2lkdGggKyAyICogcHgsIGhlaWdodCArIDIgKiBweSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBvbiBtZVxyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShjLCAwLCAwLCB3aWR0aCArIDIgKiBweCwgaGVpZ2h0ICsgMiAqIHB5LCB4IC0gcHgsIHkgLSBweSwgd2lkdGggKyAyICogcHgsIGhlaWdodCArIDIgKiBweSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVhc3NpZ24gZmlsdGVyXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlKCdmaWx0ZXInLCB0cnVlKS52YWx1ZSA9IGZpbHRlcjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTk8gUkVOREVSXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5maWx0ZXIucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmZlTW9ycGhvbG9neSA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZSA9IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlO1xyXG4gICAgICAgICAgICB0aGlzLmJhc2Uobm9kZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcGx5ID0gZnVuY3Rpb24gKGN0eCwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdmcuRWxlbWVudC5mZU1vcnBob2xvZ3kucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIHN2Zy5FbGVtZW50LmZlQ29tcG9zaXRlID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmZlQ29tcG9zaXRlLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICBzdmcuRWxlbWVudC5mZUNvbG9yTWF0cml4ID0gZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlID0gc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSBzdmcuVG9OdW1iZXJBcnJheSh0aGlzLmF0dHJpYnV0ZSgndmFsdWVzJykudmFsdWUpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYXR0cmlidXRlKCd0eXBlJykudmFsdWVPckRlZmF1bHQoJ21hdHJpeCcpKSB7Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHL2ZpbHRlcnMuaHRtbCNmZUNvbG9yTWF0cml4RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2F0dXJhdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzID0gbWF0cml4WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeCA9IFswLjIxMyArIDAuNzg3ICogcywgMC43MTUgLSAwLjcxNSAqIHMsIDAuMDcyIC0gMC4wNzIgKiBzLCAwLCAwLCAwLjIxMyAtIDAuMjEzICogcywgMC43MTUgKyAwLjI4NSAqIHMsIDAuMDcyIC0gMC4wNzIgKiBzLCAwLCAwLCAwLjIxMyAtIDAuMjEzICogcywgMC43MTUgLSAwLjcxNSAqIHMsIDAuMDcyICsgMC45MjggKiBzLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2h1ZVJvdGF0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBtYXRyaXhbMF0gKiBNYXRoLlBJIC8gMTgwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBmdW5jdGlvbiBjKG0xLCBtMiwgbTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0xICsgTWF0aC5jb3MoYSkgKiBtMiArIE1hdGguc2luKGEpICogbTM7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBtYXRyaXggPSBbYygwLjIxMywgMC43ODcsIC0wLjIxMyksIGMoMC43MTUsIC0wLjcxNSwgLTAuNzE1KSwgYygwLjA3MiwgLTAuMDcyLCAwLjkyOCksIDAsIDAsIGMoMC4yMTMsIC0wLjIxMywgMC4xNDMpLCBjKDAuNzE1LCAwLjI4NSwgMC4xNDApLCBjKDAuMDcyLCAtMC4wNzIsIC0wLjI4MyksIDAsIDAsIGMoMC4yMTMsIC0wLjIxMywgLTAuNzg3KSwgYygwLjcxNSwgLTAuNzE1LCAwLjcxNSksIGMoMC4wNzIsIDAuOTI4LCAwLjA3MiksIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbHVtaW5hbmNlVG9BbHBoYSc6XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAuMjEyNSwgMC43MTU0LCAwLjA3MjEsIDAsIDAsIDAsIDAsIDAsIDAsIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpbUdldChpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHJnYmEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbWdbeSAqIHdpZHRoICogNCArIHggKiA0ICsgcmdiYV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGltU2V0KGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCwgcmdiYSwgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpbWdbeSAqIHdpZHRoICogNCArIHggKiA0ICsgcmdiYV0gPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG0oaSwgdikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pID0gbWF0cml4W2ldO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1pICogKG1pIDwgMCA/IHYgLSAyNTUgOiB2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hcHBseSA9IGZ1bmN0aW9uIChjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFzc3VtaW5nIHg9PTAgJiYgeT09MCBmb3Igbm93XHJcbiAgICAgICAgICAgICAgICB2YXIgc3JjRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gaW1HZXQoc3JjRGF0YS5kYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGcgPSBpbUdldChzcmNEYXRhLmRhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGltR2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gaW1HZXQoc3JjRGF0YS5kYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1TZXQoc3JjRGF0YS5kYXRhLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCAwLCBtKDAsIHIpICsgbSgxLCBnKSArIG0oMiwgYikgKyBtKDMsIGEpICsgbSg0LCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltU2V0KHNyY0RhdGEuZGF0YSwgeCwgeSwgd2lkdGgsIGhlaWdodCwgMSwgbSg1LCByKSArIG0oNiwgZykgKyBtKDcsIGIpICsgbSg4LCBhKSArIG0oOSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbVNldChzcmNEYXRhLmRhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDIsIG0oMTAsIHIpICsgbSgxMSwgZykgKyBtKDEyLCBiKSArIG0oMTMsIGEpICsgbSgxNCwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbVNldChzcmNEYXRhLmRhdGEsIHgsIHksIHdpZHRoLCBoZWlnaHQsIDMsIG0oMTUsIHIpICsgbSgxNiwgZykgKyBtKDE3LCBiKSArIG0oMTgsIGEpICsgbSgxOSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjdHgucHV0SW1hZ2VEYXRhKHNyY0RhdGEsIDAsIDApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuZmVDb2xvck1hdHJpeC5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuZmVHYXVzc2lhbkJsdXIgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSBzdmcuRWxlbWVudC5FbGVtZW50QmFzZTtcclxuICAgICAgICAgICAgdGhpcy5iYXNlKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ibHVyUmFkaXVzID0gTWF0aC5mbG9vcih0aGlzLmF0dHJpYnV0ZSgnc3RkRGV2aWF0aW9uJykubnVtVmFsdWUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFGaWx0ZXJEaXN0YW5jZSA9IHRoaXMuYmx1clJhZGl1cztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHkgPSBmdW5jdGlvbiAoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0YWNrQmx1ckNhbnZhc1JHQkEgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdmcubG9nKCdFUlJPUjogU3RhY2tCbHVyLmpzIG11c3QgYmUgaW5jbHVkZWQgZm9yIGJsdXIgdG8gd29yaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTdGFja0JsdXIgcmVxdWlyZXMgY2FudmFzIGJlIG9uIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICBjdHguY2FudmFzLmlkID0gc3ZnLlVuaXF1ZUlkKCk7XHJcbiAgICAgICAgICAgICAgICBjdHguY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGN0eC5jYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgc3RhY2tCbHVyQ2FudmFzUkdCQShjdHguY2FudmFzLmlkLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0aGlzLmJsdXJSYWRpdXMpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjdHguY2FudmFzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmZlR2F1c3NpYW5CbHVyLnByb3RvdHlwZSA9IG5ldyBzdmcuRWxlbWVudC5FbGVtZW50QmFzZSgpO1xyXG5cclxuICAgICAgICAvLyB0aXRsZSBlbGVtZW50LCBkbyBub3RoaW5nXHJcbiAgICAgICAgc3ZnLkVsZW1lbnQudGl0bGUgPSBmdW5jdGlvbiAobm9kZSkge307XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQudGl0bGUucHJvdG90eXBlID0gbmV3IHN2Zy5FbGVtZW50LkVsZW1lbnRCYXNlKCk7XHJcblxyXG4gICAgICAgIC8vIGRlc2MgZWxlbWVudCwgZG8gbm90aGluZ1xyXG4gICAgICAgIHN2Zy5FbGVtZW50LmRlc2MgPSBmdW5jdGlvbiAobm9kZSkge307XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuZGVzYy5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuTUlTU0lORyA9IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAgIHN2Zy5sb2coJ0VSUk9SOiBFbGVtZW50IFxcJycgKyBub2RlLm5vZGVOYW1lICsgJ1xcJyBub3QgeWV0IGltcGxlbWVudGVkLicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc3ZnLkVsZW1lbnQuTUlTU0lORy5wcm90b3R5cGUgPSBuZXcgc3ZnLkVsZW1lbnQuRWxlbWVudEJhc2UoKTtcclxuXHJcbiAgICAgICAgLy8gZWxlbWVudCBmYWN0b3J5XHJcbiAgICAgICAgc3ZnLkNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eW146XSs6LywgJycpOyAvLyByZW1vdmUgbmFtZXNwYWNlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXC0vZywgJycpOyAvLyByZW1vdmUgZGFzaGVzXHJcbiAgICAgICAgICAgIHZhciBlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdmcuRWxlbWVudFtjbGFzc05hbWVdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBlID0gbmV3IHN2Zy5FbGVtZW50W2NsYXNzTmFtZV0obm9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlID0gbmV3IHN2Zy5FbGVtZW50Lk1JU1NJTkcobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUudHlwZSA9IG5vZGUubm9kZU5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGxvYWQgZnJvbSB1cmxcclxuICAgICAgICBzdmcubG9hZCA9IGZ1bmN0aW9uIChjdHgsIHVybCkge1xyXG4gICAgICAgICAgICBzdmcubG9hZFhtbChjdHgsIHN2Zy5hamF4KHVybCkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIGxvYWQgZnJvbSB4bWxcclxuICAgICAgICBzdmcubG9hZFhtbCA9IGZ1bmN0aW9uIChjdHgsIHhtbCkge1xyXG4gICAgICAgICAgICBzdmcubG9hZFhtbERvYyhjdHgsIHN2Zy5wYXJzZVhtbCh4bWwpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcubG9hZFhtbERvYyA9IGZ1bmN0aW9uIChjdHgsIGRvbSkge1xyXG4gICAgICAgICAgICBzdmcuaW5pdChjdHgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1hcFhZID0gZnVuY3Rpb24gbWFwWFkocCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGUgPSBjdHguY2FudmFzO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwLnggLT0gZS5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHAueSAtPSBlLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgICAgICAgICBlID0gZS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFgpIHAueCArPSB3aW5kb3cuc2Nyb2xsWDtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSkgcC55ICs9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBiaW5kIG1vdXNlXHJcbiAgICAgICAgICAgIGlmIChzdmcub3B0c1snaWdub3JlTW91c2UnXSAhPSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguY2FudmFzLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gbWFwWFkobmV3IHN2Zy5Qb2ludChlICE9IG51bGwgPyBlLmNsaWVudFggOiBldmVudC5jbGllbnRYLCBlICE9IG51bGwgPyBlLmNsaWVudFkgOiBldmVudC5jbGllbnRZKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnLk1vdXNlLm9uY2xpY2socC54LCBwLnkpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGN0eC5jYW52YXMub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gbWFwWFkobmV3IHN2Zy5Qb2ludChlICE9IG51bGwgPyBlLmNsaWVudFggOiBldmVudC5jbGllbnRYLCBlICE9IG51bGwgPyBlLmNsaWVudFkgOiBldmVudC5jbGllbnRZKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ZnLk1vdXNlLm9ubW91c2Vtb3ZlKHAueCwgcC55KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBlID0gc3ZnLkNyZWF0ZUVsZW1lbnQoZG9tLmRvY3VtZW50RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGUucm9vdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGUuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVuZGVyIGxvb3BcclxuICAgICAgICAgICAgdmFyIGlzRmlyc3RSZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICAgICAgICAgICAgICBzdmcuVmlld1BvcnQuQ2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdHguY2FudmFzLnBhcmVudE5vZGUpIHN2Zy5WaWV3UG9ydC5TZXRDdXJyZW50KGN0eC5jYW52YXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aCwgY3R4LmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN2Zy5vcHRzWydpZ25vcmVEaW1lbnNpb25zJ10gIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBjYW52YXMgc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnN0eWxlKCd3aWR0aCcpLmhhc1ZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IGUuc3R5bGUoJ3dpZHRoJykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmNhbnZhcy5zdHlsZS53aWR0aCA9IGN0eC5jYW52YXMud2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5zdHlsZSgnaGVpZ2h0JykuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGUuc3R5bGUoJ2hlaWdodCcpLnRvUGl4ZWxzKCd5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gY3R4LmNhbnZhcy5oZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBjV2lkdGggPSBjdHguY2FudmFzLmNsaWVudFdpZHRoIHx8IGN0eC5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgY0hlaWdodCA9IGN0eC5jYW52YXMuY2xpZW50SGVpZ2h0IHx8IGN0eC5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHN2Zy5vcHRzWydpZ25vcmVEaW1lbnNpb25zJ10gPT0gdHJ1ZSAmJiBlLnN0eWxlKCd3aWR0aCcpLmhhc1ZhbHVlKCkgJiYgZS5zdHlsZSgnaGVpZ2h0JykuaGFzVmFsdWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNXaWR0aCA9IGUuc3R5bGUoJ3dpZHRoJykudG9QaXhlbHMoJ3gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjSGVpZ2h0ID0gZS5zdHlsZSgnaGVpZ2h0JykudG9QaXhlbHMoJ3knKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN2Zy5WaWV3UG9ydC5TZXRDdXJyZW50KGNXaWR0aCwgY0hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN2Zy5vcHRzWydvZmZzZXRYJ10gIT0gbnVsbCkgZS5hdHRyaWJ1dGUoJ3gnLCB0cnVlKS52YWx1ZSA9IHN2Zy5vcHRzWydvZmZzZXRYJ107XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ29mZnNldFknXSAhPSBudWxsKSBlLmF0dHJpYnV0ZSgneScsIHRydWUpLnZhbHVlID0gc3ZnLm9wdHNbJ29mZnNldFknXTtcclxuICAgICAgICAgICAgICAgIGlmIChzdmcub3B0c1snc2NhbGVXaWR0aCddICE9IG51bGwgfHwgc3ZnLm9wdHNbJ3NjYWxlSGVpZ2h0J10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4UmF0aW8gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5UmF0aW8gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94ID0gc3ZnLlRvTnVtYmVyQXJyYXkoZS5hdHRyaWJ1dGUoJ3ZpZXdCb3gnKS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdmcub3B0c1snc2NhbGVXaWR0aCddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuYXR0cmlidXRlKCd3aWR0aCcpLmhhc1ZhbHVlKCkpIHhSYXRpbyA9IGUuYXR0cmlidXRlKCd3aWR0aCcpLnRvUGl4ZWxzKCd4JykgLyBzdmcub3B0c1snc2NhbGVXaWR0aCddO2Vsc2UgaWYgKCFpc05hTih2aWV3Qm94WzJdKSkgeFJhdGlvID0gdmlld0JveFsyXSAvIHN2Zy5vcHRzWydzY2FsZVdpZHRoJ107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ3NjYWxlSGVpZ2h0J10gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5hdHRyaWJ1dGUoJ2hlaWdodCcpLmhhc1ZhbHVlKCkpIHlSYXRpbyA9IGUuYXR0cmlidXRlKCdoZWlnaHQnKS50b1BpeGVscygneScpIC8gc3ZnLm9wdHNbJ3NjYWxlSGVpZ2h0J107ZWxzZSBpZiAoIWlzTmFOKHZpZXdCb3hbM10pKSB5UmF0aW8gPSB2aWV3Qm94WzNdIC8gc3ZnLm9wdHNbJ3NjYWxlSGVpZ2h0J107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeFJhdGlvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeFJhdGlvID0geVJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeVJhdGlvID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeVJhdGlvID0geFJhdGlvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS5hdHRyaWJ1dGUoJ3dpZHRoJywgdHJ1ZSkudmFsdWUgPSBzdmcub3B0c1snc2NhbGVXaWR0aCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuYXR0cmlidXRlKCdoZWlnaHQnLCB0cnVlKS52YWx1ZSA9IHN2Zy5vcHRzWydzY2FsZUhlaWdodCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUoJ3RyYW5zZm9ybScsIHRydWUsIHRydWUpLnZhbHVlICs9ICcgc2NhbGUoJyArIDEuMCAvIHhSYXRpbyArICcsJyArIDEuMCAvIHlSYXRpbyArICcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBhbmQgcmVuZGVyXHJcbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ2lnbm9yZUNsZWFyJ10gIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY1dpZHRoLCBjSGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUucmVuZGVyKGN0eCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3RSZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN2Zy5vcHRzWydyZW5kZXJDYWxsYmFjayddID09ICdmdW5jdGlvbicpIHN2Zy5vcHRzWydyZW5kZXJDYWxsYmFjayddKGRvbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgd2FpdGluZ0ZvckltYWdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChzdmcuSW1hZ2VzTG9hZGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdGb3JJbWFnZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdmcuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZWVkVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdhaXRpbmdGb3JJbWFnZXMgJiYgc3ZnLkltYWdlc0xvYWRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2FpdGluZ0ZvckltYWdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdXBkYXRlIGZyb20gbW91c2UgZXZlbnRzP1xyXG4gICAgICAgICAgICAgICAgaWYgKHN2Zy5vcHRzWydpZ25vcmVNb3VzZSddICE9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWVkVXBkYXRlID0gbmVlZFVwZGF0ZSB8IHN2Zy5Nb3VzZS5oYXNFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHVwZGF0ZSBmcm9tIGFuaW1hdGlvbnM/XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ2lnbm9yZUFuaW1hdGlvbiddICE9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN2Zy5BbmltYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRVcGRhdGUgPSBuZWVkVXBkYXRlIHwgc3ZnLkFuaW1hdGlvbnNbaV0udXBkYXRlKDEwMDAgLyBzdmcuRlJBTUVSQVRFKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbmVlZCB1cGRhdGUgZnJvbSByZWRyYXc/XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN2Zy5vcHRzWydmb3JjZVJlZHJhdyddID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ZnLm9wdHNbJ2ZvcmNlUmVkcmF3J10oKSA9PSB0cnVlKSBuZWVkVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgICAgICBpZiAobmVlZFVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdmcuTW91c2UucnVuRXZlbnRzKCk7IC8vIHJ1biBhbmQgY2xlYXIgb3VyIGV2ZW50c1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwIC8gc3ZnLkZSQU1FUkFURSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc3ZnLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChzdmcuaW50ZXJ2YWxJRCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzdmcuaW50ZXJ2YWxJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzdmcuTW91c2UgPSBuZXcgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0V2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmV2ZW50cy5sZW5ndGggIT0gMDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25jbGljayA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb25jbGljaycsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bjogZnVuY3Rpb24gcnVuKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUub25jbGljaykgZS5vbmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvbm1vdXNlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgeDogeCxcclxuICAgICAgICAgICAgICAgICAgICB5OiB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bjogZnVuY3Rpb24gcnVuKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUub25tb3VzZW1vdmUpIGUub25tb3VzZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGVja1BhdGggPSBmdW5jdGlvbiAoZWxlbWVudCwgY3R4KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmV2ZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LmlzUG9pbnRJblBhdGggJiYgY3R4LmlzUG9pbnRJblBhdGgoZS54LCBlLnkpKSB0aGlzLmV2ZW50RWxlbWVudHNbaV0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGVja0JvdW5kaW5nQm94ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGJiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLmV2ZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmIuaXNQb2ludEluQm94KGUueCwgZS55KSkgdGhpcy5ldmVudEVsZW1lbnRzW2ldID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucnVuRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3ZnLmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV2ZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5ldmVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmV2ZW50RWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5ydW4oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZG9uZSBydW5uaW5nLCBjbGVhclxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN2ZztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5kcmF3U3ZnID0gZnVuY3Rpb24gKHMsIGR4LCBkeSwgZHcsIGRoKSB7XHJcbiAgICAgICAgICAgIGNhbnZnKHRoaXMuY2FudmFzLCBzLCB7XHJcbiAgICAgICAgICAgICAgICBpZ25vcmVNb3VzZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZUFuaW1hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZURpbWVuc2lvbnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9mZnNldFg6IGR4LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogZHksXHJcbiAgICAgICAgICAgICAgICBzY2FsZVdpZHRoOiBkdyxcclxuICAgICAgICAgICAgICAgIHNjYWxlSGVpZ2h0OiBkaFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5jYW52ZyA9IGNhbnZnO1xyXG5cclxuICAgIHJldHVybiBjYW52ZztcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIEEgY2xhc3MgdG8gcGFyc2UgY29sb3IgdmFsdWVzXHJcbiAqIEBhdXRob3IgU3RveWFuIFN0ZWZhbm92IDxzc3Rvb0BnbWFpbC5jb20+XHJcbiAqIEBsaW5rICAgaHR0cDovL3d3dy5waHBpZWQuY29tL3JnYi1jb2xvci1wYXJzZXItaW4tamF2YXNjcmlwdC9cclxuICogQGxpY2Vuc2UgVXNlIGl0IGlmIHlvdSBsaWtlIGl0XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFJHQkNvbG9yKGNvbG9yX3N0cmluZykge1xyXG4gICAgdGhpcy5vayA9IGZhbHNlO1xyXG5cclxuICAgIC8vIHN0cmlwIGFueSBsZWFkaW5nICNcclxuICAgIGlmIChjb2xvcl9zdHJpbmcuY2hhckF0KDApID09ICcjJykge1xyXG4gICAgICAgIC8vIHJlbW92ZSAjIGlmIGFueVxyXG4gICAgICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5zdWJzdHIoMSwgNik7XHJcbiAgICB9XHJcblxyXG4gICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnJlcGxhY2UoLyAvZywgJycpO1xyXG4gICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gYmVmb3JlIGdldHRpbmcgaW50byByZWdleHBzLCB0cnkgc2ltcGxlIG1hdGNoZXNcclxuICAgIC8vIGFuZCBvdmVyd3JpdGUgdGhlIGlucHV0XHJcbiAgICB2YXIgc2ltcGxlX2NvbG9ycyA9IHtcclxuICAgICAgICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxyXG4gICAgICAgIGFudGlxdWV3aGl0ZTogJ2ZhZWJkNycsXHJcbiAgICAgICAgYXF1YTogJzAwZmZmZicsXHJcbiAgICAgICAgYXF1YW1hcmluZTogJzdmZmZkNCcsXHJcbiAgICAgICAgYXp1cmU6ICdmMGZmZmYnLFxyXG4gICAgICAgIGJlaWdlOiAnZjVmNWRjJyxcclxuICAgICAgICBiaXNxdWU6ICdmZmU0YzQnLFxyXG4gICAgICAgIGJsYWNrOiAnMDAwMDAwJyxcclxuICAgICAgICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXHJcbiAgICAgICAgYmx1ZTogJzAwMDBmZicsXHJcbiAgICAgICAgYmx1ZXZpb2xldDogJzhhMmJlMicsXHJcbiAgICAgICAgYnJvd246ICdhNTJhMmEnLFxyXG4gICAgICAgIGJ1cmx5d29vZDogJ2RlYjg4NycsXHJcbiAgICAgICAgY2FkZXRibHVlOiAnNWY5ZWEwJyxcclxuICAgICAgICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcclxuICAgICAgICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxyXG4gICAgICAgIGNvcmFsOiAnZmY3ZjUwJyxcclxuICAgICAgICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXHJcbiAgICAgICAgY29ybnNpbGs6ICdmZmY4ZGMnLFxyXG4gICAgICAgIGNyaW1zb246ICdkYzE0M2MnLFxyXG4gICAgICAgIGN5YW46ICcwMGZmZmYnLFxyXG4gICAgICAgIGRhcmtibHVlOiAnMDAwMDhiJyxcclxuICAgICAgICBkYXJrY3lhbjogJzAwOGI4YicsXHJcbiAgICAgICAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXHJcbiAgICAgICAgZGFya2dyYXk6ICdhOWE5YTknLFxyXG4gICAgICAgIGRhcmtncmVlbjogJzAwNjQwMCcsXHJcbiAgICAgICAgZGFya2toYWtpOiAnYmRiNzZiJyxcclxuICAgICAgICBkYXJrbWFnZW50YTogJzhiMDA4YicsXHJcbiAgICAgICAgZGFya29saXZlZ3JlZW46ICc1NTZiMmYnLFxyXG4gICAgICAgIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxyXG4gICAgICAgIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxyXG4gICAgICAgIGRhcmtyZWQ6ICc4YjAwMDAnLFxyXG4gICAgICAgIGRhcmtzYWxtb246ICdlOTk2N2EnLFxyXG4gICAgICAgIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXHJcbiAgICAgICAgZGFya3NsYXRlYmx1ZTogJzQ4M2Q4YicsXHJcbiAgICAgICAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXHJcbiAgICAgICAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXHJcbiAgICAgICAgZGFya3Zpb2xldDogJzk0MDBkMycsXHJcbiAgICAgICAgZGVlcHBpbms6ICdmZjE0OTMnLFxyXG4gICAgICAgIGRlZXBza3libHVlOiAnMDBiZmZmJyxcclxuICAgICAgICBkaW1ncmF5OiAnNjk2OTY5JyxcclxuICAgICAgICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcclxuICAgICAgICBmZWxkc3BhcjogJ2QxOTI3NScsXHJcbiAgICAgICAgZmlyZWJyaWNrOiAnYjIyMjIyJyxcclxuICAgICAgICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXHJcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxyXG4gICAgICAgIGZ1Y2hzaWE6ICdmZjAwZmYnLFxyXG4gICAgICAgIGdhaW5zYm9ybzogJ2RjZGNkYycsXHJcbiAgICAgICAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXHJcbiAgICAgICAgZ29sZDogJ2ZmZDcwMCcsXHJcbiAgICAgICAgZ29sZGVucm9kOiAnZGFhNTIwJyxcclxuICAgICAgICBncmF5OiAnODA4MDgwJyxcclxuICAgICAgICBncmVlbjogJzAwODAwMCcsXHJcbiAgICAgICAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxyXG4gICAgICAgIGhvbmV5ZGV3OiAnZjBmZmYwJyxcclxuICAgICAgICBob3RwaW5rOiAnZmY2OWI0JyxcclxuICAgICAgICBpbmRpYW5yZWQ6ICdjZDVjNWMnLFxyXG4gICAgICAgIGluZGlnbzogJzRiMDA4MicsXHJcbiAgICAgICAgaXZvcnk6ICdmZmZmZjAnLFxyXG4gICAgICAgIGtoYWtpOiAnZjBlNjhjJyxcclxuICAgICAgICBsYXZlbmRlcjogJ2U2ZTZmYScsXHJcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXHJcbiAgICAgICAgbGF3bmdyZWVuOiAnN2NmYzAwJyxcclxuICAgICAgICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxyXG4gICAgICAgIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXHJcbiAgICAgICAgbGlnaHRjb3JhbDogJ2YwODA4MCcsXHJcbiAgICAgICAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcclxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXHJcbiAgICAgICAgbGlnaHRncmV5OiAnZDNkM2QzJyxcclxuICAgICAgICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcclxuICAgICAgICBsaWdodHBpbms6ICdmZmI2YzEnLFxyXG4gICAgICAgIGxpZ2h0c2FsbW9uOiAnZmZhMDdhJyxcclxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcclxuICAgICAgICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxyXG4gICAgICAgIGxpZ2h0c2xhdGVibHVlOiAnODQ3MGZmJyxcclxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJzc3ODg5OScsXHJcbiAgICAgICAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxyXG4gICAgICAgIGxpZ2h0eWVsbG93OiAnZmZmZmUwJyxcclxuICAgICAgICBsaW1lOiAnMDBmZjAwJyxcclxuICAgICAgICBsaW1lZ3JlZW46ICczMmNkMzInLFxyXG4gICAgICAgIGxpbmVuOiAnZmFmMGU2JyxcclxuICAgICAgICBtYWdlbnRhOiAnZmYwMGZmJyxcclxuICAgICAgICBtYXJvb246ICc4MDAwMDAnLFxyXG4gICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6ICc2NmNkYWEnLFxyXG4gICAgICAgIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxyXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXHJcbiAgICAgICAgbWVkaXVtcHVycGxlOiAnOTM3MGQ4JyxcclxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXHJcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcclxuICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogJzAwZmE5YScsXHJcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcclxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxyXG4gICAgICAgIG1pZG5pZ2h0Ymx1ZTogJzE5MTk3MCcsXHJcbiAgICAgICAgbWludGNyZWFtOiAnZjVmZmZhJyxcclxuICAgICAgICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxyXG4gICAgICAgIG1vY2Nhc2luOiAnZmZlNGI1JyxcclxuICAgICAgICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXHJcbiAgICAgICAgbmF2eTogJzAwMDA4MCcsXHJcbiAgICAgICAgb2xkbGFjZTogJ2ZkZjVlNicsXHJcbiAgICAgICAgb2xpdmU6ICc4MDgwMDAnLFxyXG4gICAgICAgIG9saXZlZHJhYjogJzZiOGUyMycsXHJcbiAgICAgICAgb3JhbmdlOiAnZmZhNTAwJyxcclxuICAgICAgICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxyXG4gICAgICAgIG9yY2hpZDogJ2RhNzBkNicsXHJcbiAgICAgICAgcGFsZWdvbGRlbnJvZDogJ2VlZThhYScsXHJcbiAgICAgICAgcGFsZWdyZWVuOiAnOThmYjk4JyxcclxuICAgICAgICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcclxuICAgICAgICBwYWxldmlvbGV0cmVkOiAnZDg3MDkzJyxcclxuICAgICAgICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcclxuICAgICAgICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxyXG4gICAgICAgIHBlcnU6ICdjZDg1M2YnLFxyXG4gICAgICAgIHBpbms6ICdmZmMwY2InLFxyXG4gICAgICAgIHBsdW06ICdkZGEwZGQnLFxyXG4gICAgICAgIHBvd2RlcmJsdWU6ICdiMGUwZTYnLFxyXG4gICAgICAgIHB1cnBsZTogJzgwMDA4MCcsXHJcbiAgICAgICAgcmVkOiAnZmYwMDAwJyxcclxuICAgICAgICByb3N5YnJvd246ICdiYzhmOGYnLFxyXG4gICAgICAgIHJveWFsYmx1ZTogJzQxNjllMScsXHJcbiAgICAgICAgc2FkZGxlYnJvd246ICc4YjQ1MTMnLFxyXG4gICAgICAgIHNhbG1vbjogJ2ZhODA3MicsXHJcbiAgICAgICAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXHJcbiAgICAgICAgc2VhZ3JlZW46ICcyZThiNTcnLFxyXG4gICAgICAgIHNlYXNoZWxsOiAnZmZmNWVlJyxcclxuICAgICAgICBzaWVubmE6ICdhMDUyMmQnLFxyXG4gICAgICAgIHNpbHZlcjogJ2MwYzBjMCcsXHJcbiAgICAgICAgc2t5Ymx1ZTogJzg3Y2VlYicsXHJcbiAgICAgICAgc2xhdGVibHVlOiAnNmE1YWNkJyxcclxuICAgICAgICBzbGF0ZWdyYXk6ICc3MDgwOTAnLFxyXG4gICAgICAgIHNub3c6ICdmZmZhZmEnLFxyXG4gICAgICAgIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcclxuICAgICAgICBzdGVlbGJsdWU6ICc0NjgyYjQnLFxyXG4gICAgICAgIHRhbjogJ2QyYjQ4YycsXHJcbiAgICAgICAgdGVhbDogJzAwODA4MCcsXHJcbiAgICAgICAgdGhpc3RsZTogJ2Q4YmZkOCcsXHJcbiAgICAgICAgdG9tYXRvOiAnZmY2MzQ3JyxcclxuICAgICAgICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxyXG4gICAgICAgIHZpb2xldDogJ2VlODJlZScsXHJcbiAgICAgICAgdmlvbGV0cmVkOiAnZDAyMDkwJyxcclxuICAgICAgICB3aGVhdDogJ2Y1ZGViMycsXHJcbiAgICAgICAgd2hpdGU6ICdmZmZmZmYnLFxyXG4gICAgICAgIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxyXG4gICAgICAgIHllbGxvdzogJ2ZmZmYwMCcsXHJcbiAgICAgICAgeWVsbG93Z3JlZW46ICc5YWNkMzInXHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHNpbXBsZV9jb2xvcnMpIHtcclxuICAgICAgICBpZiAoY29sb3Jfc3RyaW5nID09IGtleSkge1xyXG4gICAgICAgICAgICBjb2xvcl9zdHJpbmcgPSBzaW1wbGVfY29sb3JzW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZW1kIG9mIHNpbXBsZSB0eXBlLWluIGNvbG9yc1xyXG5cclxuICAgIC8vIGFycmF5IG9mIGNvbG9yIGRlZmluaXRpb24gb2JqZWN0c1xyXG4gICAgdmFyIGNvbG9yX2RlZnMgPSBbe1xyXG4gICAgICAgIHJlOiAvXnJnYlxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSlcXCkkLyxcclxuICAgICAgICBleGFtcGxlOiBbJ3JnYigxMjMsIDIzNCwgNDUpJywgJ3JnYigyNTUsMjM0LDI0NSknXSxcclxuICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKGJpdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtwYXJzZUludChiaXRzWzFdKSwgcGFyc2VJbnQoYml0c1syXSksIHBhcnNlSW50KGJpdHNbM10pXTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgcmU6IC9eKFxcd3syfSkoXFx3ezJ9KShcXHd7Mn0pJC8sXHJcbiAgICAgICAgZXhhbXBsZTogWycjMDBmZjAwJywgJzMzNjY5OSddLFxyXG4gICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIHByb2Nlc3MoYml0cykge1xyXG4gICAgICAgICAgICByZXR1cm4gW3BhcnNlSW50KGJpdHNbMV0sIDE2KSwgcGFyc2VJbnQoYml0c1syXSwgMTYpLCBwYXJzZUludChiaXRzWzNdLCAxNildO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICByZTogL14oXFx3ezF9KShcXHd7MX0pKFxcd3sxfSkkLyxcclxuICAgICAgICBleGFtcGxlOiBbJyNmYjAnLCAnZjBmJ10sXHJcbiAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gcHJvY2VzcyhiaXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbcGFyc2VJbnQoYml0c1sxXSArIGJpdHNbMV0sIDE2KSwgcGFyc2VJbnQoYml0c1syXSArIGJpdHNbMl0sIDE2KSwgcGFyc2VJbnQoYml0c1szXSArIGJpdHNbM10sIDE2KV07XHJcbiAgICAgICAgfVxyXG4gICAgfV07XHJcblxyXG4gICAgLy8gc2VhcmNoIHRocm91Z2ggdGhlIGRlZmluaXRpb25zIHRvIGZpbmQgYSBtYXRjaFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHJlID0gY29sb3JfZGVmc1tpXS5yZTtcclxuICAgICAgICB2YXIgcHJvY2Vzc29yID0gY29sb3JfZGVmc1tpXS5wcm9jZXNzO1xyXG4gICAgICAgIHZhciBiaXRzID0gcmUuZXhlYyhjb2xvcl9zdHJpbmcpO1xyXG4gICAgICAgIGlmIChiaXRzKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFubmVscyA9IHByb2Nlc3NvcihiaXRzKTtcclxuICAgICAgICAgICAgdGhpcy5yID0gY2hhbm5lbHNbMF07XHJcbiAgICAgICAgICAgIHRoaXMuZyA9IGNoYW5uZWxzWzFdO1xyXG4gICAgICAgICAgICB0aGlzLmIgPSBjaGFubmVsc1syXTtcclxuICAgICAgICAgICAgdGhpcy5vayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZhbGlkYXRlL2NsZWFudXAgdmFsdWVzXHJcbiAgICB0aGlzLnIgPSB0aGlzLnIgPCAwIHx8IGlzTmFOKHRoaXMucikgPyAwIDogdGhpcy5yID4gMjU1ID8gMjU1IDogdGhpcy5yO1xyXG4gICAgdGhpcy5nID0gdGhpcy5nIDwgMCB8fCBpc05hTih0aGlzLmcpID8gMCA6IHRoaXMuZyA+IDI1NSA/IDI1NSA6IHRoaXMuZztcclxuICAgIHRoaXMuYiA9IHRoaXMuYiA8IDAgfHwgaXNOYU4odGhpcy5iKSA/IDAgOiB0aGlzLmIgPiAyNTUgPyAyNTUgOiB0aGlzLmI7XHJcblxyXG4gICAgLy8gc29tZSBnZXR0ZXJzXHJcbiAgICB0aGlzLnRvUkdCID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAncmdiKCcgKyB0aGlzLnIgKyAnLCAnICsgdGhpcy5nICsgJywgJyArIHRoaXMuYiArICcpJztcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50b0hleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgciA9IHRoaXMuci50b1N0cmluZygxNik7XHJcbiAgICAgICAgdmFyIGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIHZhciBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBpZiAoci5sZW5ndGggPT0gMSkgciA9ICcwJyArIHI7XHJcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpIGcgPSAnMCcgKyBnO1xyXG4gICAgICAgIGlmIChiLmxlbmd0aCA9PSAxKSBiID0gJzAnICsgYjtcclxuICAgICAgICByZXR1cm4gJyMnICsgciArIGcgKyBiO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBoZWxwXHJcbiAgICB0aGlzLmdldEhlbHBYTUwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGV4YW1wbGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgLy8gYWRkIHJlZ2V4cHNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGV4YW1wbGUgPSBjb2xvcl9kZWZzW2ldLmV4YW1wbGU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXhhbXBsZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXNbZXhhbXBsZXMubGVuZ3RoXSA9IGV4YW1wbGVbal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWRkIHR5cGUtaW4gY29sb3JzXHJcbiAgICAgICAgZm9yICh2YXIgc2MgaW4gc2ltcGxlX2NvbG9ycykge1xyXG4gICAgICAgICAgICBleGFtcGxlc1tleGFtcGxlcy5sZW5ndGhdID0gc2M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgeG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB4bWwuc2V0QXR0cmlidXRlKCdpZCcsICdyZ2Jjb2xvci1leGFtcGxlcycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfY29sb3IgPSBuZXcgUkdCQ29sb3IoZXhhbXBsZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGV4YW1wbGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5zdHlsZS5jc3NUZXh0ID0gJ21hcmdpbjogM3B4OyAnICsgJ2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAnICsgJ2JhY2tncm91bmQ6JyArIGxpc3RfY29sb3IudG9IZXgoKSArICc7ICcgKyAnY29sb3I6JyArIGxpc3RfY29sb3IudG9IZXgoKTtcclxuICAgICAgICAgICAgICAgIGV4YW1wbGVfZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCd0ZXN0JykpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfaXRlbV92YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJyArIGV4YW1wbGVzW2ldICsgJyAtPiAnICsgbGlzdF9jb2xvci50b1JHQigpICsgJyAtPiAnICsgbGlzdF9jb2xvci50b0hleCgpKTtcclxuICAgICAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChleGFtcGxlX2Rpdik7XHJcbiAgICAgICAgICAgICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQobGlzdF9pdGVtX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHhtbC5hcHBlbmRDaGlsZChsaXN0X2l0ZW0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geG1sO1xyXG4gICAgfTtcclxufTsiLCIvKlxuICAgIFN0YWNrQmx1ciAtIGEgZmFzdCBhbG1vc3QgR2F1c3NpYW4gQmx1ciBGb3IgQ2FudmFzXG5cbiAgICBWZXJzaW9uOiAgICAgMC41XG4gICAgQXV0aG9yOiAgICAgICAgTWFyaW8gS2xpbmdlbWFublxuICAgIENvbnRhY3Q6ICAgICBtYXJpb0BxdWFzaW1vbmRvLmNvbVxuICAgIFdlYnNpdGU6ICAgIGh0dHA6Ly93d3cucXVhc2ltb25kby5jb20vU3RhY2tCbHVyRm9yQ2FudmFzXG4gICAgVHdpdHRlcjogICAgQHF1YXNpbW9uZG9cblxuICAgIEluIGNhc2UgeW91IGZpbmQgdGhpcyBjbGFzcyB1c2VmdWwgLSBlc3BlY2lhbGx5IGluIGNvbW1lcmNpYWwgcHJvamVjdHMgLVxuICAgIEkgYW0gbm90IHRvdGFsbHkgdW5oYXBweSBmb3IgYSBzbWFsbCBkb25hdGlvbiB0byBteSBQYXlQYWwgYWNjb3VudFxuICAgIG1hcmlvQHF1YXNpbW9uZG8uZGVcblxuICAgIE9yIHN1cHBvcnQgbWUgb24gZmxhdHRyOlxuICAgIGh0dHBzOi8vZmxhdHRyLmNvbS90aGluZy83Mjc5MS9TdGFja0JsdXItYS1mYXN0LWFsbW9zdC1HYXVzc2lhbi1CbHVyLUVmZmVjdC1mb3ItQ2FudmFzSmF2YXNjcmlwdFxuXG4gICAgQ29weXJpZ2h0IChjKSAyMDEwIE1hcmlvIEtsaW5nZW1hbm5cblxuICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAgICBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAgICByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAgICBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAgIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gICAgY29uZGl0aW9uczpcblxuICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gICAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICAgIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gICAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAgICBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAgICBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gICAgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICAgICovXG5cblxudmFyIG11bF90YWJsZSA9IFtcbiAgICA1MTIsNTEyLDQ1Niw1MTIsMzI4LDQ1NiwzMzUsNTEyLDQwNSwzMjgsMjcxLDQ1NiwzODgsMzM1LDI5Miw1MTIsXG4gICAgNDU0LDQwNSwzNjQsMzI4LDI5OCwyNzEsNDk2LDQ1Niw0MjAsMzg4LDM2MCwzMzUsMzEyLDI5MiwyNzMsNTEyLFxuICAgIDQ4Miw0NTQsNDI4LDQwNSwzODMsMzY0LDM0NSwzMjgsMzEyLDI5OCwyODQsMjcxLDI1OSw0OTYsNDc1LDQ1NixcbiAgICA0MzcsNDIwLDQwNCwzODgsMzc0LDM2MCwzNDcsMzM1LDMyMywzMTIsMzAyLDI5MiwyODIsMjczLDI2NSw1MTIsXG4gICAgNDk3LDQ4Miw0NjgsNDU0LDQ0MSw0MjgsNDE3LDQwNSwzOTQsMzgzLDM3MywzNjQsMzU0LDM0NSwzMzcsMzI4LFxuICAgIDMyMCwzMTIsMzA1LDI5OCwyOTEsMjg0LDI3OCwyNzEsMjY1LDI1OSw1MDcsNDk2LDQ4NSw0NzUsNDY1LDQ1NixcbiAgICA0NDYsNDM3LDQyOCw0MjAsNDEyLDQwNCwzOTYsMzg4LDM4MSwzNzQsMzY3LDM2MCwzNTQsMzQ3LDM0MSwzMzUsXG4gICAgMzI5LDMyMywzMTgsMzEyLDMwNywzMDIsMjk3LDI5MiwyODcsMjgyLDI3OCwyNzMsMjY5LDI2NSwyNjEsNTEyLFxuICAgIDUwNSw0OTcsNDg5LDQ4Miw0NzUsNDY4LDQ2MSw0NTQsNDQ3LDQ0MSw0MzUsNDI4LDQyMiw0MTcsNDExLDQwNSxcbiAgICAzOTksMzk0LDM4OSwzODMsMzc4LDM3MywzNjgsMzY0LDM1OSwzNTQsMzUwLDM0NSwzNDEsMzM3LDMzMiwzMjgsXG4gICAgMzI0LDMyMCwzMTYsMzEyLDMwOSwzMDUsMzAxLDI5OCwyOTQsMjkxLDI4NywyODQsMjgxLDI3OCwyNzQsMjcxLFxuICAgIDI2OCwyNjUsMjYyLDI1OSwyNTcsNTA3LDUwMSw0OTYsNDkxLDQ4NSw0ODAsNDc1LDQ3MCw0NjUsNDYwLDQ1NixcbiAgICA0NTEsNDQ2LDQ0Miw0MzcsNDMzLDQyOCw0MjQsNDIwLDQxNiw0MTIsNDA4LDQwNCw0MDAsMzk2LDM5MiwzODgsXG4gICAgMzg1LDM4MSwzNzcsMzc0LDM3MCwzNjcsMzYzLDM2MCwzNTcsMzU0LDM1MCwzNDcsMzQ0LDM0MSwzMzgsMzM1LFxuICAgIDMzMiwzMjksMzI2LDMyMywzMjAsMzE4LDMxNSwzMTIsMzEwLDMwNywzMDQsMzAyLDI5OSwyOTcsMjk0LDI5MixcbiAgICAyODksMjg3LDI4NSwyODIsMjgwLDI3OCwyNzUsMjczLDI3MSwyNjksMjY3LDI2NSwyNjMsMjYxLDI1OV07XG5cblxudmFyIHNoZ190YWJsZSA9IFtcbiAgICA5LCAxMSwgMTIsIDEzLCAxMywgMTQsIDE0LCAxNSwgMTUsIDE1LCAxNSwgMTYsIDE2LCAxNiwgMTYsIDE3LFxuICAgIDE3LCAxNywgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE5LFxuICAgIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAyMCwgMjAsIDIwLFxuICAgIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIxLFxuICAgIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLFxuICAgIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLFxuICAgIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLFxuICAgIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQgXTtcblxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2UoaW1nLCBjYW52YXMsIHJhZGl1cywgYmx1ckFscGhhQ2hhbm5lbClcbntcbiAgICBpZiAodHlwZW9mKGltZykgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhaW1nIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB3ID0gaW1nLm5hdHVyYWxXaWR0aDtcbiAgICB2YXIgaCA9IGltZy5uYXR1cmFsSGVpZ2h0O1xuXG4gICAgaWYgKHR5cGVvZihjYW52YXMpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoICA9IHcgKyAncHgnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgICBjYW52YXMud2lkdGggPSB3O1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuXG4gICAgaWYgKGJsdXJBbHBoYUNoYW5uZWwpXG4gICAgICAgIHByb2Nlc3NDYW52YXNSR0JBKGNhbnZhcywgMCwgMCwgdywgaCwgcmFkaXVzKTtcbiAgICBlbHNlXG4gICAgICAgIHByb2Nlc3NDYW52YXNSR0IoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KVxue1xuICAgIGlmICh0eXBlb2YoY2FudmFzKSA9PSAnc3RyaW5nJylcbiAgICAgICAgdmFyIGNhbnZhcyAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KVxuICAgICAgICByZXR1cm47XG5cbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBpbWFnZURhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEodG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmFibGUgdG8gYWNjZXNzIGxvY2FsIGltYWdlIGRhdGE6IFwiICsgZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5hYmxlIHRvIGFjY2VzcyBpbWFnZSBkYXRhOiBcIiArIGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NDYW52YXNSR0JBKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuICAgIHJhZGl1cyB8PSAwO1xuXG4gICAgdmFyIGltYWdlRGF0YSA9IGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgaW1hZ2VEYXRhID0gcHJvY2Vzc0ltYWdlRGF0YVJHQkEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG5cbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3kpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcblxuICAgIHZhciB4LCB5LCBpLCBwLCB5cCwgeWksIHl3LCByX3N1bSwgZ19zdW0sIGJfc3VtLCBhX3N1bSxcbiAgICAgICAgcl9vdXRfc3VtLCBnX291dF9zdW0sIGJfb3V0X3N1bSwgYV9vdXRfc3VtLFxuICAgICAgICByX2luX3N1bSwgZ19pbl9zdW0sIGJfaW5fc3VtLCBhX2luX3N1bSxcbiAgICAgICAgcHIsIHBnLCBwYiwgcGEsIHJicztcblxuICAgIHZhciBkaXYgPSByYWRpdXMgKyByYWRpdXMgKyAxO1xuICAgIHZhciB3NCA9IHdpZHRoIDw8IDI7XG4gICAgdmFyIHdpZHRoTWludXMxICA9IHdpZHRoIC0gMTtcbiAgICB2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcbiAgICB2YXIgcmFkaXVzUGx1czEgID0gcmFkaXVzICsgMTtcbiAgICB2YXIgc3VtRmFjdG9yID0gcmFkaXVzUGx1czEgKiAocmFkaXVzUGx1czEgKyAxKSAvIDI7XG5cbiAgICB2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICB2YXIgc3RhY2sgPSBzdGFja1N0YXJ0O1xuICAgIGZvciAoaSA9IDE7IGkgPCBkaXY7IGkrKylcbiAgICB7XG4gICAgICAgIHN0YWNrID0gc3RhY2submV4dCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICAgICAgaWYgKGkgPT0gcmFkaXVzUGx1czEpIHZhciBzdGFja0VuZCA9IHN0YWNrO1xuICAgIH1cbiAgICBzdGFjay5uZXh0ID0gc3RhY2tTdGFydDtcbiAgICB2YXIgc3RhY2tJbiA9IG51bGw7XG4gICAgdmFyIHN0YWNrT3V0ID0gbnVsbDtcblxuICAgIHl3ID0geWkgPSAwO1xuXG4gICAgdmFyIG11bF9zdW0gPSBtdWxfdGFibGVbcmFkaXVzXTtcbiAgICB2YXIgc2hnX3N1bSA9IHNoZ190YWJsZVtyYWRpdXNdO1xuXG4gICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgIHtcbiAgICAgICAgcl9pbl9zdW0gPSBnX2luX3N1bSA9IGJfaW5fc3VtID0gYV9pbl9zdW0gPSByX3N1bSA9IGdfc3VtID0gYl9zdW0gPSBhX3N1bSA9IDA7XG5cbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG4gICAgICAgIGFfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBhID0gcGl4ZWxzW3lpKzNdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuICAgICAgICBhX3N1bSArPSBzdW1GYWN0b3IgKiBwYTtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrLmEgPSBwYTtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgaSA/IHdpZHRoTWludXMxIDogaSkgPDwgMik7XG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1twXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1twKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1twKzJdKSkgKiByYnM7XG4gICAgICAgICAgICBhX3N1bSArPSAoc3RhY2suYSA9IChwYSA9IHBpeGVsc1twKzNdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IHBhO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzNdID0gcGEgPSAoYV9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgaWYgKHBhICE9IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGEgPSAyNTUgLyBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWldICAgPSAoKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWkrMV0gPSAoKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWkrMl0gPSAoKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpXSA9IHBpeGVsc1t5aSsxXSA9IHBpeGVsc1t5aSsyXSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcbiAgICAgICAgICAgIGFfc3VtIC09IGFfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgICAgICAgYV9vdXRfc3VtIC09IHN0YWNrSW4uYTtcblxuICAgICAgICAgICAgcCA9ICAoeXcgKyAoKHAgPSB4ICsgcmFkaXVzICsgMSkgPCB3aWR0aE1pbnVzMSA/IHAgOiB3aWR0aE1pbnVzMSkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKTtcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSk7XG4gICAgICAgICAgICBhX2luX3N1bSArPSAoc3RhY2tJbi5hID0gcGl4ZWxzW3ArM10pO1xuXG4gICAgICAgICAgICByX3N1bSArPSByX2luX3N1bTtcbiAgICAgICAgICAgIGdfc3VtICs9IGdfaW5fc3VtO1xuICAgICAgICAgICAgYl9zdW0gKz0gYl9pbl9zdW07XG4gICAgICAgICAgICBhX3N1bSArPSBhX2luX3N1bTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuICAgICAgICAgICAgYV9vdXRfc3VtICs9IChwYSA9IHN0YWNrT3V0LmEpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSAtPSBwYTtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHl3ICs9IHdpZHRoO1xuICAgIH1cblxuXG4gICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAge1xuICAgICAgICBnX2luX3N1bSA9IGJfaW5fc3VtID0gYV9pbl9zdW0gPSByX2luX3N1bSA9IGdfc3VtID0gYl9zdW0gPSBhX3N1bSA9IHJfc3VtID0gMDtcblxuICAgICAgICB5aSA9IHggPDwgMjtcbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG4gICAgICAgIGFfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBhID0gcGl4ZWxzW3lpKzNdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuICAgICAgICBhX3N1bSArPSBzdW1GYWN0b3IgKiBwYTtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrLmEgPSBwYTtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHlwID0gd2lkdGg7XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSByYWRpdXM7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgeWkgPSAoeXAgKyB4KSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1t5aV0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbeWkrMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3lpKzJdKSkgKiByYnM7XG4gICAgICAgICAgICBhX3N1bSArPSAoc3RhY2suYSA9IChwYSA9IHBpeGVsc1t5aSszXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSArPSBwYTtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuXG4gICAgICAgICAgICBpZihpIDwgaGVpZ2h0TWludXMxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHlwICs9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeWkgPSB4O1xuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgPDwgMjtcbiAgICAgICAgICAgIHBpeGVsc1twKzNdID0gcGEgPSAoYV9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgaWYgKHBhID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYSA9IDI1NSAvIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twXSAgID0gKChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3ArMV0gPSAoKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcCsyXSA9ICgoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcF0gPSBwaXhlbHNbcCsxXSA9IHBpeGVsc1twKzJdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuICAgICAgICAgICAgYV9zdW0gLT0gYV9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG4gICAgICAgICAgICBhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xuXG4gICAgICAgICAgICBwID0gKHggKyAoKChwID0geSArIHJhZGl1c1BsdXMxKSA8IGhlaWdodE1pbnVzMSA/IHAgOiBoZWlnaHRNaW51czEpICogd2lkdGgpKSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAocl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSkpO1xuICAgICAgICAgICAgYl9zdW0gKz0gKGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSkpO1xuICAgICAgICAgICAgYV9zdW0gKz0gKGFfaW5fc3VtICs9IChzdGFja0luLmEgPSBwaXhlbHNbcCszXSkpO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG4gICAgICAgICAgICBhX291dF9zdW0gKz0gKHBhID0gc3RhY2tPdXQuYSk7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtIC09IHBhO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IHdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NDYW52YXNSR0IoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG4gICAgcmFkaXVzIHw9IDA7XG5cbiAgICB2YXIgaW1hZ2VEYXRhID0gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgaW1hZ2VEYXRhID0gcHJvY2Vzc0ltYWdlRGF0YVJHQihpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZURhdGFSR0IoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG5cbiAgICB2YXIgeCwgeSwgaSwgcCwgeXAsIHlpLCB5dywgcl9zdW0sIGdfc3VtLCBiX3N1bSxcbiAgICAgICAgcl9vdXRfc3VtLCBnX291dF9zdW0sIGJfb3V0X3N1bSxcbiAgICAgICAgcl9pbl9zdW0sIGdfaW5fc3VtLCBiX2luX3N1bSxcbiAgICAgICAgcHIsIHBnLCBwYiwgcmJzO1xuXG4gICAgdmFyIGRpdiA9IHJhZGl1cyArIHJhZGl1cyArIDE7XG4gICAgdmFyIHc0ID0gd2lkdGggPDwgMjtcbiAgICB2YXIgd2lkdGhNaW51czEgID0gd2lkdGggLSAxO1xuICAgIHZhciBoZWlnaHRNaW51czEgPSBoZWlnaHQgLSAxO1xuICAgIHZhciByYWRpdXNQbHVzMSAgPSByYWRpdXMgKyAxO1xuICAgIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcblxuICAgIHZhciBzdGFja1N0YXJ0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gICAgZm9yIChpID0gMTsgaSA8IGRpdjsgaSsrKVxuICAgIHtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgICAgICBpZiAoaSA9PSByYWRpdXNQbHVzMSkgdmFyIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICAgIHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xuICAgIHZhciBzdGFja0luID0gbnVsbDtcbiAgICB2YXIgc3RhY2tPdXQgPSBudWxsO1xuXG4gICAgeXcgPSB5aSA9IDA7XG5cbiAgICB2YXIgbXVsX3N1bSA9IG11bF90YWJsZVtyYWRpdXNdO1xuICAgIHZhciBzaGdfc3VtID0gc2hnX3RhYmxlW3JhZGl1c107XG5cbiAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAge1xuICAgICAgICByX2luX3N1bSA9IGdfaW5fc3VtID0gYl9pbl9zdW0gPSByX3N1bSA9IGdfc3VtID0gYl9zdW0gPSAwO1xuXG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpICsgKCh3aWR0aE1pbnVzMSA8IGkgPyB3aWR0aE1pbnVzMSA6IGkpIDw8IDIpO1xuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbcF0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbcCsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbcCsyXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwaXhlbHNbeWldICAgPSAocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzFdID0gKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1t5aSsyXSA9IChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuXG4gICAgICAgICAgICBwID0gICh5dyArICgocCA9IHggKyByYWRpdXMgKyAxKSA8IHdpZHRoTWludXMxID8gcCA6IHdpZHRoTWludXMxKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSk7XG4gICAgICAgICAgICBnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKTtcblxuICAgICAgICAgICAgcl9zdW0gKz0gcl9pbl9zdW07XG4gICAgICAgICAgICBnX3N1bSArPSBnX2luX3N1bTtcbiAgICAgICAgICAgIGJfc3VtICs9IGJfaW5fc3VtO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHl3ICs9IHdpZHRoO1xuICAgIH1cblxuXG4gICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAge1xuICAgICAgICBnX2luX3N1bSA9IGJfaW5fc3VtID0gcl9pbl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gcl9zdW0gPSAwO1xuXG4gICAgICAgIHlpID0geCA8PCAyO1xuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgeXAgPSB3aWR0aDtcblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHJhZGl1czsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB5aSA9ICh5cCArIHgpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3lpXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1t5aSsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbeWkrMl0pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgICAgICAgIGlmKGkgPCBoZWlnaHRNaW51czEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB5aSA9IHg7XG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgICAgICAgcGl4ZWxzW3BdICAgPSAocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3ArMV0gPSAoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3ArMl0gPSAoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcblxuICAgICAgICAgICAgcCA9ICh4ICsgKCgocCA9IHkgKyByYWRpdXNQbHVzMSkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxKSAqIHdpZHRoKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pKTtcbiAgICAgICAgICAgIGJfc3VtICs9IChiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pKTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBCbHVyU3RhY2soKVxue1xuICAgIHRoaXMuciA9IDA7XG4gICAgdGhpcy5nID0gMDtcbiAgICB0aGlzLmIgPSAwO1xuICAgIHRoaXMuYSA9IDA7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW1hZ2U6IHByb2Nlc3NJbWFnZSxcbiAgICBjYW52YXNSR0JBOiBwcm9jZXNzQ2FudmFzUkdCQSxcbiAgICBjYW52YXNSR0I6IHByb2Nlc3NDYW52YXNSR0IsXG4gICAgaW1hZ2VEYXRhUkdCQTogcHJvY2Vzc0ltYWdlRGF0YVJHQkEsXG4gICAgaW1hZ2VEYXRhUkdCOiBwcm9jZXNzSW1hZ2VEYXRhUkdCXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==