import { Node } from './Node.js';
import { isNullish } from '../utils/is-nullish.js';

export class ProjectCard {
  card = null;
  title = null;
  textContent = null;
  description = null;
  cover = null;

  constructor({ title, description, coverSrc }) {
    if (isNullish(title) || isNullish(description)) {
      return null;
    }

    this.title = new Node({
      className: 'project-card-title',
      tag: 'h2',
      textContent: title,
    });

    this.description = new Node({
      className: 'project-card-description',
      tag: 'p',
      textContent: description,
    });

    this.textContent = new Node({
      className: 'project-card-content',
      children: [this.title, this.description],
    });

    this.card = new Node({
      className: 'project-card',
      tag: 'article',
      children: [this.textContent],
    });

    if (!isNullish(coverSrc)) {
      this.cover = new Node({
        tag: 'img',
        className: 'project-card-cover',
        src: coverSrc,
        parent: this.node,
        prependToParent: true,
      });
    }
  }

  get node() {
    return this.card.node;
  }
}
