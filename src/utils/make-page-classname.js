import { isNullish } from './is-nullish.js';
import { isString } from './is-string.js';

export const makePageClassname = (pageName) =>
  !isNullish(pageName) && isString(pageName)
    ? `page ${pageName}-page`.toLowerCase()
    : 'page';
