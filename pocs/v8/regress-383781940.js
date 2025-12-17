let a = 0;
a = 0x4fff0000;

function foo(o) {
  
  with (o) {
    return a != null;
  }
}
foo({});
