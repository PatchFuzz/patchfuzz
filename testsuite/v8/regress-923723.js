





function __f_3() {
  try {
    __f_3();
  } catch(e) {
    eval("let fun = ({a} = {a: 30}) => {");
  }
}
assertThrows(__f_3);
