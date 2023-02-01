<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Discrete Uniform Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Discrete uniform][discrete-uniform-distribution] distributed pseudorandom numbers.



<section class="usage">

## Usage

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
```

#### discreteUniform( a, b )

Returns a pseudorandom number drawn from a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var r = discreteUniform( 2, 50 );
// returns <number>
```

If either `a` or `b` is not an integer value or `a > b`, the function returns `NaN`.

```javascript
var r = discreteUniform( 20, 10 );
// returns NaN

r = discreteUniform( NaN, 10 );
// returns NaN

r = discreteUniform( 10, NaN );
// returns NaN
```

#### discreteUniform.factory( \[a, b, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [discrete uniform][discrete-uniform-distribution] distribution.

```javascript
var rand = discreteUniform.factory();

var r = rand( 0, 10 );
// returns <number>
```

If provided `a` and `b`, the returned generator returns random variates from the specified distribution.

```javascript
// Draw from discreteUniform( -20, 20 ) distribution:
var rand = discreteUniform.factory( -20, 20 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `a` and `b`, the returned generator requires that both parameters be provided at each invocation.

```javascript
var rand = discreteUniform.factory();

var r = rand( 0, 10 );
// returns <number>

r = rand( -20, 20 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom integers. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable). The provided PRNG **must** have `MIN` and `MAX` properties specifying the minimum and maximum possible pseudorandom integers.
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom integers, set the `prng` option.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var rand = discreteUniform.factory({
    'prng': minstd
});

var r = rand( 20, 40 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = discreteUniform.factory({
    'seed': 12345
});

var r1 = rand1( 20, 40 );
// returns <number>

var rand2 = discreteUniform.factory( 20, 40, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = discreteUniform( 20, 40 );
}

// Create a new PRNG initialized to the current state of `discreteUniform`:
rand = discreteUniform.factory({
    'state': discreteUniform.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 20, 40 ) === discreteUniform( 20, 40 ) );
// returns true
```

#### discreteUniform.NAME

The generator name.

```javascript
var str = discreteUniform.NAME;
// returns 'discrete-uniform'
```

#### discreteUniform.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = discreteUniform.PRNG;
// returns <Function>
```

#### discreteUniform.seed

The value used to seed `discreteUniform()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = discreteUniform( 0, 10 );
}

// Generate the same pseudorandom values...
rand = discreteUniform.factory( 0, 10, {
    'seed': discreteUniform.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var rand = discreteUniform.factory({
    'prng': minstd
});

var seed = rand.seed;
// returns null
```

#### discreteUniform.seedLength

Length of generator seed.

```javascript
var len = discreteUniform.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var rand = discreteUniform.factory({
    'prng': minstd
});

var len = rand.seedLength;
// returns null
```

#### discreteUniform.state

Writable property for getting and setting the generator state.

```javascript
var r = discreteUniform( -10, 10 );
// returns <number>

r = discreteUniform( -10, 10 );
// returns <number>

// ...

// Get a copy of the current state:
var state = discreteUniform.state;
// returns <Uint32Array>

r = discreteUniform( -10, 10 );
// returns <number>

r = discreteUniform( -10, 10 );
// returns <number>

// Reset the state:
discreteUniform.state = state;

// Replay the last two pseudorandom numbers:
r = discreteUniform( -10, 10 );
// returns <number>

r = discreteUniform( -10, 10 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var rand = discreteUniform.factory({
    'prng': minstd
});

var state = rand.state;
// returns null
```

#### discreteUniform.stateLength

Length of generator state.

```javascript
var len = discreteUniform.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var rand = discreteUniform.factory({
    'prng': minstd
});

var len = rand.stateLength;
// returns null
```

#### discreteUniform.byteLength

Size (in bytes) of generator state.

```javascript
var sz = discreteUniform.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed integers, this value is `null`.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var rand = discreteUniform.factory({
    'prng': minstd
});

var sz = rand.byteLength;
// returns null
```

#### discreteUniform.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = discreteUniform.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var rand = discreteUniform.factory({
    'prng': minstd
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( discreteUniform( 0, 100 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = discreteUniform.factory( -20, 20, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = discreteUniform.factory( -20, 20, {
    'seed': discreteUniform.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-discrete-uniform.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-discrete-uniform

[test-image]: https://github.com/stdlib-js/random-base-discrete-uniform/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-discrete-uniform/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-discrete-uniform/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-discrete-uniform?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-discrete-uniform.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-discrete-uniform/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-discrete-uniform/tree/deno
[umd-url]: https://github.com/stdlib-js/random-base-discrete-uniform/tree/umd
[esm-url]: https://github.com/stdlib-js/random-base-discrete-uniform/tree/esm
[branches-url]: https://github.com/stdlib-js/random-base-discrete-uniform/blob/main/branches.md

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/esm

</section>

<!-- /.links -->
