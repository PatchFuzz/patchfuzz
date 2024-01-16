



class MyRegExp extends RegExp {
  exec(str) {
    const r = super.exec.call(this, str);
    if (r) r[0] = 0;
    return r;
  }
}

const result = 'a'.match(new MyRegExp('.', 'g'));
assertArrayEquals(result, ['0']);
