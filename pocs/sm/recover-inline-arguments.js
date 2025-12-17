setJitCompilerOption("baseline.warmup.trigger", 9);
setJitCompilerOption("ion.warmup.trigger", 20);


gczeal(0);

function rcreate_arguments_object_nouse_inner() {
    print(arguments, true);
}
function rcreate_arguments_object_nouse_outer() {
    rcreate_arguments_object_nouse_inner();
    trialInline();
}
function rcreate_arguments_object_oneuse_inner() {
    print(arguments, true);
    return arguments.length;
}
function rcreate_arguments_object_oneuse_outer() {
    rcreate_arguments_object_oneuse_inner(0)
    trialInline();
}

function rcreate_arguments_object_oneuse_inner() {
  print(arguments, true);
  return arguments.length;
}
function rcreate_arguments_object_oneuse_outer() {
    rcreate_arguments_object_oneuse_inner(0)
    trialInline();
}

with ({}) {}
for (var i = 0; i < 100; i++) {
    rcreate_arguments_object_nouse_outer();
    rcreate_arguments_object_oneuse_outer();
}
