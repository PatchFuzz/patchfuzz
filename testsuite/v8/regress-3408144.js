





























function foo() {
  return (0 > ("10"||10) - 1);
}

assertFalse(foo());
