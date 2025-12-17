print("exception handler configuration test")

function foo() {
  try {
    undefined();
  } catch (e) {
  }

  try {
    xxx();
  } catch (e) {
  }

  try {
    throw 456;
  } catch (e) {
  }

  try {
    throw new RangeError("Bad range!");
  } catch (e) {
  }
}

foo()
