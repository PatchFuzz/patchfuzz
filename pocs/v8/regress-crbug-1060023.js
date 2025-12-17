class b extends RegExp {
  exec() {
    (function() { (a = (function({} = this) {})) => {} })
  }
}
print(()=>'a'.match(new b), TypeError);
