function bug944963(x, y) {
    (+(xy))(y % y)
}
for (var i = 0; i < 10; i++) {
    try {
        (function() {
            bug944963(0, (~Math.fround(-8)))
        })()
    } catch (e) {}
}


function bug900437() {
    var x = 0.0;
    for (var i = 0; i < 10; i++)
        -("") >> (x / x);
}
bug900437();
bug900437();


function f(x) {
    var a = x;
    return a / 10;
}
function g(x) {
    var y = x + 1;
    return y / y;
}
for (var i=0; i<10; i++)
    print(f(i * 10), i);
for (var i=0; i<10; i++)
    print(g(i), 1);


function bug939893() {
    bug_g();
}
function bug_g() {
    bug_h(undefined >>> 0, +undefined);
}
function bug_h(x) {
    Math.max(x ? ((x / x) | 0) : 0);
}
for (var a = 0; a < 2; ++a) {
  bug939893();
}


function bug945860(x) {
    return (x % x);
}
for (var i = 0; i < 2; i++) {
    try {
        (function() {
            print(bug945860(1), 0);
        })()
    } catch (e) {}
}



function sdiv_truncate(y) {
  return (y / y)|0;
}
print(sdiv_truncate(5), 1);
print(sdiv_truncate(1), 1);
print(sdiv_truncate(-1), 1);
print(sdiv_truncate(0), 0);
print(sdiv_truncate(-0), 0);
print(sdiv_truncate(1.1), 1);
print(sdiv_truncate(-1.1), 1);
print(sdiv_truncate(Infinity), 0);
print(sdiv_truncate(NaN), 0);
print(sdiv_truncate(undefined), 0);
print(sdiv_truncate(null), 0);

function sdiv(y) {
  return y / y;
}
print(sdiv(5), 1);
print(sdiv(1), 1);
print(sdiv(-1), 1);
print(sdiv(0), NaN);
print(sdiv(-0), NaN);
print(sdiv(1.1), 1);
print(sdiv(-1.1), 1);
print(sdiv(Infinity), NaN);
print(sdiv(NaN), NaN);
print(sdiv(undefined), NaN);
print(sdiv(null), NaN);

function udiv_truncate(y) {
  var yu = y>>>0;
  return (yu / yu)|0;
}
print(udiv_truncate(5), 1);
print(udiv_truncate(1), 1);
print(udiv_truncate(-1), 1);
print(udiv_truncate(0), 0);
print(udiv_truncate(-0), 0);
print(udiv_truncate(1.1), 1);
print(udiv_truncate(-1.1), 1);
print(udiv_truncate(Infinity), 0);
print(udiv_truncate(NaN), 0);
print(udiv_truncate(undefined), 0);
print(udiv_truncate(null), 0);

function shifted_udiv_truncate(y) {
  var yu = y>>>1;
  return (yu / yu)|0;
}
print(shifted_udiv_truncate(5), 1);
print(shifted_udiv_truncate(2), 1);
print(shifted_udiv_truncate(1), 0);
print(shifted_udiv_truncate(-1), 1);
print(shifted_udiv_truncate(0), 0);
print(shifted_udiv_truncate(-0), 0);
print(shifted_udiv_truncate(1.1), 0);
print(shifted_udiv_truncate(-1.1), 1);
print(shifted_udiv_truncate(Infinity), 0);
print(shifted_udiv_truncate(NaN), 0);
print(shifted_udiv_truncate(undefined), 0);
print(shifted_udiv_truncate(null), 0);

function udiv(y) {
  var yu = y>>>0;
  return yu / yu;
}
print(udiv(5), 1);
print(udiv(1), 1);
print(udiv(-1), 1);
print(udiv(0), NaN);
print(udiv(-0), NaN);
print(udiv(1.1), 1);
print(udiv(-1.1), 1);
print(udiv(Infinity), NaN);
print(udiv(NaN), NaN);
print(udiv(undefined), NaN);
print(udiv(null), NaN);

function shifted_udiv(y) {
  var yu = y>>>1;
  return yu / yu;
}
print(shifted_udiv(5), 1);
print(shifted_udiv(2), 1);
print(shifted_udiv(1), NaN);
print(shifted_udiv(-1), 1);
print(shifted_udiv(0), NaN);
print(shifted_udiv(-0), NaN);
print(shifted_udiv(1.1), NaN);
print(shifted_udiv(-1.1), 1);
print(shifted_udiv(Infinity), NaN);
print(shifted_udiv(NaN), NaN);
print(shifted_udiv(undefined), NaN);
print(shifted_udiv(null), NaN);

function smod_truncate(y) {
  return (y % y)|0;
}
print(smod_truncate(5), 0);
print(smod_truncate(1), 0);
print(smod_truncate(-1), 0);
print(smod_truncate(0), 0);
print(smod_truncate(-0), 0);
print(smod_truncate(1.1), 0);
print(smod_truncate(-1.1), 0);
print(smod_truncate(Infinity), 0);
print(smod_truncate(NaN), 0);
print(smod_truncate(undefined), 0);
print(smod_truncate(null), 0);

function smod(y) {
  return y % y;
}
print(smod(5), 0);
print(smod(1), 0);
print(smod(-1), -0);
print(smod(0), NaN);
print(smod(-0), NaN);
print(smod(1.1), 0);
print(smod(-1.1), -0);
print(smod(Infinity), NaN);
print(smod(NaN), NaN);
print(smod(undefined), NaN);
print(smod(null), NaN);

function umod_truncate(y) {
  var yu = y>>>0;
  return (yu % yu)|0;
}
print(umod_truncate(5), 0);
print(umod_truncate(1), 0);
print(umod_truncate(-1), 0);
print(umod_truncate(0), 0);
print(umod_truncate(-0), 0);
print(umod_truncate(1.1), 0);
print(umod_truncate(-1.1), 0);
print(umod_truncate(Infinity), 0);
print(umod_truncate(NaN), 0);
print(umod_truncate(undefined), 0);
print(umod_truncate(null), 0);

function shifted_umod_truncate(y) {
  var yu = y>>>1;
  return (yu % yu)|0;
}
print(shifted_umod_truncate(5), 0);
print(shifted_umod_truncate(2), 0);
print(shifted_umod_truncate(1), 0);
print(shifted_umod_truncate(-1), 0);
print(shifted_umod_truncate(0), 0);
print(shifted_umod_truncate(-0), 0);
print(shifted_umod_truncate(1.1), 0);
print(shifted_umod_truncate(-1.1), 0);
print(shifted_umod_truncate(Infinity), 0);
print(shifted_umod_truncate(NaN), 0);
print(shifted_umod_truncate(undefined), 0);
print(shifted_umod_truncate(null), 0);

function umod(y) {
  var yu = y>>>0;
  return yu % yu;
}
print(umod(5), 0);
print(umod(1), 0);
print(umod(-1), 0);
print(umod(0), NaN);
print(umod(-0), NaN);
print(umod(1.1), 0);
print(umod(-1.1), 0);
print(umod(Infinity), NaN);
print(umod(NaN), NaN);
print(umod(undefined), NaN);
print(umod(null), NaN);

function shifted_umod(y) {
  var yu = y>>>1;
  return yu % yu;
}
print(shifted_umod(5), 0);
print(shifted_umod(2), 0);
print(shifted_umod(1), NaN);
print(shifted_umod(-1), 0);
print(shifted_umod(0), NaN);
print(shifted_umod(-0), NaN);
print(shifted_umod(1.1), NaN);
print(shifted_umod(-1.1), 0);
print(shifted_umod(Infinity), NaN);
print(shifted_umod(NaN), NaN);
print(shifted_umod(undefined), NaN);
print(shifted_umod(null), NaN);

function sdiv_truncate_nonzero(y) {
  if (y == 0) return -202;
  return (y / y)|0;
}
print(sdiv_truncate_nonzero(5), 1);
print(sdiv_truncate_nonzero(1), 1);
print(sdiv_truncate_nonzero(-1), 1);
print(sdiv_truncate_nonzero(0), -202);
print(sdiv_truncate_nonzero(-0), -202);
print(sdiv_truncate_nonzero(1.1), 1);
print(sdiv_truncate_nonzero(-1.1), 1);
print(sdiv_truncate_nonzero(Infinity), 0);
print(sdiv_truncate_nonzero(NaN), 0);
print(sdiv_truncate_nonzero(undefined), 0);
print(sdiv_truncate_nonzero(null), 0);

function sdiv_nonzero(y) {
  if (y == 0) return -202;
  return y / y;
}
print(sdiv_nonzero(5), 1);
print(sdiv_nonzero(1), 1);
print(sdiv_nonzero(-1), 1);
print(sdiv_nonzero(0), -202);
print(sdiv_nonzero(-0), -202);
print(sdiv_nonzero(1.1), 1);
print(sdiv_nonzero(-1.1), 1);
print(sdiv_nonzero(Infinity), NaN);
print(sdiv_nonzero(NaN), NaN);
print(sdiv_nonzero(undefined), NaN);
print(sdiv_nonzero(null), NaN);

function udiv_truncate_nonzero(y) {
  var yu = y>>>0;
  if (yu == 0) return -202;
  return (yu / yu)|0;
}
print(udiv_truncate_nonzero(5), 1);
print(udiv_truncate_nonzero(1), 1);
print(udiv_truncate_nonzero(-1), 1);
print(udiv_truncate_nonzero(0), -202);
print(udiv_truncate_nonzero(-0), -202);
print(udiv_truncate_nonzero(1.1), 1);
print(udiv_truncate_nonzero(-1.1), 1);
print(udiv_truncate_nonzero(Infinity), -202);
print(udiv_truncate_nonzero(NaN), -202);
print(udiv_truncate_nonzero(undefined), -202);
print(udiv_truncate_nonzero(null), -202);

function shifted_udiv_truncate_nonzero(y) {
  var yu = y>>>1;
  if (yu == 0) return -202;
  return (yu / yu)|0;
}
print(shifted_udiv_truncate_nonzero(5), 1);
print(shifted_udiv_truncate_nonzero(2), 1);
print(shifted_udiv_truncate_nonzero(1), -202);
print(shifted_udiv_truncate_nonzero(-1), 1);
print(shifted_udiv_truncate_nonzero(0), -202);
print(shifted_udiv_truncate_nonzero(-0), -202);
print(shifted_udiv_truncate_nonzero(1.1), -202);
print(shifted_udiv_truncate_nonzero(-1.1), 1);
print(shifted_udiv_truncate_nonzero(Infinity), -202);
print(shifted_udiv_truncate_nonzero(NaN), -202);
print(shifted_udiv_truncate_nonzero(undefined), -202);
print(shifted_udiv_truncate_nonzero(null), -202);

function udiv_nonzero(y) {
  var yu = y>>>0;
  if (yu == 0) return -202;
  return yu / yu;
}
print(udiv_nonzero(5), 1);
print(udiv_nonzero(1), 1);
print(udiv_nonzero(-1), 1);
print(udiv_nonzero(0), -202);
print(udiv_nonzero(-0), -202);
print(udiv_nonzero(1.1), 1);
print(udiv_nonzero(-1.1), 1);
print(udiv_nonzero(Infinity), -202);
print(udiv_nonzero(NaN), -202);
print(udiv_nonzero(undefined), -202);
print(udiv_nonzero(null), -202);

function shifted_udiv_nonzero(y) {
  var yu = y>>>1;
  if (yu == 0) return -202;
  return yu / yu;
}
print(shifted_udiv_nonzero(5), 1);
print(shifted_udiv_nonzero(2), 1);
print(shifted_udiv_nonzero(1), -202);
print(shifted_udiv_nonzero(-1), 1);
print(shifted_udiv_nonzero(0), -202);
print(shifted_udiv_nonzero(-0), -202);
print(shifted_udiv_nonzero(1.1), -202);
print(shifted_udiv_nonzero(-1.1), 1);
print(shifted_udiv_nonzero(Infinity), -202);
print(shifted_udiv_nonzero(NaN), -202);
print(shifted_udiv_nonzero(undefined), -202);
print(shifted_udiv_nonzero(null), -202);

function smod_truncate_nonzero(y) {
  if (y == 0) return -202;
  return (y % y)|0;
}
print(smod_truncate_nonzero(5), 0);
print(smod_truncate_nonzero(1), 0);
print(smod_truncate_nonzero(-1), 0);
print(smod_truncate_nonzero(0), -202);
print(smod_truncate_nonzero(-0), -202);
print(smod_truncate_nonzero(1.1), 0);
print(smod_truncate_nonzero(-1.1), 0);
print(smod_truncate_nonzero(Infinity), 0);
print(smod_truncate_nonzero(NaN), 0);
print(smod_truncate_nonzero(undefined), 0);
print(smod_truncate_nonzero(null), 0);

function smod_nonzero(y) {
  if (y == 0) return -202;
  return y % y;
}
print(smod_nonzero(5), 0);
print(smod_nonzero(1), 0);
print(smod_nonzero(-1), -0);
print(smod_nonzero(0), -202);
print(smod_nonzero(-0), -202);
print(smod_nonzero(1.1), 0);
print(smod_nonzero(-1.1), -0);
print(smod_nonzero(Infinity), NaN);
print(smod_nonzero(NaN), NaN);
print(smod_nonzero(undefined), NaN);
print(smod_nonzero(null), NaN);

function umod_truncate_nonzero(y) {
  var yu = y>>>0;
  if (yu == 0) return -202;
  return (yu % yu)|0;
}
print(umod_truncate_nonzero(5), 0);
print(umod_truncate_nonzero(1), 0);
print(umod_truncate_nonzero(-1), 0);
print(umod_truncate_nonzero(0), -202);
print(umod_truncate_nonzero(-0), -202);
print(umod_truncate_nonzero(1.1), 0);
print(umod_truncate_nonzero(-1.1), 0);
print(umod_truncate_nonzero(Infinity), -202);
print(umod_truncate_nonzero(NaN), -202);
print(umod_truncate_nonzero(undefined), -202);
print(umod_truncate_nonzero(null), -202);

function shifted_umod_truncate_nonzero(y) {
  var yu = y>>>1;
  if (yu == 0) return -202;
  return (yu % yu)|0;
}
print(shifted_umod_truncate_nonzero(5), 0);
print(shifted_umod_truncate_nonzero(2), 0);
print(shifted_umod_truncate_nonzero(1), -202);
print(shifted_umod_truncate_nonzero(-1), 0);
print(shifted_umod_truncate_nonzero(0), -202);
print(shifted_umod_truncate_nonzero(-0), -202);
print(shifted_umod_truncate_nonzero(1.1), -202);
print(shifted_umod_truncate_nonzero(-1.1), 0);
print(shifted_umod_truncate_nonzero(Infinity), -202);
print(shifted_umod_truncate_nonzero(NaN), -202);
print(shifted_umod_truncate_nonzero(undefined), -202);
print(shifted_umod_truncate_nonzero(null), -202);

function umod_nonzero(y) {
  var yu = y>>>0;
  if (yu == 0) return -202;
  return yu % yu;
}
print(umod_nonzero(5), 0);
print(umod_nonzero(1), 0);
print(umod_nonzero(-1), 0);
print(umod_nonzero(0), -202);
print(umod_nonzero(-0), -202);
print(umod_nonzero(1.1), 0);
print(umod_nonzero(-1.1), 0);
print(umod_nonzero(Infinity), -202);
print(umod_nonzero(NaN), -202);
print(umod_nonzero(undefined), -202);
print(umod_nonzero(null), -202);

function shifted_umod_nonzero(y) {
  var yu = y>>>1;
  if (yu == 0) return -202;
  return yu % yu;
}
print(shifted_umod_nonzero(5), 0);
print(shifted_umod_nonzero(2), 0);
print(shifted_umod_nonzero(1), -202);
print(shifted_umod_nonzero(-1), 0);
print(shifted_umod_nonzero(0), -202);
print(shifted_umod_nonzero(-0), -202);
print(shifted_umod_nonzero(1.1), -202);
print(shifted_umod_nonzero(-1.1), 0);
print(shifted_umod_nonzero(Infinity), -202);
print(shifted_umod_nonzero(NaN), -202);
print(shifted_umod_nonzero(undefined), -202);
print(shifted_umod_nonzero(null), -202);

function sdiv_truncate_positive(y) {
  if (y <= 0) return -202;
  return (y / y)|0;
}
print(sdiv_truncate_positive(5), 1);
print(sdiv_truncate_positive(1), 1);
print(sdiv_truncate_positive(-1), -202);
print(sdiv_truncate_positive(0), -202);
print(sdiv_truncate_positive(-0), -202);
print(sdiv_truncate_positive(1.1), 1);
print(sdiv_truncate_positive(-1.1), -202);
print(sdiv_truncate_positive(Infinity), 0);
print(sdiv_truncate_positive(NaN), 0);
print(sdiv_truncate_positive(undefined), 0);
print(sdiv_truncate_positive(null), -202);

function sdiv_positive(y) {
  if (y <= 0) return -202;
  return y / y;
}
print(sdiv_positive(5), 1);
print(sdiv_positive(1), 1);
print(sdiv_positive(-1), -202);
print(sdiv_positive(0), -202);
print(sdiv_positive(-0), -202);
print(sdiv_positive(1.1), 1);
print(sdiv_positive(-1.1), -202);
print(sdiv_positive(Infinity), NaN);
print(sdiv_positive(NaN), NaN);
print(sdiv_positive(undefined), NaN);
print(sdiv_positive(null), -202);

function udiv_truncate_positive(y) {
  var yu = y>>>0;
  if (yu <= 0) return -202;
  return (yu / yu)|0;
}
print(udiv_truncate_positive(5), 1);
print(udiv_truncate_positive(1), 1);
print(udiv_truncate_positive(-1), 1);
print(udiv_truncate_positive(0), -202);
print(udiv_truncate_positive(-0), -202);
print(udiv_truncate_positive(1.1), 1);
print(udiv_truncate_positive(-1.1), 1);
print(udiv_truncate_positive(Infinity), -202);
print(udiv_truncate_positive(NaN), -202);
print(udiv_truncate_positive(undefined), -202);
print(udiv_truncate_positive(null), -202);

function shifted_udiv_truncate_positive(y) {
  var yu = y>>>1;
  if (yu <= 0) return -202;
  return (yu / yu)|0;
}
print(shifted_udiv_truncate_positive(5), 1);
print(shifted_udiv_truncate_positive(2), 1);
print(shifted_udiv_truncate_positive(1), -202);
print(shifted_udiv_truncate_positive(-1), 1);
print(shifted_udiv_truncate_positive(0), -202);
print(shifted_udiv_truncate_positive(-0), -202);
print(shifted_udiv_truncate_positive(1.1), -202);
print(shifted_udiv_truncate_positive(-1.1), 1);
print(shifted_udiv_truncate_positive(Infinity), -202);
print(shifted_udiv_truncate_positive(NaN), -202);
print(shifted_udiv_truncate_positive(undefined), -202);
print(shifted_udiv_truncate_positive(null), -202);

function udiv_positive(y) {
  var yu = y>>>0;
  if (yu <= 0) return -202;
  return yu / yu;
}
print(udiv_positive(5), 1);
print(udiv_positive(1), 1);
print(udiv_positive(-1), 1);
print(udiv_positive(0), -202);
print(udiv_positive(-0), -202);
print(udiv_positive(1.1), 1);
print(udiv_positive(-1.1), 1);
print(udiv_positive(Infinity), -202);
print(udiv_positive(NaN), -202);
print(udiv_positive(undefined), -202);
print(udiv_positive(null), -202);

function shifted_udiv_positive(y) {
  var yu = y>>>1;
  if (yu <= 0) return -202;
  return yu / yu;
}
print(shifted_udiv_positive(5), 1);
print(shifted_udiv_positive(2), 1);
print(shifted_udiv_positive(1), -202);
print(shifted_udiv_positive(-1), 1);
print(shifted_udiv_positive(0), -202);
print(shifted_udiv_positive(-0), -202);
print(shifted_udiv_positive(1.1), -202);
print(shifted_udiv_positive(-1.1), 1);
print(shifted_udiv_positive(Infinity), -202);
print(shifted_udiv_positive(NaN), -202);
print(shifted_udiv_positive(undefined), -202);
print(shifted_udiv_positive(null), -202);

function smod_truncate_positive(y) {
  if (y <= 0) return -202;
  return (y % y)|0;
}
print(smod_truncate_positive(5), 0);
print(smod_truncate_positive(1), 0);
print(smod_truncate_positive(-1), -202);
print(smod_truncate_positive(0), -202);
print(smod_truncate_positive(-0), -202);
print(smod_truncate_positive(1.1), 0);
print(smod_truncate_positive(-1.1), -202);
print(smod_truncate_positive(Infinity), 0);
print(smod_truncate_positive(NaN), 0);
print(smod_truncate_positive(undefined), 0);
print(smod_truncate_positive(null), -202);

function smod_positive(y) {
  if (y <= 0) return -202;
  return y % y;
}
print(smod_positive(5), 0);
print(smod_positive(1), 0);
print(smod_positive(-1), -202);
print(smod_positive(0), -202);
print(smod_positive(-0), -202);
print(smod_positive(1.1), 0);
print(smod_positive(-1.1), -202);
print(smod_positive(Infinity), NaN);
print(smod_positive(NaN), NaN);
print(smod_positive(undefined), NaN);
print(smod_positive(null), -202);

function umod_truncate_positive(y) {
  var yu = y>>>0;
  if (yu <= 0) return -202;
  return (yu % yu)|0;
}
print(umod_truncate_positive(5), 0);
print(umod_truncate_positive(1), 0);
print(umod_truncate_positive(-1), 0);
print(umod_truncate_positive(0), -202);
print(umod_truncate_positive(-0), -202);
print(umod_truncate_positive(1.1), 0);
print(umod_truncate_positive(-1.1), 0);
print(umod_truncate_positive(Infinity), -202);
print(umod_truncate_positive(NaN), -202);
print(umod_truncate_positive(undefined), -202);
print(umod_truncate_positive(null), -202);

function shifted_umod_truncate_positive(y) {
  var yu = y>>>1;
  if (yu <= 0) return -202;
  return (yu % yu)|0;
}
print(shifted_umod_truncate_positive(5), 0);
print(shifted_umod_truncate_positive(2), 0);
print(shifted_umod_truncate_positive(1), -202);
print(shifted_umod_truncate_positive(-1), 0);
print(shifted_umod_truncate_positive(0), -202);
print(shifted_umod_truncate_positive(-0), -202);
print(shifted_umod_truncate_positive(1.1), -202);
print(shifted_umod_truncate_positive(-1.1), 0);
print(shifted_umod_truncate_positive(Infinity), -202);
print(shifted_umod_truncate_positive(NaN), -202);
print(shifted_umod_truncate_positive(undefined), -202);
print(shifted_umod_truncate_positive(null), -202);

function umod_positive(y) {
  var yu = y>>>0;
  if (yu <= 0) return -202;
  return yu % yu;
}
print(umod_positive(5), 0);
print(umod_positive(1), 0);
print(umod_positive(-1), 0);
print(umod_positive(0), -202);
print(umod_positive(-0), -202);
print(umod_positive(1.1), 0);
print(umod_positive(-1.1), 0);
print(umod_positive(Infinity), -202);
print(umod_positive(NaN), -202);
print(umod_positive(undefined), -202);
print(umod_positive(null), -202);

function shifted_umod_positive(y) {
  var yu = y>>>1;
  if (yu <= 0) return -202;
  return yu % yu;
}
print(shifted_umod_positive(5), 0);
print(shifted_umod_positive(2), 0);
print(shifted_umod_positive(1), -202);
print(shifted_umod_positive(-1), 0);
print(shifted_umod_positive(0), -202);
print(shifted_umod_positive(-0), -202);
print(shifted_umod_positive(1.1), -202);
print(shifted_umod_positive(-1.1), 0);
print(shifted_umod_positive(Infinity), -202);
print(shifted_umod_positive(NaN), -202);
print(shifted_umod_positive(undefined), -202);
print(shifted_umod_positive(null), -202);
