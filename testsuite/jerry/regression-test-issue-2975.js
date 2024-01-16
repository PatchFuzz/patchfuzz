


var eval = eval.bind();
try {
  eval('import { c } from "tests/jerry/es.next/module-export-01.mjs";');
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
