import { Node } from './Node.js';

export class Button {
  button = null;

  constructor({ onClick, title }) {
    this.button = new Node({
      className: 'button',
      onClick,
      tag: 'button',
      textContent: title,
    });
  }

  get node() {
    return this.button.node;
  }
}
