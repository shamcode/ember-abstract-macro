import { isEmpty } from "@ember/utils";
import { computed } from "@ember/object";
import { assert } from "@ember/debug";
import { decoratorWithKeyReflection } from 'ember-decorators/utils/decorator-macros';

/**
 * Mark property as abstract (must be overridden)
 * @param {String} [module] Module name
 * @param {String} [message] Custom message for assert
 * @return {Ember.ComputedProperty}
 */
export default function abstractProperty(module, message) {
  return computed(function(key) {
    assert(
      isEmpty(message) ? `Class ${module}, property ${key} must be overridden` : message
    );
  });
}

/**
 * Decorator for abstractProperty
 */
export const property = decoratorWithKeyReflection( abstractProperty );
