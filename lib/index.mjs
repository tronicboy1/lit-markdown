import { directive } from "lit/directive.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { AsyncDirective } from "lit/async-directive.js";
import { marked } from "marked";
import sanitizeHTML from "sanitize-html";
/**
 * An async directive to render markdown in a LitElement's render function.
 * Images can be included or removed in the executor's options.
 */
export class MarkdownDirective extends AsyncDirective {
    render(rawMarkdown, options) {
        const defaultSettings = {
            includeImages: false,
            includeCodeBlockClassNames: false,
            loadingHTML: "<p>Loading...</p>",
        };
        const mergedOptions = Object.assign(defaultSettings, options !== null && options !== void 0 ? options : {});
        const allowedTags = mergedOptions.includeImages
            ? [...sanitizeHTML.defaults.allowedTags, "img"]
            : sanitizeHTML.defaults.allowedTags;
        const allowedClasses = mergedOptions.includeCodeBlockClassNames
            ? { code: ["*"] }
            : {};
        new Promise((resolve, reject) => {
            marked.parse(rawMarkdown, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
        }).then((rawHTML) => {
            const sanitizedHTML = sanitizeHTML(rawHTML, { allowedTags, allowedClasses });
            const renderedHTML = unsafeHTML(sanitizedHTML);
            this.setValue(renderedHTML);
        });
        return unsafeHTML(mergedOptions.loadingHTML);
    }
}
/**
 * An asyn directive used to render markedown in a LitElement's render function.
 *
 * Rendering pictures can be enabled through the settings.
 * Css class names for code blocks may also be enabled through settings.
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
 *            return html`<article>${resolveMarkdown(rawMarkdown, { includeImages: true, includeCodeBlockClassNames: true, loadingHTML: "<loading-icon></loading-icon>" })}</article>`
 * }
 * @typedef {Parameters<InstanceType<typeof MarkdownDirective>['render']>} RenderParameters
 * @param {RenderParameters[0]} rawMarkdown Markdown to be rendered.
 * @param {RenderParameters[1]} options
 */
export const resolveMarkdown = directive(MarkdownDirective);
//# sourceMappingURL=index.mjs.map