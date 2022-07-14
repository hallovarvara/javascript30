import { Node } from './components/Node.js';
import { makePageClassname } from '../../utils/make-page-classname.js';
import { isNode } from '../../utils/is-node.js';
import { ACTIVE_KEY_CLASSNAME, AUDIO_SRC, KEYS_DATA } from './constants.js';
import { Key } from './components/Key.js';
import { Audio } from './components/Audio.js';

export class DrumKit {
  id = 'drum-kit';

  constructor() {
    const heading = new Node({ tag: 'h1', textContent: 'Drum Kit' });

    const description = new Node({
      tag: 'p',
      className: 'drum-kit-description',
      textContent:
        'Press keys listed below on your keyboard to hear some drums',
    });

    const keys = KEYS_DATA.map(
      (keyData) =>
        new Key({
          ...keyData,
          onClick: () => {
            this.onClick(keyData.key);
          },
        }),
    );

    const keysContainer = new Node({
      className: `${this.id}-keys`,
      children: keys,
    });

    const audioSet = KEYS_DATA.map(
      ({ key, sound }) =>
        new Audio({ key, soundSrc: AUDIO_SRC.replace('[sound]', sound) }),
    );

    const main = new Node({
      tag: 'main',
      className: `${this.id}-content`,
      children: [heading, description, keysContainer, ...audioSet],
    });

    this.addEventListener();

    return new Node({
      className: makePageClassname(this.id),
      children: [main],
      addToParent: true,
    });
  }

  onClick = (key) => {
    const audio = document.querySelector(`audio[data-key="${key}"]`);

    if (isNode(audio)) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  handleKeyDown = (event) => {
    const { keyCode } = event;

    this.onClick(keyCode);

    const key = document.querySelector(`.drum-kit-key[data-key="${keyCode}"]`);

    key?.classList?.add(ACTIVE_KEY_CLASSNAME);
  };

  addEventListener = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  removeEventListener = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  };
}
