import { Node } from './Node.js';
import { isNullish } from '../../../utils/is-nullish.js';

export class Audio {
  audio = null;

  constructor({ key, soundSrc, parent }) {
    this.audio = new Node({
      attributes: [{ key: 'data-key', value: key }],
      tag: 'audio',
      src: soundSrc,
      parent,
      addToParent: !isNullish(parent),
    });
  }

  get node() {
    return this.audio.node;
  }
}
