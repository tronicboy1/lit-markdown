# About this Package

This package is an extension of [Lit's Directives](https://lit.dev/docs/api/directives/) to add markdown rendering functionality.

# Dependencies

This package uses [Marked](https://github.com/markedjs/marked) and [sanitize-html](https://github.com/apostrophecms/sanitize-html) to provide a light-weight and safe renderer in the browser.

# Getting Started

You can install this packaged into any existing Lit project.

```
npm install lit-markdown
```

OR

```
yarn add lit-markdown
```

Using the directive is easy.

```typescript
import { LitElement, html, PropertyValueMap } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { resolveMarkdown } from "lit-markdown";

@customElement("my-element")
export class MyElement extends LitElement {
  @query("textarea")
  private textarea!: HTMLTextAreaElement;
  @state()
  private raw = "";

  firstUpdated(_changedProperties: PropertyValueMap<unknown> | Map<PropertyKey, unknown>) {
    super.firstUpdated(_changedProperties);
    this.textarea.addEventListener("input", this.handleTextareaInput);
  }

  private handleTextareaInput: EventListener = () => {
    const { value } = this.textarea;
    if (!value) return;
    this.raw = value.trim();
  };

  render() {
    return html`<label for="markdown">Input</label><textarea name="markdown" id="markdown"></textarea>
      <p>Output</p>
      <article>${resolveMarkdown(this.raw, { includeImages: true })}</article>`;
  }
}
```

# Contributing

Feel free to open issues and create pull requests. If you are interested in adding to this package please contact me.

# License

This package is distributed under the MIT license.
