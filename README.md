# Factory code location differences between Ivy and View Engine

This application contains the following structure:

- a shared ngmodule called `SharedModule` containing a component called `SharedComponent`
- two lazy routes (`lazy-one` and `lazy-two`) that import `SharedModule` and use `SharedComponent`
- a root `AppModule` that also imports `SharedModule`
- `SharedComponent` is not used by any template outside the lazy routes

You can change between Ivy and VE by flipping the `"enableIvy": true,` switch in `tsconfig.json`.

Running `ng build --prod` with Ivy shows the following bundles:
```
chunk {0} runtime.js, runtime.js.map (runtime) 2.23 kB [entry] [rendered]
chunk {1} main.js, main.js.map (main) 262 kB [initial] [rendered]
chunk {2} polyfills.js, polyfills.js.map (polyfills) 36 kB [initial] [rendered]
chunk {3} styles.css, styles.css.map (styles) 38 bytes [initial] [rendered]
chunk {4} 4.js, 4.js.map () 852 bytes  [rendered]
chunk {5} 5.js, 5.js.map () 852 bytes  [rendered]
Date: 2019-11-22T14:22:51.177Z - Hash: f09b623e86f3d80f4000 - Time: 33745ms
```

Running `ng build --prod` with VE shows the following bundles:
```
chunk {0} runtime.js, runtime.js.map (runtime) 2.24 kB [entry] [rendered]
chunk {1} common.js, common.js.map (common) 530 bytes  [rendered]
chunk {2} main.js, main.js.map (main) 263 kB [initial] [rendered]
chunk {3} polyfills.js, polyfills.js.map (polyfills) 36 kB [initial] [rendered]
chunk {4} styles.css, styles.css.map (styles) 38 bytes [initial] [rendered]
chunk {5} 5.js, 5.js.map () 1.17 kB  [rendered]
chunk {6} 6.js, 6.js.map () 1.17 kB  [rendered]
Date: 2019-11-22T14:23:43.985Z - Hash: 90d6a92b420719382f49 - Time: 30408ms
```

The main difference is the `common.js` bundle. 
In VE this bundle contains the template factory for `SharedComponent` (`"shared-component works!"`). 
In Ivy this template factory is in `main.js` instead.

However, Ivy will also have the `common.js` If you remove the `SharedModule` import from `AppModule`.


## What's happening

To understand what's happening it is important to understand one important difference between Ivy and VE:
- in VE, compiling a component would generate two files: the original transpiled file and a `.ngfactory.js` file containing the template factory
- in Ivy, compiling a component generates only the original transpiled file

In this example `SharedComponent` is imported via `SharedModule` both through static imports in `AppModule` and in the lazy loaded modules.
However, it is not used in any templates outside of lazy routes.

This leads to the following difference between Ivy and VE:
- in VE, the original `SharedComponent` class is in `main.js` but the `.ngfactory.js` file is in `common.js`
- in Ivy, there is only the original `SharedComponent` class in `main.js`

If you remove the static import for `SharedModule` in `AppModule` there is no longer a chain of static imports in the main module for `SharedComponent` so it will always be in `common.js`, even in Ivy.


## What you can do right now

If you find that with Ivy your main bundle gets larger while the other bundles get smaller, verify that the components and ngmodules that you want to be lazy loaded are only imported in lazy modules.
Anything that you import outside lazy modules can end up in the main bundle.

Meanwhile we'll try to figure out if there's something we can do in Angular itself to help.
