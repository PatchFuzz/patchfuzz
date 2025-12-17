async function foo() {
  foo();
  foo.displayName += "AAAAAAAA"  + foo;
  foo.displayName();
}
foo.displayName = "AAAAAAAAA";
for (let i = 0; i < 1e3; i++)
    foo.displayName += "AAAAAAAA"  + foo;
foo();
