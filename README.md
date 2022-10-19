# Issues with Edge Dev (Chromium Dev) 107 Running a Lit app

This sample app is adapted from the [Polymer/pwa-starter-kit](https://github.com/Polymer/pwa-starter-kit). In particular it uses [pwa-helpers](https://github.com/Polymer/pwa-helpers) for routing and state management.

The sample uses [open-wc](https://open-wc.org/) for its dev server.

## The problem with Dev 107

Start this app with `npm run start`. Open the start screen (https://127.0.0.1:8000/) in Chrome 106, and open a DevTools console. Click the links across the top of the page: "View One", "View Two", "View Three", and repeat. You will see the console log shown in `console-106.png`. Note that the `constructor()` and `firstUpdated()` methods are called _only once_.

Now open the start screen (https://127.0.0.1:8000/) in Edge Dev 107, and open a DevTools console. Click the links across the top of the page: "View One", "View Two", "View Three", and repeat. You will see the console log shown in `console-107.png`. Note that the `constructor()` and `firstUpdated()` methods are called _twice_ before switching views simply loads the page.

## What the issue?

This demo is not keeping any states within a view, but obviously if it was that state would be destroy on a view's second instantiation.

Look a how `navigate` and `loadPage` in `src/actions/app.js`. Loading is done dynamically:

```
const loadPage = page => dispatch => {
  switch (page) {
    case 'view1':
      import('../components/my-view1.js').then(module => {
        console.log(`loadPage: ${page}`);
      });
      break;
  ...
```

It seems that Dev 107 does not a first know that it has loaded a module, and thus loads it again. Version 106 does not have this trouble.

## There's more!

In testing a application now in production with Dev 107, I'm having worse problems. In this case, statically loaded compenents are sometimes being reloaded. I'll try to add this issue to the demo soon.
