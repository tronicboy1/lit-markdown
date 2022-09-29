import { AsyncDirective } from "lit/async-directive.js";
/**
 * An async directive to render markdown in a LitElement's render function.
 * Images can be included or removed in the executor's options.
 */
export declare class MarkdownDirective extends AsyncDirective {
    render(rawMarkdown: string, options?: {
        includeImages?: boolean;
        loadingHTML?: string;
    }): import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/unsafe-html").UnsafeHTMLDirective>;
}
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
export declare const resolveMarkdown: (rawMarkdown: string, options?: {
    includeImages?: boolean | undefined;
    loadingHTML?: string | undefined;
} | undefined) => import("lit-html/directive").DirectiveResult<typeof MarkdownDirective>;
//# sourceMappingURL=index.d.mts.map