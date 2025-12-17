function func() {}


var asmModule = function() {
  'use asm';
  return {};
};

func();
relazifyFunctions();
func();
