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
/******/ 	__webpack_require__.p = "./course_progress_files/";
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
            // if (node.tagName != 'svg' || FEATURES.SUPPORT_SVG_DRAWING) {
            //     return this.loadImage(`data:image/svg+xml,${encodeURIComponent(data)}`);
            // }

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
            if (!(canvg instanceof Function))
                canvg = canvg.default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvY3NzLWxpbmUtYnJlYWsvZGlzdC9MaW5lQnJlYWsuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2Nzcy1saW5lLWJyZWFrL2Rpc3QvVHJpZS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvY3NzLWxpbmUtYnJlYWsvZGlzdC9VdGlsLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9jc3MtbGluZS1icmVhay9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9jc3MtbGluZS1icmVhay9kaXN0L2xpbmVicmVhay10cmllLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9BbmdsZS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vQm91bmRzLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9DbG9uZS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vQ29sb3IuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0ZvbnQuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL0dyYWRpZW50LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9JbnB1dC5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTGVuZ3RoLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vTG9nZ2VyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Ob2RlQ29udGFpbmVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Ob2RlUGFyc2VyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Qcm94eS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vUHNldWRvTm9kZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL1JlbmRlcmVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9SZXNvdXJjZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vU3RhY2tpbmdDb250ZXh0LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9UZXh0Qm91bmRzLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9UZXh0Q29udGFpbmVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9Vbmljb2RlLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9VdGlsLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2RyYXdpbmcvQmV6aWVyQ3VydmUuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2RyYXdpbmcvQ2lyY2xlLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9kcmF3aW5nL1BhdGguanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2RyYXdpbmcvU2l6ZS5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vZHJhd2luZy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL2luZGV4LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvYm9yZGVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2JvcmRlclJhZGl1cy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9kaXNwbGF5LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2Zsb2F0LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL2ZvbnQuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvbGV0dGVyU3BhY2luZy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9saW5lQnJlYWsuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvbGlzdFN0eWxlLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL21hcmdpbi5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9vdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9vdmVyZmxvd1dyYXAuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvcGFkZGluZy5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy90ZXh0RGVjb3JhdGlvbi5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy90ZXh0U2hhZG93LmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3RleHRUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvdHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9wYXJzaW5nL3Zpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3BhcnNpbmcvd29yZC1icmVhay5qcyIsIndlYnBhY2s6Ly9hYnN0cmFjdDRwZGYvLi9ub2RlX21vZHVsZXMvaHRtbDJjYW52YXMvZGlzdC9ucG0vcGFyc2luZy96SW5kZXguanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vbm9kZV9tb2R1bGVzL2h0bWwyY2FudmFzL2Rpc3QvbnBtL3JlbmRlcmVyL0NhbnZhc1JlbmRlcmVyLmpzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi8uL25vZGVfbW9kdWxlcy9odG1sMmNhbnZhcy9kaXN0L25wbS9yZW5kZXJlci9Gb3JlaWduT2JqZWN0UmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vYWJzdHJhY3Q0cGRmLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2Fic3RyYWN0NHBkZi9leHRlcm5hbCBcInBkZk1ha2VcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsaURBQXlDLGdDQUFnQztBQUN6RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EseUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBd0Isa0NBQWtDO0FBQzFELGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFD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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRTs7Ozs7Ozs7Ozs7O0FDdFBBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLGVBQWU7QUFDaEY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFLGVBQWU7QUFDL0U7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRSxlQUFlO0FBQ3pGO0FBQ0EsS0FBSztB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsRTs7Ozs7Ozs7Ozs7O0FDOWJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDekhBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsZ0NBQWdDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFampCOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDOUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsdUJBQXVCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkI7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDaFdBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxFOzs7Ozs7Ozs7Ozs7QUNoREE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxrQ0FBa0MsaUNBQWlDLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLHlDQUF5QyxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLDBCQUEwQixZQUFZLEVBQUUsMkNBQTJDLDhCQUE4QixFQUFFLE9BQU8sNkVBQTZFLEVBQUUsR0FBRyxFQUFFOztBQUVycEI7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxFOzs7Ozs7Ozs7Ozs7QUM1QkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM3R0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7O0FDblFBLG1FIiwiZmlsZSI6ImFic3RyYWN0NHBkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInBkZk1ha2VcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicGRmTWFrZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhYnN0cmFjdDRwZGZcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJwZGZNYWtlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhYnN0cmFjdDRwZGZcIl0gPSBmYWN0b3J5KHJvb3RbXCJwZGZNYWtlXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wZGZtYWtlX2J1aWxkX3BkZm1ha2VfXykge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJ2ZW5kb3JzfmNhbnZnXCI6XCJ2ZW5kb3JzfmNhbnZnXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblxuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9jb3Vyc2VfcHJvZ3Jlc3NfZmlsZXMvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucGFic3RyYWN0NHBkZlwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucGFic3RyYWN0NHBkZlwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxpbmVCcmVha2VyID0gZXhwb3J0cy5pbmxpbmVCcmVha09wcG9ydHVuaXRpZXMgPSBleHBvcnRzLmxpbmVCcmVha0F0SW5kZXggPSBleHBvcnRzLmNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMgPSBleHBvcnRzLlVuaWNvZGVUcmllID0gZXhwb3J0cy5CUkVBS19BTExPV0VEID0gZXhwb3J0cy5CUkVBS19OT1RfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfTUFOREFUT1JZID0gZXhwb3J0cy5jbGFzc2VzID0gZXhwb3J0cy5MRVRURVJfTlVNQkVSX01PRElGSUVSID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XG5cbnZhciBfVHJpZSA9IHJlcXVpcmUoJy4vVHJpZScpO1xuXG52YXIgX2xpbmVicmVha1RyaWUgPSByZXF1aXJlKCcuL2xpbmVicmVhay10cmllJyk7XG5cbnZhciBfbGluZWJyZWFrVHJpZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYnJlYWtUcmllKTtcblxudmFyIF9VdGlsID0gcmVxdWlyZSgnLi9VdGlsJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgTEVUVEVSX05VTUJFUl9NT0RJRklFUiA9IGV4cG9ydHMuTEVUVEVSX05VTUJFUl9NT0RJRklFUiA9IDUwO1xuXG4vLyBOb24tdGFpbG9yYWJsZSBMaW5lIEJyZWFraW5nIENsYXNzZXNcbnZhciBCSyA9IDE7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKVxudmFyIENSID0gMjsgLy8gIENhdXNlIGEgbGluZSBicmVhayAoYWZ0ZXIpLCBleGNlcHQgYmV0d2VlbiBDUiBhbmQgTEZcbnZhciBMRiA9IDM7IC8vICBDYXVzZSBhIGxpbmUgYnJlYWsgKGFmdGVyKVxudmFyIENNID0gNDsgLy8gIFByb2hpYml0IGEgbGluZSBicmVhayBiZXR3ZWVuIHRoZSBjaGFyYWN0ZXIgYW5kIHRoZSBwcmVjZWRpbmcgY2hhcmFjdGVyXG52YXIgTkwgPSA1OyAvLyAgQ2F1c2UgYSBsaW5lIGJyZWFrIChhZnRlcilcbnZhciBTRyA9IDY7IC8vICBEbyBub3Qgb2NjdXIgaW4gd2VsbC1mb3JtZWQgdGV4dFxudmFyIFdKID0gNzsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZSBhbmQgYWZ0ZXJcbnZhciBaVyA9IDg7IC8vICBQcm92aWRlIGEgYnJlYWsgb3Bwb3J0dW5pdHlcbnZhciBHTCA9IDk7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmUgYW5kIGFmdGVyXG52YXIgU1AgPSAxMDsgLy8gRW5hYmxlIGluZGlyZWN0IGxpbmUgYnJlYWtzXG52YXIgWldKID0gMTE7IC8vIFByb2hpYml0IGxpbmUgYnJlYWtzIHdpdGhpbiBqb2luZXIgc2VxdWVuY2VzXG4vLyBCcmVhayBPcHBvcnR1bml0aWVzXG52YXIgQjIgPSAxMjsgLy8gIFByb3ZpZGUgYSBsaW5lIGJyZWFrIG9wcG9ydHVuaXR5IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGNoYXJhY3RlclxudmFyIEJBID0gMTM7IC8vICBHZW5lcmFsbHkgcHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYWZ0ZXIgdGhlIGNoYXJhY3RlclxudmFyIEJCID0gMTQ7IC8vICBHZW5lcmFsbHkgcHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYmVmb3JlIHRoZSBjaGFyYWN0ZXJcbnZhciBIWSA9IDE1OyAvLyAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgYWZ0ZXIgdGhlIGNoYXJhY3RlciwgZXhjZXB0IGluIG51bWVyaWMgY29udGV4dFxudmFyIENCID0gMTY7IC8vICAgUHJvdmlkZSBhIGxpbmUgYnJlYWsgb3Bwb3J0dW5pdHkgY29udGluZ2VudCBvbiBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4vLyBDaGFyYWN0ZXJzIFByb2hpYml0aW5nIENlcnRhaW4gQnJlYWtzXG52YXIgQ0wgPSAxNzsgLy8gIFByb2hpYml0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIENQID0gMTg7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBiZWZvcmVcbnZhciBFWCA9IDE5OyAvLyAgUHJvaGliaXQgbGluZSBicmVha3MgYmVmb3JlXG52YXIgSU4gPSAyMDsgLy8gIEFsbG93IG9ubHkgaW5kaXJlY3QgbGluZSBicmVha3MgYmV0d2VlbiBwYWlyc1xudmFyIE5TID0gMjE7IC8vICBBbGxvdyBvbmx5IGluZGlyZWN0IGxpbmUgYnJlYWtzIGJlZm9yZVxudmFyIE9QID0gMjI7IC8vICBQcm9oaWJpdCBsaW5lIGJyZWFrcyBhZnRlclxudmFyIFFVID0gMjM7IC8vICBBY3QgbGlrZSB0aGV5IGFyZSBib3RoIG9wZW5pbmcgYW5kIGNsb3Npbmdcbi8vIE51bWVyaWMgQ29udGV4dFxudmFyIElTID0gMjQ7IC8vICBQcmV2ZW50IGJyZWFrcyBhZnRlciBhbnkgYW5kIGJlZm9yZSBudW1lcmljXG52YXIgTlUgPSAyNTsgLy8gIEZvcm0gbnVtZXJpYyBleHByZXNzaW9ucyBmb3IgbGluZSBicmVha2luZyBwdXJwb3Nlc1xudmFyIFBPID0gMjY7IC8vICBEbyBub3QgYnJlYWsgZm9sbG93aW5nIGEgbnVtZXJpYyBleHByZXNzaW9uXG52YXIgUFIgPSAyNzsgLy8gIERvIG5vdCBicmVhayBpbiBmcm9udCBvZiBhIG51bWVyaWMgZXhwcmVzc2lvblxudmFyIFNZID0gMjg7IC8vICBQcmV2ZW50IGEgYnJlYWsgYmVmb3JlOyBhbmQgYWxsb3cgYSBicmVhayBhZnRlclxuLy8gT3RoZXIgQ2hhcmFjdGVyc1xudmFyIEFJID0gMjk7IC8vICBBY3QgbGlrZSBBTCB3aGVuIHRoZSByZXNvbHZlZEVBVyBpcyBOOyBvdGhlcndpc2U7IGFjdCBhcyBJRFxudmFyIEFMID0gMzA7IC8vICBBcmUgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIG9yIHN5bWJvbHMgdGhhdCBhcmUgdXNlZCB3aXRoIGFscGhhYmV0aWMgY2hhcmFjdGVyc1xudmFyIENKID0gMzE7IC8vICBUcmVhdCBhcyBOUyBvciBJRCBmb3Igc3RyaWN0IG9yIG5vcm1hbCBicmVha2luZy5cbnZhciBFQiA9IDMyOyAvLyAgRG8gbm90IGJyZWFrIGZyb20gZm9sbG93aW5nIEVtb2ppIE1vZGlmaWVyXG52YXIgRU0gPSAzMzsgLy8gIERvIG5vdCBicmVhayBmcm9tIHByZWNlZGluZyBFbW9qaSBCYXNlXG52YXIgSDIgPSAzNDsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIEgzID0gMzU7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBITCA9IDM2OyAvLyAgRG8gbm90IGJyZWFrIGFyb3VuZCBhIGZvbGxvd2luZyBoeXBoZW47IG90aGVyd2lzZSBhY3QgYXMgQWxwaGFiZXRpY1xudmFyIElEID0gMzc7IC8vICBCcmVhayBiZWZvcmUgb3IgYWZ0ZXI7IGV4Y2VwdCBpbiBzb21lIG51bWVyaWMgY29udGV4dFxudmFyIEpMID0gMzg7IC8vICBGb3JtIEtvcmVhbiBzeWxsYWJsZSBibG9ja3NcbnZhciBKViA9IDM5OyAvLyAgRm9ybSBLb3JlYW4gc3lsbGFibGUgYmxvY2tzXG52YXIgSlQgPSA0MDsgLy8gIEZvcm0gS29yZWFuIHN5bGxhYmxlIGJsb2Nrc1xudmFyIFJJID0gNDE7IC8vICBLZWVwIHBhaXJzIHRvZ2V0aGVyLiBGb3IgcGFpcnM7IGJyZWFrIGJlZm9yZSBhbmQgYWZ0ZXIgb3RoZXIgY2xhc3Nlc1xudmFyIFNBID0gNDI7IC8vICBQcm92aWRlIGEgbGluZSBicmVhayBvcHBvcnR1bml0eSBjb250aW5nZW50IG9uIGFkZGl0aW9uYWwsIGxhbmd1YWdlLXNwZWNpZmljIGNvbnRleHQgYW5hbHlzaXNcbnZhciBYWCA9IDQzOyAvLyAgSGF2ZSBhcyB5ZXQgdW5rbm93biBsaW5lIGJyZWFraW5nIGJlaGF2aW9yIG9yIHVuYXNzaWduZWQgY29kZSBwb3NpdGlvbnNcblxudmFyIGNsYXNzZXMgPSBleHBvcnRzLmNsYXNzZXMgPSB7XG4gICAgQks6IEJLLFxuICAgIENSOiBDUixcbiAgICBMRjogTEYsXG4gICAgQ006IENNLFxuICAgIE5MOiBOTCxcbiAgICBTRzogU0csXG4gICAgV0o6IFdKLFxuICAgIFpXOiBaVyxcbiAgICBHTDogR0wsXG4gICAgU1A6IFNQLFxuICAgIFpXSjogWldKLFxuICAgIEIyOiBCMixcbiAgICBCQTogQkEsXG4gICAgQkI6IEJCLFxuICAgIEhZOiBIWSxcbiAgICBDQjogQ0IsXG4gICAgQ0w6IENMLFxuICAgIENQOiBDUCxcbiAgICBFWDogRVgsXG4gICAgSU46IElOLFxuICAgIE5TOiBOUyxcbiAgICBPUDogT1AsXG4gICAgUVU6IFFVLFxuICAgIElTOiBJUyxcbiAgICBOVTogTlUsXG4gICAgUE86IFBPLFxuICAgIFBSOiBQUixcbiAgICBTWTogU1ksXG4gICAgQUk6IEFJLFxuICAgIEFMOiBBTCxcbiAgICBDSjogQ0osXG4gICAgRUI6IEVCLFxuICAgIEVNOiBFTSxcbiAgICBIMjogSDIsXG4gICAgSDM6IEgzLFxuICAgIEhMOiBITCxcbiAgICBJRDogSUQsXG4gICAgSkw6IEpMLFxuICAgIEpWOiBKVixcbiAgICBKVDogSlQsXG4gICAgUkk6IFJJLFxuICAgIFNBOiBTQSxcbiAgICBYWDogWFhcbn07XG5cbnZhciBCUkVBS19NQU5EQVRPUlkgPSBleHBvcnRzLkJSRUFLX01BTkRBVE9SWSA9ICchJztcbnZhciBCUkVBS19OT1RfQUxMT1dFRCA9IGV4cG9ydHMuQlJFQUtfTk9UX0FMTE9XRUQgPSAnw5cnO1xudmFyIEJSRUFLX0FMTE9XRUQgPSBleHBvcnRzLkJSRUFLX0FMTE9XRUQgPSAnw7cnO1xudmFyIFVuaWNvZGVUcmllID0gZXhwb3J0cy5Vbmljb2RlVHJpZSA9ICgwLCBfVHJpZS5jcmVhdGVUcmllRnJvbUJhc2U2NCkoX2xpbmVicmVha1RyaWUyLmRlZmF1bHQpO1xuXG52YXIgQUxQSEFCRVRJQ1MgPSBbQUwsIEhMXTtcbnZhciBIQVJEX0xJTkVfQlJFQUtTID0gW0JLLCBDUiwgTEYsIE5MXTtcbnZhciBTUEFDRSA9IFtTUCwgWlddO1xudmFyIFBSRUZJWF9QT1NURklYID0gW1BSLCBQT107XG52YXIgTElORV9CUkVBS1MgPSBIQVJEX0xJTkVfQlJFQUtTLmNvbmNhdChTUEFDRSk7XG52YXIgS09SRUFOX1NZTExBQkxFX0JMT0NLID0gW0pMLCBKViwgSlQsIEgyLCBIM107XG52YXIgSFlQSEVOID0gW0hZLCBCQV07XG5cbnZhciBjb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzID0gZXhwb3J0cy5jb2RlUG9pbnRzVG9DaGFyYWN0ZXJDbGFzc2VzID0gZnVuY3Rpb24gY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3Nlcyhjb2RlUG9pbnRzKSB7XG4gICAgdmFyIGxpbmVCcmVhayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ3N0cmljdCc7XG5cbiAgICB2YXIgdHlwZXMgPSBbXTtcbiAgICB2YXIgaW5kaWNpZXMgPSBbXTtcbiAgICB2YXIgY2F0ZWdvcmllcyA9IFtdO1xuICAgIGNvZGVQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoY29kZVBvaW50LCBpbmRleCkge1xuICAgICAgICB2YXIgY2xhc3NUeXBlID0gVW5pY29kZVRyaWUuZ2V0KGNvZGVQb2ludCk7XG4gICAgICAgIGlmIChjbGFzc1R5cGUgPiBMRVRURVJfTlVNQkVSX01PRElGSUVSKSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICBjbGFzc1R5cGUgLT0gTEVUVEVSX05VTUJFUl9NT0RJRklFUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoWydub3JtYWwnLCAnYXV0bycsICdsb29zZSddLmluZGV4T2YobGluZUJyZWFrKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIFUrMjAxMCwg4oCTIFUrMjAxMywg44CcIFUrMzAxQywg44KgIFUrMzBBMFxuICAgICAgICAgICAgaWYgKFsweDIwMTAsIDB4MjAxMywgMHgzMDFjLCAweDMwYTBdLmluZGV4T2YoY29kZVBvaW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChDQik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBDTSB8fCBjbGFzc1R5cGUgPT09IFpXSikge1xuICAgICAgICAgICAgLy8gTEIxMCBUcmVhdCBhbnkgcmVtYWluaW5nIGNvbWJpbmluZyBtYXJrIG9yIFpXSiBhcyBBTC5cbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTEI5IERvIG5vdCBicmVhayBhIGNvbWJpbmluZyBjaGFyYWN0ZXIgc2VxdWVuY2U7IHRyZWF0IGl0IGFzIGlmIGl0IGhhcyB0aGUgbGluZSBicmVha2luZyBjbGFzcyBvZlxuICAgICAgICAgICAgLy8gdGhlIGJhc2UgY2hhcmFjdGVyIGluIGFsbCBvZiB0aGUgZm9sbG93aW5nIHJ1bGVzLiBUcmVhdCBaV0ogYXMgaWYgaXQgd2VyZSBDTS5cbiAgICAgICAgICAgIHZhciBwcmV2ID0gdHlwZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIGlmIChMSU5FX0JSRUFLUy5pbmRleE9mKHByZXYpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGluZGljaWVzLnB1c2goaW5kaWNpZXNbaW5kZXggLSAxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2gocHJldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbmRpY2llcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGljaWVzLnB1c2goaW5kZXgpO1xuXG4gICAgICAgIGlmIChjbGFzc1R5cGUgPT09IENKKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZXMucHVzaChsaW5lQnJlYWsgPT09ICdzdHJpY3QnID8gTlMgOiBJRCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NUeXBlID09PSBTQSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gQUkpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKEFMKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBzdXBwbGVtZW50YXJ5IGNoYXJhY3RlcnMsIGEgdXNlZnVsIGRlZmF1bHQgaXMgdG8gdHJlYXQgY2hhcmFjdGVycyBpbiB0aGUgcmFuZ2UgMTAwMDAuLjFGRkZEIGFzIEFMXG4gICAgICAgIC8vIGFuZCBjaGFyYWN0ZXJzIGluIHRoZSByYW5nZXMgMjAwMDAuLjJGRkZEIGFuZCAzMDAwMC4uM0ZGRkQgYXMgSUQsIHVudGlsIHRoZSBpbXBsZW1lbnRhdGlvbiBjYW4gYmUgcmV2aXNlZFxuICAgICAgICAvLyB0byB0YWtlIGludG8gYWNjb3VudCB0aGUgYWN0dWFsIGxpbmUgYnJlYWtpbmcgcHJvcGVydGllcyBmb3IgdGhlc2UgY2hhcmFjdGVycy5cbiAgICAgICAgaWYgKGNsYXNzVHlwZSA9PT0gWFgpIHtcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPj0gMHgyMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgyZmZmZCB8fCBjb2RlUG9pbnQgPj0gMHgzMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgzZmZmZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlcy5wdXNoKElEKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVzLnB1c2goQUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMucHVzaChjbGFzc1R5cGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtpbmRpY2llcywgdHlwZXMsIGNhdGVnb3JpZXNdO1xufTtcblxudmFyIGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkID0gZnVuY3Rpb24gaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoYSwgYiwgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBjbGFzc1R5cGVzW2N1cnJlbnRJbmRleF07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkgPyBhLmluZGV4T2YoY3VycmVudCkgIT09IC0xIDogYSA9PT0gY3VycmVudCkge1xuICAgICAgICB2YXIgaSA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgd2hpbGUgKGkgPD0gY2xhc3NUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIHZhciBuZXh0ID0gY2xhc3NUeXBlc1tpXTtcblxuICAgICAgICAgICAgaWYgKG5leHQgPT09IGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHQgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudCA9PT0gU1ApIHtcbiAgICAgICAgdmFyIF9pID0gY3VycmVudEluZGV4O1xuXG4gICAgICAgIHdoaWxlIChfaSA+IDApIHtcbiAgICAgICAgICAgIF9pLS07XG4gICAgICAgICAgICB2YXIgcHJldiA9IGNsYXNzVHlwZXNbX2ldO1xuXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSA/IGEuaW5kZXhPZihwcmV2KSAhPT0gLTEgOiBhID09PSBwcmV2KSB7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPD0gY2xhc3NUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX25leHQgPSBjbGFzc1R5cGVzW25dO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfbmV4dCA9PT0gYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoX25leHQgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZXYgIT09IFNQKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUgPSBmdW5jdGlvbiBwcmV2aW91c05vblNwYWNlQ2xhc3NUeXBlKGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykge1xuICAgIHZhciBpID0gY3VycmVudEluZGV4O1xuICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgdmFyIHR5cGUgPSBjbGFzc1R5cGVzW2ldO1xuICAgICAgICBpZiAodHlwZSA9PT0gU1ApIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxudmFyIF9saW5lQnJlYWtBdEluZGV4ID0gZnVuY3Rpb24gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsIGluZGV4LCBmb3JiaWRkZW5CcmVha3MpIHtcbiAgICBpZiAoaW5kaWNpZXNbaW5kZXhdID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZvcmJpZGRlbkJyZWFrcykgJiYgZm9yYmlkZGVuQnJlYWtzW2N1cnJlbnRJbmRleF0gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIHZhciBiZWZvcmVJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgdmFyIGFmdGVySW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIHZhciBjdXJyZW50ID0gY2xhc3NUeXBlc1tjdXJyZW50SW5kZXhdO1xuXG4gICAgLy8gTEI0IEFsd2F5cyBicmVhayBhZnRlciBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIC8vIExCNSBUcmVhdCBDUiBmb2xsb3dlZCBieSBMRiwgYXMgd2VsbCBhcyBDUiwgTEYsIGFuZCBOTCBhcyBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIHZhciBiZWZvcmUgPSBiZWZvcmVJbmRleCA+PSAwID8gY2xhc3NUeXBlc1tiZWZvcmVJbmRleF0gOiAwO1xuICAgIHZhciBuZXh0ID0gY2xhc3NUeXBlc1thZnRlckluZGV4XTtcblxuICAgIGlmIChjdXJyZW50ID09PSBDUiAmJiBuZXh0ID09PSBMRikge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgaWYgKEhBUkRfTElORV9CUkVBS1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX01BTkRBVE9SWTtcbiAgICB9XG5cbiAgICAvLyBMQjYgRG8gbm90IGJyZWFrIGJlZm9yZSBoYXJkIGxpbmUgYnJlYWtzLlxuICAgIGlmIChIQVJEX0xJTkVfQlJFQUtTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjcgRG8gbm90IGJyZWFrIGJlZm9yZSBzcGFjZXMgb3IgemVybyB3aWR0aCBzcGFjZS5cbiAgICBpZiAoU1BBQ0UuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCOCBCcmVhayBiZWZvcmUgYW55IGNoYXJhY3RlciBmb2xsb3dpbmcgYSB6ZXJvLXdpZHRoIHNwYWNlLCBldmVuIGlmIG9uZSBvciBtb3JlIHNwYWNlcyBpbnRlcnZlbmUuXG4gICAgaWYgKHByZXZpb3VzTm9uU3BhY2VDbGFzc1R5cGUoY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSA9PT0gWlcpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEI4YSBEbyBub3QgYnJlYWsgYmV0d2VlbiBhIHplcm8gd2lkdGggam9pbmVyIGFuZCBhbiBpZGVvZ3JhcGgsIGVtb2ppIGJhc2Ugb3IgZW1vamkgbW9kaWZpZXIuXG4gICAgaWYgKFVuaWNvZGVUcmllLmdldChjb2RlUG9pbnRzW2N1cnJlbnRJbmRleF0pID09PSBaV0ogJiYgKG5leHQgPT09IElEIHx8IG5leHQgPT09IEVCIHx8IG5leHQgPT09IEVNKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxMSBEbyBub3QgYnJlYWsgYmVmb3JlIG9yIGFmdGVyIFdvcmQgam9pbmVyIGFuZCByZWxhdGVkIGNoYXJhY3RlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFdKIHx8IG5leHQgPT09IFdKKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEyIERvIG5vdCBicmVhayBhZnRlciBOQlNQIGFuZCByZWxhdGVkIGNoYXJhY3RlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IEdMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEyYSBEbyBub3QgYnJlYWsgYmVmb3JlIE5CU1AgYW5kIHJlbGF0ZWQgY2hhcmFjdGVycywgZXhjZXB0IGFmdGVyIHNwYWNlcyBhbmQgaHlwaGVucy5cbiAgICBpZiAoW1NQLCBCQSwgSFldLmluZGV4T2YoY3VycmVudCkgPT09IC0xICYmIG5leHQgPT09IEdMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjEzIERvIG5vdCBicmVhayBiZWZvcmUg4oCYXeKAmSBvciDigJgh4oCZIG9yIOKAmDvigJkgb3Ig4oCYL+KAmSwgZXZlbiBhZnRlciBzcGFjZXMuXG4gICAgaWYgKFtDTCwgQ1AsIEVYLCBJUywgU1ldLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE0IERvIG5vdCBicmVhayBhZnRlciDigJhb4oCZLCBldmVuIGFmdGVyIHNwYWNlcy5cbiAgICBpZiAocHJldmlvdXNOb25TcGFjZUNsYXNzVHlwZShjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpID09PSBPUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNSBEbyBub3QgYnJlYWsgd2l0aGluIOKAmOKAnVvigJksIGV2ZW4gd2l0aCBpbnRlcnZlbmluZyBzcGFjZXMuXG4gICAgaWYgKGlzQWRqYWNlbnRXaXRoU3BhY2VJZ25vcmVkKFFVLCBPUCwgY3VycmVudEluZGV4LCBjbGFzc1R5cGVzKSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIxNiBEbyBub3QgYnJlYWsgYmV0d2VlbiBjbG9zaW5nIHB1bmN0dWF0aW9uIGFuZCBhIG5vbnN0YXJ0ZXIgKGxiPU5TKSwgZXZlbiB3aXRoIGludGVydmVuaW5nIHNwYWNlcy5cbiAgICBpZiAoaXNBZGphY2VudFdpdGhTcGFjZUlnbm9yZWQoW0NMLCBDUF0sIE5TLCBjdXJyZW50SW5kZXgsIGNsYXNzVHlwZXMpKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE3IERvIG5vdCBicmVhayB3aXRoaW4g4oCY4oCU4oCU4oCZLCBldmVuIHdpdGggaW50ZXJ2ZW5pbmcgc3BhY2VzLlxuICAgIGlmIChpc0FkamFjZW50V2l0aFNwYWNlSWdub3JlZChCMiwgQjIsIGN1cnJlbnRJbmRleCwgY2xhc3NUeXBlcykpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMTggQnJlYWsgYWZ0ZXIgc3BhY2VzLlxuICAgIGlmIChjdXJyZW50ID09PSBTUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjE5IERvIG5vdCBicmVhayBiZWZvcmUgb3IgYWZ0ZXIgcXVvdGF0aW9uIG1hcmtzLCBzdWNoIGFzIOKAmCDigJ0g4oCZLlxuICAgIGlmIChjdXJyZW50ID09PSBRVSB8fCBuZXh0ID09PSBRVSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMCBCcmVhayBiZWZvcmUgYW5kIGFmdGVyIHVucmVzb2x2ZWQgQ0IuXG4gICAgaWYgKG5leHQgPT09IENCIHx8IGN1cnJlbnQgPT09IENCKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjEgRG8gbm90IGJyZWFrIGJlZm9yZSBoeXBoZW4tbWludXMsIG90aGVyIGh5cGhlbnMsIGZpeGVkLXdpZHRoIHNwYWNlcywgc21hbGwga2FuYSwgYW5kIG90aGVyIG5vbi1zdGFydGVycywgb3IgYWZ0ZXIgYWN1dGUgYWNjZW50cy5cbiAgICBpZiAoW0JBLCBIWSwgTlNdLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IGN1cnJlbnQgPT09IEJCKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIxYSBEb24ndCBicmVhayBhZnRlciBIZWJyZXcgKyBIeXBoZW4uXG4gICAgaWYgKGJlZm9yZSA9PT0gSEwgJiYgSFlQSEVOLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIxYiBEb27igJl0IGJyZWFrIGJldHdlZW4gU29saWR1cyBhbmQgSGVicmV3IGxldHRlcnMuXG4gICAgaWYgKGN1cnJlbnQgPT09IFNZICYmIG5leHQgPT09IEhMKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIyIERvIG5vdCBicmVhayBiZXR3ZWVuIHR3byBlbGxpcHNlcywgb3IgYmV0d2VlbiBsZXR0ZXJzLCBudW1iZXJzIG9yIGV4Y2xhbWF0aW9ucyBhbmQgZWxsaXBzaXMuXG4gICAgaWYgKG5leHQgPT09IElOICYmIEFMUEhBQkVUSUNTLmNvbmNhdChJTiwgRVgsIE5VLCBJRCwgRUIsIEVNKS5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIyMyBEbyBub3QgYnJlYWsgYmV0d2VlbiBkaWdpdHMgYW5kIGxldHRlcnMuXG4gICAgaWYgKEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGN1cnJlbnQgPT09IE5VIHx8IEFMUEhBQkVUSUNTLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IE5VKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjIzYSBEbyBub3QgYnJlYWsgYmV0d2VlbiBudW1lcmljIHByZWZpeGVzIGFuZCBpZGVvZ3JhcGhzLCBvciBiZXR3ZWVuIGlkZW9ncmFwaHMgYW5kIG51bWVyaWMgcG9zdGZpeGVzLlxuICAgIGlmIChjdXJyZW50ID09PSBQUiAmJiBbSUQsIEVCLCBFTV0uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0lELCBFQiwgRU1dLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IFBPKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI0IERvIG5vdCBicmVhayBiZXR3ZWVuIG51bWVyaWMgcHJlZml4L3Bvc3RmaXggYW5kIGxldHRlcnMsIG9yIGJldHdlZW4gbGV0dGVycyBhbmQgcHJlZml4L3Bvc3RmaXguXG4gICAgaWYgKEFMUEhBQkVUSUNTLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIFBSRUZJWF9QT1NURklYLmluZGV4T2YobmV4dCkgIT09IC0xIHx8IFBSRUZJWF9QT1NURklYLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIEFMUEhBQkVUSUNTLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjI1IERvIG5vdCBicmVhayBiZXR3ZWVuIHRoZSBmb2xsb3dpbmcgcGFpcnMgb2YgY2xhc3NlcyByZWxldmFudCB0byBudW1iZXJzOlxuICAgIGlmIChcbiAgICAvLyAoUFIgfCBQTykgw5cgKCBPUCB8IEhZICk/IE5VXG4gICAgW1BSLCBQT10uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgKG5leHQgPT09IE5VIHx8IFtPUCwgSFldLmluZGV4T2YobmV4dCkgIT09IC0xICYmIGNsYXNzVHlwZXNbYWZ0ZXJJbmRleCArIDFdID09PSBOVSkgfHxcbiAgICAvLyAoIE9QIHwgSFkgKSDDlyBOVVxuICAgIFtPUCwgSFldLmluZGV4T2YoY3VycmVudCkgIT09IC0xICYmIG5leHQgPT09IE5VIHx8XG4gICAgLy8gTlUgw5dcdChOVSB8IFNZIHwgSVMpXG4gICAgY3VycmVudCA9PT0gTlUgJiYgW05VLCBTWSwgSVNdLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBOVSAoTlUgfCBTWSB8IElTKSogw5cgKE5VIHwgU1kgfCBJUyB8IENMIHwgQ1ApXG4gICAgaWYgKFtOVSwgU1ksIElTLCBDTCwgQ1BdLmluZGV4T2YobmV4dCkgIT09IC0xKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXg7XG4gICAgICAgIHdoaWxlIChwcmV2SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBjbGFzc1R5cGVzW3ByZXZJbmRleF07XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gTlUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFtTWSwgSVNdLmluZGV4T2YodHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJldkluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTlUgKE5VIHwgU1kgfCBJUykqIChDTCB8IENQKT8gw5cgKFBPIHwgUFIpKVxuICAgIGlmIChbUFIsIFBPXS5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICB2YXIgX3ByZXZJbmRleCA9IFtDTCwgQ1BdLmluZGV4T2YoY3VycmVudCkgIT09IC0xID8gYmVmb3JlSW5kZXggOiBjdXJyZW50SW5kZXg7XG4gICAgICAgIHdoaWxlIChfcHJldkluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciBfdHlwZSA9IGNsYXNzVHlwZXNbX3ByZXZJbmRleF07XG4gICAgICAgICAgICBpZiAoX3R5cGUgPT09IE5VKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChbU1ksIElTXS5pbmRleE9mKF90eXBlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBfcHJldkluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTEIyNiBEbyBub3QgYnJlYWsgYSBLb3JlYW4gc3lsbGFibGUuXG4gICAgaWYgKEpMID09PSBjdXJyZW50ICYmIFtKTCwgSlYsIEgyLCBIM10uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0pWLCBIMl0uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgW0pWLCBKVF0uaW5kZXhPZihuZXh0KSAhPT0gLTEgfHwgW0pULCBIM10uaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gSlQpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjcgVHJlYXQgYSBLb3JlYW4gU3lsbGFibGUgQmxvY2sgdGhlIHNhbWUgYXMgSUQuXG4gICAgaWYgKEtPUkVBTl9TWUxMQUJMRV9CTE9DSy5pbmRleE9mKGN1cnJlbnQpICE9PSAtMSAmJiBbSU4sIFBPXS5pbmRleE9mKG5leHQpICE9PSAtMSB8fCBLT1JFQU5fU1lMTEFCTEVfQkxPQ0suaW5kZXhPZihuZXh0KSAhPT0gLTEgJiYgY3VycmVudCA9PT0gUFIpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjggRG8gbm90IGJyZWFrIGJldHdlZW4gYWxwaGFiZXRpY3MgKOKAnGF04oCdKS5cbiAgICBpZiAoQUxQSEFCRVRJQ1MuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgQUxQSEFCRVRJQ1MuaW5kZXhPZihuZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX05PVF9BTExPV0VEO1xuICAgIH1cblxuICAgIC8vIExCMjkgRG8gbm90IGJyZWFrIGJldHdlZW4gbnVtZXJpYyBwdW5jdHVhdGlvbiBhbmQgYWxwaGFiZXRpY3MgKOKAnGUuZy7igJ0pLlxuICAgIGlmIChjdXJyZW50ID09PSBJUyAmJiBBTFBIQUJFVElDUy5pbmRleE9mKG5leHQpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIzMCBEbyBub3QgYnJlYWsgYmV0d2VlbiBsZXR0ZXJzLCBudW1iZXJzLCBvciBvcmRpbmFyeSBzeW1ib2xzIGFuZCBvcGVuaW5nIG9yIGNsb3NpbmcgcGFyZW50aGVzZXMuXG4gICAgaWYgKEFMUEhBQkVUSUNTLmNvbmNhdChOVSkuaW5kZXhPZihjdXJyZW50KSAhPT0gLTEgJiYgbmV4dCA9PT0gT1AgfHwgQUxQSEFCRVRJQ1MuY29uY2F0KE5VKS5pbmRleE9mKG5leHQpICE9PSAtMSAmJiBjdXJyZW50ID09PSBDUCkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLy8gTEIzMGEgQnJlYWsgYmV0d2VlbiB0d28gcmVnaW9uYWwgaW5kaWNhdG9yIHN5bWJvbHMgaWYgYW5kIG9ubHkgaWYgdGhlcmUgYXJlIGFuIGV2ZW4gbnVtYmVyIG9mIHJlZ2lvbmFsXG4gICAgLy8gaW5kaWNhdG9ycyBwcmVjZWRpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBicmVhay5cbiAgICBpZiAoY3VycmVudCA9PT0gUkkgJiYgbmV4dCA9PT0gUkkpIHtcbiAgICAgICAgdmFyIGkgPSBpbmRpY2llc1tjdXJyZW50SW5kZXhdO1xuICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIGlmIChjbGFzc1R5cGVzW2ldID09PSBSSSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCAlIDIgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIExCMzBiIERvIG5vdCBicmVhayBiZXR3ZWVuIGFuIGVtb2ppIGJhc2UgYW5kIGFuIGVtb2ppIG1vZGlmaWVyLlxuICAgIGlmIChjdXJyZW50ID09PSBFQiAmJiBuZXh0ID09PSBFTSkge1xuICAgICAgICByZXR1cm4gQlJFQUtfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJSRUFLX0FMTE9XRUQ7XG59O1xuXG52YXIgbGluZUJyZWFrQXRJbmRleCA9IGV4cG9ydHMubGluZUJyZWFrQXRJbmRleCA9IGZ1bmN0aW9uIGxpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgaW5kZXgpIHtcbiAgICAvLyBMQjIgTmV2ZXIgYnJlYWsgYXQgdGhlIHN0YXJ0IG9mIHRleHQuXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCUkVBS19OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvLyBMQjMgQWx3YXlzIGJyZWFrIGF0IHRoZSBlbmQgb2YgdGV4dC5cbiAgICBpZiAoaW5kZXggPj0gY29kZVBvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIEJSRUFLX01BTkRBVE9SWTtcbiAgICB9XG5cbiAgICB2YXIgX2NvZGVQb2ludHNUb0NoYXJhY3RlID0gY29kZVBvaW50c1RvQ2hhcmFjdGVyQ2xhc3Nlcyhjb2RlUG9pbnRzKSxcbiAgICAgICAgX2NvZGVQb2ludHNUb0NoYXJhY3RlMiA9IF9zbGljZWRUb0FycmF5KF9jb2RlUG9pbnRzVG9DaGFyYWN0ZSwgMiksXG4gICAgICAgIGluZGljaWVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlMlswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTJbMV07XG5cbiAgICByZXR1cm4gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsIGluZGV4KTtcbn07XG5cbnZhciBjc3NGb3JtYXR0ZWRDbGFzc2VzID0gZnVuY3Rpb24gY3NzRm9ybWF0dGVkQ2xhc3Nlcyhjb2RlUG9pbnRzLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IGxpbmVCcmVhazogJ25vcm1hbCcsIHdvcmRCcmVhazogJ25vcm1hbCcgfTtcbiAgICB9XG5cbiAgICB2YXIgX2NvZGVQb2ludHNUb0NoYXJhY3RlMyA9IGNvZGVQb2ludHNUb0NoYXJhY3RlckNsYXNzZXMoY29kZVBvaW50cywgb3B0aW9ucy5saW5lQnJlYWspLFxuICAgICAgICBfY29kZVBvaW50c1RvQ2hhcmFjdGU0ID0gX3NsaWNlZFRvQXJyYXkoX2NvZGVQb2ludHNUb0NoYXJhY3RlMywgMyksXG4gICAgICAgIGluZGljaWVzID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlNFswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jb2RlUG9pbnRzVG9DaGFyYWN0ZTRbMV0sXG4gICAgICAgIGlzTGV0dGVyTnVtYmVyID0gX2NvZGVQb2ludHNUb0NoYXJhY3RlNFsyXTtcblxuICAgIGlmIChvcHRpb25zLndvcmRCcmVhayA9PT0gJ2JyZWFrLWFsbCcgfHwgb3B0aW9ucy53b3JkQnJlYWsgPT09ICdicmVhay13b3JkJykge1xuICAgICAgICBjbGFzc1R5cGVzID0gY2xhc3NUeXBlcy5tYXAoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBbTlUsIEFMLCBTQV0uaW5kZXhPZih0eXBlKSAhPT0gLTEgPyBJRCA6IHR5cGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBmb3JiaWRkZW5CcmVha3BvaW50cyA9IG9wdGlvbnMud29yZEJyZWFrID09PSAna2VlcC1hbGwnID8gaXNMZXR0ZXJOdW1iZXIubWFwKGZ1bmN0aW9uIChpc0xldHRlck51bWJlciwgaSkge1xuICAgICAgICByZXR1cm4gaXNMZXR0ZXJOdW1iZXIgJiYgY29kZVBvaW50c1tpXSA+PSAweDRlMDAgJiYgY29kZVBvaW50c1tpXSA8PSAweDlmZmY7XG4gICAgfSkgOiBudWxsO1xuXG4gICAgcmV0dXJuIFtpbmRpY2llcywgY2xhc3NUeXBlcywgZm9yYmlkZGVuQnJlYWtwb2ludHNdO1xufTtcblxudmFyIGlubGluZUJyZWFrT3Bwb3J0dW5pdGllcyA9IGV4cG9ydHMuaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzID0gZnVuY3Rpb24gaW5saW5lQnJlYWtPcHBvcnR1bml0aWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBjb2RlUG9pbnRzID0gKDAsIF9VdGlsLnRvQ29kZVBvaW50cykoc3RyKTtcbiAgICB2YXIgb3V0cHV0ID0gQlJFQUtfTk9UX0FMTE9XRUQ7XG5cbiAgICB2YXIgX2Nzc0Zvcm1hdHRlZENsYXNzZXMgPSBjc3NGb3JtYXR0ZWRDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMpLFxuICAgICAgICBfY3NzRm9ybWF0dGVkQ2xhc3NlczIgPSBfc2xpY2VkVG9BcnJheShfY3NzRm9ybWF0dGVkQ2xhc3NlcywgMyksXG4gICAgICAgIGluZGljaWVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXMyWzBdLFxuICAgICAgICBjbGFzc1R5cGVzID0gX2Nzc0Zvcm1hdHRlZENsYXNzZXMyWzFdLFxuICAgICAgICBmb3JiaWRkZW5CcmVha3BvaW50cyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzMlsyXTtcblxuICAgIGNvZGVQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoY29kZVBvaW50LCBpKSB7XG4gICAgICAgIG91dHB1dCArPSAoMCwgX1V0aWwuZnJvbUNvZGVQb2ludCkoY29kZVBvaW50KSArIChpID49IGNvZGVQb2ludHMubGVuZ3RoIC0gMSA/IEJSRUFLX01BTkRBVE9SWSA6IF9saW5lQnJlYWtBdEluZGV4KGNvZGVQb2ludHMsIGNsYXNzVHlwZXMsIGluZGljaWVzLCBpICsgMSwgZm9yYmlkZGVuQnJlYWtwb2ludHMpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG59O1xuXG52YXIgQnJlYWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJlYWsoY29kZVBvaW50cywgbGluZUJyZWFrLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcmVhayk7XG5cbiAgICAgICAgdGhpcy5fY29kZVBvaW50cyA9IGNvZGVQb2ludHM7XG4gICAgICAgIHRoaXMucmVxdWlyZWQgPSBsaW5lQnJlYWsgPT09IEJSRUFLX01BTkRBVE9SWTtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQnJlYWssIFt7XG4gICAgICAgIGtleTogJ3NsaWNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNsaWNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9VdGlsLmZyb21Db2RlUG9pbnQuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkodGhpcy5fY29kZVBvaW50cy5zbGljZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCkpKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCcmVhaztcbn0oKTtcblxudmFyIExpbmVCcmVha2VyID0gZXhwb3J0cy5MaW5lQnJlYWtlciA9IGZ1bmN0aW9uIExpbmVCcmVha2VyKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBjb2RlUG9pbnRzID0gKDAsIF9VdGlsLnRvQ29kZVBvaW50cykoc3RyKTtcblxuICAgIHZhciBfY3NzRm9ybWF0dGVkQ2xhc3NlczMgPSBjc3NGb3JtYXR0ZWRDbGFzc2VzKGNvZGVQb2ludHMsIG9wdGlvbnMpLFxuICAgICAgICBfY3NzRm9ybWF0dGVkQ2xhc3NlczQgPSBfc2xpY2VkVG9BcnJheShfY3NzRm9ybWF0dGVkQ2xhc3NlczMsIDMpLFxuICAgICAgICBpbmRpY2llcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzNFswXSxcbiAgICAgICAgY2xhc3NUeXBlcyA9IF9jc3NGb3JtYXR0ZWRDbGFzc2VzNFsxXSxcbiAgICAgICAgZm9yYmlkZGVuQnJlYWtwb2ludHMgPSBfY3NzRm9ybWF0dGVkQ2xhc3NlczRbMl07XG5cbiAgICB2YXIgbGVuZ3RoID0gY29kZVBvaW50cy5sZW5ndGg7XG4gICAgdmFyIGxhc3RFbmQgPSAwO1xuICAgIHZhciBuZXh0SW5kZXggPSAwO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpbmVCcmVhayA9IEJSRUFLX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgd2hpbGUgKG5leHRJbmRleCA8IGxlbmd0aCAmJiAobGluZUJyZWFrID0gX2xpbmVCcmVha0F0SW5kZXgoY29kZVBvaW50cywgY2xhc3NUeXBlcywgaW5kaWNpZXMsICsrbmV4dEluZGV4LCBmb3JiaWRkZW5CcmVha3BvaW50cykpID09PSBCUkVBS19OT1RfQUxMT1dFRCkge31cblxuICAgICAgICAgICAgaWYgKGxpbmVCcmVhayAhPT0gQlJFQUtfTk9UX0FMTE9XRUQgfHwgbmV4dEluZGV4ID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBuZXcgQnJlYWsoY29kZVBvaW50cywgbGluZUJyZWFrLCBsYXN0RW5kLCBuZXh0SW5kZXgpO1xuICAgICAgICAgICAgICAgIGxhc3RFbmQgPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJpZSA9IGV4cG9ydHMuY3JlYXRlVHJpZUZyb21CYXNlNjQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX01BU0sgPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMV9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfQk1QX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9EQVRBX01BU0sgPSBleHBvcnRzLlVUUklFMl9EQVRBX0JMT0NLX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xXzIgPSBleHBvcnRzLlVUUklFMl9JTkRFWF9TSElGVCA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzEgPSBleHBvcnRzLlVUUklFMl9TSElGVF8yID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqIFNoaWZ0IHNpemUgZm9yIGdldHRpbmcgdGhlIGluZGV4LTIgdGFibGUgb2Zmc2V0LiAqL1xudmFyIFVUUklFMl9TSElGVF8yID0gZXhwb3J0cy5VVFJJRTJfU0hJRlRfMiA9IDU7XG5cbi8qKiBTaGlmdCBzaXplIGZvciBnZXR0aW5nIHRoZSBpbmRleC0xIHRhYmxlIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfU0hJRlRfMSA9IGV4cG9ydHMuVVRSSUUyX1NISUZUXzEgPSA2ICsgNTtcblxuLyoqXG4gKiBTaGlmdCBzaXplIGZvciBzaGlmdGluZyBsZWZ0IHRoZSBpbmRleCBhcnJheSB2YWx1ZXMuXG4gKiBJbmNyZWFzZXMgcG9zc2libGUgZGF0YSBzaXplIHdpdGggMTYtYml0IGluZGV4IHZhbHVlcyBhdCB0aGUgY29zdFxuICogb2YgY29tcGFjdGFiaWxpdHkuXG4gKiBUaGlzIHJlcXVpcmVzIGRhdGEgYmxvY2tzIHRvIGJlIGFsaWduZWQgYnkgVVRSSUUyX0RBVEFfR1JBTlVMQVJJVFkuXG4gKi9cbnZhciBVVFJJRTJfSU5ERVhfU0hJRlQgPSBleHBvcnRzLlVUUklFMl9JTkRFWF9TSElGVCA9IDI7XG5cbi8qKlxuICogRGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28gc2hpZnQgc2l6ZXMsXG4gKiBmb3IgZ2V0dGluZyBhbiBpbmRleC0xIG9mZnNldCBmcm9tIGFuIGluZGV4LTIgb2Zmc2V0LiA2PTExLTVcbiAqL1xudmFyIFVUUklFMl9TSElGVF8xXzIgPSBleHBvcnRzLlVUUklFMl9TSElGVF8xXzIgPSBVVFJJRTJfU0hJRlRfMSAtIFVUUklFMl9TSElGVF8yO1xuXG4vKipcbiAqIFRoZSBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvciBVK0Q4MDAuLlUrREJGRiBzdG9yZXMgdmFsdWVzIGZvclxuICogbGVhZCBzdXJyb2dhdGUgY29kZSBfdW5pdHNfIG5vdCBjb2RlIF9wb2ludHNfLlxuICogVmFsdWVzIGZvciBsZWFkIHN1cnJvZ2F0ZSBjb2RlIF9wb2ludHNfIGFyZSBpbmRleGVkIHdpdGggdGhpcyBwb3J0aW9uIG9mIHRoZSB0YWJsZS5cbiAqIExlbmd0aD0zMj0weDIwPTB4NDAwPj5VVFJJRTJfU0hJRlRfMi4gKFRoZXJlIGFyZSAxMDI0PTB4NDAwIGxlYWQgc3Vycm9nYXRlcy4pXG4gKi9cbnZhciBVVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCA9IGV4cG9ydHMuVVRSSUUyX0xTQ1BfSU5ERVhfMl9PRkZTRVQgPSAweDEwMDAwID4+IFVUUklFMl9TSElGVF8yO1xuXG4vKiogTnVtYmVyIG9mIGVudHJpZXMgaW4gYSBkYXRhIGJsb2NrLiAzMj0weDIwICovXG52YXIgVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfREFUQV9CTE9DS19MRU5HVEggPSAxIDw8IFVUUklFMl9TSElGVF8yO1xuLyoqIE1hc2sgZm9yIGdldHRpbmcgdGhlIGxvd2VyIGJpdHMgZm9yIHRoZSBpbi1kYXRhLWJsb2NrIG9mZnNldC4gKi9cbnZhciBVVFJJRTJfREFUQV9NQVNLID0gZXhwb3J0cy5VVFJJRTJfREFUQV9NQVNLID0gVVRSSUUyX0RBVEFfQkxPQ0tfTEVOR1RIIC0gMTtcblxudmFyIFVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIID0gZXhwb3J0cy5VVFJJRTJfTFNDUF9JTkRFWF8yX0xFTkdUSCA9IDB4NDAwID4+IFVUUklFMl9TSElGVF8yO1xuLyoqIENvdW50IHRoZSBsZW5ndGhzIG9mIGJvdGggQk1QIHBpZWNlcy4gMjA4MD0weDgyMCAqL1xudmFyIFVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEggPSBVVFJJRTJfTFNDUF9JTkRFWF8yX09GRlNFVCArIFVUUklFMl9MU0NQX0lOREVYXzJfTEVOR1RIO1xuLyoqXG4gKiBUaGUgMi1ieXRlIFVURi04IHZlcnNpb24gb2YgdGhlIGluZGV4LTIgdGFibGUgZm9sbG93cyBhdCBvZmZzZXQgMjA4MD0weDgyMC5cbiAqIExlbmd0aCAzMj0weDIwIGZvciBsZWFkIGJ5dGVzIEMwLi5ERiwgcmVnYXJkbGVzcyBvZiBVVFJJRTJfU0hJRlRfMi5cbiAqL1xudmFyIFVUUklFMl9VVEY4XzJCX0lOREVYXzJfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCA9IFVUUklFMl9JTkRFWF8yX0JNUF9MRU5HVEg7XG52YXIgVVRSSUUyX1VURjhfMkJfSU5ERVhfMl9MRU5HVEggPSBleHBvcnRzLlVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIID0gMHg4MDAgPj4gNjsgLyogVSswODAwIGlzIHRoZSBmaXJzdCBjb2RlIHBvaW50IGFmdGVyIDItYnl0ZSBVVEYtOCAqL1xuLyoqXG4gKiBUaGUgaW5kZXgtMSB0YWJsZSwgb25seSB1c2VkIGZvciBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzLCBhdCBvZmZzZXQgMjExMj0weDg0MC5cbiAqIFZhcmlhYmxlIGxlbmd0aCwgZm9yIGNvZGUgcG9pbnRzIHVwIHRvIGhpZ2hTdGFydCwgd2hlcmUgdGhlIGxhc3Qgc2luZ2xlLXZhbHVlIHJhbmdlIHN0YXJ0cy5cbiAqIE1heGltdW0gbGVuZ3RoIDUxMj0weDIwMD0weDEwMDAwMD4+VVRSSUUyX1NISUZUXzEuXG4gKiAoRm9yIDB4MTAwMDAwIHN1cHBsZW1lbnRhcnkgY29kZSBwb2ludHMgVSsxMDAwMC4uVSsxMGZmZmYuKVxuICpcbiAqIFRoZSBwYXJ0IG9mIHRoZSBpbmRleC0yIHRhYmxlIGZvciBzdXBwbGVtZW50YXJ5IGNvZGUgcG9pbnRzIHN0YXJ0c1xuICogYWZ0ZXIgdGhpcyBpbmRleC0xIHRhYmxlLlxuICpcbiAqIEJvdGggdGhlIGluZGV4LTEgdGFibGUgYW5kIHRoZSBmb2xsb3dpbmcgcGFydCBvZiB0aGUgaW5kZXgtMiB0YWJsZVxuICogYXJlIG9taXR0ZWQgY29tcGxldGVseSBpZiB0aGVyZSBpcyBvbmx5IEJNUCBkYXRhLlxuICovXG52YXIgVVRSSUUyX0lOREVYXzFfT0ZGU0VUID0gZXhwb3J0cy5VVFJJRTJfSU5ERVhfMV9PRkZTRVQgPSBVVFJJRTJfVVRGOF8yQl9JTkRFWF8yX09GRlNFVCArIFVUUklFMl9VVEY4XzJCX0lOREVYXzJfTEVOR1RIO1xuXG4vKipcbiAqIE51bWJlciBvZiBpbmRleC0xIGVudHJpZXMgZm9yIHRoZSBCTVAuIDMyPTB4MjBcbiAqIFRoaXMgcGFydCBvZiB0aGUgaW5kZXgtMSB0YWJsZSBpcyBvbWl0dGVkIGZyb20gdGhlIHNlcmlhbGl6ZWQgZm9ybS5cbiAqL1xudmFyIFVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCA9IGV4cG9ydHMuVVRSSUUyX09NSVRURURfQk1QX0lOREVYXzFfTEVOR1RIID0gMHgxMDAwMCA+PiBVVFJJRTJfU0hJRlRfMTtcblxuLyoqIE51bWJlciBvZiBlbnRyaWVzIGluIGFuIGluZGV4LTIgYmxvY2suIDY0PTB4NDAgKi9cbnZhciBVVFJJRTJfSU5ERVhfMl9CTE9DS19MRU5HVEggPSBleHBvcnRzLlVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCA9IDEgPDwgVVRSSUUyX1NISUZUXzFfMjtcbi8qKiBNYXNrIGZvciBnZXR0aW5nIHRoZSBsb3dlciBiaXRzIGZvciB0aGUgaW4taW5kZXgtMi1ibG9jayBvZmZzZXQuICovXG52YXIgVVRSSUUyX0lOREVYXzJfTUFTSyA9IGV4cG9ydHMuVVRSSUUyX0lOREVYXzJfTUFTSyA9IFVUUklFMl9JTkRFWF8yX0JMT0NLX0xFTkdUSCAtIDE7XG5cbnZhciBjcmVhdGVUcmllRnJvbUJhc2U2NCA9IGV4cG9ydHMuY3JlYXRlVHJpZUZyb21CYXNlNjQgPSBmdW5jdGlvbiBjcmVhdGVUcmllRnJvbUJhc2U2NChiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyID0gKDAsIF9VdGlsLmRlY29kZSkoYmFzZTY0KTtcbiAgICB2YXIgdmlldzMyID0gQXJyYXkuaXNBcnJheShidWZmZXIpID8gKDAsIF9VdGlsLnBvbHlVaW50MzJBcnJheSkoYnVmZmVyKSA6IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgIHZhciB2aWV3MTYgPSBBcnJheS5pc0FycmF5KGJ1ZmZlcikgPyAoMCwgX1V0aWwucG9seVVpbnQxNkFycmF5KShidWZmZXIpIDogbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgdmFyIGhlYWRlckxlbmd0aCA9IDI0O1xuXG4gICAgdmFyIGluZGV4ID0gdmlldzE2LnNsaWNlKGhlYWRlckxlbmd0aCAvIDIsIHZpZXczMls0XSAvIDIpO1xuICAgIHZhciBkYXRhID0gdmlldzMyWzVdID09PSAyID8gdmlldzE2LnNsaWNlKChoZWFkZXJMZW5ndGggKyB2aWV3MzJbNF0pIC8gMikgOiB2aWV3MzIuc2xpY2UoTWF0aC5jZWlsKChoZWFkZXJMZW5ndGggKyB2aWV3MzJbNF0pIC8gNCkpO1xuXG4gICAgcmV0dXJuIG5ldyBUcmllKHZpZXczMlswXSwgdmlldzMyWzFdLCB2aWV3MzJbMl0sIHZpZXczMlszXSwgaW5kZXgsIGRhdGEpO1xufTtcblxudmFyIFRyaWUgPSBleHBvcnRzLlRyaWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJpZShpbml0aWFsVmFsdWUsIGVycm9yVmFsdWUsIGhpZ2hTdGFydCwgaGlnaFZhbHVlSW5kZXgsIGluZGV4LCBkYXRhKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmllKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgdGhpcy5lcnJvclZhbHVlID0gZXJyb3JWYWx1ZTtcbiAgICAgICAgdGhpcy5oaWdoU3RhcnQgPSBoaWdoU3RhcnQ7XG4gICAgICAgIHRoaXMuaGlnaFZhbHVlSW5kZXggPSBoaWdoVmFsdWVJbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgZm9yIGEgY29kZSBwb2ludCBhcyBzdG9yZWQgaW4gdGhlIFRyaWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29kZVBvaW50IHRoZSBjb2RlIHBvaW50XG4gICAgICogQHJldHVybiB0aGUgdmFsdWVcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKFRyaWUsIFt7XG4gICAgICAgIGtleTogJ2dldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoY29kZVBvaW50KSB7XG4gICAgICAgICAgICB2YXIgaXggPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDwgMHgwZDgwMCB8fCBjb2RlUG9pbnQgPiAweDBkYmZmICYmIGNvZGVQb2ludCA8PSAweDBmZmZmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9yZGluYXJ5IEJNUCBjb2RlIHBvaW50LCBleGNsdWRpbmcgbGVhZGluZyBzdXJyb2dhdGVzLlxuICAgICAgICAgICAgICAgICAgICAvLyBCTVAgdXNlcyBhIHNpbmdsZSBsZXZlbCBsb29rdXAuICBCTVAgaW5kZXggc3RhcnRzIGF0IG9mZnNldCAwIGluIHRoZSBUcmllMiBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgLy8gMTYgYml0IGRhdGEgaXMgc3RvcmVkIGluIHRoZSBpbmRleCBhcnJheSBpdHNlbGYuXG4gICAgICAgICAgICAgICAgICAgIGl4ID0gdGhpcy5pbmRleFtjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzJdO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBMZWFkIFN1cnJvZ2F0ZSBDb2RlIFBvaW50LiAgQSBTZXBhcmF0ZSBpbmRleCBzZWN0aW9uIGlzIHN0b3JlZCBmb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVhZCBzdXJyb2dhdGUgY29kZSB1bml0cyBhbmQgY29kZSBwb2ludHMuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgVGhlIG1haW4gaW5kZXggaGFzIHRoZSBjb2RlIHVuaXQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgLy8gICBGb3IgdGhpcyBmdW5jdGlvbiwgd2UgbmVlZCB0aGUgY29kZSBwb2ludCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiB0aGlzIGV4cHJlc3Npb24gY291bGQgYmUgcmVmYWN0b3JlZCBmb3Igc2xpZ2h0bHkgaW1wcm92ZWQgZWZmaWNpZW5jeSwgYnV0XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHN1cnJvZ2F0ZSBjb2RlIHBvaW50cyB3aWxsIGJlIHNvIHJhcmUgaW4gcHJhY3RpY2UgdGhhdCBpdCdzIG5vdCB3b3J0aCBpdC5cbiAgICAgICAgICAgICAgICAgICAgaXggPSB0aGlzLmluZGV4W1VUUklFMl9MU0NQX0lOREVYXzJfT0ZGU0VUICsgKGNvZGVQb2ludCAtIDB4ZDgwMCA+PiBVVFJJRTJfU0hJRlRfMildO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29kZVBvaW50IDwgdGhpcy5oaWdoU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcGxlbWVudGFsIGNvZGUgcG9pbnQsIHVzZSB0d28tbGV2ZWwgbG9va3VwLlxuICAgICAgICAgICAgICAgICAgICBpeCA9IFVUUklFMl9JTkRFWF8xX09GRlNFVCAtIFVUUklFMl9PTUlUVEVEX0JNUF9JTkRFWF8xX0xFTkdUSCArIChjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzEpO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbaXhdO1xuICAgICAgICAgICAgICAgICAgICBpeCArPSBjb2RlUG9pbnQgPj4gVVRSSUUyX1NISUZUXzIgJiBVVFJJRTJfSU5ERVhfMl9NQVNLO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IHRoaXMuaW5kZXhbaXhdO1xuICAgICAgICAgICAgICAgICAgICBpeCA9IChpeCA8PCBVVFJJRTJfSU5ERVhfU0hJRlQpICsgKGNvZGVQb2ludCAmIFVUUklFMl9EQVRBX01BU0spO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2l4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8PSAweDEwZmZmZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3RoaXMuaGlnaFZhbHVlSW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmFsbCB0aHJvdWdoLiAgVGhlIGNvZGUgcG9pbnQgaXMgb3V0c2lkZSBvZiB0aGUgbGVnYWwgcmFuZ2Ugb2YgMC4uMHgxMGZmZmYuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRyaWU7XG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgdG9Db2RlUG9pbnRzID0gZXhwb3J0cy50b0NvZGVQb2ludHMgPSBmdW5jdGlvbiB0b0NvZGVQb2ludHMoc3RyKSB7XG4gICAgdmFyIGNvZGVQb2ludHMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgaWYgKHZhbHVlID49IDB4ZDgwMCAmJiB2YWx1ZSA8PSAweGRiZmYgJiYgaSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhID0gc3RyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgICAgIGlmICgoZXh0cmEgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnRzLnB1c2goKCh2YWx1ZSAmIDB4M2ZmKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNmZikgKyAweDEwMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlUG9pbnRzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2RlUG9pbnRzO1xufTtcblxudmFyIGZyb21Db2RlUG9pbnQgPSBleHBvcnRzLmZyb21Db2RlUG9pbnQgPSBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KCkge1xuICAgIGlmIChTdHJpbmcuZnJvbUNvZGVQb2ludCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQuYXBwbHkoU3RyaW5nLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgY29kZVVuaXRzID0gW107XG5cbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIGNvZGVQb2ludCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goY29kZVBvaW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgY29kZVVuaXRzLnB1c2goKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDAsIGNvZGVQb2ludCAlIDB4NDAwICsgMHhkYzAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggKyAxID09PSBsZW5ndGggfHwgY29kZVVuaXRzLmxlbmd0aCA+IDB4NDAwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlVW5pdHMpO1xuICAgICAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxudmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbmZvciAodmFyIGkgPSAwOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xufVxuXG52YXIgZGVjb2RlID0gZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGUoYmFzZTY0KSB7XG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IGJhc2U2NC5sZW5ndGggKiAwLjc1LFxuICAgICAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLFxuICAgICAgICBpID0gdm9pZCAwLFxuICAgICAgICBwID0gMCxcbiAgICAgICAgZW5jb2RlZDEgPSB2b2lkIDAsXG4gICAgICAgIGVuY29kZWQyID0gdm9pZCAwLFxuICAgICAgICBlbmNvZGVkMyA9IHZvaWQgMCxcbiAgICAgICAgZW5jb2RlZDQgPSB2b2lkIDA7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gJz0nKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBidWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuc2xpY2UgIT09ICd1bmRlZmluZWQnID8gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCkgOiBuZXcgQXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICB2YXIgYnl0ZXMgPSBBcnJheS5pc0FycmF5KGJ1ZmZlcikgPyBidWZmZXIgOiBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGVuY29kZWQxID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkpXTtcbiAgICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDEpXTtcbiAgICAgICAgZW5jb2RlZDMgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDIpXTtcbiAgICAgICAgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSArIDMpXTtcblxuICAgICAgICBieXRlc1twKytdID0gZW5jb2RlZDEgPDwgMiB8IGVuY29kZWQyID4+IDQ7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDIgJiAxNSkgPDwgNCB8IGVuY29kZWQzID4+IDI7XG4gICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDMgJiAzKSA8PCA2IHwgZW5jb2RlZDQgJiA2MztcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmZmVyO1xufTtcblxudmFyIHBvbHlVaW50MTZBcnJheSA9IGV4cG9ydHMucG9seVVpbnQxNkFycmF5ID0gZnVuY3Rpb24gcG9seVVpbnQxNkFycmF5KGJ1ZmZlcikge1xuICAgIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoO1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsZW5ndGg7IF9pICs9IDIpIHtcbiAgICAgICAgYnl0ZXMucHVzaChidWZmZXJbX2kgKyAxXSA8PCA4IHwgYnVmZmVyW19pXSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn07XG5cbnZhciBwb2x5VWludDMyQXJyYXkgPSBleHBvcnRzLnBvbHlVaW50MzJBcnJheSA9IGZ1bmN0aW9uIHBvbHlVaW50MzJBcnJheShidWZmZXIpIHtcbiAgICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aDtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBsZW5ndGg7IF9pMiArPSA0KSB7XG4gICAgICAgIGJ5dGVzLnB1c2goYnVmZmVyW19pMiArIDNdIDw8IDI0IHwgYnVmZmVyW19pMiArIDJdIDw8IDE2IHwgYnVmZmVyW19pMiArIDFdIDw8IDggfCBidWZmZXJbX2kyXSk7XG4gICAgfVxuICAgIHJldHVybiBieXRlcztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0b0NvZGVQb2ludHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfVXRpbC50b0NvZGVQb2ludHM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmcm9tQ29kZVBvaW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1V0aWwuZnJvbUNvZGVQb2ludDtcbiAgfVxufSk7XG5cbnZhciBfTGluZUJyZWFrID0gcmVxdWlyZSgnLi9MaW5lQnJlYWsnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5lQnJlYWtlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9MaW5lQnJlYWsuTGluZUJyZWFrZXI7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAnS3dBQUFBQUFBQUFBQ0E0QUlEb0FBUEFmQUFBQ0FBQUFBQUFJQUJBQUdBQkFBRWdBVUFCWUFGNEFaZ0JlQUdZQVlBQm9BSEFBZUFCZUFHWUFmQUNFQUlBQWlBQ1FBSmdBb0FDb0FLMEF0UUM5QU1VQVhnQm1BRjRBWmdCZUFHWUF6UURWQUY0QVpnRFJBTmtBM2dEbUFPd0E5QUQ4QUFRQkRBRVVBUm9CSWdHQUFJZ0FKd0V2QVRjQlB3RkZBVTBCVEFGVUFWd0JaQUZzQVhNQmV3R0RBVEFBaXdHVEFac0JvZ0drQWF3QnRBRzhBY0lCeWdIU0Fkb0I0QUhvQWZBQitBSCtBUVlDRGdJV0F2NEJIZ0ltQWk0Q05nSStBa1VDVFFKVEFsc0NZd0pyQW5FQ2VRS0JBazBDaVFLUkFwa0NvUUtvQXJBQ3VBTEFBc1FDekFJd0FOUUMzQUxrQWpBQTdBTDBBdndDQVFNSkF4QURHQU13QUNBREpnTXVBellEUGdPQUFFWURTZ05TQTFJRFVnTmFBMW9EWUFOaUEySURnQUNBQUdvRGdBQnlBM1lEZmdPQUFJUURnQUNLQTVJRG1nT0FBSUFBb2dPcUE0QUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFLOER0d09BQUlBQXZ3UEhBODhEMXdQZkF5QUQ1d1BzQS9RRC9BT0FBSUFBQkFRTUJCSUVnQUFXQkI0RUpnUXVCRE1FSUFNN0JFRUVYZ0JKQkNBRFVRUlpCR0VFYVFRd0FEQUFjUVErQVhrRWdRU0pCSkVFZ0FDWUJJQUFvQVNvQks4RXR3UXdBTDhFeFFTQUFJQUFnQUNBQUlBQWdBQ2dBTTBFWGdCZUFGNEFYZ0JlQUY0QVhnQmVBTlVFWGdEWkJPRUVYZ0RwQlBFRStRUUJCUWtGRVFVWkJTRUZLUVV4QlRVRlBRVkZCVXdGVkFWY0JWNEFZd1ZlQUdzRmN3VjdCWU1GaXdXU0JWNEFtZ1dnQmFjRlhnQmVBRjRBWGdCZUFLc0ZYZ0N5QmJFRnVnVzdCY0lGd2dYSUJjSUZ3Z1hRQmRRRjNBWGtCZXNGOHdYN0JRTUdDd1lUQmhzR0l3WXJCak1HT3daZUFEOEdSd1pOQmw0QVZBWmJCbDRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdCZUFHTUdYZ0JxQm5FR1hnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQjVCb0FHNHdTR0JvNEdrd2FBQUlBREhnUjVBRjRBWGdCZUFKc0dnQUJHQTRBQW93YXJCck1Hc3dhZ0FMc0d3d2JMQmpBQTB3YmFCdG9HM1FiYUJ0b0cyZ2JhQnRvRzJnYmxCdXNHOHdiN0JnTUhDd2NUQnhzSEN3Y2pCeXNITUFjMUJ6VUhPZ2RDQjlvR1NnZFNCMW9IWUFmYUJsb0hhQWZhQmxJSDJnYmFCdG9HMmdiYUJ0b0cyZ2JhQmpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhiUWRlQUY0QU5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWQxQjMwSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQjRNSDJnYUtCNjhFZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSThIbHdkZUFKOEhwd2VBQUlBQXJ3ZTNCMTRBWGdDL0I4VUh5Z2N3QU5BSDJBZmdCNEFBNkFmd0J6NEIrQWNBQ0Z3QkNBZ1BDQmNJb2dFWUFSOElKd2lBQUM4SU53Zy9DQ0FEUndoUENGY0lYd2huQ0VvREdnU0FBSUFBZ0FCdkNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJZlFoM0NIZ0llUWg2Q0hzSWZBaDlDSGNJZUFoNUNIb0lld2g4Q0gwSWR3aDRDSGtJZWdoN0NId0lmUWgzQ0hnSWVRaDZDSHNJZkFoOUNIY0llQWg1Q0hvSWV3aDhDSDBJZHdoNENIa0llZ2g3Q0h3SWZRaDNDSGdJZVFoNkNIc0lmQWg5Q0hjSWVBaDVDSG9JZXdoOENIMElkd2g0Q0hrSWVnaDdDSHdJaEFpTENJNElNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2d3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCNTRJTlFjMUI2SUkyZ2FxQ0xJSXVnaUFBSUFBdmdqR0NJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUF5d2lIQVlBQTB3aUFBTmtJM1FqbENPMEk5QWo4Q0lBQWdBQ0FBQUlKQ2drU0NSb0pJZ2tuQ1RZSEx3azNDWllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lXQ0pZSWxnaVdDSllJbGdpV0NKWUlsZ2lBQUlBQUFBRkFBWGdCZUFHQUFjQUJlQUh3QVFBQ1FBS0FBclFDOUFKNEFYZ0JlQUUwQTNnQlJBTjRBN0FEOEFNd0JHZ0VBQUtjQk53RUZBVXdCWEFGNFFraENtRUtuQXJjQ2dBSEhBc0FCejRMQUFjQUJ3QUhBQWQrQzZBQm9BRytDLzRMQUFjQUJ3QUhBQWMrREY0TUFBY0FCNTRNM2d3ZURWNE5uZzNlRGFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBYUFCb0FHZ0FhQUJvQUdnQWFBQm9BRWVEcUFCVmc2V0RxQUJvUTZnQWFBQm9BSFhEdmNPTncvM0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRHZjTzl3NzNEdmNPOXc3M0R2Y085dzczRG5jUEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUJ3QUhBQWNBQndBSEFBY0FCd0FIQUFjQUI3Y1BQd2xHQ1U0Sk1BQ0FBSUFBZ0FCV0NWNEpZUW1BQUdrSmNBbDRDWHdKZ0Frd0FEQUFNQUF3QUlnSmdBQ0xDWk1KZ0FDWkNaOEpvd21yQ1lBQXN3a3dBRjRBWGdCOEFJQUF1d2tBQk1NSnlRbUFBTTRKZ0FEVkNUQUFNQUF3QURBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQXF3WVdCTmtJTUFBd0FEQUFNQURkQ2VBSjZBbnVDUjRFOWdrd0FQNEpCUW9OQ2pBQU1BQ0FBQlVLMHdpQUFCMEtKQW9zQ2pRS2dBQXdBRHdLUXdxQUFFc0t2UW1kQ1ZNS1d3b3dBREFBZ0FDQUFMY0VNQUNBQUdNS2dBQnJDakFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBZUJEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlrRVBRRnpDbm9LaVFTQ0Nvb0trQXFKQkpnS29BcWtDb2tFR0FHc0NyUUt2QXJCQ2pBQU1BREpDdEVLRlFIWkN1RUsvZ0hwQ3ZFS01BQXdBREFBTUFDQUFJd0UrUW93QUlBQVB3RUJDekFBTUFBd0FEQUFNQUNBQUFrTEVRc3dBSUFBUHdFWkN5RUxnQUFPQ0NrTE1BQXhDemtMTUFBd0FEQUFNQUF3QURBQVhnQmVBRUVMTUFBd0FEQUFNQUF3QURBQU1BQXdBRWtMVFF0VkM0QUFYQXRrQzRBQWlRa3dBREFBTUFBd0FEQUFNQUF3QURBQWJBdHhDM2tMZ0F1RkM0c0xNQUF3QUpNTGx3dWZDekFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFwd3N3QURBQU1BQ0FBSUFBZ0FDdkM0QUFnQUNBQUlBQWdBQ0FBTGNMTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUF2d3VBQU1jTGdBQ0FBSUFBZ0FDQUFJQUF5Z3VBQUlBQWdBQ0FBSUFBMFFzd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFOa0xnQUNBQUlBQTRBc3dBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDSkNSNEU2QXN3QURBQWh3SHdDNEFBK0FzQURBZ01FQXd3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUNBQUlBQUdBd2REQ1VNTUFBd0FDME1OUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUXcxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVIUFF3d0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURVSE5RYzFCelVITlFjMUJ6VUhOUWMyQnpBQU1BQTVERFVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFkRkREQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQWdBQ0FBSUFBVFF4U0RGb01NQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FGNEFYZ0JlQUY0QVhnQmVBRjRBWWd4ZUFHb01YZ0J4REhrTWZ3eGVBSVVNWGdCZUFJME1NQUF3QURBQU1BQXdBRjRBWGdDVkRKME1NQUF3QURBQU1BQmVBRjRBcFF4ZUFLc01zd3k3REY0QXdneTlETW9NWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdEUkROa01lUUJxQ2VBTTNBeDhBT1lNN0F6MERQZ01YZ0JlQUY0QVhnQmVBRjRBWGdCZUFGNEFYZ0JlQUY0QVhnQmVBRjRBWGdDZ0FBQU5vQUFIRFE0TkZnMHdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUFlRFNZTk1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QUlBQWdBQ0FBSUFBZ0FDQUFDNE5NQUJlQUY0QU5nMHdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBRDROUmcxT0RWWU5YZzFtRFRBQWJRMHdBREFBTUFBd0FEQUFNQUF3QURBQTJnYmFCdG9HMmdiYUJ0b0cyZ2JhQm5VTmVnM0NCWUFOd2dXRkRkb0dqQTNhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYVVEWndOcEEyb0Rkb0cyZ2F3RGJjTnZ3M0hEZG9HMmdiUERkWU4zQTNmRGVZTjJnYnNEZk1OMmdiYUJ2b04vZzNhQmdZT0RnN2FCbDRBWGdCZUFCWU9YZ0JlQUNVRzJnWWVEbDRBSkE1ZUFDd08ydzNhQnRvR01RNDVEdG9HMmdiYUJ0b0dRUTdhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnWkpEalVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCMUVPMmdZMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWRaRGpVSE5RYzFCelVITlFjMUIyRU9OUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhhQTQxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCM0FPMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdZMUJ6VUhOUWMxQnpVSE5RYzFCelVITlFjMUJ6VUhOUWMxQnpVSE5RYzFCMkVPMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdaSkR0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJ0b0cyZ2JhQnRvRzJnYmFCdG9HMmdiYUJra09lQTZnQUtBQW9BQXdBREFBTUFBd0FLQUFvQUNnQUtBQW9BQ2dBS0FBZ0E0d0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUF3QURBQU1BQXdBREFBTUFBd0FEQUFNQUQvL3dRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUEwQUF3QUJBQUVBQWdBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBS0FCTUFGd0FlQUJzQUdnQWVBQmNBRmdBU0FCNEFHd0FZQUE4QUdBQWNBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBR0FBWUFCNEFIZ0FlQUJNQUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUZnQWJBQklBSGdBZUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCWUFEUUFSQUI0QUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFVQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFrQUZnQWFBQnNBR3dBYkFCNEFIUUFkQUI0QVR3QVhBQjRBRFFBZUFCNEFHZ0FiQUU4QVR3QU9BRkFBSFFBZEFCMEFUd0JQQUJjQVR3QlBBRThBRmdCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBSGdBZUFCNEFVQUJRQUZBQVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBQjRBSGdBZUFGQUFUd0JBQUU4QVR3QlBBRUFBVHdCUUFGQUFUd0JRQUI0QUhnQWVBQjRBSGdBZUFCMEFIUUFkQUIwQUhnQWRBQjRBRGdCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBSkFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFrQUNRQUpBQWtBQ1FBSkFBa0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QUt3QXJBRkFBVUFCUUFGQUFHQUJRQUNzQUt3QXJBQ3NBSGdBZUFGQUFIZ0JRQUZBQVVBQXJBRkFBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBQkFBRUFBUUFCQUFFQUFRQUJBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FZQUEwQUt3QXJBQjRBSGdBYkFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFEUUFFQUI0QUJBQUVBQjRBQkFBRUFCTUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFLd0FyQUNzQUt3QXJBRllBVmdCV0FCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUdnQWFBQm9BR0FBWUFCNEFIZ0FFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUV3QUVBQ3NBRXdBVEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUJMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUJvQUdRQVpBQjRBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQk1BVUFBRUFBUUFCQUFFQUFRQUJBQUVBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQlFBRkFBQkFBRUFCNEFCQUFFQUFRQUJBQlFBRkFBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUFlQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUZBQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFCNEFIZ0FZQUJNQVVBQXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBRkFBQkFBRUFBUUFVQUFFQUFRQUJBQUVBQVFBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBckFDc0FIZ0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QXJBQ3NBVUFCUUFGQUFVQUFyQUNzQUJBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQVFBQkFBckFDc0FCQUFFQUFRQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQXJBQ3NBS3dBckFGQUFVQUFyQUZBQVVBQlFBQVFBQkFBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JRQUZBQUdnQWFBRkFBVUFCUUFGQUFVQUJNQUI0QUd3QlFBQjRBS3dBckFDc0FCQUFFQUFRQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFGQUFVQUFyQUZBQVVBQXJBQ3NBQkFBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFBUUFCQUFyQUNzQUJBQUVBQVFBS3dBckFDc0FCQUFyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QUVBQVFBVUFCUUFGQUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBQVFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUFyQUZBQVVBQlFBRkFBVUFBckFDc0FCQUJRQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFLd0FyQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBZUFCc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBS3dBckFBUUFCQUFyQUNzQUJBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBckFDc0FLd0FyQUZBQVVBQXJBRkFBVUFCUUFBUUFCQUFyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QWVBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dCUUFGQUFVQUFyQUZBQVVBQlFBRkFBS3dBckFDc0FVQUJRQUNzQVVBQXJBRkFBVUFBckFDc0FLd0JRQUZBQUt3QXJBQ3NBVUFCUUFGQUFLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FFQUFRQUJBQUVBQVFBS3dBckFDc0FCQUFFQUFRQUt3QUVBQVFBQkFBRUFDc0FLd0JRQUNzQUt3QXJBQ3NBS3dBckFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUJzQUhnQXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBckFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUI0QVVBQUVBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFDc0FLd0FFQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFGQUFLd0JRQUZBQUJBQUVBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBckFBUUFCQUFFQUNzQUJBQUVBQVFBQkFCUUFCNEFLd0FyQUNzQUt3QlFBRkFBVUFBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFFQUNzQUt3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQm9BVUFCUUFGQUFVQUJRQUZBQUt3QXJBQVFBQkFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FFQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQVFBQkFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFGd0FYQUFxQUNvQUtnQXFBQ29BS2dBcUFDc0FLd0FyQUNzQUd3QmNBRndBWEFCY0FGd0FYQUJjQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FlQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQURRQU5BQ3NBS3dBckFDc0FLd0JjQUZ3QUt3QmNBQ3NBS3dCY0FGd0FLd0JjQUNzQUt3QmNBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBS3dCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBWEFCY0FGd0FLd0JjQUNzQVhBQXJBQ3NBWEFCY0FDc0FYQUJjQUZ3QVhBQXFBRndBWEFBcUFDb0FLZ0FxQUNvQUtnQXJBQ29BS2dCY0FDc0FLd0JjQUZ3QVhBQmNBRndBS3dCY0FDc0FLZ0FxQUNvQUtnQXFBQ29BS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUZ3QVhBQmNBRndBVUFBT0FBNEFEZ0FPQUI0QURnQU9BQWtBRGdBT0FBMEFDUUFUQUJNQUV3QVRBQk1BQ1FBZUFCTUFIZ0FlQUI0QUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQU5BQVFBSGdBRUFCNEFCQUFXQUJFQUZnQVJBQVFBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU5BQVFBQkFBRUFBUUFCQUFOQUFRQUJBQlFBRkFBVUFCUUFGQUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FEUUFOQUI0QUhnQWVBQjRBSGdBZUFBUUFIZ0FlQUI0QUhnQWVBQjRBS3dBZUFCNEFEZ0FPQUEwQURnQWVBQjRBSGdBZUFCNEFDUUFKQUNzQUt3QXJBQ3NBS3dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFGd0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FOQUEwQUhnQWVBQjRBSGdCY0FGd0FYQUJjQUZ3QVhBQXFBQ29BS2dBcUFGd0FYQUJjQUZ3QUtnQXFBQ29BWEFBcUFDb0FLZ0JjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0JjQUZ3QVhBQXFBQ29BS2dBcUFGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BWEFBcUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLZ0FxQUNvQUtnQXFBQ29BVUFCUUFGQUFVQUJRQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0JRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQWVBRkFBVUFCUUFGQUFXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FFQUFRQUJBQWVBQTBBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FOQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCWUFFUUFyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRFFBTkFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFCUUFGQUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBMEFEUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BRFFBTkFCVUFYQUFOQUI0QURRQWJBRndBS2dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBVEFCTUFEUUFOQUE0QUhnQVRBQk1BSGdBRUFBUUFCQUFKQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBZUFDc0FLd0FyQUJNQUV3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBQ3NBS3dCY0FGd0FYQUJjQUZ3QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FDc0FLd0FyQUNzQVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JjQUNzQUt3QXJBQ29BS2dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFDc0FLd0FlQUI0QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBckFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FyQUNzQUJBQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FLZ0FxQUNvQUtnQXFBQ29BS2dCY0FDb0FLZ0FxQUNvQUtnQXFBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FEUUFOQUI0QURRQU5BQTBBRFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDc0FLd0FyQUFRQUJBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQVVBQlFBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QU5BQTBBRFFBTkFBMEFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QlFBRkFBVUFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQU5BQTBBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUhnQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFVQUJRQUZBQUJBQlFBRkFBVUFCUUFBUUFCQUFFQUZBQVVBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QUVBQVFBQkFBRUFBUUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBS3dCUUFDc0FVQUFyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQUhnQWVBQjRBVUFCUUFGQUFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUZBQVVBQlFBRkFBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFDc0FVQUJRQUZBQUt3QWVBQjRBSGdBZUFCNEFIZ0FlQUE0QUhnQXJBQTBBRFFBTkFBMEFEUUFOQUEwQUNRQU5BQTBBRFFBSUFBUUFDd0FFQUFRQURRQUpBQTBBRFFBTUFCMEFIUUFlQUJjQUZ3QVdBQmNBRndBWEFCWUFGd0FkQUIwQUhnQWVBQlFBRkFBVUFBMEFBUUFCQUFRQUJBQUVBQVFBQkFBSkFCb0FHZ0FhQUJvQUdnQWFBQm9BR2dBZUFCY0FGd0FkQUJVQUZRQWVBQjRBSGdBZUFCNEFIZ0FZQUJZQUVRQVZBQlVBRlFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FOQUI0QURRQU5BQTBBRFFBZUFBMEFEUUFOQUFjQUhnQWVBQjRBSGdBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFVQUJRQUNzQUt3QlBBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQVdBQkVBVHdCUUFFOEFUd0JQQUU4QVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUJZQUVRQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUd3QWJBQnNBR3dBYkFCc0FHd0FhQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYUFCc0FHd0FiQUJzQUdnQWJBQnNBR2dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBR3dBYkFCc0FHd0FiQUJzQUd3QWJBQnNBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQlFBQm9BSGdBZEFCNEFVQUFlQUJvQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVR3QWVBRkFBR3dBZUFCNEFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCMEFIUUFlQUZBQUhnQlFBQjRBVUFBZUFGQUFUd0JRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQlFBQjRBVUFCUUFGQUFVQUJQQUU4QVVBQlFBRkFBVUFCUUFFOEFVQUJRQUU4QVVBQlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUUFGQUFVQUJRQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBRkFBVUFCUUFGQUFUd0FlQUI0QUt3QXJBQ3NBS3dBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUI0QUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZUFCMEFIUUFlQUI0QUhnQWRBQjBBSGdBZUFCMEFIZ0FlQUI0QUhRQWVBQjBBR3dBYkFCNEFIUUFlQUI0QUhnQWVBQjBBSGdBZUFCMEFIUUFkQUIwQUhnQWVBQjBBSGdBZEFCNEFIUUFkQUIwQUhRQWRBQjBBSGdBZEFCNEFIZ0FlQUI0QUhnQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSFFBZUFCNEFIZ0FkQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjRBSGdBZEFCMEFIUUFkQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FkQUIwQUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJRQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FXQUJFQUZnQVJBQjRBSGdBZUFCNEFIZ0FlQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUZnQVJBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUJQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlFBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCNEFIZ0FlQUI0QUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSGdBZUFCMEFIUUFkQUIwQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZEFCMEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjBBSGdBZUFCMEFIUUFlQUI0QUhnQWVBQjBBSFFBZUFCNEFIZ0FlQUIwQUhRQWRBQjRBSGdBZEFCNEFIZ0FkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjBBSFFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFlQUIwQUhRQWVBQjRBSFFBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFDVUFKUUFkQUIwQUpRQWVBQ1VBSlFBbEFDQUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUhnQWVBQjRBSGdBZEFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhRQWRBQjRBSFFBZEFCMEFIZ0FkQUNVQUhRQWRBQjRBSFFBZEFCNEFIUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUIwQUhRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIUUFkQUIwQUhRQWxBQjRBSlFBbEFDVUFIUUFsQUNVQUhRQWRBQjBBSlFBbEFCMEFIUUFsQUIwQUhRQWxBQ1VBSlFBZUFCMEFIZ0FlQUI0QUhnQWRBQjBBSlFBZEFCMEFIUUFkQUIwQUhRQWxBQ1VBSlFBbEFDVUFIUUFsQUNVQUlBQWxBQjBBSFFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFCNEFKUUFsQUNBQUlBQWdBQ0FBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWRBQjRBSGdBZUFCY0FGd0FYQUJjQUZ3QVhBQjRBRXdBVEFDVUFIZ0FlQUI0QUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBV0FCRUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJZQUVRQVdBQkVBRmdBUkFCWUFFUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRmdBUkFCWUFFUUFlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUJZQUVRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIUUFkQUIwQUhRQWRBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBZUFCNEFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQUVBQVFBQkFBZUFCNEFLd0FyQUNzQUt3QXJBQk1BRFFBTkFBMEFVQUFUQUEwQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBRUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQTBBRFFBTkFBMEFEUUFOQUEwQURRQWVBQTBBRmdBTkFCNEFIZ0FYQUJjQUhnQWVBQmNBRndBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRFFBTkFBMEFEUUFUQUZBQURRQU5BQjRBRFFBTkFCNEFIZ0FlQUI0QUhnQU1BQXdBRFFBTkFBMEFIZ0FOQUEwQUZnQU5BQTBBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQ3NBS3dBckFBMEFFUUFSQUNVQUpRQkhBRmNBVndBV0FCRUFGZ0FSQUJZQUVRQVdBQkVBRmdBUkFDVUFKUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGUUFXQUJFQUVRQWxBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQVFBQkFBRUFBUUFCQUFFQUNVQVZ3QlhBRmNBVndBMkFDVUFKUUJYQUZjQVZ3QkhBRWNBSlFBbEFDVUFLd0JSQUZjQVVRQlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGRUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlJBRmNBVVFCWEFGRUFWd0JYQUZjQVZ3QlhBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlJBRkVBS3dBckFBUUFCQUFWQUJVQVJ3QkhBRmNBRlFCUkFGY0FVUUJYQUZFQVZ3QlJBRmNBVVFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRkVBVndCUkFGY0FVUUJYQUZjQVZ3QlhBRmNBVndCUkFGY0FWd0JYQUZjQVZ3QlhBRkVBVVFCWEFGY0FWd0JYQUJVQVVRQkhBRWNBVndBckFDc0FLd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBS3dBckFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0FyQUNVQUpRQlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUNzQUt3QXJBQ1VBSlFBbEFDVUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ3NBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUU4QVR3QlBBRThBVHdCUEFFOEFUd0FsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRWNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBRFFBVEFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFCQUFFQUFRQUJBQWVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFVQUJRQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQWVBQTBBRFFBTkFBMEFEUUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QVVBQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUI0QUhnQWVBQjRBSGdBZUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFVQUJRQUZBQUJBQlFBRkFBVUFCUUFBUUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFlQUI0QUhnQWVBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBSGdBZUFCb0FIZ0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFEZ0FPQUJNQUV3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUJBQUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QU5BQTBBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUFlQUI0QUhnQlFBQTRBVUFBckFDc0FVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFGZ0FXQUJZQUZnQVdBQllBRmdBV0FCWUFDc0FLd0FyQUFRQUhnQWVBQjRBSGdBZUFCNEFEUUFOQUEwQUhnQWVBQjRBSGdBckFGQUFTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQjRBSGdCY0FGd0FYQUJjQUZ3QUtnQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBWEFCY0FGd0FYQUJjQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUFRQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUFRQUJBQXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FIZ0FOQUEwQURRQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FLZ0FxQUNvQVhBQXFBQ29BS2dCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFBcUFGd0FLZ0FxQUNvQVhBQmNBQ29BS2dCY0FGd0FYQUJjQUZ3QUtnQXFBRndBS2dCY0FDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FDb0FLZ0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBMEFEUUJRQUZBQVVBQUVBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFEUUFFQUFRQUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBS3dBckFDc0FLd0FyQUNzQVZBQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlVBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBRlVBVlFCVkFGVUFWUUJWQUZVQVZRQlZBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FXUUJaQUZrQVdRQlpBRmtBV1FCWkFGa0FLd0FyQUNzQUt3QmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BV2dCYUFGb0FXZ0JhQUZvQVdnQmFBRm9BS3dBckFDc0FLd0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBQmdBR0FBWUFCZ0FHQUFZQUJnQUdBQVlBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUNVQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUpRQWxBQ1VBSlFBbEFDVUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUZZQUJBQldBRllBVmdCV0FGWUFWZ0JXQUZZQVZnQldBQjRBVmdCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGWUFWZ0FyQUZZQVZnQldBRllBVmdBckFGWUFLd0JXQUZZQUt3QldBRllBS3dCV0FGWUFWZ0JXQUZZQVZnQldBRllBVmdCV0FGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFFUUFXQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBYUFCNEFLd0FyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFHQUFSQUJFQUdBQVlBQk1BRXdBV0FCRUFGQUFyQUNzQUt3QXJBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ1VBSlFBbEFDVUFKUUFXQUJFQUZnQVJBQllBRVFBV0FCRUFGZ0FSQUJZQUVRQWxBQ1VBRmdBUkFDVUFKUUFsQUNVQUpRQWxBQ1VBRVFBbEFCRUFLd0FWQUJVQUV3QVRBQ1VBRmdBUkFCWUFFUUFXQUJFQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNzQUpRQWJBQm9BSlFBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQWNBS3dBVEFDVUFKUUFiQUJvQUpRQWxBQllBRVFBbEFDVUFFUUFsQUJFQUpRQlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQlVBRlFBbEFDVUFKUUFUQUNVQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUJZQUpRQVJBQ1VBSlFBbEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBV0FDVUFFUUFsQUJZQUVRQVJBQllBRVFBUkFCVUFWd0JSQUZFQVVRQlJBRkVBVVFCUkFGRUFVUUJSQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFFY0FSd0FyQUNzQVZ3QlhBRmNBVndCWEFGY0FLd0FyQUZjQVZ3QlhBRmNBVndCWEFDc0FLd0JYQUZjQVZ3QlhBRmNBVndBckFDc0FWd0JYQUZjQUt3QXJBQ3NBR2dBYkFDVUFKUUFsQUJzQUd3QXJBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBQVFBQkFBUUFCMEFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FEUUFOQUEwQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0JRQUZBQUhnQWVBQjRBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBRFFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQTBBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUFyQUNzQVVBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBS3dBckFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFBMEFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBSGdCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBRFFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUI0QVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFCQUFFQUFRQUt3QUVBQVFBS3dBckFDc0FLd0FyQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBQkFBRUFBUUFLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQURRQU5BQTBBRFFBTkFBMEFEUUFOQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQjRBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBQTBBRFFBTkFBMEFEUUFOQUJRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FOQUEwQURRQU5BQTBBRFFBTkFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBMEFEUUFlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBZUFCNEFIZ0FOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FOQUEwQURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFCQUFlQUE0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QUVBRkFBVUFCUUFGQUFEUUFOQUI0QURRQWVBQVFBQkFBRUFCNEFLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVVBQU9BRkFBRFFBTkFBMEFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU5BQTBBSGdBTkFBMEFIZ0FFQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQUt3QlFBRkFBVUFCUUFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFBMEFLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBVUFCUUFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFyQUNzQUJBQUVBQ3NBS3dBRUFBUUFCQUFyQUNzQVVBQXJBQ3NBS3dBckFDc0FLd0FFQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUJBQUVBQ3NBS3dBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFBMEFEUUFOQUEwQUhnQkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBQ3NBRFFBckFCNEFLd0FyQUFRQUJBQUVBQVFBVUFCUUFCNEFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUNzQUt3QUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQU9BQTBBRFFBVEFCTUFIZ0FlQUI0QURRQU5BQTBBRFFBTkFBMEFEUUFOQUEwQURRQU5BQTBBRFFBTkFBMEFVQUJRQUZBQVVBQUVBQVFBS3dBckFBUUFEUUFOQUI0QVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dBckFDc0FLd0FyQUNzQUt3QU9BQTRBRGdBT0FBNEFEZ0FPQUE0QURnQU9BQTRBRGdBT0FDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQmNBRndBWEFCY0FGd0FYQUJjQUZ3QVhBQXJBQ3NBS3dBcUFDb0FLZ0FxQUNvQUtnQXFBQ29BS2dBcUFDb0FLZ0FxQUNvQUtnQXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FYQUJjQUEwQURRQU5BQ29BU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFFQUFRQUJBQUVBQVFBQkFBRUFGQUFCQUFFQUFRQUJBQU9BQjRBRFFBTkFBMEFEUUFPQUI0QUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBVUFCUUFGQUFVQUFyQUNzQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBTkFDc0FEZ0FPQUE0QURRQU5BQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQUVBRkFBRFFBTkFBMEFEUUFOQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QU9BQk1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBS3dBckFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBRkFBVUFCUUFDc0FVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBRUFDc0FCQUFFQUNzQUJBQUVBQVFBQkFBRUFBUUFCQUJRQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQURRQU5BQTBBRFFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JRQUZBQVVBQlFBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVNBQklBRWdBUXdCREFFTUFVQUJRQUZBQVVBQkRBRkFBVUFCUUFFZ0FRd0JJQUVNQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVNBQkRBRU1BVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCSUFFTUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FLd0FyQUNzQUt3QU5BQTBBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUFRQUJBQUVBQVFBQkFBTkFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBRUFBUUFCQUFFQUFRQUJBQUVBQTBBRFFBTkFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFEUUFlQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FVQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRWNBUndBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFDc0FLd0FlQUFRQUJBQU5BQVFBQkFBRUFBUUFLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdBZUFBUUFCQUFFQUFRQUJBQUVBQVFBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FFQUFRQUJBQUVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUI0QUhnQUVBQVFBQkFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBckFGQUFVQUFyQUNzQVVBQXJBQ3NBVUFCUUFDc0FLd0JRQUZBQVVBQlFBQ3NBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFLd0JRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQXJBRkFBVUFCUUFGQUFLd0FyQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFCUUFGQUFLd0FlQUI0QVVBQlFBRkFBVUFCUUFDc0FVQUFyQUNzQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUNzQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FyQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUFlQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUt3QXJBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUVzQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBRUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFCQUFlQUI0QURRQU5BQTBBRFFBZUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQVFBQkFBRUFBUUFCQUFyQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQ3NBQkFBRUFBUUFCQUFFQUFRQUJBQXJBQVFBQkFBckFBUUFCQUFFQUFRQUJBQXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUJRQUZBQUt3QXJBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQVFBQkFBRUFBUUFCQUFFQUFRQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUhnQWVBQjRBSGdBRUFBUUFCQUFFQUFRQUJBQUVBQ3NBS3dBckFDc0FLd0JMQUVzQVN3QkxBRXNBU3dCTEFFc0FTd0JMQUNzQUt3QXJBQ3NBRmdBV0FGQUFVQUJRQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQXJBRkFBVUFBckFGQUFLd0FyQUZBQUt3QlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBQ3NBVUFCUUFGQUFVQUFyQUZBQUt3QlFBQ3NBS3dBckFDc0FLd0FyQUZBQUt3QXJBQ3NBS3dCUUFDc0FVQUFyQUZBQUt3QlFBRkFBVUFBckFGQUFVQUFyQUZBQUt3QXJBRkFBS3dCUUFDc0FVQUFyQUZBQUt3QlFBQ3NBVUFCUUFDc0FVQUFyQUNzQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBS3dCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFBckFGQUFLd0JRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUNzQUt3QXJBQ3NBS3dCUUFGQUFVQUFyQUZBQVVBQlFBRkFBVUFBckFGQUFVQUJRQUZBQVVBQlFBRkFBVUFCUUFGQUFVQUJRQUZBQVVBQlFBRkFBVUFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQjRBSGdBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQVR3QlBBRThBVHdCUEFFOEFUd0JQQUU4QVR3QlBBRThBVHdBbEFDVUFKUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFlQUNVQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhnQWVBQ1VBSlFBbEFDVUFIUUFkQUIwQUhRQWRBQjBBSFFBZEFCMEFIUUFkQUIwQUhRQWRBQjBBSFFBZEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFwQUNrQUtRQXBBQ2tBS1FBcEFDa0FLUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUI0QUhnQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFIZ0FlQUNVQUpRQWxBQ1VBSlFBZUFDVUFKUUFsQUNVQUpRQWdBQ0FBSUFBbEFDVUFJQUFsQUNVQUlBQWdBQ0FBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJUUFoQUNFQUlRQWhBQ1VBSlFBZ0FDQUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWdBQ0FBSUFBbEFDVUFKUUFsQUNBQUpRQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUlBQWxBQ1VBSlFBZ0FDVUFKUUFsQUNVQUlBQWdBQ0FBSlFBZ0FDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBZUFDVUFIZ0FsQUI0QUpRQWxBQ1VBSlFBbEFDQUFKUUFsQUNVQUpRQWVBQ1VBSGdBZUFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBZ0FDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDQUFJQUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNBQUpRQWxBQ1VBSUFBZ0FDQUFJQUFnQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBRndBWEFCY0FGUUFWQUJVQUhnQWVBQjRBSGdBbEFDVUFKUUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUlBQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSUFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBbEFDVUFKUUFsQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFKUUFsQUNVQUpRQWxBQ1VBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWVBQjRBSGdBZUFCNEFIZ0FlQUI0QUhnQWVBQjRBSGdBZUFCNEFIZ0FlQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ0FBSUFBZ0FDQUFJQUFsQUNBQUlBQWxBQ1VBSlFBbEFDVUFKUUFnQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSUFBZ0FDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDQUFJQUFnQUNBQUlBQWdBQ0FBSUFBZ0FDQUFJQUFnQUNBQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDc0FLd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUJYQUZjQVZ3QlhBRmNBVndCWEFGY0FWd0JYQUZjQVZ3QlhBRmNBVndCWEFGY0FKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQWxBQ1VBSlFBbEFDVUFKUUFsQUNVQUpRQXJBQVFBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FCQUFFQUFRQUJBQUVBQVFBQkFBRUFBUUFCQUFFQUFRQUJBQUVBQVFBQkFBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0FLd0FyQUNzQUt3QXJBQ3NBS3dBckFDc0EnOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbnZhciBBTkdMRSA9IC8oWystXT9cXGQqXFwuP1xcZCspKGRlZ3xncmFkfHJhZHx0dXJuKS9pO1xyXG5cclxudmFyIHBhcnNlQW5nbGUgPSBleHBvcnRzLnBhcnNlQW5nbGUgPSBmdW5jdGlvbiBwYXJzZUFuZ2xlKGFuZ2xlKSB7XHJcbiAgICB2YXIgbWF0Y2ggPSBhbmdsZS5tYXRjaChBTkdMRSk7XHJcblxyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XHJcbiAgICAgICAgc3dpdGNoIChtYXRjaFsyXS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlZyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5QSSAqIHZhbHVlIC8gMTgwO1xyXG4gICAgICAgICAgICBjYXNlICdncmFkJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLlBJIC8gMjAwICogdmFsdWU7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JhZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIGNhc2UgJ3R1cm4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguUEkgKiAyICogdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucGFyc2VCb3VuZEN1cnZlcyA9IGV4cG9ydHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBleHBvcnRzLnBhcnNlUGF0aEZvckJvcmRlciA9IGV4cG9ydHMucGFyc2VEb2N1bWVudFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUNvbnRlbnRCb3ggPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBleHBvcnRzLnBhcnNlQm91bmRzID0gZXhwb3J0cy5Cb3VuZHMgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xyXG5cclxudmFyIF9WZWN0b3IgPSByZXF1aXJlKCcuL2RyYXdpbmcvVmVjdG9yJyk7XHJcblxyXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xyXG5cclxudmFyIF9CZXppZXJDdXJ2ZSA9IHJlcXVpcmUoJy4vZHJhd2luZy9CZXppZXJDdXJ2ZScpO1xyXG5cclxudmFyIF9CZXppZXJDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CZXppZXJDdXJ2ZSk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbnZhciBUT1AgPSAwO1xyXG52YXIgUklHSFQgPSAxO1xyXG52YXIgQk9UVE9NID0gMjtcclxudmFyIExFRlQgPSAzO1xyXG5cclxudmFyIEggPSAwO1xyXG52YXIgViA9IDE7XHJcblxyXG52YXIgQm91bmRzID0gZXhwb3J0cy5Cb3VuZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb3VuZHMoeCwgeSwgdywgaCkge1xyXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCb3VuZHMpO1xyXG5cclxuICAgICAgICB0aGlzLmxlZnQgPSB4O1xyXG4gICAgICAgIHRoaXMudG9wID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdztcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKEJvdW5kcywgbnVsbCwgW3tcclxuICAgICAgICBrZXk6ICdmcm9tQ2xpZW50UmVjdCcsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZyb21DbGllbnRSZWN0KGNsaWVudFJlY3QsIHNjcm9sbFgsIHNjcm9sbFkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3VuZHMoY2xpZW50UmVjdC5sZWZ0ICsgc2Nyb2xsWCwgY2xpZW50UmVjdC50b3AgKyBzY3JvbGxZLCBjbGllbnRSZWN0LndpZHRoLCBjbGllbnRSZWN0LmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBCb3VuZHM7XHJcbn0oKTtcclxuXHJcbnZhciBwYXJzZUJvdW5kcyA9IGV4cG9ydHMucGFyc2VCb3VuZHMgPSBmdW5jdGlvbiBwYXJzZUJvdW5kcyhub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSB7XHJcbiAgICByZXR1cm4gQm91bmRzLmZyb21DbGllbnRSZWN0KG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHNjcm9sbFgsIHNjcm9sbFkpO1xyXG59O1xyXG5cclxudmFyIGNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBleHBvcnRzLmNhbGN1bGF0ZVBhZGRpbmdCb3ggPSBmdW5jdGlvbiBjYWxjdWxhdGVQYWRkaW5nQm94KGJvdW5kcywgYm9yZGVycykge1xyXG4gICAgcmV0dXJuIG5ldyBCb3VuZHMoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBib3VuZHMud2lkdGggLSAoYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYm91bmRzLmhlaWdodCAtIChib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGggKyBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgpKTtcclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVDb250ZW50Qm94ID0gZXhwb3J0cy5jYWxjdWxhdGVDb250ZW50Qm94ID0gZnVuY3Rpb24gY2FsY3VsYXRlQ29udGVudEJveChib3VuZHMsIHBhZGRpbmcsIGJvcmRlcnMpIHtcclxuICAgIC8vIFRPRE8gc3VwcG9ydCBwZXJjZW50YWdlIHBhZGRpbmdzXHJcbiAgICB2YXIgcGFkZGluZ1RvcCA9IHBhZGRpbmdbVE9QXS52YWx1ZTtcclxuICAgIHZhciBwYWRkaW5nUmlnaHQgPSBwYWRkaW5nW1JJR0hUXS52YWx1ZTtcclxuICAgIHZhciBwYWRkaW5nQm90dG9tID0gcGFkZGluZ1tCT1RUT01dLnZhbHVlO1xyXG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFkZGluZ1tMRUZUXS52YWx1ZTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEJvdW5kcyhib3VuZHMubGVmdCArIHBhZGRpbmdMZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIHBhZGRpbmdUb3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgsIGJvdW5kcy53aWR0aCAtIChib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCksIGJvdW5kcy5oZWlnaHQgLSAoYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoICsgYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoICsgcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b20pKTtcclxufTtcclxuXHJcbnZhciBwYXJzZURvY3VtZW50U2l6ZSA9IGV4cG9ydHMucGFyc2VEb2N1bWVudFNpemUgPSBmdW5jdGlvbiBwYXJzZURvY3VtZW50U2l6ZShkb2N1bWVudCkge1xyXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWJvZHkgfHwgIWRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1VuYWJsZSB0byBnZXQgZG9jdW1lbnQgc2l6ZScgOiAnJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1heChNYXRoLm1heChib2R5LnNjcm9sbFdpZHRoLCBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgpLCBNYXRoLm1heChib2R5Lm9mZnNldFdpZHRoLCBkb2N1bWVudEVsZW1lbnQub2Zmc2V0V2lkdGgpLCBNYXRoLm1heChib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpKTtcclxuXHJcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoTWF0aC5tYXgoYm9keS5zY3JvbGxIZWlnaHQsIGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpLCBNYXRoLm1heChib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCksIE1hdGgubWF4KGJvZHkuY2xpZW50SGVpZ2h0LCBkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBCb3VuZHMoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbn07XHJcblxyXG52YXIgcGFyc2VQYXRoRm9yQm9yZGVyID0gZXhwb3J0cy5wYXJzZVBhdGhGb3JCb3JkZXIgPSBmdW5jdGlvbiBwYXJzZVBhdGhGb3JCb3JkZXIoY3VydmVzLCBib3JkZXJTaWRlKSB7XHJcbiAgICBzd2l0Y2ggKGJvcmRlclNpZGUpIHtcclxuICAgICAgICBjYXNlIFRPUDpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy50b3BMZWZ0T3V0ZXIsIGN1cnZlcy50b3BMZWZ0SW5uZXIsIGN1cnZlcy50b3BSaWdodE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lcik7XHJcbiAgICAgICAgY2FzZSBSSUdIVDpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy50b3BSaWdodE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbVJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21SaWdodElubmVyKTtcclxuICAgICAgICBjYXNlIEJPVFRPTTpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKGN1cnZlcy5ib3R0b21SaWdodE91dGVyLCBjdXJ2ZXMuYm90dG9tUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbUxlZnRPdXRlciwgY3VydmVzLmJvdHRvbUxlZnRJbm5lcik7XHJcbiAgICAgICAgY2FzZSBMRUZUOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYXRoRnJvbUN1cnZlcyhjdXJ2ZXMuYm90dG9tTGVmdE91dGVyLCBjdXJ2ZXMuYm90dG9tTGVmdElubmVyLCBjdXJ2ZXMudG9wTGVmdE91dGVyLCBjdXJ2ZXMudG9wTGVmdElubmVyKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjcmVhdGVQYXRoRnJvbUN1cnZlcyA9IGZ1bmN0aW9uIGNyZWF0ZVBhdGhGcm9tQ3VydmVzKG91dGVyMSwgaW5uZXIxLCBvdXRlcjIsIGlubmVyMikge1xyXG4gICAgdmFyIHBhdGggPSBbXTtcclxuICAgIGlmIChvdXRlcjEgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcclxuICAgICAgICBwYXRoLnB1c2gob3V0ZXIxLnN1YmRpdmlkZSgwLjUsIGZhbHNlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGgucHVzaChvdXRlcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdXRlcjIgaW5zdGFuY2VvZiBfQmV6aWVyQ3VydmUyLmRlZmF1bHQpIHtcclxuICAgICAgICBwYXRoLnB1c2gob3V0ZXIyLnN1YmRpdmlkZSgwLjUsIHRydWUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aC5wdXNoKG91dGVyMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlubmVyMiBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xyXG4gICAgICAgIHBhdGgucHVzaChpbm5lcjIuc3ViZGl2aWRlKDAuNSwgdHJ1ZSkucmV2ZXJzZSgpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGF0aC5wdXNoKGlubmVyMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlubmVyMSBpbnN0YW5jZW9mIF9CZXppZXJDdXJ2ZTIuZGVmYXVsdCkge1xyXG4gICAgICAgIHBhdGgucHVzaChpbm5lcjEuc3ViZGl2aWRlKDAuNSwgZmFsc2UpLnJldmVyc2UoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhdGgucHVzaChpbm5lcjEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRoO1xyXG59O1xyXG5cclxudmFyIGNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBleHBvcnRzLmNhbGN1bGF0ZUJvcmRlckJveFBhdGggPSBmdW5jdGlvbiBjYWxjdWxhdGVCb3JkZXJCb3hQYXRoKGN1cnZlcykge1xyXG4gICAgcmV0dXJuIFtjdXJ2ZXMudG9wTGVmdE91dGVyLCBjdXJ2ZXMudG9wUmlnaHRPdXRlciwgY3VydmVzLmJvdHRvbVJpZ2h0T3V0ZXIsIGN1cnZlcy5ib3R0b21MZWZ0T3V0ZXJdO1xyXG59O1xyXG5cclxudmFyIGNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVBhZGRpbmdCb3hQYXRoKGN1cnZlcykge1xyXG4gICAgcmV0dXJuIFtjdXJ2ZXMudG9wTGVmdElubmVyLCBjdXJ2ZXMudG9wUmlnaHRJbm5lciwgY3VydmVzLmJvdHRvbVJpZ2h0SW5uZXIsIGN1cnZlcy5ib3R0b21MZWZ0SW5uZXJdO1xyXG59O1xyXG5cclxudmFyIHBhcnNlQm91bmRDdXJ2ZXMgPSBleHBvcnRzLnBhcnNlQm91bmRDdXJ2ZXMgPSBmdW5jdGlvbiBwYXJzZUJvdW5kQ3VydmVzKGJvdW5kcywgYm9yZGVycywgYm9yZGVyUmFkaXVzKSB7XHJcbiAgICB2YXIgdGxoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfTEVGVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xyXG4gICAgdmFyIHRsdiA9IGJvcmRlclJhZGl1c1tDT1JORVIuVE9QX0xFRlRdW1ZdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodCk7XHJcbiAgICB2YXIgdHJoID0gYm9yZGVyUmFkaXVzW0NPUk5FUi5UT1BfUklHSFRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcclxuICAgIHZhciB0cnYgPSBib3JkZXJSYWRpdXNbQ09STkVSLlRPUF9SSUdIVF1bVl0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcclxuICAgIHZhciBicmggPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9SSUdIVF1bSF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xyXG4gICAgdmFyIGJydiA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX1JJR0hUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xyXG4gICAgdmFyIGJsaCA9IGJvcmRlclJhZGl1c1tDT1JORVIuQk9UVE9NX0xFRlRdW0hdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcclxuICAgIHZhciBibHYgPSBib3JkZXJSYWRpdXNbQ09STkVSLkJPVFRPTV9MRUZUXVtWXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpO1xyXG5cclxuICAgIHZhciBmYWN0b3JzID0gW107XHJcbiAgICBmYWN0b3JzLnB1c2goKHRsaCArIHRyaCkgLyBib3VuZHMud2lkdGgpO1xyXG4gICAgZmFjdG9ycy5wdXNoKChibGggKyBicmgpIC8gYm91bmRzLndpZHRoKTtcclxuICAgIGZhY3RvcnMucHVzaCgodGx2ICsgYmx2KSAvIGJvdW5kcy5oZWlnaHQpO1xyXG4gICAgZmFjdG9ycy5wdXNoKCh0cnYgKyBicnYpIC8gYm91bmRzLmhlaWdodCk7XHJcbiAgICB2YXIgbWF4RmFjdG9yID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgZmFjdG9ycyk7XHJcblxyXG4gICAgaWYgKG1heEZhY3RvciA+IDEpIHtcclxuICAgICAgICB0bGggLz0gbWF4RmFjdG9yO1xyXG4gICAgICAgIHRsdiAvPSBtYXhGYWN0b3I7XHJcbiAgICAgICAgdHJoIC89IG1heEZhY3RvcjtcclxuICAgICAgICB0cnYgLz0gbWF4RmFjdG9yO1xyXG4gICAgICAgIGJyaCAvPSBtYXhGYWN0b3I7XHJcbiAgICAgICAgYnJ2IC89IG1heEZhY3RvcjtcclxuICAgICAgICBibGggLz0gbWF4RmFjdG9yO1xyXG4gICAgICAgIGJsdiAvPSBtYXhGYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRvcFdpZHRoID0gYm91bmRzLndpZHRoIC0gdHJoO1xyXG4gICAgdmFyIHJpZ2h0SGVpZ2h0ID0gYm91bmRzLmhlaWdodCAtIGJydjtcclxuICAgIHZhciBib3R0b21XaWR0aCA9IGJvdW5kcy53aWR0aCAtIGJyaDtcclxuICAgIHZhciBsZWZ0SGVpZ2h0ID0gYm91bmRzLmhlaWdodCAtIGJsdjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcExlZnRPdXRlcjogdGxoID4gMCB8fCB0bHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AsIHRsaCwgdGx2LCBDT1JORVIuVE9QX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQsIGJvdW5kcy50b3ApLFxyXG4gICAgICAgIHRvcExlZnRJbm5lcjogdGxoID4gMCB8fCB0bHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBNYXRoLm1heCgwLCB0bGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgTWF0aC5tYXgoMCwgdGx2IC0gYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSwgQ09STkVSLlRPUF9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvcmRlcnNbVE9QXS5ib3JkZXJXaWR0aCksXHJcbiAgICAgICAgdG9wUmlnaHRPdXRlcjogdHJoID4gMCB8fCB0cnYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQgKyB0b3BXaWR0aCwgYm91bmRzLnRvcCwgdHJoLCB0cnYsIENPUk5FUi5UT1BfUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgsIGJvdW5kcy50b3ApLFxyXG4gICAgICAgIHRvcFJpZ2h0SW5uZXI6IHRyaCA+IDAgfHwgdHJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgTWF0aC5taW4odG9wV2lkdGgsIGJvdW5kcy53aWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgpLCBib3VuZHMudG9wICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCB0b3BXaWR0aCA+IGJvdW5kcy53aWR0aCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGggPyAwIDogdHJoIC0gYm9yZGVyc1tMRUZUXS5ib3JkZXJXaWR0aCwgdHJ2IC0gYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoLCBDT1JORVIuVE9QX1JJR0hUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoIC0gYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBib3JkZXJzW1RPUF0uYm9yZGVyV2lkdGgpLFxyXG4gICAgICAgIGJvdHRvbVJpZ2h0T3V0ZXI6IGJyaCA+IDAgfHwgYnJ2ID4gMCA/IGdldEN1cnZlUG9pbnRzKGJvdW5kcy5sZWZ0ICsgYm90dG9tV2lkdGgsIGJvdW5kcy50b3AgKyByaWdodEhlaWdodCwgYnJoLCBicnYsIENPUk5FUi5CT1RUT01fUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgsIGJvdW5kcy50b3AgKyBib3VuZHMuaGVpZ2h0KSxcclxuICAgICAgICBib3R0b21SaWdodElubmVyOiBicmggPiAwIHx8IGJydiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIE1hdGgubWluKGJvdHRvbVdpZHRoLCBib3VuZHMud2lkdGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYm91bmRzLnRvcCArIE1hdGgubWluKHJpZ2h0SGVpZ2h0LCBib3VuZHMuaGVpZ2h0ICsgYm9yZGVyc1tUT1BdLmJvcmRlcldpZHRoKSwgTWF0aC5tYXgoMCwgYnJoIC0gYm9yZGVyc1tSSUdIVF0uYm9yZGVyV2lkdGgpLCBicnYgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgsIENPUk5FUi5CT1RUT01fUklHSFQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLSBib3JkZXJzW1JJR0hUXS5ib3JkZXJXaWR0aCwgYm91bmRzLnRvcCArIGJvdW5kcy5oZWlnaHQgLSBib3JkZXJzW0JPVFRPTV0uYm9yZGVyV2lkdGgpLFxyXG4gICAgICAgIGJvdHRvbUxlZnRPdXRlcjogYmxoID4gMCB8fCBibHYgPiAwID8gZ2V0Q3VydmVQb2ludHMoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AgKyBsZWZ0SGVpZ2h0LCBibGgsIGJsdiwgQ09STkVSLkJPVFRPTV9MRUZUKSA6IG5ldyBfVmVjdG9yMi5kZWZhdWx0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCksXHJcbiAgICAgICAgYm90dG9tTGVmdElubmVyOiBibGggPiAwIHx8IGJsdiA+IDAgPyBnZXRDdXJ2ZVBvaW50cyhib3VuZHMubGVmdCArIGJvcmRlcnNbTEVGVF0uYm9yZGVyV2lkdGgsIGJvdW5kcy50b3AgKyBsZWZ0SGVpZ2h0LCBNYXRoLm1heCgwLCBibGggLSBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoKSwgYmx2IC0gYm9yZGVyc1tCT1RUT01dLmJvcmRlcldpZHRoLCBDT1JORVIuQk9UVE9NX0xFRlQpIDogbmV3IF9WZWN0b3IyLmRlZmF1bHQoYm91bmRzLmxlZnQgKyBib3JkZXJzW0xFRlRdLmJvcmRlcldpZHRoLCBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCAtIGJvcmRlcnNbQk9UVE9NXS5ib3JkZXJXaWR0aClcclxuICAgIH07XHJcbn07XHJcblxyXG52YXIgQ09STkVSID0ge1xyXG4gICAgVE9QX0xFRlQ6IDAsXHJcbiAgICBUT1BfUklHSFQ6IDEsXHJcbiAgICBCT1RUT01fUklHSFQ6IDIsXHJcbiAgICBCT1RUT01fTEVGVDogM1xyXG59O1xyXG5cclxudmFyIGdldEN1cnZlUG9pbnRzID0gZnVuY3Rpb24gZ2V0Q3VydmVQb2ludHMoeCwgeSwgcjEsIHIyLCBwb3NpdGlvbikge1xyXG4gICAgdmFyIGthcHBhID0gNCAqICgoTWF0aC5zcXJ0KDIpIC0gMSkgLyAzKTtcclxuICAgIHZhciBveCA9IHIxICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IGhvcml6b250YWxcclxuICAgIHZhciBveSA9IHIyICoga2FwcGE7IC8vIGNvbnRyb2wgcG9pbnQgb2Zmc2V0IHZlcnRpY2FsXHJcbiAgICB2YXIgeG0gPSB4ICsgcjE7IC8vIHgtbWlkZGxlXHJcbiAgICB2YXIgeW0gPSB5ICsgcjI7IC8vIHktbWlkZGxlXHJcblxyXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICAgIGNhc2UgQ09STkVSLlRPUF9MRUZUOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9CZXppZXJDdXJ2ZTIuZGVmYXVsdChuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHltIC0gb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSAtIG94LCB5KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHkpKTtcclxuICAgICAgICBjYXNlIENPUk5FUi5UT1BfUklHSFQ6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0JlemllckN1cnZlMi5kZWZhdWx0KG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4ICsgb3gsIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeW0gLSBveSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHhtLCB5bSkpO1xyXG4gICAgICAgIGNhc2UgQ09STkVSLkJPVFRPTV9SSUdIVDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4bSwgeSArIG95KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeCArIG94LCB5bSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KHgsIHltKSk7XHJcbiAgICAgICAgY2FzZSBDT1JORVIuQk9UVE9NX0xFRlQ6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfQmV6aWVyQ3VydmUyLmRlZmF1bHQobmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0sIHltKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoeG0gLSBveCwgeW0pLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5ICsgb3kpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdCh4LCB5KSk7XHJcbiAgICB9XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5jbG9uZVdpbmRvdyA9IGV4cG9ydHMuRG9jdW1lbnRDbG9uZXIgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XHJcblxyXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xyXG5cclxudmFyIF9Cb3VuZHMgPSByZXF1aXJlKCcuL0JvdW5kcycpO1xyXG5cclxudmFyIF9Qcm94eSA9IHJlcXVpcmUoJy4vUHJveHknKTtcclxuXHJcbnZhciBfUmVzb3VyY2VMb2FkZXIgPSByZXF1aXJlKCcuL1Jlc291cmNlTG9hZGVyJyk7XHJcblxyXG52YXIgX1Jlc291cmNlTG9hZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jlc291cmNlTG9hZGVyKTtcclxuXHJcbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xyXG5cclxudmFyIF9iYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JhY2tncm91bmQnKTtcclxuXHJcbnZhciBfQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0NhbnZhc1JlbmRlcmVyJyk7XHJcblxyXG52YXIgX0NhbnZhc1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NhbnZhc1JlbmRlcmVyKTtcclxuXHJcbnZhciBfUHNldWRvTm9kZUNvbnRlbnQgPSByZXF1aXJlKCcuL1BzZXVkb05vZGVDb250ZW50Jyk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbnZhciBJR05PUkVfQVRUUklCVVRFID0gJ2RhdGEtaHRtbDJjYW52YXMtaWdub3JlJztcclxuXHJcbnZhciBEb2N1bWVudENsb25lciA9IGV4cG9ydHMuRG9jdW1lbnRDbG9uZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEb2N1bWVudENsb25lcihlbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIGNvcHlJbmxpbmUsIHJlbmRlcmVyKSB7XHJcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERvY3VtZW50Q2xvbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvcHlTdHlsZXMgPSBjb3B5SW5saW5lO1xyXG4gICAgICAgIHRoaXMuaW5saW5lSW1hZ2VzID0gY29weUlubGluZTtcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVyID0gbmV3IF9SZXNvdXJjZUxvYWRlcjIuZGVmYXVsdChvcHRpb25zLCBsb2dnZXIsIHdpbmRvdyk7XHJcbiAgICAgICAgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSA9IHtcclxuICAgICAgICAgICAgY291bnRlcnM6IHt9LFxyXG4gICAgICAgICAgICBxdW90ZURlcHRoOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAgICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSB0aGlzLmNsb25lTm9kZShlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQ2xhc3MoRG9jdW1lbnRDbG9uZXIsIFt7XHJcbiAgICAgICAga2V5OiAnaW5saW5lQWxsSW1hZ2VzJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5saW5lQWxsSW1hZ2VzKG5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubGluZUltYWdlcyAmJiBub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpLm1hcChmdW5jdGlvbiAoYmFja2dyb3VuZEltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZS5tZXRob2QgPT09ICd1cmwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvdXJjZUxvYWRlci5pbmxpbmVJbWFnZShiYWNrZ3JvdW5kSW1hZ2UuYXJnc1swXSkudGhlbihmdW5jdGlvbiAoaW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nICYmIHR5cGVvZiBpbWcuc3JjID09PSAnc3RyaW5nJyA/ICd1cmwoXCInICsgaW1nLnNyYyArICdcIiknIDogJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBpbWFnZScsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnJyArIGJhY2tncm91bmRJbWFnZS5wcmVmaXggKyBiYWNrZ3JvdW5kSW1hZ2UubWV0aG9kICsgJygnICsgYmFja2dyb3VuZEltYWdlLmFyZ3Muam9pbignLCcpICsgJyknKTtcclxuICAgICAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmRJbWFnZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIE11bHRpcGxlIGJhY2tncm91bmRzIHNvbWVob3cgYnJva2VuIGluIENocm9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZEltYWdlcy5qb2luKCcsJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlTG9hZGVyLmlubGluZUltYWdlKG5vZGUuc3JjKS50aGVuKGZ1bmN0aW9uIChpbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZyAmJiBub2RlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJiBub2RlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lZENoaWxkID0gKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUuc3R5bGUsIGltZy5jbG9uZU5vZGUoZmFsc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lZENoaWxkLCBub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBpbWFnZScsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnaW5saW5lRm9udHMnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmxpbmVGb250cyhkb2N1bWVudCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChBcnJheS5mcm9tKGRvY3VtZW50LnN0eWxlU2hlZXRzKS5tYXAoZnVuY3Rpb24gKHNoZWV0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXQuaHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChzaGVldC5ocmVmKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlU3R5bGVTaGVldEZvbnRzRnJvbVRleHQodGV4dCwgc2hlZXQuaHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5sb2dnZXIubG9nKCdVbmFibGUgdG8gbG9hZCBzdHlsZXNoZWV0JywgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFNoZWV0Rm9udHMoc2hlZXQsIGRvY3VtZW50KTtcclxuICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKGZvbnRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9udHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZvbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChmb250KTtcclxuICAgICAgICAgICAgICAgIH0sIFtdKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZm9udHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChmb250cy5tYXAoZnVuY3Rpb24gKGZvbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goZm9udC5mb3JtYXRzWzBdLnNyYykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChibG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhVXJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQuZm9udEZhY2Uuc2V0UHJvcGVydHkoJ3NyYycsICd1cmwoXCInICsgZGF0YVVyaSArICdcIiknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdAZm9udC1mYWNlIHsnICsgZm9udC5mb250RmFjZS5jc3NUZXh0ICsgJyAnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChmb250Q3NzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBmb250Q3NzLmpvaW4oJ1xcbicpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMyLmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdjcmVhdGVFbGVtZW50Q2xvbmUnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50Q2xvbmUobm9kZSkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcHlTdHlsZXMgJiYgbm9kZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gbm9kZS50b0RhdGFVUkwoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1nO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGNsb25lIGNhbnZhcyBjb250ZW50cywgY2FudmFzIGlzIHRhaW50ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wSWZyYW1lID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZUtleSA9IGdlbmVyYXRlSWZyYW1lS2V5KCk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wSWZyYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1odG1sMmNhbnZhcy1pbnRlcm5hbC1pZnJhbWUta2V5JywgaWZyYW1lS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgX3BhcnNlQm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIDAsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gX3BhcnNlQm91bmRzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IF9wYXJzZUJvdW5kcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUxvYWRlci5jYWNoZVtpZnJhbWVLZXldID0gZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50KG5vZGUsIHRoaXMub3B0aW9ucykudGhlbihmdW5jdGlvbiAoZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZW5kZXJlcihkb2N1bWVudEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IF90aGlzMy5vcHRpb25zLmFzeW5jLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1RhaW50OiBfdGhpczMub3B0aW9ucy5hbGxvd1RhaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVRpbWVvdXQ6IF90aGlzMy5vcHRpb25zLmltYWdlVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2luZzogX3RoaXMzLm9wdGlvbnMubG9nZ2luZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IF90aGlzMy5vcHRpb25zLnByb3h5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDb250YWluZXI6IF90aGlzMy5vcHRpb25zLnJlbW92ZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IF90aGlzMy5vcHRpb25zLnNjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JlaWduT2JqZWN0UmVuZGVyaW5nOiBfdGhpczMub3B0aW9ucy5mb3JlaWduT2JqZWN0UmVuZGVyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VDT1JTOiBfdGhpczMub3B0aW9ucy51c2VDT1JTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG5ldyBfQ2FudmFzUmVuZGVyZXIyLmRlZmF1bHQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmlubmVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodDogZG9jdW1lbnRFbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFg6IGRvY3VtZW50RWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxZOiBkb2N1bWVudEVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWU9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIF90aGlzMy5sb2dnZXIuY2hpbGQoaWZyYW1lS2V5KSk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZUNhbnZhcy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWVDYW52YXMub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lQ2FudmFzLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBJZnJhbWUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcElmcmFtZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCgoMCwgX1V0aWwuY29weUNTU1N0eWxlcykobm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSksIGlmcmFtZUNhbnZhcyksIHRlbXBJZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wSWZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQgJiYgbm9kZS5zaGVldCAmJiBub2RlLnNoZWV0LmNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3NzID0gW10uc2xpY2UuY2FsbChub2RlLnNoZWV0LmNzc1J1bGVzLCAwKS5yZWR1Y2UoZnVuY3Rpb24gKGNzcywgcnVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChydWxlICYmIHJ1bGUuY3NzVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzcyArIHJ1bGUuY3NzVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGFjY2VzcyBjc3NUZXh0IHByb3BlcnR5JywgcnVsZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNzcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAnJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBub2RlLmNsb25lTm9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGNzcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnY2xvbmVOb2RlJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIGNsb25lID0gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLm5vZGVWYWx1ZSkgOiB0aGlzLmNyZWF0ZUVsZW1lbnRDbG9uZShub2RlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB3aW5kb3cgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKSA6IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZUJlZm9yZSA9IG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCAnOmJlZm9yZScpIDogbnVsbDtcclxuICAgICAgICAgICAgdmFyIHN0eWxlQWZ0ZXIgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgJzphZnRlcicpIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlZmVyZW5jZUVsZW1lbnQgPT09IG5vZGUgJiYgY2xvbmUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCA9IGNsb25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xvbmUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEJvZHlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQc2V1ZG9IaWRlU3R5bGVzKGNsb25lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGNvdW50ZXJzID0gKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5wYXJzZUNvdW50ZXJSZXNldCkoc3R5bGUsIHRoaXMucHNldWRvQ29udGVudERhdGEpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudEJlZm9yZSA9ICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucmVzb2x2ZVBzZXVkb0NvbnRlbnQpKG5vZGUsIHN0eWxlQmVmb3JlLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkOyBjaGlsZDsgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCBjaGlsZC5ub2RlTmFtZSAhPT0gJ1NDUklQVCcgJiZcclxuICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICAgICAgICAgICFjaGlsZC5oYXNBdHRyaWJ1dGUoSUdOT1JFX0FUVFJJQlVURSkgJiYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaWdub3JlRWxlbWVudHMgIT09ICdmdW5jdGlvbicgfHxcclxuICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICAgICAgICAgICF0aGlzLm9wdGlvbnMuaWdub3JlRWxlbWVudHMoY2hpbGQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3B5U3R5bGVzIHx8IGNoaWxkLm5vZGVOYW1lICE9PSAnU1RZTEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLmFwcGVuZENoaWxkKHRoaXMuY2xvbmVOb2RlKGNoaWxkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGVudEFmdGVyID0gKDAsIF9Qc2V1ZG9Ob2RlQ29udGVudC5yZXNvbHZlUHNldWRvQ29udGVudCkobm9kZSwgc3R5bGVBZnRlciwgdGhpcy5wc2V1ZG9Db250ZW50RGF0YSk7XHJcbiAgICAgICAgICAgICgwLCBfUHNldWRvTm9kZUNvbnRlbnQucG9wQ291bnRlcnMpKGNvdW50ZXJzLCB0aGlzLnBzZXVkb0NvbnRlbnREYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50ICYmIGNsb25lIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGVCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubGluZUFsbEltYWdlcyhpbmxpbmVQc2V1ZG9FbGVtZW50KG5vZGUsIGNsb25lLCBzdHlsZUJlZm9yZSwgY29udGVudEJlZm9yZSwgUFNFVURPX0JFRk9SRSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlQWZ0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlubGluZUFsbEltYWdlcyhpbmxpbmVQc2V1ZG9FbGVtZW50KG5vZGUsIGNsb25lLCBzdHlsZUFmdGVyLCBjb250ZW50QWZ0ZXIsIFBTRVVET19BRlRFUikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlICYmIHRoaXMuY29weVN0eWxlcyAmJiAhKG5vZGUgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykoc3R5bGUsIGNsb25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lQWxsSW1hZ2VzKGNsb25lKTtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnNjcm9sbFRvcCAhPT0gMCB8fCBub2RlLnNjcm9sbExlZnQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMucHVzaChbY2xvbmUsIG5vZGUuc2Nyb2xsTGVmdCwgbm9kZS5zY3JvbGxUb3BdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAobm9kZS5ub2RlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NBTlZBUyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3B5U3R5bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZUNhbnZhc0NvbnRlbnRzKG5vZGUsIGNsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdURVhUQVJFQSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU0VMRUNUJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUudmFsdWUgPSBub2RlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBEb2N1bWVudENsb25lcjtcclxufSgpO1xyXG5cclxudmFyIGdldFNoZWV0Rm9udHMgPSBmdW5jdGlvbiBnZXRTaGVldEZvbnRzKHNoZWV0LCBkb2N1bWVudCkge1xyXG4gICAgLy8gJEZsb3dGaXhNZVxyXG4gICAgcmV0dXJuIChzaGVldC5jc3NSdWxlcyA/IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMpIDogW10pLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgIHJldHVybiBydWxlLnR5cGUgPT09IENTU1J1bGUuRk9OVF9GQUNFX1JVTEU7XHJcbiAgICB9KS5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcclxuICAgICAgICB2YXIgc3JjID0gKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShydWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3NyYycpKTtcclxuICAgICAgICB2YXIgZm9ybWF0cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzcmNbaV0ubWV0aG9kID09PSAndXJsJyAmJiBzcmNbaSArIDFdICYmIHNyY1tpICsgMV0ubWV0aG9kID09PSAnZm9ybWF0Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBzcmNbaV0uYXJnc1swXTtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9udCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IGEuaHJlZixcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHNyY1tpICsgMV0uYXJnc1swXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHMucHVzaChmb250KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gVE9ETyBzZWxlY3QgY29ycmVjdCBmb3JtYXQgZm9yIGJyb3dzZXIpLFxyXG5cclxuICAgICAgICAgICAgZm9ybWF0czogZm9ybWF0cy5maWx0ZXIoZnVuY3Rpb24gKGZvbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoL153b2ZmL2kudGVzdChmb250LmZvcm1hdClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmb250RmFjZTogcnVsZS5zdHlsZVxyXG4gICAgICAgIH07XHJcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGZvbnQpIHtcclxuICAgICAgICByZXR1cm4gZm9udC5mb3JtYXRzLmxlbmd0aDtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudmFyIGNyZWF0ZVN0eWxlU2hlZXRGb250c0Zyb21UZXh0ID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldEZvbnRzRnJvbVRleHQodGV4dCwgYmFzZUhyZWYpIHtcclxuICAgIHZhciBkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoJycpO1xyXG4gICAgdmFyIGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiYXNlJyk7XHJcbiAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICBiYXNlLmhyZWYgPSBiYXNlSHJlZjtcclxuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcblxyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgaWYgKGRvYy5oZWFkKSB7XHJcbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jLmJvZHkpIHtcclxuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0eWxlLnNoZWV0ID8gZ2V0U2hlZXRGb250cyhzdHlsZS5zaGVldCwgZG9jKSA6IFtdO1xyXG59O1xyXG5cclxudmFyIHJlc3RvcmVPd25lclNjcm9sbCA9IGZ1bmN0aW9uIHJlc3RvcmVPd25lclNjcm9sbChvd25lckRvY3VtZW50LCB4LCB5KSB7XHJcbiAgICBpZiAob3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyAmJiAoeCAhPT0gb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5wYWdlWE9mZnNldCB8fCB5ICE9PSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0KSkge1xyXG4gICAgICAgIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuc2Nyb2xsVG8oeCwgeSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY2xvbmVDYW52YXNDb250ZW50cyA9IGZ1bmN0aW9uIGNsb25lQ2FudmFzQ29udGVudHMoY2FudmFzLCBjbG9uZWRDYW52YXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKGNsb25lZENhbnZhcykge1xyXG4gICAgICAgICAgICBjbG9uZWRDYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgICAgIGNsb25lZENhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIHZhciBjbG9uZWRDdHggPSBjbG9uZWRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkQ3R4LnB1dEltYWdlRGF0YShjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCksIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkQ3R4LmRyYXdJbWFnZShjYW52YXMsIDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge31cclxufTtcclxuXHJcbnZhciBpbmxpbmVQc2V1ZG9FbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lUHNldWRvRWxlbWVudChub2RlLCBjbG9uZSwgc3R5bGUsIGNvbnRlbnRJdGVtcywgcHNldWRvRWx0KSB7XHJcbiAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5jb250ZW50IHx8IHN0eWxlLmNvbnRlbnQgPT09ICdub25lJyB8fCBzdHlsZS5jb250ZW50ID09PSAnLW1vei1hbHQtY29udGVudCcgfHwgc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQgPSBjbG9uZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwyY2FudmFzcHNldWRvZWxlbWVudCcpO1xyXG4gICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKHN0eWxlLCBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChjb250ZW50SXRlbXMpIHtcclxuICAgICAgICB2YXIgbGVuID0gY29udGVudEl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gY29udGVudEl0ZW1zW2ldO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBfUHNldWRvTm9kZUNvbnRlbnQuUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLklNQUdFOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWcgPSBjbG9uZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSAoMCwgX2JhY2tncm91bmQucGFyc2VCYWNrZ3JvdW5kSW1hZ2UpKCd1cmwoJyArIGl0ZW0udmFsdWUgKyAnKScpWzBdLmFyZ3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIF9Qc2V1ZG9Ob2RlQ29udGVudC5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUuVEVYVDpcclxuICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXNSZXBsYWNlZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvbmUub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpdGVtLnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5vbnltb3VzUmVwbGFjZWRFbGVtZW50LmNsYXNzTmFtZSA9IFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQkVGT1JFICsgJyAnICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUjtcclxuICAgIGNsb25lLmNsYXNzTmFtZSArPSBwc2V1ZG9FbHQgPT09IFBTRVVET19CRUZPUkUgPyAnICcgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSA6ICcgJyArIFBTRVVET19ISURFX0VMRU1FTlRfQ0xBU1NfQUZURVI7XHJcbiAgICBpZiAocHNldWRvRWx0ID09PSBQU0VVRE9fQkVGT1JFKSB7XHJcbiAgICAgICAgY2xvbmUuaW5zZXJ0QmVmb3JlKGFub255bW91c1JlcGxhY2VkRWxlbWVudCwgY2xvbmUuZmlyc3RDaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb25lLmFwcGVuZENoaWxkKGFub255bW91c1JlcGxhY2VkRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFub255bW91c1JlcGxhY2VkRWxlbWVudDtcclxufTtcclxuXHJcbnZhciBVUkxfUkVHRVhQID0gL151cmxcXCgoLispXFwpJC9pO1xyXG52YXIgUFNFVURPX0JFRk9SRSA9ICc6YmVmb3JlJztcclxudmFyIFBTRVVET19BRlRFUiA9ICc6YWZ0ZXInO1xyXG52YXIgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19CRUZPUkUgPSAnX19faHRtbDJjYW52YXNfX19wc2V1ZG9lbGVtZW50X2JlZm9yZSc7XHJcbnZhciBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0FGVEVSID0gJ19fX2h0bWwyY2FudmFzX19fcHNldWRvZWxlbWVudF9hZnRlcic7XHJcblxyXG52YXIgUFNFVURPX0hJREVfRUxFTUVOVF9TVFlMRSA9ICd7XFxuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn0nO1xyXG5cclxudmFyIGNyZWF0ZVBzZXVkb0hpZGVTdHlsZXMgPSBmdW5jdGlvbiBjcmVhdGVQc2V1ZG9IaWRlU3R5bGVzKGJvZHkpIHtcclxuICAgIGNyZWF0ZVN0eWxlcyhib2R5LCAnLicgKyBQU0VVRE9fSElERV9FTEVNRU5UX0NMQVNTX0JFRk9SRSArIFBTRVVET19CRUZPUkUgKyBQU0VVRE9fSElERV9FTEVNRU5UX1NUWUxFICsgJ1xcbiAgICAgICAgIC4nICsgUFNFVURPX0hJREVfRUxFTUVOVF9DTEFTU19BRlRFUiArIFBTRVVET19BRlRFUiArIFBTRVVET19ISURFX0VMRU1FTlRfU1RZTEUpO1xyXG59O1xyXG5cclxudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhib2R5LCBzdHlsZXMpIHtcclxuICAgIHZhciBzdHlsZSA9IGJvZHkub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgc3R5bGUuaW5uZXJIVE1MID0gc3R5bGVzO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn07XHJcblxyXG52YXIgaW5pdE5vZGUgPSBmdW5jdGlvbiBpbml0Tm9kZShfcmVmKSB7XHJcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAzKSxcclxuICAgICAgICBlbGVtZW50ID0gX3JlZjJbMF0sXHJcbiAgICAgICAgeCA9IF9yZWYyWzFdLFxyXG4gICAgICAgIHkgPSBfcmVmMlsyXTtcclxuXHJcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB4O1xyXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB5O1xyXG59O1xyXG5cclxudmFyIGdlbmVyYXRlSWZyYW1lS2V5ID0gZnVuY3Rpb24gZ2VuZXJhdGVJZnJhbWVLZXkoKSB7XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApLnRvU3RyaW5nKDE2KTtcclxufTtcclxuXHJcbnZhciBEQVRBX1VSSV9SRUdFWFAgPSAvXmRhdGE6dGV4dFxcLyguKyk7KGJhc2U2NCk/LCguKikkL2k7XHJcblxyXG52YXIgZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50ID0gZnVuY3Rpb24gZ2V0SWZyYW1lRG9jdW1lbnRFbGVtZW50KG5vZGUsIG9wdGlvbnMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub2RlLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucy5wcm94eSA/ICgwLCBfUHJveHkuUHJveHkpKG5vZGUuc3JjLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IGh0bWwubWF0Y2goREFUQV9VUklfUkVHRVhQKTtcclxuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsyXSA9PT0gJ2Jhc2U2NCcgPyB3aW5kb3cuYXRvYihkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pKSA6IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSk7XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSWZyYW1lQ29udGFpbmVyKG5vZGUub3duZXJEb2N1bWVudCwgKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIDAsIDApKS50aGVuKGZ1bmN0aW9uIChjbG9uZUlmcmFtZUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsb25lV2luZG93ID0gY2xvbmVJZnJhbWVDb250YWluZXIuY29udGVudFdpbmRvdztcclxuICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudENsb25lID0gY2xvbmVXaW5kb3cuZG9jdW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5vcGVuKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudENsb25lLndyaXRlKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlmcmFtZUxvYWQgPSBpZnJhbWVMb2FkZXIoY2xvbmVJZnJhbWVDb250YWluZXIpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZnJhbWVMb2FkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSA6IFByb21pc2UucmVqZWN0KCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY3JlYXRlSWZyYW1lQ29udGFpbmVyID0gZnVuY3Rpb24gY3JlYXRlSWZyYW1lQ29udGFpbmVyKG93bmVyRG9jdW1lbnQsIGJvdW5kcykge1xyXG4gICAgdmFyIGNsb25lSWZyYW1lQ29udGFpbmVyID0gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuXHJcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnaHRtbDJjYW52YXMtY29udGFpbmVyJztcclxuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgIGNsb25lSWZyYW1lQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnLTEwMDAwcHgnO1xyXG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc3R5bGUudG9wID0gJzBweCc7XHJcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSAnMCc7XHJcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci53aWR0aCA9IGJvdW5kcy53aWR0aC50b1N0cmluZygpO1xyXG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuaGVpZ2h0ID0gYm91bmRzLmhlaWdodC50b1N0cmluZygpO1xyXG4gICAgY2xvbmVJZnJhbWVDb250YWluZXIuc2Nyb2xsaW5nID0gJ25vJzsgLy8gaW9zIHdvbid0IHNjcm9sbCB3aXRob3V0IGl0XHJcbiAgICBjbG9uZUlmcmFtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoSUdOT1JFX0FUVFJJQlVURSwgJ3RydWUnKTtcclxuICAgIGlmICghb3duZXJEb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnQm9keSBlbGVtZW50IG5vdCBmb3VuZCBpbiBEb2N1bWVudCB0aGF0IGlzIGdldHRpbmcgcmVuZGVyZWQnIDogJycpO1xyXG4gICAgfVxyXG5cclxuICAgIG93bmVyRG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZUlmcmFtZUNvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjbG9uZUlmcmFtZUNvbnRhaW5lcik7XHJcbn07XHJcblxyXG52YXIgaWZyYW1lTG9hZGVyID0gZnVuY3Rpb24gaWZyYW1lTG9hZGVyKGNsb25lSWZyYW1lQ29udGFpbmVyKSB7XHJcbiAgICB2YXIgY2xvbmVXaW5kb3cgPSBjbG9uZUlmcmFtZUNvbnRhaW5lci5jb250ZW50V2luZG93O1xyXG4gICAgdmFyIGRvY3VtZW50Q2xvbmUgPSBjbG9uZVdpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGNsb25lV2luZG93Lm9ubG9hZCA9IGNsb25lSWZyYW1lQ29udGFpbmVyLm9ubG9hZCA9IGRvY3VtZW50Q2xvbmUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnRDbG9uZS5ib2R5LmNoaWxkTm9kZXMubGVuZ3RoID4gMCAmJiBkb2N1bWVudENsb25lLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNsb25lSWZyYW1lQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBjbG9uZVdpbmRvdyA9IGV4cG9ydHMuY2xvbmVXaW5kb3cgPSBmdW5jdGlvbiBjbG9uZVdpbmRvdyhvd25lckRvY3VtZW50LCBib3VuZHMsIHJlZmVyZW5jZUVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgcmVuZGVyZXIpIHtcclxuICAgIHZhciBjbG9uZXIgPSBuZXcgRG9jdW1lbnRDbG9uZXIocmVmZXJlbmNlRWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyLCBmYWxzZSwgcmVuZGVyZXIpO1xyXG4gICAgdmFyIHNjcm9sbFggPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xyXG4gICAgdmFyIHNjcm9sbFkgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgIHJldHVybiBjcmVhdGVJZnJhbWVDb250YWluZXIob3duZXJEb2N1bWVudCwgYm91bmRzKS50aGVuKGZ1bmN0aW9uIChjbG9uZUlmcmFtZUNvbnRhaW5lcikge1xyXG4gICAgICAgIHZhciBjbG9uZVdpbmRvdyA9IGNsb25lSWZyYW1lQ29udGFpbmVyLmNvbnRlbnRXaW5kb3c7XHJcbiAgICAgICAgdmFyIGRvY3VtZW50Q2xvbmUgPSBjbG9uZVdpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgICAgICAgLyogQ2hyb21lIGRvZXNuJ3QgZGV0ZWN0IHJlbGF0aXZlIGJhY2tncm91bmQtaW1hZ2VzIGFzc2lnbmVkIGluIGlubGluZSA8c3R5bGU+IHNoZWV0cyB3aGVuIGZldGNoZWQgdGhyb3VnaCBnZXRDb21wdXRlZFN0eWxlXHJcbiAgICAgICAgICAgICBpZiB3aW5kb3cgdXJsIGlzIGFib3V0OmJsYW5rLCB3ZSBjYW4gYXNzaWduIHRoZSB1cmwgdG8gY3VycmVudCBieSB3cml0aW5nIG9udG8gdGhlIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICB2YXIgaWZyYW1lTG9hZCA9IGlmcmFtZUxvYWRlcihjbG9uZUlmcmFtZUNvbnRhaW5lcikudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsb25lci5zY3JvbGxlZEVsZW1lbnRzLmZvckVhY2goaW5pdE5vZGUpO1xyXG4gICAgICAgICAgICBjbG9uZVdpbmRvdy5zY3JvbGxUbyhib3VuZHMubGVmdCwgYm91bmRzLnRvcCk7XHJcbiAgICAgICAgICAgIGlmICgvKGlQYWR8aVBob25lfGlQb2QpL2cudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAoY2xvbmVXaW5kb3cuc2Nyb2xsWSAhPT0gYm91bmRzLnRvcCB8fCBjbG9uZVdpbmRvdy5zY3JvbGxYICE9PSBib3VuZHMubGVmdCkpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnRvcCA9IC1ib3VuZHMudG9wICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Q2xvbmUuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmxlZnQgPSAtYm91bmRzLmxlZnQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRDbG9uZS5kb2N1bWVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKFtjbG9uZUlmcmFtZUNvbnRhaW5lciwgY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQsIGNsb25lci5yZXNvdXJjZUxvYWRlcl0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9uY2xvbmUgPSBvcHRpb25zLm9uY2xvbmU7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgaW5zdGFuY2VvZiBjbG9uZVdpbmRvdy5IVE1MRWxlbWVudCB8fCBjbG9uZXIuY2xvbmVkUmVmZXJlbmNlRWxlbWVudCBpbnN0YW5jZW9mIG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuSFRNTEVsZW1lbnQgfHwgY2xvbmVyLmNsb25lZFJlZmVyZW5jZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IHR5cGVvZiBvbmNsb25lID09PSAnZnVuY3Rpb24nID8gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb25jbG9uZShkb2N1bWVudENsb25lKTtcclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9KSA6IHJlc3VsdCA6IFByb21pc2UucmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnRXJyb3IgZmluZGluZyB0aGUgJyArIHJlZmVyZW5jZUVsZW1lbnQubm9kZU5hbWUgKyAnIGluIHRoZSBjbG9uZWQgZG9jdW1lbnQnIDogJycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudENsb25lLm9wZW4oKTtcclxuICAgICAgICBkb2N1bWVudENsb25lLndyaXRlKHNlcmlhbGl6ZURvY3R5cGUoZG9jdW1lbnQuZG9jdHlwZSkgKyAnPGh0bWw+PC9odG1sPicpO1xyXG4gICAgICAgIC8vIENocm9tZSBzY3JvbGxzIHRoZSBwYXJlbnQgZG9jdW1lbnQgZm9yIHNvbWUgcmVhc29uIGFmdGVyIHRoZSB3cml0ZSB0byB0aGUgY2xvbmVkIHdpbmRvdz8/P1xyXG4gICAgICAgIHJlc3RvcmVPd25lclNjcm9sbChyZWZlcmVuY2VFbGVtZW50Lm93bmVyRG9jdW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpO1xyXG4gICAgICAgIGRvY3VtZW50Q2xvbmUucmVwbGFjZUNoaWxkKGRvY3VtZW50Q2xvbmUuYWRvcHROb2RlKGNsb25lci5kb2N1bWVudEVsZW1lbnQpLCBkb2N1bWVudENsb25lLmRvY3VtZW50RWxlbWVudCk7XHJcbiAgICAgICAgZG9jdW1lbnRDbG9uZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWZyYW1lTG9hZDtcclxuICAgIH0pO1xyXG59O1xyXG5cclxudmFyIHNlcmlhbGl6ZURvY3R5cGUgPSBmdW5jdGlvbiBzZXJpYWxpemVEb2N0eXBlKGRvY3R5cGUpIHtcclxuICAgIHZhciBzdHIgPSAnJztcclxuICAgIGlmIChkb2N0eXBlKSB7XHJcbiAgICAgICAgc3RyICs9ICc8IURPQ1RZUEUgJztcclxuICAgICAgICBpZiAoZG9jdHlwZS5uYW1lKSB7XHJcbiAgICAgICAgICAgIHN0ciArPSBkb2N0eXBlLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZG9jdHlwZS5pbnRlcm5hbFN1YnNldCkge1xyXG4gICAgICAgICAgICBzdHIgKz0gZG9jdHlwZS5pbnRlcm5hbFN1YnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkb2N0eXBlLnB1YmxpY0lkKSB7XHJcbiAgICAgICAgICAgIHN0ciArPSAnXCInICsgZG9jdHlwZS5wdWJsaWNJZCArICdcIic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZG9jdHlwZS5zeXN0ZW1JZCkge1xyXG4gICAgICAgICAgICBzdHIgKz0gJ1wiJyArIGRvY3R5cGUuc3lzdGVtSWQgKyAnXCInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyICs9ICc+JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RyO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci9cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcblxyXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XHJcblxyXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbnZhciBIRVgzID0gL14jKFthLWYwLTldezN9KSQvaTtcclxudmFyIGhleDMgPSBmdW5jdGlvbiBoZXgzKHZhbHVlKSB7XHJcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChIRVgzKTtcclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIHJldHVybiBbcGFyc2VJbnQobWF0Y2hbMV1bMF0gKyBtYXRjaFsxXVswXSwgMTYpLCBwYXJzZUludChtYXRjaFsxXVsxXSArIG1hdGNoWzFdWzFdLCAxNiksIHBhcnNlSW50KG1hdGNoWzFdWzJdICsgbWF0Y2hbMV1bMl0sIDE2KSwgbnVsbF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG52YXIgSEVYNiA9IC9eIyhbYS1mMC05XXs2fSkkL2k7XHJcbnZhciBoZXg2ID0gZnVuY3Rpb24gaGV4Nih2YWx1ZSkge1xyXG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goSEVYNik7XHJcbiAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4gW3BhcnNlSW50KG1hdGNoWzFdLnN1YnN0cmluZygwLCAyKSwgMTYpLCBwYXJzZUludChtYXRjaFsxXS5zdWJzdHJpbmcoMiwgNCksIDE2KSwgcGFyc2VJbnQobWF0Y2hbMV0uc3Vic3RyaW5nKDQsIDYpLCAxNiksIG51bGxdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxudmFyIFJHQiA9IC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkLztcclxudmFyIHJnYiA9IGZ1bmN0aW9uIHJnYih2YWx1ZSkge1xyXG4gICAgdmFyIG1hdGNoID0gdmFsdWUubWF0Y2goUkdCKTtcclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIHJldHVybiBbTnVtYmVyKG1hdGNoWzFdKSwgTnVtYmVyKG1hdGNoWzJdKSwgTnVtYmVyKG1hdGNoWzNdKSwgbnVsbF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG52YXIgUkdCQSA9IC9ecmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkP1xcLj9cXGQrKVxccypcXCkkLztcclxudmFyIHJnYmEgPSBmdW5jdGlvbiByZ2JhKHZhbHVlKSB7XHJcbiAgICB2YXIgbWF0Y2ggPSB2YWx1ZS5tYXRjaChSR0JBKTtcclxuICAgIGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIobWF0Y2hbMV0pLCBOdW1iZXIobWF0Y2hbMl0pLCBOdW1iZXIobWF0Y2hbM10pLCBOdW1iZXIobWF0Y2hbNF0pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbnZhciBmcm9tQXJyYXkgPSBmdW5jdGlvbiBmcm9tQXJyYXkoYXJyYXkpIHtcclxuICAgIHJldHVybiBbTWF0aC5taW4oYXJyYXlbMF0sIDI1NSksIE1hdGgubWluKGFycmF5WzFdLCAyNTUpLCBNYXRoLm1pbihhcnJheVsyXSwgMjU1KSwgYXJyYXkubGVuZ3RoID4gMyA/IGFycmF5WzNdIDogbnVsbF07XHJcbn07XHJcblxyXG52YXIgbmFtZWRDb2xvciA9IGZ1bmN0aW9uIG5hbWVkQ29sb3IobmFtZSkge1xyXG4gICAgdmFyIGNvbG9yID0gTkFNRURfQ09MT1JTW25hbWUudG9Mb3dlckNhc2UoKV07XHJcbiAgICByZXR1cm4gY29sb3IgPyBjb2xvciA6IGZhbHNlO1xyXG59O1xyXG5cclxudmFyIENvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sb3IodmFsdWUpIHtcclxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3IpO1xyXG5cclxuICAgICAgICB2YXIgX3JlZiA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gZnJvbUFycmF5KHZhbHVlKSA6IGhleDModmFsdWUpIHx8IHJnYih2YWx1ZSkgfHwgcmdiYSh2YWx1ZSkgfHwgbmFtZWRDb2xvcih2YWx1ZSkgfHwgaGV4Nih2YWx1ZSkgfHwgWzAsIDAsIDAsIG51bGxdLFxyXG4gICAgICAgICAgICBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDQpLFxyXG4gICAgICAgICAgICByID0gX3JlZjJbMF0sXHJcbiAgICAgICAgICAgIGcgPSBfcmVmMlsxXSxcclxuICAgICAgICAgICAgYiA9IF9yZWYyWzJdLFxyXG4gICAgICAgICAgICBhID0gX3JlZjJbM107XHJcblxyXG4gICAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgICAgdGhpcy5nID0gZztcclxuICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKENvbG9yLCBbe1xyXG4gICAgICAgIGtleTogJ2lzVHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RyYW5zcGFyZW50KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hID09PSAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICd0b1N0cmluZycsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hICE9PSBudWxsICYmIHRoaXMuYSAhPT0gMSA/ICdyZ2JhKCcgKyB0aGlzLnIgKyAnLCcgKyB0aGlzLmcgKyAnLCcgKyB0aGlzLmIgKyAnLCcgKyB0aGlzLmEgKyAnKScgOiAncmdiKCcgKyB0aGlzLnIgKyAnLCcgKyB0aGlzLmcgKyAnLCcgKyB0aGlzLmIgKyAnKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBDb2xvcjtcclxufSgpO1xyXG5cclxuZXhwb3J0cy5kZWZhdWx0ID0gQ29sb3I7XHJcblxyXG5cclxudmFyIE5BTUVEX0NPTE9SUyA9IHtcclxuICAgIHRyYW5zcGFyZW50OiBbMCwgMCwgMCwgMF0sXHJcbiAgICBhbGljZWJsdWU6IFsyNDAsIDI0OCwgMjU1LCBudWxsXSxcclxuICAgIGFudGlxdWV3aGl0ZTogWzI1MCwgMjM1LCAyMTUsIG51bGxdLFxyXG4gICAgYXF1YTogWzAsIDI1NSwgMjU1LCBudWxsXSxcclxuICAgIGFxdWFtYXJpbmU6IFsxMjcsIDI1NSwgMjEyLCBudWxsXSxcclxuICAgIGF6dXJlOiBbMjQwLCAyNTUsIDI1NSwgbnVsbF0sXHJcbiAgICBiZWlnZTogWzI0NSwgMjQ1LCAyMjAsIG51bGxdLFxyXG4gICAgYmlzcXVlOiBbMjU1LCAyMjgsIDE5NiwgbnVsbF0sXHJcbiAgICBibGFjazogWzAsIDAsIDAsIG51bGxdLFxyXG4gICAgYmxhbmNoZWRhbG1vbmQ6IFsyNTUsIDIzNSwgMjA1LCBudWxsXSxcclxuICAgIGJsdWU6IFswLCAwLCAyNTUsIG51bGxdLFxyXG4gICAgYmx1ZXZpb2xldDogWzEzOCwgNDMsIDIyNiwgbnVsbF0sXHJcbiAgICBicm93bjogWzE2NSwgNDIsIDQyLCBudWxsXSxcclxuICAgIGJ1cmx5d29vZDogWzIyMiwgMTg0LCAxMzUsIG51bGxdLFxyXG4gICAgY2FkZXRibHVlOiBbOTUsIDE1OCwgMTYwLCBudWxsXSxcclxuICAgIGNoYXJ0cmV1c2U6IFsxMjcsIDI1NSwgMCwgbnVsbF0sXHJcbiAgICBjaG9jb2xhdGU6IFsyMTAsIDEwNSwgMzAsIG51bGxdLFxyXG4gICAgY29yYWw6IFsyNTUsIDEyNywgODAsIG51bGxdLFxyXG4gICAgY29ybmZsb3dlcmJsdWU6IFsxMDAsIDE0OSwgMjM3LCBudWxsXSxcclxuICAgIGNvcm5zaWxrOiBbMjU1LCAyNDgsIDIyMCwgbnVsbF0sXHJcbiAgICBjcmltc29uOiBbMjIwLCAyMCwgNjAsIG51bGxdLFxyXG4gICAgY3lhbjogWzAsIDI1NSwgMjU1LCBudWxsXSxcclxuICAgIGRhcmtibHVlOiBbMCwgMCwgMTM5LCBudWxsXSxcclxuICAgIGRhcmtjeWFuOiBbMCwgMTM5LCAxMzksIG51bGxdLFxyXG4gICAgZGFya2dvbGRlbnJvZDogWzE4NCwgMTM0LCAxMSwgbnVsbF0sXHJcbiAgICBkYXJrZ3JheTogWzE2OSwgMTY5LCAxNjksIG51bGxdLFxyXG4gICAgZGFya2dyZWVuOiBbMCwgMTAwLCAwLCBudWxsXSxcclxuICAgIGRhcmtncmV5OiBbMTY5LCAxNjksIDE2OSwgbnVsbF0sXHJcbiAgICBkYXJra2hha2k6IFsxODksIDE4MywgMTA3LCBudWxsXSxcclxuICAgIGRhcmttYWdlbnRhOiBbMTM5LCAwLCAxMzksIG51bGxdLFxyXG4gICAgZGFya29saXZlZ3JlZW46IFs4NSwgMTA3LCA0NywgbnVsbF0sXHJcbiAgICBkYXJrb3JhbmdlOiBbMjU1LCAxNDAsIDAsIG51bGxdLFxyXG4gICAgZGFya29yY2hpZDogWzE1MywgNTAsIDIwNCwgbnVsbF0sXHJcbiAgICBkYXJrcmVkOiBbMTM5LCAwLCAwLCBudWxsXSxcclxuICAgIGRhcmtzYWxtb246IFsyMzMsIDE1MCwgMTIyLCBudWxsXSxcclxuICAgIGRhcmtzZWFncmVlbjogWzE0MywgMTg4LCAxNDMsIG51bGxdLFxyXG4gICAgZGFya3NsYXRlYmx1ZTogWzcyLCA2MSwgMTM5LCBudWxsXSxcclxuICAgIGRhcmtzbGF0ZWdyYXk6IFs0NywgNzksIDc5LCBudWxsXSxcclxuICAgIGRhcmtzbGF0ZWdyZXk6IFs0NywgNzksIDc5LCBudWxsXSxcclxuICAgIGRhcmt0dXJxdW9pc2U6IFswLCAyMDYsIDIwOSwgbnVsbF0sXHJcbiAgICBkYXJrdmlvbGV0OiBbMTQ4LCAwLCAyMTEsIG51bGxdLFxyXG4gICAgZGVlcHBpbms6IFsyNTUsIDIwLCAxNDcsIG51bGxdLFxyXG4gICAgZGVlcHNreWJsdWU6IFswLCAxOTEsIDI1NSwgbnVsbF0sXHJcbiAgICBkaW1ncmF5OiBbMTA1LCAxMDUsIDEwNSwgbnVsbF0sXHJcbiAgICBkaW1ncmV5OiBbMTA1LCAxMDUsIDEwNSwgbnVsbF0sXHJcbiAgICBkb2RnZXJibHVlOiBbMzAsIDE0NCwgMjU1LCBudWxsXSxcclxuICAgIGZpcmVicmljazogWzE3OCwgMzQsIDM0LCBudWxsXSxcclxuICAgIGZsb3JhbHdoaXRlOiBbMjU1LCAyNTAsIDI0MCwgbnVsbF0sXHJcbiAgICBmb3Jlc3RncmVlbjogWzM0LCAxMzksIDM0LCBudWxsXSxcclxuICAgIGZ1Y2hzaWE6IFsyNTUsIDAsIDI1NSwgbnVsbF0sXHJcbiAgICBnYWluc2Jvcm86IFsyMjAsIDIyMCwgMjIwLCBudWxsXSxcclxuICAgIGdob3N0d2hpdGU6IFsyNDgsIDI0OCwgMjU1LCBudWxsXSxcclxuICAgIGdvbGQ6IFsyNTUsIDIxNSwgMCwgbnVsbF0sXHJcbiAgICBnb2xkZW5yb2Q6IFsyMTgsIDE2NSwgMzIsIG51bGxdLFxyXG4gICAgZ3JheTogWzEyOCwgMTI4LCAxMjgsIG51bGxdLFxyXG4gICAgZ3JlZW46IFswLCAxMjgsIDAsIG51bGxdLFxyXG4gICAgZ3JlZW55ZWxsb3c6IFsxNzMsIDI1NSwgNDcsIG51bGxdLFxyXG4gICAgZ3JleTogWzEyOCwgMTI4LCAxMjgsIG51bGxdLFxyXG4gICAgaG9uZXlkZXc6IFsyNDAsIDI1NSwgMjQwLCBudWxsXSxcclxuICAgIGhvdHBpbms6IFsyNTUsIDEwNSwgMTgwLCBudWxsXSxcclxuICAgIGluZGlhbnJlZDogWzIwNSwgOTIsIDkyLCBudWxsXSxcclxuICAgIGluZGlnbzogWzc1LCAwLCAxMzAsIG51bGxdLFxyXG4gICAgaXZvcnk6IFsyNTUsIDI1NSwgMjQwLCBudWxsXSxcclxuICAgIGtoYWtpOiBbMjQwLCAyMzAsIDE0MCwgbnVsbF0sXHJcbiAgICBsYXZlbmRlcjogWzIzMCwgMjMwLCAyNTAsIG51bGxdLFxyXG4gICAgbGF2ZW5kZXJibHVzaDogWzI1NSwgMjQwLCAyNDUsIG51bGxdLFxyXG4gICAgbGF3bmdyZWVuOiBbMTI0LCAyNTIsIDAsIG51bGxdLFxyXG4gICAgbGVtb25jaGlmZm9uOiBbMjU1LCAyNTAsIDIwNSwgbnVsbF0sXHJcbiAgICBsaWdodGJsdWU6IFsxNzMsIDIxNiwgMjMwLCBudWxsXSxcclxuICAgIGxpZ2h0Y29yYWw6IFsyNDAsIDEyOCwgMTI4LCBudWxsXSxcclxuICAgIGxpZ2h0Y3lhbjogWzIyNCwgMjU1LCAyNTUsIG51bGxdLFxyXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFsyNTAsIDI1MCwgMjEwLCBudWxsXSxcclxuICAgIGxpZ2h0Z3JheTogWzIxMSwgMjExLCAyMTEsIG51bGxdLFxyXG4gICAgbGlnaHRncmVlbjogWzE0NCwgMjM4LCAxNDQsIG51bGxdLFxyXG4gICAgbGlnaHRncmV5OiBbMjExLCAyMTEsIDIxMSwgbnVsbF0sXHJcbiAgICBsaWdodHBpbms6IFsyNTUsIDE4MiwgMTkzLCBudWxsXSxcclxuICAgIGxpZ2h0c2FsbW9uOiBbMjU1LCAxNjAsIDEyMiwgbnVsbF0sXHJcbiAgICBsaWdodHNlYWdyZWVuOiBbMzIsIDE3OCwgMTcwLCBudWxsXSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyNTAsIG51bGxdLFxyXG4gICAgbGlnaHRzbGF0ZWdyYXk6IFsxMTksIDEzNiwgMTUzLCBudWxsXSxcclxuICAgIGxpZ2h0c2xhdGVncmV5OiBbMTE5LCAxMzYsIDE1MywgbnVsbF0sXHJcbiAgICBsaWdodHN0ZWVsYmx1ZTogWzE3NiwgMTk2LCAyMjIsIG51bGxdLFxyXG4gICAgbGlnaHR5ZWxsb3c6IFsyNTUsIDI1NSwgMjI0LCBudWxsXSxcclxuICAgIGxpbWU6IFswLCAyNTUsIDAsIG51bGxdLFxyXG4gICAgbGltZWdyZWVuOiBbNTAsIDIwNSwgNTAsIG51bGxdLFxyXG4gICAgbGluZW46IFsyNTAsIDI0MCwgMjMwLCBudWxsXSxcclxuICAgIG1hZ2VudGE6IFsyNTUsIDAsIDI1NSwgbnVsbF0sXHJcbiAgICBtYXJvb246IFsxMjgsIDAsIDAsIG51bGxdLFxyXG4gICAgbWVkaXVtYXF1YW1hcmluZTogWzEwMiwgMjA1LCAxNzAsIG51bGxdLFxyXG4gICAgbWVkaXVtYmx1ZTogWzAsIDAsIDIwNSwgbnVsbF0sXHJcbiAgICBtZWRpdW1vcmNoaWQ6IFsxODYsIDg1LCAyMTEsIG51bGxdLFxyXG4gICAgbWVkaXVtcHVycGxlOiBbMTQ3LCAxMTIsIDIxOSwgbnVsbF0sXHJcbiAgICBtZWRpdW1zZWFncmVlbjogWzYwLCAxNzksIDExMywgbnVsbF0sXHJcbiAgICBtZWRpdW1zbGF0ZWJsdWU6IFsxMjMsIDEwNCwgMjM4LCBudWxsXSxcclxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiBbMCwgMjUwLCAxNTQsIG51bGxdLFxyXG4gICAgbWVkaXVtdHVycXVvaXNlOiBbNzIsIDIwOSwgMjA0LCBudWxsXSxcclxuICAgIG1lZGl1bXZpb2xldHJlZDogWzE5OSwgMjEsIDEzMywgbnVsbF0sXHJcbiAgICBtaWRuaWdodGJsdWU6IFsyNSwgMjUsIDExMiwgbnVsbF0sXHJcbiAgICBtaW50Y3JlYW06IFsyNDUsIDI1NSwgMjUwLCBudWxsXSxcclxuICAgIG1pc3R5cm9zZTogWzI1NSwgMjI4LCAyMjUsIG51bGxdLFxyXG4gICAgbW9jY2FzaW46IFsyNTUsIDIyOCwgMTgxLCBudWxsXSxcclxuICAgIG5hdmFqb3doaXRlOiBbMjU1LCAyMjIsIDE3MywgbnVsbF0sXHJcbiAgICBuYXZ5OiBbMCwgMCwgMTI4LCBudWxsXSxcclxuICAgIG9sZGxhY2U6IFsyNTMsIDI0NSwgMjMwLCBudWxsXSxcclxuICAgIG9saXZlOiBbMTI4LCAxMjgsIDAsIG51bGxdLFxyXG4gICAgb2xpdmVkcmFiOiBbMTA3LCAxNDIsIDM1LCBudWxsXSxcclxuICAgIG9yYW5nZTogWzI1NSwgMTY1LCAwLCBudWxsXSxcclxuICAgIG9yYW5nZXJlZDogWzI1NSwgNjksIDAsIG51bGxdLFxyXG4gICAgb3JjaGlkOiBbMjE4LCAxMTIsIDIxNCwgbnVsbF0sXHJcbiAgICBwYWxlZ29sZGVucm9kOiBbMjM4LCAyMzIsIDE3MCwgbnVsbF0sXHJcbiAgICBwYWxlZ3JlZW46IFsxNTIsIDI1MSwgMTUyLCBudWxsXSxcclxuICAgIHBhbGV0dXJxdW9pc2U6IFsxNzUsIDIzOCwgMjM4LCBudWxsXSxcclxuICAgIHBhbGV2aW9sZXRyZWQ6IFsyMTksIDExMiwgMTQ3LCBudWxsXSxcclxuICAgIHBhcGF5YXdoaXA6IFsyNTUsIDIzOSwgMjEzLCBudWxsXSxcclxuICAgIHBlYWNocHVmZjogWzI1NSwgMjE4LCAxODUsIG51bGxdLFxyXG4gICAgcGVydTogWzIwNSwgMTMzLCA2MywgbnVsbF0sXHJcbiAgICBwaW5rOiBbMjU1LCAxOTIsIDIwMywgbnVsbF0sXHJcbiAgICBwbHVtOiBbMjIxLCAxNjAsIDIyMSwgbnVsbF0sXHJcbiAgICBwb3dkZXJibHVlOiBbMTc2LCAyMjQsIDIzMCwgbnVsbF0sXHJcbiAgICBwdXJwbGU6IFsxMjgsIDAsIDEyOCwgbnVsbF0sXHJcbiAgICByZWJlY2NhcHVycGxlOiBbMTAyLCA1MSwgMTUzLCBudWxsXSxcclxuICAgIHJlZDogWzI1NSwgMCwgMCwgbnVsbF0sXHJcbiAgICByb3N5YnJvd246IFsxODgsIDE0MywgMTQzLCBudWxsXSxcclxuICAgIHJveWFsYmx1ZTogWzY1LCAxMDUsIDIyNSwgbnVsbF0sXHJcbiAgICBzYWRkbGVicm93bjogWzEzOSwgNjksIDE5LCBudWxsXSxcclxuICAgIHNhbG1vbjogWzI1MCwgMTI4LCAxMTQsIG51bGxdLFxyXG4gICAgc2FuZHlicm93bjogWzI0NCwgMTY0LCA5NiwgbnVsbF0sXHJcbiAgICBzZWFncmVlbjogWzQ2LCAxMzksIDg3LCBudWxsXSxcclxuICAgIHNlYXNoZWxsOiBbMjU1LCAyNDUsIDIzOCwgbnVsbF0sXHJcbiAgICBzaWVubmE6IFsxNjAsIDgyLCA0NSwgbnVsbF0sXHJcbiAgICBzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyLCBudWxsXSxcclxuICAgIHNreWJsdWU6IFsxMzUsIDIwNiwgMjM1LCBudWxsXSxcclxuICAgIHNsYXRlYmx1ZTogWzEwNiwgOTAsIDIwNSwgbnVsbF0sXHJcbiAgICBzbGF0ZWdyYXk6IFsxMTIsIDEyOCwgMTQ0LCBudWxsXSxcclxuICAgIHNsYXRlZ3JleTogWzExMiwgMTI4LCAxNDQsIG51bGxdLFxyXG4gICAgc25vdzogWzI1NSwgMjUwLCAyNTAsIG51bGxdLFxyXG4gICAgc3ByaW5nZ3JlZW46IFswLCAyNTUsIDEyNywgbnVsbF0sXHJcbiAgICBzdGVlbGJsdWU6IFs3MCwgMTMwLCAxODAsIG51bGxdLFxyXG4gICAgdGFuOiBbMjEwLCAxODAsIDE0MCwgbnVsbF0sXHJcbiAgICB0ZWFsOiBbMCwgMTI4LCAxMjgsIG51bGxdLFxyXG4gICAgdGhpc3RsZTogWzIxNiwgMTkxLCAyMTYsIG51bGxdLFxyXG4gICAgdG9tYXRvOiBbMjU1LCA5OSwgNzEsIG51bGxdLFxyXG4gICAgdHVycXVvaXNlOiBbNjQsIDIyNCwgMjA4LCBudWxsXSxcclxuICAgIHZpb2xldDogWzIzOCwgMTMwLCAyMzgsIG51bGxdLFxyXG4gICAgd2hlYXQ6IFsyNDUsIDIyMiwgMTc5LCBudWxsXSxcclxuICAgIHdoaXRlOiBbMjU1LCAyNTUsIDI1NSwgbnVsbF0sXHJcbiAgICB3aGl0ZXNtb2tlOiBbMjQ1LCAyNDUsIDI0NSwgbnVsbF0sXHJcbiAgICB5ZWxsb3c6IFsyNTUsIDI1NSwgMCwgbnVsbF0sXHJcbiAgICB5ZWxsb3dncmVlbjogWzE1NCwgMjA1LCA1MCwgbnVsbF1cclxufTtcclxuXHJcbnZhciBUUkFOU1BBUkVOVCA9IGV4cG9ydHMuVFJBTlNQQVJFTlQgPSBuZXcgQ29sb3IoWzAsIDAsIDAsIDBdKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5cclxudmFyIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0ZvcmVpZ25PYmplY3RSZW5kZXJlcicpO1xyXG5cclxudmFyIHRlc3RSYW5nZUJvdW5kcyA9IGZ1bmN0aW9uIHRlc3RSYW5nZUJvdW5kcyhkb2N1bWVudCkge1xyXG4gICAgdmFyIFRFU1RfSEVJR0hUID0gMTIzO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5jcmVhdGVSYW5nZSkge1xyXG4gICAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgaWYgKHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xyXG4gICAgICAgICAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib3VuZHRlc3QnKTtcclxuICAgICAgICAgICAgdGVzdEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gVEVTVF9IRUlHSFQgKyAncHgnO1xyXG4gICAgICAgICAgICB0ZXN0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXN0RWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlKHRlc3RFbGVtZW50KTtcclxuICAgICAgICAgICAgdmFyIHJhbmdlQm91bmRzID0gcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIHZhciByYW5nZUhlaWdodCA9IE1hdGgucm91bmQocmFuZ2VCb3VuZHMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXN0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmIChyYW5nZUhlaWdodCA9PT0gVEVTVF9IRUlHSFQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbi8vIGlPUyAxMC4zIHRhaW50cyBjYW52YXMgd2l0aCBiYXNlNjQgaW1hZ2VzIHVubGVzcyBjcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXHJcbnZhciB0ZXN0QmFzZTY0ID0gZnVuY3Rpb24gdGVzdEJhc2U2NChkb2N1bWVudCwgc3JjKSB7XHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgLy8gU2luZ2xlIHBpeGVsIGJhc2U2NCBpbWFnZSByZW5kZXJzIGZpbmUgb24gaU9TIDEwLjM/Pz9cclxuICAgICAgICBpbWcuc3JjID0gc3JjO1xyXG5cclxuICAgICAgICB2YXIgb25sb2FkID0gZnVuY3Rpb24gb25sb2FkKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGltZy5vbmxvYWQgPSBvbmxvYWQ7XHJcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb25sb2FkKCk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgdGVzdENPUlMgPSBmdW5jdGlvbiB0ZXN0Q09SUygpIHtcclxuICAgIHJldHVybiB0eXBlb2YgbmV3IEltYWdlKCkuY3Jvc3NPcmlnaW4gIT09ICd1bmRlZmluZWQnO1xyXG59O1xyXG5cclxudmFyIHRlc3RSZXNwb25zZVR5cGUgPSBmdW5jdGlvbiB0ZXN0UmVzcG9uc2VUeXBlKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBuZXcgWE1MSHR0cFJlcXVlc3QoKS5yZXNwb25zZVR5cGUgPT09ICdzdHJpbmcnO1xyXG59O1xyXG5cclxudmFyIHRlc3RTVkcgPSBmdW5jdGlvbiB0ZXN0U1ZHKGRvY3VtZW50KSB7XHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVxcJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFwnPjwvc3ZnPic7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XHJcbiAgICAgICAgY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxudmFyIGlzR3JlZW5QaXhlbCA9IGZ1bmN0aW9uIGlzR3JlZW5QaXhlbChkYXRhKSB7XHJcbiAgICByZXR1cm4gZGF0YVswXSA9PT0gMCAmJiBkYXRhWzFdID09PSAyNTUgJiYgZGF0YVsyXSA9PT0gMCAmJiBkYXRhWzNdID09PSAyNTU7XHJcbn07XHJcblxyXG52YXIgdGVzdEZvcmVpZ25PYmplY3QgPSBmdW5jdGlvbiB0ZXN0Rm9yZWlnbk9iamVjdChkb2N1bWVudCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgdmFyIHNpemUgPSAxMDA7XHJcbiAgICBjYW52YXMud2lkdGggPSBzaXplO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHNpemU7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYigwLCAyNTUsIDApJztcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcclxuXHJcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB2YXIgZ3JlZW5JbWFnZVNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgIGltZy5zcmMgPSBncmVlbkltYWdlU3JjO1xyXG4gICAgdmFyIHN2ZyA9ICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmNyZWF0ZUZvcmVpZ25PYmplY3RTVkcpKHNpemUsIHNpemUsIDAsIDAsIGltZyk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmxvYWRTZXJpYWxpemVkU1ZHKShzdmcpLnRoZW4oZnVuY3Rpb24gKGltZykge1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcclxuICAgICAgICB2YXIgZGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSkuZGF0YTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xyXG5cclxuICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgZ3JlZW5JbWFnZVNyYyArICcpJztcclxuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xyXG4gICAgICAgIC8vIEZpcmVmb3ggNTUgZG9lcyBub3QgcmVuZGVyIGlubGluZSA8aW1nIC8+IHRhZ3NcclxuICAgICAgICByZXR1cm4gaXNHcmVlblBpeGVsKGRhdGEpID8gKDAsIF9Gb3JlaWduT2JqZWN0UmVuZGVyZXIubG9hZFNlcmlhbGl6ZWRTVkcpKCgwLCBfRm9yZWlnbk9iamVjdFJlbmRlcmVyLmNyZWF0ZUZvcmVpZ25PYmplY3RTVkcpKHNpemUsIHNpemUsIDAsIDAsIG5vZGUpKSA6IFByb21pc2UucmVqZWN0KGZhbHNlKTtcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGltZykge1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcclxuICAgICAgICAvLyBFZGdlIGRvZXMgbm90IHJlbmRlciBiYWNrZ3JvdW5kLWltYWdlc1xyXG4gICAgICAgIHJldHVybiBpc0dyZWVuUGl4ZWwoY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKS5kYXRhKTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgRkVBVFVSRVMgPSB7XHJcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAgICBnZXQgU1VQUE9SVF9SQU5HRV9CT1VORFMoKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0ZXN0UmFuZ2VCb3VuZHMoZG9jdW1lbnQpO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfUkFOR0VfQk9VTkRTJywgeyB2YWx1ZTogdmFsdWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSxcclxuICAgIC8vICRGbG93Rml4TWUgLSBnZXQvc2V0IHByb3BlcnRpZXMgbm90IHlldCBzdXBwb3J0ZWRcclxuICAgIGdldCBTVVBQT1JUX1NWR19EUkFXSU5HKCkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFNWRyhkb2N1bWVudCk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9TVkdfRFJBV0lORycsIHsgdmFsdWU6IHZhbHVlIH0pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0sXHJcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAgICBnZXQgU1VQUE9SVF9CQVNFNjRfRFJBV0lORygpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3JjKSB7XHJcbiAgICAgICAgICAgIHZhciBfdmFsdWUgPSB0ZXN0QmFzZTY0KGRvY3VtZW50LCBzcmMpO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0JBU0U2NF9EUkFXSU5HJywgeyB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAgICBnZXQgU1VQUE9SVF9GT1JFSUdOT0JKRUNUX0RSQVdJTkcoKSB7XHJcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgQXJyYXkuZnJvbSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygd2luZG93LmZldGNoID09PSAnZnVuY3Rpb24nID8gdGVzdEZvcmVpZ25PYmplY3QoZG9jdW1lbnQpIDogUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRkVBVFVSRVMsICdTVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORycsIHsgdmFsdWU6IHZhbHVlIH0pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0sXHJcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAgICBnZXQgU1VQUE9SVF9DT1JTX0lNQUdFUygpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRlc3RDT1JTKCk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZFQVRVUkVTLCAnU1VQUE9SVF9DT1JTX0lNQUdFUycsIHsgdmFsdWU6IHZhbHVlIH0pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0sXHJcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAgICBnZXQgU1VQUE9SVF9SRVNQT05TRV9UWVBFKCkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGVzdFJlc3BvbnNlVHlwZSgpO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfUkVTUE9OU0VfVFlQRScsIHsgdmFsdWU6IHZhbHVlIH0pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0sXHJcbiAgICAvLyAkRmxvd0ZpeE1lIC0gZ2V0L3NldCBwcm9wZXJ0aWVzIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAgICBnZXQgU1VQUE9SVF9DT1JTX1hIUigpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9ICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGRUFUVVJFUywgJ1NVUFBPUlRfQ09SU19YSFInLCB7IHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBGRUFUVVJFUzsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgICAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5Gb250TWV0cmljcyA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG52YXIgU0FNUExFX1RFWFQgPSAnSGlkZGVuIFRleHQnO1xyXG5cclxudmFyIEZvbnRNZXRyaWNzID0gZXhwb3J0cy5Gb250TWV0cmljcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBGb250TWV0cmljcyhkb2N1bWVudCkge1xyXG4gICAgICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRNZXRyaWNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2NyZWF0ZUNsYXNzKEZvbnRNZXRyaWNzLCBbe1xyXG4gICAgICAgICAgICAgICAga2V5OiAnX3BhcnNlTWV0cmljcycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3BhcnNlTWV0cmljcyhmb250KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BhbiA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gdGhpcy5fZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFib2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnTm8gZG9jdW1lbnQgZm91bmQgZm9yIGZvbnQgbWV0cmljcycgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5mb250RmFtaWx5ID0gZm9udC5mb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZm9udFNpemUgPSBmb250LmZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUubWFyZ2luID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcwJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBfVXRpbC5TTUFMTF9JTUFHRTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLndpZHRoID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmhlaWdodCA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnYmFzZWxpbmUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5mb250RmFtaWx5ID0gZm9udC5mb250RmFtaWx5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLnN0eWxlLmZvbnRTaXplID0gZm9udC5mb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5tYXJnaW4gPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUucGFkZGluZyA9ICcwJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodGhpcy5fZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU0FNUExFX1RFWFQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2VsaW5lID0gaW1nLm9mZnNldFRvcCAtIHNwYW4ub2Zmc2V0VG9wICsgMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKFNBTVBMRV9URVhUKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUubGluZUhlaWdodCA9ICdub3JtYWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUudmVydGljYWxBbGlnbiA9ICdzdXBlcic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlkZGxlID0gaW1nLm9mZnNldFRvcCAtIGNvbnRhaW5lci5vZmZzZXRUb3AgKyAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgYmFzZWxpbmU6IGJhc2VsaW5lLCBtaWRkbGU6IG1pZGRsZSB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2dldE1ldHJpY3MnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1ldHJpY3MoZm9udCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gZm9udC5mb250RmFtaWx5ICsgJyAnICsgZm9udC5mb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gdGhpcy5fcGFyc2VNZXRyaWNzKGZvbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEZvbnRNZXRyaWNzO1xyXG59KCk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy50cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBleHBvcnRzLnBhcnNlR3JhZGllbnQgPSBleHBvcnRzLlJhZGlhbEdyYWRpZW50ID0gZXhwb3J0cy5MaW5lYXJHcmFkaWVudCA9IGV4cG9ydHMuUkFESUFMX0dSQURJRU5UX1NIQVBFID0gZXhwb3J0cy5HUkFESUVOVF9UWVBFID0gdW5kZWZpbmVkO1xyXG5cclxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xyXG5cclxudmFyIF9Ob2RlQ29udGFpbmVyID0gcmVxdWlyZSgnLi9Ob2RlQ29udGFpbmVyJyk7XHJcblxyXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XHJcblxyXG52YXIgX0FuZ2xlID0gcmVxdWlyZSgnLi9BbmdsZScpO1xyXG5cclxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4vQ29sb3InKTtcclxuXHJcbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xyXG5cclxudmFyIF9MZW5ndGggPSByZXF1aXJlKCcuL0xlbmd0aCcpO1xyXG5cclxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcclxuXHJcbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG52YXIgU0lERV9PUl9DT1JORVIgPSAvXih0byApPyhsZWZ0fHRvcHxyaWdodHxib3R0b20pKCAobGVmdHx0b3B8cmlnaHR8Ym90dG9tKSk/JC9pO1xyXG52YXIgUEVSQ0VOVEFHRV9BTkdMRVMgPSAvXihbKy1dP1xcZCpcXC4/XFxkKyklIChbKy1dP1xcZCpcXC4/XFxkKyklJC9pO1xyXG52YXIgRU5EU19XSVRIX0xFTkdUSCA9IC8ocHgpfCV8KCAwKSQvaTtcclxudmFyIEZST01fVE9fQ09MT1JTVE9QID0gL14oZnJvbXx0b3xjb2xvci1zdG9wKVxcKCg/OihbXFxkLl0rKSglKT8sXFxzKik/KC4rPylcXCkkL2k7XHJcbnZhciBSQURJQUxfU0hBUEVfREVGSU5JVElPTiA9IC9eXFxzKihjaXJjbGV8ZWxsaXBzZSk/XFxzKigoPzooW1xcZC5dKykocHh8cj9lbXwlKVxccyooPzooW1xcZC5dKykocHh8cj9lbXwlKSk/KXxjbG9zZXN0LXNpZGV8Y2xvc2VzdC1jb3JuZXJ8ZmFydGhlc3Qtc2lkZXxmYXJ0aGVzdC1jb3JuZXIpP1xccyooPzphdFxccyooPzoobGVmdHxjZW50ZXJ8cmlnaHQpfChbXFxkLl0rKShweHxyP2VtfCUpKVxccysoPzoodG9wfGNlbnRlcnxib3R0b20pfChbXFxkLl0rKShweHxyP2VtfCUpKSk/KD86XFxzfCQpL2k7XHJcblxyXG52YXIgR1JBRElFTlRfVFlQRSA9IGV4cG9ydHMuR1JBRElFTlRfVFlQRSA9IHtcclxuICAgIExJTkVBUl9HUkFESUVOVDogMCxcclxuICAgIFJBRElBTF9HUkFESUVOVDogMVxyXG59O1xyXG5cclxudmFyIFJBRElBTF9HUkFESUVOVF9TSEFQRSA9IGV4cG9ydHMuUkFESUFMX0dSQURJRU5UX1NIQVBFID0ge1xyXG4gICAgQ0lSQ0xFOiAwLFxyXG4gICAgRUxMSVBTRTogMVxyXG59O1xyXG5cclxudmFyIExFTkdUSF9GT1JfUE9TSVRJT04gPSB7XHJcbiAgICBsZWZ0OiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKSxcclxuICAgIHRvcDogbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzAlJyksXHJcbiAgICBjZW50ZXI6IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCc1MCUnKSxcclxuICAgIHJpZ2h0OiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpLFxyXG4gICAgYm90dG9tOiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpXHJcbn07XHJcblxyXG52YXIgTGluZWFyR3JhZGllbnQgPSBleHBvcnRzLkxpbmVhckdyYWRpZW50ID0gZnVuY3Rpb24gTGluZWFyR3JhZGllbnQoY29sb3JTdG9wcywgZGlyZWN0aW9uKSB7XHJcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluZWFyR3JhZGllbnQpO1xyXG5cclxuICAgIHRoaXMudHlwZSA9IEdSQURJRU5UX1RZUEUuTElORUFSX0dSQURJRU5UO1xyXG4gICAgdGhpcy5jb2xvclN0b3BzID0gY29sb3JTdG9wcztcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG59O1xyXG5cclxudmFyIFJhZGlhbEdyYWRpZW50ID0gZXhwb3J0cy5SYWRpYWxHcmFkaWVudCA9IGZ1bmN0aW9uIFJhZGlhbEdyYWRpZW50KGNvbG9yU3RvcHMsIHNoYXBlLCBjZW50ZXIsIHJhZGl1cykge1xyXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhZGlhbEdyYWRpZW50KTtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSBHUkFESUVOVF9UWVBFLlJBRElBTF9HUkFESUVOVDtcclxuICAgIHRoaXMuY29sb3JTdG9wcyA9IGNvbG9yU3RvcHM7XHJcbiAgICB0aGlzLnNoYXBlID0gc2hhcGU7XHJcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG59O1xyXG5cclxudmFyIHBhcnNlR3JhZGllbnQgPSBleHBvcnRzLnBhcnNlR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZUdyYWRpZW50KGNvbnRhaW5lciwgX3JlZiwgYm91bmRzKSB7XHJcbiAgICB2YXIgYXJncyA9IF9yZWYuYXJncyxcclxuICAgICAgICBtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICBwcmVmaXggPSBfcmVmLnByZWZpeDtcclxuXHJcbiAgICBpZiAobWV0aG9kID09PSAnbGluZWFyLWdyYWRpZW50Jykge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVhckdyYWRpZW50KGFyZ3MsIGJvdW5kcywgISFwcmVmaXgpO1xyXG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdncmFkaWVudCcgJiYgYXJnc1swXSA9PT0gJ2xpbmVhcicpIHtcclxuICAgICAgICAvLyBUT0RPIGhhbmRsZSBjb3JyZWN0IGFuZ2xlXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZWFyR3JhZGllbnQoWyd0byBib3R0b20nXS5jb25jYXQodHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKGFyZ3Muc2xpY2UoMykpKSwgYm91bmRzLCAhIXByZWZpeCk7XHJcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ3JhZGlhbC1ncmFkaWVudCcpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIHByZWZpeCA9PT0gJy13ZWJraXQtJyA/IHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyhhcmdzKSA6IGFyZ3MsIGJvdW5kcyk7XHJcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2dyYWRpZW50JyAmJiBhcmdzWzBdID09PSAncmFkaWFsJykge1xyXG4gICAgICAgIHJldHVybiBwYXJzZVJhZGlhbEdyYWRpZW50KGNvbnRhaW5lciwgdHJhbnNmb3JtT2Jzb2xldGVDb2xvclN0b3BzKHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyhhcmdzLnNsaWNlKDEpKSksIGJvdW5kcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcGFyc2VDb2xvclN0b3BzID0gZnVuY3Rpb24gcGFyc2VDb2xvclN0b3BzKGFyZ3MsIGZpcnN0Q29sb3JTdG9wSW5kZXgsIGxpbmVMZW5ndGgpIHtcclxuICAgIHZhciBjb2xvclN0b3BzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IGZpcnN0Q29sb3JTdG9wSW5kZXg7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gYXJnc1tpXTtcclxuICAgICAgICB2YXIgSEFTX0xFTkdUSCA9IEVORFNfV0lUSF9MRU5HVEgudGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgdmFyIGxhc3RTcGFjZUluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJyAnKTtcclxuICAgICAgICB2YXIgX2NvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChIQVNfTEVOR1RIID8gdmFsdWUuc3Vic3RyaW5nKDAsIGxhc3RTcGFjZUluZGV4KSA6IHZhbHVlKTtcclxuICAgICAgICB2YXIgX3N0b3AgPSBIQVNfTEVOR1RIID8gbmV3IF9MZW5ndGgyLmRlZmF1bHQodmFsdWUuc3Vic3RyaW5nKGxhc3RTcGFjZUluZGV4ICsgMSkpIDogaSA9PT0gZmlyc3RDb2xvclN0b3BJbmRleCA/IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJScpIDogaSA9PT0gYXJncy5sZW5ndGggLSAxID8gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzEwMCUnKSA6IG51bGw7XHJcbiAgICAgICAgY29sb3JTdG9wcy5wdXNoKHsgY29sb3I6IF9jb2xvciwgc3RvcDogX3N0b3AgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFic29sdXRlVmFsdWVkQ29sb3JTdG9wcyA9IGNvbG9yU3RvcHMubWFwKGZ1bmN0aW9uIChfcmVmMikge1xyXG4gICAgICAgIHZhciBjb2xvciA9IF9yZWYyLmNvbG9yLFxyXG4gICAgICAgICAgICBzdG9wID0gX3JlZjIuc3RvcDtcclxuXHJcbiAgICAgICAgdmFyIGFic29sdXRlU3RvcCA9IGxpbmVMZW5ndGggPT09IDAgPyAwIDogc3RvcCA/IHN0b3AuZ2V0QWJzb2x1dGVWYWx1ZShsaW5lTGVuZ3RoKSAvIGxpbmVMZW5ndGggOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICAgICAgc3RvcDogYWJzb2x1dGVTdG9wXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwcmV2aW91c0NvbG9yU3RvcCA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1swXS5zdG9wO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wcy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBpZiAocHJldmlvdXNDb2xvclN0b3AgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIF9zdG9wMiA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tfaV0uc3RvcDtcclxuICAgICAgICAgICAgaWYgKF9zdG9wMiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG4gPSBfaTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChhYnNvbHV0ZVZhbHVlZENvbG9yU3RvcHNbbl0uc3RvcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG4rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzdGVwcyA9IG4gLSBfaSArIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dENvbG9yU3RlcCA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tuXS5zdG9wO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ZXBTaXplID0gKG5leHRDb2xvclN0ZXAgLSBwcmV2aW91c0NvbG9yU3RvcCkgLyBzdGVwcztcclxuICAgICAgICAgICAgICAgIGZvciAoOyBfaSA8IG47IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0NvbG9yU3RvcCA9IGFic29sdXRlVmFsdWVkQ29sb3JTdG9wc1tfaV0uc3RvcCA9IHByZXZpb3VzQ29sb3JTdG9wICsgc3RlcFNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NvbG9yU3RvcCA9IF9zdG9wMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWJzb2x1dGVWYWx1ZWRDb2xvclN0b3BzO1xyXG59O1xyXG5cclxudmFyIHBhcnNlTGluZWFyR3JhZGllbnQgPSBmdW5jdGlvbiBwYXJzZUxpbmVhckdyYWRpZW50KGFyZ3MsIGJvdW5kcywgaGFzUHJlZml4KSB7XHJcbiAgICB2YXIgYW5nbGUgPSAoMCwgX0FuZ2xlLnBhcnNlQW5nbGUpKGFyZ3NbMF0pO1xyXG4gICAgdmFyIEhBU19TSURFX09SX0NPUk5FUiA9IFNJREVfT1JfQ09STkVSLnRlc3QoYXJnc1swXSk7XHJcbiAgICB2YXIgSEFTX0RJUkVDVElPTiA9IEhBU19TSURFX09SX0NPUk5FUiB8fCBhbmdsZSAhPT0gbnVsbCB8fCBQRVJDRU5UQUdFX0FOR0xFUy50ZXN0KGFyZ3NbMF0pO1xyXG4gICAgdmFyIGRpcmVjdGlvbiA9IEhBU19ESVJFQ1RJT04gPyBhbmdsZSAhPT0gbnVsbCA/IGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKFxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBwcmVmaXgsIHRoZSAwwrAgYW5nbGUgcG9pbnRzIGR1ZSBFYXN0IChpbnN0ZWFkIG9mIE5vcnRoIHBlciBXM0MpXHJcbiAgICBoYXNQcmVmaXggPyBhbmdsZSAtIE1hdGguUEkgKiAwLjUgOiBhbmdsZSwgYm91bmRzKSA6IEhBU19TSURFX09SX0NPUk5FUiA/IHBhcnNlU2lkZU9yQ29ybmVyKGFyZ3NbMF0sIGJvdW5kcykgOiBwYXJzZVBlcmNlbnRhZ2VBbmdsZShhcmdzWzBdLCBib3VuZHMpIDogY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oTWF0aC5QSSwgYm91bmRzKTtcclxuICAgIHZhciBmaXJzdENvbG9yU3RvcEluZGV4ID0gSEFTX0RJUkVDVElPTiA/IDEgOiAwO1xyXG5cclxuICAgIC8vIFRPRE86IEZpeCBzb21lIGluYWNjdXJhY3kgd2l0aCBjb2xvciBzdG9wcyB3aXRoIHB4IHZhbHVlc1xyXG4gICAgdmFyIGxpbmVMZW5ndGggPSBNYXRoLm1pbigoMCwgX1V0aWwuZGlzdGFuY2UpKE1hdGguYWJzKGRpcmVjdGlvbi54MCkgKyBNYXRoLmFicyhkaXJlY3Rpb24ueDEpLCBNYXRoLmFicyhkaXJlY3Rpb24ueTApICsgTWF0aC5hYnMoZGlyZWN0aW9uLnkxKSksIGJvdW5kcy53aWR0aCAqIDIsIGJvdW5kcy5oZWlnaHQgKiAyKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IExpbmVhckdyYWRpZW50KHBhcnNlQ29sb3JTdG9wcyhhcmdzLCBmaXJzdENvbG9yU3RvcEluZGV4LCBsaW5lTGVuZ3RoKSwgZGlyZWN0aW9uKTtcclxufTtcclxuXHJcbnZhciBwYXJzZVJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24gcGFyc2VSYWRpYWxHcmFkaWVudChjb250YWluZXIsIGFyZ3MsIGJvdW5kcykge1xyXG4gICAgdmFyIG0gPSBhcmdzWzBdLm1hdGNoKFJBRElBTF9TSEFQRV9ERUZJTklUSU9OKTtcclxuICAgIHZhciBzaGFwZSA9IG0gJiYgKG1bMV0gPT09ICdjaXJjbGUnIHx8IC8vIGV4cGxpY2l0IHNoYXBlIHNwZWNpZmljYXRpb25cclxuICAgIG1bM10gIT09IHVuZGVmaW5lZCAmJiBtWzVdID09PSB1bmRlZmluZWQpIC8vIG9ubHkgb25lIHJhZGl1cyBjb29yZGluYXRlXHJcbiAgICA/IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUgOiBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRTtcclxuICAgIHZhciByYWRpdXMgPSB7fTtcclxuICAgIHZhciBjZW50ZXIgPSB7fTtcclxuXHJcbiAgICBpZiAobSkge1xyXG4gICAgICAgIC8vIFJhZGl1c1xyXG4gICAgICAgIGlmIChtWzNdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmFkaXVzLnggPSAoMCwgX0xlbmd0aC5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCkoY29udGFpbmVyLCBtWzNdLCBtWzRdKS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobVs1XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJhZGl1cy55ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVs1XSwgbVs2XSkuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9uXHJcbiAgICAgICAgaWYgKG1bN10pIHtcclxuICAgICAgICAgICAgY2VudGVyLnggPSBMRU5HVEhfRk9SX1BPU0lUSU9OW21bN10udG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgfSBlbHNlIGlmIChtWzhdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2VudGVyLnggPSAoMCwgX0xlbmd0aC5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCkoY29udGFpbmVyLCBtWzhdLCBtWzldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtWzEwXSkge1xyXG4gICAgICAgICAgICBjZW50ZXIueSA9IExFTkdUSF9GT1JfUE9TSVRJT05bbVsxMF0udG9Mb3dlckNhc2UoKV07XHJcbiAgICAgICAgfSBlbHNlIGlmIChtWzExXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNlbnRlci55ID0gKDAsIF9MZW5ndGguY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQpKGNvbnRhaW5lciwgbVsxMV0sIG1bMTJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdyYWRpZW50Q2VudGVyID0ge1xyXG4gICAgICAgIHg6IGNlbnRlci54ID09PSB1bmRlZmluZWQgPyBib3VuZHMud2lkdGggLyAyIDogY2VudGVyLnguZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpLFxyXG4gICAgICAgIHk6IGNlbnRlci55ID09PSB1bmRlZmluZWQgPyBib3VuZHMuaGVpZ2h0IC8gMiA6IGNlbnRlci55LmdldEFic29sdXRlVmFsdWUoYm91bmRzLmhlaWdodClcclxuICAgIH07XHJcbiAgICB2YXIgZ3JhZGllbnRSYWRpdXMgPSBjYWxjdWxhdGVSYWRpdXMobSAmJiBtWzJdIHx8ICdmYXJ0aGVzdC1jb3JuZXInLCBzaGFwZSwgZ3JhZGllbnRDZW50ZXIsIHJhZGl1cywgYm91bmRzKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJhZGlhbEdyYWRpZW50KHBhcnNlQ29sb3JTdG9wcyhhcmdzLCBtID8gMSA6IDAsIE1hdGgubWluKGdyYWRpZW50UmFkaXVzLngsIGdyYWRpZW50UmFkaXVzLnkpKSwgc2hhcGUsIGdyYWRpZW50Q2VudGVyLCBncmFkaWVudFJhZGl1cyk7XHJcbn07XHJcblxyXG52YXIgY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24gPSBmdW5jdGlvbiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihyYWRpYW4sIGJvdW5kcykge1xyXG4gICAgdmFyIHdpZHRoID0gYm91bmRzLndpZHRoO1xyXG4gICAgdmFyIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XHJcbiAgICB2YXIgSEFMRl9XSURUSCA9IHdpZHRoICogMC41O1xyXG4gICAgdmFyIEhBTEZfSEVJR0hUID0gaGVpZ2h0ICogMC41O1xyXG4gICAgdmFyIGxpbmVMZW5ndGggPSBNYXRoLmFicyh3aWR0aCAqIE1hdGguc2luKHJhZGlhbikpICsgTWF0aC5hYnMoaGVpZ2h0ICogTWF0aC5jb3MocmFkaWFuKSk7XHJcbiAgICB2YXIgSEFMRl9MSU5FX0xFTkdUSCA9IGxpbmVMZW5ndGggLyAyO1xyXG5cclxuICAgIHZhciB4MCA9IEhBTEZfV0lEVEggKyBNYXRoLnNpbihyYWRpYW4pICogSEFMRl9MSU5FX0xFTkdUSDtcclxuICAgIHZhciB5MCA9IEhBTEZfSEVJR0hUIC0gTWF0aC5jb3MocmFkaWFuKSAqIEhBTEZfTElORV9MRU5HVEg7XHJcbiAgICB2YXIgeDEgPSB3aWR0aCAtIHgwO1xyXG4gICAgdmFyIHkxID0gaGVpZ2h0IC0geTA7XHJcblxyXG4gICAgcmV0dXJuIHsgeDA6IHgwLCB4MTogeDEsIHkwOiB5MCwgeTE6IHkxIH07XHJcbn07XHJcblxyXG52YXIgcGFyc2VUb3BSaWdodCA9IGZ1bmN0aW9uIHBhcnNlVG9wUmlnaHQoYm91bmRzKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hY29zKGJvdW5kcy53aWR0aCAvIDIgLyAoKDAsIF9VdGlsLmRpc3RhbmNlKShib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQpIC8gMikpO1xyXG59O1xyXG5cclxudmFyIHBhcnNlU2lkZU9yQ29ybmVyID0gZnVuY3Rpb24gcGFyc2VTaWRlT3JDb3JuZXIoc2lkZSwgYm91bmRzKSB7XHJcbiAgICBzd2l0Y2ggKHNpZGUpIHtcclxuICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIGNhc2UgJ3RvIHRvcCc6XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbigwLCBib3VuZHMpO1xyXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGNhc2UgJ3RvIHJpZ2h0JzpcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEkgLyAyLCBib3VuZHMpO1xyXG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICBjYXNlICd0byBsZWZ0JzpcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKDMgKiBNYXRoLlBJIC8gMiwgYm91bmRzKTtcclxuICAgICAgICBjYXNlICd0b3AgcmlnaHQnOlxyXG4gICAgICAgIGNhc2UgJ3JpZ2h0IHRvcCc6XHJcbiAgICAgICAgY2FzZSAndG8gYm90dG9tIGxlZnQnOlxyXG4gICAgICAgIGNhc2UgJ3RvIGxlZnQgYm90dG9tJzpcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZUdyYWRpZW50RGlyZWN0aW9uKE1hdGguUEkgKyBwYXJzZVRvcFJpZ2h0KGJvdW5kcyksIGJvdW5kcyk7XHJcbiAgICAgICAgY2FzZSAndG9wIGxlZnQnOlxyXG4gICAgICAgIGNhc2UgJ2xlZnQgdG9wJzpcclxuICAgICAgICBjYXNlICd0byBib3R0b20gcmlnaHQnOlxyXG4gICAgICAgIGNhc2UgJ3RvIHJpZ2h0IGJvdHRvbSc6XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJIC0gcGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xyXG4gICAgICAgIGNhc2UgJ2JvdHRvbSBsZWZ0JzpcclxuICAgICAgICBjYXNlICdsZWZ0IGJvdHRvbSc6XHJcbiAgICAgICAgY2FzZSAndG8gdG9wIHJpZ2h0JzpcclxuICAgICAgICBjYXNlICd0byByaWdodCB0b3AnOlxyXG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24ocGFyc2VUb3BSaWdodChib3VuZHMpLCBib3VuZHMpO1xyXG4gICAgICAgIGNhc2UgJ2JvdHRvbSByaWdodCc6XHJcbiAgICAgICAgY2FzZSAncmlnaHQgYm90dG9tJzpcclxuICAgICAgICBjYXNlICd0byB0b3AgbGVmdCc6XHJcbiAgICAgICAgY2FzZSAndG8gbGVmdCB0b3AnOlxyXG4gICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlR3JhZGllbnREaXJlY3Rpb24oMiAqIE1hdGguUEkgLSBwYXJzZVRvcFJpZ2h0KGJvdW5kcyksIGJvdW5kcyk7XHJcbiAgICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICBjYXNlICd0byBib3R0b20nOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLlBJLCBib3VuZHMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHBhcnNlUGVyY2VudGFnZUFuZ2xlID0gZnVuY3Rpb24gcGFyc2VQZXJjZW50YWdlQW5nbGUoYW5nbGUsIGJvdW5kcykge1xyXG4gICAgdmFyIF9hbmdsZSRzcGxpdCRtYXAgPSBhbmdsZS5zcGxpdCgnICcpLm1hcChwYXJzZUZsb2F0KSxcclxuICAgICAgICBfYW5nbGUkc3BsaXQkbWFwMiA9IF9zbGljZWRUb0FycmF5KF9hbmdsZSRzcGxpdCRtYXAsIDIpLFxyXG4gICAgICAgIGxlZnQgPSBfYW5nbGUkc3BsaXQkbWFwMlswXSxcclxuICAgICAgICB0b3AgPSBfYW5nbGUkc3BsaXQkbWFwMlsxXTtcclxuXHJcbiAgICB2YXIgcmF0aW8gPSBsZWZ0IC8gMTAwICogYm91bmRzLndpZHRoIC8gKHRvcCAvIDEwMCAqIGJvdW5kcy5oZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiBjYWxjdWxhdGVHcmFkaWVudERpcmVjdGlvbihNYXRoLmF0YW4oaXNOYU4ocmF0aW8pID8gMSA6IHJhdGlvKSArIE1hdGguUEkgLyAyLCBib3VuZHMpO1xyXG59O1xyXG5cclxudmFyIGZpbmRDb3JuZXIgPSBmdW5jdGlvbiBmaW5kQ29ybmVyKGJvdW5kcywgeCwgeSwgY2xvc2VzdCkge1xyXG4gICAgdmFyIGNvcm5lcnMgPSBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogYm91bmRzLmhlaWdodCB9LCB7IHg6IGJvdW5kcy53aWR0aCwgeTogMCB9LCB7IHg6IGJvdW5kcy53aWR0aCwgeTogYm91bmRzLmhlaWdodCB9XTtcclxuXHJcbiAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICByZXR1cm4gY29ybmVycy5yZWR1Y2UoZnVuY3Rpb24gKHN0YXQsIGNvcm5lcikge1xyXG4gICAgICAgIHZhciBkID0gKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gY29ybmVyLngsIHkgLSBjb3JuZXIueSk7XHJcbiAgICAgICAgaWYgKGNsb3Nlc3QgPyBkIDwgc3RhdC5vcHRpbXVtRGlzdGFuY2UgOiBkID4gc3RhdC5vcHRpbXVtRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9wdGltdW1Db3JuZXI6IGNvcm5lcixcclxuICAgICAgICAgICAgICAgIG9wdGltdW1EaXN0YW5jZTogZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXQ7XHJcbiAgICB9LCB7XHJcbiAgICAgICAgb3B0aW11bURpc3RhbmNlOiBjbG9zZXN0ID8gSW5maW5pdHkgOiAtSW5maW5pdHksXHJcbiAgICAgICAgb3B0aW11bUNvcm5lcjogbnVsbFxyXG4gICAgfSkub3B0aW11bUNvcm5lcjtcclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVSYWRpdXMgPSBmdW5jdGlvbiBjYWxjdWxhdGVSYWRpdXMoZXh0ZW50LCBzaGFwZSwgY2VudGVyLCByYWRpdXMsIGJvdW5kcykge1xyXG4gICAgdmFyIHggPSBjZW50ZXIueDtcclxuICAgIHZhciB5ID0gY2VudGVyLnk7XHJcbiAgICB2YXIgcnggPSAwO1xyXG4gICAgdmFyIHJ5ID0gMDtcclxuXHJcbiAgICBzd2l0Y2ggKGV4dGVudCkge1xyXG4gICAgICAgIGNhc2UgJ2Nsb3Nlc3Qtc2lkZSc6XHJcbiAgICAgICAgICAgIC8vIFRoZSBlbmRpbmcgc2hhcGUgaXMgc2l6ZWQgc28gdGhhdCB0aGF0IGl0IGV4YWN0bHkgbWVldHMgdGhlIHNpZGUgb2YgdGhlIGdyYWRpZW50IGJveCBjbG9zZXN0IHRvIHRoZSBncmFkaWVudOKAmXMgY2VudGVyLlxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2hhcGUgaXMgYW4gZWxsaXBzZSwgaXQgZXhhY3RseSBtZWV0cyB0aGUgY2xvc2VzdCBzaWRlIGluIGVhY2ggZGltZW5zaW9uLlxyXG4gICAgICAgICAgICBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUpIHtcclxuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1pbihNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCksIE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xyXG4gICAgICAgICAgICAgICAgcnggPSBNYXRoLm1pbihNYXRoLmFicyh4KSwgTWF0aC5hYnMoeCAtIGJvdW5kcy53aWR0aCkpO1xyXG4gICAgICAgICAgICAgICAgcnkgPSBNYXRoLm1pbihNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnY2xvc2VzdC1jb3JuZXInOlxyXG4gICAgICAgICAgICAvLyBUaGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIHNvIHRoYXQgdGhhdCBpdCBwYXNzZXMgdGhyb3VnaCB0aGUgY29ybmVyIG9mIHRoZSBncmFkaWVudCBib3ggY2xvc2VzdCB0byB0aGUgZ3JhZGllbnTigJlzIGNlbnRlci5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIHNoYXBlIGlzIGFuIGVsbGlwc2UsIHRoZSBlbmRpbmcgc2hhcGUgaXMgZ2l2ZW4gdGhlIHNhbWUgYXNwZWN0LXJhdGlvIGl0IHdvdWxkIGhhdmUgaWYgY2xvc2VzdC1zaWRlIHdlcmUgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUpIHtcclxuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1pbigoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkgLSBib3VuZHMuaGVpZ2h0KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5IC0gYm91bmRzLmhlaWdodCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcmF0aW8gcnkvcnggKHdoaWNoIGlzIHRvIGJlIHRoZSBzYW1lIGFzIGZvciBcImNsb3Nlc3Qtc2lkZVwiKVxyXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBNYXRoLm1pbihNYXRoLmFicyh5KSwgTWF0aC5hYnMoeSAtIGJvdW5kcy5oZWlnaHQpKSAvIE1hdGgubWluKE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29ybmVyID0gZmluZENvcm5lcihib3VuZHMsIHgsIHksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcnggPSAoMCwgX1V0aWwuZGlzdGFuY2UpKGNvcm5lci54IC0geCwgKGNvcm5lci55IC0geSkgLyBjKTtcclxuICAgICAgICAgICAgICAgIHJ5ID0gYyAqIHJ4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdmYXJ0aGVzdC1zaWRlJzpcclxuICAgICAgICAgICAgLy8gU2FtZSBhcyBjbG9zZXN0LXNpZGUsIGV4Y2VwdCB0aGUgZW5kaW5nIHNoYXBlIGlzIHNpemVkIGJhc2VkIG9uIHRoZSBmYXJ0aGVzdCBzaWRlKHMpXHJcbiAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gUkFESUFMX0dSQURJRU5UX1NIQVBFLkNJUkNMRSkge1xyXG4gICAgICAgICAgICAgICAgcnggPSByeSA9IE1hdGgubWF4KE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSwgTWF0aC5hYnMoeSksIE1hdGguYWJzKHkgLSBib3VuZHMuaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5FTExJUFNFKSB7XHJcbiAgICAgICAgICAgICAgICByeCA9IE1hdGgubWF4KE1hdGguYWJzKHgpLCBNYXRoLmFicyh4IC0gYm91bmRzLndpZHRoKSk7XHJcbiAgICAgICAgICAgICAgICByeSA9IE1hdGgubWF4KE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdmYXJ0aGVzdC1jb3JuZXInOlxyXG4gICAgICAgICAgICAvLyBTYW1lIGFzIGNsb3Nlc3QtY29ybmVyLCBleGNlcHQgdGhlIGVuZGluZyBzaGFwZSBpcyBzaXplZCBiYXNlZCBvbiB0aGUgZmFydGhlc3QgY29ybmVyLlxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2hhcGUgaXMgYW4gZWxsaXBzZSwgdGhlIGVuZGluZyBzaGFwZSBpcyBnaXZlbiB0aGUgc2FtZSBhc3BlY3QgcmF0aW8gaXQgd291bGQgaGF2ZSBpZiBmYXJ0aGVzdC1zaWRlIHdlcmUgc3BlY2lmaWVkLlxyXG4gICAgICAgICAgICBpZiAoc2hhcGUgPT09IFJBRElBTF9HUkFESUVOVF9TSEFQRS5DSVJDTEUpIHtcclxuICAgICAgICAgICAgICAgIHJ4ID0gcnkgPSBNYXRoLm1heCgoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkpLCAoMCwgX1V0aWwuZGlzdGFuY2UpKHgsIHkgLSBib3VuZHMuaGVpZ2h0KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5KSwgKDAsIF9VdGlsLmRpc3RhbmNlKSh4IC0gYm91bmRzLndpZHRoLCB5IC0gYm91bmRzLmhlaWdodCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoYXBlID09PSBSQURJQUxfR1JBRElFTlRfU0hBUEUuRUxMSVBTRSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcmF0aW8gcnkvcnggKHdoaWNoIGlzIHRvIGJlIHRoZSBzYW1lIGFzIGZvciBcImZhcnRoZXN0LXNpZGVcIilcclxuICAgICAgICAgICAgICAgIHZhciBfYyA9IE1hdGgubWF4KE1hdGguYWJzKHkpLCBNYXRoLmFicyh5IC0gYm91bmRzLmhlaWdodCkpIC8gTWF0aC5tYXgoTWF0aC5hYnMoeCksIE1hdGguYWJzKHggLSBib3VuZHMud2lkdGgpKTtcclxuICAgICAgICAgICAgICAgIHZhciBfY29ybmVyID0gZmluZENvcm5lcihib3VuZHMsIHgsIHksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJ4ID0gKDAsIF9VdGlsLmRpc3RhbmNlKShfY29ybmVyLnggLSB4LCAoX2Nvcm5lci55IC0geSkgLyBfYyk7XHJcbiAgICAgICAgICAgICAgICByeSA9IF9jICogcng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIHBpeGVsIG9yIHBlcmNlbnRhZ2UgdmFsdWVzXHJcbiAgICAgICAgICAgIHJ4ID0gcmFkaXVzLnggfHwgMDtcclxuICAgICAgICAgICAgcnkgPSByYWRpdXMueSAhPT0gdW5kZWZpbmVkID8gcmFkaXVzLnkgOiByeDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB4OiByeCxcclxuICAgICAgICB5OiByeVxyXG4gICAgfTtcclxufTtcclxuXHJcbnZhciB0cmFuc2Zvcm1XZWJraXRSYWRpYWxHcmFkaWVudEFyZ3MgPSBleHBvcnRzLnRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyA9IGZ1bmN0aW9uIHRyYW5zZm9ybVdlYmtpdFJhZGlhbEdyYWRpZW50QXJncyhhcmdzKSB7XHJcbiAgICB2YXIgc2hhcGUgPSAnJztcclxuICAgIHZhciByYWRpdXMgPSAnJztcclxuICAgIHZhciBleHRlbnQgPSAnJztcclxuICAgIHZhciBwb3NpdGlvbiA9ICcnO1xyXG4gICAgdmFyIGlkeCA9IDA7XHJcblxyXG4gICAgdmFyIFBPU0lUSU9OID0gL14obGVmdHxjZW50ZXJ8cmlnaHR8XFxkKyg/OnB4fHI/ZW18JSk/KSg/OlxccysodG9wfGNlbnRlcnxib3R0b218XFxkKyg/OnB4fHI/ZW18JSk/KSk/JC9pO1xyXG4gICAgdmFyIFNIQVBFX0FORF9FWFRFTlQgPSAvXihjaXJjbGV8ZWxsaXBzZSk/XFxzKihjbG9zZXN0LXNpZGV8Y2xvc2VzdC1jb3JuZXJ8ZmFydGhlc3Qtc2lkZXxmYXJ0aGVzdC1jb3JuZXJ8Y29udGFpbnxjb3Zlcik/JC9pO1xyXG4gICAgdmFyIFJBRElVUyA9IC9eXFxkKyhweHxyP2VtfCUpPyg/OlxccytcXGQrKHB4fHI/ZW18JSk/KT8kL2k7XHJcblxyXG4gICAgdmFyIG1hdGNoU3RhcnRQb3NpdGlvbiA9IGFyZ3NbaWR4XS5tYXRjaChQT1NJVElPTik7XHJcbiAgICBpZiAobWF0Y2hTdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgaWR4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hdGNoU2hhcGVFeHRlbnQgPSBhcmdzW2lkeF0ubWF0Y2goU0hBUEVfQU5EX0VYVEVOVCk7XHJcbiAgICBpZiAobWF0Y2hTaGFwZUV4dGVudCkge1xyXG4gICAgICAgIHNoYXBlID0gbWF0Y2hTaGFwZUV4dGVudFsxXSB8fCAnJztcclxuICAgICAgICBleHRlbnQgPSBtYXRjaFNoYXBlRXh0ZW50WzJdIHx8ICcnO1xyXG4gICAgICAgIGlmIChleHRlbnQgPT09ICdjb250YWluJykge1xyXG4gICAgICAgICAgICBleHRlbnQgPSAnY2xvc2VzdC1zaWRlJztcclxuICAgICAgICB9IGVsc2UgaWYgKGV4dGVudCA9PT0gJ2NvdmVyJykge1xyXG4gICAgICAgICAgICBleHRlbnQgPSAnZmFydGhlc3QtY29ybmVyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWR4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hdGNoU3RhcnRSYWRpdXMgPSBhcmdzW2lkeF0ubWF0Y2goUkFESVVTKTtcclxuICAgIGlmIChtYXRjaFN0YXJ0UmFkaXVzKSB7XHJcbiAgICAgICAgaWR4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hdGNoRW5kUG9zaXRpb24gPSBhcmdzW2lkeF0ubWF0Y2goUE9TSVRJT04pO1xyXG4gICAgaWYgKG1hdGNoRW5kUG9zaXRpb24pIHtcclxuICAgICAgICBpZHgrKztcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWF0Y2hFbmRSYWRpdXMgPSBhcmdzW2lkeF0ubWF0Y2goUkFESVVTKTtcclxuICAgIGlmIChtYXRjaEVuZFJhZGl1cykge1xyXG4gICAgICAgIGlkeCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtYXRjaFBvc2l0aW9uID0gbWF0Y2hFbmRQb3NpdGlvbiB8fCBtYXRjaFN0YXJ0UG9zaXRpb247XHJcbiAgICBpZiAobWF0Y2hQb3NpdGlvbiAmJiBtYXRjaFBvc2l0aW9uWzFdKSB7XHJcbiAgICAgICAgcG9zaXRpb24gPSBtYXRjaFBvc2l0aW9uWzFdICsgKC9eXFxkKyQvLnRlc3QobWF0Y2hQb3NpdGlvblsxXSkgPyAncHgnIDogJycpO1xyXG4gICAgICAgIGlmIChtYXRjaFBvc2l0aW9uWzJdKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uICs9ICcgJyArIG1hdGNoUG9zaXRpb25bMl0gKyAoL15cXGQrJC8udGVzdChtYXRjaFBvc2l0aW9uWzJdKSA/ICdweCcgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBtYXRjaFJhZGl1cyA9IG1hdGNoRW5kUmFkaXVzIHx8IG1hdGNoU3RhcnRSYWRpdXM7XHJcbiAgICBpZiAobWF0Y2hSYWRpdXMpIHtcclxuICAgICAgICByYWRpdXMgPSBtYXRjaFJhZGl1c1swXTtcclxuICAgICAgICBpZiAoIW1hdGNoUmFkaXVzWzFdKSB7XHJcbiAgICAgICAgICAgIHJhZGl1cyArPSAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9zaXRpb24gJiYgIXNoYXBlICYmICFyYWRpdXMgJiYgIWV4dGVudCkge1xyXG4gICAgICAgIHJhZGl1cyA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHBvc2l0aW9uID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgcG9zaXRpb24gPSAnYXQgJyArIHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbW3NoYXBlLCBleHRlbnQsIHJhZGl1cywgcG9zaXRpb25dLmZpbHRlcihmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHJldHVybiAhIXM7XHJcbiAgICB9KS5qb2luKCcgJyldLmNvbmNhdChhcmdzLnNsaWNlKGlkeCkpO1xyXG59O1xyXG5cclxudmFyIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyA9IGZ1bmN0aW9uIHRyYW5zZm9ybU9ic29sZXRlQ29sb3JTdG9wcyhhcmdzKSB7XHJcbiAgICByZXR1cm4gYXJncy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yLm1hdGNoKEZST01fVE9fQ09MT1JTVE9QKTtcclxuICAgIH0pXHJcbiAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAubWFwKGZ1bmN0aW9uICh2LCBpbmRleCkge1xyXG4gICAgICAgIGlmICghdikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJnc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHZbMV0pIHtcclxuICAgICAgICAgICAgY2FzZSAnZnJvbSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgMCUnO1xyXG4gICAgICAgICAgICBjYXNlICd0byc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdls0XSArICcgMTAwJSc7XHJcbiAgICAgICAgICAgIGNhc2UgJ2NvbG9yLXN0b3AnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZbM10gPT09ICclJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAnICsgdlsyXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2WzRdICsgJyAnICsgcGFyc2VGbG9hdCh2WzJdKSAqIDEwMCArICclJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnJlZm9ybWF0SW5wdXRCb3VuZHMgPSBleHBvcnRzLmlubGluZVNlbGVjdEVsZW1lbnQgPSBleHBvcnRzLmlubGluZVRleHRBcmVhRWxlbWVudCA9IGV4cG9ydHMuaW5saW5lSW5wdXRFbGVtZW50ID0gZXhwb3J0cy5nZXRJbnB1dEJvcmRlclJhZGl1cyA9IGV4cG9ydHMuSU5QVVRfQkFDS0dST1VORCA9IGV4cG9ydHMuSU5QVVRfQk9SREVSUyA9IGV4cG9ydHMuSU5QVVRfQ09MT1IgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX1RleHRDb250YWluZXIgPSByZXF1aXJlKCcuL1RleHRDb250YWluZXInKTtcclxuXHJcbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcclxuXHJcbnZhciBfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vcGFyc2luZy9iYWNrZ3JvdW5kJyk7XHJcblxyXG52YXIgX2JvcmRlciA9IHJlcXVpcmUoJy4vcGFyc2luZy9ib3JkZXInKTtcclxuXHJcbnZhciBfQ2lyY2xlID0gcmVxdWlyZSgnLi9kcmF3aW5nL0NpcmNsZScpO1xyXG5cclxudmFyIF9DaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2lyY2xlKTtcclxuXHJcbnZhciBfVmVjdG9yID0gcmVxdWlyZSgnLi9kcmF3aW5nL1ZlY3RvcicpO1xyXG5cclxudmFyIF9WZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmVjdG9yKTtcclxuXHJcbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuL0NvbG9yJyk7XHJcblxyXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcclxuXHJcbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi9MZW5ndGgnKTtcclxuXHJcbnZhciBfTGVuZ3RoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xlbmd0aCk7XHJcblxyXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XHJcblxyXG52YXIgX1RleHRCb3VuZHMgPSByZXF1aXJlKCcuL1RleHRCb3VuZHMnKTtcclxuXHJcbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbnZhciBJTlBVVF9DT0xPUiA9IGV4cG9ydHMuSU5QVVRfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFs0MiwgNDIsIDQyXSk7XHJcbnZhciBJTlBVVF9CT1JERVJfQ09MT1IgPSBuZXcgX0NvbG9yMi5kZWZhdWx0KFsxNjUsIDE2NSwgMTY1XSk7XHJcbnZhciBJTlBVVF9CQUNLR1JPVU5EX0NPTE9SID0gbmV3IF9Db2xvcjIuZGVmYXVsdChbMjIyLCAyMjIsIDIyMl0pO1xyXG52YXIgSU5QVVRfQk9SREVSID0ge1xyXG4gICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICBib3JkZXJDb2xvcjogSU5QVVRfQk9SREVSX0NPTE9SLFxyXG4gICAgYm9yZGVyU3R5bGU6IF9ib3JkZXIuQk9SREVSX1NUWUxFLlNPTElEXHJcbn07XHJcbnZhciBJTlBVVF9CT1JERVJTID0gZXhwb3J0cy5JTlBVVF9CT1JERVJTID0gW0lOUFVUX0JPUkRFUiwgSU5QVVRfQk9SREVSLCBJTlBVVF9CT1JERVIsIElOUFVUX0JPUkRFUl07XHJcbnZhciBJTlBVVF9CQUNLR1JPVU5EID0gZXhwb3J0cy5JTlBVVF9CQUNLR1JPVU5EID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBJTlBVVF9CQUNLR1JPVU5EX0NPTE9SLFxyXG4gICAgYmFja2dyb3VuZEltYWdlOiBbXSxcclxuICAgIGJhY2tncm91bmRDbGlwOiBfYmFja2dyb3VuZC5CQUNLR1JPVU5EX0NMSVAuUEFERElOR19CT1gsXHJcbiAgICBiYWNrZ3JvdW5kT3JpZ2luOiBfYmFja2dyb3VuZC5CQUNLR1JPVU5EX09SSUdJTi5QQURESU5HX0JPWFxyXG59O1xyXG5cclxudmFyIFJBRElPX0JPUkRFUl9SQURJVVMgPSBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnNTAlJyk7XHJcbnZhciBSQURJT19CT1JERVJfUkFESVVTX1RVUExFID0gW1JBRElPX0JPUkRFUl9SQURJVVMsIFJBRElPX0JPUkRFUl9SQURJVVNdO1xyXG52YXIgSU5QVVRfUkFESU9fQk9SREVSX1JBRElVUyA9IFtSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFLCBSQURJT19CT1JERVJfUkFESVVTX1RVUExFXTtcclxuXHJcbnZhciBDSEVDS0JPWF9CT1JERVJfUkFESVVTID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoJzNweCcpO1xyXG52YXIgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSA9IFtDSEVDS0JPWF9CT1JERVJfUkFESVVTLCBDSEVDS0JPWF9CT1JERVJfUkFESVVTXTtcclxudmFyIElOUFVUX0NIRUNLQk9YX0JPUkRFUl9SQURJVVMgPSBbQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSwgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSwgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRSwgQ0hFQ0tCT1hfQk9SREVSX1JBRElVU19UVVBMRV07XHJcblxyXG52YXIgZ2V0SW5wdXRCb3JkZXJSYWRpdXMgPSBleHBvcnRzLmdldElucHV0Qm9yZGVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0SW5wdXRCb3JkZXJSYWRpdXMobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ3JhZGlvJyA/IElOUFVUX1JBRElPX0JPUkRFUl9SQURJVVMgOiBJTlBVVF9DSEVDS0JPWF9CT1JERVJfUkFESVVTO1xyXG59O1xyXG5cclxudmFyIGlubGluZUlucHV0RWxlbWVudCA9IGV4cG9ydHMuaW5saW5lSW5wdXRFbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lSW5wdXRFbGVtZW50KG5vZGUsIGNvbnRhaW5lcikge1xyXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ3JhZGlvJyB8fCBub2RlLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICBpZiAobm9kZS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHZhciBzaXplID0gTWF0aC5taW4oY29udGFpbmVyLmJvdW5kcy53aWR0aCwgY29udGFpbmVyLmJvdW5kcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94JyA/IFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4zOTM2MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC43OSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjE2LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjU1NDkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC4yNzM0NywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC40NDA3MSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjM5Njk0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjU2NDkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChjb250YWluZXIuYm91bmRzLmxlZnQgKyBzaXplICogMC43Mjk4MywgY29udGFpbmVyLmJvdW5kcy50b3AgKyBzaXplICogMC4yMyksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgKiAwLjg0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgKiAwLjM0MDg1KSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoY29udGFpbmVyLmJvdW5kcy5sZWZ0ICsgc2l6ZSAqIDAuMzkzNjMsIGNvbnRhaW5lci5ib3VuZHMudG9wICsgc2l6ZSAqIDAuNzkpXSA6IG5ldyBfQ2lyY2xlMi5kZWZhdWx0KGNvbnRhaW5lci5ib3VuZHMubGVmdCArIHNpemUgLyA0LCBjb250YWluZXIuYm91bmRzLnRvcCArIHNpemUgLyA0LCBzaXplIC8gNCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5saW5lRm9ybUVsZW1lbnQoZ2V0SW5wdXRWYWx1ZShub2RlKSwgbm9kZSwgY29udGFpbmVyLCBmYWxzZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgaW5saW5lVGV4dEFyZWFFbGVtZW50ID0gZXhwb3J0cy5pbmxpbmVUZXh0QXJlYUVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVUZXh0QXJlYUVsZW1lbnQobm9kZSwgY29udGFpbmVyKSB7XHJcbiAgICBpbmxpbmVGb3JtRWxlbWVudChub2RlLnZhbHVlLCBub2RlLCBjb250YWluZXIsIHRydWUpO1xyXG59O1xyXG5cclxudmFyIGlubGluZVNlbGVjdEVsZW1lbnQgPSBleHBvcnRzLmlubGluZVNlbGVjdEVsZW1lbnQgPSBmdW5jdGlvbiBpbmxpbmVTZWxlY3RFbGVtZW50KG5vZGUsIGNvbnRhaW5lcikge1xyXG4gICAgdmFyIG9wdGlvbiA9IG5vZGUub3B0aW9uc1tub2RlLnNlbGVjdGVkSW5kZXggfHwgMF07XHJcbiAgICBpbmxpbmVGb3JtRWxlbWVudChvcHRpb24gPyBvcHRpb24udGV4dCB8fCAnJyA6ICcnLCBub2RlLCBjb250YWluZXIsIGZhbHNlKTtcclxufTtcclxuXHJcbnZhciByZWZvcm1hdElucHV0Qm91bmRzID0gZXhwb3J0cy5yZWZvcm1hdElucHV0Qm91bmRzID0gZnVuY3Rpb24gcmVmb3JtYXRJbnB1dEJvdW5kcyhib3VuZHMpIHtcclxuICAgIGlmIChib3VuZHMud2lkdGggPiBib3VuZHMuaGVpZ2h0KSB7XHJcbiAgICAgICAgYm91bmRzLmxlZnQgKz0gKGJvdW5kcy53aWR0aCAtIGJvdW5kcy5oZWlnaHQpIC8gMjtcclxuICAgICAgICBib3VuZHMud2lkdGggPSBib3VuZHMuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChib3VuZHMud2lkdGggPCBib3VuZHMuaGVpZ2h0KSB7XHJcbiAgICAgICAgYm91bmRzLnRvcCArPSAoYm91bmRzLmhlaWdodCAtIGJvdW5kcy53aWR0aCkgLyAyO1xyXG4gICAgICAgIGJvdW5kcy5oZWlnaHQgPSBib3VuZHMud2lkdGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm91bmRzO1xyXG59O1xyXG5cclxudmFyIGlubGluZUZvcm1FbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lRm9ybUVsZW1lbnQodmFsdWUsIG5vZGUsIGNvbnRhaW5lciwgYWxsb3dMaW5lYnJlYWspIHtcclxuICAgIHZhciBib2R5ID0gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMCAmJiBib2R5KSB7XHJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XHJcbiAgICAgICAgKDAsIF9VdGlsLmNvcHlDU1NTdHlsZXMpKG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLCB3cmFwcGVyKTtcclxuICAgICAgICB3cmFwcGVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBjb250YWluZXIuYm91bmRzLmxlZnQgKyAncHgnO1xyXG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgKyAncHgnO1xyXG4gICAgICAgIGlmICghYWxsb3dMaW5lYnJlYWspIHtcclxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0ZXh0ID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMucHVzaChfVGV4dENvbnRhaW5lcjIuZGVmYXVsdC5mcm9tVGV4dE5vZGUodGV4dCwgY29udGFpbmVyKSk7XHJcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZCh3cmFwcGVyKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShub2RlKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBub2RlLnR5cGUgPT09ICdwYXNzd29yZCcgPyBuZXcgQXJyYXkobm9kZS52YWx1ZS5sZW5ndGggKyAxKS5qb2luKCdcXHUyMDIyJykgOiBub2RlLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDAgPyBub2RlLnBsYWNlaG9sZGVyIHx8ICcnIDogdmFsdWU7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5jYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGV4cG9ydHMuTEVOR1RIX1RZUEUgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xyXG5cclxudmFyIF9Ob2RlQ29udGFpbmVyID0gcmVxdWlyZSgnLi9Ob2RlQ29udGFpbmVyJyk7XHJcblxyXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbnZhciBMRU5HVEhfV0lUSF9VTklUID0gLyhbXFxkLl0rKShweHxyP2VtfCUpL2k7XHJcblxyXG52YXIgTEVOR1RIX1RZUEUgPSBleHBvcnRzLkxFTkdUSF9UWVBFID0ge1xyXG4gICAgUFg6IDAsXHJcbiAgICBQRVJDRU5UQUdFOiAxXHJcbn07XHJcblxyXG52YXIgTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGVuZ3RoKHZhbHVlKSB7XHJcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExlbmd0aCk7XHJcblxyXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbHVlLnN1YnN0cih2YWx1ZS5sZW5ndGggLSAxKSA9PT0gJyUnID8gTEVOR1RIX1RZUEUuUEVSQ0VOVEFHRSA6IExFTkdUSF9UWVBFLlBYO1xyXG4gICAgICAgIHZhciBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzTmFOKHBhcnNlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHZhbHVlIGdpdmVuIGZvciBMZW5ndGg6IFwiJyArIHZhbHVlICsgJ1wiJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBpc05hTihwYXJzZWRWYWx1ZSkgPyAwIDogcGFyc2VkVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKExlbmd0aCwgW3tcclxuICAgICAgICBrZXk6ICdpc1BlcmNlbnRhZ2UnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1BlcmNlbnRhZ2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IExFTkdUSF9UWVBFLlBFUkNFTlRBR0U7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2dldEFic29sdXRlVmFsdWUnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBYnNvbHV0ZVZhbHVlKHBhcmVudExlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1BlcmNlbnRhZ2UoKSA/IHBhcmVudExlbmd0aCAqICh0aGlzLnZhbHVlIC8gMTAwKSA6IHRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfV0sIFt7XHJcbiAgICAgICAga2V5OiAnY3JlYXRlJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKHYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZW5ndGgodik7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBMZW5ndGg7XHJcbn0oKTtcclxuXHJcbmV4cG9ydHMuZGVmYXVsdCA9IExlbmd0aDtcclxuXHJcblxyXG52YXIgZ2V0Um9vdEZvbnRTaXplID0gZnVuY3Rpb24gZ2V0Um9vdEZvbnRTaXplKGNvbnRhaW5lcikge1xyXG4gICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnQ7XHJcbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0Um9vdEZvbnRTaXplKHBhcmVudCkgOiBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZS5mb250LmZvbnRTaXplKTtcclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdCA9IGV4cG9ydHMuY2FsY3VsYXRlTGVuZ3RoRnJvbVZhbHVlV2l0aFVuaXQgPSBmdW5jdGlvbiBjYWxjdWxhdGVMZW5ndGhGcm9tVmFsdWVXaXRoVW5pdChjb250YWluZXIsIHZhbHVlLCB1bml0KSB7XHJcbiAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICBjYXNlICdweCc6XHJcbiAgICAgICAgY2FzZSAnJSc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGVuZ3RoKHZhbHVlICsgdW5pdCk7XHJcbiAgICAgICAgY2FzZSAnZW0nOlxyXG4gICAgICAgIGNhc2UgJ3JlbSc6XHJcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBuZXcgTGVuZ3RoKHZhbHVlKTtcclxuICAgICAgICAgICAgbGVuZ3RoLnZhbHVlICo9IHVuaXQgPT09ICdlbScgPyBwYXJzZUZsb2F0KGNvbnRhaW5lci5zdHlsZS5mb250LmZvbnRTaXplKSA6IGdldFJvb3RGb250U2l6ZShjb250YWluZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGhhbmRsZSBjb3JyZWN0bHkgaWYgdW5rbm93biB1bml0IGlzIHVzZWRcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMZW5ndGgoJzAnKTtcclxuICAgIH1cclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmNyZWF0ZUNvdW50ZXJUZXh0ID0gZXhwb3J0cy5pbmxpbmVMaXN0SXRlbUVsZW1lbnQgPSBleHBvcnRzLmdldExpc3RPd25lciA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBfVXRpbCA9IHJlcXVpcmUoJy4vVXRpbCcpO1xyXG5cclxudmFyIF9Ob2RlQ29udGFpbmVyID0gcmVxdWlyZSgnLi9Ob2RlQ29udGFpbmVyJyk7XHJcblxyXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XHJcblxyXG52YXIgX1RleHRDb250YWluZXIgPSByZXF1aXJlKCcuL1RleHRDb250YWluZXInKTtcclxuXHJcbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcclxuXHJcbnZhciBfbGlzdFN0eWxlID0gcmVxdWlyZSgnLi9wYXJzaW5nL2xpc3RTdHlsZScpO1xyXG5cclxudmFyIF9Vbmljb2RlID0gcmVxdWlyZSgnLi9Vbmljb2RlJyk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuLy8gTWFyZ2luIGJldHdlZW4gdGhlIGVudW1lcmF0aW9uIGFuZCB0aGUgbGlzdCBpdGVtIGNvbnRlbnRcclxudmFyIE1BUkdJTl9SSUdIVCA9IDc7XHJcblxyXG52YXIgYW5jZXN0b3JUeXBlcyA9IFsnT0wnLCAnVUwnLCAnTUVOVSddO1xyXG5cclxudmFyIGdldExpc3RPd25lciA9IGV4cG9ydHMuZ2V0TGlzdE93bmVyID0gZnVuY3Rpb24gZ2V0TGlzdE93bmVyKGNvbnRhaW5lcikge1xyXG4gICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnQ7XHJcbiAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRvIHtcclxuICAgICAgICB2YXIgaXNBbmNlc3RvciA9IGFuY2VzdG9yVHlwZXMuaW5kZXhPZihwYXJlbnQudGFnTmFtZSkgIT09IC0xO1xyXG4gICAgICAgIGlmIChpc0FuY2VzdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICB9IHdoaWxlIChwYXJlbnQpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXIucGFyZW50O1xyXG59O1xyXG5cclxudmFyIGlubGluZUxpc3RJdGVtRWxlbWVudCA9IGV4cG9ydHMuaW5saW5lTGlzdEl0ZW1FbGVtZW50ID0gZnVuY3Rpb24gaW5saW5lTGlzdEl0ZW1FbGVtZW50KG5vZGUsIGNvbnRhaW5lciwgcmVzb3VyY2VMb2FkZXIpIHtcclxuICAgIHZhciBsaXN0U3R5bGUgPSBjb250YWluZXIuc3R5bGUubGlzdFN0eWxlO1xyXG5cclxuICAgIGlmICghbGlzdFN0eWxlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xyXG4gICAgdmFyIHdyYXBwZXIgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHRtbDJjYW52YXN3cmFwcGVyJyk7XHJcbiAgICAoMCwgX1V0aWwuY29weUNTU1N0eWxlcykoc3R5bGUsIHdyYXBwZXIpO1xyXG5cclxuICAgIHdyYXBwZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgd3JhcHBlci5zdHlsZS5ib3R0b20gPSAnYXV0byc7XHJcbiAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgd3JhcHBlci5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gJ25vcm1hbCc7XHJcblxyXG4gICAgc3dpdGNoIChsaXN0U3R5bGUubGlzdFN0eWxlUG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9QT1NJVElPTi5PVVRTSURFOlxyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSAnYXV0byc7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUucmlnaHQgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuaW5uZXJXaWR0aCAtIGNvbnRhaW5lci5ib3VuZHMubGVmdCAtIGNvbnRhaW5lci5zdHlsZS5tYXJnaW5bMV0uZ2V0QWJzb2x1dGVWYWx1ZShjb250YWluZXIuYm91bmRzLndpZHRoKSArIE1BUkdJTl9SSUdIVCArICdweCc7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfUE9TSVRJT04uSU5TSURFOlxyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLmxlZnQgPSBjb250YWluZXIuYm91bmRzLmxlZnQgLSBjb250YWluZXIuc3R5bGUubWFyZ2luWzNdLmdldEFic29sdXRlVmFsdWUoY29udGFpbmVyLmJvdW5kcy53aWR0aCkgKyAncHgnO1xyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRleHRBbGlnbiA9ICdsZWZ0JztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRleHQgPSB2b2lkIDA7XHJcbiAgICB2YXIgTUFSR0lOX1RPUCA9IGNvbnRhaW5lci5zdHlsZS5tYXJnaW5bMF0uZ2V0QWJzb2x1dGVWYWx1ZShjb250YWluZXIuYm91bmRzLndpZHRoKTtcclxuICAgIHZhciBzdHlsZUltYWdlID0gbGlzdFN0eWxlLmxpc3RTdHlsZUltYWdlO1xyXG4gICAgaWYgKHN0eWxlSW1hZ2UpIHtcclxuICAgICAgICBpZiAoc3R5bGVJbWFnZS5tZXRob2QgPT09ICd1cmwnKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3R5bGVJbWFnZS5hcmdzWzBdO1xyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGNvbnRhaW5lci5ib3VuZHMudG9wIC0gTUFSR0lOX1RPUCArICdweCc7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSAnYXV0byc7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlRmxvYXQoY29udGFpbmVyLnN0eWxlLmZvbnQuZm9udFNpemUpICogMC41O1xyXG4gICAgICAgICAgICB3cmFwcGVyLnN0eWxlLnRvcCA9IGNvbnRhaW5lci5ib3VuZHMudG9wIC0gTUFSR0lOX1RPUCArIGNvbnRhaW5lci5ib3VuZHMuaGVpZ2h0IC0gMS41ICogc2l6ZSArICdweCc7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUud2lkdGggPSBzaXplICsgJ3B4JztcclxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcclxuICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZS5saXN0U3R5bGVJbWFnZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250YWluZXIubGlzdEluZGV4ID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHRleHQgPSBub2RlLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3JlYXRlQ291bnRlclRleHQoY29udGFpbmVyLmxpc3RJbmRleCwgbGlzdFN0eWxlLmxpc3RTdHlsZVR5cGUsIHRydWUpKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIHdyYXBwZXIuc3R5bGUudG9wID0gY29udGFpbmVyLmJvdW5kcy50b3AgLSBNQVJHSU5fVE9QICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICB2YXIgYm9keSA9IG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuXHJcbiAgICBpZiAodGV4dCkge1xyXG4gICAgICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzLnB1c2goX1RleHRDb250YWluZXIyLmRlZmF1bHQuZnJvbVRleHROb2RlKHRleHQsIGNvbnRhaW5lcikpO1xyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQod3JhcHBlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICBjb250YWluZXIuY2hpbGROb2Rlcy5wdXNoKG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdCh3cmFwcGVyLCBjb250YWluZXIsIHJlc291cmNlTG9hZGVyLCAwKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgUk9NQU5fVVBQRVIgPSB7XHJcbiAgICBpbnRlZ2VyczogWzEwMDAsIDkwMCwgNTAwLCA0MDAsIDEwMCwgOTAsIDUwLCA0MCwgMTAsIDksIDUsIDQsIDFdLFxyXG4gICAgdmFsdWVzOiBbJ00nLCAnQ00nLCAnRCcsICdDRCcsICdDJywgJ1hDJywgJ0wnLCAnWEwnLCAnWCcsICdJWCcsICdWJywgJ0lWJywgJ0knXVxyXG59O1xyXG5cclxudmFyIEFSTUVOSUFOID0ge1xyXG4gICAgaW50ZWdlcnM6IFs5MDAwLCA4MDAwLCA3MDAwLCA2MDAwLCA1MDAwLCA0MDAwLCAzMDAwLCAyMDAwLCAxMDAwLCA5MDAsIDgwMCwgNzAwLCA2MDAsIDUwMCwgNDAwLCAzMDAsIDIwMCwgMTAwLCA5MCwgODAsIDcwLCA2MCwgNTAsIDQwLCAzMCwgMjAsIDEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXSxcclxuICAgIHZhbHVlczogWyfVlCcsICfVkycsICfVkicsICfVkScsICfVkCcsICfVjycsICfVjicsICfVjScsICfVjCcsICfViycsICfViicsICfViScsICfViCcsICfVhycsICfVhicsICfVhScsICfVhCcsICfVgycsICfVgicsICfVgScsICfVgCcsICfUvycsICfUvicsICfUvScsICfUvCcsICfUuycsICfUuicsICfUuScsICfUuCcsICfUtycsICfUticsICfUtScsICfUtCcsICfUsycsICfUsicsICfUsSddXHJcbn07XHJcblxyXG52YXIgSEVCUkVXID0ge1xyXG4gICAgaW50ZWdlcnM6IFsxMDAwMCwgOTAwMCwgODAwMCwgNzAwMCwgNjAwMCwgNTAwMCwgNDAwMCwgMzAwMCwgMjAwMCwgMTAwMCwgNDAwLCAzMDAsIDIwMCwgMTAwLCA5MCwgODAsIDcwLCA2MCwgNTAsIDQwLCAzMCwgMjAsIDE5LCAxOCwgMTcsIDE2LCAxNSwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxyXG4gICAgdmFsdWVzOiBbJ9eZ17MnLCAn15jXsycsICfXl9ezJywgJ9eW17MnLCAn15XXsycsICfXlNezJywgJ9eT17MnLCAn15LXsycsICfXkdezJywgJ9eQ17MnLCAn16onLCAn16knLCAn16gnLCAn16cnLCAn16YnLCAn16QnLCAn16InLCAn16EnLCAn16AnLCAn154nLCAn15wnLCAn15snLCAn15nXmCcsICfXmdeXJywgJ9eZ15YnLCAn15jXlicsICfXmNeVJywgJ9eZJywgJ9eYJywgJ9eXJywgJ9eWJywgJ9eVJywgJ9eUJywgJ9eTJywgJ9eSJywgJ9eRJywgJ9eQJ11cclxufTtcclxuXHJcbnZhciBHRU9SR0lBTiA9IHtcclxuICAgIGludGVnZXJzOiBbMTAwMDAsIDkwMDAsIDgwMDAsIDcwMDAsIDYwMDAsIDUwMDAsIDQwMDAsIDMwMDAsIDIwMDAsIDEwMDAsIDkwMCwgODAwLCA3MDAsIDYwMCwgNTAwLCA0MDAsIDMwMCwgMjAwLCAxMDAsIDkwLCA4MCwgNzAsIDYwLCA1MCwgNDAsIDMwLCAyMCwgMTAsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdLFxyXG4gICAgdmFsdWVzOiBbJ+GDtScsICfhg7AnLCAn4YOvJywgJ+GDtCcsICfhg64nLCAn4YOtJywgJ+GDrCcsICfhg6snLCAn4YOqJywgJ+GDqScsICfhg6gnLCAn4YOnJywgJ+GDpicsICfhg6UnLCAn4YOkJywgJ+GDsycsICfhg6InLCAn4YOhJywgJ+GDoCcsICfhg58nLCAn4YOeJywgJ+GDnScsICfhg7InLCAn4YOcJywgJ+GDmycsICfhg5onLCAn4YOZJywgJ+GDmCcsICfhg5cnLCAn4YOxJywgJ+GDlicsICfhg5UnLCAn4YOUJywgJ+GDkycsICfhg5InLCAn4YORJywgJ+GDkCddXHJcbn07XHJcblxyXG52YXIgY3JlYXRlQWRkaXRpdmVDb3VudGVyID0gZnVuY3Rpb24gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCBtaW4sIG1heCwgc3ltYm9scywgZmFsbGJhY2ssIHN1ZmZpeCkge1xyXG4gICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJUZXh0KHZhbHVlLCBmYWxsYmFjaywgc3VmZml4Lmxlbmd0aCA+IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzeW1ib2xzLmludGVnZXJzLnJlZHVjZShmdW5jdGlvbiAoc3RyaW5nLCBpbnRlZ2VyLCBpbmRleCkge1xyXG4gICAgICAgIHdoaWxlICh2YWx1ZSA+PSBpbnRlZ2VyKSB7XHJcbiAgICAgICAgICAgIHZhbHVlIC09IGludGVnZXI7XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBzeW1ib2xzLnZhbHVlc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICB9LCAnJykgKyBzdWZmaXg7XHJcbn07XHJcblxyXG52YXIgY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyID0gZnVuY3Rpb24gY3JlYXRlQ291bnRlclN0eWxlV2l0aFN5bWJvbFJlc29sdmVyKHZhbHVlLCBjb2RlUG9pbnRSYW5nZUxlbmd0aCwgaXNOdW1lcmljLCByZXNvbHZlcikge1xyXG4gICAgdmFyIHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGRvIHtcclxuICAgICAgICBpZiAoIWlzTnVtZXJpYykge1xyXG4gICAgICAgICAgICB2YWx1ZS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJpbmcgPSByZXNvbHZlcih2YWx1ZSkgKyBzdHJpbmc7XHJcbiAgICAgICAgdmFsdWUgLz0gY29kZVBvaW50UmFuZ2VMZW5ndGg7XHJcbiAgICB9IHdoaWxlICh2YWx1ZSAqIGNvZGVQb2ludFJhbmdlTGVuZ3RoID49IGNvZGVQb2ludFJhbmdlTGVuZ3RoKTtcclxuXHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG59O1xyXG5cclxudmFyIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSA9IGZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgY29kZVBvaW50UmFuZ2VTdGFydCwgY29kZVBvaW50UmFuZ2VFbmQsIGlzTnVtZXJpYywgc3VmZml4KSB7XHJcbiAgICB2YXIgY29kZVBvaW50UmFuZ2VMZW5ndGggPSBjb2RlUG9pbnRSYW5nZUVuZCAtIGNvZGVQb2ludFJhbmdlU3RhcnQgKyAxO1xyXG5cclxuICAgIHJldHVybiAodmFsdWUgPCAwID8gJy0nIDogJycpICsgKGNyZWF0ZUNvdW50ZXJTdHlsZVdpdGhTeW1ib2xSZXNvbHZlcihNYXRoLmFicyh2YWx1ZSksIGNvZGVQb2ludFJhbmdlTGVuZ3RoLCBpc051bWVyaWMsIGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gKDAsIF9Vbmljb2RlLmZyb21Db2RlUG9pbnQpKE1hdGguZmxvb3IoY29kZVBvaW50ICUgY29kZVBvaW50UmFuZ2VMZW5ndGgpICsgY29kZVBvaW50UmFuZ2VTdGFydCk7XHJcbiAgICB9KSArIHN1ZmZpeCk7XHJcbn07XHJcblxyXG52YXIgY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHMgPSBmdW5jdGlvbiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgc3ltYm9scykge1xyXG4gICAgdmFyIHN1ZmZpeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJy4gJztcclxuXHJcbiAgICB2YXIgY29kZVBvaW50UmFuZ2VMZW5ndGggPSBzeW1ib2xzLmxlbmd0aDtcclxuICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVXaXRoU3ltYm9sUmVzb2x2ZXIoTWF0aC5hYnModmFsdWUpLCBjb2RlUG9pbnRSYW5nZUxlbmd0aCwgZmFsc2UsIGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gc3ltYm9sc1tNYXRoLmZsb29yKGNvZGVQb2ludCAlIGNvZGVQb2ludFJhbmdlTGVuZ3RoKV07XHJcbiAgICB9KSArIHN1ZmZpeDtcclxufTtcclxuXHJcbnZhciBDSktfWkVST1MgPSAxIDw8IDA7XHJcbnZhciBDSktfVEVOX0NPRUZGSUNJRU5UUyA9IDEgPDwgMTtcclxudmFyIENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgPSAxIDw8IDI7XHJcbnZhciBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMgPSAxIDw8IDM7XHJcblxyXG52YXIgY3JlYXRlQ0pLQ291bnRlciA9IGZ1bmN0aW9uIGNyZWF0ZUNKS0NvdW50ZXIodmFsdWUsIG51bWJlcnMsIG11bHRpcGxpZXJzLCBuZWdhdGl2ZVNpZ24sIHN1ZmZpeCwgZmxhZ3MpIHtcclxuICAgIGlmICh2YWx1ZSA8IC05OTk5IHx8IHZhbHVlID4gOTk5OSkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyVGV4dCh2YWx1ZSwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0RFQ0lNQUwsIHN1ZmZpeC5sZW5ndGggPiAwKTtcclxuICAgIH1cclxuICAgIHZhciB0bXAgPSBNYXRoLmFicyh2YWx1ZSk7XHJcbiAgICB2YXIgc3RyaW5nID0gc3VmZml4O1xyXG5cclxuICAgIGlmICh0bXAgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyc1swXSArIHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBkaWdpdCA9IDA7IHRtcCA+IDAgJiYgZGlnaXQgPD0gNDsgZGlnaXQrKykge1xyXG4gICAgICAgIHZhciBjb2VmZmljaWVudCA9IHRtcCAlIDEwO1xyXG5cclxuICAgICAgICBpZiAoY29lZmZpY2llbnQgPT09IDAgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX1pFUk9TKSAmJiBzdHJpbmcgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHN0cmluZyA9IG51bWJlcnNbY29lZmZpY2llbnRdICsgc3RyaW5nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29lZmZpY2llbnQgPiAxIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAwIHx8IGNvZWZmaWNpZW50ID09PSAxICYmIGRpZ2l0ID09PSAxICYmICgwLCBfVXRpbC5jb250YWlucykoZmxhZ3MsIENKS19URU5fQ09FRkZJQ0lFTlRTKSB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA9PT0gMSAmJiAoMCwgX1V0aWwuY29udGFpbnMpKGZsYWdzLCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKSAmJiB2YWx1ZSA+IDEwMCB8fCBjb2VmZmljaWVudCA9PT0gMSAmJiBkaWdpdCA+IDEgJiYgKDAsIF9VdGlsLmNvbnRhaW5zKShmbGFncywgQ0pLX0hVTkRSRURfQ09FRkZJQ0lFTlRTKSkge1xyXG4gICAgICAgICAgICBzdHJpbmcgPSBudW1iZXJzW2NvZWZmaWNpZW50XSArIChkaWdpdCA+IDAgPyBtdWx0aXBsaWVyc1tkaWdpdCAtIDFdIDogJycpICsgc3RyaW5nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29lZmZpY2llbnQgPT09IDEgJiYgZGlnaXQgPiAwKSB7XHJcbiAgICAgICAgICAgIHN0cmluZyA9IG11bHRpcGxpZXJzW2RpZ2l0IC0gMV0gKyBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRtcCA9IE1hdGguZmxvb3IodG1wIC8gMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodmFsdWUgPCAwID8gbmVnYXRpdmVTaWduIDogJycpICsgc3RyaW5nO1xyXG59O1xyXG5cclxudmFyIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMgPSAn5Y2B55m+5Y2D6JCsJztcclxudmFyIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTID0gJ+aLvuS9sOS7n+iQrCc7XHJcbnZhciBKQVBBTkVTRV9ORUdBVElWRSA9ICfjg57jgqTjg4rjgrknO1xyXG52YXIgS09SRUFOX05FR0FUSVZFID0gJ+uniOydtOuEiOyKpCAnO1xyXG5cclxudmFyIGNyZWF0ZUNvdW50ZXJUZXh0ID0gZXhwb3J0cy5jcmVhdGVDb3VudGVyVGV4dCA9IGZ1bmN0aW9uIGNyZWF0ZUNvdW50ZXJUZXh0KHZhbHVlLCB0eXBlLCBhcHBlbmRTdWZmaXgpIHtcclxuICAgIHZhciBkZWZhdWx0U3VmZml4ID0gYXBwZW5kU3VmZml4ID8gJy4gJyA6ICcnO1xyXG4gICAgdmFyIGNqa1N1ZmZpeCA9IGFwcGVuZFN1ZmZpeCA/ICfjgIEnIDogJyc7XHJcbiAgICB2YXIga29yZWFuU3VmZml4ID0gYXBwZW5kU3VmZml4ID8gJywgJyA6ICcnO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ESVNDOlxyXG4gICAgICAgICAgICByZXR1cm4gJ+KAoic7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5DSVJDTEU6XHJcbiAgICAgICAgICAgIHJldHVybiAn4pemJztcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlNRVUFSRTpcclxuICAgICAgICAgICAgcmV0dXJuICfil74nO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTF9MRUFESU5HX1pFUk86XHJcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDQ4LCA1NywgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcubGVuZ3RoIDwgNCA/ICcwJyArIHN0cmluZyA6IHN0cmluZztcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgIfkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ0nLCBjamtTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTE9XRVJfUk9NQU46XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDM5OTksIFJPTUFOX1VQUEVSLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVVBQRVJfUk9NQU46XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDM5OTksIFJPTUFOX1VQUEVSLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkxPV0VSX0dSRUVLOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA5NDUsIDk2OSwgZmFsc2UsIGRlZmF1bHRTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuTE9XRVJfQUxQSEE6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDk3LCAxMjIsIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FMUEhBOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA2NSwgOTAsIGZhbHNlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkFSQUJJQ19JTkRJQzpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMTYzMiwgMTY0MSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5BUk1FTklBTjpcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FSTUVOSUFOOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQWRkaXRpdmVDb3VudGVyKHZhbHVlLCAxLCA5OTk5LCBBUk1FTklBTiwgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuREVDSU1BTCwgZGVmYXVsdFN1ZmZpeCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MT1dFUl9BUk1FTklBTjpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgOTk5OSwgQVJNRU5JQU4sIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5CRU5HQUxJOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAyNTM0LCAyNTQzLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNBTUJPRElBTjpcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktITUVSOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCA2MTEyLCA2MTIxLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19FQVJUSExZX0JSQU5DSDpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21TeW1ib2xzKHZhbHVlLCAn5a2Q5LiR5a+F5Y2v6L6w5bez5Y2I5pyq55Sz6YWJ5oiM5LqlJywgY2prU3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkNKS19IRUFWRU5MWV9TVEVNOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfnlLLkuZnkuJnkuIHmiIrlt7Hluprovpvlo6znmbgnLCBjamtTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuQ0pLX0lERU9HUkFQSElDOlxyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0lORk9STUFMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMsICfosqAnLCBjamtTdWZmaXgsIENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5UUkFEX0NISU5FU0VfRk9STUFMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjueiys+WPg+iChuS8jemZuOafkuaNjOeOlicsIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTLCAn6LKgJywgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0lORk9STUFMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsIENISU5FU0VfSU5GT1JNQUxfTVVMVElQTElFUlMsICfotJ8nLCBjamtTdWZmaXgsIENKS19URU5fQ09FRkZJQ0lFTlRTIHwgQ0pLX1RFTl9ISUdIX0NPRUZGSUNJRU5UUyB8IENKS19IVU5EUkVEX0NPRUZGSUNJRU5UUyk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfRk9STUFMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjuei0sOWPgeiChuS8jemZhuafkuaNjOeOlicsIENISU5FU0VfRk9STUFMX01VTFRJUExJRVJTLCAn6LSfJywgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMgfCBDSktfSFVORFJFRF9DT0VGRklDSUVOVFMpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfSU5GT1JNQUw6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn44CH5LiA5LqM5LiJ5Zub5LqU5YWt5LiD5YWr5LmdJywgJ+WNgeeZvuWNg+S4hycsIEpBUEFORVNFX05FR0FUSVZFLCBjamtTdWZmaXgsIDApO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfRk9STUFMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjseW8kOWPguWbm+S8jeWFreS4g+WFq+S5nScsICfmi77nmb7ljYPkuIcnLCBKQVBBTkVTRV9ORUdBVElWRSwgY2prU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkdVTF9GT1JNQUw6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDSktDb3VudGVyKHZhbHVlLCAn7JiB7J287J207IK87IKs7Jik7Jyh7Lmg7YyU6rWsJywgJ+yLreuwseyynOunjCcsIEtPUkVBTl9ORUdBVElWRSwga29yZWFuU3VmZml4LCBDSktfWkVST1MgfCBDSktfVEVOX0NPRUZGSUNJRU5UUyB8IENKS19URU5fSElHSF9DT0VGRklDSUVOVFMpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0lORk9STUFMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuS4gOS6jOS4ieWbm+S6lOWFreS4g+WFq+S5nScsICfljYHnmb7ljYPokKwnLCBLT1JFQU5fTkVHQVRJVkUsIGtvcmVhblN1ZmZpeCwgMCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5LT1JFQU5fSEFOSkFfRk9STUFMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ0pLQ291bnRlcih2YWx1ZSwgJ+mbtuWjueiys+WPg+Wbm+S6lOWFreS4g+WFq+S5nScsICfmi77nmb7ljYMnLCBLT1JFQU5fTkVHQVRJVkUsIGtvcmVhblN1ZmZpeCwgQ0pLX1pFUk9TIHwgQ0pLX1RFTl9DT0VGRklDSUVOVFMgfCBDSktfVEVOX0hJR0hfQ09FRkZJQ0lFTlRTKTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFVkFOQUdBUkk6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4OTY2LCAweDk2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5HRU9SR0lBTjpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFkZGl0aXZlQ291bnRlcih2YWx1ZSwgMSwgMTk5OTksIEdFT1JHSUFOLCBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkdVSkFSQVRJOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGFlNiwgMHhhZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuR1VSTVVLSEk6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4YTY2LCAweGE2ZiwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5IRUJSRVc6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBZGRpdGl2ZUNvdW50ZXIodmFsdWUsIDEsIDEwOTk5LCBIRUJSRVcsIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUwsIGRlZmF1bHRTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSElSQUdBTkE6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OBguOBhOOBhuOBiOOBiuOBi+OBjeOBj+OBkeOBk+OBleOBl+OBmeOBm+OBneOBn+OBoeOBpOOBpuOBqOOBquOBq+OBrOOBreOBruOBr+OBsuOBteOBuOOBu+OBvuOBv+OCgOOCgeOCguOChOOChuOCiOOCieOCiuOCi+OCjOOCjeOCj+OCkOOCkeOCkuOCkycpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuSElSQUdBTkFfSVJPSEE6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OBhOOCjeOBr+OBq+OBu+OBuOOBqOOBoeOCiuOBrOOCi+OCkuOCj+OBi+OCiOOBn+OCjOOBneOBpOOBreOBquOCieOCgOOBhuOCkOOBruOBiuOBj+OChOOBvuOBkeOBteOBk+OBiOOBpuOBguOBleOBjeOChuOCgeOBv+OBl+OCkeOBsuOCguOBm+OBmScpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS0FOTkFEQTpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhjZTYsIDB4Y2VmLCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVN5bWJvbHModmFsdWUsICfjgqLjgqTjgqbjgqjjgqrjgqvjgq3jgq/jgrHjgrPjgrXjgrfjgrnjgrvjgr3jgr/jg4Hjg4Tjg4bjg4jjg4rjg4vjg4zjg43jg47jg4/jg5Ljg5Xjg5jjg5vjg57jg5/jg6Djg6Hjg6Ljg6Tjg6bjg6jjg6njg6rjg6vjg6zjg63jg6/jg7Djg7Hjg7Ljg7MnLCBjamtTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkFfSVJPSEE6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tU3ltYm9scyh2YWx1ZSwgJ+OCpOODreODj+ODi+ODm+ODmOODiOODgeODquODjOODq+ODsuODr+OCq+ODqOOCv+ODrOOCveODhOODjeODiuODqeODoOOCpuODsOODjuOCquOCr+ODpOODnuOCseODleOCs+OCqOODhuOCouOCteOCreODpuODoeODn+OCt+ODseODkuODouOCu+OCuScsIGNqa1N1ZmZpeCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5MQU86XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZWQwLCAweGVkOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5NT05HT0xJQU46XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4MTgxMCwgMHgxODE5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLk1ZQU5NQVI6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4MTA0MCwgMHgxMDQ5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLk9SSVlBOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGI2NiwgMHhiNmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuUEVSU0lBTjpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHg2ZjAsIDB4NmY5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRBTUlMOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGJlNiwgMHhiZWYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEVMVUdVOlxyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ291bnRlclN0eWxlRnJvbVJhbmdlKHZhbHVlLCAweGM2NiwgMHhjNmYsIHRydWUsIGRlZmF1bHRTdWZmaXgpO1xyXG4gICAgICAgIGNhc2UgX2xpc3RTdHlsZS5MSVNUX1NUWUxFX1RZUEUuVEhBSTpcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvdW50ZXJTdHlsZUZyb21SYW5nZSh2YWx1ZSwgMHhlNTAsIDB4ZTU5LCB0cnVlLCBkZWZhdWx0U3VmZml4KTtcclxuICAgICAgICBjYXNlIF9saXN0U3R5bGUuTElTVF9TVFlMRV9UWVBFLlRJQkVUQU46XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDB4ZjIwLCAweGYyOSwgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XHJcbiAgICAgICAgY2FzZSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5ERUNJTUFMOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVDb3VudGVyU3R5bGVGcm9tUmFuZ2UodmFsdWUsIDQ4LCA1NywgdHJ1ZSwgZGVmYXVsdFN1ZmZpeCk7XHJcbiAgICB9XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxudmFyIExvZ2dlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvZ2dlcihlbmFibGVkLCBpZCwgc3RhcnQpIHtcclxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9nZ2VyKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZW5hYmxlZDtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQgPyBzdGFydCA6IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVDbGFzcyhMb2dnZXIsIFt7XHJcbiAgICAgICAga2V5OiAnY2hpbGQnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGlsZChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmVuYWJsZWQsIGlkLCB0aGlzLnN0YXJ0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzXHJcblxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2xvZycsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvZygpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCAmJiB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKHdpbmRvdy5jb25zb2xlLmxvZywgd2luZG93LmNvbnNvbGUpLmFwcGx5KHdpbmRvdy5jb25zb2xlLCBbRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQgKyAnbXMnLCB0aGlzLmlkID8gJ2h0bWwyY2FudmFzICgnICsgdGhpcy5pZCArICcpOicgOiAnaHRtbDJjYW52YXM6J10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncywgMCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZsb3d0eXBlL25vLXdlYWstdHlwZXNcclxuXHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnZXJyb3InLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCAmJiB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbCh3aW5kb3cuY29uc29sZS5lcnJvciwgd2luZG93LmNvbnNvbGUpLmFwcGx5KHdpbmRvdy5jb25zb2xlLCBbRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnQgKyAnbXMnLCB0aGlzLmlkID8gJ2h0bWwyY2FudmFzICgnICsgdGhpcy5pZCArICcpOicgOiAnaHRtbDJjYW52YXM6J10uY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJncywgMCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1dKTtcclxuXHJcbiAgICByZXR1cm4gTG9nZ2VyO1xyXG59KCk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBMb2dnZXI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi9Db2xvcicpO1xyXG5cclxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XHJcblxyXG52YXIgX1V0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcclxuXHJcbnZhciBfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vcGFyc2luZy9iYWNrZ3JvdW5kJyk7XHJcblxyXG52YXIgX2JvcmRlciA9IHJlcXVpcmUoJy4vcGFyc2luZy9ib3JkZXInKTtcclxuXHJcbnZhciBfYm9yZGVyUmFkaXVzID0gcmVxdWlyZSgnLi9wYXJzaW5nL2JvcmRlclJhZGl1cycpO1xyXG5cclxudmFyIF9kaXNwbGF5ID0gcmVxdWlyZSgnLi9wYXJzaW5nL2Rpc3BsYXknKTtcclxuXHJcbnZhciBfZmxvYXQgPSByZXF1aXJlKCcuL3BhcnNpbmcvZmxvYXQnKTtcclxuXHJcbnZhciBfZm9udCA9IHJlcXVpcmUoJy4vcGFyc2luZy9mb250Jyk7XHJcblxyXG52YXIgX2xldHRlclNwYWNpbmcgPSByZXF1aXJlKCcuL3BhcnNpbmcvbGV0dGVyU3BhY2luZycpO1xyXG5cclxudmFyIF9saW5lQnJlYWsgPSByZXF1aXJlKCcuL3BhcnNpbmcvbGluZUJyZWFrJyk7XHJcblxyXG52YXIgX2xpc3RTdHlsZSA9IHJlcXVpcmUoJy4vcGFyc2luZy9saXN0U3R5bGUnKTtcclxuXHJcbnZhciBfbWFyZ2luID0gcmVxdWlyZSgnLi9wYXJzaW5nL21hcmdpbicpO1xyXG5cclxudmFyIF9vdmVyZmxvdyA9IHJlcXVpcmUoJy4vcGFyc2luZy9vdmVyZmxvdycpO1xyXG5cclxudmFyIF9vdmVyZmxvd1dyYXAgPSByZXF1aXJlKCcuL3BhcnNpbmcvb3ZlcmZsb3dXcmFwJyk7XHJcblxyXG52YXIgX3BhZGRpbmcgPSByZXF1aXJlKCcuL3BhcnNpbmcvcGFkZGluZycpO1xyXG5cclxudmFyIF9wb3NpdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2luZy9wb3NpdGlvbicpO1xyXG5cclxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0RGVjb3JhdGlvbicpO1xyXG5cclxudmFyIF90ZXh0U2hhZG93ID0gcmVxdWlyZSgnLi9wYXJzaW5nL3RleHRTaGFkb3cnKTtcclxuXHJcbnZhciBfdGV4dFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0VHJhbnNmb3JtJyk7XHJcblxyXG52YXIgX3RyYW5zZm9ybSA9IHJlcXVpcmUoJy4vcGFyc2luZy90cmFuc2Zvcm0nKTtcclxuXHJcbnZhciBfdmlzaWJpbGl0eSA9IHJlcXVpcmUoJy4vcGFyc2luZy92aXNpYmlsaXR5Jyk7XHJcblxyXG52YXIgX3dvcmRCcmVhayA9IHJlcXVpcmUoJy4vcGFyc2luZy93b3JkLWJyZWFrJyk7XHJcblxyXG52YXIgX3pJbmRleCA9IHJlcXVpcmUoJy4vcGFyc2luZy96SW5kZXgnKTtcclxuXHJcbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi9Cb3VuZHMnKTtcclxuXHJcbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XHJcblxyXG52YXIgX0xpc3RJdGVtID0gcmVxdWlyZSgnLi9MaXN0SXRlbScpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG52YXIgSU5QVVRfVEFHUyA9IFsnSU5QVVQnLCAnVEVYVEFSRUEnLCAnU0VMRUNUJ107XHJcblxyXG52YXIgTm9kZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5vZGVDb250YWluZXIobm9kZSwgcGFyZW50LCByZXNvdXJjZUxvYWRlciwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMudGFnTmFtZSA9IG5vZGUudGFnTmFtZTtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSBbXTtcclxuICAgICAgICBpZiAodHlwZW9mIG5vZGUuc3RhcnQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXJ0ID0gbm9kZS5zdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcclxuICAgICAgICB2YXIgc3R5bGUgPSBkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xyXG4gICAgICAgIHZhciBkaXNwbGF5ID0gKDAsIF9kaXNwbGF5LnBhcnNlRGlzcGxheSkoc3R5bGUuZGlzcGxheSk7XHJcblxyXG4gICAgICAgIHZhciBJU19JTlBVVCA9IG5vZGUudHlwZSA9PT0gJ3JhZGlvJyB8fCBub2RlLnR5cGUgPT09ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfcG9zaXRpb24ucGFyc2VQb3NpdGlvbikoc3R5bGUucG9zaXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9CQUNLR1JPVU5EIDogKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZCkoc3R5bGUsIHJlc291cmNlTG9hZGVyKSxcclxuICAgICAgICAgICAgYm9yZGVyOiBJU19JTlBVVCA/IF9JbnB1dC5JTlBVVF9CT1JERVJTIDogKDAsIF9ib3JkZXIucGFyc2VCb3JkZXIpKHN0eWxlKSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAobm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LkhUTUxJbnB1dEVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmIElTX0lOUFVUID8gKDAsIF9JbnB1dC5nZXRJbnB1dEJvcmRlclJhZGl1cykobm9kZSkgOiAoMCwgX2JvcmRlclJhZGl1cy5wYXJzZUJvcmRlclJhZGl1cykoc3R5bGUpLFxyXG4gICAgICAgICAgICBjb2xvcjogSVNfSU5QVVQgPyBfSW5wdXQuSU5QVVRfQ09MT1IgOiBuZXcgX0NvbG9yMi5kZWZhdWx0KHN0eWxlLmNvbG9yKSxcclxuICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSxcclxuICAgICAgICAgICAgZmxvYXQ6ICgwLCBfZmxvYXQucGFyc2VDU1NGbG9hdCkoc3R5bGUuZmxvYXQpLFxyXG4gICAgICAgICAgICBmb250OiAoMCwgX2ZvbnQucGFyc2VGb250KShzdHlsZSksXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICgwLCBfbGV0dGVyU3BhY2luZy5wYXJzZUxldHRlclNwYWNpbmcpKHN0eWxlLmxldHRlclNwYWNpbmcpLFxyXG4gICAgICAgICAgICBsaXN0U3R5bGU6IGRpc3BsYXkgPT09IF9kaXNwbGF5LkRJU1BMQVkuTElTVF9JVEVNID8gKDAsIF9saXN0U3R5bGUucGFyc2VMaXN0U3R5bGUpKHN0eWxlKSA6IG51bGwsXHJcbiAgICAgICAgICAgIGxpbmVCcmVhazogKDAsIF9saW5lQnJlYWsucGFyc2VMaW5lQnJlYWspKHN0eWxlLmxpbmVCcmVhayksXHJcbiAgICAgICAgICAgIG1hcmdpbjogKDAsIF9tYXJnaW4ucGFyc2VNYXJnaW4pKHN0eWxlKSxcclxuICAgICAgICAgICAgb3BhY2l0eTogcGFyc2VGbG9hdChzdHlsZS5vcGFjaXR5KSxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IElOUFVUX1RBR1MuaW5kZXhPZihub2RlLnRhZ05hbWUpID09PSAtMSA/ICgwLCBfb3ZlcmZsb3cucGFyc2VPdmVyZmxvdykoc3R5bGUub3ZlcmZsb3cpIDogX292ZXJmbG93Lk9WRVJGTE9XLkhJRERFTixcclxuICAgICAgICAgICAgb3ZlcmZsb3dXcmFwOiAoMCwgX292ZXJmbG93V3JhcC5wYXJzZU92ZXJmbG93V3JhcCkoc3R5bGUub3ZlcmZsb3dXcmFwID8gc3R5bGUub3ZlcmZsb3dXcmFwIDogc3R5bGUud29yZFdyYXApLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAoMCwgX3BhZGRpbmcucGFyc2VQYWRkaW5nKShzdHlsZSksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICgwLCBfdGV4dERlY29yYXRpb24ucGFyc2VUZXh0RGVjb3JhdGlvbikoc3R5bGUpLFxyXG4gICAgICAgICAgICB0ZXh0U2hhZG93OiAoMCwgX3RleHRTaGFkb3cucGFyc2VUZXh0U2hhZG93KShzdHlsZS50ZXh0U2hhZG93KSxcclxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogKDAsIF90ZXh0VHJhbnNmb3JtLnBhcnNlVGV4dFRyYW5zZm9ybSkoc3R5bGUudGV4dFRyYW5zZm9ybSksXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm0ucGFyc2VUcmFuc2Zvcm0pKHN0eWxlKSxcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogKDAsIF92aXNpYmlsaXR5LnBhcnNlVmlzaWJpbGl0eSkoc3R5bGUudmlzaWJpbGl0eSksXHJcbiAgICAgICAgICAgIHdvcmRCcmVhazogKDAsIF93b3JkQnJlYWsucGFyc2VXb3JkQnJlYWspKHN0eWxlLndvcmRCcmVhayksXHJcbiAgICAgICAgICAgIHpJbmRleDogKDAsIF96SW5kZXgucGFyc2VaSW5kZXgpKHBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDID8gc3R5bGUuekluZGV4IDogJ2F1dG8nKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVHJhbnNmb3JtZWQoKSkge1xyXG4gICAgICAgICAgICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgcHJvdmlkZXMgdmFsdWVzIHBvc3QtdHJhbnNmb3JtLCB3ZSB3YW50IHRoZW0gd2l0aG91dCB0aGUgdHJhbnNmb3JtYXRpb25cclxuICAgICAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsMCwwLDEsMCwwKSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlzcGxheSA9PT0gX2Rpc3BsYXkuRElTUExBWS5MSVNUX0lURU0pIHtcclxuICAgICAgICAgICAgdmFyIGxpc3RPd25lciA9ICgwLCBfTGlzdEl0ZW0uZ2V0TGlzdE93bmVyKSh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKGxpc3RPd25lcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RJbmRleCA9IGxpc3RPd25lci5saXN0SXRlbXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgbGlzdE93bmVyLmxpc3RJdGVtcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0SW5kZXggPSBub2RlLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSAmJiB0eXBlb2Ygbm9kZS52YWx1ZSA9PT0gJ251bWJlcicgPyBub2RlLnZhbHVlIDogbGlzdEluZGV4ID09PSAwID8gdHlwZW9mIGxpc3RPd25lci5saXN0U3RhcnQgPT09ICdudW1iZXInID8gbGlzdE93bmVyLmxpc3RTdGFydCA6IDEgOiBsaXN0T3duZXIubGlzdEl0ZW1zW2xpc3RJbmRleCAtIDFdLmxpc3RJbmRleCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRPRE8gbW92ZSBib3VuZCByZXRyaWV2YWwgZm9yIGFsbCBub2RlcyB0byBhIGxhdGVyIHN0YWdlP1xyXG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdJTUcnKSB7XHJcbiAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShub2RlLCBzY3JvbGxYLCBzY3JvbGxZKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmN1cnZlZEJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRDdXJ2ZXMpKF90aGlzLmJvdW5kcywgX3RoaXMuc3R5bGUuYm9yZGVyLCBfdGhpcy5zdHlsZS5ib3JkZXJSYWRpdXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGdldEltYWdlKG5vZGUsIHJlc291cmNlTG9hZGVyKTtcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IElTX0lOUFVUID8gKDAsIF9JbnB1dC5yZWZvcm1hdElucHV0Qm91bmRzKSgoMCwgX0JvdW5kcy5wYXJzZUJvdW5kcykobm9kZSwgc2Nyb2xsWCwgc2Nyb2xsWSkpIDogKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpO1xyXG4gICAgICAgIHRoaXMuY3VydmVkQm91bmRzID0gKDAsIF9Cb3VuZHMucGFyc2VCb3VuZEN1cnZlcykodGhpcy5ib3VuZHMsIHRoaXMuc3R5bGUuYm9yZGVyLCB0aGlzLnN0eWxlLmJvcmRlclJhZGl1cyk7XHJcblxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9ICcnICsgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKyAobm9kZS5pZCA/ICcjJyArIG5vZGUuaWQgOiAnJykgKyBub2RlLmNsYXNzTmFtZS50b1N0cmluZygpLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcy5sZW5ndGggPyAnLicgKyBzIDogJyc7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQ2xhc3MoTm9kZUNvbnRhaW5lciwgW3tcclxuICAgICAgICBrZXk6ICdnZXRDbGlwUGF0aHMnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGlwUGF0aHMoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnRDbGlwcyA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZ2V0Q2xpcFBhdGhzKCkgOiBbXTtcclxuICAgICAgICAgICAgdmFyIGlzQ2xpcHBlZCA9IHRoaXMuc3R5bGUub3ZlcmZsb3cgIT09IF9vdmVyZmxvdy5PVkVSRkxPVy5WSVNJQkxFO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlzQ2xpcHBlZCA/IHBhcmVudENsaXBzLmNvbmNhdChbKDAsIF9Cb3VuZHMuY2FsY3VsYXRlUGFkZGluZ0JveFBhdGgpKHRoaXMuY3VydmVkQm91bmRzKV0pIDogcGFyZW50Q2xpcHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2lzSW5GbG93JyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbkZsb3coKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUm9vdEVsZW1lbnQoKSAmJiAhdGhpcy5pc0Zsb2F0aW5nKCkgJiYgIXRoaXMuaXNBYnNvbHV0ZWx5UG9zaXRpb25lZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdpc1Zpc2libGUnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuTk9ORSkgJiYgdGhpcy5zdHlsZS5vcGFjaXR5ID4gMCAmJiB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPT09IF92aXNpYmlsaXR5LlZJU0lCSUxJVFkuVklTSUJMRTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnaXNBYnNvbHV0ZWx5UG9zaXRpb25lZCcsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQWJzb2x1dGVseVBvc2l0aW9uZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLnBvc2l0aW9uICE9PSBfcG9zaXRpb24uUE9TSVRJT04uU1RBVElDICYmIHRoaXMuc3R5bGUucG9zaXRpb24gIT09IF9wb3NpdGlvbi5QT1NJVElPTi5SRUxBVElWRTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnaXNQb3NpdGlvbmVkJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNQb3NpdGlvbmVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHlsZS5wb3NpdGlvbiAhPT0gX3Bvc2l0aW9uLlBPU0lUSU9OLlNUQVRJQztcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnaXNGbG9hdGluZycsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRmxvYXRpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLmZsb2F0ICE9PSBfZmxvYXQuRkxPQVQuTk9ORTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnaXNSb290RWxlbWVudCcsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUm9vdEVsZW1lbnQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA9PT0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnaXNUcmFuc2Zvcm1lZCcsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzVHJhbnNmb3JtZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlLnRyYW5zZm9ybSAhPT0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnaXNQb3NpdGlvbmVkV2l0aFpJbmRleCcsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzUG9zaXRpb25lZFdpdGhaSW5kZXgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUG9zaXRpb25lZCgpICYmICF0aGlzLnN0eWxlLnpJbmRleC5hdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdpc0lubGluZUxldmVsJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbmxpbmVMZXZlbCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORSkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0JMT0NLKSB8fCAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfRkxFWCkgfHwgKDAsIF9VdGlsLmNvbnRhaW5zKSh0aGlzLnN0eWxlLmRpc3BsYXksIF9kaXNwbGF5LkRJU1BMQVkuSU5MSU5FX0dSSUQpIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9MSVNUX0lURU0pIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9UQUJMRSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2lzSW5saW5lQmxvY2tPcklubGluZVRhYmxlJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbmxpbmVCbG9ja09ySW5saW5lVGFibGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoMCwgX1V0aWwuY29udGFpbnMpKHRoaXMuc3R5bGUuZGlzcGxheSwgX2Rpc3BsYXkuRElTUExBWS5JTkxJTkVfQkxPQ0spIHx8ICgwLCBfVXRpbC5jb250YWlucykodGhpcy5zdHlsZS5kaXNwbGF5LCBfZGlzcGxheS5ESVNQTEFZLklOTElORV9UQUJMRSk7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBOb2RlQ29udGFpbmVyO1xyXG59KCk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBOb2RlQ29udGFpbmVyO1xyXG5cclxuXHJcbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKG5vZGUsIHJlc291cmNlTG9hZGVyKSB7XHJcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdTVkdFbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50KSB7XHJcbiAgICAgICAgLy8gVE9ETzogdXNlIGNhbnZnIHRvIGNvbnZlciBTVkdcclxuICAgICAgICB2YXIgcyA9IG5ldyBYTUxTZXJpYWxpemVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlTG9hZGVyLmxvYWRTVkcocy5zZXJpYWxpemVUb1N0cmluZyhub2RlKSk7XHJcbiAgICAgICAgLy8gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKFxyXG4gICAgICAgIC8vICAgICBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHMuc2VyaWFsaXplVG9TdHJpbmcobm9kZSkpfWBcclxuICAgICAgICAvLyApO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChub2RlLnRhZ05hbWUpIHtcclxuICAgICAgICBjYXNlICdJTUcnOlxyXG4gICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBub2RlO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKGltZy5jdXJyZW50U3JjIHx8IGltZy5zcmMpO1xyXG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XHJcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IG5vZGU7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZUxvYWRlci5sb2FkQ2FudmFzKGNhbnZhcyk7XHJcbiAgICAgICAgY2FzZSAnSUZSQU1FJzpcclxuICAgICAgICAgICAgdmFyIGlmcmFtZUtleSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWh0bWwyY2FudmFzLWludGVybmFsLWlmcmFtZS1rZXknKTtcclxuICAgICAgICAgICAgaWYgKGlmcmFtZUtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlmcmFtZUtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLk5vZGVQYXJzZXIgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX1N0YWNraW5nQ29udGV4dCA9IHJlcXVpcmUoJy4vU3RhY2tpbmdDb250ZXh0Jyk7XHJcblxyXG52YXIgX1N0YWNraW5nQ29udGV4dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGFja2luZ0NvbnRleHQpO1xyXG5cclxudmFyIF9Ob2RlQ29udGFpbmVyID0gcmVxdWlyZSgnLi9Ob2RlQ29udGFpbmVyJyk7XHJcblxyXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XHJcblxyXG52YXIgX1RleHRDb250YWluZXIgPSByZXF1aXJlKCcuL1RleHRDb250YWluZXInKTtcclxuXHJcbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcclxuXHJcbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0Jyk7XHJcblxyXG52YXIgX0xpc3RJdGVtID0gcmVxdWlyZSgnLi9MaXN0SXRlbScpO1xyXG5cclxudmFyIF9saXN0U3R5bGUgPSByZXF1aXJlKCcuL3BhcnNpbmcvbGlzdFN0eWxlJyk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxudmFyIE5vZGVQYXJzZXIgPSBleHBvcnRzLk5vZGVQYXJzZXIgPSBmdW5jdGlvbiBOb2RlUGFyc2VyKG5vZGUsIHJlc291cmNlTG9hZGVyLCBsb2dnZXIpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZygnU3RhcnRpbmcgbm9kZSBwYXJzaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluZGV4ID0gMDtcclxuXHJcbiAgICB2YXIgY29udGFpbmVyID0gbmV3IF9Ob2RlQ29udGFpbmVyMi5kZWZhdWx0KG5vZGUsIG51bGwsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcclxuICAgIHZhciBzdGFjayA9IG5ldyBfU3RhY2tpbmdDb250ZXh0Mi5kZWZhdWx0KGNvbnRhaW5lciwgbnVsbCwgdHJ1ZSk7XHJcblxyXG4gICAgcGFyc2VOb2RlVHJlZShub2RlLCBjb250YWluZXIsIHN0YWNrLCByZXNvdXJjZUxvYWRlciwgaW5kZXgpO1xyXG5cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgbG9nZ2VyLmxvZygnRmluaXNoZWQgcGFyc2luZyBub2RlIHRyZWUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RhY2s7XHJcbn07XHJcblxyXG52YXIgSUdOT1JFRF9OT0RFX05BTUVTID0gWydTQ1JJUFQnLCAnSEVBRCcsICdUSVRMRScsICdPQkpFQ1QnLCAnQlInLCAnT1BUSU9OJ107XHJcblxyXG52YXIgcGFyc2VOb2RlVHJlZSA9IGZ1bmN0aW9uIHBhcnNlTm9kZVRyZWUobm9kZSwgcGFyZW50LCBzdGFjaywgcmVzb3VyY2VMb2FkZXIsIGluZGV4KSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbmRleCA+IDUwMDAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWN1cnNpb24gZXJyb3Igd2hpbGUgcGFyc2luZyBub2RlIHRyZWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBjaGlsZE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQsIG5leHROb2RlOyBjaGlsZE5vZGU7IGNoaWxkTm9kZSA9IG5leHROb2RlKSB7XHJcbiAgICAgICAgbmV4dE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgdmFyIGRlZmF1bHRWaWV3ID0gY2hpbGROb2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAgICAgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LlRleHQgfHwgY2hpbGROb2RlIGluc3RhbmNlb2YgVGV4dCB8fCBkZWZhdWx0Vmlldy5wYXJlbnQgJiYgY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcucGFyZW50LlRleHQpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5kYXRhLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGROb2Rlcy5wdXNoKF9UZXh0Q29udGFpbmVyMi5kZWZhdWx0LmZyb21UZXh0Tm9kZShjaGlsZE5vZGUsIHBhcmVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBkZWZhdWx0Vmlldy5IVE1MRWxlbWVudCB8fCBjaGlsZE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBkZWZhdWx0Vmlldy5wYXJlbnQgJiYgY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcucGFyZW50LkhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChJR05PUkVEX05PREVfTkFNRVMuaW5kZXhPZihjaGlsZE5vZGUubm9kZU5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IG5ldyBfTm9kZUNvbnRhaW5lcjIuZGVmYXVsdChjaGlsZE5vZGUsIHBhcmVudCwgcmVzb3VyY2VMb2FkZXIsIGluZGV4KyspO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lSW5wdXRFbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfSW5wdXQuaW5saW5lVGV4dEFyZWFFbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZE5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX0lucHV0LmlubGluZVNlbGVjdEVsZW1lbnQpKGNoaWxkTm9kZSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5zdHlsZS5saXN0U3R5bGUgJiYgY29udGFpbmVyLnN0eWxlLmxpc3RTdHlsZS5saXN0U3R5bGVUeXBlICE9PSBfbGlzdFN0eWxlLkxJU1RfU1RZTEVfVFlQRS5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBfTGlzdEl0ZW0uaW5saW5lTGlzdEl0ZW1FbGVtZW50KShjaGlsZE5vZGUsIGNvbnRhaW5lciwgcmVzb3VyY2VMb2FkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTiA9IGNoaWxkTm9kZS50YWdOYW1lICE9PSAnVEVYVEFSRUEnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA9IGNyZWF0ZXNSZWFsU3RhY2tpbmdDb250ZXh0KGNvbnRhaW5lciwgY2hpbGROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgY3JlYXRlc1N0YWNraW5nQ29udGV4dChjb250YWluZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciB0cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dDpmYWxzZSwgYW55IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgYW5kIGRlc2NlbmRhbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRTdGFjayA9IHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IGNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSA/IHN0YWNrLmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKSA6IHN0YWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRTdGFjayA9IG5ldyBfU3RhY2tpbmdDb250ZXh0Mi5kZWZhdWx0KGNvbnRhaW5lciwgcGFyZW50U3RhY2ssIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3RhY2suY29udGV4dHMucHVzaChjaGlsZFN0YWNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VOb2RlVHJlZShjaGlsZE5vZGUsIGNvbnRhaW5lciwgY2hpbGRTdGFjaywgcmVzb3VyY2VMb2FkZXIsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFNIT1VMRF9UUkFWRVJTRV9DSElMRFJFTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VOb2RlVHJlZShjaGlsZE5vZGUsIGNvbnRhaW5lciwgc3RhY2ssIHJlc291cmNlTG9hZGVyLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIGRlZmF1bHRWaWV3LlNWR1NWR0VsZW1lbnQgfHwgY2hpbGROb2RlIGluc3RhbmNlb2YgU1ZHU1ZHRWxlbWVudCB8fCBkZWZhdWx0Vmlldy5wYXJlbnQgJiYgY2hpbGROb2RlIGluc3RhbmNlb2YgZGVmYXVsdFZpZXcucGFyZW50LlNWR1NWR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIF9jb250YWluZXIgPSBuZXcgX05vZGVDb250YWluZXIyLmRlZmF1bHQoY2hpbGROb2RlLCBwYXJlbnQsIHJlc291cmNlTG9hZGVyLCBpbmRleCsrKTtcclxuICAgICAgICAgICAgdmFyIF90cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA9IGNyZWF0ZXNSZWFsU3RhY2tpbmdDb250ZXh0KF9jb250YWluZXIsIGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgIGlmIChfdHJlYXRBc1JlYWxTdGFja2luZ0NvbnRleHQgfHwgY3JlYXRlc1N0YWNraW5nQ29udGV4dChfY29udGFpbmVyKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0OmZhbHNlLCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHNcclxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGFjdHVhbGx5IGNyZWF0ZSBhIG5ldyBzdGFja2luZyBjb250ZXh0IHNob3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICB2YXIgX3BhcmVudFN0YWNrID0gX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0IHx8IF9jb250YWluZXIuaXNQb3NpdGlvbmVkKCkgPyBzdGFjay5nZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0KCkgOiBzdGFjaztcclxuICAgICAgICAgICAgICAgIHZhciBfY2hpbGRTdGFjayA9IG5ldyBfU3RhY2tpbmdDb250ZXh0Mi5kZWZhdWx0KF9jb250YWluZXIsIF9wYXJlbnRTdGFjaywgX3RyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIF9wYXJlbnRTdGFjay5jb250ZXh0cy5wdXNoKF9jaGlsZFN0YWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YWNrLmNoaWxkcmVuLnB1c2goX2NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY3JlYXRlc1JlYWxTdGFja2luZ0NvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVzUmVhbFN0YWNraW5nQ29udGV4dChjb250YWluZXIsIG5vZGUpIHtcclxuICAgIHJldHVybiBjb250YWluZXIuaXNSb290RWxlbWVudCgpIHx8IGNvbnRhaW5lci5pc1Bvc2l0aW9uZWRXaXRoWkluZGV4KCkgfHwgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPCAxIHx8IGNvbnRhaW5lci5pc1RyYW5zZm9ybWVkKCkgfHwgaXNCb2R5V2l0aFRyYW5zcGFyZW50Um9vdChjb250YWluZXIsIG5vZGUpO1xyXG59O1xyXG5cclxudmFyIGNyZWF0ZXNTdGFja2luZ0NvbnRleHQgPSBmdW5jdGlvbiBjcmVhdGVzU3RhY2tpbmdDb250ZXh0KGNvbnRhaW5lcikge1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lci5pc1Bvc2l0aW9uZWQoKSB8fCBjb250YWluZXIuaXNGbG9hdGluZygpO1xyXG59O1xyXG5cclxudmFyIGlzQm9keVdpdGhUcmFuc3BhcmVudFJvb3QgPSBmdW5jdGlvbiBpc0JvZHlXaXRoVHJhbnNwYXJlbnRSb290KGNvbnRhaW5lciwgbm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUubm9kZU5hbWUgPT09ICdCT0RZJyAmJiBjb250YWluZXIucGFyZW50IGluc3RhbmNlb2YgX05vZGVDb250YWluZXIyLmRlZmF1bHQgJiYgY29udGFpbmVyLnBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5Qcm94eSA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBfRmVhdHVyZSA9IHJlcXVpcmUoJy4vRmVhdHVyZScpO1xyXG5cclxudmFyIF9GZWF0dXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZlYXR1cmUpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbnZhciBQcm94eSA9IGV4cG9ydHMuUHJveHkgPSBmdW5jdGlvbiBQcm94eShzcmMsIG9wdGlvbnMpIHtcclxuICAgIGlmICghb3B0aW9ucy5wcm94eSkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ05vIHByb3h5IGRlZmluZWQnIDogbnVsbCk7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJveHkgPSBvcHRpb25zLnByb3h5O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlVHlwZSA9IF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfQ09SU19YSFIgJiYgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9SRVNQT05TRV9UWVBFID8gJ2Jsb2InIDogJ3RleHQnO1xyXG4gICAgICAgIHZhciB4aHIgPSBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0NPUlNfWEhSID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgWERvbWFpblJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyIGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUeXBlID09PSAndGV4dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnRmFpbGVkIHRvIHByb3h5IHJlc291cmNlICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgKyAnIHdpdGggc3RhdHVzIGNvZGUgJyArIHhoci5zdGF0dXMgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHByb3h5ICsgJz91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChzcmMpICsgJyZyZXNwb25zZVR5cGU9JyArIHJlc3BvbnNlVHlwZSk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZVR5cGUgIT09ICd0ZXh0JyAmJiB4aHIgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuaW1hZ2VUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gb3B0aW9ucy5pbWFnZVRpbWVvdXQ7XHJcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBwcm94eWluZyAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpIDogJycpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0pO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucGFyc2VDb250ZW50ID0gZXhwb3J0cy5yZXNvbHZlUHNldWRvQ29udGVudCA9IGV4cG9ydHMucG9wQ291bnRlcnMgPSBleHBvcnRzLnBhcnNlQ291bnRlclJlc2V0ID0gZXhwb3J0cy5UT0tFTl9UWVBFID0gZXhwb3J0cy5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfSB9OyB9KCk7XHJcblxyXG52YXIgX0xpc3RJdGVtID0gcmVxdWlyZSgnLi9MaXN0SXRlbScpO1xyXG5cclxudmFyIF9saXN0U3R5bGUgPSByZXF1aXJlKCcuL3BhcnNpbmcvbGlzdFN0eWxlJyk7XHJcblxyXG52YXIgUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFID0gZXhwb3J0cy5QU0VVRE9fQ09OVEVOVF9JVEVNX1RZUEUgPSB7XHJcbiAgICBURVhUOiAwLFxyXG4gICAgSU1BR0U6IDFcclxufTtcclxuXHJcbnZhciBUT0tFTl9UWVBFID0gZXhwb3J0cy5UT0tFTl9UWVBFID0ge1xyXG4gICAgU1RSSU5HOiAwLFxyXG4gICAgQVRUUklCVVRFOiAxLFxyXG4gICAgVVJMOiAyLFxyXG4gICAgQ09VTlRFUjogMyxcclxuICAgIENPVU5URVJTOiA0LFxyXG4gICAgT1BFTlFVT1RFOiA1LFxyXG4gICAgQ0xPU0VRVU9URTogNlxyXG59O1xyXG5cclxudmFyIHBhcnNlQ291bnRlclJlc2V0ID0gZXhwb3J0cy5wYXJzZUNvdW50ZXJSZXNldCA9IGZ1bmN0aW9uIHBhcnNlQ291bnRlclJlc2V0KHN0eWxlLCBkYXRhKSB7XHJcbiAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5jb3VudGVyUmVzZXQgfHwgc3R5bGUuY291bnRlclJlc2V0ID09PSAnbm9uZScpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvdW50ZXJOYW1lcyA9IFtdO1xyXG4gICAgdmFyIGNvdW50ZXJSZXNldHMgPSBzdHlsZS5jb3VudGVyUmVzZXQuc3BsaXQoL1xccyosXFxzKi8pO1xyXG4gICAgdmFyIGxlbkNvdW50ZXJSZXNldHMgPSBjb3VudGVyUmVzZXRzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbkNvdW50ZXJSZXNldHM7IGkrKykge1xyXG4gICAgICAgIHZhciBfY291bnRlclJlc2V0cyRpJHNwbGkgPSBjb3VudGVyUmVzZXRzW2ldLnNwbGl0KC9cXHMrLyksXHJcbiAgICAgICAgICAgIF9jb3VudGVyUmVzZXRzJGkkc3BsaTIgPSBfc2xpY2VkVG9BcnJheShfY291bnRlclJlc2V0cyRpJHNwbGksIDIpLFxyXG4gICAgICAgICAgICBjb3VudGVyTmFtZSA9IF9jb3VudGVyUmVzZXRzJGkkc3BsaTJbMF0sXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IF9jb3VudGVyUmVzZXRzJGkkc3BsaTJbMV07XHJcblxyXG4gICAgICAgIGNvdW50ZXJOYW1lcy5wdXNoKGNvdW50ZXJOYW1lKTtcclxuICAgICAgICB2YXIgY291bnRlciA9IGRhdGEuY291bnRlcnNbY291bnRlck5hbWVdO1xyXG4gICAgICAgIGlmICghY291bnRlcikge1xyXG4gICAgICAgICAgICBjb3VudGVyID0gZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnRlci5wdXNoKHBhcnNlSW50KGluaXRpYWxWYWx1ZSB8fCAwLCAxMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb3VudGVyTmFtZXM7XHJcbn07XHJcblxyXG52YXIgcG9wQ291bnRlcnMgPSBleHBvcnRzLnBvcENvdW50ZXJzID0gZnVuY3Rpb24gcG9wQ291bnRlcnMoY291bnRlck5hbWVzLCBkYXRhKSB7XHJcbiAgICB2YXIgbGVuQ291bnRlcnMgPSBjb3VudGVyTmFtZXMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5Db3VudGVyczsgaSsrKSB7XHJcbiAgICAgICAgZGF0YS5jb3VudGVyc1tjb3VudGVyTmFtZXNbaV1dLnBvcCgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHJlc29sdmVQc2V1ZG9Db250ZW50ID0gZXhwb3J0cy5yZXNvbHZlUHNldWRvQ29udGVudCA9IGZ1bmN0aW9uIHJlc29sdmVQc2V1ZG9Db250ZW50KG5vZGUsIHN0eWxlLCBkYXRhKSB7XHJcbiAgICBpZiAoIXN0eWxlIHx8ICFzdHlsZS5jb250ZW50IHx8IHN0eWxlLmNvbnRlbnQgPT09ICdub25lJyB8fCBzdHlsZS5jb250ZW50ID09PSAnLW1vei1hbHQtY29udGVudCcgfHwgc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRva2VucyA9IHBhcnNlQ29udGVudChzdHlsZS5jb250ZW50KTtcclxuXHJcbiAgICB2YXIgbGVuID0gdG9rZW5zLmxlbmd0aDtcclxuICAgIHZhciBjb250ZW50SXRlbXMgPSBbXTtcclxuICAgIHZhciBzID0gJyc7XHJcblxyXG4gICAgLy8gaW5jcmVtZW50IHRoZSBjb3VudGVyIChpZiB0aGVyZSBpcyBhIFwiY291bnRlci1pbmNyZW1lbnRcIiBkZWNsYXJhdGlvbilcclxuICAgIHZhciBjb3VudGVySW5jcmVtZW50ID0gc3R5bGUuY291bnRlckluY3JlbWVudDtcclxuICAgIGlmIChjb3VudGVySW5jcmVtZW50ICYmIGNvdW50ZXJJbmNyZW1lbnQgIT09ICdub25lJykge1xyXG4gICAgICAgIHZhciBfY291bnRlckluY3JlbWVudCRzcGwgPSBjb3VudGVySW5jcmVtZW50LnNwbGl0KC9cXHMrLyksXHJcbiAgICAgICAgICAgIF9jb3VudGVySW5jcmVtZW50JHNwbDIgPSBfc2xpY2VkVG9BcnJheShfY291bnRlckluY3JlbWVudCRzcGwsIDIpLFxyXG4gICAgICAgICAgICBjb3VudGVyTmFtZSA9IF9jb3VudGVySW5jcmVtZW50JHNwbDJbMF0sXHJcbiAgICAgICAgICAgIGluY3JlbWVudFZhbHVlID0gX2NvdW50ZXJJbmNyZW1lbnQkc3BsMlsxXTtcclxuXHJcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBkYXRhLmNvdW50ZXJzW2NvdW50ZXJOYW1lXTtcclxuICAgICAgICBpZiAoY291bnRlcikge1xyXG4gICAgICAgICAgICBjb3VudGVyW2NvdW50ZXIubGVuZ3RoIC0gMV0gKz0gaW5jcmVtZW50VmFsdWUgPT09IHVuZGVmaW5lZCA/IDEgOiBwYXJzZUludChpbmNyZW1lbnRWYWx1ZSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBidWlsZCB0aGUgY29udGVudCBzdHJpbmdcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XHJcbiAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5TVFJJTkc6XHJcbiAgICAgICAgICAgICAgICBzICs9IHRva2VuLnZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQVRUUklCVVRFOlxyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0b2tlbi52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgKz0gbm9kZS5nZXRBdHRyaWJ1dGUodG9rZW4udmFsdWUpIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQ09VTlRFUjpcclxuICAgICAgICAgICAgICAgIHZhciBfY291bnRlciA9IGRhdGEuY291bnRlcnNbdG9rZW4ubmFtZSB8fCAnJ107XHJcbiAgICAgICAgICAgICAgICBpZiAoX2NvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzICs9IGZvcm1hdENvdW50ZXJWYWx1ZShbX2NvdW50ZXJbX2NvdW50ZXIubGVuZ3RoIC0gMV1dLCAnJywgdG9rZW4uZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBUT0tFTl9UWVBFLkNPVU5URVJTOlxyXG4gICAgICAgICAgICAgICAgdmFyIF9jb3VudGVycyA9IGRhdGEuY291bnRlcnNbdG9rZW4ubmFtZSB8fCAnJ107XHJcbiAgICAgICAgICAgICAgICBpZiAoX2NvdW50ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcyArPSBmb3JtYXRDb3VudGVyVmFsdWUoX2NvdW50ZXJzLCB0b2tlbi5nbHVlLCB0b2tlbi5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuT1BFTlFVT1RFOlxyXG4gICAgICAgICAgICAgICAgcyArPSBnZXRRdW90ZShzdHlsZSwgdHJ1ZSwgZGF0YS5xdW90ZURlcHRoKTtcclxuICAgICAgICAgICAgICAgIGRhdGEucXVvdGVEZXB0aCsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFRPS0VOX1RZUEUuQ0xPU0VRVU9URTpcclxuICAgICAgICAgICAgICAgIGRhdGEucXVvdGVEZXB0aC0tO1xyXG4gICAgICAgICAgICAgICAgcyArPSBnZXRRdW90ZShzdHlsZSwgZmFsc2UsIGRhdGEucXVvdGVEZXB0aCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVE9LRU5fVFlQRS5VUkw6XHJcbiAgICAgICAgICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLlRFWFQsIHZhbHVlOiBzIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtcy5wdXNoKHsgdHlwZTogUFNFVURPX0NPTlRFTlRfSVRFTV9UWVBFLklNQUdFLCB2YWx1ZTogdG9rZW4udmFsdWUgfHwgJycgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHMpIHtcclxuICAgICAgICBjb250ZW50SXRlbXMucHVzaCh7IHR5cGU6IFBTRVVET19DT05URU5UX0lURU1fVFlQRS5URVhULCB2YWx1ZTogcyB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udGVudEl0ZW1zO1xyXG59O1xyXG5cclxudmFyIHBhcnNlQ29udGVudCA9IGV4cG9ydHMucGFyc2VDb250ZW50ID0gZnVuY3Rpb24gcGFyc2VDb250ZW50KGNvbnRlbnQsIGNhY2hlKSB7XHJcbiAgICBpZiAoY2FjaGUgJiYgY2FjaGVbY29udGVudF0pIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVbY29udGVudF07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRva2VucyA9IFtdO1xyXG4gICAgdmFyIGxlbiA9IGNvbnRlbnQubGVuZ3RoO1xyXG5cclxuICAgIHZhciBpc1N0cmluZyA9IGZhbHNlO1xyXG4gICAgdmFyIGlzRXNjYXBlZCA9IGZhbHNlO1xyXG4gICAgdmFyIGlzRnVuY3Rpb24gPSBmYWxzZTtcclxuICAgIHZhciBzdHIgPSAnJztcclxuICAgIHZhciBmdW5jdGlvbk5hbWUgPSAnJztcclxuICAgIHZhciBhcmdzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIHZhciBjID0gY29udGVudC5jaGFyQXQoaSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYykge1xyXG4gICAgICAgICAgICBjYXNlIFwiJ1wiOlxyXG4gICAgICAgICAgICBjYXNlICdcIic6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNFc2NhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3RyaW5nID0gIWlzU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbiAmJiAhaXNTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLlNUUklORywgdmFsdWU6IHN0ciB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdcXFxcJzpcclxuICAgICAgICAgICAgICAgIGlmIChpc0VzY2FwZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcclxuICAgICAgICAgICAgICAgICAgICBpc0VzY2FwZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNFc2NhcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnKCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25OYW1lID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnKSc6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZ1bmN0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFRPS0VOX1RZUEUuQVRUUklCVVRFLCB2YWx1ZTogYXJnc1swXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY291bnRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRPS0VOX1RZUEUuQ09VTlRFUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXJnc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyLmZvcm1hdCA9IGFyZ3NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKGNvdW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjb3VudGVycyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9jb3VudGVyczIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRPS0VOX1RZUEUuQ09VTlRFUlMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFyZ3NbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvdW50ZXJzMi5nbHVlID0gYXJnc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY291bnRlcnMyLmZvcm1hdCA9IGFyZ3NbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKF9jb3VudGVyczIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd1cmwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5VUkwsIHZhbHVlOiBhcmdzWzBdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJywnOlxyXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IGM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2goc3RyKTtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1xcdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gYztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkT3RoZXJUb2tlbih0b2tlbnMsIHN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjICE9PSAnXFxcXCcpIHtcclxuICAgICAgICAgICAgaXNFc2NhcGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHIpIHtcclxuICAgICAgICBhZGRPdGhlclRva2VuKHRva2Vucywgc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FjaGUpIHtcclxuICAgICAgICBjYWNoZVtjb250ZW50XSA9IHRva2VucztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG59O1xyXG5cclxudmFyIGFkZE90aGVyVG9rZW4gPSBmdW5jdGlvbiBhZGRPdGhlclRva2VuKHRva2VucywgaWRlbnRpZmllcikge1xyXG4gICAgc3dpdGNoIChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY2FzZSAnb3Blbi1xdW90ZSc6XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogVE9LRU5fVFlQRS5PUEVOUVVPVEUgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Nsb3NlLXF1b3RlJzpcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBUT0tFTl9UWVBFLkNMT1NFUVVPVEUgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGdldFF1b3RlID0gZnVuY3Rpb24gZ2V0UXVvdGUoc3R5bGUsIGlzT3BlbmluZywgcXVvdGVEZXB0aCkge1xyXG4gICAgdmFyIHF1b3RlcyA9IHN0eWxlLnF1b3RlcyA/IHN0eWxlLnF1b3Rlcy5zcGxpdCgvXFxzKy8pIDogW1wiJ1xcXCInXCIsIFwiJ1xcXCInXCJdO1xyXG4gICAgdmFyIGlkeCA9IHF1b3RlRGVwdGggKiAyO1xyXG4gICAgaWYgKGlkeCA+PSBxdW90ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaWR4ID0gcXVvdGVzLmxlbmd0aCAtIDI7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzT3BlbmluZykge1xyXG4gICAgICAgICsraWR4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1b3Rlc1tpZHhdLnJlcGxhY2UoL15bXCInXXxbXCInXSQvZywgJycpO1xyXG59O1xyXG5cclxudmFyIGZvcm1hdENvdW50ZXJWYWx1ZSA9IGZ1bmN0aW9uIGZvcm1hdENvdW50ZXJWYWx1ZShjb3VudGVyLCBnbHVlLCBmb3JtYXQpIHtcclxuICAgIHZhciBsZW4gPSBjb3VudGVyLmxlbmd0aDtcclxuICAgIHZhciByZXN1bHQgPSAnJztcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBnbHVlIHx8ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gKDAsIF9MaXN0SXRlbS5jcmVhdGVDb3VudGVyVGV4dCkoY291bnRlcltpXSwgKDAsIF9saXN0U3R5bGUucGFyc2VMaXN0U3R5bGVUeXBlKShmb3JtYXQgfHwgJ2RlY2ltYWwnKSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG52YXIgX0JvdW5kcyA9IHJlcXVpcmUoJy4vQm91bmRzJyk7XHJcblxyXG52YXIgX0ZvbnQgPSByZXF1aXJlKCcuL0ZvbnQnKTtcclxuXHJcbnZhciBfR3JhZGllbnQgPSByZXF1aXJlKCcuL0dyYWRpZW50Jyk7XHJcblxyXG52YXIgX1RleHRDb250YWluZXIgPSByZXF1aXJlKCcuL1RleHRDb250YWluZXInKTtcclxuXHJcbnZhciBfVGV4dENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0Q29udGFpbmVyKTtcclxuXHJcbnZhciBfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vcGFyc2luZy9iYWNrZ3JvdW5kJyk7XHJcblxyXG52YXIgX2JvcmRlciA9IHJlcXVpcmUoJy4vcGFyc2luZy9ib3JkZXInKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxudmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVuZGVyZXIodGFyZ2V0LCBvcHRpb25zKSB7XHJcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0YXJnZXQucmVuZGVyKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVDbGFzcyhSZW5kZXJlciwgW3tcclxuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTm9kZShjb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUNvbnRlbnQoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdyZW5kZXJOb2RlQ29udGVudCcsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck5vZGVDb250ZW50KGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgX1RleHRDb250YWluZXIyLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGNoaWxkLnBhcmVudC5zdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5yZW5kZXJUZXh0Tm9kZShjaGlsZC5ib3VuZHMsIHN0eWxlLmNvbG9yLCBzdHlsZS5mb250LCBzdHlsZS50ZXh0RGVjb3JhdGlvbiwgc3R5bGUudGV4dFNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXQuZHJhd1NoYXBlKGNoaWxkLCBjb250YWluZXIuc3R5bGUuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfaW1hZ2UgPSBfdGhpcy5vcHRpb25zLmltYWdlU3RvcmUuZ2V0KGNvbnRhaW5lci5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudEJveCA9ICgwLCBfQm91bmRzLmNhbGN1bGF0ZUNvbnRlbnRCb3gpKGNvbnRhaW5lci5ib3VuZHMsIGNvbnRhaW5lci5zdHlsZS5wYWRkaW5nLCBjb250YWluZXIuc3R5bGUuYm9yZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF93aWR0aCA9IHR5cGVvZiBfaW1hZ2Uud2lkdGggPT09ICdudW1iZXInICYmIF9pbWFnZS53aWR0aCA+IDAgPyBfaW1hZ2Uud2lkdGggOiBjb250ZW50Qm94LndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2hlaWdodCA9IHR5cGVvZiBfaW1hZ2UuaGVpZ2h0ID09PSAnbnVtYmVyJyAmJiBfaW1hZ2UuaGVpZ2h0ID4gMCA/IF9pbWFnZS5oZWlnaHQgOiBjb250ZW50Qm94LmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF93aWR0aCA+IDAgJiYgX2hlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRhcmdldC5jbGlwKFsoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCkoY29udGFpbmVyLmN1cnZlZEJvdW5kcyldLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0LmRyYXdJbWFnZShfaW1hZ2UsIG5ldyBfQm91bmRzLkJvdW5kcygwLCAwLCBfd2lkdGgsIF9oZWlnaHQpLCBjb250ZW50Qm94KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2YXIgcGF0aHMgPSBjb250YWluZXIuZ2V0Q2xpcFBhdGhzKCk7XHJcbiAgICAgICAgICAgIGlmIChwYXRocy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNsaXAocGF0aHMsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAncmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTm9kZUJhY2tncm91bmRBbmRCb3JkZXJzKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZhciBIQVNfQkFDS0dST1VORCA9ICFjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3IuaXNUcmFuc3BhcmVudCgpIHx8IGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRJbWFnZS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICB2YXIgaGFzUmVuZGVyYWJsZUJvcmRlcnMgPSBjb250YWluZXIuc3R5bGUuYm9yZGVyLnNvbWUoZnVuY3Rpb24gKGJvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvcmRlci5ib3JkZXJTdHlsZSAhPT0gX2JvcmRlci5CT1JERVJfU1RZTEUuTk9ORSAmJiAhYm9yZGVyLmJvcmRlckNvbG9yLmlzVHJhbnNwYXJlbnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjaygpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kUGFpbnRpbmdBcmVhID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEpKGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMsIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDbGlwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoSEFTX0JBQ0tHUk9VTkQpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpczIudGFyZ2V0LmNsaXAoW2JhY2tncm91bmRQYWludGluZ0FyZWFdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yLmlzVHJhbnNwYXJlbnQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnRhcmdldC5maWxsKGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMi5yZW5kZXJCYWNrZ3JvdW5kSW1hZ2UoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGJvcmRlciwgc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3JkZXIuYm9yZGVyU3R5bGUgIT09IF9ib3JkZXIuQk9SREVSX1NUWUxFLk5PTkUgJiYgIWJvcmRlci5ib3JkZXJDb2xvci5pc1RyYW5zcGFyZW50KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckJvcmRlcihib3JkZXIsIHNpZGUsIGNvbnRhaW5lci5jdXJ2ZWRCb3VuZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKEhBU19CQUNLR1JPVU5EIHx8IGhhc1JlbmRlcmFibGVCb3JkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aHMgPSBjb250YWluZXIucGFyZW50ID8gY29udGFpbmVyLnBhcmVudC5nZXRDbGlwUGF0aHMoKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNsaXAocGF0aHMsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdyZW5kZXJCYWNrZ3JvdW5kSW1hZ2UnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCYWNrZ3JvdW5kSW1hZ2UoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZEltYWdlLnNsaWNlKDApLnJldmVyc2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChiYWNrZ3JvdW5kSW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2Uuc291cmNlLm1ldGhvZCA9PT0gJ3VybCcgJiYgYmFja2dyb3VuZEltYWdlLnNvdXJjZS5hcmdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5yZW5kZXJCYWNrZ3JvdW5kUmVwZWF0KGNvbnRhaW5lciwgYmFja2dyb3VuZEltYWdlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoL2dyYWRpZW50L2kudGVzdChiYWNrZ3JvdW5kSW1hZ2Uuc291cmNlLm1ldGhvZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpczMucmVuZGVyQmFja2dyb3VuZEdyYWRpZW50KGNvbnRhaW5lciwgYmFja2dyb3VuZEltYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ3JlbmRlckJhY2tncm91bmRSZXBlYXQnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCYWNrZ3JvdW5kUmVwZWF0KGNvbnRhaW5lciwgYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLm9wdGlvbnMuaW1hZ2VTdG9yZS5nZXQoYmFja2dyb3VuZC5zb3VyY2UuYXJnc1swXSk7XHJcbiAgICAgICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEgPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYSkoY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZE9yaWdpbiwgY29udGFpbmVyLmJvdW5kcywgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcsIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhY2tncm91bmRJbWFnZVNpemUgPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFNpemUpKGJhY2tncm91bmQsIGltYWdlLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24pKGJhY2tncm91bmQucG9zaXRpb24sIGJhY2tncm91bmRJbWFnZVNpemUsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9wYXRoID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoKShiYWNrZ3JvdW5kLCBwb3NpdGlvbiwgYmFja2dyb3VuZEltYWdlU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSwgY29udGFpbmVyLmJvdW5kcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIF9vZmZzZXRYID0gTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KTtcclxuICAgICAgICAgICAgICAgIHZhciBfb2Zmc2V0WSA9IE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbmRlclJlcGVhdChfcGF0aCwgaW1hZ2UsIGJhY2tncm91bmRJbWFnZVNpemUsIF9vZmZzZXRYLCBfb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAncmVuZGVyQmFja2dyb3VuZEdyYWRpZW50JyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQmFja2dyb3VuZEdyYWRpZW50KGNvbnRhaW5lciwgYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICB2YXIgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSA9ICgwLCBfYmFja2dyb3VuZC5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhKShjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZC5iYWNrZ3JvdW5kT3JpZ2luLCBjb250YWluZXIuYm91bmRzLCBjb250YWluZXIuc3R5bGUucGFkZGluZywgY29udGFpbmVyLnN0eWxlLmJvcmRlcik7XHJcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kSW1hZ2VTaXplID0gKDAsIF9iYWNrZ3JvdW5kLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUpKGJhY2tncm91bmQsIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEpO1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAoMCwgX2JhY2tncm91bmQuY2FsY3VsYXRlQmFja2dyb3VuZFBvc2l0aW9uKShiYWNrZ3JvdW5kLnBvc2l0aW9uLCBiYWNrZ3JvdW5kSW1hZ2VTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhKTtcclxuICAgICAgICAgICAgdmFyIGdyYWRpZW50Qm91bmRzID0gbmV3IF9Cb3VuZHMuQm91bmRzKE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSwgYmFja2dyb3VuZEltYWdlU2l6ZS53aWR0aCwgYmFja2dyb3VuZEltYWdlU2l6ZS5oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGdyYWRpZW50ID0gKDAsIF9HcmFkaWVudC5wYXJzZUdyYWRpZW50KShjb250YWluZXIsIGJhY2tncm91bmQuc291cmNlLCBncmFkaWVudEJvdW5kcyk7XHJcbiAgICAgICAgICAgIGlmIChncmFkaWVudCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChncmFkaWVudC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfR3JhZGllbnQuR1JBRElFTlRfVFlQRS5MSU5FQVJfR1JBRElFTlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyTGluZWFyR3JhZGllbnQoZ3JhZGllbnRCb3VuZHMsIGdyYWRpZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBfR3JhZGllbnQuR1JBRElFTlRfVFlQRS5SQURJQUxfR1JBRElFTlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmVuZGVyUmFkaWFsR3JhZGllbnQoZ3JhZGllbnRCb3VuZHMsIGdyYWRpZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAncmVuZGVyQm9yZGVyJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQm9yZGVyKGJvcmRlciwgc2lkZSwgY3VydmVQb2ludHMpIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXQuZHJhd1NoYXBlKCgwLCBfQm91bmRzLnBhcnNlUGF0aEZvckJvcmRlcikoY3VydmVQb2ludHMsIHNpZGUpLCBib3JkZXIuYm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdyZW5kZXJTdGFjaycsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclN0YWNrKHN0YWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YWNrLmNvbnRhaW5lci5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9vcGFjaXR5ID0gc3RhY2suZ2V0T3BhY2l0eSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9vcGFjaXR5ICE9PSB0aGlzLl9vcGFjaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2V0T3BhY2l0eShzdGFjay5nZXRPcGFjaXR5KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29wYWNpdHkgPSBfb3BhY2l0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgX3RyYW5zZm9ybSA9IHN0YWNrLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RyYW5zZm9ybSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRyYW5zZm9ybShzdGFjay5jb250YWluZXIuYm91bmRzLmxlZnQgKyBfdHJhbnNmb3JtLnRyYW5zZm9ybU9yaWdpblswXS52YWx1ZSwgc3RhY2suY29udGFpbmVyLmJvdW5kcy50b3AgKyBfdHJhbnNmb3JtLnRyYW5zZm9ybU9yaWdpblsxXS52YWx1ZSwgX3RyYW5zZm9ybS50cmFuc2Zvcm0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5yZW5kZXJTdGFja0NvbnRlbnQoc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN0YWNrQ29udGVudChzdGFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAncmVuZGVyU3RhY2tDb250ZW50JyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyU3RhY2tDb250ZW50KHN0YWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBfc3BsaXRTdGFja2luZ0NvbnRleHQgPSBzcGxpdFN0YWNraW5nQ29udGV4dHMoc3RhY2spLFxyXG4gICAgICAgICAgICAgICAgX3NwbGl0U3RhY2tpbmdDb250ZXh0MiA9IF9zbGljZWRUb0FycmF5KF9zcGxpdFN0YWNraW5nQ29udGV4dCwgNSksXHJcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZVpJbmRleCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMF0sXHJcbiAgICAgICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eSA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMV0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGl2ZVpJbmRleCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbMl0sXHJcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkRmxvYXRzID0gX3NwbGl0U3RhY2tpbmdDb250ZXh0MlszXSxcclxuICAgICAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbCA9IF9zcGxpdFN0YWNraW5nQ29udGV4dDJbNF07XHJcblxyXG4gICAgICAgICAgICB2YXIgX3NwbGl0RGVzY2VuZGFudHMgPSBzcGxpdERlc2NlbmRhbnRzKHN0YWNrKSxcclxuICAgICAgICAgICAgICAgIF9zcGxpdERlc2NlbmRhbnRzMiA9IF9zbGljZWRUb0FycmF5KF9zcGxpdERlc2NlbmRhbnRzLCAyKSxcclxuICAgICAgICAgICAgICAgIGlubGluZUxldmVsID0gX3NwbGl0RGVzY2VuZGFudHMyWzBdLFxyXG4gICAgICAgICAgICAgICAgbm9uSW5saW5lTGV2ZWwgPSBfc3BsaXREZXNjZW5kYW50czJbMV07XHJcblxyXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXBvc2l0aW9uLTMvI3BhaW50aW5nLW9yZGVyXHJcbiAgICAgICAgICAgIC8vIDEuIHRoZSBiYWNrZ3JvdW5kIGFuZCBib3JkZXJzIG9mIHRoZSBlbGVtZW50IGZvcm1pbmcgdGhlIHN0YWNraW5nIGNvbnRleHQuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQmFja2dyb3VuZEFuZEJvcmRlcnMoc3RhY2suY29udGFpbmVyKTtcclxuICAgICAgICAgICAgLy8gMi4gdGhlIGNoaWxkIHN0YWNraW5nIGNvbnRleHRzIHdpdGggbmVnYXRpdmUgc3RhY2sgbGV2ZWxzIChtb3N0IG5lZ2F0aXZlIGZpcnN0KS5cclxuICAgICAgICAgICAgbmVnYXRpdmVaSW5kZXguc29ydChzb3J0QnlaSW5kZXgpLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XHJcbiAgICAgICAgICAgIC8vIDMuIEZvciBhbGwgaXRzIGluLWZsb3csIG5vbi1wb3NpdGlvbmVkLCBibG9jay1sZXZlbCBkZXNjZW5kYW50cyBpbiB0cmVlIG9yZGVyOlxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlck5vZGVDb250ZW50KHN0YWNrLmNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIG5vbklubGluZUxldmVsLmZvckVhY2godGhpcy5yZW5kZXJOb2RlLCB0aGlzKTtcclxuICAgICAgICAgICAgLy8gNC4gQWxsIG5vbi1wb3NpdGlvbmVkIGZsb2F0aW5nIGRlc2NlbmRhbnRzLCBpbiB0cmVlIG9yZGVyLiBGb3IgZWFjaCBvbmUgb2YgdGhlc2UsXHJcbiAgICAgICAgICAgIC8vIHRyZWF0IHRoZSBlbGVtZW50IGFzIGlmIGl0IGNyZWF0ZWQgYSBuZXcgc3RhY2tpbmcgY29udGV4dCwgYnV0IGFueSBwb3NpdGlvbmVkIGRlc2NlbmRhbnRzIGFuZCBkZXNjZW5kYW50c1xyXG4gICAgICAgICAgICAvLyB3aGljaCBhY3R1YWxseSBjcmVhdGUgYSBuZXcgc3RhY2tpbmcgY29udGV4dCBzaG91bGQgYmUgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwYXJlbnQgc3RhY2tpbmcgY29udGV4dCxcclxuICAgICAgICAgICAgLy8gbm90IHRoaXMgbmV3IG9uZS5cclxuICAgICAgICAgICAgbm9uUG9zaXRpb25lZEZsb2F0cy5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAvLyA1LiB0aGUgaW4tZmxvdywgaW5saW5lLWxldmVsLCBub24tcG9zaXRpb25lZCBkZXNjZW5kYW50cywgaW5jbHVkaW5nIGlubGluZSB0YWJsZXMgYW5kIGlubGluZSBibG9ja3MuXHJcbiAgICAgICAgICAgIG5vblBvc2l0aW9uZWRJbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyU3RhY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICBpbmxpbmVMZXZlbC5mb3JFYWNoKHRoaXMucmVuZGVyTm9kZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIC8vIDYuIEFsbCBwb3NpdGlvbmVkLCBvcGFjaXR5IG9yIHRyYW5zZm9ybSBkZXNjZW5kYW50cywgaW4gdHJlZSBvcmRlciB0aGF0IGZhbGwgaW50byB0aGUgZm9sbG93aW5nIGNhdGVnb3JpZXM6XHJcbiAgICAgICAgICAgIC8vICBBbGwgcG9zaXRpb25lZCBkZXNjZW5kYW50cyB3aXRoICd6LWluZGV4OiBhdXRvJyBvciAnei1pbmRleDogMCcsIGluIHRyZWUgb3JkZXIuXHJcbiAgICAgICAgICAgIC8vICBGb3IgdGhvc2Ugd2l0aCAnei1pbmRleDogYXV0bycsIHRyZWF0IHRoZSBlbGVtZW50IGFzIGlmIGl0IGNyZWF0ZWQgYSBuZXcgc3RhY2tpbmcgY29udGV4dCxcclxuICAgICAgICAgICAgLy8gIGJ1dCBhbnkgcG9zaXRpb25lZCBkZXNjZW5kYW50cyBhbmQgZGVzY2VuZGFudHMgd2hpY2ggYWN0dWFsbHkgY3JlYXRlIGEgbmV3IHN0YWNraW5nIGNvbnRleHQgc2hvdWxkIGJlXHJcbiAgICAgICAgICAgIC8vICBjb25zaWRlcmVkIHBhcnQgb2YgdGhlIHBhcmVudCBzdGFja2luZyBjb250ZXh0LCBub3QgdGhpcyBuZXcgb25lLiBGb3IgdGhvc2Ugd2l0aCAnei1pbmRleDogMCcsXHJcbiAgICAgICAgICAgIC8vICB0cmVhdCB0aGUgc3RhY2tpbmcgY29udGV4dCBnZW5lcmF0ZWQgYXRvbWljYWxseS5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gIEFsbCBvcGFjaXR5IGRlc2NlbmRhbnRzIHdpdGggb3BhY2l0eSBsZXNzIHRoYW4gMVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgQWxsIHRyYW5zZm9ybSBkZXNjZW5kYW50cyB3aXRoIHRyYW5zZm9ybSBvdGhlciB0aGFuIG5vbmVcclxuICAgICAgICAgICAgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHkuZm9yRWFjaCh0aGlzLnJlbmRlclN0YWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgLy8gNy4gU3RhY2tpbmcgY29udGV4dHMgZm9ybWVkIGJ5IHBvc2l0aW9uZWQgZGVzY2VuZGFudHMgd2l0aCB6LWluZGljZXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEgaW4gei1pbmRleFxyXG4gICAgICAgICAgICAvLyBvcmRlciAoc21hbGxlc3QgZmlyc3QpIHRoZW4gdHJlZSBvcmRlci5cclxuICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXguc29ydChzb3J0QnlaSW5kZXgpLmZvckVhY2godGhpcy5yZW5kZXJTdGFjaywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ3JlbmRlcicsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihzdGFjaykge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5yZWN0YW5nbGUodGhpcy5vcHRpb25zLngsIHRoaXMub3B0aW9ucy55LCB0aGlzLm9wdGlvbnMud2lkdGgsIHRoaXMub3B0aW9ucy5oZWlnaHQsIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhY2soc3RhY2spO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQuZ2V0VGFyZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRoZW4oZnVuY3Rpb24gKG91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5vcHRpb25zLmxvZ2dlci5sb2coJ1JlbmRlciBjb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIFJlbmRlcmVyO1xyXG59KCk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcclxuXHJcblxyXG52YXIgc3BsaXREZXNjZW5kYW50cyA9IGZ1bmN0aW9uIHNwbGl0RGVzY2VuZGFudHMoc3RhY2spIHtcclxuICAgIHZhciBpbmxpbmVMZXZlbCA9IFtdO1xyXG4gICAgdmFyIG5vbklubGluZUxldmVsID0gW107XHJcblxyXG4gICAgdmFyIGxlbmd0aCA9IHN0YWNrLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSBzdGFjay5jaGlsZHJlbltpXTtcclxuICAgICAgICBpZiAoY2hpbGQuaXNJbmxpbmVMZXZlbCgpKSB7XHJcbiAgICAgICAgICAgIGlubGluZUxldmVsLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vbklubGluZUxldmVsLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbaW5saW5lTGV2ZWwsIG5vbklubGluZUxldmVsXTtcclxufTtcclxuXHJcbnZhciBzcGxpdFN0YWNraW5nQ29udGV4dHMgPSBmdW5jdGlvbiBzcGxpdFN0YWNraW5nQ29udGV4dHMoc3RhY2spIHtcclxuICAgIHZhciBuZWdhdGl2ZVpJbmRleCA9IFtdO1xyXG4gICAgdmFyIHplcm9PckF1dG9aSW5kZXhPclRyYW5zZm9ybWVkT3JPcGFjaXR5ID0gW107XHJcbiAgICB2YXIgcG9zaXRpdmVaSW5kZXggPSBbXTtcclxuICAgIHZhciBub25Qb3NpdGlvbmVkRmxvYXRzID0gW107XHJcbiAgICB2YXIgbm9uUG9zaXRpb25lZElubGluZUxldmVsID0gW107XHJcbiAgICB2YXIgbGVuZ3RoID0gc3RhY2suY29udGV4dHMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IHN0YWNrLmNvbnRleHRzW2ldO1xyXG4gICAgICAgIGlmIChjaGlsZC5jb250YWluZXIuaXNQb3NpdGlvbmVkKCkgfHwgY2hpbGQuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPCAxIHx8IGNoaWxkLmNvbnRhaW5lci5pc1RyYW5zZm9ybWVkKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnRhaW5lci5zdHlsZS56SW5kZXgub3JkZXIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZWdhdGl2ZVpJbmRleC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpdmVaSW5kZXgucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB6ZXJvT3JBdXRvWkluZGV4T3JUcmFuc2Zvcm1lZE9yT3BhY2l0eS5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5jb250YWluZXIuaXNGbG9hdGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBub25Qb3NpdGlvbmVkRmxvYXRzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9uUG9zaXRpb25lZElubGluZUxldmVsLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtuZWdhdGl2ZVpJbmRleCwgemVyb09yQXV0b1pJbmRleE9yVHJhbnNmb3JtZWRPck9wYWNpdHksIHBvc2l0aXZlWkluZGV4LCBub25Qb3NpdGlvbmVkRmxvYXRzLCBub25Qb3NpdGlvbmVkSW5saW5lTGV2ZWxdO1xyXG59O1xyXG5cclxudmFyIHNvcnRCeVpJbmRleCA9IGZ1bmN0aW9uIHNvcnRCeVpJbmRleChhLCBiKSB7XHJcbiAgICBpZiAoYS5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyID4gYi5jb250YWluZXIuc3R5bGUuekluZGV4Lm9yZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2UgaWYgKGEuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlciA8IGIuY29udGFpbmVyLnN0eWxlLnpJbmRleC5vcmRlcikge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYS5jb250YWluZXIuaW5kZXggPiBiLmNvbnRhaW5lci5pbmRleCA/IDEgOiAtMTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLlJlc291cmNlU3RvcmUgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xyXG5cclxudmFyIF9GZWF0dXJlID0gcmVxdWlyZSgnLi9GZWF0dXJlJyk7XHJcblxyXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XHJcblxyXG52YXIgX1Byb3h5ID0gcmVxdWlyZSgnLi9Qcm94eScpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG52YXIgUmVzb3VyY2VMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZXNvdXJjZUxvYWRlcihvcHRpb25zLCBsb2dnZXIsIHdpbmRvdykge1xyXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZXNvdXJjZUxvYWRlcik7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fd2luZG93ID0gd2luZG93O1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gdGhpcy5nZXRPcmlnaW4od2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKFJlc291cmNlTG9hZGVyLCBbe1xyXG4gICAgICAgIGtleTogJ2xvYWRTVkcnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkU1ZHKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gaWYgKG5vZGUudGFnTmFtZSAhPSAnc3ZnJyB8fCBGRUFUVVJFUy5TVVBQT1JUX1NWR19EUkFXSU5HKSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5sb2FkSW1hZ2UoYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX1gKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWNoZVtkYXRhXSA9IF9sb2FkU1ZHKGRhdGEsIHRoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdsb2FkSW1hZ2UnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5oYXNSZXNvdXJjZUluQ2FjaGUoc3JjKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNCbG9iSW1hZ2Uoc3JjKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gX2xvYWRJbWFnZShzcmMsIHRoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3JjO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzU1ZHKHNyYykgfHwgX0ZlYXR1cmUyLmRlZmF1bHQuU1VQUE9SVF9TVkdfRFJBV0lORykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbGxvd1RhaW50ID09PSB0cnVlIHx8IGlzSW5saW5lSW1hZ2Uoc3JjKSB8fCB0aGlzLmlzU2FtZU9yaWdpbihzcmMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2Uoc3JjLCBzcmMsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNTYW1lT3JpZ2luKHNyYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wcm94eSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gKDAsIF9Qcm94eS5Qcm94eSkoc3JjLCB0aGlzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCBfdGhpcy5vcHRpb25zLmltYWdlVGltZW91dCB8fCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMudXNlQ09SUyA9PT0gdHJ1ZSAmJiBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0NPUlNfSU1BR0VTKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHNyYywgc3JjLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnaW5saW5lSW1hZ2UnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmxpbmVJbWFnZShzcmMpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNJbmxpbmVJbWFnZShzcmMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xvYWRJbWFnZShzcmMsIHRoaXMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VJbkNhY2hlKHNyYykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW3NyY107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2FtZU9yaWdpbihzcmMpICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMucHJveHkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtzcmNdID0gKDAsIF9Qcm94eS5Qcm94eSkoc3JjLCB0aGlzLm9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfbG9hZEltYWdlKHNyYywgX3RoaXMyLm9wdGlvbnMuaW1hZ2VUaW1lb3V0IHx8IDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnhockltYWdlKHNyYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ3hockltYWdlJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24geGhySW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWNoZVtzcmNdID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdGYWlsZWQgdG8gZmV0Y2ggaW1hZ2UgJyArIHNyYy5zdWJzdHJpbmcoMCwgMjU2KSArICcgd2l0aCBzdGF0dXMgY29kZSAnICsgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLm9wdGlvbnMuaW1hZ2VUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdUaW1lZCBvdXQgKCcgKyB0aW1lb3V0ICsgJ21zKSBmZXRjaGluZyAnICsgc3JjLnN1YnN0cmluZygwLCAyNTYpIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgc3JjLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHNyYykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9sb2FkSW1hZ2Uoc3JjLCBfdGhpczMub3B0aW9ucy5pbWFnZVRpbWVvdXQgfHwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbc3JjXTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnbG9hZENhbnZhcycsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRDYW52YXMobm9kZSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gU3RyaW5nKHRoaXMuX2luZGV4KyspO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSBQcm9taXNlLnJlc29sdmUobm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2hhc1Jlc291cmNlSW5DYWNoZScsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1Jlc291cmNlSW5DYWNoZShrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmNhY2hlW2tleV0gIT09ICd1bmRlZmluZWQnO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdhZGRJbWFnZScsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEltYWdlKGtleSwgc3JjLCB1c2VDT1JTKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZygnQWRkZWQgaW1hZ2UgJyArIGtleS5zdWJzdHJpbmcoMCwgMjU2KSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpbWFnZUxvYWRIYW5kbGVyID0gZnVuY3Rpb24gaW1hZ2VMb2FkSGFuZGxlcihzdXBwb3J0c0RhdGFJbWFnZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lvcyBzYWZhcmkgMTAuMyB0YWludHMgY2FudmFzIHdpdGggZGF0YSB1cmxzIHVubGVzcyBjcm9zc09yaWdpbiBpcyBzZXQgdG8gYW5vbnltb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0c0RhdGFJbWFnZXMgfHwgdXNlQ09SUykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltZy5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmxpbmUgWE1MIGltYWdlcyBtYXkgZmFpbCB0byBwYXJzZSwgdGhyb3dpbmcgYW4gRXJyb3IgbGF0ZXIgb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczQub3B0aW9ucy5pbWFnZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBfdGhpczQub3B0aW9ucy5pbWFnZVRpbWVvdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGZldGNoaW5nICcgKyBzcmMuc3Vic3RyaW5nKDAsIDI1NikgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gaXNJbmxpbmVCYXNlNjRJbWFnZShzcmMpICYmICFpc1NWRyhzcmMpID8gLy8gJEZsb3dGaXhNZVxyXG4gICAgICAgICAgICBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0JBU0U2NF9EUkFXSU5HKHNyYykudGhlbihpbWFnZUxvYWRIYW5kbGVyKSA6IGltYWdlTG9hZEhhbmRsZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2lzU2FtZU9yaWdpbicsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2FtZU9yaWdpbih1cmwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JpZ2luKHVybCkgPT09IHRoaXMub3JpZ2luO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdnZXRPcmlnaW4nLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPcmlnaW4odXJsKSB7XHJcbiAgICAgICAgICAgIHZhciBsaW5rID0gdGhpcy5fbGluayB8fCAodGhpcy5fbGluayA9IHRoaXMuX3dpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xyXG4gICAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGxpbmsuaHJlZjsgLy8gSUU5LCBMT0whIC0gaHR0cDovL2pzZmlkZGxlLm5ldC9uaWtsYXN2aC8yZTQ4Yi9cclxuICAgICAgICAgICAgcmV0dXJuIGxpbmsucHJvdG9jb2wgKyBsaW5rLmhvc3RuYW1lICsgbGluay5wb3J0O1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdyZWFkeScsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWR5KCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5jYWNoZSk7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBrZXlzLm1hcChmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM1LmNhY2hlW3N0cl0uY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczUubG9nZ2VyLmxvZygnVW5hYmxlIHRvIGxvYWQgaW1hZ2UnLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh2YWx1ZXMpLnRoZW4oZnVuY3Rpb24gKGltYWdlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpczUubG9nZ2VyLmxvZygnRmluaXNoZWQgbG9hZGluZyAnICsgaW1hZ2VzLmxlbmd0aCArICcgaW1hZ2VzJywgaW1hZ2VzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVzb3VyY2VTdG9yZShrZXlzLCBpbWFnZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIFJlc291cmNlTG9hZGVyO1xyXG59KCk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNvdXJjZUxvYWRlcjtcclxuXHJcbnZhciBSZXNvdXJjZVN0b3JlID0gZXhwb3J0cy5SZXNvdXJjZVN0b3JlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVzb3VyY2VTdG9yZShrZXlzLCByZXNvdXJjZXMpIHtcclxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVzb3VyY2VTdG9yZSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2tleXMgPSBrZXlzO1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlcyA9IHJlc291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlQ2xhc3MoUmVzb3VyY2VTdG9yZSwgW3tcclxuICAgICAgICBrZXk6ICdnZXQnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT09IC0xID8gbnVsbCA6IHRoaXMuX3Jlc291cmNlc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBSZXNvdXJjZVN0b3JlO1xyXG59KCk7XHJcblxyXG52YXIgSU5MSU5FX1NWRyA9IC9eZGF0YTppbWFnZVxcL3N2Z1xcK3htbC9pO1xyXG52YXIgSU5MSU5FX0JBU0U2NCA9IC9eZGF0YTppbWFnZVxcLy4qO2Jhc2U2NCwvaTtcclxudmFyIElOTElORV9JTUcgPSAvXmRhdGE6aW1hZ2VcXC8uKi9pO1xyXG5cclxudmFyIGlzSW5saW5lSW1hZ2UgPSBmdW5jdGlvbiBpc0lubGluZUltYWdlKHNyYykge1xyXG4gICAgcmV0dXJuIElOTElORV9JTUcudGVzdChzcmMpO1xyXG59O1xyXG52YXIgaXNJbmxpbmVCYXNlNjRJbWFnZSA9IGZ1bmN0aW9uIGlzSW5saW5lQmFzZTY0SW1hZ2Uoc3JjKSB7XHJcbiAgICByZXR1cm4gSU5MSU5FX0JBU0U2NC50ZXN0KHNyYyk7XHJcbn07XHJcbnZhciBpc0Jsb2JJbWFnZSA9IGZ1bmN0aW9uIGlzQmxvYkltYWdlKHNyYykge1xyXG4gICAgcmV0dXJuIHNyYy5zdWJzdHIoMCwgNCkgPT09ICdibG9iJztcclxufTtcclxuXHJcbnZhciBpc1NWRyA9IGZ1bmN0aW9uIGlzU1ZHKHNyYykge1xyXG4gICAgcmV0dXJuIHNyYy5zdWJzdHIoLTMpLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnIHx8IElOTElORV9TVkcudGVzdChzcmMpO1xyXG59O1xyXG5cclxudmFyIF9sb2FkU1ZHID0gZnVuY3Rpb24gX2xvYWRTVkcoZGF0YSwgdGltZW91dCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2FudmdcIiAqLycuL2xpYnMvY2FudmcnKS50aGVuKGZ1bmN0aW9uIChjYW52Zykge1xyXG4gICAgICAgICAgICBpZiAoIShjYW52ZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSlcclxuICAgICAgICAgICAgICAgIGNhbnZnID0gY2FudmcuZGVmYXVsdDtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgICAgIGNhbnZnKGNhbnZhcywgZGF0YSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNhbGxiYWNrOiBmdW5jdGlvbiByZW5kZXJDYWxsYmFjaygpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjYW52YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYW52YXMpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShjYW52YXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJ1RpbWVkIG91dCAoJyArIHRpbWVvdXQgKyAnbXMpIGxvYWRpbmcgY2FudmFzJyA6ICcnKTtcclxuICAgICAgICAgICAgfSwgdGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgX2xvYWRJbWFnZSA9IGZ1bmN0aW9uIF9sb2FkSW1hZ2Uoc3JjLCB0aW1lb3V0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW1nLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcclxuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIElubGluZSBYTUwgaW1hZ2VzIG1heSBmYWlsIHRvIHBhcnNlLCB0aHJvd2luZyBhbiBFcnJvciBsYXRlciBvblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnVGltZWQgb3V0ICgnICsgdGltZW91dCArICdtcykgbG9hZGluZyBpbWFnZScgOiAnJyk7XHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcblxyXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xyXG5cclxudmFyIF9Ob2RlQ29udGFpbmVyID0gcmVxdWlyZSgnLi9Ob2RlQ29udGFpbmVyJyk7XHJcblxyXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XHJcblxyXG52YXIgX3Bvc2l0aW9uID0gcmVxdWlyZSgnLi9wYXJzaW5nL3Bvc2l0aW9uJyk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbnZhciBTdGFja2luZ0NvbnRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTdGFja2luZ0NvbnRleHQoY29udGFpbmVyLCBwYXJlbnQsIHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0KSB7XHJcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YWNraW5nQ29udGV4dCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuY29udGV4dHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy50cmVhdEFzUmVhbFN0YWNraW5nQ29udGV4dCA9IHRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVDbGFzcyhTdGFja2luZ0NvbnRleHQsIFt7XHJcbiAgICAgICAga2V5OiAnZ2V0T3BhY2l0eScsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE9wYWNpdHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMuY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgKiB0aGlzLnBhcmVudC5nZXRPcGFjaXR5KCkgOiB0aGlzLmNvbnRhaW5lci5zdHlsZS5vcGFjaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdnZXRSZWFsUGFyZW50U3RhY2tpbmdDb250ZXh0JyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVhbFBhcmVudFN0YWNraW5nQ29udGV4dCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnBhcmVudCB8fCB0aGlzLnRyZWF0QXNSZWFsU3RhY2tpbmdDb250ZXh0ID8gdGhpcyA6IHRoaXMucGFyZW50LmdldFJlYWxQYXJlbnRTdGFja2luZ0NvbnRleHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIFN0YWNraW5nQ29udGV4dDtcclxufSgpO1xyXG5cclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhY2tpbmdDb250ZXh0OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucGFyc2VUZXh0Qm91bmRzID0gZXhwb3J0cy5UZXh0Qm91bmRzID0gdW5kZWZpbmVkO1xyXG5cclxudmFyIF9Cb3VuZHMgPSByZXF1aXJlKCcuL0JvdW5kcycpO1xyXG5cclxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0RGVjb3JhdGlvbicpO1xyXG5cclxudmFyIF9GZWF0dXJlID0gcmVxdWlyZSgnLi9GZWF0dXJlJyk7XHJcblxyXG52YXIgX0ZlYXR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmVhdHVyZSk7XHJcblxyXG52YXIgX1VuaWNvZGUgPSByZXF1aXJlKCcuL1VuaWNvZGUnKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxudmFyIFRleHRCb3VuZHMgPSBleHBvcnRzLlRleHRCb3VuZHMgPSBmdW5jdGlvbiBUZXh0Qm91bmRzKHRleHQsIGJvdW5kcykge1xyXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRleHRCb3VuZHMpO1xyXG5cclxuICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLmJvdW5kcyA9IGJvdW5kcztcclxufTtcclxuXHJcbnZhciBwYXJzZVRleHRCb3VuZHMgPSBleHBvcnRzLnBhcnNlVGV4dEJvdW5kcyA9IGZ1bmN0aW9uIHBhcnNlVGV4dEJvdW5kcyh2YWx1ZSwgcGFyZW50LCBub2RlKSB7XHJcbiAgICB2YXIgbGV0dGVyUmVuZGVyaW5nID0gcGFyZW50LnN0eWxlLmxldHRlclNwYWNpbmcgIT09IDA7XHJcbiAgICB2YXIgdGV4dExpc3QgPSBsZXR0ZXJSZW5kZXJpbmcgPyAoMCwgX1VuaWNvZGUudG9Db2RlUG9pbnRzKSh2YWx1ZSkubWFwKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgcmV0dXJuICgwLCBfVW5pY29kZS5mcm9tQ29kZVBvaW50KShpKTtcclxuICAgIH0pIDogKDAsIF9Vbmljb2RlLmJyZWFrV29yZHMpKHZhbHVlLCBwYXJlbnQpO1xyXG4gICAgdmFyIGxlbmd0aCA9IHRleHRMaXN0Lmxlbmd0aDtcclxuICAgIHZhciBkZWZhdWx0VmlldyA9IG5vZGUucGFyZW50Tm9kZSA/IG5vZGUucGFyZW50Tm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogbnVsbDtcclxuICAgIHZhciBzY3JvbGxYID0gZGVmYXVsdFZpZXcgPyBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldCA6IDA7XHJcbiAgICB2YXIgc2Nyb2xsWSA9IGRlZmF1bHRWaWV3ID8gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQgOiAwO1xyXG4gICAgdmFyIHRleHRCb3VuZHMgPSBbXTtcclxuICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gdGV4dExpc3RbaV07XHJcbiAgICAgICAgaWYgKHBhcmVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiAhPT0gX3RleHREZWNvcmF0aW9uLlRFWFRfREVDT1JBVElPTi5OT05FIHx8IHRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKF9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfUkFOR0VfQk9VTkRTKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Qm91bmRzLnB1c2gobmV3IFRleHRCb3VuZHModGV4dCwgZ2V0UmFuZ2VCb3VuZHMobm9kZSwgb2Zmc2V0LCB0ZXh0Lmxlbmd0aCwgc2Nyb2xsWCwgc2Nyb2xsWSkpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXBsYWNlbWVudE5vZGUgPSBub2RlLnNwbGl0VGV4dCh0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0Qm91bmRzLnB1c2gobmV3IFRleHRCb3VuZHModGV4dCwgZ2V0V3JhcHBlckJvdW5kcyhub2RlLCBzY3JvbGxYLCBzY3JvbGxZKSkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIV9GZWF0dXJlMi5kZWZhdWx0LlNVUFBPUlRfUkFOR0VfQk9VTkRTKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnNwbGl0VGV4dCh0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9mZnNldCArPSB0ZXh0Lmxlbmd0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0Qm91bmRzO1xyXG59O1xyXG5cclxudmFyIGdldFdyYXBwZXJCb3VuZHMgPSBmdW5jdGlvbiBnZXRXcmFwcGVyQm91bmRzKG5vZGUsIHNjcm9sbFgsIHNjcm9sbFkpIHtcclxuICAgIHZhciB3cmFwcGVyID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2h0bWwyY2FudmFzd3JhcHBlcicpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlciwgbm9kZSk7XHJcbiAgICAgICAgdmFyIGJvdW5kcyA9ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKSh3cmFwcGVyLCBzY3JvbGxYLCBzY3JvbGxZKTtcclxuICAgICAgICBpZiAod3JhcHBlci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCwgd3JhcHBlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib3VuZHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IF9Cb3VuZHMuQm91bmRzKDAsIDAsIDAsIDApO1xyXG59O1xyXG5cclxudmFyIGdldFJhbmdlQm91bmRzID0gZnVuY3Rpb24gZ2V0UmFuZ2VCb3VuZHMobm9kZSwgb2Zmc2V0LCBsZW5ndGgsIHNjcm9sbFgsIHNjcm9sbFkpIHtcclxuICAgIHZhciByYW5nZSA9IG5vZGUub3duZXJEb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgcmFuZ2Uuc2V0U3RhcnQobm9kZSwgb2Zmc2V0KTtcclxuICAgIHJhbmdlLnNldEVuZChub2RlLCBvZmZzZXQgKyBsZW5ndGgpO1xyXG4gICAgcmV0dXJuIF9Cb3VuZHMuQm91bmRzLmZyb21DbGllbnRSZWN0KHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBzY3JvbGxYLCBzY3JvbGxZKTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5cclxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcclxuXHJcbnZhciBfdGV4dFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vcGFyc2luZy90ZXh0VHJhbnNmb3JtJyk7XHJcblxyXG52YXIgX1RleHRCb3VuZHMgPSByZXF1aXJlKCcuL1RleHRCb3VuZHMnKTtcclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG52YXIgVGV4dENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRleHRDb250YWluZXIodGV4dCwgcGFyZW50LCBib3VuZHMpIHtcclxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV4dENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBib3VuZHM7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKFRleHRDb250YWluZXIsIG51bGwsIFt7XHJcbiAgICAgICAga2V5OiAnZnJvbVRleHROb2RlJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbVRleHROb2RlKG5vZGUsIHBhcmVudCkge1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHRyYW5zZm9ybShub2RlLmRhdGEsIHBhcmVudC5zdHlsZS50ZXh0VHJhbnNmb3JtKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXh0Q29udGFpbmVyKHRleHQsIHBhcmVudCwgKDAsIF9UZXh0Qm91bmRzLnBhcnNlVGV4dEJvdW5kcykodGV4dCwgcGFyZW50LCBub2RlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBUZXh0Q29udGFpbmVyO1xyXG59KCk7XHJcblxyXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0Q29udGFpbmVyO1xyXG5cclxuXHJcbnZhciBDQVBJVEFMSVpFID0gLyhefFxcc3w6fC18XFwofFxcKSkoW2Etel0pL2c7XHJcblxyXG52YXIgdHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHRleHQsIF90cmFuc2Zvcm0pIHtcclxuICAgIHN3aXRjaCAoX3RyYW5zZm9ybSkge1xyXG4gICAgICAgIGNhc2UgX3RleHRUcmFuc2Zvcm0uVEVYVF9UUkFOU0ZPUk0uTE9XRVJDQVNFOlxyXG4gICAgICAgICAgICByZXR1cm4gdGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNhc2UgX3RleHRUcmFuc2Zvcm0uVEVYVF9UUkFOU0ZPUk0uQ0FQSVRBTElaRTpcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShDQVBJVEFMSVpFLCBjYXBpdGFsaXplKTtcclxuICAgICAgICBjYXNlIF90ZXh0VHJhbnNmb3JtLlRFWFRfVFJBTlNGT1JNLlVQUEVSQ0FTRTpcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemUobSwgcDEsIHAyKSB7XHJcbiAgICBpZiAobS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHAxICsgcDIudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbTtcclxufSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuYnJlYWtXb3JkcyA9IGV4cG9ydHMuZnJvbUNvZGVQb2ludCA9IGV4cG9ydHMudG9Db2RlUG9pbnRzID0gdW5kZWZpbmVkO1xyXG5cclxudmFyIF9jc3NMaW5lQnJlYWsgPSByZXF1aXJlKCdjc3MtbGluZS1icmVhaycpO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0b0NvZGVQb2ludHMnLCB7XHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9jc3NMaW5lQnJlYWsudG9Db2RlUG9pbnRzO1xyXG4gICAgfVxyXG59KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdmcm9tQ29kZVBvaW50Jywge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiBfY3NzTGluZUJyZWFrLmZyb21Db2RlUG9pbnQ7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIF9Ob2RlQ29udGFpbmVyID0gcmVxdWlyZSgnLi9Ob2RlQ29udGFpbmVyJyk7XHJcblxyXG52YXIgX05vZGVDb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTm9kZUNvbnRhaW5lcik7XHJcblxyXG52YXIgX292ZXJmbG93V3JhcCA9IHJlcXVpcmUoJy4vcGFyc2luZy9vdmVyZmxvd1dyYXAnKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG52YXIgYnJlYWtXb3JkcyA9IGV4cG9ydHMuYnJlYWtXb3JkcyA9IGZ1bmN0aW9uIGJyZWFrV29yZHMoc3RyLCBwYXJlbnQpIHtcclxuICAgIHZhciBicmVha2VyID0gKDAsIF9jc3NMaW5lQnJlYWsuTGluZUJyZWFrZXIpKHN0ciwge1xyXG4gICAgICAgIGxpbmVCcmVhazogcGFyZW50LnN0eWxlLmxpbmVCcmVhayxcclxuICAgICAgICB3b3JkQnJlYWs6IHBhcmVudC5zdHlsZS5vdmVyZmxvd1dyYXAgPT09IF9vdmVyZmxvd1dyYXAuT1ZFUkZMT1dfV1JBUC5CUkVBS19XT1JEID8gJ2JyZWFrLXdvcmQnIDogcGFyZW50LnN0eWxlLndvcmRCcmVha1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHdvcmRzID0gW107XHJcbiAgICB2YXIgYmsgPSB2b2lkIDA7XHJcblxyXG4gICAgd2hpbGUgKCEoYmsgPSBicmVha2VyLm5leHQoKSkuZG9uZSkge1xyXG4gICAgICAgIHdvcmRzLnB1c2goYmsudmFsdWUuc2xpY2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdvcmRzO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbnZhciBjb250YWlucyA9IGV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhiaXQsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gKGJpdCAmIHZhbHVlKSAhPT0gMDtcclxufTtcclxuXHJcbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xyXG59O1xyXG5cclxudmFyIGNvcHlDU1NTdHlsZXMgPSBleHBvcnRzLmNvcHlDU1NTdHlsZXMgPSBmdW5jdGlvbiBjb3B5Q1NTU3R5bGVzKHN0eWxlLCB0YXJnZXQpIHtcclxuICAgIC8vIEVkZ2UgZG9lcyBub3QgcHJvdmlkZSB2YWx1ZSBmb3IgY3NzVGV4dFxyXG4gICAgZm9yICh2YXIgaSA9IHN0eWxlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gc3R5bGUuaXRlbShpKTtcclxuICAgICAgICAvLyBTYWZhcmkgc2hvd3MgcHNldWRvZWxlbWVudHMgaWYgY29udGVudCBpcyBzZXRcclxuICAgICAgICBpZiAocHJvcGVydHkgIT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxudmFyIFNNQUxMX0lNQUdFID0gZXhwb3J0cy5TTUFMTF9JTUFHRSA9ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucmVuZGVyRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcclxuXHJcbnZhciBfTG9nZ2VyID0gcmVxdWlyZSgnLi9Mb2dnZXInKTtcclxuXHJcbnZhciBfTG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xvZ2dlcik7XHJcblxyXG52YXIgX05vZGVQYXJzZXIgPSByZXF1aXJlKCcuL05vZGVQYXJzZXInKTtcclxuXHJcbnZhciBfUmVuZGVyZXIgPSByZXF1aXJlKCcuL1JlbmRlcmVyJyk7XHJcblxyXG52YXIgX1JlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlcmVyKTtcclxuXHJcbnZhciBfRm9yZWlnbk9iamVjdFJlbmRlcmVyID0gcmVxdWlyZSgnLi9yZW5kZXJlci9Gb3JlaWduT2JqZWN0UmVuZGVyZXInKTtcclxuXHJcbnZhciBfRm9yZWlnbk9iamVjdFJlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvcmVpZ25PYmplY3RSZW5kZXJlcik7XHJcblxyXG52YXIgX0ZlYXR1cmUgPSByZXF1aXJlKCcuL0ZlYXR1cmUnKTtcclxuXHJcbnZhciBfRmVhdHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GZWF0dXJlKTtcclxuXHJcbnZhciBfQm91bmRzID0gcmVxdWlyZSgnLi9Cb3VuZHMnKTtcclxuXHJcbnZhciBfQ2xvbmUgPSByZXF1aXJlKCcuL0Nsb25lJyk7XHJcblxyXG52YXIgX0ZvbnQgPSByZXF1aXJlKCcuL0ZvbnQnKTtcclxuXHJcbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuL0NvbG9yJyk7XHJcblxyXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG52YXIgcmVuZGVyRWxlbWVudCA9IGV4cG9ydHMucmVuZGVyRWxlbWVudCA9IGZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucywgbG9nZ2VyKSB7XHJcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcclxuXHJcbiAgICB2YXIgd2luZG93Qm91bmRzID0gbmV3IF9Cb3VuZHMuQm91bmRzKG9wdGlvbnMuc2Nyb2xsWCwgb3B0aW9ucy5zY3JvbGxZLCBvcHRpb25zLndpbmRvd1dpZHRoLCBvcHRpb25zLndpbmRvd0hlaWdodCk7XHJcblxyXG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1iYWNrZ3JvdW5kLyNzcGVjaWFsLWJhY2tncm91bmRzXHJcbiAgICB2YXIgZG9jdW1lbnRCYWNrZ3JvdW5kQ29sb3IgPSBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IG5ldyBfQ29sb3IyLmRlZmF1bHQoZ2V0Q29tcHV0ZWRTdHlsZShvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYmFja2dyb3VuZENvbG9yKSA6IF9Db2xvci5UUkFOU1BBUkVOVDtcclxuICAgIHZhciBib2R5QmFja2dyb3VuZENvbG9yID0gb3duZXJEb2N1bWVudC5ib2R5ID8gbmV3IF9Db2xvcjIuZGVmYXVsdChnZXRDb21wdXRlZFN0eWxlKG93bmVyRG9jdW1lbnQuYm9keSkuYmFja2dyb3VuZENvbG9yKSA6IF9Db2xvci5UUkFOU1BBUkVOVDtcclxuXHJcbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gZWxlbWVudCA9PT0gb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudEJhY2tncm91bmRDb2xvci5pc1RyYW5zcGFyZW50KCkgPyBib2R5QmFja2dyb3VuZENvbG9yLmlzVHJhbnNwYXJlbnQoKSA/IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID8gbmV3IF9Db2xvcjIuZGVmYXVsdChvcHRpb25zLmJhY2tncm91bmRDb2xvcikgOiBudWxsIDogYm9keUJhY2tncm91bmRDb2xvciA6IGRvY3VtZW50QmFja2dyb3VuZENvbG9yIDogb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPyBuZXcgX0NvbG9yMi5kZWZhdWx0KG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSA6IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIChvcHRpb25zLmZvcmVpZ25PYmplY3RSZW5kZXJpbmcgPyAvLyAkRmxvd0ZpeE1lXHJcbiAgICBfRmVhdHVyZTIuZGVmYXVsdC5TVVBQT1JUX0ZPUkVJR05PQkpFQ1RfRFJBV0lORyA6IFByb21pc2UucmVzb2x2ZShmYWxzZSkpLnRoZW4oZnVuY3Rpb24gKHN1cHBvcnRGb3JlaWduT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRGb3JlaWduT2JqZWN0ID8gZnVuY3Rpb24gKGNsb25lcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZygnRG9jdW1lbnQgY2xvbmVkLCB1c2luZyBmb3JlaWduT2JqZWN0IHJlbmRlcmluZycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVyLmlubGluZUZvbnRzKG93bmVyRG9jdW1lbnQpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lci5yZXNvdXJjZUxvYWRlci5yZWFkeSgpO1xyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfRm9yZWlnbk9iamVjdFJlbmRlcmVyMi5kZWZhdWx0KGNsb25lci5kb2N1bWVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmlldyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsWCA9IGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFkgPSBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNEb2N1bWVudCA9IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0hUTUwnIHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gaXNEb2N1bWVudCA/ICgwLCBfQm91bmRzLnBhcnNlRG9jdW1lbnRTaXplKShvd25lckRvY3VtZW50KSA6ICgwLCBfQm91bmRzLnBhcnNlQm91bmRzKShlbGVtZW50LCBzY3JvbGxYLCBzY3JvbGxZKSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IF9yZWYubGVmdCxcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBfcmVmLnRvcDtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXI6IGxvZ2dlcixcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogb3B0aW9ucy5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICB4OiB0eXBlb2Ygb3B0aW9ucy54ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueCA6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdHlwZW9mIG9wdGlvbnMueSA9PT0gJ251bWJlcicgPyBvcHRpb25zLnkgOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMud2lkdGggOiBNYXRoLmNlaWwod2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuaGVpZ2h0IDogTWF0aC5jZWlsKGhlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGg6IG9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0OiBvcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiBvcHRpb25zLnNjcm9sbFgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWTogb3B0aW9ucy5zY3JvbGxZXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfShuZXcgX0Nsb25lLkRvY3VtZW50Q2xvbmVyKGVsZW1lbnQsIG9wdGlvbnMsIGxvZ2dlciwgdHJ1ZSwgcmVuZGVyRWxlbWVudCkpIDogKDAsIF9DbG9uZS5jbG9uZVdpbmRvdykob3duZXJEb2N1bWVudCwgd2luZG93Qm91bmRzLCBlbGVtZW50LCBvcHRpb25zLCBsb2dnZXIsIHJlbmRlckVsZW1lbnQpLnRoZW4oZnVuY3Rpb24gKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBfcmVmMyA9IF9zbGljZWRUb0FycmF5KF9yZWYyLCAzKSxcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IF9yZWYzWzBdLFxyXG4gICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudCA9IF9yZWYzWzFdLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VMb2FkZXIgPSBfcmVmM1syXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdEb2N1bWVudCBjbG9uZWQsIHVzaW5nIGNvbXB1dGVkIHJlbmRlcmluZycpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhY2sgPSAoMCwgX05vZGVQYXJzZXIuTm9kZVBhcnNlcikoY2xvbmVkRWxlbWVudCwgcmVzb3VyY2VMb2FkZXIsIGxvZ2dlcik7XHJcbiAgICAgICAgICAgIHZhciBjbG9uZWREb2N1bWVudCA9IGNsb25lZEVsZW1lbnQub3duZXJEb2N1bWVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgPT09IHN0YWNrLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgc3RhY2suY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQuYmFja2dyb3VuZENvbG9yID0gX0NvbG9yLlRSQU5TUEFSRU5UO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2VMb2FkZXIucmVhZHkoKS50aGVuKGZ1bmN0aW9uIChpbWFnZVN0b3JlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm9udE1ldHJpY3MgPSBuZXcgX0ZvbnQuRm9udE1ldHJpY3MoY2xvbmVkRG9jdW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdTdGFydGluZyByZW5kZXJlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmlldyA9IGNsb25lZERvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFggPSBkZWZhdWx0Vmlldy5wYWdlWE9mZnNldDtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxZID0gZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlzRG9jdW1lbnQgPSBjbG9uZWRFbGVtZW50LnRhZ05hbWUgPT09ICdIVE1MJyB8fCBjbG9uZWRFbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgX3JlZjQgPSBpc0RvY3VtZW50ID8gKDAsIF9Cb3VuZHMucGFyc2VEb2N1bWVudFNpemUpKG93bmVyRG9jdW1lbnQpIDogKDAsIF9Cb3VuZHMucGFyc2VCb3VuZHMpKGNsb25lZEVsZW1lbnQsIHNjcm9sbFgsIHNjcm9sbFkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gX3JlZjQud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gX3JlZjQuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBfcmVmNC5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IF9yZWY0LnRvcDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVuZGVyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBmb250TWV0cmljczogZm9udE1ldHJpY3MsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTdG9yZTogaW1hZ2VTdG9yZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dnZXI6IGxvZ2dlcixcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogb3B0aW9ucy5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICB4OiB0eXBlb2Ygb3B0aW9ucy54ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMueCA6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogdHlwZW9mIG9wdGlvbnMueSA9PT0gJ251bWJlcicgPyBvcHRpb25zLnkgOiB0b3AsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMud2lkdGggOiBNYXRoLmNlaWwod2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMuaGVpZ2h0IDogTWF0aC5jZWlsKGhlaWdodClcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG9wdGlvbnMudGFyZ2V0Lm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW5kZXJlciA9IG5ldyBfUmVuZGVyZXIyLmRlZmF1bHQodGFyZ2V0LCByZW5kZXJPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcihzdGFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgX1JlbmRlcmVyMi5kZWZhdWx0KG9wdGlvbnMudGFyZ2V0LCByZW5kZXJPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gcmVuZGVyZXIucmVuZGVyKHN0YWNrKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmVDb250YWluZXIgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coJ0Nhbm5vdCBkZXRhY2ggY2xvbmVkIGlmcmFtZSBhcyBpdCBpcyBub3QgaW4gdGhlIERPTSBhbnltb3JlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG52YXIgX1BhdGggPSByZXF1aXJlKCcuL1BhdGgnKTtcclxuXHJcbnZhciBfVmVjdG9yID0gcmVxdWlyZSgnLi9WZWN0b3InKTtcclxuXHJcbnZhciBfVmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZlY3Rvcik7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbnZhciBsZXJwID0gZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XHJcbiAgICByZXR1cm4gbmV3IF9WZWN0b3IyLmRlZmF1bHQoYS54ICsgKGIueCAtIGEueCkgKiB0LCBhLnkgKyAoYi55IC0gYS55KSAqIHQpO1xyXG59O1xyXG5cclxudmFyIEJlemllckN1cnZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmV6aWVyQ3VydmUoc3RhcnQsIHN0YXJ0Q29udHJvbCwgZW5kQ29udHJvbCwgZW5kKSB7XHJcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJlemllckN1cnZlKTtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlID0gX1BhdGguUEFUSC5CRVpJRVJfQ1VSVkU7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuc3RhcnRDb250cm9sID0gc3RhcnRDb250cm9sO1xyXG4gICAgICAgIHRoaXMuZW5kQ29udHJvbCA9IGVuZENvbnRyb2w7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKEJlemllckN1cnZlLCBbe1xyXG4gICAgICAgIGtleTogJ3N1YmRpdmlkZScsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YmRpdmlkZSh0LCBmaXJzdEhhbGYpIHtcclxuICAgICAgICAgICAgdmFyIGFiID0gbGVycCh0aGlzLnN0YXJ0LCB0aGlzLnN0YXJ0Q29udHJvbCwgdCk7XHJcbiAgICAgICAgICAgIHZhciBiYyA9IGxlcnAodGhpcy5zdGFydENvbnRyb2wsIHRoaXMuZW5kQ29udHJvbCwgdCk7XHJcbiAgICAgICAgICAgIHZhciBjZCA9IGxlcnAodGhpcy5lbmRDb250cm9sLCB0aGlzLmVuZCwgdCk7XHJcbiAgICAgICAgICAgIHZhciBhYmJjID0gbGVycChhYiwgYmMsIHQpO1xyXG4gICAgICAgICAgICB2YXIgYmNjZCA9IGxlcnAoYmMsIGNkLCB0KTtcclxuICAgICAgICAgICAgdmFyIGRlc3QgPSBsZXJwKGFiYmMsIGJjY2QsIHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3RIYWxmID8gbmV3IEJlemllckN1cnZlKHRoaXMuc3RhcnQsIGFiLCBhYmJjLCBkZXN0KSA6IG5ldyBCZXppZXJDdXJ2ZShkZXN0LCBiY2NkLCBjZCwgdGhpcy5lbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdyZXZlcnNlJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCZXppZXJDdXJ2ZSh0aGlzLmVuZCwgdGhpcy5lbmRDb250cm9sLCB0aGlzLnN0YXJ0Q29udHJvbCwgdGhpcy5zdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBCZXppZXJDdXJ2ZTtcclxufSgpO1xyXG5cclxuZXhwb3J0cy5kZWZhdWx0ID0gQmV6aWVyQ3VydmU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciBfUGF0aCA9IHJlcXVpcmUoJy4vUGF0aCcpO1xyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbnZhciBDaXJjbGUgPSBmdW5jdGlvbiBDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2lyY2xlKTtcclxuXHJcbiAgICB0aGlzLnR5cGUgPSBfUGF0aC5QQVRILkNJUkNMRTtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGlmIChpc05hTih4KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHggdmFsdWUgZ2l2ZW4gZm9yIENpcmNsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOYU4oeSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB5IHZhbHVlIGdpdmVuIGZvciBDaXJjbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmFOKHJhZGl1cykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCByYWRpdXMgdmFsdWUgZ2l2ZW4gZm9yIENpcmNsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuZGVmYXVsdCA9IENpcmNsZTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG52YXIgUEFUSCA9IGV4cG9ydHMuUEFUSCA9IHtcclxuICAgIFZFQ1RPUjogMCxcclxuICAgIEJFWklFUl9DVVJWRTogMSxcclxuICAgIENJUkNMRTogMlxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxudmFyIFNpemUgPSBmdW5jdGlvbiBTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaXplKTtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxufTtcclxuXHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNpemU7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciBfUGF0aCA9IHJlcXVpcmUoJy4vUGF0aCcpO1xyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbnZhciBWZWN0b3IgPSBmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xyXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZlY3Rvcik7XHJcblxyXG4gICAgdGhpcy50eXBlID0gX1BhdGguUEFUSC5WRUNUT1I7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgeCB2YWx1ZSBnaXZlbiBmb3IgVmVjdG9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05hTih5KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHkgdmFsdWUgZ2l2ZW4gZm9yIFZlY3RvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xyXG5cclxudmFyIF9DYW52YXNSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvQ2FudmFzUmVuZGVyZXInKTtcclxuXHJcbnZhciBfQ2FudmFzUmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FudmFzUmVuZGVyZXIpO1xyXG5cclxudmFyIF9Mb2dnZXIgPSByZXF1aXJlKCcuL0xvZ2dlcicpO1xyXG5cclxudmFyIF9Mb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTG9nZ2VyKTtcclxuXHJcbnZhciBfV2luZG93ID0gcmVxdWlyZSgnLi9XaW5kb3cnKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG52YXIgaHRtbDJjYW52YXMgPSBmdW5jdGlvbiBodG1sMmNhbnZhcyhlbGVtZW50LCBjb25mKSB7XHJcbiAgICB2YXIgY29uZmlnID0gY29uZiB8fCB7fTtcclxuICAgIHZhciBsb2dnZXIgPSBuZXcgX0xvZ2dlcjIuZGVmYXVsdCh0eXBlb2YgY29uZmlnLmxvZ2dpbmcgPT09ICdib29sZWFuJyA/IGNvbmZpZy5sb2dnaW5nIDogdHJ1ZSk7XHJcbiAgICBsb2dnZXIubG9nKCdodG1sMmNhbnZhcyAnICsgJyRucG1fcGFja2FnZV92ZXJzaW9uJyk7XHJcblxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbmZpZy5vbnJlbmRlcmVkID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgbG9nZ2VyLmVycm9yKCdvbnJlbmRlcmVkIG9wdGlvbiBpcyBkZXByZWNhdGVkLCBodG1sMmNhbnZhcyByZXR1cm5zIGEgUHJvbWlzZSB3aXRoIHRoZSBjYW52YXMgYXMgdGhlIHZhbHVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XHJcbiAgICBpZiAoIW93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1Byb3ZpZGVkIGVsZW1lbnQgaXMgbm90IHdpdGhpbiBhIERvY3VtZW50Jyk7XHJcbiAgICB9XHJcbiAgICB2YXIgZGVmYXVsdFZpZXcgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG5cclxuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICBhbGxvd1RhaW50OiBmYWxzZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBpbWFnZVRpbWVvdXQ6IDE1MDAwLFxyXG4gICAgICAgIGxvZ2dpbmc6IHRydWUsXHJcbiAgICAgICAgcHJveHk6IG51bGwsXHJcbiAgICAgICAgcmVtb3ZlQ29udGFpbmVyOiB0cnVlLFxyXG4gICAgICAgIGZvcmVpZ25PYmplY3RSZW5kZXJpbmc6IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlOiBkZWZhdWx0Vmlldy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsXHJcbiAgICAgICAgdGFyZ2V0OiBuZXcgX0NhbnZhc1JlbmRlcmVyMi5kZWZhdWx0KGNvbmZpZy5jYW52YXMpLFxyXG4gICAgICAgIHVzZUNPUlM6IGZhbHNlLFxyXG4gICAgICAgIHdpbmRvd1dpZHRoOiBkZWZhdWx0Vmlldy5pbm5lcldpZHRoLFxyXG4gICAgICAgIHdpbmRvd0hlaWdodDogZGVmYXVsdFZpZXcuaW5uZXJIZWlnaHQsXHJcbiAgICAgICAgc2Nyb2xsWDogZGVmYXVsdFZpZXcucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgc2Nyb2xsWTogZGVmYXVsdFZpZXcucGFnZVlPZmZzZXRcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9ICgwLCBfV2luZG93LnJlbmRlckVsZW1lbnQpKGVsZW1lbnQsIF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgY29uZmlnKSwgbG9nZ2VyKTtcclxuXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmh0bWwyY2FudmFzLkNhbnZhc1JlbmRlcmVyID0gX0NhbnZhc1JlbmRlcmVyMi5kZWZhdWx0O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBodG1sMmNhbnZhczsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnBhcnNlQmFja2dyb3VuZEltYWdlID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmQgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRSZXBlYXRQYXRoID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQb3NpdGlvbmluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmdQYWludGluZ0FyZWEgPSBleHBvcnRzLmNhbGN1bGF0ZUdyYWRpZW50QmFja2dyb3VuZFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRTaXplID0gZXhwb3J0cy5CQUNLR1JPVU5EX09SSUdJTiA9IGV4cG9ydHMuQkFDS0dST1VORF9DTElQID0gZXhwb3J0cy5CQUNLR1JPVU5EX1NJWkUgPSBleHBvcnRzLkJBQ0tHUk9VTkRfUkVQRUFUID0gdW5kZWZpbmVkO1xyXG5cclxudmFyIF9Db2xvciA9IHJlcXVpcmUoJy4uL0NvbG9yJyk7XHJcblxyXG52YXIgX0NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbG9yKTtcclxuXHJcbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi4vTGVuZ3RoJyk7XHJcblxyXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xyXG5cclxudmFyIF9TaXplID0gcmVxdWlyZSgnLi4vZHJhd2luZy9TaXplJyk7XHJcblxyXG52YXIgX1NpemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2l6ZSk7XHJcblxyXG52YXIgX1ZlY3RvciA9IHJlcXVpcmUoJy4uL2RyYXdpbmcvVmVjdG9yJyk7XHJcblxyXG52YXIgX1ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WZWN0b3IpO1xyXG5cclxudmFyIF9Cb3VuZHMgPSByZXF1aXJlKCcuLi9Cb3VuZHMnKTtcclxuXHJcbnZhciBfcGFkZGluZyA9IHJlcXVpcmUoJy4vcGFkZGluZycpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG52YXIgQkFDS0dST1VORF9SRVBFQVQgPSBleHBvcnRzLkJBQ0tHUk9VTkRfUkVQRUFUID0ge1xyXG4gICAgUkVQRUFUOiAwLFxyXG4gICAgTk9fUkVQRUFUOiAxLFxyXG4gICAgUkVQRUFUX1g6IDIsXHJcbiAgICBSRVBFQVRfWTogM1xyXG59O1xyXG5cclxudmFyIEJBQ0tHUk9VTkRfU0laRSA9IGV4cG9ydHMuQkFDS0dST1VORF9TSVpFID0ge1xyXG4gICAgQVVUTzogMCxcclxuICAgIENPTlRBSU46IDEsXHJcbiAgICBDT1ZFUjogMixcclxuICAgIExFTkdUSDogM1xyXG59O1xyXG5cclxudmFyIEJBQ0tHUk9VTkRfQ0xJUCA9IGV4cG9ydHMuQkFDS0dST1VORF9DTElQID0ge1xyXG4gICAgQk9SREVSX0JPWDogMCxcclxuICAgIFBBRERJTkdfQk9YOiAxLFxyXG4gICAgQ09OVEVOVF9CT1g6IDJcclxufTtcclxuXHJcbnZhciBCQUNLR1JPVU5EX09SSUdJTiA9IGV4cG9ydHMuQkFDS0dST1VORF9PUklHSU4gPSBCQUNLR1JPVU5EX0NMSVA7XHJcblxyXG52YXIgQVVUTyA9ICdhdXRvJztcclxuXHJcbnZhciBCYWNrZ3JvdW5kU2l6ZSA9IGZ1bmN0aW9uIEJhY2tncm91bmRTaXplKHNpemUpIHtcclxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYWNrZ3JvdW5kU2l6ZSk7XHJcblxyXG4gICAgc3dpdGNoIChzaXplKSB7XHJcbiAgICAgICAgY2FzZSAnY29udGFpbic6XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5DT05UQUlOO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdjb3Zlcic6XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5DT1ZFUjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXV0byc6XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IEJBQ0tHUk9VTkRfU0laRS5BVVRPO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3IF9MZW5ndGgyLmRlZmF1bHQoc2l6ZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY2FsY3VsYXRlQmFja2dyb3VuZFNpemUgPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZFNpemUoYmFja2dyb3VuZEltYWdlLCBpbWFnZSwgYm91bmRzKSB7XHJcbiAgICB2YXIgd2lkdGggPSAwO1xyXG4gICAgdmFyIGhlaWdodCA9IDA7XHJcbiAgICB2YXIgc2l6ZSA9IGJhY2tncm91bmRJbWFnZS5zaXplO1xyXG4gICAgaWYgKHNpemVbMF0uc2l6ZSA9PT0gQkFDS0dST1VORF9TSVpFLkNPTlRBSU4gfHwgc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQ09WRVIpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0UmF0aW8gPSBib3VuZHMud2lkdGggLyBib3VuZHMuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjdXJyZW50UmF0aW8gPSBpbWFnZS53aWR0aCAvIGltYWdlLmhlaWdodDtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0UmF0aW8gPCBjdXJyZW50UmF0aW8gIT09IChzaXplWzBdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5DT1ZFUikgPyBuZXcgX1NpemUyLmRlZmF1bHQoYm91bmRzLndpZHRoLCBib3VuZHMud2lkdGggLyBjdXJyZW50UmF0aW8pIDogbmV3IF9TaXplMi5kZWZhdWx0KGJvdW5kcy5oZWlnaHQgKiBjdXJyZW50UmF0aW8sIGJvdW5kcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzaXplWzBdLnZhbHVlKSB7XHJcbiAgICAgICAgd2lkdGggPSBzaXplWzBdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTyAmJiBzaXplWzFdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPKSB7XHJcbiAgICAgICAgaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChzaXplWzFdLnNpemUgPT09IEJBQ0tHUk9VTkRfU0laRS5BVVRPKSB7XHJcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBpbWFnZS53aWR0aCAqIGltYWdlLmhlaWdodDtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZVsxXS52YWx1ZSkge1xyXG4gICAgICAgIGhlaWdodCA9IHNpemVbMV0udmFsdWUuZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2l6ZVswXS5zaXplID09PSBCQUNLR1JPVU5EX1NJWkUuQVVUTykge1xyXG4gICAgICAgIHdpZHRoID0gaGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0ICogaW1hZ2Uud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBfU2l6ZTIuZGVmYXVsdCh3aWR0aCwgaGVpZ2h0KTtcclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplID0gZXhwb3J0cy5jYWxjdWxhdGVHcmFkaWVudEJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gY2FsY3VsYXRlR3JhZGllbnRCYWNrZ3JvdW5kU2l6ZShiYWNrZ3JvdW5kSW1hZ2UsIGJvdW5kcykge1xyXG4gICAgdmFyIHNpemUgPSBiYWNrZ3JvdW5kSW1hZ2Uuc2l6ZTtcclxuICAgIHZhciB3aWR0aCA9IHNpemVbMF0udmFsdWUgPyBzaXplWzBdLnZhbHVlLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKSA6IGJvdW5kcy53aWR0aDtcclxuICAgIHZhciBoZWlnaHQgPSBzaXplWzFdLnZhbHVlID8gc2l6ZVsxXS52YWx1ZS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy5oZWlnaHQpIDogc2l6ZVswXS52YWx1ZSA/IHdpZHRoIDogYm91bmRzLmhlaWdodDtcclxuXHJcbiAgICByZXR1cm4gbmV3IF9TaXplMi5kZWZhdWx0KHdpZHRoLCBoZWlnaHQpO1xyXG59O1xyXG5cclxudmFyIEFVVE9fU0laRSA9IG5ldyBCYWNrZ3JvdW5kU2l6ZShBVVRPKTtcclxuXHJcbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUGFpbnRpbmdBcmVhID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZ1BhaW50aW5nQXJlYShjdXJ2ZXMsIGNsaXApIHtcclxuICAgIHN3aXRjaCAoY2xpcCkge1xyXG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9DTElQLkJPUkRFUl9CT1g6XHJcbiAgICAgICAgICAgIHJldHVybiAoMCwgX0JvdW5kcy5jYWxjdWxhdGVCb3JkZXJCb3hQYXRoKShjdXJ2ZXMpO1xyXG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9DTElQLlBBRERJTkdfQk9YOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94UGF0aCkoY3VydmVzKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhID0gZXhwb3J0cy5jYWxjdWxhdGVCYWNrZ3JvdW5nUG9zaXRpb25pbmdBcmVhID0gZnVuY3Rpb24gY2FsY3VsYXRlQmFja2dyb3VuZ1Bvc2l0aW9uaW5nQXJlYShiYWNrZ3JvdW5kT3JpZ2luLCBib3VuZHMsIHBhZGRpbmcsIGJvcmRlcikge1xyXG4gICAgdmFyIHBhZGRpbmdCb3ggPSAoMCwgX0JvdW5kcy5jYWxjdWxhdGVQYWRkaW5nQm94KShib3VuZHMsIGJvcmRlcik7XHJcblxyXG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kT3JpZ2luKSB7XHJcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX09SSUdJTi5CT1JERVJfQk9YOlxyXG4gICAgICAgICAgICByZXR1cm4gYm91bmRzO1xyXG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9PUklHSU4uQ09OVEVOVF9CT1g6XHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhZGRpbmdbX3BhZGRpbmcuUEFERElOR19TSURFUy5MRUZUXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nUmlnaHQgPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuUklHSFRdLmdldEFic29sdXRlVmFsdWUoYm91bmRzLndpZHRoKTtcclxuICAgICAgICAgICAgdmFyIHBhZGRpbmdUb3AgPSBwYWRkaW5nW19wYWRkaW5nLlBBRERJTkdfU0lERVMuVE9QXS5nZXRBYnNvbHV0ZVZhbHVlKGJvdW5kcy53aWR0aCk7XHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nQm90dG9tID0gcGFkZGluZ1tfcGFkZGluZy5QQURESU5HX1NJREVTLkJPVFRPTV0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9Cb3VuZHMuQm91bmRzKHBhZGRpbmdCb3gubGVmdCArIHBhZGRpbmdMZWZ0LCBwYWRkaW5nQm94LnRvcCArIHBhZGRpbmdUb3AsIHBhZGRpbmdCb3gud2lkdGggLSBwYWRkaW5nTGVmdCAtIHBhZGRpbmdSaWdodCwgcGFkZGluZ0JveC5oZWlnaHQgLSBwYWRkaW5nVG9wIC0gcGFkZGluZ0JvdHRvbSk7XHJcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX09SSUdJTi5QQURESU5HX0JPWDpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gcGFkZGluZ0JveDtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5kUG9zaXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbiA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2tncm91bmRQb3NpdGlvbihwb3NpdGlvbiwgc2l6ZSwgYm91bmRzKSB7XHJcbiAgICByZXR1cm4gbmV3IF9WZWN0b3IyLmRlZmF1bHQocG9zaXRpb25bMF0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMud2lkdGggLSBzaXplLndpZHRoKSwgcG9zaXRpb25bMV0uZ2V0QWJzb2x1dGVWYWx1ZShib3VuZHMuaGVpZ2h0IC0gc2l6ZS5oZWlnaHQpKTtcclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aCA9IGV4cG9ydHMuY2FsY3VsYXRlQmFja2dyb3VuZFJlcGVhdFBhdGggPSBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrZ3JvdW5kUmVwZWF0UGF0aChiYWNrZ3JvdW5kLCBwb3NpdGlvbiwgc2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYSwgYm91bmRzKSB7XHJcbiAgICB2YXIgcmVwZWF0ID0gYmFja2dyb3VuZC5yZXBlYXQ7XHJcbiAgICBzd2l0Y2ggKHJlcGVhdCkge1xyXG4gICAgICAgIGNhc2UgQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUX1g6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoKSwgTWF0aC5yb3VuZChzaXplLmhlaWdodCArIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChzaXplLmhlaWdodCArIGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSkpXTtcclxuICAgICAgICBjYXNlIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9ZOlxyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYm91bmRzLnRvcCkpLCBuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEubGVmdCArIHBvc2l0aW9uLnggKyBzaXplLndpZHRoKSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy5oZWlnaHQgKyBib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKV07XHJcbiAgICAgICAgY2FzZSBCQUNLR1JPVU5EX1JFUEVBVC5OT19SRVBFQVQ6XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLnRvcCArIHBvc2l0aW9uLnkpKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChiYWNrZ3JvdW5kUG9zaXRpb25pbmdBcmVhLmxlZnQgKyBwb3NpdGlvbi54ICsgc2l6ZS53aWR0aCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCArIHNpemUud2lkdGgpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRQb3NpdGlvbmluZ0FyZWEudG9wICsgcG9zaXRpb24ueSArIHNpemUuaGVpZ2h0KSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS5sZWZ0ICsgcG9zaXRpb24ueCksIE1hdGgucm91bmQoYmFja2dyb3VuZFBvc2l0aW9uaW5nQXJlYS50b3AgKyBwb3NpdGlvbi55ICsgc2l6ZS5oZWlnaHQpKV07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgX1ZlY3RvcjIuZGVmYXVsdChNYXRoLnJvdW5kKGJvdW5kcy5sZWZ0KSwgTWF0aC5yb3VuZChib3VuZHMudG9wKSksIG5ldyBfVmVjdG9yMi5kZWZhdWx0KE1hdGgucm91bmQoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGgpLCBNYXRoLnJvdW5kKGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCArIGJvdW5kcy53aWR0aCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKSwgbmV3IF9WZWN0b3IyLmRlZmF1bHQoTWF0aC5yb3VuZChib3VuZHMubGVmdCksIE1hdGgucm91bmQoYm91bmRzLmhlaWdodCArIGJvdW5kcy50b3ApKV07XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcGFyc2VCYWNrZ3JvdW5kID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmQgPSBmdW5jdGlvbiBwYXJzZUJhY2tncm91bmQoc3R5bGUsIHJlc291cmNlTG9hZGVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS5iYWNrZ3JvdW5kQ29sb3IpLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogcGFyc2VCYWNrZ3JvdW5kSW1hZ2VzKHN0eWxlLCByZXNvdXJjZUxvYWRlciksXHJcbiAgICAgICAgYmFja2dyb3VuZENsaXA6IHBhcnNlQmFja2dyb3VuZENsaXAoc3R5bGUuYmFja2dyb3VuZENsaXApLFxyXG4gICAgICAgIGJhY2tncm91bmRPcmlnaW46IHBhcnNlQmFja2dyb3VuZE9yaWdpbihzdHlsZS5iYWNrZ3JvdW5kT3JpZ2luKVxyXG4gICAgfTtcclxufTtcclxuXHJcbnZhciBwYXJzZUJhY2tncm91bmRDbGlwID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kQ2xpcChiYWNrZ3JvdW5kQ2xpcCkge1xyXG4gICAgc3dpdGNoIChiYWNrZ3JvdW5kQ2xpcCkge1xyXG4gICAgICAgIGNhc2UgJ3BhZGRpbmctYm94JzpcclxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfQ0xJUC5QQURESU5HX0JPWDtcclxuICAgICAgICBjYXNlICdjb250ZW50LWJveCc6XHJcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX0NMSVAuQ09OVEVOVF9CT1g7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQkFDS0dST1VORF9DTElQLkJPUkRFUl9CT1g7XHJcbn07XHJcblxyXG52YXIgcGFyc2VCYWNrZ3JvdW5kT3JpZ2luID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kT3JpZ2luKGJhY2tncm91bmRPcmlnaW4pIHtcclxuICAgIHN3aXRjaCAoYmFja2dyb3VuZE9yaWdpbikge1xyXG4gICAgICAgIGNhc2UgJ3BhZGRpbmctYm94JzpcclxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLlBBRERJTkdfQk9YO1xyXG4gICAgICAgIGNhc2UgJ2NvbnRlbnQtYm94JzpcclxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLkNPTlRFTlRfQk9YO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEJBQ0tHUk9VTkRfT1JJR0lOLkJPUkRFUl9CT1g7XHJcbn07XHJcblxyXG52YXIgcGFyc2VCYWNrZ3JvdW5kUmVwZWF0ID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kUmVwZWF0KGJhY2tncm91bmRSZXBlYXQpIHtcclxuICAgIHN3aXRjaCAoYmFja2dyb3VuZFJlcGVhdC50cmltKCkpIHtcclxuICAgICAgICBjYXNlICduby1yZXBlYXQnOlxyXG4gICAgICAgICAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuTk9fUkVQRUFUO1xyXG4gICAgICAgIGNhc2UgJ3JlcGVhdC14JzpcclxuICAgICAgICBjYXNlICdyZXBlYXQgbm8tcmVwZWF0JzpcclxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9YO1xyXG4gICAgICAgIGNhc2UgJ3JlcGVhdC15JzpcclxuICAgICAgICBjYXNlICduby1yZXBlYXQgcmVwZWF0JzpcclxuICAgICAgICAgICAgcmV0dXJuIEJBQ0tHUk9VTkRfUkVQRUFULlJFUEVBVF9ZO1xyXG4gICAgICAgIGNhc2UgJ3JlcGVhdCc6XHJcbiAgICAgICAgICAgIHJldHVybiBCQUNLR1JPVU5EX1JFUEVBVC5SRVBFQVQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGJhY2tncm91bmQtcmVwZWF0IHZhbHVlIFwiJyArIGJhY2tncm91bmRSZXBlYXQgKyAnXCInKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQkFDS0dST1VORF9SRVBFQVQuUkVQRUFUO1xyXG59O1xyXG5cclxudmFyIHBhcnNlQmFja2dyb3VuZEltYWdlcyA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZEltYWdlcyhzdHlsZSwgcmVzb3VyY2VMb2FkZXIpIHtcclxuICAgIHZhciBzb3VyY2VzID0gcGFyc2VCYWNrZ3JvdW5kSW1hZ2Uoc3R5bGUuYmFja2dyb3VuZEltYWdlKS5tYXAoZnVuY3Rpb24gKGJhY2tncm91bmRJbWFnZSkge1xyXG4gICAgICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UubWV0aG9kID09PSAndXJsJykge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gcmVzb3VyY2VMb2FkZXIubG9hZEltYWdlKGJhY2tncm91bmRJbWFnZS5hcmdzWzBdKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlLmFyZ3MgPSBrZXkgPyBba2V5XSA6IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmFja2dyb3VuZEltYWdlO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uLnNwbGl0KCcsJyk7XHJcbiAgICB2YXIgcmVwZWF0cyA9IHN0eWxlLmJhY2tncm91bmRSZXBlYXQuc3BsaXQoJywnKTtcclxuICAgIHZhciBzaXplcyA9IHN0eWxlLmJhY2tncm91bmRTaXplLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgcmV0dXJuIHNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UsIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIHNpemUgPSAoc2l6ZXNbaW5kZXhdIHx8IEFVVE8pLnRyaW0oKS5zcGxpdCgnICcpLm1hcChwYXJzZUJhY2tncm91bmRTaXplKTtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSAocG9zaXRpb25zW2luZGV4XSB8fCBBVVRPKS50cmltKCkuc3BsaXQoJyAnKS5tYXAocGFyc2VCYWNrZ291bmRQb3NpdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxyXG4gICAgICAgICAgICByZXBlYXQ6IHBhcnNlQmFja2dyb3VuZFJlcGVhdCh0eXBlb2YgcmVwZWF0c1tpbmRleF0gPT09ICdzdHJpbmcnID8gcmVwZWF0c1tpbmRleF0gOiByZXBlYXRzWzBdKSxcclxuICAgICAgICAgICAgc2l6ZTogc2l6ZS5sZW5ndGggPCAyID8gW3NpemVbMF0sIEFVVE9fU0laRV0gOiBbc2l6ZVswXSwgc2l6ZVsxXV0sXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbi5sZW5ndGggPCAyID8gW3Bvc2l0aW9uWzBdLCBwb3NpdGlvblswXV0gOiBbcG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdXVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhciBwYXJzZUJhY2tncm91bmRTaXplID0gZnVuY3Rpb24gcGFyc2VCYWNrZ3JvdW5kU2l6ZShzaXplKSB7XHJcbiAgICByZXR1cm4gc2l6ZSA9PT0gJ2F1dG8nID8gQVVUT19TSVpFIDogbmV3IEJhY2tncm91bmRTaXplKHNpemUpO1xyXG59O1xyXG5cclxudmFyIHBhcnNlQmFja2dvdW5kUG9zaXRpb24gPSBmdW5jdGlvbiBwYXJzZUJhY2tnb3VuZFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMTAwJScpO1xyXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdCgnMCUnKTtcclxuICAgICAgICBjYXNlICdhdXRvJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IF9MZW5ndGgyLmRlZmF1bHQocG9zaXRpb24pO1xyXG59O1xyXG5cclxudmFyIHBhcnNlQmFja2dyb3VuZEltYWdlID0gZXhwb3J0cy5wYXJzZUJhY2tncm91bmRJbWFnZSA9IGZ1bmN0aW9uIHBhcnNlQmFja2dyb3VuZEltYWdlKGltYWdlKSB7XHJcbiAgICB2YXIgd2hpdGVzcGFjZSA9IC9eXFxzJC87XHJcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICB2YXIgbWV0aG9kID0gJyc7XHJcbiAgICB2YXIgcXVvdGUgPSBudWxsO1xyXG4gICAgdmFyIGRlZmluaXRpb24gPSAnJztcclxuICAgIHZhciBtb2RlID0gMDtcclxuICAgIHZhciBudW1QYXJlbiA9IDA7XHJcblxyXG4gICAgdmFyIGFwcGVuZFJlc3VsdCA9IGZ1bmN0aW9uIGFwcGVuZFJlc3VsdCgpIHtcclxuICAgICAgICB2YXIgcHJlZml4ID0gJyc7XHJcbiAgICAgICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbi5zdWJzdHIoMCwgMSkgPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBkZWZpbml0aW9uLnN1YnN0cigxLCBkZWZpbml0aW9uLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGRlZmluaXRpb24udHJpbSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHByZWZpeF9pID0gbWV0aG9kLmluZGV4T2YoJy0nLCAxKSArIDE7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2Quc3Vic3RyKDAsIDEpID09PSAnLScgJiYgcHJlZml4X2kgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBtZXRob2Quc3Vic3RyKDAsIHByZWZpeF9pKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kLnN1YnN0cihwcmVmaXhfaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QgIT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmdzID0gW107XHJcbiAgICAgICAgbWV0aG9kID0gZGVmaW5pdGlvbiA9ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbWFnZS5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgIGlmIChtb2RlID09PSAwICYmIHdoaXRlc3BhY2UudGVzdChjKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAoYykge1xyXG4gICAgICAgICAgICBjYXNlICdcIic6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXF1b3RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBjO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdW90ZSA9PT0gYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcoJzpcclxuICAgICAgICAgICAgICAgIGlmIChxdW90ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1QYXJlbisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyknOlxyXG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW4gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtUGFyZW4tLTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJywnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBlbmRSZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobnVtUGFyZW4gPT09IDAgJiYgIW1ldGhvZC5tYXRjaCgvXnVybCQvaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGRlZmluaXRpb24udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW9kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBtZXRob2QgKz0gYztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWZpbml0aW9uICs9IGM7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXBwZW5kUmVzdWx0KCk7XHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnBhcnNlQm9yZGVyID0gZXhwb3J0cy5CT1JERVJfU0lERVMgPSBleHBvcnRzLkJPUkRFUl9TVFlMRSA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBfQ29sb3IgPSByZXF1aXJlKCcuLi9Db2xvcicpO1xyXG5cclxudmFyIF9Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xvcik7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxyXG5cclxudmFyIEJPUkRFUl9TVFlMRSA9IGV4cG9ydHMuQk9SREVSX1NUWUxFID0ge1xyXG4gICAgTk9ORTogMCxcclxuICAgIFNPTElEOiAxXHJcbn07XHJcblxyXG52YXIgQk9SREVSX1NJREVTID0gZXhwb3J0cy5CT1JERVJfU0lERVMgPSB7XHJcbiAgICBUT1A6IDAsXHJcbiAgICBSSUdIVDogMSxcclxuICAgIEJPVFRPTTogMixcclxuICAgIExFRlQ6IDNcclxufTtcclxuXHJcbnZhciBTSURFUyA9IE9iamVjdC5rZXlzKEJPUkRFUl9TSURFUykubWFwKGZ1bmN0aW9uIChzKSB7XHJcbiAgICByZXR1cm4gcy50b0xvd2VyQ2FzZSgpO1xyXG59KTtcclxuXHJcbnZhciBwYXJzZUJvcmRlclN0eWxlID0gZnVuY3Rpb24gcGFyc2VCb3JkZXJTdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZSkge1xyXG4gICAgICAgIGNhc2UgJ25vbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gQk9SREVSX1NUWUxFLk5PTkU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQk9SREVSX1NUWUxFLlNPTElEO1xyXG59O1xyXG5cclxudmFyIHBhcnNlQm9yZGVyID0gZXhwb3J0cy5wYXJzZUJvcmRlciA9IGZ1bmN0aW9uIHBhcnNlQm9yZGVyKHN0eWxlKSB7XHJcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XHJcbiAgICAgICAgdmFyIGJvcmRlckNvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItJyArIHNpZGUgKyAnLWNvbG9yJykpO1xyXG4gICAgICAgIHZhciBib3JkZXJTdHlsZSA9IHBhcnNlQm9yZGVyU3R5bGUoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy1zdHlsZScpKTtcclxuICAgICAgICB2YXIgYm9yZGVyV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci0nICsgc2lkZSArICctd2lkdGgnKSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yLFxyXG4gICAgICAgICAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiBpc05hTihib3JkZXJXaWR0aCkgPyAwIDogYm9yZGVyV2lkdGhcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5wYXJzZUJvcmRlclJhZGl1cyA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcclxuXHJcbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi4vTGVuZ3RoJyk7XHJcblxyXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbnZhciBTSURFUyA9IFsndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2JvdHRvbS1yaWdodCcsICdib3R0b20tbGVmdCddO1xyXG5cclxudmFyIHBhcnNlQm9yZGVyUmFkaXVzID0gZXhwb3J0cy5wYXJzZUJvcmRlclJhZGl1cyA9IGZ1bmN0aW9uIHBhcnNlQm9yZGVyUmFkaXVzKHN0eWxlKSB7XHJcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLScgKyBzaWRlICsgJy1yYWRpdXMnKTtcclxuXHJcbiAgICAgICAgdmFyIF92YWx1ZSRzcGxpdCRtYXAgPSB2YWx1ZS5zcGxpdCgnICcpLm1hcChfTGVuZ3RoMi5kZWZhdWx0LmNyZWF0ZSksXHJcbiAgICAgICAgICAgIF92YWx1ZSRzcGxpdCRtYXAyID0gX3NsaWNlZFRvQXJyYXkoX3ZhbHVlJHNwbGl0JG1hcCwgMiksXHJcbiAgICAgICAgICAgIGhvcml6b250YWwgPSBfdmFsdWUkc3BsaXQkbWFwMlswXSxcclxuICAgICAgICAgICAgdmVydGljYWwgPSBfdmFsdWUkc3BsaXQkbWFwMlsxXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ZXJ0aWNhbCA9PT0gJ3VuZGVmaW5lZCcgPyBbaG9yaXpvbnRhbCwgaG9yaXpvbnRhbF0gOiBbaG9yaXpvbnRhbCwgdmVydGljYWxdO1xyXG4gICAgfSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxudmFyIERJU1BMQVkgPSBleHBvcnRzLkRJU1BMQVkgPSB7XHJcbiAgICBOT05FOiAxIDw8IDAsXHJcbiAgICBCTE9DSzogMSA8PCAxLFxyXG4gICAgSU5MSU5FOiAxIDw8IDIsXHJcbiAgICBSVU5fSU46IDEgPDwgMyxcclxuICAgIEZMT1c6IDEgPDwgNCxcclxuICAgIEZMT1dfUk9PVDogMSA8PCA1LFxyXG4gICAgVEFCTEU6IDEgPDwgNixcclxuICAgIEZMRVg6IDEgPDwgNyxcclxuICAgIEdSSUQ6IDEgPDwgOCxcclxuICAgIFJVQlk6IDEgPDwgOSxcclxuICAgIFNVQkdSSUQ6IDEgPDwgMTAsXHJcbiAgICBMSVNUX0lURU06IDEgPDwgMTEsXHJcbiAgICBUQUJMRV9ST1dfR1JPVVA6IDEgPDwgMTIsXHJcbiAgICBUQUJMRV9IRUFERVJfR1JPVVA6IDEgPDwgMTMsXHJcbiAgICBUQUJMRV9GT09URVJfR1JPVVA6IDEgPDwgMTQsXHJcbiAgICBUQUJMRV9ST1c6IDEgPDwgMTUsXHJcbiAgICBUQUJMRV9DRUxMOiAxIDw8IDE2LFxyXG4gICAgVEFCTEVfQ09MVU1OX0dST1VQOiAxIDw8IDE3LFxyXG4gICAgVEFCTEVfQ09MVU1OOiAxIDw8IDE4LFxyXG4gICAgVEFCTEVfQ0FQVElPTjogMSA8PCAxOSxcclxuICAgIFJVQllfQkFTRTogMSA8PCAyMCxcclxuICAgIFJVQllfVEVYVDogMSA8PCAyMSxcclxuICAgIFJVQllfQkFTRV9DT05UQUlORVI6IDEgPDwgMjIsXHJcbiAgICBSVUJZX1RFWFRfQ09OVEFJTkVSOiAxIDw8IDIzLFxyXG4gICAgQ09OVEVOVFM6IDEgPDwgMjQsXHJcbiAgICBJTkxJTkVfQkxPQ0s6IDEgPDwgMjUsXHJcbiAgICBJTkxJTkVfTElTVF9JVEVNOiAxIDw8IDI2LFxyXG4gICAgSU5MSU5FX1RBQkxFOiAxIDw8IDI3LFxyXG4gICAgSU5MSU5FX0ZMRVg6IDEgPDwgMjgsXHJcbiAgICBJTkxJTkVfR1JJRDogMSA8PCAyOVxyXG59O1xyXG5cclxudmFyIHBhcnNlRGlzcGxheVZhbHVlID0gZnVuY3Rpb24gcGFyc2VEaXNwbGF5VmFsdWUoZGlzcGxheSkge1xyXG4gICAgc3dpdGNoIChkaXNwbGF5KSB7XHJcbiAgICAgICAgY2FzZSAnYmxvY2snOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5CTE9DSztcclxuICAgICAgICBjYXNlICdpbmxpbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkU7XHJcbiAgICAgICAgY2FzZSAncnVuLWluJzpcclxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVOX0lOO1xyXG4gICAgICAgIGNhc2UgJ2Zsb3cnOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5GTE9XO1xyXG4gICAgICAgIGNhc2UgJ2Zsb3ctcm9vdCc6XHJcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkZMT1dfUk9PVDtcclxuICAgICAgICBjYXNlICd0YWJsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFO1xyXG4gICAgICAgIGNhc2UgJ2ZsZXgnOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5GTEVYO1xyXG4gICAgICAgIGNhc2UgJ2dyaWQnOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5HUklEO1xyXG4gICAgICAgIGNhc2UgJ3J1YnknOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZO1xyXG4gICAgICAgIGNhc2UgJ3N1YmdyaWQnOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5TVUJHUklEO1xyXG4gICAgICAgIGNhc2UgJ2xpc3QtaXRlbSc6XHJcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLkxJU1RfSVRFTTtcclxuICAgICAgICBjYXNlICd0YWJsZS1yb3ctZ3JvdXAnOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9ST1dfR1JPVVA7XHJcbiAgICAgICAgY2FzZSAndGFibGUtaGVhZGVyLWdyb3VwJzpcclxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfSEVBREVSX0dST1VQO1xyXG4gICAgICAgIGNhc2UgJ3RhYmxlLWZvb3Rlci1ncm91cCc6XHJcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0ZPT1RFUl9HUk9VUDtcclxuICAgICAgICBjYXNlICd0YWJsZS1yb3cnOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5UQUJMRV9ST1c7XHJcbiAgICAgICAgY2FzZSAndGFibGUtY2VsbCc6XHJcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NFTEw7XHJcbiAgICAgICAgY2FzZSAndGFibGUtY29sdW1uLWdyb3VwJzpcclxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ09MVU1OX0dST1VQO1xyXG4gICAgICAgIGNhc2UgJ3RhYmxlLWNvbHVtbic6XHJcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLlRBQkxFX0NPTFVNTjtcclxuICAgICAgICBjYXNlICd0YWJsZS1jYXB0aW9uJzpcclxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuVEFCTEVfQ0FQVElPTjtcclxuICAgICAgICBjYXNlICdydWJ5LWJhc2UnOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX0JBU0U7XHJcbiAgICAgICAgY2FzZSAncnVieS10ZXh0JzpcclxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuUlVCWV9URVhUO1xyXG4gICAgICAgIGNhc2UgJ3J1YnktYmFzZS1jb250YWluZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX0JBU0VfQ09OVEFJTkVSO1xyXG4gICAgICAgIGNhc2UgJ3J1YnktdGV4dC1jb250YWluZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5SVUJZX1RFWFRfQ09OVEFJTkVSO1xyXG4gICAgICAgIGNhc2UgJ2NvbnRlbnRzJzpcclxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuQ09OVEVOVFM7XHJcbiAgICAgICAgY2FzZSAnaW5saW5lLWJsb2NrJzpcclxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0JMT0NLO1xyXG4gICAgICAgIGNhc2UgJ2lubGluZS1saXN0LWl0ZW0nOlxyXG4gICAgICAgICAgICByZXR1cm4gRElTUExBWS5JTkxJTkVfTElTVF9JVEVNO1xyXG4gICAgICAgIGNhc2UgJ2lubGluZS10YWJsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9UQUJMRTtcclxuICAgICAgICBjYXNlICdpbmxpbmUtZmxleCc6XHJcbiAgICAgICAgICAgIHJldHVybiBESVNQTEFZLklOTElORV9GTEVYO1xyXG4gICAgICAgIGNhc2UgJ2lubGluZS1ncmlkJzpcclxuICAgICAgICAgICAgcmV0dXJuIERJU1BMQVkuSU5MSU5FX0dSSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIERJU1BMQVkuTk9ORTtcclxufTtcclxuXHJcbnZhciBzZXREaXNwbGF5Qml0ID0gZnVuY3Rpb24gc2V0RGlzcGxheUJpdChiaXQsIGRpc3BsYXkpIHtcclxuICAgIHJldHVybiBiaXQgfCBwYXJzZURpc3BsYXlWYWx1ZShkaXNwbGF5KTtcclxufTtcclxuXHJcbnZhciBwYXJzZURpc3BsYXkgPSBleHBvcnRzLnBhcnNlRGlzcGxheSA9IGZ1bmN0aW9uIHBhcnNlRGlzcGxheShkaXNwbGF5KSB7XHJcbiAgICByZXR1cm4gZGlzcGxheS5zcGxpdCgnICcpLnJlZHVjZShzZXREaXNwbGF5Qml0LCAwKTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG52YXIgRkxPQVQgPSBleHBvcnRzLkZMT0FUID0ge1xyXG4gICAgTk9ORTogMCxcclxuICAgIExFRlQ6IDEsXHJcbiAgICBSSUdIVDogMixcclxuICAgIElOTElORV9TVEFSVDogMyxcclxuICAgIElOTElORV9FTkQ6IDRcclxufTtcclxuXHJcbnZhciBwYXJzZUNTU0Zsb2F0ID0gZXhwb3J0cy5wYXJzZUNTU0Zsb2F0ID0gZnVuY3Rpb24gcGFyc2VDU1NGbG9hdChmbG9hdCkge1xyXG4gICAgc3dpdGNoIChmbG9hdCkge1xyXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuTEVGVDtcclxuICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgIHJldHVybiBGTE9BVC5SSUdIVDtcclxuICAgICAgICBjYXNlICdpbmxpbmUtc3RhcnQnOlxyXG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuSU5MSU5FX1NUQVJUO1xyXG4gICAgICAgIGNhc2UgJ2lubGluZS1lbmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gRkxPQVQuSU5MSU5FX0VORDtcclxuICAgIH1cclxuICAgIHJldHVybiBGTE9BVC5OT05FO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcblxyXG5cclxudmFyIHBhcnNlRm9udFdlaWdodCA9IGZ1bmN0aW9uIHBhcnNlRm9udFdlaWdodCh3ZWlnaHQpIHtcclxuICAgIHN3aXRjaCAod2VpZ2h0KSB7XHJcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcclxuICAgICAgICAgICAgcmV0dXJuIDQwMDtcclxuICAgICAgICBjYXNlICdib2xkJzpcclxuICAgICAgICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdmFsdWUgPSBwYXJzZUludCh3ZWlnaHQsIDEwKTtcclxuICAgIHJldHVybiBpc05hTih2YWx1ZSkgPyA0MDAgOiB2YWx1ZTtcclxufTtcclxuXHJcbnZhciBwYXJzZUZvbnQgPSBleHBvcnRzLnBhcnNlRm9udCA9IGZ1bmN0aW9uIHBhcnNlRm9udChzdHlsZSkge1xyXG4gICAgdmFyIGZvbnRGYW1pbHkgPSBzdHlsZS5mb250RmFtaWx5O1xyXG4gICAgdmFyIGZvbnRTaXplID0gc3R5bGUuZm9udFNpemU7XHJcbiAgICB2YXIgZm9udFN0eWxlID0gc3R5bGUuZm9udFN0eWxlO1xyXG4gICAgdmFyIGZvbnRWYXJpYW50ID0gc3R5bGUuZm9udFZhcmlhbnQ7XHJcbiAgICB2YXIgZm9udFdlaWdodCA9IHBhcnNlRm9udFdlaWdodChzdHlsZS5mb250V2VpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXHJcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplLFxyXG4gICAgICAgIGZvbnRTdHlsZTogZm9udFN0eWxlLFxyXG4gICAgICAgIGZvbnRWYXJpYW50OiBmb250VmFyaWFudCxcclxuICAgICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0XHJcbiAgICB9O1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbnZhciBwYXJzZUxldHRlclNwYWNpbmcgPSBleHBvcnRzLnBhcnNlTGV0dGVyU3BhY2luZyA9IGZ1bmN0aW9uIHBhcnNlTGV0dGVyU3BhY2luZyhsZXR0ZXJTcGFjaW5nKSB7XHJcbiAgICBpZiAobGV0dGVyU3BhY2luZyA9PT0gJ25vcm1hbCcpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQobGV0dGVyU3BhY2luZyk7XHJcbiAgICByZXR1cm4gaXNOYU4odmFsdWUpID8gMCA6IHZhbHVlO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbnZhciBMSU5FX0JSRUFLID0gZXhwb3J0cy5MSU5FX0JSRUFLID0ge1xyXG4gICAgTk9STUFMOiAnbm9ybWFsJyxcclxuICAgIFNUUklDVDogJ3N0cmljdCdcclxufTtcclxuXHJcbnZhciBwYXJzZUxpbmVCcmVhayA9IGV4cG9ydHMucGFyc2VMaW5lQnJlYWsgPSBmdW5jdGlvbiBwYXJzZUxpbmVCcmVhayh3b3JkQnJlYWspIHtcclxuICAgIHN3aXRjaCAod29yZEJyZWFrKSB7XHJcbiAgICAgICAgY2FzZSAnc3RyaWN0JzpcclxuICAgICAgICAgICAgcmV0dXJuIExJTkVfQlJFQUsuU1RSSUNUO1xyXG4gICAgICAgIGNhc2UgJ25vcm1hbCc6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIExJTkVfQlJFQUsuTk9STUFMO1xyXG4gICAgfVxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucGFyc2VMaXN0U3R5bGUgPSBleHBvcnRzLnBhcnNlTGlzdFN0eWxlVHlwZSA9IGV4cG9ydHMuTElTVF9TVFlMRV9UWVBFID0gZXhwb3J0cy5MSVNUX1NUWUxFX1BPU0lUSU9OID0gdW5kZWZpbmVkO1xyXG5cclxudmFyIF9iYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9iYWNrZ3JvdW5kJyk7XHJcblxyXG52YXIgTElTVF9TVFlMRV9QT1NJVElPTiA9IGV4cG9ydHMuTElTVF9TVFlMRV9QT1NJVElPTiA9IHtcclxuICAgIElOU0lERTogMCxcclxuICAgIE9VVFNJREU6IDFcclxufTtcclxuXHJcbnZhciBMSVNUX1NUWUxFX1RZUEUgPSBleHBvcnRzLkxJU1RfU1RZTEVfVFlQRSA9IHtcclxuICAgIE5PTkU6IC0xLFxyXG4gICAgRElTQzogMCxcclxuICAgIENJUkNMRTogMSxcclxuICAgIFNRVUFSRTogMixcclxuICAgIERFQ0lNQUw6IDMsXHJcbiAgICBDSktfREVDSU1BTDogNCxcclxuICAgIERFQ0lNQUxfTEVBRElOR19aRVJPOiA1LFxyXG4gICAgTE9XRVJfUk9NQU46IDYsXHJcbiAgICBVUFBFUl9ST01BTjogNyxcclxuICAgIExPV0VSX0dSRUVLOiA4LFxyXG4gICAgTE9XRVJfQUxQSEE6IDksXHJcbiAgICBVUFBFUl9BTFBIQTogMTAsXHJcbiAgICBBUkFCSUNfSU5ESUM6IDExLFxyXG4gICAgQVJNRU5JQU46IDEyLFxyXG4gICAgQkVOR0FMSTogMTMsXHJcbiAgICBDQU1CT0RJQU46IDE0LFxyXG4gICAgQ0pLX0VBUlRITFlfQlJBTkNIOiAxNSxcclxuICAgIENKS19IRUFWRU5MWV9TVEVNOiAxNixcclxuICAgIENKS19JREVPR1JBUEhJQzogMTcsXHJcbiAgICBERVZBTkFHQVJJOiAxOCxcclxuICAgIEVUSElPUElDX05VTUVSSUM6IDE5LFxyXG4gICAgR0VPUkdJQU46IDIwLFxyXG4gICAgR1VKQVJBVEk6IDIxLFxyXG4gICAgR1VSTVVLSEk6IDIyLFxyXG4gICAgSEVCUkVXOiAyMixcclxuICAgIEhJUkFHQU5BOiAyMyxcclxuICAgIEhJUkFHQU5BX0lST0hBOiAyNCxcclxuICAgIEpBUEFORVNFX0ZPUk1BTDogMjUsXHJcbiAgICBKQVBBTkVTRV9JTkZPUk1BTDogMjYsXHJcbiAgICBLQU5OQURBOiAyNyxcclxuICAgIEtBVEFLQU5BOiAyOCxcclxuICAgIEtBVEFLQU5BX0lST0hBOiAyOSxcclxuICAgIEtITUVSOiAzMCxcclxuICAgIEtPUkVBTl9IQU5HVUxfRk9STUFMOiAzMSxcclxuICAgIEtPUkVBTl9IQU5KQV9GT1JNQUw6IDMyLFxyXG4gICAgS09SRUFOX0hBTkpBX0lORk9STUFMOiAzMyxcclxuICAgIExBTzogMzQsXHJcbiAgICBMT1dFUl9BUk1FTklBTjogMzUsXHJcbiAgICBNQUxBWUFMQU06IDM2LFxyXG4gICAgTU9OR09MSUFOOiAzNyxcclxuICAgIE1ZQU5NQVI6IDM4LFxyXG4gICAgT1JJWUE6IDM5LFxyXG4gICAgUEVSU0lBTjogNDAsXHJcbiAgICBTSU1QX0NISU5FU0VfRk9STUFMOiA0MSxcclxuICAgIFNJTVBfQ0hJTkVTRV9JTkZPUk1BTDogNDIsXHJcbiAgICBUQU1JTDogNDMsXHJcbiAgICBURUxVR1U6IDQ0LFxyXG4gICAgVEhBSTogNDUsXHJcbiAgICBUSUJFVEFOOiA0NixcclxuICAgIFRSQURfQ0hJTkVTRV9GT1JNQUw6IDQ3LFxyXG4gICAgVFJBRF9DSElORVNFX0lORk9STUFMOiA0OCxcclxuICAgIFVQUEVSX0FSTUVOSUFOOiA0OSxcclxuICAgIERJU0NMT1NVUkVfT1BFTjogNTAsXHJcbiAgICBESVNDTE9TVVJFX0NMT1NFRDogNTFcclxufTtcclxuXHJcbnZhciBwYXJzZUxpc3RTdHlsZVR5cGUgPSBleHBvcnRzLnBhcnNlTGlzdFN0eWxlVHlwZSA9IGZ1bmN0aW9uIHBhcnNlTGlzdFN0eWxlVHlwZSh0eXBlKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdkaXNjJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ESVNDO1xyXG4gICAgICAgIGNhc2UgJ2NpcmNsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0lSQ0xFO1xyXG4gICAgICAgIGNhc2UgJ3NxdWFyZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuU1FVQVJFO1xyXG4gICAgICAgIGNhc2UgJ2RlY2ltYWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRFQ0lNQUw7XHJcbiAgICAgICAgY2FzZSAnY2prLWRlY2ltYWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19ERUNJTUFMO1xyXG4gICAgICAgIGNhc2UgJ2RlY2ltYWwtbGVhZGluZy16ZXJvJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ERUNJTUFMX0xFQURJTkdfWkVSTztcclxuICAgICAgICBjYXNlICdsb3dlci1yb21hbic6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfUk9NQU47XHJcbiAgICAgICAgY2FzZSAndXBwZXItcm9tYW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlVQUEVSX1JPTUFOO1xyXG4gICAgICAgIGNhc2UgJ2xvd2VyLWdyZWVrJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5MT1dFUl9HUkVFSztcclxuICAgICAgICBjYXNlICdsb3dlci1hbHBoYSc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfQUxQSEE7XHJcbiAgICAgICAgY2FzZSAndXBwZXItYWxwaGEnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlVQUEVSX0FMUEhBO1xyXG4gICAgICAgIGNhc2UgJ2FyYWJpYy1pbmRpYyc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQVJBQklDX0lORElDO1xyXG4gICAgICAgIGNhc2UgJ2FybWVuaWFuJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5BUk1FTklBTjtcclxuICAgICAgICBjYXNlICdiZW5nYWxpJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5CRU5HQUxJO1xyXG4gICAgICAgIGNhc2UgJ2NhbWJvZGlhbic6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0FNQk9ESUFOO1xyXG4gICAgICAgIGNhc2UgJ2Nqay1lYXJ0aGx5LWJyYW5jaCc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuQ0pLX0VBUlRITFlfQlJBTkNIO1xyXG4gICAgICAgIGNhc2UgJ2Nqay1oZWF2ZW5seS1zdGVtJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5DSktfSEVBVkVOTFlfU1RFTTtcclxuICAgICAgICBjYXNlICdjamstaWRlb2dyYXBoaWMnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkNKS19JREVPR1JBUEhJQztcclxuICAgICAgICBjYXNlICdkZXZhbmFnYXJpJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ERVZBTkFHQVJJO1xyXG4gICAgICAgIGNhc2UgJ2V0aGlvcGljLW51bWVyaWMnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkVUSElPUElDX05VTUVSSUM7XHJcbiAgICAgICAgY2FzZSAnZ2VvcmdpYW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkdFT1JHSUFOO1xyXG4gICAgICAgIGNhc2UgJ2d1amFyYXRpJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5HVUpBUkFUSTtcclxuICAgICAgICBjYXNlICdndXJtdWtoaSc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuR1VSTVVLSEk7XHJcbiAgICAgICAgY2FzZSAnaGVicmV3JzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5IRUJSRVc7XHJcbiAgICAgICAgY2FzZSAnaGlyYWdhbmEnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkhJUkFHQU5BO1xyXG4gICAgICAgIGNhc2UgJ2hpcmFnYW5hLWlyb2hhJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ISVJBR0FOQV9JUk9IQTtcclxuICAgICAgICBjYXNlICdqYXBhbmVzZS1mb3JtYWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkpBUEFORVNFX0ZPUk1BTDtcclxuICAgICAgICBjYXNlICdqYXBhbmVzZS1pbmZvcm1hbCc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuSkFQQU5FU0VfSU5GT1JNQUw7XHJcbiAgICAgICAgY2FzZSAna2FubmFkYSc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0FOTkFEQTtcclxuICAgICAgICBjYXNlICdrYXRha2FuYSc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS0FUQUtBTkE7XHJcbiAgICAgICAgY2FzZSAna2F0YWthbmEtaXJvaGEnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktBVEFLQU5BX0lST0hBO1xyXG4gICAgICAgIGNhc2UgJ2tobWVyJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5LSE1FUjtcclxuICAgICAgICBjYXNlICdrb3JlYW4taGFuZ3VsLWZvcm1hbCc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkdVTF9GT1JNQUw7XHJcbiAgICAgICAgY2FzZSAna29yZWFuLWhhbmphLWZvcm1hbCc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuS09SRUFOX0hBTkpBX0ZPUk1BTDtcclxuICAgICAgICBjYXNlICdrb3JlYW4taGFuamEtaW5mb3JtYWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLktPUkVBTl9IQU5KQV9JTkZPUk1BTDtcclxuICAgICAgICBjYXNlICdsYW8nOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkxBTztcclxuICAgICAgICBjYXNlICdsb3dlci1hcm1lbmlhbic6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTE9XRVJfQVJNRU5JQU47XHJcbiAgICAgICAgY2FzZSAnbWFsYXlhbGFtJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5NQUxBWUFMQU07XHJcbiAgICAgICAgY2FzZSAnbW9uZ29saWFuJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5NT05HT0xJQU47XHJcbiAgICAgICAgY2FzZSAnbXlhbm1hcic6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTVlBTk1BUjtcclxuICAgICAgICBjYXNlICdvcml5YSc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuT1JJWUE7XHJcbiAgICAgICAgY2FzZSAncGVyc2lhbic6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuUEVSU0lBTjtcclxuICAgICAgICBjYXNlICdzaW1wLWNoaW5lc2UtZm9ybWFsJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5TSU1QX0NISU5FU0VfRk9STUFMO1xyXG4gICAgICAgIGNhc2UgJ3NpbXAtY2hpbmVzZS1pbmZvcm1hbCc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuU0lNUF9DSElORVNFX0lORk9STUFMO1xyXG4gICAgICAgIGNhc2UgJ3RhbWlsJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5UQU1JTDtcclxuICAgICAgICBjYXNlICd0ZWx1Z3UnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRFTFVHVTtcclxuICAgICAgICBjYXNlICd0aGFpJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5USEFJO1xyXG4gICAgICAgIGNhc2UgJ3RpYmV0YW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRJQkVUQU47XHJcbiAgICAgICAgY2FzZSAndHJhZC1jaGluZXNlLWZvcm1hbCc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVFJBRF9DSElORVNFX0ZPUk1BTDtcclxuICAgICAgICBjYXNlICd0cmFkLWNoaW5lc2UtaW5mb3JtYWwnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLlRSQURfQ0hJTkVTRV9JTkZPUk1BTDtcclxuICAgICAgICBjYXNlICd1cHBlci1hcm1lbmlhbic6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuVVBQRVJfQVJNRU5JQU47XHJcbiAgICAgICAgY2FzZSAnZGlzY2xvc3VyZS1vcGVuJzpcclxuICAgICAgICAgICAgcmV0dXJuIExJU1RfU1RZTEVfVFlQRS5ESVNDTE9TVVJFX09QRU47XHJcbiAgICAgICAgY2FzZSAnZGlzY2xvc3VyZS1jbG9zZWQnOlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9UWVBFLkRJU0NMT1NVUkVfQ0xPU0VEO1xyXG4gICAgICAgIGNhc2UgJ25vbmUnOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1RZUEUuTk9ORTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBwYXJzZUxpc3RTdHlsZSA9IGV4cG9ydHMucGFyc2VMaXN0U3R5bGUgPSBmdW5jdGlvbiBwYXJzZUxpc3RTdHlsZShzdHlsZSkge1xyXG4gICAgdmFyIGxpc3RTdHlsZUltYWdlID0gKDAsIF9iYWNrZ3JvdW5kLnBhcnNlQmFja2dyb3VuZEltYWdlKShzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdsaXN0LXN0eWxlLWltYWdlJykpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaXN0U3R5bGVUeXBlOiBwYXJzZUxpc3RTdHlsZVR5cGUoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGlzdC1zdHlsZS10eXBlJykpLFxyXG4gICAgICAgIGxpc3RTdHlsZUltYWdlOiBsaXN0U3R5bGVJbWFnZS5sZW5ndGggPyBsaXN0U3R5bGVJbWFnZVswXSA6IG51bGwsXHJcbiAgICAgICAgbGlzdFN0eWxlUG9zaXRpb246IHBhcnNlTGlzdFN0eWxlUG9zaXRpb24oc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbGlzdC1zdHlsZS1wb3NpdGlvbicpKVxyXG4gICAgfTtcclxufTtcclxuXHJcbnZhciBwYXJzZUxpc3RTdHlsZVBvc2l0aW9uID0gZnVuY3Rpb24gcGFyc2VMaXN0U3R5bGVQb3NpdGlvbihwb3NpdGlvbikge1xyXG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xyXG4gICAgICAgIGNhc2UgJ2luc2lkZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBMSVNUX1NUWUxFX1BPU0lUSU9OLklOU0lERTtcclxuICAgICAgICBjYXNlICdvdXRzaWRlJzpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gTElTVF9TVFlMRV9QT1NJVElPTi5PVVRTSURFO1xyXG4gICAgfVxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucGFyc2VNYXJnaW4gPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4uL0xlbmd0aCcpO1xyXG5cclxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG52YXIgU0lERVMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xyXG5cclxudmFyIHBhcnNlTWFyZ2luID0gZXhwb3J0cy5wYXJzZU1hcmdpbiA9IGZ1bmN0aW9uIHBhcnNlTWFyZ2luKHN0eWxlKSB7XHJcbiAgICByZXR1cm4gU0lERVMubWFwKGZ1bmN0aW9uIChzaWRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBfTGVuZ3RoMi5kZWZhdWx0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi0nICsgc2lkZSkpO1xyXG4gICAgfSk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxudmFyIE9WRVJGTE9XID0gZXhwb3J0cy5PVkVSRkxPVyA9IHtcclxuICAgIFZJU0lCTEU6IDAsXHJcbiAgICBISURERU46IDEsXHJcbiAgICBTQ1JPTEw6IDIsXHJcbiAgICBBVVRPOiAzXHJcbn07XHJcblxyXG52YXIgcGFyc2VPdmVyZmxvdyA9IGV4cG9ydHMucGFyc2VPdmVyZmxvdyA9IGZ1bmN0aW9uIHBhcnNlT3ZlcmZsb3cob3ZlcmZsb3cpIHtcclxuICAgIHN3aXRjaCAob3ZlcmZsb3cpIHtcclxuICAgICAgICBjYXNlICdoaWRkZW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1cuSElEREVOO1xyXG4gICAgICAgIGNhc2UgJ3Njcm9sbCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5TQ1JPTEw7XHJcbiAgICAgICAgY2FzZSAnYXV0byc6XHJcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5BVVRPO1xyXG4gICAgICAgIGNhc2UgJ3Zpc2libGUnOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPVy5WSVNJQkxFO1xyXG4gICAgfVxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbnZhciBPVkVSRkxPV19XUkFQID0gZXhwb3J0cy5PVkVSRkxPV19XUkFQID0ge1xyXG4gICAgTk9STUFMOiAwLFxyXG4gICAgQlJFQUtfV09SRDogMVxyXG59O1xyXG5cclxudmFyIHBhcnNlT3ZlcmZsb3dXcmFwID0gZXhwb3J0cy5wYXJzZU92ZXJmbG93V3JhcCA9IGZ1bmN0aW9uIHBhcnNlT3ZlcmZsb3dXcmFwKG92ZXJmbG93KSB7XHJcbiAgICBzd2l0Y2ggKG92ZXJmbG93KSB7XHJcbiAgICAgICAgY2FzZSAnYnJlYWstd29yZCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPVkVSRkxPV19XUkFQLkJSRUFLX1dPUkQ7XHJcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gT1ZFUkZMT1dfV1JBUC5OT1JNQUw7XHJcbiAgICB9XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5wYXJzZVBhZGRpbmcgPSBleHBvcnRzLlBBRERJTkdfU0lERVMgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX0xlbmd0aCA9IHJlcXVpcmUoJy4uL0xlbmd0aCcpO1xyXG5cclxudmFyIF9MZW5ndGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGVuZ3RoKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XHJcblxyXG52YXIgUEFERElOR19TSURFUyA9IGV4cG9ydHMuUEFERElOR19TSURFUyA9IHtcclxuICAgIFRPUDogMCxcclxuICAgIFJJR0hUOiAxLFxyXG4gICAgQk9UVE9NOiAyLFxyXG4gICAgTEVGVDogM1xyXG59O1xyXG5cclxudmFyIFNJREVTID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcclxuXHJcbnZhciBwYXJzZVBhZGRpbmcgPSBleHBvcnRzLnBhcnNlUGFkZGluZyA9IGZ1bmN0aW9uIHBhcnNlUGFkZGluZyhzdHlsZSkge1xyXG4gICAgcmV0dXJuIFNJREVTLm1hcChmdW5jdGlvbiAoc2lkZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgX0xlbmd0aDIuZGVmYXVsdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLScgKyBzaWRlKSk7XHJcbiAgICB9KTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG52YXIgUE9TSVRJT04gPSBleHBvcnRzLlBPU0lUSU9OID0ge1xyXG4gICAgU1RBVElDOiAwLFxyXG4gICAgUkVMQVRJVkU6IDEsXHJcbiAgICBBQlNPTFVURTogMixcclxuICAgIEZJWEVEOiAzLFxyXG4gICAgU1RJQ0tZOiA0XHJcbn07XHJcblxyXG52YXIgcGFyc2VQb3NpdGlvbiA9IGV4cG9ydHMucGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIHBhcnNlUG9zaXRpb24ocG9zaXRpb24pIHtcclxuICAgIHN3aXRjaCAocG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlICdyZWxhdGl2ZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5SRUxBVElWRTtcclxuICAgICAgICBjYXNlICdhYnNvbHV0ZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5BQlNPTFVURTtcclxuICAgICAgICBjYXNlICdmaXhlZCc6XHJcbiAgICAgICAgICAgIHJldHVybiBQT1NJVElPTi5GSVhFRDtcclxuICAgICAgICBjYXNlICdzdGlja3knOlxyXG4gICAgICAgICAgICByZXR1cm4gUE9TSVRJT04uU1RJQ0tZO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQT1NJVElPTi5TVEFUSUM7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5wYXJzZVRleHREZWNvcmF0aW9uID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fTElORSA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fU1RZTEUgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi4vQ29sb3InKTtcclxuXHJcbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbnZhciBURVhUX0RFQ09SQVRJT05fU1RZTEUgPSBleHBvcnRzLlRFWFRfREVDT1JBVElPTl9TVFlMRSA9IHtcclxuICAgIFNPTElEOiAwLFxyXG4gICAgRE9VQkxFOiAxLFxyXG4gICAgRE9UVEVEOiAyLFxyXG4gICAgREFTSEVEOiAzLFxyXG4gICAgV0FWWTogNFxyXG59O1xyXG5cclxudmFyIFRFWFRfREVDT1JBVElPTiA9IGV4cG9ydHMuVEVYVF9ERUNPUkFUSU9OID0ge1xyXG4gICAgTk9ORTogbnVsbFxyXG59O1xyXG5cclxudmFyIFRFWFRfREVDT1JBVElPTl9MSU5FID0gZXhwb3J0cy5URVhUX0RFQ09SQVRJT05fTElORSA9IHtcclxuICAgIFVOREVSTElORTogMSxcclxuICAgIE9WRVJMSU5FOiAyLFxyXG4gICAgTElORV9USFJPVUdIOiAzLFxyXG4gICAgQkxJTks6IDRcclxufTtcclxuXHJcbnZhciBwYXJzZUxpbmUgPSBmdW5jdGlvbiBwYXJzZUxpbmUobGluZSkge1xyXG4gICAgc3dpdGNoIChsaW5lKSB7XHJcbiAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcclxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLlVOREVSTElORTtcclxuICAgICAgICBjYXNlICdvdmVybGluZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fTElORS5PVkVSTElORTtcclxuICAgICAgICBjYXNlICdsaW5lLXRocm91Z2gnOlxyXG4gICAgICAgICAgICByZXR1cm4gVEVYVF9ERUNPUkFUSU9OX0xJTkUuTElORV9USFJPVUdIO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9MSU5FLkJMSU5LO1xyXG59O1xyXG5cclxudmFyIHBhcnNlVGV4dERlY29yYXRpb25MaW5lID0gZnVuY3Rpb24gcGFyc2VUZXh0RGVjb3JhdGlvbkxpbmUobGluZSkge1xyXG4gICAgaWYgKGxpbmUgPT09ICdub25lJykge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaW5lLnNwbGl0KCcgJykubWFwKHBhcnNlTGluZSk7XHJcbn07XHJcblxyXG52YXIgcGFyc2VUZXh0RGVjb3JhdGlvblN0eWxlID0gZnVuY3Rpb24gcGFyc2VUZXh0RGVjb3JhdGlvblN0eWxlKHN0eWxlKSB7XHJcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZG91YmxlJzpcclxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5ET1VCTEU7XHJcbiAgICAgICAgY2FzZSAnZG90dGVkJzpcclxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5ET1RURUQ7XHJcbiAgICAgICAgY2FzZSAnZGFzaGVkJzpcclxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTl9TVFlMRS5EQVNIRUQ7XHJcbiAgICAgICAgY2FzZSAnd2F2eSc6XHJcbiAgICAgICAgICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuV0FWWTtcclxuICAgIH1cclxuICAgIHJldHVybiBURVhUX0RFQ09SQVRJT05fU1RZTEUuU09MSUQ7XHJcbn07XHJcblxyXG52YXIgcGFyc2VUZXh0RGVjb3JhdGlvbiA9IGV4cG9ydHMucGFyc2VUZXh0RGVjb3JhdGlvbiA9IGZ1bmN0aW9uIHBhcnNlVGV4dERlY29yYXRpb24oc3R5bGUpIHtcclxuICAgIHZhciB0ZXh0RGVjb3JhdGlvbkxpbmUgPSBwYXJzZVRleHREZWNvcmF0aW9uTGluZShzdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgPyBzdHlsZS50ZXh0RGVjb3JhdGlvbkxpbmUgOiBzdHlsZS50ZXh0RGVjb3JhdGlvbik7XHJcbiAgICBpZiAodGV4dERlY29yYXRpb25MaW5lID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFRFWFRfREVDT1JBVElPTi5OT05FO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0ZXh0RGVjb3JhdGlvbkNvbG9yID0gc3R5bGUudGV4dERlY29yYXRpb25Db2xvciA/IG5ldyBfQ29sb3IyLmRlZmF1bHQoc3R5bGUudGV4dERlY29yYXRpb25Db2xvcikgOiBudWxsO1xyXG4gICAgdmFyIHRleHREZWNvcmF0aW9uU3R5bGUgPSBwYXJzZVRleHREZWNvcmF0aW9uU3R5bGUoc3R5bGUudGV4dERlY29yYXRpb25TdHlsZSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IHRleHREZWNvcmF0aW9uTGluZSxcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiB0ZXh0RGVjb3JhdGlvbkNvbG9yLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uU3R5bGU6IHRleHREZWNvcmF0aW9uU3R5bGVcclxuICAgIH07XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5wYXJzZVRleHRTaGFkb3cgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgX0NvbG9yID0gcmVxdWlyZSgnLi4vQ29sb3InKTtcclxuXHJcbnZhciBfQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sb3IpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbnZhciBOVU1CRVIgPSAvXihbKy1dfFxcZHxcXC4pJC9pO1xyXG5cclxudmFyIHBhcnNlVGV4dFNoYWRvdyA9IGV4cG9ydHMucGFyc2VUZXh0U2hhZG93ID0gZnVuY3Rpb24gcGFyc2VUZXh0U2hhZG93KHRleHRTaGFkb3cpIHtcclxuICAgIGlmICh0ZXh0U2hhZG93ID09PSAnbm9uZScgfHwgdHlwZW9mIHRleHRTaGFkb3cgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9ICcnO1xyXG4gICAgdmFyIGlzTGVuZ3RoID0gZmFsc2U7XHJcbiAgICB2YXIgdmFsdWVzID0gW107XHJcbiAgICB2YXIgc2hhZG93cyA9IFtdO1xyXG4gICAgdmFyIG51bVBhcmVucyA9IDA7XHJcbiAgICB2YXIgY29sb3IgPSBudWxsO1xyXG5cclxuICAgIHZhciBhcHBlbmRWYWx1ZSA9IGZ1bmN0aW9uIGFwcGVuZFZhbHVlKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0xlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gocGFyc2VGbG9hdChjdXJyZW50VmFsdWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gbmV3IF9Db2xvcjIuZGVmYXVsdChjdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzTGVuZ3RoID0gZmFsc2U7XHJcbiAgICAgICAgY3VycmVudFZhbHVlID0gJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBhcHBlbmRTaGFkb3cgPSBmdW5jdGlvbiBhcHBlbmRTaGFkb3coKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggJiYgY29sb3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2hhZG93cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgICAgIG9mZnNldFg6IHZhbHVlc1swXSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WTogdmFsdWVzWzFdIHx8IDAsXHJcbiAgICAgICAgICAgICAgICBibHVyOiB2YWx1ZXNbMl0gfHwgMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsdWVzLnNwbGljZSgwLCB2YWx1ZXMubGVuZ3RoKTtcclxuICAgICAgICBjb2xvciA9IG51bGw7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dFNoYWRvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjID0gdGV4dFNoYWRvd1tpXTtcclxuICAgICAgICBzd2l0Y2ggKGMpIHtcclxuICAgICAgICAgICAgY2FzZSAnKCc6XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcclxuICAgICAgICAgICAgICAgIG51bVBhcmVucysrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyknOlxyXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlICs9IGM7XHJcbiAgICAgICAgICAgICAgICBudW1QYXJlbnMtLTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcsJzpcclxuICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbnMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBlbmRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFNoYWRvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgICAgIGlmIChudW1QYXJlbnMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBlbmRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZS5sZW5ndGggPT09IDAgJiYgTlVNQkVSLnRlc3QoYykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xlbmd0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kVmFsdWUoKTtcclxuICAgIGFwcGVuZFNoYWRvdygpO1xyXG5cclxuICAgIGlmIChzaGFkb3dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkb3dzO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbnZhciBURVhUX1RSQU5TRk9STSA9IGV4cG9ydHMuVEVYVF9UUkFOU0ZPUk0gPSB7XHJcbiAgICBOT05FOiAwLFxyXG4gICAgTE9XRVJDQVNFOiAxLFxyXG4gICAgVVBQRVJDQVNFOiAyLFxyXG4gICAgQ0FQSVRBTElaRTogM1xyXG59O1xyXG5cclxudmFyIHBhcnNlVGV4dFRyYW5zZm9ybSA9IGV4cG9ydHMucGFyc2VUZXh0VHJhbnNmb3JtID0gZnVuY3Rpb24gcGFyc2VUZXh0VHJhbnNmb3JtKHRleHRUcmFuc2Zvcm0pIHtcclxuICAgIHN3aXRjaCAodGV4dFRyYW5zZm9ybSkge1xyXG4gICAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBURVhUX1RSQU5TRk9STS5VUFBFUkNBU0U7XHJcbiAgICAgICAgY2FzZSAnbG93ZXJjYXNlJzpcclxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLkxPV0VSQ0FTRTtcclxuICAgICAgICBjYXNlICdjYXBpdGFsaXplJzpcclxuICAgICAgICAgICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLkNBUElUQUxJWkU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFRFWFRfVFJBTlNGT1JNLk5PTkU7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5wYXJzZVRyYW5zZm9ybSA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBfTGVuZ3RoID0gcmVxdWlyZSgnLi4vTGVuZ3RoJyk7XHJcblxyXG52YXIgX0xlbmd0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MZW5ndGgpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cclxuXHJcbnZhciB0b0Zsb2F0ID0gZnVuY3Rpb24gdG9GbG9hdChzKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzLnRyaW0oKSk7XHJcbn07XHJcblxyXG52YXIgTUFUUklYID0gLyhtYXRyaXh8bWF0cml4M2QpXFwoKC4rKVxcKS87XHJcblxyXG52YXIgcGFyc2VUcmFuc2Zvcm0gPSBleHBvcnRzLnBhcnNlVHJhbnNmb3JtID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm0oc3R5bGUpIHtcclxuICAgIHZhciB0cmFuc2Zvcm0gPSBwYXJzZVRyYW5zZm9ybU1hdHJpeChzdHlsZS50cmFuc2Zvcm0gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHN0eWxlLm1velRyYW5zZm9ybSB8fFxyXG4gICAgLy8gJEZsb3dGaXhNZVxyXG4gICAgc3R5bGUubXNUcmFuc2Zvcm0gfHxcclxuICAgIC8vICRGbG93Rml4TWVcclxuICAgIHN0eWxlLm9UcmFuc2Zvcm0pO1xyXG4gICAgaWYgKHRyYW5zZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBwYXJzZVRyYW5zZm9ybU9yaWdpbihzdHlsZS50cmFuc2Zvcm1PcmlnaW4gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtT3JpZ2luIHx8IHN0eWxlLm1velRyYW5zZm9ybU9yaWdpbiB8fFxyXG4gICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICBzdHlsZS5tc1RyYW5zZm9ybU9yaWdpbiB8fFxyXG4gICAgICAgIC8vICRGbG93Rml4TWVcclxuICAgICAgICBzdHlsZS5vVHJhbnNmb3JtT3JpZ2luKVxyXG4gICAgfTtcclxufTtcclxuXHJcbi8vICRGbG93Rml4TWVcclxudmFyIHBhcnNlVHJhbnNmb3JtT3JpZ2luID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1PcmlnaW4ob3JpZ2luKSB7XHJcbiAgICBpZiAodHlwZW9mIG9yaWdpbiAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICB2YXIgdiA9IG5ldyBfTGVuZ3RoMi5kZWZhdWx0KCcwJyk7XHJcbiAgICAgICAgcmV0dXJuIFt2LCB2XTtcclxuICAgIH1cclxuICAgIHZhciB2YWx1ZXMgPSBvcmlnaW4uc3BsaXQoJyAnKS5tYXAoX0xlbmd0aDIuZGVmYXVsdC5jcmVhdGUpO1xyXG4gICAgcmV0dXJuIFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV07XHJcbn07XHJcblxyXG4vLyAkRmxvd0ZpeE1lXHJcbnZhciBwYXJzZVRyYW5zZm9ybU1hdHJpeCA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtTWF0cml4KHRyYW5zZm9ybSkge1xyXG4gICAgaWYgKHRyYW5zZm9ybSA9PT0gJ25vbmUnIHx8IHR5cGVvZiB0cmFuc2Zvcm0gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hdGNoID0gdHJhbnNmb3JtLm1hdGNoKE1BVFJJWCk7XHJcbiAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICBpZiAobWF0Y2hbMV0gPT09ICdtYXRyaXgnKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRyaXggPSBtYXRjaFsyXS5zcGxpdCgnLCcpLm1hcCh0b0Zsb2F0KTtcclxuICAgICAgICAgICAgcmV0dXJuIFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzJdLCBtYXRyaXhbM10sIG1hdHJpeFs0XSwgbWF0cml4WzVdXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbWF0cml4M2QgPSBtYXRjaFsyXS5zcGxpdCgnLCcpLm1hcCh0b0Zsb2F0KTtcclxuICAgICAgICAgICAgcmV0dXJuIFttYXRyaXgzZFswXSwgbWF0cml4M2RbMV0sIG1hdHJpeDNkWzRdLCBtYXRyaXgzZFs1XSwgbWF0cml4M2RbMTJdLCBtYXRyaXgzZFsxM11dO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbnZhciBWSVNJQklMSVRZID0gZXhwb3J0cy5WSVNJQklMSVRZID0ge1xyXG4gICAgVklTSUJMRTogMCxcclxuICAgIEhJRERFTjogMSxcclxuICAgIENPTExBUFNFOiAyXHJcbn07XHJcblxyXG52YXIgcGFyc2VWaXNpYmlsaXR5ID0gZXhwb3J0cy5wYXJzZVZpc2liaWxpdHkgPSBmdW5jdGlvbiBwYXJzZVZpc2liaWxpdHkodmlzaWJpbGl0eSkge1xyXG4gICAgc3dpdGNoICh2aXNpYmlsaXR5KSB7XHJcbiAgICAgICAgY2FzZSAnaGlkZGVuJzpcclxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuSElEREVOO1xyXG4gICAgICAgIGNhc2UgJ2NvbGxhcHNlJzpcclxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuQ09MTEFQU0U7XHJcbiAgICAgICAgY2FzZSAndmlzaWJsZSc6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFZJU0lCSUxJVFkuVklTSUJMRTtcclxuICAgIH1cclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG52YXIgV09SRF9CUkVBSyA9IGV4cG9ydHMuV09SRF9CUkVBSyA9IHtcclxuICAgIE5PUk1BTDogJ25vcm1hbCcsXHJcbiAgICBCUkVBS19BTEw6ICdicmVhay1hbGwnLFxyXG4gICAgS0VFUF9BTEw6ICdrZWVwLWFsbCdcclxufTtcclxuXHJcbnZhciBwYXJzZVdvcmRCcmVhayA9IGV4cG9ydHMucGFyc2VXb3JkQnJlYWsgPSBmdW5jdGlvbiBwYXJzZVdvcmRCcmVhayh3b3JkQnJlYWspIHtcclxuICAgIHN3aXRjaCAod29yZEJyZWFrKSB7XHJcbiAgICAgICAgY2FzZSAnYnJlYWstYWxsJzpcclxuICAgICAgICAgICAgcmV0dXJuIFdPUkRfQlJFQUsuQlJFQUtfQUxMO1xyXG4gICAgICAgIGNhc2UgJ2tlZXAtYWxsJzpcclxuICAgICAgICAgICAgcmV0dXJuIFdPUkRfQlJFQUsuS0VFUF9BTEw7XHJcbiAgICAgICAgY2FzZSAnbm9ybWFsJzpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gV09SRF9CUkVBSy5OT1JNQUw7XHJcbiAgICB9XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxudmFyIHBhcnNlWkluZGV4ID0gZXhwb3J0cy5wYXJzZVpJbmRleCA9IGZ1bmN0aW9uIHBhcnNlWkluZGV4KHpJbmRleCkge1xyXG4gICAgdmFyIGF1dG8gPSB6SW5kZXggPT09ICdhdXRvJztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0bzogYXV0byxcclxuICAgICAgICBvcmRlcjogYXV0byA/IDAgOiBwYXJzZUludCh6SW5kZXgsIDEwKVxyXG4gICAgfTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5cclxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcclxuXHJcbnZhciBfUGF0aCA9IHJlcXVpcmUoJy4uL2RyYXdpbmcvUGF0aCcpO1xyXG5cclxudmFyIF90ZXh0RGVjb3JhdGlvbiA9IHJlcXVpcmUoJy4uL3BhcnNpbmcvdGV4dERlY29yYXRpb24nKTtcclxuXHJcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XHJcblxyXG52YXIgYWRkQ29sb3JTdG9wcyA9IGZ1bmN0aW9uIGFkZENvbG9yU3RvcHMoZ3JhZGllbnQsIGNhbnZhc0dyYWRpZW50KSB7XHJcbiAgICB2YXIgbWF4U3RvcCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGdyYWRpZW50LmNvbG9yU3RvcHMubWFwKGZ1bmN0aW9uIChjb2xvclN0b3ApIHtcclxuICAgICAgICByZXR1cm4gY29sb3JTdG9wLnN0b3A7XHJcbiAgICB9KSk7XHJcbiAgICB2YXIgZiA9IDEgLyBNYXRoLm1heCgxLCBtYXhTdG9wKTtcclxuICAgIGdyYWRpZW50LmNvbG9yU3RvcHMuZm9yRWFjaChmdW5jdGlvbiAoY29sb3JTdG9wKSB7XHJcbiAgICAgICAgY2FudmFzR3JhZGllbnQuYWRkQ29sb3JTdG9wKGYgKiBjb2xvclN0b3Auc3RvcCwgY29sb3JTdG9wLmNvbG9yLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YXIgQ2FudmFzUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNSZW5kZXJlcihjYW52YXMpIHtcclxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FudmFzUmVuZGVyZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcyA/IGNhbnZhcyA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVDbGFzcyhDYW52YXNSZW5kZXJlciwgW3tcclxuICAgICAgICBrZXk6ICdyZW5kZXInLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIob3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5mbG9vcihvcHRpb25zLndpZHRoICogb3B0aW9ucy5zY2FsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3Iob3B0aW9ucy5oZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdHguc2NhbGUodGhpcy5vcHRpb25zLnNjYWxlLCB0aGlzLm9wdGlvbnMuc2NhbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLW9wdGlvbnMueCwgLW9wdGlvbnMueSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRCYXNlbGluZSA9ICdib3R0b20nO1xyXG4gICAgICAgICAgICBvcHRpb25zLmxvZ2dlci5sb2coJ0NhbnZhcyByZW5kZXJlciBpbml0aWFsaXplZCAoJyArIG9wdGlvbnMud2lkdGggKyAneCcgKyBvcHRpb25zLmhlaWdodCArICcgYXQgJyArIG9wdGlvbnMueCArICcsJyArIG9wdGlvbnMueSArICcpIHdpdGggc2NhbGUgJyArIHRoaXMub3B0aW9ucy5zY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2NsaXAnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGlwKGNsaXBQYXRocywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmIChjbGlwUGF0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICBjbGlwUGF0aHMuZm9yRWFjaChmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhdGgocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3R4LmNsaXAoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNsaXBQYXRocy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdkcmF3SW1hZ2UnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3SW1hZ2UoaW1hZ2UsIHNvdXJjZSwgZGVzdGluYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltYWdlLCBzb3VyY2UubGVmdCwgc291cmNlLnRvcCwgc291cmNlLndpZHRoLCBzb3VyY2UuaGVpZ2h0LCBkZXN0aW5hdGlvbi5sZWZ0LCBkZXN0aW5hdGlvbi50b3AsIGRlc3RpbmF0aW9uLndpZHRoLCBkZXN0aW5hdGlvbi5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdkcmF3U2hhcGUnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkcmF3U2hhcGUocGF0aCwgY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoKHBhdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ2ZpbGwnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaWxsKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAnZ2V0VGFyZ2V0JyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ3BhdGgnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXRoKF9wYXRoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9wYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgX3BhdGguZm9yRWFjaChmdW5jdGlvbiAocG9pbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcG9pbnQudHlwZSA9PT0gX1BhdGguUEFUSC5WRUNUT1IgPyBwb2ludCA6IHBvaW50LnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4Lm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4LmxpbmVUbyhzdGFydC54LCBzdGFydC55KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludC50eXBlID09PSBfUGF0aC5QQVRILkJFWklFUl9DVVJWRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIuY3R4LmJlemllckN1cnZlVG8ocG9pbnQuc3RhcnRDb250cm9sLngsIHBvaW50LnN0YXJ0Q29udHJvbC55LCBwb2ludC5lbmRDb250cm9sLngsIHBvaW50LmVuZENvbnRyb2wueSwgcG9pbnQuZW5kLngsIHBvaW50LmVuZC55KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmFyYyhfcGF0aC54ICsgX3BhdGgucmFkaXVzLCBfcGF0aC55ICsgX3BhdGgucmFkaXVzLCBfcGF0aC5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ3JlY3RhbmdsZScsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAncmVuZGVyTGluZWFyR3JhZGllbnQnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMaW5lYXJHcmFkaWVudChib3VuZHMsIGdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBsaW5lYXJHcmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KGJvdW5kcy5sZWZ0ICsgZ3JhZGllbnQuZGlyZWN0aW9uLngxLCBib3VuZHMudG9wICsgZ3JhZGllbnQuZGlyZWN0aW9uLnkxLCBib3VuZHMubGVmdCArIGdyYWRpZW50LmRpcmVjdGlvbi54MCwgYm91bmRzLnRvcCArIGdyYWRpZW50LmRpcmVjdGlvbi55MCk7XHJcblxyXG4gICAgICAgICAgICBhZGRDb2xvclN0b3BzKGdyYWRpZW50LCBsaW5lYXJHcmFkaWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGxpbmVhckdyYWRpZW50O1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgYm91bmRzLnRvcCwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAncmVuZGVyUmFkaWFsR3JhZGllbnQnLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSYWRpYWxHcmFkaWVudChib3VuZHMsIGdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHggPSBib3VuZHMubGVmdCArIGdyYWRpZW50LmNlbnRlci54O1xyXG4gICAgICAgICAgICB2YXIgeSA9IGJvdW5kcy50b3AgKyBncmFkaWVudC5jZW50ZXIueTtcclxuXHJcbiAgICAgICAgICAgIHZhciByYWRpYWxHcmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIGdyYWRpZW50LnJhZGl1cy54KTtcclxuICAgICAgICAgICAgaWYgKCFyYWRpYWxHcmFkaWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRDb2xvclN0b3BzKGdyYWRpZW50LCByYWRpYWxHcmFkaWVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHJhZGlhbEdyYWRpZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYWRpZW50LnJhZGl1cy54ICE9PSBncmFkaWVudC5yYWRpdXMueSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtcyBmb3IgZWxsaXB0aWNhbCByYWRpYWwgZ3JhZGllbnRcclxuICAgICAgICAgICAgICAgIHZhciBtaWRYID0gYm91bmRzLmxlZnQgKyAwLjUgKiBib3VuZHMud2lkdGg7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWlkWSA9IGJvdW5kcy50b3AgKyAwLjUgKiBib3VuZHMuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGYgPSBncmFkaWVudC5yYWRpdXMueSAvIGdyYWRpZW50LnJhZGl1cy54O1xyXG4gICAgICAgICAgICAgICAgdmFyIGludkYgPSAxIC8gZjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShtaWRYLCBtaWRZLCBbMSwgMCwgMCwgZiwgMCwgMF0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmN0eC5maWxsUmVjdChib3VuZHMubGVmdCwgaW52RiAqIChib3VuZHMudG9wIC0gbWlkWSkgKyBtaWRZLCBib3VuZHMud2lkdGgsIGJvdW5kcy5oZWlnaHQgKiBpbnZGKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoYm91bmRzLmxlZnQsIGJvdW5kcy50b3AsIGJvdW5kcy53aWR0aCwgYm91bmRzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAga2V5OiAncmVuZGVyUmVwZWF0JyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUmVwZWF0KHBhdGgsIGltYWdlLCBpbWFnZVNpemUsIG9mZnNldFgsIG9mZnNldFkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXRoKHBhdGgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmN0eC5jcmVhdGVQYXR0ZXJuKHRoaXMucmVzaXplSW1hZ2UoaW1hZ2UsIGltYWdlU2l6ZSksICdyZXBlYXQnKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKG9mZnNldFgsIG9mZnNldFkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSgtb2Zmc2V0WCwgLW9mZnNldFkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICdyZW5kZXJUZXh0Tm9kZScsXHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRleHROb2RlKHRleHRCb3VuZHMsIGNvbG9yLCBmb250LCB0ZXh0RGVjb3JhdGlvbiwgdGV4dFNoYWRvd3MpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gW2ZvbnQuZm9udFN0eWxlLCBmb250LmZvbnRWYXJpYW50LCBmb250LmZvbnRXZWlnaHQsIGZvbnQuZm9udFNpemUsIGZvbnQuZm9udEZhbWlseV0uam9pbignICcpO1xyXG5cclxuICAgICAgICAgICAgdGV4dEJvdW5kcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpczQuY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dFNoYWRvd3MgJiYgdGV4dC50ZXh0LnRyaW0oKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhZG93cy5zbGljZSgwKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbiAodGV4dFNoYWRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd0NvbG9yID0gdGV4dFNoYWRvdy5jb2xvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LnNoYWRvd09mZnNldFggPSB0ZXh0U2hhZG93Lm9mZnNldFggKiBfdGhpczQub3B0aW9ucy5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXM0LmN0eC5zaGFkb3dPZmZzZXRZID0gdGV4dFNoYWRvdy5vZmZzZXRZICogX3RoaXM0Lm9wdGlvbnMuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguc2hhZG93Qmx1ciA9IHRleHRTaGFkb3cuYmx1cjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzNC5jdHguZmlsbFRleHQodGV4dC50ZXh0LCB0ZXh0LmJvdW5kcy5sZWZ0LCB0ZXh0LmJvdW5kcy50b3AgKyB0ZXh0LmJvdW5kcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpczQuY3R4LmZpbGxUZXh0KHRleHQudGV4dCwgdGV4dC5ib3VuZHMubGVmdCwgdGV4dC5ib3VuZHMudG9wICsgdGV4dC5ib3VuZHMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dERlY29yYXRpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dERlY29yYXRpb25Db2xvciA9IHRleHREZWNvcmF0aW9uLnRleHREZWNvcmF0aW9uQ29sb3IgfHwgY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb24udGV4dERlY29yYXRpb25MaW5lLmZvckVhY2goZnVuY3Rpb24gKHRleHREZWNvcmF0aW9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRleHREZWNvcmF0aW9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OX0xJTkUuVU5ERVJMSU5FOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyYXdzIGEgbGluZSBhdCB0aGUgYmFzZWxpbmUgb2YgdGhlIGZvbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIEFzIHNvbWUgYnJvd3NlcnMgZGlzcGxheSB0aGUgbGluZSBhcyBtb3JlIHRoYW4gMXB4IGlmIHRoZSBmb250LXNpemUgaXMgYmlnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdGFrZSB0aGF0IGludG8gYWNjb3VudCBib3RoIGluIHBvc2l0aW9uIGFuZCBzaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9vcHRpb25zJGZvbnRNZXRyaWNzJCA9IF90aGlzNC5vcHRpb25zLmZvbnRNZXRyaWNzLmdldE1ldHJpY3MoZm9udCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VsaW5lID0gX29wdGlvbnMkZm9udE1ldHJpY3MkLmJhc2VsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGgucm91bmQodGV4dC5ib3VuZHMudG9wICsgYmFzZWxpbmUpLCB0ZXh0LmJvdW5kcy53aWR0aCwgMSwgdGV4dERlY29yYXRpb25Db2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIF90ZXh0RGVjb3JhdGlvbi5URVhUX0RFQ09SQVRJT05fTElORS5PVkVSTElORTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGgucm91bmQodGV4dC5ib3VuZHMudG9wKSwgdGV4dC5ib3VuZHMud2lkdGgsIDEsIHRleHREZWNvcmF0aW9uQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBfdGV4dERlY29yYXRpb24uVEVYVF9ERUNPUkFUSU9OX0xJTkUuTElORV9USFJPVUdIOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gdHJ5IGFuZCBmaW5kIGV4YWN0IHBvc2l0aW9uIGZvciBsaW5lLXRocm91Z2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX29wdGlvbnMkZm9udE1ldHJpY3MkMiA9IF90aGlzNC5vcHRpb25zLmZvbnRNZXRyaWNzLmdldE1ldHJpY3MoZm9udCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pZGRsZSA9IF9vcHRpb25zJGZvbnRNZXRyaWNzJDIubWlkZGxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczQucmVjdGFuZ2xlKHRleHQuYm91bmRzLmxlZnQsIE1hdGguY2VpbCh0ZXh0LmJvdW5kcy50b3AgKyBtaWRkbGUpLCB0ZXh0LmJvdW5kcy53aWR0aCwgMSwgdGV4dERlY29yYXRpb25Db2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ3Jlc2l6ZUltYWdlJyxcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplSW1hZ2UoaW1hZ2UsIHNpemUpIHtcclxuICAgICAgICAgICAgaWYgKGltYWdlLndpZHRoID09PSBzaXplLndpZHRoICYmIGltYWdlLmhlaWdodCA9PT0gc2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHNpemUud2lkdGg7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCAwLCAwLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIGtleTogJ3NldE9wYWNpdHknLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBrZXk6ICd0cmFuc2Zvcm0nLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2Zvcm0ob2Zmc2V0WCwgb2Zmc2V0WSwgbWF0cml4LCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZShvZmZzZXRYLCBvZmZzZXRZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgudHJhbnNmb3JtKG1hdHJpeFswXSwgbWF0cml4WzFdLCBtYXRyaXhbMl0sIG1hdHJpeFszXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0pO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUoLW9mZnNldFgsIC1vZmZzZXRZKTtcclxuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfV0pO1xyXG5cclxuICAgIHJldHVybiBDYW52YXNSZW5kZXJlcjtcclxufSgpO1xyXG5cclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FudmFzUmVuZGVyZXI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuXHJcbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XHJcblxyXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxyXG5cclxudmFyIEZvcmVpZ25PYmplY3RSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZvcmVpZ25PYmplY3RSZW5kZXJlcihlbGVtZW50KSB7XHJcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcmVpZ25PYmplY3RSZW5kZXJlcik7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUNsYXNzKEZvcmVpZ25PYmplY3RSZW5kZXJlciwgW3tcclxuICAgICAgICBrZXk6ICdyZW5kZXInLFxyXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIob3B0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IE1hdGguZmxvb3Iob3B0aW9ucy53aWR0aCkgKiBvcHRpb25zLnNjYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBNYXRoLmZsb29yKG9wdGlvbnMuaGVpZ2h0KSAqIG9wdGlvbnMuc2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gb3B0aW9ucy53aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMubG9nZ2VyLmxvZygnRm9yZWlnbk9iamVjdCByZW5kZXJlciBpbml0aWFsaXplZCAoJyArIG9wdGlvbnMud2lkdGggKyAneCcgKyBvcHRpb25zLmhlaWdodCArICcgYXQgJyArIG9wdGlvbnMueCArICcsJyArIG9wdGlvbnMueSArICcpIHdpdGggc2NhbGUgJyArIG9wdGlvbnMuc2NhbGUpO1xyXG4gICAgICAgICAgICB2YXIgc3ZnID0gY3JlYXRlRm9yZWlnbk9iamVjdFNWRyhNYXRoLm1heChvcHRpb25zLndpbmRvd1dpZHRoLCBvcHRpb25zLndpZHRoKSAqIG9wdGlvbnMuc2NhbGUsIE1hdGgubWF4KG9wdGlvbnMud2luZG93SGVpZ2h0LCBvcHRpb25zLmhlaWdodCkgKiBvcHRpb25zLnNjYWxlLCBvcHRpb25zLnNjcm9sbFggKiBvcHRpb25zLnNjYWxlLCBvcHRpb25zLnNjcm9sbFkgKiBvcHRpb25zLnNjYWxlLCB0aGlzLmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxvYWRTZXJpYWxpemVkU1ZHKHN2ZykudGhlbihmdW5jdGlvbiAoaW1nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHguZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgb3B0aW9ucy53aWR0aCAqIG9wdGlvbnMuc2NhbGUsIG9wdGlvbnMuaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3R4LmRyYXdJbWFnZShpbWcsIC1vcHRpb25zLnggKiBvcHRpb25zLnNjYWxlLCAtb3B0aW9ucy55ICogb3B0aW9ucy5zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY2FudmFzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIEZvcmVpZ25PYmplY3RSZW5kZXJlcjtcclxufSgpO1xyXG5cclxuZXhwb3J0cy5kZWZhdWx0ID0gRm9yZWlnbk9iamVjdFJlbmRlcmVyO1xyXG52YXIgY3JlYXRlRm9yZWlnbk9iamVjdFNWRyA9IGV4cG9ydHMuY3JlYXRlRm9yZWlnbk9iamVjdFNWRyA9IGZ1bmN0aW9uIGNyZWF0ZUZvcmVpZ25PYmplY3RTVkcod2lkdGgsIGhlaWdodCwgeCwgeSwgbm9kZSkge1xyXG4gICAgdmFyIHhtbG5zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcclxuICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsICdzdmcnKTtcclxuICAgIHZhciBmb3JlaWduT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCAnZm9yZWlnbk9iamVjdCcpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHdpZHRoKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgaGVpZ2h0KTtcclxuXHJcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsICcxMDAlJyk7XHJcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCAnMTAwJScpO1xyXG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIHgpO1xyXG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIHkpO1xyXG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsICd0cnVlJyk7XHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQoZm9yZWlnbk9iamVjdCk7XHJcblxyXG4gICAgZm9yZWlnbk9iamVjdC5hcHBlbmRDaGlsZChub2RlKTtcclxuXHJcbiAgICByZXR1cm4gc3ZnO1xyXG59O1xyXG5cclxudmFyIGxvYWRTZXJpYWxpemVkU1ZHID0gZXhwb3J0cy5sb2FkU2VyaWFsaXplZFNWRyA9IGZ1bmN0aW9uIGxvYWRTZXJpYWxpemVkU1ZHKHN2Zykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoaW1nKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xyXG5cclxuICAgICAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQobmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhzdmcpKTtcclxuICAgIH0pO1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBwZGZtYWtlXzEgPSByZXF1aXJlKFwicGRmbWFrZS9idWlsZC9wZGZtYWtlXCIpO1xyXG52YXIgVVNFRlVMTF9TVFlMRSA9IFtcclxuICAgIFwiYmFja2dyb3VuZFwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kLWNsaXBcIixcclxuICAgIFwiYmFja2dyb3VuZC1jb2xvclwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kLWltYWdlXCIsXHJcbiAgICBcInVybFwiLFxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnRcIixcclxuICAgIFwicmFkaWFsLWdyYWRpZW50XCIsXHJcbiAgICBcImJhY2tncm91bmQtb3JpZ2luXCIsXHJcbiAgICBcImJhY2tncm91bmQtcG9zaXRpb25cIixcclxuICAgIFwiYmFja2dyb3VuZC1zaXplXCIsXHJcbiAgICBcImJvcmRlclwiLFxyXG4gICAgXCJib3JkZXItY29sb3JcIixcclxuICAgIFwiYm9yZGVyLXJhZGl1c1wiLFxyXG4gICAgXCJib3JkZXItc3R5bGVcIixcclxuICAgIFwiYm9yZGVyLXdpZHRoXCIsXHJcbiAgICBcImJvdHRvbVwiLFxyXG4gICAgXCJib3gtc2l6aW5nXCIsXHJcbiAgICBcImNvbnRlbnRcIixcclxuICAgIFwiY29sb3JcIixcclxuICAgIFwiZGlzcGxheVwiLFxyXG4gICAgXCJmbGV4XCIsXHJcbiAgICBcImZsb2F0XCIsXHJcbiAgICBcImZvbnRcIixcclxuICAgIFwiZm9udC1mYW1pbHlcIixcclxuICAgIFwiZm9udC1zaXplXCIsXHJcbiAgICBcImZvbnQtc3R5bGVcIixcclxuICAgIFwiZm9udC12YXJpYW50XCIsXHJcbiAgICBcImZvbnQtd2VpZ2h0XCIsXHJcbiAgICBcImhlaWdodFwiLFxyXG4gICAgXCJsZWZ0XCIsXHJcbiAgICBcImxldHRlci1zcGFjaW5nXCIsXHJcbiAgICBcImxpbmUtYnJlYWtcIixcclxuICAgIFwibGlzdC1zdHlsZVwiLFxyXG4gICAgXCJsaXN0LXN0eWxlLWltYWdlXCIsXHJcbiAgICBcImxpc3Qtc3R5bGUtcG9zaXRpb25cIixcclxuICAgIFwibGlzdC1zdHlsZS10eXBlXCIsXHJcbiAgICBcIm1hcmdpblwiLFxyXG4gICAgXCJtYXgtaGVpZ2h0XCIsXHJcbiAgICBcIm1heC13aWR0aFwiLFxyXG4gICAgXCJtaW4taGVpZ2h0XCIsXHJcbiAgICBcIm1pbi13aWR0aFwiLFxyXG4gICAgXCJvcGFjaXR5XCIsXHJcbiAgICBcIm92ZXJmbG93XCIsXHJcbiAgICBcIm92ZXJmbG93LXdyYXBcIixcclxuICAgIFwicGFkZGluZ1wiLFxyXG4gICAgXCJwb3NpdGlvblwiLFxyXG4gICAgXCJyaWdodFwiLFxyXG4gICAgXCJ0ZXh0LWFsaWduXCIsXHJcbiAgICBcInRleHQtZGVjb3JhdGlvblwiLFxyXG4gICAgXCJ0ZXh0LWRlY29yYXRpb24tY29sb3JcIixcclxuICAgIFwidGV4dC1kZWNvcmF0aW9uLWxpbmVcIixcclxuICAgIFwidGV4dC1kZWNvcmF0aW9uLXN0eWxlXCIsXHJcbiAgICBcInRleHQtc2hhZG93XCIsXHJcbiAgICBcInRleHQtdHJhbnNmb3JtXCIsXHJcbiAgICBcInRvcFwiLFxyXG4gICAgXCJ0cmFuc2Zvcm1cIixcclxuICAgIFwidmlzaWJpbGl0eVwiLFxyXG4gICAgXCJ3aGl0ZS1zcGFjZVwiLFxyXG4gICAgXCJ3aWR0aFwiLFxyXG4gICAgXCJ3b3JkLWJyZWFrXCIsXHJcbiAgICBcIndvcmQtc3BhY2luZ1wiLFxyXG4gICAgXCJ3b3JkLXdyYXBcIixcclxuICAgIFwiei1pbmRleFwiLFxyXG4gICAgXCJmaWxsXCIsXHJcbiAgICBcImZpbGwtb3BhY2l0eVwiLFxyXG4gICAgXCJ0ZXh0LWFuY2hvclwiLFxyXG4gICAgXCJzdHJva2VcIixcclxuICAgIFwic3Ryb2tlLW9wYWNpdHlcIixcclxuICAgIFwic3Ryb2tlLWRhc2hhcnJheVwiLFxyXG4gICAgXCJzaGFwZS1yZW5kZXJpbmdcIixcclxuICAgIFwic3Ryb2tlLXdpZHRoXCIsXHJcbiAgICBcInNoYXBlLXJlbmRlcmluZ1wiXHJcbl07XHJcbnZhciBOT1RfTk9ORSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09IFwibm9uZVwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG52YXIgSEFDS19GT1JfU1RZTEUgPSB7XHJcbiAgICBcInRyYW5zZm9ybVwiOiBOT1RfTk9ORSxcclxuICAgIFwiZmlsdGVyXCI6IE5PVF9OT05FXHJcbn07XHJcbnZhciBBYnN0cmFjdDRQREYgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWJzdHJhY3Q0UERGKGRvY0RlZmluaXRpb24pIHtcclxuICAgICAgICB0aGlzLm1Eb2NEZWZpbml0aW9uID0gZG9jRGVmaW5pdGlvbjtcclxuICAgIH1cclxuICAgIEFic3RyYWN0NFBERi5wcm90b3R5cGUuRFBJID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyAmJiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH07XHJcbiAgICBBYnN0cmFjdDRQREYucHJvdG90eXBlLmdldENvbXB1dGVkU3R5bGVTdHJpbmcgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgYm94ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc2VsZWN0b3IpO1xyXG4gICAgICAgIHZhciBzdHlsZSA9IFwiXCI7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChib3gsIGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGJveC5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoVVNFRlVMTF9TVFlMRS5pbmRleE9mKG5hbWUpICE9IC0xICYmICghSEFDS19GT1JfU1RZTEVbbmFtZV0gfHwgKEhBQ0tfRk9SX1NUWUxFW25hbWVdICYmIEhBQ0tfRk9SX1NUWUxFW25hbWVdKHZhbHVlKSkpKVxyXG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gbmFtZSArIFwiOlwiICsgdmFsdWUgKyBcIjtcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9O1xyXG4gICAgQWJzdHJhY3Q0UERGLnByb3RvdHlwZS5hcHBlbmRDb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCByZWN1cnNpdmUpIHtcclxuICAgICAgICBpZiAocmVjdXJzaXZlID09PSB2b2lkIDApIHsgcmVjdXJzaXZlID0gZmFsc2U7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdzdHlsZScsIHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZVN0cmluZyhzZWxlY3RvcikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlY3Vyc2l2ZSAmJiBzZWxlY3Rvci5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXBwZW5kQ29tcHV0ZWRTdHlsZShzZWxlY3Rvci5jaGlsZE5vZGVzLCByZWN1cnNpdmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChzZWxlY3RvciwgZnVuY3Rpb24gKGVsbSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYXBwZW5kQ29tcHV0ZWRTdHlsZShlbG0sIHJlY3Vyc2l2ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBYnN0cmFjdDRQREYucHJvdG90eXBlLmVsbTJpbWcgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGxhYmxlLCBzY2FsZSwgbG9nZ2luZykge1xyXG4gICAgICAgIGlmIChsYWJsZSA9PT0gdm9pZCAwKSB7IGxhYmxlID0gbnVsbDsgfVxyXG4gICAgICAgIGlmIChzY2FsZSA9PT0gdm9pZCAwKSB7IHNjYWxlID0gMTsgfVxyXG4gICAgICAgIGlmIChsb2dnaW5nID09PSB2b2lkIDApIHsgbG9nZ2luZyA9IGZhbHNlOyB9XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9nZ2luZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ2VsbTJpbWc6Jywgc2VsZWN0b3IudGFnTmFtZSwgc2VsZWN0b3IuaWQsIHNlbGVjdG9yLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29tcHV0ZWRTdHlsZShzZWxlY3RvciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlICo9IHRoaXMuRFBJKCkgKiAocGFyc2VGbG9hdChzZWxlY3Rvci5kYXRhc2V0LnBkZl9zY2FsZSkgfHwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiByZXF1aXJlKFwiaHRtbDJjYW52YXNcIik7IH0pLnRoZW4oZnVuY3Rpb24gKGh0bWwyY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWwyY2FudmFzKHNlbGVjdG9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiBzY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2luZzogbG9nZ2luZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ09SUzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoX2NhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdHggPSBfY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFpciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlyW2xhYmxlXSA9IF9jYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChsYWJsZSwgMTAsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhaXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBYnN0cmFjdDRQREYucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKGlkcykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGltZ3MsIGRvYztcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tRG9jRGVmaW5pdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IFwiVW50aXRsZWQucGRmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogXCJBNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGhpcy5tRG9jRGVmaW5pdGlvbi5jb250ZW50IHx8IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ3NlY3Rpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlczogT2JqZWN0LmFzc2lnbih0aGlzLm1Eb2NEZWZpbml0aW9uLmltYWdlcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmNBQUFBV0NBWUFBQUFyZGdjRkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUJTVWxFUVZRNEVlMVZQVXNEUVJCOXMzZEJSQ1JOUXZDamtEUVcvaEovZ2I5QU93V0RvSVhGZ1lYWVhHUCtoWVcxL2dJcjdXenNFOFZHeFpCY3d0MDRkem5DSld3MnR3dFd1dFhNbXpkdmxyZDd0NFNaVmJ2aTFaaWhadUNGcVQ5QS9CN1FkNUZJNDRScFBjUXBFMW9DMUlzRXE1alJCZUd5YzB6WGFWOG12aGJ5T1JFdXJJUk1aTVpocDBWdGhZQjltWEJpNGpyVXp0SWV2MWJOYktnNkNNeHZJV3dnNUdXVkRPSE5aN2xYNmwvd3JHK0Z6YmgvY2ExYmY5UVdCaEt0SHpub2JndGpLRjkyWkJMM1RVV3BSYks3TGhpVkNZOGtZM3hLL2lUaWV4TmNFeXdTWHhLQnJmSHZyZEJOMkpSc3A0Qm9RM2RidEhMVDRLK0pxeFd3OHZyNFlEYWYrdlIrU21YUld3OTlsVDlOOTZWYXlwSVl0d2dveVd5SlJ0aVgzVCtYN1RYeFJPY3hHZUFvNWNobHlOY0JWeHJiMkpWcFRVSHN6NElRaS9ETDZ3UHVjRU54cXZvRHg2OVBYUDhPS240QUFBQUFTVVZPUks1Q1lJST1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IE9iamVjdC5hc3NpZ24odGhpcy5tRG9jRGVmaW5pdGlvbi5zdHlsZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogWzAsIDIwLCAwLCAwXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMubURvY0RlZmluaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIFByb21pc2UuYWxsKGlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfdGhpcy5tRG9jRGVmaW5pdGlvbi5vbnByb2dyZXNzdXBkYXRlICYmIF90aGlzLm1Eb2NEZWZpbml0aW9uLm9ucHJvZ3Jlc3N1cGRhdGUoXCJyZXNvdXJjZVwiLCBpZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVsbTJpbWcoaWQsIGlkLCAyLCB0cnVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ncyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jID0gT2JqZWN0LmFzc2lnbih0aGlzLm1Eb2NEZWZpbml0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IE9iamVjdC5hc3NpZ24odGhpcy5tRG9jRGVmaW5pdGlvbi5pbWFnZXMsIE9iamVjdC5hc3NpZ24uYXBwbHkobnVsbCwgaW1ncykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1Eb2NEZWZpbml0aW9uID0gZG9jO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIsIHRoaXNdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBYnN0cmFjdDRQREYucHJvdG90eXBlLl9jcmVhdGVQZGYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1Eb2NEZWZpbml0aW9uLmZpbGVuYW1lLmVuZHNXaXRoKFwiLnBkZlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1Eb2NEZWZpbml0aW9uLmZpbGVuYW1lICs9IFwiLnBkZlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGRmbWFrZV8xLmNyZWF0ZVBkZih0aGlzLm1Eb2NEZWZpbml0aW9uKTtcclxuICAgIH07XHJcbiAgICBBYnN0cmFjdDRQREYucHJvdG90eXBlLmRvd25sb2FkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlUGRmKCkuZG93bmxvYWQodGhpcy5tRG9jRGVmaW5pdGlvbi5maWxlbmFtZSwgY2IpO1xyXG4gICAgfTtcclxuICAgIEFic3RyYWN0NFBERi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGVQZGYoKS5vcGVuKCk7XHJcbiAgICB9O1xyXG4gICAgQWJzdHJhY3Q0UERGLnBhZ2VTaXplID0ge1xyXG4gICAgICAgIHdpZHRoOiA1OTUuMjgsXHJcbiAgICAgICAgaGVpZ2h0OiA4NDEuODlcclxuICAgIH07XHJcbiAgICBBYnN0cmFjdDRQREYucGFnZU1hcmdpbnMgPSA0MDtcclxuICAgIEFic3RyYWN0NFBERi5jb250ZW50U2l6ZSA9IHtcclxuICAgICAgICB3aWR0aDogQWJzdHJhY3Q0UERGLnBhZ2VTaXplLndpZHRoIC0gQWJzdHJhY3Q0UERGLnBhZ2VNYXJnaW5zICogMixcclxuICAgICAgICBoZWlnaHQ6IEFic3RyYWN0NFBERi5wYWdlU2l6ZS5oZWlnaHQgLSBBYnN0cmFjdDRQREYucGFnZU1hcmdpbnMgKiAyXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFic3RyYWN0NFBERjtcclxufSgpKTtcclxudmFyIF9nbG9iYWwgPSAod2luZG93KTtcclxuX2dsb2JhbC5BYnN0cmFjdDRQREYgPSBBYnN0cmFjdDRQREY7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wZGZtYWtlX2J1aWxkX3BkZm1ha2VfXzsiXSwic291cmNlUm9vdCI6IiJ9