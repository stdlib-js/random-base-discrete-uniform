// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";function c(e,t){return!h(e)||f(e)?new TypeError(u("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",e)):!h(t)||f(t)?new TypeError(u("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",t)):e>t?new RangeError(u("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",e,t)):null}function v(e,t,n){var r,s,i,o,m,d,p,a;if(0===(i=n-t))return t;if(p=e.MIN,(s=e.MAX-p)===i)return e()-p+t;if(s<i)for(o=0;;){for(i===g?(o=j(i/(s+1)),i%(s+1)===s&&(o+=1)):o=j((i+1)/(s+1)),r=0,d=1;d<=o;){if(r+=(e()-p)*d,d*s==i-d+1)return r;d*=s+1}if(!((a=v(e,0,j(i/d)))>g/d||(r+=a*=d)>i))return r+t}for(s===g?(m=j(s/(i+1)),s%(i+1)===i&&(m+=1)):m=j((s+1)/(i+1));;)if(r=e()-p,(r=j(r/m))<=i)return r+t}function b(){var h,f,g,j,b,y;if(0===arguments.length)f=d();else if(1===arguments.length){if(!r(h=arguments[0]))throw new TypeError(u("0Oz2h",h));if(i(h,"prng")){if(!s(h.prng))throw new TypeError(u("0Oz7M","prng",h.prng));if(f=h.prng,!a(f.MIN))throw new TypeError(u("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!a(f.MAX))throw new TypeError(u("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else f=d(h)}else{if(j=c(b=arguments[0],y=arguments[1]))throw j;if(arguments.length>2){if(!r(h=arguments[2]))throw new TypeError(u("0Oz2h",h));if(i(h,"prng")){if(!s(h.prng))throw new TypeError(u("0Oz7M","prng",h.prng));if(f=h.prng,!a(f.MIN))throw new TypeError(u("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!a(f.MAX))throw new TypeError(u("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else f=d(h)}else f=d()}return e(g=void 0===b?O:A,"NAME","discrete-uniform"),h&&h.prng?(e(g,"seed",null),e(g,"seedLength",null),n(g,"state",o(null),m),e(g,"stateLength",null),e(g,"byteLength",null),e(g,"toJSON",o(null)),e(g,"PRNG",f)):(t(g,"seed",w),t(g,"seedLength",x),n(g,"state",E,T),t(g,"stateLength",N),t(g,"byteLength",M),e(g,"toJSON",L),e(g,"PRNG",f)),g;function w(){return f.seed}function x(){return f.seedLength}function N(){return f.stateLength}function M(){return f.byteLength}function E(){return f.state}function T(e){f.state=e}function L(){var e={type:"PRNG"};return e.name=g.NAME,e.state=l(f.state),e.params=void 0===b?[]:[b,y],e}function A(){return v(f,b,y)}function O(e,t){return p(e)||p(t)||!a(e)||!a(t)||e>t?NaN:v(f,e,t)}}var y=b();e(y,"factory",b);export{y as default,b as factory};
//# sourceMappingURL=index.mjs.map
