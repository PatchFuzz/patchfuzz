










function use_space_then_do_test(depth) {
  try {
    
    var regexp_src = repeat(".(.)", 12) + depth;
    use_space(depth, regexp_src);
    return true;
  } catch (e) {
    assertFalse(("" + e).indexOf("tack") == -1);  
    return false;
  }
}

function use_space(n, regexp_src) {
  if (--n == 0) {
    do_test(regexp_src);
    return;
  }
  use_space(n, regexp_src);
}

function repeat(str, n) {
  var answer = "";
  while (n-- != 0) {
    answer += str;
  }
  return answer;
}

var subject = repeat("y", 200);

function do_test(regexp_src) {
  var re = new RegExp(regexp_src);
  re.test(subject);
}

function try_different_stack_limits() {
  var lower = 100;
  var higher = 100000;
  while (lower < higher - 1) {
    var average = Math.floor((lower + higher) / 2);
    if (use_space_then_do_test(average)) {
      lower = average;
    } else {
      higher = average;
    }
  }
  for (var i = lower - 5; i < higher + 5; i++) {
    use_space_then_do_test(i);
  }
}

try_different_stack_limits();
