import Ember from 'ember';

const {
  isEmpty,
  computed,
  assert
} = Ember;

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
