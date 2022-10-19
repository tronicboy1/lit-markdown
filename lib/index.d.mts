import { AsyncDirective } from "lit/async-directive.js";
declare type Options = {
    includeImages?: boolean;
    includeCodeBlockClassNames?: boolean;
    loadingHTML?: string;
};
/**
 * An async directive to render markdown in a LitElement's render function.
 * Images can be included or removed in the executor's options.
 */
export declare class MarkdownDirective extends AsyncDirective {
    render(rawMarkdown: string, options?: Options): import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/unsafe-html").UnsafeHTMLDirective>;
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
export declare const resolveMarkdown: (rawMarkdown: string, options?: Options | undefined) => import("lit-html/directive").DirectiveResult<typeof MarkdownDirective>;
export {};
//# sourceMappingURL=index.d.mts.map