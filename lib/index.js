"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveMarkdown = exports.MarkdownDirective = void 0;
const directive_js_1 = require("lit/directive.js");
const unsafe_html_js_1 = require("lit/directives/unsafe-html.js");
const async_directive_js_1 = require("lit/async-directive.js");
const marked_1 = require("marked");
const sanitize_html_1 = __importStar(require("sanitize-html"));
/**
 * An async directive to render markdown in a LitElement's render function.
 * Images can be included or removed in the executor's options.
 */
class MarkdownDirective extends async_directive_js_1.AsyncDirective {
    render(rawMarkdown, options) {
        const mergedOptions = Object.assign({ includeImages: false, loadingHTML: "<p>Loading...</p>" }, options !== null && options !== void 0 ? options : {});
        const allowedTags = mergedOptions.includeImages ? [...sanitize_html_1.defaults.allowedTags, "img"] : sanitize_html_1.defaults.allowedTags;
        new Promise((resolve, reject) => {
            marked_1.marked.parse(rawMarkdown, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
        }).then((rawHTML) => {
            const sanitizedHTML = (0, sanitize_html_1.default)(rawHTML, { allowedTags });
            const renderedHTML = (0, unsafe_html_js_1.unsafeHTML)(sanitizedHTML);
            this.setValue(renderedHTML);
        });
        return (0, unsafe_html_js_1.unsafeHTML)(mergedOptions.loadingHTML);
    }
}
exports.MarkdownDirective = MarkdownDirective;
/**
 * An asyn directive used to render markedown in a LitElement's render function.
 *
 * Rendering pictures can be enabled through the settings.
 *
 * The default loading html may also be replaced.
 *
 * @example render() {
 *            const rawMarkdown = `# Hello World`
 *            return html`<article>${resolveMarkdown(rawMarkdown)}</article>`
 * }
 *
 * @example render() {
 *            const rawMarkdown = `# Hello World
 *            ![image.jpeg](https://host.com/image.jpeg "image.jpeg")`;
 *            return html`<article>${resolveMarkdown(rawMarkdown, { includeImages: true, loadingHTML: "<loading-icon></loading-icon>" })}</article>`
 * }
 * @typedef {Parameters<InstanceType<typeof MarkdownDirective>['render']>} RenderParameters
 * @param {RenderParameters[0]} rawMarkdown Markdown to be rendered.
 * @param {RenderParameters[1]} options
 */
exports.resolveMarkdown = (0, directive_js_1.directive)(MarkdownDirective);
//# sourceMappingURL=index.js.map