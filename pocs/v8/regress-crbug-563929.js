var x = 0;
function a() {
  eval("");
  return (function() {
    eval("");
    return (function() {
      eval("");
      return (function() {
        eval("");
        return (function() {
          eval("");
          return (function() {
            eval("");
            return (function() {
              eval("");
              return (function() {
                eval("");
                return x;
              })();
            }) ();
          })();
        })();
      })();
    })();
  })();
}
print(a(), 0);
