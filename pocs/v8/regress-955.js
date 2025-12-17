print(-0, parseInt("-0"));
print(0, parseInt("+0"));


print(NaN, parseInt("- 0"));
print(NaN, parseInt("+ 0"));
print(NaN, parseInt("-\t0"));
print(NaN, parseInt("+\t0"));


print(-0, parseInt(" -0"));
print(0, parseInt(" +0"));
print(-0, parseInt("\t-0"));
print(0, parseInt("\t+0"));
