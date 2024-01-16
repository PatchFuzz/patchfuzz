





eval(`
  eval("");
  (function f() {
    
    
    return undefined;
  })();
`);


eval(`
  eval(\`
    eval(\\\`
      eval("");
      (function f() {
        return undefined;
      })();
    \\\`);
  \`);
`);
