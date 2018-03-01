import EmberObject from '@ember/object';
import { AbstractMethod } from 'ember-abstract-macro';
import { module, test } from 'qunit';

module('Unit | Utility | abstract method');

test('Without override, assert catch', function(assert) {
  assert.expect(1);

  assert.throws(
    () => {
      const ObjectWithAbstractMethod = EmberObject.extend({
        mustBeOverridden: AbstractMethod('my-module-name.mustBeOverridden()')
      });
      const obj = ObjectWithAbstractMethod.create();
      obj.mustBeOverridden();
    },
    function(err) {
      return 'Assertion Failed: Method my-module-name.mustBeOverridden() must be overridden' === err.message;
    },
    'raise assertion'
  );
});


test('With override', function(assert) {
  const ObjectWithAbstractMethod = EmberObject.extend({
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
      const ObjectWithAbstractMethod = EmberObject.extend({
        mustBeOverridden: AbstractMethod( 'my-module-name.mustBeOverridden()', 'My custom message for abstract method' )
      });
      const obj = ObjectWithAbstractMethod.create();
      obj.mustBeOverridden();
    },
    function(err) {
      return 'Assertion Failed: My custom message for abstract method' === err.message;
    },
    'raise assertion with custom message'
  );
});
