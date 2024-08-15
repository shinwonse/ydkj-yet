const theGlobalScopeObject =
  (typeof globalThis !== 'undefined') ? globalThis : // ES2020 globalThis
    (typeof global !== 'undefined') ? global : // Node.js
      (typeof window !== 'undefined') ? window : // Browser
        (typeof self !== 'undefined') ? self : // Web Worker
          (new Function('return this'))(); // Direct eval
