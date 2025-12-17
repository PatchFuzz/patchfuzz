function oos() {
  oos();
}

function earlyReturn(num) {
for (var i = 0; i < num; i++) {
  try {
    if (num > 5) {
      oos();
      return;
    }
  }
  catch(e) {
    print("catch " + i);
  }
}
print("done");
}

function earlyBreak(num) {
for (var i = 0; i < num; i++) {
  try {
    if (i > 5) {
     break;
    }
  }
  finally {
    print("finally " + i);
  }
}
print("done");
}

function earlyContinue(num) {
for (var i = 0; i < num; i++) {
  try {
    if (i > 5) {
     continue;
    }
  }
  finally {
    print("finally " + i);
  }
}
print("done");
}

function earlyReturnFromFinally(num)
{

for (var i = 0; i < num; i++) {
  try {
  }
  finally {
    print("finally " + i);
    if (i > 5) {
      return;
    }
  }
}
print("done");
}

function earlyReturnFromCatch(num)
{
for (var i = 0; i < num; i++) {
  try {
    oos();
  }
  catch(e) {
    print("catch " + i);
    if (num > 5) {
      return;
    }
  }
}
print("done");
}

function earlyReturnFromNestedFinally(num)
{
for (var i = 0; i < num; i++) {
  try {
    try {
      if (num > 5) return;
    }
    finally{
        print("inner finally " + i);
    }
  }
  finally {
    print("outer finally " + i);
  }
}
print("done");
}

function earlyReturnFromNestedTFTC(num)
{
for (var i = 0; i < num; i++) {
  try {
    try {
      if (num > 5) return;
    }
    catch (e){
        print("inner catch " + i);
    }
  }
  finally {
    print("outer finally " + i);
  }
}
print("done");
}

function earlyBreakFromNestedTFTC(num)
{
for (var i = 0; i < num; i++) {
  try {
    try {
      if (num > 5) break;
    }
    catch (e){
        print("inner catch " + i);
    }
  }
  finally {
    print("outer finally " + i);
  }
}
print("done");
}

function earlyContinueFromNestedTFTC(num)
{
for (var i = 0; i < num; i++) {
  try {
    try {
      if (num > 5) continue;
    }
    catch (e){
        print("inner catch " + i);
    }
  }
  finally {
    print("outer finally " + i);
  }
}
print("done");
}

function earlyBreakLabelFromNestedTFTC(num)
{
outer:for (var x = 0; x < num; x++) {
for (var i = 0; i < num; i++) {
  try {
    try {
      if (num > 5) break outer;
    }
    catch (e){
        print("inner catch " + i);
    }
  }
  finally {
    print("outer finally " + i);
  }
}
}
print("done");
}

function earlyContinueLabelFromNestedTFTC(num)
{
outer:for (var x = 0; x < num; x++) {
for (var i = 0; i < num; i++) {
  try {
    try {
      if (num > 5) continue outer;
    }
    catch (e){
        print("inner catch " + i);
    }
  }
  finally {
    print("outer finally " + i);
  }
}
}
print("done");
}

function earlyReturnFromCatchInTryFinally(num)
{
for (var i = 0; i < num; i++) {
try {
  try {
    throw "Err";
  }
  catch(e) {
    print("catch " + i);
    if (num > 5) {
      return;
    }
  }
}
finally {
print("finally " + i);
}
}
print("done");
}

function earlyReturnFromCatchInTryCatchTryFinally(num)
{
for (var i = 0; i < num; i++) {
try {
  try {
    throw "Err";
  }
  catch(e) {
    print("catch " + i);
    if (num > 5) {
      return;
    }
  }
}
finally {
print("finally " + i);
}
}
print("done");
}

function earlyReturnFromFinallyInTryFinally(num)
{
for (var i = 0; i < num; i++) {
try {
  try {
    print("try");
  }
  finally {
    print("inner finally " + i);
    return;
  }
}
finally {
print("outer finally " + i);
}
}
print("done");
}

function earlyReturnFromCatchInInfiniteLoop(num)
{
while (true) {
try {
  try {
    throw "Err";
  }
  catch(e) {
    print("infinite loop catch");
    if (num > 5) {
      return;
    }
  }
}
finally {
print("infinite loop finally");
}
}
print("done");
}

function test0() {
  earlyReturn(7);
  print("Done earlyReturn");
  earlyBreak(7);
  print("Done earlyBreak");
  earlyContinue(7);
  print("Done earlyContinue");
  earlyReturnFromFinally(7);
  print("Done earlyReturnFromFinally");
  earlyReturnFromCatch(7);
  print("Done earlyReturnFromCatch");
  earlyReturnFromNestedFinally(7);
  print("Done earlyReturnFromNestedFinally");
  earlyReturnFromNestedTFTC(7);
  print("Done earlyReturnFromNestedTFTC");
  earlyBreakFromNestedTFTC(7);
  print("Done earlyBreakFromNestedTFTC");
  earlyContinueFromNestedTFTC(7);
  print("Done earlyContinueFromNestedTFTC");
  earlyBreakLabelFromNestedTFTC(7);
  print("Done earlyReturnFromNestedTFTC");
  earlyContinueLabelFromNestedTFTC(7);
  print("Done earlyReturnFromNestedTFTC");
  earlyReturnFromCatchInTryFinally(7);
  print("earlyReturnFromCatchInTryFinally");
  earlyReturnFromCatchInTryCatchTryFinally(7);
  print("earlyReturnFromCatchInTryCatchTryFinally");
  earlyReturnFromFinallyInTryFinally(7);
  print("Done earlyReturnFromFinallyInTryFinally");
  earlyReturn(7);
  earlyReturnFromCatchInInfiniteLoop(7);
  print("earlyReturnFromCatchInInfiniteLoop");
}

test0();
test0();
test0();
