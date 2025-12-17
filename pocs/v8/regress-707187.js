let i = 0;
let re = /./g;
re.exec = () => {
  if (i++ == 0) return { length: 2 ** 16 };
  return null;
};

"".replace(re);
