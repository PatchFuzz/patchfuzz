



try {
  d8.file.execute("test/mjsunit/regress/regress-crbug-489597.js-script");
} catch (e) {
}

var o = this;
Error.captureStackTrace(o);
o.stack;
