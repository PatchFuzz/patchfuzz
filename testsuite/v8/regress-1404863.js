



const template = `class Foo { foo(){} }`



let s = template;
while (true) {
  try {
    eval(s);
  } catch (e) {
    
    break;
  }
  s = s.replace("foo(){}", `foo(){ ${s} }`);
}
