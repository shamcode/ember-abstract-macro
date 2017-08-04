import { isEmpty } from "@ember/utils";
import { assert } from "@ember/debug";

/**
 * Mark method as abstract (must be overridden & implement)
 * @param {String} method Module & module name
 * @param {String} [message] Custom message for assert
 * @return {Function}
 */
export default function abstractMethod(method, message) {
  return function() {
    assert(
      isEmpty(message) ? `Method ${method} must be overridden` : message
    );
  };
}
