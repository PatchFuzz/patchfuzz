



class b extends RegExp {
  exec() {
    (function() { (a = (function({} = this) {})) => {} })
  }
}
assertThrows(()=>'a'.match(new b), TypeError);
