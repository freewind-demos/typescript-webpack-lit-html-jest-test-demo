import {html, TemplateResult} from 'lit-html';

export default function sayHello(name: string): TemplateResult {
  return html`<h1>Hello ${name}</h1>`;
}
