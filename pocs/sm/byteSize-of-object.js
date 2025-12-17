if (getBuildConfiguration("pointer-byte-size") == 4)
  var s = (s32, s64) => s32
else
  var s = (s32, s64) => s64



function tByteSize(obj) {
  var size = byteSize(obj);
  minorgc();
  if (size != byteSize(obj))
    return 0;
  return size;
}

print(tByteSize({}),                                 s(48,  56));


print(tByteSize({ w: 1 }),                           s(32,  40));
print(tByteSize({ w: 1, x: 2 }),                     s(32,  40));
print(tByteSize({ w: 1, x: 2, y: 3 }),               s(48,  56));
print(tByteSize({ w: 1, x: 2, y: 3, z:4 }),          s(48,  56));
print(tByteSize({ w: 1, x: 2, y: 3, z:4, a: 5 }),    s(64,  72));


print(tByteSize({ 0:0 }),                            s(80,  88));
print(tByteSize({ 0:0, 1:1 }),                       s(80,  88));
print(tByteSize({ 0:0, 1:1, 2:2 }),                  s(80,  88));
print(tByteSize({ 0:0, 1:1, 2:2, 3:3 }),             s(80,  88));
print(tByteSize({ 0:0, 1:1, 2:2, 3:3, 4:4 }),        s(80,  88));



print(tByteSize({ w:1,                     0:0                     }),  s(96,  104));
print(tByteSize({ w:1,                     0:0, 1:1, 2:2           }),  s(96,  104));
print(tByteSize({ w:1,                     0:0, 1:1, 2:2, 3:3, 4:4 }),  s(96,  104));
print(tByteSize({ w:1, x:2, y:3,           0:0                     }),  s(112, 120));
print(tByteSize({ w:1, x:2, y:3,           0:0, 1:1, 2:2           }),  s(112, 120));
print(tByteSize({ w:1, x:2, y:3,           0:0, 1:1, 2:2, 3:3, 4:4 }),  s(112, 120));
print(tByteSize({ w:1, x:2, y:3, z:4, a:6, 0:0                     }),  s(128, 136));
print(tByteSize({ w:1, x:2, y:3, z:4, a:6, 0:0, 1:1, 2:2           }),  s(128, 136));
print(tByteSize({ w:1, x:2, y:3, z:4, a:6, 0:0, 1:1, 2:2, 3:3, 4:4 }),  s(128, 136));


print(tByteSize([]),                                 s(80,  88));
print(tByteSize([1]),                                s(48,  56));
print(tByteSize([1, 2]),                             s(48,  56));
print(tByteSize([1, 2, 3]),                          s(64,  72));
print(tByteSize([1, 2, 3, 4]),                       s(64,  72));
print(tByteSize([1, 2, 3, 4, 5]),                    s(80,  88));
print(tByteSize([1, 2, 3, 4, 5, 6]),                 s(80,  88));
print(tByteSize([1, 2, 3, 4, 5, 6, 7]),              s(112, 120));
print(tByteSize([1, 2, 3, 4, 5, 6, 7, 8]),           s(112, 120));


print(tByteSize(function () {}),                     s(48,  56));
print(tByteSize(function () {}.bind()),              s(80,  88));
print(tByteSize(() => 1),                            s(48,  56));
print(tByteSize(Math.sin),                           s(48,  56));
