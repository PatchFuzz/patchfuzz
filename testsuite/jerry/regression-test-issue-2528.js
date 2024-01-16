













try {
  eval('for (/a/ in a => { }, a => { }, a => { }) throw 1');
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}

