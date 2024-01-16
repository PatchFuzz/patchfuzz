





/\2/.test("1");

function rec() {
  try {
    rec();
  } catch(e) {
    /\2/.test("1");
  }
}

rec();
