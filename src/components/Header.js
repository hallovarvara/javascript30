import { Node } from './Node.js';

export class Header {
  #object = null;

  constructor({ parent }) {
    this.#object = new Node({
      className: 'header',
      parent,
      addToParent: true,
      tag: 'header',
      textContent: 'Hello',
    });
  }

  get node() {
    return this.#object;
  }

  get parent() {
    return this.#object.parent;
  }
}
