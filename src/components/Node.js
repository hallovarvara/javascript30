import { isNode } from '../utils/is-node.js';
import { isNullish } from '../utils/is-nullish.js';

export class Node {
  #node = null;
  #parent = document.body;
  #children = [];

  constructor({
    attributes,
    children,
    className,
    onClick,
    parent = document.body,
    src,
    tag = 'div',
    addToParent = false,
    prependToParent = false,
    textContent,
  }) {
    this.#parent = parent;
    this.#node = document?.createElement(tag);

    if (!isNullish(className)) {
      this.#node.classList = className;
    }

    if (!isNullish(textContent)) {
      this.#node.textContent = textContent;
    }

    if (!isNullish(src)) {
      this.#node.src = src;
    }

    if (!isNullish(attributes)) {
      attributes.forEach(({ key, value }) => {
        if (!isNullish(key) && !isNullish(value)) {
          this.#node.setAttribute(key, value);
        }
      });
    }

    if (!isNullish(children)) {
      this.addChildren(...children);
    }

    if (!isNullish(onClick)) {
      this.#node.onclick = onClick;
    }

    if (addToParent) {
      this.addToParent();
    }

    if (prependToParent) {
      this.prependToParent();
    }
  }

  get node() {
    return this.#node;
  }

  get parent() {
    return this.#parent;
  }

  set parent(parent) {
    if (isNode(parent)) {
      this.#parent = parent;
      this.addToParent();
    }
  }

  addToParent = () => {
    this.#parent.append(this.#node);
  };

  prependToParent = () => {
    this.#parent.prepend(this.#node);
  };

  addChildren = (...children) => {
    children.forEach((child) => {
      if (isNode(child.node)) {
        this.#children.push(child);
        this.#node.append(child.node);
      }
    });
  };
}
