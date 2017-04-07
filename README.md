# ember-abstract-macro

[![Build Status](https://travis-ci.org/shamcode/ember-abstract-macro.svg?branch=master)](https://travis-ci.org/shamcode/ember-abstract-macro)
[![npm version](https://badge.fury.io/js/ember-abstract-macro.png)](http://badge.fury.io/js/ember-abstract-macro)
[![Dependency Status](https://david-dm.org/shamcode/ember-abstract-macro.svg)](https://david-dm.org/shamcode/ember-abstract-macro)
[![devDependency Status](https://david-dm.org/shamcode/ember-abstract-macro.svg)](https://david-dm.org/shamcode/ember-abstract-macro#info=devDependencies)
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

## Installation

```bash
ember install ember-abstract-macro
```

## Addon Maintenance

## Installation

* `git clone https://github.com/shamcode/ember-abstract-macro.git`
* `cd ember-abstract-macro`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
