import { Node } from './Node.js';
import { isNullish } from '../../../utils/is-nullish.js';
import { ACTIVE_KEY_CLASSNAME } from '../constants.js';

export class Key {
  key = null;
  name = null;
  sound = null;

  constructor({ name, key, sound, parent, onClick }) {
    this.name = new Node({
      tag: 'kbd',
      className: 'drum-kit-key-name',
      textContent: name,
    });

    this.sound = new Node({
      tag: 'span',
      className: 'drum-kit-key-sound',
      textContent: sound,
    });

    this.key = new Node({
      addToParent: !isNullish(parent),
      attributes: [{ key: 'data-key', value: key }],
      children: [this.name, this.sound],
      className: 'drum-kit-key',
      onClick,
      parent,
      tag: 'button',
    });

    this.node.addEventListener('transitionend', this.removeTransition);
  }

  removeTransition = () => {
    this.node.classList.remove(ACTIVE_KEY_CLASSNAME);
  };

  get node() {
    return this.key.node;
  }
}
