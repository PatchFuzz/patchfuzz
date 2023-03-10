





function __f_41() {
    return "abc".charCodeAt(undefined/2);
}

%PrepareFunctionForOptimization(__f_41);
print(97, __f_41());
%OptimizeMaglevOnNextCall(__f_41);
print(97, __f_41());
