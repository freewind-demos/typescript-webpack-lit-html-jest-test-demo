import {html, render, TemplateResult} from 'lit-html';

function sayHello(name: string): TemplateResult {
  return html`<h1>Hello ${name}</h1>`;
}

render(sayHello('world'), document.body);

setTimeout(() => {
  render(sayHello('lit-html'), document.body);
}, 1000)
