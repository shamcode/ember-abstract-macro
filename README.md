# ember-abstract-macro

[![Build Status](https://travis-ci.org/shamcode/ember-abstract-macro.svg?branch=master)](https://travis-ci.org/shamcode/ember-abstract-macro)
[![npm version](https://badge.fury.io/js/ember-abstract-macro.png)](http://badge.fury.io/js/ember-abstract-macro)
[![Dependency Status](https://david-dm.org/shamcode/ember-abstract-macro.svg)](https://david-dm.org/shamcode/ember-abstract-macro)
[![devDependency Status](https://david-dm.org/shamcode/ember-abstract-macro.svg)](https://david-dm.org/shamcode/ember-abstract-macro#info=devDependencies)
[![Ember Observer Score](https://emberobserver.com/badges/ember-abstract-macro.svg)](https://emberobserver.com/addons/ember-abstract-macro)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Collection of Computed Property macro for make properties & methods as abstract

## Usage

For methods:
```js
import { AbstractMethod } from 'ember-abstract-macro';

const ObjectWithAbstractMethod = Ember.Object.extend({
  mustBeOverridden: AbstractMethod('my-module-name.mustBeOverridden()')
});

const foo = ObjectWithAbstractMethod.create();
foo.mustBeOverridden(); // raise Assertion 'Method my-module-name.mustBeOverridden() must be overridden'

const bar = ObjectWithAbstractMethod.create({ 
  mustBeOverridden() { return 42; }
});
foo.mustBeOverridden(); // return 42
```

For properties:
```js
import { AbstractProperty } from 'ember-abstract-macro';

const ObjectWithAbstractProperty = Ember.Object.extend({
  mustBeOverridden: AbstractProperty( 'my-module-name' )
});

const foo = ObjectWithAbstractProperty.create();
foo.get('mustBeOverridden'); // raise Assertion 'Class my-module-name, property mustBeOverridden must be overridden'

const foo = ObjectWithAbstractProperty.create({
  mustBeOverridden: 42
});
foo.get('mustBeOverridden'); // return 42
```

As decorator:
```js
import { property as abstract } from 'ember-abstract-macro/property';

class ClassWithAbstractProperty extends Ember.Object {
  @abstract( 'my-module-name' ) mustBeOverridden() {}
}

const foo = ClassWithAbstractProperty.create();
foo.get('mustBeOverridden'); // raise Assertion 'Class my-module-name, property mustBeOverridden must be overridden'

class ObjectWithAbstractProperty extends Ember.Object {
  @abstract('my-module-name') mustBeOverridden() {}
}
const foo = ObjectWithAbstractProperty.create({
  mustBeOverridden: 42
});
foo.get('mustBeOverridden') // return 42
```

## Installation

```bash
ember install ember-abstract-macro
```

## Addon Maintenance

### Installation

* `git clone https://github.com/shamcode/ember-abstract-macro.git`
* `cd ember-abstract-macro`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
