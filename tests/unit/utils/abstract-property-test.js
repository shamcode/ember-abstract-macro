import EmberObject from '@ember/object';
import AbstractProperty, { property as abstractProperty } from 'ember-abstract-macro/property';
import { module, test } from 'qunit';

module('Unit | Utility | abstract property', function() {
  test('Without override, assert catch', function(assert) {
    assert.expect(1);
    assert.throws(
      () => {
        const ObjectWithAbstractProperty = EmberObject.extend({
          mustBeOverridden: AbstractProperty( 'my-module-name' )
        });
        const obj = ObjectWithAbstractProperty.create();
        obj.get('mustBeOverridden');
      },
      function(err) {
        return 'Assertion Failed: Class my-module-name, property mustBeOverridden must be overridden' === err.message;
      },
      'raise assertion'
    );
  });

  test('With override', function(assert) {
    const ObjectWithAbstractProperty = EmberObject.extend({
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
        const ObjectWithAbstractProperty = EmberObject.extend({
          mustBeOverridden: AbstractProperty( 'my-module-name', 'My custom message for abstract property' )
        });
        const obj = ObjectWithAbstractProperty.create();
        obj.get('mustBeOverridden');
      },
      function(err) {
        return 'Assertion Failed: My custom message for abstract property' === err.message;
      },
      'raise assertion with custom message'
    );
  });

  test('Decorator property, assert catch', function(assert) {
    assert.expect(1);
    assert.throws(
      () => {
        class ClassWithAbstractProperty extends EmberObject {
          @abstractProperty('my-module-name') mustBeOverridden() {}
        }
        const obj = ClassWithAbstractProperty.create();
        obj.get('mustBeOverridden');
      },
      function(err) {
        return 'Assertion Failed: Class my-module-name, property mustBeOverridden must be overridden' === err.message;
      },
      'raise assertion'
    );
  });

  test('Decorator property with override', function(assert) {
    class ObjectWithAbstractProperty extends EmberObject {
      @abstractProperty('my-module-name')
      mustBeOverridden() {}
    }
    const obj = ObjectWithAbstractProperty.create({
      mustBeOverridden: 'property overridden'
    });
    assert.equal(obj.get('mustBeOverridden'), 'property overridden');
  });
});
