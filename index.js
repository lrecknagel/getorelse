'use strict';

/**
 * Simple function which return first defined argument
 * @param  {Any} [_default=undefined] a default value, returned if all args undefined
 * @return {Any}                      the first defined value || default value
 */
module.exports = function(_default = undefined) {
  for(let i = 1; i < arguments.length; i++) {
    if (arguments[i] !== undefined && arguments[i] !== null) {
      return arguments[i];
    }
  }
  return _default;
};
