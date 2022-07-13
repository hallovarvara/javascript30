import { isNullish } from './is-nullish.js';

export const makePageClassname = (pageName) =>
  !isNullish(pageName) ? `page ${pageName}-page`.toLowerCase() : 'page';
