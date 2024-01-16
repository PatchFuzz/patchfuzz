












var config = getBuildConfiguration();

gczeal(0); 


{
  const sample_nursery = "x" + "abc".substr(1);
  let nursery_enabled = true;
  const before = byteSize(sample_nursery);
  gc();
  const after = byteSize(sample_nursery);
  if (before == after)
    nursery_enabled = false;
  if (!nursery_enabled) {
    printErr("nursery strings appear to be disabled");
    quit(0);
  }
}



if (getJitCompilerOptions()["ion.warmup.trigger"] <= 100)
    setJitCompilerOption("ion.warmup.trigger", 100);

if (config['pointer-byte-size'] == 4)
  var s = (s32, s64) => s32
else
  var s = (s32, s64) => s64



function copyString(str) {
  if (str.length == 0)
    return str; 
  return ensureLinearString(str.substr(0, 1) + str.substr(1));
}


function nByteSize(str) {
  
  
  return byteSize(copyString(str));
}


function tByteSize(str) {
  
  
  
  str = copyString(str);
  minorgc();
  return byteSize(str);
}


















const m32 = (config['pointer-byte-size'] == 4);
const TA = m32 ? 24 : 32; 
const TN = m32 ? 16 : 24; 
const FN = m32 ? 32 : 32; 
const XN = m32 ? 16 : 24; 
const RN = m32 ? 16 : 24; 
const DN = m32 ? 16 : 24; 
const EN = m32 ? 16 : 24; 






const Nursery = m32 ? s => s + 4 + 4 : s => s + 8 + 0;


assertEq(tByteSize(""),                                               s(TA, TA));
assertEq(tByteSize("1"),                                              s(TA, TA));
assertEq(tByteSize("1234567"),                                        s(TN, TN));
assertEq(tByteSize("12345678"),                                       s(TN, TN));
assertEq(tByteSize("123456789"),                                      s(FN, TN));
assertEq(tByteSize("123456789.12345"),                                s(FN, TN));
assertEq(tByteSize("123456789.123456"),                               s(FN, TN));
assertEq(tByteSize("123456789.1234567"),                              s(FN, FN));
assertEq(tByteSize("123456789.123456789.123"),                        s(FN, FN));
assertEq(tByteSize("123456789.123456789.1234"),                       s(FN, FN));
assertEq(tByteSize("123456789.123456789.12345"),                      s(XN+32, XN+32));
assertEq(tByteSize("123456789.123456789.123456789.1"),                s(XN+32, XN+32));
assertEq(tByteSize("123456789.123456789.123456789.12"),               s(XN+32, XN+32));
assertEq(tByteSize("123456789.123456789.123456789.123"),              s(XN+64, XN+64));

assertEq(nByteSize(""),                                               s(TA, TA));
assertEq(nByteSize("1"),                                              s(TA, TA));
assertEq(nByteSize("1234567"),                                        s(Nursery(TN), Nursery(TN)));
assertEq(nByteSize("12345678"),                                       s(Nursery(TN), Nursery(TN)));
assertEq(nByteSize("123456789"),                                      s(Nursery(FN), Nursery(TN)));
assertEq(nByteSize("123456789.12345"),                                s(Nursery(FN), Nursery(TN)));
assertEq(nByteSize("123456789.123456"),                               s(Nursery(FN), Nursery(TN)));
assertEq(nByteSize("123456789.1234567"),                              s(Nursery(FN), Nursery(FN)));
assertEq(nByteSize("123456789.123456789.123"),                        s(Nursery(FN), Nursery(FN)));
assertEq(nByteSize("123456789.123456789.1234"),                       s(Nursery(FN), Nursery(FN)));
assertEq(nByteSize("123456789.123456789.12345"),                      s(Nursery(XN)+32,Nursery(XN)+32));
assertEq(nByteSize("123456789.123456789.123456789.1"),                s(Nursery(XN)+32,Nursery(XN)+32));
assertEq(nByteSize("123456789.123456789.123456789.12"),               s(Nursery(XN)+32,Nursery(XN)+32));
assertEq(nByteSize("123456789.123456789.123456789.123"),              s(Nursery(XN)+64,Nursery(XN)+64));




assertEq(tByteSize("千"),						s(TA, TA));
assertEq(tByteSize("千早"),						s(TN, TN));
assertEq(tByteSize("千早ぶ"),						s(TN, TN));
assertEq(tByteSize("千早ぶる"),						s(TN, TN));
assertEq(tByteSize("千早ぶる神"),						s(FN, TN));
assertEq(tByteSize("千早ぶる神代"),					s(FN, TN));
assertEq(tByteSize("千早ぶる神代も"),					s(FN, TN));
assertEq(tByteSize("千早ぶる神代もき"),					s(FN, TN));
assertEq(tByteSize("千早ぶる神代もきか"),					s(FN, FN));
assertEq(tByteSize("千早ぶる神代もきかず龍"),				s(FN, FN));
assertEq(tByteSize("千早ぶる神代もきかず龍田"),				s(FN, FN));
assertEq(tByteSize("千早ぶる神代もきかず龍田川"),				s(XN+32, XN+32));
assertEq(tByteSize("千早ぶる神代もきかず龍田川 か"),				s(XN+32, XN+32));
assertEq(tByteSize("千早ぶる神代もきかず龍田川 から"),			s(XN+32, XN+32));
assertEq(tByteSize("千早ぶる神代もきかず龍田川 からく"),		s(XN+64, XN+64));
assertEq(tByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水く"),		s(XN+64, XN+64));
assertEq(tByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水くく"),		s(XN+64, XN+64));
assertEq(tByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水くくるとは"),	s(XN+64, XN+64));

assertEq(nByteSize("千"),						s(TA, TA));
assertEq(nByteSize("千早"),						s(Nursery(TN), Nursery(TN)));
assertEq(nByteSize("千早ぶ"),						s(Nursery(TN), Nursery(TN)));
assertEq(nByteSize("千早ぶる"),						s(Nursery(TN), Nursery(TN)));
assertEq(nByteSize("千早ぶる神"),						s(Nursery(FN), Nursery(TN)));
assertEq(nByteSize("千早ぶる神代"),					s(Nursery(FN), Nursery(TN)));
assertEq(nByteSize("千早ぶる神代も"),					s(Nursery(FN), Nursery(TN)));
assertEq(nByteSize("千早ぶる神代もき"),					s(Nursery(FN), Nursery(TN)));
assertEq(nByteSize("千早ぶる神代もきか"),					s(Nursery(FN), Nursery(FN)));
assertEq(nByteSize("千早ぶる神代もきかず龍"),				s(Nursery(FN), Nursery(FN)));
assertEq(nByteSize("千早ぶる神代もきかず龍田"),				s(Nursery(FN), Nursery(FN)));
assertEq(nByteSize("千早ぶる神代もきかず龍田川"),				s(Nursery(XN)+32, Nursery(XN)+32));
assertEq(nByteSize("千早ぶる神代もきかず龍田川 か"),				s(Nursery(XN)+32, Nursery(XN)+32));
assertEq(nByteSize("千早ぶる神代もきかず龍田川 から"),			s(Nursery(XN)+32, Nursery(XN)+32));
assertEq(nByteSize("千早ぶる神代もきかず龍田川 からく"),		s(Nursery(XN)+64, Nursery(XN)+64));
assertEq(nByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水く"),		s(Nursery(XN)+64, Nursery(XN)+64));
assertEq(nByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水くく"),		s(Nursery(XN)+64, Nursery(XN)+64));
assertEq(nByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水くくるとは"),	s(Nursery(XN)+64, Nursery(XN)+64));




var fragment8 = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme"; 
var rope8 = fragment8;
for (var i = 0; i < 10; i++) 
  rope8 = rope8 + rope8;

assertEq(byteSize(rope8),                                               s(Nursery(RN), Nursery(RN)));
minorgc();
assertEq(byteSize(rope8),                                               s(RN, RN));
var matches8 = rope8.match(/(de cuyo nombre no quiero acordarme)/);
assertEq(byteSize(rope8),                                               s(XN + 65536, XN + 65536));







rope8a = rope8 + fragment8;
assertEq(byteSize(rope8a),                                              s(Nursery(RN), Nursery(RN)));
rope8a.match(/x/, function() { assertEq(true, false); });
assertEq(byteSize(rope8a),                                              s(Nursery(XN) + 65536, Nursery(XN) + 65536));
assertEq(byteSize(rope8),                                               s(RN, RN));





var fragment16 = "μουσάων Ἑλικωνιάδων ἀρχώμεθ᾽ ἀείδειν";
var rope16 = fragment16;
for (var i = 0; i < 10; i++) 
  rope16 = rope16 + rope16;
assertEq(byteSize(rope16),                                              s(Nursery(RN), Nursery(RN)));
let matches16 = rope16.match(/(Ἑλικωνιάδων ἀρχώμεθ᾽)/);
assertEq(byteSize(rope16),                                              s(Nursery(RN) + 131072, Nursery(RN) + 131072));


assertEq(byteSize(rope8.substr(1000, 2000)),                            s(Nursery(DN), Nursery(DN)));
assertEq(byteSize(rope16.substr(1000, 2000)),                           s(Nursery(DN), Nursery(DN)));
assertEq(byteSize(matches8[0]),                                         s(Nursery(DN), Nursery(DN)));
assertEq(byteSize(matches8[1]),                                         s(Nursery(DN), Nursery(DN)));
assertEq(byteSize(matches16[0]),                                        s(Nursery(DN), Nursery(DN)));
assertEq(byteSize(matches16[1]),                                        s(Nursery(DN), Nursery(DN)));







rope16a = rope16 + fragment16;
assertEq(byteSize(rope16a),                                             s(Nursery(RN), Nursery(RN)));
rope16a.match(/x/, function() { assertEq(true, false); });
assertEq(byteSize(rope16a),                                             s(Nursery(XN) + 131072, Nursery(XN) + 131072));
assertEq(byteSize(rope16),                                              s(Nursery(XN), Nursery(XN)));







if (config['windows']) {
  assertEq(byteSize(newString("", {external: true})),                        s(EN+8, EN+16));
  assertEq(byteSize(newString("1", {external: true})),                       s(EN+8, EN+16));
  assertEq(byteSize(newString("12", {external: true})),                      s(EN+8, EN+16));
  assertEq(byteSize(newString("123", {external: true})),                     s(EN+8, EN+16));
  assertEq(byteSize(newString("1234", {external: true})),                    s(EN+8, EN+16));
} else {
  assertEq(byteSize(newString("", {external: true})),                        s(EN+4, EN+8));
  assertEq(byteSize(newString("1", {external: true})),                       s(EN+4, EN+8));
  assertEq(byteSize(newString("12", {external: true})),                      s(EN+4, EN+8));
  assertEq(byteSize(newString("123", {external: true})),                     s(EN+8, EN+8));
  assertEq(byteSize(newString("1234", {external: true})),                    s(EN+8, EN+8));
}
assertEq(byteSize(newString("12345", {external: true})),                     s(EN+16, EN+16));
assertEq(byteSize(newString("123456789.123456789.1234", {external: true})),  s(EN+48, EN+48));
assertEq(byteSize(newString("123456789.123456789.12345", {external: true})), s(EN+64, EN+64));
