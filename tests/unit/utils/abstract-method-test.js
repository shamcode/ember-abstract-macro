import Ember from 'ember';
import AbstractMethod from 'ember-abstract-macro/abstract-method';
import { module, test } from 'qunit';

module('Unit | Utility | abstract method');

test('Without override, assert catch', function(assert) {
  assert.expect(1);
  assert.throws(
    () => {
      const ObjectWithAbstractMethod = Ember.Object.extend({
        mustBeOverridden: AbstractMethod('my-module-name.mustBeOverridden()')
      });
      const obj = ObjectWithAbstractMethod.create();
      obj.mustBeOverridden();
    },
    (err) => {
      return 'Assertion Failed: Method my-module-name.mustBeOverridden() must be overridden' === err.message;
    },
    'raise assertion'
  );
});


test('With override', function(assert) {
  const ObjectWithAbstractMethod = Ember.Object.extend({
    mustBeOverridden: AbstractMethod('my-module-name.mustBeOverridden()')
  });
  const obj = ObjectWithAbstractMethod.create({
    mustBeOverridden() {
      return 'method overridden';
    }
  });
  assert.equal(obj.mustBeOverridden(), 'method overridden');
});

test('Custom message, assert catch', function(assert) {
  assert.throws(
    () => {
      const ObjectWithAbstractMethod = Ember.Object.extend({
        mustBeOverridden: AbstractMethod( 'my-module-name.mustBeOverridden()', 'My custom message for abstract method' )
      });
      const obj = ObjectWithAbstractMethod.create();
      obj.mustBeOverridden();
    },
    (err) => {
      return 'Assertion Failed: My custom message for abstract method' === err.message;
    },
    'raise assertion with custom message'
  );
});
