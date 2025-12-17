gczeal(0); 
gcparam('semispaceNurseryEnabled', 0);



var checkFailures = 0;
function checkEq(expect, receive) {
  if (expect === receive) {
    return;
  }

  const e = new Error();
  const [_, line] = e.stack.match(/[^\n]*\n[^\n]*?tests\/([^\n]*:\d+):\d+\n/);
  printErr(`TEST-UNEXPECTED-FAIL | ${line} | Error: Assertion failed. Got ${receive}, expected ${expect}`);
  checkFailures++;
}


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

if (getBuildConfiguration("pointer-byte-size") == 4)
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




function s_ifDependent(str, depSize, clonedSize) {
  
  depSize = s(...depSize);
  clonedSize = s(...clonedSize);

  if (this.stringRepresentation) {
    if (JSON.parse(stringRepresentation(str)).flags.includes("DEPENDENT_BIT")) {
      return depSize;
    } else {
      return clonedSize;
    }
  } else {
    
    const size = byteSize(str);
    if (size == depSize) {
      return depSize;
    } else {
      return clonedSize;
    }
  }
}




















const m32 = (getBuildConfiguration("pointer-byte-size") == 4);
const TA = m32 ? 24 : 32; 
const FA = m32 ? 32 : 32; 
const NA = m32 ? 24 : 32; 
const TN = m32 ? 16 : 24; 
const FN = m32 ? 32 : 32; 
const LN = m32 ? 16 : 24; 
const XN = m32 ? 16 : 24; 
const RN = m32 ? 16 : 24; 
const DN = m32 ? 16 : 24; 
const EN = m32 ? 16 : 24; 






const Nursery = m32 ? s => s + 4 + 4 : s => s + 8 + 0;


checkEq(tByteSize(""),                                               s(TA, TA));
checkEq(tByteSize("1"),                                              s(TA, TA));
checkEq(tByteSize("1234567"),                                        s(TN, TN));
checkEq(tByteSize("12345678"),                                       s(TN, TN));
checkEq(tByteSize("123456789"),                                      s(FN, TN));
checkEq(tByteSize("123456789.12345"),                                s(FN, TN));
checkEq(tByteSize("123456789.123456"),                               s(FN, TN));
checkEq(tByteSize("123456789.1234567"),                              s(FN, FN));
checkEq(tByteSize("123456789.123456789.123"),                        s(FN, FN));
checkEq(tByteSize("123456789.123456789.1234"),                       s(FN, FN));
checkEq(tByteSize("123456789.123456789.12345"),                      s(XN+32, XN+32));
checkEq(tByteSize("123456789.123456789.123456789.1"),                s(XN+32, XN+32));
checkEq(tByteSize("123456789.123456789.123456789.12"),               s(XN+32, XN+32));
checkEq(tByteSize("123456789.123456789.123456789.123"),              s(XN+64, XN+64));

checkEq(nByteSize(""),                                               s(TA, TA));
checkEq(nByteSize("1"),                                              s(TA, TA));
checkEq(nByteSize("1234567"),                                        s(Nursery(TN), Nursery(TN)));
checkEq(nByteSize("12345678"),                                       s(Nursery(TN), Nursery(TN)));
checkEq(nByteSize("123456789"),                                      s(Nursery(FN), Nursery(TN)));
checkEq(nByteSize("123456789.12345"),                                s(Nursery(FN), Nursery(TN)));
checkEq(nByteSize("123456789.123456"),                               s(Nursery(FN), Nursery(TN)));
checkEq(nByteSize("123456789.1234567"),                              s(Nursery(FN), Nursery(FN)));
checkEq(nByteSize("123456789.123456789.123"),                        s(Nursery(FN), Nursery(FN)));
checkEq(nByteSize("123456789.123456789.1234"),                       s(Nursery(FN), Nursery(FN)));
checkEq(nByteSize("123456789.123456789.12345"),                      s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("123456789.123456789.123456789.1"),                s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("123456789.123456789.123456789.12"),               s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("123456789.123456789.123456789.123"),              s(Nursery(XN), Nursery(XN)));

function Atom(s) { return Object.keys({ [s]: true })[0]; }
checkEq(byteSize(Atom("1234567")),                                   s(TA, TA));
checkEq(byteSize(Atom("12345678")),                                  s(TA, FA));
checkEq(byteSize(Atom("123456789.12")),                              s(TA, FA));
checkEq(byteSize(Atom("123456789.123")),                             s(FA, FA));
checkEq(byteSize(Atom("123456789.12345")),                           s(FA, FA));
checkEq(byteSize(Atom("123456789.123456")),                          s(FA, FA));
checkEq(byteSize(Atom("123456789.1234567")),                         s(FA, FA));
checkEq(byteSize(Atom("123456789.123456789.")),                      s(FA, FA));
checkEq(byteSize(Atom("123456789.123456789.1")),                     s(NA+32, NA+32));
checkEq(byteSize(Atom("123456789.123456789.123")),                   s(NA+32, NA+32));
checkEq(byteSize(Atom("123456789.123456789.1234")),                  s(NA+32, NA+32));
checkEq(byteSize(Atom("123456789.123456789.12345")),                 s(NA+32, NA+32));
checkEq(byteSize(Atom("123456789.123456789.123456789.1")),           s(NA+32, NA+32));
checkEq(byteSize(Atom("123456789.123456789.123456789.12")),          s(NA+32, NA+32));
checkEq(byteSize(Atom("123456789.123456789.123456789.123")),         s(NA+48, NA+48));




checkEq(tByteSize("千"),						s(TA, TA));
checkEq(tByteSize("千早"),						s(TN, TN));
checkEq(tByteSize("千早ぶ"),						s(TN, TN));
checkEq(tByteSize("千早ぶる"),						s(TN, TN));
checkEq(tByteSize("千早ぶる神"),						s(FN, TN));
checkEq(tByteSize("千早ぶる神代"),					s(FN, TN));
checkEq(tByteSize("千早ぶる神代も"),					s(FN, TN));
checkEq(tByteSize("千早ぶる神代もき"),					s(FN, TN));
checkEq(tByteSize("千早ぶる神代もきか"),					s(FN, FN));
checkEq(tByteSize("千早ぶる神代もきかず龍"),				s(FN, FN));
checkEq(tByteSize("千早ぶる神代もきかず龍田"),				s(FN, FN));
checkEq(tByteSize("千早ぶる神代もきかず龍田川"),				s(XN+32, XN+32));
checkEq(tByteSize("千早ぶる神代もきかず龍田川 か"),				s(XN+32, XN+32));
checkEq(tByteSize("千早ぶる神代もきかず龍田川 から"),			s(XN+32, XN+32));
checkEq(tByteSize("千早ぶる神代もきかず龍田川 からく"),		s(XN+64, XN+64));
checkEq(tByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水く"),		s(XN+64, XN+64));
checkEq(tByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水くく"),		s(XN+64, XN+64));
checkEq(tByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水くくるとは"),	s(XN+64, XN+64));

checkEq(nByteSize("千"),						s(TA, TA));
checkEq(nByteSize("千早"),						s(Nursery(TN), Nursery(TN)));
checkEq(nByteSize("千早ぶ"),						s(Nursery(TN), Nursery(TN)));
checkEq(nByteSize("千早ぶる"),						s(Nursery(TN), Nursery(TN)));
checkEq(nByteSize("千早ぶる神"),						s(Nursery(FN), Nursery(TN)));
checkEq(nByteSize("千早ぶる神代"),					s(Nursery(FN), Nursery(TN)));
checkEq(nByteSize("千早ぶる神代も"),					s(Nursery(FN), Nursery(TN)));
checkEq(nByteSize("千早ぶる神代もき"),					s(Nursery(FN), Nursery(TN)));
checkEq(nByteSize("千早ぶる神代もきか"),					s(Nursery(FN), Nursery(FN)));
checkEq(nByteSize("千早ぶる神代もきかず龍"),				s(Nursery(FN), Nursery(FN)));
checkEq(nByteSize("千早ぶる神代もきかず龍田"),				s(Nursery(FN), Nursery(FN)));
checkEq(nByteSize("千早ぶる神代もきかず龍田川"),				s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("千早ぶる神代もきかず龍田川 か"),				s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("千早ぶる神代もきかず龍田川 から"),			s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("千早ぶる神代もきかず龍田川 からく"),		s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水く"),		s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水くく"),		s(Nursery(XN), Nursery(XN)));
checkEq(nByteSize("千早ぶる神代もきかず龍田川 からくれなゐに水くくるとは"),	s(Nursery(XN), Nursery(XN)));




var fragment8 = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme"; 
var rope8 = fragment8;
for (var i = 0; i < 10; i++) 
  rope8 = rope8 + rope8;

checkEq(byteSize(rope8),                                               s(Nursery(RN), Nursery(RN)));
minorgc();
checkEq(byteSize(rope8),                                               s(RN, RN));
var matches8 = rope8.match(/(de cuyo nombre no quiero acordarme)/);
checkEq(byteSize(rope8),                                               s(XN + 64 * 1024, XN + 64 * 1024));
var ext8 = rope8; 







var rope8a = ext8 + fragment8;
checkEq(byteSize(rope8a),                                              s(Nursery(RN), Nursery(RN)));
rope8a.match(/x/, function() { checkEq(true, false); });
checkEq(byteSize(rope8a),                                              s(Nursery(XN) + 65536, Nursery(XN) + 65536));
checkEq(byteSize(ext8),                                                s(DN, DN));


checkEq(byteSize(ext8.substr(1000, 2000)),                             s(Nursery(DN), Nursery(DN)));
checkEq(byteSize(matches8[0]),                                         s(Nursery(DN), Nursery(DN)));
checkEq(byteSize(matches8[1]),                                         s(Nursery(DN), Nursery(DN)));


ext8 = copyString(ext8);
rope8a = ext8 + fragment8;
minorgc();
checkEq(byteSize(rope8a),                                              s(RN, RN));
rope8a.match(/x/, function() { checkEq(true, false); });
checkEq(byteSize(rope8a),                                              s(XN + 65536, XN + 65536));
checkEq(byteSize(rope8),                                               s(RN, RN));


function tenure(s) {
  minorgc();
  return s;
}
var sub = tenure(rope8.substr(1000, 2000));
checkEq(byteSize(sub),                                                 s_ifDependent(sub, [DN, DN], [LN+2048, LN+2048]));
checkEq(byteSize(matches8[0]),                                         s_ifDependent(matches8[0], [DN, DN], [LN+48, LN+48]));
checkEq(byteSize(matches8[1]),                                         s_ifDependent(matches8[0], [DN, DN], [LN+48, LN+48]));




var fragment16 = "μουσάων Ἑλικωνιάδων ἀρχώμεθ᾽ ἀείδειν";
var rope16 = fragment16;
for (var i = 0; i < 10; i++) 
  rope16 = rope16 + rope16;
checkEq(byteSize(rope16),                                              s(Nursery(RN), Nursery(RN)));
let matches16 = rope16.match(/(Ἑλικωνιάδων ἀρχώμεθ᾽)/);
checkEq(byteSize(rope16),                                              s(Nursery(XN) + 128 * 1024, Nursery(XN) + 128 * 1024));
var ext16 = rope16;


checkEq(byteSize(ext16.substr(1000, 2000)),                            s(Nursery(DN), Nursery(DN)));
checkEq(byteSize(matches16[0]),                                        s(Nursery(DN), Nursery(DN)));
checkEq(byteSize(matches16[1]),                                        s(Nursery(DN), Nursery(DN)));







rope16a = ext16 + fragment16;
checkEq(byteSize(rope16a),                                             s(Nursery(RN), Nursery(RN)));
rope16a.match(/x/, function() { checkEq(true, false); });
checkEq(byteSize(rope16a),                                             s(Nursery(XN) + 128 * 1024, Nursery(XN) + 128 * 1024));
checkEq(byteSize(ext16),                                               s(Nursery(DN), Nursery(DN)));



ext16 = copyString(ext16);
rope16a = ext16 + fragment16;
minorgc();
finishBackgroundFree();
checkEq(byteSize(rope16a),                                             s(RN, RN));
rope16a.match(/x/, function() { checkEq(true, false); });
checkEq(byteSize(rope16a),                                             s(XN + 128 * 1024, XN + 128 * 1024));
checkEq(byteSize(ext16),                                               s(RN, RN));







checkEq(byteSize(newString("", {external: true})),                          s(EN+16, EN+16));
checkEq(byteSize(newString("1", {external: true})),                         s(EN+16, EN+16));
checkEq(byteSize(newString("12", {external: true})),                        s(EN+16, EN+16));
checkEq(byteSize(newString("123", {external: true})),                       s(EN+16, EN+16));
checkEq(byteSize(newString("1234", {external: true})),                      s(EN+16, EN+16));
checkEq(byteSize(newString("12345", {external: true})),                     s(EN+16, EN+16));
checkEq(byteSize(newString("123456789.123456789.1234", {external: true})),  s(EN+48, EN+48));
checkEq(byteSize(newString("123456789.123456789.12345", {external: true})), s(EN+64, EN+64));




checkEq(byteSize(newString("123456789.123456789.12345")), s(Nursery(XN)+0,Nursery(XN)+0));
checkEq(byteSize(newString("123456789.123456789.123456789.123")), s(Nursery(XN)+0,Nursery(XN)+0));

print(`${checkFailures} failure(s)`, "0 failure(s)");
