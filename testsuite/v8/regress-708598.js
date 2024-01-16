





assertThrows(`function lazy_does_not_compile(x) {
                break;
              }
              new lazy_does_not_compile();`, SyntaxError);
