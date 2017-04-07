import Ember from 'ember';
import { AbstractProperty } from 'ember-abstract-macro';
import { module, test } from 'qunit';

module('Unit | Utility | abstract property');

test('Without override, assert catch', function(assert) {
  assert.expect(1);
  assert.throws(
    () => {
      const ObjectWithAbstractProperty = Ember.Object.extend({
        mustBeOverridden: AbstractProperty( 'my-module-name' )
      });
      const obj = ObjectWithAbstractProperty.create();
      obj.get('mustBeOverridden');
    },
    (err) => {
      return 'Assertion Failed: Class my-module-name, property mustBeOverridden must be overridden' === err.message;
    },
    'raise assertion'
  );
});

test('With override', function(assert) {
  const ObjectWithAbstractProperty = Ember.Object.extend({
    mustBeOverridden: AbstractProperty('my-module-name')
  });
  const obj = ObjectWithAbstractProperty.create({
    mustBeOverridden: 'property overridden'
  });
  assert.equal(obj.get('mustBeOverridden'), 'property overridden');
});

test('Custom message, assert catch', function(assert) {
  assert.throws(
    () => {
      const ObjectWithAbstractProperty = Ember.Object.extend({
        mustBeOverridden: AbstractProperty( 'my-module-name', 'My custom message for abstract property' )
      });
      const obj = ObjectWithAbstractProperty.create();
      obj.get('mustBeOverridden');
    },
    (err) => {
      return 'Assertion Failed: My custom message for abstract property' === err.message;
    },
    'raise assertion with custom message'
  );
});
