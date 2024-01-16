





function test() {
  const re = /./y;
  re.lastIndex = 3;
  const str = 'fg';
  return re[Symbol.replace](str, '$');
}

%SetForceSlowPath(false);
const fast = test();
%SetForceSlowPath(true);
const slow = test();
%SetForceSlowPath(false);

assertEquals(slow, fast);
