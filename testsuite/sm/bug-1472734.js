

try {
    oomTest(function() {
      eval(`
        function eval(source) {
          offThreadCompileModuleToStencil(source);
          minorgc();
        }
        eval("");
      `);
    });
} catch (exc) {}
