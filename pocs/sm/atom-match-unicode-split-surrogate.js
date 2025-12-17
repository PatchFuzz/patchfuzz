function test(flags) {
  
  
  let s = "\u{10000}";
  let re = RegExp(s, flags + "g");

  for (let i = 0; i < 200; ++i) {
    
    re.lastIndex = 1;

    
    let r = re.exec(s);

    
    print(r[0], s);
    print(r.index, 0);
    print(re.lastIndex, 2);
  }
}


test("u");


test("v");
