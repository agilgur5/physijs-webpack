# PhysiJS Changes

The files here are 99.9% the same as the original [`physijs`](https://github.com/chandlerprall/Physijs) code.
There are a few small modifications to make it compatible with bundlers and work out-of-the-box with zero config:

- accepting the `PhysijsWorker` constructor function as an argument instead of just using `new Worker(...)`
  - this allows for custom workers, such as those of [`worker-loader`](https://github.com/webpack-contrib/worker-loader) and [`webworkify`](https://github.com/browserify/webworkify)
  - it also means one no longer has to set `Physijs.scripts.worker`
- `require`ing `ammo.js` directly in the `physijs_worker.js` file instead of using [`importScripts`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Importing_scripts_and_libraries)
  - this can only be done because of the extra functionality we get from a bundler and its custom worker
  - this means one no longer has to set `Physijs.scripts.ammo`
- slightly change the `Ammo` code so it doesn't try to `require` anything in its Emscripten header
  - Emscripten (or at least the old version that was used to create Physijs's old vendored `ammo.js`) output both web and node code in one file, so it caused issues when being parsed by bundlers (can read more [here](https://github.com/agilgur5/physijs-webpack/commit/0174f2c073f62684c764b83cacf66102445d2218))

[`silviopaganini/physijs-browserify`](https://github.com/silviopaganini/physijs-browserify), which this library was originally based off, also made some changes:

- exporting as a CJS module with `module.exports` instead of a global with `window.Physijs`
- accepting [`THREE`](https://github.com/mrdoob/three.js) as an argument instead of assuming it exists as a global
