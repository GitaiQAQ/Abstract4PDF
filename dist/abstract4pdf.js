/*!
 * Abstract4PDF 0.1.0 <https://github.com/GitaiQAQ/Abstract4PDF>
 * Copyright (c) 2018 Gitai <i@gitai.me> https://gitai.me
 * Released under MIT License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pdfMake"));
	else if(typeof define === 'function' && define.amd)
		define(["pdfMake"], factory);
	else if(typeof exports === 'object')
		exports["abstract4pdf"] = factory(require("pdfMake"));
	else
		root["abstract4pdf"] = factory(root["pdfMake"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_pdfmake_build_pdfmake__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~canvg":"vendors~canvg"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/abstract4pdf/0.1.0/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpabstract4pdf"] = window["webpackJsonpabstract4pdf"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-line-break/dist/LineBreak.js":
/*!*******************************************************!*\
  !*** ./node_modules/css-line-break/dist/LineBreak.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(/*! ./Trie */ "./node_modules/css-line-break/dist/Trie.js");

var _linebreakTrie = __webpack_require__(/*! ./linebreak-trie */ "./node_modules/css-line-break/dist/linebreak-trie.js");

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
            categories.push(false);
        }

        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }

        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }

            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }

        indicies.push(index);

        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }

        if (classType === SA) {
            return types.push(AL);
        }

        if (classType === AI) {
            return types.push(AL);
        }

        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];

            if (next === b) {
                return true;
            }

            if (next !== SP) {
                break;
            }
        }
    }

    if (current === SP) {
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
                        break;
                    }
                }
            }

            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }

    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];

    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }

    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }

    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }

    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }

    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
        return BREAK_NOT_ALLOWED;
    }

    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            } else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }

    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }

    return BREAK_ALLOWED;
};

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),

/***/ "./node_modules/css-line-break/dist/Trie.js":
/*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Trie.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }

    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }

            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        }
    }]);

    return Trie;
}();

/***/ }),

/***/ "./node_modules/css-line-break/dist/Util.js":
/*!**************************************************!*\
  !*** ./node_modules/css-line-break/dist/Util.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),

/***/ "./node_modules/css-line-break/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/css-line-break/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/css-line-break/dist/Util.js");

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(/*! ./LineBreak */ "./node_modules/css-line-break/dist/LineBreak.js");

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),

/***/ "./node_modules/css-line-break/dist/linebreak-trie.js":
/*!************************************************************!*\
  !*** ./node_modules/css-line-break/dist/linebreak-trie.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Angle.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Angle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ANGLE = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;

var parseAngle = exports.parseAngle = function parseAngle(angle) {
    var match = angle.match(ANGLE);

    if (match) {
        var value = parseFloat(match[1]);
        switch (match[2].toLowerCase()) {
            case 'deg':
                return Math.PI * value / 180;
            case 'grad':
                return Math.PI / 200 * value;
            case 'rad':
                return value;
            case 'turn':
                return Math.PI * 2 * value;
        }
    }

    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Bounds.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Bounds.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBoundCurves = exports.calculatePaddingBoxPath = exports.calculateBorderBoxPath = exports.parsePathForBorder = exports.parseDocumentSize = exports.calculateContentBox = exports.calculatePaddingBox = exports.parseBounds = exports.Bounds = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector = __webpack_require__(/*! ./drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _BezierCurve = __webpack_require__(/*! ./drawing/BezierCurve */ "./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js");

var _BezierCurve2 = _interopRequireDefault(_BezierCurve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;

var H = 0;
var V = 1;

var Bounds = exports.Bounds = function () {
    function Bounds(x, y, w, h) {
        _classCallCheck(this, Bounds);

        this.left = x;
        this.top = y;
        this.width = w;
        this.height = h;
    }

    _createClass(Bounds, null, [{
        key: 'fromClientRect',
        value: function fromClientRect(clientRect, scrollX, scrollY) {
            return new Bounds(clientRect.left + scrollX, clientRect.top + scrollY, clientRect.width, clientRect.height);
        }
    }]);

    return Bounds;
}();

var parseBounds = exports.parseBounds = function parseBounds(node, scrollX, scrollY) {
    return Bounds.fromClientRect(node.getBoundingClientRect(), scrollX, scrollY);
};

var calculatePaddingBox = exports.calculatePaddingBox = function calculatePaddingBox(bounds, borders) {
    return new Bounds(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth));
};

var calculateContentBox = exports.calculateContentBox = function calculateContentBox(bounds, padding, borders) {
    // TODO support percentage paddings
    var paddingTop = padding[TOP].value;
    var paddingRight = padding[RIGHT].value;
    var paddingBottom = padding[BOTTOM].value;
    var paddingLeft = padding[LEFT].value;

    return new Bounds(bounds.left + paddingLeft + borders[LEFT].borderWidth, bounds.top + paddingTop + borders[TOP].borderWidth, bounds.width - (borders[RIGHT].borderWidth + borders[LEFT].borderWidth + paddingLeft + paddingRight), bounds.height - (borders[TOP].borderWidth + borders[BOTTOM].borderWidth + paddingTop + paddingBottom));
};

var parseDocumentSize = exports.parseDocumentSize = function parseDocumentSize(document) {
    var body = document.body;
    var documentElement = document.documentElement;

    if (!body || !documentElement) {
        throw new Error( true ? 'Unable to get document size' : undefined);
    }
    var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));

    var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));

    return new Bounds(0, 0, width, height);
};

var parsePathForBorder = exports.parsePathForBorder = function parsePathForBorder(curves, borderSide) {
    switch (borderSide) {
        case TOP:
            return createPathFromCurves(curves.topLeftOuter, curves.topLeftInner, curves.topRightOuter, curves.topRightInner);
        case RIGHT:
            return createPathFromCurves(curves.topRightOuter, curves.topRightInner, curves.bottomRightOuter, curves.bottomRightInner);
        case BOTTOM:
            return createPathFromCurves(curves.bottomRightOuter, curves.bottomRightInner, curves.bottomLeftOuter, curves.bottomLeftInner);
        case LEFT:
        default:
            return createPathFromCurves(curves.bottomLeftOuter, curves.bottomLeftInner, curves.topLeftOuter, curves.topLeftInner);
    }
};

var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
    var path = [];
    if (outer1 instanceof _BezierCurve2.default) {
        path.push(outer1.subdivide(0.5, false));
    } else {
        path.push(outer1);
    }

    if (outer2 instanceof _BezierCurve2.default) {
        path.push(outer2.subdivide(0.5, true));
    } else {
        path.push(outer2);
    }

    if (inner2 instanceof _BezierCurve2.default) {
        path.push(inner2.subdivide(0.5, true).reverse());
    } else {
        path.push(inner2);
    }

    if (inner1 instanceof _BezierCurve2.default) {
        path.push(inner1.subdivide(0.5, false).reverse());
    } else {
        path.push(inner1);
    }

    return path;
};

var calculateBorderBoxPath = exports.calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
    return [curves.topLeftOuter, curves.topRightOuter, curves.bottomRightOuter, curves.bottomLeftOuter];
};

var calculatePaddingBoxPath = exports.calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
    return [curves.topLeftInner, curves.topRightInner, curves.bottomRightInner, curves.bottomLeftInner];
};

var parseBoundCurves = exports.parseBoundCurves = function parseBoundCurves(bounds, borders, borderRadius) {
    var tlh = borderRadius[CORNER.TOP_LEFT][H].getAbsoluteValue(bounds.width);
    var tlv = borderRadius[CORNER.TOP_LEFT][V].getAbsoluteValue(bounds.height);
    var trh = borderRadius[CORNER.TOP_RIGHT][H].getAbsoluteValue(bounds.width);
    var trv = borderRadius[CORNER.TOP_RIGHT][V].getAbsoluteValue(bounds.height);
    var brh = borderRadius[CORNER.BOTTOM_RIGHT][H].getAbsoluteValue(bounds.width);
    var brv = borderRadius[CORNER.BOTTOM_RIGHT][V].getAbsoluteValue(bounds.height);
    var blh = borderRadius[CORNER.BOTTOM_LEFT][H].getAbsoluteValue(bounds.width);
    var blv = borderRadius[CORNER.BOTTOM_LEFT][V].getAbsoluteValue(bounds.height);

    var factors = [];
    factors.push((tlh + trh) / bounds.width);
    factors.push((blh + brh) / bounds.width);
    factors.push((tlv + blv) / bounds.height);
    factors.push((trv + brv) / bounds.height);
    var maxFactor = Math.max.apply(Math, factors);

    if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
    }

    var topWidth = bounds.width - trh;
    var rightHeight = bounds.height - brv;
    var bottomWidth = bounds.width - brh;
    var leftHeight = bounds.height - blv;

    return {
        topLeftOuter: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new _Vector2.default(bounds.left, bounds.top),
        topLeftInner: tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth, Math.max(0, tlh - borders[LEFT].borderWidth), Math.max(0, tlv - borders[TOP].borderWidth), CORNER.TOP_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + borders[TOP].borderWidth),
        topRightOuter: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top),
        topRightInner: trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borders[LEFT].borderWidth), bounds.top + borders[TOP].borderWidth, topWidth > bounds.width + borders[LEFT].borderWidth ? 0 : trh - borders[LEFT].borderWidth, trv - borders[TOP].borderWidth, CORNER.TOP_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + borders[TOP].borderWidth),
        bottomRightOuter: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width, bounds.top + bounds.height),
        bottomRightInner: brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borders[LEFT].borderWidth), bounds.top + Math.min(rightHeight, bounds.height + borders[TOP].borderWidth), Math.max(0, brh - borders[RIGHT].borderWidth), brv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_RIGHT) : new _Vector2.default(bounds.left + bounds.width - borders[RIGHT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth),
        bottomLeftOuter: blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left, bounds.top + bounds.height),
        bottomLeftInner: blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borders[LEFT].borderWidth, bounds.top + leftHeight, Math.max(0, blh - borders[LEFT].borderWidth), blv - borders[BOTTOM].borderWidth, CORNER.BOTTOM_LEFT) : new _Vector2.default(bounds.left + borders[LEFT].borderWidth, bounds.top + bounds.height - borders[BOTTOM].borderWidth)
    };
};

var CORNER = {
    TOP_LEFT: 0,
    TOP_RIGHT: 1,
    BOTTOM_RIGHT: 2,
    BOTTOM_LEFT: 3
};

var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
    var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
    var ox = r1 * kappa; // control point offset horizontal
    var oy = r2 * kappa; // control point offset vertical
    var xm = x + r1; // x-middle
    var ym = y + r2; // y-middle

    switch (position) {
        case CORNER.TOP_LEFT:
            return new _BezierCurve2.default(new _Vector2.default(x, ym), new _Vector2.default(x, ym - oy), new _Vector2.default(xm - ox, y), new _Vector2.default(xm, y));
        case CORNER.TOP_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(x, y), new _Vector2.default(x + ox, y), new _Vector2.default(xm, ym - oy), new _Vector2.default(xm, ym));
        case CORNER.BOTTOM_RIGHT:
            return new _BezierCurve2.default(new _Vector2.default(xm, y), new _Vector2.default(xm, y + oy), new _Vector2.default(x + ox, ym), new _Vector2.default(x, ym));
        case CORNER.BOTTOM_LEFT:
        default:
            return new _BezierCurve2.default(new _Vector2.default(xm, ym), new _Vector2.default(xm - ox, ym), new _Vector2.default(x, y + oy), new _Vector2.default(x, y));
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Clone.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Clone.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneWindow = exports.DocumentCloner = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Proxy = __webpack_require__(/*! ./Proxy */ "./node_modules/html2canvas/dist/npm/Proxy.js");

var _ResourceLoader = __webpack_require__(/*! ./ResourceLoader */ "./node_modules/html2canvas/dist/npm/ResourceLoader.js");

var _ResourceLoader2 = _interopRequireDefault(_ResourceLoader);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _CanvasRenderer = __webpack_require__(/*! ./renderer/CanvasRenderer */ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js");

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _PseudoNodeContent = __webpack_require__(/*! ./PseudoNodeContent */ "./node_modules/html2canvas/dist/npm/PseudoNodeContent.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

var DocumentCloner = exports.DocumentCloner = function () {
    function DocumentCloner(element, options, logger, copyInline, renderer) {
        _classCallCheck(this, DocumentCloner);

        this.referenceElement = element;
        this.scrolledElements = [];
        this.copyStyles = copyInline;
        this.inlineImages = copyInline;
        this.logger = logger;
        this.options = options;
        this.renderer = renderer;
        this.resourceLoader = new _ResourceLoader2.default(options, logger, window);
        this.pseudoContentData = {
            counters: {},
            quoteDepth: 0
        };
        // $FlowFixMe
        this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
    }

    _createClass(DocumentCloner, [{
        key: 'inlineAllImages',
        value: function inlineAllImages(node) {
            var _this = this;

            if (this.inlineImages && node) {
                var style = node.style;
                Promise.all((0, _background.parseBackgroundImage)(style.backgroundImage).map(function (backgroundImage) {
                    if (backgroundImage.method === 'url') {
                        return _this.resourceLoader.inlineImage(backgroundImage.args[0]).then(function (img) {
                            return img && typeof img.src === 'string' ? 'url("' + img.src + '")' : 'none';
                        }).catch(function (e) {
                            if (true) {
                                _this.logger.log('Unable to load image', e);
                            }
                        });
                    }
                    return Promise.resolve('' + backgroundImage.prefix + backgroundImage.method + '(' + backgroundImage.args.join(',') + ')');
                })).then(function (backgroundImages) {
                    if (backgroundImages.length > 1) {
                        // TODO Multiple backgrounds somehow broken in Chrome
                        style.backgroundColor = '';
                    }
                    style.backgroundImage = backgroundImages.join(',');
                });

                if (node instanceof HTMLImageElement) {
                    this.resourceLoader.inlineImage(node.src).then(function (img) {
                        if (img && node instanceof HTMLImageElement && node.parentNode) {
                            var parentNode = node.parentNode;
                            var clonedChild = (0, _Util.copyCSSStyles)(node.style, img.cloneNode(false));
                            parentNode.replaceChild(clonedChild, node);
                        }
                    }).catch(function (e) {
                        if (true) {
                            _this.logger.log('Unable to load image', e);
                        }
                    });
                }
            }
        }
    }, {
        key: 'inlineFonts',
        value: function inlineFonts(document) {
            var _this2 = this;

            return Promise.all(Array.from(document.styleSheets).map(function (sheet) {
                if (sheet.href) {
                    return fetch(sheet.href).then(function (res) {
                        return res.text();
                    }).then(function (text) {
                        return createStyleSheetFontsFromText(text, sheet.href);
                    }).catch(function (e) {
                        if (true) {
                            _this2.logger.log('Unable to load stylesheet', e);
                        }
                        return [];
                    });
                }
                return getSheetFonts(sheet, document);
            })).then(function (fonts) {
                return fonts.reduce(function (acc, font) {
                    return acc.concat(font);
                }, []);
            }).then(function (fonts) {
                return Promise.all(fonts.map(function (font) {
                    return fetch(font.formats[0].src).then(function (response) {
                        return response.blob();
                    }).then(function (blob) {
                        return new Promise(function (resolve, reject) {
                            var reader = new FileReader();
                            reader.onerror = reject;
                            reader.onload = function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            };
                            reader.readAsDataURL(blob);
                        });
                    }).then(function (dataUri) {
                        font.fontFace.setProperty('src', 'url("' + dataUri + '")');
                        return '@font-face {' + font.fontFace.cssText + ' ';
                    });
                }));
            }).then(function (fontCss) {
                var style = document.createElement('style');
                style.textContent = fontCss.join('\n');
                _this2.documentElement.appendChild(style);
            });
        }
    }, {
        key: 'createElementClone',
        value: function createElementClone(node) {
            var _this3 = this;

            if (this.copyStyles && node instanceof HTMLCanvasElement) {
                var img = node.ownerDocument.createElement('img');
                try {
                    img.src = node.toDataURL();
                    return img;
                } catch (e) {
                    if (true) {
                        this.logger.log('Unable to clone canvas contents, canvas is tainted');
                    }
                }
            }

            if (node instanceof HTMLIFrameElement) {
                var tempIframe = node.cloneNode(false);
                var iframeKey = generateIframeKey();
                tempIframe.setAttribute('data-html2canvas-internal-iframe-key', iframeKey);

                var _parseBounds = (0, _Bounds.parseBounds)(node, 0, 0),
                    width = _parseBounds.width,
                    height = _parseBounds.height;

                this.resourceLoader.cache[iframeKey] = getIframeDocumentElement(node, this.options).then(function (documentElement) {
                    return _this3.renderer(documentElement, {
                        async: _this3.options.async,
                        allowTaint: _this3.options.allowTaint,
                        backgroundColor: '#ffffff',
                        canvas: null,
                        imageTimeout: _this3.options.imageTimeout,
                        logging: _this3.options.logging,
                        proxy: _this3.options.proxy,
                        removeContainer: _this3.options.removeContainer,
                        scale: _this3.options.scale,
                        foreignObjectRendering: _this3.options.foreignObjectRendering,
                        useCORS: _this3.options.useCORS,
                        target: new _CanvasRenderer2.default(),
                        width: width,
                        height: height,
                        x: 0,
                        y: 0,
                        windowWidth: documentElement.ownerDocument.defaultView.innerWidth,
                        windowHeight: documentElement.ownerDocument.defaultView.innerHeight,
                        scrollX: documentElement.ownerDocument.defaultView.pageXOffset,
                        scrollY: documentElement.ownerDocument.defaultView.pageYOffset
                    }, _this3.logger.child(iframeKey));
                }).then(function (canvas) {
                    return new Promise(function (resolve, reject) {
                        var iframeCanvas = document.createElement('img');
                        iframeCanvas.onload = function () {
                            return resolve(canvas);
                        };
                        iframeCanvas.onerror = reject;
                        iframeCanvas.src = canvas.toDataURL();
                        if (tempIframe.parentNode) {
                            tempIframe.parentNode.replaceChild((0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node), iframeCanvas), tempIframe);
                        }
                    });
                });
                return tempIframe;
            }

            if (node instanceof HTMLStyleElement && node.sheet && node.sheet.cssRules) {
                var css = [].slice.call(node.sheet.cssRules, 0).reduce(function (css, rule) {
                    try {
                        if (rule && rule.cssText) {
                            return css + rule.cssText;
                        }
                        return css;
                    } catch (err) {
                        _this3.logger.log('Unable to access cssText property', rule.name);
                        return css;
                    }
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
            }

            return node.cloneNode(false);
        }
    }, {
        key: 'cloneNode',
        value: function cloneNode(node) {
            var clone = node.nodeType === Node.TEXT_NODE ? document.createTextNode(node.nodeValue) : this.createElementClone(node);

            var window = node.ownerDocument.defaultView;
            var style = node instanceof window.HTMLElement ? window.getComputedStyle(node) : null;
            var styleBefore = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':before') : null;
            var styleAfter = node instanceof window.HTMLElement ? window.getComputedStyle(node, ':after') : null;

            if (this.referenceElement === node && clone instanceof window.HTMLElement) {
                this.clonedReferenceElement = clone;
            }

            if (clone instanceof window.HTMLBodyElement) {
                createPseudoHideStyles(clone);
            }

            var counters = (0, _PseudoNodeContent.parseCounterReset)(style, this.pseudoContentData);
            var contentBefore = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleBefore, this.pseudoContentData);

            for (var child = node.firstChild; child; child = child.nextSibling) {
                if (child.nodeType !== Node.ELEMENT_NODE || child.nodeName !== 'SCRIPT' &&
                // $FlowFixMe
                !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' ||
                // $FlowFixMe
                !this.options.ignoreElements(child))) {
                    if (!this.copyStyles || child.nodeName !== 'STYLE') {
                        clone.appendChild(this.cloneNode(child));
                    }
                }
            }

            var contentAfter = (0, _PseudoNodeContent.resolvePseudoContent)(node, styleAfter, this.pseudoContentData);
            (0, _PseudoNodeContent.popCounters)(counters, this.pseudoContentData);

            if (node instanceof window.HTMLElement && clone instanceof window.HTMLElement) {
                if (styleBefore) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleBefore, contentBefore, PSEUDO_BEFORE));
                }
                if (styleAfter) {
                    this.inlineAllImages(inlinePseudoElement(node, clone, styleAfter, contentAfter, PSEUDO_AFTER));
                }
                if (style && this.copyStyles && !(node instanceof HTMLIFrameElement)) {
                    (0, _Util.copyCSSStyles)(style, clone);
                }
                this.inlineAllImages(clone);
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                switch (node.nodeName) {
                    case 'CANVAS':
                        if (!this.copyStyles) {
                            cloneCanvasContents(node, clone);
                        }
                        break;
                    case 'TEXTAREA':
                    case 'SELECT':
                        clone.value = node.value;
                        break;
                }
            }
            return clone;
        }
    }]);

    return DocumentCloner;
}();

var getSheetFonts = function getSheetFonts(sheet, document) {
    // $FlowFixMe
    return (sheet.cssRules ? Array.from(sheet.cssRules) : []).filter(function (rule) {
        return rule.type === CSSRule.FONT_FACE_RULE;
    }).map(function (rule) {
        var src = (0, _background.parseBackgroundImage)(rule.style.getPropertyValue('src'));
        var formats = [];
        for (var i = 0; i < src.length; i++) {
            if (src[i].method === 'url' && src[i + 1] && src[i + 1].method === 'format') {
                var a = document.createElement('a');
                a.href = src[i].args[0];
                if (document.body) {
                    document.body.appendChild(a);
                }

                var font = {
                    src: a.href,
                    format: src[i + 1].args[0]
                };
                formats.push(font);
            }
        }

        return {
            // TODO select correct format for browser),

            formats: formats.filter(function (font) {
                return (/^woff/i.test(font.format)
                );
            }),
            fontFace: rule.style
        };
    }).filter(function (font) {
        return font.formats.length;
    });
};

var createStyleSheetFontsFromText = function createStyleSheetFontsFromText(text, baseHref) {
    var doc = document.implementation.createHTMLDocument('');
    var base = document.createElement('base');
    // $FlowFixMe
    base.href = baseHref;
    var style = document.createElement('style');

    style.textContent = text;
    if (doc.head) {
        doc.head.appendChild(base);
    }
    if (doc.body) {
        doc.body.appendChild(style);
    }

    return style.sheet ? getSheetFonts(style.sheet, doc) : [];
};

var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
    if (ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
        ownerDocument.defaultView.scrollTo(x, y);
    }
};

var cloneCanvasContents = function cloneCanvasContents(canvas, clonedCanvas) {
    try {
        if (clonedCanvas) {
            clonedCanvas.width = canvas.width;
            clonedCanvas.height = canvas.height;
            var ctx = canvas.getContext('2d');
            var clonedCtx = clonedCanvas.getContext('2d');
            if (ctx) {
                clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
            } else {
                clonedCtx.drawImage(canvas, 0, 0);
            }
        }
    } catch (e) {}
};

var inlinePseudoElement = function inlinePseudoElement(node, clone, style, contentItems, pseudoElt) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return;
    }

    var anonymousReplacedElement = clone.ownerDocument.createElement('html2canvaspseudoelement');
    (0, _Util.copyCSSStyles)(style, anonymousReplacedElement);

    if (contentItems) {
        var len = contentItems.length;
        for (var i = 0; i < len; i++) {
            var item = contentItems[i];
            switch (item.type) {
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                    var img = clone.ownerDocument.createElement('img');
                    img.src = (0, _background.parseBackgroundImage)('url(' + item.value + ')')[0].args[0];
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                    break;
                case _PseudoNodeContent.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                    anonymousReplacedElement.appendChild(clone.ownerDocument.createTextNode(item.value));
                    break;
            }
        }
    }

    anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    clone.className += pseudoElt === PSEUDO_BEFORE ? ' ' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : ' ' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
    if (pseudoElt === PSEUDO_BEFORE) {
        clone.insertBefore(anonymousReplacedElement, clone.firstChild);
    } else {
        clone.appendChild(anonymousReplacedElement);
    }

    return anonymousReplacedElement;
};

var URL_REGEXP = /^url\((.+)\)$/i;
var PSEUDO_BEFORE = ':before';
var PSEUDO_AFTER = ':after';
var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';

var PSEUDO_HIDE_ELEMENT_STYLE = '{\n    content: "" !important;\n    display: none !important;\n}';

var createPseudoHideStyles = function createPseudoHideStyles(body) {
    createStyles(body, '.' + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + '\n         .' + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
};

var createStyles = function createStyles(body, styles) {
    var style = body.ownerDocument.createElement('style');
    style.innerHTML = styles;
    body.appendChild(style);
};

var initNode = function initNode(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        element = _ref2[0],
        x = _ref2[1],
        y = _ref2[2];

    element.scrollLeft = x;
    element.scrollTop = y;
};

var generateIframeKey = function generateIframeKey() {
    return Math.ceil(Date.now() + Math.random() * 10000000).toString(16);
};

var DATA_URI_REGEXP = /^data:text\/(.+);(base64)?,(.*)$/i;

var getIframeDocumentElement = function getIframeDocumentElement(node, options) {
    try {
        return Promise.resolve(node.contentWindow.document.documentElement);
    } catch (e) {
        return options.proxy ? (0, _Proxy.Proxy)(node.src, options).then(function (html) {
            var match = html.match(DATA_URI_REGEXP);
            if (!match) {
                return Promise.reject();
            }

            return match[2] === 'base64' ? window.atob(decodeURIComponent(match[3])) : decodeURIComponent(match[3]);
        }).then(function (html) {
            return createIframeContainer(node.ownerDocument, (0, _Bounds.parseBounds)(node, 0, 0)).then(function (cloneIframeContainer) {
                var cloneWindow = cloneIframeContainer.contentWindow;
                var documentClone = cloneWindow.document;

                documentClone.open();
                documentClone.write(html);
                var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
                    return documentClone.documentElement;
                });

                documentClone.close();
                return iframeLoad;
            });
        }) : Promise.reject();
    }
};

var createIframeContainer = function createIframeContainer(ownerDocument, bounds) {
    var cloneIframeContainer = ownerDocument.createElement('iframe');

    cloneIframeContainer.className = 'html2canvas-container';
    cloneIframeContainer.style.visibility = 'hidden';
    cloneIframeContainer.style.position = 'fixed';
    cloneIframeContainer.style.left = '-10000px';
    cloneIframeContainer.style.top = '0px';
    cloneIframeContainer.style.border = '0';
    cloneIframeContainer.width = bounds.width.toString();
    cloneIframeContainer.height = bounds.height.toString();
    cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
    cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
    if (!ownerDocument.body) {
        return Promise.reject( true ? 'Body element not found in Document that is getting rendered' : undefined);
    }

    ownerDocument.body.appendChild(cloneIframeContainer);

    return Promise.resolve(cloneIframeContainer);
};

var iframeLoader = function iframeLoader(cloneIframeContainer) {
    var cloneWindow = cloneIframeContainer.contentWindow;
    var documentClone = cloneWindow.document;

    return new Promise(function (resolve, reject) {
        cloneWindow.onload = cloneIframeContainer.onload = documentClone.onreadystatechange = function () {
            var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                    clearInterval(interval);
                    resolve(cloneIframeContainer);
                }
            }, 50);
        };
    });
};

var cloneWindow = exports.cloneWindow = function cloneWindow(ownerDocument, bounds, referenceElement, options, logger, renderer) {
    var cloner = new DocumentCloner(referenceElement, options, logger, false, renderer);
    var scrollX = ownerDocument.defaultView.pageXOffset;
    var scrollY = ownerDocument.defaultView.pageYOffset;

    return createIframeContainer(ownerDocument, bounds).then(function (cloneIframeContainer) {
        var cloneWindow = cloneIframeContainer.contentWindow;
        var documentClone = cloneWindow.document;

        /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */

        var iframeLoad = iframeLoader(cloneIframeContainer).then(function () {
            cloner.scrolledElements.forEach(initNode);
            cloneWindow.scrollTo(bounds.left, bounds.top);
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== bounds.top || cloneWindow.scrollX !== bounds.left)) {
                documentClone.documentElement.style.top = -bounds.top + 'px';
                documentClone.documentElement.style.left = -bounds.left + 'px';
                documentClone.documentElement.style.position = 'absolute';
            }

            var result = Promise.resolve([cloneIframeContainer, cloner.clonedReferenceElement, cloner.resourceLoader]);

            var onclone = options.onclone;

            return cloner.clonedReferenceElement instanceof cloneWindow.HTMLElement || cloner.clonedReferenceElement instanceof ownerDocument.defaultView.HTMLElement || cloner.clonedReferenceElement instanceof HTMLElement ? typeof onclone === 'function' ? Promise.resolve().then(function () {
                return onclone(documentClone);
            }).then(function () {
                return result;
            }) : result : Promise.reject( true ? 'Error finding the ' + referenceElement.nodeName + ' in the cloned document' : undefined);
        });

        documentClone.open();
        documentClone.write(serializeDoctype(document.doctype) + '<html></html>');
        // Chrome scrolls the parent document for some reason after the write to the cloned window???
        restoreOwnerScroll(referenceElement.ownerDocument, scrollX, scrollY);
        documentClone.replaceChild(documentClone.adoptNode(cloner.documentElement), documentClone.documentElement);
        documentClone.close();

        return iframeLoad;
    });
};

var serializeDoctype = function serializeDoctype(doctype) {
    var str = '';
    if (doctype) {
        str += '<!DOCTYPE ';
        if (doctype.name) {
            str += doctype.name;
        }

        if (doctype.internalSubset) {
            str += doctype.internalSubset;
        }

        if (doctype.publicId) {
            str += '"' + doctype.publicId + '"';
        }

        if (doctype.systemId) {
            str += '"' + doctype.systemId + '"';
        }

        str += '>';
    }

    return str;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Color.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Color.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://dev.w3.org/csswg/css-color/

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HEX3 = /^#([a-f0-9]{3})$/i;
var hex3 = function hex3(value) {
    var match = value.match(HEX3);
    if (match) {
        return [parseInt(match[1][0] + match[1][0], 16), parseInt(match[1][1] + match[1][1], 16), parseInt(match[1][2] + match[1][2], 16), null];
    }
    return false;
};

var HEX6 = /^#([a-f0-9]{6})$/i;
var hex6 = function hex6(value) {
    var match = value.match(HEX6);
    if (match) {
        return [parseInt(match[1].substring(0, 2), 16), parseInt(match[1].substring(2, 4), 16), parseInt(match[1].substring(4, 6), 16), null];
    }
    return false;
};

var RGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgb = function rgb(value) {
    var match = value.match(RGB);
    if (match) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), null];
    }
    return false;
};

var RGBA = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
var rgba = function rgba(value) {
    var match = value.match(RGBA);
    if (match && match.length > 4) {
        return [Number(match[1]), Number(match[2]), Number(match[3]), Number(match[4])];
    }
    return false;
};

var fromArray = function fromArray(array) {
    return [Math.min(array[0], 255), Math.min(array[1], 255), Math.min(array[2], 255), array.length > 3 ? array[3] : null];
};

var namedColor = function namedColor(name) {
    var color = NAMED_COLORS[name.toLowerCase()];
    return color ? color : false;
};

var Color = function () {
    function Color(value) {
        _classCallCheck(this, Color);

        var _ref = Array.isArray(value) ? fromArray(value) : hex3(value) || rgb(value) || rgba(value) || namedColor(value) || hex6(value) || [0, 0, 0, null],
            _ref2 = _slicedToArray(_ref, 4),
            r = _ref2[0],
            g = _ref2[1],
            b = _ref2[2],
            a = _ref2[3];

        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    _createClass(Color, [{
        key: 'isTransparent',
        value: function isTransparent() {
            return this.a === 0;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.a !== null && this.a !== 1 ? 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')' : 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
    }]);

    return Color;
}();

exports.default = Color;


var NAMED_COLORS = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, null],
    antiquewhite: [250, 235, 215, null],
    aqua: [0, 255, 255, null],
    aquamarine: [127, 255, 212, null],
    azure: [240, 255, 255, null],
    beige: [245, 245, 220, null],
    bisque: [255, 228, 196, null],
    black: [0, 0, 0, null],
    blanchedalmond: [255, 235, 205, null],
    blue: [0, 0, 255, null],
    blueviolet: [138, 43, 226, null],
    brown: [165, 42, 42, null],
    burlywood: [222, 184, 135, null],
    cadetblue: [95, 158, 160, null],
    chartreuse: [127, 255, 0, null],
    chocolate: [210, 105, 30, null],
    coral: [255, 127, 80, null],
    cornflowerblue: [100, 149, 237, null],
    cornsilk: [255, 248, 220, null],
    crimson: [220, 20, 60, null],
    cyan: [0, 255, 255, null],
    darkblue: [0, 0, 139, null],
    darkcyan: [0, 139, 139, null],
    darkgoldenrod: [184, 134, 11, null],
    darkgray: [169, 169, 169, null],
    darkgreen: [0, 100, 0, null],
    darkgrey: [169, 169, 169, null],
    darkkhaki: [189, 183, 107, null],
    darkmagenta: [139, 0, 139, null],
    darkolivegreen: [85, 107, 47, null],
    darkorange: [255, 140, 0, null],
    darkorchid: [153, 50, 204, null],
    darkred: [139, 0, 0, null],
    darksalmon: [233, 150, 122, null],
    darkseagreen: [143, 188, 143, null],
    darkslateblue: [72, 61, 139, null],
    darkslategray: [47, 79, 79, null],
    darkslategrey: [47, 79, 79, null],
    darkturquoise: [0, 206, 209, null],
    darkviolet: [148, 0, 211, null],
    deeppink: [255, 20, 147, null],
    deepskyblue: [0, 191, 255, null],
    dimgray: [105, 105, 105, null],
    dimgrey: [105, 105, 105, null],
    dodgerblue: [30, 144, 255, null],
    firebrick: [178, 34, 34, null],
    floralwhite: [255, 250, 240, null],
    forestgreen: [34, 139, 34, null],
    fuchsia: [255, 0, 255, null],
    gainsboro: [220, 220, 220, null],
    ghostwhite: [248, 248, 255, null],
    gold: [255, 215, 0, null],
    goldenrod: [218, 165, 32, null],
    gray: [128, 128, 128, null],
    green: [0, 128, 0, null],
    greenyellow: [173, 255, 47, null],
    grey: [128, 128, 128, null],
    honeydew: [240, 255, 240, null],
    hotpink: [255, 105, 180, null],
    indianred: [205, 92, 92, null],
    indigo: [75, 0, 130, null],
    ivory: [255, 255, 240, null],
    khaki: [240, 230, 140, null],
    lavender: [230, 230, 250, null],
    lavenderblush: [255, 240, 245, null],
    lawngreen: [124, 252, 0, null],
    lemonchiffon: [255, 250, 205, null],
    lightblue: [173, 216, 230, null],
    lightcoral: [240, 128, 128, null],
    lightcyan: [224, 255, 255, null],
    lightgoldenrodyellow: [250, 250, 210, null],
    lightgray: [211, 211, 211, null],
    lightgreen: [144, 238, 144, null],
    lightgrey: [211, 211, 211, null],
    lightpink: [255, 182, 193, null],
    lightsalmon: [255, 160, 122, null],
    lightseagreen: [32, 178, 170, null],
    lightskyblue: [135, 206, 250, null],
    lightslategray: [119, 136, 153, null],
    lightslategrey: [119, 136, 153, null],
    lightsteelblue: [176, 196, 222, null],
    lightyellow: [255, 255, 224, null],
    lime: [0, 255, 0, null],
    limegreen: [50, 205, 50, null],
    linen: [250, 240, 230, null],
    magenta: [255, 0, 255, null],
    maroon: [128, 0, 0, null],
    mediumaquamarine: [102, 205, 170, null],
    mediumblue: [0, 0, 205, null],
    mediumorchid: [186, 85, 211, null],
    mediumpurple: [147, 112, 219, null],
    mediumseagreen: [60, 179, 113, null],
    mediumslateblue: [123, 104, 238, null],
    mediumspringgreen: [0, 250, 154, null],
    mediumturquoise: [72, 209, 204, null],
    mediumvioletred: [199, 21, 133, null],
    midnightblue: [25, 25, 112, null],
    mintcream: [245, 255, 250, null],
    mistyrose: [255, 228, 225, null],
    moccasin: [255, 228, 181, null],
    navajowhite: [255, 222, 173, null],
    navy: [0, 0, 128, null],
    oldlace: [253, 245, 230, null],
    olive: [128, 128, 0, null],
    olivedrab: [107, 142, 35, null],
    orange: [255, 165, 0, null],
    orangered: [255, 69, 0, null],
    orchid: [218, 112, 214, null],
    palegoldenrod: [238, 232, 170, null],
    palegreen: [152, 251, 152, null],
    paleturquoise: [175, 238, 238, null],
    palevioletred: [219, 112, 147, null],
    papayawhip: [255, 239, 213, null],
    peachpuff: [255, 218, 185, null],
    peru: [205, 133, 63, null],
    pink: [255, 192, 203, null],
    plum: [221, 160, 221, null],
    powderblue: [176, 224, 230, null],
    purple: [128, 0, 128, null],
    rebeccapurple: [102, 51, 153, null],
    red: [255, 0, 0, null],
    rosybrown: [188, 143, 143, null],
    royalblue: [65, 105, 225, null],
    saddlebrown: [139, 69, 19, null],
    salmon: [250, 128, 114, null],
    sandybrown: [244, 164, 96, null],
    seagreen: [46, 139, 87, null],
    seashell: [255, 245, 238, null],
    sienna: [160, 82, 45, null],
    silver: [192, 192, 192, null],
    skyblue: [135, 206, 235, null],
    slateblue: [106, 90, 205, null],
    slategray: [112, 128, 144, null],
    slategrey: [112, 128, 144, null],
    snow: [255, 250, 250, null],
    springgreen: [0, 255, 127, null],
    steelblue: [70, 130, 180, null],
    tan: [210, 180, 140, null],
    teal: [0, 128, 128, null],
    thistle: [216, 191, 216, null],
    tomato: [255, 99, 71, null],
    turquoise: [64, 224, 208, null],
    violet: [238, 130, 238, null],
    wheat: [245, 222, 179, null],
    white: [255, 255, 255, null],
    whitesmoke: [245, 245, 245, null],
    yellow: [255, 255, 0, null],
    yellowgreen: [154, 205, 50, null]
};

var TRANSPARENT = exports.TRANSPARENT = new Color([0, 0, 0, 0]);

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Feature.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Feature.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ForeignObjectRenderer = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js");

var testRangeBounds = function testRangeBounds(document) {
    var TEST_HEIGHT = 123;

    if (document.createRange) {
        var range = document.createRange();
        if (range.getBoundingClientRect) {
            var testElement = document.createElement('boundtest');
            testElement.style.height = TEST_HEIGHT + 'px';
            testElement.style.display = 'block';
            document.body.appendChild(testElement);

            range.selectNode(testElement);
            var rangeBounds = range.getBoundingClientRect();
            var rangeHeight = Math.round(rangeBounds.height);
            document.body.removeChild(testElement);
            if (rangeHeight === TEST_HEIGHT) {
                return true;
            }
        }
    }

    return false;
};

// iOS 10.3 taints canvas with base64 images unless crossOrigin = 'anonymous'
var testBase64 = function testBase64(document, src) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    return new Promise(function (resolve) {
        // Single pixel base64 image renders fine on iOS 10.3???
        img.src = src;

        var onload = function onload() {
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch (e) {
                return resolve(false);
            }

            return resolve(true);
        };

        img.onload = onload;
        img.onerror = function () {
            return resolve(false);
        };

        if (img.complete === true) {
            setTimeout(function () {
                onload();
            }, 500);
        }
    });
};

var testCORS = function testCORS() {
    return typeof new Image().crossOrigin !== 'undefined';
};

var testResponseType = function testResponseType() {
    return typeof new XMLHttpRequest().responseType === 'string';
};

var testSVG = function testSVG(document) {
    var img = new Image();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    img.src = 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>';

    try {
        ctx.drawImage(img, 0, 0);
        canvas.toDataURL();
    } catch (e) {
        return false;
    }
    return true;
};

var isGreenPixel = function isGreenPixel(data) {
    return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};

var testForeignObject = function testForeignObject(document) {
    var canvas = document.createElement('canvas');
    var size = 100;
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.fillRect(0, 0, size, size);

    var img = new Image();
    var greenImageSrc = canvas.toDataURL();
    img.src = greenImageSrc;
    var svg = (0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, img);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, size, size);

    return (0, _ForeignObjectRenderer.loadSerializedSVG)(svg).then(function (img) {
        ctx.drawImage(img, 0, 0);
        var data = ctx.getImageData(0, 0, size, size).data;
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);

        var node = document.createElement('div');
        node.style.backgroundImage = 'url(' + greenImageSrc + ')';
        node.style.height = size + 'px';
        // Firefox 55 does not render inline <img /> tags
        return isGreenPixel(data) ? (0, _ForeignObjectRenderer.loadSerializedSVG)((0, _ForeignObjectRenderer.createForeignObjectSVG)(size, size, 0, 0, node)) : Promise.reject(false);
    }).then(function (img) {
        ctx.drawImage(img, 0, 0);
        // Edge does not render background-images
        return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
    }).catch(function (e) {
        return false;
    });
};

var FEATURES = {
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RANGE_BOUNDS() {
        'use strict';

        var value = testRangeBounds(document);
        Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_SVG_DRAWING() {
        'use strict';

        var value = testSVG(document);
        Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_BASE64_DRAWING() {
        'use strict';

        return function (src) {
            var _value = testBase64(document, src);
            Object.defineProperty(FEATURES, 'SUPPORT_BASE64_DRAWING', { value: function value() {
                    return _value;
                } });
            return _value;
        };
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
        'use strict';

        var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
        Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_IMAGES() {
        'use strict';

        var value = testCORS();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_RESPONSE_TYPE() {
        'use strict';

        var value = testResponseType();
        Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
        return value;
    },
    // $FlowFixMe - get/set properties not yet supported
    get SUPPORT_CORS_XHR() {
        'use strict';

        var value = 'withCredentials' in new XMLHttpRequest();
        Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
        return value;
    }
};

exports.default = FEATURES;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Font.js":
/*!***************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Font.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.FontMetrics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SAMPLE_TEXT = 'Hidden Text';

var FontMetrics = exports.FontMetrics = function () {
        function FontMetrics(document) {
                _classCallCheck(this, FontMetrics);

                this._data = {};
                this._document = document;
        }

        _createClass(FontMetrics, [{
                key: '_parseMetrics',
                value: function _parseMetrics(font) {
                        var container = this._document.createElement('div');
                        var img = this._document.createElement('img');
                        var span = this._document.createElement('span');

                        var body = this._document.body;
                        if (!body) {
                                throw new Error( true ? 'No document found for font metrics' : undefined);
                        }

                        container.style.visibility = 'hidden';
                        container.style.fontFamily = font.fontFamily;
                        container.style.fontSize = font.fontSize;
                        container.style.margin = '0';
                        container.style.padding = '0';

                        body.appendChild(container);

                        img.src = _Util.SMALL_IMAGE;
                        img.width = 1;
                        img.height = 1;

                        img.style.margin = '0';
                        img.style.padding = '0';
                        img.style.verticalAlign = 'baseline';

                        span.style.fontFamily = font.fontFamily;
                        span.style.fontSize = font.fontSize;
                        span.style.margin = '0';
                        span.style.padding = '0';

                        span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
                        container.appendChild(span);
                        container.appendChild(img);
                        var baseline = img.offsetTop - span.offsetTop + 2;

                        container.removeChild(span);
                        container.appendChild(this._document.createTextNode(SAMPLE_TEXT));

                        container.style.lineHeight = 'normal';
                        img.style.verticalAlign = 'super';

                        var middle = img.offsetTop - container.offsetTop + 2;

                        body.removeChild(container);

                        return { baseline: baseline, middle: middle };
                }
        }, {
                key: 'getMetrics',
                value: function getMetrics(font) {
                        var key = font.fontFamily + ' ' + font.fontSize;
                        if (this._data[key] === undefined) {
                                this._data[key] = this._parseMetrics(font);
                        }

                        return this._data[key];
                }
        }]);

        return FontMetrics;
}();

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Gradient.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Gradient.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformWebkitRadialGradientArgs = exports.parseGradient = exports.RadialGradient = exports.LinearGradient = exports.RADIAL_GRADIENT_SHAPE = exports.GRADIENT_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _Angle = __webpack_require__(/*! ./Angle */ "./node_modules/html2canvas/dist/npm/Angle.js");

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ./Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SIDE_OR_CORNER = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i;
var PERCENTAGE_ANGLES = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i;
var ENDS_WITH_LENGTH = /(px)|%|( 0)$/i;
var FROM_TO_COLORSTOP = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i;
var RADIAL_SHAPE_DEFINITION = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i;

var GRADIENT_TYPE = exports.GRADIENT_TYPE = {
    LINEAR_GRADIENT: 0,
    RADIAL_GRADIENT: 1
};

var RADIAL_GRADIENT_SHAPE = exports.RADIAL_GRADIENT_SHAPE = {
    CIRCLE: 0,
    ELLIPSE: 1
};

var LENGTH_FOR_POSITION = {
    left: new _Length2.default('0%'),
    top: new _Length2.default('0%'),
    center: new _Length2.default('50%'),
    right: new _Length2.default('100%'),
    bottom: new _Length2.default('100%')
};

var LinearGradient = exports.LinearGradient = function LinearGradient(colorStops, direction) {
    _classCallCheck(this, LinearGradient);

    this.type = GRADIENT_TYPE.LINEAR_GRADIENT;
    this.colorStops = colorStops;
    this.direction = direction;
};

var RadialGradient = exports.RadialGradient = function RadialGradient(colorStops, shape, center, radius) {
    _classCallCheck(this, RadialGradient);

    this.type = GRADIENT_TYPE.RADIAL_GRADIENT;
    this.colorStops = colorStops;
    this.shape = shape;
    this.center = center;
    this.radius = radius;
};

var parseGradient = exports.parseGradient = function parseGradient(container, _ref, bounds) {
    var args = _ref.args,
        method = _ref.method,
        prefix = _ref.prefix;

    if (method === 'linear-gradient') {
        return parseLinearGradient(args, bounds, !!prefix);
    } else if (method === 'gradient' && args[0] === 'linear') {
        // TODO handle correct angle
        return parseLinearGradient(['to bottom'].concat(transformObsoleteColorStops(args.slice(3))), bounds, !!prefix);
    } else if (method === 'radial-gradient') {
        return parseRadialGradient(container, prefix === '-webkit-' ? transformWebkitRadialGradientArgs(args) : args, bounds);
    } else if (method === 'gradient' && args[0] === 'radial') {
        return parseRadialGradient(container, transformObsoleteColorStops(transformWebkitRadialGradientArgs(args.slice(1))), bounds);
    }
};

var parseColorStops = function parseColorStops(args, firstColorStopIndex, lineLength) {
    var colorStops = [];

    for (var i = firstColorStopIndex; i < args.length; i++) {
        var value = args[i];
        var HAS_LENGTH = ENDS_WITH_LENGTH.test(value);
        var lastSpaceIndex = value.lastIndexOf(' ');
        var _color = new _Color2.default(HAS_LENGTH ? value.substring(0, lastSpaceIndex) : value);
        var _stop = HAS_LENGTH ? new _Length2.default(value.substring(lastSpaceIndex + 1)) : i === firstColorStopIndex ? new _Length2.default('0%') : i === args.length - 1 ? new _Length2.default('100%') : null;
        colorStops.push({ color: _color, stop: _stop });
    }

    var absoluteValuedColorStops = colorStops.map(function (_ref2) {
        var color = _ref2.color,
            stop = _ref2.stop;

        var absoluteStop = lineLength === 0 ? 0 : stop ? stop.getAbsoluteValue(lineLength) / lineLength : null;

        return {
            color: color,
            // $FlowFixMe
            stop: absoluteStop
        };
    });

    var previousColorStop = absoluteValuedColorStops[0].stop;
    for (var _i = 0; _i < absoluteValuedColorStops.length; _i++) {
        if (previousColorStop !== null) {
            var _stop2 = absoluteValuedColorStops[_i].stop;
            if (_stop2 === null) {
                var n = _i;
                while (absoluteValuedColorStops[n].stop === null) {
                    n++;
                }
                var steps = n - _i + 1;
                var nextColorStep = absoluteValuedColorStops[n].stop;
                var stepSize = (nextColorStep - previousColorStop) / steps;
                for (; _i < n; _i++) {
                    previousColorStop = absoluteValuedColorStops[_i].stop = previousColorStop + stepSize;
                }
            } else {
                previousColorStop = _stop2;
            }
        }
    }

    return absoluteValuedColorStops;
};

var parseLinearGradient = function parseLinearGradient(args, bounds, hasPrefix) {
    var angle = (0, _Angle.parseAngle)(args[0]);
    var HAS_SIDE_OR_CORNER = SIDE_OR_CORNER.test(args[0]);
    var HAS_DIRECTION = HAS_SIDE_OR_CORNER || angle !== null || PERCENTAGE_ANGLES.test(args[0]);
    var direction = HAS_DIRECTION ? angle !== null ? calculateGradientDirection(
    // if there is a prefix, the 0° angle points due East (instead of North per W3C)
    hasPrefix ? angle - Math.PI * 0.5 : angle, bounds) : HAS_SIDE_OR_CORNER ? parseSideOrCorner(args[0], bounds) : parsePercentageAngle(args[0], bounds) : calculateGradientDirection(Math.PI, bounds);
    var firstColorStopIndex = HAS_DIRECTION ? 1 : 0;

    // TODO: Fix some inaccuracy with color stops with px values
    var lineLength = Math.min((0, _Util.distance)(Math.abs(direction.x0) + Math.abs(direction.x1), Math.abs(direction.y0) + Math.abs(direction.y1)), bounds.width * 2, bounds.height * 2);

    return new LinearGradient(parseColorStops(args, firstColorStopIndex, lineLength), direction);
};

var parseRadialGradient = function parseRadialGradient(container, args, bounds) {
    var m = args[0].match(RADIAL_SHAPE_DEFINITION);
    var shape = m && (m[1] === 'circle' || // explicit shape specification
    m[3] !== undefined && m[5] === undefined) // only one radius coordinate
    ? RADIAL_GRADIENT_SHAPE.CIRCLE : RADIAL_GRADIENT_SHAPE.ELLIPSE;
    var radius = {};
    var center = {};

    if (m) {
        // Radius
        if (m[3] !== undefined) {
            radius.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[3], m[4]).getAbsoluteValue(bounds.width);
        }

        if (m[5] !== undefined) {
            radius.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[5], m[6]).getAbsoluteValue(bounds.height);
        }

        // Position
        if (m[7]) {
            center.x = LENGTH_FOR_POSITION[m[7].toLowerCase()];
        } else if (m[8] !== undefined) {
            center.x = (0, _Length.calculateLengthFromValueWithUnit)(container, m[8], m[9]);
        }

        if (m[10]) {
            center.y = LENGTH_FOR_POSITION[m[10].toLowerCase()];
        } else if (m[11] !== undefined) {
            center.y = (0, _Length.calculateLengthFromValueWithUnit)(container, m[11], m[12]);
        }
    }

    var gradientCenter = {
        x: center.x === undefined ? bounds.width / 2 : center.x.getAbsoluteValue(bounds.width),
        y: center.y === undefined ? bounds.height / 2 : center.y.getAbsoluteValue(bounds.height)
    };
    var gradientRadius = calculateRadius(m && m[2] || 'farthest-corner', shape, gradientCenter, radius, bounds);

    return new RadialGradient(parseColorStops(args, m ? 1 : 0, Math.min(gradientRadius.x, gradientRadius.y)), shape, gradientCenter, gradientRadius);
};

var calculateGradientDirection = function calculateGradientDirection(radian, bounds) {
    var width = bounds.width;
    var height = bounds.height;
    var HALF_WIDTH = width * 0.5;
    var HALF_HEIGHT = height * 0.5;
    var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
    var HALF_LINE_LENGTH = lineLength / 2;

    var x0 = HALF_WIDTH + Math.sin(radian) * HALF_LINE_LENGTH;
    var y0 = HALF_HEIGHT - Math.cos(radian) * HALF_LINE_LENGTH;
    var x1 = width - x0;
    var y1 = height - y0;

    return { x0: x0, x1: x1, y0: y0, y1: y1 };
};

var parseTopRight = function parseTopRight(bounds) {
    return Math.acos(bounds.width / 2 / ((0, _Util.distance)(bounds.width, bounds.height) / 2));
};

var parseSideOrCorner = function parseSideOrCorner(side, bounds) {
    switch (side) {
        case 'bottom':
        case 'to top':
            return calculateGradientDirection(0, bounds);
        case 'left':
        case 'to right':
            return calculateGradientDirection(Math.PI / 2, bounds);
        case 'right':
        case 'to left':
            return calculateGradientDirection(3 * Math.PI / 2, bounds);
        case 'top right':
        case 'right top':
        case 'to bottom left':
        case 'to left bottom':
            return calculateGradientDirection(Math.PI + parseTopRight(bounds), bounds);
        case 'top left':
        case 'left top':
        case 'to bottom right':
        case 'to right bottom':
            return calculateGradientDirection(Math.PI - parseTopRight(bounds), bounds);
        case 'bottom left':
        case 'left bottom':
        case 'to top right':
        case 'to right top':
            return calculateGradientDirection(parseTopRight(bounds), bounds);
        case 'bottom right':
        case 'right bottom':
        case 'to top left':
        case 'to left top':
            return calculateGradientDirection(2 * Math.PI - parseTopRight(bounds), bounds);
        case 'top':
        case 'to bottom':
        default:
            return calculateGradientDirection(Math.PI, bounds);
    }
};

var parsePercentageAngle = function parsePercentageAngle(angle, bounds) {
    var _angle$split$map = angle.split(' ').map(parseFloat),
        _angle$split$map2 = _slicedToArray(_angle$split$map, 2),
        left = _angle$split$map2[0],
        top = _angle$split$map2[1];

    var ratio = left / 100 * bounds.width / (top / 100 * bounds.height);

    return calculateGradientDirection(Math.atan(isNaN(ratio) ? 1 : ratio) + Math.PI / 2, bounds);
};

var findCorner = function findCorner(bounds, x, y, closest) {
    var corners = [{ x: 0, y: 0 }, { x: 0, y: bounds.height }, { x: bounds.width, y: 0 }, { x: bounds.width, y: bounds.height }];

    // $FlowFixMe
    return corners.reduce(function (stat, corner) {
        var d = (0, _Util.distance)(x - corner.x, y - corner.y);
        if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
            return {
                optimumCorner: corner,
                optimumDistance: d
            };
        }

        return stat;
    }, {
        optimumDistance: closest ? Infinity : -Infinity,
        optimumCorner: null
    }).optimumCorner;
};

var calculateRadius = function calculateRadius(extent, shape, center, radius, bounds) {
    var x = center.x;
    var y = center.y;
    var rx = 0;
    var ry = 0;

    switch (extent) {
        case 'closest-side':
            // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, it exactly meets the closest side in each dimension.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.min(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.min(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'closest-corner':
            // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
            // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.min((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - bounds.height)) / Math.min(Math.abs(x), Math.abs(x - bounds.width));
                var corner = findCorner(bounds, x, y, true);
                rx = (0, _Util.distance)(corner.x - x, (corner.y - y) / c);
                ry = c * rx;
            }
            break;

        case 'farthest-side':
            // Same as closest-side, except the ending shape is sized based on the farthest side(s)
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - bounds.width), Math.abs(y), Math.abs(y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                rx = Math.max(Math.abs(x), Math.abs(x - bounds.width));
                ry = Math.max(Math.abs(y), Math.abs(y - bounds.height));
            }
            break;

        case 'farthest-corner':
            // Same as closest-corner, except the ending shape is sized based on the farthest corner.
            // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
            if (shape === RADIAL_GRADIENT_SHAPE.CIRCLE) {
                rx = ry = Math.max((0, _Util.distance)(x, y), (0, _Util.distance)(x, y - bounds.height), (0, _Util.distance)(x - bounds.width, y), (0, _Util.distance)(x - bounds.width, y - bounds.height));
            } else if (shape === RADIAL_GRADIENT_SHAPE.ELLIPSE) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var _c = Math.max(Math.abs(y), Math.abs(y - bounds.height)) / Math.max(Math.abs(x), Math.abs(x - bounds.width));
                var _corner = findCorner(bounds, x, y, false);
                rx = (0, _Util.distance)(_corner.x - x, (_corner.y - y) / _c);
                ry = _c * rx;
            }
            break;

        default:
            // pixel or percentage values
            rx = radius.x || 0;
            ry = radius.y !== undefined ? radius.y : rx;
            break;
    }

    return {
        x: rx,
        y: ry
    };
};

var transformWebkitRadialGradientArgs = exports.transformWebkitRadialGradientArgs = function transformWebkitRadialGradientArgs(args) {
    var shape = '';
    var radius = '';
    var extent = '';
    var position = '';
    var idx = 0;

    var POSITION = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i;
    var SHAPE_AND_EXTENT = /^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i;
    var RADIUS = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i;

    var matchStartPosition = args[idx].match(POSITION);
    if (matchStartPosition) {
        idx++;
    }

    var matchShapeExtent = args[idx].match(SHAPE_AND_EXTENT);
    if (matchShapeExtent) {
        shape = matchShapeExtent[1] || '';
        extent = matchShapeExtent[2] || '';
        if (extent === 'contain') {
            extent = 'closest-side';
        } else if (extent === 'cover') {
            extent = 'farthest-corner';
        }
        idx++;
    }

    var matchStartRadius = args[idx].match(RADIUS);
    if (matchStartRadius) {
        idx++;
    }

    var matchEndPosition = args[idx].match(POSITION);
    if (matchEndPosition) {
        idx++;
    }

    var matchEndRadius = args[idx].match(RADIUS);
    if (matchEndRadius) {
        idx++;
    }

    var matchPosition = matchEndPosition || matchStartPosition;
    if (matchPosition && matchPosition[1]) {
        position = matchPosition[1] + (/^\d+$/.test(matchPosition[1]) ? 'px' : '');
        if (matchPosition[2]) {
            position += ' ' + matchPosition[2] + (/^\d+$/.test(matchPosition[2]) ? 'px' : '');
        }
    }

    var matchRadius = matchEndRadius || matchStartRadius;
    if (matchRadius) {
        radius = matchRadius[0];
        if (!matchRadius[1]) {
            radius += 'px';
        }
    }

    if (position && !shape && !radius && !extent) {
        radius = position;
        position = '';
    }

    if (position) {
        position = 'at ' + position;
    }

    return [[shape, extent, radius, position].filter(function (s) {
        return !!s;
    }).join(' ')].concat(args.slice(idx));
};

var transformObsoleteColorStops = function transformObsoleteColorStops(args) {
    return args.map(function (color) {
        return color.match(FROM_TO_COLORSTOP);
    })
    // $FlowFixMe
    .map(function (v, index) {
        if (!v) {
            return args[index];
        }

        switch (v[1]) {
            case 'from':
                return v[4] + ' 0%';
            case 'to':
                return v[4] + ' 100%';
            case 'color-stop':
                if (v[3] === '%') {
                    return v[4] + ' ' + v[2];
                }
                return v[4] + ' ' + parseFloat(v[2]) * 100 + '%';
        }
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Input.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Input.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reformatInputBounds = exports.inlineSelectElement = exports.inlineTextAreaElement = exports.inlineInputElement = exports.getInputBorderRadius = exports.INPUT_BACKGROUND = exports.INPUT_BORDERS = exports.INPUT_COLOR = undefined;

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

var _Circle = __webpack_require__(/*! ./drawing/Circle */ "./node_modules/html2canvas/dist/npm/drawing/Circle.js");

var _Circle2 = _interopRequireDefault(_Circle);

var _Vector = __webpack_require__(/*! ./drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ./Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _TextBounds = __webpack_require__(/*! ./TextBounds */ "./node_modules/html2canvas/dist/npm/TextBounds.js");

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_COLOR = exports.INPUT_COLOR = new _Color2.default([42, 42, 42]);
var INPUT_BORDER_COLOR = new _Color2.default([165, 165, 165]);
var INPUT_BACKGROUND_COLOR = new _Color2.default([222, 222, 222]);
var INPUT_BORDER = {
    borderWidth: 1,
    borderColor: INPUT_BORDER_COLOR,
    borderStyle: _border.BORDER_STYLE.SOLID
};
var INPUT_BORDERS = exports.INPUT_BORDERS = [INPUT_BORDER, INPUT_BORDER, INPUT_BORDER, INPUT_BORDER];
var INPUT_BACKGROUND = exports.INPUT_BACKGROUND = {
    backgroundColor: INPUT_BACKGROUND_COLOR,
    backgroundImage: [],
    backgroundClip: _background.BACKGROUND_CLIP.PADDING_BOX,
    backgroundOrigin: _background.BACKGROUND_ORIGIN.PADDING_BOX
};

var RADIO_BORDER_RADIUS = new _Length2.default('50%');
var RADIO_BORDER_RADIUS_TUPLE = [RADIO_BORDER_RADIUS, RADIO_BORDER_RADIUS];
var INPUT_RADIO_BORDER_RADIUS = [RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE, RADIO_BORDER_RADIUS_TUPLE];

var CHECKBOX_BORDER_RADIUS = new _Length2.default('3px');
var CHECKBOX_BORDER_RADIUS_TUPLE = [CHECKBOX_BORDER_RADIUS, CHECKBOX_BORDER_RADIUS];
var INPUT_CHECKBOX_BORDER_RADIUS = [CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE, CHECKBOX_BORDER_RADIUS_TUPLE];

var getInputBorderRadius = exports.getInputBorderRadius = function getInputBorderRadius(node) {
    return node.type === 'radio' ? INPUT_RADIO_BORDER_RADIUS : INPUT_CHECKBOX_BORDER_RADIUS;
};

var inlineInputElement = exports.inlineInputElement = function inlineInputElement(node, container) {
    if (node.type === 'radio' || node.type === 'checkbox') {
        if (node.checked) {
            var size = Math.min(container.bounds.width, container.bounds.height);
            container.childNodes.push(node.type === 'checkbox' ? [new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new _Vector2.default(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new _Vector2.default(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new _Vector2.default(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new _Vector2.default(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new _Vector2.default(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new _Vector2.default(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)] : new _Circle2.default(container.bounds.left + size / 4, container.bounds.top + size / 4, size / 4));
        }
    } else {
        inlineFormElement(getInputValue(node), node, container, false);
    }
};

var inlineTextAreaElement = exports.inlineTextAreaElement = function inlineTextAreaElement(node, container) {
    inlineFormElement(node.value, node, container, true);
};

var inlineSelectElement = exports.inlineSelectElement = function inlineSelectElement(node, container) {
    var option = node.options[node.selectedIndex || 0];
    inlineFormElement(option ? option.text || '' : '', node, container, false);
};

var reformatInputBounds = exports.reformatInputBounds = function reformatInputBounds(bounds) {
    if (bounds.width > bounds.height) {
        bounds.left += (bounds.width - bounds.height) / 2;
        bounds.width = bounds.height;
    } else if (bounds.width < bounds.height) {
        bounds.top += (bounds.height - bounds.width) / 2;
        bounds.height = bounds.width;
    }
    return bounds;
};

var inlineFormElement = function inlineFormElement(value, node, container, allowLinebreak) {
    var body = node.ownerDocument.body;
    if (value.length > 0 && body) {
        var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
        (0, _Util.copyCSSStyles)(node.ownerDocument.defaultView.getComputedStyle(node, null), wrapper);
        wrapper.style.position = 'absolute';
        wrapper.style.left = container.bounds.left + 'px';
        wrapper.style.top = container.bounds.top + 'px';
        if (!allowLinebreak) {
            wrapper.style.whiteSpace = 'nowrap';
        }
        var text = node.ownerDocument.createTextNode(value);
        wrapper.appendChild(text);
        body.appendChild(wrapper);
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    }
};

var getInputValue = function getInputValue(node) {
    var value = node.type === 'password' ? new Array(node.value.length + 1).join('\u2022') : node.value;

    return value.length === 0 ? node.placeholder || '' : value;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Length.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateLengthFromValueWithUnit = exports.LENGTH_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LENGTH_WITH_UNIT = /([\d.]+)(px|r?em|%)/i;

var LENGTH_TYPE = exports.LENGTH_TYPE = {
    PX: 0,
    PERCENTAGE: 1
};

var Length = function () {
    function Length(value) {
        _classCallCheck(this, Length);

        this.type = value.substr(value.length - 1) === '%' ? LENGTH_TYPE.PERCENTAGE : LENGTH_TYPE.PX;
        var parsedValue = parseFloat(value);
        if ("development" !== 'production' && isNaN(parsedValue)) {
            console.error('Invalid value given for Length: "' + value + '"');
        }
        this.value = isNaN(parsedValue) ? 0 : parsedValue;
    }

    _createClass(Length, [{
        key: 'isPercentage',
        value: function isPercentage() {
            return this.type === LENGTH_TYPE.PERCENTAGE;
        }
    }, {
        key: 'getAbsoluteValue',
        value: function getAbsoluteValue(parentLength) {
            return this.isPercentage() ? parentLength * (this.value / 100) : this.value;
        }
    }], [{
        key: 'create',
        value: function create(v) {
            return new Length(v);
        }
    }]);

    return Length;
}();

exports.default = Length;


var getRootFontSize = function getRootFontSize(container) {
    var parent = container.parent;
    return parent ? getRootFontSize(parent) : parseFloat(container.style.font.fontSize);
};

var calculateLengthFromValueWithUnit = exports.calculateLengthFromValueWithUnit = function calculateLengthFromValueWithUnit(container, value, unit) {
    switch (unit) {
        case 'px':
        case '%':
            return new Length(value + unit);
        case 'em':
        case 'rem':
            var length = new Length(value);
            length.value *= unit === 'em' ? parseFloat(container.style.font.fontSize) : getRootFontSize(container);
            return length;
        default:
            // TODO: handle correctly if unknown unit is used
            return new Length('0');
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/ListItem.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/ListItem.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCounterText = exports.inlineListItemElement = exports.getListOwner = undefined;

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var _Unicode = __webpack_require__(/*! ./Unicode */ "./node_modules/html2canvas/dist/npm/Unicode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Margin between the enumeration and the list item content
var MARGIN_RIGHT = 7;

var ancestorTypes = ['OL', 'UL', 'MENU'];

var getListOwner = exports.getListOwner = function getListOwner(container) {
    var parent = container.parent;
    if (!parent) {
        return null;
    }

    do {
        var isAncestor = ancestorTypes.indexOf(parent.tagName) !== -1;
        if (isAncestor) {
            return parent;
        }
        parent = parent.parent;
    } while (parent);

    return container.parent;
};

var inlineListItemElement = exports.inlineListItemElement = function inlineListItemElement(node, container, resourceLoader) {
    var listStyle = container.style.listStyle;

    if (!listStyle) {
        return;
    }

    var style = node.ownerDocument.defaultView.getComputedStyle(node, null);
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    (0, _Util.copyCSSStyles)(style, wrapper);

    wrapper.style.position = 'absolute';
    wrapper.style.bottom = 'auto';
    wrapper.style.display = 'block';
    wrapper.style.letterSpacing = 'normal';

    switch (listStyle.listStylePosition) {
        case _listStyle.LIST_STYLE_POSITION.OUTSIDE:
            wrapper.style.left = 'auto';
            wrapper.style.right = node.ownerDocument.defaultView.innerWidth - container.bounds.left - container.style.margin[1].getAbsoluteValue(container.bounds.width) + MARGIN_RIGHT + 'px';
            wrapper.style.textAlign = 'right';
            break;
        case _listStyle.LIST_STYLE_POSITION.INSIDE:
            wrapper.style.left = container.bounds.left - container.style.margin[3].getAbsoluteValue(container.bounds.width) + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.textAlign = 'left';
            break;
    }

    var text = void 0;
    var MARGIN_TOP = container.style.margin[0].getAbsoluteValue(container.bounds.width);
    var styleImage = listStyle.listStyleImage;
    if (styleImage) {
        if (styleImage.method === 'url') {
            var image = node.ownerDocument.createElement('img');
            image.src = styleImage.args[0];
            wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
            wrapper.style.width = 'auto';
            wrapper.style.height = 'auto';
            wrapper.appendChild(image);
        } else {
            var size = parseFloat(container.style.font.fontSize) * 0.5;
            wrapper.style.top = container.bounds.top - MARGIN_TOP + container.bounds.height - 1.5 * size + 'px';
            wrapper.style.width = size + 'px';
            wrapper.style.height = size + 'px';
            wrapper.style.backgroundImage = style.listStyleImage;
        }
    } else if (typeof container.listIndex === 'number') {
        text = node.ownerDocument.createTextNode(createCounterText(container.listIndex, listStyle.listStyleType, true));
        wrapper.appendChild(text);
        wrapper.style.top = container.bounds.top - MARGIN_TOP + 'px';
    }

    // $FlowFixMe
    var body = node.ownerDocument.body;
    body.appendChild(wrapper);

    if (text) {
        container.childNodes.push(_TextContainer2.default.fromTextNode(text, container));
        body.removeChild(wrapper);
    } else {
        // $FlowFixMe
        container.childNodes.push(new _NodeContainer2.default(wrapper, container, resourceLoader, 0));
    }
};

var ROMAN_UPPER = {
    integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
};

var ARMENIAN = {
    integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
};

var HEBREW = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
};

var GEORGIAN = {
    integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
};

var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
    if (value < min || value > max) {
        return createCounterText(value, fallback, suffix.length > 0);
    }

    return symbols.integers.reduce(function (string, integer, index) {
        while (value >= integer) {
            value -= integer;
            string += symbols.values[index];
        }
        return string;
    }, '') + suffix;
};

var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
    var string = '';

    do {
        if (!isNumeric) {
            value--;
        }
        string = resolver(value) + string;
        value /= codePointRangeLength;
    } while (value * codePointRangeLength >= codePointRangeLength);

    return string;
};

var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
    var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;

    return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
        return (0, _Unicode.fromCodePoint)(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
    }) + suffix);
};

var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '. ';

    var codePointRangeLength = symbols.length;
    return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
        return symbols[Math.floor(codePoint % codePointRangeLength)];
    }) + suffix;
};

var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
    if (value < -9999 || value > 9999) {
        return createCounterText(value, _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL, suffix.length > 0);
    }
    var tmp = Math.abs(value);
    var string = suffix;

    if (tmp === 0) {
        return numbers[0] + string;
    }

    for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
        var coefficient = tmp % 10;

        if (coefficient === 0 && (0, _Util.contains)(flags, CJK_ZEROS) && string !== '') {
            string = numbers[coefficient] + string;
        } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && (0, _Util.contains)(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && (0, _Util.contains)(flags, CJK_HUNDRED_COEFFICIENTS)) {
            string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
        } else if (coefficient === 1 && digit > 0) {
            string = multipliers[digit - 1] + string;
        }
        tmp = Math.floor(tmp / 10);
    }

    return (value < 0 ? negativeSign : '') + string;
};

var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
var JAPANESE_NEGATIVE = 'マイナス';
var KOREAN_NEGATIVE = '마이너스 ';

var createCounterText = exports.createCounterText = function createCounterText(value, type, appendSuffix) {
    var defaultSuffix = appendSuffix ? '. ' : '';
    var cjkSuffix = appendSuffix ? '、' : '';
    var koreanSuffix = appendSuffix ? ', ' : '';
    switch (type) {
        case _listStyle.LIST_STYLE_TYPE.DISC:
            return '•';
        case _listStyle.LIST_STYLE_TYPE.CIRCLE:
            return '◦';
        case _listStyle.LIST_STYLE_TYPE.SQUARE:
            return '◾';
        case _listStyle.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
            var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
            return string.length < 4 ? '0' + string : string;
        case _listStyle.LIST_STYLE_TYPE.CJK_DECIMAL:
            return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.UPPER_ROMAN:
            return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_GREEK:
            return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ALPHA:
            return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.UPPER_ALPHA:
            return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARABIC_INDIC:
            return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ARMENIAN:
        case _listStyle.LIST_STYLE_TYPE.UPPER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.LOWER_ARMENIAN:
            return createAdditiveCounter(value, 1, 9999, ARMENIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix).toLowerCase();
        case _listStyle.LIST_STYLE_TYPE.BENGALI:
            return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CAMBODIAN:
        case _listStyle.LIST_STYLE_TYPE.KHMER:
            return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
            return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
            return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
            return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
            return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.JAPANESE_FORMAL:
            return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
            return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
            return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
        case _listStyle.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
            return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
        case _listStyle.LIST_STYLE_TYPE.DEVANAGARI:
            return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GEORGIAN:
            return createAdditiveCounter(value, 1, 19999, GEORGIAN, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GUJARATI:
            return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.GURMUKHI:
            return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HEBREW:
            return createAdditiveCounter(value, 1, 10999, HEBREW, _listStyle.LIST_STYLE_TYPE.DECIMAL, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA:
            return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
        case _listStyle.LIST_STYLE_TYPE.HIRAGANA_IROHA:
            return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
        case _listStyle.LIST_STYLE_TYPE.KANNADA:
            return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA:
            return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.KATAKANA_IROHA:
            return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
        case _listStyle.LIST_STYLE_TYPE.LAO:
            return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MONGOLIAN:
            return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.MYANMAR:
            return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.ORIYA:
            return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.PERSIAN:
            return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TAMIL:
            return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TELUGU:
            return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.THAI:
            return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.TIBETAN:
            return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
        case _listStyle.LIST_STYLE_TYPE.DECIMAL:
        default:
            return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Logger.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Logger.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(enabled, id, start) {
        _classCallCheck(this, Logger);

        this.enabled = typeof window !== 'undefined' && enabled;
        this.start = start ? start : Date.now();
        this.id = id;
    }

    _createClass(Logger, [{
        key: 'child',
        value: function child(id) {
            return new Logger(this.enabled, id, this.start);
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'log',
        value: function log() {
            if (this.enabled && window.console && window.console.log) {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }

        // eslint-disable-next-line flowtype/no-weak-types

    }, {
        key: 'error',
        value: function error() {
            if (this.enabled && window.console && window.console.error) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + 'ms', this.id ? 'html2canvas (' + this.id + '):' : 'html2canvas:'].concat([].slice.call(args, 0)));
            }
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/NodeContainer.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/NodeContainer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Util = __webpack_require__(/*! ./Util */ "./node_modules/html2canvas/dist/npm/Util.js");

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

var _borderRadius = __webpack_require__(/*! ./parsing/borderRadius */ "./node_modules/html2canvas/dist/npm/parsing/borderRadius.js");

var _display = __webpack_require__(/*! ./parsing/display */ "./node_modules/html2canvas/dist/npm/parsing/display.js");

var _float = __webpack_require__(/*! ./parsing/float */ "./node_modules/html2canvas/dist/npm/parsing/float.js");

var _font = __webpack_require__(/*! ./parsing/font */ "./node_modules/html2canvas/dist/npm/parsing/font.js");

var _letterSpacing = __webpack_require__(/*! ./parsing/letterSpacing */ "./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js");

var _lineBreak = __webpack_require__(/*! ./parsing/lineBreak */ "./node_modules/html2canvas/dist/npm/parsing/lineBreak.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var _margin = __webpack_require__(/*! ./parsing/margin */ "./node_modules/html2canvas/dist/npm/parsing/margin.js");

var _overflow = __webpack_require__(/*! ./parsing/overflow */ "./node_modules/html2canvas/dist/npm/parsing/overflow.js");

var _overflowWrap = __webpack_require__(/*! ./parsing/overflowWrap */ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js");

var _padding = __webpack_require__(/*! ./parsing/padding */ "./node_modules/html2canvas/dist/npm/parsing/padding.js");

var _position = __webpack_require__(/*! ./parsing/position */ "./node_modules/html2canvas/dist/npm/parsing/position.js");

var _textDecoration = __webpack_require__(/*! ./parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

var _textShadow = __webpack_require__(/*! ./parsing/textShadow */ "./node_modules/html2canvas/dist/npm/parsing/textShadow.js");

var _textTransform = __webpack_require__(/*! ./parsing/textTransform */ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js");

var _transform = __webpack_require__(/*! ./parsing/transform */ "./node_modules/html2canvas/dist/npm/parsing/transform.js");

var _visibility = __webpack_require__(/*! ./parsing/visibility */ "./node_modules/html2canvas/dist/npm/parsing/visibility.js");

var _wordBreak = __webpack_require__(/*! ./parsing/word-break */ "./node_modules/html2canvas/dist/npm/parsing/word-break.js");

var _zIndex = __webpack_require__(/*! ./parsing/zIndex */ "./node_modules/html2canvas/dist/npm/parsing/zIndex.js");

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/html2canvas/dist/npm/Input.js");

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];

var NodeContainer = function () {
    function NodeContainer(node, parent, resourceLoader, index) {
        var _this = this;

        _classCallCheck(this, NodeContainer);

        this.parent = parent;
        this.tagName = node.tagName;
        this.index = index;
        this.childNodes = [];
        this.listItems = [];
        if (typeof node.start === 'number') {
            this.listStart = node.start;
        }
        var defaultView = node.ownerDocument.defaultView;
        var scrollX = defaultView.pageXOffset;
        var scrollY = defaultView.pageYOffset;
        var style = defaultView.getComputedStyle(node, null);
        var display = (0, _display.parseDisplay)(style.display);

        var IS_INPUT = node.type === 'radio' || node.type === 'checkbox';

        var position = (0, _position.parsePosition)(style.position);

        this.style = {
            background: IS_INPUT ? _Input.INPUT_BACKGROUND : (0, _background.parseBackground)(style, resourceLoader),
            border: IS_INPUT ? _Input.INPUT_BORDERS : (0, _border.parseBorder)(style),
            borderRadius: (node instanceof defaultView.HTMLInputElement || node instanceof HTMLInputElement) && IS_INPUT ? (0, _Input.getInputBorderRadius)(node) : (0, _borderRadius.parseBorderRadius)(style),
            color: IS_INPUT ? _Input.INPUT_COLOR : new _Color2.default(style.color),
            display: display,
            float: (0, _float.parseCSSFloat)(style.float),
            font: (0, _font.parseFont)(style),
            letterSpacing: (0, _letterSpacing.parseLetterSpacing)(style.letterSpacing),
            listStyle: display === _display.DISPLAY.LIST_ITEM ? (0, _listStyle.parseListStyle)(style) : null,
            lineBreak: (0, _lineBreak.parseLineBreak)(style.lineBreak),
            margin: (0, _margin.parseMargin)(style),
            opacity: parseFloat(style.opacity),
            overflow: INPUT_TAGS.indexOf(node.tagName) === -1 ? (0, _overflow.parseOverflow)(style.overflow) : _overflow.OVERFLOW.HIDDEN,
            overflowWrap: (0, _overflowWrap.parseOverflowWrap)(style.overflowWrap ? style.overflowWrap : style.wordWrap),
            padding: (0, _padding.parsePadding)(style),
            position: position,
            textDecoration: (0, _textDecoration.parseTextDecoration)(style),
            textShadow: (0, _textShadow.parseTextShadow)(style.textShadow),
            textTransform: (0, _textTransform.parseTextTransform)(style.textTransform),
            transform: (0, _transform.parseTransform)(style),
            visibility: (0, _visibility.parseVisibility)(style.visibility),
            wordBreak: (0, _wordBreak.parseWordBreak)(style.wordBreak),
            zIndex: (0, _zIndex.parseZIndex)(position !== _position.POSITION.STATIC ? style.zIndex : 'auto')
        };

        if (this.isTransformed()) {
            // getBoundingClientRect provides values post-transform, we want them without the transformation
            node.style.transform = 'matrix(1,0,0,1,0,0)';
        }

        if (display === _display.DISPLAY.LIST_ITEM) {
            var listOwner = (0, _ListItem.getListOwner)(this);
            if (listOwner) {
                var listIndex = listOwner.listItems.length;
                listOwner.listItems.push(this);
                this.listIndex = node.hasAttribute('value') && typeof node.value === 'number' ? node.value : listIndex === 0 ? typeof listOwner.listStart === 'number' ? listOwner.listStart : 1 : listOwner.listItems[listIndex - 1].listIndex + 1;
            }
        }

        // TODO move bound retrieval for all nodes to a later stage?
        if (node.tagName === 'IMG') {
            node.addEventListener('load', function () {
                _this.bounds = (0, _Bounds.parseBounds)(node, scrollX, scrollY);
                _this.curvedBounds = (0, _Bounds.parseBoundCurves)(_this.bounds, _this.style.border, _this.style.borderRadius);
            });
        }
        this.image = getImage(node, resourceLoader);
        this.bounds = IS_INPUT ? (0, _Input.reformatInputBounds)((0, _Bounds.parseBounds)(node, scrollX, scrollY)) : (0, _Bounds.parseBounds)(node, scrollX, scrollY);
        this.curvedBounds = (0, _Bounds.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius);

        if (true) {
            this.name = '' + node.tagName.toLowerCase() + (node.id ? '#' + node.id : '') + node.className.toString().split(' ').map(function (s) {
                return s.length ? '.' + s : '';
            }).join('');
        }
    }

    _createClass(NodeContainer, [{
        key: 'getClipPaths',
        value: function getClipPaths() {
            var parentClips = this.parent ? this.parent.getClipPaths() : [];
            var isClipped = this.style.overflow !== _overflow.OVERFLOW.VISIBLE;

            return isClipped ? parentClips.concat([(0, _Bounds.calculatePaddingBoxPath)(this.curvedBounds)]) : parentClips;
        }
    }, {
        key: 'isInFlow',
        value: function isInFlow() {
            return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned();
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return !(0, _Util.contains)(this.style.display, _display.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === _visibility.VISIBILITY.VISIBLE;
        }
    }, {
        key: 'isAbsolutelyPositioned',
        value: function isAbsolutelyPositioned() {
            return this.style.position !== _position.POSITION.STATIC && this.style.position !== _position.POSITION.RELATIVE;
        }
    }, {
        key: 'isPositioned',
        value: function isPositioned() {
            return this.style.position !== _position.POSITION.STATIC;
        }
    }, {
        key: 'isFloating',
        value: function isFloating() {
            return this.style.float !== _float.FLOAT.NONE;
        }
    }, {
        key: 'isRootElement',
        value: function isRootElement() {
            return this.parent === null;
        }
    }, {
        key: 'isTransformed',
        value: function isTransformed() {
            return this.style.transform !== null;
        }
    }, {
        key: 'isPositionedWithZIndex',
        value: function isPositionedWithZIndex() {
            return this.isPositioned() && !this.style.zIndex.auto;
        }
    }, {
        key: 'isInlineLevel',
        value: function isInlineLevel() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_FLEX) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_GRID) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_LIST_ITEM) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }, {
        key: 'isInlineBlockOrInlineTable',
        value: function isInlineBlockOrInlineTable() {
            return (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_BLOCK) || (0, _Util.contains)(this.style.display, _display.DISPLAY.INLINE_TABLE);
        }
    }]);

    return NodeContainer;
}();

exports.default = NodeContainer;


var getImage = function getImage(node, resourceLoader) {
    if (node instanceof node.ownerDocument.defaultView.SVGSVGElement || node instanceof SVGSVGElement) {
        // TODO: use canvg to conver SVG
        var s = new XMLSerializer();
        return resourceLoader.loadSVG(s.serializeToString(node));
        // resourceLoader.loadImage(
        //     `data:image/svg+xml,${encodeURIComponent(s.serializeToString(node))}`
        // );
    }
    switch (node.tagName) {
        case 'IMG':
            // $FlowFixMe
            var img = node;
            return resourceLoader.loadImage(img.currentSrc || img.src);
        case 'CANVAS':
            // $FlowFixMe
            var canvas = node;
            return resourceLoader.loadCanvas(canvas);
        case 'IFRAME':
            var iframeKey = node.getAttribute('data-html2canvas-internal-iframe-key');
            if (iframeKey) {
                return iframeKey;
            }
            break;
    }

    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/NodeParser.js":
/*!*********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/NodeParser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NodeParser = undefined;

var _StackingContext = __webpack_require__(/*! ./StackingContext */ "./node_modules/html2canvas/dist/npm/StackingContext.js");

var _StackingContext2 = _interopRequireDefault(_StackingContext);

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/html2canvas/dist/npm/Input.js");

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeParser = exports.NodeParser = function NodeParser(node, resourceLoader, logger) {
    if (true) {
        logger.log('Starting node parsing');
    }

    var index = 0;

    var container = new _NodeContainer2.default(node, null, resourceLoader, index++);
    var stack = new _StackingContext2.default(container, null, true);

    parseNodeTree(node, container, stack, resourceLoader, index);

    if (true) {
        logger.log('Finished parsing node tree');
    }

    return stack;
};

var IGNORED_NODE_NAMES = ['SCRIPT', 'HEAD', 'TITLE', 'OBJECT', 'BR', 'OPTION'];

var parseNodeTree = function parseNodeTree(node, parent, stack, resourceLoader, index) {
    if ("development" !== 'production' && index > 50000) {
        throw new Error('Recursion error while parsing node tree');
    }

    for (var childNode = node.firstChild, nextNode; childNode; childNode = nextNode) {
        nextNode = childNode.nextSibling;
        var defaultView = childNode.ownerDocument.defaultView;
        if (childNode instanceof defaultView.Text || childNode instanceof Text || defaultView.parent && childNode instanceof defaultView.parent.Text) {
            if (childNode.data.trim().length > 0) {
                parent.childNodes.push(_TextContainer2.default.fromTextNode(childNode, parent));
            }
        } else if (childNode instanceof defaultView.HTMLElement || childNode instanceof HTMLElement || defaultView.parent && childNode instanceof defaultView.parent.HTMLElement) {
            if (IGNORED_NODE_NAMES.indexOf(childNode.nodeName) === -1) {
                var container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
                if (container.isVisible()) {
                    if (childNode.tagName === 'INPUT') {
                        // $FlowFixMe
                        (0, _Input.inlineInputElement)(childNode, container);
                    } else if (childNode.tagName === 'TEXTAREA') {
                        // $FlowFixMe
                        (0, _Input.inlineTextAreaElement)(childNode, container);
                    } else if (childNode.tagName === 'SELECT') {
                        // $FlowFixMe
                        (0, _Input.inlineSelectElement)(childNode, container);
                    } else if (container.style.listStyle && container.style.listStyle.listStyleType !== _listStyle.LIST_STYLE_TYPE.NONE) {
                        (0, _ListItem.inlineListItemElement)(childNode, container, resourceLoader);
                    }

                    var SHOULD_TRAVERSE_CHILDREN = childNode.tagName !== 'TEXTAREA';
                    var treatAsRealStackingContext = createsRealStackingContext(container, childNode);
                    if (treatAsRealStackingContext || createsStackingContext(container)) {
                        // for treatAsRealStackingContext:false, any positioned descendants and descendants
                        // which actually create a new stacking context should be considered part of the parent stacking context
                        var parentStack = treatAsRealStackingContext || container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                        var childStack = new _StackingContext2.default(container, parentStack, treatAsRealStackingContext);
                        parentStack.contexts.push(childStack);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, childStack, resourceLoader, index);
                        }
                    } else {
                        stack.children.push(container);
                        if (SHOULD_TRAVERSE_CHILDREN) {
                            parseNodeTree(childNode, container, stack, resourceLoader, index);
                        }
                    }
                }
            }
        } else if (childNode instanceof defaultView.SVGSVGElement || childNode instanceof SVGSVGElement || defaultView.parent && childNode instanceof defaultView.parent.SVGSVGElement) {
            var _container = new _NodeContainer2.default(childNode, parent, resourceLoader, index++);
            var _treatAsRealStackingContext = createsRealStackingContext(_container, childNode);
            if (_treatAsRealStackingContext || createsStackingContext(_container)) {
                // for treatAsRealStackingContext:false, any positioned descendants and descendants
                // which actually create a new stacking context should be considered part of the parent stacking context
                var _parentStack = _treatAsRealStackingContext || _container.isPositioned() ? stack.getRealParentStackingContext() : stack;
                var _childStack = new _StackingContext2.default(_container, _parentStack, _treatAsRealStackingContext);
                _parentStack.contexts.push(_childStack);
            } else {
                stack.children.push(_container);
            }
        }
    }
};

var createsRealStackingContext = function createsRealStackingContext(container, node) {
    return container.isRootElement() || container.isPositionedWithZIndex() || container.style.opacity < 1 || container.isTransformed() || isBodyWithTransparentRoot(container, node);
};

var createsStackingContext = function createsStackingContext(container) {
    return container.isPositioned() || container.isFloating();
};

var isBodyWithTransparentRoot = function isBodyWithTransparentRoot(container, node) {
    return node.nodeName === 'BODY' && container.parent instanceof _NodeContainer2.default && container.parent.style.background.backgroundColor.isTransparent();
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Proxy.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Proxy.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Proxy = undefined;

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Proxy = exports.Proxy = function Proxy(src, options) {
    if (!options.proxy) {
        return Promise.reject( true ? 'No proxy defined' : undefined);
    }
    var proxy = options.proxy;

    return new Promise(function (resolve, reject) {
        var responseType = _Feature2.default.SUPPORT_CORS_XHR && _Feature2.default.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
        var xhr = _Feature2.default.SUPPORT_CORS_XHR ? new XMLHttpRequest() : new XDomainRequest();
        xhr.onload = function () {
            if (xhr instanceof XMLHttpRequest) {
                if (xhr.status === 200) {
                    if (responseType === 'text') {
                        resolve(xhr.response);
                    } else {
                        var reader = new FileReader();
                        // $FlowFixMe
                        reader.addEventListener('load', function () {
                            return resolve(reader.result);
                        }, false);
                        // $FlowFixMe
                        reader.addEventListener('error', function (e) {
                            return reject(e);
                        }, false);
                        reader.readAsDataURL(xhr.response);
                    }
                } else {
                    reject( true ? 'Failed to proxy resource ' + src.substring(0, 256) + ' with status code ' + xhr.status : undefined);
                }
            } else {
                resolve(xhr.responseText);
            }
        };

        xhr.onerror = reject;
        xhr.open('GET', proxy + '?url=' + encodeURIComponent(src) + '&responseType=' + responseType);

        if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
            xhr.responseType = responseType;
        }

        if (options.imageTimeout) {
            var timeout = options.imageTimeout;
            xhr.timeout = timeout;
            xhr.ontimeout = function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) proxying ' + src.substring(0, 256) : undefined);
            };
        }

        xhr.send();
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/PseudoNodeContent.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/PseudoNodeContent.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.resolvePseudoContent = exports.popCounters = exports.parseCounterReset = exports.TOKEN_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ListItem = __webpack_require__(/*! ./ListItem */ "./node_modules/html2canvas/dist/npm/ListItem.js");

var _listStyle = __webpack_require__(/*! ./parsing/listStyle */ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js");

var PSEUDO_CONTENT_ITEM_TYPE = exports.PSEUDO_CONTENT_ITEM_TYPE = {
    TEXT: 0,
    IMAGE: 1
};

var TOKEN_TYPE = exports.TOKEN_TYPE = {
    STRING: 0,
    ATTRIBUTE: 1,
    URL: 2,
    COUNTER: 3,
    COUNTERS: 4,
    OPENQUOTE: 5,
    CLOSEQUOTE: 6
};

var parseCounterReset = exports.parseCounterReset = function parseCounterReset(style, data) {
    if (!style || !style.counterReset || style.counterReset === 'none') {
        return [];
    }

    var counterNames = [];
    var counterResets = style.counterReset.split(/\s*,\s*/);
    var lenCounterResets = counterResets.length;

    for (var i = 0; i < lenCounterResets; i++) {
        var _counterResets$i$spli = counterResets[i].split(/\s+/),
            _counterResets$i$spli2 = _slicedToArray(_counterResets$i$spli, 2),
            counterName = _counterResets$i$spli2[0],
            initialValue = _counterResets$i$spli2[1];

        counterNames.push(counterName);
        var counter = data.counters[counterName];
        if (!counter) {
            counter = data.counters[counterName] = [];
        }
        counter.push(parseInt(initialValue || 0, 10));
    }

    return counterNames;
};

var popCounters = exports.popCounters = function popCounters(counterNames, data) {
    var lenCounters = counterNames.length;
    for (var i = 0; i < lenCounters; i++) {
        data.counters[counterNames[i]].pop();
    }
};

var resolvePseudoContent = exports.resolvePseudoContent = function resolvePseudoContent(node, style, data) {
    if (!style || !style.content || style.content === 'none' || style.content === '-moz-alt-content' || style.display === 'none') {
        return null;
    }

    var tokens = parseContent(style.content);

    var len = tokens.length;
    var contentItems = [];
    var s = '';

    // increment the counter (if there is a "counter-increment" declaration)
    var counterIncrement = style.counterIncrement;
    if (counterIncrement && counterIncrement !== 'none') {
        var _counterIncrement$spl = counterIncrement.split(/\s+/),
            _counterIncrement$spl2 = _slicedToArray(_counterIncrement$spl, 2),
            counterName = _counterIncrement$spl2[0],
            incrementValue = _counterIncrement$spl2[1];

        var counter = data.counters[counterName];
        if (counter) {
            counter[counter.length - 1] += incrementValue === undefined ? 1 : parseInt(incrementValue, 10);
        }
    }

    // build the content string
    for (var i = 0; i < len; i++) {
        var token = tokens[i];
        switch (token.type) {
            case TOKEN_TYPE.STRING:
                s += token.value || '';
                break;

            case TOKEN_TYPE.ATTRIBUTE:
                if (node instanceof HTMLElement && token.value) {
                    s += node.getAttribute(token.value) || '';
                }
                break;

            case TOKEN_TYPE.COUNTER:
                var _counter = data.counters[token.name || ''];
                if (_counter) {
                    s += formatCounterValue([_counter[_counter.length - 1]], '', token.format);
                }
                break;

            case TOKEN_TYPE.COUNTERS:
                var _counters = data.counters[token.name || ''];
                if (_counters) {
                    s += formatCounterValue(_counters, token.glue, token.format);
                }
                break;

            case TOKEN_TYPE.OPENQUOTE:
                s += getQuote(style, true, data.quoteDepth);
                data.quoteDepth++;
                break;

            case TOKEN_TYPE.CLOSEQUOTE:
                data.quoteDepth--;
                s += getQuote(style, false, data.quoteDepth);
                break;

            case TOKEN_TYPE.URL:
                if (s) {
                    contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
                    s = '';
                }
                contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.IMAGE, value: token.value || '' });
                break;
        }
    }

    if (s) {
        contentItems.push({ type: PSEUDO_CONTENT_ITEM_TYPE.TEXT, value: s });
    }

    return contentItems;
};

var parseContent = exports.parseContent = function parseContent(content, cache) {
    if (cache && cache[content]) {
        return cache[content];
    }

    var tokens = [];
    var len = content.length;

    var isString = false;
    var isEscaped = false;
    var isFunction = false;
    var str = '';
    var functionName = '';
    var args = [];

    for (var i = 0; i < len; i++) {
        var c = content.charAt(i);

        switch (c) {
            case "'":
            case '"':
                if (isEscaped) {
                    str += c;
                } else {
                    isString = !isString;
                    if (!isFunction && !isString) {
                        tokens.push({ type: TOKEN_TYPE.STRING, value: str });
                        str = '';
                    }
                }
                break;

            case '\\':
                if (isEscaped) {
                    str += c;
                    isEscaped = false;
                } else {
                    isEscaped = true;
                }
                break;

            case '(':
                if (isString) {
                    str += c;
                } else {
                    isFunction = true;
                    functionName = str;
                    str = '';
                    args = [];
                }
                break;

            case ')':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    if (str) {
                        args.push(str);
                    }

                    switch (functionName) {
                        case 'attr':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.ATTRIBUTE, value: args[0] });
                            }
                            break;

                        case 'counter':
                            if (args.length > 0) {
                                var counter = {
                                    type: TOKEN_TYPE.COUNTER,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    counter.format = args[1];
                                }
                                tokens.push(counter);
                            }
                            break;

                        case 'counters':
                            if (args.length > 0) {
                                var _counters2 = {
                                    type: TOKEN_TYPE.COUNTERS,
                                    name: args[0]
                                };
                                if (args.length > 1) {
                                    _counters2.glue = args[1];
                                }
                                if (args.length > 2) {
                                    _counters2.format = args[2];
                                }
                                tokens.push(_counters2);
                            }
                            break;

                        case 'url':
                            if (args.length > 0) {
                                tokens.push({ type: TOKEN_TYPE.URL, value: args[0] });
                            }
                            break;
                    }

                    isFunction = false;
                    str = '';
                }
                break;

            case ',':
                if (isString) {
                    str += c;
                } else if (isFunction) {
                    args.push(str);
                    str = '';
                }
                break;

            case ' ':
            case '\t':
                if (isString) {
                    str += c;
                } else if (str) {
                    addOtherToken(tokens, str);
                    str = '';
                }
                break;

            default:
                str += c;
        }

        if (c !== '\\') {
            isEscaped = false;
        }
    }

    if (str) {
        addOtherToken(tokens, str);
    }

    if (cache) {
        cache[content] = tokens;
    }

    return tokens;
};

var addOtherToken = function addOtherToken(tokens, identifier) {
    switch (identifier) {
        case 'open-quote':
            tokens.push({ type: TOKEN_TYPE.OPENQUOTE });
            break;
        case 'close-quote':
            tokens.push({ type: TOKEN_TYPE.CLOSEQUOTE });
            break;
    }
};

var getQuote = function getQuote(style, isOpening, quoteDepth) {
    var quotes = style.quotes ? style.quotes.split(/\s+/) : ["'\"'", "'\"'"];
    var idx = quoteDepth * 2;
    if (idx >= quotes.length) {
        idx = quotes.length - 2;
    }
    if (!isOpening) {
        ++idx;
    }
    return quotes[idx].replace(/^["']|["']$/g, '');
};

var formatCounterValue = function formatCounterValue(counter, glue, format) {
    var len = counter.length;
    var result = '';

    for (var i = 0; i < len; i++) {
        if (i > 0) {
            result += glue || '';
        }
        result += (0, _ListItem.createCounterText)(counter[i], (0, _listStyle.parseListStyleType)(format || 'decimal'), false);
    }

    return result;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Renderer.js":
/*!*******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Renderer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Font = __webpack_require__(/*! ./Font */ "./node_modules/html2canvas/dist/npm/Font.js");

var _Gradient = __webpack_require__(/*! ./Gradient */ "./node_modules/html2canvas/dist/npm/Gradient.js");

var _TextContainer = __webpack_require__(/*! ./TextContainer */ "./node_modules/html2canvas/dist/npm/TextContainer.js");

var _TextContainer2 = _interopRequireDefault(_TextContainer);

var _background = __webpack_require__(/*! ./parsing/background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var _border = __webpack_require__(/*! ./parsing/border */ "./node_modules/html2canvas/dist/npm/parsing/border.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
    function Renderer(target, options) {
        _classCallCheck(this, Renderer);

        this.target = target;
        this.options = options;
        target.render(options);
    }

    _createClass(Renderer, [{
        key: 'renderNode',
        value: function renderNode(container) {
            if (container.isVisible()) {
                this.renderNodeBackgroundAndBorders(container);
                this.renderNodeContent(container);
            }
        }
    }, {
        key: 'renderNodeContent',
        value: function renderNodeContent(container) {
            var _this = this;

            var callback = function callback() {
                if (container.childNodes.length) {
                    container.childNodes.forEach(function (child) {
                        if (child instanceof _TextContainer2.default) {
                            var style = child.parent.style;
                            _this.target.renderTextNode(child.bounds, style.color, style.font, style.textDecoration, style.textShadow);
                        } else {
                            _this.target.drawShape(child, container.style.color);
                        }
                    });
                }

                if (container.image) {
                    var _image = _this.options.imageStore.get(container.image);
                    if (_image) {
                        var contentBox = (0, _Bounds.calculateContentBox)(container.bounds, container.style.padding, container.style.border);
                        var _width = typeof _image.width === 'number' && _image.width > 0 ? _image.width : contentBox.width;
                        var _height = typeof _image.height === 'number' && _image.height > 0 ? _image.height : contentBox.height;
                        if (_width > 0 && _height > 0) {
                            _this.target.clip([(0, _Bounds.calculatePaddingBoxPath)(container.curvedBounds)], function () {
                                _this.target.drawImage(_image, new _Bounds.Bounds(0, 0, _width, _height), contentBox);
                            });
                        }
                    }
                }
            };
            var paths = container.getClipPaths();
            if (paths.length) {
                this.target.clip(paths, callback);
            } else {
                callback();
            }
        }
    }, {
        key: 'renderNodeBackgroundAndBorders',
        value: function renderNodeBackgroundAndBorders(container) {
            var _this2 = this;

            var HAS_BACKGROUND = !container.style.background.backgroundColor.isTransparent() || container.style.background.backgroundImage.length;

            var hasRenderableBorders = container.style.border.some(function (border) {
                return border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent();
            });

            var callback = function callback() {
                var backgroundPaintingArea = (0, _background.calculateBackgroungPaintingArea)(container.curvedBounds, container.style.background.backgroundClip);

                if (HAS_BACKGROUND) {
                    _this2.target.clip([backgroundPaintingArea], function () {
                        if (!container.style.background.backgroundColor.isTransparent()) {
                            _this2.target.fill(container.style.background.backgroundColor);
                        }

                        _this2.renderBackgroundImage(container);
                    });
                }

                container.style.border.forEach(function (border, side) {
                    if (border.borderStyle !== _border.BORDER_STYLE.NONE && !border.borderColor.isTransparent()) {
                        _this2.renderBorder(border, side, container.curvedBounds);
                    }
                });
            };

            if (HAS_BACKGROUND || hasRenderableBorders) {
                var paths = container.parent ? container.parent.getClipPaths() : [];
                if (paths.length) {
                    this.target.clip(paths, callback);
                } else {
                    callback();
                }
            }
        }
    }, {
        key: 'renderBackgroundImage',
        value: function renderBackgroundImage(container) {
            var _this3 = this;

            container.style.background.backgroundImage.slice(0).reverse().forEach(function (backgroundImage) {
                if (backgroundImage.source.method === 'url' && backgroundImage.source.args.length) {
                    _this3.renderBackgroundRepeat(container, backgroundImage);
                } else if (/gradient/i.test(backgroundImage.source.method)) {
                    _this3.renderBackgroundGradient(container, backgroundImage);
                }
            });
        }
    }, {
        key: 'renderBackgroundRepeat',
        value: function renderBackgroundRepeat(container, background) {
            var image = this.options.imageStore.get(background.source.args[0]);
            if (image) {
                var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
                var backgroundImageSize = (0, _background.calculateBackgroundSize)(background, image, backgroundPositioningArea);
                var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
                var _path = (0, _background.calculateBackgroundRepeatPath)(background, position, backgroundImageSize, backgroundPositioningArea, container.bounds);

                var _offsetX = Math.round(backgroundPositioningArea.left + position.x);
                var _offsetY = Math.round(backgroundPositioningArea.top + position.y);
                this.target.renderRepeat(_path, image, backgroundImageSize, _offsetX, _offsetY);
            }
        }
    }, {
        key: 'renderBackgroundGradient',
        value: function renderBackgroundGradient(container, background) {
            var backgroundPositioningArea = (0, _background.calculateBackgroungPositioningArea)(container.style.background.backgroundOrigin, container.bounds, container.style.padding, container.style.border);
            var backgroundImageSize = (0, _background.calculateGradientBackgroundSize)(background, backgroundPositioningArea);
            var position = (0, _background.calculateBackgroundPosition)(background.position, backgroundImageSize, backgroundPositioningArea);
            var gradientBounds = new _Bounds.Bounds(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y), backgroundImageSize.width, backgroundImageSize.height);

            var gradient = (0, _Gradient.parseGradient)(container, background.source, gradientBounds);
            if (gradient) {
                switch (gradient.type) {
                    case _Gradient.GRADIENT_TYPE.LINEAR_GRADIENT:
                        // $FlowFixMe
                        this.target.renderLinearGradient(gradientBounds, gradient);
                        break;
                    case _Gradient.GRADIENT_TYPE.RADIAL_GRADIENT:
                        // $FlowFixMe
                        this.target.renderRadialGradient(gradientBounds, gradient);
                        break;
                }
            }
        }
    }, {
        key: 'renderBorder',
        value: function renderBorder(border, side, curvePoints) {
            this.target.drawShape((0, _Bounds.parsePathForBorder)(curvePoints, side), border.borderColor);
        }
    }, {
        key: 'renderStack',
        value: function renderStack(stack) {
            var _this4 = this;

            if (stack.container.isVisible()) {
                var _opacity = stack.getOpacity();
                if (_opacity !== this._opacity) {
                    this.target.setOpacity(stack.getOpacity());
                    this._opacity = _opacity;
                }

                var _transform = stack.container.style.transform;
                if (_transform !== null) {
                    this.target.transform(stack.container.bounds.left + _transform.transformOrigin[0].value, stack.container.bounds.top + _transform.transformOrigin[1].value, _transform.transform, function () {
                        return _this4.renderStackContent(stack);
                    });
                } else {
                    this.renderStackContent(stack);
                }
            }
        }
    }, {
        key: 'renderStackContent',
        value: function renderStackContent(stack) {
            var _splitStackingContext = splitStackingContexts(stack),
                _splitStackingContext2 = _slicedToArray(_splitStackingContext, 5),
                negativeZIndex = _splitStackingContext2[0],
                zeroOrAutoZIndexOrTransformedOrOpacity = _splitStackingContext2[1],
                positiveZIndex = _splitStackingContext2[2],
                nonPositionedFloats = _splitStackingContext2[3],
                nonPositionedInlineLevel = _splitStackingContext2[4];

            var _splitDescendants = splitDescendants(stack),
                _splitDescendants2 = _slicedToArray(_splitDescendants, 2),
                inlineLevel = _splitDescendants2[0],
                nonInlineLevel = _splitDescendants2[1];

            // https://www.w3.org/TR/css-position-3/#painting-order
            // 1. the background and borders of the element forming the stacking context.


            this.renderNodeBackgroundAndBorders(stack.container);
            // 2. the child stacking contexts with negative stack levels (most negative first).
            negativeZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
            this.renderNodeContent(stack.container);
            nonInlineLevel.forEach(this.renderNode, this);
            // 4. All non-positioned floating descendants, in tree order. For each one of these,
            // treat the element as if it created a new stacking context, but any positioned descendants and descendants
            // which actually create a new stacking context should be considered part of the parent stacking context,
            // not this new one.
            nonPositionedFloats.forEach(this.renderStack, this);
            // 5. the in-flow, inline-level, non-positioned descendants, including inline tables and inline blocks.
            nonPositionedInlineLevel.forEach(this.renderStack, this);
            inlineLevel.forEach(this.renderNode, this);
            // 6. All positioned, opacity or transform descendants, in tree order that fall into the following categories:
            //  All positioned descendants with 'z-index: auto' or 'z-index: 0', in tree order.
            //  For those with 'z-index: auto', treat the element as if it created a new stacking context,
            //  but any positioned descendants and descendants which actually create a new stacking context should be
            //  considered part of the parent stacking context, not this new one. For those with 'z-index: 0',
            //  treat the stacking context generated atomically.
            //
            //  All opacity descendants with opacity less than 1
            //
            //  All transform descendants with transform other than none
            zeroOrAutoZIndexOrTransformedOrOpacity.forEach(this.renderStack, this);
            // 7. Stacking contexts formed by positioned descendants with z-indices greater than or equal to 1 in z-index
            // order (smallest first) then tree order.
            positiveZIndex.sort(sortByZIndex).forEach(this.renderStack, this);
        }
    }, {
        key: 'render',
        value: function render(stack) {
            var _this5 = this;

            if (this.options.backgroundColor) {
                this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor);
            }
            this.renderStack(stack);
            var target = this.target.getTarget();
            if (true) {
                return target.then(function (output) {
                    _this5.options.logger.log('Render completed');
                    return output;
                });
            }
            return target;
        }
    }]);

    return Renderer;
}();

exports.default = Renderer;


var splitDescendants = function splitDescendants(stack) {
    var inlineLevel = [];
    var nonInlineLevel = [];

    var length = stack.children.length;
    for (var i = 0; i < length; i++) {
        var child = stack.children[i];
        if (child.isInlineLevel()) {
            inlineLevel.push(child);
        } else {
            nonInlineLevel.push(child);
        }
    }
    return [inlineLevel, nonInlineLevel];
};

var splitStackingContexts = function splitStackingContexts(stack) {
    var negativeZIndex = [];
    var zeroOrAutoZIndexOrTransformedOrOpacity = [];
    var positiveZIndex = [];
    var nonPositionedFloats = [];
    var nonPositionedInlineLevel = [];
    var length = stack.contexts.length;
    for (var i = 0; i < length; i++) {
        var child = stack.contexts[i];
        if (child.container.isPositioned() || child.container.style.opacity < 1 || child.container.isTransformed()) {
            if (child.container.style.zIndex.order < 0) {
                negativeZIndex.push(child);
            } else if (child.container.style.zIndex.order > 0) {
                positiveZIndex.push(child);
            } else {
                zeroOrAutoZIndexOrTransformedOrOpacity.push(child);
            }
        } else {
            if (child.container.isFloating()) {
                nonPositionedFloats.push(child);
            } else {
                nonPositionedInlineLevel.push(child);
            }
        }
    }
    return [negativeZIndex, zeroOrAutoZIndexOrTransformedOrOpacity, positiveZIndex, nonPositionedFloats, nonPositionedInlineLevel];
};

var sortByZIndex = function sortByZIndex(a, b) {
    if (a.container.style.zIndex.order > b.container.style.zIndex.order) {
        return 1;
    } else if (a.container.style.zIndex.order < b.container.style.zIndex.order) {
        return -1;
    }

    return a.container.index > b.container.index ? 1 : -1;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/ResourceLoader.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/ResourceLoader.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResourceStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Proxy = __webpack_require__(/*! ./Proxy */ "./node_modules/html2canvas/dist/npm/Proxy.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceLoader = function () {
    function ResourceLoader(options, logger, window) {
        _classCallCheck(this, ResourceLoader);

        this.options = options;
        this._window = window;
        this.origin = this.getOrigin(window.location.href);
        this.cache = {};
        this.logger = logger;
        this._index = 0;
    }

    _createClass(ResourceLoader, [{
        key: 'loadSVG',
        value: function loadSVG(data) {
            if (data.tagName != 'svg' || _Feature2.default.SUPPORT_SVG_DRAWING) {
                return this.loadImage('data:image/svg+xml,' + encodeURIComponent(data));
            }

            this.cache[data] = _loadSVG(data, this.options.imageTimeout || 0);
            return data;
        }
    }, {
        key: 'loadImage',
        value: function loadImage(src) {
            var _this = this;

            if (this.hasResourceInCache(src)) {
                return src;
            }
            if (isBlobImage(src)) {
                this.cache[src] = _loadImage(src, this.options.imageTimeout || 0);
                return src;
            }

            if (!isSVG(src) || _Feature2.default.SUPPORT_SVG_DRAWING) {
                if (this.options.allowTaint === true || isInlineImage(src) || this.isSameOrigin(src)) {
                    return this.addImage(src, src, false);
                } else if (!this.isSameOrigin(src)) {
                    if (typeof this.options.proxy === 'string') {
                        this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                            return _loadImage(src, _this.options.imageTimeout || 0);
                        });
                        return src;
                    } else if (this.options.useCORS === true && _Feature2.default.SUPPORT_CORS_IMAGES) {
                        return this.addImage(src, src, true);
                    }
                }
            }
        }
    }, {
        key: 'inlineImage',
        value: function inlineImage(src) {
            var _this2 = this;

            if (isInlineImage(src)) {
                return _loadImage(src, this.options.imageTimeout || 0);
            }
            if (this.hasResourceInCache(src)) {
                return this.cache[src];
            }
            if (!this.isSameOrigin(src) && typeof this.options.proxy === 'string') {
                return this.cache[src] = (0, _Proxy.Proxy)(src, this.options).then(function (src) {
                    return _loadImage(src, _this2.options.imageTimeout || 0);
                });
            }

            return this.xhrImage(src);
        }
    }, {
        key: 'xhrImage',
        value: function xhrImage(src) {
            var _this3 = this;

            this.cache[src] = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status !== 200) {
                            reject('Failed to fetch image ' + src.substring(0, 256) + ' with status code ' + xhr.status);
                        } else {
                            var reader = new FileReader();
                            reader.addEventListener('load', function () {
                                // $FlowFixMe
                                var result = reader.result;
                                resolve(result);
                            }, false);
                            reader.addEventListener('error', function (e) {
                                return reject(e);
                            }, false);
                            reader.readAsDataURL(xhr.response);
                        }
                    }
                };
                xhr.responseType = 'blob';
                if (_this3.options.imageTimeout) {
                    var timeout = _this3.options.imageTimeout;
                    xhr.timeout = timeout;
                    xhr.ontimeout = function () {
                        return reject( true ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : undefined);
                    };
                }
                xhr.open('GET', src, true);
                xhr.send();
            }).then(function (src) {
                return _loadImage(src, _this3.options.imageTimeout || 0);
            });

            return this.cache[src];
        }
    }, {
        key: 'loadCanvas',
        value: function loadCanvas(node) {
            var key = String(this._index++);
            this.cache[key] = Promise.resolve(node);
            return key;
        }
    }, {
        key: 'hasResourceInCache',
        value: function hasResourceInCache(key) {
            return typeof this.cache[key] !== 'undefined';
        }
    }, {
        key: 'addImage',
        value: function addImage(key, src, useCORS) {
            var _this4 = this;

            if (true) {
                this.logger.log('Added image ' + key.substring(0, 256));
            }

            var imageLoadHandler = function imageLoadHandler(supportsDataImages) {
                return new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        return resolve(img);
                    };
                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                    if (!supportsDataImages || useCORS) {
                        img.crossOrigin = 'anonymous';
                    }

                    img.onerror = reject;
                    img.src = src;
                    if (img.complete === true) {
                        // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function () {
                            resolve(img);
                        }, 500);
                    }
                    if (_this4.options.imageTimeout) {
                        var timeout = _this4.options.imageTimeout;
                        setTimeout(function () {
                            return reject( true ? 'Timed out (' + timeout + 'ms) fetching ' + src.substring(0, 256) : undefined);
                        }, timeout);
                    }
                });
            };

            this.cache[key] = isInlineBase64Image(src) && !isSVG(src) ? // $FlowFixMe
            _Feature2.default.SUPPORT_BASE64_DRAWING(src).then(imageLoadHandler) : imageLoadHandler(true);
            return key;
        }
    }, {
        key: 'isSameOrigin',
        value: function isSameOrigin(url) {
            return this.getOrigin(url) === this.origin;
        }
    }, {
        key: 'getOrigin',
        value: function getOrigin(url) {
            var link = this._link || (this._link = this._window.document.createElement('a'));
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        }
    }, {
        key: 'ready',
        value: function ready() {
            var _this5 = this;

            var keys = Object.keys(this.cache);
            var values = keys.map(function (str) {
                return _this5.cache[str].catch(function (e) {
                    if (true) {
                        _this5.logger.log('Unable to load image', e);
                    }
                    return null;
                });
            });
            return Promise.all(values).then(function (images) {
                if (true) {
                    _this5.logger.log('Finished loading ' + images.length + ' images', images);
                }
                return new ResourceStore(keys, images);
            });
        }
    }]);

    return ResourceLoader;
}();

exports.default = ResourceLoader;

var ResourceStore = exports.ResourceStore = function () {
    function ResourceStore(keys, resources) {
        _classCallCheck(this, ResourceStore);

        this._keys = keys;
        this._resources = resources;
    }

    _createClass(ResourceStore, [{
        key: 'get',
        value: function get(key) {
            var index = this._keys.indexOf(key);
            return index === -1 ? null : this._resources[index];
        }
    }]);

    return ResourceStore;
}();

var INLINE_SVG = /^data:image\/svg\+xml/i;
var INLINE_BASE64 = /^data:image\/.*;base64,/i;
var INLINE_IMG = /^data:image\/.*/i;

var isInlineImage = function isInlineImage(src) {
    return INLINE_IMG.test(src);
};
var isInlineBase64Image = function isInlineBase64Image(src) {
    return INLINE_BASE64.test(src);
};
var isBlobImage = function isBlobImage(src) {
    return src.substr(0, 4) === 'blob';
};

var isSVG = function isSVG(src) {
    return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
};

var _loadSVG = function _loadSVG(data, timeout) {
    return new Promise(function (resolve, reject) {
        __webpack_require__.e(/*! import() | canvg */ "vendors~canvg").then(function() { var module = __webpack_require__(/*! ./libs/canvg */ "./node_modules/html2canvas/dist/npm/libs/canvg.js"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }).then(function (canvg) {
            // For AMD imported by webpack
            if (!(canvg instanceof Function)) canvg = canvg.default;
            return new Promise(function (resolve, reject) {
                var canvas = document.createElement('canvas');
                canvg(canvas, data, {
                    renderCallback: function renderCallback() {
                        resolve(canvas);
                    }
                });
            });
        }).then(function (canvas) {
            resolve(canvas);
        });
        if (timeout) {
            setTimeout(function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) loading canvas' : undefined);
            }, timeout);
        }
    });
};

var _loadImage = function _loadImage(src, timeout) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;
        img.src = src;
        if (img.complete === true) {
            // Inline XML images may fail to parse, throwing an Error later on
            setTimeout(function () {
                resolve(img);
            }, 500);
        }
        if (timeout) {
            setTimeout(function () {
                return reject( true ? 'Timed out (' + timeout + 'ms) loading image' : undefined);
            }, timeout);
        }
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/StackingContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/StackingContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _position = __webpack_require__(/*! ./parsing/position */ "./node_modules/html2canvas/dist/npm/parsing/position.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StackingContext = function () {
    function StackingContext(container, parent, treatAsRealStackingContext) {
        _classCallCheck(this, StackingContext);

        this.container = container;
        this.parent = parent;
        this.contexts = [];
        this.children = [];
        this.treatAsRealStackingContext = treatAsRealStackingContext;
    }

    _createClass(StackingContext, [{
        key: 'getOpacity',
        value: function getOpacity() {
            return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity;
        }
    }, {
        key: 'getRealParentStackingContext',
        value: function getRealParentStackingContext() {
            return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext();
        }
    }]);

    return StackingContext;
}();

exports.default = StackingContext;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/TextBounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/TextBounds.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextBounds = exports.TextBounds = undefined;

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _textDecoration = __webpack_require__(/*! ./parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Unicode = __webpack_require__(/*! ./Unicode */ "./node_modules/html2canvas/dist/npm/Unicode.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextBounds = exports.TextBounds = function TextBounds(text, bounds) {
    _classCallCheck(this, TextBounds);

    this.text = text;
    this.bounds = bounds;
};

var parseTextBounds = exports.parseTextBounds = function parseTextBounds(value, parent, node) {
    var letterRendering = parent.style.letterSpacing !== 0;
    var textList = letterRendering ? (0, _Unicode.toCodePoints)(value).map(function (i) {
        return (0, _Unicode.fromCodePoint)(i);
    }) : (0, _Unicode.breakWords)(value, parent);
    var length = textList.length;
    var defaultView = node.parentNode ? node.parentNode.ownerDocument.defaultView : null;
    var scrollX = defaultView ? defaultView.pageXOffset : 0;
    var scrollY = defaultView ? defaultView.pageYOffset : 0;
    var textBounds = [];
    var offset = 0;
    for (var i = 0; i < length; i++) {
        var text = textList[i];
        if (parent.style.textDecoration !== _textDecoration.TEXT_DECORATION.NONE || text.trim().length > 0) {
            if (_Feature2.default.SUPPORT_RANGE_BOUNDS) {
                textBounds.push(new TextBounds(text, getRangeBounds(node, offset, text.length, scrollX, scrollY)));
            } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(node, scrollX, scrollY)));
                node = replacementNode;
            }
        } else if (!_Feature2.default.SUPPORT_RANGE_BOUNDS) {
            node = node.splitText(text.length);
        }
        offset += text.length;
    }
    return textBounds;
};

var getWrapperBounds = function getWrapperBounds(node, scrollX, scrollY) {
    var wrapper = node.ownerDocument.createElement('html2canvaswrapper');
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
        parentNode.replaceChild(wrapper, node);
        var bounds = (0, _Bounds.parseBounds)(wrapper, scrollX, scrollY);
        if (wrapper.firstChild) {
            parentNode.replaceChild(wrapper.firstChild, wrapper);
        }
        return bounds;
    }
    return new _Bounds.Bounds(0, 0, 0, 0);
};

var getRangeBounds = function getRangeBounds(node, offset, length, scrollX, scrollY) {
    var range = node.ownerDocument.createRange();
    range.setStart(node, offset);
    range.setEnd(node, offset + length);
    return _Bounds.Bounds.fromClientRect(range.getBoundingClientRect(), scrollX, scrollY);
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/TextContainer.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/TextContainer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textTransform = __webpack_require__(/*! ./parsing/textTransform */ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js");

var _TextBounds = __webpack_require__(/*! ./TextBounds */ "./node_modules/html2canvas/dist/npm/TextBounds.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextContainer = function () {
    function TextContainer(text, parent, bounds) {
        _classCallCheck(this, TextContainer);

        this.text = text;
        this.parent = parent;
        this.bounds = bounds;
    }

    _createClass(TextContainer, null, [{
        key: 'fromTextNode',
        value: function fromTextNode(node, parent) {
            var text = transform(node.data, parent.style.textTransform);
            return new TextContainer(text, parent, (0, _TextBounds.parseTextBounds)(text, parent, node));
        }
    }]);

    return TextContainer;
}();

exports.default = TextContainer;


var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

var transform = function transform(text, _transform) {
    switch (_transform) {
        case _textTransform.TEXT_TRANSFORM.LOWERCASE:
            return text.toLowerCase();
        case _textTransform.TEXT_TRANSFORM.CAPITALIZE:
            return text.replace(CAPITALIZE, capitalize);
        case _textTransform.TEXT_TRANSFORM.UPPERCASE:
            return text.toUpperCase();
        default:
            return text;
    }
};

function capitalize(m, p1, p2) {
    if (m.length > 0) {
        return p1 + p2.toUpperCase();
    }

    return m;
}

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Unicode.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Unicode.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.breakWords = exports.fromCodePoint = exports.toCodePoints = undefined;

var _cssLineBreak = __webpack_require__(/*! css-line-break */ "./node_modules/css-line-break/dist/index.js");

Object.defineProperty(exports, 'toCodePoints', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.toCodePoints;
    }
});
Object.defineProperty(exports, 'fromCodePoint', {
    enumerable: true,
    get: function get() {
        return _cssLineBreak.fromCodePoint;
    }
});

var _NodeContainer = __webpack_require__(/*! ./NodeContainer */ "./node_modules/html2canvas/dist/npm/NodeContainer.js");

var _NodeContainer2 = _interopRequireDefault(_NodeContainer);

var _overflowWrap = __webpack_require__(/*! ./parsing/overflowWrap */ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakWords = exports.breakWords = function breakWords(str, parent) {
    var breaker = (0, _cssLineBreak.LineBreaker)(str, {
        lineBreak: parent.style.lineBreak,
        wordBreak: parent.style.overflowWrap === _overflowWrap.OVERFLOW_WRAP.BREAK_WORD ? 'break-word' : parent.style.wordBreak
    });

    var words = [];
    var bk = void 0;

    while (!(bk = breaker.next()).done) {
        words.push(bk.value.slice());
    }

    return words;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Util.js":
/*!***************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Util.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var contains = exports.contains = function contains(bit, value) {
    return (bit & value) !== 0;
};

var distance = exports.distance = function distance(a, b) {
    return Math.sqrt(a * a + b * b);
};

var copyCSSStyles = exports.copyCSSStyles = function copyCSSStyles(style, target) {
    // Edge does not provide value for cssText
    for (var i = style.length - 1; i >= 0; i--) {
        var property = style.item(i);
        // Safari shows pseudoelements if content is set
        if (property !== 'content') {
            target.style.setProperty(property, style.getPropertyValue(property));
        }
    }
    return target;
};

var SMALL_IMAGE = exports.SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/Window.js":
/*!*****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/Window.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderElement = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Logger = __webpack_require__(/*! ./Logger */ "./node_modules/html2canvas/dist/npm/Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _NodeParser = __webpack_require__(/*! ./NodeParser */ "./node_modules/html2canvas/dist/npm/NodeParser.js");

var _Renderer = __webpack_require__(/*! ./Renderer */ "./node_modules/html2canvas/dist/npm/Renderer.js");

var _Renderer2 = _interopRequireDefault(_Renderer);

var _ForeignObjectRenderer = __webpack_require__(/*! ./renderer/ForeignObjectRenderer */ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js");

var _ForeignObjectRenderer2 = _interopRequireDefault(_ForeignObjectRenderer);

var _Feature = __webpack_require__(/*! ./Feature */ "./node_modules/html2canvas/dist/npm/Feature.js");

var _Feature2 = _interopRequireDefault(_Feature);

var _Bounds = __webpack_require__(/*! ./Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _Clone = __webpack_require__(/*! ./Clone */ "./node_modules/html2canvas/dist/npm/Clone.js");

var _Font = __webpack_require__(/*! ./Font */ "./node_modules/html2canvas/dist/npm/Font.js");

var _Color = __webpack_require__(/*! ./Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderElement = exports.renderElement = function renderElement(element, options, logger) {
    var ownerDocument = element.ownerDocument;

    var windowBounds = new _Bounds.Bounds(options.scrollX, options.scrollY, options.windowWidth, options.windowHeight);

    // http://www.w3.org/TR/css3-background/#special-backgrounds
    var documentBackgroundColor = ownerDocument.documentElement ? new _Color2.default(getComputedStyle(ownerDocument.documentElement).backgroundColor) : _Color.TRANSPARENT;
    var bodyBackgroundColor = ownerDocument.body ? new _Color2.default(getComputedStyle(ownerDocument.body).backgroundColor) : _Color.TRANSPARENT;

    var backgroundColor = element === ownerDocument.documentElement ? documentBackgroundColor.isTransparent() ? bodyBackgroundColor.isTransparent() ? options.backgroundColor ? new _Color2.default(options.backgroundColor) : null : bodyBackgroundColor : documentBackgroundColor : options.backgroundColor ? new _Color2.default(options.backgroundColor) : null;

    return (options.foreignObjectRendering ? // $FlowFixMe
    _Feature2.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(false)).then(function (supportForeignObject) {
        return supportForeignObject ? function (cloner) {
            if (true) {
                logger.log('Document cloned, using foreignObject rendering');
            }

            return cloner.inlineFonts(ownerDocument).then(function () {
                return cloner.resourceLoader.ready();
            }).then(function () {
                var renderer = new _ForeignObjectRenderer2.default(cloner.documentElement);

                var defaultView = ownerDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = element.tagName === 'HTML' || element.tagName === 'BODY';

                var _ref = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(element, scrollX, scrollY),
                    width = _ref.width,
                    height = _ref.height,
                    left = _ref.left,
                    top = _ref.top;

                return renderer.render({
                    backgroundColor: backgroundColor,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height),
                    windowWidth: options.windowWidth,
                    windowHeight: options.windowHeight,
                    scrollX: options.scrollX,
                    scrollY: options.scrollY
                });
            });
        }(new _Clone.DocumentCloner(element, options, logger, true, renderElement)) : (0, _Clone.cloneWindow)(ownerDocument, windowBounds, element, options, logger, renderElement).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 3),
                container = _ref3[0],
                clonedElement = _ref3[1],
                resourceLoader = _ref3[2];

            if (true) {
                logger.log('Document cloned, using computed rendering');
            }

            var stack = (0, _NodeParser.NodeParser)(clonedElement, resourceLoader, logger);
            var clonedDocument = clonedElement.ownerDocument;

            if (backgroundColor === stack.container.style.background.backgroundColor) {
                stack.container.style.background.backgroundColor = _Color.TRANSPARENT;
            }

            return resourceLoader.ready().then(function (imageStore) {
                var fontMetrics = new _Font.FontMetrics(clonedDocument);
                if (true) {
                    logger.log('Starting renderer');
                }

                var defaultView = clonedDocument.defaultView;
                var scrollX = defaultView.pageXOffset;
                var scrollY = defaultView.pageYOffset;

                var isDocument = clonedElement.tagName === 'HTML' || clonedElement.tagName === 'BODY';

                var _ref4 = isDocument ? (0, _Bounds.parseDocumentSize)(ownerDocument) : (0, _Bounds.parseBounds)(clonedElement, scrollX, scrollY),
                    width = _ref4.width,
                    height = _ref4.height,
                    left = _ref4.left,
                    top = _ref4.top;

                var renderOptions = {
                    backgroundColor: backgroundColor,
                    fontMetrics: fontMetrics,
                    imageStore: imageStore,
                    logger: logger,
                    scale: options.scale,
                    x: typeof options.x === 'number' ? options.x : left,
                    y: typeof options.y === 'number' ? options.y : top,
                    width: typeof options.width === 'number' ? options.width : Math.ceil(width),
                    height: typeof options.height === 'number' ? options.height : Math.ceil(height)
                };

                if (Array.isArray(options.target)) {
                    return Promise.all(options.target.map(function (target) {
                        var renderer = new _Renderer2.default(target, renderOptions);
                        return renderer.render(stack);
                    }));
                } else {
                    var renderer = new _Renderer2.default(options.target, renderOptions);
                    var canvas = renderer.render(stack);
                    if (options.removeContainer === true) {
                        if (container.parentNode) {
                            container.parentNode.removeChild(container);
                        } else if (true) {
                            logger.log('Cannot detach cloned iframe as it is not in the DOM anymore');
                        }
                    }

                    return canvas;
                }
            });
        });
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js":
/*!******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/BezierCurve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

var _Vector = __webpack_require__(/*! ./Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lerp = function lerp(a, b, t) {
    return new _Vector2.default(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
};

var BezierCurve = function () {
    function BezierCurve(start, startControl, endControl, end) {
        _classCallCheck(this, BezierCurve);

        this.type = _Path.PATH.BEZIER_CURVE;
        this.start = start;
        this.startControl = startControl;
        this.endControl = endControl;
        this.end = end;
    }

    _createClass(BezierCurve, [{
        key: 'subdivide',
        value: function subdivide(t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        }
    }]);

    return BezierCurve;
}();

exports.default = BezierCurve;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Circle.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Circle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle(x, y, radius) {
    _classCallCheck(this, Circle);

    this.type = _Path.PATH.CIRCLE;
    this.x = x;
    this.y = y;
    this.radius = radius;
    if (true) {
        if (isNaN(x)) {
            console.error('Invalid x value given for Circle');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Circle');
        }
        if (isNaN(radius)) {
            console.error('Invalid radius value given for Circle');
        }
    }
};

exports.default = Circle;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Path.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Path.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PATH = exports.PATH = {
    VECTOR: 0,
    BEZIER_CURVE: 1,
    CIRCLE: 2
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Size.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Size.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function Size(width, height) {
    _classCallCheck(this, Size);

    this.width = width;
    this.height = height;
};

exports.default = Size;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/drawing/Vector.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/drawing/Vector.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Path = __webpack_require__(/*! ./Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.type = _Path.PATH.VECTOR;
    this.x = x;
    this.y = y;
    if (true) {
        if (isNaN(x)) {
            console.error('Invalid x value given for Vector');
        }
        if (isNaN(y)) {
            console.error('Invalid y value given for Vector');
        }
    }
};

exports.default = Vector;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CanvasRenderer = __webpack_require__(/*! ./renderer/CanvasRenderer */ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js");

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _Logger = __webpack_require__(/*! ./Logger */ "./node_modules/html2canvas/dist/npm/Logger.js");

var _Logger2 = _interopRequireDefault(_Logger);

var _Window = __webpack_require__(/*! ./Window */ "./node_modules/html2canvas/dist/npm/Window.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html2canvas = function html2canvas(element, conf) {
    var config = conf || {};
    var logger = new _Logger2.default(typeof config.logging === 'boolean' ? config.logging : true);
    logger.log('html2canvas ' + '$npm_package_version');

    if ("development" !== 'production' && typeof config.onrendered === 'function') {
        logger.error('onrendered option is deprecated, html2canvas returns a Promise with the canvas as the value');
    }

    var ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return Promise.reject('Provided element is not within a Document');
    }
    var defaultView = ownerDocument.defaultView;

    var defaultOptions = {
        async: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        logging: true,
        proxy: null,
        removeContainer: true,
        foreignObjectRendering: false,
        scale: defaultView.devicePixelRatio || 1,
        target: new _CanvasRenderer2.default(config.canvas),
        useCORS: false,
        windowWidth: defaultView.innerWidth,
        windowHeight: defaultView.innerHeight,
        scrollX: defaultView.pageXOffset,
        scrollY: defaultView.pageYOffset
    };

    var result = (0, _Window.renderElement)(element, _extends({}, defaultOptions, config), logger);

    if (true) {
        return result.catch(function (e) {
            logger.error(e);
            throw e;
        });
    }
    return result;
};

html2canvas.CanvasRenderer = _CanvasRenderer2.default;

module.exports = html2canvas;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/background.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/background.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBackgroundImage = exports.parseBackground = exports.calculateBackgroundRepeatPath = exports.calculateBackgroundPosition = exports.calculateBackgroungPositioningArea = exports.calculateBackgroungPaintingArea = exports.calculateGradientBackgroundSize = exports.calculateBackgroundSize = exports.BACKGROUND_ORIGIN = exports.BACKGROUND_CLIP = exports.BACKGROUND_SIZE = exports.BACKGROUND_REPEAT = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

var _Size = __webpack_require__(/*! ../drawing/Size */ "./node_modules/html2canvas/dist/npm/drawing/Size.js");

var _Size2 = _interopRequireDefault(_Size);

var _Vector = __webpack_require__(/*! ../drawing/Vector */ "./node_modules/html2canvas/dist/npm/drawing/Vector.js");

var _Vector2 = _interopRequireDefault(_Vector);

var _Bounds = __webpack_require__(/*! ../Bounds */ "./node_modules/html2canvas/dist/npm/Bounds.js");

var _padding = __webpack_require__(/*! ./padding */ "./node_modules/html2canvas/dist/npm/parsing/padding.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BACKGROUND_REPEAT = exports.BACKGROUND_REPEAT = {
    REPEAT: 0,
    NO_REPEAT: 1,
    REPEAT_X: 2,
    REPEAT_Y: 3
};

var BACKGROUND_SIZE = exports.BACKGROUND_SIZE = {
    AUTO: 0,
    CONTAIN: 1,
    COVER: 2,
    LENGTH: 3
};

var BACKGROUND_CLIP = exports.BACKGROUND_CLIP = {
    BORDER_BOX: 0,
    PADDING_BOX: 1,
    CONTENT_BOX: 2
};

var BACKGROUND_ORIGIN = exports.BACKGROUND_ORIGIN = BACKGROUND_CLIP;

var AUTO = 'auto';

var BackgroundSize = function BackgroundSize(size) {
    _classCallCheck(this, BackgroundSize);

    switch (size) {
        case 'contain':
            this.size = BACKGROUND_SIZE.CONTAIN;
            break;
        case 'cover':
            this.size = BACKGROUND_SIZE.COVER;
            break;
        case 'auto':
            this.size = BACKGROUND_SIZE.AUTO;
            break;
        default:
            this.value = new _Length2.default(size);
    }
};

var calculateBackgroundSize = exports.calculateBackgroundSize = function calculateBackgroundSize(backgroundImage, image, bounds) {
    var width = 0;
    var height = 0;
    var size = backgroundImage.size;
    if (size[0].size === BACKGROUND_SIZE.CONTAIN || size[0].size === BACKGROUND_SIZE.COVER) {
        var targetRatio = bounds.width / bounds.height;
        var currentRatio = image.width / image.height;
        return targetRatio < currentRatio !== (size[0].size === BACKGROUND_SIZE.COVER) ? new _Size2.default(bounds.width, bounds.width / currentRatio) : new _Size2.default(bounds.height * currentRatio, bounds.height);
    }

    if (size[0].value) {
        width = size[0].value.getAbsoluteValue(bounds.width);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO && size[1].size === BACKGROUND_SIZE.AUTO) {
        height = image.height;
    } else if (size[1].size === BACKGROUND_SIZE.AUTO) {
        height = width / image.width * image.height;
    } else if (size[1].value) {
        height = size[1].value.getAbsoluteValue(bounds.height);
    }

    if (size[0].size === BACKGROUND_SIZE.AUTO) {
        width = height / image.height * image.width;
    }

    return new _Size2.default(width, height);
};

var calculateGradientBackgroundSize = exports.calculateGradientBackgroundSize = function calculateGradientBackgroundSize(backgroundImage, bounds) {
    var size = backgroundImage.size;
    var width = size[0].value ? size[0].value.getAbsoluteValue(bounds.width) : bounds.width;
    var height = size[1].value ? size[1].value.getAbsoluteValue(bounds.height) : size[0].value ? width : bounds.height;

    return new _Size2.default(width, height);
};

var AUTO_SIZE = new BackgroundSize(AUTO);

var calculateBackgroungPaintingArea = exports.calculateBackgroungPaintingArea = function calculateBackgroungPaintingArea(curves, clip) {
    switch (clip) {
        case BACKGROUND_CLIP.BORDER_BOX:
            return (0, _Bounds.calculateBorderBoxPath)(curves);
        case BACKGROUND_CLIP.PADDING_BOX:
        default:
            return (0, _Bounds.calculatePaddingBoxPath)(curves);
    }
};

var calculateBackgroungPositioningArea = exports.calculateBackgroungPositioningArea = function calculateBackgroungPositioningArea(backgroundOrigin, bounds, padding, border) {
    var paddingBox = (0, _Bounds.calculatePaddingBox)(bounds, border);

    switch (backgroundOrigin) {
        case BACKGROUND_ORIGIN.BORDER_BOX:
            return bounds;
        case BACKGROUND_ORIGIN.CONTENT_BOX:
            var paddingLeft = padding[_padding.PADDING_SIDES.LEFT].getAbsoluteValue(bounds.width);
            var paddingRight = padding[_padding.PADDING_SIDES.RIGHT].getAbsoluteValue(bounds.width);
            var paddingTop = padding[_padding.PADDING_SIDES.TOP].getAbsoluteValue(bounds.width);
            var paddingBottom = padding[_padding.PADDING_SIDES.BOTTOM].getAbsoluteValue(bounds.width);
            return new _Bounds.Bounds(paddingBox.left + paddingLeft, paddingBox.top + paddingTop, paddingBox.width - paddingLeft - paddingRight, paddingBox.height - paddingTop - paddingBottom);
        case BACKGROUND_ORIGIN.PADDING_BOX:
        default:
            return paddingBox;
    }
};

var calculateBackgroundPosition = exports.calculateBackgroundPosition = function calculateBackgroundPosition(position, size, bounds) {
    return new _Vector2.default(position[0].getAbsoluteValue(bounds.width - size.width), position[1].getAbsoluteValue(bounds.height - size.height));
};

var calculateBackgroundRepeatPath = exports.calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(background, position, size, backgroundPositioningArea, bounds) {
    var repeat = background.repeat;
    switch (repeat) {
        case BACKGROUND_REPEAT.REPEAT_X:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(size.height + backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(bounds.left), Math.round(size.height + backgroundPositioningArea.top + position.y))];
        case BACKGROUND_REPEAT.REPEAT_Y:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(bounds.height + bounds.top))];
        case BACKGROUND_REPEAT.NO_REPEAT:
            return [new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x + size.width), Math.round(backgroundPositioningArea.top + position.y + size.height)), new _Vector2.default(Math.round(backgroundPositioningArea.left + position.x), Math.round(backgroundPositioningArea.top + position.y + size.height))];
        default:
            return [new _Vector2.default(Math.round(bounds.left), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.top)), new _Vector2.default(Math.round(bounds.left + bounds.width), Math.round(bounds.height + bounds.top)), new _Vector2.default(Math.round(bounds.left), Math.round(bounds.height + bounds.top))];
    }
};

var parseBackground = exports.parseBackground = function parseBackground(style, resourceLoader) {
    return {
        backgroundColor: new _Color2.default(style.backgroundColor),
        backgroundImage: parseBackgroundImages(style, resourceLoader),
        backgroundClip: parseBackgroundClip(style.backgroundClip),
        backgroundOrigin: parseBackgroundOrigin(style.backgroundOrigin)
    };
};

var parseBackgroundClip = function parseBackgroundClip(backgroundClip) {
    switch (backgroundClip) {
        case 'padding-box':
            return BACKGROUND_CLIP.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_CLIP.CONTENT_BOX;
    }
    return BACKGROUND_CLIP.BORDER_BOX;
};

var parseBackgroundOrigin = function parseBackgroundOrigin(backgroundOrigin) {
    switch (backgroundOrigin) {
        case 'padding-box':
            return BACKGROUND_ORIGIN.PADDING_BOX;
        case 'content-box':
            return BACKGROUND_ORIGIN.CONTENT_BOX;
    }
    return BACKGROUND_ORIGIN.BORDER_BOX;
};

var parseBackgroundRepeat = function parseBackgroundRepeat(backgroundRepeat) {
    switch (backgroundRepeat.trim()) {
        case 'no-repeat':
            return BACKGROUND_REPEAT.NO_REPEAT;
        case 'repeat-x':
        case 'repeat no-repeat':
            return BACKGROUND_REPEAT.REPEAT_X;
        case 'repeat-y':
        case 'no-repeat repeat':
            return BACKGROUND_REPEAT.REPEAT_Y;
        case 'repeat':
            return BACKGROUND_REPEAT.REPEAT;
    }

    if (true) {
        console.error('Invalid background-repeat value "' + backgroundRepeat + '"');
    }

    return BACKGROUND_REPEAT.REPEAT;
};

var parseBackgroundImages = function parseBackgroundImages(style, resourceLoader) {
    var sources = parseBackgroundImage(style.backgroundImage).map(function (backgroundImage) {
        if (backgroundImage.method === 'url') {
            var key = resourceLoader.loadImage(backgroundImage.args[0]);
            backgroundImage.args = key ? [key] : [];
        }
        return backgroundImage;
    });
    var positions = style.backgroundPosition.split(',');
    var repeats = style.backgroundRepeat.split(',');
    var sizes = style.backgroundSize.split(',');

    return sources.map(function (source, index) {
        var size = (sizes[index] || AUTO).trim().split(' ').map(parseBackgroundSize);
        var position = (positions[index] || AUTO).trim().split(' ').map(parseBackgoundPosition);

        return {
            source: source,
            repeat: parseBackgroundRepeat(typeof repeats[index] === 'string' ? repeats[index] : repeats[0]),
            size: size.length < 2 ? [size[0], AUTO_SIZE] : [size[0], size[1]],
            position: position.length < 2 ? [position[0], position[0]] : [position[0], position[1]]
        };
    });
};

var parseBackgroundSize = function parseBackgroundSize(size) {
    return size === 'auto' ? AUTO_SIZE : new BackgroundSize(size);
};

var parseBackgoundPosition = function parseBackgoundPosition(position) {
    switch (position) {
        case 'bottom':
        case 'right':
            return new _Length2.default('100%');
        case 'left':
        case 'top':
            return new _Length2.default('0%');
        case 'auto':
            return new _Length2.default('0');
    }
    return new _Length2.default(position);
};

var parseBackgroundImage = exports.parseBackgroundImage = function parseBackgroundImage(image) {
    var whitespace = /^\s$/;
    var results = [];

    var args = [];
    var method = '';
    var quote = null;
    var definition = '';
    var mode = 0;
    var numParen = 0;

    var appendResult = function appendResult() {
        var prefix = '';
        if (method) {
            if (definition.substr(0, 1) === '"') {
                definition = definition.substr(1, definition.length - 2);
            }

            if (definition) {
                args.push(definition.trim());
            }

            var prefix_i = method.indexOf('-', 1) + 1;
            if (method.substr(0, 1) === '-' && prefix_i > 0) {
                prefix = method.substr(0, prefix_i).toLowerCase();
                method = method.substr(prefix_i);
            }
            method = method.toLowerCase();
            if (method !== 'none') {
                results.push({
                    prefix: prefix,
                    method: method,
                    args: args
                });
            }
        }
        args = [];
        method = definition = '';
    };

    image.split('').forEach(function (c) {
        if (mode === 0 && whitespace.test(c)) {
            return;
        }
        switch (c) {
            case '"':
                if (!quote) {
                    quote = c;
                } else if (quote === c) {
                    quote = null;
                }
                break;
            case '(':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    mode = 1;
                    return;
                } else {
                    numParen++;
                }
                break;
            case ')':
                if (quote) {
                    break;
                } else if (mode === 1) {
                    if (numParen === 0) {
                        mode = 0;
                        appendResult();
                        return;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if (quote) {
                    break;
                } else if (mode === 0) {
                    appendResult();
                    return;
                } else if (mode === 1) {
                    if (numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition.trim());
                        definition = '';
                        return;
                    }
                }
                break;
        }

        if (mode === 0) {
            method += c;
        } else {
            definition += c;
        }
    });

    appendResult();
    return results;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/border.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/border.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorder = exports.BORDER_SIDES = exports.BORDER_STYLE = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BORDER_STYLE = exports.BORDER_STYLE = {
    NONE: 0,
    SOLID: 1
};

var BORDER_SIDES = exports.BORDER_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = Object.keys(BORDER_SIDES).map(function (s) {
    return s.toLowerCase();
});

var parseBorderStyle = function parseBorderStyle(style) {
    switch (style) {
        case 'none':
            return BORDER_STYLE.NONE;
    }
    return BORDER_STYLE.SOLID;
};

var parseBorder = exports.parseBorder = function parseBorder(style) {
    return SIDES.map(function (side) {
        var borderColor = new _Color2.default(style.getPropertyValue('border-' + side + '-color'));
        var borderStyle = parseBorderStyle(style.getPropertyValue('border-' + side + '-style'));
        var borderWidth = parseFloat(style.getPropertyValue('border-' + side + '-width'));
        return {
            borderColor: borderColor,
            borderStyle: borderStyle,
            borderWidth: isNaN(borderWidth) ? 0 : borderWidth
        };
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/borderRadius.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/borderRadius.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseBorderRadius = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

var parseBorderRadius = exports.parseBorderRadius = function parseBorderRadius(style) {
    return SIDES.map(function (side) {
        var value = style.getPropertyValue('border-' + side + '-radius');

        var _value$split$map = value.split(' ').map(_Length2.default.create),
            _value$split$map2 = _slicedToArray(_value$split$map, 2),
            horizontal = _value$split$map2[0],
            vertical = _value$split$map2[1];

        return typeof vertical === 'undefined' ? [horizontal, horizontal] : [horizontal, vertical];
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/display.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/display.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DISPLAY = exports.DISPLAY = {
    NONE: 1 << 0,
    BLOCK: 1 << 1,
    INLINE: 1 << 2,
    RUN_IN: 1 << 3,
    FLOW: 1 << 4,
    FLOW_ROOT: 1 << 5,
    TABLE: 1 << 6,
    FLEX: 1 << 7,
    GRID: 1 << 8,
    RUBY: 1 << 9,
    SUBGRID: 1 << 10,
    LIST_ITEM: 1 << 11,
    TABLE_ROW_GROUP: 1 << 12,
    TABLE_HEADER_GROUP: 1 << 13,
    TABLE_FOOTER_GROUP: 1 << 14,
    TABLE_ROW: 1 << 15,
    TABLE_CELL: 1 << 16,
    TABLE_COLUMN_GROUP: 1 << 17,
    TABLE_COLUMN: 1 << 18,
    TABLE_CAPTION: 1 << 19,
    RUBY_BASE: 1 << 20,
    RUBY_TEXT: 1 << 21,
    RUBY_BASE_CONTAINER: 1 << 22,
    RUBY_TEXT_CONTAINER: 1 << 23,
    CONTENTS: 1 << 24,
    INLINE_BLOCK: 1 << 25,
    INLINE_LIST_ITEM: 1 << 26,
    INLINE_TABLE: 1 << 27,
    INLINE_FLEX: 1 << 28,
    INLINE_GRID: 1 << 29
};

var parseDisplayValue = function parseDisplayValue(display) {
    switch (display) {
        case 'block':
            return DISPLAY.BLOCK;
        case 'inline':
            return DISPLAY.INLINE;
        case 'run-in':
            return DISPLAY.RUN_IN;
        case 'flow':
            return DISPLAY.FLOW;
        case 'flow-root':
            return DISPLAY.FLOW_ROOT;
        case 'table':
            return DISPLAY.TABLE;
        case 'flex':
            return DISPLAY.FLEX;
        case 'grid':
            return DISPLAY.GRID;
        case 'ruby':
            return DISPLAY.RUBY;
        case 'subgrid':
            return DISPLAY.SUBGRID;
        case 'list-item':
            return DISPLAY.LIST_ITEM;
        case 'table-row-group':
            return DISPLAY.TABLE_ROW_GROUP;
        case 'table-header-group':
            return DISPLAY.TABLE_HEADER_GROUP;
        case 'table-footer-group':
            return DISPLAY.TABLE_FOOTER_GROUP;
        case 'table-row':
            return DISPLAY.TABLE_ROW;
        case 'table-cell':
            return DISPLAY.TABLE_CELL;
        case 'table-column-group':
            return DISPLAY.TABLE_COLUMN_GROUP;
        case 'table-column':
            return DISPLAY.TABLE_COLUMN;
        case 'table-caption':
            return DISPLAY.TABLE_CAPTION;
        case 'ruby-base':
            return DISPLAY.RUBY_BASE;
        case 'ruby-text':
            return DISPLAY.RUBY_TEXT;
        case 'ruby-base-container':
            return DISPLAY.RUBY_BASE_CONTAINER;
        case 'ruby-text-container':
            return DISPLAY.RUBY_TEXT_CONTAINER;
        case 'contents':
            return DISPLAY.CONTENTS;
        case 'inline-block':
            return DISPLAY.INLINE_BLOCK;
        case 'inline-list-item':
            return DISPLAY.INLINE_LIST_ITEM;
        case 'inline-table':
            return DISPLAY.INLINE_TABLE;
        case 'inline-flex':
            return DISPLAY.INLINE_FLEX;
        case 'inline-grid':
            return DISPLAY.INLINE_GRID;
    }

    return DISPLAY.NONE;
};

var setDisplayBit = function setDisplayBit(bit, display) {
    return bit | parseDisplayValue(display);
};

var parseDisplay = exports.parseDisplay = function parseDisplay(display) {
    return display.split(' ').reduce(setDisplayBit, 0);
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/float.js":
/*!************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/float.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FLOAT = exports.FLOAT = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    INLINE_START: 3,
    INLINE_END: 4
};

var parseCSSFloat = exports.parseCSSFloat = function parseCSSFloat(float) {
    switch (float) {
        case 'left':
            return FLOAT.LEFT;
        case 'right':
            return FLOAT.RIGHT;
        case 'inline-start':
            return FLOAT.INLINE_START;
        case 'inline-end':
            return FLOAT.INLINE_END;
    }
    return FLOAT.NONE;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/font.js":
/*!***********************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/font.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var parseFontWeight = function parseFontWeight(weight) {
    switch (weight) {
        case 'normal':
            return 400;
        case 'bold':
            return 700;
    }

    var value = parseInt(weight, 10);
    return isNaN(value) ? 400 : value;
};

var parseFont = exports.parseFont = function parseFont(style) {
    var fontFamily = style.fontFamily;
    var fontSize = style.fontSize;
    var fontStyle = style.fontStyle;
    var fontVariant = style.fontVariant;
    var fontWeight = parseFontWeight(style.fontWeight);

    return {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontVariant: fontVariant,
        fontWeight: fontWeight
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/letterSpacing.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseLetterSpacing = exports.parseLetterSpacing = function parseLetterSpacing(letterSpacing) {
    if (letterSpacing === 'normal') {
        return 0;
    }
    var value = parseFloat(letterSpacing);
    return isNaN(value) ? 0 : value;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/lineBreak.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/lineBreak.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LINE_BREAK = exports.LINE_BREAK = {
    NORMAL: 'normal',
    STRICT: 'strict'
};

var parseLineBreak = exports.parseLineBreak = function parseLineBreak(wordBreak) {
    switch (wordBreak) {
        case 'strict':
            return LINE_BREAK.STRICT;
        case 'normal':
        default:
            return LINE_BREAK.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/listStyle.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/listStyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseListStyle = exports.parseListStyleType = exports.LIST_STYLE_TYPE = exports.LIST_STYLE_POSITION = undefined;

var _background = __webpack_require__(/*! ./background */ "./node_modules/html2canvas/dist/npm/parsing/background.js");

var LIST_STYLE_POSITION = exports.LIST_STYLE_POSITION = {
    INSIDE: 0,
    OUTSIDE: 1
};

var LIST_STYLE_TYPE = exports.LIST_STYLE_TYPE = {
    NONE: -1,
    DISC: 0,
    CIRCLE: 1,
    SQUARE: 2,
    DECIMAL: 3,
    CJK_DECIMAL: 4,
    DECIMAL_LEADING_ZERO: 5,
    LOWER_ROMAN: 6,
    UPPER_ROMAN: 7,
    LOWER_GREEK: 8,
    LOWER_ALPHA: 9,
    UPPER_ALPHA: 10,
    ARABIC_INDIC: 11,
    ARMENIAN: 12,
    BENGALI: 13,
    CAMBODIAN: 14,
    CJK_EARTHLY_BRANCH: 15,
    CJK_HEAVENLY_STEM: 16,
    CJK_IDEOGRAPHIC: 17,
    DEVANAGARI: 18,
    ETHIOPIC_NUMERIC: 19,
    GEORGIAN: 20,
    GUJARATI: 21,
    GURMUKHI: 22,
    HEBREW: 22,
    HIRAGANA: 23,
    HIRAGANA_IROHA: 24,
    JAPANESE_FORMAL: 25,
    JAPANESE_INFORMAL: 26,
    KANNADA: 27,
    KATAKANA: 28,
    KATAKANA_IROHA: 29,
    KHMER: 30,
    KOREAN_HANGUL_FORMAL: 31,
    KOREAN_HANJA_FORMAL: 32,
    KOREAN_HANJA_INFORMAL: 33,
    LAO: 34,
    LOWER_ARMENIAN: 35,
    MALAYALAM: 36,
    MONGOLIAN: 37,
    MYANMAR: 38,
    ORIYA: 39,
    PERSIAN: 40,
    SIMP_CHINESE_FORMAL: 41,
    SIMP_CHINESE_INFORMAL: 42,
    TAMIL: 43,
    TELUGU: 44,
    THAI: 45,
    TIBETAN: 46,
    TRAD_CHINESE_FORMAL: 47,
    TRAD_CHINESE_INFORMAL: 48,
    UPPER_ARMENIAN: 49,
    DISCLOSURE_OPEN: 50,
    DISCLOSURE_CLOSED: 51
};

var parseListStyleType = exports.parseListStyleType = function parseListStyleType(type) {
    switch (type) {
        case 'disc':
            return LIST_STYLE_TYPE.DISC;
        case 'circle':
            return LIST_STYLE_TYPE.CIRCLE;
        case 'square':
            return LIST_STYLE_TYPE.SQUARE;
        case 'decimal':
            return LIST_STYLE_TYPE.DECIMAL;
        case 'cjk-decimal':
            return LIST_STYLE_TYPE.CJK_DECIMAL;
        case 'decimal-leading-zero':
            return LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO;
        case 'lower-roman':
            return LIST_STYLE_TYPE.LOWER_ROMAN;
        case 'upper-roman':
            return LIST_STYLE_TYPE.UPPER_ROMAN;
        case 'lower-greek':
            return LIST_STYLE_TYPE.LOWER_GREEK;
        case 'lower-alpha':
            return LIST_STYLE_TYPE.LOWER_ALPHA;
        case 'upper-alpha':
            return LIST_STYLE_TYPE.UPPER_ALPHA;
        case 'arabic-indic':
            return LIST_STYLE_TYPE.ARABIC_INDIC;
        case 'armenian':
            return LIST_STYLE_TYPE.ARMENIAN;
        case 'bengali':
            return LIST_STYLE_TYPE.BENGALI;
        case 'cambodian':
            return LIST_STYLE_TYPE.CAMBODIAN;
        case 'cjk-earthly-branch':
            return LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH;
        case 'cjk-heavenly-stem':
            return LIST_STYLE_TYPE.CJK_HEAVENLY_STEM;
        case 'cjk-ideographic':
            return LIST_STYLE_TYPE.CJK_IDEOGRAPHIC;
        case 'devanagari':
            return LIST_STYLE_TYPE.DEVANAGARI;
        case 'ethiopic-numeric':
            return LIST_STYLE_TYPE.ETHIOPIC_NUMERIC;
        case 'georgian':
            return LIST_STYLE_TYPE.GEORGIAN;
        case 'gujarati':
            return LIST_STYLE_TYPE.GUJARATI;
        case 'gurmukhi':
            return LIST_STYLE_TYPE.GURMUKHI;
        case 'hebrew':
            return LIST_STYLE_TYPE.HEBREW;
        case 'hiragana':
            return LIST_STYLE_TYPE.HIRAGANA;
        case 'hiragana-iroha':
            return LIST_STYLE_TYPE.HIRAGANA_IROHA;
        case 'japanese-formal':
            return LIST_STYLE_TYPE.JAPANESE_FORMAL;
        case 'japanese-informal':
            return LIST_STYLE_TYPE.JAPANESE_INFORMAL;
        case 'kannada':
            return LIST_STYLE_TYPE.KANNADA;
        case 'katakana':
            return LIST_STYLE_TYPE.KATAKANA;
        case 'katakana-iroha':
            return LIST_STYLE_TYPE.KATAKANA_IROHA;
        case 'khmer':
            return LIST_STYLE_TYPE.KHMER;
        case 'korean-hangul-formal':
            return LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL;
        case 'korean-hanja-formal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL;
        case 'korean-hanja-informal':
            return LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL;
        case 'lao':
            return LIST_STYLE_TYPE.LAO;
        case 'lower-armenian':
            return LIST_STYLE_TYPE.LOWER_ARMENIAN;
        case 'malayalam':
            return LIST_STYLE_TYPE.MALAYALAM;
        case 'mongolian':
            return LIST_STYLE_TYPE.MONGOLIAN;
        case 'myanmar':
            return LIST_STYLE_TYPE.MYANMAR;
        case 'oriya':
            return LIST_STYLE_TYPE.ORIYA;
        case 'persian':
            return LIST_STYLE_TYPE.PERSIAN;
        case 'simp-chinese-formal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL;
        case 'simp-chinese-informal':
            return LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL;
        case 'tamil':
            return LIST_STYLE_TYPE.TAMIL;
        case 'telugu':
            return LIST_STYLE_TYPE.TELUGU;
        case 'thai':
            return LIST_STYLE_TYPE.THAI;
        case 'tibetan':
            return LIST_STYLE_TYPE.TIBETAN;
        case 'trad-chinese-formal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL;
        case 'trad-chinese-informal':
            return LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL;
        case 'upper-armenian':
            return LIST_STYLE_TYPE.UPPER_ARMENIAN;
        case 'disclosure-open':
            return LIST_STYLE_TYPE.DISCLOSURE_OPEN;
        case 'disclosure-closed':
            return LIST_STYLE_TYPE.DISCLOSURE_CLOSED;
        case 'none':
        default:
            return LIST_STYLE_TYPE.NONE;
    }
};

var parseListStyle = exports.parseListStyle = function parseListStyle(style) {
    var listStyleImage = (0, _background.parseBackgroundImage)(style.getPropertyValue('list-style-image'));
    return {
        listStyleType: parseListStyleType(style.getPropertyValue('list-style-type')),
        listStyleImage: listStyleImage.length ? listStyleImage[0] : null,
        listStylePosition: parseListStylePosition(style.getPropertyValue('list-style-position'))
    };
};

var parseListStylePosition = function parseListStylePosition(position) {
    switch (position) {
        case 'inside':
            return LIST_STYLE_POSITION.INSIDE;
        case 'outside':
        default:
            return LIST_STYLE_POSITION.OUTSIDE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/margin.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/margin.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseMargin = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIDES = ['top', 'right', 'bottom', 'left'];

var parseMargin = exports.parseMargin = function parseMargin(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('margin-' + side));
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/overflow.js":
/*!***************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/overflow.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW = exports.OVERFLOW = {
    VISIBLE: 0,
    HIDDEN: 1,
    SCROLL: 2,
    AUTO: 3
};

var parseOverflow = exports.parseOverflow = function parseOverflow(overflow) {
    switch (overflow) {
        case 'hidden':
            return OVERFLOW.HIDDEN;
        case 'scroll':
            return OVERFLOW.SCROLL;
        case 'auto':
            return OVERFLOW.AUTO;
        case 'visible':
        default:
            return OVERFLOW.VISIBLE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/overflowWrap.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var OVERFLOW_WRAP = exports.OVERFLOW_WRAP = {
    NORMAL: 0,
    BREAK_WORD: 1
};

var parseOverflowWrap = exports.parseOverflowWrap = function parseOverflowWrap(overflow) {
    switch (overflow) {
        case 'break-word':
            return OVERFLOW_WRAP.BREAK_WORD;
        case 'normal':
        default:
            return OVERFLOW_WRAP.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/padding.js":
/*!**************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/padding.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parsePadding = exports.PADDING_SIDES = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PADDING_SIDES = exports.PADDING_SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

var SIDES = ['top', 'right', 'bottom', 'left'];

var parsePadding = exports.parsePadding = function parsePadding(style) {
    return SIDES.map(function (side) {
        return new _Length2.default(style.getPropertyValue('padding-' + side));
    });
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/position.js":
/*!***************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/position.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var POSITION = exports.POSITION = {
    STATIC: 0,
    RELATIVE: 1,
    ABSOLUTE: 2,
    FIXED: 3,
    STICKY: 4
};

var parsePosition = exports.parsePosition = function parsePosition(position) {
    switch (position) {
        case 'relative':
            return POSITION.RELATIVE;
        case 'absolute':
            return POSITION.ABSOLUTE;
        case 'fixed':
            return POSITION.FIXED;
        case 'sticky':
            return POSITION.STICKY;
    }

    return POSITION.STATIC;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js":
/*!*********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textDecoration.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextDecoration = exports.TEXT_DECORATION_LINE = exports.TEXT_DECORATION = exports.TEXT_DECORATION_STYLE = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT_DECORATION_STYLE = exports.TEXT_DECORATION_STYLE = {
    SOLID: 0,
    DOUBLE: 1,
    DOTTED: 2,
    DASHED: 3,
    WAVY: 4
};

var TEXT_DECORATION = exports.TEXT_DECORATION = {
    NONE: null
};

var TEXT_DECORATION_LINE = exports.TEXT_DECORATION_LINE = {
    UNDERLINE: 1,
    OVERLINE: 2,
    LINE_THROUGH: 3,
    BLINK: 4
};

var parseLine = function parseLine(line) {
    switch (line) {
        case 'underline':
            return TEXT_DECORATION_LINE.UNDERLINE;
        case 'overline':
            return TEXT_DECORATION_LINE.OVERLINE;
        case 'line-through':
            return TEXT_DECORATION_LINE.LINE_THROUGH;
    }
    return TEXT_DECORATION_LINE.BLINK;
};

var parseTextDecorationLine = function parseTextDecorationLine(line) {
    if (line === 'none') {
        return null;
    }

    return line.split(' ').map(parseLine);
};

var parseTextDecorationStyle = function parseTextDecorationStyle(style) {
    switch (style) {
        case 'double':
            return TEXT_DECORATION_STYLE.DOUBLE;
        case 'dotted':
            return TEXT_DECORATION_STYLE.DOTTED;
        case 'dashed':
            return TEXT_DECORATION_STYLE.DASHED;
        case 'wavy':
            return TEXT_DECORATION_STYLE.WAVY;
    }
    return TEXT_DECORATION_STYLE.SOLID;
};

var parseTextDecoration = exports.parseTextDecoration = function parseTextDecoration(style) {
    var textDecorationLine = parseTextDecorationLine(style.textDecorationLine ? style.textDecorationLine : style.textDecoration);
    if (textDecorationLine === null) {
        return TEXT_DECORATION.NONE;
    }

    var textDecorationColor = style.textDecorationColor ? new _Color2.default(style.textDecorationColor) : null;
    var textDecorationStyle = parseTextDecorationStyle(style.textDecorationStyle);

    return {
        textDecorationLine: textDecorationLine,
        textDecorationColor: textDecorationColor,
        textDecorationStyle: textDecorationStyle
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textShadow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textShadow.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTextShadow = undefined;

var _Color = __webpack_require__(/*! ../Color */ "./node_modules/html2canvas/dist/npm/Color.js");

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NUMBER = /^([+-]|\d|\.)$/i;

var parseTextShadow = exports.parseTextShadow = function parseTextShadow(textShadow) {
    if (textShadow === 'none' || typeof textShadow !== 'string') {
        return null;
    }

    var currentValue = '';
    var isLength = false;
    var values = [];
    var shadows = [];
    var numParens = 0;
    var color = null;

    var appendValue = function appendValue() {
        if (currentValue.length) {
            if (isLength) {
                values.push(parseFloat(currentValue));
            } else {
                color = new _Color2.default(currentValue);
            }
        }
        isLength = false;
        currentValue = '';
    };

    var appendShadow = function appendShadow() {
        if (values.length && color !== null) {
            shadows.push({
                color: color,
                offsetX: values[0] || 0,
                offsetY: values[1] || 0,
                blur: values[2] || 0
            });
        }
        values.splice(0, values.length);
        color = null;
    };

    for (var i = 0; i < textShadow.length; i++) {
        var c = textShadow[i];
        switch (c) {
            case '(':
                currentValue += c;
                numParens++;
                break;
            case ')':
                currentValue += c;
                numParens--;
                break;
            case ',':
                if (numParens === 0) {
                    appendValue();
                    appendShadow();
                } else {
                    currentValue += c;
                }
                break;
            case ' ':
                if (numParens === 0) {
                    appendValue();
                } else {
                    currentValue += c;
                }
                break;
            default:
                if (currentValue.length === 0 && NUMBER.test(c)) {
                    isLength = true;
                }
                currentValue += c;
        }
    }

    appendValue();
    appendShadow();

    if (shadows.length === 0) {
        return null;
    }

    return shadows;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/textTransform.js":
/*!********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/textTransform.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEXT_TRANSFORM = exports.TEXT_TRANSFORM = {
    NONE: 0,
    LOWERCASE: 1,
    UPPERCASE: 2,
    CAPITALIZE: 3
};

var parseTextTransform = exports.parseTextTransform = function parseTextTransform(textTransform) {
    switch (textTransform) {
        case 'uppercase':
            return TEXT_TRANSFORM.UPPERCASE;
        case 'lowercase':
            return TEXT_TRANSFORM.LOWERCASE;
        case 'capitalize':
            return TEXT_TRANSFORM.CAPITALIZE;
    }

    return TEXT_TRANSFORM.NONE;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/transform.js":
/*!****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/transform.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseTransform = undefined;

var _Length = __webpack_require__(/*! ../Length */ "./node_modules/html2canvas/dist/npm/Length.js");

var _Length2 = _interopRequireDefault(_Length);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFloat = function toFloat(s) {
    return parseFloat(s.trim());
};

var MATRIX = /(matrix|matrix3d)\((.+)\)/;

var parseTransform = exports.parseTransform = function parseTransform(style) {
    var transform = parseTransformMatrix(style.transform || style.webkitTransform || style.mozTransform ||
    // $FlowFixMe
    style.msTransform ||
    // $FlowFixMe
    style.oTransform);
    if (transform === null) {
        return null;
    }

    return {
        transform: transform,
        transformOrigin: parseTransformOrigin(style.transformOrigin || style.webkitTransformOrigin || style.mozTransformOrigin ||
        // $FlowFixMe
        style.msTransformOrigin ||
        // $FlowFixMe
        style.oTransformOrigin)
    };
};

// $FlowFixMe
var parseTransformOrigin = function parseTransformOrigin(origin) {
    if (typeof origin !== 'string') {
        var v = new _Length2.default('0');
        return [v, v];
    }
    var values = origin.split(' ').map(_Length2.default.create);
    return [values[0], values[1]];
};

// $FlowFixMe
var parseTransformMatrix = function parseTransformMatrix(transform) {
    if (transform === 'none' || typeof transform !== 'string') {
        return null;
    }

    var match = transform.match(MATRIX);
    if (match) {
        if (match[1] === 'matrix') {
            var matrix = match[2].split(',').map(toFloat);
            return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]];
        } else {
            var matrix3d = match[2].split(',').map(toFloat);
            return [matrix3d[0], matrix3d[1], matrix3d[4], matrix3d[5], matrix3d[12], matrix3d[13]];
        }
    }
    return null;
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/visibility.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/visibility.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};

var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch (visibility) {
        case 'hidden':
            return VISIBILITY.HIDDEN;
        case 'collapse':
            return VISIBILITY.COLLAPSE;
        case 'visible':
        default:
            return VISIBILITY.VISIBLE;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/word-break.js":
/*!*****************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/word-break.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WORD_BREAK = exports.WORD_BREAK = {
    NORMAL: 'normal',
    BREAK_ALL: 'break-all',
    KEEP_ALL: 'keep-all'
};

var parseWordBreak = exports.parseWordBreak = function parseWordBreak(wordBreak) {
    switch (wordBreak) {
        case 'break-all':
            return WORD_BREAK.BREAK_ALL;
        case 'keep-all':
            return WORD_BREAK.KEEP_ALL;
        case 'normal':
        default:
            return WORD_BREAK.NORMAL;
    }
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/parsing/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/parsing/zIndex.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var parseZIndex = exports.parseZIndex = function parseZIndex(zIndex) {
    var auto = zIndex === 'auto';
    return {
        auto: auto,
        order: auto ? 0 : parseInt(zIndex, 10)
    };
};

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/renderer/CanvasRenderer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(/*! ../drawing/Path */ "./node_modules/html2canvas/dist/npm/drawing/Path.js");

var _textDecoration = __webpack_require__(/*! ../parsing/textDecoration */ "./node_modules/html2canvas/dist/npm/parsing/textDecoration.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addColorStops = function addColorStops(gradient, canvasGradient) {
    var maxStop = Math.max.apply(null, gradient.colorStops.map(function (colorStop) {
        return colorStop.stop;
    }));
    var f = 1 / Math.max(1, maxStop);
    gradient.colorStops.forEach(function (colorStop) {
        canvasGradient.addColorStop(f * colorStop.stop, colorStop.color.toString());
    });
};

var CanvasRenderer = function () {
    function CanvasRenderer(canvas) {
        _classCallCheck(this, CanvasRenderer);

        this.canvas = canvas ? canvas : document.createElement('canvas');
    }

    _createClass(CanvasRenderer, [{
        key: 'render',
        value: function render(options) {
            this.ctx = this.canvas.getContext('2d');
            this.options = options;
            this.canvas.width = Math.floor(options.width * options.scale);
            this.canvas.height = Math.floor(options.height * options.scale);
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            this.ctx.scale(this.options.scale, this.options.scale);
            this.ctx.translate(-options.x, -options.y);
            this.ctx.textBaseline = 'bottom';
            options.logger.log('Canvas renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + this.options.scale);
        }
    }, {
        key: 'clip',
        value: function clip(clipPaths, callback) {
            var _this = this;

            if (clipPaths.length) {
                this.ctx.save();
                clipPaths.forEach(function (path) {
                    _this.path(path);
                    _this.ctx.clip();
                });
            }

            callback();

            if (clipPaths.length) {
                this.ctx.restore();
            }
        }
    }, {
        key: 'drawImage',
        value: function drawImage(image, source, destination) {
            this.ctx.drawImage(image, source.left, source.top, source.width, source.height, destination.left, destination.top, destination.width, destination.height);
        }
    }, {
        key: 'drawShape',
        value: function drawShape(path, color) {
            this.path(path);
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'fill',
        value: function fill(color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fill();
        }
    }, {
        key: 'getTarget',
        value: function getTarget() {
            this.canvas.getContext('2d').setTransform(1, 0, 0, 1, 0, 0);
            return Promise.resolve(this.canvas);
        }
    }, {
        key: 'path',
        value: function path(_path) {
            var _this2 = this;

            this.ctx.beginPath();
            if (Array.isArray(_path)) {
                _path.forEach(function (point, index) {
                    var start = point.type === _Path.PATH.VECTOR ? point : point.start;
                    if (index === 0) {
                        _this2.ctx.moveTo(start.x, start.y);
                    } else {
                        _this2.ctx.lineTo(start.x, start.y);
                    }

                    if (point.type === _Path.PATH.BEZIER_CURVE) {
                        _this2.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                    }
                });
            } else {
                this.ctx.arc(_path.x + _path.radius, _path.y + _path.radius, _path.radius, 0, Math.PI * 2, true);
            }

            this.ctx.closePath();
        }
    }, {
        key: 'rectangle',
        value: function rectangle(x, y, width, height, color) {
            this.ctx.fillStyle = color.toString();
            this.ctx.fillRect(x, y, width, height);
        }
    }, {
        key: 'renderLinearGradient',
        value: function renderLinearGradient(bounds, gradient) {
            var linearGradient = this.ctx.createLinearGradient(bounds.left + gradient.direction.x1, bounds.top + gradient.direction.y1, bounds.left + gradient.direction.x0, bounds.top + gradient.direction.y0);

            addColorStops(gradient, linearGradient);
            this.ctx.fillStyle = linearGradient;
            this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
        }
    }, {
        key: 'renderRadialGradient',
        value: function renderRadialGradient(bounds, gradient) {
            var _this3 = this;

            var x = bounds.left + gradient.center.x;
            var y = bounds.top + gradient.center.y;

            var radialGradient = this.ctx.createRadialGradient(x, y, 0, x, y, gradient.radius.x);
            if (!radialGradient) {
                return;
            }

            addColorStops(gradient, radialGradient);
            this.ctx.fillStyle = radialGradient;

            if (gradient.radius.x !== gradient.radius.y) {
                // transforms for elliptical radial gradient
                var midX = bounds.left + 0.5 * bounds.width;
                var midY = bounds.top + 0.5 * bounds.height;
                var f = gradient.radius.y / gradient.radius.x;
                var invF = 1 / f;

                this.transform(midX, midY, [1, 0, 0, f, 0, 0], function () {
                    return _this3.ctx.fillRect(bounds.left, invF * (bounds.top - midY) + midY, bounds.width, bounds.height * invF);
                });
            } else {
                this.ctx.fillRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
        }
    }, {
        key: 'renderRepeat',
        value: function renderRepeat(path, image, imageSize, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(image, imageSize), 'repeat');
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        }
    }, {
        key: 'renderTextNode',
        value: function renderTextNode(textBounds, color, font, textDecoration, textShadows) {
            var _this4 = this;

            this.ctx.font = [font.fontStyle, font.fontVariant, font.fontWeight, font.fontSize, font.fontFamily].join(' ');

            textBounds.forEach(function (text) {
                _this4.ctx.fillStyle = color.toString();
                if (textShadows && text.text.trim().length) {
                    textShadows.slice(0).reverse().forEach(function (textShadow) {
                        _this4.ctx.shadowColor = textShadow.color.toString();
                        _this4.ctx.shadowOffsetX = textShadow.offsetX * _this4.options.scale;
                        _this4.ctx.shadowOffsetY = textShadow.offsetY * _this4.options.scale;
                        _this4.ctx.shadowBlur = textShadow.blur;

                        _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                    });
                } else {
                    _this4.ctx.fillText(text.text, text.bounds.left, text.bounds.top + text.bounds.height);
                }

                if (textDecoration !== null) {
                    var textDecorationColor = textDecoration.textDecorationColor || color;
                    textDecoration.textDecorationLine.forEach(function (textDecorationLine) {
                        switch (textDecorationLine) {
                            case _textDecoration.TEXT_DECORATION_LINE.UNDERLINE:
                                // Draws a line at the baseline of the font
                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                // need to take that into account both in position and size
                                var _options$fontMetrics$ = _this4.options.fontMetrics.getMetrics(font),
                                    baseline = _options$fontMetrics$.baseline;

                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.OVERLINE:
                                _this4.rectangle(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1, textDecorationColor);
                                break;
                            case _textDecoration.TEXT_DECORATION_LINE.LINE_THROUGH:
                                // TODO try and find exact position for line-through
                                var _options$fontMetrics$2 = _this4.options.fontMetrics.getMetrics(font),
                                    middle = _options$fontMetrics$2.middle;

                                _this4.rectangle(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1, textDecorationColor);
                                break;
                        }
                    });
                }
            });
        }
    }, {
        key: 'resizeImage',
        value: function resizeImage(image, size) {
            if (image.width === size.width && image.height === size.height) {
                return image;
            }

            var canvas = this.canvas.ownerDocument.createElement('canvas');
            canvas.width = size.width;
            canvas.height = size.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, size.width, size.height);
            return canvas;
        }
    }, {
        key: 'setOpacity',
        value: function setOpacity(opacity) {
            this.ctx.globalAlpha = opacity;
        }
    }, {
        key: 'transform',
        value: function transform(offsetX, offsetY, matrix, callback) {
            this.ctx.save();
            this.ctx.translate(offsetX, offsetY);
            this.ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            this.ctx.translate(-offsetX, -offsetY);

            callback();

            this.ctx.restore();
        }
    }]);

    return CanvasRenderer;
}();

exports.default = CanvasRenderer;

/***/ }),

/***/ "./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/html2canvas/dist/npm/renderer/ForeignObjectRenderer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ForeignObjectRenderer = function () {
    function ForeignObjectRenderer(element) {
        _classCallCheck(this, ForeignObjectRenderer);

        this.element = element;
    }

    _createClass(ForeignObjectRenderer, [{
        key: 'render',
        value: function render(options) {
            var _this = this;

            this.options = options;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = Math.floor(options.width) * options.scale;
            this.canvas.height = Math.floor(options.height) * options.scale;
            this.canvas.style.width = options.width + 'px';
            this.canvas.style.height = options.height + 'px';

            options.logger.log('ForeignObject renderer initialized (' + options.width + 'x' + options.height + ' at ' + options.x + ',' + options.y + ') with scale ' + options.scale);
            var svg = createForeignObjectSVG(Math.max(options.windowWidth, options.width) * options.scale, Math.max(options.windowHeight, options.height) * options.scale, options.scrollX * options.scale, options.scrollY * options.scale, this.element);

            return loadSerializedSVG(svg).then(function (img) {
                if (options.backgroundColor) {
                    _this.ctx.fillStyle = options.backgroundColor.toString();
                    _this.ctx.fillRect(0, 0, options.width * options.scale, options.height * options.scale);
                }

                _this.ctx.drawImage(img, -options.x * options.scale, -options.y * options.scale);
                return _this.canvas;
            });
        }
    }]);

    return ForeignObjectRenderer;
}();

exports.default = ForeignObjectRenderer;
var createForeignObjectSVG = exports.createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
    var xmlns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(xmlns, 'svg');
    var foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttributeNS(null, 'width', width);
    svg.setAttributeNS(null, 'height', height);

    foreignObject.setAttributeNS(null, 'width', '100%');
    foreignObject.setAttributeNS(null, 'height', '100%');
    foreignObject.setAttributeNS(null, 'x', x);
    foreignObject.setAttributeNS(null, 'y', y);
    foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);

    foreignObject.appendChild(node);

    return svg;
};

var loadSerializedSVG = exports.loadSerializedSVG = function loadSerializedSVG(svg) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            return resolve(img);
        };
        img.onerror = reject;

        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
    });
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pdfmake_1 = __webpack_require__(/*! pdfmake/build/pdfmake */ "pdfmake/build/pdfmake");
var USEFULL_STYLE = [
    "background",
    "background-clip",
    "background-color",
    "background-image",
    "url",
    "linear-gradient",
    "radial-gradient",
    "background-origin",
    "background-position",
    "background-size",
    "border",
    "border-color",
    "border-radius",
    "border-style",
    "border-width",
    "bottom",
    "box-sizing",
    "content",
    "color",
    "display",
    "flex",
    "float",
    "font",
    "font-family",
    "font-size",
    "font-style",
    "font-variant",
    "font-weight",
    "height",
    "left",
    "letter-spacing",
    "line-break",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "max-height",
    "max-width",
    "min-height",
    "min-width",
    "opacity",
    "overflow",
    "overflow-wrap",
    "padding",
    "position",
    "right",
    "text-align",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-shadow",
    "text-transform",
    "top",
    "transform",
    "visibility",
    "white-space",
    "width",
    "word-break",
    "word-spacing",
    "word-wrap",
    "z-index",
    "fill",
    "fill-opacity",
    "text-anchor",
    "stroke",
    "stroke-opacity",
    "stroke-dasharray",
    "shape-rendering",
    "stroke-width",
    "shape-rendering"
];
var NOT_NONE = function (value) {
    if (value == "none")
        return false;
    return true;
};
var HACK_FOR_STYLE = {
    "transform": NOT_NONE,
    "filter": NOT_NONE
};
var Abstract4PDF = (function () {
    function Abstract4PDF(docDefinition) {
        this.mDocDefinition = docDefinition;
    }
    Abstract4PDF.prototype.DPI = function () {
        if (window.devicePixelRatio && window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
        return 1;
    };
    Abstract4PDF.prototype.getComputedStyleString = function (selector) {
        var box = window.getComputedStyle(selector);
        var style = "";
        Array.prototype.forEach.call(box, function (name) {
            var value = box.getPropertyValue(name);
            if (USEFULL_STYLE.indexOf(name) != -1 && (!HACK_FOR_STYLE[name] || (HACK_FOR_STYLE[name] && HACK_FOR_STYLE[name](value))))
                style += name + ":" + value + ";";
        });
        return style;
    };
    Abstract4PDF.prototype.appendComputedStyle = function (selector, recursive) {
        if (recursive === void 0) { recursive = false; }
        var _this = this;
        if (selector instanceof Element) {
            if (selector instanceof Element) {
                selector.setAttribute('style', this.getComputedStyleString(selector));
                if (recursive && selector.childNodes) {
                    _this.appendComputedStyle(selector.childNodes, recursive);
                }
            }
        }
        if (selector instanceof NodeList) {
            Array.prototype.map.call(selector, function (elm) {
                _this.appendComputedStyle(elm, recursive);
            });
        }
    };
    Abstract4PDF.prototype.elm2img = function (selector, lable, scale, logging) {
        if (lable === void 0) { lable = null; }
        if (scale === void 0) { scale = 1; }
        if (logging === void 0) { logging = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof selector == 'string') {
                            selector = document.getElementById(selector);
                        }
                        if (logging)
                            console.debug('elm2img:', selector.tagName, selector.id, selector.className);
                        this.appendComputedStyle(selector, true);
                        scale *= this.DPI() * (parseFloat(selector.dataset.pdf_scale) || 1);
                        return [4, Promise.resolve().then(function () { return __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js"); }).then(function (html2canvas) {
                                return html2canvas(selector, {
                                    scale: scale,
                                    logging: logging,
                                    useCORS: true
                                });
                            }).then(function (_canvas) {
                                var ctx = _canvas.getContext('2d');
                                ctx.imageSmoothingEnabled = false;
                                if (lable) {
                                    var pair = {};
                                    pair[lable] = _canvas.toDataURL();
                                    ctx.fillText(lable, 10, 10);
                                    return pair;
                                }
                                return _canvas.toDataURL();
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Abstract4PDF.prototype.build = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var imgs, doc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mDocDefinition = Object.assign({
                            filename: "Untitled.pdf",
                            pageSize: "A4",
                            content: this.mDocDefinition.content || [
                                {
                                    image: 'placeholder',
                                    style: 'section'
                                }
                            ],
                            images: Object.assign(this.mDocDefinition.images, {
                                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVQ4Ee1VPUsDQRB9s3dBRCRNQvCjkDQW/hJ/gb9AOwWDoIXFgYXYXGP+hYW1/gIr7WzsE8VGxZBcwt04dznCJWw2twtWutXMmzdvlrd7t4SZVbvi1ZihZuCFqT9A/B7Qd5FI44RpPcQpE1oC1IsEq5jRBeGyc0zXaV8mvhbyOREurIRMZMZhp0VthYB9mXBi4jrUztIev1bNbKg6CMxvIWwg5GWVDOHNZ7lX6l/wrG+Fzbh/ca1bf9QWBhKtHznobgtjKF92ZBL3TUWpRbK7LhiVCY8kY3xK/iTiexNcEywSXxKBrfHvrdBN2JRsp4BoQ3dbtHLT4K+JqxWw8vr4YDaf+vR+SmXRWw99lT9N96VaypIYtwgoyWyJRtiX3T+X7TXxROcxGeAo5chlyNcBVxrb2JVpTUHsz4IQi/DL6wPucENxqvoDx69PXP8OKn4AAAAASUVORK5CYII="
                            }),
                            styles: Object.assign(this.mDocDefinition.styles, {
                                section: {
                                    margin: [0, 20, 0, 0]
                                }
                            })
                        }, this.mDocDefinition);
                        return [4, Promise.all(ids.map(function (id) {
                                return (_this.mDocDefinition.onprogressupdate && _this.mDocDefinition.onprogressupdate("resource", id),
                                    _this.elm2img(id, id, 2, true));
                            }))];
                    case 1:
                        imgs = _a.sent();
                        doc = Object.assign(this.mDocDefinition, {
                            images: Object.assign(this.mDocDefinition.images, Object.assign.apply(null, imgs))
                        });
                        this.mDocDefinition = doc;
                        return [2, this];
                }
            });
        });
    };
    Abstract4PDF.prototype._createPdf = function () {
        if (!this.mDocDefinition.filename.endsWith(".pdf")) {
            this.mDocDefinition.filename += ".pdf";
        }
        return pdfmake_1.createPdf(this.mDocDefinition);
    };
    Abstract4PDF.prototype.download = function (cb) {
        this._createPdf().download(this.mDocDefinition.filename, cb);
    };
    Abstract4PDF.prototype.open = function () {
        this._createPdf().open();
    };
    Abstract4PDF.pageSize = {
        width: 595.28,
        height: 841.89
    };
    Abstract4PDF.pageMargins = 40;
    Abstract4PDF.contentSize = {
        width: Abstract4PDF.pageSize.width - Abstract4PDF.pageMargins * 2,
        height: Abstract4PDF.pageSize.height - Abstract4PDF.pageMargins * 2
    };
    return Abstract4PDF;
}());
var _global = (window);
_global.Abstract4PDF = Abstract4PDF;


/***/ }),

/***/ "pdfmake/build/pdfmake":
/*!**************************!*\
  !*** external "pdfMake" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pdfmake_build_pdfmake__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvY3NzLWxpbmUtYnJlYWsvZGlzdC9MaW5lQnJlYWsuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2Nzcy1saW5lLWJyZWFrL2Rpc3QvVHJpZS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvY3NzLWxpbmUtYnJlYWsvZGlzdC9VdGlsLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9jc3MtbGluZS1icmVhay9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9jc3MtbGluZS1icmVhay9kaXN0L2xpbmVicmVhay10cmllLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9BbmdsZS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vQm91bmRzLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9DbG9uZS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vQ29sb3IuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0ZvbnQuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0dyYWRpZW50LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9JbnB1dC5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTGVuZ3RoLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTG9nZ2VyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Ob2RlQ29udGFpbmVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Ob2RlUGFyc2VyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Qcm94eS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vUHNldWRvTm9kZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL1JlbmRlcmVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9SZXNvdXJjZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vU3RhY2tpbmdDb250ZXh0LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9UZXh0Qm91bmRzLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9UZXh0Q29udGFpbmVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Vbmljb2RlLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9VdGlsLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2RyYXdpbmcvQmV6aWVyQ3VydmUuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2RyYXdpbmcvQ2lyY2xlLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9kcmF3aW5nL1BhdGguanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2RyYXdpbmcvU2l6ZS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vZHJhd2luZy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2luZGV4LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvYm9yZGVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2JvcmRlclJhZGl1cy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9kaXNwbGF5LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2Zsb2F0LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2ZvbnQuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvbGV0dGVyU3BhY2luZy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9saW5lQnJlYWsuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvbGlzdFN0eWxlLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL21hcmdpbi5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9vdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9vdmVyZmxvd1dyYXAuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvcGFkZGluZy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy90ZXh0RGVjb3JhdGlvbi5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy90ZXh0U2hhZG93LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3RleHRUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3Zpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvd29yZC1icmVhay5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy96SW5kZXguanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3JlbmRlcmVyL0NhbnZhc1JlbmRlcmVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9yZW5kZXJlci9Gb3JlaWduT2JqZWN0UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi9leHRlcm5hbCBcInBkZk1ha2VcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsaURBQXlDLGdDQUFnQztBQUN6RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EseUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBd0Isa0NBQWtDO0FBQzFELGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFD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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRTs7Ozs7Ozs7Ozs7O0FDdFBBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLGVBQWU7QUFDaEY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFLGVBQWU7QUFDL0U7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxlQUFlO0FBQ3pGO0FBQ0EsS0FBSztB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsRTs7Ozs7Ozs7Ozs7O0FDOWJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDekhBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDOUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsdUJBQXVCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkI7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDaFdBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxFOzs7Ozs7Ozs7Ozs7QUNoREE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxrQ0FBa0MsaUNBQWlDLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLHlDQUF5QyxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLDBCQUEwQixZQUFZLEVBQUUsMkNBQTJDLDhCQUE4QixFQUFFLE9BQU8sNkVBQTZFLEVBQUUsR0FBRyxFQUFFOztBQUVycEI7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxFOzs7Ozs7Ozs7Ozs7QUM1QkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM3R0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7O0FDblFBLG1FIiwiZmlsZSI6ImFic3RyYWN0NHBkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInBkZk1ha2VcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicGRmTWFrZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhYnN0cmFjdDRwZGZcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJwZGZNYWtlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhYnN0cmFjdDRwZGZcIl0gPSBmYWN0b3J5KHJvb3RbXCJwZGZNYWtlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wZGZtYWtlX2J1aWxkX3BkZm1ha2VfXykge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJ2ZW5kb3JzfmNhbnZnXCI6XCJ2ZW5kb3JzfmNhbnZnXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblxuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3N0YXRpYy9hYnN0cmFjdDRwZGYvMC4xLjAvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucGFic3RyYWN0NHBkZlwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucGFic3RyYWN0NHBkZlwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpbmVCcmVha2VyID0gZXhwb3J0cy5pbmxpbmVCcmVha09wcG9ydHVuaXRpZXMgPSBleHBvcnRzLmxpbmVCcmVha0F0SW5kZXggPSBleHBvcnRzLmNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMgPSBleHBvcnRzLlVuaWNvZGVUcmllID0gZXhwb3J0cy5CUkVBS19BTExPV0VEID0gZXhwb3J0cy5CUkVBS19OT1RfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfTUFOREFUT1JZID0gZXhwb3J0cy5jbGFzc2VzID0gZXhwb3J0cy5MRVRURVJfTlVNQkVSX01PRElGSUVSID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfVHJpZSA9IHJlcXVpcmUoJy4vVHJpZScpO1xuXG52YXIgX2xpbmVicmVha1RyaWUgPSByZXF1aXJlKCcuL2xpbmVicmVhay10cmllJyk7XG5cbnZhciBfbGluZWJyZWFrVHJpZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYnJlYWtUcmllKTtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTEVUVEVSX05VTUJFUl9NT0RJRklFUiA9IGV4cG9ydHMuTEVUVEVSX05VTUJFUl9NT0RJRklFUiA9IDUwO1xuXG4vLyBOb24tdGFpbG9yYWJsZSBMaW5lIEJyZWFraW5nIENsYXNzZXNcbnZhciBCSyA9IDE7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKVxudmFyIENSID0gMjsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpLCBleGNlcHQgYmV0d2VlbiBDUiBhbmQgTEZcbnZhciBMRiA9IDM7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKVxudmFyIENNID0gNDsgLy8gIFByb2hpYml0IGEgbGluZSBicmVhayBiZXR3ZWVuIHRoZSBjaGFyYWN0ZXIgYW5kIHRoZSBwcmVjZWRpbmcgY2hhcmFjdGVyXG52YXIgTkwgPSA1OyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlcilcbnZhciBTRyA9IDY7IC8vICBEbyBub3Qgb2NjdXIgaW4gd2VsbC1mb3JtZWQgdGV4dFxudmFyIFdKID0gNzsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZSBhbmQgYWZ0ZXJcbnZhciBaVyA9IDg7IC8vICBQcm92aWRlIGEgYnJlYWsgb3Bwb3J0dW5pdHlcbnZhciBHTCA9IDk7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmUgYW5kIGFmdGVyXG52YXIgU1AgPSAxMDsgLy8gRW5hYmxlIGluZGlyZWN0IGxpbmUgYnJlYWtzXG52YXIgWldKID0gMTE7IC8vIFByb2hpYml0IGxpbmUgYnJlYWtzIHdpdGhpbiBqb2luZXIgc2VxdWVuY2VzXG4vLyBCcmVhayBPcHBvcnR1bml0aWVzXG52YXIgQjIgPSAxMjsgLy8gIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGNoYXJhY3RlclxudmFyIEJBID0gMTM7IC8vICBHZW5lcmFsbHkgcHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYWZ0ZXIgdGhlIGNoYXJhY3RlclxudmFyIEJCID0gMTQ7IC8vICBHZW5lcmFsbHkgcHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYmVmb3JlIHRoZSBjaGFyYWN0ZXJcbnZhciBIWSA9IDE1OyAvLyAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYWZ0ZXIgdGhlIGNoYXJhY3RlciwgZXhjZXB0IGluIG51bWVyaWMgY29udGV4dFxudmFyIENCID0gMTY7IC8vICAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgY29udGluZ2VudCBvbiBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4vLyBDaGFyYWN0ZXJzIFByb2hpYml0aW5nIENlcnRhaW4gQnJlYWtzXG52YXIgQ0wgPSAxNzsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIENQID0gMTg7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBFWCA9IDE5OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlXG52YXIgSU4gPSAyMDsgLy8gIEFsbG93IG9ubHkgaW5kaXJlY3QgbGluZSBicmVha3MgYmV0d2VlbiBwYWlyc1xudmFyIE5TID0gMjE7IC8vICBBbGxvdyBvbmx5IGluZGlyZWN0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIE9QID0gMjI7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBhZnRlclxudmFyIFFVID0gMjM7IC8vICBBY3QgbGlrZSB0aGV5IGFyZSBib3RoIG9wZW5pbmcgYW5kIGNsb3Npbmdcbi8vIE51bWVyaWMgQ29udGV4dFxudmFyIElTID0gMjQ7IC8vICBQcmV2ZW50IGJyZWFrcyBhZnRlciBhbnkgYW5kIGJlZm9yZSBudW1lcmljXG52YXIgTlUgPSAyNTsgLy8gIEZvcm0gbnVtZXJpYyBleHByZXNzaW9ucyBmb3IgbGluZSBicmVha2luZyBwdXJwb3Nlc1xudmFyIFBPID0gMjY7IC8vICBEbyBub3QgYnJlYWsgZm9sbG93aW5nIGEgbnVtZXJpYyBleHByZXNzaW9uXG52YXIgUFIgPSAyNzsgLy8gIERvIG5vdCBicmVhayBpbiBmcm9udCBvZiBhIG51bWVyaWMgZXhwcmVzc2lvblxudmFyIFNZID0gMjg7IC8vICBQcmV2ZW50IGEgYnJlYWsgYmVmb3JlOyBhbmQgYWxsb3cgYSBicmVhayBhZnRlclxuLy8gT3RoZXIgQ2hhcmFjdGVyc1xudmFyIEFJID0gMjk7IC8vICBBY3QgbGlrZSBBTCB3aGVuIHRoZSByZXNvbHZlZEVBVyBpcyBOOyBvdGhlcndpc2U7IGFjdCBhcyBJRFxudmFyIEFMID0gMzA7IC8vICBBcmUgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIG9yIHN5bWJvbHMgdGhhdCBhcmUgdXNlZCB3aXRoIGFscGhhYmV0aWMgY2hhcmFjdGVyc1xudmFyIENKID0gMzE7IC8vICBUcmVhdCBhcyBOUyBvciBJRCBmb3Igc3RyaWN0IG9yIG5vcm1hbCBicmVha2luZy5cbnZhciBFQiA9IDMyOyAvLyAgRG8gbm90IGJyZWFrIGZyb20gZm9sbG93aW5nIEVtb2ppIE1vZGlmaWVyXG52YXIgRU0gPSAzMzsgLy8gIERvIG5vdCBicmVhayBmcm9tIHByZWNlZGluZyBFbW9qaSBCYXNlXG52YXIgSDIgPSAzNDsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEgzID0gMzU7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBITCA9IDM2OyAvLyAgRG8gbm90IGJyZWFrIGFyb3VuZCBhIGZvbGxvd2luZyBoeXBoZW47IG90aGVyd2lzZSBhY3QgYXMgQWxwaGFiZXRpY1xudmFyIElEID0gMzc7IC8vICBCcmVhayBiZWZvcmUgb3IgYWZ0ZXI7IGV4Y2VwdCBpbiBzb21lIG51bWVyaWMgY29udGV4dFxudmFyIEpMID0gMzg7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBKViA9IDM5OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSlQgPSA0MDsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIFJJID0gNDE7IC8vICBLZWVwIHBhaXJzIHRvZ2V0aGVyLiBGb3IgcGFpcnM7IGJyZWFrIGJlZm9yZSBhbmQgYWZ0ZXIgb3RoZXIgY2xhc3Nlc1xudmFyIFNBID0gNDI7IC8vICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBjb250aW5nZW50IG9uIGFkZGl0aW9uYWwsIGxhbmd1YWdlLXNwZWNpZmljIGNvbnRleHQgYW5hbHlzaXNcbnZhciBYWCA9IDQzOyAvLyAgSGF2ZSBhcyB5ZXQgdW5rbm93biBsaW5lIGJyZWFraW5nIGJlaGF2aW9yIG9yIHVuYXNzaWduZWQgY29kZSBwb3NpdGlvbnNcblxudmFyIGNsYXNzZXMgPSBleHBvcnRzLmNsYXNzZXMgPSB7XG4gICAgQks6IEJLLFxuICAgIENSOiBDUixcbiAgICBMRjogTEYsXG4gICAgQ006IENNLFxuICAgIE5MOiBOTCxcbiAgICBTRzogU0csXG4gICAgV0o6IFdKLFxuICAgIFpXOiBaVyxcbiAgICBHTDogR0wsXG4gICAgU1A6IFNQLFxuICAgIFpXSjogWldKLFxuICAgIEIyOiBCMixcbiAgICBCQTogQkEsXG4gICAgQkI6IEJCLFxuICAgIEhZOiBIWSxcbiAgICBDQjogQ0IsXG4gICAgQ0w6IENMLFxuICAgIENQOiBDUCxcbiAgICBFWDogRVgsXG4gICAgSU46IElOLFxuICAgIE5TOiBOUyxcbiAgICBPUDogT1AsXG4gICAgUVU6IFFVLFxuICAgIElTOiBJUyxcbiAgICBOVTogTlUsXG4gICAgUE86IFBPLFxuICAgIFBSOiBQUixcbiAgICBTWTogU1ksXG4gICAgQUk6IEFJLFxuICAgIEFMOiBBTCxcbiAgICBDSjogQ0osXG4gICAgRUI6IEVCLFxuICAgIEVNOiBFTSxcbiAgICBIMjogSDIsXG4gICAgSDM6IEgzLFxuICAgIEhMOiBITCxcbiAgICBJRDogSUQsXG4gICAgSkw6IEpMLFxuICAgIEpWOiBKVixcbiAgICBKVDogSlQsXG4gICAgUkk6IFJJLFxuICAgIFNBOiBTQSxcbiAgICBYWDogWFhcbn07XG5cbnZhciBCUkVBS19NQU5EQVRPUlkgPSBleHBvcnRzLkJSRUFLX01BTkRBVE9SWSA9ICchJztcbnZhciBCUkVBS19OT1RfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfTk9UX0FMTE9XRUQgPSAnw5cnO1xudmFyIEJSRUFLX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX0FMTE9XRUQgPSAnw7cnO1xudmFyIFVuaWNvZGVUcmllID0gZXhwb3J0cy5Vbmljb2RlVHJpZSA9ICgwLCBfVHJpZS5jcmVhdGVUcmllRnJvbUJhc2U2NCkoX2xpbmVicmVha1RyaWUyLmRlZmF1bHQpO1xuXG52YXIgQUxQSEFCRVRJQ1MgPSBbQUwsIEhMXTtcbnZhciBIQVJEX0xJTkVfQlJFQUtTID0gW0JLLCBDUiwgTEYsIE5MXTtcbnZhciBTUEFDRSA9IFtTUCwgWlddO1xudmFyIFBSRUZJWF9QT1NURklYID0gW1BSLCBQT107XG52YXIgTElORV9CUkVBS1MgPSBIQVJEX0xJTkVfQlJFQUtTLmNvbmNhdChTUEFDRSk7XG52YXIgS09SRUFOX1NZTExBQkxFX0JMT0NLID0gW0pMLCBKViwgSlQsIEgyLCBIM107XG52YXIgSFlQSEVOID0gW0hZLCBCQV07XG5cbnZhciBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzID0gZXhwb3J0cy5jb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzID0gZnVuY3Rpb24gY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3Nlcyhjb2RlUG9pbnRzKSB7XG4gICAgdmFyIGxpbmVCcmVhayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ3N0cmljdCc7XG5cbiAgICB2YXIgdHlwZXMgPSBbXTtcbiAgICB2YXIgaW5kaWNpZXMgPSBbXTtcbiAgICB2YXIgY2F0ZWdvcmllcyA9IFtdO1xuICAgIGNvZGVQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoY29kZVBvaW50LCBpbmRleCkge1xuICAgICAgICB2YXIgY2xhc3NUeXBlID0gVW5pY29kZVRyaWUuZ2V0KGNvZGVQb2ludCk7XG4gICAgICAgIGlmIChjbGFzc1R5cGUgPiBMRVRURVJfTlVNQkVSX01PRElGSUVSKSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICBjbGFzc1R5cGUgLT0gTEVUVEVSX05VTUJFUl9NT0RJRklFUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoWydub3JtYWwnLCAnYXV0bycsICdsb29zZSddLmluZGV4T2YobGluZUJyZWFrKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIFUrMjAxMCwg4oCTIFUrMjAxMywg44CcIFUrMzAxQywg44KgIFUrMzBBMFxuICAgICAgICAgICAgaWYgKFsweDIwMTAsIDB4MjAxMywgMHgzMDFjLCAweDMwYTBdLmluZGV4T2YoY29kZVBvaW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChDQik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBDTSB8fCBjbGFzc1R5cGUgPT09IFpXSikge1xuICAgICAgICAgICAgLy8gTEIxMCBUcmVhdCBhbnkgcmVtYWluaW5nIGNvbWJpbmluZyBtYXJrIG9yIFpXSiBhcyBBTC5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTEI5IERvIG5vdCBicmVhayBhIGNvbWJpbmluZyBjaGFyYWN0ZXIgc2VxdWVuY2U7IHRyZWF0IGl0IGFzIGlmIGl0IGhhcyB0aGUgbGluZSBicmVha2luZyBjbGFzcyBvZlxuICAgICAgICAgICAgLy8gdGhlIGJhc2UgY2hhcmFjdGVyIGluIGFsbCBvZiB0aGUgZm9sbG93aW5nIHJ1bGVzLiBUcmVhdCBaV0ogYXMgaWYgaXQgd2VyZSBDTS5cbiAgICAgICAgICAgIHZhciBwcmV2ID0gdHlwZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIGlmIChMSU5FX0JSRUFLUy5pbmRleE9mKHByZXYpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kaWNpZXNbaW5kZXggLSAxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2gocHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IENKKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChsaW5lQnJlYWsgPT09ICdzdHJpY3QnID8gTlMgOiBJRCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBTQSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gQUkpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBzdXBwbGVtZW50YXJ5IGNoYXJhY3RlcnMsIGEgdXNlZnVsIGRlZmF1bHQgaXMgdG8gdHJlYXQgY2hhcmFjdGVycyBpbiB0aGUgcmFuZ2UgMTAwMDAuLjFGRkZEIGFzIEFMXG4gICAgICAgIC8vIGFuZCBjaGFyYWN0ZXJzIGluIHRoZSByYW5nZXMgMjAwMDAuLjJGRkZEIGFuZCAzMDAwMC4uM0ZGRkQgYXMgSUQsIHVudGlsIHRoZSBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgcmV2aXNlZFxuICAgICAgICAvLyB0byB0YWtlIGludG8gYWNjb3VudCB0aGUgYWN0dWFsIGxpbmUgYnJlYWtpbmcgcHJvcGVydGllcyBmb3IgdGhlc2UgY2hhcmFjdGVycy5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gWFgpIHtcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPj0gMHgyMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgyZmZmZCB8fCBjb2RlUG9pbnQgPj0gMHgzMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgzZmZmZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKElEKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMucHVzaChjbGFzc1R5cGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtpbmRpY2llcywgdHlwZXMsIGNhdGVnb3JpZXNdO1xufTtcblxudmFyIGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkID0gZnVuY3Rpb24gaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoYSwgYiwgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBjbGFzc1R5cGVzW2N1cnJlbnRJbmRleF07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkgPyBhLmluZGV4T2YoY3VycmVudCkgIT09IC0xIDogYSA9PT0gY3VycmVudCkge1xuICAgICAgICB2YXIgaSA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgd2hpbGUgKGkgPD0gY2xhc3NUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIHZhciBuZXh0ID0gY2xhc3NUeXBlc1tpXTtcblxuICAgICAgICAgICAgaWYgKG5leHQgPT09IGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHQgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudCA9PT0gU1ApIHtcbiAgICAgICAgdmFyIF9pID0gY3VycmVudEluZGV4O1xuXG4gICAgICAgIHdoaWxlIChfaSA+IDApIHtcbiAgICAgICAgICAgIF9pLS07XG4gICAgICAgICAgICB2YXIgcHJldiA9IGNsYXNzVHlwZXNbX2ldO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSA/IGEuaW5kZXhPZihwcmV2KSAhPT0gLTEgOiBhID09PSBwcmV2KSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPD0gY2xhc3NUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX25leHQgPSBjbGFzc1R5cGVzW25dO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfbmV4dCA9PT0gYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoX25leHQgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZXYgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUgPSBmdW5jdGlvbiBwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlKGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykge1xuICAgIHZhciBpID0gY3VycmVudEluZGV4O1xuICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgdmFyIHR5cGUgPSBjbGFzc1R5cGVzW2ldO1xuICAgICAgICBpZiAodHlwZSA9PT0gU1ApIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxudmFyIF9saW5lQnJlYWtBdEluZGV4ID0gZnVuY3Rpb24gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsIGluZGV4LCBmb3JiaWRkZW5CcmVha3MpIHtcbiAgICBpZiAoaW5kaWNpZXNbaW5kZXhdID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZvcmJpZGRlbkJyZWFrcykgJiYgZm9yYmlkZGVuQnJlYWtzW2N1cnJlbnRJbmRleF0gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIHZhciBiZWZvcmVJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgdmFyIGFmdGVySW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIHZhciBjdXJyZW50ID0gY2xhc3NUeXBlc1tjdXJyZW50SW5kZXhdO1xuXG4gICAgLy8gTEI0IEFsd2F5cyBicmVhayBhZnRlciBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIC8vIExCNSBUcmVhdCBDUiBmb2xsb3dlZCBieSBMRiwgYXMgd2VsbCBhcyBDUiwgTEYsIGFuZCBOTCBhcyBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIHZhciBiZWZvcmUgPSBiZWZvcmVJbmRleCA+PSAwID8gY2xhc3NUeXBlc1tiZWZvcmVJbmRleF0gOiAwO1xuICAgIHZhciBuZXh0ID0gY2xhc3NUeXBlc1thZnRlckluZGV4XTtcblxuICAgIGlmIChjdXJyZW50ID09PSBDUiAmJiBuZXh0ID09PSBMRikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgaWYgKEhBUkRfTElORV9CUkVBS1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX01BTkRBVE9SWTtcbiAgICB9XG5cbiAgICAvLyBMQjYgRG8gbm90IGJyZWFrIGJlZm9yZSBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIGlmIChIQVJEX0xJTkVfQlJFQUtTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjcgRG8gbm90IGJyZWFrIGJlZm9yZSBzcGFjZXMgb3IgemVybyB3aWR0aCBzcGFjZS5cbiAgICBpZiAoU1BBQ0UuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCOCBCcmVhayBiZWZvcmUgYW55IGNoYXJhY3RlciBmb2xsb3dpbmcgYSB6ZXJvLXdpZHRoIHNwYWNlLCBldmVuIGlmIG9uZSBvciBtb3JlIHNwYWNlcyBpbnRlcnZlbmUuXG4gICAgaWYgKHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUoY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSA9PT0gWlcpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEI4YSBEbyBub3QgYnJlYWsgYmV0d2VlbiBhIHplcm8gd2lkdGggam9pbmVyIGFuZCBhbiBpZGVvZ3JhcGgsIGVtb2ppIGJhc2Ugb3IgZW1vamkgbW9kaWZpZXIuXG4gICAgaWYgKFVuaWNvZGVUcmllLmdldChjb2RlUG9pbnRzW2N1cnJlbnRJbmRleF0pID09PSBaV0ogJiYgKG5leHQgPT09IElEIHx8IG5leHQgPT09IEVCIHx8IG5leHQgPT09IEVNKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMSBEbyBub3QgYnJlYWsgYmVmb3JlIG9yIGFmdGVyIFdvcmQgam9pbmVyIGFuZCByZWxhdGVkIGNoYXJhY3RlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFdKIHx8IG5leHQgPT09IFdKKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEyIERvIG5vdCBicmVhayBhZnRlciBOQlNQIGFuZCByZWxhdGVkIGNoYXJhY3RlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IEdMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEyYSBEbyBub3QgYnJlYWsgYmVmb3JlIE5CU1AgYW5kIHJlbGF0ZWQgY2hhcmFjdGVycywgZXhjZXB0IGFmdGVyIHNwYWNlcyBhbmQgaHlwaGVucy5cbiAgICBpZiAoW1NQLCBCQSwgSFldLmluZGV4T2YoY3VycmVudCkgPT09IC0xICYmIG5leHQgPT09IEdMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEzIERvIG5vdCBicmVhayBiZWZvcmUg4oCYXeKAmSBvciDigJgh4oCZIG9yIOKAmDvigJkgb3Ig4oCYL+KAmSwgZXZlbiBhZnRlciBzcGFjZXMuXG4gICAgaWYgKFtDTCwgQ1AsIEVYLCBJUywgU1ldLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE0IERvIG5vdCBicmVhayBhZnRlciDigJhb4oCZLCBldmVuIGFmdGVyIHNwYWNlcy5cbiAgICBpZiAocHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZShjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpID09PSBPUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNSBEbyBub3QgYnJlYWsgd2l0aGluIOKAmOKAnVvigJksIGV2ZW4gd2l0aCBpbnRlcnZlbmluZyBzcGFjZXMuXG4gICAgaWYgKGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKFFVLCBPUCwgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNiBEbyBub3QgYnJlYWsgYmV0d2VlbiBjbG9zaW5nIHB1bmN0dWF0aW9uIGFuZCBhIG5vbnN0YXJ0ZXIgKGxiPU5TKSwgZXZlbiB3aXRoIGludGVydmVuaW5nIHNwYWNlcy5cbiAgICBpZiAoaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoW0NMLCBDUF0sIE5TLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE3IERvIG5vdCBicmVhayB3aXRoaW4g4oCY4oCU4oCU4oCZLCBldmVuIHdpdGggaW50ZXJ2ZW5pbmcgc3BhY2VzLlxuICAgIGlmIChpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChCMiwgQjIsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTggQnJlYWsgYWZ0ZXIgc3BhY2VzLlxuICAgIGlmIChjdXJyZW50ID09PSBTUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE5IERvIG5vdCBicmVhayBiZWZvcmUgb3IgYWZ0ZXIgcXVvdGF0aW9uIG1hcmtzLCBzdWNoIGFzIOKAmCDigJ0g4oCZLlxuICAgIGlmIChjdXJyZW50ID09PSBRVSB8fCBuZXh0ID09PSBRVSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMCBCcmVhayBiZWZvcmUgYW5kIGFmdGVyIHVucmVzb2x2ZWQgQ0IuXG4gICAgaWYgKG5leHQgPT09IENCIHx8IGN1cnJlbnQgPT09IENCKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjEgRG8gbm90IGJyZWFrIGJlZm9yZSBoeXBoZW4tbWludXMsIG90aGVyIGh5cGhlbnMsIGZpeGVkLXdpZHRoIHNwYWNlcywgc21hbGwga2FuYSwgYW5kIG90aGVyIG5vbi1zdGFydGVycywgb3IgYWZ0ZXIgYWN1dGUgYWNjZW50cy5cbiAgICBpZiAoW0JBLCBIWSwgTlNdLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IGN1cnJlbnQgPT09IEJCKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIxYSBEb24ndCBicmVhayBhZnRlciBIZWJyZXcgKyBIeXBoZW4uXG4gICAgaWYgKGJlZm9yZSA9PT0gSEwgJiYgSFlQSEVOLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIxYiBEb27igJl0IGJyZWFrIGJldHdlZW4gU29saWR1cyBhbmQgSGVicmV3IGxldHRlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFNZICYmIG5leHQgPT09IEhMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIyIERvIG5vdCBicmVhayBiZXR3ZWVuIHR3byBlbGxpcHNlcywgb3IgYmV0d2VlbiBsZXR0ZXJzLCBudW1iZXJzIG9yIGV4Y2xhbWF0aW9ucyBhbmQgZWxsaXBzaXMuXG4gICAgaWYgKG5leHQgPT09IElOICYmIEFMUEhBQkVUSUNTLmNvbmNhdChJTiwgRVgsIE5VLCBJRCwgRUIsIEVNKS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMyBEbyBub3QgYnJlYWsgYmV0d2VlbiBkaWdpdHMgYW5kIGxldHRlcnMuXG4gICAgaWYgKEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGN1cnJlbnQgPT09IE5VIHx8IEFMUEhBQkVUSUNTLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IE5VKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIzYSBEbyBub3QgYnJlYWsgYmV0d2VlbiBudW1lcmljIHByZWZpeGVzIGFuZCBpZGVvZ3JhcGhzLCBvciBiZXR3ZWVuIGlkZW9ncmFwaHMgYW5kIG51bWVyaWMgcG9zdGZpeGVzLlxuICAgIGlmIChjdXJyZW50ID09PSBQUiAmJiBbSUQsIEVCLCBFTV0uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0lELCBFQiwgRU1dLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IFBPKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI0IERvIG5vdCBicmVhayBiZXR3ZWVuIG51bWVyaWMgcHJlZml4L3Bvc3RmaXggYW5kIGxldHRlcnMsIG9yIGJldHdlZW4gbGV0dGVycyBhbmQgcHJlZml4L3Bvc3RmaXguXG4gICAgaWYgKEFMUEhBQkVUSUNTLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIFBSRUZJWF9QT1NURklYLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFBSRUZJWF9QT1NURklYLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI1IERvIG5vdCBicmVhayBiZXR3ZWVuIHRoZSBmb2xsb3dpbmcgcGFpcnMgb2YgY2xhc3NlcyByZWxldmFudCB0byBudW1iZXJzOlxuICAgIGlmIChcbiAgICAvLyAoUFIgfCBQTykgw5cgKCBPUCB8IEhZICk/IE5VXG4gICAgW1BSLCBQT10uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgKG5leHQgPT09IE5VIHx8IFtPUCwgSFldLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGNsYXNzVHlwZXNbYWZ0ZXJJbmRleCArIDFdID09PSBOVSkgfHxcbiAgICAvLyAoIE9QIHwgSFkgKSDDlyBOVVxuICAgIFtPUCwgSFldLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IE5VIHx8XG4gICAgLy8gTlUgw5dcdChOVSB8IFNZIHwgSVMpXG4gICAgY3VycmVudCA9PT0gTlUgJiYgW05VLCBTWSwgSVNdLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBOVSAoTlUgfCBTWSB8IElTKSogw5cgKE5VIHwgU1kgfCBJUyB8IENMIHwgQ1ApXG4gICAgaWYgKFtOVSwgU1ksIElTLCBDTCwgQ1BdLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIHdoaWxlIChwcmV2SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBjbGFzc1R5cGVzW3ByZXZJbmRleF07XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gTlUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtTWSwgSVNdLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJldkluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTlUgKE5VIHwgU1kgfCBJUykqIChDTCB8IENQKT8gw5cgKFBPIHwgUFIpKVxuICAgIGlmIChbUFIsIFBPXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICB2YXIgX3ByZXZJbmRleCA9IFtDTCwgQ1BdLmluZGV4T2YoY3VycmVudCkgIT09IC0xID8gYmVmb3JlSW5kZXggOiBjdXJyZW50SW5kZXg7XG4gICAgICAgIHdoaWxlIChfcHJldkluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciBfdHlwZSA9IGNsYXNzVHlwZXNbX3ByZXZJbmRleF07XG4gICAgICAgICAgICBpZiAoX3R5cGUgPT09IE5VKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChbU1ksIElTXS5pbmRleE9mKF90eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBfcHJldkluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTEIyNiBEbyBub3QgYnJlYWsgYSBLb3JlYW4gc3lsbGFibGUuXG4gICAgaWYgKEpMID09PSBjdXJyZW50ICYmIFtKTCwgSlYsIEgyLCBIM10uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0pWLCBIMl0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgW0pWLCBKVF0uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0pULCBIM10uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gSlQpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjcgVHJlYXQgYSBLb3JlYW4gU3lsbGFibGUgQmxvY2sgdGhlIHNhbWUgYXMgSUQuXG4gICAgaWYgKEtPUkVBTl9TWUxMQUJMRV9CTE9DSy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBbSU4sIFBPXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBLT1JFQU5fU1lMTEFCTEVfQkxPQ0suaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY3VycmVudCA9PT0gUFIpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjggRG8gbm90IGJyZWFrIGJldHdlZW4gYWxwaGFiZXRpY3MgKOKAnGF04oCdKS5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjkgRG8gbm90IGJyZWFrIGJldHdlZW4gbnVtZXJpYyBwdW5jdHVhdGlvbiBhbmQgYWxwaGFiZXRpY3MgKOKAnGUuZy7igJ0pLlxuICAgIGlmIChjdXJyZW50ID09PSBJUyAmJiBBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIzMCBEbyBub3QgYnJlYWsgYmV0d2VlbiBsZXR0ZXJzLCBudW1iZXJzLCBvciBvcmRpbmFyeSBzeW1ib2xzIGFuZCBvcGVuaW5nIG9yIGNsb3NpbmcgcGFyZW50aGVzZXMuXG4gICAgaWYgKEFMUEhBQkVUSUNTLmNvbmNhdChOVSkuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gT1AgfHwgQUxQSEFCRVRJQ1MuY29uY2F0KE5VKS5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjdXJyZW50ID09PSBDUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIzMGEgQnJlYWsgYmV0d2VlbiB0d28gcmVnaW9uYWwgaW5kaWNhdG9yIHN5bWJvbHMgaWYgYW5kIG9ubHkgaWYgdGhlcmUgYXJlIGFuIGV2ZW4gbnVtYmVyIG9mIHJlZ2lvbmFsXG4gICAgLy8gaW5kaWNhdG9ycyBwcmVjZWRpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBicmVhay5cbiAgICBpZiAoY3VycmVudCA9PT0gUkkgJiYgbmV4dCA9PT0gUkkpIHtcbiAgICAgICAgdmFyIGkgPSBpbmRpY2llc1tjdXJyZW50SW5kZXhdO1xuICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIGlmIChjbGFzc1R5cGVzW2ldID09PSBSSSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCAlIDIgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExCMzBiIERvIG5vdCBicmVhayBiZXR3ZWVuIGFuIGVtb2ppIGJhc2UgYW5kIGFuIGVtb2ppIG1vZGlmaWVyLlxuICAgIGlmIChjdXJyZW50ID09PSBFQiAmJiBuZXh0ID09PSBFTSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG59O1xuXG52YXIgbGluZUJyZWFrQXRJbmRleCA9IGV4cG9ydHMubGluZUJyZWFrQXRJbmRleCA9IGZ1bmN0aW9uIGxpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgaW5kZXgpIHtcbiAgICAvLyBMQjIgTmV2ZXIgYnJlYWsgYXQgdGhlIHN0YXJ0IG9mIHRleHQuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjMgQWx3YXlzIGJyZWFrIGF0IHRoZSBlbmQgb2YgdGV4dC5cbiAgICBpZiAoaW5kZXggPj0gY29kZVBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX01BTkRBVE9SWTtcbiAgICB9XG5cbiAgICB2YXIgX2NvZGVQb2ludHNUb0NoYXJhY3RlID0gY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3Nlcyhjb2RlUG9pbnRzKSxcbiAgICAgICAgX2NvZGVQb2ludHNUb0NoYXJhY3RlMiA9IF9zbGljZWRUb0FycmF5KF9jb2RlUG9pbnRzVG9DaGFyYWN0ZSwgMiksXG4gICAgICAgIGluZGljaWVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlMlswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTJbMV07XG5cbiAgICByZXR1cm4gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsIGluZGV4KTtcbn07XG5cbnZhciBjc3NGb3JtYXR0ZWRDbGFzc2VzID0gZnVuY3Rpb24gY3NzRm9ybWF0dGVkQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IGxpbmVCcmVhazogJ25vcm1hbCcsIHdvcmRCcmVhazogJ25vcm1hbCcgfTtcbiAgICB9XG5cbiAgICB2YXIgX2NvZGVQb2ludHNUb0NoYXJhY3RlMyA9IGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucy5saW5lQnJlYWspLFxuICAgICAgICBfY29kZVBvaW50c1RvQ2hhcmFjdGU0ID0gX3NsaWNlZFRvQXJyYXkoX2NvZGVQb2ludHNUb0NoYXJhY3RlMywgMyksXG4gICAgICAgIGluZGljaWVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlNFswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTRbMV0sXG4gICAgICAgIGlzTGV0dGVyTnVtYmVyID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlNFsyXTtcblxuICAgIGlmIChvcHRpb25zLndvcmRCcmVhayA9PT0gJ2JyZWFrLWFsbCcgfHwgb3B0aW9ucy53b3JkQnJlYWsgPT09ICdicmVhay13b3JkJykge1xuICAgICAgICBjbGFzc1R5cGVzID0gY2xhc3NUeXBlcy5tYXAoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBbTlUsIEFMLCBTQV0uaW5kZXhPZih0eXBlKSAhPT0gLTEgPyBJRCA6IHR5cGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBmb3JiaWRkZW5CcmVha3BvaW50cyA9IG9wdGlvbnMud29yZEJyZWFrID09PSAna2VlcC1hbGwnID8gaXNMZXR0ZXJOdW1iZXIubWFwKGZ1bmN0aW9uIChpc0xldHRlck51bWJlciwgaSkge1xuICAgICAgICByZXR1cm4gaXNMZXR0ZXJOdW1iZXIgJiYgY29kZVBvaW50c1tpXSA+PSAweDRlMDAgJiYgY29kZVBvaW50c1tpXSA8PSAweDlmZmY7XG4gICAgfSkgOiBudWxsO1xuXG4gICAgcmV0dXJuIFtpbmRpY2llcywgY2xhc3NUeXBlcywgZm9yYmlkZGVuQnJlYWtwb2ludHNdO1xufTtcblxudmFyIGlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyA9IGV4cG9ydHMuaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzID0gZnVuY3Rpb24gaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBjb2RlUG9pbnRzID0gKDAsIF9VdGlsLnRvQ29kZVBvaW50cykoc3RyKTtcbiAgICB2YXIgb3V0cHV0ID0gQlJFQUtfTk9UX0FMTE9XRUQ7XG5cbiAgICB2YXIgX2Nzc0Zvcm1hdHRlZENsYXNzZXMgPSBjc3NGb3JtYXR0ZWRDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMpLFxuICAgICAgICBfY3NzRm9ybWF0dGVkQ2xhc3NlczIgPSBfc2xpY2VkVG9BcnJheShfY3NzRm9ybWF0dGVkQ2xhc3NlcywgMyksXG4gICAgICAgIGluZGljaWVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXMyWzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXMyWzFdLFxuICAgICAgICBmb3JiaWRkZW5CcmVha3BvaW50cyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzMlsyXTtcblxuICAgIGNvZGVQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoY29kZVBvaW50LCBpKSB7XG4gICAgICAgIG91dHB1dCArPSAoMCwgX1V0aWwuZnJvbUNvZGVQb2ludCkoY29kZVBvaW50KSArIChpID49IGNvZGVQb2ludHMubGVuZ3RoIC0gMSA/IEJSRUFLX01BTkRBVE9SWSA6IF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCBpICsgMSwgZm9yYmlkZGVuQnJlYWtwb2ludHMpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG59O1xuXG52YXIgQnJlYWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJlYWsoY29kZVBvaW50cywgbGluZUJyZWFrLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcmVhayk7XG5cbiAgICAgICAgdGhpcy5fY29kZVBvaW50cyA9IGNvZGVQb2ludHM7XG4gICAgICAgIHRoaXMucmVxdWlyZWQgPSBsaW5lQnJlYWsgPT09IEJSRUFLX01BTkRBVE9SWTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQnJlYWssIFt7XG4gICAgICAgIGtleTogJ3NsaWNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNsaWNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9VdGlsLmZyb21Db2RlUG9pbnQuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5fY29kZVBvaW50cy5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCkpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCcmVhaztcbn0oKTtcblxudmFyIExpbmVCcmVha2VyID0gZXhwb3J0cy5MaW5lQnJlYWtlciA9IGZ1bmN0aW9uIExpbmVCcmVha2VyKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBjb2RlUG9pbnRzID0gKDAsIF9VdGlsLnRvQ29kZVBvaW50cykoc3RyKTtcblxuICAgIHZhciBfY3NzRm9ybWF0dGVkQ2xhc3NlczMgPSBjc3NGb3JtYXR0ZWRDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMpLFxuICAgICAgICBfY3NzRm9ybWF0dGVkQ2xhc3NlczQgPSBfc2xpY2VkVG9BcnJheShfY3NzRm9ybWF0dGVkQ2xhc3NlczMsIDMpLFxuICAgICAgICBpbmRpY2llcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzNFswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzNFsxXSxcbiAgICAgICAgZm9yYmlkZGVuQnJlYWtwb2ludHMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczRbMl07XG5cbiAgICB2YXIgbGVuZ3RoID0gY29kZVBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGxhc3RFbmQgPSAwO1xuICAgIHZhciBuZXh0SW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpbmVCcmVhayA9IEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgd2hpbGUgKG5leHRJbmRleCA8IGxlbmd0aCAmJiAobGluZUJyZWFrID0gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsICsrbmV4dEluZGV4LCBmb3JiaWRkZW5CcmVha3BvaW50cykpID09PSBCUkVBS19OT1RfQUxMT1dFRCkge31cblxuICAgICAgICAgICAgaWYgKGxpbmVCcmVhayAhPT0gQlJFQUtfTk9UX0FMTE9XRUQgfHwgbmV4dEluZGV4ID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBuZXcgQnJlYWsoY29kZVBvaW50cywgbGluZUJyZWFrLCBsYXN0RW5kLCBuZXh0SW5kZXgpO1xuICAgICAgICAgICAgICAgIGxhc3RFbmQgPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJpZSA9IGV4cG9ydHMuY3JlYXRlVHJpZUZyb21CYXNlNjQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX01BU0sgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMV9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9EQVRBX01BU0sgPSBleHBvcnRzLlVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xXzIgPSBleHBvcnRzLlVUUklFMl9JTkRFWF9TSElGVCA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzEgPSBleHBvcnRzLlVUUklFMl9TSElGVF8yID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqIFNoaWZ0IHNpemUgZm9yIGdldHRpbmcgdGhlIGluZGV4LTIgdGFibGUgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9TSElGVF8yID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMiA9IDU7XG5cbi8qKiBTaGlmdCBzaXplIGZvciBnZXR0aW5nIHRoZSBpbmRleC0xIHRhYmxlIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfU0hJRlRfMSA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzEgPSA2ICsgNTtcblxuLyoqXG4gKiBTaGlmdCBzaXplIGZvciBzaGlmdGluZyBsZWZ0IHRoZSBpbmRleCBhcnJheSB2YWx1ZXMuXG4gKiBJbmNyZWFzZXMgcG9zc2libGUgZGF0YSBzaXplIHdpdGggMTYtYml0IGluZGV4IHZhbHVlcyBhdCB0aGUgY29zdFxuICogb2YgY29tcGFjdGFiaWxpdHkuXG4gKiBUaGlzIHJlcXVpcmVzIGRhdGEgYmxvY2tzIHRvIGJlIGFsaWduZWQgYnkgVVRSSUUyX0RBVEFfR1JBTlVMQVJJVFkuXG4gKi9cbnZhciBVVFJJRTJfSU5ERVhfU0hJRlQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF9TSElGVCA9IDI7XG5cbi8qKlxuICogRGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28gc2hpZnQgc2l6ZXMsXG4gKiBmb3IgZ2V0dGluZyBhbiBpbmRleC0xIG9mZnNldCBmcm9tIGFuIGluZGV4LTIgb2Zmc2V0LiA2PTExLTVcbiAqL1xudmFyIFVUUklFMl9TSElGVF8xXzIgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xXzIgPSBVVFJJRTJfU0hJRlRfMSAtIFVUUklFMl9TSElGVF8yO1xuXG4vKipcbiAqIFRoZSBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvciBVK0Q4MDAuLlUrREJGRiBzdG9yZXMgdmFsdWVzIGZvclxuICogbGVhZCBzdXJyb2dhdGUgY29kZSBfdW5pdHNfIG5vdCBjb2RlIF9wb2ludHNfLlxuICogVmFsdWVzIGZvciBsZWFkIHN1cnJvZ2F0ZSBjb2RlIF9wb2ludHNfIGFyZSBpbmRleGVkIHdpdGggdGhpcyBwb3J0aW9uIG9mIHRoZSB0YWJsZS5cbiAqIExlbmd0aD0zMj0weDIwPTB4NDAwPj5VVFJJRTJfU0hJRlRfMi4gKFRoZXJlIGFyZSAxMDI0PTB4NDAwIGxlYWQgc3Vycm9nYXRlcy4pXG4gKi9cbnZhciBVVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgPSAweDEwMDAwID4+IFVUUklFMl9TSElGVF8yO1xuXG4vKiogTnVtYmVyIG9mIGVudHJpZXMgaW4gYSBkYXRhIGJsb2NrLiAzMj0weDIwICovXG52YXIgVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfREFUQV9CTE9DS19MRU5HVEggPSAxIDw8IFVUUklFMl9TSElGVF8yO1xuLyoqIE1hc2sgZm9yIGdldHRpbmcgdGhlIGxvd2VyIGJpdHMgZm9yIHRoZSBpbi1kYXRhLWJsb2NrIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfREFUQV9NQVNLID0gZXhwb3J0cy5VVFJJRTJfREFUQV9NQVNLID0gVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIIC0gMTtcblxudmFyIFVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSCA9IDB4NDAwID4+IFVUUklFMl9TSElGVF8yO1xuLyoqIENvdW50IHRoZSBsZW5ndGhzIG9mIGJvdGggQk1QIHBpZWNlcy4gMjA4MD0weDgyMCAqL1xudmFyIFVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEggPSBVVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCArIFVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIO1xuLyoqXG4gKiBUaGUgMi1ieXRlIFVURi04IHZlcnNpb24gb2YgdGhlIGluZGV4LTIgdGFibGUgZm9sbG93cyBhdCBvZmZzZXQgMjA4MD0weDgyMC5cbiAqIExlbmd0aCAzMj0weDIwIGZvciBsZWFkIGJ5dGVzIEMwLi5ERiwgcmVnYXJkbGVzcyBvZiBVVFJJRTJfU0hJRlRfMi5cbiAqL1xudmFyIFVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCA9IFVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEg7XG52YXIgVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gMHg4MDAgPj4gNjsgLyogVSswODAwIGlzIHRoZSBmaXJzdCBjb2RlIHBvaW50IGFmdGVyIDItYnl0ZSBVVEYtOCAqL1xuLyoqXG4gKiBUaGUgaW5kZXgtMSB0YWJsZSwgb25seSB1c2VkIGZvciBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzLCBhdCBvZmZzZXQgMjExMj0weDg0MC5cbiAqIFZhcmlhYmxlIGxlbmd0aCwgZm9yIGNvZGUgcG9pbnRzIHVwIHRvIGhpZ2hTdGFydCwgd2hlcmUgdGhlIGxhc3Qgc2luZ2xlLXZhbHVlIHJhbmdlIHN0YXJ0cy5cbiAqIE1heGltdW0gbGVuZ3RoIDUxMj0weDIwMD0weDEwMDAwMD4+VVRSSUUyX1NISUZUXzEuXG4gKiAoRm9yIDB4MTAwMDAwIHN1cHBsZW1lbnRhcnkgY29kZSBwb2ludHMgVSsxMDAwMC4uVSsxMGZmZmYuKVxuICpcbiAqIFRoZSBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvciBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzIHN0YXJ0c1xuICogYWZ0ZXIgdGhpcyBpbmRleC0xIHRhYmxlLlxuICpcbiAqIEJvdGggdGhlIGluZGV4LTEgdGFibGUgYW5kIHRoZSBmb2xsb3dpbmcgcGFydCBvZiB0aGUgaW5kZXgtMiB0YWJsZVxuICogYXJlIG9taXR0ZWQgY29tcGxldGVseSBpZiB0aGVyZSBpcyBvbmx5IEJNUCBkYXRhLlxuICovXG52YXIgVVRSSUUyX0lOREVYXzFfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMV9PRkZTRVQgPSBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCArIFVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIO1xuXG4vKipcbiAqIE51bWJlciBvZiBpbmRleC0xIGVudHJpZXMgZm9yIHRoZSBCTVAuIDMyPTB4MjBcbiAqIFRoaXMgcGFydCBvZiB0aGUgaW5kZXgtMSB0YWJsZSBpcyBvbWl0dGVkIGZyb20gdGhlIHNlcmlhbGl6ZWQgZm9ybS5cbiAqL1xudmFyIFVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gMHgxMDAwMCA+PiBVVFJJRTJfU0hJRlRfMTtcblxuLyoqIE51bWJlciBvZiBlbnRyaWVzIGluIGFuIGluZGV4LTIgYmxvY2suIDY0PTB4NDAgKi9cbnZhciBVVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCA9IDEgPDwgVVRSSUUyX1NISUZUXzFfMjtcbi8qKiBNYXNrIGZvciBnZXR0aW5nIHRoZSBsb3dlciBiaXRzIGZvciB0aGUgaW4taW5kZXgtMi1ibG9jayBvZmZzZXQuICovXG52YXIgVVRSSUUyX0lOREVYXzJfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfTUFTSyA9IFVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCAtIDE7XG5cbnZhciBjcmVhdGVUcmllRnJvbUJhc2U2NCA9IGV4cG9ydHMuY3JlYXRlVHJpZUZyb21CYXNlNjQgPSBmdW5jdGlvbiBjcmVhdGVUcmllRnJvbUJhc2U2NChiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyID0gKDAsIF9VdGlsLmRlY29kZSkoYmFzZTY0KTtcbiAgICB2YXIgdmlldzMyID0gQXJyYXkuaXNBcnJheShidWZmZXIpID8gKDAsIF9VdGlsLnBvbHlVaW50MzJBcnJheSkoYnVmZmVyKSA6IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgIHZhciB2aWV3MTYgPSBBcnJheS5pc0FycmF5KGJ1ZmZlcikgPyAoMCwgX1V0aWwucG9seVVpbnQxNkFycmF5KShidWZmZXIpIDogbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIGhlYWRlckxlbmd0aCA9IDI0O1xuXG4gICAgdmFyIGluZGV4ID0gdmlldzE2LnNsaWNlKGhlYWRlckxlbmd0aCAvIDIsIHZpZXczMls0XSAvIDIpO1xuICAgIHZhciBkYXRhID0gdmlldzMyWzVdID09PSAyID8gdmlldzE2LnNsaWNlKChoZWFkZXJMZW5ndGggKyB2aWV3MzJbNF0pIC8gMikgOiB2aWV3MzIuc2xpY2UoTWF0aC5jZWlsKChoZWFkZXJMZW5ndGggKyB2aWV3MzJbNF0pIC8gNCkpO1xuXG4gICAgcmV0dXJuIG5ldyBUcmllKHZpZXczMlswXSwgdmlldzMyWzFdLCB2aWV3MzJbMl0sIHZpZXczMlszXSwgaW5kZXgsIGRhdGEpO1xufTtcblxudmFyIFRyaWUgPSBleHBvcnRzLlRyaWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJpZShpbml0aWFsVmFsdWUsIGVycm9yVmFsdWUsIGhpZ2hTdGFydCwgaGlnaFZhbHVlSW5kZXgsIGluZGV4LCBkYXRhKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmllKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgdGhpcy5lcnJvclZhbHVlID0gZXJyb3JWYWx1ZTtcbiAgICAgICAgdGhpcy5oaWdoU3RhcnQgPSBoaWdoU3RhcnQ7XG4gICAgICAgIHRoaXMuaGlnaFZhbHVlSW5kZXggPSBoaWdoVmFsdWVJbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgZm9yIGEgY29kZSBwb2ludCBhcyBzdG9yZWQgaW4gdGhlIFRyaWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29kZVBvaW50IHRoZSBjb2RlIHBvaW50XG4gICAgICogQHJldHVybiB0aGUgdmFsdWVcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFRyaWUsIFt7XG4gICAgICAgIGtleTogJ2dldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoY29kZVBvaW50KSB7XG4gICAgICAgICAgICB2YXIgaXggPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDwgMHgwZDgwMCB8fCBjb2RlUG9pbnQgPiAweDBkYmZmICYmIGNvZGVQb2ludCA8PSAweDBmZmZmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9yZGluYXJ5IEJNUCBjb2RlIHBvaW50LCBleGNsdWRpbmcgbGVhZGluZyBzdXJyb2dhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBCTVAgdXNlcyBhIHNpbmdsZSBsZXZlbCBsb29rdXAuICBCTVAgaW5kZXggc3RhcnRzIGF0IG9mZnNldCAwIGluIHRoZSBUcmllMiBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgLy8gMTYgYml0IGRhdGEgaXMgc3RvcmVkIGluIHRoZSBpbmRleCBhcnJheSBpdHNlbGYuXG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzJdO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBMZWFkIFN1cnJvZ2F0ZSBDb2RlIFBvaW50LiAgQSBTZXBhcmF0ZSBpbmRleCBzZWN0aW9uIGlzIHN0b3JlZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVhZCBzdXJyb2dhdGUgY29kZSB1bml0cyBhbmQgY29kZSBwb2ludHMuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgVGhlIG1haW4gaW5kZXggaGFzIHRoZSBjb2RlIHVuaXQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgLy8gICBGb3IgdGhpcyBmdW5jdGlvbiwgd2UgbmVlZCB0aGUgY29kZSBwb2ludCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiB0aGlzIGV4cHJlc3Npb24gY291bGQgYmUgcmVmYWN0b3JlZCBmb3Igc2xpZ2h0bHkgaW1wcm92ZWQgZWZmaWNpZW5jeSwgYnV0XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN1cnJvZ2F0ZSBjb2RlIHBvaW50cyB3aWxsIGJlIHNvIHJhcmUgaW4gcHJhY3RpY2UgdGhhdCBpdCdzIG5vdCB3b3J0aCBpdC5cbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W1VUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUICsgKGNvZGVQb2ludCAtIDB4ZDgwMCA+PiBVVFJJRTJfU0hJRlRfMildO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDwgdGhpcy5oaWdoU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcGxlbWVudGFsIGNvZGUgcG9pbnQsIHVzZSB0d28tbGV2ZWwgbG9va3VwLlxuICAgICAgICAgICAgICAgICAgICBpeCA9IFVUUklFMl9JTkRFWF8xX09GRlNFVCAtIFVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCArIChjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzEpO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbaXhdO1xuICAgICAgICAgICAgICAgICAgICBpeCArPSBjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzIgJiBVVFJJRTJfSU5ERVhfMl9NQVNLO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbaXhdO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweDEwZmZmZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuaGlnaFZhbHVlSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmFsbCB0aHJvdWdoLiAgVGhlIGNvZGUgcG9pbnQgaXMgb3V0c2lkZSBvZiB0aGUgbGVnYWwgcmFuZ2Ugb2YgMC4uMHgxMGZmZmYuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRyaWU7XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgdG9Db2RlUG9pbnRzID0gZXhwb3J0cy50b0NvZGVQb2ludHMgPSBmdW5jdGlvbiB0b0NvZGVQb2ludHMoc3RyKSB7XG4gICAgdmFyIGNvZGVQb2ludHMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgaWYgKHZhbHVlID49IDB4ZDgwMCAmJiB2YWx1ZSA8PSAweGRiZmYgJiYgaSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgICAgIGlmICgoZXh0cmEgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnRzLnB1c2goKCh2YWx1ZSAmIDB4M2ZmKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNmZikgKyAweDEwMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlUG9pbnRzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2RlUG9pbnRzO1xufTtcblxudmFyIGZyb21Db2RlUG9pbnQgPSBleHBvcnRzLmZyb21Db2RlUG9pbnQgPSBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KCkge1xuICAgIGlmIChTdHJpbmcuZnJvbUNvZGVQb2ludCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQuYXBwbHkoU3RyaW5nLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgY29kZVVuaXRzID0gW107XG5cbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIGNvZGVQb2ludCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDAsIGNvZGVQb2ludCAlIDB4NDAwICsgMHhkYzAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IDB4NDAwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlVW5pdHMpO1xuICAgICAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxudmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbmZvciAodmFyIGkgPSAwOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xufVxuXG52YXIgZGVjb2RlID0gZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUoYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJhc2U2NC5sZW5ndGggKiAwLjc1LFxuICAgICAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLFxuICAgICAgICBpID0gdm9pZCAwLFxuICAgICAgICBwID0gMCxcbiAgICAgICAgZW5jb2RlZDEgPSB2b2lkIDAsXG4gICAgICAgIGVuY29kZWQyID0gdm9pZCAwLFxuICAgICAgICBlbmNvZGVkMyA9IHZvaWQgMCxcbiAgICAgICAgZW5jb2RlZDQgPSB2b2lkIDA7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gJz0nKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBidWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuc2xpY2UgIT09ICd1bmRlZmluZWQnID8gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCkgOiBuZXcgQXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICB2YXIgYnl0ZXMgPSBBcnJheS5pc0FycmF5KGJ1ZmZlcikgPyBidWZmZXIgOiBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGVuY29kZWQxID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgZW5jb2RlZDMgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDIpXTtcbiAgICAgICAgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDMpXTtcblxuICAgICAgICBieXRlc1twKytdID0gZW5jb2RlZDEgPDwgMiB8IGVuY29kZWQyID4+IDQ7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDIgJiAxNSkgPDwgNCB8IGVuY29kZWQzID4+IDI7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDMgJiAzKSA8PCA2IHwgZW5jb2RlZDQgJiA2MztcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmZmVyO1xufTtcblxudmFyIHBvbHlVaW50MTZBcnJheSA9IGV4cG9ydHMucG9seVVpbnQxNkFycmF5ID0gZnVuY3Rpb24gcG9seVVpbnQxNkFycmF5KGJ1ZmZlcikge1xuICAgIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoO1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsZW5ndGg7IF9pICs9IDIpIHtcbiAgICAgICAgYnl0ZXMucHVzaChidWZmZXJbX2kgKyAxXSA8PCA4IHwgYnVmZmVyW19pXSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn07XG5cbnZhciBwb2x5VWludDMyQXJyYXkgPSBleHBvcnRzLnBvbHlVaW50MzJBcnJheSA9IGZ1bmN0aW9uIHBvbHlVaW50MzJBcnJheShidWZmZXIpIHtcbiAgICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBsZW5ndGg7IF9pMiArPSA0KSB7XG4gICAgICAgIGJ5dGVzLnB1c2goYnVmZmVyW19pMiArIDNdIDw8IDI0IHwgYnVmZmVyW19pMiArIDJdIDw8IDE2IHwgYnVmZmVyW19pMiArIDFdIDw8IDggfCBidWZmZXJbX2kyXSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0b0NvZGVQb2ludHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfVXRpbC50b0NvZGVQb2ludHM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmcm9tQ29kZVBvaW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1V0aWwuZnJvbUNvZGVQb2ludDtcbiAgfVxufSk7XG5cbnZhciBfTGluZUJyZWFrID0gcmVxdWlyZSgnLi9MaW5lQnJlYWsnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5lQnJlYWtlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9MaW5lQnJlYWsuTGluZUJyZWFrZXI7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnS3dBQUFBQUFBQUFBQ0E0QUlEb0FBUEFmQUFBQ0FBQUFBQUFJQUJBQUdBQkFBRWdBVUFCWUFGNEFaZ0JlQUdZQVlBQm9BSEFBZUFCZUFHWUFmQUNFQUlBQWlBQ1FBSmdBb0FDb0FLMEF0UUM5QU1VQVhnQm1BRjRBWmdCZUFHWUF6UURWQUY0QVpnRFJBTmtBM2dEbUFPd0E5QUQ4QUFRQkRBRVVBUm9CSWdHQUFJZ0FKd0V2QVRjQlB3RkZBVTBCVEFGVUFWd0JaQUZzQVhNQmV3R0RBVEFBaXdHVEFac0JvZ0drQWF3QnRBRzhBY0lCeWdIU0Fkb0I0QUhvQWZBQitBSCtBUVlDRGdJV0F2NEJIZ0ltQWk0Q05nSStBa1VDVFFKVEFsc0NZd0pyQW5FQ2VRS0JBazBDaVFLUkFwa0NvUUtvQXJBQ3VBTEFBc1FDekFJd0FOUUMzQUxrQWpBQTdBTDBBdndDQVFNSkF4QURHQU13QUNBREpnTXVBellEUGdPQUFFWURTZ05TQTFJRFVnTmFBMW9EWUFOaUEySURnQUNBQUdvRGdBQnlBM1lEZmdPQUFJUURnQUNLQTVJRG1nT0FBSUFBb2dPcUE0QUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFLOER0d09BQUlBQXZ3UEhBODhEMXdQZkF5QUQ1d1BzQS9RRC9BT0FBSUFBQkFRTUJCSUVnQUFXQkI0RUpnUXVCRE1FSUFNN0JFRUVYZ0JKQkNBRFVRUlpCR0VFYVFRd0FEQUFjUVErQVhrRWdRU0pCSkVFZ0FDWUJJQUFvQVNvQks4RXR3UXdBTDhFeFFTQUFJQUFnQUNBQUlBQWdBQ2dBTTBFWGdCZUFGNEFYZ0JlQUY0QVhnQmVBTlVFWGdEWkJPRUVYZ0RwQlBFRStRUUJCUWtGRVFVWkJTRUZLUVV4QlRVRlBRVkZCVXdGVkFWY0JWNEFZd1ZlQUdzRmN3VjdCWU1GaXdXU0JWNEFtZ1dnQmFjRlhnQmVBRjRBWGdCZUFLc0ZYZ0N5QmJFRnVnVzdCY0lGd2dYSUJjSUZ3Z1hRQmRRRjNBWGtCZXNGOHdYN0JRTUdDd1lUQmhzR0l3WXJCak1HT3daZUFEOEdSd1pOQmw0QVZBWmJCbDRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFHTUdYZ0JxQm5FR1hnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQjVCb0FHNHdTR0JvNEdrd2FBQUlBREhnUjVBRjRBWGdCZUFKc0dnQUJHQTRBQW93YXJCck1Hc3dhZ0FMc0d3d2JMQmpBQTB3YmFCdG9HM1FiYUJ0b0cyZ2JhQnRvRzJnYmxCdXNHOHdiN0JnTUhDd2NUQnhzSEN3Y2pCeXNITUFjMUJ6VUhPZ2RDQjlvR1NnZFNCMW9IWUFmYUJsb0hhQWZhQmxJSDJnYmFCdG9HMmdiYUJ0b0cyZ2JhQmpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhiUWRlQUY0QU5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWQxQjMwSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjRNSDJnYUtCNjhFZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSThIbHdkZUFKOEhwd2VBQUlBQXJ3ZTNCMTRBWGdDL0I4VUh5Z2N3QU5BSDJBZmdCNEFBNkFmd0J6NEIrQWNBQ0Z3QkNBZ1BDQmNJb2dFWUFSOElKd2lBQUM4SU53Zy9DQ0FEUndoUENGY0lYd2huQ0VvREdnU0FBSUFBZ0FCdkNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJaEFpTENJNElNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2d3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCNTRJTlFjMUI2SUkyZ2FxQ0xJSXVnaUFBSUFBdmdqR0NJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUF5d2lIQVlBQTB3aUFBTmtJM1FqbENPMEk5QWo4Q0lBQWdBQ0FBQUlKQ2drU0NSb0pJZ2tuQ1RZSEx3azNDWllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lBQUlBQUFBRkFBWGdCZUFHQUFjQUJlQUh3QVFBQ1FBS0FBclFDOUFKNEFYZ0JlQUUwQTNnQlJBTjRBN0FEOEFNd0JHZ0VBQUtjQk53RUZBVXdCWEFGNFFraENtRUtuQXJjQ2dBSEhBc0FCejRMQUFjQUJ3QUhBQWQrQzZBQm9BRytDLzRMQUFjQUJ3QUhBQWMrREY0TUFBY0FCNTRNM2d3ZURWNE5uZzNlRGFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BRWVEcUFCVmc2V0RxQUJvUTZnQWFBQm9BSFhEdmNPTncvM0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRG5jUEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUI3Y1BQd2xHQ1U0Sk1BQ0FBSUFBZ0FCV0NWNEpZUW1BQUdrSmNBbDRDWHdKZ0Frd0FEQUFNQUF3QUlnSmdBQ0xDWk1KZ0FDWkNaOEpvd21yQ1lBQXN3a3dBRjRBWGdCOEFJQUF1d2tBQk1NSnlRbUFBTTRKZ0FEVkNUQUFNQUF3QURBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXF3WVdCTmtJTUFBd0FEQUFNQURkQ2VBSjZBbnVDUjRFOWdrd0FQNEpCUW9OQ2pBQU1BQ0FBQlVLMHdpQUFCMEtKQW9zQ2pRS2dBQXdBRHdLUXdxQUFFc0t2UW1kQ1ZNS1d3b3dBREFBZ0FDQUFMY0VNQUNBQUdNS2dBQnJDakFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBZUJEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlrRVBRRnpDbm9LaVFTQ0Nvb0trQXFKQkpnS29BcWtDb2tFR0FHc0NyUUt2QXJCQ2pBQU1BREpDdEVLRlFIWkN1RUsvZ0hwQ3ZFS01BQXdBREFBTUFDQUFJd0UrUW93QUlBQVB3RUJDekFBTUFBd0FEQUFNQUNBQUFrTEVRc3dBSUFBUHdFWkN5RUxnQUFPQ0NrTE1BQXhDemtMTUFBd0FEQUFNQUF3QURBQVhnQmVBRUVMTUFBd0FEQUFNQUF3QURBQU1BQXdBRWtMVFF0VkM0QUFYQXRrQzRBQWlRa3dBREFBTUFBd0FEQUFNQUF3QURBQWJBdHhDM2tMZ0F1RkM0c0xNQUF3QUpNTGx3dWZDekFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFwd3N3QURBQU1BQ0FBSUFBZ0FDdkM0QUFnQUNBQUlBQWdBQ0FBTGNMTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUF2d3VBQU1jTGdBQ0FBSUFBZ0FDQUFJQUF5Z3VBQUlBQWdBQ0FBSUFBMFFzd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFOa0xnQUNBQUlBQTRBc3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDSkNSNEU2QXN3QURBQWh3SHdDNEFBK0FzQURBZ01FQXd3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUNBQUlBQUdBd2REQ1VNTUFBd0FDME1OUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUXcxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVIUFF3d0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURVSE5RYzFCelVITlFjMUJ6VUhOUWMyQnpBQU1BQTVERFVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFkRkREQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQWdBQ0FBSUFBVFF4U0RGb01NQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FGNEFYZ0JlQUY0QVhnQmVBRjRBWWd4ZUFHb01YZ0J4REhrTWZ3eGVBSVVNWGdCZUFJME1NQUF3QURBQU1BQXdBRjRBWGdDVkRKME1NQUF3QURBQU1BQmVBRjRBcFF4ZUFLc01zd3k3REY0QXdneTlETW9NWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdEUkROa01lUUJxQ2VBTTNBeDhBT1lNN0F6MERQZ01YZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdDZ0FBQU5vQUFIRFE0TkZnMHdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUFlRFNZTk1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlBQWdBQ0FBSUFBZ0FDQUFDNE5NQUJlQUY0QU5nMHdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBRDROUmcxT0RWWU5YZzFtRFRBQWJRMHdBREFBTUFBd0FEQUFNQUF3QURBQTJnYmFCdG9HMmdiYUJ0b0cyZ2JhQm5VTmVnM0NCWUFOd2dXRkRkb0dqQTNhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYVVEWndOcEEyb0Rkb0cyZ2F3RGJjTnZ3M0hEZG9HMmdiUERkWU4zQTNmRGVZTjJnYnNEZk1OMmdiYUJ2b04vZzNhQmdZT0RnN2FCbDRBWGdCZUFCWU9YZ0JlQUNVRzJnWWVEbDRBSkE1ZUFDd08ydzNhQnRvR01RNDVEdG9HMmdiYUJ0b0dRUTdhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnWkpEalVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCMUVPMmdZMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWRaRGpVSE5RYzFCelVITlFjMUIyRU9OUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhhQTQxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCM0FPMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdZMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCMkVPMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdaSkR0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJra09lQTZnQUtBQW9BQXdBREFBTUFBd0FLQUFvQUNnQUtBQW9BQ2dBS0FBZ0E0d0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUQvL3dRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQUF3QUJBQUVBQWdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBS0FCTUFGd0FlQUJzQUdnQWVBQmNBRmdBU0FCNEFHd0FZQUE4QUdBQWNBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBR0FBWUFCNEFIZ0FlQUJNQUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUZnQWJBQklBSGdBZUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCWUFEUUFSQUI0QUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFVQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFrQUZnQWFBQnNBR3dBYkFCNEFIUUFkQUI0QVR3QVhBQjRBRFFBZUFCNEFHZ0FiQUU4QVR3QU9BRkFBSFFBZEFCMEFUd0JQQUJjQVR3QlBBRThBRmdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBSGdBZUFCNEFVQUJRQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBZUFGQUFUd0JBQUU4QVR3QlBBRUFBVHdCUUFGQUFUd0JRQUI0QUhnQWVBQjRBSGdBZUFCMEFIUUFkQUIwQUhnQWRBQjRBRGdCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBSkFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFrQUNRQUpBQWtBQ1FBSkFBa0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QUt3QXJBRkFBVUFCUUFGQUFHQUJRQUNzQUt3QXJBQ3NBSGdBZUFGQUFIZ0JRQUZBQVVBQXJBRkFBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FZQUEwQUt3QXJBQjRBSGdBYkFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFEUUFFQUI0QUJBQUVBQjRBQkFBRUFCTUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFLd0FyQUNzQUt3QXJBRllBVmdCV0FCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUdnQWFBQm9BR0FBWUFCNEFIZ0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUV3QUVBQ3NBRXdBVEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUJvQUdRQVpBQjRBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQk1BVUFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQlFBRkFBQkFBRUFCNEFCQUFFQUFRQUJBQlFBRkFBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUFlQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUZBQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFCNEFIZ0FZQUJNQVVBQXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFVQUFFQUFRQUJBQUVBQVFBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBckFDc0FIZ0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QXJBQ3NBVUFCUUFGQUFVQUFyQUNzQUJBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQVFBQkFBckFDc0FCQUFFQUFRQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQXJBQ3NBS3dBckFGQUFVQUFyQUZBQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQUdnQWFBRkFBVUFCUUFGQUFVQUJNQUI0QUd3QlFBQjRBS3dBckFDc0FCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFGQUFVQUFyQUZBQVVBQXJBQ3NBQkFBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFBUUFCQUFyQUNzQUJBQUVBQVFBS3dBckFDc0FCQUFyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QUVBQVFBVUFCUUFGQUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUFyQUZBQVVBQlFBRkFBVUFBckFDc0FCQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFLd0FyQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBZUFCc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBS3dBckFBUUFCQUFyQUNzQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBckFDc0FLd0FyQUZBQVVBQXJBRkFBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QWVBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dCUUFGQUFVQUFyQUZBQVVBQlFBRkFBS3dBckFDc0FVQUJRQUNzQVVBQXJBRkFBVUFBckFDc0FLd0JRQUZBQUt3QXJBQ3NBVUFCUUFGQUFLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBS3dBckFDc0FCQUFFQUFRQUt3QUVBQVFBQkFBRUFDc0FLd0JRQUNzQUt3QXJBQ3NBS3dBckFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUJzQUhnQXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBckFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUI0QVVBQUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFDc0FLd0FFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFGQUFLd0JRQUZBQUJBQUVBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFCUUFCNEFLd0FyQUNzQUt3QlFBRkFBVUFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQm9BVUFCUUFGQUFVQUJRQUZBQUt3QXJBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FFQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQVFBQkFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFGd0FYQUFxQUNvQUtnQXFBQ29BS2dBcUFDc0FLd0FyQUNzQUd3QmNBRndBWEFCY0FGd0FYQUJjQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FlQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQURRQU5BQ3NBS3dBckFDc0FLd0JjQUZ3QUt3QmNBQ3NBS3dCY0FGd0FLd0JjQUNzQUt3QmNBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBS3dCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBWEFCY0FGd0FLd0JjQUNzQVhBQXJBQ3NBWEFCY0FDc0FYQUJjQUZ3QVhBQXFBRndBWEFBcUFDb0FLZ0FxQUNvQUtnQXJBQ29BS2dCY0FDc0FLd0JjQUZ3QVhBQmNBRndBS3dCY0FDc0FLZ0FxQUNvQUtnQXFBQ29BS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUZ3QVhBQmNBRndBVUFBT0FBNEFEZ0FPQUI0QURnQU9BQWtBRGdBT0FBMEFDUUFUQUJNQUV3QVRBQk1BQ1FBZUFCTUFIZ0FlQUI0QUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQU5BQVFBSGdBRUFCNEFCQUFXQUJFQUZnQVJBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU5BQVFBQkFBRUFBUUFCQUFOQUFRQUJBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FEUUFOQUI0QUhnQWVBQjRBSGdBZUFBUUFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFCNEFEZ0FPQUEwQURnQWVBQjRBSGdBZUFCNEFDUUFKQUNzQUt3QXJBQ3NBS3dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFGd0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FOQUEwQUhnQWVBQjRBSGdCY0FGd0FYQUJjQUZ3QVhBQXFBQ29BS2dBcUFGd0FYQUJjQUZ3QUtnQXFBQ29BWEFBcUFDb0FLZ0JjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0JjQUZ3QVhBQXFBQ29BS2dBcUFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BWEFBcUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLZ0FxQUNvQUtnQXFBQ29BVUFCUUFGQUFVQUJRQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0JRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBRkFBVUFCUUFGQUFXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FFQUFRQUJBQWVBQTBBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FOQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCWUFFUUFyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRFFBTkFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBMEFEUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BRFFBTkFCVUFYQUFOQUI0QURRQWJBRndBS2dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBVEFCTUFEUUFOQUE0QUhnQVRBQk1BSGdBRUFBUUFCQUFKQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBZUFDc0FLd0FyQUJNQUV3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBS3dCY0FGd0FYQUJjQUZ3QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FDc0FLd0FyQUNzQVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JjQUNzQUt3QXJBQ29BS2dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFDc0FLd0FlQUI0QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBckFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FyQUNzQUJBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FLZ0FxQUNvQUtnQXFBQ29BS2dCY0FDb0FLZ0FxQUNvQUtnQXFBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FEUUFOQUI0QURRQU5BQTBBRFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUFRQUJBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QU5BQTBBRFFBTkFBMEFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QlFBRkFBVUFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQU5BQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUhnQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFVQUJRQUZBQUJBQlFBRkFBVUFCUUFBUUFCQUFFQUZBQVVBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQVFBQkFBRUFBUUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dCUUFDc0FVQUFyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQUhnQWVBQjRBVUFCUUFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FVQUJRQUZBQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUE0QUhnQXJBQTBBRFFBTkFBMEFEUUFOQUEwQUNRQU5BQTBBRFFBSUFBUUFDd0FFQUFRQURRQUpBQTBBRFFBTUFCMEFIUUFlQUJjQUZ3QVdBQmNBRndBWEFCWUFGd0FkQUIwQUhnQWVBQlFBRkFBVUFBMEFBUUFCQUFRQUJBQUVBQVFBQkFBSkFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBZUFCY0FGd0FkQUJVQUZRQWVBQjRBSGdBZUFCNEFIZ0FZQUJZQUVRQVZBQlVBRlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FOQUI0QURRQU5BQTBBRFFBZUFBMEFEUUFOQUFjQUhnQWVBQjRBSGdBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUNzQUt3QlBBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQVdBQkVBVHdCUUFFOEFUd0JQQUU4QVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUJZQUVRQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUd3QWJBQnNBR3dBYkFCc0FHd0FhQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYUFCc0FHd0FiQUJzQUdnQWJBQnNBR2dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQlFBQm9BSGdBZEFCNEFVQUFlQUJvQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVR3QWVBRkFBR3dBZUFCNEFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCMEFIUUFlQUZBQUhnQlFBQjRBVUFBZUFGQUFUd0JRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBVUFCUUFGQUFVQUJQQUU4QVVBQlFBRkFBVUFCUUFFOEFVQUJRQUU4QVVBQlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUUFGQUFVQUJRQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBRkFBVUFCUUFGQUFUd0FlQUI0QUt3QXJBQ3NBS3dBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZUFCMEFIUUFlQUI0QUhnQWRBQjBBSGdBZUFCMEFIZ0FlQUI0QUhRQWVBQjBBR3dBYkFCNEFIUUFlQUI0QUhnQWVBQjBBSGdBZUFCMEFIUUFkQUIwQUhnQWVBQjBBSGdBZEFCNEFIUUFkQUIwQUhRQWRBQjBBSGdBZEFCNEFIZ0FlQUI0QUhnQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjRBSGdBZEFCMEFIUUFkQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUIwQUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJRQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FXQUJFQUZnQVJBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUJQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlFBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFCMEFIUUFkQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZEFCMEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUIwQUhRQWRBQjRBSGdBZEFCNEFIZ0FkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFlQUIwQUhRQWVBQjRBSFFBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFDVUFKUUFkQUIwQUpRQWVBQ1VBSlFBbEFDQUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUhnQWVBQjRBSGdBZEFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjRBSFFBZEFCMEFIZ0FkQUNVQUhRQWRBQjRBSFFBZEFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIUUFkQUIwQUhRQWxBQjRBSlFBbEFDVUFIUUFsQUNVQUhRQWRBQjBBSlFBbEFCMEFIUUFsQUIwQUhRQWxBQ1VBSlFBZUFCMEFIZ0FlQUI0QUhnQWRBQjBBSlFBZEFCMEFIUUFkQUIwQUhRQWxBQ1VBSlFBbEFDVUFIUUFsQUNVQUlBQWxBQjBBSFFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFCNEFKUUFsQUNBQUlBQWdBQ0FBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCY0FGd0FYQUJjQUZ3QVhBQjRBRXdBVEFDVUFIZ0FlQUI0QUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBV0FCRUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRmdBUkFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJZQUVRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQUVBQVFBQkFBZUFCNEFLd0FyQUNzQUt3QXJBQk1BRFFBTkFBMEFVQUFUQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQTBBRFFBTkFBMEFEUUFOQUEwQURRQWVBQTBBRmdBTkFCNEFIZ0FYQUJjQUhnQWVBQmNBRndBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRFFBTkFBMEFEUUFUQUZBQURRQU5BQjRBRFFBTkFCNEFIZ0FlQUI0QUhnQU1BQXdBRFFBTkFBMEFIZ0FOQUEwQUZnQU5BQTBBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQ3NBS3dBckFBMEFFUUFSQUNVQUpRQkhBRmNBVndBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFDVUFKUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGUUFXQUJFQUVRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQVFBQkFBRUFBUUFCQUFFQUNVQVZ3QlhBRmNBVndBMkFDVUFKUUJYQUZjQVZ3QkhBRWNBSlFBbEFDVUFLd0JSQUZjQVVRQlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGRUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlJBRmNBVVFCWEFGRUFWd0JYQUZjQVZ3QlhBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlJBRkVBS3dBckFBUUFCQUFWQUJVQVJ3QkhBRmNBRlFCUkFGY0FVUUJYQUZFQVZ3QlJBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCUkFGY0FWd0JYQUZjQVZ3QlhBRkVBVVFCWEFGY0FWd0JYQUJVQVVRQkhBRWNBVndBckFDc0FLd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FyQUNVQUpRQlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUNzQUt3QXJBQ1VBSlFBbEFDVUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUU4QVR3QlBBRThBVHdCUEFFOEFUd0FsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRWNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRFFBVEFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFCQUFFQUFRQUJBQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFVQUJRQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQWVBQTBBRFFBTkFBMEFEUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QUhnQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFVQUJRQUZBQUJBQlFBRkFBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBSGdBZUFCb0FIZ0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEZ0FPQUJNQUV3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQlFBQTRBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFDc0FLd0FyQUFRQUhnQWVBQjRBSGdBZUFCNEFEUUFOQUEwQUhnQWVBQjRBSGdBckFGQUFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQjRBSGdCY0FGd0FYQUJjQUZ3QUtnQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBWEFCY0FGd0FYQUJjQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FIZ0FOQUEwQURRQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQVhBQXFBQ29BS2dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFGd0FLZ0FxQUNvQVhBQmNBQ29BS2dCY0FGd0FYQUJjQUZ3QUtnQXFBRndBS2dCY0FDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FDb0FLZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBMEFEUUJRQUZBQVVBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFEUUFFQUFRQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQVZBQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlVBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FLd0FyQUNzQUt3QmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BS3dBckFDc0FLd0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUZZQUJBQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBQjRBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0FyQUZZQVZnQldBRllBVmdBckFGWUFLd0JXQUZZQUt3QldBRllBS3dCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFFUUFXQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBYUFCNEFLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFHQUFSQUJFQUdBQVlBQk1BRXdBV0FCRUFGQUFyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ1VBSlFBbEFDVUFKUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQWxBQ1VBRmdBUkFDVUFKUUFsQUNVQUpRQWxBQ1VBRVFBbEFCRUFLd0FWQUJVQUV3QVRBQ1VBRmdBUkFCWUFFUUFXQUJFQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQUpRQWJBQm9BSlFBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQWNBS3dBVEFDVUFKUUFiQUJvQUpRQWxBQllBRVFBbEFDVUFFUUFsQUJFQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQlVBRlFBbEFDVUFKUUFUQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUJZQUpRQVJBQ1VBSlFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBV0FDVUFFUUFsQUJZQUVRQVJBQllBRVFBUkFCVUFWd0JSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFFY0FSd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUZjQVZ3QlhBRmNBVndCWEFDc0FLd0JYQUZjQVZ3QlhBRmNBVndBckFDc0FWd0JYQUZjQUt3QXJBQ3NBR2dBYkFDVUFKUUFsQUJzQUd3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBUUFCMEFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FEUUFOQUEwQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQUhnQWVBQjRBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBRFFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQTBBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBS3dBckFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFCQUFFQUFRQUt3QUVBQVFBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBQkFBRUFBUUFLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQURRQU5BQTBBRFFBTkFBMEFEUUFOQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBQTBBRFFBTkFBMEFEUUFOQUJRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FOQUEwQURRQU5BQTBBRFFBTkFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUFlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFlQUE0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFEUUFOQUI0QURRQWVBQVFBQkFBRUFCNEFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQU9BRkFBRFFBTkFBMEFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU5BQTBBSGdBTkFBMEFIZ0FFQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFyQUNzQUJBQUVBQ3NBS3dBRUFBUUFCQUFyQUNzQVVBQXJBQ3NBS3dBckFDc0FLd0FFQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUJBQUVBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFBMEFEUUFOQUEwQUhnQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBRFFBckFCNEFLd0FyQUFRQUJBQUVBQVFBVUFCUUFCNEFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU9BQTBBRFFBVEFCTUFIZ0FlQUI0QURRQU5BQTBBRFFBTkFBMEFEUUFOQUEwQURRQU5BQTBBRFFBTkFBMEFVQUJRQUZBQVVBQUVBQVFBS3dBckFBUUFEUUFOQUI0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXJBQ3NBS3dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FYQUJjQUEwQURRQU5BQ29BU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQU9BQjRBRFFBTkFBMEFEUUFPQUI0QUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBTkFDc0FEZ0FPQUE0QURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QU9BQk1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBRUFDc0FCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQURRQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVNBQklBRWdBUXdCREFFTUFVQUJRQUZBQVVBQkRBRkFBVUFCUUFFZ0FRd0JJQUVNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVNBQkRBRU1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCSUFFTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QU5BQTBBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFRQUJBQUVBQVFBQkFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBTkFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFEUUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRWNBUndBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FlQUFRQUJBQU5BQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdBZUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FFQUFRQUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQUVBQVFBQkFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUFyQUNzQVVBQXJBQ3NBVUFCUUFDc0FLd0JRQUZBQVVBQlFBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0JRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FlQUI0QVVBQlFBRkFBVUFCUUFDc0FVQUFyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFlQUI0QURRQU5BQTBBRFFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBRmdBV0FGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFGQUFLd0FyQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0FyQUZBQUt3QXJBQ3NBS3dCUUFDc0FVQUFyQUZBQUt3QlFBRkFBVUFBckFGQUFVQUFyQUZBQUt3QXJBRkFBS3dCUUFDc0FVQUFyQUZBQUt3QlFBQ3NBVUFCUUFDc0FVQUFyQUNzQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdBbEFDVUFKUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFlQUNVQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhnQWVBQ1VBSlFBbEFDVUFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUNVQUpRQWxBQ1VBSlFBZUFDVUFKUUFsQUNVQUpRQWdBQ0FBSUFBbEFDVUFJQUFsQUNVQUlBQWdBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJUUFoQUNFQUlRQWhBQ1VBSlFBZ0FDQUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ0FBSUFBbEFDVUFKUUFsQUNBQUpRQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWxBQ1VBSlFBZ0FDVUFKUUFsQUNVQUlBQWdBQ0FBSlFBZ0FDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFDVUFIZ0FsQUI0QUpRQWxBQ1VBSlFBbEFDQUFKUUFsQUNVQUpRQWVBQ1VBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNBQUpRQWxBQ1VBSUFBZ0FDQUFJQUFnQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRndBWEFCY0FGUUFWQUJVQUhnQWVBQjRBSGdBbEFDVUFKUUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSUFBZ0FDQUFJQUFsQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSUFBZ0FDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FLd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0EnOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIEFOR0xFID0gLyhbKy1dP1xcZCpcXC4/XFxkKykoZGVnfGdyYWR8cmFkfHR1cm4pL2k7XG5cbnZhciBwYXJzZUFuZ2xlID0gZXhwb3J0cy5wYXJzZUFuZ2xlID0gZnVuY3Rpb24gcGFyc2VBbmdsZShhbmdsZSkge1xuICAgIHZhciBtYXRjaCA9IGFuZ2xlLm1hdGNoKEFOR0xFKTtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgICAgICAgc3dpdGNoIChtYXRjaFsyXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICdkZWcnOlxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLlBJICogdmFsdWUgLyAxODA7XG4gICAgICAgICAgICBjYXNlICdncmFkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAvIDIwMCAqIHZhbHVlO1xuICAgICAgICAgICAgY2FzZSAncmFkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICBjYXNlICd0dXJuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAqIDIgKiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VCb3VuZEN1cnZlcyA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBleHBvcnRzLnBhcnNlUGF0aEZvckJvcmRlciA9IGV4cG9ydHMucGFyc2VEb2N1bWVudFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUNvbnRlbnRCb3ggPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBleHBvcnRzLnBhcnNlQm91bmRzID0gZXhwb3J0cy5Cb3VuZHMgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVmVjdG9yID0gcmVxdWlyZSgnLi9kcmF3aW5nL1ZlY3RvcicpO1xuXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xuXG52YXIgX0JlemllckN1cnZlID0gcmVxdWlyZSgnLi9kcmF3aW5nL0JlemllckN1cnZlJyk7XG5cbnZhciBfQmV6aWVyQ3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmV6aWVyQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVE9QID0gMDtcbnZhciBSSUdIVCA9IDE7XG52YXIgQk9UVE9NID0gMjtcbnZhciBMRUZUID0gMztcblxudmFyIEggPSAwO1xudmFyIFYgPSAxO1xuXG52YXIgQm91bmRzID0gZXhwb3J0cy5Cb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQm91bmRzKHgsIHksIHcsIGgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvdW5kcyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0ID0geDtcbiAgICAgICAgdGhpcy50b3AgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gdztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCb3VuZHMsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ2Zyb21DbGllbnRSZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21DbGllbnRSZWN0KGNsaWVudFJlY3QsIHNjcm9sbFgsIHNjcm9sbFkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm91bmRzKGNsaWVudFJlY3QubGVmdCArIHNjcm9sbFgsIGNsaWVudFJlY3QudG9wICsgc2Nyb2xsWSwgY2xpZW50UmVjdC53aWR0aCwgY2xpZW50UmVjdC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJvdW5kcztcbn0oKTtcblxudmFyIHBhcnNlQm91bmRzID0gZXhwb3J0cy5wYXJzZUJvdW5kcyA9IGZ1bmN0aW9uIHBhcnNlQm91bmRzKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpIHtcbiAgICByZXR1cm4gQm91bmRzLmZyb21DbGllbnRSZWN0KG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHNjcm9sbFgsIHNjcm9sbFkpO1xufTtcblxudmFyIGNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBmdW5jdGlvbiBjYWxjdWxhdGVQYWRkaW5nQm94KGJvdW5kcywgYm9yZGVycykge1xuICAgIHJldHVybiBuZXcgQm91bmRzKGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgYm91bmRzLndpZHRoIC0gKGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIGJvdW5kcy5oZWlnaHQgLSAoYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoKSk7XG59O1xuXG52YXIgY2FsY3VsYXRlQ29udGVudEJveCA9IGV4cG9ydHMuY2FsY3VsYXRlQ29udGVudEJveCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUNvbnRlbnRCb3goYm91bmRzLCBwYWRkaW5nLCBib3JkZXJzKSB7XG4gICAgLy8gVE9ETyBzdXBwb3J0IHBlcmNlbnRhZ2UgcGFkZGluZ3NcbiAgICB2YXIgcGFkZGluZ1RvcCA9IHBhZGRpbmdbVE9QXS52YWx1ZTtcbiAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gcGFkZGluZ1tSSUdIVF0udmFsdWU7XG4gICAgdmFyIHBhZGRpbmdCb3R0b20gPSBwYWRkaW5nW0JPVFRPTV0udmFsdWU7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFkZGluZ1tMRUZUXS52YWx1ZTtcblxuICAgIHJldHVybiBuZXcgQm91bmRzKGJvdW5kcy5sZWZ0ICsgcGFkZGluZ0xlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgcGFkZGluZ1RvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCwgYm91bmRzLndpZHRoIC0gKGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCArIHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0KSwgYm91bmRzLmhlaWdodCAtIChib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGggKyBwYWRkaW5nVG9wICsgcGFkZGluZ0JvdHRvbSkpO1xufTtcblxudmFyIHBhcnNlRG9jdW1lbnRTaXplID0gZXhwb3J0cy5wYXJzZURvY3VtZW50U2l6ZSA9IGZ1bmN0aW9uIHBhcnNlRG9jdW1lbnRTaXplKGRvY3VtZW50KSB7XG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAoIWJvZHkgfHwgIWRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdVbmFibGUgdG8gZ2V0IGRvY3VtZW50IHNpemUnIDogJycpO1xuICAgIH1cbiAgICB2YXIgd2lkdGggPSBNYXRoLm1heChNYXRoLm1heChib2R5LnNjcm9sbFdpZHRoLCBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgpLCBNYXRoLm1heChib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgpLCBNYXRoLm1heChib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpKTtcblxuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heChNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCksIE1hdGgubWF4KGJvZHkub2Zmc2V0SGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0KSwgTWF0aC5tYXgoYm9keS5jbGllbnRIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKTtcblxuICAgIHJldHVybiBuZXcgQm91bmRzKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xufTtcblxudmFyIHBhcnNlUGF0aEZvckJvcmRlciA9IGV4cG9ydHMucGFyc2VQYXRoRm9yQm9yZGVyID0gZnVuY3Rpb24gcGFyc2VQYXRoRm9yQm9yZGVyKGN1cnZlcywgYm9yZGVyU2lkZSkge1xuICAgIHN3aXRjaCAoYm9yZGVyU2lkZSkge1xuICAgICAgICBjYXNlIFRPUDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMudG9wTGVmdE91dGVyLCBjdXJ2ZXMudG9wTGVmdElubmVyLCBjdXJ2ZXMudG9wUmlnaHRPdXRlciwgY3VydmVzLnRvcFJpZ2h0SW5uZXIpO1xuICAgICAgICBjYXNlIFJJR0hUOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy50b3BSaWdodE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbVJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21SaWdodElubmVyKTtcbiAgICAgICAgY2FzZSBCT1RUT006XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUGF0aEZyb21DdXJ2ZXMoY3VydmVzLmJvdHRvbVJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21SaWdodElubmVyLCBjdXJ2ZXMuYm90dG9tTGVmdE91dGVyLCBjdXJ2ZXMuYm90dG9tTGVmdElubmVyKTtcbiAgICAgICAgY2FzZSBMRUZUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy5ib3R0b21MZWZ0T3V0ZXIsIGN1cnZlcy5ib3R0b21MZWZ0SW5uZXIsIGN1cnZlcy50b3BMZWZ0T3V0ZXIsIGN1cnZlcy50b3BMZWZ0SW5uZXIpO1xuICAgIH1cbn07XG5cbnZhciBjcmVhdGVQYXRoRnJvbUN1cnZlcyA9IGZ1bmN0aW9uIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKG91dGVyMSwgaW5uZXIxLCBvdXRlcjIsIGlubmVyMikge1xuICAgIHZhciBwYXRoID0gW107XG4gICAgaWYgKG91dGVyMSBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xuICAgICAgICBwYXRoLnB1c2gob3V0ZXIxLnN1YmRpdmlkZSgwLjUsIGZhbHNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMSk7XG4gICAgfVxuXG4gICAgaWYgKG91dGVyMiBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xuICAgICAgICBwYXRoLnB1c2gob3V0ZXIyLnN1YmRpdmlkZSgwLjUsIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2gob3V0ZXIyKTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXIyIGluc3RhbmNlb2YgX0JlemllckN1cnZlMi5kZWZhdWx0KSB7XG4gICAgICAgIHBhdGgucHVzaChpbm5lcjIuc3ViZGl2aWRlKDAuNSwgdHJ1ZSkucmV2ZXJzZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoLnB1c2goaW5uZXIyKTtcbiAgICB9XG5cbiAgICBpZiAoaW5uZXIxIGluc3RhbmNlb2YgX0JlemllckN1cnZlMi5kZWZhdWx0KSB7XG4gICAgICAgIHBhdGgucHVzaChpbm5lcjEuc3ViZGl2aWRlKDAuNSwgZmFsc2UpLnJldmVyc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG59O1xuXG52YXIgY2FsY3VsYXRlQm9yZGVyQm94UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQm9yZGVyQm94UGF0aCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJvcmRlckJveFBhdGgoY3VydmVzKSB7XG4gICAgcmV0dXJuIFtjdXJ2ZXMudG9wTGVmdE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbVJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21MZWZ0T3V0ZXJdO1xufTtcblxudmFyIGNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoKGN1cnZlcykge1xuICAgIHJldHVybiBbY3VydmVzLnRvcExlZnRJbm5lciwgY3VydmVzLnRvcFJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21SaWdodElubmVyLCBjdXJ2ZXMuYm90dG9tTGVmdElubmVyXTtcbn07XG5cbnZhciBwYXJzZUJvdW5kQ3VydmVzID0gZXhwb3J0cy5wYXJzZUJvdW5kQ3VydmVzID0gZnVuY3Rpb24gcGFyc2VCb3VuZEN1cnZlcyhib3VuZHMsIGJvcmRlcnMsIGJvcmRlclJhZGl1cykge1xuICAgIHZhciB0bGggPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9MRUZUXVtIXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgdmFyIHRsdiA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX0xFRlRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgdmFyIHRyaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX1JJR0hUXVtIXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgdmFyIHRydiA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX1JJR0hUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuICAgIHZhciBicmggPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9SSUdIVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIHZhciBicnYgPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9SSUdIVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICB2YXIgYmxoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5CT1RUT01fTEVGVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIHZhciBibHYgPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9MRUZUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xuXG4gICAgdmFyIGZhY3RvcnMgPSBbXTtcbiAgICBmYWN0b3JzLnB1c2goKHRsaCArIHRyaCkgLyBib3VuZHMud2lkdGgpO1xuICAgIGZhY3RvcnMucHVzaCgoYmxoICsgYnJoKSAvIGJvdW5kcy53aWR0aCk7XG4gICAgZmFjdG9ycy5wdXNoKCh0bHYgKyBibHYpIC8gYm91bmRzLmhlaWdodCk7XG4gICAgZmFjdG9ycy5wdXNoKCh0cnYgKyBicnYpIC8gYm91bmRzLmhlaWdodCk7XG4gICAgdmFyIG1heEZhY3RvciA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGZhY3RvcnMpO1xuXG4gICAgaWYgKG1heEZhY3RvciA+IDEpIHtcbiAgICAgICAgdGxoIC89IG1heEZhY3RvcjtcbiAgICAgICAgdGx2IC89IG1heEZhY3RvcjtcbiAgICAgICAgdHJoIC89IG1heEZhY3RvcjtcbiAgICAgICAgdHJ2IC89IG1heEZhY3RvcjtcbiAgICAgICAgYnJoIC89IG1heEZhY3RvcjtcbiAgICAgICAgYnJ2IC89IG1heEZhY3RvcjtcbiAgICAgICAgYmxoIC89IG1heEZhY3RvcjtcbiAgICAgICAgYmx2IC89IG1heEZhY3RvcjtcbiAgICB9XG5cbiAgICB2YXIgdG9wV2lkdGggPSBib3VuZHMud2lkdGggLSB0cmg7XG4gICAgdmFyIHJpZ2h0SGVpZ2h0ID0gYm91bmRzLmhlaWdodCAtIGJydjtcbiAgICB2YXIgYm90dG9tV2lkdGggPSBib3VuZHMud2lkdGggLSBicmg7XG4gICAgdmFyIGxlZnRIZWlnaHQgPSBib3VuZHMuaGVpZ2h0IC0gYmx2O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wTGVmdE91dGVyOiB0bGggPiAwIHx8IHRsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCwgYm91bmRzLnRvcCwgdGxoLCB0bHYsIENPUk5FUi5UT1BfTEVGVCkgOiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCksXG4gICAgICAgIHRvcExlZnRJbm5lcjogdGxoID4gMCB8fCB0bHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBNYXRoLm1heCgwLCB0bGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgTWF0aC5tYXgoMCwgdGx2IC0gYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSwgQ09STkVSLlRPUF9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksXG4gICAgICAgIHRvcFJpZ2h0T3V0ZXI6IHRyaCA+IDAgfHwgdHJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgdG9wV2lkdGgsIGJvdW5kcy50b3AsIHRyaCwgdHJ2LCBDT1JORVIuVE9QX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoLCBib3VuZHMudG9wKSxcbiAgICAgICAgdG9wUmlnaHRJbm5lcjogdHJoID4gMCB8fCB0cnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBNYXRoLm1pbih0b3BXaWR0aCwgYm91bmRzLndpZHRoICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIHRvcFdpZHRoID4gYm91bmRzLndpZHRoICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCA/IDAgOiB0cmggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCB0cnYgLSBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIENPUk5FUi5UT1BfUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLSBib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksXG4gICAgICAgIGJvdHRvbVJpZ2h0T3V0ZXI6IGJyaCA+IDAgfHwgYnJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgYm90dG9tV2lkdGgsIGJvdW5kcy50b3AgKyByaWdodEhlaWdodCwgYnJoLCBicnYsIENPUk5FUi5CT1RUT01fUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0KSxcbiAgICAgICAgYm90dG9tUmlnaHRJbm5lcjogYnJoID4gMCB8fCBicnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBNYXRoLm1pbihib3R0b21XaWR0aCwgYm91bmRzLndpZHRoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCksIGJvdW5kcy50b3AgKyBNYXRoLm1pbihyaWdodEhlaWdodCwgYm91bmRzLmhlaWdodCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksIE1hdGgubWF4KDAsIGJyaCAtIGJvcmRlcnNbUklHSFRdLmJvcmRlcldpZHRoKSwgYnJ2IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoLCBDT1JORVIuQk9UVE9NX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoIC0gYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoKSxcbiAgICAgICAgYm90dG9tTGVmdE91dGVyOiBibGggPiAwIHx8IGJsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCwgYm91bmRzLnRvcCArIGxlZnRIZWlnaHQsIGJsaCwgYmx2LCBDT1JORVIuQk9UVE9NX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0KSxcbiAgICAgICAgYm90dG9tTGVmdElubmVyOiBibGggPiAwIHx8IGJsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBsZWZ0SGVpZ2h0LCBNYXRoLm1heCgwLCBibGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYmx2IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoLCBDT1JORVIuQk9UVE9NX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aClcbiAgICB9O1xufTtcblxudmFyIENPUk5FUiA9IHtcbiAgICBUT1BfTEVGVDogMCxcbiAgICBUT1BfUklHSFQ6IDEsXG4gICAgQk9UVE9NX1JJR0hUOiAyLFxuICAgIEJPVFRPTV9MRUZUOiAzXG59O1xuXG52YXIgZ2V0Q3VydmVQb2ludHMgPSBmdW5jdGlvbiBnZXRDdXJ2ZVBvaW50cyh4LCB5LCByMSwgcjIsIHBvc2l0aW9uKSB7XG4gICAgdmFyIGthcHBhID0gNCAqICgoTWF0aC5zcXJ0KDIpIC0gMSkgLyAzKTtcbiAgICB2YXIgb3ggPSByMSAqIGthcHBhOyAvLyBjb250cm9sIHBvaW50IG9mZnNldCBob3Jpem9udGFsXG4gICAgdmFyIG95ID0gcjIgKiBrYXBwYTsgLy8gY29udHJvbCBwb2ludCBvZmZzZXQgdmVydGljYWxcbiAgICB2YXIgeG0gPSB4ICsgcjE7IC8vIHgtbWlkZGxlXG4gICAgdmFyIHltID0geSArIHIyOyAvLyB5LW1pZGRsZVxuXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlIENPUk5FUi5UT1BfTEVGVDpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCwgeW0gLSBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtIC0gb3gsIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeSkpO1xuICAgICAgICBjYXNlIENPUk5FUi5UT1BfUklHSFQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCArIG94LCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHltIC0gb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeW0pKTtcbiAgICAgICAgY2FzZSBDT1JORVIuQk9UVE9NX1JJR0hUOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeSArIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCArIG94LCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHltKSk7XG4gICAgICAgIGNhc2UgQ09STkVSLkJPVFRPTV9MRUZUOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0gLSBveCwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5ICsgb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5KSk7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2xvbmVXaW5kb3cgPSBleHBvcnRzLkRvY3VtZW50Q2xvbmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi9Cb3VuZHMnKTtcblxudmFyIF9Qcm94eSA9IHJlcXVpcmUoJy4vUHJveHknKTtcblxudmFyIF9SZXNvdXJjZUxvYWRlciA9IHJlcXVpcmUoJy4vUmVzb3VyY2VMb2FkZXInKTtcblxudmFyIF9SZXNvdXJjZUxvYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZXNvdXJjZUxvYWRlcik7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG52YXIgX2JhY2tncm91bmQgPSByZXF1aXJlKCcuL3BhcnNpbmcvYmFja2dyb3VuZCcpO1xuXG52YXIgX0NhbnZhc1JlbmRlcmVyID0gcmVxdWlyZSgnLi9yZW5kZXJlci9DYW52YXNSZW5kZXJlcicpO1xuXG52YXIgX0NhbnZhc1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NhbnZhc1JlbmRlcmVyKTtcblxudmFyIF9Qc2V1ZG9Ob2RlQ29udGVudCA9IHJlcXVpcmUoJy4vUHNldWRvTm9kZUNvbnRlbnQnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIElHTk9SRV9BVFRSSUJVVEUgPSAnZGF0YS1odG1sMmNhbnZhcy1pZ25vcmUnO1xuXG52YXIgRG9jdW1lbnRDbG9uZXIgPSBleHBvcnRzLkRvY3VtZW50Q2xvbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvY3VtZW50Q2xvbmVyKGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgY29weUlubGluZSwgcmVuZGVyZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvY3VtZW50Q2xvbmVyKTtcblxuICAgICAgICB0aGlzLnJlZmVyZW5jZUVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb3B5U3R5bGVzID0gY29weUlubGluZTtcbiAgICAgICAgdGhpcy5pbmxpbmVJbWFnZXMgPSBjb3B5SW5saW5lO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVyID0gbmV3IF9SZXNvdXJjZUxvYWRlcjIuZGVmYXVsdChvcHRpb25zLCBsb2dnZXIsIHdpbmRvdyk7XG4gICAgICAgIHRoaXMucHNldWRvQ29udGVudERhdGEgPSB7XG4gICAgICAgICAgICBjb3VudGVyczoge30sXG4gICAgICAgICAgICBxdW90ZURlcHRoOiAwXG4gICAgICAgIH07XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSB0aGlzLmNsb25lTm9kZShlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRG9jdW1lbnRDbG9uZXIsIFt7XG4gICAgICAgIGtleTogJ2lubGluZUFsbEltYWdlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmxpbmVBbGxJbWFnZXMobm9kZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5saW5lSW1hZ2VzICYmIG5vZGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKCgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmRJbWFnZSkoc3R5bGUuYmFja2dyb3VuZEltYWdlKS5tYXAoZnVuY3Rpb24gKGJhY2tncm91bmRJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlLm1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvdXJjZUxvYWRlci5pbmxpbmVJbWFnZShiYWNrZ3JvdW5kSW1hZ2UuYXJnc1swXSkudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZyAmJiB0eXBlb2YgaW1nLnNyYyA9PT0gJ3N0cmluZycgPyAndXJsKFwiJyArIGltZy5zcmMgKyAnXCIpJyA6ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgaW1hZ2UnLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCcnICsgYmFja2dyb3VuZEltYWdlLnByZWZpeCArIGJhY2tncm91bmRJbWFnZS5tZXRob2QgKyAnKCcgKyBiYWNrZ3JvdW5kSW1hZ2UuYXJncy5qb2luKCcsJykgKyAnKScpO1xuICAgICAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gTXVsdGlwbGUgYmFja2dyb3VuZHMgc29tZWhvdyBicm9rZW4gaW4gQ2hyb21lXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBiYWNrZ3JvdW5kSW1hZ2VzLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVyLmlubGluZUltYWdlKG5vZGUuc3JjKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWcgJiYgbm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiYgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUuc3R5bGUsIGltZy5jbG9uZU5vZGUoZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZWRDaGlsZCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBsb2FkIGltYWdlJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaW5saW5lRm9udHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5saW5lRm9udHMoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShkb2N1bWVudC5zdHlsZVNoZWV0cykubWFwKGZ1bmN0aW9uIChzaGVldCkge1xuICAgICAgICAgICAgICAgIGlmIChzaGVldC5ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChzaGVldC5ocmVmKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlU3R5bGVTaGVldEZvbnRzRnJvbVRleHQodGV4dCwgc2hlZXQuaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBzdHlsZXNoZWV0JywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U2hlZXRGb250cyhzaGVldCwgZG9jdW1lbnQpO1xuICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKGZvbnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmb250KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MuY29uY2F0KGZvbnQpO1xuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGZvbnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGZvbnRzLm1hcChmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goZm9udC5mb3JtYXRzWzBdLnNyYykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YVVyaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC5mb250RmFjZS5zZXRQcm9wZXJ0eSgnc3JjJywgJ3VybChcIicgKyBkYXRhVXJpICsgJ1wiKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdAZm9udC1mYWNlIHsnICsgZm9udC5mb250RmFjZS5jc3NUZXh0ICsgJyAnO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChmb250Q3NzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGZvbnRDc3Muam9pbignXFxuJyk7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlRWxlbWVudENsb25lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRDbG9uZShub2RlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29weVN0eWxlcyAmJiBub2RlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBub2RlLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGNsb25lIGNhbnZhcyBjb250ZW50cywgY2FudmFzIGlzIHRhaW50ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wSWZyYW1lID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBpZnJhbWVLZXkgPSBnZW5lcmF0ZUlmcmFtZUtleSgpO1xuICAgICAgICAgICAgICAgIHRlbXBJZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWludGVybmFsLWlmcmFtZS1rZXknLCBpZnJhbWVLZXkpO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9wYXJzZUJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCAwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfcGFyc2VCb3VuZHMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IF9wYXJzZUJvdW5kcy5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVyLmNhY2hlW2lmcmFtZUtleV0gPSBnZXRJZnJhbWVEb2N1bWVudEVsZW1lbnQobm9kZSwgdGhpcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZW5kZXJlcihkb2N1bWVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiBfdGhpczMub3B0aW9ucy5hc3luYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93VGFpbnQ6IF90aGlzMy5vcHRpb25zLmFsbG93VGFpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVGltZW91dDogX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2luZzogX3RoaXMzLm9wdGlvbnMubG9nZ2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiBfdGhpczMub3B0aW9ucy5wcm94eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNvbnRhaW5lcjogX3RoaXMzLm9wdGlvbnMucmVtb3ZlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IF90aGlzMy5vcHRpb25zLnNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yZWlnbk9iamVjdFJlbmRlcmluZzogX3RoaXMzLm9wdGlvbnMuZm9yZWlnbk9iamVjdFJlbmRlcmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNPUlM6IF90aGlzMy5vcHRpb25zLnVzZUNPUlMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5ldyBfQ2FudmFzUmVuZGVyZXIyLmRlZmF1bHQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aDogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodDogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFk6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0sIF90aGlzMy5sb2dnZXIuY2hpbGQoaWZyYW1lS2V5KSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVDYW52YXMub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhbnZhcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lQ2FudmFzLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVDYW52YXMuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBJZnJhbWUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBJZnJhbWUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpLCBpZnJhbWVDYW52YXMpLCB0ZW1wSWZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBJZnJhbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCAmJiBub2RlLnNoZWV0ICYmIG5vZGUuc2hlZXQuY3NzUnVsZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gW10uc2xpY2UuY2FsbChub2RlLnNoZWV0LmNzc1J1bGVzLCAwKS5yZWR1Y2UoZnVuY3Rpb24gKGNzcywgcnVsZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUgJiYgcnVsZS5jc3NUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzcyArIHJ1bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjc3M7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLmxvZ2dlci5sb2coJ1VuYWJsZSB0byBhY2Nlc3MgY3NzVGV4dCBwcm9wZXJ0eScsIHJ1bGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgJycpO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNzcztcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlLmNsb25lTm9kZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nsb25lTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICAgICAgICAgICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiB0aGlzLmNyZWF0ZUVsZW1lbnRDbG9uZShub2RlKTtcblxuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgc3R5bGVCZWZvcmUgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgJzpiZWZvcmUnKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgc3R5bGVBZnRlciA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCAnOmFmdGVyJykgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWZlcmVuY2VFbGVtZW50ID09PSBub2RlICYmIGNsb25lIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9uZWRSZWZlcmVuY2VFbGVtZW50ID0gY2xvbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjbG9uZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MQm9keUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQc2V1ZG9IaWRlU3R5bGVzKGNsb25lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNvdW50ZXJzID0gKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5wYXJzZUNvdW50ZXJSZXNldCkoc3R5bGUsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRCZWZvcmUgPSAoMCwgX1BzZXVkb05vZGVDb250ZW50LnJlc29sdmVQc2V1ZG9Db250ZW50KShub2RlLCBzdHlsZUJlZm9yZSwgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkOyBjaGlsZDsgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHwgY2hpbGQubm9kZU5hbWUgIT09ICdTQ1JJUFQnICYmXG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICFjaGlsZC5oYXNBdHRyaWJ1dGUoSUdOT1JFX0FUVFJJQlVURSkgJiYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaWdub3JlRWxlbWVudHMgIT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgIXRoaXMub3B0aW9ucy5pZ25vcmVFbGVtZW50cyhjaGlsZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3B5U3R5bGVzIHx8IGNoaWxkLm5vZGVOYW1lICE9PSAnU1RZTEUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZCh0aGlzLmNsb25lTm9kZShjaGlsZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29udGVudEFmdGVyID0gKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5yZXNvbHZlUHNldWRvQ29udGVudCkobm9kZSwgc3R5bGVBZnRlciwgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XG4gICAgICAgICAgICAoMCwgX1BzZXVkb05vZGVDb250ZW50LnBvcENvdW50ZXJzKShjb3VudGVycywgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ICYmIGNsb25lIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lQWxsSW1hZ2VzKGlubGluZVBzZXVkb0VsZW1lbnQobm9kZSwgY2xvbmUsIHN0eWxlQmVmb3JlLCBjb250ZW50QmVmb3JlLCBQU0VVRE9fQkVGT1JFKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHlsZUFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lQWxsSW1hZ2VzKGlubGluZVBzZXVkb0VsZW1lbnQobm9kZSwgY2xvbmUsIHN0eWxlQWZ0ZXIsIGNvbnRlbnRBZnRlciwgUFNFVURPX0FGVEVSKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHlsZSAmJiB0aGlzLmNvcHlTdHlsZXMgJiYgIShub2RlIGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCBfVXRpbC5jb3B5Q1NTU3R5bGVzKShzdHlsZSwgY2xvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlubGluZUFsbEltYWdlcyhjbG9uZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuc2Nyb2xsVG9wICE9PSAwIHx8IG5vZGUuc2Nyb2xsTGVmdCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMucHVzaChbY2xvbmUsIG5vZGUuc2Nyb2xsTGVmdCwgbm9kZS5zY3JvbGxUb3BdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29weVN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lQ2FudmFzQ29udGVudHMobm9kZSwgY2xvbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1RFWFRBUkVBJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU0VMRUNUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLnZhbHVlID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEb2N1bWVudENsb25lcjtcbn0oKTtcblxudmFyIGdldFNoZWV0Rm9udHMgPSBmdW5jdGlvbiBnZXRTaGVldEZvbnRzKHNoZWV0LCBkb2N1bWVudCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gKHNoZWV0LmNzc1J1bGVzID8gQXJyYXkuZnJvbShzaGVldC5jc3NSdWxlcykgOiBbXSkuZmlsdGVyKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHJldHVybiBydWxlLnR5cGUgPT09IENTU1J1bGUuRk9OVF9GQUNFX1JVTEU7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgIHZhciBzcmMgPSAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnc3JjJykpO1xuICAgICAgICB2YXIgZm9ybWF0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNyY1tpXS5tZXRob2QgPT09ICd1cmwnICYmIHNyY1tpICsgMV0gJiYgc3JjW2kgKyAxXS5tZXRob2QgPT09ICdmb3JtYXQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgYS5ocmVmID0gc3JjW2ldLmFyZ3NbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZm9udCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBhLmhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3JjW2kgKyAxXS5hcmdzWzBdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3JtYXRzLnB1c2goZm9udCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVE9ETyBzZWxlY3QgY29ycmVjdCBmb3JtYXQgZm9yIGJyb3dzZXIpLFxuXG4gICAgICAgICAgICBmb3JtYXRzOiBmb3JtYXRzLmZpbHRlcihmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoL153b2ZmL2kudGVzdChmb250LmZvcm1hdClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmb250RmFjZTogcnVsZS5zdHlsZVxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoZm9udCkge1xuICAgICAgICByZXR1cm4gZm9udC5mb3JtYXRzLmxlbmd0aDtcbiAgICB9KTtcbn07XG5cbnZhciBjcmVhdGVTdHlsZVNoZWV0Rm9udHNGcm9tVGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlU2hlZXRGb250c0Zyb21UZXh0KHRleHQsIGJhc2VIcmVmKSB7XG4gICAgdmFyIGRvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCgnJyk7XG4gICAgdmFyIGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIGJhc2UuaHJlZiA9IGJhc2VIcmVmO1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaWYgKGRvYy5oZWFkKSB7XG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGJhc2UpO1xuICAgIH1cbiAgICBpZiAoZG9jLmJvZHkpIHtcbiAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZS5zaGVldCA/IGdldFNoZWV0Rm9udHMoc3R5bGUuc2hlZXQsIGRvYykgOiBbXTtcbn07XG5cbnZhciByZXN0b3JlT3duZXJTY3JvbGwgPSBmdW5jdGlvbiByZXN0b3JlT3duZXJTY3JvbGwob3duZXJEb2N1bWVudCwgeCwgeSkge1xuICAgIGlmIChvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3ICYmICh4ICE9PSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0IHx8IHkgIT09IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQpKSB7XG4gICAgICAgIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuc2Nyb2xsVG8oeCwgeSk7XG4gICAgfVxufTtcblxudmFyIGNsb25lQ2FudmFzQ29udGVudHMgPSBmdW5jdGlvbiBjbG9uZUNhbnZhc0NvbnRlbnRzKGNhbnZhcywgY2xvbmVkQ2FudmFzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGNsb25lZENhbnZhcykge1xuICAgICAgICAgICAgY2xvbmVkQ2FudmFzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgY2xvbmVkQ2FudmFzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB2YXIgY2xvbmVkQ3R4ID0gY2xvbmVkQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgY2xvbmVkQ3R4LnB1dEltYWdlRGF0YShjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCksIDAsIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9uZWRDdHguZHJhd0ltYWdlKGNhbnZhcywgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxufTtcblxudmFyIGlubGluZVBzZXVkb0VsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVQc2V1ZG9FbGVtZW50KG5vZGUsIGNsb25lLCBzdHlsZSwgY29udGVudEl0ZW1zLCBwc2V1ZG9FbHQpIHtcbiAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5jb250ZW50IHx8IHN0eWxlLmNvbnRlbnQgPT09ICdub25lJyB8fCBzdHlsZS5jb250ZW50ID09PSAnLW1vei1hbHQtY29udGVudCcgfHwgc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50ID0gY2xvbmUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sMmNhbnZhc3BzZXVkb2VsZW1lbnQnKTtcbiAgICAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykoc3R5bGUsIGFub255bW91c1JlcGxhY2VkRWxlbWVudCk7XG5cbiAgICBpZiAoY29udGVudEl0ZW1zKSB7XG4gICAgICAgIHZhciBsZW4gPSBjb250ZW50SXRlbXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNvbnRlbnRJdGVtc1tpXTtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBfUHNldWRvTm9kZUNvbnRlbnQuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLklNQUdFOlxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gY2xvbmUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9ICgwLCBfYmFja2dyb3VuZC5wYXJzZUJhY2tncm91bmRJbWFnZSkoJ3VybCgnICsgaXRlbS52YWx1ZSArICcpJylbMF0uYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIGFub255bW91c1JlcGxhY2VkRWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9Qc2V1ZG9Ob2RlQ29udGVudC5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuVEVYVDpcbiAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaXRlbS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFub255bW91c1JlcGxhY2VkRWxlbWVudC5jbGFzc05hbWUgPSBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSArICcgJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVI7XG4gICAgY2xvbmUuY2xhc3NOYW1lICs9IHBzZXVkb0VsdCA9PT0gUFNFVURPX0JFRk9SRSA/ICcgJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFIDogJyAnICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUjtcbiAgICBpZiAocHNldWRvRWx0ID09PSBQU0VVRE9fQkVGT1JFKSB7XG4gICAgICAgIGNsb25lLmluc2VydEJlZm9yZShhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQsIGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGFub255bW91c1JlcGxhY2VkRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFub255bW91c1JlcGxhY2VkRWxlbWVudDtcbn07XG5cbnZhciBVUkxfUkVHRVhQID0gL151cmxcXCgoLispXFwpJC9pO1xudmFyIFBTRVVET19CRUZPUkUgPSAnOmJlZm9yZSc7XG52YXIgUFNFVURPX0FGVEVSID0gJzphZnRlcic7XG52YXIgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgPSAnX19faHRtbDJjYW52YXNfX19wc2V1ZG9lbGVtZW50X2JlZm9yZSc7XG52YXIgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUiA9ICdfX19odG1sMmNhbnZhc19fX3BzZXVkb2VsZW1lbnRfYWZ0ZXInO1xuXG52YXIgUFNFVURPX0hJREVfRUxFTUVOVF9TVFlMRSA9ICd7XFxuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn0nO1xuXG52YXIgY3JlYXRlUHNldWRvSGlkZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVBzZXVkb0hpZGVTdHlsZXMoYm9keSkge1xuICAgIGNyZWF0ZVN0eWxlcyhib2R5LCAnLicgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSArIFBTRVVET19CRUZPUkUgKyBQU0VVRE9fSElERV9FTEVNRU5UX1NUWUxFICsgJ1xcbiAgICAgICAgIC4nICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUiArIFBTRVVET19BRlRFUiArIFBTRVVET19ISURFX0VMRU1FTlRfU1RZTEUpO1xufTtcblxudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhib2R5LCBzdHlsZXMpIHtcbiAgICB2YXIgc3R5bGUgPSBib2R5Lm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSBzdHlsZXM7XG4gICAgYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG59O1xuXG52YXIgaW5pdE5vZGUgPSBmdW5jdGlvbiBpbml0Tm9kZShfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMyksXG4gICAgICAgIGVsZW1lbnQgPSBfcmVmMlswXSxcbiAgICAgICAgeCA9IF9yZWYyWzFdLFxuICAgICAgICB5ID0gX3JlZjJbMl07XG5cbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB4O1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0geTtcbn07XG5cbnZhciBnZW5lcmF0ZUlmcmFtZUtleSA9IGZ1bmN0aW9uIGdlbmVyYXRlSWZyYW1lS2V5KCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwoRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCkudG9TdHJpbmcoMTYpO1xufTtcblxudmFyIERBVEFfVVJJX1JFR0VYUCA9IC9eZGF0YTp0ZXh0XFwvKC4rKTsoYmFzZTY0KT8sKC4qKSQvaTtcblxudmFyIGdldElmcmFtZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uIGdldElmcmFtZURvY3VtZW50RWxlbWVudChub2RlLCBvcHRpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnByb3h5ID8gKDAsIF9Qcm94eS5Qcm94eSkobm9kZS5zcmMsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGh0bWwubWF0Y2goREFUQV9VUklfUkVHRVhQKTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoWzJdID09PSAnYmFzZTY0JyA/IHdpbmRvdy5hdG9iKGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkpIDogZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUlmcmFtZUNvbnRhaW5lcihub2RlLm93bmVyRG9jdW1lbnQsICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCAwLCAwKSkudGhlbihmdW5jdGlvbiAoY2xvbmVJZnJhbWVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVXaW5kb3cgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5jb250ZW50V2luZG93O1xuICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudENsb25lID0gY2xvbmVXaW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLm9wZW4oKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLndyaXRlKGh0bWwpO1xuICAgICAgICAgICAgICAgIHZhciBpZnJhbWVMb2FkID0gaWZyYW1lTG9hZGVyKGNsb25lSWZyYW1lQ29udGFpbmVyKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpZnJhbWVMb2FkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pIDogUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG59O1xuXG52YXIgY3JlYXRlSWZyYW1lQ29udGFpbmVyID0gZnVuY3Rpb24gY3JlYXRlSWZyYW1lQ29udGFpbmVyKG93bmVyRG9jdW1lbnQsIGJvdW5kcykge1xuICAgIHZhciBjbG9uZUlmcmFtZUNvbnRhaW5lciA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnaHRtbDJjYW52YXMtY29udGFpbmVyJztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnLTEwMDAwcHgnO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICcwJztcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci53aWR0aCA9IGJvdW5kcy53aWR0aC50b1N0cmluZygpO1xuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLmhlaWdodCA9IGJvdW5kcy5oZWlnaHQudG9TdHJpbmcoKTtcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zY3JvbGxpbmcgPSAnbm8nOyAvLyBpb3Mgd29uJ3Qgc2Nyb2xsIHdpdGhvdXQgaXRcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoSUdOT1JFX0FUVFJJQlVURSwgJ3RydWUnKTtcbiAgICBpZiAoIW93bmVyRG9jdW1lbnQuYm9keSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdCb2R5IGVsZW1lbnQgbm90IGZvdW5kIGluIERvY3VtZW50IHRoYXQgaXMgZ2V0dGluZyByZW5kZXJlZCcgOiAnJyk7XG4gICAgfVxuXG4gICAgb3duZXJEb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lSWZyYW1lQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2xvbmVJZnJhbWVDb250YWluZXIpO1xufTtcblxudmFyIGlmcmFtZUxvYWRlciA9IGZ1bmN0aW9uIGlmcmFtZUxvYWRlcihjbG9uZUlmcmFtZUNvbnRhaW5lcikge1xuICAgIHZhciBjbG9uZVdpbmRvdyA9IGNsb25lSWZyYW1lQ29udGFpbmVyLmNvbnRlbnRXaW5kb3c7XG4gICAgdmFyIGRvY3VtZW50Q2xvbmUgPSBjbG9uZVdpbmRvdy5kb2N1bWVudDtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGNsb25lV2luZG93Lm9ubG9hZCA9IGNsb25lSWZyYW1lQ29udGFpbmVyLm9ubG9hZCA9IGRvY3VtZW50Q2xvbmUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudENsb25lLmJvZHkuY2hpbGROb2Rlcy5sZW5ndGggPiAwICYmIGRvY3VtZW50Q2xvbmUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjbG9uZUlmcmFtZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxudmFyIGNsb25lV2luZG93ID0gZXhwb3J0cy5jbG9uZVdpbmRvdyA9IGZ1bmN0aW9uIGNsb25lV2luZG93KG93bmVyRG9jdW1lbnQsIGJvdW5kcywgcmVmZXJlbmNlRWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCByZW5kZXJlcikge1xuICAgIHZhciBjbG9uZXIgPSBuZXcgRG9jdW1lbnRDbG9uZXIocmVmZXJlbmNlRWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCBmYWxzZSwgcmVuZGVyZXIpO1xuICAgIHZhciBzY3JvbGxYID0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcbiAgICB2YXIgc2Nyb2xsWSA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XG5cbiAgICByZXR1cm4gY3JlYXRlSWZyYW1lQ29udGFpbmVyKG93bmVyRG9jdW1lbnQsIGJvdW5kcykudGhlbihmdW5jdGlvbiAoY2xvbmVJZnJhbWVDb250YWluZXIpIHtcbiAgICAgICAgdmFyIGNsb25lV2luZG93ID0gY2xvbmVJZnJhbWVDb250YWluZXIuY29udGVudFdpbmRvdztcbiAgICAgICAgdmFyIGRvY3VtZW50Q2xvbmUgPSBjbG9uZVdpbmRvdy5kb2N1bWVudDtcblxuICAgICAgICAvKiBDaHJvbWUgZG9lc24ndCBkZXRlY3QgcmVsYXRpdmUgYmFja2dyb3VuZC1pbWFnZXMgYXNzaWduZWQgaW4gaW5saW5lIDxzdHlsZT4gc2hlZXRzIHdoZW4gZmV0Y2hlZCB0aHJvdWdoIGdldENvbXB1dGVkU3R5bGVcclxuICAgICAgICAgICAgIGlmIHdpbmRvdyB1cmwgaXMgYWJvdXQ6YmxhbmssIHdlIGNhbiBhc3NpZ24gdGhlIHVybCB0byBjdXJyZW50IGJ5IHdyaXRpbmcgb250byB0aGUgZG9jdW1lbnRcclxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgdmFyIGlmcmFtZUxvYWQgPSBpZnJhbWVMb2FkZXIoY2xvbmVJZnJhbWVDb250YWluZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xvbmVyLnNjcm9sbGVkRWxlbWVudHMuZm9yRWFjaChpbml0Tm9kZSk7XG4gICAgICAgICAgICBjbG9uZVdpbmRvdy5zY3JvbGxUbyhib3VuZHMubGVmdCwgYm91bmRzLnRvcCk7XG4gICAgICAgICAgICBpZiAoLyhpUGFkfGlQaG9uZXxpUG9kKS9nLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgKGNsb25lV2luZG93LnNjcm9sbFkgIT09IGJvdW5kcy50b3AgfHwgY2xvbmVXaW5kb3cuc2Nyb2xsWCAhPT0gYm91bmRzLmxlZnQpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQuc3R5bGUudG9wID0gLWJvdW5kcy50b3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxlZnQgPSAtYm91bmRzLmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShbY2xvbmVJZnJhbWVDb250YWluZXIsIGNsb25lci5jbG9uZWRSZWZlcmVuY2VFbGVtZW50LCBjbG9uZXIucmVzb3VyY2VMb2FkZXJdKTtcblxuICAgICAgICAgICAgdmFyIG9uY2xvbmUgPSBvcHRpb25zLm9uY2xvbmU7XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIGNsb25lV2luZG93LkhUTUxFbGVtZW50IHx8IGNsb25lci5jbG9uZWRSZWZlcmVuY2VFbGVtZW50IGluc3RhbmNlb2Ygb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5IVE1MRWxlbWVudCB8fCBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gdHlwZW9mIG9uY2xvbmUgPT09ICdmdW5jdGlvbicgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25jbG9uZShkb2N1bWVudENsb25lKTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KSA6IHJlc3VsdCA6IFByb21pc2UucmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnRXJyb3IgZmluZGluZyB0aGUgJyArIHJlZmVyZW5jZUVsZW1lbnQubm9kZU5hbWUgKyAnIGluIHRoZSBjbG9uZWQgZG9jdW1lbnQnIDogJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudENsb25lLm9wZW4oKTtcbiAgICAgICAgZG9jdW1lbnRDbG9uZS53cml0ZShzZXJpYWxpemVEb2N0eXBlKGRvY3VtZW50LmRvY3R5cGUpICsgJzxodG1sPjwvaHRtbD4nKTtcbiAgICAgICAgLy8gQ2hyb21lIHNjcm9sbHMgdGhlIHBhcmVudCBkb2N1bWVudCBmb3Igc29tZSByZWFzb24gYWZ0ZXIgdGhlIHdyaXRlIHRvIHRoZSBjbG9uZWQgd2luZG93Pz8/XG4gICAgICAgIHJlc3RvcmVPd25lclNjcm9sbChyZWZlcmVuY2VFbGVtZW50Lm93bmVyRG9jdW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICBkb2N1bWVudENsb25lLnJlcGxhY2VDaGlsZChkb2N1bWVudENsb25lLmFkb3B0Tm9kZShjbG9uZXIuZG9jdW1lbnRFbGVtZW50KSwgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICBkb2N1bWVudENsb25lLmNsb3NlKCk7XG5cbiAgICAgICAgcmV0dXJuIGlmcmFtZUxvYWQ7XG4gICAgfSk7XG59O1xuXG52YXIgc2VyaWFsaXplRG9jdHlwZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZURvY3R5cGUoZG9jdHlwZSkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICBpZiAoZG9jdHlwZSkge1xuICAgICAgICBzdHIgKz0gJzwhRE9DVFlQRSAnO1xuICAgICAgICBpZiAoZG9jdHlwZS5uYW1lKSB7XG4gICAgICAgICAgICBzdHIgKz0gZG9jdHlwZS5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3R5cGUuaW50ZXJuYWxTdWJzZXQpIHtcbiAgICAgICAgICAgIHN0ciArPSBkb2N0eXBlLmludGVybmFsU3Vic2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3R5cGUucHVibGljSWQpIHtcbiAgICAgICAgICAgIHN0ciArPSAnXCInICsgZG9jdHlwZS5wdWJsaWNJZCArICdcIic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdHlwZS5zeXN0ZW1JZCkge1xuICAgICAgICAgICAgc3RyICs9ICdcIicgKyBkb2N0eXBlLnN5c3RlbUlkICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ciArPSAnPic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSEVYMyA9IC9eIyhbYS1mMC05XXszfSkkL2k7XG52YXIgaGV4MyA9IGZ1bmN0aW9uIGhleDModmFsdWUpIHtcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChIRVgzKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFtwYXJzZUludChtYXRjaFsxXVswXSArIG1hdGNoWzFdWzBdLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdWzFdICsgbWF0Y2hbMV1bMV0sIDE2KSwgcGFyc2VJbnQobWF0Y2hbMV1bMl0gKyBtYXRjaFsxXVsyXSwgMTYpLCBudWxsXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIEhFWDYgPSAvXiMoW2EtZjAtOV17Nn0pJC9pO1xudmFyIGhleDYgPSBmdW5jdGlvbiBoZXg2KHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goSEVYNik7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBbcGFyc2VJbnQobWF0Y2hbMV0uc3Vic3RyaW5nKDAsIDIpLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdLnN1YnN0cmluZygyLCA0KSwgMTYpLCBwYXJzZUludChtYXRjaFsxXS5zdWJzdHJpbmcoNCwgNiksIDE2KSwgbnVsbF07XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBSR0IgPSAvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC87XG52YXIgcmdiID0gZnVuY3Rpb24gcmdiKHZhbHVlKSB7XG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goUkdCKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pLCBOdW1iZXIobWF0Y2hbM10pLCBudWxsXTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIFJHQkEgPSAvXnJnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZD9cXC4/XFxkKylcXHMqXFwpJC87XG52YXIgcmdiYSA9IGZ1bmN0aW9uIHJnYmEodmFsdWUpIHtcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChSR0JBKTtcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gNCkge1xuICAgICAgICByZXR1cm4gW051bWJlcihtYXRjaFsxXSksIE51bWJlcihtYXRjaFsyXSksIE51bWJlcihtYXRjaFszXSksIE51bWJlcihtYXRjaFs0XSldO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgZnJvbUFycmF5ID0gZnVuY3Rpb24gZnJvbUFycmF5KGFycmF5KSB7XG4gICAgcmV0dXJuIFtNYXRoLm1pbihhcnJheVswXSwgMjU1KSwgTWF0aC5taW4oYXJyYXlbMV0sIDI1NSksIE1hdGgubWluKGFycmF5WzJdLCAyNTUpLCBhcnJheS5sZW5ndGggPiAzID8gYXJyYXlbM10gOiBudWxsXTtcbn07XG5cbnZhciBuYW1lZENvbG9yID0gZnVuY3Rpb24gbmFtZWRDb2xvcihuYW1lKSB7XG4gICAgdmFyIGNvbG9yID0gTkFNRURfQ09MT1JTW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgcmV0dXJuIGNvbG9yID8gY29sb3IgOiBmYWxzZTtcbn07XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2xvcih2YWx1ZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3IpO1xuXG4gICAgICAgIHZhciBfcmVmID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBmcm9tQXJyYXkodmFsdWUpIDogaGV4Myh2YWx1ZSkgfHwgcmdiKHZhbHVlKSB8fCByZ2JhKHZhbHVlKSB8fCBuYW1lZENvbG9yKHZhbHVlKSB8fCBoZXg2KHZhbHVlKSB8fCBbMCwgMCwgMCwgbnVsbF0sXG4gICAgICAgICAgICBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDQpLFxuICAgICAgICAgICAgciA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgZyA9IF9yZWYyWzFdLFxuICAgICAgICAgICAgYiA9IF9yZWYyWzJdLFxuICAgICAgICAgICAgYSA9IF9yZWYyWzNdO1xuXG4gICAgICAgIHRoaXMuciA9IHI7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbG9yLCBbe1xuICAgICAgICBrZXk6ICdpc1RyYW5zcGFyZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHJhbnNwYXJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hID09PSAwO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmEgIT09IG51bGwgJiYgdGhpcy5hICE9PSAxID8gJ3JnYmEoJyArIHRoaXMuciArICcsJyArIHRoaXMuZyArICcsJyArIHRoaXMuYiArICcsJyArIHRoaXMuYSArICcpJyA6ICdyZ2IoJyArIHRoaXMuciArICcsJyArIHRoaXMuZyArICcsJyArIHRoaXMuYiArICcpJztcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb2xvcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3I7XG5cblxudmFyIE5BTUVEX0NPTE9SUyA9IHtcbiAgICB0cmFuc3BhcmVudDogWzAsIDAsIDAsIDBdLFxuICAgIGFsaWNlYmx1ZTogWzI0MCwgMjQ4LCAyNTUsIG51bGxdLFxuICAgIGFudGlxdWV3aGl0ZTogWzI1MCwgMjM1LCAyMTUsIG51bGxdLFxuICAgIGFxdWE6IFswLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgYXF1YW1hcmluZTogWzEyNywgMjU1LCAyMTIsIG51bGxdLFxuICAgIGF6dXJlOiBbMjQwLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgYmVpZ2U6IFsyNDUsIDI0NSwgMjIwLCBudWxsXSxcbiAgICBiaXNxdWU6IFsyNTUsIDIyOCwgMTk2LCBudWxsXSxcbiAgICBibGFjazogWzAsIDAsIDAsIG51bGxdLFxuICAgIGJsYW5jaGVkYWxtb25kOiBbMjU1LCAyMzUsIDIwNSwgbnVsbF0sXG4gICAgYmx1ZTogWzAsIDAsIDI1NSwgbnVsbF0sXG4gICAgYmx1ZXZpb2xldDogWzEzOCwgNDMsIDIyNiwgbnVsbF0sXG4gICAgYnJvd246IFsxNjUsIDQyLCA0MiwgbnVsbF0sXG4gICAgYnVybHl3b29kOiBbMjIyLCAxODQsIDEzNSwgbnVsbF0sXG4gICAgY2FkZXRibHVlOiBbOTUsIDE1OCwgMTYwLCBudWxsXSxcbiAgICBjaGFydHJldXNlOiBbMTI3LCAyNTUsIDAsIG51bGxdLFxuICAgIGNob2NvbGF0ZTogWzIxMCwgMTA1LCAzMCwgbnVsbF0sXG4gICAgY29yYWw6IFsyNTUsIDEyNywgODAsIG51bGxdLFxuICAgIGNvcm5mbG93ZXJibHVlOiBbMTAwLCAxNDksIDIzNywgbnVsbF0sXG4gICAgY29ybnNpbGs6IFsyNTUsIDI0OCwgMjIwLCBudWxsXSxcbiAgICBjcmltc29uOiBbMjIwLCAyMCwgNjAsIG51bGxdLFxuICAgIGN5YW46IFswLCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgZGFya2JsdWU6IFswLCAwLCAxMzksIG51bGxdLFxuICAgIGRhcmtjeWFuOiBbMCwgMTM5LCAxMzksIG51bGxdLFxuICAgIGRhcmtnb2xkZW5yb2Q6IFsxODQsIDEzNCwgMTEsIG51bGxdLFxuICAgIGRhcmtncmF5OiBbMTY5LCAxNjksIDE2OSwgbnVsbF0sXG4gICAgZGFya2dyZWVuOiBbMCwgMTAwLCAwLCBudWxsXSxcbiAgICBkYXJrZ3JleTogWzE2OSwgMTY5LCAxNjksIG51bGxdLFxuICAgIGRhcmtraGFraTogWzE4OSwgMTgzLCAxMDcsIG51bGxdLFxuICAgIGRhcmttYWdlbnRhOiBbMTM5LCAwLCAxMzksIG51bGxdLFxuICAgIGRhcmtvbGl2ZWdyZWVuOiBbODUsIDEwNywgNDcsIG51bGxdLFxuICAgIGRhcmtvcmFuZ2U6IFsyNTUsIDE0MCwgMCwgbnVsbF0sXG4gICAgZGFya29yY2hpZDogWzE1MywgNTAsIDIwNCwgbnVsbF0sXG4gICAgZGFya3JlZDogWzEzOSwgMCwgMCwgbnVsbF0sXG4gICAgZGFya3NhbG1vbjogWzIzMywgMTUwLCAxMjIsIG51bGxdLFxuICAgIGRhcmtzZWFncmVlbjogWzE0MywgMTg4LCAxNDMsIG51bGxdLFxuICAgIGRhcmtzbGF0ZWJsdWU6IFs3MiwgNjEsIDEzOSwgbnVsbF0sXG4gICAgZGFya3NsYXRlZ3JheTogWzQ3LCA3OSwgNzksIG51bGxdLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFs0NywgNzksIDc5LCBudWxsXSxcbiAgICBkYXJrdHVycXVvaXNlOiBbMCwgMjA2LCAyMDksIG51bGxdLFxuICAgIGRhcmt2aW9sZXQ6IFsxNDgsIDAsIDIxMSwgbnVsbF0sXG4gICAgZGVlcHBpbms6IFsyNTUsIDIwLCAxNDcsIG51bGxdLFxuICAgIGRlZXBza3libHVlOiBbMCwgMTkxLCAyNTUsIG51bGxdLFxuICAgIGRpbWdyYXk6IFsxMDUsIDEwNSwgMTA1LCBudWxsXSxcbiAgICBkaW1ncmV5OiBbMTA1LCAxMDUsIDEwNSwgbnVsbF0sXG4gICAgZG9kZ2VyYmx1ZTogWzMwLCAxNDQsIDI1NSwgbnVsbF0sXG4gICAgZmlyZWJyaWNrOiBbMTc4LCAzNCwgMzQsIG51bGxdLFxuICAgIGZsb3JhbHdoaXRlOiBbMjU1LCAyNTAsIDI0MCwgbnVsbF0sXG4gICAgZm9yZXN0Z3JlZW46IFszNCwgMTM5LCAzNCwgbnVsbF0sXG4gICAgZnVjaHNpYTogWzI1NSwgMCwgMjU1LCBudWxsXSxcbiAgICBnYWluc2Jvcm86IFsyMjAsIDIyMCwgMjIwLCBudWxsXSxcbiAgICBnaG9zdHdoaXRlOiBbMjQ4LCAyNDgsIDI1NSwgbnVsbF0sXG4gICAgZ29sZDogWzI1NSwgMjE1LCAwLCBudWxsXSxcbiAgICBnb2xkZW5yb2Q6IFsyMTgsIDE2NSwgMzIsIG51bGxdLFxuICAgIGdyYXk6IFsxMjgsIDEyOCwgMTI4LCBudWxsXSxcbiAgICBncmVlbjogWzAsIDEyOCwgMCwgbnVsbF0sXG4gICAgZ3JlZW55ZWxsb3c6IFsxNzMsIDI1NSwgNDcsIG51bGxdLFxuICAgIGdyZXk6IFsxMjgsIDEyOCwgMTI4LCBudWxsXSxcbiAgICBob25leWRldzogWzI0MCwgMjU1LCAyNDAsIG51bGxdLFxuICAgIGhvdHBpbms6IFsyNTUsIDEwNSwgMTgwLCBudWxsXSxcbiAgICBpbmRpYW5yZWQ6IFsyMDUsIDkyLCA5MiwgbnVsbF0sXG4gICAgaW5kaWdvOiBbNzUsIDAsIDEzMCwgbnVsbF0sXG4gICAgaXZvcnk6IFsyNTUsIDI1NSwgMjQwLCBudWxsXSxcbiAgICBraGFraTogWzI0MCwgMjMwLCAxNDAsIG51bGxdLFxuICAgIGxhdmVuZGVyOiBbMjMwLCAyMzAsIDI1MCwgbnVsbF0sXG4gICAgbGF2ZW5kZXJibHVzaDogWzI1NSwgMjQwLCAyNDUsIG51bGxdLFxuICAgIGxhd25ncmVlbjogWzEyNCwgMjUyLCAwLCBudWxsXSxcbiAgICBsZW1vbmNoaWZmb246IFsyNTUsIDI1MCwgMjA1LCBudWxsXSxcbiAgICBsaWdodGJsdWU6IFsxNzMsIDIxNiwgMjMwLCBudWxsXSxcbiAgICBsaWdodGNvcmFsOiBbMjQwLCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgbGlnaHRjeWFuOiBbMjI0LCAyNTUsIDI1NSwgbnVsbF0sXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFsyNTAsIDI1MCwgMjEwLCBudWxsXSxcbiAgICBsaWdodGdyYXk6IFsyMTEsIDIxMSwgMjExLCBudWxsXSxcbiAgICBsaWdodGdyZWVuOiBbMTQ0LCAyMzgsIDE0NCwgbnVsbF0sXG4gICAgbGlnaHRncmV5OiBbMjExLCAyMTEsIDIxMSwgbnVsbF0sXG4gICAgbGlnaHRwaW5rOiBbMjU1LCAxODIsIDE5MywgbnVsbF0sXG4gICAgbGlnaHRzYWxtb246IFsyNTUsIDE2MCwgMTIyLCBudWxsXSxcbiAgICBsaWdodHNlYWdyZWVuOiBbMzIsIDE3OCwgMTcwLCBudWxsXSxcbiAgICBsaWdodHNreWJsdWU6IFsxMzUsIDIwNiwgMjUwLCBudWxsXSxcbiAgICBsaWdodHNsYXRlZ3JheTogWzExOSwgMTM2LCAxNTMsIG51bGxdLFxuICAgIGxpZ2h0c2xhdGVncmV5OiBbMTE5LCAxMzYsIDE1MywgbnVsbF0sXG4gICAgbGlnaHRzdGVlbGJsdWU6IFsxNzYsIDE5NiwgMjIyLCBudWxsXSxcbiAgICBsaWdodHllbGxvdzogWzI1NSwgMjU1LCAyMjQsIG51bGxdLFxuICAgIGxpbWU6IFswLCAyNTUsIDAsIG51bGxdLFxuICAgIGxpbWVncmVlbjogWzUwLCAyMDUsIDUwLCBudWxsXSxcbiAgICBsaW5lbjogWzI1MCwgMjQwLCAyMzAsIG51bGxdLFxuICAgIG1hZ2VudGE6IFsyNTUsIDAsIDI1NSwgbnVsbF0sXG4gICAgbWFyb29uOiBbMTI4LCAwLCAwLCBudWxsXSxcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLCAyMDUsIDE3MCwgbnVsbF0sXG4gICAgbWVkaXVtYmx1ZTogWzAsIDAsIDIwNSwgbnVsbF0sXG4gICAgbWVkaXVtb3JjaGlkOiBbMTg2LCA4NSwgMjExLCBudWxsXSxcbiAgICBtZWRpdW1wdXJwbGU6IFsxNDcsIDExMiwgMjE5LCBudWxsXSxcbiAgICBtZWRpdW1zZWFncmVlbjogWzYwLCAxNzksIDExMywgbnVsbF0sXG4gICAgbWVkaXVtc2xhdGVibHVlOiBbMTIzLCAxMDQsIDIzOCwgbnVsbF0sXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46IFswLCAyNTAsIDE1NCwgbnVsbF0sXG4gICAgbWVkaXVtdHVycXVvaXNlOiBbNzIsIDIwOSwgMjA0LCBudWxsXSxcbiAgICBtZWRpdW12aW9sZXRyZWQ6IFsxOTksIDIxLCAxMzMsIG51bGxdLFxuICAgIG1pZG5pZ2h0Ymx1ZTogWzI1LCAyNSwgMTEyLCBudWxsXSxcbiAgICBtaW50Y3JlYW06IFsyNDUsIDI1NSwgMjUwLCBudWxsXSxcbiAgICBtaXN0eXJvc2U6IFsyNTUsIDIyOCwgMjI1LCBudWxsXSxcbiAgICBtb2NjYXNpbjogWzI1NSwgMjI4LCAxODEsIG51bGxdLFxuICAgIG5hdmFqb3doaXRlOiBbMjU1LCAyMjIsIDE3MywgbnVsbF0sXG4gICAgbmF2eTogWzAsIDAsIDEyOCwgbnVsbF0sXG4gICAgb2xkbGFjZTogWzI1MywgMjQ1LCAyMzAsIG51bGxdLFxuICAgIG9saXZlOiBbMTI4LCAxMjgsIDAsIG51bGxdLFxuICAgIG9saXZlZHJhYjogWzEwNywgMTQyLCAzNSwgbnVsbF0sXG4gICAgb3JhbmdlOiBbMjU1LCAxNjUsIDAsIG51bGxdLFxuICAgIG9yYW5nZXJlZDogWzI1NSwgNjksIDAsIG51bGxdLFxuICAgIG9yY2hpZDogWzIxOCwgMTEyLCAyMTQsIG51bGxdLFxuICAgIHBhbGVnb2xkZW5yb2Q6IFsyMzgsIDIzMiwgMTcwLCBudWxsXSxcbiAgICBwYWxlZ3JlZW46IFsxNTIsIDI1MSwgMTUyLCBudWxsXSxcbiAgICBwYWxldHVycXVvaXNlOiBbMTc1LCAyMzgsIDIzOCwgbnVsbF0sXG4gICAgcGFsZXZpb2xldHJlZDogWzIxOSwgMTEyLCAxNDcsIG51bGxdLFxuICAgIHBhcGF5YXdoaXA6IFsyNTUsIDIzOSwgMjEzLCBudWxsXSxcbiAgICBwZWFjaHB1ZmY6IFsyNTUsIDIxOCwgMTg1LCBudWxsXSxcbiAgICBwZXJ1OiBbMjA1LCAxMzMsIDYzLCBudWxsXSxcbiAgICBwaW5rOiBbMjU1LCAxOTIsIDIwMywgbnVsbF0sXG4gICAgcGx1bTogWzIyMSwgMTYwLCAyMjEsIG51bGxdLFxuICAgIHBvd2RlcmJsdWU6IFsxNzYsIDIyNCwgMjMwLCBudWxsXSxcbiAgICBwdXJwbGU6IFsxMjgsIDAsIDEyOCwgbnVsbF0sXG4gICAgcmViZWNjYXB1cnBsZTogWzEwMiwgNTEsIDE1MywgbnVsbF0sXG4gICAgcmVkOiBbMjU1LCAwLCAwLCBudWxsXSxcbiAgICByb3N5YnJvd246IFsxODgsIDE0MywgMTQzLCBudWxsXSxcbiAgICByb3lhbGJsdWU6IFs2NSwgMTA1LCAyMjUsIG51bGxdLFxuICAgIHNhZGRsZWJyb3duOiBbMTM5LCA2OSwgMTksIG51bGxdLFxuICAgIHNhbG1vbjogWzI1MCwgMTI4LCAxMTQsIG51bGxdLFxuICAgIHNhbmR5YnJvd246IFsyNDQsIDE2NCwgOTYsIG51bGxdLFxuICAgIHNlYWdyZWVuOiBbNDYsIDEzOSwgODcsIG51bGxdLFxuICAgIHNlYXNoZWxsOiBbMjU1LCAyNDUsIDIzOCwgbnVsbF0sXG4gICAgc2llbm5hOiBbMTYwLCA4MiwgNDUsIG51bGxdLFxuICAgIHNpbHZlcjogWzE5MiwgMTkyLCAxOTIsIG51bGxdLFxuICAgIHNreWJsdWU6IFsxMzUsIDIwNiwgMjM1LCBudWxsXSxcbiAgICBzbGF0ZWJsdWU6IFsxMDYsIDkwLCAyMDUsIG51bGxdLFxuICAgIHNsYXRlZ3JheTogWzExMiwgMTI4LCAxNDQsIG51bGxdLFxuICAgIHNsYXRlZ3JleTogWzExMiwgMTI4LCAxNDQsIG51bGxdLFxuICAgIHNub3c6IFsyNTUsIDI1MCwgMjUwLCBudWxsXSxcbiAgICBzcHJpbmdncmVlbjogWzAsIDI1NSwgMTI3LCBudWxsXSxcbiAgICBzdGVlbGJsdWU6IFs3MCwgMTMwLCAxODAsIG51bGxdLFxuICAgIHRhbjogWzIxMCwgMTgwLCAxNDAsIG51bGxdLFxuICAgIHRlYWw6IFswLCAxMjgsIDEyOCwgbnVsbF0sXG4gICAgdGhpc3RsZTogWzIxNiwgMTkxLCAyMTYsIG51bGxdLFxuICAgIHRvbWF0bzogWzI1NSwgOTksIDcxLCBudWxsXSxcbiAgICB0dXJxdW9pc2U6IFs2NCwgMjI0LCAyMDgsIG51bGxdLFxuICAgIHZpb2xldDogWzIzOCwgMTMwLCAyMzgsIG51bGxdLFxuICAgIHdoZWF0OiBbMjQ1LCAyMjIsIDE3OSwgbnVsbF0sXG4gICAgd2hpdGU6IFsyNTUsIDI1NSwgMjU1LCBudWxsXSxcbiAgICB3aGl0ZXNtb2tlOiBbMjQ1LCAyNDUsIDI0NSwgbnVsbF0sXG4gICAgeWVsbG93OiBbMjU1LCAyNTUsIDAsIG51bGxdLFxuICAgIHllbGxvd2dyZWVuOiBbMTU0LCAyMDUsIDUwLCBudWxsXVxufTtcblxudmFyIFRSQU5TUEFSRU5UID0gZXhwb3J0cy5UUkFOU1BBUkVOVCA9IG5ldyBDb2xvcihbMCwgMCwgMCwgMF0pOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0ZvcmVpZ25PYmplY3RSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvRm9yZWlnbk9iamVjdFJlbmRlcmVyJyk7XG5cbnZhciB0ZXN0UmFuZ2VCb3VuZHMgPSBmdW5jdGlvbiB0ZXN0UmFuZ2VCb3VuZHMoZG9jdW1lbnQpIHtcbiAgICB2YXIgVEVTVF9IRUlHSFQgPSAxMjM7XG5cbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpIHtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgaWYgKHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgdmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm91bmR0ZXN0Jyk7XG4gICAgICAgICAgICB0ZXN0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBURVNUX0hFSUdIVCArICdweCc7XG4gICAgICAgICAgICB0ZXN0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVzdEVsZW1lbnQpO1xuXG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlKHRlc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHZhciByYW5nZUJvdW5kcyA9IHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdmFyIHJhbmdlSGVpZ2h0ID0gTWF0aC5yb3VuZChyYW5nZUJvdW5kcy5oZWlnaHQpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXN0RWxlbWVudCk7XG4gICAgICAgICAgICBpZiAocmFuZ2VIZWlnaHQgPT09IFRFU1RfSEVJR0hUKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBpT1MgMTAuMyB0YWludHMgY2FudmFzIHdpdGggYmFzZTY0IGltYWdlcyB1bmxlc3MgY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xudmFyIHRlc3RCYXNlNjQgPSBmdW5jdGlvbiB0ZXN0QmFzZTY0KGRvY3VtZW50LCBzcmMpIHtcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAvLyBTaW5nbGUgcGl4ZWwgYmFzZTY0IGltYWdlIHJlbmRlcnMgZmluZSBvbiBpT1MgMTAuMz8/P1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuXG4gICAgICAgIHZhciBvbmxvYWQgPSBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpbWcub25sb2FkID0gb25sb2FkO1xuICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvbmxvYWQoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciB0ZXN0Q09SUyA9IGZ1bmN0aW9uIHRlc3RDT1JTKCkge1xuICAgIHJldHVybiB0eXBlb2YgbmV3IEltYWdlKCkuY3Jvc3NPcmlnaW4gIT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIHRlc3RSZXNwb25zZVR5cGUgPSBmdW5jdGlvbiB0ZXN0UmVzcG9uc2VUeXBlKCkge1xuICAgIHJldHVybiB0eXBlb2YgbmV3IFhNTEh0dHBSZXF1ZXN0KCkucmVzcG9uc2VUeXBlID09PSAnc3RyaW5nJztcbn07XG5cbnZhciB0ZXN0U1ZHID0gZnVuY3Rpb24gdGVzdFNWRyhkb2N1bWVudCkge1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGltZy5zcmMgPSAnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCc+PC9zdmc+JztcblxuICAgIHRyeSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBpc0dyZWVuUGl4ZWwgPSBmdW5jdGlvbiBpc0dyZWVuUGl4ZWwoZGF0YSkge1xuICAgIHJldHVybiBkYXRhWzBdID09PSAwICYmIGRhdGFbMV0gPT09IDI1NSAmJiBkYXRhWzJdID09PSAwICYmIGRhdGFbM10gPT09IDI1NTtcbn07XG5cbnZhciB0ZXN0Rm9yZWlnbk9iamVjdCA9IGZ1bmN0aW9uIHRlc3RGb3JlaWduT2JqZWN0KGRvY3VtZW50KSB7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBzaXplID0gMTAwO1xuICAgIGNhbnZhcy53aWR0aCA9IHNpemU7XG4gICAgY2FudmFzLmhlaWdodCA9IHNpemU7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiKDAsIDI1NSwgMCknO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICB2YXIgZ3JlZW5JbWFnZVNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICBpbWcuc3JjID0gZ3JlZW5JbWFnZVNyYztcbiAgICB2YXIgc3ZnID0gKDAsIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIuY3JlYXRlRm9yZWlnbk9iamVjdFNWRykoc2l6ZSwgc2l6ZSwgMCwgMCwgaW1nKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xuXG4gICAgcmV0dXJuICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmxvYWRTZXJpYWxpemVkU1ZHKShzdmcpLnRoZW4oZnVuY3Rpb24gKGltZykge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgIHZhciBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKS5kYXRhO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGdyZWVuSW1hZ2VTcmMgKyAnKSc7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gc2l6ZSArICdweCc7XG4gICAgICAgIC8vIEZpcmVmb3ggNTUgZG9lcyBub3QgcmVuZGVyIGlubGluZSA8aW1nIC8+IHRhZ3NcbiAgICAgICAgcmV0dXJuIGlzR3JlZW5QaXhlbChkYXRhKSA/ICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmxvYWRTZXJpYWxpemVkU1ZHKSgoMCwgX0ZvcmVpZ25PYmplY3RSZW5kZXJlci5jcmVhdGVGb3JlaWduT2JqZWN0U1ZHKShzaXplLCBzaXplLCAwLCAwLCBub2RlKSkgOiBQcm9taXNlLnJlamVjdChmYWxzZSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgLy8gRWRnZSBkb2VzIG5vdCByZW5kZXIgYmFja2dyb3VuZC1pbWFnZXNcbiAgICAgICAgcmV0dXJuIGlzR3JlZW5QaXhlbChjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUsIHNpemUpLmRhdGEpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn07XG5cbnZhciBGRUFUVVJFUyA9IHtcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfUkFOR0VfQk9VTkRTKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFJhbmdlQm91bmRzKGRvY3VtZW50KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9SQU5HRV9CT1VORFMnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX1NWR19EUkFXSU5HKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFNWRyhkb2N1bWVudCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfU1ZHX0RSQVdJTkcnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0JBU0U2NF9EUkFXSU5HKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdmFsdWUgPSB0ZXN0QmFzZTY0KGRvY3VtZW50LCBzcmMpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9CQVNFNjRfRFJBV0lORycsIHsgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICByZXR1cm4gX3ZhbHVlO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORygpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBBcnJheS5mcm9tID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB3aW5kb3cuZmV0Y2ggPT09ICdmdW5jdGlvbicgPyB0ZXN0Rm9yZWlnbk9iamVjdChkb2N1bWVudCkgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORycsIHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgZ2V0IFNVUFBPUlRfQ09SU19JTUFHRVMoKSB7XG4gICAgICAgICd1c2Ugc3RyaWN0JztcblxuICAgICAgICB2YXIgdmFsdWUgPSB0ZXN0Q09SUygpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0NPUlNfSU1BR0VTJywgeyB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBnZXQgU1VQUE9SVF9SRVNQT05TRV9UWVBFKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFJlc3BvbnNlVHlwZSgpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX1JFU1BPTlNFX1RZUEUnLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgLy8gJEZsb3dGaXhNZSAtIGdldC9zZXQgcHJvcGVydGllcyBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGdldCBTVVBQT1JUX0NPUlNfWEhSKCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gJ3dpdGhDcmVkZW50aWFscycgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfQ09SU19YSFInLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZFQVRVUkVTOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRm9udE1ldHJpY3MgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0FNUExFX1RFWFQgPSAnSGlkZGVuIFRleHQnO1xuXG52YXIgRm9udE1ldHJpY3MgPSBleHBvcnRzLkZvbnRNZXRyaWNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBGb250TWV0cmljcyhkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb250TWV0cmljcyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhGb250TWV0cmljcywgW3tcbiAgICAgICAgICAgICAgICBrZXk6ICdfcGFyc2VNZXRyaWNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlTWV0cmljcyhmb250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BhbiA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJvZHkgPSB0aGlzLl9kb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ05vIGRvY3VtZW50IGZvdW5kIGZvciBmb250IG1ldHJpY3MnIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250LmZvbnRGYW1pbHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZm9udFNpemUgPSBmb250LmZvbnRTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBfVXRpbC5TTUFMTF9JTUFHRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy53aWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuaGVpZ2h0ID0gMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5wYWRkaW5nID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnYmFzZWxpbmUnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRGYW1pbHkgPSBmb250LmZvbnRGYW1pbHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5wYWRkaW5nID0gJzAnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKFNBTVBMRV9URVhUKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXNlbGluZSA9IGltZy5vZmZzZXRUb3AgLSBzcGFuLm9mZnNldFRvcCArIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTQU1QTEVfVEVYVCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUubGluZUhlaWdodCA9ICdub3JtYWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnc3VwZXInO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlkZGxlID0gaW1nLm9mZnNldFRvcCAtIGNvbnRhaW5lci5vZmZzZXRUb3AgKyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGJhc2VsaW5lOiBiYXNlbGluZSwgbWlkZGxlOiBtaWRkbGUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdnZXRNZXRyaWNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWV0cmljcyhmb250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gZm9udC5mb250RmFtaWx5ICsgJyAnICsgZm9udC5mb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhW2tleV0gPSB0aGlzLl9wYXJzZU1ldHJpY3MoZm9udCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEZvbnRNZXRyaWNzO1xufSgpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy50cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBleHBvcnRzLnBhcnNlR3JhZGllbnQgPSBleHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gZXhwb3J0cy5MaW5lYXJHcmFkaWVudCA9IGV4cG9ydHMuUkFESUFMX0dSQURJRU5UX1NIQVBFID0gZXhwb3J0cy5HUkFESUVOVF9UWVBFID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfQW5nbGUgPSByZXF1aXJlKCcuL0FuZ2xlJyk7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4vTGVuZ3RoJyk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgU0lERV9PUl9DT1JORVIgPSAvXih0byApPyhsZWZ0fHRvcHxyaWdodHxib3R0b20pKCAobGVmdHx0b3B8cmlnaHR8Ym90dG9tKSk/JC9pO1xudmFyIFBFUkNFTlRBR0VfQU5HTEVTID0gL14oWystXT9cXGQqXFwuP1xcZCspJSAoWystXT9cXGQqXFwuP1xcZCspJSQvaTtcbnZhciBFTkRTX1dJVEhfTEVOR1RIID0gLyhweCl8JXwoIDApJC9pO1xudmFyIEZST01fVE9fQ09MT1JTVE9QID0gL14oZnJvbXx0b3xjb2xvci1zdG9wKVxcKCg/OihbXFxkLl0rKSglKT8sXFxzKik/KC4rPylcXCkkL2k7XG52YXIgUkFESUFMX1NIQVBFX0RFRklOSVRJT04gPSAvXlxccyooY2lyY2xlfGVsbGlwc2UpP1xccyooKD86KFtcXGQuXSspKHB4fHI/ZW18JSlcXHMqKD86KFtcXGQuXSspKHB4fHI/ZW18JSkpPyl8Y2xvc2VzdC1zaWRlfGNsb3Nlc3QtY29ybmVyfGZhcnRoZXN0LXNpZGV8ZmFydGhlc3QtY29ybmVyKT9cXHMqKD86YXRcXHMqKD86KGxlZnR8Y2VudGVyfHJpZ2h0KXwoW1xcZC5dKykocHh8cj9lbXwlKSlcXHMrKD86KHRvcHxjZW50ZXJ8Ym90dG9tKXwoW1xcZC5dKykocHh8cj9lbXwlKSkpPyg/Olxcc3wkKS9pO1xuXG52YXIgR1JBRElFTlRfVFlQRSA9IGV4cG9ydHMuR1JBRElFTlRfVFlQRSA9IHtcbiAgICBMSU5FQVJfR1JBRElFTlQ6IDAsXG4gICAgUkFESUFMX0dSQURJRU5UOiAxXG59O1xuXG52YXIgUkFESUFMX0dSQURJRU5UX1NIQVBFID0gZXhwb3J0cy5SQURJQUxfR1JBRElFTlRfU0hBUEUgPSB7XG4gICAgQ0lSQ0xFOiAwLFxuICAgIEVMTElQU0U6IDFcbn07XG5cbnZhciBMRU5HVEhfRk9SX1BPU0lUSU9OID0ge1xuICAgIGxlZnQ6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpLFxuICAgIHRvcDogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJyksXG4gICAgY2VudGVyOiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnNTAlJyksXG4gICAgcmlnaHQ6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJyksXG4gICAgYm90dG9tOiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpXG59O1xuXG52YXIgTGluZWFyR3JhZGllbnQgPSBleHBvcnRzLkxpbmVhckdyYWRpZW50ID0gZnVuY3Rpb24gTGluZWFyR3JhZGllbnQoY29sb3JTdG9wcywgZGlyZWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmVhckdyYWRpZW50KTtcblxuICAgIHRoaXMudHlwZSA9IEdSQURJRU5UX1RZUEUuTElORUFSX0dSQURJRU5UO1xuICAgIHRoaXMuY29sb3JTdG9wcyA9IGNvbG9yU3RvcHM7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG59O1xuXG52YXIgUmFkaWFsR3JhZGllbnQgPSBleHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gUmFkaWFsR3JhZGllbnQoY29sb3JTdG9wcywgc2hhcGUsIGNlbnRlciwgcmFkaXVzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhZGlhbEdyYWRpZW50KTtcblxuICAgIHRoaXMudHlwZSA9IEdSQURJRU5UX1RZUEUuUkFESUFMX0dSQURJRU5UO1xuICAgIHRoaXMuY29sb3JTdG9wcyA9IGNvbG9yU3RvcHM7XG4gICAgdGhpcy5zaGFwZSA9IHNoYXBlO1xuICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xufTtcblxudmFyIHBhcnNlR3JhZGllbnQgPSBleHBvcnRzLnBhcnNlR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZUdyYWRpZW50KGNvbnRhaW5lciwgX3JlZiwgYm91bmRzKSB7XG4gICAgdmFyIGFyZ3MgPSBfcmVmLmFyZ3MsXG4gICAgICAgIG1ldGhvZCA9IF9yZWYubWV0aG9kLFxuICAgICAgICBwcmVmaXggPSBfcmVmLnByZWZpeDtcblxuICAgIGlmIChtZXRob2QgPT09ICdsaW5lYXItZ3JhZGllbnQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVhckdyYWRpZW50KGFyZ3MsIGJvdW5kcywgISFwcmVmaXgpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ3JhZGllbnQnICYmIGFyZ3NbMF0gPT09ICdsaW5lYXInKSB7XG4gICAgICAgIC8vIFRPRE8gaGFuZGxlIGNvcnJlY3QgYW5nbGVcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZWFyR3JhZGllbnQoWyd0byBib3R0b20nXS5jb25jYXQodHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKGFyZ3Muc2xpY2UoMykpKSwgYm91bmRzLCAhIXByZWZpeCk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdyYWRpYWwtZ3JhZGllbnQnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVJhZGlhbEdyYWRpZW50KGNvbnRhaW5lciwgcHJlZml4ID09PSAnLXdlYmtpdC0nID8gdHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzKGFyZ3MpIDogYXJncywgYm91bmRzKTtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2dyYWRpZW50JyAmJiBhcmdzWzBdID09PSAncmFkaWFsJykge1xuICAgICAgICByZXR1cm4gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyh0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MoYXJncy5zbGljZSgxKSkpLCBib3VuZHMpO1xuICAgIH1cbn07XG5cbnZhciBwYXJzZUNvbG9yU3RvcHMgPSBmdW5jdGlvbiBwYXJzZUNvbG9yU3RvcHMoYXJncywgZmlyc3RDb2xvclN0b3BJbmRleCwgbGluZUxlbmd0aCkge1xuICAgIHZhciBjb2xvclN0b3BzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gZmlyc3RDb2xvclN0b3BJbmRleDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXJnc1tpXTtcbiAgICAgICAgdmFyIEhBU19MRU5HVEggPSBFTkRTX1dJVEhfTEVOR1RILnRlc3QodmFsdWUpO1xuICAgICAgICB2YXIgbGFzdFNwYWNlSW5kZXggPSB2YWx1ZS5sYXN0SW5kZXhPZignICcpO1xuICAgICAgICB2YXIgX2NvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChIQVNfTEVOR1RIID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxhc3RTcGFjZUluZGV4KSA6IHZhbHVlKTtcbiAgICAgICAgdmFyIF9zdG9wID0gSEFTX0xFTkdUSCA/IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHZhbHVlLnN1YnN0cmluZyhsYXN0U3BhY2VJbmRleCArIDEpKSA6IGkgPT09IGZpcnN0Q29sb3JTdG9wSW5kZXggPyBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKSA6IGkgPT09IGFyZ3MubGVuZ3RoIC0gMSA/IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcxMDAlJykgOiBudWxsO1xuICAgICAgICBjb2xvclN0b3BzLnB1c2goeyBjb2xvcjogX2NvbG9yLCBzdG9wOiBfc3RvcCB9KTtcbiAgICB9XG5cbiAgICB2YXIgYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzID0gY29sb3JTdG9wcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBjb2xvciA9IF9yZWYyLmNvbG9yLFxuICAgICAgICAgICAgc3RvcCA9IF9yZWYyLnN0b3A7XG5cbiAgICAgICAgdmFyIGFic29sdXRlU3RvcCA9IGxpbmVMZW5ndGggPT09IDAgPyAwIDogc3RvcCA/IHN0b3AuZ2V0QWJzb2x1dGVWYWx1ZShsaW5lTGVuZ3RoKSAvIGxpbmVMZW5ndGggOiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICBzdG9wOiBhYnNvbHV0ZVN0b3BcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHZhciBwcmV2aW91c0NvbG9yU3RvcCA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1swXS5zdG9wO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGlmIChwcmV2aW91c0NvbG9yU3RvcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIF9zdG9wMiA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tfaV0uc3RvcDtcbiAgICAgICAgICAgIGlmIChfc3RvcDIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IF9pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbbl0uc3RvcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IG4gLSBfaSArIDE7XG4gICAgICAgICAgICAgICAgdmFyIG5leHRDb2xvclN0ZXAgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbbl0uc3RvcDtcbiAgICAgICAgICAgICAgICB2YXIgc3RlcFNpemUgPSAobmV4dENvbG9yU3RlcCAtIHByZXZpb3VzQ29sb3JTdG9wKSAvIHN0ZXBzO1xuICAgICAgICAgICAgICAgIGZvciAoOyBfaSA8IG47IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb2xvclN0b3AgPSBhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbX2ldLnN0b3AgPSBwcmV2aW91c0NvbG9yU3RvcCArIHN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNDb2xvclN0b3AgPSBfc3RvcDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzO1xufTtcblxudmFyIHBhcnNlTGluZWFyR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZUxpbmVhckdyYWRpZW50KGFyZ3MsIGJvdW5kcywgaGFzUHJlZml4KSB7XG4gICAgdmFyIGFuZ2xlID0gKDAsIF9BbmdsZS5wYXJzZUFuZ2xlKShhcmdzWzBdKTtcbiAgICB2YXIgSEFTX1NJREVfT1JfQ09STkVSID0gU0lERV9PUl9DT1JORVIudGVzdChhcmdzWzBdKTtcbiAgICB2YXIgSEFTX0RJUkVDVElPTiA9IEhBU19TSURFX09SX0NPUk5FUiB8fCBhbmdsZSAhPT0gbnVsbCB8fCBQRVJDRU5UQUdFX0FOR0xFUy50ZXN0KGFyZ3NbMF0pO1xuICAgIHZhciBkaXJlY3Rpb24gPSBIQVNfRElSRUNUSU9OID8gYW5nbGUgIT09IG51bGwgPyBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihcbiAgICAvLyBpZiB0aGVyZSBpcyBhIHByZWZpeCwgdGhlIDDCsCBhbmdsZSBwb2ludHMgZHVlIEVhc3QgKGluc3RlYWQgb2YgTm9ydGggcGVyIFczQylcbiAgICBoYXNQcmVmaXggPyBhbmdsZSAtIE1hdGguUEkgKiAwLjUgOiBhbmdsZSwgYm91bmRzKSA6IEhBU19TSURFX09SX0NPUk5FUiA/IHBhcnNlU2lkZU9yQ29ybmVyKGFyZ3NbMF0sIGJvdW5kcykgOiBwYXJzZVBlcmNlbnRhZ2VBbmdsZShhcmdzWzBdLCBib3VuZHMpIDogY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSwgYm91bmRzKTtcbiAgICB2YXIgZmlyc3RDb2xvclN0b3BJbmRleCA9IEhBU19ESVJFQ1RJT04gPyAxIDogMDtcblxuICAgIC8vIFRPRE86IEZpeCBzb21lIGluYWNjdXJhY3kgd2l0aCBjb2xvciBzdG9wcyB3aXRoIHB4IHZhbHVlc1xuICAgIHZhciBsaW5lTGVuZ3RoID0gTWF0aC5taW4oKDAsIF9VdGlsLmRpc3RhbmNlKShNYXRoLmFicyhkaXJlY3Rpb24ueDApICsgTWF0aC5hYnMoZGlyZWN0aW9uLngxKSwgTWF0aC5hYnMoZGlyZWN0aW9uLnkwKSArIE1hdGguYWJzKGRpcmVjdGlvbi55MSkpLCBib3VuZHMud2lkdGggKiAyLCBib3VuZHMuaGVpZ2h0ICogMik7XG5cbiAgICByZXR1cm4gbmV3IExpbmVhckdyYWRpZW50KHBhcnNlQ29sb3JTdG9wcyhhcmdzLCBmaXJzdENvbG9yU3RvcEluZGV4LCBsaW5lTGVuZ3RoKSwgZGlyZWN0aW9uKTtcbn07XG5cbnZhciBwYXJzZVJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIGFyZ3MsIGJvdW5kcykge1xuICAgIHZhciBtID0gYXJnc1swXS5tYXRjaChSQURJQUxfU0hBUEVfREVGSU5JVElPTik7XG4gICAgdmFyIHNoYXBlID0gbSAmJiAobVsxXSA9PT0gJ2NpcmNsZScgfHwgLy8gZXhwbGljaXQgc2hhcGUgc3BlY2lmaWNhdGlvblxuICAgIG1bM10gIT09IHVuZGVmaW5lZCAmJiBtWzVdID09PSB1bmRlZmluZWQpIC8vIG9ubHkgb25lIHJhZGl1cyBjb29yZGluYXRlXG4gICAgPyBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFIDogUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0U7XG4gICAgdmFyIHJhZGl1cyA9IHt9O1xuICAgIHZhciBjZW50ZXIgPSB7fTtcblxuICAgIGlmIChtKSB7XG4gICAgICAgIC8vIFJhZGl1c1xuICAgICAgICBpZiAobVszXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByYWRpdXMueCA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bM10sIG1bNF0pLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtWzVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJhZGl1cy55ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVs1XSwgbVs2XSkuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvc2l0aW9uXG4gICAgICAgIGlmIChtWzddKSB7XG4gICAgICAgICAgICBjZW50ZXIueCA9IExFTkdUSF9GT1JfUE9TSVRJT05bbVs3XS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfSBlbHNlIGlmIChtWzhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNlbnRlci54ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVs4XSwgbVs5XSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobVsxMF0pIHtcbiAgICAgICAgICAgIGNlbnRlci55ID0gTEVOR1RIX0ZPUl9QT1NJVElPTlttWzEwXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgfSBlbHNlIGlmIChtWzExXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjZW50ZXIueSA9ICgwLCBfTGVuZ3RoLmNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KShjb250YWluZXIsIG1bMTFdLCBtWzEyXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ3JhZGllbnRDZW50ZXIgPSB7XG4gICAgICAgIHg6IGNlbnRlci54ID09PSB1bmRlZmluZWQgPyBib3VuZHMud2lkdGggLyAyIDogY2VudGVyLnguZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpLFxuICAgICAgICB5OiBjZW50ZXIueSA9PT0gdW5kZWZpbmVkID8gYm91bmRzLmhlaWdodCAvIDIgOiBjZW50ZXIueS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpXG4gICAgfTtcbiAgICB2YXIgZ3JhZGllbnRSYWRpdXMgPSBjYWxjdWxhdGVSYWRpdXMobSAmJiBtWzJdIHx8ICdmYXJ0aGVzdC1jb3JuZXInLCBzaGFwZSwgZ3JhZGllbnRDZW50ZXIsIHJhZGl1cywgYm91bmRzKTtcblxuICAgIHJldHVybiBuZXcgUmFkaWFsR3JhZGllbnQocGFyc2VDb2xvclN0b3BzKGFyZ3MsIG0gPyAxIDogMCwgTWF0aC5taW4oZ3JhZGllbnRSYWRpdXMueCwgZ3JhZGllbnRSYWRpdXMueSkpLCBzaGFwZSwgZ3JhZGllbnRDZW50ZXIsIGdyYWRpZW50UmFkaXVzKTtcbn07XG5cbnZhciBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbiA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKHJhZGlhbiwgYm91bmRzKSB7XG4gICAgdmFyIHdpZHRoID0gYm91bmRzLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuICAgIHZhciBIQUxGX1dJRFRIID0gd2lkdGggKiAwLjU7XG4gICAgdmFyIEhBTEZfSEVJR0hUID0gaGVpZ2h0ICogMC41O1xuICAgIHZhciBsaW5lTGVuZ3RoID0gTWF0aC5hYnMod2lkdGggKiBNYXRoLnNpbihyYWRpYW4pKSArIE1hdGguYWJzKGhlaWdodCAqIE1hdGguY29zKHJhZGlhbikpO1xuICAgIHZhciBIQUxGX0xJTkVfTEVOR1RIID0gbGluZUxlbmd0aCAvIDI7XG5cbiAgICB2YXIgeDAgPSBIQUxGX1dJRFRIICsgTWF0aC5zaW4ocmFkaWFuKSAqIEhBTEZfTElORV9MRU5HVEg7XG4gICAgdmFyIHkwID0gSEFMRl9IRUlHSFQgLSBNYXRoLmNvcyhyYWRpYW4pICogSEFMRl9MSU5FX0xFTkdUSDtcbiAgICB2YXIgeDEgPSB3aWR0aCAtIHgwO1xuICAgIHZhciB5MSA9IGhlaWdodCAtIHkwO1xuXG4gICAgcmV0dXJuIHsgeDA6IHgwLCB4MTogeDEsIHkwOiB5MCwgeTE6IHkxIH07XG59O1xuXG52YXIgcGFyc2VUb3BSaWdodCA9IGZ1bmN0aW9uIHBhcnNlVG9wUmlnaHQoYm91bmRzKSB7XG4gICAgcmV0dXJuIE1hdGguYWNvcyhib3VuZHMud2lkdGggLyAyIC8gKCgwLCBfVXRpbC5kaXN0YW5jZSkoYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KSAvIDIpKTtcbn07XG5cbnZhciBwYXJzZVNpZGVPckNvcm5lciA9IGZ1bmN0aW9uIHBhcnNlU2lkZU9yQ29ybmVyKHNpZGUsIGJvdW5kcykge1xuICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBjYXNlICd0byB0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDAsIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICd0byByaWdodCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSAvIDIsIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gbGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oMyAqIE1hdGguUEkgLyAyLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AgcmlnaHQnOlxuICAgICAgICBjYXNlICdyaWdodCB0b3AnOlxuICAgICAgICBjYXNlICd0byBib3R0b20gbGVmdCc6XG4gICAgICAgIGNhc2UgJ3RvIGxlZnQgYm90dG9tJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJICsgcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AgbGVmdCc6XG4gICAgICAgIGNhc2UgJ2xlZnQgdG9wJzpcbiAgICAgICAgY2FzZSAndG8gYm90dG9tIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gcmlnaHQgYm90dG9tJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJIC0gcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICdib3R0b20gbGVmdCc6XG4gICAgICAgIGNhc2UgJ2xlZnQgYm90dG9tJzpcbiAgICAgICAgY2FzZSAndG8gdG9wIHJpZ2h0JzpcbiAgICAgICAgY2FzZSAndG8gcmlnaHQgdG9wJzpcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihwYXJzZVRvcFJpZ2h0KGJvdW5kcyksIGJvdW5kcyk7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSByaWdodCc6XG4gICAgICAgIGNhc2UgJ3JpZ2h0IGJvdHRvbSc6XG4gICAgICAgIGNhc2UgJ3RvIHRvcCBsZWZ0JzpcbiAgICAgICAgY2FzZSAndG8gbGVmdCB0b3AnOlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDIgKiBNYXRoLlBJIC0gcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICBjYXNlICd0byBib3R0b20nOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEksIGJvdW5kcyk7XG4gICAgfVxufTtcblxudmFyIHBhcnNlUGVyY2VudGFnZUFuZ2xlID0gZnVuY3Rpb24gcGFyc2VQZXJjZW50YWdlQW5nbGUoYW5nbGUsIGJvdW5kcykge1xuICAgIHZhciBfYW5nbGUkc3BsaXQkbWFwID0gYW5nbGUuc3BsaXQoJyAnKS5tYXAocGFyc2VGbG9hdCksXG4gICAgICAgIF9hbmdsZSRzcGxpdCRtYXAyID0gX3NsaWNlZFRvQXJyYXkoX2FuZ2xlJHNwbGl0JG1hcCwgMiksXG4gICAgICAgIGxlZnQgPSBfYW5nbGUkc3BsaXQkbWFwMlswXSxcbiAgICAgICAgdG9wID0gX2FuZ2xlJHNwbGl0JG1hcDJbMV07XG5cbiAgICB2YXIgcmF0aW8gPSBsZWZ0IC8gMTAwICogYm91bmRzLndpZHRoIC8gKHRvcCAvIDEwMCAqIGJvdW5kcy5oZWlnaHQpO1xuXG4gICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguYXRhbihpc05hTihyYXRpbykgPyAxIDogcmF0aW8pICsgTWF0aC5QSSAvIDIsIGJvdW5kcyk7XG59O1xuXG52YXIgZmluZENvcm5lciA9IGZ1bmN0aW9uIGZpbmRDb3JuZXIoYm91bmRzLCB4LCB5LCBjbG9zZXN0KSB7XG4gICAgdmFyIGNvcm5lcnMgPSBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogYm91bmRzLmhlaWdodCB9LCB7IHg6IGJvdW5kcy53aWR0aCwgeTogMCB9LCB7IHg6IGJvdW5kcy53aWR0aCwgeTogYm91bmRzLmhlaWdodCB9XTtcblxuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY29ybmVycy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXQsIGNvcm5lcikge1xuICAgICAgICB2YXIgZCA9ICgwLCBfVXRpbC5kaXN0YW5jZSkoeCAtIGNvcm5lci54LCB5IC0gY29ybmVyLnkpO1xuICAgICAgICBpZiAoY2xvc2VzdCA/IGQgPCBzdGF0Lm9wdGltdW1EaXN0YW5jZSA6IGQgPiBzdGF0Lm9wdGltdW1EaXN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvcHRpbXVtQ29ybmVyOiBjb3JuZXIsXG4gICAgICAgICAgICAgICAgb3B0aW11bURpc3RhbmNlOiBkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXQ7XG4gICAgfSwge1xuICAgICAgICBvcHRpbXVtRGlzdGFuY2U6IGNsb3Nlc3QgPyBJbmZpbml0eSA6IC1JbmZpbml0eSxcbiAgICAgICAgb3B0aW11bUNvcm5lcjogbnVsbFxuICAgIH0pLm9wdGltdW1Db3JuZXI7XG59O1xuXG52YXIgY2FsY3VsYXRlUmFkaXVzID0gZnVuY3Rpb24gY2FsY3VsYXRlUmFkaXVzKGV4dGVudCwgc2hhcGUsIGNlbnRlciwgcmFkaXVzLCBib3VuZHMpIHtcbiAgICB2YXIgeCA9IGNlbnRlci54O1xuICAgIHZhciB5ID0gY2VudGVyLnk7XG4gICAgdmFyIHJ4ID0gMDtcbiAgICB2YXIgcnkgPSAwO1xuXG4gICAgc3dpdGNoIChleHRlbnQpIHtcbiAgICAgICAgY2FzZSAnY2xvc2VzdC1zaWRlJzpcbiAgICAgICAgICAgIC8vIFRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgc28gdGhhdCB0aGF0IGl0IGV4YWN0bHkgbWVldHMgdGhlIHNpZGUgb2YgdGhlIGdyYWRpZW50IGJveCBjbG9zZXN0IHRvIHRoZSBncmFkaWVudOKAmXMgY2VudGVyLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIGl0IGV4YWN0bHkgbWVldHMgdGhlIGNsb3Nlc3Qgc2lkZSBpbiBlYWNoIGRpbWVuc2lvbi5cbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1pbihNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCksIE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkVMTElQU0UpIHtcbiAgICAgICAgICAgICAgICByeCA9IE1hdGgubWluKE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XG4gICAgICAgICAgICAgICAgcnkgPSBNYXRoLm1pbihNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2Nsb3Nlc3QtY29ybmVyJzpcbiAgICAgICAgICAgIC8vIFRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgc28gdGhhdCB0aGF0IGl0IHBhc3NlcyB0aHJvdWdoIHRoZSBjb3JuZXIgb2YgdGhlIGdyYWRpZW50IGJveCBjbG9zZXN0IHRvIHRoZSBncmFkaWVudOKAmXMgY2VudGVyLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIHRoZSBlbmRpbmcgc2hhcGUgaXMgZ2l2ZW4gdGhlIHNhbWUgYXNwZWN0LXJhdGlvIGl0IHdvdWxkIGhhdmUgaWYgY2xvc2VzdC1zaWRlIHdlcmUgc3BlY2lmaWVkLlxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWluKCgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSAtIGJvdW5kcy5oZWlnaHQpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIHJhdGlvIHJ5L3J4ICh3aGljaCBpcyB0byBiZSB0aGUgc2FtZSBhcyBmb3IgXCJjbG9zZXN0LXNpZGVcIilcbiAgICAgICAgICAgICAgICB2YXIgYyA9IE1hdGgubWluKE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpIC8gTWF0aC5taW4oTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICB2YXIgY29ybmVyID0gZmluZENvcm5lcihib3VuZHMsIHgsIHksIHRydWUpO1xuICAgICAgICAgICAgICAgIHJ4ID0gKDAsIF9VdGlsLmRpc3RhbmNlKShjb3JuZXIueCAtIHgsIChjb3JuZXIueSAtIHkpIC8gYyk7XG4gICAgICAgICAgICAgICAgcnkgPSBjICogcng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmYXJ0aGVzdC1zaWRlJzpcbiAgICAgICAgICAgIC8vIFNhbWUgYXMgY2xvc2VzdC1zaWRlLCBleGNlcHQgdGhlIGVuZGluZyBzaGFwZSBpcyBzaXplZCBiYXNlZCBvbiB0aGUgZmFydGhlc3Qgc2lkZShzKVxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWF4KE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSwgTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIHJ4ID0gTWF0aC5tYXgoTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcbiAgICAgICAgICAgICAgICByeSA9IE1hdGgubWF4KE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZmFydGhlc3QtY29ybmVyJzpcbiAgICAgICAgICAgIC8vIFNhbWUgYXMgY2xvc2VzdC1jb3JuZXIsIGV4Y2VwdCB0aGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIGJhc2VkIG9uIHRoZSBmYXJ0aGVzdCBjb3JuZXIuXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2hhcGUgaXMgYW4gZWxsaXBzZSwgdGhlIGVuZGluZyBzaGFwZSBpcyBnaXZlbiB0aGUgc2FtZSBhc3BlY3QgcmF0aW8gaXQgd291bGQgaGF2ZSBpZiBmYXJ0aGVzdC1zaWRlIHdlcmUgc3BlY2lmaWVkLlxuICAgICAgICAgICAgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuQ0lSQ0xFKSB7XG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWF4KCgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSksICgwLCBfVXRpbC5kaXN0YW5jZSkoeCwgeSAtIGJvdW5kcy5oZWlnaHQpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHggLSBib3VuZHMud2lkdGgsIHkgLSBib3VuZHMuaGVpZ2h0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xuICAgICAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIHJhdGlvIHJ5L3J4ICh3aGljaCBpcyB0byBiZSB0aGUgc2FtZSBhcyBmb3IgXCJmYXJ0aGVzdC1zaWRlXCIpXG4gICAgICAgICAgICAgICAgdmFyIF9jID0gTWF0aC5tYXgoTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSkgLyBNYXRoLm1heChNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCkpO1xuICAgICAgICAgICAgICAgIHZhciBfY29ybmVyID0gZmluZENvcm5lcihib3VuZHMsIHgsIHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByeCA9ICgwLCBfVXRpbC5kaXN0YW5jZSkoX2Nvcm5lci54IC0geCwgKF9jb3JuZXIueSAtIHkpIC8gX2MpO1xuICAgICAgICAgICAgICAgIHJ5ID0gX2MgKiByeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBwaXhlbCBvciBwZXJjZW50YWdlIHZhbHVlc1xuICAgICAgICAgICAgcnggPSByYWRpdXMueCB8fCAwO1xuICAgICAgICAgICAgcnkgPSByYWRpdXMueSAhPT0gdW5kZWZpbmVkID8gcmFkaXVzLnkgOiByeDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJ4LFxuICAgICAgICB5OiByeVxuICAgIH07XG59O1xuXG52YXIgdHJhbnNmb3JtV2Via2l0UmFkaWFsR3JhZGllbnRBcmdzID0gZXhwb3J0cy50cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBmdW5jdGlvbiB0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MoYXJncykge1xuICAgIHZhciBzaGFwZSA9ICcnO1xuICAgIHZhciByYWRpdXMgPSAnJztcbiAgICB2YXIgZXh0ZW50ID0gJyc7XG4gICAgdmFyIHBvc2l0aW9uID0gJyc7XG4gICAgdmFyIGlkeCA9IDA7XG5cbiAgICB2YXIgUE9TSVRJT04gPSAvXihsZWZ0fGNlbnRlcnxyaWdodHxcXGQrKD86cHh8cj9lbXwlKT8pKD86XFxzKyh0b3B8Y2VudGVyfGJvdHRvbXxcXGQrKD86cHh8cj9lbXwlKT8pKT8kL2k7XG4gICAgdmFyIFNIQVBFX0FORF9FWFRFTlQgPSAvXihjaXJjbGV8ZWxsaXBzZSk/XFxzKihjbG9zZXN0LXNpZGV8Y2xvc2VzdC1jb3JuZXJ8ZmFydGhlc3Qtc2lkZXxmYXJ0aGVzdC1jb3JuZXJ8Y29udGFpbnxjb3Zlcik/JC9pO1xuICAgIHZhciBSQURJVVMgPSAvXlxcZCsocHh8cj9lbXwlKT8oPzpcXHMrXFxkKyhweHxyP2VtfCUpPyk/JC9pO1xuXG4gICAgdmFyIG1hdGNoU3RhcnRQb3NpdGlvbiA9IGFyZ3NbaWR4XS5tYXRjaChQT1NJVElPTik7XG4gICAgaWYgKG1hdGNoU3RhcnRQb3NpdGlvbikge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hTaGFwZUV4dGVudCA9IGFyZ3NbaWR4XS5tYXRjaChTSEFQRV9BTkRfRVhURU5UKTtcbiAgICBpZiAobWF0Y2hTaGFwZUV4dGVudCkge1xuICAgICAgICBzaGFwZSA9IG1hdGNoU2hhcGVFeHRlbnRbMV0gfHwgJyc7XG4gICAgICAgIGV4dGVudCA9IG1hdGNoU2hhcGVFeHRlbnRbMl0gfHwgJyc7XG4gICAgICAgIGlmIChleHRlbnQgPT09ICdjb250YWluJykge1xuICAgICAgICAgICAgZXh0ZW50ID0gJ2Nsb3Nlc3Qtc2lkZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZXh0ZW50ID09PSAnY292ZXInKSB7XG4gICAgICAgICAgICBleHRlbnQgPSAnZmFydGhlc3QtY29ybmVyJztcbiAgICAgICAgfVxuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hTdGFydFJhZGl1cyA9IGFyZ3NbaWR4XS5tYXRjaChSQURJVVMpO1xuICAgIGlmIChtYXRjaFN0YXJ0UmFkaXVzKSB7XG4gICAgICAgIGlkeCsrO1xuICAgIH1cblxuICAgIHZhciBtYXRjaEVuZFBvc2l0aW9uID0gYXJnc1tpZHhdLm1hdGNoKFBPU0lUSU9OKTtcbiAgICBpZiAobWF0Y2hFbmRQb3NpdGlvbikge1xuICAgICAgICBpZHgrKztcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hFbmRSYWRpdXMgPSBhcmdzW2lkeF0ubWF0Y2goUkFESVVTKTtcbiAgICBpZiAobWF0Y2hFbmRSYWRpdXMpIHtcbiAgICAgICAgaWR4Kys7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoUG9zaXRpb24gPSBtYXRjaEVuZFBvc2l0aW9uIHx8IG1hdGNoU3RhcnRQb3NpdGlvbjtcbiAgICBpZiAobWF0Y2hQb3NpdGlvbiAmJiBtYXRjaFBvc2l0aW9uWzFdKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbWF0Y2hQb3NpdGlvblsxXSArICgvXlxcZCskLy50ZXN0KG1hdGNoUG9zaXRpb25bMV0pID8gJ3B4JyA6ICcnKTtcbiAgICAgICAgaWYgKG1hdGNoUG9zaXRpb25bMl0pIHtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9ICcgJyArIG1hdGNoUG9zaXRpb25bMl0gKyAoL15cXGQrJC8udGVzdChtYXRjaFBvc2l0aW9uWzJdKSA/ICdweCcgOiAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hSYWRpdXMgPSBtYXRjaEVuZFJhZGl1cyB8fCBtYXRjaFN0YXJ0UmFkaXVzO1xuICAgIGlmIChtYXRjaFJhZGl1cykge1xuICAgICAgICByYWRpdXMgPSBtYXRjaFJhZGl1c1swXTtcbiAgICAgICAgaWYgKCFtYXRjaFJhZGl1c1sxXSkge1xuICAgICAgICAgICAgcmFkaXVzICs9ICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gJiYgIXNoYXBlICYmICFyYWRpdXMgJiYgIWV4dGVudCkge1xuICAgICAgICByYWRpdXMgPSBwb3NpdGlvbjtcbiAgICAgICAgcG9zaXRpb24gPSAnJztcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgcG9zaXRpb24gPSAnYXQgJyArIHBvc2l0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBbW3NoYXBlLCBleHRlbnQsIHJhZGl1cywgcG9zaXRpb25dLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gISFzO1xuICAgIH0pLmpvaW4oJyAnKV0uY29uY2F0KGFyZ3Muc2xpY2UoaWR4KSk7XG59O1xuXG52YXIgdHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzID0gZnVuY3Rpb24gdHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKGFyZ3MpIHtcbiAgICByZXR1cm4gYXJncy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBjb2xvci5tYXRjaChGUk9NX1RPX0NPTE9SU1RPUCk7XG4gICAgfSlcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgLm1hcChmdW5jdGlvbiAodiwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCF2KSB7XG4gICAgICAgICAgICByZXR1cm4gYXJnc1tpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHZbMV0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Zyb20nOlxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAwJSc7XG4gICAgICAgICAgICBjYXNlICd0byc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbNF0gKyAnIDEwMCUnO1xuICAgICAgICAgICAgY2FzZSAnY29sb3Itc3RvcCc6XG4gICAgICAgICAgICAgICAgaWYgKHZbM10gPT09ICclJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgJyArIHZbMl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAnICsgcGFyc2VGbG9hdCh2WzJdKSAqIDEwMCArICclJztcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVmb3JtYXRJbnB1dEJvdW5kcyA9IGV4cG9ydHMuaW5saW5lU2VsZWN0RWxlbWVudCA9IGV4cG9ydHMuaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVJbnB1dEVsZW1lbnQgPSBleHBvcnRzLmdldElucHV0Qm9yZGVyUmFkaXVzID0gZXhwb3J0cy5JTlBVVF9CQUNLR1JPVU5EID0gZXhwb3J0cy5JTlBVVF9CT1JERVJTID0gZXhwb3J0cy5JTlBVVF9DT0xPUiA9IHVuZGVmaW5lZDtcblxudmFyIF9UZXh0Q29udGFpbmVyID0gcmVxdWlyZSgnLi9UZXh0Q29udGFpbmVyJyk7XG5cbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcblxudmFyIF9iYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JhY2tncm91bmQnKTtcblxudmFyIF9ib3JkZXIgPSByZXF1aXJlKCcuL3BhcnNpbmcvYm9yZGVyJyk7XG5cbnZhciBfQ2lyY2xlID0gcmVxdWlyZSgnLi9kcmF3aW5nL0NpcmNsZScpO1xuXG52YXIgX0NpcmNsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DaXJjbGUpO1xuXG52YXIgX1ZlY3RvciA9IHJlcXVpcmUoJy4vZHJhd2luZy9WZWN0b3InKTtcblxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcblxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4vQ29sb3InKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi9MZW5ndGgnKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxudmFyIF9Cb3VuZHMgPSByZXF1aXJlKCcuL0JvdW5kcycpO1xuXG52YXIgX1RleHRCb3VuZHMgPSByZXF1aXJlKCcuL1RleHRCb3VuZHMnKTtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBJTlBVVF9DT0xPUiA9IGV4cG9ydHMuSU5QVVRfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFs0MiwgNDIsIDQyXSk7XG52YXIgSU5QVVRfQk9SREVSX0NPTE9SID0gbmV3IF9Db2xvcjIuZGVmYXVsdChbMTY1LCAxNjUsIDE2NV0pO1xudmFyIElOUFVUX0JBQ0tHUk9VTkRfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFsyMjIsIDIyMiwgMjIyXSk7XG52YXIgSU5QVVRfQk9SREVSID0ge1xuICAgIGJvcmRlcldpZHRoOiAxLFxuICAgIGJvcmRlckNvbG9yOiBJTlBVVF9CT1JERVJfQ09MT1IsXG4gICAgYm9yZGVyU3R5bGU6IF9ib3JkZXIuQk9SREVSX1NUWUxFLlNPTElEXG59O1xudmFyIElOUFVUX0JPUkRFUlMgPSBleHBvcnRzLklOUFVUX0JPUkRFUlMgPSBbSU5QVVRfQk9SREVSLCBJTlBVVF9CT1JERVIsIElOUFVUX0JPUkRFUiwgSU5QVVRfQk9SREVSXTtcbnZhciBJTlBVVF9CQUNLR1JPVU5EID0gZXhwb3J0cy5JTlBVVF9CQUNLR1JPVU5EID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogSU5QVVRfQkFDS0dST1VORF9DT0xPUixcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFtdLFxuICAgIGJhY2tncm91bmRDbGlwOiBfYmFja2dyb3VuZC5CQUNLR1JPVU5EX0NMSVAuUEFERElOR19CT1gsXG4gICAgYmFja2dyb3VuZE9yaWdpbjogX2JhY2tncm91bmQuQkFDS0dST1VORF9PUklHSU4uUEFERElOR19CT1hcbn07XG5cbnZhciBSQURJT19CT1JERVJfUkFESVVTID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzUwJScpO1xudmFyIFJBRElPX0JPUkRFUl9SQURJVVNfVFVQTEUgPSBbUkFESU9fQk9SREVSX1JBRElVUywgUkFESU9fQk9SREVSX1JBRElVU107XG52YXIgSU5QVVRfUkFESU9fQk9SREVSX1JBRElVUyA9IFtSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFXTtcblxudmFyIENIRUNLQk9YX0JPUkRFUl9SQURJVVMgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnM3B4Jyk7XG52YXIgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSA9IFtDSEVDS0JPWF9CT1JERVJfUkFESVVTLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTXTtcbnZhciBJTlBVVF9DSEVDS0JPWF9CT1JERVJfUkFESVVTID0gW0NIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEUsIENIRUNLQk9YX0JPUkRFUl9SQURJVVNfVFVQTEVdO1xuXG52YXIgZ2V0SW5wdXRCb3JkZXJSYWRpdXMgPSBleHBvcnRzLmdldElucHV0Qm9yZGVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0SW5wdXRCb3JkZXJSYWRpdXMobm9kZSkge1xuICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdyYWRpbycgPyBJTlBVVF9SQURJT19CT1JERVJfUkFESVVTIDogSU5QVVRfQ0hFQ0tCT1hfQk9SREVSX1JBRElVUztcbn07XG5cbnZhciBpbmxpbmVJbnB1dEVsZW1lbnQgPSBleHBvcnRzLmlubGluZUlucHV0RWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZUlucHV0RWxlbWVudChub2RlLCBjb250YWluZXIpIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAncmFkaW8nIHx8IG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICBpZiAobm9kZS5jaGVja2VkKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IE1hdGgubWluKGNvbnRhaW5lci5ib3VuZHMud2lkdGgsIGNvbnRhaW5lci5ib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2gobm9kZS50eXBlID09PSAnY2hlY2tib3gnID8gW25ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjM5MzYzLCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjc5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMTYsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNTU0OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjI3MzQ3LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjQ0MDcxKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMzk2OTQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNTY0OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjcyOTgzLCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjIzKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuODQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuMzQwODUpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4zOTM2MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC43OSldIDogbmV3IF9DaXJjbGUyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAvIDQsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAvIDQsIHNpemUgLyA0KSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbmxpbmVGb3JtRWxlbWVudChnZXRJbnB1dFZhbHVlKG5vZGUpLCBub2RlLCBjb250YWluZXIsIGZhbHNlKTtcbiAgICB9XG59O1xuXG52YXIgaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVUZXh0QXJlYUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVUZXh0QXJlYUVsZW1lbnQobm9kZSwgY29udGFpbmVyKSB7XG4gICAgaW5saW5lRm9ybUVsZW1lbnQobm9kZS52YWx1ZSwgbm9kZSwgY29udGFpbmVyLCB0cnVlKTtcbn07XG5cbnZhciBpbmxpbmVTZWxlY3RFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVTZWxlY3RFbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lU2VsZWN0RWxlbWVudChub2RlLCBjb250YWluZXIpIHtcbiAgICB2YXIgb3B0aW9uID0gbm9kZS5vcHRpb25zW25vZGUuc2VsZWN0ZWRJbmRleCB8fCAwXTtcbiAgICBpbmxpbmVGb3JtRWxlbWVudChvcHRpb24gPyBvcHRpb24udGV4dCB8fCAnJyA6ICcnLCBub2RlLCBjb250YWluZXIsIGZhbHNlKTtcbn07XG5cbnZhciByZWZvcm1hdElucHV0Qm91bmRzID0gZXhwb3J0cy5yZWZvcm1hdElucHV0Qm91bmRzID0gZnVuY3Rpb24gcmVmb3JtYXRJbnB1dEJvdW5kcyhib3VuZHMpIHtcbiAgICBpZiAoYm91bmRzLndpZHRoID4gYm91bmRzLmhlaWdodCkge1xuICAgICAgICBib3VuZHMubGVmdCArPSAoYm91bmRzLndpZHRoIC0gYm91bmRzLmhlaWdodCkgLyAyO1xuICAgICAgICBib3VuZHMud2lkdGggPSBib3VuZHMuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoYm91bmRzLndpZHRoIDwgYm91bmRzLmhlaWdodCkge1xuICAgICAgICBib3VuZHMudG9wICs9IChib3VuZHMuaGVpZ2h0IC0gYm91bmRzLndpZHRoKSAvIDI7XG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBib3VuZHMud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBib3VuZHM7XG59O1xuXG52YXIgaW5saW5lRm9ybUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVGb3JtRWxlbWVudCh2YWx1ZSwgbm9kZSwgY29udGFpbmVyLCBhbGxvd0xpbmVicmVhaykge1xuICAgIHZhciBib2R5ID0gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDAgJiYgYm9keSkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdodG1sMmNhbnZhc3dyYXBwZXInKTtcbiAgICAgICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLCB3cmFwcGVyKTtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUubGVmdCA9IGNvbnRhaW5lci5ib3VuZHMubGVmdCArICdweCc7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgKyAncHgnO1xuICAgICAgICBpZiAoIWFsbG93TGluZWJyZWFrKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGV4dCA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2goX1RleHRDb250YWluZXIyLmRlZmF1bHQuZnJvbVRleHROb2RlKHRleHQsIGNvbnRhaW5lcikpO1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAgIH1cbn07XG5cbnZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShub2RlKSB7XG4gICAgdmFyIHZhbHVlID0gbm9kZS50eXBlID09PSAncGFzc3dvcmQnID8gbmV3IEFycmF5KG5vZGUudmFsdWUubGVuZ3RoICsgMSkuam9pbignXFx1MjAyMicpIDogbm9kZS52YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDAgPyBub2RlLnBsYWNlaG9sZGVyIHx8ICcnIDogdmFsdWU7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGV4cG9ydHMuTEVOR1RIX1RZUEUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMRU5HVEhfV0lUSF9VTklUID0gLyhbXFxkLl0rKShweHxyP2VtfCUpL2k7XG5cbnZhciBMRU5HVEhfVFlQRSA9IGV4cG9ydHMuTEVOR1RIX1RZUEUgPSB7XG4gICAgUFg6IDAsXG4gICAgUEVSQ0VOVEFHRTogMVxufTtcblxudmFyIExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMZW5ndGgodmFsdWUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExlbmd0aCk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gdmFsdWUuc3Vic3RyKHZhbHVlLmxlbmd0aCAtIDEpID09PSAnJScgPyBMRU5HVEhfVFlQRS5QRVJDRU5UQUdFIDogTEVOR1RIX1RZUEUuUFg7XG4gICAgICAgIHZhciBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc05hTihwYXJzZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdmFsdWUgZ2l2ZW4gZm9yIExlbmd0aDogXCInICsgdmFsdWUgKyAnXCInKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gaXNOYU4ocGFyc2VkVmFsdWUpID8gMCA6IHBhcnNlZFZhbHVlO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMZW5ndGgsIFt7XG4gICAgICAgIGtleTogJ2lzUGVyY2VudGFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1BlcmNlbnRhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBMRU5HVEhfVFlQRS5QRVJDRU5UQUdFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRBYnNvbHV0ZVZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFic29sdXRlVmFsdWUocGFyZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1BlcmNlbnRhZ2UoKSA/IHBhcmVudExlbmd0aCAqICh0aGlzLnZhbHVlIC8gMTAwKSA6IHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZSh2KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExlbmd0aCh2KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMZW5ndGg7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExlbmd0aDtcblxuXG52YXIgZ2V0Um9vdEZvbnRTaXplID0gZnVuY3Rpb24gZ2V0Um9vdEZvbnRTaXplKGNvbnRhaW5lcikge1xuICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIucGFyZW50O1xuICAgIHJldHVybiBwYXJlbnQgPyBnZXRSb290Rm9udFNpemUocGFyZW50KSA6IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpO1xufTtcblxudmFyIGNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0ID0gZXhwb3J0cy5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUxlbmd0aEZyb21WYWx1ZVdpdGhVbml0KGNvbnRhaW5lciwgdmFsdWUsIHVuaXQpIHtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgICAgY2FzZSAncHgnOlxuICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVuZ3RoKHZhbHVlICsgdW5pdCk7XG4gICAgICAgIGNhc2UgJ2VtJzpcbiAgICAgICAgY2FzZSAncmVtJzpcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBuZXcgTGVuZ3RoKHZhbHVlKTtcbiAgICAgICAgICAgIGxlbmd0aC52YWx1ZSAqPSB1bml0ID09PSAnZW0nID8gcGFyc2VGbG9hdChjb250YWluZXIuc3R5bGUuZm9udC5mb250U2l6ZSkgOiBnZXRSb290Rm9udFNpemUoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBUT0RPOiBoYW5kbGUgY29ycmVjdGx5IGlmIHVua25vd24gdW5pdCBpcyB1c2VkXG4gICAgICAgICAgICByZXR1cm4gbmV3IExlbmd0aCgnMCcpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZUNvdW50ZXJUZXh0ID0gZXhwb3J0cy5pbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBleHBvcnRzLmdldExpc3RPd25lciA9IHVuZGVmaW5lZDtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IHJlcXVpcmUoJy4vVGV4dENvbnRhaW5lcicpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xuXG52YXIgX1VuaWNvZGUgPSByZXF1aXJlKCcuL1VuaWNvZGUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gTWFyZ2luIGJldHdlZW4gdGhlIGVudW1lcmF0aW9uIGFuZCB0aGUgbGlzdCBpdGVtIGNvbnRlbnRcbnZhciBNQVJHSU5fUklHSFQgPSA3O1xuXG52YXIgYW5jZXN0b3JUeXBlcyA9IFsnT0wnLCAnVUwnLCAnTUVOVSddO1xuXG52YXIgZ2V0TGlzdE93bmVyID0gZXhwb3J0cy5nZXRMaXN0T3duZXIgPSBmdW5jdGlvbiBnZXRMaXN0T3duZXIoY29udGFpbmVyKSB7XG4gICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnQ7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZG8ge1xuICAgICAgICB2YXIgaXNBbmNlc3RvciA9IGFuY2VzdG9yVHlwZXMuaW5kZXhPZihwYXJlbnQudGFnTmFtZSkgIT09IC0xO1xuICAgICAgICBpZiAoaXNBbmNlc3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH0gd2hpbGUgKHBhcmVudCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyLnBhcmVudDtcbn07XG5cbnZhciBpbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBleHBvcnRzLmlubGluZUxpc3RJdGVtRWxlbWVudCA9IGZ1bmN0aW9uIGlubGluZUxpc3RJdGVtRWxlbWVudChub2RlLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyKSB7XG4gICAgdmFyIGxpc3RTdHlsZSA9IGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGU7XG5cbiAgICBpZiAoIWxpc3RTdHlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XG4gICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKHN0eWxlLCB3cmFwcGVyKTtcblxuICAgIHdyYXBwZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHdyYXBwZXIuc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgd3JhcHBlci5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gJ25vcm1hbCc7XG5cbiAgICBzd2l0Y2ggKGxpc3RTdHlsZS5saXN0U3R5bGVQb3NpdGlvbikge1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9QT1NJVElPTi5PVVRTSURFOlxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5yaWdodCA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5pbm5lcldpZHRoIC0gY29udGFpbmVyLmJvdW5kcy5sZWZ0IC0gY29udGFpbmVyLnN0eWxlLm1hcmdpblsxXS5nZXRBYnNvbHV0ZVZhbHVlKGNvbnRhaW5lci5ib3VuZHMud2lkdGgpICsgTUFSR0lOX1JJR0hUICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9QT1NJVElPTi5JTlNJREU6XG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBjb250YWluZXIuYm91bmRzLmxlZnQgLSBjb250YWluZXIuc3R5bGUubWFyZ2luWzNdLmdldEFic29sdXRlVmFsdWUoY29udGFpbmVyLmJvdW5kcy53aWR0aCkgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5yaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSB2b2lkIDA7XG4gICAgdmFyIE1BUkdJTl9UT1AgPSBjb250YWluZXIuc3R5bGUubWFyZ2luWzBdLmdldEFic29sdXRlVmFsdWUoY29udGFpbmVyLmJvdW5kcy53aWR0aCk7XG4gICAgdmFyIHN0eWxlSW1hZ2UgPSBsaXN0U3R5bGUubGlzdFN0eWxlSW1hZ2U7XG4gICAgaWYgKHN0eWxlSW1hZ2UpIHtcbiAgICAgICAgaWYgKHN0eWxlSW1hZ2UubWV0aG9kID09PSAndXJsJykge1xuICAgICAgICAgICAgdmFyIGltYWdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3R5bGVJbWFnZS5hcmdzWzBdO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBjb250YWluZXIuYm91bmRzLnRvcCAtIE1BUkdJTl9UT1AgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpICogMC41O1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS50b3AgPSBjb250YWluZXIuYm91bmRzLnRvcCAtIE1BUkdJTl9UT1AgKyBjb250YWluZXIuYm91bmRzLmhlaWdodCAtIDEuNSAqIHNpemUgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnO1xuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gc3R5bGUubGlzdFN0eWxlSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250YWluZXIubGlzdEluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICB0ZXh0ID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNyZWF0ZUNvdW50ZXJUZXh0KGNvbnRhaW5lci5saXN0SW5kZXgsIGxpc3RTdHlsZS5saXN0U3R5bGVUeXBlLCB0cnVlKSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgLSBNQVJHSU5fVE9QICsgJ3B4JztcbiAgICB9XG5cbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdmFyIGJvZHkgPSBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMucHVzaChfVGV4dENvbnRhaW5lcjIuZGVmYXVsdC5mcm9tVGV4dE5vZGUodGV4dCwgY29udGFpbmVyKSk7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQod3JhcHBlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdCh3cmFwcGVyLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyLCAwKSk7XG4gICAgfVxufTtcblxudmFyIFJPTUFOX1VQUEVSID0ge1xuICAgIGludGVnZXJzOiBbMTAwMCwgOTAwLCA1MDAsIDQwMCwgMTAwLCA5MCwgNTAsIDQwLCAxMCwgOSwgNSwgNCwgMV0sXG4gICAgdmFsdWVzOiBbJ00nLCAnQ00nLCAnRCcsICdDRCcsICdDJywgJ1hDJywgJ0wnLCAnWEwnLCAnWCcsICdJWCcsICdWJywgJ0lWJywgJ0knXVxufTtcblxudmFyIEFSTUVOSUFOID0ge1xuICAgIGludGVnZXJzOiBbOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgOTAwLCA4MDAsIDcwMCwgNjAwLCA1MDAsIDQwMCwgMzAwLCAyMDAsIDEwMCwgOTAsIDgwLCA3MCwgNjAsIDUwLCA0MCwgMzAsIDIwLCAxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV0sXG4gICAgdmFsdWVzOiBbJ9WUJywgJ9WTJywgJ9WSJywgJ9WRJywgJ9WQJywgJ9WPJywgJ9WOJywgJ9WNJywgJ9WMJywgJ9WLJywgJ9WKJywgJ9WJJywgJ9WIJywgJ9WHJywgJ9WGJywgJ9WFJywgJ9WEJywgJ9WDJywgJ9WCJywgJ9WBJywgJ9WAJywgJ9S/JywgJ9S+JywgJ9S9JywgJ9S8JywgJ9S7JywgJ9S6JywgJ9S5JywgJ9S4JywgJ9S3JywgJ9S2JywgJ9S1JywgJ9S0JywgJ9SzJywgJ9SyJywgJ9SxJ11cbn07XG5cbnZhciBIRUJSRVcgPSB7XG4gICAgaW50ZWdlcnM6IFsxMDAwMCwgOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgNDAwLCAzMDAsIDIwMCwgMTAwLCA5MCwgODAsIDcwLCA2MCwgNTAsIDQwLCAzMCwgMjAsIDE5LCAxOCwgMTcsIDE2LCAxNSwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxuICAgIHZhbHVlczogWyfXmdezJywgJ9eY17MnLCAn15fXsycsICfXltezJywgJ9eV17MnLCAn15TXsycsICfXk9ezJywgJ9eS17MnLCAn15HXsycsICfXkNezJywgJ9eqJywgJ9epJywgJ9eoJywgJ9enJywgJ9emJywgJ9ekJywgJ9eiJywgJ9ehJywgJ9egJywgJ9eeJywgJ9ecJywgJ9ebJywgJ9eZ15gnLCAn15nXlycsICfXmdeWJywgJ9eY15YnLCAn15jXlScsICfXmScsICfXmCcsICfXlycsICfXlicsICfXlScsICfXlCcsICfXkycsICfXkicsICfXkScsICfXkCddXG59O1xuXG52YXIgR0VPUkdJQU4gPSB7XG4gICAgaW50ZWdlcnM6IFsxMDAwMCwgOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgOTAwLCA4MDAsIDcwMCwgNjAwLCA1MDAsIDQwMCwgMzAwLCAyMDAsIDEwMCwgOTAsIDgwLCA3MCwgNjAsIDUwLCA0MCwgMzAsIDIwLCAxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV0sXG4gICAgdmFsdWVzOiBbJ+GDtScsICfhg7AnLCAn4YOvJywgJ+GDtCcsICfhg64nLCAn4YOtJywgJ+GDrCcsICfhg6snLCAn4YOqJywgJ+GDqScsICfhg6gnLCAn4YOnJywgJ+GDpicsICfhg6UnLCAn4YOkJywgJ+GDsycsICfhg6InLCAn4YOhJywgJ+GDoCcsICfhg58nLCAn4YOeJywgJ+GDnScsICfhg7InLCAn4YOcJywgJ+GDmycsICfhg5onLCAn4YOZJywgJ+GDmCcsICfhg5cnLCAn4YOxJywgJ+GDlicsICfhg5UnLCAn4YOUJywgJ+GDkycsICfhg5InLCAn4YORJywgJ+GDkCddXG59O1xuXG52YXIgY3JlYXRlQWRkaXRpdmVDb3VudGVyID0gZnVuY3Rpb24gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCBtaW4sIG1heCwgc3ltYm9scywgZmFsbGJhY2ssIHN1ZmZpeCkge1xuICAgIGlmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclRleHQodmFsdWUsIGZhbGxiYWNrLCBzdWZmaXgubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN5bWJvbHMuaW50ZWdlcnMucmVkdWNlKGZ1bmN0aW9uIChzdHJpbmcsIGludGVnZXIsIGluZGV4KSB7XG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSBpbnRlZ2VyKSB7XG4gICAgICAgICAgICB2YWx1ZSAtPSBpbnRlZ2VyO1xuICAgICAgICAgICAgc3RyaW5nICs9IHN5bWJvbHMudmFsdWVzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sICcnKSArIHN1ZmZpeDtcbn07XG5cbnZhciBjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIodmFsdWUsIGNvZGVQb2ludFJhbmdlTGVuZ3RoLCBpc051bWVyaWMsIHJlc29sdmVyKSB7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuXG4gICAgZG8ge1xuICAgICAgICBpZiAoIWlzTnVtZXJpYykge1xuICAgICAgICAgICAgdmFsdWUtLTtcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgPSByZXNvbHZlcih2YWx1ZSkgKyBzdHJpbmc7XG4gICAgICAgIHZhbHVlIC89IGNvZGVQb2ludFJhbmdlTGVuZ3RoO1xuICAgIH0gd2hpbGUgKHZhbHVlICogY29kZVBvaW50UmFuZ2VMZW5ndGggPj0gY29kZVBvaW50UmFuZ2VMZW5ndGgpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbnZhciBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIGNvZGVQb2ludFJhbmdlU3RhcnQsIGNvZGVQb2ludFJhbmdlRW5kLCBpc051bWVyaWMsIHN1ZmZpeCkge1xuICAgIHZhciBjb2RlUG9pbnRSYW5nZUxlbmd0aCA9IGNvZGVQb2ludFJhbmdlRW5kIC0gY29kZVBvaW50UmFuZ2VTdGFydCArIDE7XG5cbiAgICByZXR1cm4gKHZhbHVlIDwgMCA/ICctJyA6ICcnKSArIChjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIoTWF0aC5hYnModmFsdWUpLCBjb2RlUG9pbnRSYW5nZUxlbmd0aCwgaXNOdW1lcmljLCBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHJldHVybiAoMCwgX1VuaWNvZGUuZnJvbUNvZGVQb2ludCkoTWF0aC5mbG9vcihjb2RlUG9pbnQgJSBjb2RlUG9pbnRSYW5nZUxlbmd0aCkgKyBjb2RlUG9pbnRSYW5nZVN0YXJ0KTtcbiAgICB9KSArIHN1ZmZpeCk7XG59O1xuXG52YXIgY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHMgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgc3ltYm9scykge1xuICAgIHZhciBzdWZmaXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcuICc7XG5cbiAgICB2YXIgY29kZVBvaW50UmFuZ2VMZW5ndGggPSBzeW1ib2xzLmxlbmd0aDtcbiAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyKE1hdGguYWJzKHZhbHVlKSwgY29kZVBvaW50UmFuZ2VMZW5ndGgsIGZhbHNlLCBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xzW01hdGguZmxvb3IoY29kZVBvaW50ICUgY29kZVBvaW50UmFuZ2VMZW5ndGgpXTtcbiAgICB9KSArIHN1ZmZpeDtcbn07XG5cbnZhciBDSktfWkVST1MgPSAxIDw8IDA7XG52YXIgQ0pLX1RFTl9DT0VGRklDSUVOVFMgPSAxIDw8IDE7XG52YXIgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyA9IDEgPDwgMjtcbnZhciBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMgPSAxIDw8IDM7XG5cbnZhciBjcmVhdGVDSktDb3VudGVyID0gZnVuY3Rpb24gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgbnVtYmVycywgbXVsdGlwbGllcnMsIG5lZ2F0aXZlU2lnbiwgc3VmZml4LCBmbGFncykge1xuICAgIGlmICh2YWx1ZSA8IC05OTk5IHx8IHZhbHVlID4gOTk5OSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclRleHQodmFsdWUsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMLCBzdWZmaXgubGVuZ3RoID4gMCk7XG4gICAgfVxuICAgIHZhciB0bXAgPSBNYXRoLmFicyh2YWx1ZSk7XG4gICAgdmFyIHN0cmluZyA9IHN1ZmZpeDtcblxuICAgIGlmICh0bXAgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bWJlcnNbMF0gKyBzdHJpbmc7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZGlnaXQgPSAwOyB0bXAgPiAwICYmIGRpZ2l0IDw9IDQ7IGRpZ2l0KyspIHtcbiAgICAgICAgdmFyIGNvZWZmaWNpZW50ID0gdG1wICUgMTA7XG5cbiAgICAgICAgaWYgKGNvZWZmaWNpZW50ID09PSAwICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19aRVJPUykgJiYgc3RyaW5nICE9PSAnJykge1xuICAgICAgICAgICAgc3RyaW5nID0gbnVtYmVyc1tjb2VmZmljaWVudF0gKyBzdHJpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29lZmZpY2llbnQgPiAxIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAwIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAxICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19URU5fQ09FRkZJQ0lFTlRTKSB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA9PT0gMSAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKSAmJiB2YWx1ZSA+IDEwMCB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA+IDEgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKSkge1xuICAgICAgICAgICAgc3RyaW5nID0gbnVtYmVyc1tjb2VmZmljaWVudF0gKyAoZGlnaXQgPiAwID8gbXVsdGlwbGllcnNbZGlnaXQgLSAxXSA6ICcnKSArIHN0cmluZztcbiAgICAgICAgfSBlbHNlIGlmIChjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA+IDApIHtcbiAgICAgICAgICAgIHN0cmluZyA9IG11bHRpcGxpZXJzW2RpZ2l0IC0gMV0gKyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdG1wID0gTWF0aC5mbG9vcih0bXAgLyAxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICh2YWx1ZSA8IDAgPyBuZWdhdGl2ZVNpZ24gOiAnJykgKyBzdHJpbmc7XG59O1xuXG52YXIgQ0hJTkVTRV9JTkZPUk1BTF9NVUxUSVBMSUVSUyA9ICfljYHnmb7ljYPokKwnO1xudmFyIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTID0gJ+aLvuS9sOS7n+iQrCc7XG52YXIgSkFQQU5FU0VfTkVHQVRJVkUgPSAn44Oe44Kk44OK44K5JztcbnZhciBLT1JFQU5fTkVHQVRJVkUgPSAn66eI7J2064SI7IqkICc7XG5cbnZhciBjcmVhdGVDb3VudGVyVGV4dCA9IGV4cG9ydHMuY3JlYXRlQ291bnRlclRleHQgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyVGV4dCh2YWx1ZSwgdHlwZSwgYXBwZW5kU3VmZml4KSB7XG4gICAgdmFyIGRlZmF1bHRTdWZmaXggPSBhcHBlbmRTdWZmaXggPyAnLiAnIDogJyc7XG4gICAgdmFyIGNqa1N1ZmZpeCA9IGFwcGVuZFN1ZmZpeCA/ICfjgIEnIDogJyc7XG4gICAgdmFyIGtvcmVhblN1ZmZpeCA9IGFwcGVuZFN1ZmZpeCA/ICcsICcgOiAnJztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ESVNDOlxuICAgICAgICAgICAgcmV0dXJuICfigKInO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNJUkNMRTpcbiAgICAgICAgICAgIHJldHVybiAn4pemJztcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5TUVVBUkU6XG4gICAgICAgICAgICByZXR1cm4gJ+KXvic7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTF9MRUFESU5HX1pFUk86XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA0OCwgNTcsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5sZW5ndGggPCA0ID8gJzAnICsgc3RyaW5nIDogc3RyaW5nO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44CH5LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9ST01BTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDM5OTksIFJPTUFOX1VQUEVSLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX1JPTUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMzk5OSwgUk9NQU5fVVBQRVIsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX0dSRUVLOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgOTQ1LCA5NjksIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9BTFBIQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDk3LCAxMjIsIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5VUFBFUl9BTFBIQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDY1LCA5MCwgZmFsc2UsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkFSQUJJQ19JTkRJQzpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDE2MzIsIDE2NDEsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkFSTUVOSUFOOlxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FSTUVOSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgOTk5OSwgQVJNRU5JQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX0FSTUVOSUFOOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgOTk5OSwgQVJNRU5JQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQkVOR0FMSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDI1MzQsIDI1NDMsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNBTUJPRElBTjpcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LSE1FUjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDYxMTIsIDYxMjEsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19FQVJUSExZX0JSQU5DSDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+WtkOS4keWvheWNr+i+sOW3s+WNiOacqueUs+mFieaIjOS6pScsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0hFQVZFTkxZX1NURU06XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfnlLLkuZnkuJnkuIHmiIrlt7Hluprovpvlo6znmbgnLCBjamtTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19JREVPR1JBUEhJQzpcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfSU5GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMsICfosqAnLCBjamtTdWZmaXgsIENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25aO56LKz5Y+D6IKG5LyN6Zm45p+S5o2M546WJywgQ0hJTkVTRV9GT1JNQUxfTVVMVElQTElFUlMsICfosqAnLCBjamtTdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7bkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCBDSElORVNFX0lORk9STUFMX01VTFRJUExJRVJTLCAn6LSfJywgY2prU3VmZml4LCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlNJTVBfQ0hJTkVTRV9GT1JNQUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjuei0sOWPgeiChuS8jemZhuafkuaNjOeOlicsIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTLCAn6LSfJywgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0lORk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfjgIfkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCAn5Y2B55m+5Y2D5LiHJywgSkFQQU5FU0VfTkVHQVRJVkUsIGNqa1N1ZmZpeCwgMCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7HlvJDlj4Llm5vkvI3lha3kuIPlhavkuZ0nLCAn5ou+55m+5Y2D5LiHJywgSkFQQU5FU0VfTkVHQVRJVkUsIGNqa1N1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOR1VMX0ZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn7JiB7J287J207IK87IKs7Jik7Jyh7Lmg7YyU6rWsJywgJ+yLreuwseyynOunjCcsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9JTkZPUk1BTDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn6Zu25LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgJ+WNgeeZvuWNg+iQrCcsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCAwKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfRk9STUFMOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsICfpm7blo7nosrPlj4Plm5vkupTlha3kuIPlhavkuZ0nLCAn5ou+55m+5Y2DJywgS09SRUFOX05FR0FUSVZFLCBrb3JlYW5TdWZmaXgsIENKS19aRVJPUyB8IENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVWQU5BR0FSSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4OTY2LCAweDk2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuR0VPUkdJQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCAxOTk5OSwgR0VPUkdJQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkdVSkFSQVRJOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhhZTYsIDB4YWVmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5HVVJNVUtISTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YTY2LCAweGE2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSEVCUkVXOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMTA5OTksIEhFQlJFVywgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSElSQUdBTkE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgYLjgYTjgYbjgYjjgYrjgYvjgY3jgY/jgZHjgZPjgZXjgZfjgZnjgZvjgZ3jgZ/jgaHjgaTjgabjgajjgarjgavjgazjga3jga7jga/jgbLjgbXjgbjjgbvjgb7jgb/jgoDjgoHjgoLjgoTjgobjgojjgonjgorjgovjgozjgo3jgo/jgpDjgpHjgpLjgpMnKTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQV9JUk9IQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OBhOOCjeOBr+OBq+OBu+OBuOOBqOOBoeOCiuOBrOOCi+OCkuOCj+OBi+OCiOOBn+OCjOOBneOBpOOBreOBquOCieOCgOOBhuOCkOOBruOBiuOBj+OChOOBvuOBkeOBteOBk+OBiOOBpuOBguOBleOBjeOChuOCgeOBv+OBl+OCkeOBsuOCguOBm+OBmScpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktBTk5BREE6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGNlNiwgMHhjZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn44Ki44Kk44Km44Ko44Kq44Kr44Kt44Kv44Kx44Kz44K144K344K544K744K944K/44OB44OE44OG44OI44OK44OL44OM44ON44OO44OP44OS44OV44OY44Ob44Oe44Of44Og44Oh44Oi44Ok44Om44Oo44Op44Oq44Or44Os44Ot44Ov44Ow44Ox44Oy44OzJywgY2prU3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQV9JUk9IQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OCpOODreODj+ODi+ODm+ODmOODiOODgeODquODjOODq+ODsuODr+OCq+ODqOOCv+ODrOOCveODhOODjeODiuODqeODoOOCpuODsOODjuOCquOCr+ODpOODnuOCseODleOCs+OCqOODhuOCouOCteOCreODpuODoeODn+OCt+ODseODkuODouOCu+OCuScsIGNqa1N1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTEFPOlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhlZDAsIDB4ZWQ5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5NT05HT0xJQU46XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweDE4MTAsIDB4MTgxOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTVlBTk1BUjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4MTA0MCwgMHgxMDQ5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5PUklZQTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YjY2LCAweGI2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuUEVSU0lBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4NmYwLCAweDZmOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEFNSUw6XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGJlNiwgMHhiZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRFTFVHVTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YzY2LCAweGM2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEhBSTpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZTUwLCAweGU1OSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVElCRVRBTjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZjIwLCAweGYyOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDQ4LCA1NywgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIExvZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2dnZXIoZW5hYmxlZCwgaWQsIHN0YXJ0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2dnZXIpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGVuYWJsZWQ7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydCA/IHN0YXJ0IDogRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMb2dnZXIsIFt7XG4gICAgICAgIGtleTogJ2NoaWxkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoaWxkKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmVuYWJsZWQsIGlkLCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xvZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2coKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVkICYmIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbCh3aW5kb3cuY29uc29sZS5sb2csIHdpbmRvdy5jb25zb2xlKS5hcHBseSh3aW5kb3cuY29uc29sZSwgW0RhdGUubm93KCkgLSB0aGlzLnN0YXJ0ICsgJ21zJywgdGhpcy5pZCA/ICdodG1sMmNhbnZhcyAoJyArIHRoaXMuaWQgKyAnKTonIDogJ2h0bWwyY2FudmFzOiddLmNvbmNhdChbXS5zbGljZS5jYWxsKGFyZ3MsIDApKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvbm8td2Vhay10eXBlc1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZWQgJiYgd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbCh3aW5kb3cuY29uc29sZS5lcnJvciwgd2luZG93LmNvbnNvbGUpLmFwcGx5KHdpbmRvdy5jb25zb2xlLCBbRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQgKyAnbXMnLCB0aGlzLmlkID8gJ2h0bWwyY2FudmFzICgnICsgdGhpcy5pZCArICcpOicgOiAnaHRtbDJjYW52YXM6J10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncywgMCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMb2dnZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExvZ2dlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4vQ29sb3InKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xuXG52YXIgX2JhY2tncm91bmQgPSByZXF1aXJlKCcuL3BhcnNpbmcvYmFja2dyb3VuZCcpO1xuXG52YXIgX2JvcmRlciA9IHJlcXVpcmUoJy4vcGFyc2luZy9ib3JkZXInKTtcblxudmFyIF9ib3JkZXJSYWRpdXMgPSByZXF1aXJlKCcuL3BhcnNpbmcvYm9yZGVyUmFkaXVzJyk7XG5cbnZhciBfZGlzcGxheSA9IHJlcXVpcmUoJy4vcGFyc2luZy9kaXNwbGF5Jyk7XG5cbnZhciBfZmxvYXQgPSByZXF1aXJlKCcuL3BhcnNpbmcvZmxvYXQnKTtcblxudmFyIF9mb250ID0gcmVxdWlyZSgnLi9wYXJzaW5nL2ZvbnQnKTtcblxudmFyIF9sZXR0ZXJTcGFjaW5nID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xldHRlclNwYWNpbmcnKTtcblxudmFyIF9saW5lQnJlYWsgPSByZXF1aXJlKCcuL3BhcnNpbmcvbGluZUJyZWFrJyk7XG5cbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xuXG52YXIgX21hcmdpbiA9IHJlcXVpcmUoJy4vcGFyc2luZy9tYXJnaW4nKTtcblxudmFyIF9vdmVyZmxvdyA9IHJlcXVpcmUoJy4vcGFyc2luZy9vdmVyZmxvdycpO1xuXG52YXIgX292ZXJmbG93V3JhcCA9IHJlcXVpcmUoJy4vcGFyc2luZy9vdmVyZmxvd1dyYXAnKTtcblxudmFyIF9wYWRkaW5nID0gcmVxdWlyZSgnLi9wYXJzaW5nL3BhZGRpbmcnKTtcblxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2luZy9wb3NpdGlvbicpO1xuXG52YXIgX3RleHREZWNvcmF0aW9uID0gcmVxdWlyZSgnLi9wYXJzaW5nL3RleHREZWNvcmF0aW9uJyk7XG5cbnZhciBfdGV4dFNoYWRvdyA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0U2hhZG93Jyk7XG5cbnZhciBfdGV4dFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0VHJhbnNmb3JtJyk7XG5cbnZhciBfdHJhbnNmb3JtID0gcmVxdWlyZSgnLi9wYXJzaW5nL3RyYW5zZm9ybScpO1xuXG52YXIgX3Zpc2liaWxpdHkgPSByZXF1aXJlKCcuL3BhcnNpbmcvdmlzaWJpbGl0eScpO1xuXG52YXIgX3dvcmRCcmVhayA9IHJlcXVpcmUoJy4vcGFyc2luZy93b3JkLWJyZWFrJyk7XG5cbnZhciBfekluZGV4ID0gcmVxdWlyZSgnLi9wYXJzaW5nL3pJbmRleCcpO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfTGlzdEl0ZW0gPSByZXF1aXJlKCcuL0xpc3RJdGVtJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBJTlBVVF9UQUdTID0gWydJTlBVVCcsICdURVhUQVJFQScsICdTRUxFQ1QnXTtcblxudmFyIE5vZGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9kZUNvbnRhaW5lcihub2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy50YWdOYW1lID0gbm9kZS50YWdOYW1lO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIG5vZGUuc3RhcnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RTdGFydCA9IG5vZGUuc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB2YXIgc3R5bGUgPSBkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICAgICAgICB2YXIgZGlzcGxheSA9ICgwLCBfZGlzcGxheS5wYXJzZURpc3BsYXkpKHN0eWxlLmRpc3BsYXkpO1xuXG4gICAgICAgIHZhciBJU19JTlBVVCA9IG5vZGUudHlwZSA9PT0gJ3JhZGlvJyB8fCBub2RlLnR5cGUgPT09ICdjaGVja2JveCc7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gKDAsIF9wb3NpdGlvbi5wYXJzZVBvc2l0aW9uKShzdHlsZS5wb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IElTX0lOUFVUID8gX0lucHV0LklOUFVUX0JBQ0tHUk9VTkQgOiAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kKShzdHlsZSwgcmVzb3VyY2VMb2FkZXIpLFxuICAgICAgICAgICAgYm9yZGVyOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9CT1JERVJTIDogKDAsIF9ib3JkZXIucGFyc2VCb3JkZXIpKHN0eWxlKSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogKG5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5IVE1MSW5wdXRFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiBJU19JTlBVVCA/ICgwLCBfSW5wdXQuZ2V0SW5wdXRCb3JkZXJSYWRpdXMpKG5vZGUpIDogKDAsIF9ib3JkZXJSYWRpdXMucGFyc2VCb3JkZXJSYWRpdXMpKHN0eWxlKSxcbiAgICAgICAgICAgIGNvbG9yOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9DT0xPUiA6IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUuY29sb3IpLFxuICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcbiAgICAgICAgICAgIGZsb2F0OiAoMCwgX2Zsb2F0LnBhcnNlQ1NTRmxvYXQpKHN0eWxlLmZsb2F0KSxcbiAgICAgICAgICAgIGZvbnQ6ICgwLCBfZm9udC5wYXJzZUZvbnQpKHN0eWxlKSxcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICgwLCBfbGV0dGVyU3BhY2luZy5wYXJzZUxldHRlclNwYWNpbmcpKHN0eWxlLmxldHRlclNwYWNpbmcpLFxuICAgICAgICAgICAgbGlzdFN0eWxlOiBkaXNwbGF5ID09PSBfZGlzcGxheS5ESVNQTEFZLkxJU1RfSVRFTSA/ICgwLCBfbGlzdFN0eWxlLnBhcnNlTGlzdFN0eWxlKShzdHlsZSkgOiBudWxsLFxuICAgICAgICAgICAgbGluZUJyZWFrOiAoMCwgX2xpbmVCcmVhay5wYXJzZUxpbmVCcmVhaykoc3R5bGUubGluZUJyZWFrKSxcbiAgICAgICAgICAgIG1hcmdpbjogKDAsIF9tYXJnaW4ucGFyc2VNYXJnaW4pKHN0eWxlKSxcbiAgICAgICAgICAgIG9wYWNpdHk6IHBhcnNlRmxvYXQoc3R5bGUub3BhY2l0eSksXG4gICAgICAgICAgICBvdmVyZmxvdzogSU5QVVRfVEFHUy5pbmRleE9mKG5vZGUudGFnTmFtZSkgPT09IC0xID8gKDAsIF9vdmVyZmxvdy5wYXJzZU92ZXJmbG93KShzdHlsZS5vdmVyZmxvdykgOiBfb3ZlcmZsb3cuT1ZFUkZMT1cuSElEREVOLFxuICAgICAgICAgICAgb3ZlcmZsb3dXcmFwOiAoMCwgX292ZXJmbG93V3JhcC5wYXJzZU92ZXJmbG93V3JhcCkoc3R5bGUub3ZlcmZsb3dXcmFwID8gc3R5bGUub3ZlcmZsb3dXcmFwIDogc3R5bGUud29yZFdyYXApLFxuICAgICAgICAgICAgcGFkZGluZzogKDAsIF9wYWRkaW5nLnBhcnNlUGFkZGluZykoc3R5bGUpLFxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICgwLCBfdGV4dERlY29yYXRpb24ucGFyc2VUZXh0RGVjb3JhdGlvbikoc3R5bGUpLFxuICAgICAgICAgICAgdGV4dFNoYWRvdzogKDAsIF90ZXh0U2hhZG93LnBhcnNlVGV4dFNoYWRvdykoc3R5bGUudGV4dFNoYWRvdyksXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAoMCwgX3RleHRUcmFuc2Zvcm0ucGFyc2VUZXh0VHJhbnNmb3JtKShzdHlsZS50ZXh0VHJhbnNmb3JtKSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm0ucGFyc2VUcmFuc2Zvcm0pKHN0eWxlKSxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICgwLCBfdmlzaWJpbGl0eS5wYXJzZVZpc2liaWxpdHkpKHN0eWxlLnZpc2liaWxpdHkpLFxuICAgICAgICAgICAgd29yZEJyZWFrOiAoMCwgX3dvcmRCcmVhay5wYXJzZVdvcmRCcmVhaykoc3R5bGUud29yZEJyZWFrKSxcbiAgICAgICAgICAgIHpJbmRleDogKDAsIF96SW5kZXgucGFyc2VaSW5kZXgpKHBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDID8gc3R5bGUuekluZGV4IDogJ2F1dG8nKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzVHJhbnNmb3JtZWQoKSkge1xuICAgICAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IHByb3ZpZGVzIHZhbHVlcyBwb3N0LXRyYW5zZm9ybSwgd2Ugd2FudCB0aGVtIHdpdGhvdXQgdGhlIHRyYW5zZm9ybWF0aW9uXG4gICAgICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9ICdtYXRyaXgoMSwwLDAsMSwwLDApJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNwbGF5ID09PSBfZGlzcGxheS5ESVNQTEFZLkxJU1RfSVRFTSkge1xuICAgICAgICAgICAgdmFyIGxpc3RPd25lciA9ICgwLCBfTGlzdEl0ZW0uZ2V0TGlzdE93bmVyKSh0aGlzKTtcbiAgICAgICAgICAgIGlmIChsaXN0T3duZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdEluZGV4ID0gbGlzdE93bmVyLmxpc3RJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbGlzdE93bmVyLmxpc3RJdGVtcy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEluZGV4ID0gbm9kZS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykgJiYgdHlwZW9mIG5vZGUudmFsdWUgPT09ICdudW1iZXInID8gbm9kZS52YWx1ZSA6IGxpc3RJbmRleCA9PT0gMCA/IHR5cGVvZiBsaXN0T3duZXIubGlzdFN0YXJ0ID09PSAnbnVtYmVyJyA/IGxpc3RPd25lci5saXN0U3RhcnQgOiAxIDogbGlzdE93bmVyLmxpc3RJdGVtc1tsaXN0SW5kZXggLSAxXS5saXN0SW5kZXggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyBtb3ZlIGJvdW5kIHJldHJpZXZhbCBmb3IgYWxsIG5vZGVzIHRvIGEgbGF0ZXIgc3RhZ2U/XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnZlZEJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRDdXJ2ZXMpKF90aGlzLmJvdW5kcywgX3RoaXMuc3R5bGUuYm9yZGVyLCBfdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbWFnZSA9IGdldEltYWdlKG5vZGUsIHJlc291cmNlTG9hZGVyKTtcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBJU19JTlBVVCA/ICgwLCBfSW5wdXQucmVmb3JtYXRJbnB1dEJvdW5kcykoKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpKSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCBzY3JvbGxYLCBzY3JvbGxZKTtcbiAgICAgICAgdGhpcy5jdXJ2ZWRCb3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kQ3VydmVzKSh0aGlzLmJvdW5kcywgdGhpcy5zdHlsZS5ib3JkZXIsIHRoaXMuc3R5bGUuYm9yZGVyUmFkaXVzKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gJycgKyBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSArIChub2RlLmlkID8gJyMnICsgbm9kZS5pZCA6ICcnKSArIG5vZGUuY2xhc3NOYW1lLnRvU3RyaW5nKCkuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5sZW5ndGggPyAnLicgKyBzIDogJyc7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhOb2RlQ29udGFpbmVyLCBbe1xuICAgICAgICBrZXk6ICdnZXRDbGlwUGF0aHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2xpcFBhdGhzKCkge1xuICAgICAgICAgICAgdmFyIHBhcmVudENsaXBzID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5nZXRDbGlwUGF0aHMoKSA6IFtdO1xuICAgICAgICAgICAgdmFyIGlzQ2xpcHBlZCA9IHRoaXMuc3R5bGUub3ZlcmZsb3cgIT09IF9vdmVyZmxvdy5PVkVSRkxPVy5WSVNJQkxFO1xuXG4gICAgICAgICAgICByZXR1cm4gaXNDbGlwcGVkID8gcGFyZW50Q2xpcHMuY29uY2F0KFsoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCkodGhpcy5jdXJ2ZWRCb3VuZHMpXSkgOiBwYXJlbnRDbGlwcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNJbkZsb3cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbkZsb3coKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3RFbGVtZW50KCkgJiYgIXRoaXMuaXNGbG9hdGluZygpICYmICF0aGlzLmlzQWJzb2x1dGVseVBvc2l0aW9uZWQoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNWaXNpYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuTk9ORSkgJiYgdGhpcy5zdHlsZS5vcGFjaXR5ID4gMCAmJiB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPT09IF92aXNpYmlsaXR5LlZJU0lCSUxJVFkuVklTSUJMRTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNBYnNvbHV0ZWx5UG9zaXRpb25lZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Fic29sdXRlbHlQb3NpdGlvbmVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5TVEFUSUMgJiYgdGhpcy5zdHlsZS5wb3NpdGlvbiAhPT0gX3Bvc2l0aW9uLlBPU0lUSU9OLlJFTEFUSVZFO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1Bvc2l0aW9uZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQb3NpdGlvbmVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5TVEFUSUM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzRmxvYXRpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNGbG9hdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLmZsb2F0ICE9PSBfZmxvYXQuRkxPQVQuTk9ORTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNSb290RWxlbWVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Jvb3RFbGVtZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID09PSBudWxsO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1RyYW5zZm9ybWVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHJhbnNmb3JtZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS50cmFuc2Zvcm0gIT09IG51bGw7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzUG9zaXRpb25lZFdpdGhaSW5kZXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQb3NpdGlvbmVkV2l0aFpJbmRleCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUG9zaXRpb25lZCgpICYmICF0aGlzLnN0eWxlLnpJbmRleC5hdXRvO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0lubGluZUxldmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5saW5lTGV2ZWwoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfQkxPQ0spIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9GTEVYKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfR1JJRCkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0xJU1RfSVRFTSkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX1RBQkxFKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaXNJbmxpbmVCbG9ja09ySW5saW5lVGFibGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbmxpbmVCbG9ja09ySW5saW5lVGFibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0JMT0NLKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfVEFCTEUpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE5vZGVDb250YWluZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5vZGVDb250YWluZXI7XG5cblxudmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2Uobm9kZSwgcmVzb3VyY2VMb2FkZXIpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdTVkdFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSB7XG4gICAgICAgIC8vIFRPRE86IHVzZSBjYW52ZyB0byBjb252ZXIgU1ZHXG4gICAgICAgIHZhciBzID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLmxvYWRTVkcocy5zZXJpYWxpemVUb1N0cmluZyhub2RlKSk7XG4gICAgICAgIC8vIHJlc291cmNlTG9hZGVyLmxvYWRJbWFnZShcbiAgICAgICAgLy8gICAgIGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtlbmNvZGVVUklDb21wb25lbnQocy5zZXJpYWxpemVUb1N0cmluZyhub2RlKSl9YFxuICAgICAgICAvLyApO1xuICAgIH1cbiAgICBzd2l0Y2ggKG5vZGUudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdJTUcnOlxuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgdmFyIGltZyA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKGltZy5jdXJyZW50U3JjIHx8IGltZy5zcmMpO1xuICAgICAgICBjYXNlICdDQU5WQVMnOlxuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIubG9hZENhbnZhcyhjYW52YXMpO1xuICAgICAgICBjYXNlICdJRlJBTUUnOlxuICAgICAgICAgICAgdmFyIGlmcmFtZUtleSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWludGVybmFsLWlmcmFtZS1rZXknKTtcbiAgICAgICAgICAgIGlmIChpZnJhbWVLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Ob2RlUGFyc2VyID0gdW5kZWZpbmVkO1xuXG52YXIgX1N0YWNraW5nQ29udGV4dCA9IHJlcXVpcmUoJy4vU3RhY2tpbmdDb250ZXh0Jyk7XG5cbnZhciBfU3RhY2tpbmdDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YWNraW5nQ29udGV4dCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IHJlcXVpcmUoJy4vVGV4dENvbnRhaW5lcicpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfTGlzdEl0ZW0gPSByZXF1aXJlKCcuL0xpc3RJdGVtJyk7XG5cbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTm9kZVBhcnNlciA9IGV4cG9ydHMuTm9kZVBhcnNlciA9IGZ1bmN0aW9uIE5vZGVQYXJzZXIobm9kZSwgcmVzb3VyY2VMb2FkZXIsIGxvZ2dlcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5sb2coJ1N0YXJ0aW5nIG5vZGUgcGFyc2luZycpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IDA7XG5cbiAgICB2YXIgY29udGFpbmVyID0gbmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KG5vZGUsIG51bGwsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICB2YXIgc3RhY2sgPSBuZXcgX1N0YWNraW5nQ29udGV4dDIuZGVmYXVsdChjb250YWluZXIsIG51bGwsIHRydWUpO1xuXG4gICAgcGFyc2VOb2RlVHJlZShub2RlLCBjb250YWluZXIsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnRmluaXNoZWQgcGFyc2luZyBub2RlIHRyZWUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG59O1xuXG52YXIgSUdOT1JFRF9OT0RFX05BTUVTID0gWydTQ1JJUFQnLCAnSEVBRCcsICdUSVRMRScsICdPQkpFQ1QnLCAnQlInLCAnT1BUSU9OJ107XG5cbnZhciBwYXJzZU5vZGVUcmVlID0gZnVuY3Rpb24gcGFyc2VOb2RlVHJlZShub2RlLCBwYXJlbnQsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbmRleCA+IDUwMDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVjdXJzaW9uIGVycm9yIHdoaWxlIHBhcnNpbmcgbm9kZSB0cmVlJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgY2hpbGROb2RlID0gbm9kZS5maXJzdENoaWxkLCBuZXh0Tm9kZTsgY2hpbGROb2RlOyBjaGlsZE5vZGUgPSBuZXh0Tm9kZSkge1xuICAgICAgICBuZXh0Tm9kZSA9IGNoaWxkTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gY2hpbGROb2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5UZXh0IHx8IGNoaWxkTm9kZSBpbnN0YW5jZW9mIFRleHQgfHwgZGVmYXVsdFZpZXcucGFyZW50ICYmIGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LnBhcmVudC5UZXh0KSB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmRhdGEudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGROb2Rlcy5wdXNoKF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0LmZyb21UZXh0Tm9kZShjaGlsZE5vZGUsIHBhcmVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LkhUTUxFbGVtZW50IHx8IGNoaWxkTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGRlZmF1bHRWaWV3LnBhcmVudCAmJiBjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5wYXJlbnQuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChJR05PUkVEX05PREVfTkFNRVMuaW5kZXhPZihjaGlsZE5vZGUubm9kZU5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQoY2hpbGROb2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9JbnB1dC5pbmxpbmVJbnB1dEVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgKDAsIF9JbnB1dC5pbmxpbmVUZXh0QXJlYUVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lU2VsZWN0RWxlbWVudCkoY2hpbGROb2RlLCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGUgJiYgY29udGFpbmVyLnN0eWxlLmxpc3RTdHlsZS5saXN0U3R5bGVUeXBlICE9PSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5OT05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX0xpc3RJdGVtLmlubGluZUxpc3RJdGVtRWxlbWVudCkoY2hpbGROb2RlLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBTSE9VTERfVFJBVkVSU0VfQ0hJTERSRU4gPSBjaGlsZE5vZGUudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID0gY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgY3JlYXRlc1N0YWNraW5nQ29udGV4dChjb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQ6ZmFsc2UsIGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTdGFjayA9IHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IGNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSA/IHN0YWNrLmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSA6IHN0YWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkU3RhY2sgPSBuZXcgX1N0YWNraW5nQ29udGV4dDIuZGVmYXVsdChjb250YWluZXIsIHBhcmVudFN0YWNrLCB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTdGFjay5jb250ZXh0cy5wdXNoKGNoaWxkU3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlTm9kZVRyZWUoY2hpbGROb2RlLCBjb250YWluZXIsIGNoaWxkU3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5jaGlsZHJlbi5wdXNoKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoU0hPVUxEX1RSQVZFUlNFX0NISUxEUkVOKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VOb2RlVHJlZShjaGlsZE5vZGUsIGNvbnRhaW5lciwgc3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuU1ZHU1ZHRWxlbWVudCB8fCBjaGlsZE5vZGUgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50IHx8IGRlZmF1bHRWaWV3LnBhcmVudCAmJiBjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5wYXJlbnQuU1ZHU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIF9jb250YWluZXIgPSBuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQoY2hpbGROb2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcbiAgICAgICAgICAgIHZhciBfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPSBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dChfY29udGFpbmVyLCBjaGlsZE5vZGUpO1xuICAgICAgICAgICAgaWYgKF90cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCB8fCBjcmVhdGVzU3RhY2tpbmdDb250ZXh0KF9jb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgLy8gZm9yIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0OmZhbHNlLCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHNcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dCBzaG91bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwYXJlbnQgc3RhY2tpbmcgY29udGV4dFxuICAgICAgICAgICAgICAgIHZhciBfcGFyZW50U3RhY2sgPSBfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgX2NvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSA/IHN0YWNrLmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSA6IHN0YWNrO1xuICAgICAgICAgICAgICAgIHZhciBfY2hpbGRTdGFjayA9IG5ldyBfU3RhY2tpbmdDb250ZXh0Mi5kZWZhdWx0KF9jb250YWluZXIsIF9wYXJlbnRTdGFjaywgX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KTtcbiAgICAgICAgICAgICAgICBfcGFyZW50U3RhY2suY29udGV4dHMucHVzaChfY2hpbGRTdGFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goX2NvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dChjb250YWluZXIsIG5vZGUpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmlzUm9vdEVsZW1lbnQoKSB8fCBjb250YWluZXIuaXNQb3NpdGlvbmVkV2l0aFpJbmRleCgpIHx8IGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5IDwgMSB8fCBjb250YWluZXIuaXNUcmFuc2Zvcm1lZCgpIHx8IGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QoY29udGFpbmVyLCBub2RlKTtcbn07XG5cbnZhciBjcmVhdGVzU3RhY2tpbmdDb250ZXh0ID0gZnVuY3Rpb24gY3JlYXRlc1N0YWNraW5nQ29udGV4dChjb250YWluZXIpIHtcbiAgICByZXR1cm4gY29udGFpbmVyLmlzUG9zaXRpb25lZCgpIHx8IGNvbnRhaW5lci5pc0Zsb2F0aW5nKCk7XG59O1xuXG52YXIgaXNCb2R5V2l0aFRyYW5zcGFyZW50Um9vdCA9IGZ1bmN0aW9uIGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QoY29udGFpbmVyLCBub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZU5hbWUgPT09ICdCT0RZJyAmJiBjb250YWluZXIucGFyZW50IGluc3RhbmNlb2YgX05vZGVDb250YWluZXIyLmRlZmF1bHQgJiYgY29udGFpbmVyLnBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Qcm94eSA9IHVuZGVmaW5lZDtcblxudmFyIF9GZWF0dXJlID0gcmVxdWlyZSgnLi9GZWF0dXJlJyk7XG5cbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFByb3h5ID0gZXhwb3J0cy5Qcm94eSA9IGZ1bmN0aW9uIFByb3h5KHNyYywgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wcm94eSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdObyBwcm94eSBkZWZpbmVkJyA6IG51bGwpO1xuICAgIH1cbiAgICB2YXIgcHJveHkgPSBvcHRpb25zLnByb3h5O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlVHlwZSA9IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQ09SU19YSFIgJiYgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9SRVNQT05TRV9UWVBFID8gJ2Jsb2InIDogJ3RleHQnO1xuICAgICAgICB2YXIgeGhyID0gX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9DT1JTX1hIUiA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyIGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdGYWlsZWQgdG8gcHJveHkgcmVzb3VyY2UgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSArICcgd2l0aCBzdGF0dXMgY29kZSAnICsgeGhyLnN0YXR1cyA6ICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwcm94eSArICc/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoc3JjKSArICcmcmVzcG9uc2VUeXBlPScgKyByZXNwb25zZVR5cGUpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZVR5cGUgIT09ICd0ZXh0JyAmJiB4aHIgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmltYWdlVGltZW91dCkge1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBvcHRpb25zLmltYWdlVGltZW91dDtcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIHByb3h5aW5nICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgOiAnJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQ29udGVudCA9IGV4cG9ydHMucmVzb2x2ZVBzZXVkb0NvbnRlbnQgPSBleHBvcnRzLnBvcENvdW50ZXJzID0gZXhwb3J0cy5wYXJzZUNvdW50ZXJSZXNldCA9IGV4cG9ydHMuVE9LRU5fVFlQRSA9IGV4cG9ydHMuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTGlzdEl0ZW0gPSByZXF1aXJlKCcuL0xpc3RJdGVtJyk7XG5cbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xuXG52YXIgUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0gZXhwb3J0cy5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUgPSB7XG4gICAgVEVYVDogMCxcbiAgICBJTUFHRTogMVxufTtcblxudmFyIFRPS0VOX1RZUEUgPSBleHBvcnRzLlRPS0VOX1RZUEUgPSB7XG4gICAgU1RSSU5HOiAwLFxuICAgIEFUVFJJQlVURTogMSxcbiAgICBVUkw6IDIsXG4gICAgQ09VTlRFUjogMyxcbiAgICBDT1VOVEVSUzogNCxcbiAgICBPUEVOUVVPVEU6IDUsXG4gICAgQ0xPU0VRVU9URTogNlxufTtcblxudmFyIHBhcnNlQ291bnRlclJlc2V0ID0gZXhwb3J0cy5wYXJzZUNvdW50ZXJSZXNldCA9IGZ1bmN0aW9uIHBhcnNlQ291bnRlclJlc2V0KHN0eWxlLCBkYXRhKSB7XG4gICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuY291bnRlclJlc2V0IHx8IHN0eWxlLmNvdW50ZXJSZXNldCA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgY291bnRlck5hbWVzID0gW107XG4gICAgdmFyIGNvdW50ZXJSZXNldHMgPSBzdHlsZS5jb3VudGVyUmVzZXQuc3BsaXQoL1xccyosXFxzKi8pO1xuICAgIHZhciBsZW5Db3VudGVyUmVzZXRzID0gY291bnRlclJlc2V0cy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbkNvdW50ZXJSZXNldHM7IGkrKykge1xuICAgICAgICB2YXIgX2NvdW50ZXJSZXNldHMkaSRzcGxpID0gY291bnRlclJlc2V0c1tpXS5zcGxpdCgvXFxzKy8pLFxuICAgICAgICAgICAgX2NvdW50ZXJSZXNldHMkaSRzcGxpMiA9IF9zbGljZWRUb0FycmF5KF9jb3VudGVyUmVzZXRzJGkkc3BsaSwgMiksXG4gICAgICAgICAgICBjb3VudGVyTmFtZSA9IF9jb3VudGVyUmVzZXRzJGkkc3BsaTJbMF0sXG4gICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBfY291bnRlclJlc2V0cyRpJHNwbGkyWzFdO1xuXG4gICAgICAgIGNvdW50ZXJOYW1lcy5wdXNoKGNvdW50ZXJOYW1lKTtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lXTtcbiAgICAgICAgaWYgKCFjb3VudGVyKSB7XG4gICAgICAgICAgICBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudGVyLnB1c2gocGFyc2VJbnQoaW5pdGlhbFZhbHVlIHx8IDAsIDEwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvdW50ZXJOYW1lcztcbn07XG5cbnZhciBwb3BDb3VudGVycyA9IGV4cG9ydHMucG9wQ291bnRlcnMgPSBmdW5jdGlvbiBwb3BDb3VudGVycyhjb3VudGVyTmFtZXMsIGRhdGEpIHtcbiAgICB2YXIgbGVuQ291bnRlcnMgPSBjb3VudGVyTmFtZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuQ291bnRlcnM7IGkrKykge1xuICAgICAgICBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lc1tpXV0ucG9wKCk7XG4gICAgfVxufTtcblxudmFyIHJlc29sdmVQc2V1ZG9Db250ZW50ID0gZXhwb3J0cy5yZXNvbHZlUHNldWRvQ29udGVudCA9IGZ1bmN0aW9uIHJlc29sdmVQc2V1ZG9Db250ZW50KG5vZGUsIHN0eWxlLCBkYXRhKSB7XG4gICAgaWYgKCFzdHlsZSB8fCAhc3R5bGUuY29udGVudCB8fCBzdHlsZS5jb250ZW50ID09PSAnbm9uZScgfHwgc3R5bGUuY29udGVudCA9PT0gJy1tb3otYWx0LWNvbnRlbnQnIHx8IHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdG9rZW5zID0gcGFyc2VDb250ZW50KHN0eWxlLmNvbnRlbnQpO1xuXG4gICAgdmFyIGxlbiA9IHRva2Vucy5sZW5ndGg7XG4gICAgdmFyIGNvbnRlbnRJdGVtcyA9IFtdO1xuICAgIHZhciBzID0gJyc7XG5cbiAgICAvLyBpbmNyZW1lbnQgdGhlIGNvdW50ZXIgKGlmIHRoZXJlIGlzIGEgXCJjb3VudGVyLWluY3JlbWVudFwiIGRlY2xhcmF0aW9uKVxuICAgIHZhciBjb3VudGVySW5jcmVtZW50ID0gc3R5bGUuY291bnRlckluY3JlbWVudDtcbiAgICBpZiAoY291bnRlckluY3JlbWVudCAmJiBjb3VudGVySW5jcmVtZW50ICE9PSAnbm9uZScpIHtcbiAgICAgICAgdmFyIF9jb3VudGVySW5jcmVtZW50JHNwbCA9IGNvdW50ZXJJbmNyZW1lbnQuc3BsaXQoL1xccysvKSxcbiAgICAgICAgICAgIF9jb3VudGVySW5jcmVtZW50JHNwbDIgPSBfc2xpY2VkVG9BcnJheShfY291bnRlckluY3JlbWVudCRzcGwsIDIpLFxuICAgICAgICAgICAgY291bnRlck5hbWUgPSBfY291bnRlckluY3JlbWVudCRzcGwyWzBdLFxuICAgICAgICAgICAgaW5jcmVtZW50VmFsdWUgPSBfY291bnRlckluY3JlbWVudCRzcGwyWzFdO1xuXG4gICAgICAgIHZhciBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV07XG4gICAgICAgIGlmIChjb3VudGVyKSB7XG4gICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gKz0gaW5jcmVtZW50VmFsdWUgPT09IHVuZGVmaW5lZCA/IDEgOiBwYXJzZUludChpbmNyZW1lbnRWYWx1ZSwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYnVpbGQgdGhlIGNvbnRlbnQgc3RyaW5nXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLlNUUklORzpcbiAgICAgICAgICAgICAgICBzICs9IHRva2VuLnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQVRUUklCVVRFOlxuICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdG9rZW4udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBub2RlLmdldEF0dHJpYnV0ZSh0b2tlbi52YWx1ZSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQ09VTlRFUjpcbiAgICAgICAgICAgICAgICB2YXIgX2NvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW3Rva2VuLm5hbWUgfHwgJyddO1xuICAgICAgICAgICAgICAgIGlmIChfY291bnRlcikge1xuICAgICAgICAgICAgICAgICAgICBzICs9IGZvcm1hdENvdW50ZXJWYWx1ZShbX2NvdW50ZXJbX2NvdW50ZXIubGVuZ3RoIC0gMV1dLCAnJywgdG9rZW4uZm9ybWF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5DT1VOVEVSUzpcbiAgICAgICAgICAgICAgICB2YXIgX2NvdW50ZXJzID0gZGF0YS5jb3VudGVyc1t0b2tlbi5uYW1lIHx8ICcnXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NvdW50ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gZm9ybWF0Q291bnRlclZhbHVlKF9jb3VudGVycywgdG9rZW4uZ2x1ZSwgdG9rZW4uZm9ybWF0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5PUEVOUVVPVEU6XG4gICAgICAgICAgICAgICAgcyArPSBnZXRRdW90ZShzdHlsZSwgdHJ1ZSwgZGF0YS5xdW90ZURlcHRoKTtcbiAgICAgICAgICAgICAgICBkYXRhLnF1b3RlRGVwdGgrKztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkNMT1NFUVVPVEU6XG4gICAgICAgICAgICAgICAgZGF0YS5xdW90ZURlcHRoLS07XG4gICAgICAgICAgICAgICAgcyArPSBnZXRRdW90ZShzdHlsZSwgZmFsc2UsIGRhdGEucXVvdGVEZXB0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5VUkw6XG4gICAgICAgICAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEl0ZW1zLnB1c2goeyB0eXBlOiBQU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuVEVYVCwgdmFsdWU6IHMgfSk7XG4gICAgICAgICAgICAgICAgICAgIHMgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudEl0ZW1zLnB1c2goeyB0eXBlOiBQU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuSU1BR0UsIHZhbHVlOiB0b2tlbi52YWx1ZSB8fCAnJyB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzKSB7XG4gICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLlRFWFQsIHZhbHVlOiBzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50SXRlbXM7XG59O1xuXG52YXIgcGFyc2VDb250ZW50ID0gZXhwb3J0cy5wYXJzZUNvbnRlbnQgPSBmdW5jdGlvbiBwYXJzZUNvbnRlbnQoY29udGVudCwgY2FjaGUpIHtcbiAgICBpZiAoY2FjaGUgJiYgY2FjaGVbY29udGVudF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2NvbnRlbnRdO1xuICAgIH1cblxuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgbGVuID0gY29udGVudC5sZW5ndGg7XG5cbiAgICB2YXIgaXNTdHJpbmcgPSBmYWxzZTtcbiAgICB2YXIgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSBmYWxzZTtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGZ1bmN0aW9uTmFtZSA9ICcnO1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gY29udGVudC5jaGFyQXQoaSk7XG5cbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICBjYXNlIFwiJ1wiOlxuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgICAgIGlmIChpc0VzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTdHJpbmcgPSAhaXNTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbiAmJiAhaXNTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5TVFJJTkcsIHZhbHVlOiBzdHIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzRXNjYXBlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lID0gc3RyO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnKSc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZnVuY3Rpb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5BVFRSSUJVVEUsIHZhbHVlOiBhcmdzWzBdIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY291bnRlcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRPS0VOX1RZUEUuQ09VTlRFUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFyZ3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlci5mb3JtYXQgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKGNvdW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY291bnRlcnMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9jb3VudGVyczIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUT0tFTl9UWVBFLkNPVU5URVJTLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnRlcnMyLmdsdWUgPSBhcmdzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb3VudGVyczIuZm9ybWF0ID0gYXJnc1syXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaChfY291bnRlcnMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuVVJMLCB2YWx1ZTogYXJnc1swXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZE90aGVyVG9rZW4odG9rZW5zLCBzdHIpO1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3RyICs9IGM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyAhPT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICBpc0VzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHIpIHtcbiAgICAgICAgYWRkT3RoZXJUb2tlbih0b2tlbnMsIHN0cik7XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlW2NvbnRlbnRdID0gdG9rZW5zO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG59O1xuXG52YXIgYWRkT3RoZXJUb2tlbiA9IGZ1bmN0aW9uIGFkZE90aGVyVG9rZW4odG9rZW5zLCBpZGVudGlmaWVyKSB7XG4gICAgc3dpdGNoIChpZGVudGlmaWVyKSB7XG4gICAgICAgIGNhc2UgJ29wZW4tcXVvdGUnOlxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLk9QRU5RVU9URSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjbG9zZS1xdW90ZSc6XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuQ0xPU0VRVU9URSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG5cbnZhciBnZXRRdW90ZSA9IGZ1bmN0aW9uIGdldFF1b3RlKHN0eWxlLCBpc09wZW5pbmcsIHF1b3RlRGVwdGgpIHtcbiAgICB2YXIgcXVvdGVzID0gc3R5bGUucXVvdGVzID8gc3R5bGUucXVvdGVzLnNwbGl0KC9cXHMrLykgOiBbXCInXFxcIidcIiwgXCInXFxcIidcIl07XG4gICAgdmFyIGlkeCA9IHF1b3RlRGVwdGggKiAyO1xuICAgIGlmIChpZHggPj0gcXVvdGVzLmxlbmd0aCkge1xuICAgICAgICBpZHggPSBxdW90ZXMubGVuZ3RoIC0gMjtcbiAgICB9XG4gICAgaWYgKCFpc09wZW5pbmcpIHtcbiAgICAgICAgKytpZHg7XG4gICAgfVxuICAgIHJldHVybiBxdW90ZXNbaWR4XS5yZXBsYWNlKC9eW1wiJ118W1wiJ10kL2csICcnKTtcbn07XG5cbnZhciBmb3JtYXRDb3VudGVyVmFsdWUgPSBmdW5jdGlvbiBmb3JtYXRDb3VudGVyVmFsdWUoY291bnRlciwgZ2x1ZSwgZm9ybWF0KSB7XG4gICAgdmFyIGxlbiA9IGNvdW50ZXIubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZ2x1ZSB8fCAnJztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gKDAsIF9MaXN0SXRlbS5jcmVhdGVDb3VudGVyVGV4dCkoY291bnRlcltpXSwgKDAsIF9saXN0U3R5bGUucGFyc2VMaXN0U3R5bGVUeXBlKShmb3JtYXQgfHwgJ2RlY2ltYWwnKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi9Cb3VuZHMnKTtcblxudmFyIF9Gb250ID0gcmVxdWlyZSgnLi9Gb250Jyk7XG5cbnZhciBfR3JhZGllbnQgPSByZXF1aXJlKCcuL0dyYWRpZW50Jyk7XG5cbnZhciBfVGV4dENvbnRhaW5lciA9IHJlcXVpcmUoJy4vVGV4dENvbnRhaW5lcicpO1xuXG52YXIgX1RleHRDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dENvbnRhaW5lcik7XG5cbnZhciBfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vcGFyc2luZy9iYWNrZ3JvdW5kJyk7XG5cbnZhciBfYm9yZGVyID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JvcmRlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVuZGVyZXIodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRhcmdldC5yZW5kZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlbmRlcmVyLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5vZGUoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDb250ZW50KGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck5vZGVDb250ZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5vZGVDb250ZW50KGNvbnRhaW5lcikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgX1RleHRDb250YWluZXIyLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBjaGlsZC5wYXJlbnQuc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LnJlbmRlclRleHROb2RlKGNoaWxkLmJvdW5kcywgc3R5bGUuY29sb3IsIHN0eWxlLmZvbnQsIHN0eWxlLnRleHREZWNvcmF0aW9uLCBzdHlsZS50ZXh0U2hhZG93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRyYXdTaGFwZShjaGlsZCwgY29udGFpbmVyLnN0eWxlLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2ltYWdlID0gX3RoaXMub3B0aW9ucy5pbWFnZVN0b3JlLmdldChjb250YWluZXIuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2ltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudEJveCA9ICgwLCBfQm91bmRzLmNhbGN1bGF0ZUNvbnRlbnRCb3gpKGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfd2lkdGggPSB0eXBlb2YgX2ltYWdlLndpZHRoID09PSAnbnVtYmVyJyAmJiBfaW1hZ2Uud2lkdGggPiAwID8gX2ltYWdlLndpZHRoIDogY29udGVudEJveC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfaGVpZ2h0ID0gdHlwZW9mIF9pbWFnZS5oZWlnaHQgPT09ICdudW1iZXInICYmIF9pbWFnZS5oZWlnaHQgPiAwID8gX2ltYWdlLmhlaWdodCA6IGNvbnRlbnRCb3guaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF93aWR0aCA+IDAgJiYgX2hlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuY2xpcChbKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgpKGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMpXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZHJhd0ltYWdlKF9pbWFnZSwgbmV3IF9Cb3VuZHMuQm91bmRzKDAsIDAsIF93aWR0aCwgX2hlaWdodCksIGNvbnRlbnRCb3gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwYXRocyA9IGNvbnRhaW5lci5nZXRDbGlwUGF0aHMoKTtcbiAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5jbGlwKHBhdGhzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck5vZGVCYWNrZ3JvdW5kQW5kQm9yZGVycycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIEhBU19CQUNLR1JPVU5EID0gIWNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgfHwgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLmxlbmd0aDtcblxuICAgICAgICAgICAgdmFyIGhhc1JlbmRlcmFibGVCb3JkZXJzID0gY29udGFpbmVyLnN0eWxlLmJvcmRlci5zb21lKGZ1bmN0aW9uIChib3JkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9yZGVyLmJvcmRlclN0eWxlICE9PSBfYm9yZGVyLkJPUkRFUl9TVFlMRS5OT05FICYmICFib3JkZXIuYm9yZGVyQ29sb3IuaXNUcmFuc3BhcmVudCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUGFpbnRpbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEpKGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMsIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDbGlwKTtcblxuICAgICAgICAgICAgICAgIGlmIChIQVNfQkFDS0dST1VORCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIudGFyZ2V0LmNsaXAoW2JhY2tncm91bmRQYWludGluZ0FyZWFdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudGFyZ2V0LmZpbGwoY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckJhY2tncm91bmRJbWFnZShjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGJvcmRlciwgc2lkZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm9yZGVyLmJvcmRlclN0eWxlICE9PSBfYm9yZGVyLkJPUkRFUl9TVFlMRS5OT05FICYmICFib3JkZXIuYm9yZGVyQ29sb3IuaXNUcmFuc3BhcmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIucmVuZGVyQm9yZGVyKGJvcmRlciwgc2lkZSwgY29udGFpbmVyLmN1cnZlZEJvdW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChIQVNfQkFDS0dST1VORCB8fCBoYXNSZW5kZXJhYmxlQm9yZGVycykge1xuICAgICAgICAgICAgICAgIHZhciBwYXRocyA9IGNvbnRhaW5lci5wYXJlbnQgPyBjb250YWluZXIucGFyZW50LmdldENsaXBQYXRocygpIDogW107XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5jbGlwKHBhdGhzLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCYWNrZ3JvdW5kSW1hZ2UoY29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLnNsaWNlKDApLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlLnNvdXJjZS5tZXRob2QgPT09ICd1cmwnICYmIGJhY2tncm91bmRJbWFnZS5zb3VyY2UuYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlbmRlckJhY2tncm91bmRSZXBlYXQoY29udGFpbmVyLCBiYWNrZ3JvdW5kSW1hZ2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoL2dyYWRpZW50L2kudGVzdChiYWNrZ3JvdW5kSW1hZ2Uuc291cmNlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlbmRlckJhY2tncm91bmRHcmFkaWVudChjb250YWluZXIsIGJhY2tncm91bmRJbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRSZXBlYXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZFJlcGVhdChjb250YWluZXIsIGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IHRoaXMub3B0aW9ucy5pbWFnZVN0b3JlLmdldChiYWNrZ3JvdW5kLnNvdXJjZS5hcmdzWzBdKTtcbiAgICAgICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEpKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRPcmlnaW4sIGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZEltYWdlU2l6ZSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSkoYmFja2dyb3VuZCwgaW1hZ2UsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24pKGJhY2tncm91bmQucG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgICAgIHZhciBfcGF0aCA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCkoYmFja2dyb3VuZCwgcG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEsIGNvbnRhaW5lci5ib3VuZHMpO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9vZmZzZXRYID0gTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KTtcbiAgICAgICAgICAgICAgICB2YXIgX29mZnNldFkgPSBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyUmVwZWF0KF9wYXRoLCBpbWFnZSwgYmFja2dyb3VuZEltYWdlU2l6ZSwgX29mZnNldFgsIF9vZmZzZXRZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyQmFja2dyb3VuZEdyYWRpZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJhY2tncm91bmRHcmFkaWVudChjb250YWluZXIsIGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEpKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRPcmlnaW4sIGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2VTaXplID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUpKGJhY2tncm91bmQsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbikoYmFja2dyb3VuZC5wb3NpdGlvbiwgYmFja2dyb3VuZEltYWdlU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSk7XG4gICAgICAgICAgICB2YXIgZ3JhZGllbnRCb3VuZHMgPSBuZXcgX0JvdW5kcy5Cb3VuZHMoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLndpZHRoLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLmhlaWdodCk7XG5cbiAgICAgICAgICAgIHZhciBncmFkaWVudCA9ICgwLCBfR3JhZGllbnQucGFyc2VHcmFkaWVudCkoY29udGFpbmVyLCBiYWNrZ3JvdW5kLnNvdXJjZSwgZ3JhZGllbnRCb3VuZHMpO1xuICAgICAgICAgICAgaWYgKGdyYWRpZW50KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChncmFkaWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgX0dyYWRpZW50LkdSQURJRU5UX1RZUEUuTElORUFSX0dSQURJRU5UOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyTGluZWFyR3JhZGllbnQoZ3JhZGllbnRCb3VuZHMsIGdyYWRpZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIF9HcmFkaWVudC5HUkFESUVOVF9UWVBFLlJBRElBTF9HUkFESUVOVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbmRlclJhZGlhbEdyYWRpZW50KGdyYWRpZW50Qm91bmRzLCBncmFkaWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckJvcmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCb3JkZXIoYm9yZGVyLCBzaWRlLCBjdXJ2ZVBvaW50cykge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuZHJhd1NoYXBlKCgwLCBfQm91bmRzLnBhcnNlUGF0aEZvckJvcmRlcikoY3VydmVQb2ludHMsIHNpZGUpLCBib3JkZXIuYm9yZGVyQ29sb3IpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJTdGFjaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdGFjayhzdGFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChzdGFjay5jb250YWluZXIuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX29wYWNpdHkgPSBzdGFjay5nZXRPcGFjaXR5KCk7XG4gICAgICAgICAgICAgICAgaWYgKF9vcGFjaXR5ICE9PSB0aGlzLl9vcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNldE9wYWNpdHkoc3RhY2suZ2V0T3BhY2l0eSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BhY2l0eSA9IF9vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBfdHJhbnNmb3JtID0gc3RhY2suY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBpZiAoX3RyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC50cmFuc2Zvcm0oc3RhY2suY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgX3RyYW5zZm9ybS50cmFuc2Zvcm1PcmlnaW5bMF0udmFsdWUsIHN0YWNrLmNvbnRhaW5lci5ib3VuZHMudG9wICsgX3RyYW5zZm9ybS50cmFuc2Zvcm1PcmlnaW5bMV0udmFsdWUsIF90cmFuc2Zvcm0udHJhbnNmb3JtLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM0LnJlbmRlclN0YWNrQ29udGVudChzdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhY2tDb250ZW50KHN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclN0YWNrQ29udGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdGFja0NvbnRlbnQoc3RhY2spIHtcbiAgICAgICAgICAgIHZhciBfc3BsaXRTdGFja2luZ0NvbnRleHQgPSBzcGxpdFN0YWNraW5nQ29udGV4dHMoc3RhY2spLFxuICAgICAgICAgICAgICAgIF9zcGxpdFN0YWNraW5nQ29udGV4dDIgPSBfc2xpY2VkVG9BcnJheShfc3BsaXRTdGFja2luZ0NvbnRleHQsIDUpLFxuICAgICAgICAgICAgICAgIG5lZ2F0aXZlWkluZGV4ID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlswXSxcbiAgICAgICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMV0sXG4gICAgICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXggPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzJdLFxuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRGbG9hdHMgPSBfc3BsaXRTdGFja2luZ0NvbnRleHQyWzNdLFxuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbNF07XG5cbiAgICAgICAgICAgIHZhciBfc3BsaXREZXNjZW5kYW50cyA9IHNwbGl0RGVzY2VuZGFudHMoc3RhY2spLFxuICAgICAgICAgICAgICAgIF9zcGxpdERlc2NlbmRhbnRzMiA9IF9zbGljZWRUb0FycmF5KF9zcGxpdERlc2NlbmRhbnRzLCAyKSxcbiAgICAgICAgICAgICAgICBpbmxpbmVMZXZlbCA9IF9zcGxpdERlc2NlbmRhbnRzMlswXSxcbiAgICAgICAgICAgICAgICBub25JbmxpbmVMZXZlbCA9IF9zcGxpdERlc2NlbmRhbnRzMlsxXTtcblxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1wb3NpdGlvbi0zLyNwYWludGluZy1vcmRlclxuICAgICAgICAgICAgLy8gMS4gdGhlIGJhY2tncm91bmQgYW5kIGJvcmRlcnMgb2YgdGhlIGVsZW1lbnQgZm9ybWluZyB0aGUgc3RhY2tpbmcgY29udGV4dC5cblxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVCYWNrZ3JvdW5kQW5kQm9yZGVycyhzdGFjay5jb250YWluZXIpO1xuICAgICAgICAgICAgLy8gMi4gdGhlIGNoaWxkIHN0YWNraW5nIGNvbnRleHRzIHdpdGggbmVnYXRpdmUgc3RhY2sgbGV2ZWxzIChtb3N0IG5lZ2F0aXZlIGZpcnN0KS5cbiAgICAgICAgICAgIG5lZ2F0aXZlWkluZGV4LnNvcnQoc29ydEJ5WkluZGV4KS5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gMy4gRm9yIGFsbCBpdHMgaW4tZmxvdywgbm9uLXBvc2l0aW9uZWQsIGJsb2NrLWxldmVsIGRlc2NlbmRhbnRzIGluIHRyZWUgb3JkZXI6XG4gICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDb250ZW50KHN0YWNrLmNvbnRhaW5lcik7XG4gICAgICAgICAgICBub25JbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyTm9kZSwgdGhpcyk7XG4gICAgICAgICAgICAvLyA0LiBBbGwgbm9uLXBvc2l0aW9uZWQgZmxvYXRpbmcgZGVzY2VuZGFudHMsIGluIHRyZWUgb3JkZXIuIEZvciBlYWNoIG9uZSBvZiB0aGVzZSxcbiAgICAgICAgICAgIC8vIHRyZWF0IHRoZSBlbGVtZW50IGFzIGlmIGl0IGNyZWF0ZWQgYSBuZXcgc3RhY2tpbmcgY29udGV4dCwgYnV0IGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50c1xuICAgICAgICAgICAgLy8gd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHQsXG4gICAgICAgICAgICAvLyBub3QgdGhpcyBuZXcgb25lLlxuICAgICAgICAgICAgbm9uUG9zaXRpb25lZEZsb2F0cy5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gNS4gdGhlIGluLWZsb3csIGlubGluZS1sZXZlbCwgbm9uLXBvc2l0aW9uZWQgZGVzY2VuZGFudHMsIGluY2x1ZGluZyBpbmxpbmUgdGFibGVzIGFuZCBpbmxpbmUgYmxvY2tzLlxuICAgICAgICAgICAgbm9uUG9zaXRpb25lZElubGluZUxldmVsLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XG4gICAgICAgICAgICBpbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyTm9kZSwgdGhpcyk7XG4gICAgICAgICAgICAvLyA2LiBBbGwgcG9zaXRpb25lZCwgb3BhY2l0eSBvciB0cmFuc2Zvcm0gZGVzY2VuZGFudHMsIGluIHRyZWUgb3JkZXIgdGhhdCBmYWxsIGludG8gdGhlIGZvbGxvd2luZyBjYXRlZ29yaWVzOlxuICAgICAgICAgICAgLy8gIEFsbCBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIHdpdGggJ3otaW5kZXg6IGF1dG8nIG9yICd6LWluZGV4OiAwJywgaW4gdHJlZSBvcmRlci5cbiAgICAgICAgICAgIC8vICBGb3IgdGhvc2Ugd2l0aCAnei1pbmRleDogYXV0bycsIHRyZWF0IHRoZSBlbGVtZW50IGFzIGlmIGl0IGNyZWF0ZWQgYSBuZXcgc3RhY2tpbmcgY29udGV4dCxcbiAgICAgICAgICAgIC8vICBidXQgYW55IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgYW5kIGRlc2NlbmRhbnRzIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZVxuICAgICAgICAgICAgLy8gIGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcGFyZW50IHN0YWNraW5nIGNvbnRleHQsIG5vdCB0aGlzIG5ldyBvbmUuIEZvciB0aG9zZSB3aXRoICd6LWluZGV4OiAwJyxcbiAgICAgICAgICAgIC8vICB0cmVhdCB0aGUgc3RhY2tpbmcgY29udGV4dCBnZW5lcmF0ZWQgYXRvbWljYWxseS5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgQWxsIG9wYWNpdHkgZGVzY2VuZGFudHMgd2l0aCBvcGFjaXR5IGxlc3MgdGhhbiAxXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gIEFsbCB0cmFuc2Zvcm0gZGVzY2VuZGFudHMgd2l0aCB0cmFuc2Zvcm0gb3RoZXIgdGhhbiBub25lXG4gICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eS5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xuICAgICAgICAgICAgLy8gNy4gU3RhY2tpbmcgY29udGV4dHMgZm9ybWVkIGJ5IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgd2l0aCB6LWluZGljZXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEgaW4gei1pbmRleFxuICAgICAgICAgICAgLy8gb3JkZXIgKHNtYWxsZXN0IGZpcnN0KSB0aGVuIHRyZWUgb3JkZXIuXG4gICAgICAgICAgICBwb3NpdGl2ZVpJbmRleC5zb3J0KHNvcnRCeVpJbmRleCkuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihzdGFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVjdGFuZ2xlKHRoaXMub3B0aW9ucy54LCB0aGlzLm9wdGlvbnMueSwgdGhpcy5vcHRpb25zLndpZHRoLCB0aGlzLm9wdGlvbnMuaGVpZ2h0LCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhY2soc3RhY2spO1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0LmdldFRhcmdldCgpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRoZW4oZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUub3B0aW9ucy5sb2dnZXIubG9nKCdSZW5kZXIgY29tcGxldGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcblxuXG52YXIgc3BsaXREZXNjZW5kYW50cyA9IGZ1bmN0aW9uIHNwbGl0RGVzY2VuZGFudHMoc3RhY2spIHtcbiAgICB2YXIgaW5saW5lTGV2ZWwgPSBbXTtcbiAgICB2YXIgbm9uSW5saW5lTGV2ZWwgPSBbXTtcblxuICAgIHZhciBsZW5ndGggPSBzdGFjay5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBzdGFjay5jaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKGNoaWxkLmlzSW5saW5lTGV2ZWwoKSkge1xuICAgICAgICAgICAgaW5saW5lTGV2ZWwucHVzaChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25JbmxpbmVMZXZlbC5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW2lubGluZUxldmVsLCBub25JbmxpbmVMZXZlbF07XG59O1xuXG52YXIgc3BsaXRTdGFja2luZ0NvbnRleHRzID0gZnVuY3Rpb24gc3BsaXRTdGFja2luZ0NvbnRleHRzKHN0YWNrKSB7XG4gICAgdmFyIG5lZ2F0aXZlWkluZGV4ID0gW107XG4gICAgdmFyIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5ID0gW107XG4gICAgdmFyIHBvc2l0aXZlWkluZGV4ID0gW107XG4gICAgdmFyIG5vblBvc2l0aW9uZWRGbG9hdHMgPSBbXTtcbiAgICB2YXIgbm9uUG9zaXRpb25lZElubGluZUxldmVsID0gW107XG4gICAgdmFyIGxlbmd0aCA9IHN0YWNrLmNvbnRleHRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHN0YWNrLmNvbnRleHRzW2ldO1xuICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLmlzUG9zaXRpb25lZCgpIHx8IGNoaWxkLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5IDwgMSB8fCBjaGlsZC5jb250YWluZXIuaXNUcmFuc2Zvcm1lZCgpKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA8IDApIHtcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZVpJbmRleC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA+IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGl2ZVpJbmRleC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbmVyLmlzRmxvYXRpbmcoKSkge1xuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRGbG9hdHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW25lZ2F0aXZlWkluZGV4LCB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSwgcG9zaXRpdmVaSW5kZXgsIG5vblBvc2l0aW9uZWRGbG9hdHMsIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbF07XG59O1xuXG52YXIgc29ydEJ5WkluZGV4ID0gZnVuY3Rpb24gc29ydEJ5WkluZGV4KGEsIGIpIHtcbiAgICBpZiAoYS5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyID4gYi5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoYS5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyIDwgYi5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5jb250YWluZXIuaW5kZXggPiBiLmNvbnRhaW5lci5pbmRleCA/IDEgOiAtMTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlJlc291cmNlU3RvcmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfRmVhdHVyZSA9IHJlcXVpcmUoJy4vRmVhdHVyZScpO1xuXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XG5cbnZhciBfUHJveHkgPSByZXF1aXJlKCcuL1Byb3h5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXNvdXJjZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNvdXJjZUxvYWRlcihvcHRpb25zLCBsb2dnZXIsIHdpbmRvdykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzb3VyY2VMb2FkZXIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuX3dpbmRvdyA9IHdpbmRvdztcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB0aGlzLmdldE9yaWdpbih3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmVzb3VyY2VMb2FkZXIsIFt7XG4gICAgICAgIGtleTogJ2xvYWRTVkcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFNWRyhkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50YWdOYW1lICE9ICdzdmcnIHx8IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfU1ZHX0RSQVdJTkcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkSW1hZ2UoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jYWNoZVtkYXRhXSA9IF9sb2FkU1ZHKGRhdGEsIHRoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbG9hZEltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1Jlc291cmNlSW5DYWNoZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0Jsb2JJbWFnZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gX2xvYWRJbWFnZShzcmMsIHRoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc1NWRyhzcmMpIHx8IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfU1ZHX0RSQVdJTkcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93VGFpbnQgPT09IHRydWUgfHwgaXNJbmxpbmVJbWFnZShzcmMpIHx8IHRoaXMuaXNTYW1lT3JpZ2luKHNyYykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2Uoc3JjLCBzcmMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzU2FtZU9yaWdpbihzcmMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnByb3h5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gKDAsIF9Qcm94eS5Qcm94eSkoc3JjLCB0aGlzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgX3RoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnVzZUNPUlMgPT09IHRydWUgJiYgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9DT1JTX0lNQUdFUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2Uoc3JjLCBzcmMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbmxpbmVJbWFnZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmxpbmVJbWFnZShzcmMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoaXNJbmxpbmVJbWFnZShzcmMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCB0aGlzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VJbkNhY2hlKHNyYykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtzcmNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2FtZU9yaWdpbihzcmMpICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMucHJveHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbc3JjXSA9ICgwLCBfUHJveHkuUHJveHkpKHNyYywgdGhpcy5vcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCBfdGhpczIub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhockltYWdlKHNyYyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3hockltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHhockltYWdlKHNyYykge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY2FjaGVbc3JjXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdGYWlsZWQgdG8gZmV0Y2ggaW1hZ2UgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSArICcgd2l0aCBzdGF0dXMgY29kZSAnICsgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZW91dCA9IF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGZldGNoaW5nICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBzcmMsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtzcmNdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2FkQ2FudmFzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRDYW52YXMobm9kZSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IFN0cmluZyh0aGlzLl9pbmRleCsrKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IFByb21pc2UucmVzb2x2ZShub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1Jlc291cmNlSW5DYWNoZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNSZXNvdXJjZUluQ2FjaGUoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuY2FjaGVba2V5XSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEltYWdlKGtleSwgc3JjLCB1c2VDT1JTKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coJ0FkZGVkIGltYWdlICcgKyBrZXkuc3Vic3RyaW5nKDAsIDI1NikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW1hZ2VMb2FkSGFuZGxlciA9IGZ1bmN0aW9uIGltYWdlTG9hZEhhbmRsZXIoc3VwcG9ydHNEYXRhSW1hZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy9pb3Mgc2FmYXJpIDEwLjMgdGFpbnRzIGNhbnZhcyB3aXRoIGRhdGEgdXJscyB1bmxlc3MgY3Jvc3NPcmlnaW4gaXMgc2V0IHRvIGFub255bW91c1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1cHBvcnRzRGF0YUltYWdlcyB8fCB1c2VDT1JTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW1nLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmxpbmUgWE1MIGltYWdlcyBtYXkgZmFpbCB0byBwYXJzZSwgdGhyb3dpbmcgYW4gRXJyb3IgbGF0ZXIgb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzNC5vcHRpb25zLmltYWdlVGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBfdGhpczQub3B0aW9ucy5pbWFnZVRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnVGltZWQgb3V0ICgnICsgdGltZW91dCArICdtcykgZmV0Y2hpbmcgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSBpc0lubGluZUJhc2U2NEltYWdlKHNyYykgJiYgIWlzU1ZHKHNyYykgPyAvLyAkRmxvd0ZpeE1lXG4gICAgICAgICAgICBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0JBU0U2NF9EUkFXSU5HKHNyYykudGhlbihpbWFnZUxvYWRIYW5kbGVyKSA6IGltYWdlTG9hZEhhbmRsZXIodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc1NhbWVPcmlnaW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTYW1lT3JpZ2luKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JpZ2luKHVybCkgPT09IHRoaXMub3JpZ2luO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRPcmlnaW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T3JpZ2luKHVybCkge1xuICAgICAgICAgICAgdmFyIGxpbmsgPSB0aGlzLl9saW5rIHx8ICh0aGlzLl9saW5rID0gdGhpcy5fd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBsaW5rLmhyZWY7IC8vIElFOSwgTE9MISAtIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvbmlrbGFzdmgvMmU0OGIvXG4gICAgICAgICAgICByZXR1cm4gbGluay5wcm90b2NvbCArIGxpbmsuaG9zdG5hbWUgKyBsaW5rLnBvcnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlYWR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jYWNoZSk7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0ga2V5cy5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczUuY2FjaGVbc3RyXS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM1LmxvZ2dlci5sb2coJ1VuYWJsZSB0byBsb2FkIGltYWdlJywgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh2YWx1ZXMpLnRoZW4oZnVuY3Rpb24gKGltYWdlcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5sb2dnZXIubG9nKCdGaW5pc2hlZCBsb2FkaW5nICcgKyBpbWFnZXMubGVuZ3RoICsgJyBpbWFnZXMnLCBpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc291cmNlU3RvcmUoa2V5cywgaW1hZ2VzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlc291cmNlTG9hZGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZUxvYWRlcjtcblxudmFyIFJlc291cmNlU3RvcmUgPSBleHBvcnRzLlJlc291cmNlU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb3VyY2VTdG9yZShrZXlzLCByZXNvdXJjZXMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc291cmNlU3RvcmUpO1xuXG4gICAgICAgIHRoaXMuX2tleXMgPSBrZXlzO1xuICAgICAgICB0aGlzLl9yZXNvdXJjZXMgPSByZXNvdXJjZXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlc291cmNlU3RvcmUsIFt7XG4gICAgICAgIGtleTogJ2dldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5fcmVzb3VyY2VzW2luZGV4XTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSZXNvdXJjZVN0b3JlO1xufSgpO1xuXG52YXIgSU5MSU5FX1NWRyA9IC9eZGF0YTppbWFnZVxcL3N2Z1xcK3htbC9pO1xudmFyIElOTElORV9CQVNFNjQgPSAvXmRhdGE6aW1hZ2VcXC8uKjtiYXNlNjQsL2k7XG52YXIgSU5MSU5FX0lNRyA9IC9eZGF0YTppbWFnZVxcLy4qL2k7XG5cbnZhciBpc0lubGluZUltYWdlID0gZnVuY3Rpb24gaXNJbmxpbmVJbWFnZShzcmMpIHtcbiAgICByZXR1cm4gSU5MSU5FX0lNRy50ZXN0KHNyYyk7XG59O1xudmFyIGlzSW5saW5lQmFzZTY0SW1hZ2UgPSBmdW5jdGlvbiBpc0lubGluZUJhc2U2NEltYWdlKHNyYykge1xuICAgIHJldHVybiBJTkxJTkVfQkFTRTY0LnRlc3Qoc3JjKTtcbn07XG52YXIgaXNCbG9iSW1hZ2UgPSBmdW5jdGlvbiBpc0Jsb2JJbWFnZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnN1YnN0cigwLCA0KSA9PT0gJ2Jsb2InO1xufTtcblxudmFyIGlzU1ZHID0gZnVuY3Rpb24gaXNTVkcoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zdWJzdHIoLTMpLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnIHx8IElOTElORV9TVkcudGVzdChzcmMpO1xufTtcblxudmFyIF9sb2FkU1ZHID0gZnVuY3Rpb24gX2xvYWRTVkcoZGF0YSwgdGltZW91dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJjYW52Z1wiICovJy4vbGlicy9jYW52ZycpLnRoZW4oZnVuY3Rpb24gKGNhbnZnKSB7XG4gICAgICAgICAgICAvLyBGb3IgQU1EIGltcG9ydGVkIGJ5IHdlYnBhY2tcbiAgICAgICAgICAgIGlmICghKGNhbnZnIGluc3RhbmNlb2YgRnVuY3Rpb24pKSBjYW52ZyA9IGNhbnZnLmRlZmF1bHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgICAgICBjYW52ZyhjYW52YXMsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ2FsbGJhY2s6IGZ1bmN0aW9uIHJlbmRlckNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgICAgICByZXNvbHZlKGNhbnZhcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGxvYWRpbmcgY2FudmFzJyA6ICcnKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgX2xvYWRJbWFnZSA9IGZ1bmN0aW9uIF9sb2FkSW1hZ2Uoc3JjLCB0aW1lb3V0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICAgIGlmIChpbWcuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIElubGluZSBYTUwgaW1hZ2VzIG1heSBmYWlsIHRvIHBhcnNlLCB0aHJvd2luZyBhbiBFcnJvciBsYXRlciBvblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGxvYWRpbmcgaW1hZ2UnIDogJycpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfTm9kZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4vTm9kZUNvbnRhaW5lcicpO1xuXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XG5cbnZhciBfcG9zaXRpb24gPSByZXF1aXJlKCcuL3BhcnNpbmcvcG9zaXRpb24nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0YWNraW5nQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBwYXJlbnQsIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFja2luZ0NvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5jb250ZXh0cyA9IFtdO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHRoaXMudHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgPSB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RhY2tpbmdDb250ZXh0LCBbe1xuICAgICAgICBrZXk6ICdnZXRPcGFjaXR5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9wYWNpdHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ICogdGhpcy5wYXJlbnQuZ2V0T3BhY2l0eSgpIDogdGhpcy5jb250YWluZXIuc3R5bGUub3BhY2l0eTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnBhcmVudCB8fCB0aGlzLnRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID8gdGhpcyA6IHRoaXMucGFyZW50LmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdGFja2luZ0NvbnRleHQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0YWNraW5nQ29udGV4dDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0Qm91bmRzID0gZXhwb3J0cy5UZXh0Qm91bmRzID0gdW5kZWZpbmVkO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XG5cbnZhciBfdGV4dERlY29yYXRpb24gPSByZXF1aXJlKCcuL3BhcnNpbmcvdGV4dERlY29yYXRpb24nKTtcblxudmFyIF9GZWF0dXJlID0gcmVxdWlyZSgnLi9GZWF0dXJlJyk7XG5cbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcblxudmFyIF9Vbmljb2RlID0gcmVxdWlyZSgnLi9Vbmljb2RlJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0Qm91bmRzID0gZXhwb3J0cy5UZXh0Qm91bmRzID0gZnVuY3Rpb24gVGV4dEJvdW5kcyh0ZXh0LCBib3VuZHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dEJvdW5kcyk7XG5cbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuYm91bmRzID0gYm91bmRzO1xufTtcblxudmFyIHBhcnNlVGV4dEJvdW5kcyA9IGV4cG9ydHMucGFyc2VUZXh0Qm91bmRzID0gZnVuY3Rpb24gcGFyc2VUZXh0Qm91bmRzKHZhbHVlLCBwYXJlbnQsIG5vZGUpIHtcbiAgICB2YXIgbGV0dGVyUmVuZGVyaW5nID0gcGFyZW50LnN0eWxlLmxldHRlclNwYWNpbmcgIT09IDA7XG4gICAgdmFyIHRleHRMaXN0ID0gbGV0dGVyUmVuZGVyaW5nID8gKDAsIF9Vbmljb2RlLnRvQ29kZVBvaW50cykodmFsdWUpLm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gKDAsIF9Vbmljb2RlLmZyb21Db2RlUG9pbnQpKGkpO1xuICAgIH0pIDogKDAsIF9Vbmljb2RlLmJyZWFrV29yZHMpKHZhbHVlLCBwYXJlbnQpO1xuICAgIHZhciBsZW5ndGggPSB0ZXh0TGlzdC5sZW5ndGg7XG4gICAgdmFyIGRlZmF1bHRWaWV3ID0gbm9kZS5wYXJlbnROb2RlID8gbm9kZS5wYXJlbnROb2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBudWxsO1xuICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcgPyBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldCA6IDA7XG4gICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0VmlldyA/IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0IDogMDtcbiAgICB2YXIgdGV4dEJvdW5kcyA9IFtdO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHRleHQgPSB0ZXh0TGlzdFtpXTtcbiAgICAgICAgaWYgKHBhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiAhPT0gX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTi5OT05FIHx8IHRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX1JBTkdFX0JPVU5EUykge1xuICAgICAgICAgICAgICAgIHRleHRCb3VuZHMucHVzaChuZXcgVGV4dEJvdW5kcyh0ZXh0LCBnZXRSYW5nZUJvdW5kcyhub2RlLCBvZmZzZXQsIHRleHQubGVuZ3RoLCBzY3JvbGxYLCBzY3JvbGxZKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwbGFjZW1lbnROb2RlID0gbm9kZS5zcGxpdFRleHQodGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRleHRCb3VuZHMucHVzaChuZXcgVGV4dEJvdW5kcyh0ZXh0LCBnZXRXcmFwcGVyQm91bmRzKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpKSk7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9SQU5HRV9CT1VORFMpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnNwbGl0VGV4dCh0ZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb2Zmc2V0ICs9IHRleHQubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dEJvdW5kcztcbn07XG5cbnZhciBnZXRXcmFwcGVyQm91bmRzID0gZnVuY3Rpb24gZ2V0V3JhcHBlckJvdW5kcyhub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlciwgbm9kZSk7XG4gICAgICAgIHZhciBib3VuZHMgPSAoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykod3JhcHBlciwgc2Nyb2xsWCwgc2Nyb2xsWSk7XG4gICAgICAgIGlmICh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfQm91bmRzLkJvdW5kcygwLCAwLCAwLCAwKTtcbn07XG5cbnZhciBnZXRSYW5nZUJvdW5kcyA9IGZ1bmN0aW9uIGdldFJhbmdlQm91bmRzKG5vZGUsIG9mZnNldCwgbGVuZ3RoLCBzY3JvbGxYLCBzY3JvbGxZKSB7XG4gICAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgb2Zmc2V0KTtcbiAgICByYW5nZS5zZXRFbmQobm9kZSwgb2Zmc2V0ICsgbGVuZ3RoKTtcbiAgICByZXR1cm4gX0JvdW5kcy5Cb3VuZHMuZnJvbUNsaWVudFJlY3QocmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHNjcm9sbFgsIHNjcm9sbFkpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF90ZXh0VHJhbnNmb3JtID0gcmVxdWlyZSgnLi9wYXJzaW5nL3RleHRUcmFuc2Zvcm0nKTtcblxudmFyIF9UZXh0Qm91bmRzID0gcmVxdWlyZSgnLi9UZXh0Qm91bmRzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUZXh0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRleHRDb250YWluZXIodGV4dCwgcGFyZW50LCBib3VuZHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLmJvdW5kcyA9IGJvdW5kcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGV4dENvbnRhaW5lciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZnJvbVRleHROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21UZXh0Tm9kZShub2RlLCBwYXJlbnQpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gdHJhbnNmb3JtKG5vZGUuZGF0YSwgcGFyZW50LnN0eWxlLnRleHRUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXh0Q29udGFpbmVyKHRleHQsIHBhcmVudCwgKDAsIF9UZXh0Qm91bmRzLnBhcnNlVGV4dEJvdW5kcykodGV4dCwgcGFyZW50LCBub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGV4dENvbnRhaW5lcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dENvbnRhaW5lcjtcblxuXG52YXIgQ0FQSVRBTElaRSA9IC8oXnxcXHN8OnwtfFxcKHxcXCkpKFthLXpdKS9nO1xuXG52YXIgdHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHRleHQsIF90cmFuc2Zvcm0pIHtcbiAgICBzd2l0Y2ggKF90cmFuc2Zvcm0pIHtcbiAgICAgICAgY2FzZSBfdGV4dFRyYW5zZm9ybS5URVhUX1RSQU5TRk9STS5MT1dFUkNBU0U6XG4gICAgICAgICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLkNBUElUQUxJWkU6XG4gICAgICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKENBUElUQUxJWkUsIGNhcGl0YWxpemUpO1xuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLlVQUEVSQ0FTRTpcbiAgICAgICAgICAgIHJldHVybiB0ZXh0LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKG0sIHAxLCBwMikge1xuICAgIGlmIChtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYnJlYWtXb3JkcyA9IGV4cG9ydHMuZnJvbUNvZGVQb2ludCA9IGV4cG9ydHMudG9Db2RlUG9pbnRzID0gdW5kZWZpbmVkO1xuXG52YXIgX2Nzc0xpbmVCcmVhayA9IHJlcXVpcmUoJ2Nzcy1saW5lLWJyZWFrJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndG9Db2RlUG9pbnRzJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfY3NzTGluZUJyZWFrLnRvQ29kZVBvaW50cztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZnJvbUNvZGVQb2ludCcsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2Nzc0xpbmVCcmVhay5mcm9tQ29kZVBvaW50O1xuICAgIH1cbn0pO1xuXG52YXIgX05vZGVDb250YWluZXIgPSByZXF1aXJlKCcuL05vZGVDb250YWluZXInKTtcblxudmFyIF9Ob2RlQ29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05vZGVDb250YWluZXIpO1xuXG52YXIgX292ZXJmbG93V3JhcCA9IHJlcXVpcmUoJy4vcGFyc2luZy9vdmVyZmxvd1dyYXAnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGJyZWFrV29yZHMgPSBleHBvcnRzLmJyZWFrV29yZHMgPSBmdW5jdGlvbiBicmVha1dvcmRzKHN0ciwgcGFyZW50KSB7XG4gICAgdmFyIGJyZWFrZXIgPSAoMCwgX2Nzc0xpbmVCcmVhay5MaW5lQnJlYWtlcikoc3RyLCB7XG4gICAgICAgIGxpbmVCcmVhazogcGFyZW50LnN0eWxlLmxpbmVCcmVhayxcbiAgICAgICAgd29yZEJyZWFrOiBwYXJlbnQuc3R5bGUub3ZlcmZsb3dXcmFwID09PSBfb3ZlcmZsb3dXcmFwLk9WRVJGTE9XX1dSQVAuQlJFQUtfV09SRCA/ICdicmVhay13b3JkJyA6IHBhcmVudC5zdHlsZS53b3JkQnJlYWtcbiAgICB9KTtcblxuICAgIHZhciB3b3JkcyA9IFtdO1xuICAgIHZhciBiayA9IHZvaWQgMDtcblxuICAgIHdoaWxlICghKGJrID0gYnJlYWtlci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgd29yZHMucHVzaChiay52YWx1ZS5zbGljZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd29yZHM7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGJpdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gKGJpdCAmIHZhbHVlKSAhPT0gMDtcbn07XG5cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn07XG5cbnZhciBjb3B5Q1NTU3R5bGVzID0gZXhwb3J0cy5jb3B5Q1NTU3R5bGVzID0gZnVuY3Rpb24gY29weUNTU1N0eWxlcyhzdHlsZSwgdGFyZ2V0KSB7XG4gICAgLy8gRWRnZSBkb2VzIG5vdCBwcm92aWRlIHZhbHVlIGZvciBjc3NUZXh0XG4gICAgZm9yICh2YXIgaSA9IHN0eWxlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IHN0eWxlLml0ZW0oaSk7XG4gICAgICAgIC8vIFNhZmFyaSBzaG93cyBwc2V1ZG9lbGVtZW50cyBpZiBjb250ZW50IGlzIHNldFxuICAgICAgICBpZiAocHJvcGVydHkgIT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBTTUFMTF9JTUFHRSA9IGV4cG9ydHMuU01BTExfSU1BR0UgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JzsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVuZGVyRWxlbWVudCA9IHVuZGVmaW5lZDtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX0xvZ2dlciA9IHJlcXVpcmUoJy4vTG9nZ2VyJyk7XG5cbnZhciBfTG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2dlcik7XG5cbnZhciBfTm9kZVBhcnNlciA9IHJlcXVpcmUoJy4vTm9kZVBhcnNlcicpO1xuXG52YXIgX1JlbmRlcmVyID0gcmVxdWlyZSgnLi9SZW5kZXJlcicpO1xuXG52YXIgX1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyKTtcblxudmFyIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0ZvcmVpZ25PYmplY3RSZW5kZXJlcicpO1xuXG52YXIgX0ZvcmVpZ25PYmplY3RSZW5kZXJlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIpO1xuXG52YXIgX0ZlYXR1cmUgPSByZXF1aXJlKCcuL0ZlYXR1cmUnKTtcblxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xuXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XG5cbnZhciBfQ2xvbmUgPSByZXF1aXJlKCcuL0Nsb25lJyk7XG5cbnZhciBfRm9udCA9IHJlcXVpcmUoJy4vRm9udCcpO1xuXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi9Db2xvcicpO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJlbmRlckVsZW1lbnQgPSBleHBvcnRzLnJlbmRlckVsZW1lbnQgPSBmdW5jdGlvbiByZW5kZXJFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlcikge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuXG4gICAgdmFyIHdpbmRvd0JvdW5kcyA9IG5ldyBfQm91bmRzLkJvdW5kcyhvcHRpb25zLnNjcm9sbFgsIG9wdGlvbnMuc2Nyb2xsWSwgb3B0aW9ucy53aW5kb3dXaWR0aCwgb3B0aW9ucy53aW5kb3dIZWlnaHQpO1xuXG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1iYWNrZ3JvdW5kLyNzcGVjaWFsLWJhY2tncm91bmRzXG4gICAgdmFyIGRvY3VtZW50QmFja2dyb3VuZENvbG9yID0gb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KGdldENvbXB1dGVkU3R5bGUob3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmJhY2tncm91bmRDb2xvcikgOiBfQ29sb3IuVFJBTlNQQVJFTlQ7XG4gICAgdmFyIGJvZHlCYWNrZ3JvdW5kQ29sb3IgPSBvd25lckRvY3VtZW50LmJvZHkgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KGdldENvbXB1dGVkU3R5bGUob3duZXJEb2N1bWVudC5ib2R5KS5iYWNrZ3JvdW5kQ29sb3IpIDogX0NvbG9yLlRSQU5TUEFSRU5UO1xuXG4gICAgdmFyIGJhY2tncm91bmRDb2xvciA9IGVsZW1lbnQgPT09IG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnRCYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpID8gYm9keUJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgPyBvcHRpb25zLmJhY2tncm91bmRDb2xvciA/IG5ldyBfQ29sb3IyLmRlZmF1bHQob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIDogbnVsbCA6IGJvZHlCYWNrZ3JvdW5kQ29sb3IgOiBkb2N1bWVudEJhY2tncm91bmRDb2xvciA6IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID8gbmV3IF9Db2xvcjIuZGVmYXVsdChvcHRpb25zLmJhY2tncm91bmRDb2xvcikgOiBudWxsO1xuXG4gICAgcmV0dXJuIChvcHRpb25zLmZvcmVpZ25PYmplY3RSZW5kZXJpbmcgPyAvLyAkRmxvd0ZpeE1lXG4gICAgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9GT1JFSUdOT0JKRUNUX0RSQVdJTkcgOiBQcm9taXNlLnJlc29sdmUoZmFsc2UpKS50aGVuKGZ1bmN0aW9uIChzdXBwb3J0Rm9yZWlnbk9iamVjdCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydEZvcmVpZ25PYmplY3QgPyBmdW5jdGlvbiAoY2xvbmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ0RvY3VtZW50IGNsb25lZCwgdXNpbmcgZm9yZWlnbk9iamVjdCByZW5kZXJpbmcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lci5pbmxpbmVGb250cyhvd25lckRvY3VtZW50KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmVyLnJlc291cmNlTG9hZGVyLnJlYWR5KCk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX0ZvcmVpZ25PYmplY3RSZW5kZXJlcjIuZGVmYXVsdChjbG9uZXIuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmlldyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgdmFyIGlzRG9jdW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdIVE1MJyB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJztcblxuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gaXNEb2N1bWVudCA/ICgwLCBfQm91bmRzLnBhcnNlRG9jdW1lbnRTaXplKShvd25lckRvY3VtZW50KSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShlbGVtZW50LCBzY3JvbGxYLCBzY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IF9yZWYubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gX3JlZi50b3A7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogb3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeDogdHlwZW9mIG9wdGlvbnMueCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnggOiBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICB5OiB0eXBlb2Ygb3B0aW9ucy55ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueSA6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMud2lkdGggOiBNYXRoLmNlaWwod2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHR5cGVvZiBvcHRpb25zLmhlaWdodCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmhlaWdodCA6IE1hdGguY2VpbChoZWlnaHQpLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aDogb3B0aW9ucy53aW5kb3dXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0OiBvcHRpb25zLndpbmRvd0hlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogb3B0aW9ucy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiBvcHRpb25zLnNjcm9sbFlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KG5ldyBfQ2xvbmUuRG9jdW1lbnRDbG9uZXIoZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCB0cnVlLCByZW5kZXJFbGVtZW50KSkgOiAoMCwgX0Nsb25lLmNsb25lV2luZG93KShvd25lckRvY3VtZW50LCB3aW5kb3dCb3VuZHMsIGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgcmVuZGVyRWxlbWVudCkudGhlbihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgIHZhciBfcmVmMyA9IF9zbGljZWRUb0FycmF5KF9yZWYyLCAzKSxcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBfcmVmM1swXSxcbiAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50ID0gX3JlZjNbMV0sXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VMb2FkZXIgPSBfcmVmM1syXTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdEb2N1bWVudCBjbG9uZWQsIHVzaW5nIGNvbXB1dGVkIHJlbmRlcmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3RhY2sgPSAoMCwgX05vZGVQYXJzZXIuTm9kZVBhcnNlcikoY2xvbmVkRWxlbWVudCwgcmVzb3VyY2VMb2FkZXIsIGxvZ2dlcik7XG4gICAgICAgICAgICB2YXIgY2xvbmVkRG9jdW1lbnQgPSBjbG9uZWRFbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09IHN0YWNrLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAgICAgICAgIHN0YWNrLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvciA9IF9Db2xvci5UUkFOU1BBUkVOVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoaW1hZ2VTdG9yZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb250TWV0cmljcyA9IG5ldyBfRm9udC5Gb250TWV0cmljcyhjbG9uZWREb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnU3RhcnRpbmcgcmVuZGVyZXInKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZpZXcgPSBjbG9uZWREb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxZID0gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXNEb2N1bWVudCA9IGNsb25lZEVsZW1lbnQudGFnTmFtZSA9PT0gJ0hUTUwnIHx8IGNsb25lZEVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9yZWY0ID0gaXNEb2N1bWVudCA/ICgwLCBfQm91bmRzLnBhcnNlRG9jdW1lbnRTaXplKShvd25lckRvY3VtZW50KSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShjbG9uZWRFbGVtZW50LCBzY3JvbGxYLCBzY3JvbGxZKSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBfcmVmNC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX3JlZjQuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gX3JlZjQubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gX3JlZjQudG9wO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICBmb250TWV0cmljczogZm9udE1ldHJpY3MsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3RvcmU6IGltYWdlU3RvcmUsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcjogbG9nZ2VyLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogb3B0aW9ucy5zY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgeDogdHlwZW9mIG9wdGlvbnMueCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnggOiBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICB5OiB0eXBlb2Ygb3B0aW9ucy55ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueSA6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMud2lkdGggOiBNYXRoLmNlaWwod2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHR5cGVvZiBvcHRpb25zLmhlaWdodCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmhlaWdodCA6IE1hdGguY2VpbChoZWlnaHQpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwob3B0aW9ucy50YXJnZXQubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfUmVuZGVyZXIyLmRlZmF1bHQodGFyZ2V0LCByZW5kZXJPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlci5yZW5kZXIoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gbmV3IF9SZW5kZXJlcjIuZGVmYXVsdChvcHRpb25zLnRhcmdldCwgcmVuZGVyT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSByZW5kZXJlci5yZW5kZXIoc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmVDb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdDYW5ub3QgZGV0YWNoIGNsb25lZCBpZnJhbWUgYXMgaXQgaXMgbm90IGluIHRoZSBET00gYW55bW9yZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1BhdGggPSByZXF1aXJlKCcuL1BhdGgnKTtcblxudmFyIF9WZWN0b3IgPSByZXF1aXJlKCcuL1ZlY3RvcicpO1xuXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgbGVycCA9IGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCkge1xuICAgIHJldHVybiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChhLnggKyAoYi54IC0gYS54KSAqIHQsIGEueSArIChiLnkgLSBhLnkpICogdCk7XG59O1xuXG52YXIgQmV6aWVyQ3VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmV6aWVyQ3VydmUoc3RhcnQsIHN0YXJ0Q29udHJvbCwgZW5kQ29udHJvbCwgZW5kKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCZXppZXJDdXJ2ZSk7XG5cbiAgICAgICAgdGhpcy50eXBlID0gX1BhdGguUEFUSC5CRVpJRVJfQ1VSVkU7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgICAgdGhpcy5zdGFydENvbnRyb2wgPSBzdGFydENvbnRyb2w7XG4gICAgICAgIHRoaXMuZW5kQ29udHJvbCA9IGVuZENvbnRyb2w7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCZXppZXJDdXJ2ZSwgW3tcbiAgICAgICAga2V5OiAnc3ViZGl2aWRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YmRpdmlkZSh0LCBmaXJzdEhhbGYpIHtcbiAgICAgICAgICAgIHZhciBhYiA9IGxlcnAodGhpcy5zdGFydCwgdGhpcy5zdGFydENvbnRyb2wsIHQpO1xuICAgICAgICAgICAgdmFyIGJjID0gbGVycCh0aGlzLnN0YXJ0Q29udHJvbCwgdGhpcy5lbmRDb250cm9sLCB0KTtcbiAgICAgICAgICAgIHZhciBjZCA9IGxlcnAodGhpcy5lbmRDb250cm9sLCB0aGlzLmVuZCwgdCk7XG4gICAgICAgICAgICB2YXIgYWJiYyA9IGxlcnAoYWIsIGJjLCB0KTtcbiAgICAgICAgICAgIHZhciBiY2NkID0gbGVycChiYywgY2QsIHQpO1xuICAgICAgICAgICAgdmFyIGRlc3QgPSBsZXJwKGFiYmMsIGJjY2QsIHQpO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0SGFsZiA/IG5ldyBCZXppZXJDdXJ2ZSh0aGlzLnN0YXJ0LCBhYiwgYWJiYywgZGVzdCkgOiBuZXcgQmV6aWVyQ3VydmUoZGVzdCwgYmNjZCwgY2QsIHRoaXMuZW5kKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmV2ZXJzZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCZXppZXJDdXJ2ZSh0aGlzLmVuZCwgdGhpcy5lbmRDb250cm9sLCB0aGlzLnN0YXJ0Q29udHJvbCwgdGhpcy5zdGFydCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQmV6aWVyQ3VydmU7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJlemllckN1cnZlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1BhdGggPSByZXF1aXJlKCcuL1BhdGgnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIENpcmNsZSA9IGZ1bmN0aW9uIENpcmNsZSh4LCB5LCByYWRpdXMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2lyY2xlKTtcblxuICAgIHRoaXMudHlwZSA9IF9QYXRoLlBBVEguQ0lSQ0xFO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeCB2YWx1ZSBnaXZlbiBmb3IgQ2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKHkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHkgdmFsdWUgZ2l2ZW4gZm9yIENpcmNsZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTihyYWRpdXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHJhZGl1cyB2YWx1ZSBnaXZlbiBmb3IgQ2lyY2xlJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDaXJjbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgUEFUSCA9IGV4cG9ydHMuUEFUSCA9IHtcbiAgICBWRUNUT1I6IDAsXG4gICAgQkVaSUVSX0NVUlZFOiAxLFxuICAgIENJUkNMRTogMlxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFNpemUgPSBmdW5jdGlvbiBTaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2l6ZSk7XG5cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTaXplOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1BhdGggPSByZXF1aXJlKCcuL1BhdGgnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFZlY3RvciA9IGZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZlY3Rvcik7XG5cbiAgICB0aGlzLnR5cGUgPSBfUGF0aC5QQVRILlZFQ1RPUjtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHggdmFsdWUgZ2l2ZW4gZm9yIFZlY3RvcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTih5KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB5IHZhbHVlIGdpdmVuIGZvciBWZWN0b3InKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0NhbnZhc1JlbmRlcmVyJyk7XG5cbnZhciBfQ2FudmFzUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FudmFzUmVuZGVyZXIpO1xuXG52YXIgX0xvZ2dlciA9IHJlcXVpcmUoJy4vTG9nZ2VyJyk7XG5cbnZhciBfTG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2dlcik7XG5cbnZhciBfV2luZG93ID0gcmVxdWlyZSgnLi9XaW5kb3cnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGh0bWwyY2FudmFzID0gZnVuY3Rpb24gaHRtbDJjYW52YXMoZWxlbWVudCwgY29uZikge1xuICAgIHZhciBjb25maWcgPSBjb25mIHx8IHt9O1xuICAgIHZhciBsb2dnZXIgPSBuZXcgX0xvZ2dlcjIuZGVmYXVsdCh0eXBlb2YgY29uZmlnLmxvZ2dpbmcgPT09ICdib29sZWFuJyA/IGNvbmZpZy5sb2dnaW5nIDogdHJ1ZSk7XG4gICAgbG9nZ2VyLmxvZygnaHRtbDJjYW52YXMgJyArICckbnBtX3BhY2thZ2VfdmVyc2lvbicpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbmZpZy5vbnJlbmRlcmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcignb25yZW5kZXJlZCBvcHRpb24gaXMgZGVwcmVjYXRlZCwgaHRtbDJjYW52YXMgcmV0dXJucyBhIFByb21pc2Ugd2l0aCB0aGUgY2FudmFzIGFzIHRoZSB2YWx1ZScpO1xuICAgIH1cblxuICAgIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgIGlmICghb3duZXJEb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1Byb3ZpZGVkIGVsZW1lbnQgaXMgbm90IHdpdGhpbiBhIERvY3VtZW50Jyk7XG4gICAgfVxuICAgIHZhciBkZWZhdWx0VmlldyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBhbGxvd1RhaW50OiBmYWxzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGltYWdlVGltZW91dDogMTUwMDAsXG4gICAgICAgIGxvZ2dpbmc6IHRydWUsXG4gICAgICAgIHByb3h5OiBudWxsLFxuICAgICAgICByZW1vdmVDb250YWluZXI6IHRydWUsXG4gICAgICAgIGZvcmVpZ25PYmplY3RSZW5kZXJpbmc6IGZhbHNlLFxuICAgICAgICBzY2FsZTogZGVmYXVsdFZpZXcuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLFxuICAgICAgICB0YXJnZXQ6IG5ldyBfQ2FudmFzUmVuZGVyZXIyLmRlZmF1bHQoY29uZmlnLmNhbnZhcyksXG4gICAgICAgIHVzZUNPUlM6IGZhbHNlLFxuICAgICAgICB3aW5kb3dXaWR0aDogZGVmYXVsdFZpZXcuaW5uZXJXaWR0aCxcbiAgICAgICAgd2luZG93SGVpZ2h0OiBkZWZhdWx0Vmlldy5pbm5lckhlaWdodCxcbiAgICAgICAgc2Nyb2xsWDogZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQsXG4gICAgICAgIHNjcm9sbFk6IGRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0XG4gICAgfTtcblxuICAgIHZhciByZXN1bHQgPSAoMCwgX1dpbmRvdy5yZW5kZXJFbGVtZW50KShlbGVtZW50LCBfZXh0ZW5kcyh7fSwgZGVmYXVsdE9wdGlvbnMsIGNvbmZpZyksIGxvZ2dlcik7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmh0bWwyY2FudmFzLkNhbnZhc1JlbmRlcmVyID0gX0NhbnZhc1JlbmRlcmVyMi5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0bWwyY2FudmFzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZUJhY2tncm91bmRJbWFnZSA9IGV4cG9ydHMucGFyc2VCYWNrZ3JvdW5kID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kU2l6ZSA9IGV4cG9ydHMuQkFDS0dST1VORF9PUklHSU4gPSBleHBvcnRzLkJBQ0tHUk9VTkRfQ0xJUCA9IGV4cG9ydHMuQkFDS0dST1VORF9TSVpFID0gZXhwb3J0cy5CQUNLR1JPVU5EX1JFUEVBVCA9IHVuZGVmaW5lZDtcblxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4uL0NvbG9yJyk7XG5cbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xuXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4uL0xlbmd0aCcpO1xuXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xuXG52YXIgX1NpemUgPSByZXF1aXJlKCcuLi9kcmF3aW5nL1NpemUnKTtcblxudmFyIF9TaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NpemUpO1xuXG52YXIgX1ZlY3RvciA9IHJlcXVpcmUoJy4uL2RyYXdpbmcvVmVjdG9yJyk7XG5cbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XG5cbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi4vQm91bmRzJyk7XG5cbnZhciBfcGFkZGluZyA9IHJlcXVpcmUoJy4vcGFkZGluZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQkFDS0dST1VORF9SRVBFQVQgPSBleHBvcnRzLkJBQ0tHUk9VTkRfUkVQRUFUID0ge1xuICAgIFJFUEVBVDogMCxcbiAgICBOT19SRVBFQVQ6IDEsXG4gICAgUkVQRUFUX1g6IDIsXG4gICAgUkVQRUFUX1k6IDNcbn07XG5cbnZhciBCQUNLR1JPVU5EX1NJWkUgPSBleHBvcnRzLkJBQ0tHUk9VTkRfU0laRSA9IHtcbiAgICBBVVRPOiAwLFxuICAgIENPTlRBSU46IDEsXG4gICAgQ09WRVI6IDIsXG4gICAgTEVOR1RIOiAzXG59O1xuXG52YXIgQkFDS0dST1VORF9DTElQID0gZXhwb3J0cy5CQUNLR1JPVU5EX0NMSVAgPSB7XG4gICAgQk9SREVSX0JPWDogMCxcbiAgICBQQURESU5HX0JPWDogMSxcbiAgICBDT05URU5UX0JPWDogMlxufTtcblxudmFyIEJBQ0tHUk9VTkRfT1JJR0lOID0gZXhwb3J0cy5CQUNLR1JPVU5EX09SSUdJTiA9IEJBQ0tHUk9VTkRfQ0xJUDtcblxudmFyIEFVVE8gPSAnYXV0byc7XG5cbnZhciBCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIEJhY2tncm91bmRTaXplKHNpemUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFja2dyb3VuZFNpemUpO1xuXG4gICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgIGNhc2UgJ2NvbnRhaW4nOlxuICAgICAgICAgICAgdGhpcy5zaXplID0gQkFDS0dST1VORF9TSVpFLkNPTlRBSU47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY292ZXInOlxuICAgICAgICAgICAgdGhpcy5zaXplID0gQkFDS0dST1VORF9TSVpFLkNPVkVSO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICAgICAgdGhpcy5zaXplID0gQkFDS0dST1VORF9TSVpFLkFVVE87XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdChzaXplKTtcbiAgICB9XG59O1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZFNpemUoYmFja2dyb3VuZEltYWdlLCBpbWFnZSwgYm91bmRzKSB7XG4gICAgdmFyIHdpZHRoID0gMDtcbiAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICB2YXIgc2l6ZSA9IGJhY2tncm91bmRJbWFnZS5zaXplO1xuICAgIGlmIChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5DT05UQUlOIHx8IHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkNPVkVSKSB7XG4gICAgICAgIHZhciB0YXJnZXRSYXRpbyA9IGJvdW5kcy53aWR0aCAvIGJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHZhciBjdXJyZW50UmF0aW8gPSBpbWFnZS53aWR0aCAvIGltYWdlLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIHRhcmdldFJhdGlvIDwgY3VycmVudFJhdGlvICE9PSAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQ09WRVIpID8gbmV3IF9TaXplMi5kZWZhdWx0KGJvdW5kcy53aWR0aCwgYm91bmRzLndpZHRoIC8gY3VycmVudFJhdGlvKSA6IG5ldyBfU2l6ZTIuZGVmYXVsdChib3VuZHMuaGVpZ2h0ICogY3VycmVudFJhdGlvLCBib3VuZHMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAoc2l6ZVswXS52YWx1ZSkge1xuICAgICAgICB3aWR0aCA9IHNpemVbMF0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgIH1cblxuICAgIGlmIChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPICYmIHNpemVbMV0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkFVVE8pIHtcbiAgICAgICAgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoc2l6ZVsxXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTykge1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGltYWdlLndpZHRoICogaW1hZ2UuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoc2l6ZVsxXS52YWx1ZSkge1xuICAgICAgICBoZWlnaHQgPSBzaXplWzFdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkFVVE8pIHtcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgLyBpbWFnZS5oZWlnaHQgKiBpbWFnZS53aWR0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IF9TaXplMi5kZWZhdWx0KHdpZHRoLCBoZWlnaHQpO1xufTtcblxudmFyIGNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUgPSBmdW5jdGlvbiBjYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplKGJhY2tncm91bmRJbWFnZSwgYm91bmRzKSB7XG4gICAgdmFyIHNpemUgPSBiYWNrZ3JvdW5kSW1hZ2Uuc2l6ZTtcbiAgICB2YXIgd2lkdGggPSBzaXplWzBdLnZhbHVlID8gc2l6ZVswXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCkgOiBib3VuZHMud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IHNpemVbMV0udmFsdWUgPyBzaXplWzFdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCkgOiBzaXplWzBdLnZhbHVlID8gd2lkdGggOiBib3VuZHMuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIG5ldyBfU2l6ZTIuZGVmYXVsdCh3aWR0aCwgaGVpZ2h0KTtcbn07XG5cbnZhciBBVVRPX1NJWkUgPSBuZXcgQmFja2dyb3VuZFNpemUoQVVUTyk7XG5cbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYShjdXJ2ZXMsIGNsaXApIHtcbiAgICBzd2l0Y2ggKGNsaXApIHtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX0NMSVAuQk9SREVSX0JPWDpcbiAgICAgICAgICAgIHJldHVybiAoMCwgX0JvdW5kcy5jYWxjdWxhdGVCb3JkZXJCb3hQYXRoKShjdXJ2ZXMpO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfQ0xJUC5QQURESU5HX0JPWDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCkoY3VydmVzKTtcbiAgICB9XG59O1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEoYmFja2dyb3VuZE9yaWdpbiwgYm91bmRzLCBwYWRkaW5nLCBib3JkZXIpIHtcbiAgICB2YXIgcGFkZGluZ0JveCA9ICgwLCBfQm91bmRzLmNhbGN1bGF0ZVBhZGRpbmdCb3gpKGJvdW5kcywgYm9yZGVyKTtcblxuICAgIHN3aXRjaCAoYmFja2dyb3VuZE9yaWdpbikge1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfT1JJR0lOLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gYm91bmRzO1xuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfT1JJR0lOLkNPTlRFTlRfQk9YOlxuICAgICAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLkxFRlRdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuUklHSFRdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nVG9wID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLlRPUF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xuICAgICAgICAgICAgdmFyIHBhZGRpbmdCb3R0b20gPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuQk9UVE9NXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9Cb3VuZHMuQm91bmRzKHBhZGRpbmdCb3gubGVmdCArIHBhZGRpbmdMZWZ0LCBwYWRkaW5nQm94LnRvcCArIHBhZGRpbmdUb3AsIHBhZGRpbmdCb3gud2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCwgcGFkZGluZ0JveC5oZWlnaHQgLSBwYWRkaW5nVG9wIC0gcGFkZGluZ0JvdHRvbSk7XG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9PUklHSU4uUEFERElOR19CT1g6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gcGFkZGluZ0JveDtcbiAgICB9XG59O1xuXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24gPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24ocG9zaXRpb24sIHNpemUsIGJvdW5kcykge1xuICAgIHJldHVybiBuZXcgX1ZlY3RvcjIuZGVmYXVsdChwb3NpdGlvblswXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCAtIHNpemUud2lkdGgpLCBwb3NpdGlvblsxXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQgLSBzaXplLmhlaWdodCkpO1xufTtcblxudmFyIGNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoKGJhY2tncm91bmQsIHBvc2l0aW9uLCBzaXplLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLCBib3VuZHMpIHtcbiAgICB2YXIgcmVwZWF0ID0gYmFja2dyb3VuZC5yZXBlYXQ7XG4gICAgc3dpdGNoIChyZXBlYXQpIHtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVRfWDpcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChzaXplLmhlaWdodCArIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChzaXplLmhlaWdodCArIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpXTtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVRfWTpcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChib3VuZHMuaGVpZ2h0ICsgYm91bmRzLnRvcCkpXTtcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX1JFUEVBVC5OT19SRVBFQVQ6XG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkgKyBzaXplLmhlaWdodCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLngpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0KSldO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKV07XG4gICAgfVxufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZCA9IGV4cG9ydHMucGFyc2VCYWNrZ3JvdW5kID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kKHN0eWxlLCByZXNvdXJjZUxvYWRlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHBhcnNlQmFja2dyb3VuZEltYWdlcyhzdHlsZSwgcmVzb3VyY2VMb2FkZXIpLFxuICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogcGFyc2VCYWNrZ3JvdW5kQ2xpcChzdHlsZS5iYWNrZ3JvdW5kQ2xpcCksXG4gICAgICAgIGJhY2tncm91bmRPcmlnaW46IHBhcnNlQmFja2dyb3VuZE9yaWdpbihzdHlsZS5iYWNrZ3JvdW5kT3JpZ2luKVxuICAgIH07XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kQ2xpcCA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZENsaXAoYmFja2dyb3VuZENsaXApIHtcbiAgICBzd2l0Y2ggKGJhY2tncm91bmRDbGlwKSB7XG4gICAgICAgIGNhc2UgJ3BhZGRpbmctYm94JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX0NMSVAuUEFERElOR19CT1g7XG4gICAgICAgIGNhc2UgJ2NvbnRlbnQtYm94JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX0NMSVAuQ09OVEVOVF9CT1g7XG4gICAgfVxuICAgIHJldHVybiBCQUNLR1JPVU5EX0NMSVAuQk9SREVSX0JPWDtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRPcmlnaW4gPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRPcmlnaW4oYmFja2dyb3VuZE9yaWdpbikge1xuICAgIHN3aXRjaCAoYmFja2dyb3VuZE9yaWdpbikge1xuICAgICAgICBjYXNlICdwYWRkaW5nLWJveCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9PUklHSU4uUEFERElOR19CT1g7XG4gICAgICAgIGNhc2UgJ2NvbnRlbnQtYm94JzpcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX09SSUdJTi5DT05URU5UX0JPWDtcbiAgICB9XG4gICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLkJPUkRFUl9CT1g7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kUmVwZWF0ID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kUmVwZWF0KGJhY2tncm91bmRSZXBlYXQpIHtcbiAgICBzd2l0Y2ggKGJhY2tncm91bmRSZXBlYXQudHJpbSgpKSB7XG4gICAgICAgIGNhc2UgJ25vLXJlcGVhdCc6XG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuTk9fUkVQRUFUO1xuICAgICAgICBjYXNlICdyZXBlYXQteCc6XG4gICAgICAgIGNhc2UgJ3JlcGVhdCBuby1yZXBlYXQnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9YO1xuICAgICAgICBjYXNlICdyZXBlYXQteSc6XG4gICAgICAgIGNhc2UgJ25vLXJlcGVhdCByZXBlYXQnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9ZO1xuICAgICAgICBjYXNlICdyZXBlYXQnOlxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVDtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGJhY2tncm91bmQtcmVwZWF0IHZhbHVlIFwiJyArIGJhY2tncm91bmRSZXBlYXQgKyAnXCInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUO1xufTtcblxudmFyIHBhcnNlQmFja2dyb3VuZEltYWdlcyA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZEltYWdlcyhzdHlsZSwgcmVzb3VyY2VMb2FkZXIpIHtcbiAgICB2YXIgc291cmNlcyA9IHBhcnNlQmFja2dyb3VuZEltYWdlKHN0eWxlLmJhY2tncm91bmRJbWFnZSkubWFwKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZS5tZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKGJhY2tncm91bmRJbWFnZS5hcmdzWzBdKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZS5hcmdzID0ga2V5ID8gW2tleV0gOiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFja2dyb3VuZEltYWdlO1xuICAgIH0pO1xuICAgIHZhciBwb3NpdGlvbnMgPSBzdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24uc3BsaXQoJywnKTtcbiAgICB2YXIgcmVwZWF0cyA9IHN0eWxlLmJhY2tncm91bmRSZXBlYXQuc3BsaXQoJywnKTtcbiAgICB2YXIgc2l6ZXMgPSBzdHlsZS5iYWNrZ3JvdW5kU2l6ZS5zcGxpdCgnLCcpO1xuXG4gICAgcmV0dXJuIHNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UsIGluZGV4KSB7XG4gICAgICAgIHZhciBzaXplID0gKHNpemVzW2luZGV4XSB8fCBBVVRPKS50cmltKCkuc3BsaXQoJyAnKS5tYXAocGFyc2VCYWNrZ3JvdW5kU2l6ZSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IChwb3NpdGlvbnNbaW5kZXhdIHx8IEFVVE8pLnRyaW0oKS5zcGxpdCgnICcpLm1hcChwYXJzZUJhY2tnb3VuZFBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICByZXBlYXQ6IHBhcnNlQmFja2dyb3VuZFJlcGVhdCh0eXBlb2YgcmVwZWF0c1tpbmRleF0gPT09ICdzdHJpbmcnID8gcmVwZWF0c1tpbmRleF0gOiByZXBlYXRzWzBdKSxcbiAgICAgICAgICAgIHNpemU6IHNpemUubGVuZ3RoIDwgMiA/IFtzaXplWzBdLCBBVVRPX1NJWkVdIDogW3NpemVbMF0sIHNpemVbMV1dLFxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLmxlbmd0aCA8IDIgPyBbcG9zaXRpb25bMF0sIHBvc2l0aW9uWzBdXSA6IFtwb3NpdGlvblswXSwgcG9zaXRpb25bMV1dXG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG52YXIgcGFyc2VCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZFNpemUoc2l6ZSkge1xuICAgIHJldHVybiBzaXplID09PSAnYXV0bycgPyBBVVRPX1NJWkUgOiBuZXcgQmFja2dyb3VuZFNpemUoc2l6ZSk7XG59O1xuXG52YXIgcGFyc2VCYWNrZ291bmRQb3NpdGlvbiA9IGZ1bmN0aW9uIHBhcnNlQmFja2dvdW5kUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKTtcbiAgICAgICAgY2FzZSAnYXV0byc6XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHBvc2l0aW9uKTtcbn07XG5cbnZhciBwYXJzZUJhY2tncm91bmRJbWFnZSA9IGV4cG9ydHMucGFyc2VCYWNrZ3JvdW5kSW1hZ2UgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmRJbWFnZShpbWFnZSkge1xuICAgIHZhciB3aGl0ZXNwYWNlID0gL15cXHMkLztcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgbWV0aG9kID0gJyc7XG4gICAgdmFyIHF1b3RlID0gbnVsbDtcbiAgICB2YXIgZGVmaW5pdGlvbiA9ICcnO1xuICAgIHZhciBtb2RlID0gMDtcbiAgICB2YXIgbnVtUGFyZW4gPSAwO1xuXG4gICAgdmFyIGFwcGVuZFJlc3VsdCA9IGZ1bmN0aW9uIGFwcGVuZFJlc3VsdCgpIHtcbiAgICAgICAgdmFyIHByZWZpeCA9ICcnO1xuICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5zdWJzdHIoMCwgMSkgPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gZGVmaW5pdGlvbi5zdWJzdHIoMSwgZGVmaW5pdGlvbi5sZW5ndGggLSAyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goZGVmaW5pdGlvbi50cmltKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHJlZml4X2kgPSBtZXRob2QuaW5kZXhPZignLScsIDEpICsgMTtcbiAgICAgICAgICAgIGlmIChtZXRob2Quc3Vic3RyKDAsIDEpID09PSAnLScgJiYgcHJlZml4X2kgPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gbWV0aG9kLnN1YnN0cigwLCBwcmVmaXhfaSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBtZXRob2Quc3Vic3RyKHByZWZpeF9pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJncyA9IFtdO1xuICAgICAgICBtZXRob2QgPSBkZWZpbml0aW9uID0gJyc7XG4gICAgfTtcblxuICAgIGltYWdlLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIGlmIChtb2RlID09PSAwICYmIHdoaXRlc3BhY2UudGVzdChjKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgICAgIGlmICghcXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBjO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocXVvdGUgPT09IGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJygnOlxuICAgICAgICAgICAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudW1QYXJlbisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgICAgIGlmIChxdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bVBhcmVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFJlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtUGFyZW4tLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW4gPT09IDAgJiYgIW1ldGhvZC5tYXRjaCgvXnVybCQvaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChkZWZpbml0aW9uLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZSA9PT0gMCkge1xuICAgICAgICAgICAgbWV0aG9kICs9IGM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uICs9IGM7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGFwcGVuZFJlc3VsdCgpO1xuICAgIHJldHVybiByZXN1bHRzO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VCb3JkZXIgPSBleHBvcnRzLkJPUkRFUl9TSURFUyA9IGV4cG9ydHMuQk9SREVSX1NUWUxFID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi4vQ29sb3InKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBCT1JERVJfU1RZTEUgPSBleHBvcnRzLkJPUkRFUl9TVFlMRSA9IHtcbiAgICBOT05FOiAwLFxuICAgIFNPTElEOiAxXG59O1xuXG52YXIgQk9SREVSX1NJREVTID0gZXhwb3J0cy5CT1JERVJfU0lERVMgPSB7XG4gICAgVE9QOiAwLFxuICAgIFJJR0hUOiAxLFxuICAgIEJPVFRPTTogMixcbiAgICBMRUZUOiAzXG59O1xuXG52YXIgU0lERVMgPSBPYmplY3Qua2V5cyhCT1JERVJfU0lERVMpLm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHBhcnNlQm9yZGVyU3R5bGUgPSBmdW5jdGlvbiBwYXJzZUJvcmRlclN0eWxlKHN0eWxlKSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgIHJldHVybiBCT1JERVJfU1RZTEUuTk9ORTtcbiAgICB9XG4gICAgcmV0dXJuIEJPUkRFUl9TVFlMRS5TT0xJRDtcbn07XG5cbnZhciBwYXJzZUJvcmRlciA9IGV4cG9ydHMucGFyc2VCb3JkZXIgPSBmdW5jdGlvbiBwYXJzZUJvcmRlcihzdHlsZSkge1xuICAgIHJldHVybiBTSURFUy5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLWNvbG9yJykpO1xuICAgICAgICB2YXIgYm9yZGVyU3R5bGUgPSBwYXJzZUJvcmRlclN0eWxlKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctc3R5bGUnKSk7XG4gICAgICAgIHZhciBib3JkZXJXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy13aWR0aCcpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBpc05hTihib3JkZXJXaWR0aCkgPyAwIDogYm9yZGVyV2lkdGhcbiAgICAgICAgfTtcbiAgICB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlQm9yZGVyUmFkaXVzID0gdW5kZWZpbmVkO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi4vTGVuZ3RoJyk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTSURFUyA9IFsndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2JvdHRvbS1yaWdodCcsICdib3R0b20tbGVmdCddO1xuXG52YXIgcGFyc2VCb3JkZXJSYWRpdXMgPSBleHBvcnRzLnBhcnNlQm9yZGVyUmFkaXVzID0gZnVuY3Rpb24gcGFyc2VCb3JkZXJSYWRpdXMoc3R5bGUpIHtcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctcmFkaXVzJyk7XG5cbiAgICAgICAgdmFyIF92YWx1ZSRzcGxpdCRtYXAgPSB2YWx1ZS5zcGxpdCgnICcpLm1hcChfTGVuZ3RoMi5kZWZhdWx0LmNyZWF0ZSksXG4gICAgICAgICAgICBfdmFsdWUkc3BsaXQkbWFwMiA9IF9zbGljZWRUb0FycmF5KF92YWx1ZSRzcGxpdCRtYXAsIDIpLFxuICAgICAgICAgICAgaG9yaXpvbnRhbCA9IF92YWx1ZSRzcGxpdCRtYXAyWzBdLFxuICAgICAgICAgICAgdmVydGljYWwgPSBfdmFsdWUkc3BsaXQkbWFwMlsxXTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHZlcnRpY2FsID09PSAndW5kZWZpbmVkJyA/IFtob3Jpem9udGFsLCBob3Jpem9udGFsXSA6IFtob3Jpem9udGFsLCB2ZXJ0aWNhbF07XG4gICAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIERJU1BMQVkgPSBleHBvcnRzLkRJU1BMQVkgPSB7XG4gICAgTk9ORTogMSA8PCAwLFxuICAgIEJMT0NLOiAxIDw8IDEsXG4gICAgSU5MSU5FOiAxIDw8IDIsXG4gICAgUlVOX0lOOiAxIDw8IDMsXG4gICAgRkxPVzogMSA8PCA0LFxuICAgIEZMT1dfUk9PVDogMSA8PCA1LFxuICAgIFRBQkxFOiAxIDw8IDYsXG4gICAgRkxFWDogMSA8PCA3LFxuICAgIEdSSUQ6IDEgPDwgOCxcbiAgICBSVUJZOiAxIDw8IDksXG4gICAgU1VCR1JJRDogMSA8PCAxMCxcbiAgICBMSVNUX0lURU06IDEgPDwgMTEsXG4gICAgVEFCTEVfUk9XX0dST1VQOiAxIDw8IDEyLFxuICAgIFRBQkxFX0hFQURFUl9HUk9VUDogMSA8PCAxMyxcbiAgICBUQUJMRV9GT09URVJfR1JPVVA6IDEgPDwgMTQsXG4gICAgVEFCTEVfUk9XOiAxIDw8IDE1LFxuICAgIFRBQkxFX0NFTEw6IDEgPDwgMTYsXG4gICAgVEFCTEVfQ09MVU1OX0dST1VQOiAxIDw8IDE3LFxuICAgIFRBQkxFX0NPTFVNTjogMSA8PCAxOCxcbiAgICBUQUJMRV9DQVBUSU9OOiAxIDw8IDE5LFxuICAgIFJVQllfQkFTRTogMSA8PCAyMCxcbiAgICBSVUJZX1RFWFQ6IDEgPDwgMjEsXG4gICAgUlVCWV9CQVNFX0NPTlRBSU5FUjogMSA8PCAyMixcbiAgICBSVUJZX1RFWFRfQ09OVEFJTkVSOiAxIDw8IDIzLFxuICAgIENPTlRFTlRTOiAxIDw8IDI0LFxuICAgIElOTElORV9CTE9DSzogMSA8PCAyNSxcbiAgICBJTkxJTkVfTElTVF9JVEVNOiAxIDw8IDI2LFxuICAgIElOTElORV9UQUJMRTogMSA8PCAyNyxcbiAgICBJTkxJTkVfRkxFWDogMSA8PCAyOCxcbiAgICBJTkxJTkVfR1JJRDogMSA8PCAyOVxufTtcblxudmFyIHBhcnNlRGlzcGxheVZhbHVlID0gZnVuY3Rpb24gcGFyc2VEaXNwbGF5VmFsdWUoZGlzcGxheSkge1xuICAgIHN3aXRjaCAoZGlzcGxheSkge1xuICAgICAgICBjYXNlICdibG9jayc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5CTE9DSztcbiAgICAgICAgY2FzZSAnaW5saW5lJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORTtcbiAgICAgICAgY2FzZSAncnVuLWluJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVTl9JTjtcbiAgICAgICAgY2FzZSAnZmxvdyc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5GTE9XO1xuICAgICAgICBjYXNlICdmbG93LXJvb3QnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuRkxPV19ST09UO1xuICAgICAgICBjYXNlICd0YWJsZSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRTtcbiAgICAgICAgY2FzZSAnZmxleCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5GTEVYO1xuICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkdSSUQ7XG4gICAgICAgIGNhc2UgJ3J1YnknOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWTtcbiAgICAgICAgY2FzZSAnc3ViZ3JpZCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5TVUJHUklEO1xuICAgICAgICBjYXNlICdsaXN0LWl0ZW0nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuTElTVF9JVEVNO1xuICAgICAgICBjYXNlICd0YWJsZS1yb3ctZ3JvdXAnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfUk9XX0dST1VQO1xuICAgICAgICBjYXNlICd0YWJsZS1oZWFkZXItZ3JvdXAnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfSEVBREVSX0dST1VQO1xuICAgICAgICBjYXNlICd0YWJsZS1mb290ZXItZ3JvdXAnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfRk9PVEVSX0dST1VQO1xuICAgICAgICBjYXNlICd0YWJsZS1yb3cnOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfUk9XO1xuICAgICAgICBjYXNlICd0YWJsZS1jZWxsJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NFTEw7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWNvbHVtbi1ncm91cCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9DT0xVTU5fR1JPVVA7XG4gICAgICAgIGNhc2UgJ3RhYmxlLWNvbHVtbic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9DT0xVTU47XG4gICAgICAgIGNhc2UgJ3RhYmxlLWNhcHRpb24nOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ0FQVElPTjtcbiAgICAgICAgY2FzZSAncnVieS1iYXNlJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQllfQkFTRTtcbiAgICAgICAgY2FzZSAncnVieS10ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQllfVEVYVDtcbiAgICAgICAgY2FzZSAncnVieS1iYXNlLWNvbnRhaW5lcic6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX0JBU0VfQ09OVEFJTkVSO1xuICAgICAgICBjYXNlICdydWJ5LXRleHQtY29udGFpbmVyJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlJVQllfVEVYVF9DT05UQUlORVI7XG4gICAgICAgIGNhc2UgJ2NvbnRlbnRzJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkNPTlRFTlRTO1xuICAgICAgICBjYXNlICdpbmxpbmUtYmxvY2snOlxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0JMT0NLO1xuICAgICAgICBjYXNlICdpbmxpbmUtbGlzdC1pdGVtJzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9MSVNUX0lURU07XG4gICAgICAgIGNhc2UgJ2lubGluZS10YWJsZSc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfVEFCTEU7XG4gICAgICAgIGNhc2UgJ2lubGluZS1mbGV4JzpcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9GTEVYO1xuICAgICAgICBjYXNlICdpbmxpbmUtZ3JpZCc6XG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfR1JJRDtcbiAgICB9XG5cbiAgICByZXR1cm4gRElTUExBWS5OT05FO1xufTtcblxudmFyIHNldERpc3BsYXlCaXQgPSBmdW5jdGlvbiBzZXREaXNwbGF5Qml0KGJpdCwgZGlzcGxheSkge1xuICAgIHJldHVybiBiaXQgfCBwYXJzZURpc3BsYXlWYWx1ZShkaXNwbGF5KTtcbn07XG5cbnZhciBwYXJzZURpc3BsYXkgPSBleHBvcnRzLnBhcnNlRGlzcGxheSA9IGZ1bmN0aW9uIHBhcnNlRGlzcGxheShkaXNwbGF5KSB7XG4gICAgcmV0dXJuIGRpc3BsYXkuc3BsaXQoJyAnKS5yZWR1Y2Uoc2V0RGlzcGxheUJpdCwgMCk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIEZMT0FUID0gZXhwb3J0cy5GTE9BVCA9IHtcbiAgICBOT05FOiAwLFxuICAgIExFRlQ6IDEsXG4gICAgUklHSFQ6IDIsXG4gICAgSU5MSU5FX1NUQVJUOiAzLFxuICAgIElOTElORV9FTkQ6IDRcbn07XG5cbnZhciBwYXJzZUNTU0Zsb2F0ID0gZXhwb3J0cy5wYXJzZUNTU0Zsb2F0ID0gZnVuY3Rpb24gcGFyc2VDU1NGbG9hdChmbG9hdCkge1xuICAgIHN3aXRjaCAoZmxvYXQpIHtcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuTEVGVDtcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIEZMT0FULlJJR0hUO1xuICAgICAgICBjYXNlICdpbmxpbmUtc3RhcnQnOlxuICAgICAgICAgICAgcmV0dXJuIEZMT0FULklOTElORV9TVEFSVDtcbiAgICAgICAgY2FzZSAnaW5saW5lLWVuZCc6XG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuSU5MSU5FX0VORDtcbiAgICB9XG4gICAgcmV0dXJuIEZMT0FULk5PTkU7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5cbnZhciBwYXJzZUZvbnRXZWlnaHQgPSBmdW5jdGlvbiBwYXJzZUZvbnRXZWlnaHQod2VpZ2h0KSB7XG4gICAgc3dpdGNoICh3ZWlnaHQpIHtcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiA0MDA7XG4gICAgICAgIGNhc2UgJ2JvbGQnOlxuICAgICAgICAgICAgcmV0dXJuIDcwMDtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBwYXJzZUludCh3ZWlnaHQsIDEwKTtcbiAgICByZXR1cm4gaXNOYU4odmFsdWUpID8gNDAwIDogdmFsdWU7XG59O1xuXG52YXIgcGFyc2VGb250ID0gZXhwb3J0cy5wYXJzZUZvbnQgPSBmdW5jdGlvbiBwYXJzZUZvbnQoc3R5bGUpIHtcbiAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlLmZvbnRGYW1pbHk7XG4gICAgdmFyIGZvbnRTaXplID0gc3R5bGUuZm9udFNpemU7XG4gICAgdmFyIGZvbnRTdHlsZSA9IHN0eWxlLmZvbnRTdHlsZTtcbiAgICB2YXIgZm9udFZhcmlhbnQgPSBzdHlsZS5mb250VmFyaWFudDtcbiAgICB2YXIgZm9udFdlaWdodCA9IHBhcnNlRm9udFdlaWdodChzdHlsZS5mb250V2VpZ2h0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICAgIGZvbnRTaXplOiBmb250U2l6ZSxcbiAgICAgICAgZm9udFN0eWxlOiBmb250U3R5bGUsXG4gICAgICAgIGZvbnRWYXJpYW50OiBmb250VmFyaWFudCxcbiAgICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodFxuICAgIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHBhcnNlTGV0dGVyU3BhY2luZyA9IGV4cG9ydHMucGFyc2VMZXR0ZXJTcGFjaW5nID0gZnVuY3Rpb24gcGFyc2VMZXR0ZXJTcGFjaW5nKGxldHRlclNwYWNpbmcpIHtcbiAgICBpZiAobGV0dGVyU3BhY2luZyA9PT0gJ25vcm1hbCcpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQobGV0dGVyU3BhY2luZyk7XG4gICAgcmV0dXJuIGlzTmFOKHZhbHVlKSA/IDAgOiB2YWx1ZTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgTElORV9CUkVBSyA9IGV4cG9ydHMuTElORV9CUkVBSyA9IHtcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxuICAgIFNUUklDVDogJ3N0cmljdCdcbn07XG5cbnZhciBwYXJzZUxpbmVCcmVhayA9IGV4cG9ydHMucGFyc2VMaW5lQnJlYWsgPSBmdW5jdGlvbiBwYXJzZUxpbmVCcmVhayh3b3JkQnJlYWspIHtcbiAgICBzd2l0Y2ggKHdvcmRCcmVhaykge1xuICAgICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICAgICAgcmV0dXJuIExJTkVfQlJFQUsuU1RSSUNUO1xuICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIExJTkVfQlJFQUsuTk9STUFMO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhcnNlTGlzdFN0eWxlID0gZXhwb3J0cy5wYXJzZUxpc3RTdHlsZVR5cGUgPSBleHBvcnRzLkxJU1RfU1RZTEVfVFlQRSA9IGV4cG9ydHMuTElTVF9TVFlMRV9QT1NJVElPTiA9IHVuZGVmaW5lZDtcblxudmFyIF9iYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9iYWNrZ3JvdW5kJyk7XG5cbnZhciBMSVNUX1NUWUxFX1BPU0lUSU9OID0gZXhwb3J0cy5MSVNUX1NUWUxFX1BPU0lUSU9OID0ge1xuICAgIElOU0lERTogMCxcbiAgICBPVVRTSURFOiAxXG59O1xuXG52YXIgTElTVF9TVFlMRV9UWVBFID0gZXhwb3J0cy5MSVNUX1NUWUxFX1RZUEUgPSB7XG4gICAgTk9ORTogLTEsXG4gICAgRElTQzogMCxcbiAgICBDSVJDTEU6IDEsXG4gICAgU1FVQVJFOiAyLFxuICAgIERFQ0lNQUw6IDMsXG4gICAgQ0pLX0RFQ0lNQUw6IDQsXG4gICAgREVDSU1BTF9MRUFESU5HX1pFUk86IDUsXG4gICAgTE9XRVJfUk9NQU46IDYsXG4gICAgVVBQRVJfUk9NQU46IDcsXG4gICAgTE9XRVJfR1JFRUs6IDgsXG4gICAgTE9XRVJfQUxQSEE6IDksXG4gICAgVVBQRVJfQUxQSEE6IDEwLFxuICAgIEFSQUJJQ19JTkRJQzogMTEsXG4gICAgQVJNRU5JQU46IDEyLFxuICAgIEJFTkdBTEk6IDEzLFxuICAgIENBTUJPRElBTjogMTQsXG4gICAgQ0pLX0VBUlRITFlfQlJBTkNIOiAxNSxcbiAgICBDSktfSEVBVkVOTFlfU1RFTTogMTYsXG4gICAgQ0pLX0lERU9HUkFQSElDOiAxNyxcbiAgICBERVZBTkFHQVJJOiAxOCxcbiAgICBFVEhJT1BJQ19OVU1FUklDOiAxOSxcbiAgICBHRU9SR0lBTjogMjAsXG4gICAgR1VKQVJBVEk6IDIxLFxuICAgIEdVUk1VS0hJOiAyMixcbiAgICBIRUJSRVc6IDIyLFxuICAgIEhJUkFHQU5BOiAyMyxcbiAgICBISVJBR0FOQV9JUk9IQTogMjQsXG4gICAgSkFQQU5FU0VfRk9STUFMOiAyNSxcbiAgICBKQVBBTkVTRV9JTkZPUk1BTDogMjYsXG4gICAgS0FOTkFEQTogMjcsXG4gICAgS0FUQUtBTkE6IDI4LFxuICAgIEtBVEFLQU5BX0lST0hBOiAyOSxcbiAgICBLSE1FUjogMzAsXG4gICAgS09SRUFOX0hBTkdVTF9GT1JNQUw6IDMxLFxuICAgIEtPUkVBTl9IQU5KQV9GT1JNQUw6IDMyLFxuICAgIEtPUkVBTl9IQU5KQV9JTkZPUk1BTDogMzMsXG4gICAgTEFPOiAzNCxcbiAgICBMT1dFUl9BUk1FTklBTjogMzUsXG4gICAgTUFMQVlBTEFNOiAzNixcbiAgICBNT05HT0xJQU46IDM3LFxuICAgIE1ZQU5NQVI6IDM4LFxuICAgIE9SSVlBOiAzOSxcbiAgICBQRVJTSUFOOiA0MCxcbiAgICBTSU1QX0NISU5FU0VfRk9STUFMOiA0MSxcbiAgICBTSU1QX0NISU5FU0VfSU5GT1JNQUw6IDQyLFxuICAgIFRBTUlMOiA0MyxcbiAgICBURUxVR1U6IDQ0LFxuICAgIFRIQUk6IDQ1LFxuICAgIFRJQkVUQU46IDQ2LFxuICAgIFRSQURfQ0hJTkVTRV9GT1JNQUw6IDQ3LFxuICAgIFRSQURfQ0hJTkVTRV9JTkZPUk1BTDogNDgsXG4gICAgVVBQRVJfQVJNRU5JQU46IDQ5LFxuICAgIERJU0NMT1NVUkVfT1BFTjogNTAsXG4gICAgRElTQ0xPU1VSRV9DTE9TRUQ6IDUxXG59O1xuXG52YXIgcGFyc2VMaXN0U3R5bGVUeXBlID0gZXhwb3J0cy5wYXJzZUxpc3RTdHlsZVR5cGUgPSBmdW5jdGlvbiBwYXJzZUxpc3RTdHlsZVR5cGUodHlwZSkge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdkaXNjJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuRElTQztcbiAgICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0lSQ0xFO1xuICAgICAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5TUVVBUkU7XG4gICAgICAgIGNhc2UgJ2RlY2ltYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ERUNJTUFMO1xuICAgICAgICBjYXNlICdjamstZGVjaW1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMO1xuICAgICAgICBjYXNlICdkZWNpbWFsLWxlYWRpbmctemVybyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUxfTEVBRElOR19aRVJPO1xuICAgICAgICBjYXNlICdsb3dlci1yb21hbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxPV0VSX1JPTUFOO1xuICAgICAgICBjYXNlICd1cHBlci1yb21hbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlVQUEVSX1JPTUFOO1xuICAgICAgICBjYXNlICdsb3dlci1ncmVlayc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxPV0VSX0dSRUVLO1xuICAgICAgICBjYXNlICdsb3dlci1hbHBoYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxPV0VSX0FMUEhBO1xuICAgICAgICBjYXNlICd1cHBlci1hbHBoYSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FMUEhBO1xuICAgICAgICBjYXNlICdhcmFiaWMtaW5kaWMnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5BUkFCSUNfSU5ESUM7XG4gICAgICAgIGNhc2UgJ2FybWVuaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQVJNRU5JQU47XG4gICAgICAgIGNhc2UgJ2JlbmdhbGknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5CRU5HQUxJO1xuICAgICAgICBjYXNlICdjYW1ib2RpYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DQU1CT0RJQU47XG4gICAgICAgIGNhc2UgJ2Nqay1lYXJ0aGx5LWJyYW5jaCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19FQVJUSExZX0JSQU5DSDtcbiAgICAgICAgY2FzZSAnY2prLWhlYXZlbmx5LXN0ZW0nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfSEVBVkVOTFlfU1RFTTtcbiAgICAgICAgY2FzZSAnY2prLWlkZW9ncmFwaGljJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0lERU9HUkFQSElDO1xuICAgICAgICBjYXNlICdkZXZhbmFnYXJpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuREVWQU5BR0FSSTtcbiAgICAgICAgY2FzZSAnZXRoaW9waWMtbnVtZXJpYyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkVUSElPUElDX05VTUVSSUM7XG4gICAgICAgIGNhc2UgJ2dlb3JnaWFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuR0VPUkdJQU47XG4gICAgICAgIGNhc2UgJ2d1amFyYXRpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuR1VKQVJBVEk7XG4gICAgICAgIGNhc2UgJ2d1cm11a2hpJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuR1VSTVVLSEk7XG4gICAgICAgIGNhc2UgJ2hlYnJldyc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkhFQlJFVztcbiAgICAgICAgY2FzZSAnaGlyYWdhbmEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQTtcbiAgICAgICAgY2FzZSAnaGlyYWdhbmEtaXJvaGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQV9JUk9IQTtcbiAgICAgICAgY2FzZSAnamFwYW5lc2UtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfRk9STUFMO1xuICAgICAgICBjYXNlICdqYXBhbmVzZS1pbmZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0lORk9STUFMO1xuICAgICAgICBjYXNlICdrYW5uYWRhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0FOTkFEQTtcbiAgICAgICAgY2FzZSAna2F0YWthbmEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQTtcbiAgICAgICAgY2FzZSAna2F0YWthbmEtaXJvaGEnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LQVRBS0FOQV9JUk9IQTtcbiAgICAgICAgY2FzZSAna2htZXInOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LSE1FUjtcbiAgICAgICAgY2FzZSAna29yZWFuLWhhbmd1bC1mb3JtYWwnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOR1VMX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAna29yZWFuLWhhbmphLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ2tvcmVhbi1oYW5qYS1pbmZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9JTkZPUk1BTDtcbiAgICAgICAgY2FzZSAnbGFvJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTEFPO1xuICAgICAgICBjYXNlICdsb3dlci1hcm1lbmlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxPV0VSX0FSTUVOSUFOO1xuICAgICAgICBjYXNlICdtYWxheWFsYW0nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5NQUxBWUFMQU07XG4gICAgICAgIGNhc2UgJ21vbmdvbGlhbic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk1PTkdPTElBTjtcbiAgICAgICAgY2FzZSAnbXlhbm1hcic6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLk1ZQU5NQVI7XG4gICAgICAgIGNhc2UgJ29yaXlhJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuT1JJWUE7XG4gICAgICAgIGNhc2UgJ3BlcnNpYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5QRVJTSUFOO1xuICAgICAgICBjYXNlICdzaW1wLWNoaW5lc2UtZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0ZPUk1BTDtcbiAgICAgICAgY2FzZSAnc2ltcC1jaGluZXNlLWluZm9ybWFsJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0lORk9STUFMO1xuICAgICAgICBjYXNlICd0YW1pbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRBTUlMO1xuICAgICAgICBjYXNlICd0ZWx1Z3UnOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5URUxVR1U7XG4gICAgICAgIGNhc2UgJ3RoYWknOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5USEFJO1xuICAgICAgICBjYXNlICd0aWJldGFuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVElCRVRBTjtcbiAgICAgICAgY2FzZSAndHJhZC1jaGluZXNlLWZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRSQURfQ0hJTkVTRV9GT1JNQUw7XG4gICAgICAgIGNhc2UgJ3RyYWQtY2hpbmVzZS1pbmZvcm1hbCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRSQURfQ0hJTkVTRV9JTkZPUk1BTDtcbiAgICAgICAgY2FzZSAndXBwZXItYXJtZW5pYW4nOlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5VUFBFUl9BUk1FTklBTjtcbiAgICAgICAgY2FzZSAnZGlzY2xvc3VyZS1vcGVuJzpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuRElTQ0xPU1VSRV9PUEVOO1xuICAgICAgICBjYXNlICdkaXNjbG9zdXJlLWNsb3NlZCc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRJU0NMT1NVUkVfQ0xPU0VEO1xuICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTk9ORTtcbiAgICB9XG59O1xuXG52YXIgcGFyc2VMaXN0U3R5bGUgPSBleHBvcnRzLnBhcnNlTGlzdFN0eWxlID0gZnVuY3Rpb24gcGFyc2VMaXN0U3R5bGUoc3R5bGUpIHtcbiAgICB2YXIgbGlzdFN0eWxlSW1hZ2UgPSAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2xpc3Qtc3R5bGUtaW1hZ2UnKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdFN0eWxlVHlwZTogcGFyc2VMaXN0U3R5bGVUeXBlKHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2xpc3Qtc3R5bGUtdHlwZScpKSxcbiAgICAgICAgbGlzdFN0eWxlSW1hZ2U6IGxpc3RTdHlsZUltYWdlLmxlbmd0aCA/IGxpc3RTdHlsZUltYWdlWzBdIDogbnVsbCxcbiAgICAgICAgbGlzdFN0eWxlUG9zaXRpb246IHBhcnNlTGlzdFN0eWxlUG9zaXRpb24oc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGlzdC1zdHlsZS1wb3NpdGlvbicpKVxuICAgIH07XG59O1xuXG52YXIgcGFyc2VMaXN0U3R5bGVQb3NpdGlvbiA9IGZ1bmN0aW9uIHBhcnNlTGlzdFN0eWxlUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2luc2lkZSc6XG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9QT1NJVElPTi5JTlNJREU7XG4gICAgICAgIGNhc2UgJ291dHNpZGUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfUE9TSVRJT04uT1VUU0lERTtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZU1hcmdpbiA9IHVuZGVmaW5lZDtcblxudmFyIF9MZW5ndGggPSByZXF1aXJlKCcuLi9MZW5ndGgnKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNJREVTID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcblxudmFyIHBhcnNlTWFyZ2luID0gZXhwb3J0cy5wYXJzZU1hcmdpbiA9IGZ1bmN0aW9uIHBhcnNlTWFyZ2luKHN0eWxlKSB7XG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLScgKyBzaWRlKSk7XG4gICAgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIE9WRVJGTE9XID0gZXhwb3J0cy5PVkVSRkxPVyA9IHtcbiAgICBWSVNJQkxFOiAwLFxuICAgIEhJRERFTjogMSxcbiAgICBTQ1JPTEw6IDIsXG4gICAgQVVUTzogM1xufTtcblxudmFyIHBhcnNlT3ZlcmZsb3cgPSBleHBvcnRzLnBhcnNlT3ZlcmZsb3cgPSBmdW5jdGlvbiBwYXJzZU92ZXJmbG93KG92ZXJmbG93KSB7XG4gICAgc3dpdGNoIChvdmVyZmxvdykge1xuICAgICAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XLkhJRERFTjtcbiAgICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5TQ1JPTEw7XG4gICAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XLkFVVE87XG4gICAgICAgIGNhc2UgJ3Zpc2libGUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XLlZJU0lCTEU7XG4gICAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBPVkVSRkxPV19XUkFQID0gZXhwb3J0cy5PVkVSRkxPV19XUkFQID0ge1xuICAgIE5PUk1BTDogMCxcbiAgICBCUkVBS19XT1JEOiAxXG59O1xuXG52YXIgcGFyc2VPdmVyZmxvd1dyYXAgPSBleHBvcnRzLnBhcnNlT3ZlcmZsb3dXcmFwID0gZnVuY3Rpb24gcGFyc2VPdmVyZmxvd1dyYXAob3ZlcmZsb3cpIHtcbiAgICBzd2l0Y2ggKG92ZXJmbG93KSB7XG4gICAgICAgIGNhc2UgJ2JyZWFrLXdvcmQnOlxuICAgICAgICAgICAgcmV0dXJuIE9WRVJGTE9XX1dSQVAuQlJFQUtfV09SRDtcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPV19XUkFQLk5PUk1BTDtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVBhZGRpbmcgPSBleHBvcnRzLlBBRERJTkdfU0lERVMgPSB1bmRlZmluZWQ7XG5cbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi4vTGVuZ3RoJyk7XG5cbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBQQURESU5HX1NJREVTID0gZXhwb3J0cy5QQURESU5HX1NJREVTID0ge1xuICAgIFRPUDogMCxcbiAgICBSSUdIVDogMSxcbiAgICBCT1RUT006IDIsXG4gICAgTEVGVDogM1xufTtcblxudmFyIFNJREVTID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcblxudmFyIHBhcnNlUGFkZGluZyA9IGV4cG9ydHMucGFyc2VQYWRkaW5nID0gZnVuY3Rpb24gcGFyc2VQYWRkaW5nKHN0eWxlKSB7XG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy0nICsgc2lkZSkpO1xuICAgIH0pO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBQT1NJVElPTiA9IGV4cG9ydHMuUE9TSVRJT04gPSB7XG4gICAgU1RBVElDOiAwLFxuICAgIFJFTEFUSVZFOiAxLFxuICAgIEFCU09MVVRFOiAyLFxuICAgIEZJWEVEOiAzLFxuICAgIFNUSUNLWTogNFxufTtcblxudmFyIHBhcnNlUG9zaXRpb24gPSBleHBvcnRzLnBhcnNlUG9zaXRpb24gPSBmdW5jdGlvbiBwYXJzZVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICBjYXNlICdyZWxhdGl2ZSc6XG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uUkVMQVRJVkU7XG4gICAgICAgIGNhc2UgJ2Fic29sdXRlJzpcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5BQlNPTFVURTtcbiAgICAgICAgY2FzZSAnZml4ZWQnOlxuICAgICAgICAgICAgcmV0dXJuIFBPU0lUSU9OLkZJWEVEO1xuICAgICAgICBjYXNlICdzdGlja3knOlxuICAgICAgICAgICAgcmV0dXJuIFBPU0lUSU9OLlNUSUNLWTtcbiAgICB9XG5cbiAgICByZXR1cm4gUE9TSVRJT04uU1RBVElDO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VUZXh0RGVjb3JhdGlvbiA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OX0xJTkUgPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTiA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OX1NUWUxFID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi4vQ29sb3InKTtcblxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBURVhUX0RFQ09SQVRJT05fU1RZTEUgPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9TVFlMRSA9IHtcbiAgICBTT0xJRDogMCxcbiAgICBET1VCTEU6IDEsXG4gICAgRE9UVEVEOiAyLFxuICAgIERBU0hFRDogMyxcbiAgICBXQVZZOiA0XG59O1xuXG52YXIgVEVYVF9ERUNPUkFUSU9OID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT04gPSB7XG4gICAgTk9ORTogbnVsbFxufTtcblxudmFyIFRFWFRfREVDT1JBVElPTl9MSU5FID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fTElORSA9IHtcbiAgICBVTkRFUkxJTkU6IDEsXG4gICAgT1ZFUkxJTkU6IDIsXG4gICAgTElORV9USFJPVUdIOiAzLFxuICAgIEJMSU5LOiA0XG59O1xuXG52YXIgcGFyc2VMaW5lID0gZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUpIHtcbiAgICBzd2l0Y2ggKGxpbmUpIHtcbiAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5VTkRFUkxJTkU7XG4gICAgICAgIGNhc2UgJ292ZXJsaW5lJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5PVkVSTElORTtcbiAgICAgICAgY2FzZSAnbGluZS10aHJvdWdoJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5MSU5FX1RIUk9VR0g7XG4gICAgfVxuICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5CTElOSztcbn07XG5cbnZhciBwYXJzZVRleHREZWNvcmF0aW9uTGluZSA9IGZ1bmN0aW9uIHBhcnNlVGV4dERlY29yYXRpb25MaW5lKGxpbmUpIHtcbiAgICBpZiAobGluZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lLnNwbGl0KCcgJykubWFwKHBhcnNlTGluZSk7XG59O1xuXG52YXIgcGFyc2VUZXh0RGVjb3JhdGlvblN0eWxlID0gZnVuY3Rpb24gcGFyc2VUZXh0RGVjb3JhdGlvblN0eWxlKHN0eWxlKSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgICBjYXNlICdkb3VibGUnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5ET1VCTEU7XG4gICAgICAgIGNhc2UgJ2RvdHRlZCc6XG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX1NUWUxFLkRPVFRFRDtcbiAgICAgICAgY2FzZSAnZGFzaGVkJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuREFTSEVEO1xuICAgICAgICBjYXNlICd3YXZ5JzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuV0FWWTtcbiAgICB9XG4gICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5TT0xJRDtcbn07XG5cbnZhciBwYXJzZVRleHREZWNvcmF0aW9uID0gZXhwb3J0cy5wYXJzZVRleHREZWNvcmF0aW9uID0gZnVuY3Rpb24gcGFyc2VUZXh0RGVjb3JhdGlvbihzdHlsZSkge1xuICAgIHZhciB0ZXh0RGVjb3JhdGlvbkxpbmUgPSBwYXJzZVRleHREZWNvcmF0aW9uTGluZShzdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgPyBzdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgOiBzdHlsZS50ZXh0RGVjb3JhdGlvbik7XG4gICAgaWYgKHRleHREZWNvcmF0aW9uTGluZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OLk5PTkU7XG4gICAgfVxuXG4gICAgdmFyIHRleHREZWNvcmF0aW9uQ29sb3IgPSBzdHlsZS50ZXh0RGVjb3JhdGlvbkNvbG9yID8gbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS50ZXh0RGVjb3JhdGlvbkNvbG9yKSA6IG51bGw7XG4gICAgdmFyIHRleHREZWNvcmF0aW9uU3R5bGUgPSBwYXJzZVRleHREZWNvcmF0aW9uU3R5bGUoc3R5bGUudGV4dERlY29yYXRpb25TdHlsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IHRleHREZWNvcmF0aW9uTGluZSxcbiAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogdGV4dERlY29yYXRpb25Db2xvcixcbiAgICAgICAgdGV4dERlY29yYXRpb25TdHlsZTogdGV4dERlY29yYXRpb25TdHlsZVxuICAgIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRleHRTaGFkb3cgPSB1bmRlZmluZWQ7XG5cbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuLi9Db2xvcicpO1xuXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5VTUJFUiA9IC9eKFsrLV18XFxkfFxcLikkL2k7XG5cbnZhciBwYXJzZVRleHRTaGFkb3cgPSBleHBvcnRzLnBhcnNlVGV4dFNoYWRvdyA9IGZ1bmN0aW9uIHBhcnNlVGV4dFNoYWRvdyh0ZXh0U2hhZG93KSB7XG4gICAgaWYgKHRleHRTaGFkb3cgPT09ICdub25lJyB8fCB0eXBlb2YgdGV4dFNoYWRvdyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9ICcnO1xuICAgIHZhciBpc0xlbmd0aCA9IGZhbHNlO1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICB2YXIgc2hhZG93cyA9IFtdO1xuICAgIHZhciBudW1QYXJlbnMgPSAwO1xuICAgIHZhciBjb2xvciA9IG51bGw7XG5cbiAgICB2YXIgYXBwZW5kVmFsdWUgPSBmdW5jdGlvbiBhcHBlbmRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpc0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHBhcnNlRmxvYXQoY3VycmVudFZhbHVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlzTGVuZ3RoID0gZmFsc2U7XG4gICAgICAgIGN1cnJlbnRWYWx1ZSA9ICcnO1xuICAgIH07XG5cbiAgICB2YXIgYXBwZW5kU2hhZG93ID0gZnVuY3Rpb24gYXBwZW5kU2hhZG93KCkge1xuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCAmJiBjb2xvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2hhZG93cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WDogdmFsdWVzWzBdIHx8IDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogdmFsdWVzWzFdIHx8IDAsXG4gICAgICAgICAgICAgICAgYmx1cjogdmFsdWVzWzJdIHx8IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlcy5zcGxpY2UoMCwgdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIGNvbG9yID0gbnVsbDtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0U2hhZG93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gdGV4dFNoYWRvd1tpXTtcbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICBjYXNlICcoJzpcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgICAgICAgICBudW1QYXJlbnMrKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyknOlxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICAgICAgICAgIG51bVBhcmVucy0tO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgaWYgKG51bVBhcmVucyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRTaGFkb3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW5zID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlLmxlbmd0aCA9PT0gMCAmJiBOVU1CRVIudGVzdChjKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0xlbmd0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSArPSBjO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kVmFsdWUoKTtcbiAgICBhcHBlbmRTaGFkb3coKTtcblxuICAgIGlmIChzaGFkb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZG93cztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgVEVYVF9UUkFOU0ZPUk0gPSBleHBvcnRzLlRFWFRfVFJBTlNGT1JNID0ge1xuICAgIE5PTkU6IDAsXG4gICAgTE9XRVJDQVNFOiAxLFxuICAgIFVQUEVSQ0FTRTogMixcbiAgICBDQVBJVEFMSVpFOiAzXG59O1xuXG52YXIgcGFyc2VUZXh0VHJhbnNmb3JtID0gZXhwb3J0cy5wYXJzZVRleHRUcmFuc2Zvcm0gPSBmdW5jdGlvbiBwYXJzZVRleHRUcmFuc2Zvcm0odGV4dFRyYW5zZm9ybSkge1xuICAgIHN3aXRjaCAodGV4dFRyYW5zZm9ybSkge1xuICAgICAgICBjYXNlICd1cHBlcmNhc2UnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLlVQUEVSQ0FTRTtcbiAgICAgICAgY2FzZSAnbG93ZXJjYXNlJzpcbiAgICAgICAgICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5MT1dFUkNBU0U7XG4gICAgICAgIGNhc2UgJ2NhcGl0YWxpemUnOlxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLkNBUElUQUxJWkU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLk5PTkU7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wYXJzZVRyYW5zZm9ybSA9IHVuZGVmaW5lZDtcblxudmFyIF9MZW5ndGggPSByZXF1aXJlKCcuLi9MZW5ndGgnKTtcblxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRvRmxvYXQgPSBmdW5jdGlvbiB0b0Zsb2F0KHMpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzLnRyaW0oKSk7XG59O1xuXG52YXIgTUFUUklYID0gLyhtYXRyaXh8bWF0cml4M2QpXFwoKC4rKVxcKS87XG5cbnZhciBwYXJzZVRyYW5zZm9ybSA9IGV4cG9ydHMucGFyc2VUcmFuc2Zvcm0gPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybShzdHlsZSkge1xuICAgIHZhciB0cmFuc2Zvcm0gPSBwYXJzZVRyYW5zZm9ybU1hdHJpeChzdHlsZS50cmFuc2Zvcm0gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHN0eWxlLm1velRyYW5zZm9ybSB8fFxuICAgIC8vICRGbG93Rml4TWVcbiAgICBzdHlsZS5tc1RyYW5zZm9ybSB8fFxuICAgIC8vICRGbG93Rml4TWVcbiAgICBzdHlsZS5vVHJhbnNmb3JtKTtcbiAgICBpZiAodHJhbnNmb3JtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IHBhcnNlVHJhbnNmb3JtT3JpZ2luKHN0eWxlLnRyYW5zZm9ybU9yaWdpbiB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm1PcmlnaW4gfHwgc3R5bGUubW96VHJhbnNmb3JtT3JpZ2luIHx8XG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgc3R5bGUubXNUcmFuc2Zvcm1PcmlnaW4gfHxcbiAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICBzdHlsZS5vVHJhbnNmb3JtT3JpZ2luKVxuICAgIH07XG59O1xuXG4vLyAkRmxvd0ZpeE1lXG52YXIgcGFyc2VUcmFuc2Zvcm1PcmlnaW4gPSBmdW5jdGlvbiBwYXJzZVRyYW5zZm9ybU9yaWdpbihvcmlnaW4pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHYgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCcpO1xuICAgICAgICByZXR1cm4gW3YsIHZdO1xuICAgIH1cbiAgICB2YXIgdmFsdWVzID0gb3JpZ2luLnNwbGl0KCcgJykubWFwKF9MZW5ndGgyLmRlZmF1bHQuY3JlYXRlKTtcbiAgICByZXR1cm4gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXTtcbn07XG5cbi8vICRGbG93Rml4TWVcbnZhciBwYXJzZVRyYW5zZm9ybU1hdHJpeCA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtTWF0cml4KHRyYW5zZm9ybSkge1xuICAgIGlmICh0cmFuc2Zvcm0gPT09ICdub25lJyB8fCB0eXBlb2YgdHJhbnNmb3JtICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2ggPSB0cmFuc2Zvcm0ubWF0Y2goTUFUUklYKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgaWYgKG1hdGNoWzFdID09PSAnbWF0cml4Jykge1xuICAgICAgICAgICAgdmFyIG1hdHJpeCA9IG1hdGNoWzJdLnNwbGl0KCcsJykubWFwKHRvRmxvYXQpO1xuICAgICAgICAgICAgcmV0dXJuIFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzJdLCBtYXRyaXhbM10sIG1hdHJpeFs0XSwgbWF0cml4WzVdXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRyaXgzZCA9IG1hdGNoWzJdLnNwbGl0KCcsJykubWFwKHRvRmxvYXQpO1xuICAgICAgICAgICAgcmV0dXJuIFttYXRyaXgzZFswXSwgbWF0cml4M2RbMV0sIG1hdHJpeDNkWzRdLCBtYXRyaXgzZFs1XSwgbWF0cml4M2RbMTJdLCBtYXRyaXgzZFsxM11dO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBWSVNJQklMSVRZID0gZXhwb3J0cy5WSVNJQklMSVRZID0ge1xuICAgIFZJU0lCTEU6IDAsXG4gICAgSElEREVOOiAxLFxuICAgIENPTExBUFNFOiAyXG59O1xuXG52YXIgcGFyc2VWaXNpYmlsaXR5ID0gZXhwb3J0cy5wYXJzZVZpc2liaWxpdHkgPSBmdW5jdGlvbiBwYXJzZVZpc2liaWxpdHkodmlzaWJpbGl0eSkge1xuICAgIHN3aXRjaCAodmlzaWJpbGl0eSkge1xuICAgICAgICBjYXNlICdoaWRkZW4nOlxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuSElEREVOO1xuICAgICAgICBjYXNlICdjb2xsYXBzZSc6XG4gICAgICAgICAgICByZXR1cm4gVklTSUJJTElUWS5DT0xMQVBTRTtcbiAgICAgICAgY2FzZSAndmlzaWJsZSc6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gVklTSUJJTElUWS5WSVNJQkxFO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgV09SRF9CUkVBSyA9IGV4cG9ydHMuV09SRF9CUkVBSyA9IHtcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxuICAgIEJSRUFLX0FMTDogJ2JyZWFrLWFsbCcsXG4gICAgS0VFUF9BTEw6ICdrZWVwLWFsbCdcbn07XG5cbnZhciBwYXJzZVdvcmRCcmVhayA9IGV4cG9ydHMucGFyc2VXb3JkQnJlYWsgPSBmdW5jdGlvbiBwYXJzZVdvcmRCcmVhayh3b3JkQnJlYWspIHtcbiAgICBzd2l0Y2ggKHdvcmRCcmVhaykge1xuICAgICAgICBjYXNlICdicmVhay1hbGwnOlxuICAgICAgICAgICAgcmV0dXJuIFdPUkRfQlJFQUsuQlJFQUtfQUxMO1xuICAgICAgICBjYXNlICdrZWVwLWFsbCc6XG4gICAgICAgICAgICByZXR1cm4gV09SRF9CUkVBSy5LRUVQX0FMTDtcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBXT1JEX0JSRUFLLk5PUk1BTDtcbiAgICB9XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xudmFyIHBhcnNlWkluZGV4ID0gZXhwb3J0cy5wYXJzZVpJbmRleCA9IGZ1bmN0aW9uIHBhcnNlWkluZGV4KHpJbmRleCkge1xuICAgIHZhciBhdXRvID0gekluZGV4ID09PSAnYXV0byc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0bzogYXV0byxcbiAgICAgICAgb3JkZXI6IGF1dG8gPyAwIDogcGFyc2VJbnQoekluZGV4LCAxMClcbiAgICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9QYXRoID0gcmVxdWlyZSgnLi4vZHJhd2luZy9QYXRoJyk7XG5cbnZhciBfdGV4dERlY29yYXRpb24gPSByZXF1aXJlKCcuLi9wYXJzaW5nL3RleHREZWNvcmF0aW9uJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBhZGRDb2xvclN0b3BzID0gZnVuY3Rpb24gYWRkQ29sb3JTdG9wcyhncmFkaWVudCwgY2FudmFzR3JhZGllbnQpIHtcbiAgICB2YXIgbWF4U3RvcCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGdyYWRpZW50LmNvbG9yU3RvcHMubWFwKGZ1bmN0aW9uIChjb2xvclN0b3ApIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yU3RvcC5zdG9wO1xuICAgIH0pKTtcbiAgICB2YXIgZiA9IDEgLyBNYXRoLm1heCgxLCBtYXhTdG9wKTtcbiAgICBncmFkaWVudC5jb2xvclN0b3BzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yU3RvcCkge1xuICAgICAgICBjYW52YXNHcmFkaWVudC5hZGRDb2xvclN0b3AoZiAqIGNvbG9yU3RvcC5zdG9wLCBjb2xvclN0b3AuY29sb3IudG9TdHJpbmcoKSk7XG4gICAgfSk7XG59O1xuXG52YXIgQ2FudmFzUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FudmFzUmVuZGVyZXIoY2FudmFzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW52YXNSZW5kZXJlcik7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXMgPyBjYW52YXMgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FudmFzUmVuZGVyZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIob3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihvcHRpb25zLndpZHRoICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKG9wdGlvbnMuaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5zY2FsZSh0aGlzLm9wdGlvbnMuc2NhbGUsIHRoaXMub3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLW9wdGlvbnMueCwgLW9wdGlvbnMueSk7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSAnYm90dG9tJztcbiAgICAgICAgICAgIG9wdGlvbnMubG9nZ2VyLmxvZygnQ2FudmFzIHJlbmRlcmVyIGluaXRpYWxpemVkICgnICsgb3B0aW9ucy53aWR0aCArICd4JyArIG9wdGlvbnMuaGVpZ2h0ICsgJyBhdCAnICsgb3B0aW9ucy54ICsgJywnICsgb3B0aW9ucy55ICsgJykgd2l0aCBzY2FsZSAnICsgdGhpcy5vcHRpb25zLnNjYWxlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xpcCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGlwKGNsaXBQYXRocywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChjbGlwUGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGNsaXBQYXRocy5mb3JFYWNoKGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhdGgocGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC5jbGlwKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChjbGlwUGF0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkcmF3SW1hZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhd0ltYWdlKGltYWdlLCBzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHNvdXJjZS5sZWZ0LCBzb3VyY2UudG9wLCBzb3VyY2Uud2lkdGgsIHNvdXJjZS5oZWlnaHQsIGRlc3RpbmF0aW9uLmxlZnQsIGRlc3RpbmF0aW9uLnRvcCwgZGVzdGluYXRpb24ud2lkdGgsIGRlc3RpbmF0aW9uLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RyYXdTaGFwZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3U2hhcGUocGF0aCwgY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMucGF0aChwYXRoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2ZpbGwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZmlsbChjb2xvcikge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0VGFyZ2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJykuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNhbnZhcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3BhdGgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcGF0aChfcGF0aCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3BhdGgpKSB7XG4gICAgICAgICAgICAgICAgX3BhdGguZm9yRWFjaChmdW5jdGlvbiAocG9pbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IHBvaW50LnR5cGUgPT09IF9QYXRoLlBBVEguVkVDVE9SID8gcG9pbnQgOiBwb2ludC5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4Lm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5jdHgubGluZVRvKHN0YXJ0LngsIHN0YXJ0LnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50LnR5cGUgPT09IF9QYXRoLlBBVEguQkVaSUVSX0NVUlZFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4LmJlemllckN1cnZlVG8ocG9pbnQuc3RhcnRDb250cm9sLngsIHBvaW50LnN0YXJ0Q29udHJvbC55LCBwb2ludC5lbmRDb250cm9sLngsIHBvaW50LmVuZENvbnRyb2wueSwgcG9pbnQuZW5kLngsIHBvaW50LmVuZC55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoX3BhdGgueCArIF9wYXRoLnJhZGl1cywgX3BhdGgueSArIF9wYXRoLnJhZGl1cywgX3BhdGgucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWN0YW5nbGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckxpbmVhckdyYWRpZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxpbmVhckdyYWRpZW50KGJvdW5kcywgZ3JhZGllbnQpIHtcbiAgICAgICAgICAgIHZhciBsaW5lYXJHcmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KGJvdW5kcy5sZWZ0ICsgZ3JhZGllbnQuZGlyZWN0aW9uLngxLCBib3VuZHMudG9wICsgZ3JhZGllbnQuZGlyZWN0aW9uLnkxLCBib3VuZHMubGVmdCArIGdyYWRpZW50LmRpcmVjdGlvbi54MCwgYm91bmRzLnRvcCArIGdyYWRpZW50LmRpcmVjdGlvbi55MCk7XG5cbiAgICAgICAgICAgIGFkZENvbG9yU3RvcHMoZ3JhZGllbnQsIGxpbmVhckdyYWRpZW50KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGxpbmVhckdyYWRpZW50O1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclJhZGlhbEdyYWRpZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJhZGlhbEdyYWRpZW50KGJvdW5kcywgZ3JhZGllbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgeCA9IGJvdW5kcy5sZWZ0ICsgZ3JhZGllbnQuY2VudGVyLng7XG4gICAgICAgICAgICB2YXIgeSA9IGJvdW5kcy50b3AgKyBncmFkaWVudC5jZW50ZXIueTtcblxuICAgICAgICAgICAgdmFyIHJhZGlhbEdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgZ3JhZGllbnQucmFkaXVzLngpO1xuICAgICAgICAgICAgaWYgKCFyYWRpYWxHcmFkaWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkQ29sb3JTdG9wcyhncmFkaWVudCwgcmFkaWFsR3JhZGllbnQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gcmFkaWFsR3JhZGllbnQ7XG5cbiAgICAgICAgICAgIGlmIChncmFkaWVudC5yYWRpdXMueCAhPT0gZ3JhZGllbnQucmFkaXVzLnkpIHtcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm1zIGZvciBlbGxpcHRpY2FsIHJhZGlhbCBncmFkaWVudFxuICAgICAgICAgICAgICAgIHZhciBtaWRYID0gYm91bmRzLmxlZnQgKyAwLjUgKiBib3VuZHMud2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIG1pZFkgPSBib3VuZHMudG9wICsgMC41ICogYm91bmRzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGdyYWRpZW50LnJhZGl1cy55IC8gZ3JhZGllbnQucmFkaXVzLng7XG4gICAgICAgICAgICAgICAgdmFyIGludkYgPSAxIC8gZjtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKG1pZFgsIG1pZFksIFsxLCAwLCAwLCBmLCAwLCAwXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgaW52RiAqIChib3VuZHMudG9wIC0gbWlkWSkgKyBtaWRZLCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQgKiBpbnZGKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclJlcGVhdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSZXBlYXQocGF0aCwgaW1hZ2UsIGltYWdlU2l6ZSwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAgICAgdGhpcy5wYXRoKHBhdGgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jdHguY3JlYXRlUGF0dGVybih0aGlzLnJlc2l6ZUltYWdlKGltYWdlLCBpbWFnZVNpemUpLCAncmVwZWF0Jyk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUob2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLW9mZnNldFgsIC1vZmZzZXRZKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyVGV4dE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGV4dE5vZGUodGV4dEJvdW5kcywgY29sb3IsIGZvbnQsIHRleHREZWNvcmF0aW9uLCB0ZXh0U2hhZG93cykge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBbZm9udC5mb250U3R5bGUsIGZvbnQuZm9udFZhcmlhbnQsIGZvbnQuZm9udFdlaWdodCwgZm9udC5mb250U2l6ZSwgZm9udC5mb250RmFtaWx5XS5qb2luKCcgJyk7XG5cbiAgICAgICAgICAgIHRleHRCb3VuZHMuZm9yRWFjaChmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgICAgIF90aGlzNC5jdHguZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAodGV4dFNoYWRvd3MgJiYgdGV4dC50ZXh0LnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYWRvd3Muc2xpY2UoMCkucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKHRleHRTaGFkb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93Q29sb3IgPSB0ZXh0U2hhZG93LmNvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd09mZnNldFggPSB0ZXh0U2hhZG93Lm9mZnNldFggKiBfdGhpczQub3B0aW9ucy5zY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93T2Zmc2V0WSA9IHRleHRTaGFkb3cub2Zmc2V0WSAqIF90aGlzNC5vcHRpb25zLnNjYWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dCbHVyID0gdGV4dFNoYWRvdy5ibHVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LmZpbGxUZXh0KHRleHQudGV4dCwgdGV4dC5ib3VuZHMubGVmdCwgdGV4dC5ib3VuZHMudG9wICsgdGV4dC5ib3VuZHMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5maWxsVGV4dCh0ZXh0LnRleHQsIHRleHQuYm91bmRzLmxlZnQsIHRleHQuYm91bmRzLnRvcCArIHRleHQuYm91bmRzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0RGVjb3JhdGlvbkNvbG9yID0gdGV4dERlY29yYXRpb24udGV4dERlY29yYXRpb25Db2xvciB8fCBjb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb24udGV4dERlY29yYXRpb25MaW5lLmZvckVhY2goZnVuY3Rpb24gKHRleHREZWNvcmF0aW9uTGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0ZXh0RGVjb3JhdGlvbkxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF90ZXh0RGVjb3JhdGlvbi5URVhUX0RFQ09SQVRJT05fTElORS5VTkRFUkxJTkU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyYXdzIGEgbGluZSBhdCB0aGUgYmFzZWxpbmUgb2YgdGhlIGZvbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBBcyBzb21lIGJyb3dzZXJzIGRpc3BsYXkgdGhlIGxpbmUgYXMgbW9yZSB0aGFuIDFweCBpZiB0aGUgZm9udC1zaXplIGlzIGJpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byB0YWtlIHRoYXQgaW50byBhY2NvdW50IGJvdGggaW4gcG9zaXRpb24gYW5kIHNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9vcHRpb25zJGZvbnRNZXRyaWNzJCA9IF90aGlzNC5vcHRpb25zLmZvbnRNZXRyaWNzLmdldE1ldHJpY3MoZm9udCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlbGluZSA9IF9vcHRpb25zJGZvbnRNZXRyaWNzJC5iYXNlbGluZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGgucm91bmQodGV4dC5ib3VuZHMudG9wICsgYmFzZWxpbmUpLCB0ZXh0LmJvdW5kcy53aWR0aCwgMSwgdGV4dERlY29yYXRpb25Db2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTl9MSU5FLk9WRVJMSU5FOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGgucm91bmQodGV4dC5ib3VuZHMudG9wKSwgdGV4dC5ib3VuZHMud2lkdGgsIDEsIHRleHREZWNvcmF0aW9uQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF90ZXh0RGVjb3JhdGlvbi5URVhUX0RFQ09SQVRJT05fTElORS5MSU5FX1RIUk9VR0g6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gdHJ5IGFuZCBmaW5kIGV4YWN0IHBvc2l0aW9uIGZvciBsaW5lLXRocm91Z2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9vcHRpb25zJGZvbnRNZXRyaWNzJDIgPSBfdGhpczQub3B0aW9ucy5mb250TWV0cmljcy5nZXRNZXRyaWNzKGZvbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlkZGxlID0gX29wdGlvbnMkZm9udE1ldHJpY3MkMi5taWRkbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnJlY3RhbmdsZSh0ZXh0LmJvdW5kcy5sZWZ0LCBNYXRoLmNlaWwodGV4dC5ib3VuZHMudG9wICsgbWlkZGxlKSwgdGV4dC5ib3VuZHMud2lkdGgsIDEsIHRleHREZWNvcmF0aW9uQ29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc2l6ZUltYWdlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltYWdlLCBzaXplKSB7XG4gICAgICAgICAgICBpZiAoaW1hZ2Uud2lkdGggPT09IHNpemUud2lkdGggJiYgaW1hZ2UuaGVpZ2h0ID09PSBzaXplLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBzaXplLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCwgMCwgMCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0T3BhY2l0eScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gb3BhY2l0eTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndHJhbnNmb3JtJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zZm9ybShvZmZzZXRYLCBvZmZzZXRZLCBtYXRyaXgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUob2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2Zvcm0obWF0cml4WzBdLCBtYXRyaXhbMV0sIG1hdHJpeFsyXSwgbWF0cml4WzNdLCBtYXRyaXhbNF0sIG1hdHJpeFs1XSk7XG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLW9mZnNldFgsIC1vZmZzZXRZKTtcblxuICAgICAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhbnZhc1JlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDYW52YXNSZW5kZXJlcjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEZvcmVpZ25PYmplY3RSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb3JlaWduT2JqZWN0UmVuZGVyZXIoZWxlbWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9yZWlnbk9iamVjdFJlbmRlcmVyKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGb3JlaWduT2JqZWN0UmVuZGVyZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIob3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGguZmxvb3Iob3B0aW9ucy53aWR0aCkgKiBvcHRpb25zLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5mbG9vcihvcHRpb25zLmhlaWdodCkgKiBvcHRpb25zLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcblxuICAgICAgICAgICAgb3B0aW9ucy5sb2dnZXIubG9nKCdGb3JlaWduT2JqZWN0IHJlbmRlcmVyIGluaXRpYWxpemVkICgnICsgb3B0aW9ucy53aWR0aCArICd4JyArIG9wdGlvbnMuaGVpZ2h0ICsgJyBhdCAnICsgb3B0aW9ucy54ICsgJywnICsgb3B0aW9ucy55ICsgJykgd2l0aCBzY2FsZSAnICsgb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB2YXIgc3ZnID0gY3JlYXRlRm9yZWlnbk9iamVjdFNWRyhNYXRoLm1heChvcHRpb25zLndpbmRvd1dpZHRoLCBvcHRpb25zLndpZHRoKSAqIG9wdGlvbnMuc2NhbGUsIE1hdGgubWF4KG9wdGlvbnMud2luZG93SGVpZ2h0LCBvcHRpb25zLmhlaWdodCkgKiBvcHRpb25zLnNjYWxlLCBvcHRpb25zLnNjcm9sbFggKiBvcHRpb25zLnNjYWxlLCBvcHRpb25zLnNjcm9sbFkgKiBvcHRpb25zLnNjYWxlLCB0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbG9hZFNlcmlhbGl6ZWRTVkcoc3ZnKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3R4LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBvcHRpb25zLndpZHRoICogb3B0aW9ucy5zY2FsZSwgb3B0aW9ucy5oZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5jdHguZHJhd0ltYWdlKGltZywgLW9wdGlvbnMueCAqIG9wdGlvbnMuc2NhbGUsIC1vcHRpb25zLnkgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2FudmFzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRm9yZWlnbk9iamVjdFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGb3JlaWduT2JqZWN0UmVuZGVyZXI7XG52YXIgY3JlYXRlRm9yZWlnbk9iamVjdFNWRyA9IGV4cG9ydHMuY3JlYXRlRm9yZWlnbk9iamVjdFNWRyA9IGZ1bmN0aW9uIGNyZWF0ZUZvcmVpZ25PYmplY3RTVkcod2lkdGgsIGhlaWdodCwgeCwgeSwgbm9kZSkge1xuICAgIHZhciB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgJ3N2ZycpO1xuICAgIHZhciBmb3JlaWduT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnZm9yZWlnbk9iamVjdCcpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB3aWR0aCk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBoZWlnaHQpO1xuXG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCAnMTAwJScpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsICcxMDAlJyk7XG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIHgpO1xuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCB5KTtcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJywgJ3RydWUnKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQoZm9yZWlnbk9iamVjdCk7XG5cbiAgICBmb3JlaWduT2JqZWN0LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN2Zztcbn07XG5cbnZhciBsb2FkU2VyaWFsaXplZFNWRyA9IGV4cG9ydHMubG9hZFNlcmlhbGl6ZWRTVkcgPSBmdW5jdGlvbiBsb2FkU2VyaWFsaXplZFNWRyhzdmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xuICAgICAgICB9O1xuICAgICAgICBpbWcub25lcnJvciA9IHJlamVjdDtcblxuICAgICAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQobmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhzdmcpKTtcbiAgICB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBkZm1ha2VfMSA9IHJlcXVpcmUoXCJwZGZtYWtlL2J1aWxkL3BkZm1ha2VcIik7XHJcbnZhciBVU0VGVUxMX1NUWUxFID0gW1xyXG4gICAgXCJiYWNrZ3JvdW5kXCIsXHJcbiAgICBcImJhY2tncm91bmQtY2xpcFwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXHJcbiAgICBcImJhY2tncm91bmQtaW1hZ2VcIixcclxuICAgIFwidXJsXCIsXHJcbiAgICBcImxpbmVhci1ncmFkaWVudFwiLFxyXG4gICAgXCJyYWRpYWwtZ3JhZGllbnRcIixcclxuICAgIFwiYmFja2dyb3VuZC1vcmlnaW5cIixcclxuICAgIFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kLXNpemVcIixcclxuICAgIFwiYm9yZGVyXCIsXHJcbiAgICBcImJvcmRlci1jb2xvclwiLFxyXG4gICAgXCJib3JkZXItcmFkaXVzXCIsXHJcbiAgICBcImJvcmRlci1zdHlsZVwiLFxyXG4gICAgXCJib3JkZXItd2lkdGhcIixcclxuICAgIFwiYm90dG9tXCIsXHJcbiAgICBcImJveC1zaXppbmdcIixcclxuICAgIFwiY29udGVudFwiLFxyXG4gICAgXCJjb2xvclwiLFxyXG4gICAgXCJkaXNwbGF5XCIsXHJcbiAgICBcImZsZXhcIixcclxuICAgIFwiZmxvYXRcIixcclxuICAgIFwiZm9udFwiLFxyXG4gICAgXCJmb250LWZhbWlseVwiLFxyXG4gICAgXCJmb250LXNpemVcIixcclxuICAgIFwiZm9udC1zdHlsZVwiLFxyXG4gICAgXCJmb250LXZhcmlhbnRcIixcclxuICAgIFwiZm9udC13ZWlnaHRcIixcclxuICAgIFwiaGVpZ2h0XCIsXHJcbiAgICBcImxlZnRcIixcclxuICAgIFwibGV0dGVyLXNwYWNpbmdcIixcclxuICAgIFwibGluZS1icmVha1wiLFxyXG4gICAgXCJsaXN0LXN0eWxlXCIsXHJcbiAgICBcImxpc3Qtc3R5bGUtaW1hZ2VcIixcclxuICAgIFwibGlzdC1zdHlsZS1wb3NpdGlvblwiLFxyXG4gICAgXCJsaXN0LXN0eWxlLXR5cGVcIixcclxuICAgIFwibWFyZ2luXCIsXHJcbiAgICBcIm1heC1oZWlnaHRcIixcclxuICAgIFwibWF4LXdpZHRoXCIsXHJcbiAgICBcIm1pbi1oZWlnaHRcIixcclxuICAgIFwibWluLXdpZHRoXCIsXHJcbiAgICBcIm9wYWNpdHlcIixcclxuICAgIFwib3ZlcmZsb3dcIixcclxuICAgIFwib3ZlcmZsb3ctd3JhcFwiLFxyXG4gICAgXCJwYWRkaW5nXCIsXHJcbiAgICBcInBvc2l0aW9uXCIsXHJcbiAgICBcInJpZ2h0XCIsXHJcbiAgICBcInRleHQtYWxpZ25cIixcclxuICAgIFwidGV4dC1kZWNvcmF0aW9uXCIsXHJcbiAgICBcInRleHQtZGVjb3JhdGlvbi1jb2xvclwiLFxyXG4gICAgXCJ0ZXh0LWRlY29yYXRpb24tbGluZVwiLFxyXG4gICAgXCJ0ZXh0LWRlY29yYXRpb24tc3R5bGVcIixcclxuICAgIFwidGV4dC1zaGFkb3dcIixcclxuICAgIFwidGV4dC10cmFuc2Zvcm1cIixcclxuICAgIFwidG9wXCIsXHJcbiAgICBcInRyYW5zZm9ybVwiLFxyXG4gICAgXCJ2aXNpYmlsaXR5XCIsXHJcbiAgICBcIndoaXRlLXNwYWNlXCIsXHJcbiAgICBcIndpZHRoXCIsXHJcbiAgICBcIndvcmQtYnJlYWtcIixcclxuICAgIFwid29yZC1zcGFjaW5nXCIsXHJcbiAgICBcIndvcmQtd3JhcFwiLFxyXG4gICAgXCJ6LWluZGV4XCIsXHJcbiAgICBcImZpbGxcIixcclxuICAgIFwiZmlsbC1vcGFjaXR5XCIsXHJcbiAgICBcInRleHQtYW5jaG9yXCIsXHJcbiAgICBcInN0cm9rZVwiLFxyXG4gICAgXCJzdHJva2Utb3BhY2l0eVwiLFxyXG4gICAgXCJzdHJva2UtZGFzaGFycmF5XCIsXHJcbiAgICBcInNoYXBlLXJlbmRlcmluZ1wiLFxyXG4gICAgXCJzdHJva2Utd2lkdGhcIixcclxuICAgIFwic2hhcGUtcmVuZGVyaW5nXCJcclxuXTtcclxudmFyIE5PVF9OT05FID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gXCJub25lXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcbnZhciBIQUNLX0ZPUl9TVFlMRSA9IHtcclxuICAgIFwidHJhbnNmb3JtXCI6IE5PVF9OT05FLFxyXG4gICAgXCJmaWx0ZXJcIjogTk9UX05PTkVcclxufTtcclxudmFyIEFic3RyYWN0NFBERiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBYnN0cmFjdDRQREYoZG9jRGVmaW5pdGlvbikge1xyXG4gICAgICAgIHRoaXMubURvY0RlZmluaXRpb24gPSBkb2NEZWZpbml0aW9uO1xyXG4gICAgfVxyXG4gICAgQWJzdHJhY3Q0UERGLnByb3RvdHlwZS5EUEkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfTtcclxuICAgIEFic3RyYWN0NFBERi5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVN0cmluZyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBib3ggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzZWxlY3Rvcik7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gXCJcIjtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJveCwgZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gYm94LmdldFByb3BlcnR5VmFsdWUobmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChVU0VGVUxMX1NUWUxFLmluZGV4T2YobmFtZSkgIT0gLTEgJiYgKCFIQUNLX0ZPUl9TVFlMRVtuYW1lXSB8fCAoSEFDS19GT1JfU1RZTEVbbmFtZV0gJiYgSEFDS19GT1JfU1RZTEVbbmFtZV0odmFsdWUpKSkpXHJcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBuYW1lICsgXCI6XCIgKyB2YWx1ZSArIFwiO1wiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH07XHJcbiAgICBBYnN0cmFjdDRQREYucHJvdG90eXBlLmFwcGVuZENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHJlY3Vyc2l2ZSkge1xyXG4gICAgICAgIGlmIChyZWN1cnNpdmUgPT09IHZvaWQgMCkgeyByZWN1cnNpdmUgPSBmYWxzZTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rvci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5nZXRDb21wdXRlZFN0eWxlU3RyaW5nKHNlbGVjdG9yKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVjdXJzaXZlICYmIHNlbGVjdG9yLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcHBlbmRDb21wdXRlZFN0eWxlKHNlbGVjdG9yLmNoaWxkTm9kZXMsIHJlY3Vyc2l2ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHNlbGVjdG9yLCBmdW5jdGlvbiAoZWxtKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hcHBlbmRDb21wdXRlZFN0eWxlKGVsbSwgcmVjdXJzaXZlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFic3RyYWN0NFBERi5wcm90b3R5cGUuZWxtMmltZyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgbGFibGUsIHNjYWxlLCBsb2dnaW5nKSB7XHJcbiAgICAgICAgaWYgKGxhYmxlID09PSB2b2lkIDApIHsgbGFibGUgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKHNjYWxlID09PSB2b2lkIDApIHsgc2NhbGUgPSAxOyB9XHJcbiAgICAgICAgaWYgKGxvZ2dpbmcgPT09IHZvaWQgMCkgeyBsb2dnaW5nID0gZmFsc2U7IH1cclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2dnaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnZWxtMmltZzonLCBzZWxlY3Rvci50YWdOYW1lLCBzZWxlY3Rvci5pZCwgc2VsZWN0b3IuY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDb21wdXRlZFN0eWxlKHNlbGVjdG9yLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgKj0gdGhpcy5EUEkoKSAqIChwYXJzZUZsb2F0KHNlbGVjdG9yLmRhdGFzZXQucGRmX3NjYWxlKSB8fCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0LCBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlcXVpcmUoXCJodG1sMmNhbnZhc1wiKTsgfSkudGhlbihmdW5jdGlvbiAoaHRtbDJjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbDJjYW52YXMoc2VsZWN0b3IsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dnaW5nOiBsb2dnaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VDT1JTOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN0eCA9IF9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWlyID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhaXJbbGFibGVdID0gX2NhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGxhYmxlLCAxMCwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFpcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIsIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFic3RyYWN0NFBERi5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoaWRzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgaW1ncywgZG9jO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1Eb2NEZWZpbml0aW9uID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogXCJVbnRpdGxlZC5wZGZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplOiBcIkE0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLm1Eb2NEZWZpbml0aW9uLmNvbnRlbnQgfHwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnc2VjdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBPYmplY3QuYXNzaWduKHRoaXMubURvY0RlZmluaXRpb24uaW1hZ2VzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCY0FBQUFXQ0FZQUFBQXJkZ2NGQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQlNVbEVRVlE0RWUxVlBVc0RRUkI5czNkQlJDUk5RdkNqa0RRVy9oSi9nYjlBT3dXRG9JWEZnWVhZWEdQK2hZVzEvZ0lyN1d6c0U4Vkd4WkJjd3QwNGR6bkNKV3cydHd0V3V0WE1temR2bHJkN3Q0U1pWYnZpMVppaFp1Q0ZxVDlBL0I3UWQ1Rkk0NFJwUGNRcEUxb0MxSXNFcTVqUkJlR3ljMHpYYVY4bXZoYnlPUkV1cklSTVpNWmhwMFZ0aFlCOW1YQmk0anJVenRJZXYxYk5iS2c2Q014dklXd2c1R1dWRE9ITlo3bFg2bC93ckcrRnpiaC9jYTFiZjlRV0JoS3RIem5vYmd0aktGOTJaQkwzVFVXcFJiSzdMaGlWQ1k4a1kzeEsvaVRpZXhOY0V5d1NYeEtCcmZIdnJkQk4ySlJzcDRCb1EzZGJ0SExUNEsrSnF4V3c4dnI0WURhZit2UitTbVhSV3c5OWxUOU45NlZheXBJWXR3Z295V3lKUnRpWDNUK1g3VFh4Uk9jeEdlQW81Y2hseU5jQlZ4cmIySlZwVFVIc3o0SVFpL0RMNndQdWNFTnhxdm9EeDY5UFhQOE9LbjRBQUFBQVNVVk9SSzVDWUlJPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogT2JqZWN0LmFzc2lnbih0aGlzLm1Eb2NEZWZpbml0aW9uLnN0eWxlcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBbMCwgMjAsIDAsIDBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5tRG9jRGVmaW5pdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgUHJvbWlzZS5hbGwoaWRzLm1hcChmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF90aGlzLm1Eb2NEZWZpbml0aW9uLm9ucHJvZ3Jlc3N1cGRhdGUgJiYgX3RoaXMubURvY0RlZmluaXRpb24ub25wcm9ncmVzc3VwZGF0ZShcInJlc291cmNlXCIsIGlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZWxtMmltZyhpZCwgaWQsIDIsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2MgPSBPYmplY3QuYXNzaWduKHRoaXMubURvY0RlZmluaXRpb24sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogT2JqZWN0LmFzc2lnbih0aGlzLm1Eb2NEZWZpbml0aW9uLmltYWdlcywgT2JqZWN0LmFzc2lnbi5hcHBseShudWxsLCBpbWdzKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubURvY0RlZmluaXRpb24gPSBkb2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiwgdGhpc107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFic3RyYWN0NFBERi5wcm90b3R5cGUuX2NyZWF0ZVBkZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubURvY0RlZmluaXRpb24uZmlsZW5hbWUuZW5kc1dpdGgoXCIucGRmXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubURvY0RlZmluaXRpb24uZmlsZW5hbWUgKz0gXCIucGRmXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwZGZtYWtlXzEuY3JlYXRlUGRmKHRoaXMubURvY0RlZmluaXRpb24pO1xyXG4gICAgfTtcclxuICAgIEFic3RyYWN0NFBERi5wcm90b3R5cGUuZG93bmxvYWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVQZGYoKS5kb3dubG9hZCh0aGlzLm1Eb2NEZWZpbml0aW9uLmZpbGVuYW1lLCBjYik7XHJcbiAgICB9O1xyXG4gICAgQWJzdHJhY3Q0UERGLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2NyZWF0ZVBkZigpLm9wZW4oKTtcclxuICAgIH07XHJcbiAgICBBYnN0cmFjdDRQREYucGFnZVNpemUgPSB7XHJcbiAgICAgICAgd2lkdGg6IDU5NS4yOCxcclxuICAgICAgICBoZWlnaHQ6IDg0MS44OVxyXG4gICAgfTtcclxuICAgIEFic3RyYWN0NFBERi5wYWdlTWFyZ2lucyA9IDQwO1xyXG4gICAgQWJzdHJhY3Q0UERGLmNvbnRlbnRTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiBBYnN0cmFjdDRQREYucGFnZVNpemUud2lkdGggLSBBYnN0cmFjdDRQREYucGFnZU1hcmdpbnMgKiAyLFxyXG4gICAgICAgIGhlaWdodDogQWJzdHJhY3Q0UERGLnBhZ2VTaXplLmhlaWdodCAtIEFic3RyYWN0NFBERi5wYWdlTWFyZ2lucyAqIDJcclxuICAgIH07XHJcbiAgICByZXR1cm4gQWJzdHJhY3Q0UERGO1xyXG59KCkpO1xyXG52YXIgX2dsb2JhbCA9ICh3aW5kb3cpO1xyXG5fZ2xvYmFsLkFic3RyYWN0NFBERiA9IEFic3RyYWN0NFBERjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BkZm1ha2VfYnVpbGRfcGRmbWFrZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=