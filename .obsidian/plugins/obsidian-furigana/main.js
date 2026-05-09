'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const addRubyTag = (editor, selected) => {
    const cursor = editor.getCursor();
    const lineText = editor.getLine(cursor.line);
    const rubyTagMatch = lineText.match(/<ruby\>(.*?)<\/ruby>/);
    let alreadyInRuby = (rubyTagMatch &&
        rubyTagMatch.index &&
        rubyTagMatch.index < cursor.ch &&
        rubyTagMatch.index + rubyTagMatch[0].length > cursor.ch);
    let head = `${selected}<rt>`;
    let tail = "</rt>";
    if (!alreadyInRuby) {
        head = `<ruby>${head}`;
        tail = `${tail}</ruby>`;
    }
    editor.replaceSelection(head + tail, "end");
    const { line, ch } = editor.getCursor();
    editor.setCursor({ line, ch: ch - tail.length });
};
class AliasPlugin extends obsidian.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerEvent(this.app.workspace.on("editor-menu", (menu, editor, view) => {
                const selectedText = editor.getSelection();
                if (!selectedText || selectedText.trim() === "") {
                    return;
                }
                menu.addItem((item) => {
                    item.setTitle("Add <ruby> tag")
                        .onClick(() => addRubyTag(editor, selectedText));
                });
            }));
            this.addCommand({
                id: 'add-ruby',
                name: 'Add <ruby> tag for selected text',
                checkCallback: (checking) => {
                    let view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                    if (!view) {
                        return false;
                    }
                    const editor = view.editor;
                    if (!checking) {
                        const selected = editor.getSelection();
                        addRubyTag(editor, selected);
                    }
                    return true;
                }
            });
        });
    }
    onunload() {
    }
}

module.exports = AliasPlugin;


/* nosourcemap */