var a = [];
for (let i = 0; i < 65535; i++) {
  a.push("x" + i);
}
print(()=>eval("(" + a.join(",") + ")=>{}"));
