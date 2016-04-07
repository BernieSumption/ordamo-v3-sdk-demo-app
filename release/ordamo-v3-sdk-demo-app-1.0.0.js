!function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s;
}({
    1: [ function(require, module, exports) {
        "use strict";
        function startApp() {
            document.body.innerHTML = renderIndexPage({
                embeddedText: EMBEDDED_TEXT_CONTENT,
                embeddedImageSrc: EMBEDDED_IMAGE_CONTENT,
                sdkFiles: sdkInstance.getFiles(),
                myFunctionResult: lib_1.myFunction()
            }), sdkInstance.notifyAppIsReady();
        }
        var ordamo_v3_sdk_1 = require("ordamo-v3-sdk"), lib_1 = require("./lib");
        require("./style/app.less");
        var EMBEDDED_TEXT_CONTENT = "This text is embedded from a text file", EMBEDDED_IMAGE_CONTENT = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAoAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBQUQ2NzhBRTE3QjExRTU5RUQ2RTQyRTdDRUY4QjczIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBQUQ2NzhCRTE3QjExRTU5RUQ2RTQyRTdDRUY4QjczIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkFBRDY3ODhFMTdCMTFFNTlFRDZFNDJFN0NFRjhCNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkFBRDY3ODlFMTdCMTFFNTlFRDZFNDJFN0NFRjhCNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAMCAgICQgMCQkMEQsK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", renderIndexPage = require("./templates/index.jade"), sdkInstance = new ordamo_v3_sdk_1.OrdamoSDK(startApp);
    }, {
        "./lib": 2,
        "./style/app.less": 3,
        "./templates/index.jade": 4,
        "ordamo-v3-sdk": 9
    } ],
    2: [ function(require, module, exports) {
        "use strict";
        function myFunction() {
            return "This content is returned by a library function";
        }
        exports.myFunction = myFunction;
    }, {} ],
    3: [ function(require, module, exports) {
        var css = 'body {\n  background: #EEE;\n  font-family: sans-serif;\n}\n.seal-embed {\n  background-image: url("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAoAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUyRjM3QzM5RTJCODExRTU5RUQ2RTQyRTdDRUY4QjczIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUyRjM3QzNBRTJCODExRTU5RUQ2RTQyRTdDRUY4QjczIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkFBRDY3OENFMTdCMTFFNTlFRDZFNDJFN0NFRjhCNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTJGMzdDMzhFMkI4MTFFNTlFRDZFNDJFN0NFRjhCNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAMCAgICQgMCQkMEQsK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");\n  width: 200px;\n  height: 153px;\n}\n.caption {\n  font-size: 0.8em;\n  font-style: italic;\n}\n';
        require("lessify")(css), module.exports = css;
    }, {
        lessify: 8
    } ],
    4: [ function(require, module, exports) {
        var jade = require("jade/runtime");
        module.exports = function(locals) {
            var jade_interp, buf = [], locals_for_with = locals || {};
            return function(embeddedImageSrc, sdkFiles, undefined) {
                buf.push("<h1>Ordamo SDK Demo App</h1><p>Welcome to the SDK demo app. This page demonstrates the major features of the SDK.</p><h2>Build scripts</h2><p>Ordamo V3 apps must compile to a single HTML or JS file, and this requires a build script. Because setting up a JavaScript build system can be hard, this project is already set up with a package.json containing the dependencies and scripts that you need to get you started immediately. Feel free to change it if you want to.</p><p>Our default build script is based on NPM, browserify, Typescript and LESS.</p><p>You may find these scripts useful:</p><ul><li><code>npm start</code> - launches a development server at http://localhost:9966/ that serves this documentation page. It watches your source folder and whenever you change anything it recompiles the code, refreshes the browser window and runs unit tests.</li><li><code>npm test</code> - run unit tests.</li><li><code>npm release</code> - make a release build. THe newly created build file is copied to <code>release/app-name--version.js</code></li></ul><h2>Embedding content</h2><p>SDK apps may not load data at runtime using standard browser APIs like XMLHttpRequest and &lt;img&gt;. Instead, all code and assets must be either compiled into a single HTML or JS file, or loaded at runtime using the SDK's content feature. This is to enable the apps to work offline.</p><h3>Loading content through the SDK</h3><p>These files are loaded at runtime as content provided by the SDK. In development, they are defined in <code>/mockcontent/</code> and compiled into <code>/build/mockcontent.json</code> using <code>npm run mockcontent</code>.</p><table><tr>"), 
                function() {
                    var $$obj = sdkFiles;
                    if ("number" == typeof $$obj.length) for (var $index = 0, $$l = $$obj.length; $$l > $index; $index++) {
                        var file = $$obj[$index];
                        buf.push('<td><img src="' + jade.escape(null == (jade_interp = file.content) ? "" : jade_interp) + '"></td>');
                    } else {
                        var $$l = 0;
                        for (var $index in $$obj) {
                            $$l++;
                            var file = $$obj[$index];
                            buf.push('<td><img src="' + jade.escape(null == (jade_interp = file.content) ? "" : jade_interp) + '"></td>');
                        }
                    }
                }.call(this), buf.push('</tr></table><p class="caption">"Happy Birthday Johan!" and "Curiosity" © Shelly ʕ•ᴥ•ʔ Licensed under CC-BY.</p><h3>Image embedded in JS using urify in app.ts</h3><p><img src="' + jade.escape(null == (jade_interp = embeddedImageSrc) ? "" : jade_interp) + '"></p><p class="caption">Husky Puppy © 2012 Shelly ʕ•ᴥ•ʔ . Licensed under CC-BY</p><h3>Image embedded through data-uri() in LESS in app.less</h3><p class="seal-embed"></p><p class="caption">Ice is Nice © 2014 Shelly ʕ•ᴥ•ʔ . Licensed under CC-BY.</p>');
            }.call(this, "embeddedImageSrc" in locals_for_with ? locals_for_with.embeddedImageSrc : "undefined" != typeof embeddedImageSrc ? embeddedImageSrc : void 0, "sdkFiles" in locals_for_with ? locals_for_with.sdkFiles : "undefined" != typeof sdkFiles ? sdkFiles : void 0, "undefined" in locals_for_with ? locals_for_with.undefined : void 0), 
            buf.join("");
        };
    }, {
        "jade/runtime": 7
    } ],
    5: [ function(require, module, exports) {}, {} ],
    6: [ function(require, module, exports) {
        module.exports = function(css, customDocument) {
            var doc = customDocument || document;
            if (doc.createStyleSheet) {
                var sheet = doc.createStyleSheet();
                return sheet.cssText = css, sheet.ownerNode;
            }
            var head = doc.getElementsByTagName("head")[0], style = doc.createElement("style");
            return style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(doc.createTextNode(css)), 
            head.appendChild(style), style;
        }, module.exports.byUrl = function(url) {
            if (document.createStyleSheet) return document.createStyleSheet(url).ownerNode;
            var head = document.getElementsByTagName("head")[0], link = document.createElement("link");
            return link.rel = "stylesheet", link.href = url, head.appendChild(link), link;
        };
    }, {} ],
    7: [ function(require, module, exports) {
        (function(global) {
            !function(f) {
                if ("object" == typeof exports && "undefined" != typeof module) module.exports = f(); else if ("function" == typeof define && define.amd) define([], f); else {
                    var g;
                    g = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, 
                    g.jade = f();
                }
            }(function() {
                return function e(t, n, r) {
                    function s(o, u) {
                        if (!n[o]) {
                            if (!t[o]) {
                                var a = "function" == typeof require && require;
                                if (!u && a) return a(o, !0);
                                if (i) return i(o, !0);
                                var f = new Error("Cannot find module '" + o + "'");
                                throw f.code = "MODULE_NOT_FOUND", f;
                            }
                            var l = n[o] = {
                                exports: {}
                            };
                            t[o][0].call(l.exports, function(e) {
                                var n = t[o][1][e];
                                return s(n ? n : e);
                            }, l, l.exports, e, t, n, r);
                        }
                        return n[o].exports;
                    }
                    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
                    return s;
                }({
                    1: [ function(require, module, exports) {
                        "use strict";
                        function nulls(val) {
                            return null != val && "" !== val;
                        }
                        function joinClasses(val) {
                            return (Array.isArray(val) ? val.map(joinClasses) : val && "object" == typeof val ? Object.keys(val).filter(function(key) {
                                return val[key];
                            }) : [ val ]).filter(nulls).join(" ");
                        }
                        function jade_encode_char(c) {
                            return jade_encode_html_rules[c] || c;
                        }
                        function jade_escape(html) {
                            var result = String(html).replace(jade_match_html, jade_encode_char);
                            return result === "" + html ? html : result;
                        }
                        exports.merge = function merge(a, b) {
                            if (1 === arguments.length) {
                                for (var attrs = a[0], i = 1; i < a.length; i++) attrs = merge(attrs, a[i]);
                                return attrs;
                            }
                            var ac = a.class, bc = b.class;
                            (ac || bc) && (ac = ac || [], bc = bc || [], Array.isArray(ac) || (ac = [ ac ]), 
                            Array.isArray(bc) || (bc = [ bc ]), a.class = ac.concat(bc).filter(nulls));
                            for (var key in b) "class" != key && (a[key] = b[key]);
                            return a;
                        }, exports.joinClasses = joinClasses, exports.cls = function(classes, escaped) {
                            for (var buf = [], i = 0; i < classes.length; i++) escaped && escaped[i] ? buf.push(exports.escape(joinClasses([ classes[i] ]))) : buf.push(joinClasses(classes[i]));
                            var text = joinClasses(buf);
                            return text.length ? ' class="' + text + '"' : "";
                        }, exports.style = function(val) {
                            return val && "object" == typeof val ? Object.keys(val).map(function(style) {
                                return style + ":" + val[style];
                            }).join(";") : val;
                        }, exports.attr = function(key, val, escaped, terse) {
                            return "style" === key && (val = exports.style(val)), "boolean" == typeof val || null == val ? val ? " " + (terse ? key : key + '="' + key + '"') : "" : 0 == key.indexOf("data") && "string" != typeof val ? (-1 !== JSON.stringify(val).indexOf("&") && console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"), 
                            val && "function" == typeof val.toISOString && console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0"), 
                            " " + key + "='" + JSON.stringify(val).replace(/'/g, "&apos;") + "'") : escaped ? (val && "function" == typeof val.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"), 
                            " " + key + '="' + exports.escape(val) + '"') : (val && "function" == typeof val.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"), 
                            " " + key + '="' + val + '"');
                        }, exports.attrs = function(obj, terse) {
                            var buf = [], keys = Object.keys(obj);
                            if (keys.length) for (var i = 0; i < keys.length; ++i) {
                                var key = keys[i], val = obj[key];
                                "class" == key ? (val = joinClasses(val)) && buf.push(" " + key + '="' + val + '"') : buf.push(exports.attr(key, val, !1, terse));
                            }
                            return buf.join("");
                        };
                        var jade_encode_html_rules = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;"
                        }, jade_match_html = /[&<>"]/g;
                        exports.escape = jade_escape, exports.rethrow = function rethrow(err, filename, lineno, str) {
                            if (!(err instanceof Error)) throw err;
                            if (!("undefined" == typeof window && filename || str)) throw err.message += " on line " + lineno, 
                            err;
                            try {
                                str = str || require("fs").readFileSync(filename, "utf8");
                            } catch (ex) {
                                rethrow(err, null, lineno);
                            }
                            var context = 3, lines = str.split("\n"), start = Math.max(lineno - context, 0), end = Math.min(lines.length, lineno + context), context = lines.slice(start, end).map(function(line, i) {
                                var curr = i + start + 1;
                                return (curr == lineno ? "  > " : "    ") + curr + "| " + line;
                            }).join("\n");
                            throw err.path = filename, err.message = (filename || "Jade") + ":" + lineno + "\n" + context + "\n\n" + err.message, 
                            err;
                        }, exports.DebugItem = function(lineno, filename) {
                            this.lineno = lineno, this.filename = filename;
                        };
                    }, {
                        fs: 2
                    } ],
                    2: [ function(require, module, exports) {}, {} ]
                }, {}, [ 1 ])(1);
            });
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
        fs: 5
    } ],
    8: [ function(require, module, exports) {
        module.exports = require("cssify");
    }, {
        cssify: 6
    } ],
    9: [ function(require, module, exports) {
        "use strict";
        var IS_DEVELOPMENT_MODE = window === top, INSTANCE_CREATED = !1, OrdamoSDK = function() {
            function OrdamoSDK(_initAppCallback) {
                if (this._initAppCallback = _initAppCallback, this._sentReadyEvent = !1, IS_DEVELOPMENT_MODE && console.log("OrdamoSDK running in development mode."), 
                INSTANCE_CREATED) throw new Error("Only one instance of OrdamoSDK may be created per application");
                INSTANCE_CREATED = !0, IS_DEVELOPMENT_MODE ? this.loadMockContentFile(this._acceptMockContent.bind(this)) : (window.addEventListener("message", this._handleParentMessage.bind(this)), 
                parent.postMessage({
                    eventType: "load"
                }, "*"));
            }
            return OrdamoSDK.prototype.notifyAppIsReady = function() {
                if (!this._initMessage) throw new Error("Illegal call to notifyAppIsReady() before init callback has fired.");
                this._sentReadyEvent || (this._sentReadyEvent = !0, IS_DEVELOPMENT_MODE || parent.postMessage({
                    eventType: "ready"
                }, "*"));
            }, OrdamoSDK.prototype.getFiles = function() {
                return this._checkContentLoaded(), this._content.files;
            }, OrdamoSDK.prototype.getInitMessage = function() {
                return JSON.parse(JSON.stringify(this._initMessage));
            }, OrdamoSDK.prototype._handleParentMessage = function(event) {
                var message = event.data;
                "init" === message.eventType && (this._initMessage ? console.error("Second init message provided") : (this._initMessage = message, 
                this._content = {
                    files: []
                }, this._initAppCallback())), "navigate" === message.eventType && this.onNavigate && this.onNavigate(message.navigateButtonId);
            }, OrdamoSDK.prototype.loadMockContentFile = function(successCallback, failureCallback) {
                var MOCK_CONTENT_FILE = "mockcontent.json", xhr = new XMLHttpRequest();
                xhr.open("GET", MOCK_CONTENT_FILE, !0), xhr.onreadystatechange = function() {
                    if (4 === xhr.readyState) if (200 === xhr.status) {
                        var mockContent = void 0;
                        try {
                            mockContent = JSON.parse(xhr.responseText);
                        } catch (e) {
                            console.error(MOCK_CONTENT_FILE + " is not a valid JSON file, check the console for more info"), 
                            console.error(e), console.log(xhr.responseText);
                        }
                        successCallback(mockContent);
                    } else failureCallback ? failureCallback() : console.error('Failed to load "' + MOCK_CONTENT_FILE + '", is the development server running (npm start)');
                }, xhr.send();
            }, OrdamoSDK.prototype._acceptMockContent = function(mockContent) {
                var _this = this;
                if (this._content) throw new Error("Mock data file already loaded.");
                this._initMessage = MOCK_INIT_MESSAGE, this._content = mockContent;
                var seconds = 5;
                setTimeout(function() {
                    _this._sentReadyEvent || console.error("WARNING: this app is taking too long to be ready. It should call notifyAppIsReady() as soon as it is rendered.");
                }, 1e3 * seconds), this._initAppCallback();
            }, OrdamoSDK.prototype._checkContentLoaded = function() {
                if (!this._content) throw new Error("Content has not been loaded yet.");
            }, OrdamoSDK;
        }();
        exports.OrdamoSDK = OrdamoSDK;
        var MOCK_INIT_MESSAGE = {
            eventType: "init",
            widthPx: 1920,
            heightPx: 1080,
            resolutionPixelsPerCm: 14,
            shapes: [ {
                type: "circle",
                id: 0,
                x: 1104,
                y: 308,
                radius: 276,
                rotationDegrees: 180,
                borderWidth: 32
            }, {
                type: "circle",
                id: 1,
                x: 296,
                y: 492,
                radius: 276,
                rotationDegrees: 0,
                borderWidth: 32
            } ],
            contentAreas: [ {
                type: "rectangle",
                id: 0,
                x: 741,
                y: 640,
                width: 247,
                height: 240,
                rotationDegrees: 0
            }, {
                type: "rectangle",
                id: 1,
                x: 659,
                y: 160,
                width: 247,
                height: 240,
                rotationDegrees: 180
            } ]
        };
    }, {} ]
}, {}, [ 1 ]);