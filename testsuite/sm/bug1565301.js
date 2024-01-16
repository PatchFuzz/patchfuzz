

const maxSize = Math.pow(2, 29) - 1;



evaluate(`
  offThreadCompileToStencil("\\
    g = (function(t,foreign){\\
        \\"use asm\\";\\
        var ff = foreign.ff;\\
        function f() {\\
            +ff()\\
        }\\
        return f\\
", { lineNumber: (${maxSize})});
`);

evaluate(`
  offThreadCompileToStencil("\\
    g = (function(t,foreign){\\
        \\"use asm\\";\\
        var ff = foreign.ff;\\
        function f() {\\
            +ff()\\
        }\\
        return f\\
", { lineNumber: (${maxSize + 1})});
`);
