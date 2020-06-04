import sayHello from "./sayHello";
import {render} from "lit-html";

beforeEach(() => {
  render('', document.body);
})

describe('sayHello', () => {
  it('says hello', () => {
    render(sayHello('world'), document.body);
    const component = document.querySelector('h1');
    expect(component).toBeDefined();
  })
})
