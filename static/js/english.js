$(document).ready(function() {
  !(function(a) {
    "use strict";
    "function" == typeof require &&
    "object" == typeof exports &&
    "object" == typeof module
      ? (module.exports = a)
      : "function" == typeof define
      ? define.amd || define(["jquery"], a)
      : (window.editormd = a());
  })(function() {
    "use strict";
    var b,
      c,
      d,
      e,
      f,
      g,
      a = "undefined" != typeof jQuery ? jQuery : Zepto;
    if ("undefined" != typeof a)
      return (
        (b = function(a, c) {
          return new b.fn.init(a, c);
        }),
        (b.title = b.$name = "Editor.md"),
        (b.version = "1.5.0"),
        (b.homePage = "https://pandao.github.io/editor.md/"),
        (b.classPrefix = "editormd-"),
        (b.toolbarModes = {
          full: [
            "undo",
            "redo",
            "|",
            "bold",
            "del",
            "italic",
            "quote",
            "ucwords",
            "uppercase",
            "lowercase",
            "|",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "|",
            "list-ul",
            "list-ol",
            "hr",
            "|",
            "link",
            "reference-link",
            "image",
            "code",
            "preformatted-text",
            "code-block",
            "table",
            "datetime",
            "emoji",
            "html-entities",
            "pagebreak",
            "|",
            "goto-line",
            "watch",
            "preview",
            "fullscreen",
            "clear",
            "search",
            "|",
            "help",
            "info"
          ],
          simple: [
            "undo",
            "redo",
            "|",
            "bold",
            "del",
            "italic",
            "quote",
            "uppercase",
            "lowercase",
            "|",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "|",
            "list-ul",
            "list-ol",
            "hr",
            "|",
            "watch",
            "preview",
            "fullscreen",
            "|",
            "help",
            "info"
          ],
          mini: ["undo", "redo", "|", "watch", "preview", "|", "help", "info"]
        }),
        (b.defaults = {
          mode: "gfm",
          name: "",
          value: "",
          theme: "",
          editorTheme: "default",
          previewTheme: "",
          markdown: "",
          appendMarkdown: "",
          width: "100%",
          height: "100%",
          path: "./lib/",
          pluginPath: "",
          delay: 300,
          autoLoadModules: !0,
          watch: !0,
          placeholder: "Enjoy Markdown! coding now...",
          gotoLine: !0,
          codeFold: !1,
          autoHeight: !1,
          autoFocus: !0,
          autoCloseTags: !0,
          searchReplace: !0,
          syncScrolling: !0,
          readOnly: !1,
          tabSize: 4,
          indentUnit: 4,
          lineNumbers: !0,
          lineWrapping: !0,
          autoCloseBrackets: !0,
          showTrailingSpace: !0,
          matchBrackets: !0,
          indentWithTabs: !0,
          styleSelectedText: !0,
          matchWordHighlight: !0,
          styleActiveLine: !0,
          dialogLockScreen: !0,
          dialogShowMask: !0,
          dialogDraggable: !0,
          dialogMaskBgColor: "#fff",
          dialogMaskOpacity: 0.1,
          fontSize: "13px",
          saveHTMLToTextarea: !1,
          disabledKeyMaps: [],
          onload: function() {},
          onresize: function() {},
          onchange: function() {},
          onwatch: null,
          onunwatch: null,
          onpreviewing: function() {},
          onpreviewed: function() {},
          onfullscreen: function() {},
          onfullscreenExit: function() {},
          onscroll: function() {},
          onpreviewscroll: function() {},
          imageUpload: !1,
          imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
          imageUploadURL: "",
          crossDomainUpload: !1,
          uploadCallbackURL: "",
          toc: !0,
          tocm: !1,
          tocTitle: "",
          tocDropdown: !1,
          tocContainer: "",
          tocStartLevel: 1,
          htmlDecode: !1,
          pageBreak: !0,
          atLink: !0,
          emailLink: !0,
          taskList: !1,
          emoji: !1,
          tex: !1,
          flowChart: !1,
          sequenceDiagram: !1,
          previewCodeHighlight: !0,
          toolbar: !0,
          toolbarAutoFixed: !0,
          toolbarIcons: "full",
          toolbarTitles: {},
          toolbarHandlers: {
            ucwords: function() {
              return b.toolbarHandlers.ucwords;
            },
            lowercase: function() {
              return b.toolbarHandlers.lowercase;
            }
          },
          toolbarCustomIcons: {
            lowercase:
              '<a href="javascript:;" title="Lowercase" unselectable="on"><i class="fa" name="lowercase" style="font-size:24px;margin-top: -10px;">a</i></a>',
            ucwords:
              '<a href="javascript:;" title="ucwords" unselectable="on"><i class="fa" name="ucwords" style="font-size:20px;margin-top: -3px;">Aa</i></a>'
          },
          toolbarIconsClass: {
            undo: "fa-undo",
            redo: "fa-repeat",
            bold: "fa-bold",
            del: "fa-strikethrough",
            italic: "fa-italic",
            quote: "fa-quote-left",
            uppercase: "fa-font",
            h1: b.classPrefix + "bold",
            h2: b.classPrefix + "bold",
            h3: b.classPrefix + "bold",
            h4: b.classPrefix + "bold",
            h5: b.classPrefix + "bold",
            h6: b.classPrefix + "bold",
            "list-ul": "fa-list-ul",
            "list-ol": "fa-list-ol",
            hr: "fa-minus",
            link: "fa-link",
            "reference-link": "fa-anchor",
            image: "fa-picture-o",
            code: "fa-code",
            "preformatted-text": "fa-file-code-o",
            "code-block": "fa-file-code-o",
            table: "fa-table",
            datetime: "fa-clock-o",
            emoji: "fa-smile-o",
            "html-entities": "fa-copyright",
            pagebreak: "fa-newspaper-o",
            "goto-line": "fa-terminal",
            watch: "fa-eye-slash",
            unwatch: "fa-eye",
            preview: "fa-desktop",
            search: "fa-search",
            fullscreen: "fa-arrows-alt",
            clear: "fa-eraser",
            help: "fa-question-circle",
            info: "fa-info-circle"
          },
          toolbarIconTexts: {},
          lang: {
            name: "zh-cn",
            description: "Open source online Markdown editor.",
            tocTitle: "Table of Contents",
            toolbar: {
              undo: "Undo(Ctrl+Z)",
              redo: "Redo(Ctrl+Y)",
              bold: "Bold",
              del: "Strikethrough",
              italic: "Italic",
              quote: "Block quote",
              ucwords: "Words first letter convert to uppercase",
              uppercase: "Selection text convert to uppercase",
              lowercase: "Selection text convert to lowercase",
              h1: "Heading 1",
              h2: "Heading 2",
              h3: "Heading 3",
              h4: "Heading 4",
              h5: "Heading 5",
              h6: "Heading 6",
              "list-ul": "Unordered list",
              "list-ol": "Ordered list",
              hr: "Horizontal rule",
              link: "Link",
              "reference-link": "Reference link",
              image: "Image",
              code: "Code inline",
              "preformatted-text":
                "Preformatted text / Code block (Tab indent)",
              "code-block": "Code block (Multi-languages)",
              table: "Tables",
              datetime: "Datetime",
              emoji: "Emoji",
              "html-entities": "HTML Entities",
              pagebreak: "Page break",
              watch: "Unwatch",
              unwatch: "Watch",
              preview: "HTML Preview (Press Shift + ESC exit)",
              fullscreen: "Fullscreen (Press ESC exit)",
              clear: "Clear",
              search: "Search",
              help: "Help",
              info: "About " + b.title
            },
            buttons: {
              enter: "Enter",
              cancel: "Cancel",
              close: "Close"
            },
            dialog: {
              link: {
                title: "Link",
                url: "Address",
                urlTitle: "Title",
                urlEmpty: "Error: Please fill in the link address."
              },
              referenceLink: {
                title: "Reference link",
                name: "Name",
                url: "Address",
                urlId: "ID",
                urlTitle: "Title",
                nameEmpty: "Error: Reference name can't be empty.",
                idEmpty: "Error: Please fill in reference link id.",
                urlEmpty: "Error: Please fill in reference link url address."
              },
              image: {
                title: "Image",
                url: "Address",
                link: "Link",
                alt: "Title",
                uploadButton: "Upload",
                imageURLEmpty: "Error: picture url address can't be empty.",
                uploadFileEmpty: "Error: upload pictures cannot be empty!",
                formatNotAllowed:
                  "Error: only allows to upload pictures file, upload allowed image file format:"
              },
              preformattedText: {
                title: "Preformatted text / Codes",
                emptyAlert:
                  "Error: Please fill in the Preformatted text or content of the codes.",
                placeholder: "coding now...."
              },
              codeBlock: {
                title: "Code block",
                selectLabel: "Languages: ",
                selectDefaultText: "select a code language...",
                otherLanguage: "Other languages",
                unselectedLanguageAlert:
                  "Error: Please select the code language.",
                codeEmptyAlert: "Error: Please fill in the code content.",
                placeholder: "coding now...."
              },
              htmlEntities: {
                title: "HTML Entities"
              },
              help: {
                title: "Help"
              }
            }
          }
        }),
        (b.classNames = {
          tex: b.classPrefix + "tex"
        }),
        (b.dialogZindex = 99999),
        (b.$katex = null),
        (b.$marked = null),
        (b.$CodeMirror = null),
        (b.$prettyPrint = null),
        (b.prototype = b.fn = {
          state: {
            watching: !1,
            loaded: !1,
            preview: !1,
            fullscreen: !1
          },
          init: function(c, d) {
            var f, g, h, i, j, k;
            return (
              (d = d || {}),
              "object" == typeof c && (d = c),
              (f = this.classPrefix = b.classPrefix),
              (g = this.settings = a.extend(!0, {}, b.defaults, d)),
              (c = "object" == typeof c ? g.id : c),
              (h = this.editor = a("#" + c)),
              (this.id = c),
              (this.lang = g.lang),
              (i = this.classNames = {
                textarea: {
                  html: f + "html-textarea",
                  markdown: f + "markdown-textarea"
                }
              }),
              (g.pluginPath =
                "" === g.pluginPath ? g.path + "../plugins/" : g.pluginPath),
              (this.state.watching = g.watch ? !0 : !1),
              h.hasClass("editormd") || h.addClass("editormd"),
              h.css({
                width: "number" == typeof g.width ? g.width + "px" : g.width,
                height: "number" == typeof g.height ? g.height + "px" : g.height
              }),
              g.autoHeight && h.css("height", "auto"),
              (j = this.markdownTextarea = h.children("textarea")),
              j.length < 1 &&
                (h.append("<textarea></textarea>"),
                (j = this.markdownTextarea = h.children("textarea"))),
              j
                .addClass(i.textarea.markdown)
                .attr("placeholder", g.placeholder),
              ("undefined" == typeof j.attr("name") || "" === j.attr("name")) &&
                j.attr("name", "" !== g.name ? g.name : c + "-markdown-doc"),
              (k = [
                g.readOnly
                  ? ""
                  : '<a href="javascript:;" class="fa fa-close ' +
                    f +
                    'preview-close-btn"></a>',
                g.saveHTMLToTextarea
                  ? '<textarea class="' +
                    i.textarea.html +
                    '" name="' +
                    c +
                    '-html-code"></textarea>'
                  : "",
                '<div class="' +
                  f +
                  'preview"><div class="markdown-body ' +
                  f +
                  'preview-container"></div></div>',
                '<div class="' +
                  f +
                  'container-mask" style="display:block;"></div>',
                '<div class="' + f + 'mask"></div>'
              ].join("\n")),
              h.append(k).addClass(f + "vertical"),
              "" !== g.theme && h.addClass(f + "theme-" + g.theme),
              (this.mask = h.children("." + f + "mask")),
              (this.containerMask = h.children("." + f + "container-mask")),
              "" !== g.markdown && j.val(g.markdown),
              "" !== g.appendMarkdown && j.val(j.val() + g.appendMarkdown),
              (this.htmlTextarea = h.children("." + i.textarea.html)),
              (this.preview = h.children("." + f + "preview")),
              (this.previewContainer = this.preview.children(
                "." + f + "preview-container"
              )),
              "" !== g.previewTheme &&
                this.preview.addClass(f + "preview-theme-" + g.previewTheme),
              "function" == typeof define &&
                define.amd &&
                ("undefined" != typeof katex && (b.$katex = katex),
                g.searchReplace &&
                  !g.readOnly &&
                  (b.loadCSS(g.path + "codemirror/addon/dialog/dialog"),
                  b.loadCSS(
                    g.path + "codemirror/addon/search/matchesonscrollbar"
                  ))),
              ("function" == typeof define && define.amd) || !g.autoLoadModules
                ? ("undefined" != typeof CodeMirror &&
                    (b.$CodeMirror = CodeMirror),
                  "undefined" != typeof marked && (b.$marked = marked),
                  this.setCodeMirror()
                    .setToolbar()
                    .loadedDisplay())
                : this.loadQueues(),
              this
            );
          },
          loadQueues: function() {
            var a = this,
              c = this.settings,
              d = c.path,
              e = function() {
                return b.isIE8
                  ? (a.loadedDisplay(), void 0)
                  : (c.flowChart || c.sequenceDiagram
                      ? b.loadScript(d + "raphael.min", function() {
                          b.loadScript(d + "underscore.min", function() {
                            !c.flowChart && c.sequenceDiagram
                              ? b.loadScript(
                                  d + "sequence-diagram.min",
                                  function() {
                                    a.loadedDisplay();
                                  }
                                )
                              : c.flowChart && !c.sequenceDiagram
                              ? b.loadScript(d + "flowchart.min", function() {
                                  b.loadScript(
                                    d + "jquery.flowchart.min",
                                    function() {
                                      a.loadedDisplay();
                                    }
                                  );
                                })
                              : c.flowChart &&
                                c.sequenceDiagram &&
                                b.loadScript(d + "flowchart.min", function() {
                                  b.loadScript(
                                    d + "jquery.flowchart.min",
                                    function() {
                                      b.loadScript(
                                        d + "sequence-diagram.min",
                                        function() {
                                          a.loadedDisplay();
                                        }
                                      );
                                    }
                                  );
                                });
                          });
                        })
                      : a.loadedDisplay(),
                    void 0);
              };
            return (
              b.loadCSS(d + "codemirror/codemirror.min"),
              c.searchReplace &&
                !c.readOnly &&
                (b.loadCSS(d + "codemirror/addon/dialog/dialog"),
                b.loadCSS(d + "codemirror/addon/search/matchesonscrollbar")),
              c.codeFold && b.loadCSS(d + "codemirror/addon/fold/foldgutter"),
              b.loadScript(d + "codemirror/codemirror.min", function() {
                (b.$CodeMirror = CodeMirror),
                  b.loadScript(d + "codemirror/modes.min", function() {
                    b.loadScript(d + "codemirror/addons.min", function() {
                      return (
                        a.setCodeMirror(),
                        "gfm" !== c.mode && "markdown" !== c.mode
                          ? (a.loadedDisplay(), !1)
                          : (a.setToolbar(),
                            b.loadScript(d + "marked.min", function() {
                              (b.$marked = marked),
                                c.previewCodeHighlight
                                  ? b.loadScript(
                                      d + "prettify.min",
                                      function() {
                                        e();
                                      }
                                    )
                                  : e();
                            }),
                            void 0)
                      );
                    });
                  });
              }),
              this
            );
          },
          setTheme: function(a) {
            var b = this.editor,
              c = this.settings.theme,
              d = this.classPrefix + "theme-";
            return (
              b.removeClass(d + c).addClass(d + a),
              (this.settings.theme = a),
              this
            );
          },
          setEditorTheme: function(a) {
            var c = this.settings;
            return (
              (c.editorTheme = a),
              "default" !== a &&
                b.loadCSS(c.path + "codemirror/theme/" + c.editorTheme),
              this.cm.setOption("theme", a),
              this
            );
          },
          setCodeMirrorTheme: function(a) {
            return this.setEditorTheme(a), this;
          },
          setPreviewTheme: function(a) {
            var b = this.preview,
              c = this.settings.previewTheme,
              d = this.classPrefix + "preview-theme-";
            return (
              b.removeClass(d + c).addClass(d + a),
              (this.settings.previewTheme = a),
              this
            );
          },
          setCodeMirror: function() {
            var d,
              a = this.settings,
              c = this.editor;
            return (
              "default" !== a.editorTheme &&
                b.loadCSS(a.path + "codemirror/theme/" + a.editorTheme),
              (d = {
                mode: a.mode,
                theme: a.editorTheme,
                tabSize: a.tabSize,
                dragDrop: !1,
                autofocus: a.autoFocus,
                autoCloseTags: a.autoCloseTags,
                readOnly: a.readOnly ? "nocursor" : !1,
                indentUnit: a.indentUnit,
                lineNumbers: a.lineNumbers,
                lineWrapping: a.lineWrapping,
                extraKeys: {
                  "Ctrl-Q": function(a) {
                    a.foldCode(a.getCursor());
                  }
                },
                foldGutter: a.codeFold,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                matchBrackets: a.matchBrackets,
                indentWithTabs: a.indentWithTabs,
                styleActiveLine: a.styleActiveLine,
                styleSelectedText: a.styleSelectedText,
                autoCloseBrackets: a.autoCloseBrackets,
                showTrailingSpace: a.showTrailingSpace,
                highlightSelectionMatches: a.matchWordHighlight
                  ? {
                      showToken:
                        "onselected" === a.matchWordHighlight ? !1 : /\w/
                    }
                  : !1
              }),
              (this.codeEditor = this.cm = b.$CodeMirror.fromTextArea(
                this.markdownTextarea[0],
                d
              )),
              (this.codeMirror = this.cmElement = c.children(".CodeMirror")),
              "" !== a.value && this.cm.setValue(a.value),
              this.codeMirror.css({
                fontSize: a.fontSize,
                width: a.watch ? "50%" : "100%"
              }),
              a.autoHeight &&
                (this.codeMirror.css("height", "auto"),
                this.cm.setOption("viewportMargin", 1 / 0)),
              a.lineNumbers ||
                this.codeMirror
                  .find(".CodeMirror-gutters")
                  .css("border-right", "none"),
              this
            );
          },
          getCodeMirrorOption: function(a) {
            return this.cm.getOption(a);
          },
          setCodeMirrorOption: function(a, b) {
            return this.cm.setOption(a, b), this;
          },
          addKeyMap: function(a, b) {
            return this.cm.addKeyMap(a, b), this;
          },
          removeKeyMap: function(a) {
            return this.cm.removeKeyMap(a), this;
          },
          gotoLine: function(b) {
            var d,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              c = this.settings;
            return c.gotoLine
              ? ((d = this.cm),
                this.editor,
                (f = d.lineCount()),
                (g = this.preview),
                "string" == typeof b &&
                  ("last" === b && (b = f), "first" === b && (b = 1)),
                "number" != typeof b
                  ? (alert("Error: The line number must be an integer."), this)
                  : ((b = parseInt(b) - 1),
                    b > f
                      ? (alert("Error: The line number range 1-" + f), this)
                      : (d.setCursor({
                          line: b,
                          ch: 0
                        }),
                        (h = d.getScrollInfo()),
                        (i = h.clientHeight),
                        (j = d.charCoords(
                          {
                            line: b,
                            ch: 0
                          },
                          "local"
                        )),
                        d.scrollTo(null, (j.top + j.bottom - i) / 2),
                        c.watch &&
                          ((k = this.codeMirror.find(".CodeMirror-scroll")[0]),
                          (l = a(k).height()),
                          (m = k.scrollTop),
                          (n = m / k.scrollHeight),
                          0 === m
                            ? g.scrollTop(0)
                            : m + l >= k.scrollHeight - 16
                            ? g.scrollTop(g[0].scrollHeight)
                            : g.scrollTop(g[0].scrollHeight * n)),
                        d.focus(),
                        this)))
              : this;
          },
          extend: function() {
            return (
              "undefined" != typeof arguments[1] &&
                ("function" == typeof arguments[1] &&
                  (arguments[1] = a.proxy(arguments[1], this)),
                (this[arguments[0]] = arguments[1])),
              "object" == typeof arguments[0] &&
                "undefined" == typeof arguments[0].length &&
                a.extend(!0, this, arguments[0]),
              this
            );
          },
          set: function(b, c) {
            return (
              "undefined" != typeof c &&
                "function" == typeof c &&
                (c = a.proxy(c, this)),
              (this[b] = c),
              this
            );
          },
          config: function(b, c) {
            var d = this.settings;
            return (
              "object" == typeof b && (d = a.extend(!0, d, b)),
              "string" == typeof b && (d[b] = c),
              (this.settings = d),
              this.recreate(),
              this
            );
          },
          on: function(b, c) {
            var d = this.settings;
            return (
              "undefined" != typeof d["on" + b] &&
                (d["on" + b] = a.proxy(c, this)),
              this
            );
          },
          off: function(a) {
            var b = this.settings;
            return (
              "undefined" != typeof b["on" + a] &&
                (b["on" + a] = function() {}),
              this
            );
          },
          showToolbar: function(b) {
            var c = this.settings;
            return c.readOnly
              ? this
              : (c.toolbar &&
                  (this.toolbar.length < 1 ||
                    "" ===
                      this.toolbar
                        .find("." + this.classPrefix + "menu")
                        .html()) &&
                  this.setToolbar(),
                (c.toolbar = !0),
                this.toolbar.show(),
                this.resize(),
                a.proxy(b || function() {}, this)(),
                this);
          },
          hideToolbar: function(b) {
            var c = this.settings;
            return (
              (c.toolbar = !1),
              this.toolbar.hide(),
              this.resize(),
              a.proxy(b || function() {}, this)(),
              this
            );
          },
          setToolbarAutoFixed: function(b) {
            var g,
              c = this.state,
              d = this.editor,
              e = this.toolbar,
              f = this.settings;
            return (
              "undefined" != typeof b && (f.toolbarAutoFixed = b),
              (g = function() {
                var b = a(window),
                  c = b.scrollTop();
                return f.toolbarAutoFixed
                  ? (c - d.offset().top > 10 && c < d.height()
                      ? e.css({
                          position: "fixed",
                          width: d.width() + "px",
                          left: (b.width() - d.width()) / 2 + "px"
                        })
                      : e.css({
                          position: "absolute",
                          width: "100%",
                          left: 0
                        }),
                    void 0)
                  : !1;
              }),
              !c.fullscreen &&
                !c.preview &&
                f.toolbar &&
                f.toolbarAutoFixed &&
                a(window).bind("scroll", g),
              this
            );
          },
          setToolbar: function() {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              a = this.settings;
            if (a.readOnly) return this;
            if (
              ((c = this.editor),
              this.preview,
              (e = this.classPrefix),
              (f = this.toolbar = c.children("." + e + "toolbar")),
              a.toolbar &&
                f.length < 1 &&
                ((g =
                  '<div class="' +
                  e +
                  'toolbar"><div class="' +
                  e +
                  'toolbar-container"><ul class="' +
                  e +
                  'menu"></ul></div></div>'),
                c.append(g),
                (f = this.toolbar = c.children("." + e + "toolbar"))),
              !a.toolbar)
            )
              return f.hide(), this;
            for (
              f.show(),
                h =
                  "function" == typeof a.toolbarIcons
                    ? a.toolbarIcons()
                    : "string" == typeof a.toolbarIcons
                    ? b.toolbarModes[a.toolbarIcons]
                    : a.toolbarIcons,
                i = f.find("." + this.classPrefix + "menu"),
                j = "",
                k = !1,
                l = 0,
                m = h.length;
              m > l;
              l++
            )
              (n = h[l]),
                "||" === n
                  ? (k = !0)
                  : "|" === n
                  ? (j += '<li class="divider" unselectable="on">|</li>')
                  : ((o = /h(\d)/.test(n)),
                    (p = n),
                    "watch" !== n || a.watch || (p = "unwatch"),
                    (q = a.lang.toolbar[p]),
                    (r = a.toolbarIconTexts[p]),
                    (s = a.toolbarIconsClass[p]),
                    (q = "undefined" == typeof q ? "" : q),
                    (r = "undefined" == typeof r ? "" : r),
                    (s = "undefined" == typeof s ? "" : s),
                    (t = k ? '<li class="pull-right">' : "<li>"),
                    "undefined" != typeof a.toolbarCustomIcons[n] &&
                    "function" != typeof a.toolbarCustomIcons[n]
                      ? (t += a.toolbarCustomIcons[n])
                      : ((t +=
                          '<a href="javascript:;" title="' +
                          q +
                          '" unselectable="on">'),
                        (t +=
                          '<i class="fa ' +
                          s +
                          '" name="' +
                          n +
                          '" unselectable="on">' +
                          (o ? n.toUpperCase() : "" === s ? r : "") +
                          "</i>"),
                        (t += "</a>")),
                    (t += "</li>"),
                    (j = k ? t + j : j + t));
            return (
              i.html(j),
              i
                .find('[title="Lowercase"]')
                .attr("title", a.lang.toolbar.lowercase),
              i.find('[title="ucwords"]').attr("title", a.lang.toolbar.ucwords),
              this.setToolbarHandler(),
              this.setToolbarAutoFixed(),
              this
            );
          },
          dialogLockScreen: function() {
            return a.proxy(b.dialogLockScreen, this)(), this;
          },
          dialogShowMask: function(c) {
            return a.proxy(b.dialogShowMask, this)(c), this;
          },
          getToolbarHandles: function(a) {
            var c = (this.toolbarHandlers = b.toolbarHandlers);
            return a && "undefined" != typeof toolbarIconHandlers[a] ? c[a] : c;
          },
          setToolbarHandler: function() {
            var e,
              f,
              g,
              h,
              i,
              c = this,
              d = this.settings;
            return !d.toolbar || d.readOnly
              ? this
              : ((e = this.toolbar),
                (f = this.cm),
                (g = this.classPrefix),
                (h = this.toolbarIcons = e.find("." + g + "menu > li > a")),
                (i = this.getToolbarHandles()),
                h.bind(b.mouseOrTouch("click", "touchend"), function() {
                  var e = a(this).children(".fa"),
                    g = e.attr("name"),
                    h = f.getCursor(),
                    j = f.getSelection();
                  if ("" !== g)
                    return (
                      (c.activeIcon = e),
                      "undefined" != typeof i[g]
                        ? a.proxy(i[g], c)(f)
                        : "undefined" != typeof d.toolbarHandlers[g] &&
                          a.proxy(d.toolbarHandlers[g], c)(f, e, h, j),
                      "link" !== g &&
                        "reference-link" !== g &&
                        "image" !== g &&
                        "code-block" !== g &&
                        "preformatted-text" !== g &&
                        "watch" !== g &&
                        "preview" !== g &&
                        "search" !== g &&
                        "fullscreen" !== g &&
                        "info" !== g &&
                        f.focus(),
                      !1
                    );
                }),
                this);
          },
          createDialog: function(c) {
            return a.proxy(b.createDialog, this)(c);
          },
          createInfoDialog: function() {
            var f,
              a = this,
              c = this.editor,
              d = this.classPrefix,
              e = [
                '<div class="' + d + "dialog " + d + 'dialog-info" style="">',
                '<div class="' + d + 'dialog-container">',
                '<h1><i class="editormd-logo editormd-logo-lg editormd-logo-color"></i> ' +
                  b.title +
                  "<small>v" +
                  b.version +
                  "</small></h1>",
                "<p>" + this.lang.description + "</p>",
                '<p style="margin: 10px 0 20px 0;"><a href="' +
                  b.homePage +
                  '" target="_blank">' +
                  b.homePage +
                  ' <i class="fa fa-external-link"></i></a></p>',
                '<p style="font-size: 0.85em;">Copyright &copy; 2015 <a href="https://github.com/pandao" target="_blank" class="hover-link">Pandao</a>, The <a href="https://github.com/pandao/editor.md/blob/master/LICENSE" target="_blank" class="hover-link">MIT</a> License.</p>',
                "</div>",
                '<a href="javascript:;" class="fa fa-close ' +
                  d +
                  'dialog-close"></a>',
                "</div>"
              ].join("\n");
            return (
              c.append(e),
              (f = this.infoDialog = c.children("." + d + "dialog-info")),
              f
                .find("." + d + "dialog-close")
                .bind(b.mouseOrTouch("click", "touchend"), function() {
                  a.hideInfoDialog();
                }),
              f
                .css("border", b.isIE8 ? "1px solid #ddd" : "")
                .css("z-index", b.dialogZindex)
                .show(),
              this.infoDialogPosition(),
              this
            );
          },
          infoDialogPosition: function() {
            var b = this.infoDialog,
              c = function() {
                b.css({
                  top: (a(window).height() - b.height()) / 2 + "px",
                  left: (a(window).width() - b.width()) / 2 + "px"
                });
              };
            return c(), a(window).resize(c), this;
          },
          showInfoDialog: function() {
            var d, e, f;
            return (
              a("html,body").css("overflow-x", "hidden"),
              (d = this.editor),
              (e = this.settings),
              (f = this.infoDialog = d.children(
                "." + this.classPrefix + "dialog-info"
              )),
              f.length < 1 && this.createInfoDialog(),
              this.lockScreen(!0),
              this.mask
                .css({
                  opacity: e.dialogMaskOpacity,
                  backgroundColor: e.dialogMaskBgColor
                })
                .show(),
              f.css("z-index", b.dialogZindex).show(),
              this.infoDialogPosition(),
              this
            );
          },
          hideInfoDialog: function() {
            return (
              a("html,body").css("overflow-x", ""),
              this.infoDialog.hide(),
              this.mask.hide(),
              this.lockScreen(!1),
              this
            );
          },
          lockScreen: function(a) {
            return b.lockScreen(a), this.resize(), this;
          },
          recreate: function() {
            var b = this.editor,
              c = this.settings;
            return (
              this.codeMirror.remove(),
              this.setCodeMirror(),
              c.readOnly ||
                (b.find(".editormd-dialog").length > 0 &&
                  b.find(".editormd-dialog").remove(),
                c.toolbar && (this.getToolbarHandles(), this.setToolbar())),
              this.loadedDisplay(!0),
              this
            );
          },
          previewCodeHighlight: function() {
            var a = this.settings,
              b = this.previewContainer;
            return (
              a.previewCodeHighlight &&
                (b.find("pre").addClass("prettyprint linenums"),
                "undefined" != typeof prettyPrint && prettyPrint()),
              this
            );
          },
          katexRender: function() {
            return null === c
              ? this
              : (this.previewContainer
                  .find("." + b.classNames.tex)
                  .each(function() {
                    var c = a(this);
                    b.$katex.render(c.text(), c[0]),
                      c.find(".katex").css("font-size", "1.6em");
                  }),
                this);
          },
          flowChartAndSequenceDiagramRender: function() {
            var g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              c = this,
              e = this.settings,
              f = this.previewContainer;
            if (b.isIE8) return this;
            if (e.flowChart) {
              if (null === d) return this;
              f.find(".flowchart").flowChart();
            }
            return (
              e.sequenceDiagram &&
                f.find(".sequence-diagram").sequenceDiagram({
                  theme: "simple"
                }),
              (g = c.preview),
              (h = c.codeMirror),
              (i = h.find(".CodeMirror-scroll")),
              (j = i.height()),
              (k = i.scrollTop()),
              (l = k / i[0].scrollHeight),
              (m = 0),
              g.find(".markdown-toc-list").each(function() {
                m += a(this).height();
              }),
              (n = g.find(".editormd-toc-menu").height()),
              (n = n ? n : 0),
              0 === k
                ? g.scrollTop(0)
                : k + j >= i[0].scrollHeight - 16
                ? g.scrollTop(g[0].scrollHeight)
                : g.scrollTop((g[0].scrollHeight + m + n) * l),
              this
            );
          },
          registerKeyMaps: function(c) {
            var i,
              j,
              k,
              l,
              m,
              n,
              d = this,
              e = this.cm,
              f = this.settings,
              g = b.toolbarHandlers,
              h = f.disabledKeyMaps;
            if ((c = c || null))
              for (i in c)
                a.inArray(i, h) < 0 &&
                  ((j = {}), (j[i] = c[i]), e.addKeyMap(c));
            else {
              for (k in b.keyMaps)
                (l = b.keyMaps[k]),
                  (m = "string" == typeof l ? a.proxy(g[l], d) : a.proxy(l, d)),
                  a.inArray(k, ["F9", "F10", "F11"]) < 0 &&
                    a.inArray(k, h) < 0 &&
                    ((n = {}), (n[k] = m), e.addKeyMap(n));
              a(window).keydown(function(b) {
                var c = {
                  120: "F9",
                  121: "F10",
                  122: "F11"
                };
                if (a.inArray(c[b.keyCode], h) < 0)
                  switch (b.keyCode) {
                    case 120:
                      return a.proxy(g["watch"], d)(), !1;
                    case 121:
                      return a.proxy(g["preview"], d)(), !1;
                    case 122:
                      return a.proxy(g["fullscreen"], d)(), !1;
                  }
              });
            }
            return this;
          },
          bindScrollEvent: function() {
            var h,
              i,
              j,
              k,
              c = this,
              d = this.preview,
              e = this.settings,
              f = this.codeMirror,
              g = b.mouseOrTouch;
            return e.syncScrolling
              ? ((h = function() {
                  f.find(".CodeMirror-scroll").bind(
                    g("scroll", "touchmove"),
                    function(b) {
                      var j,
                        f = a(this).height(),
                        g = a(this).scrollTop(),
                        h = g / a(this)[0].scrollHeight,
                        i = 0;
                      d.find(".markdown-toc-list").each(function() {
                        i += a(this).height();
                      }),
                        (j = d.find(".editormd-toc-menu").height()),
                        (j = j ? j : 0),
                        0 === g
                          ? d.scrollTop(0)
                          : g + f >= a(this)[0].scrollHeight - 16
                          ? d.scrollTop(d[0].scrollHeight)
                          : d.scrollTop((d[0].scrollHeight + i + j) * h),
                        a.proxy(e.onscroll, c)(b);
                    }
                  );
                }),
                (i = function() {
                  f.find(".CodeMirror-scroll").unbind(g("scroll", "touchmove"));
                }),
                (j = function() {
                  d.bind(g("scroll", "touchmove"), function(b) {
                    var d = a(this).height(),
                      g = a(this).scrollTop(),
                      h = g / a(this)[0].scrollHeight,
                      i = f.find(".CodeMirror-scroll");
                    0 === g
                      ? i.scrollTop(0)
                      : g + d >= a(this)[0].scrollHeight
                      ? i.scrollTop(i[0].scrollHeight)
                      : i.scrollTop(i[0].scrollHeight * h),
                      a.proxy(e.onpreviewscroll, c)(b);
                  });
                }),
                (k = function() {
                  d.unbind(g("scroll", "touchmove"));
                }),
                f.bind({
                  mouseover: h,
                  mouseout: i,
                  touchstart: h,
                  touchend: i
                }),
                "single" === e.syncScrolling
                  ? this
                  : (d.bind({
                      mouseover: j,
                      mouseout: k,
                      touchstart: j,
                      touchend: k
                    }),
                    this))
              : this;
          },
          bindChangeEvent: function() {
            var a = this,
              b = this.cm,
              d = this.settings;
            return d.syncScrolling
              ? (b.on("change", function() {
                  d.watch &&
                    a.previewContainer.css(
                      "padding",
                      d.autoHeight ? "20px 20px 50px 40px" : "20px"
                    ),
                    (c = setTimeout(function() {
                      clearTimeout(c), a.save(), (c = null);
                    }, d.delay));
                }),
                this)
              : this;
          },
          loadedDisplay: function(b) {
            var c, d, e, f;
            return (
              (b = b || !1),
              (c = this),
              (d = this.editor),
              (e = this.preview),
              (f = this.settings),
              this.containerMask.hide(),
              this.save(),
              f.watch && e.show(),
              d.data("oldWidth", d.width()).data("oldHeight", d.height()),
              this.resize(),
              this.registerKeyMaps(),
              a(window).resize(function() {
                c.resize();
              }),
              this.bindScrollEvent().bindChangeEvent(),
              b || a.proxy(f.onload, this)(),
              (this.state.loaded = !0),
              this
            );
          },
          width: function(a) {
            return (
              this.editor.css("width", "number" == typeof a ? a + "px" : a),
              this.resize(),
              this
            );
          },
          height: function(a) {
            return (
              this.editor.css("height", "number" == typeof a ? a + "px" : a),
              this.resize(),
              this
            );
          },
          resize: function(b, c) {
            var d, e, f, g, h, i, j;
            return (
              (b = b || null),
              (c = c || null),
              (d = this.state),
              (e = this.editor),
              (f = this.preview),
              (g = this.toolbar),
              (h = this.settings),
              (i = this.codeMirror),
              b && e.css("width", "number" == typeof b ? b + "px" : b),
              !h.autoHeight || d.fullscreen || d.preview
                ? (c && e.css("height", "number" == typeof c ? c + "px" : c),
                  d.fullscreen && e.height(a(window).height()),
                  h.toolbar && !h.readOnly
                    ? i
                        .css("margin-top", g.height() + 1)
                        .height(e.height() - g.height())
                    : i.css("margin-top", 0).height(e.height()))
                : (e.css("height", "auto"), i.css("height", "auto")),
              h.watch
                ? (i.width(e.width() / 2),
                  f.width(d.preview ? e.width() : e.width() / 2),
                  this.previewContainer.css(
                    "padding",
                    h.autoHeight ? "20px 20px 50px 40px" : "20px"
                  ),
                  h.toolbar && !h.readOnly
                    ? f.css("top", g.height() + 1)
                    : f.css("top", 0),
                  !h.autoHeight || d.fullscreen || d.preview
                    ? ((j =
                        h.toolbar && !h.readOnly
                          ? e.height() - g.height()
                          : e.height()),
                      f.height(j))
                    : f.height(""))
                : (i.width(e.width()), f.hide()),
              d.loaded && a.proxy(h.onresize, this)(),
              this
            );
          },
          save: function() {
            var h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              e = this,
              f = this.state,
              g = this.settings;
            return null !== c || (!g.watch && f.preview)
              ? ((h = this.cm),
                (i = h.getValue()),
                (j = this.previewContainer),
                "gfm" !== g.mode && "markdown" !== g.mode
                  ? (this.markdownTextarea.val(i), this)
                  : ((k = b.$marked),
                    (l = this.markdownToC = []),
                    (m = this.markedRendererOptions = {
                      toc: g.toc,
                      tocm: g.tocm,
                      tocStartLevel: g.tocStartLevel,
                      pageBreak: g.pageBreak,
                      taskList: g.taskList,
                      emoji: g.emoji,
                      tex: g.tex,
                      atLink: g.atLink,
                      emailLink: g.emailLink,
                      flowChart: g.flowChart,
                      sequenceDiagram: g.sequenceDiagram,
                      previewCodeHighlight: g.previewCodeHighlight
                    }),
                    (n = this.markedOptions = {
                      renderer: b.markedRenderer(l, m),
                      gfm: !0,
                      tables: !0,
                      breaks: !0,
                      pedantic: !1,
                      sanitize: g.htmlDecode ? !1 : !0,
                      smartLists: !0,
                      smartypants: !0
                    }),
                    k.setOptions(n),
                    (o = b.$marked(i, n)),
                    (o = b.filterHTMLTags(o, g.htmlDecode)),
                    this.markdownTextarea.text(i),
                    h.save(),
                    g.saveHTMLToTextarea && this.htmlTextarea.text(o),
                    (g.watch || (!g.watch && f.preview)) &&
                      (j.html(o),
                      this.previewCodeHighlight(),
                      g.toc &&
                        ((p = "" === g.tocContainer ? j : a(g.tocContainer)),
                        (q = p.find("." + this.classPrefix + "toc-menu")),
                        p.attr(
                          "previewContainer",
                          "" === g.tocContainer ? "true" : "false"
                        ),
                        "" !== g.tocContainer && q.length > 0 && q.remove(),
                        b.markdownToCRenderer(
                          l,
                          p,
                          g.tocDropdown,
                          g.tocStartLevel
                        ),
                        (g.tocDropdown ||
                          p.find("." + this.classPrefix + "toc-menu").length >
                            0) &&
                          b.tocDropdownMenu(
                            p,
                            "" !== g.tocTitle ? g.tocTitle : this.lang.tocTitle
                          ),
                        "" !== g.tocContainer &&
                          j.find(".markdown-toc").css("border", "none")),
                      g.tex &&
                        (!b.kaTeXLoaded && g.autoLoadModules
                          ? b.loadKaTeX(function() {
                              (b.$katex = katex),
                                (b.kaTeXLoaded = !0),
                                e.katexRender();
                            })
                          : ((b.$katex = katex), this.katexRender())),
                      (g.flowChart || g.sequenceDiagram) &&
                        (d = setTimeout(function() {
                          clearTimeout(d),
                            e.flowChartAndSequenceDiagramRender(),
                            (d = null);
                        }, 10)),
                      f.loaded && a.proxy(g.onchange, this)()),
                    this))
              : this;
          },
          focus: function() {
            return this.cm.focus(), this;
          },
          setCursor: function(a) {
            return this.cm.setCursor(a), this;
          },
          getCursor: function() {
            return this.cm.getCursor();
          },
          setSelection: function(a, b) {
            return this.cm.setSelection(a, b), this;
          },
          getSelection: function() {
            return this.cm.getSelection();
          },
          setSelections: function(a) {
            return this.cm.setSelections(a), this;
          },
          getSelections: function() {
            return this.cm.getSelections();
          },
          replaceSelection: function(a) {
            return this.cm.replaceSelection(a), this;
          },
          insertValue: function(a) {
            return this.replaceSelection(a), this;
          },
          appendMarkdown: function(a) {
            this.settings;
            var c = this.cm;
            return c.setValue(c.getValue() + a), this;
          },
          setMarkdown: function(a) {
            return this.cm.setValue(a || this.settings.markdown), this;
          },
          getMarkdown: function() {
            return this.cm.getValue();
          },
          getValue: function() {
            return this.cm.getValue();
          },
          setValue: function(a) {
            return this.cm.setValue(a), this;
          },
          clear: function() {
            return this.cm.setValue(""), this;
          },
          getHTML: function() {
            return this.settings.saveHTMLToTextarea
              ? this.htmlTextarea.val()
              : (alert("Error: settings.saveHTMLToTextarea == false"), !1);
          },
          getTextareaSavedHTML: function() {
            return this.getHTML();
          },
          getPreviewedHTML: function() {
            return this.settings.watch
              ? this.previewContainer.html()
              : (alert("Error: settings.watch == false"), !1);
          },
          watch: function(b) {
            var e,
              f,
              g,
              d = this.settings;
            return a.inArray(d.mode, ["gfm", "markdown"]) < 0
              ? this
              : ((this.state.watching = d.watch = !0),
                this.preview.show(),
                this.toolbar &&
                  ((e = d.toolbarIconsClass.watch),
                  (f = d.toolbarIconsClass.unwatch),
                  (g = this.toolbar.find(".fa[name=watch]")),
                  g.parent().attr("title", d.lang.toolbar.watch),
                  g.removeClass(f).addClass(e)),
                this.codeMirror
                  .css("border-right", "1px solid #ddd")
                  .width(this.editor.width() / 2),
                (c = 0),
                this.save().resize(),
                d.onwatch || (d.onwatch = b || function() {}),
                a.proxy(d.onwatch, this)(),
                this);
          },
          unwatch: function(b) {
            var d,
              e,
              f,
              c = this.settings;
            return (
              (this.state.watching = c.watch = !1),
              this.preview.hide(),
              this.toolbar &&
                ((d = c.toolbarIconsClass.watch),
                (e = c.toolbarIconsClass.unwatch),
                (f = this.toolbar.find(".fa[name=watch]")),
                f.parent().attr("title", c.lang.toolbar.unwatch),
                f.removeClass(d).addClass(e)),
              this.codeMirror
                .css("border-right", "none")
                .width(this.editor.width()),
              this.resize(),
              c.onunwatch || (c.onunwatch = b || function() {}),
              a.proxy(c.onunwatch, this)(),
              this
            );
          },
          show: function(b) {
            b = b || function() {};
            var c = this;
            return (
              this.editor.show(0, function() {
                a.proxy(b, c)();
              }),
              this
            );
          },
          hide: function(b) {
            b = b || function() {};
            var c = this;
            return (
              this.editor.hide(0, function() {
                a.proxy(b, c)();
              }),
              this
            );
          },
          previewing: function() {
            var j,
              c = this,
              d = this.editor,
              e = this.preview,
              f = this.toolbar,
              g = this.settings,
              h = this.codeMirror,
              i = this.previewContainer;
            return a.inArray(g.mode, ["gfm", "markdown"]) < 0
              ? this
              : (g.toolbar &&
                  f &&
                  (f.toggle(),
                  f.find(".fa[name=preview]").toggleClass("active")),
                h.toggle(),
                (j = function(a) {
                  a.shiftKey && 27 === a.keyCode && c.previewed();
                }),
                "none" === h.css("display")
                  ? ((this.state.preview = !0),
                    this.state.fullscreen && e.css("background", "#fff"),
                    d
                      .find("." + this.classPrefix + "preview-close-btn")
                      .show()
                      .bind(b.mouseOrTouch("click", "touchend"), function() {
                        c.previewed();
                      }),
                    g.watch ? i.css("padding", "") : this.save(),
                    i.addClass(this.classPrefix + "preview-active"),
                    e.show().css({
                      position: "",
                      top: 0,
                      width: d.width(),
                      height:
                        g.autoHeight && !this.state.fullscreen
                          ? "auto"
                          : d.height()
                    }),
                    this.state.loaded && a.proxy(g.onpreviewing, this)(),
                    a(window).bind("keyup", j))
                  : (a(window).unbind("keyup", j), this.previewed()),
                void 0);
          },
          previewed: function() {
            var c = this.editor,
              d = this.preview,
              e = this.toolbar,
              f = this.settings,
              g = this.previewContainer,
              h = c.find("." + this.classPrefix + "preview-close-btn");
            return (
              (this.state.preview = !1),
              this.codeMirror.show(),
              f.toolbar && e.show(),
              d[f.watch ? "show" : "hide"](),
              h.hide().unbind(b.mouseOrTouch("click", "touchend")),
              g.removeClass(this.classPrefix + "preview-active"),
              f.watch && g.css("padding", "20px"),
              d.css({
                background: null,
                position: "absolute",
                width: c.width() / 2,
                height:
                  f.autoHeight && !this.state.fullscreen
                    ? "auto"
                    : c.height() - e.height(),
                top: f.toolbar ? e.height() : 0
              }),
              this.state.loaded && a.proxy(f.onpreviewed, this)(),
              this
            );
          },
          fullscreen: function() {
            var f,
              g,
              h,
              i,
              b = this,
              c = this.state,
              d = this.editor;
            return (
              this.preview,
              (f = this.toolbar),
              (g = this.settings),
              (h = this.classPrefix + "fullscreen"),
              f &&
                f
                  .find(".fa[name=fullscreen]")
                  .parent()
                  .toggleClass("active"),
              (i = function(a) {
                a.shiftKey ||
                  27 !== a.keyCode ||
                  (c.fullscreen && b.fullscreenExit());
              }),
              d.hasClass(h)
                ? (a(window).unbind("keyup", i), this.fullscreenExit())
                : ((c.fullscreen = !0),
                  a("html,body").css("overflow", "hidden"),
                  d
                    .css({
                      width: a(window).width(),
                      height: a(window).height()
                    })
                    .addClass(h),
                  this.resize(),
                  a.proxy(g.onfullscreen, this)(),
                  a(window).bind("keyup", i)),
              this
            );
          },
          fullscreenExit: function() {
            var b = this.editor,
              c = this.settings,
              d = this.toolbar,
              e = this.classPrefix + "fullscreen";
            return (
              (this.state.fullscreen = !1),
              d &&
                d
                  .find(".fa[name=fullscreen]")
                  .parent()
                  .removeClass("active"),
              a("html,body").css("overflow", ""),
              b
                .css({
                  width: b.data("oldWidth"),
                  height: b.data("oldHeight")
                })
                .removeClass(e),
              this.resize(),
              a.proxy(c.onfullscreenExit, this)(),
              this
            );
          },
          executePlugin: function(c, d) {
            var e = this,
              f = this.cm,
              g = this.settings;
            return (
              (d = g.pluginPath + d),
              "function" == typeof define
                ? "undefined" == typeof this[c]
                  ? (alert(
                      "Error: " +
                        c +
                        " plugin is not found, you are not load this plugin."
                    ),
                    this)
                  : (this[c](f), this)
                : (a.inArray(d, b.loadFiles.plugin) < 0
                    ? b.loadPlugin(d, function() {
                        (b.loadPlugins[c] = e[c]), e[c](f);
                      })
                    : a.proxy(b.loadPlugins[c], this)(f),
                  this)
            );
          },
          search: function(a) {
            var b = this.settings;
            return b.searchReplace
              ? (b.readOnly || this.cm.execCommand(a || "find"), this)
              : (alert("Error: settings.searchReplace == false"), this);
          },
          searchReplace: function() {
            return this.search("replace"), this;
          },
          searchReplaceAll: function() {
            return this.search("replaceAll"), this;
          }
        }),
        (b.fn.init.prototype = b.fn),
        (b.dialogLockScreen = function() {
          var b = this.settings || {
            dialogLockScreen: !0
          };
          b.dialogLockScreen &&
            (a("html,body").css("overflow", "hidden"), this.resize());
        }),
        (b.dialogShowMask = function(b) {
          var c = this.editor,
            d = this.settings || {
              dialogShowMask: !0
            };
          b.css({
            top: (a(window).height() - b.height()) / 2 + "px",
            left: (a(window).width() - b.width()) / 2 + "px"
          }),
            d.dialogShowMask &&
              c
                .children("." + this.classPrefix + "mask")
                .css("z-index", parseInt(b.css("z-index")) - 1)
                .show();
        }),
        (b.toolbarHandlers = {
          undo: function() {
            this.cm.undo();
          },
          redo: function() {
            this.cm.redo();
          },
          bold: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            a.replaceSelection("**" + c + "**"),
              "" === c && a.setCursor(b.line, b.ch + 2);
          },
          del: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            a.replaceSelection("~~" + c + "~~"),
              "" === c && a.setCursor(b.line, b.ch + 2);
          },
          italic: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            a.replaceSelection("*" + c + "*"),
              "" === c && a.setCursor(b.line, b.ch + 1);
          },
          quote: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            0 !== b.ch
              ? (a.setCursor(b.line, 0),
                a.replaceSelection("> " + c),
                a.setCursor(b.line, b.ch + 2))
              : a.replaceSelection("> " + c);
          },
          ucfirst: function() {
            var a = this.cm,
              c = a.getSelection(),
              d = a.listSelections();
            a.replaceSelection(b.firstUpperCase(c)), a.setSelections(d);
          },
          ucwords: function() {
            var a = this.cm,
              c = a.getSelection(),
              d = a.listSelections();
            a.replaceSelection(b.wordsFirstUpperCase(c)), a.setSelections(d);
          },
          uppercase: function() {
            var a = this.cm,
              b = a.getSelection(),
              c = a.listSelections();
            a.replaceSelection(b.toUpperCase()), a.setSelections(c);
          },
          lowercase: function() {
            var c,
              d,
              a = this.cm;
            a.getCursor(),
              (c = a.getSelection()),
              (d = a.listSelections()),
              a.replaceSelection(c.toLowerCase()),
              a.setSelections(d);
          },
          h1: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            0 !== b.ch
              ? (a.setCursor(b.line, 0),
                a.replaceSelection("# " + c),
                a.setCursor(b.line, b.ch + 2))
              : a.replaceSelection("# " + c);
          },
          h2: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            0 !== b.ch
              ? (a.setCursor(b.line, 0),
                a.replaceSelection("## " + c),
                a.setCursor(b.line, b.ch + 3))
              : a.replaceSelection("## " + c);
          },
          h3: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            0 !== b.ch
              ? (a.setCursor(b.line, 0),
                a.replaceSelection("### " + c),
                a.setCursor(b.line, b.ch + 4))
              : a.replaceSelection("### " + c);
          },
          h4: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            0 !== b.ch
              ? (a.setCursor(b.line, 0),
                a.replaceSelection("#### " + c),
                a.setCursor(b.line, b.ch + 5))
              : a.replaceSelection("#### " + c);
          },
          h5: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            0 !== b.ch
              ? (a.setCursor(b.line, 0),
                a.replaceSelection("##### " + c),
                a.setCursor(b.line, b.ch + 6))
              : a.replaceSelection("##### " + c);
          },
          h6: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            0 !== b.ch
              ? (a.setCursor(b.line, 0),
                a.replaceSelection("###### " + c),
                a.setCursor(b.line, b.ch + 7))
              : a.replaceSelection("###### " + c);
          },
          "list-ul": function() {
            var c,
              d,
              e,
              f,
              a = this.cm;
            if ((a.getCursor(), (c = a.getSelection()), "" === c))
              a.replaceSelection("- " + c);
            else {
              for (d = c.split("\n"), e = 0, f = d.length; f > e; e++)
                d[e] = "" === d[e] ? "" : "- " + d[e];
              a.replaceSelection(d.join("\n"));
            }
          },
          "list-ol": function() {
            var c,
              d,
              e,
              f,
              a = this.cm;
            if ((a.getCursor(), (c = a.getSelection()), "" === c))
              a.replaceSelection("1. " + c);
            else {
              for (d = c.split("\n"), e = 0, f = d.length; f > e; e++)
                d[e] = "" === d[e] ? "" : e + 1 + ". " + d[e];
              a.replaceSelection(d.join("\n"));
            }
          },
          hr: function() {
            var a = this.cm,
              b = a.getCursor();
            a.getSelection(),
              a.replaceSelection(
                (0 !== b.ch ? "\n\n" : "\n") + "------------\n\n"
              );
          },
          tex: function() {
            var a, b, c;
            return this.settings.tex
              ? ((a = this.cm),
                (b = a.getCursor()),
                (c = a.getSelection()),
                a.replaceSelection("$$" + c + "$$"),
                "" === c && a.setCursor(b.line, b.ch + 2),
                void 0)
              : (alert("settings.tex === false"), this);
          },
          link: function() {
            this.executePlugin("linkDialog", "link-dialog/link-dialog");
          },
          "reference-link": function() {
            this.executePlugin(
              "referenceLinkDialog",
              "reference-link-dialog/reference-link-dialog"
            );
          },
          pagebreak: function() {
            if (!this.settings.pageBreak)
              return alert("settings.pageBreak === false"), this;
            var a = this.cm;
            a.getSelection(), a.replaceSelection("\r\n[========]\r\n");
          },
          image: function() {
            this.executePlugin("imageDialog", "image-dialog/image-dialog");
          },
          code: function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            a.replaceSelection("`" + c + "`"),
              "" === c && a.setCursor(b.line, b.ch + 1);
          },
          "code-block": function() {
            this.executePlugin(
              "codeBlockDialog",
              "code-block-dialog/code-block-dialog"
            );
          },
          "preformatted-text": function() {
            this.executePlugin(
              "preformattedTextDialog",
              "preformatted-text-dialog/preformatted-text-dialog"
            );
          },
          table: function() {
            this.executePlugin("tableDialog", "table-dialog/table-dialog");
          },
          datetime: function() {
            var e,
              f,
              a = this.cm;
            a.getSelection(),
              new Date(),
              (e = this.settings.lang.name),
              (f =
                b.dateFormat() +
                " " +
                b.dateFormat(
                  "zh-cn" === e || "zh-tw" === e ? "cn-week-day" : "week-day"
                )),
              a.replaceSelection(f);
          },
          emoji: function() {
            this.executePlugin("emojiDialog", "emoji-dialog/emoji-dialog");
          },
          "html-entities": function() {
            this.executePlugin(
              "htmlEntitiesDialog",
              "html-entities-dialog/html-entities-dialog"
            );
          },
          "goto-line": function() {
            this.executePlugin(
              "gotoLineDialog",
              "goto-line-dialog/goto-line-dialog"
            );
          },
          watch: function() {
            this[this.settings.watch ? "unwatch" : "watch"]();
          },
          preview: function() {
            this.previewing();
          },
          fullscreen: function() {
            this.fullscreen();
          },
          clear: function() {
            this.clear();
          },
          search: function() {
            this.search();
          },
          help: function() {
            this.executePlugin("helpDialog", "help-dialog/help-dialog");
          },
          info: function() {
            this.showInfoDialog();
          }
        }),
        (b.keyMaps = {
          "Ctrl-1": "h1",
          "Ctrl-2": "h2",
          "Ctrl-3": "h3",
          "Ctrl-4": "h4",
          "Ctrl-5": "h5",
          "Ctrl-6": "h6",
          "Ctrl-B": "bold",
          "Ctrl-D": "datetime",
          "Ctrl-E": function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            return this.settings.emoji
              ? (a.replaceSelection(":" + c + ":"),
                "" === c && a.setCursor(b.line, b.ch + 1),
                void 0)
              : (alert("Error: settings.emoji == false"), void 0);
          },
          "Ctrl-Alt-G": "goto-line",
          "Ctrl-H": "hr",
          "Ctrl-I": "italic",
          "Ctrl-K": "code",
          "Ctrl-L": function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection(),
              d = "" === c ? "" : ' "' + c + '"';
            a.replaceSelection("[" + c + "](" + d + ")"),
              "" === c && a.setCursor(b.line, b.ch + 1);
          },
          "Ctrl-U": "list-ul",
          "Shift-Ctrl-A": function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            return this.settings.atLink
              ? (a.replaceSelection("@" + c),
                "" === c && a.setCursor(b.line, b.ch + 1),
                void 0)
              : (alert("Error: settings.atLink == false"), void 0);
          },
          "Shift-Ctrl-C": "code",
          "Shift-Ctrl-Q": "quote",
          "Shift-Ctrl-S": "del",
          "Shift-Ctrl-K": "tex",
          "Shift-Alt-C": function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection();
            a.replaceSelection(["```", c, "```"].join("\n")),
              "" === c && a.setCursor(b.line, b.ch + 3);
          },
          "Shift-Ctrl-Alt-C": "code-block",
          "Shift-Ctrl-H": "html-entities",
          "Shift-Alt-H": "help",
          "Shift-Ctrl-E": "emoji",
          "Shift-Ctrl-U": "uppercase",
          "Shift-Alt-U": "ucwords",
          "Shift-Ctrl-Alt-U": "ucfirst",
          "Shift-Alt-L": "lowercase",
          "Shift-Ctrl-I": function() {
            var a = this.cm,
              b = a.getCursor(),
              c = a.getSelection(),
              d = "" === c ? "" : ' "' + c + '"';
            a.replaceSelection("![" + c + "](" + d + ")"),
              "" === c && a.setCursor(b.line, b.ch + 4);
          },
          "Shift-Ctrl-Alt-I": "image",
          "Shift-Ctrl-L": "link",
          "Shift-Ctrl-O": "list-ol",
          "Shift-Ctrl-P": "preformatted-text",
          "Shift-Ctrl-T": "table",
          "Shift-Alt-P": "pagebreak",
          F9: "watch",
          F10: "preview",
          F11: "fullscreen"
        }),
        (e = function(a) {
          return String.prototype.trim
            ? a.trim()
            : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }),
        (b.trim = e),
        (f = function(a) {
          return a.toLowerCase().replace(/\b(\w)|\s(\w)/g, function(a) {
            return a.toUpperCase();
          });
        }),
        (b.ucwords = b.wordsFirstUpperCase = f),
        (g = function(a) {
          return a.toLowerCase().replace(/\b(\w)/, function(a) {
            return a.toUpperCase();
          });
        }),
        (b.firstUpperCase = b.ucfirst = g),
        (b.urls = {
          atLinkBase: "https://github.com/"
        }),
        (b.regexs = {
          atLink: /@(\w+)/g,
          email: /(\w+)@(\w+)\.(\w+)\.?(\w+)?/g,
          emailLink: /(mailto:)?([\w\.\_]+)@(\w+)\.(\w+)\.?(\w+)?/g,
          emoji: /:([\w\+-]+):/g,
          emojiDatetime: /(\d{2}:\d{2}:\d{2})/g,
          twemoji: /:(tw-([\w]+)-?(\w+)?):/g,
          fontAwesome: /:(fa-([\w]+)(-(\w+)){0,}):/g,
          editormdLogo: /:(editormd-logo-?(\w+)?):/g,
          pageBreak: /^\[[=]{8,}\]$/
        }),
        (b.emoji = {
          path:
            "https://www.webpagefx.com/tools/emoji-cheat-sheet/graphics/emojis/",
          ext: ".png"
        }),
        (b.twemoji = {
          path: "http://twemoji.maxcdn.com/36x36/",
          ext: ".png"
        }),
        (b.markedRenderer = function(c, d) {
          var j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            f = {
              toc: !0,
              tocm: !1,
              tocStartLevel: 1,
              pageBreak: !0,
              atLink: !0,
              emailLink: !0,
              taskList: !1,
              emoji: !1,
              tex: !1,
              flowChart: !1,
              sequenceDiagram: !1
            },
            g = a.extend(f, d || {}),
            h = b.$marked,
            i = new h.Renderer();
          return (
            (c = c || []),
            (j = b.regexs),
            (k = j.atLink),
            (l = j.emoji),
            (m = j.email),
            (n = j.emailLink),
            (o = j.twemoji),
            (p = j.fontAwesome),
            (q = j.editormdLogo),
            (r = j.pageBreak),
            (i.emoji = function(a) {
              var c, d, e;
              if (
                ((a = a.replace(b.regexs.emojiDatetime, function(a) {
                  return a.replace(/:/g, "&#58;");
                })),
                (c = a.match(l)),
                !c || !g.emoji)
              )
                return a;
              for (d = 0, e = c.length; e > d; d++)
                ":+1:" === c[d] && (c[d] = ":\\+1:"),
                  (a = a.replace(new RegExp(c[d]), function(a) {
                    var f,
                      g,
                      h,
                      i,
                      j,
                      k,
                      l,
                      m,
                      n,
                      r,
                      s,
                      t,
                      d = a.match(p),
                      e = a.replace(/:/g, "");
                    if (d)
                      for (f = 0, g = d.length; g > f; f++)
                        return (
                          (h = d[f].replace(/:/g, "")),
                          '<i class="fa ' +
                            h +
                            ' fa-emoji" title="' +
                            h.replace("fa-", "") +
                            '"></i>'
                        );
                    else if (((i = a.match(q)), (j = a.match(o)), i))
                      for (k = 0, l = i.length; l > k; k++)
                        return (
                          (m = i[k].replace(/:/g, "")),
                          '<i class="' +
                            m +
                            '" title="Editor.md logo (' +
                            m +
                            ')"></i>'
                        );
                    else {
                      if (!j)
                        return (
                          (t = "+1" === e ? "plus1" : e),
                          (t = "black_large_square" === t ? "black_square" : t),
                          (t = "moon" === t ? "waxing_gibbous_moon" : t),
                          '<img src="' +
                            b.emoji.path +
                            t +
                            b.emoji.ext +
                            '" class="emoji" title="&#58;' +
                            e +
                            '&#58;" alt="&#58;' +
                            e +
                            '&#58;" />'
                        );
                      for (n = 0, r = j.length; r > n; n++)
                        return (
                          (s = j[n].replace(/:/g, "").replace("tw-", "")),
                          '<img src="' +
                            b.twemoji.path +
                            s +
                            b.twemoji.ext +
                            '" title="twemoji-' +
                            s +
                            '" alt="twemoji-' +
                            s +
                            '" class="emoji twemoji" />'
                        );
                    }
                  }));
              return a;
            }),
            (i.atLink = function(c) {
              return k.test(c)
                ? (g.atLink &&
                    ((c = c.replace(m, function(a) {
                      return a.replace(/@/g, "_#_&#64;_#_");
                    })),
                    (c = c
                      .replace(k, function(a, c) {
                        return (
                          '<a href="' +
                          b.urls.atLinkBase +
                          c +
                          '" title="&#64;' +
                          c +
                          '" class="at-link">' +
                          a +
                          "</a>"
                        );
                      })
                      .replace(/_#_&#64;_#_/g, "@"))),
                  g.emailLink &&
                    (c = c.replace(n, function(b, c, d, e, f) {
                      return !c &&
                        a.inArray(
                          f,
                          "jpg|jpeg|png|gif|webp|ico|icon|pdf".split("|")
                        ) < 0
                        ? '<a href="mailto:' + b + '">' + b + "</a>"
                        : b;
                    })),
                  c)
                : c;
            }),
            (i.link = function(a, b, c) {
              var d, f;
              if (this.options.sanitize) {
                try {
                  d = decodeURIComponent(unescape(a))
                    .replace(/[^\w:]/g, "")
                    .toLowerCase();
                } catch (e) {
                  return "";
                }
                if (0 === d.indexOf("javascript:")) return "";
              }
              return (
                (f = '<a href="' + a + '"'),
                k.test(b) || k.test(c)
                  ? (b && (f += ' title="' + b.replace(/@/g, "&#64;")),
                    f + '">' + c.replace(/@/g, "&#64;") + "</a>")
                  : (b && (f += ' title="' + b + '"'), (f += ">" + c + "</a>"))
              );
            }),
            (i.heading = function(a, b) {
              var i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                f = a,
                g = /\s*\<a\s*href\=\"(.*)\"\s*([^\>]*)\>(.*)\<\/a\>\s*/;
              if (g.test(a)) {
                for (
                  i = [],
                    a = a.split(/\<a\s*([^\>]+)\>([^\>]*)\<\/a\>/),
                    j = 0,
                    k = a.length;
                  k > j;
                  j++
                )
                  i.push(a[j].replace(/\s*href\=\"(.*)\"\s*/g, ""));
                a = i.join(" ");
              }
              return (
                (a = e(a)),
                (l = a.toLowerCase().replace(/[^\w]+/g, "-")),
                (m = {
                  text: a,
                  level: b,
                  slug: l
                }),
                (n = /^[\u4e00-\u9fa5]+$/.test(a)),
                (o = n
                  ? escape(a).replace(/\%/g, "")
                  : a.toLowerCase().replace(/[^\w]+/g, "-")),
                c.push(m),
                (p =
                  "<h" +
                  b +
                  ' id="h' +
                  b +
                  "-" +
                  this.options.headerPrefix +
                  o +
                  '">'),
                (p += '<a name="' + a + '" class="reference-link"></a>'),
                (p += '<span class="header-link octicon octicon-link"></span>'),
                (p += g
                  ? this.atLink(this.emoji(f))
                  : this.atLink(this.emoji(a))),
                (p += "</h" + b + ">")
              );
            }),
            (i.pageBreak = function(a) {
              return (
                r.test(a) &&
                  g.pageBreak &&
                  (a =
                    '<hr style="page-break-after:always;" class="page-break editormd-page-break" />'),
                a
              );
            }),
            (i.paragraph = function(a) {
              var i,
                c = /\$\$(.*)\$\$/g.test(a),
                d = /^\$\$(.*)\$\$$/.test(a),
                e = d ? ' class="' + b.classNames.tex + '"' : "",
                f = g.tocm
                  ? /^(\[TOC\]|\[TOCM\])$/.test(a)
                  : /^\[TOC\]$/.test(a),
                h = /^\[TOCM\]$/.test(a);
              return (
                (a =
                  !d && c
                    ? a.replace(/(\$\$([^\$]*)\$\$)+/g, function(a, c) {
                        return (
                          '<span class="' +
                          b.classNames.tex +
                          '">' +
                          c.replace(/\$/g, "") +
                          "</span>"
                        );
                      })
                    : d
                    ? a.replace(/\$/g, "")
                    : a),
                (i =
                  '<div class="markdown-toc editormd-markdown-toc">' +
                  a +
                  "</div>"),
                f
                  ? h
                    ? '<div class="editormd-toc-menu">' + i + "</div><br/>"
                    : i
                  : r.test(a)
                  ? this.pageBreak(a)
                  : "<p" + e + ">" + this.atLink(this.emoji(a)) + "</p>\n"
              );
            }),
            (i.code = function(a, c) {
              return "seq" === c || "sequence" === c
                ? '<div class="sequence-diagram">' + a + "</div>"
                : "flow" === c
                ? '<div class="flowchart">' + a + "</div>"
                : "math" === c || "latex" === c || "katex" === c
                ? '<p class="' + b.classNames.tex + '">' + a + "</p>"
                : h.Renderer.prototype.code.apply(this, arguments);
            }),
            (i.tablecell = function(a, b) {
              var c = b.header ? "th" : "td",
                d = b.align
                  ? "<" + c + ' style="text-align:' + b.align + '">'
                  : "<" + c + ">";
              return d + this.atLink(this.emoji(a)) + "</" + c + ">\n";
            }),
            (i.listitem = function(a) {
              return g.taskList && /^\s*\[[x\s]\]\s*/.test(a)
                ? ((a = a
                    .replace(
                      /^\s*\[\s\]\s*/,
                      '<input type="checkbox" class="task-list-item-checkbox" /> '
                    )
                    .replace(
                      /^\s*\[x\]\s*/,
                      '<input type="checkbox" class="task-list-item-checkbox" checked disabled /> '
                    )),
                  '<li style="list-style: none;">' +
                    this.atLink(this.emoji(a)) +
                    "</li>")
                : "<li>" + this.atLink(this.emoji(a)) + "</li>";
            }),
            i
          );
        }),
        (b.markdownToCRenderer = function(a, b, c, d) {
          var h,
            i,
            j,
            k,
            l,
            m,
            e = "",
            f = 0,
            g = this.classPrefix;
          for (d = d || 1, h = 0, i = a.length; i > h; h++)
            (j = a[h].text),
              (k = a[h].level),
              d > k ||
                ((e +=
                  k > f
                    ? ""
                    : f > k
                    ? new Array(f - k + 2).join("</ul></li>")
                    : "</ul></li>"),
                (e +=
                  '<li><a class="toc-level-' +
                  k +
                  '" href="#' +
                  j +
                  '" level="' +
                  k +
                  '">' +
                  j +
                  "</a><ul>"),
                (f = k));
          return (
            (l = b.find(".markdown-toc")),
            l.length < 1 &&
              "false" === b.attr("previewContainer") &&
              ((m = '<div class="markdown-toc ' + g + 'markdown-toc"></div>'),
              (m = c ? '<div class="' + g + 'toc-menu">' + m + "</div>" : m),
              b.html(m),
              (l = b.find(".markdown-toc"))),
            c && l.wrap('<div class="' + g + 'toc-menu"></div><br/>'),
            l
              .html('<ul class="markdown-toc-list"></ul>')
              .children(".markdown-toc-list")
              .html(e.replace(/\r?\n?\<ul\>\<\/ul\>/g, "")),
            l
          );
        }),
        (b.tocDropdownMenu = function(b, c) {
          var d, e;
          return (
            (c = c || "Table of Contents"),
            (d = 400),
            (e = b.find("." + this.classPrefix + "toc-menu")),
            e.each(function() {
              var b = a(this),
                e = b.children(".markdown-toc"),
                f = '<i class="fa fa-angle-down"></i>',
                g =
                  '<a href="javascript:;" class="toc-menu-btn">' +
                  f +
                  c +
                  "</a>",
                h = e.children("ul"),
                i = h.find("li");
              e.append(g),
                i.first().before("<li><h1>" + c + " " + f + "</h1></li>"),
                b
                  .mouseover(function() {
                    h.show(),
                      i.each(function() {
                        var e,
                          b = a(this),
                          c = b.children("ul");
                        "" === c.html() && c.remove(),
                          c.length > 0 &&
                            "" !== c.html() &&
                            ((e = b.children("a").first()),
                            e.children(".fa").length < 1 &&
                              e.append(
                                a(f).css({
                                  float: "right",
                                  paddingTop: "4px"
                                })
                              )),
                          b
                            .mouseover(function() {
                              c.css("z-index", d).show(), (d += 1);
                            })
                            .mouseleave(function() {
                              c.hide();
                            });
                      });
                  })
                  .mouseleave(function() {
                    h.hide();
                  });
            }),
            e
          );
        }),
        (b.filterHTMLTags = function(b, c) {
          var d, e, f, g, h, i, j;
          if (
            ("string" != typeof b && (b = new String(b)), "string" != typeof c)
          )
            return b;
          for (
            d = c.split("|"),
              e = d[0].split(","),
              f = d[1],
              g = 0,
              h = e.length;
            h > g;
            g++
          )
            (i = e[g]),
              (b = b.replace(
                new RegExp(
                  "<s*" + i + "s*([^>]*)>([^>]*)<s*/" + i + "s*>",
                  "igm"
                ),
                ""
              ));
          return (
            "undefined" != typeof f &&
              ((j = /\<(\w+)\s*([^\>]*)\>([^\>]*)\<\/(\w+)\>/gi),
              (b =
                "*" === f
                  ? b.replace(j, function(a, b, c, d, e) {
                      return "<" + b + ">" + d + "</" + e + ">";
                    })
                  : "on*" === f
                  ? b.replace(j, function(b, c, d, e, f) {
                      var j,
                        g = a("<" + c + ">" + e + "</" + f + ">"),
                        h = a(b)[0].attributes,
                        i = {};
                      return (
                        a.each(h, function(a, b) {
                          '"' !== b.nodeName && (i[b.nodeName] = b.nodeValue);
                        }),
                        a.each(i, function(a) {
                          0 === a.indexOf("on") && delete i[a];
                        }),
                        g.attr(i),
                        (j = "undefined" != typeof g[1] ? a(g[1]).text() : ""),
                        g[0].outerHTML + j
                      );
                    })
                  : b.replace(j, function(b, c, d, e) {
                      var g = f.split(","),
                        h = a(b);
                      return (
                        h.html(e),
                        a.each(g, function(a) {
                          h.attr(g[a], null);
                        }),
                        h[0].outerHTML
                      );
                    }))),
            b
          );
        }),
        (b.markdownToHTML = function(c, d) {
          var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            e = {
              gfm: !0,
              toc: !0,
              tocm: !1,
              tocStartLevel: 1,
              tocTitle: "目录",
              tocDropdown: !1,
              tocContainer: "",
              markdown: "",
              markdownSourceCode: !1,
              htmlDecode: !1,
              autoLoadKaTeX: !0,
              pageBreak: !0,
              atLink: !0,
              emailLink: !0,
              tex: !1,
              taskList: !1,
              emoji: !1,
              flowChart: !1,
              sequenceDiagram: !1,
              previewCodeHighlight: !0
            };
          return (
            (b.$marked = marked),
            (f = a("#" + c)),
            (g = f.settings = a.extend(!0, e, d || {})),
            (h = f.find("textarea")),
            h.length < 1 &&
              (f.append("<textarea></textarea>"), (h = f.find("textarea"))),
            (i = "" === g.markdown ? h.val() : g.markdown),
            (j = []),
            (k = {
              toc: g.toc,
              tocm: g.tocm,
              tocStartLevel: g.tocStartLevel,
              taskList: g.taskList,
              emoji: g.emoji,
              tex: g.tex,
              pageBreak: g.pageBreak,
              atLink: g.atLink,
              emailLink: g.emailLink,
              flowChart: g.flowChart,
              sequenceDiagram: g.sequenceDiagram,
              previewCodeHighlight: g.previewCodeHighlight
            }),
            (l = {
              renderer: b.markedRenderer(j, k),
              gfm: g.gfm,
              tables: !0,
              breaks: !0,
              pedantic: !1,
              sanitize: g.htmlDecode ? !1 : !0,
              smartLists: !0,
              smartypants: !0
            }),
            (i = new String(i)),
            (m = marked(i, l)),
            (m = b.filterHTMLTags(m, g.htmlDecode)),
            g.markdownSourceCode ? h.text(i) : h.remove(),
            f
              .addClass("markdown-body " + this.classPrefix + "html-preview")
              .append(m),
            (n = "" !== g.tocContainer ? a(g.tocContainer) : f),
            "" !== g.tocContainer && n.attr("previewContainer", !1),
            g.toc &&
              ((f.tocContainer = this.markdownToCRenderer(
                j,
                n,
                g.tocDropdown,
                g.tocStartLevel
              )),
              (g.tocDropdown ||
                f.find("." + this.classPrefix + "toc-menu").length > 0) &&
                this.tocDropdownMenu(f, g.tocTitle),
              "" !== g.tocContainer &&
                f.find(".editormd-toc-menu, .editormd-markdown-toc").remove()),
            g.previewCodeHighlight &&
              (f.find("pre").addClass("prettyprint linenums"), prettyPrint()),
            b.isIE8 ||
              (g.flowChart && f.find(".flowchart").flowChart(),
              g.sequenceDiagram &&
                f.find(".sequence-diagram").sequenceDiagram({
                  theme: "simple"
                })),
            g.tex &&
              ((o = function() {
                f.find("." + b.classNames.tex).each(function() {
                  var b = a(this);
                  katex.render(
                    b
                      .html()
                      .replace(/&lt;/g, "<")
                      .replace(/&gt;/g, ">"),
                    b[0]
                  ),
                    b.find(".katex").css("font-size", "1.6em");
                });
              }),
              !g.autoLoadKaTeX || b.$katex || b.kaTeXLoaded
                ? o()
                : this.loadKaTeX(function() {
                    (b.$katex = katex), (b.kaTeXLoaded = !0), o();
                  })),
            (f.getMarkdown = function() {
              return h.val();
            }),
            f
          );
        }),
        (b.themes = ["default", "dark"]),
        (b.previewThemes = ["default", "dark"]),
        (b.editorThemes = [
          "default",
          "3024-day",
          "3024-night",
          "ambiance",
          "ambiance-mobile",
          "base16-dark",
          "base16-light",
          "blackboard",
          "cobalt",
          "eclipse",
          "elegant",
          "erlang-dark",
          "lesser-dark",
          "mbo",
          "mdn-like",
          "midnight",
          "monokai",
          "neat",
          "neo",
          "night",
          "paraiso-dark",
          "paraiso-light",
          "pastel-on-dark",
          "rubyblue",
          "solarized",
          "the-matrix",
          "tomorrow-night-eighties",
          "twilight",
          "vibrant-ink",
          "xq-dark",
          "xq-light"
        ]),
        (b.loadPlugins = {}),
        (b.loadFiles = {
          js: [],
          css: [],
          plugin: []
        }),
        (b.loadPlugin = function(a, c, d) {
          (c = c || function() {}),
            this.loadScript(
              a,
              function() {
                b.loadFiles.plugin.push(a), c();
              },
              d
            );
        }),
        (b.loadCSS = function(a, c, d) {
          (d = d || "head"), (c = c || function() {});
          var e = document.createElement("link");
          (e.type = "text/css"),
            (e.rel = "stylesheet"),
            (e.onload = e.onreadystatechange = function() {
              b.loadFiles.css.push(a), c();
            }),
            (e.href = a + ".css"),
            "head" === d
              ? document.getElementsByTagName("head")[0].appendChild(e)
              : document.body.appendChild(e);
        }),
        (b.isIE = "Microsoft Internet Explorer" == navigator.appName),
        (b.isIE8 = b.isIE && "8." == navigator.appVersion.match(/8./i)),
        (b.loadScript = function(a, c, d) {
          (d = d || "head"), (c = c || function() {});
          var e = null;
          (e = document.createElement("script")),
            (e.id = a.replace(/[\.\/]+/g, "-")),
            (e.type = "text/javascript"),
            (e.src = a + ".js"),
            b.isIE8
              ? (e.onreadystatechange = function() {
                  e.readyState &&
                    ("loaded" === e.readyState ||
                      "complete" === e.readyState) &&
                    ((e.onreadystatechange = null),
                    b.loadFiles.js.push(a),
                    c());
                })
              : (e.onload = function() {
                  b.loadFiles.js.push(a), c();
                }),
            "head" === d
              ? document.getElementsByTagName("head")[0].appendChild(e)
              : document.body.appendChild(e);
        }),
        (b.katexURL = {
          css: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min",
          js: "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min"
        }),
        (b.kaTeXLoaded = !1),
        (b.loadKaTeX = function(a) {
          b.loadCSS(b.katexURL.css, function() {
            b.loadScript(b.katexURL.js, a || function() {});
          });
        }),
        (b.lockScreen = function(b) {
          a("html,body").css("overflow", b ? "hidden" : "");
        }),
        (b.createDialog = function(c) {
          var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            d = {
              name: "",
              width: 420,
              height: 240,
              title: "",
              drag: !0,
              closed: !0,
              content: "",
              mask: !0,
              maskStyle: {
                backgroundColor: "#fff",
                opacity: 0.1
              },
              lockScreen: !0,
              footer: !0,
              buttons: !1
            };
          if (
            ((c = a.extend(!0, d, c)),
            (e = this),
            (f = this.editor),
            (g = b.classPrefix),
            (h = new Date().getTime()),
            (i = "" === c.name ? g + "dialog-" + h : c.name),
            (j = b.mouseOrTouch),
            (k = '<div class="' + g + "dialog " + i + '">'),
            "" !== c.title &&
              ((k +=
                '<div class="' +
                g +
                'dialog-header"' +
                (c.drag ? ' style="cursor: move;"' : "") +
                ">"),
              (k +=
                '<strong class="' +
                g +
                'dialog-title">' +
                c.title +
                "</strong>"),
              (k += "</div>")),
            c.closed &&
              (k +=
                '<a href="javascript:;" class="fa fa-close ' +
                g +
                'dialog-close"></a>'),
            (k += '<div class="' + g + 'dialog-container">' + c.content),
            (c.footer || "string" == typeof c.footer) &&
              (k +=
                '<div class="' +
                g +
                'dialog-footer">' +
                ("boolean" == typeof c.footer ? "" : c.footer) +
                "</div>"),
            (k += "</div>"),
            (k +=
              '<div class="' +
              g +
              "dialog-mask " +
              g +
              'dialog-mask-bg"></div>'),
            (k +=
              '<div class="' +
              g +
              "dialog-mask " +
              g +
              'dialog-mask-con"></div>'),
            (k += "</div>"),
            f.append(k),
            (l = f.find("." + i)),
            (l.lockScreen = function(b) {
              return (
                c.lockScreen &&
                  (a("html,body").css("overflow", b ? "hidden" : ""),
                  e.resize()),
                l
              );
            }),
            (l.showMask = function() {
              return (
                c.mask &&
                  f
                    .find("." + g + "mask")
                    .css(c.maskStyle)
                    .css("z-index", b.dialogZindex - 1)
                    .show(),
                l
              );
            }),
            (l.hideMask = function() {
              return c.mask && f.find("." + g + "mask").hide(), l;
            }),
            (l.loading = function(a) {
              var b = l.find("." + g + "dialog-mask");
              return b[a ? "show" : "hide"](), l;
            }),
            l.lockScreen(!0).showMask(),
            l.show().css({
              zIndex: b.dialogZindex,
              border: b.isIE8 ? "1px solid #ddd" : "",
              width: "number" == typeof c.width ? c.width + "px" : c.width,
              height: "number" == typeof c.height ? c.height + "px" : c.height
            }),
            (m = function() {
              l.css({
                top: (a(window).height() - l.height()) / 2 + "px",
                left: (a(window).width() - l.width()) / 2 + "px"
              });
            }),
            m(),
            a(window).resize(m),
            l
              .children("." + g + "dialog-close")
              .bind(j("click", "touchend"), function() {
                l.hide()
                  .lockScreen(!1)
                  .hideMask();
              }),
            "object" == typeof c.buttons)
          ) {
            n = l.footer = l.find("." + g + "dialog-footer");
            for (o in c.buttons)
              (p = c.buttons[o]),
                (q = g + o + "-btn"),
                n.append(
                  '<button class="' + g + "btn " + q + '">' + p[0] + "</button>"
                ),
                (p[1] = a.proxy(p[1], l)),
                n.children("." + q).bind(j("click", "touchend"), p[1]);
          }
          return (
            "" !== c.title &&
              c.drag &&
              ((t = l.children("." + g + "dialog-header")),
              c.mask ||
                t.bind(j("click", "touchend"), function() {
                  (b.dialogZindex += 2), l.css("z-index", b.dialogZindex);
                }),
              t.mousedown(function(a) {
                (a = a || window.event),
                  (r = a.clientX - parseInt(l[0].style.left)),
                  (s = a.clientY - parseInt(l[0].style.top)),
                  (document.onmousemove = w);
              }),
              (u = function(a) {
                a.removeClass(g + "user-unselect").off("selectstart");
              }),
              (v = function(a) {
                a.addClass(g + "user-unselect").on("selectstart", function() {
                  return !1;
                });
              }),
              (w = function(b) {
                b = b || window.event;
                var c,
                  d,
                  e = parseInt(l[0].style.left),
                  f = parseInt(l[0].style.top);
                e >= 0
                  ? e + l.width() <= a(window).width()
                    ? (c = b.clientX - r)
                    : ((c = a(window).width() - l.width()),
                      (document.onmousemove = null))
                  : ((c = 0), (document.onmousemove = null)),
                  f >= 0
                    ? (d = b.clientY - s)
                    : ((d = 0), (document.onmousemove = null)),
                  (document.onselectstart = function() {
                    return !1;
                  }),
                  v(a("body")),
                  v(l),
                  (l[0].style.left = c + "px"),
                  (l[0].style.top = d + "px");
              }),
              (document.onmouseup = function() {
                u(a("body")),
                  u(l),
                  (document.onselectstart = null),
                  (document.onmousemove = null);
              }),
              (t.touchDraggable = function() {
                var b = null,
                  c = function(c) {
                    var d = c.originalEvent,
                      e = a(this)
                        .parent()
                        .position();
                    b = {
                      x: d.changedTouches[0].pageX - e.left,
                      y: d.changedTouches[0].pageY - e.top
                    };
                  },
                  d = function(c) {
                    c.preventDefault();
                    var d = c.originalEvent;
                    a(this)
                      .parent()
                      .css({
                        top: d.changedTouches[0].pageY - b.y,
                        left: d.changedTouches[0].pageX - b.x
                      });
                  };
                this.bind("touchstart", c).bind("touchmove", d);
              }),
              t.touchDraggable()),
            (b.dialogZindex += 2),
            l
          );
        }),
        (b.mouseOrTouch = function(a, b) {
          (a = a || "click"), (b = b || "touchend");
          var c = a;
          try {
            document.createEvent("TouchEvent"), (c = b);
          } catch (d) {}
          return c;
        }),
        (b.dateFormat = function(a) {
          var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
          switch (
            ((a = a || ""),
            (b = function(a) {
              return 10 > a ? "0" + a : a;
            }),
            (c = new Date()),
            (d = c.getFullYear()),
            (e = d.toString().slice(2, 4)),
            (f = b(c.getMonth() + 1)),
            (g = b(c.getDate())),
            (h = c.getDay()),
            (i = b(c.getHours())),
            (j = b(c.getMinutes())),
            (k = b(c.getSeconds())),
            (l = b(c.getMilliseconds())),
            (m = ""),
            (n = e + "-" + f + "-" + g),
            (o = d + "-" + f + "-" + g),
            (p = i + ":" + j + ":" + k),
            a)
          ) {
            case "UNIX Time":
              m = c.getTime();
              break;
            case "UTC":
              m = c.toUTCString();
              break;
            case "yy":
              m = e;
              break;
            case "year":
            case "yyyy":
              m = d;
              break;
            case "month":
            case "mm":
              m = f;
              break;
            case "cn-week-day":
            case "cn-wd":
              (q = ["日", "一", "二", "三", "四", "五", "六"]),
                (m = "星期" + q[h]);
              break;
            case "week-day":
            case "wd":
              (r = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ]),
                (m = r[h]);
              break;
            case "day":
            case "dd":
              m = g;
              break;
            case "hour":
            case "hh":
              m = i;
              break;
            case "min":
            case "ii":
              m = j;
              break;
            case "second":
            case "ss":
              m = k;
              break;
            case "ms":
              m = l;
              break;
            case "yy-mm-dd":
              m = n;
              break;
            case "yyyy-mm-dd":
              m = o;
              break;
            case "yyyy-mm-dd h:i:s ms":
            case "full + ms":
              m = o + " " + p + " " + l;
              break;
            case "full":
            case "yyyy-mm-dd h:i:s":
            default:
              m = o + " " + p;
          }
          return m;
        }),
        b
      );
  });
});
